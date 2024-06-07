/**
 * BLOCK: bu/stats
 *
 * Register a stats block with Gutenberg.
 */

// External dependencies.
import classnames from 'classnames';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import './stat';
import blockIcons from '../../components/block-icons/';
import edit from './edit';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;

const {
	InnerBlocks,
	RichText,
	useBlockProps,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className Default classes assigned to the block.
 * @param {number} stats     The number of stat blocks to display.
 *
 * @return {string} block classnames
 */
const getBlockClasses = ( className, stats ) => {
	return (
		classnames(
			className,
			{
				[ `has-${stats}-stats` ]: stats,
			}
		)
	);
};

// Register the block.
registerBlockType( 'bu/stats', {
	apiVersion: 2,
	title: __( 'Stats' ),
	description: __( 'Add one to four statistics to your content.' ),
	icon: blockIcons('stat'),
	category: 'bu',
	attributes: {
		align: {
			type: 'string',
			default: '',
		},
		caption: {
			type: 'string',
			default: '',
			source: 'html',
			selector: '.wp-block-bu-stats-caption',
		},
		className: {
			type: 'string',
			default: '',
		},
		stats: {
			type: 'number',
			default: 1,
		},
	},
	supports: {
		align: [ 'left', 'right', 'wide' ],
	},

	edit,

	save( { attributes } ) {
		const {
			caption,
			className,
			stats,
		} = attributes;

		const blockProps = useBlockProps.save({
			className: getBlockClasses( className, stats ),
		});

		return (
			<div { ...blockProps }>
				<figure className="wp-block-bu-stats-figure">
					<div className="wp-block-bu-stats-row">
						<InnerBlocks.Content />
					</div>
					<RichText.Content
						tagName="figcaption"
						className="wp-block-bu-stats-caption"
						value={ caption }
					/>
				</figure>
			</div>
		);
	},
} );
