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
      additionalNames = _ref2.additionalNames,
      additionalValues = _ref2.additionalValues,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, ["error", "type", "size", "additionalNames", "additionalValues"]);

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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
      className: [_TextInput_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.textInput, !props.label ? _TextInput_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.noLabel : ''].join(' '),
      id: props.name,
      onChange: onChangeToUse,
      value: valueToUse,
      type: type === 'textarea' ? 'text' : type,
      InputProps: {
        disableUnderline: true,
        inputComponent: type === 'currency' || type === 'number' || type === 'tel' ? MemoNumberFormatCustom : undefined
      },
      error: !!error,
      helperText: error ? error.message : ' ',
      rowsMax: 100,
      variant: "filled",
      fullWidth: true,
      multiline: type === 'textarea',
      size: size
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvVGV4dElucHV0L1RleHRJbnB1dC50c3giXSwibmFtZXMiOlsiTnVtYmVyRm9ybWF0IiwiZHluYW1pYyIsIk51bWJlckZvcm1hdEN1c3RvbSIsImlucHV0UmVmIiwidHlwZSIsIm9uQ2hhbmdlIiwicHJvcHMiLCJvbWl0IiwiQ1VSUkVOQ1lfUFJFRklYIiwidW5kZWZpbmVkIiwidmFsdWVzIiwidGFyZ2V0IiwidmFsdWUiLCJNZW1vTnVtYmVyRm9ybWF0Q3VzdG9tIiwibWVtbyIsIlRleHRJbnB1dCIsImVycm9yIiwic2l6ZSIsImFkZGl0aW9uYWxOYW1lcyIsImFkZGl0aW9uYWxWYWx1ZXMiLCJ1c2VTdGF0ZSIsImxvY2FsVmFsdWUiLCJzZXRMb2NhbFZhbHVlIiwib25Mb2NhbENoYW5nZSIsInYiLCJvbkNoYW5nZVRvVXNlIiwidmFsdWVUb1VzZSIsInN0eWxlcyIsInRleHRJbnB1dCIsImxhYmVsIiwibm9MYWJlbCIsImpvaW4iLCJuYW1lIiwiZGlzYWJsZVVuZGVybGluZSIsImlucHV0Q29tcG9uZW50IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFFQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsbURBQU8sTUFBQztBQUFBLFNBQU0sNktBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLDhGQUFkO0FBQUE7QUFBQSxzRUFBYyxxQkFBZDtBQUFBO0FBQUEsRUFBNUI7TUFBTUQsWTs7QUFPTixJQUFNRSxrQkFBcUMsR0FBRyxTQUF4Q0Esa0JBQXdDLE9BQTRDO0FBQUEsTUFBekNDLFFBQXlDLFFBQXpDQSxRQUF5QztBQUFBLE1BQS9CQyxJQUErQixRQUEvQkEsSUFBK0I7QUFBQSxNQUF6QkMsUUFBeUIsUUFBekJBLFFBQXlCO0FBQUEsTUFBWkMsS0FBWTs7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O0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQkQsQ0EzQ0Q7O0dBQU1TLFM7O01BQUFBLFM7QUE2Q1Msa0ZBQUFELGtEQUFJLENBQUNDLFNBQUQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMi44MTY5N2Y4Njk1MjViODNkMDM0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9taXQgZnJvbSAnbG9kYXNoL29taXQnO1xyXG5pbXBvcnQgeyBDaGFuZ2VFdmVudCwgRkMsIG1lbW8sIHVzZVN0YXRlLCBDaGFuZ2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgSW5wdXRCYXNlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IFN0eWxlc1Byb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmltcG9ydCB7IENvbW1vbkZpZWxkVHlwZSwgQmFzaWNGaWVsZFZhbHVlIH0gZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9mb3JtVHlwZXMnO1xyXG5pbXBvcnQgeyBDVVJSRU5DWV9QUkVGSVggfSBmcm9tICdjb25zdGFudHMvY29tbW9uJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0SW5wdXQubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgTnVtYmVyRm9ybWF0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ3JlYWN0LW51bWJlci1mb3JtYXQnKSk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRJbnB1dFR5cGUgZXh0ZW5kcyBDb21tb25GaWVsZFR5cGUge1xyXG4gIHR5cGU6ICdjdXJyZW5jeScgfCAndGVsJyB8ICdudW1iZXInIHwgJ3RleHQnIHwgJ3Bhc3N3b3JkJyB8ICdlbWFpbCcgfCAndGV4dGFyZWEnO1xyXG4gIHZhbHVlPzogQmFzaWNGaWVsZFZhbHVlO1xyXG59XHJcblxyXG5jb25zdCBOdW1iZXJGb3JtYXRDdXN0b206IEZDPFRleHRJbnB1dFR5cGU+ID0gKHsgaW5wdXRSZWYsIHR5cGUsIG9uQ2hhbmdlLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgey4uLm9taXQocHJvcHMsICd0eXBlJyl9XHJcbiAgICAgIHR5cGU9e3R5cGUgPT09ICd0ZWwnID8gJ3RlbCcgOiAndGV4dCd9XHJcbiAgICAgIHByZWZpeD17dHlwZSA9PT0gJ2N1cnJlbmN5JyA/IENVUlJFTkNZX1BSRUZJWCA6ICcnfVxyXG4gICAgICBmb3JtYXQ9e3R5cGUgPT09ICd0ZWwnID8gJyMjIyMgIyMjIycgOiB1bmRlZmluZWR9XHJcbiAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXt0eXBlID09PSAnY3VycmVuY3knfVxyXG4gICAgICBnZXRJbnB1dFJlZj17aW5wdXRSZWZ9XHJcbiAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICBvbkNoYW5nZSAmJlxyXG4gICAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzLnZhbHVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSBhcyBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik7XHJcbiAgICAgIH19XHJcbiAgICAgIGlzTnVtZXJpY1N0cmluZ1xyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTWVtb051bWJlckZvcm1hdEN1c3RvbSA9IG1lbW8oTnVtYmVyRm9ybWF0Q3VzdG9tKTtcclxuXHJcbmNvbnN0IFRleHRJbnB1dDogRkM8VGV4dElucHV0VHlwZT4gPSAoe1xyXG4gIGVycm9yLFxyXG4gIHR5cGUsXHJcbiAgc2l6ZSA9ICdzbWFsbCcsXHJcbiAgYWRkaXRpb25hbE5hbWVzLFxyXG4gIGFkZGl0aW9uYWxWYWx1ZXMsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPFRleHRJbnB1dFR5cGVbJ3ZhbHVlJ10+KCcnKTtcclxuXHJcbiAgY29uc3Qgb25Mb2NhbENoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKHYpID0+IHtcclxuICAgIHNldExvY2FsVmFsdWUodi50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVG9Vc2U6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IHByb3BzLm9uQ2hhbmdlIHx8IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IHByb3BzLm9uQ2hhbmdlID8gcHJvcHMudmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlc1Byb3ZpZGVyIGluamVjdEZpcnN0PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgY2xhc3NOYW1lPXtbc3R5bGVzLnRleHRJbnB1dCwgIXByb3BzLmxhYmVsID8gc3R5bGVzLm5vTGFiZWwgOiAnJ10uam9pbignICcpfVxyXG4gICAgICAgIGlkPXtwcm9wcy5uYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRvVXNlfVxyXG4gICAgICAgIHZhbHVlPXt2YWx1ZVRvVXNlfVxyXG4gICAgICAgIHR5cGU9e3R5cGUgPT09ICd0ZXh0YXJlYScgPyAndGV4dCcgOiB0eXBlfVxyXG4gICAgICAgIElucHV0UHJvcHM9e3tcclxuICAgICAgICAgIGRpc2FibGVVbmRlcmxpbmU6IHRydWUsXHJcbiAgICAgICAgICBpbnB1dENvbXBvbmVudDpcclxuICAgICAgICAgICAgdHlwZSA9PT0gJ2N1cnJlbmN5JyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAndGVsJ1xyXG4gICAgICAgICAgICAgID8gKE1lbW9OdW1iZXJGb3JtYXRDdXN0b20gYXMgdW5rbm93biBhcyBGQzxJbnB1dEJhc2VDb21wb25lbnRQcm9wcz4pXHJcbiAgICAgICAgICAgICAgOiB1bmRlZmluZWQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBlcnJvcj17ISFlcnJvcn1cclxuICAgICAgICBoZWxwZXJUZXh0PXtlcnJvciA/IGVycm9yLm1lc3NhZ2UgOiAnICd9XHJcbiAgICAgICAgcm93c01heD17MTAwfVxyXG4gICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgIG11bHRpbGluZT17dHlwZSA9PT0gJ3RleHRhcmVhJ31cclxuICAgICAgICBzaXplPXtzaXplfVxyXG4gICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgLz5cclxuICAgIDwvU3R5bGVzUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oVGV4dElucHV0KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==