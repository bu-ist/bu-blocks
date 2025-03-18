<?php
/**
 * Class to manage registration of blocks and assets within the editor.
 *
 * @package plugin-slug
 */

 namespace BU\Plugins\BU_Blocks;

/**
 * Class Assets
 */
class Blocks {


	/**
	 * Constructor.
	 *
	 * @since 0.1.0
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'setup' ) );
		add_action( 'init', array( $this, 'register_blocks' ) );
		add_filter( 'block_categories_all', array( $this, 'custom_block_category' ) );
	}

	/**
	 * Setup dependencies for block registration.
	 *
	 * @since 0.1.0
	 */
	public function setup() {
		// Register Shared / Common styles.
		wp_register_style(
			BU_BLOCKS . '-common-styles',
			BU_BLOCKS_BLOCKS_BUILD_URL . '/css/blocks/blocks-common.css',
			array(),
			filemtime( BU_BLOCKS_BLOCKS_BUILD_DIR . '/css/blocks/blocks-common.css' ),
			'all'
		);

		/**
		 * Register Bundled Block styles.
		 *
		 * Dependency: The Block Common Styles so common/shared styles are enqueued before
		 * the styles for the block, allowing the block styles to override the common styles.
		 */
		if ( bu_blocks_bundle_block_styles() ) {
			wp_register_style(
				BU_BLOCKS . '-bundled-styles',
				BU_BLOCKS_BLOCKS_BUILD_URL . '/css/blocks/blocks-bundled.css',
				array( BU_BLOCKS . '-common-styles' ),
				filemtime( BU_BLOCKS_BLOCKS_BUILD_DIR . '/css/blocks/blocks-bundled.css' ),
				'all'
			);
		}
	}

	/**
	 * Create custom block category. Blocks can be assigned to this category the "category" node in block.json.
	 *
	 * @link https://developer.wordpress.org/reference/hooks/block_categories_all/
	 * @since 0.1.0
	 */
	public function custom_block_category( $categories ) {
		array_unshift(
			$categories,
			array(
				'slug'  => BU_BLOCKS . '-block-category',
				'title' => 'BU: Blocks 2.0 Block Category (PHP)',
			)
		);

		return $categories;
	}

	/**
	 * Register Blocks in the Plugin
	 *
	 * @since 0.1.0
	 */
	public function register_blocks() {
		if ( file_exists( BU_BLOCKS_BLOCKS_BUILD_DIR ) ) {
			$block_jsons = glob( BU_BLOCKS_BLOCKS_BUILD_DIR . '/*/block.json' );

			foreach ( $block_jsons as $path ) {

				// Get the folder the block is in.
				$block_folder_path = dirname( $path );

				// Get the folder name of the block.
				$block_folder_name = basename( $block_folder_path );

				// Register Block Arguments Array.
				$block_options = [];

				// Standard path to a block's render template.
				$block_render_file_path = $block_folder_path . '/render.php';

				if ( file_exists( $block_render_file_path ) ) {

					// The block has a render.php file, add a render_callback when registering the block.
					$block_options['render_callback'] = function ( $attributes, $content, $block ) use ( $block_render_file_path, $block_folder_name ) {

						// Include the render.php file and return it's output using output buffering.
						ob_start();

						// Checks the theme for a render template override.
						$block_render_theme_override = get_stylesheet_directory() . '/block-render/' . $block_folder_name . '.php';

						if ( file_exists( $block_render_theme_override ) ) {
							include $block_render_theme_override;
						} else {
							include $block_render_file_path;
						}
						return ob_get_clean();
					};
				}

				if ( bu_blocks_bundle_block_styles() ) {
					// Don't load a stylesheet for this block, as we are loading a single stylesheet with all block styles bundled together elsewhere.
					$block_options['style'] = BU_BLOCKS . '-bundled-styles';
				} else {
					wp_register_style(
						$block_folder_name . '-styles',
						BU_BLOCKS_BLOCKS_BUILD_URL . '/' . $block_folder_name . '/style-index.css',
						array( BU_BLOCKS . '-common-styles' ),
						filemtime( BU_BLOCKS_BLOCKS_BUILD_DIR . '/' . $block_folder_name . '/style-index.css' )
					);

					// Add the individual block's stylesheet to the arguments so WP registers.
					$block_options['style'] = $block_folder_name . '-styles';
				}

				$result = register_block_type_from_metadata( $block_folder_path, $block_options );
				var_dump($result);

			}
		}
	}
}

// Initialize the class.
$bu_blocks_blocks = new Blocks();
