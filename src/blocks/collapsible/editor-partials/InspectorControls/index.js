import { __ } from '@wordpress/i18n';

import {
	PanelBody,
	ToggleControl,
	TextControl,
	RangeControl,
	Button,
	ButtonGroup,
	Icon,
} from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';

import './editor.scss';

// Load SVG icon for Icon Style picker.
import { ReactComponent as CollapsibleIcon } from '../../icon-collapsible.svg';

export const EditorPartialsInspectorControls = ( props ) => {
	const { attributes, setAttributes } = props;

	const {
		isOpen,
		iconStyle,
		customMarginBottom,
		marginBottom,
		id,
		buttonCloseLabel,
		buttonOpenLabel,
		autoID,
	} = attributes;

	let isPreviewStyle = false;
	if ( props.attributes.className ) {
		isPreviewStyle =
			props.attributes.className.includes( 'is-style-preview' );
	}

	return (
		<InspectorControls>
			{ ! isPreviewStyle && (
				<PanelBody title={ __( 'Icon Style' ) }>
					<ButtonGroup className="bu-collapsible-icon-style-button">
						<Button
							isPrimary={ 'plus-minus' === iconStyle }
							isSecondary={ 'plus-minus' !== iconStyle }
							showTooltip={ true }
							label={ __( 'Plus/Minus' ) }
							onClick={ () =>
								setAttributes( {
									iconStyle: 'plus-minus',
								} )
							}
						>
							<span className="bu-collapsible-icon-style-button-plus">
								<Icon icon={ <CollapsibleIcon /> } />
							</span>
							<span className="bu-collapsible-icon-style-button-minus">
								<Icon icon={ <CollapsibleIcon /> } />
							</span>
						</Button>
						<Button
							isPrimary={ 'arrows' === iconStyle }
							isSecondary={ 'arrows' !== iconStyle }
							showTooltip={ true }
							label={ __( 'Arrows' ) }
							onClick={ () =>
								setAttributes( { iconStyle: 'arrows' } )
							}
						>
							<span className="bu-collapsible-icon-style-button-down">
								<Icon icon={ <CollapsibleIcon /> } />
							</span>
							<span className="bu-collapsible-icon-style-button-up">
								<Icon icon={ <CollapsibleIcon /> } />
							</span>
						</Button>
					</ButtonGroup>
				</PanelBody>
			) }

			{ isPreviewStyle && (
				<PanelBody title={ __( 'Button Labels' ) }>
					<TextControl
						label={ __( 'Open Button Label' ) }
						value={ buttonOpenLabel }
						onChange={ ( value ) =>
							setAttributes( { buttonOpenLabel: value } )
						}
					/>
					<TextControl
						label={ __( 'Close Button Label' ) }
						value={ buttonCloseLabel }
						onChange={ ( value ) =>
							setAttributes( { buttonCloseLabel: value } )
						}
					/>
				</PanelBody>
			) }

			{ ! isPreviewStyle && (
				<PanelBody title={ __( 'Default Collapsible Status' ) }>
					<ToggleControl
						label={ __( 'Open' ) }
						checked={ isOpen }
						onChange={ () => setAttributes( { isOpen: ! isOpen } ) }
					/>
				</PanelBody>
			) }

			<PanelBody title={ __( 'Spacing' ) }>
				<ToggleControl
					label={ __( 'Custom spacing' ) }
					checked={ customMarginBottom }
					onChange={ () =>
						setAttributes( {
							customMarginBottom: ! customMarginBottom,
						} )
					}
				/>

				{ customMarginBottom && (
					<RangeControl
						label={ __( 'Bottom Margin (px)' ) }
						value={ marginBottom }
						onChange={ ( value ) =>
							setAttributes( { marginBottom: value } )
						}
						min={ 0 }
						max={ 200 }
						step={ 1 }
					/>
				) }
			</PanelBody>

			<PanelBody title={ __( 'Anchor ID' ) }>
				<ToggleControl
					label={ __( 'Automatically Generated' ) }
					checked={ autoID }
					onChange={ () => setAttributes( { autoID: ! autoID } ) }
				/>
				<p>
					<strong>Note:</strong> The id <em>must</em> be unique and
					cannot be duplicated in this post. Unique ID&apos;s are
					needed on each instance of this block so that the aria
					labels properly document the button and interactive state of
					the block for accessibility. Duplicate ID&apos;s are an
					accessibility issue and cause errors with interactions with
					the blocks. Do not use spaces.
				</p>
				{ autoID && (
					<TextControl
						label={ __( 'Unique HTML ID' ) }
						value={ id }
						disabled={ true }
					/>
				) }
				{ ! autoID && (
					<TextControl
						label={ __( 'Unique HTML ID' ) }
						value={ id }
						onChange={ ( value ) => setAttributes( { id: value } ) }
					/>
				) }
			</PanelBody>
		</InspectorControls>
	);
};
