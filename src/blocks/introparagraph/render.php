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

// Create an array to store additional classnames for the block.
$extra_classes = array();
// Default to no drop cap.
$has_dropcap        = false;
$is_style           = false;
$is_image_drop_cap  = false;

// Determine if this is a static or dynamic block.
if ( strpos( $content, 'wp-block-editorial-introparagraph' ) !== false ) {
	// If this is a static block, recover the attributes from the saved content.
	// This is only needed if the site has older static blocks that were saved before the dynamic template was introduced.
	$attributes = bu_blocks_introparagraph_v2_get_attributes( $content, $attributes );	
}

// Convert $attributes['className'] to make checking for settings easier.
$classNameArray = explode( ' ', $attributes['className'] );

// Set Publication slug.
// ToDo: change this in the future to a filter of the class name itself so we can
// remove this publication specific logic from BU Blocks. If it's just a classname filter
// then Prepress can just inject the class it wants to add instead of passing only the
// publication slug and building the class here. The filter can return the block name
// and Prepress can construct the <publicationname>-<blockname> class.
$publication_slug = apply_filters( 'bu_blocks_publication_slug', 'bu-blocks' );
$extra_classes[]  = $publication_slug . '-block-editorial-introparagraph';


// Check if there's a dropcap style.
// By testing if $classNameArray contains a class that begins with `is-style-dropcap`
foreach ( $classNameArray as $class ) {
	if ( strpos( $class, 'is-style-dropcap' ) === 0 ) {
		$has_dropcap = true;
		// Trim `is-style` from class.
		$is_style = str_replace( 'is-style-', '', $class );
		// Add `has-dropcap` class.
		$extra_classes[] = 'has-dropcap';
		break;
	}
}

// Check if the drop cap is set and if the className indicates an image drop cap.
if ( ! empty( $attributes['dropCapImageURL'] ) && $is_style === 'dropcap-image' ) {
	$is_image_drop_cap = true;

	// Extract the first character from the content for the drop cap.
	$drop_cap_character = isset( $attributes['content'] ) ? mb_substr( $attributes['content'], 0, 1 ) : '';
	// Get the image URL for the drop cap.
	$drop_cap_image_url = $attributes['dropCapImageURL'];

	// Generate unique ID for the clipPath to avoid conflicts if multiple blocks are on the same page.
	$clippath_prefix = 'dropcap-text-' . $drop_cap_character . '-';
	$clippath_id = $clippath_prefix . wp_generate_uuid4(  );

	// Create the SVG structure.
	$drop_cap_svg = <<<EOD
	<svg width="0" height="0" class="wp-block-editorial-introparagraph-svg-drop-cap">
		<defs>
			<clipPath id="$clippath_id">
				<text textAnchor="start"
					x="0"
					y="50%"
					dy=".404em"
					class="dropcap-filltext">$drop_cap_character</text>
			</clipPath>
		</defs>
		<g clip-path="url(#$clippath_id)">
			<image xlink:href="$drop_cap_image_url" href="$drop_cap_image_url" width="100%" height="100%" preserveAspectRatio="none" />
		</g>
	</svg>
	EOD;
}

// Dedupe any classes in $extra_classes that already exist in $classNameArray.
$extra_classes = array_diff( $extra_classes, $classNameArray );

// Create the block wrapper attributes.
$block_wrapper_attributes = array(
	'class' => implode( ' ', $extra_classes ),
);
// Add ID attribute if anchor is set.
if ( ! empty( $attributes['anchor'] ) ) {
	$block_wrapper_attributes['id'] = esc_attr( $attributes['anchor'] );
}
?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes( $block_wrapper_attributes ) ); ?>>
	<?php if ( $attributes['heading'] ) : ?>
		<h4 class="wp-block-editorial-introparagraph-teaser-heading"><?php echo wp_kses_post( $attributes['heading'] ); ?></h4>
	<?php endif; ?>
	<?php if ( $attributes['list'] ) : ?>
		<ul class="wp-block-editorial-introparagraph-toc">
			<?php echo wp_kses_post( $attributes['list'] ); ?>
		</ul>
	<?php endif; ?>
	<?php if ( $attributes['content'] ) : ?>
		<div class="wp-block-editorial-introparagraph-content">
			<?php
				if ( $is_image_drop_cap ) {
					echo $drop_cap_svg;
				}
			?>
			<?php if ( $attributes['content'] ) : ?>
				<p class="wp-block-editorial-introparagraph-content-text">
					<?php echo wp_kses_post( $attributes['content'] ); ?>
				</p>
			<?php endif; ?>
		</div>
	<?php endif; ?>
</div>