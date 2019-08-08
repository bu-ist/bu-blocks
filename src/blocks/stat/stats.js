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

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	createBlock,
	registerBlockType,
} = wp.blocks;
const {
	PanelBody,
	Path,
	RangeControl,
	SVG,
} = wp.components;
const {
	InnerBlocks,
	InspectorControls,
	RichText,
} = wp.editor;
const {
	dispatch,
	select,
} = wp.data;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className Default classes assigned to the block.
 * @param {number} stats     The number of stat blocks to display.
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
	title: __( 'Stats' ),
	description: __( 'Add one to four statistics to your content.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu',
	attributes: {
		caption: {
			type: 'string',
			default: '',
			source: 'html',
			selector: '.wp-block-stats-caption',
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

	edit( props ) {
		const {
			attributes: {
				caption,
				stats,
			},
			className,
			clientId,
			setAttributes,
		} = props;

		// Determine whether the block is aligned left or right.
		const isAlignedLeftOrRight = className.includes( 'alignleft' ) || className.includes( 'alignright' );

		/**
		 * Updates the stats attribute and handles innerBlock insertions or removals.
		 *
		 * @param {string} statNumber Current value of the stat number option.
		 */
		const onChangeStatsNumber = ( statNumber ) => {
			setAttributes( { stats: statNumber } );

			// Get the current innerBlocks.
			const blocks = select( 'core/editor' ).getBlocksByClientId( clientId )[ 0 ].innerBlocks;

			// Remove the last innerBlock if there are more innerBlocks than columns.
			if ( blocks.length > statNumber && blocks[ statNumber ] ) {
				dispatch( 'core/editor' ).removeBlock( blocks[ statNumber ].clientId, false );
			} else {
				// Otherwise, create and insert a new block.
				const newBlock = createBlock( 'bu/stat', {} );
				const index = statNumber - 1;

				dispatch( 'core/editor' ).insertBlock( newBlock, index, clientId );
			}
		};

		return (
			<div className={ getBlockClasses( className, stats ) }>
				<figure className="wp-block-stats-figure">
					<div className="wp-block-stats-row">
						<InnerBlocks
							allowedBlocks={ [ 'bu/stat' ] }
							templateLock="all"
						/>
						{ !isAlignedLeftOrRight &&
							<InspectorControls>
								<PanelBody title={ __( 'Options' ) }>
									<RangeControl
										label={ __( 'Number of Stats' ) }
										value={ stats }
										onChange={ onChangeStatsNumber }
										min={ 1 }
										max={ 4 }
										step={ 1 }
									/>
								</PanelBody>
							</InspectorControls>
						}
					</div>
					<RichText
						tagName="figcaption"
						className="wp-block-stats-caption"
						placeholder={ __( 'Add a caption (optional)…' ) }
						value={ caption }
						onChange={ value => setAttributes( { caption: value } ) }
						formattingControls={ [ 'bold', 'italic', 'link' ] }
						keepPlaceholderOnFocus
					/>
				</figure>
			</div>
		);
	},

	save( { attributes } ) {
		const {
			caption,
			className,
			stats,
		} = attributes;

		return (
			<div className={ getBlockClasses( className, stats ) }>
				<figure className="wp-block-stats-figure">
					<div className="wp-block-stats-row">
						<InnerBlocks.Content />
					</div>
					<RichText.Content
						tagName="figcaption"
						className="wp-block-stats-caption"
						value={ caption }
					/>
				</figure>
			</div>
		);
	},
} );
