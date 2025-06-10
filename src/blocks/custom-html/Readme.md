# BU Custom HTML Block

This block provides a true custom HTML block. Unlike the core block from WordPress which run some validation on the entered markup, this block does not edit or modify the HTML you enter. 


## ToDo:
- Further improve how HTML is saved in post meta. Possibly replace apiFetch(). See: https://wordpress.stackexchange.com/questions/388822/using-apifetch-for-retrieving-post-data-in-gutenberg
- Or update the block to store the custom HTML in the attribute but as base64 encoded string. The goal would be to avoid any validation being run on the HTML by WordPress so we can continue to support invalid HTML for maximum flexibility. 
- Add syntax highlighting to the block. 

## Changelog

### 2.0.0
 - Breaking Changes: 
   - `bu_blocks_custom_html_attributes` Filter removed, existing themes/plugins will need a different method. BU Prepress will need an update: https://github.com/bu-ist/bu-prepress/blob/8f42214963733b36ea800c5d5aab9e90d4b25896/src/blocks/edition/custom-html/index.php#L10
 - Refactor block structure to modernize
   - Convert block from Static to Dynamic using render.php.