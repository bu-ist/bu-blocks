// Internal dependencies.
import Edit from './edit.js';

// WordPress dependencies.
import { RichText, useBlockProps } from '@wordpress/block-editor';

export const config = {
	attributes: {
		text: {
			type: 'string',
			source: 'html',
			selector: 'button',
		},
		target: {
			type: 'string',
			default: 'all',
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	save( { attributes } ) {
		const { text, target } = attributes;

		const togglebuttonclasses =
			'bu-collapsible-control-toggle js-bu-collapsible-control-target-' +
			target;

		const blockProps = useBlockProps.save();

		return (
			<p { ...blockProps }>
				<RichText.Content
					tagName="button"
					value={ text }
					className={ togglebuttonclasses }
				/>
			</p>
		);
	},
};
