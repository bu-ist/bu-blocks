

	// create unique ids
	function uniqId() {
		return Math.round(new Date().getTime() + (Math.random() * 100));
	}


	$( document ).ready(function() {

		var kssStorage = window.localStorage;

		/*

		Loop through all example markup blocks
		and copy the example markup into a dynamically
		created iframe. Add the WordPress theme's stylesheet
		to the iframe so styles are isolated and setup
		events to handle resizing of the iframe

		*/


		$('.id-kss-example-wrapper').each(function(){

			var newID = uniqId();

			$(this).attr("id", newID ); // add a unique ID

			var $iframe = $(this).find('.id-kss-example-iframe');
			var $iframeWindow = $iframe.contents();
			var $markup = $(this).find('.template-iframe');
			var markup = $markup.html(); // get the current markup and store

			$markup.remove(); //now remove the current (old) markup example

			//add jquery to the iframe
			var jquery = $iframe[0].contentWindow.document.createElement("script");
				jquery.type = "text/javascript";
				jquery.src = "kss-assets/jquery.js";
				$iframe[0].contentWindow.document.head.appendChild(jquery);


			jquery.onload = function() {

				//after jquery is loaded add the iframe scripts js file
				var script = $iframe[0].contentWindow.document.createElement("script");
				script.type = "text/javascript";
				script.src = "kss-assets/iframe-scripts.js";
				$iframe[0].contentWindow.document.head.appendChild(script);
			};

			if( themeScriptsURL ) {
				//lets add the theme scripts js file
				var themescript = $iframe[0].contentWindow.document.createElement("script");
				themescript.type = "text/javascript";
				themescript.src = themeScriptsURL;
				$iframe[0].contentWindow.document.head.appendChild(themescript);
			}

			if( exampleStylesheetURL ) {
				//lets add the stylesheet from gruntfile options paramter
				var examplestyles = $iframe[0].contentWindow.document.createElement("link");
				examplestyles.rel = "stylesheet";
				examplestyles.href = exampleStylesheetURL;
				examplestyles.type = "text/css";
				$iframe[0].contentWindow.document.head.appendChild(examplestyles);
			}

			//lets add the stylesheet from the WordPress Theme to each iframe
			var styles = $iframe[0].contentWindow.document.createElement("link");
			styles.rel = "stylesheet";
			styles.href = themeStylesheetURL;
			styles.type = "text/css";
			$iframe[0].contentWindow.document.head.appendChild(styles);


			//inject the example markup into the iframe body
			$iframeWindow
				.contents()
				.find( 'body' )
				//.html( "<div class='iframe-wrapper' id='" + newID + "'><div class='wrapper'><main id='main' role='main' class='content'><div class='content-container'>" + markup + "</div></main></div></div>" );
				.append( markup )
				.find('.iframe-wrapper').attr("id", newID );

			$(this).resizable({
				handleSelector: ".id-kss-example-iframe-handle",
				resizeHeight: false,
				onDrag: function (e, $el, newWidth, newHeight, opt) {
					// set all example wrappers to the new width on drag
					$('.id-kss-example-wrapper').width( newWidth );

				}
			});

		});





  		//
  		// Theme (publication) Tabs for iFrame Examples
  		// sets up the event handlers and loads the last
  		// state from local storage for the tabbed controller
  		// that displays iframe examples of a block for
  		// a specific theme (defined in the Gruntfile)
  		//


	    $('.id-kss-example-tabs').each(function(){
	    	var tabs = $(this);

	    	tabs.children('nav').children('a').each(function(){
	    		var slug = $(this).attr("href").split('#')[1];
	    		$(this).on('click', function(e){
	    			e.preventDefault();

	    			//remove active class from previous and add to new button
	    			tabs.children('nav').children('a.active').removeClass("active");
	    			$(this).addClass('active');

	    			tabs.find('.id-kss-example-tab:visible').hide();
	    			tabs.find('.id-kss-example-tab#'+slug).show();

	    			kssStorage.setItem( 'activetheme', slug );
	    		});
	    	});

	    });


	    //check localstorage for a saved active theme
	    if( kssStorage.getItem( 'activetheme' ) ) {
	      $('.id-kss-example-tabs > nav a.'+kssStorage.getItem( 'activetheme' ) ).trigger('click');
	    } else {
	      $('.id-kss-example-tabs > nav').children('a').first().trigger("click");
	    }


	});
