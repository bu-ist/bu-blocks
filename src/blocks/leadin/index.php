<?php
/**
 * Server-side rendering of the `bu/leadin` block.
 *
 * @package BU_Blocks
 */

namespace BU\Plugins\BU_Blocks\Blocks\Leadin;

add_action( 'init', __NAMESPACE__ . '\\register_block' );

/**
 * Build a list of class names for the leadin block based
 * on the provided attributes.
 *
 * @param array $attributes            A list of block attributes.
 * @param bool  $style_emphasize_text  Whether the emphasize text style is applied to the block.
 * @param bool  $style_text_over_image Whether the text over image style is applied to the block.
 * @param bool  $style_side_by_side    Whether the side by side style is applied to the block.
 *
 * @return string A space separated string of class names.
 */
function get_block_classes( $attributes, $style_emphasize_text, $style_text_over_image, $style_side_by_side ) {

	// Build array of classes from the provide attributes.
	$classes = array(
		'wp-block-editorial-leadin',
		bu_prepress_get_publication_class( '-block-editorial-leadin' ),
		$attributes['className'],
		( $attributes['backgroundUrl'] ) ? 'has-media' : '',
		( $attributes['wide'] && $style_side_by_side ) ? 'has-wider' : '',
		( $attributes['flip'] && $style_side_by_side ) ? 'has-flip' : '',
		( $attributes['box'] && ( $style_emphasize_text || $style_text_over_image || $style_side_by_side ) ) ? 'has-box' : '',
		( $attributes['imageFocus'] ) ? 'has-media-focus-' . $attributes['imageFocus'] : '',
		( $attributes['textPositionX'] && $style_text_over_image ) ? 'has-text-position-' . $attributes['textPositionX'] : '',
		( $attributes['textPositionY'] && $style_text_over_image ) ? 'has-text-position-' . $attributes['textPositionY'] : '',
		( $attributes['themeColor'] ) ? 'has-' . $attributes['themeColor'] . '-theme' : '',
	);

	// Trim values of the classes array after filtering out empty values.
	$classes = array_map( 'trim', array_filter( $classes ) );

	// Turn classes array into a space delimited string before returning.
	$classes = implode( ' ', $classes );

	return $classes;
}

/**
 * Renders the `core/latest-posts` block on server.
 *
 * @param array $attributes The block attributes.
 *
 * @return string Returns the post content with latest posts added.
 */
function render_block( $attributes ) {
	$defaults = array(
		'backgroundAlt'     => '',
		'backgroundOpacity' => 100,
		'backgroundType'    => '',
		'backgroundUrl'     => '',
		'box'               => false,
		'boxOpacity'        => 100,
		'caption'           => '',
		'className'         => '',
		'deck'              => '',
		'flip'              => false,
		'head'              => '',
		'imageFocus'        => 'center-middle',
		'metabar'           => true,
		'primaryTerm'       => '',
		'textPositionX'     => 'x-center',
		'textPositionY'     => '',
		'themeColor'        => '',
		'wide'              => false,
	);

	$attributes = wp_parse_args( $attributes, $defaults );

	// Determine which style is applied to the block.
	$style_emphasize_text  = strpos( $attributes['className'], 'is-style-emphasis-on-text' ) !== false;
	$style_text_over_image = strpos( $attributes['className'], 'is-style-text-over-image' ) !== false;
	$style_side_by_side    = strpos( $attributes['className'], 'is-style-side-by-side' ) !== false;

	// Retrieve the classes to attach to the block.
	$classes = get_block_classes( $attributes, $style_emphasize_text, $style_text_over_image, $style_side_by_side );

	$box_classes = 'container-words-inner';
	if ( $attributes['box'] && 100 !== $attributes['boxOpacity'] && ( $style_emphasize_text || $style_text_over_image ) ) {
		$box_classes .= ' has-opacity-' . absint( $attributes['boxOpacity'] );
	}

	ob_start();
	?>
	<div class="<?php echo esc_attr( $classes ); ?>">
		<div class="container-lockup">

			<div class="wp-block-leadin-media">
				<?php do_action( 'bu_blocks_background', $attributes ); ?>
			</div>

			<div class="container-words-outer">
				<div class="<?php echo esc_attr( $box_classes ); ?>">

					<?php if ( $attributes['primaryTerm'] ) : ?>
						<span class="wp-prepress-tag"><?php echo esc_html( $attributes['primaryTerm'] ); ?></span>
					<?php endif; ?>

					<h1 class="head"><?php echo wp_kses_post( $attributes['head'] ); ?></h1>

					<?php if ( $attributes['deck'] ) : ?>
						<h4 class="deck"><?php echo wp_kses_post( $attributes['deck'] ); ?></h4>
					<?php endif; ?>

				</div>
			</div>

		</div>
		<?php if ( $attributes['caption'] ) : ?>
			<p class="wp-block-editorial-leadin-caption wp-prepress-component-caption"><?php echo wp_kses_post( $attributes['caption'] ); ?></h4>
		<?php endif; ?>
	</div>

	<?php do_action( 'bu_blocks_leadin_meta_bar', $attributes['metabar'] ); ?>

	<?php
	$html = ob_get_clean();

	return $html;
}

/**
 * Registers the `bu/leadin` block on server.
 */
function register_block() {
	$shared_args = array(
		'type'    => 'string',
		'default' => '',
	);

	register_block_type(
		'bu/leadin',
		array(
			'attributes'      => array(
				'backgroundAlt'     => $shared_args,
				'backgroundOpacity' => array(
					'type'    => 'number',
					'default' => 100,
				),
				'backgroundType'    => $shared_args,
				'backgroundUrl'     => $shared_args,
				'box'               => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'boxOpacity'        => array(
					'type'    => 'number',
					'default' => 100,
				),
				'caption'           => $shared_args,
				'className'         => $shared_args,
				'deck'              => $shared_args,
				'flip'              => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'head'              => $shared_args,
				'imageFocus'        => array(
					'type'    => 'string',
					'default' => 'center-middle',
				),
				'metabar'           => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'primaryTerm'       => $shared_args,
				'textPositionX'     => array(
					'type'    => 'string',
					'default' => 'x-center',
				),
				'textPositionY'     => $shared_args,
				'themeColor'        => $shared_args,
				'wide'              => array(
					'type'    => 'boolean',
					'default' => false,
				),
			),
			'render_callback' => __NAMESPACE__ . '\\render_block',
		)
	);
}
