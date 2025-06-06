<?php
/**
 * Collapsible Block Dynamic Template
 *
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 * @package    bu-blocks
 */

namespace BU\Plugins\BU_Blocks\Blocks\Collapsible;

// Create an array to store classnames for the block.
$classes = array(
	'wp-block-bu-collapsible',
	'js-wp-block-bu-collapsible',
	'is-open', // Default this to open, so we can close via JS. This lets block content be visible if user has JS disabled.
	"icon-style-{$attributes['iconStyle']}",
	$attributes['className'],
);


// Array of any inline styles needed.
$styles = array(
	'margin-bottom' => $attributes['customMarginBottom'] ? "{$attributes['marginBottom']}px; " : null,
	'variable'      => $attributes['customMarginBottom'] ? "--bu_blocks-block-bu-collapsible-margin-bottom: {$attributes['marginBottom']}px; " : null,
);

// Loop through the $styles list and output inline style rules if they have a value.
$get_styles = function ( $styles ) {
	$out = '';
	foreach ( $styles as $k => $v ) {
		if ( 'variable' === $k ) {
			$out .= $v;
		} elseif ( $v ) {
			$out .= "{$k}:{$v}";
		}
	}
	return $out;
};

// Check if this is the Preview style so we can adjust the markup structure below.
$is_preview_style = in_array( 'is-style-preview', $classes ) ? true : false;

?>
<div
	<?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => implode( ' ', $classes ) ) ) ); ?> 
	style="<?php echo esc_attr( $get_styles( $styles ) ); ?>"
	id="<?php echo esc_attr( $attributes['id'] ); ?>"
	data-default-open="<?php echo esc_attr( $attributes['isOpen'] ? 'true' : 'false' ); ?>"
>
	<<?php echo esc_html( "h{$attributes['level']}" ); ?> class="bu-collapsible-heading">
		<?php if ( $is_preview_style ) : ?>
			<?php echo wp_kses_post( $attributes['title'] ); ?>
		<?php else : ?>
			<button class="bu-block-collapsible-toggle js-bu-block-collapsible-toggle" id="<?php echo esc_attr( "{$attributes['id']}-toggle" ); ?>">
				<?php echo wp_kses_post( $attributes['title'] ); ?>
			</button>
			<span class="wp-block-bu-collapsible-icon">
				<?php
					// @todo Add some SVG specific escaping here.
					echo get_icon_markup(); // phpcs:ignore
				?>
			</span>
		<?php endif; ?>
	</<?php echo esc_html( "h{$attributes['level']}" ); ?>>
	<?php if ( $is_preview_style ) : ?>
		<button
			class="wp-block-bu-collapsible-preview-style-toggle js-bu-block-collapsible-toggle button"
			id="<?php echo esc_attr( "{$attributes['id']}-toggle" ); ?>"
			data-close-text="<?php echo esc_attr( "{$attributes['buttonCloseLabel']}" ); ?>"
			data-open-text="<?php echo esc_attr( "{$attributes['buttonOpenLabel']}" ); ?>"
			aria-label="Toggle <?php echo wp_kses_post( $attributes['title'] ); ?>"
		><?php echo esc_html( "{$attributes['buttonOpenLabel']}" ); ?></button>
	<?php endif; ?>
	<div class="bu-block-collapsible-content js-bu-block-collapsible-content" id="<?php echo esc_attr( "{$attributes['id']}-panel" ); ?>">
		<?php echo $content; // phpcs:ignore ?>
	</div>
</div>