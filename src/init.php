<?php
/**
 * Initializes all hooks used by the plugin
 *
 * @link       www.bu.edu/interactive-design/
 * @since      1.0.0
 *
 * @package    BU_Blocks
 * @subpackage BU_Blocks/src
 */

namespace BU\Plugins\BU_Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Initializes all WordPress hooks used in the plugin.
 *
 * @since    1.0.0
 */
function init_hooks() {

	// Defines all internationalization/localization hooks.
	namespace\define_i18n_hooks();

	// Defines admin-specific hooks for the backend.
	namespace\define_admin_hooks();

	// Defines all editor hooks.
	namespace\define_editor_hooks();

}

/**
 * Defines all plugin internationalization and localization hooks.
 *
 * @since    1.0.0
 */
function define_i18n_hooks() {
	add_action( 'init', __NAMESPACE__ . '\\bu_blocks_load_textdomain' );
}

/**
 * Register all of the hooks related to the admin area functionality
 * of the plugin.
 *
 * @since    1.0.0
 */
function define_admin_hooks() {

	// Enqueue admin scripts and styles, and add admin plugin settings page.
	add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\admin_enqueue_scripts' );
	add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\admin_enqueue_styles' );
	add_action( 'admin_menu', __NAMESPACE__ . '\\admin_menu' );
}

/**
 * Register all of the hooks related to the editor.
 *
 * @since    1.0.0
 */
function define_editor_hooks() {

	// Enqueue block scripts and styles for admin and front-end.
	add_action( 'enqueue_block_assets', __NAMESPACE__ . '\\enqueue_block_assets' );
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_block_editor_assets' );
}

/**
 * Load the plugin text domain for translation.
 *
 * @since    1.0.0
 */
function bu_blocks_load_textdomain() {
	load_plugin_textdomain(
		'bu-blocks',
		false,
		dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
	);
}


// Recursively load all PHP files within the /src/ directory.
require_once plugin_dir_path( __DIR__ ) . 'vendor/autoload/autoload.php';
\AaronHolbrook\Autoload\autoload( plugin_dir_path( __DIR__ ) . 'src' );

// Kicks off all hooks.
namespace\init_hooks();
