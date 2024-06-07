/**
 * Frontend JS for BU Blocks
 *
 */

import './blocks-frontend-polyfills';

// Import the bu_blocks object that all data and public functions are stored on.
import bu_blocks from './blocks-frontend-tools';

// Import the frontend JS for each block so it is enqueued together into one file.
import './blocks/clicktotweet/frontend';
import './blocks/collapsible/frontend';
import './blocks/collapsible-control/frontend';
import './blocks/drawer/frontend';
import './blocks/modal/frontend';
import './blocks/photoessay/frontend';

// Export bu_blocks object to the window so it's accessible easily for
// child themes to call public functions or debug.
window.bu_blocks = bu_blocks;
