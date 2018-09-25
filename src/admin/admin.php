<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * @link       www.bu.edu/interactive-design/
 * @since      1.0.0
 *
 * @package    BU_Blocks
 * @subpackage BU_Blocks/src
 */

namespace BU\Plugins\BU_Blocks;

/**
 * Registers stylesheets for the admin area.
 *
 * @since    1.0.0
 *
 * @param    string $hook_suffix The name of the admin page.
 */
function admin_enqueue_styles( $hook_suffix ) {

	// Retrieve all admin pages that admin scripts should be enqueued on.
	$admin_pages = namespace\get_admin_pages_for_scripts();

	// Targets specific admin pages to enqueue bu-blocks styles.
	if ( in_array( $hook_suffix, $admin_pages, true ) ) {
		wp_enqueue_style(
			'bu-blocks-admin-css', // Handle.
			plugin_dir_url( __FILE__ ) . 'css/bu-blocks-admin.css', // Admin CSS.
			array(), // Dependencies.
			filemtime( plugin_dir_path( __FILE__ ) . 'css/bu-blocks-admin.css' ) // Version: filemtime — Gets file modification time.
		);
	}

}

/**
 * Register the JavaScript for the admin area.
 *
 * @since    1.0.0
 *
 * @param    string $hook_suffix The name of the admin page.
 */
function admin_enqueue_scripts( $hook_suffix ) {

	// Retrieve all admin pages that admin scripts should be enqueued on.
	$admin_pages = namespace\get_admin_pages_for_scripts();

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
	 * Until then, the gutenberg js assets must be enqueued on the plugin settings
	 * page so the plugin can detect all registered blocks via the JavaScript API
	 * that gutenberg gives us, using `wp.blocks.getBlockTypes()`.
	 */

	// Targets specific admin pages to enqueue bu-blocks scripts.
	if ( in_array( $hook_suffix, $admin_pages, true ) ) {

		// Retrieve all blocks to unregister.
		$unregistered_blocks = namespace\get_unregistered_blocks();

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

		// Enqueues the admin script.
		wp_enqueue_script(
			'bu-blocks-admin-js', // Handle.
			plugin_dir_url( __FILE__ ) . 'js/bu-blocks-admin.js',  // Admin script file.
			array( 'wp-blocks', 'wp-element', 'wp-components', 'wp-i18n', 'wp-block-library', 'wp-editor', 'wp-edit-post' ), // Dependencies, defined above.
			filemtime( plugin_dir_path( __FILE__ ) . 'js/bu-blocks-admin.js' ), // Version: filemtime — Gets file modification time.
			true // Enqueue the script in the footer.
		);

		// Localizes plugin settings available to the admin script.
		wp_localize_script(
			'bu-blocks-admin-js',
			'BU_Blocks_Settings',
			array(
				'admin_page'          => $hook_suffix, // Identifies the admin page to run correct js.
				'unregistered_blocks' => $unregistered_blocks, // Flags blocks to hide on post edit.
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
function get_admin_pages_for_scripts() {
	return array(
		'post.php',                // The post edit screen.
		'settings_page_bu-blocks', // The plugin settings screen.
	);
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
function get_unregistered_blocks() {

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


/**
 * Adds a settings page.
 *
 * @since    1.0.0
 */
function admin_menu() {

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
		'bu-blocks',
		__NAMESPACE__ . '\\load_bu_blocks_admin_page'
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
	add_action( 'load-' . $page_hook, __NAMESPACE__ . '\\load_bu_blocks_admin_page_hook' );
}

/**
 * Callback to load when plugin settings page is loaded.
 *
 * @since    1.0.0
 */
function load_bu_blocks_admin_page_hook() {
}

/**
 * Displays the plugin settings page.
 *
 * Callback for the add_options_page() in the add_plugin_admin_menu()
 * method of this class.
 *
 * @since    1.0.0
 */
function load_bu_blocks_admin_page() {
	?>
	<div class="wrap">
		<h1><?php echo esc_html( get_admin_page_title() ); ?></h1>
		<div id="bu-blocks-wp-list-table">
			<div id="bu-blocks-post-body">
				<form id="bu-blocks-list-form" method="get">
					<input type="hidden" name="page" value="<?php echo $_REQUEST['page']; ?>" />
					<?php
					/**
					 * Adds the .gutenberg__editor div.
					 *
					 * This div is required for the gutenberg scripts to run,
					 * so wp.blocks.getBlockTypes() can be called and retrieve
					 * all blocks registered by WordPress and 3rd party plugins
					 * and themes.
					 */
					?>
					<div id="editor" class="gutenberg__editor"></div>
				</form>
			</div>
		</div>
	</div>
	<?php
}
