const bu_blocks = {};
;;bu_blocks.modal = (function() {
	var modalBlocks = [];
	var $body = document.getElementsByTagName('body')[0];
	var eventOpen = new Event('bu-blocks-modal-open');
	var eventClose = new Event('bu-blocks-modal-close');

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

	//findElements = function() {
	function findElements() {
		console.log('finding modal blocks');
		//find all the blocks
		var elements = document.getElementsByClassName('js-bu-block-modal');
		//console.log(elements);
		//if found
		if (elements.length > 0) {
			//for each found block do stuff
			for ( i = 0; i < modalBlocks.length; i++ ) {
				var block = {};

				//get first returned overlay element
				block.overlay = modalBlocks[i].getElementsByClassName('js-bu-block-modal-overlay')[0];
				//get all matched trigger btns
				block.button = modalBlocks[i].getElementsByClassName('js-bu-block-modal-trigger-overlay');
				//get first returned overlay element
				block.close = modalBlocks[i].getElementsByClassName('js-bu-block-modal-overlay-close')[0];

				//for each one found store as object in the array
				modalBlocks.push(block);
				console.log(block);
			}
		}
	};

	setupHandlers = function() {
		if (modalBlocks.length > 0) {
			console.log(modalBlocks);
			for ( i = 0; i < modalBlocks.length; i++ ) {
				//some modals may have more than one trigger btn
				//so loop through all matched to setup events
				for ( b = 0; b < modalBlocks[i].length; b++ ) {
					//for each btn we find, add an event handler
					modalBlocks[i][b].addEventListener("click", function(e) {
						e.preventDefault();
						toggleModal(block.overlay);
					});
				}
				modalBlocks[i].close.addEventListener("click", function(e) {
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

	};
})();;bu_blocks.slideshow = (function() {
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