/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import getAllowedFormats from '../../global/allowed-formats';
import publicationSlug from '../../global/publication-slug';
import { ButtonInspectorControls as InspectorControls } from './editor-partials/inspector-controls';
import { ToolbarLinkControl } from '../../components/ToolbarLinkControl/ToolbarLinkControl';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { useRef } from '@wordpress/element';

// The current publication owner.
const publication = publicationSlug();

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className  Additional classes assigned to the block.
 * @param {string} themeColor The theme color assigned to the block.
 * @param {string} icon       The icon placement.
 */
const getClasses = ( className, themeColor, icon ) =>
	classnames( 'wp-block-bu-button', {
		[ `${ publication }-block-button` ]: publication && publication !== '',
		[ `has-${ themeColor }-theme` ]: themeColor,
		[ `icon-navigateright ${ icon }` ]: icon,
		[ className ]: className,
	} );

export default function Edit( props ) {
	const {
		attributes: { text, url, icon, align, urlTarget, noFollow, themeColor },
		setAttributes,
		className,
		isSelected,
	} = props;

	// Use useRef to store a reference to the block.
	const ref = useRef();

	const blockProps = useBlockProps( {
		ref, // A reference to the block used by URLPicker to anchor popover.
		className: getClasses( className, themeColor, icon ),
	} );

	return (
		<>
			<ToolbarLinkControl
				isSelected={ isSelected }
				value={ { url, noFollow, opensInNewTab: urlTarget } }
				onChange={ ( newLink ) => {
					console.log(`The selected item: ${newLink.title} (${newLink.url}), opensInNewTab: ${newLink.opensInNewTab}, noFollow: ${newLink.noFollow}`);
					setAttributes( { 
						url: newLink.url, 
						urlTarget: newLink.opensInNewTab, 
						noFollow: newLink.noFollow 
					} );
				} }
				settings={ [
					{ id: 'opensInNewTab', title: __( 'Open in New Tab' ) },
					{ id: 'noFollow', title: __( 'Add No Follow' ) },
				] }
				anchorRef={ ref }
			/>
			<InspectorControls { ...props } />
		<div { ...blockProps }>
				<RichText
					tagName="div"
					placeholder={ __( 'Add text…' ) }
					value={ text }
					onChange={ ( value ) => setAttributes( { text: value } ) }
					formattingControls={ getAllowedFormats(
						'formattingControls',
						'bold',
						'italic'
					) }
					allowedFormats={ getAllowedFormats( 'allowedFormats', [
						'core/bold',
						'core/italic',
					] ) }
					keepPlaceholderOnFocus
				/>
			</div>
		</>
	);
}
