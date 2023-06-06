/**
 * BLOCK: bu/sample
 *
 * Register a sample block with Gutenberg.
 */

// External dependencies.
//import classnames from 'classnames';

// Internal dependencies.


//  Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;


// Register the block.
registerBlockType( 'bu/sample', {
	title: __( 'Sample Block' ),
	description: __( '' ),
	category: 'bu',
	attributes: {

	},
	supports: {
		align: true,
	},

	edit( props ) {
		const {
			attributes: {

			},
			className,
			isSelected,
			setAttributes,
		} = props;


		return(

			<div className={ className }>
				<div className="wp-block-sample-inner">
					<p>Sample Block</p>
				</div>
			</div>

		);
	},

	save( { attributes } ) {
		const {
			className,
		} = attributes;

		return(
			<div className={ className }>
				<div className="wp-block-sample">
					<p>Sample Block</p>
				</div>
			</div>
		);
	},
} );
