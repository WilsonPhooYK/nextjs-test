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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
/* harmony import */ var appRedux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! appRedux */ "./src/appRedux/index.ts");
/* harmony import */ var components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Forms/TextInput */ "./src/components/Forms/TextInput/index.tsx");
/* harmony import */ var components_Forms_ButtonGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Forms/ButtonGroup */ "./src/components/Forms/ButtonGroup/index.tsx");
/* harmony import */ var components_Forms_Select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Forms/Select */ "./src/components/Forms/Select/index.tsx");


var _jsxFileName = "J:\\policypal-web-nextjs\\src\\pages\\forms.tsx",
    _this = undefined,
    _s = $RefreshSig$();




 // import InputAdornment from '@material-ui/core/InputAdornment';


 // import useTranslation from 'hooks/useTranslation';






var Forms = function Forms() {
  _s();

  var dispatch = Object(appRedux__WEBPACK_IMPORTED_MODULE_7__["useAppDispatch"])();
  var constants = Object(appRedux__WEBPACK_IMPORTED_MODULE_7__["useAppSelector"])(function (state) {
    return state.constants.constants;
  }); // const values = useAppSelector((state) => state.forms.values?.test);

  console.log('render');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h1",
      children: "Forms"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      noValidate: true,
      onSubmit: function onSubmit(e) {
        e.stopPropagation();
        e.preventDefault();
        console.log(values);
        return false;
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__["MuiPickersUtilsProvider"], {
        utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_4__["default"],
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
          container: true,
          spacing: 2,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
            item: true,
            xs: 12,
            md: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_8__["default"] // error
            , {
              type: "currency",
              label: "Reddit",
              placeholder: "Enter Value...",
              variant: "filled",
              fullWidth: true // multiline
              // id="reddit-input"
              ,
              required: true,
              pattern: "[Bb]anana|[Cc]herry" // value={values?.test}
              // onChange={(e: any) =>
              //   dispatch(
              //     formsActions.onChangeValue({
              //       formName: 'test',
              //       key: 'input',
              //       value: e.target.value,
              //     })
              //   )
              // }

            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
            item: true,
            xs: 12,
            md: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_ButtonGroup__WEBPACK_IMPORTED_MODULE_9__["default"], {
              name: "selection",
              options: ['male', 'female'],
              getOptionLabel: function getOptionLabel(value) {
                return ['male', 'female'].find(function (v) {
                  return v === value;
                }) || 'male';
              } // value={values?.selection as string | number}
              // onChange={(e: any) =>
              //   dispatch(
              //     formsActions.onChangeValue({
              //       formName: 'test',
              //       key: 'selection',
              //       value: e.target.value,
              //     })
              //   )
              // }

            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
            item: true,
            xs: 12,
            md: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
              id: "combo-box-demo",
              label: "Countries",
              options: constants.countries || [],
              getOptionLabel: function getOptionLabel(option) {
                return option.toString();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
            item: true,
            xs: 12,
            md: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_Select__WEBPACK_IMPORTED_MODULE_10__["default"], {
              multiple: true,
              id: "tags-filled",
              label: "Countries",
              options: constants.countries || [] // value={values?.multiple as string[]}
              // onChange={(e: any, newValue) =>
              //   dispatch(
              //     formsActions.onChangeValue({
              //       formName: 'test',
              //       key: 'multiple',
              //       value: newValue as string[],
              //     })
              //   )
              // }
              ,
              getOptionLabel: function getOptionLabel(option) {
                return "".concat(option, "_option");
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
            item: true,
            xs: 12,
            md: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_8__["default"], {
              error: true,
              label: "Reddit",
              defaultValue: "react-reddit",
              variant: "filled",
              helperText: "Incorrect entry.",
              fullWidth: true // id="reddit-input"

            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 113,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
            item: true,
            xs: 12,
            md: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_6__["KeyboardDatePicker"], {
              id: "date-picker-dialog",
              label: "Date picker dialog" // format="MM/dd/yyyy"
              ,
              disablePast: true,
              format: "dd/MM/yyyy" // mask={[/d/, /d/, '/', /d/, /d/, '/', /d/, /d/, /d/, /d/]}
              // value={values?.date}
              // onChange={(date: any) =>
              //   dispatch(
              //     formsActions.onChangeValue({
              //       formName: 'test',
              //       key: 'date',
              //       value: date,
              //     })
              //   )
              // }
              ,
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
              lineNumber: 126,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
          variant: "contained",
          color: "primary",
          type: "submit",
          children: "Submit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, _this);
};

_s(Forms, "tluEUaBN3vGh25HUmpjsWgbDtt8=", false, function () {
  return [appRedux__WEBPACK_IMPORTED_MODULE_7__["useAppDispatch"], appRedux__WEBPACK_IMPORTED_MODULE_7__["useAppSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zvcm1zLnRzeCJdLCJuYW1lcyI6WyJGb3JtcyIsImRpc3BhdGNoIiwidXNlQXBwRGlzcGF0Y2giLCJjb25zdGFudHMiLCJ1c2VBcHBTZWxlY3RvciIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInZhbHVlcyIsIkRhdGVGbnNVdGlscyIsInZhbHVlIiwiZmluZCIsInYiLCJjb3VudHJpZXMiLCJvcHRpb24iLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0NBTUE7O0FBQ0E7QUFPQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFjLEVBQS9CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHQywrREFBYyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFNBQU4sQ0FBZ0JBLFNBQTNCO0FBQUEsR0FBRCxDQUFoQyxDQUZrQixDQUdsQjs7QUFDQUcsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUVBLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsb0VBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQ0UsZ0JBQVUsTUFEWjtBQUVFLGNBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ2ZBLFNBQUMsQ0FBQ0MsZUFBRjtBQUNBRCxTQUFDLENBQUNFLGNBQUY7QUFDQUosZUFBTyxDQUFDQyxHQUFSLENBQVlJLE1BQVo7QUFFQSxlQUFPLEtBQVA7QUFDRCxPQVJIO0FBQUEsNkJBVUUscUVBQUMsNEVBQUQ7QUFBeUIsYUFBSyxFQUFFQyx5REFBaEM7QUFBQSxnQ0FDRSxx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RixlQWlGRSxxRUFBQyw4REFBRDtBQUFNLGdCQUFJLE1BQVY7QUFBVyxjQUFFLEVBQUUsRUFBZjtBQUFtQixjQUFFLEVBQUUsQ0FBdkI7QUFBQSxtQ0FDRSxxRUFBQyx1RUFBRDtBQUNFLGdCQUFFLEVBQUMsb0JBREw7QUFFRSxtQkFBSyxFQUFDLG9CQUZSLENBR0U7QUFIRjtBQUtFLHlCQUFXLE1BTGI7QUFNRSxvQkFBTSxFQUFDLFlBTlQsQ0FPRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJGO0FBa0JFLGlDQUFtQixFQUFFO0FBQ25CLDhCQUFjO0FBREssZUFsQnZCO0FBcUJFLHVCQUFTLE1BckJYO0FBc0JFLDBCQUFZLEVBQUUsUUF0QmhCO0FBdUJFLHlCQUFXLEVBQUMsWUF2QmQ7QUF3QkUsa0JBQUksRUFBQyxPQXhCUDtBQXlCRSxxQkFBTyxFQUFDO0FBekJWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFnSEUscUVBQUMsZ0VBQUQ7QUFBUSxpQkFBTyxFQUFDLFdBQWhCO0FBQTRCLGVBQUssRUFBQyxTQUFsQztBQUE0QyxjQUFJLEVBQUMsUUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaEhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9JRCxDQTFJRDs7R0FBTWpCLEs7VUFDYUUsdUQsRUFDQ0UsdUQ7OztLQUZkSixLOztBQWlKU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9ybXMuMGIwNGI4M2I3YzllOWNlMzFhMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBEYXRlRm5zVXRpbHMgZnJvbSAnQGRhdGUtaW8vZGF0ZS1mbnMnO1xyXG4vLyBpbXBvcnQgSW5wdXRBZG9ybm1lbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRBZG9ybm1lbnQnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IHtcclxuICBNdWlQaWNrZXJzVXRpbHNQcm92aWRlcixcclxuICAvLyBLZXlib2FyZFRpbWVQaWNrZXIsXHJcbiAgS2V5Ym9hcmREYXRlUGlja2VyLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcclxuLy8gaW1wb3J0IHVzZVRyYW5zbGF0aW9uIGZyb20gJ2hvb2tzL3VzZVRyYW5zbGF0aW9uJztcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnYXBwUmVkdXgnO1xyXG5pbXBvcnQgeyBmb3Jtc0FjdGlvbnMgfSBmcm9tICdhcHBSZWR1eC9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBjb25zdGFudHNBY3Rpb25zIH0gZnJvbSAnYXBwUmVkdXgvY29uc3RhbnRzJztcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJ2FwcFJlZHV4JztcclxuXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9UZXh0SW5wdXQnO1xyXG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9CdXR0b25Hcm91cCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9TZWxlY3QnO1xyXG5cclxuY29uc3QgRm9ybXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGNvbnN0YW50cyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29uc3RhbnRzLmNvbnN0YW50cyk7XHJcbiAgLy8gY29uc3QgdmFsdWVzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5mb3Jtcy52YWx1ZXM/LnRlc3QpO1xyXG4gIGNvbnNvbGUubG9nKCdyZW5kZXInKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPkZvcm1zPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIG5vVmFsaWRhdGVcclxuICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyIHV0aWxzPXtEYXRlRm5zVXRpbHN9PlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgIC8vIGVycm9yXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY3VycmVuY3lcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSZWRkaXRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBWYWx1ZS4uLlwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgLy8gbXVsdGlsaW5lXHJcbiAgICAgICAgICAgICAgICAvLyBpZD1cInJlZGRpdC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgcGF0dGVybj1cIltCYl1hbmFuYXxbQ2NdaGVycnlcIlxyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWU9e3ZhbHVlcz8udGVzdH1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgLy8gICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb3Jtc0FjdGlvbnMub25DaGFuZ2VWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBmb3JtTmFtZTogJ3Rlc3QnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAga2V5OiAnaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAgIClcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbkdyb3VwXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e1snbWFsZScsICdmZW1hbGUnXX1cclxuICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsodmFsdWUpID0+IFsnbWFsZScsICdmZW1hbGUnXS5maW5kKCh2KSA9PiB2ID09PSB2YWx1ZSkgfHwgJ21hbGUnfVxyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWU9e3ZhbHVlcz8uc2VsZWN0aW9uIGFzIHN0cmluZyB8IG51bWJlcn1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgLy8gICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb3Jtc0FjdGlvbnMub25DaGFuZ2VWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBmb3JtTmFtZTogJ3Rlc3QnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAga2V5OiAnc2VsZWN0aW9uJyxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIHZhbHVlOiBlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gICApXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgIGlkPVwiY29tYm8tYm94LWRlbW9cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Y29uc3RhbnRzLmNvdW50cmllcyB8fCBbXX1cclxuICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24udG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgIGlkPVwidGFncy1maWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Y29uc3RhbnRzLmNvdW50cmllcyB8fCBbXX1cclxuICAgICAgICAgICAgICAgIC8vIHZhbHVlPXt2YWx1ZXM/Lm11bHRpcGxlIGFzIHN0cmluZ1tdfVxyXG4gICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhlOiBhbnksIG5ld1ZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgLy8gICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb3Jtc0FjdGlvbnMub25DaGFuZ2VWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBmb3JtTmFtZTogJ3Rlc3QnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAga2V5OiAnbXVsdGlwbGUnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgdmFsdWU6IG5ld1ZhbHVlIGFzIHN0cmluZ1tdLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAgIClcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBgJHtvcHRpb259X29wdGlvbmB9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlJlZGRpdFwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJyZWFjdC1yZWRkaXRcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiSW5jb3JyZWN0IGVudHJ5LlwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpZD1cInJlZGRpdC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxLZXlib2FyZERhdGVQaWNrZXJcclxuICAgICAgICAgICAgICAgIGlkPVwiZGF0ZS1waWNrZXItZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZSBwaWNrZXIgZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgIC8vIGZvcm1hdD1cIk1NL2RkL3l5eXlcIlxyXG5cclxuICAgICAgICAgICAgICAgIGRpc2FibGVQYXN0XHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ9XCJkZC9NTS95eXl5XCJcclxuICAgICAgICAgICAgICAgIC8vIG1hc2s9e1svZC8sIC9kLywgJy8nLCAvZC8sIC9kLywgJy8nLCAvZC8sIC9kLywgL2QvLCAvZC9dfVxyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWU9e3ZhbHVlcz8uZGF0ZX1cclxuICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZGF0ZTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgLy8gICBkaXNwYXRjaChcclxuICAgICAgICAgICAgICAgIC8vICAgICBmb3Jtc0FjdGlvbnMub25DaGFuZ2VWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBmb3JtTmFtZTogJ3Rlc3QnLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAga2V5OiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICB2YWx1ZTogZGF0ZSxcclxuICAgICAgICAgICAgICAgIC8vICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLy8gICApXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBLZXlib2FyZEJ1dHRvblByb3BzPXt7XHJcbiAgICAgICAgICAgICAgICAgICdhcmlhLWxhYmVsJzogJ2NoYW5nZSBkYXRlJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGlucHV0VmFyaWFudD17J2ZpbGxlZCd9XHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRkL21tL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L011aVBpY2tlcnNVdGlsc1Byb3ZpZGVyPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gd3JhcHBlci5nZXRTdGF0aWNQcm9wcygoc3RvcmUpID0+IGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBzdG9yZS5kaXNwYXRjaChjb25zdGFudHNBY3Rpb25zLmRvR2V0Q29uc3RhbnRzKCkpO1xyXG4gIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9