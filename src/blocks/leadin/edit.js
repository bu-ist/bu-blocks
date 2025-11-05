/**
 * BLOCK: bu/leadin
 *
 * Register a leadin block with Gutenberg.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies
import getAllowedFormats from '../../global/allowed-formats';
import publicationSlug from '../../global/publication-slug';
import Background, {
	BackgroundAttributes,
	BackgroundControls,
} from '../../components/background';
import LeadinInspectorControls from './editor-partials/InspectorControls';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import {
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { applyFilters } from '@wordpress/hooks';

/**
 * Edit function for the leadin block.
 *
 * @param {Object} props
 * @return {JSX.Element} The block edit component.
 */
export default function Edit( props ) {
	// Get the block properties and attributes.
	const {
		attributes: {
			backgroundId,
			backgroundUrl,
			backgroundAutoplay,
			head,
			deck,
			caption,
			imageFocus,
			textPositionX,
			textPositionY,
			wide,
			box,
			flip,
			metabar,
			metabardate,
			boxOpacity,
			videoUncropped,
			themeColor,
			className,
		},
		setAttributes,
		isSelected,
	} = props;

	const [ isUploading, setIsUploading ] = useState( false );

	const isStyleEmphasisOnText = Boolean(
		className?.includes( 'is-style-emphasis-on-text' )
	);
	const isStyleTextOverImage = Boolean(
		className?.includes( 'is-style-text-over-image' )
	);
	const isStyleSideBySide = Boolean(
		className?.includes( 'is-style-side-by-side' )
	);

	// Get the Publication Slug.
	const publication = publicationSlug();

	const classes = classnames(
		'wp-block-editorial-leadin',
		{
			[ `${ publication }-block-editorial-leadin` ]: publication !== '',
		},
		className,
		{
			'has-box':
				box &&
				( isStyleEmphasisOnText ||
					isStyleTextOverImage ||
					isStyleSideBySide ),
			'has-wider': wide && isStyleSideBySide,
			'has-flip': flip && isStyleSideBySide,
			'has-media': backgroundUrl,
			'has-video-as-loop': backgroundAutoplay,
			'has-video-uncropped': videoUncropped,
			[ `has-media-focus-${ imageFocus }` ]: imageFocus,
			[ `has-text-position-${ textPositionX }` ]:
				textPositionX && isStyleTextOverImage,
			[ `has-text-position-${ textPositionY }` ]:
				textPositionY && isStyleTextOverImage,
			[ `has-${ themeColor }-theme` ]: themeColor,
		}
	);

	const boxClasses = classnames( 'container-words-inner', {
		[ `has-opacity-${ boxOpacity }` ]:
			boxOpacity !== 100 &&
			box &&
			( isStyleEmphasisOnText || isStyleTextOverImage ),
	} );

	// Set up the block properties.
	const blockProps = useBlockProps( { className: classes } );

	// Return the block editing interface.
	return (
		<>
			<div { ...blockProps }>
				<div className="container-lockup">
					<div className="wp-block-leadin-media">
						<Background
							blockProps={ props }
							isUploading={ isUploading }
						/>
					</div>
					<div className="container-words-outer">
						<div className={ boxClasses }>
							{ applyFilters(
								'buPrepress.PrimaryTerm',
								'',
								props
							) }
							<RichText
								tagName="h1"
								className="head"
								placeholder={ __( 'Add headline' ) }
								value={ head }
								onChange={ ( value ) =>
									setAttributes( { head: value } )
								}
								formattingControls={ getAllowedFormats(
									'formattingControls',
									[ 'bold', 'italic' ]
								) }
								allowedFormats={ getAllowedFormats(
									'allowedFormats',
									[ 'core/bold', 'core/italic' ]
								) }
								keepPlaceholderOnFocus
							/>
							{ ( ! RichText.isEmpty( deck ) || isSelected ) && (
								<RichText
									tagName="h4"
									className="deck"
									placeholder={ __(
										'Add subheader (optional)'
									) }
									value={ deck }
									onChange={ ( value ) =>
										setAttributes( { deck: value } )
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
							) }
						</div>
					</div>
				</div>
				{ ( ! RichText.isEmpty( caption ) || isSelected ) && (
					<RichText
						tagName="p"
						className="wp-block-editorial-leadin-caption wp-prepress-component-caption"
						placeholder={ __(
							'Add a caption and/or media credit…'
						) }
						value={ caption }
						onChange={ ( value ) =>
							setAttributes( { caption: value } )
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
						keepPlaceholderOnFocus
					/>
				) }
			</div>

			{ applyFilters(
				'buBlocks.leadin.metaBar',
				'',
				metabar,
				metabardate
			) }
			<BackgroundControls
				blockProps={ props }
				setIsUploading={ setIsUploading }
			/>
			<LeadinInspectorControls { ...props } />
		</>
	);
}
