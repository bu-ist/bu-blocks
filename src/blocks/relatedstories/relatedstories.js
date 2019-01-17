/**
 * BLOCK: bu-relatedstories-cgb
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	withState,
	compose,
} = wp.compose;
const {
	withSelect,
} = wp.data;
const {
	Fragment,
} = wp.element;
const {
	PanelBody,
	RangeControl,
	ToggleControl,
} = wp.components;
const {
	InspectorControls,
	BlockAlignmentToolbar,
	BlockControls,
	URLInput,
} = wp.editor;
const {
	addQueryArgs,
} = wp.url;
const {
	format,
	__experimentalGetSettings, // Used to retrieve date format, watch for deprecation.
} = wp.date;
const {
	apiFetch,
} = wp;
const {
	applyFilters,
} = wp.hooks;

// Register the block.
registerBlockType( 'editorial/relatedstories', {

	title: __( 'Related Stories' ),

	description: __( 'A list of related stories to embed in an article.' ),

	icon: <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="M0,0h24v24H0V0z" fill="none"></path><rect x="11" y="7" width="6" height="2"></rect><rect x="11" y="11" width="6" height="2"></rect><rect x="11" y="15" width="6" height="2"></rect><rect x="7" y="7" width="2" height="2"></rect><rect x="7" y="11" width="2" height="2"></rect><rect x="7" y="15" width="2" height="2"></rect><path d="M20.1,3H3.9C3.4,3,3,3.4,3,3.9v16.2C3,20.5,3.4,21,3.9,21h16.2c0.4,0,0.9-0.5,0.9-0.9V3.9C21,3.4,20.5,3,20.1,3z M19,19H5V5h14V19z" fill="#c00"></path></svg>,

	category: 'bu-editorial',

	attributes: {
		align: {
			type: 'string',
			default: 'right',
		},
		className: {
			type: 'string',
			default: '',
		},

		// The number of cards to display when not a list format.
		cardCount: {
			type: 'number',
			default: 2,
		},

		// Whether posts are selected manually or via YARPP.
		relatedManual: {
			type: 'boolean',
			default: false,
		},

		// Store the post IDs used when a related stories list is manual.
		includePosts: {
			type: 'array',
			default: [],
		},

		// Temporarily store URL lookup data when using URLInput.
		URLInputEntry: {
			type: 'string',
			default: '',
		},
	},

	styles: [
		{
			name: 'list',
			label: __( 'List' ),
			isDefault: true
		},
		{
			name: 'card',
			label: __( 'Card' )
		},
	],

	// Only add alignment attributes when a list is being displayed.
	getEditWrapperProps( attributes ) {
		const { align, className } = attributes;

		if ( [ 'left', 'right' ].includes( align ) && ( 'undefined' === typeof className || className.includes( 'is-style-list' ) ) ) {
			return { 'data-align': align };
		}

		return { 'data-align': 'none' };
	},

	edit: compose( [
		withState( {
			// Track dynamically provided YARPP post IDs as a state.
			yarppPosts: [],
			yarppError: false,
			doingFetch: false,
			doingPublicationFetch: false,
			postPublications: [],
			doingCategoryFetch: false,
			postCategories: [],
		} ),
		withSelect( ( select, props ) => {
			const {
				setState,
				yarppPosts,
				yarppError,
				doingFetch,
				doingPublicationFetch,
				postPublications,
				doingCategoryFetch,
				postCategories,
			} = props;

			const {
				relatedManual,
				includePosts,
				className,
				cardCount,
			} = props.attributes;

			let query;
			let isCardStyle = className && className.includes( 'is-style-card' );
			let perPage = isCardStyle && cardCount ? cardCount : 3;

			if ( relatedManual ) {
				// Setup the query arguments to run against the core REST API for bu-articles.
				query = {
					per_page: perPage,
					include: includePosts,
				}
			} else {
				// If the YARPP posts state has not yet been set, and an
				// existing YARPP API error has not been cleared, retrieve
				// a list of related post IDs.
				if ( yarppPosts.length === 0 && ! yarppError ) {
					let postID = select( 'core/editor' ).getCurrentPostId();

					if ( postID && ! doingFetch ) {
						setState( { doingFetch: true } );
						apiFetch( { path: addQueryArgs( '/bu-yarpp/v1/related', { post_id: postID } ) } ).then( posts => {
							setState( {
								yarppPosts: posts,
								doingFetch: false,
								yarppError: posts.length === 0 ? true : false
							} );
						} ).catch( error => {
							if ( error.code === 'yarpp_dispabled' ) {
								// @todo Display a notice
								setState( {
									yarppError: true,
									doingFetch: false,
								} );
							}
						} );
					}
				}

				// Setup the query arguments to run against the core REST API for bu-articles.
				query = {
					per_page: perPage,
					include: yarppPosts,
				}
			}

			const {
				getEntityRecords,
				getMedia,
			} = select( 'core' );

			let returnPosts = [];

			// If a known number of posts has been provided, retrieve those posts.
			if ( query.include.length > 0 ) {
				let postType = applyFilters( 'buBlocks.relatedStories.postType', 'post' );

				returnPosts = getEntityRecords( 'postType', postType, query );
			}

			// If getEntityRecords has returned `undefined`, set back to an empty array.
			if ( ! returnPosts ) {
				returnPosts = [];
			}

			let returnMedia = [];
			let returnPublications = postPublications.slice( 0 ); // Clone the existing data.
			let returnCategories = postCategories.slice( 0 );

			if ( isCardStyle ) {
				// Loop through each of the posts and, if featured media is available, capture
				// the URL to use for displaying the image in the block.
				for ( const [ _ , post ] of returnPosts.entries() ) {
					if ( 0 !== post.featured_media ) {
						let media = getMedia( post.featured_media );

						returnMedia[ post.id ] = {
							media_url: media ? media.media_details.sizes.responsive_profile.source_url : '',
						};
					}
				}

				// Loop through each of the posts and capture publication information so that we know
				// which category to attempt a lookup for.
				for ( const [ _, post ] of returnPosts.entries() ) {
					if ( 'undefined' === typeof returnPublications[ post.id ] && ! doingPublicationFetch ) {

						setState( {
							doingPublicationFetch: true,
						} );
						apiFetch( { path: addQueryArgs( '/wp/v2/bu-publication', { post: post.id } ) } ).then( publication => {
							if ( publication.length > 0 ) {
								returnPublications[ post.id ] = publication[0].slug;
							} else {
								returnPublications[ post.id ] = false;
							}

							setState( {
								postPublications: returnPublications,
								doingPublicationFetch: false,
							} );
						} );

						// Break early so that only one post is processed at a time to avoid
						// overloading the browser with requests.
						break;
					}
				}

				// Loop through each of the posts and capture category information based on
				// the post's publication.
				for ( const [ _, post ] of returnPosts.entries() ) {
					if ( 'undefined' === typeof returnCategories[ post.id ]
						&& 'undefined' !== typeof returnPublications[ post.id ]
						&& ! doingCategoryFetch ) {

						setState( {
							doingCategoryFetch: true,
						} );

						let taxSlug = returnPublications[ post.id ] + '-article-category';

						apiFetch( { path: addQueryArgs( '/wp/v2/' + taxSlug, { post: post.id } ) } ).then( category => {

							if ( category.length > 0 ) {
								returnCategories[ post.id ] = category[0].name;
							} else {
								returnCategories[ post.id ] = false;
							}

							setState( {
								postCategories: returnCategories,
								doingCategoryFetch: false,
							} );
						} );
					}

					// Break early so that only one post is processed at a time to avoid
					// overloading the browser with requests.
					break;
				}
			}

			return {
				posts: returnPosts,               // Full post objects to display in the block.
				media: returnMedia,               // Image URLs, if available, to display in the block.
				publications: returnPublications, // A list of publications attached to post IDs.
				categories: returnCategories,     // A list of categories attached to post IDs.
			};
		} ),
	] )( ( { posts, media, publications, categories, attributes, ...props } ) => {
		const {
			className,
			setAttributes,
			setState,
		} = props;

		const {
			align,
			cardCount,
			relatedManual,
			URLInputEntry,
			includePosts,
		} = attributes;

		let cardCountClass = '';

		if ( className.includes( 'is-style-card' ) && cardCount === 2 ) {
			cardCountClass = 'has-two';
		} else if ( className.includes( 'is-style-card' ) ) {
			cardCountClass = ' has-three';
		}

		const displayListItem = ( className, post ) => {
			return (
				<li className="wp-block-editorial-relatedstories-list-item">
					<article className="wp-block-editorial-relatedstories-article">
						{ className.includes( 'is-style-card' ) && media && media[ post.id ] && (
							<figure className="wp-block-editorial-relatedstories-article-image">
								<img src={ media[ post.id ].media_url } alt="placeholder" />
							</figure>
						) }
						<div className="wp-block-editorial-relatedstories-article-content">
							{ className.includes( 'is-style-card' ) && categories[ post.id ] && (
								<p className="wp-block-editorial-relatedstories-article-category"><span>{ categories[ post.id ] }</span></p>
							) }
							<h4 className="wp-block-editorial-relatedstories-article-title">
								<a href={ post.link } className="wp-block-editorial-relatedstories-article-title-link">{ post.title.rendered }</a>
							</h4>
							<p className="wp-block-editorial-relatedstories-article-date">{ format( __experimentalGetSettings().formats.date, post.date_gmt ) }</p>
						</div>
					</article>
				</li>
			);
		};

		/**
		 * Remove a previously selected post from the list of manual posts.
		 *
		 * @param {Event} event
		 */
		const removeSelectedPost = ( event ) => {
			let postId = event.target.parentNode.dataset.postId;

			if ( ! postId ) {
				return;
			}

			let index = includePosts.indexOf( parseInt( postId ) );

			if ( index > -1 ) {
				setAttributes( {
					includePosts: includePosts.filter( ( _, i ) => i !== index )
				} );
			}
		};

		/**
		 * Display the markup for an existing selected post.
		 *
		 * @param {object} post The current post to display.
		 */
		const displaySelectedPost = ( post ) => {
			return (
				<li data-post-id={ post.id }>{ post.title.rendered } <button onClick={ removeSelectedPost } type="button" id="remove-selected-post" class="components-button is-tertiary">Remove</button></li>
			);
		};

		/**
		 * Handle the selection of a post in the URLInput component.
		 *
		 * @param {string} url  The data currently in the URLInput component's text input.
		 * @param {object} post The full post object, once selected.
		 */
		const handleSelectPost = ( url, post ) => {
			// If `post` is undefined, then the user is still searching.
			if ( 'undefined' === typeof post ) {
				setAttributes( { URLInputEntry: url } );
			} else {
				// Once a post has been selected, add it to the list of included posts.
				setAttributes( { includePosts: includePosts.concat( post.id ) } );

				// Clear the URL input field to allow for another search.
				setAttributes( { URLInputEntry: '' } );
			}
		};

		/**
		 * Toggle the manual/automatic selection for how related posts are assigned.
		 */
		const toggleRelatedManual = () => {
			setAttributes( { relatedManual: ! relatedManual } );

			// Allow the manual toggle to retrigger a failed related posts request to YARPP.
			if ( relatedManual ) {
				setState( { yarppError: false, doingFetch: false } );
			}
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Settings' ) }>
						{ className.includes( 'is-style-card' ) && (
							<RangeControl
								label={ __( 'Cards' ) }
								value={ cardCount }
								onChange={ ( value ) => setAttributes( { cardCount: value } ) }
								initialPosition={ 2 }
								min={ 2 }
								max={ 3 }
							/>
						) }
						<ToggleControl
							label="Enable manual selection"
							help={ relatedManual ? 'Display manually selected related stories' : 'Display related stories automatically.' }
							checked={ relatedManual }
							onChange={ toggleRelatedManual }
						/>
						{ relatedManual && (
							<URLInput
								value={ URLInputEntry }
								onChange={ handleSelectPost }
							/>
						) }
						{ relatedManual && posts && posts.length > 0 && (
							<Fragment>
								<h3>Manually selected posts:</h3>
								<ul>
									{ posts.map( post => displaySelectedPost( post ) ) }
								</ul>
							</Fragment>
						) }
					</PanelBody>
				</InspectorControls>
				{ ! className.includes( 'is-style-card' ) && (
					<BlockControls>
						<BlockAlignmentToolbar
							value={ align }
							onChange={ ( value ) => setAttributes( { align: value } ) }
							controls={ [ 'left', 'right' ] }
						/>
					</BlockControls>
				) }
				<aside className={ [ 'wp-block-editorial-relatedstories', className, cardCountClass ].join( ' ' ).trim() }>
					{ posts && posts.length > 0 ? (
						<ul className="wp-block-editorial-relatedstories-list">
							{ posts && posts.map( post => displayListItem( className, post ) ) }
						</ul>
					) : (
						<p>Select related posts in this block's settings.</p>
					) }
				</aside>
			</Fragment>
		);
	} ),

	// The front-end HTML for this block is handled in PHP, but
	// the save function is required.
	save() {
		return null;
	},
} );
