// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	RangeControl,
	ToggleControl,
	PanelRow,
} from '@wordpress/components';
import {
	InspectorControls,
	PanelColorSettings,
	getColorObjectByAttributeValues,
} from '@wordpress/block-editor';

// Internal dependencies.
import themeOptions from '../../../../global/theme-options';
import { getColorSlug } from '../../../../global/color-utils.mjs';
import { InspectorLinkControl } from '../../../../components/InspectorLinkControl';
import ThemeColorPanel from '../../../../components/colorthemes-panel/index.js';

// Editor Partials within this block.
import { MediaPositioningControls } from './media-position';
import { TextPositioningControls } from './text-position';
import { SideBySideLayoutControls } from './side-by-side-controls';

/**
 * Inspector controls for the leadin block.
 * @param {Object} param0 The block's props.
 * @returns {JSX.Element} The inspector controls component.
 */
export default function LeadinInspectorControls( props ) {

	// Get the block properties and attributes.
	const {
		attributes: {
			backgroundId,
			backgroundUrl,
			backgroundAutoplay,
			box,
			boxOpacity,
			videoUncropped,
			url,
			themeColor,
			className,
		},
		setAttributes,
		name,
	} = props;

	const isStyleEmphasisOnText = Boolean(
		className?.includes( 'is-style-emphasis-on-text' )
	);
	const isStyleTextOverImage = Boolean(
		className?.includes( 'is-style-text-over-image' )
	);
	const isStyleSideBySide = Boolean(
		className?.includes( 'is-style-side-by-side' )
	);
	const isStyleTextToImage = Boolean(
		className?.includes( 'is-style-text-to-image' )
	);
	const isStyleImageToText = Boolean(
		className?.includes( 'is-style-image-to-text' )
	);
	

	// Return layout options if specific styles are set.
	const layoutControls = () => {
		if (
			! (
				isStyleEmphasisOnText ||
				isStyleTextOverImage ||
				isStyleSideBySide
			)
		) {
			return null;
		}

		return (
			<PanelBody title={ __( 'Layout Options' ) }>
				{ isStyleSideBySide && (
					<SideBySideLayoutControls { ...props } />
				)}
				{ isStyleTextOverImage && (
					<TextPositioningControls { ...props } />
				)}
				<ToggleControl
					label={ __( 'Boxed Text' ) }
					checked={ box }
					onChange={ () => setAttributes( { box: ! box } ) }
				/>
				{ box &&
					( isStyleEmphasisOnText || isStyleTextOverImage ) && (
						<RangeControl
							label={ __( 'Box Opacity' ) }
							value={ boxOpacity }
							onChange={ ( value ) =>
								setAttributes( { boxOpacity: value } )
							}
							min={ 10 }
							max={ 100 }
							step={ 10 }
						/>
					) }
			</PanelBody>
		);
	};

	// Return video cropping options if specific styles are set.
	const videoCropControls = () => {
		if ( ! ( isStyleTextToImage || isStyleImageToText ) ) {
			return null;
		}

		return (
			<PanelBody title={ __( 'Video Options' ) }>
				<ToggleControl
					label={ __( 'Leave Video Uncropped' ) }
					checked={ videoUncropped }
					onChange={ () =>
						setAttributes( {
							videoUncropped: ! videoUncropped,
						} )
					}
				/>
			</PanelBody>
		);
	};

	// themOptions() returns the full/global color palette added to editor settings.
	const themeOptionsPalette = themeOptions();
	
	return (
		<InspectorControls>
			{ backgroundId && (
				<MediaPositioningControls {...props} />
			) }
			{ videoCropControls() }
			{ layoutControls() }
			<ThemeColorPanel
				blockname={ name }
				value={ themeColor }
				themepalette={ themeOptionsPalette }
				onChange={ ( value, palette ) =>
					setAttributes( {
						themeColor: value
							? getColorSlug( value, palette )
							: undefined,
					} )
				}
			/>
			<PanelBody
				className="components-panel__body-bu-leadin-block-url bu-blocks-leadin-block-url-input"
				title={ __( 'URL' ) }
			>
				<InspectorLinkControl
					url={ url }
					onChange={ ( newURL ) =>
						setAttributes( { url: newURL } )
					}
					help={ __( 'Link the Leadin block to a story. (Optional)' ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
}