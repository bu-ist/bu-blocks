/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_sample_sample_js__ = __webpack_require__(/*! ./blocks/sample/sample.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_headline_headline_js__ = __webpack_require__(/*! ./blocks/headline/headline.js */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_aside_aside_js__ = __webpack_require__(/*! ./blocks/aside/aside.js */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_modal_modal_js__ = __webpack_require__(/*! ./blocks/modal/modal.js */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_introparagraph_introparagraph_js__ = __webpack_require__(/*! ./blocks/introparagraph/introparagraph.js */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_button_button_js__ = __webpack_require__(/*! ./blocks/button/button.js */ 17);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//import './blocks/block/block.js';\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8vaW1wb3J0ICcuL2Jsb2Nrcy9ibG9jay9ibG9jay5qcyc7XG5pbXBvcnQgJy4vYmxvY2tzL3NhbXBsZS9zYW1wbGUuanMnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9oZWFkbGluZS9oZWFkbGluZS5qcyc7XG5pbXBvcnQgJy4vYmxvY2tzL2FzaWRlL2FzaWRlLmpzJztcbmltcG9ydCAnLi9ibG9ja3MvbW9kYWwvbW9kYWwuanMnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9pbnRyb3BhcmFncmFwaC9pbnRyb3BhcmFncmFwaC5qcyc7XG5pbXBvcnQgJy4vYmxvY2tzL2J1dHRvbi9idXR0b24uanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*************************************!*\
  !*** ./src/blocks/sample/sample.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: bu-sample-cgb\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2FtcGxlL3NhbXBsZS5qcz8wMGI0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IGJ1LXNhbXBsZS1jZ2JcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9zYW1wbGUvc2FtcGxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**************************************!*\
  !*** ./src/blocks/sample/style.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2FtcGxlL3N0eWxlLnNjc3M/ZTBkMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9zYW1wbGUvc3R5bGUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***************************************!*\
  !*** ./src/blocks/sample/editor.scss ***!
  \***************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2FtcGxlL2VkaXRvci5zY3NzP2M0YjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3Mvc2FtcGxlL2VkaXRvci5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*****************************************!*\
  !*** ./src/blocks/headline/headline.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: bu-headline-cgb\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGxpbmUvaGVhZGxpbmUuanM/MDAwZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBidS1oZWFkbGluZS1jZ2JcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGJhc2ljIGJsb2NrIHdpdGggR3V0ZW5iZXJnLlxuICogU2ltcGxlIGJsb2NrLCByZW5kZXJzIGFuZCBzYXZlcyB0aGUgc2FtZSBjb250ZW50IHdpdGhvdXQgYW55IGludGVyYWN0aXZpdHkuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9oZWFkbGluZS9oZWFkbGluZS5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!****************************************!*\
  !*** ./src/blocks/headline/style.scss ***!
  \****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGxpbmUvc3R5bGUuc2Nzcz85N2QxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2hlYWRsaW5lL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*****************************************!*\
  !*** ./src/blocks/headline/editor.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGxpbmUvZWRpdG9yLnNjc3M/ZDQyOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9oZWFkbGluZS9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!***********************************!*\
  !*** ./src/blocks/aside/aside.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_register_block_preset_js__ = __webpack_require__(/*! ../../global/register-block-preset.js */ 10);\n/**\n * BLOCK: bu-aside-cgb\n *\n * A container for related information that accepts image,\n * headline, paragraph, and button blocks as children.\n */\n\n// Import CSS.\n\n\n\n// Internal dependencies.\n\n\n// WordPress dependencies.\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar Fragment = wp.element.Fragment;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    InnerBlocks = _wp$editor.InnerBlocks;\n\n// Register the block.\n\nvar asideBlock = registerBlockType('editorial/aside', {\n\n\ttitle: __('Aside'),\n\tdescription: __('Add an aside with related information. Accepts image, headline, paragraph, and button blocks as children.'),\n\ticon: 'format-aside',\n\tcategory: 'bu-editorial',\n\tsupports: {\n\t\talign: ['left', 'right']\n\t},\n\tattributes: {\n\t\tcolorScheme: {\n\t\t\ttype: 'string',\n\t\t\tdefault: ''\n\t\t}\n\t},\n\n\tedit: function edit(props) {\n\t\tvar attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes,\n\t\t    className = props.className,\n\t\t    presetTemplate = props.presetTemplate;\n\t\tvar colorScheme = attributes.colorScheme;\n\n\t\tvar allowedBlocks = ['core/image', 'core/heading', 'core/paragraph', 'core/button'];\n\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelBody,\n\t\t\t\t\t{ title: __('Color Settings') },\n\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\tlabel: __('Color Scheme'),\n\t\t\t\t\t\tvalue: colorScheme || '',\n\t\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\t\treturn setAttributes({ colorScheme: value });\n\t\t\t\t\t\t},\n\t\t\t\t\t\toptions: [{ value: '', label: __('None') }, { value: 'has-light-background', label: __('Light Background') }, { value: 'has-dark-background', label: __('Dark Background') }, { value: 'has-primary-background', label: __('Primary Background') }]\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'aside',\n\t\t\t\t{ className: [className, colorScheme].join(' ').trim() },\n\t\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\t\tallowedBlocks: allowedBlocks,\n\t\t\t\t\ttemplate: presetTemplate\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\tsave: function save(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    className = _ref.className;\n\t\tvar colorScheme = attributes.colorScheme;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'aside',\n\t\t\t{ className: [className, colorScheme].join(' ').trim() },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});\n\nvar presetTemplate = [['core/image'], ['core/heading', { placeholder: 'Enter aside title…' }], ['core/paragraph', { placeholder: 'Enter aside content…' }], ['core/button']];\n\nObject(__WEBPACK_IMPORTED_MODULE_2__global_register_block_preset_js__[\"a\" /* default */])(asideBlock, presetTemplate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYXNpZGUvYXNpZGUuanM/NWY3YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBidS1hc2lkZS1jZ2JcbiAqXG4gKiBBIGNvbnRhaW5lciBmb3IgcmVsYXRlZCBpbmZvcm1hdGlvbiB0aGF0IGFjY2VwdHMgaW1hZ2UsXG4gKiBoZWFkbGluZSwgcGFyYWdyYXBoLCBhbmQgYnV0dG9uIGJsb2NrcyBhcyBjaGlsZHJlbi5cbiAqL1xuXG4vLyBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuLy8gSW50ZXJuYWwgZGVwZW5kZW5jaWVzLlxuaW1wb3J0IFJlZ2lzdGVyQmxvY2tQcmVzZXQgZnJvbSAnLi4vLi4vZ2xvYmFsL3JlZ2lzdGVyLWJsb2NrLXByZXNldC5qcyc7XG5cbi8vIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXMuXG52YXIgX18gPSB3cC5pMThuLl9fO1xudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIEZyYWdtZW50ID0gd3AuZWxlbWVudC5GcmFnbWVudDtcbnZhciBfd3AkY29tcG9uZW50cyA9IHdwLmNvbXBvbmVudHMsXG4gICAgUGFuZWxCb2R5ID0gX3dwJGNvbXBvbmVudHMuUGFuZWxCb2R5LFxuICAgIFNlbGVjdENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5TZWxlY3RDb250cm9sO1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgSW5zcGVjdG9yQ29udHJvbHMgPSBfd3AkZWRpdG9yLkluc3BlY3RvckNvbnRyb2xzLFxuICAgIElubmVyQmxvY2tzID0gX3dwJGVkaXRvci5Jbm5lckJsb2NrcztcblxuLy8gUmVnaXN0ZXIgdGhlIGJsb2NrLlxuXG52YXIgYXNpZGVCbG9jayA9IHJlZ2lzdGVyQmxvY2tUeXBlKCdlZGl0b3JpYWwvYXNpZGUnLCB7XG5cblx0dGl0bGU6IF9fKCdBc2lkZScpLFxuXHRkZXNjcmlwdGlvbjogX18oJ0FkZCBhbiBhc2lkZSB3aXRoIHJlbGF0ZWQgaW5mb3JtYXRpb24uIEFjY2VwdHMgaW1hZ2UsIGhlYWRsaW5lLCBwYXJhZ3JhcGgsIGFuZCBidXR0b24gYmxvY2tzIGFzIGNoaWxkcmVuLicpLFxuXHRpY29uOiAnZm9ybWF0LWFzaWRlJyxcblx0Y2F0ZWdvcnk6ICdidS1lZGl0b3JpYWwnLFxuXHRzdXBwb3J0czoge1xuXHRcdGFsaWduOiBbJ2xlZnQnLCAncmlnaHQnXVxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Y29sb3JTY2hlbWU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9XG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcblx0XHQgICAgcHJlc2V0VGVtcGxhdGUgPSBwcm9wcy5wcmVzZXRUZW1wbGF0ZTtcblx0XHR2YXIgY29sb3JTY2hlbWUgPSBhdHRyaWJ1dGVzLmNvbG9yU2NoZW1lO1xuXG5cdFx0dmFyIGFsbG93ZWRCbG9ja3MgPSBbJ2NvcmUvaW1hZ2UnLCAnY29yZS9oZWFkaW5nJywgJ2NvcmUvcGFyYWdyYXBoJywgJ2NvcmUvYnV0dG9uJ107XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0XHR7IHRpdGxlOiBfXygnQ29sb3IgU2V0dGluZ3MnKSB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogX18oJ0NvbG9yIFNjaGVtZScpLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGNvbG9yU2NoZW1lIHx8ICcnLFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgY29sb3JTY2hlbWU6IHZhbHVlIH0pO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9wdGlvbnM6IFt7IHZhbHVlOiAnJywgbGFiZWw6IF9fKCdOb25lJykgfSwgeyB2YWx1ZTogJ2hhcy1saWdodC1iYWNrZ3JvdW5kJywgbGFiZWw6IF9fKCdMaWdodCBCYWNrZ3JvdW5kJykgfSwgeyB2YWx1ZTogJ2hhcy1kYXJrLWJhY2tncm91bmQnLCBsYWJlbDogX18oJ0RhcmsgQmFja2dyb3VuZCcpIH0sIHsgdmFsdWU6ICdoYXMtcHJpbWFyeS1iYWNrZ3JvdW5kJywgbGFiZWw6IF9fKCdQcmltYXJ5IEJhY2tncm91bmQnKSB9XVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdhc2lkZScsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBbY2xhc3NOYW1lLCBjb2xvclNjaGVtZV0uam9pbignICcpLnRyaW0oKSB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIHtcblx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzOiBhbGxvd2VkQmxvY2tzLFxuXHRcdFx0XHRcdHRlbXBsYXRlOiBwcmVzZXRUZW1wbGF0ZVxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZTtcblx0XHR2YXIgY29sb3JTY2hlbWUgPSBhdHRyaWJ1dGVzLmNvbG9yU2NoZW1lO1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2FzaWRlJyxcblx0XHRcdHsgY2xhc3NOYW1lOiBbY2xhc3NOYW1lLCBjb2xvclNjaGVtZV0uam9pbignICcpLnRyaW0oKSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBwcmVzZXRUZW1wbGF0ZSA9IFtbJ2NvcmUvaW1hZ2UnXSwgWydjb3JlL2hlYWRpbmcnLCB7IHBsYWNlaG9sZGVyOiAnRW50ZXIgYXNpZGUgdGl0bGXigKYnIH1dLCBbJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ0VudGVyIGFzaWRlIGNvbnRlbnTigKYnIH1dLCBbJ2NvcmUvYnV0dG9uJ11dO1xuXG5SZWdpc3RlckJsb2NrUHJlc2V0KGFzaWRlQmxvY2ssIHByZXNldFRlbXBsYXRlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvYXNpZGUvYXNpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*************************************!*\
  !*** ./src/blocks/aside/style.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYXNpZGUvc3R5bGUuc2Nzcz8xMjMwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2FzaWRlL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**************************************!*\
  !*** ./src/blocks/aside/editor.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvYXNpZGUvZWRpdG9yLnNjc3M/Y2I3YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9hc2lkZS9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!*********************************************!*\
  !*** ./src/global/register-block-preset.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * Registers a variation of a block with a preset template.\n */\n\n// WordPress dependencies.\nvar registerBlockType = wp.blocks.registerBlockType;\nvar createElement = wp.element.createElement;\nvar addFilter = wp.hooks.addFilter;\n\n/**\n * Register a preset variation of a given block.\n *\n * @param {Object} originalBlock  Block type to build preset variation from.\n * @param {Object} presetTemplate Template to apply.\n *\n * @return {Object} Filtered props applied to save element.\n */\n\nvar RegisterBlockPreset = function RegisterBlockPreset(originalBlock, presetTemplate) {\n\tvar name = originalBlock.name,\n\t    title = originalBlock.title,\n\t    edit = originalBlock.edit,\n\t    save = originalBlock.save;\n\n\tvar presetBlock = Object.assign({}, originalBlock);\n\tvar nameParts = name.split('/');\n\n\t// Filter the classname of the preset block to match the default block.\n\tvar filterBlockClassName = function filterBlockClassName(className, blockName) {\n\t\tif (presetBlock.name === blockName) {\n\t\t\tclassName = className.replace(/-preset/i, '');\n\t\t}\n\n\t\treturn className;\n\t};\n\n\tpresetBlock.name = nameParts[0] + '-preset/' + nameParts[1];\n\tpresetBlock.title = title + ' (preset)';\n\tpresetBlock.category = 'bu-editorial-presets';\n\tpresetBlock.save = save;\n\n\t// Add a `presetTemplate` property to the default block's edit component.\n\tpresetBlock.edit = function (props) {\n\t\treturn createElement(edit, Object.assign(props, { presetTemplate: presetTemplate }));\n\t};\n\n\t// Register the preset variation of the default block.\n\tregisterBlockType(presetBlock.name, presetBlock);\n\n\t// Filter the classname of the preset block to match the default block.\n\taddFilter('blocks.getBlockDefaultClassName', 'bu-blocks/preset-block-class-name/', filterBlockClassName);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (RegisterBlockPreset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsL3JlZ2lzdGVyLWJsb2NrLXByZXNldC5qcz83NjM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVnaXN0ZXJzIGEgdmFyaWF0aW9uIG9mIGEgYmxvY2sgd2l0aCBhIHByZXNldCB0ZW1wbGF0ZS5cbiAqL1xuXG4vLyBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzLlxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQ7XG52YXIgYWRkRmlsdGVyID0gd3AuaG9va3MuYWRkRmlsdGVyO1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgcHJlc2V0IHZhcmlhdGlvbiBvZiBhIGdpdmVuIGJsb2NrLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcmlnaW5hbEJsb2NrICBCbG9jayB0eXBlIHRvIGJ1aWxkIHByZXNldCB2YXJpYXRpb24gZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcmVzZXRUZW1wbGF0ZSBUZW1wbGF0ZSB0byBhcHBseS5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IEZpbHRlcmVkIHByb3BzIGFwcGxpZWQgdG8gc2F2ZSBlbGVtZW50LlxuICovXG5cbnZhciBSZWdpc3RlckJsb2NrUHJlc2V0ID0gZnVuY3Rpb24gUmVnaXN0ZXJCbG9ja1ByZXNldChvcmlnaW5hbEJsb2NrLCBwcmVzZXRUZW1wbGF0ZSkge1xuXHR2YXIgbmFtZSA9IG9yaWdpbmFsQmxvY2submFtZSxcblx0ICAgIHRpdGxlID0gb3JpZ2luYWxCbG9jay50aXRsZSxcblx0ICAgIGVkaXQgPSBvcmlnaW5hbEJsb2NrLmVkaXQsXG5cdCAgICBzYXZlID0gb3JpZ2luYWxCbG9jay5zYXZlO1xuXG5cdHZhciBwcmVzZXRCbG9jayA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsQmxvY2spO1xuXHR2YXIgbmFtZVBhcnRzID0gbmFtZS5zcGxpdCgnLycpO1xuXG5cdC8vIEZpbHRlciB0aGUgY2xhc3NuYW1lIG9mIHRoZSBwcmVzZXQgYmxvY2sgdG8gbWF0Y2ggdGhlIGRlZmF1bHQgYmxvY2suXG5cdHZhciBmaWx0ZXJCbG9ja0NsYXNzTmFtZSA9IGZ1bmN0aW9uIGZpbHRlckJsb2NrQ2xhc3NOYW1lKGNsYXNzTmFtZSwgYmxvY2tOYW1lKSB7XG5cdFx0aWYgKHByZXNldEJsb2NrLm5hbWUgPT09IGJsb2NrTmFtZSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoLy1wcmVzZXQvaSwgJycpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc05hbWU7XG5cdH07XG5cblx0cHJlc2V0QmxvY2submFtZSA9IG5hbWVQYXJ0c1swXSArICctcHJlc2V0LycgKyBuYW1lUGFydHNbMV07XG5cdHByZXNldEJsb2NrLnRpdGxlID0gdGl0bGUgKyAnIChwcmVzZXQpJztcblx0cHJlc2V0QmxvY2suY2F0ZWdvcnkgPSAnYnUtZWRpdG9yaWFsLXByZXNldHMnO1xuXHRwcmVzZXRCbG9jay5zYXZlID0gc2F2ZTtcblxuXHQvLyBBZGQgYSBgcHJlc2V0VGVtcGxhdGVgIHByb3BlcnR5IHRvIHRoZSBkZWZhdWx0IGJsb2NrJ3MgZWRpdCBjb21wb25lbnQuXG5cdHByZXNldEJsb2NrLmVkaXQgPSBmdW5jdGlvbiAocHJvcHMpIHtcblx0XHRyZXR1cm4gY3JlYXRlRWxlbWVudChlZGl0LCBPYmplY3QuYXNzaWduKHByb3BzLCB7IHByZXNldFRlbXBsYXRlOiBwcmVzZXRUZW1wbGF0ZSB9KSk7XG5cdH07XG5cblx0Ly8gUmVnaXN0ZXIgdGhlIHByZXNldCB2YXJpYXRpb24gb2YgdGhlIGRlZmF1bHQgYmxvY2suXG5cdHJlZ2lzdGVyQmxvY2tUeXBlKHByZXNldEJsb2NrLm5hbWUsIHByZXNldEJsb2NrKTtcblxuXHQvLyBGaWx0ZXIgdGhlIGNsYXNzbmFtZSBvZiB0aGUgcHJlc2V0IGJsb2NrIHRvIG1hdGNoIHRoZSBkZWZhdWx0IGJsb2NrLlxuXHRhZGRGaWx0ZXIoJ2Jsb2Nrcy5nZXRCbG9ja0RlZmF1bHRDbGFzc05hbWUnLCAnYnUtYmxvY2tzL3ByZXNldC1ibG9jay1jbGFzcy1uYW1lLycsIGZpbHRlckJsb2NrQ2xhc3NOYW1lKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyQmxvY2tQcmVzZXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2xvYmFsL3JlZ2lzdGVyLWJsb2NrLXByZXNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!***********************************!*\
  !*** ./src/blocks/modal/modal.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: bu-aside-cgb\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21vZGFsL21vZGFsLmpzPzk2MDkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCTE9DSzogYnUtYXNpZGUtY2diXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvbW9kYWwvbW9kYWwuanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!*************************************!*\
  !*** ./src/blocks/modal/style.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21vZGFsL3N0eWxlLnNjc3M/MzUyYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9tb2RhbC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!**************************************!*\
  !*** ./src/blocks/modal/editor.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21vZGFsL2VkaXRvci5zY3NzPzk2NTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvbW9kYWwvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*****************************************************!*\
  !*** ./src/blocks/introparagraph/introparagraph.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: bu-sample-cgb\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ludHJvcGFyYWdyYXBoL2ludHJvcGFyYWdyYXBoLmpzPzMwODUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCTE9DSzogYnUtc2FtcGxlLWNnYlxuICpcbiAqIFJlZ2lzdGVyaW5nIGEgYmFzaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBTaW1wbGUgYmxvY2ssIHJlbmRlcnMgYW5kIHNhdmVzIHRoZSBzYW1lIGNvbnRlbnQgd2l0aG91dCBhbnkgaW50ZXJhY3Rpdml0eS5cbiAqL1xuXG4vLyAgSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2ludHJvcGFyYWdyYXBoL2ludHJvcGFyYWdyYXBoLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!**********************************************!*\
  !*** ./src/blocks/introparagraph/style.scss ***!
  \**********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ludHJvcGFyYWdyYXBoL3N0eWxlLnNjc3M/YjFmNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9pbnRyb3BhcmFncmFwaC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!***********************************************!*\
  !*** ./src/blocks/introparagraph/editor.scss ***!
  \***********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ludHJvcGFyYWdyYXBoL2VkaXRvci5zY3NzP2EwNWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvaW50cm9wYXJhZ3JhcGgvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*************************************!*\
  !*** ./src/blocks/button/button.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 19);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: bu-button-cgb\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2J1dHRvbi9idXR0b24uanM/YTMzNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBidS1idXR0b24tY2diXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvYnV0dG9uL2J1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!**************************************!*\
  !*** ./src/blocks/button/style.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2J1dHRvbi9zdHlsZS5zY3NzP2M5ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvYnV0dG9uL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!***************************************!*\
  !*** ./src/blocks/button/editor.scss ***!
  \***************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2J1dHRvbi9lZGl0b3Iuc2Nzcz9kZWE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2J1dHRvbi9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///19\n");

/***/ })
/******/ ]);