// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { ToggleControl } from '@wordpress/components';

/**
 * Side By Side Leadin Layout Controls
 *
 * @param {Object} props - The component props.
 * @return {JSX.Element} The side by side layout controls component.
 */
export const SideBySideLayoutControls = ( props ) => {
	const { attributes, setAttributes } = props;
	const { flip, wide } = attributes;

	return (
		<>
			<ToggleControl
				label={ __( 'Flip Order' ) }
				checked={ flip }
				onChange={ () => setAttributes( { flip: ! flip } ) }
			/>
			<ToggleControl
				label={ __( 'Wide Layout' ) }
				checked={ wide }
				onChange={ () => setAttributes( { wide: ! wide } ) }
			/>
		</>
	);
};
