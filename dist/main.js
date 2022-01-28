/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weatherSity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherSity */ \"./src/modules/weatherSity.js\");\n\r\n\r\n(0,_modules_weatherSity__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://wheather/./src/index.js?");

/***/ }),

/***/ "./src/modules/modulRender.js":
/*!************************************!*\
  !*** ./src/modules/modulRender.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction modulRender (data){\r\n    let block = document.querySelector(\".content\");\r\n    block.insertAdjacentHTML(\"beforeend\", `<div class=\"block_weather\">\r\n    <p class=\"city_name1\">${data.name}</p>\r\n    <hr>\r\n     <p class=\"count1\">${(data.main.temp - 273.15).toFixed(1)}&deg C\r\n    </p>\r\n     <p class=\"disclaimer1\">${data.weather[0].main\r\n    }</p>\r\n    <hr>\r\n    <p class=\"features1\">\r\n    <img src=\"https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png\">\r\n    <li class=\"li1\">Від ${Math.round(data.main.temp_min-273)}&deg; до ${Math.round(data.main.temp_max-273)}&deg;</li>\r\n    </p>\r\n\r\n</div>`)\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modulRender);\n\n//# sourceURL=webpack://wheather/./src/modules/modulRender.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst weather = (city) => {\r\n    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8f2d10659d69f6a82084691de1384df0`)\r\n        .then(response => response.json())\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);\r\n\n\n//# sourceURL=webpack://wheather/./src/modules/weather.js?");

/***/ }),

/***/ "./src/modules/weatherSity.js":
/*!************************************!*\
  !*** ./src/modules/weatherSity.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modulRender__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulRender */ \"./src/modules/modulRender.js\");\n\r\n\r\nconst weatherSity = () => {\r\n    const spinner =document.querySelector(\".spinner\");\r\n    let arr = [\"Kyiv\", \"New York\", \"London\"];\r\n    arr.forEach(index => {\r\n        console.log(index)\r\n        ;(0,_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(index)\r\n        .then(json => {\r\n            ;(0,_modulRender__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(json)\r\n            spinner.remove()\r\n        })\r\n        \r\n    })\r\n\r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherSity);\n\n//# sourceURL=webpack://wheather/./src/modules/weatherSity.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;