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
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["options", "value", "onChange", "getOptionLabel", "getOptionSelected", "label", "storeOptionsPath", "multiple", "size"]);

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
  console.log(valueToUse);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.select
  }, lodash_omit__WEBPACK_IMPORTED_MODULE_4___default()(props, ['additionalNames', 'additionalValues'])), {}, {
    size: size,
    id: props.name,
    multiple: multiple,
    value: valueToUse || [],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiY29tcGFyZSIsIm9wdGlvbiIsInZhbHVlIiwiU2VsZWN0aW9uIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwiZ2V0T3B0aW9uTGFiZWwiLCJnZXRPcHRpb25TZWxlY3RlZCIsImxhYmVsIiwic3RvcmVPcHRpb25zUGF0aCIsIm11bHRpcGxlIiwic2l6ZSIsInByb3BzIiwic3RvcmVPcHRpb25zIiwidXNlQXBwU2VsZWN0b3IiLCJzdGF0ZSIsImdldCIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwiX2UiLCJ2IiwiY29udHJvbGxlZE9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ0YXJnZXQiLCJvbkNoYW5nZVRvVXNlIiwidmFsdWVUb1VzZSIsImNvbnNvbGUiLCJsb2ciLCJzdHlsZXMiLCJzZWxlY3QiLCJvbWl0IiwibmFtZSIsImdldFRhZ1Byb3BzIiwibWFwIiwiaW5kZXgiLCJwYXJhbXMiLCJWaXJ0dWFsaXplZExpc3RCb3giLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQW9CQyxNQUFwQixFQUErQkMsS0FBL0I7QUFBQSxTQUE4REQsTUFBTSxLQUFLQyxLQUF6RTtBQUFBLENBQWhCOztBQVlBLElBQU1DLFNBQTRCLEdBQUcsU0FBL0JBLFNBQStCLE9BVy9CO0FBQUE7O0FBQUEsTUFWSkMsT0FVSSxRQVZKQSxPQVVJO0FBQUEsd0JBVEpGLEtBU0k7QUFBQSxNQVRKQSxLQVNJLDJCQVRJLElBU0o7QUFBQSxNQVJKRyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxNQVBKQyxjQU9JLFFBUEpBLGNBT0k7QUFBQSxtQ0FOSkMsaUJBTUk7QUFBQSxNQU5KQSxpQkFNSSxzQ0FOZ0JQLE9BTWhCO0FBQUEsTUFMSlEsS0FLSSxRQUxKQSxLQUtJO0FBQUEsbUNBSkpDLGdCQUlJO0FBQUEsTUFKSkEsZ0JBSUksc0NBSmUsRUFJZjtBQUFBLDJCQUhKQyxRQUdJO0FBQUEsTUFISkEsUUFHSSw4QkFITyxLQUdQO0FBQUEsdUJBRkpDLElBRUk7QUFBQSxNQUZKQSxJQUVJLDBCQUZHLE9BRUg7QUFBQSxNQUREQyxLQUNDOztBQUNKLE1BQU1DLFlBQTBCLEdBQUdDLCtEQUFjLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdDLGlEQUFHLENBQUNELEtBQUQsRUFBUU4sZ0JBQVIsQ0FBZDtBQUFBLEdBQUQsQ0FBakQ7O0FBREksa0JBRWdDUSxzREFBUSxDQUFtQyxJQUFuQyxDQUZ4QztBQUFBLE1BRUdDLFVBRkg7QUFBQSxNQUVlQyxhQUZmOztBQUlKLE1BQU1DLGFBS08sR0FBRyxTQUxWQSxhQUtVLENBQUNDLEVBQUQsRUFBS0MsQ0FBTCxFQUFXO0FBQ3pCQSxLQUFDLElBQUlILGFBQWEsQ0FBQ0csQ0FBRCxDQUFsQjtBQUNELEdBUEQ7O0FBU0EsTUFBTUMsa0JBS08sR0FBR0MseURBQVcsQ0FDekIsVUFBQ0gsRUFBRCxFQUE2Qm5CLEtBQTdCLEVBQW1GO0FBQ2pGRyxZQUFRLElBQ05ILEtBREYsSUFFRUcsUUFBUSxDQUFDO0FBQ1BvQixZQUFNLEVBQUU7QUFDTjtBQUNBdkIsYUFBSyxFQUFMQTtBQUZNO0FBREQsS0FBRCxDQUZWO0FBUUQsR0FWd0IsRUFXekIsQ0FBQ0csUUFBRCxDQVh5QixDQUwzQjtBQW1CQSxNQUFNcUIsYUFBYSxHQUFHckIsUUFBUSxHQUFHa0Isa0JBQUgsR0FBd0JILGFBQXREO0FBQ0EsTUFBTU8sVUFBVSxHQUFHdEIsUUFBUSxHQUFHSCxLQUFILEdBQVdnQixVQUF0QztBQUVBVSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWjtBQUVBLHNCQUNFLHFFQUFDLHFFQUFEO0FBQ0UsYUFBUyxFQUFFRywyREFBTSxDQUFDQztBQURwQixLQUVNQyxrREFBSSxDQUFDcEIsS0FBRCxFQUFRLENBQUMsaUJBQUQsRUFBb0Isa0JBQXBCLENBQVIsQ0FGVjtBQUdFLFFBQUksRUFBRUQsSUFIUjtBQUlFLE1BQUUsRUFBRUMsS0FBSyxDQUFDcUIsSUFKWjtBQUtFLFlBQVEsRUFBRXZCLFFBTFo7QUFNRSxTQUFLLEVBQUVpQixVQUFVLElBQUksRUFOdkI7QUFPRSxXQUFPLEVBQUUsQ0FBQ2xCLGdCQUFnQixHQUFHSSxZQUFILEdBQWtCVCxPQUFuQyxLQUErQyxFQVAxRDtBQVFFLHFCQUFpQixFQUFFRyxpQkFSckI7QUFTRSxrQkFBYyxFQUFFRCxjQVRsQjtBQVVFLFlBQVEsRUFBRW9CLGFBVlo7QUFXRSxjQUFVLEVBQUUsb0JBQUN4QixLQUFELEVBQVFnQyxXQUFSO0FBQUEsYUFDVmhDLEtBQUssQ0FBQ2lDLEdBQU4sQ0FBVSxVQUFDbEMsTUFBRCxFQUFTbUMsS0FBVDtBQUFBLDRCQUNSLHFFQUFDLDhEQUFEO0FBRUUsaUJBQU8sRUFBQyxVQUZWO0FBR0UsZUFBSyxFQUFFOUIsY0FBYyxDQUFDTCxNQUFELENBSHZCO0FBSUUsY0FBSSxFQUFDO0FBSlAsV0FLTWlDLFdBQVcsQ0FBQztBQUFFRSxlQUFLLEVBQUxBO0FBQUYsU0FBRCxDQUxqQixvQkFDaUJBLEtBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFWLENBRFU7QUFBQSxLQVhkO0FBc0JFLGVBQVcsRUFBRSxxQkFBQ0MsTUFBRDtBQUFBLDBCQUNYLHFFQUFDLGtFQUFELGtDQUFlQSxNQUFmO0FBQXVCLFlBQUksRUFBRXpCLEtBQUssQ0FBQ3FCLElBQW5DO0FBQXlDLGFBQUssRUFBRXpCLEtBQWhEO0FBQXVELFlBQUksRUFBQyxNQUE1RDtBQUFtRSxlQUFPLEVBQUM7QUFBM0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURXO0FBQUEsS0F0QmY7QUF5QkUsbUJBQWUsTUF6QmpCLENBMEJFO0FBMUJGO0FBMkJFLG9CQUFnQixFQUFFOEIsNERBQWtCQTtBQTNCdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBK0JELENBL0VEOztHQUFNbkMsUztVQVkrQlcsdUQ7OztLQVovQlgsUztBQWlGUyxrRkFBQW9DLGtEQUFJLENBQUNwQyxTQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuNGI5Mjg0MDAzZGJkOWQyYzAxMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXQgZnJvbSAnbG9kYXNoL2dldCc7XHJcbmltcG9ydCBvbWl0IGZyb20gJ2xvZGFzaC9vbWl0JztcclxuaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgbWVtbywgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRvY29tcGxldGUsIHsgQXV0b2NvbXBsZXRlUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnO1xyXG5cclxuaW1wb3J0IHR5cGUgeyBDb21tb25GaWVsZFR5cGUsIEJhc2ljVmFsdWUsIEJhc2ljRmllbGRWYWx1ZSB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvZm9ybVR5cGVzJztcclxuXHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnYXBwUmVkdXgnO1xyXG5cclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICdjb21wb25lbnRzL0Zvcm1zL1RleHRJbnB1dCc7XHJcbmltcG9ydCBWaXJ0dWFsaXplZExpc3RCb3ggZnJvbSAnLi9WaXJ0dWFsaXplZExpc3RCb3gnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlbGVjdC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBjb21wYXJlID0gPFQgZXh0ZW5kcyB1bmtub3duPihvcHRpb246IFQsIHZhbHVlOiBCYXNpY1ZhbHVlKTogYm9vbGVhbiA9PiBvcHRpb24gPT09IHZhbHVlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3Rpb25UeXBlIGV4dGVuZHMgQ29tbW9uRmllbGRUeXBlIHtcclxuICB0eXBlOiAnc2VsZWN0JyB8ICdtdWx0aV9zZWxlY3QnO1xyXG4gIHZhbHVlPzogQmFzaWNWYWx1ZSB8IEJhc2ljVmFsdWVbXTtcclxuICBvcHRpb25zPzogQmFzaWNWYWx1ZVtdO1xyXG4gIHN0b3JlT3B0aW9uc1BhdGg/OiBzdHJpbmc7XHJcbiAgZ2V0T3B0aW9uU2VsZWN0ZWQ/OiA8VCBleHRlbmRzIHVua25vd24+KG9wdGlvbjogVCwgdmFsdWU6IEJhc2ljVmFsdWUpID0+IGJvb2xlYW47XHJcbiAgZ2V0T3B0aW9uTGFiZWw6ICh2YWx1ZTogQmFzaWNWYWx1ZSkgPT4gc3RyaW5nO1xyXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgU2VsZWN0aW9uOiBGQzxTZWxlY3Rpb25UeXBlPiA9ICh7XHJcbiAgb3B0aW9ucyxcclxuICB2YWx1ZSA9IG51bGwsXHJcbiAgb25DaGFuZ2UsXHJcbiAgZ2V0T3B0aW9uTGFiZWwsXHJcbiAgZ2V0T3B0aW9uU2VsZWN0ZWQgPSBjb21wYXJlLFxyXG4gIGxhYmVsLFxyXG4gIHN0b3JlT3B0aW9uc1BhdGggPSAnJyxcclxuICBtdWx0aXBsZSA9IGZhbHNlLFxyXG4gIHNpemUgPSAnc21hbGwnLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCBzdG9yZU9wdGlvbnM6IEJhc2ljVmFsdWVbXSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gZ2V0KHN0YXRlLCBzdG9yZU9wdGlvbnNQYXRoKSk7XHJcbiAgY29uc3QgW2xvY2FsVmFsdWUsIHNldExvY2FsVmFsdWVdID0gdXNlU3RhdGU8QmFzaWNWYWx1ZSB8IEJhc2ljVmFsdWVbXSB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBvbkxvY2FsQ2hhbmdlOiBBdXRvY29tcGxldGVQcm9wczxcclxuICAgIHN0cmluZyB8IG51bWJlcixcclxuICAgIHR5cGVvZiBtdWx0aXBsZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2VcclxuICA+WydvbkNoYW5nZSddID0gKF9lLCB2KSA9PiB7XHJcbiAgICB2ICYmIHNldExvY2FsVmFsdWUodik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udHJvbGxlZE9uQ2hhbmdlOiBBdXRvY29tcGxldGVQcm9wczxcclxuICAgIEJhc2ljVmFsdWUsXHJcbiAgICB0eXBlb2YgbXVsdGlwbGUsXHJcbiAgICBmYWxzZSxcclxuICAgIGZhbHNlXHJcbiAgPlsnb25DaGFuZ2UnXSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKF9lOiBSZWFjdC5DaGFuZ2VFdmVudDxhbnk+LCB2YWx1ZTogQmFzaWNGaWVsZFZhbHVlIHwgQmFzaWNGaWVsZFZhbHVlW10gfCBudWxsKSA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlICYmXHJcbiAgICAgICAgdmFsdWUgJiZcclxuICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbb25DaGFuZ2VdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZSA9IG9uQ2hhbmdlID8gY29udHJvbGxlZE9uQ2hhbmdlIDogb25Mb2NhbENoYW5nZTtcclxuICBjb25zdCB2YWx1ZVRvVXNlID0gb25DaGFuZ2UgPyB2YWx1ZSA6IGxvY2FsVmFsdWU7XHJcblxyXG4gIGNvbnNvbGUubG9nKHZhbHVlVG9Vc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3R9XHJcbiAgICAgIHsuLi5vbWl0KHByb3BzLCBbJ2FkZGl0aW9uYWxOYW1lcycsICdhZGRpdGlvbmFsVmFsdWVzJ10pfVxyXG4gICAgICBzaXplPXtzaXplfVxyXG4gICAgICBpZD17cHJvcHMubmFtZX1cclxuICAgICAgbXVsdGlwbGU9e211bHRpcGxlfVxyXG4gICAgICB2YWx1ZT17dmFsdWVUb1VzZSB8fCBbXX1cclxuICAgICAgb3B0aW9ucz17KHN0b3JlT3B0aW9uc1BhdGggPyBzdG9yZU9wdGlvbnMgOiBvcHRpb25zKSB8fCBbXX1cclxuICAgICAgZ2V0T3B0aW9uU2VsZWN0ZWQ9e2dldE9wdGlvblNlbGVjdGVkfVxyXG4gICAgICBnZXRPcHRpb25MYWJlbD17Z2V0T3B0aW9uTGFiZWx9XHJcbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRvVXNlfVxyXG4gICAgICByZW5kZXJUYWdzPXsodmFsdWUsIGdldFRhZ1Byb3BzKSA9PlxyXG4gICAgICAgIHZhbHVlLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAga2V5PXtgb3B0aW9uLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbGFiZWw9e2dldE9wdGlvbkxhYmVsKG9wdGlvbil9XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHsuLi5nZXRUYWdQcm9wcyh7IGluZGV4IH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFRleHRJbnB1dCB7Li4ucGFyYW1zfSBuYW1lPXtwcm9wcy5uYW1lfSBsYWJlbD17bGFiZWx9IHR5cGU9XCJ0ZXh0XCIgdmFyaWFudD1cImZpbGxlZFwiIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIGRpc2FibGVMaXN0V3JhcFxyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gSW1wbGVtZW50YXRpb24gZnJvbSBNYXRlcmlhbC1VSSBkb2NzXHJcbiAgICAgIExpc3Rib3hDb21wb25lbnQ9e1ZpcnR1YWxpemVkTGlzdEJveH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oU2VsZWN0aW9uKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==