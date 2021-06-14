webpackHotUpdate_N_E(4,{

/***/ "./src/components/Forms/Date/Date.tsx":
/*!********************************************!*\
  !*** ./src/components/Forms/Date/Date.tsx ***!
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
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\Date\\Date.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var Date = function Date(_ref) {
  _s();

  var value = _ref.value,
      onChange = _ref.onChange,
      name = _ref.name,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["value", "onChange", "name"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(v) {
    setLocalValue(v);
  };

  var controlledOnChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (v) {
    onChange && onChange({
      target: {
        // @ts-expect-error - Either string or number
        value: v
      }
    });
  }, [onChange]);
  var onChangeToUse = onChange ? controlledOnChange : onLocalChange;
  var valueToUse = onChange ? value : localValue;
  console.log(valueToUse);
  return (
    /*#__PURE__*/
    // <StylesProvider injectFirst>
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_5__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_4__["KeyboardDatePicker"], _objectSpread(_objectSpread({}, props), {}, {
        id: name,
        value: valueToUse,
        disablePast: true,
        format: "dd/MM/yyyy",
        onChange: onChangeToUse,
        KeyboardButtonProps: {
          'aria-label': 'change date'
        },
        fullWidth: true,
        inputVariant: "filled",
        placeholder: "dd/mm/yyyy",
        size: "small",
        variant: "inline" // renderInput={(params) => (
        //   <TextInput
        //     {...params}
        //     label={label}
        //     type="text"
        //     variant="filled"
        //     // size="small"
        //   />
        // )}

      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, _this) // </StylesProvider>

  );
};

_s(Date, "4l6gFxZX4pAFw0s5Pz8X4Y8ZsWs=");

_c = Date;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(Date));

var _c, _c2;

$RefreshReg$(_c, "Date");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRGF0ZS9EYXRlLnRzeCJdLCJuYW1lcyI6WyJEYXRlIiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJjb25zb2xlIiwibG9nIiwiRGF0ZUZuc1V0aWxzIiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxJQUFhLEdBQUcsU0FBaEJBLElBQWdCLE9BQXlDO0FBQUE7O0FBQUEsTUFBdENDLEtBQXNDLFFBQXRDQSxLQUFzQztBQUFBLE1BQS9CQyxRQUErQixRQUEvQkEsUUFBK0I7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBWkMsS0FBWTs7QUFBQSxrQkFDekJDLHNEQUFRLEVBRGlCO0FBQUEsTUFDdERDLFVBRHNEO0FBQUEsTUFDMUNDLGFBRDBDOztBQUc3RCxNQUFNQyxhQUFtRCxHQUFHLFNBQXREQSxhQUFzRCxDQUFDQyxDQUFELEVBQU87QUFDakVGLGlCQUFhLENBQUNFLENBQUQsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsa0JBQWtCLEdBQUdDLHlEQUFXLENBQ3BDLFVBQUNGLENBQUQsRUFBTztBQUNMUCxZQUFRLElBQ05BLFFBQVEsQ0FBQztBQUNQVSxZQUFNLEVBQUU7QUFDTjtBQUNBWCxhQUFLLEVBQUVRO0FBRkQ7QUFERCxLQUFELENBRFY7QUFPRCxHQVRtQyxFQVVwQyxDQUFDUCxRQUFELENBVm9DLENBQXRDO0FBYUEsTUFBTVcsYUFBbUQsR0FBR1gsUUFBUSxHQUNoRVEsa0JBRGdFLEdBRWhFRixhQUZKO0FBR0EsTUFBTU0sVUFBVSxHQUFHWixRQUFRLEdBQUdELEtBQUgsR0FBV0ssVUFBdEM7QUFFQVMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVo7QUFFQTtBQUFBO0FBQ0U7QUFDQSx5RUFBQyw0RUFBRDtBQUF5QixXQUFLLEVBQUVHLHlEQUFoQztBQUFBLDZCQUNFLHFFQUFDLHVFQUFELGtDQUNNYixLQUROO0FBRUUsVUFBRSxFQUFFRCxJQUZOO0FBR0UsYUFBSyxFQUFFVyxVQUhUO0FBSUUsbUJBQVcsTUFKYjtBQUtFLGNBQU0sRUFBQyxZQUxUO0FBTUUsZ0JBQVEsRUFBRUQsYUFOWjtBQU9FLDJCQUFtQixFQUFFO0FBQ25CLHdCQUFjO0FBREssU0FQdkI7QUFVRSxpQkFBUyxNQVZYO0FBV0Usb0JBQVksRUFBQyxRQVhmO0FBWUUsbUJBQVcsRUFBQyxZQVpkO0FBYUUsWUFBSSxFQUFDLE9BYlA7QUFjRSxlQUFPLEVBQUMsUUFkVixDQWVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixDQTZCRTs7QUE3QkY7QUErQkQsQ0ExREQ7O0dBQU1iLEk7O0tBQUFBLEk7QUE0RFMsa0ZBQUFrQixrREFBSSxDQUFDbEIsSUFBRCxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay80LjUzY2MwYTlmNGZkNTQyNGY3ZGUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgbWVtbywgdXNlU3RhdGUsIENoYW5nZUV2ZW50SGFuZGxlciwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLCBLZXlib2FyZERhdGVQaWNrZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyBTdHlsZXNQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG4vLyBpbXBvcnQgVGV4dElucHV0IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvVGV4dElucHV0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EYXRlLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IERhdGU6IEZDPGFueT4gPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIG5hbWUsIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCBbbG9jYWxWYWx1ZSwgc2V0TG9jYWxWYWx1ZV0gPSB1c2VTdGF0ZTx0eXBlb2YgRGF0ZT4oKTtcclxuXHJcbiAgY29uc3Qgb25Mb2NhbENoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKHYpID0+IHtcclxuICAgIHNldExvY2FsVmFsdWUodik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udHJvbGxlZE9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAodikgPT4ge1xyXG4gICAgICBvbkNoYW5nZSAmJlxyXG4gICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgICAgdmFsdWU6IHYsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtvbkNoYW5nZV1cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRvVXNlOiBDaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSBvbkNoYW5nZVxyXG4gICAgPyBjb250cm9sbGVkT25DaGFuZ2VcclxuICAgIDogb25Mb2NhbENoYW5nZTtcclxuICBjb25zdCB2YWx1ZVRvVXNlID0gb25DaGFuZ2UgPyB2YWx1ZSA6IGxvY2FsVmFsdWU7XHJcblxyXG4gIGNvbnNvbGUubG9nKHZhbHVlVG9Vc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgLy8gPFN0eWxlc1Byb3ZpZGVyIGluamVjdEZpcnN0PlxyXG4gICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG4gICAgICA8S2V5Ym9hcmREYXRlUGlja2VyXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgIGlkPXtuYW1lfVxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZVRvVXNlfVxyXG4gICAgICAgIGRpc2FibGVQYXN0XHJcbiAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVG9Vc2V9XHJcbiAgICAgICAgS2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgJ2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgaW5wdXRWYXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cImRkL21tL3l5eXlcIlxyXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgdmFyaWFudD1cImlubGluZVwiXHJcbiAgICAgICAgLy8gcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAvLyAgIDxUZXh0SW5wdXRcclxuICAgICAgICAvLyAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAvLyAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgIC8vICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgLy8gICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgIC8vICAgICAvLyBzaXplPVwic21hbGxcIlxyXG4gICAgICAgIC8vICAgLz5cclxuICAgICAgICAvLyApfVxyXG4gICAgICAvPlxyXG4gICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuICAgIC8vIDwvU3R5bGVzUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oRGF0ZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=