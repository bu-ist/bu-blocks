<?php
/**
 * Server-side rendering of the `bu/collapsible` block.
 *
 * Note: default rendering of the collapsible is to set the blocks to be open
 * regardless of user setting and close the blocks on dom ready via JS. This
 * is so that users with JS disabled can access the content.
 *
 * @package BU_Blocks
 */


namespace BU\Plugins\BU_Blocks\Blocks\Collapsible;

/**
 * Get Icon Markup
 *
 * This function returns the svg markup from a single SVG file that contains each of the
 * icon states and styles for this block.
 *
 * The filter will allow a child theme to override this and provide their own SVG markup for the icons.
 *
 * @param string $icon_path The path to the icon.
 *
 * @return string The SVG markup for the icon.
 */
function get_icon_markup( $icon_path = __DIR__ . '/icon-collapsible.svg' ) {
	if ( file_exists( $icon_path ) ) {
		$svg = file_get_contents( $icon_path );

		return apply_filters( 'bu_blocks_collapsible_icon', $svg );
	}
}
