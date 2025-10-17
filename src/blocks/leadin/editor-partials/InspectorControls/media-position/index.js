// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { PanelBody, SelectControl } from '@wordpress/components';

/**
 * Media positioning controls for the Leadin block
 * Returns an Inspector PanelBody component with the background media positioning controls.
 *
 * @param {Object}   props               - Component props
 * @param {Object}   props.attributes    - Block attributes
 * @param {Function} props.setAttributes - Function to update attributes
 * @return {JSX.Element} Media positioning controls panel
 */
export const MediaPositioningControls = ( props ) => {
	const { attributes, setAttributes } = props;
	const { imageFocus } = attributes;

	return (
		<PanelBody title={ __( 'Media Positioning' ) } initialOpen={ false }>
			<SelectControl
				label={ __( 'Crop Media to:' ) }
				value={ imageFocus }
				onChange={ ( value ) => setAttributes( { imageFocus: value } ) }
				options={ [
					{ value: 'left-top', label: __( 'Left Top' ) },
					{
						value: 'left-middle',
						label: __( 'Left Center' ),
					},
					{
						value: 'left-bottom',
						label: __( 'Left Bottom' ),
					},
					{ value: 'center-top', label: __( 'Center Top' ) },
					{ value: 'center-middle', label: __( 'Center' ) },
					{
						value: 'center-bottom',
						label: __( 'Center Bottom' ),
					},
					{ value: 'right-top', label: __( 'Right Top' ) },
					{
						value: 'right-middle',
						label: __( 'Right Center' ),
					},
					{
						value: 'right-bottom',
						label: __( 'Right Bottom' ),
					},
				] }
			/>
		</PanelBody>
	);
};
