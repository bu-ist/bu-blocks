/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks.js":
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _blocks_aside_aside_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/aside/aside.js */ "./src/blocks/aside/aside.js");
/* harmony import */ var _blocks_buniverse_buniverse_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/buniverse/buniverse.js */ "./src/blocks/buniverse/buniverse.js");
/* harmony import */ var _blocks_button_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/button/button.js */ "./src/blocks/button/button.js");
/* harmony import */ var _blocks_clicktotweet_clicktotweet_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/clicktotweet/clicktotweet.js */ "./src/blocks/clicktotweet/clicktotweet.js");
/* harmony import */ var _blocks_collapsible_control_collapsible_control_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/collapsible-control/collapsible-control.js */ "./src/blocks/collapsible-control/collapsible-control.js");
/* harmony import */ var _blocks_collapsible_collapsible_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/collapsible/collapsible.js */ "./src/blocks/collapsible/collapsible.js");
/* harmony import */ var _blocks_custom_html_custom_html_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/custom-html/custom-html.js */ "./src/blocks/custom-html/custom-html.js");
/* harmony import */ var _blocks_drawer_drawer_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/drawer/drawer.js */ "./src/blocks/drawer/drawer.js");
/* harmony import */ var _blocks_headline_headline_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/headline/headline.js */ "./src/blocks/headline/headline.js");
/* harmony import */ var _blocks_introparagraph_introparagraph_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/introparagraph/introparagraph.js */ "./src/blocks/introparagraph/introparagraph.js");
/* harmony import */ var _blocks_leadin_leadin_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/leadin/leadin.js */ "./src/blocks/leadin/leadin.js");
/* harmony import */ var _blocks_listicle_listicle_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/listicle/listicle.js */ "./src/blocks/listicle/listicle.js");
/* harmony import */ var _blocks_modal_modal_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/modal/modal.js */ "./src/blocks/modal/modal.js");
/* harmony import */ var _blocks_photoessay_photoessay_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/photoessay/photoessay.js */ "./src/blocks/photoessay/photoessay.js");
/* harmony import */ var _blocks_pullquote_pullquote_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/pullquote/pullquote.js */ "./src/blocks/pullquote/pullquote.js");
/* harmony import */ var _blocks_relatedstories_relatedstories_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/relatedstories/relatedstories.js */ "./src/blocks/relatedstories/relatedstories.js");
/* harmony import */ var _blocks_stat_stats_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/stat/stats.js */ "./src/blocks/stat/stats.js");
/* harmony import */ var _components_paragraph_caption_style_paragraph_caption_style_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/paragraph-caption-style/paragraph-caption-style.js */ "./src/components/paragraph-caption-style/paragraph-caption-style.js");
/* harmony import */ var _components_paragraph_end_of_article_style_paragraph_end_of_article_style_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/paragraph-end-of-article-style/paragraph-end-of-article-style.js */ "./src/components/paragraph-end-of-article-style/paragraph-end-of-article-style.js");
/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */





 // no longer twitter














// Add the 'Caption' style to the core paragraph block.



/***/ }),

/***/ "./src/blocks/aside/aside.js":
/*!***********************************!*\
  !*** ./src/blocks/aside/aside.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/aside/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/aside/editor.scss");
/* harmony import */ var _global_register_block_preset_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/register-block-preset.js */ "./src/global/register-block-preset.js");
/* harmony import */ var _components_block_icons___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/block-icons/ */ "./src/components/block-icons/index.js");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/aside/edit.js");

/**
 * BLOCK: bu-aside-cgb
 *
 * A container for related information that accepts image,
 * headline, paragraph, and button blocks as children.
 */

// External dependencies.


// Import CSS.



// Internal dependencies.



// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  getColorClassName,
  InnerBlocks,
  useBlockProps
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;

// Internal dependencies.


// Register the block.
const asideBlock = registerBlockType('editorial/aside', {
  apiVersion: 2,
  title: __('Aside'),
  description: __('Add an aside with related information. Accepts image, headline, paragraph, and button blocks as children.'),
  icon: (0,_components_block_icons___WEBPACK_IMPORTED_MODULE_5__["default"])('aside'),
  category: 'bu-editorial',
  supports: {
    align: ['left', 'right']
  },
  attributes: {
    themeColor: {
      type: 'string'
    }
  },
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  save({
    attributes,
    className
  }) {
    const {
      themeColor
    } = attributes;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
      [getColorClassName('background', themeColor)]: getColorClassName('background', themeColor)
    });
    const blockProps = useBlockProps.save({
      className: classes
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null));
  }
});
const presetTemplate = [['core/image'], ['core/heading', {
  placeholder: 'Enter aside title…'
}], ['core/paragraph', {
  placeholder: 'Enter aside content…'
}], ['core/button']];
(0,_global_register_block_preset_js__WEBPACK_IMPORTED_MODULE_4__["default"])(asideBlock, presetTemplate);

/***/ }),

/***/ "./src/blocks/aside/edit.js":
/*!**********************************!*\
  !*** ./src/blocks/aside/edit.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_theme_options_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/theme-options.js */ "./src/global/theme-options.js");
/* harmony import */ var _components_allowed_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/allowed-blocks */ "./src/components/allowed-blocks/index.js");

/**
 * Edit function for the aside block.
 */

// External dependencies.


// Internal dependencies.



// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  Component,
  Fragment
} = wp.element;
const {
  compose
} = wp.compose;
const {
  InnerBlocks,
  InspectorControls,
  PanelColorSettings,
  withColors,
  useBlockProps
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const BUAsideEdit = props => {
  const {
    attributes,
    className,
    themeColor,
    setThemeColor,
    presetTemplate
  } = props;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    [`has-${themeColor.slug}-background`]: themeColor.slug
  });
  const blockProps = useBlockProps({
    className: classes
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
    title: __('Color Settings'),
    colorSettings: [{
      value: themeColor.color,
      onChange: setThemeColor,
      label: __('Theme'),
      disableCustomColors: true,
      colors: (0,_global_theme_options_js__WEBPACK_IMPORTED_MODULE_2__["default"])()
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
    allowedBlocks: (0,_components_allowed_blocks__WEBPACK_IMPORTED_MODULE_3__["default"])(),
    template: presetTemplate
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('themeColor')])(BUAsideEdit));

/***/ }),

/***/ "./src/blocks/buniverse/buniverse.js":
/*!*******************************************!*\
  !*** ./src/blocks/buniverse/buniverse.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");
/* harmony import */ var _components_block_icons___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/block-icons/ */ "./src/components/block-icons/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/buniverse/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/buniverse/editor.scss");

/**
 * BLOCK: bu/buniverse
 *
 * Register a BUniverse embed block with Gutenberg.
 */

// External dependencies.


// Internal dependencies.



//  Import CSS.



// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  Fragment
} = wp.element;
const {
  PanelBody,
  Path,
  RadioControl,
  SVG,
  TextControl,
  ToggleControl
} = wp.components;
const {
  InspectorControls,
  RichText,
  useBlockProps
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className     Default classes assigned to the block.
 * @param {string} stylizedTitle If the block has a stylized title.
 * @param          aspectRatio
 */
const getClasses = (className, aspectRatio) => {
  return classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-global-buniverse', {
    [aspectRatio]: aspectRatio,
    [className]: className
  });
};

// Register the block.
registerBlockType('bu/buniverse', {
  apiVersion: 2,
  title: __('BUniverse Video'),
  description: __('Insert videos from bu.edu/buniverse. BUniverse videos allow for a high resolution cover image and better control over Youtube embeds.'),
  icon: (0,_components_block_icons___WEBPACK_IMPORTED_MODULE_3__["default"])('buniverse'),
  category: 'bu',
  attributes: {
    id: {
      type: 'string'
    },
    aspectRatio: {
      type: 'string'
    },
    caption: {
      type: 'string'
    },
    controls: {
      type: 'number',
      default: 1
    },
    autoplay: {
      type: 'number',
      default: 0
    },
    start: {
      type: 'number'
    },
    minutes: {
      type: 'number'
    },
    seconds: {
      type: 'number'
    },
    className: {
      type: 'string',
      default: ''
    }
  },
  supports: {
    align: true
  },
  edit(props) {
    const {
      attributes: {
        id,
        aspectRatio,
        caption,
        controls,
        autoplay,
        minutes,
        seconds
      },
      className,
      isSelected,
      setAttributes
    } = props;
    const blockProps = useBlockProps({
      className: getClasses(className, aspectRatio)
    });

    /**
     * Sets the value for the `minutes` attribute and
     * calculates a new value to set for the `start` attribute.
     *
     * Note: no calculations are done to account for values
     * greater than 60 entered into the `seconds` input, so
     * as to avoid subverting expectations in cases where a
     * user might deliberately do so.
     *
     * @param {string} value The value entered into the input.
     */
    const onChangeMinutes = value => {
      const newValue = Number(value);
      const newStart = newValue * 60 + (seconds ? seconds : 0);
      setAttributes({
        minutes: newValue
      });
      setAttributes({
        start: newStart
      });
    };

    /**
     * Sets the value for the `seconds` attribute and
     * calculates a new value to set for the `start` attribute.
     *
     * Note: See the above note about calculating `seconds` values.
     *
     * @param {string} value The value entered into the input.
     */
    const onChangeSeconds = value => {
      const newValue = Number(value);
      const newStart = newValue + (minutes ? minutes * 60 : 0);
      setAttributes({
        seconds: newValue
      });
      setAttributes({
        start: newStart
      });
    };

    // Build out the basic url, intentionally leaving off the extra parameters
    // because they cause the iframe to reload every time they're changed.
    const url = `//www.bu.edu/buniverse/interface/embed/embed.html?v=${id}&jsapi=1`;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Video Settings')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Video ID:'),
      className: "buniverse-set-video-id",
      value: id,
      onChange: value => setAttributes({
        id: value
      }),
      help: __('Enter the ID portion of a BUniverse video URL.')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
      className: "buniverse-aspect-ratio-options",
      label: __('Aspect Ratio'),
      selected: aspectRatio,
      help: __('16:9 is typically used on widescreen video. 4:3 is often used for older fullscreen video. 1:1 is square. 9:16 and 3:4 are used for vertical video.'),
      options: [{
        label: '16:9',
        value: 'has-aspectratio-16by9'
      }, {
        label: '4:3',
        value: 'has-aspectratio-4by3'
      }, {
        label: '1:1',
        value: 'has-aspectratio-1by1'
      }, {
        label: '3:4',
        value: 'has-aspectratio-3by4'
      }, {
        label: '9:16',
        value: 'has-aspectratio-9by16'
      }],
      onChange: option => setAttributes({
        aspectRatio: option
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "buniverse-parameter-toggles"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Hide Player Controls'),
      checked: controls === 0,
      onChange: () => setAttributes({
        controls: controls === 0 ? 1 : 0
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Auto Start (muted)'),
      checked: autoplay === 1,
      onChange: () => setAttributes({
        autoplay: autoplay === 0 ? 1 : 0
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "buniverse-start-time"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Start At'),
      type: "number",
      value: minutes,
      onChange: onChangeMinutes
    }), ":", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      type: "number",
      value: seconds,
      onChange: onChangeSeconds
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-global-buniverse-wrapper"
    }, !id && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-global-buinverse-placeholder"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "buniverse-logo"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      placeholder: __('Enter BUniverse video ID here…'),
      value: id,
      onChange: value => setAttributes({
        id: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "buniverse-video-id-screenshot"
    })), id && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
      src: url,
      frameBorder: "0",
      allow: "autoplay; fullscreen"
    })), (!RichText.isEmpty(caption) || isSelected) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      className: "wp-block-global-buniverse-caption wp-prepress-component-caption",
      placeholder: __('Add a caption and/or media credit…'),
      value: caption,
      onChange: value => setAttributes({
        caption: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_2__["default"])('formattingControls', ['bold', 'italic', 'link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_2__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link']),
      keepPlaceholderOnFocus: true
    }))));
  },
  save({
    attributes
  }) {
    const {
      id,
      aspectRatio,
      caption,
      controls,
      autoplay,
      start,
      className
    } = attributes;
    const blockProps = useBlockProps.save({
      className: getClasses(className, aspectRatio)
    });

    // Build out the full url.
    let url = `//www.bu.edu/buniverse/interface/embed/embed.html?v=${id}&jsapi=1`;
    url += controls !== 1 ? '&controls=0' : '';
    url += autoplay === 1 ? '&autoplay=true' : '';
    url += start ? `&start=${start}` : '';
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-global-buniverse-wrapper"
    }, id && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
      src: encodeURI(url),
      frameBorder: "0",
      allow: "autoplay; fullscreen"
    })), caption && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "wp-block-global-buniverse-caption wp-prepress-component-caption"
    }, caption)));
  }
});

/***/ }),

/***/ "./src/blocks/button/button.js":
/*!*************************************!*\
  !*** ./src/blocks/button/button.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_theme_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/theme-options */ "./src/global/theme-options.js");
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");
/* harmony import */ var _global_publication_slug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/publication-slug */ "./src/global/publication-slug.js");
/* harmony import */ var _components_block_icons___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/block-icons/ */ "./src/components/block-icons/index.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/button/deprecated.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/button/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/button/editor.scss");

/**
 * BLOCK: bu-button
 *
 * Prompt visitors to take action with a custom button.
 */

// External dependencies.


// Internal dependencies.






//  Import CSS.



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
  withColors,
  useBlockProps
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;

// The current publication owner.
const publication = (0,_global_publication_slug__WEBPACK_IMPORTED_MODULE_4__["default"])();

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

// Register the block.
registerBlockType('bu/button', {
  apiVersion: 2,
  title: __('Button'),
  description: __('Prompt visitors to take action with a custom button.'),
  icon: (0,_components_block_icons___WEBPACK_IMPORTED_MODULE_5__["default"])('button'),
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
        icon,
        align
      },
      themeColor,
      setThemeColor,
      setAttributes,
      isSelected,
      className
    } = props;
    const blockProps = useBlockProps({
      className: getClasses(className, themeColor.slug, icon)
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Color Settings'),
      colorSettings: [{
        value: themeColor.color,
        onChange: setThemeColor,
        label: __('Theme'),
        disableCustomColors: true,
        colors: (0,_global_theme_options__WEBPACK_IMPORTED_MODULE_2__["default"])()
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
    }, __('Clear'))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      className: "components-panel__body-bu-button-block-url bu-blocks-button-block-url-input",
      title: __('URL')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "description"
    }, "Add link to the button"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLInput, {
      value: url,
      onChange: value => setAttributes({
        url: value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: `wp-block-bu-button-container ${align ? '' : 'wp-block'}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      ...blockProps,
      tagName: "div",
      placeholder: __('Add text…'),
      value: text,
      onChange: value => setAttributes({
        text: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_3__["default"])('formattingControls', ['bold', 'italic']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_3__["default"])('allowedFormats', ['core/bold', 'core/italic']),
      keepPlaceholderOnFocus: true
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
    const blockProps = useBlockProps.save({
      className: getClasses(className, themeColor, icon)
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      ...blockProps,
      tagName: "a",
      href: url,
      value: text
    }));
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./src/blocks/button/deprecated.js":
/*!*****************************************!*\
  !*** ./src/blocks/button/deprecated.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_theme_options_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/theme-options.js */ "./src/global/theme-options.js");
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");
/* harmony import */ var _global_publication_slug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/publication-slug */ "./src/global/publication-slug.js");

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
const publication = (0,_global_publication_slug__WEBPACK_IMPORTED_MODULE_4__["default"])();

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
const deprecated = [{
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
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_3__["default"])('formattingControls', ['bold', 'italic']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_3__["default"])('allowedFormats', ['core/bold', 'core/italic']),
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
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/blocks/clicktotweet/clicktotweet.js":
/*!*************************************************!*\
  !*** ./src/blocks/clicktotweet/clicktotweet.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/clicktotweet/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/clicktotweet/editor.scss");

/**
 * BLOCK: bu/clicktotweet
 *
 * Registers a Click to Tweet block.
 */

// External dependencies.


// Import CSS.



// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  withSelect
} = wp.data;
const {
  compose,
  ifCondition
} = wp.compose;
const {
  registerFormatType,
  toggleFormat
} = wp.richText;
const {
  RichTextShortcut,
  RichTextToolbarButton
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  createHigherOrderComponent
} = wp.compose;
const {
  addFilter
} = wp.hooks;

// Define the format name.
const name = 'bu/clicktotweet-highlight';

// Define the opening markup for Click to Tweet content.
const clickToTweetContainer = '<span class="wp-block-bu-clicktotweet-content">';

// Define the opening markup for highlighted Click to Tweet text.
const clickToTweetHighlight = '<span class="wp-block-bu-clicktotweet-highlight">';

// Registers the 'Click to Tweet highlight' format.
registerFormatType(name, {
  title: __('Click to Tweet'),
  tagName: 'span',
  className: 'wp-block-bu-clicktotweet-highlight',
  edit: compose(withSelect(select => {
    const getSelectedBlock = 'undefined' === typeof select('core/block-editor') ? select('core/editor').getSelectedBlock : select('core/block-editor').getSelectedBlock;
    return {
      selectedBlock: getSelectedBlock()
    };
  }), ifCondition(props => {
    return props.selectedBlock && props.selectedBlock.name === 'core/paragraph';
  }))(props => {
    const {
      isActive,
      onChange,
      selectedBlock,
      value
    } = props;
    const {
      clickToTweet,
      content
    } = selectedBlock.attributes;

    // Set up a boolean for displaying the format button as active.
    const active = isActive || clickToTweet && !content.includes(clickToTweetHighlight);
    const onToggle = () => {
      // A super hacky way to fake `setAttributes` for `clickToTweet`in this context.
      // If it's `true` and the format is being removed from text or the entire block
      // is being toggled back off, we switch it to `false`.
      // In all other cases, we switch it to `true`.
      if (clickToTweet && (isActive || !isActive && content.includes(clickToTweetContainer))) {
        props.selectedBlock.attributes.clickToTweet = false;
      } else {
        props.selectedBlock.attributes.clickToTweet = true;
      }

      // Handle the toggling of the Click to Tweet Highlight format.
      onChange(toggleFormat(value, {
        type: name
      }));
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichTextShortcut, {
      character: "b",
      onUse: onToggle,
      type: "access"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichTextToolbarButton, {
      icon: "twitter",
      isActive: active,
      onClick: onToggle,
      shortcutCharacter: "b",
      shortcutType: "access",
      title: __('Click to Tweet')
    }));
  })
});

/**
 * Adds the `clickToTweet` attribute to the paragraph block.
 *
 * @param {Object} settings The block settings.
 * @param {string} name     The block name.
 */
const registerClickToTweetAttributes = (settings, name) => {
  if ('core/paragraph' !== name) {
    return settings;
  }
  const clickToTweetAttributes = {
    clickToTweet: {
      type: 'boolean',
      default: false
    }
  };
  settings.attributes = Object.assign(settings.attributes, clickToTweetAttributes);
  return settings;
};
addFilter('blocks.registerBlockType', 'bu-blocks/click-to-tweet-paragraph', registerClickToTweetAttributes);

/**
 * Toggle the block `content` and `className` attributes when the
 * Click to Tweet format is applied.
 */
const registerFields = createHigherOrderComponent(BlockEdit => {
  return props => {
    if ('core/paragraph' !== props.name) {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
        ...props
      });
    }
    const {
      attributes: {
        className,
        clickToTweet,
        content
      },
      setAttributes
    } = props;
    if (clickToTweet && content && !content.includes(clickToTweetContainer)) {
      const wrappedContent = `<span class="wp-block-bu-clicktotweet-content">${content}</span>`;
      // Build the new value for the `className` property.
      const wrappedClassName = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'wp-block-bu-clicktotweet', {
        'has-format-highlight': content.includes(clickToTweetHighlight)
      });
      setAttributes({
        className: wrappedClassName,
        content: wrappedContent
      });
    }
    if (clickToTweet && content) {
      if (content.includes(clickToTweetHighlight) && className && !className.includes('has-format-highlight')) {
        setAttributes({
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'has-format-highlight')
        });
      }
      if (!content.includes(clickToTweetHighlight) && className && className.includes('has-format-highlight')) {
        setAttributes({
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className.replace(/has-format-highlight/g, '')).trim()
        });
      }
    }
    if (!clickToTweet && content.includes(clickToTweetContainer)) {
      const strippedContent = content.slice(clickToTweetContainer.length, -7);
      const strippedClassName = !className ? undefined : classnames__WEBPACK_IMPORTED_MODULE_1___default()(className.replace(/wp-block-bu-clicktotweet|has-format-highlight/g, '')).trim();
      setAttributes({
        className: strippedClassName,
        content: strippedContent
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
      ...props
    });
  };
});
addFilter('editor.BlockEdit', 'bu-blocks/click-to-tweet-paragraph', registerFields);

/**
 * Modify the result of the paragraph block's `save` function.
 *
 * @param {Object} element    The original save element.
 * @param {Object} settings   The block settings.
 * @param {Object} attributes The block attributes.
 */
const saveClickToTweet = (element, settings, attributes) => {
  if ('core/paragraph' !== settings.name) {
    return element;
  }
  const {
    props
  } = element;
  const {
    value
  } = props;
  const {
    clickToTweet
  } = attributes;

  // Stop here if the value property of the save element is empty,
  // or the `clickToTweet` attribute is false.
  if (!value || !clickToTweet) {
    // Check if the value previously had Click to Tweet markup.
    if (value && value.includes(clickToTweetContainer)) {
      // Trim the Click to Tweet markup from the value.
      const newValue = value.slice(clickToTweetContainer.length, -7);

      // Assign our new `value` value to the `element` object.
      element.props = Object.assign(props, {
        value: newValue
      });
    }
    return element;
  }

  // Build the new value for the `value` property.
  const newValue = !value.includes(clickToTweetContainer) ? `<span class="wp-block-bu-clicktotweet-content">${value}</span>` : value;

  // Assign our new `className` and `value` values to the `element` object.
  element.props = Object.assign(props, {
    value: newValue
  });
  return element;
};
addFilter('blocks.getSaveElement', 'bu-blocks/click-to-tweet-paragraph', saveClickToTweet);

/***/ }),

/***/ "./src/blocks/collapsible-control/collapsible-control.js":
/*!***************************************************************!*\
  !*** ./src/blocks/collapsible-control/collapsible-control.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_block_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/block-icons */ "./src/components/block-icons/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/collapsible-control/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/collapsible-control/editor.scss");

/**
 * BLOCK: collapsible-control
 *
 * A block to toggle collapsible blocks on the page
 */

// Internal dependencies.


// Import CSS.



// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  PanelBody,
  RadioControl,
  Path,
  SVG
} = wp.components;
const {
  Fragment
} = wp.element;
const {
  InspectorControls,
  RichText,
  useBlockProps
} = wp.blockEditor;

// Register the block.
registerBlockType('bu/collapsible-control', {
  apiVersion: 2,
  title: __('Collapsible Control'),
  description: __('Toggle Collapsible blocks on the page'),
  keywords: [__('collapsible'), __('control'), __('toggle')],
  icon: (0,_components_block_icons__WEBPACK_IMPORTED_MODULE_1__["default"])('collapsiblecontrol'),
  category: 'bu',
  attributes: {
    text: {
      type: 'string',
      source: 'html',
      selector: 'button'
    },
    target: {
      type: 'string',
      default: 'all'
    }
  },
  supports: {
    align: ['left', 'center', 'right']
  },
  edit(props) {
    const {
      attributes,
      setAttributes
    } = props;
    const {
      text,
      target
    } = attributes;
    const togglebuttonclasses = 'bu-collapsible-control-toggle';
    const blockProps = useBlockProps();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "span",
      className: togglebuttonclasses,
      placeholder: __('Toggle Text'),
      value: text,
      onChange: value => setAttributes({
        text: value
      }),
      formattingControls: ['bold', 'italic'],
      withoutInteractiveFormatting: true,
      keepPlaceholderOnFocus: true
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Control Options')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
      label: __('Target'),
      help: __('To control expanding/collapsing a select number of collapsible blocks on the page, place the collapsible blocks AND this control block inside a Group block.'),
      selected: target,
      onChange: value => setAttributes({
        target: value
      }),
      options: [{
        label: __('All Collapsible blocks on this page'),
        value: 'all'
      }, {
        label: __('All Collapsible blocks in this group'),
        value: 'group'
      }]
    }))));
  },
  save({
    attributes
  }) {
    const {
      text,
      target
    } = attributes;
    const togglebuttonclasses = 'bu-collapsible-control-toggle js-bu-collapsible-control-target-' + target;
    const blockProps = useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "button",
      value: text,
      className: togglebuttonclasses
    }));
  }
});

/***/ }),

/***/ "./src/blocks/collapsible/collapsible.js":
/*!***********************************************!*\
  !*** ./src/blocks/collapsible/collapsible.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/collapsible/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/collapsible/editor.scss");
/* harmony import */ var _components_allowed_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/allowed-blocks */ "./src/components/allowed-blocks/index.js");
/* harmony import */ var _components_block_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/block-icons */ "./src/components/block-icons/index.js");
/* harmony import */ var _headline_heading_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../headline/heading-toolbar */ "./src/blocks/headline/heading-toolbar.js");
/* harmony import */ var _generated_ids__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./generated-ids */ "./src/blocks/collapsible/generated-ids.js");

/**
 * BLOCK: collapsible
 *
 * A collapsible content block.
 */

// External dependencies.


// Import CSS.



// Internal dependencies.



// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  PanelBody,
  ToggleControl,
  SelectControl,
  TextControl,
  RangeControl,
  Path,
  SVG,
  Button,
  ButtonGroup
} = wp.components;
const {
  InnerBlocks,
  BlockControls,
  InspectorControls,
  RichText,
  useBlockProps
} = wp.blockEditor;
const {
  select
} = wp.data;
const {
  useEffect
} = wp.element;


/**
 * Internal dependencies
 */


// Register the block.
registerBlockType('bu/collapsible', {
  apiVersion: 2,
  name: 'bu/collapsible',
  title: __('Collapsible'),
  description: __('A collapsible content block.'),
  icon: (0,_components_block_icons__WEBPACK_IMPORTED_MODULE_5__["default"])('collapsible'),
  category: 'bu',
  supports: {
    align: ['wide', 'full']
  },
  attributes: {
    title: {
      type: 'string',
      default: ''
    },
    level: {
      type: 'number',
      default: 2
    },
    isOpen: {
      type: 'boolean',
      default: false
    },
    iconStyle: {
      type: 'string',
      default: 'plus-minus'
    },
    customMarginBottom: {
      type: 'boolean',
      default: false
    },
    marginBottom: {
      type: 'number',
      default: 0
    },
    id: {
      type: 'string',
      default: ''
    },
    autoID: {
      type: 'boolean',
      default: true
    },
    buttonOpenLabel: {
      type: 'string',
      default: 'Read More'
    },
    buttonCloseLabel: {
      type: 'string',
      default: 'Close'
    }
  },
  styles: [{
    name: 'plain',
    label: __('Plain'),
    isDefault: true
  }, {
    name: 'outline',
    label: __('Outline')
  }, {
    name: 'preview',
    label: __('Preview')
  }],
  edit(props) {
    const {
      attributes,
      setAttributes,
      clientId,
      className
    } = props;
    const {
      title,
      level,
      isOpen,
      iconStyle,
      customMarginBottom,
      marginBottom,
      id,
      buttonCloseLabel,
      buttonOpenLabel,
      autoID
    } = attributes;
    const TagName = `h${level}`;
    let isPreviewStyle = false;
    if (props.attributes.className) {
      isPreviewStyle = props.attributes.className.includes('is-style-preview');
    }
    const allowedBlockList = (0,_components_allowed_blocks__WEBPACK_IMPORTED_MODULE_4__["default"])().filter(block => undefined !== block);
    allowedBlockList.push('bu/collapsible');

    // Add an offset to the bottom margin in the editor to account for the container element padding
    const editorContainerPaddingOffset = 28;

    /**
     * Are Auto Generated IDs enabled for this block?
     * Returns true if toggle control is enabled.
     * @return boolean
     */
    const canGenerateID = () => {
      return autoID;
    };

    /**
     * Generate and set an ID for Blocks that have no ID set but have a title
     * or if the block's ID is a duplicate of an existing block found in the editor.
     *
     * useEffect() is triggered when the `title`, `clientId`, `autoID`, or `id` changes on the block.
     *
     * This should cover block duplication events in the editor and is based on a technique used
     * in core for the Heading block to generate anchors.
     */
    useEffect(() => {
      // Check if we can generate IDs for this block.
      if (!canGenerateID()) {
        return;
      }

      // If no ID is set, but there is a title value OR if this ID is a duplicate of an
      // existing collapsible block in this post.
      if (!id && title || (0,_generated_ids__WEBPACK_IMPORTED_MODULE_7__.isDuplicateblockID)(props, id)) {
        const newUniqueID = (0,_generated_ids__WEBPACK_IMPORTED_MODULE_7__.generateID)(title);

        // Append part of the clientId to the new ID to make it unique.
        setAttributes({
          id: newUniqueID + `-${clientId.split('-', 1)}`
        });
      }
    }, [title, clientId, id, autoID]);

    /**
     * When the title attribute changes we save the new title, and check if the id
     * can and should be regenerated.
     * @param {*} value The new value of the title field.
     */
    const onTitleChange = value => {
      const newAttrs = {
        title: value
      };
      if (canGenerateID() && (0,_generated_ids__WEBPACK_IMPORTED_MODULE_7__.generateID)(value) !== (0,_generated_ids__WEBPACK_IMPORTED_MODULE_7__.generateID)(title)) {
        // Generate a new id and save it as the ID.
        newAttrs.id = (0,_generated_ids__WEBPACK_IMPORTED_MODULE_7__.generateID)(value);
      }
      setAttributes(newAttrs);
    };
    const styles = {
      marginBottom: (customMarginBottom ? marginBottom : 0) + editorContainerPaddingOffset
    };
    const blockProps = useBlockProps({
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
        'is-open': isOpen
      }, `icon-style-${iconStyle}`),
      style: styles,
      'data-uniqueid': id
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, !isPreviewStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Icon Style')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ButtonGroup, {
      className: "bu-collapsible-icon-style-button"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isPrimary: 'plus-minus' === iconStyle,
      isSecondary: 'plus-minus' !== iconStyle,
      showTooltip: true,
      label: __('Plus/Minus'),
      onClick: value => setAttributes({
        iconStyle: 'plus-minus'
      })
    }, "+ -"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Button, {
      isPrimary: 'arrows' === iconStyle,
      isSecondary: 'arrows' !== iconStyle,
      showTooltip: true,
      label: __('Arrows'),
      onClick: value => setAttributes({
        iconStyle: 'arrows'
      })
    }, "\uF501 \uF500"))), isPreviewStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Button Labels')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Open Button Label'),
      value: buttonOpenLabel,
      onChange: value => setAttributes({
        buttonOpenLabel: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Close Button Label'),
      value: buttonCloseLabel,
      onChange: value => setAttributes({
        buttonCloseLabel: value
      })
    })), !isPreviewStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Default Collapsible Status')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Open'),
      checked: isOpen,
      onChange: () => setAttributes({
        isOpen: !isOpen
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Spacing')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Custom spacing'),
      checked: customMarginBottom,
      onChange: () => setAttributes({
        customMarginBottom: !customMarginBottom
      })
    }), customMarginBottom && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Bottom Margin (px)'),
      value: marginBottom,
      onChange: value => setAttributes({
        marginBottom: value
      }),
      min: 0,
      max: 200,
      step: 1
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Anchor ID')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Automatically Generated'),
      checked: autoID,
      onChange: () => setAttributes({
        autoID: !autoID
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Note:"), " The id ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("em", null, "must"), " be unique and cannot be duplicated in this post. Unique ID's are needed on each instance of this block so that the aria labels properly document the button and interactive state of the block for accessibility. Duplicate ID's are an accessibility issue and cause errors with interactions with the blocks. Do not use spaces."), autoID && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Unique HTML ID'),
      value: id,
      disabled: true
    }), !autoID && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Unique HTML ID'),
      value: id,
      onChange: value => setAttributes({
        id: value
      })
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_headline_heading_toolbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      minLevel: 2,
      maxLevel: 7,
      selectedLevel: level,
      onChange: newLevel => setAttributes({
        level: newLevel
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TagName, {
      className: "bu-collapsible-heading"
    }, !isPreviewStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'div',
      className: "bu-block-collapsible-toggle",
      value: title,
      onChange: onTitleChange,
      placeholder: __('Heading…'),
      formattingControls: ['bold', 'italic']
    }), isPreviewStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: 'div',
      className: "",
      value: title
      //onChange={ value => setAttributes( { title: value } ) }
      ,
      onChange: onTitleChange,
      placeholder: __('Heading…'),
      formattingControls: ['bold', 'italic']
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bu-block-collapsible-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      allowedBlocks: allowedBlockList
    })), isPreviewStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "button"
    }, buttonOpenLabel));
  },
  save({
    attributes
  }) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null);
  }
});

/***/ }),

/***/ "./src/blocks/collapsible/generated-ids.js":
/*!*************************************************!*\
  !*** ./src/blocks/collapsible/generated-ids.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateID: function() { return /* binding */ generateID; },
/* harmony export */   isDuplicateblockID: function() { return /* binding */ isDuplicateblockID; }
/* harmony export */ });
/**
 * Strip any markup from the text.
 *
 * based on: https://github.com/WordPress/gutenberg/blob/trunk/packages/block-library/src/heading/autogenerate-anchors.js#L20
 * @param {*} text
 * @return
 */
const getTextWithoutMarkup = text => {
  const dummyElement = document.createElement('div');
  dummyElement.innerHTML = text;
  return dummyElement.innerText;
};

/**
 * Function to turn a string into a slug by stripping characters, adding hyphens, etc.
 * @param {*} str
 * @return str The formatted slug.
 */
const slugify = str => {
  return String(str).normalize('NFKD') // split accented characters into their base characters and diacritical marks
  .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
  .trim() // trim leading or trailing whitespace
  .toLowerCase() // convert to lowercase
  .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
  .replace(/\s+/g, '-') // replace spaces with hyphens
  .replace(/-+/g, '-'); // remove consecutive hyphens
};

/**
 * Function to generate a slug from a given text string.
 * @param {str} text The original text string.
 * @return str The formatted slug.
 */
const getSlug = text => {
  let slug = getTextWithoutMarkup(text);
  slug = 'bu-collapsible-id-' + slugify(slug);
  return slug;
};

/**
 * Function to get the editor's Document Root to be used with querySelector to find
 * blocks and elements in the editor view.
 *
 * Based on: https://github.com/WordPress/gutenberg/issues/17246#issuecomment-1216528269
 * @param {*} props
 * @return
 */
const getBlockDocumentRoot = props => {
  const iframes = document.querySelectorAll('.edit-site-visual-editor__editor-canvas');
  let _document = document;

  // check for block editor iframes
  for (let i = 0; i < iframes.length; i++) {
    const block = iframes[i].contentDocument.getElementById('block-' + props.clientId);
    if (block !== null) {
      _document = iframes[i].contentDocument;
      break;
    }
  }
  return _document;
};

/**
 * Function to Search the block editor for blocks with a duplicate id.
 *
 * Based on: https://github.com/WordPress/gutenberg/issues/17246#issuecomment-1492074695
 * @param {*}   props
 * @param {str} id    The ID to check for.
 * @return boolean
 */
const isDuplicateblockID = (props, id) => {
  let duplicate = false;
  const _document = getBlockDocumentRoot(props);
  const elements = _document.querySelectorAll('.block-editor-writing-flow [data-uniqueid="' + id + '"]');
  if (elements.length > 1) {
    duplicate = true;
  }
  return duplicate;
};

/**
 * Function to generate an ID from a given title value.
 * @param {str} title The title value to generate the id from.
 * @return str The new id string.
 */
const generateID = title => {
  const slug = getSlug(title);
  if ('' === slug) {
    return null;
  }
  return slug;
};

/***/ }),

/***/ "./src/blocks/custom-html/custom-html.js":
/*!***********************************************!*\
  !*** ./src/blocks/custom-html/custom-html.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/custom-html/editor.scss");
/* harmony import */ var _components_block_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/block-icons */ "./src/components/block-icons/index.js");

/**
 * BLOCK: editorial/custom-html
 *
 * A block used for arbitrary custom HTML that is not sanitized
 * or escaped in any way on output.
 */

//  Import CSS.


// Internal dependencies.


// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  withState,
  compose
} = wp.compose;
const {
  withSelect,
  select,
  subscribe
} = wp.data;
const {
  PlainText
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  addQueryArgs
} = wp.url;
const {
  apiFetch
} = wp;

// Register the block.
registerBlockType('editorial/custom-html', {
  title: __('BU Custom HTML'),
  description: __('Enter arbitrary custom HTML.'),
  icon: (0,_components_block_icons__WEBPACK_IMPORTED_MODULE_2__["default"])('html'),
  category: 'bu-editorial',
  attributes: {
    // This block ID is used when storing individual block content as post meta.
    customBlockID: {
      type: 'string',
      default: ''
    }
  },
  edit: compose([withState({
    customHTML: '',
    hasLoaded: false,
    doingHTMLFetch: false,
    errorMessage: false
  }), withSelect((select, props) => {
    const {
      setState,
      customHTML,
      hasLoaded,
      doingHTMLFetch,
      errorMessage
    } = props;
    const {
      customBlockID
    } = props.attributes;

    // Do an initial load of the block's stored data from meta.
    if ('' !== customBlockID && !doingHTMLFetch && !hasLoaded) {
      setState({
        doingHTMLFetch: true // Prevent concurrent API calls for the same data.
      });
      apiFetch({
        path: addQueryArgs('/bu-blocks/v1/customhtml', {
          post_id: select('core/editor').getCurrentPostId(),
          custom_block_id: customBlockID
        })
      }).then(html => {
        setState({
          customHTML: html,
          doingHTMLFetch: false,
          hasLoaded: true
        });
      }).catch(error => {
        setState({
          doingHTMLFetch: false,
          errorMessage: error.message,
          hasLoaded: true
        });
      });
    }
    return {
      hasLoaded,
      // Whether the initial load is complete.
      customHTML,
      // HTML to display in the block.
      errorMessage // A string to display in the block if an API request failed.
    };
  })])(({
    hasLoaded,
    customHTML,
    errorMessage,
    attributes,
    ...props
  }) => {
    const {
      className,
      setState,
      setAttributes
    } = props;
    const {
      customBlockID
    } = attributes;

    // Update the block's content state whenever content in this block
    // is changed.
    const updateBlockValue = updatedHTML => {
      // HTML is passed around as a state rather than an attribute
      // because it is stored in meta rather than in content.
      setState({
        customHTML: updatedHTML
      });
    };

    // Save post meta via REST Endpoint.
    const savePostMeta = function () {
      const postID = select('core/editor').getCurrentPostId();

      // This may be true on the first load of some posts.
      if (null === postID) {
        return;
      }
      const customTextArea = document.querySelector('#block-' + customBlockID + ' textarea');

      // This may be true on the first load of some posts.
      if (null === customTextArea) {
        return;
      }
      const post = {
        post_id: postID,
        custom_block_id: customBlockID,
        html: customTextArea.value
      };

      // Save the data for this block using a custom endpoint.
      //
      // This is saved this way vs the standard block->attribute->meta
      // approach so that the HTML is left intact as is and is not rendered
      // to post_content. The intent with this block is to support HTML as
      // entered, including unclosed tags or other issues that WP will try
      // to fix in the core HTML block.
      //
      // Also, when the HTML is stored as an attribute it is part of the block
      // markup. However all of the blocks are parsed on loading of the post in
      // the editor and run through some functions to validate the markup. Any
      // unclosed tags or other issues trigger a warning and the user would be
      // prompted to have WP fix it. Therby breaking the intended code output.
      //
      // Why would you want unclosed tags or other issues? Normally you don't
      // but in some edge cases you may need to "wrap" html like a div tag around
      // other content in the post. This block unlike the core HTML block will allow
      // you to open a tag and then close it in another BU Custom HTML block later.
      // It's the responsiblity of the user to make sure to close the tags in those
      // situations but it is important to have that ability.
      if ('' !== customBlockID) {
        apiFetch({
          path: '/bu-blocks/v1/customhtml',
          method: 'POST',
          data: post
        }).then(html => {
          // Success!
        }).catch(error => {
          // How to handle this error?
        });
      }
    };

    /* In 5.4 the previous method of saving the html to post meta was
    not working properly. A temporary fix of using wp.data.subscribe() to
    monitor for post save and update the post meta then is being used here.
    	Ultimately a better solution is needed. A suggested approach to bypass validation
    by the block editor instead of this method of storing in postmeta via the rest
    api would be to encode the html as base64 so it appears to be a nonsensical string
    and store that in a normal block attribute and then decode the base64 "hidden" html
    on the frontend to convert back to html. */

    const {
      isSavingPost
    } = select('core/editor');
    const {
      isAutosavingPost
    } = select('core/editor');
    const {
      didPostSaveRequestSucceed
    } = select('core/editor');
    let saving = false;
    subscribe(() => {
      if (isSavingPost() && !isAutosavingPost() && didPostSaveRequestSucceed()) {
        saving = true;
      } else if (saving) {
        savePostMeta();
        saving = false;
      }
    });

    // Set a timestamp based block ID if it does not yet exist. It is okay
    // for multiple posts to share similar block IDs, but not okay for multiple
    // blocks on the same post. Using `Date().getTime()` here provides a unique
    // enough identifier at a low cost.
    if ('' === customBlockID) {
      setAttributes({
        customBlockID: 'manual-' + new Date().getTime()
      });
    }

    // Selectors technically can't start with a number, so prepend a string to
    // build the ID attribute of the wrapping container.
    const containerID = 'block-' + customBlockID;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      id: containerID,
      className: className
    }, !hasLoaded && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Looking for existing content..."), hasLoaded && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      label: "Enter custom HTML",
      value: customHTML,
      onChange: updateBlockValue
    }));
  }),
  // The front-end HTML for this block is handled in PHP, but
  // the save function is required.
  save({
    attributes
  }) {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/drawer/drawer.js":
/*!*************************************!*\
  !*** ./src/blocks/drawer/drawer.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/drawer/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/drawer/editor.scss");
/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/background */ "./src/components/background/index.js");
/* harmony import */ var _global_theme_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/theme-options */ "./src/global/theme-options.js");
/* harmony import */ var _components_allowed_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/allowed-blocks */ "./src/components/allowed-blocks/index.js");
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");
/* harmony import */ var _components_block_icons___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/block-icons/ */ "./src/components/block-icons/index.js");

/**
 * BLOCK: bu-editorial-drawer
 *
 * A block that works a bit like BU Collapsible to open and close a drawer of content.
 */

// External dependencies.


// Import CSS.



// Internal dependencies.






// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  PanelBody,
  Path,
  RadioControl,
  SVG,
  ToggleControl
} = wp.components;
const {
  RichText,
  InnerBlocks,
  InspectorControls,
  PanelColorSettings,
  withColors,
  useBlockProps
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  select
} = wp.data;
const {
  useState
} = wp.element;

// Populate selectors that were in core/editor until WordPress 5.2 and are
// now located in core/block-editor.
const {
  hasSelectedInnerBlock,
  isBlockSelected
} = 'undefined' === typeof select('core/block-editor') ? select('core/editor') : select('core/block-editor');

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {number}  background Whether the block has background media assigned.
 * @param {string}  className  Default classes assigned to the block.
 * @param {boolean} round      Whether to display round images.
 * @param {boolean} hideTeaser Whether to display the teaser.
 * @param           size
 * @param {string}  themeColor The assigned background color.
 */
const getClasses = (background, className, hideTeaser, round, size, themeColor) => {
  return classnames__WEBPACK_IMPORTED_MODULE_1___default()('js-bu-block-drawer', {
    'has-hide-teaser': hideTeaser,
    'is-style-round': round,
    [className]: className,
    [`has-${themeColor}-background`]: themeColor,
    [size]: size && size !== '',
    'has-media': background
  });
};

// Register the block.
registerBlockType('editorial/drawer', {
  apiVersion: 2,
  title: __('Drawer'),
  description: __('Add content that can be toggled.'),
  icon: (0,_components_block_icons___WEBPACK_IMPORTED_MODULE_8__["default"])('drawer'),
  category: 'bu-editorial',
  attributes: {
    button: {
      type: 'string',
      default: 'Read More',
      source: 'text',
      selector: '.button.js-bu-block-drawer-open'
    },
    className: {
      type: 'string'
    },
    clientId: {
      type: 'number'
    },
    hed: {
      type: 'string',
      default: '',
      source: 'html',
      selector: 'h2'
    },
    hideTeaser: {
      type: 'boolean',
      default: false
    },
    lede: {
      type: 'string',
      default: '',
      source: 'html',
      selector: 'p'
    },
    round: {
      type: 'boolean',
      default: false
    },
    size: {
      type: 'string',
      default: ''
    },
    themeColor: {
      type: 'string',
      default: ''
    },
    ..._components_background__WEBPACK_IMPORTED_MODULE_4__.BackgroundAttributes
  },
  supports: {
    align: ['left', 'right', 'full']
  },
  // Add the `selected-drawer` data attribute when this block or its descendants are selected.
  getEditWrapperProps({
    clientId
  }) {
    if (clientId) {
      const drawerHasSelectedBlock = hasSelectedInnerBlock(clientId, true) || isBlockSelected(clientId);
      return {
        'data-selected-drawer': drawerHasSelectedBlock ? 'true' : undefined
      };
    }
  },
  edit: withColors('themeColor')(props => {
    // Get the properties and attributes we'll need.
    const {
      attributes: {
        backgroundId,
        button,
        hed,
        hideTeaser,
        lede,
        round,
        size
      },
      className,
      clientId,
      isSelected,
      setAttributes,
      setThemeColor,
      themeColor
    } = props;
    const blockProps = useBlockProps({
      className: getClasses(backgroundId, className, hideTeaser, round, size, themeColor.slug)
    });
    const [isUploading, setIsUploading] = useState(false);

    // Set the clientId attribute so it can be accessed in the `getEditWrapperProps` function.
    if (hasSelectedInnerBlock(clientId, true) || isBlockSelected(clientId)) {
      setAttributes({
        clientId
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__.BackgroundControls, {
      allowedMediaTypes: ['image'],
      blockProps: props,
      inlinePlaceholder: true,
      options: [],
      placeholderText: __('Add Image'),
      setIsUploading: setIsUploading
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-drawer-teaser"
    }, (backgroundId || isSelected || hasSelectedInnerBlock(clientId, true)) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__["default"], {
      blockProps: props,
      isUploading: isUploading
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_7__["default"])('formattingControls', []),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_7__["default"])('allowedFormats', []),
      keepPlaceholderOnFocus: true,
      onChange: value => setAttributes({
        hed: value
      }),
      placeholder: __('Enter heading…'),
      tagName: "h2",
      value: hed
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_7__["default"])('formattingControls', ['bold', 'italic', 'link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_7__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link']),
      keepPlaceholderOnFocus: true,
      onChange: value => setAttributes({
        lede: value
      }),
      placeholder: __('Enter text…'),
      tagName: "p",
      value: lede
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-drawer-open-wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_7__["default"])('formattingControls', []),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_7__["default"])('allowedFormats', []),
      keepPlaceholderOnFocus: true,
      className: "button js-bu-block-drawer-open",
      onChange: value => setAttributes({
        button: value
      }),
      placeholder: __('Enter button label…'),
      tagName: "p",
      value: button
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "wp-block-editorial-drawer-content js-bu-block-drawer-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-drawer-wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      allowedBlocks: (0,_components_allowed_blocks__WEBPACK_IMPORTED_MODULE_6__["default"])()
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-drawer-close"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "wp-block-editorial-drawer-close-button js-bu-block-drawer-close"
    }, "Close")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-drawer-clearfix"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Background Color'),
      initialOpen: false,
      colorSettings: [{
        value: themeColor.color,
        onChange: setThemeColor,
        label: __('Background'),
        disableCustomColors: true,
        colors: (0,_global_theme_options__WEBPACK_IMPORTED_MODULE_5__["default"])()
      }]
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Display Options')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Hide teaser when drawer is open'),
      checked: hideTeaser,
      onChange: () => setAttributes({
        hideTeaser: !hideTeaser
      })
    }), backgroundId && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Round photos'),
      checked: round,
      onChange: () => setAttributes({
        round: !round
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
      label: __('Size'),
      selected: size,
      options: [{
        label: 'Default',
        value: ''
      }, {
        label: 'Narrow',
        value: 'is-size-narrow'
      }, {
        label: 'Small',
        value: 'is-size-small'
      }, {
        label: 'Medium',
        value: 'is-size-medium'
      }, {
        label: 'Wide',
        value: 'is-size-wide'
      }],
      onChange: option => setAttributes({
        size: option
      })
    }))));
  }),
  save(props) {
    // Get the properties and attributes we'll need.
    const {
      attributes: {
        backgroundId,
        button,
        className,
        hed,
        hideTeaser,
        lede,
        round,
        size,
        themeColor
      }
    } = props;
    const blockProps = useBlockProps.save({
      className: getClasses(backgroundId, className, hideTeaser, round, size, themeColor)
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-drawer-teaser"
    }, backgroundId && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__["default"], {
      blockProps: props
    })), !RichText.isEmpty(hed) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "h2",
      value: hed
    }), !RichText.isEmpty(lede) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      value: lede
    }), button && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "button js-bu-block-drawer-open"
    }, button)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "wp-block-editorial-drawer-content js-bu-block-drawer-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-drawer-wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-drawer-close"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "wp-block-editorial-drawer-close-button js-bu-block-drawer-close"
    }, "Close")))));
  }
});

/***/ }),

/***/ "./src/blocks/headline/heading-toolbar.js":
/*!************************************************!*\
  !*** ./src/blocks/headline/heading-toolbar.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * WordPress dependencies
 */
const {
  __,
  sprintf
} = wp.i18n;
const {
  Component
} = wp.element;
const {
  Toolbar,
  Path,
  SVG
} = wp.components;

// Copied from Gutenberg.
// https://github.com/WordPress/gutenberg/blob/4a94950aec074274bea2c0d88aeeb550c9a95cc6/packages/block-library/src/heading/heading-level-icon.js.
const HeadingLevelIcon = function ({
  level,
  isPressed = false
}) {
  const levelToPath = {
    1: 'M9 5h2v10H9v-4H5v4H3V5h2v4h4V5zm6.6 0c-.6.9-1.5 1.7-2.6 2v1h2v7h2V5h-1.4z',
    2: 'M7 5h2v10H7v-4H3v4H1V5h2v4h4V5zm8 8c.5-.4.6-.6 1.1-1.1.4-.4.8-.8 1.2-1.3.3-.4.6-.8.9-1.3.2-.4.3-.8.3-1.3 0-.4-.1-.9-.3-1.3-.2-.4-.4-.7-.8-1-.3-.3-.7-.5-1.2-.6-.5-.2-1-.2-1.5-.2-.4 0-.7 0-1.1.1-.3.1-.7.2-1 .3-.3.1-.6.3-.9.5-.3.2-.6.4-.8.7l1.2 1.2c.3-.3.6-.5 1-.7.4-.2.7-.3 1.2-.3s.9.1 1.3.4c.3.3.5.7.5 1.1 0 .4-.1.8-.4 1.1-.3.5-.6.9-1 1.2-.4.4-1 .9-1.6 1.4-.6.5-1.4 1.1-2.2 1.6V15h8v-2H15z',
    3: 'M12.1 12.2c.4.3.8.5 1.2.7.4.2.9.3 1.4.3.5 0 1-.1 1.4-.3.3-.1.5-.5.5-.8 0-.2 0-.4-.1-.6-.1-.2-.3-.3-.5-.4-.3-.1-.7-.2-1-.3-.5-.1-1-.1-1.5-.1V9.1c.7.1 1.5-.1 2.2-.4.4-.2.6-.5.6-.9 0-.3-.1-.6-.4-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.1.3-.4.2-.7.4-1.1.6l-1.2-1.4c.5-.4 1.1-.7 1.6-.9.5-.2 1.2-.3 1.8-.3.5 0 1 .1 1.6.2.4.1.8.3 1.2.5.3.2.6.5.8.8.2.3.3.7.3 1.1 0 .5-.2.9-.5 1.3-.4.4-.9.7-1.5.9v.1c.6.1 1.2.4 1.6.8.4.4.7.9.7 1.5 0 .4-.1.8-.3 1.2-.2.4-.5.7-.9.9-.4.3-.9.4-1.3.5-.5.1-1 .2-1.6.2-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1l1.1-1.4zM7 9H3V5H1v10h2v-4h4v4h2V5H7v4z',
    4: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm10-2h-1v2h-2v-2h-5v-2l4-6h3v6h1v2zm-3-2V7l-2.8 4H16z',
    5: 'M12.1 12.2c.4.3.7.5 1.1.7.4.2.9.3 1.3.3.5 0 1-.1 1.4-.4.4-.3.6-.7.6-1.1 0-.4-.2-.9-.6-1.1-.4-.3-.9-.4-1.4-.4H14c-.1 0-.3 0-.4.1l-.4.1-.5.2-1-.6.3-5h6.4v1.9h-4.3L14 8.8c.2-.1.5-.1.7-.2.2 0 .5-.1.7-.1.5 0 .9.1 1.4.2.4.1.8.3 1.1.6.3.2.6.6.8.9.2.4.3.9.3 1.4 0 .5-.1 1-.3 1.4-.2.4-.5.8-.9 1.1-.4.3-.8.5-1.3.7-.5.2-1 .3-1.5.3-.8 0-1.6-.1-2.3-.4-.6-.2-1.1-.6-1.6-1-.1-.1 1-1.5 1-1.5zM9 15H7v-4H3v4H1V5h2v4h4V5h2v10z',
    6: 'M9 15H7v-4H3v4H1V5h2v4h4V5h2v10zm8.6-7.5c-.2-.2-.5-.4-.8-.5-.6-.2-1.3-.2-1.9 0-.3.1-.6.3-.8.5l-.6.9c-.2.5-.2.9-.2 1.4.4-.3.8-.6 1.2-.8.4-.2.8-.3 1.3-.3.4 0 .8 0 1.2.2.4.1.7.3 1 .6.3.3.5.6.7.9.2.4.3.8.3 1.3s-.1.9-.3 1.4c-.2.4-.5.7-.8 1-.4.3-.8.5-1.2.6-1 .3-2 .3-3 0-.5-.2-1-.5-1.4-.9-.4-.4-.8-.9-1-1.5-.2-.6-.3-1.3-.3-2.1s.1-1.6.4-2.3c.2-.6.6-1.2 1-1.6.4-.4.9-.7 1.4-.9.6-.3 1.1-.4 1.7-.4.7 0 1.4.1 2 .3.5.2 1 .5 1.4.8 0 .1-1.3 1.4-1.3 1.4zm-2.4 5.8c.2 0 .4 0 .6-.1.2 0 .4-.1.5-.2.1-.1.3-.3.4-.5.1-.2.1-.5.1-.7 0-.4-.1-.8-.4-1.1-.3-.2-.7-.3-1.1-.3-.3 0-.7.1-1 .2-.4.2-.7.4-1 .7 0 .3.1.7.3 1 .1.2.3.4.4.6.2.1.3.3.5.3.2.1.5.2.7.1z'
  };
  if (!levelToPath.hasOwnProperty(level)) {
    return null;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    xmlns: "http://www.w3.org/2000/svg",
    isPressed: isPressed,
    class: "bu-blocks-heading-icon"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Path, {
    d: levelToPath[level]
  }));
};
class HeadingToolbar extends Component {
  createLevelControl(targetLevel, selectedLevel, onChange) {
    return {
      icon: (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(HeadingLevelIcon, {
        level: targetLevel
      }),
      // translators: %s: heading level e.g: "1", "2", "3"
      title: sprintf(__('Heading %d'), targetLevel),
      isActive: targetLevel === selectedLevel,
      onClick: () => onChange(targetLevel)
    };
  }
  render() {
    const {
      minLevel,
      maxLevel,
      selectedLevel,
      onChange
    } = this.props;
    const range = Array.from({
      length: maxLevel - minLevel
    }, (v, k) => k + minLevel);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, {
      controls: range.map(index => this.createLevelControl(index, selectedLevel, onChange))
    });
  }
}
/* harmony default export */ __webpack_exports__["default"] = (HeadingToolbar);

/***/ }),

/***/ "./src/blocks/headline/headline.js":
/*!*****************************************!*\
  !*** ./src/blocks/headline/headline.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/headline/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/headline/editor.scss");
/* harmony import */ var _heading_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heading-toolbar */ "./src/blocks/headline/heading-toolbar.js");
/* harmony import */ var _pretext_format_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pretext-format.js */ "./src/blocks/headline/pretext-format.js");
/* harmony import */ var _posttext_format_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./posttext-format.js */ "./src/blocks/headline/posttext-format.js");
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");
/* harmony import */ var _components_block_icons___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/block-icons/ */ "./src/components/block-icons/index.js");

/**
 * BLOCK: bu-headline-cgb
 *
 * A headline with anchor support and pre- and post-text formatting options.
 */

// Import CSS.



// Import internal dependencies.






// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  Fragment
} = wp.element;
const {
  PanelBody
} = wp.components;
const {
  RichText,
  BlockControls,
  InspectorControls
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  select
} = wp.data;

// Populate selectors that were in core/editor until WordPress 5.2 and are
// now located in core/block-editor.
const {
  getBlocks
} = 'undefined' === typeof select('core/block-editor') ? select('core/editor') : select('core/block-editor');

// Register the block.
registerBlockType('editorial/headline', {
  title: __('Headline'),
  description: __('Add a section heading with an anchor and pre- and post-text formatting options.'),
  icon: (0,_components_block_icons___WEBPACK_IMPORTED_MODULE_7__["default"])('headline'),
  category: 'bu-editorial',
  supports: {
    anchor: true
  },
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-headline'
    },
    level: {
      type: 'number',
      default: 2
    },
    anchor: {
      type: 'string',
      source: 'attribute',
      attribute: 'id',
      selector: '.wp-block-editorial-headline'
    }
  },
  styles: [{
    name: 'default',
    label: __('Regular'),
    isDefault: true
  }, {
    name: 'emphasis-weight',
    label: __('Emphasize weight')
  }, {
    name: 'emphasis-color',
    label: __('Emphasize color')
  }],
  edit(props) {
    const {
      attributes,
      setAttributes,
      className
    } = props;
    const {
      content,
      level,
      anchor
    } = attributes;
    const tagName = 'h' + level;

    /**
     * August 2023: Disabling this Anchor ID Generator as it is creating duplicate anchor ids on all headings if:
     * - Headline blocks are duplicated, resulting in duplicate anchors
     * - When Headline blocks are child blocks of other blocks they aren't included in the count using the current getBlocks() method.
     * - Duplicate anchors are a problem for SiteImprove and cause us to fail accessibility checks. Better to force users to manually insert ids.
     * - Core Gutenberg is considering a new feature to support unique non-duplicatable attributes: https://github.com/WordPress/gutenberg/issues/29693
     * @param newLevel
     * @param content
     */
    // Generate an index-based value for the anchor attribute if it is not set.
    // if ( ! anchor ) {
    // 	const headlineBlocks = getBlocks().filter( e => e.name === 'editorial/headline' );
    // 	const id = 'headline-' + ( headlineBlocks.length );

    // 	setAttributes( { anchor: id } );
    // }

    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Help'),
      initialOpen: false
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "PreText and PostText Formats"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "These formats are intended to style text such as \"Chapter 3:\" as part of a headline text either before or after the main Headline text. Enter the Headline and then select text in the headline and apply a pre or post text format from the Format Control Toolbar on the block."), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Emphasis Color & Weight"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("br", null), "Emphasis Color and Emphasis weight can be selectively applied to a word(s) by selecting those characters and applying a", ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "Bold"), " style. The color or weight change will apply to any bold text inside the Headline tag.")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_heading_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      minLevel: 1,
      maxLevel: 7,
      selectedLevel: level,
      onChange: newLevel => setAttributes({
        level: newLevel
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: tagName,
      className: className,
      value: content,
      onChange: content => setAttributes({
        content
      }),
      placeholder: __('Write headline…'),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('formattingControls', ['pretext', 'posttext', 'bold', 'italic']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('allowedFormats', ['editorial/pretext', 'editorial/posttext', 'core/bold', 'core/italic']),
      withoutInteractiveFormats: true
    }));
  },
  save({
    attributes
  }) {
    const {
      content,
      level
    } = attributes;
    const tagName = 'h' + level;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: tagName,
      value: content
    });
  }
});

/***/ }),

/***/ "./src/blocks/headline/posttext-format.js":
/*!************************************************!*\
  !*** ./src/blocks/headline/posttext-format.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Format: bu-headline-posttext
 *
 * A RichText format button for wrapping selected text in a span with the
 * 'wp-block-editorial-headline-posttext' span.
 */

// Import WordPress dependencies
const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  registerFormatType,
  toggleFormat
} = wp.richText;
const {
  RichTextToolbarButton,
  RichTextShortcut
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const el = wp.element.createElement;
const {
  compose,
  ifCondition
} = wp.compose;
const {
  withSelect
} = wp.data;
const name = 'editorial/posttext';
const posttexticon = el('svg', {
  width: 20,
  height: 20,
  viewBox: '0 0 20 20'
}, el('path', {
  d: 'M18,13.68H8.56a.51.51,0,0,0-.51.51v2a.51.51,0,0,0,.51.51H18a.51.51,0,0,0,.52-.51v-2A.51.51,0,0,0,18,13.68Z'
}), el('polygon', {
  points: '1.53 15.96 4.51 15.96 4.51 17.02 7.1 15.2 4.51 13.4 4.51 14.46 1.53 14.46 1.53 14.46 1.53 15.96'
}), el('path', {
  d: 'M10,4.27V7.38h3V4.27h1.82v8.08H13.05V9H10v3.38H8.2V4.27Z'
}));
registerFormatType(name, {
  title: __('Posttext'),
  tagName: 'span',
  className: 'wp-block-editorial-headline-posttext',
  edit: compose(withSelect(select => {
    const getSelectedBlock = 'undefined' === typeof select('core/block-editor') ? select('core/editor').getSelectedBlock : select('core/block-editor').getSelectedBlock;
    return {
      selectedBlock: getSelectedBlock()
    };
  }), ifCondition(props => {
    return props.selectedBlock && props.selectedBlock.name === 'editorial/headline';
  }))(props => {
    const {
      isActive,
      onChange,
      selectedBlock,
      value
    } = props;
    const onToggle = () => onChange(toggleFormat(value, {
      type: name
    }));
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichTextShortcut, {
      type: "access",
      character: "b",
      onUse: onToggle
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichTextToolbarButton, {
      icon: posttexticon,
      title: __('Posttext'),
      onClick: onToggle,
      isActive: isActive,
      shortcutType: "access",
      shortcutCharacter: "b"
    }));
  })
});

/***/ }),

/***/ "./src/blocks/headline/pretext-format.js":
/*!***********************************************!*\
  !*** ./src/blocks/headline/pretext-format.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Format: bu-headline-pretext
 *
 * A RichText format button for wrapping selected text in a span with the
 * 'wp-block-editorial-headline-pretext' span.
 */

// Import WordPress dependencies
const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  registerFormatType,
  toggleFormat
} = wp.richText;
const {
  RichTextToolbarButton,
  RichTextShortcut
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const el = wp.element.createElement;
const {
  compose,
  ifCondition
} = wp.compose;
const {
  withSelect
} = wp.data;
const name = 'editorial/pretext';
const pretexticon = el('svg', {
  width: 20,
  height: 20,
  viewBox: '0 0 20 20'
}, el('path', {
  d: 'M18,4.3H8.56a.51.51,0,0,0-.51.52v2a.51.51,0,0,0,.51.51H18a.51.51,0,0,0,.52-.51v-2A.52.52,0,0,0,18,4.3Z'
}), el('polygon', {
  points: '1.53 6.59 4.51 6.59 4.51 7.65 7.1 5.83 4.51 4.02 4.51 5.08 1.53 5.08 1.53 5.08 1.53 6.59'
}), el('path', {
  d: 'M10,8.67v3.1h3V8.67h1.82v8.08H13.05V13.37H10v3.38H8.2V8.67Z'
}));
registerFormatType(name, {
  title: __('Pretext'),
  tagName: 'span',
  className: 'wp-block-editorial-headline-pretext',
  edit: compose(withSelect(select => {
    const getSelectedBlock = 'undefined' === typeof select('core/block-editor') ? select('core/editor').getSelectedBlock : select('core/block-editor').getSelectedBlock;
    return {
      selectedBlock: getSelectedBlock()
    };
  }), ifCondition(props => {
    return props.selectedBlock && props.selectedBlock.name === 'editorial/headline';
  }))(props => {
    const {
      isActive,
      onChange,
      selectedBlock,
      value
    } = props;
    const onToggle = () => onChange(toggleFormat(value, {
      type: name
    }));
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichTextShortcut, {
      type: "access",
      character: "a",
      onUse: onToggle
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichTextToolbarButton, {
      icon: pretexticon,
      title: __('Pretext'),
      onClick: onToggle,
      isActive: isActive,
      shortcutType: "access",
      shortcutCharacter: "a"
    }));
  })
});

/***/ }),

/***/ "./src/blocks/introparagraph/deprecated.js":
/*!*************************************************!*\
  !*** ./src/blocks/introparagraph/deprecated.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_theme_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/theme-options */ "./src/global/theme-options.js");



// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  createBlock,
  registerBlockType
} = wp.blocks;
const {
  Fragment
} = wp.element;
const {
  IconButton,
  PanelBody,
  Toolbar
} = wp.components;
const {
  RichText,
  PlainText,
  InspectorControls,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
  withColors
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;

// Import a library used to manage multiple class names.


// Import common handling of available color options.


/**
 * Render the SVG used for a drop cap when the drop cap has an
 * image assigned to it.
 *
 * This is used in the block editor and stored in post content
 * as part of the block markup.
 *
 * @param {string} character The character to display in the drop cap.
 * @param {string} imageURL  The background image for the drop cap character.
 */
const renderDropCapSVG = (character, imageURL) => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("pattern", {
    id: "dropcap-texture",
    viewBox: "0 0 1024 1024",
    patternUnits: "userSpaceOnUse",
    width: "100%",
    height: "100%",
    x: "0%",
    y: "0%"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("image", {
    href: imageURL,
    width: "1024",
    height: "1024"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
    textAnchor: "start",
    x: "0",
    y: "50%",
    dy: ".404em",
    className: "dropcap-filltext"
  }, character));
};
const deprecated = [{
  attributes: {
    heading: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-introparagraph h4'
    },
    list: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-introparagraph-toc'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-introparagraph-content p'
    },
    dropCapColor: {
      type: 'string',
      default: ''
    },
    paragraphColor: {
      type: 'string',
      default: ''
    },
    className: {
      type: 'string',
      default: ''
    },
    dropCapImageURL: {
      type: 'string',
      default: ''
    },
    dropCapImageId: {
      type: 'number'
    }
  },
  save({
    attributes
  }) {
    const {
      heading,
      list,
      content,
      dropCapColor,
      dropCapImageURL,
      paragraphColor,
      className
    } = attributes;
    let isImageDropCap = false;
    if ('undefined' !== typeof className) {
      // Determine if the drop cap SVG should be included in content.
      isImageDropCap = className.includes('is-style-dropcap-image');
    }

    // Pull the first character from the article content use in the drop cap SVG.
    let dropCapCharacter = '';
    if ('undefined' !== typeof content) {
      dropCapCharacter = content.charAt(0);
    }

    // Determine if the list is empty and should be excluded from the saved block.
    let saveList = true;
    if ('undefined' === typeof list || '<li></li>' === list || RichText.isEmpty(list)) {
      saveList = false;
    }

    // Determine if a sepecific dropcap style has been selected.
    const hasDropCapStyle = className && className.includes('is-style-dropcap');
    const classes = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, {
      'has-dropcap': hasDropCapStyle,
      [`has-dropcap-color-${dropCapColor}`]: hasDropCapStyle && dropCapColor,
      [`has-paragraph-color-${paragraphColor}`]: !hasDropCapStyle && paragraphColor
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classes
    }, !RichText.isEmpty(heading) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "h4",
      value: heading
    }), saveList && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "ul",
      className: "wp-block-editorial-introparagraph-toc",
      value: list,
      multiline: "li"
    }), !RichText.isEmpty(content) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-introparagraph-content"
    }, isImageDropCap && renderDropCapSVG(dropCapCharacter, dropCapImageURL), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      value: content
    })));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/blocks/introparagraph/introparagraph.js":
/*!*****************************************************!*\
  !*** ./src/blocks/introparagraph/introparagraph.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/introparagraph/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/introparagraph/editor.scss");
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");
/* harmony import */ var _components_block_icons___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/block-icons/ */ "./src/components/block-icons/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _global_theme_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/theme-options */ "./src/global/theme-options.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/introparagraph/deprecated.js");

/**
 * BLOCK: editorial/introparagraph
 *
 * Register an intro paragraph block with Gutenberg.
 */

//  Import CSS.





// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  createBlock,
  registerBlockType
} = wp.blocks;
const {
  Fragment
} = wp.element;
const {
  IconButton,
  PanelBody,
  Toolbar,
  SVG
} = wp.components;
const {
  RichText,
  PlainText,
  InspectorControls,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
  PanelColorSettings,
  withColors
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;

// Import a library used to manage multiple class names.


// Import common handling of available color options.



/**
 * Render the SVG used for a drop cap when the drop cap has an
 * image assigned to it.
 *
 * This is used in the block editor and stored in post content
 * as part of the block markup.
 *
 *
 * @param {string} character The character to display in the drop cap.
 * @param {string} imageURL  The background image for the drop cap character.
 */
const renderDropCapSVG = (character, imageURL) => {
  const randomID = 'dropcap-text-' + character;
  const clipPathURL = 'url(#' + randomID + ')';
  const xlinkurlAttr = {
    'xlink:href': imageURL
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("clipPath", {
    id: randomID
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("text", {
    textAnchor: "start",
    x: "0",
    y: "50%",
    dy: ".404em",
    className: "dropcap-filltext"
  }, character)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "clip-path": clipPathURL
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("image", {
    ...xlinkurlAttr,
    href: imageURL,
    width: "100%",
    height: "100%",
    preserveAspectRatio: "none"
  })));
};

// Register the block.
registerBlockType('editorial/introparagraph', {
  title: __('Intro Paragraph'),
  description: __('Add an introduction with a bulleted list and styled paragraph.'),
  icon: (0,_components_block_icons___WEBPACK_IMPORTED_MODULE_4__["default"])('introparagraph'),
  category: 'bu-editorial',
  supports: {
    anchor: true
  },
  attributes: {
    heading: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-introparagraph h4'
    },
    list: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-introparagraph-toc'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-introparagraph-content p'
    },
    dropCapColor: {
      type: 'string',
      default: ''
    },
    paragraphColor: {
      type: 'string',
      default: ''
    },
    className: {
      type: 'string',
      default: ''
    },
    dropCapImageURL: {
      type: 'string',
      default: ''
    },
    dropCapImageId: {
      type: 'number'
    }
  },
  styles: [{
    name: 'default',
    label: __('Regular'),
    isDefault: true
  }, {
    name: 'large',
    label: __('Large paragraph text')
  }, {
    name: 'split',
    label: __('Split paragraph text')
  }, {
    name: 'dropcap-default',
    label: __('Dropcap')
  }, {
    name: 'dropcap-boxed',
    label: __('Boxed dropcap')
  }, {
    name: 'dropcap-outlined',
    label: __('Outlined dropcap')
  }, {
    name: 'dropcap-dimensional',
    label: __('Dimensional dropcap')
  }, {
    name: 'dropcap-image',
    label: __('Image dropcap')
  }],
  edit: withColors('paragraphColor', 'dropCapColor')(props => {
    const {
      attributes,
      className,
      insertBlocksAfter,
      setAttributes,
      paragraphColor,
      setParagraphColor,
      dropCapColor,
      setDropCapColor
    } = props;
    const {
      heading,
      content,
      list,
      dropCapImageURL,
      dropCapImageId
    } = attributes;

    // Determine if a sepecific dropcap style has been selected.
    const hasDropCapStyle = className.includes('is-style-dropcap');

    // Ensure that the has-dropcap, other has-dropcap classes, and paragraph classes are aligned.
    if (hasDropCapStyle) {
      setAttributes({
        paragraphColor: ''
      });
    } else if (!hasDropCapStyle) {
      setAttributes({
        dropCapColor: ''
      });
    }

    // Determine if the drop cap SVG should be included in content.
    const isImageDropCap = className.includes('is-style-dropcap-image');

    // Pull the first character from the article content use in the drop cap SVG.
    let dropCapCharacter = '';
    if ('undefined' !== typeof content) {
      dropCapCharacter = content.charAt(0);
    }

    // When an image is selected, set the URL and ID attributes on the block.
    const onSelectImage = media => {
      if (!media || !media.url) {
        setAttributes({
          dropCapImageURL: '',
          dropCapImageId: null
        });
        return;
      }

      // Try to set a sensible image size to avoid full size images being loaded.
      let selectedMediaURL = media.url;

      // The first check is for images already in the media library.
      // The second is for newly uploaded images.
      if (media.sizes) {
        if (media.sizes.bu_prepress_3x2_xs) {
          selectedMediaURL = media.sizes.bu_prepress_3x2_xs.url;
        } else if (media.sizes.thumbnail) {
          selectedMediaURL = media.sizes.thumbnail.url;
        } else if (media.sizes.medium) {
          selectedMediaURL = media.sizes.medium.url;
        }
      } else if (media.media_details) {
        if (media.media_details.sizes.bu_prepress_3x2_xs) {
          selectedMediaURL = media.media_details.sizes.bu_prepress_3x2_xs.source_url;
        } else if (media.media_details.sizes.thumbnail) {
          selectedMediaURL = media.media_details.sizes.thumbnail.source_url;
        } else if (media.media_details.sizes.medium) {
          selectedMediaURL = media.media_details.sizes.medium.source_url;
        }
      }
      setAttributes({
        dropCapImageURL: selectedMediaURL,
        dropCapImageId: media.id
      });
    };

    // When an image is removed, reset the URL and ID attributes on the block.
    const onRemoveImage = () => {
      setAttributes({
        dropCapImageURL: '',
        dropCapImageId: null
      });
    };

    // Render the settings panel used to assign color to a paragraph.
    const renderParagraphSettings = () => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
        title: __('Paragraph color'),
        colorSettings: [{
          value: paragraphColor.color,
          onChange: setParagraphColor,
          label: __('Paragraph'),
          disableCustomColors: true,
          colors: (0,_global_theme_options__WEBPACK_IMPORTED_MODULE_6__["default"])()
        }]
      });
    };

    // Render the settings panel used to assign color to a drop cap character.
    const renderDropCapColorSettings = () => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
        title: __('Drop cap color'),
        colorSettings: [{
          value: dropCapColor.color,
          onChange: setDropCapColor,
          label: __('Drop cap'),
          disableCustomColors: true,
          colors: (0,_global_theme_options__WEBPACK_IMPORTED_MODULE_6__["default"])()
        }]
      });
    };

    // Render the settings panel used to assign an image to a drop cap character.
    const renderDropCapImageSettings = () => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
        title: __('Drop cap image settings')
      }, '' !== dropCapImageURL && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
        onSelect: onSelectImage,
        value: dropCapImageId,
        render: ({
          open
        }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
          className: "components-toolbar__control",
          label: "Edit image",
          icon: "edit",
          onClick: open
        }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
          icon: "no-alt",
          onClick: onRemoveImage,
          className: "blocks-gallery-image__remove",
          label: "Remove image"
        }))
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: dropCapImageURL
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaPlaceholder, {
        key: "drop-cap-image",
        icon: "format-image",
        label: "Drop Cap Image",
        labels: {
          title: 'Drop Cap Image',
          name: 'images'
        },
        onSelect: onSelectImage
      }));
    };
    const classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, {
      'has-dropcap': hasDropCapStyle,
      [`has-dropcap-color-${dropCapColor.slug}`]: hasDropCapStyle && dropCapColor && dropCapColor.slug,
      [`has-paragraph-color-${paragraphColor.slug}`]: !hasDropCapStyle && paragraphColor && paragraphColor.slug
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, !hasDropCapStyle && renderParagraphSettings(), hasDropCapStyle && !isImageDropCap && renderDropCapColorSettings(), hasDropCapStyle && isImageDropCap && renderDropCapImageSettings()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classes
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      tagname: "h4",
      value: heading,
      onChange: heading => setAttributes({
        heading
      }),
      placeholder: __('Enter Teaser Headline (optional)')
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      multiline: "li",
      tagname: "ul",
      onChange: listValues => setAttributes({
        list: listValues
      }),
      value: list,
      wrapperClassName: "wp-block-editorial-introparagraph-toc",
      placeholder: __('Enter Teaser Intro List (optional)'),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_3__["default"])('formattingControls', ['link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_3__["default"])('allowedFormats', ['core/link'])
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-introparagraph-content"
    }, isImageDropCap && renderDropCapSVG(dropCapCharacter, dropCapImageURL), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagname: "p",
      value: content,
      onChange: content => setAttributes({
        content
      }),
      placeholder: __('Write paragraph…'),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_3__["default"])('formattingControls', ['bold', 'italic']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_3__["default"])('allowedFormats', ['core/bold', 'core/italic']),
      unstableOnSplit: insertBlocksAfter ? (before, after, ...blocks) => {
        setAttributes({
          content: before
        });
        insertBlocksAfter([...blocks, createBlock('core/paragraph', {
          content: after
        })]);
      } : undefined
    }))));
  }),
  save({
    attributes
  }) {
    const {
      heading,
      list,
      content,
      dropCapColor,
      dropCapImageURL,
      paragraphColor,
      className
    } = attributes;
    let isImageDropCap = false;
    if ('undefined' !== typeof className) {
      // Determine if the drop cap SVG should be included in content.
      isImageDropCap = className.includes('is-style-dropcap-image');
    }

    // Pull the first character from the article content use in the drop cap SVG.
    let dropCapCharacter = '';
    if ('undefined' !== typeof content) {
      dropCapCharacter = content.charAt(0);
    }

    // Determine if the list is empty and should be excluded from the saved block.
    let saveList = true;
    if ('undefined' === typeof list || '<li></li>' === list || RichText.isEmpty(list)) {
      saveList = false;
    }

    // Determine if a sepecific dropcap style has been selected.
    const hasDropCapStyle = className && className.includes('is-style-dropcap');
    const classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, {
      'has-dropcap': hasDropCapStyle,
      [`has-dropcap-color-${dropCapColor}`]: hasDropCapStyle && dropCapColor,
      [`has-paragraph-color-${paragraphColor}`]: !hasDropCapStyle && paragraphColor
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classes
    }, !RichText.isEmpty(heading) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "h4",
      value: heading
    }), saveList && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "ul",
      className: "wp-block-editorial-introparagraph-toc",
      value: list,
      multiline: "li"
    }), !RichText.isEmpty(content) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-introparagraph-content"
    }, isImageDropCap && renderDropCapSVG(dropCapCharacter, dropCapImageURL), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      value: content
    })));
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_7__["default"]
});

/***/ }),

/***/ "./src/blocks/leadin/leadin.js":
/*!*************************************!*\
  !*** ./src/blocks/leadin/leadin.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/leadin/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/leadin/editor.scss");
/* harmony import */ var _global_theme_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/theme-options */ "./src/global/theme-options.js");
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");
/* harmony import */ var _global_publication_slug__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/publication-slug */ "./src/global/publication-slug.js");
/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/background */ "./src/components/background/index.js");
/* harmony import */ var _components_block_icons___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/block-icons/ */ "./src/components/block-icons/index.js");

/**
 * BLOCK: bu/leadin
 *
 * Register a leadin block with Gutenberg.
 */

// External dependencies.


// Import CSS.



// Internal dependencies






// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  Fragment,
  useState
} = wp.element;
const {
  PanelBody,
  Path,
  RangeControl,
  SelectControl,
  SVG,
  ToggleControl
} = wp.components;
const {
  InspectorControls,
  PanelColorSettings,
  RichText,
  URLInput,
  withColors
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  applyFilters
} = wp.hooks;

// Block attributes.
const blockAttributes = {
  head: {
    type: 'string'
  },
  deck: {
    type: 'string'
  },
  caption: {
    type: 'string'
  },
  imageFocus: {
    type: 'string',
    default: 'center-middle'
  },
  textPositionX: {
    type: 'string',
    default: 'x-center'
  },
  textPositionY: {
    type: 'string',
    default: ''
  },
  wide: {
    type: 'boolean',
    default: false
  },
  box: {
    type: 'boolean',
    default: false
  },
  flip: {
    type: 'boolean',
    default: false
  },
  className: {
    type: 'string'
  },
  themeColor: {
    type: 'string'
  },
  primaryTerm: {
    type: 'string'
  },
  metabar: {
    type: 'boolean',
    default: true
  },
  metabardate: {
    type: 'boolean',
    default: false
  },
  boxOpacity: {
    type: 'number',
    default: 100
  },
  videoUncropped: {
    type: 'boolean',
    default: false
  },
  url: {
    type: 'string',
    default: ''
  },
  ..._components_background__WEBPACK_IMPORTED_MODULE_7__.BackgroundAttributes
};

// Block styles.
const blockStyles = [{
  name: 'default',
  label: __('Default (uncropped unscaled)'),
  isDefault: true
}, {
  name: 'default-alt',
  label: __('Default Alternate Order'),
  isDefault: true
}, {
  name: 'text-to-image',
  label: __('Text over Horizontal Image')
}, {
  name: 'image-to-text',
  label: __('Horizontal Image over Text')
}, {
  name: 'emphasis-on-text',
  label: __('Overlapping Text')
}, {
  name: 'text-over-image',
  label: __('Image with Text Overlay')
}, {
  name: 'side-by-side',
  label: __('Vertical Image and Text Side By Side')
}];
const blockSupports = {
  className: false,
  customClassName: false,
  multiple: false
};
registerBlockType('bu/leadin', {
  title: __('Leadin'),
  description: __('The opening headline and image of an article.'),
  icon: (0,_components_block_icons___WEBPACK_IMPORTED_MODULE_8__["default"])('leadin'),
  category: 'bu',
  attributes: blockAttributes,
  styles: blockStyles,
  supports: blockSupports,
  edit: withColors('themeColor')(props => {
    // Get the block properties and attributes.
    const {
      attributes: {
        backgroundId,
        backgroundUrl,
        backgroundAutoplay,
        head,
        deck,
        caption,
        imageFocus,
        textPositionX,
        textPositionY,
        wide,
        box,
        flip,
        metabar,
        metabardate,
        boxOpacity,
        videoUncropped,
        url
      },
      themeColor,
      setThemeColor,
      setAttributes,
      className,
      isSelected
    } = props;
    const [isUploading, setIsUploading] = useState(false);
    const isStyleEmphasisOnText = className.includes('is-style-emphasis-on-text');
    const isStyleTextOverImage = className.includes('is-style-text-over-image');
    const isStyleSideBySide = className.includes('is-style-side-by-side');
    const isStyleTextToImage = className.includes('is-style-text-to-image');
    const isStyleImageToText = className.includes('is-style-image-to-text');
    const publication = (0,_global_publication_slug__WEBPACK_IMPORTED_MODULE_6__["default"])();
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()('wp-block-editorial-leadin', {
      [`${publication}-block-editorial-leadin`]: publication !== ''
    }, className, {
      'has-box': box && (isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide),
      'has-wider': wide && isStyleSideBySide,
      'has-flip': flip && isStyleSideBySide,
      'has-media': backgroundUrl,
      'has-video-as-loop': backgroundAutoplay,
      'has-video-uncropped': videoUncropped,
      [`has-media-focus-${imageFocus}`]: imageFocus,
      [`has-text-position-${textPositionX}`]: textPositionX && isStyleTextOverImage,
      [`has-text-position-${textPositionY}`]: textPositionY && isStyleTextOverImage,
      [`has-${themeColor.slug}-theme`]: themeColor.slug
    });
    const boxClasses = classnames__WEBPACK_IMPORTED_MODULE_1___default()('container-words-inner', {
      [`has-opacity-${boxOpacity}`]: boxOpacity !== 100 && box && (isStyleEmphasisOnText || isStyleTextOverImage)
    });

    // Return the background media positioning controls if a background is set.
    const mediaPositioningControls = () => {
      if (!backgroundId) {
        return null;
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
        title: __('Media Positioning'),
        initialOpen: false
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
        label: __('Crop Media to:'),
        value: imageFocus,
        onChange: value => setAttributes({
          imageFocus: value
        }),
        options: [{
          value: 'left-top',
          label: __('Left Top')
        }, {
          value: 'left-middle',
          label: __('Left Center')
        }, {
          value: 'left-bottom',
          label: __('Left Bottom')
        }, {
          value: 'center-top',
          label: __('Center Top')
        }, {
          value: 'center-middle',
          label: __('Center')
        }, {
          value: 'center-bottom',
          label: __('Center Bottom')
        }, {
          value: 'right-top',
          label: __('Right Top')
        }, {
          value: 'right-middle',
          label: __('Right Center')
        }, {
          value: 'right-bottom',
          label: __('Right Bottom')
        }]
      }));
    };

    // Return the text positioning controls if the 'Image with Text Overlay' style is set.
    const textPositioningControls = () => {
      if (!isStyleTextOverImage) {
        return null;
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
        label: __('Horizontal Text Positioning'),
        value: textPositionX,
        onChange: value => setAttributes({
          textPositionX: value
        }),
        options: [{
          value: 'x-left',
          label: __('Left')
        }, {
          value: 'x-center',
          label: __('Center')
        }, {
          value: 'x-right',
          label: __('Right')
        }]
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
        label: __('Vertical Text Positioning'),
        value: textPositionY,
        onChange: value => setAttributes({
          textPositionY: value
        }),
        options: [{
          value: 'y-top',
          label: __('Top')
        }, {
          value: '',
          label: __('Center')
        }, {
          value: 'y-bottom',
          label: __('Bottom')
        }]
      }));
    };

    // Return layout controls for the 'Vertical Image and Text Side By Side' style.
    const sideBySideLayoutControls = () => {
      if (!className.includes('is-style-side-by-side')) {
        return null;
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
        label: __('Flip Order'),
        checked: flip,
        onChange: () => setAttributes({
          flip: !flip
        })
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
        label: __('Wide Layout'),
        checked: wide,
        onChange: () => setAttributes({
          wide: !wide
        })
      }));
    };

    // Return layout options if specific styles are set.
    const layoutControls = () => {
      if (!(isStyleEmphasisOnText || isStyleTextOverImage || isStyleSideBySide)) {
        return null;
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
        title: __('Layout Options')
      }, sideBySideLayoutControls(), textPositioningControls(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
        label: __('Boxed Text'),
        checked: box,
        onChange: () => setAttributes({
          box: !box
        })
      }), box && (isStyleEmphasisOnText || isStyleTextOverImage) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
        label: __('Box Opacity'),
        value: boxOpacity,
        onChange: value => setAttributes({
          boxOpacity: value
        }),
        min: 10,
        max: 100,
        step: 10
      }));
    };

    // Return video cropping options if specific styles are set.
    const videoCropControls = () => {
      if (!(isStyleTextToImage || isStyleImageToText)) {
        return null;
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
        title: __('Video Options')
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
        label: __('Leave Video Uncropped'),
        checked: videoUncropped,
        onChange: () => setAttributes({
          videoUncropped: !videoUncropped
        })
      }));
    };

    // Return the block editing interface.
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_7__.BackgroundControls, {
      blockProps: props,
      setIsUploading: setIsUploading
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: classes
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container-lockup"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-leadin-media"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_7__["default"], {
      blockProps: props,
      isUploading: isUploading
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container-words-outer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: boxClasses
    }, applyFilters('buPrepress.PrimaryTerm', '', props), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h1",
      className: "head",
      placeholder: __('Add headline'),
      value: head,
      onChange: value => setAttributes({
        head: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('formattingControls', ['bold', 'italic']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('allowedFormats', ['core/bold', 'core/italic']),
      keepPlaceholderOnFocus: true
    }), (!RichText.isEmpty(deck) || isSelected) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h4",
      className: "deck",
      placeholder: __('Add subheader (optional)'),
      value: deck,
      onChange: value => setAttributes({
        deck: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('formattingControls', ['bold', 'italic']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('allowedFormats', ['core/bold', 'core/italic'])
    })))), (!RichText.isEmpty(caption) || isSelected) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      className: "wp-block-editorial-leadin-caption wp-prepress-component-caption",
      placeholder: __('Add a caption and/or media credit…'),
      value: caption,
      onChange: value => setAttributes({
        caption: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('formattingControls', ['bold', 'italic', 'link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link']),
      keepPlaceholderOnFocus: true
    })), applyFilters('buBlocks.leadin.metaBar', '', metabar, metabardate), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, mediaPositioningControls(), videoCropControls(), layoutControls(), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Color Settings'),
      initialOpen: false,
      colorSettings: [{
        value: themeColor.color,
        onChange: setThemeColor,
        label: __('Theme'),
        disableCustomColors: true,
        colors: (0,_global_theme_options__WEBPACK_IMPORTED_MODULE_4__["default"])()
      }]
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      className: "components-panel__body-bu-leadin-block-url bu-blocks-leadin-block-url-input",
      title: __('URL')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "description"
    }, "Link the leadin block to a story. (Optional)"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLInput, {
      value: url,
      onChange: value => setAttributes({
        url: value
      })
    }))));
  }),
  save() {
    // Rendering handled in PHP.
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/listicle/deprecated.js":
/*!*******************************************!*\
  !*** ./src/blocks/listicle/deprecated.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/listicle/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/listicle/editor.scss");
/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/background */ "./src/components/background/index.js");
/* harmony import */ var _components_share_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/share-tools */ "./src/components/share-tools/index.js");
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");
/* harmony import */ var _components_block_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/block-icons */ "./src/components/block-icons/index.js");

/**
 * BLOCK: editorial/listicle
 *
 * Register a listicle block with Gutenberg.
 */

// External dependencies.


// Import CSS.



// Internal dependencies.





// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  PanelBody,
  ToggleControl
} = wp.components;
const {
  InspectorControls,
  RichText,
  PlainText
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  useEffect,
  useState
} = wp.element;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string}  className          Default classes assigned to the block.
 * @param {string}  number             Value of the number attribute.
 * @param {string}  aside              Whether the block has aside content.
 * @param {number}  backgroundUrl      The URL of the background media assigned to the block.
 * @param {boolean} backgroundAutoplay Whether the background video is set to autoplay.
 * @param           divider
 */
const getClasses = (className, number, aside, backgroundUrl, backgroundAutoplay, divider) => {
  return classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    'has-number': number,
    'has-sidebar': aside,
    'has-media': backgroundUrl,
    'has-video-as-loop': backgroundAutoplay,
    'has-no-bottom-divider': !divider
  });
};

/**
 * Determine if the related links list is empty.
 *
 * @param {string} related The value of the `related` attribute.
 */
const hasRelatedLinks = related => {
  if ('undefined' === typeof related || '<li></li>' === related || RichText.isEmpty(related)) {
    return false;
  }
  return true;
};
const deprecated = [{
  title: __('Listicle'),
  description: __('An individual item for an article that uses a list as its thematic structure.'),
  icon: (0,_components_block_icons__WEBPACK_IMPORTED_MODULE_7__["default"])('listicle'),
  category: 'bu-editorial',
  attributes: {
    hed: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-listicle-header-content-hed'
    },
    dek: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-listicle-header-content-dek'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-listicle-section-content'
    },
    aside: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-listicle-section-aside p'
    },
    number: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-listicle-header-number'
    },
    related: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-listicle-footer-list'
    },
    credit: {
      type: 'string',
      source: 'html',
      selector: '.wp-caption-text'
    },
    className: {
      type: 'string',
      default: ''
    },
    divider: {
      type: 'boolean',
      default: true
    },
    ..._components_background__WEBPACK_IMPORTED_MODULE_4__.BackgroundAttributes,
    ..._components_share_tools__WEBPACK_IMPORTED_MODULE_5__.ShareToolsAttributes
  },
  edit(props) {
    // Get the block properties.
    const {
      attributes,
      setAttributes,
      className,
      isSelected
    } = props;

    // Get the block attributes.
    const {
      hed,
      dek,
      content,
      aside,
      number,
      related,
      credit,
      backgroundUrl,
      backgroundAutoplay,
      backgroundCaption,
      divider
    } = attributes;
    const [isUploading, setIsUploading] = useState(false);

    /**
     * Update credit attribute with the caption of the selected image.
     *
     * @param {Object} prevProps The property values before the change.
     */
    useEffect(() => {
      // Stop here if the `backgroundCaption` attribute hasn't changed.
      if (backgroundCaption === backgroundCaption) {
        return;
      }

      // Stop here if the `credit` attribute is already set.
      if (!!credit || !backgroundCaption) {
        return;
      }

      // Update the `credit` attribute using the caption from the selected image.
      setAttributes({
        credit: backgroundCaption
      });
    }, []);

    // Check if the block has aside content (extra condition due to use of multiline).
    const hasAsideContent = !RichText.isEmpty(aside) && aside !== '<br>';

    /**
     * Get a value to use for the inline width of the number input.
     *
     * Returns either 100% if the field is empty, or `{n}ch`,
     * where `{n}` is the number of characters in the input.
     *
     */
    const getNumberInputWidth = number ? number.length + 'ch' : '100%';

    // Return the block editing interface.
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: getClasses(className, number, hasAsideContent, backgroundUrl, backgroundAutoplay, divider)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__.BackgroundControls, {
      blockProps: props,
      inlinePlaceholder: true,
      setIsUploading: setIsUploading,
      options: []
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_share_tools__WEBPACK_IMPORTED_MODULE_5__.ShareToolsControls, {
      blockProps: props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "wp-block-editorial-listicle-article"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: "wp-block-editorial-listicle-figure"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__["default"], {
      blockProps: props,
      isUploading: isUploading
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "figcaption",
      className: "wp-caption-text wp-block-editorial-listicle-caption wp-prepress-component-caption",
      value: credit,
      onChange: value => setAttributes({
        credit: value
      }),
      placeholder: __('Add Photo or Video Credit…'),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('formattingControls', ['bold', 'italic', 'link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link']),
      keepPlaceholderOnFocus: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
      className: "wp-block-editorial-listicle-header"
    }, (number || isSelected) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "wp-block-editorial-listicle-header-number"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      placeholder: __('Add Item Number (Optional)…'),
      value: number,
      onChange: number => setAttributes({
        number
      }),
      style: {
        width: getNumberInputWidth
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-listicle-header-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h3",
      className: "wp-block-editorial-listicle-header-content-hed",
      placeholder: __('Add Title…'),
      value: hed,
      onChange: value => setAttributes({
        hed: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('formattingControls', ['bold', 'italic']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('allowedFormats', ['core/bold', 'core/italic'])
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h4",
      className: "wp-block-editorial-listicle-header-content-dek",
      placeholder: __('Add Subtitle…'),
      value: dek,
      onChange: value => setAttributes({
        dek: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('formattingControls', ['bold', 'italic']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('allowedFormats', ['core/bold', 'core/italic'])
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "wp-block-editorial-listicle-section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "div",
      className: "wp-block-editorial-listicle-section-content",
      multiline: "p",
      placeholder: __('Add Content… lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in dictum felis. Nullam gravida dui nunc, vitae tristique ex pellentesque at. Suspendisse id porttitor metus. Nullam et ipsum hendrerit urna mattis porttitor at in leo.'),
      value: content,
      onChange: value => setAttributes({
        content: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('formattingControls', ['bold', 'italic', 'link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link'])
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-listicle-section-meta"
    }, (hasAsideContent || isSelected) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
      className: "wp-block-editorial-listicle-section-aside"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      placeholder: __('Add Sidebar (Optional)…'),
      value: aside,
      onChange: value => setAttributes({
        aside: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('formattingControls', ['bold', 'italic', 'link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link'])
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_share_tools__WEBPACK_IMPORTED_MODULE_5__["default"], {
      blockProps: props
    }))), (hasRelatedLinks(related) || isSelected) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer", {
      className: "wp-block-editorial-listicle-footer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "wp-block-editorial-listicle-footer-title"
    }, "Related Stories"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "ul",
      multiline: "li",
      className: "wp-block-editorial-listicle-footer-list",
      placeholder: __('Enter Related Stories List…'),
      value: related,
      onChange: value => setAttributes({
        related: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('formattingControls', ['link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('allowedFormats', ['core/link'])
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Display Options')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Show Bottom Divider'),
      checked: divider,
      onChange: () => setAttributes({
        divider: !divider
      })
    }))));
  },
  save(props) {
    // Get the block properties we need.
    const {
      attributes
    } = props;

    // Get the block attributes.
    const {
      hed,
      dek,
      content,
      aside,
      number,
      related,
      credit,
      backgroundUrl,
      backgroundAutoplay,
      className,
      divider
    } = attributes;

    // Return the block rendering for the front end.
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: getClasses(className, number, aside, backgroundUrl, backgroundAutoplay, divider)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "wp-block-editorial-listicle-article"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: "wp-block-editorial-listicle-figure"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__["default"], {
      blockProps: props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "figcaption",
      className: "wp-caption-text wp-block-editorial-listicle-caption wp-prepress-component-caption",
      value: credit
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
      className: "wp-block-editorial-listicle-header"
    }, number && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "wp-block-editorial-listicle-header-number"
    }, number), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-listicle-header-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "h3",
      className: "wp-block-editorial-listicle-header-content-hed",
      value: hed
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "h4",
      className: "wp-block-editorial-listicle-header-content-dek",
      value: dek
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "wp-block-editorial-listicle-section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "div",
      className: "wp-block-editorial-listicle-section-content",
      value: content,
      multiline: "p"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-listicle-section-meta"
    }, !RichText.isEmpty(aside) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
      className: "wp-block-editorial-listicle-section-aside"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      value: aside
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_share_tools__WEBPACK_IMPORTED_MODULE_5__["default"], {
      blockProps: props
    }))), hasRelatedLinks(related) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer", {
      className: "wp-block-editorial-listicle-footer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "wp-block-editorial-listicle-footer-title"
    }, "Related Stories"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "ul",
      className: "wp-block-editorial-listicle-footer-list",
      value: related,
      multiline: "li"
    }))));
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/blocks/listicle/listicle.js":
/*!*****************************************!*\
  !*** ./src/blocks/listicle/listicle.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/listicle/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/listicle/editor.scss");
/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/background */ "./src/components/background/index.js");
/* harmony import */ var _components_share_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/share-tools */ "./src/components/share-tools/index.js");
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");
/* harmony import */ var _components_block_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/block-icons */ "./src/components/block-icons/index.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./deprecated */ "./src/blocks/listicle/deprecated.js");

/**
 * BLOCK: editorial/listicle
 *
 * Register a listicle block with Gutenberg.
 */

// External dependencies.


// Import CSS.



// Internal dependencies.






// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  PanelBody,
  ToggleControl
} = wp.components;
const {
  InspectorControls,
  RichText,
  PlainText
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  useEffect,
  useState
} = wp.element;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string}  className          Default classes assigned to the block.
 * @param {string}  number             Value of the number attribute.
 * @param {string}  aside              Whether the block has aside content.
 * @param {number}  backgroundUrl      The URL of the background media assigned to the block.
 * @param {boolean} backgroundAutoplay Whether the background video is set to autoplay.
 * @param           divider
 */
const getClasses = (className, number, aside, backgroundUrl, backgroundAutoplay, divider) => {
  return classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    'has-number': number,
    'has-sidebar': aside,
    'has-media': backgroundUrl,
    'has-video-as-loop': backgroundAutoplay,
    'has-no-bottom-divider': !divider
  });
};

/**
 * Determine if the related links list is empty.
 *
 * @param {string} related The value of the `related` attribute.
 */
const hasRelatedLinks = related => {
  if ('undefined' === typeof related || '<li></li>' === related || RichText.isEmpty(related)) {
    return false;
  }
  return true;
};

// Register the block.
registerBlockType('editorial/listicle', {
  title: __('Listicle'),
  description: __('An individual item for an article that uses a list as its thematic structure.'),
  icon: (0,_components_block_icons__WEBPACK_IMPORTED_MODULE_7__["default"])('listicle'),
  category: 'bu-editorial',
  attributes: {
    hed: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-listicle-header-content-hed'
    },
    dek: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-listicle-header-content-dek'
    },
    content: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-listicle-section-content'
    },
    aside: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-listicle-section-aside p'
    },
    number: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-listicle-header-number'
    },
    related: {
      type: 'string',
      source: 'html',
      selector: '.wp-block-editorial-listicle-footer-list'
    },
    credit: {
      type: 'string',
      source: 'html',
      selector: '.wp-caption-text'
    },
    className: {
      type: 'string',
      default: ''
    },
    divider: {
      type: 'boolean',
      default: true
    },
    ..._components_background__WEBPACK_IMPORTED_MODULE_4__.BackgroundAttributes,
    ..._components_share_tools__WEBPACK_IMPORTED_MODULE_5__.ShareToolsAttributes
  },
  edit(props) {
    // Get the block properties.
    const {
      attributes,
      setAttributes,
      className,
      isSelected
    } = props;

    // Get the block attributes.
    const {
      hed,
      dek,
      content,
      aside,
      number,
      related,
      credit,
      backgroundUrl,
      backgroundAutoplay,
      backgroundCaption,
      divider
    } = attributes;
    const [isUploading, setIsUploading] = useState(false);

    /**
     * Update credit attribute with the caption of the selected image.
     *
     * @param {Object} prevProps The property values before the change.
     */
    useEffect(() => {
      // Stop here if the `backgroundCaption` attribute hasn't changed.
      if (backgroundCaption === backgroundCaption) {
        return;
      }

      // Stop here if the `credit` attribute is already set.
      if (!!credit || !backgroundCaption) {
        return;
      }

      // Update the `credit` attribute using the caption from the selected image.
      setAttributes({
        credit: backgroundCaption
      });
    }, []);

    // Check if the block has aside content (extra condition due to use of multiline).
    const hasAsideContent = !RichText.isEmpty(aside) && aside !== '<br>';

    /**
     * Get a value to use for the inline width of the number input.
     *
     * Returns either 100% if the field is empty, or `{n}ch`,
     * where `{n}` is the number of characters in the input.
     *
     */
    const getNumberInputWidth = number ? number.length + 'ch' : '100%';

    // Return the block editing interface.
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: getClasses(className, number, hasAsideContent, backgroundUrl, backgroundAutoplay, divider)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__.BackgroundControls, {
      blockProps: props,
      inlinePlaceholder: true,
      setIsUploading: setIsUploading,
      options: []
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_share_tools__WEBPACK_IMPORTED_MODULE_5__.ShareToolsControls, {
      blockProps: props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "wp-block-editorial-listicle-article"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: "wp-block-editorial-listicle-figure"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__["default"], {
      blockProps: props,
      isUploading: isUploading
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "figcaption",
      className: "wp-caption-text wp-block-editorial-listicle-caption wp-prepress-component-caption",
      value: credit,
      onChange: value => setAttributes({
        credit: value
      }),
      placeholder: __('Add Photo or Video Credit…'),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('formattingControls', ['bold', 'italic', 'link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link']),
      keepPlaceholderOnFocus: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
      className: "wp-block-editorial-listicle-header"
    }, (number || isSelected) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "wp-block-editorial-listicle-header-number"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      placeholder: __('Add Item Number (Optional)…'),
      value: number,
      onChange: number => setAttributes({
        number
      }),
      style: {
        width: getNumberInputWidth
      }
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-listicle-header-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h3",
      className: "wp-block-editorial-listicle-header-content-hed",
      placeholder: __('Add Title…'),
      value: hed,
      onChange: value => setAttributes({
        hed: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('formattingControls', ['bold', 'italic']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('allowedFormats', ['core/bold', 'core/italic'])
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h4",
      className: "wp-block-editorial-listicle-header-content-dek",
      placeholder: __('Add Subtitle…'),
      value: dek,
      onChange: value => setAttributes({
        dek: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('formattingControls', ['bold', 'italic']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('allowedFormats', ['core/bold', 'core/italic'])
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "wp-block-editorial-listicle-section"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "div",
      className: "wp-block-editorial-listicle-section-content",
      multiline: "p",
      placeholder: __('Add Content… lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in dictum felis. Nullam gravida dui nunc, vitae tristique ex pellentesque at. Suspendisse id porttitor metus. Nullam et ipsum hendrerit urna mattis porttitor at in leo.'),
      value: content,
      onChange: value => setAttributes({
        content: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('formattingControls', ['bold', 'italic', 'link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link'])
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-listicle-section-meta"
    }, (hasAsideContent || isSelected) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
      className: "wp-block-editorial-listicle-section-aside"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      placeholder: __('Add Sidebar (Optional)…'),
      value: aside,
      onChange: value => setAttributes({
        aside: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('formattingControls', ['bold', 'italic', 'link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link'])
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_share_tools__WEBPACK_IMPORTED_MODULE_5__["default"], {
      blockProps: props
    }))), (hasRelatedLinks(related) || isSelected) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer", {
      className: "wp-block-editorial-listicle-footer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "wp-block-editorial-listicle-footer-title"
    }, "Related Stories"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "ul",
      multiline: "li",
      className: "wp-block-editorial-listicle-footer-list",
      placeholder: __('Enter Related Stories List…'),
      value: related,
      onChange: value => setAttributes({
        related: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('formattingControls', ['link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_6__["default"])('allowedFormats', ['core/link'])
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Display Options')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: __('Show Bottom Divider'),
      checked: divider,
      onChange: () => setAttributes({
        divider: !divider
      })
    }))));
  },
  save(props) {
    // Get the block properties we need.
    const {
      attributes
    } = props;

    // Get the block attributes.
    const {
      hed,
      dek,
      content,
      aside,
      number,
      related,
      credit,
      backgroundUrl,
      backgroundAutoplay,
      className,
      divider
    } = attributes;

    // Return the block rendering for the front end.
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: getClasses(className, number, aside, backgroundUrl, backgroundAutoplay, divider)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
      className: "wp-block-editorial-listicle-article"
    }, (backgroundUrl || credit) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: "wp-block-editorial-listicle-figure"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__["default"], {
      blockProps: props
    }), credit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "figcaption",
      className: "wp-caption-text wp-block-editorial-listicle-caption wp-prepress-component-caption",
      value: credit
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", {
      className: "wp-block-editorial-listicle-header"
    }, number && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
      className: "wp-block-editorial-listicle-header-number"
    }, number), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-listicle-header-content"
    }, hed && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "h3",
      className: "wp-block-editorial-listicle-header-content-hed",
      value: hed
    }), dek && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "h4",
      className: "wp-block-editorial-listicle-header-content-dek",
      value: dek
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
      className: "wp-block-editorial-listicle-section"
    }, !RichText.isEmpty(content) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "div",
      className: "wp-block-editorial-listicle-section-content",
      value: content,
      multiline: "p"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-listicle-section-meta"
    }, !RichText.isEmpty(aside) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
      className: "wp-block-editorial-listicle-section-aside"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      value: aside
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_share_tools__WEBPACK_IMPORTED_MODULE_5__["default"], {
      blockProps: props
    }))), hasRelatedLinks(related) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer", {
      className: "wp-block-editorial-listicle-footer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "wp-block-editorial-listicle-footer-title"
    }, "Related Stories"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "ul",
      className: "wp-block-editorial-listicle-footer-list",
      value: related,
      multiline: "li"
    }))));
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./src/blocks/modal/edit.js":
/*!**********************************!*\
  !*** ./src/blocks/modal/edit.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_theme_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/theme-options */ "./src/global/theme-options.js");
/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/background */ "./src/components/background/index.js");
/* harmony import */ var _components_allowed_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/allowed-blocks */ "./src/components/allowed-blocks/index.js");
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");

/**
 * Edit function for the modal block.
 */

// External dependencies.


// Internal dependencies.





// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  compose
} = wp.compose;
const {
  Fragment,
  useState,
  useEffect
} = wp.element;
const {
  InspectorControls,
  InnerBlocks,
  PanelColorSettings,
  RichText,
  withColors,
  useBlockProps
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  select
} = wp.data;

// Populate selectors that were in core/editor until WordPress 5.2 and are
// now located in core/block-editor.
const {
  hasSelectedInnerBlock,
  isBlockSelected
} = 'undefined' === typeof select('core/block-editor') ? select('core/editor') : select('core/block-editor');

// Only allow images in the background component for this block.
const allowedMedia = ['image'];
const BUEditorialModalEdit = props => {
  const {
    attributes,
    themeColor,
    setThemeColor,
    setAttributes,
    className,
    clientId
  } = props;
  const {
    backgroundId,
    calloutHeading,
    calloutText,
    trigger
  } = attributes;
  const [isUploading, setIsUploading] = useState(false);
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    [`has-${themeColor.slug}-theme`]: themeColor.slug,
    'has-media': backgroundId
  });

  // ToDo: explore removing this and using just the CSS classes .is-selected and .has-selected-child.
  const modalSelected = clientId => {
    if (clientId) {
      const modalHasSelectedBlock = hasSelectedInnerBlock(clientId, true) || isBlockSelected(clientId);
      return modalHasSelectedBlock ? 'true' : 'false';
    }
    return 'false';
  };
  const blockProps = useBlockProps({
    className: classes,
    'data-selected-modal': modalSelected(clientId)
  });
  useEffect(() => {
    // Set the clientId attribute so it can be accessed in the `getEditWrapperProps` function.
    if (hasSelectedInnerBlock(clientId, true) || isBlockSelected(clientId)) {
      setAttributes({
        clientId
      });
    }
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
    title: __('Theme Settings'),
    colorSettings: [{
      value: themeColor.color,
      onChange: setThemeColor,
      label: __('Theme'),
      disableCustomColors: true,
      colors: (0,_global_theme_options__WEBPACK_IMPORTED_MODULE_2__["default"])()
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_3__.BackgroundControls, {
    allowedMediaTypes: allowedMedia,
    blockProps: props,
    className: "banner-placeholder",
    placeholderText: __('Add Image'),
    setIsUploading: setIsUploading
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-editorial-modal-callout"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-editorial-modal-media"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "wp-block-editorial-modal-image"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_3__["default"], {
    blockProps: props,
    isUploading: isUploading
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-editorial-modal-callout-content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-valign"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    tagName: "h1",
    onChange: value => setAttributes({
      calloutHeading: value
    }),
    value: calloutHeading,
    placeholder: __('Enter heading…'),
    formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('formattingControls', []),
    allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('allowedFormats', [])
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    tagName: "p",
    onChange: value => setAttributes({
      calloutText: value
    }),
    value: calloutText,
    placeholder: __('Enter text…'),
    formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('formattingControls', ['bold', 'italic', 'link']),
    allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link'])
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-editorial-modal-trigger-wrapper"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    tagName: "p",
    className: "js-bu-block-modal-trigger-overlay button",
    onChange: value => setAttributes({
      trigger: value
    }),
    value: trigger,
    placeholder: __('Enter trigger label…'),
    formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('formattingControls', []),
    allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('allowedFormats', [])
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-editorial-modal-content js-bu-block-modal-overlay"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overlay overlay-scale"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "wp-block-editorial-modal-overlay-close js-bu-block-modal-overlay-close"
  }, "Close"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
    allowedBlocks: (0,_components_allowed_blocks__WEBPACK_IMPORTED_MODULE_4__["default"])()
  }))))));
};
/* harmony default export */ __webpack_exports__["default"] = (compose([withColors('themeColor')])(BUEditorialModalEdit));

/***/ }),

/***/ "./src/blocks/modal/modal.js":
/*!***********************************!*\
  !*** ./src/blocks/modal/modal.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/modal/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/modal/editor.scss");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/modal/edit.js");
/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/background */ "./src/components/background/index.js");
/* harmony import */ var _components_block_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/block-icons */ "./src/components/block-icons/index.js");

/**
 * BLOCK: editorial-modal
 *
 * A block with a callout for opening a modal with supplemental or complementary information.
 */

// External dependencies.


// Import CSS.



// Internal dependencies.




// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  getColorClassName,
  InnerBlocks,
  useBlockProps
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  select
} = wp.data;

// Populate selectors that were in core/editor until WordPress 5.2 and are
// now located in core/block-editor.
const {
  hasSelectedInnerBlock,
  isBlockSelected
} = 'undefined' === typeof select('core/block-editor') ? select('core/editor') : select('core/block-editor');

// Register the block.
registerBlockType('editorial/modal', {
  apiVersion: 2,
  title: __('Modal'),
  description: __('A block with a callout for opening a modal with supplemental or complementary information.'),
  icon: (0,_components_block_icons__WEBPACK_IMPORTED_MODULE_6__["default"])('modal'),
  category: 'bu-editorial',
  supports: {
    align: true
  },
  attributes: {
    clientId: {
      type: 'number'
    },
    themeColor: {
      type: 'string'
    },
    calloutHeading: {
      type: 'array',
      source: 'children',
      selector: 'h1'
    },
    calloutText: {
      type: 'array',
      source: 'children',
      selector: '.editorial-modal-callout-text'
    },
    trigger: {
      type: 'array',
      source: 'children',
      selector: '.js-bu-block-modal-trigger-overlay'
    },
    ..._components_background__WEBPACK_IMPORTED_MODULE_5__.BackgroundAttributes
  },
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  save(props) {
    const {
      attributes,
      className
    } = props;
    const {
      themeColor,
      calloutHeading,
      calloutText,
      trigger,
      backgroundId
    } = attributes;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'js-bu-block-modal', {
      [getColorClassName('theme', themeColor)]: getColorClassName('theme', themeColor),
      'has-media': backgroundId
    });
    const blockProps = useBlockProps.save({
      className: classes
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-modal-callout"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-modal-media"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: "wp-block-editorial-modal-image"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_5__["default"], {
      blockProps: props,
      className: "banner-placeholder"
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-modal-callout-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-valign"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", null, calloutHeading), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "editorial-modal-callout-text"
    }, calloutText), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "js-bu-block-modal-trigger-overlay button"
    }, trigger))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-modal-content js-bu-block-modal-overlay"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "overlay overlay-scale"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: "#",
      className: "wp-block-editorial-modal-overlay-close js-bu-block-modal-overlay-close"
    }, "Close"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)))));
  }
});

/***/ }),

/***/ "./src/blocks/photoessay/photoessay-image.js":
/*!***************************************************!*\
  !*** ./src/blocks/photoessay/photoessay-image.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");

/**
 * BLOCK: editorial/photoessay/image
 *
 * Register an individual image block for the photo essay block.
 *
 * Instead of using InnerBlocks with the default image block as the only
 * allowed block, this is a simplified version of the default image block.
 * This approach will prevent an extra block layer that could confuse users,
 * avoids the alignment options of the default image block, and may help with
 * the modal functionality of the photo essay block.
 */



// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  IconButton,
  PanelBody,
  Toolbar
} = wp.components;
const {
  Fragment
} = wp.element;
const {
  BlockControls,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck,
  RichText
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  addFilter
} = wp.hooks;
const {
  createHigherOrderComponent
} = wp.compose;

// Register the block.
registerBlockType('editorial/photoessay-image', {
  title: __('Photo Essay Image'),
  description: __('An individual image block for use in photo essay rows.'),
  icon: 'format-image',
  category: 'bu-editorial',
  parent: ['editorial/photoessay'],
  attributes: {
    id: {
      type: 'number'
    },
    url: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src'
    },
    alt: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'alt',
      default: ''
    },
    caption: {
      type: 'string'
    },
    columnClass: {
      type: 'string'
    }
  },
  supports: {
    className: false,
    customClassName: false,
    html: false,
    inserter: false,
    reusable: false
  },
  getEditWrapperProps({
    columnClass
  }) {
    return {
      className: 'wp-block editor-block-list__block block-editor-block-list__block ' + columnClass
    };
  },
  edit({
    attributes,
    setAttributes,
    isSelected
  }) {
    const {
      id,
      url,
      alt,
      columnClass,
      caption
    } = attributes;

    // Set attributes when an image is selected.
    const onSelectImage = media => {
      if (!media || !media.id || !media.url) {
        onRemoveImage();
        return;
      }
      setAttributes({
        id: media.id,
        url: media.sizes.large ? media.sizes.large.url : media.url,
        alt: media.alt
      });
    };

    // Reset attributes when an image is removed.
    const onRemoveImage = () => {
      setAttributes({
        id: undefined,
        url: undefined,
        alt: undefined
      });
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-photoessay-media"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, !url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaPlaceholder, {
      icon: "format-image",
      label: "Image",
      labels: {
        title: 'Image',
        name: 'images'
      },
      onSelect: onSelectImage,
      allowedTypes: ['image']
    }), url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, isSelected && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
      onSelect: onSelectImage,
      value: id,
      allowedTypes: ['image'],
      render: ({
        open
      }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
        className: "components-toolbar__control",
        label: "Edit image",
        icon: "edit",
        onClick: open
      }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
        icon: "no-alt",
        onClick: onRemoveImage,
        className: "blocks-gallery-image__remove",
        label: "Remove image"
      }))
    })))), url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: url,
      alt: alt,
      className: id ? `wp-image-${id}` : null
    }), (!RichText.isEmpty(caption) || isSelected) && url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-photoessay-media-caption-editor-wrapper"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      className: "wp-block-photoessay-media-caption wp-prepress-component-caption",
      placeholder: __('Add a caption and/or media credit…'),
      value: caption,
      onChange: value => setAttributes({
        caption: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_1__["default"])('formattingControls', ['bold', 'italic', 'link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_1__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link']),
      keepPlaceholderOnFocus: true
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-photoessay-media-editorshim"
    }));
  },
  save({
    attributes
  }) {
    const {
      id,
      url,
      alt,
      columnClass,
      caption
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: columnClass
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-photoessay-media"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: url,
      alt: alt,
      className: id ? `wp-image-${id}` : null
    }), !RichText.isEmpty(caption) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "p",
      className: "wp-block-photoessay-media-caption wp-prepress-component-caption",
      value: caption
    })))));
  }
});

/***/ }),

/***/ "./src/blocks/photoessay/photoessay.js":
/*!*********************************************!*\
  !*** ./src/blocks/photoessay/photoessay.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/photoessay/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/photoessay/editor.scss");
/* harmony import */ var _photoessay_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photoessay-image */ "./src/blocks/photoessay/photoessay-image.js");
/* harmony import */ var _components_block_icons___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/block-icons/ */ "./src/components/block-icons/index.js");

/**
 * BLOCK: editorial/photoessay
 *
 * Register a photo essay block with Gutenberg.
 */

// Import CSS.



// Internal dependencies.



// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  Fragment
} = wp.element;
const {
  PanelBody,
  Path,
  RadioControl,
  SVG
} = wp.components;
const {
  InnerBlocks,
  InspectorControls
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  dispatch,
  select
} = wp.data;

// Populate selectors that were in core/editor until WordPress 5.2 and are
// now located in core/block-editor.
const {
  getBlocksByClientId
} = 'undefined' === typeof select('core/block-editor') ? select('core/editor') : select('core/block-editor');

// Populate actions that were in core/editor until WordPress 5.2 and are
// now located in core/block-editor.
const {
  updateBlockAttributes,
  removeBlock
} = 'undefined' === typeof dispatch('core/block-editor') ? dispatch('core/editor') : dispatch('core/block-editor');

// Register the block.
registerBlockType('editorial/photoessay', {
  title: __('Photo Essay'),
  description: __('Insert a row of photos with optional layouts.'),
  icon: (0,_components_block_icons___WEBPACK_IMPORTED_MODULE_4__["default"])('photoessay'),
  category: 'bu-editorial',
  attributes: {
    layout: {
      type: 'string',
      default: ''
    }
  },
  supports: {
    align: ['wide', 'full']
  },
  edit({
    attributes,
    setAttributes,
    clientId
  }) {
    const {
      layout
    } = attributes;

    /**
     * Updates the layout attribute and handles any necessary block updates or removals.
     *
     * @param {string} newLayout Currently selected layout option.
     */
    const onChangeLayout = newLayout => {
      setAttributes({
        layout: newLayout
      });

      // Get the image block classes from the information contained in the layout option.
      const blockClasses = newLayout.split('-').splice(3);

      // Get any existing image blocks.
      const currentBlocks = getBlocksByClientId(clientId)[0].innerBlocks;

      // Update any existing photoessay-image blocks with the correct class name when
      // the layout changes. A template applied to the photoessay block provides default
      // columnClass values for the inner photoessay-image blocks, but will not override
      // attributes previously assigned to the block.
      blockClasses.forEach((blockClass, i) => {
        const existingBlock = currentBlocks[i];
        const newColumnClass = {
          columnClass: `photo-${blockClass}`
        };
        if (existingBlock) {
          // Update the `columnClass` attribute of the existing block at this index.
          updateBlockAttributes(existingBlock.clientId, newColumnClass);
        }
      });

      // Remove excess blocks if the new layout has fewer images than the previous.
      currentBlocks.forEach((block, i) => {
        if (blockClasses[i]) {
          return;
        }
        removeBlock(block.clientId, false);
      });
    };

    // Assume an empty template that will be populated based on the number
    // of blocks expected by the selected layout.
    const photoTemplate = [];

    // Set a default layout when the block is first inserted and
    // ensure one photoessay-image block is added to the template.
    if (layout === '') {
      setAttributes({
        layout: 'photo-row-thirds-3'
      });
      photoTemplate.push(['editorial/photoessay-image', {
        columnClass: 'photo-3'
      }]);
    } else {
      const blockClasses = layout.split('-').splice(3);

      // Ensure the photoessay template for this block contains enough
      // room for the number of expected photoessay-image blocks.
      blockClasses.forEach((blockClass, i) => {
        photoTemplate.push(['editorial/photoessay-image', {
          columnClass: `photo-${blockClass}`
        }]);
      });
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Photo Essay Row Settings')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RadioControl, {
      label: __('Layout'),
      className: "bu-photoessay-layout-options",
      selected: layout,
      options: [
      // Single column layouts.
      {
        label: 'Single full-frame image',
        value: 'photo-row-full-f'
      }, {
        label: 'Single wide image',
        value: 'photo-row-thirds-3'
      }, {
        label: 'Single ultra-wide image',
        value: 'photo-row-fourths-4'
      },
      // Two column layouts.
      {
        label: 'Two landscape images',
        value: 'photo-row-fourths-2-2'
      }, {
        label: 'Two portrait images',
        value: 'photo-row-tall-1-1'
      }, {
        label: 'One square, one portrait image',
        value: 'photo-row-square-s-1'
      }, {
        label: 'One square, one landscape image',
        value: 'photo-row-square-s-2'
      }, {
        label: 'One square, one wide image',
        value: 'photo-row-square-s-3'
      }, {
        label: 'One portrait, one square image',
        value: 'photo-row-square-1-s'
      }, {
        label: 'One landscape, one square image',
        value: 'photo-row-square-2-s'
      }, {
        label: 'One wide, one square image',
        value: 'photo-row-square-3-s'
      }, {
        label: 'One landscape, one portrait image',
        value: 'photo-row-thirds-2-1'
      }, {
        label: 'One wide, one portrait image',
        value: 'photo-row-fourths-3-1'
      }, {
        label: 'One portrait, one landscape image',
        value: 'photo-row-thirds-1-2'
      }, {
        label: 'One portrait, one wide image',
        value: 'photo-row-fourths-1-3'
      },
      // Three column layouts.
      {
        label: 'Three portrait images',
        value: 'photo-row-thirds-1-1-1'
      }, {
        label: 'Three square images',
        value: 'photo-row-square-s-s-s'
      }, {
        label: 'One landscape, two portrait images',
        value: 'photo-row-fourths-2-1-1'
      }, {
        label: 'One portrait, one landscape, one portrait image',
        value: 'photo-row-fourths-1-2-1'
      }, {
        label: 'Two portrait, one landscape image',
        value: 'photo-row-fourths-1-1-2'
      }, {
        label: 'One ultra-wide, two landscape image',
        value: 'photo-row-short-4-2-2'
      }, {
        label: 'One landscape, one ultra-wide, one landscape image',
        value: 'photo-row-short-2-4-2'
      }, {
        label: 'Two landscape, one ultra-wide image',
        value: 'photo-row-short-2-2-4'
      },
      // Four column layouts.
      {
        label: 'Four portrait images',
        value: 'photo-row-fourths-1-1-1-1'
      }, {
        label: 'Four square images',
        value: 'photo-row-square-s-s-s-s'
      }, {
        label: 'Four wide images',
        value: 'photo-row-short-2-2-2-2'
      }],
      onChange: onChangeLayout
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-editorial-photoessay"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: layout
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
      template: photoTemplate,
      templateLock: "all",
      allowedBlocks: ['editorial/photoessay-image'],
      templateInsertUpdatesSelection: false
    }))));
  },
  save({
    attributes
  }) {
    const {
      layout
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-photoessay js-block-editorial-photoessay"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: layout
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./src/blocks/pullquote/pullquote.js":
/*!*******************************************!*\
  !*** ./src/blocks/pullquote/pullquote.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/pullquote/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/pullquote/editor.scss");
/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/background */ "./src/components/background/index.js");
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");
/* harmony import */ var _global_theme_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../global/theme-options */ "./src/global/theme-options.js");
/* harmony import */ var _components_block_icons___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/block-icons/ */ "./src/components/block-icons/index.js");

/**
 * BLOCK: bu/pullquote
 *
 * Register a pullquote block with Gutenberg.
 */

// External dependencies.


//  Import CSS.



// Internal dependencies.





// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  Fragment,
  useState
} = wp.element;
const {
  PanelBody,
  Path,
  SelectControl,
  TextControl,
  SVG
} = wp.components;
const {
  InspectorControls,
  PanelColorSettings,
  RichText,
  withColors
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;

// Returns true if the current block style is "Default".
const isStyleDefault = className => {
  return !className.includes('is-style-modern') && !className.includes('is-style-pop');
};

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className    The classnames assigned to the block
 * @param {number} backgroundId ID of the background media, if set.
 * @param {string} imageFocus   Value of the "Crop Media To" setting.
 * @param {string} themeColor   Value of the "Theme Color" setting.
 * @param          textColor
 */
const getClasses = (className, backgroundId, imageFocus, themeColor, textColor) => {
  const isStylePop = className.includes('is-style-pop');
  return classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    'has-image': backgroundId && !isStylePop,
    [`has-image-focus-${imageFocus}`]: imageFocus && !isStylePop,
    [`has-${themeColor}-theme`]: themeColor,
    [`has-${textColor}-theme-text`]: textColor
  });
};

// Only allow images in the background component for this block.
const allowedMedia = ['image'];

// Register the block.
registerBlockType('bu/pullquote', {
  title: __('BU Pullquote'),
  description: __(''),
  icon: (0,_components_block_icons___WEBPACK_IMPORTED_MODULE_7__["default"])('pullquote'),
  category: 'bu',
  supports: {
    align: ['full', 'wide']
  },
  attributes: {
    quote: {
      type: 'array',
      source: 'children',
      selector: '.quote-sizing'
    },
    photoCredit: {
      type: 'string',
      source: 'text',
      selector: '.wp-component-media-credit'
    },
    cite: {
      type: 'array',
      source: 'children',
      selector: 'footer'
    },
    imageFocus: {
      type: 'string',
      default: 'center-middle'
    },
    className: {
      type: 'string'
    },
    themeColor: {
      type: 'string',
      default: ''
    },
    textColor: {
      type: 'string',
      default: ''
    },
    ..._components_background__WEBPACK_IMPORTED_MODULE_4__.BackgroundAttributes
  },
  styles: [{
    name: '',
    label: __('Default'),
    default: true
  }, {
    name: 'modern',
    label: __('Modern')
  }, {
    name: 'pop',
    label: __('Pop')
  }],
  edit: withColors('themeColor', 'textColor')(props => {
    // Get the block properties.
    const {
      attributes,
      setAttributes,
      className,
      setThemeColor,
      themeColor,
      textColor,
      setTextColor
    } = props;

    // Get the block attributes.
    const {
      quote,
      cite,
      photoCredit,
      imageFocus,
      backgroundId
    } = attributes;
    const [isUploading, setIsUploading] = useState(false);

    // Return the background media positioning controls if a background is set
    // and the style is not set to "Pop".
    const mediaPositioningControls = () => {
      if (!backgroundId || className.includes('is-style-pop')) {
        return null;
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
        title: __('Media Positioning'),
        initialOpen: false
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
        label: __('Crop Media to:'),
        value: imageFocus,
        onChange: value => setAttributes({
          imageFocus: value
        }),
        options: [{
          value: 'left-top',
          label: __('Left Top')
        }, {
          value: 'left-middle',
          label: __('Left Center')
        }, {
          value: 'left-bottom',
          label: __('Left Bottom')
        }, {
          value: 'center-top',
          label: __('Center Top')
        }, {
          value: 'center-middle',
          label: __('Center')
        }, {
          value: 'center-bottom',
          label: __('Center Bottom')
        }, {
          value: 'right-top',
          label: __('Right Top')
        }, {
          value: 'right-middle',
          label: __('Right Center')
        }, {
          value: 'right-bottom',
          label: __('Right Bottom')
        }]
      }));
    };

    // Return the block editing interface.
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Media Options')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: __('Media Credit'),
      onChange: photoCredit => setAttributes({
        photoCredit
      }),
      value: photoCredit
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Theme Color'),
      initialOpen: false,
      colorSettings: [{
        value: themeColor.color,
        onChange: setThemeColor,
        label: __('Theme'),
        disableCustomColors: true,
        colors: (0,_global_theme_options__WEBPACK_IMPORTED_MODULE_6__["default"])()
      }]
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Text Color'),
      colorSettings: [{
        value: textColor.color,
        onChange: setTextColor,
        label: __('Text Color'),
        disableCustomColors: true,
        colors: (0,_global_theme_options__WEBPACK_IMPORTED_MODULE_6__["default"])()
      }]
    }), mediaPositioningControls()), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__.BackgroundControls, {
      allowedMediaTypes: allowedMedia,
      blockProps: props,
      placeholderText: __('Add Image'),
      setIsUploading: setIsUploading
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: getClasses(className, backgroundId, imageFocus, themeColor.slug, textColor.slug)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-bu-pullquote-inner"
    }, isStyleDefault(className) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__["default"], {
      blockProps: props,
      isUploading: isUploading
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("blockquote", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container-lockup"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container-icon-outer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container-icon-inner"
    }, className.includes('is-style-modern') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__["default"], {
      blockProps: props,
      isUploading: isUploading
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container-text"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "div",
      className: "quote-sizing",
      placeholder: __('Add quote text…'),
      value: quote,
      onChange: value => setAttributes({
        quote: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('formattingControls', ['bold', 'italic', 'link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link']),
      keepPlaceholderOnFocus: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "footer",
      placeholder: __('Add quote attribution…'),
      value: cite,
      onChange: value => setAttributes({
        cite: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('formattingControls', ['bold', 'italic', 'link']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link']),
      keepPlaceholderOnFocus: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null)), className.includes('is-style-modern') && photoCredit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-component-media-credit"
    }, photoCredit)))), isStyleDefault(className) && photoCredit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-component-media-credit"
    }, photoCredit)));
  }),
  save(props) {
    // Get the block properties.
    const {
      attributes
    } = props;

    // Get the block attributes.
    const {
      quote,
      cite,
      imageFocus,
      photoCredit,
      backgroundId,
      className = '',
      // Assign default in case the unpacked value is `undefined`.
      themeColor,
      textColor
    } = attributes;

    // Returns the block rendering for the front end.
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: getClasses(className, backgroundId, imageFocus, themeColor, textColor)
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-bu-pullquote-inner"
    }, isStyleDefault(className) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__["default"], {
      blockProps: props
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("blockquote", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container-lockup"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container-icon-outer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container-icon-inner"
    }, className.includes('is-style-modern') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_background__WEBPACK_IMPORTED_MODULE_4__["default"], {
      blockProps: props
    }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "container-text"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "div",
      className: "quote-sizing",
      value: quote
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "footer",
      className: "caption",
      value: cite
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null)), className.includes('is-style-modern') && photoCredit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-component-media-credit"
    }, photoCredit)))), isStyleDefault(className) && photoCredit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-component-media-credit"
    }, photoCredit));
  }
});

/***/ }),

/***/ "./src/blocks/relatedstories/relatedstories.js":
/*!*****************************************************!*\
  !*** ./src/blocks/relatedstories/relatedstories.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/relatedstories/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/relatedstories/editor.scss");
/* harmony import */ var _components_block_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/block-icons */ "./src/components/block-icons/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);

/**
 * BLOCK: bu-relatedstories-cgb
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.



// Internal dependencies.


// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  withState,
  compose
} = wp.compose;
const {
  withSelect,
  select
} = wp.data;
const {
  Fragment
} = wp.element;
const {
  PanelBody,
  RangeControl,
  ToggleControl
} = wp.components;
const {
  InspectorControls,
  BlockAlignmentToolbar,
  BlockControls,
  URLInput,
  useBlockProps
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  addQueryArgs
} = wp.url;
const {
  apiFetch
} = wp;
const {
  applyFilters
} = wp.hooks;
const {
  decodeEntities
} = wp.htmlEntities;


// Register the block.
registerBlockType('editorial/relatedstories', {
  apiVersion: 2,
  title: __('Related Stories'),
  description: __('A list of related stories to embed in an article.'),
  icon: (0,_components_block_icons__WEBPACK_IMPORTED_MODULE_3__["default"])('related'),
  category: 'bu-editorial',
  attributes: {
    align: {
      type: 'string',
      default: 'right'
    },
    className: {
      type: 'string',
      default: ''
    },
    // The number of cards to display when not a list format.
    cardCount: {
      type: 'number',
      default: 2
    },
    // Whether posts are selected manually or via YARPP.
    relatedManual: {
      type: 'boolean',
      default: true
    },
    // Store the post IDs used when a related stories list is manual.
    includePosts: {
      type: 'array',
      default: []
    },
    // Temporarily store URL lookup data when using URLInput.
    URLInputEntry: {
      type: 'string',
      default: ''
    }
  },
  styles: [{
    name: 'list',
    label: __('List'),
    isDefault: true
  }, {
    name: 'card',
    label: __('Card')
  }],
  // Only add alignment attributes when a list is being displayed.
  getEditWrapperProps(attributes) {
    const {
      align,
      className
    } = attributes;
    if (['left', 'right'].includes(align) && ('undefined' === typeof className || className.includes('is-style-list'))) {
      return {
        'data-align': align
      };
    }
    if (className.includes('is-style-card')) {
      return {
        'data-style': 'card'
      };
    }
    return {
      'data-align': 'none'
    };
  },
  edit: compose([withState({
    // Track dynamically provided YARPP post IDs as a state.
    yarppPosts: [],
    yarppPostsError: false,
    doingYarppPostsFetch: false,
    // Track the retrieval of related post IDs (manual or automatic) as a state.
    relatedPosts: [],
    relatedPostsError: false,
    doingRelatedPostsFetch: false,
    errorMessage: false
  }), withSelect((select, props) => {
    const {
      setState,
      yarppPosts,
      yarppPostsError,
      doingYarppPostsFetch,
      relatedPosts,
      relatedPostsError,
      doingRelatedPostsFetch,
      errorMessage
    } = props;
    const {
      relatedManual,
      includePosts,
      className,
      cardCount
    } = props.attributes;
    let query;
    const isCardStyle = className && className.includes('is-style-card') ? true : false;
    const perPage = isCardStyle && cardCount ? cardCount : 3;
    if (relatedManual) {
      // Setup the query arguments to run against the core REST API.
      query = {
        per_page: perPage,
        include: includePosts
      };
    } else {
      // If the YARPP posts state has not yet been set, and an
      // existing YARPP API error has not been cleared, retrieve
      // a list of related post IDs.
      if (yarppPosts.length === 0 && !yarppPostsError) {
        const postID = select('core/editor').getCurrentPostId();
        if (postID && !doingYarppPostsFetch) {
          setState({
            doingYarppPostsFetch: true
          });
          const postTypes = applyFilters('buBlocks.relatedStories.yarppPostTypes', ['post']);
          apiFetch({
            path: addQueryArgs('/bu-blocks/v1/yarpprelated', {
              post_id: postID,
              post_type: postTypes
            })
          }).then(posts => {
            setState({
              yarppPosts: posts,
              yarppPostsError: posts.length === 0 ? true : false,
              doingYarppPostsFetch: false,
              relatedPosts: [],
              relatedPostsError: false,
              doingRelatedPostsFetch: false
            });
          }).catch(error => {
            if (error.code === 'yarpp_disabled') {
              setState({
                yarppPostsError: true,
                doingYarppPostsFetch: false,
                errorMessage: error.message
              });
            }
          });
        }
      }

      // Setup the query arguments to run against the core REST API.
      query = {
        per_page: perPage,
        include: yarppPosts
      };
    }

    // If a known number of posts has been provided, retrieve those posts.
    if (query.include.length > 0 && relatedPosts.length === 0 && !relatedPostsError && !doingRelatedPostsFetch) {
      // Filter the default post type used when retrieving.
      const postTypes = applyFilters('buBlocks.relatedStories.postTypes', ['post']);

      // Prevent immediate duplicate requests.
      setState({
        doingRelatedPostsFetch: true
      });
      apiFetch({
        path: addQueryArgs('/bu-blocks/v1/collection', {
          include: query.include,
          post_type: postTypes
        })
      }).then(posts => {
        setState({
          relatedPosts: posts,
          relatedPostsError: posts.length === 0 ? true : false,
          doingRelatedPostsFetch: false
        });
      }).catch(error => {
        // There is no expected error here, but we can log it.
        setState({
          relatedPostsError: true,
          doingRelatedPostsFetch: false,
          errorMessage: error.code
        });
      });
    }
    return {
      posts: relatedPosts,
      // Full post objects to display in the block.
      errorMessage // A string to display in the block if an API request failed.
    };
  })])(({
    posts,
    errorMessage,
    attributes,
    ...props
  }) => {
    const {
      setAttributes,
      setState
    } = props;
    const {
      align,
      cardCount,
      relatedManual,
      URLInputEntry,
      includePosts,
      className
    } = attributes;
    const isCardStyle = className && className.includes('is-style-card') ? true : false;
    let cardCountClass = '';
    if (isCardStyle && cardCount === 2) {
      cardCountClass = 'has-two';
    } else if (isCardStyle) {
      cardCountClass = ' has-three';
    }
    const classes = classnames__WEBPACK_IMPORTED_MODULE_4___default()(className, cardCountClass);
    const blockProps = useBlockProps({
      className: classes,
      'data-style': isCardStyle ? 'card' : 'list'
    });
    let displayPosts;

    // If only 2 cards are being displayed, ensure the displayed posts in the block are limited to 2.
    if (posts.length > 2 && isCardStyle && cardCount === 2) {
      displayPosts = posts.slice(0, 2);
    } else {
      displayPosts = posts;
    }
    const currentPost = select('core/editor').getCurrentPost();
    const displayListItem = (className, post) => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        className: "wp-block-editorial-relatedstories-list-item"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("article", {
        className: "wp-block-editorial-relatedstories-article"
      }, isCardStyle && post.media_url && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
        className: "wp-block-editorial-relatedstories-article-image"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: post.media_url,
        alt: "placeholder"
      })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "wp-block-editorial-relatedstories-article-content"
      }, isCardStyle && post.primary_term && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "wp-block-editorial-relatedstories-article-category"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, decodeEntities(post.primary_term))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
        className: "wp-block-editorial-relatedstories-article-title"
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: post.link,
        className: "wp-block-editorial-relatedstories-article-title-link"
      }, decodeEntities(post.title))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
        className: "wp-block-editorial-relatedstories-article-date"
      }, post.date_gmt), applyFilters('buBlocks.relatedStories.displayListItem', '', post, currentPost))));
    };

    // Reset the related posts collection to its defaults to allow for
    // a fresh lookup after a change.
    const resetRelatedState = () => {
      setState({
        relatedPosts: [],
        relatedPostsError: false,
        doingRelatedPostsFetch: false
      });
    };

    /**
     * Remove a previously selected post from the list of manual posts.
     *
     * @param {Event} event
     */
    const removeSelectedPost = event => {
      const postId = event.target.parentNode.dataset.postId;
      if (!postId) {
        return;
      }
      const index = includePosts.indexOf(parseInt(postId));
      if (index > -1) {
        setAttributes({
          includePosts: includePosts.filter((_, i) => i !== index)
        });
      }

      // Clear any error or existing fetch for selected posts.
      resetRelatedState();
    };

    /**
     * Display the markup for an existing selected post.
     *
     * @param {Object} post The current post to display.
     */
    const displaySelectedPost = post => {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        "data-post-id": post.id
      }, decodeEntities(post.title), ' ', (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        onClick: removeSelectedPost,
        type: "button",
        id: "remove-selected-post",
        className: "components-button is-tertiary"
      }, "Remove"));
    };

    /**
     * Handle the selection of a post in the URLInput component.
     *
     * @param {string} url  The data currently in the URLInput component's text input.
     * @param {Object} post The full post object, once selected.
     */
    const handleSelectPost = (url, post) => {
      // If `post` is undefined, then the user is still searching.
      if ('undefined' === typeof post) {
        setAttributes({
          URLInputEntry: url
        });
      } else {
        // Once a post has been selected, add it to the list of included posts.
        setAttributes({
          includePosts: includePosts.concat(post.id)
        });

        // Clear the URL input field to allow for another search.
        setAttributes({
          URLInputEntry: ''
        });

        // Clear any error or existing fetch for selected posts.
        resetRelatedState();
      }
    };

    /**
     * Toggle the manual/automatic selection for how related posts are assigned.
     */
    const toggleRelatedManual = () => {
      setAttributes({
        relatedManual: !relatedManual
      });

      // Allow the manual toggle to retrigger a failed related posts request to YARPP.
      if (relatedManual) {
        setState({
          yarppPosts: [],
          yarppPostsError: false,
          doingYarppPostsFetch: false
        });
      }
      resetRelatedState();
    };
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Settings'),
      className: "panelbody-related-stories"
    }, isCardStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Cards'),
      value: cardCount,
      onChange: value => setAttributes({
        cardCount: value
      }),
      initialPosition: 2,
      min: 2,
      max: 3
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Enable manual selection",
      help: relatedManual ? 'Display manually selected related stories. If the YARPP plugin is available disable manual selection to find related posts automatically.' : 'Display related stories automatically via YARPP.',
      checked: relatedManual,
      onChange: toggleRelatedManual
    }), relatedManual && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(URLInput, {
      value: URLInputEntry,
      onChange: handleSelectPost,
      className: "bu-blocks-related-stories-block-url-input-field"
    }), relatedManual && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Manually selected posts:"), posts && posts.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "panelbody-related-stories-list"
    }, posts.map(post => displaySelectedPost(post)))))), !isCardStyle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockAlignmentToolbar, {
      value: align,
      onChange: value => setAttributes({
        align: value
      }),
      controls: ['left', 'right']
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("aside", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "wp-block-editorial-relatedstories-title"
    }, "Related"), displayPosts && displayPosts.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: "wp-block-editorial-relatedstories-list"
    }, displayPosts && displayPosts.map(post => displayListItem(className, post))) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "wp-block-editorial-relatedstories-error"
    }, errorMessage ? errorMessage : "Select related posts in this block's settings.")));
  }),
  // The front-end HTML for this block is handled in PHP, but
  // the save function is required.
  save() {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/stat/edit.js":
/*!*********************************!*\
  !*** ./src/blocks/stat/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");

// External dependencies.


// Internal dependencies.


// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  createBlock
} = wp.blocks;
const {
  PanelBody,
  RangeControl
} = wp.components;
const {
  InnerBlocks,
  InspectorControls,
  RichText,
  useBlockProps
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  compose
} = wp.compose;
const {
  withDispatch,
  withSelect
} = wp.data;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className Default classes assigned to the block.
 * @param {number} stats     The number of stat blocks to display.
 *
 * @return {string} block classnames
 */
const getBlockClasses = (className, stats) => {
  return classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    [`has-${stats}-stats`]: stats
  });
};
const Edit = props => {
  const {
    clientId,
    attributes: {
      align,
      caption,
      stats
    },
    className,
    setAttributes,
    getBlocksByClientId,
    removeBlock,
    insertBlock
  } = props;

  // Determine whether the block is aligned left or right.
  const isAlignedLeftOrRight = align === 'left' || align === 'right';
  const blockProps = useBlockProps({
    className: getBlockClasses(className, stats)
  });

  /**
   * Updates the stats attribute and handles innerBlock insertions or removals.
   *
   * @param {string} statNumber Current value of the stat number option.
   */
  const onChangeStatsNumber = statNumber => {
    setAttributes({
      stats: statNumber
    });

    // Get the current innerBlocks.
    const blocks = getBlocksByClientId(clientId)[0].innerBlocks;

    // Remove the last innerBlock if there are more innerBlocks than columns.
    if (blocks.length > statNumber && blocks[statNumber]) {
      removeBlock(blocks[statNumber].clientId, false);
    } else {
      // Otherwise, create and insert a new block.
      const newBlock = createBlock('bu/stat', {});
      const index = statNumber - 1;
      insertBlock(newBlock, index, clientId);
    }
  };

  // Reset to a single Stat block if aligned left or right.
  if (isAlignedLeftOrRight && stats !== 1) {
    onChangeStatsNumber(1);
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: "wp-block-bu-stats-figure"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-bu-stats-row"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks, {
    allowedBlocks: ['bu/stat'],
    template: [['bu/stat', {}]],
    templateLock: false
  }), !isAlignedLeftOrRight && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Options')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
    label: __('Number of Stats'),
    value: stats,
    onChange: onChangeStatsNumber,
    min: 1,
    max: 4,
    step: 1
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
    tagName: "figcaption",
    className: "wp-block-bu-stats-caption",
    placeholder: __('Add a caption (optional)…'),
    value: caption,
    onChange: value => setAttributes({
      caption: value
    }),
    formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_2__["default"])('formattingControls', ['bold', 'italic', 'link']),
    allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_2__["default"])('allowedFormats', ['core/bold', 'core/italic', 'core/link']),
    keepPlaceholderOnFocus: true
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (compose([withSelect(select => {
  const {
    getBlocksByClientId
  } = select('core/block-editor');
  return {
    getBlocksByClientId
  };
}), withDispatch(dispatch => {
  const {
    insertBlock,
    removeBlock
  } = dispatch('core/block-editor');
  return {
    insertBlock,
    removeBlock
  };
})])(Edit));

/***/ }),

/***/ "./src/blocks/stat/stat.js":
/*!*********************************!*\
  !*** ./src/blocks/stat/stat.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/stat/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/stat/editor.scss");
/* harmony import */ var _global_theme_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../global/theme-options */ "./src/global/theme-options.js");
/* harmony import */ var _global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global/allowed-formats */ "./src/global/allowed-formats.js");
/* harmony import */ var _components_block_icons___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/block-icons/ */ "./src/components/block-icons/index.js");

/**
 * BLOCK: bu/stat
 *
 * Register a stat block with Gutenberg.
 */

// External dependencies.


// Import CSS.



// Internal dependencies.




// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  Circle,
  PanelBody,
  Path,
  RangeControl,
  SVG
} = wp.components;
const {
  InspectorControls,
  PanelColorSettings,
  PlainText,
  RichText,
  withColors,
  useBlockProps
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} circleOneColor The color option for circle 1.
 * @param {string} circleTwoColor The color option for circle 2.
 * @param {string} className      Default classes assigned to the block.
 * @param {number} numberSize     The size at which to display the stat number.
 */
const getBlockClasses = (circleOneColor, circleTwoColor, className, numberSize) => {
  return classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    [`has-circle1-color-${circleOneColor}`]: circleOneColor,
    [`has-circle2-color-${circleTwoColor}`]: circleTwoColor,
    [`has-number-size-${numberSize}`]: numberSize
  });
};

/**
 * The markup for the stat SVG.
 *
 * @param {number} circleOneFill The percentage of circle one to fill in.
 * @param {number} circleTwoFill The percentage of circle two to fill in.
 */
const statSVG = (circleOneFill, circleTwoFill) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(SVG, {
  className: "wp-block-bu-stat-svg",
  xmlns: "http://www.w3.org/2000/svg",
  width: "100px",
  height: "100px",
  viewBox: "0 0 100 100",
  style: {
    enableBackground: 'new 0 0 100 100'
  }
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Circle, {
  className: "wp-block-bu-stat-circle1",
  cx: "50",
  cy: "50",
  r: "47",
  style: {
    strokeDashoffset: `${302 * (1 - circleOneFill * 0.01)}`
  }
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Circle, {
  className: "wp-block-bu-stat-circle2",
  cx: "50",
  cy: "50",
  r: "47",
  style: {
    strokeDashoffset: `${302 * (1 - circleTwoFill * 0.01)}`
  }
}));

// Register the block.
registerBlockType('bu/stat', {
  apiVersion: 2,
  parent: ['bu/stats'],
  title: __('Stat'),
  description: __('Display statistical information.'),
  icon: (0,_components_block_icons___WEBPACK_IMPORTED_MODULE_6__["default"])('stat'),
  category: 'bu',
  attributes: {
    circleOneColor: {
      type: 'string',
      default: ''
    },
    circleOneFill: {
      type: 'number',
      default: 100
    },
    circleTwoColor: {
      type: 'string',
      default: ''
    },
    circleTwoFill: {
      type: 'number',
      default: 25
    },
    className: {
      type: 'string',
      default: ''
    },
    number: {
      type: 'string',
      default: '',
      source: 'text',
      selector: '.wp-block-bu-stat-number'
    },
    numberSize: {
      type: 'number',
      default: 2
    },
    postText: {
      type: 'string',
      default: '',
      source: 'html',
      selector: '.wp-block-bu-stat-text-post'
    },
    preText: {
      type: 'string',
      default: '',
      source: 'html',
      selector: '.wp-block-bu-stat-text-pre'
    }
  },
  supports: {
    inserter: false
  },
  edit: withColors('circleOneColor', 'circleTwoColor')(props => {
    const {
      attributes: {
        circleOneFill,
        circleTwoFill,
        numberSize,
        number,
        postText,
        preText
      },
      circleOneColor,
      circleTwoColor,
      className,
      isSelected,
      setAttributes,
      setCircleOneColor,
      setCircleTwoColor
    } = props;
    const blockProps = useBlockProps({
      className: getBlockClasses(circleOneColor.slug, circleTwoColor.slug, className, numberSize)
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-bu-stat-container-outer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-bu-stat-container-inner"
    }, (isSelected || !RichText.isEmpty(preText)) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "div",
      className: "wp-block-bu-stat-text-pre",
      placeholder: __('Opening text…'),
      value: preText,
      onChange: value => setAttributes({
        preText: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('formattingControls', ['bold', 'italic']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('allowedFormats', ['core/bold', 'core/italic'])
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-bu-stat-number"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PlainText, {
      placeholder: __('Number…'),
      value: number,
      onChange: number => setAttributes({
        number
      })
    })), (isSelected || !RichText.isEmpty(postText)) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "div",
      className: "wp-block-bu-stat-text-post",
      placeholder: __('Closing text…'),
      value: postText,
      onChange: value => setAttributes({
        postText: value
      }),
      formattingControls: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('formattingControls', ['bold', 'italic']),
      allowedFormats: (0,_global_allowed_formats__WEBPACK_IMPORTED_MODULE_5__["default"])('allowedFormats', ['core/bold', 'core/italic'])
    }), statSVG(circleOneFill, circleTwoFill))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: __('Display Options')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Number Size'),
      value: numberSize,
      onChange: value => setAttributes({
        numberSize: value
      }),
      min: 1,
      max: 4,
      step: 1
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Bottom Circle Fill'),
      value: circleOneFill,
      onChange: circleOneFill => setAttributes({
        circleOneFill
      }),
      min: 0,
      max: 100,
      step: 1
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
      label: __('Top Circle Fill'),
      value: circleTwoFill,
      onChange: circleTwoFill => setAttributes({
        circleTwoFill
      }),
      min: 0,
      max: 100,
      step: 1
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelColorSettings, {
      title: __('Color Options'),
      colorSettings: [{
        value: circleOneColor.color,
        onChange: setCircleOneColor,
        label: __('Bottom Circle'),
        disableCustomColors: true,
        colors: (0,_global_theme_options__WEBPACK_IMPORTED_MODULE_4__["default"])()
      }, {
        value: circleTwoColor.color,
        onChange: setCircleTwoColor,
        label: __('Top Circle'),
        disableCustomColors: true,
        colors: (0,_global_theme_options__WEBPACK_IMPORTED_MODULE_4__["default"])()
      }]
    })));
  }),
  save({
    attributes
  }) {
    const {
      circleOneColor,
      circleOneFill,
      circleTwoColor,
      circleTwoFill,
      className,
      number,
      numberSize,
      postText,
      preText
    } = attributes;
    const blockProps = useBlockProps.save({
      className: getBlockClasses(circleOneColor, circleTwoColor, className, numberSize)
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-bu-stat-container-outer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-bu-stat-container-inner"
    }, !RichText.isEmpty(preText) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "div",
      className: "wp-block-bu-stat-text-pre",
      value: preText
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-bu-stat-number"
    }, number), !RichText.isEmpty(postText) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "div",
      className: "wp-block-bu-stat-text-post",
      value: postText
    }), statSVG(circleOneFill, circleTwoFill))));
  }
});

/***/ }),

/***/ "./src/blocks/stat/stats.js":
/*!**********************************!*\
  !*** ./src/blocks/stat/stats.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/blocks/stat/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/blocks/stat/editor.scss");
/* harmony import */ var _stat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stat */ "./src/blocks/stat/stat.js");
/* harmony import */ var _components_block_icons___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/block-icons/ */ "./src/components/block-icons/index.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit */ "./src/blocks/stat/edit.js");

/**
 * BLOCK: bu/stats
 *
 * Register a stats block with Gutenberg.
 */

// External dependencies.


// Import CSS.



// Internal dependencies.




// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;
const {
  InnerBlocks,
  RichText,
  useBlockProps
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;

/**
 * Returns the class list for the block based on the current settings.
 *
 * @param {string} className Default classes assigned to the block.
 * @param {number} stats     The number of stat blocks to display.
 *
 * @return {string} block classnames
 */
const getBlockClasses = (className, stats) => {
  return classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    [`has-${stats}-stats`]: stats
  });
};

// Register the block.
registerBlockType('bu/stats', {
  apiVersion: 2,
  title: __('Stats'),
  description: __('Add one to four statistics to your content.'),
  icon: (0,_components_block_icons___WEBPACK_IMPORTED_MODULE_5__["default"])('stat'),
  category: 'bu',
  attributes: {
    align: {
      type: 'string',
      default: ''
    },
    caption: {
      type: 'string',
      default: '',
      source: 'html',
      selector: '.wp-block-bu-stats-caption'
    },
    className: {
      type: 'string',
      default: ''
    },
    stats: {
      type: 'number',
      default: 1
    }
  },
  supports: {
    align: ['left', 'right', 'wide']
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_6__["default"],
  save({
    attributes
  }) {
    const {
      caption,
      className,
      stats
    } = attributes;
    const blockProps = useBlockProps.save({
      className: getBlockClasses(className, stats)
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
      className: "wp-block-bu-stats-figure"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "wp-block-bu-stats-row"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText.Content, {
      tagName: "figcaption",
      className: "wp-block-bu-stats-caption",
      value: caption
    })));
  }
});

/***/ }),

/***/ "./src/components/allowed-blocks/index.js":
/*!************************************************!*\
  !*** ./src/components/allowed-blocks/index.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Component: allowedBlocks
 *
 * Returns a filterable list of blocks to allow within BU layout-type blocks.
 *
 * This list is used for the Aside, Drawer, and Modal blocks.
 */

// WordPress dependencies.
const {
  getBlockTypes
} = wp.blocks;
const {
  applyFilters
} = wp.hooks;

// Blocks to exclude from allowedBlocks array for layout-type blocks.
let excludeBlocks = ['bu/leadin', 'core/more', 'core/nextpage', 'core/separator', 'core/spacer', 'editorial/aside', 'editorial/drawer', 'editorial/modal', 'editorial-preset/aside'];

// Returns a list of all block namess except those in the excludeBlocks array.
const allowedBlocks = () => {
  excludeBlocks = applyFilters('buBlocks.layoutBlockTypes.excludeBlocks', excludeBlocks);
  const allowed = getBlockTypes().map(({
    name
  }) => {
    if (name && !excludeBlocks.includes(name)) {
      return name;
    }
  });
  return allowed;
};

// Export the allowedBlocks function.
/* harmony default export */ __webpack_exports__["default"] = (allowedBlocks);

/***/ }),

/***/ "./src/components/background/attributes.js":
/*!*************************************************!*\
  !*** ./src/components/background/attributes.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The background component attributes.
 */

const BackgroundAttributes = {
  backgroundId: {
    type: 'number'
  },
  backgroundType: {
    type: 'string'
  },
  backgroundUrl: {
    type: 'string'
  },
  backgroundOpacity: {
    type: 'number',
    default: 100
  },
  backgroundAlt: {
    type: 'string'
  },
  backgroundCaption: {
    type: 'string'
  },
  backgroundAutoplay: {
    type: 'boolean',
    default: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BackgroundAttributes);

/***/ }),

/***/ "./src/components/background/controls.js":
/*!***********************************************!*\
  !*** ./src/components/background/controls.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Component: background controls
 */

// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  IconButton,
  PanelBody,
  RangeControl,
  TextControl,
  ToggleControl,
  Toolbar
} = wp.components;
const {
  BlockControls,
  InspectorControls,
  MediaPlaceholder,
  MediaUpload,
  MediaUploadCheck
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;
const {
  useState
} = wp.element;
const {
  getAuthority
} = wp.url;
const {
  isBlobURL
} = wp.blob;
const BackgroundControls = props => {
  // Destructure properties of this component with defaults.
  const {
    allowedMediaTypes = ['image', 'video'],
    blockProps,
    className = 'bu-blocks-background',
    imageSize = 'full',
    inlinePlaceholder = false,
    options = ['opacity'],
    placeholderText = __('Add Media'),
    setIsUploading
  } = props;

  // Get the properties of the block using this component.
  const {
    attributes,
    setAttributes
  } = blockProps;

  // Get the attributes for handling the background data.
  const {
    backgroundId,
    backgroundType,
    backgroundUrl,
    backgroundOpacity,
    backgroundAutoplay
  } = attributes;

  // Reset attributes to undefined.
  const onRemoveMedia = () => {
    setAttributes({
      backgroundId: undefined,
      backgroundType: undefined,
      backgroundUrl: undefined,
      backgroundAlt: undefined,
      backgroundCaption: undefined
    });
  };

  // Set attributes based on the selected or uploaded media.
  const onSelectMedia = media => {
    if (!media || !media.url) {
      onRemoveMedia();
      return;
    }
    if (isBlobURL(media.url)) {
      setIsUploading(true);
      setAttributes({
        backgroundUrl: media.url
      });
      return;
    }
    let mediaType;
    if (media.media_type) {
      // Determine the media type from selections originating from a file upload.
      // Only images and videos are accepted. If the media_type is not an image,
      // we can assume it is a video (which contains the media type of 'file').
      mediaType = 'image' === media.media_type ? 'image' : 'video';
    } else {
      // Determine the media type from selections originating from existing files
      // in the media library.
      if (media.type !== 'image' && media.type !== 'video') {
        return;
      }
      mediaType = media.type;
    }
    let url = media.url;

    // Assign the block-designated size if it exists.
    if (mediaType === 'image' && imageSize !== 'full') {
      // The first check is for images already in the media library.
      // The second is for newly uploaded images.
      if (media.sizes && media.sizes[imageSize]) {
        url = media.sizes[imageSize].url;
      } else if (media.media_details && media.media_details.sizes[imageSize]) {
        url = media.media_details.sizes[imageSize].source_url;
      }
    }
    setIsUploading(false);
    setAttributes({
      backgroundId: media.id,
      backgroundType: mediaType,
      backgroundUrl: url,
      backgroundAlt: media.alt,
      backgroundCaption: media.caption
    });

    // If an `onChange` attribute is part of the Background component, ensure
    // that fires as expected.
    if ('function' === typeof props.onChange) {
      props.onChange(media, mediaType);
    }
  };

  // Set attributes based on a selected URL.
  const onSelectURL = newURL => {
    const allowedAuthorities = ['vimeo.com', 'www.youtube.com', 'youtu.be', 'www.bu.edu'];
    const authority = getAuthority(newURL);

    // Stop here if the selected URL isn't from one of the allowed domains.
    if (newURL === backgroundUrl || !allowedAuthorities.includes(authority)) {
      return;
    }
    setAttributes({
      backgroundId: undefined,
      backgroundType: 'url',
      backgroundUrl: newURL,
      backgroundAlt: undefined,
      backgroundCaption: undefined
    });
  };

  // Return the media placeholder if no media has been set.
  const placeholder = () => {
    if (backgroundUrl) {
      return undefined;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaPlaceholder, {
      icon: "format-image",
      className: className,
      labels: {
        title: placeholderText,
        instructions: __('Drag, upload, or select a file from your library.')
      },
      onSelect: onSelectMedia,
      onSelectURL: allowedMediaTypes.includes('video') ? onSelectURL : undefined,
      allowedTypes: allowedMediaTypes
    }), allowedMediaTypes.includes('video') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "description components-bu-background-url-note"
    }, "YouTube, Vimeo, and BUniverse URLs are supported at this time."));
  };

  // Return inspector controls.
  const inspectorControls = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Media Settings'),
    className: "components-panel__body-bu-background-media"
  }, !inlinePlaceholder && placeholder(), !!backgroundUrl && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, backgroundType === 'url' ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
    label: __('URL'),
    value: backgroundUrl,
    onChange: bgUrl => {
      setAttributes({
        backgroundUrl: bgUrl,
        backgroundType: backgroundUrl === '' ? undefined : backgroundType
      });
    }
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
    onSelect: onSelectMedia,
    allowedTypes: allowedMediaTypes,
    value: backgroundId,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      onClick: open,
      icon: "edit",
      label: __('Edit Background Media'),
      isDefault: true,
      isLarge: true
    }, __('Edit'))
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
    onClick: onRemoveMedia,
    icon: "no",
    label: 'Remove Background Media',
    isDefault: true,
    isLarge: true
  }, __('Remove')))), options.includes('opacity') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(RangeControl, {
    label: __('Background Opacity'),
    value: backgroundOpacity,
    onChange: ratio => setAttributes({
      backgroundOpacity: ratio
    }),
    min: 10,
    max: 100,
    step: 10
  }), (backgroundType === 'video' || backgroundType === 'url') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Autoplay video'),
    checked: backgroundAutoplay,
    onChange: () => setAttributes({
      backgroundAutoplay: !backgroundAutoplay
    })
  })));

  // Return the block editing interface.
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, inlinePlaceholder && placeholder(), !!backgroundUrl && backgroundType !== 'url' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(MediaUpload, {
    onSelect: onSelectMedia,
    allowedMediaTypes: allowedMediaTypes,
    value: backgroundId,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      className: "components-toolbar__control",
      label: __('Edit Background Media'),
      icon: "edit",
      onClick: open
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
    className: "components-toolbar__control",
    label: 'Remove Background Media',
    icon: "no",
    onClick: onRemoveMedia
  })))), (!inlinePlaceholder || backgroundUrl) && inspectorControls);
};
/* harmony default export */ __webpack_exports__["default"] = (BackgroundControls);

/***/ }),

/***/ "./src/components/background/index.js":
/*!********************************************!*\
  !*** ./src/components/background/index.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundAttributes: function() { return /* reexport safe */ _attributes_js__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   BackgroundControls: function() { return /* reexport safe */ _controls__WEBPACK_IMPORTED_MODULE_5__["default"]; },
/* harmony export */   BackgroundOpacityToClass: function() { return /* binding */ BackgroundOpacityToClass; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/components/background/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ "./src/components/background/style.scss");
/* harmony import */ var _attributes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attributes.js */ "./src/components/background/attributes.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./src/components/background/controls.js");

/**
 * Component: background
 *
 * An absraction of the default Cover block for more general use inside blocks.
 *
 * Import this component and its attributes into a block with:
 * 	`import Background, { BackgroundAttributes } from '../../components/background';`
 */

// External dependencies.


// Import CSS.



// Internal dependencies.



// WordPress dependencies.
const {
  Fragment
} = wp.element;
const {
  Spinner
} = wp.components;
const {
  getAuthority,
  getPath,
  getQueryString
} = wp.url;

/**
 * Return a classname based on the value of the 'Background Opacity' setting.
 *
 * @param {number} ratio The value of the 'Background Opacity' setting.
 */
const BackgroundOpacityToClass = ratio => {
  return ratio === 100 ? null : 'has-background-opacity-' + 10 * Math.round(ratio / 10);
};

/**
 * The background component.
 *
 * @param {Array} props The properties passed to the component.
 */
function Background(props) {
  // Destructure properties of this component with defaults.
  const {
    blockProps,
    className = 'bu-blocks-background',
    isUploading = false
  } = props;

  // Get the properties of the block using this component.
  const {
    attributes
  } = blockProps;

  // Get the attributes for handling the background data.
  const {
    backgroundId,
    backgroundType,
    backgroundUrl,
    backgroundOpacity,
    backgroundAlt,
    backgroundAutoplay
  } = attributes;

  // Build the classes to apply to the background element.
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    'has-background-opacity': backgroundOpacity !== 100,
    [BackgroundOpacityToClass(backgroundOpacity)]: BackgroundOpacityToClass(backgroundOpacity),
    [`wp-image-${backgroundId}`]: backgroundId && 'image' === backgroundType
  });

  // Return an image element for use as the background.
  const backgroundImage = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: classes,
    src: backgroundUrl,
    alt: backgroundAlt
  });

  // Return a video element for use as the background.
  const backgroundVideo = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("video", {
    className: classes,
    autoPlay: backgroundAutoplay,
    muted: backgroundAutoplay,
    loop: backgroundAutoplay,
    src: backgroundUrl
  });

  // Return an iframe for use as the background.
  const backgroundIframe = () => {
    const authority = getAuthority(backgroundUrl);
    let url = '';
    if (authority === 'www.youtube.com' || authority === 'youtu.be') {
      const videoId = authority === 'youtu.be' ? getPath(backgroundUrl) : getQueryString(backgroundUrl).split('?')[0].substr(2);

      // Build the url, adding autoplay parameters if appropriate.
      url = `//www.youtube.com/embed/${videoId}`;
      url += backgroundAutoplay ? `?controls=0&autoplay=1&mute=1&origin=http://bu.edu&version=3&loop=1&playlist=${videoId}` : '';
    }
    if (authority === 'vimeo.com') {
      const videoId = getPath(backgroundUrl);

      // Build the url, adding the background parameter for autoplaying if appropriate.
      url = `//player.vimeo.com/video/${videoId}`;
      url += backgroundAutoplay ? '?background=1' : '';
    }
    if (authority === 'www.bu.edu') {
      const videoId = getQueryString(backgroundUrl).split('?')[0].substr(2);

      // Build the URL, adding the autoplay parameter if appropriate.
      url = `//www.bu.edu/buniverse/interface/embed/embed.html?v=${videoId}&jsapi=1`;
      url += backgroundAutoplay ? '&autoplay=true&controls=0' : '';
    }
    if (url !== '') {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("iframe", {
        src: url,
        frameBorder: "0",
        allow: "autoplay; fullscreen",
        className: classes
      });
    }
  };

  // Return the interface for the background component.
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, 'image' === backgroundType && backgroundImage, 'video' === backgroundType && backgroundVideo, 'url' === backgroundType && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-background-video"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-background-video-ratio"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-background-video-iframe"
  }, backgroundIframe()))), isUploading && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block-background-is-uploading"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: backgroundUrl,
    alt: backgroundAlt
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Spinner, null)));
}

// Export dependencies for easy importing in blocks.

/* harmony default export */ __webpack_exports__["default"] = (Background);

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

/***/ "./src/components/paragraph-caption-style/paragraph-caption-style.js":
/*!***************************************************************************!*\
  !*** ./src/components/paragraph-caption-style/paragraph-caption-style.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/components/paragraph-caption-style/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/components/paragraph-caption-style/editor.scss");
/**
 * Registers the caption style for the core paragraph block.
 */

//  Import CSS.


wp.domReady(() => {
  wp.blocks.registerBlockStyle('core/paragraph', [{
    name: 'default',
    label: 'Default',
    isDefault: true
  }, {
    name: 'caption',
    label: 'Caption'
  }]);
});

/***/ }),

/***/ "./src/components/paragraph-end-of-article-style/paragraph-end-of-article-style.js":
/*!*****************************************************************************************!*\
  !*** ./src/components/paragraph-end-of-article-style/paragraph-end-of-article-style.js ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/components/paragraph-end-of-article-style/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/components/paragraph-end-of-article-style/editor.scss");
/**
 * Registers the end-of-article style for the core paragraph block.
 */

//  Import CSS.


wp.domReady(() => {
  wp.blocks.registerBlockStyle('core/paragraph', [{
    name: 'default',
    label: 'Default',
    isDefault: true
  }, {
    name: 'end-of-article',
    label: 'End of Article'
  }]);
});

/***/ }),

/***/ "./src/components/share-tools/index.js":
/*!*********************************************!*\
  !*** ./src/components/share-tools/index.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ShareToolsAttributes: function() { return /* binding */ ShareToolsAttributes; },
/* harmony export */   ShareToolsControls: function() { return /* binding */ ShareToolsControls; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Component: background
 *
 * An absraction of the default Cover block for more general use inside blocks.
 *
 * Import this component and its attributes into a block with:
 * 	`import ShareTools, { ShareToolsAttributes } from '../../components/share-tools';`
 */

// WordPress dependencies.
const {
  __
} = wp.i18n;
const {
  Fragment
} = wp.element;
const {
  PanelBody,
  ToggleControl
} = wp.components;
const {
  InspectorControls
} = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor;

// Share tools attributes.
const ShareToolsAttributes = {
  shareToolsDisabled: {
    type: 'boolean',
    default: false
  }
};

// Share tools controls.
const ShareToolsControls = props => {
  // Get the properties of this component.
  const {
    blockProps
  } = props;

  // Get the properties of the block using this component.
  const {
    attributes: {
      shareToolsDisabled
    },
    setAttributes
  } = blockProps;

  // Return the interface for the background component.
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
    title: __('Sharing Options')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
    label: __('Disable Share Tools'),
    checked: shareToolsDisabled,
    onChange: () => setAttributes({
      shareToolsDisabled: !shareToolsDisabled
    })
  })));
};

/**
 * The Share Tools component.
 *
 * @param {Array} props The properties passed to the component.
 */
function ShareTools(props) {
  // Get the properties of this component.
  const {
    blockProps
  } = props;

  // Get the properties of the block using this component.
  const {
    attributes: {
      shareToolsDisabled
    }
  } = blockProps;

  // Return the interface for the background component.
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, !shareToolsDisabled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "wp-blocks-components-share-tools"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    className: "icon-action"
  }, __('Share this'))));
}

// Export attributes for easy importing in blocks.


// Export the share tools control panel.
/* harmony default export */ __webpack_exports__["default"] = (ShareTools);

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

/***/ "./src/global/register-block-preset.js":
/*!*********************************************!*\
  !*** ./src/global/register-block-preset.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Registers a variation of a block with a preset template.
 */

// WordPress dependencies.
const {
  registerBlockType
} = wp.blocks;
const {
  createElement
} = wp.element;
const {
  addFilter
} = wp.hooks;

/**
 * Register a preset variation of a given block.
 *
 * @param {Object} originalBlock  Block type to build preset variation from.
 * @param {Object} presetTemplate Template to apply.
 *
 * @return {Object} Filtered props applied to save element.
 */
const RegisterBlockPreset = (originalBlock, presetTemplate) => {
  const {
    name,
    title,
    edit,
    save
  } = originalBlock;
  const presetBlock = Object.assign({}, originalBlock);
  const nameParts = name.split('/');

  // Filter the classname of the preset block to match the default block.
  const filterBlockClassName = (className, blockName) => {
    if (presetBlock.name === blockName) {
      className = className.replace(/-preset/i, '');
    }
    return className;
  };
  presetBlock.name = nameParts[0] + '-preset/' + nameParts[1];
  presetBlock.title = title + ' (preset)';
  presetBlock.category = 'bu-editorial-presets';
  presetBlock.save = save;

  // Add a `presetTemplate` property to the default block's edit component.
  presetBlock.edit = function (props) {
    return createElement(edit, Object.assign(props, {
      presetTemplate
    }));
  };

  // Register the preset variation of the default block.
  registerBlockType(presetBlock.name, presetBlock);

  // Filter the classname of the preset block to match the default block.
  addFilter('blocks.getBlockDefaultClassName', 'bu-blocks/preset-block-class-name/', filterBlockClassName);
};
/* harmony default export */ __webpack_exports__["default"] = (RegisterBlockPreset);

/***/ }),

/***/ "./src/global/theme-options.js":
/*!*************************************!*\
  !*** ./src/global/theme-options.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _publication_slug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publication-slug */ "./src/global/publication-slug.js");
/**
 * Adds an array of color objects to the editor or theme defaults,
 * and returns it for passing to the `colors` prop.
 */

// WordPress dependencies.
const {
  select,
  dispatch
} = wp.data;
const {
  getEditorSettings
} = select('core/editor');
const {
  updateEditorSettings
} = dispatch('core/editor');

// Populate selectors that were in core/editor until WordPress 5.2 and are
// now located in core/block-editor.
const {
  getSettings // Note that getSettings is _not_ available until WordPress 5.2 and will be undefined otherwise.
} = 'undefined' === typeof select('core/block-editor') ? select('core/editor') : select('core/block-editor');

// Populate actions that were in core/editor until WordPress 5.2 and are
// now located in core/block-editor.
const {
  updateSettings // Note that updateSettings is _not_ available until WordPress 5.2 and will be undefined otherwise.
} = 'undefined' === typeof dispatch('core/block-editor') ? dispatch('core/editor') : dispatch('core/block-editor');

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
  const publication = (0,_publication_slug__WEBPACK_IMPORTED_MODULE_0__["default"])();

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

/***/ "./src/blocks/aside/editor.scss":
/*!**************************************!*\
  !*** ./src/blocks/aside/editor.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/aside/style.scss":
/*!*************************************!*\
  !*** ./src/blocks/aside/style.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/buniverse/editor.scss":
/*!******************************************!*\
  !*** ./src/blocks/buniverse/editor.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/buniverse/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/buniverse/style.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "./src/blocks/clicktotweet/editor.scss":
/*!*********************************************!*\
  !*** ./src/blocks/clicktotweet/editor.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/clicktotweet/style.scss":
/*!********************************************!*\
  !*** ./src/blocks/clicktotweet/style.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/collapsible-control/editor.scss":
/*!****************************************************!*\
  !*** ./src/blocks/collapsible-control/editor.scss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/collapsible-control/style.scss":
/*!***************************************************!*\
  !*** ./src/blocks/collapsible-control/style.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/collapsible/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/collapsible/editor.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/collapsible/style.scss":
/*!*******************************************!*\
  !*** ./src/blocks/collapsible/style.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/custom-html/editor.scss":
/*!********************************************!*\
  !*** ./src/blocks/custom-html/editor.scss ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/drawer/editor.scss":
/*!***************************************!*\
  !*** ./src/blocks/drawer/editor.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/drawer/style.scss":
/*!**************************************!*\
  !*** ./src/blocks/drawer/style.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/headline/editor.scss":
/*!*****************************************!*\
  !*** ./src/blocks/headline/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/headline/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/headline/style.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/introparagraph/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/introparagraph/editor.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/introparagraph/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/introparagraph/style.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/leadin/editor.scss":
/*!***************************************!*\
  !*** ./src/blocks/leadin/editor.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/leadin/style.scss":
/*!**************************************!*\
  !*** ./src/blocks/leadin/style.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/listicle/editor.scss":
/*!*****************************************!*\
  !*** ./src/blocks/listicle/editor.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/listicle/style.scss":
/*!****************************************!*\
  !*** ./src/blocks/listicle/style.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/modal/editor.scss":
/*!**************************************!*\
  !*** ./src/blocks/modal/editor.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/modal/style.scss":
/*!*************************************!*\
  !*** ./src/blocks/modal/style.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/photoessay/editor.scss":
/*!*******************************************!*\
  !*** ./src/blocks/photoessay/editor.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/photoessay/style.scss":
/*!******************************************!*\
  !*** ./src/blocks/photoessay/style.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/pullquote/editor.scss":
/*!******************************************!*\
  !*** ./src/blocks/pullquote/editor.scss ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/pullquote/style.scss":
/*!*****************************************!*\
  !*** ./src/blocks/pullquote/style.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/relatedstories/editor.scss":
/*!***********************************************!*\
  !*** ./src/blocks/relatedstories/editor.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/relatedstories/style.scss":
/*!**********************************************!*\
  !*** ./src/blocks/relatedstories/style.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/stat/editor.scss":
/*!*************************************!*\
  !*** ./src/blocks/stat/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/stat/style.scss":
/*!************************************!*\
  !*** ./src/blocks/stat/style.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/background/editor.scss":
/*!***********************************************!*\
  !*** ./src/components/background/editor.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/background/style.scss":
/*!**********************************************!*\
  !*** ./src/components/background/style.scss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/paragraph-caption-style/editor.scss":
/*!************************************************************!*\
  !*** ./src/components/paragraph-caption-style/editor.scss ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/paragraph-caption-style/style.scss":
/*!***********************************************************!*\
  !*** ./src/components/paragraph-caption-style/style.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/paragraph-end-of-article-style/editor.scss":
/*!*******************************************************************!*\
  !*** ./src/components/paragraph-end-of-article-style/editor.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/paragraph-end-of-article-style/style.scss":
/*!******************************************************************!*\
  !*** ./src/components/paragraph-end-of-article-style/style.scss ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/******/ 			"blocks": 0,
/******/ 			"./style-blocks": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-blocks"], function() { return __webpack_require__("./src/blocks.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=blocks.js.map