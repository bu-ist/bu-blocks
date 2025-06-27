import { RichText, useBlockProps } from '@wordpress/block-editor';

export const config = {
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-headline',
		},
		level: {
			type: 'number',
			default: 2,
		},
		anchor: {
			type: 'string',
			source: 'attribute',
			attribute: 'id',
			selector: '.wp-block-editorial-headline',
		},
	},
	supports: {
		anchor: true,
	},
	save( { attributes } ) {
		const { content, level } = attributes;
		const tagName = 'h' + level;
		const blockProps = useBlockProps.save();
		return (
			<RichText.Content
				{ ...blockProps }
				tagName={ tagName }
				value={ content }
			/>
		);
	},
};
