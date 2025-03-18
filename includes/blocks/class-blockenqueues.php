<?php
/**
 * Class to manage block assets on the front end of the website where the plugin is used.
 *
 * This was just quickly copied from BU Stats so the assets in this prototype could be enqueued for now.
 *
 * @package BU
 */

namespace BU\Plugins\BU_Blocks;

/**
 * Class Assets
 */
class BlockEnqueues {


	/**
	 * Assets constructor.
	 *
	 * @since 0.1.0
	 */
	public function __construct() {
		// Enqueue front-end scripts & styles.
		add_action( 'wp_enqueue_scripts', array( $this, 'frontend_block_styles' ) );
		// add_action( 'wp_enqueue_scripts', array( $this, 'block_decorative_styles' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'frontend_block_scripts' ) );
		// Enqueue block editor scripts & styles.
		// add_action( 'enqueue_block_editor_assets', array( $this, 'block_editor_styles' ) );
		// add_action( 'enqueue_block_editor_assets', array( $this, 'block_decorative_styles' ) );
		add_action( 'enqueue_block_editor_assets', array( $this, 'block_editor_scripts' ) );
	}

	/**
	 * Enqueue Frontend styles.
	 *
	 * @since 0.1.0
	 */
	public function frontend_block_styles() {
		// Enqueue any other frontend styles or scripts needed related to blocks specifically.
	}

	/**
	 * Enqueue Decorative Block styles.
	 *
	 * @since 0.1.0
	 */
	public function block_decorative_styles() {

		/**
		 * Register Decorative Block styles.
		 *
		 * Dependency: The Block Common Styles so common/shared styles are enqueued before
		 * the styles for the block, allowing the block styles to override the common styles.
		 */
		// if ( BU_BLOCKS_decorative_block_styles() ) {
		// 	wp_enqueue_style(
		// 		PLUGIN_SLUG . '-decorative-styles',
		// 		BU_BLOCKS_BLOCKS_BUILD_URL . '/css/blocks/blocks-decorative.css',
		// 		array(),
		// 		filemtime( BU_BLOCKS_BLOCKS_BUILD_DIR . 'css/blocks/blocks-decorative.css' ),
		// 		'all'
		// 	);
		// }
	}

	/**
	 * Enqueue Frontend Javascript.
	 *
	 * When the block defines render_callback during registration in PHP, then the block author is responsible for enqueuing the script.
	 *
	 * @since 0.2.0
	 */
	public function frontend_block_scripts() {

		$block_jsons = glob( BU_BLOCKS_BLOCKS_BUILD_DIR . '/*/view.js' );

		foreach ( $block_jsons as $path ) {

			// Get the folder the block is in.
			$block_folder_path = dirname( $path );

			// Get the folder name of the block.
			$block_folder_name = basename( $block_folder_path );

			$asset_file = include $block_folder_path . '/view.asset.php';

			// Enqueue frontend `view.js` files for each block.
			wp_enqueue_script(
				PLUGIN_SLUG . '-' . $block_folder_name . '-frontend',
				BU_BLOCKS_BLOCKS_BUILD_URL . '/' . $block_folder_name . '/view.js',
				$asset_file['dependencies'],
				$asset_file['version'],
				array(
					'strategy' => 'defer',
				),
			);
		}
	}

	/**
	 * Enqueue editor styles
	 *
	 * @since 0.2.0
	 */
	// public function block_editor_styles() {

	// 	// Enqueue the Main stylesheet for the plugin if needed for non-block styles.
	// 	wp_enqueue_style(
	// 		PLUGIN_SLUG . '-block-editor',
	// 		BU_BLOCKS_BLOCKS_BUILD_URL . '/css/block-editor.css',
	// 		array(),
	// 		filemtime( BU_BLOCKS_BLOCKS_BUILD_URL . '/css/block-editor.css' ),
	// 	);
	// }

	/**
	 * Enqueue editor javascript
	 *
	 * @since 0.2.0
	 */
	public function block_editor_scripts() {
		$block_jsons = glob( BU_BLOCKS_BLOCKS_BUILD_DIR . '/*/index.js' );

		foreach ( $block_jsons as $path ) {

			// Get the folder the block is in.
			$block_folder_path = dirname( $path );

			// Get the folder name of the block.
			$block_folder_name = basename( $block_folder_path );

			$asset_file = include $block_folder_path . '/index.asset.php';

			// Enqueue block editor `index.js` files for each block.
			wp_enqueue_script(
				PLUGIN_SLUG . '-' . $block_folder_name . '-editor',
				BU_BLOCKS_BLOCKS_BUILD_URL . '/' . $block_folder_name . '/index.js',
				$asset_file['dependencies'],
				$asset_file['version'],
				array(
					'strategy' => 'defer',
				),
			);
		}
	}
}

// Initialize the class.
$block_enqueues = new BlockEnqueues();
