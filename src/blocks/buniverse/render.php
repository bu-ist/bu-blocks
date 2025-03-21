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
 */

if ( $attributes['id'] ) {
	// Build out the full url.
	$url = "//www.bu.edu/buniverse/interface/embed/embed.html?v=" . $attributes['id'] . "&jsapi=1";
	$url .= $attributes['controls'] !== 1 ? '&controls=0' : '';
	$url .= $attributes['autoplay'] === 1 ? '&autoplay=true' : '';
	$url .= $attributes['start'] ? "&start=" . $attributes['start'] : '';
}
?>


<figure 
	<?php echo $attributes['anchor'] ? 'id="' . $attributes['anchor'] . '"' : '' ; ?> 
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
>
	<div class="wp-block-global-buniverse-wrapper">
		<iframe
			src="<?php echo $url; ?>"
			frameBorder="0"
			allow="autoplay; fullscreen"
		></iframe>
	</div>
	<?php if ( $attributes['caption'] ) : ?>
		<figcaption>
		<p 
			class="wp-block-global-buniverse-caption bu-blocks-component-caption wp-prepress-component-caption"
		><?php echo $attributes['caption']; ?></p>
		</figcaption>
	<?php endif; ?>
</figure>
