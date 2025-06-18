/**
 * BLOCK: Editorial Headline
 *
 * A headline with anchor support and pre- and post-text formatting options.
 * This block allows users to create headlines with different levels (h1, h2, etc.),
 * and includes options for pre-text and post-text formatting.
 * It also supports alignment and anchor attributes.
 */

/**
 * Bring in values defined in block.json.
 */
import metadata from './block.json';

// Import CSS.
import './style.scss';
import './editor.scss';

// Import internal dependencies.
import blockIcons from '../../components/block-icons';
import Edit from './edit';
import deprecated from './deprecated/deprecated';

// WordPress dependencies.
import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps } from '@wordpress/block-editor';

registerBlockType( metadata.name, {
	title: metadata.title,
	icon: blockIcons( 'headline' ),
	edit: Edit,
	save: () => null,
	deprecated,
	// save( { attributes } ) {
	// 	const { content, level } = attributes;
	// 	const tagName = 'h' + level;
	// 	const blockProps = useBlockProps.save();

	// 	return (
	// 		<RichText.Content
	// 			{ ...blockProps }
	// 			tagName={ tagName }
	// 			value={ content }
	// 		/>
	// 	);
	// },
} );
