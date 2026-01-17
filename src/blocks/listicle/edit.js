/**
 * Edit function for the listicle block.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import Background, {
	BackgroundAttributes,
	BackgroundControls,
} from '../../components/background';
import ShareTools, {
	ShareToolsAttributes,
	ShareToolsControls,
} from '../../components/share-tools';
import getAllowedFormats from '../../global/allowed-formats';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';
import { PanelBody, ToggleControl } from '@wordpress/components';
import {
	InspectorControls,
	RichText,
	PlainText,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string}  className          Default classes assigned to the block.
 * @param {string}  number             Value of the number attribute.
 * @param {string}  aside              Whether the block has aside content.
 * @param {number}  backgroundUrl      The URL of the background media assigned to the block.
 * @param {boolean} backgroundAutoplay Whether the background video is set to autoplay.
 * @param           divider
 */
export const getClasses = (
	className = '',
	number,
	aside,
	backgroundUrl,
	backgroundAutoplay,
	divider
) => {
	return classnames( className, {
		'has-number': number,
		'has-sidebar': aside,
		'has-media': backgroundUrl,
		'has-video-as-loop': backgroundAutoplay,
		'has-no-bottom-divider': ! divider,
	} );
};

/**
 * Determine if the related links list is empty.
 *
 * @param {string} related The value of the `related` attribute.
 */
export const hasRelatedLinks = ( related ) => {
	if (
		'undefined' === typeof related ||
		'<li></li>' === related ||
		RichText.isEmpty( related )
	) {
		return false;
	}

	return true;
};

export default function Edit( props ) {
	// Get the block properties.
	const { attributes, setAttributes, isSelected } = props;
	const className = props?.className ?? '';

	// Get the block attributes.
	const {
		hed,
		dek,
		content,
		aside,
		number,
		related,
		credit,
		backgroundUrl,
		backgroundAutoplay,
		backgroundCaption,
		divider,
	} = attributes;

	const [ isUploading, setIsUploading ] = useState( false );

	/**
	 * Update credit attribute with the caption of the selected image.
	 */
	useEffect( () => {
		// Stop here if the `credit` attribute is already set.
		if ( !! credit || ! backgroundCaption ) {
			return;
		}

		// Update the `credit` attribute using the caption from the selected image.
		setAttributes( { credit: backgroundCaption } );
	}, [ backgroundCaption, credit, setAttributes ] );

	// Check if the block has aside content (extra condition due to use of multiline).
	const hasAsideContent = ! RichText.isEmpty( aside ) && aside !== '<br>';

	/**
	 * Get a value to use for the inline width of the number input.
	 *
	 * Returns either 100% if the field is empty, or `{n}ch`,
	 * where `{n}` is the number of characters in the input.
	 *
	 */
	const getNumberInputWidth = number ? number.length + 'ch' : '100%';

	const blockProps = useBlockProps( {
		className: getClasses(
			className,
			number,
			hasAsideContent,
			backgroundUrl,
			backgroundAutoplay,
			divider
		),
	} );

	// Return the block editing interface.
	return (
		<section { ...blockProps }>
			<BackgroundControls
				blockProps={ props }
				inlinePlaceholder={ true }
				setIsUploading={ setIsUploading }
				options={ [] }
				imageSize="large"
			/>
			<ShareToolsControls blockProps={ props } />
			<article className="wp-block-editorial-listicle-article">
				<figure className="wp-block-editorial-listicle-figure">
					<Background
						blockProps={ props }
						isUploading={ isUploading }
					/>
					<RichText
						tagName="figcaption"
						className="wp-caption-text wp-block-editorial-listicle-caption wp-prepress-component-caption"
						value={ credit }
						onChange={ ( value ) =>
							setAttributes( { credit: value } )
						}
						placeholder={ __( 'Add Photo or Video Credit…' ) }
						formattingControls={ getAllowedFormats(
							'formattingControls',
							[ 'bold', 'italic', 'link' ]
						) }
						allowedFormats={ getAllowedFormats( 'allowedFormats', [
							'core/bold',
							'core/italic',
							'core/link',
						] ) }
						keepPlaceholderOnFocus
					/>
				</figure>
				<header className="wp-block-editorial-listicle-header">
					{ ( number || isSelected ) && (
						<h2 className="wp-block-editorial-listicle-header-number">
							<PlainText
								placeholder={ __(
									'Add Item Number (Optional)…'
								) }
								value={ number }
								onChange={ ( number ) =>
									setAttributes( { number } )
								}
								style={ {
									width: getNumberInputWidth,
								} }
							/>
						</h2>
					) }
					<div className="wp-block-editorial-listicle-header-content">
						<RichText
							tagName="h3"
							className="wp-block-editorial-listicle-header-content-hed"
							placeholder={ __( 'Add Title…' ) }
							value={ hed }
							onChange={ ( value ) =>
								setAttributes( { hed: value } )
							}
							formattingControls={ getAllowedFormats(
								'formattingControls',
								[ 'bold', 'italic' ]
							) }
							allowedFormats={ getAllowedFormats(
								'allowedFormats',
								[ 'core/bold', 'core/italic' ]
							) }
						/>
						<RichText
							tagName="h4"
							className="wp-block-editorial-listicle-header-content-dek"
							placeholder={ __( 'Add Subtitle…' ) }
							value={ dek }
							onChange={ ( value ) =>
								setAttributes( { dek: value } )
							}
							formattingControls={ getAllowedFormats(
								'formattingControls',
								[ 'bold', 'italic' ]
							) }
							allowedFormats={ getAllowedFormats(
								'allowedFormats',
								[ 'core/bold', 'core/italic' ]
							) }
						/>
					</div>
				</header>
				<section className="wp-block-editorial-listicle-section">
					<RichText
						tagName="div"
						className="wp-block-editorial-listicle-section-content"
						multiline="p"
						placeholder={ __(
							'Add Content… lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in dictum felis. Nullam gravida dui nunc, vitae tristique ex pellentesque at. Suspendisse id porttitor metus. Nullam et ipsum hendrerit urna mattis porttitor at in leo.'
						) }
						value={ content }
						onChange={ ( value ) =>
							setAttributes( { content: value } )
						}
						formattingControls={ getAllowedFormats(
							'formattingControls',
							[ 'bold', 'italic', 'link' ]
						) }
						allowedFormats={ getAllowedFormats( 'allowedFormats', [
							'core/bold',
							'core/italic',
							'core/link',
						] ) }
					/>
					<div className="wp-block-editorial-listicle-section-meta">
						{ ( hasAsideContent || isSelected ) && (
							<aside className="wp-block-editorial-listicle-section-aside">
								<RichText
									tagName="p"
									placeholder={ __(
										'Add Sidebar (Optional)…'
									) }
									value={ aside }
									onChange={ ( value ) =>
										setAttributes( { aside: value } )
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
								/>
							</aside>
						) }
						<ShareTools blockProps={ props } />
					</div>
				</section>
				{ ( hasRelatedLinks( related ) || isSelected ) && (
					<footer className="wp-block-editorial-listicle-footer">
						<h3 className="wp-block-editorial-listicle-footer-title">
							Related Stories
						</h3>
						<RichText
							tagName="ul"
							multiline="li"
							className="wp-block-editorial-listicle-footer-list"
							placeholder={ __( 'Enter Related Stories List…' ) }
							value={ related }
							onChange={ ( value ) =>
								setAttributes( { related: value } )
							}
							formattingControls={ getAllowedFormats(
								'formattingControls',
								[ 'link' ]
							) }
							allowedFormats={ getAllowedFormats(
								'allowedFormats',
								[ 'core/link' ]
							) }
						/>
					</footer>
				) }
			</article>
			<InspectorControls>
				<PanelBody title={ __( 'Display Options' ) }>
					<ToggleControl
						label={ __( 'Show Bottom Divider' ) }
						checked={ divider }
						onChange={ () =>
							setAttributes( { divider: ! divider } )
						}
					/>
				</PanelBody>
			</InspectorControls>
		</section>
	);
}
