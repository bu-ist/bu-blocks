/**
 * Adds an array of color objects to the editor or theme defaults,
 * and returns it for passing to the `colors` prop.
 */

// WordPress dependencies.
const { __ } = wp.i18n;
const { select, dispatch } = wp.data;
const { getEditorSettings } = select( 'core/editor' );
const { updateEditorSettings } = dispatch( 'core/editor' );

import publicationSlug from './publication-slug';

const themeOptions = () => {
	// Get the default colors as set by the editor or theme.
	const defaultColors = getEditorSettings().colors;

	// Get the default theme color options as set by the `default_theme_colors`
	// function in `../init.php`. (Defined via PHP for the comparison below.)
	const defaultThemes = getEditorSettings().buDefaultThemes;

	// Get publication specific color options set by the active theme through
	// the `block_editor_settings` filter in PHP.
	const publicationThemes = getEditorSettings().buPublicationThemes;

	// Retrieve the current publication from the DOM.
	const publication = publicationSlug();

	// Populate the final `themeOptions` from the current publication, if the exist.
	// If not, use the default options.
	const themeOptions = ( publicationThemes && publicationThemes[ publication ] ) ? publicationThemes[ publication ] : defaultThemes;

	/**
	 * Add custom color objects to the defaults if they haven't already been added.
	 *
	 * Gutenberg returns a complete color object only if it is found in colors,
	 * otherwise only the the hex code is returned.
	 *
	 * @see https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/colors/utils.js#L7.
	 */
	if ( themeOptions && ! themeOptions.some( v => defaultColors.includes( v ) ) ) {
		const newColors = defaultColors.concat( themeOptions );

		updateEditorSettings( { colors: newColors } );
	}

	// Return the array of custom color objects for passing to the `colors` prop.
	return themeOptions;
}

export default themeOptions;
