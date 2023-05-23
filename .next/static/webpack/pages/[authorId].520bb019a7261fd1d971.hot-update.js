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
        children: [quote.quoteText, " - ", quote.quoteAuthor]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2F1dGhvcklkXS5qcyJdLCJuYW1lcyI6WyJBdXRob3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhdXRob3JJZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJxdW90ZXMiLCJzZXRRdW90ZXMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibGVuZ3RoIiwibWFwIiwicXVvdGUiLCJxdW90ZVRleHQiLCJxdW90ZUF1dGhvciIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUMvQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRCtCLE1BRXZCQyxRQUZ1QixHQUVWRixNQUFNLENBQUNHLEtBRkcsQ0FFdkJELFFBRnVCOztBQUFBLGtCQUdIRSxzREFBUSxDQUFDLEVBQUQsQ0FITDtBQUFBLE1BR3hCQyxNQUh3QjtBQUFBLE1BR2hCQyxTQUhnQjs7QUFLL0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUlMLFFBQUosRUFBYztBQUNaTSxXQUFLLGtFQUN1RE4sUUFEdkQsRUFBTCxDQUdHTyxJQUhILENBR1EsVUFBQ0MsUUFBRDtBQUFBLGVBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsT0FIUixFQUlHRixJQUpILENBSVEsVUFBQ0csSUFBRDtBQUFBLGVBQVVOLFNBQVMsQ0FBQ00sSUFBSSxDQUFDQSxJQUFOLENBQW5CO0FBQUEsT0FKUjtBQUtEO0FBQ0YsR0FSUSxFQVFOLENBQUNWLFFBQUQsQ0FSTSxDQUFUOztBQVVBLE1BQUlHLE1BQU0sQ0FBQ1EsTUFBUCxLQUFrQixDQUF0QixFQUF5QjtBQUN2Qix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSxjQUNHUixNQUFNLENBQUNTLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsMEJBQ1Y7QUFBQSxtQkFDR0EsS0FBSyxDQUFDQyxTQURULFNBQ3VCRCxLQUFLLENBQUNFLFdBRDdCO0FBQUEsU0FBU0YsS0FBSyxDQUFDRyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVTtBQUFBLEtBQVg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7R0E1QnVCbkIsTTtVQUNQRSxxRDs7O0tBRE9GLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2F1dGhvcklkXS41MjBiYjAxOWE3MjYxZmQxZDk3MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3IoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBhdXRob3JJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtxdW90ZXMsIHNldFF1b3Rlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aG9ySWQpIHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vcXVvdGUtZ2FyZGVuLm9ucmVuZGVyLmNvbS9hcGkvdjMvcXVvdGVzP2F1dGhvcj0ke2F1dGhvcklkfWBcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRRdW90ZXMoZGF0YS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhvcklkXSk7XHJcblxyXG4gIGlmIChxdW90ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDx1bD5cclxuICAgICAge3F1b3Rlcy5tYXAoKHF1b3RlKSA9PiAoXHJcbiAgICAgICAgPGxpIGtleT17cXVvdGUuX2lkfT5cclxuICAgICAgICAgIHtxdW90ZS5xdW90ZVRleHR9IC0ge3F1b3RlLnF1b3RlQXV0aG9yfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=