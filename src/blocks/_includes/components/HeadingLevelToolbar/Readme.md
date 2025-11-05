# HeadingLevelToolbar

A React component for selecting heading levels (H1–H6) in a rich text editor or block editor interface.

## Features

- Displays a toolbar with buttons for each heading level.
- Allows users to select or change the heading level of text.
- Can be integrated with block-based editors (e.g., WordPress Gutenberg).

## Usage

```jsx
import HeadingLevelToolbar from './HeadingLevelToolbar';

<HeadingLevelToolbar
    value={currentLevel}
    onChange={setLevel}
/>
```

### Props

| Name      | Type     | Required | Description                                  |
|-----------|----------|----------|----------------------------------------------|
| `value`   | number   | Yes      | The current heading level (1–6).             |
| `onChange`| function | Yes      | Callback when a heading level is selected.   |
| `disabled`| boolean  | No       | Disables the toolbar if set to `true`.       |
| `levels`  | array    | No       | Array of heading levels to display (default: `[1,2,3,4,5,6]`). |

## Example

```jsx
const [level, setLevel] = useState(2);

<HeadingLevelToolbar
    value={level}
    onChange={setLevel}
    levels={[2,3,4]} // Optional: limit to H2–H4
/>
```
