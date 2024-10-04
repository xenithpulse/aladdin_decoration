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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/CartContext.js":
/*!***********************************!*\
  !*** ./components/CartContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: () => (/* binding */ CartContext),\n/* harmony export */   CartContextProvider: () => (/* binding */ CartContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction CartContextProvider({ children }) {\n    const ls =  false ? 0 : null;\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (cartProducts.length > 0) {\n            ls.setItem(\"cart\", JSON.stringify(cartProducts));\n        }\n    }, [\n        cartProducts,\n        ls\n    ]); // Added 'ls' as a dependency\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (ls && ls.getItem(\"cart\")) {\n            const storedCart = JSON.parse(ls.getItem(\"cart\"));\n            setCartProducts(storedCart || []); // Ensure it's set to an empty array if null\n        }\n    }, [\n        ls\n    ]); // Added 'ls' as a dependency\n    const addProduct = (productId, selectedOptions)=>{\n        if (productId && typeof productId === \"string\") {\n            setCartProducts((prev)=>{\n                const existingProductIndex = prev.findIndex((item)=>item.productId === productId && JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions));\n                if (existingProductIndex > -1) {\n                    return prev.map((item, index)=>index === existingProductIndex ? {\n                            ...item,\n                            quantity: (item.quantity || 1) + 1\n                        } : item);\n                }\n                return [\n                    ...prev,\n                    {\n                        productId,\n                        selectedOptions,\n                        quantity: 1\n                    }\n                ];\n            });\n        } else {\n            console.error(\"Invalid productId provided:\", productId);\n        }\n    };\n    const removeProduct = (productId, selectedOptions)=>{\n        if (productId && typeof productId === \"string\") {\n            setCartProducts((prev)=>{\n                const existingProductIndex = prev.findIndex((item)=>item.productId === productId && JSON.stringify(item.selectedOptions) === JSON.stringify(selectedOptions));\n                if (existingProductIndex > -1) {\n                    const currentItem = prev[existingProductIndex];\n                    if (currentItem.quantity > 1) {\n                        return prev.map((item, index)=>index === existingProductIndex ? {\n                                ...item,\n                                quantity: currentItem.quantity - 1\n                            } : item);\n                    } else {\n                        return prev.filter((item, index)=>index !== existingProductIndex);\n                    }\n                } else {\n                    console.error(\"Product not found in cart for productId:\", productId);\n                    return prev; // No changes if product not found\n                }\n            });\n        } else {\n            console.error(\"Invalid productId provided:\", productId);\n        }\n    };\n    const clearCart = ()=>{\n        console.log(\"Clearing cart\"); // Log action\n        setCartProducts([]); // Clear state\n        if (ls) {\n            ls.removeItem(\"cart\"); // Clear local storage\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartProducts,\n            setCartProducts,\n            addProduct,\n            removeProduct,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/mr-ebody/WBSITE/ecommerce-front/components/CartContext.js\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RzZCLFVBQVUsQ0FBQyxTQUFTLHNCQUFzQjtRQUMvQztJQUNGO0lBSUUscUJBQ0UsOERBQUNoQyxZQUFZaUMsUUFBUTtRQUFDQyxPQUFPO1lBQUU1QjtZQUFjQztZQUFpQlE7WUFBWVk7WUFBZUc7UUFBVTtrQkFDaEc1Qjs7Ozs7O0FBR1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtZnJvbnQvLi9jb21wb25lbnRzL0NhcnRDb250ZXh0LmpzPzgyM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcblxuZXhwb3J0IGZ1bmN0aW9uIENhcnRDb250ZXh0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IGxzID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdy5sb2NhbFN0b3JhZ2UgOiBudWxsO1xuICBjb25zdCBbY2FydFByb2R1Y3RzLCBzZXRDYXJ0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pO1xuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoY2FydFByb2R1Y3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIGxzLnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0UHJvZHVjdHMpKTtcbiAgICB9XG4gIH0sIFtjYXJ0UHJvZHVjdHMsIGxzXSk7IC8vIEFkZGVkICdscycgYXMgYSBkZXBlbmRlbmN5XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChscyAmJiBscy5nZXRJdGVtKCdjYXJ0JykpIHtcbiAgICAgIGNvbnN0IHN0b3JlZENhcnQgPSBKU09OLnBhcnNlKGxzLmdldEl0ZW0oJ2NhcnQnKSk7XG4gICAgICBzZXRDYXJ0UHJvZHVjdHMoc3RvcmVkQ2FydCB8fCBbXSk7IC8vIEVuc3VyZSBpdCdzIHNldCB0byBhbiBlbXB0eSBhcnJheSBpZiBudWxsXG4gICAgfVxuICB9LCBbbHNdKTsgLy8gQWRkZWQgJ2xzJyBhcyBhIGRlcGVuZGVuY3lcbiAgXG5cblxuY29uc3QgYWRkUHJvZHVjdCA9IChwcm9kdWN0SWQsIHNlbGVjdGVkT3B0aW9ucykgPT4ge1xuICBpZiAocHJvZHVjdElkICYmIHR5cGVvZiBwcm9kdWN0SWQgPT09IFwic3RyaW5nXCIpIHtcbiAgICBzZXRDYXJ0UHJvZHVjdHMocHJldiA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ1Byb2R1Y3RJbmRleCA9IHByZXYuZmluZEluZGV4KGl0ZW0gPT4gXG4gICAgICAgIGl0ZW0ucHJvZHVjdElkID09PSBwcm9kdWN0SWQgJiYgSlNPTi5zdHJpbmdpZnkoaXRlbS5zZWxlY3RlZE9wdGlvbnMpID09PSBKU09OLnN0cmluZ2lmeShzZWxlY3RlZE9wdGlvbnMpXG4gICAgICApO1xuXG4gICAgICBpZiAoZXhpc3RpbmdQcm9kdWN0SW5kZXggPiAtMSkge1xuICAgICAgICByZXR1cm4gcHJldi5tYXAoKGl0ZW0sIGluZGV4KSA9PlxuICAgICAgICAgIGluZGV4ID09PSBleGlzdGluZ1Byb2R1Y3RJbmRleFxuICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgLi4uaXRlbSxcbiAgICAgICAgICAgICAgICBxdWFudGl0eTogKGl0ZW0ucXVhbnRpdHkgfHwgMSkgKyAxXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogaXRlbVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gWy4uLnByZXYsIHsgcHJvZHVjdElkLCBzZWxlY3RlZE9wdGlvbnMsIHF1YW50aXR5OiAxIH1dO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIHByb2R1Y3RJZCBwcm92aWRlZDpcIiwgcHJvZHVjdElkKTtcbiAgfVxufTtcblxuY29uc3QgcmVtb3ZlUHJvZHVjdCA9IChwcm9kdWN0SWQsIHNlbGVjdGVkT3B0aW9ucykgPT4ge1xuICBpZiAocHJvZHVjdElkICYmIHR5cGVvZiBwcm9kdWN0SWQgPT09IFwic3RyaW5nXCIpIHtcbiAgICBzZXRDYXJ0UHJvZHVjdHMocHJldiA9PiB7XG4gICAgICBjb25zdCBleGlzdGluZ1Byb2R1Y3RJbmRleCA9IHByZXYuZmluZEluZGV4KGl0ZW0gPT4gXG4gICAgICAgIGl0ZW0ucHJvZHVjdElkID09PSBwcm9kdWN0SWQgJiYgSlNPTi5zdHJpbmdpZnkoaXRlbS5zZWxlY3RlZE9wdGlvbnMpID09PSBKU09OLnN0cmluZ2lmeShzZWxlY3RlZE9wdGlvbnMpXG4gICAgICApO1xuXG4gICAgICBpZiAoZXhpc3RpbmdQcm9kdWN0SW5kZXggPiAtMSkge1xuICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9IHByZXZbZXhpc3RpbmdQcm9kdWN0SW5kZXhdO1xuICAgICAgICBpZiAoY3VycmVudEl0ZW0ucXVhbnRpdHkgPiAxKSB7XG4gICAgICAgICAgcmV0dXJuIHByZXYubWFwKChpdGVtLCBpbmRleCkgPT5cbiAgICAgICAgICAgIGluZGV4ID09PSBleGlzdGluZ1Byb2R1Y3RJbmRleFxuICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICAgICAgICBxdWFudGl0eTogY3VycmVudEl0ZW0ucXVhbnRpdHkgLSAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IGl0ZW1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwcmV2LmZpbHRlcigoaXRlbSwgaW5kZXgpID0+IGluZGV4ICE9PSBleGlzdGluZ1Byb2R1Y3RJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQcm9kdWN0IG5vdCBmb3VuZCBpbiBjYXJ0IGZvciBwcm9kdWN0SWQ6XCIsIHByb2R1Y3RJZCk7XG4gICAgICAgIHJldHVybiBwcmV2OyAvLyBObyBjaGFuZ2VzIGlmIHByb2R1Y3Qgbm90IGZvdW5kXG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcIkludmFsaWQgcHJvZHVjdElkIHByb3ZpZGVkOlwiLCBwcm9kdWN0SWQpO1xuICB9XG59O1xuXG5jb25zdCBjbGVhckNhcnQgPSAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiQ2xlYXJpbmcgY2FydFwiKTsgLy8gTG9nIGFjdGlvblxuICBzZXRDYXJ0UHJvZHVjdHMoW10pOyAvLyBDbGVhciBzdGF0ZVxuICBpZiAobHMpIHtcbiAgICBscy5yZW1vdmVJdGVtKCdjYXJ0Jyk7IC8vIENsZWFyIGxvY2FsIHN0b3JhZ2VcbiAgfVxufTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY2FydFByb2R1Y3RzLCBzZXRDYXJ0UHJvZHVjdHMsIGFkZFByb2R1Y3QsIHJlbW92ZVByb2R1Y3QsIGNsZWFyQ2FydCB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkNhcnRDb250ZXh0IiwiQ2FydENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwibHMiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJjYXJ0UHJvZHVjdHMiLCJzZXRDYXJ0UHJvZHVjdHMiLCJsZW5ndGgiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldEl0ZW0iLCJzdG9yZWRDYXJ0IiwicGFyc2UiLCJhZGRQcm9kdWN0IiwicHJvZHVjdElkIiwic2VsZWN0ZWRPcHRpb25zIiwicHJldiIsImV4aXN0aW5nUHJvZHVjdEluZGV4IiwiZmluZEluZGV4IiwiaXRlbSIsIm1hcCIsImluZGV4IiwicXVhbnRpdHkiLCJjb25zb2xlIiwiZXJyb3IiLCJyZW1vdmVQcm9kdWN0IiwiY3VycmVudEl0ZW0iLCJmaWx0ZXIiLCJjbGVhckNhcnQiLCJsb2ciLCJyZW1vdmVJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CartContext.js\n");

/***/ }),

/***/ "./components/Loader.js":
/*!******************************!*\
  !*** ./components/Loader.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Loader)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SpinnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n    displayName: \"Loader__SpinnerContainer\",\n    componentId: \"sc-f5c2d5-0\"\n})([\n    \"display:flex;align-items:center;justify-content:center;height:100vh;\"\n]);\nconst Spinner = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n    displayName: \"Loader__Spinner\",\n    componentId: \"sc-f5c2d5-1\"\n})([\n    \"border:8px solid rgba(255,255,255,0.2);border-radius:100%;border-top:8px solid red;width:90px;height:90px;animation:spin 0.3s linear infinite;@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}\"\n]);\nfunction Loader() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpinnerContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Spinner, {}, void 0, false, {\n            fileName: \"/home/mr-ebody/WBSITE/ecommerce-front/components/Loader.js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/mr-ebody/WBSITE/ecommerce-front/components/Loader.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBdUM7QUFFdkMsTUFBTUMsbUJBQW1CRCw0REFBVTs7Ozs7O0FBT25DLE1BQU1HLFVBQVVILDREQUFVOzs7Ozs7QUFrQlgsU0FBU0k7SUFDdEIscUJBQ0UsOERBQUNIO2tCQUNDLDRFQUFDRTs7Ozs7Ozs7OztBQUdQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWZyb250Ly4vY29tcG9uZW50cy9Mb2FkZXIuanM/YTE1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBTcGlubmVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7IC8qIEFkanVzdCBiYXNlZCBvbiB3aGVyZSB5b3Ugd2FudCB0byBwb3NpdGlvbiB0aGUgbG9hZGVyICovXG5gO1xuXG5jb25zdCBTcGlubmVyID0gc3R5bGVkLmRpdmBcbiAgYm9yZGVyOiA4cHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXItdG9wOiA4cHggc29saWQgcmVkOyAvKiBDdXN0b21pemUgdGhlIGNvbG9yIGhlcmUgKi9cbiAgd2lkdGg6IDkwcHg7IC8qIEFkanVzdCBzaXplIGFzIG5lZWRlZCAqL1xuICBoZWlnaHQ6IDkwcHg7IC8qIEFkanVzdCBzaXplIGFzIG5lZWRlZCAqL1xuICBhbmltYXRpb246IHNwaW4gMC4zcyBsaW5lYXIgaW5maW5pdGU7XG5cbiAgQGtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxTcGlubmVyQ29udGFpbmVyPlxuICAgICAgPFNwaW5uZXIgLz5cbiAgICA8L1NwaW5uZXJDb250YWluZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVkIiwiU3Bpbm5lckNvbnRhaW5lciIsImRpdiIsIlNwaW5uZXIiLCJMb2FkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Loader.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_CartContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/CartContext */ \"./components/CartContext.js\");\n/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Loader */ \"./components/Loader.js\");\n// pages/_app.js\n\n\n\n\n\n // Import your Loader component\nconst GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.createGlobalStyle)([\n    \"body{background-color:#eee;padding:0;margin:0;font-family:'Montserrat',sans-serif;}\"\n]);\nfunction App({ Component, pageProps }) {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleStart = ()=>setLoading(true);\n        const handleComplete = ()=>setLoading(false);\n        router.events.on(\"routeChangeStart\", handleStart);\n        router.events.on(\"routeChangeComplete\", handleComplete);\n        router.events.on(\"routeChangeError\", handleComplete);\n        return ()=>{\n            router.events.off(\"routeChangeStart\", handleStart);\n            router.events.off(\"routeChangeComplete\", handleComplete);\n            router.events.off(\"routeChangeError\", handleComplete);\n        };\n    }, [\n        router.events\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {\n                fileName: \"/home/mr-ebody/WBSITE/ecommerce-front/pages/_app.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mr-ebody/WBSITE/ecommerce-front/pages/_app.js\",\n                lineNumber: 39,\n                columnNumber: 19\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CartContext__WEBPACK_IMPORTED_MODULE_4__.CartContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/home/mr-ebody/WBSITE/ecommerce-front/pages/_app.js\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/mr-ebody/WBSITE/ecommerce-front/pages/_app.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0JBQWdCOztBQUM0QjtBQUNKO0FBQ2M7QUFDUztBQUN0QixDQUFDLCtCQUErQjtBQUV6RSxNQUFNTSxlQUFlSCxvRUFBaUJBOzs7QUFTdkIsU0FBU0ksSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxNQUFNQyxTQUFTUixzREFBU0E7SUFDeEIsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNSLE1BQU1hLGNBQWMsSUFBTUQsV0FBVztRQUNyQyxNQUFNRSxpQkFBaUIsSUFBTUYsV0FBVztRQUV4Q0YsT0FBT0ssTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CSDtRQUNyQ0gsT0FBT0ssTUFBTSxDQUFDQyxFQUFFLENBQUMsdUJBQXVCRjtRQUN4Q0osT0FBT0ssTUFBTSxDQUFDQyxFQUFFLENBQUMsb0JBQW9CRjtRQUVyQyxPQUFPO1lBQ0xKLE9BQU9LLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLG9CQUFvQko7WUFDdENILE9BQU9LLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLHVCQUF1Qkg7WUFDekNKLE9BQU9LLE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLG9CQUFvQkg7UUFDeEM7SUFDRixHQUFHO1FBQUNKLE9BQU9LLE1BQU07S0FBQztJQUVsQixxQkFDRTs7MEJBQ0UsOERBQUNUOzs7OztZQUNBSyx5QkFBVyw4REFBQ04sMERBQU1BOzs7OztZQUFJOzBCQUN2Qiw4REFBQ0Qsd0VBQW1CQTswQkFDbEIsNEVBQUNJO29CQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7QUFJaEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY29tbWVyY2UtZnJvbnQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvX2FwcC5qc1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ2FydENvbnRleHRQcm92aWRlciB9IGZyb20gJ0AvY29tcG9uZW50cy9DYXJ0Q29udGV4dCc7XG5pbXBvcnQgTG9hZGVyIGZyb20gJ0AvY29tcG9uZW50cy9Mb2FkZXInOyAvLyBJbXBvcnQgeW91ciBMb2FkZXIgY29tcG9uZW50XG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7IC8vIE9ubHkgaW5jbHVkZSBNb250c2VycmF0IHNpbmNlIGl0J3Mgbm93IGluIF9kb2N1bWVudC5qc1xuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHNldExvYWRpbmcodHJ1ZSk7XG4gICAgY29uc3QgaGFuZGxlQ29tcGxldGUgPSAoKSA9PiBzZXRMb2FkaW5nKGZhbHNlKTtcblxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVTdGFydCk7XG4gICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgaGFuZGxlQ29tcGxldGUpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZVN0YXJ0JywgaGFuZGxlU3RhcnQpO1xuICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVDb21wbGV0ZSk7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VFcnJvcicsIGhhbmRsZUNvbXBsZXRlKTtcbiAgICB9O1xuICB9LCBbcm91dGVyLmV2ZW50c10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxHbG9iYWxTdHlsZXMgLz5cbiAgICAgIHtsb2FkaW5nICYmIDxMb2FkZXIgLz59IHsvKiBTaG93IGxvYWRlciB3aGVuIGxvYWRpbmcgKi99XG4gICAgICA8Q2FydENvbnRleHRQcm92aWRlcj5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9DYXJ0Q29udGV4dFByb3ZpZGVyPlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiTG9hZGVyIiwiR2xvYmFsU3R5bGVzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJoYW5kbGVTdGFydCIsImhhbmRsZUNvbXBsZXRlIiwiZXZlbnRzIiwib24iLCJvZmYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();