const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const { mergeWithRules } = require( 'webpack-merge' );
const path = require( 'path' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const { getWebpackEntryPoints } = require( '@wordpress/scripts/utils/config' );
const RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );

// Import our theme paths from a separate file that can be modified in the theme.
const {
	customIncludePaths,
	blockEntryPoints,
	pluginEntryPoints,
	sassCompiler,
} = require( './webpack.plugin' );

/**
 * Block Config for @wordpress/scripts & webpack
 *
 * Do not modify the entry points of this config as it uses the `getWebpackEntryPoints` function from wp-scripts
 * that finds all blocks and block.json files and builds a list of entrypoints for webpack from that automagically.
 */
const blocksConfig = {
	module: {
		rules: [
			{
				test: /\.(sc|sa)ss$/,
				use: [
					{
						loader: require.resolve( 'sass-loader' ),
						options: {
							sassOptions: {
								includePaths: customIncludePaths, // Adding our custom include paths so that
							},
							implementation: require( sassCompiler ),
						},
					},
				],
			},
		],
	},
};

/**
 * Block Styles Config for @wordpress/scripts & webpack
 *
 * Used to compile additional stylesheets for blocks such as Decorative Styles and Shared/Common styles.
 * This config entirely replaces the default entry points from the @wordpress/scripts defaultConfig. This ensures
 * that the blocks are not processed a second time.
 */
const blockStylesConfig = {
	entry: {
		...blockEntryPoints,
	},
	module: {
		rules: [
			{
				test: /\.(sc|sa)ss$/,
				use: [
					{
						loader: require.resolve( 'sass-loader' ),
						options: {
							sassOptions: {
								includePaths: customIncludePaths, // Adding our custom include paths so that
							},
							implementation: require( sassCompiler ),
						},
					},
				],
			},
		],
	},
};

/**
 * Plugin General Styles/JS Config for @wordpress/scripts & webpack
 *
 * Used to compile additional stylesheets or JS for this plugin as a whole. Used for anything that IS NOT a block.
 * This config entirely replaces the default entry points from the @wordpress/scripts defaultConfig. This ensures
 * that the blocks are not processed a second time.
 */

const pluginConfig = {
	// Set devtool mode to sourcemap so we generate sourcemap files even for production builds.
	devtool: 'source-map',
	entry: {
		...pluginEntryPoints,
	},
	module: {
		rules: [
			{
				test: /\.(sc|sa)ss$/,
				use: [
					{
						loader: require.resolve( 'css-loader' ),
						options: {
							sourceMap: true, // Set sourceMap to true so we generate a map even for prod builds.
						},
					},
					{
						loader: require.resolve( 'sass-loader' ),
						options: {
							sassOptions: {
								includePaths: customIncludePaths,
							},
							sourceMap: true, // Set sourceMap to true so we generate a map even for prod builds.
							implementation: require( sassCompiler ),
						},
					},
				],
			},
		],
	},
	plugins: [
		// Grab the defaultConfig's plugins array and filter it to remove what we don't need.
		...defaultConfig.plugins.filter(
			// Remove CopyWebpackPlugin from the pluginConfig so we don't copy
			// block.json & php files into our output folder for the theme's files.
			( plugin ) => ! ( plugin instanceof CopyWebpackPlugin )
		),
		new RemoveEmptyScriptsPlugin(), // Add new plugin that removes empty script files for CSS only entries
	],
};

/**
 * Export the new modified configuration for webpack and use the
 * webpack-merge functions to merge our modified configuration in.
 */
module.exports = [
	mergeWithRules( {
		module: {
			rules: {
				test: 'match',
				use: {
					loader: 'match',
					options: 'merge',
				},
			},
		},
	} )( defaultConfig, blocksConfig ),
	mergeWithRules( {
		entry: 'replace',
		module: {
			rules: {
				test: 'match',
				use: {
					loader: 'match',
					options: 'merge',
				},
			},
		},
	} )( defaultConfig, blockStylesConfig ),
	mergeWithRules( {
		entry: 'replace',
		module: {
			rules: {
				test: 'match',
				use: {
					loader: 'match',
					options: 'merge',
				},
			},
		},
		plugins: 'replace',
	} )( defaultConfig, pluginConfig ),
];
