<?php
/**
 * Adds a REST API endpoint for the YARPP plugin.
 *
 * @link       www.bu.edu/interactive-design/
 * @since      0.1.0
 *
 * @package    BU_Blocks
 * @subpackage BU_Blocks/src/includes
 */

namespace BU\Plugins\BU_Blocks\YARPPEndpoint;

add_action( 'rest_api_init', __NAMESPACE__ . '\register_route' );

/**
 * Register the REST API route used to provide related posts to the
 * related stories block.
 */
function register_route() {
	register_rest_route(
		'bu-blocks/v1',
		'yarpprelated',
		array(
			'methods'  => 'GET',
			'callback' => __NAMESPACE__ . '\rest_response',
		)
	);
}

/**
 * Provide a list of related posts from YARPP if the plugin
 * is enabled.
 *
 * @param \WP_Request $request The incoming REST API request object.
 * @return array A list of post IDs.
 */
function rest_response( $request ) {
	if ( function_exists( 'yarpp_get_related' ) ) {
		$post_id = $request->get_param( 'post_id' );
		$posts   = yarpp_get_related( array(), $post_id );
		$posts   = wp_list_pluck( $posts, 'ID' );
	} else {
		return new \WP_Error( 'yarpp_disabled', 'The YARPP plugin is not available', array( 'status' => 501 ) );
	}

	return $posts;
}
