/**
 * Adds Color Utility functions.
 */

import { getColorObjectByColorValue } from '@wordpress/block-editor';

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
