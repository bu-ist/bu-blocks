<?php
/**
 * Aside Block Dynamic Template
 * 
 * PHP file to use when rendering the block type on the server to show on the front end.
 *
 * The following variables are exposed to the file:
 *     $attributes (array): The block attributes.
 *     $content (string): The block default content.
 *     $block (WP_Block): The block instance.
 *
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Check if $content starts with <aside tag from older static version of this block.
if ( strpos( substr( $content, 0, 10 ) , '<aside') ) {
	$doc = new DOMDocument();
	$doc->loadHTML($content);

	$asideNode = $doc->getElementsByTagName('aside')->item(0);
	
	ob_start();

	// Loop through each element inside the outer aside tag.
	foreach ($asideNode->childNodes as $childNode) {
		echo $doc->saveHTML($childNode);
	}

	$aside_content = ob_get_clean();
}

?>


<aside 
	<?php echo $attributes['anchor'] ? 'id="' . $attributes['anchor'] . '"' : '' ; ?> 
	<?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>
>
	<?php echo $aside_content ? $aside_content : $content; ?>
</aside>
