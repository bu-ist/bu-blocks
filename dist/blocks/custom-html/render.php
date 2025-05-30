<?php
/**
 * Custom HTML Block Dynamic Template
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

$html = get_post_meta( get_the_ID(), '_bu_custom_html_block_' . sanitize_key( $attributes['customBlockID'] ), true );
var_dump("rendering");
var_dump($html);
// @todo - run through kses of some kind?
$html = apply_filters( 'bu_blocks_custom_html', $html, $attributes );
?>
<?php echo $html; ?>
