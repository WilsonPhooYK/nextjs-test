webpackHotUpdate_N_E(2,{

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
      value: valueToUse,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvVGV4dElucHV0L1RleHRJbnB1dC50c3giXSwibmFtZXMiOlsiTnVtYmVyRm9ybWF0IiwiZHluYW1pYyIsIk51bWJlckZvcm1hdEN1c3RvbSIsImlucHV0UmVmIiwidHlwZSIsIm9uQ2hhbmdlIiwicHJvcHMiLCJvbWl0IiwiQ1VSUkVOQ1lfUFJFRklYIiwidW5kZWZpbmVkIiwidmFsdWVzIiwidGFyZ2V0IiwidmFsdWUiLCJNZW1vTnVtYmVyRm9ybWF0Q3VzdG9tIiwibWVtbyIsIlRleHRJbnB1dCIsImVycm9yIiwic2l6ZSIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwidiIsIm9uQ2hhbmdlVG9Vc2UiLCJ2YWx1ZVRvVXNlIiwic3R5bGVzIiwidGV4dElucHV0IiwibGFiZWwiLCJub0xhYmVsIiwiam9pbiIsImRpc2FibGVVbmRlcmxpbmUiLCJpbnB1dENvbXBvbmVudCIsIm5hbWUiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUVBO0FBRUEsSUFBTUEsWUFBWSxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSw2S0FBTjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQWMsOEZBQWQ7QUFBQTtBQUFBLHNFQUFjLHFCQUFkO0FBQUE7QUFBQSxFQUE1QjtNQUFNRCxZOztBQU9OLElBQU1FLGtCQUFxQyxHQUFHLFNBQXhDQSxrQkFBd0MsT0FBNEM7QUFBQSxNQUF6Q0MsUUFBeUMsUUFBekNBLFFBQXlDO0FBQUEsTUFBL0JDLElBQStCLFFBQS9CQSxJQUErQjtBQUFBLE1BQXpCQyxRQUF5QixRQUF6QkEsUUFBeUI7QUFBQSxNQUFaQyxLQUFZOztBQUN4RixzQkFDRSxxRUFBQyxZQUFELGtDQUNNQyxrREFBSSxD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RCxDQXBDRDs7R0FBTUYsUzs7TUFBQUEsUztBQXNDUyxrRkFBQUQsa0RBQUksQ0FBQ0MsU0FBRCxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8yLmY0YzNjNWYzZmMzODEyMzAzMGQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gvb21pdCc7XHJcbmltcG9ydCB7IENoYW5nZUV2ZW50LCBGQywgbWVtbywgdXNlU3RhdGUsIENoYW5nZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgeyBJbnB1dEJhc2VDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgU3R5bGVzUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uRmllbGRUeXBlLCBCYXNpY0ZpZWxkVmFsdWUgfSBmcm9tICdjb21wb25lbnRzL0Zvcm1zL2Zvcm1UeXBlcyc7XHJcbmltcG9ydCB7IENVUlJFTkNZX1BSRUZJWCB9IGZyb20gJ2NvbnN0YW50cy9jb21tb24nO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRJbnB1dC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBOdW1iZXJGb3JtYXQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtbnVtYmVyLWZvcm1hdCcpKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dElucHV0VHlwZSBleHRlbmRzIENvbW1vbkZpZWxkVHlwZSB7XHJcbiAgdHlwZTogJ2N1cnJlbmN5JyB8ICd0ZWwnIHwgJ251bWJlcicgfCAndGV4dCcgfCAncGFzc3dvcmQnIHwgJ2VtYWlsJyB8ICd0ZXh0YXJlYSc7XHJcbiAgdmFsdWU/OiBCYXNpY0ZpZWxkVmFsdWU7XHJcbn1cclxuXHJcbmNvbnN0IE51bWJlckZvcm1hdEN1c3RvbTogRkM8VGV4dElucHV0VHlwZT4gPSAoeyBpbnB1dFJlZiwgdHlwZSwgb25DaGFuZ2UsIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE51bWJlckZvcm1hdFxyXG4gICAgICB7Li4ub21pdChwcm9wcywgJ3R5cGUnKX1cclxuICAgICAgdHlwZT17dHlwZSA9PT0gJ3RlbCcgPyAndGVsJyA6ICd0ZXh0J31cclxuICAgICAgcHJlZml4PXt0eXBlID09PSAnY3VycmVuY3knID8gQ1VSUkVOQ1lfUFJFRklYIDogJyd9XHJcbiAgICAgIGZvcm1hdD17dHlwZSA9PT0gJ3RlbCcgPyAnIyMjIyAjIyMjJyA6IHVuZGVmaW5lZH1cclxuICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3R5cGUgPT09ICdjdXJyZW5jeSd9XHJcbiAgICAgIGdldElucHV0UmVmPXtpbnB1dFJlZn1cclxuICAgICAgb25WYWx1ZUNoYW5nZT17KHZhbHVlcykgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlICYmXHJcbiAgICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZXMudmFsdWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9IGFzIENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTtcclxuICAgICAgfX1cclxuICAgICAgaXNOdW1lcmljU3RyaW5nXHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNZW1vTnVtYmVyRm9ybWF0Q3VzdG9tID0gbWVtbyhOdW1iZXJGb3JtYXRDdXN0b20pO1xyXG5cclxuY29uc3QgVGV4dElucHV0OiBGQzxUZXh0SW5wdXRUeXBlPiA9ICh7IGVycm9yLCB0eXBlLCBzaXplID0gJ3NtYWxsJywgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPFRleHRJbnB1dFR5cGVbJ3ZhbHVlJ10+KCcnKTtcclxuXHJcbiAgY29uc3Qgb25Mb2NhbENoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKHYpID0+IHtcclxuICAgIHNldExvY2FsVmFsdWUodi50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVG9Vc2U6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IHByb3BzLm9uQ2hhbmdlIHx8IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IHByb3BzLm9uQ2hhbmdlID8gcHJvcHMudmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlc1Byb3ZpZGVyIGluamVjdEZpcnN0PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgY2xhc3NOYW1lPXtbc3R5bGVzLnRleHRJbnB1dCwgIXByb3BzLmxhYmVsID8gc3R5bGVzLm5vTGFiZWwgOiAnJ10uam9pbignICcpfVxyXG4gICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmU6IHRydWUsXHJcbiAgICAgICAgICBpbnB1dENvbXBvbmVudDpcclxuICAgICAgICAgICAgdHlwZSA9PT0gJ2N1cnJlbmN5JyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAndGVsJ1xyXG4gICAgICAgICAgICAgID8gKE1lbW9OdW1iZXJGb3JtYXRDdXN0b20gYXMgdW5rbm93biBhcyBGQzxJbnB1dEJhc2VDb21wb25lbnRQcm9wcz4pXHJcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICB7Li4ub21pdChwcm9wcywgWydhZGRpdGlvbmFsTmFtZXMnLCAnYWRkaXRpb25hbFZhbHVlcyddKX1cclxuICAgICAgICBpZD17cHJvcHMubmFtZX1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUb1VzZX1cclxuICAgICAgICB2YWx1ZT17dmFsdWVUb1VzZX1cclxuICAgICAgICB0eXBlPXt0eXBlID09PSAndGV4dGFyZWEnID8gJ3RleHQnIDogdHlwZX1cclxuICAgICAgICBlcnJvcj17ISFlcnJvcn1cclxuICAgICAgICBoZWxwZXJUZXh0PXtlcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnICd9XHJcbiAgICAgICAgcm93c01heD17MTAwfVxyXG4gICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIG11bHRpbGluZT17dHlwZSA9PT0gJ3RleHRhcmVhJ31cclxuICAgICAgICBzaXplPXtzaXplfVxyXG4gICAgICAvPlxyXG4gICAgPC9TdHlsZXNQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhUZXh0SW5wdXQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9