/**
 * BLOCK: bu-headline-cgb
 *
 * A headline with anchor support and pre- and post-text formatting options.
 */

// Import CSS.
import './style.scss';
import './editor.scss';

// Import internal dependencies.
import HeadingToolbar from './heading-toolbar';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, BlockControls } = wp.editor;

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
		level: {
			type: 'number',
			default: 2,
		},
	},

	edit( props ) {
		const { attributes, setAttributes, className } = props;
		const { content, level } = attributes;
		const tagName = 'h' + level;

		return (
			<Fragment>
				<BlockControls>
					<HeadingToolbar minLevel={ 2 } maxLevel={ 5 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
				</BlockControls>
				<RichText
					tagName={ tagName }
					className={ className }
					value={ content }
					onChange={ content => setAttributes( { content } ) }
					placeholder={ __( 'Write headline…' ) }
					formattingControls={ [ 'bold', 'italic' ] }
				/>
			</Fragment>
		);
	},

	save( { attributes } ) {
		const { content, level } = attributes;
		const tagName = 'h' + level;

		return (
			<RichText.Content
				tagName={ tagName }
				value={ content }
			/>
		);
	},
} );