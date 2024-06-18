/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import themeOptions from '../../global/theme-options';
import getAllowedFormats from '../../global/allowed-formats';
import publicationSlug from '../../global/publication-slug';
import blockIcons from '../../components/block-icons/';
import { URLPicker } from './editor-partials/url-picker-popover';
import { InspectorControlsPartial as InspectorControls } from './editor-partials/inspector-controls';

import deprecated from './deprecated';

//  Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	registerBlockType,
} = wp.blocks;
const {
	useRef
} = wp.element;
const {
	RichText,
	withColors,
	useBlockProps,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;
const {
	compose,
} = wp.compose;

// The current publication owner.
const publication = publicationSlug();

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className  Additional classes assigned to the block.
 * @param {string} themeColor The theme color assigned to the block.
 * @param {string} icon       The icon placement.
 */
const getClasses = ( className, themeColor, icon ) => classnames(
	'wp-block-button',
	'wp-block-bu-button',
	{
		[ `${publication}-block-button` ]: publication && publication !== '',
		[ `has-${themeColor}-theme` ]: themeColor,
		[ `icon-navigateright ${icon}` ]: icon,
		[ className ]: className,
	}
);

// Register the block.
registerBlockType( 'bu/button', {
	apiVersion: 2,
	title: __( 'Button' ),
	description: __( 'Prompt visitors to take action with a custom button.' ),
	icon: blockIcons('button'),
	category: 'bu',
	attributes: {
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href',
		},
		title: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'title',
		},
		text: {
			type: 'string',
			source: 'html',
			selector: 'a',
		},
		themeColor: {
			type: 'string',
		},
		icon: {
			type: 'string',
		},
		className: {
			type: 'string',
		},
		urlTarget: {
			type: 'boolean',
		}
	},
	styles: [
		{
			name: 'default',
			label: __( 'Default' ),
			isDefault: true
		},
		{
			name: 'outline',
			label: __( 'Outline' )
		},
		{
			name: 'text',
			label: __( 'Text' )
		},
		{
			name: 'accent',
			label: __( 'Accent' )
		},
	],
	supports: {
		className: false,
		customClassName: true,
		align: [ 'left', 'center', 'right' ],
	},

	//edit: withColors( 'themeColor' )( props => {
	edit: compose( [
		withColors( 'themeColor' )
	] )( props => {
		const {
			attributes: {
				text,
				url,
				icon,
				align,
				urlTarget
			},
			themeColor,
			setThemeColor,
			setAttributes,
			isSelected,
			className,
		} = props;

		// Use useRef to store a reference to the block.
		const ref = useRef();

		const blockProps = useBlockProps( {
			ref, // A reference to the block used by URLPicker to anchor popover.
			className: getClasses( className, themeColor.slug, icon ),
		} );

		return (
			<>
				<URLPicker
					anchorRef={ ref }
					isSelected={ isSelected }
					link={ { attribute: 'url', value: url } }
					setAttributes={ setAttributes }
					target={ { attribute: 'urlTarget', value: urlTarget } }
				/>
				<InspectorControls
					themeOptions={ themeOptions }
					themeColor={ themeColor }
					setThemeColor={ setThemeColor }
					icon={ icon }
					setAttributes={ setAttributes }
				/>

				<p
					className={`wp-block-bu-button-container ${align ? "" : "wp-block"}`}
				>
					<RichText
						{ ...blockProps}
						tagName="div"
						placeholder={ __( 'Add text…' ) }
						value={ text }
						onChange={ ( value ) => setAttributes( { text: value } ) }
						formattingControls={ getAllowedFormats( 'formattingControls', [ 'bold', 'italic' ] ) }
						allowedFormats={ getAllowedFormats( 'allowedFormats', [ 'core/bold', 'core/italic' ] ) }
						keepPlaceholderOnFocus
					/>
				</p>
			</>
		);
	} ),

	save( { attributes } ) {
		const {
			url,
			text,
			themeColor,
			icon,
			className,
			urlTarget,
		} = attributes;

		const blockProps = useBlockProps.save( {
			className: getClasses( className, themeColor, icon ),
		} );

		return (
			<p>
				<RichText.Content
					{ ...blockProps}
					tagName="a"
					href={ url }
					value={ text }
					target={ urlTarget && '_blank' }
					rel={ urlTarget && 'noopener' }
				/>
			</p>
		);
	},

	deprecated,

} );
