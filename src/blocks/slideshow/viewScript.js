import Splide from '@splidejs/splide';

const buBlocksSlideshowSettings = {
	default: {
		autoplay: false,
		type: 'loop',
		trimSpace: false,
		updateOnMove: true,
		gap: 'var(--size-fluid-3)',
		drag: true,
		snap: true,
	},
};

const setupSplide = () => {
	const blocks = document.getElementsByClassName( 'wp-block-bu-blocks-slideshow' );

	Array.from( blocks ).map( ( block ) => {

		// Add Splide required classes.
		block.classList.add( 'splide' );
		const track = block.querySelector( '.wp-block-bu-blocks-slideshow-container' );
		if ( track ) {
			track.classList.add( 'splide__track' );
		}
		const list = block.querySelector( '.wp-block-bu-blocks-slideshow-list' );
		if ( list ) {
			list.classList.add( 'splide__list' );
			const slides = list.children;
			Array.from( slides ).map( ( slide ) => {
				slide.classList.add( 'splide__slide' );
			} );
		}

		const blockType = block.dataset.blockType;
		let settings = buBlocksSlideshowSettings[ blockType ];
		if ( ! settings ) {
			settings = buBlocksSlideshowSettings.default;
		}
		if ( settings ) {
			new Splide( block, settings ).mount();
		}
	} );
};

setupSplide();
