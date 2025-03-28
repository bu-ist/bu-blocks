# Blocks Library

This folder would contain any custom Blocks for the Block Editor as well as any
other block editor specific features such as sidebar plugins for the editor.

Each block is organized in it's own folder, and should contain it's JS code,
PHP, frontend styles, editor styles, and frontend JS

The wp-scripts config is changed to use `blocks` as the source directory
instead of the default of `src`. This is so that it is clearer when this
folder structure is placed in a larger theme or plugin that contains other
features such as page templates, custom post types, and theme or plugin styles.


## Stylesheets in the Blocks Folder

### blocks-bundled.scss

This stylesheet imports all of the block's base partials to create a single stylesheet
that contains all of the block's styles and can be enqueued when we want one stylesheet.
@wordpress/scripts is already creating individual block stylesheets in the
/blocks/block-name folders. It would be nice if we could have one structure that supports
either model so in the future we could support dynamic loading of block stylesheets when the
block is in use.

### blocks-common.scss

This stylesheet imports common partials that contains styles for shared common elements that
may be used in multiple blocks. This probably should be enqueued before the stylesheet for the
blocks themselves so that a block can override these shared common styles if needed.


### blocks-decorative.scss

This stylesheet imports decorative partials `block-decorative.scss` that contains the more
opinionated styles for each block. This compiled css file is thene enqueued on the frontend and
in the editor.
