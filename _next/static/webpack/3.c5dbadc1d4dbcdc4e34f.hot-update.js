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












var ButtonGroupInner = function ButtonGroupInner(_ref) {
  var onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      options = _ref.options,
      value = _ref.value,
      name = _ref.name;
  return options && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: name,
    "aria-label": "button group",
    children: options.map(function (option) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        lineNumber: 34,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, _this);
};

_c = ButtonGroupInner;
var MemoButtonGroupInner = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(ButtonGroupInner);
_c2 = MemoButtonGroupInner;

var ButtonGroup = function ButtonGroup(_ref2) {
  _s();

  var value = _ref2.value,
      onChange = _ref2.onChange,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options,
      _ref2$storeOptionsPat = _ref2.storeOptionsPath,
      storeOptionsPath = _ref2$storeOptionsPat === void 0 ? '' : _ref2$storeOptionsPat,
      name = _ref2.name,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["value", "onChange", "getOptionLabel", "options", "storeOptionsPath", "name"]);

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
        id: name,
        value: valueToUse,
        onChange: onChangeToUse,
        inputComponent: function inputComponent(inputProps) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MemoButtonGroupInner, _objectSpread(_objectSpread(_objectSpread({}, props), inputProps), {}, {
            name: name,
            value: value,
            options: storeOptions || options || [],
            getOptionLabel: getOptionLabel
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__["default"], {
        margin: "dense",
        variant: "filled",
        children: "Well never share your email."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvQnV0dG9uR3JvdXAvQnV0dG9uR3JvdXAudHN4Il0sIm5hbWVzIjpbIkJ1dHRvbkdyb3VwSW5uZXIiLCJvbkNoYW5nZSIsImdldE9wdGlvbkxhYmVsIiwib3B0aW9ucyIsInZhbHVlIiwibmFtZSIsIm1hcCIsIm9wdGlvbiIsInRhcmdldCIsIk1lbW9CdXR0b25Hcm91cElubmVyIiwibWVtbyIsIkJ1dHRvbkdyb3VwIiwic3RvcmVPcHRpb25zUGF0aCIsInByb3BzIiwic3RvcmVPcHRpb25zIiwidXNlQXBwU2VsZWN0b3IiLCJzdGF0ZSIsImdldCIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwidiIsIm9uQ2hhbmdlVG9Vc2UiLCJ2YWx1ZVRvVXNlIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiYnV0dG9uR3JvdXAiLCJpbnB1dFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7O0FBVUEsSUFBTUEsZ0JBQXFDLEdBQUcsU0FBeENBLGdCQUF3QztBQUFBLE1BQzVDQyxRQUQ0QyxRQUM1Q0EsUUFENEM7QUFBQSxNQUU1Q0MsY0FGNEMsUUFFNUNBLGNBRjRDO0FBQUEsTUFHNUNDLE9BSDRDLFFBRzVDQSxPQUg0QztBQUFBLE1BSTVDQyxLQUo0QyxRQUk1Q0EsS0FKNEM7QUFBQSxNQUs1Q0MsSUFMNEMsUUFLNUNBLElBTDRDO0FBQUEsU0FPNUNGLE9BQU8saUJBQ0wscUVBQUMscUVBQUQ7QUFBaUIsTUFBRSxFQUFFRSxJQUFyQjtBQUEyQixrQkFBVyxjQUF0QztBQUFBLGNBQ0dGLE9BQU8sQ0FBQ0csR0FBUixDQUFZLFVBQUNDLE1BQUQ7QUFBQSwwQkFDWCxxRUFBQyxnRUFBRDtBQUVFLGVBQU8s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QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCRCxDQXRERDs7R0FBTVMsVztVQVMrQkksd0Q7OztNQVQvQkosVztBQXdEUyxrRkFBQUQsa0RBQUksQ0FBQ0MsV0FBRCxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8zLmM1ZGJhZGMxZDRkYmNkYzRlMzRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xyXG5pbXBvcnQgeyBGQywgdXNlU3RhdGUsIG1lbW8sIENoYW5nZUV2ZW50SGFuZGxlciwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBDb3JlQnV0dG9uR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uR3JvdXAnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXQnO1xyXG5pbXBvcnQgRm9ybUhlbHBlclRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUhlbHBlclRleHQnO1xyXG5pbXBvcnQgeyBTdHlsZXNQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ2FwcFJlZHV4JztcclxuXHJcbmltcG9ydCB0eXBlIHsgQ29tbW9uRmllbGRUeXBlLCBCYXNpY0ZpZWxkVmFsdWUsIEJhc2ljVmFsdWUgfSBmcm9tICdjb21wb25lbnRzL0Zvcm1zL2Zvcm1UeXBlcyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uR3JvdXAubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCdXR0b25Hcm91cFR5cGUgZXh0ZW5kcyBDb21tb25GaWVsZFR5cGUge1xyXG4gIHR5cGU6ICdyYWRpbyc7XHJcbiAgdmFsdWU/OiBCYXNpY0ZpZWxkVmFsdWU7XHJcbiAgb3B0aW9ucz86IEJhc2ljVmFsdWVbXTtcclxuICBzdG9yZU9wdGlvbnNQYXRoPzogc3RyaW5nO1xyXG4gIGdldE9wdGlvbkxhYmVsOiAodmFsdWU6IEJhc2ljVmFsdWUpID0+IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQnV0dG9uR3JvdXBJbm5lcjogRkM8QnV0dG9uR3JvdXBUeXBlPiA9ICh7XHJcbiAgb25DaGFuZ2UsXHJcbiAgZ2V0T3B0aW9uTGFiZWwsXHJcbiAgb3B0aW9ucyxcclxuICB2YWx1ZSxcclxuICBuYW1lLFxyXG59KSA9PlxyXG4gIG9wdGlvbnMgJiYgKFxyXG4gICAgPENvcmVCdXR0b25Hcm91cCBpZD17bmFtZX0gYXJpYS1sYWJlbD1cImJ1dHRvbiBncm91cFwiPlxyXG4gICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGtleT17YG9wdGlvbi0ke29wdGlvbn1gfVxyXG4gICAgICAgICAgdmFyaWFudD17dmFsdWUgPT09IG9wdGlvbiA/ICdjb250YWluZWQnIDogJ291dGxpbmVkJ31cclxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICBvbkNoYW5nZSAmJlxyXG4gICAgICAgICAgICBvcHRpb24gJiZcclxuICAgICAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2dldE9wdGlvbkxhYmVsKG9wdGlvbil9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICkpfVxyXG4gICAgPC9Db3JlQnV0dG9uR3JvdXA+XHJcbiAgKTtcclxuXHJcbmNvbnN0IE1lbW9CdXR0b25Hcm91cElubmVyID0gbWVtbyhCdXR0b25Hcm91cElubmVyKTtcclxuXHJcbmNvbnN0IEJ1dHRvbkdyb3VwOiBGQzxCdXR0b25Hcm91cFR5cGU+ID0gKHtcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICBnZXRPcHRpb25MYWJlbCxcclxuICBvcHRpb25zLFxyXG4gIHN0b3JlT3B0aW9uc1BhdGggPSAnJyxcclxuICBuYW1lLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCBzdG9yZU9wdGlvbnM6IEJhc2ljVmFsdWVbXSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gZ2V0KHN0YXRlLCBzdG9yZU9wdGlvbnNQYXRoKSk7XHJcbiAgY29uc3QgW2xvY2FsVmFsdWUsIHNldExvY2FsVmFsdWVdID0gdXNlU3RhdGU8QnV0dG9uR3JvdXBUeXBlWyd2YWx1ZSddPigpO1xyXG5cclxuICBjb25zdCBvbkxvY2FsQ2hhbmdlOiBDaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAodikgPT4ge1xyXG4gICAgc2V0TG9jYWxWYWx1ZSh2LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gb25DaGFuZ2UgfHwgb25Mb2NhbENoYW5nZTtcclxuICBjb25zdCB2YWx1ZVRvVXNlID0gb25DaGFuZ2UgPyB2YWx1ZSA6IGxvY2FsVmFsdWU7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlVG9Vc2UpIHtcclxuICAgICAgb25DaGFuZ2VUb1VzZSh7XHJcbiAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgIHZhbHVlOiBvcHRpb25zWzBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFt2YWx1ZVRvVXNlLCBvbkNoYW5nZVRvVXNlLCBvcHRpb25zXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVzUHJvdmlkZXIgaW5qZWN0Rmlyc3Q+XHJcbiAgICAgIDxGb3JtQ29udHJvbCBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25Hcm91cH0gZnVsbFdpZHRoPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgaWQ9e25hbWV9XHJcbiAgICAgICAgICB2YWx1ZT17dmFsdWVUb1VzZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRvVXNlfVxyXG4gICAgICAgICAgaW5wdXRDb21wb25lbnQ9eyhpbnB1dFByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgIDxNZW1vQnV0dG9uR3JvdXBJbm5lclxyXG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICB7Li4uaW5wdXRQcm9wc31cclxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgICAgICAgICBvcHRpb25zPXtzdG9yZU9wdGlvbnMgfHwgb3B0aW9ucyB8fCBbXX1cclxuICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17Z2V0T3B0aW9uTGFiZWx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0IG1hcmdpbj1cImRlbnNlXCIgdmFyaWFudD1cImZpbGxlZFwiPlxyXG4gICAgICAgICAgV2VsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLlxyXG4gICAgICAgIDwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICA8L1N0eWxlc1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJ1dHRvbkdyb3VwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==