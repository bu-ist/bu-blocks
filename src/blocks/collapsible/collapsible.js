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
const { registerBlockType, createBlock } = wp.blocks;
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
	name: 'editorial/collapsible',
	title: __( 'Collapsible' ),
	description: __( 'A collapsible content block.' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu-editorial',
	supports: {},
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
			type: 'bool',
			default: false,
		},
		iconStyle: {
			type: 'string',
			default: 'plus-minus',
		},
		marginBottom: {
			type: 'number',
			default: 0,
		},
		id: {
			type: 'string',
			default: '',
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
		const { title, level, isOpen, iconStyle, marginBottom, id } = attributes;
		//const tagName = 'h' + level;
		const tagName = 'p';

		const isPreviewStyle = className.includes( 'is-style-preview' );

		const allowedBlocks = [ 'editorial/collapsible', 'core/heading', 'core/paragraph', 'core/button', 'core/image' ];

		// Add an offset to the bottom margin in the editor to account for the container element padding
		const editorContainerPaddingOffset = 28;

		// Generate anchor if not set
		if ( ! id ) {
			setAttributes( { id: `bu-collapsible-${clientId.split( '-', 1 )}` } );
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
						value={ title }
						onChange={ value => setAttributes( { title: value } ) }
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
		return <InnerBlocks.Content />;
	}

} );
