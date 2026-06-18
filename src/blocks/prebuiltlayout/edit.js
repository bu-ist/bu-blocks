/**
 * Edit function for the Prebuilt Layout block.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import allowedBlocks from '../../components/allowed-blocks';

// WordPress dependencies.
const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { compose } = wp.compose;
const {
	useBlockProps
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

const BUPrebuiltLayoutEdit = ( props ) => {

		const {
			className,
			presetTemplate,
		} = props;

		const classes = classnames(
			className
		);

		const blockProps = useBlockProps( {
			className: classes,
		});

		return (
			<Fragment>
				<div {...blockProps}>
					<div class='wp-block-bu-prebuilt-layout__inner-container'>
						<div class='wp-block-bu-prebuilt-layout-segment'>
							<p>Lorem ipsum dolor sit amet curabitur platea quis nibh. Pharetra praesent augue sollicitudin laoreet aliqua tellus quisque dolore ultrices phasellus. Diam vel sollicitudin porta enim ullamcorper est dictum nec est. Non urna sapien mollis id ac eu purus laoreet suspendisse nec eleifend pellentesque. Pharetra morbi posuere tempor egestas labore proin lacus nunc ac viverra et donec curabitur nullam.</p>
						</div>
						<div class='wp-block-bu-prebuilt-layout-segment'>
							<p>Lorem ipsum dolor sit amet curabitur platea quis nibh. Pharetra praesent augue sollicitudin laoreet aliqua tellus quisque dolore ultrices phasellus. Diam vel sollicitudin porta enim ullamcorper est dictum nec est. Non urna sapien mollis id ac eu purus laoreet suspendisse nec eleifend pellentesque. Pharetra morbi posuere tempor egestas labore proin lacus nunc ac viverra et donec curabitur nullam.</p>
						</div>
						<div class='wp-block-bu-prebuilt-layout-segment'>
							<p>Lorem ipsum dolor sit amet curabitur platea quis nibh. Pharetra praesent augue sollicitudin laoreet aliqua tellus quisque dolore ultrices phasellus. Diam vel sollicitudin porta enim ullamcorper est dictum nec est. Non urna sapien mollis id ac eu purus laoreet suspendisse nec eleifend pellentesque. Pharetra morbi posuere tempor egestas labore proin lacus nunc ac viverra et donec curabitur nullam.</p>
						</div>
						<div class='wp-block-bu-prebuilt-layout-segment'>
							<p>Lorem ipsum dolor sit amet curabitur platea quis nibh. Pharetra praesent augue sollicitudin laoreet aliqua tellus quisque dolore ultrices phasellus. Diam vel sollicitudin porta enim ullamcorper est dictum nec est. Non urna sapien mollis id ac eu purus laoreet suspendisse nec eleifend pellentesque. Pharetra morbi posuere tempor egestas labore proin lacus nunc ac viverra et donec curabitur nullam.</p>
						</div>
					</div>
				</div>
			</Fragment>
		);
}

export default compose( BUPrebuiltLayoutEdit );
