/**
 * Inspector controls for the post chooser component.
 */

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	Component,
} = wp.element;
const {
	Button,
	PanelBody,
	RadioControl,
} = wp.components;
const {
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} = wp.editor;
const {
	apiFetch,
} = wp;
const {
	addQueryArgs,
} = wp.url;

class PostChooserControls extends Component {
	constructor() {
		super( ...arguments );
	}

	/**
	 * Grab any attached images when a post is selected.
	 *
	 * @param {object} prevProps The property values before the change.
	 */
	componentDidUpdate( prevProps ) {
		// Get the properties of the block this component is being used in.
		const {
			attributes: {
				postChooserPostID,
			},
			setAttributes,
		} = this.props.blockProps;

		// Stop here if the `postChooserPostID` attribute has not changed.
		if ( postChooserPostID === prevProps.blockProps.attributes.postChooserPostID ) {
			return;
		}

		// Make a request for the media attached to the selected post.
		const request = apiFetch( {
			path: addQueryArgs( '/wp/v2/media', {
				parent: postChooserPostID,
				_fields: [ 'id', 'alt_text', 'guid', 'media_details' ],
			} ),
		} );

		let postImages = [];

		// Add attached images to the array initialized above.
		request.then( images => {
			images.forEach( ( image, i ) => {
				postImages[ i ] = {
					id: image.id,
					alt: image.alt_text,
					thumb: image.media_details.sizes.thumbnail.source_url,
					full: image.guid.rendered,
				};
			} );
		} );

		// Update the `postChooserPostImages` attribute with the array.
		setAttributes( { postChooserPostImages: postImages } );
	}

	/**
	 * Set relevant attributes when an image option is selected.
	 *
	 * @param {string} newImage Currently selected image option.
	 */
	onChangeImage = ( newImage ) => {
		// Get the properties of the block using this component.
		const {
			attributes,
			setAttributes,
		} = this.props.blockProps;

		// Get the `postChooserPostImages` attribute.
		const {
			postChooserPostImages,
		} = attributes;

		setAttributes( { postChooserPostImageID: Number( newImage ) } );

		// Search the `postChooserPostImages` attribute for the selected image.
		const image = postChooserPostImages.find( x => x.id === Number( newImage ) );

		// If the image was found, set the URL and Alt attributes.
		if ( image ) {
			setAttributes( {
				postChooserPostImageURL: image.full,
				postChooserPostImageAlt: image.alt,
			} );
		}
	};

	/**
	 * Output options for images attached to the selected photo.
	 */
	imageOptions = () => {
		// Get the block attributes we'll be using.
		const {
			postChooserPostImages,
			postChooserPostImageID,
		} = this.props.blockProps.attributes;

		// Stop here if no attached images were found.
		if ( ! postChooserPostImages || 0 === postChooserPostImages.length ) {
			return undefined;
		}

		// Build out an array of options.
		const options = postChooserPostImages.map( image => {
			let option = {};

			option[ 'label' ] = image.id;
			option[ 'value' ] = image.id;

			return option;
		} );

		// Return the radio control.
		return (
			<RadioControl
				label={ __( 'Post Images' ) }
				className="bu-post-chooser-image-options"
				selected={ postChooserPostImageID }
				options={ options }
				onChange={ this.onChangeImage }
			/>
		);
	};

	/**
	 * Set relevant attributes when a new image is uploaded.
	 *
	 * @param {string} image The uploaded image.
	 */
	onSelectImage = ( image ) => {
		// Stop here if no image image was selected.
		if ( ! image || ! image.url ) {
			return;
		}

		this.props.blockProps.setAttributes( {
			postChooserPostImageID: Number( image.id ),
			postChooserPostImageURL: image.url,
			postChooserPostImageAlt: image.alt,
		} );
	};

	// Render the controls for the
	render() {
		// Grab the selected post ID from the block attributes.
		const {
			postChooserPostID,
		} = this.props.blockProps.attributes;

		// Define the parent post to attach uploaded images to.
		const additionalData = {
			post: postChooserPostID,
		};

		// Return the inspector panel controls for the selected post.
		return (
			<InspectorControls>
				{ postChooserPostID && (
					<PanelBody
						title={ __( 'Post Options' ) }
						className="bu-post-chooser-options"
					>
						<p>Choose another story</p>
						{ this.props.children }
						{ this.imageOptions() }
						<MediaUploadCheck>
							<MediaUpload
								onSelect={ this.onSelectImage }
								allowedTypes={ [ 'image' ] }
								additionalData={ additionalData }
								render={ ( { open } ) => (
									<Button
										onClick={ open }
										className="bu-post-chooser-image-upload"
									>
										{ __( 'Upload another image' ) }
									</Button>
								) }
							/>
						</MediaUploadCheck>
					</PanelBody>
				) }
			</InspectorControls>
		);
	};
};

export default PostChooserControls;