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

  var value = _ref.value,
      onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      _ref$getOptionSelecte = _ref.getOptionSelected,
      getOptionSelected = _ref$getOptionSelecte === void 0 ? compare : _ref$getOptionSelecte,
      label = _ref.label,
      options = _ref.options,
      _ref$storeOptionsPath = _ref.storeOptionsPath,
      storeOptionsPath = _ref$storeOptionsPath === void 0 ? '' : _ref$storeOptionsPath,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["value", "onChange", "getOptionLabel", "getOptionSelected", "label", "options", "storeOptionsPath", "multiple", "size"]);

  var storeOptions = Object(appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppSelector"])(function (state) {
    return lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(state, storeOptionsPath);
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(multiple ? [] : ''),
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
  console.log(valueToUse, value, localValue);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.select
  }, lodash_omit__WEBPACK_IMPORTED_MODULE_4___default()(props, ['additionalNames', 'additionalValues'])), {}, {
    size: size,
    id: props.name,
    multiple: multiple,
    value: valueToUse,
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
          lineNumber: 90,
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
        lineNumber: 100,
        columnNumber: 9
      }, _this);
    },
    disableListWrap: true // @ts-expect-error - Implementation from Material-UI docs
    ,
    ListboxComponent: _VirtualizedListBox__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, _this);
};

_s(Selection, "1h5SShB/1KIRg5s1yDXRJwzlPNA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiY29tcGFyZSIsIm9wdGlvbiIsInZhbHVlIiwiU2VsZWN0aW9uIiwib25DaGFuZ2UiLCJnZXRPcHRpb25MYWJlbCIsImdldE9wdGlvblNlbGVjdGVkIiwibGFiZWwiLCJvcHRpb25zIiwic3RvcmVPcHRpb25zUGF0aCIsIm11bHRpcGxlIiwic2l6ZSIsInByb3BzIiwic3RvcmVPcHRpb25zIiwidXNlQXBwU2VsZWN0b3IiLCJzdGF0ZSIsImdldCIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwiX2UiLCJ2IiwiY29udHJvbGxlZE9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ0YXJnZXQiLCJvbkNoYW5nZVRvVXNlIiwidmFsdWVUb1VzZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJzZWxlY3QiLCJvbWl0IiwibmFtZSIsImdldFRhZ1Byb3BzIiwibWFwIiwiaW5kZXgiLCJwYXJhbXMiLCJWaXJ0dWFsaXplZExpc3RCb3giLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQW9CQyxNQUFwQixFQUErQkMsS0FBL0I7QUFBQSxTQUE4REQsTUFBTSxLQUFLQyxLQUF6RTtBQUFBLENBQWhCOztBQVlBLElBQU1DLFNBQTRCLEdBQUcsU0FBL0JBLFNBQStCLE9BVy9CO0FBQUE7O0FBQUEsTUFWSkQsS0FVSSxRQVZKQSxLQVVJO0FBQUEsTUFUSkUsUUFTSSxRQVRKQSxRQVNJO0FBQUEsTUFSSkMsY0FRSSxRQVJKQSxjQVFJO0FBQUEsbUNBUEpDLGlCQU9JO0FBQUEsTUFQSkEsaUJBT0ks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MUJGO0FBMkJFLG9CQUFnQixFQUFFK0IsNERBQWtCQTtBQTNCdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBL0VEOztHQUFNbkMsUztVQVkrQlcsdUQ7OztLQVovQlgsUztBQWlGUyxrRkFBQW9DLGtEQUFJLENBQUNwQyxTQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuOWIxNjNjNWQ2MDVhMjkzYThiOGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XHJcbmltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC9vbWl0JztcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRvY29tcGxldGUsIHsgQXV0b2NvbXBsZXRlUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBDb21tb25GaWVsZFR5cGUsIEJhc2ljVmFsdWUsIEJhc2ljRmllbGRWYWx1ZSB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvZm9ybVR5cGVzJztcclxuXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnYXBwUmVkdXgnO1xyXG5cclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm1zL1RleHRJbnB1dCc7XHJcbmltcG9ydCBWaXJ0dWFsaXplZExpc3RCb3ggZnJvbSAnLi9WaXJ0dWFsaXplZExpc3RCb3gnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlbGVjdC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBjb21wYXJlID0gPFQgZXh0ZW5kcyB1bmtub3duPihvcHRpb246IFQsIHZhbHVlOiBCYXNpY1ZhbHVlKTogYm9vbGVhbiA9PiBvcHRpb24gPT09IHZhbHVlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb25UeXBlIGV4dGVuZHMgQ29tbW9uRmllbGRUeXBlIHtcclxuICB0eXBlOiAnc2VsZWN0JyB8ICdtdWx0aV9zZWxlY3QnO1xyXG4gIHZhbHVlPzogQmFzaWNWYWx1ZSB8IEJhc2ljVmFsdWVbXTtcclxuICBvcHRpb25zPzogQmFzaWNWYWx1ZVtdO1xyXG4gIHN0b3JlT3B0aW9uc1BhdGg/OiBzdHJpbmc7XHJcbiAgZ2V0T3B0aW9uU2VsZWN0ZWQ/OiA8VCBleHRlbmRzIHVua25vd24+KG9wdGlvbjogVCwgdmFsdWU6IEJhc2ljVmFsdWUpID0+IGJvb2xlYW47XHJcbiAgZ2V0T3B0aW9uTGFiZWw6ICh2YWx1ZTogQmFzaWNWYWx1ZSkgPT4gc3RyaW5nO1xyXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU2VsZWN0aW9uOiBGQzxTZWxlY3Rpb25UeXBlPiA9ICh7XHJcbiAgdmFsdWUsXHJcbiAgb25DaGFuZ2UsXHJcbiAgZ2V0T3B0aW9uTGFiZWwsXHJcbiAgZ2V0T3B0aW9uU2VsZWN0ZWQgPSBjb21wYXJlLFxyXG4gIGxhYmVsLFxyXG4gIG9wdGlvbnMsXHJcbiAgc3RvcmVPcHRpb25zUGF0aCA9ICcnLFxyXG4gIG11bHRpcGxlID0gZmFsc2UsXHJcbiAgc2l6ZSA9ICdzbWFsbCcsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlT3B0aW9uczogQmFzaWNWYWx1ZVtdID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBnZXQoc3RhdGUsIHN0b3JlT3B0aW9uc1BhdGgpKTtcclxuICBjb25zdCBbbG9jYWxWYWx1ZSwgc2V0TG9jYWxWYWx1ZV0gPSB1c2VTdGF0ZTxCYXNpY1ZhbHVlIHwgQmFzaWNWYWx1ZVtdPihtdWx0aXBsZSA/IFtdIDogJycpO1xyXG5cclxuICBjb25zdCBvbkxvY2FsQ2hhbmdlOiBBdXRvY29tcGxldGVQcm9wczxcclxuICAgIHN0cmluZyB8IG51bWJlcixcclxuICAgIHR5cGVvZiBtdWx0aXBsZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2VcclxuICA+WydvbkNoYW5nZSddID0gKF9lLCB2KSA9PiB7XHJcbiAgICB2ICYmIHNldExvY2FsVmFsdWUodik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udHJvbGxlZE9uQ2hhbmdlOiBBdXRvY29tcGxldGVQcm9wczxcclxuICAgIEJhc2ljVmFsdWUsXHJcbiAgICB0eXBlb2YgbXVsdGlwbGUsXHJcbiAgICBmYWxzZSxcclxuICAgIGZhbHNlXHJcbiAgPlsnb25DaGFuZ2UnXSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKF9lOiBSZWFjdC5DaGFuZ2VFdmVudDxhbnk+LCB2YWx1ZTogQmFzaWNGaWVsZFZhbHVlIHwgQmFzaWNGaWVsZFZhbHVlW10gfCBudWxsKSA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlICYmXHJcbiAgICAgICAgdmFsdWUgJiZcclxuICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbb25DaGFuZ2VdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZSA9IG9uQ2hhbmdlID8gY29udHJvbGxlZE9uQ2hhbmdlIDogb25Mb2NhbENoYW5nZTtcclxuICBjb25zdCB2YWx1ZVRvVXNlID0gb25DaGFuZ2UgPyB2YWx1ZSA6IGxvY2FsVmFsdWU7XHJcblxyXG4gIGNvbnNvbGUubG9nKHZhbHVlVG9Vc2UsIHZhbHVlLCBsb2NhbFZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0fVxyXG4gICAgICB7Li4ub21pdChwcm9wcywgWydhZGRpdGlvbmFsTmFtZXMnLCAnYWRkaXRpb25hbFZhbHVlcyddKX1cclxuICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgaWQ9e3Byb3BzLm5hbWV9XHJcbiAgICAgIG11bHRpcGxlPXttdWx0aXBsZX1cclxuICAgICAgdmFsdWU9e3ZhbHVlVG9Vc2V9XHJcbiAgICAgIG9wdGlvbnM9eyhzdG9yZU9wdGlvbnNQYXRoID8gc3RvcmVPcHRpb25zIDogb3B0aW9ucykgfHwgW119XHJcbiAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgZ2V0T3B0aW9uTGFiZWw9e2dldE9wdGlvbkxhYmVsfVxyXG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2VUb1VzZX1cclxuICAgICAgcmVuZGVyVGFncz17KHZhbHVlLCBnZXRUYWdQcm9wcykgPT5cclxuICAgICAgICB2YWx1ZS5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxDaGlwXHJcbiAgICAgICAgICAgIGtleT17YG9wdGlvbi0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIGxhYmVsPXtnZXRPcHRpb25MYWJlbChvcHRpb24pfVxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICB7Li4uZ2V0VGFnUHJvcHMoeyBpbmRleCB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG4gICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxUZXh0SW5wdXQgey4uLnBhcmFtc30gbmFtZT17cHJvcHMubmFtZX0gbGFiZWw9e2xhYmVsfSB0eXBlPVwidGV4dFwiIHZhcmlhbnQ9XCJmaWxsZWRcIiAvPlxyXG4gICAgICApfVxyXG4gICAgICBkaXNhYmxlTGlzdFdyYXBcclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEltcGxlbWVudGF0aW9uIGZyb20gTWF0ZXJpYWwtVUkgZG9jc1xyXG4gICAgICBMaXN0Ym94Q29tcG9uZW50PXtWaXJ0dWFsaXplZExpc3RCb3h9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKFNlbGVjdGlvbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=