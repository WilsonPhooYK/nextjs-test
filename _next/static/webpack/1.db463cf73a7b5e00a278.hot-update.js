webpackHotUpdate_N_E(1,{

/***/ "./src/components/Forms/TextInput/TextInput.tsx":
/*!******************************************************!*\
  !*** ./src/components/Forms/TextInput/TextInput.tsx ***!
  \******************************************************/
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
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var constants_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! constants/common */ "./src/constants/common.ts");
/* harmony import */ var _TextInput_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./TextInput.module.scss */ "./src/components/Forms/TextInput/TextInput.module.scss");
/* harmony import */ var _TextInput_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_TextInput_module_scss__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\TextInput\\TextInput.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var NumberFormat = next_dynamic__WEBPACK_IMPORTED_MODULE_6___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js")];
    },
    modules: ["..\\components\\Forms\\TextInput\\TextInput.tsx -> " + 'react-number-format']
  }
});
_c2 = NumberFormat;

var NumberFormatCustom = function NumberFormatCustom(_ref) {
  var inputRef = _ref.inputRef,
      type = _ref.type,
      onChange = _ref.onChange,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["inputRef", "type", "onChange"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NumberFormat, _objectSpread(_objectSpread({}, lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(props, 'type')), {}, {
    type: type === 'tel' ? 'tel' : 'text',
    prefix: type === 'currency' ? constants_common__WEBPACK_IMPORTED_MODULE_8__["CURRENCY_PREFIX"] : '',
    format: type === 'tel' ? '#### ####' : undefined,
    thousandSeparator: type === 'currency',
    getInputRef: inputRef,
    onValueChange: function onValueChange(values) {
      onChange && onChange({
        target: {
          value: values.value
        }
      });
    },
    isNumericString: true
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_c3 = NumberFormatCustom;
var MemoNumberFormatCustom = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(NumberFormatCustom);
_c4 = MemoNumberFormatCustom;

var TextInput = function TextInput(_ref2) {
  _s();

  var error = _ref2.error,
      type = _ref2.type,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'small' : _ref2$size,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, ["error", "type", "size"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(v) {
    setLocalValue(v.target.value);
  };

  var onChangeToUse = props.onChange || onLocalChange;
  var valueToUse = props.onChange ? props.value : localValue;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["StylesProvider"], {
    injectFirst: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
      className: [_TextInput_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.textInput, !props.label ? _TextInput_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.noLabel : ''].join(' '),
      InputProps: {
        disableUnderline: true,
        inputComponent: type === 'currency' || type === 'number' || type === 'tel' ? MemoNumberFormatCustom : undefined
      }
    }, lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(props, ['additionalNames', 'additionalValues'])), {}, {
      id: props.name,
      onChange: onChangeToUse,
      value: valueToUse || '',
      type: type === 'textarea' ? 'text' : type,
      error: !!error,
      helperText: error ? error.message : ' ',
      rowsMax: 100,
      variant: "filled",
      fullWidth: true,
      multiline: type === 'textarea',
      size: size
    }), void 0, false, {
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

_s(TextInput, "0cDHC8c7u1K6BAhVsOIxkU84T6E=");

_c5 = TextInput;
/* harmony default export */ __webpack_exports__["default"] = (_c6 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(TextInput));

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "NumberFormat$dynamic");
$RefreshReg$(_c2, "NumberFormat");
$RefreshReg$(_c3, "NumberFormatCustom");
$RefreshReg$(_c4, "MemoNumberFormatCustom");
$RefreshReg$(_c5, "TextInput");
$RefreshReg$(_c6, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvVGV4dElucHV0L1RleHRJbnB1dC50c3giXSwibmFtZXMiOlsiTnVtYmVyRm9ybWF0IiwiZHluYW1pYyIsIk51bWJlckZvcm1hdEN1c3RvbSIsImlucHV0UmVmIiwidHlwZSIsIm9uQ2hhbmdlIiwicHJvcHMiLCJvbWl0IiwiQ1VSUkVOQ1lfUFJFRklYIiwidW5kZWZpbmVkIiwidmFsdWVzIiwidGFyZ2V0IiwidmFsdWUiLCJNZW1vTnVtYmVyRm9ybWF0Q3VzdG9tIiwibWVtbyIsIlRleHRJbnB1dCIsImVycm9yIiwic2l6ZSIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwidiIsIm9uQ2hhbmdlVG9Vc2UiLCJ2YWx1ZVRvVXNlIiwic3R5bGVzIiwidGV4dElucHV0IiwibGFiZWwiLCJub0xhYmVsIiwiam9pbiIsImRpc2FibGVVbmRlcmxpbmUiLCJpbnB1dENvbXBvbmVudCIsIm5hbWUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSw2S0FBTjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQWMsOEZBQWQ7QUFBQTtBQUFBLHNFQUFjLHFCQUFkO0FBQUE7QUFBQSxFQUE1QjtNQUFNRCxZOztBQU9OLElBQU1FLGtCQUFxQyxHQUFHLFNBQXhDQSxrQkFBd0MsT0FBNEM7QUFBQSxNQUF6Q0MsUUFBeUMsUUFBekNBLFFBQXlDO0FBQUEsTUFBL0JDLElBQStCLFFBQS9CQSxJQUErQjtBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFaQyxLQUFZOztBQUN4RixzQkFDRSxxRUFBQyxZQUFELGtDQUNNQyxrREFBSSxD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QSxXQURGO0FBMEJELENBcENEOztHQUFNRixTOztNQUFBQSxTO0FBc0NTLGtGQUFBRCxrREFBSSxDQUFDQyxTQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuZGI0NjNjZjczYTdiNWUwMGEyNzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC9vbWl0JztcclxuaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIEZDLCBtZW1vLCB1c2VTdGF0ZSwgQ2hhbmdlRXZlbnRIYW5kbGVyIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IElucHV0QmFzZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTdHlsZXNQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5pbXBvcnQgeyBDb21tb25GaWVsZFR5cGUsIEJhc2ljRmllbGRWYWx1ZSB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvZm9ybVR5cGVzJztcclxuaW1wb3J0IHsgQ1VSUkVOQ1lfUFJFRklYIH0gZnJvbSAnY29uc3RhbnRzL2NvbW1vbic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dElucHV0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IE51bWJlckZvcm1hdCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1udW1iZXItZm9ybWF0JykpO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0SW5wdXRUeXBlIGV4dGVuZHMgQ29tbW9uRmllbGRUeXBlIHtcclxuICB0eXBlOiAnY3VycmVuY3knIHwgJ3RlbCcgfCAnbnVtYmVyJyB8ICd0ZXh0JyB8ICdwYXNzd29yZCcgfCAnZW1haWwnIHwgJ3RleHRhcmVhJztcclxuICB2YWx1ZT86IEJhc2ljRmllbGRWYWx1ZTtcclxufVxyXG5cclxuY29uc3QgTnVtYmVyRm9ybWF0Q3VzdG9tOiBGQzxUZXh0SW5wdXRUeXBlPiA9ICh7IGlucHV0UmVmLCB0eXBlLCBvbkNoYW5nZSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TnVtYmVyRm9ybWF0XHJcbiAgICAgIHsuLi5vbWl0KHByb3BzLCAndHlwZScpfVxyXG4gICAgICB0eXBlPXt0eXBlID09PSAndGVsJyA/ICd0ZWwnIDogJ3RleHQnfVxyXG4gICAgICBwcmVmaXg9e3R5cGUgPT09ICdjdXJyZW5jeScgPyBDVVJSRU5DWV9QUkVGSVggOiAnJ31cclxuICAgICAgZm9ybWF0PXt0eXBlID09PSAndGVsJyA/ICcjIyMjICMjIyMnIDogdW5kZWZpbmVkfVxyXG4gICAgICB0aG91c2FuZFNlcGFyYXRvcj17dHlwZSA9PT0gJ2N1cnJlbmN5J31cclxuICAgICAgZ2V0SW5wdXRSZWY9e2lucHV0UmVmfVxyXG4gICAgICBvblZhbHVlQ2hhbmdlPXsodmFsdWVzKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2UgJiZcclxuICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlcy52YWx1ZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0gYXMgQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pO1xyXG4gICAgICB9fVxyXG4gICAgICBpc051bWVyaWNTdHJpbmdcclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IE1lbW9OdW1iZXJGb3JtYXRDdXN0b20gPSBtZW1vKE51bWJlckZvcm1hdEN1c3RvbSk7XHJcblxyXG5jb25zdCBUZXh0SW5wdXQ6IEZDPFRleHRJbnB1dFR5cGU+ID0gKHsgZXJyb3IsIHR5cGUsIHNpemUgPSAnc21hbGwnLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgW2xvY2FsVmFsdWUsIHNldExvY2FsVmFsdWVdID0gdXNlU3RhdGU8VGV4dElucHV0VHlwZVsndmFsdWUnXT4oJycpO1xyXG5cclxuICBjb25zdCBvbkxvY2FsQ2hhbmdlOiBDaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAodikgPT4ge1xyXG4gICAgc2V0TG9jYWxWYWx1ZSh2LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gcHJvcHMub25DaGFuZ2UgfHwgb25Mb2NhbENoYW5nZTtcclxuICBjb25zdCB2YWx1ZVRvVXNlID0gcHJvcHMub25DaGFuZ2UgPyBwcm9wcy52YWx1ZSA6IGxvY2FsVmFsdWU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVzUHJvdmlkZXIgaW5qZWN0Rmlyc3Q+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMudGV4dElucHV0LCAhcHJvcHMubGFiZWwgPyBzdHlsZXMubm9MYWJlbCA6ICcnXS5qb2luKCcgJyl9XHJcbiAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgZGlzYWJsZVVuZGVybGluZTogdHJ1ZSxcclxuICAgICAgICAgIGlucHV0Q29tcG9uZW50OlxyXG4gICAgICAgICAgICB0eXBlID09PSAnY3VycmVuY3knIHx8IHR5cGUgPT09ICdudW1iZXInIHx8IHR5cGUgPT09ICd0ZWwnXHJcbiAgICAgICAgICAgICAgPyAoTWVtb051bWJlckZvcm1hdEN1c3RvbSBhcyB1bmtub3duIGFzIEZDPElucHV0QmFzZUNvbXBvbmVudFByb3BzPilcclxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHsuLi5vbWl0KHByb3BzLCBbJ2FkZGl0aW9uYWxOYW1lcycsICdhZGRpdGlvbmFsVmFsdWVzJ10pfVxyXG4gICAgICAgIGlkPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRvVXNlfVxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZVRvVXNlIHx8ICcnfVxyXG4gICAgICAgIHR5cGU9e3R5cGUgPT09ICd0ZXh0YXJlYScgPyAndGV4dCcgOiB0eXBlfVxyXG4gICAgICAgIGVycm9yPXshIWVycm9yfVxyXG4gICAgICAgIGhlbHBlclRleHQ9e2Vycm9yID8gZXJyb3IubWVzc2FnZSA6ICcgJ31cclxuICAgICAgICByb3dzTWF4PXsxMDB9XHJcbiAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgbXVsdGlsaW5lPXt0eXBlID09PSAndGV4dGFyZWEnfVxyXG4gICAgICAgIHNpemU9e3NpemV9XHJcbiAgICAgIC8+XHJcbiAgICA8L1N0eWxlc1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKFRleHRJbnB1dCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=