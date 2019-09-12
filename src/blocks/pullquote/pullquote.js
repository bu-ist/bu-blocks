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
import Background, { BackgroundAttributes } from '../../components/background';
import getAllowedFormats from '../../global/allowed-formats';
import themeOptions from '../../global/theme-options';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	Fragment,
} = wp.element;
const {
	PanelBody,
	Path,
	SelectControl,
	TextControl,
	SVG,
} = wp.components;
const {
	InspectorControls,
	PanelColorSettings,
	RichText,
	withColors,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

// Returns true if the current block style is "Default".
const isStyleDefault = ( className ) => {
	return ( ! className.includes( 'is-style-modern' ) && ! className.includes( 'is-style-pop' ) );
};

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className    The classnames assigned to the block
 * @param {number} backgroundId ID of the background media, if set.
 * @param {string} imageFocus   Value of the "Crop Media To" setting.
 * @param {string} themeColor   Value of the "Theme Color" setting.
 */
const getClasses = ( className, backgroundId, imageFocus, themeColor ) => {
	const isStylePop = className.includes( 'is-style-pop' );

	return (
		classnames(
			className,
			{
				'has-image': ( backgroundId && ! isStylePop ),
				[ `has-image-focus-${imageFocus}` ]: ( imageFocus && ! isStylePop ),
				[ `has-${themeColor}-theme` ]: themeColor,
			}
		)
	);
}

// Only allow images in the background component for this block.
const allowedMedia = [ 'image' ];

// Register the block.
registerBlockType( 'bu/pullquote', {
	title: __( 'BU Pullquote' ),
	description: __( '' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu',
	supports: {
		align: [ 'full', 'wide' ],
	},
	attributes: {
		quote: {
			type: 'array',
			source: 'children',
			selector: '.quote-sizing'
		},
		photoCredit: {
			type: 'string',
			source: 'text',
			selector: '.wp-component-media-credit',
		},
		cite: {
			type: 'array',
			source: 'children',
			selector: 'footer'
		},
		imageFocus: {
			type: 'string',
			default: 'center-middle'
		},
		className: {
			type: 'string',
		},
		themeColor: {
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

	edit: withColors( 'themeColor' )( props => {
		// Get the block properties.
		const {
			attributes,
			setAttributes,
			className,
			setThemeColor,
			themeColor,
		} = props;

		// Get the block attributes.
		const {
			quote,
			cite,
			photoCredit,
			imageFocus,
			backgroundId,
		} = attributes;

		// Return the background media positioning controls if a background is set
		// and the style is not set to "Pop".
		const mediaPositioningControls = () => {
			if ( ! backgroundId || className.includes( 'is-style-pop' ) ) {
				return null;
			}

			return (
				<PanelBody title={ __( 'Media Positioning' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Crop Media to:' ) }
						value={ imageFocus }
						onChange={ value => setAttributes( { imageFocus: value } ) }
						options={ [
							{ value: 'left-top', label: __( 'Left Top' ) },
							{ value: 'left-middle', label: __( 'Left Center' ) },
							{ value: 'left-bottom', label: __( 'Left Bottom' ) },
							{ value: 'center-top', label: __( 'Center Top' ) },
							{ value: 'center-middle', label: __( 'Center' ) },
							{ value: 'center-bottom', label: __( 'Center Bottom' ) },
							{ value: 'right-top', label: __( 'Right Top' ) },
							{ value: 'right-middle', label: __( 'Right Center' ) },
							{ value: 'right-bottom', label: __( 'Right Bottom' ) },
						] }
					/>
				</PanelBody>
			);
		};

		// Return the block editing interface.
		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Media Options' ) } >
						<TextControl
							label={ __( 'Media Credit' ) }
							onChange={ photoCredit => setAttributes( { photoCredit } ) }
							value={ photoCredit }
						/>
					</PanelBody>
					<PanelColorSettings
						title={ __( 'Theme Color' ) }
						initialOpen={ false }
						colorSettings={ [
							{
								value: themeColor.color,
								onChange: setThemeColor,
								label: __( 'Theme' ),
								disableCustomColors: true,
								colors: themeOptions(),
							},
						] }
					/>
					{ mediaPositioningControls() }
				</InspectorControls>
				<div className={ getClasses( className, backgroundId, imageFocus, themeColor.slug ) }>
					<div className="wp-block-bu-pullquote-inner">
					{ isStyleDefault( className ) && (
						<Fragment>
							<Background
								allowedMediaTypes={ allowedMedia }
								blockProps={ props }
								placeholderText={ __( 'Add Image' ) }
							/>
						</Fragment>
					) }
					<blockquote>
						<div className="container-lockup">
							<div className="container-icon-outer">
								<div className="container-icon-inner">
									{ className.includes( 'is-style-modern' ) && (
										<Background
											allowedMediaTypes={ allowedMedia }
											blockProps={ props }
											placeholderText={ __( 'Add Image' ) }
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
										onChange={ value => setAttributes( { quote: value } ) }
										formattingControls={ getAllowedFormats( 'formattingControls', [ 'bold', 'italic', 'link' ] ) }
										allowedFormats={ getAllowedFormats( 'allowedFormats', [ 'core/bold', 'core/italic', 'core/link' ] ) }
										keepPlaceholderOnFocus
									/>
									<RichText
										tagName="footer"
										placeholder={ __( 'Add quote attribution…' ) }
										value={ cite }
										onChange={ value => setAttributes( { cite: value } ) }
										formattingControls={ getAllowedFormats( 'formattingControls', [ 'bold', 'italic', 'link' ] ) }
										allowedFormats={ getAllowedFormats( 'allowedFormats', [ 'core/bold', 'core/italic', 'core/link' ] ) }
										keepPlaceholderOnFocus
									/>
								<hr />
							</div>
						</div>
					</blockquote>
					</div>
					{ photoCredit && (
						<div className="wp-component-media-credit">
							{ photoCredit }
						</div>
						)
					}
				</div>
			</Fragment>
		);
	} ),

	save( props ) {
		// Get the block properties.
		const {
			attributes,
		} = props;

		// Get the block attributes.
		const {
			quote,
			cite,
			imageFocus,
			photoCredit,
			backgroundId,
			className = '', // Assign default in case the unpacked value is `undefined`.
			themeColor,
		} = attributes;

		// Returns the block rendering for the front end.
		return (
			<div className={ getClasses( className, backgroundId, imageFocus, themeColor ) }>
				<div className="wp-block-bu-pullquote-inner">
				{ isStyleDefault( className ) && (
					<figure>
						<Background
							blockProps={ props }
						/>
					</figure>
				) }
				<blockquote>
					<div className="container-lockup">
						<div className="container-icon-outer">
							<div className="container-icon-inner">
								{ className.includes( 'is-style-modern' ) && (
									<Background
										blockProps={ props }
									/>
								) }
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
					</div>
				</blockquote>
				</div>
				{ photoCredit && (
					<div className="wp-component-media-credit">
						{ photoCredit }
					</div>
					)
				}
			</div>
		);
	},
} );
