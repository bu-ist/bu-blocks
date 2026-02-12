/**
 * Edit function for the pullquote block.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import Background, {
	BackgroundAttributes,
	BackgroundControls,
} from '../../components/background';
import getAllowedFormats from '../../global/allowed-formats';
import themeOptions from '../../global/theme-options';
import { getColorSlug } from '../../global/color-utils.mjs';
import ThemeColorPanel from '../../components/colorthemes-panel/index.js';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	PanelBody,
	PanelRow,
	SelectControl,
	TextControl,
} from '@wordpress/components';
import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

// Returns true if the current block style is "Default".
const isStyleDefault = ( className = '' ) => {
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
	className = '',
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

// Only allow images in the background component for this block.
const allowedMedia = [ 'image' ];

export default function Edit( props ) {
	// Get the block properties.
	const { attributes, setAttributes, name } = props;
	const className = props?.className ?? '';

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

	const blockProps = useBlockProps( {
		className: getClasses(
			className,
			backgroundId,
			imageFocus,
			themeColor,
			textColor
		),
	} );

	// Return the background media positioning controls if a background is set
	// and the style is not set to Pop.
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

	// themOptions() returns the full/global color palette added to editor settings.
	const themeOptionsPalette = themeOptions();

	// Return the block editor interface.
	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Media Options' ) }>
					<TextControl
						label={ __( 'Media Credit' ) }
						onChange={ ( value ) =>
							setAttributes( { photoCredit: value } )
						}
						value={ photoCredit }
					/>
				</PanelBody>
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
				<ThemeColorPanel
					title='Text Color Theme'
					blockname={ name }
					value={ textColor }
					themepalette={ themeOptionsPalette }
					onChange={ ( value, palette ) =>
						setAttributes( {
							textColor: value
								? getColorSlug( value, palette )
								: undefined,
						} )
					}
				/>
				{ mediaPositioningControls() }
			</InspectorControls>
			<BackgroundControls
				allowedMediaTypes={ allowedMedia }
				blockProps={ props }
				placeholderText={ __( 'Add Image' ) }
				setIsUploading={ setIsUploading }
				imageSize="large"
			/>
			<div { ...blockProps }>
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
}
