// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import getAllowedFormats from '../../global/allowed-formats';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	RadioControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className   Default classes assigned to the block.
 * @param {string} aspectRatio The Aspect Ratio set for the block.
 */
const getClasses = ( className, aspectRatio ) => {
	return classnames( 'wp-block-global-buniverse', {
		[ aspectRatio ]: aspectRatio,
		[ className ]: className,
	} );
};

export default function Edit( props ) {
	const {
		attributes: {
			id,
			aspectRatio,
			caption,
			controls,
			autoplay,
			minutes,
			seconds,
		},
		className,
		isSelected,
		setAttributes,
	} = props;

	const blockProps = useBlockProps( {
		className: getClasses( className, aspectRatio ),
	} );

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
		const newStart = newValue * 60 + ( seconds ? seconds : 0 );

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
		const newStart = newValue + ( minutes ? minutes * 60 : 0 );

		setAttributes( { seconds: newValue } );
		setAttributes( { start: newStart } );
	};

	// Build out the basic url, intentionally leaving off the extra parameters
	// because they cause the iframe to reload every time they're changed.
	const url = `//www.bu.edu/buniverse/interface/embed/embed.html?v=${ id }&jsapi=1`;

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Video Settings' ) }>
					<TextControl
						label={ __( 'Video ID:' ) }
						className="buniverse-set-video-id"
						value={ id }
						onChange={ ( value ) => setAttributes( { id: value } ) }
						help={ __(
							'Enter the ID portion of a BUniverse video URL.'
						) }
					/>
					<RadioControl
						className="buniverse-aspect-ratio-options"
						label={ __( 'Aspect Ratio' ) }
						selected={ aspectRatio }
						help={ __(
							'16:9 is typically used on widescreen video. 4:3 is often used for older fullscreen video. 1:1 is square. 9:16 and 3:4 are used for vertical video.'
						) }
						options={ [
							{
								label: '16:9',
								value: 'has-aspectratio-16by9',
							},
							{ label: '4:3', value: 'has-aspectratio-4by3' },
							{ label: '1:1', value: 'has-aspectratio-1by1' },
							{ label: '3:4', value: 'has-aspectratio-3by4' },
							{
								label: '9:16',
								value: 'has-aspectratio-9by16',
							},
						] }
						onChange={ ( option ) =>
							setAttributes( { aspectRatio: option } )
						}
					/>
					<div className="buniverse-parameter-toggles">
						<ToggleControl
							label={ __( 'Hide Player Controls' ) }
							checked={ controls === 0 }
							onChange={ () =>
								setAttributes( {
									controls: controls === 0 ? 1 : 0,
								} )
							}
						/>
						<ToggleControl
							label={ __( 'Auto Start (muted)' ) }
							checked={ autoplay === 1 }
							onChange={ () =>
								setAttributes( {
									autoplay: autoplay === 0 ? 1 : 0,
								} )
							}
						/>
					</div>
					<div className="buniverse-start-time">
						<TextControl
							label={ __( 'Start At' ) }
							type="number"
							value={ minutes }
							onChange={ onChangeMinutes }
						/>
						:
						<TextControl
							type="number"
							value={ seconds }
							onChange={ onChangeSeconds }
						/>
					</div>
				</PanelBody>
			</InspectorControls>

			<figure { ...blockProps }>
				<div className="wp-block-global-buniverse-wrapper">
					{ ! id && (
						<div className="wp-block-global-buinverse-placeholder">
							<div className="buniverse-logo"></div>
							<TextControl
								placeholder={ __(
									'Enter BUniverse video ID here…'
								) }
								value={ id }
								onChange={ ( value ) =>
									setAttributes( { id: value } )
								}
							/>
							<div className="buniverse-video-id-screenshot"></div>
						</div>
					) }
					{ id && (
						<iframe
							title="Video"
							src={ url }
							frameBorder="0"
							allow="autoplay; fullscreen"
						></iframe>
					) }
				</div>

				{ ( ! RichText.isEmpty( caption ) || isSelected ) && (
					<figcaption>
						<RichText
							tagName="p"
							className="wp-block-global-buniverse-caption wp-prepress-component-caption"
							placeholder={ __(
								'Add a caption and/or media credit…'
							) }
							value={ caption }
							onChange={ ( value ) =>
								setAttributes( { caption: value } )
							}
							formattingControls={ getAllowedFormats(
								'formattingControls',
								[ 'bold', 'italic', 'link' ]
							) }
							allowedFormats={ getAllowedFormats(
								'allowedFormats',
								[ 'core/bold', 'core/italic', 'core/link' ]
							) }
							keepPlaceholderOnFocus
						/>
					</figcaption>
				) }
			</figure>
		</>
	);
}
