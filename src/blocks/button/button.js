/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

// External dependencies.
import classnames from 'classnames';

//  Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { G, Path, SVG } = wp.components;
const { RichText, getColorClassName } = wp.editor;

// Internal dependencies.
import edit from './edit.js';

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

const blockAttributes = {
	url: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'href',
	},
	title: {
		type: 'string',
		source: 'attribute',
		selector: 'a',
		attribute: 'title',
	},
	text: {
		type: 'string',
		source: 'html',
		selector: 'a',
	},
	themeColor: {
		type: 'string',
	},
	icon: {
		type: 'string',
	},
	className: {
		type: 'string',
	}
};

let blockStyles = [
	{ name: 'default', label: __( 'Default' ), isDefault: true },
	{ name: 'outline', label: __( 'Outline' ) },
	{ name: 'text', label: __( 'Text' ) },
];

if ( 'brink' === publicationClass ) {
	blockStyles.push( { name: 'accent', label: __( 'Accent' ) } );
}

// Register the block.
registerBlockType( 'bu/button', {

	title: __( 'Button' ),
	description: __( 'Prompt visitors to take action with a custom button.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path fill="#c00" d="M19 6H5L3 8v8l2 2h14l2-2V8l-2-2zm0 10H5V8h14v8z" /></G></SVG>,
	category: 'bu',
	publicationClassName: publicationClass + '-block-button',
	attributes: blockAttributes,
	styles: blockStyles,
	supports: {
		className: false,
		customClassName: false,
		align: [ 'left', 'center', 'right' ],
	},

	edit,

	save( { attributes } ) {
		const {
			url,
			text,
			themeColor,
			icon,
			className,
		} = attributes;

		const classes = classnames(
			'wp-block-button',
			className,
			publicationClass + '-block-button',
			{
				[ getColorClassName( 'theme', themeColor ) ]: getColorClassName( 'theme', themeColor ),
				[ `icon-navigateright ${icon}` ]:  icon,
			}
		);

		return (
			<p>
				<RichText.Content
					tagName="a"
					className={ classes }
					href={ url }
					value={ text }
				/>
			</p>
		);
	},
} );
