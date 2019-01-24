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
	MediaUploadCheck,
} = wp.editor;
const {
	getAuthority,
	getPath,
	getQueryString,
} = wp.url;

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

	// Set attributes based on a selected URL.
	const onSelectURL = ( newURL ) => {
		const allowedAuthorities = [ 'vimeo.com', 'www.youtube.com', 'youtu.be' ];
		const authority = getAuthority( newURL );

		// Stop here if the selected URL isn't from one of the allowed domains.
		if ( newURL === backgroundUrl || ! allowedAuthorities.includes( authority ) ) {
			return;
		}

		setAttributes( {
			backgroundId: undefined,
			backgroundType: 'url',
			backgroundUrl: newURL,
			backgroundAlt: undefined,
		} );
	}

	// Defines the controls for the background options.
	const controls = (
		<Fragment>
			{ !! backgroundUrl && (
				<BlockControls>
					<Toolbar>
						<MediaUploadCheck>
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
						</MediaUploadCheck>
					</Toolbar>
				</BlockControls>
			) }
			<InspectorControls>
				<PanelBody title={ controlPanelTitle }>

					{ ! backgroundUrl && (
						<BaseControl>
							<MediaUploadCheck>
								<MediaPlaceholder
									icon='format-image'
									className={ className }
									labels={ {
										title: __( 'Background Media' ),
										instructions: __( 'Drag, upload, or select a file from your library.' ),
									} }
									onSelect={ onSelectMedia }
									onSelectURL={ onSelectURL }
									allowedTypes={ allowedMediaTypes }
								/>
								<p className="description components-bu-background-url-note">YouTube and Vimeo URLs are supported at this time.</p>
							</MediaUploadCheck>
						</BaseControl>
					) }

					{ !! backgroundUrl && (
						<BaseControl
							label={ __( 'Background Media' ) }
						>
							<div className='components-bu-background-media'>
								<MediaUploadCheck>
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
								</MediaUploadCheck>
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

	// Return an iframe.
	const backgroundIframe = () => {
		const authority = getAuthority( backgroundUrl );

		if ( authority === 'www.youtube.com' || authority === 'youtu.be' ) {
			const videoId = ( authority === 'youtu.be' ) ?
				getPath( backgroundUrl ) :
				getQueryString( backgroundUrl ).split( '?' )[0].substr(2);

			return (
				<iframe
					src={ `https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1&mute=1&origin=http://bu.edu&version=3&loop=1&playlist=${videoId}` }
					frameborder="0"
					allow="autoplay"
					className={ classes }
				></iframe>
			)
		}

		if ( authority === 'vimeo.com' ) {
			const videoId = getPath( backgroundUrl );

			return (
				<iframe
					src={ `https://player.vimeo.com/video/${videoId}?background=1`}
					frameborder="0"
					className={ classes }
				></iframe>
			);
		}
	}

	// Return the interace for the background component.
	return (
		<Fragment>
			{ controls }
			{ ( 'image' === backgroundType ) && ( backgroundImage ) }
			{ ( 'video' === backgroundType ) && ( backgroundVideo ) }
			{ ( 'url' === backgroundType ) && (
				<div className="wp-block-background-video">
					<div className="wp-block-background-video-iframe">
						{ backgroundIframe() }
					</div>
				</div>
			) }
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