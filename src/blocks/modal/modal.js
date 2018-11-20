/**
 * BLOCK: editorial-modal
 *
 * A block with a callout for opening a modal with supplemental or complementary information.
 */

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import './modal-callout';
import './modal-content';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { PanelBody, SelectControl } = wp.components;
const { InspectorControls, InnerBlocks } = wp.editor;

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

const allowedBlocks = [ 'editorial/modal-callout', 'editorial/modal-content' ];
const template = [ [ 'editorial/modal-callout' ], [ 'editorial/modal-content' ] ];

// Register the block.
registerBlockType( 'editorial/modal', {

	title: __( 'Modal' ),
	description: __( 'A block with a callout for opening a modal with supplemental or complementary information.' ),
	icon: 'admin-page',
	category: 'bu-editorial',
	attributes: {
		background: {
			type: 'string',
			default: '',
		},
	},
	publicationClassName: publicationClass + '-block-modal',

	edit( { attributes, setAttributes, className } ) {
		const { background } = attributes;
		const classList = [ className, background ].join( ' ' ).trim();

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Modal Background Settings' ) }>
						<SelectControl
							label={ __( 'Background' ) }
							value={ background || '' }
							onChange={ value => setAttributes( { background: value } ) }
							options={ [
								{ value: '', label: __( 'Default' ) },
								{ value: 'has-light-theme', label: __( 'Light' ) },
								{ value: 'has-dark-theme', label: __( 'Dark' ) },
								{ value: 'has-primary-theme', label: __( 'Primary' ) },
								{ value: 'has-secondary-theme', label: __( 'Secondary' ) },
								{ value: 'has-tertiary-theme', label: __( 'Tertiary' ) },
								{ value: 'has-quaternary-theme', label: __( 'Quaternary' ) },
							] }
						/>
					</PanelBody>
				</InspectorControls>
				<aside className={ classList }>
					<InnerBlocks
						allowedBlocks={ allowedBlocks }
						template={ template }
						templateLock='all'
					/>
				</aside>
			</Fragment>
		);
	},

	save( { attributes, className } ) {
		const { background } = attributes;
		const classList = [ className, background, 'js-bu-block-modal' ].join( ' ' ).trim();

		return (
			<aside className={ classList }>
				<InnerBlocks.Content />
			</aside>
		);
	},
} );