<?php
/**
 * Drawer Block Dynamic Template
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

// Create an array to store classnames for the block.
$classes = array( 'js-bu-block-drawer' );

if ( $attributes['themeColor'] ) {
	$classes[] = 'has-' . $attributes['themeColor'] . '-background';
}

if ( $attributes['backgroundId'] ) {
	$classes[] = 'has-media';
}

if ( $attributes['hideTeaser'] ) {
	$classes[] = 'has-hide-teaser';
}

if ( $attributes['round'] ) {
	$classes[] = 'is-style-round';
}

if ( $attributes['size'] ) {
	$classes[] = $attributes['size'];
}

// Set Publication slug.
$publication_slug = apply_filters( 'bu_blocks_publication_slug', 'bu-blocks' );
$classes[]        = $publication_slug . '-block-editorial-drawer';


// Determine if this is a static or dynamic block.
$is_static_block = false;

// Multiple checks to identify static block.
if (
	( strpos( $content, 'wp-block-editorial-drawer-content' ) !== false ) ||
	( strpos( $content, 'wp-block-editorial-drawer' ) !== false )
) {
	$is_static_block = true;
}

// Check if $content starts with <aside tag from older static version of this block.
if ( $is_static_block ) {
	echo wp_kses_post( $content );
	return;
}

?>


<aside 
	<?php echo $attributes['anchor'] ? 'id="' . esc_attr( $attributes['anchor'] ) . '"' : ''; ?> 
	<?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => implode( ' ', $classes ) ) ) ); ?>
>	
	<div class="wp-block-editorial-drawer-teaser">
		<?php if ( $attributes['backgroundId'] ) : ?>
		<figure>
			<?php do_action( 'bu_blocks_background', $attributes, 'large' ); ?>
		</figure>
		<?php endif; ?>
		<?php if ( $attributes['hed'] ) : ?>
		<h2><?php echo wp_kses_post( $attributes['hed'] ); ?></h2>
		<?php endif; ?>
		<?php if ( $attributes['lede'] ) : ?>
		<p><?php echo wp_kses_post( $attributes['lede'] ); ?></p>
		<?php endif; ?>
		<?php if ( $attributes['button'] ) : ?>
		<a href="#" class="button wp-block-editorial-drawer-teaser-button js-bu-block-drawer-open">
			<?php echo wp_kses_post( $attributes['button'] ); ?>
		</a>
		<?php endif; ?>
	</div>
	<section class="wp-block-editorial-drawer-content js-bu-block-drawer-content">
		<div class="wp-block-editorial-drawer-wrapper">
			<?php echo wp_kses_post( $content ); ?>
			<div class="wp-block-editorial-drawer-close">
				<button class="wp-block-editorial-drawer-close-button js-bu-block-drawer-close">
					Close
				</button>
			</div>
		</div>
	</section>
</aside>
