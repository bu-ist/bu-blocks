import { __ } from '@wordpress/i18n';
import { PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export default function HeadlineInspectorControls() {
	return (
		<InspectorControls>
			<PanelBody title={ __( 'Help' ) } initialOpen={ false }>
				<>
					<p>
						<strong>PreText and PostText Formats</strong>
						<br />
						These formats are intended to style text such as
						&ldquo;Chapter 3:&rdquo; as part of a headline text
						either before or after the main Headline text. Enter
						Headline and then select text in the headline and apply
						a pre or post text format from the Format Control
						Toolbar on the block.
					</p>
					<p>
						<strong>Emphasis Color & Weight</strong>
						<br />
						Emphasis Color and Emphasis weight can be selectively
						applied to a word(s) by selecting characters and
						applying a <strong>Bold</strong> style. The color or
						weight change will apply to any bold text inside the
						Headline tag.
					</p>
				</>
			</PanelBody>
		</InspectorControls>
	);
}
