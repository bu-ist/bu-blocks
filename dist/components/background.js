(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],2:[function(require,module,exports){
module.exports = function (css, customDocument) {
  var doc = customDocument || document;
  if (doc.createStyleSheet) {
    var sheet = doc.createStyleSheet()
    sheet.cssText = css;
    return sheet.ownerNode;
  } else {
    var head = doc.getElementsByTagName('head')[0],
        style = doc.createElement('style');

    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(doc.createTextNode(css));
    }

    head.appendChild(style);
    return style;
  }
};

module.exports.byUrl = function(url) {
  if (document.createStyleSheet) {
    return document.createStyleSheet(url).ownerNode;
  } else {
    var head = document.getElementsByTagName('head')[0],
        link = document.createElement('link');

    link.rel = 'stylesheet';
    link.href = url;

    head.appendChild(link);
    return link;
  }
};

},{}],3:[function(require,module,exports){
module.exports = require('cssify');
},{"cssify":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * The background component attributes.
 */
var BackgroundAttributes = {
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
    "default": 100
  },
  backgroundAlt: {
    type: 'string'
  },
  backgroundCaption: {
    type: 'string'
  },
  backgroundAutoplay: {
    type: 'boolean',
    "default": false
  }
};
var _default = BackgroundAttributes;
exports["default"] = _default;

},{}],5:[function(require,module,exports){
module.exports = require('sassify')('.edit-post-settings-sidebar__panel-block .components-panel__body.components-panel__body-bu-background-media button + .components-range-control, .edit-post-settings-sidebar__panel-block .components-panel__body.components-panel__body-bu-background-media .is-button + .is-button {   margin-top: 1.5em; }  .components-bu-background-url-note {   background: rgba(139, 139, 150, 0.1);   padding: 0 13px 13px;   text-align: center; }   .editor-block-list__block-edit .components-bu-background-url-note {     font-size: 13px;     margin-top: 0; }  .wp-block-background-is-uploading {   position: relative; }   .wp-block-background-is-uploading img {     opacity: .5; }   .wp-block-background-is-uploading .components-spinner {     bottom: 0;     left: 0;     margin: auto;     position: absolute;     right: 0;     top: 0; } ');;
},{"sassify":3}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BackgroundAttributes", {
  enumerable: true,
  get: function get() {
    return _attributes["default"];
  }
});
exports["default"] = exports.BackgroundOpacityToClass = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

require("./editor.scss");

require("./style.scss");

var _attributes = _interopRequireDefault(require("./attributes.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// WordPress dependencies.
var __ = wp.i18n.__;
var Fragment = wp.element.Fragment;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    Spinner = _wp$components.Spinner,
    TextControl = _wp$components.TextControl,
    ToggleControl = _wp$components.ToggleControl,
    Toolbar = _wp$components.Toolbar;

var _ref = 'undefined' === typeof wp.blockEditor ? wp.editor : wp.blockEditor,
    BlockControls = _ref.BlockControls,
    InspectorControls = _ref.InspectorControls,
    MediaPlaceholder = _ref.MediaPlaceholder,
    MediaUpload = _ref.MediaUpload,
    MediaUploadCheck = _ref.MediaUploadCheck;

var _wp$url = wp.url,
    getAuthority = _wp$url.getAuthority,
    getPath = _wp$url.getPath,
    getQueryString = _wp$url.getQueryString;
var isBlobURL = wp.blob.isBlobURL;
var withState = wp.compose.withState;
/**
 * Return a classname based on the value of the 'Background Opacity' setting.
 *
 * @param {number} ratio The value of the 'Background Opacity' setting.
*/

var BackgroundOpacityToClass = function BackgroundOpacityToClass(ratio) {
  return ratio === 100 ? null : 'has-background-opacity-' + 10 * Math.round(ratio / 10);
};
/**
 * The background component.
 *
 * @param {array} props The properties passed to the component.
 */


exports.BackgroundOpacityToClass = BackgroundOpacityToClass;

function Background(props) {
  var _classnames;

  // Destructure properties of this component with defaults.
  var _props$allowedMediaTy = props.allowedMediaTypes,
      allowedMediaTypes = _props$allowedMediaTy === void 0 ? ['image', 'video'] : _props$allowedMediaTy,
      blockProps = props.blockProps,
      _props$className = props.className,
      className = _props$className === void 0 ? 'bu-blocks-background' : _props$className,
      _props$imageSize = props.imageSize,
      imageSize = _props$imageSize === void 0 ? 'full' : _props$imageSize,
      _props$inlinePlacehol = props.inlinePlaceholder,
      inlinePlaceholder = _props$inlinePlacehol === void 0 ? false : _props$inlinePlacehol,
      _props$options = props.options,
      options = _props$options === void 0 ? ['opacity'] : _props$options,
      _props$placeholderTex = props.placeholderText,
      placeholderText = _props$placeholderTex === void 0 ? __('Add Media') : _props$placeholderTex,
      isUploading = props.isUploading,
      setState = props.setState; // Get the properties of the block using this component.

  var attributes = blockProps.attributes,
      setAttributes = blockProps.setAttributes; // Get the attributes for handling the background data.

  var backgroundId = attributes.backgroundId,
      backgroundType = attributes.backgroundType,
      backgroundUrl = attributes.backgroundUrl,
      backgroundOpacity = attributes.backgroundOpacity,
      backgroundAlt = attributes.backgroundAlt,
      backgroundAutoplay = attributes.backgroundAutoplay; // Reset attributes to undefined.

  var onRemoveMedia = function onRemoveMedia() {
    setAttributes({
      backgroundId: undefined,
      backgroundType: undefined,
      backgroundUrl: undefined,
      backgroundAlt: undefined,
      backgroundCaption: undefined
    });
  }; // Set attributes based on the selected or uploaded media.


  var onSelectMedia = function onSelectMedia(media) {
    if (!media || !media.url) {
      onRemoveMedia();
      return;
    }

    if (isBlobURL(media.url)) {
      setState({
        isUploading: true
      });
      setAttributes({
        backgroundUrl: media.url
      });
      return;
    }

    var mediaType;

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

    var url = media.url; // Assign the block-designated size if it exists.

    if (mediaType === 'image' && imageSize !== 'full') {
      // The first check is for images already in the media library.
      // The second is for newly uploaded images.
      if (media.sizes && media.sizes[imageSize]) {
        url = media.sizes[imageSize].url;
      } else if (media.media_details && media.media_details.sizes[imageSize]) {
        url = media.media_details.sizes[imageSize].source_url;
      }
    }

    setState({
      isUploading: false
    });
    setAttributes({
      backgroundId: media.id,
      backgroundType: mediaType,
      backgroundUrl: url,
      backgroundAlt: media.alt,
      backgroundCaption: media.caption
    }); // If an `onChange` attribute is part of the Background component, ensure
    // that fires as expected.

    if ('function' === typeof props.onChange) {
      props.onChange(media, mediaType);
    }
  }; // Set attributes based on a selected URL.


  var onSelectURL = function onSelectURL(newURL) {
    var allowedAuthorities = ['vimeo.com', 'www.youtube.com', 'youtu.be', 'www.bu.edu'];
    var authority = getAuthority(newURL); // Stop here if the selected URL isn't from one of the allowed domains.

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
  /**
   * Return the media placeholder if no media has been set.
   */


  var placeholder = function placeholder() {
    if (backgroundUrl) {
      return undefined;
    }

    return React.createElement(MediaUploadCheck, null, React.createElement(MediaPlaceholder, {
      icon: "format-image",
      className: className,
      labels: {
        title: placeholderText,
        instructions: __('Drag, upload, or select a file from your library.')
      },
      onSelect: onSelectMedia,
      onSelectURL: allowedMediaTypes.includes('video') ? onSelectURL : undefined,
      allowedTypes: allowedMediaTypes
    }), allowedMediaTypes.includes('video') && React.createElement("p", {
      className: "description components-bu-background-url-note"
    }, "YouTube, Vimeo, and BUniverse URLs are supported at this time."));
  }; // Return inspector controls.


  var inspectorControls = React.createElement(InspectorControls, null, React.createElement(PanelBody, {
    title: __('Media Settings'),
    className: "components-panel__body-bu-background-media"
  }, !inlinePlaceholder && placeholder(), !!backgroundUrl && React.createElement(Fragment, null, backgroundType === 'url' ? React.createElement(TextControl, {
    label: __('URL'),
    value: backgroundUrl,
    onChange: function onChange(backgroundUrl) {
      setAttributes({
        backgroundUrl: backgroundUrl,
        backgroundType: backgroundUrl === '' ? undefined : backgroundType
      });
    }
  }) : React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
    onSelect: onSelectMedia,
    allowedTypes: allowedMediaTypes,
    value: backgroundId,
    render: function render(_ref2) {
      var open = _ref2.open;
      return React.createElement(IconButton, {
        onClick: open,
        icon: "edit",
        label: __('Edit Background Media'),
        isDefault: true,
        isLarge: true
      }, __('Edit'));
    }
  }), React.createElement(IconButton, {
    onClick: onRemoveMedia,
    icon: "no",
    label: 'Remove Background Media',
    isDefault: true,
    isLarge: true
  }, __('Remove')))), options.includes('opacity') && React.createElement(RangeControl, {
    label: __('Background Opacity'),
    value: backgroundOpacity,
    onChange: function onChange(ratio) {
      return setAttributes({
        backgroundOpacity: ratio
      });
    },
    min: 10,
    max: 100,
    step: 10
  }), (backgroundType === 'video' || backgroundType === 'url') && React.createElement(ToggleControl, {
    label: __('Autoplay video'),
    checked: backgroundAutoplay,
    onChange: function onChange() {
      return setAttributes({
        backgroundAutoplay: !backgroundAutoplay
      });
    }
  }))); // Defines the controls for the background options.

  var controls = React.createElement(Fragment, null, inlinePlaceholder && placeholder(), !!backgroundUrl && backgroundType !== 'url' && React.createElement(BlockControls, null, React.createElement(Toolbar, null, React.createElement(MediaUploadCheck, null, React.createElement(MediaUpload, {
    onSelect: onSelectMedia,
    allowedMediaTypes: allowedMediaTypes,
    value: backgroundId,
    render: function render(_ref3) {
      var open = _ref3.open;
      return React.createElement(IconButton, {
        className: "components-toolbar__control",
        label: __('Edit Background Media'),
        icon: "edit",
        onClick: open
      });
    }
  }), React.createElement(IconButton, {
    className: "components-toolbar__control",
    label: 'Remove Background Media',
    icon: "no",
    onClick: onRemoveMedia
  })))), (!inlinePlaceholder || backgroundUrl) && inspectorControls); // Build the classes to apply to the background element.

  var classes = (0, _classnames2["default"])(className, (_classnames = {
    'has-background-opacity': backgroundOpacity !== 100
  }, _defineProperty(_classnames, BackgroundOpacityToClass(backgroundOpacity), BackgroundOpacityToClass(backgroundOpacity)), _defineProperty(_classnames, "wp-image-".concat(backgroundId), backgroundId && 'image' === backgroundType), _classnames)); // Return an image element for use as the background.

  var backgroundImage = React.createElement("img", {
    className: classes,
    src: backgroundUrl,
    alt: backgroundAlt
  }); // Return a video element for use as the background.

  var backgroundVideo = React.createElement("video", {
    className: classes,
    autoPlay: backgroundAutoplay,
    muted: backgroundAutoplay,
    loop: backgroundAutoplay,
    src: backgroundUrl
  }); // Return an iframe for use as the background.

  var backgroundIframe = function backgroundIframe() {
    var authority = getAuthority(backgroundUrl);
    var url = '';

    if (authority === 'www.youtube.com' || authority === 'youtu.be') {
      var videoId = authority === 'youtu.be' ? getPath(backgroundUrl) : getQueryString(backgroundUrl).split('?')[0].substr(2); // Build the url, adding autoplay parameters if appropriate.

      url = "//www.youtube.com/embed/".concat(videoId);
      url += backgroundAutoplay ? "?controls=0&autoplay=1&mute=1&origin=http://bu.edu&version=3&loop=1&playlist=".concat(videoId) : '';
    }

    if (authority === 'vimeo.com') {
      var _videoId = getPath(backgroundUrl); // Build the url, adding the background parameter for autoplaying if appropriate.


      url = "//player.vimeo.com/video/".concat(_videoId);
      url += backgroundAutoplay ? '?background=1' : '';
    }

    if (authority === 'www.bu.edu') {
      var _videoId2 = getQueryString(backgroundUrl).split('?')[0].substr(2); // Build the URL, adding the autoplay parameter if appropriate.


      url = "//www.bu.edu/buniverse/interface/embed/embed.html?v=".concat(_videoId2, "&jsapi=1");
      url += backgroundAutoplay ? '&autoplay=true&controls=0' : '';
    }

    if (url !== '') {
      return React.createElement("iframe", {
        src: url,
        frameborder: "0",
        allow: "autoplay; fullscreen",
        className: classes
      });
    }
  }; // Return the interface for the background component.


  return React.createElement(Fragment, null, controls, 'image' === backgroundType && backgroundImage, 'video' === backgroundType && backgroundVideo, 'url' === backgroundType && React.createElement("div", {
    className: "wp-block-background-video"
  }, React.createElement("div", {
    className: "wp-block-background-video-ratio"
  }, React.createElement("div", {
    className: "wp-block-background-video-iframe"
  }, backgroundIframe()))), isUploading && React.createElement("div", {
    className: "wp-block-background-is-uploading"
  }, React.createElement("img", {
    src: backgroundUrl
  }), React.createElement(Spinner, null)));
} // Export dependencies for easy importing in blocks.


// Export the background interface.
var _default = withState({
  isUploading: false
})(Background);

exports["default"] = _default;

},{"./attributes.js":4,"./editor.scss":5,"./style.scss":7,"classnames":1}],7:[function(require,module,exports){
module.exports = require('sassify')('img.has-background-opacity-0 {   opacity: 0; }  img.has-background-opacity-10 {   opacity: 0.1; }  img.has-background-opacity-20 {   opacity: 0.2; }  img.has-background-opacity-30 {   opacity: 0.3; }  img.has-background-opacity-40 {   opacity: 0.4; }  img.has-background-opacity-50 {   opacity: 0.5; }  img.has-background-opacity-60 {   opacity: 0.6; }  img.has-background-opacity-70 {   opacity: 0.7; }  img.has-background-opacity-80 {   opacity: 0.8; }  img.has-background-opacity-90 {   opacity: 0.9; }  img.has-background-opacity-100 {   opacity: 1; } ');;
},{"sassify":3}]},{},[6]);
