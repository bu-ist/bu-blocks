/**
 * Inspector Controls Partial for Button Block
 *
 * Moves the InspectorControls component out of the edit
 * function of the Button block to a separate partial to
 * keep the block's edit function cleaner.
 */

// Internal dependencies.
import ThemeColorPanel from '../../../../components/colorthemes-panel/index.js';
import themeOptions from '../../../../global/theme-options';
import { getColorSlug } from '../../../../global/color-utils.mjs';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
} from '@wordpress/block-editor';

import {
	Button,
	PanelBody,
	RadioControl
} from '@wordpress/components';

export function ButtonInspectorControls( props ) {
	const {
		attributes,
		setAttributes,
		name,
	} = props;
	
	const { themeColor, icon } = attributes;

	// themOptions() returns the full/global color palette added to editor settings.
	const themeOptionsPalette = themeOptions();

	return (
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
			<PanelBody title={ __( 'Arrow Icon Settings' ) }>
				<RadioControl
					label='Placement'
					selected={ icon }
					options={ [
						{ label: 'Before text', value: 'align-icon-left' },
						{ label: 'After text', value: 'align-icon-right' },
					] }
					onChange={ ( value ) => { setAttributes( { icon: value } ) } }
				/>
				<Button
					onClick={ () => setAttributes( { icon: undefined } ) }
					label={ ( 'Clear icon settings' ) }
					isDefault
					isSmall
				>
					{ __( 'Clear' ) }
				</Button>
			</PanelBody>
		</InspectorControls>
	)
};
