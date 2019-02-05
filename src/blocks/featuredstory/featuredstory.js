/**
 * BLOCK: editorial/featured-story
 *
 * Register a featured story block with Gutenberg.
 */

// External dependencies.
import classnames from 'classnames';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import PostChooser, { PostChooserAttributes, PostChooserControls } from '../../components/post-chooser';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	parse,
	registerBlockType,
} = wp.blocks;
const {
	Fragment,
} = wp.element;
const {
	Path,
	SVG
} = wp.components;
const {
	RichText,
} = wp.editor;
const {
	apiFetch,
} = wp;
const {
	addQueryArgs,
} = wp.url;

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className Default classes assigned to the block.
 */
const getClasses = ( className ) => {
	return (
		classnames(
			'wp-block-edition-featured-story',
			className,
		)
	);
};

// Register the block.
registerBlockType( 'edition/featured-story', {
	title: __( 'Featured Story' ),
	description: __( 'Feature a story on an Edition post' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu-edition',
	attributes: {
		PostChooserEntry: {
			type: 'string',
			default: '',
		},
		hed: {
			type: 'string',
		},
		dek: {
			type: 'string',
		},
		primaryTerm: {
			type: 'string',
		},
		commentCount: {
			type: 'string',
		},
		date: {
			type: 'string',
		},
		className: {
			type: 'string',
		},
		...PostChooserAttributes,
	},
	styles: [
		{
			name: 'text-over-image',
			label: __( 'Image with Text Overlay' ),
		},
		{
			name: 'side-by-side',
			label: __( 'Vertical Image and Text Side By Side' ),
		},
	],
	publicationClassName: publicationClass + '-block-featuredstory',

	edit( props ) {
		const {
			attributes,
			setAttributes,
			className,
			isSelected,
		} = props;

		const {
			PostChooserEntry,
			hed,
			dek,
			primaryTerm,
			commentCount,
			date,
			postChooserPostID,
			postChooserPostImageURL,
			postChooserPostImageAlt,
		} = attributes;

		/**
		 * Handle the selection of a post from the URLInput component.
		 *
		 * @param {string} url  The data currently in the URLInput component's text input.
		 * @param {object} post The full post object, once selected.
		 */
		const handleSelectPost = ( url, post ) => {
			// If `post` is undefined, the user is still searching.
			if ( 'undefined' === typeof post ) {
				setAttributes( { PostChooserEntry: url } );
			} else {
				// Update post chooser attributes with data from the selected post,
				// clear the URL input field to allow selecting a different post.
				setAttributes( {
					postChooserPostID: post.id,
					postChooserPostURL: post.url,
					commentCount: post.comment_count,
					date: post.date_gmt,
					PostChooserEntry: '',
				} );

				// Attempt to find a leadin block in the selected post.
				const blocks = parse( post.content );
				const leadin = blocks.find( x => x.name === 'bu/leadin' );

				if ( leadin ) {
					// Set relevant attributes with data from the leadin block attributes.
					setAttributes( {
						postChooserPostImageID: Number( leadin.attributes.backgroundId ),
						postChooserPostImageURL: leadin.attributes.backgroundUrl,
						postChooserPostImageAlt: leadin.attributes.backgroundAlt,
						hed: leadin.attributes.head,
						dek: leadin.attributes.deck,
						primaryTerm: leadin.attributes.primaryTerm,
					} );
				} else {
					// Set the `hed` attribute using the post title if no leadin block was found.
					setAttributes( { hed: post.title } );

					// Set image-related attributes using the featured image if one was found.
					if ( post.featured_image ) {
						setAttributes( {
							postChooserPostImageID: Number( post.featured_image.id ),
							postChooserPostImageURL: post.featured_image.url,
							postChooserPostImageAlt: post.featured_image.alt,
						} );
					}
				}

				// Set the `postChooserPostImages` attribute with data from attached images.
				if ( post.attached_media ) {
					let postImages = [];

					post.attached_media.forEach( ( image, i ) => {
						postImages[ i ] = {
							id: image.id,
							alt: image.alt,
							thumb: image.thumbnail,
							full: image.url,
						};
					} );

					setAttributes( { postChooserPostImages: postImages } );
				}
			}
		};

		return (
			<div className={ getClasses( className ) }>
				{ ! postChooserPostID && (
					<PostChooser
						value={ PostChooserEntry }
						onChange={ handleSelectPost }
					/>
				) }
				{ postChooserPostID && (
					<Fragment>
						<div className="wp-block-edition-featured-story-image">
							{ postChooserPostImageURL && (
								<figure>
									<img
										src={ postChooserPostImageURL }
										alt={ postChooserPostImageAlt }
									/>
								</figure>
							) }
						</div>
						<div class="wp-block-edition-featured-story-content">
							{ primaryTerm && (
								<span className="wp-prepress-tag">{ primaryTerm }</span>
							) }
							{ ( ! RichText.isEmpty( dek ) || isSelected ) && (
								<RichText
									tagName="h4"
									className="dek"
									placeholder={ __( 'Add Sub Header…' ) }
									value={ dek }
									onChange={ value => setAttributes( { dek: value } ) }
									formattingControls={ [ 'bold', 'italic' ] }
								/>
							) }
							<RichText
								tagName="h1"
								className="hed"
								placeholder={ __( 'Add Header…' ) }
								value={ hed }
								onChange={ value => setAttributes( { hed: value } ) }
								formattingControls={ [ 'bold', 'italic' ] }
							/>
							{ commentCount && (
								<span className="comment-count">{ commentCount }</span>
							) }
							{ date && (
								<span className="date">{ date }</span>
							) }
						</div>
					</Fragment>
				) }
				<PostChooserControls
					blockProps={ props }
				>
					<PostChooser
						value={ PostChooserEntry }
						onChange={ handleSelectPost }
						autoFocus={ false }
						placeholder={ _( 'Type to search' ) }
					/>
				</PostChooserControls>
			</div>
		);
	},

	save() {
		// Rendering handled in PHP.
		return null;
	},
} );