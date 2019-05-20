/**
 * BLOCK: bu-editorial-drawer
 *
 * A block that works a bit like BU Collapsible to open and close a drawer of content.
 */

// External dependencies.
import classnames from 'classnames';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import Background, { BackgroundAttributes } from '../../components/background';
import themeOptions from '../../global/theme-options.js';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	PanelBody,
	Path,
	SVG,
	ToggleControl,
} = wp.components;
const {
	RichText,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	withColors,
} = wp.editor;
const {
	select
} = wp.data;
const {
	hasSelectedInnerBlock,
	isBlockSelected,
} = select( 'core/editor' );

// Get the current publication owner.
const publication = document.getElementById( 'bu_publication_owner' );

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string}  className  Default classes assigned to the block.
 * @param {boolean} hideTeaser Whether to display the teaser.
 * @param {string}  themeColor The assigned background color.
 */
const getClasses = ( className, hideTeaser, themeColor ) => {
	return (
		classnames(
			'js-bu-block-drawer',
			{
				'has-hide-teaser': hideTeaser,
				[ className ]: className,
				[ `has-${themeColor}-background` ]: themeColor,
			}
		)
	);
};

// Register the block.
registerBlockType( 'editorial/drawer', {
	title: __( 'Drawer' ),
	description: __( 'Add content that can be toggled.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu-editorial',
	attributes: {
		button: {
			type: 'string',
			default: '',
			source: 'text',
			selector: '.button.js-bu-block-drawer-open'
		},
		className: {
			type: 'string',
		},
		clientId: {
			type: 'number',
		},
		hed: {
			type: 'string',
			default: '',
			source: 'html',
			selector: 'h2'
		},
		hideTeaser: {
			type: 'boolean',
			default: false,
		},
		lede: {
			type: 'string',
			default: '',
			source: 'html',
			selector: 'p'
		},
		themeColor: {
			type: 'string',
			default: '',
		},
		...BackgroundAttributes,
	},
	publicationClassName: ( publication.value ) ? `${publication.value}-block-editorial-drawer` : '',

	// Add the `selected-drawer` data attribute when this block or its descendants are selected.
	getEditWrapperProps( { clientId } ) {
		if ( clientId ) {
			const drawerHasSelectedBlock = hasSelectedInnerBlock( clientId, true ) || isBlockSelected( clientId );

			return { 'data-selected-drawer': ( drawerHasSelectedBlock ) ? 'true' : undefined }
		}
	},

	edit: withColors( 'themeColor' )( props => {
		// Get the properties and attributes we'll need.
		const {
			attributes: {
				backgroundId,
				button,
				hed,
				hideTeaser,
				lede,
			},
			className,
			clientId,
			isSelected,
			setAttributes,
			setThemeColor,
			themeColor,
		} = props;

		// Set the clientId attribute so it can be accessed in the `getEditWrapperProps` function.
		if ( hasSelectedInnerBlock( clientId, true ) || isBlockSelected( clientId ) ) {
			setAttributes( { clientId: clientId } );
		}

		return (
			<aside className={ getClasses( className, hideTeaser, themeColor.slug ) }>
				<div className="wp-block-editorial-drawer-teaser">
					{ ( backgroundId || isSelected || hasSelectedInnerBlock( clientId, true ) ) &&
						<figure>
							<Background
								allowedMediaTypes={ [ 'image' ] }
								blockProps={ props }
								controlPanelTitle={ __( 'Image' ) }
								inlinePlaceholder={ true }
								options={ [] }
								placeholderText={ __( 'Add Image' ) }
							/>
						</figure>
					}
					<RichText
						formattingControls={ [] }
						keepPlaceholderOnFocus={ true }
						onChange={ value => setAttributes( { hed: value } ) }
						placeholder={ __( 'Enter heading…' ) }
						tagName="h2"
						value={ hed }
					/>
					<RichText
						formattingControls={ [ 'bold', 'italic', 'link' ] }
						keepPlaceholderOnFocus={ true }
						onChange={ value => setAttributes( { lede: value } ) }
						placeholder={ __( 'Enter text…' ) }
						tagName="p"
						value={ lede }
					/>
					<div className="wp-block-editorial-drawer-open-wrapper">
						<RichText
							formattingControls={ [] }
							keepPlaceholderOnFocus={ true }
							className="button js-bu-block-drawer-open"
							onChange={ value => setAttributes( { button: value } ) }
							placeholder={ __( 'Enter button label…' ) }
							tagName="p"
							value={ button }
						/>
					</div>
				</div>
				<section className="wp-block-editorial-drawer-content js-bu-block-drawer-content">
					<div className="wp-block-editorial-drawer-wrapper">
						<InnerBlocks
							allowedBlocks={ [
								'core/image',
								'core/heading',
								'core/paragraph',
							] }
						/>
						<div className="wp-block-editorial-drawer-close">
							<button className="wp-block-editorial-drawer-close-button js-bu-block-drawer-close">Close</button>
						</div>
					</div>
				</section>
				<InspectorControls>
					<PanelColorSettings
						title={ __( 'Background Color' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: themeColor.color,
								onChange: setThemeColor,
								label: __( 'Background' ),
								disableCustomColors: true,
								colors: themeOptions(),
							},
						] }
					/>
					<PanelBody title={ __( 'Teaser Display' ) } >
						<ToggleControl
							label={ __( 'Hide Teaser' ) }
							checked={ hideTeaser }
							onChange={ () => setAttributes( { hideTeaser: !hideTeaser } ) }
						/>
					</PanelBody>
				</InspectorControls>
			</aside>
		);
	} ),

	save( props ) {
		// Get the properties and attributes we'll need.
		const {
			attributes: {
				backgroundId,
				button,
				className,
				hed,
				hideTeaser,
				lede,
				themeColor,
			},
		} = props;

		return (
			<aside className={ getClasses( className, hideTeaser, themeColor ) }>
				<div className="wp-block-editorial-drawer-teaser">
					{ backgroundId &&
						<figure>
							<Background blockProps={ props } />
						</figure>
					}
					{ ! RichText.isEmpty( hed ) &&
						<RichText.Content
							tagName="h2"
							value={ hed }
						/>
					}
					{ ! RichText.isEmpty( lede ) &&
						<RichText.Content
							tagName="p"
							value={ lede }
						/>
					}
					{ button && <a href="#" className="button js-bu-block-drawer-open">{ button }</a> }
				</div>
				<section className="wp-block-editorial-drawer-content js-bu-block-drawer-content">
					<div className="wp-block-editorial-drawer-wrapper">
						<InnerBlocks.Content />
						<div className="wp-block-editorial-drawer-close">
							<button className="wp-block-editorial-drawer-close-button js-bu-block-drawer-close">Close</button>
						</div>
					</div>
				</section>
			</aside>
		);
	},
} );
