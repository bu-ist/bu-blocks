// External dependencies.
import classnames from 'classnames';

// WordPress dependencies.
const {
	useBlockProps,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className     Default classes assigned to the block.
 * @param {string} aspectRatio   The aspect ratio setting for the block.
 * @returns {string}             The class list for the block.
 */
const getClasses = ( className, aspectRatio ) => {
	return (
		classnames(
			'wp-block-global-buniverse',
			{
				[ aspectRatio ]: aspectRatio,
				[ className ]: className,
			}
		)
	);
};

export const config = {
	attributes: {
		id: {
			type: 'string',
		},
		aspectRatio: {
			type: 'string',
		},
		caption: {
			type: 'string',
		},
		controls: {
			type: 'number',
			default: 1,
		},
		autoplay: {
			type: 'number',
			default: 0,
		},
		start: {
			type: 'number',
		},
		minutes: {
			type: 'number',
		},
		seconds: {
			type: 'number',
		},
		className: {
			type: 'string',
			default: '',
		},
	},
	supports: {
		align: true,
	},
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
		url += ( controls !== 1 ) ? '&controls=0' : '';
		url += ( autoplay === 1 ) ? '&autoplay=true' : '';
		url += ( start ) ? `&start=${ start }` : '';

		return (
			<figure { ...blockProps }>
				<div className="wp-block-global-buniverse-wrapper">
					{ id && (
						<iframe
							src={ encodeURI( url ) }
							frameborder="0"
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
};
