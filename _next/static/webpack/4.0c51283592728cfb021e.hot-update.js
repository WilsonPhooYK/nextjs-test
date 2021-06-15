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
        error: !!error,
        helperText: error ? error.message : undefined,
        onError: function onError(newError) {
          var newErrorString = newError === null || newError === void 0 ? void 0 : newError.toString();
          console.log(newErrorString);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRGF0ZS9EYXRlLnRzeCJdLCJuYW1lcyI6WyJEYXRlIiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJlcnJvciIsInNpemUiLCJmb3JtTmFtZSIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VBcHBEaXNwYXRjaCIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJEYXRlRm5zVXRpbHMiLCJzdHlsZXMiLCJkYXRlIiwib21pdCIsIm1lc3NhZ2UiLCJ1bmRlZmluZWQiLCJuZXdFcnJvciIsIm5ld0Vycm9yU3RyaW5nIiwidG9TdHJpbmciLCJjb25zb2xlIiwibG9nIiwiZm9ybXNBY3Rpb25zIiwib25DaGFuZ2VFcnJvciIsImtleSIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTs7QUFPQSxJQUFNQSxJQUFrQixHQUFHLFNBQXJCQSxJQUFxQixPQVFyQjtBQUFBOztBQUFBLE1BUEpDLEtBT0ksUUFQSkEsS0FPSTtBQUFBLE1BTkpDLFFBTUksUUFOSkEsUUFNSTtBQUFBLE1BTEpDLElBS0ksUUFMSkEsSUFLSTtBQUFBLE1BSkpDLEtBSUksUUFKSkEsS0FJSTtBQUFBLHVCQUhKQyxJQUdJO0FBQUEsTUFISkEsSUFHSSwwQkFIRyxPQUdIO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFEREMsS0FDQzs7QUFDSixNQUFNQyxRQUFRLEdBQUdDLCtEQUFjLEVBQS9COztBQURJLGtCQUVnQ0Msc0RBQVEsRUFGeEM7QUFBQSxNQUVHQyxVQUZIO0FBQUEsTUFFZUMsYUFGZjs7QUFJSixNQUFNQyxhQUFrRCxHQUFHLFNBQXJEQSxhQUFxRCxDQUFDQyxDQUFELEVBQU87QUFDaEVGLGlCQUFhLENBQUNFLENBQUQsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsa0JBQXVELEdBQUdDLHlEQUFXLENBQ3pFLFVBQUNGLENBQUQsRUFBTztBQUNMWixZQUFRLElBQ05BLFFBQVEsQ0FBQztBQUNQZSxZQUFNLEVBQUU7QUFDTjtBQUNBaEIsYUFBSyxFQUFFYTtBQUZEO0FBREQsS0FBRCxDQURWO0FBT0QsR0FUd0UsRUFVekUsQ0FBQ1osUUFBRCxDQVZ5RSxDQUEzRTtBQWFBLE1BQU1nQixhQUFrRCxHQUFHaEIsUUFBUSxHQUMvRGEsa0JBRCtELEdBRS9ERixhQUZKO0FBR0EsTUFBTU0sVUFBVSxHQUFHakIsUUFBUSxHQUFHRCxLQUFILEdBQVdVLFVBQXRDO0FBRUEsc0JBQ0UscUVBQUMsdUVBQUQ7QUFBZ0IsZUFBVyxNQUEzQjtBQUFBLDJCQUNFLHFFQUFDLDRFQUFEO0FBQXlCLFdBQUssRUFBRVMseURBQWhDO0FBQUEsNkJBQ0UscUVBQUMsdUVBQUQ7QUFDRSxpQkFBUyxFQUFFQyx5REFBTSxDQUFDQztBQURwQixTQUVNQyxrREFBSSxDQUFDaEIsS0FBRCxFQUFRLENBQUMsaUJBQUQsRUFBb0Isa0JBQXBCLEVBQXdDLE1BQXhDLENBQVIsQ0FGVjtBQUdFLFlBQUksRUFBRUYsSUFIUjtBQUlFLFVBQUUsRUFBRUYsSUFKTjtBQUtFLGFBQUssRUFBRWdCLFVBTFQ7QUFNRSxtQkFBVyxNQU5iO0FBT0UsY0FBTSxFQUFDLFlBUFQ7QUFRRSxnQkFBUSxFQUFFRCxhQVJaO0FBU0UsMkJBQW1CLEVBQUU7QUFDbkIsd0JBQWM7QUFESyxTQVR2QjtBQVlFLGlCQUFTLE1BWlg7QUFhRSxvQkFBWSxFQUFDLFFBYmY7QUFjRSxtQkFBVyxFQUFDLFlBZGQ7QUFlRSxlQUFPLEVBQUMsUUFmVjtBQWdCRSxhQUFLLEVBQUUsQ0FBQyxDQUFDZCxLQWhCWDtBQWlCRSxrQkFBVSxFQUFFQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ29CLE9BQVQsR0FBbUJDLFNBakJ0QztBQWtCRSxlQUFPLEVBQUUsaUJBQUNDLFFBQUQsRUFBYztBQUNyQixjQUFNQyxjQUFjLEdBQUdELFFBQUgsYUFBR0EsUUFBSCx1QkFBR0EsUUFBUSxDQUFFRSxRQUFWLEVBQXZCO0FBQ0FDLGlCQUFPLENBQUNDLEdBQVIsQ0FBWUgsY0FBWjs7QUFDQSxjQUFJQSxjQUFjLE1BQUt2QixLQUFMLGFBQUtBLEtBQUwsdUJBQUtBLEtBQUssQ0FBRW9CLE9BQVosQ0FBbEIsRUFBdUM7QUFDckNsQixvQkFBUSxJQUNORSxRQUFRLENBQ051QiwyREFBWSxDQUFDQyxhQUFiLENBQTJCO0FBQ3pCMUIsc0JBQVEsRUFBUkEsUUFEeUI7QUFFekIyQixpQkFBRyxFQUFFOUIsSUFGb0I7QUFHekJGLG1CQUFLLEVBQUU7QUFBRXVCLHVCQUFPLEVBQUVHO0FBQVg7QUFIa0IsYUFBM0IsQ0FETSxDQURWO0FBUUQ7QUFDRjtBQS9CSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQXpFRDs7R0FBTTNCLEk7VUFTYVMsdUQ7OztLQVRiVCxJO0FBMkVTLGtGQUFBa0Msa0RBQUksQ0FBQ2xDLElBQUQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svNC4wYzUxMjgzNTkyNzI4Y2ZiMDIxZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9taXQgZnJvbSAnbG9kYXNoL29taXQnO1xyXG5pbXBvcnQgeyBGQywgbWVtbywgdXNlU3RhdGUsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG4gIEtleWJvYXJkRGF0ZVBpY2tlcixcclxuICBLZXlib2FyZERhdGVQaWNrZXJQcm9wcyxcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyBTdHlsZXNQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ2FwcFJlZHV4JztcclxuaW1wb3J0IHsgZm9ybXNBY3Rpb25zIH0gZnJvbSAnYXBwUmVkdXgvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uRmllbGRUeXBlLCBEYXRlVmFsdWUgfSBmcm9tICdjb21wb25lbnRzL0Zvcm1zL2Zvcm1UeXBlcyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGF0ZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGVUeXBlIGV4dGVuZHMgQ29tbW9uRmllbGRUeXBlIHtcclxuICB0eXBlOiAnZGF0ZSc7XHJcbiAgdmFsdWU/OiBEYXRlVmFsdWU7XHJcbn1cclxuXHJcbmNvbnN0IERhdGU6IEZDPERhdGVUeXBlPiA9ICh7XHJcbiAgdmFsdWUsXHJcbiAgb25DaGFuZ2UsXHJcbiAgbmFtZSxcclxuICBlcnJvcixcclxuICBzaXplID0gJ3NtYWxsJyxcclxuICBmb3JtTmFtZSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPERhdGVWYWx1ZSB8IG51bGw+KCk7XHJcblxyXG4gIGNvbnN0IG9uTG9jYWxDaGFuZ2U6IEtleWJvYXJkRGF0ZVBpY2tlclByb3BzWydvbkNoYW5nZSddID0gKHYpID0+IHtcclxuICAgIHNldExvY2FsVmFsdWUodiBhcyB1bmtub3duIGFzIERhdGVWYWx1ZSB8IG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZWRPbkNoYW5nZTogS2V5Ym9hcmREYXRlUGlja2VyUHJvcHNbJ29uQ2hhbmdlJ10gPSB1c2VDYWxsYmFjayhcclxuICAgICh2KSA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlICYmXHJcbiAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBFaXRoZXIgc3RyaW5nIG9yIG51bWJlclxyXG4gICAgICAgICAgICB2YWx1ZTogdixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW29uQ2hhbmdlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVG9Vc2U6IEtleWJvYXJkRGF0ZVBpY2tlclByb3BzWydvbkNoYW5nZSddID0gb25DaGFuZ2VcclxuICAgID8gY29udHJvbGxlZE9uQ2hhbmdlXHJcbiAgICA6IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IG9uQ2hhbmdlID8gdmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlc1Byb3ZpZGVyIGluamVjdEZpcnN0PlxyXG4gICAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcbiAgICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX1cclxuICAgICAgICAgIHsuLi5vbWl0KHByb3BzLCBbJ2FkZGl0aW9uYWxOYW1lcycsICdhZGRpdGlvbmFsVmFsdWVzJywgJ3R5cGUnXSl9XHJcbiAgICAgICAgICBzaXplPXtzaXplfVxyXG4gICAgICAgICAgaWQ9e25hbWV9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWVUb1VzZX1cclxuICAgICAgICAgIGRpc2FibGVQYXN0XHJcbiAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRvVXNlfVxyXG4gICAgICAgICAgS2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICBpbnB1dFZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJkZC9tbS95eXl5XCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgZXJyb3I9eyEhZXJyb3J9XHJcbiAgICAgICAgICBoZWxwZXJUZXh0PXtlcnJvciA/IGVycm9yLm1lc3NhZ2UgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICBvbkVycm9yPXsobmV3RXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3RXJyb3JTdHJpbmcgPSBuZXdFcnJvcj8udG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobmV3RXJyb3JTdHJpbmcpO1xyXG4gICAgICAgICAgICBpZiAobmV3RXJyb3JTdHJpbmcgIT09IGVycm9yPy5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgZm9ybU5hbWUgJiZcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICBmb3Jtc0FjdGlvbnMub25DaGFuZ2VFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB7IG1lc3NhZ2U6IG5ld0Vycm9yU3RyaW5nIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcbiAgICA8L1N0eWxlc1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKERhdGUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9