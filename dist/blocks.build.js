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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_sample_sample_js__ = __webpack_require__(/*! ./blocks/sample/sample.js */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_headline_headline_js__ = __webpack_require__(/*! ./blocks/headline/headline.js */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_aside_aside_js__ = __webpack_require__(/*! ./blocks/aside/aside.js */ 10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blocks_modal_modal_js__ = __webpack_require__(/*! ./blocks/modal/modal.js */ 14);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__blocks_introparagraph_introparagraph_js__ = __webpack_require__(/*! ./blocks/introparagraph/introparagraph.js */ 17);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blocks_pullquote_pullquote_js__ = __webpack_require__(/*! ./blocks/pullquote/pullquote.js */ 20);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__blocks_button_button_js__ = __webpack_require__(/*! ./blocks/button/button.js */ 23);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__blocks_storycard_storycard_js__ = __webpack_require__(/*! ./blocks/storycard/storycard.js */ 29);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blocks_relatedstories_relatedstories_js__ = __webpack_require__(/*! ./blocks/relatedstories/relatedstories.js */ 26);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//import './blocks/block/block.js';\n\n\n\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8vaW1wb3J0ICcuL2Jsb2Nrcy9ibG9jay9ibG9jay5qcyc7XG5pbXBvcnQgJy4vYmxvY2tzL3NhbXBsZS9zYW1wbGUuanMnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9oZWFkbGluZS9oZWFkbGluZS5qcyc7XG5pbXBvcnQgJy4vYmxvY2tzL2FzaWRlL2FzaWRlLmpzJztcbmltcG9ydCAnLi9ibG9ja3MvbW9kYWwvbW9kYWwuanMnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9pbnRyb3BhcmFncmFwaC9pbnRyb3BhcmFncmFwaC5qcyc7XG5pbXBvcnQgJy4vYmxvY2tzL3B1bGxxdW90ZS9wdWxscXVvdGUuanMnO1xuaW1wb3J0ICcuL2Jsb2Nrcy9idXR0b24vYnV0dG9uLmpzJztcbmltcG9ydCAnLi9ibG9ja3Mvc3RvcnljYXJkL3N0b3J5Y2FyZC5qcyc7XG5pbXBvcnQgJy4vYmxvY2tzL3JlbGF0ZWRzdG9yaWVzL3JlbGF0ZWRzdG9yaWVzLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

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
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__heading_toolbar__ = __webpack_require__(/*! ./heading-toolbar */ 7);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pretext_format_js__ = __webpack_require__(/*! ./pretext-format.js */ 8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pretext_format_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__pretext_format_js__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__posttext_format_js__ = __webpack_require__(/*! ./posttext-format.js */ 9);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__posttext_format_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__posttext_format_js__);\n/**\n * BLOCK: bu-headline-cgb\n *\n * A headline with anchor support and pre- and post-text formatting options.\n */\n\n// Import CSS.\n\n\n\n// Import internal dependencies.\n\n\n\n\n// WordPress dependencies.\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar Fragment = wp.element.Fragment;\nvar _wp$editor = wp.editor,\n    RichText = _wp$editor.RichText,\n    BlockControls = _wp$editor.BlockControls;\nvar select = wp.data.select;\n\n// The current publication owner.\n\nvar publicationClass = document.getElementById('bu_publication_owner').value;\n\n// Register the block.\nregisterBlockType('editorial/headline', {\n\n\ttitle: __('Headline'),\n\tdescription: __('Add a section heading with an anchor and pre- and post-text formatting options.'),\n\ticon: wp.element.createElement(\n\t\t'svg',\n\t\t{ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24' },\n\t\twp.element.createElement('path', { fill: '#c00', d: 'M5 4v3h5.5v12h3V7H19V4z' }),\n\t\twp.element.createElement('path', { fill: 'none', d: 'M0 0h24v24H0V0z' })\n\t),\n\tcategory: 'bu-editorial',\n\tsupports: {\n\t\tanchor: true\n\t},\n\tattributes: {\n\t\tcontent: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'html',\n\t\t\tselector: '.wp-block-editorial-headline'\n\t\t},\n\t\tlevel: {\n\t\t\ttype: 'number',\n\t\t\tdefault: 2\n\t\t},\n\t\tanchor: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'attribute',\n\t\t\tattribute: 'id',\n\t\t\tselector: '.wp-block-editorial-headline'\n\t\t}\n\t},\n\tstyles: [{\n\t\tname: 'default',\n\t\tlabel: __('Regular'),\n\t\tisDefault: true\n\t}, {\n\t\tname: 'emphasis-weight',\n\t\tlabel: __('Emphasize weight')\n\t}, {\n\t\tname: 'emphasis-color',\n\t\tlabel: __('Emphasize color')\n\t}],\n\tpublicationClassName: publicationClass + '-block-editorial-headline',\n\n\tedit: function edit(props) {\n\t\tvar attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes,\n\t\t    className = props.className,\n\t\t    clientId = props.clientId;\n\t\tvar content = attributes.content,\n\t\t    level = attributes.level,\n\t\t    anchor = attributes.anchor;\n\n\t\tvar tagName = 'h' + level;\n\n\t\t// Generate an index-based value for the anchor attribute if it is not set.\n\t\tif (!anchor) {\n\t\t\tvar allBlocks = select('core/editor').getBlocks();\n\t\t\tvar headlineBlocks = allBlocks.filter(function (e) {\n\t\t\t\treturn e.name === 'editorial/headline';\n\t\t\t});\n\t\t\tvar HeadlineIndex = headlineBlocks.findIndex(function (e) {\n\t\t\t\treturn e.clientId === clientId;\n\t\t\t});\n\t\t\tvar id = 'headline-' + (HeadlineIndex + 1);\n\n\t\t\tsetAttributes({ anchor: id });\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tBlockControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(__WEBPACK_IMPORTED_MODULE_2__heading_toolbar__[\"a\" /* default */], { minLevel: 2, maxLevel: 5, selectedLevel: level, onChange: function onChange(newLevel) {\n\t\t\t\t\t\treturn setAttributes({ level: newLevel });\n\t\t\t\t\t} })\n\t\t\t),\n\t\t\twp.element.createElement(RichText, {\n\t\t\t\ttagName: tagName,\n\t\t\t\tclassName: className,\n\t\t\t\tvalue: content,\n\t\t\t\tonChange: function onChange(content) {\n\t\t\t\t\treturn setAttributes({ content: content });\n\t\t\t\t},\n\t\t\t\tplaceholder: __('Write headline…'),\n\t\t\t\tformattingControls: ['pretext', 'posttext', 'bold', 'italic']\n\t\t\t})\n\t\t);\n\t},\n\tsave: function save(_ref) {\n\t\tvar attributes = _ref.attributes;\n\t\tvar content = attributes.content,\n\t\t    level = attributes.level;\n\n\t\tvar tagName = 'h' + level;\n\n\t\treturn wp.element.createElement(RichText.Content, {\n\t\t\ttagName: tagName,\n\t\t\tvalue: content\n\t\t});\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGxpbmUvaGVhZGxpbmUuanM/MDAwZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBidS1oZWFkbGluZS1jZ2JcbiAqXG4gKiBBIGhlYWRsaW5lIHdpdGggYW5jaG9yIHN1cHBvcnQgYW5kIHByZS0gYW5kIHBvc3QtdGV4dCBmb3JtYXR0aW5nIG9wdGlvbnMuXG4gKi9cblxuLy8gSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbi8vIEltcG9ydCBpbnRlcm5hbCBkZXBlbmRlbmNpZXMuXG5pbXBvcnQgSGVhZGluZ1Rvb2xiYXIgZnJvbSAnLi9oZWFkaW5nLXRvb2xiYXInO1xuaW1wb3J0ICcuL3ByZXRleHQtZm9ybWF0LmpzJztcbmltcG9ydCAnLi9wb3N0dGV4dC1mb3JtYXQuanMnO1xuXG4vLyBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzLlxudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBSaWNoVGV4dCA9IF93cCRlZGl0b3IuUmljaFRleHQsXG4gICAgQmxvY2tDb250cm9scyA9IF93cCRlZGl0b3IuQmxvY2tDb250cm9scztcbnZhciBzZWxlY3QgPSB3cC5kYXRhLnNlbGVjdDtcblxuLy8gVGhlIGN1cnJlbnQgcHVibGljYXRpb24gb3duZXIuXG5cbnZhciBwdWJsaWNhdGlvbkNsYXNzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1X3B1YmxpY2F0aW9uX293bmVyJykudmFsdWU7XG5cbi8vIFJlZ2lzdGVyIHRoZSBibG9jay5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdlZGl0b3JpYWwvaGVhZGxpbmUnLCB7XG5cblx0dGl0bGU6IF9fKCdIZWFkbGluZScpLFxuXHRkZXNjcmlwdGlvbjogX18oJ0FkZCBhIHNlY3Rpb24gaGVhZGluZyB3aXRoIGFuIGFuY2hvciBhbmQgcHJlLSBhbmQgcG9zdC10ZXh0IGZvcm1hdHRpbmcgb3B0aW9ucy4nKSxcblx0aWNvbjogd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdCdzdmcnLFxuXHRcdHsgeG1sbnM6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsIHZpZXdCb3g6ICcwIDAgMjQgMjQnIH0sXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBmaWxsOiAnI2MwMCcsIGQ6ICdNNSA0djNoNS41djEyaDNWN0gxOVY0eicgfSksXG5cdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdwYXRoJywgeyBmaWxsOiAnbm9uZScsIGQ6ICdNMCAwaDI0djI0SDBWMHonIH0pXG5cdCksXG5cdGNhdGVnb3J5OiAnYnUtZWRpdG9yaWFsJyxcblx0c3VwcG9ydHM6IHtcblx0XHRhbmNob3I6IHRydWVcblx0fSxcblx0YXR0cmlidXRlczoge1xuXHRcdGNvbnRlbnQ6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnaHRtbCcsXG5cdFx0XHRzZWxlY3RvcjogJy53cC1ibG9jay1lZGl0b3JpYWwtaGVhZGxpbmUnXG5cdFx0fSxcblx0XHRsZXZlbDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiAyXG5cdFx0fSxcblx0XHRhbmNob3I6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnYXR0cmlidXRlJyxcblx0XHRcdGF0dHJpYnV0ZTogJ2lkJyxcblx0XHRcdHNlbGVjdG9yOiAnLndwLWJsb2NrLWVkaXRvcmlhbC1oZWFkbGluZSdcblx0XHR9XG5cdH0sXG5cdHN0eWxlczogW3tcblx0XHRuYW1lOiAnZGVmYXVsdCcsXG5cdFx0bGFiZWw6IF9fKCdSZWd1bGFyJyksXG5cdFx0aXNEZWZhdWx0OiB0cnVlXG5cdH0sIHtcblx0XHRuYW1lOiAnZW1waGFzaXMtd2VpZ2h0Jyxcblx0XHRsYWJlbDogX18oJ0VtcGhhc2l6ZSB3ZWlnaHQnKVxuXHR9LCB7XG5cdFx0bmFtZTogJ2VtcGhhc2lzLWNvbG9yJyxcblx0XHRsYWJlbDogX18oJ0VtcGhhc2l6ZSBjb2xvcicpXG5cdH1dLFxuXHRwdWJsaWNhdGlvbkNsYXNzTmFtZTogcHVibGljYXRpb25DbGFzcyArICctYmxvY2stZWRpdG9yaWFsLWhlYWRsaW5lJyxcblxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuXHRcdCAgICBzZXRBdHRyaWJ1dGVzID0gcHJvcHMuc2V0QXR0cmlidXRlcyxcblx0XHQgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuXHRcdCAgICBjbGllbnRJZCA9IHByb3BzLmNsaWVudElkO1xuXHRcdHZhciBjb250ZW50ID0gYXR0cmlidXRlcy5jb250ZW50LFxuXHRcdCAgICBsZXZlbCA9IGF0dHJpYnV0ZXMubGV2ZWwsXG5cdFx0ICAgIGFuY2hvciA9IGF0dHJpYnV0ZXMuYW5jaG9yO1xuXG5cdFx0dmFyIHRhZ05hbWUgPSAnaCcgKyBsZXZlbDtcblxuXHRcdC8vIEdlbmVyYXRlIGFuIGluZGV4LWJhc2VkIHZhbHVlIGZvciB0aGUgYW5jaG9yIGF0dHJpYnV0ZSBpZiBpdCBpcyBub3Qgc2V0LlxuXHRcdGlmICghYW5jaG9yKSB7XG5cdFx0XHR2YXIgYWxsQmxvY2tzID0gc2VsZWN0KCdjb3JlL2VkaXRvcicpLmdldEJsb2NrcygpO1xuXHRcdFx0dmFyIGhlYWRsaW5lQmxvY2tzID0gYWxsQmxvY2tzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHRyZXR1cm4gZS5uYW1lID09PSAnZWRpdG9yaWFsL2hlYWRsaW5lJztcblx0XHRcdH0pO1xuXHRcdFx0dmFyIEhlYWRsaW5lSW5kZXggPSBoZWFkbGluZUJsb2Nrcy5maW5kSW5kZXgoZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0cmV0dXJuIGUuY2xpZW50SWQgPT09IGNsaWVudElkO1xuXHRcdFx0fSk7XG5cdFx0XHR2YXIgaWQgPSAnaGVhZGxpbmUtJyArIChIZWFkbGluZUluZGV4ICsgMSk7XG5cblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBhbmNob3I6IGlkIH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRGcmFnbWVudCxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEJsb2NrQ29udHJvbHMsXG5cdFx0XHRcdG51bGwsXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChIZWFkaW5nVG9vbGJhciwgeyBtaW5MZXZlbDogMiwgbWF4TGV2ZWw6IDUsIHNlbGVjdGVkTGV2ZWw6IGxldmVsLCBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UobmV3TGV2ZWwpIHtcblx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgbGV2ZWw6IG5ld0xldmVsIH0pO1xuXHRcdFx0XHRcdH0gfSlcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcblx0XHRcdFx0dGFnTmFtZTogdGFnTmFtZSxcblx0XHRcdFx0Y2xhc3NOYW1lOiBjbGFzc05hbWUsXG5cdFx0XHRcdHZhbHVlOiBjb250ZW50LFxuXHRcdFx0XHRvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoY29udGVudCkge1xuXHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgY29udGVudDogY29udGVudCB9KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cGxhY2Vob2xkZXI6IF9fKCdXcml0ZSBoZWFkbGluZeKApicpLFxuXHRcdFx0XHRmb3JtYXR0aW5nQ29udHJvbHM6IFsncHJldGV4dCcsICdwb3N0dGV4dCcsICdib2xkJywgJ2l0YWxpYyddXG5cdFx0XHR9KVxuXHRcdCk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzO1xuXHRcdHZhciBjb250ZW50ID0gYXR0cmlidXRlcy5jb250ZW50LFxuXHRcdCAgICBsZXZlbCA9IGF0dHJpYnV0ZXMubGV2ZWw7XG5cblx0XHR2YXIgdGFnTmFtZSA9ICdoJyArIGxldmVsO1xuXG5cdFx0cmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dC5Db250ZW50LCB7XG5cdFx0XHR0YWdOYW1lOiB0YWdOYW1lLFxuXHRcdFx0dmFsdWU6IGNvbnRlbnRcblx0XHR9KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2hlYWRsaW5lL2hlYWRsaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///4\n");

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
/*!************************************************!*\
  !*** ./src/blocks/headline/heading-toolbar.js ***!
  \************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * WordPress dependencies\n */\nvar _wp$i18n = wp.i18n,\n    __ = _wp$i18n.__,\n    sprintf = _wp$i18n.sprintf;\nvar Component = wp.element.Component;\nvar Toolbar = wp.components.Toolbar;\n\nvar HeadingToolbar = function (_Component) {\n\t_inherits(HeadingToolbar, _Component);\n\n\tfunction HeadingToolbar() {\n\t\t_classCallCheck(this, HeadingToolbar);\n\n\t\treturn _possibleConstructorReturn(this, (HeadingToolbar.__proto__ || Object.getPrototypeOf(HeadingToolbar)).apply(this, arguments));\n\t}\n\n\t_createClass(HeadingToolbar, [{\n\t\tkey: 'createLevelControl',\n\t\tvalue: function createLevelControl(targetLevel, selectedLevel, onChange) {\n\t\t\treturn {\n\t\t\t\ticon: 'heading',\n\t\t\t\t// translators: %s: heading level e.g: \"1\", \"2\", \"3\"\n\t\t\t\ttitle: sprintf(__('Heading %d'), targetLevel),\n\t\t\t\tisActive: targetLevel === selectedLevel,\n\t\t\t\tonClick: function onClick() {\n\t\t\t\t\treturn onChange(targetLevel);\n\t\t\t\t},\n\t\t\t\tsubscript: String(targetLevel)\n\t\t\t};\n\t\t}\n\t}, {\n\t\tkey: 'render',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar _props = this.props,\n\t\t\t    minLevel = _props.minLevel,\n\t\t\t    maxLevel = _props.maxLevel,\n\t\t\t    selectedLevel = _props.selectedLevel,\n\t\t\t    onChange = _props.onChange;\n\n\t\t\tvar range = Array.from({ length: maxLevel - minLevel }, function (v, k) {\n\t\t\t\treturn k + minLevel;\n\t\t\t});\n\n\t\t\treturn wp.element.createElement(Toolbar, { controls: range.map(function (index) {\n\t\t\t\t\treturn _this2.createLevelControl(index, selectedLevel, onChange);\n\t\t\t\t}) });\n\t\t}\n\t}]);\n\n\treturn HeadingToolbar;\n}(Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (HeadingToolbar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGxpbmUvaGVhZGluZy10b29sYmFyLmpzP2ZhYWMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkgeyBpZiAoIXNlbGYpIHsgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyB9IHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmOyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG4vKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xudmFyIF93cCRpMThuID0gd3AuaTE4bixcbiAgICBfXyA9IF93cCRpMThuLl9fLFxuICAgIHNwcmludGYgPSBfd3AkaTE4bi5zcHJpbnRmO1xudmFyIENvbXBvbmVudCA9IHdwLmVsZW1lbnQuQ29tcG9uZW50O1xudmFyIFRvb2xiYXIgPSB3cC5jb21wb25lbnRzLlRvb2xiYXI7XG5cbnZhciBIZWFkaW5nVG9vbGJhciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG5cdF9pbmhlcml0cyhIZWFkaW5nVG9vbGJhciwgX0NvbXBvbmVudCk7XG5cblx0ZnVuY3Rpb24gSGVhZGluZ1Rvb2xiYXIoKSB7XG5cdFx0X2NsYXNzQ2FsbENoZWNrKHRoaXMsIEhlYWRpbmdUb29sYmFyKTtcblxuXHRcdHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoSGVhZGluZ1Rvb2xiYXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihIZWFkaW5nVG9vbGJhcikpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuXHR9XG5cblx0X2NyZWF0ZUNsYXNzKEhlYWRpbmdUb29sYmFyLCBbe1xuXHRcdGtleTogJ2NyZWF0ZUxldmVsQ29udHJvbCcsXG5cdFx0dmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZUxldmVsQ29udHJvbCh0YXJnZXRMZXZlbCwgc2VsZWN0ZWRMZXZlbCwgb25DaGFuZ2UpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGljb246ICdoZWFkaW5nJyxcblx0XHRcdFx0Ly8gdHJhbnNsYXRvcnM6ICVzOiBoZWFkaW5nIGxldmVsIGUuZzogXCIxXCIsIFwiMlwiLCBcIjNcIlxuXHRcdFx0XHR0aXRsZTogc3ByaW50ZihfXygnSGVhZGluZyAlZCcpLCB0YXJnZXRMZXZlbCksXG5cdFx0XHRcdGlzQWN0aXZlOiB0YXJnZXRMZXZlbCA9PT0gc2VsZWN0ZWRMZXZlbCxcblx0XHRcdFx0b25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcblx0XHRcdFx0XHRyZXR1cm4gb25DaGFuZ2UodGFyZ2V0TGV2ZWwpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdWJzY3JpcHQ6IFN0cmluZyh0YXJnZXRMZXZlbClcblx0XHRcdH07XG5cdFx0fVxuXHR9LCB7XG5cdFx0a2V5OiAncmVuZGVyJyxcblx0XHR2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuXHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cblx0XHRcdHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuXHRcdFx0ICAgIG1pbkxldmVsID0gX3Byb3BzLm1pbkxldmVsLFxuXHRcdFx0ICAgIG1heExldmVsID0gX3Byb3BzLm1heExldmVsLFxuXHRcdFx0ICAgIHNlbGVjdGVkTGV2ZWwgPSBfcHJvcHMuc2VsZWN0ZWRMZXZlbCxcblx0XHRcdCAgICBvbkNoYW5nZSA9IF9wcm9wcy5vbkNoYW5nZTtcblxuXHRcdFx0dmFyIHJhbmdlID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogbWF4TGV2ZWwgLSBtaW5MZXZlbCB9LCBmdW5jdGlvbiAodiwgaykge1xuXHRcdFx0XHRyZXR1cm4gayArIG1pbkxldmVsO1xuXHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVG9vbGJhciwgeyBjb250cm9sczogcmFuZ2UubWFwKGZ1bmN0aW9uIChpbmRleCkge1xuXHRcdFx0XHRcdHJldHVybiBfdGhpczIuY3JlYXRlTGV2ZWxDb250cm9sKGluZGV4LCBzZWxlY3RlZExldmVsLCBvbkNoYW5nZSk7XG5cdFx0XHRcdH0pIH0pO1xuXHRcdH1cblx0fV0pO1xuXG5cdHJldHVybiBIZWFkaW5nVG9vbGJhcjtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGluZ1Rvb2xiYXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2hlYWRsaW5lL2hlYWRpbmctdG9vbGJhci5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!***********************************************!*\
  !*** ./src/blocks/headline/pretext-format.js ***!
  \***********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("/**\n * Format: bu-headline-pretext\n *\n * A RichText format button for wrapping selected text in a span with the\n * 'wp-block-editorial-headline-pretext' span.\n */\n\n// Import WordPress dependencies\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar _wp$richText = wp.richText,\n    registerFormatType = _wp$richText.registerFormatType,\n    toggleFormat = _wp$richText.toggleFormat;\nvar _wp$editor = wp.editor,\n    RichTextToolbarButton = _wp$editor.RichTextToolbarButton,\n    RichTextShortcut = _wp$editor.RichTextShortcut;\n\n\nvar name = 'editorial/pretext';\n\nregisterFormatType(name, {\n\n\ttitle: __('Pretext'),\n\ttagName: 'span',\n\tclassName: 'wp-block-editorial-headline-pretext',\n\n\tedit: function edit(_ref) {\n\t\tvar isActive = _ref.isActive,\n\t\t    value = _ref.value,\n\t\t    onChange = _ref.onChange;\n\n\t\tvar onToggle = function onToggle() {\n\t\t\treturn onChange(toggleFormat(value, { type: name }));\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(RichTextShortcut, {\n\t\t\t\ttype: 'access',\n\t\t\t\tcharacter: 'a',\n\t\t\t\tonUse: onToggle\n\t\t\t}),\n\t\t\twp.element.createElement(RichTextToolbarButton, {\n\t\t\t\tname: 'pretext',\n\t\t\t\ticon: 'warning',\n\t\t\t\ttitle: __('Pretext'),\n\t\t\t\tonClick: onToggle,\n\t\t\t\tisActive: isActive,\n\t\t\t\tshortcutType: 'access',\n\t\t\t\tshortcutCharacter: 'a'\n\t\t\t})\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGxpbmUvcHJldGV4dC1mb3JtYXQuanM/Mjk2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEZvcm1hdDogYnUtaGVhZGxpbmUtcHJldGV4dFxuICpcbiAqIEEgUmljaFRleHQgZm9ybWF0IGJ1dHRvbiBmb3Igd3JhcHBpbmcgc2VsZWN0ZWQgdGV4dCBpbiBhIHNwYW4gd2l0aCB0aGVcbiAqICd3cC1ibG9jay1lZGl0b3JpYWwtaGVhZGxpbmUtcHJldGV4dCcgc3Bhbi5cbiAqL1xuXG4vLyBJbXBvcnQgV29yZFByZXNzIGRlcGVuZGVuY2llc1xudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG52YXIgX3dwJHJpY2hUZXh0ID0gd3AucmljaFRleHQsXG4gICAgcmVnaXN0ZXJGb3JtYXRUeXBlID0gX3dwJHJpY2hUZXh0LnJlZ2lzdGVyRm9ybWF0VHlwZSxcbiAgICB0b2dnbGVGb3JtYXQgPSBfd3AkcmljaFRleHQudG9nZ2xlRm9ybWF0O1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHRUb29sYmFyQnV0dG9uID0gX3dwJGVkaXRvci5SaWNoVGV4dFRvb2xiYXJCdXR0b24sXG4gICAgUmljaFRleHRTaG9ydGN1dCA9IF93cCRlZGl0b3IuUmljaFRleHRTaG9ydGN1dDtcblxuXG52YXIgbmFtZSA9ICdlZGl0b3JpYWwvcHJldGV4dCc7XG5cbnJlZ2lzdGVyRm9ybWF0VHlwZShuYW1lLCB7XG5cblx0dGl0bGU6IF9fKCdQcmV0ZXh0JyksXG5cdHRhZ05hbWU6ICdzcGFuJyxcblx0Y2xhc3NOYW1lOiAnd3AtYmxvY2stZWRpdG9yaWFsLWhlYWRsaW5lLXByZXRleHQnLFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBpc0FjdGl2ZSA9IF9yZWYuaXNBY3RpdmUsXG5cdFx0ICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcblx0XHQgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuXG5cdFx0dmFyIG9uVG9nZ2xlID0gZnVuY3Rpb24gb25Ub2dnbGUoKSB7XG5cdFx0XHRyZXR1cm4gb25DaGFuZ2UodG9nZ2xlRm9ybWF0KHZhbHVlLCB7IHR5cGU6IG5hbWUgfSkpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0U2hvcnRjdXQsIHtcblx0XHRcdFx0dHlwZTogJ2FjY2VzcycsXG5cdFx0XHRcdGNoYXJhY3RlcjogJ2EnLFxuXHRcdFx0XHRvblVzZTogb25Ub2dnbGVcblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0VG9vbGJhckJ1dHRvbiwge1xuXHRcdFx0XHRuYW1lOiAncHJldGV4dCcsXG5cdFx0XHRcdGljb246ICd3YXJuaW5nJyxcblx0XHRcdFx0dGl0bGU6IF9fKCdQcmV0ZXh0JyksXG5cdFx0XHRcdG9uQ2xpY2s6IG9uVG9nZ2xlLFxuXHRcdFx0XHRpc0FjdGl2ZTogaXNBY3RpdmUsXG5cdFx0XHRcdHNob3J0Y3V0VHlwZTogJ2FjY2VzcycsXG5cdFx0XHRcdHNob3J0Y3V0Q2hhcmFjdGVyOiAnYSdcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2hlYWRsaW5lL3ByZXRleHQtZm9ybWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!************************************************!*\
  !*** ./src/blocks/headline/posttext-format.js ***!
  \************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("/**\n * Format: bu-headline-posttext\n *\n * A RichText format button for wrapping selected text in a span with the\n * 'wp-block-editorial-headline-posttext' span.\n */\n\n// Import WordPress dependencies\nvar __ = wp.i18n.__;\nvar Fragment = wp.element.Fragment;\nvar _wp$richText = wp.richText,\n    registerFormatType = _wp$richText.registerFormatType,\n    toggleFormat = _wp$richText.toggleFormat;\nvar _wp$editor = wp.editor,\n    RichTextToolbarButton = _wp$editor.RichTextToolbarButton,\n    RichTextShortcut = _wp$editor.RichTextShortcut;\n\n\nvar name = 'editorial/posttext';\n\nregisterFormatType(name, {\n\n\ttitle: __('Posttext'),\n\ttagName: 'span',\n\tclassName: 'wp-block-editorial-headline-posttext',\n\n\tedit: function edit(_ref) {\n\t\tvar isActive = _ref.isActive,\n\t\t    value = _ref.value,\n\t\t    onChange = _ref.onChange;\n\n\t\tvar onToggle = function onToggle() {\n\t\t\treturn onChange(toggleFormat(value, { type: name }));\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(RichTextShortcut, {\n\t\t\t\ttype: 'access',\n\t\t\t\tcharacter: 'b',\n\t\t\t\tonUse: onToggle\n\t\t\t}),\n\t\t\twp.element.createElement(RichTextToolbarButton, {\n\t\t\t\tname: 'posttext',\n\t\t\t\ticon: 'warning',\n\t\t\t\ttitle: __('Posttext'),\n\t\t\t\tonClick: onToggle,\n\t\t\t\tisActive: isActive,\n\t\t\t\tshortcutType: 'access',\n\t\t\t\tshortcutCharacter: 'b'\n\t\t\t})\n\t\t);\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MvaGVhZGxpbmUvcG9zdHRleHQtZm9ybWF0LmpzP2JhMjciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBGb3JtYXQ6IGJ1LWhlYWRsaW5lLXBvc3R0ZXh0XG4gKlxuICogQSBSaWNoVGV4dCBmb3JtYXQgYnV0dG9uIGZvciB3cmFwcGluZyBzZWxlY3RlZCB0ZXh0IGluIGEgc3BhbiB3aXRoIHRoZVxuICogJ3dwLWJsb2NrLWVkaXRvcmlhbC1oZWFkbGluZS1wb3N0dGV4dCcgc3Bhbi5cbiAqL1xuXG4vLyBJbXBvcnQgV29yZFByZXNzIGRlcGVuZGVuY2llc1xudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG52YXIgX3dwJHJpY2hUZXh0ID0gd3AucmljaFRleHQsXG4gICAgcmVnaXN0ZXJGb3JtYXRUeXBlID0gX3dwJHJpY2hUZXh0LnJlZ2lzdGVyRm9ybWF0VHlwZSxcbiAgICB0b2dnbGVGb3JtYXQgPSBfd3AkcmljaFRleHQudG9nZ2xlRm9ybWF0O1xudmFyIF93cCRlZGl0b3IgPSB3cC5lZGl0b3IsXG4gICAgUmljaFRleHRUb29sYmFyQnV0dG9uID0gX3dwJGVkaXRvci5SaWNoVGV4dFRvb2xiYXJCdXR0b24sXG4gICAgUmljaFRleHRTaG9ydGN1dCA9IF93cCRlZGl0b3IuUmljaFRleHRTaG9ydGN1dDtcblxuXG52YXIgbmFtZSA9ICdlZGl0b3JpYWwvcG9zdHRleHQnO1xuXG5yZWdpc3RlckZvcm1hdFR5cGUobmFtZSwge1xuXG5cdHRpdGxlOiBfXygnUG9zdHRleHQnKSxcblx0dGFnTmFtZTogJ3NwYW4nLFxuXHRjbGFzc05hbWU6ICd3cC1ibG9jay1lZGl0b3JpYWwtaGVhZGxpbmUtcG9zdHRleHQnLFxuXG5cdGVkaXQ6IGZ1bmN0aW9uIGVkaXQoX3JlZikge1xuXHRcdHZhciBpc0FjdGl2ZSA9IF9yZWYuaXNBY3RpdmUsXG5cdFx0ICAgIHZhbHVlID0gX3JlZi52YWx1ZSxcblx0XHQgICAgb25DaGFuZ2UgPSBfcmVmLm9uQ2hhbmdlO1xuXG5cdFx0dmFyIG9uVG9nZ2xlID0gZnVuY3Rpb24gb25Ub2dnbGUoKSB7XG5cdFx0XHRyZXR1cm4gb25DaGFuZ2UodG9nZ2xlRm9ybWF0KHZhbHVlLCB7IHR5cGU6IG5hbWUgfSkpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0U2hvcnRjdXQsIHtcblx0XHRcdFx0dHlwZTogJ2FjY2VzcycsXG5cdFx0XHRcdGNoYXJhY3RlcjogJ2InLFxuXHRcdFx0XHRvblVzZTogb25Ub2dnbGVcblx0XHRcdH0pLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0VG9vbGJhckJ1dHRvbiwge1xuXHRcdFx0XHRuYW1lOiAncG9zdHRleHQnLFxuXHRcdFx0XHRpY29uOiAnd2FybmluZycsXG5cdFx0XHRcdHRpdGxlOiBfXygnUG9zdHRleHQnKSxcblx0XHRcdFx0b25DbGljazogb25Ub2dnbGUsXG5cdFx0XHRcdGlzQWN0aXZlOiBpc0FjdGl2ZSxcblx0XHRcdFx0c2hvcnRjdXRUeXBlOiAnYWNjZXNzJyxcblx0XHRcdFx0c2hvcnRjdXRDaGFyYWN0ZXI6ICdiJ1xuXHRcdFx0fSlcblx0XHQpO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvaGVhZGxpbmUvcG9zdHRleHQtZm9ybWF0LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!***********************************!*\
  !*** ./src/blocks/aside/aside.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 12);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_register_block_preset_js__ = __webpack_require__(/*! ../../global/register-block-preset.js */ 13);\n/**\n * BLOCK: bu-aside-cgb\n *\n * A container for related information that accepts image,\n * headline, paragraph, and button blocks as children.\n */\n\n// Import CSS.\n\n\n\n// Internal dependencies.\n\n\n// WordPress dependencies.\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar Fragment = wp.element.Fragment;\nvar _wp$components = wp.components,\n    PanelBody = _wp$components.PanelBody,\n    SelectControl = _wp$components.SelectControl;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    InnerBlocks = _wp$editor.InnerBlocks;\n\n// The current publication owner.\n\nvar publicationClass = document.getElementById('bu_publication_owner').value;\n\n// Register the block.\nvar asideBlock = registerBlockType('editorial/aside', {\n\n\ttitle: __('Aside'),\n\tdescription: __('Add an aside with related information. Accepts image, headline, paragraph, and button blocks as children.'),\n\ticon: 'format-aside',\n\tcategory: 'bu-editorial',\n\tsupports: {\n\t\talign: ['left', 'right']\n\t},\n\tattributes: {\n\t\tcolorScheme: {\n\t\t\ttype: 'string',\n\t\t\tdefault: ''\n\t\t}\n\t},\n\tpublicationClassName: publicationClass + '-block-aside',\n\n\tedit: function edit(props) {\n\t\tvar attributes = props.attributes,\n\t\t    setAttributes = props.setAttributes,\n\t\t    className = props.className,\n\t\t    presetTemplate = props.presetTemplate;\n\t\tvar colorScheme = attributes.colorScheme;\n\n\t\tvar allowedBlocks = ['core/image', 'core/heading', 'core/paragraph', 'core/button'];\n\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelBody,\n\t\t\t\t\t{ title: __('Color Settings') },\n\t\t\t\t\twp.element.createElement(SelectControl, {\n\t\t\t\t\t\tlabel: __('Color Scheme'),\n\t\t\t\t\t\tvalue: colorScheme || '',\n\t\t\t\t\t\tonChange: function onChange(value) {\n\t\t\t\t\t\t\treturn setAttributes({ colorScheme: value });\n\t\t\t\t\t\t},\n\t\t\t\t\t\toptions: [{ value: '', label: __('None') }, { value: 'has-light-background', label: __('Light Background') }, { value: 'has-dark-background', label: __('Dark Background') }, { value: 'has-primary-background', label: __('Primary Background') }]\n\t\t\t\t\t})\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'aside',\n\t\t\t\t{ className: [className, colorScheme].join(' ').trim() },\n\t\t\t\twp.element.createElement(InnerBlocks, {\n\t\t\t\t\tallowedBlocks: allowedBlocks,\n\t\t\t\t\ttemplate: presetTemplate\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\tsave: function save(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    className = _ref.className;\n\t\tvar colorScheme = attributes.colorScheme;\n\n\n\t\treturn wp.element.createElement(\n\t\t\t'aside',\n\t\t\t{ className: [className, colorScheme].join(' ').trim() },\n\t\t\twp.element.createElement(InnerBlocks.Content, null)\n\t\t);\n\t}\n});\n\nvar presetTemplate = [['core/image'], ['core/heading', { placeholder: 'Enter aside title…' }], ['core/paragraph', { placeholder: 'Enter aside content…' }], ['core/button']];\n\nObject(__WEBPACK_IMPORTED_MODULE_2__global_register_block_preset_js__[\"a\" /* default */])(asideBlock, presetTemplate);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2FzaWRlL2FzaWRlLmpzPzVmN2IiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCTE9DSzogYnUtYXNpZGUtY2diXG4gKlxuICogQSBjb250YWluZXIgZm9yIHJlbGF0ZWQgaW5mb3JtYXRpb24gdGhhdCBhY2NlcHRzIGltYWdlLFxuICogaGVhZGxpbmUsIHBhcmFncmFwaCwgYW5kIGJ1dHRvbiBibG9ja3MgYXMgY2hpbGRyZW4uXG4gKi9cblxuLy8gSW1wb3J0IENTUy5cbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcbmltcG9ydCAnLi9lZGl0b3Iuc2Nzcyc7XG5cbi8vIEludGVybmFsIGRlcGVuZGVuY2llcy5cbmltcG9ydCBSZWdpc3RlckJsb2NrUHJlc2V0IGZyb20gJy4uLy4uL2dsb2JhbC9yZWdpc3Rlci1ibG9jay1wcmVzZXQuanMnO1xuXG4vLyBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzLlxudmFyIF9fID0gd3AuaTE4bi5fXztcbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTtcbnZhciBGcmFnbWVudCA9IHdwLmVsZW1lbnQuRnJhZ21lbnQ7XG52YXIgX3dwJGNvbXBvbmVudHMgPSB3cC5jb21wb25lbnRzLFxuICAgIFBhbmVsQm9keSA9IF93cCRjb21wb25lbnRzLlBhbmVsQm9keSxcbiAgICBTZWxlY3RDb250cm9sID0gX3dwJGNvbXBvbmVudHMuU2VsZWN0Q29udHJvbDtcbnZhciBfd3AkZWRpdG9yID0gd3AuZWRpdG9yLFxuICAgIEluc3BlY3RvckNvbnRyb2xzID0gX3dwJGVkaXRvci5JbnNwZWN0b3JDb250cm9scyxcbiAgICBJbm5lckJsb2NrcyA9IF93cCRlZGl0b3IuSW5uZXJCbG9ja3M7XG5cbi8vIFRoZSBjdXJyZW50IHB1YmxpY2F0aW9uIG93bmVyLlxuXG52YXIgcHVibGljYXRpb25DbGFzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidV9wdWJsaWNhdGlvbl9vd25lcicpLnZhbHVlO1xuXG4vLyBSZWdpc3RlciB0aGUgYmxvY2suXG52YXIgYXNpZGVCbG9jayA9IHJlZ2lzdGVyQmxvY2tUeXBlKCdlZGl0b3JpYWwvYXNpZGUnLCB7XG5cblx0dGl0bGU6IF9fKCdBc2lkZScpLFxuXHRkZXNjcmlwdGlvbjogX18oJ0FkZCBhbiBhc2lkZSB3aXRoIHJlbGF0ZWQgaW5mb3JtYXRpb24uIEFjY2VwdHMgaW1hZ2UsIGhlYWRsaW5lLCBwYXJhZ3JhcGgsIGFuZCBidXR0b24gYmxvY2tzIGFzIGNoaWxkcmVuLicpLFxuXHRpY29uOiAnZm9ybWF0LWFzaWRlJyxcblx0Y2F0ZWdvcnk6ICdidS1lZGl0b3JpYWwnLFxuXHRzdXBwb3J0czoge1xuXHRcdGFsaWduOiBbJ2xlZnQnLCAncmlnaHQnXVxuXHR9LFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0Y29sb3JTY2hlbWU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJydcblx0XHR9XG5cdH0sXG5cdHB1YmxpY2F0aW9uQ2xhc3NOYW1lOiBwdWJsaWNhdGlvbkNsYXNzICsgJy1ibG9jay1hc2lkZScsXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gcHJvcHMuYXR0cmlidXRlcyxcblx0XHQgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcblx0XHQgICAgcHJlc2V0VGVtcGxhdGUgPSBwcm9wcy5wcmVzZXRUZW1wbGF0ZTtcblx0XHR2YXIgY29sb3JTY2hlbWUgPSBhdHRyaWJ1dGVzLmNvbG9yU2NoZW1lO1xuXG5cdFx0dmFyIGFsbG93ZWRCbG9ja3MgPSBbJ2NvcmUvaW1hZ2UnLCAnY29yZS9oZWFkaW5nJywgJ2NvcmUvcGFyYWdyYXBoJywgJ2NvcmUvYnV0dG9uJ107XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0RnJhZ21lbnQsXG5cdFx0XHRudWxsLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRJbnNwZWN0b3JDb250cm9scyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFBhbmVsQm9keSxcblx0XHRcdFx0XHR7IHRpdGxlOiBfXygnQ29sb3IgU2V0dGluZ3MnKSB9LFxuXHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChTZWxlY3RDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRsYWJlbDogX18oJ0NvbG9yIFNjaGVtZScpLFxuXHRcdFx0XHRcdFx0dmFsdWU6IGNvbG9yU2NoZW1lIHx8ICcnLFxuXHRcdFx0XHRcdFx0b25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgY29sb3JTY2hlbWU6IHZhbHVlIH0pO1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdG9wdGlvbnM6IFt7IHZhbHVlOiAnJywgbGFiZWw6IF9fKCdOb25lJykgfSwgeyB2YWx1ZTogJ2hhcy1saWdodC1iYWNrZ3JvdW5kJywgbGFiZWw6IF9fKCdMaWdodCBCYWNrZ3JvdW5kJykgfSwgeyB2YWx1ZTogJ2hhcy1kYXJrLWJhY2tncm91bmQnLCBsYWJlbDogX18oJ0RhcmsgQmFja2dyb3VuZCcpIH0sIHsgdmFsdWU6ICdoYXMtcHJpbWFyeS1iYWNrZ3JvdW5kJywgbGFiZWw6IF9fKCdQcmltYXJ5IEJhY2tncm91bmQnKSB9XVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdhc2lkZScsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBbY2xhc3NOYW1lLCBjb2xvclNjaGVtZV0uam9pbignICcpLnRyaW0oKSB9LFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoSW5uZXJCbG9ja3MsIHtcblx0XHRcdFx0XHRhbGxvd2VkQmxvY2tzOiBhbGxvd2VkQmxvY2tzLFxuXHRcdFx0XHRcdHRlbXBsYXRlOiBwcmVzZXRUZW1wbGF0ZVxuXHRcdFx0XHR9KVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cdHNhdmU6IGZ1bmN0aW9uIHNhdmUoX3JlZikge1xuXHRcdHZhciBhdHRyaWJ1dGVzID0gX3JlZi5hdHRyaWJ1dGVzLFxuXHRcdCAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZTtcblx0XHR2YXIgY29sb3JTY2hlbWUgPSBhdHRyaWJ1dGVzLmNvbG9yU2NoZW1lO1xuXG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2FzaWRlJyxcblx0XHRcdHsgY2xhc3NOYW1lOiBbY2xhc3NOYW1lLCBjb2xvclNjaGVtZV0uam9pbignICcpLnRyaW0oKSB9LFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KElubmVyQmxvY2tzLkNvbnRlbnQsIG51bGwpXG5cdFx0KTtcblx0fVxufSk7XG5cbnZhciBwcmVzZXRUZW1wbGF0ZSA9IFtbJ2NvcmUvaW1hZ2UnXSwgWydjb3JlL2hlYWRpbmcnLCB7IHBsYWNlaG9sZGVyOiAnRW50ZXIgYXNpZGUgdGl0bGXigKYnIH1dLCBbJ2NvcmUvcGFyYWdyYXBoJywgeyBwbGFjZWhvbGRlcjogJ0VudGVyIGFzaWRlIGNvbnRlbnTigKYnIH1dLCBbJ2NvcmUvYnV0dG9uJ11dO1xuXG5SZWdpc3RlckJsb2NrUHJlc2V0KGFzaWRlQmxvY2ssIHByZXNldFRlbXBsYXRlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvYXNpZGUvYXNpZGUuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*************************************!*\
  !*** ./src/blocks/aside/style.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2FzaWRlL3N0eWxlLnNjc3M/MTIzMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9hc2lkZS9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**************************************!*\
  !*** ./src/blocks/aside/editor.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2FzaWRlL2VkaXRvci5zY3NzP2NiN2MiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvYXNpZGUvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*********************************************!*\
  !*** ./src/global/register-block-preset.js ***!
  \*********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/**\n * Registers a variation of a block with a preset template.\n */\n\n// WordPress dependencies.\nvar registerBlockType = wp.blocks.registerBlockType;\nvar createElement = wp.element.createElement;\nvar addFilter = wp.hooks.addFilter;\n\n/**\n * Register a preset variation of a given block.\n *\n * @param {Object} originalBlock  Block type to build preset variation from.\n * @param {Object} presetTemplate Template to apply.\n *\n * @return {Object} Filtered props applied to save element.\n */\n\nvar RegisterBlockPreset = function RegisterBlockPreset(originalBlock, presetTemplate) {\n\tvar name = originalBlock.name,\n\t    title = originalBlock.title,\n\t    edit = originalBlock.edit,\n\t    save = originalBlock.save;\n\n\tvar presetBlock = Object.assign({}, originalBlock);\n\tvar nameParts = name.split('/');\n\n\t// Filter the classname of the preset block to match the default block.\n\tvar filterBlockClassName = function filterBlockClassName(className, blockName) {\n\t\tif (presetBlock.name === blockName) {\n\t\t\tclassName = className.replace(/-preset/i, '');\n\t\t}\n\n\t\treturn className;\n\t};\n\n\tpresetBlock.name = nameParts[0] + '-preset/' + nameParts[1];\n\tpresetBlock.title = title + ' (preset)';\n\tpresetBlock.category = 'bu-editorial-presets';\n\tpresetBlock.save = save;\n\n\t// Add a `presetTemplate` property to the default block's edit component.\n\tpresetBlock.edit = function (props) {\n\t\treturn createElement(edit, Object.assign(props, { presetTemplate: presetTemplate }));\n\t};\n\n\t// Register the preset variation of the default block.\n\tregisterBlockType(presetBlock.name, presetBlock);\n\n\t// Filter the classname of the preset block to match the default block.\n\taddFilter('blocks.getBlockDefaultClassName', 'bu-blocks/preset-block-class-name/', filterBlockClassName);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (RegisterBlockPreset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZ2xvYmFsL3JlZ2lzdGVyLWJsb2NrLXByZXNldC5qcz83NjM0Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmVnaXN0ZXJzIGEgdmFyaWF0aW9uIG9mIGEgYmxvY2sgd2l0aCBhIHByZXNldCB0ZW1wbGF0ZS5cbiAqL1xuXG4vLyBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzLlxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlO1xudmFyIGNyZWF0ZUVsZW1lbnQgPSB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQ7XG52YXIgYWRkRmlsdGVyID0gd3AuaG9va3MuYWRkRmlsdGVyO1xuXG4vKipcbiAqIFJlZ2lzdGVyIGEgcHJlc2V0IHZhcmlhdGlvbiBvZiBhIGdpdmVuIGJsb2NrLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcmlnaW5hbEJsb2NrICBCbG9jayB0eXBlIHRvIGJ1aWxkIHByZXNldCB2YXJpYXRpb24gZnJvbS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBwcmVzZXRUZW1wbGF0ZSBUZW1wbGF0ZSB0byBhcHBseS5cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IEZpbHRlcmVkIHByb3BzIGFwcGxpZWQgdG8gc2F2ZSBlbGVtZW50LlxuICovXG5cbnZhciBSZWdpc3RlckJsb2NrUHJlc2V0ID0gZnVuY3Rpb24gUmVnaXN0ZXJCbG9ja1ByZXNldChvcmlnaW5hbEJsb2NrLCBwcmVzZXRUZW1wbGF0ZSkge1xuXHR2YXIgbmFtZSA9IG9yaWdpbmFsQmxvY2submFtZSxcblx0ICAgIHRpdGxlID0gb3JpZ2luYWxCbG9jay50aXRsZSxcblx0ICAgIGVkaXQgPSBvcmlnaW5hbEJsb2NrLmVkaXQsXG5cdCAgICBzYXZlID0gb3JpZ2luYWxCbG9jay5zYXZlO1xuXG5cdHZhciBwcmVzZXRCbG9jayA9IE9iamVjdC5hc3NpZ24oe30sIG9yaWdpbmFsQmxvY2spO1xuXHR2YXIgbmFtZVBhcnRzID0gbmFtZS5zcGxpdCgnLycpO1xuXG5cdC8vIEZpbHRlciB0aGUgY2xhc3NuYW1lIG9mIHRoZSBwcmVzZXQgYmxvY2sgdG8gbWF0Y2ggdGhlIGRlZmF1bHQgYmxvY2suXG5cdHZhciBmaWx0ZXJCbG9ja0NsYXNzTmFtZSA9IGZ1bmN0aW9uIGZpbHRlckJsb2NrQ2xhc3NOYW1lKGNsYXNzTmFtZSwgYmxvY2tOYW1lKSB7XG5cdFx0aWYgKHByZXNldEJsb2NrLm5hbWUgPT09IGJsb2NrTmFtZSkge1xuXHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lLnJlcGxhY2UoLy1wcmVzZXQvaSwgJycpO1xuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc05hbWU7XG5cdH07XG5cblx0cHJlc2V0QmxvY2submFtZSA9IG5hbWVQYXJ0c1swXSArICctcHJlc2V0LycgKyBuYW1lUGFydHNbMV07XG5cdHByZXNldEJsb2NrLnRpdGxlID0gdGl0bGUgKyAnIChwcmVzZXQpJztcblx0cHJlc2V0QmxvY2suY2F0ZWdvcnkgPSAnYnUtZWRpdG9yaWFsLXByZXNldHMnO1xuXHRwcmVzZXRCbG9jay5zYXZlID0gc2F2ZTtcblxuXHQvLyBBZGQgYSBgcHJlc2V0VGVtcGxhdGVgIHByb3BlcnR5IHRvIHRoZSBkZWZhdWx0IGJsb2NrJ3MgZWRpdCBjb21wb25lbnQuXG5cdHByZXNldEJsb2NrLmVkaXQgPSBmdW5jdGlvbiAocHJvcHMpIHtcblx0XHRyZXR1cm4gY3JlYXRlRWxlbWVudChlZGl0LCBPYmplY3QuYXNzaWduKHByb3BzLCB7IHByZXNldFRlbXBsYXRlOiBwcmVzZXRUZW1wbGF0ZSB9KSk7XG5cdH07XG5cblx0Ly8gUmVnaXN0ZXIgdGhlIHByZXNldCB2YXJpYXRpb24gb2YgdGhlIGRlZmF1bHQgYmxvY2suXG5cdHJlZ2lzdGVyQmxvY2tUeXBlKHByZXNldEJsb2NrLm5hbWUsIHByZXNldEJsb2NrKTtcblxuXHQvLyBGaWx0ZXIgdGhlIGNsYXNzbmFtZSBvZiB0aGUgcHJlc2V0IGJsb2NrIHRvIG1hdGNoIHRoZSBkZWZhdWx0IGJsb2NrLlxuXHRhZGRGaWx0ZXIoJ2Jsb2Nrcy5nZXRCbG9ja0RlZmF1bHRDbGFzc05hbWUnLCAnYnUtYmxvY2tzL3ByZXNldC1ibG9jay1jbGFzcy1uYW1lLycsIGZpbHRlckJsb2NrQ2xhc3NOYW1lKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyQmxvY2tQcmVzZXQ7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2xvYmFsL3JlZ2lzdGVyLWJsb2NrLXByZXNldC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***********************************!*\
  !*** ./src/blocks/modal/modal.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 15);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: bu-aside-cgb\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21vZGFsL21vZGFsLmpzPzk2MDkiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCTE9DSzogYnUtYXNpZGUtY2diXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvbW9kYWwvbW9kYWwuanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!*************************************!*\
  !*** ./src/blocks/modal/style.scss ***!
  \*************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21vZGFsL3N0eWxlLnNjc3M/MzUyYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9tb2RhbC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!**************************************!*\
  !*** ./src/blocks/modal/editor.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL21vZGFsL2VkaXRvci5zY3NzPzk2NTAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvbW9kYWwvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*****************************************************!*\
  !*** ./src/blocks/introparagraph/introparagraph.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 19);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: bu-introparagraph-cgb\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ludHJvcGFyYWdyYXBoL2ludHJvcGFyYWdyYXBoLmpzPzMwODUiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCTE9DSzogYnUtaW50cm9wYXJhZ3JhcGgtY2diXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvaW50cm9wYXJhZ3JhcGgvaW50cm9wYXJhZ3JhcGguanNcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!**********************************************!*\
  !*** ./src/blocks/introparagraph/style.scss ***!
  \**********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ludHJvcGFyYWdyYXBoL3N0eWxlLnNjc3M/YjFmNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9pbnRyb3BhcmFncmFwaC9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!***********************************************!*\
  !*** ./src/blocks/introparagraph/editor.scss ***!
  \***********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ludHJvcGFyYWdyYXBoL2VkaXRvci5zY3NzP2EwNWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvaW50cm9wYXJhZ3JhcGgvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!*******************************************!*\
  !*** ./src/blocks/pullquote/pullquote.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 22);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: bu-pullquote-cgb\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3B1bGxxdW90ZS9wdWxscXVvdGUuanM/YmJkMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBidS1wdWxscXVvdGUtY2diXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvcHVsbHF1b3RlL3B1bGxxdW90ZS5qc1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*****************************************!*\
  !*** ./src/blocks/pullquote/style.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3B1bGxxdW90ZS9zdHlsZS5zY3NzPzYyOGYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvcHVsbHF1b3RlL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!******************************************!*\
  !*** ./src/blocks/pullquote/editor.scss ***!
  \******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3B1bGxxdW90ZS9lZGl0b3Iuc2Nzcz83OWQxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL3B1bGxxdW90ZS9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*************************************!*\
  !*** ./src/blocks/button/button.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 25);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: bu-button-cgb\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2J1dHRvbi9idXR0b24uanM/YTMzNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBidS1idXR0b24tY2diXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvYnV0dG9uL2J1dHRvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!**************************************!*\
  !*** ./src/blocks/button/style.scss ***!
  \**************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2J1dHRvbi9zdHlsZS5zY3NzP2M5ZGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvYnV0dG9uL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!***************************************!*\
  !*** ./src/blocks/button/editor.scss ***!
  \***************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2J1dHRvbi9lZGl0b3Iuc2Nzcz9kZWE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL2J1dHRvbi9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!*****************************************************!*\
  !*** ./src/blocks/relatedstories/relatedstories.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 27);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 28);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: bu-relatedstories-cgb\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlbGF0ZWRzdG9yaWVzL3JlbGF0ZWRzdG9yaWVzLmpzPzA5NjciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCTE9DSzogYnUtcmVsYXRlZHN0b3JpZXMtY2diXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvcmVsYXRlZHN0b3JpZXMvcmVsYXRlZHN0b3JpZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!**********************************************!*\
  !*** ./src/blocks/relatedstories/style.scss ***!
  \**********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlbGF0ZWRzdG9yaWVzL3N0eWxlLnNjc3M/N2RjZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2Nrcy9yZWxhdGVkc3Rvcmllcy9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!***********************************************!*\
  !*** ./src/blocks/relatedstories/editor.scss ***!
  \***********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3JlbGF0ZWRzdG9yaWVzL2VkaXRvci5zY3NzPzA1YjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MvcmVsYXRlZHN0b3JpZXMvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!*******************************************!*\
  !*** ./src/blocks/storycard/storycard.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 30);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: bu-sample-cgb\n *\n * Registering a basic block with Gutenberg.\n * Simple block, renders and saves the same content without any interactivity.\n */\n\n//  Import CSS.\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3N0b3J5Y2FyZC9zdG9yeWNhcmQuanM/N2ZkZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJMT0NLOiBidS1zYW1wbGUtY2diXG4gKlxuICogUmVnaXN0ZXJpbmcgYSBiYXNpYyBibG9jayB3aXRoIEd1dGVuYmVyZy5cbiAqIFNpbXBsZSBibG9jaywgcmVuZGVycyBhbmQgc2F2ZXMgdGhlIHNhbWUgY29udGVudCB3aXRob3V0IGFueSBpbnRlcmFjdGl2aXR5LlxuICovXG5cbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3Mvc3RvcnljYXJkL3N0b3J5Y2FyZC5qc1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!*****************************************!*\
  !*** ./src/blocks/storycard/style.scss ***!
  \*****************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3N0b3J5Y2FyZC9zdHlsZS5zY3NzP2RiNGIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3Mvc3RvcnljYXJkL3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!******************************************!*\
  !*** ./src/blocks/storycard/editor.scss ***!
  \******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL3N0b3J5Y2FyZC9lZGl0b3Iuc2Nzcz9iZTQ2Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzL3N0b3J5Y2FyZC9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ })
/******/ ]);