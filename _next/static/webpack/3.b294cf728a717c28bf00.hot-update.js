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
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var appRedux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! appRedux */ "./src/appRedux/index.ts");
/* harmony import */ var _ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ButtonGroup.module.scss */ "./src/components/Forms/ButtonGroup/ButtonGroup.module.scss");
/* harmony import */ var _ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\ButtonGroup\\ButtonGroup.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var defaultGetOptionSelected = function defaultGetOptionSelected(option, value) {
  return option === value;
};

var ButtonGroupInner = function ButtonGroupInner(_ref) {
  var onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      _ref$getOptionSelecte = _ref.getOptionSelected,
      getOptionSelected = _ref$getOptionSelecte === void 0 ? defaultGetOptionSelected : _ref$getOptionSelecte,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      value = _ref.value,
      name = _ref.name;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: name,
    "aria-label": "button group",
    children: options.map(function (option) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: getOptionSelected(value, option) ? 'contained' : 'outlined',
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
        lineNumber: 37,
        columnNumber: 7
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 3
  }, _this);
};

_c = ButtonGroupInner;
var MemoButtonGroupInner = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(ButtonGroupInner);
_c2 = MemoButtonGroupInner;

var ButtonGroup = function ButtonGroup(_ref2) {
  _s();

  var value = _ref2.value,
      onChange = _ref2.onChange,
      options = _ref2.options,
      _ref2$storeOptionsPat = _ref2.storeOptionsPath,
      storeOptionsPath = _ref2$storeOptionsPat === void 0 ? '' : _ref2$storeOptionsPat,
      name = _ref2.name,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["value", "onChange", "options", "storeOptionsPath", "name"]);

  var storeOptions = Object(appRedux__WEBPACK_IMPORTED_MODULE_11__["useAppSelector"])(function (state) {
    return lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(state, storeOptionsPath);
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(v) {
    setLocalValue(v.target.value);
  };

  var onChangeToUse = onChange || onLocalChange;
  var valueToUse = onChange ? value : localValue;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!valueToUse) {
      onChangeToUse({
        target: {
          // @ts-expect-error - Either string or number
          value: options[0]
        }
      });
    }
  }, [valueToUse, onChangeToUse, options]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["StylesProvider"], {
    injectFirst: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: _ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.buttonGroup,
      fullWidth: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: valueToUse,
        onChange: onChangeToUse,
        inputComponent: function inputComponent(inputProps) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MemoButtonGroupInner, _objectSpread(_objectSpread(_objectSpread({}, props), inputProps), {}, {
            name: name,
            options: storeOptions || options
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__["default"], {
        margin: "dense",
        variant: "filled",
        children: "Well never share your email."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, _this);
};

_s(ButtonGroup, "j5MLAmeyPTzhEntCpwx32/qIyDA=", false, function () {
  return [appRedux__WEBPACK_IMPORTED_MODULE_11__["useAppSelector"]];
});

_c3 = ButtonGroup;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(ButtonGroup));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvQnV0dG9uR3JvdXAvQnV0dG9uR3JvdXAudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRHZXRPcHRpb25TZWxlY3RlZCIsIm9wdGlvbiIsInZhbHVlIiwiQnV0dG9uR3JvdXBJbm5lciIsIm9uQ2hhbmdlIiwiZ2V0T3B0aW9uTGFiZWwiLCJnZXRPcHRpb25TZWxlY3RlZCIsIm9wdGlvbnMiLCJuYW1lIiwibWFwIiwidGFyZ2V0IiwiTWVtb0J1dHRvbkdyb3VwSW5uZXIiLCJtZW1vIiwiQnV0dG9uR3JvdXAiLCJzdG9yZU9wdGlvbnNQYXRoIiwicHJvcHMiLCJzdG9yZU9wdGlvbnMiLCJ1c2VBcHBTZWxlY3RvciIsInN0YXRlIiwiZ2V0IiwidXNlU3RhdGUiLCJsb2NhbFZhbHVlIiwic2V0TG9jYWxWYWx1ZSIsIm9uTG9jYWxDaGFuZ2UiLCJ2Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJidXR0b25Hcm91cCIsImlucHV0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTs7QUFXQSxJQUFNQSx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNDLE1BQUQsRUFBcUJDLEtBQXJCO0FBQUEsU0FBK0JELE1BQU0sS0FBS0MsS0FBMUM7QUFBQSxDQUFqQzs7QUFFQSxJQUFNQyxnQkFBcUMsR0FBRyxTQUF4Q0EsZ0JBQXdDO0FBQUEsTUFDNUNDLFFBRDRDLFFBQzVDQSxRQUQ0QztBQUFBLE1BRTVDQyxjQUY0QyxRQUU1Q0EsY0FGNEM7QUFBQSxtQ0FHNUNDLGlCQUg0QztBQUFBLE1BRzVDQSxpQkFINEMsc0NBR3hCTix3QkFId0I7QUFBQSwwQkFJNUNPLE9BSjRDO0FBQUEsTUFJNUNBLE9BSjRDLDZCQUls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Qyx3RUFBRDtBQUFnQixjQUFNLEVBQUMsT0FBdkI7QUFBK0IsZUFBTyxFQUFDLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBbEREOztHQUFNTSxXO1VBUStCSSx3RDs7O01BUi9CSixXO0FBb0RTLGtGQUFBRCxrREFBSSxDQUFDQyxXQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzMuYjI5NGNmNzI4YTcxN2MyOGJmMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XHJcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSwgbWVtbywgQ2hhbmdlRXZlbnRIYW5kbGVyLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENvcmVCdXR0b25Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XHJcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XHJcbmltcG9ydCB7IFN0eWxlc1Byb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnYXBwUmVkdXgnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBDb21tb25GaWVsZFR5cGUsIEJhc2ljRmllbGRWYWx1ZSwgQmFzaWNWYWx1ZSB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvZm9ybVR5cGVzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b25Hcm91cC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkdyb3VwVHlwZSBleHRlbmRzIENvbW1vbkZpZWxkVHlwZSB7XHJcbiAgdHlwZTogJ3JhZGlvJztcclxuICB2YWx1ZT86IEJhc2ljRmllbGRWYWx1ZTtcclxuICBvcHRpb25zPzogQmFzaWNWYWx1ZVtdO1xyXG4gIHN0b3JlT3B0aW9uc1BhdGg/OiBzdHJpbmc7XHJcbiAgZ2V0T3B0aW9uU2VsZWN0ZWQ/OiA8VD4ob3B0aW9uOiBULCB2YWx1ZTogQmFzaWNWYWx1ZSkgPT4gYm9vbGVhbjtcclxuICBnZXRPcHRpb25MYWJlbDogKHZhbHVlOiBCYXNpY1ZhbHVlKSA9PiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRHZXRPcHRpb25TZWxlY3RlZCA9IChvcHRpb246IEJhc2ljVmFsdWUsIHZhbHVlKSA9PiBvcHRpb24gPT09IHZhbHVlO1xyXG5cclxuY29uc3QgQnV0dG9uR3JvdXBJbm5lcjogRkM8QnV0dG9uR3JvdXBUeXBlPiA9ICh7XHJcbiAgb25DaGFuZ2UsXHJcbiAgZ2V0T3B0aW9uTGFiZWwsXHJcbiAgZ2V0T3B0aW9uU2VsZWN0ZWQgPSBkZWZhdWx0R2V0T3B0aW9uU2VsZWN0ZWQsXHJcbiAgb3B0aW9ucyA9IFtdLFxyXG4gIHZhbHVlLFxyXG4gIG5hbWUsXHJcbn0pID0+IChcclxuICA8Q29yZUJ1dHRvbkdyb3VwIGlkPXtuYW1lfSBhcmlhLWxhYmVsPVwiYnV0dG9uIGdyb3VwXCI+XHJcbiAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAga2V5PXtgb3B0aW9uLSR7b3B0aW9ufWB9XHJcbiAgICAgICAgdmFyaWFudD17Z2V0T3B0aW9uU2VsZWN0ZWQodmFsdWUsIG9wdGlvbikgPyAnY29udGFpbmVkJyA6ICdvdXRsaW5lZCd9XHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgb25DaGFuZ2UgJiZcclxuICAgICAgICAgIG9wdGlvbiAmJlxyXG4gICAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7Z2V0T3B0aW9uTGFiZWwob3B0aW9uKX1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICApKX1cclxuICA8L0NvcmVCdXR0b25Hcm91cD5cclxuKTtcclxuXHJcbmNvbnN0IE1lbW9CdXR0b25Hcm91cElubmVyID0gbWVtbyhCdXR0b25Hcm91cElubmVyKTtcclxuXHJcbmNvbnN0IEJ1dHRvbkdyb3VwOiBGQzxCdXR0b25Hcm91cFR5cGU+ID0gKHtcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICBvcHRpb25zLFxyXG4gIHN0b3JlT3B0aW9uc1BhdGggPSAnJyxcclxuICBuYW1lLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCBzdG9yZU9wdGlvbnM6IEJhc2ljVmFsdWVbXSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gZ2V0KHN0YXRlLCBzdG9yZU9wdGlvbnNQYXRoKSk7XHJcbiAgY29uc3QgW2xvY2FsVmFsdWUsIHNldExvY2FsVmFsdWVdID0gdXNlU3RhdGU8QnV0dG9uR3JvdXBUeXBlWyd2YWx1ZSddPigpO1xyXG5cclxuICBjb25zdCBvbkxvY2FsQ2hhbmdlOiBDaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAodikgPT4ge1xyXG4gICAgc2V0TG9jYWxWYWx1ZSh2LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gb25DaGFuZ2UgfHwgb25Mb2NhbENoYW5nZTtcclxuICBjb25zdCB2YWx1ZVRvVXNlID0gb25DaGFuZ2UgPyB2YWx1ZSA6IGxvY2FsVmFsdWU7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlVG9Vc2UpIHtcclxuICAgICAgb25DaGFuZ2VUb1VzZSh7XHJcbiAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgIHZhbHVlOiBvcHRpb25zWzBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFt2YWx1ZVRvVXNlLCBvbkNoYW5nZVRvVXNlLCBvcHRpb25zXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVzUHJvdmlkZXIgaW5qZWN0Rmlyc3Q+XHJcbiAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Hcm91cH0gZnVsbFdpZHRoPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3ZhbHVlVG9Vc2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUb1VzZX1cclxuICAgICAgICAgIGlucHV0Q29tcG9uZW50PXsoaW5wdXRQcm9wcykgPT4gKFxyXG4gICAgICAgICAgICA8TWVtb0J1dHRvbkdyb3VwSW5uZXJcclxuICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgICAgey4uLmlucHV0UHJvcHN9XHJcbiAgICAgICAgICAgICAgbmFtZT17bmFtZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtzdG9yZU9wdGlvbnMgfHwgb3B0aW9uc31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Rm9ybUhlbHBlclRleHQgbWFyZ2luPVwiZGVuc2VcIiB2YXJpYW50PVwiZmlsbGVkXCI+XHJcbiAgICAgICAgICBXZWxsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwuXHJcbiAgICAgICAgPC9Gb3JtSGVscGVyVGV4dD5cclxuICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgIDwvU3R5bGVzUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQnV0dG9uR3JvdXApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9