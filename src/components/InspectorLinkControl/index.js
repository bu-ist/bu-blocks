import { __ } from '@wordpress/i18n';
import {
	BaseControl,
	Button,
	Dropdown,
	TextControl,
} from '@wordpress/components';

import { useEffect, useState } from '@wordpress/element';
import { link, linkOff } from '@wordpress/icons';

// LinkControl is stablized in a later version of WP.
// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
import { __experimentalLinkControl as LinkControl } from '@wordpress/block-editor';

// Import Editor styles.
import './editor.scss';

export const InspectorLinkControl = ( props ) => {
	const {
		url = '',
		supportsText = false,
		text = '',
		onChange = () => {},
		help = '',
		label = '',
		className = 'bu-blocks-sidebar-linkcontrol-component',
	} = props;

	const [ buttonText, setButtonText ] = useState( text );
	const [ linkValue, setLinkValue ] = useState( { url } ); // LinkControl requires an object with a url property.

	// Call the passed onChange function when URL or button text changes.
	const handleChange = ( newURL, newButtonText ) => {
		onChange( newURL, newButtonText );
	};

	// Run anytime the URL or button text changes.
	useEffect(() => {
		console.log('InspectorPageUrl useEffect running with:', linkValue.url, buttonText);
		handleChange( linkValue.url, buttonText );
	}, [linkValue, buttonText] );

	return (
		<BaseControl
			id={ 'bu-blocks-sidebar-linkcontrol' }
			label={ label }
			help={ help }
			className={ className }
		>
			<Dropdown
				className="bu-blocks-sidebar-linkcontrol-popover-dropdown"
				contentClassName="bu-blocks-sidebar-linkcontrol-popover-dropdown-content"
				position="bottom left"
				renderToggle={ ( { isOpen, onToggle } ) => (
					<div className="bu-blocks-sidebar-linkcontrol-button-container">
						<Button
							isPrimary
							onClick={ onToggle }
							aria-expanded={ isOpen }
							icon={ link }
							isPressed={ isOpen }
						>
							{ url ? __( 'Edit Link' ) : __( 'Add Link' ) }
						</Button>
						{ url && (
							<Button
								className="bu-blocks-sidebar-linkcontrol-clear-button"
								isSmall
								isSecondary
								isDestructive
								icon={ linkOff }
								onClick={ () => setLinkValue( { url: '' } ) }
							>
								{ ' ' }
								Clear
							</Button>
						) }
					</div>
				) }
				renderContent={ () => (
					<div>
						<LinkControl
							label={ __(
								'Enter URL to link to or select existing content to link to'
							) }
							className={ 'bu-blocks-sidebar-linkcontrol-field' }
							value={ linkValue }
							onChange={ ( newval ) => {
								console.log('LinkControl onChange newval:', newval);
								setLinkValue( newval );
							} }
							settings={ [] }
						/>
						{ supportsText && (
							<div className="bu-blocks-sidebar-linkcontrol-button-text-container">
								<TextControl
									className="bu-blocks-sidebar-linkcontrol-button-text-field"
									label={ __( 'Button Text' ) }
									onChange={ ( newval ) => {
										setButtonText( newval );
									} }
									value={ buttonText }
								/>
							</div>
						) }
					</div>
				) }
			/>
		</BaseControl>
	);
};
