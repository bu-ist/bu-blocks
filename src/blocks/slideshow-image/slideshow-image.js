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
} = wp.components;
const {
	Fragment,
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
} = wp.blockEditor;


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


		/**
		 * Removes the selected image.
		 */
		const onRemoveImage = () => {
			setAttributes( { imageId: 0, imageUrl: '', imageAlt: '' } );
		};

		/**
		 * Sets the selected image.
		 *
		 * @param {object} image The selected image.
		 */
		const onSelectImage = ( image ) => {
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
				<figure className="bu-blocks-slideshow-media">
					{ imageId ? (
						<img
							src={ imageUrl }
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
					<figcaption className="bu-blocks-slideshow-media-caption">
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
				<InspectorControls>
					<PanelBody title={ __( 'Image' ) }>
						{ imageId ? (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ onSelectImage }
									allowedTypes={ [ 'image' ] }
									value={ imageId }
									render={ ( { open } ) => (
										<div className="wp-block-editorial-slideshow-edit-slide-image-controls">
											<IconButton
												className="wp-block-editorial-slideshow-edit-slide-image-controls__edit"
												icon="edit"
												label={ __( 'Edit Image' ) }
												onClick={ open }
											/>
											<IconButton
												className="wp-block-editorial-slideshow-edit-slide-image-controls__remove"
												icon="no"
												label={ __( 'Remove Image' ) }
												onClick={ onRemoveImage }
											/>
										</div>
									) }
								/>
							</MediaUploadCheck>
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
