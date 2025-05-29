<?php
/**
 * Collapsible Control Block Dynamic Template
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

// Check if $content starts with <p tag from older static version of this block.
if ( empty( $attributes['text'] ) && strpos( substr( $content, 0, 42 ), '<p class="wp-block-bu-collapsible-control' ) ) {
	$attributes = bu_blocks_collapsible_control_v1_get_attributes( $content, $attributes );
}
?>
<p <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<button class="bu-collapsible-control-toggle js-bu-collapsible-control-target-<?php echo esc_attr( $attributes['target'] ); ?>">
		<?php echo wp_kses_data( $attributes['text'] ); ?>
	</button>
</p>
