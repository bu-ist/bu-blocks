<?php
/**
 * Listicle Block Dynamic Template
 *
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package bu-blocks
 */

// Set defaults for attributes.
$defaults = array(
	'hed'                => '',
	'dek'                => '',
	'content'            => '',
	'aside'              => '',
	'number'             => '',
	'related'            => '',
	'credit'             => '',
	'className'          => '',
	'divider'            => true,
	'backgroundId'       => null,
	'backgroundType'     => '',
	'backgroundUrl'      => '',
	'backgroundOpacity'  => 100,
	'backgroundAlt'      => '',
	'backgroundCaption'  => '',
	'backgroundAutoplay' => false,
	'shareToolsDisabled' => false,
);

$attributes = wp_parse_args( $attributes, $defaults );

// Check if $content contains 'wp-block-editorial-listicle' string from older static version of this block.
// If this is a static block, recover the attributes from the saved content.
if ( empty( $attributes['hed'] ) && strpos( $content, 'wp-block-editorial-listicle' ) !== false ) {
	$attributes = bu_blocks_listicle_v1_get_attributes( $content, $attributes );
}

// Build classes array.
$classes = array();

// Add base class.
if ( ! empty( $attributes['className'] ) ) {
	$classes[] = $attributes['className'];
}

// Add conditional classes.
if ( ! empty( $attributes['number'] ) ) {
	$classes[] = 'has-number';
}

if ( ! empty( $attributes['aside'] ) && $attributes['aside'] !== '<br>' ) {
	$classes[] = 'has-sidebar';
}

if ( ! empty( $attributes['backgroundUrl'] ) ) {
	$classes[] = 'has-media';
}

if ( ! empty( $attributes['backgroundAutoplay'] ) ) {
	$classes[] = 'has-video-as-loop';
}

if ( empty( $attributes['divider'] ) ) {
	$classes[] = 'has-no-bottom-divider';
}

// Trim values of the classes array after filtering out empty values.
$classes = array_map( 'trim', array_filter( $classes ) );

// Create the block wrapper attributes.
$block_wrapper_attributes = array(
	'class' => implode( ' ', $classes ),
);

// Determine if related links should be shown.
$has_related_links = false;
if ( ! empty( $attributes['related'] ) && $attributes['related'] !== '<li></li>' && trim( wp_strip_all_tags( $attributes['related'] ) ) !== '' ) {
	$has_related_links = true;
}

?>
<section <?php echo wp_kses_data( get_block_wrapper_attributes( $block_wrapper_attributes ) ); ?>>
	<article class="wp-block-editorial-listicle-article">
		<?php if ( ! empty( $attributes['backgroundUrl'] ) || ! empty( $attributes['credit'] ) ) : ?>
			<figure class="wp-block-editorial-listicle-figure">
				<?php if ( ! empty( $attributes['backgroundUrl'] ) ) : ?>
					<?php do_action( 'bu_blocks_background', $attributes, 'large' ); ?>
				<?php endif; ?>
				<?php if ( ! empty( $attributes['credit'] ) ) : ?>
					<figcaption class="wp-caption-text wp-block-editorial-listicle-caption wp-prepress-component-caption">
						<?php echo wp_kses_post( $attributes['credit'] ); ?>
					</figcaption>
				<?php endif; ?>
			</figure>
		<?php endif; ?>
		<header class="wp-block-editorial-listicle-header">
			<?php if ( ! empty( $attributes['number'] ) ) : ?>
				<h2 class="wp-block-editorial-listicle-header-number">
					<?php echo wp_kses_post( $attributes['number'] ); ?>
				</h2>
			<?php endif; ?>
			<div class="wp-block-editorial-listicle-header-content">
				<?php if ( ! empty( $attributes['hed'] ) ) : ?>
					<h3 class="wp-block-editorial-listicle-header-content-hed">
						<?php echo wp_kses_post( $attributes['hed'] ); ?>
					</h3>
				<?php endif; ?>
				<?php if ( ! empty( $attributes['dek'] ) ) : ?>
					<h4 class="wp-block-editorial-listicle-header-content-dek">
						<?php echo wp_kses_post( $attributes['dek'] ); ?>
					</h4>
				<?php endif; ?>
			</div>
		</header>
		<section class="wp-block-editorial-listicle-section">
			<?php if ( ! empty( $attributes['content'] ) ) : ?>
				<div class="wp-block-editorial-listicle-section-content">
					<?php echo wp_kses_post( $attributes['content'] ); ?>
				</div>
			<?php endif; ?>
			<div class="wp-block-editorial-listicle-section-meta">
				<?php if ( ! empty( $attributes['aside'] ) && $attributes['aside'] !== '<br>' ) : ?>
					<aside class="wp-block-editorial-listicle-section-aside">
						<?php echo wp_kses_post( $attributes['aside'] ); ?>
					</aside>
				<?php endif; ?>
				<?php if ( empty( $attributes['shareToolsDisabled'] ) ) : ?>
					<p class="wp-blocks-components-share-tools">
						<a href="#" class="icon-action"><?php esc_html_e( 'Share this', 'bu-blocks' ); ?></a>
					</p>
				<?php endif; ?>
			</div>
		</section>
		<?php if ( $has_related_links ) : ?>
			<footer class="wp-block-editorial-listicle-footer">
				<h3 class="wp-block-editorial-listicle-footer-title">
					<?php esc_html_e( 'Related Stories', 'bu-blocks' ); ?>
				</h3>
				<ul class="wp-block-editorial-listicle-footer-list">
					<?php echo wp_kses_post( $attributes['related'] ); ?>
				</ul>
			</footer>
		<?php endif; ?>
	</article>
</section>

