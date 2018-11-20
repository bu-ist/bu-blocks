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
const { select } = wp.data;
const { getSelectedBlockClientId, getClientIdsOfDescendants } = select( 'core/editor' );

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
		selectedDescendants: {
			type: 'bool',
			default: '',
		},
		clientId: {
			type: 'number',
		},
	},
	publicationClassName: publicationClass + '-block-modal',

	// Add the `selected-modal` data attribute when this block or its descendants are selected.
	getEditWrapperProps( attributes ) {
		const { clientId } = attributes;

		if ( clientId ) {
			let modalClientIds = getClientIdsOfDescendants( [ clientId ] );
				modalClientIds.push( clientId );

			const selectedIsBlockInModal = modalClientIds.includes( getSelectedBlockClientId() );

			return { 'data-selected-modal': ( selectedIsBlockInModal ) ? 'true' : undefined }
		}
	},

	edit( { attributes, setAttributes, className, clientId } ) {
		const { background } = attributes;
		const classList = [ className, background ].join( ' ' ).trim();

		// Set the clientId attribute so it can be accessed in the `getEditWrapperProps` function.
		setAttributes( { clientId: clientId } );

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