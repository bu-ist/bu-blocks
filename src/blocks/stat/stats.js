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
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, RichText, useBlockProps } from '@wordpress/block-editor';

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className Default classes assigned to the block.
 * @param {number} stats     The number of stat blocks to display.
 *
 * @return {string} block classnames
 */
const getBlockClasses = ( className, stats ) => {
	return classnames( className, {
		[ `has-${ stats }-stats` ]: stats,
	} );
};

// Register the block.
registerBlockType( 'bu/stats', {
	apiVersion: 2,
	title: __( 'Stats' ),
	description: __( 'Add one to four statistics to your content.' ),
	icon: blockIcons( 'stat' ),
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
	example: {
		attributes: {
			caption: 'Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
			stats: 3,
		},
		innerBlocks: [
			{
				name: 'bu/stat',
				attributes: {
					circleOneColor: 'primary',
					circleOneFill: 100,
					circleTwoColor: 'secondary',
					circleTwoFill: 25,
					number: '25',
					postText: 'Purus Ipsum Vestibulum Elit',
				},
			},
			{
				name: 'bu/stat',
				attributes: {
					circleOneColor: 'primary',
					circleOneFill: 100,
					circleTwoColor: 'secondary',
					circleTwoFill: 65,
					number: '65',
					postText: 'Egestas Fringilla Dapibus',
				},
			},
			{
				name: 'bu/stat',
				attributes: {
					circleOneColor: 'primary',
					circleOneFill: 100,
					circleTwoColor: 'secondary',
					circleTwoFill: 15,
					number: '15',
					postText: 'Quam Amet Malesuada',
				},
			},
		],
	},
	edit,

	save( { attributes } ) {
		const { caption, className, stats } = attributes;

		const blockProps = useBlockProps.save( {
			className: getBlockClasses( className, stats ),
		} );

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
