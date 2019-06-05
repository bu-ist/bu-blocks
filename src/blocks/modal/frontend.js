bu_blocks.modal = (function() {
	var modalBlocks = [];
	var $body = document.getElementsByTagName('body')[0];
	var eventOpen = new CustomEvent('bu-blocks-modal-open');
	var eventClose = new CustomEvent('bu-blocks-modal-close');

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
})();