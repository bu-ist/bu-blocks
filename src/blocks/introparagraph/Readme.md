# Introparagraph Block

The Intro Paragraph block provides a specialized block that gives editors several layout options for the opening paragraph of their article. The block allows for a variety of dropcap styles, but also two column paragraph style layouts. The block also supports a list style article summary to explain the key points of the following text. 

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
 - Add support for core `Color` Block Support
 - Add support for custom `__bublocks_colorthemes` Block Support
 - Clean up and reorganize the InspectorControls into an `editor-partials` subfolder.


## Changelog

### 2.0.0
 - Breaking Changes: 
   - none known
 - Refactor block structure to modernize
 - Convert block from Static to Dynamic using render.php.