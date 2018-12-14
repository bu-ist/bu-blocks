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

// Internal dependencies.
import edit from './edit.js';
import Background, { BackgroundAttributes } from '../../components/background/background.js';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Path, SVG } = wp.components;
const { RichText, getColorClassName } = wp.editor;

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
	themeColor: {
		type: 'string',
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
};

registerBlockType( 'bu/leadin', {
	title: __( 'Leadin' ),
	description: __( 'The opening headline and image of an article.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu',
	attributes: blockAttributes,
	styles: blockStyles,
	supports: blockSupports,

	edit,

	save( props ) {
		const { attributes } = props;

		const {
			backgroundId,
			head,
			deck,
			imageFocus,
			textPositionX,
			textPositionY,
			wide,
			box,
			flip,
			className,
			themeColor,
		} = attributes;

		const isStyleEmphasisOnText = className && className.includes( 'is-style-emphasis-on-text' );
		const isStyleTextOverImage = className && className.includes( 'is-style-text-over-image' );
		const isStyleSideBySide = className && className.includes( 'is-style-side-by-side' );

		const classes = classnames(
			'wp-block-leadin',
			publicationClass + '-block-leadin',
			className,
			{
				'has-box': box && ( isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide ),
				'has-wider': wide && isStyleSideBySide,
				'has-flip': flip && isStyleSideBySide,
				'has-media': backgroundId,
				[ `has-image-focus-${imageFocus}` ]: imageFocus,
				[ `has-text-position-${textPositionX}` ]: textPositionX && isStyleTextOverImage,
				[ `has-text-position-${textPositionY}` ]: textPositionY && isStyleTextOverImage,
				[ getColorClassName( 'theme', themeColor ) ]: getColorClassName( 'theme', themeColor ),
			}
		);

		return(
			<div className={ classes }>
				<div class="container-lockup">
					<div class="wp-block-leadin-media">
						{ Background( props ) }
					</div>
					<div class="container-words-outter">
						<div class="container-words-inner">
							<span href="http://www.bu.edu/" class="wp-prepress-tag"></span>
							<RichText.Content
								tagName="h1"
								className="head"
								value={ head }
							/>
							{ ! RichText.isEmpty( deck ) && (
								<RichText.Content
									tagName="h4"
									className="deck"
									value={ deck }
								/>
							) }
						</div>
					</div>
				</div>
			</div>
		);
	},
} );
