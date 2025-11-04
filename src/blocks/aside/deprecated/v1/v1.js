// External dependencies.
import classnames from 'classnames';

// Internal dependencies.
import Edit from './edit.js';
import blockIcons from '../../../../components/block-icons/index.js';

// WordPress dependencies.
import {
	getColorClassName,
	InnerBlocks,
	useBlockProps,
} from '@wordpress/block-editor';

export const config = {
	attributes: {
		themeColor: {
			type: 'string',
		},
	},
    supports: {
		align: [ 'left', 'right' ],
	},
	icon: blockIcons( 'aside' ),
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	save( { attributes, className } ) {
		const { themeColor } = attributes;

		const classes = classnames( className, {
			[ getColorClassName( 'background', themeColor ) ]:
				getColorClassName( 'background', themeColor ),
		} );

		const blockProps = useBlockProps.save( {
			className: classes,
		} );

		return (
			<aside { ...blockProps }>
				<InnerBlocks.Content />
			</aside>
		);
	},
};
