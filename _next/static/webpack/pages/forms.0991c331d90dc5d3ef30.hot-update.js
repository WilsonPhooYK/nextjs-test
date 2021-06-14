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

var ListboxComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(_c3 = _s3(function ListboxComponent(props, _ref) {
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(OuterElementContext.Provider, {
      value: other,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_custom_scrollbars_2__WEBPACK_IMPORTED_MODULE_10__["Scrollbars"], {
        ref: function ref(node) {
          return _ref(node === null || node === void 0 ? void 0 : node.container);
        },
        autoHeight: true,
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

var Selection = function Selection(_ref2) {
  _s4();

  var value = _ref2.value,
      onChange = _ref2.onChange,
      getOptionLabel = _ref2.getOptionLabel,
      label = _ref2.label,
      options = _ref2.options,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["value", "onChange", "getOptionLabel", "label", "options"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1NlbGVjdC50c3giXSwibmFtZXMiOlsiTElTVEJPWF9QQURESU5HIiwicmVuZGVyUm93IiwicHJvcHMiLCJkYXRhIiwiaW5kZXgiLCJzdHlsZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwidG9wIiwiT3V0ZXJFbGVtZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJPdXRlckVsZW1lbnRUeXBlIiwiZm9yd2FyZFJlZiIsInJlZiIsIm91dGVyUHJvcHMiLCJ1c2VDb250ZXh0IiwidXNlUmVzZXRDYWNoZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJyZXNldEFmdGVySW5kZXgiLCJMaXN0Ym94Q29tcG9uZW50IiwiY2hpbGRyZW4iLCJvdGhlciIsIml0ZW1EYXRhIiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwidGhlbWUiLCJ1c2VUaGVtZSIsInNtVXAiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJ1cCIsIm5vU3NyIiwiaXRlbUNvdW50IiwibGVuZ3RoIiwiaXRlbVNpemUiLCJnZXRDaGlsZFNpemUiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwidHlwZSIsIkxpc3RTdWJoZWFkZXIiLCJnZXRIZWlnaHQiLCJtYXAiLCJyZWR1Y2UiLCJhIiwiYiIsImdyaWRSZWYiLCJub2RlIiwiY29udGFpbmVyIiwiU2VsZWN0aW9uIiwidmFsdWUiLCJvbkNoYW5nZSIsImdldE9wdGlvbkxhYmVsIiwibGFiZWwiLCJvcHRpb25zIiwidXNlU3RhdGUiLCJsb2NhbFZhbHVlIiwic2V0TG9jYWxWYWx1ZSIsIm9uTG9jYWxDaGFuZ2UiLCJfZSIsInYiLCJjb250cm9sbGVkT25DaGFuZ2UiLCJ1c2VDYWxsYmFjayIsInRhcmdldCIsIm9uQ2hhbmdlVG9Vc2UiLCJ2YWx1ZVRvVXNlIiwic3R5bGVzIiwic2VsZWN0IiwiZ2V0VGFnUHJvcHMiLCJvcHRpb24iLCJwYXJhbXMi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QUZOO0FBR0UsTUFBRSxFQUFDLGFBSEw7QUFJRSxTQUFLLEVBQUVnRSxVQUpUO0FBS0UsV0FBTyxFQUFFWCxPQUxYLENBTUU7QUFORjtBQU9FLFlBQVEsRUFBRVUsYUFQWjtBQVFFLGNBQVUsRUFBRSxvQkFBQ2QsS0FBRCxFQUFRa0IsV0FBUjtBQUFBLGFBQ1ZsQixLQUFLLENBQUNSLEdBQU4sQ0FBVSxVQUFDMkIsTUFBRCxFQUFTbEUsS0FBVDtBQUFBLDRCQUNSLHFFQUFDLDhEQUFEO0FBRUUsaUJBQU8sRUFBQyxVQUZWO0FBR0UsZUFBSyxFQUFFaUQsY0FBYyxJQUFJQSxjQUFjLENBQUNpQixNQUFEO0FBSHpDLFdBSU1ELFdBQVcsQ0FBQztBQUFFakUsZUFBSyxFQUFMQTtBQUFGLFNBQUQsQ0FKakIsb0JBQ2lCQSxLQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURRO0FBQUEsT0FBVixDQURVO0FBQUEsS0FSZDtBQWtCRSxlQUFXLEVBQUUscUJBQUNtRSxNQUFEO0FBQUEsMEJBQ1gscUVBQUMsbURBQUQsa0NBQ01BLE1BRE47QUFFRSxhQUFLLEVBQUVqQixLQUZUO0FBR0UsWUFBSSxFQUFDLE1BSFA7QUFJRSxlQUFPLEVBQUMsUUFKVixDQUtFOztBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBbEJmO0FBMkJFLG1CQUFlLE1BM0JqQjtBQTRCRSxvQkFBZ0IsRUFBRWpDLGdCQTVCcEIsQ0E2QkU7O0FBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlDRCxDQS9ERDs7SUFBTTZCLFM7O01BQUFBLFM7QUFpRVMsa0ZBQUFzQixrREFBSSxDQUFDdEIsU0FBRCxDQUFuQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3Jtcy4wOTkxYzMzMWQ5MGRjNWQzZWYzMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDLCB1c2VTdGF0ZSwgbWVtbywgQ2hhbmdlRXZlbnRIYW5kbGVyLCB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF1dG9jb21wbGV0ZSwgeyBBdXRvY29tcGxldGVQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvQXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCc7XHJcbmltcG9ydCB7IElucHV0QmFzZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgdXNlTWVkaWFRdWVyeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91c2VNZWRpYVF1ZXJ5JztcclxuaW1wb3J0IExpc3RTdWJoZWFkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdFN1YmhlYWRlcic7XHJcbmltcG9ydCB7IHVzZVRoZW1lLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IHsgVmFyaWFibGVTaXplTGlzdCB9IGZyb20gJ3JlYWN0LXdpbmRvdyc7XHJcbmltcG9ydCB7IFNjcm9sbGJhcnMgfSBmcm9tICdyZWFjdC1jdXN0b20tc2Nyb2xsYmFycy0yJztcclxuLy8gaW1wb3J0IHsgU3R5bGVzUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLi9UZXh0SW5wdXQnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NlbGVjdC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgU2VsZWN0aW9uPFQgPSBzdHJpbmcgfCBudW1iZXI+IHtcclxuICB2YWx1ZT86IFQ7XHJcbiAgb3B0aW9uczogVFtdO1xyXG4gIGdldE9wdGlvbkxhYmVsOiAodmFsdWU6IFQpID0+IFQ7XHJcbiAgb25DaGFuZ2U/OiBDaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG4vLyBjb25zdCBMaXN0Q29tcG9uZW50ID0gZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4vLyAgIGNvbnN0IHsgY2hpbGRyZW4sIC4uLmNvbVByb3BzIH0gPSBwcm9wcztcclxuXHJcbi8vICAgcmV0dXJuIChcclxuLy8gICAgIDxTY3JvbGxiYXJzXHJcbi8vICAgICAgIHsuLi5jb21Qcm9wc31cclxuLy8gICAgICAgcmVmPXsobm9kZSkgPT4gcmVmKG5vZGU/LmNvbnRhaW5lcil9XHJcbi8vICAgICAgIGF1dG9IZWlnaHRcclxuLy8gICAgICAgYXV0b0hlaWdodE1pbj17MH1cclxuLy8gICAgICAgLy8gYXV0b0hlaWdodE1heD17MDB9XHJcbi8vICAgICA+XHJcbi8vICAgICAgIHtjaGlsZHJlbn1cclxuLy8gICAgIDwvU2Nyb2xsYmFycz5cclxuLy8gICApO1xyXG4vLyB9KTtcclxuXHJcbi8vIExpc3RDb21wb25lbnQuZGlzcGxheU5hbWUgPSAnTGlzdENvbXBvbmVudCc7XHJcbi8vIGNvbnN0IE1lbW9MaXN0Q29tcG9uZW50ID0gbWVtbyhMaXN0Q29tcG9uZW50KTtcclxuXHJcbmNvbnN0IExJU1RCT1hfUEFERElORyA9IDg7IC8vIHB4XHJcblxyXG5mdW5jdGlvbiByZW5kZXJSb3cocHJvcHMpIHtcclxuICBjb25zdCB7IGRhdGEsIGluZGV4LCBzdHlsZSB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChkYXRhW2luZGV4XSwge1xyXG4gICAgc3R5bGU6IHtcclxuICAgICAgLi4uc3R5bGUsXHJcbiAgICAgIHRvcDogc3R5bGUudG9wICsgTElTVEJPWF9QQURESU5HLFxyXG4gICAgfSxcclxuICB9KTtcclxufVxyXG5cclxuY29uc3QgT3V0ZXJFbGVtZW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuY29uc3QgT3V0ZXJFbGVtZW50VHlwZSA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuICBjb25zdCBvdXRlclByb3BzID0gUmVhY3QudXNlQ29udGV4dChPdXRlckVsZW1lbnRDb250ZXh0KTtcclxuICByZXR1cm4gPGRpdiByZWY9e3JlZn0gey4uLnByb3BzfSB7Li4ub3V0ZXJQcm9wc30gLz47XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gdXNlUmVzZXRDYWNoZShkYXRhKSB7XHJcbiAgY29uc3QgcmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocmVmLmN1cnJlbnQgIT0gbnVsbCkge1xyXG4gICAgICByZWYuY3VycmVudC5yZXNldEFmdGVySW5kZXgoMCwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKTtcclxuICByZXR1cm4gcmVmO1xyXG59XHJcblxyXG4vLyBBZGFwdGVyIGZvciByZWFjdC13aW5kb3dcclxuY29uc3QgTGlzdGJveENvbXBvbmVudCA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlzdGJveENvbXBvbmVudChwcm9wcywgcmVmKSB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGl0ZW1EYXRhID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IHNtVXAgPSB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpLCB7IG5vU3NyOiB0cnVlIH0pO1xyXG4gIGNvbnN0IGl0ZW1Db3VudCA9IGl0ZW1EYXRhLmxlbmd0aDtcclxuICBjb25zdCBpdGVtU2l6ZSA9IHNtVXAgPyAzNiA6IDQ4O1xyXG5cclxuICBjb25zdCBnZXRDaGlsZFNpemUgPSAoY2hpbGQpID0+IHtcclxuICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiYgY2hpbGQudHlwZSA9PT0gTGlzdFN1YmhlYWRlcikge1xyXG4gICAgICByZXR1cm4gNDg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1TaXplO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEhlaWdodCA9ICgpID0+IHtcclxuICAgIGlmIChpdGVtQ291bnQgPiA4KSB7XHJcbiAgICAgIHJldHVybiA4ICogaXRlbVNpemU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbURhdGEubWFwKGdldENoaWxkU2l6ZSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ3JpZFJlZiA9IHVzZVJlc2V0Q2FjaGUoaXRlbUNvdW50KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxPdXRlckVsZW1lbnRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtvdGhlcn0+XHJcbiAgICAgICAgPFNjcm9sbGJhcnMgcmVmPXsobm9kZSkgPT4gcmVmKG5vZGU/LmNvbnRhaW5lcil9IGF1dG9IZWlnaHQ+XHJcbiAgICAgICAgICA8VmFyaWFibGVTaXplTGlzdFxyXG4gICAgICAgICAgICBpdGVtRGF0YT17aXRlbURhdGF9XHJcbiAgICAgICAgICAgIGhlaWdodD17Z2V0SGVpZ2h0KCkgKyAyICogTElTVEJPWF9QQURESU5HfVxyXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICByZWY9e2dyaWRSZWZ9XHJcbiAgICAgICAgICAgIG91dGVyRWxlbWVudFR5cGU9e091dGVyRWxlbWVudFR5cGV9XHJcbiAgICAgICAgICAgIGlubmVyRWxlbWVudFR5cGU9XCJ1bFwiXHJcbiAgICAgICAgICAgIGl0ZW1TaXplPXsoaW5kZXgpID0+IGdldENoaWxkU2l6ZShpdGVtRGF0YVtpbmRleF0pfVxyXG4gICAgICAgICAgICBvdmVyc2NhbkNvdW50PXs1fVxyXG4gICAgICAgICAgICBpdGVtQ291bnQ9e2l0ZW1Db3VudH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3JlbmRlclJvd31cclxuICAgICAgICAgIDwvVmFyaWFibGVTaXplTGlzdD5cclxuICAgICAgICA8L1Njcm9sbGJhcnM+XHJcbiAgICAgIDwvT3V0ZXJFbGVtZW50Q29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuY29uc3QgU2VsZWN0aW9uOiBGQzxcclxuICBPbWl0PEF1dG9jb21wbGV0ZVByb3BzPHN0cmluZyB8IG51bWJlciwgdHJ1ZSwgZmFsc2UsIGZhbHNlPiwgJ3JlbmRlcklucHV0Jz4gJlxyXG4gICAgSW5wdXRCYXNlQ29tcG9uZW50UHJvcHNcclxuPiA9ICh7IHZhbHVlLCBvbkNoYW5nZSwgZ2V0T3B0aW9uTGFiZWwsIGxhYmVsLCBvcHRpb25zLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgY29uc3QgW2xvY2FsVmFsdWUsIHNldExvY2FsVmFsdWVdID0gdXNlU3RhdGU8KHN0cmluZyB8IG51bWJlcilbXT4oKTtcclxuXHJcbiAgY29uc3Qgb25Mb2NhbENoYW5nZTogQXV0b2NvbXBsZXRlUHJvcHM8c3RyaW5nIHwgbnVtYmVyLCB0cnVlLCBmYWxzZSwgZmFsc2U+WydvbkNoYW5nZSddID0gKFxyXG4gICAgX2UsXHJcbiAgICB2XHJcbiAgKSA9PiB7XHJcbiAgICBzZXRMb2NhbFZhbHVlKHYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZWRPbkNoYW5nZTogQXV0b2NvbXBsZXRlUHJvcHM8c3RyaW5nIHwgbnVtYmVyLCB0cnVlLCBmYWxzZSwgZmFsc2U+WydvbkNoYW5nZSddID1cclxuICAgIHVzZUNhbGxiYWNrKFxyXG4gICAgICAoX2UsIHYpID0+IHtcclxuICAgICAgICBvbkNoYW5nZSAmJlxyXG4gICAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgICAgICB2YWx1ZTogdixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBbb25DaGFuZ2VdXHJcbiAgICApO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRvVXNlID0gb25DaGFuZ2UgPyBjb250cm9sbGVkT25DaGFuZ2UgOiBvbkxvY2FsQ2hhbmdlO1xyXG4gIGNvbnN0IHZhbHVlVG9Vc2UgPSBvbkNoYW5nZSA/IHZhbHVlIDogbG9jYWxWYWx1ZTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRvY29tcGxldGVcclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0fVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIGlkPVwidGFncy1maWxsZWRcIlxyXG4gICAgICB2YWx1ZT17dmFsdWVUb1VzZX1cclxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgICAgLy8gZ2V0T3B0aW9uTGFiZWw9e2dldE9wdGlvbkxhYmVsfVxyXG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2VUb1VzZX1cclxuICAgICAgcmVuZGVyVGFncz17KHZhbHVlLCBnZXRUYWdQcm9wcykgPT5cclxuICAgICAgICB2YWx1ZS5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxDaGlwXHJcbiAgICAgICAgICAgIGtleT17YG9wdGlvbi0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgIGxhYmVsPXtnZXRPcHRpb25MYWJlbCAmJiBnZXRPcHRpb25MYWJlbChvcHRpb24pfVxyXG4gICAgICAgICAgICB7Li4uZ2V0VGFnUHJvcHMoeyBpbmRleCB9KX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG4gICAgICByZW5kZXJJbnB1dD17KHBhcmFtcykgPT4gKFxyXG4gICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgIHsuLi5wYXJhbXN9XHJcbiAgICAgICAgICBsYWJlbD17bGFiZWx9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgIC8vIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAgZGlzYWJsZUxpc3RXcmFwXHJcbiAgICAgIExpc3Rib3hDb21wb25lbnQ9e0xpc3Rib3hDb21wb25lbnR9XHJcbiAgICAgIC8vIExpc3Rib3hDb21wb25lbnQ9e01lbW9MaXN0Q29tcG9uZW50IGFzIGFueX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oU2VsZWN0aW9uKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==