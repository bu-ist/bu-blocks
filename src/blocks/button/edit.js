/**
 * Edit function for the button block.
 */

// WordPress dependencies.
const { __ } = wp.i18n;
const { Component, Fragment } = wp.element;
const { compose } = wp.compose;
const { Dashicon, IconButton } = wp.components;
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
		} = attributes;

		const classes = [
			'wp-block-button',
			className,
			themeColor.class,
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
								},
							] }
						/>
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