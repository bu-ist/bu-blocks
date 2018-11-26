/**
 * Component: background
 *
 * An absraction of the default Cover block for more general use.
 */

// Import CSS.
import './editor.scss';

// WordPress dependencies.
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Toolbar, IconButton, PanelBody, BaseControl, RangeControl } = wp.components;
const { BlockControls, InspectorControls, MediaUpload, MediaPlaceholder } = wp.editor;

function Background( { inspectorPanelTitle = 'Background Settings', allowedMediaTypes, attributes, setAttributes, className, children, ...props } ) {
	const { backgroundType, backgroundMediaUrl, backgroundMediaId, dimRatio } = attributes;

	const onSelectMedia = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( {
				backgroundMediaUrl: undefined,
				backgroundMediaId: undefined
			} );

			return;
		}

		let mediaType;

		// For media selections originated from a file upload.
		if ( media.media_type ) {
			// Only images and videos are accepted so if the media_type is not an image we can assume it is a video.
			// (Videos contain the media type of 'file' in the object returned from the rest api.)
			mediaType = ( 'image' === media.media_type ) ? 'image' : 'video';
		} else { // For media selections originated from existing files in the media library.
			if (
				media.type !== 'image' &&
				media.type !== 'video'
			) {
				return;
			}
			mediaType = media.type;
		}

		setAttributes( {
			backgroundType: mediaType,
			backgroundMediaUrl: media.url,
			backgroundMediaId: media.id,
		} );
	};

	const onRemoveMedia = () => {
		setAttributes( {
			backgroundType: undefined,
			backgroundMediaUrl: undefined,
			backgroundMediaId: undefined,
		} );
	};

	const controls = (
		<Fragment>
			{ !! backgroundMediaUrl && (
				<BlockControls>
					<Toolbar>
						<MediaUpload
							onSelect={ onSelectMedia }
							allowedMediaTypes={ allowedMediaTypes }
							value={ backgroundMediaId }
							render={ ( { open } ) => (
								<IconButton
									className='components-toolbar__control'
									label={ __( 'Edit Background Media' ) }
									icon='edit'
									onClick={ open }
								/>
							) }
						/>
					</Toolbar>
				</BlockControls>
			) }
			<InspectorControls>
				<PanelBody title={ inspectorPanelTitle }>
					<BaseControl>

					{ ! backgroundMediaUrl && (
						<MediaPlaceholder
							icon='format-image'
							className={ className }
							labels={ {
								title: __( 'Background Media' ),
								instructions: __( 'Drag, upload, or select a file from your library.' ),
							} }
							onSelect={ onSelectMedia }
							allowedTypes={ allowedMediaTypes }
						/>
					) }

					{ !! backgroundMediaUrl && (
						<div className='components-bu-background-media'>
							<MediaUpload
								onSelect={ onSelectMedia }
								allowedTypes={ allowedMediaTypes }
								value={ backgroundMediaId }
								render={ ( { open } ) => (
									<IconButton
										onClick={ open }
										icon='edit'
										label={ __( 'Edit Background Media' ) }
										isDefault
										isLarge
									>
										{ __( 'Edit' ) }
									</IconButton>
								) }
							/>
							<IconButton
								onClick={ onRemoveMedia }
								icon='no'
								label={ ( 'Remove Background Media' ) }
								isDefault
								isLarge
							>
								{ __( 'Remove' ) }
							</IconButton>
						</div>
					) }
					</BaseControl>

					<BaseControl>
						<RangeControl
							label={ __( 'Background Opacity' ) }
							value={ dimRatio }
							onChange={ ratio => setAttributes( { dimRatio: ratio } ) }
							min={ 0 }
							max={ 100 }
							step={ 10 }
						/>
					</BaseControl>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	)

	const classes = [
		className,
		dimRatioToClass( dimRatio ),
		...( dimRatio !== 0 ? [ 'has-background-dim' ] : [] ),
	].join( ' ' ).trim();

	return (
		<Fragment>
			{ controls }
			{ ! backgroundMediaUrl && (
				<div
					className={ classes }
					{ ...props }
				>
					{ children }
				</div>
			) }
			{ ( backgroundMediaUrl && 'image' === backgroundType ) && (
				<img
					className={ classes }
					src={ backgroundMediaUrl }
				/>
			) }
			{ ( backgroundMediaUrl && 'video' === backgroundType ) && (
				<video
					className={ classes }
					autoPlay
					muted
					loop
					src={ backgroundMediaUrl }
				/>
			) }
		</Fragment>
	);
}

function dimRatioToClass( ratio ) {
	return ( ratio === 0 || ratio === 50 ) ?
		null :
		'has-background-dim-' + ( 10 * Math.round( ratio / 10 ) );
}

export default Background;