# Pullquote Block Class Name Migration Plan

This is a possible solution, details written up by Claude. 

## Problem Statement

The pullquote block currently uses unprefixed class names (`container-lockup`, `container-text`, `caption`, etc.) that are too generic and could conflict with other styles. We need to migrate to prefixed class names (e.g., `wp-block-bu-pullquote-container-text`) while maintaining backward compatibility with existing sites that have custom theme styling targeting the old class names.

**Constraints:**
- Plugin is used on dozens of sites with custom themes
- Each theme has CSS targeting the unprefixed class names
- Cannot require coordinated updates across all sites
- Cannot break existing content when plugin updates

## Unprefixed Classes to Migrate

1. `container-lockup` → `wp-block-bu-pullquote-container-lockup`
2. `container-icon-outer` → `wp-block-bu-pullquote-container-icon-outer`
3. `container-icon-inner` → `wp-block-bu-pullquote-container-icon-inner`
4. `container-text` → `wp-block-bu-pullquote-container-text`
5. `quote-sizing` → `wp-block-bu-pullquote-quote-sizing`
6. `caption` → `wp-block-bu-pullquote-caption`

Note: `wp-component-media-credit` is intentionally prefixed as a shared component class.

## Recommended Solution: Custom Block Support

Use WordPress Block Supports API (following existing patterns in this codebase for color/spacing supports).

### Implementation Steps

#### 1. Add Custom Support to block.json

File: `src/blocks/pullquote/block.json`

```json
{
  "supports": {
    "align": ["full", "wide"],
    "anchor": true,
    "color": { /* ... */ },
    "__bublocks_colorthemes": true,
    "__bublocks_prefixed_classes": true
  }
}
```

**Default:** `true` (prefixed classes enabled by default for new themes)

#### 2. Create Two Render Templates

**File: `src/blocks/pullquote/render.php`**
- Uses prefixed class names
- For themes that support modern class names

**File: `src/blocks/pullquote/render-legacy.php`**
- Uses unprefixed class names (copy of current render.php)
- For backward compatibility with existing themes

#### 3. Extend Block Supports Class

File: `includes/blocks/class-block-supports.php`

Add method to `BlockSupports` class:

```php
public function setup() {
    // Existing filters...
    $colors_enabled = apply_filters( 'bu_blocks_supports_color', true );
    $spacing_enabled = apply_filters( 'bu_blocks_supports_spacing', true );
    
    // New: Allow themes to disable prefixed classes
    $prefixed_classes = apply_filters( 'bu_blocks_supports_prefixed_classes', true );
    
    if ( false === $prefixed_classes ) {
        add_filter( 'block_type_metadata', array( $this, 'remove_prefixed_classes_support' ) );
    }
}

public function remove_prefixed_classes_support( $metadata ) {
    $registered_block_names = bu_blocks_get_registered_block_names();
    
    if ( ! isset( $metadata['name'] ) || ! in_array( $metadata['name'], $registered_block_names, true ) ) {
        return $metadata;
    }
    
    if ( isset( $metadata['supports']['__bublocks_prefixed_classes'] ) ) {
        $metadata['supports']['__bublocks_prefixed_classes'] = false;
    }
    
    return $metadata;
}
```

#### 4. Update Render Callback

File: `includes/blocks/class-blocks.php`

Modify the render_callback to check block support:

```php
$block_options['render_callback'] = function ( $attributes, $content, $block ) use ( $block_folder_name ) {
    ob_start();
    
    // Check if block supports prefixed classes
    $block_type = WP_Block_Type_Registry::get_instance()->get_registered( 'bu/pullquote' );
    $use_prefixed = isset( $block_type->supports['__bublocks_prefixed_classes'] ) 
        && $block_type->supports['__bublocks_prefixed_classes'];
    
    // Choose template based on support
    $template = $use_prefixed ? 'render.php' : 'render-legacy.php';
    
    // Check for theme override first
    $theme_override = get_stylesheet_directory() . '/block-render/' . $block_folder_name . '.php';
    
    if ( file_exists( $theme_override ) ) {
        include $theme_override;
    } else {
        include __DIR__ . '/' . $block_folder_name . '/' . $template;
    }
    
    return ob_get_clean();
};
```

### Theme Migration Path

#### For Existing Themes (Immediate - Upon Plugin Update)

Themes must opt-out of prefixed classes using one of these methods:

**Option A: Via theme.json** (Recommended for modern themes)

```json
{
  "$schema": "https://schemas.wp.org/wp/6.0/theme.json",
  "version": 2,
  "settings": {
    "blocks": {
      "bu/pullquote": {
        "supports": {
          "__bublocks_prefixed_classes": false
        }
      }
    }
  }
}
```

**Option B: Via Filter** (For themes without theme.json)

In theme's `functions.php`:

```php
// Disable prefixed classes for all BU Blocks
add_filter( 'bu_blocks_supports_prefixed_classes', '__return_false' );
```

**Option C: Block-Level Disable** (Granular control)

```php
add_filter( 'block_type_metadata', function( $metadata ) {
    if ( $metadata['name'] === 'bu/pullquote' ) {
        $metadata['supports']['__bublocks_prefixed_classes'] = false;
    }
    return $metadata;
} );
```

#### For Theme Updates (Later - When Theme CSS is Updated)

1. Update theme CSS to target new prefixed selectors:
   ```scss
   // Old (remove or keep for transition)
   .container-text {
       display: flex;
   }
   
   // New (add)
   .wp-block-bu-pullquote-container-text {
       display: flex;
   }
   ```

2. Remove the opt-out from theme.json or functions.php

3. All blocks immediately render with prefixed classes

#### For New Themes

- Do nothing - prefixed classes are enabled by default
- Style using prefixed selectors from the start

### Advantages of This Approach

✅ **Zero Breaking Changes** - Existing sites work without modification  
✅ **Theme Control** - Each theme migrates on its own schedule  
✅ **Progressive Enhancement** - New themes get best practices by default  
✅ **Follows Existing Patterns** - Uses same Block Supports system as color/spacing  
✅ **Standard WordPress API** - Uses official Block Supports mechanism  
✅ **Block-Level Granularity** - Can be controlled per-block or globally  
✅ **Clean Markup** - No dual-class bloat  
✅ **Future Proof** - Easy to extend for other blocks

### Alternative Approaches Considered

#### Option A: Dual-Class Output
Output both old and new classes simultaneously: `class="container-text wp-block-bu-pullquote-container-text"`

**Pros:** Zero coordination, works with all themes immediately  
**Cons:** HTML bloat (~180 bytes per block), permanent unless deprecated later. Themes would need to be updated to take advantage and then eventually remove this from the plugin. New themes may continue using the old class names for new code. 

#### Option C: Per-Block Version Attribute
Store `blockVersion` attribute on each block instance.

**Pros:** Automatic detection per block  
**Cons:** Locks blocks permanently to version - prevents theme CSS updates without bulk block updates

#### Option I: Theme Support Declaration
Use `add_theme_support('bu-blocks-prefixed-classes')` instead of Block Supports.

**Pros:** Simpler than custom Block Support  
**Cons:** Doesn't follow existing patterns, no theme.json integration. Can't be set per block.

**Decision:** Option J (Custom Block Support) chosen for consistency with existing codebase patterns and maximum flexibility.

### Documentation Requirements

1. **Plugin Changelog** - Document new support and migration path
2. **Block README** - Update `src/blocks/pullquote/Readme.md` with class name changes
3. **Theme Migration Guide** - Create guide for theme developers with:
   - List of old → new class names
   - How to opt-out using theme.json or filter
   - Example CSS migration patterns
4. **Communication** - Notify theme maintainers before release

### Testing Checklist

- [ ] Block renders correctly with prefixed classes enabled
- [ ] Block renders correctly with prefixed classes disabled (legacy mode)
- [ ] Theme override in `/block-render/pullquote.php` still works
- [ ] Filter `bu_blocks_supports_prefixed_classes` works globally
- [ ] theme.json per-block disable works
- [ ] Existing v1 static blocks continue working
- [ ] Plugin CSS uses prefixed selectors
- [ ] Visual regression tests pass for both modes

### Future Considerations

1. **Apply to Other Blocks** - Leadin block also has unprefixed `container-lockup`
2. **Deprecation Timeline** - Consider deprecating legacy template in 2+ years when theme adoption is high
3. **CSS Variables** - Consider using CSS custom properties for theme customization points
4. **Documentation Site** - Maintain list of prefixed class names for all blocks