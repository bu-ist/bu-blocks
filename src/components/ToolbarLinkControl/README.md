# ToolbarLinkControl

Renders a link control component for Gutenberg blocks. A link control provides a standardized UI for adding, editing, and removing links from blocks, including toolbar buttons and keyboard shortcuts.

```jsx
import { ToolbarLinkControl } from '../components/ToolbarLinkControl/ToolbarLinkControl';

export default function Edit({ attributes, setAttributes, isSelected }) {
    return (
        <>
            <ToolbarLinkControl
                isSelected={isSelected}
                value={attributes.link} // Object: { url: '', opensInNewTab: false }
                onChange={(newLink) => setAttributes({ link: newLink })}
            />
            {/* Your block content */}
        </>
    );
}
```

## Block Attributes

Your block should define a link attribute that matches the expected structure:

```js
attributes: {
    link: {
        type: 'object',
        default: {
            url: '',
            title: '', // Optional
            opensInNewTab: false // Optional, disable with custom Settings array.
        }
    }
}
```


## Props

### `isSelected`

- Type: `boolean`
- Required: Yes

Whether the block is currently selected. Controls when the toolbar buttons and keyboard shortcuts are active. Component returns `null` if this prop is `undefined`.

Typically the best practice is to destructure and pass the block's `isSelected` to the component.

### `value`

- Type: `Object`
- Required: No
- Default: `{ url: '', opensInNewTab: false }`

Current link value. A link `value` is composed of the following properties:

- `url` (`string`): Link URL.
- `title` (`string`, optional): Link title. Automatically populated when user selects from suggestions. Example: The Title of the Post. Use this as link or button text if desired. 
- `opensInNewTab` (`boolean`, optional): Whether link should open in a new browser tab. Defaults to `false`.


### `onChange`

- Type: `Function`
- Required: No
- Default: `() => {}`

Value change handler, called with the updated value when the user adds, edits, or removes a link.

```jsx
<ToolbarLinkControl
    value={{ url: 'https://example.com', title: 'Example Site', opensInNewTab: true }}
    onChange={(nextValue) => {
        // nextValue is an object: { url: string, title?: string, opensInNewTab?: boolean }
        console.log(`The selected item: ${nextValue.title} (${nextValue.url})`);
        setAttributes({ link: nextValue });
    }}
/>
```

### `showSuggestions`

LinkControl property

- Type: `boolean`
- Required: No
- Default: `true`

Whether to present suggestions when typing the URL.

### `showInitialSuggestions`

LinkControl property

- Type: `boolean`
- Required: No
- Default: `true`

Whether to present initial suggestions immediately when the LinkControl opens.

### `settings`

LinkControl property

- Type: `Array`
- Required: No
- Default: WordPress LinkControl defaults

An array of settings objects associated with a link (for example: a setting to determine whether or not the link opens in a new tab). Each object will be used to render a `ToggleControl` for that setting.

To disable settings, pass in an empty array:

```jsx
<ToolbarLinkControl settings={[]} />
```

### `anchorRef`

Popover property

- Type: `Object`
- Required: No

A ref object used for positioning the LinkControl popover relative to the block. Without this the Popover position won't be properly attached to the block.

```jsx
import { useRef } from '@wordpress/element';
import { useBlockProps } from '@wordpress/block-editor';

export default function Edit({ attributes, setAttributes, isSelected }) {
    const blockRef = useRef();
    const blockProps = useBlockProps({
        ref: blockRef
    });

    return (
        <div {...blockProps}>
            <ToolbarLinkControl
                isSelected={isSelected}
                value={attributes.link}
                onChange={(link) => setAttributes({ link })}
                anchorRef={blockRef}
                position="bottom left"
            />
            {/* Your block content */}
        </div>
    );
}
```

### `position`

Popover property

- Type: `string`
- Required: No
- Default: `'bottom center'`

Controls the position of the LinkControl popover relative to the anchor.

### `noArrow`

Popover property

- Type: `boolean`
- Required: No

Whether to hide the popover arrow.

### `getAnchorRect`

Popover property

- Type: `Function`
- Required: No

Custom function to determine the anchor rectangle for popover positioning. This can serve as an alternative to anchorRef to control the popover position. See Popover component for documentation and examples. 

## Keyboard Shortcuts

The component automatically registers keyboard shortcuts when the block is selected:

- **Cmd/Ctrl + K** - Start editing link (if no link exists) or edit existing link
- **Cmd/Ctrl + Shift + K** - Remove link (if link exists)

Shortcuts are only active when `isSelected` is `true` to prevent conflicts with other blocks.

## Best Practices

#### Working with Existing Separate Attributes

If you're retrofitting an existing block that has separate attributes for URL and link properties, you can build the required object:

```js
// Existing block attributes (common in legacy blocks)
attributes: {
    url: {
        type: 'string',
        default: ''
    },
    linkTarget: {
        type: 'string',
        default: ''
    }
}
```

```jsx
// In your edit component - build the object from separate attributes
export default function Edit({ attributes, setAttributes, isSelected }) {
    const { url, linkTarget } = attributes;

    // Build link object for ToolbarLinkControl (converts string to boolean)
    const linkValue = {
        url: url || '',
        opensInNewTab: linkTarget === '_blank' // Convert string attribute to boolean
    };

    // Handle changes by updating separate attributes (converts boolean back to string)
    const handleLinkChange = (newLink) => {
        setAttributes({
            url: newLink.url || '',
            linkTarget: newLink.opensInNewTab ? '_blank' : '' // Convert boolean back to string attribute
        });
    };

    return (
        <>
            <ToolbarLinkControl
                isSelected={isSelected}
                value={linkValue}
                onChange={handleLinkChange}
            />
            {/* Your block content */}
        </>
    );
}
```

### Requirements

Always pass the block's `isSelected` prop to ensure the component behaves correctly:

```jsx
// In your block's edit component
<ToolbarLinkControl
    isSelected={isSelected}
    value={attributes.link} // Must be object: { url: string, opensInNewTab?: boolean }
    onChange={(link) => setAttributes({ link })}
/>
```

### Custom Settings

The component uses WordPress LinkControl's default settings when no custom `settings` prop is provided. You can override these defaults by passing a custom settings array.

Each settings object creates a ToggleControl below the URL field. The value object returned from the component will contain a true/false value for each setting based on what the user has set.

To add custom link settings (like `nofollow` attributes):

```jsx
<ToolbarLinkControl
    settings={[
        {
            id: 'opensInNewTab',
            title: 'Open in new tab'
        },
        {
            id: 'nofollow',
            title: 'Add nofollow'
        }
    ]}
/>
```

**Note:** When you provide custom settings, you completely override the defaults. Include `opensInNewTab` if you want to maintain that functionality alongside your custom settings.