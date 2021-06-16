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
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var appRedux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! appRedux */ "./src/appRedux/index.ts");
/* harmony import */ var components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Forms/FieldGenerator */ "./src/components/Forms/FieldGenerator/index.tsx");



var _jsxFileName = "J:\\policypal-web-nextjs\\src\\pages\\forms.tsx",
    _this = undefined,
    _s = $RefreshSig$();






 // import InputAdornment from '@material-ui/core/InputAdornment';

 // import useTranslation from 'hooks/useTranslation';




var Forms = function Forms() {
  _s();

  var values = Object(appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppSelector"])(function (state) {
    var _state$forms$values;

    return (_state$forms$values = state.forms.values) === null || _state$forms$values === void 0 ? void 0 : _state$forms$values.test;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h1",
        children: "Forms"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
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
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
              container: true,
              spacing: 2,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
                lineNumber: 36,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "radio",
                formName: "test",
                title: "Gender",
                name: "selection",
                storeOptionsPath: "constants.constants.gender",
                getOptionLabel: function getOptionLabel(option) {
                  return option.toString();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "select",
                formName: "test",
                name: "combo-box-demo",
                label: "Countries",
                storeOptionsPath: "constants.constants.countries",
                getOptionLabel: function getOptionLabel(option) {
                  return option.toString();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "multi_select",
                formName: "test",
                multiple: true,
                name: "tags-filled",
                label: "Countries",
                storeOptionsPath: "constants.constants.countries",
                getOptionLabel: function getOptionLabel(option) {
                  return option.toString();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "email",
                formName: "test",
                name: "reddit",
                label: "Reddit",
                helperText: "Incorrect entry."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "date",
                formName: "test",
                name: "date",
                label: "Date picker dialog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
                lineNumber: 97,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "radio",
                formName: "test",
                title: "Gender",
                name: "selection",
                storeOptionsPath: "constants.constants.gender",
                getOptionLabel: function getOptionLabel(option) {
                  return option.toString();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 109,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "select",
                formName: "test",
                name: "combo-box-demo",
                label: "Countries",
                storeOptionsPath: "constants.constants.countries",
                getOptionLabel: function getOptionLabel(option) {
                  return option.toString();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "multi_select",
                formName: "test",
                multiple: true,
                name: "tags-filled",
                label: "Countries",
                storeOptionsPath: "constants.constants.countries",
                getOptionLabel: function getOptionLabel(option) {
                  return option.toString();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "email",
                formName: "test",
                name: "reddit",
                label: "Reddit",
                helperText: "Incorrect entry."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 140,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "date",
                formName: "test",
                name: "date",
                label: "Date picker dialog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 149,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
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
                lineNumber: 159,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 158,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

_s(Forms, "2ounKrihAiMwL2aMKxe15VPTmRs=", false, function () {
  return [appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zvcm1zLnRzeCJdLCJuYW1lcyI6WyJGb3JtcyIsInZhbHVlcyIsInVzZUFwcFNlbGVjdG9yIiwic3RhdGUiLCJmb3JtcyIsInRlc3QiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwib3B0aW9uIiwidG9TdHJpbmciLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7Q0FFQTs7QUFDQTtBQUtBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsTUFBTSxHQUFHQywrREFBYyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxrQ0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlILE1BQXZCLHdEQUFXLG9CQUFvQkksSUFBL0I7QUFBQSxHQUFELENBQTdCO0FBQ0Esc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxtRUFBRDtBQUFBLDhCQUNFLHFFQUFDLG9FQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQywrREFBRDtBQUFBLCtCQUNFLHFFQUFDLDZEQUFEO0FBQUssaUJBQU8sRUFBRSxDQUFkO0FBQUEsaUNBQ0U7QUFDRSxzQkFBVSxNQURaO0FBRUUsb0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ2ZBLGVBQUMsQ0FBQ0MsZUFBRjtBQUNBRCxlQUFDLENBQUNFLGNBQUY7QUFDQUMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZVCxNQUFaO0FBRUEscUJBQU8sS0FBUDtBQUNELGFBUkg7QUFBQSxvQ0FVRSxxRUFBQyw4REFBRDtBQUFNLHVCQUFTLE1BQWY7QUFBZ0IscUJBQU8sRUFBRSxDQUF6QjtBQUFBLHNDQUNFLHFFQUFD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LEVBQUMsTUFKWDtBQUtFLG9CQUFJLEVBQUMsTUFMUDtBQU1FLHFCQUFLLEVBQUM7QUFOUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWxIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkYsZUFxSUUscUVBQUMsNkRBQUQ7QUFBSyxxQkFBTyxFQUFDLE1BQWI7QUFBb0IsNEJBQWMsRUFBQyxVQUFuQztBQUE4Qyx1QkFBUyxFQUFFLENBQXpEO0FBQUEscUNBQ0UscUVBQUMsZ0VBQUQ7QUFDRSx1QkFBTyxFQUFDLFdBRFY7QUFFRSxxQkFBSyxFQUFDLFNBRlI7QUFHRSxvQkFBSSxFQUFDLFFBSFA7QUFJRSxxQkFBSyxFQUFFO0FBQUVDLHVCQUFLLFNBQVA7QUFBa0JDLHdCQUFNO0FBQXhCLGlCQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFySUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQTJKRCxDQTdKRDs7R0FBTWQsSztVQUNXRSx1RDs7O0tBRFhGLEs7O0FBb0tTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3Jtcy5kNjAyODM0NWQ4MTllMGU5YmZkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbi8vIGltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG4vLyBpbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnaG9va3MvdXNlVHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ2FwcFJlZHV4JztcclxuaW1wb3J0IHsgY29uc3RhbnRzQWN0aW9ucyB9IGZyb20gJ2FwcFJlZHV4L2NvbnN0YW50cyc7XHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICdhcHBSZWR1eCc7XHJcblxyXG5pbXBvcnQgRmllbGRHZW5lcmF0b3IgZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9GaWVsZEdlbmVyYXRvcic7XHJcblxyXG5jb25zdCBGb3JtcyA9ICgpID0+IHtcclxuICBjb25zdCB2YWx1ZXMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZvcm1zLnZhbHVlcz8udGVzdCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCI+Rm9ybXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFBhcGVyPlxyXG4gICAgICAgICAgPEJveCBwYWRkaW5nPXsyfT5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBub1ZhbGlkYXRlXHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICAgIGdyaWRTaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgICBmb3JtTmFtZT1cInRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibW9uZXlcIlxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT1cIk15IE1vbmV5XCJcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImN1cnJlbmN5XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBWYWx1ZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgICBncmlkU2l6ZT17Nn1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJHZW5kZXJcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgc3RvcmVPcHRpb25zUGF0aD1cImNvbnN0YW50cy5jb25zdGFudHMuZ2VuZGVyXCJcclxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICAgIGdyaWRTaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbWJvLWJveC1kZW1vXCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICBzdG9yZU9wdGlvbnNQYXRoPVwiY29uc3RhbnRzLmNvbnN0YW50cy5jb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkR2VuZXJhdG9yXHJcbiAgICAgICAgICAgICAgICAgIHVzZUdyaWRcclxuICAgICAgICAgICAgICAgICAgZ3JpZFNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJtdWx0aV9zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICBmb3JtTmFtZT1cInRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwidGFncy1maWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvdW50cmllc1wiXHJcbiAgICAgICAgICAgICAgICAgIHN0b3JlT3B0aW9uc1BhdGg9XCJjb25zdGFudHMuY29uc3RhbnRzLmNvdW50cmllc1wiXHJcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24udG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgICBncmlkU2l6ZT17Nn1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInJlZGRpdFwiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUmVkZGl0XCJcclxuICAgICAgICAgICAgICAgICAgaGVscGVyVGV4dD1cIkluY29ycmVjdCBlbnRyeS5cIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICAgIGdyaWRTaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEYXRlIHBpY2tlciBkaWFsb2dcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgICBncmlkU2l6ZT17Nn1cclxuICAgICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vbmV5XCJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNeSBNb25leVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjdXJyZW5jeVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVmFsdWUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkR2VuZXJhdG9yXHJcbiAgICAgICAgICAgICAgICAgIHVzZUdyaWRcclxuICAgICAgICAgICAgICAgICAgZ3JpZFNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiR2VuZGVyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIHN0b3JlT3B0aW9uc1BhdGg9XCJjb25zdGFudHMuY29uc3RhbnRzLmdlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24udG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgICBncmlkU2l6ZT17Nn1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21iby1ib3gtZGVtb1wiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ291bnRyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgc3RvcmVPcHRpb25zUGF0aD1cImNvbnN0YW50cy5jb25zdGFudHMuY291bnRyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICAgIGdyaWRTaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibXVsdGlfc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRhZ3MtZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICBzdG9yZU9wdGlvbnNQYXRoPVwiY29uc3RhbnRzLmNvbnN0YW50cy5jb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkR2VuZXJhdG9yXHJcbiAgICAgICAgICAgICAgICAgIHVzZUdyaWRcclxuICAgICAgICAgICAgICAgICAgZ3JpZFNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWRkaXRcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlZGRpdFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJJbmNvcnJlY3QgZW50cnkuXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgICBncmlkU2l6ZT17Nn1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBmb3JtTmFtZT1cInRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZSBwaWNrZXIgZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCIgbWFyZ2luVG9wPXsyfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYDIwMHB4YCwgaGVpZ2h0OiBgNTBweGAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gd3JhcHBlci5nZXRTdGF0aWNQcm9wcygoc3RvcmUpID0+IGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBzdG9yZS5kaXNwYXRjaChjb25zdGFudHNBY3Rpb25zLmRvR2V0Q29uc3RhbnRzKCkpO1xyXG4gIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9