/**
 * The post chooser component attributes.
 */

const PostChooserAttributes = {
	postChooserPostID: {
		type: 'number',
	},
	postChooserPostImages: {
		type: 'string',
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