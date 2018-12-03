/**
 * Returns a set of theme colors.
 *
 *
 */

// WordPress dependencies.
const { __ } = wp.i18n;
const { select, dispatch } = wp.data;
const { getEditorSettings } = select( 'core/editor' );
const { updateEditorSettings } = dispatch( 'core/editor' );

const themePalette = () => {
	const defaultThemes = [
		{ name: __( 'Light' ), slug: 'light', color: '#ffffff' },
		{ name: __( 'Dark' ), slug: 'dark', color: '#000000' },
	];
	//const defaultColors = getEditorSettings().colors;
	const themes = getEditorSettings().buPublicationThemes;
	const publication = document.getElementById( 'bu_publication_owner' ).value;
	const themeOptions = ( themes && themes[ publication ] ) ? themes[ publication ] : defaultThemes;

	updateEditorSettings( { colors: themeOptions } );
	//console.log( getEditorSettings().colors );

	return themeOptions;
}

export default themePalette;