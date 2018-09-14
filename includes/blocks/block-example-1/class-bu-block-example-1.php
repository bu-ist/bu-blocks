<?php
/**
 * The file that defines the parent BU Block Example 1 class
 *
 * @link       www.bu.edu
 * @since      1.0.0
 *
 * @package    Bu_Blocks
 * @subpackage Bu_Blocks/includes/blocks
 */

/**
 * The file that defines the parent BU Block Example 1 class.
 *
 * Defines methods and information about the block, such as:
 *
 * - Enqueue methods for scripts and styles
 * - Default visibility in the admin settings page
 * - Categories
 * - Description
 * - Name
 * - Notes
 * - Origin site
 *
 * @since      1.0.0
 * @package    Bu_Blocks
 * @subpackage Bu_Blocks/includes/blocks/block-example-1
 * @author     Boston University <id@bu.edu>
 */
class BU_Block_Example_1 extends BU_Block {

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
		$this->name = __( 'BU Block Example 1', 'bu-blocks' );

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
