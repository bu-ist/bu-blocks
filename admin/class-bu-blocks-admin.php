<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * @link       www.bu.edu/interactive-design/
 * @since      1.0.0
 *
 * @package    Bu_Blocks
 * @subpackage Bu_Blocks/includes
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, enqueues the admin-specific
 * stylesheet and JavaScript. Adds meta boxes
 *
 * @since      1.0.0
 * @package    Bu_Blocks
 * @subpackage Bu_Blocks/includes
 * @author     Boston University <id@bu.edu>
 */
class BU_Blocks_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The ID of this plugin.
	 */
	private $plugin_name;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param    string $plugin_name The name of this plugin. Used for admin pages and script names.
	 * @param    string $version     The version of this plugin. Used for cache-busting.
	 */
	public function __construct( $plugin_name, $version ) {
		$this->plugin_name = $plugin_name;
		$this->version     = $version;
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 *
	 * @param    string $hook_suffix The name of the admin page.
	 */
	public function enqueue_styles( $hook_suffix ) {
		// Targets specific admin pages to enqueue bu-blocks styles.
		if ( in_array( $hook_suffix, $this->get_admin_pages_for_scripts(), true ) ) {
			wp_enqueue_style( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'css/bu-blocks-admin.css', array(), $this->version, 'all' );
		}
	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 *
	 * @param    string $hook_suffix The name of the admin page.
	 */
	public function enqueue_scripts( $hook_suffix ) {
		/**
		 * There are only 6 Server-side blocks, retrieved using
		 * `WP_Block_Type_Registry::get_instance()->get_all_registered()`:
		 *
		 * - core/block (generic block model?)
		 * - core/latest-comments
		 * - core/archives
		 * - core/categories
		 * - core/latest-posts
		 * - core/shortcode
		 *
		 * This might be because these blocks are "dynamic" blocks,
		 * which are blocks that need to fetch content from the server at runtime.
		 *
		 * There are plans to either move all blocks to use server-side registration,
		 * or expose all registered block data on the server-side in another way
		 * where block data can reliably be retrieved.
		 * https://github.com/WordPress/gutenberg/issues/8352)
		 *
		 * Until then, the gutenberg js assets must be enqueued so the plugin can
		 * detect all registered blocks via the JavaScript API that gutenberg gives us,
		 * using `wp.blocks.getBlockTypes()`.
		 */

		// Targets specific admin pages to enqueue bu-blocks scripts.
		if ( in_array( $hook_suffix, $this->get_admin_pages_for_scripts(), true ) ) {
			/**
			 * Defined in `wp-content/plugins/gutenberg/lib/client-assets.php`.
			 *
			 * Adds gutenberg inline scripts that are needed so we can call `wp.blocks.getBlockTypes()`
			 * outside of gutenberg contexts (like the post editor page), and leverage its API
			 * on admin settings page where the editor won't be used.
			 */
			if ( function_exists( 'gutenberg_editor_scripts_and_styles' ) ) {
				gutenberg_editor_scripts_and_styles( $hook_suffix );
			}
			wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/bu-blocks-admin.js', array( 'wp-blocks', 'wp-element', 'wp-components', 'wp-i18n', 'wp-block-library', 'wp-editor', 'wp-edit-post' ), $this->version, true );
		}
	}

	/**
	 * Returns admin pages that should output bu-blocks plugin scripts.
	 *
	 * Plugin scrits should output where the gutenberg editor is present,
	 * such as the edit page or post screen, and also output on the
	 * plugin settings admin page.
	 *
	 * @since    1.0.0
	 *
	 * @return   array An array of admin page locations to output bu-blocks scripts.
	 */
	public function get_admin_pages_for_scripts() {
		return array(
			'post.php',                // The post edit screen.
			'settings_page_bu-blocks', // The plugin settings screen.
		);
	}

	/**
	 * Adds a settings page.
	 *
	 * @since    1.0.0
	 */
	public function add_plugin_admin_menu() {

		/**
		 * Adds the options page.
		 *
		 * Stores the returning string that identifies the page hook.
		 * Result: $page_hook = 'load-settings_page_bu-blocks'.
		 */
		$page_hook = add_options_page(
			'BU Blocks',
			'BU Blocks',
			'manage_options',
			$this->plugin_name,
			array( $this, 'load_bu_blocks_admin_page' )
		);

		/*
		 * Add action that runs when page is loaded.
		 *
		 * The $page_hook_suffix can be combined with the load-($page_hook) action hook.
		 * The callback below will be called when the respective page is loaded.
		 *
		 * This hook is currently not being used anywhere in the plugin, but could be used
		 * to add screen options.
		 *
		 * @since    1.0.0
		 *
		 * @link    https://codex.wordpress.org/Plugin_API/Action_Reference/load-(page).
		 * @link    https://www.sitepoint.com/using-wp_list_table-to-create-wordpress-admin-tables/
		 */
		add_action( 'load-' . $page_hook, array( $this, 'load_bu_blocks_admin_pages_hook' ) );
	}

	/**
	 * Callback to load screen options for settings page.
	 *
	 * Callback for the load-($page_hook_suffix).
	 * Called when the plugin page is loaded.
	 *
	 * @since    1.0.0
	 */
	public function load_bu_blocks_admin_pages_hook() {
	}

	/**
	 * Displays the plugin settings page.
	 *
	 * Callback for the add_options_page() in the add_plugin_admin_menu() method of this class.
	 *
	 * @since    1.0.0
	 */
	public function load_bu_blocks_admin_page() {
		include_once plugin_dir_path( __FILE__ ) . 'partials/settings-page.php';
	}

}
