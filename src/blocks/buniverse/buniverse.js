/**
 * BLOCK: bu/buniverse
 *
 * Register a BUniverse embed block with Gutenberg.
 */

// External dependencies.
import classnames from 'classnames';

//  Import CSS.
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
	Fragment,
} = wp.element;
const {
	PanelBody,
	Path,
	RadioControl,
	SVG,
	TextControl,
	ToggleControl,
} = wp.components;
const {
	InspectorControls,
} = wp.editor;

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

// Register the block.
registerBlockType( 'bu/buniverse', {
	title: __( 'BUniverse Video' ),
	description: __( '' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu',
	attributes: {
		id: {
			type: 'string',
		},
		aspectRatio: {
			type: 'string',
		},
		controls: {
			type: 'number',
			default: 1,
		},
		showInfo: {
			type: 'number',
			default: 0,
		},
		related: {
			type: 'number',
			default: 0,
		},
		autoplay: {
			type: 'number',
			default: 0,
		},
		start: {
			type: 'number',
		},
		minutes: {
			type: 'number',
		},
		seconds: {
			type: 'number',
		},
	},
	supports: {
		align: true,
	},
	publicationClassName: publicationClass + '-block-global-buniverse',

	edit( { attributes, setAttributes, isSelected } ) {
		const {
			id,
			aspectRatio,
			controls,
			showInfo,
			related,
			autoplay,
			minutes,
			seconds,
		} = attributes;

		/**
		 * Sets the value for the `minutes` attribute and
		 * calculates a new value to set for the `start` attribute.
		 *
		 * Note: no calculations are done to account for values
		 * greater than 60 entered into the `seconds` input, so
		 * as to avoid subverting expectations in cases where a
		 * user might deliberately do so.
		 *
		 * @param {string} value The value entered into the input.
		 */
		const onChangeMinutes = ( value ) => {
			const newValue = Number( value );
			const newStart = newValue * 60 + ( ( seconds ) ? seconds : 0 );

			setAttributes( { minutes: newValue } );
			setAttributes( { start: newStart } );
		};

		/**
		 * Sets the value for the `seconds` attribute and
		 * calculates a new value to set for the `start` attribute.
		 *
		 * Note: See the above note about calculating `seconds` values.
		 *
		 * @param {string} value The value entered into the input.
		 */
		const onChangeSeconds = ( value ) => {
			const newValue = Number( value );
			const newStart = newValue + ( ( minutes ) ? minutes * 60 : 0 );

			setAttributes( { seconds: newValue } );
			setAttributes( { start: newStart } );
		};

		// Build out the block class list, including the default and aspect ratio.
		const classes = classnames(
			'wp-block-global-buniverse',
			{ [ aspectRatio ]: aspectRatio },
		);

		// Build out the basic url, intentionally leaving off the extra parameters
		// because they cause the iframe to reload every time they're changed.
		const url = `//www.bu.edu/buniverse/interface/embed/embed.html?v=${id}`;

		return(
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Video Settings' ) }>
						<RadioControl
							className="buniverse-aspect-ratio-options"
							label={ __( 'Aspect Ratio' ) }
							selected={ aspectRatio }
							help={ __( '16:9 is typically used on widescreen video. 4:3 is often used for older fullscreen video. 1:1 is square. 9:16 and 3:4 are used for vertical video.' ) }
							options={ [
								{ label: '16:9', value: 'has-aspectratio-16by9' },
								{ label: '4:3', value: 'has-aspectratio-4by3' },
								{ label: '1:1', value: 'has-aspectratio-1by1' },
								{ label: '3:4', value: 'has-aspectratio-3by4' },
								{ label: '9:16', value: 'has-aspectratio-9by16' },
							] }
							onChange={ option => setAttributes( { aspectRatio: option } ) }
						/>
						<div className="buniverse-parameter-toggles">
							<ToggleControl
								label={ __( 'Hide Player Controls' ) }
								checked={ controls === 0 }
								onChange={ () => setAttributes( { controls: ( controls === 0 ) ? 1 : 0 } ) }
							/>
							<ToggleControl
								label={ __( 'Show YouTube Header Bar' ) }
								checked={ showInfo === 1 }
								onChange={ () => setAttributes( { showInfo: ( showInfo === 0 ) ? 1 : 0 } ) }
							/>
							<ToggleControl
								label={ __( 'Show Related Videos' ) }
								checked={ related === 1 }
								onChange={ () => setAttributes( { related: ( related === 0 ) ? 1 : 0 } ) }
							/>
							<ToggleControl
								label={ __( 'Auto Start (muted)' ) }
								checked={ autoplay === 1 }
								onChange={ () => setAttributes( { autoplay: ( autoplay === 0 ) ? 1 : 0 } ) }
							/>
						</div>
						<div className="buniverse-start-time">
							<TextControl
								label={ __( 'Start At' ) }
								type="number"
								value={ minutes }
								onChange={ onChangeMinutes }
							/>:
							<TextControl
								type="number"
								value={ seconds }
								onChange={ onChangeSeconds }
							/>
						</div>
					</PanelBody>
				</InspectorControls>
				{ ( id && isSelected ) && (
					<TextControl
						label={ __( 'Video ID:' ) }
						className="buniverse-set-video-id"
						value={ id }
						onChange={ ( value ) => setAttributes( { id: value } ) }
					/>
				) }
				<figure className={ classes }>
					<div className="wp-block-global-buniverse-wrapper">
						{ ! id && (
							<div className="wp-block-global-buinverse-placeholder">
								<div className="buniverse-logo"></div>
								<TextControl
									placeholder={ __( 'Enter BUniverse video ID here…' ) }
									value={ id }
									onChange={ ( value ) => setAttributes( { id: value } ) }
								/>
								<div className="buniverse-video-id-screenshot"></div>
							</div>
						) }
						{ id && (
							<iframe
								src={ url }
								frameborder="0"
							></iframe>
						) }
					</div>
					<figcaption></figcaption>
				</figure>
			</Fragment>
		);
	},

	save( { attributes } ) {
		const {
			id,
			aspectRatio,
			controls,
			showInfo,
			related,
			autoplay,
			start,
		} = attributes;

		// Build out the block class list, including the default and aspect ratio.
		const classes = classnames(
			'wp-block-global-buniverse',
			{ [ aspectRatio ]: aspectRatio },
		);

		const startParam = ( start ) ? `&start=${start}` : '';

		// Build out the full url.
		// Note: Use of the `autoplay` attribute value for the `muted` parameter is intentional.
		const url = `//www.bu.edu/buniverse/interface/embed/embed.html?v=${id}&controls=${controls}&showinfo=${showInfo}&rel=${related}&autoplay=${autoplay}&mute=${autoplay}${startParam}`;

		return(
			<figure className={ classes }>
				<div className="wp-block-global-buniverse-wrapper">
					{ id && (
						<iframe
							src={ encodeURI( url ) }
							frameborder="0"
						></iframe>
					) }
				</div>
				<figcaption></figcaption>
			</figure>
		);
	},
} );