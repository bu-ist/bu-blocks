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
					<div class='wp-block-prebuilt-layout__inner-container'>
						<div class='wp-block-prebuilt-segment'>x</div>
						<div class='wp-block-prebuilt-segment'>x</div>
						<div class='wp-block-prebuilt-segment'>x</div>
						<div class='wp-block-prebuilt-segment'>x</div>
					</div>
				</div>
			</Fragment>
		);
}

export default compose( BUPrebuiltLayoutEdit );
