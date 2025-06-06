// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import Background, { BackgroundControls } from '../../components/background';
import allowedBlocks from '../../components/allowed-blocks';
import getAllowedFormats from '../../global/allowed-formats';
import { EditorPartialsInspectorControls } from './editor-partials/InspectorControls';

// WordPress dependencies.
import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import { select } from '@wordpress/data';

import { useState } from '@wordpress/element';

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {number}  background Whether the block has background media assigned.
 * @param {string}  className  Default classes assigned to the block.
 * @param {boolean} hideTeaser Whether to display the teaser.
 * @param {boolean} round      Whether to display round images.
 * @param {string}  size       The size attribute.
 * @param {string}  themeColor The assigned background color.
 */
const getClasses = (
	background,
	className,
	hideTeaser,
	round,
	size,
	themeColor
) => {
	return classnames( 'js-bu-block-drawer', {
		'has-hide-teaser': hideTeaser,
		'is-style-round': round,
		[ className ]: className,
		[ `has-${ themeColor }-background` ]: themeColor,
		[ size ]: size && size !== '',
		'has-media': background,
	} );
};

export default function Edit( props ) {
	// Get the properties and attributes we'll need.
	const {
		attributes: {
			backgroundId,
			button,
			hed,
			hideTeaser,
			lede,
			round,
			size,
			themeColor,
		},
		className,
		isSelected,
		setAttributes,
	} = props;

	const blockProps = useBlockProps( {
		className: getClasses(
			backgroundId,
			className,
			hideTeaser,
			round,
			size,
			themeColor
		),
	} );

	const [ isUploading, setIsUploading ] = useState( false );

	return (
		<aside { ...blockProps }>
			<BackgroundControls
				allowedMediaTypes={ [ 'image' ] }
				blockProps={ props }
				inlinePlaceholder={ true }
				options={ [] }
				placeholderText={ __( 'Add Image' ) }
				setIsUploading={ setIsUploading }
				imageSize="large"
			/>
			<div className="wp-block-editorial-drawer-teaser">
				{ ( backgroundId || isSelected ) && (
					<figure>
						<Background
							blockProps={ props }
							isUploading={ isUploading }
						/>
					</figure>
				) }
				<RichText
					formattingControls={ getAllowedFormats(
						'formattingControls',
						[]
					) }
					allowedFormats={ getAllowedFormats( 'allowedFormats', [] ) }
					keepPlaceholderOnFocus={ true }
					onChange={ ( value ) => setAttributes( { hed: value } ) }
					placeholder={ __( 'Enter heading…' ) }
					tagName="h2"
					value={ hed }
				/>
				<RichText
					formattingControls={ getAllowedFormats(
						'formattingControls',
						[ 'bold', 'italic', 'link' ]
					) }
					allowedFormats={ getAllowedFormats( 'allowedFormats', [
						'core/bold',
						'core/italic',
						'core/link',
					] ) }
					keepPlaceholderOnFocus={ true }
					onChange={ ( value ) => setAttributes( { lede: value } ) }
					placeholder={ __( 'Enter text…' ) }
					tagName="p"
					value={ lede }
				/>
				<div className="wp-block-editorial-drawer-open-wrapper">
					<RichText
						formattingControls={ getAllowedFormats(
							'formattingControls',
							[]
						) }
						allowedFormats={ getAllowedFormats(
							'allowedFormats',
							[]
						) }
						keepPlaceholderOnFocus={ true }
						className="button js-bu-block-drawer-open"
						onChange={ ( value ) =>
							setAttributes( { button: value } )
						}
						placeholder={ __( 'Enter button label…' ) }
						tagName="p"
						value={ button }
					/>
				</div>
			</div>
			<section className="wp-block-editorial-drawer-content js-bu-block-drawer-content">
				<div className="wp-block-editorial-drawer-wrapper">
					<InnerBlocks allowedBlocks={ allowedBlocks() } />
					<div className="wp-block-editorial-drawer-close">
						<button className="wp-block-editorial-drawer-close-button js-bu-block-drawer-close">
							Close
						</button>
					</div>
				</div>
			</section>
			<div className="wp-block-editorial-drawer-clearfix"></div>
			<EditorPartialsInspectorControls { ...props } />
		</aside>
	);
}
