<?php
/**
 * Initializes all hooks used by the plugin
 *
 * @link       www.bu.edu/interactive-design/
 * @since      0.1.0
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
 * @since    0.1.0
 */
function init_hooks() {

	// Defines all translation hooks.
	namespace\define_i18n_hooks();

	// Defines all editor hooks.
	namespace\define_editor_hooks();

}

/**
 * Defines all plugin internationalization and localization hooks.
 *
 * @since    0.1.0
 */
function define_i18n_hooks() {
	add_action( 'init', __NAMESPACE__ . '\\bu_blocks_load_textdomain' );
}

/**
 * Register all of the hooks related to the admin area functionality
 * of the plugin.
 *
 * @since    0.1.0
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
 * @since    0.1.0
 */
function define_editor_hooks() {

	// Enqueue block scripts and styles for admin and front-end.
	add_action( 'enqueue_block_assets', __NAMESPACE__ . '\\enqueue_block_assets' );
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_block_editor_assets' );
	add_filter( 'block_categories', __NAMESPACE__ . '\\filter_block_categories' );
}

/**
 * Load the plugin text domain for translation.
 *
 * @since    0.1.0
 */
function bu_blocks_load_textdomain() {
	load_plugin_textdomain(
		'bu-blocks',
		false,
		dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
	);
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since    0.1.0
 */
function enqueue_block_assets() {
	// Styles.
	wp_enqueue_style(
		'bu-blocks-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) // Version: filemtime — Gets file modification time.
	);
}

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since    0.1.0
 */
function enqueue_block_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'bu-blocks-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ), // Version: filemtime — Gets file modification time.
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'bu-blocks-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
		filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) // Version: filemtime — Gets file modification time.
	);
}

/**
 * Filter the list of default editor block categories.
 *
 * @since    0.1.0
 *
 * @param    array $categories Default block categories.
 */
function filter_block_categories( $categories ) {
	$bu = array(
		array(
			'slug'  => 'bu',
			'title' => __( 'BU Blocks', 'bu-blocks' ),
		),
	);

	$bu_editorial = array(
		array(
			'slug'  => 'bu-editorial',
			'title' => __( 'Editorial Blocks', 'bu-blocks' ),
		),
	);

	$bu_editorial_presets = array(
		array(
			'slug'  => 'bu-editorial-presets',
			'title' => __( 'Preset Editorial Blocks', 'bu-blocks' ),
		),
	);

	return array_merge(
		$bu,
		$bu_editorial,
		$bu_editorial_presets,
		$categories
	);
}

/**
 * Recursively load all PHP files within the /src/ directory.
 *
 * This is different than using composer.json to use Composer's autoload
 * library because this plugin needs to load regular PHP files -- not just
 * ones that define classes. This helps developers focus on creating blocks
 * rather than adding `include_once`,  `require_once`, etc calls for each
 * PHP file that gets created.
 *
 * @since    0.1.0
 */
require_once plugin_dir_path( __DIR__ ) . 'vendor/autoload/autoload.php';
\AaronHolbrook\Autoload\autoload( plugin_dir_path( __DIR__ ) . 'src' );

// Kicks off all hooks.
namespace\init_hooks();
