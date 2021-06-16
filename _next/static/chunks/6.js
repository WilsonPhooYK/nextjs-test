(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[6],{

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

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/FormControl.js ***!
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _InputBase_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../InputBase/utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/isMuiElement */ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js");
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");










var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'inline-flex',
    flexDirection: 'column',
    position: 'relative',
    // Reset fieldset default style.
    minWidth: 0,
    padding: 0,
    margin: 0,
    border: 0,
    verticalAlign: 'top' // Fix alignment issue on Safari.

  },

  /* Styles applied to the root element if `margin="normal"`. */
  marginNormal: {
    marginTop: 16,
    marginBottom: 8
  },

  /* Styles applied to the root element if `margin="dense"`. */
  marginDense: {
    marginTop: 8,
    marginBottom: 4
  },

  /* Styles applied to the root element if `fullWidth={true}`. */
  fullWidth: {
    width: '100%'
  }
};
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * You can find one composition example below and more going to [the demos](/components/text-fields/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️Only one input can be used within a FormControl.
 */

var FormControl = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FormControl(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      visuallyFocused = props.focused,
      _props$hiddenLabel = props.hiddenLabel,
      hiddenLabel = _props$hiddenLabel === void 0 ? false : _props$hiddenLabel,
      _props$margin = props.margin,
      margin = _props$margin === void 0 ? 'none' : _props$margin,
      _props$required = props.required,
      required = _props$required === void 0 ? false : _props$required,
      size = props.size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'standard' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["children", "classes", "className", "color", "component", "disabled", "error", "fullWidth", "focused", "hiddenLabel", "margin", "required", "size", "variant"]);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialAdornedStart = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child) {
        if (!Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['Input', 'Select'])) {
          return;
        }

        var input = Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['Select']) ? child.props.input : child;

        if (input && Object(_InputBase_utils__WEBPACK_IMPORTED_MODULE_5__["isAdornedStart"])(input.props)) {
          initialAdornedStart = true;
        }
      });
    }

    return initialAdornedStart;
  }),
      adornedStart = _React$useState[0],
      setAdornedStart = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](function () {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    var initialFilled = false;

    if (children) {
      react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(children, function (child) {
        if (!Object(_utils_isMuiElement__WEBPACK_IMPORTED_MODULE_8__["default"])(child, ['Input', 'Select'])) {
          return;
        }

        if (Object(_InputBase_utils__WEBPACK_IMPORTED_MODULE_5__["isFilled"])(child.props, true)) {
          initialFilled = true;
        }
      });
    }

    return initialFilled;
  }),
      filled = _React$useState2[0],
      setFilled = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](false),
      _focused = _React$useState3[0],
      setFocused = _React$useState3[1];

  var focused = visuallyFocused !== undefined ? visuallyFocused : _focused;

  if (disabled && focused) {
    setFocused(false);
  }

  var registerEffect;

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var registeredInput = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](false);

    registerEffect = function registerEffect() {
      if (registeredInput.current) {
        console.error(['Material-UI: There are multiple InputBase components inside a FormControl.', 'This is not supported. It might cause infinite rendering loops.', 'Only use one InputBase.'].join('\n'));
      }

      registeredInput.current = true;
      return function () {
        registeredInput.current = false;
      };
    };
  }

  var onFilled = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    setFilled(true);
  }, []);
  var onEmpty = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    setFilled(false);
  }, []);
  var childContext = {
    adornedStart: adornedStart,
    setAdornedStart: setAdornedStart,
    color: color,
    disabled: disabled,
    error: error,
    filled: filled,
    focused: focused,
    fullWidth: fullWidth,
    hiddenLabel: hiddenLabel,
    margin: (size === 'small' ? 'dense' : undefined) || margin,
    onBlur: function onBlur() {
      setFocused(false);
    },
    onEmpty: onEmpty,
    onFilled: onFilled,
    onFocus: function onFocus() {
      setFocused(true);
    },
    registerEffect: registerEffect,
    required: required,
    variant: variant
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_FormControlContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
    value: childContext
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, margin !== 'none' && classes["margin".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_7__["default"])(margin))], fullWidth && classes.fullWidth),
    ref: ref
  }, other), children));
});
 true ? FormControl.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The contents of the form control.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the component will be displayed in focused state.
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the label will be hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   */
  hiddenLabel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none', 'normal']),

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The size of the text field.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['medium', 'small']),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiFormControl'
})(FormControl));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js ***!
  \******************************************************************************/
/*! exports provided: useFormControl, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFormControl", function() { return useFormControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var FormControlContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]();

if (true) {
  FormControlContext.displayName = 'FormControlContext';
}

function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](FormControlContext);
}
/* harmony default export */ __webpack_exports__["default"] = (FormControlContext);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/formControlState.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formControlState; });
function formControlState(_ref) {
  var props = _ref.props,
      states = _ref.states,
      muiFormControl = _ref.muiFormControl;
  return states.reduce(function (acc, state) {
    acc[state] = props[state];

    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }

    return acc;
  }, {});
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/index.js ***!
  \*****************************************************************/
/*! exports provided: default, useFormControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormControl__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFormControl", function() { return _useFormControl__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControl/useFormControl.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useFormControl; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");


function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__["useContext"](_FormControlContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js ***!
  \*****************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      color: theme.palette.text.secondary
    }, theme.typography.caption, {
      textAlign: 'left',
      marginTop: 3,
      margin: 0,
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    }),

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `margin="dense"`. */
    marginDense: {
      marginTop: 4
    },

    /* Styles applied to the root element if `variant="filled"` or `variant="outlined"`. */
    contained: {
      marginLeft: 14,
      marginRight: 14
    },

    /* Pseudo-class applied to the root element if `focused={true}`. */
    focused: {},

    /* Pseudo-class applied to the root element if `filled={true}`. */
    filled: {},

    /* Pseudo-class applied to the root element if `required={true}`. */
    required: {}
  };
};
var FormHelperText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function FormHelperText(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'p' : _props$component,
      disabled = props.disabled,
      error = props.error,
      filled = props.filled,
      focused = props.focused,
      margin = props.margin,
      required = props.required,
      variant = props.variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children", "classes", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"]);

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_5__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['variant', 'margin', 'disabled', 'error', 'filled', 'focused', 'required']
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, (fcs.variant === 'filled' || fcs.variant === 'outlined') && classes.contained, className, fcs.disabled && classes.disabled, fcs.error && classes.error, fcs.filled && classes.filled, fcs.focused && classes.focused, fcs.required && classes.required, fcs.margin === 'dense' && classes.marginDense),
    ref: ref
  }, other), children === ' ' ?
  /*#__PURE__*/
  // eslint-disable-next-line react/no-danger
  react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    dangerouslySetInnerHTML: {
      __html: '&#8203;'
    }
  }) : children);
});
 true ? FormHelperText.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense']),

  /**
   * If `true`, the helper text should use required classes key.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['filled', 'outlined', 'standard'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiFormHelperText'
})(FormHelperText));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormHelperText/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormHelperText/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormHelperText__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/FormHelperText.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormHelperText__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Input/Input.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Input/Input.js ***!
  \***********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../InputBase */ "./node_modules/@material-ui/core/esm/InputBase/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");








var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return {
    /* Styles applied to the root element. */
    root: {
      position: 'relative'
    },

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {
      'label + &': {
        marginTop: 16
      }
    },

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if color secondary. */
    colorSecondary: {
      '&$underline:after': {
        borderBottomColor: theme.palette.secondary.main
      }
    },

    /* Styles applied to the root element if `disableUnderline={false}`. */
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary.main),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE 11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):before': {
        borderBottom: "2px solid ".concat(theme.palette.text.primary),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          borderBottom: "1px solid ".concat(bottomLineColor)
        }
      },
      '&$disabled:before': {
        borderBottomStyle: 'dotted'
      }
    },

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {},

    /* Styles applied to the `input` element. */
    input: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {},

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {},

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {}
  };
};
var Input = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Input(props, ref) {
  var disableUnderline = props.disableUnderline,
      classes = props.classes,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["disableUnderline", "classes", "fullWidth", "inputComponent", "multiline", "type"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_InputBase__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    classes: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes, {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, !disableUnderline && classes.underline),
      underline: null
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other));
});
 true ? Input.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
Input.muiName = 'Input';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiInput'
})(Input));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Input/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Input/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./node_modules/@material-ui/core/esm/Input/Input.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Input__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/InputBase.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/formControlState */ "./node_modules/@material-ui/core/esm/FormControl/formControlState.js");
/* harmony import */ var _FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FormControl/FormControlContext */ "./node_modules/@material-ui/core/esm/FormControl/FormControlContext.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils */ "./node_modules/@material-ui/core/esm/InputBase/utils.js");




/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */











var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: '0 !important'
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  return {
    '@global': {
      '@keyframes mui-auto-fill': {},
      '@keyframes mui-auto-fill-cancel': {}
    },

    /* Styles applied to the root element. */
    root: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, theme.typography.body1, {
      color: theme.palette.text.primary,
      lineHeight: '1.1876em',
      // Reset (19px), match the native input line-height
      boxSizing: 'border-box',
      // Prevent padding issue with fullWidth.
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      alignItems: 'center',
      '&$disabled': {
        color: theme.palette.text.disabled,
        cursor: 'default'
      }
    }),

    /* Styles applied to the root element if the component is a descendant of `FormControl`. */
    formControl: {},

    /* Styles applied to the root element if the component is focused. */
    focused: {},

    /* Styles applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `startAdornment` is provided. */
    adornedStart: {},

    /* Styles applied to the root element if `endAdornment` is provided. */
    adornedEnd: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {},

    /* Styles applied to the `input` element if `margin="dense"`. */
    marginDense: {},

    /* Styles applied to the root element if `multiline={true}`. */
    multiline: {
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      '&$marginDense': {
        paddingTop: 4 - 1
      }
    },

    /* Styles applied to the root element if the color is secondary. */
    colorSecondary: {},

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Styles applied to the `input` element. */
    input: {
      font: 'inherit',
      letterSpacing: 'inherit',
      color: 'currentColor',
      padding: "".concat(8 - 2, "px 0 ").concat(8 - 1, "px"),
      border: 0,
      boxSizing: 'content-box',
      background: 'none',
      height: '1.1876em',
      // Reset (19px), match the native input line-height
      margin: 0,
      // Reset for Safari
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      width: '100%',
      // Fix IE 11 width issue
      animationName: 'mui-auto-fill-cancel',
      animationDuration: '10ms',
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      },
      '&:-webkit-autofill': {
        animationDuration: '5000s',
        animationName: 'mui-auto-fill'
      }
    },

    /* Styles applied to the `input` element if `margin="dense"`. */
    inputMarginDense: {
      paddingTop: 4 - 1
    },

    /* Styles applied to the `input` element if `multiline={true}`. */
    inputMultiline: {
      height: 'auto',
      resize: 'none',
      padding: 0
    },

    /* Styles applied to the `input` element if `type="search"`. */
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    },

    /* Styles applied to the `input` element if `startAdornment` is provided. */
    inputAdornedStart: {},

    /* Styles applied to the `input` element if `endAdornment` is provided. */
    inputAdornedEnd: {},

    /* Styles applied to the `input` element if `hiddenLabel={true}`. */
    inputHiddenLabel: {}
  };
};
var useEnhancedEffect = typeof window === 'undefined' ? react__WEBPACK_IMPORTED_MODULE_3__["useEffect"] : react__WEBPACK_IMPORTED_MODULE_3__["useLayoutEffect"];
/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */

var InputBase = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function InputBase(props, ref) {
  var ariaDescribedby = props['aria-describedby'],
      autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      classes = props.classes,
      className = props.className,
      color = props.color,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      endAdornment = props.endAdornment,
      error = props.error,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      id = props.id,
      _props$inputComponent = props.inputComponent,
      inputComponent = _props$inputComponent === void 0 ? 'input' : _props$inputComponent,
      _props$inputProps = props.inputProps,
      inputPropsProp = _props$inputProps === void 0 ? {} : _props$inputProps,
      inputRefProp = props.inputRef,
      margin = props.margin,
      _props$multiline = props.multiline,
      multiline = _props$multiline === void 0 ? false : _props$multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onClick = props.onClick,
      onFocus = props.onFocus,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      placeholder = props.placeholder,
      readOnly = props.readOnly,
      renderSuffix = props.renderSuffix,
      rows = props.rows,
      rowsMax = props.rowsMax,
      rowsMin = props.rowsMin,
      startAdornment = props.startAdornment,
      _props$type = props.type,
      type = _props$type === void 0 ? 'text' : _props$type,
      valueProp = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["aria-describedby", "autoComplete", "autoFocus", "classes", "className", "color", "defaultValue", "disabled", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "rowsMax", "rowsMin", "startAdornment", "type", "value"]);

  var value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var handleInputRefWarning = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (instance) {
    if (true) {
      if (instance && instance.nodeName !== 'INPUT' && !instance.focus) {
        console.error(['Material-UI: You have provided a `inputComponent` to the input component', 'that does not correctly handle the `inputRef` prop.', 'Make sure the `inputRef` prop is called with a HTMLInputElement.'].join('\n'));
      }
    }
  }, []);
  var handleInputPropsRefProp = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(inputPropsProp.ref, handleInputRefWarning);
  var handleInputRefProp = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(inputRefProp, handleInputPropsRefProp);
  var handleInputRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(inputRef, handleInputRefProp);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false),
      focused = _React$useState[0],
      setFocused = _React$useState[1];

  var muiFormControl = Object(_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__["useFormControl"])();

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
      if (muiFormControl) {
        return muiFormControl.registerEffect();
      }

      return undefined;
    }, [muiFormControl]);
  }

  var fcs = Object(_FormControl_formControlState__WEBPACK_IMPORTED_MODULE_6__["default"])({
    props: props,
    muiFormControl: muiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'margin', 'required', 'filled']
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused; // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);

      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  var onFilled = muiFormControl && muiFormControl.onFilled;
  var onEmpty = muiFormControl && muiFormControl.onEmpty;
  var checkDirty = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function (obj) {
    if (Object(_utils__WEBPACK_IMPORTED_MODULE_12__["isFilled"])(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect(function () {
    if (isControlled) {
      checkDirty({
        value: value
      });
    }
  }, [value, checkDirty, isControlled]);

  var handleFocus = function handleFocus(event) {
    // Fix a bug with IE 11 where the focus/blur events are triggered
    // while the input is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }

    if (onFocus) {
      onFocus(event);
    }

    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };

  var handleChange = function handleChange(event) {
    if (!isControlled) {
      var element = event.target || inputRef.current;

      if (element == null) {
        throw new Error( true ? "Material-UI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://material-ui.com/r/input-component-ref-interface for more info." : undefined);
      }

      checkDirty({
        value: element.value
      });
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (inputPropsProp.onChange) {
      inputPropsProp.onChange.apply(inputPropsProp, [event].concat(args));
    } // Perform in the willUpdate


    if (onChange) {
      onChange.apply(void 0, [event].concat(args));
    }
  }; // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).


  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    checkDirty(inputRef.current);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  var handleClick = function handleClick(event) {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    if (onClick) {
      onClick(event);
    }
  };

  var InputComponent = inputComponent;

  var inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, inputPropsProp, {
    ref: handleInputRef
  });

  if (typeof InputComponent !== 'string') {
    inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      // Rename ref to inputRef as we don't know the
      // provided `inputComponent` structure.
      inputRef: handleInputRef,
      type: type
    }, inputProps, {
      ref: null
    });
  } else if (multiline) {
    if (rows && !rowsMax && !rowsMin) {
      InputComponent = 'textarea';
    } else {
      inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        rows: rows,
        rowsMax: rowsMax
      }, inputProps);
      InputComponent = _TextareaAutosize__WEBPACK_IMPORTED_MODULE_11__["default"];
    }
  } else {
    inputProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
      type: type
    }, inputProps);
  }

  var handleAutoFill = function handleAutoFill(event) {
    // Provide a fake value as Chrome might not let you access it for security reasons.
    checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
      value: 'x'
    });
  };

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__["default"])(fcs.color || 'primary'))], className, fcs.disabled && classes.disabled, fcs.error && classes.error, fullWidth && classes.fullWidth, fcs.focused && classes.focused, muiFormControl && classes.formControl, multiline && classes.multiline, startAdornment && classes.adornedStart, endAdornment && classes.adornedEnd, fcs.margin === 'dense' && classes.marginDense),
    onClick: handleClick,
    ref: ref
  }, other), startAdornment, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_FormControl_FormControlContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: null
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](InputComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    "aria-invalid": fcs.error,
    "aria-describedby": ariaDescribedby,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    disabled: fcs.disabled,
    id: id,
    onAnimationStart: handleAutoFill,
    name: name,
    placeholder: placeholder,
    readOnly: readOnly,
    required: fcs.required,
    rows: rows,
    value: value,
    onKeyDown: onKeyDown,
    onKeyUp: onKeyUp
  }, inputProps, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.input, inputPropsProp.className, fcs.disabled && classes.disabled, multiline && classes.inputMultiline, fcs.hiddenLabel && classes.inputHiddenLabel, startAdornment && classes.inputAdornedStart, endAdornment && classes.inputAdornedEnd, type === 'search' && classes.inputTypeSearch, fcs.margin === 'dense' && classes.inputMarginDense),
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus
  }))), endAdornment, renderSuffix ? renderSuffix(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, fcs, {
    startAdornment: startAdornment
  })) : null);
});
 true ? InputBase.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  'aria-describedby': prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

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
  color: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['primary', 'secondary']),

  /**
   * The default `input` element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * If `true`, the `input` element will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   */
  inputComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_2__["refType"],

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Callback fired when the input is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  renderSuffix: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  rowsMin: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiInputBase'
})(InputBase));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InputBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InputBase */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _InputBase__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/InputBase/utils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/InputBase/utils.js ***!
  \***************************************************************/
/*! exports provided: hasValue, isFilled, isAdornedStart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasValue", function() { return hasValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilled", function() { return isFilled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAdornedStart", function() { return isAdornedStart; });
// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.

function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.

function isAdornedStart(obj) {
  return obj.startAdornment;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");







function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_2__["useEffect"];
var styles = {
  /* Styles applied to the shadow textarea element. */
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
var TextareaAutosize = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TextareaAutosize(props, ref) {
  var onChange = props.onChange,
      rows = props.rows,
      rowsMax = props.rowsMax,
      _props$rowsMin = props.rowsMin,
      rowsMinProp = _props$rowsMin === void 0 ? 1 : _props$rowsMin,
      style = props.style,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["onChange", "rows", "rowsMax", "rowsMin", "style", "value"]);

  var rowsMin = rows || rowsMinProp;

  var _React$useRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](value != null),
      isControlled = _React$useRef.current;

  var inputRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_5__["default"])(ref, inputRef);
  var shadowRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var renders = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](0);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"]({}),
      state = _React$useState[0],
      setState = _React$useState[1];

  var syncHeight = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    var input = inputRef.current;
    var computedStyle = window.getComputedStyle(input);
    var inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || 'x';

    if (inputShallow.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      inputShallow.value += ' ';
    }

    var boxSizing = computedStyle['box-sizing'];
    var padding = getStyleValue(computedStyle, 'padding-bottom') + getStyleValue(computedStyle, 'padding-top');
    var border = getStyleValue(computedStyle, 'border-bottom-width') + getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

    var innerHeight = inputShallow.scrollHeight - padding; // Measure height of a textarea with a single row

    inputShallow.value = 'x';
    var singleRowHeight = inputShallow.scrollHeight - padding; // The height of the outer content

    var outerHeight = innerHeight;

    if (rowsMin) {
      outerHeight = Math.max(Number(rowsMin) * singleRowHeight, outerHeight);
    }

    if (rowsMax) {
      outerHeight = Math.min(Number(rowsMax) * singleRowHeight, outerHeight);
    }

    outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

    var outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    var overflow = Math.abs(outerHeight - innerHeight) <= 1;
    setState(function (prevState) {
      // Need a large enough difference to update the height.
      // This prevents infinite rendering loop.
      if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
        renders.current += 1;
        return {
          overflow: overflow,
          outerHeightStyle: outerHeightStyle
        };
      }

      if (true) {
        if (renders.current === 20) {
          console.error(['Material-UI: Too many re-renders. The layout is unstable.', 'TextareaAutosize limits the number of renders to prevent an infinite loop.'].join('\n'));
        }
      }

      return prevState;
    });
  }, [rowsMax, rowsMin, props.placeholder]);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    var handleResize = Object(_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
      renders.current = 0;
      syncHeight();
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resize', handleResize);
    };
  }, [syncHeight]);
  useEnhancedEffect(function () {
    syncHeight();
  });
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    renders.current = 0;
  }, [value]);

  var handleChange = function handleChange(event) {
    renders.current = 0;

    if (!isControlled) {
      syncHeight();
    }

    if (onChange) {
      onChange(event);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("textarea", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: value,
    onChange: handleChange,
    ref: handleRef // Apply the rows prop to get a "correct" first SSR paint
    ,
    rows: rowsMin,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      height: state.outerHeightStyle,
      // Need a large enough difference to allow scrolling.
      // This prevents infinite rendering loop.
      overflow: state.overflow ? 'hidden' : null
    }, style)
  }, other)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("textarea", {
    "aria-hidden": true,
    className: props.className,
    readOnly: true,
    ref: shadowRef,
    tabIndex: -1,
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styles.shadow, style)
  }));
});
 true ? TextareaAutosize.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * @ignore
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Use `rowsMin` instead. The prop will be removed in v5.
   *
   * @deprecated
   */
  rows: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Maximum number of rows to display.
   */
  rowsMax: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * Minimum number of rows to display.
   */
  rowsMin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string]),

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (TextareaAutosize);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/TextareaAutosize/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/TextareaAutosize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextareaAutosize__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createMuiStrictModeTheme; });
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");


function createMuiStrictModeTheme(options) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__["default"].apply(void 0, [Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_0__["deepmerge"])({
    unstable_strictMode: true
  }, options)].concat(args));
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/createStyles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/createStyles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createStyles; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
 // let warnOnce = false;
// To remove in v5

function createStyles(styles) {
  // warning(
  //   warnOnce,
  //   [
  //     'Material-UI: createStyles from @material-ui/core/styles is deprecated.',
  //     'Please use @material-ui/styles/createStyles',
  //   ].join('\n'),
  // );
  // warnOnce = true;
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["createStyles"])(styles);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/cssUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/cssUtils.js ***!
  \***************************************************************/
/*! exports provided: isUnitless, getUnit, toUnitless, convertLength, alignProperty, fontGrid, responsiveProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUnitless", function() { return isUnitless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnit", function() { return getUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toUnitless", function() { return toUnitless; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertLength", function() { return convertLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignProperty", function() { return alignProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontGrid", function() { return fontGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsiveProperty", function() { return responsiveProperty; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");

function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
} // Ported from Compass
// https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
// Emulate the sass function "unit"

function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
} // Emulate the sass function "unitless"

function toUnitless(length) {
  return parseFloat(length);
} // Convert any CSS <length> or <percentage> value to any another.
// From https://github.com/KyleAMathews/convert-css-length

function convertLength(baseFontSize) {
  return function (length, toUnit) {
    var fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

    if (fromUnit === toUnit) {
      return length;
    } // Convert input length to pixels.


    var pxLength = toUnitless(length);

    if (fromUnit !== 'px') {
      if (fromUnit === 'em') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
      } else if (fromUnit === 'rem') {
        pxLength = toUnitless(length) * toUnitless(baseFontSize);
        return length;
      }
    } // Convert length in pixels to the output unit


    var outputLength = pxLength;

    if (toUnit !== 'px') {
      if (toUnit === 'em') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === 'rem') {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length;
      }
    }

    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty(_ref) {
  var size = _ref.size,
      grid = _ref.grid;
  var sizeBelow = size - size % grid;
  var sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
} // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
// lineHeight falls under a x pixels grid, 4px in the case of Material Design,
// without changing the relative line height

function fontGrid(_ref2) {
  var lineHeight = _ref2.lineHeight,
      pixels = _ref2.pixels,
      htmlFontSize = _ref2.htmlFontSize;
  return pixels / (lineHeight * htmlFontSize);
}
/**
 * generate a responsive version of a given CSS property
 * @example
 * responsiveProperty({
 *   cssProperty: 'fontSize',
 *   min: 15,
 *   max: 20,
 *   unit: 'px',
 *   breakpoints: [300, 600],
 * })
 *
 * // this returns
 *
 * {
 *   fontSize: '15px',
 *   '@media (min-width:300px)': {
 *     fontSize: '17.5px',
 *   },
 *   '@media (min-width:600px)': {
 *     fontSize: '20px',
 *   },
 * }
 *
 * @param {Object} params
 * @param {string} params.cssProperty - The CSS property to be made responsive
 * @param {number} params.min - The smallest value of the CSS property
 * @param {number} params.max - The largest value of the CSS property
 * @param {string} [params.unit] - The unit to be used for the CSS property
 * @param {Array.number} [params.breakpoints]  - An array of breakpoints
 * @param {number} [params.alignStep] - Round scaled value to fall under this grid
 * @returns {Object} responsive styles for {params.cssProperty}
 */

function responsiveProperty(_ref3) {
  var cssProperty = _ref3.cssProperty,
      min = _ref3.min,
      max = _ref3.max,
      _ref3$unit = _ref3.unit,
      unit = _ref3$unit === void 0 ? 'rem' : _ref3$unit,
      _ref3$breakpoints = _ref3.breakpoints,
      breakpoints = _ref3$breakpoints === void 0 ? [600, 960, 1280] : _ref3$breakpoints,
      _ref3$transform = _ref3.transform,
      transform = _ref3$transform === void 0 ? null : _ref3$transform;

  var output = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cssProperty, "".concat(min).concat(unit));

  var factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach(function (breakpoint) {
    var value = min + factor * breakpoint;

    if (transform !== null) {
      value = transform(value);
    }

    output["@media (min-width:".concat(breakpoint, "px)")] = Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cssProperty, "".concat(Math.round(value * 10000) / 10000).concat(unit));
  });
  return output;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/index.js ***!
  \************************************************************/
/*! exports provided: hexToRgb, rgbToHex, hslToRgb, decomposeColor, recomposeColor, getContrastRatio, getLuminance, emphasize, fade, darken, lighten, createMuiTheme, unstable_createMuiStrictModeTheme, createStyles, makeStyles, responsiveFontSizes, styled, easing, duration, useTheme, withStyles, withTheme, createGenerateClassName, jssPreset, ServerStyleSheets, StylesProvider, MuiThemeProvider, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colorManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["hexToRgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["rgbToHex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hslToRgb", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["hslToRgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decomposeColor", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["decomposeColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recomposeColor", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["recomposeColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getContrastRatio", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["getContrastRatio"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLuminance", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["getLuminance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "emphasize", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["emphasize"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fade", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["fade"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darken", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["darken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lighten", function() { return _colorManipulator__WEBPACK_IMPORTED_MODULE_0__["lighten"]; });

/* harmony import */ var _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMuiTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createMuiTheme", function() { return _createMuiTheme__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createMuiStrictModeTheme */ "./node_modules/@material-ui/core/esm/styles/createMuiStrictModeTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_createMuiStrictModeTheme", function() { return _createMuiStrictModeTheme__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _createStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createStyles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createStyles", function() { return _createStyles__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _makeStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./makeStyles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeStyles", function() { return _makeStyles__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./responsiveFontSizes */ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "responsiveFontSizes", function() { return _responsiveFontSizes__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styled */ "./node_modules/@material-ui/core/esm/styles/styled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return _styled__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return _transitions__WEBPACK_IMPORTED_MODULE_7__["easing"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "duration", function() { return _transitions__WEBPACK_IMPORTED_MODULE_7__["duration"]; });

/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return _withStyles__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _withTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./withTheme */ "./node_modules/@material-ui/core/esm/styles/withTheme.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return _withTheme__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGenerateClassName", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["createGenerateClassName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jssPreset", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["jssPreset"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheets", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["ServerStyleSheets"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesProvider", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["StylesProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MuiThemeProvider", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return _material_ui_styles__WEBPACK_IMPORTED_MODULE_11__["ThemeProvider"]; });


 // eslint-disable-next-line camelcase












/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/makeStyles.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/makeStyles.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");




function makeStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(stylesOrCreator, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, options));
}

/* harmony default export */ __webpack_exports__["default"] = (makeStyles);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/responsiveFontSizes.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return responsiveFontSizes; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _cssUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cssUtils */ "./node_modules/@material-ui/core/esm/styles/cssUtils.js");



function responsiveFontSizes(themeInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$breakpoints = options.breakpoints,
      breakpoints = _options$breakpoints === void 0 ? ['sm', 'md', 'lg'] : _options$breakpoints,
      _options$disableAlign = options.disableAlign,
      disableAlign = _options$disableAlign === void 0 ? false : _options$disableAlign,
      _options$factor = options.factor,
      factor = _options$factor === void 0 ? 2 : _options$factor,
      _options$variants = options.variants,
      variants = _options$variants === void 0 ? ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'caption', 'button', 'overline'] : _options$variants;

  var theme = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, themeInput);

  theme.typography = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.typography);
  var typography = theme.typography; // Convert between css lengths e.g. em->px or px->rem
  // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

  var convert = Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["convertLength"])(typography.htmlFontSize);
  var breakpointValues = breakpoints.map(function (x) {
    return theme.breakpoints.values[x];
  });
  variants.forEach(function (variant) {
    var style = typography[variant];
    var remFontSize = parseFloat(convert(style.fontSize, 'rem'));

    if (remFontSize <= 1) {
      return;
    }

    var maxFontSize = remFontSize;
    var minFontSize = 1 + (maxFontSize - 1) / factor;
    var lineHeight = style.lineHeight;

    if (!Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["isUnitless"])(lineHeight) && !disableAlign) {
      throw new Error( true ? "Material-UI: Unsupported non-unitless line height with grid alignment.\nUse unitless line heights instead." : undefined);
    }

    if (!Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["isUnitless"])(lineHeight)) {
      // make it unitless
      lineHeight = parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
    }

    var transform = null;

    if (!disableAlign) {
      transform = function transform(value) {
        return Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["alignProperty"])({
          size: value,
          grid: Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["fontGrid"])({
            pixels: 4,
            lineHeight: lineHeight,
            htmlFontSize: typography.htmlFontSize
          })
        });
      };
    }

    typography[variant] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, Object(_cssUtils__WEBPACK_IMPORTED_MODULE_2__["responsiveProperty"])({
      cssProperty: 'fontSize',
      min: minFontSize,
      max: maxFontSize,
      unit: 'rem',
      breakpoints: breakpointValues,
      transform: transform
    }));
  });
  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/useTheme.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/useTheme.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTheme; });
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");



function useTheme() {
  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["useTheme"])() || _defaultTheme__WEBPACK_IMPORTED_MODULE_2__["default"];

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_1___default.a.useDebugValue(theme);
  }

  return theme;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/styles/withTheme.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/styles/withTheme.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultTheme */ "./node_modules/@material-ui/core/esm/styles/defaultTheme.js");


var withTheme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_0__["withThemeCreator"])({
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (withTheme);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/debounce.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/debounce.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return debounce; });
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
  var timeout;

  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // eslint-disable-next-line consistent-this
    var that = this;

    var later = function later() {
      func.apply(that, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = function () {
    clearTimeout(timeout);
  };

  return debounced;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js":
/*!******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/isMuiElement.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isMuiElement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function isMuiElement(element, muiNames) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"](element) && muiNames.indexOf(element.type.muiName) !== -1;
}

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
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/get */ "./node_modules/lodash/get.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ButtonGroup */ "./node_modules/@material-ui/core/esm/ButtonGroup/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Input */ "./node_modules/@material-ui/core/esm/Input/index.js");
/* harmony import */ var _material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormHelperText */ "./node_modules/@material-ui/core/esm/FormHelperText/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var appRedux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! appRedux */ "./src/appRedux/index.ts");
/* harmony import */ var _ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ButtonGroup.module.scss */ "./src/components/Forms/ButtonGroup/ButtonGroup.module.scss");
/* harmony import */ var _ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_12__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\ButtonGroup\\ButtonGroup.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var compare = function compare(option, value) {
  return option === value;
};

var ButtonGroupInner = function ButtonGroupInner(_ref) {
  var onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      _ref$getOptionSelecte = _ref.getOptionSelected,
      getOptionSelected = _ref$getOptionSelecte === void 0 ? compare : _ref$getOptionSelecte,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      value = _ref.value,
      name = _ref.name;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_ButtonGroup__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: name,
    "aria-label": "button group",
    children: options.map(function (option) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        variant: getOptionSelected(value, option) ? 'contained' : 'outlined',
        color: "primary",
        onClick: function onClick() {
          return onChange && option && onChange({
            target: {
              // @ts-expect-error - Either string or number
              value: option
            }
          });
        },
        children: getOptionLabel(option)
      }, "option-".concat(option), false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 3
  }, _this);
};

_c = ButtonGroupInner;
var MemoButtonGroupInner = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(ButtonGroupInner);
_c2 = MemoButtonGroupInner;

var ButtonGroup = function ButtonGroup(_ref2) {
  _s();

  var value = _ref2.value,
      onChange = _ref2.onChange,
      options = _ref2.options,
      _ref2$storeOptionsPat = _ref2.storeOptionsPath,
      storeOptionsPath = _ref2$storeOptionsPat === void 0 ? '' : _ref2$storeOptionsPat,
      name = _ref2.name,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, ["value", "onChange", "options", "storeOptionsPath", "name"]);

  var storeOptions = Object(appRedux__WEBPACK_IMPORTED_MODULE_11__["useAppSelector"])(function (state) {
    return lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(state, storeOptionsPath);
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(v) {
    setLocalValue(v.target.value);
  };

  var onChangeToUse = onChange || onLocalChange;
  var valueToUse = onChange ? value : localValue;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!valueToUse) {
      var _ref3;

      onChangeToUse({
        target: {
          // @ts-expect-error - Either string or number
          value: (_ref3 = storeOptionsPath ? storeOptions : options) === null || _ref3 === void 0 ? void 0 : _ref3[0]
        }
      });
    }
  }, [valueToUse, onChangeToUse, options, storeOptions, storeOptionsPath]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_10__["StylesProvider"], {
    injectFirst: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: _ButtonGroup_module_scss__WEBPACK_IMPORTED_MODULE_12___default.a.buttonGroup,
      fullWidth: true,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: valueToUse,
        onChange: onChangeToUse,
        inputComponent: function inputComponent(inputProps) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(MemoButtonGroupInner, _objectSpread(_objectSpread(_objectSpread({}, props), inputProps), {}, {
            name: name,
            options: storeOptions || options
          }), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_material_ui_core_FormHelperText__WEBPACK_IMPORTED_MODULE_9__["default"], {
        margin: "dense",
        variant: "filled",
        children: "Well never share your email."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 90,
    columnNumber: 5
  }, _this);
};

_s(ButtonGroup, "j5MLAmeyPTzhEntCpwx32/qIyDA=", false, function () {
  return [appRedux__WEBPACK_IMPORTED_MODULE_11__["useAppSelector"]];
});

_c3 = ButtonGroup;
/* harmony default export */ __webpack_exports__["default"] = (_c4 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(ButtonGroup));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9CdXR0b25Hcm91cC9CdXR0b25Hcm91cC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9CdXR0b25Hcm91cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC9Gb3JtQ29udHJvbENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtQ29udHJvbC91c2VGb3JtQ29udHJvbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtSGVscGVyVGV4dC9Gb3JtSGVscGVyVGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Gb3JtSGVscGVyVGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dC9JbnB1dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dEJhc2UvSW5wdXRCYXNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0lucHV0QmFzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9JbnB1dEJhc2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vVGV4dGFyZWFBdXRvc2l6ZS9UZXh0YXJlYUF1dG9zaXplLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1RleHRhcmVhQXV0b3NpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL2NyZWF0ZU11aVN0cmljdE1vZGVUaGVtZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvY3JlYXRlU3R5bGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy9jc3NVdGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9zdHlsZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL21ha2VTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3Jlc3BvbnNpdmVGb250U2l6ZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vc3R5bGVzL3VzZVRoZW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3N0eWxlcy93aXRoVGhlbWUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXRpbHMvaXNNdWlFbGVtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9CdXR0b25Hcm91cC9CdXR0b25Hcm91cC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvQnV0dG9uR3JvdXAvQnV0dG9uR3JvdXAubW9kdWxlLnNjc3M/Y2RkNCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvQnV0dG9uR3JvdXAvQnV0dG9uR3JvdXAudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9CdXR0b25Hcm91cC9pbmRleC50c3giXSwibmFtZXMiOlsiY29tcGFyZSIsIm9wdGlvbiIsInZhbHVlIiwiQnV0dG9uR3JvdXBJbm5lciIsIm9uQ2hhbmdlIiwiZ2V0T3B0aW9uTGFiZWwiLCJnZXRPcHRpb25TZWxlY3RlZCIsIm9wdGlvbnMiLCJuYW1lIiwibWFwIiwidGFyZ2V0IiwiTWVtb0J1dHRvbkdyb3VwSW5uZXIiLCJtZW1vIiwiQnV0dG9uR3JvdXAiLCJzdG9yZU9wdGlvbnNQYXRoIiwicHJvcHMiLCJzdG9yZU9wdGlvbnMiLCJ1c2VBcHBTZWxlY3RvciIsInN0YXRlIiwiZ2V0IiwidXNlU3RhdGUiLCJsb2NhbFZhbHVlIiwic2V0TG9jYWxWYWx1ZSIsIm9uTG9jYWxDaGFuZ2UiLCJ2Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJ1c2VFZmZlY3QiLCJzdHls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QVEsRUFBRUQsYUFGWjtBQUdFLHNCQUFjLEVBQUUsd0JBQUNLLFVBQUQ7QUFBQSw4QkFDZCxxRUFBQyxvQkFBRCxnREFDTWYsS0FETixHQUVNZSxVQUZOO0FBR0UsZ0JBQUksRUFBRXRCLElBSFI7QUFJRSxtQkFBTyxFQUFFUSxZQUFZLElBQUlUO0FBSjNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQTtBQUhsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFhRSxxRUFBQyx3RUFBRDtBQUFnQixjQUFNLEVBQUMsT0FBdkI7QUFBK0IsZUFBTyxFQUFDLFFBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBYkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUJELENBbEREOztHQUFNTSxXO1VBUStCSSx3RDs7O01BUi9CSixXO0FBb0RTLGtGQUFBRCxrREFBSSxDQUFDQyxXQUFELENBQW5COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUdBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy82LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJy4uL3V0aWxzL2NhcGl0YWxpemUnO1xuaW1wb3J0IHsgZmFkZSB9IGZyb20gJy4uL3N0eWxlcy9jb2xvck1hbmlwdWxhdG9yJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vQnV0dG9uJzsgLy8gRm9yY2UgYSBzaWRlIGVmZmVjdCBzbyB3ZSBkb24ndCBoYXZlIGFueSBvdmVycmlkZSBwcmlvcml0eSBpc3N1ZS5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcblxuQnV0dG9uLnN0eWxlcztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgYm9yZGVyUmFkaXVzOiB0aGVtZS5zaGFwZS5ib3JkZXJSYWRpdXNcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cImNvbnRhaW5lZFwiYC4gKi9cbiAgICBjb250YWluZWQ6IHtcbiAgICAgIGJveFNoYWRvdzogdGhlbWUuc2hhZG93c1syXVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlRWxldmF0aW9uPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZUVsZXZhdGlvbjoge1xuICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICB9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gY2hpbGQgZWxlbWVudHMgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gICAgZnVsbFdpZHRoOiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG9yaWVudGF0aW9uPVwidmVydGljYWxcImAuICovXG4gICAgdmVydGljYWw6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjaGlsZHJlbi4gKi9cbiAgICBncm91cGVkOiB7XG4gICAgICBtaW5XaWR0aDogNDBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGBvcmllbnRhdGlvbj1cImhvcml6b250YWxcImAuICovXG4gICAgZ3JvdXBlZEhvcml6b250YWw6IHtcbiAgICAgICcmOm5vdCg6Zmlyc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAwLFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAwXG4gICAgICB9LFxuICAgICAgJyY6bm90KDpsYXN0LWNoaWxkKSc6IHtcbiAgICAgICAgYm9yZGVyVG9wUmlnaHRSYWRpdXM6IDAsXG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAwXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjaGlsZHJlbiBpZiBgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiYC4gKi9cbiAgICBncm91cGVkVmVydGljYWw6IHtcbiAgICAgICcmOm5vdCg6Zmlyc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJUb3BSaWdodFJhZGl1czogMCxcbiAgICAgICAgYm9yZGVyVG9wTGVmdFJhZGl1czogMFxuICAgICAgfSxcbiAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzOiAwLFxuICAgICAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAwXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjaGlsZHJlbiBpZiBgdmFyaWFudD1cInRleHRcImAuICovXG4gICAgZ3JvdXBlZFRleHQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGB2YXJpYW50PVwidGV4dFwiYCBhbmQgYG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiYC4gKi9cbiAgICBncm91cGVkVGV4dEhvcml6b250YWw6IHtcbiAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gJ3JnYmEoMCwgMCwgMCwgMC4yMyknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMyknKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2hpbGRyZW4gaWYgYHZhcmlhbnQ9XCJ0ZXh0XCJgIGFuZCBgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiYC4gKi9cbiAgICBncm91cGVkVGV4dFZlcnRpY2FsOiB7XG4gICAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyAncmdiYSgwLCAwLCAwLCAwLjIzKScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIzKScpXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjaGlsZHJlbiBpZiBgdmFyaWFudD1cInRleHRcImAgYW5kIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgZ3JvdXBlZFRleHRQcmltYXJ5OiB7XG4gICAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgMC41KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2hpbGRyZW4gaWYgYHZhcmlhbnQ9XCJ0ZXh0XCJgIGFuZCBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgZ3JvdXBlZFRleHRTZWNvbmRhcnk6IHtcbiAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sIDAuNSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgZ3JvdXBlZE91dGxpbmVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjaGlsZHJlbiBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgIGFuZCBgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJgLiAqL1xuICAgIGdyb3VwZWRPdXRsaW5lZEhvcml6b250YWw6IHtcbiAgICAgICcmOm5vdCg6Zmlyc3QtY2hpbGQpJzoge1xuICAgICAgICBtYXJnaW5MZWZ0OiAtMVxuICAgICAgfSxcbiAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgIGJvcmRlclJpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCdcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAgYW5kIGBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJgLiAqL1xuICAgIGdyb3VwZWRPdXRsaW5lZFZlcnRpY2FsOiB7XG4gICAgICAnJjpub3QoOmZpcnN0LWNoaWxkKSc6IHtcbiAgICAgICAgbWFyZ2luVG9wOiAtMVxuICAgICAgfSxcbiAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjaGlsZHJlbiBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgIGFuZCBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIGdyb3VwZWRPdXRsaW5lZFByaW1hcnk6IHtcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAgYW5kIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBncm91cGVkT3V0bGluZWRTZWNvbmRhcnk6IHtcbiAgICAgICcmOmhvdmVyJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2hpbGRyZW4gaWYgYHZhcmlhbnQ9XCJjb250YWluZWRcImAuICovXG4gICAgZ3JvdXBlZENvbnRhaW5lZDoge1xuICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNoaWxkcmVuIGlmIGB2YXJpYW50PVwiY29udGFpbmVkXCJgIGFuZCBgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJgLiAqL1xuICAgIGdyb3VwZWRDb250YWluZWRIb3Jpem9udGFsOiB7XG4gICAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJSaWdodDogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUuZ3JleVs0MDBdKSxcbiAgICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgICAgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2hpbGRyZW4gaWYgYHZhcmlhbnQ9XCJjb250YWluZWRcImAgYW5kIGBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJgLiAqL1xuICAgIGdyb3VwZWRDb250YWluZWRWZXJ0aWNhbDoge1xuICAgICAgJyY6bm90KDpsYXN0LWNoaWxkKSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5ncmV5WzQwMF0pLFxuICAgICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLmFjdGlvbi5kaXNhYmxlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2hpbGRyZW4gaWYgYHZhcmlhbnQ9XCJjb250YWluZWRcImAgYW5kIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgZ3JvdXBlZENvbnRhaW5lZFByaW1hcnk6IHtcbiAgICAgICcmOm5vdCg6bGFzdC1jaGlsZCknOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuZGFya1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2hpbGRyZW4gaWYgYHZhcmlhbnQ9XCJjb250YWluZWRcImAgYW5kIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBncm91cGVkQ29udGFpbmVkU2Vjb25kYXJ5OiB7XG4gICAgICAnJjpub3QoOmxhc3QtY2hpbGQpJzoge1xuICAgICAgICBib3JkZXJDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuZGFya1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG52YXIgQnV0dG9uR3JvdXAgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBCdXR0b25Hcm91cChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAnZGVmYXVsdCcgOiBfcHJvcHMkY29sb3IsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZCA9IF9wcm9wcyRkaXNhYmxlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZWQsXG4gICAgICBfcHJvcHMkZGlzYWJsZUVsZXZhdGkgPSBwcm9wcy5kaXNhYmxlRWxldmF0aW9uLFxuICAgICAgZGlzYWJsZUVsZXZhdGlvbiA9IF9wcm9wcyRkaXNhYmxlRWxldmF0aSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUVsZXZhdGksXG4gICAgICBfcHJvcHMkZGlzYWJsZUZvY3VzUmkgPSBwcm9wcy5kaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgICBkaXNhYmxlRm9jdXNSaXBwbGUgPSBfcHJvcHMkZGlzYWJsZUZvY3VzUmkgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVGb2N1c1JpLFxuICAgICAgX3Byb3BzJGRpc2FibGVSaXBwbGUgPSBwcm9wcy5kaXNhYmxlUmlwcGxlLFxuICAgICAgZGlzYWJsZVJpcHBsZSA9IF9wcm9wcyRkaXNhYmxlUmlwcGxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlUmlwcGxlLFxuICAgICAgX3Byb3BzJGZ1bGxXaWR0aCA9IHByb3BzLmZ1bGxXaWR0aCxcbiAgICAgIGZ1bGxXaWR0aCA9IF9wcm9wcyRmdWxsV2lkdGggPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZ1bGxXaWR0aCxcbiAgICAgIF9wcm9wcyRvcmllbnRhdGlvbiA9IHByb3BzLm9yaWVudGF0aW9uLFxuICAgICAgb3JpZW50YXRpb24gPSBfcHJvcHMkb3JpZW50YXRpb24gPT09IHZvaWQgMCA/ICdob3Jpem9udGFsJyA6IF9wcm9wcyRvcmllbnRhdGlvbixcbiAgICAgIF9wcm9wcyRzaXplID0gcHJvcHMuc2l6ZSxcbiAgICAgIHNpemUgPSBfcHJvcHMkc2l6ZSA9PT0gdm9pZCAwID8gJ21lZGl1bScgOiBfcHJvcHMkc2l6ZSxcbiAgICAgIF9wcm9wcyR2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIHZhcmlhbnQgPSBfcHJvcHMkdmFyaWFudCA9PT0gdm9pZCAwID8gJ291dGxpbmVkJyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZWRcIiwgXCJkaXNhYmxlRWxldmF0aW9uXCIsIFwiZGlzYWJsZUZvY3VzUmlwcGxlXCIsIFwiZGlzYWJsZVJpcHBsZVwiLCBcImZ1bGxXaWR0aFwiLCBcIm9yaWVudGF0aW9uXCIsIFwic2l6ZVwiLCBcInZhcmlhbnRcIl0pO1xuXG4gIHZhciBidXR0b25DbGFzc05hbWUgPSBjbHN4KGNsYXNzZXMuZ3JvdXBlZCwgY2xhc3Nlc1tcImdyb3VwZWRcIi5jb25jYXQoY2FwaXRhbGl6ZShvcmllbnRhdGlvbikpXSwgY2xhc3Nlc1tcImdyb3VwZWRcIi5jb25jYXQoY2FwaXRhbGl6ZSh2YXJpYW50KSldLCBjbGFzc2VzW1wiZ3JvdXBlZFwiLmNvbmNhdChjYXBpdGFsaXplKHZhcmlhbnQpKS5jb25jYXQoY2FwaXRhbGl6ZShvcmllbnRhdGlvbikpXSwgY2xhc3Nlc1tcImdyb3VwZWRcIi5jb25jYXQoY2FwaXRhbGl6ZSh2YXJpYW50KSkuY29uY2F0KGNvbG9yICE9PSAnZGVmYXVsdCcgPyBjYXBpdGFsaXplKGNvbG9yKSA6ICcnKV0sIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgcm9sZTogXCJncm91cFwiLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgZnVsbFdpZHRoICYmIGNsYXNzZXMuZnVsbFdpZHRoLCBkaXNhYmxlRWxldmF0aW9uICYmIGNsYXNzZXMuZGlzYWJsZUVsZXZhdGlvbiwgdmFyaWFudCA9PT0gJ2NvbnRhaW5lZCcgJiYgY2xhc3Nlcy5jb250YWluZWQsIG9yaWVudGF0aW9uID09PSAndmVydGljYWwnICYmIGNsYXNzZXMudmVydGljYWwpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoISAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKGlzRnJhZ21lbnQoY2hpbGQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoW1wiTWF0ZXJpYWwtVUk6IFRoZSBCdXR0b25Hcm91cCBjb21wb25lbnQgZG9lc24ndCBhY2NlcHQgYSBGcmFnbWVudCBhcyBhIGNoaWxkLlwiLCAnQ29uc2lkZXIgcHJvdmlkaW5nIGFuIGFycmF5IGluc3RlYWQuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICBjbGFzc05hbWU6IGNsc3goYnV0dG9uQ2xhc3NOYW1lLCBjaGlsZC5wcm9wcy5jbGFzc05hbWUpLFxuICAgICAgY29sb3I6IGNoaWxkLnByb3BzLmNvbG9yIHx8IGNvbG9yLFxuICAgICAgZGlzYWJsZWQ6IGNoaWxkLnByb3BzLmRpc2FibGVkIHx8IGRpc2FibGVkLFxuICAgICAgZGlzYWJsZUVsZXZhdGlvbjogY2hpbGQucHJvcHMuZGlzYWJsZUVsZXZhdGlvbiB8fCBkaXNhYmxlRWxldmF0aW9uLFxuICAgICAgZGlzYWJsZUZvY3VzUmlwcGxlOiBkaXNhYmxlRm9jdXNSaXBwbGUsXG4gICAgICBkaXNhYmxlUmlwcGxlOiBkaXNhYmxlUmlwcGxlLFxuICAgICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgICBzaXplOiBjaGlsZC5wcm9wcy5zaXplIHx8IHNpemUsXG4gICAgICB2YXJpYW50OiBjaGlsZC5wcm9wcy52YXJpYW50IHx8IHZhcmlhbnRcbiAgICB9KTtcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBCdXR0b25Hcm91cC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgYnV0dG9uIGdyb3VwLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAnaW5oZXJpdCcsICdwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbnMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBubyBlbGV2YXRpb24gaXMgdXNlZC5cbiAgICovXG4gIGRpc2FibGVFbGV2YXRpb246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24ga2V5Ym9hcmQgZm9jdXMgcmlwcGxlIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAqL1xuICBkaXNhYmxlRm9jdXNSaXBwbGU6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBidXR0b24gcmlwcGxlIGVmZmVjdCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZVJpcHBsZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGJ1dHRvbnMgd2lsbCB0YWtlIHVwIHRoZSBmdWxsIHdpZHRoIG9mIGl0cyBjb250YWluZXIuXG4gICAqL1xuICBmdWxsV2lkdGg6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgZ3JvdXAgb3JpZW50YXRpb24gKGxheW91dCBmbG93IGRpcmVjdGlvbikuXG4gICAqL1xuICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKSxcblxuICAvKipcbiAgICogVGhlIHNpemUgb2YgdGhlIGJ1dHRvbi5cbiAgICogYHNtYWxsYCBpcyBlcXVpdmFsZW50IHRvIHRoZSBkZW5zZSBidXR0b24gc3R5bGluZy5cbiAgICovXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbJ2xhcmdlJywgJ21lZGl1bScsICdzbWFsbCddKSxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnY29udGFpbmVkJywgJ291dGxpbmVkJywgJ3RleHQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpQnV0dG9uR3JvdXAnXG59KShCdXR0b25Hcm91cCk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQnV0dG9uR3JvdXAnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IGlzRmlsbGVkLCBpc0Fkb3JuZWRTdGFydCB9IGZyb20gJy4uL0lucHV0QmFzZS91dGlscyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCBpc011aUVsZW1lbnQgZnJvbSAnLi4vdXRpbHMvaXNNdWlFbGVtZW50JztcbmltcG9ydCBGb3JtQ29udHJvbENvbnRleHQgZnJvbSAnLi9Gb3JtQ29udHJvbENvbnRleHQnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgIC8vIFJlc2V0IGZpZWxkc2V0IGRlZmF1bHQgc3R5bGUuXG4gICAgbWluV2lkdGg6IDAsXG4gICAgcGFkZGluZzogMCxcbiAgICBtYXJnaW46IDAsXG4gICAgYm9yZGVyOiAwLFxuICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnIC8vIEZpeCBhbGlnbm1lbnQgaXNzdWUgb24gU2FmYXJpLlxuXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgbWFyZ2luPVwibm9ybWFsXCJgLiAqL1xuICBtYXJnaW5Ob3JtYWw6IHtcbiAgICBtYXJnaW5Ub3A6IDE2LFxuICAgIG1hcmdpbkJvdHRvbTogOFxuICB9LFxuXG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICBtYXJnaW5EZW5zZToge1xuICAgIG1hcmdpblRvcDogOCxcbiAgICBtYXJnaW5Cb3R0b206IDRcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmdWxsV2lkdGg9e3RydWV9YC4gKi9cbiAgZnVsbFdpZHRoOiB7XG4gICAgd2lkdGg6ICcxMDAlJ1xuICB9XG59O1xuLyoqXG4gKiBQcm92aWRlcyBjb250ZXh0IHN1Y2ggYXMgZmlsbGVkL2ZvY3VzZWQvZXJyb3IvcmVxdWlyZWQgZm9yIGZvcm0gaW5wdXRzLlxuICogUmVseWluZyBvbiB0aGUgY29udGV4dCBwcm92aWRlcyBoaWdoIGZsZXhpYmlsaXR5IGFuZCBlbnN1cmVzIHRoYXQgdGhlIHN0YXRlIGFsd2F5cyBzdGF5c1xuICogY29uc2lzdGVudCBhY3Jvc3MgdGhlIGNoaWxkcmVuIG9mIHRoZSBgRm9ybUNvbnRyb2xgLlxuICogVGhpcyBjb250ZXh0IGlzIHVzZWQgYnkgdGhlIGZvbGxvd2luZyBjb21wb25lbnRzOlxuICpcbiAqICAtIEZvcm1MYWJlbFxuICogIC0gRm9ybUhlbHBlclRleHRcbiAqICAtIElucHV0XG4gKiAgLSBJbnB1dExhYmVsXG4gKlxuICogWW91IGNhbiBmaW5kIG9uZSBjb21wb3NpdGlvbiBleGFtcGxlIGJlbG93IGFuZCBtb3JlIGdvaW5nIHRvIFt0aGUgZGVtb3NdKC9jb21wb25lbnRzL3RleHQtZmllbGRzLyNjb21wb25lbnRzKS5cbiAqXG4gKiBgYGBqc3hcbiAqIDxGb3JtQ29udHJvbD5cbiAqICAgPElucHV0TGFiZWwgaHRtbEZvcj1cIm15LWlucHV0XCI+RW1haWwgYWRkcmVzczwvSW5wdXRMYWJlbD5cbiAqICAgPElucHV0IGlkPVwibXktaW5wdXRcIiBhcmlhLWRlc2NyaWJlZGJ5PVwibXktaGVscGVyLXRleHRcIiAvPlxuICogICA8Rm9ybUhlbHBlclRleHQgaWQ9XCJteS1oZWxwZXItdGV4dFwiPldlJ2xsIG5ldmVyIHNoYXJlIHlvdXIgZW1haWwuPC9Gb3JtSGVscGVyVGV4dD5cbiAqIDwvRm9ybUNvbnRyb2w+XG4gKiBgYGBcbiAqXG4gKiDimqDvuI9Pbmx5IG9uZSBpbnB1dCBjYW4gYmUgdXNlZCB3aXRoaW4gYSBGb3JtQ29udHJvbC5cbiAqL1xuXG52YXIgRm9ybUNvbnRyb2wgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBGb3JtQ29udHJvbChwcm9wcywgcmVmKSB7XG4gIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAncHJpbWFyeScgOiBfcHJvcHMkY29sb3IsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZCA9IF9wcm9wcyRkaXNhYmxlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZWQsXG4gICAgICBfcHJvcHMkZXJyb3IgPSBwcm9wcy5lcnJvcixcbiAgICAgIGVycm9yID0gX3Byb3BzJGVycm9yID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRlcnJvcixcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICB2aXN1YWxseUZvY3VzZWQgPSBwcm9wcy5mb2N1c2VkLFxuICAgICAgX3Byb3BzJGhpZGRlbkxhYmVsID0gcHJvcHMuaGlkZGVuTGFiZWwsXG4gICAgICBoaWRkZW5MYWJlbCA9IF9wcm9wcyRoaWRkZW5MYWJlbCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaGlkZGVuTGFiZWwsXG4gICAgICBfcHJvcHMkbWFyZ2luID0gcHJvcHMubWFyZ2luLFxuICAgICAgbWFyZ2luID0gX3Byb3BzJG1hcmdpbiA9PT0gdm9pZCAwID8gJ25vbmUnIDogX3Byb3BzJG1hcmdpbixcbiAgICAgIF9wcm9wcyRyZXF1aXJlZCA9IHByb3BzLnJlcXVpcmVkLFxuICAgICAgcmVxdWlyZWQgPSBfcHJvcHMkcmVxdWlyZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHJlcXVpcmVkLFxuICAgICAgc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdzdGFuZGFyZCcgOiBfcHJvcHMkdmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb2xvclwiLCBcImNvbXBvbmVudFwiLCBcImRpc2FibGVkXCIsIFwiZXJyb3JcIiwgXCJmdWxsV2lkdGhcIiwgXCJmb2N1c2VkXCIsIFwiaGlkZGVuTGFiZWxcIiwgXCJtYXJnaW5cIiwgXCJyZXF1aXJlZFwiLCBcInNpemVcIiwgXCJ2YXJpYW50XCJdKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIC8vIFdlIG5lZWQgdG8gaXRlcmF0ZSB0aHJvdWdoIHRoZSBjaGlsZHJlbiBhbmQgZmluZCB0aGUgSW5wdXQgaW4gb3JkZXJcbiAgICAvLyB0byBmdWxseSBzdXBwb3J0IHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgICB2YXIgaW5pdGlhbEFkb3JuZWRTdGFydCA9IGZhbHNlO1xuXG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKCFpc011aUVsZW1lbnQoY2hpbGQsIFsnSW5wdXQnLCAnU2VsZWN0J10pKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlucHV0ID0gaXNNdWlFbGVtZW50KGNoaWxkLCBbJ1NlbGVjdCddKSA/IGNoaWxkLnByb3BzLmlucHV0IDogY2hpbGQ7XG5cbiAgICAgICAgaWYgKGlucHV0ICYmIGlzQWRvcm5lZFN0YXJ0KGlucHV0LnByb3BzKSkge1xuICAgICAgICAgIGluaXRpYWxBZG9ybmVkU3RhcnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW5pdGlhbEFkb3JuZWRTdGFydDtcbiAgfSksXG4gICAgICBhZG9ybmVkU3RhcnQgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRBZG9ybmVkU3RhcnQgPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZTIgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgLy8gV2UgbmVlZCB0byBpdGVyYXRlIHRocm91Z2ggdGhlIGNoaWxkcmVuIGFuZCBmaW5kIHRoZSBJbnB1dCBpbiBvcmRlclxuICAgIC8vIHRvIGZ1bGx5IHN1cHBvcnQgc2VydmVyLXNpZGUgcmVuZGVyaW5nLlxuICAgIHZhciBpbml0aWFsRmlsbGVkID0gZmFsc2U7XG5cbiAgICBpZiAoY2hpbGRyZW4pIHtcbiAgICAgIFJlYWN0LkNoaWxkcmVuLmZvckVhY2goY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoIWlzTXVpRWxlbWVudChjaGlsZCwgWydJbnB1dCcsICdTZWxlY3QnXSkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNGaWxsZWQoY2hpbGQucHJvcHMsIHRydWUpKSB7XG4gICAgICAgICAgaW5pdGlhbEZpbGxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbml0aWFsRmlsbGVkO1xuICB9KSxcbiAgICAgIGZpbGxlZCA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRGaWxsZWQgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUzID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxuICAgICAgX2ZvY3VzZWQgPSBfUmVhY3QkdXNlU3RhdGUzWzBdLFxuICAgICAgc2V0Rm9jdXNlZCA9IF9SZWFjdCR1c2VTdGF0ZTNbMV07XG5cbiAgdmFyIGZvY3VzZWQgPSB2aXN1YWxseUZvY3VzZWQgIT09IHVuZGVmaW5lZCA/IHZpc3VhbGx5Rm9jdXNlZCA6IF9mb2N1c2VkO1xuXG4gIGlmIChkaXNhYmxlZCAmJiBmb2N1c2VkKSB7XG4gICAgc2V0Rm9jdXNlZChmYWxzZSk7XG4gIH1cblxuICB2YXIgcmVnaXN0ZXJFZmZlY3Q7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICB2YXIgcmVnaXN0ZXJlZElucHV0ID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcblxuICAgIHJlZ2lzdGVyRWZmZWN0ID0gZnVuY3Rpb24gcmVnaXN0ZXJFZmZlY3QoKSB7XG4gICAgICBpZiAocmVnaXN0ZXJlZElucHV0LmN1cnJlbnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUaGVyZSBhcmUgbXVsdGlwbGUgSW5wdXRCYXNlIGNvbXBvbmVudHMgaW5zaWRlIGEgRm9ybUNvbnRyb2wuJywgJ1RoaXMgaXMgbm90IHN1cHBvcnRlZC4gSXQgbWlnaHQgY2F1c2UgaW5maW5pdGUgcmVuZGVyaW5nIGxvb3BzLicsICdPbmx5IHVzZSBvbmUgSW5wdXRCYXNlLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cblxuICAgICAgcmVnaXN0ZXJlZElucHV0LmN1cnJlbnQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmVnaXN0ZXJlZElucHV0LmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgIH07XG4gICAgfTtcbiAgfVxuXG4gIHZhciBvbkZpbGxlZCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBzZXRGaWxsZWQodHJ1ZSk7XG4gIH0sIFtdKTtcbiAgdmFyIG9uRW1wdHkgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgc2V0RmlsbGVkKGZhbHNlKTtcbiAgfSwgW10pO1xuICB2YXIgY2hpbGRDb250ZXh0ID0ge1xuICAgIGFkb3JuZWRTdGFydDogYWRvcm5lZFN0YXJ0LFxuICAgIHNldEFkb3JuZWRTdGFydDogc2V0QWRvcm5lZFN0YXJ0LFxuICAgIGNvbG9yOiBjb2xvcixcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgZXJyb3I6IGVycm9yLFxuICAgIGZpbGxlZDogZmlsbGVkLFxuICAgIGZvY3VzZWQ6IGZvY3VzZWQsXG4gICAgZnVsbFdpZHRoOiBmdWxsV2lkdGgsXG4gICAgaGlkZGVuTGFiZWw6IGhpZGRlbkxhYmVsLFxuICAgIG1hcmdpbjogKHNpemUgPT09ICdzbWFsbCcgPyAnZGVuc2UnIDogdW5kZWZpbmVkKSB8fCBtYXJnaW4sXG4gICAgb25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICBzZXRGb2N1c2VkKGZhbHNlKTtcbiAgICB9LFxuICAgIG9uRW1wdHk6IG9uRW1wdHksXG4gICAgb25GaWxsZWQ6IG9uRmlsbGVkLFxuICAgIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XG4gICAgICBzZXRGb2N1c2VkKHRydWUpO1xuICAgIH0sXG4gICAgcmVnaXN0ZXJFZmZlY3Q6IHJlZ2lzdGVyRWZmZWN0LFxuICAgIHJlcXVpcmVkOiByZXF1aXJlZCxcbiAgICB2YXJpYW50OiB2YXJpYW50XG4gIH07XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChGb3JtQ29udHJvbENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY2hpbGRDb250ZXh0XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgbWFyZ2luICE9PSAnbm9uZScgJiYgY2xhc3Nlc1tcIm1hcmdpblwiLmNvbmNhdChjYXBpdGFsaXplKG1hcmdpbikpXSwgZnVsbFdpZHRoICYmIGNsYXNzZXMuZnVsbFdpZHRoKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIGNoaWxkcmVuKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IEZvcm1Db250cm9sLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50cyBvZiB0aGUgZm9ybSBjb250cm9sLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGFiZWwsIGlucHV0IGFuZCBoZWxwZXIgdGV4dCBzaG91bGQgYmUgZGlzcGxheWVkIGluIGEgZGlzYWJsZWQgc3RhdGUuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gYW4gZXJyb3Igc3RhdGUuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIGJlIGRpc3BsYXllZCBpbiBmb2N1c2VkIHN0YXRlLlxuICAgKi9cbiAgZm9jdXNlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHdpbGwgYmUgaGlkZGVuLlxuICAgKiBUaGlzIGlzIHVzZWQgdG8gaW5jcmVhc2UgZGVuc2l0eSBmb3IgYSBgRmlsbGVkSW5wdXRgLlxuICAgKiBCZSBzdXJlIHRvIGFkZCBgYXJpYS1sYWJlbGAgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIGhpZGRlbkxhYmVsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYGRlbnNlYCBvciBgbm9ybWFsYCwgd2lsbCBhZGp1c3QgdmVydGljYWwgc3BhY2luZyBvZiB0aGlzIGFuZCBjb250YWluZWQgY29tcG9uZW50cy5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnLCAnbm9uZScsICdub3JtYWwnXSksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGxhYmVsIHdpbGwgaW5kaWNhdGUgdGhhdCB0aGUgaW5wdXQgaXMgcmVxdWlyZWQuXG4gICAqL1xuICByZXF1aXJlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSB0ZXh0IGZpZWxkLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnbWVkaXVtJywgJ3NtYWxsJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydmaWxsZWQnLCAnb3V0bGluZWQnLCAnc3RhbmRhcmQnXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpRm9ybUNvbnRyb2wnXG59KShGb3JtQ29udHJvbCk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbnZhciBGb3JtQ29udHJvbENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEZvcm1Db250cm9sQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdGb3JtQ29udHJvbENvbnRleHQnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRm9ybUNvbnRyb2woKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KEZvcm1Db250cm9sQ29udGV4dCk7XG59XG5leHBvcnQgZGVmYXVsdCBGb3JtQ29udHJvbENvbnRleHQ7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybUNvbnRyb2xTdGF0ZShfcmVmKSB7XG4gIHZhciBwcm9wcyA9IF9yZWYucHJvcHMsXG4gICAgICBzdGF0ZXMgPSBfcmVmLnN0YXRlcyxcbiAgICAgIG11aUZvcm1Db250cm9sID0gX3JlZi5tdWlGb3JtQ29udHJvbDtcbiAgcmV0dXJuIHN0YXRlcy5yZWR1Y2UoZnVuY3Rpb24gKGFjYywgc3RhdGUpIHtcbiAgICBhY2Nbc3RhdGVdID0gcHJvcHNbc3RhdGVdO1xuXG4gICAgaWYgKG11aUZvcm1Db250cm9sKSB7XG4gICAgICBpZiAodHlwZW9mIHByb3BzW3N0YXRlXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYWNjW3N0YXRlXSA9IG11aUZvcm1Db250cm9sW3N0YXRlXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRm9ybUNvbnRyb2wnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VGb3JtQ29udHJvbCB9IGZyb20gJy4vdXNlRm9ybUNvbnRyb2wnOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBGb3JtQ29udHJvbENvbnRleHQgZnJvbSAnLi9Gb3JtQ29udHJvbENvbnRleHQnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRm9ybUNvbnRyb2woKSB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KEZvcm1Db250cm9sQ29udGV4dCk7XG59IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IGZvcm1Db250cm9sU3RhdGUgZnJvbSAnLi4vRm9ybUNvbnRyb2wvZm9ybUNvbnRyb2xTdGF0ZSc7XG5pbXBvcnQgdXNlRm9ybUNvbnRyb2wgZnJvbSAnLi4vRm9ybUNvbnRyb2wvdXNlRm9ybUNvbnRyb2wnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IF9leHRlbmRzKHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5XG4gICAgfSwgdGhlbWUudHlwb2dyYXBoeS5jYXB0aW9uLCB7XG4gICAgICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgICAgIG1hcmdpblRvcDogMyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LmRpc2FibGVkXG4gICAgICB9LFxuICAgICAgJyYkZXJyb3InOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW5cbiAgICAgIH1cbiAgICB9KSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVycm9yPXt0cnVlfWAuICovXG4gICAgZXJyb3I6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZWQ9e3RydWV9YC4gKi9cbiAgICBkaXNhYmxlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge1xuICAgICAgbWFyZ2luVG9wOiA0XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJmaWxsZWRcImAgb3IgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBjb250YWluZWQ6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IDE0LFxuICAgICAgbWFyZ2luUmlnaHQ6IDE0XG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZvY3VzZWQ9e3RydWV9YC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGZpbGxlZD17dHJ1ZX1gLiAqL1xuICAgIGZpbGxlZDoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGByZXF1aXJlZD17dHJ1ZX1gLiAqL1xuICAgIHJlcXVpcmVkOiB7fVxuICB9O1xufTtcbnZhciBGb3JtSGVscGVyVGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEZvcm1IZWxwZXJUZXh0KHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAncCcgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBmaWxsZWQgPSBwcm9wcy5maWxsZWQsXG4gICAgICBmb2N1c2VkID0gcHJvcHMuZm9jdXNlZCxcbiAgICAgIG1hcmdpbiA9IHByb3BzLm1hcmdpbixcbiAgICAgIHJlcXVpcmVkID0gcHJvcHMucmVxdWlyZWQsXG4gICAgICB2YXJpYW50ID0gcHJvcHMudmFyaWFudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJkaXNhYmxlZFwiLCBcImVycm9yXCIsIFwiZmlsbGVkXCIsIFwiZm9jdXNlZFwiLCBcIm1hcmdpblwiLCBcInJlcXVpcmVkXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIG11aUZvcm1Db250cm9sID0gdXNlRm9ybUNvbnRyb2woKTtcbiAgdmFyIGZjcyA9IGZvcm1Db250cm9sU3RhdGUoe1xuICAgIHByb3BzOiBwcm9wcyxcbiAgICBtdWlGb3JtQ29udHJvbDogbXVpRm9ybUNvbnRyb2wsXG4gICAgc3RhdGVzOiBbJ3ZhcmlhbnQnLCAnbWFyZ2luJywgJ2Rpc2FibGVkJywgJ2Vycm9yJywgJ2ZpbGxlZCcsICdmb2N1c2VkJywgJ3JlcXVpcmVkJ11cbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCAoZmNzLnZhcmlhbnQgPT09ICdmaWxsZWQnIHx8IGZjcy52YXJpYW50ID09PSAnb3V0bGluZWQnKSAmJiBjbGFzc2VzLmNvbnRhaW5lZCwgY2xhc3NOYW1lLCBmY3MuZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCwgZmNzLmVycm9yICYmIGNsYXNzZXMuZXJyb3IsIGZjcy5maWxsZWQgJiYgY2xhc3Nlcy5maWxsZWQsIGZjcy5mb2N1c2VkICYmIGNsYXNzZXMuZm9jdXNlZCwgZmNzLnJlcXVpcmVkICYmIGNsYXNzZXMucmVxdWlyZWQsIGZjcy5tYXJnaW4gPT09ICdkZW5zZScgJiYgY2xhc3Nlcy5tYXJnaW5EZW5zZSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbiA9PT0gJyAnID9cbiAgLyojX19QVVJFX18qL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGFuZ2VyXG4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDoge1xuICAgICAgX19odG1sOiAnJiM4MjAzOydcbiAgICB9XG4gIH0pIDogY2hpbGRyZW4pO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBGb3JtSGVscGVyVGV4dC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKlxuICAgKiBJZiBgJyAnYCBpcyBwcm92aWRlZCwgdGhlIGNvbXBvbmVudCByZXNlcnZlcyBvbmUgbGluZSBoZWlnaHQgZm9yIGRpc3BsYXlpbmcgYSBmdXR1cmUgbWVzc2FnZS5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBoZWxwZXIgdGV4dCBzaG91bGQgYmUgZGlzcGxheWVkIGluIGEgZGlzYWJsZWQgc3RhdGUuXG4gICAqL1xuICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgaGVscGVyIHRleHQgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhbiBlcnJvciBzdGF0ZS5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaGVscGVyIHRleHQgc2hvdWxkIHVzZSBmaWxsZWQgY2xhc3NlcyBrZXkuXG4gICAqL1xuICBmaWxsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBoZWxwZXIgdGV4dCBzaG91bGQgdXNlIGZvY3VzZWQgY2xhc3NlcyBrZXkuXG4gICAqL1xuICBmb2N1c2VkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYGRlbnNlYCwgd2lsbCBhZGp1c3QgdmVydGljYWwgc3BhY2luZy4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2YoWydkZW5zZSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaGVscGVyIHRleHQgc2hvdWxkIHVzZSByZXF1aXJlZCBjbGFzc2VzIGtleS5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHZhcmlhbnQgdG8gdXNlLlxuICAgKi9cbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFsnZmlsbGVkJywgJ291dGxpbmVkJywgJ3N0YW5kYXJkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUZvcm1IZWxwZXJUZXh0J1xufSkoRm9ybUhlbHBlclRleHQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvcm1IZWxwZXJUZXh0JzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBJbnB1dEJhc2UgZnJvbSAnLi4vSW5wdXRCYXNlJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHZhciBsaWdodCA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JztcbiAgdmFyIGJvdHRvbUxpbmVDb2xvciA9IGxpZ2h0ID8gJ3JnYmEoMCwgMCwgMCwgMC40MiknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC43KSc7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgYSBkZXNjZW5kYW50IG9mIGBGb3JtQ29udHJvbGAuICovXG4gICAgZm9ybUNvbnRyb2w6IHtcbiAgICAgICdsYWJlbCArICYnOiB7XG4gICAgICAgIG1hcmdpblRvcDogMTZcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiB0aGUgY29tcG9uZW50IGlzIGZvY3VzZWQuICovXG4gICAgZm9jdXNlZDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgY29sb3Igc2Vjb25kYXJ5LiAqL1xuICAgIGNvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICAnJiR1bmRlcmxpbmU6YWZ0ZXInOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbUNvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVVbmRlcmxpbmU9e2ZhbHNlfWAuICovXG4gICAgdW5kZXJsaW5lOiB7XG4gICAgICAnJjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjJweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4pLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIC8vIERvaW5nIHRoZSBvdGhlciB3YXkgYXJvdW5kIGNyYXNoIG9uIElFIDExIFwiJydcIiBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3MvaXNzdWVzLzI0MlxuICAgICAgICBjb250ZW50OiAnXCJcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDApJyxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCd0cmFuc2Zvcm0nLCB7XG4gICAgICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXIsXG4gICAgICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuZWFzZU91dFxuICAgICAgICB9KSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnIC8vIFRyYW5zcGFyZW50IHRvIHRoZSBob3ZlciBzdHlsZS5cblxuICAgICAgfSxcbiAgICAgICcmJGZvY3VzZWQ6YWZ0ZXInOiB7XG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWCgxKSdcbiAgICAgIH0sXG4gICAgICAnJiRlcnJvcjphZnRlcic6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tQ29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJyAvLyBlcnJvciBpcyBhbHdheXMgdW5kZXJsaW5lZCBpbiByZWRcblxuICAgICAgfSxcbiAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCBcIi5jb25jYXQoYm90dG9tTGluZUNvbG9yKSxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAvLyBEb2luZyB0aGUgb3RoZXIgd2F5IGFyb3VuZCBjcmFzaCBvbiBJRSAxMSBcIicnXCIgaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2lzc3Vlcy8yNDJcbiAgICAgICAgY29udGVudDogJ1wiXFxcXDAwYTBcIicsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdib3JkZXItYm90dG9tLWNvbG9yJywge1xuICAgICAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVyXG4gICAgICAgIH0pLFxuICAgICAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScgLy8gVHJhbnNwYXJlbnQgdG8gdGhlIGhvdmVyIHN0eWxlLlxuXG4gICAgICB9LFxuICAgICAgJyY6aG92ZXI6bm90KCRkaXNhYmxlZCk6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJCb3R0b206IFwiMnB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSksXG4gICAgICAgIC8vIFJlc2V0IG9uIHRvdWNoIGRldmljZXMsIGl0IGRvZXNuJ3QgYWRkIHNwZWNpZmljaXR5XG4gICAgICAgICdAbWVkaWEgKGhvdmVyOiBub25lKSc6IHtcbiAgICAgICAgICBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIFwiLmNvbmNhdChib3R0b21MaW5lQ29sb3IpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJiRkaXNhYmxlZDpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlckJvdHRvbVN0eWxlOiAnZG90dGVkJ1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlcnJvcj17dHJ1ZX1gLiAqL1xuICAgIGVycm9yOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIG1hcmdpbkRlbnNlOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIG11bHRpbGluZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBmdWxsV2lkdGg9e3RydWV9YC4gKi9cbiAgICBmdWxsV2lkdGg6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudC4gKi9cbiAgICBpbnB1dDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBpbnB1dE1hcmdpbkRlbnNlOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIGlucHV0TXVsdGlsaW5lOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYHR5cGU9XCJzZWFyY2hcImAuICovXG4gICAgaW5wdXRUeXBlU2VhcmNoOiB7fVxuICB9O1xufTtcbnZhciBJbnB1dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIElucHV0KHByb3BzLCByZWYpIHtcbiAgdmFyIGRpc2FibGVVbmRlcmxpbmUgPSBwcm9wcy5kaXNhYmxlVW5kZXJsaW5lLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgX3Byb3BzJGlucHV0Q29tcG9uZW50ID0gcHJvcHMuaW5wdXRDb21wb25lbnQsXG4gICAgICBpbnB1dENvbXBvbmVudCA9IF9wcm9wcyRpbnB1dENvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2lucHV0JyA6IF9wcm9wcyRpbnB1dENvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRtdWx0aWxpbmUgPSBwcm9wcy5tdWx0aWxpbmUsXG4gICAgICBtdWx0aWxpbmUgPSBfcHJvcHMkbXVsdGlsaW5lID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtdWx0aWxpbmUsXG4gICAgICBfcHJvcHMkdHlwZSA9IHByb3BzLnR5cGUsXG4gICAgICB0eXBlID0gX3Byb3BzJHR5cGUgPT09IHZvaWQgMCA/ICd0ZXh0JyA6IF9wcm9wcyR0eXBlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImRpc2FibGVVbmRlcmxpbmVcIiwgXCJjbGFzc2VzXCIsIFwiZnVsbFdpZHRoXCIsIFwiaW5wdXRDb21wb25lbnRcIiwgXCJtdWx0aWxpbmVcIiwgXCJ0eXBlXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRCYXNlLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NlczogX2V4dGVuZHMoe30sIGNsYXNzZXMsIHtcbiAgICAgIHJvb3Q6IGNsc3goY2xhc3Nlcy5yb290LCAhZGlzYWJsZVVuZGVybGluZSAmJiBjbGFzc2VzLnVuZGVybGluZSksXG4gICAgICB1bmRlcmxpbmU6IG51bGxcbiAgICB9KSxcbiAgICBmdWxsV2lkdGg6IGZ1bGxXaWR0aCxcbiAgICBpbnB1dENvbXBvbmVudDogaW5wdXRDb21wb25lbnQsXG4gICAgbXVsdGlsaW5lOiBtdWx0aWxpbmUsXG4gICAgcmVmOiByZWYsXG4gICAgdHlwZTogdHlwZVxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBJbnB1dC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgW2ZvbGxvd2luZyB0aGUgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGwpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydwcmltYXJ5JywgJ3NlY29uZGFyeSddKSxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgYGlucHV0YCBlbGVtZW50IHZhbHVlLiBVc2Ugd2hlbiB0aGUgY29tcG9uZW50IGlzIG5vdCBjb250cm9sbGVkLlxuICAgKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMuYW55LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBub3QgaGF2ZSBhbiB1bmRlcmxpbmUuXG4gICAqL1xuICBkaXNhYmxlVW5kZXJsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRW5kIGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgZW5kQWRvcm5tZW50OiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQgd2lsbCBpbmRpY2F0ZSBhbiBlcnJvci4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgZXJyb3I6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIHRha2UgdXAgdGhlIGZ1bGwgd2lkdGggb2YgaXRzIGNvbnRhaW5lci5cbiAgICovXG4gIGZ1bGxXaWR0aDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBpZCBvZiB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGlucHV0Q29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFtBdHRyaWJ1dGVzXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjQXR0cmlidXRlcykgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRQcm9wczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogUGFzcyBhIHJlZiB0byB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKi9cbiAgaW5wdXRSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGBkZW5zZWAsIHdpbGwgYWRqdXN0IHZlcnRpY2FsIHNwYWNpbmcuIFRoaXMgaXMgbm9ybWFsbHkgb2J0YWluZWQgdmlhIGNvbnRleHQgZnJvbVxuICAgKiBGb3JtQ29udHJvbC5cbiAgICovXG4gIG1hcmdpbjogUHJvcFR5cGVzLm9uZU9mKFsnZGVuc2UnLCAnbm9uZSddKSxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBhIHRleHRhcmVhIGVsZW1lbnQgd2lsbCBiZSByZW5kZXJlZC5cbiAgICovXG4gIG11bHRpbGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE5hbWUgYXR0cmlidXRlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIFlvdSBjYW4gcHVsbCBvdXQgdGhlIG5ldyB2YWx1ZSBieSBhY2Nlc3NpbmcgYGV2ZW50LnRhcmdldC52YWx1ZWAgKHN0cmluZykuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaG9ydCBoaW50IGRpc3BsYXllZCBpbiB0aGUgaW5wdXQgYmVmb3JlIHRoZSB1c2VyIGVudGVycyBhIHZhbHVlLlxuICAgKi9cbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEl0IHByZXZlbnRzIHRoZSB1c2VyIGZyb20gY2hhbmdpbmcgdGhlIHZhbHVlIG9mIHRoZSBmaWVsZFxuICAgKiAobm90IGZyb20gaW50ZXJhY3Rpbmcgd2l0aCB0aGUgZmllbGQpLlxuICAgKi9cbiAgcmVhZE9ubHk6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSByZXF1aXJlZC5cbiAgICovXG4gIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheSB3aGVuIG11bHRpbGluZSBvcHRpb24gaXMgc2V0IHRvIHRydWUuXG4gICAqL1xuICByb3dzTWF4OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIFN0YXJ0IGBJbnB1dEFkb3JubWVudGAgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgc3RhcnRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuIEl0IHNob3VsZCBiZSBbYSB2YWxpZCBIVE1MNSBpbnB1dCB0eXBlXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVE1ML0VsZW1lbnQvaW5wdXQjRm9ybV8lM0NpbnB1dCUzRV90eXBlcykuXG4gICAqL1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudCwgcmVxdWlyZWQgZm9yIGEgY29udHJvbGxlZCBjb21wb25lbnQuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueVxufSA6IHZvaWQgMDtcbklucHV0Lm11aU5hbWUgPSAnSW5wdXQnO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUlucHV0J1xufSkoSW5wdXQpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0lucHV0JzsiLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgeyBmb3JtYXRNdWlFcnJvck1lc3NhZ2UgYXMgX2Zvcm1hdE11aUVycm9yTWVzc2FnZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvdXRpbHNcIjtcblxuLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvY2xpY2stZXZlbnRzLWhhdmUta2V5LWV2ZW50cywganN4LWExMXkvbm8tc3RhdGljLWVsZW1lbnQtaW50ZXJhY3Rpb25zICovXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyByZWZUeXBlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmltcG9ydCBmb3JtQ29udHJvbFN0YXRlIGZyb20gJy4uL0Zvcm1Db250cm9sL2Zvcm1Db250cm9sU3RhdGUnO1xuaW1wb3J0IEZvcm1Db250cm9sQ29udGV4dCwgeyB1c2VGb3JtQ29udHJvbCB9IGZyb20gJy4uL0Zvcm1Db250cm9sL0Zvcm1Db250cm9sQ29udGV4dCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnLi4vVGV4dGFyZWFBdXRvc2l6ZSc7XG5pbXBvcnQgeyBpc0ZpbGxlZCB9IGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGxpZ2h0ID0gdGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnO1xuICB2YXIgcGxhY2Vob2xkZXIgPSB7XG4gICAgY29sb3I6ICdjdXJyZW50Q29sb3InLFxuICAgIG9wYWNpdHk6IGxpZ2h0ID8gMC40MiA6IDAuNSxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknLCB7XG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRlclxuICAgIH0pXG4gIH07XG4gIHZhciBwbGFjZWhvbGRlckhpZGRlbiA9IHtcbiAgICBvcGFjaXR5OiAnMCAhaW1wb3J0YW50J1xuICB9O1xuICB2YXIgcGxhY2Vob2xkZXJWaXNpYmxlID0ge1xuICAgIG9wYWNpdHk6IGxpZ2h0ID8gMC40MiA6IDAuNVxuICB9O1xuICByZXR1cm4ge1xuICAgICdAZ2xvYmFsJzoge1xuICAgICAgJ0BrZXlmcmFtZXMgbXVpLWF1dG8tZmlsbCc6IHt9LFxuICAgICAgJ0BrZXlmcmFtZXMgbXVpLWF1dG8tZmlsbC1jYW5jZWwnOiB7fVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IF9leHRlbmRzKHt9LCB0aGVtZS50eXBvZ3JhcGh5LmJvZHkxLCB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICBsaW5lSGVpZ2h0OiAnMS4xODc2ZW0nLFxuICAgICAgLy8gUmVzZXQgKDE5cHgpLCBtYXRjaCB0aGUgbmF0aXZlIGlucHV0IGxpbmUtaGVpZ2h0XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIC8vIFByZXZlbnQgcGFkZGluZyBpc3N1ZSB3aXRoIGZ1bGxXaWR0aC5cbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgY3Vyc29yOiAndGV4dCcsXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAnJiRkaXNhYmxlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5kaXNhYmxlZCxcbiAgICAgICAgY3Vyc29yOiAnZGVmYXVsdCdcbiAgICAgIH1cbiAgICB9KSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgdGhlIGNvbXBvbmVudCBpcyBhIGRlc2NlbmRhbnQgb2YgYEZvcm1Db250cm9sYC4gKi9cbiAgICBmb3JtQ29udHJvbDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb21wb25lbnQgaXMgZm9jdXNlZC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgc3RhcnRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRTdGFydDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBlbmRBZG9ybm1lbnRgIGlzIHByb3ZpZGVkLiAqL1xuICAgIGFkb3JuZWRFbmQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBtYXJnaW49XCJkZW5zZVwiYC4gKi9cbiAgICBtYXJnaW5EZW5zZToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBtdWx0aWxpbmU9e3RydWV9YC4gKi9cbiAgICBtdWx0aWxpbmU6IHtcbiAgICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KDggLSAyLCBcInB4IDAgXCIpLmNvbmNhdCg4IC0gMSwgXCJweFwiKSxcbiAgICAgICcmJG1hcmdpbkRlbnNlJzoge1xuICAgICAgICBwYWRkaW5nVG9wOiA0IC0gMVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIHRoZSBjb2xvciBpcyBzZWNvbmRhcnkuICovXG4gICAgY29sb3JTZWNvbmRhcnk6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gICAgZnVsbFdpZHRoOiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuICovXG4gICAgaW5wdXQ6IHtcbiAgICAgIGZvbnQ6ICdpbmhlcml0JyxcbiAgICAgIGxldHRlclNwYWNpbmc6ICdpbmhlcml0JyxcbiAgICAgIGNvbG9yOiAnY3VycmVudENvbG9yJyxcbiAgICAgIHBhZGRpbmc6IFwiXCIuY29uY2F0KDggLSAyLCBcInB4IDAgXCIpLmNvbmNhdCg4IC0gMSwgXCJweFwiKSxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGJveFNpemluZzogJ2NvbnRlbnQtYm94JyxcbiAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcbiAgICAgIGhlaWdodDogJzEuMTg3NmVtJyxcbiAgICAgIC8vIFJlc2V0ICgxOXB4KSwgbWF0Y2ggdGhlIG5hdGl2ZSBpbnB1dCBsaW5lLWhlaWdodFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgLy8gUmVzZXQgZm9yIFNhZmFyaVxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgLy8gTWFrZSB0aGUgZmxleCBpdGVtIHNocmluayB3aXRoIEZpcmVmb3hcbiAgICAgIG1pbldpZHRoOiAwLFxuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIC8vIEZpeCBJRSAxMSB3aWR0aCBpc3N1ZVxuICAgICAgYW5pbWF0aW9uTmFtZTogJ211aS1hdXRvLWZpbGwtY2FuY2VsJyxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAnMTBtcycsXG4gICAgICAnJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyLFxuICAgICAgJyY6Oi1tb3otcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlcixcbiAgICAgIC8vIEZpcmVmb3ggMTkrXG4gICAgICAnJjotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlcixcbiAgICAgIC8vIElFIDExXG4gICAgICAnJjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXIsXG4gICAgICAvLyBFZGdlXG4gICAgICAnJjpmb2N1cyc6IHtcbiAgICAgICAgb3V0bGluZTogMFxuICAgICAgfSxcbiAgICAgIC8vIFJlc2V0IEZpcmVmb3ggaW52YWxpZCByZXF1aXJlZCBpbnB1dCBzdHlsZVxuICAgICAgJyY6aW52YWxpZCc6IHtcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAnJjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbic6IHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSBwYWRkaW5nIHdoZW4gdHlwZT1zZWFyY2guXG4gICAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAnbm9uZSdcbiAgICAgIH0sXG4gICAgICAvLyBTaG93IGFuZCBoaWRlIHRoZSBwbGFjZWhvbGRlciBsb2dpY1xuICAgICAgJ2xhYmVsW2RhdGEtc2hyaW5rPWZhbHNlXSArICRmb3JtQ29udHJvbCAmJzoge1xuICAgICAgICAnJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAnJjo6LW1vei1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAvLyBGaXJlZm94IDE5K1xuICAgICAgICAnJjotbXMtaW5wdXQtcGxhY2Vob2xkZXInOiBwbGFjZWhvbGRlckhpZGRlbixcbiAgICAgICAgLy8gSUUgMTFcbiAgICAgICAgJyY6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVySGlkZGVuLFxuICAgICAgICAvLyBFZGdlXG4gICAgICAgICcmOmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlLFxuICAgICAgICAnJjpmb2N1czo6LW1vei1wbGFjZWhvbGRlcic6IHBsYWNlaG9sZGVyVmlzaWJsZSxcbiAgICAgICAgLy8gRmlyZWZveCAxOStcbiAgICAgICAgJyY6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlLFxuICAgICAgICAvLyBJRSAxMVxuICAgICAgICAnJjpmb2N1czo6LW1zLWlucHV0LXBsYWNlaG9sZGVyJzogcGxhY2Vob2xkZXJWaXNpYmxlIC8vIEVkZ2VcblxuICAgICAgfSxcbiAgICAgICcmJGRpc2FibGVkJzoge1xuICAgICAgICBvcGFjaXR5OiAxIC8vIFJlc2V0IGlPUyBvcGFjaXR5XG5cbiAgICAgIH0sXG4gICAgICAnJjotd2Via2l0LWF1dG9maWxsJzoge1xuICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogJzUwMDBzJyxcbiAgICAgICAgYW5pbWF0aW9uTmFtZTogJ211aS1hdXRvLWZpbGwnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG1hcmdpbj1cImRlbnNlXCJgLiAqL1xuICAgIGlucHV0TWFyZ2luRGVuc2U6IHtcbiAgICAgIHBhZGRpbmdUb3A6IDQgLSAxXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQgaWYgYG11bHRpbGluZT17dHJ1ZX1gLiAqL1xuICAgIGlucHV0TXVsdGlsaW5lOiB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHJlc2l6ZTogJ25vbmUnLFxuICAgICAgcGFkZGluZzogMFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGB0eXBlPVwic2VhcmNoXCJgLiAqL1xuICAgIGlucHV0VHlwZVNlYXJjaDoge1xuICAgICAgLy8gSW1wcm92ZSB0eXBlIHNlYXJjaCBzdHlsZS5cbiAgICAgICctbW96LWFwcGVhcmFuY2UnOiAndGV4dGZpZWxkJyxcbiAgICAgICctd2Via2l0LWFwcGVhcmFuY2UnOiAndGV4dGZpZWxkJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGlucHV0YCBlbGVtZW50IGlmIGBzdGFydEFkb3JubWVudGAgaXMgcHJvdmlkZWQuICovXG4gICAgaW5wdXRBZG9ybmVkU3RhcnQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgZW5kQWRvcm5tZW50YCBpcyBwcm92aWRlZC4gKi9cbiAgICBpbnB1dEFkb3JuZWRFbmQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpbnB1dGAgZWxlbWVudCBpZiBgaGlkZGVuTGFiZWw9e3RydWV9YC4gKi9cbiAgICBpbnB1dEhpZGRlbkxhYmVsOiB7fVxuICB9O1xufTtcbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gUmVhY3QudXNlRWZmZWN0IDogUmVhY3QudXNlTGF5b3V0RWZmZWN0O1xuLyoqXG4gKiBgSW5wdXRCYXNlYCBjb250YWlucyBhcyBmZXcgc3R5bGVzIGFzIHBvc3NpYmxlLlxuICogSXQgYWltcyB0byBiZSBhIHNpbXBsZSBidWlsZGluZyBibG9jayBmb3IgY3JlYXRpbmcgYW4gaW5wdXQuXG4gKiBJdCBjb250YWlucyBhIGxvYWQgb2Ygc3R5bGUgcmVzZXQgYW5kIHNvbWUgc3RhdGUgbG9naWMuXG4gKi9cblxudmFyIElucHV0QmFzZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIElucHV0QmFzZShwcm9wcywgcmVmKSB7XG4gIHZhciBhcmlhRGVzY3JpYmVkYnkgPSBwcm9wc1snYXJpYS1kZXNjcmliZWRieSddLFxuICAgICAgYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlLFxuICAgICAgYXV0b0ZvY3VzID0gcHJvcHMuYXV0b0ZvY3VzLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGVuZEFkb3JubWVudCA9IHByb3BzLmVuZEFkb3JubWVudCxcbiAgICAgIGVycm9yID0gcHJvcHMuZXJyb3IsXG4gICAgICBfcHJvcHMkZnVsbFdpZHRoID0gcHJvcHMuZnVsbFdpZHRoLFxuICAgICAgZnVsbFdpZHRoID0gX3Byb3BzJGZ1bGxXaWR0aCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnVsbFdpZHRoLFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIF9wcm9wcyRpbnB1dENvbXBvbmVudCA9IHByb3BzLmlucHV0Q29tcG9uZW50LFxuICAgICAgaW5wdXRDb21wb25lbnQgPSBfcHJvcHMkaW5wdXRDb21wb25lbnQgPT09IHZvaWQgMCA/ICdpbnB1dCcgOiBfcHJvcHMkaW5wdXRDb21wb25lbnQsXG4gICAgICBfcHJvcHMkaW5wdXRQcm9wcyA9IHByb3BzLmlucHV0UHJvcHMsXG4gICAgICBpbnB1dFByb3BzUHJvcCA9IF9wcm9wcyRpbnB1dFByb3BzID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRpbnB1dFByb3BzLFxuICAgICAgaW5wdXRSZWZQcm9wID0gcHJvcHMuaW5wdXRSZWYsXG4gICAgICBtYXJnaW4gPSBwcm9wcy5tYXJnaW4sXG4gICAgICBfcHJvcHMkbXVsdGlsaW5lID0gcHJvcHMubXVsdGlsaW5lLFxuICAgICAgbXVsdGlsaW5lID0gX3Byb3BzJG11bHRpbGluZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbXVsdGlsaW5lLFxuICAgICAgbmFtZSA9IHByb3BzLm5hbWUsXG4gICAgICBvbkJsdXIgPSBwcm9wcy5vbkJsdXIsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICBvbkZvY3VzID0gcHJvcHMub25Gb2N1cyxcbiAgICAgIG9uS2V5RG93biA9IHByb3BzLm9uS2V5RG93bixcbiAgICAgIG9uS2V5VXAgPSBwcm9wcy5vbktleVVwLFxuICAgICAgcGxhY2Vob2xkZXIgPSBwcm9wcy5wbGFjZWhvbGRlcixcbiAgICAgIHJlYWRPbmx5ID0gcHJvcHMucmVhZE9ubHksXG4gICAgICByZW5kZXJTdWZmaXggPSBwcm9wcy5yZW5kZXJTdWZmaXgsXG4gICAgICByb3dzID0gcHJvcHMucm93cyxcbiAgICAgIHJvd3NNYXggPSBwcm9wcy5yb3dzTWF4LFxuICAgICAgcm93c01pbiA9IHByb3BzLnJvd3NNaW4sXG4gICAgICBzdGFydEFkb3JubWVudCA9IHByb3BzLnN0YXJ0QWRvcm5tZW50LFxuICAgICAgX3Byb3BzJHR5cGUgPSBwcm9wcy50eXBlLFxuICAgICAgdHlwZSA9IF9wcm9wcyR0eXBlID09PSB2b2lkIDAgPyAndGV4dCcgOiBfcHJvcHMkdHlwZSxcbiAgICAgIHZhbHVlUHJvcCA9IHByb3BzLnZhbHVlLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFyaWEtZGVzY3JpYmVkYnlcIiwgXCJhdXRvQ29tcGxldGVcIiwgXCJhdXRvRm9jdXNcIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29sb3JcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJkaXNhYmxlZFwiLCBcImVuZEFkb3JubWVudFwiLCBcImVycm9yXCIsIFwiZnVsbFdpZHRoXCIsIFwiaWRcIiwgXCJpbnB1dENvbXBvbmVudFwiLCBcImlucHV0UHJvcHNcIiwgXCJpbnB1dFJlZlwiLCBcIm1hcmdpblwiLCBcIm11bHRpbGluZVwiLCBcIm5hbWVcIiwgXCJvbkJsdXJcIiwgXCJvbkNoYW5nZVwiLCBcIm9uQ2xpY2tcIiwgXCJvbkZvY3VzXCIsIFwib25LZXlEb3duXCIsIFwib25LZXlVcFwiLCBcInBsYWNlaG9sZGVyXCIsIFwicmVhZE9ubHlcIiwgXCJyZW5kZXJTdWZmaXhcIiwgXCJyb3dzXCIsIFwicm93c01heFwiLCBcInJvd3NNaW5cIiwgXCJzdGFydEFkb3JubWVudFwiLCBcInR5cGVcIiwgXCJ2YWx1ZVwiXSk7XG5cbiAgdmFyIHZhbHVlID0gaW5wdXRQcm9wc1Byb3AudmFsdWUgIT0gbnVsbCA/IGlucHV0UHJvcHNQcm9wLnZhbHVlIDogdmFsdWVQcm9wO1xuXG4gIHZhciBfUmVhY3QkdXNlUmVmID0gUmVhY3QudXNlUmVmKHZhbHVlICE9IG51bGwpLFxuICAgICAgaXNDb250cm9sbGVkID0gX1JlYWN0JHVzZVJlZi5jdXJyZW50O1xuXG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgaGFuZGxlSW5wdXRSZWZXYXJuaW5nID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKGluc3RhbmNlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5ub2RlTmFtZSAhPT0gJ0lOUFVUJyAmJiAhaW5zdGFuY2UuZm9jdXMpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBZb3UgaGF2ZSBwcm92aWRlZCBhIGBpbnB1dENvbXBvbmVudGAgdG8gdGhlIGlucHV0IGNvbXBvbmVudCcsICd0aGF0IGRvZXMgbm90IGNvcnJlY3RseSBoYW5kbGUgdGhlIGBpbnB1dFJlZmAgcHJvcC4nLCAnTWFrZSBzdXJlIHRoZSBgaW5wdXRSZWZgIHByb3AgaXMgY2FsbGVkIHdpdGggYSBIVE1MSW5wdXRFbGVtZW50LiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcbiAgdmFyIGhhbmRsZUlucHV0UHJvcHNSZWZQcm9wID0gdXNlRm9ya1JlZihpbnB1dFByb3BzUHJvcC5yZWYsIGhhbmRsZUlucHV0UmVmV2FybmluZyk7XG4gIHZhciBoYW5kbGVJbnB1dFJlZlByb3AgPSB1c2VGb3JrUmVmKGlucHV0UmVmUHJvcCwgaGFuZGxlSW5wdXRQcm9wc1JlZlByb3ApO1xuICB2YXIgaGFuZGxlSW5wdXRSZWYgPSB1c2VGb3JrUmVmKGlucHV0UmVmLCBoYW5kbGVJbnB1dFJlZlByb3ApO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmYWxzZSksXG4gICAgICBmb2N1c2VkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0Rm9jdXNlZCA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgbXVpRm9ybUNvbnRyb2wgPSB1c2VGb3JtQ29udHJvbCgpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChtdWlGb3JtQ29udHJvbCkge1xuICAgICAgICByZXR1cm4gbXVpRm9ybUNvbnRyb2wucmVnaXN0ZXJFZmZlY3QoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9LCBbbXVpRm9ybUNvbnRyb2xdKTtcbiAgfVxuXG4gIHZhciBmY3MgPSBmb3JtQ29udHJvbFN0YXRlKHtcbiAgICBwcm9wczogcHJvcHMsXG4gICAgbXVpRm9ybUNvbnRyb2w6IG11aUZvcm1Db250cm9sLFxuICAgIHN0YXRlczogWydjb2xvcicsICdkaXNhYmxlZCcsICdlcnJvcicsICdoaWRkZW5MYWJlbCcsICdtYXJnaW4nLCAncmVxdWlyZWQnLCAnZmlsbGVkJ11cbiAgfSk7XG4gIGZjcy5mb2N1c2VkID0gbXVpRm9ybUNvbnRyb2wgPyBtdWlGb3JtQ29udHJvbC5mb2N1c2VkIDogZm9jdXNlZDsgLy8gVGhlIGJsdXIgd29uJ3QgZmlyZSB3aGVuIHRoZSBkaXNhYmxlZCBzdGF0ZSBpcyBzZXQgb24gYSBmb2N1c2VkIGlucHV0LlxuICAvLyBXZSBuZWVkIHRvIGJvb2sga2VlcCB0aGUgZm9jdXNlZCBzdGF0ZSBtYW51YWxseS5cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICghbXVpRm9ybUNvbnRyb2wgJiYgZGlzYWJsZWQgJiYgZm9jdXNlZCkge1xuICAgICAgc2V0Rm9jdXNlZChmYWxzZSk7XG5cbiAgICAgIGlmIChvbkJsdXIpIHtcbiAgICAgICAgb25CbHVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbbXVpRm9ybUNvbnRyb2wsIGRpc2FibGVkLCBmb2N1c2VkLCBvbkJsdXJdKTtcbiAgdmFyIG9uRmlsbGVkID0gbXVpRm9ybUNvbnRyb2wgJiYgbXVpRm9ybUNvbnRyb2wub25GaWxsZWQ7XG4gIHZhciBvbkVtcHR5ID0gbXVpRm9ybUNvbnRyb2wgJiYgbXVpRm9ybUNvbnRyb2wub25FbXB0eTtcbiAgdmFyIGNoZWNrRGlydHkgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKGlzRmlsbGVkKG9iaikpIHtcbiAgICAgIGlmIChvbkZpbGxlZCkge1xuICAgICAgICBvbkZpbGxlZCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob25FbXB0eSkge1xuICAgICAgb25FbXB0eSgpO1xuICAgIH1cbiAgfSwgW29uRmlsbGVkLCBvbkVtcHR5XSk7XG4gIHVzZUVuaGFuY2VkRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaXNDb250cm9sbGVkKSB7XG4gICAgICBjaGVja0RpcnR5KHtcbiAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFt2YWx1ZSwgY2hlY2tEaXJ0eSwgaXNDb250cm9sbGVkXSk7XG5cbiAgdmFyIGhhbmRsZUZvY3VzID0gZnVuY3Rpb24gaGFuZGxlRm9jdXMoZXZlbnQpIHtcbiAgICAvLyBGaXggYSBidWcgd2l0aCBJRSAxMSB3aGVyZSB0aGUgZm9jdXMvYmx1ciBldmVudHMgYXJlIHRyaWdnZXJlZFxuICAgIC8vIHdoaWxlIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbiAgICBpZiAoZmNzLmRpc2FibGVkKSB7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob25Gb2N1cykge1xuICAgICAgb25Gb2N1cyhldmVudCk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0UHJvcHNQcm9wLm9uRm9jdXMpIHtcbiAgICAgIGlucHV0UHJvcHNQcm9wLm9uRm9jdXMoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkZvY3VzKSB7XG4gICAgICBtdWlGb3JtQ29udHJvbC5vbkZvY3VzKGV2ZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUJsdXIgPSBmdW5jdGlvbiBoYW5kbGVCbHVyKGV2ZW50KSB7XG4gICAgaWYgKG9uQmx1cikge1xuICAgICAgb25CbHVyKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAoaW5wdXRQcm9wc1Byb3Aub25CbHVyKSB7XG4gICAgICBpbnB1dFByb3BzUHJvcC5vbkJsdXIoZXZlbnQpO1xuICAgIH1cblxuICAgIGlmIChtdWlGb3JtQ29udHJvbCAmJiBtdWlGb3JtQ29udHJvbC5vbkJsdXIpIHtcbiAgICAgIG11aUZvcm1Db250cm9sLm9uQmx1cihldmVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEZvY3VzZWQoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgaWYgKCFpc0NvbnRyb2xsZWQpIHtcbiAgICAgIHZhciBlbGVtZW50ID0gZXZlbnQudGFyZ2V0IHx8IGlucHV0UmVmLmN1cnJlbnQ7XG5cbiAgICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IEV4cGVjdGVkIHZhbGlkIGlucHV0IHRhcmdldC4gRGlkIHlvdSB1c2UgYSBjdXN0b20gYGlucHV0Q29tcG9uZW50YCBhbmQgZm9yZ2V0IHRvIGZvcndhcmQgcmVmcz8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwtdWkuY29tL3IvaW5wdXQtY29tcG9uZW50LXJlZi1pbnRlcmZhY2UgZm9yIG1vcmUgaW5mby5cIiA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoMSkpO1xuICAgICAgfVxuXG4gICAgICBjaGVja0RpcnR5KHtcbiAgICAgICAgdmFsdWU6IGVsZW1lbnQudmFsdWVcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChpbnB1dFByb3BzUHJvcC5vbkNoYW5nZSkge1xuICAgICAgaW5wdXRQcm9wc1Byb3Aub25DaGFuZ2UuYXBwbHkoaW5wdXRQcm9wc1Byb3AsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9IC8vIFBlcmZvcm0gaW4gdGhlIHdpbGxVcGRhdGVcblxuXG4gICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICBvbkNoYW5nZS5hcHBseSh2b2lkIDAsIFtldmVudF0uY29uY2F0KGFyZ3MpKTtcbiAgICB9XG4gIH07IC8vIENoZWNrIHRoZSBpbnB1dCBzdGF0ZSBvbiBtb3VudCwgaW4gY2FzZSBpdCB3YXMgZmlsbGVkIGJ5IHRoZSB1c2VyXG4gIC8vIG9yIGF1dG8gZmlsbGVkIGJ5IHRoZSBicm93c2VyIGJlZm9yZSB0aGUgaHlkcmF0aW9uIChmb3IgU1NSKS5cblxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgY2hlY2tEaXJ0eShpbnB1dFJlZi5jdXJyZW50KTtcbiAgfSwgW10pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKGlucHV0UmVmLmN1cnJlbnQgJiYgZXZlbnQuY3VycmVudFRhcmdldCA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgSW5wdXRDb21wb25lbnQgPSBpbnB1dENvbXBvbmVudDtcblxuICB2YXIgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHt9LCBpbnB1dFByb3BzUHJvcCwge1xuICAgIHJlZjogaGFuZGxlSW5wdXRSZWZcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBJbnB1dENvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICBpbnB1dFByb3BzID0gX2V4dGVuZHMoe1xuICAgICAgLy8gUmVuYW1lIHJlZiB0byBpbnB1dFJlZiBhcyB3ZSBkb24ndCBrbm93IHRoZVxuICAgICAgLy8gcHJvdmlkZWQgYGlucHV0Q29tcG9uZW50YCBzdHJ1Y3R1cmUuXG4gICAgICBpbnB1dFJlZjogaGFuZGxlSW5wdXRSZWYsXG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSwgaW5wdXRQcm9wcywge1xuICAgICAgcmVmOiBudWxsXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobXVsdGlsaW5lKSB7XG4gICAgaWYgKHJvd3MgJiYgIXJvd3NNYXggJiYgIXJvd3NNaW4pIHtcbiAgICAgIElucHV0Q29tcG9uZW50ID0gJ3RleHRhcmVhJztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRQcm9wcyA9IF9leHRlbmRzKHtcbiAgICAgICAgcm93czogcm93cyxcbiAgICAgICAgcm93c01heDogcm93c01heFxuICAgICAgfSwgaW5wdXRQcm9wcyk7XG4gICAgICBJbnB1dENvbXBvbmVudCA9IFRleHRhcmVhQXV0b3NpemU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlucHV0UHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgICB0eXBlOiB0eXBlXG4gICAgfSwgaW5wdXRQcm9wcyk7XG4gIH1cblxuICB2YXIgaGFuZGxlQXV0b0ZpbGwgPSBmdW5jdGlvbiBoYW5kbGVBdXRvRmlsbChldmVudCkge1xuICAgIC8vIFByb3ZpZGUgYSBmYWtlIHZhbHVlIGFzIENocm9tZSBtaWdodCBub3QgbGV0IHlvdSBhY2Nlc3MgaXQgZm9yIHNlY3VyaXR5IHJlYXNvbnMuXG4gICAgY2hlY2tEaXJ0eShldmVudC5hbmltYXRpb25OYW1lID09PSAnbXVpLWF1dG8tZmlsbC1jYW5jZWwnID8gaW5wdXRSZWYuY3VycmVudCA6IHtcbiAgICAgIHZhbHVlOiAneCdcbiAgICB9KTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtdWlGb3JtQ29udHJvbCkge1xuICAgICAgbXVpRm9ybUNvbnRyb2wuc2V0QWRvcm5lZFN0YXJ0KEJvb2xlYW4oc3RhcnRBZG9ybm1lbnQpKTtcbiAgICB9XG4gIH0sIFttdWlGb3JtQ29udHJvbCwgc3RhcnRBZG9ybm1lbnRdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc2VzW1wiY29sb3JcIi5jb25jYXQoY2FwaXRhbGl6ZShmY3MuY29sb3IgfHwgJ3ByaW1hcnknKSldLCBjbGFzc05hbWUsIGZjcy5kaXNhYmxlZCAmJiBjbGFzc2VzLmRpc2FibGVkLCBmY3MuZXJyb3IgJiYgY2xhc3Nlcy5lcnJvciwgZnVsbFdpZHRoICYmIGNsYXNzZXMuZnVsbFdpZHRoLCBmY3MuZm9jdXNlZCAmJiBjbGFzc2VzLmZvY3VzZWQsIG11aUZvcm1Db250cm9sICYmIGNsYXNzZXMuZm9ybUNvbnRyb2wsIG11bHRpbGluZSAmJiBjbGFzc2VzLm11bHRpbGluZSwgc3RhcnRBZG9ybm1lbnQgJiYgY2xhc3Nlcy5hZG9ybmVkU3RhcnQsIGVuZEFkb3JubWVudCAmJiBjbGFzc2VzLmFkb3JuZWRFbmQsIGZjcy5tYXJnaW4gPT09ICdkZW5zZScgJiYgY2xhc3Nlcy5tYXJnaW5EZW5zZSksXG4gICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBzdGFydEFkb3JubWVudCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybUNvbnRyb2xDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IG51bGxcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoSW5wdXRDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBcImFyaWEtaW52YWxpZFwiOiBmY3MuZXJyb3IsXG4gICAgXCJhcmlhLWRlc2NyaWJlZGJ5XCI6IGFyaWFEZXNjcmliZWRieSxcbiAgICBhdXRvQ29tcGxldGU6IGF1dG9Db21wbGV0ZSxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSxcbiAgICBkaXNhYmxlZDogZmNzLmRpc2FibGVkLFxuICAgIGlkOiBpZCxcbiAgICBvbkFuaW1hdGlvblN0YXJ0OiBoYW5kbGVBdXRvRmlsbCxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICByZWFkT25seTogcmVhZE9ubHksXG4gICAgcmVxdWlyZWQ6IGZjcy5yZXF1aXJlZCxcbiAgICByb3dzOiByb3dzLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBvbktleURvd246IG9uS2V5RG93bixcbiAgICBvbktleVVwOiBvbktleVVwXG4gIH0sIGlucHV0UHJvcHMsIHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5pbnB1dCwgaW5wdXRQcm9wc1Byb3AuY2xhc3NOYW1lLCBmY3MuZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCwgbXVsdGlsaW5lICYmIGNsYXNzZXMuaW5wdXRNdWx0aWxpbmUsIGZjcy5oaWRkZW5MYWJlbCAmJiBjbGFzc2VzLmlucHV0SGlkZGVuTGFiZWwsIHN0YXJ0QWRvcm5tZW50ICYmIGNsYXNzZXMuaW5wdXRBZG9ybmVkU3RhcnQsIGVuZEFkb3JubWVudCAmJiBjbGFzc2VzLmlucHV0QWRvcm5lZEVuZCwgdHlwZSA9PT0gJ3NlYXJjaCcgJiYgY2xhc3Nlcy5pbnB1dFR5cGVTZWFyY2gsIGZjcy5tYXJnaW4gPT09ICdkZW5zZScgJiYgY2xhc3Nlcy5pbnB1dE1hcmdpbkRlbnNlKSxcbiAgICBvbkJsdXI6IGhhbmRsZUJsdXIsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNoYW5nZSxcbiAgICBvbkZvY3VzOiBoYW5kbGVGb2N1c1xuICB9KSkpLCBlbmRBZG9ybm1lbnQsIHJlbmRlclN1ZmZpeCA/IHJlbmRlclN1ZmZpeChfZXh0ZW5kcyh7fSwgZmNzLCB7XG4gICAgc3RhcnRBZG9ybm1lbnQ6IHN0YXJ0QWRvcm5tZW50XG4gIH0pKSA6IG51bGwpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBJbnB1dEJhc2UucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgJ2FyaWEtZGVzY3JpYmVkYnknOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaGVscHMgdXNlcnMgdG8gZmlsbCBmb3JtcyBmYXN0ZXIsIGVzcGVjaWFsbHkgb24gbW9iaWxlIGRldmljZXMuXG4gICAqIFRoZSBuYW1lIGNhbiBiZSBjb25mdXNpbmcsIGFzIGl0J3MgbW9yZSBsaWtlIGFuIGF1dG9maWxsLlxuICAgKiBZb3UgY2FuIGxlYXJuIG1vcmUgYWJvdXQgaXQgW2ZvbGxvd2luZyB0aGUgc3BlY2lmaWNhdGlvbl0oaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybS1jb250cm9sLWluZnJhc3RydWN0dXJlLmh0bWwjYXV0b2ZpbGwpLlxuICAgKi9cbiAgYXV0b0NvbXBsZXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBgaW5wdXRgIGVsZW1lbnQgd2lsbCBiZSBmb2N1c2VkIGR1cmluZyB0aGUgZmlyc3QgbW91bnQuXG4gICAqL1xuICBhdXRvRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ3ByaW1hcnknLCAnc2Vjb25kYXJ5J10pLFxuXG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCBgaW5wdXRgIGVsZW1lbnQgdmFsdWUuIFVzZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbm90IGNvbnRyb2xsZWQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBFbmQgYElucHV0QWRvcm5tZW50YCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBlbmRBZG9ybm1lbnQ6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIGluZGljYXRlIGFuIGVycm9yLiBUaGlzIGlzIG5vcm1hbGx5IG9idGFpbmVkIHZpYSBjb250ZXh0IGZyb21cbiAgICogRm9ybUNvbnRyb2wuXG4gICAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGlkIG9mIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgYGlucHV0YCBlbGVtZW50LlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgaW5wdXRDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogW0F0dHJpYnV0ZXNdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNBdHRyaWJ1dGVzKSBhcHBsaWVkIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBQYXNzIGEgcmVmIHRvIHRoZSBgaW5wdXRgIGVsZW1lbnQuXG4gICAqL1xuICBpbnB1dFJlZjogcmVmVHlwZSxcblxuICAvKipcbiAgICogSWYgYGRlbnNlYCwgd2lsbCBhZGp1c3QgdmVydGljYWwgc3BhY2luZy4gVGhpcyBpcyBub3JtYWxseSBvYnRhaW5lZCB2aWEgY29udGV4dCBmcm9tXG4gICAqIEZvcm1Db250cm9sLlxuICAgKi9cbiAgbWFyZ2luOiBQcm9wVHlwZXMub25lT2YoWydkZW5zZScsICdub25lJ10pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIGEgdGV4dGFyZWEgZWxlbWVudCB3aWxsIGJlIHJlbmRlcmVkLlxuICAgKi9cbiAgbXVsdGlsaW5lOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogTmFtZSBhdHRyaWJ1dGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC5cbiAgICovXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGlucHV0IGlzIGJsdXJyZWQuXG4gICAqXG4gICAqIE5vdGljZSB0aGF0IHRoZSBmaXJzdCBhcmd1bWVudCAoZXZlbnQpIG1pZ2h0IGJlIHVuZGVmaW5lZC5cbiAgICovXG4gIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGlzIGNoYW5nZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogWW91IGNhbiBwdWxsIG91dCB0aGUgbmV3IHZhbHVlIGJ5IGFjY2Vzc2luZyBgZXZlbnQudGFyZ2V0LnZhbHVlYCAoc3RyaW5nKS5cbiAgICovXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DbGljazogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbktleURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbktleVVwOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVGhlIHNob3J0IGhpbnQgZGlzcGxheWVkIGluIHRoZSBpbnB1dCBiZWZvcmUgdGhlIHVzZXIgZW50ZXJzIGEgdmFsdWUuXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSXQgcHJldmVudHMgdGhlIHVzZXIgZnJvbSBjaGFuZ2luZyB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkXG4gICAqIChub3QgZnJvbSBpbnRlcmFjdGluZyB3aXRoIHRoZSBmaWVsZCkuXG4gICAqL1xuICByZWFkT25seTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHJlbmRlclN1ZmZpeDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGBpbnB1dGAgZWxlbWVudCB3aWxsIGJlIHJlcXVpcmVkLlxuICAgKi9cbiAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3M6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWF4aW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3NNYXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWluaW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5IHdoZW4gbXVsdGlsaW5lIG9wdGlvbiBpcyBzZXQgdG8gdHJ1ZS5cbiAgICovXG4gIHJvd3NNaW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogU3RhcnQgYElucHV0QWRvcm5tZW50YCBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBzdGFydEFkb3JubWVudDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIGBpbnB1dGAgZWxlbWVudC4gSXQgc2hvdWxkIGJlIFthIHZhbGlkIEhUTUw1IGlucHV0IHR5cGVdKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNGb3JtXyUzQ2lucHV0JTNFX3R5cGVzKS5cbiAgICovXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgYGlucHV0YCBlbGVtZW50LCByZXF1aXJlZCBmb3IgYSBjb250cm9sbGVkIGNvbXBvbmVudC5cbiAgICovXG4gIHZhbHVlOiBQcm9wVHlwZXMuYW55XG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUlucHV0QmFzZSdcbn0pKElucHV0QmFzZSk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vSW5wdXRCYXNlJzsiLCIvLyBTdXBwb3J0cyBkZXRlcm1pbmF0aW9uIG9mIGlzQ29udHJvbGxlZCgpLlxuLy8gQ29udHJvbGxlZCBpbnB1dCBhY2NlcHRzIGl0cyBjdXJyZW50IHZhbHVlIGFzIGEgcHJvcC5cbi8vXG4vLyBAc2VlIGh0dHBzOi8vZmFjZWJvb2suZ2l0aHViLmlvL3JlYWN0L2RvY3MvZm9ybXMuaHRtbCNjb250cm9sbGVkLWNvbXBvbmVudHNcbi8vIEBwYXJhbSB2YWx1ZVxuLy8gQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgc3RyaW5nIChpbmNsdWRpbmcgJycpIG9yIG51bWJlciAoaW5jbHVkaW5nIHplcm8pXG5leHBvcnQgZnVuY3Rpb24gaGFzVmFsdWUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgIShBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApO1xufSAvLyBEZXRlcm1pbmUgaWYgZmllbGQgaXMgZW1wdHkgb3IgZmlsbGVkLlxuLy8gUmVzcG9uc2UgZGV0ZXJtaW5lcyBpZiBsYWJlbCBpcyBwcmVzZW50ZWQgYWJvdmUgZmllbGQgb3IgYXMgcGxhY2Vob2xkZXIuXG4vL1xuLy8gQHBhcmFtIG9ialxuLy8gQHBhcmFtIFNTUlxuLy8gQHJldHVybnMge2Jvb2xlYW59IEZhbHNlIHdoZW4gbm90IHByZXNlbnQgb3IgZW1wdHkgc3RyaW5nLlxuLy8gICAgICAgICAgICAgICAgICAgIFRydWUgd2hlbiBhbnkgbnVtYmVyIG9yIHN0cmluZyB3aXRoIGxlbmd0aC5cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRmlsbGVkKG9iaikge1xuICB2YXIgU1NSID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBmYWxzZTtcbiAgcmV0dXJuIG9iaiAmJiAoaGFzVmFsdWUob2JqLnZhbHVlKSAmJiBvYmoudmFsdWUgIT09ICcnIHx8IFNTUiAmJiBoYXNWYWx1ZShvYmouZGVmYXVsdFZhbHVlKSAmJiBvYmouZGVmYXVsdFZhbHVlICE9PSAnJyk7XG59IC8vIERldGVybWluZSBpZiBhbiBJbnB1dCBpcyBhZG9ybmVkIG9uIHN0YXJ0LlxuLy8gSXQncyBjb3JyZXNwb25kaW5nIHRvIHRoZSBsZWZ0IHdpdGggTFRSLlxuLy9cbi8vIEBwYXJhbSBvYmpcbi8vIEByZXR1cm5zIHtib29sZWFufSBGYWxzZSB3aGVuIG5vIGFkb3JubWVudHMuXG4vLyAgICAgICAgICAgICAgICAgICAgVHJ1ZSB3aGVuIGFkb3JuZWQgYXQgdGhlIHN0YXJ0LlxuXG5leHBvcnQgZnVuY3Rpb24gaXNBZG9ybmVkU3RhcnQob2JqKSB7XG4gIHJldHVybiBvYmouc3RhcnRBZG9ybm1lbnQ7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICcuLi91dGlscy9kZWJvdW5jZSc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcblxuZnVuY3Rpb24gZ2V0U3R5bGVWYWx1ZShjb21wdXRlZFN0eWxlLCBwcm9wZXJ0eSkge1xuICByZXR1cm4gcGFyc2VJbnQoY29tcHV0ZWRTdHlsZVtwcm9wZXJ0eV0sIDEwKSB8fCAwO1xufVxuXG52YXIgdXNlRW5oYW5jZWRFZmZlY3QgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcbnZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBzaGFkb3cgdGV4dGFyZWEgZWxlbWVudC4gKi9cbiAgc2hhZG93OiB7XG4gICAgLy8gVmlzaWJpbGl0eSBuZWVkZWQgdG8gaGlkZSB0aGUgZXh0cmEgdGV4dCBhcmVhIG9uIGlQYWRzXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgLy8gUmVtb3ZlIGZyb20gdGhlIGNvbnRlbnQgZmxvd1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIC8vIElnbm9yZSB0aGUgc2Nyb2xsYmFyIHdpZHRoXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgIGhlaWdodDogMCxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICAvLyBDcmVhdGUgYSBuZXcgbGF5ZXIsIGluY3JlYXNlIHRoZSBpc29sYXRpb24gb2YgdGhlIGNvbXB1dGVkIHZhbHVlc1xuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVooMCknXG4gIH1cbn07XG52YXIgVGV4dGFyZWFBdXRvc2l6ZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIFRleHRhcmVhQXV0b3NpemUocHJvcHMsIHJlZikge1xuICB2YXIgb25DaGFuZ2UgPSBwcm9wcy5vbkNoYW5nZSxcbiAgICAgIHJvd3MgPSBwcm9wcy5yb3dzLFxuICAgICAgcm93c01heCA9IHByb3BzLnJvd3NNYXgsXG4gICAgICBfcHJvcHMkcm93c01pbiA9IHByb3BzLnJvd3NNaW4sXG4gICAgICByb3dzTWluUHJvcCA9IF9wcm9wcyRyb3dzTWluID09PSB2b2lkIDAgPyAxIDogX3Byb3BzJHJvd3NNaW4sXG4gICAgICBzdHlsZSA9IHByb3BzLnN0eWxlLFxuICAgICAgdmFsdWUgPSBwcm9wcy52YWx1ZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJvbkNoYW5nZVwiLCBcInJvd3NcIiwgXCJyb3dzTWF4XCIsIFwicm93c01pblwiLCBcInN0eWxlXCIsIFwidmFsdWVcIl0pO1xuXG4gIHZhciByb3dzTWluID0gcm93cyB8fCByb3dzTWluUHJvcDtcblxuICB2YXIgX1JlYWN0JHVzZVJlZiA9IFJlYWN0LnVzZVJlZih2YWx1ZSAhPSBudWxsKSxcbiAgICAgIGlzQ29udHJvbGxlZCA9IF9SZWFjdCR1c2VSZWYuY3VycmVudDtcblxuICB2YXIgaW5wdXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKHJlZiwgaW5wdXRSZWYpO1xuICB2YXIgc2hhZG93UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgcmVuZGVycyA9IFJlYWN0LnVzZVJlZigwKTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlID0gUmVhY3QudXNlU3RhdGUoe30pLFxuICAgICAgc3RhdGUgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRTdGF0ZSA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgc3luY0hlaWdodCA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5wdXQgPSBpbnB1dFJlZi5jdXJyZW50O1xuICAgIHZhciBjb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaW5wdXQpO1xuICAgIHZhciBpbnB1dFNoYWxsb3cgPSBzaGFkb3dSZWYuY3VycmVudDtcbiAgICBpbnB1dFNoYWxsb3cuc3R5bGUud2lkdGggPSBjb21wdXRlZFN0eWxlLndpZHRoO1xuICAgIGlucHV0U2hhbGxvdy52YWx1ZSA9IGlucHV0LnZhbHVlIHx8IHByb3BzLnBsYWNlaG9sZGVyIHx8ICd4JztcblxuICAgIGlmIChpbnB1dFNoYWxsb3cudmFsdWUuc2xpY2UoLTEpID09PSAnXFxuJykge1xuICAgICAgLy8gQ2VydGFpbiBmb250cyB3aGljaCBvdmVyZmxvdyB0aGUgbGluZSBoZWlnaHQgd2lsbCBjYXVzZSB0aGUgdGV4dGFyZWFcbiAgICAgIC8vIHRvIHJlcG9ydCBhIGRpZmZlcmVudCBzY3JvbGxIZWlnaHQgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGxhc3QgbGluZVxuICAgICAgLy8gaXMgZW1wdHkuIE1ha2UgaXQgbm9uLWVtcHR5IHRvIGF2b2lkIHRoaXMgaXNzdWUuXG4gICAgICBpbnB1dFNoYWxsb3cudmFsdWUgKz0gJyAnO1xuICAgIH1cblxuICAgIHZhciBib3hTaXppbmcgPSBjb21wdXRlZFN0eWxlWydib3gtc2l6aW5nJ107XG4gICAgdmFyIHBhZGRpbmcgPSBnZXRTdHlsZVZhbHVlKGNvbXB1dGVkU3R5bGUsICdwYWRkaW5nLWJvdHRvbScpICsgZ2V0U3R5bGVWYWx1ZShjb21wdXRlZFN0eWxlLCAncGFkZGluZy10b3AnKTtcbiAgICB2YXIgYm9yZGVyID0gZ2V0U3R5bGVWYWx1ZShjb21wdXRlZFN0eWxlLCAnYm9yZGVyLWJvdHRvbS13aWR0aCcpICsgZ2V0U3R5bGVWYWx1ZShjb21wdXRlZFN0eWxlLCAnYm9yZGVyLXRvcC13aWR0aCcpOyAvLyBUaGUgaGVpZ2h0IG9mIHRoZSBpbm5lciBjb250ZW50XG5cbiAgICB2YXIgaW5uZXJIZWlnaHQgPSBpbnB1dFNoYWxsb3cuc2Nyb2xsSGVpZ2h0IC0gcGFkZGluZzsgLy8gTWVhc3VyZSBoZWlnaHQgb2YgYSB0ZXh0YXJlYSB3aXRoIGEgc2luZ2xlIHJvd1xuXG4gICAgaW5wdXRTaGFsbG93LnZhbHVlID0gJ3gnO1xuICAgIHZhciBzaW5nbGVSb3dIZWlnaHQgPSBpbnB1dFNoYWxsb3cuc2Nyb2xsSGVpZ2h0IC0gcGFkZGluZzsgLy8gVGhlIGhlaWdodCBvZiB0aGUgb3V0ZXIgY29udGVudFxuXG4gICAgdmFyIG91dGVySGVpZ2h0ID0gaW5uZXJIZWlnaHQ7XG5cbiAgICBpZiAocm93c01pbikge1xuICAgICAgb3V0ZXJIZWlnaHQgPSBNYXRoLm1heChOdW1iZXIocm93c01pbikgKiBzaW5nbGVSb3dIZWlnaHQsIG91dGVySGVpZ2h0KTtcbiAgICB9XG5cbiAgICBpZiAocm93c01heCkge1xuICAgICAgb3V0ZXJIZWlnaHQgPSBNYXRoLm1pbihOdW1iZXIocm93c01heCkgKiBzaW5nbGVSb3dIZWlnaHQsIG91dGVySGVpZ2h0KTtcbiAgICB9XG5cbiAgICBvdXRlckhlaWdodCA9IE1hdGgubWF4KG91dGVySGVpZ2h0LCBzaW5nbGVSb3dIZWlnaHQpOyAvLyBUYWtlIHRoZSBib3ggc2l6aW5nIGludG8gYWNjb3VudCBmb3IgYXBwbHlpbmcgdGhpcyB2YWx1ZSBhcyBhIHN0eWxlLlxuXG4gICAgdmFyIG91dGVySGVpZ2h0U3R5bGUgPSBvdXRlckhlaWdodCArIChib3hTaXppbmcgPT09ICdib3JkZXItYm94JyA/IHBhZGRpbmcgKyBib3JkZXIgOiAwKTtcbiAgICB2YXIgb3ZlcmZsb3cgPSBNYXRoLmFicyhvdXRlckhlaWdodCAtIGlubmVySGVpZ2h0KSA8PSAxO1xuICAgIHNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgIC8vIE5lZWQgYSBsYXJnZSBlbm91Z2ggZGlmZmVyZW5jZSB0byB1cGRhdGUgdGhlIGhlaWdodC5cbiAgICAgIC8vIFRoaXMgcHJldmVudHMgaW5maW5pdGUgcmVuZGVyaW5nIGxvb3AuXG4gICAgICBpZiAocmVuZGVycy5jdXJyZW50IDwgMjAgJiYgKG91dGVySGVpZ2h0U3R5bGUgPiAwICYmIE1hdGguYWJzKChwcmV2U3RhdGUub3V0ZXJIZWlnaHRTdHlsZSB8fCAwKSAtIG91dGVySGVpZ2h0U3R5bGUpID4gMSB8fCBwcmV2U3RhdGUub3ZlcmZsb3cgIT09IG92ZXJmbG93KSkge1xuICAgICAgICByZW5kZXJzLmN1cnJlbnQgKz0gMTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBvdmVyZmxvdzogb3ZlcmZsb3csXG4gICAgICAgICAgb3V0ZXJIZWlnaHRTdHlsZTogb3V0ZXJIZWlnaHRTdHlsZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAocmVuZGVycy5jdXJyZW50ID09PSAyMCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoWydNYXRlcmlhbC1VSTogVG9vIG1hbnkgcmUtcmVuZGVycy4gVGhlIGxheW91dCBpcyB1bnN0YWJsZS4nLCAnVGV4dGFyZWFBdXRvc2l6ZSBsaW1pdHMgdGhlIG51bWJlciBvZiByZW5kZXJzIHRvIHByZXZlbnQgYW4gaW5maW5pdGUgbG9vcC4nXS5qb2luKCdcXG4nKSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZTdGF0ZTtcbiAgICB9KTtcbiAgfSwgW3Jvd3NNYXgsIHJvd3NNaW4sIHByb3BzLnBsYWNlaG9sZGVyXSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZVJlc2l6ZSA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlbmRlcnMuY3VycmVudCA9IDA7XG4gICAgICBzeW5jSGVpZ2h0KCk7XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGhhbmRsZVJlc2l6ZS5jbGVhcigpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfTtcbiAgfSwgW3N5bmNIZWlnaHRdKTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHN5bmNIZWlnaHQoKTtcbiAgfSk7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmVuZGVycy5jdXJyZW50ID0gMDtcbiAgfSwgW3ZhbHVlXSk7XG5cbiAgdmFyIGhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHJlbmRlcnMuY3VycmVudCA9IDA7XG5cbiAgICBpZiAoIWlzQ29udHJvbGxlZCkge1xuICAgICAgc3luY0hlaWdodCgpO1xuICAgIH1cblxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgX2V4dGVuZHMoe1xuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBvbkNoYW5nZTogaGFuZGxlQ2hhbmdlLFxuICAgIHJlZjogaGFuZGxlUmVmIC8vIEFwcGx5IHRoZSByb3dzIHByb3AgdG8gZ2V0IGEgXCJjb3JyZWN0XCIgZmlyc3QgU1NSIHBhaW50XG4gICAgLFxuICAgIHJvd3M6IHJvd3NNaW4sXG4gICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgIGhlaWdodDogc3RhdGUub3V0ZXJIZWlnaHRTdHlsZSxcbiAgICAgIC8vIE5lZWQgYSBsYXJnZSBlbm91Z2ggZGlmZmVyZW5jZSB0byBhbGxvdyBzY3JvbGxpbmcuXG4gICAgICAvLyBUaGlzIHByZXZlbnRzIGluZmluaXRlIHJlbmRlcmluZyBsb29wLlxuICAgICAgb3ZlcmZsb3c6IHN0YXRlLm92ZXJmbG93ID8gJ2hpZGRlbicgOiBudWxsXG4gICAgfSwgc3R5bGUpXG4gIH0sIG90aGVyKSksIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwge1xuICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICBjbGFzc05hbWU6IHByb3BzLmNsYXNzTmFtZSxcbiAgICByZWFkT25seTogdHJ1ZSxcbiAgICByZWY6IHNoYWRvd1JlZixcbiAgICB0YWJJbmRleDogLTEsXG4gICAgc3R5bGU6IF9leHRlbmRzKHt9LCBzdHlsZXMuc2hhZG93LCBzdHlsZSlcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBUZXh0YXJlYUF1dG9zaXplLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVXNlIGByb3dzTWluYCBpbnN0ZWFkLiBUaGUgcHJvcCB3aWxsIGJlIHJlbW92ZWQgaW4gdjUuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkXG4gICAqL1xuICByb3dzOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSksXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIHJvd3MgdG8gZGlzcGxheS5cbiAgICovXG4gIHJvd3NNYXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKipcbiAgICogTWluaW11bSBudW1iZXIgb2Ygcm93cyB0byBkaXNwbGF5LlxuICAgKi9cbiAgcm93c01pbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSlcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYUF1dG9zaXplOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RleHRhcmVhQXV0b3NpemUnOyIsImltcG9ydCB7IGRlZXBtZXJnZSB9IGZyb20gJ0BtYXRlcmlhbC11aS91dGlscyc7XG5pbXBvcnQgY3JlYXRlTXVpVGhlbWUgZnJvbSAnLi9jcmVhdGVNdWlUaGVtZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUob3B0aW9ucykge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gY3JlYXRlTXVpVGhlbWUuYXBwbHkodm9pZCAwLCBbZGVlcG1lcmdlKHtcbiAgICB1bnN0YWJsZV9zdHJpY3RNb2RlOiB0cnVlXG4gIH0sIG9wdGlvbnMpXS5jb25jYXQoYXJncykpO1xufSIsImltcG9ydCB7IGNyZWF0ZVN0eWxlcyBhcyBjcmVhdGVTdHlsZXNPcmlnaW5hbCB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnOyAvLyBsZXQgd2Fybk9uY2UgPSBmYWxzZTtcbi8vIFRvIHJlbW92ZSBpbiB2NVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTdHlsZXMoc3R5bGVzKSB7XG4gIC8vIHdhcm5pbmcoXG4gIC8vICAgd2Fybk9uY2UsXG4gIC8vICAgW1xuICAvLyAgICAgJ01hdGVyaWFsLVVJOiBjcmVhdGVTdHlsZXMgZnJvbSBAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMgaXMgZGVwcmVjYXRlZC4nLFxuICAvLyAgICAgJ1BsZWFzZSB1c2UgQG1hdGVyaWFsLXVpL3N0eWxlcy9jcmVhdGVTdHlsZXMnLFxuICAvLyAgIF0uam9pbignXFxuJyksXG4gIC8vICk7XG4gIC8vIHdhcm5PbmNlID0gdHJ1ZTtcbiAgcmV0dXJuIGNyZWF0ZVN0eWxlc09yaWdpbmFsKHN0eWxlcyk7XG59IiwiaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHlcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc1VuaXRsZXNzKHZhbHVlKSB7XG4gIHJldHVybiBTdHJpbmcocGFyc2VGbG9hdCh2YWx1ZSkpLmxlbmd0aCA9PT0gU3RyaW5nKHZhbHVlKS5sZW5ndGg7XG59IC8vIFBvcnRlZCBmcm9tIENvbXBhc3Ncbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Db21wYXNzL2NvbXBhc3MvYmxvYi9tYXN0ZXIvY29yZS9zdHlsZXNoZWV0cy9jb21wYXNzL3R5cG9ncmFwaHkvX3VuaXRzLnNjc3Ncbi8vIEVtdWxhdGUgdGhlIHNhc3MgZnVuY3Rpb24gXCJ1bml0XCJcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXQoaW5wdXQpIHtcbiAgcmV0dXJuIFN0cmluZyhpbnB1dCkubWF0Y2goL1tcXGQuXFwtK10qXFxzKiguKikvKVsxXSB8fCAnJztcbn0gLy8gRW11bGF0ZSB0aGUgc2FzcyBmdW5jdGlvbiBcInVuaXRsZXNzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5pdGxlc3MobGVuZ3RoKSB7XG4gIHJldHVybiBwYXJzZUZsb2F0KGxlbmd0aCk7XG59IC8vIENvbnZlcnQgYW55IENTUyA8bGVuZ3RoPiBvciA8cGVyY2VudGFnZT4gdmFsdWUgdG8gYW55IGFub3RoZXIuXG4vLyBGcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9LeWxlQU1hdGhld3MvY29udmVydC1jc3MtbGVuZ3RoXG5cbmV4cG9ydCBmdW5jdGlvbiBjb252ZXJ0TGVuZ3RoKGJhc2VGb250U2l6ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGxlbmd0aCwgdG9Vbml0KSB7XG4gICAgdmFyIGZyb21Vbml0ID0gZ2V0VW5pdChsZW5ndGgpOyAvLyBPcHRpbWl6ZSBmb3IgY2FzZXMgd2hlcmUgYGZyb21gIGFuZCBgdG9gIHVuaXRzIGFyZSBhY2NpZGVudGFsbHkgdGhlIHNhbWUuXG5cbiAgICBpZiAoZnJvbVVuaXQgPT09IHRvVW5pdCkge1xuICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9IC8vIENvbnZlcnQgaW5wdXQgbGVuZ3RoIHRvIHBpeGVscy5cblxuXG4gICAgdmFyIHB4TGVuZ3RoID0gdG9Vbml0bGVzcyhsZW5ndGgpO1xuXG4gICAgaWYgKGZyb21Vbml0ICE9PSAncHgnKSB7XG4gICAgICBpZiAoZnJvbVVuaXQgPT09ICdlbScpIHtcbiAgICAgICAgcHhMZW5ndGggPSB0b1VuaXRsZXNzKGxlbmd0aCkgKiB0b1VuaXRsZXNzKGJhc2VGb250U2l6ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZyb21Vbml0ID09PSAncmVtJykge1xuICAgICAgICBweExlbmd0aCA9IHRvVW5pdGxlc3MobGVuZ3RoKSAqIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICAgIH1cbiAgICB9IC8vIENvbnZlcnQgbGVuZ3RoIGluIHBpeGVscyB0byB0aGUgb3V0cHV0IHVuaXRcblxuXG4gICAgdmFyIG91dHB1dExlbmd0aCA9IHB4TGVuZ3RoO1xuXG4gICAgaWYgKHRvVW5pdCAhPT0gJ3B4Jykge1xuICAgICAgaWYgKHRvVW5pdCA9PT0gJ2VtJykge1xuICAgICAgICBvdXRwdXRMZW5ndGggPSBweExlbmd0aCAvIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSBpZiAodG9Vbml0ID09PSAncmVtJykge1xuICAgICAgICBvdXRwdXRMZW5ndGggPSBweExlbmd0aCAvIHRvVW5pdGxlc3MoYmFzZUZvbnRTaXplKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlRmxvYXQob3V0cHV0TGVuZ3RoLnRvRml4ZWQoNSkpICsgdG9Vbml0O1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFsaWduUHJvcGVydHkoX3JlZikge1xuICB2YXIgc2l6ZSA9IF9yZWYuc2l6ZSxcbiAgICAgIGdyaWQgPSBfcmVmLmdyaWQ7XG4gIHZhciBzaXplQmVsb3cgPSBzaXplIC0gc2l6ZSAlIGdyaWQ7XG4gIHZhciBzaXplQWJvdmUgPSBzaXplQmVsb3cgKyBncmlkO1xuICByZXR1cm4gc2l6ZSAtIHNpemVCZWxvdyA8IHNpemVBYm92ZSAtIHNpemUgPyBzaXplQmVsb3cgOiBzaXplQWJvdmU7XG59IC8vIGZvbnRHcmlkIGZpbmRzIGEgbWluaW1hbCBncmlkIChpbiByZW0pIGZvciB0aGUgZm9udFNpemUgdmFsdWVzIHNvIHRoYXQgdGhlXG4vLyBsaW5lSGVpZ2h0IGZhbGxzIHVuZGVyIGEgeCBwaXhlbHMgZ3JpZCwgNHB4IGluIHRoZSBjYXNlIG9mIE1hdGVyaWFsIERlc2lnbixcbi8vIHdpdGhvdXQgY2hhbmdpbmcgdGhlIHJlbGF0aXZlIGxpbmUgaGVpZ2h0XG5cbmV4cG9ydCBmdW5jdGlvbiBmb250R3JpZChfcmVmMikge1xuICB2YXIgbGluZUhlaWdodCA9IF9yZWYyLmxpbmVIZWlnaHQsXG4gICAgICBwaXhlbHMgPSBfcmVmMi5waXhlbHMsXG4gICAgICBodG1sRm9udFNpemUgPSBfcmVmMi5odG1sRm9udFNpemU7XG4gIHJldHVybiBwaXhlbHMgLyAobGluZUhlaWdodCAqIGh0bWxGb250U2l6ZSk7XG59XG4vKipcbiAqIGdlbmVyYXRlIGEgcmVzcG9uc2l2ZSB2ZXJzaW9uIG9mIGEgZ2l2ZW4gQ1NTIHByb3BlcnR5XG4gKiBAZXhhbXBsZVxuICogcmVzcG9uc2l2ZVByb3BlcnR5KHtcbiAqICAgY3NzUHJvcGVydHk6ICdmb250U2l6ZScsXG4gKiAgIG1pbjogMTUsXG4gKiAgIG1heDogMjAsXG4gKiAgIHVuaXQ6ICdweCcsXG4gKiAgIGJyZWFrcG9pbnRzOiBbMzAwLCA2MDBdLFxuICogfSlcbiAqXG4gKiAvLyB0aGlzIHJldHVybnNcbiAqXG4gKiB7XG4gKiAgIGZvbnRTaXplOiAnMTVweCcsXG4gKiAgICdAbWVkaWEgKG1pbi13aWR0aDozMDBweCknOiB7XG4gKiAgICAgZm9udFNpemU6ICcxNy41cHgnLFxuICogICB9LFxuICogICAnQG1lZGlhIChtaW4td2lkdGg6NjAwcHgpJzoge1xuICogICAgIGZvbnRTaXplOiAnMjBweCcsXG4gKiAgIH0sXG4gKiB9XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5jc3NQcm9wZXJ0eSAtIFRoZSBDU1MgcHJvcGVydHkgdG8gYmUgbWFkZSByZXNwb25zaXZlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLm1pbiAtIFRoZSBzbWFsbGVzdCB2YWx1ZSBvZiB0aGUgQ1NTIHByb3BlcnR5XG4gKiBAcGFyYW0ge251bWJlcn0gcGFyYW1zLm1heCAtIFRoZSBsYXJnZXN0IHZhbHVlIG9mIHRoZSBDU1MgcHJvcGVydHlcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1zLnVuaXRdIC0gVGhlIHVuaXQgdG8gYmUgdXNlZCBmb3IgdGhlIENTUyBwcm9wZXJ0eVxuICogQHBhcmFtIHtBcnJheS5udW1iZXJ9IFtwYXJhbXMuYnJlYWtwb2ludHNdICAtIEFuIGFycmF5IG9mIGJyZWFrcG9pbnRzXG4gKiBAcGFyYW0ge251bWJlcn0gW3BhcmFtcy5hbGlnblN0ZXBdIC0gUm91bmQgc2NhbGVkIHZhbHVlIHRvIGZhbGwgdW5kZXIgdGhpcyBncmlkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSByZXNwb25zaXZlIHN0eWxlcyBmb3Ige3BhcmFtcy5jc3NQcm9wZXJ0eX1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzcG9uc2l2ZVByb3BlcnR5KF9yZWYzKSB7XG4gIHZhciBjc3NQcm9wZXJ0eSA9IF9yZWYzLmNzc1Byb3BlcnR5LFxuICAgICAgbWluID0gX3JlZjMubWluLFxuICAgICAgbWF4ID0gX3JlZjMubWF4LFxuICAgICAgX3JlZjMkdW5pdCA9IF9yZWYzLnVuaXQsXG4gICAgICB1bml0ID0gX3JlZjMkdW5pdCA9PT0gdm9pZCAwID8gJ3JlbScgOiBfcmVmMyR1bml0LFxuICAgICAgX3JlZjMkYnJlYWtwb2ludHMgPSBfcmVmMy5icmVha3BvaW50cyxcbiAgICAgIGJyZWFrcG9pbnRzID0gX3JlZjMkYnJlYWtwb2ludHMgPT09IHZvaWQgMCA/IFs2MDAsIDk2MCwgMTI4MF0gOiBfcmVmMyRicmVha3BvaW50cyxcbiAgICAgIF9yZWYzJHRyYW5zZm9ybSA9IF9yZWYzLnRyYW5zZm9ybSxcbiAgICAgIHRyYW5zZm9ybSA9IF9yZWYzJHRyYW5zZm9ybSA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYzJHRyYW5zZm9ybTtcblxuICB2YXIgb3V0cHV0ID0gX2RlZmluZVByb3BlcnR5KHt9LCBjc3NQcm9wZXJ0eSwgXCJcIi5jb25jYXQobWluKS5jb25jYXQodW5pdCkpO1xuXG4gIHZhciBmYWN0b3IgPSAobWF4IC0gbWluKSAvIGJyZWFrcG9pbnRzW2JyZWFrcG9pbnRzLmxlbmd0aCAtIDFdO1xuICBicmVha3BvaW50cy5mb3JFYWNoKGZ1bmN0aW9uIChicmVha3BvaW50KSB7XG4gICAgdmFyIHZhbHVlID0gbWluICsgZmFjdG9yICogYnJlYWtwb2ludDtcblxuICAgIGlmICh0cmFuc2Zvcm0gIT09IG51bGwpIHtcbiAgICAgIHZhbHVlID0gdHJhbnNmb3JtKHZhbHVlKTtcbiAgICB9XG5cbiAgICBvdXRwdXRbXCJAbWVkaWEgKG1pbi13aWR0aDpcIi5jb25jYXQoYnJlYWtwb2ludCwgXCJweClcIildID0gX2RlZmluZVByb3BlcnR5KHt9LCBjc3NQcm9wZXJ0eSwgXCJcIi5jb25jYXQoTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMDAwKSAvIDEwMDAwKS5jb25jYXQodW5pdCkpO1xuICB9KTtcbiAgcmV0dXJuIG91dHB1dDtcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvbG9yTWFuaXB1bGF0b3InO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJy4vY3JlYXRlTXVpVGhlbWUnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgdW5zdGFibGVfY3JlYXRlTXVpU3RyaWN0TW9kZVRoZW1lIH0gZnJvbSAnLi9jcmVhdGVNdWlTdHJpY3RNb2RlVGhlbWUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVTdHlsZXMgfSBmcm9tICcuL2NyZWF0ZVN0eWxlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG1ha2VTdHlsZXMgfSBmcm9tICcuL21ha2VTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyByZXNwb25zaXZlRm9udFNpemVzIH0gZnJvbSAnLi9yZXNwb25zaXZlRm9udFNpemVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3R5bGVkIH0gZnJvbSAnLi9zdHlsZWQnO1xuZXhwb3J0ICogZnJvbSAnLi90cmFuc2l0aW9ucyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVRoZW1lIH0gZnJvbSAnLi91c2VUaGVtZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhTdHlsZXMgfSBmcm9tICcuL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoVGhlbWUgfSBmcm9tICcuL3dpdGhUaGVtZSc7XG5leHBvcnQgeyBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSwganNzUHJlc2V0LCBTZXJ2ZXJTdHlsZVNoZWV0cywgU3R5bGVzUHJvdmlkZXIsIFRoZW1lUHJvdmlkZXIgYXMgTXVpVGhlbWVQcm92aWRlciwgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9zdHlsZXMnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgbWFrZVN0eWxlcyBhcyBtYWtlU3R5bGVzV2l0aG91dERlZmF1bHQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xuXG5mdW5jdGlvbiBtYWtlU3R5bGVzKHN0eWxlc09yQ3JlYXRvcikge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHJldHVybiBtYWtlU3R5bGVzV2l0aG91dERlZmF1bHQoc3R5bGVzT3JDcmVhdG9yLCBfZXh0ZW5kcyh7XG4gICAgZGVmYXVsdFRoZW1lOiBkZWZhdWx0VGhlbWVcbiAgfSwgb3B0aW9ucykpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlU3R5bGVzOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHsgZm9ybWF0TXVpRXJyb3JNZXNzYWdlIGFzIF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL3V0aWxzXCI7XG5pbXBvcnQgeyBpc1VuaXRsZXNzLCBjb252ZXJ0TGVuZ3RoLCByZXNwb25zaXZlUHJvcGVydHksIGFsaWduUHJvcGVydHksIGZvbnRHcmlkIH0gZnJvbSAnLi9jc3NVdGlscyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNwb25zaXZlRm9udFNpemVzKHRoZW1lSW5wdXQpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgX29wdGlvbnMkYnJlYWtwb2ludHMgPSBvcHRpb25zLmJyZWFrcG9pbnRzLFxuICAgICAgYnJlYWtwb2ludHMgPSBfb3B0aW9ucyRicmVha3BvaW50cyA9PT0gdm9pZCAwID8gWydzbScsICdtZCcsICdsZyddIDogX29wdGlvbnMkYnJlYWtwb2ludHMsXG4gICAgICBfb3B0aW9ucyRkaXNhYmxlQWxpZ24gPSBvcHRpb25zLmRpc2FibGVBbGlnbixcbiAgICAgIGRpc2FibGVBbGlnbiA9IF9vcHRpb25zJGRpc2FibGVBbGlnbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfb3B0aW9ucyRkaXNhYmxlQWxpZ24sXG4gICAgICBfb3B0aW9ucyRmYWN0b3IgPSBvcHRpb25zLmZhY3RvcixcbiAgICAgIGZhY3RvciA9IF9vcHRpb25zJGZhY3RvciA9PT0gdm9pZCAwID8gMiA6IF9vcHRpb25zJGZhY3RvcixcbiAgICAgIF9vcHRpb25zJHZhcmlhbnRzID0gb3B0aW9ucy52YXJpYW50cyxcbiAgICAgIHZhcmlhbnRzID0gX29wdGlvbnMkdmFyaWFudHMgPT09IHZvaWQgMCA/IFsnaDEnLCAnaDInLCAnaDMnLCAnaDQnLCAnaDUnLCAnaDYnLCAnc3VidGl0bGUxJywgJ3N1YnRpdGxlMicsICdib2R5MScsICdib2R5MicsICdjYXB0aW9uJywgJ2J1dHRvbicsICdvdmVybGluZSddIDogX29wdGlvbnMkdmFyaWFudHM7XG5cbiAgdmFyIHRoZW1lID0gX2V4dGVuZHMoe30sIHRoZW1lSW5wdXQpO1xuXG4gIHRoZW1lLnR5cG9ncmFwaHkgPSBfZXh0ZW5kcyh7fSwgdGhlbWUudHlwb2dyYXBoeSk7XG4gIHZhciB0eXBvZ3JhcGh5ID0gdGhlbWUudHlwb2dyYXBoeTsgLy8gQ29udmVydCBiZXR3ZWVuIGNzcyBsZW5ndGhzIGUuZy4gZW0tPnB4IG9yIHB4LT5yZW1cbiAgLy8gU2V0IHRoZSBiYXNlRm9udFNpemUgZm9yIHlvdXIgcHJvamVjdC4gRGVmYXVsdHMgdG8gMTZweCAoYWxzbyB0aGUgYnJvd3NlciBkZWZhdWx0KS5cblxuICB2YXIgY29udmVydCA9IGNvbnZlcnRMZW5ndGgodHlwb2dyYXBoeS5odG1sRm9udFNpemUpO1xuICB2YXIgYnJlYWtwb2ludFZhbHVlcyA9IGJyZWFrcG9pbnRzLm1hcChmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiB0aGVtZS5icmVha3BvaW50cy52YWx1ZXNbeF07XG4gIH0pO1xuICB2YXJpYW50cy5mb3JFYWNoKGZ1bmN0aW9uICh2YXJpYW50KSB7XG4gICAgdmFyIHN0eWxlID0gdHlwb2dyYXBoeVt2YXJpYW50XTtcbiAgICB2YXIgcmVtRm9udFNpemUgPSBwYXJzZUZsb2F0KGNvbnZlcnQoc3R5bGUuZm9udFNpemUsICdyZW0nKSk7XG5cbiAgICBpZiAocmVtRm9udFNpemUgPD0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtYXhGb250U2l6ZSA9IHJlbUZvbnRTaXplO1xuICAgIHZhciBtaW5Gb250U2l6ZSA9IDEgKyAobWF4Rm9udFNpemUgLSAxKSAvIGZhY3RvcjtcbiAgICB2YXIgbGluZUhlaWdodCA9IHN0eWxlLmxpbmVIZWlnaHQ7XG5cbiAgICBpZiAoIWlzVW5pdGxlc3MobGluZUhlaWdodCkgJiYgIWRpc2FibGVBbGlnbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IFwiTWF0ZXJpYWwtVUk6IFVuc3VwcG9ydGVkIG5vbi11bml0bGVzcyBsaW5lIGhlaWdodCB3aXRoIGdyaWQgYWxpZ25tZW50LlxcblVzZSB1bml0bGVzcyBsaW5lIGhlaWdodHMgaW5zdGVhZC5cIiA6IF9mb3JtYXRNdWlFcnJvck1lc3NhZ2UoNikpO1xuICAgIH1cblxuICAgIGlmICghaXNVbml0bGVzcyhsaW5lSGVpZ2h0KSkge1xuICAgICAgLy8gbWFrZSBpdCB1bml0bGVzc1xuICAgICAgbGluZUhlaWdodCA9IHBhcnNlRmxvYXQoY29udmVydChsaW5lSGVpZ2h0LCAncmVtJykpIC8gcGFyc2VGbG9hdChyZW1Gb250U2l6ZSk7XG4gICAgfVxuXG4gICAgdmFyIHRyYW5zZm9ybSA9IG51bGw7XG5cbiAgICBpZiAoIWRpc2FibGVBbGlnbikge1xuICAgICAgdHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBhbGlnblByb3BlcnR5KHtcbiAgICAgICAgICBzaXplOiB2YWx1ZSxcbiAgICAgICAgICBncmlkOiBmb250R3JpZCh7XG4gICAgICAgICAgICBwaXhlbHM6IDQsXG4gICAgICAgICAgICBsaW5lSGVpZ2h0OiBsaW5lSGVpZ2h0LFxuICAgICAgICAgICAgaHRtbEZvbnRTaXplOiB0eXBvZ3JhcGh5Lmh0bWxGb250U2l6ZVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB0eXBvZ3JhcGh5W3ZhcmlhbnRdID0gX2V4dGVuZHMoe30sIHN0eWxlLCByZXNwb25zaXZlUHJvcGVydHkoe1xuICAgICAgY3NzUHJvcGVydHk6ICdmb250U2l6ZScsXG4gICAgICBtaW46IG1pbkZvbnRTaXplLFxuICAgICAgbWF4OiBtYXhGb250U2l6ZSxcbiAgICAgIHVuaXQ6ICdyZW0nLFxuICAgICAgYnJlYWtwb2ludHM6IGJyZWFrcG9pbnRWYWx1ZXMsXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zZm9ybVxuICAgIH0pKTtcbiAgfSk7XG4gIHJldHVybiB0aGVtZTtcbn0iLCJpbXBvcnQgeyB1c2VUaGVtZSBhcyB1c2VUaGVtZVdpdGhvdXREZWZhdWx0IH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlZmF1bHRUaGVtZSBmcm9tICcuL2RlZmF1bHRUaGVtZSc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VUaGVtZSgpIHtcbiAgdmFyIHRoZW1lID0gdXNlVGhlbWVXaXRob3V0RGVmYXVsdCgpIHx8IGRlZmF1bHRUaGVtZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUodGhlbWUpO1xuICB9XG5cbiAgcmV0dXJuIHRoZW1lO1xufSIsImltcG9ydCB7IHdpdGhUaGVtZUNyZWF0b3IgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0VGhlbWUnO1xudmFyIHdpdGhUaGVtZSA9IHdpdGhUaGVtZUNyZWF0b3Ioe1xuICBkZWZhdWx0VGhlbWU6IGRlZmF1bHRUaGVtZVxufSk7XG5leHBvcnQgZGVmYXVsdCB3aXRoVGhlbWU7IiwiLy8gQ29ycmVzcG9uZHMgdG8gMTAgZnJhbWVzIGF0IDYwIEh6LlxuLy8gQSBmZXcgYnl0ZXMgcGF5bG9hZCBvdmVyaGVhZCB3aGVuIGxvZGFzaC9kZWJvdW5jZSBpcyB+MyBrQiBhbmQgZGVib3VuY2UgfjMwMCBCLlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGVib3VuY2UoZnVuYykge1xuICB2YXIgd2FpdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogMTY2O1xuICB2YXIgdGltZW91dDtcblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXRoaXNcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiBsYXRlcigpIHtcbiAgICAgIGZ1bmMuYXBwbHkodGhhdCwgYXJncyk7XG4gICAgfTtcblxuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gIH1cblxuICBkZWJvdW5jZWQuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICB9O1xuXG4gIHJldHVybiBkZWJvdW5jZWQ7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNNdWlFbGVtZW50KGVsZW1lbnQsIG11aU5hbWVzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoZWxlbWVudCkgJiYgbXVpTmFtZXMuaW5kZXhPZihlbGVtZW50LnR5cGUubXVpTmFtZSkgIT09IC0xO1xufSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5CdXR0b25Hcm91cF9idXR0b25Hcm91cF9fWDREbkQgLk11aUlucHV0LWZvcm1Db250cm9sOmJlZm9yZSwgLkJ1dHRvbkdyb3VwX2J1dHRvbkdyb3VwX19YNERuRCAuTXVpSW5wdXQtZm9ybUNvbnRyb2w6YWZ0ZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLkJ1dHRvbkdyb3VwX2J1dHRvbkdyb3VwX19YNERuRCAuTXVpQnV0dG9uR3JvdXAtZ3JvdXBlZCB7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWdyZXkpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1tYWluKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0J1dHRvbkdyb3VwLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdNO0VBRUUsYUFBQTtBQUhSO0FBTUk7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0FBSk5cIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJ1dHRvbkdyb3VwIHtcXHJcXG4gIDpnbG9iYWwge1xcclxcbiAgICAuTXVpSW5wdXQtZm9ybUNvbnRyb2wge1xcclxcbiAgICAgICY6YmVmb3JlLFxcclxcbiAgICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgLk11aUJ1dHRvbkdyb3VwLWdyb3VwZWQge1xcclxcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtZ3JleSk7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy1tYWluKTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJidXR0b25Hcm91cFwiOiBcIkJ1dHRvbkdyb3VwX2J1dHRvbkdyb3VwX19YNERuRFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQnV0dG9uR3JvdXAubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0J1dHRvbkdyb3VwLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQnV0dG9uR3JvdXAubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcclxuaW1wb3J0IHsgRkMsIHVzZVN0YXRlLCBtZW1vLCBDaGFuZ2VFdmVudEhhbmRsZXIsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgQ29yZUJ1dHRvbkdyb3VwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkdyb3VwJztcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IElucHV0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0JztcclxuaW1wb3J0IEZvcm1IZWxwZXJUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1IZWxwZXJUZXh0JztcclxuaW1wb3J0IHsgU3R5bGVzUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5cclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tICdhcHBSZWR1eCc7XHJcblxyXG5pbXBvcnQgdHlwZSB7IENvbW1vbkZpZWxkVHlwZSwgQmFzaWNGaWVsZFZhbHVlLCBCYXNpY1ZhbHVlIH0gZnJvbSAnY29tcG9uZW50cy9Gb3Jtcy9mb3JtVHlwZXMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbkdyb3VwLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IGNvbXBhcmUgPSA8VCBleHRlbmRzIHVua25vd24+KG9wdGlvbjogVCwgdmFsdWU6IEJhc2ljVmFsdWUpOiBib29sZWFuID0+IG9wdGlvbiA9PT0gdmFsdWU7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkdyb3VwVHlwZSBleHRlbmRzIENvbW1vbkZpZWxkVHlwZSB7XHJcbiAgdHlwZTogJ3JhZGlvJztcclxuICB2YWx1ZT86IEJhc2ljRmllbGRWYWx1ZTtcclxuICBvcHRpb25zPzogQmFzaWNWYWx1ZVtdO1xyXG4gIHN0b3JlT3B0aW9uc1BhdGg/OiBzdHJpbmc7XHJcbiAgZ2V0T3B0aW9uU2VsZWN0ZWQ/OiA8VCBleHRlbmRzIHVua25vd24+KG9wdGlvbjogVCwgdmFsdWU6IEJhc2ljVmFsdWUpID0+IGJvb2xlYW47XHJcbiAgZ2V0T3B0aW9uTGFiZWw6ICh2YWx1ZTogQmFzaWNWYWx1ZSkgPT4gc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCdXR0b25Hcm91cElubmVyOiBGQzxCdXR0b25Hcm91cFR5cGU+ID0gKHtcclxuICBvbkNoYW5nZSxcclxuICBnZXRPcHRpb25MYWJlbCxcclxuICBnZXRPcHRpb25TZWxlY3RlZCA9IGNvbXBhcmUsXHJcbiAgb3B0aW9ucyA9IFtdLFxyXG4gIHZhbHVlLFxyXG4gIG5hbWUsXHJcbn0pID0+IChcclxuICA8Q29yZUJ1dHRvbkdyb3VwIGlkPXtuYW1lfSBhcmlhLWxhYmVsPVwiYnV0dG9uIGdyb3VwXCI+XHJcbiAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAga2V5PXtgb3B0aW9uLSR7b3B0aW9ufWB9XHJcbiAgICAgICAgdmFyaWFudD17Z2V0T3B0aW9uU2VsZWN0ZWQodmFsdWUsIG9wdGlvbikgPyAnY29udGFpbmVkJyA6ICdvdXRsaW5lZCd9XHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgb25DaGFuZ2UgJiZcclxuICAgICAgICAgIG9wdGlvbiAmJlxyXG4gICAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgID5cclxuICAgICAgICB7Z2V0T3B0aW9uTGFiZWwob3B0aW9uKX1cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICApKX1cclxuICA8L0NvcmVCdXR0b25Hcm91cD5cclxuKTtcclxuXHJcbmNvbnN0IE1lbW9CdXR0b25Hcm91cElubmVyID0gbWVtbyhCdXR0b25Hcm91cElubmVyKTtcclxuXHJcbmNvbnN0IEJ1dHRvbkdyb3VwOiBGQzxCdXR0b25Hcm91cFR5cGU+ID0gKHtcclxuICB2YWx1ZSxcclxuICBvbkNoYW5nZSxcclxuICBvcHRpb25zLFxyXG4gIHN0b3JlT3B0aW9uc1BhdGggPSAnJyxcclxuICBuYW1lLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCBzdG9yZU9wdGlvbnM6IEJhc2ljVmFsdWVbXSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gZ2V0KHN0YXRlLCBzdG9yZU9wdGlvbnNQYXRoKSk7XHJcbiAgY29uc3QgW2xvY2FsVmFsdWUsIHNldExvY2FsVmFsdWVdID0gdXNlU3RhdGU8QnV0dG9uR3JvdXBUeXBlWyd2YWx1ZSddPigpO1xyXG5cclxuICBjb25zdCBvbkxvY2FsQ2hhbmdlOiBDaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAodikgPT4ge1xyXG4gICAgc2V0TG9jYWxWYWx1ZSh2LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gb25DaGFuZ2UgfHwgb25Mb2NhbENoYW5nZTtcclxuICBjb25zdCB2YWx1ZVRvVXNlID0gb25DaGFuZ2UgPyB2YWx1ZSA6IGxvY2FsVmFsdWU7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXZhbHVlVG9Vc2UpIHtcclxuICAgICAgb25DaGFuZ2VUb1VzZSh7XHJcbiAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgIHZhbHVlOiAoc3RvcmVPcHRpb25zUGF0aCA/IHN0b3JlT3B0aW9ucyA6IG9wdGlvbnMpPy5bMF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3ZhbHVlVG9Vc2UsIG9uQ2hhbmdlVG9Vc2UsIG9wdGlvbnMsIHN0b3JlT3B0aW9ucywgc3RvcmVPcHRpb25zUGF0aF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlc1Byb3ZpZGVyIGluamVjdEZpcnN0PlxyXG4gICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uR3JvdXB9IGZ1bGxXaWR0aD5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt2YWx1ZVRvVXNlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlVG9Vc2V9XHJcbiAgICAgICAgICBpbnB1dENvbXBvbmVudD17KGlucHV0UHJvcHMpID0+IChcclxuICAgICAgICAgICAgPE1lbW9CdXR0b25Hcm91cElubmVyXHJcbiAgICAgICAgICAgICAgey4uLnByb3BzfVxyXG4gICAgICAgICAgICAgIHsuLi5pbnB1dFByb3BzfVxyXG4gICAgICAgICAgICAgIG5hbWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgb3B0aW9ucz17c3RvcmVPcHRpb25zIHx8IG9wdGlvbnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm1IZWxwZXJUZXh0IG1hcmdpbj1cImRlbnNlXCIgdmFyaWFudD1cImZpbGxlZFwiPlxyXG4gICAgICAgICAgV2VsbCBuZXZlciBzaGFyZSB5b3VyIGVtYWlsLlxyXG4gICAgICAgIDwvRm9ybUhlbHBlclRleHQ+XHJcbiAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICA8L1N0eWxlc1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEJ1dHRvbkdyb3VwKTtcclxuIiwiaW1wb3J0IHR5cGUgeyBCdXR0b25Hcm91cFR5cGUgfSBmcm9tICcuL0J1dHRvbkdyb3VwJztcclxuXHJcbmV4cG9ydCB0eXBlIEJ1dHRvbkdyb3VwID0gQnV0dG9uR3JvdXBUeXBlO1xyXG5leHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9CdXR0b25Hcm91cCc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=