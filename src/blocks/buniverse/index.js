/**
 * BLOCK: bu/buniverse
 *
 * Register a BUniverse embed block with Gutenberg.
 */

// External dependencies.
import classnames from 'classnames';

/**
 * Bring in values defined in block.json.
 */
import metadata from './block.json';

// Internal dependencies.
import blockIcons from '../../components/block-icons/';
import Edit from './edit.js';

//  Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
import { registerBlockType } from '@wordpress/blocks';

import { useBlockProps } from '@wordpress/block-editor';

/*
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className     Default classes assigned to the block.
 * @param {string} stylizedTitle If the block has a stylized title.
 * @param          aspectRatio
 */
const getClasses = ( className, aspectRatio ) => {
	return classnames( 'wp-block-global-buniverse', {
		[ aspectRatio ]: aspectRatio,
		[ className ]: className,
	} );
};

// Register the block.
registerBlockType( metadata.name, {
	apiVersion: 2,
	title: metadata.title,
	icon: blockIcons( 'buniverse' ),
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	save( { attributes } ) {
		const {
			id,
			aspectRatio,
			caption,
			controls,
			autoplay,
			start,
			className,
		} = attributes;

		const blockProps = useBlockProps.save( {
			className: getClasses( className, aspectRatio ),
		} );

		// Build out the full url.
		let url = `//www.bu.edu/buniverse/interface/embed/embed.html?v=${ id }&jsapi=1`;
		url += controls !== 1 ? '&controls=0' : '';
		url += autoplay === 1 ? '&autoplay=true' : '';
		url += start ? `&start=${ start }` : '';

		return (
			<figure { ...blockProps }>
				<div className="wp-block-global-buniverse-wrapper">
					{ id && (
						<iframe
							src={ encodeURI( url ) }
							frameBorder="0"
							allow="autoplay; fullscreen"
						></iframe>
					) }
				</div>
				{ caption && (
					<figcaption>
						<p className="wp-block-global-buniverse-caption wp-prepress-component-caption">
							{ caption }
						</p>
					</figcaption>
				) }
			</figure>
		);
	},
} );
