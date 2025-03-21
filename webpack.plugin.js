/**
 * Webpack Theme Customization file.
 *
 * Theme developers can make changes to the options, entry points, and paths listed in this file
 * in order to modify the webpack config to load new css from node packages or
 * to add new stylesheets to be compiled by webpack.
 */

/**
 * SASS includePaths
 *
 * This array specifies the includePaths for Dart Sass to reference
 * in order to find and load SASS partials from node_modules packages.
 * New paths can be added to this array in this file and will be added as
 * paths that Dart Sass checks to find SASS partials for @import instances.
 */
const customIncludePaths = [
	'./node_modules',
	'./node_modules/@bostonuniversity',
];

// Example below is for block styles.
// This concats all of the block base styles together so we have the option
// of either enqueuing individual block styles per block or all of them together.
// Block Common Styles are those shared between blocks (such as a title, label, or button class)
// Any other non-block block editor features such as a sidebar plugin can have an entry point and stylesheet.
const blockEntryPoints = {
	// 'css/blocks/decorative/blocks_decorative': './src/blocks/blocks-decorative.scss', // All decorative styles for blocks
	// 'css/blocks/all_blocks/all_block_styles': './src/blocks/blocks-all.scss', // All individual block base styles combined in one stylesheet.
	// 'css/blocks/common/blocks_common_styles': './src/blocks/blocks-common.scss', // Common shared styles for these blocks.
};

// Example below is for plugin styles.
// This creates an entry point and stylesheet if this project is a plugin and has
// non-block features that need styles (templates, shortcodes, etc). It should not
// contain any block styles.
const pluginEntryPoints = {
	// 'blocks.style.build.css': './src/blocks.js', // Frontend stylesheet
	'bu-blocks-frontend': './src/blocks-frontend.js', // Frontend scripts
	// 'blocks.editor.build.css': './src/blocks.js', // Editor stylesheet
	// 'blocks.build.js': './src/blocks.js', // Editor scripts
	'js/block-editor': './src/block-editor.js',
};

// Set SASS compiler to use the faster embedded version. Default is `sass`.
// `sass-embedded` appears to be faster on MacOS. This can be changed back to `sass`
// if it causes issues.
const sassCompiler = 'sass-embedded';

/**
 * Export these so webpack.config.js can consume it.
 */
module.exports = {
	customIncludePaths,
	blockEntryPoints,
	pluginEntryPoints,
	sassCompiler,
};
