/**
 * Block editor only scripts.
 *
 * @package
 */

import { registerBlockCollection } from '@wordpress/blocks';

// Register Block Collection for `bu` prefix in existing block names.
registerBlockCollection( 'bu', {
	title: 'BU: Blocks',
} );

// Register Block Collection for `editorial` prefix in existing block names.
registerBlockCollection( 'editorial', {
	title: 'BU: Editorial Blocks',
} );
