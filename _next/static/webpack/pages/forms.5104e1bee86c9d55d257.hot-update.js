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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcFJlZHV4L2Zvcm1zL3NsaWNlcy50cyJdLCJuYW1lcyI6WyJvbkNoYW5nZVZhbHVlIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZm9ybU5hbWUiLCJrZXkiLCJ2YWx1ZSIsInZhbHVlcyIsIm9uQ2hhbmdlRXJyb3IiLCJlcnJvcnMiLCJtZXNzYWdlIiwidW5kZWZpbmVkIiwiY2FzZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkEsSUFBTUEsYUFBa0UsR0FBRyxTQUFyRUEsYUFBcUUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQUEsd0JBQzNEQSxNQUFNLENBQUNDLE9BRG9EO0FBQUEsTUFDcEZDLFFBRG9GLG1CQUNwRkEsUUFEb0Y7QUFBQSxNQUMxRUMsR0FEMEUsbUJBQzFFQSxHQUQwRTtBQUFBLE1BQ3JFQyxLQURxRSxtQkFDckVBLEtBRHFFO0FBRTVGTCxPQUFLLENBQUNNLE1BQU4sQ0FBYUgsUUFBYixvQ0FDTUgsS0FBSyxDQUFDTSxNQUFOLENBQWFILFFBQWIsS0FBMEIsRUFEaEMsMEpBRUdDLEdBRkgsRUFFU0MsS0FGVDtBQUlELENBTkQ7O0FBUUEsSUFBTUUsYUFBaUUsR0FBRyxTQUFwRUEsYUFBb0UsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQUEseUJBQzFEQSxNQUFNLENBQUNDLE9BRG1EO0FBQUEsTUFDbkZDLFFBRG1GLG9CQUNuRkEsUUFEbUY7QUFBQSxNQUN6RUMsR0FEeUUsb0JBQ3pFQSxHQUR5RTtBQUFBLE1BQ3BFQyxLQURvRSxvQkFDcEVBLEtBRG9FO0FBRTNGTCxPQUFLLENBQUNRLE1BQU4sQ0FBYUwsUUFBYixvQ0FDTUgsS0FBSyxDQUFDUSxNQUFOLENBQWFMLFFBQWIsS0FBMEIsRUFEaEMsMEpBRUdDLEdBRkgsRUFFU0MsS0FBSyxTQUFMLElBQUFBLEtBQUssV0FBTCxJQUFBQSxLQUFLLENBQUVJLE9BQVAsR0FBaUJKLEtBQWpCLEdBQXlCSyxTQUZsQztBQUlELENBTkQ7O0FBUUEsSUFBTUMsS0FBSyxHQUFHO0FBQUVaLGVBQWEsRUFBYkEsYUFBRjtBQUFpQlEsZUFBYSxFQUFiQTtBQUFqQixDQUFkO0FBRUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9ybXMuNTEwNGUxYmVlODZjOWQ1NWQyNTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhc2VSZWR1Y2VyLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB0eXBlIHsgRmllbGRWYWx1ZSwgRXJyb3JWYWx1ZSB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMnO1xyXG5pbXBvcnQgdHlwZSB7IEZvcm1zIH0gZnJvbSAnLi9zdG9yZSc7XHJcblxyXG5pbnRlcmZhY2UgQ2hhbmdlU3RvcmVWYWx1ZSB7XHJcbiAgZm9ybU5hbWU6IHN0cmluZztcclxuICBrZXk6IHN0cmluZztcclxuICB2YWx1ZTogRmllbGRWYWx1ZTtcclxuICAvLyBmaWVsZD86IEZpZWxkVHlwZTtcclxuICAvLyBmb3JtPzogRmllbGRUeXBlW107XHJcbiAgc3BlY2lhbEZpZWxkPzogUmVjb3JkPHN0cmluZywgYW55PjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEVycm9yU3RvcmVWYWx1ZSB7XHJcbiAgZm9ybU5hbWU6IHN0cmluZztcclxuICBrZXk6IHN0cmluZztcclxuICB2YWx1ZTogRXJyb3JWYWx1ZTtcclxufVxyXG5cclxuY29uc3Qgb25DaGFuZ2VWYWx1ZTogQ2FzZVJlZHVjZXI8Rm9ybXMsIFBheWxvYWRBY3Rpb248Q2hhbmdlU3RvcmVWYWx1ZT4+ID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7IGZvcm1OYW1lLCBrZXksIHZhbHVlIH0gPSBhY3Rpb24ucGF5bG9hZDtcclxuICBzdGF0ZS52YWx1ZXNbZm9ybU5hbWVdID0ge1xyXG4gICAgLi4uKHN0YXRlLnZhbHVlc1tmb3JtTmFtZV0gfHwge30pLFxyXG4gICAgW2tleV06IHZhbHVlLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBvbkNoYW5nZUVycm9yOiBDYXNlUmVkdWNlcjxGb3JtcywgUGF5bG9hZEFjdGlvbjxFcnJvclN0b3JlVmFsdWU+PiA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgeyBmb3JtTmFtZSwga2V5LCB2YWx1ZSB9ID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgc3RhdGUuZXJyb3JzW2Zvcm1OYW1lXSA9IHtcclxuICAgIC4uLihzdGF0ZS5lcnJvcnNbZm9ybU5hbWVdIHx8IHt9KSxcclxuICAgIFtrZXldOiB2YWx1ZT8ubWVzc2FnZSA/IHZhbHVlIDogdW5kZWZpbmVkLFxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBjYXNlcyA9IHsgb25DaGFuZ2VWYWx1ZSwgb25DaGFuZ2VFcnJvciB9O1xyXG5cclxuZXhwb3J0IHsgY2FzZXMgfTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==