<?php
/**
 * Intro Paragraph Block Dynamic Template
 *
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package bu-blocks
 */

var_dump( $attributes ); // For debugging purposes, remove in production.
// Create an array to store classnames for the block.
$classes = array();

// Trim values of the classes array after filtering out empty values.
$classes = array_map( 'trim', array_filter( $classes ) );

// Set Publication slug.
$publication_slug = apply_filters( 'bu_blocks_publication_slug', 'bu-blocks' );
$classes[]        = $publication_slug . '-block-editorial-introparagraph';

// Determine if this is a static or dynamic block.
$is_static_block = false;
if ( strpos( $content, 'wp-block-editorial-introparagraph' ) !== false ) {
	$is_static_block = true;
	// If this is a static block, recover the attributes from the saved content.
	// This is only needed if the site has older static blocks that were saved before the dynamic template was introduced.
	$attributes = bu_blocks_introparagraph_v2_get_attributes( $content, $attributes );
	if ( isset( $attributes['classes_static_v2'] ) ) {
		$classes[] = $attributes['classes_static_v2'];
	}
	$classes    = array_unique( $classes ); // Deduplicate any repeated class names.

	var_dump( $attributes ); // For debugging purposes, remove in production.
}

// Create the block wrapper attributes.
$block_wrapper_attributes = array(
	'class' => implode( ' ', $classes ),
);
// Add ID attribute if anchor is set.
if ( ! empty( $attributes['anchor'] ) ) {
	$block_wrapper_attributes['id'] = esc_attr( $attributes['anchor'] );
}

// Boolean to check if the drop cap is an image.
$is_image_drop_cap = false;

// Check if the drop cap is set and if the className indicates an image drop cap.
if ( ! empty( $attributes['dropCapImageURL'] ) && strpos( $attributes['className'], 'is-style-dropcap-image' ) !== false ) {
	$is_image_drop_cap = true;

	// Extract the first character from the content for the drop cap.
	$drop_cap_character = isset( $attributes['content'] ) ? mb_substr( $attributes['content'], 0, 1 ) : '';
	// Get the image URL for the drop cap.
	$drop_cap_image_url = $attributes['dropCapImageURL'];

	// Create the SVG structure.
	$drop_cap_svg = <<<EOD
	<svg width="0" height="0">
		<defs>
			<clipPath id="dropcap-text-$drop_cap_character">
				<text textAnchor="start"
					x="0"
					y="50%"
					dy=".404em"
					class="dropcap-filltext">$drop_cap_character</text>
			</clipPath>
		</defs>
		<g clip-path="url(#dropcap-text-$drop_cap_character)">
			<image xlink:href="$drop_cap_image_url" href="$drop_cap_image_url" width="100%" height="100%" preserveAspectRatio="none" />
		</g>
	</svg>
	EOD;
}

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes( $block_wrapper_attributes ) ); ?>>
	<?php if ( $attributes['heading'] ) : ?>
		<h4><?php echo wp_kses_post( $attributes['heading'] ); ?></h4>
	<?php endif; ?>
	<?php if ( $attributes['list'] ) : ?>
		<ul>
			<?php echo wp_kses_post( $attributes['list'] ); ?>
		</ul>
	<?php endif; ?>
	<?php if ( $attributes['content'] ) : ?>
		<div class="wp-block-editorial-introparagraph-content">
			<?php if ( $drop_cap_svg ) : ?>
				<?php echo $drop_cap_svg; ?>
			<?php endif; ?>
			<p><?php echo wp_kses_post( $attributes['content'] ); ?></p>
		</div>		
	<?php endif; ?>
</div>