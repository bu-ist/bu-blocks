# Posttext Format (`editorial/posttext`)

A custom RichText format for the BU Headline block. This format wraps selected text in a `<span>` with the class `wp-block-editorial-headline-posttext`, allowing you to style post-headline text such as "(2025)" or similar suffixes.

## Features

- Adds a toolbar button and keyboard shortcut (Alt + B) to apply the format.
- Only available in blocks that include `'editorial/posttext'` in their `allowedFormats`.
- Uses an SVG icon for visual distinction in the editor toolbar.
- Output is semantic and easy to target with CSS.

## Usage

1. **Registration:**  
   Ensure this format is registered by importing the file in your block's `edit.js`:
   ```js
   import './editor-partials/formats/posttext';
   ```
2. **Enable in RichText:**  
   Add `'editorial/posttext'` to the `allowedFormats` array of your RichText component:
   ```js
   <RichText
     allowedFormats={[
       'editorial/posttext',
       // ...other formats
     ]}
     // ...other props
   />
   ```
3. **Applying the Format:**  
   - Select text in the RichText field.
   - Click the Posttext button in the toolbar or use the shortcut (Alt + B) to apply.

## Example Output

```html
<!-- Example 1: Basic usage in a headline -->
<h2 class="wp-block-editorial-headline">
  Welcome to Boston University
  <span class="wp-block-editorial-headline-posttext">(2025)</span>
</h2>

<!-- Example 2: With other formats -->
<h3 class="wp-block-editorial-headline">
  <span class="wp-block-editorial-headline-pretext">Section:</span>
  <strong>Methods</strong>
  <span class="wp-block-editorial-headline-posttext">[Advanced]</span>
</h3>

<!-- Example 3: Multiple formatted spans -->
<h4 class="wp-block-editorial-headline">
  <span class="wp-block-editorial-headline-pretext">Part A:</span>
  Data Collection
  <span class="wp-block-editorial-headline-posttext">(2025)</span>
</h4>
```

## Styling Example

Add custom CSS to style your posttext:

```css
.wp-block-editorial-headline-posttext {
  color: #0055a4;
  font-style: italic;
  margin-left: 0.5em;
  font-size: 0.95em;
}
```

## Developer Notes

- The format is only available in blocks that include it in `allowedFormats`.
- The output is always a `<span>` with the class `wp-block-editorial-headline-posttext`.
- You can combine this format with others (e.g., bold, italic) for more complex headline structures.
- To add a similar "pretext" format, see the `editorial/pretext` format implementation.