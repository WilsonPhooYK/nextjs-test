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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    ref: ref,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_10__["Scrollbars"], {
      autoHeight: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiTElTVEJPWF9QQURESU5HIiwicmVuZGVyUm93IiwicHJvcHMiLCJkYXRhIiwiaW5kZXgiLCJzdHlsZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwidG9wIiwiT3V0ZXJFbGVtZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJPdXRlckVsZW1lbnRUeXBlIiwiZm9yd2FyZFJlZiIsInJlZiIsIm91dGVyUHJvcHMiLCJ1c2VDb250ZXh0IiwidXNlUmVzZXRDYWNoZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJyZXNldEFmdGVySW5kZXgiLCJMaXN0Ym94Q29tcG9uZW50IiwiY2hpbGRyZW4iLCJvdGhlciIsIml0ZW1EYXRhIiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwidGhlbWUiLCJ1c2VUaGVtZSIsInNtVXAiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJ1cCIsIm5vU3NyIiwiaXRlbUNvdW50IiwibGVuZ3RoIiwiaXRlbVNpemUiLCJnZXRDaGlsZFNpemUiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwidHlwZSIsIkxpc3RTdWJoZWFkZXIiLCJnZXRIZWlnaHQiLCJtYXAiLCJyZWR1Y2UiLCJhIiwiYiIsImdyaWRSZWYiLCJTZWxlY3Rpb24iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZ2V0T3B0aW9uTGFiZWwiLCJsYWJlbCIsIm9wdGlvbnMiLCJ1c2VTdGF0ZSIsImxvY2FsVmFsdWUiLCJzZXRMb2NhbFZhbHVlIiwib25Mb2NhbENoYW5nZSIsIl9lIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJzdHlsZXMiLCJzZWxlY3QiLCJnZXRUYWdQcm9wcyIsIm9wdGlvbiIsInBhcmFtcyIsIm1lbW8iXSwibWFwcGluZ3Mi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VSxFQUFFLG9CQUFDZCxLQUFELEVBQVFrQixXQUFSO0FBQUEsYUFDVmxCLEtBQUssQ0FBQ04sR0FBTixDQUFVLFVBQUN5QixNQUFELEVBQVNoRSxLQUFUO0FBQUEsNEJBQ1IscUVBQUMsOERBQUQ7QUFFRSxpQkFBTyxFQUFDLFVBRlY7QUFHRSxlQUFLLEVBQUUrQyxjQUFjLElBQUlBLGNBQWMsQ0FBQ2lCLE1BQUQ7QUFIekMsV0FJTUQsV0FBVyxDQUFDO0FBQUUvRCxlQUFLLEVBQUxBO0FBQUYsU0FBRCxDQUpqQixvQkFDaUJBLEtBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFWLENBRFU7QUFBQSxLQVJkO0FBa0JFLGVBQVcsRUFBRSxxQkFBQ2lFLE1BQUQ7QUFBQSwwQkFDWCxxRUFBQyxtREFBRCxrQ0FDTUEsTUFETjtBQUVFLGFBQUssRUFBRWpCLEtBRlQ7QUFHRSxZQUFJLEVBQUMsTUFIUDtBQUlFLGVBQU8sRUFBQyxRQUpWLENBS0U7O0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURXO0FBQUEsS0FsQmY7QUEyQkUsbUJBQWUsTUEzQmpCO0FBNEJFLG9CQUFnQixFQUFFL0IsZ0JBNUJwQixDQTZCRTs7QUE3QkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBaUNELENBL0REOztJQUFNMkIsUzs7TUFBQUEsUztBQWlFUyxrRkFBQXNCLGtEQUFJLENBQUN0QixTQUFELENBQW5CIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Zvcm1zLmNiMjA1M2NkYTVhOWY5NzJlODQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMsIHVzZVN0YXRlLCBtZW1vLCBDaGFuZ2VFdmVudEhhbmRsZXIsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlLCB7IEF1dG9jb21wbGV0ZVByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJztcclxuaW1wb3J0IHsgSW5wdXRCYXNlQ29tcG9uZW50UHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB1c2VNZWRpYVF1ZXJ5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3VzZU1lZGlhUXVlcnknO1xyXG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJztcclxuaW1wb3J0IHsgdXNlVGhlbWUsIG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgeyBWYXJpYWJsZVNpemVMaXN0IH0gZnJvbSAncmVhY3Qtd2luZG93JztcclxuaW1wb3J0IHsgU2Nyb2xsYmFycyB9IGZyb20gJ3JlYWN0LWN1c3RvbS1zY3JvbGxiYXJzLTInO1xyXG4vLyBpbXBvcnQgeyBTdHlsZXNQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJy4uL1RleHRJbnB1dCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VsZWN0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBTZWxlY3Rpb248VCA9IHN0cmluZyB8IG51bWJlcj4ge1xyXG4gIHZhbHVlPzogVDtcclxuICBvcHRpb25zOiBUW107XHJcbiAgZ2V0T3B0aW9uTGFiZWw6ICh2YWx1ZTogVCkgPT4gVDtcclxuICBvbkNoYW5nZT86IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIGNvbnN0IExpc3RDb21wb25lbnQgPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbi8vICAgY29uc3QgeyBjaGlsZHJlbiwgLi4uY29tUHJvcHMgfSA9IHByb3BzO1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPFNjcm9sbGJhcnNcclxuLy8gICAgICAgey4uLmNvbVByb3BzfVxyXG4vLyAgICAgICByZWY9eyhub2RlKSA9PiByZWYobm9kZT8uY29udGFpbmVyKX1cclxuLy8gICAgICAgYXV0b0hlaWdodFxyXG4vLyAgICAgICBhdXRvSGVpZ2h0TWluPXswfVxyXG4vLyAgICAgICAvLyBhdXRvSGVpZ2h0TWF4PXswMH1cclxuLy8gICAgID5cclxuLy8gICAgICAge2NoaWxkcmVufVxyXG4vLyAgICAgPC9TY3JvbGxiYXJzPlxyXG4vLyAgICk7XHJcbi8vIH0pO1xyXG5cclxuLy8gTGlzdENvbXBvbmVudC5kaXNwbGF5TmFtZSA9ICdMaXN0Q29tcG9uZW50JztcclxuLy8gY29uc3QgTWVtb0xpc3RDb21wb25lbnQgPSBtZW1vKExpc3RDb21wb25lbnQpO1xyXG5cclxuY29uc3QgTElTVEJPWF9QQURESU5HID0gODsgLy8gcHhcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclJvdyhwcm9wcykge1xyXG4gIGNvbnN0IHsgZGF0YSwgaW5kZXgsIHN0eWxlIH0gPSBwcm9wcztcclxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGRhdGFbaW5kZXhdLCB7XHJcbiAgICBzdHlsZToge1xyXG4gICAgICAuLi5zdHlsZSxcclxuICAgICAgdG9wOiBzdHlsZS50b3AgKyBMSVNUQk9YX1BBRERJTkcsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBPdXRlckVsZW1lbnRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5jb25zdCBPdXRlckVsZW1lbnRUeXBlID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gIGNvbnN0IG91dGVyUHJvcHMgPSBSZWFjdC51c2VDb250ZXh0KE91dGVyRWxlbWVudENvbnRleHQpO1xyXG4gIHJldHVybiA8ZGl2IHJlZj17cmVmfSB7Li4ucHJvcHN9IHsuLi5vdXRlclByb3BzfSAvPjtcclxufSk7XHJcblxyXG5mdW5jdGlvbiB1c2VSZXNldENhY2hlKGRhdGEpIHtcclxuICBjb25zdCByZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChyZWYuY3VycmVudCAhPSBudWxsKSB7XHJcbiAgICAgIHJlZi5jdXJyZW50LnJlc2V0QWZ0ZXJJbmRleCgwLCB0cnVlKTtcclxuICAgIH1cclxuICB9LCBbZGF0YV0pO1xyXG4gIHJldHVybiByZWY7XHJcbn1cclxuXHJcbi8vIEFkYXB0ZXIgZm9yIHJlYWN0LXdpbmRvd1xyXG5jb25zdCBMaXN0Ym94Q29tcG9uZW50ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBMaXN0Ym94Q29tcG9uZW50KHByb3BzLCByZWYpIHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcbiAgY29uc3QgaXRlbURhdGEgPSBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcbiAgY29uc3Qgc21VcCA9IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyksIHsgbm9Tc3I6IHRydWUgfSk7XHJcbiAgY29uc3QgaXRlbUNvdW50ID0gaXRlbURhdGEubGVuZ3RoO1xyXG4gIGNvbnN0IGl0ZW1TaXplID0gc21VcCA/IDM2IDogNDg7XHJcblxyXG4gIGNvbnN0IGdldENoaWxkU2l6ZSA9IChjaGlsZCkgPT4ge1xyXG4gICAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSAmJiBjaGlsZC50eXBlID09PSBMaXN0U3ViaGVhZGVyKSB7XHJcbiAgICAgIHJldHVybiA0ODtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXRlbVNpemU7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0SGVpZ2h0ID0gKCkgPT4ge1xyXG4gICAgaWYgKGl0ZW1Db3VudCA+IDgpIHtcclxuICAgICAgcmV0dXJuIDggKiBpdGVtU2l6ZTtcclxuICAgIH1cclxuICAgIHJldHVybiBpdGVtRGF0YS5tYXAoZ2V0Q2hpbGRTaXplKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBncmlkUmVmID0gdXNlUmVzZXRDYWNoZShpdGVtQ291bnQpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3JlZn0+XHJcbiAgICAgIDxTY3JvbGxiYXJzIGF1dG9IZWlnaHQ+XHJcbiAgICAgICAgPE91dGVyRWxlbWVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e290aGVyfT5cclxuICAgICAgICAgIDxWYXJpYWJsZVNpemVMaXN0XHJcbiAgICAgICAgICAgIGl0ZW1EYXRhPXtpdGVtRGF0YX1cclxuICAgICAgICAgICAgaGVpZ2h0PXtnZXRIZWlnaHQoKSArIDIgKiBMSVNUQk9YX1BBRERJTkd9XHJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgIHJlZj17Z3JpZFJlZn1cclxuICAgICAgICAgICAgb3V0ZXJFbGVtZW50VHlwZT17T3V0ZXJFbGVtZW50VHlwZX1cclxuICAgICAgICAgICAgaW5uZXJFbGVtZW50VHlwZT1cInVsXCJcclxuICAgICAgICAgICAgaXRlbVNpemU9eyhpbmRleCkgPT4gZ2V0Q2hpbGRTaXplKGl0ZW1EYXRhW2luZGV4XSl9XHJcbiAgICAgICAgICAgIG92ZXJzY2FuQ291bnQ9ezV9XHJcbiAgICAgICAgICAgIGl0ZW1Db3VudD17aXRlbUNvdW50fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cmVuZGVyUm93fVxyXG4gICAgICAgICAgPC9WYXJpYWJsZVNpemVMaXN0PlxyXG4gICAgICAgIDwvT3V0ZXJFbGVtZW50Q29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgPC9TY3JvbGxiYXJzPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5jb25zdCBTZWxlY3Rpb246IEZDPFxyXG4gIE9taXQ8QXV0b2NvbXBsZXRlUHJvcHM8c3RyaW5nIHwgbnVtYmVyLCB0cnVlLCBmYWxzZSwgZmFsc2U+LCAncmVuZGVySW5wdXQnPiAmXHJcbiAgICBJbnB1dEJhc2VDb21wb25lbnRQcm9wc1xyXG4+ID0gKHsgdmFsdWUsIG9uQ2hhbmdlLCBnZXRPcHRpb25MYWJlbCwgbGFiZWwsIG9wdGlvbnMsIC4uLnByb3BzIH0pID0+IHtcclxuICBjb25zdCBbbG9jYWxWYWx1ZSwgc2V0TG9jYWxWYWx1ZV0gPSB1c2VTdGF0ZTwoc3RyaW5nIHwgbnVtYmVyKVtdPigpO1xyXG5cclxuICBjb25zdCBvbkxvY2FsQ2hhbmdlOiBBdXRvY29tcGxldGVQcm9wczxzdHJpbmcgfCBudW1iZXIsIHRydWUsIGZhbHNlLCBmYWxzZT5bJ29uQ2hhbmdlJ10gPSAoXHJcbiAgICBfZSxcclxuICAgIHZcclxuICApID0+IHtcclxuICAgIHNldExvY2FsVmFsdWUodik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udHJvbGxlZE9uQ2hhbmdlOiBBdXRvY29tcGxldGVQcm9wczxzdHJpbmcgfCBudW1iZXIsIHRydWUsIGZhbHNlLCBmYWxzZT5bJ29uQ2hhbmdlJ10gPVxyXG4gICAgdXNlQ2FsbGJhY2soXHJcbiAgICAgIChfZSwgdikgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlICYmXHJcbiAgICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBFaXRoZXIgc3RyaW5nIG9yIG51bWJlclxyXG4gICAgICAgICAgICAgIHZhbHVlOiB2LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIFtvbkNoYW5nZV1cclxuICAgICk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVG9Vc2UgPSBvbkNoYW5nZSA/IGNvbnRyb2xsZWRPbkNoYW5nZSA6IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IG9uQ2hhbmdlID8gdmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3R9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgaWQ9XCJ0YWdzLWZpbGxlZFwiXHJcbiAgICAgIHZhbHVlPXt2YWx1ZVRvVXNlfVxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICAvLyBnZXRPcHRpb25MYWJlbD17Z2V0T3B0aW9uTGFiZWx9XHJcbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRvVXNlfVxyXG4gICAgICByZW5kZXJUYWdzPXsodmFsdWUsIGdldFRhZ1Byb3BzKSA9PlxyXG4gICAgICAgIHZhbHVlLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAga2V5PXtgb3B0aW9uLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbGFiZWw9e2dldE9wdGlvbkxhYmVsICYmIGdldE9wdGlvbkxhYmVsKG9wdGlvbil9XHJcbiAgICAgICAgICAgIHsuLi5nZXRUYWdQcm9wcyh7IGluZGV4IH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgLy8gc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICBkaXNhYmxlTGlzdFdyYXBcclxuICAgICAgTGlzdGJveENvbXBvbmVudD17TGlzdGJveENvbXBvbmVudH1cclxuICAgICAgLy8gTGlzdGJveENvbXBvbmVudD17TWVtb0xpc3RDb21wb25lbnQgYXMgYW55fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTZWxlY3Rpb24pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9