<?php
/**
 * Class to manage Block Supports for BU Blocks.
 *
 * @package bu-blocks
 */

 namespace BU\Plugins\BU_Blocks;


 /**
 * Class Assets
 */
class BlockSupports {
	/**
	 * Constructor.
	 *
	 * @since 2.0.0
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'setup' ) );
	}

	/**
	 * Remove Block Supports features if Child Themes disable them.
	 *
	 * @since 2.0.0
	 */
	public function setup() {
		// Allow older themes to remove the color supports added in 2.0.0.
		// By default with v2.0.0 this filter is set to true and the color support is not removed.
		$colors_enabled = apply_filters( 'bu_blocks_supports_color', true );

		// remove color if $colors_enabled is false. 
		if ( false === $colors_enabled ) {
			add_filter( 'block_type_metadata', array( $this, 'remove_block_supports_color' ) );
		}

		// Allow older themes to remove the spacing supports added in 2.0.0.
		// By default with v2.0.0 this filter is set to true and the spacing support is not removed.
		$spacing_enabled = apply_filters( 'bu_blocks_supports_spacing', true );

		// remove color if $colors_enabled is false. 
		if ( false === $spacing_enabled ) {
			add_filter( 'block_type_metadata', array( $this, 'remove_block_supports_spacing' ) );
		}
	}

	/**
	 * Removes Block Supports: Color from BU Blocks
	 *
	 * @param array $metadata
	 * @return array The modified $metadata with color support removed.
	 * 
	 * @since 2.0.0
	 */
	public function remove_block_supports_color( $metadata ) {
		$registered_block_names = bu_blocks_get_registered_block_names();

		// Only apply the filter to blocks registered in BU-Blocks using bu_blocks_get_registered_block_names().
		if ( ! isset( $metadata['name'] ) || ! in_array( $metadata['name'], $registered_block_names, true ) ) {
			return $metadata;
		}

		// Check if 'supports' key exists.
		if ( isset( $metadata['supports'] ) && isset( $metadata['supports']['color'] ) ) {

			// Remove Color support.
			$metadata['supports']['color'] = false;
		}
		
		return $metadata;
	}

	/**
	 * Removes Block Supports: Spacing from BU Blocks
	 *
	 * @param array $metadata
	 * @return array The modified $metadata with Spacing support removed.
	 * 
	 * @since 2.0.0
	 */
	public function remove_block_supports_spacing( $metadata ) {
		$registered_block_names = bu_blocks_get_registered_block_names();

		// Only apply the filter to blocks registered in BU-Blocks using bu_blocks_get_registered_block_names().
		if ( ! isset( $metadata['name'] ) || ! in_array( $metadata['name'], $registered_block_names, true ) ) {
			return $metadata;
		}

		// Check if 'supports' key exists.
		if ( isset( $metadata['supports'] ) && isset( $metadata['supports']['spacing'] ) ) {

			// Remove Spacing support.
			$metadata['supports']['spacing']['margin'] = false;
			$metadata['supports']['spacing']['padding'] = false;
		}
		
		return $metadata;
	}

}


// Initialize the class.
$bu_blocks_block_supports = new BlockSupports();



