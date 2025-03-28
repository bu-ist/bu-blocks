<?php
/**
 * Button Block Deprecated Version Functions
 * 
 * 
 * PHP functions for use with old versions of the block in the render.php template.
 *
 */

function bu_blocks_button_v2_get_attributes( $content, $attributes ) {
	$doc = new DOMDocument();
	$doc->loadHTML($content);

	// Find the button in the saved $content;
	$buttonNode = $doc->getElementsByTagName('a')->item(0);
	// Get the url from the href if the attribute exists. 
	$url = $buttonNode->getAttribute('href');
	// Get the text cotnent from the <a> tag if it exists.
	$text = $buttonNode->textContent;
	// Get the button classes.
	$classes = $buttonNode->getAttribute('class');
	// Strip out old `wp-block-button` class. 
	$classes = str_replace( 'wp-block-button', '', $classes );
	
    // Set url from content to $attribute value.
	if ( empty( $attributes['url'] ) &&  ! empty( $url ) ) {
		$attributes['url'] = $url;
	}

    // Set button text from content to $attribute value.
	if ( empty( $attributes['text'] ) && ! empty( $text ) ) {
		$attributes['text'] = $text;
	}

	if ( ! empty( $classes ) ) {
		$attributes['classes_old'] = $classes;
	}

	return $attributes;
}
