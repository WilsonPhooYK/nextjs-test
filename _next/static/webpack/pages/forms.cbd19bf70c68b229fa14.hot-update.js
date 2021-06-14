webpackHotUpdate_N_E("pages/forms",{

/***/ "./src/components/Forms/FieldGenerator/FieldGenerator.tsx":
/*!****************************************************************!*\
  !*** ./src/components/Forms/FieldGenerator/FieldGenerator.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var appRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! appRedux */ "./src/appRedux/index.ts");
/* harmony import */ var appRedux_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! appRedux/forms */ "./src/appRedux/forms/index.ts");
/* harmony import */ var components_Forms_FieldWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Forms/FieldWrapper */ "./src/components/Forms/FieldWrapper/index.tsx");



var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\FieldGenerator\\FieldGenerator.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // import { useSelector } from 'services/reducers';
// import { FieldValueType } from './Forms.d';
// import { onChangeValue } from 'services/actions/forms';
// import { FieldType } from '../formTypes';


var TextInput = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ../TextInput */ "./src/components/Forms/TextInput/index.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../TextInput */ "./src/components/Forms/TextInput/index.tsx")];
    },
    modules: ["..\\components\\Forms\\FieldGenerator\\FieldGenerator.tsx -> " + '../TextInput']
  }
});
_c2 = TextInput;
var Select = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c3 = function _c3() {
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
var ButtonGroup = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c5 = function _c5() {
  return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ../ButtonGroup */ "./src/components/Forms/ButtonGroup/index.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../ButtonGroup */ "./src/components/Forms/ButtonGroup/index.tsx")];
    },
    modules: ["..\\components\\Forms\\FieldGenerator\\FieldGenerator.tsx -> " + '../ButtonGroup']
  }
});
_c6 = ButtonGroup;
var Date = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c7 = function _c7() {
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
  mobile: TextInput,
  nric: TextInput,
  email: TextInput,
  select: Select,
  multi_select: Select,
  radio: ButtonGroup,
  date: Date
};

var FieldGeneratorDefault = function FieldGeneratorDefault(props) {
  var _props$options;

  var type = props.type === 'select' && props.options && ((_props$options = props.options) === null || _props$options === void 0 ? void 0 : _props$options.length) <= 3 ? 'radio' : props.type;
  var DynamicField = FieldTypeMap[type]; // @ts-expect-error - Dynamic type too difficult to deduce

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(DynamicField, _objectSpread(_objectSpread({}, props), {}, {
    type: type
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 10
  }, _this);
};

_c9 = FieldGeneratorDefault;

var FieldGeneratorRedux = function FieldGeneratorRedux(props) {
  _s();

  var _props$options2;

  var name = props.name,
      _props$formName = props.formName,
      formName = _props$formName === void 0 ? '' : _props$formName,
      _props$additionalName = props.additionalNames,
      additionalNames = _props$additionalName === void 0 ? [] : _props$additionalName;
  var dispatch = Object(appRedux__WEBPACK_IMPORTED_MODULE_5__["useAppDispatch"])();
  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (event) {
    if (formName) {
      dispatch(appRedux_forms__WEBPACK_IMPORTED_MODULE_6__["formsActions"].onChangeValue({
        formName: formName,
        key: name,
        value: event.target.value,
        specialField: props
      }));
    }
  }, [dispatch, formName, name, props]);
  var value = Object(appRedux__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"])(function (state) {
    var _state$forms$values$f;

    return (_state$forms$values$f = state.forms.values[formName]) === null || _state$forms$values$f === void 0 ? void 0 : _state$forms$values$f[name];
  });
  var error = Object(appRedux__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"])(function (state) {
    var _state$forms$errors$f;

    return (_state$forms$errors$f = state.forms.errors[formName]) === null || _state$forms$errors$f === void 0 ? void 0 : _state$forms$errors$f[name];
  });
  var additionalValues = [];

  var _loop = function _loop(i) {
    // eslint-disable-next-line
    var additonalValue = Object(appRedux__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"])(function (state) {
      return state.forms.values[formName][additionalNames[i]];
    });
    additionalValues.push(additonalValue);
  };

  for (var i = 0; i < additionalNames.length || 0; ++i) {
    _loop(i);
  }

  var type = props.type === 'select' && props.options && ((_props$options2 = props.options) === null || _props$options2 === void 0 ? void 0 : _props$options2.length) <= 3 ? 'radio' : props.type;
  var Field = FieldTypeMap[type];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Field, _objectSpread(_objectSpread({}, props), {}, {
    type: type,
    value: value,
    error: error,
    onChange: onChange,
    additionalValues: additionalValues
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 82,
    columnNumber: 5
  }, _this);
};

_s(FieldGeneratorRedux, "t5AClTKMn8qkWJn36xWccUH5teA=", false, function () {
  return [appRedux__WEBPACK_IMPORTED_MODULE_5__["useAppDispatch"], appRedux__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"], appRedux__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"], appRedux__WEBPACK_IMPORTED_MODULE_5__["useAppSelector"]];
});

_c10 = FieldGeneratorRedux;

var FieldGenerator = function FieldGenerator(props) {
  var size = props.size,
      formName = props.formName,
      useGrid = props.useGrid;
  var JSX = formName ? FieldGeneratorRedux : FieldGeneratorDefault;

  var WrappedJSX = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Forms_FieldWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, props), {}, {
    Component: JSX
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 97,
    columnNumber: 22
  }, _this);

  if (useGrid) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 12,
      md: size || 12,
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
/* harmony default export */ __webpack_exports__["default"] = (_c12 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(FieldGenerator));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRmllbGRHZW5lcmF0b3IvRmllbGRHZW5lcmF0b3IudHN4Il0sIm5hbWVzIjpbIlRleHRJbnB1dCIsImR5bmFtaWMiLCJTZWxlY3QiLCJCdXR0b25Hcm91cCIsIkRhdGUiLCJGaWVsZFR5cGVNYXAiLCJ0ZXh0IiwibnVtYmVyIiwiY3VycmVuY3kiLCJ0ZXh0YXJlYSIsIm1vYmlsZSIsIm5yaWMiLCJlbWFpbCIsInNlbGVjdCIsIm11bHRpX3NlbGVjdCIsInJhZGlvIiwiZGF0ZSIsIkZpZWxkR2VuZXJhdG9yRGVmYXVsdCIsInByb3BzIiwidHlwZSIsIm9wdGlvbnMiLCJsZW5ndGgiLCJEeW5hbWljRmllbGQiLCJGaWVsZEdlbmVyYXRvclJlZHV4IiwibmFtZSIsImZvcm1OYW1lIiwiYWRkaXRpb25hbE5hbWVzIiwiZGlzcGF0Y2giLCJ1c2VBcHBEaXNwYXRjaCIsIm9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJldmVudCIsImZvcm1zQWN0aW9ucyIsIm9uQ2hhbmdlVmFsdWUiLCJrZXkiLCJ2YWx1ZSIsInRhcmdldCIsInNwZWNpYWxGaWVsZCIsInVzZUFwcFNlbGVjdG9yIiwic3RhdGUiLCJmb3JtcyIsInZhbHVlcyIsImVycm9yIiwiZXJyb3JzIiwiYWRkaXRpb25hbFZhbHVlcyIsImkiLCJhZGRpdG9uYWxWYWx1ZSIsInB1c2giLCJGaWVsZCIsIkZpZWxkR2VuZXJhdG9yIiwic2l6ZSIsInVzZUdyaWQiLCJKU1giLCJXcmFwcGVkSlNYIiwiUmVhY3QiLCJtZW1vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBRUE7O0FBR0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLCtJQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyxnRUFBZDtBQUFBO0FBQUEsZ0ZBQWMsY0FBZDtBQUFBO0FBQUEsRUFBekI7TUFBTUQsUztBQUNOLElBQU1FLE1BQU0sR0FBR0QsbURBQU8sT0FBQztBQUFBLFNBQU0seUlBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLDBEQUFkO0FBQUE7QUFBQSxnRkFBYyxXQUFkO0FBQUE7QUFBQSxFQUF0QjtNQUFNQyxNO0FBQ04sSUFBTUMsV0FBVyxHQUFHRixtREFBTyxPQUFDO0FBQUEsU0FBTSxtSkFBTjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQWMsb0VBQWQ7QUFBQTtBQUFBLGdGQUFjLGdCQUFkO0FBQUE7QUFBQSxFQUEzQjtNQUFNRSxXO0FBQ04sSUFBTUMsSUFBSSxHQUFHSCxtREFBTyxPQUFDO0FBQUEsU0FBTSxxSUFBTjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQWMsc0RBQWQ7QUFBQTtBQUFBLGdGQUFjLFNBQWQ7QUFBQTtBQUFBLEVBQXBCO01BQU1HLEk7QUFFTixJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLE1BQUksRUFBRU4sU0FEYTtBQUVuQk8sUUFBTSxFQUFFUCxTQUZXO0FBR25CUSxVQUFRLEVBQUVSLFNBSFM7QUFJbkJTLFVBQVEsRUFBRVQsU0FKUztBQUtuQlUsUUFBTSxFQUFFVixTQUxXO0FBTW5CVyxNQUFJLEVBQUVYLFNBTmE7QUFPbkJZLE9BQUssRUFBRVosU0FQWTtBQVFuQmEsUUFBTSxFQUFFWCxNQVJXO0FBU25CWSxjQUFZLEVBQUVaLE1BVEs7QUFVbkJhLE9BQUssRUFBRVosV0FWWTtBQVduQmEsTUFBSSxFQUFFWjtBQVhhLENBQXJCOztBQWNBLElBQU1hLHFCQUEwQyxHQUFHLFNBQTdDQSxxQkFBNkMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzVELE1BQU1DLElBQStCLEdBQ25DRCxLQUFLLENBQUNDLElBQU4sS0FBZSxRQUFmLElBQTJCRCxLQUFLLENBQUNFLE9BQWpDLElBQTRDLG1CQUFBRixLQUFLLENBQUNFLE9BQU4sa0VBQWVDLE1BQWYsS0FBeUIsQ0FBckUsR0FBeUUsT0FBekUsR0FBbUZILEtBQUssQ0FBQ0MsSUFEM0Y7QUFFQSxNQUFNRyxZQUFZLEdBQUdqQixZQUFZLENBQUNjLElBQUQsQ0FBakMsQ0FINEQsQ0FLNUQ7O0FBQ0Esc0JBQU8scUVBQUMsWUFBRCxrQ0FBa0JELEtBQWxCO0FBQXlCLFFBQUksRUFBRUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ0QsQ0FQRDs7TUFBTUYscUI7O0FBU04sSUFBTU0sbUJBQXdDLEdBQUcsU0FBM0NBLG1CQUEyQyxDQUFDTCxLQUFELEVBQVc7QUFBQTs7QUFBQTs7QUFBQSxNQUNsRE0sSUFEa0QsR0FDSk4sS0FESSxDQUNsRE0sSUFEa0Q7QUFBQSx3QkFDSk4sS0FESSxDQUM1Q08sUUFENEM7QUFBQSxNQUM1Q0EsUUFENEMsZ0NBQ2pDLEVBRGlDO0FBQUEsOEJBQ0pQLEtBREksQ0FDN0JRLGVBRDZCO0FBQUEsTUFDN0JBLGVBRDZCLHNDQUNYLEVBRFc7QUFFMUQsTUFBTUMsUUFBUSxHQUFHQywrREFBYyxFQUEvQjtBQUVBLE1BQU1DLFFBQVEsR0FBR0MseURBQVcsQ0FDMUIsVUFBQ0MsS0FBRCxFQUEwQztBQUN4QyxRQUFJTixRQUFKLEVBQWM7QUFDWkUsY0FBUSxDQUNOSywyREFBWSxDQUFDQyxhQUFiLENBQTJCO0FBQ3pCUixnQkFBUSxFQUFSQSxRQUR5QjtBQUV6QlMsV0FBRyxFQUFFVixJQUZvQjtBQUd6QlcsYUFBSyxFQUFFSixLQUFLLENBQUNLLE1BQU4sQ0FBYUQsS0FISztBQUl6QkUsb0JBQVksRUFBRW5CO0FBSlcsT0FBM0IsQ0FETSxDQUFSO0FBUUQ7QUFDRixHQVp5QixFQWExQixDQUFDUyxRQUFELEVBQVdGLFFBQVgsRUFBcUJELElBQXJCLEVBQTJCTixLQUEzQixDQWIwQixDQUE1QjtBQWdCQSxNQUFNaUIsS0FBSyxHQUFHRywrREFBYyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxvQ0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJoQixRQUFuQixDQUFYLDBEQUFXLHNCQUErQkQsSUFBL0IsQ0FBWDtBQUFBLEdBQUQsQ0FBNUI7QUFDQSxNQUFNa0IsS0FBSyxHQUFHSiwrREFBYyxDQUFDLFVBQUNDLEtBQUQ7QUFBQTs7QUFBQSxvQ0FBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlHLE1BQVosQ0FBbUJsQixRQUFuQixDQUFYLDBEQUFXLHNCQUErQkQsSUFBL0IsQ0FBWDtBQUFBLEdBQUQsQ0FBNUI7QUFDQSxNQUFNb0IsZ0JBQThCLEdBQUcsRUFBdkM7O0FBdEIwRCw2QkF3QmpEQyxDQXhCaUQ7QUF5QnhEO0FBQ0EsUUFBTUMsY0FBYyxHQUFHUiwrREFBYyxDQUNuQyxVQUFDQyxLQUFEO0FBQUEsYUFBV0EsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE1BQVosQ0FBbUJoQixRQUFuQixFQUE2QkMsZUFBZSxDQUFDbUIsQ0FBRCxDQUE1QyxDQUFYO0FBQUEsS0FEbUMsQ0FBckM7QUFHQUQsb0JBQWdCLENBQUNHLElBQWpCLENBQXNCRCxjQUF0QjtBQTdCd0Q7O0FBd0IxRCxPQUFLLElBQUlELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUduQixlQUFlLENBQUNMLE1BQXBCLElBQThCLENBQTlDLEVBQWlELEVBQUV3QixDQUFuRCxFQUFzRDtBQUFBLFVBQTdDQSxDQUE2QztBQU1yRDs7QUFFRCxNQUFNMUIsSUFBK0IsR0FDbkNELEtBQUssQ0FBQ0MsSUFBTixLQUFlLFFBQWYsSUFBMkJELEtBQUssQ0FBQ0UsT0FBakMsSUFBNEMsb0JBQUFGLEtBQUssQ0FBQ0UsT0FBTixvRUFBZUMsTUFBZixLQUF5QixDQUFyRSxHQUF5RSxPQUF6RSxHQUFtRkgsS0FBSyxDQUFDQyxJQUQzRjtBQUVBLE1BQU02QixLQUFLLEdBQUczQyxZQUFZLENBQUNjLElBQUQsQ0FBMUI7QUFFQSxzQkFDRSxxRUFBQyxLQUFELGtDQUNNRCxLQUROO0FBRUUsUUFBSSxFQUFFQyxJQUZSO0FBR0UsU0FBSyxFQUFFZ0IsS0FIVDtBQUlFLFNBQUssRUFBRU8sS0FKVDtBQUtFLFlBQVEsRUFBRWIsUUFMWjtBQU1FLG9CQUFnQixFQUFFZTtBQU5wQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFVRCxDQTlDRDs7R0FBTXJCLG1CO1VBRWFLLHVELEVBa0JIVSx1RCxFQUNBQSx1RCxFQUtXQSx1RDs7O09BMUJyQmYsbUI7O0FBZ0ROLElBQU0wQixjQUFtQyxHQUFHLFNBQXRDQSxjQUFzQyxDQUFDL0IsS0FBRCxFQUFXO0FBQUEsTUFDN0NnQyxJQUQ2QyxHQUNqQmhDLEtBRGlCLENBQzdDZ0MsSUFENkM7QUFBQSxNQUN2Q3pCLFFBRHVDLEdBQ2pCUCxLQURpQixDQUN2Q08sUUFEdUM7QUFBQSxNQUM3QjBCLE9BRDZCLEdBQ2pCakMsS0FEaUIsQ0FDN0JpQyxPQUQ2QjtBQUdyRCxNQUFNQyxHQUFHLEdBQUczQixRQUFRLEdBQUdGLG1CQUFILEdBQXlCTixxQkFBN0M7O0FBQ0EsTUFBTW9DLFVBQVUsZ0JBQUcscUVBQUMscUVBQUQsa0NBQWtCbkMsS0FBbEI7QUFBeUIsYUFBUyxFQUFFa0M7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFuQjs7QUFFQSxNQUFJRCxPQUFKLEVBQWE7QUFDWCx3QkFDRSxxRUFBQyw4REFBRDtBQUFNLFVBQUksTUFBVjtBQUFXLFFBQUUsRUFBRSxFQUFmO0FBQW1CLFFBQUUsRUFBRUQsSUFBSSxJQUFJLEVBQS9CO0FBQUEsZ0JBQ0dHO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBS0Q7O0FBRUQsU0FBT0EsVUFBUDtBQUNELENBZkQ7O09BQU1KLGM7QUFpQlMsbUZBQUFLLDRDQUFLLENBQUNDLElBQU4sQ0FBV04sY0FBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Zvcm1zLmNiZDE5YmY3MGM2OGIyMjlmYTE0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ2FsbGJhY2ssIENoYW5nZUV2ZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdhcHBSZWR1eCc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnYXBwUmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgZm9ybXNBY3Rpb25zIH0gZnJvbSAnYXBwUmVkdXgvZm9ybXMnO1xyXG4vLyBpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gJ3NlcnZpY2VzL3JlZHVjZXJzJztcclxuLy8gaW1wb3J0IHsgRmllbGRWYWx1ZVR5cGUgfSBmcm9tICcuL0Zvcm1zLmQnO1xyXG4vLyBpbXBvcnQgeyBvbkNoYW5nZVZhbHVlIH0gZnJvbSAnc2VydmljZXMvYWN0aW9ucy9mb3Jtcyc7XHJcblxyXG4vLyBpbXBvcnQgeyBGaWVsZFR5cGUgfSBmcm9tICcuLi9mb3JtVHlwZXMnO1xyXG5cclxuaW1wb3J0IHsgRmllbGRUeXBlLCBGaWVsZFZhbHVlIH0gZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9mb3JtVHlwZXMnO1xyXG5pbXBvcnQgRmllbGRXcmFwcGVyIGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvRmllbGRXcmFwcGVyJztcclxuXHJcbmNvbnN0IFRleHRJbnB1dCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9UZXh0SW5wdXQnKSk7XHJcbmNvbnN0IFNlbGVjdCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9TZWxlY3QnKSk7XHJcbmNvbnN0IEJ1dHRvbkdyb3VwID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL0J1dHRvbkdyb3VwJykpO1xyXG5jb25zdCBEYXRlID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4uL0RhdGUnKSk7XHJcblxyXG5jb25zdCBGaWVsZFR5cGVNYXAgPSB7XHJcbiAgdGV4dDogVGV4dElucHV0LFxyXG4gIG51bWJlcjogVGV4dElucHV0LFxyXG4gIGN1cnJlbmN5OiBUZXh0SW5wdXQsXHJcbiAgdGV4dGFyZWE6IFRleHRJbnB1dCxcclxuICBtb2JpbGU6IFRleHRJbnB1dCxcclxuICBucmljOiBUZXh0SW5wdXQsXHJcbiAgZW1haWw6IFRleHRJbnB1dCxcclxuICBzZWxlY3Q6IFNlbGVjdCxcclxuICBtdWx0aV9zZWxlY3Q6IFNlbGVjdCxcclxuICByYWRpbzogQnV0dG9uR3JvdXAsXHJcbiAgZGF0ZTogRGF0ZSxcclxufTtcclxuXHJcbmNvbnN0IEZpZWxkR2VuZXJhdG9yRGVmYXVsdDogUmVhY3QuRkM8RmllbGRUeXBlPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHR5cGU6IGtleW9mIHR5cGVvZiBGaWVsZFR5cGVNYXAgPVxyXG4gICAgcHJvcHMudHlwZSA9PT0gJ3NlbGVjdCcgJiYgcHJvcHMub3B0aW9ucyAmJiBwcm9wcy5vcHRpb25zPy5sZW5ndGggPD0gMyA/ICdyYWRpbycgOiBwcm9wcy50eXBlO1xyXG4gIGNvbnN0IER5bmFtaWNGaWVsZCA9IEZpZWxkVHlwZU1hcFt0eXBlXTtcclxuXHJcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIER5bmFtaWMgdHlwZSB0b28gZGlmZmljdWx0IHRvIGRlZHVjZVxyXG4gIHJldHVybiA8RHluYW1pY0ZpZWxkIHsuLi5wcm9wc30gdHlwZT17dHlwZX0gLz47XHJcbn07XHJcblxyXG5jb25zdCBGaWVsZEdlbmVyYXRvclJlZHV4OiBSZWFjdC5GQzxGaWVsZFR5cGU+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBuYW1lLCBmb3JtTmFtZSA9ICcnLCBhZGRpdGlvbmFsTmFtZXMgPSBbXSB9ID0gcHJvcHM7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICBpZiAoZm9ybU5hbWUpIHtcclxuICAgICAgICBkaXNwYXRjaChcclxuICAgICAgICAgIGZvcm1zQWN0aW9ucy5vbkNoYW5nZVZhbHVlKHtcclxuICAgICAgICAgICAgZm9ybU5hbWUsXHJcbiAgICAgICAgICAgIGtleTogbmFtZSxcclxuICAgICAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICAgc3BlY2lhbEZpZWxkOiBwcm9wcyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIFtkaXNwYXRjaCwgZm9ybU5hbWUsIG5hbWUsIHByb3BzXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IHZhbHVlID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5mb3Jtcy52YWx1ZXNbZm9ybU5hbWVdPy5bbmFtZV0pO1xyXG4gIGNvbnN0IGVycm9yID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5mb3Jtcy5lcnJvcnNbZm9ybU5hbWVdPy5bbmFtZV0pO1xyXG4gIGNvbnN0IGFkZGl0aW9uYWxWYWx1ZXM6IEZpZWxkVmFsdWVbXSA9IFtdO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZGl0aW9uYWxOYW1lcy5sZW5ndGggfHwgMDsgKytpKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIGNvbnN0IGFkZGl0b25hbFZhbHVlID0gdXNlQXBwU2VsZWN0b3IoXHJcbiAgICAgIChzdGF0ZSkgPT4gc3RhdGUuZm9ybXMudmFsdWVzW2Zvcm1OYW1lXVthZGRpdGlvbmFsTmFtZXNbaV1dXHJcbiAgICApO1xyXG4gICAgYWRkaXRpb25hbFZhbHVlcy5wdXNoKGFkZGl0b25hbFZhbHVlKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHR5cGU6IGtleW9mIHR5cGVvZiBGaWVsZFR5cGVNYXAgPVxyXG4gICAgcHJvcHMudHlwZSA9PT0gJ3NlbGVjdCcgJiYgcHJvcHMub3B0aW9ucyAmJiBwcm9wcy5vcHRpb25zPy5sZW5ndGggPD0gMyA/ICdyYWRpbycgOiBwcm9wcy50eXBlO1xyXG4gIGNvbnN0IEZpZWxkID0gRmllbGRUeXBlTWFwW3R5cGVdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZpZWxkXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICBlcnJvcj17ZXJyb3J9XHJcbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgYWRkaXRpb25hbFZhbHVlcz17YWRkaXRpb25hbFZhbHVlc31cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEZpZWxkR2VuZXJhdG9yOiBSZWFjdC5GQzxGaWVsZFR5cGU+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBzaXplLCBmb3JtTmFtZSwgdXNlR3JpZCB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IEpTWCA9IGZvcm1OYW1lID8gRmllbGRHZW5lcmF0b3JSZWR1eCA6IEZpZWxkR2VuZXJhdG9yRGVmYXVsdDtcclxuICBjb25zdCBXcmFwcGVkSlNYID0gPEZpZWxkV3JhcHBlciB7Li4ucHJvcHN9IENvbXBvbmVudD17SlNYfSAvPjtcclxuXHJcbiAgaWYgKHVzZUdyaWQpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17c2l6ZSB8fCAxMn0+XHJcbiAgICAgICAge1dyYXBwZWRKU1h9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gV3JhcHBlZEpTWDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRmllbGRHZW5lcmF0b3IpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9