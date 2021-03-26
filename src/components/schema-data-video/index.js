/**
 * Component: Schema Data for Videos
 *
 * An absraction of Schema structured data fields for video blocks and content.
 *
 * Import this component and its attributes into a block with:
 * 	`import SchemaDataVideoTools, { SchemaDataVideoAttributes } from '../../components/schema-data-video';`
 */

// WordPress dependencies.
const {
	__,
} = wp.i18n;
const {
	Fragment,
	useState,
} = wp.element;
const {
	PanelBody,
	ToggleControl,
	TextControl,
	TextareaControl,
	DateTimePicker,
	Popover,
	Button,
	BaseControl,
} = wp.components;
const {
	InspectorControls,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

// Schema Data attributes.
const SchemaDataVideoAttributes = {
	schemaDataVideoShow: {
		type: 'boolean',
		default: false,
	},
	videoName: {
		type: 'string',
		default: '',
	},
	videoDescription: {
		type: 'string',
		default: '',
	},
	videouploadDate: {
		type: 'string',
		default: '',
	},
	schemaJSON: {
		type: 'object',
		default: {
			"@context": "http://schema.org",
			"@type": "VideoObject",
			"name": '',
			"description": '',
			"thumbnailUrl": [],
			"uploadDate": "",
			"duration": "",
			"contentUrl": "",
			"embedUrl": "",
			"director": "",
			"productionCompany": "",
			"keywords": ""
		},
	},
};


const SchemaDataVideoJSON = function( props ) {

	const { json } = props;


	return(
		<script className="wp-blocks-components-schema-data-video-tools" type="application/ld+json">
			{ JSON.stringify( json ) }
		</script>

	)
}

/**
 * The Schema Data Video component.
 *
 * @param {array} props The properties passed to the component.
 */
function SchemaDataVideoTools( props ) {

	// Get the properties of this component.
	const {
		blockProps,
	} = props;

	// Get the properties of the block using this component.
	const {
		attributes,
		setAttributes,
	} = blockProps;

	// Get the attributes for handling the background data.
	const {
		schemaDataVideoShow,
		schemaJSON,
	} = attributes;

	// Setup states for date picker for uploadDate value.
	const [
		openDatePopup,
		setOpenDatePopup
	] = useState( false );

	const updateSchema = function( key, value ) {
		console.log( value );
		var newSchema = JSON.parse( JSON.stringify( schemaJSON ) );

		newSchema[key] = value;

		setAttributes( { schemaJSON: newSchema  } );
	}

	// Return the interface for the background component.
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Video Schema Data' ) }>
					<ToggleControl
						label={ __( 'Include Video Schema' ) }
						checked={ schemaDataVideoShow }
						onChange={ () => setAttributes( { schemaDataVideoShow: !schemaDataVideoShow } )	}
					/>
					{ schemaDataVideoShow && (
						<Fragment>
							<TextControl
								label={ __( 'Video Name' ) }
								value={ schemaJSON.name }
								onChange={ ( value ) => updateSchema( 'name', value ) }
							/>

							<TextareaControl
								label={ __( 'Description' ) }
								value={ schemaJSON.description }
								help={ __( 'Enter a description for the video') }
								onChange={ ( value ) => updateSchema( 'description', value ) }
							/>
							<Fragment>
								<BaseControl
									help="Enter the Upload Date of the video"
								>
									<BaseControl.VisualLabel>
										Upload Date
									</BaseControl.VisualLabel>
									<Button
										isLink={true}
										onClick={() => setOpenDatePopup( ! openDatePopup )}
									>
										{ schemaJSON.uploadDate ? schemaJSON.uploadDate : 'Set Date' }


										{ openDatePopup && (
											<Popover
												position="bottom right"
												onClickOutside={ () => setOpenDatePopup( ! openDatePopup ) }
												noArrow={ false }
												onClose={ setOpenDatePopup.bind( null, false )}
											>
												<DateTimePicker
													currentDate={ schemaJSON.uploadDate ? schemaJSON.uploadDate : new Date().toLocaleString() }
													onChange={ ( value ) => updateSchema( 'uploadDate', value ) }
													is12Hour={ true }
												/>
										</Popover>
										) }
									</Button>
									{ schemaJSON.uploadDate && (
										<Button
											isLink={true}
											onClick={() => updateSchema( 'uploadDate', '' ) }
										>Clear</Button>
									)}
								</BaseControl>
							</Fragment>

							<TextControl
								label={ __( 'Duration' ) }
								value={ schemaJSON.duration }
								onChange={ ( value ) => updateSchema( 'duration', value ) }
							/>
						</Fragment>
					) }
				</PanelBody>
			</InspectorControls>

			{ schemaDataVideoShow && (
				<SchemaDataVideoJSON
					json={ schemaJSON }
				/>
			) }
		</Fragment>
	);
}

// Export attributes for easy importing in blocks.
export {
	SchemaDataVideoAttributes,
	SchemaDataVideoJSON,
};

// Export the Schema Data Video Tools control panel.
export default SchemaDataVideoTools;
