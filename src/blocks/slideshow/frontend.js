bu_blocks.slideshow = (function() {
	var slideshowBlocks = [];
	var $body = document.getElementsByTagName('body')[0];

	//findElements = function() {
	function findElements() {
		//find all the blocks
		var elements = document.getElementsByClassName('js-bu-blocks-slideshow');

		//if found
		if (elements.length > 0) {
			//for each found block do stuff
			for( i = 0; i < elements.length; i++ ) {

				var block = {};

				//get back btn
				block.backBtn = elements[i].getElementsByClassName('js-bu-blocks-slideshow-back-btn')[0];
				//get forward btn
				block.forwardBtn = elements[i].getElementsByClassName('js-bu-blocks-slideshow-forward-btn')[0];

				//get caption btn
				block.captionBtn = elements[i].getElementsByClassName('js-bu-blocks-slideshow-caption-btn')[0];

				//get media track
				block.mediatrack = elements[i].getElementsByClassName('js-bu-blocks-slideshow-media-track')[0];

				//get caption track
				block.captiontrack = elements[i].getElementsByClassName('js-bu-blocks-slideshow-caption-track')[0];

				//for each one found store as object in the array
				slideshowBlocks.push(block);
			}
		}
	};


	setupHandlers = function() {
		if (slideshowBlocks.length > 0) {
			for ( i = 0; i < slideshowBlocks.length; i++ ) {
				slideshowBlocks[i].backBtn.addEventListener("click", function(e){
					e.preventDefault();
					alert("back clicked");
				});
				slideshowBlocks[i].forwardBtn.addEventListener("click", function(e){
					e.preventDefault();
					alert("forward clicked");
				});
				slideshowBlocks[i].captionBtn.addEventListener("click", function(e) {
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
		getslideshowBlocks: function() {
			return slideshowBlocks;
		}
	};
})();