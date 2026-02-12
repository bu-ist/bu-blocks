<?php
/**
 * Pullquote Block Dynamic Template
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

// Set defaults for attributes.
$defaults = array(
	'quote'              => array(),
	'photoCredit'        => '',
	'cite'               => array(),
	'imageFocus'         => 'center-middle',
	'className'          => '',
	'themeColor'         => '',
	'textColor'          => '',
	'backgroundId'       => null,
	'backgroundType'     => '',
	'backgroundUrl'      => '',
	'backgroundOpacity'  => 100,
	'backgroundAlt'      => '',
	'backgroundCaption'  => '',
	'backgroundAutoplay' => false,
);

$attributes = wp_parse_args( $attributes, $defaults );

// Determine which style is applied to the block.
$is_style_default = strpos( $attributes['className'], 'is-style-modern' ) === false && strpos( $attributes['className'], 'is-style-pop' ) === false;
$is_style_modern  = strpos( $attributes['className'], 'is-style-modern' ) !== false;
$is_style_pop     = strpos( $attributes['className'], 'is-style-pop' ) !== false;

// Create an array to store classnames for the block.
$classes = array();

// Add base class.
if ( ! empty( $attributes['className'] ) ) {
	$classes[] = $attributes['className'];
}

// Add image-related classes if background is set and style is not pop.
if ( $attributes['backgroundId'] && ! $is_style_pop ) {
	$classes[] = 'has-image';
}

// Add image focus class if imageFocus is set and style is not pop.
if ( $attributes['imageFocus'] && ! $is_style_pop ) {
	$classes[] = 'has-image-focus-' . esc_attr( $attributes['imageFocus'] );
}

// Add theme color class if themeColor is set.
if ( $attributes['themeColor'] ) {
	$classes[] = 'has-' . esc_attr( $attributes['themeColor'] ) . '-theme';
}

// Add text color class if textColor is set.
if ( $attributes['textColor'] ) {
	$classes[] = 'has-' . esc_attr( $attributes['textColor'] ) . '-theme-text';
}

// Trim values of the classes array after filtering out empty values.
$classes = array_map( 'trim', array_filter( $classes ) );

// Check if $content contains 'wp-block-bu-pullquote' string from older static version of block.
// If this is a static block, recover the attributes from the saved content.
// This is only needed if the site has older static blocks that were saved before the dynamic template was introduced.
if ( ( empty( $attributes['quote'] ) || ( is_array( $attributes['quote'] ) && empty( $attributes['quote'] ) ) ) && strpos( $content, 'wp-block-bu-pullquote' ) !== false ) {
	$attributes = bu_blocks_pullquote_v1_get_attributes( $content, $attributes );
	if ( isset( $attributes['classes_static_v1'] ) ) {
		$classes[] = $attributes['classes_static_v1'];
		$classes   = array_unique( $classes ); // Deduplicate any repeated class names.
	}
}

// Convert quote and cite from array to string if needed.
$quote_content = '';
if ( is_array( $attributes['quote'] ) ) {
	// Convert children array to HTML.
	$quote_content = wp_kses_post( implode( '', $attributes['quote'] ) );
} elseif ( is_string( $attributes['quote'] ) ) {
	$quote_content = wp_kses_post( $attributes['quote'] );
}

$cite_content = '';
if ( is_array( $attributes['cite'] ) ) {
	// Convert children array to HTML.
	$cite_content = wp_kses_post( implode( '', $attributes['cite'] ) );
} elseif ( is_string( $attributes['cite'] ) ) {
	$cite_content = wp_kses_post( $attributes['cite'] );
}

// Create the block wrapper attributes.
$block_wrapper_attributes = array(
	'class' => implode( ' ', $classes ),
);

// Add ID attribute if anchor is set.
if ( ! empty( $attributes['anchor'] ) ) {
	$block_wrapper_attributes['id'] = esc_attr( $attributes['anchor'] );
}


?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes( $block_wrapper_attributes ) ); ?>>
	<div class="wp-block-bu-pullquote-inner">
		<?php if ( $is_style_default && $attributes['backgroundId'] ) : ?>
			<figure>
				<?php do_action( 'bu_blocks_background', $attributes, 'large' ); ?>
			</figure>
		<?php endif; ?>
		<blockquote class="wp-block-bu-pullquote-blockquote">
			<div class="container-lockup">
				<div class="container-icon-outer">
					<div class="container-icon-inner">
						<?php if ( $is_style_modern && $attributes['backgroundId'] ) : ?>
							<?php do_action( 'bu_blocks_background', $attributes, 'large' ); ?>
						<?php endif; ?>
					</div>
				</div>
				<div class="container-text">
					<hr />
					<?php if ( $quote_content ) : ?>
						<div class="quote-sizing"><?php echo $quote_content; ?></div>
					<?php endif; ?>
					<?php if ( $cite_content ) : ?>
						<footer class="caption"><?php echo $cite_content; ?></footer>
					<?php endif; ?>
					<hr />
				</div>
				<?php if ( $is_style_modern && $attributes['photoCredit'] ) : ?>
					<div class="wp-component-media-credit">
						<?php echo wp_kses_post( $attributes['photoCredit'] ); ?>
					</div>
				<?php endif; ?>
			</div>
		</blockquote>
	</div>
	<?php if ( $is_style_default && $attributes['photoCredit'] ) : ?>
		<div class="wp-component-media-credit">
			<?php echo wp_kses_post( $attributes['photoCredit'] ); ?>
		</div>
	<?php endif; ?>
</div>

