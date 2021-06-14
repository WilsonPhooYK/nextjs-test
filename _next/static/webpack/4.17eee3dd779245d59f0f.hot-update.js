webpackHotUpdate_N_E(4,{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/Date/Date.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Forms/Date/Date.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Date_textInput__1Vp9z > .MuiInputBase-root {\n  border: 1px solid #CADBEA;\n  overflow: hidden;\n  background-color: white;\n}\n.Date_textInput__1Vp9z > .MuiInputBase-root:hover {\n  background-color: white;\n}\n.Date_textInput__1Vp9z > .MuiInputBase-root:focused {\n  background-color: white;\n  -webkit-box-shadow: #fcfcfb 0 0 0 2px;\n          box-shadow: #fcfcfb 0 0 0 2px;\n  border-color: \"#fcfcfb\";\n}\n.Date_textInput__1Vp9z > .MuiInputBase-root.Mui-focused {\n  -webkit-box-shadow: 0 0 0 1px #CADBEA;\n          box-shadow: 0 0 0 1px #CADBEA;\n  background-color: white;\n}\n.Date_textInput__1Vp9z > .Mui-error {\n  border-color: var(--color-red);\n}\n.Date_textInput__1Vp9z > label {\n  color: var(--color-dark-grey);\n}\n\n.Date_noLabel__2zfy0 .MuiInputBase-input {\n  padding-top: 14px;\n  padding-bottom: 15px;\n}", "",{"version":3,"sources":["webpack://Date.module.scss"],"names":[],"mappings":"AAEI;EACE,yBAAA;EACE,gBAAA;EAEA,uBAAA;AAFR;AAIQ;EACE,uBAAA;AAFV;AAIQ;EACE,uBAAA;EACA,qCAAA;UAAA,6BAAA;EACA,uBAAA;AAFV;AAKQ;EACE,qCAAA;UAAA,6BAAA;EACA,uBAAA;AAHV;AAOI;EACE,8BAAA;AALN;AAQI;EACE,6BAAA;AANN;;AAaI;EACE,iBAAA;EACA,oBAAA;AAVN","sourcesContent":[".textInput {\r\n  &:global {\r\n    > .MuiInputBase-root {\r\n      border: 1px solid #CADBEA;\r\n        overflow: hidden;\r\n        // border-radius: 4px;\r\n        background-color: white;\r\n  \r\n        &:hover {\r\n          background-color: white;\r\n        }\r\n        &:focused {\r\n          background-color: white;\r\n          box-shadow: #fcfcfb 0 0 0 2px;\r\n          border-color: '#fcfcfb';\r\n        }\r\n  \r\n        &.Mui-focused {\r\n          box-shadow: 0 0 0 1px #CADBEA;\r\n          background-color: white;\r\n        }\r\n    }\r\n\r\n    > .Mui-error {\r\n      border-color: var(--color-red);\r\n    }\r\n    \r\n    > label {\r\n      color: var(--color-dark-grey);\r\n    }\r\n  }\r\n}\r\n\r\n.noLabel {\r\n  :global {\r\n    .MuiInputBase-input {\r\n      padding-top: 14px;\r\n      padding-bottom: 15px;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"textInput": "Date_textInput__1Vp9z",
	"noLabel": "Date_noLabel__2zfy0"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/Forms/Date/Date.module.scss":
/*!****************************************************!*\
  !*** ./src/components/Forms/Date/Date.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Date.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/Date/Date.module.scss");

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
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Date.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/Date/Date.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Date.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/Date/Date.module.scss");

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Date_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Date.module.scss */ "./src/components/Forms/Date/Date.module.scss");
/* harmony import */ var _Date_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Date_module_scss__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\Date\\Date.tsx",
    _this = undefined,
    _s = $RefreshSig$();




 // import TextInput from 'components/Forms/TextInput';



var Date = function Date(_ref) {
  _s();

  var value = _ref.value,
      onChange = _ref.onChange,
      name = _ref.name,
      label = _ref.label;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(v) {
    setLocalValue(v);
  };

  var controlledOnChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (v) {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["StylesProvider"], {
    injectFirst: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_3__["default"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_2__["KeyboardDatePicker"], {
        className: _Date_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.date,
        label: label // {...props}
        ,
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
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(Date, "4l6gFxZX4pAFw0s5Pz8X4Y8ZsWs=");

_c = Date;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Date));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRGF0ZS9EYXRlLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9EYXRlL0RhdGUubW9kdWxlLnNjc3M/OTkxYiIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRGF0ZS9EYXRlLnRzeCJdLCJuYW1lcyI6WyJEYXRlIiwidmFsdWUiLCJvbkNoYW5nZSIsIm5hbWUiLCJsYWJlbCIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJjb25zb2xlIiwibG9nIiwiRGF0ZUZuc1V0aWxzIiwic3R5bGVzIiwiZGF0ZSIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMEhBQStEO0FBQ3pHO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUyxnREFBZ0QsOEJBQThCLHFCQUFxQiw0QkFBNEIsR0FBRyxxREFBcUQsNEJBQTRCLEdBQUcsdURBQXVELDRCQUE0QiwwQ0FBMEMsMENBQTBDLDhCQUE4QixHQUFHLDJEQUEyRCwwQ0FBMEMsMENBQTBDLDRCQUE0QixHQUFHLHVDQUF1QyxtQ0FBbUMsR0FBRyxrQ0FBa0Msa0NBQWtDLEdBQUcsOENBQThDLHNCQUFzQix5QkFBeUIsR0FBRyxPQUFPLGlGQUFpRixXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxxQ0FBcUMsZ0JBQWdCLDhCQUE4QixvQ0FBb0MsNkJBQTZC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T0FmUDtBQWdCRSxlQUFPLEVBQUMsUUFoQlYsQ0FpQkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlDRCxDQTVERDs7R0FBTWIsSTs7S0FBQUEsSTtBQThEUyxrRkFBQW9CLGtEQUFJLENBQUNwQixJQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzQuMTdlZWUzZGQ3NzkyNDVkNTlmMGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5EYXRlX3RleHRJbnB1dF9fMVZwOXogPiAuTXVpSW5wdXRCYXNlLXJvb3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0NBREJFQTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLkRhdGVfdGV4dElucHV0X18xVnA5eiA+IC5NdWlJbnB1dEJhc2Utcm9vdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLkRhdGVfdGV4dElucHV0X18xVnA5eiA+IC5NdWlJbnB1dEJhc2Utcm9vdDpmb2N1c2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAjZmNmY2ZiIDAgMCAwIDJweDtcXG4gICAgICAgICAgYm94LXNoYWRvdzogI2ZjZmNmYiAwIDAgMCAycHg7XFxuICBib3JkZXItY29sb3I6IFxcXCIjZmNmY2ZiXFxcIjtcXG59XFxuLkRhdGVfdGV4dElucHV0X18xVnA5eiA+IC5NdWlJbnB1dEJhc2Utcm9vdC5NdWktZm9jdXNlZCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDFweCAjQ0FEQkVBO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0NBREJFQTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uRGF0ZV90ZXh0SW5wdXRfXzFWcDl6ID4gLk11aS1lcnJvciB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XFxufVxcbi5EYXRlX3RleHRJbnB1dF9fMVZwOXogPiBsYWJlbCB7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ncmV5KTtcXG59XFxuXFxuLkRhdGVfbm9MYWJlbF9fMnpmeTAgLk11aUlucHV0QmFzZS1pbnB1dCB7XFxuICBwYWRkaW5nLXRvcDogMTRweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vRGF0ZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFSTtFQUNFLHlCQUFBO0VBQ0UsZ0JBQUE7RUFFQSx1QkFBQTtBQUZSO0FBSVE7RUFDRSx1QkFBQTtBQUZWO0FBSVE7RUFDRSx1QkFBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSx1QkFBQTtBQUZWO0FBS1E7RUFDRSxxQ0FBQTtVQUFBLDZCQUFBO0VBQ0EsdUJBQUE7QUFIVjtBQU9JO0VBQ0UsOEJBQUE7QUFMTjtBQVFJO0VBQ0UsNkJBQUE7QUFOTjs7QUFhSTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUFWTlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudGV4dElucHV0IHtcXHJcXG4gICY6Z2xvYmFsIHtcXHJcXG4gICAgPiAuTXVpSW5wdXRCYXNlLXJvb3Qge1xcclxcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDQURCRUE7XFxyXFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBcXHJcXG4gICAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgICY6Zm9jdXNlZCB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICBib3gtc2hhZG93OiAjZmNmY2ZiIDAgMCAwIDJweDtcXHJcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAnI2ZjZmNmYic7XFxyXFxuICAgICAgICB9XFxyXFxuICBcXHJcXG4gICAgICAgICYuTXVpLWZvY3VzZWQge1xcclxcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0NBREJFQTtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgPiAuTXVpLWVycm9yIHtcXHJcXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXJlZCk7XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgID4gbGFiZWwge1xcclxcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWdyZXkpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5ub0xhYmVsIHtcXHJcXG4gIDpnbG9iYWwge1xcclxcbiAgICAuTXVpSW5wdXRCYXNlLWlucHV0IHtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogMTRweDtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJ0ZXh0SW5wdXRcIjogXCJEYXRlX3RleHRJbnB1dF9fMVZwOXpcIixcblx0XCJub0xhYmVsXCI6IFwiRGF0ZV9ub0xhYmVsX18yemZ5MFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRGF0ZS5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRGF0ZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0RhdGUubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgRkMsIG1lbW8sIHVzZVN0YXRlLCBDaGFuZ2VFdmVudEhhbmRsZXIsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNdWlQaWNrZXJzVXRpbHNQcm92aWRlciwgS2V5Ym9hcmREYXRlUGlja2VyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuaW1wb3J0IHsgU3R5bGVzUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuLy8gaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm1zL1RleHRJbnB1dCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRGF0ZS5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBEYXRlOiBGQzxhbnk+ID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBuYW1lLCBsYWJlbCB9KSA9PiB7XHJcbiAgY29uc3QgW2xvY2FsVmFsdWUsIHNldExvY2FsVmFsdWVdID0gdXNlU3RhdGU8dHlwZW9mIERhdGU+KCk7XHJcblxyXG4gIGNvbnN0IG9uTG9jYWxDaGFuZ2U6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9ICh2KSA9PiB7XHJcbiAgICBzZXRMb2NhbFZhbHVlKHYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZWRPbkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKHYpID0+IHtcclxuICAgICAgb25DaGFuZ2UgJiZcclxuICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICAgIHZhbHVlOiB2LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbb25DaGFuZ2VdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gb25DaGFuZ2VcclxuICAgID8gY29udHJvbGxlZE9uQ2hhbmdlXHJcbiAgICA6IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IG9uQ2hhbmdlID8gdmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICBjb25zb2xlLmxvZyh2YWx1ZVRvVXNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZXNQcm92aWRlciBpbmplY3RGaXJzdD5cclxuICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG4gICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRhdGV9XHJcbiAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICAvLyB7Li4ucHJvcHN9XHJcbiAgICAgICAgICBpZD17bmFtZX1cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZVRvVXNlfVxyXG4gICAgICAgICAgZGlzYWJsZVBhc3RcclxuICAgICAgICAgIGZvcm1hdD1cImRkL01NL3l5eXlcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVG9Vc2V9XHJcbiAgICAgICAgICBLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgIGlucHV0VmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImRkL21tL3l5eXlcIlxyXG4gICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgLy8gcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICAgIC8vICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgLy8gICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICAvLyAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgLy8gICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIC8vICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgIC8vICAgICAvLyBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgLy8gICAvPlxyXG4gICAgICAgICAgLy8gKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG4gICAgPC9TdHlsZXNQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhEYXRlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==