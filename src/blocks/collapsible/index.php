<?php
/**
 * Server-side rendering of the `editorial/collapsible` block.
 *
 * @package BU_Blocks
 */

namespace BU\Plugins\BU_Blocks\Blocks\Collapsible;

add_action( 'init', __NAMESPACE__ . '\\register_block' );

/**
 * Registers the `editorial/collapsible` block on the server.
 */
function register_block() {
	register_block_type(
		'bu/collapsible',
		array(
			'attributes'      => [
				'title' => [
					'type'     => 'string',
				],
				'level' => [
					'type'     => 'number',
					'default'  => 2,
				],
				'isOpen' => [
					'type'     => 'boolean',
					'default'  => false,
				],
				'iconStyle' => [
					'type'     => 'string',
					'default'  => 'plus-minus',
				],
				'customMarginBottom' => [
					'type'     => 'boolean',
					'default'  => false,
				],
				'marginBottom' => [
					'type'     => 'number',
					'default'  => 0,
				],
				'id' => [
					'type'     => 'string',
				],
			],
			'render_callback' => __NAMESPACE__ . '\\render_block',
		)
	);
}

/**
 * Renders the `bu/collapsible` block.
 *
 * @param array  $attributes The block attributes.
 * @param string $content    The block content.
 * @return string Returns the b
 */
function render_block( $attributes, $content ) {
	$attr = wp_parse_args(
		$attributes,
		[
			'title'              => '',
			'level'              => '2',
			'isOpen'             => false,
			'iconStyle'          => 'plus-minus',
			'className'          => 'is-style-plain',
			'customMarginBottom' => false,
			'marginBottom'       => 0,
			'id'                 => 'bu-collapsible-1',
		]
	);
	$classes = [
		'wp-block-bu-collapsible',
		$attr['isOpen'] ? 'is-open' : 'is-closed',
		"icon-style-{$attr['iconStyle']}",
		$attr['className'],
	];
	$styles = [];
	if ( $attr['customMarginBottom'] ) {
		$styles['margin-bottom'] = "{$attr['marginBottom']}px";
	}
	$get_styles = function( $styles ) {
		$out = '';
		foreach ( $styles as $k => $v ) {
			$out .= "{$k}:{$v}";
		}
		return $out;
	};
	ob_start();
	?>

	<div class="<?php echo esc_attr( implode( ' ', $classes ) ); ?>" style="<?php echo esc_attr( $get_styles( $styles ) ); ?>" id="<?php echo esc_attr( $attr['id'] ); ?>">
		<button class="bu-block-collapsible-toggle" id="<?php echo esc_attr( "{$attr['id']}-toggle"); ?>">
			<<?php echo esc_html( "h{$attr['level']}" );?> class="bu-collapsible-heading"><?php echo wp_kses_post( $attr['title'] ); ?></<?php echo esc_html( "h{$attr['level']}" );?>>
		</button>
		<div class="bu-block-collapsible-content" id="<?php echo esc_attr( "{$attr['id']}-panel"); ?>">
			<?php echo $content; ?>
		</div>
	</div>

	<?php
	return apply_filters( 'bu_blocks_collapsible_render_output', ob_get_clean(), $attr, $classes, $content );
}
