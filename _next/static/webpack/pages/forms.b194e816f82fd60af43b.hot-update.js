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
    lineNumber: 42,
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
  console.log(value);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Field, _objectSpread(_objectSpread({}, props), {}, {
    type: type,
    value: value,
    error: error,
    onChange: onChange,
    additionalValues: additionalValues,
    multiple: type === 'multi_select'
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, _this);
};

_s(FieldGeneratorRedux, "t5AClTKMn8qkWJn36xWccUH5teA=", false, function () {
  return [appRedux__WEBPACK_IMPORTED_MODULE_6__["useAppDispatch"], appRedux__WEBPACK_IMPORTED_MODULE_6__["useAppSelector"], appRedux__WEBPACK_IMPORTED_MODULE_6__["useAppSelector"], appRedux__WEBPACK_IMPORTED_MODULE_6__["useAppSelector"]];
});

_c10 = FieldGeneratorRedux;

var FieldGenerator = function FieldGenerator(_ref2) {
  var gridSize = _ref2.gridSize,
      useGrid = _ref2.useGrid,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref2, ["gridSize", "useGrid"]);

  var formName = props.formName;
  var JSX = formName ? FieldGeneratorRedux : FieldGeneratorDefault;

  var WrappedJSX = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(components_Forms_FieldWrapper__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread(_objectSpread({}, props), {}, {
    Component: JSX
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
      lineNumber: 108,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRmllbGRHZW5lcmF0b3IvRmllbGRHZW5lcmF0b3IudHN4Il0sIm5hbWVzIjpbIlRleHRJbnB1dCIsImR5bmFtaWMiLCJTZWxlY3QiLCJCdXR0b25Hcm91cCIsIkRhdGUiLCJGaWVsZFR5cGVNYXAiLCJ0ZXh0IiwibnVtYmVyIiwiY3VycmVuY3kiLCJ0ZXh0YXJlYSIsInBhc3N3b3JkIiwidGVsIiwiZW1haWwiLCJzZWxlY3QiLCJtdWx0aV9zZWxlY3QiLCJyYWRpbyIsImRhdGUiLCJGaWVsZEdlbmVyYXRvckRlZmF1bHQiLCJwcm9wcyIsInR5cGUiLCJvcHRpb25zIiwibGVuZ3RoIiwiRHluYW1pY0ZpZWxkIiwiRmllbGRHZW5lcmF0b3JSZWR1eCIsImZvcm1OYW1lIiwiYWRkaXRpb25hbE5hbWVzIiwibmFtZSIsImRpc3BhdGNoIiwidXNlQXBwRGlzcGF0Y2giLCJvbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwiZXZlbnQiLCJmb3Jtc0FjdGlvbnMiLCJvbkNoYW5nZVZhbHVlIiwia2V5IiwidmFsdWUiLCJ0YXJnZXQiLCJzcGVjaWFsRmllbGQiLCJ1c2VBcHBTZWxlY3RvciIsInN0YXRlIiwiZm9ybXMiLCJ2YWx1ZXMiLCJlcnJvciIsImVycm9ycyIsImFkZGl0aW9uYWxWYWx1ZXMiLCJpIiwiYWRkaXRvbmFsVmFsdWUiLCJGaWVsZCIsImNvbnNvbGUiLCJsb2ciLCJGaWVsZEdlbmVyYXRvciIsImdyaWRTaXplIiwidXNlR3JpZCIsIkpTWCIsIldyYXBwZWRKU1giLCJwYWRkaW5nQm90dG9tIiwiUmVhY3QiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSwrSUFBTjtBQUFBLENBQUQ7QUFBQTtBQUFB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QUFFZ0IsS0FIVDtBQUlFLFNBQUssRUFBRU8sS0FKVDtBQUtFLFlBQVEsRUFBRWIsUUFMWjtBQU1FLG9CQUFnQixFQUFFZSxnQkFOcEI7QUFPRSxZQUFRLEVBQUV6QixJQUFJLEtBQUs7QUFQckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0FyREQ7O0dBQU1JLG1CO1VBTWFLLHVELEVBa0JIVSx1RCxFQUNBQSx1RCxFQUtXQSx1RDs7O09BOUJyQmYsbUI7O0FBdUROLElBQU0yQixjQUE0QyxHQUFHLFNBQS9DQSxjQUErQyxRQUFxQztBQUFBLE1BQWxDQyxRQUFrQyxTQUFsQ0EsUUFBa0M7QUFBQSxNQUF4QkMsT0FBd0IsU0FBeEJBLE9BQXdCO0FBQUEsTUFBWmxDLEtBQVk7O0FBQUEsTUFDaEZNLFFBRGdGLEdBQ25FTixLQURtRSxDQUNoRk0sUUFEZ0Y7QUFHeEYsTUFBTTZCLEdBQUcsR0FBRzdCLFFBQVEsR0FBR0QsbUJBQUgsR0FBeUJOLHFCQUE3Qzs7QUFDQSxNQUFNcUMsVUFBVSxnQkFBRyxxRUFBQyxxRUFBRCxrQ0FBa0JwQyxLQUFsQjtBQUF5QixhQUFTLEVBQUVtQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQW5COztBQUVBLE1BQUlELE9BQUosRUFBYTtBQUNYLHdCQUNFLHFFQUFDLDhEQUFEO0FBQU0sVUFBSSxNQUFWO0FBQVcsUUFBRSxFQUFFLEVBQWY7QUFBbUIsUUFBRSxFQUFFRCxRQUFRLElBQUksRUFBbkM7QUFBdUMsV0FBSyxFQUFFO0FBQUVJLHFCQUFhLEVBQUU7QUFBakIsT0FBOUM7QUFBQSxnQkFDR0Q7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFLRDs7QUFFRCxTQUFPQSxVQUFQO0FBQ0QsQ0FmRDs7T0FBTUosYztBQWlCUyxtRkFBQU0sNENBQUssQ0FBQ0MsSUFBTixDQUFXUCxjQUFYLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZm9ybXMuYjE5NGU4MTZmODJmZDYwYWY0M2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgQ2hhbmdlRXZlbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ2FwcFJlZHV4JztcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdhcHBSZWR1eCc7XHJcblxyXG5pbXBvcnQgeyBmb3Jtc0FjdGlvbnMgfSBmcm9tICdhcHBSZWR1eC9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBGaWVsZFR5cGUsIEZpZWxkVmFsdWUgfSBmcm9tICdjb21wb25lbnRzL0Zvcm1zL2Zvcm1UeXBlcyc7XHJcbmltcG9ydCBGaWVsZFdyYXBwZXIgZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9GaWVsZFdyYXBwZXInO1xyXG5cclxuY29uc3QgVGV4dElucHV0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL1RleHRJbnB1dCcpKTtcclxuY29uc3QgU2VsZWN0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL1NlbGVjdCcpKTtcclxuY29uc3QgQnV0dG9uR3JvdXAgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vQnV0dG9uR3JvdXAnKSk7XHJcbmNvbnN0IERhdGUgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vRGF0ZScpKTtcclxuXHJcbmV4cG9ydCB0eXBlIEZpZWxkR2VuZXJhdG9yVHlwZSA9IHtcclxuICB0aXRsZT86IHN0cmluZztcclxuICBncmlkU2l6ZT86IG51bWJlcjtcclxuICBzaXplPzogJ3NtYWxsJyB8ICdtZWRpdW0nO1xyXG59ICYgRmllbGRUeXBlO1xyXG5cclxuY29uc3QgRmllbGRUeXBlTWFwOiBSZWNvcmQ8RmllbGRUeXBlWyd0eXBlJ10sIGFueT4gPSB7XHJcbiAgdGV4dDogVGV4dElucHV0LFxyXG4gIG51bWJlcjogVGV4dElucHV0LFxyXG4gIGN1cnJlbmN5OiBUZXh0SW5wdXQsXHJcbiAgdGV4dGFyZWE6IFRleHRJbnB1dCxcclxuICBwYXNzd29yZDogVGV4dElucHV0LFxyXG4gIHRlbDogVGV4dElucHV0LFxyXG4gIGVtYWlsOiBUZXh0SW5wdXQsXHJcbiAgc2VsZWN0OiBTZWxlY3QsXHJcbiAgbXVsdGlfc2VsZWN0OiBTZWxlY3QsXHJcbiAgcmFkaW86IEJ1dHRvbkdyb3VwLFxyXG4gIGRhdGU6IERhdGUsXHJcbn07XHJcblxyXG5jb25zdCBGaWVsZEdlbmVyYXRvckRlZmF1bHQ6IFJlYWN0LkZDPEZpZWxkVHlwZT4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB0eXBlOiBrZXlvZiB0eXBlb2YgRmllbGRUeXBlTWFwID1cclxuICAgIHByb3BzLnR5cGUgPT09ICdzZWxlY3QnICYmIHByb3BzLm9wdGlvbnMgJiYgcHJvcHMub3B0aW9ucz8ubGVuZ3RoIDw9IDMgPyAncmFkaW8nIDogcHJvcHMudHlwZTtcclxuICBjb25zdCBEeW5hbWljRmllbGQgPSBGaWVsZFR5cGVNYXBbdHlwZV07XHJcblxyXG4gIHJldHVybiA8RHluYW1pY0ZpZWxkIHsuLi5wcm9wc30gdHlwZT17dHlwZX0gLz47XHJcbn07XHJcblxyXG5jb25zdCBGaWVsZEdlbmVyYXRvclJlZHV4OiBSZWFjdC5GQzxGaWVsZFR5cGU+ID0gKHtcclxuICBmb3JtTmFtZSA9ICcnLFxyXG4gIGFkZGl0aW9uYWxOYW1lcyA9IFtdLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCB7IG5hbWUgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgaWYgKGZvcm1OYW1lKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICBmb3Jtc0FjdGlvbnMub25DaGFuZ2VWYWx1ZSh7XHJcbiAgICAgICAgICAgIGZvcm1OYW1lLFxyXG4gICAgICAgICAgICBrZXk6IG5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgIHNwZWNpYWxGaWVsZDogcHJvcHMsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbZGlzcGF0Y2gsIGZvcm1OYW1lLCBuYW1lLCBwcm9wc11cclxuICApO1xyXG5cclxuICBjb25zdCB2YWx1ZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZm9ybXMudmFsdWVzW2Zvcm1OYW1lXT8uW25hbWVdKTtcclxuICBjb25zdCBlcnJvciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZm9ybXMuZXJyb3JzW2Zvcm1OYW1lXT8uW25hbWVdKTtcclxuICBjb25zdCBhZGRpdGlvbmFsVmFsdWVzOiBSZWNvcmQ8c3RyaW5nLCBGaWVsZFZhbHVlPiA9IHt9O1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZGl0aW9uYWxOYW1lcy5sZW5ndGggfHwgMDsgKytpKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGNvbnN0IGFkZGl0b25hbFZhbHVlID0gdXNlQXBwU2VsZWN0b3IoXHJcbiAgICAgIChzdGF0ZSkgPT4gc3RhdGUuZm9ybXMudmFsdWVzW2Zvcm1OYW1lXVthZGRpdGlvbmFsTmFtZXNbaV1dXHJcbiAgICApO1xyXG4gICAgYWRkaXRpb25hbFZhbHVlc1thZGRpdGlvbmFsTmFtZXNbaV1dID0gYWRkaXRvbmFsVmFsdWU7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0eXBlID1cclxuICAgIHByb3BzLnR5cGUgPT09ICdzZWxlY3QnICYmIHByb3BzLm9wdGlvbnMgJiYgcHJvcHMub3B0aW9ucz8ubGVuZ3RoIDw9IDMgPyAncmFkaW8nIDogcHJvcHMudHlwZTtcclxuICBjb25zdCBGaWVsZCA9IEZpZWxkVHlwZU1hcFt0eXBlXTtcclxuXHJcbiAgY29uc29sZS5sb2codmFsdWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZpZWxkXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICBlcnJvcj17ZXJyb3J9XHJcbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgYWRkaXRpb25hbFZhbHVlcz17YWRkaXRpb25hbFZhbHVlc31cclxuICAgICAgbXVsdGlwbGU9e3R5cGUgPT09ICdtdWx0aV9zZWxlY3QnfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgRmllbGRHZW5lcmF0b3I6IFJlYWN0LkZDPEZpZWxkR2VuZXJhdG9yVHlwZT4gPSAoeyBncmlkU2l6ZSwgdXNlR3JpZCwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IHsgZm9ybU5hbWUgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBKU1ggPSBmb3JtTmFtZSA/IEZpZWxkR2VuZXJhdG9yUmVkdXggOiBGaWVsZEdlbmVyYXRvckRlZmF1bHQ7XHJcbiAgY29uc3QgV3JhcHBlZEpTWCA9IDxGaWVsZFdyYXBwZXIgey4uLnByb3BzfSBDb21wb25lbnQ9e0pTWH0gLz47XHJcblxyXG4gIGlmICh1c2VHcmlkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9e2dyaWRTaXplIHx8IDEyfSBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAwIH19PlxyXG4gICAgICAgIHtXcmFwcGVkSlNYfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIFdyYXBwZWRKU1g7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZpZWxkR2VuZXJhdG9yKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==