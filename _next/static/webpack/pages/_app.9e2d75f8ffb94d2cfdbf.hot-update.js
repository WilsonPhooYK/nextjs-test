webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var appRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! appRedux */ "./src/appRedux/index.ts");
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footer */ "./src/components/Footer/index.tsx");
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/theme */ "./src/styles/theme.ts");
/* harmony import */ var styles_global_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var styles_global_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_global_scss__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "J:\\policypal-web-nextjs\\src\\pages\\_app.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // import CustomThemeProvider from 'context/CustomThemeProvider';



var updateAppTheme = function updateAppTheme(pathname) {
  var isPPFA = /ppfa/.test(pathname);
  var oldClass = isPPFA ? 'app-ppt' : 'app-ppfa';
  var newClass = isPPFA ? 'app-ppfa' : 'app-ppt';

  if (document.body.classList.contains(oldClass) || !document.body.classList.contains(newClass)) {
    document.body.classList.remove('app-ppt', 'app-ppfa');
    document.body.classList.add(newClass);
    return true;
  }

  return false;
};

var updateStyleTheme = function updateStyleTheme(pathname) {
  var isPPFA = /ppfa/.test(pathname);
  return isPPFA ? Object(styles_theme__WEBPACK_IMPORTED_MODULE_7__["getTheme"])('ppfa') : Object(styles_theme__WEBPACK_IMPORTED_MODULE_7__["getTheme"])('ppt');
};

var WrappedApp = function WrappedApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }, _this);
};

_c = WrappedApp;
var StyledWrappedApp = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles_theme__WEBPACK_IMPORTED_MODULE_7__["cssVariables"])(WrappedApp);

var ThemedApp = function ThemedApp(props) {
  _s();

  var pathname = props.router.pathname; // const [initialPathname] = useState(pathname);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])(updateStyleTheme(pathname))),
      theme = _useState[0],
      setTheme = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      var _jssStyles$parentElem;

      (_jssStyles$parentElem = jssStyles.parentElement) === null || _jssStyles$parentElem === void 0 ? void 0 : _jssStyles$parentElem.removeChild(jssStyles);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (updateAppTheme(pathname)) {
      setTheme(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])(updateStyleTheme(pathname)));
    }
  }, [pathname]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      style: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        height: '100%'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(StyledWrappedApp, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        style: {
          flex: 1,
          width: '100%'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, _this);
};

_s(ThemedApp, "riNXel6uKh7mXSTl3E6R2bPhZsc=");

_c2 = ThemedApp;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = appRedux__WEBPACK_IMPORTED_MODULE_5__["default"].withRedux(ThemedApp));

var _c, _c2, _c3;

$RefreshReg$(_c, "WrappedApp");
$RefreshReg$(_c2, "ThemedApp");
$RefreshReg$(_c3, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Il0sIm5hbWVzIjpbInVwZGF0ZUFwcFRoZW1lIiwicGF0aG5hbWUiLCJpc1BQRkEiLCJ0ZXN0Iiwib2xkQ2xhc3MiLCJuZXdDbGFzcyIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwidXBkYXRlU3R5bGVUaGVtZSIsImdldFRoZW1lIiwiV3JhcHBlZEFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlN0eWxlZFdyYXBwZWRBcHAiLCJ3aXRoU3R5bGVzIiwiY3NzVmFyaWFibGVzIiwiVGhlbWVkQXBwIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VTdGF0ZSIsImNyZWF0ZU11aVRoZW1lIiwidGhlbWUiLCJzZXRUaGVtZSIsInVzZUVmZmVjdCIsImpzc1N0eWxlcyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJkaXNwbGF5Iiwid2lkdGgiLCJmbGV4RGlyZWN0aW9uIiwiaGVpZ2h0IiwiZmxleCIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBT0E7QUFDQTtBQUVBO0NBSUE7O0FBRUE7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxRQUFELEVBQStCO0FBQ3BELE1BQU1DLE1BQU0sR0FBRyxPQUFPQyxJQUFQLENBQVlGLFFBQVosQ0FBZjtBQUNBLE1BQU1HLFFBQVEsR0FBR0YsTUFBTSxHQUFHLFNBQUgsR0FBZSxVQUF0QztBQUNBLE1BQU1HLFFBQVEsR0FBR0gsTUFBTSxHQUFHLFVBQUgsR0FBZ0IsU0FBdkM7O0FBRUEsTUFBSUksUUFBUSxDQUFDQyxJQUFULENBQWNDLFNBQWQsQ0FBd0JDLFFBQXhCLENBQWlDTCxRQUFqQyxLQUE4QyxDQUFDRSxRQUFRLENBQUNDLElBQVQs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Q0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjllMmQ3NWY4ZmZiOTRkMmNmZGJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0LCBBcHBJbml0aWFsUHJvcHMsIEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSB9IGZyb20gJ25leHQnO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVNdWlUaGVtZSxcclxuICBUaGVtZVByb3ZpZGVyLFxyXG4gIC8vIHJlc3BvbnNpdmVGb250U2l6ZXMsXHJcbiAgd2l0aFN0eWxlcyxcclxuICBUaGVtZU9wdGlvbnMsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lJztcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnYXBwUmVkdXgnO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tICdjb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5pbXBvcnQgeyBnZXRUaGVtZSwgY3NzVmFyaWFibGVzIH0gZnJvbSAnc3R5bGVzL3RoZW1lJztcclxuXHJcbi8vIGltcG9ydCBDdXN0b21UaGVtZVByb3ZpZGVyIGZyb20gJ2NvbnRleHQvQ3VzdG9tVGhlbWVQcm92aWRlcic7XHJcblxyXG5pbXBvcnQgJ3N0eWxlcy9nbG9iYWwuc2Nzcyc7XHJcblxyXG5jb25zdCB1cGRhdGVBcHBUaGVtZSA9IChwYXRobmFtZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XHJcbiAgY29uc3QgaXNQUEZBID0gL3BwZmEvLnRlc3QocGF0aG5hbWUpO1xyXG4gIGNvbnN0IG9sZENsYXNzID0gaXNQUEZBID8gJ2FwcC1wcHQnIDogJ2FwcC1wcGZhJztcclxuICBjb25zdCBuZXdDbGFzcyA9IGlzUFBGQSA/ICdhcHAtcHBmYScgOiAnYXBwLXBwdCc7XHJcblxyXG4gIGlmIChkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhvbGRDbGFzcykgfHwgIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKG5ld0NsYXNzKSkge1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdhcHAtcHB0JywgJ2FwcC1wcGZhJyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQobmV3Q2xhc3MpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCB1cGRhdGVTdHlsZVRoZW1lID0gKHBhdGhuYW1lOiBzdHJpbmcpOiBUaGVtZU9wdGlvbnMgPT4ge1xyXG4gIGNvbnN0IGlzUFBGQSA9IC9wcGZhLy50ZXN0KHBhdGhuYW1lKTtcclxuICByZXR1cm4gaXNQUEZBID8gZ2V0VGhlbWUoJ3BwZmEnKSA6IGdldFRoZW1lKCdwcHQnKTtcclxufTtcclxuXHJcbmNvbnN0IFdyYXBwZWRBcHA6IE5leHRDb21wb25lbnRUeXBlPEFwcENvbnRleHQsIEFwcEluaXRpYWxQcm9wcywgQXBwUHJvcHM+ID0gKHtcclxuICBDb21wb25lbnQsXHJcbiAgcGFnZVByb3BzLFxyXG59KSA9PiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xyXG5cclxuY29uc3QgU3R5bGVkV3JhcHBlZEFwcCA9IHdpdGhTdHlsZXMoY3NzVmFyaWFibGVzKShXcmFwcGVkQXBwKTtcclxuXHJcbmNvbnN0IFRoZW1lZEFwcDogTmV4dENvbXBvbmVudFR5cGU8QXBwQ29udGV4dCwgQXBwSW5pdGlhbFByb3BzLCBBcHBQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwcm9wcy5yb3V0ZXI7XHJcbiAgLy8gY29uc3QgW2luaXRpYWxQYXRobmFtZV0gPSB1c2VTdGF0ZShwYXRobmFtZSk7XHJcbiAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShjcmVhdGVNdWlUaGVtZSh1cGRhdGVTdHlsZVRoZW1lKHBhdGhuYW1lKSkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXHJcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjanNzLXNlcnZlci1zaWRlJyk7XHJcbiAgICBpZiAoanNzU3R5bGVzKSB7XHJcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnRFbGVtZW50Py5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1cGRhdGVBcHBUaGVtZShwYXRobmFtZSkpIHtcclxuICAgICAgc2V0VGhlbWUoY3JlYXRlTXVpVGhlbWUodXBkYXRlU3R5bGVUaGVtZShwYXRobmFtZSkpKTtcclxuICAgIH1cclxuICB9LCBbcGF0aG5hbWVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIHsvKiBDc3NCYXNlbGluZSBraWNrc3RhcnQgYW4gZWxlZ2FudCwgY29uc2lzdGVudCwgYW5kIHNpbXBsZSBiYXNlbGluZSB0byBidWlsZCB1cG9uLiAqL31cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCB3aWR0aDogJzEwMCUnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgaGVpZ2h0OiAnMTAwJScgfX0+XHJcbiAgICAgICAgPFN0eWxlZFdyYXBwZWRBcHAgey4uLnByb3BzfSAvPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZmxleDogMSwgd2lkdGg6ICcxMDAlJyB9fSAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KFRoZW1lZEFwcCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=