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
	Path,
	RadioControl,
	SelectControl,
	SVG,
	ToggleControl,
} = wp.components;
const {
	Fragment,
} = wp.element;
const {
	InspectorControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} = wp.editor;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string}  aspectRatio The value of the aspect ratio option.
 * @param {string}  className   Default and additional classes applied to the block.
 * @param {boolean} crop        Whether the Crop option is toggled on.
 * @param {boolean} showNextUp  Whether the Show Next Up option is toggled on.
 */
const getClasses = ( aspectRatio, className, crop, showNextUp ) => {
	return (
		classnames(
			'js-bu-blocks-slideshow',
			className,
			{
				'has-crop': crop,
				'has-shownextup': showNextUp,
				[ `has-aspectratio-${aspectRatio}` ]: aspectRatio,
			}
		)
	);
}

/**
 * Return a string for use in slide classes using the provided index.
 *
 * @param {number} index The zero-indexed position of the slide.
 */
const slideIndex = ( index ) => {
	const oneIndexed = index + 1;

	return oneIndexed.toString().padStart( 3, '0' );
};

/**
 * Return the image markup for a slide.
 *
 * @param {object} slide Object with slide data.
 */
const imageMarkup = ( slide ) => {
	return (
		<Fragment>
			<div
				className="bu-blocks-slideshow-media-backfill"
				style={ { backgroundImage: `url(${ slide.imageUrl })` } }
			></div>
			<img
				className={ classnames(
					'bu-blocks-slideshow-media-actual',
					{ [ `wp-image-${slide.imageId}` ]: slide.imageId, },
				) }
				src={ slide.imageUrl }
			/>
		</Fragment>
	);
};

/**
 * Return the block markup.
 *
 * @param {array} slides Array of objects containing slide data.
 */
const blockMarkup = ( slides ) => {
	// Define widths for the `ul` and `li` elements based on the number of slides.
	const ulWidth = `${ slides.length }00%`;
	const liWidth = `calc(${ 100 / slides.length }% - 2px)`;

	return (
		<Fragment>
			<div className="bu-blocks-slideshow-media-container">

				<div className="back js-bu-blocks-slideshow-back-onmedia-btn"></div>
				<div className="forward js-bu-blocks-slideshow-forward-onmedia-btn"></div>

				<ul
					className="bu-blocks-slideshow-media-track js-bu-blocks-slideshow-media-track js-bu-blocks-slideshow-forward-ontrack-btn"
					style={ { width: ulWidth } }
				>

					{ slides.map( ( slide, index ) =>
						<li
							className={ `js-bu-blocks-slideshow-media-track-item bu-blocks-slideshow-media bu-blocks-slideshow-media-${ slideIndex( index ) } has-mediafocus-${ slide.imageFocus }` }
							style={ { width: liWidth } }
						>{ imageMarkup( slide ) }</li>
					) }

				</ul>

			</div>

			<div className="bu-blocks-slideshow-caption-container bu-blocks-slideshow-caption-container-collapsed js-bu-blocks-slideshow-caption-container">

				<ul
					className="bu-blocks-slideshow-caption-track js-bu-blocks-slideshow-caption-track"
					style={ { width: ulWidth } }
				>

					{ slides.map( ( slide, index ) =>
						<li
							className={ `bu-blocks-slideshow-caption bu-blocks-slideshow-caption-${ slideIndex( index ) } js-bu-blocks-slideshow-caption-item` }
							style={ { width: liWidth } }
						>
							<p>{ slide.caption }</p>
						</li>
					) }

				</ul>

				<div className="bu-blocks-slideshow-caption-expander js-bu-blocks-slideshow-caption-btn"><span className="icon-navigatedown"></span> {__( 'read full caption' ) }</div>

			</div>

			<div className="bu-blocks-slideshow-controls">
				<div className="bu-blocks-slideshow-controls-previous js-bu-blocks-slideshow-back-btn">
					<span className="icon-navigateleft"></span>
				</div>
				<div className="bu-blocks-slideshow-controls-next js-bu-blocks-slideshow-forward-btn">
					<span className="icon-navigateright"></span>
				</div>
			</div>
		</Fragment>
	);
};

// Empty slide object.
const emptySlide = {
	caption: '',
	imageFocus: 'middle-center',
	imageId: '',
	imageUrl: '',
};

// Register the block.
registerBlockType( 'editorial/slideshow', {
	title: __( 'Slideshow' ),
	description: __( 'Feature multiple photos in a slideshow carousel.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu-editorial',
	attributes: {
		aspectRatio: {
			type: 'string',
			default: '16by9',
		},
		className: {
			type: 'string',
			default: '',
		},
		crop: {
			type: 'boolean',
			default: false,
		},
		showNextUp: {
			type: 'boolean',
			default: false,
		},
		slides: {
			type: 'array',
			default: [ emptySlide, emptySlide ],
		},
	},

	edit( props ) {
		const {
			attributes: {
				aspectRatio,
				crop,
				showNextUp,
				slides,
			},
			className,
			isSelected,
			setAttributes,
		} = props;

		/**
		 * Display the editing interface for the provided slide.
		 *
		 * @param {array}  slide Array of values for the provided slide.
		 * @param {number} index The index of the provided slide.
		 */
		const slideEdit = ( slide, index ) => {
			/**
			 * Removes the slide image.
			 */
			const onRemoveImage = () => {
				const newSlides = Object.values( {
					...slides,
					[ index ]: {
						...slides[ index ],
						imageId: '',
						imageUrl: '',
					}
				} );

				setAttributes( { slides: newSlides } );
			};

			/**
			 * Sets the slide image.
			 *
			 * @param {object} image The selected image.
			 */
			const onSelectImage = ( image ) => {
				if ( ! image || ! image.url ) {
					onRemoveImage();

					return;
				}

				const newSlides = Object.values( {
					...slides,
					[ index ]: {
						...slides[ index ],
						imageId: image.id,
						imageUrl: image.url,
					}
				} );

				setAttributes( { slides: newSlides } );
			};

			return (
				<div className="wp-block-editorial-slideshow-edit-slide">
					<IconButton
						className="wp-block-editorial-slideshow-edit-slide__remove-slide"
						icon="no-alt"
						isButton
						isDefault
						isLarge
						label={ __( 'Remove Slide' ) }
						onClick={ () => {
							slides.splice( index, 1 );

							setAttributes( { slides: [ ...slides ] } );
						} }
					>{ __( 'Remove Slide' ) }</IconButton>
					{ slide.imageId ? (
						<div className={ classnames( 'wp-block-editorial-slideshow-edit-slide-image', { 'has-image': slide.imageId } ) }>
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ onSelectImage }
									allowedTypes={ [ 'image' ] }
									value={ slide.imageId }
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
								<div className="bu-blocks-slideshow-media">
									{ imageMarkup( slide ) }
								</div>
								<div className="wp-block-editorial-slideshow-edit-slide-image-controls__focus">
									<SelectControl
										className="wp-block-editorial-slideshow-edit-slide-image-controls__focus"
										label={ __( 'Crop Media to:' ) }
										value={ slide.imageFocus }
										onChange={ value => {
											const newSlides = Object.values( {
												...slides,
												[ index ]: {
													...slides[ index ],
													imageFocus: value,
												}
											} );

											setAttributes( { slides: newSlides } );
										} }
										options={ [
											{ value: 'left-top', label: __( 'Left Top' ) },
											{ value: 'left-middle', label: __( 'Left Middle' ) },
											{ value: 'left-bottom', label: __( 'Left Bottom' ) },
											{ value: 'center-top', label: __( 'Center Top' ) },
											{ value: 'center-middle', label: __( 'Center Middle' ) },
											{ value: 'center-bottom', label: __( 'Center Bottom' ) },
											{ value: 'Right-top', label: __( 'Right Top' ) },
											{ value: 'Right-middle', label: __( 'Right Middle' ) },
											{ value: 'Right-bottom', label: __( 'Right Bottom' ) },
										] }
									/>
								</div>
							</MediaUploadCheck>
						</div>
					) : (
						<MediaPlaceholder
							icon='format-image'
							labels={ {
								title: __( 'Add an Image' ),
								instructions: __( 'Drag, upload, or select a file from your library.' ),
							} }
							onSelect={ onSelectImage }
							allowedTypes={ [ 'image' ] }
						/>
					) }
					<RichText
						tagName="p"
						placeholder={ __( 'Add a caption…' ) }
						value={ slide.caption }
						onChange={ value => {
							const newSlides = Object.values( {
								...slides,
								[ index ]: {
									...slides[ index ],
									caption: value,
								}
							} );

							setAttributes( { slides: newSlides } );
						} }
						formattingControls={ [ 'bold', 'italic', 'link' ] }
						keepPlaceholderOnFocus
					/>
				</div>
			);
		};

		return (
			<div className={ getClasses( aspectRatio, className, crop, showNextUp ) }>
				{ ( isSelected || !slides[0].imageId ) ? (
					<Fragment>
						{ slides.map( ( slide, index ) => slideEdit( slide, index ) ) }
						<IconButton
							onClick={ () => setAttributes( { slides: slides.concat( [ emptySlide ] ) } ) }
							icon="plus"
							isButton
							isDefault
							isLarge
							label={ __( 'Add a Slide' ) }
						>{ __( 'Add New Slide' ) }</IconButton>
						<InspectorControls>
							<PanelBody title={ __( 'Display Settings' ) }>
								<RadioControl
									className="bu-block-editorial-slideshow-aspect-ratio-options"
									label={ __( 'Aspect Ratio' ) }
									selected={ aspectRatio }
									options={ [
										{ label: '16:9', value: '16by9' },
										{ label: '4:3', value: '4by3' },
										{ label: '1:1', value: '1by1' },
										{ label: '3:4', value: '3by4' },
										{ label: '9:16', value: '9by16' },
									] }
									onChange={ option => setAttributes( { aspectRatio: option } ) }
								/>
								<ToggleControl
									label={ __( 'Crop Images to Fit Slideshow' ) }
									checked={ crop }
									onChange={ () => setAttributes( { crop: !crop } ) }
								/>
								<ToggleControl
									label={ __( 'Preview Next Image' ) }
									checked={ showNextUp }
									onChange={ () => setAttributes( { showNextUp: !showNextUp } ) }
								/>
							</PanelBody>
						</InspectorControls>
					</Fragment>
				) : (
					blockMarkup( slides )
				) }
			</div>
		);
	},

	save( { attributes } ) {
		const {
			aspectRatio,
			className,
			crop,
			showNextUp,
			slides,
		} = attributes;

		return (
			<div className={ getClasses( aspectRatio, className, crop, showNextUp ) }>
				{ blockMarkup( slides ) }
			</div>
		);
	},
} );
