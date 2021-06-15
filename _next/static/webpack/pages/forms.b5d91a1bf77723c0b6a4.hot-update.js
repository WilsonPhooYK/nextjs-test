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
              options: ['male', 'female'],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Zvcm1zLnRzeCJdLCJuYW1lcyI6WyJGb3JtcyIsImNvbnN0YW50cyIsInVzZUFwcFNlbGVjdG9yIiwic3RhdGUiLCJ2YWx1ZXMiLCJmb3JtcyIsInRlc3QiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidmFsdWUiLCJmaW5kIiwidiIsIm9wdGlvbiIsInRvU3RyaW5nIiwid2lkdGgiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7Q0FFQTs7QUFDQTtBQUtBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsU0FBUyxHQUFHQywrREFBYyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNGLFNBQU4sQ0FBZ0JBLFNBQTNCO0FBQUEsR0FBRCxDQUFoQztBQUNBLE1BQU1HLE1BQU0sR0FBR0YsK0RBQWMsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsa0NBQVdBLEtBQUssQ0FBQ0UsS0FBTixDQUFZRCxNQUF2Qix3REFBVyxvQkFBb0JFLElBQS9CO0FBQUEsR0FBRCxDQUE3QjtBQUVBLHNCQUNFLHFFQUFDLG1FQUFEO0FBQUEsNEJBQ0UscUVBQUMsb0VBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLCtEQUFEO0FBQUEsNkJBQ0UscUVBQUMsNkRBQUQ7QUFBSyxlQUFPLEVBQUUsQ0FBZDtBQUFBLCtCQUNFO0FBQ0Usb0JBQVUsTUFEWjtBQUVFLGtCQUFRLEVBQUUsa0JBQUNDLENBQUQsRUFBTztBQUNmQSxhQUFDLENBQUNDLGVBQUY7QUFDQUQsYUFBQyxDQUFDRSxjQUFGO0FBQ0FDLG1CQUFPLENBQUNDLEdB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QUFBRUUscUJBQUssU0FBUDtBQUFrQkMsc0JBQU07QUFBeEIsZUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBeEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE0RkQsQ0FoR0Q7O0dBQU1sQixLO1VBQ2NFLHVELEVBQ0hBLHVEOzs7S0FGWEYsSzs7QUF1R1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Zvcm1zLmI1ZDkxYTFiZjc3NzIzYzBiNmE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuLy8gaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbi8vIGltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICdob29rcy91c2VUcmFuc2xhdGlvbic7XHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnYXBwUmVkdXgnO1xyXG5pbXBvcnQgeyBjb25zdGFudHNBY3Rpb25zIH0gZnJvbSAnYXBwUmVkdXgvY29uc3RhbnRzJztcclxuXHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJ2FwcFJlZHV4JztcclxuXHJcbmltcG9ydCBGaWVsZEdlbmVyYXRvciBmcm9tICdjb21wb25lbnRzL0Zvcm1zL0ZpZWxkR2VuZXJhdG9yJztcclxuXHJcbmNvbnN0IEZvcm1zID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnN0YW50cyA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuY29uc3RhbnRzLmNvbnN0YW50cyk7XHJcbiAgY29uc3QgdmFsdWVzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5mb3Jtcy52YWx1ZXM/LnRlc3QpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCI+Rm9ybXM8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxQYXBlcj5cclxuICAgICAgICA8Qm94IHBhZGRpbmc9ezJ9PlxyXG4gICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xyXG5cclxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgIHVzZUdyaWRcclxuICAgICAgICAgICAgICAgIGdyaWRTaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJtb25leVwiXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIk15IE1vbmV5XCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJjdXJyZW5jeVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFZhbHVlLi4uXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZpZWxkR2VuZXJhdG9yXHJcbiAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICBncmlkU2l6ZT17Nn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiR2VuZGVyXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJzZWxlY3Rpb25cIlxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucz17WydtYWxlJywgJ2ZlbWFsZSddfVxyXG4gICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyh2YWx1ZSkgPT4gWydtYWxlJywgJ2ZlbWFsZSddLmZpbmQoKHYpID0+IHYgPT09IHZhbHVlKSB8fCAnbWFsZSd9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgIHVzZUdyaWRcclxuICAgICAgICAgICAgICAgIGdyaWRTaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICBmb3JtTmFtZT1cInRlc3RcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbWJvLWJveC1kZW1vXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ291bnRyaWVzXCJcclxuICAgICAgICAgICAgICAgIHN0b3JlT3B0aW9uc1BhdGg9XCJjb25zdGFudHMuY29uc3RhbnRzLmNvdW50cmllc1wiXHJcbiAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgIHVzZUdyaWRcclxuICAgICAgICAgICAgICAgIGdyaWRTaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm11bHRpX3NlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICBmb3JtTmFtZT1cInRlc3RcIlxyXG4gICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0YWdzLWZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvdW50cmllc1wiXHJcbiAgICAgICAgICAgICAgICBzdG9yZU9wdGlvbnNQYXRoPVwiY29uc3RhbnRzLmNvbnN0YW50cy5jb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IGAke29wdGlvbn1fb3B0aW9uYH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgZ3JpZFNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZWRkaXRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJSZWRkaXRcIlxyXG4gICAgICAgICAgICAgICAgaGVscGVyVGV4dD1cIkluY29ycmVjdCBlbnRyeS5cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZpZWxkR2VuZXJhdG9yXHJcbiAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICBncmlkU2l6ZT17Nn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRhdGUgcGlja2VyIGRpYWxvZ1wiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJmbGV4LWVuZFwiIG1hcmdpblRvcD17Mn0+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYDIwMHB4YCwgaGVpZ2h0OiBgNTBweGAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTdWJtaXRcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvUGFwZXI+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gd3JhcHBlci5nZXRTdGF0aWNQcm9wcygoc3RvcmUpID0+IGFzeW5jICgpID0+IHtcclxuICBhd2FpdCBzdG9yZS5kaXNwYXRjaChjb25zdGFudHNBY3Rpb25zLmRvR2V0Q29uc3RhbnRzKCkpO1xyXG4gIHJldHVybiB7IHByb3BzOiB7fSB9O1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1zO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9