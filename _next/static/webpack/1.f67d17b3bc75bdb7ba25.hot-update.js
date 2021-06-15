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
/* harmony import */ var components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Forms/TextInput */ "./src/components/Forms/TextInput/index.tsx");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Select.module.scss */ "./src/components/Forms/Select/Select.module.scss");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Select_module_scss__WEBPACK_IMPORTED_MODULE_6__);




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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.select,
    size: size,
    id: props.name // multiple={multiple}
    // value={valueToUse}
    ,
    options: options,
    getOptionLabel: getOptionLabel // onChange={onChangeToUse}
    // renderTags={(value, getTagProps) =>
    //   value.map((option, index) => (
    //     <Chip
    //       key={`option-${index}`}
    //       variant="outlined"
    //       label={getOptionLabel(option)}
    //       size="small"
    //       {...getTagProps({ index })}
    //     />
    //   ))
    // }
    ,
    renderInput: function renderInput(params) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({}, params), {}, {
        name: props.name,
        label: label,
        type: "text",
        variant: "filled"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this);
    } // disableListWrap
    // // @ts-expect-error - Implementation from Material-UI docs
    // ListboxComponent={VirtualizedListBox}

  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, _this);
};

_s(Selection, "NCIasvJafgEIcMJC/9zFvL4eJEU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiU2VsZWN0aW9uIiwidmFsdWUiLCJvbkNoYW5nZSIsImdldE9wdGlvbkxhYmVsIiwibGFiZWwiLCJvcHRpb25zIiwibXVsdGlwbGUiLCJzaXplIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvY2FsVmFsdWUiLCJzZXRMb2NhbFZhbHVlIiwib25Mb2NhbENoYW5nZSIsIl9lIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJzdHlsZXMiLCJzZWxlY3QiLCJuYW1lIiwicGFyYW1zIiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUtBO0FBR0E7O0FBVUEsSUFBTUEsU0FBNEIsR0FBRyxTQUEvQkEsU0FBK0IsT0FTL0I7QUFBQTs7QUFBQSx3QkFSSkMsS0FRSTtBQUFBLE1BUkpBLEtBUUksMkJBUkksRUFRSjtBQUFBLE1BUEpDLFFBT0ksUUFQSkEsUUFPSTtBQUFBLE1BTkpDLGNBTUksUUFOSkEsY0FNSTtBQUFBLE1BTEpDLEtBS0ksUUFMSkEsS0FLSTtBQUFBLE1BSkpDLE9BSUksUUFKSkEsT0FJSTtBQUFBLDJCQUhKQyxRQUdJO0FBQUEsTUFISkEsUUFHSSw4QkFITyxLQUdQO0FBQUEsdUJBRkpDLElBRUk7QUFBQSxNQUZKQSxJQUVJLDBCQUZHLE9BRUg7QUFBQSxNQUREQyxLQUNDOztBQUFBLGtCQUNnQ0Msc0RBQVEsRUFEeEM7QUFBQSxNQUNHQyxVQURIO0FBQUEsTUFDZUMsYUFEZjs7QUFHSixNQUFNQyxhQUtPLEdBQUcsU0FMVkEsYUFLVSxDQUFDQyxFQUFELEVBQUtDLENBQUwsRUFBVztBQUN6QkEsS0FBQyxJQUFJSCxhQUFhLENBQUNHLENBQUQsQ0FBbEI7QUFDRCxHQVBEOztBQVNBLE1BQU1DLGtCQUtPLEdBQUdDLHlEQUFXLENBQ3pCLFVBQUNILEVBQUQsRUFBNkJaLEtBQTdCLEVBQW1GO0FBQ2pGQyxZQUFRLElBQ05ELEtBREYsSUFFRUMsUUFBUSxDQUFDO0FBQ1BlLFlBQU0sRUFBRTtBQUNOO0FBQ0FoQixhQUFLLEVBQUxBO0FBRk07QUFERCxLQUFELENBRlY7QUFRRCxHQVZ3QixFQVd6QixDQUFDQyxRQUFELENBWHlCLENBTDNCO0FBbUJBLE1BQU1nQixhQUFhLEdBQUdoQixRQUFRLEdBQUdhLGtCQUFILEdBQXdCSCxhQUF0RDtBQUNBLE1BQU1PLFVBQVUsR0FBR2pCLFFBQVEsR0FBR0QsS0FBSCxHQUFXUyxVQUF0QztBQUVBLHNCQUNFLHFFQUFDLHFFQUFEO0FBQ0UsYUFBUyxFQUFFVSwwREFBTSxDQUFDQyxNQURwQjtBQUVFLFFBQUksRUFBRWQsSUFGUjtBQUdFLE1BQUUsRUFBRUMsS0FBSyxDQUFDYyxJQUhaLENBSUU7QUFDQTtBQUxGO0FBTUUsV0FBTyxFQUFFakIsT0FOWDtBQU9FLGtCQUFjLEVBQUVGLGNBUGxCLENBUUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkJGO0FBb0JFLGVBQVcsRUFBRSxxQkFBQ29CLE1BQUQ7QUFBQSwwQkFDWCxxRUFBQyxrRUFBRCxrQ0FBZUEsTUFBZjtBQUF1QixZQUFJLEVBQUVmLEtBQUssQ0FBQ2MsSUFBbkM7QUFBeUMsYUFBSyxFQUFFbEIsS0FBaEQ7QUFBdUQsWUFBSSxFQUFDLE1BQTVEO0FBQW1FLGVBQU8sRUFBQztBQUEzRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQXBCZixDQXVCRTtBQUNBO0FBQ0E7O0FBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTZCRCxDQXhFRDs7R0FBTUosUzs7S0FBQUEsUztBQTBFUyxrRkFBQXdCLGtEQUFJLENBQUN4QixTQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuZjY3ZDE3YjNiYzc1YmRiN2JhMjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC9vbWl0JztcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRvY29tcGxldGUsIHsgQXV0b2NvbXBsZXRlUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBDb21tb25GaWVsZFR5cGUsIEJhc2ljVmFsdWUsIEJhc2ljRmllbGRWYWx1ZSB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvZm9ybVR5cGVzJztcclxuXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9UZXh0SW5wdXQnO1xyXG5pbXBvcnQgVmlydHVhbGl6ZWRMaXN0Qm94IGZyb20gJy4vVmlydHVhbGl6ZWRMaXN0Qm94JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWxlY3QubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb25UeXBlIGV4dGVuZHMgQ29tbW9uRmllbGRUeXBlIHtcclxuICB0eXBlOiAnc2VsZWN0JyB8ICdtdWx0aV9zZWxlY3QnO1xyXG4gIHZhbHVlPzogQmFzaWNWYWx1ZSB8IEJhc2ljVmFsdWVbXTtcclxuICBvcHRpb25zOiBCYXNpY1ZhbHVlW107XHJcbiAgZ2V0T3B0aW9uTGFiZWw6ICh2YWx1ZTogQmFzaWNWYWx1ZSkgPT4gc3RyaW5nO1xyXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU2VsZWN0aW9uOiBGQzxTZWxlY3Rpb25UeXBlPiA9ICh7XHJcbiAgdmFsdWUgPSBbXSxcclxuICBvbkNoYW5nZSxcclxuICBnZXRPcHRpb25MYWJlbCxcclxuICBsYWJlbCxcclxuICBvcHRpb25zLFxyXG4gIG11bHRpcGxlID0gZmFsc2UsXHJcbiAgc2l6ZSA9ICdzbWFsbCcsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPEJhc2ljVmFsdWUgfCBCYXNpY1ZhbHVlW10+KCk7XHJcblxyXG4gIGNvbnN0IG9uTG9jYWxDaGFuZ2U6IEF1dG9jb21wbGV0ZVByb3BzPFxyXG4gICAgc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgdHlwZW9mIG11bHRpcGxlLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmYWxzZVxyXG4gID5bJ29uQ2hhbmdlJ10gPSAoX2UsIHYpID0+IHtcclxuICAgIHYgJiYgc2V0TG9jYWxWYWx1ZSh2KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb250cm9sbGVkT25DaGFuZ2U6IEF1dG9jb21wbGV0ZVByb3BzPFxyXG4gICAgQmFzaWNWYWx1ZSxcclxuICAgIHR5cGVvZiBtdWx0aXBsZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2VcclxuICA+WydvbkNoYW5nZSddID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoX2U6IFJlYWN0LkNoYW5nZUV2ZW50PGFueT4sIHZhbHVlOiBCYXNpY0ZpZWxkVmFsdWUgfCBCYXNpY0ZpZWxkVmFsdWVbXSB8IG51bGwpID0+IHtcclxuICAgICAgb25DaGFuZ2UgJiZcclxuICAgICAgICB2YWx1ZSAmJlxyXG4gICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtvbkNoYW5nZV1cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRvVXNlID0gb25DaGFuZ2UgPyBjb250cm9sbGVkT25DaGFuZ2UgOiBvbkxvY2FsQ2hhbmdlO1xyXG4gIGNvbnN0IHZhbHVlVG9Vc2UgPSBvbkNoYW5nZSA/IHZhbHVlIDogbG9jYWxWYWx1ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0fVxyXG4gICAgICBzaXplPXtzaXplfVxyXG4gICAgICBpZD17cHJvcHMubmFtZX1cclxuICAgICAgLy8gbXVsdGlwbGU9e211bHRpcGxlfVxyXG4gICAgICAvLyB2YWx1ZT17dmFsdWVUb1VzZX1cclxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgZ2V0T3B0aW9uTGFiZWw9e2dldE9wdGlvbkxhYmVsfVxyXG4gICAgICAvLyBvbkNoYW5nZT17b25DaGFuZ2VUb1VzZX1cclxuICAgICAgLy8gcmVuZGVyVGFncz17KHZhbHVlLCBnZXRUYWdQcm9wcykgPT5cclxuICAgICAgLy8gICB2YWx1ZS5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgLy8gICAgIDxDaGlwXHJcbiAgICAgIC8vICAgICAgIGtleT17YG9wdGlvbi0ke2luZGV4fWB9XHJcbiAgICAgIC8vICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgIC8vICAgICAgIGxhYmVsPXtnZXRPcHRpb25MYWJlbChvcHRpb24pfVxyXG4gICAgICAvLyAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAvLyAgICAgICB7Li4uZ2V0VGFnUHJvcHMoeyBpbmRleCB9KX1cclxuICAgICAgLy8gICAgIC8+XHJcbiAgICAgIC8vICAgKSlcclxuICAgICAgLy8gfVxyXG4gICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxUZXh0SW5wdXQgey4uLnBhcmFtc30gbmFtZT17cHJvcHMubmFtZX0gbGFiZWw9e2xhYmVsfSB0eXBlPVwidGV4dFwiIHZhcmlhbnQ9XCJmaWxsZWRcIiAvPlxyXG4gICAgICApfVxyXG4gICAgICAvLyBkaXNhYmxlTGlzdFdyYXBcclxuICAgICAgLy8gLy8gQHRzLWV4cGVjdC1lcnJvciAtIEltcGxlbWVudGF0aW9uIGZyb20gTWF0ZXJpYWwtVUkgZG9jc1xyXG4gICAgICAvLyBMaXN0Ym94Q29tcG9uZW50PXtWaXJ0dWFsaXplZExpc3RCb3h9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKFNlbGVjdGlvbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=