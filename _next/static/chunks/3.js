(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/TextInput/TextInput.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Forms/TextInput/TextInput.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".TextInput_textInput__35_1P > .MuiInputBase-root {\n  border: 1px solid #CADBEA;\n  overflow: hidden;\n  background-color: white;\n}\n.TextInput_textInput__35_1P > .MuiInputBase-root:hover {\n  background-color: white;\n}\n.TextInput_textInput__35_1P > .MuiInputBase-root:focused {\n  background-color: white;\n  -webkit-box-shadow: #fcfcfb 0 0 0 2px;\n          box-shadow: #fcfcfb 0 0 0 2px;\n  border-color: \"#fcfcfb\";\n}\n.TextInput_textInput__35_1P > .MuiInputBase-root.Mui-focused {\n  -webkit-box-shadow: 0 0 0 1px #CADBEA;\n          box-shadow: 0 0 0 1px #CADBEA;\n  background-color: white;\n}\n.TextInput_textInput__35_1P > .Mui-error {\n  border-color: var(--color-red);\n}\n.TextInput_textInput__35_1P > label {\n  color: var(--color-dark-grey);\n}\n\n.TextInput_noLabel__3dbAP .MuiInputBase-input {\n  padding-top: 14px;\n  padding-bottom: 15px;\n}", "",{"version":3,"sources":["webpack://TextInput.module.scss"],"names":[],"mappings":"AAEI;EACE,yBAAA;EACE,gBAAA;EAEA,uBAAA;AAFR;AAIQ;EACE,uBAAA;AAFV;AAIQ;EACE,uBAAA;EACA,qCAAA;UAAA,6BAAA;EACA,uBAAA;AAFV;AAKQ;EACE,qCAAA;UAAA,6BAAA;EACA,uBAAA;AAHV;AAOI;EACE,8BAAA;AALN;AAQI;EACE,6BAAA;AANN;;AAaI;EACE,iBAAA;EACA,oBAAA;AAVN","sourcesContent":[".textInput {\r\n  &:global {\r\n    > .MuiInputBase-root {\r\n      border: 1px solid #CADBEA;\r\n        overflow: hidden;\r\n        // border-radius: 4px;\r\n        background-color: white;\r\n  \r\n        &:hover {\r\n          background-color: white;\r\n        }\r\n        &:focused {\r\n          background-color: white;\r\n          box-shadow: #fcfcfb 0 0 0 2px;\r\n          border-color: '#fcfcfb';\r\n        }\r\n  \r\n        &.Mui-focused {\r\n          box-shadow: 0 0 0 1px #CADBEA;\r\n          background-color: white;\r\n        }\r\n    }\r\n\r\n    > .Mui-error {\r\n      border-color: var(--color-red);\r\n    }\r\n    \r\n    > label {\r\n      color: var(--color-dark-grey);\r\n    }\r\n  }\r\n}\r\n\r\n.noLabel {\r\n  :global {\r\n    .MuiInputBase-input {\r\n      padding-top: 14px;\r\n      padding-bottom: 15px;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"textInput": "TextInput_textInput__35_1P",
	"noLabel": "TextInput_noLabel__3dbAP"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/Forms/TextInput/TextInput.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/Forms/TextInput/TextInput.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./TextInput.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/TextInput/TextInput.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./TextInput.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/TextInput/TextInput.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./TextInput.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/TextInput/TextInput.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _TextInput_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TextInput.module.scss */ "./src/components/Forms/TextInput/TextInput.module.scss");
/* harmony import */ var _TextInput_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_TextInput_module_scss__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\TextInput\\TextInput.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var NumberFormat = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c = function _c() {
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
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? '$' : _ref$prefix,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      onChange = _ref.onChange,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["inputRef", "prefix", "type", "onChange"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NumberFormat, _objectSpread(_objectSpread({}, props), {}, {
    type: type === 'mobile' ? 'tel' : type === 'currency' || type === 'number' ? 'text' : type,
    prefix: type === 'currency' ? prefix : '',
    format: type === 'mobile' ? '#### ####' : undefined,
    thousandSeparator: type === 'currency',
    getInputRef: inputRef,
    onValueChange: function onValueChange(values) {
      onChange({
        target: {
          value: values.value
        }
      });
    },
    isNumericString: true
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_c3 = NumberFormatCustom;
var MemoNumberFormatCustom = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(NumberFormatCustom);
_c4 = MemoNumberFormatCustom;

var TextInput = function TextInput(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(v) {
    setLocalValue(v.target.value);
  };

  var onChangeToUse = props.onChange || onLocalChange;
  var valueToUse = props.onChange ? props.value : localValue;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["StylesProvider"], {
    injectFirst: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({
      className: [_TextInput_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.textInput, !props.label ? _TextInput_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.noLabel : ''].join(' '),
      size: "small",
      onChange: onChangeToUse,
      value: valueToUse,
      InputProps: {
        disableUnderline: true,
        inputComponent: props.type === 'currency' || props.type === 'number' || props.type === 'mobile' ? MemoNumberFormatCustom : undefined
      },
      helperText: " ",
      rowsMax: 100,
      variant: "filled",
      fullWidth: true
    }, props), void 0, false, {
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

_s(TextInput, "0cDHC8c7u1K6BAhVsOIxkU84T6E=");

_c5 = TextInput;
/* harmony default export */ __webpack_exports__["default"] = (_c6 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(TextInput));

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

/***/ }),

/***/ "./src/components/Forms/TextInput/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/Forms/TextInput/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextInput */ "./src/components/Forms/TextInput/TextInput.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvVGV4dElucHV0L1RleHRJbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvVGV4dElucHV0L1RleHRJbnB1dC5tb2R1bGUuc2Nzcz8wNjRmIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9UZXh0SW5wdXQvVGV4dElucHV0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvVGV4dElucHV0L2luZGV4LnRzeCJdLCJuYW1lcyI6WyJOdW1iZXJGb3JtYXQiLCJkeW5hbWljIiwiTnVtYmVyRm9ybWF0Q3VzdG9tIiwiaW5wdXRSZWYiLCJwcmVmaXgiLCJ0eXBlIiwib25DaGFuZ2UiLCJwcm9wcyIsInVuZGVmaW5lZCIsInZhbHVlcyIsInRhcmdldCIsInZhbHVlIiwiTWVtb051bWJlckZvcm1hdEN1c3RvbSIsIm1lbW8iLCJUZXh0SW5wdXQiLCJ1c2VTdGF0ZSIsImxvY2FsVmFsdWUiLCJzZXRMb2NhbFZhbHVlIiwib25Mb2NhbENoYW5nZSIsInYiLCJvbkNoYW5nZVRvVXNlIiwidmFsdWVUb1VzZSIsInN0eWxlcyIsInRleHRJbnB1dCIsImxhYmVsIiwibm9MYWJlbCIsImpvaW4iLCJkaXNhYmxlVW5kZXJsaW5lIiwiaW5wdXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMEhBQStEO0FBQ3pHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxxREFBcUQsOEJBQThCLHFCQUFxQiw0QkFBNEIsR0FBRywwREFBMEQsNEJBQTRCLEdBQUcsNERBQTRELDRCQUE0QiwwQ0FBMEMsMENBQTBDLDhCQUE4QixHQUFHLGdFQUFnRSwwQ0FBMEMsMENBQTBDLDRCQUE0QixHQUFHLDRDQUE0QyxtQ0FBbUMsR0FBRyx1Q0FBdUMsa0NBQWtDLEdBQUcs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QVlFLGdCQUFVLEVBQUMsR0FaYjtBQWFFLGFBQU8sRUFBRSxHQWJYO0FBY0UsYUFBTyxFQUFDLFFBZFY7QUFlRSxlQUFTO0FBZlgsT0FnQk1ELEtBaEJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzQkQsQ0FoQ0Q7O0dBQU1PLFM7O01BQUFBLFM7QUFrQ1Msa0ZBQUFELGtEQUFJLENBQUNDLFNBQUQsQ0FBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5UZXh0SW5wdXRfdGV4dElucHV0X18zNV8xUCA+IC5NdWlJbnB1dEJhc2Utcm9vdCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjQ0FEQkVBO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uVGV4dElucHV0X3RleHRJbnB1dF9fMzVfMVAgPiAuTXVpSW5wdXRCYXNlLXJvb3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5UZXh0SW5wdXRfdGV4dElucHV0X18zNV8xUCA+IC5NdWlJbnB1dEJhc2Utcm9vdDpmb2N1c2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjZmNmY2ZiIDAgMCAwIDJweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogI2ZjZmNmYiAwIDAgMCAycHg7XFxuICBib3JkZXItY29sb3I6IFxcXCIjZmNmY2ZiXFxcIjtcXG59XFxuLlRleHRJbnB1dF90ZXh0SW5wdXRfXzM1XzFQID4gLk11aUlucHV0QmFzZS1yb290Lk11aS1mb2N1c2VkIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDAgMXB4ICNDQURCRUE7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjQ0FEQkVBO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi5UZXh0SW5wdXRfdGV4dElucHV0X18zNV8xUCA+IC5NdWktZXJyb3Ige1xcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xcbn1cXG4uVGV4dElucHV0X3RleHRJbnB1dF9fMzVfMVAgPiBsYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ncmV5KTtcXG59XFxuXFxuLlRleHRJbnB1dF9ub0xhYmVsX18zZGJBUCAuTXVpSW5wdXRCYXNlLWlucHV0IHtcXG4gIHBhZGRpbmctdG9wOiAxNHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9UZXh0SW5wdXQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUk7RUFDRSx5QkFBQTtFQUNFLGdCQUFBO0VBRUEsdUJBQUE7QUFGUjtBQUlRO0VBQ0UsdUJBQUE7QUFGVjtBQUlRO0VBQ0UsdUJBQUE7RUFDQSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsdUJBQUE7QUFGVjtBQUtRO0VBQ0UscUNBQUE7VUFBQSw2QkFBQTtFQUNBLHVCQUFBO0FBSFY7QUFPSTtFQUNFLDhCQUFBO0FBTE47QUFRSTtFQUNFLDZCQUFBO0FBTk47O0FBYUk7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FBVk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRleHRJbnB1dCB7XFxyXFxuICAmOmdsb2JhbCB7XFxyXFxuICAgID4gLk11aUlucHV0QmFzZS1yb290IHtcXHJcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjQ0FEQkVBO1xcclxcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgXFxyXFxuICAgICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICAmOmZvY3VzZWQge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgYm94LXNoYWRvdzogI2ZjZmNmYiAwIDAgMCAycHg7XFxyXFxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJyNmY2ZjZmInO1xcclxcbiAgICAgICAgfVxcclxcbiAgXFxyXFxuICAgICAgICAmLk11aS1mb2N1c2VkIHtcXHJcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNDQURCRUE7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgID4gLk11aS1lcnJvciB7XFxyXFxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICA+IGxhYmVsIHtcXHJcXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ncmV5KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ubm9MYWJlbCB7XFxyXFxuICA6Z2xvYmFsIHtcXHJcXG4gICAgLk11aUlucHV0QmFzZS1pbnB1dCB7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDE0cHg7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwidGV4dElucHV0XCI6IFwiVGV4dElucHV0X3RleHRJbnB1dF9fMzVfMVBcIixcblx0XCJub0xhYmVsXCI6IFwiVGV4dElucHV0X25vTGFiZWxfXzNkYkFQXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9UZXh0SW5wdXQubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1RleHRJbnB1dC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1RleHRJbnB1dC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBDaGFuZ2VFdmVudCwgRkMsIG1lbW8sIHVzZVN0YXRlLCBDaGFuZ2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUZXh0RmllbGQsIHsgVGV4dEZpZWxkUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgeyBOdW1iZXJGb3JtYXRQcm9wcyB9IGZyb20gJ3JlYWN0LW51bWJlci1mb3JtYXQnO1xyXG5pbXBvcnQgeyBJbnB1dEJhc2VDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgU3R5bGVzUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRJbnB1dC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBOdW1iZXJGb3JtYXQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgncmVhY3QtbnVtYmVyLWZvcm1hdCcpKTtcclxuXHJcbmludGVyZmFjZSBOdW1iZXJGb3JtYXRUeXBlIGV4dGVuZHMgT21pdDxOdW1iZXJGb3JtYXRQcm9wcywgJ3R5cGUnPiB7XHJcbiAgdHlwZT86ICdjdXJyZW5jeScgfCAnbW9iaWxlJyB8ICdudW1iZXInIHwgTnVtYmVyRm9ybWF0UHJvcHNbJ3R5cGUnXTtcclxuICB0aG91c2FuZFNlcGFyYXRvcj86IGJvb2xlYW47XHJcbiAgcHJlZml4Pzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBOdW1iZXJGb3JtYXRDdXN0b206IEZDPE51bWJlckZvcm1hdFR5cGU+ID0gKHtcclxuICBpbnB1dFJlZixcclxuICBwcmVmaXggPSAnJCcsXHJcbiAgdHlwZSA9ICd0ZXh0JyxcclxuICBvbkNoYW5nZSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOdW1iZXJGb3JtYXRcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICB0eXBlPXt0eXBlID09PSAnbW9iaWxlJyA/ICd0ZWwnIDogdHlwZSA9PT0gJ2N1cnJlbmN5JyB8fCB0eXBlID09PSAnbnVtYmVyJyA/ICd0ZXh0JyA6IHR5cGV9XHJcbiAgICAgIHByZWZpeD17dHlwZSA9PT0gJ2N1cnJlbmN5JyA/IHByZWZpeCA6ICcnfVxyXG4gICAgICBmb3JtYXQ9e3R5cGUgPT09ICdtb2JpbGUnID8gJyMjIyMgIyMjIycgOiB1bmRlZmluZWR9XHJcbiAgICAgIHRob3VzYW5kU2VwYXJhdG9yPXt0eXBlID09PSAnY3VycmVuY3knfVxyXG4gICAgICBnZXRJbnB1dFJlZj17aW5wdXRSZWZ9XHJcbiAgICAgIG9uVmFsdWVDaGFuZ2U9eyh2YWx1ZXMpID0+IHtcclxuICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlcy52YWx1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSBhcyBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50Pik7XHJcbiAgICAgIH19XHJcbiAgICAgIGlzTnVtZXJpY1N0cmluZ1xyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgTWVtb051bWJlckZvcm1hdEN1c3RvbSA9IG1lbW8oTnVtYmVyRm9ybWF0Q3VzdG9tKTtcclxuXHJcbmNvbnN0IFRleHRJbnB1dDogRkM8VGV4dEZpZWxkUHJvcHMgJiBOdW1iZXJGb3JtYXRUeXBlPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPE51bWJlckZvcm1hdFR5cGVbJ3ZhbHVlJ10+KCcnKTtcclxuXHJcbiAgY29uc3Qgb25Mb2NhbENoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKHYpID0+IHtcclxuICAgIHNldExvY2FsVmFsdWUodi50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVG9Vc2U6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IHByb3BzLm9uQ2hhbmdlIHx8IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IHByb3BzLm9uQ2hhbmdlID8gcHJvcHMudmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlc1Byb3ZpZGVyIGluamVjdEZpcnN0PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgY2xhc3NOYW1lPXtbc3R5bGVzLnRleHRJbnB1dCwgIXByb3BzLmxhYmVsID8gc3R5bGVzLm5vTGFiZWwgOiAnJ10uam9pbignICcpfVxyXG4gICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVG9Vc2V9XHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlVG9Vc2V9XHJcbiAgICAgICAgSW5wdXRQcm9wcz17e1xyXG4gICAgICAgICAgZGlzYWJsZVVuZGVybGluZTogdHJ1ZSxcclxuICAgICAgICAgIGlucHV0Q29tcG9uZW50OlxyXG4gICAgICAgICAgICBwcm9wcy50eXBlID09PSAnY3VycmVuY3knIHx8IHByb3BzLnR5cGUgPT09ICdudW1iZXInIHx8IHByb3BzLnR5cGUgPT09ICdtb2JpbGUnXHJcbiAgICAgICAgICAgICAgPyAoTWVtb051bWJlckZvcm1hdEN1c3RvbSBhcyB1bmtub3duIGFzIEZDPElucHV0QmFzZUNvbXBvbmVudFByb3BzPilcclxuICAgICAgICAgICAgICA6IHVuZGVmaW5lZCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGhlbHBlclRleHQ9XCIgXCJcclxuICAgICAgICByb3dzTWF4PXsxMDB9XHJcbiAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAvPlxyXG4gICAgPC9TdHlsZXNQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhUZXh0SW5wdXQpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9UZXh0SW5wdXQnO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9