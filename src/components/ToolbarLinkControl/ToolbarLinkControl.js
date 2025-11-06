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
    // LinkControl is stabilized in a later version of WP.
    __experimentalLinkControl as LinkControl
} from '@wordpress/block-editor';

import {
    rawShortcut,
    displayShortcut
} from '@wordpress/keycodes';

import {
    useState,
    useEffect,
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
 * @param {} anchorRef The useRef() reference to the block to assist in positioning the popover to the block
* @returns {JSX.Element} A BlockControls component with buttons that open a URL picker component.
 */
export const ToolbarLinkControl = ( props ) => {

    const {
        isSelected,
        value = { url: '' }, // LinkControl expects an object with a url property.
        showSuggestions = true, // LinkControl showInitialSuggestions value.
        showInitialSuggestions = true, // LinkControl showInitialSuggestions value.
        settings = undefined, // LinkControl settings value.
        anchorRef = undefined,
        noArrow = undefined,
        getAnchorRect = undefined,
        position = 'bottom center',
        onChange = () => {},
    } = props;

    // isSelected is necessary to show the toolbar button and popover.
    if ( isSelected === undefined ) {
        console.warn('ToolbarLinkControl: isSelected is undefined, unable to render <ToolbarLinkControl />.');
        return null;
    }

    /**
     * Manage the editing state of the link picker popover using
     * useState().
     */
    const [ isEditing, setIsEditing ] = useState( false );
    const isURLSet = Boolean( value?.url );

    /**
     * Function called to start editing the link.
     * @param {object} event The event object.
     */
    const startEditing = ( event ) => {
        event.preventDefault();
        setIsEditing( true );
    }

    /**
     * Function called to unlink the link.
     */
    const unLink = () => {
        setLinkControlValue( { url: '' } );
        setIsEditing( false );
    }

    // Determine if the LinkControl popover should be visible.
    const isLinkControlVisible = isSelected && ( isEditing || isURLSet );

    /**
     * LinkControl expects a value passed as an object
     * with `url` and `opensInNewTab` as properties.
     *
     * This object sets those properties to the attributes
     * that are passed.
     */
    const [ linkControlValue, setLinkControlValue ] = useState( value );


    // Call the passed onChange function when URL or opensInNewTab changes.
    // Run anytime the linkControl value changes.
    useEffect(() => {
        onChange( linkControlValue );
    }, [linkControlValue] );

    return (
        <>
            <BlockControls>
                <ToolbarGroup>
                    { ! isURLSet && (
                        <ToolbarButton
                            name="link"
                            icon={ linkIcon }
                            title={ __( 'Link' ) }
                            shortcut={ displayShortcut.primary( 'k' ) }
                            onClick={ startEditing }
                            isActive={ isEditing }
                        />
                    ) }
                    { isURLSet && (
                        <ToolbarButton
                            name="unlink"
                            icon={ linkOffIcon }
                            title={ __( 'Remove Link' ) }
                            onClick={ unLink }
                            shortcut={ displayShortcut.primaryShift( 'k' ) }
                            isActive={ true }
                        />
                    ) }
                    
                </ToolbarGroup>
            </BlockControls>
            { isSelected && (
                <KeyboardShortcuts
                    shortcuts={ {
                        [ rawShortcut.primary( 'k' ) ]: ( event ) => {
                            event.preventDefault();
                            startEditing( event );
                        },
                        [ rawShortcut.primaryShift( 'k' ) ]: ( event ) => {
                            event.preventDefault();
                            unLink();
                        },
                    } }
                />
            )}
            
            { isLinkControlVisible && (
                <Popover
                    position={ position }
                    noArrow={ noArrow }
                    anchorRef={ anchorRef?.current }
                    getAnchorRect={ getAnchorRect }
                    onClose={ () => setIsEditing( false ) }
                    focusOnMount={ isEditing ? 'firstElement' : false }
                >
                    <LinkControl
                        value={ linkControlValue }
                        showInitialSuggestions={ showInitialSuggestions }
                        showSuggestions={ showSuggestions }
                        onChange={ ( newval ) => {
                            setLinkControlValue( newval );
                        }}
                        onRemove={ unLink }
                        forceIsEditingLink={ isEditing }
                        settings={ settings }
                    />
                </Popover>
            ) }
        </>
    );
}
