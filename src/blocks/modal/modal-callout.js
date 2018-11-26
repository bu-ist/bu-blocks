/**
 * The callout component for the modal block.
 */

// WordPress dependencies.
const { __ } = wp.i18n;
const { RichText } = wp.editor;

function Callout( { attributes, setAttributes, children } ) {
	const { calloutHeading, calloutText, trigger } = attributes;

	return (
		<div className="wp-block-editorial-modal-callout">

			<div className="wp-block-editorial-modal-media">
				<figure className="wp-block-editorial-modal-image">
					{ children }
				</figure>
			</div>

			<div className="wp-block-editorial-modal-callout-content">
				<div className="modal-valign">

					<RichText
						tagName="h1"
						onChange={ value => setAttributes( { calloutHeading: value } ) }
						value={ calloutHeading }
						placeholder={ __( 'Enter heading…' ) }
						formattingControls={ [] }
					/>

					<RichText
						tagName="p"
						onChange={ value => setAttributes( { calloutText: value } ) }
						value={ calloutText }
						placeholder={ __( 'Enter text…' ) }
						formattingControls={ [ 'bold', 'italic', 'link' ] }
					/>

					<p>
						<RichText
							tagName="a"
							className="js-bu-block-modal-trigger-overlay button"
							onChange={ value => setAttributes( { trigger: value } ) }
							value={ trigger }
							placeholder={ __( 'Enter trigger label…' ) }
							formattingControls={ [] }
						/>
					</p>

				</div>
			</div>
		</div>
	)
}

export default Callout;