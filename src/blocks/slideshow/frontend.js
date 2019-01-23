bu_blocks.slideshow = (function() {
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

				//for each one found store as object in the array
				slideshowBlocks.push(block);
			}
			//console.log(slideshowBlocks);
		}
	};


	var setupHandlers = function() {
		if (slideshowBlocks.length > 0) {
			for ( i = 0; i < slideshowBlocks.length; i++ ) {
				var block = slideshowBlocks[i];

				block.backBtn.addEventListener("click", function(e){
					e.preventDefault();
					prevItem( block );
				});
				block.forwardBtn.addEventListener("click", function(e){
					e.preventDefault();
					nextItem( block );
				});
				block.captionBtn.addEventListener("click", function(e) {
					e.preventDefault();
					alert("caption clicked");
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
		}
	};

	var prevItem = function( block ) {
		if( block.currentItem === 0 ) {
			//do nothing can't go back more
		} else {
			block.currentItem = block.currentItem - 1;
			block.mediatrack.style.left = block.currentItem * -100 + '%';
			block.captiontrack.style.left = block.currentItem * -100 + '%';
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