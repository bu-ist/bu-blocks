/**
 * BLOCK: editorial/introparagraph
 *
 * Register an intro paragraph block with Gutenberg.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

import getAllowedFormats from '../../global/allowed-formats';
import blockIcons from '../../components/block-icons/';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { createBlock, registerBlockType } from '@wordpress/blocks';
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
	getColorObjectByColorValue,
	getColorObjectByAttributeValues,
	useBlockProps,
} from '@wordpress/block-editor';

// Import a library used to manage multiple class names.
import classnames from 'classnames';

// Import common handling of available color options.
import themeOptions from '../../global/theme-options';

import deprecated from './deprecated';

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
 * When given a color it gets the Color Slug from the themeoptions() color
 * palette defined for the theme.
 *
 * @param {*} color
 * @return {string} The slug of the color.
 */
const getColorSlug = ( color ) => {
	if ( color ) {
		const colorObject = getColorObjectByColorValue( themeOptions(), color );

		if ( colorObject.slug ) {
			return colorObject.slug;
		}
	} else {
		console.error( 'Error: no color.slug value found in color object.' ); // eslint-disable-line no-console
	}
	return undefined;
};

// Register the block.
registerBlockType( 'editorial/introparagraph', {
	title: __( 'Intro Paragraph' ),
	description: __(
		'Add an introduction with a bulleted list and styled paragraph.'
	),
	icon: blockIcons( 'introparagraph' ),
	category: 'bu-editorial',
	supports: {
		anchor: true,
	},
	attributes: {
		heading: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-introparagraph h4',
		},
		list: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-introparagraph-toc',
		},
		content: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-introparagraph-content p',
		},
		dropCapColor: {
			type: 'string',
			default: '',
		},
		paragraphColor: {
			type: 'string',
			default: '',
		},
		dropCapImageURL: {
			type: 'string',
			default: '',
		},
		dropCapImageId: {
			type: 'number',
		},
	},
	styles: [
		{
			name: 'default',
			label: __( 'Regular' ),
			isDefault: true,
		},
		{
			name: 'large',
			label: __( 'Large paragraph text' ),
		},
		{
			name: 'split',
			label: __( 'Split paragraph text' ),
		},
		{
			name: 'dropcap-default',
			label: __( 'Dropcap' ),
		},
		{
			name: 'dropcap-boxed',
			label: __( 'Boxed dropcap' ),
		},
		{
			name: 'dropcap-outlined',
			label: __( 'Outlined dropcap' ),
		},
		{
			name: 'dropcap-dimensional',
			label: __( 'Dimensional dropcap' ),
		},
		{
			name: 'dropcap-image',
			label: __( 'Image dropcap' ),
		},
	],
	example: {
		attributes: {
			content:
				'Maecenas faucibus mollis interdum. Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
			heading: 'Tellus Dolor Purus ',
			dropCapColor: 'primary',
			className: 'is-style-dropcap-default',
		},
	},

	edit: function Edit( props ) {
		const { attributes, className, setAttributes, onReplace, clientId } =
			props;

		const {
			heading,
			content,
			list,
			dropCapImageURL,
			dropCapImageId,
			paragraphColor,
			dropCapColor,
		} = attributes;

		// Determine if a sepecific dropcap style has been selected.
		const hasDropCapStyle =
			className && className.includes( 'is-style-dropcap' );

		// Ensure that the has-dropcap, other has-dropcap classes, and paragraph classes are aligned.
		if ( hasDropCapStyle ) {
			setAttributes( { paragraphColor: '' } );
		} else if ( ! hasDropCapStyle ) {
			setAttributes( { dropCapColor: '' } );
		}

		// Determine if the drop cap SVG should be included in content.
		const isImageDropCap =
			className && className?.includes( 'is-style-dropcap-image' );

		// Pull the first character from the article content use in the drop cap SVG.
		let dropCapCharacter = '';
		if ( 'undefined' !== typeof content ) {
			dropCapCharacter = content.charAt( 0 );
		}

		// When an image is selected, set the URL and ID attributes on the block.
		const onSelectImage = ( media ) => {
			if ( ! media || ! media.url ) {
				setAttributes( { dropCapImageURL: '', dropCapImageId: null } );
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
					selectedMediaURL =
						media.media_details.sizes.medium.source_url;
				}
			}

			setAttributes( {
				dropCapImageURL: selectedMediaURL,
				dropCapImageId: media.id,
			} );
		};

		// When an image is removed, reset the URL and ID attributes on the block.
		const onRemoveImage = () => {
			setAttributes( { dropCapImageURL: '', dropCapImageId: null } );
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
										? getColorSlug( value )
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

		// Render the settings panel used to assign color to a drop cap character.
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
										? getColorSlug( value )
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
						placeholder={ __(
							'Enter Teaser Intro List (optional)'
						) }
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
							renderDropCapSVG(
								dropCapCharacter,
								dropCapImageURL
							) }
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
							allowedFormats={ getAllowedFormats(
								'allowedFormats',
								[ 'core/bold', 'core/italic' ]
							) }
							/**
							 * On "enter" split the block at the cursor to put the
							 * text into a new <p> tag block.
							 * onSplit replace the current block with a duplicate
							 * and at the split point pass the 2nd part of the text
							 * into a new regular paragraph block.
							 * This fires twice, once for the first string, once for the 2nd.
							 * after the split point.
							 * @param value      {string} The text string of the block
							 * @param isOriginal {boolean} If it's the original block or the new one.
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
	},

	save( { attributes, className } ) {
		const {
			heading,
			list,
			content,
			dropCapColor,
			dropCapImageURL,
			paragraphColor,
		} = attributes;

		let isImageDropCap = false;
		if ( 'undefined' !== typeof attributes.className ) {
			// Determine if the drop cap SVG should be included in content.
			isImageDropCap =
				className && className?.includes( 'is-style-dropcap-image' );
		}

		// Pull the first character from the article content use in the drop cap SVG.
		let dropCapCharacter = '';
		if ( 'undefined' !== typeof content ) {
			dropCapCharacter = content.charAt( 0 );
		}

		// Determine if the list is empty and should be excluded from the saved block.
		let saveList = true;
		if (
			'undefined' === typeof list ||
			'<li></li>' === list ||
			RichText.isEmpty( list )
		) {
			saveList = false;
		}

		//Determine if a sepecific dropcap style has been selected.
		const hasDropCapStyle =
			className && className.includes( 'is-style-dropcap' );

		const classes = classnames( className, {
			'has-dropcap': hasDropCapStyle,
			[ `has-dropcap-color-${ dropCapColor }` ]:
				hasDropCapStyle && dropCapColor,
			[ `has-paragraph-color-${ paragraphColor }` ]:
				! hasDropCapStyle && paragraphColor,
		} );

		const blockProps = useBlockProps.save( {
			className: classes,
		} );

		return (
			<div { ...blockProps }>
				{ ! RichText.isEmpty( heading ) && (
					<RichText.Content tagName="h4" value={ heading } />
				) }
				{ saveList && (
					<RichText.Content
						tagName="ul"
						className="wp-block-editorial-introparagraph-toc"
						value={ list }
						multiline="li"
					/>
				) }
				{ ! RichText.isEmpty( content ) && (
					<div className="wp-block-editorial-introparagraph-content">
						{ isImageDropCap &&
							renderDropCapSVG(
								dropCapCharacter,
								dropCapImageURL
							) }
						<RichText.Content tagName="p" value={ content } />
					</div>
				) }
			</div>
		);
	},

	deprecated,
} );
