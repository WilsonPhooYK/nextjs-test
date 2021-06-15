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
        onError: function onError(error) {
          return formName && dispatch(appRedux_forms__WEBPACK_IMPORTED_MODULE_9__["formsActions"].onChangeError({
            formName: formName,
            key: name,
            value: {
              message: error
            }
          }));
        }
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRGF0ZS9EYXRlLnRzeCJdLCJuYW1lcyI6WyJEYXRlIiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJlcnJvciIsInNpemUiLCJmb3JtTmFtZSIsInByb3BzIiwiZGlzcGF0Y2giLCJ1c2VBcHBEaXNwYXRjaCIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJEYXRlRm5zVXRpbHMiLCJzdHlsZXMiLCJkYXRlIiwib21pdCIsIm1lc3NhZ2UiLCJ1bmRlZmluZWQiLCJmb3Jtc0FjdGlvbnMiLCJvbkNoYW5nZUVycm9yIiwia2V5IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUlBOztBQU9BLElBQU1BLElBQWtCLEdBQUcsU0FBckJBLElBQXFCLE9BUXJCO0FBQUE7O0FBQUEsTUFQSkMsS0FPSSxRQVBKQSxLQU9JO0FBQUEsTUFOSkMsUUFNSSxRQU5KQSxRQU1JO0FBQUEsTUFMSkMsSUFLSSxRQUxKQSxJQUtJO0FBQUEsTUFKSkMsS0FJSSxRQUpKQSxLQUlJO0FBQUEsdUJBSEpDLElBR0k7QUFBQSxNQUhKQSxJQUdJLDBCQUhHLE9BR0g7QUFBQSxNQUZKQyxRQUVJLFFBRkpBLFFBRUk7QUFBQSxNQUREQyxLQUNDOztBQUNKLE1BQU1DLFFBQVEsR0FBR0MsK0RBQWMsRUFBL0I7O0FBREksa0JBRWdDQyxzREFBUSxFQUZ4QztBQUFBLE1BRUdDLFVBRkg7QUFBQSxNQUVlQyxhQUZmOztBQUlKLE1BQU1DLGFBQWtELEdBQUcsU0FBckRBLGFBQXFELENBQUNDLENBQUQsRUFBTztBQUNoRUYsaUJBQWEsQ0FBQ0UsQ0FBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxrQkFBdUQsR0FBR0MseURBQVcsQ0FDekUsVUFBQ0YsQ0FBRCxFQUFPO0FBQ0xaLFlBQVEsSUFDTkEsUUFBUSxDQUFDO0FBQ1BlLFlBQU0sRUFBRTtBQUNOO0FBQ0FoQixhQUFLLEVBQUVhO0FBRkQ7QUFERCxLQUFELENBRFY7QUFPRCxHQVR3RSxFQVV6RSxDQUFDWixRQUFELENBVnlFLENBQTNFO0FBYUEsTUFBTWdCLGFBQWtELEdBQUdoQixRQUFRLEdBQy9EYSxrQkFEK0QsR0FFL0RGLGFBRko7QUFHQSxNQUFNTSxVQUFVLEdBQUdqQixRQUFRLEdBQUdELEtBQUgsR0FBV1UsVUFBdEM7QUFFQSxzQkFDRSxxRUFBQyx1RUFBRDtBQUFnQixlQUFXLE1BQTNCO0FBQUEsMkJBQ0UscUVBQUMsNEVBQUQ7QUFBeUIsV0FBSyxFQUFFUyx5REFBaEM7QUFBQSw2QkFDRSxxRUFBQyx1RUFBRDtBQUNFLGlCQUFTLEVBQUVDLHlEQUFNLENBQUNDO0FBRHBCLFNBRU1DLGtEQUFJLENBQUNoQixLQUFELEVBQVEsQ0FBQyxpQkFBRCxFQUFvQixrQkFBcEIsRUFBd0MsTUFBeEMsQ0FBUixDQUZWO0FBR0UsWUFBSSxFQUFFRixJQUhSO0FBSUUsVUFBRSxFQUFFRixJQUpOO0FBS0UsYUFBSyxFQUFFZ0IsVUFMVDtBQU1FLG1CQUFXLE1BTmI7QUFPRSxjQUFNLEVBQUMsWUFQVDtBQVFFLGdCQUFRLEVBQUVELGFBUlo7QUFTRSwyQkFBbUIsRUFBRTtBQUNuQix3QkFBYztBQURLLFNBVHZCO0FBWUUsaUJBQVMsTUFaWDtBQWFFLG9CQUFZLEVBQUMsUUFiZjtBQWNFLG1CQUFXLEVBQUMsWUFkZDtBQWVFLGVBQU8sRUFBQyxRQWZWO0FBZ0JFLGFBQUssRUFBRSxDQUFDLENBQUNkLEtBaEJYO0FBaUJFLGtCQUFVLEVBQUVBLEtBQUssR0FBR0EsS0FBSyxDQUFDb0IsT0FBVCxHQUFtQkMsU0FqQnRDO0FBa0JFLGVBQU8sRUFBRSxpQkFBQ3JCLEtBQUQ7QUFBQSxpQkFDUEUsUUFBUSxJQUNSRSxRQUFRLENBQUNrQiwyREFBWSxDQUFDQyxhQUFiLENBQTJCO0FBQUVyQixvQkFBUSxFQUFSQSxRQUFGO0FBQVlzQixlQUFHLEVBQUV6QixJQUFqQjtBQUF1QkYsaUJBQUssRUFBRTtBQUFFdUIscUJBQU8sRUFBRXBCO0FBQVg7QUFBOUIsV0FBM0IsQ0FBRCxDQUZEO0FBQUE7QUFsQlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE2QkQsQ0EvREQ7O0dBQU1KLEk7VUFTYVMsdUQ7OztLQVRiVCxJO0FBaUVTLGtGQUFBNkIsa0RBQUksQ0FBQzdCLElBQUQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svNC4yNzgwZWQ0ZDZmODRlYjgxMTgzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gvb21pdCc7XHJcbmltcG9ydCB7IEZDLCBtZW1vLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcbiAgS2V5Ym9hcmREYXRlUGlja2VyLFxyXG4gIEtleWJvYXJkRGF0ZVBpY2tlclByb3BzLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XHJcbmltcG9ydCB7IFN0eWxlc1Byb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnYXBwUmVkdXgnO1xyXG5pbXBvcnQgeyBmb3Jtc0FjdGlvbnMgfSBmcm9tICdhcHBSZWR1eC9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBDb21tb25GaWVsZFR5cGUsIERhdGVWYWx1ZSB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvZm9ybVR5cGVzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9EYXRlLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZVR5cGUgZXh0ZW5kcyBDb21tb25GaWVsZFR5cGUge1xyXG4gIHR5cGU6ICdkYXRlJztcclxuICB2YWx1ZT86IERhdGVWYWx1ZTtcclxufVxyXG5cclxuY29uc3QgRGF0ZTogRkM8RGF0ZVR5cGU+ID0gKHtcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICBuYW1lLFxyXG4gIGVycm9yLFxyXG4gIHNpemUgPSAnc21hbGwnLFxyXG4gIGZvcm1OYW1lLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3QgW2xvY2FsVmFsdWUsIHNldExvY2FsVmFsdWVdID0gdXNlU3RhdGU8RGF0ZVZhbHVlIHwgbnVsbD4oKTtcclxuXHJcbiAgY29uc3Qgb25Mb2NhbENoYW5nZTogS2V5Ym9hcmREYXRlUGlja2VyUHJvcHNbJ29uQ2hhbmdlJ10gPSAodikgPT4ge1xyXG4gICAgc2V0TG9jYWxWYWx1ZSh2IGFzIHVua25vd24gYXMgRGF0ZVZhbHVlIHwgbnVsbCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udHJvbGxlZE9uQ2hhbmdlOiBLZXlib2FyZERhdGVQaWNrZXJQcm9wc1snb25DaGFuZ2UnXSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHYpID0+IHtcclxuICAgICAgb25DaGFuZ2UgJiZcclxuICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICAgIHZhbHVlOiB2LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbb25DaGFuZ2VdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZTogS2V5Ym9hcmREYXRlUGlja2VyUHJvcHNbJ29uQ2hhbmdlJ10gPSBvbkNoYW5nZVxyXG4gICAgPyBjb250cm9sbGVkT25DaGFuZ2VcclxuICAgIDogb25Mb2NhbENoYW5nZTtcclxuICBjb25zdCB2YWx1ZVRvVXNlID0gb25DaGFuZ2UgPyB2YWx1ZSA6IGxvY2FsVmFsdWU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVzUHJvdmlkZXIgaW5qZWN0Rmlyc3Q+XHJcbiAgICAgIDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuICAgICAgICA8S2V5Ym9hcmREYXRlUGlja2VyXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRlfVxyXG4gICAgICAgICAgey4uLm9taXQocHJvcHMsIFsnYWRkaXRpb25hbE5hbWVzJywgJ2FkZGl0aW9uYWxWYWx1ZXMnLCAndHlwZSddKX1cclxuICAgICAgICAgIHNpemU9e3NpemV9XHJcbiAgICAgICAgICBpZD17bmFtZX1cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZVRvVXNlfVxyXG4gICAgICAgICAgZGlzYWJsZVBhc3RcclxuICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVG9Vc2V9XHJcbiAgICAgICAgICBLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIGlucHV0VmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImRkL21tL3l5eXlcIlxyXG4gICAgICAgICAgdmFyaWFudD1cImlubGluZVwiXHJcbiAgICAgICAgICBlcnJvcj17ISFlcnJvcn1cclxuICAgICAgICAgIGhlbHBlclRleHQ9e2Vycm9yID8gZXJyb3IubWVzc2FnZSA6IHVuZGVmaW5lZH1cclxuICAgICAgICAgIG9uRXJyb3I9eyhlcnJvcikgPT5cclxuICAgICAgICAgICAgZm9ybU5hbWUgJiZcclxuICAgICAgICAgICAgZGlzcGF0Y2goZm9ybXNBY3Rpb25zLm9uQ2hhbmdlRXJyb3IoeyBmb3JtTmFtZSwga2V5OiBuYW1lLCB2YWx1ZTogeyBtZXNzYWdlOiBlcnJvciB9IH0pKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcbiAgICA8L1N0eWxlc1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKERhdGUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9