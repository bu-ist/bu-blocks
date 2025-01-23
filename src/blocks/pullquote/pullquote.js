/**
 * BLOCK: bu/pullquote
 *
 * Register a pullquote block with Gutenberg.
 */

// External dependencies.
import classnames from 'classnames';

//  Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import Background, {
	BackgroundAttributes,
	BackgroundControls,
} from '../../components/background';
import getAllowedFormats from '../../global/allowed-formats';
import themeOptions from '../../global/theme-options';
import blockIcons from '../../components/block-icons/';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { useState } from '@wordpress/element';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import {
	InspectorControls,
	PanelColorSettings,
	RichText,
	getColorObjectByColorValue,
	getColorObjectByAttributeValues,
} from '@wordpress/block-editor';

// Returns true if the current block style is "Default".
const isStyleDefault = ( className ) => {
	return (
		! className.includes( 'is-style-modern' ) &&
		! className.includes( 'is-style-pop' )
	);
};

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className    The classnames assigned to the block
 * @param {number} backgroundId ID of the background media, if set.
 * @param {string} imageFocus   Value of the "Crop Media To" setting.
 * @param {string} themeColor   Value of the "Theme Color" setting.
 * @param {string} textColor
 */
const getClasses = (
	className,
	backgroundId,
	imageFocus,
	themeColor,
	textColor
) => {
	const isStylePop = className.includes( 'is-style-pop' );

	return classnames( className, {
		'has-image': backgroundId && ! isStylePop,
		[ `has-image-focus-${ imageFocus }` ]: imageFocus && ! isStylePop,
		[ `has-${ themeColor }-theme` ]: themeColor,
		[ `has-${ textColor }-theme-text` ]: textColor,
	} );
};

/**
 * When given a color it gets the Color Slug from the themeoptions() color
 * palette defined for the theme.
 *
 * @param {*} color
 * @return {string} The slug of the color.
 */
const getColorSlug = ( color ) => {
	if ( color ) {
		const colorObject = getColorObjectByColorValue( themeOptions(), color );

		if ( colorObject.slug ) {
			return colorObject.slug;
		}
	} else {
		console.error( 'Error: no color.slug value found in color object.' ); // eslint-disable-line no-console
	}
	return undefined;
};

// Only allow images in the background component for this block.
const allowedMedia = [ 'image' ];

// Register the block.
registerBlockType( 'bu/pullquote', {
	title: __( 'BU Pullquote' ),
	description: __( 'Add a styled Pullquote' ),
	icon: blockIcons( 'pullquote' ),
	category: 'bu',
	supports: {
		align: [ 'full', 'wide' ],
	},
	attributes: {
		quote: {
			type: 'array',
			source: 'children',
			selector: '.quote-sizing',
		},
		photoCredit: {
			type: 'string',
			source: 'text',
			selector: '.wp-component-media-credit',
		},
		cite: {
			type: 'array',
			source: 'children',
			selector: 'footer',
		},
		imageFocus: {
			type: 'string',
			default: 'center-middle',
		},
		className: {
			type: 'string',
		},
		themeColor: {
			type: 'string',
			default: '',
		},
		textColor: {
			type: 'string',
			default: '',
		},
		...BackgroundAttributes,
	},
	styles: [
		{
			name: '',
			label: __( 'Default' ),
			default: true,
			isDefault: true,
		},
		{
			name: 'modern',
			label: __( 'Modern' ),
		},
		{
			name: 'pop',
			label: __( 'Pop' ),
		},
	],
	example: {
		attributes: {
			quote: 'Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
			cite: 'Tellus Dolor Purus',
		},
	},

	edit: function Edit( props ) {
		// Get the block properties.
		const { attributes, setAttributes, className } = props;

		// Get the block attributes.
		const {
			quote,
			cite,
			photoCredit,
			imageFocus,
			backgroundId,
			textColor,
			themeColor,
		} = attributes;

		const [ isUploading, setIsUploading ] = useState( false );

		// Return the background media positioning controls if a background is set
		// and the style is not set to "Pop".
		const mediaPositioningControls = () => {
			if ( ! backgroundId || className.includes( 'is-style-pop' ) ) {
				return null;
			}

			return (
				<PanelBody
					title={ __( 'Media Positioning' ) }
					initialOpen={ false }
				>
					<SelectControl
						label={ __( 'Crop Media to:' ) }
						value={ imageFocus }
						onChange={ ( value ) =>
							setAttributes( { imageFocus: value } )
						}
						options={ [
							{ value: 'left-top', label: __( 'Left Top' ) },
							{
								value: 'left-middle',
								label: __( 'Left Center' ),
							},
							{
								value: 'left-bottom',
								label: __( 'Left Bottom' ),
							},
							{ value: 'center-top', label: __( 'Center Top' ) },
							{ value: 'center-middle', label: __( 'Center' ) },
							{
								value: 'center-bottom',
								label: __( 'Center Bottom' ),
							},
							{ value: 'right-top', label: __( 'Right Top' ) },
							{
								value: 'right-middle',
								label: __( 'Right Center' ),
							},
							{
								value: 'right-bottom',
								label: __( 'Right Bottom' ),
							},
						] }
					/>
				</PanelBody>
			);
		};

		const themeColorObject = getColorObjectByAttributeValues(
			themeOptions(),
			themeColor
		);
		const textColorObject = getColorObjectByAttributeValues(
			themeOptions(),
			textColor
		);

		// Return the block editing interface.
		return (
			<>
				<InspectorControls>
					<PanelBody title={ __( 'Media Options' ) }>
						<TextControl
							label={ __( 'Media Credit' ) }
							onChange={ ( value ) => setAttributes( { value } ) }
							value={ photoCredit }
						/>
					</PanelBody>
					<PanelColorSettings
						title={ __( 'Theme Color' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: themeColorObject?.color,
								onChange: ( value ) =>
									setAttributes( {
										themeColor: value
											? getColorSlug( value )
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
					<PanelColorSettings
						title={ __( 'Text Color' ) }
						description={ __( 'Description' ) }
						colorSettings={ [
							{
								value: textColorObject?.color,
								onChange: ( value ) =>
									setAttributes( {
										textColor: value
											? getColorSlug( value )
											: undefined,
									} ),
								label: __( 'Text Color' ),
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
					{ mediaPositioningControls() }
				</InspectorControls>
				<BackgroundControls
					allowedMediaTypes={ allowedMedia }
					blockProps={ props }
					placeholderText={ __( 'Add Image' ) }
					setIsUploading={ setIsUploading }
					imageSize="large"
				/>
				<div
					className={ getClasses(
						className,
						backgroundId,
						imageFocus,
						themeColor,
						textColor
					) }
				>
					<div className="wp-block-bu-pullquote-inner">
						{ isStyleDefault( className ) && (
							<>
								<figure>
									<Background
										blockProps={ props }
										isUploading={ isUploading }
									/>
								</figure>
							</>
						) }
						<blockquote>
							<div className="container-lockup">
								<div className="container-icon-outer">
									<div className="container-icon-inner">
										{ className.includes(
											'is-style-modern'
										) && (
											<Background
												blockProps={ props }
												isUploading={ isUploading }
											/>
										) }
									</div>
								</div>
								<div className="container-text">
									<hr />
									<RichText
										tagName="div"
										className="quote-sizing"
										placeholder={ __( 'Add quote text…' ) }
										value={ quote }
										onChange={ ( value ) =>
											setAttributes( { quote: value } )
										}
										formattingControls={ getAllowedFormats(
											'formattingControls',
											[ 'bold', 'italic', 'link' ]
										) }
										allowedFormats={ getAllowedFormats(
											'allowedFormats',
											[
												'core/bold',
												'core/italic',
												'core/link',
											]
										) }
										keepPlaceholderOnFocus
									/>
									<RichText
										tagName="footer"
										placeholder={ __(
											'Add quote attribution…'
										) }
										value={ cite }
										onChange={ ( value ) =>
											setAttributes( { cite: value } )
										}
										formattingControls={ getAllowedFormats(
											'formattingControls',
											[ 'bold', 'italic', 'link' ]
										) }
										allowedFormats={ getAllowedFormats(
											'allowedFormats',
											[
												'core/bold',
												'core/italic',
												'core/link',
											]
										) }
										keepPlaceholderOnFocus
									/>
									<hr />
								</div>
								{ className.includes( 'is-style-modern' ) &&
									photoCredit && (
										<div className="wp-component-media-credit">
											{ photoCredit }
										</div>
									) }
							</div>
						</blockquote>
					</div>
					{ isStyleDefault( className ) && photoCredit && (
						<div className="wp-component-media-credit">
							{ photoCredit }
						</div>
					) }
				</div>
			</>
		);
	},

	save( props ) {
		// Get the block properties.
		const { attributes } = props;

		// Get the block attributes.
		const {
			quote,
			cite,
			imageFocus,
			photoCredit,
			backgroundId,
			className = '', // Assign default in case the unpacked value is `undefined`.
			themeColor,
			textColor,
		} = attributes;

		// Returns the block rendering for the front end.
		return (
			<div
				className={ getClasses(
					className,
					backgroundId,
					imageFocus,
					themeColor,
					textColor
				) }
			>
				<div className="wp-block-bu-pullquote-inner">
					{ isStyleDefault( className ) && (
						<figure>
							<Background blockProps={ props } />
						</figure>
					) }
					<blockquote>
						<div className="container-lockup">
							<div className="container-icon-outer">
								<div className="container-icon-inner">
									{ className.includes(
										'is-style-modern'
									) && <Background blockProps={ props } /> }
								</div>
							</div>

							<div className="container-text">
								<hr />
								<RichText.Content
									tagName="div"
									className="quote-sizing"
									value={ quote }
								/>
								<RichText.Content
									tagName="footer"
									className="caption"
									value={ cite }
								/>
								<hr />
							</div>
							{ className.includes( 'is-style-modern' ) &&
								photoCredit && (
									<div className="wp-component-media-credit">
										{ photoCredit }
									</div>
								) }
						</div>
					</blockquote>
				</div>

				{ isStyleDefault( className ) && photoCredit && (
					<div className="wp-component-media-credit">
						{ photoCredit }
					</div>
				) }
			</div>
		);
	},
} );
