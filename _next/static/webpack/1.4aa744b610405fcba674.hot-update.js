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
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["options", "onChange", "getOptionLabel", "getOptionSelected", "label", "storeOptionsPath", "multiple", "size"]);

  var _props$value = props.value,
      value = _props$value === void 0 ? null : _props$value;
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
          lineNumber: 88,
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
        lineNumber: 98,
        columnNumber: 9
      }, _this);
    },
    disableListWrap: true // @ts-expect-error - Implementation from Material-UI docs
    ,
    ListboxComponent: _VirtualizedListBox__WEBPACK_IMPORTED_MODULE_10__["default"]
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 75,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiY29tcGFyZSIsIm9wdGlvbiIsInZhbHVlIiwiU2VsZWN0aW9uIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwiZ2V0T3B0aW9uTGFiZWwiLCJnZXRPcHRpb25TZWxlY3RlZCIsImxhYmVsIiwic3RvcmVPcHRpb25zUGF0aCIsIm11bHRpcGxlIiwic2l6ZSIsInByb3BzIiwic3RvcmVPcHRpb25zIiwidXNlQXBwU2VsZWN0b3IiLCJzdGF0ZSIsImdldCIsInVzZVN0YXRlIiwibG9jYWxWYWx1ZSIsInNldExvY2FsVmFsdWUiLCJvbkxvY2FsQ2hhbmdlIiwiX2UiLCJ2IiwiY29udHJvbGxlZE9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJ0YXJnZXQiLCJvbkNoYW5nZVRvVXNlIiwidmFsdWVUb1VzZSIsInN0eWxlcyIsInNlbGVjdCIsIm9taXQiLCJuYW1lIiwiZ2V0VGFnUHJvcHMiLCJtYXAiLCJpbmRleCIsInBhcmFtcyIsIlZpcnR1YWxpemVkTGlzdEJveCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBb0JDLE1BQXBCLEVBQStCQyxLQUEvQjtBQUFBLFNBQThERCxNQUFNLEtBQUtDLEtBQXpFO0FBQUEsQ0FBaEI7O0FBWUEsSUFBTUMsU0FBNEIsR0FBRyxTQUEvQkEsU0FBK0IsT0FVL0I7QUFBQTs7QUFBQSxNQVRKQyxPQVNJLFFBVEpBLE9BU0k7QUFBQSxNQVJKQyxRQVFJLFFBUkpBLFFBUUk7QUFBQSxNQVBKQyxjQU9JLFFBUEpBLGNBT0k7QUFBQSxtQ0FOSkMsaUJBTUk7QUFBQSxNQU5KQSxpQkFNSSxzQ0FOZ0JQLE9BTWhCO0FB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QTtBQUFBO0FBQUEsV0FERjtBQStCRCxDQTdFRDs7R0FBTWpDLFM7VUFZK0JXLHVEOzs7S0FaL0JYLFM7QUErRVMsa0ZBQUFrQyxrREFBSSxDQUFDbEMsU0FBRCxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay8xLjRhYTc0NGI2MTA0MDVmY2JhNjc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xyXG5pbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gvb21pdCc7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlLCB7IEF1dG9jb21wbGV0ZVByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJztcclxuXHJcbmltcG9ydCB0eXBlIHsgQ29tbW9uRmllbGRUeXBlLCBCYXNpY1ZhbHVlLCBCYXNpY0ZpZWxkVmFsdWUgfSBmcm9tICdjb21wb25lbnRzL0Zvcm1zL2Zvcm1UeXBlcyc7XHJcblxyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ2FwcFJlZHV4JztcclxuXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9UZXh0SW5wdXQnO1xyXG5pbXBvcnQgVmlydHVhbGl6ZWRMaXN0Qm94IGZyb20gJy4vVmlydHVhbGl6ZWRMaXN0Qm94JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWxlY3QubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgY29tcGFyZSA9IDxUIGV4dGVuZHMgdW5rbm93bj4ob3B0aW9uOiBULCB2YWx1ZTogQmFzaWNWYWx1ZSk6IGJvb2xlYW4gPT4gb3B0aW9uID09PSB2YWx1ZTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0aW9uVHlwZSBleHRlbmRzIENvbW1vbkZpZWxkVHlwZSB7XHJcbiAgdHlwZTogJ3NlbGVjdCcgfCAnbXVsdGlfc2VsZWN0JztcclxuICB2YWx1ZT86IEJhc2ljVmFsdWUgfCBCYXNpY1ZhbHVlW107XHJcbiAgb3B0aW9ucz86IEJhc2ljVmFsdWVbXTtcclxuICBzdG9yZU9wdGlvbnNQYXRoPzogc3RyaW5nO1xyXG4gIGdldE9wdGlvblNlbGVjdGVkPzogPFQgZXh0ZW5kcyB1bmtub3duPihvcHRpb246IFQsIHZhbHVlOiBCYXNpY1ZhbHVlKSA9PiBib29sZWFuO1xyXG4gIGdldE9wdGlvbkxhYmVsOiAodmFsdWU6IEJhc2ljVmFsdWUpID0+IHN0cmluZztcclxuICBtdWx0aXBsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFNlbGVjdGlvbjogRkM8U2VsZWN0aW9uVHlwZT4gPSAoe1xyXG4gIG9wdGlvbnMsXHJcbiAgb25DaGFuZ2UsXHJcbiAgZ2V0T3B0aW9uTGFiZWwsXHJcbiAgZ2V0T3B0aW9uU2VsZWN0ZWQgPSBjb21wYXJlLFxyXG4gIGxhYmVsLFxyXG4gIHN0b3JlT3B0aW9uc1BhdGggPSAnJyxcclxuICBtdWx0aXBsZSA9IGZhbHNlLFxyXG4gIHNpemUgPSAnc21hbGwnLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCB7IHZhbHVlID0gbnVsbCB9ID0gcHJvcHM7XHJcbiAgY29uc3Qgc3RvcmVPcHRpb25zOiBCYXNpY1ZhbHVlW10gPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IGdldChzdGF0ZSwgc3RvcmVPcHRpb25zUGF0aCkpO1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPEJhc2ljVmFsdWUgfCBCYXNpY1ZhbHVlW10+KG11bHRpcGxlID8gW10gOiAnJyk7XHJcblxyXG4gIGNvbnN0IG9uTG9jYWxDaGFuZ2U6IEF1dG9jb21wbGV0ZVByb3BzPFxyXG4gICAgc3RyaW5nIHwgbnVtYmVyLFxyXG4gICAgdHlwZW9mIG11bHRpcGxlLFxyXG4gICAgZmFsc2UsXHJcbiAgICBmYWxzZVxyXG4gID5bJ29uQ2hhbmdlJ10gPSAoX2UsIHYpID0+IHtcclxuICAgIHYgJiYgc2V0TG9jYWxWYWx1ZSh2KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb250cm9sbGVkT25DaGFuZ2U6IEF1dG9jb21wbGV0ZVByb3BzPFxyXG4gICAgQmFzaWNWYWx1ZSxcclxuICAgIHR5cGVvZiBtdWx0aXBsZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2VcclxuICA+WydvbkNoYW5nZSddID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoX2U6IFJlYWN0LkNoYW5nZUV2ZW50PGFueT4sIHZhbHVlOiBCYXNpY0ZpZWxkVmFsdWUgfCBCYXNpY0ZpZWxkVmFsdWVbXSB8IG51bGwpID0+IHtcclxuICAgICAgb25DaGFuZ2UgJiZcclxuICAgICAgICB2YWx1ZSAmJlxyXG4gICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIFtvbkNoYW5nZV1cclxuICApO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRvVXNlID0gb25DaGFuZ2UgPyBjb250cm9sbGVkT25DaGFuZ2UgOiBvbkxvY2FsQ2hhbmdlO1xyXG4gIGNvbnN0IHZhbHVlVG9Vc2UgPSBvbkNoYW5nZSA/IHZhbHVlIDogbG9jYWxWYWx1ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0fVxyXG4gICAgICB7Li4ub21pdChwcm9wcywgWydhZGRpdGlvbmFsTmFtZXMnLCAnYWRkaXRpb25hbFZhbHVlcyddKX1cclxuICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgaWQ9e3Byb3BzLm5hbWV9XHJcbiAgICAgIG11bHRpcGxlPXttdWx0aXBsZX1cclxuICAgICAgdmFsdWU9e3ZhbHVlVG9Vc2V9XHJcbiAgICAgIG9wdGlvbnM9eyhzdG9yZU9wdGlvbnNQYXRoID8gc3RvcmVPcHRpb25zIDogb3B0aW9ucykgfHwgW119XHJcbiAgICAgIGdldE9wdGlvblNlbGVjdGVkPXtnZXRPcHRpb25TZWxlY3RlZH1cclxuICAgICAgZ2V0T3B0aW9uTGFiZWw9e2dldE9wdGlvbkxhYmVsfVxyXG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2VUb1VzZX1cclxuICAgICAgcmVuZGVyVGFncz17KHZhbHVlLCBnZXRUYWdQcm9wcykgPT5cclxuICAgICAgICB2YWx1ZS5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxDaGlwXHJcbiAgICAgICAgICAgIGtleT17YG9wdGlvbi0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIGxhYmVsPXtnZXRPcHRpb25MYWJlbChvcHRpb24pfVxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICB7Li4uZ2V0VGFnUHJvcHMoeyBpbmRleCB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG4gICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxUZXh0SW5wdXQgey4uLnBhcmFtc30gbmFtZT17cHJvcHMubmFtZX0gbGFiZWw9e2xhYmVsfSB0eXBlPVwidGV4dFwiIHZhcmlhbnQ9XCJmaWxsZWRcIiAvPlxyXG4gICAgICApfVxyXG4gICAgICBkaXNhYmxlTGlzdFdyYXBcclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEltcGxlbWVudGF0aW9uIGZyb20gTWF0ZXJpYWwtVUkgZG9jc1xyXG4gICAgICBMaXN0Ym94Q29tcG9uZW50PXtWaXJ0dWFsaXplZExpc3RCb3h9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKFNlbGVjdGlvbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=