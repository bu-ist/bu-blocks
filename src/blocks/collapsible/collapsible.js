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
		}
	},

	edit( props ) {

		const { attributes, setAttributes, className } = props;
		const { content, level, isOpen } = attributes;
		const tagName = 'h' + level;

		const allowedBlocks = [ 'editorial/collapsible', 'core/heading', 'core/paragraph', 'core/button', 'core/image' ];

		return (

			<div className={className}>

				<InspectorControls>
					<PanelBody title={ __( 'Default Collapsible Status' ) }>

						<ToggleControl
							label={ __( 'Open' ) }
							checked={ isOpen }
							onChange={ () => setAttributes( { isOpen: !isOpen } ) }
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

		const { content, level, isOpen, className } = attributes;
		const tagName = 'h' + level;

		let classes = className;

		if ( isOpen ) classes += ' is-open';

		return (
			<div className={ classnames( className, { isOpen: isOpen } ) }>
				<button className="js-bu-block-collapsible-toggle">
					<RichText.Content
						tagName={ tagName }
						value={ content }
					/>
				</button>
				<div className="bu-block-collapsible-content">
					<InnerBlocks.Content />
				</div>
			</div>
		);

	}

} );
