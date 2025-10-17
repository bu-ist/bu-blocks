<?php
/**
 * Leadin Block Dynamic Template
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

// Todo: This may be able to be removed. Previous version of block used it.
$defaults = array(
	'backgroundAlt'      => '',
	'backgroundAutoplay' => false,
	'backgroundOpacity'  => 100,
	'backgroundType'     => '',
	'backgroundUrl'      => '',
	'box'                => false,
	'boxOpacity'         => 100,
	'caption'            => '',
	'className'          => '',
	'deck'               => '',
	'flip'               => false,
	'head'               => '',
	'imageFocus'         => 'center-middle',
	'metabar'            => true,
	'metabardate'        => false,
	'primaryTerm'        => '',
	'textPositionX'      => 'x-center',
	'textPositionY'      => '',
	'themeColor'         => '',
	'url'                => '',
	'videoUncropped'     => false,
	'wide'               => false,
);

$attributes = wp_parse_args( $attributes, $defaults );

// Determine which style is applied to the block.
$style_emphasize_text  = strpos( $attributes['className'], 'is-style-emphasis-on-text' ) !== false;
$style_text_over_image = strpos( $attributes['className'], 'is-style-text-over-image' ) !== false;
$style_side_by_side    = strpos( $attributes['className'], 'is-style-side-by-side' ) !== false;
$style_text_to_image   = strpos( $attributes['className'], 'is-style-text-to-image' ) !== false;
$style_image_to_text   = strpos( $attributes['className'], 'is-style-image-to-text' ) !== false;
$style_default         = ! $style_image_to_text && ! $style_text_to_image && ! $style_side_by_side && ! $style_text_over_image && ! $style_emphasize_text;



// Create an array to store classnames for the block.
// Block historically used this class for styling isntead of the standard `.wp-block-bu-leadin`.
// To maintain backwards compatibility, we continue to use it here.
// ToDo: However, going forward, we should phase this out in favor of the standard class.
$classes = array(
	'wp-block-editorial-leadin',
);

// Set Publication slug.
$publication_slug = apply_filters( 'bu_blocks_publication_slug', 'bu-blocks' );
$classes[]        = $publication_slug . '-block-editorial-leadin';

// If there is a background url, add the has-media class.
if ( $attributes['backgroundUrl'] ) {
	$classes[] = 'has-media';
}

// If the wide attribute is set and the side by side style is applied, add the has-wider class.
if ( $attributes['wide'] && $style_side_by_side ) {
	$classes[] = 'has-wider';
}

// If the flip attribute is set and the side by side style is applied, add the has-flip class.
if ( $attributes['flip'] && $style_side_by_side ) {
	$classes[] = 'has-flip';
}

// If the box attribute is set and one of the text styles is applied, add the has-box class.
if ( $attributes['box'] && ( $style_emphasize_text || $style_text_over_image || $style_side_by_side ) ) {
	$classes[] = 'has-box';
}

// If the imageFocus attribute is set, add the has-media-focus-{value} class.
if ( $attributes['imageFocus'] ) {
	$classes[] = 'has-media-focus-' . $attributes['imageFocus'];
}

// If the textPositionX attribute is set and the text over image style is applied, add the has-text-position-{value} class.
if ( $attributes['textPositionX'] && $style_text_over_image ) {
	$classes[] = 'has-text-position-' . $attributes['textPositionX'];
}

// If the textPositionY attribute is set and the text over image style is applied, add the has-text-position-{value} class.
if ( $attributes['textPositionY'] && $style_text_over_image ) {
	$classes[] = 'has-text-position-' . $attributes['textPositionY'];
}

// If the themeColor attribute is set, add the has-{value}-theme class.
if ( $attributes['themeColor'] ) {
	$classes[] = 'has-' . $attributes['themeColor'] . '-theme';
}

// If the backgroundAutoplay attribute is set, add the has-video-as-loop class.
if ( $attributes['backgroundAutoplay'] ) {
	$classes[] = 'has-video-as-loop';
}

// If the videoUncropped attribute is set and one of the video styles is applied, add the has-video-uncropped class.
if ( $attributes['videoUncropped'] && ( $style_image_to_text || $style_text_to_image ) ) {
	$classes[] = 'has-video-uncropped';
}


// Create the block wrapper attributes.
$block_wrapper_attributes = array(
	'class' => implode( ' ', $classes ),
);

// Add ID attribute if anchor is set.
if ( ! empty( $attributes['anchor'] ) ) {
	$block_wrapper_attributes['id'] = esc_attr( $attributes['anchor'] );
}

// Determine box classes and opacity.
if ( $attributes['box'] && 100 !== $attributes['boxOpacity'] && ( $style_emphasize_text || $style_text_over_image ) ) {
	$box_classes = ' has-opacity-' . absint( $attributes['boxOpacity'] );
}

if ( $attributes['caption'] ) {
	$figure_id = 'bu-blocks-leadin-figure-' . uniqid();
}

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes( $block_wrapper_attributes ) ); ?>>
	<div 
		class="container-lockup"
		role="figure"
		<?php echo $attributes['caption'] ? esc_attr( 'aria-describedby="' . $figure_id . '"' ) : ''; ?>
	>

		<div class="wp-block-leadin-media">
			<?php if ( $attributes['url'] && empty( $attributes['head'] ) ) : ?>
				<a href="<?php echo esc_url( $attributes['url'] ); ?>">
			<?php endif; ?>

			<?php do_action( 'bu_blocks_background', $attributes ); ?>

			<?php if ( $attributes['url'] && empty( $attributes['head'] ) ) : ?>
				</a>
			<?php endif; ?>
		</div>

		<?php if ( $attributes['caption'] && ( $style_default || $style_image_to_text || $style_side_by_side || $style_text_over_image ) ) : ?>
			<p role="caption" class="wp-block-editorial-leadin-caption wp-prepress-component-caption" id="<?php echo esc_attr( $figure_id ); ?>"><?php echo wp_kses_post( $attributes['caption'] ); ?></p>
		<?php endif; ?>


		<?php if ( $attributes['head'] || $attributes['deck'] ) : ?>

			<div class="container-words-outer">

				<?php if ( $attributes['caption'] && $style_emphasize_text ) : ?>
					<p class="wp-block-editorial-leadin-caption wp-prepress-component-caption"><?php echo wp_kses_post( $attributes['caption'] ); ?></p>
				<?php endif; ?>

				<div class="container-words-inner <?php echo esc_attr( $box_classes ); ?>">

					<?php if ( $attributes['head'] ) : ?>
						<?php do_action( 'bu_blocks_leadin_primary_term', get_the_ID() ); ?>
						<h1 class="head">
							<?php if ( $attributes['url'] ) : ?>
								<a href="<?php echo esc_url( $attributes['url'] ); ?>"><?php echo wp_kses( $attributes['head'], bu_blocks_kses_title() ); ?></a>
							<?php else : ?>
								<?php echo wp_kses( $attributes['head'], bu_blocks_kses_title() ); ?>
							<?php endif; ?>
						</h1>
					<?php endif; ?>

					<?php if ( $attributes['deck'] ) : ?>
						<h4 class="deck"><?php echo wp_kses( $attributes['deck'], bu_blocks_kses_title() ); ?></h4>
					<?php endif; ?>

				</div>

			</div>

		<?php endif; ?>

	</div>

	<?php if ( $attributes['caption'] && $style_text_to_image ) : ?>
		<p class="wp-block-editorial-leadin-caption wp-prepress-component-caption"><?php echo wp_kses_post( $attributes['caption'] ); ?></p>
	<?php endif; ?>

</div>

<?php do_action( 'bu_blocks_leadin_meta_bar', $attributes['metabar'], $attributes['metabardate'] ); ?>
