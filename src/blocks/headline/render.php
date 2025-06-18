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

// Check if $content starts with <aside tag from older static version of this block.
if ( $is_static_block ) {
	// Use DOMDocument to parse the content.
	$dom = new DOMDocument();
	$dom->loadHTML( $content, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD );

	// Get the first heading element.
	$heading = $dom->getElementsByTagName( '*' )->item( 0 );

	// Initialize attributes array.
	if ( $heading ) {
		// Extract level from tag name (h2 -> 2).
		$attributes['level'] = (int) str_replace( 'h', '', $heading->tagName ); // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase

		// Extract inner HTML content, preserving any HTML tags inside the heading.
		$inner_html = '';
		// phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
		foreach ( $heading->childNodes as $child ) {
			$inner_html .= $dom->saveHTML( $child );
		}
		$attributes['content'] = $inner_html;

		// Get the heading classes.
		$classes_static = $heading->getAttribute( 'class' );
		// Strip out old `wp-block-editorial-headline` class.
		$classes_static = str_replace( 'wp-block-editorial-headline', '', $classes );
		// Merge $classes_static and $classes.
		$classes = array_merge( $classes_static, $classes );
		$classes = array_unique( $classes ); // Deduplicate any repeated class names.
	}
}

?>

<h<?php echo esc_attr( $attributes['level'] ); ?> <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => implode( ' ', $classes ) ) ) ); ?>>
	<?php echo wp_kses_post( $attributes['content'] ); ?>
</h<?php echo esc_attr( $attributes['level'] ); ?>>