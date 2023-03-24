// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import getAllowedFormats from '../../global/allowed-formats';

// WordPress dependencies.
const {
	__,
} = wp.i18n;

const { createBlock } = wp.blocks;
const { PanelBody, RangeControl } = wp.components;
const {
	InnerBlocks,
	InspectorControls,
	RichText,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

const { compose } = wp.compose;
const { withDispatch, withSelect } = wp.data;

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

const Edit = props => {
	const {
		clientId,
		attributes: {
			align,
			caption,
			stats,
		},
		className,
		setAttributes,
		getBlocksByClientId,
		removeBlock,
		insertBlock,
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
		const blocks = getBlocksByClientId( clientId )[ 0 ].innerBlocks;

		// Remove the last innerBlock if there are more innerBlocks than columns.
		if ( blocks.length > statNumber && blocks[ statNumber ] ) {
			removeBlock( blocks[ statNumber ].clientId, false );
		} else {
			// Otherwise, create and insert a new block.
			const newBlock = createBlock( 'bu/stat', {} );
			const index = statNumber - 1;

			insertBlock( newBlock, index, clientId );
		}
	};

	// Reset to a single Stat block if aligned left or right.
	if ( isAlignedLeftOrRight && stats !== 1 ) {
		onChangeStatsNumber( 1 );
	}

	return (
		<div className={ getBlockClasses( className, stats ) }>
			<figure className="wp-block-bu-stats-figure">
				<div className="wp-block-bu-stats-row">
					<InnerBlocks
						allowedBlocks={ [ 'bu/stat' ] }
						template={ [
							[ 'bu/stat', {} ],
						] }
						templateLock={ false }
					/>
					{ ! isAlignedLeftOrRight &&
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
		</div>
	);
};

export default compose( [
	withSelect( ( select ) => {
		const { getBlocksByClientId } = select( 'core/block-editor' );
		return {
			getBlocksByClientId,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { insertBlock, removeBlock } = dispatch( 'core/block-editor' );
		return {
			insertBlock,
			removeBlock,
		};
	} ),
] )( Edit );
