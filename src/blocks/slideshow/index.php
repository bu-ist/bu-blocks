<?php
/**
 * Server-side Registration of the `bu/slideshow` block.
 *
 * @package BU_Blocks
 */

namespace BU\Plugins\BU_Blocks\Blocks\Slideshow;

add_action( 'init', __NAMESPACE__ . '\\register_block' );


/**
 * Renders the `bu/slideshow` block on server.
 *
 * @param array $attributes The block attributes.
 * @param string $content The block content.
 *
 * @return string Returns the post content with latest posts added.
 */
function render_block( $attributes, $content ) {
    // Path to render.php for this block.
    $render_path = plugin_dir_path( __FILE__ ) . 'render.php';

	ob_start();

    // Checks the theme for a render template override.
    $block_render_theme_override = get_stylesheet_directory() . '/block-render/bu-blocks/slideshow/render.php';

    if ( file_exists( $block_render_theme_override ) ) {
        include $block_render_theme_override;
    } else {
        include $render_path;
    }

	$html = ob_get_clean();

	return $html;
}

/**
 * Registers the `bu-blocks/slideshow` block on server.
 */
function register_block() {

	register_block_type(
		'bu-blocks/slideshow',
		array(
			'api_version' => 2,
			'attributes'  => array(
				'aspectRatio'    => array(
					'type'      => 'string',
					'default'   => '16:9',
				),
				'crop'    => array(
					'type'      => 'boolean',
					'default'   => false,
				),
				'showNextUp'    => array(
					'type'      => 'boolean',
					'default'   => false,
				),
				'height'    => array(
					'type'      => 'string',
					'default'   => '500',
				),
			),
			'render_callback' => __NAMESPACE__ . '\\render_block',
		)
	);
}
