/**
 * SVGR is used by @wordpress/scripts when compiling to handle SVG in React.
 * This Configuration file let's us customize SVGR.
 *
 * By default SVGR enables the SVGO plugin to optimize SVG files. One feature
 * that has caused issues is it prefixing ID's and class names with the file
 * name of the file to reduce collisions between similar classes in separate
 * SVG files. This is not desireable for us when using the same SVG in React
 * and in a block's PHP Template as the classes will differ.
 *
 * This file disables the prefix feature of SVGO. Alternatively SVGO could
 * be disabled entirely.
 *
 * See: https://github.com/gregberge/svgr/issues/906
 */

module.exports = {
	plugins: [
		{
			name: 'prefixIds',
			params: {
				prefixIds: false,
				prefixClassNames: false,
			},
		},
	],
};
