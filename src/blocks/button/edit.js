/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import themeOptions from '../../global/theme-options';
import {
	getColorSlug,
	getColorThemesSupportsByBlock,
} from '../../global/color-utils.mjs';
import getAllowedFormats from '../../global/allowed-formats';
import publicationSlug from '../../global/publication-slug';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import {
	Button,
	PanelBody,
	RadioControl,
	PanelRow,
} from '@wordpress/components';
import {
	InspectorControls,
	PanelColorSettings,
	RichText,
	URLInput,
	useBlockProps,
	getColorObjectByAttributeValues,
} from '@wordpress/block-editor';
import { hasBlockSupport } from '@wordpress/blocks';

// The current publication owner.
const publication = publicationSlug();

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className  Additional classes assigned to the block.
 * @param {string} themeColor The theme color assigned to the block.
 * @param {string} icon       The icon placement.
 */
const getClasses = ( className, themeColor, icon ) =>
	classnames( 'wp-block-button', 'wp-block-bu-button', {
		[ `${ publication }-block-button` ]: publication && publication !== '',
		[ `has-${ themeColor }-theme` ]: themeColor,
		[ `icon-navigateright ${ icon }` ]: icon,
		[ className ]: className,
	} );

export default function Edit( props ) {
	const {
		attributes: { text, url, icon, align, themeColor },
		setAttributes,
		className,
		name,
	} = props;

	const blockProps = useBlockProps( {
		className: getClasses( className, themeColor, icon ),
	} );

	// themOptions() returns the full color palette added to editor settings.
	// Set the ThemeOptions() color Palette to a variable so we can clear
	// it if disabled by filter.
	let themeOptionsPalette = themeOptions();

	// Check if block's metadata from block.json has an entry for __bublocks_colorthemes.
	const hasThemOptionsColorThemesSupport = hasBlockSupport(
		name,
		'__bublocks_colorthemes'
	);

	if ( hasThemOptionsColorThemesSupport ) {
		// Get any block specific color themes palette set
		// in block.json `supports.__bublocks_colorthemes`
		themeOptionsPalette = getColorThemesSupportsByBlock(
			name,
			themeOptionsPalette
		);
	}

	// Create a color object from the palette for themeColor attribute
	//  to pass into the component.
	const themeColorObject = getColorObjectByAttributeValues(
		themeOptionsPalette,
		themeColor
	);

	// Check if palette is an array and has any values.
	const hasThemeOptionsPalette =
		Array.isArray( themeOptionsPalette ) && themeOptionsPalette.length > 0;

	return (
		<>
			<InspectorControls>
				{ hasThemOptionsColorThemesSupport && (
					<PanelColorSettings
						title={ __( 'Color Theme' ) }
						colorSettings={ [
							{
								value: themeColorObject?.color,
								onChange: ( value ) =>
									setAttributes( {
										themeColor: value
											? getColorSlug(
													value,
													themeOptionsPalette
											  )
											: undefined,
									} ),
								label: __( 'Theme' ),
								disableCustomColors: true,
								colors: themeOptionsPalette,
							},
						] }
					>
						{ ! hasThemeOptionsPalette && (
							<PanelRow>
								<em>
									No Color Palette available for this block.
								</em>
							</PanelRow>
						) }
					</PanelColorSettings>
				) }
				<PanelBody title={ __( 'Icon Settings' ) }>
					<RadioControl
						label="Placement"
						selected={ icon }
						options={ [
							{
								label: 'Before text',
								value: 'align-icon-left',
							},
							{
								label: 'After text',
								value: 'align-icon-right',
							},
						] }
						onChange={ ( value ) => {
							setAttributes( { icon: value } );
						} }
					/>
					<Button
						onClick={ () => setAttributes( { icon: undefined } ) }
						label={ 'Clear icon settings' }
						isSecondary
						isSmall
					>
						{ __( 'Clear' ) }
					</Button>
				</PanelBody>

				<PanelBody
					className="components-panel__body-bu-button-block-url bu-blocks-button-block-url-input"
					title={ __( 'URL' ) }
				>
					<p className="description">Add link to the button</p>
					<URLInput
						value={ url }
						onChange={ ( value ) =>
							setAttributes( { url: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<RichText
				{ ...blockProps }
				tagName="div"
				placeholder={ __( 'Add text…' ) }
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				formattingControls={ getAllowedFormats(
					'formattingControls',
					[ 'bold', 'italic' ]
				) }
				allowedFormats={ getAllowedFormats( 'allowedFormats', [
					'core/bold',
					'core/italic',
				] ) }
				keepPlaceholderOnFocus
			/>
		</>
	);
}
