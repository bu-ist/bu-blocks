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
import './style.scss';

// Internal dependencies.
import BackgroundAttributes from './attributes.js';
import BackgroundControls from './controls';

// WordPress dependencies.
const {
	Fragment,
} = wp.element;
const {
	Spinner,
} = wp.components;
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
		blockProps,
		className = 'bu-blocks-background',
		isUploading = false,
	} = props;

	// Get the properties of the block using this component.
	const {
		attributes,
	} = blockProps;

	// Get the attributes for handling the background data.
	const {
		backgroundId,
		backgroundType,
		backgroundUrl,
		backgroundOpacity,
		backgroundAlt,
		backgroundAutoplay,
	} = attributes;

	// Build the classes to apply to the background element.
	const classes = classnames(
		className,
		{
			'has-background-opacity': backgroundOpacity !== 100,
			[ BackgroundOpacityToClass( backgroundOpacity ) ]: BackgroundOpacityToClass( backgroundOpacity ),
			[ `wp-image-${backgroundId }` ]: backgroundId && 'image' === backgroundType,
		}
	);

	// Return an image element for use as the background.
	const backgroundImage = (
		<img
			className={ classes }
			src={ backgroundUrl }
			alt={ backgroundAlt }
		/>
	);

	// Return a video element for use as the background.
	const backgroundVideo = (
		<video
			className={ classes }
			autoPlay={ backgroundAutoplay }
			muted={ backgroundAutoplay }
			loop={ backgroundAutoplay }
			src={ backgroundUrl }
		/>
	);

	// Return an iframe for use as the background.
	const backgroundIframe = () => {
		const authority = getAuthority( backgroundUrl );
		let url = '';

		if ( authority === 'www.youtube.com' || authority === 'youtu.be' ) {
			const videoId = ( authority === 'youtu.be' ) ?
				getPath( backgroundUrl ) :
				getQueryString( backgroundUrl ).split( '?' )[0].substr(2);

			// Build the url, adding autoplay parameters if appropriate.
			url = `//www.youtube.com/embed/${videoId}`;
			url += ( backgroundAutoplay ) ? `?controls=0&autoplay=1&mute=1&origin=http://bu.edu&version=3&loop=1&playlist=${videoId}` : '';
		}

		if ( authority === 'vimeo.com' ) {
			const videoId = getPath( backgroundUrl );

			// Build the url, adding the background parameter for autoplaying if appropriate.
			url = `//player.vimeo.com/video/${videoId}`;
			url += ( backgroundAutoplay ) ? '?background=1' : '';
		}

		if ( authority === 'www.bu.edu' ) {
			const videoId = getQueryString( backgroundUrl ).split( '?' )[0].substr(2);

			// Build the URL, adding the autoplay parameter if appropriate.
			url = `//www.bu.edu/buniverse/interface/embed/embed.html?v=${videoId}&jsapi=1`;
			url += ( backgroundAutoplay ) ? '&autoplay=true&controls=0' : '';
		}

		if ( url !== '' ) {
			return (
				<iframe
					src={ url }
					frameBorder="0"
					allow="autoplay; fullscreen"
					className={ classes }
				></iframe>
			);
		}
	};

	// Return the interface for the background component.
	return (
		<Fragment>
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
			{ isUploading && (
				<div className="wp-block-background-is-uploading">
					<img src={ backgroundUrl } alt={ backgroundAlt } />
					<Spinner />
				</div>

			) }
		</Fragment>
	);
}

// Export dependencies for easy importing in blocks.
export {
	BackgroundAttributes,
	BackgroundOpacityToClass,
	BackgroundControls,
};

export default Background;
