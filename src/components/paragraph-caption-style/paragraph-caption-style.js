/**
 * Registers the caption style for the core paragraph block.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';


wp.blocks.registerBlockStyle( 'core/paragraph', {
	name: 'caption',
	label: 'Caption'
} );