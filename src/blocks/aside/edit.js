/**
 * Edit function for the aside block.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import themeOptions from '../../global/theme-options.js';
import allowedBlocks from '../../components/allowed-blocks';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

import { PanelRow } from '@wordpress/components';
import {
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
	getColorObjectByColorValue,
	getColorObjectByAttributeValues,
} from '@wordpress/block-editor';

/**
 * When given a color it gets the Color Slug from the themeoptions() color
 * palette defined for the theme.
 *
 * @param {*} color
 * @return {string} The slug of the color.
 */
const getColorSlug = ( color ) => {
	if ( color ) {
		const colorObject = getColorObjectByColorValue( themeOptions(), color );

		if ( colorObject.slug ) {
			return colorObject.slug;
		}
	} else {
		console.error( 'Error: no color.slug value found in color object.' ); // eslint-disable-line no-console
	}
	return undefined;
};

export default function Edit( props ) {
	const { attributes, setAttributes, className, presetTemplate } = props;

	const { themeColor } = attributes;

	const classes = classnames( className, {
		[ `has-${ themeColor }-background` ]: themeColor,
	} );

	const blockProps = useBlockProps( {
		className: classes,
	} );

	const themeColorObject = getColorObjectByAttributeValues(
		themeOptions(),
		themeColor
	);

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					__experimentalIsRenderedInSidebar
					title={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: themeColorObject?.color,
							onChange: ( value ) =>
								setAttributes( {
									themeColor: value
										? getColorSlug( value )
										: undefined,
								} ),
							label: __( 'Theme' ),
							disableCustomColors: true,
							colors: themeOptions(),
						},
					] }
				>
					{ ! themeOptions() && (
						<PanelRow>
							<em>No Color Palette available for this site.</em>
						</PanelRow>
					) }
				</PanelColorSettings>
			</InspectorControls>
			<aside { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ allowedBlocks() }
					template={ presetTemplate }
				/>
			</aside>
		</>
	);
}
