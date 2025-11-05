/**
 * Edit function for the aside block.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import themeOptions from '../../../../global/theme-options.js';
import allowedBlocks from '../../../../components/allowed-blocks';
import { getColorSlug } from '../../../../global/color-utils.mjs';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

import { PanelRow } from '@wordpress/components';
import {
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
	getColorObjectByAttributeValues,
} from '@wordpress/block-editor';

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
										? getColorSlug( value, themeOptions() )
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
