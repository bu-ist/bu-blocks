# Aside Block

The aside block provides an `<aside>` element for use with content that is semantically "aside" from the content it is placed within. For instance some sidebar related to a news post, but not part of the main text of the post. 

## Block Supports: 
By default the block supports both BU Blocks Color Themes. (Part of the original Editorial Project functionality). We've also added support for Core WordPress Color Block Supports. Only one of these should be used in a theme. There are methods available to disable either or both. 

Theme.json can be used to control the core color block support settings globally or on an individual block basis. These are the default settings from block.json: 
```
"color": {
    "text": true,
    "background": true,
    "link": true,
    "gradients": true
},
```
## ToDo:

## Changelog

### 2.0.0
 - Breaking Changes: 
   - Removed Text-Align: Center from block's default styles.
 - Added support for core `Color` Block Support
 - Added support for custom `__bublocks_colorthemes` Block Support
 - Refactor block structure to modernize
 - Convert block from Static to Dynamic using render.php.