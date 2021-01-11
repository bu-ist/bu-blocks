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

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	PanelBody,
	ToggleControl,
	SelectControl,
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
	RichText
} = wp.blockEditor;
const { select } = wp.data;
const { getBlocks } = select( 'core/block-editor' );

import HeadingToolbar from '../headline/heading-toolbar';

// Register the block.
registerBlockType( 'editorial/collapsible', {

	title: __( 'Collapsible' ),
	description: __( 'A collapsible content block.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu-editorial',
	supports: {
		anchor: true
	},
	attributes: {
		content: {
			type: 'string',
			source: 'html',
			selector: '.bu-collapsible-heading'
		},
		level: {
			type: 'number',
			default: 2
		},
		isOpen: {
			type: 'bool',
			default: false
		},
		iconStyle: {
			type: 'string',
			default: 'plus-minus'
		},
		marginBottom: {
			type: 'number',
			default: 0
		},
		anchor: {
			type: 'string',
			source: 'attribute',
			attribute: 'id',
			selector: '.wp-block-editorial-collapsible'
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

		const { attributes, setAttributes, className } = props;
		const { content, level, isOpen, iconStyle, marginBottom, anchor } = attributes;
		const tagName = 'h' + level;

		const isPreviewStyle = className.includes( 'is-style-preview' );

		const allowedBlocks = [ 'editorial/collapsible', 'core/heading', 'core/paragraph', 'core/button', 'core/image' ];

		// Add an offset to the bottom margin in the editor to account for the container element padding
		const editorContainerPaddingOffset = 28;

		// Generate anchor if not set
		if ( ! anchor ) {

			// Get all collapsibleBlocks in the post
			const collapsibleBlocks = getBlocks().filter( e => e.name === 'editorial/collapsible' );

			// Store all anchors in an array
			let anchors = [];
			collapsibleBlocks.forEach( ( block, i ) => {

				anchors.push( block.attributes.anchor );

			} );

			// Set default anchor based on how many Collapsible blocks are in the post
			let i = collapsibleBlocks.length;
			let id = 'bu-collapsible-' + i;

			// Make sure the new anchor doesn't exist already
			// This fixes duplicate anchors from being used if older Collapsible blocks are removed from the post
			while ( anchors.includes( id ) ) {

				i++;
				id = 'bu-collapsible-' + i;

			}

			setAttributes( { anchor: id } );

		}

		const styles = {
			marginBottom: marginBottom + editorContainerPaddingOffset
		};

		return (

			<div className={ classnames( className, { 'is-open': isOpen }, `icon-style-${ iconStyle }` ) } style={ styles }>

				<InspectorControls>

					{ ! isPreviewStyle && (
						<PanelBody title={ __( 'Icon Style' ) }>
							<ButtonGroup className="icon-style-button">
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

					<PanelBody title={ __( 'Default Collapsible Status' ) }>
						<ToggleControl
							label={ __( 'Open' ) }
							checked={ isOpen }
							onChange={ () => setAttributes( { isOpen: !isOpen } ) }
						/>
					</PanelBody>

					<PanelBody title={ __( 'Spacing' ) }>
						<RangeControl
							label={ __( 'Bottom Margin (px)' ) }
							value={ marginBottom }
							onChange={ ( value ) => setAttributes( { marginBottom: value } ) }
							min={ 0 }
							max={ 200 }
							step={ 1 }
						/>
					</PanelBody>

				</InspectorControls>

				<BlockControls>
					<HeadingToolbar minLevel={ 2 } maxLevel={ 7 } selectedLevel={ level } onChange={ ( newLevel ) => setAttributes( { level: newLevel } ) } />
				</BlockControls>

				<div className="bu-block-collapsible-toggle">

					<RichText
						tagName={ tagName }
						className="bu-collapsible-heading"
						value={ content }
						onChange={ content => setAttributes( { content } ) }
						placeholder={ __( 'Heading...' ) }
						formattingControls={ [ 'bold', 'italic' ] }
					/>

				</div>

				<div className="bu-block-collapsible-content">
					<InnerBlocks allowedBlocks={ allowedBlocks }/>
				</div>

			</div>

		);

	},

	save( { attributes } ) {

		const { content, level, isOpen, className, iconStyle, marginBottom } = attributes;
		const tagName = 'h' + level;

		const styles = {
			marginBottom: marginBottom
		};

		return (
			<div className={ classnames( className, { 'is-open': isOpen }, `icon-style-${ iconStyle }` ) } style={ styles }>
				<button className="bu-block-collapsible-toggle">
					<RichText.Content
						tagName={ tagName }
						value={ content }
						className="bu-collapsible-heading"
					/>
				</button>
				<div className="bu-block-collapsible-content">
					<InnerBlocks.Content />
				</div>
			</div>
		);

	}

} );
