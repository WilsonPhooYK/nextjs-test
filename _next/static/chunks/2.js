(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[2],{

/***/ "./node_modules/@material-ui/core/esm/ButtonGroup/ButtonGroup.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonGroup/ButtonGroup.js ***!
  \***********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Button */ "./node_modules/@material-ui/core/esm/Button/index.js");









 // Force a side effect so we don't have any override priority issue.
// eslint-disable-next-line no-unused-expressions

_Button__WEBPACK_IMPORTED_MODULE_9__["default"].styles;
var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      borderRadius: theme.shape.borderRadius
    },

    /* Styles applied to the root element if `variant="contained"`. */
    contained: {
      boxShadow: theme.shadows[2]
    },

    /* Styles applied to the root element if `disableElevation={true}`. */
    disableElevation: {
      boxShadow: 'none'
    },

    /* Pseudo-class applied to child elements if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      flexDirection: 'column'
    },

    /* Styles applied to the children. */
    grouped: {
      minWidth: 40
    },

    /* Styles applied to the children if `orientation="horizontal"`. */
    groupedHorizontal: {
      '&:not(:first-child)': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      '&:not(:last-child)': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      }
    },

    /* Styles applied to the children if `orientation="vertical"`. */
    groupedVertical: {
      '&:not(:first-child)': {
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0
      },
      '&:not(:last-child)': {
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
      }
    },

    /* Styles applied to the children if `variant="text"`. */
    groupedText: {},

    /* Styles applied to the children if `variant="text"` and `orientation="horizontal"`. */
    groupedTextHorizontal: {
      '&:not(:last-child)': {
        borderRight: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)')
      }
    },

    /* Styles applied to the children if `variant="text"` and `orientation="vertical"`. */
    groupedTextVertical: {
      '&:not(:last-child)': {
        borderBottom: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)')
      }
    },

    /* Styles applied to the children if `variant="text"` and `color="primary"`. */
    groupedTextPrimary: {
      '&:not(:last-child)': {
        borderColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.primary.main, 0.5)
      }
    },

    /* Styles applied to the children if `variant="text"` and `color="secondary"`. */
    groupedTextSecondary: {
      '&:not(:last-child)': {
        borderColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.secondary.main, 0.5)
      }
    },

    /* Styles applied to the children if `variant="outlined"`. */
    groupedOutlined: {},

    /* Styles applied to the children if `variant="outlined"` and `orientation="horizontal"`. */
    groupedOutlinedHorizontal: {
      '&:not(:first-child)': {
        marginLeft: -1
      },
      '&:not(:last-child)': {
        borderRightColor: 'transparent'
      }
    },

    /* Styles applied to the children if `variant="outlined"` and `orientation="vertical"`. */
    groupedOutlinedVertical: {
      '&:not(:first-child)': {
        marginTop: -1
      },
      '&:not(:last-child)': {
        borderBottomColor: 'transparent'
      }
    },

    /* Styles applied to the children if `variant="outlined"` and `color="primary"`. */
    groupedOutlinedPrimary: {
      '&:hover': {
        borderColor: theme.palette.primary.main
      }
    },

    /* Styles applied to the children if `variant="outlined"` and `color="secondary"`. */
    groupedOutlinedSecondary: {
      '&:hover': {
        borderColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the children if `variant="contained"`. */
    groupedContained: {
      boxShadow: 'none'
    },

    /* Styles applied to the children if `variant="contained"` and `orientation="horizontal"`. */
    groupedContainedHorizontal: {
      '&:not(:last-child)': {
        borderRight: "1px solid ".concat(theme.palette.grey[400]),
        '&$disabled': {
          borderRight: "1px solid ".concat(theme.palette.action.disabled)
        }
      }
    },

    /* Styles applied to the children if `variant="contained"` and `orientation="vertical"`. */
    groupedContainedVertical: {
      '&:not(:last-child)': {
        borderBottom: "1px solid ".concat(theme.palette.grey[400]),
        '&$disabled': {
          borderBottom: "1px solid ".concat(theme.palette.action.disabled)
        }
      }
    },

    /* Styles applied to the children if `variant="contained"` and `color="primary"`. */
    groupedContainedPrimary: {
      '&:not(:last-child)': {
        borderColor: theme.palette.primary.dark
      }
    },

    /* Styles applied to the children if `variant="contained"` and `color="secondary"`. */
    groupedContainedSecondary: {
      '&:not(:last-child)': {
        borderColor: theme.palette.secondary.dark
      }
    }
  };
};
var ButtonGroup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ButtonGroup(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disableElevati = props.disableElevation,
      disableElevation = _props$disableElevati === void 0 ? false : _props$disableElevati,
      _props$disableFocusRi = props.disableFocusRipple,
      disableFocusRipple = _props$disableFocusRi === void 0 ? false : _props$disableFocusRi,
      _props$disableRipple = props.disableRipple,
      disableRipple = _props$disableRipple === void 0 ? false : _props$disableRipple,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'outlined' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "disableElevation", "disableFocusRipple", "disableRipple", "fullWidth", "orientation", "size", "variant"]);

  var buttonClassName = Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.grouped, classes["grouped".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(orientation))], classes["grouped".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(variant))], classes["grouped".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(variant)).concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(orientation))], classes["grouped".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(variant)).concat(color !== 'default' ? Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color) : '')], disabled && classes.disabled);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: "group",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className, fullWidth && classes.fullWidth, disableElevation && classes.disableElevation, variant === 'contained' && classes.contained, orientation === 'vertical' && classes.vertical),
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child)) {
      return null;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isFragment"])(child)) {
        console.error(["Material-UI: The ButtonGroup component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(buttonClassName, child.props.className),
      color: child.props.color || color,
      disabled: child.props.disabled || disabled,
      disableElevation: child.props.disableElevation || disableElevation,
      disableFocusRipple: disableFocusRipple,
      disableRipple: disableRipple,
      fullWidth: fullWidth,
      size: child.props.size || size,
      variant: child.props.variant || variant
    });
  }));
});
 true ? ButtonGroup.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the button group.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the buttons will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, no elevation is used.
   */
  disableElevation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the button keyboard focus ripple will be disabled.
   */
  disableFocusRipple: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the button ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the buttons will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The group orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['horizontal', 'vertical']),

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['large', 'medium', 'small']),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['contained', 'outlined', 'text'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiButtonGroup'
})(ButtonGroup));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ButtonGroup/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/ButtonGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ButtonGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/ButtonGroup/ButtonGroup.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Forms/ButtonGroup/ButtonGroup.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".ButtonGroup_buttonGroup__X4DnD .MuiInput-formControl:before, .ButtonGroup_buttonGroup__X4DnD .MuiInput-formControl:after {\n  display: none;\n}\n.ButtonGroup_buttonGroup__X4DnD .MuiButtonGroup-grouped {\n  border-color: var(--color-light-grey);\n  border-radius: var(--border-radius-main);\n}", "",{"version":3,"sources":["webpack://ButtonGroup.module.scss"],"names":[],"mappings":"AAGM;EAEE,aAAA;AAHR;AAMI;EACE,qCAAA;EACA,wCAAA;AAJN","sourcesContent":[".buttonGroup {\r\n  :global {\r\n    .MuiInput-formControl {\r\n      &:before,\r\n      &:after {\r\n        display: none;\r\n      }\r\n    }\r\n    .MuiButtonGroup-grouped {\r\n      border-color: var(--color-light-grey);\r\n      border-radius: var(--border-radius-main);\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"buttonGroup": "ButtonGroup_buttonGroup__X4DnD"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./src/components/Forms/ButtonGroup/ButtonGroup.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/Forms/ButtonGroup/ButtonGroup.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./ButtonGroup.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/ButtonGroup/ButtonGroup.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./ButtonGroup.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/ButtonGroup/ButtonGroup.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./ButtonGroup.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/ButtonGroup/ButtonGroup.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Forms/ButtonGroup/ButtonGroup.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Forms/ButtonGroup/ButtonGroup.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ButtonGroup.module.scss */ "./src/components/Forms/ButtonGroup/ButtonGroup.module.scss");
/* harmony import */ var _ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\ButtonGroup\\ButtonGroup.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var ButtonGroupInner = function ButtonGroupInner(_ref) {
  var onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      options = _ref.options,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["onChange", "getOptionLabel", "options"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_5__["default"], {
    "aria-label": "button group",
    children: options.map(function (o) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: props.value === o ? 'contained' : 'outlined',
        color: "primary",
        onClick: function onClick() {
          return onChange && onChange({
            target: {
              // @ts-expect-error - Either string or number
              value: o
            }
          });
        },
        children: getOptionLabel(o)
      }, "option-".concat(o), false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }, _this);
};

_c = ButtonGroupInner;
var MemoButtonGroupInner = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(ButtonGroupInner);
_c2 = MemoButtonGroupInner;

var ButtonGroup = function ButtonGroup(_ref2) {
  _s();

  var value = _ref2.value,
      onChange = _ref2.onChange,
      getOptionLabel = _ref2.getOptionLabel,
      options = _ref2.options,
      name = _ref2.name,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, ["value", "onChange", "getOptionLabel", "options", "name"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(v) {
    setLocalValue(v.target.value);
  };

  var onChangeToUse = onChange || onLocalChange;
  var valueToUse = onChange ? value : localValue;
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!valueToUse) {
      onChangeToUse({
        target: {
          // @ts-expect-error - Either string or number
          value: options[0]
        }
      });
    }
  }, [valueToUse, onChangeToUse, options]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_9__["StylesProvider"], {
    injectFirst: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: _ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.buttonGroup,
      fullWidth: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, props), {}, {
        value: valueToUse,
        onChange: onChangeToUse,
        inputComponent: function inputComponent(props) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(MemoButtonGroupInner, _objectSpread(_objectSpread({}, props), {}, {
            name: name,
            options: options,
            getOptionLabel: getOptionLabel
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this);
        }
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_8__["default"], {
        margin: "dense",
        variant: "filled",
        children: "Well never share your email."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 72,
    columnNumber: 5
  }, _this);
};

_s(ButtonGroup, "ZhLZ/5IqYyp6CmqtpoLYvy+0VUg=");

_c3 = ButtonGroup;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(ButtonGroup));

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ButtonGroupInner");
$RefreshReg$(_c2, "MemoButtonGroupInner");
$RefreshReg$(_c3, "ButtonGroup");
$RefreshReg$(_c4, "%default%");

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

/***/ }),

/***/ "./src/components/Forms/ButtonGroup/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/Forms/ButtonGroup/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ButtonGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonGroup */ "./src/components/Forms/ButtonGroup/ButtonGroup.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ButtonGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9CdXR0b25Hcm91cC9CdXR0b25Hcm91cC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9CdXR0b25Hcm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvQnV0dG9uR3JvdXAvQnV0dG9uR3JvdXAubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm1zL0J1dHRvbkdyb3VwL0J1dHRvbkdyb3VwLm1vZHVsZS5zY3NzP2NkZDQiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm1zL0J1dHRvbkdyb3VwL0J1dHRvbkdyb3VwLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvQnV0dG9uR3JvdXAvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkJ1dHRvbkdyb3VwSW5uZXIiLCJvbkNoYW5nZSIsImdldE9wdGlvbkxhYmVsIiwib3B0aW9ucyIsInByb3BzIiwibWFwIiwibyIsInZhbHVlIiwidGFyZ2V0IiwiTWVtb0J1dHRvbkdyb3VwSW5uZXIiLCJtZW1vIiwiQnV0dG9uR3JvdXAiLCJuYW1lIiwidXNlU3RhdGUiLCJsb2NhbFZhbHVlIiwic2V0TG9jYWxWYWx1ZSIsIm9uTG9jYWxDaGFuZ2UiLCJ2Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJidXR0b25Hcm91cCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNnQztBQUMzRDtBQUNPO0FBQ0g7QUFDWDtBQUNxQjtBQUNLO0FBQ0o7QUFDZjtBQUMv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USxJQUZSO0FBR0UsbUJBQU8sRUFBRVQsT0FIWDtBQUlFLDBCQUFjLEVBQUVEO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQTtBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFjRSxxRUFBQyx3RUFBRDtBQUFnQixjQUFNLEVBQUMsT0FBdkI7QUFBK0IsZUFBTyxFQUFDLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0JELENBbEREOztHQUFNUyxXOztNQUFBQSxXO0FBb0RTLGtGQUFBRCxrREFBSSxDQUFDQyxXQUFELENBQW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuaW1wb3J0IHsgZmFkZSB9IGZyb20gJy4uL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJzsgLy8gRm9yY2UgYSBzaWRlIGVmZmVjdCBzbyB3ZSBkb24ndCBoYXZlIGFueSBvdmVycmlkZSBwcmlvcml0eSBpc3N1ZS5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblxuQnV0dG9uLnN0eWxlcztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXNcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImNvbnRhaW5lZFwiYC4gKi9cbiAgICBjb250YWluZWQ6IHtcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlRWxldmF0aW9uPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZUVsZXZhdGlvbjoge1xuICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gY2hpbGQgZWxlbWVudHMgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gICAgZnVsbFdpZHRoOiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG9yaWVudGF0aW9uPVwidmVydGljYWxcImAuICovXG4gICAgdmVydGljYWw6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgICBncm91cGVkOiB7XG4gICAgICBtaW5XaWR0aDogNDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGBvcmllbnRhdGlvbj1cImhvcml6b250YWxcImAuICovXG4gICAgZ3JvdXBlZEhvcml6b250YWw6IHtcbiAgICAgICcmOm5vdCg6Zmlyc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAwLFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAwXG4gICAgICB9LFxuICAgICAgJyY6bm90KDpsYXN0LWNoaWxkKSc6IHtcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDAsXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAwXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjaGlsZHJlbiBpZiBgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiYC4gKi9cbiAgICBncm91cGVkVmVydGljYWw6IHtcbiAgICAgICcmOm5vdCg6Zmlyc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogMCxcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogMFxuICAgICAgfSxcbiAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAwLFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAwXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjaGlsZHJlbiBpZiBgdmFyaWFudD1cInRleHRcImAuICovXG4gICAgZ3JvdXBlZFRleHQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGB2YXJpYW50PVwidGV4dFwiYCBhbmQgYG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiYC4gKi9cbiAgICBncm91cGVkVGV4dEhvcml6b250YWw6IHtcbiAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gJ3JnYmEoMCwgMCwgMCwgMC4yMyknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMyknKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2hpbGRyZW4gaWYgYHZhcmlhbnQ9XCJ0ZXh0XCJgIGFuZCBgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiYC4gKi9cbiAgICBncm91cGVkVGV4dFZlcnRpY2FsOiB7XG4gICAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAncmdiYSgwLCAwLCAwLCAwLjIzKScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIzKScpXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjaGlsZHJlbiBpZiBgdmFyaWFudD1cInRleHRcImAgYW5kIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgZ3JvdXBlZFRleHRQcmltYXJ5OiB7XG4gICAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgMC41KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2hpbGRyZW4gaWYgYHZhcmlhbnQ9XCJ0ZXh0XCJgIGFuZCBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgZ3JvdXBlZFRleHRTZWNvbmRhcnk6IHtcbiAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sIDAuNSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgZ3JvdXBlZE91dGxpbmVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjaGlsZHJlbiBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgIGFuZCBgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJgLiAqL1xuICAgIGdyb3VwZWRPdXRsaW5lZEhvcml6b250YWw6IHtcbiAgICAgICcmOm5vdCg6Zmlyc3QtY2hpbGQpJzoge1xuICAgICAgICBtYXJnaW5MZWZ0OiAtMVxuICAgICAgfSxcbiAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgIGJvcmRlclJpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAgYW5kIGBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJgLiAqL1xuICAgIGdyb3VwZWRPdXRsaW5lZFZlcnRpY2FsOiB7XG4gICAgICAnJjpub3QoOmZpcnN0LWNoaWxkKSc6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAtMVxuICAgICAgfSxcbiAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjaGlsZHJlbiBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgIGFuZCBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIGdyb3VwZWRPdXRsaW5lZFByaW1hcnk6IHtcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAgYW5kIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBncm91cGVkT3V0bGluZWRTZWNvbmRhcnk6IHtcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2hpbGRyZW4gaWYgYHZhcmlhbnQ9XCJjb250YWluZWRcImAuICovXG4gICAgZ3JvdXBlZENvbnRhaW5lZDoge1xuICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGB2YXJpYW50PVwiY29udGFpbmVkXCJgIGFuZCBgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJgLiAqL1xuICAgIGdyb3VwZWRDb250YWluZWRIb3Jpem9udGFsOiB7XG4gICAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJSaWdodDogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUuZ3JleVs0MDBdKSxcbiAgICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2hpbGRyZW4gaWYgYHZhcmlhbnQ9XCJjb250YWluZWRcImAgYW5kIGBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJgLiAqL1xuICAgIGdyb3VwZWRDb250YWluZWRWZXJ0aWNhbDoge1xuICAgICAgJyY6bm90KDpsYXN0LWNoaWxkKSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5ncmV5WzQwMF0pLFxuICAgICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2hpbGRyZW4gaWYgYHZhcmlhbnQ9XCJjb250YWluZWRcImAgYW5kIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgZ3JvdXBlZENvbnRhaW5lZFByaW1hcnk6IHtcbiAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFya1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2hpbGRyZW4gaWYgYHZhcmlhbnQ9XCJjb250YWluZWRcImAgYW5kIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBncm91cGVkQ29udGFpbmVkU2Vjb25kYXJ5OiB7XG4gICAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFya1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG52YXIgQnV0dG9uR3JvdXAgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBCdXR0b25Hcm91cChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAnZGVmYXVsdCcgOiBfcHJvcHMkY29sb3IsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZCA9IF9wcm9wcyRkaXNhYmxlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZWQsXG4gICAgICBfcHJvcHMkZGlzYWJsZUVsZXZhdGkgPSBwcm9wcy5kaXNhYmxlRWxldmF0aW9uLFxuICAgICAgZGlzYWJsZUVsZXZhdGlvbiA9IF9wcm9wcyRkaXNhYmxlRWxldmF0aSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUVsZXZhdGksXG4gICAgICBfcHJvcHMkZGlzYWJsZUZvY3VzUmkgPSBwcm9wcy5kaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgICBkaXNhYmxlRm9jdXNSaXBwbGUgPSBfcHJvcHMkZGlzYWJsZUZvY3VzUmkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVGb2N1c1JpLFxuICAgICAgX3Byb3BzJGRpc2FibGVSaXBwbGUgPSBwcm9wcy5kaXNhYmxlUmlwcGxlLFxuICAgICAgZGlzYWJsZVJpcHBsZSA9IF9wcm9wcyRkaXNhYmxlUmlwcGxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlUmlwcGxlLFxuICAgICAgX3Byb3BzJGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcyRmdWxsV2lkdGggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZ1bGxXaWR0aCxcbiAgICAgIF9wcm9wcyRvcmllbnRhdGlvbiA9IHByb3BzLm9yaWVudGF0aW9uLFxuICAgICAgb3JpZW50YXRpb24gPSBfcHJvcHMkb3JpZW50YXRpb24gPT09IHZvaWQgMCA/ICdob3Jpem9udGFsJyA6IF9wcm9wcyRvcmllbnRhdGlvbixcbiAgICAgIF9wcm9wcyRzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIHNpemUgPSBfcHJvcHMkc2l6ZSA9PT0gdm9pZCAwID8gJ21lZGl1bScgOiBfcHJvcHMkc2l6ZSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ291dGxpbmVkJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlRWxldmF0aW9uXCIsIFwiZGlzYWJsZUZvY3VzUmlwcGxlXCIsIFwiZGlzYWJsZVJpcHBsZVwiLCBcImZ1bGxXaWR0aFwiLCBcIm9yaWVudGF0aW9uXCIsIFwic2l6ZVwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBidXR0b25DbGFzc05hbWUgPSBjbHN4KGNsYXNzZXMuZ3JvdXBlZCwgY2xhc3Nlc1tcImdyb3VwZWRcIi5jb25jYXQoY2FwaXRhbGl6ZShvcmllbnRhdGlvbikpXSwgY2xhc3Nlc1tcImdyb3VwZWRcIi5jb25jYXQoY2FwaXRhbGl6ZSh2YXJpYW50KSldLCBjbGFzc2VzW1wiZ3JvdXBlZFwiLmNvbmNhdChjYXBpdGFsaXplKHZhcmlhbnQpKS5jb25jYXQoY2FwaXRhbGl6ZShvcmllbnRhdGlvbikpXSwgY2xhc3Nlc1tcImdyb3VwZWRcIi5jb25jYXQoY2FwaXRhbGl6ZSh2YXJpYW50KSkuY29uY2F0KGNvbG9yICE9PSAnZGVmYXVsdCcgPyBjYXBpdGFsaXplKGNvbG9yKSA6ICcnKV0sIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgcm9sZTogXCJncm91cFwiLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgZnVsbFdpZHRoICYmIGNsYXNzZXMuZnVsbFdpZHRoLCBkaXNhYmxlRWxldmF0aW9uICYmIGNsYXNzZXMuZGlzYWJsZUVsZXZhdGlvbiwgdmFyaWFudCA9PT0gJ2NvbnRhaW5lZCcgJiYgY2xhc3Nlcy5jb250YWluZWQsIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnICYmIGNsYXNzZXMudmVydGljYWwpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGlzRnJhZ21lbnQoY2hpbGQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSBCdXR0b25Hcm91cCBjb21wb25lbnQgZG9lc24ndCBhY2NlcHQgYSBGcmFnbWVudCBhcyBhIGNoaWxkLlwiLCAnQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGFycmF5IGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICBjbGFzc05hbWU6IGNsc3goYnV0dG9uQ2xhc3NOYW1lLCBjaGlsZC5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgY29sb3I6IGNoaWxkLnByb3BzLmNvbG9yIHx8IGNvbG9yLFxuICAgICAgZGlzYWJsZWQ6IGNoaWxkLnByb3BzLmRpc2FibGVkIHx8IGRpc2FibGVkLFxuICAgICAgZGlzYWJsZUVsZXZhdGlvbjogY2hpbGQucHJvcHMuZGlzYWJsZUVsZXZhdGlvbiB8fCBkaXNhYmxlRWxldmF0aW9uLFxuICAgICAgZGlzYWJsZUZvY3VzUmlwcGxlOiBkaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgICBkaXNhYmxlUmlwcGxlOiBkaXNhYmxlUmlwcGxlLFxuICAgICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgICBzaXplOiBjaGlsZC5wcm9wcy5zaXplIHx8IHNpemUsXG4gICAgICB2YXJpYW50OiBjaGlsZC5wcm9wcy52YXJpYW50IHx8IHZhcmlhbnRcbiAgICB9KTtcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBCdXR0b25Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uIGdyb3VwLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbnMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBubyBlbGV2YXRpb24gaXMgdXNlZC5cbiAgICovXG4gIGRpc2FibGVFbGV2YXRpb246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24ga2V5Ym9hcmQgZm9jdXMgcmlwcGxlIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlRm9jdXNSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gcmlwcGxlIGVmZmVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZVJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbnMgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgZ3JvdXAgb3JpZW50YXRpb24gKGxheW91dCBmbG93IGRpcmVjdGlvbikuXG4gICAqL1xuICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKSxcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGJ1dHRvbi5cbiAgICogYHNtYWxsYCBpcyBlcXVpdmFsZW50IHRvIHRoZSBkZW5zZSBidXR0b24gc3R5bGluZy5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ2xhcmdlJywgJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnY29udGFpbmVkJywgJ291dGxpbmVkJywgJ3RleHQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpQnV0dG9uR3JvdXAnXG59KShCdXR0b25Hcm91cCk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQnV0dG9uR3JvdXAnOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5CdXR0b25Hcm91cF9idXR0b25Hcm91cF9fWDREbkQgLk11aUlucHV0LWZvcm1Db250cm9sOmJlZm9yZSwgLkJ1dHRvbkdyb3VwX2J1dHRvbkdyb3VwX19YNERuRCAuTXVpSW5wdXQtZm9ybUNvbnRyb2w6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLkJ1dHRvbkdyb3VwX2J1dHRvbkdyb3VwX19YNERuRCAuTXVpQnV0dG9uR3JvdXAtZ3JvdXBlZCB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1tYWluKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0J1dHRvbkdyb3VwLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdNO0VBRUUsYUFBQTtBQUhSO0FBTUk7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0FBSk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ1dHRvbkdyb3VwIHtcXHJcXG4gIDpnbG9iYWwge1xcclxcbiAgICAuTXVpSW5wdXQtZm9ybUNvbnRyb2wge1xcclxcbiAgICAgICY6YmVmb3JlLFxcclxcbiAgICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLk11aUJ1dHRvbkdyb3VwLWdyb3VwZWQge1xcclxcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtZ3JleSk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1tYWluKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJidXR0b25Hcm91cFwiOiBcIkJ1dHRvbkdyb3VwX2J1dHRvbkdyb3VwX19YNERuRFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQnV0dG9uR3JvdXAubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0J1dHRvbkdyb3VwLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQnV0dG9uR3JvdXAubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgRkMsIHVzZVN0YXRlLCBtZW1vLCBDaGFuZ2VFdmVudEhhbmRsZXIsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQ29yZUJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcclxuaW1wb3J0IHsgU3R5bGVzUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uR3JvdXAubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIEJ1dHRvbkdyb3VwVHlwZTxUID0gc3RyaW5nIHwgbnVtYmVyPiB7XHJcbiAgdmFsdWU/OiBUO1xyXG4gIG9wdGlvbnM6IFRbXTtcclxuICBnZXRPcHRpb25MYWJlbDogKHZhbHVlOiBUKSA9PiBUO1xyXG4gIG9uQ2hhbmdlPzogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQnV0dG9uR3JvdXBJbm5lcjogRkM8QnV0dG9uR3JvdXBUeXBlPiA9ICh7IG9uQ2hhbmdlLCBnZXRPcHRpb25MYWJlbCwgb3B0aW9ucywgLi4ucHJvcHMgfSkgPT4gKFxyXG4gIDxDb3JlQnV0dG9uR3JvdXAgYXJpYS1sYWJlbD1cImJ1dHRvbiBncm91cFwiPlxyXG4gICAge29wdGlvbnMubWFwKChvKSA9PiAoXHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBrZXk9e2BvcHRpb24tJHtvfWB9XHJcbiAgICAgICAgdmFyaWFudD17cHJvcHMudmFsdWUgPT09IG8gPyAnY29udGFpbmVkJyA6ICdvdXRsaW5lZCd9XHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgb25DaGFuZ2UgJiZcclxuICAgICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICAgICAgdmFsdWU6IG8sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgPlxyXG4gICAgICAgIHtnZXRPcHRpb25MYWJlbChvKX1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICApKX1cclxuICA8L0NvcmVCdXR0b25Hcm91cD5cclxuKTtcclxuXHJcbmNvbnN0IE1lbW9CdXR0b25Hcm91cElubmVyID0gbWVtbyhCdXR0b25Hcm91cElubmVyKTtcclxuXHJcbmNvbnN0IEJ1dHRvbkdyb3VwOiBGQzxCdXR0b25Hcm91cFR5cGU+ID0gKHtcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICBnZXRPcHRpb25MYWJlbCxcclxuICBvcHRpb25zLFxyXG4gIG5hbWUsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPEJ1dHRvbkdyb3VwVHlwZVsndmFsdWUnXT4oKTtcclxuXHJcbiAgY29uc3Qgb25Mb2NhbENoYW5nZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gKHYpID0+IHtcclxuICAgIHNldExvY2FsVmFsdWUodi50YXJnZXQudmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uQ2hhbmdlVG9Vc2U6IENoYW5nZUV2ZW50SGFuZGxlcjxIVE1MSW5wdXRFbGVtZW50PiA9IG9uQ2hhbmdlIHx8IG9uTG9jYWxDaGFuZ2U7XHJcbiAgY29uc3QgdmFsdWVUb1VzZSA9IG9uQ2hhbmdlID8gdmFsdWUgOiBsb2NhbFZhbHVlO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF2YWx1ZVRvVXNlKSB7XHJcbiAgICAgIG9uQ2hhbmdlVG9Vc2Uoe1xyXG4gICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICB2YWx1ZTogb3B0aW9uc1swXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbdmFsdWVUb1VzZSwgb25DaGFuZ2VUb1VzZSwgb3B0aW9uc10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlc1Byb3ZpZGVyIGluamVjdEZpcnN0PlxyXG4gICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9IGZ1bGxXaWR0aD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZVRvVXNlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVG9Vc2V9XHJcbiAgICAgICAgICBpbnB1dENvbXBvbmVudD17KHByb3BzKSA9PiAoXHJcbiAgICAgICAgICAgIDxNZW1vQnV0dG9uR3JvdXBJbm5lclxyXG4gICAgICAgICAgICAgIHsuLi5wcm9wc31cclxuICAgICAgICAgICAgICBuYW1lPXtuYW1lfVxyXG4gICAgICAgICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9e2dldE9wdGlvbkxhYmVsfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxGb3JtSGVscGVyVGV4dCBtYXJnaW49XCJkZW5zZVwiIHZhcmlhbnQ9XCJmaWxsZWRcIj5cclxuICAgICAgICAgIFdlbGwgbmV2ZXIgc2hhcmUgeW91ciBlbWFpbC5cclxuICAgICAgICA8L0Zvcm1IZWxwZXJUZXh0PlxyXG4gICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgPC9TdHlsZXNQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhCdXR0b25Hcm91cCk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0J1dHRvbkdyb3VwJztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==