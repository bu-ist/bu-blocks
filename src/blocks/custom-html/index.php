<?php
/**
 * Server-side rendering of the `editorial/custom-html` block.
 *
 * @package BU_Blocks
 */

namespace BU\Plugins\BU_Blocks\Blocks\CustomHTML;

add_action( 'init', __NAMESPACE__ . '\\register_block' );
add_action( 'init', __NAMESPACE__ . '\\register_meta' );

/**
 * Registers the bu_custom_html_meta box used to store custom HTML associated
 * with an article.
 *
 * @return void
 */
function register_meta() {
    \register_meta( 'post', 'bu_custom_html_meta', array(
		'object_subtype' => 'bu-article',
        'show_in_rest' => true,
        'single'       => true,
        'type'         => 'string',
    ) );
}


/**
 * Registers the `editorial/custom-html` block on the server.
 */
function register_block() {
	register_block_type(
		'editorial/custom-html',
		array(
			'attributes'      => array(
			),
			'render_callback' => __NAMESPACE__ . '\\render_block',
		)
	);
}

/**
 * Renders the `editorial/custom-html` block on the front-end as part of
 * article content.
 *
 * @return string Returns the post content with latest posts added.
 */
function render_block() {
	$html = get_post_meta( get_the_ID(), 'bu_custom_html_meta', true );

	// @todo - run through kses of some kind?
	return $html;
}
