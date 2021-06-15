webpackHotUpdate_N_E("pages/_app",{

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
  state.errors[formName] = _objectSpread(_objectSpread({}, state.errors[formName] || {}), {}, Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value !== null && value !== void 0 && value.message ? value : undefined));
};

var cases = {
  onChangeValue: onChangeValue,
  onChangeError: onChangeError
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcFJlZHV4L2Zvcm1zL3NsaWNlcy50cyJdLCJuYW1lcyI6WyJvbkNoYW5nZVZhbHVlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZm9ybU5hbWUiLCJrZXkiLCJ2YWx1ZSIsInZhbHVlcyIsIm9uQ2hhbmdlRXJyb3IiLCJlcnJvcnMiLCJtZXNzYWdlIiwidW5kZWZpbmVkIiwiY2FzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsSUFBTUEsYUFBa0UsR0FBRyxTQUFyRUEsYUFBcUUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQUEsd0JBQzNEQSxNQUFNLENBQUNDLE9BRG9EO0FBQUEsTUFDcEZDLFFBRG9GLG1CQUNwRkEsUUFEb0Y7QUFBQSxNQUMxRUMsR0FEMEUsbUJBQzFFQSxHQUQwRTtBQUFBLE1BQ3JFQyxLQURxRSxtQkFDckVBLEtBRHFFO0FBRTVGTCxPQUFLLENBQUNNLE1BQU4sQ0FBYUgsUUFBYixvQ0FDTUgsS0FBSyxDQUFDTSxNQUFOLENBQWFILFFBQWIsS0FBMEIsRUFEaEMsMEpBRUdDLEdBRkgsRUFFU0MsS0FGVDtBQUlELENBTkQ7O0FBUUEsSUFBTUUsYUFBaUUsR0FBRyxTQUFwRUEsYUFBb0UsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQUEseUJBQzFEQSxNQUFNLENBQUNDLE9BRG1EO0FBQUEsTUFDbkZDLFFBRG1GLG9CQUNuRkEsUUFEbUY7QUFBQSxNQUN6RUMsR0FEeUUsb0JBQ3pFQSxHQUR5RTtBQUFBLE1BQ3BFQyxLQURvRSxvQkFDcEVBLEtBRG9FO0FBRTNGTCxPQUFLLENBQUNRLE1BQU4sQ0FBYUwsUUFBYixvQ0FDTUgsS0FBSyxDQUFDUSxNQUFOLENBQWFMLFFBQWIsS0FBMEIsRUFEaEMsMEpBRUdDLEdBRkgsRUFFU0MsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxJQUFBQSxLQUFLLENBQUVJLE9BQVAsR0FBaUJKLEtBQWpCLEdBQXlCSyxTQUZsQztBQUlELENBTkQ7O0FBUUEsSUFBTUMsS0FBSyxHQUFHO0FBQUVaLGVBQWEsRUFBYkEsYUFBRjtBQUFpQlEsZUFBYSxFQUFiQTtBQUFqQixDQUFkO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41MTA0ZTFiZWU4NmM5ZDU1ZDI1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FzZVJlZHVjZXIsIFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcclxuaW1wb3J0IHR5cGUgeyBGaWVsZFZhbHVlLCBFcnJvclZhbHVlIH0gZnJvbSAnY29tcG9uZW50cy9Gb3Jtcyc7XHJcbmltcG9ydCB0eXBlIHsgRm9ybXMgfSBmcm9tICcuL3N0b3JlJztcclxuXHJcbmludGVyZmFjZSBDaGFuZ2VTdG9yZVZhbHVlIHtcclxuICBmb3JtTmFtZTogc3RyaW5nO1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIHZhbHVlOiBGaWVsZFZhbHVlO1xyXG4gIC8vIGZpZWxkPzogRmllbGRUeXBlO1xyXG4gIC8vIGZvcm0/OiBGaWVsZFR5cGVbXTtcclxuICBzcGVjaWFsRmllbGQ/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRXJyb3JTdG9yZVZhbHVlIHtcclxuICBmb3JtTmFtZTogc3RyaW5nO1xyXG4gIGtleTogc3RyaW5nO1xyXG4gIHZhbHVlOiBFcnJvclZhbHVlO1xyXG59XHJcblxyXG5jb25zdCBvbkNoYW5nZVZhbHVlOiBDYXNlUmVkdWNlcjxGb3JtcywgUGF5bG9hZEFjdGlvbjxDaGFuZ2VTdG9yZVZhbHVlPj4gPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIGNvbnN0IHsgZm9ybU5hbWUsIGtleSwgdmFsdWUgfSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gIHN0YXRlLnZhbHVlc1tmb3JtTmFtZV0gPSB7XHJcbiAgICAuLi4oc3RhdGUudmFsdWVzW2Zvcm1OYW1lXSB8fCB7fSksXHJcbiAgICBba2V5XTogdmFsdWUsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IG9uQ2hhbmdlRXJyb3I6IENhc2VSZWR1Y2VyPEZvcm1zLCBQYXlsb2FkQWN0aW9uPEVycm9yU3RvcmVWYWx1ZT4+ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7IGZvcm1OYW1lLCBrZXksIHZhbHVlIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICBzdGF0ZS5lcnJvcnNbZm9ybU5hbWVdID0ge1xyXG4gICAgLi4uKHN0YXRlLmVycm9yc1tmb3JtTmFtZV0gfHwge30pLFxyXG4gICAgW2tleV06IHZhbHVlPy5tZXNzYWdlID8gdmFsdWUgOiB1bmRlZmluZWQsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGNhc2VzID0geyBvbkNoYW5nZVZhbHVlLCBvbkNoYW5nZUVycm9yIH07XHJcblxyXG5leHBvcnQgeyBjYXNlcyB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9