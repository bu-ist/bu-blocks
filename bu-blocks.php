<?php
/**
 * Plugin Name:     BU Blocks
 * Plugin URI:      https://github.com/bu-ist/bu-blocks
 * Description:     A WordPress plugin to centrally manage all BU editor blocks for the new WordPress editor.
 * Author:          Boston University
 * Author URI:      http://www.bu.edu/
 * Text Domain:     bu-blocks
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Bu_Blocks
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Defines the plugin version.
define( 'BU_BLOCKS_VERSION', '0.1.0' );

// Defines the path to the plugin's root directory.
define( 'BU_BLOCKS_DIR', plugin_dir_path( __FILE__ ) );

// Defines the URL to the plugin's root directory.
define( 'BU_BLOCKS_DIR_URL', plugin_dir_url( __FILE__ ) );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require_once BU_BLOCKS_DIR . 'includes/class-bu-blocks.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks
 * in the `__constructor` method, then kicking off the plugin
 * from this point in the file does not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_bu_blocks() {
	// The constructor method of this class will kick off hooks.
	$plugin = new BU_Blocks();
	$plugin->run();
}
run_bu_blocks();
