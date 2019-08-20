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
 * Register all of the hooks related to the editor.
 *
 * @since    0.1.0
 */
function define_editor_hooks() {

	// Enqueue block scripts and styles for admin and front-end.
	add_action( 'enqueue_block_assets', __NAMESPACE__ . '\\enqueue_block_assets' );
	add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\\enqueue_block_editor_assets' );

	// Add block categories.
	add_filter( 'block_categories', __NAMESPACE__ . '\\filter_block_categories' );

	// Set default options for block theme settings.
	add_filter( 'block_editor_settings', __NAMESPACE__ . '\\default_theme_colors', 10, 2 );
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

	// Enqueue object-fit-images.
	wp_enqueue_script(
		'object-fit-images',
		'https://cdnjs.cloudflare.com/ajax/libs/object-fit-images/3.2.4/ofi.min.js',
		array(),
		BU_BLOCKS_VERSION,
		true
	);

	if ( ! is_admin() ) {
		wp_enqueue_script(
			'bu-blocks-frontend-js', // Handle.
			plugins_url( '/dist/bu-blocks-frontend.js', dirname( __FILE__ ) ), // Bu-blocks-frontend.js: Frontend scripts. Built with Webpack.
			array(), // Dependencies.
			filemtime( plugin_dir_path( __DIR__ ) . '/dist/bu-blocks-frontend.js' ), // Version: filemtime — Gets file modification time.
			true // Enqueue the script in the footer.
		);
	}
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

	// Enqueue script for filtering blocks allowed per post type.
	wp_enqueue_script(
		'bu-blocks-allowed-blocks',
		plugins_url( 'allowed-blocks.js', __FILE__ ),
		array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
		filemtime( plugin_dir_path( __DIR__ ) . 'src/allowed-blocks.js' ),
		true,
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
 * Sets the default `light` and `dark` color objects for use as theme options.
 *
 * @param array   $editor_settings Editor settings.
 * @param WP_Post $post            The current post.
 */
function default_theme_colors( $editor_settings, $post ) {
	if ( ! function_exists( 'bu_prepress_get_post_types' ) ) {
		return $editor_settings;
	}

	if ( ! in_array( $post->post_type, bu_prepress_get_post_types(), true ) ) {
		return $editor_settings;
	}

	$editor_settings['buDefaultThemes'] = array(
		array(
			'name'  => esc_html__( 'Light', 'r-editorial' ),
			'slug'  => 'light',
			'color' => '#ffffff',
		),
		array(
			'name'  => esc_html__( 'Dark', 'r-editorial' ),
			'slug'  => 'dark',
			'color' => '#000000',
		),
	);

	return $editor_settings;
}

/**
 * Load all the PHP file within the /src/ directory.
 *
 * This used to be done through:
 * `\AaronHolbrook\Autoload\autoload( plugin_dir_path( __DIR__ ) . 'src' );`
 * which was included in this repo, but has since been removed for performance
 * reasons. Please manually include all files in the /src/ directory below.
 *
 * @since 0.2.6
 */
$path_to_src = plugin_dir_path( __DIR__ ) . 'src/';
require_once $path_to_src . 'functions.php';
require_once $path_to_src . 'blocks/custom-html/index.php';
require_once $path_to_src . 'blocks/relatedstories/index.php';
require_once $path_to_src . 'blocks/relatedstories/yarpprelated-endpoint.php';
require_once $path_to_src . 'blocks/relatedstories/collection-endpoint.php';
require_once $path_to_src . 'blocks/leadin/index.php';
require_once $path_to_src . 'components/background/index.php';

// Kicks off all hooks.
namespace\init_hooks();
