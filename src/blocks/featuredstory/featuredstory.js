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
			source: 'html',
			selector: '.hed'
		},
		dek: {
			type: 'string',
			source: 'html',
			selector: '.dek'
		},
		primaryTerm: {
			type: 'string',
			source: 'html',
			selector: '.primary-term',
		},
		commentCount: {
			type: 'string',
			source: 'html',
			selector: '.comment-count',
		},
		date: {
			type: 'string',
			source: 'html',
			selector: '.date',
		},
		specialTag: {
			type: 'string',
			source: 'html',
			selector: '.special-tag',
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
					PostChooserEntry: '',
				} );

				// Set additional attributes with data parsed from the leadin block
				// of the selected post.
				setLeadinAttributes( post.id, post.subtype );
			}
		};

		/**
		 * Make a secondary request for the selected post to set additional attributes.
		 *
		 * If we provide our own endpoint, we can eliminate this secondary request.
		 *
		 * @param {string} postId   ID of the post to request.
		 * @param {string} postType The type of post to request.
		 */
		const setLeadinAttributes = ( postId, postType ) => {
			const request = apiFetch( {
				path: addQueryArgs( `/wp/v2/${postType}/${postId}`, {
					context: 'edit', // Edit context provides access to the raw post content.
					_fields: [ 'date', 'title', 'content' ],
					_embed: true,
				} ),
			} );

			request.then( post => {
				// Attempt to find a leadin block in the selected post.
				const blocks = parse( post.content.raw );
				const leadin = blocks.find( x => x.name === 'bu/leadin' );

				if ( leadin ) {
					// Set relevant attributes with data from the leadin block attributes.
					setAttributes( {
						postChooserPostImageID: leadin.attributes.backgroundId,
						postChooserPostImageURL: leadin.attributes.backgroundURL,
						postChooserPostImageAlt: leadin.attributes.backgroundAlt,
						hed: leadin.attributes.head,
						dek: leadin.attributes.deck,
						primaryTerm: leadin.attributes.primaryTerm,
					} );
				} else {
					// Set the `hed` attribute using the post title if no leadin block was found.
					setAttributes( { hed: post.title.rendered } );

					// Set image-related attributes using the featured image if one was found.
					if ( post._embedded['wp:featuredmedia'] ) {
						const postThumbnail = post._embedded['wp:featuredmedia']['0'];

						setAttributes( {
							postChooserPostImageID: postThumbnail.id,
							postChooserPostImageURL: postThumbnail.source_url,
							postChooserPostImageAlt: postThumbnail.alt_text,
						} );
					}
				}

				// Parse the date.
				const postDate = new Date( post.date );
				const options = { year: 'numeric', month: 'long', day: 'numeric' };
				const date = new Intl.DateTimeFormat( 'en-US', options ).format( postDate );

				// Set `commentCount` and `date` attributes.
				setAttributes( {
					commentCount: ( post._embedded.replies ) ? post._embedded.replies.length : undefined,
					date: date,
				} );
			} );
		};

		return (
			<div className={ getClasses( className ) }>
				{ ! postChooserPostID && (
					<PostChooser
						value={ PostChooserEntry }
						onChange={ handleSelectPost }
						postTypes={ [ 'bu-article' ] }
					/>
				) }
				{ postChooserPostID && (
					<Fragment>
						<div class="wp-block-edition-featured-story-image">
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
								<span class="wp-prepress-tag">{ primaryTerm }</span>
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
								<span class="comment-count">{ commentCount }</span>
							) }
							{ date && (
								<span class="date">{ date }</span>
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
						postTypes={ [ 'bu-article' ] }
					/>
				</PostChooserControls>
			</div>
		);
	},

	save( props ) {
		const {
			attributes,
		} = props;

		const {
			hed,
			dek,
			primaryTerm,
			commentCount,
			date,
			postChooserPostURL,
			postChooserPostImageURL,
			postChooserPostImageAlt,
			className = '', // Assign default in case the unpacked value is `undefined`.
		} = attributes;

		return (
			<div className={ getClasses( className ) }>
				<div class="wp-block-edition-featured-story-media">
					{ postChooserPostImageURL && (
						<img
							src={ postChooserPostImageURL }
							alt={ postChooserPostImageAlt }
						/>
					) }
				</div>
				<div class="wp-block-edition-featured-story-content">
					{ primaryTerm && (
						<span class="primary-term">{ primaryTerm }</span>
					) }
					{ ! RichText.isEmpty( dek ) && (
						<RichText.Content
							tagName="h4"
							className="dek"
							value={ dek }
						/>
					) }
					<a href={ postChooserPostURL }>
						<RichText.Content
							tagName="h1"
							className="hed"
							value={ hed }
						/>
					</a>
					{ commentCount && (
						<span class="comment-count">{ commentCount }</span>
					) }
					{ date && (
						<span class="date">{ date }</span>
					) }
				</div>
			</div>
		);
	},
} );