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

  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
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
  console.log(valueToUse);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.select
  }, lodash_omit__WEBPACK_IMPORTED_MODULE_4___default()(props, ['additionalNames', 'additionalValues'])), {}, {
    size: size,
    id: props.name,
    multiple: multiple,
    value: valueToUse,
    options: (storeOptionsPath ? storeOptions : options) || [],
    getOptionSelected: getOptionSelected,
    getOptionLabel: getOptionLabel // onChange={onChangeToUse}
    ,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiY29tcGFyZSIsIm9wdGlvbiIsInZhbHVlIiwiU2VsZWN0aW9uIiwib25DaGFuZ2UiLCJnZXRPcHRpb25MYWJlbCIsImdldE9wdGlvblNlbGVjdGVkIiwibGFiZWwiLCJvcHRpb25zIiwic3RvcmVPcHRpb25zUGF0aCIsIm11bHRpcGxlIiwic2l6ZSIsInByb3BzIiwic3RvcmVPcHRpb25zIiwidXNlQXBwU2VsZWN0b3IiLCJzdGF0ZSIsImdldCIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwiX2UiLCJ2IiwiY29udHJvbGxlZE9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ0YXJnZXQiLCJvbkNoYW5nZVRvVXNlIiwidmFsdWVUb1VzZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJzZWxlY3QiLCJvbWl0IiwibmFtZSIsImdldFRhZ1Byb3BzIiwibWFwIiwiaW5kZXgiLCJwYXJhbXMiLCJWaXJ0dWFsaXplZExpc3RCb3giLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQW9CQyxNQUFwQixFQUErQkMsS0FBL0I7QUFBQSxTQUE4REQsTUFBTSxLQUFLQyxLQUF6RTtBQUFBLENBQWhCOztBQVlBLElBQU1DLFNBQTRCLEdBQUcsU0FBL0JBLFNBQStCLE9BVy9CO0FBQUE7O0FBQUEsd0JBVkpELEtBVUk7QUFBQSxNQVZKQSxLQVVJLDJCQVZJLEVBVUo7QUFBQSxNQVRKRSxRQVNJLFFBVEpBLFFBU0k7QUFBQSxNQVJKQyxjQVFJLFFBUkpBLGNBUUk7QUFBQSxtQ0FQSkMsaUJBT0k7QUFBQSxNQVBKQSxpQkFPSSxzQ0FQZ0JOLE9BT2hCO0FBQUEsTUFOSk8sS0FNSSxRQU5KQSxLQU1JO0FBQUEsTUFMSkMsT0FLSSxRQUxKQSxPQUtJO0FBQUEsbUNBSkpDLGdCQUlJO0FBQUEsTUFKSkEsZ0JBSUksc0NBSmUsRUFJZjtBQUFBLDJCQUhKQyxRQUdJO0FBQUEsTUFISkEsUUFHSSw4QkFITyxLQUdQO0FBQUEsdUJBRkpDLElBRUk7QUFBQSxNQUZKQSxJQUVJLDBCQUZHLE9BRUg7QUFBQSxNQUREQyxLQUNDOztBQUNKLE1BQU1DLFlBQTBCLEdBQUdDLCtEQUFjLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdDLGlEQUFHLENBQUNELEtBQUQsRUFBUU4sZ0JBQVIsQ0FBZDtBQUFBLEdBQUQsQ0FBakQ7O0FBREksa0JBRWdDUSxzREFBUSxDQUE0QlAsUUFBUSxHQUFHLEVBQUgsR0FBUSxFQUE1QyxDQUZ4QztBQUFBLE1BRUdRLFVBRkg7QUFBQSxNQUVlQyxhQUZmOztBQUlKLE1BQU1DLGFBS08sR0FBRyxTQUxWQSxhQUtVLENBQUNDLEVBQUQsRUFBS0MsQ0FBTCxFQUFXO0FBQ3pCQSxLQUFDLElBQUlILGFBQWEsQ0FBQ0csQ0FBRCxDQUFsQjtBQUNELEdBUEQ7O0FBU0EsTUFBTUMsa0JBS08sR0FBR0MseURBQVcsQ0FDekIsVUFBQ0gsRUFBRCxFQUE2Qm5CLEtBQTdCLEVBQW1GO0FBQ2pGRSxZQUFRLElBQ05GLEtBREYsSUFFRUUsUUFBUSxDQUFDO0FBQ1BxQixZQUFNLEVBQUU7QUFDTjtBQUNBdkIsYUFBSyxFQUFMQTtBQUZNO0FBREQsS0FBRCxDQUZWO0FBUUQsR0FWd0IsRUFXekIsQ0FBQ0UsUUFBRCxDQVh5QixDQUwzQjtBQW1CQSxNQUFNc0IsYUFBYSxHQUFHdEIsUUFBUSxHQUFHbUIsa0JBQUgsR0FBd0JILGFBQXREO0FBQ0EsTUFBTU8sVUFBVSxHQUFHdkIsUUFBUSxHQUFHRixLQUFILEdBQVdnQixVQUF0QztBQUVBVSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWjtBQUVBLHNCQUNFLHFFQUFDLHFFQUFEO0FBQ0UsYUFBUyxFQUFFRywyREFBTSxDQUFDQztBQURwQixLQUVNQyxrREFBSSxDQUFDcEIsS0FBRCxFQUFRLENBQUMsaUJBQUQsRUFBb0Isa0JBQXBCLENBQVIsQ0FGVjtBQUdFLFFBQUksRUFBRUQsSUFIUjtBQUlFLE1BQUUsRUFBRUMsS0FBSyxDQUFDcUIsSUFKWjtBQUtFLFlBQVEsRUFBRXZCLFFBTFo7QUFNRSxTQUFLLEVBQUVpQixVQU5UO0FBT0UsV0FBTyxFQUFFLENBQUNsQixnQkFBZ0IsR0FBR0ksWUFBSCxHQUFrQkwsT0FBbkMsS0FBK0MsRUFQMUQ7QUFRRSxxQkFBaUIsRUFBRUYsaUJBUnJCO0FBU0Usa0JBQWMsRUFBRUQsY0FUbEIsQ0FVRTtBQVZGO0FBV0UsY0FBVSxFQUFFLG9CQUFDSCxLQUFELEVBQVFnQyxXQUFSO0FBQUEsYUFDVmhDLEtBQUssQ0FBQ2lDLEdBQU4sQ0FBVSxVQUFDbEMsTUFBRCxFQUFTbUMsS0FBVDtBQUFBLDRCQUNSLHFFQUFDLDhEQUFEO0FBRUUsaUJBQU8sRUFBQyxVQUZWO0FBR0UsZUFBSyxFQUFFL0IsY0FBYyxDQUFDSixNQUFELENBSHZCO0FBSUUsY0FBSSxFQUFDO0FBSlAsV0FLTWlDLFdBQVcsQ0FBQztBQUFFRSxlQUFLLEVBQUxBO0FBQUYsU0FBRCxDQUxqQixvQkFDaUJBLEtBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFWLENBRFU7QUFBQSxLQVhkO0FBc0JFLGVBQVcsRUFBRSxxQkFBQ0MsTUFBRDtBQUFBLDBCQUNYLHFFQUFDLGtFQUFELGtDQUFlQSxNQUFmO0FBQXVCLFlBQUksRUFBRXpCLEtBQUssQ0FBQ3FCLElBQW5DO0FBQXlDLGFBQUssRUFBRTFCLEtBQWhEO0FBQXVELFlBQUksRUFBQyxNQUE1RDtBQUFtRSxlQUFPLEVBQUM7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURXO0FBQUEsS0F0QmY7QUF5QkUsbUJBQWUsTUF6QmpCLENBMEJFO0FBMUJGO0FBMkJFLG9CQUFnQixFQUFFK0IsNERBQWtCQTtBQTNCdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBL0VEOztHQUFNbkMsUztVQVkrQlcsdUQ7OztLQVovQlgsUztBQWlGUyxrRkFBQW9DLGtEQUFJLENBQUNwQyxTQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuMTYzM2U3NGQyM2QxOGE0OWFiZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XHJcbmltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC9vbWl0JztcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRvY29tcGxldGUsIHsgQXV0b2NvbXBsZXRlUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBDb21tb25GaWVsZFR5cGUsIEJhc2ljVmFsdWUsIEJhc2ljRmllbGRWYWx1ZSB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvZm9ybVR5cGVzJztcclxuXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnYXBwUmVkdXgnO1xyXG5cclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm1zL1RleHRJbnB1dCc7XHJcbmltcG9ydCBWaXJ0dWFsaXplZExpc3RCb3ggZnJvbSAnLi9WaXJ0dWFsaXplZExpc3RCb3gnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlbGVjdC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBjb21wYXJlID0gPFQgZXh0ZW5kcyB1bmtub3duPihvcHRpb246IFQsIHZhbHVlOiBCYXNpY1ZhbHVlKTogYm9vbGVhbiA9PiBvcHRpb24gPT09IHZhbHVlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb25UeXBlIGV4dGVuZHMgQ29tbW9uRmllbGRUeXBlIHtcclxuICB0eXBlOiAnc2VsZWN0JyB8ICdtdWx0aV9zZWxlY3QnO1xyXG4gIHZhbHVlPzogQmFzaWNWYWx1ZSB8IEJhc2ljVmFsdWVbXTtcclxuICBvcHRpb25zPzogQmFzaWNWYWx1ZVtdO1xyXG4gIHN0b3JlT3B0aW9uc1BhdGg/OiBzdHJpbmc7XHJcbiAgZ2V0T3B0aW9uU2VsZWN0ZWQ/OiA8VCBleHRlbmRzIHVua25vd24+KG9wdGlvbjogVCwgdmFsdWU6IEJhc2ljVmFsdWUpID0+IGJvb2xlYW47XHJcbiAgZ2V0T3B0aW9uTGFiZWw6ICh2YWx1ZTogQmFzaWNWYWx1ZSkgPT4gc3RyaW5nO1xyXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU2VsZWN0aW9uOiBGQzxTZWxlY3Rpb25UeXBlPiA9ICh7XHJcbiAgdmFsdWUgPSBbXSxcclxuICBvbkNoYW5nZSxcclxuICBnZXRPcHRpb25MYWJlbCxcclxuICBnZXRPcHRpb25TZWxlY3RlZCA9IGNvbXBhcmUsXHJcbiAgbGFiZWwsXHJcbiAgb3B0aW9ucyxcclxuICBzdG9yZU9wdGlvbnNQYXRoID0gJycsXHJcbiAgbXVsdGlwbGUgPSBmYWxzZSxcclxuICBzaXplID0gJ3NtYWxsJyxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3Qgc3RvcmVPcHRpb25zOiBCYXNpY1ZhbHVlW10gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IGdldChzdGF0ZSwgc3RvcmVPcHRpb25zUGF0aCkpO1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPEJhc2ljVmFsdWUgfCBCYXNpY1ZhbHVlW10+KG11bHRpcGxlID8gW10gOiAnJyk7XHJcblxyXG4gIGNvbnN0IG9uTG9jYWxDaGFuZ2U6IEF1dG9jb21wbGV0ZVByb3BzPFxyXG4gICAgc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgdHlwZW9mIG11bHRpcGxlLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmYWxzZVxyXG4gID5bJ29uQ2hhbmdlJ10gPSAoX2UsIHYpID0+IHtcclxuICAgIHYgJiYgc2V0TG9jYWxWYWx1ZSh2KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb250cm9sbGVkT25DaGFuZ2U6IEF1dG9jb21wbGV0ZVByb3BzPFxyXG4gICAgQmFzaWNWYWx1ZSxcclxuICAgIHR5cGVvZiBtdWx0aXBsZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2VcclxuICA+WydvbkNoYW5nZSddID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoX2U6IFJlYWN0LkNoYW5nZUV2ZW50PGFueT4sIHZhbHVlOiBCYXNpY0ZpZWxkVmFsdWUgfCBCYXNpY0ZpZWxkVmFsdWVbXSB8IG51bGwpID0+IHtcclxuICAgICAgb25DaGFuZ2UgJiZcclxuICAgICAgICB2YWx1ZSAmJlxyXG4gICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtvbkNoYW5nZV1cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRvVXNlID0gb25DaGFuZ2UgPyBjb250cm9sbGVkT25DaGFuZ2UgOiBvbkxvY2FsQ2hhbmdlO1xyXG4gIGNvbnN0IHZhbHVlVG9Vc2UgPSBvbkNoYW5nZSA/IHZhbHVlIDogbG9jYWxWYWx1ZTtcclxuXHJcbiAgY29uc29sZS5sb2codmFsdWVUb1VzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdH1cclxuICAgICAgey4uLm9taXQocHJvcHMsIFsnYWRkaXRpb25hbE5hbWVzJywgJ2FkZGl0aW9uYWxWYWx1ZXMnXSl9XHJcbiAgICAgIHNpemU9e3NpemV9XHJcbiAgICAgIGlkPXtwcm9wcy5uYW1lfVxyXG4gICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XHJcbiAgICAgIHZhbHVlPXt2YWx1ZVRvVXNlfVxyXG4gICAgICBvcHRpb25zPXsoc3RvcmVPcHRpb25zUGF0aCA/IHN0b3JlT3B0aW9ucyA6IG9wdGlvbnMpIHx8IFtdfVxyXG4gICAgICBnZXRPcHRpb25TZWxlY3RlZD17Z2V0T3B0aW9uU2VsZWN0ZWR9XHJcbiAgICAgIGdldE9wdGlvbkxhYmVsPXtnZXRPcHRpb25MYWJlbH1cclxuICAgICAgLy8gb25DaGFuZ2U9e29uQ2hhbmdlVG9Vc2V9XHJcbiAgICAgIHJlbmRlclRhZ3M9eyh2YWx1ZSwgZ2V0VGFnUHJvcHMpID0+XHJcbiAgICAgICAgdmFsdWUubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q2hpcFxyXG4gICAgICAgICAgICBrZXk9e2BvcHRpb24tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBsYWJlbD17Z2V0T3B0aW9uTGFiZWwob3B0aW9uKX1cclxuICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgey4uLmdldFRhZ1Byb3BzKHsgaW5kZXggfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICA8VGV4dElucHV0IHsuLi5wYXJhbXN9IG5hbWU9e3Byb3BzLm5hbWV9IGxhYmVsPXtsYWJlbH0gdHlwZT1cInRleHRcIiB2YXJpYW50PVwiZmlsbGVkXCIgLz5cclxuICAgICAgKX1cclxuICAgICAgZGlzYWJsZUxpc3RXcmFwXHJcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBJbXBsZW1lbnRhdGlvbiBmcm9tIE1hdGVyaWFsLVVJIGRvY3NcclxuICAgICAgTGlzdGJveENvbXBvbmVudD17VmlydHVhbGl6ZWRMaXN0Qm94fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTZWxlY3Rpb24pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9