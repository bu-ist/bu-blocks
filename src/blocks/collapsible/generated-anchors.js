/**
 * Strip any markup from the text.
 *
 * based on: https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/heading/autogenerate-anchors.js#L20
 * @param {*} text
 * @returns
 */
const getTextWithoutMarkup = ( text ) => {
	const dummyElement = document.createElement( 'div' );
	dummyElement.innerHTML = text;
	return dummyElement.innerText;
};


/**
 * Function to turn a string into a slug by stripping characters, adding hyphens, etc.
 * @param {*} str
 * @returns str The formatted slug.
 */
const slugify = ( str ) => {
	return String(str)
		.normalize('NFKD') // split accented characters into their base characters and diacritical marks
		.replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
		.trim() // trim leading or trailing whitespace
		.toLowerCase() // convert to lowercase
		.replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
		.replace(/\s+/g, '-') // replace spaces with hyphens
		.replace(/-+/g, '-'); // remove consecutive hyphens
};


/**
 * Function to generate a slug from a given text string.
 * @param {str} text The original text string.
 * @returns str The formatted slug.
 */
const getSlug = ( text ) => {
	let slug = getTextWithoutMarkup( text );
	slug = 'bu-collapsible-anchor-'+ slugify( slug );
	return slug;
};


/**
 * Function to get the editor's Document Root to be used with querySelector to find
 * blocks and elements in the editor view.
 *
 * Based on: https://github.com/WordPress/gutenberg/issues/17246#issuecomment-1216528269
 * @param {*} props
 * @returns
 */
const getBlockDocumentRoot = (props) => {
	const iframes = document.querySelectorAll('.edit-site-visual-editor__editor-canvas');
	let _document = document;

	// check for block editor iframes
	for(let i = 0; i < iframes.length; i++){

		let block = iframes[i].contentDocument.getElementById('block-' + props.clientId);
		if(block !== null){
			_document = iframes[i].contentDocument;
			break;
		}
	}

	return _document;
};


/**
 * Function to Search the block editor for blocks with a duplicate anchor.
 *
 * Based on: https://github.com/WordPress/gutenberg/issues/17246#issuecomment-1492074695
 * @param {*} props
 * @param {str} id The anchor ID to check for.
 * @returns boolean
 */
export const isDuplicateblockAnchor = ( props, id ) => {
	let duplicate = false;
	const _document = getBlockDocumentRoot(props);
	const elements = _document.querySelectorAll( '.block-editor-writing-flow [data-anchor="' + id + '"]' );

	if ( elements.length > 1 ) {
		duplicate = true;
	}

	return duplicate;
};


/**
 * Function to generate an Anchor from a given title value.
 * @param {str} title The title value to generate the anchor from.
 * @returns str The new anchor string.
 */
export const generateAnchor = ( title ) => {
	const slug = getSlug( title );
	if ( '' === slug ) {
		return null;
	}

	return slug;
};
