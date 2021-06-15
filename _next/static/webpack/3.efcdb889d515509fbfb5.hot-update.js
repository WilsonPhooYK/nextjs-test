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












var compare = function compare(option, value) {
  return option === value;
};

var ButtonGroupInner = function ButtonGroupInner(_ref) {
  var onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      _ref$getOptionSelecte = _ref.getOptionSelected,
      getOptionSelected = _ref$getOptionSelecte === void 0 ? compare : _ref$getOptionSelecte,
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
      var _ref3;

      onChangeToUse({
        target: {
          // @ts-expect-error - Either string or number
          value: (_ref3 = options || storeOptions) === null || _ref3 === void 0 ? void 0 : _ref3[0]
        }
      });
    }
  }, [valueToUse, onChangeToUse, options, storeOptions]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvQnV0dG9uR3JvdXAvQnV0dG9uR3JvdXAudHN4Il0sIm5hbWVzIjpbImNvbXBhcmUiLCJvcHRpb24iLCJ2YWx1ZSIsIkJ1dHRvbkdyb3VwSW5uZXIiLCJvbkNoYW5nZSIsImdldE9wdGlvbkxhYmVsIiwiZ2V0T3B0aW9uU2VsZWN0ZWQiLCJvcHRpb25zIiwibmFtZSIsIm1hcCIsInRhcmdldCIsIk1lbW9CdXR0b25Hcm91cElubmVyIiwibWVtbyIsIkJ1dHRvbkdyb3VwIiwic3RvcmVPcHRpb25zUGF0aCIsInByb3BzIiwic3RvcmVPcHRpb25zIiwidXNlQXBwU2VsZWN0b3IiLCJzdGF0ZSIsImdldCIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwidiIsIm9uQ2hhbmdlVG9Vc2UiLCJ2YWx1ZVRvVXNlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiYnV0dG9uR3JvdXAiLCJpbnB1dFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBb0JDLE1BQXBCLEVBQStCQyxLQUEvQjtBQUFBLFNBQThERCxNQUFNLEtBQUtDLEtBQXpFO0FBQUEsQ0FBaEI7O0FBV0EsSUFBTUMsZ0JBQXFDLEdBQUcsU0FBeENBLGdCQUF3QztBQUFBLE1BQzVDQyxRQUQ0QyxRQUM1Q0EsUUFENEM7QUFBQSxNQUU1Q0MsY0FGNEMsUUFFNUNBLGNBRjRDO0FBQUEsbUNBRzVDQyxpQkFINEM7QUFBQSxNQUc1Q0EsaUJBSDRDLHNDQUd4Qk4sT0FId0I7QUFBQSwwQkFJNUNPLE9BSjRDO0FBQUEsTUFJNUNBLE9BSjRDLDZCQUlsQyxFQUprQztBQUFBLE1BSzVDTCxL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LGVBREYsZUFhRSxxRUFBQyx3RUFBRDtBQUFnQixjQUFNLEVBQUMsT0FBdkI7QUFBK0IsZUFBTyxFQUFDLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBbEREOztHQUFNTSxXO1VBUStCSSx3RDs7O01BUi9CSixXO0FBb0RTLGtGQUFBRCxrREFBSSxDQUFDQyxXQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzMuZWZjZGI4ODlkNTE1NTA5ZmJmYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XHJcbmltcG9ydCB7IEZDLCB1c2VTdGF0ZSwgbWVtbywgQ2hhbmdlRXZlbnRIYW5kbGVyLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IENvcmVCdXR0b25Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25Hcm91cCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBJbnB1dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dCc7XHJcbmltcG9ydCBGb3JtSGVscGVyVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtSGVscGVyVGV4dCc7XHJcbmltcG9ydCB7IFN0eWxlc1Byb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnYXBwUmVkdXgnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBDb21tb25GaWVsZFR5cGUsIEJhc2ljRmllbGRWYWx1ZSwgQmFzaWNWYWx1ZSB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvZm9ybVR5cGVzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b25Hcm91cC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBjb21wYXJlID0gPFQgZXh0ZW5kcyB1bmtub3duPihvcHRpb246IFQsIHZhbHVlOiBCYXNpY1ZhbHVlKTogYm9vbGVhbiA9PiBvcHRpb24gPT09IHZhbHVlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Hcm91cFR5cGUgZXh0ZW5kcyBDb21tb25GaWVsZFR5cGUge1xyXG4gIHR5cGU6ICdyYWRpbyc7XHJcbiAgdmFsdWU/OiBCYXNpY0ZpZWxkVmFsdWU7XHJcbiAgb3B0aW9ucz86IEJhc2ljVmFsdWVbXTtcclxuICBzdG9yZU9wdGlvbnNQYXRoPzogc3RyaW5nO1xyXG4gIGdldE9wdGlvblNlbGVjdGVkPzogPFQgZXh0ZW5kcyB1bmtub3duPihvcHRpb246IFQsIHZhbHVlOiBCYXNpY1ZhbHVlKSA9PiBib29sZWFuO1xyXG4gIGdldE9wdGlvbkxhYmVsOiAodmFsdWU6IEJhc2ljVmFsdWUpID0+IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQnV0dG9uR3JvdXBJbm5lcjogRkM8QnV0dG9uR3JvdXBUeXBlPiA9ICh7XHJcbiAgb25DaGFuZ2UsXHJcbiAgZ2V0T3B0aW9uTGFiZWwsXHJcbiAgZ2V0T3B0aW9uU2VsZWN0ZWQgPSBjb21wYXJlLFxyXG4gIG9wdGlvbnMgPSBbXSxcclxuICB2YWx1ZSxcclxuICBuYW1lLFxyXG59KSA9PiAoXHJcbiAgPENvcmVCdXR0b25Hcm91cCBpZD17bmFtZX0gYXJpYS1sYWJlbD1cImJ1dHRvbiBncm91cFwiPlxyXG4gICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGtleT17YG9wdGlvbi0ke29wdGlvbn1gfVxyXG4gICAgICAgIHZhcmlhbnQ9e2dldE9wdGlvblNlbGVjdGVkKHZhbHVlLCBvcHRpb24pID8gJ2NvbnRhaW5lZCcgOiAnb3V0bGluZWQnfVxyXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgIG9uQ2hhbmdlICYmXHJcbiAgICAgICAgICBvcHRpb24gJiZcclxuICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2dldE9wdGlvbkxhYmVsKG9wdGlvbil9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKSl9XHJcbiAgPC9Db3JlQnV0dG9uR3JvdXA+XHJcbik7XHJcblxyXG5jb25zdCBNZW1vQnV0dG9uR3JvdXBJbm5lciA9IG1lbW8oQnV0dG9uR3JvdXBJbm5lcik7XHJcblxyXG5jb25zdCBCdXR0b25Hcm91cDogRkM8QnV0dG9uR3JvdXBUeXBlPiA9ICh7XHJcbiAgdmFsdWUsXHJcbiAgb25DaGFuZ2UsXHJcbiAgb3B0aW9ucyxcclxuICBzdG9yZU9wdGlvbnNQYXRoID0gJycsXHJcbiAgbmFtZSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3Qgc3RvcmVPcHRpb25zOiBCYXNpY1ZhbHVlW10gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IGdldChzdGF0ZSwgc3RvcmVPcHRpb25zUGF0aCkpO1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPEJ1dHRvbkdyb3VwVHlwZVsndmFsdWUnXT4oKTtcclxuXHJcbiAgY29uc3Qgb25Mb2NhbENoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKHYpID0+IHtcclxuICAgIHNldExvY2FsVmFsdWUodi50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVG9Vc2U6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IG9uQ2hhbmdlIHx8IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IG9uQ2hhbmdlID8gdmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZVRvVXNlKSB7XHJcbiAgICAgIG9uQ2hhbmdlVG9Vc2Uoe1xyXG4gICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICB2YWx1ZTogKG9wdGlvbnMgfHwgc3RvcmVPcHRpb25zKT8uWzBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFt2YWx1ZVRvVXNlLCBvbkNoYW5nZVRvVXNlLCBvcHRpb25zLCBzdG9yZU9wdGlvbnNdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdHlsZXNQcm92aWRlciBpbmplY3RGaXJzdD5cclxuICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkdyb3VwfSBmdWxsV2lkdGg+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWVUb1VzZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRvVXNlfVxyXG4gICAgICAgICAgaW5wdXRDb21wb25lbnQ9eyhpbnB1dFByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgIDxNZW1vQnV0dG9uR3JvdXBJbm5lclxyXG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cclxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e3N0b3JlT3B0aW9ucyB8fCBvcHRpb25zfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxGb3JtSGVscGVyVGV4dCBtYXJnaW49XCJkZW5zZVwiIHZhcmlhbnQ9XCJmaWxsZWRcIj5cclxuICAgICAgICAgIFdlbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbC5cclxuICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgPC9TdHlsZXNQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhCdXR0b25Hcm91cCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=