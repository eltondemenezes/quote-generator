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
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");


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
      lineNumber: 22,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _styles_Author_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,
      children: quotes[0].quoteAuthor
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), quotes.map(function (quote) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: quote.quoteText
      }, quote._id, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW2F1dGhvcklkXS5qcyJdLCJuYW1lcyI6WyJBdXRob3IiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhdXRob3JJZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJxdW90ZXMiLCJzZXRRdW90ZXMiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwibGVuZ3RoIiwiY2xhc3NlcyIsInRpdGxlIiwicXVvdGVBdXRob3IiLCJtYXAiLCJxdW90ZSIsInF1b3RlVGV4dCIsIl9pZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDL0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUQrQixNQUV2QkMsUUFGdUIsR0FFVkYsTUFBTSxDQUFDRyxLQUZHLENBRXZCRCxRQUZ1Qjs7QUFBQSxrQkFHSEUsc0RBQVEsQ0FBQyxFQUFELENBSEw7QUFBQSxNQUd4QkMsTUFId0I7QUFBQSxNQUdoQkMsU0FIZ0I7O0FBSy9CQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJTCxRQUFKLEVBQWM7QUFDWk0sV0FBSyxrRUFDdUROLFFBRHZELEVBQUwsQ0FHR08sSUFISCxDQUdRLFVBQUNDLFFBQUQ7QUFBQSxlQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLE9BSFIsRUFJR0YsSUFKSCxDQUlRLFVBQUNHLElBQUQ7QUFBQSxlQUFVTixTQUFTLENBQUNNLElBQUksQ0FBQ0EsSUFBTixDQUFuQjtBQUFBLE9BSlI7QUFLRDtBQUNGLEdBUlEsRUFRTixDQUFDVixRQUFELENBUk0sQ0FBVDs7QUFVQSxNQUFJRyxNQUFNLENBQUNRLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDdkIsd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFBRyxlQUFTLEVBQUVDLGdFQUFPLENBQUNDLEtBQXRCO0FBQUEsZ0JBQThCVixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVXO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVHWCxNQUFNLENBQUNZLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsMEJBQ1YscUVBQUMsd0RBQUQ7QUFBQSxrQkFBdUJBLEtBQUssQ0FBQ0M7QUFBN0IsU0FBV0QsS0FBSyxDQUFDRSxHQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFU7QUFBQSxLQUFYLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFRRDs7R0EzQnVCckIsTTtVQUNQRSxxRDs7O0tBRE9GLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW2F1dGhvcklkXS5iMGI5NTcxMGQxM2M1M2U3ZTg3Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9zdHlsZXMvQXV0aG9yLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ2FyZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aG9yKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgYXV0aG9ySWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBbcXVvdGVzLCBzZXRRdW90ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGF1dGhvcklkKSB7XHJcbiAgICAgIGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL3F1b3RlLWdhcmRlbi5vbnJlbmRlci5jb20vYXBpL3YzL3F1b3Rlcz9hdXRob3I9JHthdXRob3JJZH1gXHJcbiAgICAgIClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0UXVvdGVzKGRhdGEuZGF0YSkpO1xyXG4gICAgfVxyXG4gIH0sIFthdXRob3JJZF0pO1xyXG5cclxuICBpZiAocXVvdGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PntxdW90ZXNbMF0ucXVvdGVBdXRob3J9PC9wPlxyXG4gICAgICB7cXVvdGVzLm1hcCgocXVvdGUpID0+IChcclxuICAgICAgICA8Q2FyZCBrZXk9e3F1b3RlLl9pZH0+e3F1b3RlLnF1b3RlVGV4dH08L0NhcmQ+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9