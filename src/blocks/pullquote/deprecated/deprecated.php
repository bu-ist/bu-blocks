<?php
/**
 * Pullquote Block Deprecated Version Functions
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
 * BU Pullquote Block v1 Get Attributes
 *
 * For older static blocks when switching to a php template (dynamic block) $attributes doesn't
 * return the saved attributes since they were saved in the markup such as in the content string.
 *
 * This function attempts to parse the saved content from the $content string, which exists in the post for
 * the older instance of the static block. It then uses DOMDocument to traverse the markup and extract
 * the attributes from the block to update the $attributes array so the block can be rendered via the dynamic
 * PHP template for the block instead of just echoing out the $content string.
 *
 * @param string $content The saved string from the post editor containing the saved markup and data for the block.
 * @param array  $attributes The block's attributes array of saved attributes. Likely empty if a static block.
 * @return array The recovered Attributes extracted from the markup.
 */
function bu_blocks_pullquote_v1_get_attributes( $content, $attributes ) {
	$doc = new DOMDocument();
	$doc->loadHTML( $content );

	// Find the main wrapper div.
	$wrapper_node = $doc->getElementsByTagName( 'div' )->item( 0 );
	if ( ! $wrapper_node ) {
		return $attributes;
	}

	// Get classes from the wrapper.
	$wrapper_classes = $wrapper_node->getAttribute( 'class' );
	if ( $wrapper_classes ) {
		$classes_array = explode( ' ', $wrapper_classes );

		// Extract theme color from classes.
		foreach ( $classes_array as $class ) {
			if ( strpos( $class, 'has-' ) === 0 && strpos( $class, '-theme' ) !== false ) {
				if ( strpos( $class, '-theme-text' ) !== false ) {
					// Text color.
					$text_color = str_replace( array( 'has-', '-theme-text' ), '', $class );
					if ( empty( $attributes['textColor'] ) && ! empty( $text_color ) ) {
						$attributes['textColor'] = $text_color;
					}
				} else {
					// Theme color.
					$theme_color = str_replace( array( 'has-', '-theme' ), '', $class );
					if ( empty( $attributes['themeColor'] ) && ! empty( $theme_color ) ) {
						$attributes['themeColor'] = $theme_color;
					}
				}
			}
			// Extract image focus from classes.
			if ( strpos( $class, 'has-image-focus-' ) === 0 ) {
				$image_focus = str_replace( 'has-image-focus-', '', $class );
				if ( empty( $attributes['imageFocus'] ) && ! empty( $image_focus ) ) {
					$attributes['imageFocus'] = $image_focus;
				}
			}
		}

		// Store original classes.
		$attributes['classes_static_v1'] = $wrapper_classes;
	}

	// Find the quote-sizing div to extract quote.
	$xpath       = new DOMXPath( $doc );
	$quote_nodes = $xpath->query( "//div[contains(@class, 'quote-sizing')]" );
	if ( $quote_nodes->length > 0 ) {
		$quote_content = '';
		foreach ( $quote_nodes->item( 0 )->childNodes as $child ) { // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
			$quote_content .= $doc->saveHTML( $child );
		}
		if ( empty( $attributes['quote'] ) && ! empty( $quote_content ) ) {
			// Convert HTML string to array format.
			$attributes['quote'] = $quote_content;
		}
	}

	// Find the footer element to extract cite.
	$footer_nodes = $doc->getElementsByTagName( 'footer' );
	if ( $footer_nodes->length > 0 ) {
		$cite_content = '';
		foreach ( $footer_nodes->item( 0 )->childNodes as $child ) { // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
			$cite_content .= $doc->saveHTML( $child );
		}
		if ( empty( $attributes['cite'] ) && ! empty( $cite_content ) ) {
			// Convert HTML string to array format.
			$attributes['cite'] = $cite_content;
		}
	}

	// Find media credit.
	$credit_nodes = $xpath->query( "//div[contains(@class, 'wp-component-media-credit')]" );
	if ( $credit_nodes->length > 0 ) {
		$credit_text = $credit_nodes->item( 0 )->textContent; // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
		if ( empty( $attributes['photoCredit'] ) && ! empty( $credit_text ) ) {
			$attributes['photoCredit'] = trim( $credit_text );
		}
	}

	// Check for background image.
	$img_nodes = $doc->getElementsByTagName( 'img' );
	if ( $img_nodes->length > 0 ) {
		$img_node  = $img_nodes->item( 0 );
		$img_class = $img_node->getAttribute( 'class' );
		// Extract image ID from class like 'wp-image-123'.
		if ( preg_match( '/wp-image-(\d+)/', $img_class, $matches ) ) {
			if ( empty( $attributes['backgroundId'] ) && ! empty( $matches[1] ) ) {
				$attributes['backgroundId']   = (int) $matches[1];
				$attributes['backgroundType'] = 'image';
			}
		}
		// Get image URL.
		$img_src = $img_node->getAttribute( 'src' );
		if ( empty( $attributes['backgroundUrl'] ) && ! empty( $img_src ) ) {
			$attributes['backgroundUrl'] = $img_src;
		}
		// Get image alt.
		$img_alt = $img_node->getAttribute( 'alt' );
		if ( empty( $attributes['backgroundAlt'] ) && ! empty( $img_alt ) ) {
			$attributes['backgroundAlt'] = $img_alt;
		}
	}

	return $attributes;
}
