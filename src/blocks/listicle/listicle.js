/**
 * BLOCK: editorial/listicle
 *
 * Register a listicle block with Gutenberg.
 */

// External dependencies.
import classnames from 'classnames';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import Background, { BackgroundAttributes } from '../../components/background';
import ShareTools, { ShareToolsAttributes } from '../../components/share-tools';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	Component,
} = wp.element;
const {
	Path,
	SVG
} = wp.components;
const {
	RichText,
	PlainText,
} = wp.editor;

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

/**
 * Determine if the related links list is empty.
 *
 * @param {string} related The value of the `related` attribute.
 */
const hasRelatedLinks = ( related ) => {
	if ( 'undefined' === typeof related || '<li></li>' === related || RichText.isEmpty( related ) ) {
		return false;
	}

	return true;
}

// Register the block.
registerBlockType( 'editorial/listicle', {
	title: __( 'Listicle' ),
	description: __( 'An individual item for an article that uses a list as its thematic structure.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu-editorial',
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
		...BackgroundAttributes,
		...ShareToolsAttributes,
	},
	publicationClassName: publicationClass + '-block-editorial-listicle',

	edit: class extends Component {
		constructor() {
			super( ...arguments );
		}

		/**
		 * Update credit attribute with the caption of the selected image.
		 *
		 * @param {object} prevProps The property values before the change.
		 */
		componentDidUpdate( prevProps ) {
			// Get the block properties we need.
			const {
				attributes,
				setAttributes,
			} = this.props;

			// Get the block attributes we need.
			const {
				credit,
				backgroundCaption,
			} = attributes;

			// Stop here if the `backgroundCaption` attribute hasn't changed.
			if ( backgroundCaption === prevProps.attributes.backgroundCaption ) {
				return;
			}

			// Stop here if the `credit` attribute is already set.
			if ( !! credit || ! backgroundCaption ) {
				return;
			}

			// Update the `credit` attribute using the caption from the selected image.
			setAttributes( { credit: backgroundCaption } );
		};

		render() {
			// Get the block properties.
			const {
				attributes,
				setAttributes,
				className,
				isSelected,
			} = this.props;

			// Get the block attributes.
			const {
				hed,
				dek,
				content,
				aside,
				number,
				related,
				credit,
			} = attributes;

			// Check if the block has aside content (extra condition due to use of multiline).
			const hasAsideContent = ( ! RichText.isEmpty( aside ) && aside !== '<br>' );

			// Build out the class list for the block.
			const classes = classnames(
				className,
				{
					'has-number': number,
					'has-sidebar': hasAsideContent,
				}
			);

			/**
			 * Get a value to use for the inline width of the number input.
			 *
			 * Returns either 100% if the field is empty, or `{n}ch`,
			 * where `{n}` is the number of characters in the input.
			 *
			 */
			const getNumberInputWidth = () => {
				return ( number ) ? number.length + 'ch' : '100%';
			};

			// Return the block editing interface.
			return (
				<section className={ classes }>
					<article className="wp-block-editorial-listicle-article">
						<figure className="wp-block-editorial-listicle-figure">
							<Background
								autoplayVideo={ false }
								blockProps={ this.props }
								inlinePlaceholder={ true }
								options={ [] }
								placeholderText={ __( 'Add Media' ) }
							/>
							<figcaption className="wp-caption-text">
								<PlainText
									value={ credit }
									onChange={ credit => setAttributes( { credit } ) }
									placeholder={ __( 'Add Photo or Video Credit…' ) }
								/>
							</figcaption>
						</figure>
						<header className="wp-block-editorial-listicle-header">
							{ ( number || isSelected ) && (
								<h2 className="wp-block-editorial-listicle-header-number">
									<PlainText
										placeholder={ __( 'Add Item Number (Optional)…' ) }
										value={ number }
										onChange={ number => setAttributes( { number } ) }
										style={ {
											width: getNumberInputWidth(),
										} }
									/>
								</h2>
							) }
							<div className="wp-block-editorial-listicle-header-content">
								<RichText
									tagName="h3"
									className="wp-block-editorial-listicle-header-content-hed"
									placeholder={ __( 'Add Title…' ) }
									value={ hed }
									onChange={ value => setAttributes( { hed: value } ) }
									formattingControls={ [ 'bold', 'italic' ] }
								/>
								<RichText
									tagName="h4"
									className="wp-block-editorial-listicle-header-content-dek"
									placeholder={ __( 'Add Subtitle…' ) }
									value={ dek }
									onChange={ value => setAttributes( { dek: value } ) }
									formattingControls={ [ 'bold', 'italic' ] }
								/>
							</div>
						</header>
						<section className="wp-block-editorial-listicle-section">
							<RichText
								tagName="div"
								className="wp-block-editorial-listicle-section-content"
								multiline="p"
								placeholder={ __( 'Add Content… lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in dictum felis. Nullam gravida dui nunc, vitae tristique ex pellentesque at. Suspendisse id porttitor metus. Nullam et ipsum hendrerit urna mattis porttitor at in leo.' ) }
								value={ content }
								onChange={ value => setAttributes( { content: value } ) }
								formattingControls={ [ 'bold', 'italic', 'link' ] }
							/>
							<div className="wp-block-editorial-listicle-section-meta">
								{ ( hasAsideContent || isSelected ) && (
									<aside className="wp-block-editorial-listicle-section-aside">
										<RichText
										tagName="p"
										placeholder={ __( 'Add Sidebar (Optional)…' ) }
										value={ aside }
										onChange={ value => setAttributes( { aside: value } ) }
										formattingControls={ [ 'bold', 'italic', 'link' ] }
										/>
									</aside>
								) }
								<ShareTools
									blockProps={ this.props }
								/>
							</div>
						</section>
						{ ( hasRelatedLinks( related ) || isSelected ) && (
							<footer className="wp-block-editorial-listicle-footer">
								<h3 className="wp-block-editorial-listicle-footer-title">Related Stories</h3>
								<RichText
									tagName="ul"
									multiline="li"
									className="wp-block-editorial-listicle-footer-list"
									placeholder={ __( 'Enter Related Stories List…' ) }
									value={ related }
									onChange={ ( value ) => setAttributes( { related: value } ) }
									formattingControls={ [ 'link' ] }
								/>
							</footer>
						) }
					</article>
				</section>
			);
		};
	},

	save( props ) {
		// Get the block properties we need.
		const {
			attributes
		} = props;

		// Get the block attributes.
		const {
			hed,
			dek,
			content,
			aside,
			number,
			related,
			credit,
		} = attributes;

		// Build out the additional classes to apply to the block.
		const classes = classnames(
			{
				'has-number': ! RichText.isEmpty( number ),
				'has-sidebar': ! RichText.isEmpty( aside ),
			}
		);

		// Return the block rendering for the front end.
		return (
			<section className={ classes }>
				<article className="wp-block-editorial-listicle-article">
					<figure className="wp-block-editorial-listicle-figure">
						<Background
							blockProps={ props }
						/>
						<figcaption className="wp-caption-text">{ credit }</figcaption>
					</figure>
					<header className="wp-block-editorial-listicle-header">
						{ number && (
							<h2 className="wp-block-editorial-listicle-header-number">{ number }</h2>
						) }
						<div className="wp-block-editorial-listicle-header-content">
							<RichText.Content
								tagName="h3"
								className="wp-block-editorial-listicle-header-content-hed"
								value={ hed }
							/>
							<RichText.Content
								tagName="h4"
								className="wp-block-editorial-listicle-header-content-dek"
								value={ dek }
							/>
						</div>
					</header>
					<section className="wp-block-editorial-listicle-section">
						<RichText.Content
							tagName="div"
							className="wp-block-editorial-listicle-section-content"
							value={ content }
							multiline="p"
						/>
						<div className="wp-block-editorial-listicle-section-meta">
							{ ! RichText.isEmpty( aside ) && (
								<aside className="wp-block-editorial-listicle-section-aside">
									<RichText.Content
									tagName="p"
									value={ aside }
									/>
								</aside>
							) }
							<ShareTools
								blockProps={ props }
							/>
						</div>
					</section>
					{ hasRelatedLinks( related ) && (
						<footer className="wp-block-editorial-listicle-footer">
							<h3 className="wp-block-editorial-listicle-footer-title">Related Stories</h3>
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
} );