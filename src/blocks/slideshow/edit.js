// External dependencies.
import classnames from 'classnames';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	PanelBody,
	RadioControl,
	ToggleControl,
	__experimentalNumberControl: NumberControl,
} = wp.components;
const {
	Fragment,
} = wp.element;

const {
	useBlockProps,
	__experimentalUseInnerBlocksProps,
	InspectorControls,
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

export default function Edit( props ) {
	const {
		attributes: {
			aspectRatio,
			crop,
			showNextUp,
			height,
		},
		className,
		setAttributes,
	} = props;

	const blockProps = useBlockProps( {
		className: getClasses( aspectRatio, className, crop, showNextUp ),
	} );

	// eslint-disable-next-line no-restricted-syntax
	const innerBlocksProps = __experimentalUseInnerBlocksProps(
		{ className: 'wp-block-bu-blocks-slideshow-list' },
		{
			allowedBlocks: [ 'bu-blocks/slideshow-image' ],
			template: [
				[ 'bu-blocks/slideshow-image' ],
			],
			templateLock: false,
		}
	);

	return (
		<Fragment>
			<div { ...blockProps } >
				<div className="wp-block-bu-blocks-slideshow-container">
					<ul { ...innerBlocksProps }>
					</ul>
				</div>
			</div>

			<InspectorControls>
				<PanelBody title={ __( 'Display Settings' ) }>
					<NumberControl
						label={ __( 'Height' ) }
						value={ height }
						onChange={ ( value ) => setAttributes( { height: value } ) }
					/>
					<RadioControl
						className="wp-block-bu-blocks-slideshow-aspect-ratio-options"
						label={ __( 'Aspect Ratio' ) }
						selected={ aspectRatio }
						options={ [
							{ label: '16:9', value: '16by9' },
							{ label: '4:3', value: '4by3' },
							{ label: '1:1', value: '1by1' },
							{ label: '3:4', value: '3by4' },
							{ label: '9:16', value: '9by16' },
						] }
						onChange={ option => setAttributes( { aspectRatio: option } ) }
					/>
					<ToggleControl
						label={ __( 'Crop Images to Fit Slideshow' ) }
						checked={ crop }
						onChange={ () => setAttributes( { crop: ! crop } ) }
					/>
					<ToggleControl
						label={ __( 'Preview Next Image' ) }
						checked={ showNextUp }
						onChange={ () => setAttributes( { showNextUp: ! showNextUp } ) }
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
}
