<?php
/**
 * Aside Block Dynamic Template
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

// Set Publication slug.
$publication_slug = apply_filters( 'bu_blocks_publication_slug', 'bu-blocks' );
$classes[]        = $publication_slug . '-block-editorial-aside';

if ( $attributes['themeColor'] ) {
	$classes[] = 'has-' . $attributes['themeColor'] . '-background';
}


// Check if $content starts with <aside tag from older static version of this block.
if ( strpos( substr( $content, 0, 10 ), '<aside' ) ) {
	$doc = new DOMDocument();
	$doc->loadHTML( $content );

	// Get the first aside element.
	// Note: This assumes the first aside element is the one we want.
	$aside_node = $doc->getElementsByTagName( 'aside' )->item( 0 );



	ob_start();

	// Loop through each element inside the outer aside tag.
	foreach ( $aside_node->childNodes as $child_node ) { // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
		echo wp_kses_post( $doc->saveHTML( $child_node ) );
	}

	$aside_content = ob_get_clean();
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
<aside <?php echo wp_kses_data( get_block_wrapper_attributes( $block_wrapper_attributes ) ); ?>>
	<?php echo wp_kses_post( $aside_content ? $aside_content : $content ); ?>
</aside>
