# Collapsible Control Block

Toggle Collapsible blocks on the page

## Block Supports: 


## ToDo:
- Update frontend.js with view.js and change how it is enqueued to use new plugin-starter setup

## Changelog

### 2.0.0
- Refactor block structure to modernize
 - Move Attributes from static markup locations to default (html comment)
 - Add Deprecations for the attribute changes.
- Convert block from Static to Dynamic using render.php.
  - Add `src/blocks/collapsible-control/deprecated/deprecated.php`  function using DOMDocument to parse old block instances to scrape attributes out of the saved markup of existing static blocks. This is called in Render.php but could/should be moved to child themes that need it such as r-editorial, law, cfa, etc. 