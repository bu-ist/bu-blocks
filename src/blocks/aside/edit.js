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
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;
const {
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	withColors,
	useBlockProps,
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;

const BUAsideEdit = ( props ) => {
	const { attributes, className, themeColor, setThemeColor, presetTemplate } =
		props;

	const classes = classnames( className, {
		[ `has-${ themeColor.slug }-background` ]: themeColor.slug,
	} );

	const blockProps = useBlockProps( {
		className: classes,
	} );

	return (
		<Fragment>
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
			</InspectorControls>
			<aside { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ allowedBlocks() }
					template={ presetTemplate }
				/>
			</aside>
		</Fragment>
	);
};

export default compose( [ withColors( 'themeColor' ) ] )( BUAsideEdit );
