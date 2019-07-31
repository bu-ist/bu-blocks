/**
 * BLOCK: bu-editorial-click-to-tweet
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

const getClasses = ( content ) => {
	return (
		classnames(
			'wp-block-clicktotweet',
			{
				'has-format-highlight': content.includes( '<span class="wp-block-clicktotweet-highlight">' ),
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
		content: {
			type: 'string',
			default: '',
			source: 'html',
			selector: '.wp-block-clicktotweet-content',
		},
	},
	supports: {
		className: false,
		customClassName: false,
	},

	edit( props ) {
		const {
			attributes: {
				content,
			},
			setAttributes,
		} = props;

		return (
			<p className={ getClasses( content ) }>
				<RichText
					className="wp-block-clicktotweet-content"
					tagName="span"
					formattingControls={ [ 'highlight', 'bold', 'italic' ] }
					onChange={ value => setAttributes( { content: value } ) }
					placeholder={ __( 'Start writing…' ) }
					value={ content }
					keepPlaceholderOnFocus
				/>
				{ !content.includes( '<span class="wp-block-clicktotweet-highlight">' ) &&
					<button className="wp-block-clicktotweet-action js-wp-block-clicktotweet-action">Tweet this</button>
				}
			</p>
		);
	},

	save( { attributes } ) {
		const {
			content,
		} = attributes;

		return (
			<p className={ getClasses( content ) }>
				<RichText.Content
					className="wp-block-clicktotweet-content"
					tagName="span"
					value={ content }
				/>
				{ !content.includes( '<span class="wp-block-clicktotweet-highlight">' ) &&
					<button className="wp-block-clicktotweet-action js-wp-block-clicktotweet-action">Tweet this</button>
				}
			</p>
		);
	}
} );