/**
 * Edit function for the leadin block.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import themeOptions from '../../global/theme-options';
import Background from '../../components/background';

// WordPress dependencies.
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;
const { CheckboxControl, SelectControl, PanelBody } = wp.components;
const { InspectorControls, PanelColorSettings, RichText, withColors } = wp.editor;

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

class BULeadinEdit extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		// Get the block properties.
		const {
			attributes,
			themeColor,
			setThemeColor,
			setAttributes,
			className,
			isSelected,
		} = this.props;

		// Get the block attributes.
		const {
			backgroundId,
			head,
			deck,
			imageFocus,
			textPositionX,
			textPositionY,
			wide,
			box,
			flip,
			primaryTerm,
		} = attributes;

		const isStyleEmphasisOnText = className.includes( 'is-style-emphasis-on-text' );
		const isStyleTextOverImage = className.includes( 'is-style-text-over-image' );
		const isStyleSideBySide = className.includes( 'is-style-side-by-side' );

		const classes = classnames(
			'wp-block-leadin',
			publicationClass + '-block-leadin',
			className,
			{
				'has-box': box && ( isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide ),
				'has-wider': wide && isStyleSideBySide,
				'has-flip': flip && isStyleSideBySide,
				'has-media': backgroundId,
				[ `has-image-focus-${imageFocus}` ]: imageFocus,
				[ `has-text-position-${textPositionX}` ]: textPositionX && isStyleTextOverImage,
				[ `has-text-position-${textPositionY}` ]: textPositionY && isStyleTextOverImage,
				[ `has-${themeColor.slug}-theme` ]: themeColor.slug,
			}
		);

		const primaryTermInput = document.getElementById( '_bu_prepress_primary_term_select' );

		// Check that the primary term input exists, as the feature may not be supported.
		if ( primaryTermInput ) {
			if ( primaryTermInput.value ) {
				setAttributes( { primaryTerm: primaryTermInput.value } );
			}

			primaryTermInput.addEventListener( "change", function() {
				setAttributes( { primaryTerm: primaryTermInput.value } );
			} );
		}

		// Return the background media positioning controls if a background is set.
		const mediaPositioningControls = () => {
			if ( ! backgroundId ) {
				return null;
			}

			return (
				<PanelBody title={ __( 'Media Positioning' ) } initialOpen={ false }>
					<SelectControl
						label={ __( 'Media Focal Point' ) }
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

		// Return the text positioning controls if the 'Image with Text Overlay' style is set.
		const textPositioningControls = () => {
			if ( ! isStyleTextOverImage ) {
				return null;
			}

			return (
				<Fragment>
					<SelectControl
						label={ __( 'Horizontal Text Positioning' ) }
						value={ textPositionX }
						onChange={ value => setAttributes( { textPositionX: value } ) }
						options={ [
							{ value: 'x-left', label: __( 'Left' ) },
							{ value: 'x-center', label: __( 'Center' ) },
							{ value: 'x-right', label: __( 'Right' ) }
						] }
					/>
					<SelectControl
						label={ __( 'Vertical Text Positioning' ) }
						value={ textPositionY }
						onChange={ value => setAttributes( { textPositionY: value } ) }
						options={ [
							{ value: 'y-top', label: __( 'Top' ) },
							{ value: '', label: __( 'Center' ) },
							{ value: 'y-bottom', label: __( 'Bottom' ) }
						] }
					/>
				</Fragment>
			);
		};

		// Return layout controls for the 'Vertical Image and Text Side By Side' style.
		const sideBySideLayoutControls = () => {
			if ( ! className.includes( 'is-style-side-by-side' ) ) {
				return null;
			}

			return (
				<Fragment>
					<CheckboxControl
						label={ __( 'Flip Order' ) }
						checked={ flip }
						onChange={ ( flip ) => { setAttributes( { flip } ) } }
					/>
					<CheckboxControl
						label={ __( 'Wide Layout' ) }
						checked={ wide }
						onChange={ ( wide ) => { setAttributes( { wide } ) } }
					/>
				</Fragment>
			);
		};

		// Return layout options if specific styles are set.
		const layoutControls = () => {
			if ( ! ( isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide ) ) {
				return null;
			}

			return (
				<PanelBody title={ __( 'Layout Options' ) }>
					{ sideBySideLayoutControls() }
					{ textPositioningControls() }
					<CheckboxControl
						label={ __( 'Boxed Text' ) }
						checked={ box }
						onChange={ ( box ) => { setAttributes( { box } ) } }
					/>
				</PanelBody>
			);
		};

		// Return the block editing interface.
		return (
			<Fragment>
				<div className={ classes }>
					<div class="container-lockup">
						<div class="wp-block-leadin-media">
							<Background
								blockProps={ this.props }
								controlPanelTitle={ __( 'Media' ) }
							/>
						</div>
						<div class="container-words-outer">
							<div class="container-words-inner">
								{ primaryTerm && (
									<span class="wp-prepress-tag">{ primaryTerm }</span>
								) }
								<RichText
									tagName="h1"
									className="head"
									placeholder={ __( 'Add headline' ) }
									value={ head }
									onChange={ value => setAttributes( { head: value } ) }
									formattingControls={ [ 'bold', 'italic' ] }
									keepPlaceholderOnFocus
								/>
								{ ( ! RichText.isEmpty( deck ) || isSelected ) && (
									<RichText
										tagName="h4"
										className="deck"
										placeholder={ __( 'Add subheader (optional)' ) }
										value={ deck }
										onChange={ value => setAttributes( { deck: value } ) }
										formattingControls={ [ 'bold', 'italic' ] }
									/>
								) }
							</div>
						</div>
					</div>
				</div>
				<InspectorControls>
					{ mediaPositioningControls() }
					{ layoutControls() }
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
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
				</InspectorControls>
			</Fragment>
		);
	}
}

export default compose( [
	withColors( 'themeColor' )
] )( BULeadinEdit );