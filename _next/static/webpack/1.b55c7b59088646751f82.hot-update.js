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











var Selection = function Selection(_ref) {
  _s();

  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      label = _ref.label,
      options = _ref.options,
      _ref$storeOptionsPath = _ref.storeOptionsPath,
      storeOptionsPath = _ref$storeOptionsPath === void 0 ? '' : _ref$storeOptionsPath,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["value", "onChange", "getOptionLabel", "label", "options", "storeOptionsPath", "multiple", "size"]);

  var storeOptions = Object(appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppSelector"])(function (state) {
    return lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(state, storeOptionsPath);
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(),
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
    value: valueToUse,
    options: (storeOptionsPath ? storeOptions : options) || [],
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
          lineNumber: 84,
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
        lineNumber: 94,
        columnNumber: 9
      }, _this);
    },
    disableListWrap: true // @ts-expect-error - Implementation from Material-UI docs
    ,
    ListboxComponent: _VirtualizedListBox__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, _this);
};

_s(Selection, "Z5sMNGfNC0oETXETMnlYGJC9zKA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiU2VsZWN0aW9uIiwidmFsdWUiLCJvbkNoYW5nZSIsImdldE9wdGlvbkxhYmVsIiwibGFiZWwiLCJvcHRpb25zIiwic3RvcmVPcHRpb25zUGF0aCIsIm11bHRpcGxlIiwic2l6ZSIsInByb3BzIiwic3RvcmVPcHRpb25zIiwidXNlQXBwU2VsZWN0b3IiLCJzdGF0ZSIsImdldCIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwiX2UiLCJ2IiwiY29udHJvbGxlZE9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ0YXJnZXQiLCJvbkNoYW5nZVRvVXNlIiwidmFsdWVUb1VzZSIsInN0eWxlcyIsInNlbGVjdCIsIm9taXQiLCJuYW1lIiwiZ2V0VGFnUHJvcHMiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsInBhcmFtcyIsIlZpcnR1YWxpemVkTGlzdEJveCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7O0FBWUEsSUFBTUEsU0FBNEIsR0FBRyxTQUEvQkEsU0FBK0IsT0FVL0I7QUFBQTs7QUFBQSx3QkFUSkMsS0FTSTtBQUFBLE1BVEpBLEtBU0ksMkJBVEksRUFTSjtBQUFBLE1BUkpDLFFBUUksUUFSSkEsUUFRSTtBQUFBLE1BUEpDLGNBT0ksUUFQSkEsY0FPSTtBQUFBLE1BTkpDLEtBTUksUUFOSkEsS0FNSTtBQUFBLE1BTEpDLE9BS0ksUUFMSkEsT0FLSTtBQUFBLG1DQUpKQyxnQkFJSTtBQUFBLE1BSkpBLGdCQUlJLHNDQUplLEVBSWY7QUFBQSwyQkFISkMsUUFHSTtBQUFBLE1BSEpBLFFBR0ksOEJBSE8sS0FHUDtBQUFBLHVCQUZKQyxJQUVJO0FBQUEsTUFGSkEsSUFFSSwwQkFGRyxPQUVIO0FBQUEsTUFEREMsS0FDQzs7QUFDSixNQUFNQyxZQUEwQixHQUFHQywrREFBYyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQyxpREFBRyxDQUFDRCxLQUFELEVBQVFOLGdCQUFSLENBQWQ7QUFBQSxHQUFELENBQWpEOztBQURJLGtCQUVnQ1Esc0RBQVEsRUFGeEM7QUFBQSxNQUVHQyxVQUZIO0FBQUEsTUFFZUMsYUFGZjs7QUFJSixNQUFNQyxhQUtPLEdBQUcsU0FMVkEsYUFLVSxDQUFDQyxFQUFELEVBQUtDLENBQUwsRUFBVztBQUN6QkEsS0FBQyxJQUFJSCxhQUFhLENBQUNHLENBQUQsQ0FBbEI7QUFDRCxHQVBEOztBQVNBLE1BQU1DLGtCQUtPLEdBQUdDLHlEQUFXLENBQ3pCLFVBQUNILEVBQUQsRUFBNkJqQixLQUE3QixFQUFtRjtBQUNqRkMsWUFBUSxJQUNORCxLQURGLElBRUVDLFFBQVEsQ0FBQztBQUNQb0IsWUFBTSxFQUFFO0FBQ047QUFDQXJCLGFBQUssRUFBTEE7QUFGTTtBQURELEtBQUQsQ0FGVjtBQVFELEdBVndCLEVBV3pCLENBQUNDLFFBQUQsQ0FYeUIsQ0FMM0I7QUFtQkEsTUFBTXFCLGFBQWEsR0FBR3JCLFFBQVEsR0FBR2tCLGtCQUFILEdBQXdCSCxhQUF0RDtBQUNBLE1BQU1PLFVBQVUsR0FBR3RCLFFBQVEsR0FBR0QsS0FBSCxHQUFXYyxVQUF0QztBQUVBLHNCQUNFLHFFQUFDLHFFQUFEO0FBQ0UsYUFBUyxFQUFFVSwyREFBTSxDQUFDQztBQURwQixLQUVNQyxrREFBSSxDQUFDbEIsS0FBRCxFQUFRLENBQUMsaUJBQUQsRUFBb0Isa0JBQXBCLENBQVIsQ0FGVjtBQUdFLFFBQUksRUFBRUQsSUFIUjtBQUlFLE1BQUUsRUFBRUMsS0FBSyxDQUFDbUIsSUFKWjtBQUtFLFlBQVEsRUFBRXJCLFFBTFo7QUFNRSxTQUFLLEVBQUVpQixVQU5UO0FBT0UsV0FBTyxFQUFFLENBQUNsQixnQkFBZ0IsR0FBR0ksWUFBSCxHQUFrQkwsT0FBbkMsS0FBK0MsRUFQMUQ7QUFRRSxrQkFBYyxFQUFFRixjQVJsQjtBQVNFLFlBQVEsRUFBRW9CLGFBVFo7QUFVRSxjQUFVLEVBQUUsb0JBQUN0QixLQUFELEVBQVE0QixXQUFSO0FBQUEsYUFDVjVCLEtBQUssQ0FBQzZCLEdBQU4sQ0FBVSxVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSw0QkFDUixxRUFBQyw4REFBRDtBQUVFLGlCQUFPLEVBQUMsVUFGVjtBQUdFLGVBQUssRUFBRTdCLGNBQWMsQ0FBQzRCLE1BQUQsQ0FIdkI7QUFJRSxjQUFJLEVBQUM7QUFKUCxXQUtNRixXQUFXLENBQUM7QUFBRUcsZUFBSyxFQUFMQTtBQUFGLFNBQUQsQ0FMakIsb0JBQ2lCQSxLQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRO0FBQUEsT0FBVixDQURVO0FBQUEsS0FWZDtBQXFCRSxlQUFXLEVBQUUscUJBQUNDLE1BQUQ7QUFBQSwwQkFDWCxxRUFBQyxrRUFBRCxrQ0FBZUEsTUFBZjtBQUF1QixZQUFJLEVBQUV4QixLQUFLLENBQUNtQixJQUFuQztBQUF5QyxhQUFLLEVBQUV4QixLQUFoRDtBQUF1RCxZQUFJLEVBQUMsTUFBNUQ7QUFBbUUsZUFBTyxFQUFDO0FBQTNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBckJmO0FBd0JFLG1CQUFlLE1BeEJqQixDQXlCRTtBQXpCRjtBQTBCRSxvQkFBZ0IsRUFBRThCLDREQUFrQkE7QUExQnRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQTNFRDs7R0FBTWxDLFM7VUFXK0JXLHVEOzs7S0FYL0JYLFM7QUE2RVMsa0ZBQUFtQyxrREFBSSxDQUFDbkMsU0FBRCxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLmI1NWM3YjU5MDg4NjQ2NzUxZjgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xyXG5pbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gvb21pdCc7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlLCB7IEF1dG9jb21wbGV0ZVByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJztcclxuXHJcbmltcG9ydCB0eXBlIHsgQ29tbW9uRmllbGRUeXBlLCBCYXNpY1ZhbHVlLCBCYXNpY0ZpZWxkVmFsdWUgfSBmcm9tICdjb21wb25lbnRzL0Zvcm1zL2Zvcm1UeXBlcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ2FwcFJlZHV4JztcclxuXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9UZXh0SW5wdXQnO1xyXG5pbXBvcnQgVmlydHVhbGl6ZWRMaXN0Qm94IGZyb20gJy4vVmlydHVhbGl6ZWRMaXN0Qm94JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWxlY3QubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb25UeXBlIGV4dGVuZHMgQ29tbW9uRmllbGRUeXBlIHtcclxuICB0eXBlOiAnc2VsZWN0JyB8ICdtdWx0aV9zZWxlY3QnO1xyXG4gIHZhbHVlPzogQmFzaWNWYWx1ZSB8IEJhc2ljVmFsdWVbXTtcclxuICBvcHRpb25zPzogQmFzaWNWYWx1ZVtdO1xyXG4gIHN0b3JlT3B0aW9uc1BhdGg/OiBzdHJpbmc7XHJcbiAgZ2V0T3B0aW9uU2VsZWN0ZWQ/OiA8VD4ob3B0aW9uOiBULCB2YWx1ZTogQmFzaWNWYWx1ZSkgPT4gYm9vbGVhbjtcclxuICBnZXRPcHRpb25MYWJlbDogKHZhbHVlOiBCYXNpY1ZhbHVlKSA9PiBzdHJpbmc7XHJcbiAgbXVsdGlwbGU/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBTZWxlY3Rpb246IEZDPFNlbGVjdGlvblR5cGU+ID0gKHtcclxuICB2YWx1ZSA9IFtdLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGdldE9wdGlvbkxhYmVsLFxyXG4gIGxhYmVsLFxyXG4gIG9wdGlvbnMsXHJcbiAgc3RvcmVPcHRpb25zUGF0aCA9ICcnLFxyXG4gIG11bHRpcGxlID0gZmFsc2UsXHJcbiAgc2l6ZSA9ICdzbWFsbCcsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IHN0b3JlT3B0aW9uczogQmFzaWNWYWx1ZVtdID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBnZXQoc3RhdGUsIHN0b3JlT3B0aW9uc1BhdGgpKTtcclxuICBjb25zdCBbbG9jYWxWYWx1ZSwgc2V0TG9jYWxWYWx1ZV0gPSB1c2VTdGF0ZTxCYXNpY1ZhbHVlIHwgQmFzaWNWYWx1ZVtdPigpO1xyXG5cclxuICBjb25zdCBvbkxvY2FsQ2hhbmdlOiBBdXRvY29tcGxldGVQcm9wczxcclxuICAgIHN0cmluZyB8IG51bWJlcixcclxuICAgIHR5cGVvZiBtdWx0aXBsZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2VcclxuICA+WydvbkNoYW5nZSddID0gKF9lLCB2KSA9PiB7XHJcbiAgICB2ICYmIHNldExvY2FsVmFsdWUodik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udHJvbGxlZE9uQ2hhbmdlOiBBdXRvY29tcGxldGVQcm9wczxcclxuICAgIEJhc2ljVmFsdWUsXHJcbiAgICB0eXBlb2YgbXVsdGlwbGUsXHJcbiAgICBmYWxzZSxcclxuICAgIGZhbHNlXHJcbiAgPlsnb25DaGFuZ2UnXSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKF9lOiBSZWFjdC5DaGFuZ2VFdmVudDxhbnk+LCB2YWx1ZTogQmFzaWNGaWVsZFZhbHVlIHwgQmFzaWNGaWVsZFZhbHVlW10gfCBudWxsKSA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlICYmXHJcbiAgICAgICAgdmFsdWUgJiZcclxuICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbb25DaGFuZ2VdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZSA9IG9uQ2hhbmdlID8gY29udHJvbGxlZE9uQ2hhbmdlIDogb25Mb2NhbENoYW5nZTtcclxuICBjb25zdCB2YWx1ZVRvVXNlID0gb25DaGFuZ2UgPyB2YWx1ZSA6IGxvY2FsVmFsdWU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdH1cclxuICAgICAgey4uLm9taXQocHJvcHMsIFsnYWRkaXRpb25hbE5hbWVzJywgJ2FkZGl0aW9uYWxWYWx1ZXMnXSl9XHJcbiAgICAgIHNpemU9e3NpemV9XHJcbiAgICAgIGlkPXtwcm9wcy5uYW1lfVxyXG4gICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XHJcbiAgICAgIHZhbHVlPXt2YWx1ZVRvVXNlfVxyXG4gICAgICBvcHRpb25zPXsoc3RvcmVPcHRpb25zUGF0aCA/IHN0b3JlT3B0aW9ucyA6IG9wdGlvbnMpIHx8IFtdfVxyXG4gICAgICBnZXRPcHRpb25MYWJlbD17Z2V0T3B0aW9uTGFiZWx9XHJcbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRvVXNlfVxyXG4gICAgICByZW5kZXJUYWdzPXsodmFsdWUsIGdldFRhZ1Byb3BzKSA9PlxyXG4gICAgICAgIHZhbHVlLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAga2V5PXtgb3B0aW9uLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbGFiZWw9e2dldE9wdGlvbkxhYmVsKG9wdGlvbil9XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHsuLi5nZXRUYWdQcm9wcyh7IGluZGV4IH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFRleHRJbnB1dCB7Li4ucGFyYW1zfSBuYW1lPXtwcm9wcy5uYW1lfSBsYWJlbD17bGFiZWx9IHR5cGU9XCJ0ZXh0XCIgdmFyaWFudD1cImZpbGxlZFwiIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIGRpc2FibGVMaXN0V3JhcFxyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gSW1wbGVtZW50YXRpb24gZnJvbSBNYXRlcmlhbC1VSSBkb2NzXHJcbiAgICAgIExpc3Rib3hDb21wb25lbnQ9e1ZpcnR1YWxpemVkTGlzdEJveH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oU2VsZWN0aW9uKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==