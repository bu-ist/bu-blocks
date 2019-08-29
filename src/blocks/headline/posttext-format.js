/**
 * Format: bu-headline-posttext
 *
 * A RichText format button for wrapping selected text in a span with the
 * 'wp-block-editorial-headline-posttext' span.
 */

// Import WordPress dependencies
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerFormatType, toggleFormat } = wp.richText;
const {
	RichTextToolbarButton,
	RichTextShortcut,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

const name = 'editorial/posttext';

registerFormatType( name, {

	title: __( 'Posttext' ),
	tagName: 'span',
	className: 'wp-block-editorial-headline-posttext',

	edit( { isActive, value, onChange } ) {
		const onToggle = () => onChange( toggleFormat( value, { type: name } ) );

		return (
			<Fragment>
				<RichTextShortcut
					type="access"
					character="b"
					onUse={ onToggle }
				/>
				<RichTextToolbarButton
					icon="warning"
					title={ __( 'Posttext' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="access"
					shortcutCharacter="b"
				/>
			</Fragment>
		);
	},
} );
