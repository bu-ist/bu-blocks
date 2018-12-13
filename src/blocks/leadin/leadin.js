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

// WordPress dependencies.
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { CheckboxControl, SelectControl, PanelBody, Path, SVG } = wp.components;
const { InspectorControls, RichText } = wp.editor;

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

// Block attributes.
const blockAttributes = {
	media: {},
	head: {
		type: 'array',
		source: 'children',
		selector: '.head'
	},
	deck: {
		type: 'array',
		source: 'children',
		selector: '.deck'
	},
	imageFocus: {
		type: 'string',
		default: 'center-middle'
	},
	textPositionX: {
		type: 'string'
	},
	textPositionY: {
		type: 'string'
	},
	wide: {
		type: 'bool'
	},
	box: {
		type: 'bool'
	},
	flip: {
		type: 'bool'
	},
	className: {
		type: 'string',
	},
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
};

registerBlockType( 'bu/leadin', {
	title: __( 'Leadin' ),
	description: __( 'The opening headline and image of an article.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu',
	attributes: blockAttributes,
	styles: blockStyles,
	supports: blockSupports,
	publicationClassName: publicationClass + '-block-leadin',

	edit( { attributes, setAttributes, className } ) {
		const {
			media,
			head,
			deck,
			imageFocus,
			textPositionX,
			textPositionY,
			wide,
			box,
			flip,
		} = attributes;

		const isStyleEmphasisOnText = className.includes( 'is-style-emphasis-on-text' );
		const isStyleTextOverImage = className.includes( 'is-style-text-over-image' );
		const isStyleSideBySide = className.includes( 'is-style-side-by-side' );

		const classes = classnames(
			'wp-block-leadin',
			className,
			{
				'has-box': box && ( isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide ),
				'has-wider': wide && isStyleSideBySide,
				'has-flip': flip && isStyleSideBySide,
				[ `has-image-focus-${imageFocus}` ]: imageFocus,
				[ `has-text-position-${textPositionX}` ]: textPositionX && isStyleTextOverImage,
				[ `has-text-position-${textPositionY}` ]: textPositionY && isStyleTextOverImage,
			}
		);

		return(
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Image Options' ) }>
						<SelectControl
							label={ __( 'Image Focal Point' ) }
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
					{ ( isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide ) && (
						<PanelBody title={ __( 'Layout Options' ) }>
							{ isStyleTextOverImage && (
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
							) }
							{ isStyleTextOverImage && (
								<SelectControl
									label={ __( 'Vertical Text Positioning' ) }
									value={ textPositionY }
									onChange={ value => setAttributes( { textPositionY: value } ) }
									options={ [
										{ value: 'y-top', label: __( 'Top' ) },
										{ value: 'y-middle', label: __( 'Center' ) },
										{ value: 'y-bottom', label: __( 'Bottom' ) }
									] }
								/>
							) }
							{ ( isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide ) && (
								<CheckboxControl
									label={ __( 'Boxed Text' ) }
									checked={ box }
									onChange={ ( box ) => { setAttributes( { box } ) } }
								/>
							) }
							{ className.includes( 'is-style-side-by-side' ) && (
								<CheckboxControl
									label={ __( 'Flip Order' ) }
									checked={ flip }
									onChange={ ( flip ) => { setAttributes( { flip } ) } }
								/>
							) }
							{ className.includes( 'is-style-side-by-side' ) && (
								<CheckboxControl
									label={ __( 'Wide Layout' ) }
									checked={ wide }
									onChange={ ( wide ) => { setAttributes( { wide } ) } }
								/>
							) }
						</PanelBody>
					) }
				</InspectorControls>
				<div className={ classes }>
					<div class="container-lockup">
						<div class="wp-block-leadin-media">
							<img src="https://www.bu.edu/bostonia/files/2018/10/resize-18-1763-TASTE-004.jpg" />
						</div>
						<div class="container-words-outter">
							<div class="container-words-inner">
								<span href="http://www.bu.edu/" class="wp-prepress-tag"></span>
								<RichText
									tagName="h1"
									className="head"
									placeholder={ __( 'Add headline…' ) }
									value={ head }
									onChange={ value => setAttributes( { head: value } ) }
									formattingControls={ [ 'bold', 'italic' ] }
									keepPlaceholderOnFocus
								/>
								<RichText
									tagName="h4"
									className="deck"
									placeholder={ __( 'Add subheader…' ) }
									value={ deck }
									onChange={ value => setAttributes( { deck: value } ) }
									formattingControls={ [ 'bold', 'italic' ] }
								/>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	},

	save( { attributes } ) {
		const {
			media,
			head,
			deck,
			imageFocus,
			textPositionX,
			textPositionY,
			wide,
			box,
			flip,
			className,
		} = attributes;

		const isStyleEmphasisOnText = className && className.includes( 'is-style-emphasis-on-text' );
		const isStyleTextOverImage = className && className.includes( 'is-style-text-over-image' );
		const isStyleSideBySide = className && className.includes( 'is-style-side-by-side' );

		const classes = classnames(
			'wp-block-leadin',
			className,
			{
				'has-box': box && ( isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide ),
				'has-wider': wide && isStyleSideBySide,
				'has-flip': flip && isStyleSideBySide,
				[ `has-image-focus-${imageFocus}` ]: imageFocus,
				[ `has-text-position-${textPositionX}` ]: textPositionX && isStyleTextOverImage,
				[ `has-text-position-${textPositionY}` ]: textPositionY && isStyleTextOverImage,
			}
		);

		return(
			<div className={ classes }>
				<div class="container-lockup">
					<div class="wp-block-leadin-media">
						 <img src="https://www.bu.edu/bostonia/files/2018/10/resize-18-1763-TASTE-004.jpg" />
					</div>
					<div class="container-words-outter">
						<div class="container-words-inner">
							<span href="http://www.bu.edu/" class="wp-prepress-tag"></span>
							<RichText.Content
								tagName="h1"
								className="head"
								value={ head }
							/>
							<RichText.Content
								tagName="h4"
								className="deck"
								value={ deck }
							/>
						</div>
					</div>
				</div>
			</div>
		);
	},
} );
