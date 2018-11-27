/**
 * Component: background
 *
 * An absraction of the default Cover block for more general use inside blocks.
 */

// Import CSS.
import './editor.scss';

// Internal dependencies.
import BackgroundAttributes from './attributes.js';

// Export dependencies for easier importing in blocks.
export {
	BackgroundAttributes
};

// WordPress dependencies.
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { BaseControl, IconButton, PanelBody, RangeControl, Toolbar } = wp.components;
const { BlockControls, InspectorControls, MediaPlaceholder, MediaUpload } = wp.editor;

function Background( {
	allowedMediaTypes = [ 'image', 'video' ],
	blockProps,
	className = 'bu-blocks-background',
	controlPanelTitle = 'Background Settings',
	children,
	...props
} ) {

	const { attributes, setAttributes } = blockProps;
	const { backgroundId, backgroundType, backgroundUrl, dimRatio } = attributes;

	const onSelectMedia = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( {
				backgroundId: undefined,
				backgroundType: undefined,
				backgroundUrl: undefined
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
			backgroundId: media.id,
			backgroundType: mediaType,
			backgroundUrl: media.url,
		} );
	};

	const onRemoveMedia = () => {
		setAttributes( {
			backgroundId: undefined,
			backgroundType: undefined,
			backgroundUrl: undefined,
		} );
	};

	const controls = (
		<Fragment>
			{ !! backgroundUrl && (
				<BlockControls>
					<Toolbar>
						<MediaUpload
							onSelect={ onSelectMedia }
							allowedMediaTypes={ allowedMediaTypes }
							value={ backgroundId }
							render={ ( { open } ) => (
								<IconButton
									className='components-toolbar__control'
									label={ __( 'Edit Background Media' ) }
									icon='edit'
									onClick={ open }
								/>
							) }
						/>
						<IconButton
							className='components-toolbar__control'
							label={ ( 'Remove Background Media' ) }
							icon='no'
							onClick={ onRemoveMedia }
						/>
					</Toolbar>
				</BlockControls>
			) }
			<InspectorControls>
				<PanelBody title={ controlPanelTitle }>

					{ ! backgroundUrl && (
						<BaseControl>
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
						</BaseControl>
					) }

					{ !! backgroundUrl && (
						<BaseControl
							label={ __( 'Background Media' ) }
						>
							<div className='components-bu-background-media'>
								<MediaUpload
									onSelect={ onSelectMedia }
									allowedTypes={ allowedMediaTypes }
									value={ backgroundId }
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
						</BaseControl>
					) }

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

	const backgroundColor = (
		<div
			className={ classes }
			{ ...props }
		>
			{ children }
		</div>
	);

	const backgroundImage = (
		<img
			className={ classes }
			src={ backgroundUrl }
		/>
	)

	const backgroundVideo = (
		<video
			className={ classes }
			autoPlay
			muted
			loop
			src={ backgroundUrl }
		/>
	);

	return (
		<Fragment>
			{ controls }
			{ ! backgroundUrl && ( backgroundColor ) }
			{ ( backgroundUrl && 'image' === backgroundType ) && ( backgroundImage ) }
			{ ( backgroundUrl && 'video' === backgroundType ) && ( backgroundVideo ) }
		</Fragment>
	);
}

function dimRatioToClass( ratio ) {
	return ( ratio === 0 || ratio === 50 ) ?
		null :
		'has-background-dim-' + ( 10 * Math.round( ratio / 10 ) );
}

export default Background;