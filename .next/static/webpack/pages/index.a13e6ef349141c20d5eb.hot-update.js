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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      count = _useState[0],
      setCount = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      quote = _useState2[0],
      setQuote = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch("https://quote-garden.onrender.com/api/v3/quotes/random").then(function (response) {
      return response.json();
    }).then(function (data) {
      return setQuote(data.data[0]);
    });
  }, [count]);

  if (!quote) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "Loading..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      children: quote.quoteText
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["- ", quote.quoteAuthor]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: ["Genre: ", quote.quoteGenre]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      onClick: function onClick() {
        return setCount(count + 1);
      },
      children: "random"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

_s(HomePage, "HCJWHqjKASDIjLCLrssHljlMU7s=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJxdW90ZSIsInNldFF1b3RlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInF1b3RlVGV4dCIsInF1b3RlQXV0aG9yIiwicXVvdGVHZW5yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxRQUFULEdBQW9CO0FBQUE7O0FBQUEsa0JBQ1BDLHNEQUFRLENBQUMsQ0FBRCxDQUREO0FBQUEsTUFDMUJDLEtBRDBCO0FBQUEsTUFDbkJDLFFBRG1COztBQUFBLG1CQUVQRixzREFBUSxDQUFDLElBQUQsQ0FGRDtBQUFBLE1BRTFCRyxLQUYwQjtBQUFBLE1BRW5CQyxRQUZtQjs7QUFJakNDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxTQUFLLENBQUMsd0RBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRDtBQUFBLGFBQVVOLFFBQVEsQ0FBQ00sSUFBSSxDQUFDQSxJQUFMLENBQVUsQ0FBVixDQUFELENBQWxCO0FBQUEsS0FGUjtBQUdELEdBSlEsRUFJTixDQUFDVCxLQUFELENBSk0sQ0FBVDs7QUFNQSxNQUFJLENBQUNFLEtBQUwsRUFBWTtBQUNWLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFDRDs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtBLEtBQUssQ0FBQ1E7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLHVCQUFNUixLQUFLLENBQUNTLFdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRTtBQUFBLDRCQUFXVCxLQUFLLENBQUNVLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBSUU7QUFBUSxhQUFPLEVBQUU7QUFBQSxlQUFNWCxRQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQWQ7QUFBQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0dBdEJ1QkYsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMTNlNmVmMzQ5MTQxYzIwZDVlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtxdW90ZSwgc2V0UXVvdGVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcImh0dHBzOi8vcXVvdGUtZ2FyZGVuLm9ucmVuZGVyLmNvbS9hcGkvdjMvcXVvdGVzL3JhbmRvbVwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0UXVvdGUoZGF0YS5kYXRhWzBdKSk7XG4gIH0sIFtjb3VudF0pO1xuXG4gIGlmICghcXVvdGUpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgyPntxdW90ZS5xdW90ZVRleHR9PC9oMj5cbiAgICAgIDxwPi0ge3F1b3RlLnF1b3RlQXV0aG9yfTwvcD5cbiAgICAgIDxwPkdlbnJlOiB7cXVvdGUucXVvdGVHZW5yZX08L3A+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50ICsgMSl9PnJhbmRvbTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==