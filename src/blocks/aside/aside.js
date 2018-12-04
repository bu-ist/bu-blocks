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

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { PanelBody, SelectControl } = wp.components;
const { InspectorControls, InnerBlocks } = wp.editor;

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

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
		colorScheme: {
			type: 'string',
			default: '',
		},
	},
	publicationClassName: publicationClass + '-block-aside',

	edit( props ) {
		const { attributes, setAttributes, className, presetTemplate } = props;
		const { colorScheme } = attributes;
		const allowedBlocks = [ 'core/image', 'core/heading', 'core/paragraph', 'core/button' ];
		const classes = classnames(
			className,
			{ [ colorScheme ]: colorScheme }
		);

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
				<aside className={ classes }>
					<InnerBlocks
						allowedBlocks={ allowedBlocks }
						template={ presetTemplate }
					/>
				</aside>
			</Fragment>
		);
	},

	save( { attributes, className } ) {
		const { colorScheme } = attributes;
		const classes = classnames(
			className,
			{ [ colorScheme ]: colorScheme }
		);

		return (
			<aside className={ classes }>
				<InnerBlocks.Content />
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