/**
 * BLOCK: editorial/introparagraph
 *
 * Register an intro paragraph block with Gutenberg.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

// WordPress dependencies.
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const {
	PanelBody,
	SelectControl,
} = wp.components;
const {
	RichText,
	PlainText,
	InspectorControls,
} = wp.editor;

// The current publication owner.
const publicationClass = document.getElementById( 'bu_publication_owner' ).value;

// Register the block.
registerBlockType( 'editorial/introparagraph', {

	title: __( 'Intro Paragraph' ),
	description: __( 'Add an introduction with a bulleted list and styled paragraph.' ),
	icon: <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false"><path fill="#c00" d="M11 5v7H9.5C7.6 12 6 10.4 6 8.5S7.6 5 9.5 5H11m8-2H9.5C6.5 3 4 5.5 4 8.5S6.5 14 9.5 14H11v7h2V5h2v16h2V5h2V3z"></path></svg>,
	category: 'bu-editorial',
	supports: {
		anchor: true,
	},
	attributes: {
		heading: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-introparagraph h4'
		},
		list: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-introparagraph-toc'
		},
		content: {
			type: 'string',
			source: 'html',
			selector: '.wp-block-editorial-introparagraph-content',
		},
		hasDropCap: {
			type: 'string',
			default: '',
		},
		dropCapStyle: {
			type: 'string',
			default: '',
		},
		paragraphColor: {
			type: 'string',
			default: '',
		},
		className: {
			type: 'string',
			default: '',
		}
	},
	styles: [
		{
			name: 'default',
			label: __( 'Regular' ),
			isDefault: true
		},
		{
			name: 'large',
			label: __( 'Large paragraph text' )
		},
		{
			name: 'split',
			label: __( 'Split paragraph text' )
		},
		{
			name: 'dropcap-boxed',
			label: __( 'Boxed dropcap' )
		},
		{
			name: 'dropcap-outlined',
			label: __( 'Outlined dropcap' )
		},
		{
			name: 'dropcap-dimensional',
			label: __( 'Dimensional dropcap' )
		},
		{
			name: 'dropcap-image',
			label: __( 'Image dropcap' )
		}
	],
	publicationClassName: publicationClass + '-block-editorial-introparagraph',

	edit( props ) {
		const { attributes, setAttributes, className } = props;
		const { heading, list, content, hasDropCap, dropCapStyle, paragraphColor } = attributes;

		// This is either 'has-dropcap' or ''.
		let hasDropCapClass = hasDropCap;

		// Determine if a sepecific dropcap style has been selected.
		let hasDropCapStyle = className.includes( 'is-style-dropcap' );

		// Ensure that the has-dropcap, other has-dropcap classes, and paragraph classes are aligned.
		if ( hasDropCapStyle && '' === hasDropCap ) {
			setAttributes( { hasDropCap: 'has-dropcap' } );
			setAttributes( { paragraphColor: '' } );
			hasDropCapClass = 'has-dropcap';
		} else if ( ! hasDropCapStyle && '' !== hasDropCap ) {
			setAttributes( { hasDropCap: '' } );
			setAttributes( { dropCapStyle: '' } );
			hasDropCapClass = '';
		}

		// Determine if the drop cap SVG should be included in content.
		let isImageDropCap = className.includes( 'is-style-dropcap-image' );

		// Pull the first character from the article content use in the drop cap SVG.
		let dropCapCharacter = '';
		if ( 'undefined' !== typeof content ) {
			dropCapCharacter = content.charAt( 0 );
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Intro Paragraph Settings' ) }>
						{ ! hasDropCapStyle && (
							<SelectControl
								label={ __( 'Paragraph text color' ) }
								value={ paragraphColor || '' }
								onChange={ value => setAttributes( { paragraphColor: value, dropCapStyle: '', hasDropCap: '' } ) }
								options={ [
									{ value: '', label: __( 'None' ) },
									{ value: 'has-paragraph-color-primary', label: __( 'Primary' ) },
									{ value: 'has-paragraph-color-secondary', label: __( 'Secondary' ) }
								] }
							/>
						) }
						{ hasDropCapStyle && (
							<SelectControl
								label={ __( 'Drop cap color' ) }
								value={ dropCapStyle || '' }
								onChange={ value => setAttributes( { dropCapStyle: value, paragraphColor: '', hasDropCap: 'has-dropcap' } ) }
								options={ [
									{ value: '', label: __( 'None' ) },
									{ value: 'has-dropcap-color-primary', label: __( 'Primary' ) },
									{ value: 'has-dropcap-color-secondary', label: __( 'Secondary' ) },
								] }
							/>
						) }
					</PanelBody>
				</InspectorControls>
				<div className={ [ className, hasDropCapClass, dropCapStyle, paragraphColor ].join( ' ' ).trim() }>
					<PlainText
						tagName='h4'
						value={ heading }
						onChange={ heading => setAttributes( { heading } ) }
						placeholder={ __( 'Add a heading' ) }
					/>
					<RichText
						multiline="li"
						tagName="ul"
						onChange={ ( listValues ) => setAttributes( { list: listValues } ) }
						value={ list }
						wrapperClassName="wp-block-editorial-introparagraph-toc"
						className='{ className }'
						placeholder={ __( 'Write list…' ) }
						formattingControls={ [ 'link' ] }
					/>
					<div className="wp-block-editorial-introparagraph-content">
						{ isImageDropCap && (
							<svg>
								<pattern
									id="dropcap-texture"
									viewBox="0 0 1024 1024"
									patternUnits="userSpaceOnUse"
									width="100%" height="100%"
									x="0%" y="0%">
									<image href="https://www.bu.edu/webteam/projects/testpattern.png" width="1024" height="1024"/>
								</pattern>
								<text text-anchor="start"
									x="0"
									y="50%"
									dy=".404em"
									class="dropcap-filltext">{ dropCapCharacter }</text>
							</svg>
						) }
						<RichText
							tagName="p"
							value= { content }
							onChange={ content => setAttributes( { content: content } ) }
							placeholder={ __( 'Write paragraph…' ) }
							formattingControls={ [ 'bold', 'italic' ] }
						/>
					</div>
				</div>
			</Fragment>
		);
	},

	save( { attributes } ) {
		const { heading, list, content, hasDropCap, dropCapStyle, paragraphColor, className } = attributes;

		let isImageDropCap = false;
		if ( 'undefined' !== typeof className ) {
			// Determine if the drop cap SVG should be included in content.
			isImageDropCap = className.includes( 'is-style-dropcap-image' );
		}

		// Pull the first character from the article content use in the drop cap SVG.
		let dropCapCharacter = '';
		if ( 'undefined' !== typeof content ) {
			dropCapCharacter = content.charAt( 0 );
		};

		return (
			<div className={ [ hasDropCap, dropCapStyle, paragraphColor ].join( ' ' ).trim() }>
				<h4>{ heading }</h4>
				<RichText.Content
					tagName="ul"
					className="wp-block-editorial-introparagraph-toc"
					value={ list }
					multiline="li"
				/>
				<div className="wp-block-editorial-introparagraph-content">
					{ isImageDropCap && (
						<svg>
							<pattern
								id="dropcap-texture"
								viewBox="0 0 1024 1024"
								patternUnits="userSpaceOnUse"
								width="100%" height="100%"
								x="0%" y="0%">
								<image href="https://www.bu.edu/webteam/projects/testpattern.png" width="1024" height="1024"/>
							</pattern>
							<text text-anchor="start"
								x="0"
								y="50%"
								dy=".404em"
								class="dropcap-filltext">{ dropCapCharacter }</text>
						</svg>
					) }
					<RichText.Content
						tagName="p"
						value= { content }
					/>
				</div>
			</div>
		);
	},
} );
