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

$attributes = wp_parse_args( $attributes, $defaults );

// Create an array to store classnames for the block.
$classes = array();

// Add base class.
if ( ! empty( $attributes['className'] ) ) {
	$classes[] = $attributes['className'];
}

// Create the block wrapper attributes.
$block_wrapper_attributes = array(
	'class' => implode( ' ', $classes ),
);

?>
<h2>Dynamic Test</h2>
<div <?php echo wp_kses_data( get_block_wrapper_attributes( $block_wrapper_attributes ) ); ?>>
	<div class="wp-block-bu-blocks-slideshow-container">
		<ul class="wp-block-bu-blocks-slideshow-list">
			<?php echo $content; // This outputs the InnerBlocks content ?>
		</ul>
	</div>
</div>
