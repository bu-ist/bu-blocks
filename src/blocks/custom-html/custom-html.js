/**
 * BLOCK: editorial/custom-html
 *
 * A block used for arbitrary custom HTML that is not sanitized
 * or escaped in any way on output.
 */

//  Import CSS.
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
	select,
} = wp.data;

const {
	PlainText,
} = wp.editor;

const {
	addQueryArgs,
} = wp.url;

const {
	apiFetch,
} = wp;

// Register the block.
registerBlockType( 'editorial/custom-html', {

	title: __( 'BU Custom HTML' ),

	description: __( 'Enter arbitrary custom HTML.' ),

	icon: <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" focusable="false"><path d="M4.5,11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5V11z M7,10.5h1.5V15H10v-4.5h1.5V9H7V10.5z M14.5,10l-1-1H12v6h1.5v-3.9  l1,1l1-1V15H17V9h-1.5L14.5,10z M19.5,13.5V9H18v6h5v-1.5H19.5z" fill="#c00"></path></svg>,

	category: 'bu-editorial',

	attributes: {

		// This block ID is used when storing individual block content as post meta.
		customBlockID: {
			type: 'string',
			default: '',
		},
	},

	edit: compose( [
		withState( {
			customHTML: '',
			hasLoaded: false,
			doingHTMLFetch: false,
			errorMessage: false,
		} ),
		withSelect( ( select, props ) => {
			const {
				setState,
				customHTML,
				hasLoaded,
				doingHTMLFetch,
				errorMessage,
			} = props;

			const {
				customBlockID,
			} = props.attributes;

			// Do an initial load of the block's stored data from meta.
			if ( '' !== customBlockID && ! doingHTMLFetch && ! hasLoaded ) {
				setState( {
					doingHTMLFetch: true, // Prevent concurrent API calls for the same data.
				} );

				apiFetch(
					{
						path: addQueryArgs(
							'/bu-blocks/v1/customhtml',
							{
								post_id: select( 'core/editor' ).getCurrentPostId(),
								custom_block_id: customBlockID,
							}
						)
					}
				).then( html => {
					setState( {
						customHTML: html,
						doingHTMLFetch: false,
						hasLoaded: true,
					} );
				} ).catch( error => {
					setState( {
						doingHTMLFetch: false,
						errorMessage: error.message,
						hasLoaded: true,
					} );
				} );
			}

			return {
				hasLoaded: hasLoaded,       // Whether the initial load is complete.
				customHTML: customHTML,     // HTML to display in the block.
				errorMessage: errorMessage, // A string to display in the block if an API request failed.
			};
		} ),
	] )( ( { hasLoaded, customHTML, errorMessage, attributes, ...props } ) => {
		const {
			className,
			setState,
			setAttributes,
		} = props;

		const {
			customBlockID,
		} = attributes;

		// Update the block's content state whenever content in this block
		// is changed.
		const updateBlockValue = updatedHTML => {

			// HTML is passed around as a state rather than an attribute
			// because it is stored in meta rather than in content.
			setState( {
				customHTML: updatedHTML,
			} );
		};

		// Set a timestamp based block ID if it does not yet exist. It is okay
		// for multiple posts to share similar block IDs, but not okay for multiple
		// blocks on the same post. Using `Date().getTime()` here provides a unique
		// enough identifier at a low cost.
		if ( '' === customBlockID ) {
			setAttributes( { customBlockID: new Date().getTime() } );
		}

		// Selectors technically can't start with a number, so prepend a string to
		// build the ID attribute of the wrapping container.
		let containerID = 'block-' + customBlockID;

		return (
			<div id={ containerID } className={ className } >
				{ ! hasLoaded && (
					<span>Looking for existing content...</span>
				) }
				{ hasLoaded && (
					<PlainText
						label="Enter custom HTML"
						value={ customHTML }
						onChange={ updateBlockValue }
					></PlainText>
				) }
			</div>
		);
	} ),

	// The front-end HTML for this block is handled in PHP, but
	// the save function is required.
	save( { attributes } ) {
		const {
			customBlockID,
		} = attributes;

		let postID = select( 'core/editor' ).getCurrentPostId();

		// This may be true on the first load of some posts.
		if ( null === postID ) {
			return;
		}

		let post = {
			post_id: postID,
			custom_block_id: customBlockID,
			html: document.querySelector( '#block-' + customBlockID + ' textarea' ).value,
		}

		// Save the data for this block using a custom endpoint.
		if ( '' !== customBlockID ) {
			apiFetch(
				{
					path: '/bu-blocks/v1/customhtml',
					method: 'POST',
					data: post,
				}
			).then( html => {
				// Success!
			} ).catch( error => {
				// How to handle this error?
			} );
		}

		return null;
	},
} );
