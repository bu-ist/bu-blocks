/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import publicationSlug from '../../global/publication-slug';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	G,
	Path,
	SVG,
} = wp.components;
const {
	RichText,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

// The current publication owner.
const publication = publicationSlug();

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className  Additional classes assigned to the block.
 * @param {string} themeColor The theme color assigned to the block.
 * @param {string} icon       The icon placement.
 * @return {string} The class list.
 */
const getClasses = ( className, themeColor, icon ) => classnames(
	'wp-block-button',
	{
		[ `${ publication }-block-button` ]: publication && publication !== '',
		[ `has-${ themeColor }-theme` ]: themeColor,
		[ `icon-navigateright ${ icon }` ]: icon,
		[ className ]: className,
	}
);

const deprecated = [
	{

		title: __( 'Button' ),
		description: __( 'Prompt visitors to take action with a custom button.' ),
		icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="none" d="M0 0h24v24H0V0z" /><G><Path fill="#c00" d="M19 6H5L3 8v8l2 2h14l2-2V8l-2-2zm0 10H5V8h14v8z" /></G></SVG>,
		category: 'bu',
		attributes: {
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
			},
		},
		styles: [
			{
				name: 'default',
				label: __( 'Default' ),
				isDefault: true,
			},
			{
				name: 'outline',
				label: __( 'Outline' ),
			},
			{
				name: 'text',
				label: __( 'Text' ),
			},
			{
				name: 'accent',
				label: __( 'Accent' ),
			},
		],
		supports: {
			className: false,
			customClassName: false,
			align: [ 'left', 'center', 'right' ],
		},

		save( { attributes } ) {
			const {
				url,
				text,
				themeColor,
				icon,
				className,
			} = attributes;

			return (
				<p>
					<RichText.Content
						tagName="a"
						className={ getClasses( className, themeColor, icon ) }
						href={ url }
						value={ text }
					/>
				</p>
			);
		},
	},

];

export default deprecated;
