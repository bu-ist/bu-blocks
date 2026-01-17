/**
 * BLOCK: bu/pullquote
 *
 * Deprecated version 1 - Static save function
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import Background, {
	BackgroundAttributes,
} from '../../../../components/background';

// WordPress dependencies.
import { RichText } from '@wordpress/block-editor';

// Returns true if the current block style is "Default".
const isStyleDefault = ( className ) => {
	return (
		! className.includes( 'is-style-modern' ) &&
		! className.includes( 'is-style-pop' )
	);
};

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className    The classnames assigned to the block
 * @param {number} backgroundId ID of the background media, if set.
 * @param {string} imageFocus   Value of the "Crop Media To" setting.
 * @param {string} themeColor   Value of the "Theme Color" setting.
 * @param {string} textColor
 */
const getClasses = (
	className,
	backgroundId,
	imageFocus,
	themeColor,
	textColor
) => {
	const isStylePop = className.includes( 'is-style-pop' );

	return classnames( className, {
		'has-image': backgroundId && ! isStylePop,
		[ `has-image-focus-${ imageFocus }` ]: imageFocus && ! isStylePop,
		[ `has-${ themeColor }-theme` ]: themeColor,
		[ `has-${ textColor }-theme-text` ]: textColor,
	} );
};

export const config = {
	attributes: {
		quote: {
			type: 'array',
			source: 'children',
			selector: '.quote-sizing',
		},
		photoCredit: {
			type: 'string',
			source: 'text',
			selector: '.wp-component-media-credit',
		},
		cite: {
			type: 'array',
			source: 'children',
			selector: 'footer',
		},
		imageFocus: {
			type: 'string',
			default: 'center-middle',
		},
		className: {
			type: 'string',
		},
		themeColor: {
			type: 'string',
			default: '',
		},
		textColor: {
			type: 'string',
			default: '',
		},
		...BackgroundAttributes,
	},
	supports: {
		align: [ 'full', 'wide' ],
	},
	styles: [
		{
			name: '',
			label: 'Default',
			default: true,
			isDefault: true,
		},
		{
			name: 'modern',
			label: 'Modern',
		},
		{
			name: 'pop',
			label: 'Pop',
		},
	],
	save( props ) {
		// Get the block properties.
		const { attributes } = props;

		// Get the block attributes.
		const {
			quote,
			cite,
			imageFocus,
			photoCredit,
			backgroundId,
			className = '', // Assign default in case the unpacked value is `undefined`.
			themeColor,
			textColor,
		} = attributes;

		// Returns the block rendering for the front end.
		return (
			<div
				className={ getClasses(
					className,
					backgroundId,
					imageFocus,
					themeColor,
					textColor
				) }
			>
				<div className="wp-block-bu-pullquote-inner">
					{ isStyleDefault( className ) && (
						<figure>
							<Background blockProps={ props } />
						</figure>
					) }
					<blockquote>
						<div className="container-lockup">
							<div className="container-icon-outer">
								<div className="container-icon-inner">
									{ className.includes(
										'is-style-modern'
									) && <Background blockProps={ props } /> }
								</div>
							</div>

							<div className="container-text">
								<hr />
								<RichText.Content
									tagName="div"
									className="quote-sizing"
									value={ quote }
								/>
								<RichText.Content
									tagName="footer"
									className="caption"
									value={ cite }
								/>
								<hr />
							</div>
							{ className.includes( 'is-style-modern' ) &&
								photoCredit && (
									<div className="wp-component-media-credit">
										{ photoCredit }
									</div>
								) }
						</div>
					</blockquote>
				</div>

				{ isStyleDefault( className ) && photoCredit && (
					<div className="wp-component-media-credit">
						{ photoCredit }
					</div>
				) }
			</div>
		);
	},
};
