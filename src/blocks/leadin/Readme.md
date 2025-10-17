# Leadin Block

The Leadin block is primarily intended for use on Editorial stories in BU Prepress or possibly on standard News Posts. It is only able to be inserted once and generally should be the first block on the page. It supports multiple layouts and media options including photos and videos. 

## Block Supports: 
By default the block supports BU Blocks Color Themes. (Part of the original Editorial Project functionality). We've also added support for Core WordPress Color Block Supports. Only one of these should be used in a theme. There are methods available to disable either or both. 

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
   - None known at this time.
 - Added support for core `Color` Block Support
 - Added support for custom `__bublocks_colorthemes` Block Support
 - Refactor block structure to modernize