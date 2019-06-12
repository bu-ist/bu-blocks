<?php
/**
 * Server-side rendering of the `editorial/custom-html` block.
 *
 * @package BU_Blocks
 */

namespace BU\Plugins\BU_Blocks\Blocks\CustomHTML;

add_action( 'init', __NAMESPACE__ . '\\register_block' );
add_action( 'rest_api_init', __NAMESPACE__ . '\register_route' );

/**
 * Registers the `editorial/custom-html` block on the server.
 */
function register_block() {
	register_block_type(
		'editorial/custom-html',
		array(
			'attributes'      => apply_filters( 'bu_blocks_custom_html_attributes', array() ),
			'render_callback' => __NAMESPACE__ . '\\render_block',
		)
	);
}

/**
 * Renders the `editorial/custom-html` block on the front-end as part of
 * article content.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the post content with latest posts added.
 */
function render_block( $attributes ) {
	$html = get_post_meta( get_the_ID(), '_bu_custom_html_block_' . sanitize_key( $attributes['customBlockID'] ), true );

	// @todo - run through kses of some kind?
	return apply_filters( 'bu_blocks_custom_html', $html, $attributes );
}

/**
 * Register the REST API route used to retrieve and store custom HTML meta
 * block information.
 */
function register_route() {
	register_rest_route(
		'bu-blocks/v1',
		'customhtml',
		array(
			'methods'  => \WP_REST_Server::ALLMETHODS,
			'callback' => __NAMESPACE__ . '\rest_response',
		)
	);
}

/**
 * Handle the response for GET and POST requests to the custom HTML endpoint.
 *
 * @param \WP_Rest_Request $request The incoming REST API request object.
 * @return string HTML markup associated with a block.
 */
function rest_response( $request ) {
	$method = $request->get_method();

	if ( 'GET' === $method ) {
		$post_id  = absint( $request->get_param( 'post_id' ) );
		$block_id = sanitize_key( $request->get_param( 'custom_block_id' ) );

		$html = get_post_meta( $post_id, '_bu_custom_html_block_' . $block_id, true );
	} elseif ( 'POST' === $method ) {
		$post_id  = absint( $request->get_param( 'post_id' ) );
		$block_id = sanitize_key( $request->get_param( 'custom_block_id' ) );
		$html     = $request->get_param( 'html' );

		update_post_meta( $post_id, '_bu_custom_html_block_' . $block_id, $html );
	} else {
		return new \WP_Error( 'invalid_method', 'The requested method is not supported', array( 'status' => 405 ) );
	}

	return $html;
}
