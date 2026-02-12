# Pullquote Block

The BU Pullquote block provides a stylized pullquote that significantly expands on the WordPress core pullquote block. While originally designed for editorial content, it can be used across various content types and post formats.

### Enhanced Features
- **Background Media Support**: Add images or videos as background media with customizable opacity and focal point controls
- **Multiple Block Styles**: Three distinct visual styles (Default, Modern, Pop)
- **Photo Credits**: Built-in field for attributing background media
- **Advanced Media Controls**: 
  - Background image focal point selection (9-position grid)
  - Video background with autoplay option
  - Media opacity controls (0-100%)
  - Caption/alt text support
- **BU Color Themes**: Custom color theme system for brand consistency across editorial content
- **Wide/Full Alignment**: Extended alignment options for impactful layouts
- **Dynamic Rendering**: PHP-based template system allowing theme overrides


## Block Supports

### BU Blocks Color Themes
Custom color theme system originally part of the Editorial Project functionality. Provides predefined theme colors for brand consistency.

### Core WordPress Color Support
Standard WordPress color controls for text, background, links, and gradients:
```json
"color": {
    "text": true,
    "background": true,
    "link": true,
    "gradients": true
}
```

**Note:** Only one color system (BU Color Themes OR Core Color Support) should be used per theme. Both can be disabled via filters or theme.json.

### Other Supports
- **Alignment**: Full and wide alignment options
- **Anchor**: Custom HTML anchor IDs
- **HTML**: Disabled after conversion to a dynamic block template


## ToDo

### High Priority
- **Class Name Migration**: Implement custom Block Support for prefixed class names following the migration plan in `class-name-migration-plan.md`
  - Create `render-legacy.php` for backward compatibility
  - Add `__bublocks_prefixed_classes` support to block.json
  - Update Block Supports class to handle prefixed class detection
  - Document theme migration path

### Medium Priority
- **Accessibility Improvements**: 
  - Add ARIA labels for decorative elements
  - Ensure proper semantic HTML structure for screen readers
  - Test keyboard navigation within block settings
- **Video Background Optimization**:
  - Add poster image support for video backgrounds
  - Implement lazy loading for video media


### Low Priority
- **Gradient Background Support**: Consider extend background options to include gradients alongside images/video

## Changelog

### 2.0.0
 - Breaking Changes: 
   - None known at this time.
 - Added support for core `Color` Block Support
 - Added support for custom `__bublocks_colorthemes` Block Support
 - Refactor block structure to modernize