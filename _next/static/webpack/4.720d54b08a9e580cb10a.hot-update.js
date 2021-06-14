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



var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\Date\\Date.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Date = function Date(_ref) {
  _s();

  var value = _ref.value,
      onChange = _ref.onChange,
      name = _ref.name,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["value", "onChange", "name"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(v) {
    setLocalValue(v);
  };

  var controlledOnChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (v) {
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
    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_3__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_4__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_3__["KeyboardDatePicker"] // {...props}
      , {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRGF0ZS9EYXRlLnRzeCJdLCJuYW1lcyI6WyJEYXRlIiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJwcm9wcyIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJjb25zb2xlIiwibG9nIiwiRGF0ZUZuc1V0aWxzIiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxJQUFhLEdBQUcsU0FBaEJBLElBQWdCLE9BQXlDO0FBQUE7O0FBQUEsTUFBdENDLEtBQXNDLFFBQXRDQSxLQUFzQztBQUFBLE1BQS9CQyxRQUErQixRQUEvQkEsUUFBK0I7QUFBQSxNQUFyQkMsSUFBcUIsUUFBckJBLElBQXFCO0FBQUEsTUFBWkMsS0FBWTs7QUFBQSxrQkFDekJDLHNEQUFRLEVBRGlCO0FBQUEsTUFDdERDLFVBRHNEO0FBQUEsTUFDMUNDLGFBRDBDOztBQUc3RCxNQUFNQyxhQUFtRCxHQUFHLFNBQXREQSxhQUFzRCxDQUFDQyxDQUFELEVBQU87QUFDakVGLGlCQUFhLENBQUNFLENBQUQsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsTUFBTUMsa0JBQWtCLEdBQUdDLHlEQUFXLENBQ3BDLFVBQUNGLENBQUQsRUFBTztBQUNMUCxZQUFRLElBQ05BLFFBQVEsQ0FBQztBQUNQVSxZQUFNLEVBQUU7QUFDTjtBQUNBWCxhQUFLLEVBQUVRO0FBRkQ7QUFERCxLQUFELENBRFY7QUFPRCxHQVRtQyxFQVVwQyxDQUFDUCxRQUFELENBVm9DLENBQXRDO0FBYUEsTUFBTVcsYUFBbUQsR0FBR1gsUUFBUSxHQUNoRVEsa0JBRGdFLEdBRWhFRixhQUZKO0FBR0EsTUFBTU0sVUFBVSxHQUFHWixRQUFRLEdBQUdELEtBQUgsR0FBV0ssVUFBdEM7QUFFQVMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVo7QUFFQTtBQUFBO0FBQ0U7QUFDQSx5RUFBQyw0RUFBRDtBQUF5QixXQUFLLEVBQUVHLHlEQUFoQztBQUFBLDZCQUNFLHFFQUFDLHVFQUFELENBQ0U7QUFERjtBQUVFLFVBQUUsRUFBRWQsSUFGTjtBQUdFLGFBQUssRUFBRVcsVUFIVDtBQUlFLG1CQUFXLE1BSmI7QUFLRSxjQUFNLEVBQUMsWUFMVDtBQU1FLGdCQUFRLEVBQUVELGFBTlo7QUFPRSwyQkFBbUIsRUFBRTtBQUNuQix3QkFBYztBQURLLFNBUHZCO0FBVUUsaUJBQVMsTUFWWDtBQVdFLG9CQUFZLEVBQUMsUUFYZjtBQVlFLG1CQUFXLEVBQUMsWUFaZDtBQWFFLFlBQUksRUFBQyxPQWJQO0FBY0UsZUFBTyxFQUFDLFFBZFYsQ0FlRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsQ0E2QkU7O0FBN0JGO0FBK0JELENBMUREOztHQUFNYixJOztLQUFBQSxJO0FBNERTLGtGQUFBa0Isa0RBQUksQ0FBQ2xCLElBQUQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svNC43MjBkNTRiMDhhOWU1ODBjYjEwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMsIG1lbW8sIHVzZVN0YXRlLCBDaGFuZ2VFdmVudEhhbmRsZXIsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNdWlQaWNrZXJzVXRpbHNQcm92aWRlciwgS2V5Ym9hcmREYXRlUGlja2VyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuaW1wb3J0IHsgU3R5bGVzUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuLy8gaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm1zL1RleHRJbnB1dCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGF0ZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBEYXRlOiBGQzxhbnk+ID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBuYW1lLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgW2xvY2FsVmFsdWUsIHNldExvY2FsVmFsdWVdID0gdXNlU3RhdGU8dHlwZW9mIERhdGU+KCk7XHJcblxyXG4gIGNvbnN0IG9uTG9jYWxDaGFuZ2U6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9ICh2KSA9PiB7XHJcbiAgICBzZXRMb2NhbFZhbHVlKHYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZWRPbkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHYpID0+IHtcclxuICAgICAgb25DaGFuZ2UgJiZcclxuICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICAgIHZhbHVlOiB2LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbb25DaGFuZ2VdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gb25DaGFuZ2VcclxuICAgID8gY29udHJvbGxlZE9uQ2hhbmdlXHJcbiAgICA6IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IG9uQ2hhbmdlID8gdmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICBjb25zb2xlLmxvZyh2YWx1ZVRvVXNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIC8vIDxTdHlsZXNQcm92aWRlciBpbmplY3RGaXJzdD5cclxuICAgIDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxyXG4gICAgICAgIC8vIHsuLi5wcm9wc31cclxuICAgICAgICBpZD17bmFtZX1cclxuICAgICAgICB2YWx1ZT17dmFsdWVUb1VzZX1cclxuICAgICAgICBkaXNhYmxlUGFzdFxyXG4gICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRvVXNlfVxyXG4gICAgICAgIEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIGlucHV0VmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJkZC9tbS95eXl5XCJcclxuICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJpbmxpbmVcIlxyXG4gICAgICAgIC8vIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgLy8gICA8VGV4dElucHV0XHJcbiAgICAgICAgLy8gICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgLy8gICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAvLyAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIC8vICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAvLyAgICAgLy8gc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAvLyAgIC8+XHJcbiAgICAgICAgLy8gKX1cclxuICAgICAgLz5cclxuICAgIDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcbiAgICAvLyA8L1N0eWxlc1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKERhdGUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9