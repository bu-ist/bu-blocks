<?php
/**
 * Displays the BU_Block_List_Table
 *
 * @link       www.bu.edu
 * @since      1.0.0
 *
 * @package    Bu_Blocks
 * @subpackage Bu_Blocks/admin
 */

?>
<div class="wrap">
	<h1><?php _e( 'BU Blocks Settings', 'bu-blocks' ); ?></h1>
	<div id="bu-blocks-wp-list-table">
		<div id="bu-blocks-post-body">
			<form id="bu-blocks-list-form" method="get">
				<?php $this->block_list_table->display(); ?>
			</form>
		</div>
	</div>
</div>
