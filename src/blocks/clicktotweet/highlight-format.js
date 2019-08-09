/**
 * Format: bu-clicktotweet-highlight
 *
 * A RichText format button for wrapping selected text in a span with the
 * 'wp-block-editorial-headline-posttext' span.
 */

// Import WordPress dependencies
const {
	__,
} = wp.i18n;
const {
	Fragment,
} = wp.element;
const {
	registerFormatType,
	toggleFormat,
} = wp.richText;
const {
	RichTextToolbarButton,
	RichTextShortcut,
} = wp.editor;

const name = 'bu/clicktotweet-highlight';

registerFormatType( name, {
	title: __( 'Highlight' ),
	tagName: 'span',
	className: 'wp-block-bu-clicktotweet-highlight',

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
					name="highlight"
					icon="twitter"
					title={ __( 'Highlight' ) }
					onClick={ onToggle }
					isActive={ isActive }
					shortcutType="access"
					shortcutCharacter="b"
				/>
			</Fragment>
		);
	},
} );