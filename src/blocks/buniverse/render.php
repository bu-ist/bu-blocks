<?php
/**
 * BUniverse Block Dynamic Template
 *
 * @todo Deprecate the `wp-prepress-component-caption` class from this block.
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

if ( $attributes['id'] ) {
	// Build out the full url.
	$url  = '//www.bu.edu/buniverse/interface/embed/embed.html?v=' . $attributes['id'] . '&jsapi=1';
	$url .= 1 !== $attributes['controls'] ? '&controls=0' : '';
	$url .= 1 === $attributes['autoplay'] ? '&autoplay=true' : '';
	$url .= $attributes['start'] ? '&start=' . $attributes['start'] : '';
}
?>


<figure 
	<?php echo esc_attr( $attributes['anchor'] ? 'id="' . $attributes['anchor'] . '"' : '' ); ?> 
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
>
	<div class="wp-block-global-buniverse-wrapper">
		<iframe
			src="<?php echo esc_url( $url ); ?>"
			frameBorder="0"
			allow="autoplay; fullscreen"
		></iframe>
	</div>
	<?php if ( $attributes['caption'] ) : ?>
		<figcaption>
		<p 
			class="wp-block-global-buniverse-caption bu-blocks-component-caption wp-prepress-component-caption"
		><?php echo wp_kses_post( $attributes['caption'] ); ?></p>
		</figcaption>
	<?php endif; ?>
</figure>
