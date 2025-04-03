/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks-frontend-polyfills.js":
/*!******************************************!*\
  !*** ./src/blocks-frontend-polyfills.js ***!
  \******************************************/
/***/ (function() {

/**
 * Polyfills
 *
 * This was a last-minute inclusion during the original development of BU Blocks
 * to fix some browser compatibility isues. These polyfills may no longer be needed.
 * Additionally, compiling the JS with modern build tools should also help handle this if needed.
 *
 * Todo: test if these polyfills are needed for current browser support.
 */

/*
Custom Event Polyfill
https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent
*/
(function () {
  if (typeof window.CustomEvent === 'function') {
    return false;
  }
  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null
    };
    const evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  CustomEvent.prototype = window.Event.prototype;
  window.CustomEvent = CustomEvent;
})();

/*
  .matches() polyfill:
  https://developer.mozilla.org/en-US/docs/Web/API/Element/matches
   */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }
      const o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      const len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      const thisArg = arguments[1];

      // 5. Let k be 0.
      let k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return k.
        const kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return k;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return -1.
      return -1;
    },
    configurable: true,
    writable: true
  });
}

// Matches polyfill.
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
// element.closest() polyfill.
if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    let el = this;
    do {
      if (Element.prototype.matches.call(el, s)) {
        return el;
      }
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

// Foreach NodeList Polyfill for IE.
if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (let i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

// Foreach Polyfill
// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback /*, thisArg*/) {
    let T, k;
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    // 1. Let O be the result of calling toObject() passing the
    // |this| value as the argument.
    const O = Object(this);

    // 2. Let lenValue be the result of calling the Get() internal
    // method of O with the argument "length".
    // 3. Let len be toUint32(lenValue).
    const len = O.length >>> 0;

    // 4. If isCallable(callback) is false, throw a TypeError exception.
    // See: http://es5.github.com/#x9.11
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }

    // 5. If thisArg was supplied, let T be thisArg; else let
    // T be undefined.
    if (arguments.length > 1) {
      T = arguments[1];
    }

    // 6. Let k be 0.
    k = 0;

    // 7. Repeat while k < len.
    while (k < len) {
      var kValue;

      // a. Let Pk be ToString(k).
      //    This is implicit for LHS operands of the in operator.
      // b. Let kPresent be the result of calling the HasProperty
      //    internal method of O with argument Pk.
      //    This step can be combined with c.
      // c. If kPresent is true, then
      if (k in O) {
        // i. Let kValue be the result of calling the Get internal
        // method of O with argument Pk.
        kValue = O[k];

        // ii. Call the Call internal method of callback with T as
        // the this value and argument list containing kValue, k, and O.
        callback.call(T, kValue, k, O);
      }
      // d. Increase k by 1.
      k++;
    }
    // 8. return undefined.
  };
}

//Classlist polyfill
/*
 * classList.js: Cross-browser full element.classList implementation.
 * 1.1.20170427
 *
 * By Eli Grey, http://eligrey.com
 * License: Dedicated to the public domain.
 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

if ('document' in self) {
  // Full polyfill for browsers with no classList support
  // Including IE < Edge missing SVGElement.classList
  if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
    (function (view) {
      'use strict';

      if (!('Element' in view)) {
        return;
      }
      const classListProp = 'classList',
        protoProp = 'prototype',
        elemCtrProto = view.Element[protoProp],
        objCtr = Object,
        strTrim = String[protoProp].trim || function () {
          return this.replace(/^\s+|\s+$/g, '');
        },
        arrIndexOf = Array[protoProp].indexOf || function (item) {
          let i = 0,
            len = this.length;
          for (; i < len; i++) {
            if (i in this && this[i] === item) {
              return i;
            }
          }
          return -1;
        },
        // Vendors: please allow content code to instantiate DOMExceptions
        DOMEx = function (type, message) {
          this.name = type;
          this.code = DOMException[type];
          this.message = message;
        },
        checkTokenAndGetIndex = function (classList, token) {
          if (token === '') {
            throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
          }
          if (/\s/.test(token)) {
            throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
          }
          return arrIndexOf.call(classList, token);
        },
        ClassList = function (elem) {
          let trimmedClasses = strTrim.call(elem.getAttribute('class') || ''),
            classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
            i = 0,
            len = classes.length;
          for (; i < len; i++) {
            this.push(classes[i]);
          }
          this._updateClassName = function () {
            elem.setAttribute('class', this.toString());
          };
        },
        classListProto = ClassList[protoProp] = [],
        classListGetter = function () {
          return new ClassList(this);
        };
      // Most DOMException implementations don't allow calling DOMException's toString()
      // on non-DOMExceptions. Error's toString() is sufficient here.
      DOMEx[protoProp] = Error[protoProp];
      classListProto.item = function (i) {
        return this[i] || null;
      };
      classListProto.contains = function (token) {
        token += '';
        return checkTokenAndGetIndex(this, token) !== -1;
      };
      classListProto.add = function () {
        let tokens = arguments,
          i = 0,
          l = tokens.length,
          token,
          updated = false;
        do {
          token = tokens[i] + '';
          if (checkTokenAndGetIndex(this, token) === -1) {
            this.push(token);
            updated = true;
          }
        } while (++i < l);
        if (updated) {
          this._updateClassName();
        }
      };
      classListProto.remove = function () {
        let tokens = arguments,
          i = 0,
          l = tokens.length,
          token,
          updated = false,
          index;
        do {
          token = tokens[i] + '';
          index = checkTokenAndGetIndex(this, token);
          while (index !== -1) {
            this.splice(index, 1);
            updated = true;
            index = checkTokenAndGetIndex(this, token);
          }
        } while (++i < l);
        if (updated) {
          this._updateClassName();
        }
      };
      classListProto.toggle = function (token, force) {
        token += '';
        const result = this.contains(token),
          method = result ? force !== true && 'remove' : force !== false && 'add';
        if (method) {
          this[method](token);
        }
        if (force === true || force === false) {
          return force;
        }
        return !result;
      };
      classListProto.toString = function () {
        return this.join(' ');
      };
      if (objCtr.defineProperty) {
        const classListPropDesc = {
          get: classListGetter,
          enumerable: true,
          configurable: true
        };
        try {
          objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
        } catch (ex) {
          // IE 8 doesn't support enumerable:true
          // adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
          // modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
          if (ex.number === undefined || ex.number === -0x7ff5ec54) {
            classListPropDesc.enumerable = false;
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
          }
        }
      } else if (objCtr[protoProp].__defineGetter__) {
        elemCtrProto.__defineGetter__(classListProp, classListGetter);
      }
    })(self);
  }

  // There is full or partial native classList support, so just check if we need
  // to normalize the add/remove and toggle APIs.

  (function () {
    'use strict';

    let testElement = document.createElement('_');
    testElement.classList.add('c1', 'c2');

    // Polyfill for IE 10/11 and Firefox <26, where classList.add and
    // classList.remove exist but support only one argument at a time.
    if (!testElement.classList.contains('c2')) {
      const createMethod = function (method) {
        const original = DOMTokenList.prototype[method];
        DOMTokenList.prototype[method] = function (token) {
          let i,
            len = arguments.length;
          for (i = 0; i < len; i++) {
            token = arguments[i];
            original.call(this, token);
          }
        };
      };
      createMethod('add');
      createMethod('remove');
    }
    testElement.classList.toggle('c3', false);

    // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
    // support the second argument.
    if (testElement.classList.contains('c3')) {
      const _toggle = DOMTokenList.prototype.toggle;
      DOMTokenList.prototype.toggle = function (token, force) {
        if (1 in arguments && !this.contains(token) === !force) {
          return force;
        }
        return _toggle.call(this, token);
      };
    }
    testElement = null;
  })();
}

/***/ }),

/***/ "./src/blocks-frontend-tools.js":
/*!**************************************!*\
  !*** ./src/blocks-frontend-tools.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Create a global object to store all BU Blocks related functions and data.
const bu_blocks = {};
/* harmony default export */ __webpack_exports__["default"] = (bu_blocks);

/***/ }),

/***/ "./src/blocks/clicktotweet/frontend.js":
/*!*********************************************!*\
  !*** ./src/blocks/clicktotweet/frontend.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks-frontend-tools */ "./src/blocks-frontend-tools.js");
/**
 * BLOCK: ClicktoTweet
 *
 * A modification of Paragraph blocks to add a click to tweet feature.
 * If applied to the entire block the whole paragraph is tweetable.
 * If text is highlighted and the click to tweet format is applied, only that
 * highlighted text will recieve a tweetable link.
 */

// Internal dependencies.

_blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_0__["default"].clicktotweet = function () {
  const tweetBlocks = []; //stores all of our found blocks
  let tweetLabel = 'Tweet this';
  const findElements = function () {
    //find all the blocks
    const elements = document.querySelectorAll('.wp-block-bu-clicktotweet');
    //if found
    if (elements.length > 0) {
      //for each found block do stuff
      elements.forEach(function (theBlock, item) {
        const block = {};

        // Get DOM element.
        block.element = theBlock;

        // Check if this block has a highlight subsection of text
        if (theBlock.classList.contains('has-format-highlight')) {
          block.highlight = theBlock.querySelector('.wp-block-bu-clicktotweet-highlight');

          // Get and store the highlighted text as our text to tweet.
          block.tweet_text = block.highlight.innerText;
        } else {
          // Get the entire paragraph's text to tweet.
          block.tweet_text = theBlock.innerText;
        }

        //for each one found store as object in the array
        tweetBlocks.push(block);
      });
    }
  };

  /*
  Setup click handlers for these blocks
  */
  const setupHandlers = function () {
    if (tweetBlocks.length > 0) {
      // Loop through all found Tweet Blocks
      tweetBlocks.forEach(function (theBlock, item) {
        let btn;

        // If has subtext highlighted to tweet use that.
        if (theBlock.highlight) {
          btn = theBlock.highlight;
        } else {
          // Otherwise append the tweet button for the whole <p>.
          btn = document.createElement('button');
          btn.appendChild(document.createTextNode(tweetLabel));
          btn.classList.add('wp-block-bu-clicktotweet-action');
          btn.classList.add('js-wp-block-clicktotweet-action');
          theBlock.element.appendChild(btn);

          // Store reference to the btn.
          theBlock.btn = btn;
        }

        // If we have a button element, setup click handler
        // to open Tweet window.
        if (btn) {
          btn.addEventListener('click', function (e) {
            e.preventDefault();
            openTweet(theBlock.tweet_text);
          });
        }
      });
    }
  };

  /*
  Opens a small window with
  the Twitter Link Sharing Tool open and
  passes the text of the tweet and url
  of the post	to Twitter.
  */
  var openTweet = function (text) {
    const tweetedLink = window.location.href;
    window.open('http://twitter.com/intent/tweet?url=' + tweetedLink + '&text=' + text + '&', 'twitterwindow', 'height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
  };

  /*
  Helper function to set the Button text
  to a new value on new and existing blocks.
   */
  const setButtonText = function (str) {
    tweetLabel = str;
    tweetBlocks.forEach(function (theBlock, item) {
      if (theBlock.btn) {
        theBlock.btn.innerText = tweetLabel;
      }
    });
  };
  const tweetInit = function () {
    //find the elements
    findElements();

    //setup handlers
    setupHandlers();
  };

  //start on dom ready (ie8+)
  document.addEventListener('DOMContentLoaded', function () {
    tweetInit();
  });
  return {
    gettweetBlocks() {
      return tweetBlocks;
    },
    settweetButtonText(str) {
      setButtonText(str);
    }
  };
}();

/***/ }),

/***/ "./src/blocks/collapsible-control/frontend.js":
/*!****************************************************!*\
  !*** ./src/blocks/collapsible-control/frontend.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks-frontend-tools */ "./src/blocks-frontend-tools.js");
/**
 * BLOCK: collapsible-control
 *
 * A block to toggle collapsible blocks on the page
 */

// Internal dependencies.

_blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_0__["default"].collapsibleControl = function () {
  // Store all Control blocks
  const collapsibleControlBlocks = [];
  const allCollapsibleBlocks = [];
  let allBlocksOpen = false;
  const collapsibleOpenClass = 'is-open';
  const collapsibleCloseClass = 'is-closed';

  /**
   * Open or close a group of collapsible blocks
   *
   * @param array             collapsible blocks
   * @param bool              true to open set of collapsible blocks, false to close
   * @param collapsibleBlocks
   * @param open
   */
  const controlCollapsibleBlocks = function (collapsibleBlocks, open) {
    if (open === undefined) {
      open = true;
    }
    collapsibleBlocks.forEach(function (collapsible, i) {
      const container = collapsible.container;
      const toggle = collapsible.toggle;
      const panel = collapsible.panel;
      if (open) {
        container.classList.add(collapsibleOpenClass);
        container.classList.remove(collapsibleCloseClass);
        toggle.setAttribute('aria-expanded', true);
        panel.setAttribute('aria-hidden', false);
      } else {
        container.classList.remove(collapsibleOpenClass);
        container.classList.add(collapsibleCloseClass);
        toggle.setAttribute('aria-expanded', false);
        panel.setAttribute('aria-hidden', true);
      }
    });
  };

  /**
   * Toggle all Collapsible blocks
   * @param control
   */
  const toggleAll = function (control) {
    if (0 === allCollapsibleBlocks.length) {
      return;
    }
    controlCollapsibleBlocks(allCollapsibleBlocks, !allBlocksOpen);
    allBlocksOpen = allBlocksOpen ? false : true;
  };

  /**
   * Toggle Collapsible blocks in control's group
   * @param control
   */
  const toggleGroup = function (control) {
    const groupIsOpen = control.groupIsOpen;
    const collapsibleBlocks = control.collapsibleBlocks;
    controlCollapsibleBlocks(collapsibleBlocks, !groupIsOpen);
    control.groupIsOpen = groupIsOpen ? false : true;
  };

  /**
   * Find all Collapsible blocks on a page
   */
  const findAllCollapsibleBlocks = function () {
    const containers = document.querySelectorAll('.js-wp-block-bu-collapsible');

    // Don't coninue if no Collapsible blocks exist
    if (containers.length === 0) {
      return;
    }
    containers.forEach(function (element, i) {
      const block = {};
      block.container = element;
      block.toggle = element.querySelector('.js-bu-block-collapsible-toggle');
      block.panel = element.querySelector('.js-bu-block-collapsible-content');
      allCollapsibleBlocks.push(block);
    });
  };

  /**
   * Return all Collapsible blocks in the group with a Control
   *
   * @param object  control
   *
   * @param control
   * @return array list of all collapsible blocks in group
   */
  const getGroupCollapsibleBlocks = function (control) {
    const blocks = [];
    const group = control.closest('.wp-block-group');
    if (!group) {
      return blocks;
    }
    const containers = group.querySelectorAll('.js-wp-block-bu-collapsible');
    containers.forEach(function (element, i) {
      const block = {};
      block.container = element;
      block.toggle = element.querySelector('.js-bu-block-collapsible-toggle');
      block.panel = element.querySelector('.js-bu-block-collapsible-content');
      blocks.push(block);
    });
    return blocks;
  };

  /**
   * Find all Controls and Collapsible blocks
   */
  const findElements = function () {
    const controls = document.querySelectorAll('.bu-collapsible-control-toggle');
    let allCollapsibleBlocksFound = false;

    // Don't coninue if no Controls are found
    if (controls.length === 0) {
      return;
    }

    // Store all controls
    controls.forEach(function (control, i) {
      const block = {};
      block.toggle = control;

      // Check if Control targets all blocks or blocks in its group
      if (control.classList.contains('js-bu-collapsible-control-target-group')) {
        block.targetGroup = true;
        block.collapsibleBlocks = getGroupCollapsibleBlocks(control);
        block.groupIsOpen = false;
      } else {
        block.targetGroup = false;
        if (!allCollapsibleBlocksFound) {
          findAllCollapsibleBlocks();
        }
        allCollapsibleBlocksFound = true;
      }
      collapsibleControlBlocks.push(block);
    });
  };

  /**
   * Set up handlers, aria, and other functionality
   */
  const setupCollapsibleControlBlocks = function () {
    if (collapsibleControlBlocks.length === 0) {
      return;
    }
    collapsibleControlBlocks.forEach(function (control, i) {
      const toggle = control.toggle;
      const targetGroup = control.targetGroup;
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        if (targetGroup) {
          toggleGroup(control);
        } else {
          toggleAll(control);
        }
      });
    });
  };

  /**
   * Init
   */
  const collapsibleControlInit = function () {
    findElements();
    setupCollapsibleControlBlocks();
  };

  // Start things on dom ready.
  document.addEventListener('DOMContentLoaded', function () {
    collapsibleControlInit();
  });
}();

/***/ }),

/***/ "./src/blocks/collapsible/frontend.js":
/*!********************************************!*\
  !*** ./src/blocks/collapsible/frontend.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks-frontend-tools */ "./src/blocks-frontend-tools.js");
/**
 * BLOCK: Collapsible
 *
 * An accordian block to display content
 */

// Internal dependencies.

_blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_0__["default"].collapsible = function () {
  // Store all collapsible block
  const collapsibleBlocks = [];
  const collapsibleOpenClass = 'is-open';
  const collapsibleClosedClass = 'is-closed';
  const eventOpen = new CustomEvent('bu-blocks-collapsible-open');
  const eventClose = new CustomEvent('bu-blocks-collapsible-close');

  /**
   * Check if a Collapsible block is set to open by default by user.
   *
   * @param object      collapsible block
   * @param collapsible
   * @return bool
   */
  const isOpenDefault = function (collapsible) {
    const container = collapsible.container;
    if ('true' === container.getAttribute('data-default-open')) {
      return true;
    }
    return false;
  };

  /**
   * Check if a Collapsible block is open.
   *
   * @param object      collapsible block
   * @param collapsible
   * @return bool
   */
  const isOpen = function (collapsible) {
    const container = collapsible.container;
    if (container.classList.contains(collapsibleOpenClass)) {
      return true;
    }
    return false;
  };

  /**
   * Open Collapsible block
   *
   * @param object      collapsible block
   * @param collapsible
   */
  const openCollapsible = function (collapsible) {
    const container = collapsible.container;
    const toggle = collapsible.toggle;
    const panel = collapsible.panel;
    container.classList.add(collapsibleOpenClass);
    container.classList.remove(collapsibleClosedClass);
    toggle.setAttribute('aria-expanded', true);
    panel.setAttribute('aria-hidden', false);
    if (container.classList.contains('is-style-preview')) {
      toggle.innerHTML = toggle.getAttribute('data-close-text');
    }
    //dispatch the event on the dom element
    container.dispatchEvent(eventOpen);
  };

  /**
   * Close Collapsible block
   *
   * @param object      collapsible block
   * @param collapsible
   */
  const closeCollapsible = function (collapsible) {
    const container = collapsible.container;
    const toggle = collapsible.toggle;
    const panel = collapsible.panel;
    container.classList.remove(collapsibleOpenClass);
    container.classList.add(collapsibleClosedClass);
    toggle.setAttribute('aria-expanded', false);
    panel.setAttribute('aria-hidden', true);
    if (container.classList.contains('is-style-preview')) {
      toggle.innerHTML = toggle.getAttribute('data-open-text');
    }
    //dispatch the event on the dom element
    container.dispatchEvent(eventClose);
  };

  /**
   * Toggle collapsible block
   *
   * @param element     collapsible block
   * @param collapsible
   */
  const toggleCollapsible = function (collapsible) {
    if (isOpen(collapsible)) {
      closeCollapsible(collapsible);
    } else {
      openCollapsible(collapsible);
    }
  };

  /**
   * Find all Collapsible blocks
   */
  const findElements = function () {
    const containers = document.querySelectorAll('.js-wp-block-bu-collapsible');

    // Don't coninue if no Collapsible blocks exist
    if (containers.length === 0) {
      return;
    }
    containers.forEach(function (element, i) {
      const block = {};
      block.container = element;
      block.toggle = element.querySelector('.js-bu-block-collapsible-toggle');
      block.panel = element.querySelector('.js-bu-block-collapsible-content');
      collapsibleBlocks.push(block);
    });
  };

  /**
   * Set up handlers, aria, and other functionality
   */
  const setupCollapsibleBlocks = function () {
    if (collapsibleBlocks.length === 0) {
      return;
    }
    collapsibleBlocks.forEach(function (collapsible, i) {
      const container = collapsible.container;
      const toggle = collapsible.toggle;
      const panel = collapsible.panel;

      // Add toggle event
      toggle.addEventListener('click', function (e) {
        e.preventDefault();
        toggleCollapsible(collapsible);
      });

      // Set ARIA attributes
      toggle.setAttribute('aria-controls', panel.id);
      panel.setAttribute('aria-labelledby', toggle.id);

      // Setup initial state of each block.
      if (isOpenDefault(collapsible)) {
        openCollapsible(collapsible);
      } else {
        closeCollapsible(collapsible);
      }
      if (isOpen(collapsible)) {
        toggle.setAttribute('aria-expanded', true);
        panel.setAttribute('aria-hidden', false);
      } else {
        toggle.setAttribute('aria-expanded', false);
        panel.setAttribute('aria-hidden', true);
      }
    });
  };

  /**
   * Init
   */
  const collapsibleInit = function () {
    findElements();
    setupCollapsibleBlocks();
  };

  // Start things on dom ready.
  document.addEventListener('DOMContentLoaded', function () {
    collapsibleInit();
  });
  return {
    getcollapsibleBlocks() {
      return collapsibleBlocks;
    },
    toggleCollapsible(collapsible) {
      if (collapsible) {
        toggleCollapsible(collapsible);
      }
    }
  };
}();

/***/ }),

/***/ "./src/blocks/drawer/frontend.js":
/*!***************************************!*\
  !*** ./src/blocks/drawer/frontend.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks-frontend-tools */ "./src/blocks-frontend-tools.js");
/**
 * BLOCK: Drawer
 *
 * A drawer block that provides a callout and expandable
 * content section that opens within the flow of the page.
 */

// Internal dependencies.

_blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_0__["default"].drawer = function () {
  const drawerBlocks = []; //stores all of our found blocks
  const $body = document.getElementsByTagName('body')[0]; //target body tag
  const eventOpen = new CustomEvent('bu-blocks-drawer-open');
  const eventClose = new CustomEvent('bu-blocks-drawer-close');
  const toggleDrawer = function (drawer) {
    // Using an if statement to check the class
    if (drawer.classList.contains('show-drawer')) {
      drawer.classList.remove('show-drawer');
      //dispatch the event on the drawer dom element
      drawer.dispatchEvent(eventClose);
    } else {
      drawer.classList.add('show-drawer');
      //dispatch the event on the drawer dom element
      drawer.dispatchEvent(eventOpen);
    }
  };
  const findElements = function () {
    //find all the blocks
    const elements = document.querySelectorAll('.js-bu-block-drawer');
    //if found
    if (elements.length > 0) {
      //for each found block do stuff
      for (let i = 0; i < elements.length; i++) {
        const block = {};

        //get first returned drawer content element
        block.drawer = elements[i];
        //get all matched trigger btns
        block.button = elements[i].querySelectorAll('.js-bu-block-drawer-open');
        //get first returned overlay element
        block.close = elements[i].querySelector('.js-bu-block-drawer-close');

        //for each one found store as object in the array
        drawerBlocks.push(block);
      }
    }
  };
  const setupHandlers = function () {
    if (drawerBlocks.length > 0) {
      drawerBlocks.forEach(function (thisDrawer, item) {
        //some drawer blocks may have more than one trigger btn
        //so loop through all matched to setup events
        thisDrawer.button.forEach(function (button, index) {
          //for each btn we find, add an event handler
          button.addEventListener('click', function (e) {
            e.preventDefault();
            toggleDrawer(thisDrawer.drawer);
          });
        });
        thisDrawer.close.addEventListener('click', function (e) {
          e.preventDefault();
          toggleDrawer(thisDrawer.drawer);
        });
      });
    }
  };
  const drawerInit = function () {
    //find the elements
    findElements();

    //setup handlers
    setupHandlers();
  };

  //start on dom ready (ie8+)
  document.addEventListener('DOMContentLoaded', function () {
    drawerInit();
  });
  return {
    getdrawerBlocks() {
      return drawerBlocks;
    },
    toggleDrawer(drawer) {
      if (drawer) {
        toggleDrawer(drawer);
      }
    }
  };
}();

/***/ }),

/***/ "./src/blocks/modal/frontend.js":
/*!**************************************!*\
  !*** ./src/blocks/modal/frontend.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks-frontend-tools */ "./src/blocks-frontend-tools.js");
/**
 * BLOCK: Modal
 *
 * A modal block that provides a callout and expandable
 * overlay content section that opens on top of the page content.
 */

// Internal dependencies.

_blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_0__["default"].modal = function () {
  const modalBlocks = [];
  const $body = document.getElementsByTagName('body')[0];
  const eventOpen = new CustomEvent('bu-blocks-modal-open');
  const eventClose = new CustomEvent('bu-blocks-modal-close');
  const lockScroll = function () {
    $body.classList.add('bu-blocks-modal-noscroll');
  };
  const unlockScroll = function () {
    $body.classList.remove('bu-blocks-modal-noscroll');
  };
  const toggleModal = function (overlay) {
    // Using an if statement to check the class
    if (overlay.classList.contains('show-overlay')) {
      overlay.classList.remove('show-overlay');
      //dispatch the event on the overlay dom element
      overlay.dispatchEvent(eventClose);
      unlockScroll();
    } else {
      overlay.classList.add('show-overlay');
      //dispatch the event on the overlay dom element
      overlay.dispatchEvent(eventOpen);
      lockScroll();
    }
  };
  const findElements = function () {
    //find all the blocks
    const elements = document.querySelectorAll('.js-bu-block-modal');
    //if found
    if (elements.length > 0) {
      //for each found block do stuff
      for (let i = 0; i < elements.length; i++) {
        const block = {};

        //get first returned overlay element
        block.overlay = elements[i].querySelector('.js-bu-block-modal-overlay');
        //get all matched trigger btns
        block.button = elements[i].querySelectorAll('.js-bu-block-modal-trigger-overlay');
        //get first returned overlay element
        block.close = elements[i].querySelector('.js-bu-block-modal-overlay-close');

        //for each one found store as object in the array
        modalBlocks.push(block);
      }
    }
  };
  const setupHandlers = function () {
    if (modalBlocks.length > 0) {
      modalBlocks.forEach(function (thisModal, item) {
        //some modals may have more than one trigger btn
        //so loop through all matched to setup events
        thisModal.button.forEach(function (button, index) {
          //for each btn we find, add an event handler
          button.addEventListener('click', function (e) {
            e.preventDefault();
            toggleModal(thisModal.overlay);
          });
        });
        thisModal.close.addEventListener('click', function (e) {
          e.preventDefault();
          toggleModal(thisModal.overlay);
        });
      });
    }
  };
  const modalInit = function () {
    //find the elements
    findElements();

    //setup handlers
    setupHandlers();
  };

  //start on dom ready (ie8+)
  document.addEventListener('DOMContentLoaded', function () {
    modalInit();
  });
  return {
    getmodalBlocks() {
      return modalBlocks;
    },
    toggleModal(overlay) {
      if (overlay) {
        toggleModal(overlay);
      }
    }
  };
}();

/***/ }),

/***/ "./src/blocks/photoessay/frontend.js":
/*!*******************************************!*\
  !*** ./src/blocks/photoessay/frontend.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks-frontend-tools */ "./src/blocks-frontend-tools.js");
/**
 * BLOCK: Photoessay
 *
 * A photo layout row block.
 */

// Internal dependencies.

_blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_0__["default"].photoessay = function () {
  let scrollTop = 0;
  const photoEssayBlocks = []; //stores all of our found blocks
  const photoEssayGroups = [];
  let photoEssayOverlay = false;
  const photoEssayFigures = {};
  let overlayActiveGroup = false;
  const $html = document.getElementsByTagName('html')[0]; //target html tag
  const $body = document.getElementsByTagName('body')[0]; //target body tag

  /*
   * Find all photo essay blocks
   * and store in an array.
   *
   * For each found get all of the DOM
   * elements we'll need
   *
   */
  const findElements = function () {
    //find all the blocks
    const findBlocks = document.querySelectorAll('.js-block-editorial-photoessay');
    const elements = [].slice.call(findBlocks);

    //if found
    if (elements.length > 0) {
      //for each found block do stuff
      for (let i = 0; i < elements.length; i++) {
        var group = Array();
        const block = {};
        block.element = elements[i];

        //get first returned social photo block element
        group.push(block);
        const siblings = getSiblings(elements[i], '.js-block-editorial-photoessay');
        if (siblings.length > 0) {
          //add siblings to group.
          siblings.forEach(function (sibling, index) {
            const sib = {};
            sib.element = sibling;
            group.push(sib);
          });

          //reduce elements array by removing the siblings
          elements.splice(i, siblings.length);
        }

        //for each one found store as object in the array
        photoEssayGroups.push(group);
      }
    }
  };

  /*
   * For Each Photo Essay Block Setup:
   *
   * Setup the Overlay Container DOM elements.
   *
   * Find each Figure inside each block inside each group and build
   * an array for each "group" with all of the figures in order so we
   * can later traverse.
   *
   * Then call setupHandlers() to setup
   * remaining event handlers for opening the overlay, etc.
   *
   */
  const setupBlocks = function () {
    if (photoEssayGroups.length > 0) {
      photoEssayOverlay = {};
      photoEssayOverlay.container = appendOverlay();
      photoEssayOverlay.closeBtn = photoEssayOverlay.container.querySelector('.js-block-editorial-photoessay-overlay-close');
      photoEssayOverlay.prevBtn = photoEssayOverlay.container.querySelector('.js-block-editorial-photoessay-overlay-prev');
      photoEssayOverlay.nextBtn = photoEssayOverlay.container.querySelector('.js-block-editorial-photoessay-overlay-next');
      photoEssayOverlay.photoContainer = photoEssayOverlay.container.querySelector('.wp-block-editorial-photoessay-photocontainer');

      // Foreach Group let's assign an id
      // and then traverse the blocks to find all of the
      // figure elements and push them into a global object.
      photoEssayGroups.forEach(function (group, index) {
        // Create an id for each group.
        const groupID = 'photoEssay_' + index;

        // Add an object with a key of the group id.
        photoEssayFigures[groupID] = Array();

        //group.figures = Array();
        // Loop through each Group and iterate on the blocks.
        group.forEach(function (block, item) {
          // Find all of the Figure elements for the block as
          // each photoessay block can support multiple photos.
          block.figures = block.element.querySelectorAll('figure');

          // For each Figure element push it into the global object
          // under the key for that group.
          block.figures.forEach(function (figure, item) {
            photoEssayFigures[groupID].push(figure);
          });
        });
      });

      // Setup this block.
      setupHandlers();
    }
  };

  /*
   * Setup Handler for clicking on images/figure elements
   * and opening the overlay with the selected figure (image)
   * element.
   */
  const openPhotoHandler = function (figure, group) {
    // setup click handler
    figure.addEventListener('click', function (e) {
      e.preventDefault();

      //Set as Active Group
      overlayActiveGroup = photoEssayFigures[group];

      // Add the selected figure to the overlay
      overlayAddContent(figure);

      // Open the Photo Overlay.
      overlayToggle();
    });
  };

  /*
   * Setup remaining Handlers
   * for Progress Bar and Audio Complete Callbacks
   *
   * These use callbacks set in the global Audio API
   */
  var setupHandlers = function () {
    for (group in photoEssayFigures) {
      photoEssayFigures[group].forEach(function (figure, item) {
        openPhotoHandler(figure, group);
      });
    }
    photoEssayOverlay.closeBtn.addEventListener('click', function (e) {
      e.preventDefault();
      overlayToggle();
    });
    function nextSharedAction() {
      const next = nextPhoto();
      removeActiveFigure();
      overlayAddContent(overlayActiveGroup[next]);
    }
    photoEssayOverlay.nextBtn.addEventListener('click', function (e) {
      e.preventDefault();
      nextSharedAction();
    });
    function prevSharedAction() {
      const prev = prevPhoto();
      removeActiveFigure();
      overlayAddContent(overlayActiveGroup[prev]);
    }
    photoEssayOverlay.prevBtn.addEventListener('click', function (e) {
      e.preventDefault();
      prevSharedAction();
    });
    document.onkeydown = checkKey;
    function checkKey(e) {
      e = e || window.event;
      if (e.keyCode == '39') {
        nextSharedAction();
      } else if (e.keyCode == '37') {
        prevSharedAction();
      }
    }
  };

  /*
   * Next Photo
   *
   * Find the next photo in the
   * currently active group if any exist.
   *
   * Return the index to that item in the array.
   */
  var nextPhoto = function () {
    let next = false;
    const last = overlayActiveGroup.length - 1;
    const current = overlayActiveGroup.findIndex(function (element) {
      return element.classList.contains('active');
    });
    if (current < last) {
      next = current + 1;
    } else if (current === last) {
      next = 0;
    }
    return next;
  };

  /*
   * Previous Photo
   *
   * Find the previous photo in the
   * currently active group if any exist.
   *
   * Return the index to that item in the array.
   */
  var prevPhoto = function () {
    let prev = false;
    const last = overlayActiveGroup.length - 1;
    const current = overlayActiveGroup.findIndex(function (element) {
      return element.classList.contains('active');
    });
    if (current > 0) {
      prev = current - 1;
    } else if (current === 0) {
      prev = last;
    }
    return prev;
  };

  /*
   * Open/Close Overlay
   *
   * Additionally sets up an event listener to
   * monitor scroll events when the overlay is open.
   */
  var overlayToggle = function () {
    if ($html.classList.contains('show-photo-essay-overlay')) {
      // Closing: Remove event listener.
      document.removeEventListener('scroll', scrollEvent);
    } else {
      // Opening: Add Event Listener.
      document.addEventListener('scroll', scrollEvent);

      // Set current ScrollTop position.
      scrollTop = $html.scrollTop;
    }

    //Toggle the show-overlay class.
    overlayClass();
  };

  /*
   * Event Handler for scroll event
   *
   * Handles closing the overlay if the user
   * intends to scroll "out" of it and continue reading.
   *
   * Serves as an alternative to the close button.
   */
  var scrollEvent = function (e) {
    if ($html.scrollTop - scrollTop > 250) {
      //console.log("close");
      // Reset scrollTop.
      scrollTop = 0;

      // Remove Event Listener until next overlay is open.
      document.removeEventListener('scroll', scrollEvent);

      // Close Overlay.
      overlayClass();
    }
  };

  /*
   * Toggle the "show" class for the overlay
   * element by toggling the class on the
   * HTML tag.
   */
  var overlayClass = function () {
    if (overlayActiveGroup.length > 1) {
      $html.classList.toggle('photo-essay-overlay-has-multiple');
    }
    $html.classList.toggle('show-photo-essay-overlay');
  };

  /*
   * Remove all "active" classes on any
   * figure element in the active group.
   */
  var removeActiveFigure = function () {
    for (let i = 0; i < overlayActiveGroup.length; i++) {
      if (overlayActiveGroup[i].matches('.active')) {
        overlayActiveGroup[i].classList.remove('active');
      }
    }
  };

  /*
   * Add clone of image & caption figure
   * to the overlay component
   *
   * @param figure the figure to clone and add.
   */
  var overlayAddContent = function (figure) {
    figure.classList.add('active');

    // Clone with child elements.
    const newFigure = figure.cloneNode(true);

    // Clean anything that might exist.
    photoEssayOverlay.photoContainer.innerHTML = '';

    // Append to overlay container.
    photoEssayOverlay.photoContainer.appendChild(newFigure);

    //Wrap the img tag in a span for better styling.
    wrapElement(photoEssayOverlay.photoContainer.querySelector('img'), document.createElement('span'));
  };

  /*
   * Add Overlay to the body
   *
   */
  var appendOverlay = function () {
    const element = document.createElement('div');
    const html = overlayTemplate();
    element.innerHTML = html;
    return $body.appendChild(element);
  };

  /*
   * Wrap an element in  some html:
   *
   * example: wrapElement(document.querySelector('a.wrap_me'), document.createElement('div'));
   *
   */
  var wrapElement = function (el, wrapper) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  };

  /*
   * Generate the template for the
   * Overlay to display larger photos
   * in from each photoessay block.
   */
  var overlayTemplate = function () {
    const html = ['<div class="wp-block-editorial-photoessay-overlay">', '<nav class="wp-block-editorial-photoessay-overlay-nav">', '<button class="wp-block-editorial-photoessay-overlay-prev js-block-editorial-photoessay-overlay-prev"><span>Previous</span></button>', '<button class="wp-block-editorial-photoessay-overlay-close js-block-editorial-photoessay-overlay-close"><span>Close</span></button>', '<button class="wp-block-editorial-photoessay-overlay-next js-block-editorial-photoessay-overlay-next"><span>Next</span></button>', '</nav>', '<div class="wp-block-editorial-photoessay-container">', '<div class="wp-block-editorial-photoessay-photocontainer">', '</div>', '</div>', '</div>'].join('\n');
    return html;
  };

  /*
   * Get Siblings of the passed element until
   * selector doesn't match.
   *
   * Returns Array of sibling elements.
   */
  var getSiblings = function (elem, selector) {
    // Setup siblings array
    const siblings = [];

    // Get the next sibling element
    elem = elem.nextElementSibling;

    // As long as a sibling exists
    while (elem) {
      // If selector doesn't match, bail
      if (!elem.matches(selector)) {
        break;
      }

      // Otherwise, push it to the siblings array
      siblings.push(elem);

      // Get the next sibling element
      elem = elem.nextElementSibling;
    }
    return siblings;
  };
  const init = function () {
    //find the elements
    findElements();

    //setup blocks
    setupBlocks();
  };

  //start on dom ready (ie8+)
  document.addEventListener('DOMContentLoaded', function () {
    init();
  });
  return {
    getBlocks() {
      return photoEssayBlocks;
    },
    getActiveGroup() {
      return overlayActiveGroup;
    }
  };
}();

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!********************************!*\
  !*** ./src/blocks-frontend.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_frontend_polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks-frontend-polyfills */ "./src/blocks-frontend-polyfills.js");
/* harmony import */ var _blocks_frontend_polyfills__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_frontend_polyfills__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks-frontend-tools */ "./src/blocks-frontend-tools.js");
/* harmony import */ var _blocks_clicktotweet_frontend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/clicktotweet/frontend */ "./src/blocks/clicktotweet/frontend.js");
/* harmony import */ var _blocks_collapsible_frontend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/collapsible/frontend */ "./src/blocks/collapsible/frontend.js");
/* harmony import */ var _blocks_collapsible_control_frontend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/collapsible-control/frontend */ "./src/blocks/collapsible-control/frontend.js");
/* harmony import */ var _blocks_drawer_frontend__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/drawer/frontend */ "./src/blocks/drawer/frontend.js");
/* harmony import */ var _blocks_modal_frontend__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/modal/frontend */ "./src/blocks/modal/frontend.js");
/* harmony import */ var _blocks_photoessay_frontend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/photoessay/frontend */ "./src/blocks/photoessay/frontend.js");
/**
 * Frontend JS for BU Blocks
 *
 */



// Import the bu_blocks object that all data and public functions are stored on.


// Import the frontend JS for each block so it is enqueued together into one file.







// Export bu_blocks object to the window so it's accessible easily for
// child themes to call public functions or debug.
window.bu_blocks = _blocks_frontend_tools__WEBPACK_IMPORTED_MODULE_1__["default"];
}();
/******/ })()
;
//# sourceMappingURL=bu-blocks-frontend.js.map