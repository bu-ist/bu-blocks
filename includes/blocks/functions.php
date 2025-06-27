<?php
/**
 * Block functions
 *
 * @package    bu-blocks
 */

namespace BU\Plugins\BU_Blocks;

/**
 * Constants.
 */
define( 'BU_BLOCKS_BLOCKS_BUILD_DIR', BU_BLOCKS_DIR . 'dist' );
define( 'BU_BLOCKS_BLOCKS_BUILD_URL', BU_BLOCKS_URL . 'dist' );

/**
 * Array of Block Names
 *
 * @return Array of block names in this plugin.
 *
 * @since 2.0.0
 */
function bu_blocks_get_registered_block_names() {
	$blocks = array(
		'editorial/aside',
		'bu/buniverse',
		'bu/button',
	);

	return apply_filters( 'bu_blocks_registered_block_names', $blocks );
}
/**
 * Block Stylesheet Handling
 *
 * Set to true to bundle all block styles together and enqueue them
 * as a single stylesheet for use on HTTP/1.
 *
 * @since 0.1.0
 */
function bu_blocks_bundle_block_styles() {
	return apply_filters( 'bu_blocks_bundle_block_styles', true );
}

/**
 * Block Decorative Stylesheet Handling
 *
 * Set to true to enqueue the decorative block styles in the editor & frontend.
 *
 * @since 0.1.0
 */
function bu_blocks_decorative_block_styles() {
	return apply_filters( 'bu_blocks_decorative_block_styles', true );
}

/**
 * Include Blocks & Assets
 */
require_once 'class-block-supports.php';
require_once 'class-blocks.php';
require_once 'class-blockenqueues.php';

// Load Gutenberg Patterns.
// require 'class-blockpatterns.php';.

/**
 * Include Deprecated functions for old versions of blocks.
 */
require_once BU_BLOCKS_DIR . 'src/blocks/button/deprecated/deprecated.php';
require_once BU_BLOCKS_DIR . 'src/blocks/collapsible-control/deprecated/deprecated.php';
require_once BU_BLOCKS_DIR . 'src/blocks/headline/deprecated/deprecated.php';
