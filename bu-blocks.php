<?php
/**
 * Plugin Name:     BU Blocks
 * Plugin URI:      https://github.com/bu-ist/bu-blocks
 * Description:     A WordPress plugin to centrally manage all BU editor blocks for the new WordPress editor.
 * Author:          Boston University
 * Author URI:      http://www.bu.edu/interactive-design/
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
 * Displays admin notice and prevents activation.
 *
 * Deactivates plugin if the function to register blocks does not exist
 * (meaning this is not a WP 5.0.0 install, or the site does not have the
 * Gutenberg plugin activated.
 *
 * @since    1.0.0
 */
function bu_blocks_gutenberg_notice() {

	// Only targets WordPress versions before 5.0, that don't have gutenberg activated.
	if ( ! function_exists( 'register_block_type' ) ) {
		?>
			<div class="notice notice-error is-dismissible">
				<p>
					<?php esc_html_e( 'BU Blocks Error: BU Blocks requires either WordPress 5.0.0, or the Gutenberg plugin to be installed and activated on any version previous to 5.0.0.', 'bu-blocks' ); ?>
				</p>
				<p>
					<?php esc_html_e( 'Please install and activate the Gutenberg plugin to use BU Blocks.', 'bu-blocks' ); ?>
				</p>
				<p><a class="button" href="https://wordpress.org/plugins/gutenberg/" target="_blank" rel="noopener noreferrer"><?php _e( 'Get Gutenberg', 'bu-blocks' ); ?></a></p>
			</div>
		<?php
		deactivate_plugins( plugin_basename( __FILE__ ) );
	}
}
add_action( 'admin_notices', 'bu_blocks_gutenberg_notice' );

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
}
run_bu_blocks();
