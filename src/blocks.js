/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

import './style.scss';

//import './blocks/aside/index.js';
//import './blocks/buniverse/edit.js';
//import './blocks/button/index.js';
import './blocks/clicktotweet/clicktotweet.js'; // no longer twitter
import './blocks/collapsible-control/collapsible-control.js';
import './blocks/collapsible/collapsible.js';
import './blocks/custom-html/custom-html.js';
import './blocks/drawer/drawer.js';
import './blocks/headline/headline.js';
import './blocks/introparagraph/introparagraph.js';
import './blocks/leadin/leadin.js';
import './blocks/listicle/listicle.js';
import './blocks/modal/modal.js';
import './blocks/photoessay/photoessay.js';
import './blocks/pullquote/pullquote.js';
import './blocks/relatedstories/relatedstories.js';
import './blocks/stat/stats.js';

// Add the 'Caption' style to the core paragraph block.
import './components/paragraph-caption-style/paragraph-caption-style.js';
import './components/paragraph-end-of-article-style/paragraph-end-of-article-style.js';
