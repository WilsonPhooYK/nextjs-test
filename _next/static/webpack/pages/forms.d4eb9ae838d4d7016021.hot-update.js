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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var appRedux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! appRedux */ "./src/appRedux/index.ts");
/* harmony import */ var appRedux_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! appRedux/forms */ "./src/appRedux/forms/index.ts");
/* harmony import */ var components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Forms/FieldGenerator */ "./src/components/Forms/FieldGenerator/index.tsx");


var _jsxFileName = "J:\\policypal-web-nextjs\\src\\pages\\forms.tsx",
    _this = undefined,
    _s = $RefreshSig$();







 // import InputAdornment from '@material-ui/core/InputAdornment';


 // import useTranslation from 'hooks/useTranslation';





var Forms = function Forms() {
  _s();

  var dispatch = Object(appRedux__WEBPACK_IMPORTED_MODULE_10__["useAppDispatch"])();
  var constants = Object(appRedux__WEBPACK_IMPORTED_MODULE_10__["useAppSelector"])(function (state) {
    return state.constants.constants;
  });
  var values = Object(appRedux__WEBPACK_IMPORTED_MODULE_10__["useAppSelector"])(function (state) {
    var _state$forms$values;

    return (_state$forms$values = state.forms.values) === null || _state$forms$values === void 0 ? void 0 : _state$forms$values.test;
  });
  console.log('render');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "h1",
      children: "Forms"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
        padding: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
          noValidate: true,
          onSubmit: function onSubmit(e) {
            e.stopPropagation();
            e.preventDefault();
            console.log(values);
            return false;
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_9__["MuiPickersUtilsProvider"], {
            utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_7__["default"],
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
              container: true,
              spacing: 2,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_12__["default"], {
                useGrid: true,
                size: 6,
                formName: "test",
                name: "money",
                title: "My Money" // error
                ,
                type: "currency" // label="Reddit"
                ,
                placeholder: "Enter Value...",
                variant: "filled",
                fullWidth: true // multiline
                // id="reddit-input"
                ,
                required: true // value={values?.test}
                // onChange={(e: any) =>
                //   dispatch(
                //     formsActions.onChangeValue({
                //       formName: 'test',
                //       key: 'input',
                //       value: e.target.value,
                //     })
                //   )
                // }
                // Component={TextInput}

              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_12__["default"], {
                useGrid: true,
                size: 6,
                type: "select",
                formName: "test",
                title: "Gender",
                name: "selection",
                options: ['male', 'female'],
                getOptionLabel: function getOptionLabel(value) {
                  return ['male', 'female'].find(function (v) {
                    return v === value;
                  }) || 'male';
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_12__["default"], {
                useGrid: true,
                size: 6,
                type: "select",
                formName: "test",
                name: "combo-box-demo",
                label: "Countries",
                options: constants.countries || [],
                getOptionLabel: function getOptionLabel(option) {
                  return option.toString();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_12__["default"], {
                useGrid: true,
                size: 6,
                type: "select",
                formName: "test",
                multiple: true,
                name: "tags-filled",
                label: "Countries",
                options: constants.countries || [],
                getOptionLabel: function getOptionLabel(option) {
                  return "".concat(option, "_option");
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_12__["default"], {
                useGrid: true,
                size: 6,
                type: "email",
                formName: "test",
                name: "reddit",
                error: true,
                label: "Reddit",
                helperText: "Incorrect entry."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_12__["default"], {
                useGrid: true,
                size: 6,
                type: "date",
                formName: "test",
                name: "date",
                label: "Date picker dialog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
                item: true,
                xs: 12,
                md: 6,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_9__["KeyboardDatePicker"], {
                  id: "date-picker-dialog",
                  label: "Date picker dialog" // format="MM/dd/yyyy"
                  ,
                  disablePast: true,
                  format: "dd/MM/yyyy" // mask={[/d/, /d/, '/', /d/, /d/, '/', /d/, /d/, /d/, /d/]}
                  ,
                  value: values === null || values === void 0 ? void 0 : values.date,
                  onChange: function onChange(date) {
                    return dispatch(appRedux_forms__WEBPACK_IMPORTED_MODULE_11__["formsActions"].onChangeValue({
                      formName: 'test',
                      key: 'date',
                      value: date
                    }));
                  },
                  KeyboardButtonProps: {
                    'aria-label': 'change date'
                  },
                  fullWidth: true,
                  inputVariant: 'filled',
                  placeholder: "dd/mm/yyyy",
                  size: "small",
                  variant: "inline"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 186,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 185,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                variant: "contained",
                color: "primary",
                type: "submit",
                style: {
                  width: "200px",
                  height: "50px"
                },
                children: "Submit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 216,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s(Forms, "7fAxz+JFEvQs5dAbvueRl62DX/Q=", false, function () {
  return [appRedux__WEBPACK_IMPORTED_MODULE_10__["useAppDispatch"], appRedux__WEBPACK_IMPORTED_MODULE_10__["useAppSelector"], appRedux__WEBPACK_IMPORTED_MODULE_10__["useAppSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zvcm1zLnRzeCJdLCJuYW1lcyI6WyJGb3JtcyIsImRpc3BhdGNoIiwidXNlQXBwRGlzcGF0Y2giLCJjb25zdGFudHMiLCJ1c2VBcHBTZWxlY3RvciIsInN0YXRlIiwidmFsdWVzIiwiZm9ybXMiLCJ0ZXN0IiwiY29uc29sZSIsImxvZyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkRhdGVGbnNVdGlscyIsInZhbHVlIiwiZmluZCIsInYiLCJjb3VudHJpZXMiLCJvcHRpb24iLCJ0b1N0cmluZyIsImRhdGUiLCJmb3Jtc0FjdGlvbnMiLCJvbkNoYW5nZVZhbHVlIiwiZm9ybU5hbWUiLCJrZXkiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7Q0FNQTs7QUFDQTtBQUNBO0FBVUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLGdFQUFjLEVBQS9CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQyxnRUFBYyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFNBQU4sQ0FBZ0JBLFNBQTNCO0FBQUEsR0FBRCxDQUFoQztBQUNBLE1BQU1HLE1BQU0sR0FBR0YsZ0VBQWMsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsa0NBQVdBLEtBQUssQ0FBQ0UsS0FBTixDQUFZRCxNQUF2Qix3REFBVyxvQkFBb0JFLElBQS9CO0FBQUEsR0FBRCxDQUE3QjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBRUEsc0JBQ0UscUVBQUMsbUVBQUQ7QUFBQSw0QkFDRSxxRUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QkFBYyxFQUFDLFVBQW5DO0FBQThDLHVCQUFTLEVBQUUsQ0FBekQ7QUFBQSxxQ0FDRSxxRUFBQyxnRUFBRDtBQUNFLHVCQUFPLEVBQUMsV0FEVjtBQUVFLHFCQUFLLEVBQUMsU0FGUjtBQUdFLG9CQUFJLEVBQUMsUUFIUDtBQUlFLHFCQUFLLEVBQUU7QUFBRUssdUJBQUssU0FBUDtBQUFrQkMsd0JBQU07QUFBeEIsaUJBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXJLRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9NRCxDQTFNRDs7R0FBTTNCLEs7VUFDYUUsd0QsRUFDQ0Usd0QsRUFDSEEsd0Q7OztLQUhYSixLOztBQWlOU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9ybXMuZDRlYjlhZTgzOGQ0ZDcwMTYwMjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcic7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQm94JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgRGF0ZUZuc1V0aWxzIGZyb20gJ0BkYXRlLWlvL2RhdGUtZm5zJztcclxuLy8gaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbmltcG9ydCB7XHJcbiAgTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIsXHJcbiAgLy8gS2V5Ym9hcmRUaW1lUGlja2VyLFxyXG4gIEtleWJvYXJkRGF0ZVBpY2tlcixcclxufSBmcm9tICdAbWF0ZXJpYWwtdWkvcGlja2Vycyc7XHJcbi8vIGltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICdob29rcy91c2VUcmFuc2xhdGlvbic7XHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yLCB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ2FwcFJlZHV4JztcclxuaW1wb3J0IHsgZm9ybXNBY3Rpb25zIH0gZnJvbSAnYXBwUmVkdXgvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgY29uc3RhbnRzQWN0aW9ucyB9IGZyb20gJ2FwcFJlZHV4L2NvbnN0YW50cyc7XHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICdhcHBSZWR1eCc7XHJcblxyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvVGV4dElucHV0JztcclxuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvQnV0dG9uR3JvdXAnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0JztcclxuaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tICdjb21wb25lbnRzL0Zvcm1zL0ZpZWxkV3JhcHBlcic7XHJcbmltcG9ydCBGaWVsZEdlbmVyYXRvciBmcm9tICdjb21wb25lbnRzL0Zvcm1zL0ZpZWxkR2VuZXJhdG9yJztcclxuXHJcbmNvbnN0IEZvcm1zID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuICBjb25zdCBjb25zdGFudHMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbnN0YW50cy5jb25zdGFudHMpO1xyXG4gIGNvbnN0IHZhbHVlcyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZm9ybXMudmFsdWVzPy50ZXN0KTtcclxuICBjb25zb2xlLmxvZygncmVuZGVyJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIj5Gb3JtczwvVHlwb2dyYXBoeT5cclxuICAgICAgPFBhcGVyPlxyXG4gICAgICAgIDxCb3ggcGFkZGluZz17Mn0+XHJcbiAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICBub1ZhbGlkYXRlXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcblxyXG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIHsvKiA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PiAqL31cclxuICAgICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb25leVwiXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTXkgTW9uZXlcIlxyXG4gICAgICAgICAgICAgICAgICAvLyBlcnJvclxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY3VycmVuY3lcIlxyXG4gICAgICAgICAgICAgICAgICAvLyBsYWJlbD1cIlJlZGRpdFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVmFsdWUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgIC8vIG11bHRpbGluZVxyXG4gICAgICAgICAgICAgICAgICAvLyBpZD1cInJlZGRpdC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgIC8vIHZhbHVlPXt2YWx1ZXM/LnRlc3R9XHJcbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAvLyAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgZm9ybXNBY3Rpb25zLm9uQ2hhbmdlVmFsdWUoe1xyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICBmb3JtTmFtZTogJ3Rlc3QnLFxyXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICBrZXk6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIC8vICAgKVxyXG4gICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgIC8vIENvbXBvbmVudD17VGV4dElucHV0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICBmb3JtTmFtZT1cInRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIkdlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtbJ21hbGUnLCAnZmVtYWxlJ119XHJcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsodmFsdWUpID0+IFsnbWFsZScsICdmZW1hbGUnXS5maW5kKCh2KSA9PiB2ID09PSB2YWx1ZSkgfHwgJ21hbGUnfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICBmb3JtTmFtZT1cInRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY29tYm8tYm94LWRlbW9cIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvdW50cmllc1wiXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e2NvbnN0YW50cy5jb3VudHJpZXMgfHwgW119XHJcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24udG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgICBzaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRhZ3MtZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtjb25zdGFudHMuY291bnRyaWVzIHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gYCR7b3B0aW9ufV9vcHRpb25gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICAgIHNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWRkaXRcIlxyXG4gICAgICAgICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlZGRpdFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJJbmNvcnJlY3QgZW50cnkuXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgICBzaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlIHBpY2tlciBkaWFsb2dcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8L0dyaWQ+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e1snbWFsZScsICdmZW1hbGUnXX1cclxuICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsodmFsdWUpID0+IFsnbWFsZScsICdmZW1hbGUnXS5maW5kKCh2KSA9PiB2ID09PSB2YWx1ZSkgfHwgJ21hbGUnfVxyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWU9e3ZhbHVlcz8uc2VsZWN0aW9uIGFzIHN0cmluZyB8IG51bWJlcn1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgLy8gICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb3Jtc0FjdGlvbnMub25DaGFuZ2VWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBmb3JtTmFtZTogJ3Rlc3QnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAga2V5OiAnc2VsZWN0aW9uJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gICApXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIGlkPVwiY29tYm8tYm94LWRlbW9cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Y29uc3RhbnRzLmNvdW50cmllcyB8fCBbXX1cclxuICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24udG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgIGlkPVwidGFncy1maWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Y29uc3RhbnRzLmNvdW50cmllcyB8fCBbXX1cclxuICAgICAgICAgICAgICAgIC8vIHZhbHVlPXt2YWx1ZXM/Lm11bHRpcGxlIGFzIHN0cmluZ1tdfVxyXG4gICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhlOiBhbnksIG5ld1ZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgLy8gICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb3Jtc0FjdGlvbnMub25DaGFuZ2VWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBmb3JtTmFtZTogJ3Rlc3QnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAga2V5OiAnbXVsdGlwbGUnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgdmFsdWU6IG5ld1ZhbHVlIGFzIHN0cmluZ1tdLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAgIClcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBgJHtvcHRpb259X29wdGlvbmB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJlZGRpdFwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJJbmNvcnJlY3QgZW50cnkuXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlkPVwicmVkZGl0LWlucHV0XCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+ICovfVxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGF0ZS1waWNrZXItZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGUgcGlja2VyIGRpYWxvZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9ybWF0PVwiTU0vZGQveXl5eVwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVQYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFzaz17Wy9kLywgL2QvLCAnLycsIC9kLywgL2QvLCAnLycsIC9kLywgL2QvLCAvZC8sIC9kL119XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcz8uZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGU6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3Jtc0FjdGlvbnMub25DaGFuZ2VWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybU5hbWU6ICd0ZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgS2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYXJpYW50PXsnZmlsbGVkJ31cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRkL21tL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCIgbWFyZ2luVG9wPXsyfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYDIwMHB4YCwgaGVpZ2h0OiBgNTBweGAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9NdWlQaWNrZXJzVXRpbHNQcm92aWRlcj5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9QYXBlcj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSB3cmFwcGVyLmdldFN0YXRpY1Byb3BzKChzdG9yZSkgPT4gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IHN0b3JlLmRpc3BhdGNoKGNvbnN0YW50c0FjdGlvbnMuZG9HZXRDb25zdGFudHMoKSk7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=