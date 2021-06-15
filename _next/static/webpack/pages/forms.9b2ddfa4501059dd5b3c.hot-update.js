webpackHotUpdate_N_E("pages/forms",{

/***/ "./src/appRedux/forms/slices.ts":
/*!**************************************!*\
  !*** ./src/appRedux/forms/slices.ts ***!
  \**************************************/
/*! exports provided: cases */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cases", function() { return cases; });
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var onChangeValue = function onChangeValue(state, action) {
  var _action$payload = action.payload,
      formName = _action$payload.formName,
      key = _action$payload.key,
      value = _action$payload.value;
  state.values[formName] = _objectSpread(_objectSpread({}, state.values[formName] || {}), {}, Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));
};

var onChangeError = function onChangeError(state, action) {
  var _action$payload2 = action.payload,
      formName = _action$payload2.formName,
      key = _action$payload2.key,
      value = _action$payload2.value;
  state.errors[formName] = _objectSpread(_objectSpread({}, state.errors[formName] || {}), {}, Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));
}; // export const onChangeValue =
//   (
//     formName: string,
//     key: string,
//     value: FieldValueType,
//     field?: FieldType,
//     form?: FieldType[],
//     specialField?: Record<string, any>
//   ): DispatchAction =>
//   (dispatch, getState) => {
//     const { forms } = getState();
//     const formsData = forms as FormReducerType;
//     const validateResult = field
//       ? validateFormValue(formName, key, formsData.values, field, form, specialField, { value })
//       : {};
//     dispatch({
//       type: formsTypes.ON_CHANGE_VALUE,
//       payload: {
//         ...validateResult,
//         values: {
//           [formName]: {
//             [key]: value,
//             ...((validateResult.values && validateResult.values[formName]) || {}),
//           },
//         },
//       },
//     });
//   };


var cases = {
  onChangeValue: onChangeValue
};


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcFJlZHV4L2Zvcm1zL3NsaWNlcy50cyJdLCJuYW1lcyI6WyJvbkNoYW5nZVZhbHVlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZm9ybU5hbWUiLCJrZXkiLCJ2YWx1ZSIsInZhbHVlcyIsIm9uQ2hhbmdlRXJyb3IiLCJlcnJvcnMiLCJjYXNlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxJQUFNQSxhQUFrRSxHQUFHLFNBQXJFQSxhQUFxRSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFBQSx3QkFDM0RBLE1BQU0sQ0FBQ0MsT0FEb0Q7QUFBQSxNQUNwRkMsUUFEb0YsbUJBQ3BGQSxRQURvRjtBQUFBLE1BQzFFQyxHQUQwRSxtQkFDMUVBLEdBRDBFO0FBQUEsTUFDckVDLEtBRHFFLG1CQUNyRUEsS0FEcUU7QUFFNUZMLE9BQUssQ0FBQ00sTUFBTixDQUFhSCxRQUFiLG9DQUNNSCxLQUFLLENBQUNNLE1BQU4sQ0FBYUgsUUFBYixLQUEwQixFQURoQywwSkFFR0MsR0FGSCxFQUVTQyxLQUZUO0FBSUQsQ0FORDs7QUFRQSxJQUFNRSxhQUFpRSxHQUFHLFNBQXBFQSxhQUFvRSxDQUFDUCxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFBQSx5QkFDMURBLE1BQU0sQ0FBQ0MsT0FEbUQ7QUFBQSxNQUNuRkMsUUFEbUYsb0JBQ25GQSxRQURtRjtBQUFBLE1BQ3pFQyxHQUR5RSxvQkFDekVBLEdBRHlFO0FBQUEsTUFDcEVDLEtBRG9FLG9CQUNwRUEsS0FEb0U7QUFFM0ZMLE9BQUssQ0FBQ1EsTUFBTixDQUFhTCxRQUFiLG9DQUNNSCxLQUFLLENBQUNRLE1BQU4sQ0FBYUwsUUFBYixLQUEwQixFQURoQywwSkFFR0MsR0FGSCxFQUVTQyxLQUZUO0FBSUQsQ0FORCxDLENBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLElBQU1JLEtBQUssR0FBRztBQUFFVixlQUFhLEVBQWJBO0FBQUYsQ0FBZDtBQUVBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Zvcm1zLjliMmRkZmE0NTAxMDU5ZGQ1YjNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXNlUmVkdWNlciwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgdHlwZSB7IEZpZWxkVmFsdWUsIEVycm9yVmFsdWUgfSBmcm9tICdjb21wb25lbnRzL0Zvcm1zJztcclxuaW1wb3J0IHR5cGUgeyBGb3JtcyB9IGZyb20gJy4vc3RvcmUnO1xyXG5cclxuaW50ZXJmYWNlIENoYW5nZVN0b3JlVmFsdWUge1xyXG4gIGZvcm1OYW1lOiBzdHJpbmc7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgdmFsdWU6IEZpZWxkVmFsdWU7XHJcbiAgLy8gZmllbGQ/OiBGaWVsZFR5cGU7XHJcbiAgLy8gZm9ybT86IEZpZWxkVHlwZVtdO1xyXG4gIHNwZWNpYWxGaWVsZD86IFJlY29yZDxzdHJpbmcsIGFueT47XHJcbn1cclxuXHJcbmludGVyZmFjZSBFcnJvclN0b3JlVmFsdWUge1xyXG4gIGZvcm1OYW1lOiBzdHJpbmc7XHJcbiAga2V5OiBzdHJpbmc7XHJcbiAgdmFsdWU6IEVycm9yVmFsdWU7XHJcbn1cclxuXHJcbmNvbnN0IG9uQ2hhbmdlVmFsdWU6IENhc2VSZWR1Y2VyPEZvcm1zLCBQYXlsb2FkQWN0aW9uPENoYW5nZVN0b3JlVmFsdWU+PiA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgeyBmb3JtTmFtZSwga2V5LCB2YWx1ZSB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgc3RhdGUudmFsdWVzW2Zvcm1OYW1lXSA9IHtcclxuICAgIC4uLihzdGF0ZS52YWx1ZXNbZm9ybU5hbWVdIHx8IHt9KSxcclxuICAgIFtrZXldOiB2YWx1ZSxcclxuICB9O1xyXG59O1xyXG5cclxuY29uc3Qgb25DaGFuZ2VFcnJvcjogQ2FzZVJlZHVjZXI8Rm9ybXMsIFBheWxvYWRBY3Rpb248RXJyb3JTdG9yZVZhbHVlPj4gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgZm9ybU5hbWUsIGtleSwgdmFsdWUgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gIHN0YXRlLmVycm9yc1tmb3JtTmFtZV0gPSB7XHJcbiAgICAuLi4oc3RhdGUuZXJyb3JzW2Zvcm1OYW1lXSB8fCB7fSksXHJcbiAgICBba2V5XTogdmFsdWUsXHJcbiAgfTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBvbkNoYW5nZVZhbHVlID1cclxuLy8gICAoXHJcbi8vICAgICBmb3JtTmFtZTogc3RyaW5nLFxyXG4vLyAgICAga2V5OiBzdHJpbmcsXHJcbi8vICAgICB2YWx1ZTogRmllbGRWYWx1ZVR5cGUsXHJcbi8vICAgICBmaWVsZD86IEZpZWxkVHlwZSxcclxuLy8gICAgIGZvcm0/OiBGaWVsZFR5cGVbXSxcclxuLy8gICAgIHNwZWNpYWxGaWVsZD86IFJlY29yZDxzdHJpbmcsIGFueT5cclxuLy8gICApOiBEaXNwYXRjaEFjdGlvbiA9PlxyXG4vLyAgIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcclxuLy8gICAgIGNvbnN0IHsgZm9ybXMgfSA9IGdldFN0YXRlKCk7XHJcbi8vICAgICBjb25zdCBmb3Jtc0RhdGEgPSBmb3JtcyBhcyBGb3JtUmVkdWNlclR5cGU7XHJcblxyXG4vLyAgICAgY29uc3QgdmFsaWRhdGVSZXN1bHQgPSBmaWVsZFxyXG4vLyAgICAgICA/IHZhbGlkYXRlRm9ybVZhbHVlKGZvcm1OYW1lLCBrZXksIGZvcm1zRGF0YS52YWx1ZXMsIGZpZWxkLCBmb3JtLCBzcGVjaWFsRmllbGQsIHsgdmFsdWUgfSlcclxuLy8gICAgICAgOiB7fTtcclxuXHJcbi8vICAgICBkaXNwYXRjaCh7XHJcbi8vICAgICAgIHR5cGU6IGZvcm1zVHlwZXMuT05fQ0hBTkdFX1ZBTFVFLFxyXG4vLyAgICAgICBwYXlsb2FkOiB7XHJcbi8vICAgICAgICAgLi4udmFsaWRhdGVSZXN1bHQsXHJcbi8vICAgICAgICAgdmFsdWVzOiB7XHJcbi8vICAgICAgICAgICBbZm9ybU5hbWVdOiB7XHJcbi8vICAgICAgICAgICAgIFtrZXldOiB2YWx1ZSxcclxuLy8gICAgICAgICAgICAgLi4uKCh2YWxpZGF0ZVJlc3VsdC52YWx1ZXMgJiYgdmFsaWRhdGVSZXN1bHQudmFsdWVzW2Zvcm1OYW1lXSkgfHwge30pLFxyXG4vLyAgICAgICAgICAgfSxcclxuLy8gICAgICAgICB9LFxyXG4vLyAgICAgICB9LFxyXG4vLyAgICAgfSk7XHJcbi8vICAgfTtcclxuXHJcbmNvbnN0IGNhc2VzID0geyBvbkNoYW5nZVZhbHVlIH07XHJcblxyXG5leHBvcnQgeyBjYXNlcyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9