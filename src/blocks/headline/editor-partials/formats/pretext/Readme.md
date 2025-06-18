# Pretext Format (`editorial/pretext`)

A custom RichText format for the BU Headline block. This format wraps selected text in a `<span>` with the class `wp-block-editorial-headline-pretext`, allowing you to style pre-headline text such as "Chapter 1:" or similar prefixes.

## Features

- Adds a toolbar button and keyboard shortcut (Alt + A) to apply the format.
- Only available in blocks that include `'editorial/pretext'` in their `allowedFormats`.
- Uses an SVG icon for visual distinction in the editor toolbar.
- Output is semantic and easy to target with CSS.

## Usage

1. **Registration:**  
   Ensure this format is registered by importing the file in your block's `edit.js`:
   ```js
   import './editor-partials/formats/pretext';
   ```
2. **Enable in RichText:**  
   Add `'editorial/pretext'` to the `allowedFormats` array of your RichText component:
   ```js
   <RichText
     allowedFormats={[
       'editorial/pretext',
       // ...other formats
     ]}
     // ...other props
   />
   ```
3. **Applying the Format:**  
   - Select text in the RichText field.
   - Click the Pretext button in the toolbar or use the shortcut (Alt + A) to apply.

## Example Output

```html
<!-- Example 1: Basic usage in a headline -->
<h2 class="wp-block-editorial-headline">
  <span class="wp-block-editorial-headline-pretext">Chapter 1:</span>
  Introduction to Research
</h2>

<!-- Example 2: With other formats -->
<h3 class="wp-block-editorial-headline">
  <span class="wp-block-editorial-headline-pretext">Section:</span>
  <strong>Methods</strong>
</h3>

<!-- Example 3: Multiple formatted spans -->
<h4 class="wp-block-editorial-headline">
  <span class="wp-block-editorial-headline-pretext">Part A:</span>
  Data Collection
  <span class="wp-block-editorial-headline-posttext">(2025)</span>
</h4>
```

## Styling Example

Add custom CSS to style your pretext:

```css
.wp-block-editorial-headline-pretext {
  color: #b80000;
  font-weight: bold;
  margin-right: 0.5em;
  text-transform: uppercase;
}
```

## Developer Notes

- The format is only available in blocks that include it in `allowedFormats`.
- The output is always a `<span>` with the class `wp-block-editorial-headline-pretext`.
- You can combine this format with others (e.g., bold, italic) for more complex headline structures.
- To add a similar "posttext" format, see the `editorial/posttext` format implementation.

---