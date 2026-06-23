<?php
/**
 * Renders the Slideshow Image block on the frontend.
 *
 * @link       www.bu.edu/interactive-design/
 * @since      0.3.x
 */

// Set defaults for attributes.
$defaults = array(
    'imageId' => false,
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

<li <?php echo wp_kses_data( get_block_wrapper_attributes( $block_wrapper_attributes ) ); ?>>
    <?php if ( $attributes['imageId'] ) : ?>

			<div class="splide__slide__container">
				<img
					src="<?php echo esc_url( wp_get_attachment_image_url( $attributes['imageId'], 'large' ) ); ?>"
					alt="<?php echo esc_attr( get_post_meta( $attributes['imageId'], '_wp_attachment_image_alt', true ) ); ?>"
				/>
			</div>
			<figcaption class="wp-block-bu-blocks-slideshow-image__caption">
				<?php echo esc_html( $attributes['caption'] ); ?>
			</figcaption>

    <?php endif; ?>
	</li>
