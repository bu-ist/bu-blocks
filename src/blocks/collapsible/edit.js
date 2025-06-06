// External dependencies.
import classnames from 'classnames';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { Icon } from '@wordpress/components';
import {
	InnerBlocks,
	BlockControls,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';

import HeadingToolbar from '../headline/heading-toolbar';

// Load SVG icon for collapsible heading buttons.
import { ReactComponent as CollapsibleIcon } from './icon-collapsible.svg';

/**
 * Internal dependencies
 */
import allowedBlocks from '../../components/allowed-blocks';
import { generateID, isDuplicateblockID } from './generated-ids';
import { EditorPartialsInspectorControls } from './editor-partials/InspectorControls';

export default function Edit( props ) {
	const { attributes, setAttributes, clientId, className, isSelected } =
		props;

	const {
		title,
		level,
		isOpen,
		iconStyle,
		customMarginBottom,
		marginBottom,
		id,
		buttonOpenLabel,
		autoID,
	} = attributes;

	const TagName = `h${ level }`;

	let isPreviewStyle = false;
	if ( props.attributes.className ) {
		isPreviewStyle =
			props.attributes.className.includes( 'is-style-preview' );
	}

	const allowedBlockList = allowedBlocks().filter(
		( block ) => undefined !== block
	);
	allowedBlockList.push( 'bu/collapsible' );

	// Add an offset to the bottom margin in the editor to account for the container element padding
	const editorContainerPaddingOffset = 28;

	/**
	 * Are Auto Generated IDs enabled for this block?
	 * Returns true if toggle control is enabled.
	 * @return {boolean} AutoID enabled toggle setting.
	 */
	const canGenerateID = () => {
		return autoID;
	};

	/**
	 * Generate and set an ID for Blocks that have no ID set but have a title
	 * or if the block's ID is a duplicate of an existing block found in the editor.
	 *
	 * useEffect() is triggered when the `title`, `clientId`, `autoID`, or `id` changes on the block.
	 *
	 * This should cover block duplication events in the editor and is based on a technique used
	 * in core for the Heading block to generate anchors.
	 */
	useEffect( () => {
		// Check if we can generate IDs for this block.
		if ( ! canGenerateID() ) {
			return;
		}

		// If no ID is set, but there is a title value OR if this ID is a duplicate of an
		// existing collapsible block in this post.
		if ( ( ! id && title ) || isDuplicateblockID( props, id ) ) {
			const newUniqueID = generateID( title );

			// Append part of the clientId to the new ID to make it unique.
			setAttributes( {
				id: newUniqueID + `-${ clientId.split( '-', 1 ) }`,
			} );
		}
	}, [ title, clientId, id, autoID ] );

	/**
	 * When the title attribute changes we save the new title, and check if the id
	 * can and should be regenerated.
	 * @param {*} value The new value of the title field.
	 */
	const onTitleChange = ( value ) => {
		const newAttrs = { title: value };
		if ( canGenerateID() && generateID( value ) !== generateID( title ) ) {
			// Generate a new id and save it as the ID.
			newAttrs.id = generateID( value );
		}
		setAttributes( newAttrs );
	};

	const styles = {
		marginBottom:
			( customMarginBottom ? marginBottom : 0 ) +
			editorContainerPaddingOffset,
	};

	const blockProps = useBlockProps( {
		className: classnames(
			className,
			// { 'is-open': isOpen },
			// { 'is-closed': ! isOpen },
			//isOpen ? 'is-open' : 'is-closed',
			isSelected || isOpen ? 'is-open' : 'is-closed',
			`icon-style-${ iconStyle }`
		),
		style: styles,
		'data-uniqueid': id,
	} );

	return (
		<div { ...blockProps }>
			<EditorPartialsInspectorControls { ...props } />

			<BlockControls>
				<HeadingToolbar
					minLevel={ 2 }
					maxLevel={ 7 }
					selectedLevel={ level }
					onChange={ ( newLevel ) =>
						setAttributes( { level: newLevel } )
					}
				/>
			</BlockControls>

			<TagName className="bu-collapsible-heading">
				{ /* Using div because button cause issue in editor */ }
				<RichText
					tagName={ 'div' }
					className={
						isPreviewStyle ? '' : 'bu-block-collapsible-toggle'
					}
					value={ title }
					onChange={ onTitleChange }
					placeholder={ __( 'Heading…' ) }
					formattingControls={ [ 'bold', 'italic' ] }
				/>
				{ ! isPreviewStyle && (
					<span className="wp-block-bu-collapsible-icon">
						<Icon icon={ <CollapsibleIcon /> } />
					</span>
				) }
			</TagName>

			<div className="bu-block-collapsible-content">
				<InnerBlocks allowedBlocks={ allowedBlockList } />
			</div>

			{ isPreviewStyle && (
				<div className="button">{ buttonOpenLabel }</div>
			) }
		</div>
	);
}
