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

  var constants = Object(appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppSelector"])(function (state) {
    return state.constants.constants;
  });
  var values = Object(appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppSelector"])(function (state) {
    var _state$forms$values;

    return (_state$forms$values = state.forms.values) === null || _state$forms$values === void 0 ? void 0 : _state$forms$values.test;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "h1",
      children: "Forms"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
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
              lineNumber: 37,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
              useGrid: true,
              gridSize: 6,
              type: "select",
              formName: "test",
              title: "Gender",
              name: "selection",
              storeOptionsPath: "constants.constants.genders",
              getOptionLabel: function getOptionLabel(value) {
                return ['male', 'female'].find(function (v) {
                  return v === value;
                }) || 'male';
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
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
              lineNumber: 59,
              columnNumber: 15
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
                return "".concat(option, "_option");
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
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
              lineNumber: 80,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_9__["default"], {
              useGrid: true,
              gridSize: 6,
              type: "date",
              formName: "test",
              name: "date",
              label: "Date picker dialog"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 13
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
              lineNumber: 99,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, _this);
};

_s(Forms, "qHhWOyCLxq3It63XYOhDpwyirJY=", false, function () {
  return [appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppSelector"], appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zvcm1zLnRzeCJdLCJuYW1lcyI6WyJGb3JtcyIsImNvbnN0YW50cyIsInVzZUFwcFNlbGVjdG9yIiwic3RhdGUiLCJ2YWx1ZXMiLCJmb3JtcyIsInRlc3QiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJmaW5kIiwidiIsIm9wdGlvbiIsInRvU3RyaW5nIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7Q0FFQTs7QUFDQTtBQUtBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsU0FBUyxHQUFHQywrREFBYyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFNBQU4sQ0FBZ0JBLFNBQTNCO0FBQUEsR0FBRCxDQUFoQztBQUNBLE1BQU1HLE1BQU0sR0FBR0YsK0RBQWMsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsa0NBQVdBLEtBQUssQ0FBQ0UsS0FBTixDQUFZRCxNQUF2Qix3REFBVyxvQkFBb0JFLElBQS9CO0FBQUEsR0FBRCxDQUE3QjtBQUVBLHNCQUNFLHFFQUFDLG1FQUFEO0FBQUEsNEJBQ0UscUVBQUMsb0VBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLCtEQUFEO0FBQUEsNkJBQ0UscUVBQUMsNkRBQUQ7QUFBSyxlQUFPLEVBQUUsQ0FBZDtBQUFBLCtCQUNFO0FBQ0Usb0JBQVUsTUFEWjtBQUVFLGtCQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUNmQSxhQUFDLENBQUNDLGVBQUY7QUFDQUQsYUFBQyxDQUFDRSxjQUFGO0FBQ0FDLG1CQUFPLENBQUNDLEdB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QUFBa0JDLHNCQUFNO0FBQXhCLGVBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhFRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEZELENBaEdEOztHQUFNbEIsSztVQUNjRSx1RCxFQUNIQSx1RDs7O0tBRlhGLEs7O0FBdUdTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3Jtcy41MmEzYjk2MTBlMDEwYTVkZmUzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IEJveCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Cb3gnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbi8vIGltcG9ydCBJbnB1dEFkb3JubWVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dEFkb3JubWVudCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG4vLyBpbXBvcnQgdXNlVHJhbnNsYXRpb24gZnJvbSAnaG9va3MvdXNlVHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ2FwcFJlZHV4JztcclxuaW1wb3J0IHsgY29uc3RhbnRzQWN0aW9ucyB9IGZyb20gJ2FwcFJlZHV4L2NvbnN0YW50cyc7XHJcblxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICdhcHBSZWR1eCc7XHJcblxyXG5pbXBvcnQgRmllbGRHZW5lcmF0b3IgZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9GaWVsZEdlbmVyYXRvcic7XHJcblxyXG5jb25zdCBGb3JtcyA9ICgpID0+IHtcclxuICBjb25zdCBjb25zdGFudHMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNvbnN0YW50cy5jb25zdGFudHMpO1xyXG4gIGNvbnN0IHZhbHVlcyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZm9ybXMudmFsdWVzPy50ZXN0KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPkZvcm1zPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8UGFwZXI+XHJcbiAgICAgICAgPEJveCBwYWRkaW5nPXsyfT5cclxuICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgIG5vVmFsaWRhdGVcclxuICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWVzKTtcclxuXHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgPEZpZWxkR2VuZXJhdG9yXHJcbiAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICBncmlkU2l6ZT17Nn1cclxuICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwibW9uZXlcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJNeSBNb25leVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiY3VycmVuY3lcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBWYWx1ZS4uLlwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgZ3JpZFNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic2VsZWN0XCJcclxuICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkdlbmRlclwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwic2VsZWN0aW9uXCJcclxuICAgICAgICAgICAgICAgIHN0b3JlT3B0aW9uc1BhdGg9XCJjb25zdGFudHMuY29uc3RhbnRzLmdlbmRlcnNcIlxyXG4gICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyh2YWx1ZSkgPT4gWydtYWxlJywgJ2ZlbWFsZSddLmZpbmQoKHYpID0+IHYgPT09IHZhbHVlKSB8fCAnbWFsZSd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgIHVzZUdyaWRcclxuICAgICAgICAgICAgICAgIGdyaWRTaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICBmb3JtTmFtZT1cInRlc3RcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbWJvLWJveC1kZW1vXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ291bnRyaWVzXCJcclxuICAgICAgICAgICAgICAgIHN0b3JlT3B0aW9uc1BhdGg9XCJjb25zdGFudHMuY29uc3RhbnRzLmNvdW50cmllc1wiXHJcbiAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgIHVzZUdyaWRcclxuICAgICAgICAgICAgICAgIGdyaWRTaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm11bHRpX3NlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICBmb3JtTmFtZT1cInRlc3RcIlxyXG4gICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0YWdzLWZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvdW50cmllc1wiXHJcbiAgICAgICAgICAgICAgICBzdG9yZU9wdGlvbnNQYXRoPVwiY29uc3RhbnRzLmNvbnN0YW50cy5jb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IGAke29wdGlvbn1fb3B0aW9uYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgZ3JpZFNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZWRkaXRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSZWRkaXRcIlxyXG4gICAgICAgICAgICAgICAgaGVscGVyVGV4dD1cIkluY29ycmVjdCBlbnRyeS5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZpZWxkR2VuZXJhdG9yXHJcbiAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICBncmlkU2l6ZT17Nn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGUgcGlja2VyIGRpYWxvZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiIG1hcmdpblRvcD17Mn0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYDIwMHB4YCwgaGVpZ2h0OiBgNTBweGAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gd3JhcHBlci5nZXRTdGF0aWNQcm9wcygoc3RvcmUpID0+IGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBzdG9yZS5kaXNwYXRjaChjb25zdGFudHNBY3Rpb25zLmRvR2V0Q29uc3RhbnRzKCkpO1xyXG4gIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9