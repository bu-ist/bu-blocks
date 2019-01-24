/**
 * Edit function for the modal block.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import themeOptions from '../../global/theme-options.js';
import Background from '../../components/background/background.js';

// WordPress dependencies.
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;
const { InspectorControls, InnerBlocks, PanelColorSettings, RichText, withColors } = wp.editor;
const { select } = wp.data;
const { hasSelectedInnerBlock, isBlockSelected } = select( 'core/editor' );

class BUEditorialModalEdit extends Component {
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
			clientId,
		} = this.props;

		const {
			backgroundId,
			calloutHeading,
			calloutText,
			trigger
		} = attributes;

		const classes = classnames(
			className,
			{
				[ `has-${themeColor.slug}-theme` ]: themeColor.slug,
				'has-media': backgroundId,
			}
		);

		// Set the clientId attribute so it can be accessed in the `getEditWrapperProps` function.
		if ( hasSelectedInnerBlock( clientId, true ) || isBlockSelected( clientId ) ) {
			setAttributes( { clientId: clientId } );
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelColorSettings
						title={ __( 'Theme Settings' ) }
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
				<aside className={ classes }>
					<div className="wp-block-editorial-modal-callout">
						<div className="wp-block-editorial-modal-media">
							<figure className="wp-block-editorial-modal-image">
								<Background
									blockProps={ this.props }
									className="banner-placeholder"
									controlPanelTitle={ __( 'Add Media' ) }
								/>
							</figure>
						</div>
						<div className="wp-block-editorial-modal-callout-content">
							<div className="modal-valign">
								<RichText
									tagName="h1"
									onChange={ value => setAttributes( { calloutHeading: value } ) }
									value={ calloutHeading }
									placeholder={ __( 'Enter heading…' ) }
									formattingControls={ [] }
								/>
								<RichText
									tagName="p"
									onChange={ value => setAttributes( { calloutText: value } ) }
									value={ calloutText }
									placeholder={ __( 'Enter text…' ) }
									formattingControls={ [ 'bold', 'italic', 'link' ] }
								/>
								<div className="wp-block-editorial-modal-trigger-wrapper">
									<RichText
										tagName="p"
										className="js-bu-block-modal-trigger-overlay button"
										onChange={ value => setAttributes( { trigger: value } ) }
										value={ trigger }
										placeholder={ __( 'Enter trigger label…' ) }
										formattingControls={ [] }
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="wp-block-editorial-modal-content js-bu-block-modal-overlay">
						<div className="overlay overlay-scale">
							<a href="#" class="wp-block-editorial-modal-overlay-close js-bu-block-modal-overlay-close">Close</a>
							<article>
								<InnerBlocks />
							</article>
						</div>
					</div>
				</aside>
			</Fragment>
		);
	}
}

export default compose( [
	withColors( 'themeColor' )
] )( BUEditorialModalEdit );