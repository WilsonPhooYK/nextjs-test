webpackHotUpdate_N_E("pages/forms",{

/***/ "./src/components/Forms/FieldGenerator/FieldGenerator.tsx":
/*!****************************************************************!*\
  !*** ./src/components/Forms/FieldGenerator/FieldGenerator.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var appRedux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! appRedux */ "./src/appRedux/index.ts");
/* harmony import */ var appRedux_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! appRedux/forms */ "./src/appRedux/forms/index.ts");
/* harmony import */ var components_Forms_FieldWrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Forms/FieldWrapper */ "./src/components/Forms/FieldWrapper/index.tsx");




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\FieldGenerator\\FieldGenerator.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var TextInput = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../TextInput */ "./src/components/Forms/TextInput/index.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../TextInput */ "./src/components/Forms/TextInput/index.tsx")];
    },
    modules: ["..\\components\\Forms\\FieldGenerator\\FieldGenerator.tsx -> " + '../TextInput']
  }
});
_c2 = TextInput;
var Select = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../Select */ "./src/components/Forms/Select/index.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../Select */ "./src/components/Forms/Select/index.tsx")];
    },
    modules: ["..\\components\\Forms\\FieldGenerator\\FieldGenerator.tsx -> " + '../Select']
  }
});
_c4 = Select;
var ButtonGroup = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c5 = function _c5() {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../ButtonGroup */ "./src/components/Forms/ButtonGroup/index.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../ButtonGroup */ "./src/components/Forms/ButtonGroup/index.tsx")];
    },
    modules: ["..\\components\\Forms\\FieldGenerator\\FieldGenerator.tsx -> " + '../ButtonGroup']
  }
});
_c6 = ButtonGroup;
var Date = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c7 = function _c7() {
  return __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.bind(null, /*! ../Date */ "./src/components/Forms/Date/index.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../Date */ "./src/components/Forms/Date/index.tsx")];
    },
    modules: ["..\\components\\Forms\\FieldGenerator\\FieldGenerator.tsx -> " + '../Date']
  }
});
_c8 = Date;
var FieldTypeMap = {
  text: TextInput,
  number: TextInput,
  currency: TextInput,
  textarea: TextInput,
  password: TextInput,
  tel: TextInput,
  email: TextInput,
  select: Select,
  multi_select: Select,
  radio: ButtonGroup,
  date: Date
};

var FieldGeneratorDefault = function FieldGeneratorDefault(props) {
  var _props$options;

  var type = props.type === 'select' && props.options && ((_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.length) <= 3 ? 'radio' : props.type;
  var DynamicField = FieldTypeMap[type];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(DynamicField, _objectSpread(_objectSpread({}, props), {}, {
    type: type
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 10
  }, _this);
};

_c9 = FieldGeneratorDefault;

var FieldGeneratorRedux = function FieldGeneratorRedux(_ref) {
  _s();

  var _props$options2;

  var _ref$formName = _ref.formName,
      formName = _ref$formName === void 0 ? '' : _ref$formName,
      _ref$additionalNames = _ref.additionalNames,
      additionalNames = _ref$additionalNames === void 0 ? [] : _ref$additionalNames,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["formName", "additionalNames"]);

  var name = props.name;
  var dispatch = Object(appRedux__WEBPACK_IMPORTED_MODULE_6__["useAppDispatch"])();
  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (event) {
    if (formName) {
      dispatch(appRedux_forms__WEBPACK_IMPORTED_MODULE_7__["formsActions"].onChangeValue({
        formName: formName,
        key: name,
        value: event.target.value,
        specialField: props
      }));
    }
  }, [dispatch, formName, name, props]);
  var value = Object(appRedux__WEBPACK_IMPORTED_MODULE_6__["useAppSelector"])(function (state) {
    var _state$forms$values$f;

    return (_state$forms$values$f = state.forms.values[formName]) === null || _state$forms$values$f === void 0 ? void 0 : _state$forms$values$f[name];
  });
  var error = Object(appRedux__WEBPACK_IMPORTED_MODULE_6__["useAppSelector"])(function (state) {
    var _state$forms$errors$f;

    return (_state$forms$errors$f = state.forms.errors[formName]) === null || _state$forms$errors$f === void 0 ? void 0 : _state$forms$errors$f[name];
  });
  var additionalValues = {};

  var _loop = function _loop(i) {
    // eslint-disable-next-line
    var additonalValue = Object(appRedux__WEBPACK_IMPORTED_MODULE_6__["useAppSelector"])(function (state) {
      return state.forms.values[formName][additionalNames[i]];
    });
    additionalValues[additionalNames[i]] = additonalValue;
  };

  for (var i = 0; i < additionalNames.length || 0; ++i) {
    _loop(i);
  }

  var type = props.type === 'select' && props.options && ((_props$options2 = props.options) === null || _props$options2 === void 0 ? void 0 : _props$options2.length) <= 3 ? 'radio' : props.type;
  var Field = FieldTypeMap[type];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Field, _objectSpread(_objectSpread({}, props), {}, {
    type: type,
    value: value,
    error: error,
    onChange: onChange,
    additionalValues: additionalValues,
    multiple: type === 'multi_select'
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, _this);
};

_s(FieldGeneratorRedux, "t5AClTKMn8qkWJn36xWccUH5teA=", false, function () {
  return [appRedux__WEBPACK_IMPORTED_MODULE_6__["useAppDispatch"], appRedux__WEBPACK_IMPORTED_MODULE_6__["useAppSelector"], appRedux__WEBPACK_IMPORTED_MODULE_6__["useAppSelector"], appRedux__WEBPACK_IMPORTED_MODULE_6__["useAppSelector"]];
});

_c10 = FieldGeneratorRedux;

var FieldGenerator = function FieldGenerator(props) {
  var gridSize = props.gridSize,
      formName = props.formName,
      useGrid = props.useGrid;
  var JSX = formName ? FieldGeneratorRedux : FieldGeneratorDefault;

  var WrappedJSX = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Forms_FieldWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({}, props), {}, {
    Component: JSX
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 22
  }, _this);

  if (useGrid) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_5__["default"], {
      item: true,
      xs: 12,
      md: gridSize || 12,
      style: {
        paddingBottom: 0
      },
      children: WrappedJSX
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this);
  }

  return WrappedJSX;
};

_c11 = FieldGenerator;
/* harmony default export */ __webpack_exports__["default"] = (_c12 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(FieldGenerator));

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12;

$RefreshReg$(_c, "TextInput$dynamic");
$RefreshReg$(_c2, "TextInput");
$RefreshReg$(_c3, "Select$dynamic");
$RefreshReg$(_c4, "Select");
$RefreshReg$(_c5, "ButtonGroup$dynamic");
$RefreshReg$(_c6, "ButtonGroup");
$RefreshReg$(_c7, "Date$dynamic");
$RefreshReg$(_c8, "Date");
$RefreshReg$(_c9, "FieldGeneratorDefault");
$RefreshReg$(_c10, "FieldGeneratorRedux");
$RefreshReg$(_c11, "FieldGenerator");
$RefreshReg$(_c12, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRmllbGRHZW5lcmF0b3IvRmllbGRHZW5lcmF0b3IudHN4Il0sIm5hbWVzIjpbIlRleHRJbnB1dCIsImR5bmFtaWMiLCJTZWxlY3QiLCJCdXR0b25Hcm91cCIsIkRhdGUiLCJGaWVsZFR5cGVNYXAiLCJ0ZXh0IiwibnVtYmVyIiwiY3VycmVuY3kiLCJ0ZXh0YXJlYSIsInBhc3N3b3JkIiwidGVsIiwiZW1haWwiLCJzZWxlY3QiLCJtdWx0aV9zZWxlY3QiLCJyYWRpbyIsImRhdGUiLCJGaWVsZEdlbmVyYXRvckRlZmF1bHQiLCJwcm9wcyIsInR5cGUiLCJvcHRpb25zIiwibGVuZ3RoIiwiRHluYW1pY0ZpZWxkIiwiRmllbGRHZW5lcmF0b3JSZWR1eCIsImZvcm1OYW1lIiwiYWRkaXRpb25hbE5hbWVzIiwibmFtZSIsImRpc3BhdGNoIiwidXNlQXBwRGlzcGF0Y2giLCJvbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJmb3Jtc0FjdGlvbnMiLCJvbkNoYW5nZVZhbHVlIiwia2V5IiwidmFsdWUiLCJ0YXJnZXQiLCJzcGVjaWFsRmllbGQiLCJ1c2VBcHBTZWxlY3RvciIsInN0YXRlIiwiZm9ybXMiLCJ2YWx1ZXMiLCJlcnJvciIsImVycm9ycyIsImFkZGl0aW9uYWxWYWx1ZXMiLCJpIiwiYWRkaXRvbmFsVmFsdWUiLCJGaWVsZCIsIkZpZWxkR2VuZXJhdG9yIiwiZ3JpZFNpemUiLCJ1c2VHcmlkIiwiSlNYIiwiV3JhcHBlZEpTWCIsInBhZGRpbmdCb3R0b20iLCJSZWFjdCIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFHQSxJQUFNQSxTQUFTLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLCtJQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyxnRUFB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WjtBQU1FLG9CQUFnQixFQUFFZSxnQkFOcEI7QUFPRSxZQUFRLEVBQUV6QixJQUFJLEtBQUs7QUFQckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0FuREQ7O0dBQU1JLG1CO1VBTWFLLHVELEVBa0JIVSx1RCxFQUNBQSx1RCxFQUtXQSx1RDs7O09BOUJyQmYsbUI7O0FBcUROLElBQU15QixjQUEwQyxHQUFHLFNBQTdDQSxjQUE2QyxDQUFDOUIsS0FBRCxFQUFXO0FBQUEsTUFDcEQrQixRQURvRCxHQUNwQi9CLEtBRG9CLENBQ3BEK0IsUUFEb0Q7QUFBQSxNQUMxQ3pCLFFBRDBDLEdBQ3BCTixLQURvQixDQUMxQ00sUUFEMEM7QUFBQSxNQUNoQzBCLE9BRGdDLEdBQ3BCaEMsS0FEb0IsQ0FDaENnQyxPQURnQztBQUc1RCxNQUFNQyxHQUFHLEdBQUczQixRQUFRLEdBQUdELG1CQUFILEdBQXlCTixxQkFBN0M7O0FBQ0EsTUFBTW1DLFVBQVUsZ0JBQUcscUVBQUMscUVBQUQsa0NBQWtCbEMsS0FBbEI7QUFBeUIsYUFBUyxFQUFFaUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFuQjs7QUFFQSxNQUFJRCxPQUFKLEVBQWE7QUFDWCx3QkFDRSxxRUFBQyw4REFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQW1CLFFBQUUsRUFBRUQsUUFBUSxJQUFJLEVBQW5DO0FBQXVDLFdBQUssRUFBRTtBQUFFSSxxQkFBYSxFQUFFO0FBQWpCLE9BQTlDO0FBQUEsZ0JBQ0dEO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBS0Q7O0FBRUQsU0FBT0EsVUFBUDtBQUNELENBZkQ7O09BQU1KLGM7QUFpQlMsbUZBQUFNLDRDQUFLLENBQUNDLElBQU4sQ0FBV1AsY0FBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Zvcm1zLmYzMzNmNzI5ODc3NmIyZTdhYWRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdhcHBSZWR1eCc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnYXBwUmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgZm9ybXNBY3Rpb25zIH0gZnJvbSAnYXBwUmVkdXgvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZFZhbHVlIH0gZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9mb3JtVHlwZXMnO1xyXG5pbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvRmllbGRXcmFwcGVyJztcclxuaW1wb3J0IHR5cGUgeyBGaWVsZFdyYXBwZXJUeXBlIH0gZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9GaWVsZFdyYXBwZXInO1xyXG5cclxuY29uc3QgVGV4dElucHV0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL1RleHRJbnB1dCcpKTtcclxuY29uc3QgU2VsZWN0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL1NlbGVjdCcpKTtcclxuY29uc3QgQnV0dG9uR3JvdXAgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vQnV0dG9uR3JvdXAnKSk7XHJcbmNvbnN0IERhdGUgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vRGF0ZScpKTtcclxuXHJcbmNvbnN0IEZpZWxkVHlwZU1hcDogUmVjb3JkPEZpZWxkVHlwZVsndHlwZSddLCBhbnk+ID0ge1xyXG4gIHRleHQ6IFRleHRJbnB1dCxcclxuICBudW1iZXI6IFRleHRJbnB1dCxcclxuICBjdXJyZW5jeTogVGV4dElucHV0LFxyXG4gIHRleHRhcmVhOiBUZXh0SW5wdXQsXHJcbiAgcGFzc3dvcmQ6IFRleHRJbnB1dCxcclxuICB0ZWw6IFRleHRJbnB1dCxcclxuICBlbWFpbDogVGV4dElucHV0LFxyXG4gIHNlbGVjdDogU2VsZWN0LFxyXG4gIG11bHRpX3NlbGVjdDogU2VsZWN0LFxyXG4gIHJhZGlvOiBCdXR0b25Hcm91cCxcclxuICBkYXRlOiBEYXRlLFxyXG59O1xyXG5cclxuY29uc3QgRmllbGRHZW5lcmF0b3JEZWZhdWx0OiBSZWFjdC5GQzxGaWVsZFR5cGU+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgdHlwZToga2V5b2YgdHlwZW9mIEZpZWxkVHlwZU1hcCA9XHJcbiAgICBwcm9wcy50eXBlID09PSAnc2VsZWN0JyAmJiBwcm9wcy5vcHRpb25zICYmIHByb3BzLm9wdGlvbnM/Lmxlbmd0aCA8PSAzID8gJ3JhZGlvJyA6IHByb3BzLnR5cGU7XHJcbiAgY29uc3QgRHluYW1pY0ZpZWxkID0gRmllbGRUeXBlTWFwW3R5cGVdO1xyXG5cclxuICByZXR1cm4gPER5bmFtaWNGaWVsZCB7Li4ucHJvcHN9IHR5cGU9e3R5cGV9IC8+O1xyXG59O1xyXG5cclxuY29uc3QgRmllbGRHZW5lcmF0b3JSZWR1eDogUmVhY3QuRkM8RmllbGRUeXBlPiA9ICh7XHJcbiAgZm9ybU5hbWUgPSAnJyxcclxuICBhZGRpdGlvbmFsTmFtZXMgPSBbXSxcclxuICAuLi5wcm9wc1xyXG59KSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lIH0gPSBwcm9wcztcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgIGlmIChmb3JtTmFtZSkge1xyXG4gICAgICAgIGRpc3BhdGNoKFxyXG4gICAgICAgICAgZm9ybXNBY3Rpb25zLm9uQ2hhbmdlVmFsdWUoe1xyXG4gICAgICAgICAgICBmb3JtTmFtZSxcclxuICAgICAgICAgICAga2V5OiBuYW1lLFxyXG4gICAgICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICBzcGVjaWFsRmllbGQ6IHByb3BzLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgW2Rpc3BhdGNoLCBmb3JtTmFtZSwgbmFtZSwgcHJvcHNdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgdmFsdWUgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZvcm1zLnZhbHVlc1tmb3JtTmFtZV0/LltuYW1lXSk7XHJcbiAgY29uc3QgZXJyb3IgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZvcm1zLmVycm9yc1tmb3JtTmFtZV0/LltuYW1lXSk7XHJcbiAgY29uc3QgYWRkaXRpb25hbFZhbHVlczogUmVjb3JkPHN0cmluZywgRmllbGRWYWx1ZT4gPSB7fTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRpdGlvbmFsTmFtZXMubGVuZ3RoIHx8IDA7ICsraSkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBjb25zdCBhZGRpdG9uYWxWYWx1ZSA9IHVzZUFwcFNlbGVjdG9yKFxyXG4gICAgICAoc3RhdGUpID0+IHN0YXRlLmZvcm1zLnZhbHVlc1tmb3JtTmFtZV1bYWRkaXRpb25hbE5hbWVzW2ldXVxyXG4gICAgKTtcclxuICAgIGFkZGl0aW9uYWxWYWx1ZXNbYWRkaXRpb25hbE5hbWVzW2ldXSA9IGFkZGl0b25hbFZhbHVlO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdHlwZSA9XHJcbiAgICBwcm9wcy50eXBlID09PSAnc2VsZWN0JyAmJiBwcm9wcy5vcHRpb25zICYmIHByb3BzLm9wdGlvbnM/Lmxlbmd0aCA8PSAzID8gJ3JhZGlvJyA6IHByb3BzLnR5cGU7XHJcbiAgY29uc3QgRmllbGQgPSBGaWVsZFR5cGVNYXBbdHlwZV07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RmllbGRcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgICB0eXBlPXt0eXBlfVxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgIGVycm9yPXtlcnJvcn1cclxuICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICBhZGRpdGlvbmFsVmFsdWVzPXthZGRpdGlvbmFsVmFsdWVzfVxyXG4gICAgICBtdWx0aXBsZT17dHlwZSA9PT0gJ211bHRpX3NlbGVjdCd9XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBGaWVsZEdlbmVyYXRvcjogUmVhY3QuRkM8RmllbGRXcmFwcGVyVHlwZT4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGdyaWRTaXplLCBmb3JtTmFtZSwgdXNlR3JpZCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IEpTWCA9IGZvcm1OYW1lID8gRmllbGRHZW5lcmF0b3JSZWR1eCA6IEZpZWxkR2VuZXJhdG9yRGVmYXVsdDtcclxuICBjb25zdCBXcmFwcGVkSlNYID0gPEZpZWxkV3JhcHBlciB7Li4ucHJvcHN9IENvbXBvbmVudD17SlNYfSAvPjtcclxuXHJcbiAgaWYgKHVzZUdyaWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Z3JpZFNpemUgfHwgMTJ9IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDAgfX0+XHJcbiAgICAgICAge1dyYXBwZWRKU1h9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gV3JhcHBlZEpTWDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRmllbGRHZW5lcmF0b3IpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9