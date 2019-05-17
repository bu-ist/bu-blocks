/**
 * BLOCK: bu/leadin
 *
 * Register a leadin block with Gutenberg.
 */

// External dependencies.
import classnames from 'classnames';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies
import themeOptions from '../../global/theme-options';
import Background, { BackgroundAttributes } from '../../components/background';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	Fragment
} = wp.element;
const {
	CheckboxControl,
	PanelBody,
	Path,
	RangeControl,
	SelectControl,
	SVG,
} = wp.components;
const {
	InspectorControls,
	PanelColorSettings,
	RichText,
	withColors,
} = wp.editor;
const {
	applyFilters,
} = wp.hooks;

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

// Block attributes.
const blockAttributes = {
	head: {
		type: 'string',
	},
	deck: {
		type: 'string',
	},
	caption: {
		type: 'string',
	},
	imageFocus: {
		type: 'string',
		default: 'center-middle',
	},
	textPositionX: {
		type: 'string',
		default: 'x-center',
	},
	textPositionY: {
		type: 'string',
		default: '',
	},
	wide: {
		type: 'boolean'
	},
	box: {
		type: 'boolean'
	},
	flip: {
		type: 'boolean'
	},
	className: {
		type: 'string',
	},
	themeColor: {
		type: 'string',
	},
	primaryTerm: {
		type: 'string',
	},
	metabar: {
		type: 'boolean',
		default: true,
	},
	boxOpacity: {
		type: 'number',
		default: 100,
	},
	...BackgroundAttributes,
};

// Block styles.
const blockStyles = [
	{
		name: 'text-to-image',
		label: __( 'Text over Horizontal Image' ),
	},
	{
		name: 'image-to-text',
		label: __( 'Horizontal Image over Text' ),
	},
	{
		name: 'emphasis-on-text',
		label: __( 'Overlapping Text' ),
	},
	{
		name: 'text-over-image',
		label: __( 'Image with Text Overlay' ),
	},
	{
		name: 'side-by-side',
		label: __( 'Vertical Image and Text Side By Side' ),
	},
];

const blockSupports = {
	className: false,
	customClassName: false,
	multiple: false,
};

registerBlockType( 'bu/leadin', {
	title: __( 'Leadin' ),
	description: __( 'The opening headline and image of an article.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu',
	attributes: blockAttributes,
	styles: blockStyles,
	supports: blockSupports,

	edit: withColors( 'themeColor' )( props => {
		// Get the block properties and attributes.
		const {
			attributes: {
				backgroundId,
				head,
				deck,
				caption,
				imageFocus,
				textPositionX,
				textPositionY,
				wide,
				box,
				flip,
				primaryTerm,
				metabar,
				boxOpacity,
			},
			themeColor,
			setThemeColor,
			setAttributes,
			className,
			isSelected,
		} = props;

		const isStyleEmphasisOnText = className.includes( 'is-style-emphasis-on-text' );
		const isStyleTextOverImage = className.includes( 'is-style-text-over-image' );
		const isStyleSideBySide = className.includes( 'is-style-side-by-side' );

		const classes = classnames(
			'wp-block-editorial-leadin',
			publicationClass + '-block-editorial-leadin',
			className,
			{
				'has-box': box && ( isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide ),
				'has-wider': wide && isStyleSideBySide,
				'has-flip': flip && isStyleSideBySide,
				'has-media': backgroundId,
				[ `has-media-focus-${imageFocus}` ]: imageFocus,
				[ `has-text-position-${textPositionX}` ]: textPositionX && isStyleTextOverImage,
				[ `has-text-position-${textPositionY}` ]: textPositionY && isStyleTextOverImage,
				[ `has-${themeColor.slug}-theme` ]: themeColor.slug,
			}
		);

		const boxClasses = classnames(
			'container-words-inner',
			{
				[ `has-opacity-${boxOpacity}` ]: boxOpacity !== 100 && box && ( isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide ),
			}
		);

		const primaryTermInput = document.getElementById( '_bu_prepress_primary_term_select' );

		// Check that the primary term input exists, as the feature may not be supported.
		if ( primaryTermInput ) {
			if ( primaryTermInput.value ) {
				setAttributes( { primaryTerm: primaryTermInput.value } );
			}

			primaryTermInput.addEventListener( "change", function() {
				setAttributes( { primaryTerm: primaryTermInput.value } );
			} );
		}

		// Return the background media positioning controls if a background is set.
		const mediaPositioningControls = () => {
			if ( ! backgroundId ) {
				return null;
			}

			return (
				<PanelBody title={ __( 'Media Positioning' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Crop Media to:' ) }
						value={ imageFocus }
						onChange={ value => setAttributes( { imageFocus: value } ) }
						options={ [
							{ value: 'left-top', label: __( 'Left Top' ) },
							{ value: 'left-middle', label: __( 'Left Center' ) },
							{ value: 'left-bottom', label: __( 'Left Bottom' ) },
							{ value: 'center-top', label: __( 'Center Top' ) },
							{ value: 'center-middle', label: __( 'Center' ) },
							{ value: 'center-bottom', label: __( 'Center Bottom' ) },
							{ value: 'right-top', label: __( 'Right Top' ) },
							{ value: 'right-middle', label: __( 'Right Center' ) },
							{ value: 'right-bottom', label: __( 'Right Bottom' ) },
						] }
					/>
				</PanelBody>
			);
		};

		// Return the text positioning controls if the 'Image with Text Overlay' style is set.
		const textPositioningControls = () => {
			if ( ! isStyleTextOverImage ) {
				return null;
			}

			return (
				<Fragment>
					<SelectControl
						label={ __( 'Horizontal Text Positioning' ) }
						value={ textPositionX }
						onChange={ value => setAttributes( { textPositionX: value } ) }
						options={ [
							{ value: 'x-left', label: __( 'Left' ) },
							{ value: 'x-center', label: __( 'Center' ) },
							{ value: 'x-right', label: __( 'Right' ) }
						] }
					/>
					<SelectControl
						label={ __( 'Vertical Text Positioning' ) }
						value={ textPositionY }
						onChange={ value => setAttributes( { textPositionY: value } ) }
						options={ [
							{ value: 'y-top', label: __( 'Top' ) },
							{ value: '', label: __( 'Center' ) },
							{ value: 'y-bottom', label: __( 'Bottom' ) }
						] }
					/>
				</Fragment>
			);
		};

		// Return layout controls for the 'Vertical Image and Text Side By Side' style.
		const sideBySideLayoutControls = () => {
			if ( ! className.includes( 'is-style-side-by-side' ) ) {
				return null;
			}

			return (
				<Fragment>
					<CheckboxControl
						label={ __( 'Flip Order' ) }
						checked={ flip }
						onChange={ ( flip ) => { setAttributes( { flip } ) } }
					/>
					<CheckboxControl
						label={ __( 'Wide Layout' ) }
						checked={ wide }
						onChange={ ( wide ) => { setAttributes( { wide } ) } }
					/>
				</Fragment>
			);
		};

		// Return layout options if specific styles are set.
		const layoutControls = () => {
			if ( ! ( isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide ) ) {
				return null;
			}

			return (
				<PanelBody title={ __( 'Layout Options' ) }>
					{ sideBySideLayoutControls() }
					{ textPositioningControls() }
					<CheckboxControl
						label={ __( 'Boxed Text' ) }
						checked={ box }
						onChange={ ( box ) => { setAttributes( { box } ) } }
					/>
					{ box &&
						<RangeControl
							label={ __( 'Box Opacity' ) }
							value={ boxOpacity }
							onChange={ value => setAttributes( { boxOpacity: value } ) }
							min={ 10 }
							max={ 100 }
							step={ 10 }
						/>
					}
				</PanelBody>
			);
		};

		// Return the block editing interface.
		return (
			<Fragment>
				<div className={ classes }>
					<div class="container-lockup">
						<div class="wp-block-leadin-media">
							<Background
								blockProps={ props }
								controlPanelTitle={ __( 'Media' ) }
							/>
						</div>
						<div class="container-words-outer">
							<div class={ boxClasses }>
								{ primaryTerm && (
									<span class="wp-prepress-tag">{ primaryTerm }</span>
								) }
								<RichText
									tagName="h1"
									className="head"
									placeholder={ __( 'Add headline' ) }
									value={ head }
									onChange={ value => setAttributes( { head: value } ) }
									formattingControls={ [ 'bold', 'italic' ] }
									keepPlaceholderOnFocus
								/>
								{ ( ! RichText.isEmpty( deck ) || isSelected ) && (
									<RichText
										tagName="h4"
										className="deck"
										placeholder={ __( 'Add subheader (optional)' ) }
										value={ deck }
										onChange={ value => setAttributes( { deck: value } ) }
										formattingControls={ [ 'bold', 'italic' ] }
									/>
								) }
							</div>
						</div>
					</div>
					{ ( ! RichText.isEmpty( caption ) || isSelected ) && (
						<RichText
							tagName="p"
							className="wp-block-editorial-leadin-caption wp-prepress-component-caption"
							placeholder={ __( 'Add a caption and/or media credit...' ) }
							value={ caption }
							onChange={ value => setAttributes( { caption: value } ) }
							formattingControls={ [ 'bold', 'italic', 'link' ] }
							keepPlaceholderOnFocus
						/>
					) }
				</div>

				{ applyFilters( 'buBlocks.leadin.metaBar', '', metabar ) }

				<InspectorControls>
					{ mediaPositioningControls() }
					{ layoutControls() }
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						initialOpen={ false }
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
			</Fragment>
		);
	} ),

	save() {
		// Rendering handled in PHP.
		return null;
	},
} );
