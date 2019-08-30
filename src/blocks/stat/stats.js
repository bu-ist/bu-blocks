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
import getAllowedFormats from '../../global/allowed-formats';

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
const {
	applyFilters,
} = wp.hooks;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className Default classes assigned to the block.
 * @param {number} stats     The number of stat blocks to display.
 */
const getBlockClasses = ( className, stats ) => {
	const blockClasses = classnames( {
		[ className ]: className,
		[ `has-${stats}-stats` ]: stats,
	} );

	return applyFilters( 'buBlocks.stats.classNames', blockClasses );
};

// Register the block.
registerBlockType( 'bu/stats', {
	title: __( 'Stats' ),
	description: __( 'Add one to four statistics to your content.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
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
			default: '',
		},
	},
	supports: {
		align: [ 'left', 'right', 'wide' ],
	},

	edit( props ) {
		const {
			attributes: {
				align,
				caption,
				stats,
			},
			className,
			clientId,
			setAttributes,
		} = props;

		// Determine whether the block is aligned left or right.
		const isAlignedLeftOrRight = ( align === 'left' || align === 'right' );

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

		// Set a child Stat block when first inserted.
		if ( stats === '' ) {
			onChangeStatsNumber( 1 );
		}

		// Reset to a single Stat block if aligned left or right.
		if ( isAlignedLeftOrRight && stats !== 1 ) {
			onChangeStatsNumber( 1 );
		}

		return (
			<div className={ getBlockClasses( className, stats ) }>
				{ applyFilters( 'buBlocks.stats.afterOpening', '' ) }
				<figure className="wp-block-bu-stats-figure">
					<div className="wp-block-bu-stats-row">
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
						className="wp-block-bu-stats-caption"
						placeholder={ __( 'Add a caption (optional)…' ) }
						value={ caption }
						onChange={ value => setAttributes( { caption: value } ) }
						formattingControls={ getAllowedFormats( 'formattingControls', [ 'bold', 'italic', 'link' ] ) }
						allowedFormats={ getAllowedFormats( 'allowedFormats', [ 'core/bold', 'core/italic', 'core/link' ] ) }
						keepPlaceholderOnFocus
					/>
				</figure>
				{ applyFilters( 'buBlocks.stats.beforeClosing', '' ) }
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
				{ applyFilters( 'buBlocks.stats.afterOpeningOutput', '' ) }
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
				{ applyFilters( 'buBlocks.stats.beforeClosingOutput', '' ) }
			</div>
		);
	},
} );
