<?php
/**
 * Headline Block Deprecated Version Functions
 *
 * PHP functions for use with old versions of the block in the render.php template.
 * This file is used to recover the attributes from the saved content
 * so that the block can be rendered via the dynamic PHP template for the block
 * instead of just echoing out the $content string.
 * The version number matches the deprecated versions of the block.
 *
 * @package    bu-blocks
 */

/**
 * BU Headline Block v1 Get Attributes
 *
 * For older static blocks when switching to a php template (dynamic block) $attributes doesn't
 * return the saved attributes since they were saved in the markup such as in the content string.
 *
 * This function attempts to parse the saved content from the $content string, which exists in the post for
 * the older instance of the static block. It then uses DOMDocument to traverse the markup and extract
 * the attributes from the <h1-h6> tag to update the $attributes array so the block can be rendered via the dynamic
 * PHP template for the block instead of just echoing out the $content string.
 *
 * @param string $content The saved string from the post editor containing the saved markup and data for the block.
 * @param array  $attributes The block's attributes array of saved attributes. Likely empty if a static block.
 * @return array The recovered Attributes extracted from the markup.
 */
function bu_blocks_headline_v1_get_attributes( $content, $attributes ) {
	// Use DOMDocument to parse the content.
	$dom = new DOMDocument();
	$dom->loadHTML( $content, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD );

	// Get the first heading element.
	$heading = $dom->getElementsByTagName( '*' )->item( 0 );

	// Initialize attributes array.
	if ( $heading ) {
		// Extract level from tag name (h2 -> 2).
		$attributes['level'] = (int) str_replace( 'h', '', $heading->tagName ); // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase

		// Extract Anchor ID if it exists.
		if ( $heading->hasAttribute( 'id' ) ) {
			$attributes['anchor'] = $heading->getAttribute( 'id' );
		}

		// Extract inner HTML content, preserving any HTML tags inside the heading.
		$inner_html = '';
		// phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
		foreach ( $heading->childNodes as $child ) {
			$inner_html .= $dom->saveHTML( $child );
		}

		// If the content attribute is empty, set it to the inner HTML.
		if ( empty( $attributes['content'] ) ) {
			// Set the content attribute to the inner HTML.
			$attributes['content'] = $inner_html;
		}

		// Get the heading classes.
		$classes_static = $heading->getAttribute( 'class' );
		// Strip out old `wp-block-editorial-headline` class.
		$classes_static = str_replace( 'wp-block-editorial-headline', '', $classes );

		if ( ! empty( $classes_static ) ) {
			$attributes['classes_static_v1'] = $classes_static;
		}
	}

	return $attributes;
}
