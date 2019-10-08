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

},{}],3:[function(require,module,exports){
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

},{"./attributes.js":2,"classnames":1}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsInNyYy9jb21wb25lbnRzL2JhY2tncm91bmQvYXR0cmlidXRlcy5qcyIsInNyYy9jb21wb25lbnRzL2JhY2tncm91bmQvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNwREE7OztBQUlBLElBQU0sb0JBQW9CLEdBQUc7QUFDNUIsRUFBQSxZQUFZLEVBQUU7QUFDYixJQUFBLElBQUksRUFBRTtBQURPLEdBRGM7QUFJNUIsRUFBQSxjQUFjLEVBQUU7QUFDZixJQUFBLElBQUksRUFBRTtBQURTLEdBSlk7QUFPNUIsRUFBQSxhQUFhLEVBQUU7QUFDZCxJQUFBLElBQUksRUFBRTtBQURRLEdBUGE7QUFVNUIsRUFBQSxpQkFBaUIsRUFBRTtBQUNsQixJQUFBLElBQUksRUFBRSxRQURZO0FBRWxCLGVBQVM7QUFGUyxHQVZTO0FBYzVCLEVBQUEsYUFBYSxFQUFFO0FBQ2QsSUFBQSxJQUFJLEVBQUU7QUFEUSxHQWRhO0FBaUI1QixFQUFBLGlCQUFpQixFQUFFO0FBQ2xCLElBQUEsSUFBSSxFQUFFO0FBRFksR0FqQlM7QUFvQjVCLEVBQUEsa0JBQWtCLEVBQUU7QUFDbkIsSUFBQSxJQUFJLEVBQUUsU0FEYTtBQUVuQixlQUFTO0FBRlU7QUFwQlEsQ0FBN0I7ZUEwQmUsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJmOztBQU9BOzs7Ozs7QUFFQTtJQUVDLEUsR0FDRyxFQUFFLENBQUMsSSxDQUROLEU7SUFHQSxRLEdBQ0csRUFBRSxDQUFDLE8sQ0FETixRO3FCQVVHLEVBQUUsQ0FBQyxVO0lBUE4sVSxrQkFBQSxVO0lBQ0EsUyxrQkFBQSxTO0lBQ0EsWSxrQkFBQSxZO0lBQ0EsTyxrQkFBQSxPO0lBQ0EsVyxrQkFBQSxXO0lBQ0EsYSxrQkFBQSxhO0lBQ0EsTyxrQkFBQSxPOztXQVFLLGdCQUFnQixPQUFPLEVBQUUsQ0FBQyxXQUE1QixHQUE0QyxFQUFFLENBQUMsTUFBL0MsR0FBd0QsRUFBRSxDQUFDLFc7SUFMOUQsYSxRQUFBLGE7SUFDQSxpQixRQUFBLGlCO0lBQ0EsZ0IsUUFBQSxnQjtJQUNBLFcsUUFBQSxXO0lBQ0EsZ0IsUUFBQSxnQjs7Y0FNRyxFQUFFLENBQUMsRztJQUhOLFksV0FBQSxZO0lBQ0EsTyxXQUFBLE87SUFDQSxjLFdBQUEsYztJQUdBLFMsR0FDRyxFQUFFLENBQUMsSSxDQUROLFM7SUFHQSxTLEdBQ0csRUFBRSxDQUFDLE8sQ0FETixTO0FBR0Q7Ozs7OztBQUtBLElBQU0sd0JBQXdCLEdBQUcsU0FBM0Isd0JBQTJCLENBQUUsS0FBRixFQUFhO0FBQzdDLFNBQVMsS0FBSyxLQUFLLEdBQVosR0FDTixJQURNLEdBRU4sNEJBQThCLEtBQUssSUFBSSxDQUFDLEtBQUwsQ0FBWSxLQUFLLEdBQUcsRUFBcEIsQ0FGcEM7QUFHQSxDQUpEO0FBTUE7Ozs7Ozs7OztBQUtBLFNBQVMsVUFBVCxDQUFxQixLQUFyQixFQUE2QjtBQUFBOztBQUM1QjtBQUQ0Qiw4QkFZeEIsS0Fad0IsQ0FHM0IsaUJBSDJCO0FBQUEsTUFHM0IsaUJBSDJCLHNDQUdQLENBQUUsT0FBRixFQUFXLE9BQVgsQ0FITztBQUFBLE1BSTNCLFVBSjJCLEdBWXhCLEtBWndCLENBSTNCLFVBSjJCO0FBQUEseUJBWXhCLEtBWndCLENBSzNCLFNBTDJCO0FBQUEsTUFLM0IsU0FMMkIsaUNBS2Ysc0JBTGU7QUFBQSx5QkFZeEIsS0Fad0IsQ0FNM0IsU0FOMkI7QUFBQSxNQU0zQixTQU4yQixpQ0FNZixNQU5lO0FBQUEsOEJBWXhCLEtBWndCLENBTzNCLGlCQVAyQjtBQUFBLE1BTzNCLGlCQVAyQixzQ0FPUCxLQVBPO0FBQUEsdUJBWXhCLEtBWndCLENBUTNCLE9BUjJCO0FBQUEsTUFRM0IsT0FSMkIsK0JBUWpCLENBQUUsU0FBRixDQVJpQjtBQUFBLDhCQVl4QixLQVp3QixDQVMzQixlQVQyQjtBQUFBLE1BUzNCLGVBVDJCLHNDQVNULEVBQUUsQ0FBRSxXQUFGLENBVE87QUFBQSxNQVUzQixXQVYyQixHQVl4QixLQVp3QixDQVUzQixXQVYyQjtBQUFBLE1BVzNCLFFBWDJCLEdBWXhCLEtBWndCLENBVzNCLFFBWDJCLEVBYzVCOztBQWQ0QixNQWdCM0IsVUFoQjJCLEdBa0J4QixVQWxCd0IsQ0FnQjNCLFVBaEIyQjtBQUFBLE1BaUIzQixhQWpCMkIsR0FrQnhCLFVBbEJ3QixDQWlCM0IsYUFqQjJCLEVBb0I1Qjs7QUFwQjRCLE1Bc0IzQixZQXRCMkIsR0E0QnhCLFVBNUJ3QixDQXNCM0IsWUF0QjJCO0FBQUEsTUF1QjNCLGNBdkIyQixHQTRCeEIsVUE1QndCLENBdUIzQixjQXZCMkI7QUFBQSxNQXdCM0IsYUF4QjJCLEdBNEJ4QixVQTVCd0IsQ0F3QjNCLGFBeEIyQjtBQUFBLE1BeUIzQixpQkF6QjJCLEdBNEJ4QixVQTVCd0IsQ0F5QjNCLGlCQXpCMkI7QUFBQSxNQTBCM0IsYUExQjJCLEdBNEJ4QixVQTVCd0IsQ0EwQjNCLGFBMUIyQjtBQUFBLE1BMkIzQixrQkEzQjJCLEdBNEJ4QixVQTVCd0IsQ0EyQjNCLGtCQTNCMkIsRUE4QjVCOztBQUNBLE1BQU0sYUFBYSxHQUFHLFNBQWhCLGFBQWdCLEdBQU07QUFDM0IsSUFBQSxhQUFhLENBQUU7QUFDZCxNQUFBLFlBQVksRUFBRSxTQURBO0FBRWQsTUFBQSxjQUFjLEVBQUUsU0FGRjtBQUdkLE1BQUEsYUFBYSxFQUFFLFNBSEQ7QUFJZCxNQUFBLGFBQWEsRUFBRSxTQUpEO0FBS2QsTUFBQSxpQkFBaUIsRUFBRTtBQUxMLEtBQUYsQ0FBYjtBQU9BLEdBUkQsQ0EvQjRCLENBeUM1Qjs7O0FBQ0EsTUFBTSxhQUFhLEdBQUcsU0FBaEIsYUFBZ0IsQ0FBRSxLQUFGLEVBQWE7QUFDbEMsUUFBSyxDQUFDLEtBQUQsSUFBVSxDQUFDLEtBQUssQ0FBQyxHQUF0QixFQUE0QjtBQUMzQixNQUFBLGFBQWE7QUFFYjtBQUNBOztBQUVELFFBQUssU0FBUyxDQUFFLEtBQUssQ0FBQyxHQUFSLENBQWQsRUFBOEI7QUFDN0IsTUFBQSxRQUFRLENBQUU7QUFBRSxRQUFBLFdBQVcsRUFBRTtBQUFmLE9BQUYsQ0FBUjtBQUVBLE1BQUEsYUFBYSxDQUFFO0FBQUUsUUFBQSxhQUFhLEVBQUUsS0FBSyxDQUFDO0FBQXZCLE9BQUYsQ0FBYjtBQUVBO0FBQ0E7O0FBRUQsUUFBSSxTQUFKOztBQUVBLFFBQUssS0FBSyxDQUFDLFVBQVgsRUFBd0I7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsTUFBQSxTQUFTLEdBQUssWUFBWSxLQUFLLENBQUMsVUFBcEIsR0FBbUMsT0FBbkMsR0FBNkMsT0FBekQ7QUFDQSxLQUxELE1BS087QUFDTjtBQUNBO0FBQ0EsVUFDQyxLQUFLLENBQUMsSUFBTixLQUFlLE9BQWYsSUFDQSxLQUFLLENBQUMsSUFBTixLQUFlLE9BRmhCLEVBR0U7QUFDRDtBQUNBOztBQUNELE1BQUEsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFsQjtBQUNBOztBQUVELFFBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFoQixDQWxDa0MsQ0FvQ2xDOztBQUNBLFFBQUssU0FBUyxLQUFLLE9BQWQsSUFBeUIsU0FBUyxLQUFLLE1BQTVDLEVBQXFEO0FBQ3BEO0FBQ0E7QUFDQSxVQUFLLEtBQUssQ0FBQyxLQUFOLElBQWUsS0FBSyxDQUFDLEtBQU4sQ0FBYSxTQUFiLENBQXBCLEVBQStDO0FBQzlDLFFBQUEsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFOLENBQWEsU0FBYixFQUF5QixHQUEvQjtBQUNBLE9BRkQsTUFFTyxJQUFLLEtBQUssQ0FBQyxhQUFOLElBQXVCLEtBQUssQ0FBQyxhQUFOLENBQW9CLEtBQXBCLENBQTJCLFNBQTNCLENBQTVCLEVBQXFFO0FBQzNFLFFBQUEsR0FBRyxHQUFHLEtBQUssQ0FBQyxhQUFOLENBQW9CLEtBQXBCLENBQTJCLFNBQTNCLEVBQXVDLFVBQTdDO0FBQ0E7QUFDRDs7QUFFRCxJQUFBLFFBQVEsQ0FBRTtBQUFFLE1BQUEsV0FBVyxFQUFFO0FBQWYsS0FBRixDQUFSO0FBRUEsSUFBQSxhQUFhLENBQUU7QUFDZCxNQUFBLFlBQVksRUFBRSxLQUFLLENBQUMsRUFETjtBQUVkLE1BQUEsY0FBYyxFQUFFLFNBRkY7QUFHZCxNQUFBLGFBQWEsRUFBRSxHQUhEO0FBSWQsTUFBQSxhQUFhLEVBQUUsS0FBSyxDQUFDLEdBSlA7QUFLZCxNQUFBLGlCQUFpQixFQUFFLEtBQUssQ0FBQztBQUxYLEtBQUYsQ0FBYixDQWpEa0MsQ0F5RGxDO0FBQ0E7O0FBQ0EsUUFBSyxlQUFlLE9BQU8sS0FBSyxDQUFDLFFBQWpDLEVBQTRDO0FBQzNDLE1BQUEsS0FBSyxDQUFDLFFBQU4sQ0FBZ0IsS0FBaEIsRUFBdUIsU0FBdkI7QUFDQTtBQUNELEdBOURELENBMUM0QixDQTBHNUI7OztBQUNBLE1BQU0sV0FBVyxHQUFHLFNBQWQsV0FBYyxDQUFFLE1BQUYsRUFBYztBQUNqQyxRQUFNLGtCQUFrQixHQUFHLENBQUUsV0FBRixFQUFlLGlCQUFmLEVBQWtDLFVBQWxDLEVBQThDLFlBQTlDLENBQTNCO0FBQ0EsUUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFFLE1BQUYsQ0FBOUIsQ0FGaUMsQ0FJakM7O0FBQ0EsUUFBSyxNQUFNLEtBQUssYUFBWCxJQUE0QixDQUFFLGtCQUFrQixDQUFDLFFBQW5CLENBQTZCLFNBQTdCLENBQW5DLEVBQThFO0FBQzdFO0FBQ0E7O0FBRUQsSUFBQSxhQUFhLENBQUU7QUFDZCxNQUFBLFlBQVksRUFBRSxTQURBO0FBRWQsTUFBQSxjQUFjLEVBQUUsS0FGRjtBQUdkLE1BQUEsYUFBYSxFQUFFLE1BSEQ7QUFJZCxNQUFBLGFBQWEsRUFBRSxTQUpEO0FBS2QsTUFBQSxpQkFBaUIsRUFBRTtBQUxMLEtBQUYsQ0FBYjtBQU9BLEdBaEJEO0FBa0JBOzs7OztBQUdBLE1BQU0sV0FBVyxHQUFHLFNBQWQsV0FBYyxHQUFNO0FBQ3pCLFFBQUssYUFBTCxFQUFxQjtBQUNwQixhQUFPLFNBQVA7QUFDQTs7QUFFRCxXQUNDLG9CQUFDLGdCQUFELFFBQ0Msb0JBQUMsZ0JBQUQ7QUFDQyxNQUFBLElBQUksRUFBQyxjQUROO0FBRUMsTUFBQSxTQUFTLEVBQUcsU0FGYjtBQUdDLE1BQUEsTUFBTSxFQUFHO0FBQ1IsUUFBQSxLQUFLLEVBQUUsZUFEQztBQUVSLFFBQUEsWUFBWSxFQUFFLEVBQUUsQ0FBRSxtREFBRjtBQUZSLE9BSFY7QUFPQyxNQUFBLFFBQVEsRUFBRyxhQVBaO0FBUUMsTUFBQSxXQUFXLEVBQUssaUJBQWlCLENBQUMsUUFBbEIsQ0FBNEIsT0FBNUIsQ0FBRixHQUE0QyxXQUE1QyxHQUEwRCxTQVJ6RTtBQVNDLE1BQUEsWUFBWSxFQUFHO0FBVGhCLE1BREQsRUFZRyxpQkFBaUIsQ0FBQyxRQUFsQixDQUE0QixPQUE1QixLQUNEO0FBQUcsTUFBQSxTQUFTLEVBQUM7QUFBYix3RUFiRixDQUREO0FBa0JBLEdBdkJELENBaEk0QixDQXlKNUI7OztBQUNBLE1BQU0saUJBQWlCLEdBQ3RCLG9CQUFDLGlCQUFELFFBQ0Msb0JBQUMsU0FBRDtBQUNDLElBQUEsS0FBSyxFQUFHLEVBQUUsQ0FBRSxnQkFBRixDQURYO0FBRUMsSUFBQSxTQUFTLEVBQUM7QUFGWCxLQUlHLENBQUUsaUJBQUYsSUFBeUIsV0FBVyxFQUp2QyxFQUtHLENBQUMsQ0FBRSxhQUFILElBQ0Qsb0JBQUMsUUFBRCxRQUNHLGNBQWMsS0FBSyxLQUFuQixHQUNELG9CQUFDLFdBQUQ7QUFDQyxJQUFBLEtBQUssRUFBRyxFQUFFLENBQUUsS0FBRixDQURYO0FBRUMsSUFBQSxLQUFLLEVBQUcsYUFGVDtBQUdDLElBQUEsUUFBUSxFQUFHLGtCQUFBLGFBQWEsRUFBSTtBQUMzQixNQUFBLGFBQWEsQ0FBRTtBQUNkLFFBQUEsYUFBYSxFQUFiLGFBRGM7QUFFZCxRQUFBLGNBQWMsRUFBSSxhQUFhLEtBQUssRUFBcEIsR0FBMkIsU0FBM0IsR0FBdUM7QUFGekMsT0FBRixDQUFiO0FBSUE7QUFSRixJQURDLEdBWUQsb0JBQUMsZ0JBQUQsUUFDQyxvQkFBQyxXQUFEO0FBQ0MsSUFBQSxRQUFRLEVBQUcsYUFEWjtBQUVDLElBQUEsWUFBWSxFQUFHLGlCQUZoQjtBQUdDLElBQUEsS0FBSyxFQUFHLFlBSFQ7QUFJQyxJQUFBLE1BQU0sRUFBRztBQUFBLFVBQUksSUFBSixTQUFJLElBQUo7QUFBQSxhQUNSLG9CQUFDLFVBQUQ7QUFDQyxRQUFBLE9BQU8sRUFBRyxJQURYO0FBRUMsUUFBQSxJQUFJLEVBQUMsTUFGTjtBQUdDLFFBQUEsS0FBSyxFQUFHLEVBQUUsQ0FBRSx1QkFBRixDQUhYO0FBSUMsUUFBQSxTQUFTLE1BSlY7QUFLQyxRQUFBLE9BQU87QUFMUixTQU9HLEVBQUUsQ0FBRSxNQUFGLENBUEwsQ0FEUTtBQUFBO0FBSlYsSUFERCxFQWlCQyxvQkFBQyxVQUFEO0FBQ0MsSUFBQSxPQUFPLEVBQUcsYUFEWDtBQUVDLElBQUEsSUFBSSxFQUFDLElBRk47QUFHQyxJQUFBLEtBQUssRUFBSyx5QkFIWDtBQUlDLElBQUEsU0FBUyxNQUpWO0FBS0MsSUFBQSxPQUFPO0FBTFIsS0FPRyxFQUFFLENBQUUsUUFBRixDQVBMLENBakJELENBYkYsQ0FORixFQWlERyxPQUFPLENBQUMsUUFBUixDQUFrQixTQUFsQixLQUNELG9CQUFDLFlBQUQ7QUFDQyxJQUFBLEtBQUssRUFBRyxFQUFFLENBQUUsb0JBQUYsQ0FEWDtBQUVDLElBQUEsS0FBSyxFQUFHLGlCQUZUO0FBR0MsSUFBQSxRQUFRLEVBQUcsa0JBQUEsS0FBSztBQUFBLGFBQUksYUFBYSxDQUFFO0FBQUUsUUFBQSxpQkFBaUIsRUFBRTtBQUFyQixPQUFGLENBQWpCO0FBQUEsS0FIakI7QUFJQyxJQUFBLEdBQUcsRUFBRyxFQUpQO0FBS0MsSUFBQSxHQUFHLEVBQUcsR0FMUDtBQU1DLElBQUEsSUFBSSxFQUFHO0FBTlIsSUFsREYsRUEyREcsQ0FBRSxjQUFjLEtBQUssT0FBbkIsSUFBOEIsY0FBYyxLQUFLLEtBQW5ELEtBQ0Qsb0JBQUMsYUFBRDtBQUNDLElBQUEsS0FBSyxFQUFHLEVBQUUsQ0FBRSxnQkFBRixDQURYO0FBRUMsSUFBQSxPQUFPLEVBQUcsa0JBRlg7QUFHQyxJQUFBLFFBQVEsRUFBRztBQUFBLGFBQU0sYUFBYSxDQUFFO0FBQUUsUUFBQSxrQkFBa0IsRUFBRSxDQUFDO0FBQXZCLE9BQUYsQ0FBbkI7QUFBQTtBQUhaLElBNURGLENBREQsQ0FERCxDQTFKNEIsQ0FrTzVCOztBQUNBLE1BQU0sUUFBUSxHQUNiLG9CQUFDLFFBQUQsUUFDRyxpQkFBaUIsSUFBTSxXQUFXLEVBRHJDLEVBRUssQ0FBQyxDQUFDLGFBQUYsSUFBbUIsY0FBYyxLQUFLLEtBQXhDLElBQ0Qsb0JBQUMsYUFBRCxRQUNDLG9CQUFDLE9BQUQsUUFDQyxvQkFBQyxnQkFBRCxRQUNDLG9CQUFDLFdBQUQ7QUFDQyxJQUFBLFFBQVEsRUFBRyxhQURaO0FBRUMsSUFBQSxpQkFBaUIsRUFBRyxpQkFGckI7QUFHQyxJQUFBLEtBQUssRUFBRyxZQUhUO0FBSUMsSUFBQSxNQUFNLEVBQUc7QUFBQSxVQUFJLElBQUosU0FBSSxJQUFKO0FBQUEsYUFDUixvQkFBQyxVQUFEO0FBQ0MsUUFBQSxTQUFTLEVBQUMsNkJBRFg7QUFFQyxRQUFBLEtBQUssRUFBRyxFQUFFLENBQUUsdUJBQUYsQ0FGWDtBQUdDLFFBQUEsSUFBSSxFQUFDLE1BSE47QUFJQyxRQUFBLE9BQU8sRUFBRztBQUpYLFFBRFE7QUFBQTtBQUpWLElBREQsRUFjQyxvQkFBQyxVQUFEO0FBQ0MsSUFBQSxTQUFTLEVBQUMsNkJBRFg7QUFFQyxJQUFBLEtBQUssRUFBSyx5QkFGWDtBQUdDLElBQUEsSUFBSSxFQUFDLElBSE47QUFJQyxJQUFBLE9BQU8sRUFBRztBQUpYLElBZEQsQ0FERCxDQURELENBSEYsRUE2QkcsQ0FBRSxDQUFDLGlCQUFELElBQXNCLGFBQXhCLEtBQTJDLGlCQTdCOUMsQ0FERCxDQW5PNEIsQ0FxUTVCOztBQUNBLE1BQU0sT0FBTyxHQUFHLDZCQUNmLFNBRGU7QUFHZCw4QkFBMEIsaUJBQWlCLEtBQUs7QUFIbEMsa0NBSVosd0JBQXdCLENBQUUsaUJBQUYsQ0FKWixFQUlxQyx3QkFBd0IsQ0FBRSxpQkFBRixDQUo3RCxtREFLQSxZQUxBLEdBS2tCLFlBQVksSUFBSSxZQUFZLGNBTDlDLGdCQUFoQixDQXRRNEIsQ0ErUTVCOztBQUNBLE1BQU0sZUFBZSxHQUNwQjtBQUNDLElBQUEsU0FBUyxFQUFHLE9BRGI7QUFFQyxJQUFBLEdBQUcsRUFBRyxhQUZQO0FBR0MsSUFBQSxHQUFHLEVBQUc7QUFIUCxJQURELENBaFI0QixDQXdSNUI7O0FBQ0EsTUFBTSxlQUFlLEdBQ3BCO0FBQ0MsSUFBQSxTQUFTLEVBQUcsT0FEYjtBQUVDLElBQUEsUUFBUSxFQUFHLGtCQUZaO0FBR0MsSUFBQSxLQUFLLEVBQUcsa0JBSFQ7QUFJQyxJQUFBLElBQUksRUFBRyxrQkFKUjtBQUtDLElBQUEsR0FBRyxFQUFHO0FBTFAsSUFERCxDQXpSNEIsQ0FtUzVCOztBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsU0FBbkIsZ0JBQW1CLEdBQU07QUFDOUIsUUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFFLGFBQUYsQ0FBOUI7QUFDQSxRQUFJLEdBQUcsR0FBRyxFQUFWOztBQUVBLFFBQUssU0FBUyxLQUFLLGlCQUFkLElBQW1DLFNBQVMsS0FBSyxVQUF0RCxFQUFtRTtBQUNsRSxVQUFNLE9BQU8sR0FBSyxTQUFTLEtBQUssVUFBaEIsR0FDZixPQUFPLENBQUUsYUFBRixDQURRLEdBRWYsY0FBYyxDQUFFLGFBQUYsQ0FBZCxDQUFnQyxLQUFoQyxDQUF1QyxHQUF2QyxFQUE2QyxDQUE3QyxFQUFnRCxNQUFoRCxDQUF1RCxDQUF2RCxDQUZELENBRGtFLENBS2xFOztBQUNBLE1BQUEsR0FBRyxxQ0FBOEIsT0FBOUIsQ0FBSDtBQUNBLE1BQUEsR0FBRyxJQUFNLGtCQUFGLDBGQUF5RyxPQUF6RyxJQUFxSCxFQUE1SDtBQUNBOztBQUVELFFBQUssU0FBUyxLQUFLLFdBQW5CLEVBQWlDO0FBQ2hDLFVBQU0sUUFBTyxHQUFHLE9BQU8sQ0FBRSxhQUFGLENBQXZCLENBRGdDLENBR2hDOzs7QUFDQSxNQUFBLEdBQUcsc0NBQStCLFFBQS9CLENBQUg7QUFDQSxNQUFBLEdBQUcsSUFBTSxrQkFBRixHQUF5QixlQUF6QixHQUEyQyxFQUFsRDtBQUNBOztBQUVELFFBQUssU0FBUyxLQUFLLFlBQW5CLEVBQWtDO0FBQ2pDLFVBQU0sU0FBTyxHQUFHLGNBQWMsQ0FBRSxhQUFGLENBQWQsQ0FBZ0MsS0FBaEMsQ0FBdUMsR0FBdkMsRUFBNkMsQ0FBN0MsRUFBZ0QsTUFBaEQsQ0FBdUQsQ0FBdkQsQ0FBaEIsQ0FEaUMsQ0FHakM7OztBQUNBLE1BQUEsR0FBRyxpRUFBMEQsU0FBMUQsYUFBSDtBQUNBLE1BQUEsR0FBRyxJQUFNLGtCQUFGLEdBQXlCLDJCQUF6QixHQUF1RCxFQUE5RDtBQUNBOztBQUVELFFBQUssR0FBRyxLQUFLLEVBQWIsRUFBa0I7QUFDakIsYUFDQztBQUNDLFFBQUEsR0FBRyxFQUFHLEdBRFA7QUFFQyxRQUFBLFdBQVcsRUFBQyxHQUZiO0FBR0MsUUFBQSxLQUFLLEVBQUMsc0JBSFA7QUFJQyxRQUFBLFNBQVMsRUFBRztBQUpiLFFBREQ7QUFRQTtBQUNELEdBeENELENBcFM0QixDQThVNUI7OztBQUNBLFNBQ0Msb0JBQUMsUUFBRCxRQUNHLFFBREgsRUFFSyxZQUFZLGNBQWQsSUFBb0MsZUFGdkMsRUFHSyxZQUFZLGNBQWQsSUFBb0MsZUFIdkMsRUFJSyxVQUFVLGNBQVosSUFDRDtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDQztBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRyxnQkFBZ0IsRUFEbkIsQ0FERCxDQURELENBTEYsRUFhRyxXQUFXLElBQ1o7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0M7QUFBSyxJQUFBLEdBQUcsRUFBRztBQUFYLElBREQsRUFFQyxvQkFBQyxPQUFELE9BRkQsQ0FkRixDQUREO0FBdUJBLEMsQ0FFRDs7O0FBTUE7ZUFDZSxTQUFTLENBQUU7QUFDekIsRUFBQSxXQUFXLEVBQUU7QUFEWSxDQUFGLENBQVQsQ0FFVixVQUZVLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE3IEplZCBXYXRzb24uXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZSAoTUlUKSwgc2VlXG4gIGh0dHA6Ly9qZWR3YXRzb24uZ2l0aHViLmlvL2NsYXNzbmFtZXNcbiovXG4vKiBnbG9iYWwgZGVmaW5lICovXG5cbihmdW5jdGlvbiAoKSB7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgaGFzT3duID0ge30uaGFzT3duUHJvcGVydHk7XG5cblx0ZnVuY3Rpb24gY2xhc3NOYW1lcyAoKSB7XG5cdFx0dmFyIGNsYXNzZXMgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXHRcdFx0aWYgKCFhcmcpIGNvbnRpbnVlO1xuXG5cdFx0XHR2YXIgYXJnVHlwZSA9IHR5cGVvZiBhcmc7XG5cblx0XHRcdGlmIChhcmdUeXBlID09PSAnc3RyaW5nJyB8fCBhcmdUeXBlID09PSAnbnVtYmVyJykge1xuXHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShhcmcpICYmIGFyZy5sZW5ndGgpIHtcblx0XHRcdFx0dmFyIGlubmVyID0gY2xhc3NOYW1lcy5hcHBseShudWxsLCBhcmcpO1xuXHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goaW5uZXIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGZvciAodmFyIGtleSBpbiBhcmcpIHtcblx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRjbGFzc2VzLnB1c2goa2V5KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gY2xhc3Nlcy5qb2luKCcgJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRjbGFzc05hbWVzLmRlZmF1bHQgPSBjbGFzc05hbWVzO1xuXHRcdG1vZHVsZS5leHBvcnRzID0gY2xhc3NOYW1lcztcblx0fSBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBkZWZpbmUuYW1kID09PSAnb2JqZWN0JyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0Ly8gcmVnaXN0ZXIgYXMgJ2NsYXNzbmFtZXMnLCBjb25zaXN0ZW50IHdpdGggbnBtIHBhY2thZ2UgbmFtZVxuXHRcdGRlZmluZSgnY2xhc3NuYW1lcycsIFtdLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gY2xhc3NOYW1lcztcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xhc3NOYW1lcyA9IGNsYXNzTmFtZXM7XG5cdH1cbn0oKSk7XG4iLCIvKipcbiAqIFRoZSBiYWNrZ3JvdW5kIGNvbXBvbmVudCBhdHRyaWJ1dGVzLlxuICovXG5cbmNvbnN0IEJhY2tncm91bmRBdHRyaWJ1dGVzID0ge1xuXHRiYWNrZ3JvdW5kSWQ6IHtcblx0XHR0eXBlOiAnbnVtYmVyJyxcblx0fSxcblx0YmFja2dyb3VuZFR5cGU6IHtcblx0XHR0eXBlOiAnc3RyaW5nJyxcblx0fSxcblx0YmFja2dyb3VuZFVybDoge1xuXHRcdHR5cGU6ICdzdHJpbmcnLFxuXHR9LFxuXHRiYWNrZ3JvdW5kT3BhY2l0eToge1xuXHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdGRlZmF1bHQ6IDEwMCxcblx0fSxcblx0YmFja2dyb3VuZEFsdDoge1xuXHRcdHR5cGU6ICdzdHJpbmcnLFxuXHR9LFxuXHRiYWNrZ3JvdW5kQ2FwdGlvbjoge1xuXHRcdHR5cGU6ICdzdHJpbmcnLFxuXHR9LFxuXHRiYWNrZ3JvdW5kQXV0b3BsYXk6IHtcblx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0ZGVmYXVsdDogZmFsc2UsXG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYWNrZ3JvdW5kQXR0cmlidXRlczsiLCIvKipcbiAqIENvbXBvbmVudDogYmFja2dyb3VuZFxuICpcbiAqIEFuIGFic3JhY3Rpb24gb2YgdGhlIGRlZmF1bHQgQ292ZXIgYmxvY2sgZm9yIG1vcmUgZ2VuZXJhbCB1c2UgaW5zaWRlIGJsb2Nrcy5cbiAqXG4gKiBJbXBvcnQgdGhpcyBjb21wb25lbnQgYW5kIGl0cyBhdHRyaWJ1dGVzIGludG8gYSBibG9jayB3aXRoOlxuICogXHRgaW1wb3J0IEJhY2tncm91bmQsIHsgQmFja2dyb3VuZEF0dHJpYnV0ZXMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2JhY2tncm91bmQnO2BcbiovXG5cbi8vIEV4dGVybmFsIGRlcGVuZGVuY2llcy5cbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG4vLyBJbXBvcnQgQ1NTLlxuLy9pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuLy9pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5cbi8vIEludGVybmFsIGRlcGVuZGVuY2llcy5cbmltcG9ydCBCYWNrZ3JvdW5kQXR0cmlidXRlcyBmcm9tICcuL2F0dHJpYnV0ZXMuanMnO1xuXG4vLyBXb3JkUHJlc3MgZGVwZW5kZW5jaWVzLlxuY29uc3Qge1xuXHRfXyxcbn0gPSB3cC5pMThuO1xuY29uc3Qge1xuXHRGcmFnbWVudCxcbn0gPSB3cC5lbGVtZW50O1xuY29uc3Qge1xuXHRJY29uQnV0dG9uLFxuXHRQYW5lbEJvZHksXG5cdFJhbmdlQ29udHJvbCxcblx0U3Bpbm5lcixcblx0VGV4dENvbnRyb2wsXG5cdFRvZ2dsZUNvbnRyb2wsXG5cdFRvb2xiYXIsXG59ID0gd3AuY29tcG9uZW50cztcbmNvbnN0IHtcblx0QmxvY2tDb250cm9scyxcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdE1lZGlhUGxhY2Vob2xkZXIsXG5cdE1lZGlhVXBsb2FkLFxuXHRNZWRpYVVwbG9hZENoZWNrLFxufSA9ICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB3cC5ibG9ja0VkaXRvciApID8gd3AuZWRpdG9yIDogd3AuYmxvY2tFZGl0b3I7XG5jb25zdCB7XG5cdGdldEF1dGhvcml0eSxcblx0Z2V0UGF0aCxcblx0Z2V0UXVlcnlTdHJpbmcsXG59ID0gd3AudXJsO1xuY29uc3Qge1xuXHRpc0Jsb2JVUkwsXG59ID0gd3AuYmxvYjtcbmNvbnN0IHtcblx0d2l0aFN0YXRlLFxufSA9IHdwLmNvbXBvc2U7XG5cbi8qKlxuICogUmV0dXJuIGEgY2xhc3NuYW1lIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiB0aGUgJ0JhY2tncm91bmQgT3BhY2l0eScgc2V0dGluZy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gcmF0aW8gVGhlIHZhbHVlIG9mIHRoZSAnQmFja2dyb3VuZCBPcGFjaXR5JyBzZXR0aW5nLlxuKi9cbmNvbnN0IEJhY2tncm91bmRPcGFjaXR5VG9DbGFzcyA9ICggcmF0aW8gKSA9PiB7XG5cdHJldHVybiAoIHJhdGlvID09PSAxMDAgKSA/XG5cdFx0bnVsbCA6XG5cdFx0J2hhcy1iYWNrZ3JvdW5kLW9wYWNpdHktJyArICggMTAgKiBNYXRoLnJvdW5kKCByYXRpbyAvIDEwICkgKTtcbn1cblxuLyoqXG4gKiBUaGUgYmFja2dyb3VuZCBjb21wb25lbnQuXG4gKlxuICogQHBhcmFtIHthcnJheX0gcHJvcHMgVGhlIHByb3BlcnRpZXMgcGFzc2VkIHRvIHRoZSBjb21wb25lbnQuXG4gKi9cbmZ1bmN0aW9uIEJhY2tncm91bmQoIHByb3BzICkge1xuXHQvLyBEZXN0cnVjdHVyZSBwcm9wZXJ0aWVzIG9mIHRoaXMgY29tcG9uZW50IHdpdGggZGVmYXVsdHMuXG5cdGNvbnN0IHtcblx0XHRhbGxvd2VkTWVkaWFUeXBlcyA9IFsgJ2ltYWdlJywgJ3ZpZGVvJyBdLFxuXHRcdGJsb2NrUHJvcHMsXG5cdFx0Y2xhc3NOYW1lID0gJ2J1LWJsb2Nrcy1iYWNrZ3JvdW5kJyxcblx0XHRpbWFnZVNpemUgPSAnZnVsbCcsXG5cdFx0aW5saW5lUGxhY2Vob2xkZXIgPSBmYWxzZSxcblx0XHRvcHRpb25zID0gWyAnb3BhY2l0eScgXSxcblx0XHRwbGFjZWhvbGRlclRleHQgPSBfXyggJ0FkZCBNZWRpYScgKSxcblx0XHRpc1VwbG9hZGluZyxcblx0XHRzZXRTdGF0ZSxcblx0fSA9IHByb3BzO1xuXG5cdC8vIEdldCB0aGUgcHJvcGVydGllcyBvZiB0aGUgYmxvY2sgdXNpbmcgdGhpcyBjb21wb25lbnQuXG5cdGNvbnN0IHtcblx0XHRhdHRyaWJ1dGVzLFxuXHRcdHNldEF0dHJpYnV0ZXMsXG5cdH0gPSBibG9ja1Byb3BzO1xuXG5cdC8vIEdldCB0aGUgYXR0cmlidXRlcyBmb3IgaGFuZGxpbmcgdGhlIGJhY2tncm91bmQgZGF0YS5cblx0Y29uc3Qge1xuXHRcdGJhY2tncm91bmRJZCxcblx0XHRiYWNrZ3JvdW5kVHlwZSxcblx0XHRiYWNrZ3JvdW5kVXJsLFxuXHRcdGJhY2tncm91bmRPcGFjaXR5LFxuXHRcdGJhY2tncm91bmRBbHQsXG5cdFx0YmFja2dyb3VuZEF1dG9wbGF5LFxuXHR9ID0gYXR0cmlidXRlcztcblxuXHQvLyBSZXNldCBhdHRyaWJ1dGVzIHRvIHVuZGVmaW5lZC5cblx0Y29uc3Qgb25SZW1vdmVNZWRpYSA9ICgpID0+IHtcblx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRiYWNrZ3JvdW5kSWQ6IHVuZGVmaW5lZCxcblx0XHRcdGJhY2tncm91bmRUeXBlOiB1bmRlZmluZWQsXG5cdFx0XHRiYWNrZ3JvdW5kVXJsOiB1bmRlZmluZWQsXG5cdFx0XHRiYWNrZ3JvdW5kQWx0OiB1bmRlZmluZWQsXG5cdFx0XHRiYWNrZ3JvdW5kQ2FwdGlvbjogdW5kZWZpbmVkLFxuXHRcdH0gKTtcblx0fTtcblxuXHQvLyBTZXQgYXR0cmlidXRlcyBiYXNlZCBvbiB0aGUgc2VsZWN0ZWQgb3IgdXBsb2FkZWQgbWVkaWEuXG5cdGNvbnN0IG9uU2VsZWN0TWVkaWEgPSAoIG1lZGlhICkgPT4ge1xuXHRcdGlmICggIW1lZGlhIHx8ICFtZWRpYS51cmwgKSB7XG5cdFx0XHRvblJlbW92ZU1lZGlhKCk7XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIGlzQmxvYlVSTCggbWVkaWEudXJsICkgKSB7XG5cdFx0XHRzZXRTdGF0ZSggeyBpc1VwbG9hZGluZzogdHJ1ZSB9ICk7XG5cblx0XHRcdHNldEF0dHJpYnV0ZXMoIHsgYmFja2dyb3VuZFVybDogbWVkaWEudXJsIH0gKTtcblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGxldCBtZWRpYVR5cGU7XG5cblx0XHRpZiAoIG1lZGlhLm1lZGlhX3R5cGUgKSB7XG5cdFx0XHQvLyBEZXRlcm1pbmUgdGhlIG1lZGlhIHR5cGUgZnJvbSBzZWxlY3Rpb25zIG9yaWdpbmF0aW5nIGZyb20gYSBmaWxlIHVwbG9hZC5cblx0XHRcdC8vIE9ubHkgaW1hZ2VzIGFuZCB2aWRlb3MgYXJlIGFjY2VwdGVkLiBJZiB0aGUgbWVkaWFfdHlwZSBpcyBub3QgYW4gaW1hZ2UsXG5cdFx0XHQvLyB3ZSBjYW4gYXNzdW1lIGl0IGlzIGEgdmlkZW8gKHdoaWNoIGNvbnRhaW5zIHRoZSBtZWRpYSB0eXBlIG9mICdmaWxlJykuXG5cdFx0XHRtZWRpYVR5cGUgPSAoICdpbWFnZScgPT09IG1lZGlhLm1lZGlhX3R5cGUgKSA/ICdpbWFnZScgOiAndmlkZW8nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEZXRlcm1pbmUgdGhlIG1lZGlhIHR5cGUgZnJvbSBzZWxlY3Rpb25zIG9yaWdpbmF0aW5nIGZyb20gZXhpc3RpbmcgZmlsZXNcblx0XHRcdC8vIGluIHRoZSBtZWRpYSBsaWJyYXJ5LlxuXHRcdFx0aWYgKFxuXHRcdFx0XHRtZWRpYS50eXBlICE9PSAnaW1hZ2UnICYmXG5cdFx0XHRcdG1lZGlhLnR5cGUgIT09ICd2aWRlbydcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRtZWRpYVR5cGUgPSBtZWRpYS50eXBlO1xuXHRcdH1cblxuXHRcdGxldCB1cmwgPSBtZWRpYS51cmw7XG5cblx0XHQvLyBBc3NpZ24gdGhlIGJsb2NrLWRlc2lnbmF0ZWQgc2l6ZSBpZiBpdCBleGlzdHMuXG5cdFx0aWYgKCBtZWRpYVR5cGUgPT09ICdpbWFnZScgJiYgaW1hZ2VTaXplICE9PSAnZnVsbCcgKSB7XG5cdFx0XHQvLyBUaGUgZmlyc3QgY2hlY2sgaXMgZm9yIGltYWdlcyBhbHJlYWR5IGluIHRoZSBtZWRpYSBsaWJyYXJ5LlxuXHRcdFx0Ly8gVGhlIHNlY29uZCBpcyBmb3IgbmV3bHkgdXBsb2FkZWQgaW1hZ2VzLlxuXHRcdFx0aWYgKCBtZWRpYS5zaXplcyAmJiBtZWRpYS5zaXplc1sgaW1hZ2VTaXplIF0gKSB7XG5cdFx0XHRcdHVybCA9IG1lZGlhLnNpemVzWyBpbWFnZVNpemUgXS51cmw7XG5cdFx0XHR9IGVsc2UgaWYgKCBtZWRpYS5tZWRpYV9kZXRhaWxzICYmIG1lZGlhLm1lZGlhX2RldGFpbHMuc2l6ZXNbIGltYWdlU2l6ZSBdICkge1xuXHRcdFx0XHR1cmwgPSBtZWRpYS5tZWRpYV9kZXRhaWxzLnNpemVzWyBpbWFnZVNpemUgXS5zb3VyY2VfdXJsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHNldFN0YXRlKCB7IGlzVXBsb2FkaW5nOiBmYWxzZSB9ICk7XG5cblx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRiYWNrZ3JvdW5kSWQ6IG1lZGlhLmlkLFxuXHRcdFx0YmFja2dyb3VuZFR5cGU6IG1lZGlhVHlwZSxcblx0XHRcdGJhY2tncm91bmRVcmw6IHVybCxcblx0XHRcdGJhY2tncm91bmRBbHQ6IG1lZGlhLmFsdCxcblx0XHRcdGJhY2tncm91bmRDYXB0aW9uOiBtZWRpYS5jYXB0aW9uLFxuXHRcdH0gKTtcblxuXHRcdC8vIElmIGFuIGBvbkNoYW5nZWAgYXR0cmlidXRlIGlzIHBhcnQgb2YgdGhlIEJhY2tncm91bmQgY29tcG9uZW50LCBlbnN1cmVcblx0XHQvLyB0aGF0IGZpcmVzIGFzIGV4cGVjdGVkLlxuXHRcdGlmICggJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHByb3BzLm9uQ2hhbmdlICkge1xuXHRcdFx0cHJvcHMub25DaGFuZ2UoIG1lZGlhLCBtZWRpYVR5cGUgKTtcblx0XHR9XG5cdH07XG5cblx0Ly8gU2V0IGF0dHJpYnV0ZXMgYmFzZWQgb24gYSBzZWxlY3RlZCBVUkwuXG5cdGNvbnN0IG9uU2VsZWN0VVJMID0gKCBuZXdVUkwgKSA9PiB7XG5cdFx0Y29uc3QgYWxsb3dlZEF1dGhvcml0aWVzID0gWyAndmltZW8uY29tJywgJ3d3dy55b3V0dWJlLmNvbScsICd5b3V0dS5iZScsICd3d3cuYnUuZWR1JyBdO1xuXHRcdGNvbnN0IGF1dGhvcml0eSA9IGdldEF1dGhvcml0eSggbmV3VVJMICk7XG5cblx0XHQvLyBTdG9wIGhlcmUgaWYgdGhlIHNlbGVjdGVkIFVSTCBpc24ndCBmcm9tIG9uZSBvZiB0aGUgYWxsb3dlZCBkb21haW5zLlxuXHRcdGlmICggbmV3VVJMID09PSBiYWNrZ3JvdW5kVXJsIHx8ICEgYWxsb3dlZEF1dGhvcml0aWVzLmluY2x1ZGVzKCBhdXRob3JpdHkgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRiYWNrZ3JvdW5kSWQ6IHVuZGVmaW5lZCxcblx0XHRcdGJhY2tncm91bmRUeXBlOiAndXJsJyxcblx0XHRcdGJhY2tncm91bmRVcmw6IG5ld1VSTCxcblx0XHRcdGJhY2tncm91bmRBbHQ6IHVuZGVmaW5lZCxcblx0XHRcdGJhY2tncm91bmRDYXB0aW9uOiB1bmRlZmluZWQsXG5cdFx0fSApO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgbWVkaWEgcGxhY2Vob2xkZXIgaWYgbm8gbWVkaWEgaGFzIGJlZW4gc2V0LlxuXHQgKi9cblx0Y29uc3QgcGxhY2Vob2xkZXIgPSAoKSA9PiB7XG5cdFx0aWYgKCBiYWNrZ3JvdW5kVXJsICkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdDxNZWRpYVBsYWNlaG9sZGVyXG5cdFx0XHRcdFx0aWNvbj0nZm9ybWF0LWltYWdlJ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9XG5cdFx0XHRcdFx0bGFiZWxzPXsge1xuXHRcdFx0XHRcdFx0dGl0bGU6IHBsYWNlaG9sZGVyVGV4dCxcblx0XHRcdFx0XHRcdGluc3RydWN0aW9uczogX18oICdEcmFnLCB1cGxvYWQsIG9yIHNlbGVjdCBhIGZpbGUgZnJvbSB5b3VyIGxpYnJhcnkuJyApLFxuXHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdG9uU2VsZWN0PXsgb25TZWxlY3RNZWRpYSB9XG5cdFx0XHRcdFx0b25TZWxlY3RVUkw9eyAoIGFsbG93ZWRNZWRpYVR5cGVzLmluY2x1ZGVzKCAndmlkZW8nICkgKSA/IG9uU2VsZWN0VVJMIDogdW5kZWZpbmVkIH1cblx0XHRcdFx0XHRhbGxvd2VkVHlwZXM9eyBhbGxvd2VkTWVkaWFUeXBlcyB9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgYWxsb3dlZE1lZGlhVHlwZXMuaW5jbHVkZXMoICd2aWRlbycgKSAmJlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uIGNvbXBvbmVudHMtYnUtYmFja2dyb3VuZC11cmwtbm90ZVwiPllvdVR1YmUsIFZpbWVvLCBhbmQgQlVuaXZlcnNlIFVSTHMgYXJlIHN1cHBvcnRlZCBhdCB0aGlzIHRpbWUuPC9wPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L01lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0KTtcblx0fTtcblxuXHQvLyBSZXR1cm4gaW5zcGVjdG9yIGNvbnRyb2xzLlxuXHRjb25zdCBpbnNwZWN0b3JDb250cm9scyA9IChcblx0XHQ8SW5zcGVjdG9yQ29udHJvbHM+XG5cdFx0XHQ8UGFuZWxCb2R5XG5cdFx0XHRcdHRpdGxlPXsgX18oICdNZWRpYSBTZXR0aW5ncycgKSB9XG5cdFx0XHRcdGNsYXNzTmFtZT0nY29tcG9uZW50cy1wYW5lbF9fYm9keS1idS1iYWNrZ3JvdW5kLW1lZGlhJ1xuXHRcdFx0PlxuXHRcdFx0XHR7ICEgaW5saW5lUGxhY2Vob2xkZXIgJiYgKCBwbGFjZWhvbGRlcigpICkgfVxuXHRcdFx0XHR7ICEhIGJhY2tncm91bmRVcmwgJiYgKFxuXHRcdFx0XHRcdDxGcmFnbWVudD5cblx0XHRcdFx0XHRcdHsgYmFja2dyb3VuZFR5cGUgPT09ICd1cmwnID8gKFxuXHRcdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnVVJMJyApIH1cblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17IGJhY2tncm91bmRVcmwgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgYmFja2dyb3VuZFVybCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRVcmwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJhY2tncm91bmRUeXBlOiAoIGJhY2tncm91bmRVcmwgPT09ICcnICkgPyB1bmRlZmluZWQgOiBiYWNrZ3JvdW5kVHlwZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0gKVxuXHRcdFx0XHRcdFx0XHRcdH0gfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRvblNlbGVjdD17IG9uU2VsZWN0TWVkaWEgfVxuXHRcdFx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgYWxsb3dlZE1lZGlhVHlwZXMgfVxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBiYWNrZ3JvdW5kSWQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsgb3BlbiB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbj0nZWRpdCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnRWRpdCBCYWNrZ3JvdW5kIE1lZGlhJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0xhcmdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnRWRpdCcgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvSWNvbkJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PEljb25CdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvblJlbW92ZU1lZGlhIH1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249J25vJ1xuXHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyAoICdSZW1vdmUgQmFja2dyb3VuZCBNZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRpc0RlZmF1bHRcblx0XHRcdFx0XHRcdFx0XHRcdGlzTGFyZ2Vcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IF9fKCAnUmVtb3ZlJyApIH1cblx0XHRcdFx0XHRcdFx0XHQ8L0ljb25CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvTWVkaWFVcGxvYWRDaGVjaz5cblx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdDwvRnJhZ21lbnQ+XG5cdFx0XHRcdCkgfVxuXHRcdFx0XHR7IG9wdGlvbnMuaW5jbHVkZXMoICdvcGFjaXR5JyApICYmIChcblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQmFja2dyb3VuZCBPcGFjaXR5JyApIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYmFja2dyb3VuZE9wYWNpdHkgfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyByYXRpbyA9PiBzZXRBdHRyaWJ1dGVzKCB7IGJhY2tncm91bmRPcGFjaXR5OiByYXRpbyB9ICkgfVxuXHRcdFx0XHRcdFx0bWluPXsgMTAgfVxuXHRcdFx0XHRcdFx0bWF4PXsgMTAwIH1cblx0XHRcdFx0XHRcdHN0ZXA9eyAxMCB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KSB9XG5cdFx0XHRcdHsgKCBiYWNrZ3JvdW5kVHlwZSA9PT0gJ3ZpZGVvJyB8fCBiYWNrZ3JvdW5kVHlwZSA9PT0gJ3VybCcgKSAmJiAoXG5cdFx0XHRcdFx0PFRvZ2dsZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdBdXRvcGxheSB2aWRlbycgKSB9XG5cdFx0XHRcdFx0XHRjaGVja2VkPXsgYmFja2dyb3VuZEF1dG9wbGF5IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCkgPT4gc2V0QXR0cmlidXRlcyggeyBiYWNrZ3JvdW5kQXV0b3BsYXk6ICFiYWNrZ3JvdW5kQXV0b3BsYXkgfSApIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpIH1cblx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdDwvSW5zcGVjdG9yQ29udHJvbHM+XG5cdCk7XG5cblx0Ly8gRGVmaW5lcyB0aGUgY29udHJvbHMgZm9yIHRoZSBiYWNrZ3JvdW5kIG9wdGlvbnMuXG5cdGNvbnN0IGNvbnRyb2xzID0gKFxuXHRcdDxGcmFnbWVudD5cblx0XHRcdHsgaW5saW5lUGxhY2Vob2xkZXIgJiYgKCBwbGFjZWhvbGRlcigpICkgfVxuXHRcdFx0eyAoICEhYmFja2dyb3VuZFVybCAmJiBiYWNrZ3JvdW5kVHlwZSAhPT0gJ3VybCcgKSAmJiAoXG5cdFx0XHRcdDxCbG9ja0NvbnRyb2xzPlxuXHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkQ2hlY2s+XG5cdFx0XHRcdFx0XHRcdDxNZWRpYVVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgb25TZWxlY3RNZWRpYSB9XG5cdFx0XHRcdFx0XHRcdFx0YWxsb3dlZE1lZGlhVHlwZXM9eyBhbGxvd2VkTWVkaWFUeXBlcyB9XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9eyBiYWNrZ3JvdW5kSWQgfVxuXHRcdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9J2NvbXBvbmVudHMtdG9vbGJhcl9fY29udHJvbCdcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0VkaXQgQmFja2dyb3VuZCBNZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb249J2VkaXQnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxJY29uQnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPSdjb21wb25lbnRzLXRvb2xiYXJfX2NvbnRyb2wnXG5cdFx0XHRcdFx0XHRcdFx0bGFiZWw9eyAoICdSZW1vdmUgQmFja2dyb3VuZCBNZWRpYScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0aWNvbj0nbm8nXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9uUmVtb3ZlTWVkaWEgfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9NZWRpYVVwbG9hZENoZWNrPlxuXHRcdFx0XHRcdDwvVG9vbGJhcj5cblx0XHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdFx0KSB9XG5cdFx0XHR7ICggIWlubGluZVBsYWNlaG9sZGVyIHx8IGJhY2tncm91bmRVcmwgKSAmJiBpbnNwZWN0b3JDb250cm9scyB9XG5cdFx0PC9GcmFnbWVudD5cblx0KVxuXG5cdC8vIEJ1aWxkIHRoZSBjbGFzc2VzIHRvIGFwcGx5IHRvIHRoZSBiYWNrZ3JvdW5kIGVsZW1lbnQuXG5cdGNvbnN0IGNsYXNzZXMgPSBjbGFzc25hbWVzKFxuXHRcdGNsYXNzTmFtZSxcblx0XHR7XG5cdFx0XHQnaGFzLWJhY2tncm91bmQtb3BhY2l0eSc6IGJhY2tncm91bmRPcGFjaXR5ICE9PSAxMDAsXG5cdFx0XHRbIEJhY2tncm91bmRPcGFjaXR5VG9DbGFzcyggYmFja2dyb3VuZE9wYWNpdHkgKSBdOiBCYWNrZ3JvdW5kT3BhY2l0eVRvQ2xhc3MoIGJhY2tncm91bmRPcGFjaXR5ICksXG5cdFx0XHRbIGB3cC1pbWFnZS0ke2JhY2tncm91bmRJZH1gIF06IGJhY2tncm91bmRJZCAmJiAnaW1hZ2UnID09PSBiYWNrZ3JvdW5kVHlwZSxcblx0XHR9XG5cdCk7XG5cblx0Ly8gUmV0dXJuIGFuIGltYWdlIGVsZW1lbnQgZm9yIHVzZSBhcyB0aGUgYmFja2dyb3VuZC5cblx0Y29uc3QgYmFja2dyb3VuZEltYWdlID0gKFxuXHRcdDxpbWdcblx0XHRcdGNsYXNzTmFtZT17IGNsYXNzZXMgfVxuXHRcdFx0c3JjPXsgYmFja2dyb3VuZFVybCB9XG5cdFx0XHRhbHQ9eyBiYWNrZ3JvdW5kQWx0IH1cblx0XHQvPlxuXHQpXG5cblx0Ly8gUmV0dXJuIGEgdmlkZW8gZWxlbWVudCBmb3IgdXNlIGFzIHRoZSBiYWNrZ3JvdW5kLlxuXHRjb25zdCBiYWNrZ3JvdW5kVmlkZW8gPSAoXG5cdFx0PHZpZGVvXG5cdFx0XHRjbGFzc05hbWU9eyBjbGFzc2VzIH1cblx0XHRcdGF1dG9QbGF5PXsgYmFja2dyb3VuZEF1dG9wbGF5IH1cblx0XHRcdG11dGVkPXsgYmFja2dyb3VuZEF1dG9wbGF5IH1cblx0XHRcdGxvb3A9eyBiYWNrZ3JvdW5kQXV0b3BsYXkgfVxuXHRcdFx0c3JjPXsgYmFja2dyb3VuZFVybCB9XG5cdFx0Lz5cblx0KTtcblxuXHQvLyBSZXR1cm4gYW4gaWZyYW1lIGZvciB1c2UgYXMgdGhlIGJhY2tncm91bmQuXG5cdGNvbnN0IGJhY2tncm91bmRJZnJhbWUgPSAoKSA9PiB7XG5cdFx0Y29uc3QgYXV0aG9yaXR5ID0gZ2V0QXV0aG9yaXR5KCBiYWNrZ3JvdW5kVXJsICk7XG5cdFx0bGV0IHVybCA9ICcnO1xuXG5cdFx0aWYgKCBhdXRob3JpdHkgPT09ICd3d3cueW91dHViZS5jb20nIHx8IGF1dGhvcml0eSA9PT0gJ3lvdXR1LmJlJyApIHtcblx0XHRcdGNvbnN0IHZpZGVvSWQgPSAoIGF1dGhvcml0eSA9PT0gJ3lvdXR1LmJlJyApID9cblx0XHRcdFx0Z2V0UGF0aCggYmFja2dyb3VuZFVybCApIDpcblx0XHRcdFx0Z2V0UXVlcnlTdHJpbmcoIGJhY2tncm91bmRVcmwgKS5zcGxpdCggJz8nIClbMF0uc3Vic3RyKDIpO1xuXG5cdFx0XHQvLyBCdWlsZCB0aGUgdXJsLCBhZGRpbmcgYXV0b3BsYXkgcGFyYW1ldGVycyBpZiBhcHByb3ByaWF0ZS5cblx0XHRcdHVybCA9IGAvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvSWR9YDtcblx0XHRcdHVybCArPSAoIGJhY2tncm91bmRBdXRvcGxheSApID8gYD9jb250cm9scz0wJmF1dG9wbGF5PTEmbXV0ZT0xJm9yaWdpbj1odHRwOi8vYnUuZWR1JnZlcnNpb249MyZsb29wPTEmcGxheWxpc3Q9JHt2aWRlb0lkfWAgOiAnJztcblx0XHR9XG5cblx0XHRpZiAoIGF1dGhvcml0eSA9PT0gJ3ZpbWVvLmNvbScgKSB7XG5cdFx0XHRjb25zdCB2aWRlb0lkID0gZ2V0UGF0aCggYmFja2dyb3VuZFVybCApO1xuXG5cdFx0XHQvLyBCdWlsZCB0aGUgdXJsLCBhZGRpbmcgdGhlIGJhY2tncm91bmQgcGFyYW1ldGVyIGZvciBhdXRvcGxheWluZyBpZiBhcHByb3ByaWF0ZS5cblx0XHRcdHVybCA9IGAvL3BsYXllci52aW1lby5jb20vdmlkZW8vJHt2aWRlb0lkfWA7XG5cdFx0XHR1cmwgKz0gKCBiYWNrZ3JvdW5kQXV0b3BsYXkgKSA/ICc/YmFja2dyb3VuZD0xJyA6ICcnO1xuXHRcdH1cblxuXHRcdGlmICggYXV0aG9yaXR5ID09PSAnd3d3LmJ1LmVkdScgKSB7XG5cdFx0XHRjb25zdCB2aWRlb0lkID0gZ2V0UXVlcnlTdHJpbmcoIGJhY2tncm91bmRVcmwgKS5zcGxpdCggJz8nIClbMF0uc3Vic3RyKDIpO1xuXG5cdFx0XHQvLyBCdWlsZCB0aGUgVVJMLCBhZGRpbmcgdGhlIGF1dG9wbGF5IHBhcmFtZXRlciBpZiBhcHByb3ByaWF0ZS5cblx0XHRcdHVybCA9IGAvL3d3dy5idS5lZHUvYnVuaXZlcnNlL2ludGVyZmFjZS9lbWJlZC9lbWJlZC5odG1sP3Y9JHt2aWRlb0lkfSZqc2FwaT0xYDtcblx0XHRcdHVybCArPSAoIGJhY2tncm91bmRBdXRvcGxheSApID8gJyZhdXRvcGxheT10cnVlJmNvbnRyb2xzPTAnIDogJyc7XG5cdFx0fVxuXG5cdFx0aWYgKCB1cmwgIT09ICcnICkge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PGlmcmFtZVxuXHRcdFx0XHRcdHNyYz17IHVybCB9XG5cdFx0XHRcdFx0ZnJhbWVib3JkZXI9XCIwXCJcblx0XHRcdFx0XHRhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9eyBjbGFzc2VzIH1cblx0XHRcdFx0PjwvaWZyYW1lPlxuXHRcdFx0KVxuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgaW50ZXJmYWNlIGZvciB0aGUgYmFja2dyb3VuZCBjb21wb25lbnQuXG5cdHJldHVybiAoXG5cdFx0PEZyYWdtZW50PlxuXHRcdFx0eyBjb250cm9scyB9XG5cdFx0XHR7ICggJ2ltYWdlJyA9PT0gYmFja2dyb3VuZFR5cGUgKSAmJiAoIGJhY2tncm91bmRJbWFnZSApIH1cblx0XHRcdHsgKCAndmlkZW8nID09PSBiYWNrZ3JvdW5kVHlwZSApICYmICggYmFja2dyb3VuZFZpZGVvICkgfVxuXHRcdFx0eyAoICd1cmwnID09PSBiYWNrZ3JvdW5kVHlwZSApICYmIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1iYWNrZ3JvdW5kLXZpZGVvXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3cC1ibG9jay1iYWNrZ3JvdW5kLXZpZGVvLXJhdGlvXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIndwLWJsb2NrLWJhY2tncm91bmQtdmlkZW8taWZyYW1lXCI+XG5cdFx0XHRcdFx0XHRcdHsgYmFja2dyb3VuZElmcmFtZSgpIH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCkgfVxuXHRcdFx0eyBpc1VwbG9hZGluZyAmJiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwid3AtYmxvY2stYmFja2dyb3VuZC1pcy11cGxvYWRpbmdcIj5cblx0XHRcdFx0XHQ8aW1nIHNyYz17IGJhY2tncm91bmRVcmwgfSAvPlxuXHRcdFx0XHRcdDxTcGlubmVyIC8+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHQpIH1cblx0XHQ8L0ZyYWdtZW50PlxuXHQpO1xufVxuXG4vLyBFeHBvcnQgZGVwZW5kZW5jaWVzIGZvciBlYXN5IGltcG9ydGluZyBpbiBibG9ja3MuXG5leHBvcnQge1xuXHRCYWNrZ3JvdW5kQXR0cmlidXRlcyxcblx0QmFja2dyb3VuZE9wYWNpdHlUb0NsYXNzLFxufTtcblxuLy8gRXhwb3J0IHRoZSBiYWNrZ3JvdW5kIGludGVyZmFjZS5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdGF0ZSgge1xuXHRpc1VwbG9hZGluZzogZmFsc2UsXG59ICkoIEJhY2tncm91bmQgKTtcbiJdfQ==
