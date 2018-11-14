/**
 * BLOCK: bu-aside-cgb
 *
 * A container for related information that accepts image,
 * headline, paragraph, and button blocks as children.
 */

// Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { PanelBody, SelectControl } = wp.components;
const { InspectorControls, InnerBlocks } = wp.editor;

// Register the block.
registerBlockType( 'editorial/aside', {

	title: __( 'Aside' ),
	description: __( 'Add an aside with related information. Accepts image, headline, paragraph, and button blocks as children.' ),
	icon: 'format-aside',
	category: 'bu-editorial',
	supports: {
		align: [ 'left', 'right' ],
	},
	attributes: {
		colorScheme: {
			type: 'string',
			default: '',
		},
	},

	edit( { attributes, setAttributes, className } ) {
		const { colorScheme } = attributes;
		const allowedBlocks = [ 'core/image', 'core/heading', 'core/paragraph', 'core/button' ];

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Color Settings' ) }>
						<SelectControl
							label={ __( 'Color Scheme' ) }
							value={ colorScheme || '' }
							onChange={ value => setAttributes( { colorScheme: value } ) }
							options={ [
								{ value: '', label: __( 'None' ) },
								{ value: 'has-light-background', label: __( 'Light Background' ) },
								{ value: 'has-dark-background', label: __( 'Dark Background' ) },
								{ value: 'has-primary-background', label: __( 'Primary Background' ) },
							] }
						/>
					</PanelBody>
				</InspectorControls>
				<aside className={ [ className, colorScheme ].join( ' ' ).trim() }>
					<InnerBlocks
						allowedBlocks={ allowedBlocks }
					/>
				</aside>
			</Fragment>
		);
	},

	save( { attributes, className } ) {
		const { colorScheme } = attributes;

		return (
			<aside className={ [ className, colorScheme ].join( ' ' ).trim() }>
				<InnerBlocks.Content />
			</aside>
		);
	},
} );