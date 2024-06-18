/**
 * URL Picker Partial for the Button Block
 *
 * This partial handles the addition of BlockControls
 * component to add a "Link" Toolbar button and the Popover
 * LinkControl component that opens to allow the user to add
 * a link to the button block.
 *
 * This makes use of the __experimentalLinkControl which is
 * being stabilized in newer versions of WP and used in many
 * core blocks so it should be relatively safe for us to use.
 */

import { __ } from '@wordpress/i18n';

import {
	BlockControls,
	__experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';

import {
	rawShortcut,
	displayShortcut
} from '@wordpress/keycodes';

import {
	useState,
} from '@wordpress/element';

import {
	KeyboardShortcuts,
	Popover,
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';

import { link as linkIcon, linkOff as linkOffIcon } from '@wordpress/icons';


/**
 * URL Picker Toolbar Button Component
 * @param {boolean} isSelected The passed isSelected prop from the block
 * @param {object} link An object that contains the attribute name and value for the link
 * @param {object} target An object that contains the attribute name and value for the target attribute
 * @param {function} setAttributes The setAttributes function from the block
 * @param {} acnhorRef The useRef() reference to the block to assist in positioning the popover to the block
* @returns A BlockControls component with buttons that open a URL picker component.
 */
export function URLPicker( {
	isSelected,
	link = undefined,
	target = undefined,
	setAttributes,
	anchorRef,
} ) {

	/**
	 * Manage the state of the link picker popover using
	 * useState().
	 * */
	const [ isURLPickerOpen, setIsURLPickerOpen ] = useState( false );


	/**
	 * Open the URL Picker Popover
	 */
	const openLinkControl = () => {
		setIsURLPickerOpen( true );
	};

	/**
	 * Remove the link and clear the attributes
	 */
	const removeLink = () => {
		setAttributes( {
			[link.attribute]: undefined,
			[target.attribute]: undefined
		});
	};

	/**
	 * LinkControl expects a value passed as an object
	 * with `url` and `opensInNewTab` as properties.
	 *
	 * This object sets those properties to the attributes
	 * that are passed.
	 */
	const linkControlValue = {
		url: link?.value,
		opensInNewTab: target?.value
	};

	const handleChange = ( value ) => setAttributes({
		[link.attribute]: value?.url,
		[target.attribute]: value?.opensInNewTab
	});

	return (
		<>
			<BlockControls group="block">
				<ToolbarGroup>
					<ToolbarButton
						name="link"
						icon={ linkIcon }
						title={ __( 'Link' ) }
						shortcut={ displayShortcut.primary( 'k' ) }
						onClick={ openLinkControl }
					/>
					{ link?.value && (
						<ToolbarButton
							name="unlink"
							icon={ linkOffIcon }
							title={ __( 'Remove Link' ) }
							onClick={ removeLink }
							shortcut={ displayShortcut.primaryShift( 'k' ) }
						/>
					) }
				</ToolbarGroup>
			</BlockControls>
			{ isSelected && (
				<KeyboardShortcuts
					bindGlobal
					shortcuts={ {
						[ rawShortcut.primary( 'k' ) ]: openLinkControl,
						[ rawShortcut.primaryShift( 'k' ) ]: () => {
							removeLink();
							setIsURLPickerOpen( false );
						},
					} }
				/>
			) }
			{ isURLPickerOpen && (
				<Popover
					position="bottom center"
					noArrow={false}
					anchorRef={ anchorRef?.current }
					onClose={ () => setIsURLPickerOpen( false ) }
				>
					<LinkControl
						value={ linkControlValue }
						showInitialSuggestions
						onChange={ handleChange }
					/>
				</Popover>
			) }
		</>
	);
}
