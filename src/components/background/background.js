/**
 * Component: background
 *
 * An absraction of the default Cover block for more general use inside blocks.
 *
 * Import this component and its attributes into a block with:
 * 	`import Background, { BackgroundAttributes } from '../../components/background/background.js';`
*/

// External dependencies.
import classnames from 'classnames';

// Import CSS.
import './editor.scss';

// Internal dependencies.
import BackgroundAttributes from './attributes.js';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	Fragment,
} = wp.element;
const {
	BaseControl,
	IconButton,
	PanelBody,
	RangeControl,
	Toolbar,
} = wp.components;
const {
	BlockControls,
	InspectorControls,
	MediaPlaceholder,
	MediaUpload,
} = wp.editor;

/**
 * Return a classname based on the value of the 'Background Opacity' setting.
 *
 * @param {number} ratio The value of the 'Background Opacity' setting.
*/
const BackgroundOpacityToClass = ( ratio ) => {
	return ( ratio === 100 ) ?
		null :
		'has-background-opacity-' + ( 10 * Math.round( ratio / 10 ) );
}

/**
 * The background component.
 *
 * @param {object} blockProps        Properties from the block using the component.
 * @param {string} className         ClassName to apply to the background element. Default: `bu-blocks-background`.
 * @param {string} controlPanelTitle The background options Inspector panel name. Default: `Background Settings`.
 * @param {array}  allowedMediaTypes Allowed media types for the background. Default: `[ 'image', 'video' ]`.
 */
const Background = (
	blockProps,
	className = 'bu-blocks-background',
	controlPanelTitle = 'Background Settings',
	allowedMediaTypes = [ 'image', 'video' ],
) => {

	// Get the properties of the block using this component.
	const {
		attributes,
		setAttributes,
	} = blockProps;

	// Get the attributes for handling the background data.
	const {
		backgroundId,
		backgroundType,
		backgroundUrl,
		backgroundOpacity,
		backgroundAlt,
	} = attributes;

	// Reset attributes to undefined.
	const onRemoveMedia = () => {
		setAttributes( {
			backgroundId: undefined,
			backgroundType: undefined,
			backgroundUrl: undefined,
			backgroundAlt: undefined,
		} );
	};

	// Set attributes based on the selected or uploaded media.
	const onSelectMedia = ( media ) => {
		if ( ! media || ! media.url ) {
			onRemoveMedia();

			return;
		}

		let mediaType;

		if ( media.media_type ) {
			// Determine the media type from selections originating from a file upload.
			// Only images and videos are accepted. If the media_type is not an image,
			// we can assume it is a video (which contains the media type of 'file').
			mediaType = ( 'image' === media.media_type ) ? 'image' : 'video';
		} else {
			// Determine the media type from selections originating from existing files
			// in the media library.
			if (
				media.type !== 'image' &&
				media.type !== 'video'
			) {
				return;
			}
			mediaType = media.type;
		}

		setAttributes( {
			backgroundId: media.id,
			backgroundType: mediaType,
			backgroundUrl: media.url,
			backgroundAlt: media.alt
		} );
	};

	// Defines the controls for the background options.
	const controls = (
		<Fragment>
			{ !! backgroundUrl && (
				<BlockControls>
					<Toolbar>
						<MediaUpload
							onSelect={ onSelectMedia }
							allowedMediaTypes={ allowedMediaTypes }
							value={ backgroundId }
							render={ ( { open } ) => (
								<IconButton
									className='components-toolbar__control'
									label={ __( 'Edit Background Media' ) }
									icon='edit'
									onClick={ open }
								/>
							) }
						/>
						<IconButton
							className='components-toolbar__control'
							label={ ( 'Remove Background Media' ) }
							icon='no'
							onClick={ onRemoveMedia }
						/>
					</Toolbar>
				</BlockControls>
			) }
			<InspectorControls>
				<PanelBody title={ controlPanelTitle }>

					{ ! backgroundUrl && (
						<BaseControl>
							<MediaPlaceholder
								icon='format-image'
								className={ className }
								labels={ {
									title: __( 'Background Media' ),
									instructions: __( 'Drag, upload, or select a file from your library.' ),
								} }
								onSelect={ onSelectMedia }
								allowedTypes={ allowedMediaTypes }
							/>
						</BaseControl>
					) }

					{ !! backgroundUrl && (
						<BaseControl
							label={ __( 'Background Media' ) }
						>
							<div className='components-bu-background-media'>
								<MediaUpload
									onSelect={ onSelectMedia }
									allowedTypes={ allowedMediaTypes }
									value={ backgroundId }
									render={ ( { open } ) => (
										<IconButton
											onClick={ open }
											icon='edit'
											label={ __( 'Edit Background Media' ) }
											isDefault
											isLarge
										>
											{ __( 'Edit' ) }
										</IconButton>
									) }
								/>
								<IconButton
									onClick={ onRemoveMedia }
									icon='no'
									label={ ( 'Remove Background Media' ) }
									isDefault
									isLarge
								>
									{ __( 'Remove' ) }
								</IconButton>
							</div>
						</BaseControl>
					) }

					<BaseControl>
						<RangeControl
							label={ __( 'Background Opacity' ) }
							value={ backgroundOpacity }
							onChange={ ratio => setAttributes( { backgroundOpacity: ratio } ) }
							min={ 10 }
							max={ 100 }
							step={ 10 }
						/>
					</BaseControl>

				</PanelBody>
			</InspectorControls>
		</Fragment>
	)

	// Build the classes to apply to the background element.
	const classes = classnames(
		className,
		{
			[ 'has-background-opacity' ]: backgroundOpacity !== 100,
			[ BackgroundOpacityToClass( backgroundOpacity ) ]: BackgroundOpacityToClass( backgroundOpacity ),
		}
	);

	// Return an image element for use as the background.
	const backgroundImage = (
		<img
			className={ classes }
			src={ backgroundUrl }
			alt={ backgroundAlt }
		/>
	)

	// Return a video element for use as the background.
	const backgroundVideo = (
		<video
			className={ classes }
			autoPlay
			muted
			loop
			src={ backgroundUrl }
		/>
	);

	// Return the interace for the background component.
	return (
		<Fragment>
			{ controls }
			{ ( 'image' === backgroundType ) && ( backgroundImage ) }
			{ ( 'video' === backgroundType ) && ( backgroundVideo ) }
		</Fragment>
	);
}

// Export dependencies for easy importing in blocks.
export {
	BackgroundAttributes,
	BackgroundOpacityToClass,
};

// Export the background interface.
export default Background;