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
import edit from './edit';
import Background, { BackgroundAttributes } from '../../components/background';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	Path,
	SVG,
} = wp.components;
const {
	getColorClassName,
	RichText,
} = wp.editor;

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

	edit,

	save() {
		// Rendering handled in PHP.
		return null;
	},
} );
