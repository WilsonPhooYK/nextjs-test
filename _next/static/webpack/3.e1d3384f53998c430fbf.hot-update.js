webpackHotUpdate_N_E(3,{

/***/ "./src/components/Forms/ButtonGroup/ButtonGroup.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Forms/ButtonGroup/ButtonGroup.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ButtonGroup.module.scss */ "./src/components/Forms/ButtonGroup/ButtonGroup.module.scss");
/* harmony import */ var _ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\ButtonGroup\\ButtonGroup.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var ButtonGroupInner = function ButtonGroupInner(_ref) {
  var onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      options = _ref.options,
      value = _ref.value,
      name = _ref.name;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: name,
    "aria-label": "button group",
    children: options.map(function (option) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: value === option ? 'contained' : 'outlined',
        color: "primary",
        onClick: function onClick() {
          return onChange && option && onChange({
            target: {
              // @ts-expect-error - Either string or number
              value: option
            }
          });
        },
        children: getOptionLabel(option)
      }, "option-".concat(option), false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 3
  }, _this);
};

_c = ButtonGroupInner;
var MemoButtonGroupInner = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(ButtonGroupInner);
_c2 = MemoButtonGroupInner;

var ButtonGroup = function ButtonGroup(_ref2) {
  _s();

  var value = _ref2.value,
      onChange = _ref2.onChange,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options,
      name = _ref2.name,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["value", "onChange", "getOptionLabel", "options", "name"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(v) {
    setLocalValue(v.target.value);
  };

  var onChangeToUse = onChange || onLocalChange;
  var valueToUse = onChange ? value : localValue;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!valueToUse) {
      onChangeToUse({
        target: {
          // @ts-expect-error - Either string or number
          value: options[0]
        }
      });
    }
  }, [valueToUse, onChangeToUse, options]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["StylesProvider"], {
    injectFirst: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: _ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.buttonGroup,
      fullWidth: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: name,
        value: valueToUse,
        onChange: onChangeToUse,
        inputComponent: function inputComponent(inputProps) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MemoButtonGroupInner, _objectSpread(_objectSpread(_objectSpread({}, props), inputProps), {}, {
            name: name,
            value: value,
            options: options,
            getOptionLabel: getOptionLabel
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        margin: "dense",
        variant: "filled",
        children: "Well never share your email."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, _this);
};

_s(ButtonGroup, "ZhLZ/5IqYyp6CmqtpoLYvy+0VUg=");

_c3 = ButtonGroup;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(ButtonGroup));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ButtonGroupInner");
$RefreshReg$(_c2, "MemoButtonGroupInner");
$RefreshReg$(_c3, "ButtonGroup");
$RefreshReg$(_c4, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvQnV0dG9uR3JvdXAvQnV0dG9uR3JvdXAudHN4Il0sIm5hbWVzIjpbIkJ1dHRvbkdyb3VwSW5uZXIiLCJvbkNoYW5nZSIsImdldE9wdGlvbkxhYmVsIiwib3B0aW9ucyIsInZhbHVlIiwibmFtZSIsIm1hcCIsIm9wdGlvbiIsInRhcmdldCIsIk1lbW9CdXR0b25Hcm91cElubmVyIiwibWVtbyIsIkJ1dHRvbkdyb3VwIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvY2FsVmFsdWUiLCJzZXRMb2NhbFZhbHVlIiwib25Mb2NhbENoYW5nZSIsInYiLCJvbkNoYW5nZVRvVXNlIiwidmFsdWVUb1VzZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsImJ1dHRvbkdyb3VwIiwiaW5wdXRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBV0EsSUFBTUEsZ0JBQXFDLEdBQUcsU0FBeENBLGdCQUF3QztBQUFBLE1BQzVDQyxRQUQ0QyxRQUM1Q0EsUUFENEM7QUFBQSxNQUU1Q0MsY0FGNEMsUUFFNUNBLGNBRjRDO0FBQUEsTUFHNUNDLE9BSDRDLFFBRzVDQSxPQUg0QztBQUFBLE1BSTVDQyxLQUo0QyxRQUk1Q0EsS0FKNEM7QUFBQSxNQUs1Q0MsSUFMNEMsUUFLNUNBLElBTDRDO0FBQUEsc0JBTzVDLHFFQUFDLHFFQUFEO0FBQWlCLE1BQUUsRUFBRUEsSUFBckI7QUFBMkIsa0JBQVcsY0FBdEM7QUFBQSxjQUNHRixPQUFPLENBQUNHLEdBQVIsQ0FBWSxVQUFDQyxNQUFEO0FBQUEsMEJBQ1gscUVBQUMsZ0VBQUQ7QUFFRSxlQUFPLEVBQUVILEtBQUssS0FBS0csTUFBVixHQUFtQixXQUFuQixHQUFpQyxVQUY1QztBQUdFLGFBQUssRUFBQyxTQUhSO0FBSUUsZUFBTyxFQUFFO0FBQUEsaUJBQ1BOLFFBQVEsSUFDUk0sTUFEQSxJQUVBTixRQUFRLENBQUM7QUFDUE8sa0JBQU0sRUFBRTtBQUNOO0FBQ0FKLG1CQUFLLEVBQUVHO0FBRkQ7QUFERCxXQUFELENBSEQ7QUFBQSxTQUpYO0FBQUEsa0JBZUdMLGNBQWMsQ0FBQ0ssTUFBRDtBQWZqQiwwQkFDaUJBLE1BRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBUDRDO0FBQUEsQ0FBOUM7O0tBQU1QLGdCO0FBOEJOLElBQU1TLG9CQUFvQixnQkFBR0Msa0RBQUksQ0FBQ1YsZ0JBQUQsQ0FBakM7TUFBTVMsb0I7O0FBRU4sSUFBTUUsV0FBZ0MsR0FBRyxTQUFuQ0EsV0FBbUMsUUFPbkM7QUFBQTs7QUFBQSxNQU5KUCxLQU1JLFNBTkpBLEtBTUk7QUFBQSxNQUxKSCxRQUtJLFNBTEpBLFFBS0k7QUFBQSxNQUpKQyxjQUlJLFNBSkpBLGNBSUk7QUFBQSxNQUhKQyxPQUdJLFNBSEpBLE9BR0k7QUFBQSxNQUZKRSxJQUVJLFNBRkpBLElBRUk7QUFBQSxNQURETyxLQUNDOztBQUFBLGtCQUNnQ0Msc0RBQVEsRUFEeEM7QUFBQSxNQUNHQyxVQURIO0FBQUEsTUFDZUMsYUFEZjs7QUFHSixNQUFNQyxhQUFtRCxHQUFHLFNBQXREQSxhQUFzRCxDQUFDQyxDQUFELEVBQU87QUFDakVGLGlCQUFhLENBQUNFLENBQUMsQ0FBQ1QsTUFBRixDQUFTSixLQUFWLENBQWI7QUFDRCxHQUZEOztBQUlBLE1BQU1jLGFBQW1ELEdBQUdqQixRQUFRLElBQUllLGFBQXhFO0FBQ0EsTUFBTUcsVUFBVSxHQUFHbEIsUUFBUSxHQUFHRyxLQUFILEdBQVdVLFVBQXRDO0FBRUFNLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ0QsVUFBTCxFQUFpQjtBQUNmRCxtQkFBYSxDQUFDO0FBQ1pWLGNBQU0sRUFBRTtBQUNOO0FBQ0FKLGVBQUssRUFBRUQsT0FBTyxDQUFDLENBQUQ7QUFGUjtBQURJLE9BQUQsQ0FBYjtBQU1EO0FBQ0YsR0FUUSxFQVNOLENBQUNnQixVQUFELEVBQWFELGFBQWIsRUFBNEJmLE9BQTVCLENBVE0sQ0FBVDtBQVdBLHNCQUNFLHFFQUFDLHVFQUFEO0FBQWdCLGVBQVcsTUFBM0I7QUFBQSwyQkFDRSxxRUFBQyxxRUFBRDtBQUFhLGVBQVMsRUFBRWtCLGdFQUFNLENBQUNDLFdBQS9CO0FBQTRDLGVBQVMsTUFBckQ7QUFBQSw4QkFDRSxxRUFBQywrREFBRDtBQUNFLFVBQUUsRUFBRWpCLElBRE47QUFFRSxhQUFLLEVBQUVjLFVBRlQ7QUFHRSxnQkFBUSxFQUFFRCxhQUhaO0FBSUUsc0JBQWMsRUFBRSx3QkFBQ0ssVUFBRDtBQUFBLDhCQUNkLHFFQUFDLG9CQUFELGdEQUNNWCxLQUROLEdBRU1XLFVBRk47QUFHRSxnQkFBSSxFQUFFbEIsSUFIUjtBQUlFLGlCQUFLLEVBQUVELEtBSlQ7QUFLRSxtQkFBTyxFQUFFRCxPQUxYO0FBTUUsMEJBQWMsRUFBRUQ7QUFObEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEYztBQUFBO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWdCRSxxRUFBQyx3RUFBRDtBQUFnQixjQUFNLEVBQUMsT0FBdkI7QUFBK0IsZUFBTyxFQUFDLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQXBERDs7R0FBTVMsVzs7TUFBQUEsVztBQXNEUyxrRkFBQUQsa0RBQUksQ0FBQ0MsV0FBRCxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8zLmUxZDMzODRmNTM5OThjNDMwZmJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQywgdXNlU3RhdGUsIG1lbW8sIENoYW5nZUV2ZW50SGFuZGxlciwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDb3JlQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHQnO1xyXG5pbXBvcnQgeyBTdHlsZXNQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b25Hcm91cC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IENvbW1vbkZpZWxkVHlwZSwgQmFzaWNGaWVsZFZhbHVlLCBCYXNpY1ZhbHVlIH0gZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9mb3JtVHlwZXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Hcm91cFR5cGUgZXh0ZW5kcyBDb21tb25GaWVsZFR5cGUge1xyXG4gIHR5cGU6ICdyYWRpbyc7XHJcbiAgdmFsdWU/OiBCYXNpY0ZpZWxkVmFsdWU7XHJcbiAgb3B0aW9uczogQmFzaWNWYWx1ZVtdO1xyXG4gIGdldE9wdGlvbkxhYmVsOiAodmFsdWU6IEJhc2ljVmFsdWUpID0+IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQnV0dG9uR3JvdXBJbm5lcjogRkM8QnV0dG9uR3JvdXBUeXBlPiA9ICh7XHJcbiAgb25DaGFuZ2UsXHJcbiAgZ2V0T3B0aW9uTGFiZWwsXHJcbiAgb3B0aW9ucyxcclxuICB2YWx1ZSxcclxuICBuYW1lLFxyXG59KSA9PiAoXHJcbiAgPENvcmVCdXR0b25Hcm91cCBpZD17bmFtZX0gYXJpYS1sYWJlbD1cImJ1dHRvbiBncm91cFwiPlxyXG4gICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGtleT17YG9wdGlvbi0ke29wdGlvbn1gfVxyXG4gICAgICAgIHZhcmlhbnQ9e3ZhbHVlID09PSBvcHRpb24gPyAnY29udGFpbmVkJyA6ICdvdXRsaW5lZCd9XHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgb25DaGFuZ2UgJiZcclxuICAgICAgICAgIG9wdGlvbiAmJlxyXG4gICAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7Z2V0T3B0aW9uTGFiZWwob3B0aW9uKX1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICApKX1cclxuICA8L0NvcmVCdXR0b25Hcm91cD5cclxuKTtcclxuXHJcbmNvbnN0IE1lbW9CdXR0b25Hcm91cElubmVyID0gbWVtbyhCdXR0b25Hcm91cElubmVyKTtcclxuXHJcbmNvbnN0IEJ1dHRvbkdyb3VwOiBGQzxCdXR0b25Hcm91cFR5cGU+ID0gKHtcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICBnZXRPcHRpb25MYWJlbCxcclxuICBvcHRpb25zLFxyXG4gIG5hbWUsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPEJ1dHRvbkdyb3VwVHlwZVsndmFsdWUnXT4oKTtcclxuXHJcbiAgY29uc3Qgb25Mb2NhbENoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKHYpID0+IHtcclxuICAgIHNldExvY2FsVmFsdWUodi50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVG9Vc2U6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IG9uQ2hhbmdlIHx8IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IG9uQ2hhbmdlID8gdmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZVRvVXNlKSB7XHJcbiAgICAgIG9uQ2hhbmdlVG9Vc2Uoe1xyXG4gICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uc1swXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbdmFsdWVUb1VzZSwgb25DaGFuZ2VUb1VzZSwgb3B0aW9uc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlc1Byb3ZpZGVyIGluamVjdEZpcnN0PlxyXG4gICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9IGZ1bGxXaWR0aD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIGlkPXtuYW1lfVxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlVG9Vc2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUb1VzZX1cclxuICAgICAgICAgIGlucHV0Q29tcG9uZW50PXsoaW5wdXRQcm9wcykgPT4gKFxyXG4gICAgICAgICAgICA8TWVtb0J1dHRvbkdyb3VwSW5uZXJcclxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17Z2V0T3B0aW9uTGFiZWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0IG1hcmdpbj1cImRlbnNlXCIgdmFyaWFudD1cImZpbGxlZFwiPlxyXG4gICAgICAgICAgV2VsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLlxyXG4gICAgICAgIDwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICA8L1N0eWxlc1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJ1dHRvbkdyb3VwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==