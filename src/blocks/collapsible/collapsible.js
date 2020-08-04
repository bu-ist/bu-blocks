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
	SVG
} = wp.components;
const {
	InnerBlocks,
	BlockControls,
	InspectorControls,
	RichText
} = wp.blockEditor;

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
		const { content, level, isOpen, iconStyle, marginBottom } = attributes;
		const tagName = 'h' + level;

		const allowedBlocks = [ 'editorial/collapsible', 'core/heading', 'core/paragraph', 'core/button', 'core/image' ];

		// Add an offset to the bottom margin in the editor to account for the container element padding
		const editorContainerPaddingOffset = 28;

		const styles = {
			marginBottom: marginBottom + editorContainerPaddingOffset
		};

		return (

			<div className={className} style={ styles }>

				<InspectorControls>

					<PanelBody title={ __( 'Default Collapsible Status' ) }>
						<ToggleControl
							label={ __( 'Open' ) }
							checked={ isOpen }
							onChange={ () => setAttributes( { isOpen: !isOpen } ) }
						/>
					</PanelBody>

					<PanelBody title={ __( 'Icon Style' ) }>
						<SelectControl
							label={ __( 'Icon Style' ) }
							value={ iconStyle }
							options={ [
								{
									label: __( 'Plus/Minus' ),
									value: 'plus-minus'
								},
								{
									label: __( 'Arrows' ),
									value: 'arrows'
								}
							] }
							onChange={ ( value ) => setAttributes( { iconStyle: value } ) }
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

				<RichText
					tagName={ tagName }
					className="bu-collapsible-heading"
					value={ content }
					onChange={ content => setAttributes( { content } ) }
					placeholder={ __( 'Heading...' ) }
					formattingControls={ [ 'bold', 'italic' ] }
				/>

				<InnerBlocks allowedBlocks={ allowedBlocks }/>

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
			<div className={ classnames( className, { isOpen: isOpen }, `icon-style-${ iconStyle }` ) } style={ styles }>
				<button className="js-bu-block-collapsible-toggle">
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
