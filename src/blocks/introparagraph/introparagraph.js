/**
 * BLOCK: editorial/introparagraph
 *
 * Register an intro paragraph block with Gutenberg.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

import getAllowedFormats from '../../global/allowed-formats';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	createBlock,
	registerBlockType,
} = wp.blocks;
const {
	Fragment,
} = wp.element;
const {
	IconButton,
	PanelBody,
	Toolbar,
} = wp.components;
const {
	RichText,
	PlainText,
	InspectorControls,
	MediaPlaceholder,
	MediaUpload,
	MediaUploadCheck,
	PanelColorSettings,
	withColors,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

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
 * @param {string} character The character to display in the drop cap.
 * @param {string} imageURL  The background image for the drop cap character.
 */
const renderDropCapSVG = ( character, imageURL ) => {
	let randomID = 'dropcap-text-' + character +'-'+ Math.floor(Math.random() * 9999);
	let clipPathURL = 'url(#' + randomID + ')';
	let xlinkurlAttr = {'xlink:href': imageURL };
	return (
		<svg>
			<clipPath id={ randomID }>
				<text textAnchor="start"
					x="0"
					y="50%"
					dy=".404em"
					className="dropcap-filltext">{ character }</text>
			</clipPath>
			<g clip-path={ clipPathURL }>
				<image {...xlinkurlAttr} href={ imageURL } width="100%" height="100%" preserveAspectRatio="none" />
			</g>
		</svg>
	);
};

// Register the block.
registerBlockType( 'editorial/introparagraph', {

	title: __( 'Intro Paragraph' ),
	description: __( 'Add an introduction with a bulleted list and styled paragraph.' ),
	icon: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false"><path fill="#c00" d="M11 5v7H9.5C7.6 12 6 10.4 6 8.5S7.6 5 9.5 5H11m8-2H9.5C6.5 3 4 5.5 4 8.5S6.5 14 9.5 14H11v7h2V5h2v16h2V5h2V3z"></path></svg>,
	category: 'bu-editorial',
	supports: {
		anchor: true,
	},
	attributes: {
		heading: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-introparagraph h4'
		},
		list: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-introparagraph-toc'
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
		className: {
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
			isDefault: true
		},
		{
			name: 'large',
			label: __( 'Large paragraph text' )
		},
		{
			name: 'split',
			label: __( 'Split paragraph text' )
		},
		{
			name: 'dropcap-default',
			label: __( 'Dropcap' )
		},
		{
			name: 'dropcap-boxed',
			label: __( 'Boxed dropcap' )
		},
		{
			name: 'dropcap-outlined',
			label: __( 'Outlined dropcap' )
		},
		{
			name: 'dropcap-dimensional',
			label: __( 'Dimensional dropcap' )
		},
		{
			name: 'dropcap-image',
			label: __( 'Image dropcap' )
		}
	],

	edit: withColors( 'paragraphColor', 'dropCapColor' )( props => {
		const {
			attributes,
			className,
			insertBlocksAfter,
			setAttributes,
			paragraphColor,
			setParagraphColor,
			dropCapColor,
			setDropCapColor,
		} = props;

		const {
			heading,
			content,
			list,
			dropCapImageURL,
			dropCapImageId,
		} = attributes;

		// Determine if a sepecific dropcap style has been selected.
		let hasDropCapStyle = className.includes( 'is-style-dropcap' );

		// Ensure that the has-dropcap, other has-dropcap classes, and paragraph classes are aligned.
		if ( hasDropCapStyle ) {
			setAttributes( { paragraphColor: '' } );
		} else if ( ! hasDropCapStyle ) {
			setAttributes( { dropCapColor: '' } );
		}

		// Determine if the drop cap SVG should be included in content.
		let isImageDropCap = className.includes( 'is-style-dropcap-image' );

		// Pull the first character from the article content use in the drop cap SVG.
		let dropCapCharacter = '';
		if ( 'undefined' !== typeof content ) {
			dropCapCharacter = content.charAt( 0 );
		};

		// When an image is selected, set the URL and ID attributes on the block.
		const onSelectImage = ( media ) => {
			if ( ! media || ! media.url ) {
				setAttributes( { dropCapImageURL: '', dropCapImageId: null } );
				return;
			}
			setAttributes( { dropCapImageURL: media.url, dropCapImageId: media.id } );
		};

		// When an image is removed, reset the URL and ID attributes on the block.
		const onRemoveImage = () => {
			setAttributes( { dropCapImageURL: '', dropCapImageId: null } );
		};

		// Render the settings panel used to assign color to a paragraph.
		const renderParagraphSettings = () => {
			return (
				<PanelColorSettings
					title={ __( 'Paragraph color' ) }
					colorSettings={ [
						{
							value: paragraphColor.color,
							onChange: setParagraphColor,
							label: __( 'Paragraph' ),
							disableCustomColors: true,
							colors: themeOptions(),
						},
					] }
				/>
			);
		};

		// Render the settings panel used to assign color to a drop cap character.
		const renderDropCapColorSettings = () => {
			return (
				<PanelColorSettings
					title={ __( 'Drop cap color' ) }
					colorSettings={ [
						{
							value: dropCapColor.color,
							onChange: setDropCapColor,
							label: __( 'Drop cap' ),
							disableCustomColors: true,
							colors: themeOptions(),
						},
					] }
				/>
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
							<img src={ dropCapImageURL } />
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

		const classes = classnames(
			className,
			{
				'has-dropcap': hasDropCapStyle,
				[`has-dropcap-color-${dropCapColor.slug}`]: hasDropCapStyle && dropCapColor && dropCapColor.slug,
				[`has-paragraph-color-${paragraphColor.slug}`]: ! hasDropCapStyle && paragraphColor && paragraphColor.slug,
			},
		);

		return (
			<Fragment>
				<InspectorControls>
					{ ! hasDropCapStyle && renderParagraphSettings() }
					{ hasDropCapStyle && ! isImageDropCap && renderDropCapColorSettings() }
					{ hasDropCapStyle && isImageDropCap && renderDropCapImageSettings() }
				</InspectorControls>
				<div className={ classes }>
					<PlainText
						tagname='h4'
						value={ heading }
						onChange={ heading => setAttributes( { heading } ) }
						placeholder={ __( 'Enter Teaser Headline (optional)' ) }
					/>
					<RichText
						multiline="li"
						tagname="ul"
						onChange={ ( listValues ) => setAttributes( { list: listValues } ) }
						value={ list }
						wrapperClassName="wp-block-editorial-introparagraph-toc"
						placeholder={ __( 'Enter Teaser Intro List (optional)' ) }
						formattingControls={ getAllowedFormats( 'formattingControls', [ 'link' ] ) }
						allowedFormats={ getAllowedFormats( 'allowedFormats', [ 'core/link' ] ) }
					/>
					<div className="wp-block-editorial-introparagraph-content">
						{ isImageDropCap && renderDropCapSVG( dropCapCharacter, dropCapImageURL ) }
						<RichText
							tagname="p"
							value= { content }
							onChange={ content => setAttributes( { content: content } ) }
							placeholder={ __( 'Write paragraph…' ) }
							formattingControls={ getAllowedFormats( 'formattingControls', [ 'bold', 'italic' ] ) }
							allowedFormats={ getAllowedFormats( 'allowedFormats', [ 'core/bold', 'core/italic' ] ) }
							unstableOnSplit={
								insertBlocksAfter ?
									( before, after, ...blocks ) => {
										setAttributes( { content: before } );
										insertBlocksAfter( [
											...blocks,
											createBlock( 'core/paragraph', { content: after } ),
										] );
									} :
									undefined
							}
						/>
					</div>
				</div>
			</Fragment>
		);
	} ),

	save( { attributes } ) {
		const {
			heading,
			list,
			content,
			dropCapColor,
			dropCapImageURL,
			paragraphColor,
			className,
		} = attributes;

		let isImageDropCap = false;
		if ( 'undefined' !== typeof className ) {
			// Determine if the drop cap SVG should be included in content.
			isImageDropCap = className.includes( 'is-style-dropcap-image' );
		}

		// Pull the first character from the article content use in the drop cap SVG.
		let dropCapCharacter = '';
		if ( 'undefined' !== typeof content ) {
			dropCapCharacter = content.charAt( 0 );
		};

		// Determine if the list is empty and should be excluded from the saved block.
		let saveList = true;
		if ( 'undefined' === typeof list || '<li></li>' === list || RichText.isEmpty( list ) ) {
			saveList = false;
		}

		// Determine if a sepecific dropcap style has been selected.
		let hasDropCapStyle = className && className.includes( 'is-style-dropcap' );

		const classes = classnames(
			className,
			{
				'has-dropcap': hasDropCapStyle,
				[`has-dropcap-color-${dropCapColor}`]: hasDropCapStyle && dropCapColor,
				[`has-paragraph-color-${paragraphColor}`]: ! hasDropCapStyle && paragraphColor,
			},
		);

		return (
			<div className={ classes }>
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
						{ isImageDropCap && renderDropCapSVG( dropCapCharacter, dropCapImageURL ) }
						<RichText.Content
							tagName="p"
							value= { content }
						/>
					</div>
				) }
			</div>
		);
	},

	deprecated,

} );
