/**
 * Edit function for the modal block.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import themeOptions from '../../global/theme-options';
import { getColorSlug } from '../../global/color-utils.mjs';
import Background, { BackgroundControls } from '../../components/background';
import allowedBlocks from '../../components/allowed-blocks';
import getAllowedFormats from '../../global/allowed-formats';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';

import { useState } from '@wordpress/element';

import { PanelRow } from '@wordpress/components';

import {
	InspectorControls,
	InnerBlocks,
	PanelColorSettings,
	RichText,
	getColorObjectByAttributeValues,
	useBlockProps,
} from '@wordpress/block-editor';

// Only allow images in the background component for this block.
const allowedMedia = [ 'image' ];

//const BUEditorialModalEdit = ( props ) => {
export default function Edit( props ) {
	const { attributes, setAttributes, className } = props;

	const { backgroundId, calloutHeading, calloutText, trigger, themeColor } =
		attributes;

	const [ isUploading, setIsUploading ] = useState( false );

	const classes = classnames( className, {
		[ `has-${ themeColor }-theme` ]: themeColor,
		'has-media': backgroundId,
	} );

	const themeColorObject = getColorObjectByAttributeValues(
		themeOptions(),
		themeColor
	);

	const blockProps = useBlockProps( {
		className: classes,
	} );

	return (
		<>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Theme Settings' ) }
					colorSettings={ [
						{
							value: themeColorObject?.color,
							onChange: ( value ) =>
								setAttributes( {
									themeColor: value
										? getColorSlug( value, themeOptions() )
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
							<em>No Color Palette available for this site.</em>
						</PanelRow>
					) }
				</PanelColorSettings>
			</InspectorControls>
			<BackgroundControls
				allowedMediaTypes={ allowedMedia }
				blockProps={ props }
				className="banner-placeholder"
				placeholderText={ __( 'Add Image' ) }
				setIsUploading={ setIsUploading }
				imageSize="large"
			/>
			<aside { ...blockProps }>
				<div className="wp-block-editorial-modal-callout">
					<div className="wp-block-editorial-modal-media">
						<figure className="wp-block-editorial-modal-image">
							<Background
								blockProps={ props }
								isUploading={ isUploading }
							/>
						</figure>
					</div>
					<div className="wp-block-editorial-modal-callout-content">
						<div className="modal-valign">
							<RichText
								tagName="h1"
								onChange={ ( value ) =>
									setAttributes( { calloutHeading: value } )
								}
								value={ calloutHeading }
								placeholder={ __( 'Enter heading…' ) }
								formattingControls={ getAllowedFormats(
									'formattingControls',
									[]
								) }
								allowedFormats={ getAllowedFormats(
									'allowedFormats',
									[]
								) }
							/>
							<RichText
								tagName="p"
								onChange={ ( value ) =>
									setAttributes( { calloutText: value } )
								}
								value={ calloutText }
								placeholder={ __( 'Enter text…' ) }
								formattingControls={ getAllowedFormats(
									'formattingControls',
									[ 'bold', 'italic', 'link' ]
								) }
								allowedFormats={ getAllowedFormats(
									'allowedFormats',
									[ 'core/bold', 'core/italic', 'core/link' ]
								) }
							/>
							<div className="wp-block-editorial-modal-trigger-wrapper">
								<RichText
									tagName="p"
									className="js-bu-block-modal-trigger-overlay button"
									onChange={ ( value ) =>
										setAttributes( { trigger: value } )
									}
									value={ trigger }
									placeholder={ __( 'Enter trigger label…' ) }
									formattingControls={ getAllowedFormats(
										'formattingControls',
										[]
									) }
									allowedFormats={ getAllowedFormats(
										'allowedFormats',
										[]
									) }
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="wp-block-editorial-modal-content js-bu-block-modal-overlay">
					<div className="overlay overlay-scale">
						<a
							href="#"
							className="wp-block-editorial-modal-overlay-close js-bu-block-modal-overlay-close"
						>
							Close
						</a>
						<article>
							<InnerBlocks allowedBlocks={ allowedBlocks() } />
						</article>
					</div>
				</div>
			</aside>
		</>
	);
}
