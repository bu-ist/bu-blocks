/**
 * BLOCK: editorial/custom-html
 *
 * A block used for arbitrary custom HTML that is not sanitized
 * or escaped in any way on output.
 */

// WordPress dependencies.
const {
	__,
} = wp.i18n;

const {
	registerBlockType,
} = wp.blocks;

const {
	PlainText,
} = wp.editor;

// Register the block.
registerBlockType( 'editorial/custom-html', {

	title: __( 'BU Custom HTML' ),

	description: __( 'Enter arbitrary custom HTML.' ),

	icon: <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="M4.5,11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5V11z M7,10.5h1.5V15H10v-4.5h1.5V9H7V10.5z M14.5,10l-1-1H12v6h1.5v-3.9  l1,1l1-1V15H17V9h-1.5L14.5,10z M19.5,13.5V9H18v6h5v-1.5H19.5z" fill="#c00"></path></svg>,

	category: 'bu-editorial',

	attributes: {
		customHTML: {
			type: 'string',
			source: 'meta',
			meta: 'bu_custom_html_meta',
		},
	},

	supports: {
		multiple: false, // Meta is stored in a single key, so only support one per article.
		reusable: false, // This block should not be used as a reusable block.
	},

	edit( { className, setAttributes, attributes } ) {

		function updateBlockValue( customHTML ) {
			setAttributes( { customHTML } );
		}

		return (
			<div className={ className }>
				<PlainText
					label="Custom HTML (Not validated)"
					value={ attributes.customHTML }
					onChange={ updateBlockValue }
				/>
			</div>
		);
	},

	// The front-end HTML for this block is handled in PHP, but
	// the save function is required.
	save() {
		return null;
	},
} );
