webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\ASUS\\OneDrive\\Documents\\quote-generator\\pages\\index.js",
    _s = $RefreshSig$();


function HomePage() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      quote = _useState[0],
      setQuote = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random").then(function (response) {
      return response.json();
    }).then(function (data) {
      return setQuote(data.data[0]);
    });
  }, []);

  if (!quote) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: quote.quoteText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["- ", quote.quoteAuthor]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Genre: ", quote.quoteGenre]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_s(HomePage, "pHUr4/1SkZ+pqek8O0wcMu7nkro=");

_c = HomePage;

var _c;

$RefreshReg$(_c, "HomePage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsInF1b3RlIiwic2V0UXVvdGUiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwicXVvdGVUZXh0IiwicXVvdGVBdXRob3IiLCJxdW90ZUdlbnJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBQyxJQUFELENBREQ7QUFBQSxNQUMxQkMsS0FEMEI7QUFBQSxNQUNuQkMsUUFEbUI7O0FBR2pDQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxDQUFDLHdEQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQ7QUFBQSxhQUFVTixRQUFRLENBQUNNLElBQUksQ0FBQ0EsSUFBTCxDQUFVLENBQVYsQ0FBRCxDQUFsQjtBQUFBLEtBRlI7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUOztBQU1BLE1BQUksQ0FBQ1AsS0FBTCxFQUFZO0FBQ1Ysd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0EsS0FBSyxDQUFDUTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsdUJBQU1SLEtBQUssQ0FBQ1MsV0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsNEJBQVdULEtBQUssQ0FBQ1UsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7R0FwQnVCWixROztLQUFBQSxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVhMjVjODYyMjAyNjRkMGRjNmM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW3F1b3RlLCBzZXRRdW90ZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiaHR0cHM6Ly9xdW90ZS1nYXJkZW4ub25yZW5kZXIuY29tL2FwaS92My9xdW90ZXMvcmFuZG9tXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRRdW90ZShkYXRhLmRhdGFbMF0pKTtcbiAgfSwgW10pO1xuXG4gIGlmICghcXVvdGUpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPntxdW90ZS5xdW90ZVRleHR9PC9oMj5cbiAgICAgIDxwPi0ge3F1b3RlLnF1b3RlQXV0aG9yfTwvcD5cbiAgICAgIDxwPkdlbnJlOiB7cXVvdGUucXVvdGVHZW5yZX08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9