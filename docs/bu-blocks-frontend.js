const bu_blocks = {};
;;bu_blocks.drawer = (function() {
	var drawerBlocks = []; //stores all of our found blocks
	var $body = document.getElementsByTagName('body')[0]; //target body tag
	//var eventOpen = new Event('bu-blocks-modal-open');
	//var eventClose = new Event('bu-blocks-modal-close');

	var toggleDrawer = function(drawer) {
		console.log( drawer );
		// Using an if statement to check the class
		if ( drawer.classList.contains('show-drawer') ) {
			drawer.classList.remove('show-drawer');
			//dispatch the event on the overlay dom element
			//overlay.dispatchEvent( eventClose );
		} else {
			drawer.classList.add('show-drawer');
			//dispatch the event on the overlay dom element
			//overlay.dispatchEvent( eventOpen );
		}
	};

	var findElements = function() {
		//find all the blocks
		var elements = document.getElementsByClassName('js-bu-block-drawer');
		//if found
		if (elements.length > 0) {
			//for each found block do stuff
			for ( var i = 0; i < elements.length; i++ ) {

				var block = {};

				//get first returned drawer content element
				block.drawer = elements[i].getElementsByClassName('js-bu-block-drawer-content')[0];
				//get all matched trigger btns
				block.button = elements[i].getElementsByClassName('js-bu-block-drawer-open');
				//get first returned overlay element
				block.close = elements[i].getElementsByClassName('js-bu-block-drawer-close')[0];

				//for each one found store as object in the array
				drawerBlocks.push(block);
			}
		}
	};

	var setupHandlers = function() {
		if (drawerBlocks.length > 0) {

			for ( var i = 0; i < drawerBlocks.length; i++ ) {
				//store for loop instance as variable so event handlers
				//can reference element when event fires
				var thisDrawer = drawerBlocks[i];

				//some drawer blocks may have more than one trigger btn
				//so loop through all matched to setup events
				for ( var b = 0; b < thisDrawer.button.length; b++ ) {
					//for each btn we find, add an event handler
					thisDrawer.button[b].addEventListener( "click", function(e) {
						e.preventDefault();
						toggleDrawer( thisDrawer.drawer );
					});
				}
				thisDrawer.close.addEventListener( "click", function(e) {
					e.preventDefault();
					toggleDrawer( thisDrawer.drawer );
				});
			}
		}
	};

	var drawerInit = function() {
		//find the elements
		findElements();

		//setup handlers
		setupHandlers();
	};

	//start on dom ready (ie8+)
	document.addEventListener("DOMContentLoaded", function() {
  		drawerInit();

	});

	return {
		getdrawerBlocks: function() {
			return drawerBlocks;
		},
		toggleDrawer: function( overlay ) {
			if( overlay ) {
				toggleModal( overlay );
			}
		}
	};
})();;bu_blocks.modal = (function() {
	var modalBlocks = [];
	var $body = document.getElementsByTagName('body')[0];
	var eventOpen = new Event('bu-blocks-modal-open');
	var eventClose = new Event('bu-blocks-modal-close');

	var lockScroll = function() {
		$body.classList.add('bu-blocks-modal-noscroll');
	};

	var unlockScroll = function() {
		$body.classList.remove('bu-blocks-modal-noscroll');
	}

	var toggleModal = function(overlay) {
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

	var findElements = function() {
		//find all the blocks
		var elements = document.getElementsByClassName('js-bu-block-modal');
		//if found
		if (elements.length > 0) {
			//for each found block do stuff
			for ( var i = 0; i < elements.length; i++ ) {

				var block = {};

				//get first returned overlay element
				block.overlay = elements[i].getElementsByClassName('js-bu-block-modal-overlay')[0];
				//get all matched trigger btns
				block.button = elements[i].getElementsByClassName('js-bu-block-modal-trigger-overlay');
				//get first returned overlay element
				block.close = elements[i].getElementsByClassName('js-bu-block-modal-overlay-close')[0];

				//for each one found store as object in the array
				modalBlocks.push(block);
			}
		}
	};

	var setupHandlers = function() {
		if (modalBlocks.length > 0) {

			for ( var i = 0; i < modalBlocks.length; i++ ) {
				//store for loop instance as variable so event handlers
				//can reference element when event fires
				var thisModal = modalBlocks[i];

				//some modals may have more than one trigger btn
				//so loop through all matched to setup events
				for ( var b = 0; b < thisModal.button.length; b++ ) {
					//for each btn we find, add an event handler
					thisModal.button[b].addEventListener( "click", function(e) {
						e.preventDefault();
						toggleModal( thisModal.overlay );
					});
				}
				thisModal.close.addEventListener( "click", function(e) {
					e.preventDefault();
					toggleModal( thisModal.overlay );
				});
			}
		}
	};

	var modalInit = function() {
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

	var findElements = function() {
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

				//get onmedia back btn
				block.backMediaBtn = elements[i].getElementsByClassName('js-bu-blocks-slideshow-back-onmedia-btn')[0];
				//get onmedia forward btn
				block.forwardMediaBtn = elements[i].getElementsByClassName('js-bu-blocks-slideshow-forward-onmedia-btn')[0];
				//get ontrack forward btn
				block.forwardTrackBtn = elements[i].getElementsByClassName('js-bu-blocks-slideshow-forward-ontrack-btn')[0];

				//get caption btn
				block.captionBtn = elements[i].getElementsByClassName('js-bu-blocks-slideshow-caption-btn')[0];

				//get media track
				block.mediatrack = elements[i].getElementsByClassName('js-bu-blocks-slideshow-media-track')[0];

				//get media items
				block.mediatrackitems = elements[i].getElementsByClassName('js-bu-blocks-slideshow-media-track-item');

				//get caption track
				block.captiontrack = elements[i].getElementsByClassName('js-bu-blocks-slideshow-caption-track')[0];

				//get caption items
				block.captiontrackitems = elements[i].getElementsByClassName('js-bu-blocks-slideshow-caption-item');
				//get caption items
				block.captionContainer = elements[i].getElementsByClassName('js-bu-blocks-slideshow-caption-container')[0];

				//for each one found store as object in the array
				slideshowBlocks.push(block);
			} 

			// set active states on items and captions
			for ( i = 0; i < block.mediatrackitems.length; i++) {
				block.mediatrackitems[i].active = false;
				block.captiontrackitems[i].active = false;
			}
			// set first to active true
			block.mediatrackitems[0].active = true;
			block.captiontrackitems[0].active = true;
			for (var i = block.mediatrackitems.length - 1; i >= 0; i--) {
				// set active classes
				if (block.mediatrackitems[i].active === true) {
					block.mediatrackitems[0].classList.toggle("bu-blocks-slideshow-media-track-item-active");
					block.captiontrackitems[0].classList.toggle("bu-blocks-slideshow-media-track-item-active");
				}
			}
			block.captionContainer.collapsed = true;
			sizingCaption( block );
		}
	};


	var setupHandlers = function() {
		if (slideshowBlocks.length > 0) {
			for ( i = 0; i < slideshowBlocks.length; i++ ) {
				var block = slideshowBlocks[i];

				block.backBtn.addEventListener("click", function(e){
					e.preventDefault();
					prevItem( block );
					sizingCaption( block );
				});
				block.backMediaBtn.addEventListener("click", function(e){
					e.preventDefault();
					prevItem( block );
					sizingCaption( block );
				});
				block.forwardBtn.addEventListener("click", function(e){
					e.preventDefault();
					nextItem( block );
					sizingCaption( block );
				});
				block.forwardMediaBtn.addEventListener("click", function(e){
					e.preventDefault();
					nextItem( block );
					sizingCaption( block );
				});
				block.forwardTrackBtn.addEventListener("click", function(e){
					e.preventDefault();
					nextItem( block );
					sizingCaption( block );
				});
				block.captionBtn.addEventListener("click", function(e) {
					e.preventDefault();
					toggleCaption( block );
					sizingCaption( block );
				});
			}
		}
	};


	var setupMediaTrack = function() {
		for ( i = 0; i < slideshowBlocks.length; i++ ) {
			var block = slideshowBlocks[i];
			if ( block.mediatrack && block.mediatrackitems ) {
				//set currentItem variable
				block.currentItem = 0;

				//store number of items
				block.itemslength = block.mediatrackitems.length;


				//set default width
				block.mediatrack.style.width = 'calc(' + block.itemslength + ' * 100%)';
				//set start position to first image
				block.mediatrack.style.left = '0%';

				//for each image calculate the width
				for ( var i = 0; i < block.mediatrackitems.length; i++ ) {
					block.mediatrackitems[i].style.width = 'calc(1/' + block.itemslength + ' * 100% - 2px)';
				}
			}


			//setup the caption track starting widths and postion
			if( block.captiontrack && block.captiontrackitems ) {
				//set default width
				block.captiontrack.style.width = 'calc(' + block.itemslength + ' * 100%)';
				//set start position to first caption
				block.captiontrack.style.left = '0%';

				//for each caption calculate the width
				for ( var i = 0; i < block.captiontrackitems.length; i++ ) {
					block.captiontrackitems[i].style.width = 'calc(1/' + block.itemslength + ' * 100%)';
				}
			}
		}

	};


	var nextItem = function( block ) {
		if( block.currentItem === block.itemslength - 1 ) {
			//can't go next anymore
		} else {
			block.currentItem = block.currentItem + 1;
			block.mediatrack.style.left = block.currentItem * -100 + '%';
			block.captiontrack.style.left = block.currentItem * -100 + '%';
			//move over active states
			for (var i = block.mediatrackitems.length - 1; i >= 0; i--) {
				if (block.mediatrackitems[i].active === true) {
					block.mediatrackitems[i].active = false;
					block.mediatrackitems[i].classList.toggle("bu-blocks-slideshow-media-track-item-active");
					block.mediatrackitems[i + 1].active = true;
					block.mediatrackitems[i + 1].classList.toggle("bu-blocks-slideshow-media-track-item-active");

					block.captiontrackitems[i].active = false;
					block.captiontrackitems[i].classList.toggle("bu-blocks-slideshow-media-track-item-active");
					block.captiontrackitems[i + 1].active = true;
					block.captiontrackitems[i + 1].classList.toggle("bu-blocks-slideshow-media-track-item-active");
				}
			}
		}
	};

	var prevItem = function( block ) {
		if( block.currentItem === 0 ) {
			//do nothing can't go back more
		} else {
			block.currentItem = block.currentItem - 1;
			block.mediatrack.style.left = block.currentItem * -100 + '%';
			block.captiontrack.style.left = block.currentItem * -100 + '%';
			//move over active states
			for (var i = 0; i < block.mediatrackitems.length; i++) {
				if (block.mediatrackitems[i].active === true) {
					block.mediatrackitems[i].active = false;
					block.mediatrackitems[i].classList.toggle("bu-blocks-slideshow-media-track-item-active");
					block.mediatrackitems[i - 1].active = true;
					block.mediatrackitems[i - 1].classList.toggle("bu-blocks-slideshow-media-track-item-active");

					block.captiontrackitems[i].active = false;
					block.captiontrackitems[i].classList.toggle("bu-blocks-slideshow-media-track-item-active");
					block.captiontrackitems[i - 1].active = true;
					block.captiontrackitems[i - 1].classList.toggle("bu-blocks-slideshow-media-track-item-active");
				}
			}
		}
	};

	var toggleCaption = function( block ) {
		// Toggle the collapsed class
		block.captionContainer.classList.toggle("bu-blocks-slideshow-caption-container-collapsed");
		block.captionContainer.collapsed = !block.captionContainer.collapsed;
	};

	var sizingCaption = function( block ) {
		// look for active caption and grab height
		for (var i = 0; i < block.captiontrackitems.length; i++) {
			if (block.captionContainer.collapsed == false) {
				if (block.captiontrackitems[i].active === true) {
					block.captiontrack.style.maxHeight = block.captiontrackitems[i].offsetHeight + 'px';
				}
			}
			else {
				block.captiontrack.style.maxHeight = '1.6em';
				if (block.captiontrackitems[i].active === true) {
					//remove colapse class if text is 1 line
					if (block.captiontrackitems[i].offsetHeight < block.captiontrack.offsetHeight ) {
						block.captionContainer.classList.remove("bu-blocks-slideshow-caption-container-collapsed");
						block.captionBtn.style.display = 'none';
					}
					else {
						block.captionContainer.classList.add("bu-blocks-slideshow-caption-container-collapsed");
						block.captionBtn.style.display = 'block';
					}
				}
			}
		}
	};




	var slideshowInit = function() {
		//find the elements
		findElements();

		//setup handlers
		setupHandlers();

		setupMediaTrack();
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