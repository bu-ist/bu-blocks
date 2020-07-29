/**
 * BLOCK: collapsible
 *
 * A collapsible content block.
 */

// Import CSS.
import './editor.scss';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	Path,
	SVG
} = wp.components;
const { InnerBlocks } = wp.blockEditor;

// Register the block.
registerBlockType( 'editorial/collapsible', {

	title: __( 'Collapsible' ),
	description: __( 'A collapsible content block.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu-editorial',

	edit() {

		const allowedBlocks = [ 'editorial/collapsible', 'core/heading', 'core/paragraph', 'core/button', 'core/image' ];

		return (

			<div className="bu-collapsible">
				<InnerBlocks allowedBlocks={ allowedBlocks }/>
			</div>

		);

	},

	save() {

		return (
			<div className="bu-collapsible">
				<InnerBlocks.Content />
			</div>
		);

	}

} );
