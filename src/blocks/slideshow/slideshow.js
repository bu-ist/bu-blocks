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
	Path,
	SVG,
} = wp.components;

const captionToggle = (
	<div className="bu-blocks-slideshow-caption-expander js-bu-blocks-slideshow-caption-btn"><span className="icon-navigatedown"></span> {__( 'read full caption' ) }</div>
);

const slideshowControls = (
	<div className="bu-blocks-slideshow-controls">
		<div className="bu-blocks-slideshow-controls-previous js-bu-blocks-slideshow-back-btn">
			<span className="icon-navigateleft"></span>
		</div>
		<div className="bu-blocks-slideshow-controls-next js-bu-blocks-slideshow-forward-btn">
			<span className="icon-navigateright"></span>
		</div>
	</div>
);

// Register the block.
registerBlockType( 'editorial/slideshow', {
	title: __( 'Slideshow' ),
	description: __( 'Feature multiple photos in a slideshow carousel.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu-editorial',
	attributes: {},

	edit( props ) {
		const {
			attributes: {},
			className,
			setAttribute,
		} = props;

		return (
			<div className={ classnames( className, 'js-bu-blocks-slideshow' ) }>

				<div className="bu-blocks-slideshow-media-container">
					<div className="back js-bu-blocks-slideshow-back-onmedia-btn"></div>
					<div className="forward js-bu-blocks-slideshow-forward-onmedia-btn"></div>
					<ul className="bu-blocks-slideshow-media-track js-bu-blocks-slideshow-media-track js-bu-blocks-slideshow-forward-ontrack-btn">

						<li className="js-bu-blocks-slideshow-media-track-item bu-blocks-slideshow-media bu-blocks-slideshow-media-001" >
							<div
								className="bu-blocks-slideshow-media-backfill"
								style={ { backgroundImage: `url(${'https://picsum.photos/500/500'})` } }
							></div>
							<img
								className="bu-blocks-slideshow-media-actual"
								src="https://picsum.photos/500/500"
							/>
						</li>

					</ul>
				</div>

				<div className="bu-blocks-slideshow-caption-container bu-blocks-slideshow-caption-container-collapsed js-bu-blocks-slideshow-caption-container">
					<ul className="bu-blocks-slideshow-caption-track js-bu-blocks-slideshow-caption-track">

						<li className="bu-blocks-slideshow-caption bu-blocks-slideshow-caption-001 js-bu-blocks-slideshow-caption-item" >
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
						</li>

					</ul>
					{ captionToggle }
				</div>

				{ slideshowControls }

			</div>
		);
	},

	save( props ) {

		return (
			<div className="js-bu-blocks-slideshow">

				<div className="bu-blocks-slideshow-media-container">
					<div className="back js-bu-blocks-slideshow-back-onmedia-btn"></div>
					<div className="forward js-bu-blocks-slideshow-forward-onmedia-btn"></div>
					<ul className="bu-blocks-slideshow-media-track js-bu-blocks-slideshow-media-track js-bu-blocks-slideshow-forward-ontrack-btn">

						<li className="js-bu-blocks-slideshow-media-track-item bu-blocks-slideshow-media bu-blocks-slideshow-media-001" >
							<div
								className="bu-blocks-slideshow-media-backfill"
								style={ { backgroundImage: `url(${'https://picsum.photos/500/500'})` } }
							></div>
							<img
								className="bu-blocks-slideshow-media-actual"
								src="https://picsum.photos/500/500"
							/>
						</li>

					</ul>
				</div>

				<div className="bu-blocks-slideshow-caption-container bu-blocks-slideshow-caption-container-collapsed js-bu-blocks-slideshow-caption-container">
					<ul className="bu-blocks-slideshow-caption-track js-bu-blocks-slideshow-caption-track">

						<li className="bu-blocks-slideshow-caption bu-blocks-slideshow-caption-001 js-bu-blocks-slideshow-caption-item" >
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
						</li>

					</ul>
					{ captionToggle }
				</div>

				{ slideshowControls }

			</div>
		);
	},
} );
