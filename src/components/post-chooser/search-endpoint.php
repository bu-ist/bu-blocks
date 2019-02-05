<?php
/**
 * Adds a REST API endpoint to provide a posts matching the provided
 * search term and post types.
 *
 * The data returned matches the format expected by blocks using the
 * Post Chooser component.
 *
 * @link       www.bu.edu/interactive-design/
 * @since      0.1.0
 *
 * @package    BU_Blocks
 * @subpackage BU_Blocks/src/components/post-chooser
 */

namespace BU\Plugins\BU_Blocks\Post_Chooser\Search_Endpoint;

add_action( 'rest_api_init', __NAMESPACE__ . '\register_route' );

/**
 * Register a REST API route for finding posts with the Post Chooser.
 */
function register_route() {
	register_rest_route(
		'bu-blocks/v1',
		'search',
		array(
			'methods'  => 'GET',
			'callback' => __NAMESPACE__ . '\rest_response',
		)
	);
}

/**
 * Return posts based on the provided search term.
 *
 * @param \WP_Request $request The incoming REST API request object.
 * @return array Posts found using the provided parameters.
 */
function rest_response( $request ) {
	$post_types = $request->get_param( 'post_type' );
	$search     = $request->get_param( 'search' );

	// Provide at least an empty array if no post type is requested.
	if ( ! $post_types ) {
		$post_types = array();
	}

	$query_args = array(
		'post_type'   => (array) $post_types,
		's'           => $search,
		'post_status' => array(
			'publish',
			'pending',
			'draft',
			'future',
		),
	);

	$query = new \WP_Query();
	$query->query( $query_args );

	// Assume no posts match the criteria by default.
	$posts = array();

	if ( $query->have_posts() ) {
		while ( $query->have_posts() ) {
			$query->the_post();

			$featured_image = ( ! has_post_thumbnail() ) ? false : array(
				'id'  => get_post_thumbnail_id(),
				'url' => get_the_post_thumbnail_url( null, 'responsive_profile' ),
				'alt' => get_post_meta( get_post_thumbnail_id(), '_wp_attachment_image_alt', true ),
			);

			$post = array(
				'id'             => get_the_ID(),
				'title'          => get_the_title(),
				'date_gmt'       => get_the_date( '' ),
				'link'           => get_the_permalink(),
				'status'         => get_post_status(),
				'comment_count'  => wp_count_comments( get_the_ID() )->approved,
				'content'        => get_the_content(),
				'featured_image' => $featured_image,
			);

			$posts[] = $post;
		}
	}
	wp_reset_query();

	return $posts;
}
