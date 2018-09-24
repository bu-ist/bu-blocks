/**
 * Sends a message to the console so we can debug any admin page
 * to see if it's correctly or incorrectly enqueuing the bu-blocks
 * admin scripts.
 */
console.log( 'Hello World, from BU Blocks' );

/**
 * Waits until all gutenberg scripts have finished initializing,
 * so we have access to the wp.blocks object.
 *
 * @link https://github.com/WordPress/gutenberg/issues/4848#issuecomment-388174948
 *
 * Note: This promise `_wpLoadGutenbergEditor` is a "private" function
 * that shouldn't be relied upon, apparently. It may very likely change
 * in a future version of WP; or there may be a more reliable way to
 * wrap gutenberg logic with or a better way to retrieve all registered
 * blocks than javascript in the future, such as a PHP API. Since none
 * exists, we need to enqueue gutenberg scripts to detect all registered
 * blocks so we can output them on a settings page.
 */
window._wpLoadGutenbergEditor.then( function() {

    /**
     * Console logs all registered blocks for the editor.
     *
     * - WordPress core generates ~66 blocks.
     * - There may be more blocks if additional blocks are registered in
     *   themes and plugins.
     * - There may be less blocks if some have been unregistered in other
     *   themes or plugins.
     */
    console.log( wp.blocks.getBlockTypes() );

    /**
     * Console logs the current admin page that was localized
     * via wp_localize_script. Useful so we know if we should
     * unregister the block because its a post-edit page,
     * or skip unregistering blocks because its a plugin settings
     * page.
     */
    console.log( BU_Blocks_Settings.admin_page );

    // Runs the following scripts on the post edit screen, where gutenberg is used.
    if ( 'post.php' === BU_Blocks_Settings.admin_page ) {
        /**
         * Loops through BU Blocks settings for unregistered blocks, and
         * unregisters each one in the array.
         */
        jQuery( BU_Blocks_Settings.unregistered_blocks ).each( function( index ) {
            // Console logs the block that will be unregistered.
            console.log( 'see ya ' + BU_Blocks_Settings.unregistered_blocks[ index ] );
            // Unregisters the block.
            wp.blocks.unregisterBlockType( BU_Blocks_Settings.unregistered_blocks[ index ] );
        } );
    }

    // Console logs the new resulting blocks.
    console.log( wp.blocks.getBlockTypes() );

} );
