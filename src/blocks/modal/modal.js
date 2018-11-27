/**
 * BLOCK: editorial-modal
 *
 * A block with a callout for opening a modal with supplemental or complementary information.
 */

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import Callout from './modal-callout.js';
import Background, { BackgroundAttributes } from '../../components/background/background.js';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { PanelBody, SelectControl } = wp.components;
const { InspectorControls, InnerBlocks } = wp.editor;
const { select } = wp.data;
const { hasSelectedInnerBlock, isBlockSelected } = select( 'core/editor' );

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

// Register the block.
registerBlockType( 'editorial/modal', {

	title: __( 'Modal' ),
	description: __( 'A block with a callout for opening a modal with supplemental or complementary information.' ),
	icon: 'admin-page',
	category: 'bu-editorial',
	attributes: {
		clientId: {
			type: 'number',
		},
		theme: {
			type: 'string',
			default: '',
		},
		calloutHeading: {
			type: 'array',
			source: 'children',
			selector: 'h1'
		},
		calloutText: {
			type: 'array',
			source: 'children',
			selector: '.editorial-modal-callout-text'
		},
		trigger: {
			type: 'array',
			source: 'children',
			selector: '.js-bu-block-modal-trigger-overlay'
		},
		...BackgroundAttributes,
	},
	publicationClassName: publicationClass + '-block-modal',

	// Add the `selected-modal` data attribute when this block or its descendants are selected.
	getEditWrapperProps( { clientId } ) {
		if ( clientId ) {
			const modalHasSelectedBlock = hasSelectedInnerBlock( clientId, true ) || isBlockSelected( clientId );

			return { 'data-selected-modal': ( modalHasSelectedBlock ) ? 'true' : undefined }
		}
	},

	edit( props ) {
		const { attributes, setAttributes, className, clientId } = props;
		const { theme } = attributes;
		const classList = [ className, theme ].join( ' ' ).trim();

		// Set the clientId attribute so it can be accessed in the `getEditWrapperProps` function.
		if ( hasSelectedInnerBlock( clientId, true ) || isBlockSelected( clientId ) ) {
			setAttributes( { clientId: clientId } );
		}

		const controls = (
			<InspectorControls>
				<PanelBody title={ __( 'Display Settings' ) }>
					<SelectControl
						label={ __( 'Theme' ) }
						value={ theme || '' }
						onChange={ value => setAttributes( { theme: value } ) }
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
		);

		return (
			<Fragment>
				{ controls }
				<aside className={ classList }>
					<Callout
						attributes={ attributes }
						setAttributes={ setAttributes }
					>
						<Background
							blockProps={ props }
							className='banner-placeholder'
							controlPanelTitle={ __( 'Callout Background' ) }
						/>
					</Callout>
					<div className="wp-block-editorial-modal-content js-bu-block-modal-overlay">
						<div className="overlay overlay-scale">
							<a href="#" class="wp-block-editorial-modal-overlay-close js-bu-block-modal-overlay-close">Close</a>
							<article>
								<InnerBlocks />
							</article>
						</div>
					</div>
				</aside>
			</Fragment>
		);
	},

	save( props ) {
		const { attributes, className } = props;
		const { theme, calloutHeading, calloutText, trigger } = attributes;
		const classList = [ className, theme, 'js-bu-block-modal' ].join( ' ' ).trim();

		return (
			<aside className={ classList }>
				<div className="wp-block-editorial-modal-callout">
					<div className="wp-block-editorial-modal-media">
						<figure className="wp-block-editorial-modal-image">
							<Background
								blockProps={ props }
								className="banner-placeholder"
							/>
						</figure>
					</div>
					<div className="wp-block-editorial-modal-callout-content">
						<div className="modal-valign">
							<h1>{ calloutHeading }</h1>
							<p className="editorial-modal-callout-text">{ calloutText }</p>
							<p>
								<a href="#" className="js-bu-block-modal-trigger-overlay button">{ trigger }</a>
							</p>
						</div>
					</div>
				</div>
				<div className="wp-block-editorial-modal-content js-bu-block-modal-overlay">
					<div className="overlay overlay-scale">
						<a href="#" class="wp-block-editorial-modal-overlay-close js-bu-block-modal-overlay-close">Close</a>
						<article>
							<InnerBlocks.Content />
						</article>
					</div>
				</div>
			</aside>
		);
	},
} );