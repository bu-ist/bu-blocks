/**
 * Edit function for the leadin block.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import themeOptions from '../../global/theme-options.js';

// WordPress dependencies.
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;
const { CheckboxControl, SelectControl, PanelBody } = wp.components;
const { InspectorControls, PanelColorSettings, RichText, withColors } = wp.editor;

class BULeadinEdit extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			attributes,
			themeColor,
			setThemeColor,
			setAttributes,
			className,
		} = this.props;

		const {
			media,
			head,
			deck,
			imageFocus,
			textPositionX,
			textPositionY,
			wide,
			box,
			flip,
		} = attributes;

		const isStyleEmphasisOnText = className.includes( 'is-style-emphasis-on-text' );
		const isStyleTextOverImage = className.includes( 'is-style-text-over-image' );
		const isStyleSideBySide = className.includes( 'is-style-side-by-side' );

		const classes = classnames(
			'wp-block-leadin',
			className,
			{
				'has-box': box && ( isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide ),
				'has-wider': wide && isStyleSideBySide,
				'has-flip': flip && isStyleSideBySide,
				[ `has-image-focus-${imageFocus}` ]: imageFocus,
				[ `has-text-position-${textPositionX}` ]: textPositionX && isStyleTextOverImage,
				[ `has-text-position-${textPositionY}` ]: textPositionY && isStyleTextOverImage,
				[ `has-${themeColor.slug}-theme` ]: themeColor.slug,
			}
		);

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Image Options' ) }>
						<SelectControl
							label={ __( 'Image Focal Point' ) }
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
					{ ( isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide ) && (
						<PanelBody title={ __( 'Layout Options' ) }>
							{ isStyleTextOverImage && (
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
							) }
							{ isStyleTextOverImage && (
								<SelectControl
									label={ __( 'Vertical Text Positioning' ) }
									value={ textPositionY }
									onChange={ value => setAttributes( { textPositionY: value } ) }
									options={ [
										{ value: 'y-top', label: __( 'Top' ) },
										{ value: 'y-middle', label: __( 'Center' ) },
										{ value: 'y-bottom', label: __( 'Bottom' ) }
									] }
								/>
							) }
							{ ( isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide ) && (
								<CheckboxControl
									label={ __( 'Boxed Text' ) }
									checked={ box }
									onChange={ ( box ) => { setAttributes( { box } ) } }
								/>
							) }
							{ className.includes( 'is-style-side-by-side' ) && (
								<CheckboxControl
									label={ __( 'Flip Order' ) }
									checked={ flip }
									onChange={ ( flip ) => { setAttributes( { flip } ) } }
								/>
							) }
							{ className.includes( 'is-style-side-by-side' ) && (
								<CheckboxControl
									label={ __( 'Wide Layout' ) }
									checked={ wide }
									onChange={ ( wide ) => { setAttributes( { wide } ) } }
								/>
							) }
						</PanelBody>
					) }
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
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
				<div className={ classes }>
					<div class="container-lockup">
						<div class="wp-block-leadin-media">
							<img src="https://www.bu.edu/bostonia/files/2018/10/resize-18-1763-TASTE-004.jpg" />
						</div>
						<div class="container-words-outter">
							<div class="container-words-inner">
								<span href="http://www.bu.edu/" class="wp-prepress-tag"></span>
								<RichText
									tagName="h1"
									className="head"
									placeholder={ __( 'Add headline…' ) }
									value={ head }
									onChange={ value => setAttributes( { head: value } ) }
									formattingControls={ [ 'bold', 'italic' ] }
									keepPlaceholderOnFocus
								/>
								<RichText
									tagName="h4"
									className="deck"
									placeholder={ __( 'Add subheader…' ) }
									value={ deck }
									onChange={ value => setAttributes( { deck: value } ) }
									formattingControls={ [ 'bold', 'italic' ] }
								/>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default compose( [
	withColors( 'themeColor' )
] )( BULeadinEdit );