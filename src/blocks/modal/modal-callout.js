/**
 * BLOCK: editorial-modal-callout
 *
 * The callout for the modal block.
 */

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { Toolbar, IconButton } = wp.components;
const { BlockControls, InnerBlocks, MediaPlaceholder, MediaUpload } = wp.editor;

// Register the block.
registerBlockType( 'editorial/modal-callout', {

	title: __( 'Modal callout' ),
	description: __( 'The callout for the modal block.' ),
	icon: 'admin-page',
	category: 'bu-editorial',
	parent: [ 'editorial/modal' ],
	supports: {
		inserter: false,
	},
	attributes: {
		url: {
			attribute: 'src',
			selector: '.banner-placeholder',
			type: 'string',
		},
		id: {
			type: 'number',
		},
		alt: {
			attribute: 'alt',
			selector: '.banner-placeholder',
			type: 'string',
		},
	},

	edit( { className, attributes, setAttributes } ) {
		const { url, id, alt } = attributes;

		const onSelectMedia = ( media ) => {
			if ( ! media || ! media.url ) {
				setAttributes( { url: undefined, id: undefined } );
				return;
			}

			setAttributes( {
				url: media.url,
				id: media.id,
			} );
		};

		const controls = (
			<Fragment>
				<BlockControls>
					{ !! url && (
						<Toolbar>
							<MediaUpload
								onSelect={ onSelectMedia }
								allowedTypes={ [ 'image' ] }
								value={ id }
								render={ ( { open } ) => (
									<IconButton
										className="components-toolbar__control"
										label={ __( 'Edit image' ) }
										icon="edit"
										onClick={ open }
									/>
								) }
							/>
						</Toolbar>
					) }
				</BlockControls>
			</Fragment>
		);

		if ( ! url ) {
			return (
				<Fragment>
					{ controls }
					<MediaPlaceholder
						icon='format-image'
						className={ className }
						labels={ {
							title: __( 'Modal callout' ),
							instructions: __( 'Drag an image, upload a new one or select a file from your library.' ),
						} }
						onSelect={ onSelectMedia }
						accept="image/*"
						allowedTypes={ [ 'image '] }
					/>
				</Fragment>
			);
		}

		return (
			<Fragment>
				{ controls }
				<div className={ className }>
					<div class="wp-block-editorial-modal-media">
						<figure class="wp-block-editorial-modal-image">
							<img
								className="banner-placeholder"
								src={ url }
								alt={ ( alt ) ? alt : '' }
							/>
						</figure>
					</div>
					<div class="wp-block-editorial-modal-callout-content">
						<div class="modal-valign">
							<InnerBlocks templateLock={ false } />
							<p><a href="#one" class="js-bu-block-modal-trigger-overlay button">Explore</a></p>
						</div>
					</div>
				</div>
			</Fragment>
		);
	},

	save( { attributes } ) {
		const { url, alt } = attributes;

		const cardImage = ( src, alt ) => {
			if ( ! src ) {
				return null;
			}

			return (
				<img
					className="banner-placeholder"
					src={ src }
					alt={ ( alt ) ? alt : '' }
				/>
			);
		};

		return (
			<div>
				<div class="wp-block-editorial-modal-media">
					<figure class="wp-block-editorial-modal-image">
						{ cardImage( url, alt ) }
					</figure>
				</div>
				<div class="wp-block-editorial-modal-callout-content">
					<div class="modal-valign">
						<InnerBlocks.Content />
						<p><a href="#one" class="js-bu-block-modal-trigger-overlay button">Explore</a></p>
					</div>
				</div>
			</div>
		);
	},
} );