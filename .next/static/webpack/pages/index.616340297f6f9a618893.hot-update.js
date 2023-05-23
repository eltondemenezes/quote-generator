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
        children: [quote.quoteAuthor, " ", quote.quoteGenre]
      }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZVBhZ2UiLCJ1c2VTdGF0ZSIsImNvdW50Iiwic2V0Q291bnQiLCJxdW90ZSIsInNldFF1b3RlIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNsYXNzZXMiLCJyYW5kb21CdXR0b24iLCJxdW90ZVRleHQiLCJhdXRob3JCdXR0b24iLCJxdW90ZUF1dGhvciIsInF1b3RlR2VucmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUVlLFNBQVNBLFFBQVQsR0FBb0I7QUFBQTs7QUFBQSxrQkFDUEMsc0RBQVEsQ0FBQyxDQUFELENBREQ7QUFBQSxNQUMxQkMsS0FEMEI7QUFBQSxNQUNuQkMsUUFEbUI7O0FBQUEsbUJBRVBGLHNEQUFRLENBQUMsSUFBRCxDQUZEO0FBQUEsTUFFMUJHLEtBRjBCO0FBQUEsTUFFbkJDLFFBRm1COztBQUlqQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFNBQUssQ0FBQyx3REFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFEO0FBQUEsYUFBVU4sUUFBUSxDQUFDTSxJQUFJLENBQUNBLElBQUwsQ0FBVSxDQUFWLENBQUQsQ0FBbEI7QUFBQSxLQUZSO0FBR0QsR0FKUSxFQUlOLENBQUNULEtBQUQsQ0FKTSxDQUFUOztBQU1BLE1BQUksQ0FBQ0UsS0FBTCxFQUFZO0FBQ1Ysd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBUDtBQUNEOztBQUVELHNCQUNFO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUVRLDhEQUFPLENBQUNDLFlBRHJCO0FBRUUsYUFBTyxFQUFFO0FBQUEsZUFBTVYsUUFBUSxDQUFDRCxLQUFLLEdBQUcsQ0FBVCxDQUFkO0FBQUEsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBT0UscUVBQUMsd0RBQUQ7QUFBQSw2QkFDRTtBQUFBLHlCQUFLRSxLQUFLLENBQUNVLFNBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBVUU7QUFBSyxlQUFTLEVBQUVGLDhEQUFPLENBQUNHLFlBQXhCO0FBQUEsNkJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUUsTUFBTVgsS0FBSyxDQUFDWSxXQUF4QjtBQUFBLG1CQUNHWixLQUFLLENBQUNZLFdBRFQsT0FDdUJaLEtBQUssQ0FBQ2EsVUFEN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUEsa0JBREY7QUFrQkQ7O0dBaEN1QmpCLFE7O0tBQUFBLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjE2MzQwMjk3ZjZmOWE2MTg4OTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9DYXJkXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IGNpcmN1bGFyQXJyb3dzIGZyb20gXCIuLi9wdWJsaWMvdHdvLWNpcmN1bGFyLWFycm93cy5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtxdW90ZSwgc2V0UXVvdGVdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcImh0dHBzOi8vcXVvdGUtZ2FyZGVuLm9ucmVuZGVyLmNvbS9hcGkvdjMvcXVvdGVzL3JhbmRvbVwiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gc2V0UXVvdGUoZGF0YS5kYXRhWzBdKSk7XG4gIH0sIFtjb3VudF0pO1xuXG4gIGlmICghcXVvdGUpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMucmFuZG9tQnV0dG9ufVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDb3VudChjb3VudCArIDEpfVxuICAgICAgPlxuICAgICAgICByYW5kb21cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPENhcmQ+XG4gICAgICAgIDxwPlwie3F1b3RlLnF1b3RlVGV4dH1cIjwvcD5cbiAgICAgIDwvQ2FyZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmF1dGhvckJ1dHRvbn0+XG4gICAgICAgIDxMaW5rIGhyZWY9e1wiL1wiICsgcXVvdGUucXVvdGVBdXRob3J9PlxuICAgICAgICAgIHtxdW90ZS5xdW90ZUF1dGhvcn0ge3F1b3RlLnF1b3RlR2VucmV9XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==