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
		dropCapStyle: {
			type: 'string',
			default: '',
		},
		paragraphColor: {
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
		const { heading, list, content, dropCapStyle, paragraphColor } = attributes;

		let editClassName = className;
		const hasDropCap = className.includes( 'is-style-dropcap' );

		if ( hasDropCap && ! className.includes( 'has-dropcap' ) ) {
			editClassName += ' has-dropcap';
		} else if ( ! hasDropCap && className.includes( 'has-dropcap' ) ) {
			editClassName.replace( 'has-dropcap', '' );
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Intro Paragraph Settings' ) }>
						{ ! hasDropCap && (
							<SelectControl
								label={ __( 'Paragraph text color' ) }
								value={ paragraphColor || '' }
								onChange={ value => setAttributes( { paragraphColor: value } ) }
								options={ [
									{ value: '', label: __( 'None' ) },
									{ value: 'has-paragraph-color-primary', label: __( 'Primary' ) },
									{ value: 'has-paragraph-color-secondary', label: __( 'Secondary' ) }
								] }
							/>
						) }
						{ hasDropCap && (
							<SelectControl
								label={ __( 'Drop cap color' ) }
								value={ dropCapStyle || '' }
								onChange={ value => setAttributes( { dropCapStyle: value } ) }
								options={ [
									{ value: '', label: __( 'None' ) },
									{ value: 'has-dropcap-color-primary', label: __( 'Primary' ) },
									{ value: 'has-dropcap-color-secondary', label: __( 'Secondary' ) },
								] }
							/>
						) }
					</PanelBody>
				</InspectorControls>
				<div className={ [ editClassName, dropCapStyle, paragraphColor ].join( ' ' ).trim() }>
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
					<RichText
						multiline="p"
						tagName="div"
						wrapperClassName='wp-block-editorial-introparagraph-content'
						value={ content }
						onChange={ contentValues => setAttributes( { content: contentValues } ) }
						placeholder={ __( 'Write paragraphs…' ) }
						formattingControls={ [ 'bold', 'italic' ] }
					/>
				</div>
			</Fragment>
		);
	},

	save( { attributes } ) {
		const { heading, content, list, className, dropCapStyle, paragraphColor } = attributes;

		return (
			<div className={ [ className, dropCapStyle, paragraphColor ].join( ' ' ).trim() }>
				<h4>{ heading }</h4>
				<RichText.Content
					tagName="ul"
					className="wp-block-editorial-introparagraph-toc"
					value={ list }
					multiline="li"
				/>
				<RichText.Content
					tagName='div'
					className='wp-block-editorial-introparagraph-content'
					value={ content }
				/>
			</div>
		);
	},
} );
