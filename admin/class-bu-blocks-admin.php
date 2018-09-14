<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * @link       www.bu.edu
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
	 * Array of BU Block instances.
	 *
	 * See /includes/class-bu-blocks.php for when all block classes
	 * were instantiated and passed into this class's __construct method.
	 *
	 * @since    1.0.0
	 * @var      array $block_instances An array containing "BU_Block Class name" => BU_Block instance
	 *                                  value pairs.
	 */
	public $block_instances = array();

	/**
	 * WP_List_Table object
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      block_list_table    $block_list_table
	 */
	private $block_list_table;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 */
	public function __construct( $block_instances = array() ) {
		$this->block_instances = $block_instances;
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {
		wp_enqueue_style( 'bu-blocks', BU_BLOCKS_DIR_URL . '/admin/admin.css', array(), null, 'all' );
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
			'bu-blocks',
			array( $this, 'load_block_list_table' )
		);

		/*
		 * Add action that runs when page is loaded.
		 *
		 * The $page_hook_suffix can be combined with the load-($page_hook) action hook.
		 * The callback below will be called when the respective page is loaded.
		 *
		 * @since    1.0.0
		 *
		 * @link    https://codex.wordpress.org/Plugin_API/Action_Reference/load-(page).
		 */
		add_action( 'load-' . $page_hook, array( $this, 'load_block_list_table_screen_options' ) );
	}

	/**
	 * Screen options for the List Table.
	 *
	 * Callback for the load-($page_hook_suffix).
	 * Called when the plugin page is loaded.
	 *
	 * @since    1.0.0
	 */
	public function load_block_list_table_screen_options() {

		// Defines areguments for screen options.
		$arguments = array(
			'label'   => __( 'Blocks Per Page', 'bu-blocks' ),
			'default' => 5,
			'option'  => 'bu_blocks_per_page',
		);

		// Adds the screen option.
		add_screen_option( 'per_page', $arguments );

		/**
		 * Instantiates the Block List Table.
		 *
		 * Creating an instance here will allow the core WP_List_Table class to automatically
		 * load the table columns in the screen options panel.
		 */
		$this->block_list_table = new BU\Plugins\BU_Blocks\Admin\BU_Block_List_Table( $this->block_instances );

	}

	/**
	 * Display the User List Table
	 *
	 * Callback for the add_options_page() in the add_plugin_admin_menu() method of this class.
	 *
	 * @since    1.0.0
	 */
	public function load_block_list_table() {

		// Query, filter, and sort the data.
		$this->block_list_table->prepare_items();

		// Renders the List Table.
		include_once BU_BLOCKS_DIR . '/admin/partial-block-list-table-display.php';
	}

}
