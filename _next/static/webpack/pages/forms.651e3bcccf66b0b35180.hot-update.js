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
/* harmony import */ var components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Forms/FieldGenerator */ "./src/components/Forms/FieldGenerator/index.tsx");


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
  console.log(constants);
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
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_11__["default"], {
                useGrid: true,
                gridSize: 6,
                formName: "test",
                name: "money",
                title: "My Money",
                type: "currency",
                placeholder: "Enter Value...",
                variant: "filled",
                fullWidth: true,
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_11__["default"], {
                useGrid: true,
                gridSize: 6,
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
                lineNumber: 65,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_11__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "select",
                formName: "test",
                name: "combo-box-demo",
                label: "Countries",
                options: ['male', 'female', 'dog', 'sasda'],
                getOptionLabel: function getOptionLabel(option) {
                  return option.toString();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_11__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "multi_select",
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
                lineNumber: 85,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_11__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "email",
                formName: "test",
                name: "reddit",
                error: true,
                label: "Reddit",
                helperText: "Incorrect entry."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_11__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "date",
                formName: "test",
                name: "date",
                label: "Date picker dialog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
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
                lineNumber: 201,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zvcm1zLnRzeCJdLCJuYW1lcyI6WyJGb3JtcyIsImRpc3BhdGNoIiwidXNlQXBwRGlzcGF0Y2giLCJjb25zdGFudHMiLCJ1c2VBcHBTZWxlY3RvciIsInN0YXRlIiwidmFsdWVzIiwiZm9ybXMiLCJ0ZXN0IiwiY29uc29sZSIsImxvZyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsIkRhdGVGbnNVdGlscyIsInZhbHVlIiwiZmluZCIsInYiLCJvcHRpb24iLCJ0b1N0cmluZyIsImNvdW50cmllcyIsIndpZHRoIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0NBTUE7O0FBQ0E7QUFXQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsZ0VBQWMsRUFBL0I7QUFDQSxNQUFNQyxTQUFTLEdBQUdDLGdFQUFjLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0YsU0FBTixDQUFnQkEsU0FBM0I7QUFBQSxHQUFELENBQWhDO0FBQ0EsTUFBTUcsTUFBTSxHQUFHRixnRUFBYyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxrQ0FBV0EsS0FBSyxDQUFDRSxLQUFOLENBQVlELE1BQXZCLHdEQUFXLG9CQUFvQkUsSUFBL0I7QUFBQSxHQUFELENBQTdCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZUCxTQUFaO0FBRUEsc0JBQ0UscUVBQUMsbUVBQUQ7QUFBQSw0QkFDRSxxRUFBQyxvRUFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsK0RBQUQ7QUFBQSw2QkFDRSxxRUFBQyw2REFBRDtBQUFLLGVBQU8s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LHFCQUFLLEVBQUM7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXZERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFzSkUscUVBQUMsNkRBQUQ7QUFBSyxxQkFBTyxFQUFDLE1BQWI7QUFBb0IsNEJBQWMsRUFBQyxVQUFuQztBQUE4Qyx1QkFBUyxFQUFFLENBQXpEO0FBQUEscUNBQ0UscUVBQUMsZ0VBQUQ7QUFDRSx1QkFBTyxFQUFDLFdBRFY7QUFFRSxxQkFBSyxFQUFDLFNBRlI7QUFHRSxvQkFBSSxFQUFDLFFBSFA7QUFJRSxxQkFBSyxFQUFFO0FBQUVHLHVCQUFLLFNBQVA7QUFBa0JDLHdCQUFNO0FBQXhCLGlCQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF0SkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxTEQsQ0EzTEQ7O0dBQU10QixLO1VBQ2FFLHdELEVBQ0NFLHdELEVBQ0hBLHdEOzs7S0FIWEosSzs7QUFrTVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Zvcm1zLjY1MWUzYmNjY2Y2NmIwYjM1MTgwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XHJcbi8vIGltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQge1xyXG4gIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxyXG4gIC8vIEtleWJvYXJkVGltZVBpY2tlcixcclxuICBLZXlib2FyZERhdGVQaWNrZXIsXHJcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL3BpY2tlcnMnO1xyXG4vLyBpbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnaG9va3MvdXNlVHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciwgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdhcHBSZWR1eCc7XHJcbmltcG9ydCB7IGZvcm1zQWN0aW9ucyB9IGZyb20gJ2FwcFJlZHV4L2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IGNvbnN0YW50c0FjdGlvbnMgfSBmcm9tICdhcHBSZWR1eC9jb25zdGFudHMnO1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnYXBwUmVkdXgnO1xyXG5cclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm1zL1RleHRJbnB1dCc7XHJcbmltcG9ydCBCdXR0b25Hcm91cCBmcm9tICdjb21wb25lbnRzL0Zvcm1zL0J1dHRvbkdyb3VwJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdjb21wb25lbnRzL0Zvcm1zL1NlbGVjdCc7XHJcbmltcG9ydCBGaWVsZFdyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9GaWVsZFdyYXBwZXInO1xyXG5pbXBvcnQgRmllbGRHZW5lcmF0b3IgZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9GaWVsZEdlbmVyYXRvcic7XHJcblxyXG5jb25zdCBGb3JtcyA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgY29uc3QgY29uc3RhbnRzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jb25zdGFudHMuY29uc3RhbnRzKTtcclxuICBjb25zdCB2YWx1ZXMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZvcm1zLnZhbHVlcz8udGVzdCk7XHJcbiAgY29uc29sZS5sb2coY29uc3RhbnRzKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPkZvcm1zPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8UGFwZXI+XHJcbiAgICAgICAgPEJveCBwYWRkaW5nPXsyfT5cclxuICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgIG5vVmFsaWRhdGVcclxuICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TXVpUGlja2Vyc1V0aWxzUHJvdmlkZXIgdXRpbHM9e0RhdGVGbnNVdGlsc30+XHJcbiAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+ICovfVxyXG4gICAgICAgICAgICAgICAgPEZpZWxkR2VuZXJhdG9yXHJcbiAgICAgICAgICAgICAgICAgIHVzZUdyaWRcclxuICAgICAgICAgICAgICAgICAgZ3JpZFNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb25leVwiXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTXkgTW9uZXlcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY3VycmVuY3lcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFZhbHVlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICAgIGdyaWRTaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJHZW5kZXJcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17WydtYWxlJywgJ2ZlbWFsZSddfVxyXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KHZhbHVlKSA9PiBbJ21hbGUnLCAnZmVtYWxlJ10uZmluZCgodikgPT4gdiA9PT0gdmFsdWUpIHx8ICdtYWxlJ31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgICBncmlkU2l6ZT17Nn1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21iby1ib3gtZGVtb1wiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ291bnRyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17WydtYWxlJywgJ2ZlbWFsZScsICdkb2cnLCAnc2FzZGEnXX1cclxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICAgIGdyaWRTaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibXVsdGlfc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRhZ3MtZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtjb25zdGFudHMuY291bnRyaWVzIHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gYCR7b3B0aW9ufV9vcHRpb25gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICAgIGdyaWRTaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICBmb3JtTmFtZT1cInRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicmVkZGl0XCJcclxuICAgICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSZWRkaXRcIlxyXG4gICAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PVwiSW5jb3JyZWN0IGVudHJ5LlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkR2VuZXJhdG9yXHJcbiAgICAgICAgICAgICAgICAgIHVzZUdyaWRcclxuICAgICAgICAgICAgICAgICAgZ3JpZFNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGUgcGlja2VyIGRpYWxvZ1wiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDwvR3JpZD4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uR3JvdXBcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17WydtYWxlJywgJ2ZlbWFsZSddfVxyXG4gICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyh2YWx1ZSkgPT4gWydtYWxlJywgJ2ZlbWFsZSddLmZpbmQoKHYpID0+IHYgPT09IHZhbHVlKSB8fCAnbWFsZSd9XHJcbiAgICAgICAgICAgICAgICAvLyB2YWx1ZT17dmFsdWVzPy5zZWxlY3Rpb24gYXMgc3RyaW5nIHwgbnVtYmVyfVxyXG4gICAgICAgICAgICAgICAgLy8gb25DaGFuZ2U9eyhlOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAvLyAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvcm1zQWN0aW9ucy5vbkNoYW5nZVZhbHVlKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIGZvcm1OYW1lOiAndGVzdCcsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBrZXk6ICdzZWxlY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgdmFsdWU6IGUudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgICAgICAgICAvLyAgIClcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjb21iby1ib3gtZGVtb1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvdW50cmllc1wiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtjb25zdGFudHMuY291bnRyaWVzIHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJ0YWdzLWZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvdW50cmllc1wiXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXtjb25zdGFudHMuY291bnRyaWVzIHx8IFtdfVxyXG4gICAgICAgICAgICAgICAgLy8gdmFsdWU9e3ZhbHVlcz8ubXVsdGlwbGUgYXMgc3RyaW5nW119XHJcbiAgICAgICAgICAgICAgICAvLyBvbkNoYW5nZT17KGU6IGFueSwgbmV3VmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICAvLyAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZvcm1zQWN0aW9ucy5vbkNoYW5nZVZhbHVlKHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgIGZvcm1OYW1lOiAndGVzdCcsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICBrZXk6ICdtdWx0aXBsZScsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICB2YWx1ZTogbmV3VmFsdWUgYXMgc3RyaW5nW10sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vICAgKVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IGAke29wdGlvbn1fb3B0aW9uYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVkZGl0XCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgaGVscGVyVGV4dD1cIkluY29ycmVjdCBlbnRyeS5cIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaWQ9XCJyZWRkaXQtaW5wdXRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD4gKi99XHJcbiAgICAgICAgICAgICAgICB7LyogPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICAgICAgPEtleWJvYXJkRGF0ZVBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZGF0ZS1waWNrZXItZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGUgcGlja2VyIGRpYWxvZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZm9ybWF0PVwiTU0vZGQveXl5eVwiXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVQYXN0XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiZGQvTU0veXl5eVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWFzaz17Wy9kLywgL2QvLCAnLycsIC9kLywgL2QvLCAnLycsIC9kLywgL2QvLCAvZC8sIC9kL119XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcz8uZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGRhdGU6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3Jtc0FjdGlvbnMub25DaGFuZ2VWYWx1ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybU5hbWU6ICd0ZXN0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgS2V5Ym9hcmRCdXR0b25Qcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAnY2hhbmdlIGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRWYXJpYW50PXsnZmlsbGVkJ31cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImRkL21tL3l5eXlcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImlubGluZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+ICovfVxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiIG1hcmdpblRvcD17Mn0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGAyMDBweGAsIGhlaWdodDogYDUwcHhgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFN1Ym1pdFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvTXVpUGlja2Vyc1V0aWxzUHJvdmlkZXI+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gd3JhcHBlci5nZXRTdGF0aWNQcm9wcygoc3RvcmUpID0+IGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBzdG9yZS5kaXNwYXRjaChjb25zdGFudHNBY3Rpb25zLmRvR2V0Q29uc3RhbnRzKCkpO1xyXG4gIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9