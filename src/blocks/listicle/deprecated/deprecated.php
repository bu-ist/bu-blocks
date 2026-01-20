<?php
/**
 * Listicle Block Deprecated Version Functions
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
 * BU Listicle Block v1 Get Attributes
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
function bu_blocks_listicle_v1_get_attributes( $content, $attributes ) {
	$doc = new DOMDocument();
	@$doc->loadHTML( mb_convert_encoding( $content, 'HTML-ENTITIES', 'UTF-8' ) );

	$xpath = new DOMXPath( $doc );

	// Extract hed (header heading).
	$hed_nodes = $xpath->query( "//h3[contains(@class, 'wp-block-editorial-listicle-header-content-hed')]" );
	if ( $hed_nodes->length > 0 ) {
		$hed_content = '';
		foreach ( $hed_nodes->item( 0 )->childNodes as $child ) { // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
			$hed_content .= $doc->saveHTML( $child );
		}
		if ( empty( $attributes['hed'] ) && ! empty( $hed_content ) ) {
			$attributes['hed'] = $hed_content;
		}
	}

	// Extract dek (header deck).
	$dek_nodes = $xpath->query( "//h4[contains(@class, 'wp-block-editorial-listicle-header-content-dek')]" );
	if ( $dek_nodes->length > 0 ) {
		$dek_content = '';
		foreach ( $dek_nodes->item( 0 )->childNodes as $child ) { // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
			$dek_content .= $doc->saveHTML( $child );
		}
		if ( empty( $attributes['dek'] ) && ! empty( $dek_content ) ) {
			$attributes['dek'] = $dek_content;
		}
	}

	// Extract content.
	$content_nodes = $xpath->query( "//div[contains(@class, 'wp-block-editorial-listicle-section-content')]" );
	if ( $content_nodes->length > 0 ) {
		$content_html = '';
		foreach ( $content_nodes->item( 0 )->childNodes as $child ) { // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
			$content_html .= $doc->saveHTML( $child );
		}
		if ( empty( $attributes['content'] ) && ! empty( $content_html ) ) {
			$attributes['content'] = $content_html;
		}
	}

	// Extract aside.
	$aside_nodes = $xpath->query( "//aside[contains(@class, 'wp-block-editorial-listicle-section-aside')]/p" );
	if ( $aside_nodes->length > 0 ) {
		$aside_content = '';
		foreach ( $aside_nodes->item( 0 )->childNodes as $child ) { // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
			$aside_content .= $doc->saveHTML( $child );
		}
		if ( empty( $attributes['aside'] ) && ! empty( $aside_content ) ) {
			$attributes['aside'] = $aside_content;
		}
	}

	// Extract number.
	$number_nodes = $xpath->query( "//h2[contains(@class, 'wp-block-editorial-listicle-header-number')]" );
	if ( $number_nodes->length > 0 ) {
		$number_text = $number_nodes->item( 0 )->textContent; // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
		if ( empty( $attributes['number'] ) && ! empty( $number_text ) ) {
			$attributes['number'] = trim( $number_text );
		}
	}

	// Extract related links.
	$related_nodes = $xpath->query( "//ul[contains(@class, 'wp-block-editorial-listicle-footer-list')]" );
	if ( $related_nodes->length > 0 ) {
		$related_content = '';
		foreach ( $related_nodes->item( 0 )->childNodes as $child ) { // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
			$related_content .= $doc->saveHTML( $child );
		}
		if ( empty( $attributes['related'] ) && ! empty( $related_content ) ) {
			$attributes['related'] = $related_content;
		}
	}

	// Extract credit.
	$credit_nodes = $xpath->query( "//figcaption[contains(@class, 'wp-block-editorial-listicle-caption')]" );
	if ( $credit_nodes->length > 0 ) {
		$credit_content = '';
		foreach ( $credit_nodes->item( 0 )->childNodes as $child ) { // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
			$credit_content .= $doc->saveHTML( $child );
		}
		if ( empty( $attributes['credit'] ) && ! empty( $credit_content ) ) {
			$attributes['credit'] = $credit_content;
		}
	}

	// Extract classes from main section element.
	$section_nodes = $xpath->query( "//section[contains(@class, 'wp-block-editorial-listicle')]" );
	if ( $section_nodes->length > 0 ) {
		$section_classes = $section_nodes->item( 0 )->getAttribute( 'class' );
		if ( $section_classes ) {
			$classes_array = explode( ' ', $section_classes );
			// Check for divider class (has-no-bottom-divider means divider is false).
			if ( in_array( 'has-no-bottom-divider', $classes_array, true ) ) {
				$attributes['divider'] = false;
			}
			// Extract className (base classes minus our specific ones).
			$base_classes = array();
			foreach ( $classes_array as $class ) {
				if ( strpos( $class, 'has-' ) !== 0 && strpos( $class, 'wp-block-' ) !== 0 ) {
					$base_classes[] = $class;
				}
			}
			if ( ! empty( $base_classes ) && empty( $attributes['className'] ) ) {
				$attributes['className'] = implode( ' ', $base_classes );
			}
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

	// Check for share tools disabled (if the share tools element is missing, it's disabled).
	$share_tools_nodes = $xpath->query( "//p[contains(@class, 'wp-blocks-components-share-tools')]" );
	if ( $share_tools_nodes->length === 0 ) {
		$attributes['shareToolsDisabled'] = true;
	}

	return $attributes;
}
