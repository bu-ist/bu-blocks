<?php
/**
 * Intro Paragraph Block Deprecated Version Functions
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
 * BU Intro Paragraph Block v2 Get Attributes
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
function bu_blocks_introparagraph_v2_get_attributes( $content, $attributes ) {
	// Use DOMDocument to parse the content.
	$dom = new DOMDocument();
	libxml_use_internal_errors( true ); // Suppress HTML5 parsing errors.
	$dom->loadHTML( mb_convert_encoding( $content, 'HTML-ENTITIES', 'UTF-8' ), LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD );
	libxml_clear_errors();

	// Get the main block wrapper div.
	$introparagraph_block = $dom->getElementsByTagName( 'div' )->item( 0 );

	// If the block wrapper is not found, return the attributes as is.
	if ( empty( $introparagraph_block ) ) {
		return $attributes;
	}

	// Extract class names and store original classes.
	if ( $introparagraph_block->hasAttribute( 'class' ) ) {
		$class_string = $introparagraph_block->getAttribute( 'class' );
		

		// Process className attribute from classes.
		$extracted_classes = explode( ' ', $class_string );


		// Extract attributes from classes and clean up class names.
		foreach ( $extracted_classes as $key => $class ) {
			// Remove 'wp-block-editorial-introparagraph' from classes.
			// It will be added by the template.
			if ( 'wp-block-editorial-introparagraph' === $class ) {
				unset( $extracted_classes[ $key ] );
				continue;
			}
			// Remove any Publication slug block classes that contain 
			// `-block-editorial-introparagraph`, such as `butoday-block-editorial-introparagraph`.
			// It will be added by the template or filters. 
			if ( strpos( $class, '-block-editorial-introparagraph' ) !== false ) {
				unset( $extracted_classes[ $key ] );
				continue;
			}

			// Extract dropcap color.
			if ( strpos( $class, 'has-dropcap-color-' ) === 0 ) {
				$color = str_replace( 'has-dropcap-color-', '', $class );
				$attributes['dropCapColor'] = $color;
			}

			// Extract paragraph color.
			if ( strpos( $class, 'has-paragraph-color-' ) === 0 ) {
				$color = str_replace( 'has-paragraph-color-', '', $class );
				$attributes['paragraphColor'] = $color;
			}
		}


		// Update $attributes['className'] with any extracted classes.
		if ( ! empty( $attributes['className'] ) ) {
			// Create an array from className attribute.
			$className_classes = explode( ' ', $attributes['className'] );
			
			// Check if any extracted $extracted_classes don't exist in $className_classes.
			$missing_classes = array_diff( $extracted_classes, $className_classes );

			// Add missing classes to $className_classes.
			$className_classes = array_merge( $className_classes, $missing_classes );

			// If there are missing classes, update the className attribute.
			if ( ! empty( $missing_classes ) ) {
				$attributes['className'] = implode( ' ', $className_classes );
			}
		} else {
			// Recreate an `className` attribute with the extracted classes.
			$attributes['className'] = implode( ' ', $extracted_classes );
		}
	}

	// Extract anchor ID.
	if ( $introparagraph_block->hasAttribute( 'id' ) ) {
		$attributes['anchor'] = $introparagraph_block->getAttribute( 'id' );
	}

	// Extract heading content.
	$heading = $dom->getElementsByTagName( 'h4' )->item( 0 );
	if ( $heading ) {
		$attributes['heading'] = $heading->nodeValue;
	}

	// Extract list content.
	$list = $dom->getElementsByTagName( 'ul' )->item( 0 );
	if ( $list ) {
		// Create a temporary document to preserve HTML in list items.
		$temp_dom = new DOMDocument();
		foreach ( $list->childNodes as $child ) {
			$temp_dom->appendChild( $temp_dom->importNode( $child, true ) );
		}
		$attributes['list'] = trim( $temp_dom->saveHTML() );
	}

	// Extract paragraph content.
	$content_div = $dom->getElementsByTagName( 'div' )->item( 1 ); // Second div is content div.
	if ( $content_div ) {
		$paragraph = $content_div->getElementsByTagName( 'p' )->item( 0 );
		if ( $paragraph ) {
			// Use innerHTML to preserve HTML tags
			$paragraph_html = '';
			$children = $paragraph->childNodes;
			foreach ( $children as $child ) {
				$paragraph_html .= $dom->saveHTML( $child );
			}
			$attributes['content'] = $paragraph_html;
		}

		// Check for dropcap image SVG.
		$svg = $content_div->getElementsByTagName( 'svg' )->item( 0 );
		if ( $svg ) {
			$images = $svg->getElementsByTagName( 'image' );
			if ( $images->length > 0 ) {
				$image = $images->item( 0 );
				if ( $image->hasAttribute( 'href' ) ) {
					$attributes['dropCapImageURL'] = $image->getAttribute( 'href' );
				}
			}
		}
	}


	return $attributes;
}
