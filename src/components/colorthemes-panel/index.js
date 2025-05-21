import { PanelRow } from '@wordpress/components';
import {
	PanelColorSettings,
	getColorObjectByAttributeValues,
} from '@wordpress/block-editor';
import { hasBlockSupport, getBlockSupport } from '@wordpress/blocks';

/**
 * Get ColorThemes setting from the block's Supports array in block.json
 * and override the site-wide color palette set in the theme.
 *
 * @param {string} name    The name of the block
 * @param {Object} palette A color palette object.
 * @param {string} key     The key in block-supports in block.json such as __bublocks_colorthemes.
 * @return {Array} A color palette array.
 */
const getColorThemesSupportsByBlock = ( name, palette, key ) => {
	const BlockColorThemesPalette = getBlockSupport( name, key );

	if ( Array.isArray( BlockColorThemesPalette ) ) {
		palette = BlockColorThemesPalette;
	}

	return palette;
};

/**
 * Returns a `<PanelColorSettings>` component to allow the
 * user to select a color theme. The global color theme if available
 * should be passed to the component. The component will also check if
 * the block supports a specific colortheme in block.json and if a
 * block specific color palette has been overridden in the theme.
 * @param {*} props
 * @return {Component} A Color Panel component.
 */
export default function ThemeColorPanel( props ) {
	const {
		blockname,
		title = 'Color Theme',
		themepalette,
		label = 'Theme',
		onChange,
		value,
		supportkey = '__bublocks_colorthemes',
	} = props;

	let palette = themepalette;

	// Check if block's metadata from block.json has an entry for __bublocks_colorthemes.
	const hasSupport = hasBlockSupport( blockname, supportkey );

	if ( hasSupport ) {
		// Get any block specific color themes palette set
		// in block.json `supports.__bublocks_colorthemes`
		palette = getColorThemesSupportsByBlock(
			blockname,
			palette,
			supportkey
		);
	}

	// Create a color object from the palette for themeColor attribute
	//  to pass into the component.
	const paletteColorObject = getColorObjectByAttributeValues(
		palette,
		value
	);

	// Check if palette is an array and has any values.
	const hasPalette = Array.isArray( palette ) && palette.length > 0;

	return (
		<>
			{ hasSupport && (
				<PanelColorSettings
					__experimentalIsRenderedInSidebar
					title={ title }
					colorSettings={ [
						{
							value: paletteColorObject?.color,
							onChange: ( newValue ) =>
								onChange( newValue, palette ),
							label,
							colors: palette,
							disableCustomColors: true,
						},
					] }
				>
					{ ! hasPalette && (
						<PanelRow>
							<em>No Color Palette available for this block.</em>
						</PanelRow>
					) }
				</PanelColorSettings>
			) }
		</>
	);
}
