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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/dropdown */ "./src/js/modules/dropdown.js");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ "./src/js/modules/header.js");


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_dropdown__WEBPACK_IMPORTED_MODULE_0__["default"])('.header__dropdown', '.dropdown__menu', 'dropdown__menu-active', 'header__dropdown-active');
  Object(_modules_header__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

/***/ }),

/***/ "./src/js/modules/dropdown.js":
/*!************************************!*\
  !*** ./src/js/modules/dropdown.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const dropdown = function (trigger, menuSelector, activeClass, aniClass) {
  const triggers = document.querySelectorAll(trigger),
    menu = document.querySelectorAll(menuSelector),
    header = document.querySelector('.header');
  function closeMenu() {
    menu.forEach(item => item.classList.remove(activeClass));
    triggers.forEach(item => item.classList.remove(aniClass));
  }
  triggers.forEach(item => {
    item.addEventListener('mouseenter', event => {
      if (item.nextElementSibling.classList.contains(menuSelector.slice(1))) {
        closeMenu();
        item.nextElementSibling.classList.add(activeClass);
        event.target.classList.add(aniClass);
      }
    });
    item.addEventListener('mouseleave', event => {
      triggers.forEach(item => item.classList.remove(aniClass));
      event.target.classList.add(aniClass);
    });
  });
  header.addEventListener('mouseleave', () => {
    closeMenu();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (dropdown);

/***/ }),

/***/ "./src/js/modules/header.js":
/*!**********************************!*\
  !*** ./src/js/modules/header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const header = function () {
  const header = document.querySelector('.header'),
    hero = document.querySelector('.hero'),
    heroHeight = hero.style.height;
  document.addEventListener('scroll', () => {
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > '700') {
      header.style.backgroundColor = '#fff';
      header.querySelector('.header__container').style.backgroundColor = '#fff';
      header.style.boxShadow = '0px 16px 20px rgba(0, 0, 0, 0.03)';
      document.querySelectorAll('.dropdown__menu').forEach(item => item.style.backgroundColor = '#fff');
    } else {
      header.style.backgroundColor = '';
      header.querySelector('.header__container').style.backgroundColor = '';
      header.style.boxShadow = '';
      document.querySelectorAll('.dropdown__menu').forEach(item => item.style.backgroundColor = '');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (header);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map