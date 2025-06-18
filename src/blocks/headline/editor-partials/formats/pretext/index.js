/**
 * Format: bu-headline-pretext
 *
 * A RichText format button for wrapping selected text in a span with the
 * 'wp-block-editorial-headline-pretext' span.
 */

// Import WordPress dependencies
import { __ } from '@wordpress/i18n';
import { createElement, Fragment } from '@wordpress/element';
import { registerFormatType, toggleFormat } from '@wordpress/rich-text';
import {
	RichTextToolbarButton,
	RichTextShortcut,
} from '@wordpress/block-editor';

const pretexticon = createElement(
	'svg',
	{ width: 20, height: 20, viewBox: '0 0 20 20' },
	createElement( 'path', {
		d: 'M18,4.3H8.56a.51.51,0,0,0-.51.52v2a.51.51,0,0,0,.51.51H18a.51.51,0,0,0,.52-.51v-2A.52.52,0,0,0,18,4.3Z',
	} ),
	createElement( 'polygon', {
		points: '1.53 6.59 4.51 6.59 4.51 7.65 7.1 5.83 4.51 4.02 4.51 5.08 1.53 5.08 1.53 5.08 1.53 6.59',
	} ),
	createElement( 'path', {
		d: 'M10,8.67v3.1h3V8.67h1.82v8.08H13.05V13.37H10v3.38H8.2V8.67Z',
	} )
);

registerFormatType( 'editorial/pretext', {
	title: __( 'Pretext' ),
	tagName: 'span',
	className: 'wp-block-editorial-headline-pretext',
	edit( props ) {
		const { isActive, onChange, value } = props;

		const onToggle = () =>
			onChange( toggleFormat( value, { type: 'editorial/pretext' } ) );

		return (
			<Fragment>
				<RichTextShortcut
					type="access"
					character="a"
					onUse={ onToggle }
				/>
				<RichTextToolbarButton
					icon={ pretexticon }
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
