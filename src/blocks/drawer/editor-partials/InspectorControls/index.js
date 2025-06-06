// Internal dependencies.
import themeOptions from '../../../../global/theme-options';
import { getColorSlug } from '../../../../global/color-utils.mjs';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	RadioControl,
	ToggleControl,
	PanelRow,
} from '@wordpress/components';
import {
	InspectorControls,
	PanelColorSettings,
	getColorObjectByAttributeValues,
} from '@wordpress/block-editor';

export const EditorPartialsInspectorControls = ( props ) => {
	const { attributes, setAttributes } = props;

	const { backgroundId, hideTeaser, round, size, themeColor } = attributes;

	const themeColorObject = getColorObjectByAttributeValues(
		themeOptions(),
		themeColor
	);

	return (
		<InspectorControls>
			<PanelColorSettings
				title={ __( 'Background Color' ) }
				initialOpen={ false }
				colorSettings={ [
					{
						value: themeColorObject?.color,
						onChange: ( value ) =>
							setAttributes( {
								themeColor: value
									? getColorSlug( value, themeOptions() )
									: undefined,
							} ),
						label: __( 'Background' ),
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
			<PanelBody title={ __( 'Display Options' ) }>
				<ToggleControl
					label={ __( 'Hide teaser when drawer is open' ) }
					checked={ hideTeaser }
					onChange={ () => setAttributes( { hideTeaser: ! hideTeaser } ) }
				/>
				{ backgroundId && (
					<ToggleControl
						label={ __( 'Round photos' ) }
						checked={ round }
						onChange={ () => setAttributes( { round: ! round } ) }
					/>
				) }
				<RadioControl
					label={ __( 'Size' ) }
					selected={ size }
					options={ [
						{
							label: 'Default',
							value: '',
						},
						{
							label: 'Narrow',
							value: 'is-size-narrow',
						},
						{
							label: 'Small',
							value: 'is-size-small',
						},
						{
							label: 'Medium',
							value: 'is-size-medium',
						},
						{
							label: 'Wide',
							value: 'is-size-wide',
						},
					] }
					onChange={ ( option ) => setAttributes( { size: option } ) }
				/>
			</PanelBody>
		</InspectorControls>
	);
};
