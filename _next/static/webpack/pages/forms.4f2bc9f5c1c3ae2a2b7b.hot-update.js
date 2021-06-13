webpackHotUpdate_N_E("pages/forms",{

/***/ "./src/pages/forms.tsx":
/*!*****************************!*\
  !*** ./src/pages/forms.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var appRedux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! appRedux */ "./src/appRedux/index.ts");
/* harmony import */ var appRedux_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! appRedux/forms */ "./src/appRedux/forms/index.ts");
/* harmony import */ var components_forms_TextInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! components/forms/TextInput */ "./src/components/forms/TextInput/index.tsx");




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\pages\\forms.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









 // import useTranslation from 'hooks/useTranslation';





var Forms = function Forms() {
  _s();

  var _jsxDEV2;

  var dispatch = Object(appRedux__WEBPACK_IMPORTED_MODULE_12__["useAppDispatch"])();
  var constants = Object(appRedux__WEBPACK_IMPORTED_MODULE_12__["useAppSelector"])(function (state) {
    return state.constants.constants;
  });
  var values = Object(appRedux__WEBPACK_IMPORTED_MODULE_12__["useAppSelector"])(function (state) {
    var _state$forms$values;

    return (_state$forms$values = state.forms.values) === null || _state$forms$values === void 0 ? void 0 : _state$forms$values.test;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "h1",
      children: "Forms"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("form", {
      noValidate: true,
      onSubmit: function onSubmit(e) {
        e.stopPropagation();
        e.preventDefault();
        console.log(values);
        return false;
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_11__["MuiPickersUtilsProvider"], {
        utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_8__["default"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
          container: true,
          spacing: 2,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
            item: true,
            xs: 12,
            md: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_forms_TextInput__WEBPACK_IMPORTED_MODULE_14__["default"] // error
            , {
              label: "Reddit",
              placeholder: "Enter Value...",
              variant: "filled",
              fullWidth: true // id="reddit-input"
              ,
              required: true,
              pattern: "[Bb]anana|[Cc]herry",
              value: values === null || values === void 0 ? void 0 : values.test,
              onChange: function onChange(e) {
                return dispatch(appRedux_forms__WEBPACK_IMPORTED_MODULE_13__["formsActions"].onChangeValue({
                  formName: 'test',
                  key: 'input',
                  value: e.target.value
                }));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
            item: true,
            xs: 12,
            md: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_7__["default"], {
              id: "combo-box-demo",
              options: constants.countries,
              getOptionLabel: function getOptionLabel(option) {
                return option;
              },
              renderInput: function renderInput(params) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_forms_TextInput__WEBPACK_IMPORTED_MODULE_14__["default"], _objectSpread(_objectSpread({}, params), {}, {
                  label: "Combo box",
                  variant: "filled" // InputProps={{ disableUnderline: true }}
                  ,
                  size: "small"
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, _this);
              },
              ListboxComponent: function ListboxComponent(props) {
                var children = props.children,
                    comProps = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children"]);

                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", _objectSpread(_objectSpread({}, comProps), {}, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__["Scrollbars"], {
                    autoHeight: true,
                    autoHeightMin: 0,
                    autoHeightMax: 200,
                    children: children
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 23
                  }, _this)
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 21
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
            item: true,
            xs: 12,
            md: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_7__["default"], {
              multiple: true,
              id: "tags-filled",
              options: constants.countries,
              value: values === null || values === void 0 ? void 0 : values.multiple,
              onChange: function onChange(e, newValue) {
                return dispatch(appRedux_forms__WEBPACK_IMPORTED_MODULE_13__["formsActions"].onChangeValue({
                  formName: 'test',
                  key: 'multiple',
                  value: newValue
                }));
              },
              getOptionLabel: function getOptionLabel(option) {
                return "".concat(option, "_option");
              },
              renderTags: function renderTags(value, getTagProps) {
                return value.map(function (option, index) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__["default"], _objectSpread({
                    variant: "outlined",
                    label: option
                  }, getTagProps({
                    index: index
                  })), void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 112,
                    columnNumber: 21
                  }, _this);
                });
              },
              renderInput: function renderInput(params) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_forms_TextInput__WEBPACK_IMPORTED_MODULE_14__["default"], _objectSpread(_objectSpread({}, params), {}, {
                  variant: "filled",
                  label: "freeSolo",
                  placeholder: "Favorites",
                  size: "small"
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 116,
                  columnNumber: 19
                }, _this);
              },
              ListboxComponent: function ListboxComponent(props) {
                var children = props.children,
                    comProps = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children"]);

                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", _objectSpread(_objectSpread({}, comProps), {}, {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__["Scrollbars"], {
                    autoHeight: true,
                    autoHeightMin: 0,
                    autoHeightMax: 200,
                    children: children
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 128,
                    columnNumber: 23
                  }, _this)
                }), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 21
                }, _this);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
            item: true,
            xs: 12,
            md: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_forms_TextInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
              error: true,
              label: "Reddit",
              defaultValue: "react-reddit",
              variant: "filled",
              helperText: "Incorrect entry.",
              fullWidth: true // id="reddit-input"

            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
            item: true,
            xs: 12,
            md: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_11__["KeyboardDatePicker"], (_jsxDEV2 = {
              id: "date-picker-dialog",
              label: "Date picker dialog" // format="MM/dd/yyyy"
              ,
              value: values === null || values === void 0 ? void 0 : values.date,
              disablePast: true,
              format: "dd/MM/yyyy" // mask={[/d/, /d/, '/', /d/, /d/, '/', /d/, /d/, /d/, /d/]}
              ,
              onChange: function onChange(date) {
                return dispatch(appRedux_forms__WEBPACK_IMPORTED_MODULE_13__["formsActions"].onChangeValue({
                  formName: 'test',
                  key: 'date',
                  value: date
                }));
              },
              KeyboardButtonProps: {
                'aria-label': 'change date'
              },
              fullWidth: true,
              inputVariant: 'filled'
            }, Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "label", "freeSolo"), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "placeholder", "dd/mm/yyyy"), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_jsxDEV2, "variant", "inline"), _jsxDEV2), void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 149,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "contained",
          color: "primary",
          type: "submit",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_s(Forms, "7fAxz+JFEvQs5dAbvueRl62DX/Q=", false, function () {
  return [appRedux__WEBPACK_IMPORTED_MODULE_12__["useAppDispatch"], appRedux__WEBPACK_IMPORTED_MODULE_12__["useAppSelector"], appRedux__WEBPACK_IMPORTED_MODULE_12__["useAppSelector"]];
});

_c = Forms;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Forms);

var _c;

$RefreshReg$(_c, "Forms");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zvcm1zLnRzeCJdLCJuYW1lcyI6WyJGb3JtcyIsImRpc3BhdGNoIiwidXNlQXBwRGlzcGF0Y2giLCJjb25zdGFudHMiLCJ1c2VBcHBTZWxlY3RvciIsInN0YXRlIiwidmFsdWVzIiwiZm9ybXMiLCJ0ZXN0IiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIkRhdGVGbnNVdGlscyIsImZvcm1zQWN0aW9ucyIsIm9uQ2hhbmdlVmFsdWUiLCJmb3JtTmFtZSIsImtleSIsInZhbHVlIiwidGFyZ2V0IiwiY291bnRyaWVzIiwib3B0aW9uIiwicGFyYW1zIiwicHJvcHMiLCJjaGlsZHJlbiIsImNvbVByb3BzIiwibXVsdGlwbGUiLCJuZXdWYWx1ZSIsImdldFRhZ1Byb3BzIiwibWFwIiwiaW5kZXgiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0NBTUE7O0FBQ0E7QUFDQTtBQU1BOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQyxnRUFBYyxFQUEvQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0MsZ0VBQWMsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDRixTQUFOLENBQWdCQSxTQUEzQjtBQUFBLEdBQUQsQ0FBaEM7QUFDQSxNQUFNRyxNQUFNLEdBQUdGLGdFQUFjLENBQUMsVUFBQ0MsS0FBRDtBQUFBOztBQUFBLGtDQUFXQSxLQUFLLENBQUNFLEtBQU4sQ0FBWUQsTUFBdkIsd0RBQVcsb0JBQW9CRSxJQUEvQjtBQUFBLEdBQUQsQ0FBN0I7QUFFQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLG9FQUFEO0FBQVksYUFBTyxFQUFDLElB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LGVBakJ2QjtBQW9CRSx1QkFBUyxNQXBCWDtBQXFCRSwwQkFBWSxFQUFFO0FBckJoQixpTEFzQlEsVUF0QlIsMktBdUJjLFlBdkJkLHVLQXlCVSxRQXpCVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2R0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBc0lFLHFFQUFDLGdFQUFEO0FBQVEsaUJBQU8sRUFBQyxXQUFoQjtBQUE0QixlQUFLLEVBQUMsU0FBbEM7QUFBNEMsY0FBSSxFQUFDLFFBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRJRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwSkQsQ0EvSkQ7O0dBQU1oQyxLO1VBQ2FFLHdELEVBQ0NFLHdELEVBQ0hBLHdEOzs7S0FIWEosSzs7QUFzS1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Zvcm1zLjRmMmJjOWY1YzFjM2FlMmEyYjdiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnO1xyXG5pbXBvcnQge1xyXG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG4gIEtleWJvYXJkVGltZVBpY2tlcixcclxuICBLZXlib2FyZERhdGVQaWNrZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG4vLyBpbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnaG9va3MvdXNlVHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciwgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdhcHBSZWR1eCc7XHJcbmltcG9ydCB7IGZvcm1zQWN0aW9ucyB9IGZyb20gJ2FwcFJlZHV4L2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IGNvbnN0YW50c0FjdGlvbnMgfSBmcm9tICdhcHBSZWR1eC9jb25zdGFudHMnO1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnYXBwUmVkdXgnO1xyXG5cclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL2Zvcm1zL1RleHRJbnB1dCc7XHJcblxyXG5jb25zdCBGb3JtcyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3QgY29uc3RhbnRzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb25zdGFudHMuY29uc3RhbnRzKTtcclxuICBjb25zdCB2YWx1ZXMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZvcm1zLnZhbHVlcz8udGVzdCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIj5Gb3JtczwvVHlwb2dyYXBoeT5cclxuICAgICAgPGZvcm1cclxuICAgICAgICBub1ZhbGlkYXRlXHJcbiAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxNdWlQaWNrZXJzVXRpbHNQcm92aWRlciB1dGlscz17RGF0ZUZuc1V0aWxzfT5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAvLyBlcnJvclxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSZWRkaXRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBWYWx1ZS4uLlwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgLy8gaWQ9XCJyZWRkaXQtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHBhdHRlcm49XCJbQmJdYW5hbmF8W0NjXWhlcnJ5XCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXM/LnRlc3R9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNBY3Rpb25zLm9uQ2hhbmdlVmFsdWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybU5hbWU6ICd0ZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ2lucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgIGlkPVwiY29tYm8tYm94LWRlbW9cIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Y29uc3RhbnRzLmNvdW50cmllc31cclxuICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb259XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbWJvIGJveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSW5wdXRQcm9wcz17eyBkaXNhYmxlVW5kZXJsaW5lOiB0cnVlIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBMaXN0Ym94Q29tcG9uZW50PXsocHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgLi4uY29tUHJvcHMgfSA9IHByb3BzO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCB7Li4uY29tUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbGJhcnMgYXV0b0hlaWdodCBhdXRvSGVpZ2h0TWluPXswfSBhdXRvSGVpZ2h0TWF4PXsyMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbGJhcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgICAgICAgICAgIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICBpZD1cInRhZ3MtZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvbnN0YW50cy5jb3VudHJpZXN9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzPy5tdWx0aXBsZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogYW55LCBuZXdWYWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNBY3Rpb25zLm9uQ2hhbmdlVmFsdWUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgZm9ybU5hbWU6ICd0ZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgIGtleTogJ211bHRpcGxlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXdWYWx1ZSBhcyBzdHJpbmdbXSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gYCR7b3B0aW9ufV9vcHRpb25gfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyVGFncz17KHZhbHVlLCBnZXRUYWdQcm9wcykgPT5cclxuICAgICAgICAgICAgICAgICAgdmFsdWUubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENoaXAgdmFyaWFudD1cIm91dGxpbmVkXCIgbGFiZWw9e29wdGlvbn0gey4uLmdldFRhZ1Byb3BzKHsgaW5kZXggfSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImZyZWVTb2xvXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZhdm9yaXRlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBMaXN0Ym94Q29tcG9uZW50PXsocHJvcHMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgeyBjaGlsZHJlbiwgLi4uY29tUHJvcHMgfSA9IHByb3BzO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCB7Li4uY29tUHJvcHN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbGJhcnMgYXV0b0hlaWdodCBhdXRvSGVpZ2h0TWluPXswfSBhdXRvSGVpZ2h0TWF4PXsyMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbGJhcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJlZGRpdFwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJyZWFjdC1yZWRkaXRcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiSW5jb3JyZWN0IGVudHJ5LlwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZD1cInJlZGRpdC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgIGlkPVwiZGF0ZS1waWNrZXItZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZSBwaWNrZXIgZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgIC8vIGZvcm1hdD1cIk1NL2RkL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcz8uZGF0ZX1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVQYXN0XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgIC8vIG1hc2s9e1svZC8sIC9kLywgJy8nLCAvZC8sIC9kLywgJy8nLCAvZC8sIC9kLywgL2QvLCAvZC9dfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhkYXRlOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1zQWN0aW9ucy5vbkNoYW5nZVZhbHVlKHtcclxuICAgICAgICAgICAgICAgICAgICAgIGZvcm1OYW1lOiAndGVzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEtleWJvYXJkQnV0dG9uUHJvcHM9e3tcclxuICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgaW5wdXRWYXJpYW50PXsnZmlsbGVkJ31cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiZnJlZVNvbG9cIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJkZC9tbS95eXl5XCJcclxuICAgICAgICAgICAgICAgIC8vIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IHdyYXBwZXIuZ2V0U3RhdGljUHJvcHMoKHN0b3JlKSA9PiBhc3luYyAoKSA9PiB7XHJcbiAgYXdhaXQgc3RvcmUuZGlzcGF0Y2goY29uc3RhbnRzQWN0aW9ucy5kb0dldENvbnN0YW50cygpKTtcclxuICByZXR1cm4geyBwcm9wczoge30gfTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==