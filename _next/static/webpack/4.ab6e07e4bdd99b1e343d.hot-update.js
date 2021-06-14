webpackHotUpdate_N_E(4,{

/***/ "./src/components/Forms/Date/Date.tsx":
/*!********************************************!*\
  !*** ./src/components/Forms/Date/Date.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");


var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\Date\\Date.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Date = function Date(_ref) {
  _s();

  var value = _ref.value,
      onChange = _ref.onChange,
      name = _ref.name,
      label = _ref.label;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(v) {
    setLocalValue(v);
  };

  var controlledOnChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (v) {
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
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__["KeyboardDatePicker"], {
        label: label // {...props}
        ,
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

      }, void 0, false, {
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
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Date));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRGF0ZS9EYXRlLnRzeCJdLCJuYW1lcyI6WyJEYXRlIiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJsYWJlbCIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJjb25zb2xlIiwibG9nIiwiRGF0ZUZuc1V0aWxzIiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEsSUFBYSxHQUFHLFNBQWhCQSxJQUFnQixPQUFzQztBQUFBOztBQUFBLE1BQW5DQyxLQUFtQyxRQUFuQ0EsS0FBbUM7QUFBQSxNQUE1QkMsUUFBNEIsUUFBNUJBLFFBQTRCO0FBQUEsTUFBbEJDLElBQWtCLFFBQWxCQSxJQUFrQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDdEJDLHNEQUFRLEVBRGM7QUFBQSxNQUNuREMsVUFEbUQ7QUFBQSxNQUN2Q0MsYUFEdUM7O0FBRzFELE1BQU1DLGFBQW1ELEdBQUcsU0FBdERBLGFBQXNELENBQUNDLENBQUQsRUFBTztBQUNqRUYsaUJBQWEsQ0FBQ0UsQ0FBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxrQkFBa0IsR0FBR0MseURBQVcsQ0FDcEMsVUFBQ0YsQ0FBRCxFQUFPO0FBQ0xQLFlBQVEsSUFDTkEsUUFBUSxDQUFDO0FBQ1BVLFlBQU0sRUFBRTtBQUNOO0FBQ0FYLGFBQUssRUFBRVE7QUFGRDtBQURELEtBQUQsQ0FEVjtBQU9ELEdBVG1DLEVBVXBDLENBQUNQLFFBQUQsQ0FWb0MsQ0FBdEM7QUFhQSxNQUFNVyxhQUFtRCxHQUFHWCxRQUFRLEdBQ2hFUSxrQkFEZ0UsR0FFaEVGLGFBRko7QUFHQSxNQUFNTSxVQUFVLEdBQUdaLFFBQVEsR0FBR0QsS0FBSCxHQUFXSyxVQUF0QztBQUVBUyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWjtBQUVBO0FBQUE7QUFDRTtBQUNBLHlFQUFDLDRFQUFEO0FBQXlCLFdBQUssRUFBRUcseURBQWhDO0FBQUEsNkJBQ0UscUVBQUMsdUVBQUQ7QUFDRSxhQUFLLEVBQUViLEtBRFQsQ0FFRTtBQUZGO0FBR0UsVUFBRSxFQUFFRCxJQUhOO0FBSUUsYUFBSyxFQUFFVyxVQUpUO0FBS0UsbUJBQVcsTUFMYjtBQU1FLGNBQU0sRUFBQyxZQU5UO0FBT0UsZ0JBQVEsRUFBRUQsYUFQWjtBQVFFLDJCQUFtQixFQUFFO0FBQ25CLHdCQUFjO0FBREssU0FSdkI7QUFXRSxpQkFBUyxNQVhYO0FBWUUsb0JBQVksRUFBQyxRQVpmO0FBYUUsbUJBQVcsRUFBQyxZQWJkO0FBY0UsWUFBSSxFQUFDLE9BZFA7QUFlRSxlQUFPLEVBQUMsUUFmVixDQWdCRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsQ0E4QkU7O0FBOUJGO0FBZ0NELENBM0REOztHQUFNYixJOztLQUFBQSxJO0FBNkRTLGtGQUFBa0Isa0RBQUksQ0FBQ2xCLElBQUQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svNC5hYjZlMDdlNGJkZDk5YjFlMzQzZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIG1lbW8sIHVzZVN0YXRlLCBDaGFuZ2VFdmVudEhhbmRsZXIsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNdWlQaWNrZXJzVXRpbHNQcm92aWRlciwgS2V5Ym9hcmREYXRlUGlja2VyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuaW1wb3J0IHsgU3R5bGVzUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuLy8gaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm1zL1RleHRJbnB1dCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGF0ZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBEYXRlOiBGQzxhbnk+ID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBuYW1lLCBsYWJlbCB9KSA9PiB7XHJcbiAgY29uc3QgW2xvY2FsVmFsdWUsIHNldExvY2FsVmFsdWVdID0gdXNlU3RhdGU8dHlwZW9mIERhdGU+KCk7XHJcblxyXG4gIGNvbnN0IG9uTG9jYWxDaGFuZ2U6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9ICh2KSA9PiB7XHJcbiAgICBzZXRMb2NhbFZhbHVlKHYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZWRPbkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHYpID0+IHtcclxuICAgICAgb25DaGFuZ2UgJiZcclxuICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICAgIHZhbHVlOiB2LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbb25DaGFuZ2VdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gb25DaGFuZ2VcclxuICAgID8gY29udHJvbGxlZE9uQ2hhbmdlXHJcbiAgICA6IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IG9uQ2hhbmdlID8gdmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICBjb25zb2xlLmxvZyh2YWx1ZVRvVXNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxTdHlsZXNQcm92aWRlciBpbmplY3RGaXJzdD5cclxuICAgIDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxyXG4gICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAvLyB7Li4ucHJvcHN9XHJcbiAgICAgICAgaWQ9e25hbWV9XHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlVG9Vc2V9XHJcbiAgICAgICAgZGlzYWJsZVBhc3RcclxuICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUb1VzZX1cclxuICAgICAgICBLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICBpbnB1dFZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZGQvbW0veXl5eVwiXHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICB2YXJpYW50PVwiaW5saW5lXCJcclxuICAgICAgICAvLyByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgIC8vICAgPFRleHRJbnB1dFxyXG4gICAgICAgIC8vICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgIC8vICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAvLyAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgLy8gICAgIC8vIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgLy8gICAvPlxyXG4gICAgICAgIC8vICl9XHJcbiAgICAgIC8+XHJcbiAgICA8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG4gICAgLy8gPC9TdHlsZXNQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhEYXRlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==