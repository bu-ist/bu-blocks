/**
 * Edit function for the button block.
 */

// Internal dependencies.
import themeOptions from '../../global/theme-options.js';

// WordPress dependencies.
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;
const { Button, Dashicon, IconButton, PanelBody, RadioControl } = wp.components;
const { InspectorControls, PanelColorSettings, RichText, URLInput, withColors } = wp.editor;

class BUButtonEdit extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const {
			attributes,
			themeColor,
			setThemeColor,
			setAttributes,
			isSelected,
			className,
		} = this.props;

		const {
			text,
			url,
			icon,
		} = attributes;

		const classes = [
			'wp-block-button',
			className,
			...( themeColor.class ? [ themeColor.class.replace( '-color', '' ) ] : [] ),
			...( icon ? [ `icon-navigateright ${icon}` ] : [] ),
		].join( ' ' ).trim();

		return (
			<Fragment>
				<InspectorControls>
						<PanelColorSettings
							title={ __( 'Color Settings' ) }
							colorSettings={ [
								{
									value: themeColor.color,
									onChange: setThemeColor,
									label: __( 'Theme' ),
									disableCustomColors: true,
									colors: themeOptions(),
								},
							] }
						/>
						<PanelBody title={ __( 'Icon Settings' ) }>
							<RadioControl
								label='Placement'
								selected={ icon }
								options={ [
									{ label: 'Before text', value: 'align-icon-left' },
									{ label: 'After text', value: 'align-icon-right' },
								] }
								onChange={ ( value ) => { setAttributes( { icon: value } ) } }
							/>
							<Button
								onClick={ () => setAttributes( { icon: undefined } ) }
								label={ ( 'Clear icon settings' ) }
								isDefault
								isSmall
							>
								{ __( 'Clear' ) }
							</Button>
						</PanelBody>
					</InspectorControls>
				<p>
					<RichText
						placeholder={ __( 'Add text…' ) }
						value={ text }
						onChange={ ( value ) => setAttributes( { text: value } ) }
						formattingControls={ [ 'bold', 'italic' ] }
						className={ classes }
						keepPlaceholderOnFocus
					/>
				</p>
				{ isSelected && (
					<form
						className="block-library-button__inline-link"
						onSubmit={ ( event ) => event.preventDefault() }>
						<Dashicon icon="admin-links" />
						<URLInput
							value={ url }
							onChange={ ( value ) => setAttributes( { url: value } ) }
						/>
						<IconButton icon="editor-break" label={ __( 'Apply' ) } type="submit" />
					</form>
				) }
			</Fragment>
		);
	}
}

export default compose( [
	withColors( 'themeColor' )
] )( BUButtonEdit );