// WordPress dependencies.
import { subscribe, useSelect, select } from '@wordpress/data';
import { PlainText, useBlockProps } from '@wordpress/block-editor';
import { addQueryArgs } from '@wordpress/url';
import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';
import { Notice } from '@wordpress/components';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;

	const { customBlockID } = attributes;

	const [ customHTML, setCustomHTML ] = useState( '' );
	const [ hasLoaded, setHasLoaded ] = useState( false );
	const [ errorMessage, setErrorMessage ] = useState( false );

	/**
	 * Get the current post ID for use in calling
	 * apiFetch() to get the saved HTML from the endpoint.
	 */
	const { postID } = useSelect( () => {
		if ( ! customBlockID ) {
			return { postID: null };
		}
		const { getCurrentPostId } = select( 'core/editor' );
		const currentPostID = getCurrentPostId();

		return {
			postID: currentPostID,
		};
	}, [ customBlockID ] );

	/**
	 * When postID or customBlockID changes, call apiFetch()
	 * to get the saved HTML from the custom endpoint.
	 */
	useEffect( () => {
		apiFetch( {
			path: addQueryArgs( '/bu-blocks/v1/customhtml', {
				post_id: postID,
				custom_block_id: customBlockID,
			} ),
		} )
			.then( ( html ) => {
				setCustomHTML( html );
				setHasLoaded( true );
			} )
			.catch( ( error ) => {
				setErrorMessage( error.message );
				setHasLoaded( true );
			} );
	}, [ postID, customBlockID ] );

	// Save post meta via REST Endpoint.
	const savePostMeta = function () {
		// This may be true on the first load of some posts.
		if ( null === postID ) {
			return;
		}

		const customTextArea = document.querySelector(
			'textarea#block-' + customBlockID
		);

		// This may be true on the first load of some posts.
		if ( null === customTextArea ) {
			return;
		}

		const post = {
			post_id: postID,
			custom_block_id: customBlockID,
			html: customTextArea.value,
		};

		// Save the data for this block using a custom endpoint.
		//
		// This is saved this way vs the standard block->attribute->meta
		// approach so that the HTML is left intact as is and is not rendered
		// to post_content. The intent with this block is to support HTML as
		// entered, including unclosed tags or other issues that WP will try
		// to fix in the core HTML block.
		//
		// Also, when the HTML is stored as an attribute it is part of the block
		// markup. However all of the blocks are parsed on loading of the post in
		// the editor and run through some functions to validate the markup. Any
		// unclosed tags or other issues trigger a warning and the user would be
		// prompted to have WP fix it. Therby breaking the intended code output.
		//
		// Why would you want unclosed tags or other issues? Normally you don't
		// but in some edge cases you may need to "wrap" html like a div tag around
		// other content in the post. This block unlike the core HTML block will allow
		// you to open a tag and then close it in another BU Custom HTML block later.
		// It's the responsiblity of the user to make sure to close the tags in those
		// situations but it is important to have that ability.
		if ( '' !== customBlockID ) {
			apiFetch( {
				path: '/bu-blocks/v1/customhtml',
				method: 'POST',
				data: post,
			} )
				.then( ( html ) => {
					// Success!
				} )
				.catch( ( error ) => {
					// How to handle this error?
					setErrorMessage(
						'An error occured when saving the block:' +
							error.message
					);
				} );
		}
	};

	/* In 5.4 the previous method of saving the html to post meta was
	not working properly. A temporary fix of using wp.data.subscribe() to
	monitor for post save and update the post meta then is being used here.

	Ultimately a better solution is needed. A suggested approach to bypass validation
	by the block editor instead of this method of storing in postmeta via the rest
	api would be to encode the html as base64 so it appears to be a nonsensical string
	and store that in a normal block attribute and then decode the base64 "hidden" html
	on the frontend to convert back to html. */

	const { isSavingPost } = select( 'core/editor' );
	const { isAutosavingPost } = select( 'core/editor' );
	const { didPostSaveRequestSucceed } = select( 'core/editor' );
	let saving = false;

	subscribe( () => {
		if (
			isSavingPost() &&
			! isAutosavingPost() &&
			didPostSaveRequestSucceed()
		) {
			saving = true;
		} else if ( saving ) {
			savePostMeta();
			saving = false;
		}
	} );

	// Set a timestamp based block ID if it does not yet exist. It is okay
	// for multiple posts to share similar block IDs, but not okay for multiple
	// blocks on the same post. Using `Date().getTime()` here provides a unique
	// enough identifier at a low cost.
	if ( '' === customBlockID ) {
		setAttributes( {
			customBlockID: 'manual-' + new Date().getTime(),
		} );
	}

	// Selectors technically can't start with a number, so prepend a string to
	// build the ID attribute of the wrapping container.
	const containerID = 'block-' + customBlockID;

	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			{ ! hasLoaded && <span>Looking for existing content...</span> }
			{ errorMessage && (
				<Notice status="error" isDismissible={ false }>
					<p>
						An error occurred: <code>{ errorMessage }</code>
					</p>
				</Notice>
			) }
			{ hasLoaded && (
				<PlainText
					placeholder="Enter custom HTML"
					value={ customHTML ? customHTML : '' }
					onChange={ ( updatedHTML ) => setCustomHTML( updatedHTML ) }
					id={ containerID }
				></PlainText>
			) }
		</div>
	);
}
