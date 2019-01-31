/**
 * The post chooser component inspector controls.
 */

 // WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	Component,
} = wp.element;
const {
	PanelBody,
} = wp.components;
const {
	InspectorControls,
} = wp.editor;

class PostChooserControls extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		return (
			<InspectorControls>
				<PanelBody title={ __( 'Post Options' ) }>
					{ this.props.children }
				</PanelBody>
			</InspectorControls>
		);
	};
};

export default PostChooserControls;