/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/button/deprecated/deprecated.js":
/*!****************************************************!*\
  !*** ./src/blocks/button/deprecated/deprecated.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _v1_v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1/v1.js */ "./src/blocks/button/deprecated/v1/v1.js");
/* harmony import */ var _v2_v2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v2/v2.js */ "./src/blocks/button/deprecated/v2/v2.js");
// Import earlier versions of the block.


const deprecated = [_v2_v2_js__WEBPACK_IMPORTED_MODULE_1__.config, _v1_v1_js__WEBPACK_IMPORTED_MODULE_0__.config];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/blocks/button/deprecated/v1/v1.js":
/*!***********************************************!*\
  !*** ./src/blocks/button/deprecated/v1/v1.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* binding */ config; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_theme_options_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/theme-options.js */ "./src/global/theme-options.js");
/* harmony import */ var _global_allowed_formats_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../global/allowed-formats.js */ "./src/global/allowed-formats.js");
/* harmony import */ var _global_publication_slug_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../global/publication-slug.js */ "./src/global/publication-slug.js");

/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

// External dependencies.


// Internal dependencies.




// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  Button,
  Dashicon,
  G,
  IconButton,
  PanelBody,
  Path,
  RadioControl,
  SVG
} = wp.components;
const {
  Fragment
} = wp.element;
const {
  InspectorControls,
  PanelColorSettings,
  RichText,
  URLInput,
  withColors
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;

// The current publication owner.
const publication = (0,_global_publication_slug_js__WEBPACK_IMPORTED_MODULE_4__["default"])();

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className  Additional classes assigned to the block.
 * @param {string} themeColor The theme color assigned to the block.
 * @param {string} icon       The icon placement.
 */
const getClasses = (className, themeColor, icon) => classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-button', {
  [`${publication}-block-button`]: publication && publication !== '',
  [`has-${themeColor}-theme`]: themeColor,
  [`icon-navigateright ${icon}`]: icon,
  [className]: className
});
const config = {
  title: __('Button'),
  description: __('Prompt visitors to take action with a custom button.'),
  icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
    fill: "none",
    d: "M0 0h24v24H0V0z"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(G, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
    fill: "#c00",
    d: "M19 6H5L3 8v8l2 2h14l2-2V8l-2-2zm0 10H5V8h14v8z"
  }))),
  category: 'bu',
  attributes: {
    url: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'href'
    },
    title: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'title'
    },
    text: {
      type: 'string',
      source: 'html',
      selector: 'a'
    },
    themeColor: {
      type: 'string'
    },
    icon: {
      type: 'string'
    },
    className: {
      type: 'string'
    }
  },
  styles: [{
    name: 'default',
    label: __('Default'),
    isDefault: true
  }, {
    name: 'outline',
    label: __('Outline')
  }, {
    name: 'text',
    label: __('Text')
  }, {
    name: 'accent',
    label: __('Accent')
  }],
  supports: {
    className: false,
    customClassName: false,
    align: ['left', 'center', 'right']
  },
  edit: withColors('themeColor')(props => {
    const {
      attributes: {
        text,
        url,
        icon
      },
      themeColor,
      setThemeColor,
      setAttributes,
      isSelected,
      className
    } = props;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Color Settings'),
      colorSettings: [{
        value: themeColor.color,
        onChange: setThemeColor,
        label: __('Theme'),
        disableCustomColors: true,
        colors: (0,_global_theme_options_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
      }]
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Icon Settings')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
      label: "Placement",
      selected: icon,
      options: [{
        label: 'Before text',
        value: 'align-icon-left'
      }, {
        label: 'After text',
        value: 'align-icon-right'
      }],
      onChange: value => {
        setAttributes({
          icon: value
        });
      }
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      onClick: () => setAttributes({
        icon: undefined
      }),
      label: 'Clear icon settings',
      isDefault: true,
      isSmall: true
    }, __('Clear')))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      placeholder: __('Add text…'),
      value: text,
      onChange: value => setAttributes({
        text: value
      }),
      formattingControls: (0,_global_allowed_formats_js__WEBPACK_IMPORTED_MODULE_3__["default"])('formattingControls', ['bold', 'italic']),
      allowedFormats: (0,_global_allowed_formats_js__WEBPACK_IMPORTED_MODULE_3__["default"])('allowedFormats', ['core/bold', 'core/italic']),
      className: getClasses(className, themeColor.slug, icon),
      keepPlaceholderOnFocus: true
    })), isSelected && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
      className: "block-library-button__inline-link",
      onSubmit: event => event.preventDefault()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Dashicon, {
      icon: "admin-links"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLInput, {
      value: url,
      onChange: value => setAttributes({
        url: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      icon: "editor-break",
      label: __('Apply'),
      type: "submit"
    })));
  }),
  save({
    attributes
  }) {
    const {
      url,
      text,
      themeColor,
      icon,
      className
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "a",
      className: getClasses(className, themeColor, icon),
      href: url,
      value: text
    }));
  }
};

/***/ }),

/***/ "./src/blocks/button/deprecated/v2/v2.js":
/*!***********************************************!*\
  !*** ./src/blocks/button/deprecated/v2/v2.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: function() { return /* binding */ config; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_publication_slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../global/publication-slug */ "./src/global/publication-slug.js");
/* harmony import */ var _components_block_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/block-icons */ "./src/components/block-icons/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);

/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

// External dependencies.


// Internal dependencies.


//import Edit from './edit.js';

// WordPress dependencies.


// The current publication owner.
const publication = (0,_global_publication_slug__WEBPACK_IMPORTED_MODULE_2__["default"])();

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className  Additional classes assigned to the block.
 * @param {string} themeColor The theme color assigned to the block.
 * @param {string} icon       The icon placement.
 */
const getClasses = (className, themeColor, icon) => classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-button', 'wp-block-bu-button', {
  [`${publication}-block-button`]: publication && publication !== '',
  [`has-${themeColor}-theme`]: themeColor,
  [`icon-navigateright ${icon}`]: icon,
  [className]: className
});
const config = {
  attributes: {
    url: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'href'
    },
    title: {
      type: 'string',
      source: 'attribute',
      selector: 'a',
      attribute: 'title'
    },
    text: {
      type: 'string',
      source: 'html',
      selector: 'a'
    },
    themeColor: {
      type: 'string'
    },
    icon: {
      type: 'string'
    },
    className: {
      type: 'string'
    }
  },
  supports: {
    className: false,
    customClassName: false,
    align: ['left', 'center', 'right']
  },
  save({
    attributes
  }) {
    const {
      url,
      text,
      themeColor,
      icon,
      className
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps.save({
      className: getClasses(className, themeColor, icon)
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText.Content, {
      ...blockProps,
      tagName: "a",
      href: url,
      value: text
    }));
  }
};

/***/ }),

/***/ "./src/blocks/button/edit.js":
/*!***********************************!*\
  !*** ./src/blocks/button/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_theme_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/theme-options */ "./src/global/theme-options.js");
/* harmony import */ var _global_color_utils_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/color-utils.mjs */ "./src/global/color-utils.mjs");
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");
/* harmony import */ var _global_publication_slug__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/publication-slug */ "./src/global/publication-slug.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);

/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

// External dependencies.


// Internal dependencies.





// WordPress dependencies.




// The current publication owner.
const publication = (0,_global_publication_slug__WEBPACK_IMPORTED_MODULE_5__["default"])();

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className  Additional classes assigned to the block.
 * @param {string} themeColor The theme color assigned to the block.
 * @param {string} icon       The icon placement.
 */
const getClasses = (className, themeColor, icon) => classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-button', 'wp-block-bu-button', {
  [`${publication}-block-button`]: publication && publication !== '',
  [`has-${themeColor}-theme`]: themeColor,
  [`icon-navigateright ${icon}`]: icon,
  [className]: className
});
function Edit(props) {
  const {
    attributes: {
      text,
      url,
      icon,
      align,
      themeColor
    },
    setAttributes,
    className,
    name
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)({
    className: getClasses(className, themeColor, icon)
  });

  // themOptions() returns the full color palette added to editor settings.
  // Set the ThemeOptions() color Palette to a variable so we can clear
  // it if disabled by filter.
  let themeOptionsPalette = (0,_global_theme_options__WEBPACK_IMPORTED_MODULE_2__["default"])();

  // Get any block specific color themes palette set
  // in block.json `supports.__bublocks.colorthemes`
  themeOptionsPalette = (0,_global_color_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.getColorThemesSupportsByBlock)(name, themeOptionsPalette);

  // Create a color object from the palette for themeColor attribute
  //  to pass into the component.
  const themeColorObject = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.getColorObjectByAttributeValues)(themeOptionsPalette, themeColor);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Color Settings'),
    colorSettings: [{
      value: themeColorObject?.color,
      onChange: value => setAttributes({
        themeColor: value ? (0,_global_color_utils_mjs__WEBPACK_IMPORTED_MODULE_3__.getColorSlug)(value, themeOptionsPalette) : undefined
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Theme'),
      disableCustomColors: true,
      colors: themeOptionsPalette
    }]
  }, themeOptionsPalette?.length < 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelRow, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "No Color Palette available for this block."))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Icon Settings')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.RadioControl, {
    label: "Placement",
    selected: icon,
    options: [{
      label: 'Before text',
      value: 'align-icon-left'
    }, {
      label: 'After text',
      value: 'align-icon-right'
    }],
    onChange: value => {
      setAttributes({
        icon: value
      });
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Button, {
    onClick: () => setAttributes({
      icon: undefined
    }),
    label: 'Clear icon settings',
    isSecondary: true,
    isSmall: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Clear'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.PanelBody, {
    className: "components-panel__body-bu-button-block-url bu-blocks-button-block-url-input",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('URL')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "description"
  }, "Add link to the button"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.URLInput, {
    value: url,
    onChange: value => setAttributes({
      url: value
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.RichText, {
    ...blockProps,
    tagName: "div",
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Add text…'),
    value: text,
    onChange: value => setAttributes({
      text: value
    }),
    formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_4__["default"])('formattingControls', ['bold', 'italic']),
    allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_4__["default"])('allowedFormats', ['core/bold', 'core/italic']),
    keepPlaceholderOnFocus: true
  }));
}

/***/ }),

/***/ "./src/blocks/button/index.js":
/*!************************************!*\
  !*** ./src/blocks/button/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block.json */ "./src/blocks/button/block.json");
/* harmony import */ var _components_block_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/block-icons */ "./src/components/block-icons/index.js");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/button/edit.js");
/* harmony import */ var _deprecated_deprecated_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated/deprecated.js */ "./src/blocks/button/deprecated/deprecated.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/button/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/button/editor.scss");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

/**
 * Bring in values defined in block.json.
 */


// Internal dependencies.




//  Import CSS.



// WordPress dependencies.


// Register the block.
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_0__.name, {
  title: _block_json__WEBPACK_IMPORTED_MODULE_0__.title,
  icon: (0,_components_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"])('button'),
  /**
   * @see ./edit.js
   */
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: () => null,
  deprecated: _deprecated_deprecated_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/components/block-icons/index.js":
/*!*********************************************!*\
  !*** ./src/components/block-icons/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Component: blockIcons
 *
 * Returns a set of block icons for use in the Gutenberg UI
 *
 */

// WordPress dependencies.
const {
  Fragment
} = wp.element;

// Array of icon paths, the inner elements of the svg icon only.
// Default item in object is for fallback purposes.
const icons = {
  default: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#c00",
    d: "M19 7h-1V5h-4v2h-4V5H6v2H5c-1.1 0-2 .9-2 2v10h18V9c0-1.1-.9-2-2-2zm0 10H5V9h14v8z"
  })),
  aside: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M53.07 24.43H18.93c-.549 0-1 .451-1 1v20.523c0 .549.451 1 1 1h34.14c.549 0 1-.451 1-1V25.43c0-.549-.451-1-1-1zM26.904 39.252c0 .08 0 .14-.06.14h-5.858s-.06-.06-.06-.14v-1.14c0-.08 0-.14.06-.14h5.858s.06.06.06.14v1.14zm0-2.989c0 .08 0 .15-.06.15h-5.858s-.06-.07-.06-.15v-1.13c0-.08 0-.15.06-.15h5.858s.06.07.06.15v1.13zm0-2.998v.14h-5.948v-1.42h5.918v.14l.03 1.14zm24.192 10.751H29.985V27.409h21.111v16.607z",
    transform: "matrix(.66405 0 0 .66405 -11.906 -12.21)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M47.907 36.63H33.298a.171.171 0 01-.18-.15V35.3a.171.171 0 01.18-.15h14.609a.17.17 0 01.18.15v1.18a.17.17 0 01-.18.15z",
    transform: "matrix(.66405 0 0 .66405 -11.983 -12.306)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M47.907 39.69H33.298a.171.171 0 01-.18-.15v-1.18a.171.171 0 01.18-.15h14.609a.17.17 0 01.18.15v1.18a.17.17 0 01-.18.15z",
    transform: "matrix(.66405 0 0 .66405 -11.983 -12.36)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M47.987 33.74H33.218c-.05 0-.1-.06-.1-.14v-1.15c0-.08 0-.14.1-.14h14.769c.05 0 .1.06.1.14v1.15c0 .08-.05.14-.1.14z",
    transform: "matrix(.66405 0 0 .66405 -11.983 -12.44)"
  })),
  collapsible: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    d: "M2.704 10.524l2.489 4.982-2.112.288-2.427-4.859a1.007 1.007 0 01.033-.963L3.042 6.31l2.349-.006-2.687 4.22z",
    transform: "matrix(.9913 0 0 .9913 .014 2.663)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    d: "M2.708 10.533l2.356 4.516-1.985.506-2.425-4.62c-.156-.311-.14-.68.041-.977l2.399-4.276 1.982.626-2.368 4.225z",
    transform: "matrix(.9913 0 0 .9913 17.003 2.663)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    d: "M23.946 1.827H.073v5.272c0 .97.688 1.757 1.536 1.757h20.8c.848 0 1.537-.787 1.537-1.757V1.827zM2.585 4.701v1.282h18.848V4.701H2.585z",
    transform: "matrix(.79594 0 0 .69594 2.96 15.807)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "none",
    d: "M1.677 12.15l18.051-.024",
    transform: "matrix(.9913 0 0 .9913 .014 1.145)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    d: "M1.678 12.655l16.964-.024a.505.505 0 10-.002-1.008l-16.963.023a.503.503 0 10.001 1.009z",
    transform: "matrix(.9913 0 0 1.95234 .07 -10.66)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    fill: "#C90813"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.199 1.221A1.36 1.36 0 0020.84-.138H4.39a1.36 1.36 0 00-1.359 1.359v5.666h19.168V1.221zM6.547 2.789H4.499v1.095h2.048V2.789zm6.495 0H7.633v1.095h5.409V2.789zm4.593 2.779l2.091-2.881-4.152.012 2.061 2.869z",
    transform: "matrix(.9913 0 0 .9913 .014 2.137)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M22.199 1.221A1.36 1.36 0 0020.84-.138H4.39a1.36 1.36 0 00-1.359 1.359v5.666h19.168V1.221zM21.19 5.878V1.221a.35.35 0 00-.35-.351H4.39a.35.35 0 00-.35.351v.67a.997.997 0 01.459-.111h2.048c.2 0 .386.058.543.159a.997.997 0 01.543-.159h5.409c.558 0 1.009.452 1.009 1.009v1.095c0 .557-.451 1.009-1.009 1.009H7.633a.997.997 0 01-.543-.159.999.999 0 01-.543.159H4.499a.997.997 0 01-.459-.111v1.096h12.576l-1.862-2.59a1.01 1.01 0 01.817-1.597l4.152-.013a1.008 1.008 0 01.819 1.602l-1.886 2.598h2.534zm-3.555-.31l2.091-2.881-4.152.012 2.061 2.869zM6.547 2.789H4.499v1.095h2.048V2.789zm6.495 0H7.633v1.095h5.409V2.789z",
    transform: "matrix(.9913 0 0 .9913 .014 2.137)"
  }))),
  collapsiblecontrol: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M33.923 58.23h5.517v16.194h-5.517v5.647h-5.501v-5.647H23V58.23h5.422V30.639h5.501V58.23zm-8.289 2.685v10.839H36.65V60.915H25.634z",
    transform: "matrix(.4074 0 0 .4074 -8.496 -8.394) rotate(90 47.334 52.398) scale(.89256)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M33.923 58.23h5.517v16.194h-5.517v5.647h-5.501v-5.647H23V58.23h5.422V30.639h5.501V58.23zm-8.289 2.685v10.839H36.65V60.915H25.634z",
    transform: "matrix(.4074 0 0 .4074 -8.496 -8.394) rotate(90 30.162 69.57) scale(.89256)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M33.923 58.23h5.517v16.194h-5.517v5.647h-5.501v-5.647H23V58.23h5.422V30.639h5.501V58.23zm-8.289 2.685v10.839H36.65V60.915H25.634z",
    transform: "matrix(.4074 0 0 .4074 -8.496 -8.394) matrix(0 .89256 .89256 0 .916 22.24)"
  })),
  drawer: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    d: "M12.53 11.574l.711 1.421h-1.422l.711-1.421z",
    transform: "matrix(2.90833 0 0 1.41188 -24.448 -5.329)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M44.929 32.44H27.175a.13.13 0 01-.12-.13v-1.16l-.002-.02c0-.068.054-.126.122-.13h17.754a.13.13 0 01.12.13v1.18a.13.13 0 01-.12.13z",
    transform: "translate(-11.728 -11.386) scale(.65892)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M44.929 32.44H27.175a.13.13 0 01-.12-.13v-1.16l-.002-.02c0-.068.054-.126.122-.13h17.754a.13.13 0 01.12.13v1.18a.13.13 0 01-.12.13z",
    transform: "translate(-11.728 -13.38) scale(.65892)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M44.929 32.44H27.175a.13.13 0 01-.12-.13v-1.16l-.002-.02c0-.068.054-.126.122-.13h17.754a.13.13 0 01.12.13v1.18a.13.13 0 01-.12.13z",
    transform: "translate(-11.728 -15.424) scale(.65892)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M23.32 1.037H.667a.661.661 0 00-.659.658v20.647c0 .361.297.659.659.659H23.32a.662.662 0 00.659-.659V1.695a.661.661 0 00-.659-.658zm-2.402 19.981h-6.882c-.032 0-.054-.049-.054-.106v-.808c0-.057 0-.107.054-.107h6.882c.032 0 .054.05.054.107v.808c0 .057-.022.106-.054.106zm-9.171-.989H2.661s-.054 0-.062-.084a.182.182 0 010-.13l2.868-3.336a.049.049 0 01.039-.02c.015 0 .029.007.039.02l1.912 2.239 1.554-1.552c.02-.02.05-.02.07 0l2.666 2.649v.13c0 .056.031.084 0 .084zm9.171-1.005h-6.882c-.032 0-.054-.05-.054-.107v-.808c0-.057 0-.106.054-.106h6.882c.032 0 .054.049.054.106v.808c0 .057-.022.107-.054.107zm0-2.004h-6.882c-.032 0-.054-.05-.054-.107v-.808c0-.057 0-.106.054-.106h6.882c.032 0 .054.049.054.106v.808c0 .057-.022.107-.054.107zm1.109-4.021H1.973V2.997h20.054v10.002z"
  })),
  html: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M53.19 23.864H18.81c-.549 0-1 .451-1 1v22.255c0 .549.451 1 1 1h34.38c.549 0 1-.451 1-1V24.864c0-.549-.451-1-1-1zm-1.965 21.262H20.801V26.897h30.424v18.229z",
    transform: "translate(-11.734 -11.734) scale(.65929)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M.055-.226v-.049c0-.009.005-.017.015-.022L.432-.5c.005-.003.01-.002.015.001.005.004.008.01.008.018v.06C.455-.413.45-.406.44-.4l-.267.146C.171-.253.17-.252.17-.25s.001.003.003.004L.44-.1c.01.006.015.013.015.021v.06c0 .008-.002.014-.007.017C.442.001.437.002.432 0L.07-.204C.06-.209.055-.217.055-.226z",
    transform: "translate(2.72 15.411) scale(13.0482)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M.098-.016l.266-.679C.367-.705.373-.71.383-.71h.052c.007 0 .012.003.015.009.004.005.004.012.001.019l-.264.679C.184.007.177.012.166.012H.114A.02.02 0 01.098.004a.023.023 0 010-.02z",
    transform: "matrix(13.0482 0 0 9.8855 8.386 15.577)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M.095-.019v-.06C.095-.087.1-.094.11-.1l.267-.146c.005-.003.005-.005 0-.008L.11-.4C.1-.406.095-.413.095-.421v-.06c0-.008.003-.014.008-.018.005-.003.01-.004.015-.001l.362.203c.01.005.015.013.015.022v.049c0 .009-.005.017-.015.022L.118 0C.114.003.109.002.103-.001a.022.022 0 01-.008-.018z",
    transform: "translate(13.794 15.411) scale(13.0482)"
  }))),
  introparagraph: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M53.19 23.864H18.81c-.549 0-1 .451-1 1v22.255c0 .549.451 1 1 1h34.38c.549 0 1-.451 1-1V24.864c0-.549-.451-1-1-1zm-1.965 21.262H20.801V26.897h30.424v18.229z",
    transform: "translate(-11.734 -11.734) scale(.65929)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M29.84 36.28h-2.06l-.39 1.09h-1.24l2-5.34h1.38l2 5.34h-1.3l-.39-1.09zm-1.67-1.08h1.29l-.64-1.84-.65 1.84z",
    transform: "translate(-21.386 -22.287) scale(.97221)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M46 35.58H32.486a.17.17 0 01-.17-.15v-1.18a.17.17 0 01.17-.15H46a.17.17 0 01.17.15v1.18a.17.17 0 01-.17.15z",
    transform: "matrix(.7184 0 0 .65929 -13.183 -11.493)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M46 38.64H32.486a.17.17 0 01-.17-.15v-1.18a.17.17 0 01.17-.15H46a.17.17 0 01.17.15v1.18a.17.17 0 01-.17.15z",
    transform: "matrix(.7184 0 0 .65929 -13.183 -11.483)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M45.86 41.53H26.14c-.15 0-.27-.07-.27-.15V40.2c0-.08.12-.15.27-.15h19.72c.15 0 .27.07.27.15v1.18c0 .08-.13.15-.27.15z",
    transform: "matrix(.78492 0 0 .65929 -16.252 -11.388)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M46 32.69H32.416c-.06 0-.1-.06-.1-.14V31.4c0-.08 0-.14.1-.14H46c.06 0 .1.06.1.14v1.15c.03.08-.01.14-.1.14z",
    transform: "matrix(.7184 0 0 .65929 -13.183 -11.59)"
  })),
  listicle: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M46.826 41.08l.03-17.471-.03-.076c0-.222-.068-.58-.418-.729-.437-.186-1.253-.141-1.508-.141h1.7H23.552a.875.875 0 00-.87.87V45.9c0 .483.397.88.88.88H39.76c.704 1.631 2.318 2.793 4.095 2.793 2.447 0 4.46-2.014 4.46-4.46 0-1.723-.176-2.431-1.499-4.033h.01zm-7.335 2.875l-14.101.086V25.343H44V40.65h-.16c-2.437.011-3.85 1.629-4.349 3.325v-.02zM46 44.67h-.7l-.25.92h.7l-.19.68h-.7l-.19.69H44l.19-.69h-.93l-.19.69h-.7l.19-.69h-.7l.18-.68h.7l.25-.92h-.7l.19-.69h.7l.19-.69h.7l-.19.69h.94l.18-.69h.7l-.18.69h.7l-.22.69z",
    transform: "matrix(.70137 0 0 .70137 -12.86 -12.819)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M40.43 30.43h-9s-.07-.07-.07-.14v-1.15c0-.08 0-.14.07-.14h9s.07.06.07.14v1.15c0 .07-.03.14-.07.14z",
    transform: "matrix(.76098 0 0 1.40315 -14.824 -33.72)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M40.43 30.43h-9s-.07-.07-.07-.14v-1.15c0-.08 0-.14.07-.14h9s.07.06.07.14v1.15c0 .07-.03.14-.07.14z",
    transform: "matrix(.76098 0 0 1.40315 -14.824 -30.682)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M40.43 30.43h-9s-.07-.07-.07-.14v-1.15c0-.08 0-.14.07-.14h9s.07.06.07.14v1.15c0 .07-.03.14-.07.14z",
    transform: "matrix(.76098 0 0 1.40315 -14.824 -27.682)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M29.753 30.43H29a1.09 1.09 0 010-.14v-1.15a1.09 1.09 0 010-.14h.753a.818.818 0 010 .14v1.15a1.09 1.09 0 010 .14z",
    transform: "translate(-33.525 -33.475) scale(1.39576)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M29.753 30.43H29a1.09 1.09 0 010-.14v-1.15a1.09 1.09 0 010-.14h.753a.818.818 0 010 .14v1.15a1.09 1.09 0 010 .14z",
    transform: "translate(-33.525 -30.438) scale(1.39576)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M29.753 30.43H29a1.09 1.09 0 010-.14v-1.15a1.09 1.09 0 010-.14h.753a.818.818 0 010 .14v1.15a1.09 1.09 0 010 .14z",
    transform: "translate(-33.525 -27.438) scale(1.39576)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M43.45 45.59h.94l.25-.92h-.94l-.25.92z",
    transform: "matrix(.70137 0 0 .70137 -12.86 -12.819)"
  }))),
  modal: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M53.19 23.916H18.81c-.549 0-1 .451-1 1v28.385c0 .549.451 1 1 1h34.38c.549 0 1-.451 1-1V24.916c0-.549-.451-1-1-1zm-31.543 1.988c1.063 0 1.937.874 1.937 1.936a1.946 1.946 0 01-1.937 1.936 1.945 1.945 0 01-1.936-1.936c0-1.062.874-1.936 1.936-1.936zm29.67 25.398H20.814V31.52h30.503v19.782z",
    transform: "matrix(.65893 0 0 .65893 -11.74 -13.775)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M46.5 39.4H33.87l-.02.001a.15.15 0 01-.15-.15V38.07a.16.16 0 01.16-.15H46.5a.17.17 0 01.17.15v1.18a.16.16 0 01-.16.15h-.01z",
    transform: "matrix(.61639 0 0 .61639 -9.754 -12.36)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M46.5 39.4H33.87l-.02.001a.15.15 0 01-.15-.15V38.07a.16.16 0 01.16-.15H46.5a.17.17 0 01.17.15v1.18a.16.16 0 01-.16.15h-.01z",
    transform: "matrix(1.15771 0 0 .61639 -35.018 -6.373)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M46.5 42.46H33.87l-.02.001a.15.15 0 01-.15-.141v-1.18-.001a.15.15 0 01.15-.15l.02.001h12.64a.16.16 0 01.16.15v1.18a.16.16 0 01-.17.14z",
    transform: "matrix(.61639 0 0 .61639 -9.754 -12.25)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M46.57 36.52H33.8c-.06 0-.1-.07-.1-.15v-1.14c0-.08 0-.15.1-.15h12.77c.06 0 .1.07.1.15v1.14c0 .08-.04.15-.1.15z",
    transform: "matrix(.61639 0 0 .61639 -9.754 -12.587)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M46.57 36.52H33.8c-.06 0-.1-.07-.1-.15v-1.14c0-.08 0-.15.1-.15h12.77c.06 0 .1.07.1.15v1.14c0 .08-.04.15-.1.15z",
    transform: "matrix(1.15771 0 0 .61639 -35.018 -6.6)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M30.87 42.68h-6.6a.603.603 0 01-.6-.6v-6.61c0-.329.271-.6.6-.6h6.6c.329 0 .6.271.6.6v6.61c0 .329-.271.6-.6.6zm-5.721-6.394v4.875h5.121",
    transform: "matrix(.63676 0 0 .63676 -11.042 -13.222)"
  })),
  related: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M19.14 43.07h16.69v-2.83H22v-8.47h4.27v2.62l6.68-3.87-6.68-3.88v2.29h-7.1l-.03 14.14zM39.08 41.48l6.68 3.88v-2.29h7.1V28.93H36.17v2.84H50v8.47h-4.24v-2.63l-6.68 3.87z",
    transform: "translate(-13.621 -13.611) scale(.71105)"
  })),
  stat: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    d: "M11.726 6.382a.318.318 0 00-.301.318v5.456c0 .176.142.319.319.319h5.259a.32.32 0 00.318-.289 5.316 5.316 0 00-5.595-5.804zm1.037 1.553v3.174l2.669-.004c.002-.032.16.021.16-.029 0-.863-1.141-3.13-2.829-3.141z",
    transform: "translate(-4.386 -6.959) scale(1.4387)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    stroke: "#C90813",
    strokeWidth: "0.27",
    d: "M11.759 11.207l5.209.026s-.011 1.285-.022 1.345a4.999 4.999 0 01-4.916 4.104 4.997 4.997 0 01-4.995-4.995c0-2.661 2.095-4.866 4.718-5.015l.006 4.535z",
    transform: "translate(-7.345 -3.52) scale(1.47642)"
  }))),
  buniverse: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M53.78 24.16H19.39c-.549 0-1 .451-1 1v22.259c0 .549.451 1 1 1h34.39c.549 0 1-.451 1-1V25.16c0-.549-.451-1-1-1zm-1.973 21.261H21.394V27.21h30.413v18.211z",
    transform: "matrix(.65856 0 0 .65856 -12.098 -11.908)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M39.719 36.32l-6.111-3.565v7.09l6.111-3.525z",
    transform: "matrix(.97342 0 0 .97342 -23.102 -23.285)"
  })),
  headline: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M36 48.4c-6.802 0-12.4-5.598-12.4-12.4 0-6.802 5.598-12.4 12.4-12.4 6.802 0 12.4 5.598 12.4 12.4-.011 6.798-5.602 12.389-12.4 12.4zm0-22.314c-5.439 0-9.914 4.475-9.914 9.914s4.475 9.914 9.914 9.914 9.914-4.475 9.914-9.914-4.475-9.914-9.914-9.914z",
    transform: "matrix(.967 0 0 .967 -22.812 -22.812)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M.157 0h.329v-.08L.407-.097v-.5h.097l.033.127h.095L.623-.693H.02L.011-.47h.096l.032-.127h.097v.5L.157-.08V0z",
    transform: "matrix(12.4549 0 0 13.538 7.997 16.96)"
  })),
  photoessay: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M52.305 24.16H18.81c-.549 0-1 .451-1 1v21.68c0 .549.451 1 1 1h33.495c.549 0 1-.451 1-1V25.16c0-.549-.451-1-1-1zm-18.186 2.968v7.36H20.756v-7.36h13.363zm-13.363 10.38h13.363v7.41m16.282-.037H37.067l.009-17.753H50.4l.001 17.753z",
    transform: "matrix(.67517 0 0 .67517 -12.02 -12.31)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M49.106 37.477h-10s-.07 0-.08-.09a.21.21 0 010-.14l3.09-4.622a.06.06 0 01.09 0l2.2 3.442 1.71-1.67a.059.059 0 01.08 0l2.92 2.84a.215.215 0 010 .15c.06.05.03.09-.01.09z",
    transform: "matrix(.67517 0 0 .67517 -12.02 -12.31)"
  })),
  button: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M45.283 27.5H26.779c-4.33 0-7.85 3.81-7.85 8.5 0 4.69 3.52 8.5 7.85 8.5h18.504c4.33 0 7.85-3.81 7.85-8.5 0-4.69-3.52-8.5-7.85-8.5zm-5.493 6.89L36.28 38l-1.06 1a.253.253 0 01-.18.08.25.25 0 01-.17-.08l-2.66-2.65a.29.29 0 01-.07-.18.24.24 0 01.07-.17l1.07-1a.25.25 0 01.17-.08c.068.001.133.03.18.08L35 36.37 38.37 33a.253.253 0 01.18-.08.25.25 0 01.17.08l1.07 1a.281.281 0 01.07.17.289.289 0 01-.07.22z",
    transform: "translate(-13.32 -13.32) scale(.70331)"
  })),
  pullquote: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M33.25 36.3a1.605 1.605 0 01-1.35-1.63v-.034c0-.954.785-1.74 1.74-1.74.036 0 .073.002.11.004 1.24 0 2 1 2 2.41 0 2.08-1.38 3.61-3.89 3.79v-.7c1.42-.24 2.28-1 2.38-2.1h-.99zm4.46 0a1.605 1.605 0 01-1.35-1.63v-.022A1.758 1.758 0 0138.2 32.9c1.25 0 2 1 2 2.41 0 2.08-1.37 3.61-3.88 3.79v-.7c1.45-.24 2.28-1 2.41-2.1h-1.02z",
    transform: "translate(-29.48 -29.524) scale(1.15278)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M36 48.4c-6.802 0-12.4-5.598-12.4-12.4 0-6.802 5.598-12.4 12.4-12.4 6.802 0 12.4 5.598 12.4 12.4-.011 6.798-5.602 12.389-12.4 12.4zm0-21.879c-5.2 0-9.479 4.279-9.479 9.479 0 5.2 4.279 9.479 9.479 9.479 5.2 0 9.479-4.279 9.479-9.479 0-5.2-4.279-9.479-9.479-9.479z",
    transform: "matrix(.96695 0 0 .96695 -22.786 -22.835)"
  })),
  leadin: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M52.297 24.16H18.81c-.549 0-1 .451-1 1v21.68c0 .549.451 1 1 1h33.487c.548 0 1-.451 1-1V25.16c0-.549-.452-1-1-1zM35.553 44.889H20.775V27.094h14.778v17.795zm15.327-7.378H38.656s-.086 0-.098-.11a.264.264 0 010-.171l3.827-4.375a.073.073 0 01.11 0l2.657 2.937 2.084-2.035a.072.072 0 01.097 0l3.559 3.461a.262.262 0 010 .183c.073.061.037.11-.012.11z",
    transform: "matrix(.67528 0 0 .67528 -12.017 -12.301)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M30.455 37.467h-6.573c-.05 0-.292-.07-.292-.15v-.457c0-.08.202-.14.292-.14h6.573c.06 0 .435.06.435.14v.457c0 .08-.375.15-.435.15z",
    transform: "matrix(1.08994 0 0 1.35704 -22.73 -37.816)"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    fill: "#C90813",
    fillRule: "nonzero",
    d: "M30.505 35.28h-6.663s-.252-.06-.252-.14v-.399c0-.08.202-.15.252-.15h6.663s.385.07.385.15v.399c0 .08-.355.14-.385.14z",
    transform: "matrix(1.08994 0 0 1.3643 -22.686 -37.155)"
  }))
};

// Get the internal paths/shapes of the
// icon, else return default brick icon.
const getIcon = function (name) {
  if (icons[name]) {
    return icons[name];
  }
  return icons.default;
};

// exported component function for use
// in Blocks to retrieve an icon by name.
const blockIcons = function (name) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    fillRule: "evenodd",
    strokeLinejoin: "round",
    strokeMiterlimit: "2",
    clipRule: "evenodd",
    viewBox: "0 0 24 24"
  }, getIcon(name));
};

// Export the blockIcons function.
/* harmony default export */ __webpack_exports__["default"] = (blockIcons);

/***/ }),

/***/ "./src/global/allowed-formats.js":
/*!***************************************!*\
  !*** ./src/global/allowed-formats.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Provide the expected attribute value for a list of allowed
 * formatting controls.
 *
 * Before Gutenberg 6.2.0, the formatting controls on RichText elements
 * were controlled with the `formattingControls` attribute.
 *
 * In Gutenberg 6.2.0, the `allowedFormats` attribute was introduced that
 * performs the same function with slightly different expectations.
 *
 * React does not render attributes that have `false` set as a value, so the
 * pattern provided by `getAllowedFormats` handles both `allowedFormats` and
 * `formattingControls` and then sets one of them to `false` depending on which
 * environment is detected.
 *
 * As an example, the following attributes restrict formatting controls to bold
 * and italic, a common pattern throughout the BU Blocks plugin:
 *
 * 		<RichText
 * 			formattingControls={ getAllowedFormats( 'formattingControls', [ 'link' ] ) }
 * 			allowedFormats={ getAllowedFormats( 'allowedFormats', [ 'core/link' ] ) }
 * 		/>
 */

const getAllowedFormats = (type, allowedFormats) => {
  const supportsAllowedFormats = 'undefined' === typeof wp.blockEditor ? false : true;
  if ('allowedFormats' === type) {
    return supportsAllowedFormats ? allowedFormats : false;
  } else if ('formattingControls' === type) {
    return supportsAllowedFormats ? false : allowedFormats;
  }
  return allowedFormats;
};
/* harmony default export */ __webpack_exports__["default"] = (getAllowedFormats);

/***/ }),

/***/ "./src/global/publication-slug.js":
/*!****************************************!*\
  !*** ./src/global/publication-slug.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Component: publicationSlug
 *
 * Returns a filterable string representing the current content's publication.
 */

const {
  applyFilters
} = wp.hooks;

// Return the publication owner for a block if
// one is available in the DOM.
const publicationSlug = () => {
  const publication = document.getElementById('bu_publication_owner');
  let publicationSlug = 'bu-blocks';
  if (null !== publication) {
    publicationSlug = publication.value;
  }
  return applyFilters('buBlocks.global.publicationSlug', publicationSlug);
};
/* harmony default export */ __webpack_exports__["default"] = (publicationSlug);

/***/ }),

/***/ "./src/global/theme-options.js":
/*!*************************************!*\
  !*** ./src/global/theme-options.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _publication_slug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./publication-slug */ "./src/global/publication-slug.js");
/**
 * Adds an array of color objects to the editor or theme defaults,
 * and returns it for passing to the `colors` prop.
 */

// WordPress dependencies.

const {
  getEditorSettings
} = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/editor');
const {
  updateEditorSettings
} = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/editor');

// Populate selectors that were in core/editor until WordPress 5.2 and are
// now located in core/block-editor.
const {
  getSettings // Note that getSettings is _not_ available until WordPress 5.2 and will be undefined otherwise.
} = 'undefined' === typeof (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/block-editor') ? (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/editor') : (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.select)('core/block-editor');

// Populate actions that were in core/editor until WordPress 5.2 and are
// now located in core/block-editor.
const {
  updateSettings // Note that updateSettings is _not_ available until WordPress 5.2 and will be undefined otherwise.
} = 'undefined' === typeof (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/block-editor') ? (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/editor') : (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/block-editor');

const themeOptions = () => {
  let defaultColors;

  // Get the default colors as set by the block editor and in the theme
  // through `add_theme_support()`.
  //
  // getSettings is used in WordPress 5.2 and later.
  // getEditorSettings is used in WordPress 4.9 + Gutenberg.
  if ('undefined' === typeof getSettings) {
    defaultColors = getEditorSettings().colors;
  } else {
    defaultColors = getSettings().colors;
  }

  // Get default theme color options set by the active theme through the
  // `block_editor_settings` filter in PHP.
  const defaultThemes = getEditorSettings().buDefaultThemes;

  // Get publication specific color options set by the active theme through
  // the `block_editor_settings` filter in PHP.
  const publicationThemes = getEditorSettings().buPublicationThemes;

  // Retrieve the current publication from the DOM.
  const publication = (0,_publication_slug__WEBPACK_IMPORTED_MODULE_1__["default"])();

  // Populate the final `themeOptions` from the current publication, if the exist.
  // If not, use the default options.
  const themeOptions = publicationThemes && publicationThemes[publication] ? publicationThemes[publication] : defaultThemes;

  /**
   * Add custom color objects to the defaults if they haven't already been added.
   *
   * Gutenberg returns a complete color object only if it is found in colors,
   * otherwise only the the hex code is returned.
   *
   * @see https://github.com/WordPress/gutenberg/blob/master/packages/editor/src/components/colors/utils.js#L7.
   */
  if (themeOptions && !themeOptions.some(v => defaultColors.includes(v))) {
    const newColors = defaultColors.concat(themeOptions);

    // Update both the editor settings and general settings so that when a color
    // is chosen, the value is one of those expected by the component.
    updateEditorSettings({
      colors: newColors
    });

    // In WordPress 5.2 and alter, the settings should be updated outside of the
    // editor too, through updateSettings.
    if ('undefined' !== typeof updateSettings) {
      updateSettings({
        colors: newColors
      });
    }
  }

  // Return the array of custom color objects for passing to the `colors` prop.
  return themeOptions;
};
/* harmony default export */ __webpack_exports__["default"] = (themeOptions);

/***/ }),

/***/ "./src/blocks/button/editor.scss":
/*!***************************************!*\
  !*** ./src/blocks/button/editor.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/button/style.scss":
/*!**************************************!*\
  !*** ./src/blocks/button/style.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/global/color-utils.mjs":
/*!************************************!*\
  !*** ./src/global/color-utils.mjs ***!
  \************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getColorSlug: function() { return /* binding */ getColorSlug; },
/* harmony export */   getColorThemesSupportsByBlock: function() { return /* binding */ getColorThemesSupportsByBlock; }
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/**
 * Adds Color Utility functions.
 */




/**
 * When given a color it gets the Color Slug from the themeoptions() color
 * palette defined for the theme.
 *
 * @param {*}      color
 * @param {Object} palette palette object.
 * @return {string} The slug of the color.
 */
const getColorSlug = (color, palette) => {
  if (color) {
    const colorObject = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.getColorObjectByColorValue)(palette, color);
    if (colorObject.slug) {
      return colorObject.slug;
    }
  } else {
    console.error('Error: no color.slug value found in color object.'); // eslint-disable-line no-console
  }
  return undefined;
};

/**
 * Get ColorThemes setting from the block's Supports array in block.json
 * and override the site-wide color palette set in the theme. 
 * @param {*} name 
 * @param {*} palette
 * @returns
 */
const getColorThemesSupportsByBlock = (name, palette) => {
  const hasThemOptionsColorThemesSupport = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.hasBlockSupport)(name, '__bublocks.colorthemes');
  console.log("existing palette:", palette);
  if (hasThemOptionsColorThemesSupport) {
    const BlockColorThemesPalette = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.getBlockSupport)(name, '__bublocks.colorthemes');
    console.log(BlockColorThemesPalette);
    if (Array.isArray(BlockColorThemesPalette)) {
      palette = BlockColorThemesPalette;
    }
  }
  return palette;
};

/***/ }),

/***/ "./src/blocks/button/block.json":
/*!**************************************!*\
  !*** ./src/blocks/button/block.json ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/wp/5.8/block.json","apiVersion":2,"name":"bu/button","version":"0.0.3","title":"Button","description":"Prompt visitors to take action with a custom button.","category":"bu","icon":"block-default","textdomain":"bu-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","viewStyle":"file:./style.css","render":"file:./render.php","attributes":{"url":{"type":"string"},"text":{"type":"string"},"themeColor":{"type":"string"},"icon":{"type":"string"}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"outline","label":"Outline"},{"name":"text","label":"Text"},{"name":"accent","label":"Accent"}],"supports":{"align":true,"anchor":true,"spacing":{"margin":true,"padding":true},"color":true,"__bublocks":{"colorthemes":[]}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks/button/index": 0,
/******/ 			"blocks/button/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbu_blocks"] = self["webpackChunkbu_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["blocks/button/style-index"], function() { return __webpack_require__("./src/blocks/button/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map