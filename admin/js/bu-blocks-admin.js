/**
 * Sends a message to the console so we can debug any admin page
 * to see if it's correctly or incorrectly enqueuing the bu-blocks
 * admin scripts.
 */
console.log( 'Hello World, from BU Blocks' );

/**
 * Verifies we have access to all registered gutenberg blocks,
 * especially on the BU Blocks plugin settings page in the admin.
 *
 * Note: This promise `_wpLoadGutenbergEditor` will most likely change
 * in a future version of WP, and there may be a more reliable way to
 * wait for gutenberg assets have loaded before calling methods from
 * `wp.blocks`.
 */
window._wpLoadGutenbergEditor.then( function() {
    // This should retrieve all ~66 blocks in a fresh WP install.
    console.log( wp.blocks.getBlockTypes() );

    /**
     * Loop through blocks to build UI here.
     *
     * Iterate through each block, adding it to the UI for users to
     * disable/enable any block, browse blocks by category or
     * active/inactive status.
     *
     * Perhaps this is where a React app can takeover and initialize
     * a component for each block.
     */

} );
