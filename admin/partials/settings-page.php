<?php
/**
 * Displays the plugin settings page
 *
 * @link       www.bu.edu
 * @since      1.0.0
 *
 * @package    Bu_Blocks
 * @subpackage Bu_Blocks/admin
 */

?>
<div class="wrap">
	<h1><?php echo get_admin_page_title(); ?></h1>
	<div id="bu-blocks-wp-list-table">
		<div id="bu-blocks-post-body">
			<form id="bu-blocks-list-form" method="get">
				<input type="hidden" name="page" value="<?php echo $_REQUEST['page']; ?>" />
				<?php
				/**
				 * Adds the .gutenberg__editor div.
				 *
				 * This div is required for the gutenberg scripts to run,
				 * so wp.blocks.getBlockTypes() can be called and retrieve
				 * all ~66 blocks registered by WordPress and additional
				 * blocks registered by 3rd party plugins and themes.
				 */
				?>
				<div id="editor" class="gutenberg__editor"></div>
			</form>
		</div>
	</div>
</div>
