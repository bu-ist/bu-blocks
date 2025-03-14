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
import blockIcons from '../../components/block-icons/';

import deprecated from './deprecated';

//  Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
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

// Register the block.
registerBlockType( 'bu/button', {
	apiVersion: 2,
	title: __( 'Button' ),
	description: __( 'Prompt visitors to take action with a custom button.' ),
	icon: blockIcons( 'button' ),
	category: 'bu',
	attributes: {
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		title: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'title',
		},
		text: {
			type: 'string',
			source: 'html',
			selector: 'a',
		},
		themeColor: {
			type: 'string',
		},
		icon: {
			type: 'string',
		},
		className: {
			type: 'string',
		},
	},
	styles: [
		{
			name: 'default',
			label: __( 'Default' ),
			isDefault: true,
		},
		{
			name: 'outline',
			label: __( 'Outline' ),
		},
		{
			name: 'text',
			label: __( 'Text' ),
		},
		{
			name: 'accent',
			label: __( 'Accent' ),
		},
	],
	supports: {
		className: false,
		customClassName: false,
		align: [ 'left', 'center', 'right' ],
	},

	edit: function Edit( props ) {
		const {
			attributes: { text, url, icon, align, themeColor },
			setAttributes,
			//isSelected,
			className,
		} = props;

		const blockProps = useBlockProps( {
			className: getClasses( className, themeColor, icon ),
		} );

		const themeColorObject = getColorObjectByAttributeValues(
			themeOptions(),
			themeColor
		);

		return (
			<>
				<InspectorControls>
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						colorSettings={ [
							{
								value: themeColorObject?.color,
								onChange: ( value ) =>
									setAttributes( {
										themeColor: value
											? getColorSlug(
													value,
													themeOptions()
											  )
											: undefined,
									} ),
								label: __( 'Theme' ),
								disableCustomColors: true,
								colors: themeOptions(),
							},
						] }
					>
						{ ! themeOptions() && (
							<PanelRow>
								<em>
									No Color Palette available for this site.
								</em>
							</PanelRow>
						) }
					</PanelColorSettings>
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
							onClick={ () =>
								setAttributes( { icon: undefined } )
							}
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
				<p
					className={ `wp-block-bu-button-container ${
						align ? '' : 'wp-block'
					}` }
				>
					<RichText
						{ ...blockProps }
						tagName="div"
						placeholder={ __( 'Add text…' ) }
						value={ text }
						onChange={ ( value ) =>
							setAttributes( { text: value } )
						}
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
				</p>
			</>
		);
	},

	save( { attributes } ) {
		const { url, text, themeColor, icon, className } = attributes;

		const blockProps = useBlockProps.save( {
			className: getClasses( className, themeColor, icon ),
		} );

		return (
			<p>
				<RichText.Content
					{ ...blockProps }
					tagName="a"
					href={ url }
					value={ text }
				/>
			</p>
		);
	},

	deprecated,
} );
