/**
 * Adds Color Utility functions.
 */

import { getColorObjectByColorValue } from '@wordpress/block-editor';
import { hasBlockSupport, getBlockSupport } from '@wordpress/blocks';

/**
 * When given a color it gets the Color Slug from the themeoptions() color
 * palette defined for the theme.
 *
 * @param {*}      color
 * @param {Object} palette palette object.
 * @return {string} The slug of the color.
 */
export const getColorSlug = ( color, palette ) => {
	if ( color ) {
		const colorObject = getColorObjectByColorValue( palette, color );

		if ( colorObject.slug ) {
			return colorObject.slug;
		}
	} else {
		console.error( 'Error: no color.slug value found in color object.' ); // eslint-disable-line no-console
	}
	return undefined;
};


/**
 * Get ColorThemes setting from the block's Supports array in block.json
 * and override the site-wide color palette set in the theme. 
 * @param {*} name 
 * @param {*} palette
 * @returns
 */
export const getColorThemesSupportsByBlock = ( name, palette ) => {
	const hasThemOptionsColorThemesSupport = hasBlockSupport(
		name,
		'__bublocks.colorthemes'
	);
	console.log( "existing palette:", palette );

	if ( hasThemOptionsColorThemesSupport ) {
		const BlockColorThemesPalette = getBlockSupport(
			name,
			'__bublocks.colorthemes'
		);
		console.log(BlockColorThemesPalette);

		if ( Array.isArray( BlockColorThemesPalette ) ) {
			palette = BlockColorThemesPalette;
		}
	}

	return palette;
};
