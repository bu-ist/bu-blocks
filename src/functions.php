<?php
/**
 * Plugin functions available in the global namespace.
 *
 * @link       www.bu.edu/interactive-design/
 * @since      0.2.2
 *
 * @package    bu-blocks
 * @subpackage bu-blocks/src
 */

/**
 * Returns an array of allowed HTML tags for use in post titles.
 *
 * @return array Array of allowed html tags and attributes.
 */
function bu_blocks_kses_title() {
	return array(
		'strong' => array(),
		'em'     => array(),
		'b'      => array(),
		'i'      => array(),
	);
}