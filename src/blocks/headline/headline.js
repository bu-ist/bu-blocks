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
import './pretext-format.js'
import './posttext-format.js'

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { RichText, BlockControls } = wp.editor;
const { select } = wp.data;

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
		anchor: {
			type: 'string',
			source: 'attribute',
			attribute: 'id',
			selector: '.wp-block-editorial-headline',
		},
	},
	styles: [
		{
			name: 'default',
			label: __( 'Regular' ),
			isDefault: true
		},
		{
			name: 'emphasis-weight',
			label: __( 'Emphasize weight' )
		},
		{
			name: 'emphasis-color',
			label: __( 'Emphasize color' )
		},
	],

	edit( props ) {
		const { attributes, setAttributes, className, clientId } = props;
		const { content, level, anchor } = attributes;
		const tagName = 'h' + level;

		// Generate an index-based value for the anchor attribute if it is not set.
		if ( ! anchor ) {
			const allBlocks = select( 'core/editor' ).getBlocks();
			const headlineBlocks = allBlocks.filter( e => e.name === 'editorial/headline' );
			const HeadlineIndex = headlineBlocks.findIndex( e => e.clientId === clientId );
			const id = 'headline-' + ( HeadlineIndex + 1 );

			setAttributes( { anchor: id } );
		}

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
					formattingControls={ [ 'pretext', 'posttext', 'bold', 'italic' ] }
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