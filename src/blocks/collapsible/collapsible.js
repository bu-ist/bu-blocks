/**
 * BLOCK: collapsible
 *
 * A collapsible content block.
 */

// External dependencies.
import classnames from 'classnames';

// Import CSS.
import './style.scss';
import './editor.scss';

// Internal dependencies.
import allowedBlocks from '../../components/allowed-blocks';
import blockIcons from '../../components/block-icons';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	PanelBody,
	ToggleControl,
	SelectControl,
	TextControl,
	RangeControl,
	Path,
	SVG,
	Button,
	ButtonGroup,
} = wp.components;
const {
	InnerBlocks,
	BlockControls,
	InspectorControls,
	RichText,
	useBlockProps,
} = wp.blockEditor;
const { select } = wp.data;
const { useEffect } = wp.element;

import HeadingToolbar from '../headline/heading-toolbar';

/**
 * Internal dependencies
 */
 import { generateID, isDuplicateblockID } from './generated-ids';

// Register the block.
registerBlockType( 'bu/collapsible', {
	apiVersion: 2,
	name: 'bu/collapsible',
	title: __( 'Collapsible' ),
	description: __( 'A collapsible content block.' ),
	icon: blockIcons('collapsible'),
	category: 'bu',
	supports: {
		align: [ 'wide', 'full' ],
	},
	attributes: {
		title: {
			type: 'string',
			default: '',
		},
		level: {
			type: 'number',
			default: 2,
		},
		isOpen: {
			type: 'boolean',
			default: false,
		},
		iconStyle: {
			type: 'string',
			default: 'plus-minus',
		},
		customMarginBottom: {
			type: 'boolean',
			default: false,
		},
		marginBottom: {
			type: 'number',
			default: 0,
		},
		id: {
			type: 'string',
			default: '',
		},
		autoID: {
			type: 'boolean',
			default: true,
		},
		buttonOpenLabel: {
			type: 'string',
			default: 'Read More',
		},
		buttonCloseLabel: {
			type: 'string',
			default: 'Close',
		}
	},
	styles: [
		{
			name: 'plain',
			label: __( 'Plain' ),
			isDefault: true,
		},
		{
			name: 'outline',
			label: __( 'Outline' )
		},
		{
			name: 'preview',
			label: __( 'Preview' )
		}
	],

	edit( props ) {

		const { attributes, setAttributes, clientId, className } = props;
		const {
			title,
			level,
			isOpen,
			iconStyle,
			customMarginBottom,
			marginBottom,
			id,
			buttonCloseLabel,
			buttonOpenLabel,
			autoID,
		} = attributes;
		const TagName = `h${level}`;


		let isPreviewStyle = false;
		if ( props.attributes.className ) {
			isPreviewStyle = props.attributes.className.includes( 'is-style-preview' );
		}

		const allowedBlockList = allowedBlocks().filter( block => undefined !== block );
		allowedBlockList.push( 'bu/collapsible' );

		// Add an offset to the bottom margin in the editor to account for the container element padding
		const editorContainerPaddingOffset = 28;

		/**
		 * Are Auto Generated IDs enabled for this block?
		 * Returns true if toggle control is enabled.
		 * @returns boolean
		 */
		const canGenerateID = () => {
			return autoID;
		};


		/**
		 * Generate and set an ID for Blocks that have no ID set but have a title
		 * or if the block's ID is a duplicate of an existing block found in the editor.
		 *
		 * useEffect() is triggered when the `title`, `clientId`, or `id` changes on the block.
		 *
		 * This should cover block duplication events in the editor and is based on a technique used
		 * in core for the Heading block to generate anchors.
		 */
		useEffect( () => {
			// Check if we can generate IDs for this block.
			if ( ! canGenerateID() ) {
				return;
			}

			// If no ID is set, but there is a title value OR if this ID is a duplicate of an
			// existing collapsible block in this post.
			if ( ! id && title || isDuplicateblockID( props, id ) ) {
				let newUniqueID = generateID( title );

				// Append part of the clientId to the new ID to make it unique.
				setAttributes( {
					id: newUniqueID + `-${clientId.split( '-', 1 )}`,
				} );
			}

		}, [ title, clientId, id, autoID ] );


		/**
		 * When the title attribute changes we save the new title, and check if the id
		 * can and should be regenerated.
		 * @param {*} value The new value of the title field.
		 */
		const onTitleChange = ( value ) => {
			const newAttrs = { title: value };
			if ( canGenerateID() && ( generateID( value ) !== generateID( title ) ) ) {
				// Generate a new id and save it as the ID.
				newAttrs.id = generateID( value );
			}
			setAttributes( newAttrs );
		};

		const styles = {
			marginBottom: ( customMarginBottom ? marginBottom : 0 ) + editorContainerPaddingOffset
		};

		const blockProps = useBlockProps( {
			className: classnames(
				className,
				{ 'is-open': isOpen },
				`icon-style-${ iconStyle }`,
			),
			style: styles,
			'data-uniqueid': id
		} );

		return (

			<div {...blockProps}>

				<InspectorControls>

					{ ! isPreviewStyle && (
						<PanelBody title={ __( 'Icon Style' ) }>
							<ButtonGroup className="bu-collapsible-icon-style-button">
								<Button
									isPrimary={ 'plus-minus' === iconStyle }
									isSecondary={ 'plus-minus' !== iconStyle }
									showTooltip={ true }
									label={ __( 'Plus/Minus' ) }
									onClick={ ( value ) => setAttributes( { iconStyle: 'plus-minus' } ) }
								>
									+ -
								</Button>
								<Button
									isPrimary={ 'arrows' === iconStyle }
									isSecondary={ 'arrows' !== iconStyle }
									showTooltip={ true }
									label={ __( 'Arrows' ) }
									onClick={ ( value ) => setAttributes( { iconStyle: 'arrows' } ) }
								>
									&#62721; &#62720;
								</Button>
							</ButtonGroup>
						</PanelBody>
					) }

					{ isPreviewStyle && (
						<PanelBody title={ __( 'Button Labels' ) }>
							<TextControl
								label={ __( 'Open Button Label' ) }
								value={ buttonOpenLabel }
								onChange={ ( value ) => setAttributes( { buttonOpenLabel: value } ) }
							/>
							<TextControl
								label={ __( 'Close Button Label' ) }
								value={ buttonCloseLabel }
								onChange={ ( value ) => setAttributes( { buttonCloseLabel: value } ) }
							/>
						</PanelBody>
					) }

					{ ! isPreviewStyle && (
						<PanelBody title={ __( 'Default Collapsible Status' ) }>
							<ToggleControl
								label={ __( 'Open' ) }
								checked={ isOpen }
								onChange={ () => setAttributes( { isOpen: !isOpen } ) }
							/>
						</PanelBody>
					) }

					<PanelBody title={ __( 'Spacing' ) }>
						<ToggleControl
							label={ __( 'Custom spacing' ) }
							checked={ customMarginBottom }
							onChange={ () => setAttributes( { customMarginBottom: !customMarginBottom } ) }
						/>

						{ customMarginBottom && (
							<RangeControl
								label={ __( 'Bottom Margin (px)' ) }
								value={ marginBottom }
								onChange={ ( value ) => setAttributes( { marginBottom: value } ) }
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
							onChange={ () => setAttributes( { autoID: !autoID } ) }
						/>
						<p><strong>Note:</strong> The id <em>must</em> be unique and cannot be duplicated in this post. Unique ID's are needed on each instance of this block so that the
						aria labels properly document the button and interactive state of the block for accessibility.
						Duplicate ID's are an accessibility issue and cause errors with interactions with the blocks. Do not use spaces.</p>
						{ autoID && (
							<TextControl
								label={ __( 'Unique HTML ID' ) }
								value={ id }
								disabled={true}
							/>
						)}
						{ ! autoID && (
							<TextControl
								label={ __( 'Unique HTML ID' ) }
								value={ id }
								onChange={ ( value ) => setAttributes( { id: value } ) }
							/>
						)}

					</PanelBody>

				</InspectorControls>

				<BlockControls>
					<HeadingToolbar minLevel={ 2 } maxLevel={ 7 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
				</BlockControls>

				<TagName className="bu-collapsible-heading">
					{/* Using div because button cause issue in editor */}
					{ ! isPreviewStyle && (
						<RichText
							tagName={ 'div' }
							className="bu-block-collapsible-toggle"
							value={ title }
							onChange={ onTitleChange }
							placeholder={ __( 'Heading...' ) }
							formattingControls={ [ 'bold', 'italic' ] }
						/>
					) }

					{ isPreviewStyle && (
						<RichText
							tagName={ 'div' }
							className=""
							value={ title }
							//onChange={ value => setAttributes( { title: value } ) }
							onChange={ onTitleChange }
							placeholder={ __( 'Heading...' ) }
							formattingControls={ [ 'bold', 'italic' ] }
						/>
					) }

				</TagName>

				<div className="bu-block-collapsible-content">
					<InnerBlocks allowedBlocks={ allowedBlockList }/>
				</div>

				{ isPreviewStyle && (
					<div className="button">
						{ buttonOpenLabel }
					</div>
				) }

			</div>

		);

	},

	save( { attributes } ) {
		return <InnerBlocks.Content />;
	}

} );
