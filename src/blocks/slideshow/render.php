<?php
/**
 * Renders the Slideshow block on the frontend.
 *
 * @link       www.bu.edu/interactive-design/
 * @since      0.3.x
 */

// Set defaults for attributes.
$defaults = array(

);
var_dump($attributes);
$attributes = wp_parse_args( $attributes, $defaults );

// Create an array to store classnames for the block.
$classes = array();

// Add base class.
if ( ! empty( $attributes['className'] ) ) {
	$classes[] = $attributes['className'];
}

// Add Classes for Color Settings.
if ( isset( $attributes['backgroundColor'] ) && ! empty( $attributes['backgroundColor'] ) ) {
	$classes[] = 'has-background';
	$classes[] = 'has-' . $attributes['backgroundColor'] . '-background-color';
}
if ( isset( $attributes['textColor'] ) && ! empty( $attributes['textColor'] ) ) {
	$classes[] = 'has-text-color';
	$classes[] = 'has-' . $attributes['textColor'] . '-color';
}

// Build Splide Settings from attributes.
$splide_settings = array(
	'type' => 'loop',
	'autoplay' => false,
);

// Add aspect ratio settings if not set to 'custom'.
// Converts general Aspect Ratio options in Block UI to
// the corresponding heightRatio value needed for Splide.
// This keeps the Block UI separate from the specific
// implementation details of the SplideJS library.
if ( isset( $attributes['aspectRatio'] ) && 'custom' !== $attributes['aspectRatio'] ) {
	if ( '16:9' === $attributes['aspectRatio'] ) {
		$splide_settings['heightRatio'] = 0.5625;
	} elseif ( '4:3' === $attributes['aspectRatio'] ) {
		$splide_settings['heightRatio'] = 0.75;
	} elseif ( '1:1' === $attributes['aspectRatio'] ) {
		$splide_settings['heightRatio'] = 1;
	} elseif ( '3:4' === $attributes['aspectRatio'] ) {
		$splide_settings['heightRatio'] = 1.3333;
	} elseif ( '9:16' === $attributes['aspectRatio'] ) {
		$splide_settings['heightRatio'] = 1.7778;
	}
}

// If custom height, output Splide Height Setting with the value from the Block UI.
if ( isset( $attributes['aspectRatio'] ) && 'custom' === $attributes['aspectRatio'] ) {
	$splide_settings['height'] = $attributes['height'];
}

// If perPage attribute is set, add it to the Splide settings.
if ( isset( $attributes['perPage'] ) && ! empty( $attributes['perPage'] ) ) {
	$splide_settings['perPage'] = $attributes['perPage'];
}

// Create the block wrapper attributes.
$block_wrapper_attributes = array(
	'class' => implode( ' ', $classes ),
	'data-splide-settings' => wp_json_encode( $splide_settings ),
);

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes( $block_wrapper_attributes ) ); ?>>
	<div class="wp-block-bu-blocks-slideshow__container">
		<ul class="wp-block-bu-blocks-slideshow__list">
			<?php echo $content; // This outputs the InnerBlocks content ?>
		</ul>
	</div>
</div>
