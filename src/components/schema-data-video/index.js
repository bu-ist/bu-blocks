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
} = wp.element;
const {
	PanelBody,
	ToggleControl,
	TextControl,
	TextareaControl,
} = wp.components;
const {
	InspectorControls,
} = ( 'undefined' === typeof wp.blockEditor ) ? wp.editor : wp.blockEditor;

// Schema Data attributes.
const SchemaDataVideoAttributes = {
	schemaDataVideoDisabled: {
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
		source: 'text',
		selector: '.wp-blocks-components-schema-data-video-tools'
	},
	schemaJSON: {
		type: 'object',
		default: {
			"@context": "http://schema.org",
			"@type": "VideoObject",
			"name": "test",
			"description": "",
			"thumbnailUrl": [],
			"uploadDate": "",
			"duration": "",
			"contentUrl": "",
			"embedUrl": "",
			"director": "",
			"productionCompany": "",
			"keywords": ""
		},
		source: 'text',
		selector: 'script'
	}
};

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
		schemaDataVideoDisabled,
		videoName,
		videoDescription,
		schemaJSON,
	} = attributes;

	const updateSchema = function( key, value ) {
		console.log( schemaJSON[key] );
		var newSchema = JSON.parse( JSON.stringify( schemaJSON ) );
		newSchema[key] = value;
		console.log( newSchema[key] )

		setAttributes( { schemaJSON: newSchema } );
	}

	// function get_schema( videoName, videoDescription, thumbnails, uploadDate, duration, contentUrl, embedUrl, director, productionCompany, keywords ) {
	// 	return {
	// 		"@context": "http://schema.org",
	// 		"@type": "VideoObject",
	// 		"name": "Drone Footage Captures Deserted Boston University Campus During Coronavirus Pandemic",
	// 		"description": "On April 23, 2020, when Boston University’s Campus would normally have been buzzing with activity, it was an alternate universe. This drone footage, shot that day, shows an eerily quiet landscape, vividly capturing the impact of the coronavirus pandemic on the BU campus.",
	// 		"thumbnailUrl": [
	// 				"https://www.bu.edu/files/2020/05/20-1225-DRONE-024-1-1.jpg",
	// 				"https://www.bu.edu/files/2020/05/4x3-20-1225-DRONE-024.jpg",
	// 				"https://www.bu.edu/files/2020/05/16x9-20-1225-DRONE-024.jpg"
	// 				],
	// 		"uploadDate": "2020-05-12T12:30:00",
	// 		"duration": "PT2M45S",
	// 		"contentUrl": "https://www.youtube.com/watch?v=6kRtbn_bNNU",
	// 		"embedUrl": "https://www.bu.edu/buniverse/interface/embed/embed.html?v=2EFp6m2Eo",
	// 		"director": "Above Summit and Chris Palmer",
	// 		"productionCompany": "Boston University",
	// 		"keywords": "drone footage, drone video, drone videos, 4k drone footage, 4k video, 4k videos, aerial video, aerial videos, aerial footage, boston university campus, bu campus, covid-19, covid-19 pandemic, coronavirus,coronavirus pandemic, boston drone videos, higher education, higher education videos, college campus, college campuses, college campus videos, boston university, charles river campus, above summit, bu productions"
	// 	}
	// }

	// Return the interface for the background component.
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Schema Data Options' ) }>
					<ToggleControl
						label={ __( 'Disable Schema Data' ) }
						checked={ schemaDataVideoDisabled }
						onChange={ () => setAttributes( { schemaDataVideoDisabled: !schemaDataVideoDisabled } ) }
					/>
					<TextControl
						label={ __( 'Video Name' ) }
						value={ schemaJSON.name }
						onChange={ ( value) => updateSchema( 'name', value ) }
						//onChange={ ( value ) => setAttributes( { schemaJSON: { ...schemaJSON, [name]: value } } ) }
					/>
					<TextareaControl
						label={ __( 'Description' ) }
						value={ videoDescription }
						help={ __( 'Enter a description for the video') }
						onChange={ ( value ) => setAttributes( { videoDescription: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			{ console.log( schemaJSON ) }
			{ ! schemaDataVideoDisabled && (
				<script className="wp-blocks-components-schema-data-video-tools" type="application/ld+json">
					{/* <a href="#" className="icon-action">{ __( 'Share this' ) }</a> */}
					{ JSON.stringify( schemaJSON ) }

				</script>
			) }
		</Fragment>
	);
}

// Export attributes for easy importing in blocks.
export {
	SchemaDataVideoAttributes,
};

// Export the Schema Data Video Tools control panel.
export default SchemaDataVideoTools;
