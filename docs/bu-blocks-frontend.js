const bu_blocks = {};
;;bu_blocks.modal = (function() {
	const modalBlocks = [];
	const $body = document.getElementsByTagName('body')[0];
	const eventOpen = new Event('bu-blocks-modal-open');
	const eventClose = new Event('bu-blocks-modal-close');

	lockScroll = function() {
		$body.classList.add('bu-blocks-modal-noscroll');
	};

	unlockScroll = function() {
		$body.classList.remove('bu-blocks-modal-noscroll');
	}

	toggleModal = function(overlay) {
		// Using an if statement to check the class
		if (overlay.classList.contains('show-overlay')) {
			overlay.classList.remove('show-overlay');
			//dispatch the event on the overlay dom element
			overlay.dispatchEvent( eventClose );
			unlockScroll();
		} else {
			overlay.classList.add('show-overlay');
			//dispatch the event on the overlay dom element
			overlay.dispatchEvent( eventOpen );
			lockScroll();
		}
	};

	findElements = function() {
		//find all the blocks
		const elements = document.getElementsByClassName('js-bu-block-modal');

		//if found
		if (elements.length > 0) {
			//for each found block do stuff
			for (let m of elements) {
				const block = {};

				//get first returned overlay element
				block.overlay = m.getElementsByClassName('js-bu-block-modal-overlay')[0];
				//get all matched trigger btns
				block.button = m.getElementsByClassName('js-bu-block-modal-trigger-overlay');
				//get first returned overlay element
				block.close = m.getElementsByClassName('js-bu-block-modal-overlay-close')[0];

				//for each one found store as object in the array
				modalBlocks.push(block);
			}
		}
	};

	setupHandlers = function() {
		if (modalBlocks.length > 0) {
			for (let block of modalBlocks) {
				//some modals may have more than one trigger btn
				//so loop through all matched to setup events
				for (let btn of block.button) {
					//for each btn we find, add an event handler
					btn.addEventListener("click", function(e) {
						e.preventDefault();
						toggleModal(block.overlay);
					});
				}
				block.close.addEventListener("click", function(e) {
					e.preventDefault();
					toggleModal(block.overlay);
				});
			}
		}
	};

	modalInit = function() {
		//find the elements
		findElements();

		//setup handlers
		setupHandlers();
	};

	//start on dom ready (ie8+)
	document.addEventListener("DOMContentLoaded", function() {
  		modalInit();

	});

	return {
		getmodalBlocks: function() {
			return modalBlocks;
		},
		toggleModal: function( overlay ) {
			if( overlay ) {
				toggleModal( overlay );
			}
		}
	};
})();;bu_blocks.photoessay = (function() {
	


function myFunction() {
    // console.log("foo");
    // var currentImageOriginal = document.getElementsByClassName("zxcv");
    // console.log( currentImageOriginal.offsetLeft );
    // var currentImageCloseUp = document.getElementsByClassName("current");
    // demoDiv.innerHTML = "offsetLeft: " + testDiv.offsetLeft + "<br>offsetTop: " + testDiv.offsetTop;
}
	return {
		getmodalBlocks: function() {
			console.log("foo");
		},
	};
})();;bu_blocks.slideshow = (function() {
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