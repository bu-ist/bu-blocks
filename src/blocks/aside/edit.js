/**
 * Edit function for the aside block.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import themeOptions from '../../global/theme-options.js';

// WordPress dependencies.
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;
const { InnerBlocks, InspectorControls, PanelColorSettings, withColors } = wp.editor;

class BUAsideEdit extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			className,
			themeColor,
			setThemeColor,
			presetTemplate,
		} = this.props;

		const allowedBlocks = [ 'core/image', 'core/heading', 'core/paragraph', 'core/button' ];

		const classes = classnames(
			className,
			{ [ `has-${themeColor.slug}-background` ]: themeColor.slug }
		);

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
				<aside className={ classes }>
					<InnerBlocks
						allowedBlocks={ allowedBlocks }
						template={ presetTemplate }
					/>
				</aside>
			</Fragment>
		);
	}
}

export default compose( [
	withColors( 'themeColor' )
] )( BUAsideEdit );