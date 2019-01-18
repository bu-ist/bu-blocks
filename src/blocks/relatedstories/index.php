<?php
/**
 * Server-side rendering of the `editorial/relatedstories` block.
 *
 * @package BU_Blocks
 */

namespace BU\Plugins\BU_Blocks\Blocks\RelatedStories;

add_action( 'init', __NAMESPACE__ . '\\register_block' );

/**
 * Build a list of class names for the related stories block based
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
			'wp-block-editorial-relatedstories',
			$attributes['className'],
			$attributes['cardCountClass'],
		)
	);
	$classes = trim( $classes );

	// Provide alignment class information.
	$aligns = array(
		'left',
		'right',
	);
	if ( in_array( $attributes['align'], $aligns, true ) && ! strpos( $classes, 'is-style-card' ) ) {
		$classes .= ' align' . $attributes['align'];
	}

	// Append card count as a class name.
	if ( strpos( $classes, 'is-style-card' ) && 2 === $attributes['cardCount'] ) {
		$classes .= ' has-two';
	} elseif ( strpos( $classes, 'is-style-card' ) && 3 === $attributes['cardCount'] ) {
		$classes .= ' has-three';
	}

	return $classes;
}

/**
 * Retrieve a list of manually curated articles or a list of
 * dynamically provided articles via YARPP.
 *
 * @param bool  $manual True if articles are manually selected. False if not.
 * @param array $posts  A list of post IDs to lookup, if provided.
 * @return array A list of found articles.
 */
function get_block_posts( $manual, $posts = array() ) {
	// If related posts have been manually selected, we do a direct query
	// with those post IDs. Otherwise, use YARPP.
	if ( $manual ) {
		$posts = get_posts(
			array(
				'post__in'  => $posts,
				'post_type' => 'bu-article',
			)
		);
	} elseif ( function_exists( 'yarpp_get_related' ) ) {
		$posts = \yarpp_get_related( array(), get_the_ID() );
	} else {
		$posts = array(); // There are no related posts to retrieve.
	}

	return $posts;
}

/**
 * Renders the `core/latest-posts` block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the post content with latest posts added.
 */
function render_block( $attributes ) {
	$defaults   = array(
		'align'          => '',
		'className'      => '',
		'cardCountClass' => '',
		'includePosts'   => array(),
		'relatedManual'  => false,
	);
	$attributes = wp_parse_args( $attributes, $defaults );

	/**
	 * Filters the attributes used when rendering the related stories block.
	 *
	 * @param array $attributes Attributes provided for block rendering.
	 */
	$attributes = apply_filters( 'bu_prepress_related_stories_block_attributes', $attributes );

	// Retrieve the list of posts used to render this block.
	$posts = get_block_posts( $attributes['relatedManual'], $attributes['includePosts'] );

	// Render nothing if no posts are available.
	if ( empty( $posts ) ) {
		return '';
	}

	// Retrieve the classes to attach to the block wrapper.
	$classes = get_block_classes( $attributes );

	ob_start();
	?>
	<aside class="<?php echo esc_attr( $classes ); ?>">
		<ul class="wp-block-editorial-relatedstories-list">
			<?php

			foreach ( $posts as $post ) {
				?>
				<li class="wp-block-editorial-relatedstories-list-item">
					<article class="wp-block-editorial-relatedstories-article">
						<?php
						// If related stories are set to card format, an image is displayed.
						if ( strpos( $classes, 'is-style-card' ) ) {
							if ( has_post_thumbnail( $post ) ) {
								?>
								<figure class="wp-block-editorial-relatedstories-article-image">
									<?php echo get_the_post_thumbnail( $post ); ?>
								</figure>
								<?php
							}

							?>
							<div class="wp-block-editorial-relatedstories-article-content">
							<?php
						}

						$category = apply_filters( 'bu_blocks_related_stories_article_category', false, $post );

						if ( $category ) {
							?>
							<p class="wp-block-editorial-relatedstories-article-category"><span><?php echo esc_html( $category ); ?></span></p>
							<?php
						}

						?>
							<h4 class="wp-block-editorial-relatedstories-article-title"><a href="<?php the_permalink( $post ); ?>" class="wp-block-editorial-relatedstories-article-title-link"><?php echo esc_html( get_the_title( $post ) ); ?></a></h4>
							<p class="wp-block-editorial-relatedstories-article-date"><?php echo esc_html( get_the_date( '', $post ) ); ?></p>
						<?php

						do_action( 'bu_blocks_related_stories_close_article', $post, get_the_ID() );

						if ( strpos( $classes, 'is-style-card' ) ) {
							?>
							</div>
							<?php
						}
						?>
					</article>
				</li>
				<?php
				wp_reset_postdata();
			}

			?>
		</ul>
	</aside>
	<?php
	$html = ob_get_clean();

	return $html;
}

/**
 * Registers the `core/latest-posts` block on server.
 */
function register_block() {
	register_block_type(
		'editorial/relatedstories',
		array(
			'attributes'      => array(
				'align'         => array(
					'type'    => 'string',
					'default' => 'right',
				),
				'cardCount'     => array(
					'type'    => 'number',
					'default' => 2,
				),
				'className'     => array(
					'type'    => 'string',
					'default' => '',
				),
				'relatedManual' => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'includedPosts' => array(
					'type'    => 'array',
					'default' => array(),
				),
			),
			'render_callback' => __NAMESPACE__ . '\\render_block',
		)
	);
}
