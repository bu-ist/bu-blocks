/**
 * BLOCK: bu-aside-cgb
 *
 * A container for related information that accepts image,
 * headline, paragraph, and button blocks as children.
 */

// External dependencies.
import classnames from 'classnames';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import RegisterBlockPreset from '../../global/register-block-preset.js';
import themeOptions from '../../global/theme-options.js';
import allowedBlocks from '../../components/allowed-blocks';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	withColors,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;
const {
	Fragment,
} = wp.element;
const {
	applyFilters,
} = wp.hooks;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className  Classes assigned to the block.
 * @param {string} themeColor The theme color assigned to the block.
 */
const getClasses = ( className, themeColor ) => {
	const blockClasses = classnames( {
		[ className ]: className,
		[ `has-${themeColor}-background` ]: themeColor,
	} );

	return applyFilters( 'buBlocks.aside.classNames', blockClasses );
};

// Register the block.
const asideBlock = registerBlockType( 'editorial/aside', {
	title: __( 'Aside' ),
	description: __( 'Add an aside with related information. Accepts image, headline, paragraph, and button blocks as children.' ),
	icon: 'format-aside',
	category: 'bu-editorial',
	supports: {
		align: [ 'left', 'right' ],
	},
	attributes: {
		themeColor: {
			type: 'string',
		},
	},

	edit: withColors( 'themeColor' )( props => {
		const {
			className,
			themeColor,
			setThemeColor,
			presetTemplate,
		} = props;

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
				<aside className={ getClasses( className, themeColor.slug ) }>
					{ applyFilters( 'buBlocks.aside.afterOpening', '' ) }
					<InnerBlocks
						allowedBlocks={ allowedBlocks() }
						template={ presetTemplate }
					/>
					{ applyFilters( 'buBlocks.aside.beforeClosing', '' ) }
				</aside>
			</Fragment>
		);
	} ),

	save( { attributes, className } ) {
		const {
			themeColor
		} = attributes;

		return (
			<aside className={ getClasses( className, themeColor ) }>
				{ applyFilters( 'buBlocks.aside.afterOpeningOutput', '' ) }
				<InnerBlocks.Content />
				{ applyFilters( 'buBlocks.aside.beforeClosingOutput', '' ) }
			</aside>
		);
	},
} );

const presetTemplate = [
	[ 'core/image' ],
	[ 'core/heading', { placeholder: 'Enter aside title…' } ],
	[ 'core/paragraph', { placeholder: 'Enter aside content…' } ],
	[ 'core/button' ]
];

RegisterBlockPreset( asideBlock, presetTemplate );
