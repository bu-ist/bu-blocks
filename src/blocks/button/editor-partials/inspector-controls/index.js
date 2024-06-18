/**
 * Inspector Controls Partial for Button Block
 *
 * Moves the InspectorControls component out of the edit
 * function of the Button block to a separate partial to
 * keep the block's edit function cleaner.
 */

import { __ } from '@wordpress/i18n';

import {
	InspectorControls,
	PanelColorSettings
} from '@wordpress/block-editor';

import {
	Button,
	PanelBody,
	RadioControl
} from '@wordpress/components';

export function InspectorControlsPartial( {
	themeColor,
	setThemeColor,
	themeOptions,
	icon,
	setAttributes
} ) {

	return (
		<InspectorControls>
			<PanelColorSettings
				title={ __( 'Color Settings' ) }
				colorSettings={ [
					{
						value: themeColor.color,
						onChange: setThemeColor,
						label: __( 'Theme' ),
						disableCustomColors: true,
						colors: themeOptions(),
					},
				] }
			/>
				<PanelBody title={ __( 'Icon Settings' ) }>
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
