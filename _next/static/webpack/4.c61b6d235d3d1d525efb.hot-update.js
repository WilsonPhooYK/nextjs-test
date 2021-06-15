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
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var appRedux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! appRedux */ "./src/appRedux/index.ts");
/* harmony import */ var appRedux_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! appRedux/forms */ "./src/appRedux/forms/index.ts");
/* harmony import */ var _Date_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Date.module.scss */ "./src/components/Forms/Date/Date.module.scss");
/* harmony import */ var _Date_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Date_module_scss__WEBPACK_IMPORTED_MODULE_10__);




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
      error = _ref.error,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      formName = _ref.formName,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["value", "onChange", "name", "error", "size", "formName"]);

  var dispatch = Object(appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(v) {
    setLocalValue(v);
  };

  var controlledOnChange = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (v) {
    onChange && onChange({
      target: {
        // @ts-expect-error - Either string or number
        value: v
      }
    });
  }, [onChange]);
  var onChangeToUse = onChange ? controlledOnChange : onLocalChange;
  var valueToUse = onChange ? value : localValue;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["StylesProvider"], {
    injectFirst: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_6__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_5__["KeyboardDatePicker"], _objectSpread(_objectSpread({
        className: _Date_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.date
      }, lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(props, ['additionalNames', 'additionalValues', 'type'])), {}, {
        size: size,
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
        variant: "inline",
        error: !!(error !== null && error !== void 0 && error.message),
        helperText: error ? error.message : undefined,
        onError: function onError(newError) {
          var newErrorString = newError === null || newError === void 0 ? void 0 : newError.toString();
          console.log(newErrorString, error);

          if (newErrorString !== (error === null || error === void 0 ? void 0 : error.message)) {
            formName && dispatch(appRedux_forms__WEBPACK_IMPORTED_MODULE_9__["formsActions"].onChangeError({
              formName: formName,
              key: name,
              value: {
                message: newErrorString
              }
            }));
          }
        }
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, _this);
};

_s(Date, "KajWPKHjsGb81DcMit0koHFh3sI=", false, function () {
  return [appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppDispatch"]];
});

_c = Date;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(Date));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRGF0ZS9EYXRlLnRzeCJdLCJuYW1lcyI6WyJEYXRlIiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJlcnJvciIsInNpemUiLCJmb3JtTmFtZSIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VBcHBEaXNwYXRjaCIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJEYXRlRm5zVXRpbHMiLCJzdHlsZXMiLCJkYXRlIiwib21pdCIsIm1lc3NhZ2UiLCJ1bmRlZmluZWQiLCJuZXdFcnJvciIsIm5ld0Vycm9yU3RyaW5nIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZm9ybXNBY3Rpb25zIiwib25DaGFuZ2VFcnJvciIsImtleSIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTs7QUFPQSxJQUFNQSxJQUFrQixHQUFHLFNBQXJCQSxJQUFxQixPQVFyQjtBQUFBOztBQUFBLE1BUEpDLEtBT0ksUUFQSkEsS0FPSTtBQUFBLE1BTkpDLFFBTUksUUFOSkEsUUFNSTtBQUFBLE1BTEpDLElBS0ksUUFMSkEsSUFLSTtBQUFBLE1BSkpDLEtBSUksUUFKSkEsS0FJSTtBQUFBLHVCQUhKQyxJQUdJO0FBQUEsTUFISkEsSUFHSSwwQkFIRyxPQUdIO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFDSixNQUFNQyxRQUFRLEdBQUdDLCtEQUFjLEVBQS9COztBQURJLGtCQUVnQ0Msc0RBQVEsRUFGeEM7QUFBQSxNQUVHQyxVQUZIO0FBQUEsTUFFZUMsYUFGZjs7QUFJSixNQUFNQyxhQUFrRCxHQUFHLFNBQXJEQSxhQUFxRCxDQUFDQyxDQUFELEVBQU87QUFDaEVGLGlCQUFhLENBQUNFLENBQUQsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsa0JBQXVELEdBQUdDLHlEQUFXLENBQ3pFLFVBQUNGLENBQUQsRUFBTztBQUNMWixZQUFRLElBQ05BLFFBQVEsQ0FBQztBQUNQZSxZQUFNLEVBQUU7QUFDTjtBQUNBaEIsYUFBSyxFQUFFYTtBQUZEO0FBREQsS0FBRCxDQURWO0FBT0QsR0FUd0UsRUFVekUsQ0FBQ1osUUFBRCxDQVZ5RSxDQUEzRTtBQWFBLE1BQU1nQixhQUFrRCxHQUFHaEIsUUFBUSxHQUMvRGEsa0JBRCtELEdBRS9ERixhQUZKO0FBR0EsTUFBTU0sVUFBVSxHQUFHakIsUUFBUSxHQUFHRCxLQUFILEdBQVdVLFVBQXRDO0FBRUEsc0JBQ0UscUVBQUMsdUVBQUQ7QUFBZ0IsZUFBVyxNQUEzQjtBQUFBLDJCQUNFLHFFQUFDLDRFQUFEO0FBQXlCLFdBQUssRUFBRVMseURBQWhDO0FBQUEsNkJBQ0UscUVBQUMsdUVBQUQ7QUFDRSxpQkFBUyxFQUFFQyx5REFBTSxDQUFDQztBQURwQixTQUVNQyxrREFBSSxDQUFDaEIsS0FBRCxFQUFRLENBQUMsaUJBQUQsRUFBb0Isa0JBQXBCLEVBQXdDLE1BQXhDLENBQVIsQ0FGVjtBQUdFLFlBQUksRUFBRUYsSUFIUjtBQUlFLFVBQUUsRUFBRUYsSUFKTjtBQUtFLGFBQUssRUFBRWdCLFVBTFQ7QUFNRSxtQkFBVyxNQU5iO0FBT0UsY0FBTSxFQUFDLFlBUFQ7QUFRRSxnQkFBUSxFQUFFRCxhQVJaO0FBU0UsMkJBQW1CLEVBQUU7QUFDbkIsd0JBQWM7QUFESyxTQVR2QjtBQVlFLGlCQUFTLE1BWlg7QUFhRSxvQkFBWSxFQUFDLFFBYmY7QUFjRSxtQkFBVyxFQUFDLFlBZGQ7QUFlRSxlQUFPLEVBQUMsUUFmVjtBQWdCRSxhQUFLLEVBQUUsQ0FBQyxFQUFDZCxLQUFELGFBQUNBLEtBQUQsZUFBQ0EsS0FBSyxDQUFFb0IsT0FBUixDQWhCVjtBQWlCRSxrQkFBVSxFQUFFcEIsS0FBSyxHQUFHQSxLQUFLLENBQUNvQixPQUFULEdBQW1CQyxTQWpCdEM7QUFrQkUsZUFBTyxFQUFFLGlCQUFDQyxRQUFELEVBQWM7QUFDckIsY0FBTUMsY0FBYyxHQUFHRCxRQUFILGFBQUdBLFFBQUgsdUJBQUdBLFFBQVEsQ0FBRUUsUUFBVixFQUF2QjtBQUNBQyxpQkFBTyxDQUFDQyxHQUFSLENBQVlILGNBQVosRUFBNEJ2QixLQUE1Qjs7QUFDQSxjQUFJdUIsY0FBYyxNQUFLdkIsS0FBTCxhQUFLQSxLQUFMLHVCQUFLQSxLQUFLLENBQUVvQixPQUFaLENBQWxCLEVBQXVDO0FBQ3JDbEIsb0JBQVEsSUFDTkUsUUFBUSxDQUNOdUIsMkRBQVksQ0FBQ0MsYUFBYixDQUEyQjtBQUN6QjFCLHNCQUFRLEVBQVJBLFFBRHlCO0FBRXpCMkIsaUJBQUcsRUFBRTlCLElBRm9CO0FBR3pCRixtQkFBSyxFQUFFO0FBQUV1Qix1QkFBTyxFQUFFRztBQUFYO0FBSGtCLGFBQTNCLENBRE0sQ0FEVjtBQVFEO0FBQ0Y7QUEvQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1Q0QsQ0F6RUQ7O0dBQU0zQixJO1VBU2FTLHVEOzs7S0FUYlQsSTtBQTJFUyxrRkFBQWtDLGtEQUFJLENBQUNsQyxJQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzQuYzYxYjZkMjM1ZDNkMWQ1MjVlZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC9vbWl0JztcclxuaW1wb3J0IHsgRkMsIG1lbW8sIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuICBLZXlib2FyZERhdGVQaWNrZXIsXHJcbiAgS2V5Ym9hcmREYXRlUGlja2VyUHJvcHMsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuaW1wb3J0IHsgU3R5bGVzUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdhcHBSZWR1eCc7XHJcbmltcG9ydCB7IGZvcm1zQWN0aW9ucyB9IGZyb20gJ2FwcFJlZHV4L2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IENvbW1vbkZpZWxkVHlwZSwgRGF0ZVZhbHVlIH0gZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9mb3JtVHlwZXMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RhdGUubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlVHlwZSBleHRlbmRzIENvbW1vbkZpZWxkVHlwZSB7XHJcbiAgdHlwZTogJ2RhdGUnO1xyXG4gIHZhbHVlPzogRGF0ZVZhbHVlO1xyXG59XHJcblxyXG5jb25zdCBEYXRlOiBGQzxEYXRlVHlwZT4gPSAoe1xyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIG5hbWUsXHJcbiAgZXJyb3IsXHJcbiAgc2l6ZSA9ICdzbWFsbCcsXHJcbiAgZm9ybU5hbWUsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICBjb25zdCBbbG9jYWxWYWx1ZSwgc2V0TG9jYWxWYWx1ZV0gPSB1c2VTdGF0ZTxEYXRlVmFsdWUgfCBudWxsPigpO1xyXG5cclxuICBjb25zdCBvbkxvY2FsQ2hhbmdlOiBLZXlib2FyZERhdGVQaWNrZXJQcm9wc1snb25DaGFuZ2UnXSA9ICh2KSA9PiB7XHJcbiAgICBzZXRMb2NhbFZhbHVlKHYgYXMgdW5rbm93biBhcyBEYXRlVmFsdWUgfCBudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb250cm9sbGVkT25DaGFuZ2U6IEtleWJvYXJkRGF0ZVBpY2tlclByb3BzWydvbkNoYW5nZSddID0gdXNlQ2FsbGJhY2soXHJcbiAgICAodikgPT4ge1xyXG4gICAgICBvbkNoYW5nZSAmJlxyXG4gICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgICAgdmFsdWU6IHYsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtvbkNoYW5nZV1cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRvVXNlOiBLZXlib2FyZERhdGVQaWNrZXJQcm9wc1snb25DaGFuZ2UnXSA9IG9uQ2hhbmdlXHJcbiAgICA/IGNvbnRyb2xsZWRPbkNoYW5nZVxyXG4gICAgOiBvbkxvY2FsQ2hhbmdlO1xyXG4gIGNvbnN0IHZhbHVlVG9Vc2UgPSBvbkNoYW5nZSA/IHZhbHVlIDogbG9jYWxWYWx1ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZXNQcm92aWRlciBpbmplY3RGaXJzdD5cclxuICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG4gICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9XHJcbiAgICAgICAgICB7Li4ub21pdChwcm9wcywgWydhZGRpdGlvbmFsTmFtZXMnLCAnYWRkaXRpb25hbFZhbHVlcycsICd0eXBlJ10pfVxyXG4gICAgICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgICAgIGlkPXtuYW1lfVxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlVG9Vc2V9XHJcbiAgICAgICAgICBkaXNhYmxlUGFzdFxyXG4gICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUb1VzZX1cclxuICAgICAgICAgIEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgaW5wdXRWYXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZGQvbW0veXl5eVwiXHJcbiAgICAgICAgICB2YXJpYW50PVwiaW5saW5lXCJcclxuICAgICAgICAgIGVycm9yPXshIWVycm9yPy5tZXNzYWdlfVxyXG4gICAgICAgICAgaGVscGVyVGV4dD17ZXJyb3IgPyBlcnJvci5tZXNzYWdlIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgb25FcnJvcj17KG5ld0Vycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0Vycm9yU3RyaW5nID0gbmV3RXJyb3I/LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0Vycm9yU3RyaW5nLCBlcnJvcik7XHJcbiAgICAgICAgICAgIGlmIChuZXdFcnJvclN0cmluZyAhPT0gZXJyb3I/Lm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICBmb3JtTmFtZSAmJlxyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1zQWN0aW9ucy5vbkNoYW5nZUVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICBmb3JtTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHsgbWVzc2FnZTogbmV3RXJyb3JTdHJpbmcgfSxcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuICAgIDwvU3R5bGVzUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oRGF0ZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=