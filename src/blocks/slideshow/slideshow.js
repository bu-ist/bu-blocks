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
	Button,
	IconButton,
	Path,
	SVG,
} = wp.components;
const {
	Fragment,
} = wp.element;
const {
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} = wp.editor;

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
 * Return the block markup.
 *
 * @param {array} slides Array of objects containing slide data.
 */
const blockMarkup = ( slides ) => {
	return (
		<Fragment>
			<div className="bu-blocks-slideshow-media-container">

				<div className="back js-bu-blocks-slideshow-back-onmedia-btn"></div>
				<div className="forward js-bu-blocks-slideshow-forward-onmedia-btn"></div>

				<ul className="bu-blocks-slideshow-media-track js-bu-blocks-slideshow-media-track js-bu-blocks-slideshow-forward-ontrack-btn">

					{ slides.map( ( slide, index ) =>
						<li className={ `js-bu-blocks-slideshow-media-track-item bu-blocks-slideshow-media bu-blocks-slideshow-media-${ slideIndex( index ) }` }>
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
						</li>
					) }

				</ul>

			</div>

			<div className="bu-blocks-slideshow-caption-container bu-blocks-slideshow-caption-container-collapsed js-bu-blocks-slideshow-caption-container">

				<ul className="bu-blocks-slideshow-caption-track js-bu-blocks-slideshow-caption-track">

					{ slides.map( ( slide, index ) =>
						<li className={ `bu-blocks-slideshow-caption bu-blocks-slideshow-caption-${ slideIndex( index ) } js-bu-blocks-slideshow-caption-item` }>
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
	focus: '',
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
		slides: {
			type: 'array',
			default: [ emptySlide, emptySlide ],
		},
	},

	edit( props ) {
		const {
			attributes: {
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
				slides[ index ].imageId = undefined;
				slides[ index ].imageUrl = undefined;

				setAttributes( { slides: slides } );
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

				const imageSize = 'huge';

				let url = ( image.sizes[ imageSize ] ) ? image.sizes[ imageSize ].url : image.url;;

				slides[ index ].imageId = image.id;
				slides[ index ].imageUrl = url;

				setAttributes( { slides: slides } );
			};

			return (
				<div className="wp-block-editorial-slideshow-edit">
					<IconButton
						className="wp-block-editorial-slideshow-edit__remove-slide"
						icon="no-alt"
						label={ __( 'Remove Slide' ) }
						onClick={ () => {
							slides.splice( index, 1 );
							setAttributes( { slides: slides } );
						} }
					>{ __( 'Remove Slide' ) }</IconButton>
					{ slide.imageId ? (
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectImage }
								allowedTypes={ [ 'image' ] }
								value={ slide.imageId }
								render={ ( { open } ) => (
									<div className="wp-block-editorial-slideshow-edit__image">
										<IconButton
											className="wp-block-editorial-slideshow-edit__image-edit"
											icon="edit"
											label={ __( 'Edit Image' ) }
											onClick={ open }
										/>
										<IconButton
											className="wp-block-editorial-slideshow-edit__image-remove"
											icon="no-alt"
											label={ __( 'Remove Image' ) }
											onClick={ onRemoveImage }
										/>
									</div>
								) }
							/>
							<img src={ slide.imageUrl } />
						</MediaUploadCheck>
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
							slides[ index ].caption = value;
							setAttributes( { slides: slides } );
						} }
						formattingControls={ [ 'bold', 'italic', 'link' ] }
					/>
				</div>
			);
		};

		return (
			<div className={ classnames( className, 'js-bu-blocks-slideshow' ) }>
				{ ( isSelected || !slides[0].imageId ) ? (
					<Fragment>
						{ slides.map( ( slide, index ) => slideEdit( slide, index ) ) }
						<Button
							onClick={ () => setAttributes( { slides: slides.concat( [ emptySlide ] ) } ) }
							label={ __( 'Add a Slide' ) }
							isDefault
							isSmall
						>{ __( 'Add New Slide' ) }</Button>
					</Fragment>
				) : (
					blockMarkup( slides )
				) }
			</div>
		);
	},

	save( { attributes } ) {
		const {
			slides,
		} = attributes;

		return (
			<div className="js-bu-blocks-slideshow">
				{ blockMarkup( slides ) }
			</div>
		);
	},
} );
