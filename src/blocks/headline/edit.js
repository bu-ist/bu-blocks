/**
 * Internal dependencies
 */
// Import Heading Level Toolbar component.
import HeadingLevelToolbar from '../_includes/components/HeadingLevelToolbar/index.js';

// Import PreText and PostText formats.
import './editor-partials/formats/pretext/index.js';
import './editor-partials/formats/posttext/index.js';

// Import Inspector Controls for the Headline block.
import HeadlineInspectorControls from './editor-partials/InspectorControls/index.js';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { ToolbarGroup } from '@wordpress/components';
import {
	RichText,
	BlockControls,
	useBlockProps,
	AlignmentControl,
} from '@wordpress/block-editor';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { content, level, anchor, textAlign } = attributes;
	// Create the tag name based on the level attribute.
	// This will be 'h1', 'h2', etc. based on the level.
	// The level is expected to be a number between 1 and 6.
	const tagName = 'h' + level;

	// Set the block props for the Heading block.
	const blockProps = useBlockProps( {
		id: anchor ? anchor : undefined,
	} );

	return (
		<>
			<HeadlineInspectorControls { ...props } />
			<BlockControls>
				<HeadingLevelToolbar
					levels={ [ 1, 2, 3, 4, 5, 6 ] }
					selectedLevel={ level }
					onChange={ ( newLevel ) =>
						setAttributes( { level: newLevel } )
					}
				/>
				<ToolbarGroup>
					<AlignmentControl
						value={ textAlign }
						onChange={ ( nextAlign ) => {
							setAttributes( { textAlign: nextAlign } );
						} }
					/>
				</ToolbarGroup>
			</BlockControls>
			<RichText
				{ ...blockProps }
				tagName={ tagName }
				value={ content }
				onChange={ ( newContent ) =>
					setAttributes( { content: newContent } )
				}
				placeholder={ __( 'Write headline…' ) }
				allowedFormats={ [
					'editorial/pretext',
					'editorial/posttext',
					'core/bold',
					'core/italic',
				] }
				withoutInteractiveFormats={ true }
			/>
		</>
	);
}
