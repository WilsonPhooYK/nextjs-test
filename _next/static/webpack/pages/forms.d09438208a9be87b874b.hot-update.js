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
    additionalValues: additionalValues // size="small"

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
    lineNumber: 98,
    columnNumber: 22
  }, _this);

  if (useGrid) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 12,
      md: size || 12,
      style: {
        paddingBottom: 0
      },
      children: WrappedJSX
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvRmllbGRHZW5lcmF0b3IvRmllbGRHZW5lcmF0b3IudHN4Il0sIm5hbWVzIjpbIlRleHRJbnB1dCIsImR5bmFtaWMiLCJTZWxlY3QiLCJCdXR0b25Hcm91cCIsIkRhdGUiLCJGaWVsZFR5cGVNYXAiLCJ0ZXh0IiwibnVtYmVyIiwiY3VycmVuY3kiLCJ0ZXh0YXJlYSIsIm1vYmlsZSIsIm5yaWMiLCJlbWFpbCIsInNlbGVjdCIsIm11bHRpX3NlbGVjdCIsInJhZGlvIiwiZGF0ZSIsIkZpZWxkR2VuZXJhdG9yRGVmYXVsdCIsInByb3BzIiwidHlwZSIsIm9wdGlvbnMiLCJsZW5ndGgiLCJEeW5hbWljRmllbGQiLCJGaWVsZEdlbmVyYXRvclJlZHV4IiwibmFtZSIsImZvcm1OYW1lIiwiYWRkaXRpb25hbE5hbWVzIiwiZGlzcGF0Y2giLCJ1c2VBcHBEaXNwYXRjaCIsIm9uQ2hhbmdlIiwidXNlQ2FsbGJhY2siLCJldmVudCIsImZvcm1zQWN0aW9ucyIsIm9uQ2hhbmdlVmFsdWUiLCJrZXkiLCJ2YWx1ZSIsInRhcmdldCIsInNwZWNpYWxGaWVsZCIsInVzZUFwcFNlbGVjdG9yIiwic3RhdGUiLCJmb3JtcyIsInZhbHVlcyIsImVycm9yIiwiZXJyb3JzIiwiYWRkaXRpb25hbFZhbHVlcyIsImkiLCJhZGRpdG9uYWxWYWx1ZSIsInB1c2giLCJGaWVsZCIsIkZpZWxkR2VuZXJhdG9yIiwic2l6ZSIsInVzZUdyaWQiLCJKU1giLCJXcmFwcGVkSlNYIiwicGFkZGluZ0JvdHRvbSIsIlJlYWN0IiwibWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBO0FBQ0E7QUFDQTtBQUVBOztBQUdBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxtREFBTyxNQUFDO0FBQUEsU0FBTSwrSUFBTjtBQUFBLENBQUQ7QUFBQTtBQUFBO0FBQUEsa0NBQWMsZ0VBQWQ7QUFBQTtBQUFBLGdGQUFjLGNBQWQ7QUFBQTtBQUFBLEVBQXpCO01BQU1ELFM7QUFDTixJQUFNRSxNQUFNLEdBQUdELG1EQUFPLE9BQUM7QUFBQSxTQUFNLHlJQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYywwREFBZDtBQUFBO0FBQUEsZ0ZBQWMsV0FBZDtBQUFBO0FBQUEsRUFBdEI7TUFBTUMsTTtBQUNOLElBQU1DLFdBQVcsR0FBR0YsbURBQU8sT0FBQztBQUFBLFNBQU0sbUpBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLG9FQUFkO0FBQUE7QUFBQSxnRkFBYyxnQkFBZDtBQUFBO0FBQUEsRUFBM0I7TUFBTUUsVztBQUNOLElBQU1DLElBQUksR0FBR0gsbURBQU8sT0FBQztBQUFBLFNBQU0scUlBQU47QUFBQSxDQUFEO0FBQUE7QUFBQTtBQUFBLGtDQUFjLHNEQUFkO0FBQUE7QUFBQSxnRkFBYyxTQUFkO0FBQUE7QUFBQSxFQUFwQjtNQUFNRyxJO0FBRU4sSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUVOLFNBRGE7QUFFbkJPLFFBQU0sRUFBRVAsU0FGVztBQUduQlEsVUFBUSxFQUFFUixTQUhTO0FBSW5CUyxVQUFRLEVBQUVULFNBSlM7QUFLbkJVLFFBQU0sRUFBRVYsU0FMVztBQU1uQlcsTUFBSSxFQUFFWCxTQU5hO0FBT25CWSxPQUFLLEVBQUVaLFNBUFk7QUFRbkJhLFFBQU0sRUFBRVgsTUFSVztBQVNuQlksY0FBWSxFQUFFWixNQVRLO0FBVW5CYSxPQUFLLEVBQUVaLFdBVlk7QUFXbkJhLE1BQUksRUFBRVo7QUFYYSxDQUFyQjs7QUFjQSxJQUFNYSxxQkFBMEMsR0FBRyxTQUE3Q0EscUJBQTZDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUM1RCxNQUFNQyxJQUErQixHQUNuQ0QsS0FBSyxDQUFDQyxJQUFOLEtBQWUsUUFBZixJQUEyQkQsS0FBSyxDQUFDRSxPQUFqQyxJQUE0QyxtQkFBQUYsS0FBSyxDQUFDRSxPQUFOLGtFQUFlQyxNQUFmLEtBQXlCLENBQXJFLEdBQXlFLE9BQXpFLEdBQW1GSCxLQUFLLENBQUNDLElBRDNGO0FBRUEsTUFBTUcsWUFBWSxHQUFHakIsWUFBWSxDQUFDYyxJQUFELENBQWpDLENBSDRELENBSzVEOztBQUNBLHNCQUFPLHFFQUFDLFlBQUQsa0NBQWtCRCxLQUFsQjtBQUF5QixRQUFJLEVBQUVDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBUEQ7O01BQU1GLHFCOztBQVNOLElBQU1NLG1CQUF3QyxHQUFHLFNBQTNDQSxtQkFBMkMsQ0FBQ0wsS0FBRCxFQUFXO0FBQUE7O0FBQUE7O0FBQUEsTUFDbERNLElBRGtELEdBQ0pOLEtBREksQ0FDbERNLElBRGtEO0FBQUEsd0JBQ0pOLEtBREksQ0FDNUNPLFFBRDRDO0FBQUEsTUFDNUNBLFFBRDRDLGdDQUNqQyxFQURpQztBQUFBLDhCQUNKUCxLQURJLENBQzdCUSxlQUQ2QjtBQUFBLE1BQzdCQSxlQUQ2QixzQ0FDWCxFQURXO0FBRTFELE1BQU1DLFFBQVEsR0FBR0MsK0RBQWMsRUFBL0I7QUFFQSxNQUFNQyxRQUFRLEdBQUdDLHlEQUFXLENBQzFCLFVBQUNDLEtBQUQsRUFBMEM7QUFDeEMsUUFBSU4sUUFBSixFQUFjO0FBQ1pFLGNBQVEsQ0FDTkssMkRBQVksQ0FBQ0MsYUFBYixDQUEyQjtBQUN6QlIsZ0JBQVEsRUFBUkEsUUFEeUI7QUFFekJTLFdBQUcsRUFBRVYsSUFGb0I7QUFHekJXLGFBQUssRUFBRUosS0FBSyxDQUFDSyxNQUFOLENBQWFELEtBSEs7QUFJekJFLG9CQUFZLEVBQUVuQjtBQUpXLE9BQTNCLENBRE0sQ0FBUjtBQVFEO0FBQ0YsR0FaeUIsRUFhMUIsQ0FBQ1MsUUFBRCxFQUFXRixRQUFYLEVBQXFCRCxJQUFyQixFQUEyQk4sS0FBM0IsQ0FiMEIsQ0FBNUI7QUFnQkEsTUFBTWlCLEtBQUssR0FBR0csK0RBQWMsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsb0NBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CaEIsUUFBbkIsQ0FBWCwwREFBVyxzQkFBK0JELElBQS9CLENBQVg7QUFBQSxHQUFELENBQTVCO0FBQ0EsTUFBTWtCLEtBQUssR0FBR0osK0RBQWMsQ0FBQyxVQUFDQyxLQUFEO0FBQUE7O0FBQUEsb0NBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZRyxNQUFaLENBQW1CbEIsUUFBbkIsQ0FBWCwwREFBVyxzQkFBK0JELElBQS9CLENBQVg7QUFBQSxHQUFELENBQTVCO0FBQ0EsTUFBTW9CLGdCQUE4QixHQUFHLEVBQXZDOztBQXRCMEQsNkJBd0JqREMsQ0F4QmlEO0FBeUJ4RDtBQUNBLFFBQU1DLGNBQWMsR0FBR1IsK0RBQWMsQ0FDbkMsVUFBQ0MsS0FBRDtBQUFBLGFBQVdBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxNQUFaLENBQW1CaEIsUUFBbkIsRUFBNkJDLGVBQWUsQ0FBQ21CLENBQUQsQ0FBNUMsQ0FBWDtBQUFBLEtBRG1DLENBQXJDO0FBR0FELG9CQUFnQixDQUFDRyxJQUFqQixDQUFzQkQsY0FBdEI7QUE3QndEOztBQXdCMUQsT0FBSyxJQUFJRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHbkIsZUFBZSxDQUFDTCxNQUFwQixJQUE4QixDQUE5QyxFQUFpRCxFQUFFd0IsQ0FBbkQsRUFBc0Q7QUFBQSxVQUE3Q0EsQ0FBNkM7QUFNckQ7O0FBRUQsTUFBTTFCLElBQStCLEdBQ25DRCxLQUFLLENBQUNDLElBQU4sS0FBZSxRQUFmLElBQTJCRCxLQUFLLENBQUNFLE9BQWpDLElBQTRDLG9CQUFBRixLQUFLLENBQUNFLE9BQU4sb0VBQWVDLE1BQWYsS0FBeUIsQ0FBckUsR0FBeUUsT0FBekUsR0FBbUZILEtBQUssQ0FBQ0MsSUFEM0Y7QUFFQSxNQUFNNkIsS0FBSyxHQUFHM0MsWUFBWSxDQUFDYyxJQUFELENBQTFCO0FBRUEsc0JBQ0UscUVBQUMsS0FBRCxrQ0FDTUQsS0FETjtBQUVFLFFBQUksRUFBRUMsSUFGUjtBQUdFLFNBQUssRUFBRWdCLEtBSFQ7QUFJRSxTQUFLLEVBQUVPLEtBSlQ7QUFLRSxZQUFRLEVBQUViLFFBTFo7QUFNRSxvQkFBZ0IsRUFBRWUsZ0JBTnBCLENBT0U7O0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0EvQ0Q7O0dBQU1yQixtQjtVQUVhSyx1RCxFQWtCSFUsdUQsRUFDQUEsdUQsRUFLV0EsdUQ7OztPQTFCckJmLG1COztBQWlETixJQUFNMEIsY0FBbUMsR0FBRyxTQUF0Q0EsY0FBc0MsQ0FBQy9CLEtBQUQsRUFBVztBQUFBLE1BQzdDZ0MsSUFENkMsR0FDakJoQyxLQURpQixDQUM3Q2dDLElBRDZDO0FBQUEsTUFDdkN6QixRQUR1QyxHQUNqQlAsS0FEaUIsQ0FDdkNPLFFBRHVDO0FBQUEsTUFDN0IwQixPQUQ2QixHQUNqQmpDLEtBRGlCLENBQzdCaUMsT0FENkI7QUFHckQsTUFBTUMsR0FBRyxHQUFHM0IsUUFBUSxHQUFHRixtQkFBSCxHQUF5Qk4scUJBQTdDOztBQUNBLE1BQU1vQyxVQUFVLGdCQUFHLHFFQUFDLHFFQUFELGtDQUFrQm5DLEtBQWxCO0FBQXlCLGFBQVMsRUFBRWtDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBbkI7O0FBRUEsTUFBSUQsT0FBSixFQUFhO0FBQ1gsd0JBQ0UscUVBQUMsOERBQUQ7QUFBTSxVQUFJLE1BQVY7QUFBVyxRQUFFLEVBQUUsRUFBZjtBQUFtQixRQUFFLEVBQUVELElBQUksSUFBSSxFQUEvQjtBQUFtQyxXQUFLLEVBQUU7QUFBRUkscUJBQWEsRUFBRTtBQUFqQixPQUExQztBQUFBLGdCQUNHRDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUtEOztBQUVELFNBQU9BLFVBQVA7QUFDRCxDQWZEOztPQUFNSixjO0FBaUJTLG1GQUFBTSw0Q0FBSyxDQUFDQyxJQUFOLENBQVdQLGNBQVgsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9mb3Jtcy5kMDk0MzgyMDhhOWJlODdiODc0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNhbGxiYWNrLCBDaGFuZ2VFdmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnYXBwUmVkdXgnO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJ2FwcFJlZHV4JztcclxuXHJcbmltcG9ydCB7IGZvcm1zQWN0aW9ucyB9IGZyb20gJ2FwcFJlZHV4L2Zvcm1zJztcclxuLy8gaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdzZXJ2aWNlcy9yZWR1Y2Vycyc7XHJcbi8vIGltcG9ydCB7IEZpZWxkVmFsdWVUeXBlIH0gZnJvbSAnLi9Gb3Jtcy5kJztcclxuLy8gaW1wb3J0IHsgb25DaGFuZ2VWYWx1ZSB9IGZyb20gJ3NlcnZpY2VzL2FjdGlvbnMvZm9ybXMnO1xyXG5cclxuLy8gaW1wb3J0IHsgRmllbGRUeXBlIH0gZnJvbSAnLi4vZm9ybVR5cGVzJztcclxuXHJcbmltcG9ydCB7IEZpZWxkVHlwZSwgRmllbGRWYWx1ZSB9IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvZm9ybVR5cGVzJztcclxuaW1wb3J0IEZpZWxkV3JhcHBlciBmcm9tICdjb21wb25lbnRzL0Zvcm1zL0ZpZWxkV3JhcHBlcic7XHJcblxyXG5jb25zdCBUZXh0SW5wdXQgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vVGV4dElucHV0JykpO1xyXG5jb25zdCBTZWxlY3QgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vU2VsZWN0JykpO1xyXG5jb25zdCBCdXR0b25Hcm91cCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9CdXR0b25Hcm91cCcpKTtcclxuY29uc3QgRGF0ZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9EYXRlJykpO1xyXG5cclxuY29uc3QgRmllbGRUeXBlTWFwID0ge1xyXG4gIHRleHQ6IFRleHRJbnB1dCxcclxuICBudW1iZXI6IFRleHRJbnB1dCxcclxuICBjdXJyZW5jeTogVGV4dElucHV0LFxyXG4gIHRleHRhcmVhOiBUZXh0SW5wdXQsXHJcbiAgbW9iaWxlOiBUZXh0SW5wdXQsXHJcbiAgbnJpYzogVGV4dElucHV0LFxyXG4gIGVtYWlsOiBUZXh0SW5wdXQsXHJcbiAgc2VsZWN0OiBTZWxlY3QsXHJcbiAgbXVsdGlfc2VsZWN0OiBTZWxlY3QsXHJcbiAgcmFkaW86IEJ1dHRvbkdyb3VwLFxyXG4gIGRhdGU6IERhdGUsXHJcbn07XHJcblxyXG5jb25zdCBGaWVsZEdlbmVyYXRvckRlZmF1bHQ6IFJlYWN0LkZDPEZpZWxkVHlwZT4gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB0eXBlOiBrZXlvZiB0eXBlb2YgRmllbGRUeXBlTWFwID1cclxuICAgIHByb3BzLnR5cGUgPT09ICdzZWxlY3QnICYmIHByb3BzLm9wdGlvbnMgJiYgcHJvcHMub3B0aW9ucz8ubGVuZ3RoIDw9IDMgPyAncmFkaW8nIDogcHJvcHMudHlwZTtcclxuICBjb25zdCBEeW5hbWljRmllbGQgPSBGaWVsZFR5cGVNYXBbdHlwZV07XHJcblxyXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBEeW5hbWljIHR5cGUgdG9vIGRpZmZpY3VsdCB0byBkZWR1Y2VcclxuICByZXR1cm4gPER5bmFtaWNGaWVsZCB7Li4ucHJvcHN9IHR5cGU9e3R5cGV9IC8+O1xyXG59O1xyXG5cclxuY29uc3QgRmllbGRHZW5lcmF0b3JSZWR1eDogUmVhY3QuRkM8RmllbGRUeXBlPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbmFtZSwgZm9ybU5hbWUgPSAnJywgYWRkaXRpb25hbE5hbWVzID0gW10gfSA9IHByb3BzO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2UgPSB1c2VDYWxsYmFjayhcclxuICAgIChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgaWYgKGZvcm1OYW1lKSB7XHJcbiAgICAgICAgZGlzcGF0Y2goXHJcbiAgICAgICAgICBmb3Jtc0FjdGlvbnMub25DaGFuZ2VWYWx1ZSh7XHJcbiAgICAgICAgICAgIGZvcm1OYW1lLFxyXG4gICAgICAgICAgICBrZXk6IG5hbWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUsXHJcbiAgICAgICAgICAgIHNwZWNpYWxGaWVsZDogcHJvcHMsXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbZGlzcGF0Y2gsIGZvcm1OYW1lLCBuYW1lLCBwcm9wc11cclxuICApO1xyXG5cclxuICBjb25zdCB2YWx1ZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZm9ybXMudmFsdWVzW2Zvcm1OYW1lXT8uW25hbWVdKTtcclxuICBjb25zdCBlcnJvciA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZm9ybXMuZXJyb3JzW2Zvcm1OYW1lXT8uW25hbWVdKTtcclxuICBjb25zdCBhZGRpdGlvbmFsVmFsdWVzOiBGaWVsZFZhbHVlW10gPSBbXTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRpdGlvbmFsTmFtZXMubGVuZ3RoIHx8IDA7ICsraSkge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXHJcbiAgICBjb25zdCBhZGRpdG9uYWxWYWx1ZSA9IHVzZUFwcFNlbGVjdG9yKFxyXG4gICAgICAoc3RhdGUpID0+IHN0YXRlLmZvcm1zLnZhbHVlc1tmb3JtTmFtZV1bYWRkaXRpb25hbE5hbWVzW2ldXVxyXG4gICAgKTtcclxuICAgIGFkZGl0aW9uYWxWYWx1ZXMucHVzaChhZGRpdG9uYWxWYWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB0eXBlOiBrZXlvZiB0eXBlb2YgRmllbGRUeXBlTWFwID1cclxuICAgIHByb3BzLnR5cGUgPT09ICdzZWxlY3QnICYmIHByb3BzLm9wdGlvbnMgJiYgcHJvcHMub3B0aW9ucz8ubGVuZ3RoIDw9IDMgPyAncmFkaW8nIDogcHJvcHMudHlwZTtcclxuICBjb25zdCBGaWVsZCA9IEZpZWxkVHlwZU1hcFt0eXBlXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGaWVsZFxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgIHZhbHVlPXt2YWx1ZX1cclxuICAgICAgZXJyb3I9e2Vycm9yfVxyXG4gICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgIGFkZGl0aW9uYWxWYWx1ZXM9e2FkZGl0aW9uYWxWYWx1ZXN9XHJcbiAgICAgIC8vIHNpemU9XCJzbWFsbFwiXHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBGaWVsZEdlbmVyYXRvcjogUmVhY3QuRkM8RmllbGRUeXBlPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgc2l6ZSwgZm9ybU5hbWUsIHVzZUdyaWQgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBKU1ggPSBmb3JtTmFtZSA/IEZpZWxkR2VuZXJhdG9yUmVkdXggOiBGaWVsZEdlbmVyYXRvckRlZmF1bHQ7XHJcbiAgY29uc3QgV3JhcHBlZEpTWCA9IDxGaWVsZFdyYXBwZXIgey4uLnByb3BzfSBDb21wb25lbnQ9e0pTWH0gLz47XHJcblxyXG4gIGlmICh1c2VHcmlkKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9e3NpemUgfHwgMTJ9IHN0eWxlPXt7IHBhZGRpbmdCb3R0b206IDAgfX0+XHJcbiAgICAgICAge1dyYXBwZWRKU1h9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gV3JhcHBlZEpTWDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRmllbGRHZW5lcmF0b3IpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9