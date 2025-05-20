# Button Block

The button block provides an `<a>` element for creating styled buttons in page content. Previous version of the block wrapped this in a `<p>` tag but that has been removed in the latest version. 

## Block Supports: 
By default the block supports both BU Blocks Color Themes. (Part of the original Editorial Project functionality). We've also added support for Core WordPress Color Block Support and core Spacing Block Support. Only one of these color options should be used in a theme. There are methods available to disable either or both. 

Theme.json can be used to control the core color block support settings globally or on an individual block basis. These are the default settings from block.json: 
```
"color": {
    "text": true,
    "background": true,
    "link": true,
    "gradients": true
},
```

## Changelog

### 2.0.0
 - Remove old and incorrect `wp-block-button` class. This is a breaking change for themes. 
 - Refactor block structure to modernize
 - Convert block from Static to Dynamic using render.php.
 - Add Block Supports: Colors, Spacing, and Color Themes
   - Added support for custom `__bublocks_colorthemes` Block Support
  - Breaking changes?: 
    - Rename classnames of styles from `.wp-block-button` to correct `.wp-block-bu-button`
    - Remove wrapping `<p>` tag the previous version of the block had
    - Move Attributes from static markup locations to default (html comment)
    - Add Deprecations for the markup and attribute changes.
  - Convert block to Dynamic Block
    - Add `src/blocks/button/deprecated/deprecated.php`  function using DOMDocument to parse old block instances to scrape attributes out of the saved markup of existing static blocks. This is called in Render.php but could/should be moved to child themes that need it such as r-editorial, law, cfa, etc. 