/**
 * Edit function for the aside block.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import themeOptions from '../../global/theme-options.js';
import allowedBlocks from '../../components/allowed-blocks';

// WordPress dependencies.
const { __ } = wp.i18n;
const { Fragment, useMemo } = wp.element;
const {
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	useBlockProps,
	getColorObjectByAttributeValues,
	getColorObjectByColorValue,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

export default function Edit( props ) {
	const {
		attributes,
		className,
		presetTemplate,
		setAttributes,
	} = props;

	const { themeColor } = attributes;

	const classes = classnames(
		className,
		{ [ `has-${ themeColor }-background` ]: themeColor }
	);

	const blockProps = useBlockProps( {
		className: classes,
	} );

	// themOptions() returns the full/global color palette added to editor settings.
	const themeOptionsPalette = useMemo( () => themeOptions(), [] );

	// Resolve color objects from slugs using WordPress built-in function
	const themeColorObj = useMemo( () => getColorObjectByAttributeValues( themeOptionsPalette, themeColor ), [ themeOptionsPalette, themeColor ] );

	return (
		<Fragment>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color Settings' ) }
					colorSettings={ [
						{
							value: themeColorObj ? themeColorObj.color : undefined,
							onChange: ( value ) => {
								// Get the color object from the selected color value.
								const newValueColorObj = getColorObjectByColorValue( themeOptionsPalette, value );
								// Set the attribute to the new color slug or an empty string if not found.
								setAttributes( {
									themeColor: newValueColorObj ? newValueColorObj.slug : '',
								} );
							},
							label: __( 'Theme' ),
							disableCustomColors: true,
							colors: themeOptionsPalette,
						},
					] }
				/>
			</InspectorControls>
			<aside { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ allowedBlocks() }
					template={ presetTemplate }
				/>
			</aside>
		</Fragment>
	);
}

