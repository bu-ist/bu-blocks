# Collapsible Block

The collapsible block provides an accordian element for creating collapsing content blocks.

## Block Supports: 
By default the block supports Core WordPress Color Block Support. 

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
- Migrate frontend.js to use the new viewScript setup
- Consider removing the is-style-preview layout if it's usage is limited in production. 
  - Only 3 instances of this were found in Production and all were in wpdocs sites. This should be removed.

## Changelog

### 2.0.0
- Refactor block to modernize structure
  - Add support for Block Supports: Color
  - Use Heading Level Toolbar component shared with other blocks.
  - Breaking Changes: 
    - Icon for +/- and up/down switched from BU Default Icons font to SVG markup to remove dependency on Responsive Foundation's icons. Existing themes will need to update.