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
        lineNumber: 40,
        columnNumber: 7
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
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
            lineNumber: 99,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__["default"], {
        margin: "dense",
        variant: "filled",
        children: "Well never share your email."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 93,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvQnV0dG9uR3JvdXAvQnV0dG9uR3JvdXAudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRHZXRPcHRpb25TZWxlY3RlZCIsIm9wdGlvbiIsInZhbHVlIiwiQnV0dG9uR3JvdXBJbm5lciIsIm9uQ2hhbmdlIiwiZ2V0T3B0aW9uTGFiZWwiLCJnZXRPcHRpb25TZWxlY3RlZCIsIm9wdGlvbnMiLCJuYW1lIiwibWFwIiwidGFyZ2V0IiwiTWVtb0J1dHRvbkdyb3VwSW5uZXIiLCJtZW1vIiwiQnV0dG9uR3JvdXAiLCJzdG9yZU9wdGlvbnNQYXRoIiwicHJvcHMiLCJzdG9yZU9wdGlvbnMiLCJ1c2VBcHBTZWxlY3RvciIsInN0YXRlIiwiZ2V0IiwidXNlU3RhdGUiLCJsb2NhbFZhbHVlIiwic2V0TG9jYWxWYWx1ZSIsIm9uTG9jYWxDaGFuZ2UiLCJ2Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJidXR0b25Hcm91cCIsImlucHV0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTs7QUFXQSxJQUFNQSx3QkFBOEQsR0FBRyxTQUFqRUEsd0JBQWlFLENBQ3JFQyxNQURxRSxFQUVyRUMsS0FGcUU7QUFBQSxTQUdsRUQsTUFBTSxLQUFLQyxLQUh1RDtBQUFBLENBQXZFOztBQUtBLElBQU1DLGdCQUFxQyxHQUFHLFNBQXhDQSxnQkFBd0M7QUFBQSxNQUM1Q0MsUUFENEMsUUFDNUNBLFFBRDRDO0FBQUEsTUFFNUNDLGNBRjRDLFFBRTVDQSxjQUY0QztBQUFBLG1DQUc1Q0MsaUJBSDRDO0FBQUEsTUFHNUNBLGlCQUg0QyxzQ0FHeEJOLHdCQUh3QjtBQUFBLDBCQUk1Q08sT0FKNEM7QUFBQSxNQUk1Q0EsT0FKNEMsNkJB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QUFDLHdFQUFEO0FBQWdCLGNBQU0sRUFBQyxPQUF2QjtBQUErQixlQUFPLEVBQUMsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQkQsQ0FsREQ7O0dBQU1NLFc7VUFRK0JJLHdEOzs7TUFSL0JKLFc7QUFvRFMsa0ZBQUFELGtEQUFJLENBQUNDLFdBQUQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMy44MWI3ODIyNDc4NmJiODM1N2Q1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcclxuaW1wb3J0IHsgRkMsIHVzZVN0YXRlLCBtZW1vLCBDaGFuZ2VFdmVudEhhbmRsZXIsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQ29yZUJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcclxuaW1wb3J0IHsgU3R5bGVzUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdhcHBSZWR1eCc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IENvbW1vbkZpZWxkVHlwZSwgQmFzaWNGaWVsZFZhbHVlLCBCYXNpY1ZhbHVlIH0gZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9mb3JtVHlwZXMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbkdyb3VwLm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uR3JvdXBUeXBlIGV4dGVuZHMgQ29tbW9uRmllbGRUeXBlIHtcclxuICB0eXBlOiAncmFkaW8nO1xyXG4gIHZhbHVlPzogQmFzaWNGaWVsZFZhbHVlO1xyXG4gIG9wdGlvbnM/OiBCYXNpY1ZhbHVlW107XHJcbiAgc3RvcmVPcHRpb25zUGF0aD86IHN0cmluZztcclxuICBnZXRPcHRpb25TZWxlY3RlZD86IDxUPihvcHRpb246IFQsIHZhbHVlOiBCYXNpY1ZhbHVlKSA9PiBib29sZWFuO1xyXG4gIGdldE9wdGlvbkxhYmVsOiAodmFsdWU6IEJhc2ljVmFsdWUpID0+IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdEdldE9wdGlvblNlbGVjdGVkOiBCdXR0b25Hcm91cFR5cGVbJ2dldE9wdGlvblNlbGVjdGVkJ10gPSAoXHJcbiAgb3B0aW9uOiBCYXNpY1ZhbHVlLFxyXG4gIHZhbHVlXHJcbikgPT4gb3B0aW9uID09PSB2YWx1ZTtcclxuXHJcbmNvbnN0IEJ1dHRvbkdyb3VwSW5uZXI6IEZDPEJ1dHRvbkdyb3VwVHlwZT4gPSAoe1xyXG4gIG9uQ2hhbmdlLFxyXG4gIGdldE9wdGlvbkxhYmVsLFxyXG4gIGdldE9wdGlvblNlbGVjdGVkID0gZGVmYXVsdEdldE9wdGlvblNlbGVjdGVkLFxyXG4gIG9wdGlvbnMgPSBbXSxcclxuICB2YWx1ZSxcclxuICBuYW1lLFxyXG59KSA9PiAoXHJcbiAgPENvcmVCdXR0b25Hcm91cCBpZD17bmFtZX0gYXJpYS1sYWJlbD1cImJ1dHRvbiBncm91cFwiPlxyXG4gICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IChcclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGtleT17YG9wdGlvbi0ke29wdGlvbn1gfVxyXG4gICAgICAgIHZhcmlhbnQ9e2dldE9wdGlvblNlbGVjdGVkKHZhbHVlLCBvcHRpb24pID8gJ2NvbnRhaW5lZCcgOiAnb3V0bGluZWQnfVxyXG4gICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgIG9uQ2hhbmdlICYmXHJcbiAgICAgICAgICBvcHRpb24gJiZcclxuICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG9wdGlvbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2dldE9wdGlvbkxhYmVsKG9wdGlvbil9XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgKSl9XHJcbiAgPC9Db3JlQnV0dG9uR3JvdXA+XHJcbik7XHJcblxyXG5jb25zdCBNZW1vQnV0dG9uR3JvdXBJbm5lciA9IG1lbW8oQnV0dG9uR3JvdXBJbm5lcik7XHJcblxyXG5jb25zdCBCdXR0b25Hcm91cDogRkM8QnV0dG9uR3JvdXBUeXBlPiA9ICh7XHJcbiAgdmFsdWUsXHJcbiAgb25DaGFuZ2UsXHJcbiAgb3B0aW9ucyxcclxuICBzdG9yZU9wdGlvbnNQYXRoID0gJycsXHJcbiAgbmFtZSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3Qgc3RvcmVPcHRpb25zOiBCYXNpY1ZhbHVlW10gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IGdldChzdGF0ZSwgc3RvcmVPcHRpb25zUGF0aCkpO1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPEJ1dHRvbkdyb3VwVHlwZVsndmFsdWUnXT4oKTtcclxuXHJcbiAgY29uc3Qgb25Mb2NhbENoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKHYpID0+IHtcclxuICAgIHNldExvY2FsVmFsdWUodi50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVG9Vc2U6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IG9uQ2hhbmdlIHx8IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IG9uQ2hhbmdlID8gdmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZVRvVXNlKSB7XHJcbiAgICAgIG9uQ2hhbmdlVG9Vc2Uoe1xyXG4gICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uc1swXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbdmFsdWVUb1VzZSwgb25DaGFuZ2VUb1VzZSwgb3B0aW9uc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlc1Byb3ZpZGVyIGluamVjdEZpcnN0PlxyXG4gICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9IGZ1bGxXaWR0aD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZVRvVXNlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVG9Vc2V9XHJcbiAgICAgICAgICBpbnB1dENvbXBvbmVudD17KGlucHV0UHJvcHMpID0+IChcclxuICAgICAgICAgICAgPE1lbW9CdXR0b25Hcm91cElubmVyXHJcbiAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxyXG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17c3RvcmVPcHRpb25zIHx8IG9wdGlvbnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0IG1hcmdpbj1cImRlbnNlXCIgdmFyaWFudD1cImZpbGxlZFwiPlxyXG4gICAgICAgICAgV2VsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLlxyXG4gICAgICAgIDwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICA8L1N0eWxlc1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJ1dHRvbkdyb3VwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==