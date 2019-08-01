/**
 * Format: bu-headline-pretext
 *
 * A RichText format button for wrapping selected text in a span with the
 * 'wp-block-editorial-headline-pretext' span.
 */

// Import WordPress dependencies
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { registerFormatType, toggleFormat } = wp.richText;
const {
	RichTextToolbarButton,
	RichTextShortcut,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

const name = 'editorial/pretext';

registerFormatType( name, {

	title: __( 'Pretext' ),
	tagName: 'span',
	className: 'wp-block-editorial-headline-pretext',

	edit( { isActive, value, onChange } ) {
		const onToggle = () => onChange( toggleFormat( value, { type: name } ) );

		return (
			<Fragment>
				<RichTextShortcut
					type="access"
					character="a"
					onUse={ onToggle }
				/>
				<RichTextToolbarButton
					name="pretext"
					icon="warning"
					title={ __( 'Pretext' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="access"
					shortcutCharacter="a"
				/>
			</Fragment>
		);
	},
} );
