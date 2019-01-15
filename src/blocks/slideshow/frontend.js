bu_blocks.slideshow = (function() {
	const slideshowBlocks = [];
	const $body = document.getElementsByTagName('body')[0];

	findElements = function() {
		//find all the blocks
		const elements = document.getElementsByClassName('js-bu-blocks-slideshow');

		//if found
		if (elements.length > 0) {
			//for each found block do stuff
			for (let m of elements) {
				const block = {};

				//get back btn
				block.backBtn = m.getElementsByClassName('js-bu-blocks-slideshow-back-btn')[0];
				//get forward btn
				block.forwardBtn = m.getElementsByClassName('js-bu-blocks-slideshow-forward-btn')[0];

				//get caption btn
				block.captionBtn = m.getElementsByClassName('js-bu-blocks-slideshow-caption-btn')[0];

				//get media track
				block.mediatrack = m.getElementsByClassName('js-bu-blocks-slideshow-media-track');

				//get caption track
				block.captiontrack = m.getElementsByClassName('js-bu-blocks-slideshow-caption-track')[0];

				//for each one found store as object in the array
				slideshowBlocks.push(block);
			}
		}
	};


	setupHandlers = function() {
		if (slideshowBlocks.length > 0) {
			console.log(slideshowBlocks);
			for (let block of slideshowBlocks) {
				block.backBtn.addEventListener("click", function(e){
					e.preventDefault();
					alert("back clicked");
				});
				block.forwardBtn.addEventListener("click", function(e){
					e.preventDefault();
					alert("forward clicked");
				});
				block.captionBtn.addEventListener("click", function(e) {
					e.preventDefault();
					alert("caption clicked");
				});
			}
		}
	};

	slideshowInit = function() {
		//find the elements
		findElements();

		//setup handlers
		setupHandlers();
	};

	//start on dom ready (ie8+)
	document.addEventListener("DOMContentLoaded", function() {
  		slideshowInit();

	});

	return {
		// getmodalBlocks: function() {
		// 	return modalBlocks;
		// },
		// toggleModal: function( overlay ) {
		// 	if( overlay ) {
		// 		toggleModal( overlay );
		// 	}
		// }
	};
})();