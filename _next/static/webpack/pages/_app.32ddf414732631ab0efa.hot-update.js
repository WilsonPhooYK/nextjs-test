webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/AppLink/AppLink.tsx":
/*!********************************************!*\
  !*** ./src/components/AppLink/AppLink.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lib_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/navigation */ "./src/lib/navigation/index.ts");




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\AppLink\\AppLink.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var AppLink = function AppLink(_ref) {
  _s();

  var children = _ref.children,
      href = _ref.href,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children", "href"]);

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(),
      pathname = _useRouter.pathname,
      basePath = _useRouter.basePath;

  if (Object(lib_navigation__WEBPACK_IMPORTED_MODULE_6__["isThemeSwitch"])(pathname, href.toString())) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", _objectSpread(_objectSpread({}, props), {}, {
      href: "".concat(basePath).concat(href.toString()),
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread(_objectSpread({}, props), {}, {
    href: href,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(AppLink, "p+3OWoblKmHD1i6Kt062mvezkWw=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = AppLink;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(AppLink));

var _c, _c2;

$RefreshReg$(_c, "AppLink");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXBwTGluay9BcHBMaW5rLnRzeCJdLCJuYW1lcyI6WyJBcHBMaW5rIiwiY2hpbGRyZW4iLCJocmVmIiwicHJvcHMiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsImJhc2VQYXRoIiwiaXNUaGVtZVN3aXRjaCIsInRvU3RyaW5nIiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQTBELEdBQUcsU0FBN0RBLE9BQTZELE9BSTdEO0FBQUE7O0FBQUEsTUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGSkMsSUFFSSxRQUZKQSxJQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxtQkFDMkJDLDZEQUFTLEVBRHBDO0FBQUEsTUFDSUMsUUFESixjQUNJQSxRQURKO0FBQUEsTUFDY0MsUUFEZCxjQUNjQSxRQURkOztBQUdKLE1BQUlDLG9FQUFhLENBQUNGLFFBQUQsRUFBV0gsSUFBSSxDQUFDTSxRQUFMLEVBQVgsQ0FBakIsRUFBOEM7QUFDNUMsd0JBQ0UsMEdBQU9MLEtBQVA7QUFBYyxVQUFJLFlBQUtHLFFBQUwsU0FBZ0JKLElBQUksQ0FBQ00sUUFBTCxFQUFoQixDQUFsQjtBQUFBLGdCQUNHUDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtEOztBQUVELHNCQUNFLHFFQUFDLGdEQUFELGtDQUFVRSxLQUFWO0FBQWlCLFFBQUksRUFBRUQsSUFBdkI7QUFBQSxjQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBcEJEOztHQUFNRCxPO1VBSzJCSSxxRDs7O0tBTDNCSixPO0FBc0JTLGtGQUFBUyxrREFBSSxDQUFDVCxPQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzJkZGY0MTQ3MzI2MzFhYjBlZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lbW8sIEZDLCBQcm9wc1dpdGhDaGlsZHJlbiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmssIHsgTGlua1Byb3BzIH0gZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgaXNUaGVtZVN3aXRjaCB9IGZyb20gJ2xpYi9uYXZpZ2F0aW9uJztcclxuXHJcbmNvbnN0IEFwcExpbms6IEZDPFByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcyAmIHsgaWQ6IHN0cmluZyB9Pj4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGhyZWYsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGJhc2VQYXRoIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgaWYgKGlzVGhlbWVTd2l0Y2gocGF0aG5hbWUsIGhyZWYudG9TdHJpbmcoKSkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhIHsuLi5wcm9wc30gaHJlZj17YCR7YmFzZVBhdGh9JHtocmVmLnRvU3RyaW5nKCl9YH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIHsuLi5wcm9wc30gaHJlZj17aHJlZn0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhBcHBMaW5rKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==