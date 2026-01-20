/**
 * BLOCK: editorial/listicle
 *
 * Deprecated version 1 - Original static save function
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import Background, {
	BackgroundAttributes,
} from '../../../../components/background';
import ShareTools, {
	ShareToolsAttributes,
} from '../../../../components/share-tools';

// WordPress dependencies.
import { RichText, PlainText, useBlockProps } from '@wordpress/block-editor';

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string}  className          Default classes assigned to the block.
 * @param {string}  number             Value of the number attribute.
 * @param {string}  aside              Whether the block has aside content.
 * @param {number}  backgroundUrl      The URL of the background media assigned to the block.
 * @param {boolean} backgroundAutoplay Whether the background video is set to autoplay.
 * @param           divider
 */
const getClasses = (
	className,
	number,
	aside,
	backgroundUrl,
	backgroundAutoplay,
	divider
) => {
	return classnames( className, {
		'has-number': number,
		'has-sidebar': aside,
		'has-media': backgroundUrl,
		'has-video-as-loop': backgroundAutoplay,
		'has-no-bottom-divider': ! divider,
	} );
};

/**
 * Determine if the related links list is empty.
 *
 * @param {string} related The value of the `related` attribute.
 */
const hasRelatedLinks = ( related ) => {
	if (
		'undefined' === typeof related ||
		'<li></li>' === related ||
		RichText.isEmpty( related )
	) {
		return false;
	}

	return true;
};

export const config = {
	attributes: {
		hed: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-listicle-header-content-hed',
		},
		dek: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-listicle-header-content-dek',
		},
		content: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-listicle-section-content',
		},
		aside: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-listicle-section-aside p',
		},
		number: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-listicle-header-number',
		},
		related: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-listicle-footer-list',
		},
		credit: {
			type: 'string',
			source: 'html',
			selector: '.wp-caption-text',
		},
		className: {
			type: 'string',
			default: '',
		},
		divider: {
			type: 'boolean',
			default: true,
		},
		...BackgroundAttributes,
		...ShareToolsAttributes,
	},
	save( props ) {
		// Get the block properties we need.
		const { attributes } = props;

		// Get the block attributes.
		const {
			hed,
			dek,
			content,
			aside,
			number,
			related,
			credit,
			backgroundUrl,
			backgroundAutoplay,
			className,
			divider,
		} = attributes;

		const blockProps = useBlockProps.save( {
			className: getClasses(
				className,
				number,
				aside,
				backgroundUrl,
				backgroundAutoplay,
				divider
			),
		} );

		// Return the block rendering for the front end.
		return (
			<section { ...blockProps }>
				<article className="wp-block-editorial-listicle-article">
					{ ( backgroundUrl || credit ) && (
						<figure className="wp-block-editorial-listicle-figure">
							<Background blockProps={ props } />
							{ credit && (
								<RichText.Content
									tagName="figcaption"
									className="wp-caption-text wp-block-editorial-listicle-caption wp-prepress-component-caption"
									value={ credit }
								/>
							) }
						</figure>
					) }
					<header className="wp-block-editorial-listicle-header">
						{ number && (
							<h2 className="wp-block-editorial-listicle-header-number">
								{ number }
							</h2>
						) }
						<div className="wp-block-editorial-listicle-header-content">
							{ hed && (
								<RichText.Content
									tagName="h3"
									className="wp-block-editorial-listicle-header-content-hed"
									value={ hed }
								/>
							) }
							{ dek && (
								<RichText.Content
									tagName="h4"
									className="wp-block-editorial-listicle-header-content-dek"
									value={ dek }
								/>
							) }
						</div>
					</header>
					<section className="wp-block-editorial-listicle-section">
						{ ! RichText.isEmpty( content ) && (
							<RichText.Content
								tagName="div"
								className="wp-block-editorial-listicle-section-content"
								value={ content }
								multiline="p"
							/>
						) }
						<div className="wp-block-editorial-listicle-section-meta">
							{ ! RichText.isEmpty( aside ) && (
								<aside className="wp-block-editorial-listicle-section-aside">
									<RichText.Content
										tagName="p"
										value={ aside }
									/>
								</aside>
							) }
							<ShareTools blockProps={ props } />
						</div>
					</section>
					{ hasRelatedLinks( related ) && (
						<footer className="wp-block-editorial-listicle-footer">
							<h3 className="wp-block-editorial-listicle-footer-title">
								Related Stories
							</h3>
							<RichText.Content
								tagName="ul"
								className="wp-block-editorial-listicle-footer-list"
								value={ related }
								multiline="li"
							/>
						</footer>
					) }
				</article>
			</section>
		);
	},
};
