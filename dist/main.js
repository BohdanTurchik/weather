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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weatherKyiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weatherKyiv */ \"./src/modules/weatherKyiv.js\");\n/* harmony import */ var _modules_weatherLondon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/weatherLondon */ \"./src/modules/weatherLondon.js\");\n/* harmony import */ var _modules_weatherNewYourk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/weatherNewYourk */ \"./src/modules/weatherNewYourk.js\");\n// let opts = {\r\n//     lines: 13,\r\n//     length: 28,\r\n//     width: 14,\r\n//     radius: 42,\r\n//     scale: 1,\r\n//     corners: 1,\r\n//     color: '#FFF',\r\n//     opacity: 0.25,\r\n//     rotate: 0,\r\n//     direction: 1,\r\n//     speed: 1,\r\n//     trail: 60,\r\n//     fps: 20,\r\n//     zIndex: 2e9,\r\n//     className: 'spinner',\r\n//     top: '50%',\r\n//     left: '50%',\r\n//     shadow: false,\r\n//     hwaccel: false,\r\n//     position: 'absolute',\r\n//    },\r\n//    target = document.getElementById('spinner'),\r\n//     spinner = new Spinner(opts).spin(target);\r\n\r\n\r\n\r\n\r\n(0,_modules_weatherKyiv__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_weatherLondon__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_weatherNewYourk__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://wheather/./src/index.js?");

/***/ }),

/***/ "./src/modules/weatherKyiv.js":
/*!************************************!*\
  !*** ./src/modules/weatherKyiv.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet weatherKyiv = function(){\r\n    const spinner =document.querySelector(\".spinner\");\r\n    fetch(\"http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f\")\r\n    .then(response=>  response.json())\r\n    .then(function(data){\r\n        console.log(data);\r\n        document.querySelector(\".city_name\").textContent = data.name;\r\n        document.querySelector(\".count\").innerHTML = Math.round(data.main.temp-273) + '&deg;';\r\n        document.querySelector(\".disclaimer\").textContent = data.weather[0]['description'];\r\n        document.querySelector(\".features\").innerHTML='<img src=\"https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png\">';\r\n        document.querySelector(\".li\").innerHTML= ` Від${Math.round(data.main.temp_min-273)}&deg; до ${Math.round(data.main.temp_max-273)}&deg;`;\r\n    })\r\n    .finally(()=>spinner.remove()) \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherKyiv);\n\n//# sourceURL=webpack://wheather/./src/modules/weatherKyiv.js?");

/***/ }),

/***/ "./src/modules/weatherLondon.js":
/*!**************************************!*\
  !*** ./src/modules/weatherLondon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet weatherLondon =()=>{\r\n    const spinner =document.querySelector(\".spinner\");\r\n    fetch(\"http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f\")\r\n    .then(response=>  response.json())\r\n    .then(function(data){\r\n        console.log(data);\r\n        console.log(data.weather[0][\"description\"]);\r\n        document.querySelector(\".city_name1\").textContent = data.name;\r\n        document.querySelector(\".count1\").innerHTML = Math.round(data.main.temp-273) + '&deg;';\r\n        document.querySelector(\".disclaimer1\").textContent= data.weather[0][\"description\"];\r\n        document.querySelector(\".features1\").innerHTML='<img src=\"https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png\">';\r\n        document.querySelector(\".li1\").innerHTML= ` Від${Math.round(data.main.temp_min-273)}&deg; до ${Math.round(data.main.temp_max-273)}&deg;`;\r\n    })\r\n    .finally(()=>spinner.remove())\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherLondon);\n\n//# sourceURL=webpack://wheather/./src/modules/weatherLondon.js?");

/***/ }),

/***/ "./src/modules/weatherNewYourk.js":
/*!****************************************!*\
  !*** ./src/modules/weatherNewYourk.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet weatherNewYourk =()=>{\r\n    const spinner =document.querySelector(\".spinner\");\r\n    fetch(\"http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f\")\r\n    .then(response=>  response.json())\r\n    .then(function(data){\r\n        console.log(data);\r\n        console.log(data.weather[0][\"description\"]);\r\n        document.querySelector(\".city_name2\").textContent = data.name;\r\n        document.querySelector(\".count2\").innerHTML = Math.round(data.main.temp-273) + '&deg;';\r\n        document.querySelector(\".disclaimer2\").textContent= data.weather[0][\"description\"];\r\n        document.querySelector(\".features2\").innerHTML='<img src=\"https://openweathermap.org/img/wn/' + data.weather[0]['icon'] + '@2x.png\">';\r\n        document.querySelector(\".li2\").innerHTML= ` Від${Math.round(data.main.temp_min-273)}&deg; до ${Math.round(data.main.temp_max-273)}&deg;`;\r\n        \r\n    })\r\n    .finally(()=>spinner.remove())\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherNewYourk);\n\n//# sourceURL=webpack://wheather/./src/modules/weatherNewYourk.js?");

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