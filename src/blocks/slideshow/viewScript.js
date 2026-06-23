import Splide from '@splidejs/splide';

const buBlocksSlideshowSettings = {
	default: {
		// autoplay: false,
		// type: 'loop',
		// trimSpace: false,
		// updateOnMove: true,
		gap: '5em',
		//padding: '20%',
		// drag: true,
		// snap: true,
		perPage: 1,
		// perMove: 1,
		// width: '100%',
		//height: 'var(--bu-blocks-slideshow-height, 400px)',
	},
};

const setupSplide = () => {
	const blocks = document.getElementsByClassName( 'wp-block-bu-blocks-slideshow' );

	Array.from( blocks ).map( ( block ) => {
		// Add Splide required classes.
		block.classList.add( 'splide' );
		const track = block.querySelector( '.wp-block-bu-blocks-slideshow__container' );
		if ( track ) {
			track.classList.add( 'splide__track' );
		}
		const list = block.querySelector( '.wp-block-bu-blocks-slideshow__list' );
		if ( list ) {
			list.classList.add( 'splide__list' );

			const slides = list.children;
			Array.from( slides ).map( ( slide ) => {
				slide.classList.add( 'splide__slide' );
				console.log( slide );
			} );
		}
		console.log( block.dataset.splideSettings );
		const splideSettings = JSON.parse( block.dataset.splideSettings );
		let settings = buBlocksSlideshowSettings.default;
		if ( splideSettings ) {
			settings = {
				...settings,
				...splideSettings,
			};
		}
		if ( settings ) {
			console.log( settings );
			new Splide( block, settings ).mount();
		}
	} );
};

setupSplide();
