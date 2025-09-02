/**
 * Import External dependencies.
 */
// Import a library used to manage multiple class names.
import classnames from 'classnames';

/**
 * Import Internal dependencies.
 */
import getAllowedFormats from '../../global/allowed-formats';

// Import common handling of available color options.
import themeOptions from '../../global/theme-options';
// Import the utility to get a color slug from a color object.
import { getColorSlug } from '../../global/color-utils.mjs';

/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import {
	IconButton,
	PanelBody,
	Toolbar,
	PanelRow,
} from '@wordpress/components';
import {
	RichText,
	PlainText,
	InspectorControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	getColorObjectByAttributeValues,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Render the SVG used for a drop cap when the drop cap has an
 * image assigned to it.
 *
 * This is used in the block editor and stored in post content
 * as part of the block markup.
 *
 *
 * @param {string} character The character to display in the drop cap.
 * @param {string} imageURL  The background image for the drop cap character.
 */
const renderDropCapSVG = ( character, imageURL ) => {
	const randomID = 'dropcap-text-' + character;
	const clipPathURL = 'url(#' + randomID + ')';
	const xlinkurlAttr = { 'xlink:href': imageURL };
	return (
		<svg>
			<clipPath id={ randomID }>
				<text
					textAnchor="start"
					x="0"
					y="50%"
					dy=".404em"
					className="dropcap-filltext"
				>
					{ character }
				</text>
			</clipPath>
			<g clip-path={ clipPathURL }>
				<image
					{ ...xlinkurlAttr }
					href={ imageURL }
					width="100%"
					height="100%"
					preserveAspectRatio="none"
				/>
			</g>
		</svg>
	);
};

/**
 * The Edit function for the Intro Paragraph block.
 * @param {*} props The props for the Edit function.
 * @return {*}	JSX	The JSX for the Edit function.
 */
export default function Edit( props ) {
	console.log( props );
	const { attributes, setAttributes, onReplace, clientId } = props;

	const {
		heading,
		content,
		list,
		dropCapImageURL,
		dropCapImageId,
		paragraphColor,
		dropCapColor,
		className,
	} = attributes;

	// Determine if a sepecific dropcap style has been selected.
	const hasDropCapStyle =
		className && className.includes( 'is-style-dropcap' );

	// Ensure that the has-dropcap, other has-dropcap classes, and paragraph classes are aligned.
	if ( hasDropCapStyle ) {
		setAttributes( {
			paragraphColor: '',
		} );
	} else if ( ! hasDropCapStyle ) {
		setAttributes( {
			dropCapColor: '',
		} );
	}
	console.log( className );
	// Determine if the drop cap SVG should be included in content.
	const isImageDropCap =
		className && className?.includes( 'is-style-dropcap-image' );
	console.log( 'dropcap: ', isImageDropCap );
	// Pull the first character from the article content use in the drop cap SVG.
	let dropCapCharacter = '';
	if ( 'undefined' !== typeof content ) {
		dropCapCharacter = content.charAt( 0 );
	}

	// When an image is selected, set the URL and ID attributes on the block.
	const onSelectImage = ( media ) => {
		if ( ! media || ! media.url ) {
			setAttributes( {
				dropCapImageURL: '',
				dropCapImageId: null,
			} );
			return;
		}

		// Try to set a sensible image size to avoid full size images being loaded.
		let selectedMediaURL = media.url;

		// The first check is for images already in the media library.
		// The second is for newly uploaded images.
		if ( media.sizes ) {
			if ( media.sizes.bu_prepress_3x2_xs ) {
				selectedMediaURL = media.sizes.bu_prepress_3x2_xs.url;
			} else if ( media.sizes.thumbnail ) {
				selectedMediaURL = media.sizes.thumbnail.url;
			} else if ( media.sizes.medium ) {
				selectedMediaURL = media.sizes.medium.url;
			}
		} else if ( media.media_details ) {
			if ( media.media_details.sizes.bu_prepress_3x2_xs ) {
				selectedMediaURL =
					media.media_details.sizes.bu_prepress_3x2_xs.source_url;
			} else if ( media.media_details.sizes.thumbnail ) {
				selectedMediaURL =
					media.media_details.sizes.thumbnail.source_url;
			} else if ( media.media_details.sizes.medium ) {
				selectedMediaURL = media.media_details.sizes.medium.source_url;
			}
		}

		setAttributes( {
			dropCapImageURL: selectedMediaURL,
			dropCapImageId: media.id,
		} );
	};

	// When an image is removed, reset the URL and ID attributes on the block.
	const onRemoveImage = () => {
		setAttributes( {
			dropCapImageURL: '',
			dropCapImageId: null,
		} );
	};

	const paragraphColorObject = getColorObjectByAttributeValues(
		themeOptions(),
		paragraphColor
	);

	// Render the settings panel used to assign color to a paragraph.
	const renderParagraphSettings = () => {
		return (
			<PanelColorSettings
				title={ __( 'Paragraph color' ) }
				colorSettings={ [
					{
						value: paragraphColorObject?.color,
						onChange: ( value ) =>
							setAttributes( {
								paragraphColor: value
									? getColorSlug( value, themeOptions() )
									: undefined,
							} ),
						label: __( 'Paragraph' ),
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
		);
	};

	const dropCapColorObject = getColorObjectByAttributeValues(
		themeOptions(),
		dropCapColor
	);

	/// Render the settings panel used to assign color to a drop cap character.
	const renderDropCapColorSettings = () => {
		return (
			<PanelColorSettings
				title={ __( 'Drop cap color' ) }
				colorSettings={ [
					{
						value: dropCapColorObject?.color,
						onChange: ( value ) =>
							setAttributes( {
								dropCapColor: value
									? getColorSlug( value, themeOptions() )
									: undefined,
							} ),
						label: __( 'Drop cap' ),
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
		);
	};

	// Render the settings panel used to assign an image to a drop cap character.
	const renderDropCapImageSettings = () => {
		return (
			<PanelBody title={ __( 'Drop cap image settings' ) }>
				{ '' !== dropCapImageURL && (
					<MediaUploadCheck>
						<Toolbar>
							<MediaUpload
								onSelect={ onSelectImage }
								value={ dropCapImageId }
								render={ ( { open } ) => (
									<div>
										<IconButton
											className="components-toolbar__control"
											label="Edit image"
											icon="edit"
											onClick={ open }
										/>
										<IconButton
											icon="no-alt"
											onClick={ onRemoveImage }
											className="blocks-gallery-image__remove"
											label="Remove image"
										/>
									</div>
								) }
							/>
						</Toolbar>
						<img alt="" src={ dropCapImageURL } />
					</MediaUploadCheck>
				) }
				<MediaPlaceholder
					key="drop-cap-image"
					icon="format-image"
					label="Drop Cap Image"
					labels={ {
						title: 'Drop Cap Image',
						name: 'images',
					} }
					onSelect={ onSelectImage }
				/>
			</PanelBody>
		);
	};

	const classes = classnames( className, {
		'has-dropcap': hasDropCapStyle,
		[ `has-dropcap-color-${ dropCapColor }` ]:
			hasDropCapStyle && dropCapColor,
		[ `has-paragraph-color-${ paragraphColor }` ]:
			! hasDropCapStyle && paragraphColor,
	} );

	const blockProps = useBlockProps( {
		className: classes,
	} );

	return (
		<>
			<InspectorControls>
				{ ! hasDropCapStyle && renderParagraphSettings() }
				{ hasDropCapStyle &&
					! isImageDropCap &&
					renderDropCapColorSettings() }
				{ hasDropCapStyle &&
					isImageDropCap &&
					renderDropCapImageSettings() }
			</InspectorControls>
			<div { ...blockProps }>
				<PlainText
					tagname="h4"
					value={ heading }
					onChange={ ( value ) =>
						setAttributes( { heading: value } )
					}
					placeholder={ __( 'Enter Teaser Headline (optional)' ) }
				/>
				<RichText
					multiline="li"
					tagname="ul"
					onChange={ ( listValues ) =>
						setAttributes( { list: listValues } )
					}
					value={ list }
					wrapperClassName="wp-block-editorial-introparagraph-toc"
					placeholder={ __( 'Enter Teaser Intro List (optional)' ) }
					formattingControls={ getAllowedFormats(
						'formattingControls',
						[ 'link' ]
					) }
					allowedFormats={ getAllowedFormats( 'allowedFormats', [
						'core/link',
					] ) }
				/>
				<div className="wp-block-editorial-introparagraph-content">
					{ isImageDropCap &&
						renderDropCapSVG( dropCapCharacter, dropCapImageURL ) }
					<RichText
						tagname="p"
						value={ content }
						onChange={ ( value ) =>
							setAttributes( { content: value } )
						}
						placeholder={ __( 'Write paragraph…' ) }
						formattingControls={ getAllowedFormats(
							'formattingControls',
							[ 'bold', 'italic' ]
						) }
						allowedFormats={ [ 'core/bold', 'core/italic' ] }
						/**
						 * On "enter" split the block at the cursor to put the
						 * text into a new <p> tag block.
						 * onSplit replace the current block with a duplicate
						 * and at the split point pass the 2nd part of the text
						 * into a new regular paragraph block.
						 * This fires twice, once for the first string, once for the 2nd.
						 * after the split point.
						 * @param {string}  value      The text string of the block
						 * @param {boolean} isOriginal If it's the original block or the new one.
						 */
						onSplit={ ( value, isOriginal ) => {
							let block;

							if ( isOriginal ) {
								block = createBlock(
									'editorial/introparagraph',
									{
										...attributes,
										content: value,
									}
								);
							} else {
								block = createBlock( 'core/paragraph', {
									content: value,
								} );
							}

							if ( isOriginal ) {
								block.clientId = clientId;
							}

							return block;
						} }
						// onReplace is needed to be passed for onSplit to work.
						onReplace={ onReplace }
					/>
				</div>
			</div>
		</>
	);
}
