/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import publicationSlug from '../../../../global/publication-slug';
import blockIcons from '../../../../components/block-icons';
//import Edit from './edit.js';

// WordPress dependencies.
import { RichText, useBlockProps } from '@wordpress/block-editor';

// The current publication owner.
const publication = publicationSlug();

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className  Additional classes assigned to the block.
 * @param {string} themeColor The theme color assigned to the block.
 * @param {string} icon       The icon placement.
 */
const getClasses = ( className, themeColor, icon ) =>
	classnames( 'wp-block-button', 'wp-block-bu-button', {
		[ `${ publication }-block-button` ]: publication && publication !== '',
		[ `has-${ themeColor }-theme` ]: themeColor,
		[ `icon-navigateright ${ icon }` ]: icon,
		[ className ]: className,
	} );

export const config = {
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
	supports: {
		className: false,
		customClassName: false,
		align: [ 'left', 'center', 'right' ],
	},
	save( { attributes } ) {
		const { url, text, themeColor, icon, className } = attributes;

		const blockProps = useBlockProps.save( {
			className: getClasses( className, themeColor, icon ),
		} );

		return (
			<p>
				<RichText.Content
					{ ...blockProps }
					tagName="a"
					href={ url }
					value={ text }
				/>
			</p>
		);
	},
};
