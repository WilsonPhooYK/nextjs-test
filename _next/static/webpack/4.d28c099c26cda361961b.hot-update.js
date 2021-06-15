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
/* harmony import */ var _Date_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Date.module.scss */ "./src/components/Forms/Date/Date.module.scss");
/* harmony import */ var _Date_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Date_module_scss__WEBPACK_IMPORTED_MODULE_8__);




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
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["value", "onChange", "name", "error", "size"]);

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
        className: _Date_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.date
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
        variant: "inline" // error={!!error}
        // helperText={error ? error.message : undefined}

      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(Date, "/vkIiT5la2oFIhvBfvyuwJ4Fhhk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRGF0ZS9EYXRlLnRzeCJdLCJuYW1lcyI6WyJEYXRlIiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJlcnJvciIsInNpemUiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJEYXRlRm5zVXRpbHMiLCJzdHlsZXMiLCJkYXRlIiwib21pdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFJQTs7QUFPQSxJQUFNQSxJQUFrQixHQUFHLFNBQXJCQSxJQUFxQixPQUFnRTtBQUFBOztBQUFBLE1BQTdEQyxLQUE2RCxRQUE3REEsS0FBNkQ7QUFBQSxNQUF0REMsUUFBc0QsUUFBdERBLFFBQXNEO0FBQUEsTUFBNUNDLElBQTRDLFFBQTVDQSxJQUE0QztBQUFBLE1BQXRDQyxLQUFzQyxRQUF0Q0EsS0FBc0M7QUFBQSx1QkFBL0JDLElBQStCO0FBQUEsTUFBL0JBLElBQStCLDBCQUF4QixPQUF3QjtBQUFBLE1BQVpDLEtBQVk7O0FBQUEsa0JBQ3JEQyxzREFBUSxFQUQ2QztBQUFBLE1BQ2xGQyxVQURrRjtBQUFBLE1BQ3RFQyxhQURzRTs7QUFHekYsTUFBTUMsYUFBa0QsR0FBRyxTQUFyREEsYUFBcUQsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ2hFRixpQkFBYSxDQUFDRSxDQUFELENBQWI7QUFDRCxHQUZEOztBQUlBLE1BQU1DLGtCQUF1RCxHQUFHQyx5REFBVyxDQUN6RSxVQUFDRixDQUFELEVBQU87QUFDTFQsWUFBUSxJQUNOQSxRQUFRLENBQUM7QUFDUFksWUFBTSxFQUFFO0FBQ047QUFDQWIsYUFBSyxFQUFFVTtBQUZEO0FBREQsS0FBRCxDQURWO0FBT0QsR0FUd0UsRUFVekUsQ0FBQ1QsUUFBRCxDQVZ5RSxDQUEzRTtBQWFBLE1BQU1hLGFBQWtELEdBQUdiLFFBQVEsR0FDL0RVLGtCQUQrRCxHQUUvREYsYUFGSjtBQUdBLE1BQU1NLFVBQVUsR0FBR2QsUUFBUSxHQUFHRCxLQUFILEdBQVdPLFVBQXRDO0FBRUEsc0JBQ0UscUVBQUMsdUVBQUQ7QUFBZ0IsZUFBVyxNQUEzQjtBQUFBLDJCQUNFLHFFQUFDLDRFQUFEO0FBQXlCLFdBQUssRUFBRVMseURBQWhDO0FBQUEsNkJBQ0UscUVBQUMsdUVBQUQ7QUFDRSxpQkFBUyxFQUFFQyx3REFBTSxDQUFDQztBQURwQixTQUVNQyxrREFBSSxDQUFDZCxLQUFELEVBQVEsQ0FBQyxpQkFBRCxFQUFvQixrQkFBcEIsRUFBd0MsTUFBeEMsQ0FBUixDQUZWO0FBR0UsWUFBSSxFQUFFRCxJQUhSO0FBSUUsVUFBRSxFQUFFRixJQUpOO0FBS0UsYUFBSyxFQUFFYSxVQUxUO0FBTUUsbUJBQVcsTUFOYjtBQU9FLGNBQU0sRUFBQyxZQVBUO0FBUUUsZ0JBQVEsRUFBRUQsYUFSWjtBQVNFLDJCQUFtQixFQUFFO0FBQ25CLHdCQUFjO0FBREssU0FUdkI7QUFZRSxpQkFBUyxNQVpYO0FBYUUsb0JBQVksRUFBQyxRQWJmO0FBY0UsbUJBQVcsRUFBQyxZQWRkO0FBZUUsZUFBTyxFQUFDLFFBZlYsQ0FnQkU7QUFDQTs7QUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0FsREQ7O0dBQU1mLEk7O0tBQUFBLEk7QUFvRFMsa0ZBQUFxQixrREFBSSxDQUFDckIsSUFBRCxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay80LmQyOGMwOTljMjZjZGEzNjE5NjFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gvb21pdCc7XHJcbmltcG9ydCB7IEZDLCBtZW1vLCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcbiAgS2V5Ym9hcmREYXRlUGlja2VyLFxyXG4gIEtleWJvYXJkRGF0ZVBpY2tlclByb3BzLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XHJcbmltcG9ydCB7IFN0eWxlc1Byb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmltcG9ydCB7IENvbW1vbkZpZWxkVHlwZSwgRGF0ZVZhbHVlIH0gZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9mb3JtVHlwZXMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0RhdGUubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlVHlwZSBleHRlbmRzIENvbW1vbkZpZWxkVHlwZSB7XHJcbiAgdHlwZTogJ2RhdGUnO1xyXG4gIHZhbHVlPzogRGF0ZVZhbHVlO1xyXG59XHJcblxyXG5jb25zdCBEYXRlOiBGQzxEYXRlVHlwZT4gPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIG5hbWUsIGVycm9yLCBzaXplID0gJ3NtYWxsJywgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPERhdGVWYWx1ZSB8IG51bGw+KCk7XHJcblxyXG4gIGNvbnN0IG9uTG9jYWxDaGFuZ2U6IEtleWJvYXJkRGF0ZVBpY2tlclByb3BzWydvbkNoYW5nZSddID0gKHYpID0+IHtcclxuICAgIHNldExvY2FsVmFsdWUodiBhcyB1bmtub3duIGFzIERhdGVWYWx1ZSB8IG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZWRPbkNoYW5nZTogS2V5Ym9hcmREYXRlUGlja2VyUHJvcHNbJ29uQ2hhbmdlJ10gPSB1c2VDYWxsYmFjayhcclxuICAgICh2KSA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlICYmXHJcbiAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBFaXRoZXIgc3RyaW5nIG9yIG51bWJlclxyXG4gICAgICAgICAgICB2YWx1ZTogdixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW29uQ2hhbmdlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVG9Vc2U6IEtleWJvYXJkRGF0ZVBpY2tlclByb3BzWydvbkNoYW5nZSddID0gb25DaGFuZ2VcclxuICAgID8gY29udHJvbGxlZE9uQ2hhbmdlXHJcbiAgICA6IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IG9uQ2hhbmdlID8gdmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlc1Byb3ZpZGVyIGluamVjdEZpcnN0PlxyXG4gICAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcbiAgICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZX1cclxuICAgICAgICAgIHsuLi5vbWl0KHByb3BzLCBbJ2FkZGl0aW9uYWxOYW1lcycsICdhZGRpdGlvbmFsVmFsdWVzJywgJ3R5cGUnXSl9XHJcbiAgICAgICAgICBzaXplPXtzaXplfVxyXG4gICAgICAgICAgaWQ9e25hbWV9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWVUb1VzZX1cclxuICAgICAgICAgIGRpc2FibGVQYXN0XHJcbiAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRvVXNlfVxyXG4gICAgICAgICAgS2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgICAnYXJpYS1sYWJlbCc6ICdjaGFuZ2UgZGF0ZScsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICBpbnB1dFZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJkZC9tbS95eXl5XCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgLy8gZXJyb3I9eyEhZXJyb3J9XHJcbiAgICAgICAgICAvLyBoZWxwZXJUZXh0PXtlcnJvciA/IGVycm9yLm1lc3NhZ2UgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuICAgIDwvU3R5bGVzUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oRGF0ZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=