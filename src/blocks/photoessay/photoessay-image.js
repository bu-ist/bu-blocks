/**
 * BLOCK: editorial/photoessay/image
 *
 * Register an individual image block for the photo essay block.
 */

// Internal dependencies.
import Background, { BackgroundAttributes } from '../../components/background';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	RichText,
} = wp.editor;
const {
	addFilter,
} = wp.hooks;
const {
	createHigherOrderComponent,
} = wp.compose;

// Add the layout class to the block wrapper component.
const addColumnClassName = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		const { attributes } = props;

		if ( attributes.columnClass ) {
			return <BlockListBlock { ...props } className={ attributes.columnClass } />;
		} else {
			return <BlockListBlock { ...props } />
		}
	};
},
'addColumnClassName' );

// Filter the block wrapper component with the `addColumnClassName` function.
addFilter(
	'editor.BlockListBlock',
	'bu-blocks/column-class-name',
	addColumnClassName
);

// Register the block.
registerBlockType( 'editorial/photoessay-image', {
	title: __( 'Photo Essay Image' ),
	description: __( 'An individual image block for use in photo essay rows.' ),
	icon: 'format-image',
	category: 'bu-editorial',
	parent: [ 'editorial/photoessay' ],
	attributes: {
		id: {
			type: 'number',
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'src',
		},
		alt: {
			type: 'string',
			source: 'attribute',
			selector: 'img',
			attribute: 'alt',
			default: '',
		},
		caption: {
			type: 'string',
		},
		columnClass: {
			type: 'string',
		},
		...BackgroundAttributes,
	},
	supports: {
		className: false,
		customClassName: false,
		html: false,
		inserter: false,
		reusable: false,
	},

	edit( props ) {
		const {
			attributes: {
				backgroundCaption,
				backgroundType,
			},
			isSelected,
			setAttributes,
		} = props;

		return (
			<div className={ ( backgroundType ) ? 'wp-block-photoessay-media-wrapper' : '' }>
				<div className="wp-block-photoessay-media">
					<figure>
						<Background
							blockProps={ props }
							imageSize="16x9_md"
							inlinePlaceholder={ true }
							options={ [] }
						/>
					</figure>
				</div>
				{ ( ! RichText.isEmpty( backgroundCaption ) || isSelected ) && (
					<RichText
						tagName="p"
						className="wp-block-photoessay-media-caption wp-prepress-component-caption"
						placeholder={ __( 'Add a caption and/or media credit...' ) }
						value={ backgroundCaption }
						onChange={ value => setAttributes( { backgroundCaption: value } ) }
						formattingControls={ [ 'bold', 'italic', 'link' ] }
						keepPlaceholderOnFocus
					/>
				) }
			</div>
		);
	},

	save( props ) {
		const {
			attributes: {
				backgroundCaption,
				columnClass,
			}
		} = props;

		return (
			<div className={ columnClass }>
				<div className="wp-block-photoessay-media">
					<figure>
						<Background blockProps={ props } />
						{ ! RichText.isEmpty( backgroundCaption ) && (
							<figcaption>
								<RichText.Content
									tagName="p"
									className="wp-block-photoessay-media-caption wp-prepress-component-caption"
									value={ backgroundCaption }
								/>
							</figcaption>
						) }
					</figure>
				</div>
			</div>
		);
	},

	deprecated: [
		{
			attributes: {
				id: {
					type: 'number',
				},
				url: {
					type: 'string',
					source: 'attribute',
					selector: 'img',
					attribute: 'src',
				},
				alt: {
					type: 'string',
					source: 'attribute',
					selector: 'img',
					attribute: 'alt',
					default: '',
				},
				caption: {
					type: 'string',
				},
				columnClass: {
					type: 'string',
				},
			},

			supports: {
				className: false,
				customClassName: false,
				html: false,
				inserter: false,
				reusable: false,
			},

			migrate( { id, url, alt, caption } ) {
				return {
					backgroundId: id,
					backgroundUrl: url,
					backgroundAlt: alt,
					backgroundCaption: caption,
				};
			},

			save( { attributes } ) {
				const {
					id,
					url,
					alt,
					columnClass,
					caption,
				} = attributes;

				return (
					<div className={ columnClass }>
						<div className="wp-block-photoessay-media">
							<figure>
								<img
									src={ url }
									alt={ alt }
									className={ id ? `wp-image-${ id }` : null }
								/>
								{ caption && (
									<figcaption>
										<p class="wp-block-photoessay-media-caption wp-prepress-component-caption">
											{ caption }
										</p>
									</figcaption>
								) }
							</figure>
						</div>
					</div>
				);
			},
		}
	]
} );