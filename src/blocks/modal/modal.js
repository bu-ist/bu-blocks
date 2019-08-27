/**
 * BLOCK: editorial-modal
 *
 * A block with a callout for opening a modal with supplemental or complementary information.
 */

// External dependencies.
import classnames from 'classnames';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import Background, { BackgroundAttributes } from '../../components/background';
import themeOptions from '../../global/theme-options';
import allowedBlocks from '../../components/allowed-blocks';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	Fragment,
} = wp.element;
const {
	InspectorControls,
	InnerBlocks,
	PanelColorSettings,
	RichText,
	withColors,
} = wp.editor;
const {
	select,
} = wp.data;
const {
	hasSelectedInnerBlock,
	isBlockSelected,
} = select( 'core/editor' );
const {
	applyFilters,
} = wp.hooks;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className    Classes assigned to the block.
 * @param {string} themeColor   The theme color assigned to the block.
 * @param {string} backgroundId The id of the background media added to the block.
 */
const getClasses = ( className, themeColor, backgroundId ) => {
	const blockClasses = classnames( {
		[ className ]: className,
		[ `has-${themeColor}-theme` ]: themeColor,
		'has-media': backgroundId,
	} );

	return applyFilters( 'buBlocks.modal.classNames', blockClasses );
};

// Only allow images in the background component for this block.
const allowedMedia = [ 'image' ];

// Register the block.
registerBlockType( 'editorial/modal', {
	title: __( 'Modal' ),
	description: __( 'A block with a callout for opening a modal with supplemental or complementary information.' ),
	icon: 'admin-page',
	category: 'bu-editorial',
	supports: {
		align: true,
	},
	attributes: {
		className: {
			type: 'string',
			default: '',
		},
		clientId: {
			type: 'number',
		},
		themeColor: {
			type: 'string',
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

	// Add the `selected-modal` data attribute when this block or its descendants are selected.
	getEditWrapperProps( { clientId } ) {
		if ( clientId ) {
			const modalHasSelectedBlock = hasSelectedInnerBlock( clientId, true ) || isBlockSelected( clientId );

			return { 'data-selected-modal': ( modalHasSelectedBlock ) ? 'true' : undefined }
		}
	},

	edit: withColors( 'themeColor' )( props => {
		const {
			attributes,
			themeColor,
			setThemeColor,
			setAttributes,
			className,
			clientId,
		} = props;

		const {
			backgroundId,
			calloutHeading,
			calloutText,
			trigger,
		} = attributes;

		// Set the clientId attribute so it can be accessed in the `getEditWrapperProps` function.
		if ( hasSelectedInnerBlock( clientId, true ) || isBlockSelected( clientId ) ) {
			setAttributes( { clientId: clientId } );
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelColorSettings
						title={ __( 'Theme Settings' ) }
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
				<aside className={ getClasses( className, themeColor.slug, backgroundId ) }>
					{ applyFilters( 'buBlocks.modal.afterOpening', '' ) }
					<div className="wp-block-editorial-modal-callout">
						<div className="wp-block-editorial-modal-media">
							<figure className="wp-block-editorial-modal-image">
								<Background
									allowedMediaTypes={ allowedMedia }
									blockProps={ props }
									className="banner-placeholder"
									placeholderText={ __( 'Add Image' ) }
								/>
							</figure>
						</div>
						<div className="wp-block-editorial-modal-callout-content">
							<div className="modal-valign">
								<RichText
									tagName="h1"
									onChange={ value => setAttributes( { calloutHeading: value } ) }
									value={ calloutHeading }
									placeholder={ __( 'Enter heading…' ) }
									formattingControls={ [] }
								/>
								<RichText
									tagName="p"
									onChange={ value => setAttributes( { calloutText: value } ) }
									value={ calloutText }
									placeholder={ __( 'Enter text…' ) }
									formattingControls={ [ 'bold', 'italic', 'link' ] }
								/>
								<div className="wp-block-editorial-modal-trigger-wrapper">
									<RichText
										tagName="p"
										className="js-bu-block-modal-trigger-overlay button"
										onChange={ value => setAttributes( { trigger: value } ) }
										value={ trigger }
										placeholder={ __( 'Enter trigger label…' ) }
										formattingControls={ [] }
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="wp-block-editorial-modal-content js-bu-block-modal-overlay">
						<div className="overlay overlay-scale">
							<a href="#" class="wp-block-editorial-modal-overlay-close js-bu-block-modal-overlay-close">Close</a>
							<article>
								<InnerBlocks
									allowedBlocks={ allowedBlocks() }
								/>
							</article>
						</div>
					</div>
					{ applyFilters( 'buBlocks.modal.beforeClosing', '' ) }
				</aside>
			</Fragment>
		);
	} ),

	save( props ) {
		const {
			attributes,
		} = props;
		const {
			className,
			themeColor,
			calloutHeading,
			calloutText,
			trigger,
			backgroundId,
		} = attributes;

		return (
			<aside className={ getClasses( className, themeColor, backgroundId ) }>
				{ applyFilters( 'buBlocks.modal.afterOpeningOutput', '' ) }
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
				{ applyFilters( 'buBlocks.modal.beforeClosingOutput', '' ) }
			</aside>
		);
	},
} );