/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

// Register the block.
registerBlockType( 'bu/button', {

	title: __( 'Button' ),
	description: __( 'Prompt visitors to take action with a custom button.' ),
	icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><g><path fill="#c00" d="M19 6H5L3 8v8l2 2h14l2-2V8l-2-2zm0 10H5V8h14v8z" /></g></svg>,
	category: 'bu',
	publicationClassName: publicationClass + '-block-button',

	edit() {
		return (
			<p>
				<a href="" class=""></a>
			</p>
		);
	},

	save() {
		return (
			<p>
				<a href="#" class=""></a>
			</p>
		);
	},
} );
