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
/* harmony import */ var _styles_Author_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Author.module.css */ "./styles/Author.module.css");
/* harmony import */ var _styles_Author_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Author_module_css__WEBPACK_IMPORTED_MODULE_3__);


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
      lineNumber: 21,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: _styles_Author_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
      children: quotes[0].quoteAuthor
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: quotes.map(function (quote) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: [quote.quoteText, " - ", quote.quoteGenre]
        }, quote._id, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2F1dGhvcklkXS5qcyJdLCJuYW1lcyI6WyJBdXRob3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhdXRob3JJZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJxdW90ZXMiLCJzZXRRdW90ZXMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibGVuZ3RoIiwiY2xhc3NlcyIsInRpdGxlIiwicXVvdGVBdXRob3IiLCJtYXAiLCJxdW90ZSIsInF1b3RlVGV4dCIsInF1b3RlR2VucmUiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQy9CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEK0IsTUFFdkJDLFFBRnVCLEdBRVZGLE1BQU0sQ0FBQ0csS0FGRyxDQUV2QkQsUUFGdUI7O0FBQUEsa0JBR0hFLHNEQUFRLENBQUMsRUFBRCxDQUhMO0FBQUEsTUFHeEJDLE1BSHdCO0FBQUEsTUFHaEJDLFNBSGdCOztBQUsvQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUwsUUFBSixFQUFjO0FBQ1pNLFdBQUssa0VBQ3VETixRQUR2RCxFQUFMLENBR0dPLElBSEgsQ0FHUSxVQUFDQyxRQUFEO0FBQUEsZUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxPQUhSLEVBSUdGLElBSkgsQ0FJUSxVQUFDRyxJQUFEO0FBQUEsZUFBVU4sU0FBUyxDQUFDTSxJQUFJLENBQUNBLElBQU4sQ0FBbkI7QUFBQSxPQUpSO0FBS0Q7QUFDRixHQVJRLEVBUU4sQ0FBQ1YsUUFBRCxDQVJNLENBQVQ7O0FBVUEsTUFBSUcsTUFBTSxDQUFDUSxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFFQyxnRUFBTyxDQUFDQyxLQUF2QjtBQUFBLGdCQUErQlYsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVVztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUNHWCxNQUFNLENBQUNZLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsNEJBQ1Y7QUFBQSxxQkFDR0EsS0FBSyxDQUFDQyxTQURULFNBQ3VCRCxLQUFLLENBQUNFLFVBRDdCO0FBQUEsV0FBU0YsS0FBSyxDQUFDRyxHQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBL0J1QnRCLE07VUFDUEUscUQ7OztLQURPRixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1thdXRob3JJZF0uZGIwNGEzY2E5M2RmODhlZTBhZGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vc3R5bGVzL0F1dGhvci5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3IoKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBhdXRob3JJZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IFtxdW90ZXMsIHNldFF1b3Rlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYXV0aG9ySWQpIHtcclxuICAgICAgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vcXVvdGUtZ2FyZGVuLm9ucmVuZGVyLmNvbS9hcGkvdjMvcXVvdGVzP2F1dGhvcj0ke2F1dGhvcklkfWBcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRRdW90ZXMoZGF0YS5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfSwgW2F1dGhvcklkXSk7XHJcblxyXG4gIGlmIChxdW90ZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PntxdW90ZXNbMF0ucXVvdGVBdXRob3J9PC9oMj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtxdW90ZXMubWFwKChxdW90ZSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17cXVvdGUuX2lkfT5cclxuICAgICAgICAgICAge3F1b3RlLnF1b3RlVGV4dH0gLSB7cXVvdGUucXVvdGVHZW5yZX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=