<?php
/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       www.bu.edu
 * @since      1.0.0
 *
 * @package    Bu_Blocks
 * @subpackage Bu_Blocks/includes
 */

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Bu_Blocks
 * @subpackage Bu_Blocks/includes
 * @author     Boston University <id@bu.edu>
 */
class BU_Blocks {

	/**
	 * Array of blocks and their class instances.
	 *
	 * Each class instance should extend the parent `BU_Block` class
	 * so they share the same base properties and methods.
	 *
	 * @since    1.0.0
	 * @var      array $blocks An array containing "BU_Block Class name" => "path/to/file.php"
	 *                         value pairs.
	 */
	public $blocks = array();

	/**
	 * Array of BU Block instances, once all classes have been instantiated.
	 *
	 * @since    1.0.0
	 * @var      array $block_instances An array containing "BU_Block Class name" => BU_Block instance
	 *                                  value pairs.
	 */
	public $block_instances = array();


	/**
	 * Define the core functionality of the plugin.
	 *
	 * Set the plugin name and the plugin version that can be used throughout the plugin.
	 * Load the dependencies, define the locale, and set the hooks for the admin area and
	 * the public-facing side of the site.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {

		// Loads the required plugin classes and files.
		$this->load_dependencies();
		// Sets the available blocks at runtime.
		$this->blocks = $this->get_blocks();
		// Iterates through blocks and instantiates their classes.
		$this->initialize_blocks( $this->blocks );
		// Sets translation settings.
		$this->define_i18n_hooks();
		// Define admin hooks.
		$this->define_admin_hooks();

	}

	/**
	 * Load the required dependencies for this plugin.
	 *
	 * Include the following files that make up the plugin:
	 *
	 * - BU_Block. The abstract parent class that all blocks extend for shared
	 *   functionality.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function load_dependencies() {

		// The class responsible for defining all actions that occur in the admin area.
		require_once BU_BLOCKS_DIR . 'admin/class-bu-blocks-admin.php';

		// Pulls in a copy of the WP_List_Table class.
		require_once BU_BLOCKS_DIR . 'admin/class-wp-list-table.php';

		// Requires the subclass that extends WP_List_Table for the BU_Block_List_Table.
		require_once BU_BLOCKS_DIR . 'admin/class-bu-block-list-table.php';

		// Require the abstract class of the BU Block model, so subclasses can extend it.
		require_once BU_BLOCKS_DIR . 'includes/blocks/class-bu-block.php';

	}

	/**
	 * Defines all plugin internationalization and localization hooks.
	 *
	 * @since    1.0.0
	 */
	public function define_i18n_hooks() {
		add_action( 'init', array( __CLASS__, 'load_plugin_textdomain' ) );
	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {

		// Admin Class hooks.
		$plugin_admin = new BU_Blocks_Admin( $this->block_instances );

		// Add admin plugin settings page.
		add_action( 'admin_enqueue_scripts', array( $plugin_admin, 'enqueue_styles' ) );
		add_action( 'admin_menu', array( $plugin_admin, 'add_plugin_admin_menu' ) );
	}

	/**
	 * Load the plugin text domain for translation.
	 *
	 * @since    1.0.0
	 */
	public function load_plugin_textdomain() {

		load_plugin_textdomain(
			'bu-blocks',
			false,
			dirname( dirname( plugin_basename( __FILE__ ) ) ) . '/languages/'
		);

	}

	/**
	 * Retrieves plugin blocks.
	 *
	 * @since    1.0.0
	 *
	 * @return   array $this->blocks Filtered list of blocks
	 */
	public function get_blocks() {

		/**
		 * Filter to allow modifications to available BU Blocks
		 *
		 * @since    1.0.0
		 *
		 * @param    array $this->blocks The array of defalt BU Blocks baked into the plugin.
		 */
		$this->blocks = apply_filters( 'bu_blocks', $this->get_default_blocks() );

		return $this->blocks;
	}

	/**
	 * Retrieves default plugin blocks.
	 *
	 * @since    1.0.0
	 *
	 * @return   array An array of classnames that extend BU_Block as the keys,
	 *                 and their file locations as values.
	 */
	public function get_default_blocks() {

		// Stores the directory to all blocks for brevity.
		$blocks_dir = BU_BLOCKS_DIR . 'includes/blocks/';

		// Require sub classes.
		return array(
			'BU_Block_Example_1' => $blocks_dir . 'block-example-1/class-bu-block-example-1.php',
			// 'BU_Block_Example_2' => $blocks_dir . 'block-example-2/class-bu-block-example-2.php',
			// 'BU_Block_Example_3' => $blocks_dir . 'block-example-3/class-bu-block-example-3.php',
		);

	}

	/**
	 * Initializes all BU Blocks.
	 *
	 * @since    1.0.0
	 * @access   private
	 *
	 * @param    array $blocks An array of BU Blocks subclasses to instantiate, and their filepaths.
	 * @return   array $blocks An array of classnames that extend BU_Block as the keys,
	 *                 and their file locations as values.
	 */
	private function initialize_blocks( $blocks = array() ) {

		// Return immediately if empty.
		if ( empty( $blocks ) ) {
			return false;
		}

		// Iterate through blocks and call the `init` method to register them.
		foreach ( $blocks as $classname => $filepath ) {

			// Validates the file exists before requiring.
			if ( file_exists( $filepath ) ) {
				require_once $filepath;
			}

			// Validates the class exists before instantiating.
			if ( class_exists( $classname ) && ! in_array( $classname, $this->block_instances, true ) ) {
				$this->block_instances[ $classname ] = new $classname();

				// Validates the `init` method exists before calling.
				if ( method_exists( $this->block_instances[ $classname ], 'init' ) ) {
					$this->block_instances[ $classname ]->init();
				}
			}
		}

		return $this->block_instances;

	}
}
