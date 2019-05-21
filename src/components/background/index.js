/**
 * Component: background
 *
 * An absraction of the default Cover block for more general use inside blocks.
 *
 * Import this component and its attributes into a block with:
 * 	`import Background, { BackgroundAttributes } from '../../components/background';`
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
 * @param {array} props The properties passed to the component.
 */
function Background( props ) {
	// Destructure properties of this component with defaults.
	const {
		allowedMediaTypes = [ 'image', 'video' ],
		autoplayVideo = true,
		blockProps,
		className = 'bu-blocks-background',
		controlPanelTitle = __( 'Background Settings' ),
		inlinePlaceholder = false,
		options = [ 'opacity' ],
		placeholderText = __( 'Background Media' ),
	} = props;

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
			backgroundCaption: undefined,
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
			backgroundAlt: media.alt,
			backgroundCaption: media.caption,
		} );
	};

	// Set attributes based on a selected URL.
	const onSelectURL = ( newURL ) => {
		const allowedAuthorities = [ 'vimeo.com', 'www.youtube.com', 'youtu.be', 'www.bu.edu' ];
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
			backgroundCaption: undefined,
		} );
	}

	// Return the media placeholder if no media has been set.
	const placeholder = () => {
		if ( backgroundUrl ) {
			return undefined;
		}

		return (
			<MediaUploadCheck>
				<MediaPlaceholder
					icon='format-image'
					className={ className }
					labels={ {
						title: placeholderText,
						instructions: __( 'Drag, upload, or select a file from your library.' ),
					} }
					onSelect={ onSelectMedia }
					onSelectURL={ onSelectURL }
					allowedTypes={ allowedMediaTypes }
				/>
				<p className="description components-bu-background-url-note">YouTube, Vimeo, and BUniverse URLs are supported at this time.</p>
			</MediaUploadCheck>
		);
	};

	// Return inspector controls if any options are enabled.
	const inspectorControls = () => {
		if ( ( !Array.isArray( options ) || !options.length ) && inlinePlaceholder ) {
			return undefined;
		}

		return (
			<InspectorControls>
				<PanelBody title={ controlPanelTitle }>
					{ ! inlinePlaceholder && ( placeholder() ) }
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
					{ options.includes( 'opacity' ) && (
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
					) }
				</PanelBody>
			</InspectorControls>
		);
	};

	// Defines the controls for the background options.
	const controls = (
		<Fragment>
			{ inlinePlaceholder && ( placeholder() ) }
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
			{ inspectorControls() }
		</Fragment>
	)

	// Build the classes to apply to the background element.
	const classes = classnames(
		className,
		{
			'has-background-opacity': backgroundOpacity !== 100,
			[ BackgroundOpacityToClass( backgroundOpacity ) ]: BackgroundOpacityToClass( backgroundOpacity ),
			[ `wp-image-${backgroundId}` ]: backgroundId && 'image' === backgroundType,
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

	// Return an iframe for use as the background.
	const backgroundIframe = () => {
		const authority = getAuthority( backgroundUrl );

		if ( authority === 'www.youtube.com' || authority === 'youtu.be' ) {
			const videoId = ( authority === 'youtu.be' ) ?
				getPath( backgroundUrl ) :
				getQueryString( backgroundUrl ).split( '?' )[0].substr(2);

			// Build the url, adding autoplay parameters if appropriate.
			let url = `//www.youtube.com/embed/${videoId}`;
			url += ( autoplayVideo ) ? `?controls=0&autoplay=1&mute=1&origin=http://bu.edu&version=3&loop=1&playlist=${videoId}` : '';

			return (
				<iframe
					src={ url }
					frameborder="0"
					allow="autoplay; fullscreen"
					className={ classes }
				></iframe>
			)
		}

		if ( authority === 'vimeo.com' ) {
			const videoId = getPath( backgroundUrl );

			// Build the url, adding the background parameter for autoplaying if appropriate.
			let url = `//player.vimeo.com/video/${videoId}`;
			url += ( autoplayVideo ) ? '?background=1' : '';

			return (
				<iframe
					src={ url }
					frameborder="0"
					allow="autoplay; fullscreen"
					className={ classes }
				></iframe>
			);
		}

		if ( authority === 'www.bu.edu' ) {
			const videoId = getQueryString( backgroundUrl ).split( '?' )[0].substr(2);

			// Build the URL, adding the autoplay parameter if appropriate.
			let url = `//www.bu.edu/buniverse/interface/embed/embed.html?v=${videoId}`;
			url += ( autoplayVideo ) ? '&autoplay=true&controls=0' : '';

			return (
				<iframe
					src={ url }
					frameborder="0"
					allow="autoplay; fullscreen"
					className={ classes }
				></iframe>
			);
		}
	}

	// Return the interface for the background component.
	return (
		<Fragment>
			{ controls }
			{ ( 'image' === backgroundType ) && ( backgroundImage ) }
			{ ( 'video' === backgroundType ) && ( backgroundVideo ) }
			{ ( 'url' === backgroundType ) && (
				<div className="wp-block-background-video">
					<div className="wp-block-background-video-ratio">
						<div className="wp-block-background-video-iframe">
							{ backgroundIframe() }
						</div>
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
