/**
 * BLOCK: bu-button-cgb
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

// External dependencies.
import classnames from 'classnames';

// Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	IconButton,
	PanelBody,
	SelectControl,
	TextareaControl,
	Spinner,
} = wp.components;
const {
	Fragment,
	useState,
	useEffect,
} = wp.element;
const {
	MediaUpload,
	MediaUploadCheck,
	RichText,
} = wp.editor;
const {
	useBlockProps,
	MediaPlaceholder,
	InspectorControls,
	BlockControls,
	MediaReplaceFlow,
} = wp.blockEditor;

const {
	isBlobURL,
	getBlobByURL,
	revokeBlobURL,
} = wp.blob;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className Default and additional classes applied to the block.
 * @return {string} The class list for the block.
 */
const getClasses = ( className ) => {
	return (
		classnames(
			className,
			{
			}
		)
	);
};

// Register the block.
registerBlockType( 'bu-blocks/slideshow-image', {
	title: __( 'Slideshow Image' ),
	description: __( 'A single image within a Slideshow Block' ),
	icon: 'format-image',
	category: 'bu-editorial',
	parent: [ 'bu-blocks/slideshow' ],
	apiVersion: 2,
	attributes: {
		caption: {
			type: 'string',
			default: '',
		},
		imageFocus: {
			type: 'string',
			default: 'center-middle',
		},
		imageId: {
			type: 'number',
			default: 0,
		},
		imageUrl: {
			type: 'string',
			default: '',
		},
		imageAlt: {
			type: 'string',
			default: '',
		},
	},

	edit( props ) {
		const {
			attributes: {
				caption,
				imageFocus,
				imageId,
				imageUrl,
				imageAlt,
			},
			className,
			isSelected,
			setAttributes,
		} = props;

		const [ temporaryURL, setTemporaryURL ] = useState();

		// Determine if the current image is a temporary image
		// (i.e., one that has been uploaded but not yet saved).
		//const isTemporaryImage = ( imageId, imageUrl ) => ! imageId && isBlobURL( imageUrl );

		// Show a spinner while the image is being uploaded.
		//const isUploading = isTemporaryImage( imageId, imageUrl );
		const isUploading = !! temporaryURL && isBlobURL( temporaryURL );

		// // Upload a temporary image and set the temporary URL while it is uploading.
		// useEffect( () => {
		// 	if ( ! isUploading ) {
		// 		return;
		// 	}

		// 	const blob = getBlobByURL( imageUrl );

		// 	if ( blob ) {
		// 		setTemporaryURL( imageUrl );
		// 	}
		// }, [] );

		// If the image is temporary, revoke the Blob URL when it is
		// finished uploading and no longer tempoary.
		useEffect( () => {
			if ( ! temporaryURL ) {
				return;
			}

			console.log( 'Revoking temporary URL:', temporaryURL );

			return () => {
				revokeBlobURL( temporaryURL );
			};
		}, [ temporaryURL ] );



		/**
		 * Removes the selected image.
		 */
		const onRemoveImage = () => {
			setAttributes( { imageId: undefined, imageUrl: undefined, imageAlt: undefined } );
		};

		/**
		 * Sets the selected image.
		 *
		 * @param {object} image The selected image.
		 */
		const onSelectImage = ( image ) => {
			if ( ! image || ! image.url ) {
				setTemporaryURL( undefined );
				setAttributes( { imageId: undefined, imageUrl: undefined, imageAlt: undefined } );
				return;
			}
			console.log( 'Selected image:', image );
			if ( isBlobURL( image.url ) ) {
				console.log( 'Image is a Blob URL, setting temporary URL.' );
				setTemporaryURL( image.url );
				return;
			}

			// Clear the temporary URL if the image has finished uploading.
			setTemporaryURL( undefined );

			setAttributes( { imageId: image.id, imageUrl: image.url, imageAlt: image.alt } );
		};

		const blockProps = useBlockProps( {
			className: getClasses( className ),
			style: {
				objectPosition: imageFocus.replace( '-', ' ' ),
			},
			'data-image-id': imageId,
		} );

		return (
			<li { ...blockProps }>
				<figure className="wp-block-bu-blocks-slideshow-image__media" data-uploading={ isUploading }>
					{ isUploading && (
						<Spinner />
					) }
					{ imageId || temporaryURL ? (
						<img
							src={ temporaryURL || imageUrl }
							alt={ imageAlt }
						/>
					) : (
						<MediaPlaceholder
							icon="format-image"
							labels={ {
								title: __( 'Add an Image' ),
								instructions: __( 'Drag, upload, or select a file from your library.' ),
							} }
							onSelect={ onSelectImage }
							allowedTypes={ [ 'image' ] }
						/>
					) }
					<figcaption className="wp-block-bu-blocks-slideshow-image__caption">
						<RichText
							tagName="span"
							value={ caption }
							onChange={ value => setAttributes( { caption: value } ) }
							placeholder={ __( 'Write caption…' ) }
							formattingControls={ [ 'bold', 'italic', 'link' ] }
							keepPlaceholderOnFocus
						/>
					</figcaption>
				</figure>
				<BlockControls group="other">
					<MediaReplaceFlow
						mediaId={ imageId }
						mediaURL={ imageUrl }
						allowedTypes={ [ 'image' ] }
						accept="image/*"
						onSelect={ onSelectImage }
						//onError={ onUploadError }
					/>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( 'Image' ) }>
						{ imageId && (
							<TextareaControl
								label={ __( 'Alt Text' ) }
								rows={ 3 }
								value={ imageAlt }
								onChange={ value => setAttributes( { imageAlt: value } ) }
							/>
						)}
					</PanelBody>
					<PanelBody title={ __( 'Display Settings' ) }>
						<SelectControl
							className="wp-block-editorial-slideshow-edit-slide-image-controls__focus"
							label={ __( 'Crop Media to:' ) }
							value={ imageFocus }
							onChange={ option => {
								setAttributes( { imageFocus: option } );
							} }
							options={ [
								{ value: 'left-top', label: __( 'Left Top' ) },
								{ value: 'left-middle', label: __( 'Left Middle' ) },
								{ value: 'left-bottom', label: __( 'Left Bottom' ) },
								{ value: 'center-top', label: __( 'Center Top' ) },
								{ value: 'center-middle', label: __( 'Center Middle' ) },
								{ value: 'center-bottom', label: __( 'Center Bottom' ) },
								{ value: 'right-top', label: __( 'Right Top' ) },
								{ value: 'right-middle', label: __( 'Right Middle' ) },
								{ value: 'right-bottom', label: __( 'Right Bottom' ) },
							] }
						/>
					</PanelBody>
				</InspectorControls>
			</li>
		);
	},

	// Block is rendered in PHP, so save function returns null.
	save() {
		return null;
	},
} );
