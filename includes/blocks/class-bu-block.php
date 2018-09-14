<?php
/**
 * The file that defines the parent BU Block class
 *
 * Sets up the shared functionality for all blocks.
 *
 * @link       www.bu.edu
 * @since      1.0.0
 *
 * @package    Bu_Blocks
 * @subpackage Bu_Blocks/includes/blocks
 */

/**
 * The file that defines the parent BU Block class.
 *
 * Sets up the shared functionality for all blocks, such as:
 *
 * - Enqueue methods for scripts and styles
 * - Default visibility in the admin settings page
 * - Categories
 * - Description
 * - Notes
 * - Origin site
 *
 * @since      1.0.0
 * @package    Bu_Blocks
 * @subpackage Bu_Blocks/includes/blocks
 * @author     Boston University <id@bu.edu>
 */
abstract class BU_Block {

	/**
	 * Defines the block activation status.
	 *
	 * This setting can be changed in the admin settings screen.
	 * Set to false to disable this block by default.
	 *
	 * @since    1.0.0
	 * @var      boolean Block status. Determines if block is active or inative.
	 */
	public $activation_status = null;

	/**
	 * Defines the block categories. Used in the admin settings screen.
	 *
	 * This will allow the block to be discoverable in the admin
	 * settings screen when browsing other blocks with same category.
	 *
	 * @since    1.0.0
	 * @var      array Block categories.
	 */
	public $categories = array();

	/**
	 * Defines the block description. Used in the admin settings screen.
	 *
	 * @since    1.0.0
	 * @var      string Block description.
	 */
	public $description = '';

	/**
	 * Defines the block name, as written for humans.
	 * Used in the admin settings screen.
	 *
	 * @since    1.0.0
	 * @var      string Block name.
	 */
	public $name = '';

	/**
	 * Defines the block notes. Used in the admin settings screen.
	 *
	 * Can be used to provide more context about the block.
	 *
	 * @since    1.0.0
	 * @var      string Block notes.
	 */
	public $notes = '';

	/**
	 * Defines the origin site the block was created for.
	 * Used in the admin settings screen.
	 *
	 * Can be used to provide more context about the block.
	 *
	 * @since    1.0.0
	 * @var      string Block origin site.
	 */
	public $origin_site = '';

	/**
	 * A blank constructor method.
	 *
	 * To initialize the block, the `init()` method is called.
	 * See BU_Blocks parent class for when blocks are initialized.
	 *
	 * The `__construct` method is empty so that the class can be
	 * instantiated at any time to retrieve basic information such as
	 * the descriotion, its status, etc.
	 *
	 * @since    1.0.0
	 */
	public function __construct() {
	}

	/**
	 * Initializes the block.
	 *
	 * Conditionally registers the block based on its status.
	 * Enqueues block scripts and styles.
	 *
	 * @since    1.0.0
	 */
	public function init() {
		$this->activation_status = $this->get_activation_status();
		$this->categories        = $this->get_categories();
		$this->description       = $this->get_description();
		$this->name              = $this->get_name();
		$this->notes             = $this->get_notes();
		$this->origin_site       = $this->get_origin_site();
		$this->define_admin_hooks();
	}

	/**
	 * Register all of the hooks related to the admin area functionality
	 * of the block.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function define_admin_hooks() {
		// enqueue admin scripts and css here.
	}

	/**
	 * Retrieves the block categories.
	 *
	 * @since    1.0.0
	 *
	 * @return   array $this->categories.
	 */
	public function get_activation_status() {

		// Return value immediately if already set.
		if ( isset( $this->activation_status ) ) {
			return $this->activation_status;
		}

		// Sets the property value.
		$this->activation_status = true;

		// Returns the property.
		return $this->activation_status;
	}

	/**
	 * Retrieves the block categories.
	 *
	 * @since    1.0.0
	 *
	 * @return   array $this->categories.
	 */
	public function get_categories() {

		// Return value immediately if already set.
		if ( ! empty( $this->categories ) ) {
			return $this->categories;
		}

		// Sets the property value.
		$this->categories = array(
			'example-category' => __( 'Example Category' ),
		);

		// Returns the property.
		return $this->categories;
	}

	/**
	 * Retrieves the block description.
	 *
	 * @since    1.0.0
	 *
	 * @return   string $this->description.
	 */
	public function get_description() {

		// Return value immediately if already set.
		if ( ! empty( $this->description ) ) {
			return $this->description;
		}

		// Sets the property value.
		$this->description = __( 'Example description of a block for xyz purpose.', 'bu-blocks' );

		// Returns the property.
		return $this->description;
	}

	/**
	 * Retrieves the block name.
	 *
	 * @since    1.0.0
	 *
	 * @return   string $this->name.
	 */
	public function get_name() {

		// Return value immediately if already set.
		if ( ! empty( $this->name ) ) {
			return $this->name;
		}

		// Sets the property value.
		$this->name = __( 'Block Name', 'bu-blocks' );

		// Returns the property.
		return $this->name;
	}

	/**
	 * Retrieves the block notes.
	 *
	 * @since    1.0.0
	 *
	 * @return   string $this->notes.
	 */
	public function get_notes() {

		// Return value immediately if already set.
		if ( ! empty( $this->notes ) ) {
			return $this->notes;
		}

		// Sets the property value.
		$this->notes = __( 'Some specific notes.', 'bu-blocks' );

		// Returns the property.
		return $this->notes;
	}

	/**
	 * Retrieves the block origin site.
	 *
	 * @since    1.0.0
	 *
	 * @return   string $this->origin_site.
	 */
	public function get_origin_site() {

		// Return value immediately if already set.
		if ( ! empty( $this->origin_site ) ) {
			return $this->origin_site;
		}

		// Sets the property value.
		$this->origin_site = __( 'bu.edu', 'bu-blocks' );

		// Returns the property.
		return $this->origin_site;
	}
}
