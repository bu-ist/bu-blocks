/**
 * Edit function for the modal block.
 */

// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import themeOptions from '../../global/theme-options';
import Background, { BackgroundControls } from '../../components/background';
import allowedBlocks from '../../components/allowed-blocks';
import getAllowedFormats from '../../global/allowed-formats';

// WordPress dependencies.
const { __ } = wp.i18n;
const { compose } = wp.compose;

const {
	Fragment,
	useState,
	useEffect,
	useMemo,
} = wp.element;

const {
	InspectorControls,
	InnerBlocks,
	PanelColorSettings,
	RichText,
	useBlockProps,
	getColorObjectByAttributeValues,
	getColorObjectByColorValue,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

const {
	select,
} = wp.data;

// Populate selectors that were in core/editor until WordPress 5.2 and are
// now located in core/block-editor.
const {
	hasSelectedInnerBlock,
	isBlockSelected,
} = ( 'undefined' === typeof select( 'core/block-editor' ) ) ? select( 'core/editor' ) : select( 'core/block-editor' );

// Only allow images in the background component for this block.
const allowedMedia = [ 'image' ];

export default function Edit( props ) {
	const {
		attributes,
		setAttributes,
		className,
		clientId,
	} = props;

	const {
		backgroundId,
		calloutHeading,
		calloutText,
		trigger,
		themeColor,
	} = attributes;

	const [ isUploading, setIsUploading ] = useState( false );

	const classes = classnames(
		className,
		{
			[ `has-${ themeColor }-theme` ]: themeColor,
			'has-media': backgroundId,
		}
	);

	// ToDo: explore removing this and using just the CSS classes .is-selected and .has-selected-child.
	const modalSelected = ( clientId ) => {
		if ( clientId ) {
			const modalHasSelectedBlock = hasSelectedInnerBlock( clientId, true ) || isBlockSelected( clientId );
			return ( modalHasSelectedBlock ) ? 'true' : 'false';
		} else {
			return 'false';
		}
	};

	// themeOptions() returns the full/global color palette added to editor settings.
	const themeOptionsPalette = useMemo( () => themeOptions(), [] );

	// Resolve color objects from slugs using WordPress built-in function
	const themeColorObj = useMemo( () => getColorObjectByAttributeValues( themeOptionsPalette, themeColor ), [ themeOptionsPalette, themeColor ] );

	const blockProps = useBlockProps( {
		className: classes,
		'data-selected-modal': modalSelected( clientId ),
	} );

	useEffect( () => {
		// Set the clientId attribute so it can be accessed in the `getEditWrapperProps` function.
		if ( hasSelectedInnerBlock( clientId, true ) || isBlockSelected( clientId ) ) {
			setAttributes( { clientId: clientId } );
		}
	}, [] );

	return (
		<Fragment>
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Theme Settings' ) }
					colorSettings={ [
						{
							value: themeColorObj ? themeColorObj.color : undefined,
							onChange: ( value ) => {
								// Get the color object from the selected color value.
								const newValueColorObj = getColorObjectByColorValue( themeOptionsPalette, value );
								// Set the attribute to the new color slug or an empty string if not found.
								setAttributes( {
									themeColor: newValueColorObj ? newValueColorObj.slug : '',
								} );
							},
							label: __( 'Theme' ),
							disableCustomColors: true,
							colors: themeOptionsPalette,
						},
					] }
				/>
			</InspectorControls>
			<BackgroundControls
				allowedMediaTypes={ allowedMedia }
				blockProps={ props }
				className="banner-placeholder"
				placeholderText={ __( 'Add Image' ) }
				setIsUploading={ setIsUploading }
			/>
			<aside { ...blockProps }>
				<div className="wp-block-editorial-modal-callout">
					<div className="wp-block-editorial-modal-media">
						<figure className="wp-block-editorial-modal-image">
							<Background
								blockProps={ props }
								isUploading={ isUploading }
							/>
						</figure>
					</div>
					<div className="wp-block-editorial-modal-callout-content">
						<div className="modal-valign">
							<RichText
								tagName="h1"
								onChange={ value => setAttributes( { calloutHeading: value } ) }
								value={ calloutHeading }
								placeholder={ __( 'Enter heading…' ) }
								formattingControls={ getAllowedFormats( 'formattingControls', [] ) }
								allowedFormats={ getAllowedFormats( 'allowedFormats', [] ) }
							/>
							<RichText
								tagName="p"
								onChange={ value => setAttributes( { calloutText: value } ) }
								value={ calloutText }
								placeholder={ __( 'Enter text…' ) }
								formattingControls={ getAllowedFormats( 'formattingControls', [ 'bold', 'italic', 'link' ] ) }
								allowedFormats={ getAllowedFormats( 'allowedFormats', [ 'core/bold', 'core/italic', 'core/link' ] ) }
							/>
							<div className="wp-block-editorial-modal-trigger-wrapper">
								<RichText
									tagName="p"
									className="js-bu-block-modal-trigger-overlay button"
									onChange={ value => setAttributes( { trigger: value } ) }
									value={ trigger }
									placeholder={ __( 'Enter trigger label…' ) }
									formattingControls={ getAllowedFormats( 'formattingControls', [] ) }
									allowedFormats={ getAllowedFormats( 'allowedFormats', [] ) }
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="wp-block-editorial-modal-content js-bu-block-modal-overlay">
					<div className="overlay overlay-scale">
						<a href="#" class="wp-block-editorial-modal-overlay-close js-bu-block-modal-overlay-close">Close</a>
						<article>
							<InnerBlocks
								allowedBlocks={ allowedBlocks() }
							/>
						</article>
					</div>
				</div>
			</aside>
		</Fragment>
	);
}

