// External dependencies.
import classnames from 'classnames';

// WordPress dependencies.
const {
	useBlockProps,
	InnerBlocks,
} = wp.blockEditor;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string}  aspectRatio The value of the aspect ratio option.
 * @param {string}  className   Default and additional classes applied to the block.
 * @param {boolean} crop        Whether the Crop option is toggled on.
 * @param {boolean} showNextUp  Whether the Show Next Up option is toggled on.
 * @return {string} The class list for the block.
 */
const getClasses = ( aspectRatio, className, crop, showNextUp ) => {
	return (
		classnames(
			'js-bu-blocks-slideshow',
			className,
			{
				'has-crop': crop,
				'has-shownextup': showNextUp,
				[ `has-aspectratio-${ aspectRatio }` ]: aspectRatio,
			}
		)
	);
};

export default function Save( { attributes } ) {
	const {
		aspectRatio,
		className,
		crop,
		showNextUp,
	} = attributes;

	const blockProps = useBlockProps.save(
		{
			className: getClasses( aspectRatio, className, crop, showNextUp ),
		}
	);

	return (
		<div { ...blockProps } >
			<div className="wp-block-bu-blocks-slideshow-container">
				<ul className="wp-block-bu-blocks-slideshow-list">
					<InnerBlocks.Content />
				</ul>
			</div>
		</div>
	);
}
