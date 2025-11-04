// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { SelectControl } from '@wordpress/components';

// Return the text positioning controls if the 'Image with Text Overlay' style is set.
export const TextPositioningControls = ( props ) => {
	const { attributes, setAttributes } = props;
	const { textPositionX, textPositionY } = attributes;

	return (
		<>
			<SelectControl
				label={ __( 'Horizontal Text Positioning' ) }
				value={ textPositionX }
				onChange={ ( value ) =>
					setAttributes( { textPositionX: value } )
				}
				options={ [
					{ value: 'x-left', label: __( 'Left' ) },
					{ value: 'x-center', label: __( 'Center' ) },
					{ value: 'x-right', label: __( 'Right' ) },
				] }
			/>
			<SelectControl
				label={ __( 'Vertical Text Positioning' ) }
				value={ textPositionY }
				onChange={ ( value ) =>
					setAttributes( { textPositionY: value } )
				}
				options={ [
					{ value: 'y-top', label: __( 'Top' ) },
					{ value: '', label: __( 'Center' ) },
					{ value: 'y-bottom', label: __( 'Bottom' ) },
				] }
			/>
		</>
	);
};
