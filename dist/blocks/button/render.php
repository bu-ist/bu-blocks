<?php
/**
 * Button Block Dynamic Template
 * 
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

//var_dump($attributes);

// @todo: move this into a template override in each child theme?
// Check if $content starts with <p><a tag from older static version of this block.
if ( empty( $attributes['url'] ) && empty( $attributes['text'] ) && strpos( substr( $content, 0, 10 ) , '<p><a') ) {
	$attributes = bu_blocks_button_v2_get_attributes( $content, $attributes );
	$classes = $attributes['classes_old'];
}
?>
<a 
	<?php echo wp_kses_data( get_block_wrapper_attributes( [ 'class' => $classes ] ) ); ?> 
	href="<?php echo $attributes['url']; ?>" 
><?php echo $attributes['text']; ?></a>

