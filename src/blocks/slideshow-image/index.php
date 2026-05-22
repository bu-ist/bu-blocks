<?php
/**
 * Server-side Registration of the `bu/slideshow-image` block.
 *
 * @package BU_Blocks
 */

namespace BU\Plugins\BU_Blocks\Blocks\SlideshowImage;

add_action( 'init', __NAMESPACE__ . '\\register_block' );


/**
 * Renders the `bu/slideshow-image` block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the post content with latest posts added.
 */
function render_block( $attributes ) {
    // Path to render.php for this block.
    $render_path = plugin_dir_path( __FILE__ ) . 'render.php';

	ob_start();

    // Checks the theme for a render template override.
    $block_render_theme_override = get_stylesheet_directory() . '/block-render/bu-blocks/slideshow-image/render.php';

    if ( file_exists( $block_render_theme_override ) ) {
        include $block_render_theme_override;
    } else {
        include $render_path;
    }

	$html = ob_get_clean();

	return $html;
}

/**
 * Registers the `bu-blocks/slideshow-image` block on server.
 */
function register_block() {
	$shared_args = array(
		'type'    => 'string',
		'default' => '',
	);

	register_block_type(
		'bu-blocks/slideshow-image',
		array(
            'attributes'      => array(
                'imageId' => array(
                    'type'    => 'number',
                ),
            ),
			'render_callback' => __NAMESPACE__ . '\\render_block',
		)
	);
}
