/**
 * BLOCK: editorial/photoessay/image
 *
 * Register an individual image block for the photo essay block.
 *
 * Instead of using InnerBlocks with the default image block as the only
 * allowed block, this is a simplified version of the default image block.
 * This approach will prevent an extra block layer that could confuse users,
 * avoids the alignment options of the default image block, and may help with
 * the modal functionality of the photo essay block.
 */

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	IconButton,
	PanelBody,
	Toolbar,
} = wp.components;
const {
	Fragment,
} = wp.element;
const {
	BlockControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	RichText,
} = wp.editor;
const {
	addFilter
} = wp.hooks;
const {
	createHigherOrderComponent
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
			source: 'html',
			selector: 'figcaption',
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

	edit( { attributes, setAttributes, isSelected } ) {
		const {
			id,
			url,
			alt,
			caption,
		} = attributes;

		// Set attributes when an image is selected.
		const onSelectImage = ( media ) => {
			if ( ! media || ! media.id || ! media.url ) {
				onRemoveImage();

				return;
			}

			setAttributes( {
				id: media.id,
				url: media.url,
				alt: media.alt,
				caption: media.caption,
			} );
		};

		// Reset attributes when an image is removed.
		const onRemoveImage = () => {
			setAttributes( {
				id: undefined,
				url: undefined,
				alt: undefined,
				caption: undefined,
			} );
		};

		return (
			<div className="wp-block-photoessay-media">
				<figure>
					<MediaUploadCheck>
						{ ! url && (
							<MediaPlaceholder
								icon="format-image"
								label="Image"
								labels={ {
									title: 'Image',
									name: 'images',
								} }
								onSelect={ onSelectImage }
								allowedTypes={ [ 'image' ] }
							/>
						) }
						{ url && (
							<BlockControls>
								{ isSelected && (
								<Toolbar>
									<MediaUpload
										onSelect={ onSelectImage }
										value={ id }
										allowedTypes={ [ 'image' ] }
										render={ ( { open } ) => (
											<div>
												<IconButton
													className="components-toolbar__control"
													label="Edit image"
													icon="edit"
													onClick={ open }
												/>
												<IconButton
													icon="no-alt"
													onClick={ onRemoveImage }
													className="blocks-gallery-image__remove"
													label="Remove image"
												/>
											</div>
										) }
									/>
								</Toolbar>
								) }
							</BlockControls>
						) }
					</MediaUploadCheck>
					{ url && (
						<img
							src={ url }
							alt={ alt }
							className={ id ? `wp-image-${ id }` : null }
						/>
					) }
					{ isSelected && (
						<RichText
							tagName="figcaption"
							placeholder={ __( 'Write caption…' ) }
							value={ caption }
							onChange={ ( value ) => setAttributes( { caption: value } ) }
							formattingControls={ [ 'bold', 'italic', 'link' ] }
							inlineToolbar
						/>
					) }
				</figure>
			</div>
		);
	},

	save( { attributes } ) {
		const {
			url,
			alt,
			caption,
			id,
			columnClass,
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
						{ ! RichText.isEmpty( caption ) && <RichText.Content tagName="figcaption" value={ caption } /> }
					</figure>
				</div>
			</div>
		);
	},
} );