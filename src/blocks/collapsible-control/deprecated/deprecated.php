<?php
/**
 * Collapsible Control Block Deprecated Version Functions
 *
 * PHP functions for use with old versions of the block in the render.php template.
 *
 * @package    bu-blocks
 */

/**
 * Collapsible Control Block v1 Get Attributes
 *
 * For older static blocks when switching to a php template (dynamic block) $attributes doesn't
 * return the saved attributes since they were saved in the markup.
 *
 * This function attempts to parse the saved content from the $content string, which exists in the post for
 * the older instance of the static block. It then uses DOMDocument to traverse the markup and extract
 * the button text to update the $attributes array so the block can be rendered via the dynamic
 * PHP template for the block instead of just echoing out the $content string.
 *
 * @param string $content The saved string from the post editor containing the saved markup and data for the block.
 * @param array  $attributes The block's attributes array of saved attributes. Likely empty if a static block.
 * @return array The recovered Attributes extracted from the markup.
 */
function bu_blocks_collapsible_control_v1_get_attributes( $content, $attributes ) {
	$doc = new DOMDocument();
	$doc->loadHTML( $content );

	// Find the button in the saved $content.
	$button_node = $doc->getElementsByTagName( 'button' )->item( 0 );
	// Get the text content from the <button> tag if it exists.
	$text = $button_node->textContent; // phpcs:ignore WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase
	// Set button text from content to $attribute value.
	if ( empty( $attributes['text'] ) && ! empty( $text ) ) {
		$attributes['text'] = $text;
	}
	return $attributes;
}
