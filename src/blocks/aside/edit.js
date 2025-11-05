/**
 * Edit function for the aside block.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import themeOptions from '../../global/theme-options.js';
import allowedBlocks from '../../components/allowed-blocks';
import {
	getColorSlug,
	getColorThemesSupportsByBlock,
} from '../../global/color-utils.mjs';
import ThemeColorPanel from '../../components/colorthemes-panel/index.js';

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
import { hasBlockSupport } from '@wordpress/blocks';


export default function Edit( props ) {
	const { attributes, setAttributes, className, presetTemplate, name } =
		props;

	const { themeColor } = attributes;

	const classes = classnames( className, {
		[ `has-${ themeColor }-background` ]: themeColor,
	} );

	const blockProps = useBlockProps( {
		className: classes,
	} );

	// themOptions() returns the full/global color palette added to editor settings.
	const themeOptionsPalette = themeOptions();

	return (
		<>
			<InspectorControls>
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
