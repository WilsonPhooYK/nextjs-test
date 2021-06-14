webpackHotUpdate_N_E("pages/forms",{

/***/ "./src/components/Forms/Select/Select.tsx":
/*!************************************************!*\
  !*** ./src/components/Forms/Select/Select.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");
/* harmony import */ var react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-custom-scrollbars-2 */ "./node_modules/react-custom-scrollbars-2/lib/index.js");
/* harmony import */ var react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../TextInput */ "./src/components/Forms/TextInput/index.tsx");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Select.module.scss */ "./src/components/Forms/Select/Select.module.scss");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Select_module_scss__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\Select\\Select.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








 // import { StylesProvider } from '@material-ui/core/styles';



// const ListComponent = forwardRef((props, ref) => {
//   const { children, ...comProps } = props;
//   return (
//     <Scrollbars
//       {...comProps}
//       ref={(node) => ref(node?.container)}
//       autoHeight
//       autoHeightMin={0}
//       // autoHeightMax={00}
//     >
//       {children}
//     </Scrollbars>
//   );
// });
// ListComponent.displayName = 'ListComponent';
// const MemoListComponent = memo(ListComponent);
var LISTBOX_PADDING = 8; // px

function renderRow(props) {
  var data = props.data,
      index = props.index,
      style = props.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(data[index], {
    style: _objectSpread(_objectSpread({}, style), {}, {
      top: style.top + LISTBOX_PADDING
    })
  });
}

var OuterElementContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});
var OuterElementType = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(_c = _s(function (props, ref) {
  _s();

  var outerProps = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(OuterElementContext);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
    ref: ref
  }, props), outerProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 10
  }, _this);
}, "xwf7MnafNzQyeYlSPI+2J93j0pg="));
_c2 = OuterElementType;

function useResetCache(data) {
  _s2();

  var ref = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (ref.current != null) {
      ref.current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
} // Adapter for react-window


_s2(useResetCache, "8uVE59eA/r6b92xF80p7sH8rXLk=");

var ListboxComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(_c3 = _s3(function ListboxComponent(props, ref) {
  _s3();

  var children = props.children,
      other = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children"]);

  var itemData = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children);
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"])();
  var smUp = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__["default"])(theme.breakpoints.up('sm'), {
    noSsr: true
  });
  var itemCount = itemData.length;
  var itemSize = smUp ? 36 : 48;

  var getChildSize = function getChildSize(child) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.isValidElement(child) && child.type === _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_7__["default"]) {
      return 48;
    }

    return itemSize;
  };

  var getHeight = function getHeight() {
    if (itemCount > 8) {
      return 8 * itemSize;
    }

    return itemData.map(getChildSize).reduce(function (a, b) {
      return a + b;
    }, 0);
  };

  var gridRef = useResetCache(itemCount);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_10__["Scrollbars"], {
    autoHeight: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      ref: ref,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(OuterElementContext.Provider, {
        value: other,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_window__WEBPACK_IMPORTED_MODULE_9__["VariableSizeList"], {
          itemData: itemData,
          height: getHeight() + 2 * LISTBOX_PADDING,
          width: "100%",
          ref: gridRef,
          outerElementType: OuterElementType,
          innerElementType: "ul",
          itemSize: function itemSize(index) {
            return getChildSize(itemData[index]);
          },
          overscanCount: 5,
          itemCount: itemCount,
          children: renderRow
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, this);
}, "v0Dl6eqbD3+6o9qG2eFb+wOU6xk=", false, function () {
  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_6__["default"], useResetCache];
}));
_c4 = ListboxComponent;

var Selection = function Selection(_ref) {
  _s4();

  var value = _ref.value,
      onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      label = _ref.label,
      options = _ref.options,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["value", "onChange", "getOptionLabel", "label", "options"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(_e, v) {
    setLocalValue(v);
  };

  var controlledOnChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (_e, v) {
    onChange && onChange({
      target: {
        // @ts-expect-error - Either string or number
        value: v
      }
    });
  }, [onChange]);
  var onChangeToUse = onChange ? controlledOnChange : onLocalChange;
  var valueToUse = onChange ? value : localValue;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread(_objectSpread({
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.select
  }, props), {}, {
    id: "tags-filled",
    value: valueToUse,
    options: options // getOptionLabel={getOptionLabel}
    ,
    onChange: onChangeToUse,
    renderTags: function renderTags(value, getTagProps) {
      return value.map(function (option, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
          variant: "outlined",
          label: getOptionLabel && getOptionLabel(option)
        }, getTagProps({
          index: index
        })), "option-".concat(index), false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, _this);
      });
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_TextInput__WEBPACK_IMPORTED_MODULE_11__["default"], _objectSpread(_objectSpread({}, params), {}, {
        label: label,
        type: "text",
        variant: "filled" // size="small"

      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, _this);
    },
    disableListWrap: true,
    ListboxComponent: ListboxComponent // ListboxComponent={MemoListComponent as any}

  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 152,
    columnNumber: 5
  }, _this);
};

_s4(Selection, "BSzkRvk7EsceAPAghdwEPSC6pQI=");

_c5 = Selection;
/* harmony default export */ __webpack_exports__["default"] = (_c6 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(Selection));

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "OuterElementType$React.forwardRef");
$RefreshReg$(_c2, "OuterElementType");
$RefreshReg$(_c3, "ListboxComponent$React.forwardRef");
$RefreshReg$(_c4, "ListboxComponent");
$RefreshReg$(_c5, "Selection");
$RefreshReg$(_c6, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiTElTVEJPWF9QQURESU5HIiwicmVuZGVyUm93IiwicHJvcHMiLCJkYXRhIiwiaW5kZXgiLCJzdHlsZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwidG9wIiwiT3V0ZXJFbGVtZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJPdXRlckVsZW1lbnRUeXBlIiwiZm9yd2FyZFJlZiIsInJlZiIsIm91dGVyUHJvcHMiLCJ1c2VDb250ZXh0IiwidXNlUmVzZXRDYWNoZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJyZXNldEFmdGVySW5kZXgiLCJMaXN0Ym94Q29tcG9uZW50IiwiY2hpbGRyZW4iLCJvdGhlciIsIml0ZW1EYXRhIiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwidGhlbWUiLCJ1c2VUaGVtZSIsInNtVXAiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJ1cCIsIm5vU3NyIiwiaXRlbUNvdW50IiwibGVuZ3RoIiwiaXRlbVNpemUiLCJnZXRDaGlsZFNpemUiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwidHlwZSIsIkxpc3RTdWJoZWFkZXIiLCJnZXRIZWlnaHQiLCJtYXAiLCJyZWR1Y2UiLCJhIiwiYiIsImdyaWRSZWYiLCJTZWxlY3Rpb24iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZ2V0T3B0aW9uTGFiZWwiLCJsYWJlbCIsIm9wdGlvbnMiLCJ1c2VTdGF0ZSIsImxvY2FsVmFsdWUiLCJzZXRMb2NhbFZhbHVlIiwib25Mb2NhbENoYW5nZSIsIl9lIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJzdHlsZXMiLCJzZWxlY3QiLCJnZXRUYWdQcm9wcyIsIm9wdGlvbiIsInBhcmFtcyIsIm1lbW8iXSwibWFwcGluZ3Mi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LEVBQUUsb0JBQUNkLEtBQUQsRUFBUWtCLFdBQVI7QUFBQSxhQUNWbEIsS0FBSyxDQUFDTixHQUFOLENBQVUsVUFBQ3lCLE1BQUQsRUFBU2hFLEtBQVQ7QUFBQSw0QkFDUixxRUFBQyw4REFBRDtBQUVFLGlCQUFPLEVBQUMsVUFGVjtBQUdFLGVBQUssRUFBRStDLGNBQWMsSUFBSUEsY0FBYyxDQUFDaUIsTUFBRDtBQUh6QyxXQUlNRCxXQUFXLENBQUM7QUFBRS9ELGVBQUssRUFBTEE7QUFBRixTQUFELENBSmpCLG9CQUNpQkEsS0FEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVYsQ0FEVTtBQUFBLEtBUmQ7QUFrQkUsZUFBVyxFQUFFLHFCQUFDaUUsTUFBRDtBQUFBLDBCQUNYLHFFQUFDLG1EQUFELGtDQUNNQSxNQUROO0FBRUUsYUFBSyxFQUFFakIsS0FGVDtBQUdFLFlBQUksRUFBQyxNQUhQO0FBSUUsZUFBTyxFQUFDLFFBSlYsQ0FLRTs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQWxCZjtBQTJCRSxtQkFBZSxNQTNCakI7QUE0QkUsb0JBQWdCLEVBQUUvQixnQkE1QnBCLENBNkJFOztBQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpQ0QsQ0EvREQ7O0lBQU0yQixTOztNQUFBQSxTO0FBaUVTLGtGQUFBc0Isa0RBQUksQ0FBQ3RCLFNBQUQsQ0FBbkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9ybXMuOWQ3YzA4MjA5N2YyOGQ1ZmU0ZDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIG1lbW8sIENoYW5nZUV2ZW50SGFuZGxlciwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRvY29tcGxldGUsIHsgQXV0b2NvbXBsZXRlUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnO1xyXG5pbXBvcnQgeyBJbnB1dEJhc2VDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFZhcmlhYmxlU2l6ZUxpc3QgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xyXG5pbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMtMic7XHJcbi8vIGltcG9ydCB7IFN0eWxlc1Byb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vVGV4dElucHV0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWxlY3QubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFNlbGVjdGlvbjxUID0gc3RyaW5nIHwgbnVtYmVyPiB7XHJcbiAgdmFsdWU/OiBUO1xyXG4gIG9wdGlvbnM6IFRbXTtcclxuICBnZXRPcHRpb25MYWJlbDogKHZhbHVlOiBUKSA9PiBUO1xyXG4gIG9uQ2hhbmdlPzogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuLy8gY29uc3QgTGlzdENvbXBvbmVudCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuLy8gICBjb25zdCB7IGNoaWxkcmVuLCAuLi5jb21Qcm9wcyB9ID0gcHJvcHM7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8U2Nyb2xsYmFyc1xyXG4vLyAgICAgICB7Li4uY29tUHJvcHN9XHJcbi8vICAgICAgIHJlZj17KG5vZGUpID0+IHJlZihub2RlPy5jb250YWluZXIpfVxyXG4vLyAgICAgICBhdXRvSGVpZ2h0XHJcbi8vICAgICAgIGF1dG9IZWlnaHRNaW49ezB9XHJcbi8vICAgICAgIC8vIGF1dG9IZWlnaHRNYXg9ezAwfVxyXG4vLyAgICAgPlxyXG4vLyAgICAgICB7Y2hpbGRyZW59XHJcbi8vICAgICA8L1Njcm9sbGJhcnM+XHJcbi8vICAgKTtcclxuLy8gfSk7XHJcblxyXG4vLyBMaXN0Q29tcG9uZW50LmRpc3BsYXlOYW1lID0gJ0xpc3RDb21wb25lbnQnO1xyXG4vLyBjb25zdCBNZW1vTGlzdENvbXBvbmVudCA9IG1lbW8oTGlzdENvbXBvbmVudCk7XHJcblxyXG5jb25zdCBMSVNUQk9YX1BBRERJTkcgPSA4OyAvLyBweFxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBpbmRleCwgc3R5bGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoZGF0YVtpbmRleF0sIHtcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgIC4uLnN0eWxlLFxyXG4gICAgICB0b3A6IHN0eWxlLnRvcCArIExJU1RCT1hfUEFERElORyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IE91dGVyRWxlbWVudENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IE91dGVyRWxlbWVudFR5cGUgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgY29uc3Qgb3V0ZXJQcm9wcyA9IFJlYWN0LnVzZUNvbnRleHQoT3V0ZXJFbGVtZW50Q29udGV4dCk7XHJcbiAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IHsuLi5wcm9wc30gey4uLm91dGVyUHJvcHN9IC8+O1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHVzZVJlc2V0Q2FjaGUoZGF0YSkge1xyXG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50ICE9IG51bGwpIHtcclxuICAgICAgcmVmLmN1cnJlbnQucmVzZXRBZnRlckluZGV4KDAsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSk7XHJcbiAgcmV0dXJuIHJlZjtcclxufVxyXG5cclxuLy8gQWRhcHRlciBmb3IgcmVhY3Qtd2luZG93XHJcbmNvbnN0IExpc3Rib3hDb21wb25lbnQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIExpc3Rib3hDb21wb25lbnQocHJvcHMsIHJlZikge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLm90aGVyIH0gPSBwcm9wcztcclxuICBjb25zdCBpdGVtRGF0YSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBzbVVwID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSwgeyBub1NzcjogdHJ1ZSB9KTtcclxuICBjb25zdCBpdGVtQ291bnQgPSBpdGVtRGF0YS5sZW5ndGg7XHJcbiAgY29uc3QgaXRlbVNpemUgPSBzbVVwID8gMzYgOiA0ODtcclxuXHJcbiAgY29uc3QgZ2V0Q2hpbGRTaXplID0gKGNoaWxkKSA9PiB7XHJcbiAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpICYmIGNoaWxkLnR5cGUgPT09IExpc3RTdWJoZWFkZXIpIHtcclxuICAgICAgcmV0dXJuIDQ4O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpdGVtU2l6ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRIZWlnaHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXRlbUNvdW50ID4gOCkge1xyXG4gICAgICByZXR1cm4gOCAqIGl0ZW1TaXplO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW1EYXRhLm1hcChnZXRDaGlsZFNpemUpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdyaWRSZWYgPSB1c2VSZXNldENhY2hlKGl0ZW1Db3VudCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2Nyb2xsYmFycyBhdXRvSGVpZ2h0PlxyXG4gICAgICA8ZGl2IHJlZj17cmVmfT5cclxuICAgICAgICA8T3V0ZXJFbGVtZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17b3RoZXJ9PlxyXG4gICAgICAgICAgPFZhcmlhYmxlU2l6ZUxpc3RcclxuICAgICAgICAgICAgaXRlbURhdGE9e2l0ZW1EYXRhfVxyXG4gICAgICAgICAgICBoZWlnaHQ9e2dldEhlaWdodCgpICsgMiAqIExJU1RCT1hfUEFERElOR31cclxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgcmVmPXtncmlkUmVmfVxyXG4gICAgICAgICAgICBvdXRlckVsZW1lbnRUeXBlPXtPdXRlckVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgICBpbm5lckVsZW1lbnRUeXBlPVwidWxcIlxyXG4gICAgICAgICAgICBpdGVtU2l6ZT17KGluZGV4KSA9PiBnZXRDaGlsZFNpemUoaXRlbURhdGFbaW5kZXhdKX1cclxuICAgICAgICAgICAgb3ZlcnNjYW5Db3VudD17NX1cclxuICAgICAgICAgICAgaXRlbUNvdW50PXtpdGVtQ291bnR9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtyZW5kZXJSb3d9XHJcbiAgICAgICAgICA8L1ZhcmlhYmxlU2l6ZUxpc3Q+XHJcbiAgICAgICAgPC9PdXRlckVsZW1lbnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvU2Nyb2xsYmFycz5cclxuICApO1xyXG59KTtcclxuXHJcbmNvbnN0IFNlbGVjdGlvbjogRkM8XHJcbiAgT21pdDxBdXRvY29tcGxldGVQcm9wczxzdHJpbmcgfCBudW1iZXIsIHRydWUsIGZhbHNlLCBmYWxzZT4sICdyZW5kZXJJbnB1dCc+ICZcclxuICAgIElucHV0QmFzZUNvbXBvbmVudFByb3BzXHJcbj4gPSAoeyB2YWx1ZSwgb25DaGFuZ2UsIGdldE9wdGlvbkxhYmVsLCBsYWJlbCwgb3B0aW9ucywgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPChzdHJpbmcgfCBudW1iZXIpW10+KCk7XHJcblxyXG4gIGNvbnN0IG9uTG9jYWxDaGFuZ2U6IEF1dG9jb21wbGV0ZVByb3BzPHN0cmluZyB8IG51bWJlciwgdHJ1ZSwgZmFsc2UsIGZhbHNlPlsnb25DaGFuZ2UnXSA9IChcclxuICAgIF9lLFxyXG4gICAgdlxyXG4gICkgPT4ge1xyXG4gICAgc2V0TG9jYWxWYWx1ZSh2KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb250cm9sbGVkT25DaGFuZ2U6IEF1dG9jb21wbGV0ZVByb3BzPHN0cmluZyB8IG51bWJlciwgdHJ1ZSwgZmFsc2UsIGZhbHNlPlsnb25DaGFuZ2UnXSA9XHJcbiAgICB1c2VDYWxsYmFjayhcclxuICAgICAgKF9lLCB2KSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2UgJiZcclxuICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICAgICAgdmFsdWU6IHYsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgW29uQ2hhbmdlXVxyXG4gICAgKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZSA9IG9uQ2hhbmdlID8gY29udHJvbGxlZE9uQ2hhbmdlIDogb25Mb2NhbENoYW5nZTtcclxuICBjb25zdCB2YWx1ZVRvVXNlID0gb25DaGFuZ2UgPyB2YWx1ZSA6IGxvY2FsVmFsdWU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdH1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICBpZD1cInRhZ3MtZmlsbGVkXCJcclxuICAgICAgdmFsdWU9e3ZhbHVlVG9Vc2V9XHJcbiAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgIC8vIGdldE9wdGlvbkxhYmVsPXtnZXRPcHRpb25MYWJlbH1cclxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVG9Vc2V9XHJcbiAgICAgIHJlbmRlclRhZ3M9eyh2YWx1ZSwgZ2V0VGFnUHJvcHMpID0+XHJcbiAgICAgICAgdmFsdWUubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q2hpcFxyXG4gICAgICAgICAgICBrZXk9e2BvcHRpb24tJHtpbmRleH1gfVxyXG4gICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICBsYWJlbD17Z2V0T3B0aW9uTGFiZWwgJiYgZ2V0T3B0aW9uTGFiZWwob3B0aW9uKX1cclxuICAgICAgICAgICAgey4uLmdldFRhZ1Byb3BzKHsgaW5kZXggfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgICAgcmVuZGVySW5wdXQ9eyhwYXJhbXMpID0+IChcclxuICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICB7Li4ucGFyYW1zfVxyXG4gICAgICAgICAgbGFiZWw9e2xhYmVsfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAvLyBzaXplPVwic21hbGxcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIGRpc2FibGVMaXN0V3JhcFxyXG4gICAgICBMaXN0Ym94Q29tcG9uZW50PXtMaXN0Ym94Q29tcG9uZW50fVxyXG4gICAgICAvLyBMaXN0Ym94Q29tcG9uZW50PXtNZW1vTGlzdENvbXBvbmVudCBhcyBhbnl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKFNlbGVjdGlvbik7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=