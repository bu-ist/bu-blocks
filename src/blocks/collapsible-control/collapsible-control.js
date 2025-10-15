/**
 * BLOCK: collapsible-control
 *
 * A block to toggle collapsible blocks on the page
 */

// Internal dependencies.
import blockIcons from '../../components/block-icons';

// Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const {
	PanelBody,
	RadioControl,
	Path,
	SVG
} = wp.components;
const { Fragment } = wp.element;
const {
	InspectorControls,
	RichText,
	useBlockProps
} = wp.blockEditor;

// Register the block.
registerBlockType( 'bu/collapsible-control', {
	apiVersion: 2,
	title: __( 'Collapsible Control' ),
	description: __( 'Toggle Collapsible blocks on the page' ),
	keywords: [ __( 'collapsible' ), __( 'control' ), __( 'toggle' ) ],
	icon: blockIcons('collapsiblecontrol'),
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

		const togglebuttonclasses = 'bu-collapsible-control-toggle';

		const blockProps = useBlockProps();

		return (

			<Fragment>
				<p {...blockProps}>
					<button>
						<RichText
							tagName="span"
							className={togglebuttonclasses}
							placeholder={ __( 'Toggle Text' ) }
							value={ text }
							onChange={ ( value ) => setAttributes( { text: value } ) }
							formattingControls={ [ 'bold', 'italic' ] }
							withoutInteractiveFormatting
							keepPlaceholderOnFocus
						/>
					</button>
				</p>
				<InspectorControls>
					<PanelBody title={ __( 'Control Options' ) }>
						<RadioControl
							label={ __( 'Target' ) }
							help={ __( 'To control expanding/collapsing a select number of collapsible blocks on the page, place the collapsible blocks AND this control block inside a Group block.' ) }
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

			</Fragment>

		);

	},

	save( { attributes } ) {

		const { text, target } = attributes;

		const togglebuttonclasses = 'bu-collapsible-control-toggle js-bu-collapsible-control-target-' + target;

		const blockProps = useBlockProps.save();

		return(

			<p {...blockProps}>
				<RichText.Content
					tagName="button"
					value={ text }
					className={ togglebuttonclasses }
				/>
			</p>

		);

	}

} );
