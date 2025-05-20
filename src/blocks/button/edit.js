/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import themeOptions from '../../global/theme-options';
import { getColorSlug } from '../../global/color-utils.mjs';
import getAllowedFormats from '../../global/allowed-formats';
import publicationSlug from '../../global/publication-slug';
import ThemeColorPanel from '../../components/colorthemes-panel/index.js';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { Button, PanelBody, RadioControl } from '@wordpress/components';
import {
	InspectorControls,
	RichText,
	URLInput,
	useBlockProps,
} from '@wordpress/block-editor';

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
	classnames( 'wp-block-bu-button', {
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

	// themOptions() returns the full/global color palette added to editor settings.
	const themeOptionsPalette = themeOptions();

	return (
		<>
			<InspectorControls>
				<ThemeColorPanel
					blockname={ name }
					value={ themeColor }
					themepalette={ themeOptionsPalette }
					onChange={ ( value, palette ) =>
						setAttributes( {
							themeColor: value
								? getColorSlug( value, palette )
								: undefined,
						} )
					}
				/>
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
