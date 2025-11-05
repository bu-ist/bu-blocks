<?php
/**
 * Plugin Name:     BU Blocks
 * Plugin URI:      https://github.com/bu-ist/bu-blocks
 * Description:     A repository for storing all BU WordPress blocks.
 * Author:          Boston University: Interactive Design
 * Author URI:      http://www.bu.edu/interactive-design/
 * Text Domain:     bu-blocks
 * Domain Path:     /languages
 * Version:         2.0.0-alpha
 *
 * @package BU_Blocks
 */

namespace BU\Plugins\BU_Blocks;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Defines the plugin version.
//define( 'BU_BLOCKS_VERSION', '2.0.0-alpha' );

/**
 * Constants.
 */
define( 'BU_BLOCKS_DIR', plugin_dir_path( __FILE__ ) );
define( 'BU_BLOCKS_URL', plugin_dir_url( __FILE__ ) );

/**
 * Current plugin info.
 *
 * @link https://developer.wordpress.org/reference/functions/get_file_data/
 */
$plugin_data = get_file_data(
	__FILE__,
	array(
		'Version'     => 'Version',
		'Text Domain' => 'Text Domain',
	),
	false
);
define( 'BU_BLOCKS_VERSION', $plugin_data['Version'] );
define( 'BU_BLOCKS', $plugin_data['Text Domain'] );

/**
 * Displays admin notice and prevents activation.
 *
 * Deactivates plugin if the function to register blocks does not exist
 * (meaning this is not a WP 5.0.0 install, or the site does not have the
 * Gutenberg plugin activated.
 *
 * @since 0.1.0
 */
function gutenberg_notice() {
	?>
<div class="notice notice-error is-dismissible">
	<p>
		<?php esc_html_e( 'BU Blocks Error: BU Blocks requires either WordPress 5.0.0, or the Gutenberg plugin to be installed and activated on any version previous to 5.0.0.', 'bu-blocks' ); ?>
	</p>
	<p>
		<?php esc_html_e( 'Please install and activate the Gutenberg plugin to use BU Blocks.', 'bu-blocks' ); ?>
	</p>
	<p><a class="button" href="https://wordpress.org/plugins/gutenberg/" target="_blank" rel="noopener noreferrer"><?php esc_html_e( 'Get Gutenberg', 'bu-blocks' ); ?></a></p>
</div>
	<?php
	deactivate_plugins( plugin_basename( __FILE__ ) );
}


/**
 * Initializes plugin on plugins_loaded.
 *
 * Waits for plugins_loaded hook to properly call function_exists.
 *
 * @since 0.1.0
 */
function init_plugin() {

	// Only targets WordPress versions before 5.0, that don't have gutenberg activated.
	if ( ! function_exists( 'register_block_type' ) ) {
		add_action( 'admin_notices', __NAMESPACE__ . '\\gutenberg_notice' );
		return;
	}

	// Initialize plugin by including init file, which kicks off hooks.
	include_once plugin_dir_path( __FILE__ ) . 'functions/init.php';
}
add_action( 'plugins_loaded', __NAMESPACE__ . '\\init_plugin' );


/**
 * Blocks & Assets
 */
require_once BU_BLOCKS_DIR . 'includes/blocks/functions.php';
