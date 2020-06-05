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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gridjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gridjs */ \"gridjs\");\n/* harmony import */ var gridjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gridjs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrapper */ \"./src/wrapper.js\");\n\r\n\r\n\r\n;(function ($, window, document, undefined) {\r\n  const pluginName = 'gridjs';\r\n\r\n  $.fn[pluginName] = function (userConfig, pluginOptions) {\r\n    return this.each(function () {\r\n      if (!$.data(this, 'plugin_' + pluginName)) {\r\n        let wrapper = new _wrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this, userConfig, pluginOptions);\r\n        wrapper._name = pluginName;\r\n        wrapper._defaults = _wrapper__WEBPACK_IMPORTED_MODULE_1__[\"default\"].defaults;\r\n        $.data(this, 'plugin_' + pluginName, wrapper);\r\n      }\r\n    });\r\n  };\r\n})(jQuery, window, document);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/wrapper.js":
/*!************************!*\
  !*** ./src/wrapper.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gridjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gridjs */ \"gridjs\");\n/* harmony import */ var gridjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gridjs__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass GridJsWrapper {\r\n  constructor(element, userConfig, pluginOptions) {\r\n    this.element = element;\r\n    this.options = $.extend({}, GridJsWrapper.defaults, pluginOptions);\r\n    this._defaults = null;\r\n    this._name = null;\r\n    this.init(userConfig);\r\n  }\r\n\r\n  init(userConfig) {\r\n    if (this.element.tagName === 'TABLE') {\r\n      let $target = this.options.replace ? $(this.element) : this.locateOrCreateWrapper();\r\n      new gridjs__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"](Object.assign(userConfig, {\r\n        from: this.element\r\n      })).render($target.empty().get(0));\r\n      if (!$target.is(':visible')) {\r\n        $target.show();\r\n      }\r\n    } else {\r\n      new gridjs__WEBPACK_IMPORTED_MODULE_0__[\"Grid\"](userConfig).render(this.element);\r\n    }\r\n    return this;\r\n  }\r\n\r\n  locateOrCreateWrapper() {\r\n    let $wrapper = null;\r\n    if (this.options.wrapperSelector) {\r\n      $wrapper = $(this.options.wrapperSelector);\r\n    }\r\n    if ($wrapper == null || $wrapper.length === 0) {\r\n      $wrapper = $('<div>');\r\n      $(this.element).after($wrapper);\r\n    }\r\n    return $wrapper\r\n  }\r\n}\r\n\r\nGridJsWrapper.defaults = {\r\n  replace : false,\r\n  wrapperSelector : null\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (GridJsWrapper);\n\n//# sourceURL=webpack:///./src/wrapper.js?");

/***/ }),

/***/ "gridjs":
/*!*************************!*\
  !*** external "gridjs" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = gridjs;\n\n//# sourceURL=webpack:///external_%22gridjs%22?");

/***/ })

/******/ });