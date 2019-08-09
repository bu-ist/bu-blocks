/**
 * BLOCK: bu/clicktotweet
 *
 * Registers a Click to Tweet block.
 */

// External dependencies.
import classnames from 'classnames';

// Import internal dependencies.
import './highlight-format';

// Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	Path,
	SVG,
} = wp.components;
const {
	RichText,
} = wp.editor;

/**
 * Return the class list for the block.
 *
 * @param {string} className Default and additional classes applied to the block.
 * @param {string} content   The block content.
 *
 * @return {string} The block class list.
 */
const getClasses = ( className, content ) => {
	return (
		classnames(
			{
				[ className ]: className,
				'has-format-highlight': content.includes( '<span class="wp-block-bu-clicktotweet-highlight">' ),
			}
		)
	);
}

// Register the block.
registerBlockType( 'bu/clicktotweet', {
	title: __( 'Click to Tweet' ),
	description: __( 'Add content for readers to share via Twitter.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu',
	attributes: {
		className: {
			type: 'string',
			default: '',
		},
		content: {
			type: 'string',
			default: '',
			source: 'html',
			selector: '.wp-block-bu-clicktotweet-content',
		},
	},

	edit( props ) {
		const {
			attributes: {
				content,
			},
			className,
			setAttributes,
		} = props;

		return (
			<p className={ getClasses( className, content ) }>
				<RichText
					className="wp-block-bu-clicktotweet-content"
					tagName="span"
					formattingControls={ [ 'highlight', 'bold', 'italic' ] }
					onChange={ value => setAttributes( { content: value } ) }
					placeholder={ __( 'Start writing…' ) }
					value={ content }
					keepPlaceholderOnFocus
				/>
				{ !content.includes( '<span class="wp-block-bu-clicktotweet-highlight">' ) &&
					<button className="wp-block-bu-clicktotweet-action js-wp-block-bu-clicktotweet-action">Tweet this</button>
				}
			</p>
		);
	},

	save( { attributes } ) {
		const {
			className,
			content,
		} = attributes;

		return (
			<p className={ getClasses( className, content ) }>
				<RichText.Content
					className="wp-block-bu-clicktotweet-content"
					tagName="span"
					value={ content }
				/>
				{ !content.includes( '<span class="wp-block-bu-clicktotweet-highlight">' ) &&
					<button className="wp-block-bu-clicktotweet-action js-wp-block-bu-clicktotweet-action">Tweet this</button>
				}
			</p>
		);
	}
} );