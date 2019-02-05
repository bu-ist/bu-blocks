<?php
/**
 * Server-side rendering of the `edition/featured-story` block.
 *
 * @package BU_Blocks
 */

namespace BU\Plugins\BU_Blocks\Blocks\FeaturedStory;

add_action( 'init', __NAMESPACE__ . '\\register_block' );

/**
 * Build a list of class names for the featured story block based
 * on the provided attributes.
 *
 * @param array $attributes A list of block attributes.
 * @return string A space separated string of class names.
 */
function get_block_classes( $attributes ) {
	// Combine class names from the various available sources.
	$classes = implode(
		' ',
		array(
			'wp-block-edition-featuredstory',
			$attributes['className'],
		)
	);
	$classes = trim( $classes );
	$classes = explode( ' ', $classes );

	// Add the publication-specific class if the post has a publication.
	if ( function_exists( 'bu_prepress_get_publication' ) ) {
		$slug = bu_prepress_get_publication_slug( $attributes['postChooserPostID'] );

		if ( $slug ) {
			$classes[] = $slug . '-block-featuredstory';
		}
	}

	// Turn classes into a space delimited string before returning.
	$classes = implode( ' ', $classes );

	return $classes;
}

/**
 * Renders the `edition/featured-story` block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Featured story block markup using data from the selected post.
 */
function render_block( $attributes ) {
	$defaults = array(
		'dek'                     => '',
		'className'               => '',
		'hed'                     => '',
		'postChooserPostID'       => '',
		'postChooserPostImageURL' => '',
		'postChooserPostImageAlt' => '',
		'primaryTerm'             => '',
	);

	$attributes = wp_parse_args( $attributes, $defaults );

	// Retrieve the list of posts used to render this block.
	$post = get_post( $attributes['postChooserPostID'] );

	// Render nothing if no posts are available.
	if ( ! $post ) {
		return '';
	}

	// Retrieve the classes to attach to the block wrapper.
	$classes = get_block_classes( $attributes );

	ob_start();
	?>
	<div class="<?php echo esc_attr( $classes ); ?>">

		<div class="wp-block-edition-featured-story-media">
			<?php if ( $attributes['postChooserPostImageURL'] ) { ?>
				<img
					src="<?php echo esc_url( $attributes['postChooserPostImageURL'] ); ?>"
					alt="<?php echo esc_attr( $attributes['postChooserPostImageAlt'] ); ?>"
				/>
			<?php } ?>
		</div>

		<div class="wp-block-edition-featured-story-content">

			<?php if ( $attributes['primaryTerm'] ) { ?>
				<span class="primary-term"><?php echo esc_html( $attributes['primaryTerm'] ); ?></span>
			<?php } ?>

			<?php if ( $attributes['dek'] ) { ?>
				<h4 class="dek"><?php echo wp_kses_post( $attributes['dek'] ); ?></h4>
			<?php } ?>

			<h1 class="hed">
				<a href="<?php echo esc_html( get_permalink( $post->ID ) ); ?>"><?php echo wp_kses_post( $attributes['hed'] ); ?></a>
			</h1>

			<span className="comment-count"><?php echo absint( $post->comment_count ); ?></span>

			<span className="date"><?php echo esc_html( get_the_date( 'F j, Y', $post ) ); ?></span>
		</div>
	</div>
	<?php
	$html = ob_get_clean();

	return $html;
}

/**
 * Registers the `edition/featured-story` block on server.
 */
function register_block() {
	register_block_type(
		'edition/featured-story',
		array(
			'attributes'      => array(
				'dek'                     => array(
					'type'    => 'string',
					'default' => '',
				),
				'className'               => array(
					'type'    => 'string',
					'default' => '',
				),
				'hed'                     => array(
					'type'    => 'string',
					'default' => '',
				),
				'postChooserPostID'       => array(
					'type' => 'number',
				),
				'postChooserPostImageURL' => array(
					'type'    => 'string',
					'default' => '',
				),
				'postChooserPostImageAlt' => array(
					'type'    => 'string',
					'default' => '',
				),
				'primaryTerm'             => array(
					'type'    => 'string',
					'default' => '',
				),
			),
			'render_callback' => __NAMESPACE__ . '\\render_block',
		)
	);
}
