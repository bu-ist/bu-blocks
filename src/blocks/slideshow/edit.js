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
	SelectControl,
	__experimentalNumberControl: NumberControl,
	__experimentalUnitControl: UnitControl,
} = wp.components;
const {
	Fragment,
} = wp.element;

const {
	useBlockProps,
	__experimentalUseInnerBlocksProps,
	InspectorControls,
} = wp.blockEditor;

//const { serverSideRender: ServerSideRender } = wp;

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
				[ `has-aspectratio-${ convertAspectRatioToClass( aspectRatio ) }` ]: aspectRatio,
			}
		)
	);
};

/**
 * Converts an aspect ratio string to a class-friendly format.
 *
 * @param {string} aspectRatio The aspect ratio string (e.g., "16:9").
 * @returns {string} The class-friendly aspect ratio string (e.g., "16by9").
 */
const convertAspectRatioToClass = ( aspectRatio ) => {
	return aspectRatio.replace( ':', 'by' );
};

export default function Edit( props ) {
	const {
		attributes: {
			aspectRatio,
			crop,
			showNextUp,
			height,
			perPage,
		},
		className,
		setAttributes,
		isSelected,
	} = props;

	const blockProps = useBlockProps( {
		className: getClasses( aspectRatio, className, crop, showNextUp ),
	} );

	// eslint-disable-next-line no-restricted-syntax
	const innerBlocksProps = __experimentalUseInnerBlocksProps(
		{ className: 'wp-block-bu-blocks-slideshow__list' },
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
				<div className="wp-block-bu-blocks-slideshow__container">
					<ul { ...innerBlocksProps }>
					</ul>
				</div>
			</div>

			<InspectorControls>
				<PanelBody title={ __( 'Display Settings' ) }>

					<RadioControl
						className="wp-block-bu-blocks-slideshow-aspect-ratio-options"
						label={ __( 'Aspect Ratio' ) }
						selected={ aspectRatio }
						options={ [
							{ label: '16:9', value: '16:9' },
							{ label: '4:3', value: '4:3' },
							{ label: '1:1', value: '1:1' },
							{ label: '3:4', value: '3:4' },
							{ label: '9:16', value: '9:16' },
							{ label: 'Custom', value: 'custom' },
						] }
						onChange={ option => setAttributes( { aspectRatio: option } ) }
					/>
					{ aspectRatio === 'custom' && (
						<UnitControl
							label={ __( 'Height' ) }
							value={ height }
							onChange={ ( value ) => setAttributes( { height: value } ) }
							units={ [
								{ value: 'px', label: 'px' },
								{ value: 'vh', label: 'vh' },
								{ value: 'vw', label: 'vw' },
								{ value: 'em', label: 'em' },
								{ value: 'rem', label: 'rem' },
							] }
							size="small"
						/>
					) }
					<SelectControl
						className="wp-block-bu-blocks-slideshow-edit-per-page-options"
						label={ __( 'Slides Per View' ) }
						value={ perPage }
						onChange={ option => setAttributes( { perPage: option } ) }
						options={ [
							{ label: '1', value: '1' },
							{ label: '2', value: '2' },
							{ label: '3', value: '3' },
						] }
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
