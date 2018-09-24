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
 * stylesheet and JavaScript. Registers settings page.
 *
 * @since      1.0.0
 * @package    Bu_Blocks
 * @subpackage Bu_Blocks/includes
 * @author     Boston University <id@bu.edu>
 */
class BU_Blocks_Admin {

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $plugin_name    The string used to uniquely identify this plugin.
	 *                                     Used to set slugs like the admin page menu or the
	 *                                     name of any plugin scripts/styles that are enqueued.
	 */
	private $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of the plugin. Used to bust the
	 *                                 cache on plugin scripts/styles that are enqueued.
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
			 * outside of gutenberg contexts like in the plugin settings page. Allows plugin page
			 * to leverage gutenberg JS API where the editor won't be used.
			 */
			if ( 'post.php' !== $hook_suffix && function_exists( 'gutenberg_editor_scripts_and_styles' ) ) {
				gutenberg_editor_scripts_and_styles( $hook_suffix );
			}
			wp_enqueue_script( $this->plugin_name, plugin_dir_url( __FILE__ ) . 'js/bu-blocks-admin.js', array( 'wp-blocks', 'wp-element', 'wp-components', 'wp-i18n', 'wp-block-library', 'wp-editor', 'wp-edit-post' ), $this->version, true );
			wp_localize_script(
				$this->plugin_name,
				'BU_Blocks_Settings',
				array(
					'admin_page'          => $hook_suffix, // Identifies the admin page to run correct js.
					'unregistered_blocks' => $this->get_unregistered_blocks(), // Flags blocks to hide on post edit.
				)
			);
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
			__( 'BU Blocks', 'bu-blocks' ),
			__( 'BU Blocks', 'bu-blocks' ),
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
		add_action( 'load-' . $page_hook, array( $this, 'load_bu_blocks_admin_page_hook' ) );
	}

	/**
	 * Callback to load when plugin settings page is loaded.
	 *
	 * @since    1.0.0
	 */
	public function load_bu_blocks_admin_page_hook() {
	}

	/**
	 * Displays the plugin settings page.
	 *
	 * Callback for the add_options_page() in the add_plugin_admin_menu()
	 * method of this class.
	 *
	 * @since    1.0.0
	 */
	public function load_bu_blocks_admin_page() {
		include_once plugin_dir_path( __FILE__ ) . 'partials/settings-page.php';
	}

	/**
	 * Returns unregistered blocks.
	 *
	 * Todo: Return user settings from options table.
	 *
	 * @since    1.0.0
	 *
	 * @return   array $blocks Blocks to unregister.
	 */
	public function get_unregistered_blocks() {

		// Array of blocks to unregister. In the future can retrieve via options table.
		$blocks = array(
			// 'core/video',
			// 'namespace/block-name',
			// 'etc',
		);

		/**
		 * Filters blocks to unregister.
		 *
		 * Useful for turning blocks off via hooks instead
		 * of the plugin settings page. Allows developers to
		 * potentially override settings stored in the options
		 * table.
		 *
		 * @since    1.0.0
		 * @param    array $blocks Blocks to unregister (settings stored in options table).
		 */
		$blocks = (array) apply_filters( 'bu_blocks_unregister_blocks', $blocks );

		return $blocks;

	}

}
