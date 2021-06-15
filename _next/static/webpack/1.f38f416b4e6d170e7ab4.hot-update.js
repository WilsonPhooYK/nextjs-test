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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Forms/TextInput */ "./src/components/Forms/TextInput/index.tsx");
/* harmony import */ var _VirtualizedListBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VirtualizedListBox */ "./src/components/Forms/Select/VirtualizedListBox.tsx");




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\Select\\Select.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







var Selection = function Selection(_ref) {
  _s();

  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      label = _ref.label,
      options = _ref.options,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["value", "onChange", "getOptionLabel", "label", "options", "multiple", "size"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(undefined),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(_e, v) {
    v && setLocalValue(v);
  };

  var controlledOnChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (_e, value) {
    onChange && value && onChange({
      target: {
        // @ts-expect-error - Either string or number
        value: value
      }
    });
  }, [onChange]);
  var onChangeToUse = onChange ? controlledOnChange : onLocalChange;
  var valueToUse = onChange ? value : localValue;
  console.log(valueToUse);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__["default"] // className={styles.select}
  // {...omit(props, ['additionalNames', 'additionalValues'])}
  // size={size}
  // id={props.name}
  // multiple={multiple}
  // value={valueToUse}
  , {
    options: ['My Spouse', 'My Child', 'Father', 'Mother', 'Others'] // getOptionLabel={getOptionLabel}
    // onChange={onChangeToUse}
    ,
    renderTags: function renderTags(value, getTagProps) {
      return value.map(function (option, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
          variant: "outlined",
          label: getOptionLabel(option),
          size: "small"
        }, getTagProps({
          index: index
        })), "option-".concat(index), false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this);
      });
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, params), {}, {
        name: props.name,
        label: label,
        type: "text",
        variant: "filled"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this);
    },
    disableListWrap: true // @ts-expect-error - Implementation from Material-UI docs
    ,
    ListboxComponent: _VirtualizedListBox__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, _this);
};

_s(Selection, "xJP2QDNMGz6SN+uE02qmoMfyTPo=");

_c = Selection;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(Selection));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiU2VsZWN0aW9uIiwidmFsdWUiLCJvbkNoYW5nZSIsImdldE9wdGlvbkxhYmVsIiwibGFiZWwiLCJvcHRpb25zIiwibXVsdGlwbGUiLCJzaXplIiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsImxvY2FsVmFsdWUiLCJzZXRMb2NhbFZhbHVlIiwib25Mb2NhbENoYW5nZSIsIl9lIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJjb25zb2xlIiwibG9nIiwiZ2V0VGFnUHJvcHMiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsInBhcmFtcyIsIm5hbWUiLCJWaXJ0dWFsaXplZExpc3RCb3giLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQVlBLElBQU1BLFNBQTRCLEdBQUcsU0FBL0JBLFNBQStCLE9BUy9CO0FBQUE7O0FBQUEsd0JBUkpDLEtBUUk7QUFBQSxNQVJKQSxLQVFJLDJCQVJJLEVBUUo7QUFBQSxNQVBKQyxRQU9JLFFBUEpBLFFBT0k7QUFBQSxNQU5KQyxjQU1JLFFBTkpBLGNBTUk7QUFBQSxNQUxKQyxLQUtJLFFBTEpBLEtBS0k7QUFBQSxNQUpKQyxPQUlJLFFBSkpBLE9BSUk7QUFBQSwyQkFISkMsUUFHSTtBQUFBLE1BSEpBLFFBR0ksOEJBSE8sS0FHUDtBQUFBLHVCQUZKQyxJQUVJO0FBQUEsTUFGSkEsSUFFSSwwQkFGRyxPQUVIO0FBQUEsTUFEREMsS0FDQzs7QUFBQSxrQkFDZ0NDLHNEQUFRLENBQTRCQyxTQUE1QixDQUR4QztBQUFBLE1BQ0dDLFVBREg7QUFBQSxNQUNlQyxhQURmOztBQUdKLE1BQU1DLGFBS08sR0FBRyxTQUxWQSxhQUtVLENBQUNDLEVBQUQsRUFBS0MsQ0FBTCxFQUFXO0FBQ3pCQSxLQUFDLElBQUlILGFBQWEsQ0FBQ0csQ0FBRCxDQUFsQjtBQUNELEdBUEQ7O0FBU0EsTUFBTUMsa0JBS08sR0FBR0MseURBQVcsQ0FDekIsVUFBQ0gsRUFBRCxFQUE2QmIsS0FBN0IsRUFBbUY7QUFDakZDLFlBQVEsSUFDTkQsS0FERixJQUVFQyxRQUFRLENBQUM7QUFDUGdCLFlBQU0sRUFBRTtBQUNOO0FBQ0FqQixhQUFLLEVBQUxBO0FBRk07QUFERCxLQUFELENBRlY7QUFRRCxHQVZ3QixFQVd6QixDQUFDQyxRQUFELENBWHlCLENBTDNCO0FBbUJBLE1BQU1pQixhQUFhLEdBQUdqQixRQUFRLEdBQUdjLGtCQUFILEdBQXdCSCxhQUF0RDtBQUNBLE1BQU1PLFVBQVUsR0FBR2xCLFFBQVEsR0FBR0QsS0FBSCxHQUFXVSxVQUF0QztBQUVBVSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWjtBQUVBLHNCQUNFLHFFQUFDLHFFQUFELENBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkY7QUFPRSxXQUFPLEVBQUUsQ0FBQyxXQUFELEVBQWMsVUFBZCxFQUEwQixRQUExQixFQUFvQyxRQUFwQyxFQUE4QyxRQUE5QyxDQVBYLENBUUU7QUFDQTtBQVRGO0FBVUUsY0FBVSxFQUFFLG9CQUFDbkIsS0FBRCxFQUFRc0IsV0FBUjtBQUFBLGFBQ1Z0QixLQUFLLENBQUN1QixHQUFOLENBQVUsVUFBQ0MsTUFBRCxFQUFTQyxLQUFUO0FBQUEsNEJBQ1IscUVBQUMsOERBQUQ7QUFFRSxpQkFBTyxFQUFDLFVBRlY7QUFHRSxlQUFLLEVBQUV2QixjQUFjLENBQUNzQixNQUFELENBSHZCO0FBSUUsY0FBSSxFQUFDO0FBSlAsV0FLTUYsV0FBVyxDQUFDO0FBQUVHLGVBQUssRUFBTEE7QUFBRixTQUFELENBTGpCLG9CQUNpQkEsS0FEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVYsQ0FEVTtBQUFBLEtBVmQ7QUFxQkUsZUFBVyxFQUFFLHFCQUFDQyxNQUFEO0FBQUEsMEJBQ1gscUVBQUMsa0VBQUQsa0NBQWVBLE1BQWY7QUFBdUIsWUFBSSxFQUFFbkIsS0FBSyxDQUFDb0IsSUFBbkM7QUFBeUMsYUFBSyxFQUFFeEIsS0FBaEQ7QUFBdUQsWUFBSSxFQUFDLE1BQTVEO0FBQW1FLGVBQU8sRUFBQztBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQXJCZjtBQXdCRSxtQkFBZSxNQXhCakIsQ0F5QkU7QUF6QkY7QUEwQkUsb0JBQWdCLEVBQUV5QiwyREFBa0JBO0FBMUJ0QztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUE4QkQsQ0EzRUQ7O0dBQU03QixTOztLQUFBQSxTO0FBNkVTLGtGQUFBOEIsa0RBQUksQ0FBQzlCLFNBQUQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svMS5mMzhmNDE2YjRlNmQxNzBlN2FiNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG9taXQgZnJvbSAnbG9kYXNoL29taXQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCBtZW1vLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF1dG9jb21wbGV0ZSwgeyBBdXRvY29tcGxldGVQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IENvbW1vbkZpZWxkVHlwZSwgQmFzaWNWYWx1ZSwgQmFzaWNGaWVsZFZhbHVlIH0gZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9mb3JtVHlwZXMnO1xyXG5cclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm1zL1RleHRJbnB1dCc7XHJcbmltcG9ydCBWaXJ0dWFsaXplZExpc3RCb3ggZnJvbSAnLi9WaXJ0dWFsaXplZExpc3RCb3gnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlbGVjdC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlbGVjdGlvblR5cGUgZXh0ZW5kcyBDb21tb25GaWVsZFR5cGUge1xyXG4gIHR5cGU6ICdzZWxlY3QnIHwgJ211bHRpX3NlbGVjdCc7XHJcbiAgdmFsdWU/OiBCYXNpY1ZhbHVlIHwgQmFzaWNWYWx1ZVtdO1xyXG4gIG9wdGlvbnM6IEJhc2ljVmFsdWVbXTtcclxuICBnZXRPcHRpb25MYWJlbDogKHZhbHVlOiBCYXNpY1ZhbHVlKSA9PiBzdHJpbmc7XHJcbiAgbXVsdGlwbGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBTZWxlY3Rpb246IEZDPFNlbGVjdGlvblR5cGU+ID0gKHtcclxuICB2YWx1ZSA9IFtdLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGdldE9wdGlvbkxhYmVsLFxyXG4gIGxhYmVsLFxyXG4gIG9wdGlvbnMsXHJcbiAgbXVsdGlwbGUgPSBmYWxzZSxcclxuICBzaXplID0gJ3NtYWxsJyxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgW2xvY2FsVmFsdWUsIHNldExvY2FsVmFsdWVdID0gdXNlU3RhdGU8QmFzaWNWYWx1ZSB8IEJhc2ljVmFsdWVbXT4odW5kZWZpbmVkKTtcclxuXHJcbiAgY29uc3Qgb25Mb2NhbENoYW5nZTogQXV0b2NvbXBsZXRlUHJvcHM8XHJcbiAgICBzdHJpbmcgfCBudW1iZXIsXHJcbiAgICB0eXBlb2YgbXVsdGlwbGUsXHJcbiAgICBmYWxzZSxcclxuICAgIGZhbHNlXHJcbiAgPlsnb25DaGFuZ2UnXSA9IChfZSwgdikgPT4ge1xyXG4gICAgdiAmJiBzZXRMb2NhbFZhbHVlKHYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZWRPbkNoYW5nZTogQXV0b2NvbXBsZXRlUHJvcHM8XHJcbiAgICBCYXNpY1ZhbHVlLFxyXG4gICAgdHlwZW9mIG11bHRpcGxlLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmYWxzZVxyXG4gID5bJ29uQ2hhbmdlJ10gPSB1c2VDYWxsYmFjayhcclxuICAgIChfZTogUmVhY3QuQ2hhbmdlRXZlbnQ8YW55PiwgdmFsdWU6IEJhc2ljRmllbGRWYWx1ZSB8IEJhc2ljRmllbGRWYWx1ZVtdIHwgbnVsbCkgPT4ge1xyXG4gICAgICBvbkNoYW5nZSAmJlxyXG4gICAgICAgIHZhbHVlICYmXHJcbiAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBFaXRoZXIgc3RyaW5nIG9yIG51bWJlclxyXG4gICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgW29uQ2hhbmdlXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVG9Vc2UgPSBvbkNoYW5nZSA/IGNvbnRyb2xsZWRPbkNoYW5nZSA6IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IG9uQ2hhbmdlID8gdmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICBjb25zb2xlLmxvZyh2YWx1ZVRvVXNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgLy8gY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0fVxyXG4gICAgICAvLyB7Li4ub21pdChwcm9wcywgWydhZGRpdGlvbmFsTmFtZXMnLCAnYWRkaXRpb25hbFZhbHVlcyddKX1cclxuICAgICAgLy8gc2l6ZT17c2l6ZX1cclxuICAgICAgLy8gaWQ9e3Byb3BzLm5hbWV9XHJcbiAgICAgIC8vIG11bHRpcGxlPXttdWx0aXBsZX1cclxuICAgICAgLy8gdmFsdWU9e3ZhbHVlVG9Vc2V9XHJcbiAgICAgIG9wdGlvbnM9e1snTXkgU3BvdXNlJywgJ015IENoaWxkJywgJ0ZhdGhlcicsICdNb3RoZXInLCAnT3RoZXJzJ119XHJcbiAgICAgIC8vIGdldE9wdGlvbkxhYmVsPXtnZXRPcHRpb25MYWJlbH1cclxuICAgICAgLy8gb25DaGFuZ2U9e29uQ2hhbmdlVG9Vc2V9XHJcbiAgICAgIHJlbmRlclRhZ3M9eyh2YWx1ZSwgZ2V0VGFnUHJvcHMpID0+XHJcbiAgICAgICAgdmFsdWUubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q2hpcFxyXG4gICAgICAgICAgICBrZXk9e2BvcHRpb24tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBsYWJlbD17Z2V0T3B0aW9uTGFiZWwob3B0aW9uKX1cclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgey4uLmdldFRhZ1Byb3BzKHsgaW5kZXggfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICA8VGV4dElucHV0IHsuLi5wYXJhbXN9IG5hbWU9e3Byb3BzLm5hbWV9IGxhYmVsPXtsYWJlbH0gdHlwZT1cInRleHRcIiB2YXJpYW50PVwiZmlsbGVkXCIgLz5cclxuICAgICAgKX1cclxuICAgICAgZGlzYWJsZUxpc3RXcmFwXHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBJbXBsZW1lbnRhdGlvbiBmcm9tIE1hdGVyaWFsLVVJIGRvY3NcclxuICAgICAgTGlzdGJveENvbXBvbmVudD17VmlydHVhbGl6ZWRMaXN0Qm94fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTZWxlY3Rpb24pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9