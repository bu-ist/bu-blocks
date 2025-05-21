<?php
/**
 * Button Block Dynamic Template
 *
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package    bu-blocks
 */

// Create an array to store classnames for the block.
$classes = array();

if ( $attributes['icon'] ) {
	$clasess[] = 'has-icon';
	$classes[] = 'icon-navigateright'; // Old classname for icon in Foundation < v5.
	$classes[] = $attributes['icon']; // Icon Alignment value.
}

if ( $attributes['themeColor'] ) {
	$classes[] = 'has-' . $attributes['themeColor'] . '-theme';
}

// @todo: move this into a template override in each child theme?
// Check if $content contains 'wp-block-button wp-block-bu-button' string
// from older static version of this block.
if ( empty( $attributes['url'] ) && empty( $attributes['text'] ) && strpos( $content, 'wp-block-button wp-block-bu-button' ) ) {
	$attributes = bu_blocks_button_v2_get_attributes( $content, $attributes );
	$classes[]  = $attributes['classes_old'];
	$classes[]  = 'wp-block-button'; // Add old incorrect class. This should be removed as CSS is fixed.
	$classes    = array_unique( $classes ); // Deduplicate any repeated class names.
}
?>
<a 
	<?php echo esc_attr( $attributes['anchor'] ? 'id="' . $attributes['anchor'] . '"' : '' ); ?>
	<?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => implode( ' ', $classes ) ) ) ); ?> 
	href="<?php echo esc_url( $attributes['url'] ); ?>" 
>
	<span class="wp-block-bu-button-text">
	<?php
		$button_text_html_allowed = array(
			'strong' => array(),
			'bold'   => array(),
			'em'     => array(),
			'i'      => array(),
		);
		echo wp_kses( $attributes['text'], $button_text_html_allowed );
		?>
	</span>
</a>

