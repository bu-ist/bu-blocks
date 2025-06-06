import { __ } from '@wordpress/i18n';
import { PanelBody, RadioControl } from '@wordpress/components';

import {
	InspectorControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { text, target } = attributes;

	const togglebuttonclasses = 'bu-collapsible-control-toggle';

	const blockProps = useBlockProps();

	return (
		<>
			<p { ...blockProps }>
				<button>
					<RichText
						tagName="span"
						className={ togglebuttonclasses }
						placeholder={ __( 'Toggle Text' ) }
						value={ text }
						onChange={ ( value ) =>
							setAttributes( { text: value } )
						}
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
						help={ __(
							'To control expanding/collapsing a select number of collapsible blocks on the page, place the collapsible blocks AND this control block inside a Group block.'
						) }
						selected={ target }
						onChange={ ( value ) =>
							setAttributes( { target: value } )
						}
						options={ [
							{
								label: __(
									'All Collapsible blocks on this page'
								),
								value: 'all',
							},
							{
								label: __(
									'All Collapsible blocks in this group'
								),
								value: 'group',
							},
						] }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
};
