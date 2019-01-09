/**
 * BLOCK: bu/buniverse
 *
 * Register a BUniverse embed block with Gutenberg.
 */

// External dependencies.
import classnames from 'classnames';

//  Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	Fragment,
} = wp.element;
const {
	PanelBody,
	Path,
	RadioControl,
	SVG,
	TextControl,
} = wp.components;
const {
	InspectorControls,
} = wp.editor;

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

// Register the block.
registerBlockType( 'bu/buniverse', {
	title: __( 'BUniverse Video' ),
	description: __( '' ),
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu',
	attributes: {
		id: {
			type: 'string',
		},
		aspectRatio: {
			type: 'string',
		},
	},
	supports: {
		align: true,
	},
	publicationClassName: publicationClass + '-block-global-buniverse',

	edit( { attributes, setAttributes, isSelected } ) {
		const {
			id,
			aspectRatio,
		} = attributes;

		const classes = classnames(
			'wp-block-global-buniverse',
			{ [ aspectRatio ]: aspectRatio },
		);

		const url = `//www.bu.edu/buniverse/interface/embed/embed.html?v=${id}`;

		return(
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Video Settings' ) }>
						<RadioControl
							label={ __( 'Aspect Ratio' ) }
							selected={ aspectRatio }
							help={ __( '16:9 is typically used on widescreen video. 4:3 is often used for older fullscreen video. 1:1 is square. 9:16 and 3:4 are used for vertical video.' ) }
							options={ [
								{ label: '16:9', value: 'has-aspectratio-16by9' },
								{ label: '4:3', value: 'has-aspectratio-4by3' },
								{ label: '1:1', value: 'has-aspectratio-1by1' },
								{ label: '3:4', value: 'has-aspectratio-3by4' },
								{ label: '9:16', value: 'has-aspectratio-9by16' },
							] }
							onChange={ option => setAttributes( { aspectRatio: option } ) }
						/>
					</PanelBody>
				</InspectorControls>
				{ ( ! id || isSelected ) && (
					<TextControl
						placeholder={ __( 'Enter BUniverse video ID here…' ) }
						value={ id }
						onChange={ ( value ) => setAttributes( { id: value } ) }
					/>
				) }
				<figure className={ classes }>
					<div className="wp-block-global-buniverse-wrapper">
						{ id && (
							<iframe
							src={ url }
							frameborder="0"
						></iframe>
						) }
					</div>
					<figcaption></figcaption>
				</figure>
			</Fragment>
		);
	},

	save( { attributes } ) {
		const {
			id,
			aspectRatio,
		} = attributes;

		const classes = classnames(
			'wp-block-global-buniverse',
			{ [ aspectRatio ]: aspectRatio },
		);

		const url = `//www.bu.edu/buniverse/interface/embed/embed.html?v=${id}`;

		return(
			<figure className={ classes }>
				<div className="wp-block-global-buniverse-wrapper">
					{ id && (
						<iframe
							src={ url }
							frameborder="0"
						></iframe>
					) }
				</div>
				<figcaption></figcaption>
			</figure>
		);
	},
} );