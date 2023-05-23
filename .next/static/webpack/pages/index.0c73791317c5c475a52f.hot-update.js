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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\ASUS\\OneDrive\\Documents\\quote-generator\\pages\\index.js",
    _s = $RefreshSig$();




 // import circularArrows from "../public/two-circular-arrows.png";

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
      lineNumber: 18,
      columnNumber: 12
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.randomButton,
      onClick: function onClick() {
        return setCount(count + 1);
      },
      children: "random"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: ["\"", quote.quoteText, "\""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.authorButton,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/" + quote.quoteAuthor,
        children: quote.quoteAuthor
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJxdW90ZSIsInNldFF1b3RlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNsYXNzZXMiLCJyYW5kb21CdXR0b24iLCJxdW90ZVRleHQiLCJhdXRob3JCdXR0b24iLCJxdW90ZUF1dGhvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBRWUsU0FBU0EsUUFBVCxHQUFvQjtBQUFBOztBQUFBLGtCQUNQQyxzREFBUSxDQUFDLENBQUQsQ0FERDtBQUFBLE1BQzFCQyxLQUQwQjtBQUFBLE1BQ25CQyxRQURtQjs7QUFBQSxtQkFFUEYsc0RBQVEsQ0FBQyxJQUFELENBRkQ7QUFBQSxNQUUxQkcsS0FGMEI7QUFBQSxNQUVuQkMsUUFGbUI7O0FBSWpDQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxDQUFDLHdEQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQ7QUFBQSxhQUFVTixRQUFRLENBQUNNLElBQUksQ0FBQ0EsSUFBTCxDQUFVLENBQVYsQ0FBRCxDQUFsQjtBQUFBLEtBRlI7QUFHRCxHQUpRLEVBSU4sQ0FBQ1QsS0FBRCxDQUpNLENBQVQ7O0FBTUEsTUFBSSxDQUFDRSxLQUFMLEVBQVk7QUFDVix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUNFLGVBQVMsRUFBRVEsOERBQU8sQ0FBQ0MsWUFEckI7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNVixRQUFRLENBQUNELEtBQUssR0FBRyxDQUFULENBQWQ7QUFBQSxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRSxxRUFBQyx3REFBRDtBQUFBLDZCQUNFO0FBQUEseUJBQUtFLEtBQUssQ0FBQ1UsU0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFVRTtBQUFLLGVBQVMsRUFBRUYsOERBQU8sQ0FBQ0csWUFBeEI7QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBRSxNQUFNWCxLQUFLLENBQUNZLFdBQXhCO0FBQUEsa0JBQXNDWixLQUFLLENBQUNZO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQSxrQkFERjtBQWdCRDs7R0E5QnVCaEIsUTs7S0FBQUEsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wYzczNzkxMzE3YzVjNDc1YTUyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG4vLyBpbXBvcnQgY2lyY3VsYXJBcnJvd3MgZnJvbSBcIi4uL3B1YmxpYy90d28tY2lyY3VsYXItYXJyb3dzLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3F1b3RlLCBzZXRRdW90ZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKFwiaHR0cHM6Ly9xdW90ZS1nYXJkZW4ub25yZW5kZXIuY29tL2FwaS92My9xdW90ZXMvcmFuZG9tXCIpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRRdW90ZShkYXRhLmRhdGFbMF0pKTtcbiAgfSwgW2NvdW50XSk7XG5cbiAgaWYgKCFxdW90ZSkge1xuICAgIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yYW5kb21CdXR0b259XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENvdW50KGNvdW50ICsgMSl9XG4gICAgICA+XG4gICAgICAgIHJhbmRvbVxuICAgICAgPC9idXR0b24+XG4gICAgICA8Q2FyZD5cbiAgICAgICAgPHA+XCJ7cXVvdGUucXVvdGVUZXh0fVwiPC9wPlxuICAgICAgPC9DYXJkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYXV0aG9yQnV0dG9ufT5cbiAgICAgICAgPExpbmsgaHJlZj17XCIvXCIgKyBxdW90ZS5xdW90ZUF1dGhvcn0+e3F1b3RlLnF1b3RlQXV0aG9yfTwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==