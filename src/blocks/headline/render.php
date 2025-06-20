<?php
/**
 * Heading Block Dynamic Template
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
$classes = array();

// Trim values of the classes array after filtering out empty values.
$classes = array_map( 'trim', array_filter( $classes ) );

// Set Publication slug.
$publication_slug = apply_filters( 'bu_blocks_publication_slug', 'bu-blocks' );
$classes[]        = $publication_slug . '-block-editorial-drawer';

// Determine if this is a static or dynamic block.
if ( strpos( $content, 'wp-block-editorial-headline' ) !== false ) {
	$is_static_block = true;
}

// If this is a static block, recover the attributes from the saved content.
// This is only needed if the site has older static blocks that were saved before the dynamic template was introduced.
if ( $is_static_block ) {
	$attributes = bu_blocks_headline_v1_get_attributes( $content, $attributes );
	$classes[]  = $attributes['classes_static_v1'];
	$classes    = array_unique( $classes ); // Deduplicate any repeated class names.
}

// Create the block wrapper attributes.
$block_wrapper_attributes = array(
	'class' => implode( ' ', $classes ),
);
// Add ID attribute if anchor is set.
if ( ! empty( $attributes['anchor'] ) ) {
	$block_wrapper_attributes['id'] = esc_attr( $attributes['anchor'] );
}
?>
<h<?php echo esc_attr( $attributes['level'] ); ?> 
	<?php echo wp_kses_data( get_block_wrapper_attributes( $block_wrapper_attributes ) ); ?>
><?php echo wp_kses_post( $attributes['content'] ); ?></h<?php echo esc_attr( $attributes['level'] ); ?>>