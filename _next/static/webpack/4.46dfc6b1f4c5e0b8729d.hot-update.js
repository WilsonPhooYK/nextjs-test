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
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Date_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Date.module.scss */ "./src/components/Forms/Date/Date.module.scss");
/* harmony import */ var _Date_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Date_module_scss__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\Date\\Date.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var dateFormatter = function dateFormatter(str) {
  return str;
};

var Date = function Date(_ref) {
  _s();

  var value = _ref.value,
      onChange = _ref.onChange,
      name = _ref.name,
      error = _ref.error,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["value", "onChange", "name", "error", "size"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(_v, s) {
    setLocalValue(s);
  };

  var controlledOnChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (_v, s) {
    console.log(_v, s);
    onChange && onChange({
      target: {
        // @ts-expect-error - Either string or number
        value: s
      }
    });
  }, [onChange]);
  var onChangeToUse = onChange ? controlledOnChange : onLocalChange;
  var valueToUse = onChange ? value : localValue; // console.log(valueToUse, moment(valueToUse, 'dd/MM/yyyy').toDate());
  // const date = moment(valueToUse, 'dd/MM/yyyy').toDate();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["StylesProvider"], {
    injectFirst: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_3__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_4__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_3__["KeyboardDatePicker"], {
        className: _Date_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.date // {...omitBy(props, 'type')}
        ,
        size: size,
        id: name,
        value: valueToUse,
        disablePast: true,
        format: "dd/MM/yyyy",
        rifmFormatter: dateFormatter,
        onChange: onChangeToUse,
        KeyboardButtonProps: {
          'aria-label': 'change date'
        },
        fullWidth: true,
        inputVariant: "filled",
        placeholder: "dd/mm/yyyy",
        variant: "inline",
        error: !!error,
        helperText: error ? error.message : undefined
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, _this);
};

_s(Date, "/vkIiT5la2oFIhvBfvyuwJ4Fhhk=");

_c = Date;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(Date));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRGF0ZS9EYXRlLnRzeCJdLCJuYW1lcyI6WyJkYXRlRm9ybWF0dGVyIiwic3RyIiwiRGF0ZSIsInZhbHVlIiwib25DaGFuZ2UiLCJuYW1lIiwiZXJyb3IiLCJzaXplIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvY2FsVmFsdWUiLCJzZXRMb2NhbFZhbHVlIiwib25Mb2NhbENoYW5nZSIsIl92IiwicyIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsIm9uQ2hhbmdlVG9Vc2UiLCJ2YWx1ZVRvVXNlIiwiRGF0ZUZuc1V0aWxzIiwic3R5bGVzIiwiZGF0ZSIsIm1lc3NhZ2UiLCJ1bmRlZmluZWQiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFJQTs7QUFPQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQsRUFBeUI7QUFDN0MsU0FBT0EsR0FBUDtBQUNELENBRkQ7O0FBSUEsSUFBTUMsSUFBa0IsR0FBRyxTQUFyQkEsSUFBcUIsT0FBZ0U7QUFBQTs7QUFBQSxNQUE3REMsS0FBNkQsUUFBN0RBLEtBQTZEO0FBQUEsTUFBdERDLFFBQXNELFFBQXREQSxRQUFzRDtBQUFBLE1BQTVDQyxJQUE0QyxRQUE1Q0EsSUFBNEM7QUFBQSxNQUF0Q0MsS0FBc0MsUUFBdENBLEtBQXNDO0FBQUEsdUJBQS9CQyxJQUErQjtBQUFBLE1BQS9CQSxJQUErQiwwQkFBeEIsT0FBd0I7QUFBQSxNQUFaQyxLQUFZOztBQUFBLGtCQUNyREMsc0RBQVEsRUFENkM7QUFBQSxNQUNsRkMsVUFEa0Y7QUFBQSxNQUN0RUMsYUFEc0U7O0FBR3pGLE1BQU1DLGFBQWtELEdBQUcsU0FBckRBLGFBQXFELENBQUNDLEVBQUQsRUFBS0MsQ0FBTCxFQUFXO0FBQ3BFSCxpQkFBYSxDQUFDRyxDQUFELENBQWI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGtCQUF1RCxHQUFHQyx5REFBVyxDQUN6RSxVQUFDSCxFQUFELEVBQUtDLENBQUwsRUFBVztBQUNURyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsRUFBWixFQUFnQkMsQ0FBaEI7QUFDQVYsWUFBUSxJQUNOQSxRQUFRLENBQUM7QUFDUGUsWUFBTSxFQUFFO0FBQ047QUFDQWhCLGFBQUssRUFBRVc7QUFGRDtBQURELEtBQUQsQ0FEVjtBQU9ELEdBVndFLEVBV3pFLENBQUNWLFFBQUQsQ0FYeUUsQ0FBM0U7QUFjQSxNQUFNZ0IsYUFBa0QsR0FBR2hCLFFBQVEsR0FDL0RXLGtCQUQrRCxHQUUvREgsYUFGSjtBQUdBLE1BQU1TLFVBQVUsR0FBR2pCLFFBQVEsR0FBR0QsS0FBSCxHQUFXTyxVQUF0QyxDQXhCeUYsQ0EwQnpGO0FBQ0E7O0FBRUEsc0JBQ0UscUVBQUMsdUVBQUQ7QUFBZ0IsZUFBVyxNQUEzQjtBQUFBLDJCQUNFLHFFQUFDLDRFQUFEO0FBQXlCLFdBQUssRUFBRVkseURBQWhDO0FBQUEsNkJBQ0UscUVBQUMsdUVBQUQ7QUFDRSxpQkFBUyxFQUFFQyx3REFBTSxDQUFDQyxJQURwQixDQUVFO0FBRkY7QUFHRSxZQUFJLEVBQUVqQixJQUhSO0FBSUUsVUFBRSxFQUFFRixJQUpOO0FBS0UsYUFBSyxFQUFFZ0IsVUFMVDtBQU1FLG1CQUFXLE1BTmI7QUFPRSxjQUFNLEVBQUMsWUFQVDtBQVFFLHFCQUFhLEVBQUVyQixhQVJqQjtBQVNFLGdCQUFRLEVBQUVvQixhQVRaO0FBVUUsMkJBQW1CLEVBQUU7QUFDbkIsd0JBQWM7QUFESyxTQVZ2QjtBQWFFLGlCQUFTLE1BYlg7QUFjRSxvQkFBWSxFQUFDLFFBZGY7QUFlRSxtQkFBVyxFQUFDLFlBZmQ7QUFnQkUsZUFBTyxFQUFDLFFBaEJWO0FBaUJFLGFBQUssRUFBRSxDQUFDLENBQUNkLEtBakJYO0FBa0JFLGtCQUFVLEVBQUVBLEtBQUssR0FBR0EsS0FBSyxDQUFDbUIsT0FBVCxHQUFtQkM7QUFsQnRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMEJELENBdkREOztHQUFNeEIsSTs7S0FBQUEsSTtBQXlEUyxrRkFBQXlCLGtEQUFJLENBQUN6QixJQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzQuNDZkZmM2YjFmNGM1ZTBiODcyOWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvbWl0QnkgZnJvbSAnbG9kYXNoL29taXRCeSc7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgRkMsIG1lbW8sIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuICBLZXlib2FyZERhdGVQaWNrZXIsXHJcbiAgS2V5Ym9hcmREYXRlUGlja2VyUHJvcHMsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuaW1wb3J0IHsgU3R5bGVzUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uRmllbGRUeXBlLCBEYXRlVmFsdWUgfSBmcm9tICdjb21wb25lbnRzL0Zvcm1zL2Zvcm1UeXBlcyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGF0ZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGVUeXBlIGV4dGVuZHMgQ29tbW9uRmllbGRUeXBlIHtcclxuICB0eXBlOiAnZGF0ZSc7XHJcbiAgdmFsdWU/OiBEYXRlVmFsdWUgfCBudWxsO1xyXG59XHJcblxyXG5jb25zdCBkYXRlRm9ybWF0dGVyID0gKHN0cjogc3RyaW5nKTogc3RyaW5nID0+IHtcclxuICByZXR1cm4gc3RyO1xyXG59O1xyXG5cclxuY29uc3QgRGF0ZTogRkM8RGF0ZVR5cGU+ID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBuYW1lLCBlcnJvciwgc2l6ZSA9ICdzbWFsbCcsIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCBbbG9jYWxWYWx1ZSwgc2V0TG9jYWxWYWx1ZV0gPSB1c2VTdGF0ZTxEYXRlVmFsdWUgfCBudWxsPigpO1xyXG5cclxuICBjb25zdCBvbkxvY2FsQ2hhbmdlOiBLZXlib2FyZERhdGVQaWNrZXJQcm9wc1snb25DaGFuZ2UnXSA9IChfdiwgcykgPT4ge1xyXG4gICAgc2V0TG9jYWxWYWx1ZShzKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb250cm9sbGVkT25DaGFuZ2U6IEtleWJvYXJkRGF0ZVBpY2tlclByb3BzWydvbkNoYW5nZSddID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoX3YsIHMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coX3YsIHMpO1xyXG4gICAgICBvbkNoYW5nZSAmJlxyXG4gICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgICAgdmFsdWU6IHMsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtvbkNoYW5nZV1cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRvVXNlOiBLZXlib2FyZERhdGVQaWNrZXJQcm9wc1snb25DaGFuZ2UnXSA9IG9uQ2hhbmdlXHJcbiAgICA/IGNvbnRyb2xsZWRPbkNoYW5nZVxyXG4gICAgOiBvbkxvY2FsQ2hhbmdlO1xyXG4gIGNvbnN0IHZhbHVlVG9Vc2UgPSBvbkNoYW5nZSA/IHZhbHVlIDogbG9jYWxWYWx1ZTtcclxuXHJcbiAgLy8gY29uc29sZS5sb2codmFsdWVUb1VzZSwgbW9tZW50KHZhbHVlVG9Vc2UsICdkZC9NTS95eXl5JykudG9EYXRlKCkpO1xyXG4gIC8vIGNvbnN0IGRhdGUgPSBtb21lbnQodmFsdWVUb1VzZSwgJ2RkL01NL3l5eXknKS50b0RhdGUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZXNQcm92aWRlciBpbmplY3RGaXJzdD5cclxuICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG4gICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9XHJcbiAgICAgICAgICAvLyB7Li4ub21pdEJ5KHByb3BzLCAndHlwZScpfVxyXG4gICAgICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgICAgIGlkPXtuYW1lfVxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlVG9Vc2V9XHJcbiAgICAgICAgICBkaXNhYmxlUGFzdFxyXG4gICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICByaWZtRm9ybWF0dGVyPXtkYXRlRm9ybWF0dGVyfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVG9Vc2V9XHJcbiAgICAgICAgICBLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIGlucHV0VmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImRkL21tL3l5eXlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cImlubGluZVwiXHJcbiAgICAgICAgICBlcnJvcj17ISFlcnJvcn1cclxuICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9yID8gZXJyb3IubWVzc2FnZSA6IHVuZGVmaW5lZH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG4gICAgPC9TdHlsZXNQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhEYXRlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==