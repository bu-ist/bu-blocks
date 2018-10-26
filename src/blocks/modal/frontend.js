bu_blocks.modal = (function() {
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
})();


//console.log(bu_blocks.modal.getmodalBlocks());