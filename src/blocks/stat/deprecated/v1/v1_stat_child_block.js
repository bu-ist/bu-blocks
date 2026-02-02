/**
 * Deprecated block: v1 child stat block.
 * Handles blocks saved before WordPress 5.7
 * The previous block used `SVG` component but didn't pass focusable="false" to the SVG element,
 * WordPress seems to have been adding focusable="false", and role="img", etc, automatically so it
 * was saved in the database with those attributes
 * Now after the 5.7 upgrade `SVG` no longer adds focusable="false"` automatically,
 * so we need to keep this deprecated version to handle blocks saved before the upgrade.
 */

// External dependencies.
import classnames from 'classnames';

// WordPress dependencies.
const {
	Circle,
} = wp.components;

const {
	RichText,
	useBlockProps,
} = wp.blockEditor;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} circleOneColor The color option for circle 1.
 * @param {string} circleTwoColor The color option for circle 2.
 * @param {string} className      Default classes assigned to the block.
 * @param {number} numberSize     The size at which to display the stat number.
 * @return {string} The class list for the block.
 */
const getBlockClasses = ( circleOneColor, circleTwoColor, className, numberSize ) => {
	return (
		classnames(
			className,
			{
				[ `has-circle1-color-${ circleOneColor }` ]: circleOneColor,
				[ `has-circle2-color-${ circleTwoColor }` ]: circleTwoColor,
				[ `has-number-size-${ numberSize }` ]: numberSize,
			}
		)
	);
};

export const config = {
	// This deprecation handles blocks saved before WordPress 5.7
	// when SVG elements didn't automatically get focusable="false"
	attributes: {
		circleOneColor: {
			type: 'string',
			default: '',
		},
		circleOneFill: {
			type: 'number',
			default: 100,
		},
		circleTwoColor: {
			type: 'string',
			default: '',
		},
		circleTwoFill: {
			type: 'number',
			default: 25,
		},
		className: {
			type: 'string',
			default: '',
		},
		number: {
			type: 'string',
			default: '',
			source: 'text',
			selector: '.wp-block-bu-stat-number',
		},
		numberSize: {
			type: 'number',
			default: 2,
		},
		postText: {
			type: 'string',
			default: '',
			source: 'html',
			selector: '.wp-block-bu-stat-text-post',
		},
		preText: {
			type: 'string',
			default: '',
			source: 'html',
			selector: '.wp-block-bu-stat-text-pre',
		},
	},
	save( { attributes } ) {
		const {
			circleOneColor,
			circleOneFill,
			circleTwoColor,
			circleTwoFill,
			className,
			number,
			numberSize,
			postText,
			preText,
		} = attributes;

		// Old SVG function without focusable="false"
		const oldStatSVG = () => (
			<svg
				className="wp-block-bu-stat-svg"
				xmlns="http://www.w3.org/2000/svg"
				width="100px"
				height="100px"
				viewBox="0 0 100 100"
				style={ { enableBackground: 'new 0 0 100 100' } }
				focusable="false" // old attribute retained for backward compatibility
				role="img" // old attribute retained for backward compatibility
				aria-hidden="true" // old attribute retained for backward compatibility
			>
				<Circle
					className="wp-block-bu-stat-circle1"
					cx="50"
					cy="50"
					r="47"
					style={ { strokeDashoffset: `${ 302 * ( 1 - ( circleOneFill * 0.01 ) ) }` } }
				/>
				<Circle
					className="wp-block-bu-stat-circle2"
					cx="50"
					cy="50"
					r="47"
					style={ { strokeDashoffset: `${ 302 * ( 1 - ( circleTwoFill * 0.01 ) ) }` } }
				/>
			</svg>
		);

		const blockProps = useBlockProps.save( {
			className: getBlockClasses( circleOneColor, circleTwoColor, className, numberSize ),
		} );

		return (
			<div { ...blockProps }>
				<div className="wp-block-bu-stat-container-outer">
					<div className="wp-block-bu-stat-container-inner">
						{ ! RichText.isEmpty( preText ) &&
							<RichText.Content
								tagName="div"
								className="wp-block-bu-stat-text-pre"
								value={ preText }
							/>
						}
						<div className="wp-block-bu-stat-number">{ number }</div>
						{ ! RichText.isEmpty( postText ) &&
							<RichText.Content
								tagName="div"
								className="wp-block-bu-stat-text-post"
								value={ postText }
							/>
						}
						{ oldStatSVG() }
					</div>
				</div>
			</div>
		);
	},
};
