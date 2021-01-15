/**
 * BLOCK: collapsible-control
 *
 * A block to toggle collapsible blocks on the page
 */

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	PanelBody,
	RadioControl,
	Path,
	SVG
} = wp.components;
const {
	InspectorControls,
	RichText
} = wp.blockEditor;

// Register the block.
registerBlockType( 'bu/collapsible-control', {

	title: __( 'Collapsible Control' ),
	description: __( 'Toggle Collapsible blocks on the page' ),
	keywords: [ __( 'collapsible' ), __( 'control' ), __( 'toggle' ) ],
	icon: <SVG viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><Path fill="#c00" d="M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"></Path></SVG>,
	category: 'bu',
	attributes: {
		text: {
			type: 'string',
			source: 'html',
			selector: 'button'
		},
		target: {
			type: 'string',
			default: 'all'
		}
	},
	supports: {
		align: [ 'left', 'center', 'right' ]
	},

	edit( props ) {

		const { attributes, setAttributes } = props;
		const { text, target } = attributes;

		return (

			<div>

				<InspectorControls>

					<PanelBody title={ __( 'Control Options' ) }>

						<RadioControl
							label={ __( 'Target' ) }
							selected={ target }
							onChange={ ( value ) => setAttributes( { target: value } ) }
							options={ [
								{
									label: __( 'All Collapsible blocks on this page' ),
									value: 'all'
								},
								{
									label: __( 'All Collapsible blocks in this group' ),
									value: 'group'
								}
							] }
						/>

					</PanelBody>

				</InspectorControls>

				<RichText
					placeholder={ __( 'Toggle Text' ) }
					value={ text }
					className="button"
					onChange={ ( value ) => setAttributes( { text: value } ) }
					formattingControls={ [ 'bold', 'italic' ] }
					withoutInteractiveFormatting
					keepPlaceholderOnFocus
				/>

			</div>

		);

	},

	save( { attributes } ) {

		const { text, target } = attributes;

		const classes = 'bu-collapsible-control-toggle js-bu-collapsible-control-target-' + target;

		return(

			<p>
				<RichText.Content
					tagName="button"
					value={ text }
					className={ classes }
				/>
			</p>

		);

	}

} );
