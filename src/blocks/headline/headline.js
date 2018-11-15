/**
 * BLOCK: bu-headline-cgb
 *
 * A headline with anchor support and pre- and post-text formatting options.
 */

// Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

// Register the block.
registerBlockType( 'editorial/headline', {

	title: __( 'Headline' ),
	description: __( 'Add a section heading with an anchor and pre- and post-text formatting options.' ),
	icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#c00" d="M5 4v3h5.5v12h3V7H19V4z" /><path fill="none" d="M0 0h24v24H0V0z" /></svg>,
	category: 'bu-editorial',
	supports: {
		anchor: true,
	},
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-headline',
		},
	},

	edit( props ) {
		const { attributes, setAttributes, className } = props;
		const { content } = attributes;

		return (
			<RichText
				tagName='h2'
				className={ className }
				value={ content }
				onChange={ content => setAttributes( { content } ) }
				placeholder={ __( 'Write headline…' ) }
			/>
		);
	},

	save( { attributes } ) {
		const { content } = attributes;

		return (
			<RichText.Content
				tagName='h2'
				value={ content }
			/>
		);
	},
} );