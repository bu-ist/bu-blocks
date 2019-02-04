/**
 * The post chooser component attributes.
 */

const PostChooserAttributes = {
	postChooserPostID: {
		type: 'number',
	},
	postChooserPostURL: {
		type: 'string',
	},
	postChooserPostImages: {
		type: 'array',
	},
	postChooserPostImageID: {
		type: 'number',
	},
	postChooserPostImageURL: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'src',
	},
	postChooserPostImageAlt: {
		type: 'string',
		source: 'attribute',
		selector: 'img',
		attribute: 'alt',
	},
};

export default PostChooserAttributes;