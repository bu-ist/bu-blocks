// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import Edit from './edit.js';
// Internal dependencies.
import Background, {
	BackgroundAttributes,
} from '../../../../components/background';

// WordPress dependencies.
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {number}  background Whether the block has background media assigned.
 * @param {string}  className  Default classes assigned to the block.
 * @param {boolean} hideTeaser Whether to display the teaser.
 * @param {boolean} round      Whether to display round images.
 * @param {string}  size       The size attribute.
 * @param {string}  themeColor The assigned background color.
 */
const getClasses = (
	background,
	className,
	hideTeaser,
	round,
	size,
	themeColor
) => {
	return classnames( 'js-bu-block-drawer', {
		'has-hide-teaser': hideTeaser,
		'is-style-round': round,
		[ className ]: className,
		[ `has-${ themeColor }-background` ]: themeColor,
		[ size ]: size && size !== '',
		'has-media': background,
	} );
};

export const config = {
	attributes: {
		button: {
			type: 'string',
			default: 'Read More',
			source: 'text',
			selector: '.button.js-bu-block-drawer-open',
		},
		className: {
			type: 'string',
		},
		clientId: {
			type: 'number',
		},
		hed: {
			type: 'string',
			default: '',
			source: 'html',
			selector: 'h2',
		},
		hideTeaser: {
			type: 'boolean',
			default: false,
		},
		lede: {
			type: 'string',
			default: '',
			source: 'html',
			selector: 'p',
		},
		round: {
			type: 'boolean',
			default: false,
		},
		size: {
			type: 'string',
			default: '',
		},
		themeColor: {
			type: 'string',
			default: '',
		},
		...BackgroundAttributes,
	},
	supports: {
		align: [ 'left', 'right', 'full' ],
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	save( props ) {
		// Get the properties and attributes we'll need.
		const {
			attributes: {
				backgroundId,
				button,
				className,
				hed,
				hideTeaser,
				lede,
				round,
				size,
				themeColor,
			},
		} = props;

		const blockProps = useBlockProps.save( {
			className: getClasses(
				backgroundId,
				className,
				hideTeaser,
				round,
				size,
				themeColor
			),
		} );

		return (
			<aside { ...blockProps }>
				<div className="wp-block-editorial-drawer-teaser">
					{ backgroundId && (
						<figure>
							<Background blockProps={ props } />
						</figure>
					) }
					{ ! RichText.isEmpty( hed ) && (
						<RichText.Content tagName="h2" value={ hed } />
					) }
					{ ! RichText.isEmpty( lede ) && (
						<RichText.Content tagName="p" value={ lede } />
					) }
					{ button && (
						// @ToDo: need to replace this <a> tag with a button.
						// eslint-disable-next-line jsx-a11y/anchor-is-valid
						<a href="#" className="button js-bu-block-drawer-open">
							{ button }
						</a>
					) }
				</div>
				<section className="wp-block-editorial-drawer-content js-bu-block-drawer-content">
					<div className="wp-block-editorial-drawer-wrapper">
						<InnerBlocks.Content />
						<div className="wp-block-editorial-drawer-close">
							<button className="wp-block-editorial-drawer-close-button js-bu-block-drawer-close">
								Close
							</button>
						</div>
					</div>
				</section>
			</aside>
		);
	},
};
