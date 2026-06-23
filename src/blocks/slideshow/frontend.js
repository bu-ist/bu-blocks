bu_blocks.slideshow = ( function() {
	const slideshowBlocks = [];

	const findElements = function() {
		//find all the blocks
		const elements = document.getElementsByClassName( 'wp-block-bu-blocks-slideshow' );

		//if found
		if ( elements.length > 0 ) {
			//for each found block do stuff
			for ( let i = 0; i < elements.length; i++ ) {
				const block = {};
				//for each one found store as object in the array
				slideshowBlocks.push( block );
			}
		}
	};

	/**
	 * For all Blocks found, initialize the Block.
	 */
	const setupBlocks = function() {
		if ( slideshowBlocks.length > 0 ) {
			slideshowBlocks.map( ( block ) => {
				// Init the Block.
				initBlock( block );
			} );
		}
	};

	/**
	 * Initialize a single block as a Splide Slideshow.
	 * @param {*} block The Block to initialize as a slideshow.
	 */
	const initBlock = function( block ) {
		console.log( 'initBlock ran', block );
	};

	// const toggleCaption = function( block ) {
	// 	// Toggle the collapsed class
	// 	block.captionContainer.classList.toggle( 'bu-blocks-slideshow-caption-container-collapsed' );
	// 	block.captionContainer.collapsed = ! block.captionContainer.collapsed;
	// };

	const slideshowInit = function() {
		//find the elements
		findElements();

		//setup blocks
		setupBlocks();
	};

	//start on dom ready (ie8+)
	document.addEventListener( 'DOMContentLoaded', function() {
  		slideshowInit();
	} );

	return {
		getslideshowBlocks: function() {
			return slideshowBlocks;
		},
		initBlock: initBlock,
	};
}() );
