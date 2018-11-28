/**
 * The background component attributes.
 */

const BackgroundAttributes = {
	backgroundId: {
		type: 'number',
	},
	backgroundType: {
		type: 'string',
	},
	backgroundUrl: {
		type: 'string',
	},
	backgroundOpacity: {
		type: 'number',
		default: 100,
	},
	backgroundAlt: {
		type: 'string',
	},
};

export default BackgroundAttributes;