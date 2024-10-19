"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./lib/fpixel.js":
/*!***********************!*\
  !*** ./lib/fpixel.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FB_PIXEL_ID: () => (/* binding */ FB_PIXEL_ID),\n/* harmony export */   event: () => (/* binding */ event),\n/* harmony export */   pageview: () => (/* binding */ pageview)\n/* harmony export */ });\nconst FB_PIXEL_ID = process.env.PIXEL_ID;\nconst pageview = ()=>{\n    window.fbq(\"track\", \"PageView\");\n};\n// https://developers.facebook.com/docs/facebook-pixel/advanced/\nconst event = (name, options = {})=>{\n    window.fbq(\"track\", name, options);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZnBpeGVsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLE1BQU1BLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDO0FBRXpDLE1BQU1DLFdBQVc7SUFDdEJDLE9BQU9DLEdBQUcsQ0FBQyxTQUFTO0FBQ3RCLEVBQUU7QUFFRixnRUFBZ0U7QUFDekQsTUFBTUMsUUFBUSxDQUFDQyxNQUFNQyxVQUFVLENBQUMsQ0FBQztJQUN0Q0osT0FBT0MsR0FBRyxDQUFDLFNBQVNFLE1BQU1DO0FBQzVCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtZnJvbnQvLi9saWIvZnBpeGVsLmpzPzc3NjQiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEZCX1BJWEVMX0lEID0gcHJvY2Vzcy5lbnYuUElYRUxfSUQ7XG5cbmV4cG9ydCBjb25zdCBwYWdldmlldyA9ICgpID0+IHtcbiAgd2luZG93LmZicShcInRyYWNrXCIsIFwiUGFnZVZpZXdcIik7XG59O1xuXG4vLyBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvZmFjZWJvb2stcGl4ZWwvYWR2YW5jZWQvXG5leHBvcnQgY29uc3QgZXZlbnQgPSAobmFtZSwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gIHdpbmRvdy5mYnEoXCJ0cmFja1wiLCBuYW1lLCBvcHRpb25zKTtcbn07Il0sIm5hbWVzIjpbIkZCX1BJWEVMX0lEIiwicHJvY2VzcyIsImVudiIsIlBJWEVMX0lEIiwicGFnZXZpZXciLCJ3aW5kb3ciLCJmYnEiLCJldmVudCIsIm5hbWUiLCJvcHRpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/fpixel.js\n");

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_fpixel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/fpixel */ \"./lib/fpixel.js\");\n// pages/_document.js\n\n\n\nfunction Document() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"noscript\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            height: \"1\",\n                            width: \"1\",\n                            style: {\n                                display: \"none\"\n                            },\n                            src: `https://www.facebook.com/tr?id=${_lib_fpixel__WEBPACK_IMPORTED_MODULE_2__.FB_PIXEL_ID}&ev=PageView&noscript=1`\n                        }, void 0, false, {\n                            fileName: \"/home/joseph_dux/aladdin_decoration-main/pages/_document.js\",\n                            lineNumber: 10,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/joseph_dux/aladdin_decoration-main/pages/_document.js\",\n                        lineNumber: 9,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap\"\n                    }, void 0, false, {\n                        fileName: \"/home/joseph_dux/aladdin_decoration-main/pages/_document.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joseph_dux/aladdin_decoration-main/pages/_document.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {\n                        fileName: \"/home/joseph_dux/aladdin_decoration-main/pages/_document.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {\n                        fileName: \"/home/joseph_dux/aladdin_decoration-main/pages/_document.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/joseph_dux/aladdin_decoration-main/pages/_document.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/joseph_dux/aladdin_decoration-main/pages/_document.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEscUJBQXFCOztBQUN3QztBQUNuQjtBQUUzQixTQUFTSztJQUN0QixxQkFDRSw4REFBQ0wsK0NBQUlBO1FBQUNNLE1BQUs7OzBCQUNULDhEQUFDTCwrQ0FBSUE7O2tDQUNMLDhEQUFDTTtrQ0FDRyw0RUFBQ0M7NEJBQ0NDLFFBQU87NEJBQ1BDLE9BQU07NEJBQ05DLE9BQU87Z0NBQUVDLFNBQVM7NEJBQU87NEJBQ3pCQyxLQUFLLENBQUMsK0JBQStCLEVBQUVULG9EQUFXQSxDQUFDLHVCQUF1QixDQUFDOzs7Ozs7Ozs7OztrQ0FHL0UsOERBQUNVO3dCQUNDQyxLQUFJO3dCQUNKQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNDOztrQ0FDQyw4REFBQ2YsK0NBQUlBOzs7OztrQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS1mcm9udC8uL3BhZ2VzL19kb2N1bWVudC5qcz81MzhiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHBhZ2VzL19kb2N1bWVudC5qc1xuaW1wb3J0IHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xuaW1wb3J0IHsgRkJfUElYRUxfSUQgfSBmcm9tICdAL2xpYi9mcGl4ZWwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50KCkge1xuICByZXR1cm4gKFxuICAgIDxIdG1sIGxhbmc9XCJlblwiPlxuICAgICAgPEhlYWQ+XG4gICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgaGVpZ2h0PVwiMVwiXG4gICAgICAgICAgICB3aWR0aD1cIjFcIlxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX1cbiAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS90cj9pZD0ke0ZCX1BJWEVMX0lEfSZldj1QYWdlVmlldyZub3NjcmlwdD0xYH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQ6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8TWFpbiAvPlxuICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgPC9ib2R5PiAgICAgXG4gICAgPC9IdG1sPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkh0bWwiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJGQl9QSVhFTF9JRCIsIkRvY3VtZW50IiwibGFuZyIsIm5vc2NyaXB0IiwiaW1nIiwiaGVpZ2h0Iiwid2lkdGgiLCJzdHlsZSIsImRpc3BsYXkiLCJzcmMiLCJsaW5rIiwicmVsIiwiaHJlZiIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./pages/_document.js")));
module.exports = __webpack_exports__;

})();