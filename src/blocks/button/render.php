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

// Set Publication slug.
$publication_slug = apply_filters( 'bu_blocks_publication_slug', 'bu-blocks' );
$classes[]        = $publication_slug . '-block-button';

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
// If this is a static block, recover the attributes from the saved content.
// This is only needed if the site has older static blocks that were saved before the dynamic template was introduced.
if ( empty( $attributes['url'] ) && empty( $attributes['text'] ) && strpos( $content, 'wp-block-button wp-block-bu-button' ) ) {
	$attributes = bu_blocks_button_v2_get_attributes( $content, $attributes );
	$classes[]  = $attributes['classes_static_v2']; // Add old static classes.
	$classes[]  = 'wp-block-button'; // Add old incorrect class. This should be removed as CSS is fixed.
	$classes    = array_unique( $classes ); // Deduplicate any repeated class names.
}

// Add classes to the block attributes.
$block_wrapper_attributes = array(
	'class' => implode( ' ', $classes ),
);

// Add ID attribute if anchor is set.
if ( ! empty( $attributes['anchor'] ) ) {
	$block_wrapper_attributes['id'] = esc_attr( $attributes['anchor'] );
}

// Build rel attribute.
$rel = '';
if ( ! empty( $attributes['noFollow'] ) && true === $attributes['noFollow'] ) {
	$rel = $rel . ' nofollow';
}
if ( ! empty( $attributes['urlTarget'] ) && true === $attributes['urlTarget'] ) {
	$rel = $rel . ' noopener';
}

?>
<a 
	<?php echo wp_kses_data( get_block_wrapper_attributes( $block_wrapper_attributes ) ); ?> 
	href="<?php echo esc_url( $attributes['url'] ); ?>" 
	<?php echo ( ! empty( $attributes['urlTarget'] ) && true === $attributes['urlTarget'] ) ? ' target="_blank" ' : ''; ?>
	<?php echo ( ! empty( $rel ) ) ? ' rel="' . esc_attr( trim( $rel ) ) . '" ' : ''; ?>
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

