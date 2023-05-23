webpackHotUpdate_N_E("pages/[authorId]",{

/***/ "./pages/[authorId].js":
/*!*****************************!*\
  !*** ./pages/[authorId].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Author; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\ASUS\\OneDrive\\Documents\\quote-generator\\pages\\[authorId].js",
    _s = $RefreshSig$();



function Author() {
  _s();

  var _this = this;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var authorId = router.query.authorId;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      quotes = _useState[0],
      setQuotes = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (authorId) {
      fetch("https://quote-garden.onrender.com/api/v3/quotes?author=".concat(authorId)).then(function (response) {
        return response.json();
      }).then(function (data) {
        return setQuotes(data.data);
      });
    }
  }, [authorId]);

  if (quotes.length === 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    children: quotes.map(function (quote) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
        children: [quote.quoteText, " - ", quote.quoteGenre]
      }, quote._id, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_s(Author, "e6gLEixTDZEGHGqQWscVHKQtdE0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Author;

var _c;

$RefreshReg$(_c, "Author");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2F1dGhvcklkXS5qcyJdLCJuYW1lcyI6WyJBdXRob3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhdXRob3JJZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJxdW90ZXMiLCJzZXRRdW90ZXMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibGVuZ3RoIiwibWFwIiwicXVvdGUiLCJxdW90ZVRleHQiLCJxdW90ZUdlbnJlIiwiX2lkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQy9CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEK0IsTUFFdkJDLFFBRnVCLEdBRVZGLE1BQU0sQ0FBQ0csS0FGRyxDQUV2QkQsUUFGdUI7O0FBQUEsa0JBR0hFLHNEQUFRLENBQUMsRUFBRCxDQUhMO0FBQUEsTUFHeEJDLE1BSHdCO0FBQUEsTUFHaEJDLFNBSGdCOztBQUsvQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUwsUUFBSixFQUFjO0FBQ1pNLFdBQUssa0VBQ3VETixRQUR2RCxFQUFMLENBR0dPLElBSEgsQ0FHUSxVQUFDQyxRQUFEO0FBQUEsZUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxPQUhSLEVBSUdGLElBSkgsQ0FJUSxVQUFDRyxJQUFEO0FBQUEsZUFBVU4sU0FBUyxDQUFDTSxJQUFJLENBQUNBLElBQU4sQ0FBbkI7QUFBQSxPQUpSO0FBS0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ1YsUUFBRCxDQVJNLENBQVQ7O0FBVUEsTUFBSUcsTUFBTSxDQUFDUSxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLGNBQ0dSLE1BQU0sQ0FBQ1MsR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSwwQkFDVjtBQUFBLG1CQUNHQSxLQUFLLENBQUNDLFNBRFQsU0FDdUJELEtBQUssQ0FBQ0UsVUFEN0I7QUFBQSxTQUFTRixLQUFLLENBQUNHLEdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURVO0FBQUEsS0FBWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztHQTVCdUJuQixNO1VBQ1BFLHFEOzs7S0FET0YsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bYXV0aG9ySWRdLmJkYmNjNTZlMTg1NzdiZGI5NWMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhvcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGF1dGhvcklkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3QgW3F1b3Rlcywgc2V0UXVvdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChhdXRob3JJZCkge1xyXG4gICAgICBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9xdW90ZS1nYXJkZW4ub25yZW5kZXIuY29tL2FwaS92My9xdW90ZXM/YXV0aG9yPSR7YXV0aG9ySWR9YFxyXG4gICAgICApXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHNldFF1b3RlcyhkYXRhLmRhdGEpKTtcclxuICAgIH1cclxuICB9LCBbYXV0aG9ySWRdKTtcclxuXHJcbiAgaWYgKHF1b3Rlcy5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHVsPlxyXG4gICAgICB7cXVvdGVzLm1hcCgocXVvdGUpID0+IChcclxuICAgICAgICA8bGkga2V5PXtxdW90ZS5faWR9PlxyXG4gICAgICAgICAge3F1b3RlLnF1b3RlVGV4dH0gLSB7cXVvdGUucXVvdGVHZW5yZX1cclxuICAgICAgICA8L2xpPlxyXG4gICAgICApKX1cclxuICAgIDwvdWw+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9