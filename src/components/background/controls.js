/**
 * Component: background controls
 */

// WordPress dependencies.
const { __ } = wp.i18n;

const { Fragment } = wp.element;

const {
	IconButton,
	PanelBody,
	RangeControl,
	TextControl,
	ToggleControl,
	Toolbar,
} = wp.components;

const {
	BlockControls,
	InspectorControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;

const { useState } = wp.element;

const { getAuthority } = wp.url;

const { isBlobURL } = wp.blob;

const BackgroundControls = ( props ) => {
	// Destructure properties of this component with defaults.
	const {
		allowedMediaTypes = [ 'image', 'video' ],
		blockProps,
		className = 'bu-blocks-background',
		imageSize = 'full',
		inlinePlaceholder = false,
		options = [ 'opacity' ],
		placeholderText = __( 'Add Media' ),
		setIsUploading,
	} = props;

	// Get the properties of the block using this component.
	const { attributes, setAttributes } = blockProps;

	// Get the attributes for handling the background data.
	const {
		backgroundId,
		backgroundType,
		backgroundUrl,
		backgroundOpacity,
		backgroundAutoplay,
	} = attributes;

	// Reset attributes to undefined.
	const onRemoveMedia = () => {
		setAttributes( {
			backgroundId: undefined,
			backgroundType: undefined,
			backgroundUrl: undefined,
			backgroundAlt: undefined,
			backgroundCaption: undefined,
		} );
	};

	// Set attributes based on the selected or uploaded media.
	const onSelectMedia = ( media ) => {
		if ( ! media || ! media.url ) {
			onRemoveMedia();

			return;
		}

		if ( isBlobURL( media.url ) ) {
			setIsUploading( true );

			setAttributes( { backgroundUrl: media.url } );

			return;
		}

		let mediaType;

		if ( media.media_type ) {
			// Determine the media type from selections originating from a file upload.
			// Only images and videos are accepted. If the media_type is not an image,
			// we can assume it is a video (which contains the media type of 'file').
			mediaType = 'image' === media.media_type ? 'image' : 'video';
		} else {
			// Determine the media type from selections originating from existing files
			// in the media library.
			if ( media.type !== 'image' && media.type !== 'video' ) {
				return;
			}
			mediaType = media.type;
		}

		let url = media.url;

		// Assign the block-designated size if it exists.
		if ( mediaType === 'image' && imageSize !== 'full' ) {
			// The first check is for images already in the media library.
			// The second is for newly uploaded images.
			if ( media.sizes && media.sizes[ imageSize ] ) {
				url = media.sizes[ imageSize ].url;
			} else if (
				media.media_details &&
				media.media_details.sizes[ imageSize ]
			) {
				url = media.media_details.sizes[ imageSize ].source_url;
			}
		}

		setIsUploading( false );

		setAttributes( {
			backgroundId: media.id,
			backgroundType: mediaType,
			backgroundUrl: url,
			backgroundAlt: media.alt,
			backgroundCaption: media.caption,
		} );

		// If an `onChange` attribute is part of the Background component, ensure
		// that fires as expected.
		if ( 'function' === typeof props.onChange ) {
			props.onChange( media, mediaType );
		}
	};

	// Set attributes based on a selected URL.
	const onSelectURL = ( newURL ) => {
		const allowedAuthorities = [
			'vimeo.com',
			'www.youtube.com',
			'youtu.be',
			'www.bu.edu',
		];
		const authority = getAuthority( newURL );

		// Stop here if the selected URL isn't from one of the allowed domains.
		if (
			newURL === backgroundUrl ||
			! allowedAuthorities.includes( authority )
		) {
			return;
		}

		setAttributes( {
			backgroundId: undefined,
			backgroundType: 'url',
			backgroundUrl: newURL,
			backgroundAlt: undefined,
			backgroundCaption: undefined,
		} );
	};

	// Return the media placeholder if no media has been set.
	const placeholder = () => {
		if ( backgroundUrl ) {
			return undefined;
		}

		return (
			<MediaUploadCheck>
				<MediaPlaceholder
					icon="format-image"
					className={ className }
					labels={ {
						title: placeholderText,
						instructions: __(
							'Drag, upload, or select a file from your library.'
						),
					} }
					onSelect={ onSelectMedia }
					onSelectURL={
						allowedMediaTypes.includes( 'video' )
							? onSelectURL
							: undefined
					}
					allowedTypes={ allowedMediaTypes }
				/>
				{ allowedMediaTypes.includes( 'video' ) && (
					<p className="description components-bu-background-url-note">
						YouTube, Vimeo, and BUniverse URLs are supported at this
						time.
					</p>
				) }
			</MediaUploadCheck>
		);
	};

	// Return inspector controls.
	const inspectorControls = (
		<InspectorControls>
			<PanelBody
				title={ __( 'Media Settings' ) }
				className="components-panel__body-bu-background-media"
			>
				{ ! inlinePlaceholder && placeholder() }
				{ !! backgroundUrl && (
					<Fragment>
						{ backgroundType === 'url' ? (
							<TextControl
								label={ __( 'URL' ) }
								value={ backgroundUrl }
								onChange={ ( bgUrl ) => {
									setAttributes( {
										backgroundUrl: bgUrl,
										backgroundType:
											backgroundUrl === ''
												? undefined
												: backgroundType,
									} );
								} }
							/>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ onSelectMedia }
									allowedTypes={ allowedMediaTypes }
									value={ backgroundId }
									render={ ( { open } ) => (
										<IconButton
											onClick={ open }
											icon="edit"
											label={ __(
												'Edit Background Media'
											) }
											isDefault
											isLarge
										>
											{ __( 'Edit' ) }
										</IconButton>
									) }
								/>
								<IconButton
									onClick={ onRemoveMedia }
									icon="no"
									label={ 'Remove Background Media' }
									isDefault
									isLarge
								>
									{ __( 'Remove' ) }
								</IconButton>
							</MediaUploadCheck>
						) }
					</Fragment>
				) }
				{ options.includes( 'opacity' ) && (
					<RangeControl
						label={ __( 'Background Opacity' ) }
						value={ backgroundOpacity }
						onChange={ ( ratio ) =>
							setAttributes( { backgroundOpacity: ratio } )
						}
						min={ 10 }
						max={ 100 }
						step={ 10 }
					/>
				) }
				{ ( backgroundType === 'video' ||
					backgroundType === 'url' ) && (
					<ToggleControl
						label={ __( 'Autoplay video' ) }
						checked={ backgroundAutoplay }
						onChange={ () =>
							setAttributes( {
								backgroundAutoplay: ! backgroundAutoplay,
							} )
						}
					/>
				) }
			</PanelBody>
		</InspectorControls>
	);

	// Return the block editing interface.
	return (
		<Fragment>
			{ inlinePlaceholder && placeholder() }
			{ !! backgroundUrl && backgroundType !== 'url' && (
				<BlockControls>
					<Toolbar>
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ onSelectMedia }
								allowedMediaTypes={ allowedMediaTypes }
								value={ backgroundId }
								render={ ( { open } ) => (
									<IconButton
										className="components-toolbar__control"
										label={ __( 'Edit Background Media' ) }
										icon="edit"
										onClick={ open }
									/>
								) }
							/>
							<IconButton
								className="components-toolbar__control"
								label={ 'Remove Background Media' }
								icon="no"
								onClick={ onRemoveMedia }
							/>
						</MediaUploadCheck>
					</Toolbar>
				</BlockControls>
			) }
			{ ( ! inlinePlaceholder || backgroundUrl ) && inspectorControls }
		</Fragment>
	);
};

export default BackgroundControls;
