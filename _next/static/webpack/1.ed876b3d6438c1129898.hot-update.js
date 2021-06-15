webpackHotUpdate_N_E(1,{

/***/ "./src/components/Forms/Select/Select.tsx":
/*!************************************************!*\
  !*** ./src/components/Forms/Select/Select.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var appRedux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! appRedux */ "./src/appRedux/index.ts");
/* harmony import */ var components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Forms/TextInput */ "./src/components/Forms/TextInput/index.tsx");
/* harmony import */ var _VirtualizedListBox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VirtualizedListBox */ "./src/components/Forms/Select/VirtualizedListBox.tsx");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Select.module.scss */ "./src/components/Forms/Select/Select.module.scss");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Select_module_scss__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\Select\\Select.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var compare = function compare(option, value) {
  return option === value;
};

var Selection = function Selection(_ref) {
  _s();

  var options = _ref.options,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? null : _ref$value,
      onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      _ref$getOptionSelecte = _ref.getOptionSelected,
      getOptionSelected = _ref$getOptionSelecte === void 0 ? compare : _ref$getOptionSelecte,
      label = _ref.label,
      _ref$storeOptionsPath = _ref.storeOptionsPath,
      storeOptionsPath = _ref$storeOptionsPath === void 0 ? '' : _ref$storeOptionsPath,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      error = _ref.error,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["options", "value", "onChange", "getOptionLabel", "getOptionSelected", "label", "storeOptionsPath", "multiple", "size", "error"]);

  var storeOptions = Object(appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppSelector"])(function (state) {
    return lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(state, storeOptionsPath);
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(_e, v) {
    v && setLocalValue(v);
  };

  var controlledOnChange = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_e, value) {
    onChange && value && onChange({
      target: {
        // @ts-expect-error - Either string or number
        value: value
      }
    });
  }, [onChange]);
  var onChangeToUse = onChange ? controlledOnChange : onLocalChange;
  var valueToUse = onChange ? value : localValue;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.select
  }, lodash_omit__WEBPACK_IMPORTED_MODULE_4___default()(props, ['additionalNames', 'additionalValues'])), {}, {
    size: size,
    id: props.name,
    multiple: multiple,
    value: multiple ? valueToUse || [] : valueToUse,
    options: (storeOptionsPath ? storeOptions : options) || [],
    getOptionSelected: getOptionSelected,
    getOptionLabel: getOptionLabel,
    onChange: onChangeToUse,
    renderTags: function renderTags(value, getTagProps) {
      return value.map(function (option, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread({
          variant: "outlined",
          label: getOptionLabel(option),
          size: "small"
        }, getTagProps({
          index: index
        })), "option-".concat(index), false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 11
        }, _this);
      });
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_9__["default"], _objectSpread(_objectSpread({}, params), {}, {
        name: props.name,
        label: label,
        type: "text",
        variant: "filled"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, _this);
    },
    disableListWrap: true // @ts-expect-error - Implementation from Material-UI docs
    ,
    ListboxComponent: _VirtualizedListBox__WEBPACK_IMPORTED_MODULE_10__["default"],
    error: !!(error !== null && error !== void 0 && error.message),
    helperText: error ? error.message : ' '
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, _this);
};

_s(Selection, "wEEdF04/iSKTQtvIOyuRL7AvmtA=", false, function () {
  return [appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppSelector"]];
});

_c = Selection;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["memo"])(Selection));

var _c, _c2;

$RefreshReg$(_c, "Selection");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiY29tcGFyZSIsIm9wdGlvbiIsInZhbHVlIiwiU2VsZWN0aW9uIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwiZ2V0T3B0aW9uTGFiZWwiLCJnZXRPcHRpb25TZWxlY3RlZCIsImxhYmVsIiwic3RvcmVPcHRpb25zUGF0aCIsIm11bHRpcGxlIiwic2l6ZSIsImVycm9yIiwicHJvcHMiLCJzdG9yZU9wdGlvbnMiLCJ1c2VBcHBTZWxlY3RvciIsInN0YXRlIiwiZ2V0IiwidXNlU3RhdGUiLCJsb2NhbFZhbHVlIiwic2V0TG9jYWxWYWx1ZSIsIm9uTG9jYWxDaGFuZ2UiLCJfZSIsInYiLCJjb250cm9sbGVkT25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsInRhcmdldCIsIm9uQ2hhbmdlVG9Vc2UiLCJ2YWx1ZVRvVXNlIiwic3R5bGVzIiwic2VsZWN0Iiwib21pdCIsIm5hbWUiLCJnZXRUYWdQcm9wcyIsIm1hcCIsImluZGV4IiwicGFyYW1zIiwiVmlydHVhbGl6ZWRMaXN0Qm94IiwibWVzc2FnZSIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBb0JDLE1BQXBCLEVBQStCQyxLQUEvQjtBQUFBLFNBQThERCxNQUFNLEtBQUtDLEtBQXpFO0FBQUEsQ0FBaEI7O0FBWUEsSUFBTUMsU0FBNEIsR0FBRyxTQUEvQkEsU0FBK0IsT0FZL0I7QUFBQTs7QUFBQSxNQVhKQyxPQVdJLFFBWEpBLE9BV0k7QUFBQSx3QkFWSkYsS0FVSTtBQUFBLE1BVkpBLEtBVUksMkJBVkksSUFVSjtBQUFBLE1BVEpHLFFBU0ksUUFUSkEsUUFTSTtBQUFBLE1BUkpDLGNBUUks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QkY7QUEyQkUsb0JBQWdCLEVBQUU2Qiw0REEzQnBCO0FBNEJFLFNBQUssRUFBRSxDQUFDLEVBQUN6QixLQUFELGFBQUNBLEtBQUQsZUFBQ0EsS0FBSyxDQUFFMEIsT0FBUixDQTVCVjtBQTZCRSxjQUFVLEVBQUUxQixLQUFLLEdBQUdBLEtBQUssQ0FBQzBCLE9BQVQsR0FBbUI7QUE3QnRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlDRCxDQWhGRDs7R0FBTW5DLFM7VUFhK0JZLHVEOzs7S0FiL0JaLFM7QUFrRlMsa0ZBQUFvQyxrREFBSSxDQUFDcEMsU0FBRCxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLmVkODc2YjNkNjQzOGMxMTI5ODk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xyXG5pbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gvb21pdCc7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlLCB7IEF1dG9jb21wbGV0ZVByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJztcclxuXHJcbmltcG9ydCB0eXBlIHsgQ29tbW9uRmllbGRUeXBlLCBCYXNpY1ZhbHVlLCBCYXNpY0ZpZWxkVmFsdWUgfSBmcm9tICdjb21wb25lbnRzL0Zvcm1zL2Zvcm1UeXBlcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ2FwcFJlZHV4JztcclxuXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9UZXh0SW5wdXQnO1xyXG5pbXBvcnQgVmlydHVhbGl6ZWRMaXN0Qm94IGZyb20gJy4vVmlydHVhbGl6ZWRMaXN0Qm94JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWxlY3QubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgY29tcGFyZSA9IDxUIGV4dGVuZHMgdW5rbm93bj4ob3B0aW9uOiBULCB2YWx1ZTogQmFzaWNWYWx1ZSk6IGJvb2xlYW4gPT4gb3B0aW9uID09PSB2YWx1ZTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0aW9uVHlwZSBleHRlbmRzIENvbW1vbkZpZWxkVHlwZSB7XHJcbiAgdHlwZTogJ3NlbGVjdCcgfCAnbXVsdGlfc2VsZWN0JztcclxuICB2YWx1ZT86IEJhc2ljVmFsdWUgfCBCYXNpY1ZhbHVlW107XHJcbiAgb3B0aW9ucz86IEJhc2ljVmFsdWVbXTtcclxuICBzdG9yZU9wdGlvbnNQYXRoPzogc3RyaW5nO1xyXG4gIGdldE9wdGlvblNlbGVjdGVkPzogPFQgZXh0ZW5kcyB1bmtub3duPihvcHRpb246IFQsIHZhbHVlOiBCYXNpY1ZhbHVlKSA9PiBib29sZWFuO1xyXG4gIGdldE9wdGlvbkxhYmVsOiAodmFsdWU6IEJhc2ljVmFsdWUpID0+IHN0cmluZztcclxuICBtdWx0aXBsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFNlbGVjdGlvbjogRkM8U2VsZWN0aW9uVHlwZT4gPSAoe1xyXG4gIG9wdGlvbnMsXHJcbiAgdmFsdWUgPSBudWxsLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGdldE9wdGlvbkxhYmVsLFxyXG4gIGdldE9wdGlvblNlbGVjdGVkID0gY29tcGFyZSxcclxuICBsYWJlbCxcclxuICBzdG9yZU9wdGlvbnNQYXRoID0gJycsXHJcbiAgbXVsdGlwbGUgPSBmYWxzZSxcclxuICBzaXplID0gJ3NtYWxsJyxcclxuICBlcnJvcixcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3Qgc3RvcmVPcHRpb25zOiBCYXNpY1ZhbHVlW10gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IGdldChzdGF0ZSwgc3RvcmVPcHRpb25zUGF0aCkpO1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPEJhc2ljVmFsdWUgfCBCYXNpY1ZhbHVlW10gfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3Qgb25Mb2NhbENoYW5nZTogQXV0b2NvbXBsZXRlUHJvcHM8XHJcbiAgICBzdHJpbmcgfCBudW1iZXIsXHJcbiAgICB0eXBlb2YgbXVsdGlwbGUsXHJcbiAgICBmYWxzZSxcclxuICAgIGZhbHNlXHJcbiAgPlsnb25DaGFuZ2UnXSA9IChfZSwgdikgPT4ge1xyXG4gICAgdiAmJiBzZXRMb2NhbFZhbHVlKHYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZWRPbkNoYW5nZTogQXV0b2NvbXBsZXRlUHJvcHM8XHJcbiAgICBCYXNpY1ZhbHVlLFxyXG4gICAgdHlwZW9mIG11bHRpcGxlLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmYWxzZVxyXG4gID5bJ29uQ2hhbmdlJ10gPSB1c2VDYWxsYmFjayhcclxuICAgIChfZTogUmVhY3QuQ2hhbmdlRXZlbnQ8YW55PiwgdmFsdWU6IEJhc2ljRmllbGRWYWx1ZSB8IEJhc2ljRmllbGRWYWx1ZVtdIHwgbnVsbCkgPT4ge1xyXG4gICAgICBvbkNoYW5nZSAmJlxyXG4gICAgICAgIHZhbHVlICYmXHJcbiAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBFaXRoZXIgc3RyaW5nIG9yIG51bWJlclxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW29uQ2hhbmdlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVG9Vc2UgPSBvbkNoYW5nZSA/IGNvbnRyb2xsZWRPbkNoYW5nZSA6IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IG9uQ2hhbmdlID8gdmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3R9XHJcbiAgICAgIHsuLi5vbWl0KHByb3BzLCBbJ2FkZGl0aW9uYWxOYW1lcycsICdhZGRpdGlvbmFsVmFsdWVzJ10pfVxyXG4gICAgICBzaXplPXtzaXplfVxyXG4gICAgICBpZD17cHJvcHMubmFtZX1cclxuICAgICAgbXVsdGlwbGU9e211bHRpcGxlfVxyXG4gICAgICB2YWx1ZT17bXVsdGlwbGUgPyB2YWx1ZVRvVXNlIHx8IFtdIDogdmFsdWVUb1VzZX1cclxuICAgICAgb3B0aW9ucz17KHN0b3JlT3B0aW9uc1BhdGggPyBzdG9yZU9wdGlvbnMgOiBvcHRpb25zKSB8fCBbXX1cclxuICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICBnZXRPcHRpb25MYWJlbD17Z2V0T3B0aW9uTGFiZWx9XHJcbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRvVXNlfVxyXG4gICAgICByZW5kZXJUYWdzPXsodmFsdWUsIGdldFRhZ1Byb3BzKSA9PlxyXG4gICAgICAgIHZhbHVlLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAga2V5PXtgb3B0aW9uLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbGFiZWw9e2dldE9wdGlvbkxhYmVsKG9wdGlvbil9XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHsuLi5nZXRUYWdQcm9wcyh7IGluZGV4IH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFRleHRJbnB1dCB7Li4ucGFyYW1zfSBuYW1lPXtwcm9wcy5uYW1lfSBsYWJlbD17bGFiZWx9IHR5cGU9XCJ0ZXh0XCIgdmFyaWFudD1cImZpbGxlZFwiIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIGRpc2FibGVMaXN0V3JhcFxyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gSW1wbGVtZW50YXRpb24gZnJvbSBNYXRlcmlhbC1VSSBkb2NzXHJcbiAgICAgIExpc3Rib3hDb21wb25lbnQ9e1ZpcnR1YWxpemVkTGlzdEJveH1cclxuICAgICAgZXJyb3I9eyEhZXJyb3I/Lm1lc3NhZ2V9XHJcbiAgICAgIGhlbHBlclRleHQ9e2Vycm9yID8gZXJyb3IubWVzc2FnZSA6ICcgJ31cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oU2VsZWN0aW9uKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==