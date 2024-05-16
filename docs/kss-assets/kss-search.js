( function ( window, document ) {
	'use strict';

	// Set the configuration values on object creation.

	var KssSearch = function ( config ) {
		this.inputID = config.inputID || 'kss-search-field';
		this.searchButtonID = config.searchButtonID || 'kss-search-button';
		this.searchAreaClass = config.searchAreaClass || '.id-homepage-nav';
		this.init();
	};

	var markInstance;

	// Initialize
	KssSearch.prototype.init = function () {
		var self = this;
		var searchField = document.getElementById( this.inputID );
		var searchButton = document.getElementById( this.searchButtonID );

		if ( ! searchField ) {
			return false;
		}

		markInstance = new Mark( this.searchAreaClass );

		// setup an event listener on the search field
		searchField.addEventListener( 'input', function ( event ) {
			console.log( event.target.value );
			self.mark( event.target.value );
		} );
		searchField.addEventListener( 'change', function ( event ) {
			console.log( event.target.value );
			self.mark( event.target.value );
		} );

		searchButton.addEventListener( 'click', function ( event ) {
			console.log( event.target.value );
			event.preventDefault();
			self.mark( searchField.value );
		} );
	};
	KssSearch.prototype.mark = function ( text ) {
		markInstance.unmark( {
			done: function () {
				markInstance.mark( text );
			},
		} );
	};

	// Export to DOM global space.
	window.KssSearch = KssSearch;
} )( window, document );
