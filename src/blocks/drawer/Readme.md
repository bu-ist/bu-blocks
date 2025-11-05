# Drawer Block

This block provides an expandable container wrapped in an `<aside>` element. Use this block to show more detailed content related to the main page. Useful for biographies, sub-articles within a larger article such as a detailed explainer about some research study. 

The opening teaser supports a photo, title, short paragraph and a button that opens the drawer. The drawer element using an InnerBlocks component to allow child blocks to be entered.

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
   - none
 - Added support for core `Color` Block Support
 - Added support for custom `__bublocks_colorthemes` Block Support
 - Added anchor support
 - Expanded default alignment support
 - Refactor block structure to modernize
 - Convert block from Static to Dynamic using render.php.