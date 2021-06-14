(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./node_modules/@material-ui/core/esm/Chip/Chip.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Chip/Chip.js ***!
  \*********************************************************/
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
/* harmony import */ var _internal_svg_icons_Cancel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../internal/svg-icons/Cancel */ "./node_modules/@material-ui/core/esm/internal/svg-icons/Cancel.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_unsupportedProp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/unsupportedProp */ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");












var styles = function styles(theme) {
  var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.text.primary, 0.26);
  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: 32 / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      textDecoration: 'none',
      border: 'none',
      // Remove `button` border
      padding: 0,
      // Remove `button` padding
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      '&$disabled': {
        opacity: 0.5,
        pointerEvents: 'none'
      },
      '& $avatar': {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(12)
      },
      '& $avatarColorPrimary': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark
      },
      '& $avatarColorSecondary': {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.dark
      },
      '& $avatarSmall': {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: theme.typography.pxToRem(10)
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      height: 24
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["emphasize"])(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1]
      }
    },

    /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
    clickableColorPrimary: {
      '&:hover, &:focus': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["emphasize"])(theme.palette.primary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
    clickableColorSecondary: {
      '&:hover, &:focus': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["emphasize"])(theme.palette.secondary.main, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      '&:focus': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["emphasize"])(backgroundColor, 0.08)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      '&:focus': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["emphasize"])(theme.palette.primary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      '&:focus': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["emphasize"])(theme.palette.secondary.main, 0.2)
      }
    },

    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      backgroundColor: 'transparent',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.text.primary, theme.palette.action.hoverOpacity)
      },
      '& $avatar': {
        marginLeft: 4
      },
      '& $avatarSmall': {
        marginLeft: 2
      },
      '& $icon': {
        marginLeft: 4
      },
      '& $iconSmall': {
        marginLeft: 2
      },
      '& $deleteIcon': {
        marginRight: 5
      },
      '& $deleteIconSmall': {
        marginRight: 3
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },

    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },
    // TODO v5: remove

    /* Styles applied to the `avatar` element. */
    avatar: {},

    /* Styles applied to the `avatar` element if `size="small"`. */
    avatarSmall: {},

    /* Styles applied to the `avatar` element if `color="primary"`. */
    avatarColorPrimary: {},

    /* Styles applied to the `avatar` element if `color="secondary"`. */
    avatarColorSecondary: {},

    /* Styles applied to the `icon` element. */
    icon: {
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6
    },

    /* Styles applied to the `icon` element if `size="small"`. */
    iconSmall: {
      width: 18,
      height: 18,
      marginLeft: 4,
      marginRight: -4
    },

    /* Styles applied to the `icon` element if `color="primary"`. */
    iconColorPrimary: {
      color: 'inherit'
    },

    /* Styles applied to the `icon` element if `color="secondary"`. */
    iconColorSecondary: {
      color: 'inherit'
    },

    /* Styles applied to the label `span` element. */
    label: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: 'nowrap'
    },

    /* Styles applied to the label `span` element if `size="small"`. */
    labelSmall: {
      paddingLeft: 8,
      paddingRight: 8
    },

    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      height: 22,
      width: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(deleteIconColor, 0.4)
      }
    },

    /* Styles applied to the `deleteIcon` element if `size="small"`. */
    deleteIconSmall: {
      height: 16,
      width: 16,
      marginRight: 4,
      marginLeft: -4
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="default"`. */
    deleteIconColorPrimary: {
      color: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.primary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="default"`. */
    deleteIconColorSecondary: {
      color: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.secondary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.contrastText
      }
    },

    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
    deleteIconOutlinedColorPrimary: {
      color: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.primary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.main
      }
    },

    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
    deleteIconOutlinedColorSecondary: {
      color: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.secondary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.main
      }
    }
  };
};

function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */


var Chip = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Chip(props, ref) {
  var avatarProp = props.avatar,
      classes = props.classes,
      className = props.className,
      clickableProp = props.clickable,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      ComponentProp = props.component,
      deleteIconProp = props.deleteIcon,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      iconProp = props.icon,
      label = props.label,
      onClick = props.onClick,
      onDelete = props.onDelete,
      onKeyDown = props.onKeyDown,
      onKeyUp = props.onKeyUp,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'default' : _props$variant,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant"]);

  var chipRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_8__["default"])(chipRef, ref);

  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();

    if (onDelete) {
      onDelete(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  var handleKeyUp = function handleKeyUp(event) {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }

    if (onKeyUp) {
      onKeyUp(event);
    }
  };

  var clickable = clickableProp !== false && onClick ? true : clickableProp;
  var small = size === 'small';
  var Component = ComponentProp || (clickable ? _ButtonBase__WEBPACK_IMPORTED_MODULE_11__["default"] : 'div');
  var moreProps = Component === _ButtonBase__WEBPACK_IMPORTED_MODULE_11__["default"] ? {
    component: 'div'
  } : {};
  var deleteIcon = null;

  if (onDelete) {
    var customClasses = Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(color !== 'default' && (variant === "default" ? classes["deleteIconColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__["default"])(color))] : classes["deleteIconOutlinedColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__["default"])(color))]), small && classes.deleteIconSmall);
    deleteIcon = deleteIconProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](deleteIconProp) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](deleteIconProp, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(deleteIconProp.props.className, classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_internal_svg_icons_Cancel__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    });
  }

  var avatar = null;

  if (avatarProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](avatarProp)) {
    avatar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](avatarProp, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== 'default' && classes["avatarColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__["default"])(color))])
    });
  }

  var icon = null;

  if (iconProp && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](iconProp)) {
    icon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](iconProp, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== 'default' && classes["iconColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__["default"])(color))])
    });
  }

  if (true) {
    if (avatar && icon) {
      console.error('Material-UI: The Chip component can not handle the avatar ' + 'and the icon prop at the same time. Pick one.');
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    role: clickable || onDelete ? 'button' : undefined,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, color !== 'default' && [classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__["default"])(color))], clickable && classes["clickableColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__["default"])(color))], onDelete && classes["deletableColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_10__["default"])(color))]], variant !== "default" && [classes.outlined, {
      'primary': classes.outlinedPrimary,
      'secondary': classes.outlinedSecondary
    }[color]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable),
    "aria-disabled": disabled ? true : undefined,
    tabIndex: clickable || onDelete ? 0 : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef
  }, moreProps, other), avatar || icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.label, small && classes.labelSmall)
  }, label), deleteIcon);
});
 true ? Chip.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Avatar element.
   */
  avatar: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: _utils_unsupportedProp__WEBPACK_IMPORTED_MODULE_9__["default"],

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
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If false, the chip will not be clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   */
  clickable: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * If `true`, the chip should be displayed in a disabled state.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Icon element.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * The content of the label.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * @ignore
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * Callback function fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * @ignore
   */
  onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The size of the chip.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['medium', 'small']),

  /**
   * The variant to use.
   */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'outlined'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiChip'
})(Chip));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Chip/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Chip/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chip */ "./node_modules/@material-ui/core/esm/Chip/Chip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Chip__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js ***!
  \***************************************************************************/
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
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      boxSizing: 'border-box',
      lineHeight: '48px',
      listStyle: 'none',
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14)
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      color: theme.palette.primary.main
    },

    /* Styles applied to the root element if `color="inherit"`. */
    colorInherit: {
      color: 'inherit'
    },

    /* Styles applied to the inner `component` element if `disableGutters={false}`. */
    gutters: {
      paddingLeft: 16,
      paddingRight: 16
    },

    /* Styles applied to the root element if `inset={true}`. */
    inset: {
      paddingLeft: 72
    },

    /* Styles applied to the root element if `disableSticky={false}`. */
    sticky: {
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: 'inherit'
    }
  };
};
var ListSubheader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function ListSubheader(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'li' : _props$component,
      _props$disableGutters = props.disableGutters,
      disableGutters = _props$disableGutters === void 0 ? false : _props$disableGutters,
      _props$disableSticky = props.disableSticky,
      disableSticky = _props$disableSticky === void 0 ? false : _props$disableSticky,
      _props$inset = props.inset,
      inset = _props$inset === void 0 ? false : _props$inset,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "component", "disableGutters", "disableSticky", "inset"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, color !== 'default' && classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_6__["default"])(color))], inset && classes.inset, !disableSticky && classes.sticky, !disableGutters && classes.gutters),
    ref: ref
  }, other));
});
 true ? ListSubheader.propTypes = {
  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['default', 'primary', 'inherit']),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * If `true`, the List Subheader will not have gutters.
   */
  disableGutters: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   */
  disableSticky: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the List Subheader will be indented.
   */
  inset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiListSubheader'
})(ListSubheader));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ListSubheader/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ListSubheader/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListSubheader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/ListSubheader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ListSubheader__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popper/Popper.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popper/Popper.js ***!
  \*************************************************************/
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
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _Portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Portal */ "./node_modules/@material-ui/core/esm/Portal/index.js");
/* harmony import */ var _utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony import */ var _utils_setRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");












function flipPlacement(placement, theme) {
  var direction = theme && theme.direction || 'ltr';

  if (direction === 'ltr') {
    return placement;
  }

  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';

    case 'bottom-start':
      return 'bottom-end';

    case 'top-end':
      return 'top-start';

    case 'top-start':
      return 'top-end';

    default:
      return placement;
  }
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_2__["useEffect"];
var defaultPopperOptions = {};
/**
 * Poppers rely on the 3rd party library [Popper.js](https://popper.js.org/docs/v1/) for positioning.
 */

var Popper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Popper(props, ref) {
  var anchorEl = props.anchorEl,
      children = props.children,
      container = props.container,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      _props$keepMounted = props.keepMounted,
      keepMounted = _props$keepMounted === void 0 ? false : _props$keepMounted,
      modifiers = props.modifiers,
      open = props.open,
      _props$placement = props.placement,
      initialPlacement = _props$placement === void 0 ? 'bottom' : _props$placement,
      _props$popperOptions = props.popperOptions,
      popperOptions = _props$popperOptions === void 0 ? defaultPopperOptions : _props$popperOptions,
      popperRefProp = props.popperRef,
      style = props.style,
      _props$transition = props.transition,
      transition = _props$transition === void 0 ? false : _props$transition,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["anchorEl", "children", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition"]);

  var tooltipRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var ownRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(tooltipRef, ref);
  var popperRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](null);
  var handlePopperRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_10__["default"])(popperRef, popperRefProp);
  var handlePopperRefRef = react__WEBPACK_IMPORTED_MODULE_2__["useRef"](handlePopperRef);
  useEnhancedEffect(function () {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"](popperRefProp, function () {
    return popperRef.current;
  }, []);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__["useState"](true),
      exited = _React$useState[0],
      setExited = _React$useState[1];

  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  var rtlPlacement = flipPlacement(initialPlacement, theme);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_2__["useState"](rtlPlacement),
      placement = _React$useState2[0],
      setPlacement = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });
  var handleOpen = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function () {
    if (!tooltipRef.current || !anchorEl || !open) {
      return;
    }

    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }

    var handlePopperUpdate = function handlePopperUpdate(data) {
      setPlacement(data.placement);
    };

    var resolvedAnchorEl = getAnchorEl(anchorEl);

    if (true) {
      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          console.warn(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      }
    }

    var popper = new popper_js__WEBPACK_IMPORTED_MODULE_4__["default"](getAnchorEl(anchorEl), tooltipRef.current, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, disablePortal ? {} : {
        // It's using scrollParent by default, we can use the viewport when using a portal.
        preventOverflow: {
          boundariesElement: 'window'
        }
      }, modifiers, popperOptions.modifiers),
      // We could have been using a custom modifier like react-popper is doing.
      // But it seems this is the best public API for this use case.
      onCreate: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__["default"])(handlePopperUpdate, popperOptions.onCreate),
      onUpdate: Object(_utils_createChainedFunction__WEBPACK_IMPORTED_MODULE_8__["default"])(handlePopperUpdate, popperOptions.onUpdate)
    }));
    handlePopperRefRef.current(popper);
  }, [anchorEl, disablePortal, modifiers, open, rtlPlacement, popperOptions]);
  var handleRef = react__WEBPACK_IMPORTED_MODULE_2__["useCallback"](function (node) {
    Object(_utils_setRef__WEBPACK_IMPORTED_MODULE_9__["default"])(ownRef, node);
    handleOpen();
  }, [ownRef, handleOpen]);

  var handleEnter = function handleEnter() {
    setExited(false);
  };

  var handleClose = function handleClose() {
    if (!popperRef.current) {
      return;
    }

    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };

  var handleExited = function handleExited() {
    setExited(true);
    handleClose();
  };

  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    return function () {
      handleClose();
    };
  }, []);
  react__WEBPACK_IMPORTED_MODULE_2__["useEffect"](function () {
    if (!open && !transition) {
      // Otherwise handleExited will call this.
      handleClose();
    }
  }, [open, transition]);

  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  var childProps = {
    placement: placement
  };

  if (transition) {
    childProps.TransitionProps = {
      in: open,
      onEnter: handleEnter,
      onExited: handleExited
    };
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Portal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    disablePortal: disablePortal,
    container: container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: handleRef,
    role: "tooltip"
  }, other, {
    style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
      position: 'fixed',
      // Fix Popper.js display issue
      top: 0,
      left: 0,
      display: !open && keepMounted && !transition ? 'none' : null
    }, style)
  }), typeof children === 'function' ? children(childProps) : children));
});
 true ? Popper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * A HTML element, [referenceObject](https://popper.js.org/docs/v1/#referenceObject),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["HTMLElementType"], prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]), function (props) {
    if (props.open) {
      var resolvedAnchorEl = getAnchorEl(props.anchorEl);

      if (resolvedAnchorEl && resolvedAnchorEl.nodeType === 1) {
        var box = resolvedAnchorEl.getBoundingClientRect();

        if ( true && box.top === 0 && box.left === 0 && box.right === 0 && box.bottom === 0) {
          return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'The anchor element should be part of the document layout.', "Make sure the element is present in the document or that it's not display none."].join('\n'));
        }
      } else if (!resolvedAnchorEl || typeof resolvedAnchorEl.clientWidth !== 'number' || typeof resolvedAnchorEl.clientHeight !== 'number' || typeof resolvedAnchorEl.getBoundingClientRect !== 'function') {
        return new Error(['Material-UI: The `anchorEl` prop provided to the component is invalid.', 'It should be an HTML element instance or a referenceObject ', '(https://popper.js.org/docs/v1/#referenceObject).'].join('\n'));
      }
    }

    return null;
  }),

  /**
   * Popper render function or node.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]).isRequired,

  /**
   * A HTML element, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
  /* @typescript-to-proptypes-ignore */
  .oneOfType([_material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["HTMLElementType"], prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.instanceOf(react__WEBPACK_IMPORTED_MODULE_2__["Component"]), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func]),

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   */
  keepMounted: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v1/#modifiers).
   */
  modifiers: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * If `true`, the popper is visible.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,

  /**
   * Popper placement.
   */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * Options provided to the [`popper.js`](https://popper.js.org/docs/v1/) instance.
   */
  popperOptions: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * A ref that points to the used popper instance.
   */
  popperRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Help supporting a react-transition-group/Transition component.
   */
  transition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Popper);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Popper/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Popper/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popper */ "./node_modules/@material-ui/core/esm/Popper/Popper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Popper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/Cancel.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/Cancel.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/useMediaQuery/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useMediaQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _useMediaQuery__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/useMediaQuery/useMediaQuery.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMediaQuery; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");



function useMediaQuery(queryInput) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var theme = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var props = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["getThemeProps"])({
    theme: theme,
    name: 'MuiUseMediaQuery',
    props: {}
  });

  if (true) {
    if (typeof queryInput === 'function' && theme === null) {
      console.error(['Material-UI: The `query` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
    }
  }

  var query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, ''); // Wait for jsdom to support the match media feature.
  // All the browsers Material-UI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.

  var supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';

  var _props$options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, options),
      _props$options$defaul = _props$options.defaultMatches,
      defaultMatches = _props$options$defaul === void 0 ? false : _props$options$defaul,
      _props$options$matchM = _props$options.matchMedia,
      matchMedia = _props$options$matchM === void 0 ? supportMatchMedia ? window.matchMedia : null : _props$options$matchM,
      _props$options$noSsr = _props$options.noSsr,
      noSsr = _props$options$noSsr === void 0 ? false : _props$options$noSsr,
      _props$options$ssrMat = _props$options.ssrMatchMedia,
      ssrMatchMedia = _props$options$ssrMat === void 0 ? null : _props$options$ssrMat;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__["useState"](function () {
    if (noSsr && supportMatchMedia) {
      return matchMedia(query).matches;
    }

    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    } // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.


    return defaultMatches;
  }),
      match = _React$useState[0],
      setMatch = _React$useState[1];

  react__WEBPACK_IMPORTED_MODULE_1__["useEffect"](function () {
    var active = true;

    if (!supportMatchMedia) {
      return undefined;
    }

    var queryList = matchMedia(query);

    var updateMatch = function updateMatch() {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui-org/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };

    updateMatch();
    queryList.addListener(updateMatch);
    return function () {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia, supportMatchMedia]);

  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"]({
      query: query,
      match: match
    });
  }

  return match;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deprecatedPropType; });
function deprecatedPropType(validator, reason) {
  if (false) {}

  return function (props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (typeof props[propName] !== 'undefined') {
      return new Error("The ".concat(location, " `").concat(propFullNameSafe, "` of ") + "`".concat(componentNameSafe, "` is deprecated. ").concat(reason));
    }

    return null;
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/index.js ***!
  \***********************************************************/
/*! exports provided: capitalize, createChainedFunction, createSvgIcon, debounce, deprecatedPropType, isMuiElement, ownerDocument, ownerWindow, requirePropFactory, setRef, unsupportedProp, useControlled, useEventCallback, useForkRef, unstable_useId, useIsFocusVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalize", function() { return _capitalize__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _createChainedFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createChainedFunction */ "./node_modules/@material-ui/core/esm/utils/createChainedFunction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createChainedFunction", function() { return _createChainedFunction__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _createSvgIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSvgIcon", function() { return _createSvgIcon__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debounce */ "./node_modules/@material-ui/core/esm/utils/debounce.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return _debounce__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _deprecatedPropType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deprecatedPropType */ "./node_modules/@material-ui/core/esm/utils/deprecatedPropType.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deprecatedPropType", function() { return _deprecatedPropType__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _isMuiElement__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isMuiElement */ "./node_modules/@material-ui/core/esm/utils/isMuiElement.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMuiElement", function() { return _isMuiElement__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ownerDocument__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ownerDocument", function() { return _ownerDocument__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ownerWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ownerWindow */ "./node_modules/@material-ui/core/esm/utils/ownerWindow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ownerWindow", function() { return _ownerWindow__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _requirePropFactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./requirePropFactory */ "./node_modules/@material-ui/core/esm/utils/requirePropFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "requirePropFactory", function() { return _requirePropFactory__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _setRef__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./setRef */ "./node_modules/@material-ui/core/esm/utils/setRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setRef", function() { return _setRef__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _unsupportedProp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./unsupportedProp */ "./node_modules/@material-ui/core/esm/utils/unsupportedProp.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unsupportedProp", function() { return _unsupportedProp__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _useControlled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useControlled */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useControlled", function() { return _useControlled__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _useEventCallback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEventCallback", function() { return _useEventCallback__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _useForkRef__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useForkRef", function() { return _useForkRef__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _unstable_useId__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./unstable_useId */ "./node_modules/@material-ui/core/esm/utils/unstable_useId.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unstable_useId", function() { return _unstable_useId__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _useIsFocusVisible__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./useIsFocusVisible */ "./node_modules/@material-ui/core/esm/utils/useIsFocusVisible.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useIsFocusVisible", function() { return _useIsFocusVisible__WEBPACK_IMPORTED_MODULE_15__["default"]; });














 // eslint-disable-next-line camelcase




/***/ }),

/***/ "./node_modules/@material-ui/core/esm/utils/unstable_useId.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/utils/unstable_useId.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useId; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Private module reserved for @material-ui/x packages.
 */

function useId(idOverride) {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"](idOverride),
      defaultId = _React$useState[0],
      setDefaultId = _React$useState[1];

  var id = idOverride || defaultId;
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the random value for client-side rendering only.
      // We can't use it server-side.
      setDefaultId("mui-".concat(Math.round(Math.random() * 1e5)));
    }
  }, [defaultId]);
  return id;
}

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js ***!
  \************************************************************************/
/*! exports provided: createFilterOptions, styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Popper */ "./node_modules/@material-ui/core/esm/Popper/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../internal/svg-icons/Close */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js");
/* harmony import */ var _internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../internal/svg-icons/ArrowDropDown */ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ArrowDropDown.js");
/* harmony import */ var _useAutocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../useAutocomplete */ "./node_modules/@material-ui/lab/esm/useAutocomplete/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilterOptions", function() { return _useAutocomplete__WEBPACK_IMPORTED_MODULE_14__["createFilterOptions"]; });

















var styles = function styles(theme) {
  var _option;

  return {
    /* Styles applied to the root element. */
    root: {
      '&$focused $clearIndicatorDirty': {
        visibility: 'visible'
      },

      /* Avoid double tap issue on iOS */
      '@media (pointer: fine)': {
        '&:hover $clearIndicatorDirty': {
          visibility: 'visible'
        }
      }
    },

    /* Styles applied to the root element if `fullWidth={true}`. */
    fullWidth: {
      width: '100%'
    },

    /* Pseudo-class applied to the root element if focused. */
    focused: {},

    /* Styles applied to the tag elements, e.g. the chips. */
    tag: {
      margin: 3,
      maxWidth: 'calc(100% - 6px)'
    },

    /* Styles applied to the tag elements, e.g. the chips if `size="small"`. */
    tagSizeSmall: {
      margin: 2,
      maxWidth: 'calc(100% - 4px)'
    },

    /* Styles applied when the popup icon is rendered. */
    hasPopupIcon: {},

    /* Styles applied when the clear icon is rendered. */
    hasClearIcon: {},

    /* Styles applied to the Input element. */
    inputRoot: {
      flexWrap: 'wrap',
      '$hasPopupIcon &, $hasClearIcon &': {
        paddingRight: 26 + 4
      },
      '$hasPopupIcon$hasClearIcon &': {
        paddingRight: 52 + 4
      },
      '& $input': {
        width: 0,
        minWidth: 30
      },
      '&[class*="MuiInput-root"]': {
        paddingBottom: 1,
        '& $input': {
          padding: 4
        },
        '& $input:first-child': {
          padding: '6px 0'
        }
      },
      '&[class*="MuiInput-root"][class*="MuiInput-marginDense"]': {
        '& $input': {
          padding: '4px 4px 5px'
        },
        '& $input:first-child': {
          padding: '3px 0 6px'
        }
      },
      '&[class*="MuiOutlinedInput-root"]': {
        padding: 9,
        '$hasPopupIcon &, $hasClearIcon &': {
          paddingRight: 26 + 4 + 9
        },
        '$hasPopupIcon$hasClearIcon &': {
          paddingRight: 52 + 4 + 9
        },
        '& $input': {
          padding: '9.5px 4px'
        },
        '& $input:first-child': {
          paddingLeft: 6
        },
        '& $endAdornment': {
          right: 9
        }
      },
      '&[class*="MuiOutlinedInput-root"][class*="MuiOutlinedInput-marginDense"]': {
        padding: 6,
        '& $input': {
          padding: '4.5px 4px'
        }
      },
      '&[class*="MuiFilledInput-root"]': {
        paddingTop: 19,
        paddingLeft: 8,
        '$hasPopupIcon &, $hasClearIcon &': {
          paddingRight: 26 + 4 + 9
        },
        '$hasPopupIcon$hasClearIcon &': {
          paddingRight: 52 + 4 + 9
        },
        '& $input': {
          padding: '9px 4px'
        },
        '& $endAdornment': {
          right: 9
        }
      },
      '&[class*="MuiFilledInput-root"][class*="MuiFilledInput-marginDense"]': {
        paddingBottom: 1,
        '& $input': {
          padding: '4.5px 4px'
        }
      }
    },

    /* Styles applied to the input element. */
    input: {
      flexGrow: 1,
      textOverflow: 'ellipsis',
      opacity: 0
    },

    /* Styles applied to the input element if tag focused. */
    inputFocused: {
      opacity: 1
    },

    /* Styles applied to the endAdornment element. */
    endAdornment: {
      // We use a position absolute to support wrapping tags.
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 14px)' // Center vertically

    },

    /* Styles applied to the clear indicator. */
    clearIndicator: {
      marginRight: -2,
      padding: 4,
      visibility: 'hidden'
    },

    /* Styles applied to the clear indicator if the input is dirty. */
    clearIndicatorDirty: {},

    /* Styles applied to the popup indicator. */
    popupIndicator: {
      padding: 2,
      marginRight: -2
    },

    /* Styles applied to the popup indicator if the popup is open. */
    popupIndicatorOpen: {
      transform: 'rotate(180deg)'
    },

    /* Styles applied to the popper element. */
    popper: {
      zIndex: theme.zIndex.modal
    },

    /* Styles applied to the popper element if `disablePortal={true}`. */
    popperDisablePortal: {
      position: 'absolute'
    },

    /* Styles applied to the `Paper` component. */
    paper: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.typography.body1, {
      overflow: 'hidden',
      margin: '4px 0'
    }),

    /* Styles applied to the `listbox` component. */
    listbox: {
      listStyle: 'none',
      margin: 0,
      padding: '8px 0',
      maxHeight: '40vh',
      overflow: 'auto'
    },

    /* Styles applied to the loading wrapper. */
    loading: {
      color: theme.palette.text.secondary,
      padding: '14px 16px'
    },

    /* Styles applied to the no option wrapper. */
    noOptions: {
      color: theme.palette.text.secondary,
      padding: '14px 16px'
    },

    /* Styles applied to the option elements. */
    option: (_option = {
      minHeight: 48,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      cursor: 'pointer',
      paddingTop: 6,
      boxSizing: 'border-box',
      outline: '0',
      WebkitTapHighlightColor: 'transparent',
      paddingBottom: 6,
      paddingLeft: 16,
      paddingRight: 16
    }, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, theme.breakpoints.up('sm'), {
      minHeight: 'auto'
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, '&[aria-selected="true"]', {
      backgroundColor: theme.palette.action.selected
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, '&[data-focus="true"]', {
      backgroundColor: theme.palette.action.hover
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, '&:active', {
      backgroundColor: theme.palette.action.selected
    }), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_option, '&[aria-disabled="true"]', {
      opacity: theme.palette.action.disabledOpacity,
      pointerEvents: 'none'
    }), _option),

    /* Styles applied to the group's label elements. */
    groupLabel: {
      backgroundColor: theme.palette.background.paper,
      top: -8
    },

    /* Styles applied to the group's ul elements. */
    groupUl: {
      padding: 0,
      '& $option': {
        paddingLeft: 24
      }
    }
  };
};

function DisablePortal(props) {
  // eslint-disable-next-line react/prop-types
  var anchorEl = props.anchorEl,
      open = props.open,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["anchorEl", "open"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", other);
}

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_internal_svg_icons_Close__WEBPACK_IMPORTED_MODULE_12__["default"], {
  fontSize: "small"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_internal_svg_icons_ArrowDropDown__WEBPACK_IMPORTED_MODULE_13__["default"], null);

var Autocomplete = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Autocomplete(props, ref) {
  /* eslint-disable no-unused-vars */
  var _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? false : _props$autoComplete,
      _props$autoHighlight = props.autoHighlight,
      autoHighlight = _props$autoHighlight === void 0 ? false : _props$autoHighlight,
      _props$autoSelect = props.autoSelect,
      autoSelect = _props$autoSelect === void 0 ? false : _props$autoSelect,
      _props$blurOnSelect = props.blurOnSelect,
      blurOnSelect = _props$blurOnSelect === void 0 ? false : _props$blurOnSelect,
      ChipProps = props.ChipProps,
      classes = props.classes,
      className = props.className,
      _props$clearOnBlur = props.clearOnBlur,
      clearOnBlur = _props$clearOnBlur === void 0 ? !props.freeSolo : _props$clearOnBlur,
      _props$clearOnEscape = props.clearOnEscape,
      clearOnEscape = _props$clearOnEscape === void 0 ? false : _props$clearOnEscape,
      _props$clearText = props.clearText,
      clearText = _props$clearText === void 0 ? 'Clear' : _props$clearText,
      _props$closeIcon = props.closeIcon,
      closeIcon = _props$closeIcon === void 0 ? _ref : _props$closeIcon,
      _props$closeText = props.closeText,
      closeText = _props$closeText === void 0 ? 'Close' : _props$closeText,
      _props$debug = props.debug,
      debug = _props$debug === void 0 ? false : _props$debug,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? props.multiple ? [] : null : _props$defaultValue,
      _props$disableClearab = props.disableClearable,
      disableClearable = _props$disableClearab === void 0 ? false : _props$disableClearab,
      _props$disableCloseOn = props.disableCloseOnSelect,
      disableCloseOnSelect = _props$disableCloseOn === void 0 ? false : _props$disableCloseOn,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      _props$disablePortal = props.disablePortal,
      disablePortal = _props$disablePortal === void 0 ? false : _props$disablePortal,
      filterOptions = props.filterOptions,
      _props$filterSelected = props.filterSelectedOptions,
      filterSelectedOptions = _props$filterSelected === void 0 ? false : _props$filterSelected,
      _props$forcePopupIcon = props.forcePopupIcon,
      forcePopupIcon = _props$forcePopupIcon === void 0 ? 'auto' : _props$forcePopupIcon,
      _props$freeSolo = props.freeSolo,
      freeSolo = _props$freeSolo === void 0 ? false : _props$freeSolo,
      _props$fullWidth = props.fullWidth,
      fullWidth = _props$fullWidth === void 0 ? false : _props$fullWidth,
      _props$getLimitTagsTe = props.getLimitTagsText,
      getLimitTagsText = _props$getLimitTagsTe === void 0 ? function (more) {
    return "+".concat(more);
  } : _props$getLimitTagsTe,
      getOptionDisabled = props.getOptionDisabled,
      _props$getOptionLabel = props.getOptionLabel,
      getOptionLabel = _props$getOptionLabel === void 0 ? function (x) {
    return x;
  } : _props$getOptionLabel,
      getOptionSelected = props.getOptionSelected,
      groupBy = props.groupBy,
      _props$handleHomeEndK = props.handleHomeEndKeys,
      handleHomeEndKeys = _props$handleHomeEndK === void 0 ? !props.freeSolo : _props$handleHomeEndK,
      idProp = props.id,
      _props$includeInputIn = props.includeInputInList,
      includeInputInList = _props$includeInputIn === void 0 ? false : _props$includeInputIn,
      inputValueProp = props.inputValue,
      _props$limitTags = props.limitTags,
      limitTags = _props$limitTags === void 0 ? -1 : _props$limitTags,
      _props$ListboxCompone = props.ListboxComponent,
      ListboxComponent = _props$ListboxCompone === void 0 ? 'ul' : _props$ListboxCompone,
      ListboxProps = props.ListboxProps,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$loadingText = props.loadingText,
      loadingText = _props$loadingText === void 0 ? 'Loading…' : _props$loadingText,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      _props$noOptionsText = props.noOptionsText,
      noOptionsText = _props$noOptionsText === void 0 ? 'No options' : _props$noOptionsText,
      onChange = props.onChange,
      onClose = props.onClose,
      onHighlightChange = props.onHighlightChange,
      onInputChange = props.onInputChange,
      onOpen = props.onOpen,
      open = props.open,
      _props$openOnFocus = props.openOnFocus,
      openOnFocus = _props$openOnFocus === void 0 ? false : _props$openOnFocus,
      _props$openText = props.openText,
      openText = _props$openText === void 0 ? 'Open' : _props$openText,
      options = props.options,
      _props$PaperComponent = props.PaperComponent,
      PaperComponent = _props$PaperComponent === void 0 ? _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"] : _props$PaperComponent,
      _props$PopperComponen = props.PopperComponent,
      PopperComponentProp = _props$PopperComponen === void 0 ? _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_7__["default"] : _props$PopperComponen,
      _props$popupIcon = props.popupIcon,
      popupIcon = _props$popupIcon === void 0 ? _ref2 : _props$popupIcon,
      renderGroupProp = props.renderGroup,
      renderInput = props.renderInput,
      renderOptionProp = props.renderOption,
      renderTags = props.renderTags,
      _props$selectOnFocus = props.selectOnFocus,
      selectOnFocus = _props$selectOnFocus === void 0 ? !props.freeSolo : _props$selectOnFocus,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      valueProp = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "classes", "className", "clearOnBlur", "clearOnEscape", "clearText", "closeIcon", "closeText", "debug", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "getOptionSelected", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "value"]);
  /* eslint-enable no-unused-vars */


  var PopperComponent = disablePortal ? DisablePortal : PopperComponentProp;

  var _useAutocomplete = Object(_useAutocomplete__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
    componentName: 'Autocomplete'
  })),
      getRootProps = _useAutocomplete.getRootProps,
      getInputProps = _useAutocomplete.getInputProps,
      getInputLabelProps = _useAutocomplete.getInputLabelProps,
      getPopupIndicatorProps = _useAutocomplete.getPopupIndicatorProps,
      getClearProps = _useAutocomplete.getClearProps,
      getTagProps = _useAutocomplete.getTagProps,
      getListboxProps = _useAutocomplete.getListboxProps,
      getOptionProps = _useAutocomplete.getOptionProps,
      value = _useAutocomplete.value,
      dirty = _useAutocomplete.dirty,
      id = _useAutocomplete.id,
      popupOpen = _useAutocomplete.popupOpen,
      focused = _useAutocomplete.focused,
      focusedTag = _useAutocomplete.focusedTag,
      anchorEl = _useAutocomplete.anchorEl,
      setAnchorEl = _useAutocomplete.setAnchorEl,
      inputValue = _useAutocomplete.inputValue,
      groupedOptions = _useAutocomplete.groupedOptions;

  var startAdornment;

  if (multiple && value.length > 0) {
    var getCustomizedTagProps = function getCustomizedTagProps(params) {
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.tag, size === 'small' && classes.tagSizeSmall),
        disabled: disabled
      }, getTagProps(params));
    };

    if (renderTags) {
      startAdornment = renderTags(value, getCustomizedTagProps);
    } else {
      startAdornment = value.map(function (option, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_11__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
          label: getOptionLabel(option),
          size: size
        }, getCustomizedTagProps({
          index: index
        }), ChipProps));
      });
    }
  }

  if (limitTags > -1 && Array.isArray(startAdornment)) {
    var more = startAdornment.length - limitTags;

    if (!focused && more > 0) {
      startAdornment = startAdornment.splice(0, limitTags);
      startAdornment.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", {
        className: classes.tag,
        key: startAdornment.length
      }, getLimitTagsText(more)));
    }
  }

  var defaultRenderGroup = function defaultRenderGroup(params) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", {
      key: params.key
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.groupLabel,
      component: "div"
    }, params.group), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("ul", {
      className: classes.groupUl
    }, params.children));
  };

  var renderGroup = renderGroupProp || defaultRenderGroup;
  var renderOption = renderOptionProp || getOptionLabel;

  var renderListOption = function renderListOption(option, index) {
    var optionProps = getOptionProps({
      option: option,
      index: index
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, optionProps, {
      className: classes.option
    }), renderOption(option, {
      selected: optionProps['aria-selected'],
      inputValue: inputValue
    }));
  };

  var hasClearIcon = !disableClearable && !disabled;
  var hasPopupIcon = (!freeSolo || forcePopupIcon === true) && forcePopupIcon !== false;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](react__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    ref: ref,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className, focused && classes.focused, fullWidth && classes.fullWidth, hasClearIcon && classes.hasClearIcon, hasPopupIcon && classes.hasPopupIcon)
  }, getRootProps(other)), renderInput({
    id: id,
    disabled: disabled,
    fullWidth: true,
    size: size === 'small' ? 'small' : undefined,
    InputLabelProps: getInputLabelProps(),
    InputProps: {
      ref: setAnchorEl,
      className: classes.inputRoot,
      startAdornment: startAdornment,
      endAdornment: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
        className: classes.endAdornment
      }, hasClearIcon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getClearProps(), {
        "aria-label": clearText,
        title: clearText,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.clearIndicator, dirty && classes.clearIndicatorDirty)
      }), closeIcon) : null, hasPopupIcon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, getPopupIndicatorProps(), {
        disabled: disabled,
        "aria-label": popupOpen ? closeText : openText,
        title: popupOpen ? closeText : openText,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.popupIndicator, popupOpen && classes.popupIndicatorOpen)
      }), popupIcon) : null)
    },
    inputProps: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.input, focusedTag === -1 && classes.inputFocused),
      disabled: disabled
    }, getInputProps())
  })), popupOpen && anchorEl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](PopperComponent, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.popper, disablePortal && classes.popperDisablePortal),
    style: {
      width: anchorEl ? anchorEl.clientWidth : null
    },
    role: "presentation",
    anchorEl: anchorEl,
    open: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](PaperComponent, {
    className: classes.paper
  }, loading && groupedOptions.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: classes.loading
  }, loadingText) : null, groupedOptions.length === 0 && !freeSolo && !loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
    className: classes.noOptions
  }, noOptionsText) : null, groupedOptions.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](ListboxComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    className: classes.listbox
  }, getListboxProps(), ListboxProps), groupedOptions.map(function (option, index) {
    if (groupBy) {
      return renderGroup({
        key: option.key,
        group: option.group,
        children: option.options.map(function (option2, index2) {
          return renderListOption(option2, option.index + index2);
        })
      });
    }

    return renderListOption(option, index);
  })) : null)) : null);
});
 true ? Autocomplete.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * If `true`, the portion of the selected suggestion that has not been typed by the user,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   */
  autoComplete: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the first option is automatically highlighted.
   */
  autoHighlight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   */
  autoSelect: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   */
  blurOnSelect: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['mouse', 'touch']), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool]),

  /**
   * Props applied to the [`Chip`](/api/chip/) element.
   */
  ChipProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

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
   * If `true`, the input's text will be cleared on blur if no value is selected.
   *
   * Set to `true` if you want to help the user enter a new value.
   * Set to `false` if you want to help the user resume his search.
   */
  clearOnBlur: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   */
  clearOnEscape: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  clearText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The icon to display in place of the default close icon.
   */
  closeIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  closeText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, the popup will ignore the blur event if the input is filled.
   * You can inspect the popup markup with your browser tools.
   * Consider this option when you need to customize the component.
   */
  debug: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The default input value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * If `true`, the input can't be cleared.
   */
  disableClearable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .bool,

  /**
   * If `true`, the popup won't close when a value is selected.
   */
  disableCloseOnSelect: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the input will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the list box in the popup will not wrap focus.
   */
  disableListWrap: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Disable the portal behavior.
   * The children stay within it's parent DOM hierarchy.
   */
  disablePortal: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A filter function that determines the options that are eligible.
   *
   * @param {T[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {T[]}
   */
  filterOptions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, hide the selected options from the list box.
   */
  filterSelectedOptions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Force the visibility display of the popup icon.
   */
  forcePopupIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool]),

  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   */
  freeSolo: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   */
  getLimitTagsText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {T} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * @param {T} option
   * @returns {string}
   */
  getOptionLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Used to determine if an option is selected, considering the current value.
   * Uses strict equality by default.
   *
   * @param {T} option The option to test.
   * @param {T} value The value to test against.
   * @returns {boolean}
   */
  getOptionSelected: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {T} options The options to group.
   * @returns {string}
   */
  groupBy: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   */
  handleHomeEndKeys: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * If `true`, the highlight can move to the input.
   */
  includeInputInList: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The input value.
   */
  inputValue: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   */
  limitTags: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,

  /**
   * The component used to render the listbox.
   */
  ListboxComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * If `true`, the component is in a loading state.
   */
  loading: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  loadingText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a
  /* @typescript-to-proptypes-ignore */
  .bool,

  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  noOptionsText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Callback fired when the value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {T|T[]} value The new value of the component.
   * @param {string} reason One of "create-option", "select-option", "remove-option", "blur" or "clear".
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"select-option"`, `"blur"`.
   */
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the highlight option changes.
   *
   * @param {object} event The event source of the callback.
   * @param {T} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`.
   */
  onHighlightChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the input value changes.
   *
   * @param {object} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Control the popup` open state.
   */
  open: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the popup will open on input focus.
   */
  openOnFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/guides/localization/).
   */
  openText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Array of options.
   */
  options: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array.isRequired,

  /**
   * The component used to render the body of the popup.
   */
  PaperComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * The component used to position the popup.
   */
  PopperComponent: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.elementType,

  /**
   * The icon to display in place of the default popup icon.
   */
  popupIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Render the group.
   *
   * @param {any} option The group to render.
   * @returns {ReactNode}
   */
  renderGroup: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,

  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {T} option The option to render.
   * @param {object} state The state of the component.
   * @returns {ReactNode}
   */
  renderOption: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Render the selected value.
   *
   * @param {T[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @returns {ReactNode}
   */
  renderTags: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * If `true`, the input's text will be selected on focus.
   * It helps the user clear the selected value.
   */
  selectOnFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The size of the autocomplete.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['medium', 'small']),

  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `getOptionSelected` prop.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles, {
  name: 'MuiAutocomplete'
})(Autocomplete));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/Autocomplete/index.js ***!
  \*****************************************************************/
/*! exports provided: default, createFilterOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/Autocomplete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Autocomplete__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilterOptions", function() { return _Autocomplete__WEBPACK_IMPORTED_MODULE_0__["createFilterOptions"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/ArrowDropDown.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/ArrowDropDown.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/internal/svg-icons/Close.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_1__["createSvgIcon"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Close'));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/useAutocomplete/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/useAutocomplete/index.js ***!
  \********************************************************************/
/*! exports provided: default, createFilterOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useAutocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAutocomplete */ "./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _useAutocomplete__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilterOptions", function() { return _useAutocomplete__WEBPACK_IMPORTED_MODULE_0__["createFilterOptions"]; });



/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/useAutocomplete/useAutocomplete.js ***!
  \******************************************************************************/
/*! exports provided: createFilterOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFilterOptions", function() { return createFilterOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAutocomplete; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");




/* eslint-disable no-constant-condition */

 // https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript
// Give up on IE 11 support for this feature

function stripDiacritics(string) {
  return typeof string.normalize !== 'undefined' ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '') : string;
}

function createFilterOptions() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$ignoreAccents = config.ignoreAccents,
      ignoreAccents = _config$ignoreAccents === void 0 ? true : _config$ignoreAccents,
      _config$ignoreCase = config.ignoreCase,
      ignoreCase = _config$ignoreCase === void 0 ? true : _config$ignoreCase,
      limit = config.limit,
      _config$matchFrom = config.matchFrom,
      matchFrom = _config$matchFrom === void 0 ? 'any' : _config$matchFrom,
      stringify = config.stringify,
      _config$trim = config.trim,
      trim = _config$trim === void 0 ? false : _config$trim;
  return function (options, _ref) {
    var inputValue = _ref.inputValue,
        getOptionLabel = _ref.getOptionLabel;
    var input = trim ? inputValue.trim() : inputValue;

    if (ignoreCase) {
      input = input.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
    }

    var filteredOptions = options.filter(function (option) {
      var candidate = (stringify || getOptionLabel)(option);

      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }

      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }

      return matchFrom === 'start' ? candidate.indexOf(input) === 0 : candidate.indexOf(input) > -1;
    });
    return typeof limit === 'number' ? filteredOptions.slice(0, limit) : filteredOptions;
  };
} // To replace with .findIndex() once we stop IE 11 support.

function findIndex(array, comp) {
  for (var i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }

  return -1;
}

var defaultFilterOptions = createFilterOptions(); // Number of options to jump in list box when pageup and pagedown keys are used.

var pageSize = 5;
function useAutocomplete(props) {
  var _props$autoComplete = props.autoComplete,
      autoComplete = _props$autoComplete === void 0 ? false : _props$autoComplete,
      _props$autoHighlight = props.autoHighlight,
      autoHighlight = _props$autoHighlight === void 0 ? false : _props$autoHighlight,
      _props$autoSelect = props.autoSelect,
      autoSelect = _props$autoSelect === void 0 ? false : _props$autoSelect,
      _props$blurOnSelect = props.blurOnSelect,
      blurOnSelect = _props$blurOnSelect === void 0 ? false : _props$blurOnSelect,
      _props$clearOnBlur = props.clearOnBlur,
      clearOnBlur = _props$clearOnBlur === void 0 ? !props.freeSolo : _props$clearOnBlur,
      _props$clearOnEscape = props.clearOnEscape,
      clearOnEscape = _props$clearOnEscape === void 0 ? false : _props$clearOnEscape,
      _props$componentName = props.componentName,
      componentName = _props$componentName === void 0 ? 'useAutocomplete' : _props$componentName,
      _props$debug = props.debug,
      debug = _props$debug === void 0 ? false : _props$debug,
      _props$defaultValue = props.defaultValue,
      defaultValue = _props$defaultValue === void 0 ? props.multiple ? [] : null : _props$defaultValue,
      _props$disableClearab = props.disableClearable,
      disableClearable = _props$disableClearab === void 0 ? false : _props$disableClearab,
      _props$disableCloseOn = props.disableCloseOnSelect,
      disableCloseOnSelect = _props$disableCloseOn === void 0 ? false : _props$disableCloseOn,
      _props$disabledItemsF = props.disabledItemsFocusable,
      disabledItemsFocusable = _props$disabledItemsF === void 0 ? false : _props$disabledItemsF,
      _props$disableListWra = props.disableListWrap,
      disableListWrap = _props$disableListWra === void 0 ? false : _props$disableListWra,
      _props$filterOptions = props.filterOptions,
      filterOptions = _props$filterOptions === void 0 ? defaultFilterOptions : _props$filterOptions,
      _props$filterSelected = props.filterSelectedOptions,
      filterSelectedOptions = _props$filterSelected === void 0 ? false : _props$filterSelected,
      _props$freeSolo = props.freeSolo,
      freeSolo = _props$freeSolo === void 0 ? false : _props$freeSolo,
      getOptionDisabled = props.getOptionDisabled,
      _props$getOptionLabel = props.getOptionLabel,
      getOptionLabelProp = _props$getOptionLabel === void 0 ? function (option) {
    return option;
  } : _props$getOptionLabel,
      _props$getOptionSelec = props.getOptionSelected,
      getOptionSelected = _props$getOptionSelec === void 0 ? function (option, value) {
    return option === value;
  } : _props$getOptionSelec,
      groupBy = props.groupBy,
      _props$handleHomeEndK = props.handleHomeEndKeys,
      handleHomeEndKeys = _props$handleHomeEndK === void 0 ? !props.freeSolo : _props$handleHomeEndK,
      idProp = props.id,
      _props$includeInputIn = props.includeInputInList,
      includeInputInList = _props$includeInputIn === void 0 ? false : _props$includeInputIn,
      inputValueProp = props.inputValue,
      _props$multiple = props.multiple,
      multiple = _props$multiple === void 0 ? false : _props$multiple,
      onChange = props.onChange,
      onClose = props.onClose,
      onHighlightChange = props.onHighlightChange,
      onInputChange = props.onInputChange,
      onOpen = props.onOpen,
      openProp = props.open,
      _props$openOnFocus = props.openOnFocus,
      openOnFocus = _props$openOnFocus === void 0 ? false : _props$openOnFocus,
      options = props.options,
      _props$selectOnFocus = props.selectOnFocus,
      selectOnFocus = _props$selectOnFocus === void 0 ? !props.freeSolo : _props$selectOnFocus,
      valueProp = props.value;
  var id = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["unstable_useId"])(idProp);
  var getOptionLabel = getOptionLabelProp;

  if (true) {
    getOptionLabel = function getOptionLabel(option) {
      var optionLabel = getOptionLabelProp(option);

      if (typeof optionLabel !== 'string') {
        var erroneousReturn = optionLabel === undefined ? 'undefined' : "".concat(Object(_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__["default"])(optionLabel), " (").concat(optionLabel, ")");
        console.error("Material-UI: The `getOptionLabel` method of ".concat(componentName, " returned ").concat(erroneousReturn, " instead of a string for ").concat(JSON.stringify(option), "."));
      }

      return optionLabel;
    };
  }

  var ignoreFocus = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](false);
  var firstFocus = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](true);
  var inputRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var listboxRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3__["useState"](null),
      anchorEl = _React$useState[0],
      setAnchorEl = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_3__["useState"](-1),
      focusedTag = _React$useState2[0],
      setFocusedTag = _React$useState2[1];

  var defaultHighlighted = autoHighlight ? 0 : -1;
  var highlightedIndexRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](defaultHighlighted);

  var _useControlled = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useControlled"])({
    controlled: valueProp,
    default: defaultValue,
    name: componentName
  }),
      _useControlled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled, 2),
      value = _useControlled2[0],
      setValue = _useControlled2[1];

  var _useControlled3 = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useControlled"])({
    controlled: inputValueProp,
    default: '',
    name: componentName,
    state: 'inputValue'
  }),
      _useControlled4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled3, 2),
      inputValue = _useControlled4[0],
      setInputValue = _useControlled4[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3__["useState"](false),
      focused = _React$useState3[0],
      setFocused = _React$useState3[1];

  var resetInputValue = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useEventCallback"])(function (event, newValue) {
    var newInputValue;

    if (multiple) {
      newInputValue = '';
    } else if (newValue == null) {
      newInputValue = '';
    } else {
      var optionLabel = getOptionLabel(newValue);
      newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
    }

    if (inputValue === newInputValue) {
      return;
    }

    setInputValue(newInputValue);

    if (onInputChange) {
      onInputChange(event, newInputValue, 'reset');
    }
  });
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    resetInputValue(null, value);
  }, [value, resetInputValue]);

  var _useControlled5 = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useControlled"])({
    controlled: openProp,
    default: false,
    name: componentName,
    state: 'open'
  }),
      _useControlled6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled5, 2),
      open = _useControlled6[0],
      setOpenState = _useControlled6[1];

  var inputValueIsSelectedValue = !multiple && value != null && inputValue === getOptionLabel(value);
  var popupOpen = open;
  var filteredOptions = popupOpen ? filterOptions(options.filter(function (option) {
    if (filterSelectedOptions && (multiple ? value : [value]).some(function (value2) {
      return value2 !== null && getOptionSelected(option, value2);
    })) {
      return false;
    }

    return true;
  }), // we use the empty string to manipulate `filterOptions` to not filter any options
  // i.e. the filter predicate always returns true
  {
    inputValue: inputValueIsSelectedValue ? '' : inputValue,
    getOptionLabel: getOptionLabel
  }) : [];

  if (true) {
    if (value !== null && !freeSolo && options.length > 0) {
      var missingValue = (multiple ? value : [value]).filter(function (value2) {
        return !options.some(function (option) {
          return getOptionSelected(option, value2);
        });
      });

      if (missingValue.length > 0) {
        console.warn(["Material-UI: The value provided to ".concat(componentName, " is invalid."), "None of the options match with `".concat(missingValue.length > 1 ? JSON.stringify(missingValue) : JSON.stringify(missingValue[0]), "`."), 'You can use the `getOptionSelected` prop to customize the equality test.'].join('\n'));
      }
    }
  }

  var focusTag = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useEventCallback"])(function (tagToFocus) {
    if (tagToFocus === -1) {
      inputRef.current.focus();
    } else {
      anchorEl.querySelector("[data-tag-index=\"".concat(tagToFocus, "\"]")).focus();
    }
  }); // Ensure the focusedTag is never inconsistent

  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);

  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index === -1) {
      return -1;
    }

    var nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === filteredOptions.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      var option = listboxRef.current.querySelector("[data-option-index=\"".concat(nextFocus, "\"]")); // Same logic as MenuList.js

      var nextFocusDisabled = disabledItemsFocusable ? false : option && (option.disabled || option.getAttribute('aria-disabled') === 'true');

      if (option && !option.hasAttribute('tabindex') || nextFocusDisabled) {
        // Move to the next element.
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  var setHighlightedIndex = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useEventCallback"])(function (_ref2) {
    var event = _ref2.event,
        index = _ref2.index,
        _ref2$reason = _ref2.reason,
        reason = _ref2$reason === void 0 ? 'auto' : _ref2$reason;
    highlightedIndexRef.current = index; // does the index exist?

    if (index === -1) {
      inputRef.current.removeAttribute('aria-activedescendant');
    } else {
      inputRef.current.setAttribute('aria-activedescendant', "".concat(id, "-option-").concat(index));
    }

    if (onHighlightChange) {
      onHighlightChange(event, index === -1 ? null : filteredOptions[index], reason);
    }

    if (!listboxRef.current) {
      return;
    }

    var prev = listboxRef.current.querySelector('[data-focus]');

    if (prev) {
      prev.removeAttribute('data-focus');
    }

    var listboxNode = listboxRef.current.parentElement.querySelector('[role="listbox"]'); // "No results"

    if (!listboxNode) {
      return;
    }

    if (index === -1) {
      listboxNode.scrollTop = 0;
      return;
    }

    var option = listboxRef.current.querySelector("[data-option-index=\"".concat(index, "\"]"));

    if (!option) {
      return;
    }

    option.setAttribute('data-focus', 'true'); // Scroll active descendant into view.
    // Logic copied from https://www.w3.org/TR/wai-aria-practices/examples/listbox/js/listbox.js
    //
    // Consider this API instead once it has a better browser support:
    // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });

    if (listboxNode.scrollHeight > listboxNode.clientHeight && reason !== 'mouse') {
      var element = option;
      var scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
      var elementBottom = element.offsetTop + element.offsetHeight;

      if (elementBottom > scrollBottom) {
        listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
      } else if (element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) < listboxNode.scrollTop) {
        listboxNode.scrollTop = element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
      }
    }
  });
  var changeHighlightedIndex = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useEventCallback"])(function (_ref3) {
    var event = _ref3.event,
        diff = _ref3.diff,
        _ref3$direction = _ref3.direction,
        direction = _ref3$direction === void 0 ? 'next' : _ref3$direction,
        _ref3$reason = _ref3.reason,
        reason = _ref3$reason === void 0 ? 'auto' : _ref3$reason;

    if (!popupOpen) {
      return;
    }

    var getNextIndex = function getNextIndex() {
      var maxIndex = filteredOptions.length - 1;

      if (diff === 'reset') {
        return defaultHighlighted;
      }

      if (diff === 'start') {
        return 0;
      }

      if (diff === 'end') {
        return maxIndex;
      }

      var newIndex = highlightedIndexRef.current + diff;

      if (newIndex < 0) {
        if (newIndex === -1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap && highlightedIndexRef.current !== -1 || Math.abs(diff) > 1) {
          return 0;
        }

        return maxIndex;
      }

      if (newIndex > maxIndex) {
        if (newIndex === maxIndex + 1 && includeInputInList) {
          return -1;
        }

        if (disableListWrap || Math.abs(diff) > 1) {
          return maxIndex;
        }

        return 0;
      }

      return newIndex;
    };

    var nextIndex = validOptionIndex(getNextIndex(), direction);
    setHighlightedIndex({
      index: nextIndex,
      reason: reason,
      event: event
    }); // Sync the content of the input with the highlighted option.

    if (autoComplete && diff !== 'reset') {
      if (nextIndex === -1) {
        inputRef.current.value = inputValue;
      } else {
        var option = getOptionLabel(filteredOptions[nextIndex]);
        inputRef.current.value = option; // The portion of the selected suggestion that has not been typed by the user,
        // a completion string, appears inline after the input cursor in the textbox.

        var index = option.toLowerCase().indexOf(inputValue.toLowerCase());

        if (index === 0 && inputValue.length > 0) {
          inputRef.current.setSelectionRange(inputValue.length, option.length);
        }
      }
    }
  });
  var syncHighlightedIndex = react__WEBPACK_IMPORTED_MODULE_3__["useCallback"](function () {
    if (!popupOpen) {
      return;
    }

    var valueItem = multiple ? value[0] : value; // The popup is empty, reset

    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: 'reset'
      });
      return;
    }

    if (!listboxRef.current) {
      return;
    } // Synchronize the value with the highlighted index


    if (!filterSelectedOptions && valueItem != null) {
      var currentOption = filteredOptions[highlightedIndexRef.current]; // Keep the current highlighted index if possible

      if (multiple && currentOption && findIndex(value, function (val) {
        return getOptionSelected(currentOption, val);
      }) !== -1) {
        return;
      }

      var itemIndex = findIndex(filteredOptions, function (optionItem) {
        return getOptionSelected(optionItem, valueItem);
      });

      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: 'reset'
        });
      } else {
        setHighlightedIndex({
          index: itemIndex
        });
      }

      return;
    } // Prevent the highlighted index to leak outside the boundaries.


    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1
      });
      return;
    } // Restore the focus to the previous index.


    setHighlightedIndex({
      index: highlightedIndexRef.current
    }); // Ignore filteredOptions (and options, getOptionSelected, getOptionLabel) not to break the scroll position
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [// Only sync the highlighted index when the option switch between empty and not
  // eslint-disable-next-line react-hooks/exhaustive-deps
  filteredOptions.length === 0, // Don't sync the highlighted index with the value when multiple
  // eslint-disable-next-line react-hooks/exhaustive-deps
  multiple ? false : value, filterSelectedOptions, changeHighlightedIndex, setHighlightedIndex, popupOpen, inputValue, multiple]);
  var handleListboxRef = Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["useEventCallback"])(function (node) {
    Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_4__["setRef"])(listboxRef, node);

    if (!node) {
      return;
    }

    syncHighlightedIndex();
  });
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);

  var handleOpen = function handleOpen(event) {
    if (open) {
      return;
    }

    setOpenState(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  var handleClose = function handleClose(event, reason) {
    if (!open) {
      return;
    }

    setOpenState(false);

    if (onClose) {
      onClose(event, reason);
    }
  };

  var handleValue = function handleValue(event, newValue, reason, details) {
    if (value === newValue) {
      return;
    }

    if (onChange) {
      onChange(event, newValue, reason, details);
    }

    setValue(newValue);
  };

  var isTouch = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](false);

  var selectNewValue = function selectNewValue(event, option) {
    var reasonProp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'select-option';
    var origin = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'options';
    var reason = reasonProp;
    var newValue = option;

    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];

      if (true) {
        var matches = newValue.filter(function (val) {
          return getOptionSelected(option, val);
        });

        if (matches.length > 1) {
          console.error(["Material-UI: The `getOptionSelected` method of ".concat(componentName, " do not handle the arguments correctly."), "The component expects a single value to match a given option but found ".concat(matches.length, " matches.")].join('\n'));
        }
      }

      var itemIndex = findIndex(newValue, function (valueItem) {
        return getOptionSelected(option, valueItem);
      });

      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== 'freeSolo') {
        newValue.splice(itemIndex, 1);
        reason = 'remove-option';
      }
    }

    resetInputValue(event, newValue);
    handleValue(event, newValue, reason, {
      option: option
    });

    if (!disableCloseOnSelect) {
      handleClose(event, reason);
    }

    if (blurOnSelect === true || blurOnSelect === 'touch' && isTouch.current || blurOnSelect === 'mouse' && !isTouch.current) {
      inputRef.current.blur();
    }
  };

  function validTagIndex(index, direction) {
    if (index === -1) {
      return -1;
    }

    var nextFocus = index;

    while (true) {
      // Out of range
      if (direction === 'next' && nextFocus === value.length || direction === 'previous' && nextFocus === -1) {
        return -1;
      }

      var option = anchorEl.querySelector("[data-tag-index=\"".concat(nextFocus, "\"]")); // Same logic as MenuList.js

      if (option && (!option.hasAttribute('tabindex') || option.disabled || option.getAttribute('aria-disabled') === 'true')) {
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  var handleFocusTag = function handleFocusTag(event, direction) {
    if (!multiple) {
      return;
    }

    handleClose(event, 'toggleInput');
    var nextTag = focusedTag;

    if (focusedTag === -1) {
      if (inputValue === '' && direction === 'previous') {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === 'next' ? 1 : -1;

      if (nextTag < 0) {
        nextTag = 0;
      }

      if (nextTag === value.length) {
        nextTag = -1;
      }
    }

    nextTag = validTagIndex(nextTag, direction);
    setFocusedTag(nextTag);
    focusTag(nextTag);
  };

  var handleClear = function handleClear(event) {
    ignoreFocus.current = true;
    setInputValue('');

    if (onInputChange) {
      onInputChange(event, '', 'clear');
    }

    handleValue(event, multiple ? [] : null, 'clear');
  };

  var handleKeyDown = function handleKeyDown(other) {
    return function (event) {
      if (focusedTag !== -1 && ['ArrowLeft', 'ArrowRight'].indexOf(event.key) === -1) {
        setFocusedTag(-1);
        focusTag(-1);
      }

      switch (event.key) {
        case 'Home':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'start',
              direction: 'next',
              reason: 'keyboard',
              event: event
            });
          }

          break;

        case 'End':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'end',
              direction: 'previous',
              reason: 'keyboard',
              event: event
            });
          }

          break;

        case 'PageUp':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: 'previous',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'PageDown':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: 'next',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowDown':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: 'next',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowUp':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: 'previous',
            reason: 'keyboard',
            event: event
          });
          handleOpen(event);
          break;

        case 'ArrowLeft':
          handleFocusTag(event, 'previous');
          break;

        case 'ArrowRight':
          handleFocusTag(event, 'next');
          break;

        case 'Enter':
          // Wait until IME is settled.
          if (event.which === 229) {
            break;
          }

          if (highlightedIndexRef.current !== -1 && popupOpen) {
            var option = filteredOptions[highlightedIndexRef.current];
            var disabled = getOptionDisabled ? getOptionDisabled(option) : false; // We don't want to validate the form.

            event.preventDefault();

            if (disabled) {
              return;
            }

            selectNewValue(event, option, 'select-option'); // Move the selection to the end.

            if (autoComplete) {
              inputRef.current.setSelectionRange(inputRef.current.value.length, inputRef.current.value.length);
            }
          } else if (freeSolo && inputValue !== '' && inputValueIsSelectedValue === false) {
            if (multiple) {
              // Allow people to add new values before they submit the form.
              event.preventDefault();
            }

            selectNewValue(event, inputValue, 'create-option', 'freeSolo');
          }

          break;

        case 'Escape':
          if (popupOpen) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClose(event, 'escape');
          } else if (clearOnEscape && (inputValue !== '' || multiple && value.length > 0)) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClear(event);
          }

          break;

        case 'Backspace':
          if (multiple && inputValue === '' && value.length > 0) {
            var index = focusedTag === -1 ? value.length - 1 : focusedTag;
            var newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, 'remove-option', {
              option: value[index]
            });
          }

          break;

        default:
      }

      if (other.onKeyDown) {
        other.onKeyDown(event);
      }
    };
  };

  var handleFocus = function handleFocus(event) {
    setFocused(true);

    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    // Ignore the event when using the scrollbar with IE 11
    if (listboxRef.current !== null && document.activeElement === listboxRef.current.parentElement) {
      inputRef.current.focus();
      return;
    }

    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;

    if (debug && inputValue !== '') {
      return;
    }

    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(event, filteredOptions[highlightedIndexRef.current], 'blur');
    } else if (autoSelect && freeSolo && inputValue !== '') {
      selectNewValue(event, inputValue, 'blur', 'freeSolo');
    } else if (clearOnBlur) {
      resetInputValue(event, value);
    }

    handleClose(event, 'blur');
  };

  var handleInputChange = function handleInputChange(event) {
    var newValue = event.target.value;

    if (inputValue !== newValue) {
      setInputValue(newValue);

      if (onInputChange) {
        onInputChange(event, newValue, 'input');
      }
    }

    if (newValue === '') {
      if (!disableClearable && !multiple) {
        handleValue(event, null, 'clear');
      }
    } else {
      handleOpen(event);
    }
  };

  var handleOptionMouseOver = function handleOptionMouseOver(event) {
    setHighlightedIndex({
      event: event,
      index: Number(event.currentTarget.getAttribute('data-option-index')),
      reason: 'mouse'
    });
  };

  var handleOptionTouchStart = function handleOptionTouchStart() {
    isTouch.current = true;
  };

  var handleOptionClick = function handleOptionClick(event) {
    var index = Number(event.currentTarget.getAttribute('data-option-index'));
    selectNewValue(event, filteredOptions[index], 'select-option');
    isTouch.current = false;
  };

  var handleTagDelete = function handleTagDelete(index) {
    return function (event) {
      var newValue = value.slice();
      newValue.splice(index, 1);
      handleValue(event, newValue, 'remove-option', {
        option: value[index]
      });
    };
  };

  var handlePopupIndicator = function handlePopupIndicator(event) {
    if (open) {
      handleClose(event, 'toggleInput');
    } else {
      handleOpen(event);
    }
  }; // Prevent input blur when interacting with the combobox


  var handleMouseDown = function handleMouseDown(event) {
    if (event.target.getAttribute('id') !== id) {
      event.preventDefault();
    }
  }; // Focus the input when interacting with the combobox


  var handleClick = function handleClick() {
    inputRef.current.focus();

    if (selectOnFocus && firstFocus.current && inputRef.current.selectionEnd - inputRef.current.selectionStart === 0) {
      inputRef.current.select();
    }

    firstFocus.current = false;
  };

  var handleInputMouseDown = function handleInputMouseDown(event) {
    if (inputValue === '' || !open) {
      handlePopupIndicator(event);
    }
  };

  var dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  var groupedOptions = filteredOptions;

  if (groupBy) {
    // used to keep track of key and indexes in the result array
    var indexBy = new Map();
    var warn = false;
    groupedOptions = filteredOptions.reduce(function (acc, option, index) {
      var group = groupBy(option);

      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        if (true) {
          if (indexBy.get(group) && !warn) {
            console.warn("Material-UI: The options provided combined with the `groupBy` method of ".concat(componentName, " returns duplicated headers."), 'You can solve the issue by sorting the options with the output of `groupBy`.');
            warn = true;
          }

          indexBy.set(group, true);
        }

        acc.push({
          key: index,
          index: index,
          group: group,
          options: [option]
        });
      }

      return acc;
    }, []);
  }

  return {
    getRootProps: function getRootProps() {
      var other = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        'aria-owns': popupOpen ? "".concat(id, "-popup") : null,
        role: 'combobox',
        'aria-expanded': popupOpen
      }, other, {
        onKeyDown: handleKeyDown(other),
        onMouseDown: handleMouseDown,
        onClick: handleClick
      });
    },
    getInputLabelProps: function getInputLabelProps() {
      return {
        id: "".concat(id, "-label"),
        htmlFor: id
      };
    },
    getInputProps: function getInputProps() {
      return {
        id: id,
        value: inputValue,
        onBlur: handleBlur,
        onFocus: handleFocus,
        onChange: handleInputChange,
        onMouseDown: handleInputMouseDown,
        // if open then this is handled imperativeley so don't let react override
        // only have an opinion about this when closed
        'aria-activedescendant': popupOpen ? '' : null,
        'aria-autocomplete': autoComplete ? 'both' : 'list',
        'aria-controls': popupOpen ? "".concat(id, "-popup") : null,
        // Disable browser's suggestion that might overlap with the popup.
        // Handle autocomplete but not autofill.
        autoComplete: 'off',
        ref: inputRef,
        autoCapitalize: 'none',
        spellCheck: 'false'
      };
    },
    getClearProps: function getClearProps() {
      return {
        tabIndex: -1,
        onClick: handleClear
      };
    },
    getPopupIndicatorProps: function getPopupIndicatorProps() {
      return {
        tabIndex: -1,
        onClick: handlePopupIndicator
      };
    },
    getTagProps: function getTagProps(_ref4) {
      var index = _ref4.index;
      return {
        key: index,
        'data-tag-index': index,
        tabIndex: -1,
        onDelete: handleTagDelete(index)
      };
    },
    getListboxProps: function getListboxProps() {
      return {
        role: 'listbox',
        id: "".concat(id, "-popup"),
        'aria-labelledby': "".concat(id, "-label"),
        ref: handleListboxRef,
        onMouseDown: function onMouseDown(event) {
          // Prevent blur
          event.preventDefault();
        }
      };
    },
    getOptionProps: function getOptionProps(_ref5) {
      var index = _ref5.index,
          option = _ref5.option;
      var selected = (multiple ? value : [value]).some(function (value2) {
        return value2 != null && getOptionSelected(option, value2);
      });
      var disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: index,
        tabIndex: -1,
        role: 'option',
        id: "".concat(id, "-option-").concat(index),
        onMouseOver: handleOptionMouseOver,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        'data-option-index': index,
        'aria-disabled': disabled,
        'aria-selected': selected
      };
    },
    id: id,
    inputValue: inputValue,
    value: value,
    dirty: dirty,
    popupOpen: popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl: anchorEl,
    setAnchorEl: setAnchorEl,
    focusedTag: focusedTag,
    groupedOptions: groupedOptions
  };
}

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var safeIsNaN = Number.isNaN ||
    function ponyfill(value) {
        return typeof value === 'number' && value !== value;
    };
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (safeIsNaN(first) && safeIsNaN(second)) {
        return true;
    }
    return false;
}
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (!isEqual(newInputs[i], lastInputs[i])) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/Select/Select.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Forms/Select/Select.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Select_select__3TwVd .MuiFilledInput-underline:before, .Select_select__3TwVd .MuiFilledInput-underline:after {\n  display: none;\n}", "",{"version":3,"sources":["webpack://Select.module.scss"],"names":[],"mappings":"AAGM;EAEE,aAAA;AAHR","sourcesContent":[".select {\r\n  :global {\r\n    .MuiFilledInput-underline {\r\n      &:before,\r\n      &:after {\r\n        display: none;\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"select": "Select_select__3TwVd"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/TextInput/TextInput.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Forms/TextInput/TextInput.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".TextInput_textInput__35_1P > .MuiInputBase-root {\n  border: 1px solid #CADBEA;\n  overflow: hidden;\n  background-color: white;\n}\n.TextInput_textInput__35_1P > .MuiInputBase-root:hover {\n  background-color: white;\n}\n.TextInput_textInput__35_1P > .MuiInputBase-root:focused {\n  background-color: white;\n  -webkit-box-shadow: #fcfcfb 0 0 0 2px;\n          box-shadow: #fcfcfb 0 0 0 2px;\n  border-color: \"#fcfcfb\";\n}\n.TextInput_textInput__35_1P > .MuiInputBase-root.Mui-focused {\n  -webkit-box-shadow: 0 0 0 1px #CADBEA;\n          box-shadow: 0 0 0 1px #CADBEA;\n  background-color: white;\n}\n.TextInput_textInput__35_1P > .Mui-error {\n  border-color: var(--color-red);\n}\n.TextInput_textInput__35_1P > label {\n  color: var(--color-dark-grey);\n}\n\n.TextInput_noLabel__3dbAP .MuiInputBase-input {\n  padding-top: 14px;\n  padding-bottom: 15px;\n}", "",{"version":3,"sources":["webpack://TextInput.module.scss"],"names":[],"mappings":"AAEI;EACE,yBAAA;EACE,gBAAA;EAEA,uBAAA;AAFR;AAIQ;EACE,uBAAA;AAFV;AAIQ;EACE,uBAAA;EACA,qCAAA;UAAA,6BAAA;EACA,uBAAA;AAFV;AAKQ;EACE,qCAAA;UAAA,6BAAA;EACA,uBAAA;AAHV;AAOI;EACE,8BAAA;AALN;AAQI;EACE,6BAAA;AANN;;AAaI;EACE,iBAAA;EACA,oBAAA;AAVN","sourcesContent":[".textInput {\r\n  &:global {\r\n    > .MuiInputBase-root {\r\n      border: 1px solid #CADBEA;\r\n        overflow: hidden;\r\n        // border-radius: 4px;\r\n        background-color: white;\r\n  \r\n        &:hover {\r\n          background-color: white;\r\n        }\r\n        &:focused {\r\n          background-color: white;\r\n          box-shadow: #fcfcfb 0 0 0 2px;\r\n          border-color: '#fcfcfb';\r\n        }\r\n  \r\n        &.Mui-focused {\r\n          box-shadow: 0 0 0 1px #CADBEA;\r\n          background-color: white;\r\n        }\r\n    }\r\n\r\n    > .Mui-error {\r\n      border-color: var(--color-red);\r\n    }\r\n    \r\n    > label {\r\n      color: var(--color-dark-grey);\r\n    }\r\n  }\r\n}\r\n\r\n.noLabel {\r\n  :global {\r\n    .MuiInputBase-input {\r\n      padding-top: 14px;\r\n      padding-bottom: 15px;\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"textInput": "TextInput_textInput__35_1P",
	"noLabel": "TextInput_noLabel__3dbAP"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1-lts
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../next/dist/compiled/webpack/global.js */ "./node_modules/next/dist/compiled/webpack/global.js")))

/***/ }),

/***/ "./node_modules/react-window/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-window/dist/index.esm.js ***!
  \*****************************************************/
/*! exports provided: VariableSizeGrid, VariableSizeList, FixedSizeGrid, FixedSizeList, areEqual, shouldComponentUpdate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableSizeGrid", function() { return VariableSizeGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VariableSizeList", function() { return VariableSizeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeGrid", function() { return FixedSizeGrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSizeList", function() { return FixedSizeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "areEqual", function() { return areEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldComponentUpdate", function() { return shouldComponentUpdate; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");







// Animation frame based implementation of setTimeout.
// Inspired by Joe Lambert, https://gist.github.com/joelambert/1002116#file-requesttimeout-js
var hasNativePerformanceNow = typeof performance === 'object' && typeof performance.now === 'function';
var now = hasNativePerformanceNow ? function () {
  return performance.now();
} : function () {
  return Date.now();
};
function cancelTimeout(timeoutID) {
  cancelAnimationFrame(timeoutID.id);
}
function requestTimeout(callback, delay) {
  var start = now();

  function tick() {
    if (now() - start >= delay) {
      callback.call(null);
    } else {
      timeoutID.id = requestAnimationFrame(tick);
    }
  }

  var timeoutID = {
    id: requestAnimationFrame(tick)
  };
  return timeoutID;
}

var size = -1; // This utility copied from "dom-helpers" package.

function getScrollbarSize(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (size === -1 || recalculate) {
    var div = document.createElement('div');
    var style = div.style;
    style.width = '50px';
    style.height = '50px';
    style.overflow = 'scroll';
    document.body.appendChild(div);
    size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  }

  return size;
}
var cachedRTLResult = null; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
// Chrome does not seem to adhere; its scrollLeft values are positive (measured relative to the left).
// Safari's elastic bounce makes detecting this even more complicated wrt potential false positives.
// The safest way to check this is to intentionally set a negative offset,
// and then verify that the subsequent "scroll" event matches the negative offset.
// If it does not match, then we can assume a non-standard RTL scroll implementation.

function getRTLOffsetType(recalculate) {
  if (recalculate === void 0) {
    recalculate = false;
  }

  if (cachedRTLResult === null || recalculate) {
    var outerDiv = document.createElement('div');
    var outerStyle = outerDiv.style;
    outerStyle.width = '50px';
    outerStyle.height = '50px';
    outerStyle.overflow = 'scroll';
    outerStyle.direction = 'rtl';
    var innerDiv = document.createElement('div');
    var innerStyle = innerDiv.style;
    innerStyle.width = '100px';
    innerStyle.height = '100px';
    outerDiv.appendChild(innerDiv);
    document.body.appendChild(outerDiv);

    if (outerDiv.scrollLeft > 0) {
      cachedRTLResult = 'positive-descending';
    } else {
      outerDiv.scrollLeft = 1;

      if (outerDiv.scrollLeft === 0) {
        cachedRTLResult = 'negative';
      } else {
        cachedRTLResult = 'positive-ascending';
      }
    }

    document.body.removeChild(outerDiv);
    return cachedRTLResult;
  }

  return cachedRTLResult;
}

var IS_SCROLLING_DEBOUNCE_INTERVAL = 150;

var defaultItemKey = function defaultItemKey(_ref) {
  var columnIndex = _ref.columnIndex,
      data = _ref.data,
      rowIndex = _ref.rowIndex;
  return rowIndex + ":" + columnIndex;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsOverscanCount = null;
var devWarningsOverscanRowsColumnsCount = null;
var devWarningsTagName = null;

if (true) {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsOverscanCount =
    /*#__PURE__*/
    new WeakSet();
    devWarningsOverscanRowsColumnsCount =
    /*#__PURE__*/
    new WeakSet();
    devWarningsTagName =
    /*#__PURE__*/
    new WeakSet();
  }
}

function createGridComponent(_ref2) {
  var _class, _temp;

  var getColumnOffset = _ref2.getColumnOffset,
      getColumnStartIndexForOffset = _ref2.getColumnStartIndexForOffset,
      getColumnStopIndexForStartIndex = _ref2.getColumnStopIndexForStartIndex,
      getColumnWidth = _ref2.getColumnWidth,
      getEstimatedTotalHeight = _ref2.getEstimatedTotalHeight,
      getEstimatedTotalWidth = _ref2.getEstimatedTotalWidth,
      getOffsetForColumnAndAlignment = _ref2.getOffsetForColumnAndAlignment,
      getOffsetForRowAndAlignment = _ref2.getOffsetForRowAndAlignment,
      getRowHeight = _ref2.getRowHeight,
      getRowOffset = _ref2.getRowOffset,
      getRowStartIndexForOffset = _ref2.getRowStartIndexForOffset,
      getRowStopIndexForStartIndex = _ref2.getRowStopIndexForStartIndex,
      initInstanceProps = _ref2.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref2.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref2.validateProps;
  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Grid, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function Grid(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)));
      _this._resetIsScrollingTimeoutId = null;
      _this._outerRef = void 0;
      _this.state = {
        instance: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)),
        isScrolling: false,
        horizontalScrollDirection: 'forward',
        scrollLeft: typeof _this.props.initialScrollLeft === 'number' ? _this.props.initialScrollLeft : 0,
        scrollTop: typeof _this.props.initialScrollTop === 'number' ? _this.props.initialScrollTop : 0,
        scrollUpdateWasRequested: false,
        verticalScrollDirection: 'forward'
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (overscanColumnStartIndex, overscanColumnStopIndex, overscanRowStartIndex, overscanRowStopIndex, visibleColumnStartIndex, visibleColumnStopIndex, visibleRowStartIndex, visibleRowStopIndex) {
        return _this.props.onItemsRendered({
          overscanColumnStartIndex: overscanColumnStartIndex,
          overscanColumnStopIndex: overscanColumnStopIndex,
          overscanRowStartIndex: overscanRowStartIndex,
          overscanRowStopIndex: overscanRowStopIndex,
          visibleColumnStartIndex: visibleColumnStartIndex,
          visibleColumnStopIndex: visibleColumnStopIndex,
          visibleRowStartIndex: visibleRowStartIndex,
          visibleRowStopIndex: visibleRowStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (scrollLeft, scrollTop, horizontalScrollDirection, verticalScrollDirection, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          horizontalScrollDirection: horizontalScrollDirection,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          verticalScrollDirection: verticalScrollDirection,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (rowIndex, columnIndex) {
        var _this$props = _this.props,
            columnWidth = _this$props.columnWidth,
            direction = _this$props.direction,
            rowHeight = _this$props.rowHeight;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && columnWidth, shouldResetStyleCacheOnItemSizeChange && direction, shouldResetStyleCacheOnItemSizeChange && rowHeight);

        var key = rowIndex + ":" + columnIndex;
        var style;

        if (itemStyleCache.hasOwnProperty(key)) {
          style = itemStyleCache[key];
        } else {
          var _offset = getColumnOffset(_this.props, columnIndex, _this._instanceProps);

          var isRtl = direction === 'rtl';
          itemStyleCache[key] = style = {
            position: 'absolute',
            left: isRtl ? undefined : _offset,
            right: isRtl ? _offset : undefined,
            top: getRowOffset(_this.props, rowIndex, _this._instanceProps),
            height: getRowHeight(_this.props, rowIndex, _this._instanceProps),
            width: getColumnWidth(_this.props, columnIndex, _this._instanceProps)
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (_, __, ___) {
        return {};
      });

      _this._onScroll = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientHeight = _event$currentTarget.clientHeight,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollTop = _event$currentTarget.scrollTop,
            scrollHeight = _event$currentTarget.scrollHeight,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction; // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
          // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
          // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
          // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.

          var calculatedScrollLeft = scrollLeft;

          if (direction === 'rtl') {
            switch (getRTLOffsetType()) {
              case 'negative':
                calculatedScrollLeft = -scrollLeft;
                break;

              case 'positive-descending':
                calculatedScrollLeft = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          calculatedScrollLeft = Math.max(0, Math.min(calculatedScrollLeft, scrollWidth - clientWidth));
          var calculatedScrollTop = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
            scrollLeft: calculatedScrollLeft,
            scrollTop: calculatedScrollTop,
            verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward',
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1);
        });
      };

      return _this;
    }

    Grid.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = Grid.prototype;

    _proto.scrollTo = function scrollTo(_ref3) {
      var scrollLeft = _ref3.scrollLeft,
          scrollTop = _ref3.scrollTop;

      if (scrollLeft !== undefined) {
        scrollLeft = Math.max(0, scrollLeft);
      }

      if (scrollTop !== undefined) {
        scrollTop = Math.max(0, scrollTop);
      }

      this.setState(function (prevState) {
        if (scrollLeft === undefined) {
          scrollLeft = prevState.scrollLeft;
        }

        if (scrollTop === undefined) {
          scrollTop = prevState.scrollTop;
        }

        if (prevState.scrollLeft === scrollLeft && prevState.scrollTop === scrollTop) {
          return null;
        }

        return {
          horizontalScrollDirection: prevState.scrollLeft < scrollLeft ? 'forward' : 'backward',
          scrollLeft: scrollLeft,
          scrollTop: scrollTop,
          scrollUpdateWasRequested: true,
          verticalScrollDirection: prevState.scrollTop < scrollTop ? 'forward' : 'backward'
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(_ref4) {
      var _ref4$align = _ref4.align,
          align = _ref4$align === void 0 ? 'auto' : _ref4$align,
          columnIndex = _ref4.columnIndex,
          rowIndex = _ref4.rowIndex;
      var _this$props2 = this.props,
          columnCount = _this$props2.columnCount,
          height = _this$props2.height,
          rowCount = _this$props2.rowCount,
          width = _this$props2.width;
      var _this$state = this.state,
          scrollLeft = _this$state.scrollLeft,
          scrollTop = _this$state.scrollTop;
      var scrollbarSize = getScrollbarSize();

      if (columnIndex !== undefined) {
        columnIndex = Math.max(0, Math.min(columnIndex, columnCount - 1));
      }

      if (rowIndex !== undefined) {
        rowIndex = Math.max(0, Math.min(rowIndex, rowCount - 1));
      }

      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps); // The scrollbar size should be considered when scrolling an item into view,
      // to ensure it's fully visible.
      // But we only need to account for its size when it's actually visible.

      var horizontalScrollbarSize = estimatedTotalWidth > width ? scrollbarSize : 0;
      var verticalScrollbarSize = estimatedTotalHeight > height ? scrollbarSize : 0;
      this.scrollTo({
        scrollLeft: columnIndex !== undefined ? getOffsetForColumnAndAlignment(this.props, columnIndex, align, scrollLeft, this._instanceProps, verticalScrollbarSize) : scrollLeft,
        scrollTop: rowIndex !== undefined ? getOffsetForRowAndAlignment(this.props, rowIndex, align, scrollTop, this._instanceProps, horizontalScrollbarSize) : scrollTop
      });
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props3 = this.props,
          initialScrollLeft = _this$props3.initialScrollLeft,
          initialScrollTop = _this$props3.initialScrollTop;

      if (this._outerRef != null) {
        var outerRef = this._outerRef;

        if (typeof initialScrollLeft === 'number') {
          outerRef.scrollLeft = initialScrollLeft;
        }

        if (typeof initialScrollTop === 'number') {
          outerRef.scrollTop = initialScrollTop;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var direction = this.props.direction;
      var _this$state2 = this.state,
          scrollLeft = _this$state2.scrollLeft,
          scrollTop = _this$state2.scrollTop,
          scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
        // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
        // So we need to determine which browser behavior we're dealing with, and mimic it.
        var outerRef = this._outerRef;

        if (direction === 'rtl') {
          switch (getRTLOffsetType()) {
            case 'negative':
              outerRef.scrollLeft = -scrollLeft;
              break;

            case 'positive-ascending':
              outerRef.scrollLeft = scrollLeft;
              break;

            default:
              var clientWidth = outerRef.clientWidth,
                  scrollWidth = outerRef.scrollWidth;
              outerRef.scrollLeft = scrollWidth - clientWidth - scrollLeft;
              break;
          }
        } else {
          outerRef.scrollLeft = Math.max(0, scrollLeft);
        }

        outerRef.scrollTop = Math.max(0, scrollTop);
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          columnCount = _this$props4.columnCount,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey : _this$props4$itemKey,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          rowCount = _this$props4.rowCount,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling;

      var _this$_getHorizontalR = this._getHorizontalRangeToRender(),
          columnStartIndex = _this$_getHorizontalR[0],
          columnStopIndex = _this$_getHorizontalR[1];

      var _this$_getVerticalRan = this._getVerticalRangeToRender(),
          rowStartIndex = _this$_getVerticalRan[0],
          rowStopIndex = _this$_getVerticalRan[1];

      var items = [];

      if (columnCount > 0 && rowCount) {
        for (var _rowIndex = rowStartIndex; _rowIndex <= rowStopIndex; _rowIndex++) {
          for (var _columnIndex = columnStartIndex; _columnIndex <= columnStopIndex; _columnIndex++) {
            items.push(Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(children, {
              columnIndex: _columnIndex,
              data: itemData,
              isScrolling: useIsScrolling ? isScrolling : undefined,
              key: itemKey({
                columnIndex: _columnIndex,
                data: itemData,
                rowIndex: _rowIndex
              }),
              rowIndex: _rowIndex,
              style: this._getItemStyle(_rowIndex, _columnIndex)
            }));
          }
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalHeight = getEstimatedTotalHeight(this.props, this._instanceProps);
      var estimatedTotalWidth = getEstimatedTotalWidth(this.props, this._instanceProps);
      return Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: this._onScroll,
        ref: this._outerRefSetter,
        style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: estimatedTotalHeight,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: estimatedTotalWidth
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      var _this$props5 = this.props,
          columnCount = _this$props5.columnCount,
          onItemsRendered = _this$props5.onItemsRendered,
          onScroll = _this$props5.onScroll,
          rowCount = _this$props5.rowCount;

      if (typeof onItemsRendered === 'function') {
        if (columnCount > 0 && rowCount > 0) {
          var _this$_getHorizontalR2 = this._getHorizontalRangeToRender(),
              _overscanColumnStartIndex = _this$_getHorizontalR2[0],
              _overscanColumnStopIndex = _this$_getHorizontalR2[1],
              _visibleColumnStartIndex = _this$_getHorizontalR2[2],
              _visibleColumnStopIndex = _this$_getHorizontalR2[3];

          var _this$_getVerticalRan2 = this._getVerticalRangeToRender(),
              _overscanRowStartIndex = _this$_getVerticalRan2[0],
              _overscanRowStopIndex = _this$_getVerticalRan2[1],
              _visibleRowStartIndex = _this$_getVerticalRan2[2],
              _visibleRowStopIndex = _this$_getVerticalRan2[3];

          this._callOnItemsRendered(_overscanColumnStartIndex, _overscanColumnStopIndex, _overscanRowStartIndex, _overscanRowStopIndex, _visibleColumnStartIndex, _visibleColumnStopIndex, _visibleRowStartIndex, _visibleRowStopIndex);
        }
      }

      if (typeof onScroll === 'function') {
        var _this$state3 = this.state,
            _horizontalScrollDirection = _this$state3.horizontalScrollDirection,
            _scrollLeft = _this$state3.scrollLeft,
            _scrollTop = _this$state3.scrollTop,
            _scrollUpdateWasRequested = _this$state3.scrollUpdateWasRequested,
            _verticalScrollDirection = _this$state3.verticalScrollDirection;

        this._callOnScroll(_scrollLeft, _scrollTop, _horizontalScrollDirection, _verticalScrollDirection, _scrollUpdateWasRequested);
      }
    }; // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.


    _proto._getHorizontalRangeToRender = function _getHorizontalRangeToRender() {
      var _this$props6 = this.props,
          columnCount = _this$props6.columnCount,
          overscanColumnCount = _this$props6.overscanColumnCount,
          overscanColumnsCount = _this$props6.overscanColumnsCount,
          overscanCount = _this$props6.overscanCount,
          rowCount = _this$props6.rowCount;
      var _this$state4 = this.state,
          horizontalScrollDirection = _this$state4.horizontalScrollDirection,
          isScrolling = _this$state4.isScrolling,
          scrollLeft = _this$state4.scrollLeft;
      var overscanCountResolved = overscanColumnCount || overscanColumnsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getColumnStartIndexForOffset(this.props, scrollLeft, this._instanceProps);
      var stopIndex = getColumnStopIndexForStartIndex(this.props, startIndex, scrollLeft, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || horizontalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || horizontalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(columnCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    _proto._getVerticalRangeToRender = function _getVerticalRangeToRender() {
      var _this$props7 = this.props,
          columnCount = _this$props7.columnCount,
          overscanCount = _this$props7.overscanCount,
          overscanRowCount = _this$props7.overscanRowCount,
          overscanRowsCount = _this$props7.overscanRowsCount,
          rowCount = _this$props7.rowCount;
      var _this$state5 = this.state,
          isScrolling = _this$state5.isScrolling,
          verticalScrollDirection = _this$state5.verticalScrollDirection,
          scrollTop = _this$state5.scrollTop;
      var overscanCountResolved = overscanRowCount || overscanRowsCount || overscanCount || 1;

      if (columnCount === 0 || rowCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getRowStartIndexForOffset(this.props, scrollTop, this._instanceProps);
      var stopIndex = getRowStopIndexForStartIndex(this.props, startIndex, scrollTop, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || verticalScrollDirection === 'backward' ? Math.max(1, overscanCountResolved) : 1;
      var overscanForward = !isScrolling || verticalScrollDirection === 'forward' ? Math.max(1, overscanCountResolved) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(rowCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return Grid;
  }(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    useIsScrolling: false
  }, _temp;
}

var validateSharedProps = function validateSharedProps(_ref5, _ref6) {
  var children = _ref5.children,
      direction = _ref5.direction,
      height = _ref5.height,
      innerTagName = _ref5.innerTagName,
      outerTagName = _ref5.outerTagName,
      overscanColumnsCount = _ref5.overscanColumnsCount,
      overscanCount = _ref5.overscanCount,
      overscanRowsCount = _ref5.overscanRowsCount,
      width = _ref5.width;
  var instance = _ref6.instance;

  if (true) {
    if (typeof overscanCount === 'number') {
      if (devWarningsOverscanCount && !devWarningsOverscanCount.has(instance)) {
        devWarningsOverscanCount.add(instance);
        console.warn('The overscanCount prop has been deprecated. ' + 'Please use the overscanColumnCount and overscanRowCount props instead.');
      }
    }

    if (typeof overscanColumnsCount === 'number' || typeof overscanRowsCount === 'number') {
      if (devWarningsOverscanRowsColumnsCount && !devWarningsOverscanRowsColumnsCount.has(instance)) {
        devWarningsOverscanRowsColumnsCount.add(instance);
        console.warn('The overscanColumnsCount and overscanRowsCount props have been deprecated. ' + 'Please use the overscanColumnCount and overscanRowCount props instead.');
      }
    }

    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName && !devWarningsTagName.has(instance)) {
        devWarningsTagName.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    switch (direction) {
      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    if (typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Grids must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    }

    if (typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Grids must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var DEFAULT_ESTIMATED_ITEM_SIZE = 50;

var getEstimatedTotalHeight = function getEstimatedTotalHeight(_ref, _ref2) {
  var rowCount = _ref.rowCount;
  var rowMetadataMap = _ref2.rowMetadataMap,
      estimatedRowHeight = _ref2.estimatedRowHeight,
      lastMeasuredRowIndex = _ref2.lastMeasuredRowIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredRowIndex >= rowCount) {
    lastMeasuredRowIndex = rowCount - 1;
  }

  if (lastMeasuredRowIndex >= 0) {
    var itemMetadata = rowMetadataMap[lastMeasuredRowIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = rowCount - lastMeasuredRowIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedRowHeight;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getEstimatedTotalWidth = function getEstimatedTotalWidth(_ref3, _ref4) {
  var columnCount = _ref3.columnCount;
  var columnMetadataMap = _ref4.columnMetadataMap,
      estimatedColumnWidth = _ref4.estimatedColumnWidth,
      lastMeasuredColumnIndex = _ref4.lastMeasuredColumnIndex;
  var totalSizeOfMeasuredRows = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredColumnIndex >= columnCount) {
    lastMeasuredColumnIndex = columnCount - 1;
  }

  if (lastMeasuredColumnIndex >= 0) {
    var itemMetadata = columnMetadataMap[lastMeasuredColumnIndex];
    totalSizeOfMeasuredRows = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = columnCount - lastMeasuredColumnIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedColumnWidth;
  return totalSizeOfMeasuredRows + totalSizeOfUnmeasuredItems;
};

var getItemMetadata = function getItemMetadata(itemType, props, index, instanceProps) {
  var itemMetadataMap, itemSize, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    itemSize = props.columnWidth;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    itemSize = props.rowHeight;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    if (itemType === 'column') {
      instanceProps.lastMeasuredColumnIndex = index;
    } else {
      instanceProps.lastMeasuredRowIndex = index;
    }
  }

  return itemMetadataMap[index];
};

var findNearestItem = function findNearestItem(itemType, props, instanceProps, offset) {
  var itemMetadataMap, lastMeasuredIndex;

  if (itemType === 'column') {
    itemMetadataMap = instanceProps.columnMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredColumnIndex;
  } else {
    itemMetadataMap = instanceProps.rowMetadataMap;
    lastMeasuredIndex = instanceProps.lastMeasuredRowIndex;
  }

  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch(itemType, props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch(itemType, props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch = function findNearestItemBinarySearch(itemType, props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata(itemType, props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch = function findNearestItemExponentialSearch(itemType, props, instanceProps, index, offset) {
  var itemCount = itemType === 'column' ? props.columnCount : props.rowCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata(itemType, props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch(itemType, props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var getOffsetForIndexAndAlignment = function getOffsetForIndexAndAlignment(itemType, props, index, align, scrollOffset, instanceProps, scrollbarSize) {
  var size = itemType === 'column' ? props.width : props.height;
  var itemMetadata = getItemMetadata(itemType, props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
  // To ensure it reflects actual measurements instead of just estimates.

  var estimatedTotalSize = itemType === 'column' ? getEstimatedTotalWidth(props, instanceProps) : getEstimatedTotalHeight(props, instanceProps);
  var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
  var minOffset = Math.max(0, itemMetadata.offset - size + scrollbarSize + itemMetadata.size);

  if (align === 'smart') {
    if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
      align = 'auto';
    } else {
      align = 'center';
    }
  }

  switch (align) {
    case 'start':
      return maxOffset;

    case 'end':
      return minOffset;

    case 'center':
      return Math.round(minOffset + (maxOffset - minOffset) / 2);

    case 'auto':
    default:
      if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
        return scrollOffset;
      } else if (minOffset > maxOffset) {
        // Because we only take into account the scrollbar size when calculating minOffset
        // this value can be larger than maxOffset when at the end of the list
        return minOffset;
      } else if (scrollOffset < minOffset) {
        return minOffset;
      } else {
        return maxOffset;
      }

  }
};

var VariableSizeGrid =
/*#__PURE__*/
createGridComponent({
  getColumnOffset: function getColumnOffset(props, index, instanceProps) {
    return getItemMetadata('column', props, index, instanceProps).offset;
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(props, scrollLeft, instanceProps) {
    return findNearestItem('column', props, instanceProps, scrollLeft);
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(props, startIndex, scrollLeft, instanceProps) {
    var columnCount = props.columnCount,
        width = props.width;
    var itemMetadata = getItemMetadata('column', props, startIndex, instanceProps);
    var maxOffset = scrollLeft + width;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < columnCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('column', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  getColumnWidth: function getColumnWidth(props, index, instanceProps) {
    return instanceProps.columnMetadataMap[index].size;
  },
  getEstimatedTotalHeight: getEstimatedTotalHeight,
  getEstimatedTotalWidth: getEstimatedTotalWidth,
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment('column', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(props, index, align, scrollOffset, instanceProps, scrollbarSize) {
    return getOffsetForIndexAndAlignment('row', props, index, align, scrollOffset, instanceProps, scrollbarSize);
  },
  getRowOffset: function getRowOffset(props, index, instanceProps) {
    return getItemMetadata('row', props, index, instanceProps).offset;
  },
  getRowHeight: function getRowHeight(props, index, instanceProps) {
    return instanceProps.rowMetadataMap[index].size;
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(props, scrollTop, instanceProps) {
    return findNearestItem('row', props, instanceProps, scrollTop);
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(props, startIndex, scrollTop, instanceProps) {
    var rowCount = props.rowCount,
        height = props.height;
    var itemMetadata = getItemMetadata('row', props, startIndex, instanceProps);
    var maxOffset = scrollTop + height;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < rowCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata('row', props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref5 = props,
        estimatedColumnWidth = _ref5.estimatedColumnWidth,
        estimatedRowHeight = _ref5.estimatedRowHeight;
    var instanceProps = {
      columnMetadataMap: {},
      estimatedColumnWidth: estimatedColumnWidth || DEFAULT_ESTIMATED_ITEM_SIZE,
      estimatedRowHeight: estimatedRowHeight || DEFAULT_ESTIMATED_ITEM_SIZE,
      lastMeasuredColumnIndex: -1,
      lastMeasuredRowIndex: -1,
      rowMetadataMap: {}
    };

    instance.resetAfterColumnIndex = function (columnIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        columnIndex: columnIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterRowIndex = function (rowIndex, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instance.resetAfterIndices({
        rowIndex: rowIndex,
        shouldForceUpdate: shouldForceUpdate
      });
    };

    instance.resetAfterIndices = function (_ref6) {
      var columnIndex = _ref6.columnIndex,
          rowIndex = _ref6.rowIndex,
          _ref6$shouldForceUpda = _ref6.shouldForceUpdate,
          shouldForceUpdate = _ref6$shouldForceUpda === void 0 ? true : _ref6$shouldForceUpda;

      if (typeof columnIndex === 'number') {
        instanceProps.lastMeasuredColumnIndex = Math.min(instanceProps.lastMeasuredColumnIndex, columnIndex - 1);
      }

      if (typeof rowIndex === 'number') {
        instanceProps.lastMeasuredRowIndex = Math.min(instanceProps.lastMeasuredRowIndex, rowIndex - 1);
      } // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.


      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref7) {
    var columnWidth = _ref7.columnWidth,
        rowHeight = _ref7.rowHeight;

    if (true) {
      if (typeof columnWidth !== 'function') {
        throw Error('An invalid "columnWidth" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (columnWidth === null ? 'null' : typeof columnWidth) + "\" was specified."));
      } else if (typeof rowHeight !== 'function') {
        throw Error('An invalid "rowHeight" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (rowHeight === null ? 'null' : typeof rowHeight) + "\" was specified."));
      }
    }
  }
});

var IS_SCROLLING_DEBOUNCE_INTERVAL$1 = 150;

var defaultItemKey$1 = function defaultItemKey(index, data) {
  return index;
}; // In DEV mode, this Set helps us only log a warning once per component instance.
// This avoids spamming the console every time a render happens.


var devWarningsDirection = null;
var devWarningsTagName$1 = null;

if (true) {
  if (typeof window !== 'undefined' && typeof window.WeakSet !== 'undefined') {
    devWarningsDirection =
    /*#__PURE__*/
    new WeakSet();
    devWarningsTagName$1 =
    /*#__PURE__*/
    new WeakSet();
  }
}

function createListComponent(_ref) {
  var _class, _temp;

  var getItemOffset = _ref.getItemOffset,
      getEstimatedTotalSize = _ref.getEstimatedTotalSize,
      getItemSize = _ref.getItemSize,
      getOffsetForIndexAndAlignment = _ref.getOffsetForIndexAndAlignment,
      getStartIndexForOffset = _ref.getStartIndexForOffset,
      getStopIndexForStartIndex = _ref.getStopIndexForStartIndex,
      initInstanceProps = _ref.initInstanceProps,
      shouldResetStyleCacheOnItemSizeChange = _ref.shouldResetStyleCacheOnItemSizeChange,
      validateProps = _ref.validateProps;
  return _temp = _class =
  /*#__PURE__*/
  function (_PureComponent) {
    Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(List, _PureComponent);

    // Always use explicit constructor for React components.
    // It produces less code after transpilation. (#26)
    // eslint-disable-next-line no-useless-constructor
    function List(props) {
      var _this;

      _this = _PureComponent.call(this, props) || this;
      _this._instanceProps = initInstanceProps(_this.props, Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)));
      _this._outerRef = void 0;
      _this._resetIsScrollingTimeoutId = null;
      _this.state = {
        instance: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)),
        isScrolling: false,
        scrollDirection: 'forward',
        scrollOffset: typeof _this.props.initialScrollOffset === 'number' ? _this.props.initialScrollOffset : 0,
        scrollUpdateWasRequested: false
      };
      _this._callOnItemsRendered = void 0;
      _this._callOnItemsRendered = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (overscanStartIndex, overscanStopIndex, visibleStartIndex, visibleStopIndex) {
        return _this.props.onItemsRendered({
          overscanStartIndex: overscanStartIndex,
          overscanStopIndex: overscanStopIndex,
          visibleStartIndex: visibleStartIndex,
          visibleStopIndex: visibleStopIndex
        });
      });
      _this._callOnScroll = void 0;
      _this._callOnScroll = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (scrollDirection, scrollOffset, scrollUpdateWasRequested) {
        return _this.props.onScroll({
          scrollDirection: scrollDirection,
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: scrollUpdateWasRequested
        });
      });
      _this._getItemStyle = void 0;

      _this._getItemStyle = function (index) {
        var _this$props = _this.props,
            direction = _this$props.direction,
            itemSize = _this$props.itemSize,
            layout = _this$props.layout;

        var itemStyleCache = _this._getItemStyleCache(shouldResetStyleCacheOnItemSizeChange && itemSize, shouldResetStyleCacheOnItemSizeChange && layout, shouldResetStyleCacheOnItemSizeChange && direction);

        var style;

        if (itemStyleCache.hasOwnProperty(index)) {
          style = itemStyleCache[index];
        } else {
          var _offset = getItemOffset(_this.props, index, _this._instanceProps);

          var size = getItemSize(_this.props, index, _this._instanceProps); // TODO Deprecate direction "horizontal"

          var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
          var isRtl = direction === 'rtl';
          var offsetHorizontal = isHorizontal ? _offset : 0;
          itemStyleCache[index] = style = {
            position: 'absolute',
            left: isRtl ? undefined : offsetHorizontal,
            right: isRtl ? offsetHorizontal : undefined,
            top: !isHorizontal ? _offset : 0,
            height: !isHorizontal ? size : '100%',
            width: isHorizontal ? size : '100%'
          };
        }

        return style;
      };

      _this._getItemStyleCache = void 0;
      _this._getItemStyleCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_3__["default"])(function (_, __, ___) {
        return {};
      });

      _this._onScrollHorizontal = function (event) {
        var _event$currentTarget = event.currentTarget,
            clientWidth = _event$currentTarget.clientWidth,
            scrollLeft = _event$currentTarget.scrollLeft,
            scrollWidth = _event$currentTarget.scrollWidth;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollLeft) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          }

          var direction = _this.props.direction;
          var scrollOffset = scrollLeft;

          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // It's also easier for this component if we convert offsets to the same format as they would be in for ltr.
            // So the simplest solution is to determine which browser behavior we're dealing with, and convert based on it.
            switch (getRTLOffsetType()) {
              case 'negative':
                scrollOffset = -scrollLeft;
                break;

              case 'positive-descending':
                scrollOffset = scrollWidth - clientWidth - scrollLeft;
                break;
            }
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          scrollOffset = Math.max(0, Math.min(scrollOffset, scrollWidth - clientWidth));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollLeft ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._onScrollVertical = function (event) {
        var _event$currentTarget2 = event.currentTarget,
            clientHeight = _event$currentTarget2.clientHeight,
            scrollHeight = _event$currentTarget2.scrollHeight,
            scrollTop = _event$currentTarget2.scrollTop;

        _this.setState(function (prevState) {
          if (prevState.scrollOffset === scrollTop) {
            // Scroll position may have been updated by cDM/cDU,
            // In which case we don't need to trigger another render,
            // And we don't want to update state.isScrolling.
            return null;
          } // Prevent Safari's elastic scrolling from causing visual shaking when scrolling past bounds.


          var scrollOffset = Math.max(0, Math.min(scrollTop, scrollHeight - clientHeight));
          return {
            isScrolling: true,
            scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
            scrollOffset: scrollOffset,
            scrollUpdateWasRequested: false
          };
        }, _this._resetIsScrollingDebounced);
      };

      _this._outerRefSetter = function (ref) {
        var outerRef = _this.props.outerRef;
        _this._outerRef = ref;

        if (typeof outerRef === 'function') {
          outerRef(ref);
        } else if (outerRef != null && typeof outerRef === 'object' && outerRef.hasOwnProperty('current')) {
          outerRef.current = ref;
        }
      };

      _this._resetIsScrollingDebounced = function () {
        if (_this._resetIsScrollingTimeoutId !== null) {
          cancelTimeout(_this._resetIsScrollingTimeoutId);
        }

        _this._resetIsScrollingTimeoutId = requestTimeout(_this._resetIsScrolling, IS_SCROLLING_DEBOUNCE_INTERVAL$1);
      };

      _this._resetIsScrolling = function () {
        _this._resetIsScrollingTimeoutId = null;

        _this.setState({
          isScrolling: false
        }, function () {
          // Clear style cache after state update has been committed.
          // This way we don't break pure sCU for items that don't use isScrolling param.
          _this._getItemStyleCache(-1, null);
        });
      };

      return _this;
    }

    List.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      validateSharedProps$1(nextProps, prevState);
      validateProps(nextProps);
      return null;
    };

    var _proto = List.prototype;

    _proto.scrollTo = function scrollTo(scrollOffset) {
      scrollOffset = Math.max(0, scrollOffset);
      this.setState(function (prevState) {
        if (prevState.scrollOffset === scrollOffset) {
          return null;
        }

        return {
          scrollDirection: prevState.scrollOffset < scrollOffset ? 'forward' : 'backward',
          scrollOffset: scrollOffset,
          scrollUpdateWasRequested: true
        };
      }, this._resetIsScrollingDebounced);
    };

    _proto.scrollToItem = function scrollToItem(index, align) {
      if (align === void 0) {
        align = 'auto';
      }

      var itemCount = this.props.itemCount;
      var scrollOffset = this.state.scrollOffset;
      index = Math.max(0, Math.min(index, itemCount - 1));
      this.scrollTo(getOffsetForIndexAndAlignment(this.props, index, align, scrollOffset, this._instanceProps));
    };

    _proto.componentDidMount = function componentDidMount() {
      var _this$props2 = this.props,
          direction = _this$props2.direction,
          initialScrollOffset = _this$props2.initialScrollOffset,
          layout = _this$props2.layout;

      if (typeof initialScrollOffset === 'number' && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          outerRef.scrollLeft = initialScrollOffset;
        } else {
          outerRef.scrollTop = initialScrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      var _this$props3 = this.props,
          direction = _this$props3.direction,
          layout = _this$props3.layout;
      var _this$state = this.state,
          scrollOffset = _this$state.scrollOffset,
          scrollUpdateWasRequested = _this$state.scrollUpdateWasRequested;

      if (scrollUpdateWasRequested && this._outerRef != null) {
        var outerRef = this._outerRef; // TODO Deprecate direction "horizontal"

        if (direction === 'horizontal' || layout === 'horizontal') {
          if (direction === 'rtl') {
            // TRICKY According to the spec, scrollLeft should be negative for RTL aligned elements.
            // This is not the case for all browsers though (e.g. Chrome reports values as positive, measured relative to the left).
            // So we need to determine which browser behavior we're dealing with, and mimic it.
            switch (getRTLOffsetType()) {
              case 'negative':
                outerRef.scrollLeft = -scrollOffset;
                break;

              case 'positive-ascending':
                outerRef.scrollLeft = scrollOffset;
                break;

              default:
                var clientWidth = outerRef.clientWidth,
                    scrollWidth = outerRef.scrollWidth;
                outerRef.scrollLeft = scrollWidth - clientWidth - scrollOffset;
                break;
            }
          } else {
            outerRef.scrollLeft = scrollOffset;
          }
        } else {
          outerRef.scrollTop = scrollOffset;
        }
      }

      this._callPropsCallbacks();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this._resetIsScrollingTimeoutId !== null) {
        cancelTimeout(this._resetIsScrollingTimeoutId);
      }
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          children = _this$props4.children,
          className = _this$props4.className,
          direction = _this$props4.direction,
          height = _this$props4.height,
          innerRef = _this$props4.innerRef,
          innerElementType = _this$props4.innerElementType,
          innerTagName = _this$props4.innerTagName,
          itemCount = _this$props4.itemCount,
          itemData = _this$props4.itemData,
          _this$props4$itemKey = _this$props4.itemKey,
          itemKey = _this$props4$itemKey === void 0 ? defaultItemKey$1 : _this$props4$itemKey,
          layout = _this$props4.layout,
          outerElementType = _this$props4.outerElementType,
          outerTagName = _this$props4.outerTagName,
          style = _this$props4.style,
          useIsScrolling = _this$props4.useIsScrolling,
          width = _this$props4.width;
      var isScrolling = this.state.isScrolling; // TODO Deprecate direction "horizontal"

      var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
      var onScroll = isHorizontal ? this._onScrollHorizontal : this._onScrollVertical;

      var _this$_getRangeToRend = this._getRangeToRender(),
          startIndex = _this$_getRangeToRend[0],
          stopIndex = _this$_getRangeToRend[1];

      var items = [];

      if (itemCount > 0) {
        for (var _index = startIndex; _index <= stopIndex; _index++) {
          items.push(Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(children, {
            data: itemData,
            key: itemKey(_index, itemData),
            index: _index,
            isScrolling: useIsScrolling ? isScrolling : undefined,
            style: this._getItemStyle(_index)
          }));
        }
      } // Read this value AFTER items have been created,
      // So their actual sizes (if variable) are taken into consideration.


      var estimatedTotalSize = getEstimatedTotalSize(this.props, this._instanceProps);
      return Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(outerElementType || outerTagName || 'div', {
        className: className,
        onScroll: onScroll,
        ref: this._outerRefSetter,
        style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          position: 'relative',
          height: height,
          width: width,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          willChange: 'transform',
          direction: direction
        }, style)
      }, Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(innerElementType || innerTagName || 'div', {
        children: items,
        ref: innerRef,
        style: {
          height: isHorizontal ? '100%' : estimatedTotalSize,
          pointerEvents: isScrolling ? 'none' : undefined,
          width: isHorizontal ? estimatedTotalSize : '100%'
        }
      }));
    };

    _proto._callPropsCallbacks = function _callPropsCallbacks() {
      if (typeof this.props.onItemsRendered === 'function') {
        var itemCount = this.props.itemCount;

        if (itemCount > 0) {
          var _this$_getRangeToRend2 = this._getRangeToRender(),
              _overscanStartIndex = _this$_getRangeToRend2[0],
              _overscanStopIndex = _this$_getRangeToRend2[1],
              _visibleStartIndex = _this$_getRangeToRend2[2],
              _visibleStopIndex = _this$_getRangeToRend2[3];

          this._callOnItemsRendered(_overscanStartIndex, _overscanStopIndex, _visibleStartIndex, _visibleStopIndex);
        }
      }

      if (typeof this.props.onScroll === 'function') {
        var _this$state2 = this.state,
            _scrollDirection = _this$state2.scrollDirection,
            _scrollOffset = _this$state2.scrollOffset,
            _scrollUpdateWasRequested = _this$state2.scrollUpdateWasRequested;

        this._callOnScroll(_scrollDirection, _scrollOffset, _scrollUpdateWasRequested);
      }
    }; // Lazily create and cache item styles while scrolling,
    // So that pure component sCU will prevent re-renders.
    // We maintain this cache, and pass a style prop rather than index,
    // So that List can clear cached styles and force item re-render if necessary.


    _proto._getRangeToRender = function _getRangeToRender() {
      var _this$props5 = this.props,
          itemCount = _this$props5.itemCount,
          overscanCount = _this$props5.overscanCount;
      var _this$state3 = this.state,
          isScrolling = _this$state3.isScrolling,
          scrollDirection = _this$state3.scrollDirection,
          scrollOffset = _this$state3.scrollOffset;

      if (itemCount === 0) {
        return [0, 0, 0, 0];
      }

      var startIndex = getStartIndexForOffset(this.props, scrollOffset, this._instanceProps);
      var stopIndex = getStopIndexForStartIndex(this.props, startIndex, scrollOffset, this._instanceProps); // Overscan by one item in each direction so that tab/focus works.
      // If there isn't at least one extra item, tab loops back around.

      var overscanBackward = !isScrolling || scrollDirection === 'backward' ? Math.max(1, overscanCount) : 1;
      var overscanForward = !isScrolling || scrollDirection === 'forward' ? Math.max(1, overscanCount) : 1;
      return [Math.max(0, startIndex - overscanBackward), Math.max(0, Math.min(itemCount - 1, stopIndex + overscanForward)), startIndex, stopIndex];
    };

    return List;
  }(react__WEBPACK_IMPORTED_MODULE_4__["PureComponent"]), _class.defaultProps = {
    direction: 'ltr',
    itemData: undefined,
    layout: 'vertical',
    overscanCount: 2,
    useIsScrolling: false
  }, _temp;
} // NOTE: I considered further wrapping individual items with a pure ListItem component.
// This would avoid ever calling the render function for the same index more than once,
// But it would also add the overhead of a lot of components/fibers.
// I assume people already do this (render function returning a class component),
// So my doing it would just unnecessarily double the wrappers.

var validateSharedProps$1 = function validateSharedProps(_ref2, _ref3) {
  var children = _ref2.children,
      direction = _ref2.direction,
      height = _ref2.height,
      layout = _ref2.layout,
      innerTagName = _ref2.innerTagName,
      outerTagName = _ref2.outerTagName,
      width = _ref2.width;
  var instance = _ref3.instance;

  if (true) {
    if (innerTagName != null || outerTagName != null) {
      if (devWarningsTagName$1 && !devWarningsTagName$1.has(instance)) {
        devWarningsTagName$1.add(instance);
        console.warn('The innerTagName and outerTagName props have been deprecated. ' + 'Please use the innerElementType and outerElementType props instead.');
      }
    } // TODO Deprecate direction "horizontal"


    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';

    switch (direction) {
      case 'horizontal':
      case 'vertical':
        if (devWarningsDirection && !devWarningsDirection.has(instance)) {
          devWarningsDirection.add(instance);
          console.warn('The direction prop should be either "ltr" (default) or "rtl". ' + 'Please use the layout prop to specify "vertical" (default) or "horizontal" orientation.');
        }

        break;

      case 'ltr':
      case 'rtl':
        // Valid values
        break;

      default:
        throw Error('An invalid "direction" prop has been specified. ' + 'Value should be either "ltr" or "rtl". ' + ("\"" + direction + "\" was specified."));
    }

    switch (layout) {
      case 'horizontal':
      case 'vertical':
        // Valid values
        break;

      default:
        throw Error('An invalid "layout" prop has been specified. ' + 'Value should be either "horizontal" or "vertical". ' + ("\"" + layout + "\" was specified."));
    }

    if (children == null) {
      throw Error('An invalid "children" prop has been specified. ' + 'Value should be a React component. ' + ("\"" + (children === null ? 'null' : typeof children) + "\" was specified."));
    }

    if (isHorizontal && typeof width !== 'number') {
      throw Error('An invalid "width" prop has been specified. ' + 'Horizontal lists must specify a number for width. ' + ("\"" + (width === null ? 'null' : typeof width) + "\" was specified."));
    } else if (!isHorizontal && typeof height !== 'number') {
      throw Error('An invalid "height" prop has been specified. ' + 'Vertical lists must specify a number for height. ' + ("\"" + (height === null ? 'null' : typeof height) + "\" was specified."));
    }
  }
};

var DEFAULT_ESTIMATED_ITEM_SIZE$1 = 50;

var getItemMetadata$1 = function getItemMetadata(props, index, instanceProps) {
  var _ref = props,
      itemSize = _ref.itemSize;
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;

  if (index > lastMeasuredIndex) {
    var offset = 0;

    if (lastMeasuredIndex >= 0) {
      var itemMetadata = itemMetadataMap[lastMeasuredIndex];
      offset = itemMetadata.offset + itemMetadata.size;
    }

    for (var i = lastMeasuredIndex + 1; i <= index; i++) {
      var size = itemSize(i);
      itemMetadataMap[i] = {
        offset: offset,
        size: size
      };
      offset += size;
    }

    instanceProps.lastMeasuredIndex = index;
  }

  return itemMetadataMap[index];
};

var findNearestItem$1 = function findNearestItem(props, instanceProps, offset) {
  var itemMetadataMap = instanceProps.itemMetadataMap,
      lastMeasuredIndex = instanceProps.lastMeasuredIndex;
  var lastMeasuredItemOffset = lastMeasuredIndex > 0 ? itemMetadataMap[lastMeasuredIndex].offset : 0;

  if (lastMeasuredItemOffset >= offset) {
    // If we've already measured items within this range just use a binary search as it's faster.
    return findNearestItemBinarySearch$1(props, instanceProps, lastMeasuredIndex, 0, offset);
  } else {
    // If we haven't yet measured this high, fallback to an exponential search with an inner binary search.
    // The exponential search avoids pre-computing sizes for the full set of items as a binary search would.
    // The overall complexity for this approach is O(log n).
    return findNearestItemExponentialSearch$1(props, instanceProps, Math.max(0, lastMeasuredIndex), offset);
  }
};

var findNearestItemBinarySearch$1 = function findNearestItemBinarySearch(props, instanceProps, high, low, offset) {
  while (low <= high) {
    var middle = low + Math.floor((high - low) / 2);
    var currentOffset = getItemMetadata$1(props, middle, instanceProps).offset;

    if (currentOffset === offset) {
      return middle;
    } else if (currentOffset < offset) {
      low = middle + 1;
    } else if (currentOffset > offset) {
      high = middle - 1;
    }
  }

  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};

var findNearestItemExponentialSearch$1 = function findNearestItemExponentialSearch(props, instanceProps, index, offset) {
  var itemCount = props.itemCount;
  var interval = 1;

  while (index < itemCount && getItemMetadata$1(props, index, instanceProps).offset < offset) {
    index += interval;
    interval *= 2;
  }

  return findNearestItemBinarySearch$1(props, instanceProps, Math.min(index, itemCount - 1), Math.floor(index / 2), offset);
};

var getEstimatedTotalSize = function getEstimatedTotalSize(_ref2, _ref3) {
  var itemCount = _ref2.itemCount;
  var itemMetadataMap = _ref3.itemMetadataMap,
      estimatedItemSize = _ref3.estimatedItemSize,
      lastMeasuredIndex = _ref3.lastMeasuredIndex;
  var totalSizeOfMeasuredItems = 0; // Edge case check for when the number of items decreases while a scroll is in progress.
  // https://github.com/bvaughn/react-window/pull/138

  if (lastMeasuredIndex >= itemCount) {
    lastMeasuredIndex = itemCount - 1;
  }

  if (lastMeasuredIndex >= 0) {
    var itemMetadata = itemMetadataMap[lastMeasuredIndex];
    totalSizeOfMeasuredItems = itemMetadata.offset + itemMetadata.size;
  }

  var numUnmeasuredItems = itemCount - lastMeasuredIndex - 1;
  var totalSizeOfUnmeasuredItems = numUnmeasuredItems * estimatedItemSize;
  return totalSizeOfMeasuredItems + totalSizeOfUnmeasuredItems;
};

var VariableSizeList =
/*#__PURE__*/
createListComponent({
  getItemOffset: function getItemOffset(props, index, instanceProps) {
    return getItemMetadata$1(props, index, instanceProps).offset;
  },
  getItemSize: function getItemSize(props, index, instanceProps) {
    return instanceProps.itemMetadataMap[index].size;
  },
  getEstimatedTotalSize: getEstimatedTotalSize,
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(props, index, align, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, index, instanceProps); // Get estimated total size after ItemMetadata is computed,
    // To ensure it reflects actual measurements instead of just estimates.

    var estimatedTotalSize = getEstimatedTotalSize(props, instanceProps);
    var maxOffset = Math.max(0, Math.min(estimatedTotalSize - size, itemMetadata.offset));
    var minOffset = Math.max(0, itemMetadata.offset - size + itemMetadata.size);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        return Math.round(minOffset + (maxOffset - minOffset) / 2);

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(props, offset, instanceProps) {
    return findNearestItem$1(props, instanceProps, offset);
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(props, startIndex, scrollOffset, instanceProps) {
    var direction = props.direction,
        height = props.height,
        itemCount = props.itemCount,
        layout = props.layout,
        width = props.width; // TODO Deprecate direction "horizontal"

    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var itemMetadata = getItemMetadata$1(props, startIndex, instanceProps);
    var maxOffset = scrollOffset + size;
    var offset = itemMetadata.offset + itemMetadata.size;
    var stopIndex = startIndex;

    while (stopIndex < itemCount - 1 && offset < maxOffset) {
      stopIndex++;
      offset += getItemMetadata$1(props, stopIndex, instanceProps).size;
    }

    return stopIndex;
  },
  initInstanceProps: function initInstanceProps(props, instance) {
    var _ref4 = props,
        estimatedItemSize = _ref4.estimatedItemSize;
    var instanceProps = {
      itemMetadataMap: {},
      estimatedItemSize: estimatedItemSize || DEFAULT_ESTIMATED_ITEM_SIZE$1,
      lastMeasuredIndex: -1
    };

    instance.resetAfterIndex = function (index, shouldForceUpdate) {
      if (shouldForceUpdate === void 0) {
        shouldForceUpdate = true;
      }

      instanceProps.lastMeasuredIndex = Math.min(instanceProps.lastMeasuredIndex, index - 1); // We could potentially optimize further by only evicting styles after this index,
      // But since styles are only cached while scrolling is in progress-
      // It seems an unnecessary optimization.
      // It's unlikely that resetAfterIndex() will be called while a user is scrolling.

      instance._getItemStyleCache(-1);

      if (shouldForceUpdate) {
        instance.forceUpdate();
      }
    };

    return instanceProps;
  },
  shouldResetStyleCacheOnItemSizeChange: false,
  validateProps: function validateProps(_ref5) {
    var itemSize = _ref5.itemSize;

    if (true) {
      if (typeof itemSize !== 'function') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a function. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

var FixedSizeGrid =
/*#__PURE__*/
createGridComponent({
  getColumnOffset: function getColumnOffset(_ref, index) {
    var columnWidth = _ref.columnWidth;
    return index * columnWidth;
  },
  getColumnWidth: function getColumnWidth(_ref2, index) {
    var columnWidth = _ref2.columnWidth;
    return columnWidth;
  },
  getRowOffset: function getRowOffset(_ref3, index) {
    var rowHeight = _ref3.rowHeight;
    return index * rowHeight;
  },
  getRowHeight: function getRowHeight(_ref4, index) {
    var rowHeight = _ref4.rowHeight;
    return rowHeight;
  },
  getEstimatedTotalHeight: function getEstimatedTotalHeight(_ref5) {
    var rowCount = _ref5.rowCount,
        rowHeight = _ref5.rowHeight;
    return rowHeight * rowCount;
  },
  getEstimatedTotalWidth: function getEstimatedTotalWidth(_ref6) {
    var columnCount = _ref6.columnCount,
        columnWidth = _ref6.columnWidth;
    return columnWidth * columnCount;
  },
  getOffsetForColumnAndAlignment: function getOffsetForColumnAndAlignment(_ref7, columnIndex, align, scrollLeft, instanceProps, scrollbarSize) {
    var columnCount = _ref7.columnCount,
        columnWidth = _ref7.columnWidth,
        width = _ref7.width;
    var lastColumnOffset = Math.max(0, columnCount * columnWidth - width);
    var maxOffset = Math.min(lastColumnOffset, columnIndex * columnWidth);
    var minOffset = Math.max(0, columnIndex * columnWidth - width + scrollbarSize + columnWidth);

    if (align === 'smart') {
      if (scrollLeft >= minOffset - width && scrollLeft <= maxOffset + width) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(width / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastColumnOffset + Math.floor(width / 2)) {
          return lastColumnOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollLeft >= minOffset && scrollLeft <= maxOffset) {
          return scrollLeft;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollLeft < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getOffsetForRowAndAlignment: function getOffsetForRowAndAlignment(_ref8, rowIndex, align, scrollTop, instanceProps, scrollbarSize) {
    var rowHeight = _ref8.rowHeight,
        height = _ref8.height,
        rowCount = _ref8.rowCount;
    var lastRowOffset = Math.max(0, rowCount * rowHeight - height);
    var maxOffset = Math.min(lastRowOffset, rowIndex * rowHeight);
    var minOffset = Math.max(0, rowIndex * rowHeight - height + scrollbarSize + rowHeight);

    if (align === 'smart') {
      if (scrollTop >= minOffset - height && scrollTop <= maxOffset + height) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        // "Centered" offset is usually the average of the min and max.
        // But near the edges of the list, this doesn't hold true.
        var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

        if (middleOffset < Math.ceil(height / 2)) {
          return 0; // near the beginning
        } else if (middleOffset > lastRowOffset + Math.floor(height / 2)) {
          return lastRowOffset; // near the end
        } else {
          return middleOffset;
        }

      case 'auto':
      default:
        if (scrollTop >= minOffset && scrollTop <= maxOffset) {
          return scrollTop;
        } else if (minOffset > maxOffset) {
          // Because we only take into account the scrollbar size when calculating minOffset
          // this value can be larger than maxOffset when at the end of the list
          return minOffset;
        } else if (scrollTop < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getColumnStartIndexForOffset: function getColumnStartIndexForOffset(_ref9, scrollLeft) {
    var columnWidth = _ref9.columnWidth,
        columnCount = _ref9.columnCount;
    return Math.max(0, Math.min(columnCount - 1, Math.floor(scrollLeft / columnWidth)));
  },
  getColumnStopIndexForStartIndex: function getColumnStopIndexForStartIndex(_ref10, startIndex, scrollLeft) {
    var columnWidth = _ref10.columnWidth,
        columnCount = _ref10.columnCount,
        width = _ref10.width;
    var left = startIndex * columnWidth;
    var numVisibleColumns = Math.ceil((width + scrollLeft - left) / columnWidth);
    return Math.max(0, Math.min(columnCount - 1, startIndex + numVisibleColumns - 1 // -1 is because stop index is inclusive
    ));
  },
  getRowStartIndexForOffset: function getRowStartIndexForOffset(_ref11, scrollTop) {
    var rowHeight = _ref11.rowHeight,
        rowCount = _ref11.rowCount;
    return Math.max(0, Math.min(rowCount - 1, Math.floor(scrollTop / rowHeight)));
  },
  getRowStopIndexForStartIndex: function getRowStopIndexForStartIndex(_ref12, startIndex, scrollTop) {
    var rowHeight = _ref12.rowHeight,
        rowCount = _ref12.rowCount,
        height = _ref12.height;
    var top = startIndex * rowHeight;
    var numVisibleRows = Math.ceil((height + scrollTop - top) / rowHeight);
    return Math.max(0, Math.min(rowCount - 1, startIndex + numVisibleRows - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref13) {
    var columnWidth = _ref13.columnWidth,
        rowHeight = _ref13.rowHeight;

    if (true) {
      if (typeof columnWidth !== 'number') {
        throw Error('An invalid "columnWidth" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (columnWidth === null ? 'null' : typeof columnWidth) + "\" was specified."));
      }

      if (typeof rowHeight !== 'number') {
        throw Error('An invalid "rowHeight" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (rowHeight === null ? 'null' : typeof rowHeight) + "\" was specified."));
      }
    }
  }
});

var FixedSizeList =
/*#__PURE__*/
createListComponent({
  getItemOffset: function getItemOffset(_ref, index) {
    var itemSize = _ref.itemSize;
    return index * itemSize;
  },
  getItemSize: function getItemSize(_ref2, index) {
    var itemSize = _ref2.itemSize;
    return itemSize;
  },
  getEstimatedTotalSize: function getEstimatedTotalSize(_ref3) {
    var itemCount = _ref3.itemCount,
        itemSize = _ref3.itemSize;
    return itemSize * itemCount;
  },
  getOffsetForIndexAndAlignment: function getOffsetForIndexAndAlignment(_ref4, index, align, scrollOffset) {
    var direction = _ref4.direction,
        height = _ref4.height,
        itemCount = _ref4.itemCount,
        itemSize = _ref4.itemSize,
        layout = _ref4.layout,
        width = _ref4.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var size = isHorizontal ? width : height;
    var lastItemOffset = Math.max(0, itemCount * itemSize - size);
    var maxOffset = Math.min(lastItemOffset, index * itemSize);
    var minOffset = Math.max(0, index * itemSize - size + itemSize);

    if (align === 'smart') {
      if (scrollOffset >= minOffset - size && scrollOffset <= maxOffset + size) {
        align = 'auto';
      } else {
        align = 'center';
      }
    }

    switch (align) {
      case 'start':
        return maxOffset;

      case 'end':
        return minOffset;

      case 'center':
        {
          // "Centered" offset is usually the average of the min and max.
          // But near the edges of the list, this doesn't hold true.
          var middleOffset = Math.round(minOffset + (maxOffset - minOffset) / 2);

          if (middleOffset < Math.ceil(size / 2)) {
            return 0; // near the beginning
          } else if (middleOffset > lastItemOffset + Math.floor(size / 2)) {
            return lastItemOffset; // near the end
          } else {
            return middleOffset;
          }
        }

      case 'auto':
      default:
        if (scrollOffset >= minOffset && scrollOffset <= maxOffset) {
          return scrollOffset;
        } else if (scrollOffset < minOffset) {
          return minOffset;
        } else {
          return maxOffset;
        }

    }
  },
  getStartIndexForOffset: function getStartIndexForOffset(_ref5, offset) {
    var itemCount = _ref5.itemCount,
        itemSize = _ref5.itemSize;
    return Math.max(0, Math.min(itemCount - 1, Math.floor(offset / itemSize)));
  },
  getStopIndexForStartIndex: function getStopIndexForStartIndex(_ref6, startIndex, scrollOffset) {
    var direction = _ref6.direction,
        height = _ref6.height,
        itemCount = _ref6.itemCount,
        itemSize = _ref6.itemSize,
        layout = _ref6.layout,
        width = _ref6.width;
    // TODO Deprecate direction "horizontal"
    var isHorizontal = direction === 'horizontal' || layout === 'horizontal';
    var offset = startIndex * itemSize;
    var size = isHorizontal ? width : height;
    var numVisibleItems = Math.ceil((size + scrollOffset - offset) / itemSize);
    return Math.max(0, Math.min(itemCount - 1, startIndex + numVisibleItems - 1 // -1 is because stop index is inclusive
    ));
  },
  initInstanceProps: function initInstanceProps(props) {// Noop
  },
  shouldResetStyleCacheOnItemSizeChange: true,
  validateProps: function validateProps(_ref7) {
    var itemSize = _ref7.itemSize;

    if (true) {
      if (typeof itemSize !== 'number') {
        throw Error('An invalid "itemSize" prop has been specified. ' + 'Value should be a number. ' + ("\"" + (itemSize === null ? 'null' : typeof itemSize) + "\" was specified."));
      }
    }
  }
});

// Pulled from react-compat
// https://github.com/developit/preact-compat/blob/7c5de00e7c85e2ffd011bf3af02899b63f699d3a/src/index.js#L349
function shallowDiffers(prev, next) {
  for (var attribute in prev) {
    if (!(attribute in next)) {
      return true;
    }
  }

  for (var _attribute in next) {
    if (prev[_attribute] !== next[_attribute]) {
      return true;
    }
  }

  return false;
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-api.html#reactmemo

function areEqual(prevProps, nextProps) {
  var prevStyle = prevProps.style,
      prevRest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__["default"])(prevProps, ["style"]);

  var nextStyle = nextProps.style,
      nextRest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_5__["default"])(nextProps, ["style"]);

  return !shallowDiffers(prevStyle, nextStyle) && !shallowDiffers(prevRest, nextRest);
}

// It knows to compare individual style props and ignore the wrapper object.
// See https://reactjs.org/docs/react-component.html#shouldcomponentupdate

function shouldComponentUpdate(nextProps, nextState) {
  return !areEqual(this.props, nextProps) || shallowDiffers(this.state, nextState);
}


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./src/components/Forms/Select/Select.module.scss":
/*!********************************************************!*\
  !*** ./src/components/Forms/Select/Select.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Select.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/Select/Select.module.scss");

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
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Select.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/Select/Select.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Select.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/Select/Select.module.scss");

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
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../TextInput */ "./src/components/Forms/TextInput/index.tsx");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Select.module.scss */ "./src/components/Forms/Select/Select.module.scss");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Select_module_scss__WEBPACK_IMPORTED_MODULE_11__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\Select\\Select.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







 // import { Scrollbars } from 'react-custom-scrollbars-2';
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

  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      label = _ref.label,
      options = _ref.options,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["value", "onChange", "getOptionLabel", "label", "options"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
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
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.select
  }, props), {}, {
    id: "tags-filled",
    value: valueToUse,
    options: options,
    getOptionLabel: getOptionLabel,
    onChange: onChangeToUse,
    renderTags: function renderTags(value, getTagProps) {
      return value.map(function (option, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
          variant: "outlined" // color="primary"
          ,
          label: getOptionLabel(option),
          size: "small"
        }, getTagProps({
          index: index
        })), "option-".concat(index), false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, _this);
      });
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_TextInput__WEBPACK_IMPORTED_MODULE_10__["default"], _objectSpread(_objectSpread({}, params), {}, {
        label: label,
        type: "text",
        variant: "filled" // size="small"

      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 9
      }, _this);
    },
    disableListWrap: true,
    ListboxComponent: ListboxComponent // ListboxComponent={MemoListComponent as any}

  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 149,
    columnNumber: 5
  }, _this);
};

_s4(Selection, "lBhokjNY4Q3MSTyEN8jyhMQ1Kzo=");

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

/***/ }),

/***/ "./src/components/Forms/Select/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/Forms/Select/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./src/components/Forms/Select/Select.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Select__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./src/components/Forms/TextInput/TextInput.module.scss":
/*!**************************************************************!*\
  !*** ./src/components/Forms/TextInput/TextInput.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./TextInput.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/TextInput/TextInput.module.scss");

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
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./TextInput.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/TextInput/TextInput.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./TextInput.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Forms/TextInput/TextInput.module.scss");

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

/***/ "./src/components/Forms/TextInput/TextInput.tsx":
/*!******************************************************!*\
  !*** ./src/components/Forms/TextInput/TextInput.tsx ***!
  \******************************************************/
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
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _TextInput_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TextInput.module.scss */ "./src/components/Forms/TextInput/TextInput.module.scss");
/* harmony import */ var _TextInput_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_TextInput_module_scss__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\TextInput\\TextInput.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var NumberFormat = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-number-format */ "./node_modules/react-number-format/dist/react-number-format.es.js")];
    },
    modules: ["..\\components\\Forms\\TextInput\\TextInput.tsx -> " + 'react-number-format']
  }
});
_c2 = NumberFormat;

var NumberFormatCustom = function NumberFormatCustom(_ref) {
  var inputRef = _ref.inputRef,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? '$' : _ref$prefix,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      onChange = _ref.onChange,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["inputRef", "prefix", "type", "onChange"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(NumberFormat, _objectSpread(_objectSpread({}, props), {}, {
    type: type === 'mobile' ? 'tel' : type === 'currency' || type === 'number' ? 'text' : type,
    prefix: type === 'currency' ? prefix : '',
    format: type === 'mobile' ? '#### ####' : undefined,
    thousandSeparator: type === 'currency',
    getInputRef: inputRef,
    onValueChange: function onValueChange(values) {
      onChange({
        target: {
          value: values.value
        }
      });
    },
    isNumericString: true
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, _this);
};

_c3 = NumberFormatCustom;
var MemoNumberFormatCustom = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(NumberFormatCustom);
_c4 = MemoNumberFormatCustom;

var TextInput = function TextInput(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(v) {
    setLocalValue(v.target.value);
  };

  var onChangeToUse = props.onChange || onLocalChange;
  var valueToUse = props.onChange ? props.value : localValue;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["StylesProvider"], {
    injectFirst: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({
      className: [_TextInput_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.textInput, !props.label ? _TextInput_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.noLabel : ''].join(' '),
      size: "small",
      onChange: onChangeToUse,
      value: valueToUse,
      InputProps: {
        disableUnderline: true,
        inputComponent: props.type === 'currency' || props.type === 'number' || props.type === 'mobile' ? MemoNumberFormatCustom : undefined
      },
      helperText: " ",
      rowsMax: 100,
      variant: "filled",
      fullWidth: true
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, _this);
};

_s(TextInput, "0cDHC8c7u1K6BAhVsOIxkU84T6E=");

_c5 = TextInput;
/* harmony default export */ __webpack_exports__["default"] = (_c6 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(TextInput));

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "NumberFormat$dynamic");
$RefreshReg$(_c2, "NumberFormat");
$RefreshReg$(_c3, "NumberFormatCustom");
$RefreshReg$(_c4, "MemoNumberFormatCustom");
$RefreshReg$(_c5, "TextInput");
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

/***/ }),

/***/ "./src/components/Forms/TextInput/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/Forms/TextInput/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextInput */ "./src/components/Forms/TextInput/TextInput.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TextInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9DaGlwL0NoaXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2hpcC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9MaXN0U3ViaGVhZGVyL0xpc3RTdWJoZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vTGlzdFN1YmhlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9Qb3BwZXIvUG9wcGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1BvcHBlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvQ2FuY2VsLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3VzZU1lZGlhUXVlcnkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vdXNlTWVkaWFRdWVyeS91c2VNZWRpYVF1ZXJ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3V0aWxzL2RlcHJlY2F0ZWRQcm9wVHlwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91dGlscy91bnN0YWJsZV91c2VJZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL0F1dG9jb21wbGV0ZS9BdXRvY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9BdXRvY29tcGxldGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9pbnRlcm5hbC9zdmctaWNvbnMvQXJyb3dEcm9wRG93bi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL2ludGVybmFsL3N2Zy1pY29ucy9DbG9zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL3VzZUF1dG9jb21wbGV0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9sYWIvZXNtL3VzZUF1dG9jb21wbGV0ZS91c2VBdXRvY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9tZW1vaXplLW9uZS9kaXN0L21lbW9pemUtb25lLmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1NlbGVjdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvVGV4dElucHV0L1RleHRJbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3BvcHBlci5qcy9kaXN0L2VzbS9wb3BwZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC13aW5kb3cvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm1zL1NlbGVjdC9TZWxlY3QubW9kdWxlLnNjc3M/ZjdmNyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1NlbGVjdC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm1zL1NlbGVjdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm1zL1RleHRJbnB1dC9UZXh0SW5wdXQubW9kdWxlLnNjc3M/MDY0ZiIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvVGV4dElucHV0L1RleHRJbnB1dC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvcm1zL1RleHRJbnB1dC9pbmRleC50c3giXSwibmFtZXMiOlsiTElTVEJPWF9QQURESU5HIiwicmVuZGVyUm93IiwicHJvcHMiLCJkYXRhIiwiaW5kZXgiLCJzdHlsZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwidG9wIiwiT3V0ZXJFbGVtZW50Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJPdXRlckVsZW1lbnRUeXBlIiwiZm9yd2FyZFJlZiIsInJlZiIsIm91dGVyUHJvcHMiLCJ1c2VDb250ZXh0IiwidXNlUmVzZXRDYWNoZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJyZXNldEFmdGVySW5kZXgiLCJMaXN0Ym94Q29tcG9uZW50IiwiY2hpbGRyZW4iLCJvdGhlciIsIml0ZW1EYXRhIiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwidGhlbWUiLCJ1c2VUaGVtZSIsInNtVXAiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJ1cCIsIm5vU3NyIiwiaXRlbUNvdW50IiwibGVuZ3RoIiwiaXRlbVNpemUiLCJnZXRDaGlsZFNpemUiLCJjaGlsZCIsImlzVmFsaWRFbGVtZW50IiwidHlwZSIsIkxpc3RTdWJoZWFkZXIiLCJnZXRIZWlnaHQiLCJtYXAiLCJyZWR1Y2UiLCJhIiwiYiIsImdyaWRSZWYiLCJTZWxlY3Rpb24iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZ2V0T3B0aW9uTGFiZWwiLCJsYWJlbCIsIm9wdGlvbnMiLCJ1c2VTdGF0ZSIsImxvY2FsVmFsdWUiLCJzZXRMb2NhbFZhbHVlIiwib25Mb2NhbENoYW5nZSIsIl9lIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJzdHlsZXMiLCJzZWxlY3QiLCJnZXRUYWdQcm9wcyIsIm9wdGlvbiIsInBhcmFtcyIsIm1lbW8iLCJOdW1iZXJGb3JtYXQiLCJkeW5hbWljIiwiTnVtYmVyRm9ybWF0Q3VzdG9tIiwiaW5wdXRSZWYiLCJwcmVmaXgiLCJ1bmRlZmluZWQiLCJ2YWx1ZXMiLCJNZW1vTnVtYmVyRm9ybWF0Q3VzdG9tIiwiVGV4dElucHV0IiwidGV4dElucHV0Iiwibm9MYWJlbCIsImpvaW4iLCJkaXNhYmxlVW5kZXJsaW5lIiwiaW5wdXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNnQztBQUMzRDtBQUNJO0FBQ1g7QUFDOEI7QUFDUjtBQUNlO0FBQ2hCO0FBQ1U7QUFDVjtBQUNOO0FBQ2hDO0FBQ1A7QUFDQSx3QkFBd0IscUVBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0EsT0FBTztBQUNQLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0ZBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDaGpDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QiwwQkFBMEI7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QUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLE9BQU87QUFDckIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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QzFJLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxTQUFTO0FBQ3ZCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFZSxxRUFBTSxFQUFDO0FBQ3RCOzs7Ozs7Ozs7Ozs7OztBQ3ZqRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUNZO0FBQ2dCO0FBQ2pEO0FBQ2dCO0FBQytDOztBQUVwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjOztBQUVkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0Isa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RkFBYzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDREQUE0RCxnR0FBc0IsQ0FBQyxnR0FBc0I7QUFDekc7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdHQUFzQixDQUFDLGdHQUFzQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDJEQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSw0QkFBNEIsMkRBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLDJEQUFVO0FBQzNDO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0ZBQXdGO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDJDQUEyQywyQkFBMkI7QUFDdEUsbURBQW1ELGlDQUFpQztBQUNwRix1QkFBdUIsMkRBQWE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBO0FBQ0EsYUFBYSwyREFBYTtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxlQUFlLGtGQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU8sRUFBRSwyREFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrR0FBK0c7QUFDL0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJHQUEyRztBQUMzRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUcsQ0FBQyxtREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLFlBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjs7O0FBR0E7QUFDQTs7QUFFQSxJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksd0ZBQWM7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsZ0dBQXNCLENBQUMsZ0dBQXNCO0FBQ3pHO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixnR0FBc0IsQ0FBQyxnR0FBc0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDJEQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0EsNEJBQTRCLDJEQUFVO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsMkVBQTJFOztBQUUzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQywyREFBVTtBQUMzQztBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7OztBQUdYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7O0FBRS9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRCxxQkFBcUIsMkRBQWE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDs7O0FBR0E7QUFDQSxhQUFhLDJEQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0ZBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTyxFQUFFLDJEQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkdBQTJHO0FBQzNHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxDQUFDLG1EQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLElBQXFDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVDQUF1QyxZQUFZO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBO0FBQ0Esc0VBQXNFO0FBQ3RFOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkZBQTZGO0FBQzdGO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQixTQUFTO0FBQ1Qsa0NBQWtDO0FBQ2xDLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIsU0FBUztBQUNULCtCQUErQjtBQUMvQixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsd0RBQXdEO0FBQ3hELEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixXQUFXO0FBQ1gsa0NBQWtDO0FBQ2xDLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHdEQUF3RDtBQUN4RCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBLFFBQVEsSUFBcUM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHVHQUE2Qjs7QUFFOUM7QUFDQSxpQkFBaUIsdUdBQTZCOztBQUU5QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUU2RztBQUM3Rzs7Ozs7Ozs7Ozs7O0FDOWhFQSxVQUFVLG1CQUFPLENBQUMsNE5BQWlIO0FBQ25JLDBCQUEwQixtQkFBTyxDQUFDLHduQkFBdVc7O0FBRXpZOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSxJQUFJLElBQVU7QUFDZDtBQUNBLGtFQUFrRSxpQkFBaUIsY0FBYyxNQUFNLFlBQVksaUNBQWlDO0FBQ3BKLFVBQVUsZ0JBQWdCLGVBQWUsWUFBWSxpQ0FBaUM7QUFDdEYsVUFBVSxVQUFVLGVBQWU7QUFDbkM7O0FBRUE7QUFDQSxNQUFNLHduQkFBdVc7QUFDN1c7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyx3bkJBQXVXOztBQUVqWTs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7O0FBRUE7QUFFQTtBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsSUFBTUEsZUFBZSxHQUFHLENBQXhCLEMsQ0FBMkI7O0FBRTNCLFNBQVNDLFNBQVQsQ0FBbUJDLEtBQW5CLEVBQTBCO0FBQUEsTUFDaEJDLElBRGdCLEdBQ09ELEtBRFAsQ0FDaEJDLElBRGdCO0FBQUEsTUFDVkMsS0FEVSxHQUNPRixLQURQLENBQ1ZFLEtBRFU7QUFBQSxNQUNIQyxLQURHLEdBQ09ILEtBRFAsQ0FDSEcsS0FERztBQUV4QixzQkFBT0MsNENBQUssQ0FBQ0MsWUFBTixDQUFtQkosSUFBSSxDQUFDQyxLQUFELENBQXZCLEVBQWdDO0FBQ3JDQyxTQUFLLGtDQUNBQSxLQURBO0FBRUhHLFNBQUcsRUFBRUgsS0FBSyxDQUFDRyxHQUFOLEdBQVlSO0FBRmQ7QUFEZ0MsR0FBaEMsQ0FBUDtBQU1EOztBQUVELElBQU1TLG1CQUFtQixnQkFBR0gsNENBQUssQ0FBQ0ksYUFBTixDQUFvQixFQUFwQixDQUE1QjtBQUVBLElBQU1DLGdCQUFnQixnQkFBR0wsNENBQUssQ0FBQ00sVUFBTixTQUFpQixVQUFDVixLQUFELEVBQVFXLEdBQVIsRUFBZ0I7QUFBQTs7QUFDeEQsTUFBTUMsVUFBVSxHQUFHUiw0Q0FBSyxDQUFDUyxVQUFOLENBQWlCTixtQkFBakIsQ0FBbkI7QUFDQSxzQkFBTztBQUFLLE9BQUcsRUFBRUk7QUFBVixLQUFtQlgsS0FBbkIsR0FBOEJZLFVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBSHdCLGtDQUF6QjtNQUFNSCxnQjs7QUFLTixTQUFTSyxhQUFULENBQXVCYixJQUF2QixFQUE2QjtBQUFBOztBQUMzQixNQUFNVSxHQUFHLEdBQUdQLDRDQUFLLENBQUNXLE1BQU4sQ0FBYSxJQUFiLENBQVo7QUFDQVgsOENBQUssQ0FBQ1ksU0FBTixDQUFnQixZQUFNO0FBQ3BCLFFBQUlMLEdBQUcsQ0FBQ00sT0FBSixJQUFlLElBQW5CLEVBQXlCO0FBQ3ZCTixTQUFHLENBQUNNLE9BQUosQ0FBWUMsZUFBWixDQUE0QixDQUE1QixFQUErQixJQUEvQjtBQUNEO0FBQ0YsR0FKRCxFQUlHLENBQUNqQixJQUFELENBSkg7QUFLQSxTQUFPVSxHQUFQO0FBQ0QsQyxDQUVEOzs7SUFWU0csYTs7QUFXVCxJQUFNSyxnQkFBZ0IsZ0JBQUdmLDRDQUFLLENBQUNNLFVBQU4sV0FBaUIsU0FBU1MsZ0JBQVQsQ0FBMEJuQixLQUExQixFQUFpQ1csR0FBakMsRUFBc0M7QUFBQTs7QUFBQSxNQUN0RVMsUUFEc0UsR0FDL0NwQixLQUQrQyxDQUN0RW9CLFFBRHNFO0FBQUEsTUFDekRDLEtBRHlELDJKQUMvQ3JCLEtBRCtDOztBQUU5RSxNQUFNc0IsUUFBUSxHQUFHbEIsNENBQUssQ0FBQ21CLFFBQU4sQ0FBZUMsT0FBZixDQUF1QkosUUFBdkIsQ0FBakI7QUFDQSxNQUFNSyxLQUFLLEdBQUdDLHlFQUFRLEVBQXRCO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQywrRUFBYSxDQUFDSCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBQUQsRUFBNkI7QUFBRUMsU0FBSyxFQUFFO0FBQVQsR0FBN0IsQ0FBMUI7QUFDQSxNQUFNQyxTQUFTLEdBQUdWLFFBQVEsQ0FBQ1csTUFBM0I7QUFDQSxNQUFNQyxRQUFRLEdBQUdQLElBQUksR0FBRyxFQUFILEdBQVEsRUFBN0I7O0FBRUEsTUFBTVEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBQzlCLFFBQUksY0FBQWhDLDRDQUFLLENBQUNpQyxjQUFOLENBQXFCRCxLQUFyQixLQUErQkEsS0FBSyxDQUFDRSxJQUFOLEtBQWVDLHVFQUFsRCxFQUFpRTtBQUMvRCxhQUFPLEVBQVA7QUFDRDs7QUFFRCxXQUFPTCxRQUFQO0FBQ0QsR0FORDs7QUFRQSxNQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCLFFBQUlSLFNBQVMsR0FBRyxDQUFoQixFQUFtQjtBQUNqQixhQUFPLElBQUlFLFFBQVg7QUFDRDs7QUFDRCxXQUFPWixRQUFRLENBQUNtQixHQUFULENBQWFOLFlBQWIsRUFBMkJPLE1BQTNCLENBQWtDLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVVELENBQUMsR0FBR0MsQ0FBZDtBQUFBLEtBQWxDLEVBQW1ELENBQW5ELENBQVA7QUFDRCxHQUxEOztBQU9BLE1BQU1DLE9BQU8sR0FBRy9CLGFBQWEsQ0FBQ2tCLFNBQUQsQ0FBN0I7QUFFQSxzQkFDRTtBQUFLLE9BQUcsRUFBRXJCLEdBQVY7QUFBQSwyQkFDRSxxRUFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixXQUFLLEVBQUVVLEtBQXJDO0FBQUEsNkJBQ0UscUVBQUMsNkRBQUQ7QUFDRSxnQkFBUSxFQUFFQyxRQURaO0FBRUUsY0FBTSxFQUFFa0IsU0FBUyxLQUFLLElBQUkxQyxlQUY1QjtBQUdFLGFBQUssRUFBQyxNQUhSO0FBSUUsV0FBRyxFQUFFK0MsT0FKUDtBQUtFLHdCQUFnQixFQUFFcEMsZ0JBTHBCO0FBTUUsd0JBQWdCLEVBQUMsSUFObkI7QUFPRSxnQkFBUSxFQUFFLGtCQUFDUCxLQUFEO0FBQUEsaUJBQVdpQyxZQUFZLENBQUNiLFFBQVEsQ0FBQ3BCLEtBQUQsQ0FBVCxDQUF2QjtBQUFBLFNBUFo7QUFRRSxxQkFBYSxFQUFFLENBUmpCO0FBU0UsaUJBQVMsRUFBRThCLFNBVGI7QUFBQSxrQkFXR2pDO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtQkQsQ0E1Q3dCO0FBQUEsVUFHVDJCLGlFQUhTLEVBSVZFLHVFQUpVLEVBdUJQZCxhQXZCTztBQUFBLEdBQXpCO01BQU1LLGdCOztBQThDTixJQUFNMkIsU0FHTCxHQUFHLFNBSEVBLFNBR0YsT0FBd0U7QUFBQTs7QUFBQSx3QkFBckVDLEtBQXFFO0FBQUEsTUFBckVBLEtBQXFFLDJCQUE3RCxFQUE2RDtBQUFBLE1BQXpEQyxRQUF5RCxRQUF6REEsUUFBeUQ7QUFBQSxNQUEvQ0MsY0FBK0MsUUFBL0NBLGNBQStDO0FBQUEsTUFBL0JDLEtBQStCLFFBQS9CQSxLQUErQjtBQUFBLE1BQXhCQyxPQUF3QixRQUF4QkEsT0FBd0I7QUFBQSxNQUFabkQsS0FBWTs7QUFBQSxrQkFDdENvRCxzREFBUSxDQUFzQixFQUF0QixDQUQ4QjtBQUFBLE1BQ25FQyxVQURtRTtBQUFBLE1BQ3ZEQyxhQUR1RDs7QUFHMUUsTUFBTUMsYUFBaUYsR0FBRyxTQUFwRkEsYUFBb0YsQ0FDeEZDLEVBRHdGLEVBRXhGQyxDQUZ3RixFQUdyRjtBQUNISCxpQkFBYSxDQUFDRyxDQUFELENBQWI7QUFDRCxHQUxEOztBQU9BLE1BQU1DLGtCQUFzRixHQUMxRkMseURBQVcsQ0FDVCxVQUFDSCxFQUFELEVBQUtDLENBQUwsRUFBVztBQUNUVCxZQUFRLElBQ05BLFFBQVEsQ0FBQztBQUNQWSxZQUFNLEVBQUU7QUFDTjtBQUNBYixhQUFLLEVBQUVVO0FBRkQ7QUFERCxLQUFELENBRFY7QUFPRCxHQVRRLEVBVVQsQ0FBQ1QsUUFBRCxDQVZTLENBRGI7QUFjQSxNQUFNYSxhQUFhLEdBQUdiLFFBQVEsR0FBR1Usa0JBQUgsR0FBd0JILGFBQXREO0FBQ0EsTUFBTU8sVUFBVSxHQUFHZCxRQUFRLEdBQUdELEtBQUgsR0FBV00sVUFBdEM7QUFDQSxzQkFDRSxxRUFBQyxxRUFBRDtBQUNFLGFBQVMsRUFBRVUsMkRBQU0sQ0FBQ0M7QUFEcEIsS0FFTWhFLEtBRk47QUFHRSxNQUFFLEVBQUMsYUFITDtBQUlFLFNBQUssRUFBRThELFVBSlQ7QUFLRSxXQUFPLEVBQUVYLE9BTFg7QUFNRSxrQkFBYyxFQUFFRixjQU5sQjtBQU9FLFlBQVEsRUFBRVksYUFQWjtBQVFFLGNBQVUsRUFBRSxvQkFBQ2QsS0FBRCxFQUFRa0IsV0FBUjtBQUFBLGFBQ1ZsQixLQUFLLENBQUNOLEdBQU4sQ0FBVSxVQUFDeUIsTUFBRCxFQUFTaEUsS0FBVDtBQUFBLDRCQUNSLHFFQUFDLDhEQUFEO0FBRUUsaUJBQU8sRUFBQyxVQUZWLENBR0U7QUFIRjtBQUlFLGVBQUssRUFBRStDLGNBQWMsQ0FBQ2lCLE1BQUQsQ0FKdkI7QUFLRSxjQUFJLEVBQUM7QUFMUCxXQU1NRCxXQUFXLENBQUM7QUFBRS9ELGVBQUssRUFBTEE7QUFBRixTQUFELENBTmpCLG9CQUNpQkEsS0FEakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUTtBQUFBLE9BQVYsQ0FEVTtBQUFBLEtBUmQ7QUFvQkUsZUFBVyxFQUFFLHFCQUFDaUUsTUFBRDtBQUFBLDBCQUNYLHFFQUFDLG1EQUFELGtDQUNNQSxNQUROO0FBRUUsYUFBSyxFQUFFakIsS0FGVDtBQUdFLFlBQUksRUFBQyxNQUhQO0FBSUUsZUFBTyxFQUFDLFFBSlYsQ0FLRTs7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQXBCZjtBQTZCRSxtQkFBZSxNQTdCakI7QUE4QkUsb0JBQWdCLEVBQUUvQixnQkE5QnBCLENBK0JFOztBQS9CRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFtQ0QsQ0FoRUQ7O0lBQU0yQixTOztNQUFBQSxTO0FBa0VTLGtGQUFBc0Isa0RBQUksQ0FBQ3RCLFNBQUQsQ0FBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hMQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLFVBQVUsbUJBQU8sQ0FBQyw0TkFBaUg7QUFDbkksMEJBQTBCLG1CQUFPLENBQUMsaW9CQUEwVzs7QUFFNVk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQSxtQ0FBbUM7QUFDbkM7QUFDQSxzRUFBc0Usd0NBQXdDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0Esa0VBQWtFLGlCQUFpQixjQUFjLE1BQU0sWUFBWSxpQ0FBaUM7QUFDcEosVUFBVSxnQkFBZ0IsZUFBZSxZQUFZLGlDQUFpQztBQUN0RixVQUFVLFVBQVUsZUFBZTtBQUNuQzs7QUFFQTtBQUNBLE1BQU0saW9CQUEwVztBQUNoWDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGlvQkFBMFc7O0FBRXBZOztBQUVBO0FBQ0EsNEJBQTRCLFFBQVM7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsc0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUVBLElBQU11QixZQUFZLEdBQUdDLG1EQUFPLE1BQUM7QUFBQSxTQUFNLDZLQUFOO0FBQUEsQ0FBRDtBQUFBO0FBQUE7QUFBQSxrQ0FBYyw4RkFBZDtBQUFBO0FBQUEsc0VBQWMscUJBQWQ7QUFBQTtBQUFBLEVBQTVCO01BQU1ELFk7O0FBUU4sSUFBTUUsa0JBQXdDLEdBQUcsU0FBM0NBLGtCQUEyQyxPQU0zQztBQUFBLE1BTEpDLFFBS0ksUUFMSkEsUUFLSTtBQUFBLHlCQUpKQyxNQUlJO0FBQUEsTUFKSkEsTUFJSSw0QkFKSyxHQUlMO0FBQUEsdUJBSEpuQyxJQUdJO0FBQUEsTUFISkEsSUFHSSwwQkFIRyxNQUdIO0FBQUEsTUFGSlUsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFERGhELEtBQ0M7O0FBQ0osc0JBQ0UscUVBQUMsWUFBRCxrQ0FDTUEsS0FETjtBQUVFLFFBQUksRUFBRXNDLElBQUksS0FBSyxRQUFULEdBQW9CLEtBQXBCLEdBQTRCQSxJQUFJLEtBQUssVUFBVCxJQUF1QkEsSUFBSSxLQUFLLFFBQWhDLEdBQTJDLE1BQTNDLEdBQW9EQSxJQUZ4RjtBQUdFLFVBQU0sRUFBRUEsSUFBSSxLQUFLLFVBQVQsR0FBc0JtQyxNQUF0QixHQUErQixFQUh6QztBQUlFLFVBQU0sRUFBRW5DLElBQUksS0FBSyxRQUFULEdBQW9CLFdBQXBCLEdBQWtDb0MsU0FKNUM7QUFLRSxxQkFBaUIsRUFBRXBDLElBQUksS0FBSyxVQUw5QjtBQU1FLGVBQVcsRUFBRWtDLFFBTmY7QUFPRSxpQkFBYSxFQUFFLHVCQUFDRyxNQUFELEVBQVk7QUFDekIzQixjQUFRLENBQUM7QUFDUFksY0FBTSxFQUFFO0FBQ05iLGVBQUssRUFBRTRCLE1BQU0sQ0FBQzVCO0FBRFI7QUFERCxPQUFELENBQVI7QUFLRCxLQWJIO0FBY0UsbUJBQWU7QUFkakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBekJEOztNQUFNd0Isa0I7QUEyQk4sSUFBTUssc0JBQXNCLGdCQUFHUixrREFBSSxDQUFDRyxrQkFBRCxDQUFuQztNQUFNSyxzQjs7QUFFTixJQUFNQyxTQUFnRCxHQUFHLFNBQW5EQSxTQUFtRCxDQUFDN0UsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQzlCb0Qsc0RBQVEsQ0FBNEIsRUFBNUIsQ0FEc0I7QUFBQSxNQUMzREMsVUFEMkQ7QUFBQSxNQUMvQ0MsYUFEK0M7O0FBR2xFLE1BQU1DLGFBQW1ELEdBQUcsU0FBdERBLGFBQXNELENBQUNFLENBQUQsRUFBTztBQUNqRUgsaUJBQWEsQ0FBQ0csQ0FBQyxDQUFDRyxNQUFGLENBQVNiLEtBQVYsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsTUFBTWMsYUFBbUQsR0FBRzdELEtBQUssQ0FBQ2dELFFBQU4sSUFBa0JPLGFBQTlFO0FBQ0EsTUFBTU8sVUFBVSxHQUFHOUQsS0FBSyxDQUFDZ0QsUUFBTixHQUFpQmhELEtBQUssQ0FBQytDLEtBQXZCLEdBQStCTSxVQUFsRDtBQUVBLHNCQUNFLHFFQUFDLHVFQUFEO0FBQWdCLGVBQVcsTUFBM0I7QUFBQSwyQkFDRSxxRUFBQyxtRUFBRDtBQUNFLGVBQVMsRUFBRSxDQUFDVSw2REFBTSxDQUFDZSxTQUFSLEVBQW1CLENBQUM5RSxLQUFLLENBQUNrRCxLQUFQLEdBQWVhLDZEQUFNLENBQUNnQixPQUF0QixHQUFnQyxFQUFuRCxFQUF1REMsSUFBdkQsQ0FBNEQsR0FBNUQsQ0FEYjtBQUVFLFVBQUksRUFBQyxPQUZQO0FBR0UsY0FBUSxFQUFFbkIsYUFIWjtBQUlFLFdBQUssRUFBRUMsVUFKVDtBQUtFLGdCQUFVLEVBQUU7QUFDVm1CLHdCQUFnQixFQUFFLElBRFI7QUFFVkMsc0JBQWMsRUFDWmxGLEtBQUssQ0FBQ3NDLElBQU4sS0FBZSxVQUFmLElBQTZCdEMsS0FBSyxDQUFDc0MsSUFBTixLQUFlLFFBQTVDLElBQXdEdEMsS0FBSyxDQUFDc0MsSUFBTixLQUFlLFFBQXZFLEdBQ0tzQyxzQkFETCxHQUVJRjtBQUxJLE9BTGQ7QUFZRSxnQkFBVSxFQUFDLEdBWmI7QUFhRSxhQUFPLEVBQUUsR0FiWDtBQWNFLGFBQU8sRUFBQyxRQWRWO0FBZUUsZUFBUztBQWZYLE9BZ0JNMUUsS0FoQk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNCRCxDQWhDRDs7R0FBTTZFLFM7O01BQUFBLFM7QUFrQ1Msa0ZBQUFULGtEQUFJLENBQUNTLFNBQUQsQ0FBbkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCBDYW5jZWxJY29uIGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9DYW5jZWwnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgZW1waGFzaXplLCBmYWRlIH0gZnJvbSAnLi4vc3R5bGVzL2NvbG9yTWFuaXB1bGF0b3InO1xuaW1wb3J0IHVzZUZvcmtSZWYgZnJvbSAnLi4vdXRpbHMvdXNlRm9ya1JlZic7XG5pbXBvcnQgdW5zdXBwb3J0ZWRQcm9wIGZyb20gJy4uL3V0aWxzL3Vuc3VwcG9ydGVkUHJvcCc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJy4uL0J1dHRvbkJhc2UnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIGJhY2tncm91bmRDb2xvciA9IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUuZ3JleVszMDBdIDogdGhlbWUucGFsZXR0ZS5ncmV5WzcwMF07XG4gIHZhciBkZWxldGVJY29uQ29sb3IgPSBmYWRlKHRoZW1lLnBhbGV0dGUudGV4dC5wcmltYXJ5LCAwLjI2KTtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICAgIHJvb3Q6IHtcbiAgICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseSxcbiAgICAgIGZvbnRTaXplOiB0aGVtZS50eXBvZ3JhcGh5LnB4VG9SZW0oMTMpLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgaGVpZ2h0OiAzMixcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdldENvbnRyYXN0VGV4dChiYWNrZ3JvdW5kQ29sb3IpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBib3JkZXJSYWRpdXM6IDMyIC8gMixcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsnYmFja2dyb3VuZC1jb2xvcicsICdib3gtc2hhZG93J10pLFxuICAgICAgLy8gbGFiZWwgd2lsbCBpbmhlcml0IHRoaXMgZnJvbSByb290LCB0aGVuIGBjbGlja2FibGVgIGNsYXNzIG92ZXJyaWRlcyB0aGlzIGZvciBib3RoXG4gICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgIC8vIFdlIGRpc2FibGUgdGhlIGZvY3VzIHJpbmcgZm9yIG1vdXNlLCB0b3VjaCBhbmQga2V5Ym9hcmQgdXNlcnMuXG4gICAgICBvdXRsaW5lOiAwLFxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgLy8gUmVtb3ZlIGBidXR0b25gIGJvcmRlclxuICAgICAgcGFkZGluZzogMCxcbiAgICAgIC8vIFJlbW92ZSBgYnV0dG9uYCBwYWRkaW5nXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIG9wYWNpdHk6IDAuNSxcbiAgICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgICB9LFxuICAgICAgJyYgJGF2YXRhcic6IHtcbiAgICAgICAgbWFyZ2luTGVmdDogNSxcbiAgICAgICAgbWFyZ2luUmlnaHQ6IC02LFxuICAgICAgICB3aWR0aDogMjQsXG4gICAgICAgIGhlaWdodDogMjQsXG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbNzAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVszMDBdLFxuICAgICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDEyKVxuICAgICAgfSxcbiAgICAgICcmICRhdmF0YXJDb2xvclByaW1hcnknOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5kYXJrXG4gICAgICB9LFxuICAgICAgJyYgJGF2YXRhckNvbG9yU2Vjb25kYXJ5Jzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmRhcmtcbiAgICAgIH0sXG4gICAgICAnJiAkYXZhdGFyU21hbGwnOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IDQsXG4gICAgICAgIG1hcmdpblJpZ2h0OiAtNCxcbiAgICAgICAgd2lkdGg6IDE4LFxuICAgICAgICBoZWlnaHQ6IDE4LFxuICAgICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDEwKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBzaXplPVwic21hbGxcImAuICovXG4gICAgc2l6ZVNtYWxsOiB7XG4gICAgICBoZWlnaHQ6IDI0XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbG9yPVwicHJpbWFyeVwiYC4gKi9cbiAgICBjb2xvclByaW1hcnk6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBjb2xvclNlY29uZGFyeToge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dFxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG9uQ2xpY2tgIGlzIGRlZmluZWQgb3IgYGNsaWNrYWJsZT17dHJ1ZX1gLiAqL1xuICAgIGNsaWNrYWJsZToge1xuICAgICAgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgICcmOmhvdmVyLCAmOmZvY3VzJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGVtcGhhc2l6ZShiYWNrZ3JvdW5kQ29sb3IsIDAuMDgpXG4gICAgICB9LFxuICAgICAgJyY6YWN0aXZlJzoge1xuICAgICAgICBib3hTaGFkb3c6IHRoZW1lLnNoYWRvd3NbMV1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgb25DbGlja2AgYW5kIGBjb2xvcj1cInByaW1hcnlcImAgaXMgZGVmaW5lZCBvciBgY2xpY2thYmxlPXt0cnVlfWAuICovXG4gICAgY2xpY2thYmxlQ29sb3JQcmltYXJ5OiB7XG4gICAgICAnJjpob3ZlciwgJjpmb2N1cyc6IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBlbXBoYXNpemUodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sIDAuMDgpXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG9uQ2xpY2tgIGFuZCBgY29sb3I9XCJzZWNvbmRhcnlcImAgaXMgZGVmaW5lZCBvciBgY2xpY2thYmxlPXt0cnVlfWAuICovXG4gICAgY2xpY2thYmxlQ29sb3JTZWNvbmRhcnk6IHtcbiAgICAgICcmOmhvdmVyLCAmOmZvY3VzJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGVtcGhhc2l6ZSh0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLCAwLjA4KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBvbkRlbGV0ZWAgaXMgZGVmaW5lZC4gKi9cbiAgICBkZWxldGFibGU6IHtcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGVtcGhhc2l6ZShiYWNrZ3JvdW5kQ29sb3IsIDAuMDgpXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG9uRGVsZXRlYCBhbmQgYGNvbG9yPVwicHJpbWFyeVwiYCBpcyBkZWZpbmVkLiAqL1xuICAgIGRlbGV0YWJsZUNvbG9yUHJpbWFyeToge1xuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZW1waGFzaXplKHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLCAwLjIpXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG9uRGVsZXRlYCBhbmQgYGNvbG9yPVwic2Vjb25kYXJ5XCJgIGlzIGRlZmluZWQuICovXG4gICAgZGVsZXRhYmxlQ29sb3JTZWNvbmRhcnk6IHtcbiAgICAgICcmOmZvY3VzJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGVtcGhhc2l6ZSh0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLCAwLjIpXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYHZhcmlhbnQ9XCJvdXRsaW5lZFwiYC4gKi9cbiAgICBvdXRsaW5lZDoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS50eXBlID09PSAnbGlnaHQnID8gJ3JnYmEoMCwgMCwgMCwgMC4yMyknIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yMyknKSxcbiAgICAgICckY2xpY2thYmxlJjpob3ZlciwgJGNsaWNrYWJsZSY6Zm9jdXMsICRkZWxldGFibGUmOmZvY3VzJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksIHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyT3BhY2l0eSlcbiAgICAgIH0sXG4gICAgICAnJiAkYXZhdGFyJzoge1xuICAgICAgICBtYXJnaW5MZWZ0OiA0XG4gICAgICB9LFxuICAgICAgJyYgJGF2YXRhclNtYWxsJzoge1xuICAgICAgICBtYXJnaW5MZWZ0OiAyXG4gICAgICB9LFxuICAgICAgJyYgJGljb24nOiB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IDRcbiAgICAgIH0sXG4gICAgICAnJiAkaWNvblNtYWxsJzoge1xuICAgICAgICBtYXJnaW5MZWZ0OiAyXG4gICAgICB9LFxuICAgICAgJyYgJGRlbGV0ZUljb24nOiB7XG4gICAgICAgIG1hcmdpblJpZ2h0OiA1XG4gICAgICB9LFxuICAgICAgJyYgJGRlbGV0ZUljb25TbWFsbCc6IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IDNcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgdmFyaWFudD1cIm91dGxpbmVkXCJgIGFuZCBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIG91dGxpbmVkUHJpbWFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxuICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCBcIi5jb25jYXQodGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4pLFxuICAgICAgJyRjbGlja2FibGUmOmhvdmVyLCAkY2xpY2thYmxlJjpmb2N1cywgJGRlbGV0YWJsZSY6Zm9jdXMnOiB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXJPcGFjaXR5KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGB2YXJpYW50PVwib3V0bGluZWRcImAgYW5kIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBvdXRsaW5lZFNlY29uZGFyeToge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIFwiLmNvbmNhdCh0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluKSxcbiAgICAgICckY2xpY2thYmxlJjpob3ZlciwgJGNsaWNrYWJsZSY6Zm9jdXMsICRkZWxldGFibGUmOmZvY3VzJzoge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbiwgdGhlbWUucGFsZXR0ZS5hY3Rpb24uaG92ZXJPcGFjaXR5KVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gVE9ETyB2NTogcmVtb3ZlXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGF2YXRhcmAgZWxlbWVudC4gKi9cbiAgICBhdmF0YXI6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBhdmF0YXJgIGVsZW1lbnQgaWYgYHNpemU9XCJzbWFsbFwiYC4gKi9cbiAgICBhdmF0YXJTbWFsbDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGF2YXRhcmAgZWxlbWVudCBpZiBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIGF2YXRhckNvbG9yUHJpbWFyeToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGF2YXRhcmAgZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAuICovXG4gICAgYXZhdGFyQ29sb3JTZWNvbmRhcnk6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpY29uYCBlbGVtZW50LiAqL1xuICAgIGljb246IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnR5cGUgPT09ICdsaWdodCcgPyB0aGVtZS5wYWxldHRlLmdyZXlbNzAwXSA6IHRoZW1lLnBhbGV0dGUuZ3JleVszMDBdLFxuICAgICAgbWFyZ2luTGVmdDogNSxcbiAgICAgIG1hcmdpblJpZ2h0OiAtNlxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGljb25gIGVsZW1lbnQgaWYgYHNpemU9XCJzbWFsbFwiYC4gKi9cbiAgICBpY29uU21hbGw6IHtcbiAgICAgIHdpZHRoOiAxOCxcbiAgICAgIGhlaWdodDogMTgsXG4gICAgICBtYXJnaW5MZWZ0OiA0LFxuICAgICAgbWFyZ2luUmlnaHQ6IC00XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaWNvbmAgZWxlbWVudCBpZiBgY29sb3I9XCJwcmltYXJ5XCJgLiAqL1xuICAgIGljb25Db2xvclByaW1hcnk6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBpY29uYCBlbGVtZW50IGlmIGBjb2xvcj1cInNlY29uZGFyeVwiYC4gKi9cbiAgICBpY29uQ29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGxhYmVsIGBzcGFuYCBlbGVtZW50LiAqL1xuICAgIGxhYmVsOiB7XG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICBwYWRkaW5nTGVmdDogMTIsXG4gICAgICBwYWRkaW5nUmlnaHQ6IDEyLFxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGxhYmVsIGBzcGFuYCBlbGVtZW50IGlmIGBzaXplPVwic21hbGxcImAuICovXG4gICAgbGFiZWxTbWFsbDoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDgsXG4gICAgICBwYWRkaW5nUmlnaHQ6IDhcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBkZWxldGVJY29uYCBlbGVtZW50LiAqL1xuICAgIGRlbGV0ZUljb246IHtcbiAgICAgIFdlYmtpdFRhcEhpZ2hsaWdodENvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgY29sb3I6IGRlbGV0ZUljb25Db2xvcixcbiAgICAgIGhlaWdodDogMjIsXG4gICAgICB3aWR0aDogMjIsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcbiAgICAgIG1hcmdpbjogJzAgNXB4IDAgLTZweCcsXG4gICAgICAnJjpob3Zlcic6IHtcbiAgICAgICAgY29sb3I6IGZhZGUoZGVsZXRlSWNvbkNvbG9yLCAwLjQpXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgZGVsZXRlSWNvbmAgZWxlbWVudCBpZiBgc2l6ZT1cInNtYWxsXCJgLiAqL1xuICAgIGRlbGV0ZUljb25TbWFsbDoge1xuICAgICAgaGVpZ2h0OiAxNixcbiAgICAgIHdpZHRoOiAxNixcbiAgICAgIG1hcmdpblJpZ2h0OiA0LFxuICAgICAgbWFyZ2luTGVmdDogLTRcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGRlbGV0ZUljb24gZWxlbWVudCBpZiBgY29sb3I9XCJwcmltYXJ5XCJgIGFuZCBgdmFyaWFudD1cImRlZmF1bHRcImAuICovXG4gICAgZGVsZXRlSWNvbkNvbG9yUHJpbWFyeToge1xuICAgICAgY29sb3I6IGZhZGUodGhlbWUucGFsZXR0ZS5wcmltYXJ5LmNvbnRyYXN0VGV4dCwgMC43KSxcbiAgICAgICcmOmhvdmVyLCAmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5jb250cmFzdFRleHRcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGRlbGV0ZUljb24gZWxlbWVudCBpZiBgY29sb3I9XCJzZWNvbmRhcnlcImAgYW5kIGB2YXJpYW50PVwiZGVmYXVsdFwiYC4gKi9cbiAgICBkZWxldGVJY29uQ29sb3JTZWNvbmRhcnk6IHtcbiAgICAgIGNvbG9yOiBmYWRlKHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dCwgMC43KSxcbiAgICAgICcmOmhvdmVyLCAmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5LmNvbnRyYXN0VGV4dFxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgZGVsZXRlSWNvbiBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImAgYW5kIGB2YXJpYW50PVwib3V0bGluZWRcImAuICovXG4gICAgZGVsZXRlSWNvbk91dGxpbmVkQ29sb3JQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbiwgMC43KSxcbiAgICAgICcmOmhvdmVyLCAmOmFjdGl2ZSc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBkZWxldGVJY29uIGVsZW1lbnQgaWYgYGNvbG9yPVwic2Vjb25kYXJ5XCJgIGFuZCBgdmFyaWFudD1cIm91dGxpbmVkXCJgLiAqL1xuICAgIGRlbGV0ZUljb25PdXRsaW5lZENvbG9yU2Vjb25kYXJ5OiB7XG4gICAgICBjb2xvcjogZmFkZSh0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLCAwLjcpLFxuICAgICAgJyY6aG92ZXIsICY6YWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpblxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmZ1bmN0aW9uIGlzRGVsZXRlS2V5Ym9hcmRFdmVudChrZXlib2FyZEV2ZW50KSB7XG4gIHJldHVybiBrZXlib2FyZEV2ZW50LmtleSA9PT0gJ0JhY2tzcGFjZScgfHwga2V5Ym9hcmRFdmVudC5rZXkgPT09ICdEZWxldGUnO1xufVxuLyoqXG4gKiBDaGlwcyByZXByZXNlbnQgY29tcGxleCBlbnRpdGllcyBpbiBzbWFsbCBibG9ja3MsIHN1Y2ggYXMgYSBjb250YWN0LlxuICovXG5cblxudmFyIENoaXAgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBDaGlwKHByb3BzLCByZWYpIHtcbiAgdmFyIGF2YXRhclByb3AgPSBwcm9wcy5hdmF0YXIsXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNsaWNrYWJsZVByb3AgPSBwcm9wcy5jbGlja2FibGUsXG4gICAgICBfcHJvcHMkY29sb3IgPSBwcm9wcy5jb2xvcixcbiAgICAgIGNvbG9yID0gX3Byb3BzJGNvbG9yID09PSB2b2lkIDAgPyAnZGVmYXVsdCcgOiBfcHJvcHMkY29sb3IsXG4gICAgICBDb21wb25lbnRQcm9wID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgZGVsZXRlSWNvblByb3AgPSBwcm9wcy5kZWxldGVJY29uLFxuICAgICAgX3Byb3BzJGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZCA9IF9wcm9wcyRkaXNhYmxlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZWQsXG4gICAgICBpY29uUHJvcCA9IHByb3BzLmljb24sXG4gICAgICBsYWJlbCA9IHByb3BzLmxhYmVsLFxuICAgICAgb25DbGljayA9IHByb3BzLm9uQ2xpY2ssXG4gICAgICBvbkRlbGV0ZSA9IHByb3BzLm9uRGVsZXRlLFxuICAgICAgb25LZXlEb3duID0gcHJvcHMub25LZXlEb3duLFxuICAgICAgb25LZXlVcCA9IHByb3BzLm9uS2V5VXAsXG4gICAgICBfcHJvcHMkc2l6ZSA9IHByb3BzLnNpemUsXG4gICAgICBzaXplID0gX3Byb3BzJHNpemUgPT09IHZvaWQgMCA/ICdtZWRpdW0nIDogX3Byb3BzJHNpemUsXG4gICAgICBfcHJvcHMkdmFyaWFudCA9IHByb3BzLnZhcmlhbnQsXG4gICAgICB2YXJpYW50ID0gX3Byb3BzJHZhcmlhbnQgPT09IHZvaWQgMCA/ICdkZWZhdWx0JyA6IF9wcm9wcyR2YXJpYW50LFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImF2YXRhclwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjbGlja2FibGVcIiwgXCJjb2xvclwiLCBcImNvbXBvbmVudFwiLCBcImRlbGV0ZUljb25cIiwgXCJkaXNhYmxlZFwiLCBcImljb25cIiwgXCJsYWJlbFwiLCBcIm9uQ2xpY2tcIiwgXCJvbkRlbGV0ZVwiLCBcIm9uS2V5RG93blwiLCBcIm9uS2V5VXBcIiwgXCJzaXplXCIsIFwidmFyaWFudFwiXSk7XG5cbiAgdmFyIGNoaXBSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIHZhciBoYW5kbGVSZWYgPSB1c2VGb3JrUmVmKGNoaXBSZWYsIHJlZik7XG5cbiAgdmFyIGhhbmRsZURlbGV0ZUljb25DbGljayA9IGZ1bmN0aW9uIGhhbmRsZURlbGV0ZUljb25DbGljayhldmVudCkge1xuICAgIC8vIFN0b3AgdGhlIGV2ZW50IGZyb20gYnViYmxpbmcgdXAgdG8gdGhlIGBDaGlwYFxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKG9uRGVsZXRlKSB7XG4gICAgICBvbkRlbGV0ZShldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xuICAgIC8vIElnbm9yZSBldmVudHMgZnJvbSBjaGlsZHJlbiBvZiBgQ2hpcGAuXG4gICAgaWYgKGV2ZW50LmN1cnJlbnRUYXJnZXQgPT09IGV2ZW50LnRhcmdldCAmJiBpc0RlbGV0ZUtleWJvYXJkRXZlbnQoZXZlbnQpKSB7XG4gICAgICAvLyB3aWxsIGJlIGhhbmRsZWQgaW4ga2V5VXAsIG90aGVyd2lzZSBzb21lIGJyb3dzZXJzXG4gICAgICAvLyBtaWdodCBpbml0IG5hdmlnYXRpb25cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKG9uS2V5RG93bikge1xuICAgICAgb25LZXlEb3duKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZUtleVVwID0gZnVuY3Rpb24gaGFuZGxlS2V5VXAoZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUgZXZlbnRzIGZyb20gY2hpbGRyZW4gb2YgYENoaXBgLlxuICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0ID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgIGlmIChvbkRlbGV0ZSAmJiBpc0RlbGV0ZUtleWJvYXJkRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgIG9uRGVsZXRlKGV2ZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyAmJiBjaGlwUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY2hpcFJlZi5jdXJyZW50LmJsdXIoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob25LZXlVcCkge1xuICAgICAgb25LZXlVcChldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjbGlja2FibGUgPSBjbGlja2FibGVQcm9wICE9PSBmYWxzZSAmJiBvbkNsaWNrID8gdHJ1ZSA6IGNsaWNrYWJsZVByb3A7XG4gIHZhciBzbWFsbCA9IHNpemUgPT09ICdzbWFsbCc7XG4gIHZhciBDb21wb25lbnQgPSBDb21wb25lbnRQcm9wIHx8IChjbGlja2FibGUgPyBCdXR0b25CYXNlIDogJ2RpdicpO1xuICB2YXIgbW9yZVByb3BzID0gQ29tcG9uZW50ID09PSBCdXR0b25CYXNlID8ge1xuICAgIGNvbXBvbmVudDogJ2RpdidcbiAgfSA6IHt9O1xuICB2YXIgZGVsZXRlSWNvbiA9IG51bGw7XG5cbiAgaWYgKG9uRGVsZXRlKSB7XG4gICAgdmFyIGN1c3RvbUNsYXNzZXMgPSBjbHN4KGNvbG9yICE9PSAnZGVmYXVsdCcgJiYgKHZhcmlhbnQgPT09IFwiZGVmYXVsdFwiID8gY2xhc3Nlc1tcImRlbGV0ZUljb25Db2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldIDogY2xhc3Nlc1tcImRlbGV0ZUljb25PdXRsaW5lZENvbG9yXCIuY29uY2F0KGNhcGl0YWxpemUoY29sb3IpKV0pLCBzbWFsbCAmJiBjbGFzc2VzLmRlbGV0ZUljb25TbWFsbCk7XG4gICAgZGVsZXRlSWNvbiA9IGRlbGV0ZUljb25Qcm9wICYmIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChkZWxldGVJY29uUHJvcCkgPyAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGRlbGV0ZUljb25Qcm9wLCB7XG4gICAgICBjbGFzc05hbWU6IGNsc3goZGVsZXRlSWNvblByb3AucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzLmRlbGV0ZUljb24sIGN1c3RvbUNsYXNzZXMpLFxuICAgICAgb25DbGljazogaGFuZGxlRGVsZXRlSWNvbkNsaWNrXG4gICAgfSkgOiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDYW5jZWxJY29uLCB7XG4gICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5kZWxldGVJY29uLCBjdXN0b21DbGFzc2VzKSxcbiAgICAgIG9uQ2xpY2s6IGhhbmRsZURlbGV0ZUljb25DbGlja1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGF2YXRhciA9IG51bGw7XG5cbiAgaWYgKGF2YXRhclByb3AgJiYgLyojX19QVVJFX18qL1JlYWN0LmlzVmFsaWRFbGVtZW50KGF2YXRhclByb3ApKSB7XG4gICAgYXZhdGFyID0gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChhdmF0YXJQcm9wLCB7XG4gICAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5hdmF0YXIsIGF2YXRhclByb3AucHJvcHMuY2xhc3NOYW1lLCBzbWFsbCAmJiBjbGFzc2VzLmF2YXRhclNtYWxsLCBjb2xvciAhPT0gJ2RlZmF1bHQnICYmIGNsYXNzZXNbXCJhdmF0YXJDb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldKVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIGljb24gPSBudWxsO1xuXG4gIGlmIChpY29uUHJvcCAmJiAvKiNfX1BVUkVfXyovUmVhY3QuaXNWYWxpZEVsZW1lbnQoaWNvblByb3ApKSB7XG4gICAgaWNvbiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoaWNvblByb3AsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmljb24sIGljb25Qcm9wLnByb3BzLmNsYXNzTmFtZSwgc21hbGwgJiYgY2xhc3Nlcy5pY29uU21hbGwsIGNvbG9yICE9PSAnZGVmYXVsdCcgJiYgY2xhc3Nlc1tcImljb25Db2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldKVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoYXZhdGFyICYmIGljb24pIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiBUaGUgQ2hpcCBjb21wb25lbnQgY2FuIG5vdCBoYW5kbGUgdGhlIGF2YXRhciAnICsgJ2FuZCB0aGUgaWNvbiBwcm9wIGF0IHRoZSBzYW1lIHRpbWUuIFBpY2sgb25lLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICByb2xlOiBjbGlja2FibGUgfHwgb25EZWxldGUgPyAnYnV0dG9uJyA6IHVuZGVmaW5lZCxcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIGNvbG9yICE9PSAnZGVmYXVsdCcgJiYgW2NsYXNzZXNbXCJjb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldLCBjbGlja2FibGUgJiYgY2xhc3Nlc1tcImNsaWNrYWJsZUNvbG9yXCIuY29uY2F0KGNhcGl0YWxpemUoY29sb3IpKV0sIG9uRGVsZXRlICYmIGNsYXNzZXNbXCJkZWxldGFibGVDb2xvclwiLmNvbmNhdChjYXBpdGFsaXplKGNvbG9yKSldXSwgdmFyaWFudCAhPT0gXCJkZWZhdWx0XCIgJiYgW2NsYXNzZXMub3V0bGluZWQsIHtcbiAgICAgICdwcmltYXJ5JzogY2xhc3Nlcy5vdXRsaW5lZFByaW1hcnksXG4gICAgICAnc2Vjb25kYXJ5JzogY2xhc3Nlcy5vdXRsaW5lZFNlY29uZGFyeVxuICAgIH1bY29sb3JdXSwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCwgc21hbGwgJiYgY2xhc3Nlcy5zaXplU21hbGwsIGNsaWNrYWJsZSAmJiBjbGFzc2VzLmNsaWNrYWJsZSwgb25EZWxldGUgJiYgY2xhc3Nlcy5kZWxldGFibGUpLFxuICAgIFwiYXJpYS1kaXNhYmxlZFwiOiBkaXNhYmxlZCA/IHRydWUgOiB1bmRlZmluZWQsXG4gICAgdGFiSW5kZXg6IGNsaWNrYWJsZSB8fCBvbkRlbGV0ZSA/IDAgOiB1bmRlZmluZWQsXG4gICAgb25DbGljazogb25DbGljayxcbiAgICBvbktleURvd246IGhhbmRsZUtleURvd24sXG4gICAgb25LZXlVcDogaGFuZGxlS2V5VXAsXG4gICAgcmVmOiBoYW5kbGVSZWZcbiAgfSwgbW9yZVByb3BzLCBvdGhlciksIGF2YXRhciB8fCBpY29uLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmxhYmVsLCBzbWFsbCAmJiBjbGFzc2VzLmxhYmVsU21hbGwpXG4gIH0sIGxhYmVsKSwgZGVsZXRlSWNvbik7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENoaXAucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQXZhdGFyIGVsZW1lbnQuXG4gICAqL1xuICBhdmF0YXI6IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaXNuJ3Qgc3VwcG9ydGVkLlxuICAgKiBVc2UgdGhlIGBjb21wb25lbnRgIHByb3AgaWYgeW91IG5lZWQgdG8gY2hhbmdlIHRoZSBjaGlsZHJlbiBzdHJ1Y3R1cmUuXG4gICAqL1xuICBjaGlsZHJlbjogdW5zdXBwb3J0ZWRQcm9wLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgY2hpcCB3aWxsIGFwcGVhciBjbGlja2FibGUsIGFuZCB3aWxsIHJhaXNlIHdoZW4gcHJlc3NlZCxcbiAgICogZXZlbiBpZiB0aGUgb25DbGljayBwcm9wIGlzIG5vdCBkZWZpbmVkLlxuICAgKiBJZiBmYWxzZSwgdGhlIGNoaXAgd2lsbCBub3QgYmUgY2xpY2thYmxlLCBldmVuIGlmIG9uQ2xpY2sgcHJvcCBpcyBkZWZpbmVkLlxuICAgKiBUaGlzIGNhbiBiZSB1c2VkLCBmb3IgZXhhbXBsZSxcbiAgICogYWxvbmcgd2l0aCB0aGUgY29tcG9uZW50IHByb3AgdG8gaW5kaWNhdGUgYW4gYW5jaG9yIENoaXAgaXMgY2xpY2thYmxlLlxuICAgKi9cbiAgY2xpY2thYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGNvbG9yIG9mIHRoZSBjb21wb25lbnQuIEl0IHN1cHBvcnRzIHRob3NlIHRoZW1lIGNvbG9ycyB0aGF0IG1ha2Ugc2Vuc2UgZm9yIHRoaXMgY29tcG9uZW50LlxuICAgKi9cbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbJ2RlZmF1bHQnLCAncHJpbWFyeScsICdzZWNvbmRhcnknXSksXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgZGVmYXVsdCBkZWxldGUgaWNvbiBlbGVtZW50LiBTaG93biBvbmx5IGlmIGBvbkRlbGV0ZWAgaXMgc2V0LlxuICAgKi9cbiAgZGVsZXRlSWNvbjogUHJvcFR5cGVzLmVsZW1lbnQsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNoaXAgc2hvdWxkIGJlIGRpc3BsYXllZCBpbiBhIGRpc2FibGVkIHN0YXRlLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJY29uIGVsZW1lbnQuXG4gICAqL1xuICBpY29uOiBQcm9wVHlwZXMuZWxlbWVudCxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGxhYmVsLlxuICAgKi9cbiAgbGFiZWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gZmlyZWQgd2hlbiB0aGUgZGVsZXRlIGljb24gaXMgY2xpY2tlZC5cbiAgICogSWYgc2V0LCB0aGUgZGVsZXRlIGljb24gd2lsbCBiZSBzaG93bi5cbiAgICovXG4gIG9uRGVsZXRlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25LZXlEb3duOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25LZXlVcDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBjaGlwLlxuICAgKi9cbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnbWVkaXVtJywgJ3NtYWxsJ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgdmFyaWFudCB0byB1c2UuXG4gICAqL1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ291dGxpbmVkJ10pXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUNoaXAnXG59KShDaGlwKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DaGlwJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgY2FwaXRhbGl6ZSBmcm9tICcuLi91dGlscy9jYXBpdGFsaXplJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIGxpbmVIZWlnaHQ6ICc0OHB4JyxcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICBmb250RmFtaWx5OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRGYW1pbHksXG4gICAgICBmb250V2VpZ2h0OiB0aGVtZS50eXBvZ3JhcGh5LmZvbnRXZWlnaHRNZWRpdW0sXG4gICAgICBmb250U2l6ZTogdGhlbWUudHlwb2dyYXBoeS5weFRvUmVtKDE0KVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBjb2xvcj1cInByaW1hcnlcImAuICovXG4gICAgY29sb3JQcmltYXJ5OiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29sb3I9XCJpbmhlcml0XCJgLiAqL1xuICAgIGNvbG9ySW5oZXJpdDoge1xuICAgICAgY29sb3I6ICdpbmhlcml0J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW5uZXIgYGNvbXBvbmVudGAgZWxlbWVudCBpZiBgZGlzYWJsZUd1dHRlcnM9e2ZhbHNlfWAuICovXG4gICAgZ3V0dGVyczoge1xuICAgICAgcGFkZGluZ0xlZnQ6IDE2LFxuICAgICAgcGFkZGluZ1JpZ2h0OiAxNlxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBpbnNldD17dHJ1ZX1gLiAqL1xuICAgIGluc2V0OiB7XG4gICAgICBwYWRkaW5nTGVmdDogNzJcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZVN0aWNreT17ZmFsc2V9YC4gKi9cbiAgICBzdGlja3k6IHtcbiAgICAgIHBvc2l0aW9uOiAnc3RpY2t5JyxcbiAgICAgIHRvcDogMCxcbiAgICAgIHpJbmRleDogMSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ2luaGVyaXQnXG4gICAgfVxuICB9O1xufTtcbnZhciBMaXN0U3ViaGVhZGVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gTGlzdFN1YmhlYWRlcihwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgY29sb3IgPSBfcHJvcHMkY29sb3IgPT09IHZvaWQgMCA/ICdkZWZhdWx0JyA6IF9wcm9wcyRjb2xvcixcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnbGknIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlR3V0dGVycyA9IHByb3BzLmRpc2FibGVHdXR0ZXJzLFxuICAgICAgZGlzYWJsZUd1dHRlcnMgPSBfcHJvcHMkZGlzYWJsZUd1dHRlcnMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVHdXR0ZXJzLFxuICAgICAgX3Byb3BzJGRpc2FibGVTdGlja3kgPSBwcm9wcy5kaXNhYmxlU3RpY2t5LFxuICAgICAgZGlzYWJsZVN0aWNreSA9IF9wcm9wcyRkaXNhYmxlU3RpY2t5ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlU3RpY2t5LFxuICAgICAgX3Byb3BzJGluc2V0ID0gcHJvcHMuaW5zZXQsXG4gICAgICBpbnNldCA9IF9wcm9wcyRpbnNldCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaW5zZXQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbG9yXCIsIFwiY29tcG9uZW50XCIsIFwiZGlzYWJsZUd1dHRlcnNcIiwgXCJkaXNhYmxlU3RpY2t5XCIsIFwiaW5zZXRcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIGNvbG9yICE9PSAnZGVmYXVsdCcgJiYgY2xhc3Nlc1tcImNvbG9yXCIuY29uY2F0KGNhcGl0YWxpemUoY29sb3IpKV0sIGluc2V0ICYmIGNsYXNzZXMuaW5zZXQsICFkaXNhYmxlU3RpY2t5ICYmIGNsYXNzZXMuc3RpY2t5LCAhZGlzYWJsZUd1dHRlcnMgJiYgY2xhc3Nlcy5ndXR0ZXJzKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBMaXN0U3ViaGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb2xvciBvZiB0aGUgY29tcG9uZW50LiBJdCBzdXBwb3J0cyB0aG9zZSB0aGVtZSBjb2xvcnMgdGhhdCBtYWtlIHNlbnNlIGZvciB0aGlzIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3ByaW1hcnknLCAnaW5oZXJpdCddKSxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIExpc3QgU3ViaGVhZGVyIHdpbGwgbm90IGhhdmUgZ3V0dGVycy5cbiAgICovXG4gIGRpc2FibGVHdXR0ZXJzOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgTGlzdCBTdWJoZWFkZXIgd2lsbCBub3Qgc3RpY2sgdG8gdGhlIHRvcCBkdXJpbmcgc2Nyb2xsLlxuICAgKi9cbiAgZGlzYWJsZVN0aWNreTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIExpc3QgU3ViaGVhZGVyIHdpbGwgYmUgaW5kZW50ZWQuXG4gICAqL1xuICBpbnNldDogUHJvcFR5cGVzLmJvb2xcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpTGlzdFN1YmhlYWRlcidcbn0pKExpc3RTdWJoZWFkZXIpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0xpc3RTdWJoZWFkZXInOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUG9wcGVySnMgZnJvbSAncG9wcGVyLmpzJztcbmltcG9ydCB7IGNoYWluUHJvcFR5cGVzLCByZWZUeXBlLCBIVE1MRWxlbWVudFR5cGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvdXRpbHMnO1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmltcG9ydCBQb3J0YWwgZnJvbSAnLi4vUG9ydGFsJztcbmltcG9ydCBjcmVhdGVDaGFpbmVkRnVuY3Rpb24gZnJvbSAnLi4vdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uJztcbmltcG9ydCBzZXRSZWYgZnJvbSAnLi4vdXRpbHMvc2V0UmVmJztcbmltcG9ydCB1c2VGb3JrUmVmIGZyb20gJy4uL3V0aWxzL3VzZUZvcmtSZWYnO1xuXG5mdW5jdGlvbiBmbGlwUGxhY2VtZW50KHBsYWNlbWVudCwgdGhlbWUpIHtcbiAgdmFyIGRpcmVjdGlvbiA9IHRoZW1lICYmIHRoZW1lLmRpcmVjdGlvbiB8fCAnbHRyJztcblxuICBpZiAoZGlyZWN0aW9uID09PSAnbHRyJykge1xuICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gIH1cblxuICBzd2l0Y2ggKHBsYWNlbWVudCkge1xuICAgIGNhc2UgJ2JvdHRvbS1lbmQnOlxuICAgICAgcmV0dXJuICdib3R0b20tc3RhcnQnO1xuXG4gICAgY2FzZSAnYm90dG9tLXN0YXJ0JzpcbiAgICAgIHJldHVybiAnYm90dG9tLWVuZCc7XG5cbiAgICBjYXNlICd0b3AtZW5kJzpcbiAgICAgIHJldHVybiAndG9wLXN0YXJ0JztcblxuICAgIGNhc2UgJ3RvcC1zdGFydCc6XG4gICAgICByZXR1cm4gJ3RvcC1lbmQnO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBwbGFjZW1lbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW5jaG9yRWwoYW5jaG9yRWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBhbmNob3JFbCA9PT0gJ2Z1bmN0aW9uJyA/IGFuY2hvckVsKCkgOiBhbmNob3JFbDtcbn1cblxudmFyIHVzZUVuaGFuY2VkRWZmZWN0ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBSZWFjdC51c2VMYXlvdXRFZmZlY3QgOiBSZWFjdC51c2VFZmZlY3Q7XG52YXIgZGVmYXVsdFBvcHBlck9wdGlvbnMgPSB7fTtcbi8qKlxuICogUG9wcGVycyByZWx5IG9uIHRoZSAzcmQgcGFydHkgbGlicmFyeSBbUG9wcGVyLmpzXShodHRwczovL3BvcHBlci5qcy5vcmcvZG9jcy92MS8pIGZvciBwb3NpdGlvbmluZy5cbiAqL1xuXG52YXIgUG9wcGVyID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gUG9wcGVyKHByb3BzLCByZWYpIHtcbiAgdmFyIGFuY2hvckVsID0gcHJvcHMuYW5jaG9yRWwsXG4gICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuLFxuICAgICAgY29udGFpbmVyID0gcHJvcHMuY29udGFpbmVyLFxuICAgICAgX3Byb3BzJGRpc2FibGVQb3J0YWwgPSBwcm9wcy5kaXNhYmxlUG9ydGFsLFxuICAgICAgZGlzYWJsZVBvcnRhbCA9IF9wcm9wcyRkaXNhYmxlUG9ydGFsID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlUG9ydGFsLFxuICAgICAgX3Byb3BzJGtlZXBNb3VudGVkID0gcHJvcHMua2VlcE1vdW50ZWQsXG4gICAgICBrZWVwTW91bnRlZCA9IF9wcm9wcyRrZWVwTW91bnRlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMka2VlcE1vdW50ZWQsXG4gICAgICBtb2RpZmllcnMgPSBwcm9wcy5tb2RpZmllcnMsXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIF9wcm9wcyRwbGFjZW1lbnQgPSBwcm9wcy5wbGFjZW1lbnQsXG4gICAgICBpbml0aWFsUGxhY2VtZW50ID0gX3Byb3BzJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gJ2JvdHRvbScgOiBfcHJvcHMkcGxhY2VtZW50LFxuICAgICAgX3Byb3BzJHBvcHBlck9wdGlvbnMgPSBwcm9wcy5wb3BwZXJPcHRpb25zLFxuICAgICAgcG9wcGVyT3B0aW9ucyA9IF9wcm9wcyRwb3BwZXJPcHRpb25zID09PSB2b2lkIDAgPyBkZWZhdWx0UG9wcGVyT3B0aW9ucyA6IF9wcm9wcyRwb3BwZXJPcHRpb25zLFxuICAgICAgcG9wcGVyUmVmUHJvcCA9IHByb3BzLnBvcHBlclJlZixcbiAgICAgIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBfcHJvcHMkdHJhbnNpdGlvbiA9IHByb3BzLnRyYW5zaXRpb24sXG4gICAgICB0cmFuc2l0aW9uID0gX3Byb3BzJHRyYW5zaXRpb24gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJHRyYW5zaXRpb24sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYW5jaG9yRWxcIiwgXCJjaGlsZHJlblwiLCBcImNvbnRhaW5lclwiLCBcImRpc2FibGVQb3J0YWxcIiwgXCJrZWVwTW91bnRlZFwiLCBcIm1vZGlmaWVyc1wiLCBcIm9wZW5cIiwgXCJwbGFjZW1lbnRcIiwgXCJwb3BwZXJPcHRpb25zXCIsIFwicG9wcGVyUmVmXCIsIFwic3R5bGVcIiwgXCJ0cmFuc2l0aW9uXCJdKTtcblxuICB2YXIgdG9vbHRpcFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIG93blJlZiA9IHVzZUZvcmtSZWYodG9vbHRpcFJlZiwgcmVmKTtcbiAgdmFyIHBvcHBlclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGhhbmRsZVBvcHBlclJlZiA9IHVzZUZvcmtSZWYocG9wcGVyUmVmLCBwb3BwZXJSZWZQcm9wKTtcbiAgdmFyIGhhbmRsZVBvcHBlclJlZlJlZiA9IFJlYWN0LnVzZVJlZihoYW5kbGVQb3BwZXJSZWYpO1xuICB1c2VFbmhhbmNlZEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaGFuZGxlUG9wcGVyUmVmUmVmLmN1cnJlbnQgPSBoYW5kbGVQb3BwZXJSZWY7XG4gIH0sIFtoYW5kbGVQb3BwZXJSZWZdKTtcbiAgUmVhY3QudXNlSW1wZXJhdGl2ZUhhbmRsZShwb3BwZXJSZWZQcm9wLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHBvcHBlclJlZi5jdXJyZW50O1xuICB9LCBbXSk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKHRydWUpLFxuICAgICAgZXhpdGVkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0RXhpdGVkID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBydGxQbGFjZW1lbnQgPSBmbGlwUGxhY2VtZW50KGluaXRpYWxQbGFjZW1lbnQsIHRoZW1lKTtcbiAgLyoqXG4gICAqIHBsYWNlbWVudCBpbml0aWFsaXplZCBmcm9tIHByb3AgYnV0IGNhbiBjaGFuZ2UgZHVyaW5nIGxpZmV0aW1lIGlmIG1vZGlmaWVycy5mbGlwLlxuICAgKiBtb2RpZmllcnMuZmxpcCBpcyBlc3NlbnRpYWxseSBhIGZsaXAgZm9yIGNvbnRyb2xsZWQvdW5jb250cm9sbGVkIGJlaGF2aW9yXG4gICAqL1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUyID0gUmVhY3QudXNlU3RhdGUocnRsUGxhY2VtZW50KSxcbiAgICAgIHBsYWNlbWVudCA9IF9SZWFjdCR1c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRQbGFjZW1lbnQgPSBfUmVhY3QkdXNlU3RhdGUyWzFdO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHBvcHBlclJlZi5jdXJyZW50KSB7XG4gICAgICBwb3BwZXJSZWYuY3VycmVudC51cGRhdGUoKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaGFuZGxlT3BlbiA9IFJlYWN0LnVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRvb2x0aXBSZWYuY3VycmVudCB8fCAhYW5jaG9yRWwgfHwgIW9wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocG9wcGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHBvcHBlclJlZi5jdXJyZW50LmRlc3Ryb3koKTtcbiAgICAgIGhhbmRsZVBvcHBlclJlZlJlZi5jdXJyZW50KG51bGwpO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVQb3BwZXJVcGRhdGUgPSBmdW5jdGlvbiBoYW5kbGVQb3BwZXJVcGRhdGUoZGF0YSkge1xuICAgICAgc2V0UGxhY2VtZW50KGRhdGEucGxhY2VtZW50KTtcbiAgICB9O1xuXG4gICAgdmFyIHJlc29sdmVkQW5jaG9yRWwgPSBnZXRBbmNob3JFbChhbmNob3JFbCk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHJlc29sdmVkQW5jaG9yRWwgJiYgcmVzb2x2ZWRBbmNob3JFbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICB2YXIgYm94ID0gcmVzb2x2ZWRBbmNob3JFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiBib3gudG9wID09PSAwICYmIGJveC5sZWZ0ID09PSAwICYmIGJveC5yaWdodCA9PT0gMCAmJiBib3guYm90dG9tID09PSAwKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFsnTWF0ZXJpYWwtVUk6IFRoZSBgYW5jaG9yRWxgIHByb3AgcHJvdmlkZWQgdG8gdGhlIGNvbXBvbmVudCBpcyBpbnZhbGlkLicsICdUaGUgYW5jaG9yIGVsZW1lbnQgc2hvdWxkIGJlIHBhcnQgb2YgdGhlIGRvY3VtZW50IGxheW91dC4nLCBcIk1ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBwcmVzZW50IGluIHRoZSBkb2N1bWVudCBvciB0aGF0IGl0J3Mgbm90IGRpc3BsYXkgbm9uZS5cIl0uam9pbignXFxuJykpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHBvcHBlciA9IG5ldyBQb3BwZXJKcyhnZXRBbmNob3JFbChhbmNob3JFbCksIHRvb2x0aXBSZWYuY3VycmVudCwgX2V4dGVuZHMoe1xuICAgICAgcGxhY2VtZW50OiBydGxQbGFjZW1lbnRcbiAgICB9LCBwb3BwZXJPcHRpb25zLCB7XG4gICAgICBtb2RpZmllcnM6IF9leHRlbmRzKHt9LCBkaXNhYmxlUG9ydGFsID8ge30gOiB7XG4gICAgICAgIC8vIEl0J3MgdXNpbmcgc2Nyb2xsUGFyZW50IGJ5IGRlZmF1bHQsIHdlIGNhbiB1c2UgdGhlIHZpZXdwb3J0IHdoZW4gdXNpbmcgYSBwb3J0YWwuXG4gICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xuICAgICAgICAgIGJvdW5kYXJpZXNFbGVtZW50OiAnd2luZG93J1xuICAgICAgICB9XG4gICAgICB9LCBtb2RpZmllcnMsIHBvcHBlck9wdGlvbnMubW9kaWZpZXJzKSxcbiAgICAgIC8vIFdlIGNvdWxkIGhhdmUgYmVlbiB1c2luZyBhIGN1c3RvbSBtb2RpZmllciBsaWtlIHJlYWN0LXBvcHBlciBpcyBkb2luZy5cbiAgICAgIC8vIEJ1dCBpdCBzZWVtcyB0aGlzIGlzIHRoZSBiZXN0IHB1YmxpYyBBUEkgZm9yIHRoaXMgdXNlIGNhc2UuXG4gICAgICBvbkNyZWF0ZTogY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKGhhbmRsZVBvcHBlclVwZGF0ZSwgcG9wcGVyT3B0aW9ucy5vbkNyZWF0ZSksXG4gICAgICBvblVwZGF0ZTogY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKGhhbmRsZVBvcHBlclVwZGF0ZSwgcG9wcGVyT3B0aW9ucy5vblVwZGF0ZSlcbiAgICB9KSk7XG4gICAgaGFuZGxlUG9wcGVyUmVmUmVmLmN1cnJlbnQocG9wcGVyKTtcbiAgfSwgW2FuY2hvckVsLCBkaXNhYmxlUG9ydGFsLCBtb2RpZmllcnMsIG9wZW4sIHJ0bFBsYWNlbWVudCwgcG9wcGVyT3B0aW9uc10pO1xuICB2YXIgaGFuZGxlUmVmID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBzZXRSZWYob3duUmVmLCBub2RlKTtcbiAgICBoYW5kbGVPcGVuKCk7XG4gIH0sIFtvd25SZWYsIGhhbmRsZU9wZW5dKTtcblxuICB2YXIgaGFuZGxlRW50ZXIgPSBmdW5jdGlvbiBoYW5kbGVFbnRlcigpIHtcbiAgICBzZXRFeGl0ZWQoZmFsc2UpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVDbG9zZSA9IGZ1bmN0aW9uIGhhbmRsZUNsb3NlKCkge1xuICAgIGlmICghcG9wcGVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwb3BwZXJSZWYuY3VycmVudC5kZXN0cm95KCk7XG4gICAgaGFuZGxlUG9wcGVyUmVmUmVmLmN1cnJlbnQobnVsbCk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUV4aXRlZCA9IGZ1bmN0aW9uIGhhbmRsZUV4aXRlZCgpIHtcbiAgICBzZXRFeGl0ZWQodHJ1ZSk7XG4gICAgaGFuZGxlQ2xvc2UoKTtcbiAgfTtcblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBoYW5kbGVDbG9zZSgpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIW9wZW4gJiYgIXRyYW5zaXRpb24pIHtcbiAgICAgIC8vIE90aGVyd2lzZSBoYW5kbGVFeGl0ZWQgd2lsbCBjYWxsIHRoaXMuXG4gICAgICBoYW5kbGVDbG9zZSgpO1xuICAgIH1cbiAgfSwgW29wZW4sIHRyYW5zaXRpb25dKTtcblxuICBpZiAoIWtlZXBNb3VudGVkICYmICFvcGVuICYmICghdHJhbnNpdGlvbiB8fCBleGl0ZWQpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgY2hpbGRQcm9wcyA9IHtcbiAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudFxuICB9O1xuXG4gIGlmICh0cmFuc2l0aW9uKSB7XG4gICAgY2hpbGRQcm9wcy5UcmFuc2l0aW9uUHJvcHMgPSB7XG4gICAgICBpbjogb3BlbixcbiAgICAgIG9uRW50ZXI6IGhhbmRsZUVudGVyLFxuICAgICAgb25FeGl0ZWQ6IGhhbmRsZUV4aXRlZFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9ydGFsLCB7XG4gICAgZGlzYWJsZVBvcnRhbDogZGlzYWJsZVBvcnRhbCxcbiAgICBjb250YWluZXI6IGNvbnRhaW5lclxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgcmVmOiBoYW5kbGVSZWYsXG4gICAgcm9sZTogXCJ0b29sdGlwXCJcbiAgfSwgb3RoZXIsIHtcbiAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgLy8gUHJldmVudHMgc2Nyb2xsIGlzc3VlLCB3YWl0aW5nIGZvciBQb3BwZXIuanMgdG8gYWRkIHRoaXMgc3R5bGUgb25jZSBpbml0aWF0ZWQuXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIC8vIEZpeCBQb3BwZXIuanMgZGlzcGxheSBpc3N1ZVxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGRpc3BsYXk6ICFvcGVuICYmIGtlZXBNb3VudGVkICYmICF0cmFuc2l0aW9uID8gJ25vbmUnIDogbnVsbFxuICAgIH0sIHN0eWxlKVxuICB9KSwgdHlwZW9mIGNoaWxkcmVuID09PSAnZnVuY3Rpb24nID8gY2hpbGRyZW4oY2hpbGRQcm9wcykgOiBjaGlsZHJlbikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBQb3BwZXIucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogQSBIVE1MIGVsZW1lbnQsIFtyZWZlcmVuY2VPYmplY3RdKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9kb2NzL3YxLyNyZWZlcmVuY2VPYmplY3QpLFxuICAgKiBvciBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBlaXRoZXIuXG4gICAqIEl0J3MgdXNlZCB0byBzZXQgdGhlIHBvc2l0aW9uIG9mIHRoZSBwb3BwZXIuXG4gICAqIFRoZSByZXR1cm4gdmFsdWUgd2lsbCBwYXNzZWQgYXMgdGhlIHJlZmVyZW5jZSBvYmplY3Qgb2YgdGhlIFBvcHBlciBpbnN0YW5jZS5cbiAgICovXG4gIGFuY2hvckVsOiBjaGFpblByb3BUeXBlcyhQcm9wVHlwZXMub25lT2ZUeXBlKFtIVE1MRWxlbWVudFR5cGUsIFByb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5mdW5jXSksIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmIChwcm9wcy5vcGVuKSB7XG4gICAgICB2YXIgcmVzb2x2ZWRBbmNob3JFbCA9IGdldEFuY2hvckVsKHByb3BzLmFuY2hvckVsKTtcblxuICAgICAgaWYgKHJlc29sdmVkQW5jaG9yRWwgJiYgcmVzb2x2ZWRBbmNob3JFbC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICB2YXIgYm94ID0gcmVzb2x2ZWRBbmNob3JFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiBib3gudG9wID09PSAwICYmIGJveC5sZWZ0ID09PSAwICYmIGJveC5yaWdodCA9PT0gMCAmJiBib3guYm90dG9tID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYGFuY2hvckVsYCBwcm9wIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgaXMgaW52YWxpZC4nLCAnVGhlIGFuY2hvciBlbGVtZW50IHNob3VsZCBiZSBwYXJ0IG9mIHRoZSBkb2N1bWVudCBsYXlvdXQuJywgXCJNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgcHJlc2VudCBpbiB0aGUgZG9jdW1lbnQgb3IgdGhhdCBpdCdzIG5vdCBkaXNwbGF5IG5vbmUuXCJdLmpvaW4oJ1xcbicpKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghcmVzb2x2ZWRBbmNob3JFbCB8fCB0eXBlb2YgcmVzb2x2ZWRBbmNob3JFbC5jbGllbnRXaWR0aCAhPT0gJ251bWJlcicgfHwgdHlwZW9mIHJlc29sdmVkQW5jaG9yRWwuY2xpZW50SGVpZ2h0ICE9PSAnbnVtYmVyJyB8fCB0eXBlb2YgcmVzb2x2ZWRBbmNob3JFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYGFuY2hvckVsYCBwcm9wIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQgaXMgaW52YWxpZC4nLCAnSXQgc2hvdWxkIGJlIGFuIEhUTUwgZWxlbWVudCBpbnN0YW5jZSBvciBhIHJlZmVyZW5jZU9iamVjdCAnLCAnKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9kb2NzL3YxLyNyZWZlcmVuY2VPYmplY3QpLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfSksXG5cbiAgLyoqXG4gICAqIFBvcHBlciByZW5kZXIgZnVuY3Rpb24gb3Igbm9kZS5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAub25lT2ZUeXBlKFtQcm9wVHlwZXMubm9kZSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkLFxuXG4gIC8qKlxuICAgKiBBIEhUTUwgZWxlbWVudCwgY29tcG9uZW50IGluc3RhbmNlLCBvciBmdW5jdGlvbiB0aGF0IHJldHVybnMgZWl0aGVyLlxuICAgKiBUaGUgYGNvbnRhaW5lcmAgd2lsbCBoYXZlIHRoZSBwb3J0YWwgY2hpbGRyZW4gYXBwZW5kZWQgdG8gaXQuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGl0IHVzZXMgdGhlIGJvZHkgb2YgdGhlIHRvcC1sZXZlbCBkb2N1bWVudCBvYmplY3QsXG4gICAqIHNvIGl0J3Mgc2ltcGx5IGBkb2N1bWVudC5ib2R5YCBtb3N0IG9mIHRoZSB0aW1lLlxuICAgKi9cbiAgY29udGFpbmVyOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAub25lT2ZUeXBlKFtIVE1MRWxlbWVudFR5cGUsIFByb3BUeXBlcy5pbnN0YW5jZU9mKFJlYWN0LkNvbXBvbmVudCksIFByb3BUeXBlcy5mdW5jXSksXG5cbiAgLyoqXG4gICAqIERpc2FibGUgdGhlIHBvcnRhbCBiZWhhdmlvci5cbiAgICogVGhlIGNoaWxkcmVuIHN0YXkgd2l0aGluIGl0J3MgcGFyZW50IERPTSBoaWVyYXJjaHkuXG4gICAqL1xuICBkaXNhYmxlUG9ydGFsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQWx3YXlzIGtlZXAgdGhlIGNoaWxkcmVuIGluIHRoZSBET00uXG4gICAqIFRoaXMgcHJvcCBjYW4gYmUgdXNlZnVsIGluIFNFTyBzaXR1YXRpb24gb3JcbiAgICogd2hlbiB5b3Ugd2FudCB0byBtYXhpbWl6ZSB0aGUgcmVzcG9uc2l2ZW5lc3Mgb2YgdGhlIFBvcHBlci5cbiAgICovXG4gIGtlZXBNb3VudGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogUG9wcGVyLmpzIGlzIGJhc2VkIG9uIGEgXCJwbHVnaW4tbGlrZVwiIGFyY2hpdGVjdHVyZSxcbiAgICogbW9zdCBvZiBpdHMgZmVhdHVyZXMgYXJlIGZ1bGx5IGVuY2Fwc3VsYXRlZCBcIm1vZGlmaWVyc1wiLlxuICAgKlxuICAgKiBBIG1vZGlmaWVyIGlzIGEgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgZWFjaCB0aW1lIFBvcHBlci5qcyBuZWVkcyB0b1xuICAgKiBjb21wdXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyLlxuICAgKiBGb3IgdGhpcyByZWFzb24sIG1vZGlmaWVycyBzaG91bGQgYmUgdmVyeSBwZXJmb3JtYW50IHRvIGF2b2lkIGJvdHRsZW5lY2tzLlxuICAgKiBUbyBsZWFybiBob3cgdG8gY3JlYXRlIGEgbW9kaWZpZXIsIFtyZWFkIHRoZSBtb2RpZmllcnMgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9wb3BwZXIuanMub3JnL2RvY3MvdjEvI21vZGlmaWVycykuXG4gICAqL1xuICBtb2RpZmllcnM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHBvcHBlciBpcyB2aXNpYmxlLlxuICAgKi9cbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogUG9wcGVyIHBsYWNlbWVudC5cbiAgICovXG4gIHBsYWNlbWVudDogUHJvcFR5cGVzLm9uZU9mKFsnYm90dG9tLWVuZCcsICdib3R0b20tc3RhcnQnLCAnYm90dG9tJywgJ2xlZnQtZW5kJywgJ2xlZnQtc3RhcnQnLCAnbGVmdCcsICdyaWdodC1lbmQnLCAncmlnaHQtc3RhcnQnLCAncmlnaHQnLCAndG9wLWVuZCcsICd0b3Atc3RhcnQnLCAndG9wJ10pLFxuXG4gIC8qKlxuICAgKiBPcHRpb25zIHByb3ZpZGVkIHRvIHRoZSBbYHBvcHBlci5qc2BdKGh0dHBzOi8vcG9wcGVyLmpzLm9yZy9kb2NzL3YxLykgaW5zdGFuY2UuXG4gICAqL1xuICBwb3BwZXJPcHRpb25zOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBBIHJlZiB0aGF0IHBvaW50cyB0byB0aGUgdXNlZCBwb3BwZXIgaW5zdGFuY2UuXG4gICAqL1xuICBwb3BwZXJSZWY6IHJlZlR5cGUsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBIZWxwIHN1cHBvcnRpbmcgYSByZWFjdC10cmFuc2l0aW9uLWdyb3VwL1RyYW5zaXRpb24gY29tcG9uZW50LlxuICAgKi9cbiAgdHJhbnNpdGlvbjogUHJvcFR5cGVzLmJvb2xcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCBQb3BwZXI7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vUG9wcGVyJzsiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3JlYXRlU3ZnSWNvbiBmcm9tICcuLi8uLi91dGlscy9jcmVhdGVTdmdJY29uJztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xMiAyQzYuNDcgMiAyIDYuNDcgMiAxMnM0LjQ3IDEwIDEwIDEwIDEwLTQuNDcgMTAtMTBTMTcuNTMgMiAxMiAyem01IDEzLjU5TDE1LjU5IDE3IDEyIDEzLjQxIDguNDEgMTcgNyAxNS41OSAxMC41OSAxMiA3IDguNDEgOC40MSA3IDEyIDEwLjU5IDE1LjU5IDcgMTcgOC40MSAxMy40MSAxMiAxNyAxNS41OXpcIlxufSksICdDYW5jZWwnKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi91c2VNZWRpYVF1ZXJ5JzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldFRoZW1lUHJvcHMsIHVzZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3N0eWxlcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VNZWRpYVF1ZXJ5KHF1ZXJ5SW5wdXQpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICB2YXIgcHJvcHMgPSBnZXRUaGVtZVByb3BzKHtcbiAgICB0aGVtZTogdGhlbWUsXG4gICAgbmFtZTogJ011aVVzZU1lZGlhUXVlcnknLFxuICAgIHByb3BzOiB7fVxuICB9KTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2YgcXVlcnlJbnB1dCA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGVtZSA9PT0gbnVsbCkge1xuICAgICAgY29uc29sZS5lcnJvcihbJ01hdGVyaWFsLVVJOiBUaGUgYHF1ZXJ5YCBhcmd1bWVudCBwcm92aWRlZCBpcyBpbnZhbGlkLicsICdZb3UgYXJlIHByb3ZpZGluZyBhIGZ1bmN0aW9uIHdpdGhvdXQgYSB0aGVtZSBpbiB0aGUgY29udGV4dC4nLCAnT25lIG9mIHRoZSBwYXJlbnQgZWxlbWVudHMgbmVlZHMgdG8gdXNlIGEgVGhlbWVQcm92aWRlci4nXS5qb2luKCdcXG4nKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHF1ZXJ5ID0gdHlwZW9mIHF1ZXJ5SW5wdXQgPT09ICdmdW5jdGlvbicgPyBxdWVyeUlucHV0KHRoZW1lKSA6IHF1ZXJ5SW5wdXQ7XG4gIHF1ZXJ5ID0gcXVlcnkucmVwbGFjZSgvXkBtZWRpYSggPykvbSwgJycpOyAvLyBXYWl0IGZvciBqc2RvbSB0byBzdXBwb3J0IHRoZSBtYXRjaCBtZWRpYSBmZWF0dXJlLlxuICAvLyBBbGwgdGhlIGJyb3dzZXJzIE1hdGVyaWFsLVVJIHN1cHBvcnQgaGF2ZSB0aGlzIGJ1aWx0LWluLlxuICAvLyBUaGlzIGRlZmVuc2l2ZSBjaGVjayBpcyBoZXJlIGZvciBzaW1wbGljaXR5LlxuICAvLyBNb3N0IG9mIHRoZSB0aW1lLCB0aGUgbWF0Y2ggbWVkaWEgbG9naWMgaXNuJ3QgY2VudHJhbCB0byBwZW9wbGUgdGVzdHMuXG5cbiAgdmFyIHN1cHBvcnRNYXRjaE1lZGlhID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5tYXRjaE1lZGlhICE9PSAndW5kZWZpbmVkJztcblxuICB2YXIgX3Byb3BzJG9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgcHJvcHMsIG9wdGlvbnMpLFxuICAgICAgX3Byb3BzJG9wdGlvbnMkZGVmYXVsID0gX3Byb3BzJG9wdGlvbnMuZGVmYXVsdE1hdGNoZXMsXG4gICAgICBkZWZhdWx0TWF0Y2hlcyA9IF9wcm9wcyRvcHRpb25zJGRlZmF1bCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkb3B0aW9ucyRkZWZhdWwsXG4gICAgICBfcHJvcHMkb3B0aW9ucyRtYXRjaE0gPSBfcHJvcHMkb3B0aW9ucy5tYXRjaE1lZGlhLFxuICAgICAgbWF0Y2hNZWRpYSA9IF9wcm9wcyRvcHRpb25zJG1hdGNoTSA9PT0gdm9pZCAwID8gc3VwcG9ydE1hdGNoTWVkaWEgPyB3aW5kb3cubWF0Y2hNZWRpYSA6IG51bGwgOiBfcHJvcHMkb3B0aW9ucyRtYXRjaE0sXG4gICAgICBfcHJvcHMkb3B0aW9ucyRub1NzciA9IF9wcm9wcyRvcHRpb25zLm5vU3NyLFxuICAgICAgbm9Tc3IgPSBfcHJvcHMkb3B0aW9ucyRub1NzciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkb3B0aW9ucyRub1NzcixcbiAgICAgIF9wcm9wcyRvcHRpb25zJHNzck1hdCA9IF9wcm9wcyRvcHRpb25zLnNzck1hdGNoTWVkaWEsXG4gICAgICBzc3JNYXRjaE1lZGlhID0gX3Byb3BzJG9wdGlvbnMkc3NyTWF0ID09PSB2b2lkIDAgPyBudWxsIDogX3Byb3BzJG9wdGlvbnMkc3NyTWF0O1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUgPSBSZWFjdC51c2VTdGF0ZShmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5vU3NyICYmIHN1cHBvcnRNYXRjaE1lZGlhKSB7XG4gICAgICByZXR1cm4gbWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbiAgICB9XG5cbiAgICBpZiAoc3NyTWF0Y2hNZWRpYSkge1xuICAgICAgcmV0dXJuIHNzck1hdGNoTWVkaWEocXVlcnkpLm1hdGNoZXM7XG4gICAgfSAvLyBPbmNlIHRoZSBjb21wb25lbnQgaXMgbW91bnRlZCwgd2UgcmVseSBvbiB0aGVcbiAgICAvLyBldmVudCBsaXN0ZW5lcnMgdG8gcmV0dXJuIHRoZSBjb3JyZWN0IG1hdGNoZXMgdmFsdWUuXG5cblxuICAgIHJldHVybiBkZWZhdWx0TWF0Y2hlcztcbiAgfSksXG4gICAgICBtYXRjaCA9IF9SZWFjdCR1c2VTdGF0ZVswXSxcbiAgICAgIHNldE1hdGNoID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFjdGl2ZSA9IHRydWU7XG5cbiAgICBpZiAoIXN1cHBvcnRNYXRjaE1lZGlhKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHZhciBxdWVyeUxpc3QgPSBtYXRjaE1lZGlhKHF1ZXJ5KTtcblxuICAgIHZhciB1cGRhdGVNYXRjaCA9IGZ1bmN0aW9uIHVwZGF0ZU1hdGNoKCkge1xuICAgICAgLy8gV29ya2Fyb3VuZCBTYWZhcmkgd3JvbmcgaW1wbGVtZW50YXRpb24gb2YgbWF0Y2hNZWRpYVxuICAgICAgLy8gVE9ETyBjYW4gd2UgcmVtb3ZlIGl0P1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL211aS1vcmcvbWF0ZXJpYWwtdWkvcHVsbC8xNzMxNSNpc3N1ZWNvbW1lbnQtNTI4Mjg2Njc3XG4gICAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAgIHNldE1hdGNoKHF1ZXJ5TGlzdC5tYXRjaGVzKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdXBkYXRlTWF0Y2goKTtcbiAgICBxdWVyeUxpc3QuYWRkTGlzdGVuZXIodXBkYXRlTWF0Y2gpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBhY3RpdmUgPSBmYWxzZTtcbiAgICAgIHF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcih1cGRhdGVNYXRjaCk7XG4gICAgfTtcbiAgfSwgW3F1ZXJ5LCBtYXRjaE1lZGlhLCBzdXBwb3J0TWF0Y2hNZWRpYV0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRGVidWdWYWx1ZSh7XG4gICAgICBxdWVyeTogcXVlcnksXG4gICAgICBtYXRjaDogbWF0Y2hcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXByZWNhdGVkUHJvcFR5cGUodmFsaWRhdG9yLCByZWFzb24pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWVTYWZlID0gY29tcG9uZW50TmFtZSB8fCAnPDxhbm9ueW1vdXM+Pic7XG4gICAgdmFyIHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICBpZiAodHlwZW9mIHByb3BzW3Byb3BOYW1lXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXCJUaGUgXCIuY29uY2F0KGxvY2F0aW9uLCBcIiBgXCIpLmNvbmNhdChwcm9wRnVsbE5hbWVTYWZlLCBcImAgb2YgXCIpICsgXCJgXCIuY29uY2F0KGNvbXBvbmVudE5hbWVTYWZlLCBcImAgaXMgZGVwcmVjYXRlZC4gXCIpLmNvbmNhdChyZWFzb24pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbn0iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhcGl0YWxpemUgfSBmcm9tICcuL2NhcGl0YWxpemUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjcmVhdGVDaGFpbmVkRnVuY3Rpb24gfSBmcm9tICcuL2NyZWF0ZUNoYWluZWRGdW5jdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNyZWF0ZVN2Z0ljb24gfSBmcm9tICcuL2NyZWF0ZVN2Z0ljb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZWJvdW5jZSB9IGZyb20gJy4vZGVib3VuY2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBkZXByZWNhdGVkUHJvcFR5cGUgfSBmcm9tICcuL2RlcHJlY2F0ZWRQcm9wVHlwZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGlzTXVpRWxlbWVudCB9IGZyb20gJy4vaXNNdWlFbGVtZW50JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgb3duZXJEb2N1bWVudCB9IGZyb20gJy4vb3duZXJEb2N1bWVudCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIG93bmVyV2luZG93IH0gZnJvbSAnLi9vd25lcldpbmRvdyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlcXVpcmVQcm9wRmFjdG9yeSB9IGZyb20gJy4vcmVxdWlyZVByb3BGYWN0b3J5JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2V0UmVmIH0gZnJvbSAnLi9zZXRSZWYnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN1cHBvcnRlZFByb3AgfSBmcm9tICcuL3Vuc3VwcG9ydGVkUHJvcCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUNvbnRyb2xsZWQgfSBmcm9tICcuL3VzZUNvbnRyb2xsZWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VFdmVudENhbGxiYWNrIH0gZnJvbSAnLi91c2VFdmVudENhbGxiYWNrJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRm9ya1JlZiB9IGZyb20gJy4vdXNlRm9ya1JlZic7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyB1bnN0YWJsZV91c2VJZCB9IGZyb20gJy4vdW5zdGFibGVfdXNlSWQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VJc0ZvY3VzVmlzaWJsZSB9IGZyb20gJy4vdXNlSXNGb2N1c1Zpc2libGUnOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogUHJpdmF0ZSBtb2R1bGUgcmVzZXJ2ZWQgZm9yIEBtYXRlcmlhbC11aS94IHBhY2thZ2VzLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUlkKGlkT3ZlcnJpZGUpIHtcbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGlkT3ZlcnJpZGUpLFxuICAgICAgZGVmYXVsdElkID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0RGVmYXVsdElkID0gX1JlYWN0JHVzZVN0YXRlWzFdO1xuXG4gIHZhciBpZCA9IGlkT3ZlcnJpZGUgfHwgZGVmYXVsdElkO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChkZWZhdWx0SWQgPT0gbnVsbCkge1xuICAgICAgLy8gRmFsbGJhY2sgdG8gdGhpcyBkZWZhdWx0IGlkIHdoZW4gcG9zc2libGUuXG4gICAgICAvLyBVc2UgdGhlIHJhbmRvbSB2YWx1ZSBmb3IgY2xpZW50LXNpZGUgcmVuZGVyaW5nIG9ubHkuXG4gICAgICAvLyBXZSBjYW4ndCB1c2UgaXQgc2VydmVyLXNpZGUuXG4gICAgICBzZXREZWZhdWx0SWQoXCJtdWktXCIuY29uY2F0KE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDFlNSkpKTtcbiAgICB9XG4gIH0sIFtkZWZhdWx0SWRdKTtcbiAgcmV0dXJuIGlkO1xufSIsImltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eVwiO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBQb3BwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyJztcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCc7XG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9DbG9zZSc7XG5pbXBvcnQgQXJyb3dEcm9wRG93bkljb24gZnJvbSAnLi4vaW50ZXJuYWwvc3ZnLWljb25zL0Fycm93RHJvcERvd24nO1xuaW1wb3J0IHVzZUF1dG9jb21wbGV0ZSwgeyBjcmVhdGVGaWx0ZXJPcHRpb25zIH0gZnJvbSAnLi4vdXNlQXV0b2NvbXBsZXRlJztcbmV4cG9ydCB7IGNyZWF0ZUZpbHRlck9wdGlvbnMgfTtcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHZhciBfb3B0aW9uO1xuXG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICAnJiRmb2N1c2VkICRjbGVhckluZGljYXRvckRpcnR5Jzoge1xuICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcbiAgICAgIH0sXG5cbiAgICAgIC8qIEF2b2lkIGRvdWJsZSB0YXAgaXNzdWUgb24gaU9TICovXG4gICAgICAnQG1lZGlhIChwb2ludGVyOiBmaW5lKSc6IHtcbiAgICAgICAgJyY6aG92ZXIgJGNsZWFySW5kaWNhdG9yRGlydHknOiB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZnVsbFdpZHRoPXt0cnVlfWAuICovXG4gICAgZnVsbFdpZHRoOiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgZm9jdXNlZC4gKi9cbiAgICBmb2N1c2VkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSB0YWcgZWxlbWVudHMsIGUuZy4gdGhlIGNoaXBzLiAqL1xuICAgIHRhZzoge1xuICAgICAgbWFyZ2luOiAzLFxuICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSA2cHgpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgdGFnIGVsZW1lbnRzLCBlLmcuIHRoZSBjaGlwcyBpZiBgc2l6ZT1cInNtYWxsXCJgLiAqL1xuICAgIHRhZ1NpemVTbWFsbDoge1xuICAgICAgbWFyZ2luOiAyLFxuICAgICAgbWF4V2lkdGg6ICdjYWxjKDEwMCUgLSA0cHgpJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB3aGVuIHRoZSBwb3B1cCBpY29uIGlzIHJlbmRlcmVkLiAqL1xuICAgIGhhc1BvcHVwSWNvbjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB3aGVuIHRoZSBjbGVhciBpY29uIGlzIHJlbmRlcmVkLiAqL1xuICAgIGhhc0NsZWFySWNvbjoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgSW5wdXQgZWxlbWVudC4gKi9cbiAgICBpbnB1dFJvb3Q6IHtcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICAnJGhhc1BvcHVwSWNvbiAmLCAkaGFzQ2xlYXJJY29uICYnOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogMjYgKyA0XG4gICAgICB9LFxuICAgICAgJyRoYXNQb3B1cEljb24kaGFzQ2xlYXJJY29uICYnOiB7XG4gICAgICAgIHBhZGRpbmdSaWdodDogNTIgKyA0XG4gICAgICB9LFxuICAgICAgJyYgJGlucHV0Jzoge1xuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgbWluV2lkdGg6IDMwXG4gICAgICB9LFxuICAgICAgJyZbY2xhc3MqPVwiTXVpSW5wdXQtcm9vdFwiXSc6IHtcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogMSxcbiAgICAgICAgJyYgJGlucHV0Jzoge1xuICAgICAgICAgIHBhZGRpbmc6IDRcbiAgICAgICAgfSxcbiAgICAgICAgJyYgJGlucHV0OmZpcnN0LWNoaWxkJzoge1xuICAgICAgICAgIHBhZGRpbmc6ICc2cHggMCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmW2NsYXNzKj1cIk11aUlucHV0LXJvb3RcIl1bY2xhc3MqPVwiTXVpSW5wdXQtbWFyZ2luRGVuc2VcIl0nOiB7XG4gICAgICAgICcmICRpbnB1dCc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnNHB4IDRweCA1cHgnXG4gICAgICAgIH0sXG4gICAgICAgICcmICRpbnB1dDpmaXJzdC1jaGlsZCc6IHtcbiAgICAgICAgICBwYWRkaW5nOiAnM3B4IDAgNnB4J1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJyZbY2xhc3MqPVwiTXVpT3V0bGluZWRJbnB1dC1yb290XCJdJzoge1xuICAgICAgICBwYWRkaW5nOiA5LFxuICAgICAgICAnJGhhc1BvcHVwSWNvbiAmLCAkaGFzQ2xlYXJJY29uICYnOiB7XG4gICAgICAgICAgcGFkZGluZ1JpZ2h0OiAyNiArIDQgKyA5XG4gICAgICAgIH0sXG4gICAgICAgICckaGFzUG9wdXBJY29uJGhhc0NsZWFySWNvbiAmJzoge1xuICAgICAgICAgIHBhZGRpbmdSaWdodDogNTIgKyA0ICsgOVxuICAgICAgICB9LFxuICAgICAgICAnJiAkaW5wdXQnOiB7XG4gICAgICAgICAgcGFkZGluZzogJzkuNXB4IDRweCdcbiAgICAgICAgfSxcbiAgICAgICAgJyYgJGlucHV0OmZpcnN0LWNoaWxkJzoge1xuICAgICAgICAgIHBhZGRpbmdMZWZ0OiA2XG4gICAgICAgIH0sXG4gICAgICAgICcmICRlbmRBZG9ybm1lbnQnOiB7XG4gICAgICAgICAgcmlnaHQ6IDlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmW2NsYXNzKj1cIk11aU91dGxpbmVkSW5wdXQtcm9vdFwiXVtjbGFzcyo9XCJNdWlPdXRsaW5lZElucHV0LW1hcmdpbkRlbnNlXCJdJzoge1xuICAgICAgICBwYWRkaW5nOiA2LFxuICAgICAgICAnJiAkaW5wdXQnOiB7XG4gICAgICAgICAgcGFkZGluZzogJzQuNXB4IDRweCdcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICcmW2NsYXNzKj1cIk11aUZpbGxlZElucHV0LXJvb3RcIl0nOiB7XG4gICAgICAgIHBhZGRpbmdUb3A6IDE5LFxuICAgICAgICBwYWRkaW5nTGVmdDogOCxcbiAgICAgICAgJyRoYXNQb3B1cEljb24gJiwgJGhhc0NsZWFySWNvbiAmJzoge1xuICAgICAgICAgIHBhZGRpbmdSaWdodDogMjYgKyA0ICsgOVxuICAgICAgICB9LFxuICAgICAgICAnJGhhc1BvcHVwSWNvbiRoYXNDbGVhckljb24gJic6IHtcbiAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDUyICsgNCArIDlcbiAgICAgICAgfSxcbiAgICAgICAgJyYgJGlucHV0Jzoge1xuICAgICAgICAgIHBhZGRpbmc6ICc5cHggNHB4J1xuICAgICAgICB9LFxuICAgICAgICAnJiAkZW5kQWRvcm5tZW50Jzoge1xuICAgICAgICAgIHJpZ2h0OiA5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnJltjbGFzcyo9XCJNdWlGaWxsZWRJbnB1dC1yb290XCJdW2NsYXNzKj1cIk11aUZpbGxlZElucHV0LW1hcmdpbkRlbnNlXCJdJzoge1xuICAgICAgICBwYWRkaW5nQm90dG9tOiAxLFxuICAgICAgICAnJiAkaW5wdXQnOiB7XG4gICAgICAgICAgcGFkZGluZzogJzQuNXB4IDRweCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW5wdXQgZWxlbWVudC4gKi9cbiAgICBpbnB1dDoge1xuICAgICAgZmxleEdyb3c6IDEsXG4gICAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBpbnB1dCBlbGVtZW50IGlmIHRhZyBmb2N1c2VkLiAqL1xuICAgIGlucHV0Rm9jdXNlZDoge1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgZW5kQWRvcm5tZW50IGVsZW1lbnQuICovXG4gICAgZW5kQWRvcm5tZW50OiB7XG4gICAgICAvLyBXZSB1c2UgYSBwb3NpdGlvbiBhYnNvbHV0ZSB0byBzdXBwb3J0IHdyYXBwaW5nIHRhZ3MuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHJpZ2h0OiAwLFxuICAgICAgdG9wOiAnY2FsYyg1MCUgLSAxNHB4KScgLy8gQ2VudGVyIHZlcnRpY2FsbHlcblxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY2xlYXIgaW5kaWNhdG9yLiAqL1xuICAgIGNsZWFySW5kaWNhdG9yOiB7XG4gICAgICBtYXJnaW5SaWdodDogLTIsXG4gICAgICBwYWRkaW5nOiA0LFxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNsZWFyIGluZGljYXRvciBpZiB0aGUgaW5wdXQgaXMgZGlydHkuICovXG4gICAgY2xlYXJJbmRpY2F0b3JEaXJ0eToge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcG9wdXAgaW5kaWNhdG9yLiAqL1xuICAgIHBvcHVwSW5kaWNhdG9yOiB7XG4gICAgICBwYWRkaW5nOiAyLFxuICAgICAgbWFyZ2luUmlnaHQ6IC0yXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBwb3B1cCBpbmRpY2F0b3IgaWYgdGhlIHBvcHVwIGlzIG9wZW4uICovXG4gICAgcG9wdXBJbmRpY2F0b3JPcGVuOiB7XG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMTgwZGVnKSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBlbGVtZW50LiAqL1xuICAgIHBvcHBlcjoge1xuICAgICAgekluZGV4OiB0aGVtZS56SW5kZXgubW9kYWxcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHBvcHBlciBlbGVtZW50IGlmIGBkaXNhYmxlUG9ydGFsPXt0cnVlfWAuICovXG4gICAgcG9wcGVyRGlzYWJsZVBvcnRhbDoge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBQYXBlcmAgY29tcG9uZW50LiAqL1xuICAgIHBhcGVyOiBfZXh0ZW5kcyh7fSwgdGhlbWUudHlwb2dyYXBoeS5ib2R5MSwge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgbWFyZ2luOiAnNHB4IDAnXG4gICAgfSksXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgYGxpc3Rib3hgIGNvbXBvbmVudC4gKi9cbiAgICBsaXN0Ym94OiB7XG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIHBhZGRpbmc6ICc4cHggMCcsXG4gICAgICBtYXhIZWlnaHQ6ICc0MHZoJyxcbiAgICAgIG92ZXJmbG93OiAnYXV0bydcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGxvYWRpbmcgd3JhcHBlci4gKi9cbiAgICBsb2FkaW5nOiB7XG4gICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnNlY29uZGFyeSxcbiAgICAgIHBhZGRpbmc6ICcxNHB4IDE2cHgnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBubyBvcHRpb24gd3JhcHBlci4gKi9cbiAgICBub09wdGlvbnM6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICAgICAgcGFkZGluZzogJzE0cHggMTZweCdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIG9wdGlvbiBlbGVtZW50cy4gKi9cbiAgICBvcHRpb246IChfb3B0aW9uID0ge1xuICAgICAgbWluSGVpZ2h0OiA0OCxcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgcGFkZGluZ1RvcDogNixcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgb3V0bGluZTogJzAnLFxuICAgICAgV2Via2l0VGFwSGlnaGxpZ2h0Q29sb3I6ICd0cmFuc3BhcmVudCcsXG4gICAgICBwYWRkaW5nQm90dG9tOiA2LFxuICAgICAgcGFkZGluZ0xlZnQ6IDE2LFxuICAgICAgcGFkZGluZ1JpZ2h0OiAxNlxuICAgIH0sIF9kZWZpbmVQcm9wZXJ0eShfb3B0aW9uLCB0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSwge1xuICAgICAgbWluSGVpZ2h0OiAnYXV0bydcbiAgICB9KSwgX2RlZmluZVByb3BlcnR5KF9vcHRpb24sICcmW2FyaWEtc2VsZWN0ZWQ9XCJ0cnVlXCJdJywge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmFjdGlvbi5zZWxlY3RlZFxuICAgIH0pLCBfZGVmaW5lUHJvcGVydHkoX29wdGlvbiwgJyZbZGF0YS1mb2N1cz1cInRydWVcIl0nLCB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmhvdmVyXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfb3B0aW9uLCAnJjphY3RpdmUnLCB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLnNlbGVjdGVkXG4gICAgfSksIF9kZWZpbmVQcm9wZXJ0eShfb3B0aW9uLCAnJlthcmlhLWRpc2FibGVkPVwidHJ1ZVwiXScsIHtcbiAgICAgIG9wYWNpdHk6IHRoZW1lLnBhbGV0dGUuYWN0aW9uLmRpc2FibGVkT3BhY2l0eSxcbiAgICAgIHBvaW50ZXJFdmVudHM6ICdub25lJ1xuICAgIH0pLCBfb3B0aW9uKSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBncm91cCdzIGxhYmVsIGVsZW1lbnRzLiAqL1xuICAgIGdyb3VwTGFiZWw6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxuICAgICAgdG9wOiAtOFxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgZ3JvdXAncyB1bCBlbGVtZW50cy4gKi9cbiAgICBncm91cFVsOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgJyYgJG9wdGlvbic6IHtcbiAgICAgICAgcGFkZGluZ0xlZnQ6IDI0XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZnVuY3Rpb24gRGlzYWJsZVBvcnRhbChwcm9wcykge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICB2YXIgYW5jaG9yRWwgPSBwcm9wcy5hbmNob3JFbCxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFuY2hvckVsXCIsIFwib3BlblwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG90aGVyKTtcbn1cblxudmFyIF9yZWYgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDbG9zZUljb24sIHtcbiAgZm9udFNpemU6IFwic21hbGxcIlxufSk7XG5cbnZhciBfcmVmMiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFycm93RHJvcERvd25JY29uLCBudWxsKTtcblxudmFyIEF1dG9jb21wbGV0ZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIEF1dG9jb21wbGV0ZShwcm9wcywgcmVmKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gIHZhciBfcHJvcHMkYXV0b0NvbXBsZXRlID0gcHJvcHMuYXV0b0NvbXBsZXRlLFxuICAgICAgYXV0b0NvbXBsZXRlID0gX3Byb3BzJGF1dG9Db21wbGV0ZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYXV0b0NvbXBsZXRlLFxuICAgICAgX3Byb3BzJGF1dG9IaWdobGlnaHQgPSBwcm9wcy5hdXRvSGlnaGxpZ2h0LFxuICAgICAgYXV0b0hpZ2hsaWdodCA9IF9wcm9wcyRhdXRvSGlnaGxpZ2h0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhdXRvSGlnaGxpZ2h0LFxuICAgICAgX3Byb3BzJGF1dG9TZWxlY3QgPSBwcm9wcy5hdXRvU2VsZWN0LFxuICAgICAgYXV0b1NlbGVjdCA9IF9wcm9wcyRhdXRvU2VsZWN0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhdXRvU2VsZWN0LFxuICAgICAgX3Byb3BzJGJsdXJPblNlbGVjdCA9IHByb3BzLmJsdXJPblNlbGVjdCxcbiAgICAgIGJsdXJPblNlbGVjdCA9IF9wcm9wcyRibHVyT25TZWxlY3QgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGJsdXJPblNlbGVjdCxcbiAgICAgIENoaXBQcm9wcyA9IHByb3BzLkNoaXBQcm9wcyxcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNsZWFyT25CbHVyID0gcHJvcHMuY2xlYXJPbkJsdXIsXG4gICAgICBjbGVhck9uQmx1ciA9IF9wcm9wcyRjbGVhck9uQmx1ciA9PT0gdm9pZCAwID8gIXByb3BzLmZyZWVTb2xvIDogX3Byb3BzJGNsZWFyT25CbHVyLFxuICAgICAgX3Byb3BzJGNsZWFyT25Fc2NhcGUgPSBwcm9wcy5jbGVhck9uRXNjYXBlLFxuICAgICAgY2xlYXJPbkVzY2FwZSA9IF9wcm9wcyRjbGVhck9uRXNjYXBlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRjbGVhck9uRXNjYXBlLFxuICAgICAgX3Byb3BzJGNsZWFyVGV4dCA9IHByb3BzLmNsZWFyVGV4dCxcbiAgICAgIGNsZWFyVGV4dCA9IF9wcm9wcyRjbGVhclRleHQgPT09IHZvaWQgMCA/ICdDbGVhcicgOiBfcHJvcHMkY2xlYXJUZXh0LFxuICAgICAgX3Byb3BzJGNsb3NlSWNvbiA9IHByb3BzLmNsb3NlSWNvbixcbiAgICAgIGNsb3NlSWNvbiA9IF9wcm9wcyRjbG9zZUljb24gPT09IHZvaWQgMCA/IF9yZWYgOiBfcHJvcHMkY2xvc2VJY29uLFxuICAgICAgX3Byb3BzJGNsb3NlVGV4dCA9IHByb3BzLmNsb3NlVGV4dCxcbiAgICAgIGNsb3NlVGV4dCA9IF9wcm9wcyRjbG9zZVRleHQgPT09IHZvaWQgMCA/ICdDbG9zZScgOiBfcHJvcHMkY2xvc2VUZXh0LFxuICAgICAgX3Byb3BzJGRlYnVnID0gcHJvcHMuZGVidWcsXG4gICAgICBkZWJ1ZyA9IF9wcm9wcyRkZWJ1ZyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGVidWcsXG4gICAgICBfcHJvcHMkZGVmYXVsdFZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlLFxuICAgICAgZGVmYXVsdFZhbHVlID0gX3Byb3BzJGRlZmF1bHRWYWx1ZSA9PT0gdm9pZCAwID8gcHJvcHMubXVsdGlwbGUgPyBbXSA6IG51bGwgOiBfcHJvcHMkZGVmYXVsdFZhbHVlLFxuICAgICAgX3Byb3BzJGRpc2FibGVDbGVhcmFiID0gcHJvcHMuZGlzYWJsZUNsZWFyYWJsZSxcbiAgICAgIGRpc2FibGVDbGVhcmFibGUgPSBfcHJvcHMkZGlzYWJsZUNsZWFyYWIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVDbGVhcmFiLFxuICAgICAgX3Byb3BzJGRpc2FibGVDbG9zZU9uID0gcHJvcHMuZGlzYWJsZUNsb3NlT25TZWxlY3QsXG4gICAgICBkaXNhYmxlQ2xvc2VPblNlbGVjdCA9IF9wcm9wcyRkaXNhYmxlQ2xvc2VPbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUNsb3NlT24sXG4gICAgICBfcHJvcHMkZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkID0gX3Byb3BzJGRpc2FibGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZCxcbiAgICAgIF9wcm9wcyRkaXNhYmxlZEl0ZW1zRiA9IHByb3BzLmRpc2FibGVkSXRlbXNGb2N1c2FibGUsXG4gICAgICBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlID0gX3Byb3BzJGRpc2FibGVkSXRlbXNGID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZEl0ZW1zRixcbiAgICAgIF9wcm9wcyRkaXNhYmxlTGlzdFdyYSA9IHByb3BzLmRpc2FibGVMaXN0V3JhcCxcbiAgICAgIGRpc2FibGVMaXN0V3JhcCA9IF9wcm9wcyRkaXNhYmxlTGlzdFdyYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUxpc3RXcmEsXG4gICAgICBfcHJvcHMkZGlzYWJsZVBvcnRhbCA9IHByb3BzLmRpc2FibGVQb3J0YWwsXG4gICAgICBkaXNhYmxlUG9ydGFsID0gX3Byb3BzJGRpc2FibGVQb3J0YWwgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRpc2FibGVQb3J0YWwsXG4gICAgICBmaWx0ZXJPcHRpb25zID0gcHJvcHMuZmlsdGVyT3B0aW9ucyxcbiAgICAgIF9wcm9wcyRmaWx0ZXJTZWxlY3RlZCA9IHByb3BzLmZpbHRlclNlbGVjdGVkT3B0aW9ucyxcbiAgICAgIGZpbHRlclNlbGVjdGVkT3B0aW9ucyA9IF9wcm9wcyRmaWx0ZXJTZWxlY3RlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZmlsdGVyU2VsZWN0ZWQsXG4gICAgICBfcHJvcHMkZm9yY2VQb3B1cEljb24gPSBwcm9wcy5mb3JjZVBvcHVwSWNvbixcbiAgICAgIGZvcmNlUG9wdXBJY29uID0gX3Byb3BzJGZvcmNlUG9wdXBJY29uID09PSB2b2lkIDAgPyAnYXV0bycgOiBfcHJvcHMkZm9yY2VQb3B1cEljb24sXG4gICAgICBfcHJvcHMkZnJlZVNvbG8gPSBwcm9wcy5mcmVlU29sbyxcbiAgICAgIGZyZWVTb2xvID0gX3Byb3BzJGZyZWVTb2xvID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmcmVlU29sbyxcbiAgICAgIF9wcm9wcyRmdWxsV2lkdGggPSBwcm9wcy5mdWxsV2lkdGgsXG4gICAgICBmdWxsV2lkdGggPSBfcHJvcHMkZnVsbFdpZHRoID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRmdWxsV2lkdGgsXG4gICAgICBfcHJvcHMkZ2V0TGltaXRUYWdzVGUgPSBwcm9wcy5nZXRMaW1pdFRhZ3NUZXh0LFxuICAgICAgZ2V0TGltaXRUYWdzVGV4dCA9IF9wcm9wcyRnZXRMaW1pdFRhZ3NUZSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKG1vcmUpIHtcbiAgICByZXR1cm4gXCIrXCIuY29uY2F0KG1vcmUpO1xuICB9IDogX3Byb3BzJGdldExpbWl0VGFnc1RlLFxuICAgICAgZ2V0T3B0aW9uRGlzYWJsZWQgPSBwcm9wcy5nZXRPcHRpb25EaXNhYmxlZCxcbiAgICAgIF9wcm9wcyRnZXRPcHRpb25MYWJlbCA9IHByb3BzLmdldE9wdGlvbkxhYmVsLFxuICAgICAgZ2V0T3B0aW9uTGFiZWwgPSBfcHJvcHMkZ2V0T3B0aW9uTGFiZWwgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gOiBfcHJvcHMkZ2V0T3B0aW9uTGFiZWwsXG4gICAgICBnZXRPcHRpb25TZWxlY3RlZCA9IHByb3BzLmdldE9wdGlvblNlbGVjdGVkLFxuICAgICAgZ3JvdXBCeSA9IHByb3BzLmdyb3VwQnksXG4gICAgICBfcHJvcHMkaGFuZGxlSG9tZUVuZEsgPSBwcm9wcy5oYW5kbGVIb21lRW5kS2V5cyxcbiAgICAgIGhhbmRsZUhvbWVFbmRLZXlzID0gX3Byb3BzJGhhbmRsZUhvbWVFbmRLID09PSB2b2lkIDAgPyAhcHJvcHMuZnJlZVNvbG8gOiBfcHJvcHMkaGFuZGxlSG9tZUVuZEssXG4gICAgICBpZFByb3AgPSBwcm9wcy5pZCxcbiAgICAgIF9wcm9wcyRpbmNsdWRlSW5wdXRJbiA9IHByb3BzLmluY2x1ZGVJbnB1dEluTGlzdCxcbiAgICAgIGluY2x1ZGVJbnB1dEluTGlzdCA9IF9wcm9wcyRpbmNsdWRlSW5wdXRJbiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkaW5jbHVkZUlucHV0SW4sXG4gICAgICBpbnB1dFZhbHVlUHJvcCA9IHByb3BzLmlucHV0VmFsdWUsXG4gICAgICBfcHJvcHMkbGltaXRUYWdzID0gcHJvcHMubGltaXRUYWdzLFxuICAgICAgbGltaXRUYWdzID0gX3Byb3BzJGxpbWl0VGFncyA9PT0gdm9pZCAwID8gLTEgOiBfcHJvcHMkbGltaXRUYWdzLFxuICAgICAgX3Byb3BzJExpc3Rib3hDb21wb25lID0gcHJvcHMuTGlzdGJveENvbXBvbmVudCxcbiAgICAgIExpc3Rib3hDb21wb25lbnQgPSBfcHJvcHMkTGlzdGJveENvbXBvbmUgPT09IHZvaWQgMCA/ICd1bCcgOiBfcHJvcHMkTGlzdGJveENvbXBvbmUsXG4gICAgICBMaXN0Ym94UHJvcHMgPSBwcm9wcy5MaXN0Ym94UHJvcHMsXG4gICAgICBfcHJvcHMkbG9hZGluZyA9IHByb3BzLmxvYWRpbmcsXG4gICAgICBsb2FkaW5nID0gX3Byb3BzJGxvYWRpbmcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGxvYWRpbmcsXG4gICAgICBfcHJvcHMkbG9hZGluZ1RleHQgPSBwcm9wcy5sb2FkaW5nVGV4dCxcbiAgICAgIGxvYWRpbmdUZXh0ID0gX3Byb3BzJGxvYWRpbmdUZXh0ID09PSB2b2lkIDAgPyAnTG9hZGluZ+KApicgOiBfcHJvcHMkbG9hZGluZ1RleHQsXG4gICAgICBfcHJvcHMkbXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZSxcbiAgICAgIG11bHRpcGxlID0gX3Byb3BzJG11bHRpcGxlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRtdWx0aXBsZSxcbiAgICAgIF9wcm9wcyRub09wdGlvbnNUZXh0ID0gcHJvcHMubm9PcHRpb25zVGV4dCxcbiAgICAgIG5vT3B0aW9uc1RleHQgPSBfcHJvcHMkbm9PcHRpb25zVGV4dCA9PT0gdm9pZCAwID8gJ05vIG9wdGlvbnMnIDogX3Byb3BzJG5vT3B0aW9uc1RleHQsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbkhpZ2hsaWdodENoYW5nZSA9IHByb3BzLm9uSGlnaGxpZ2h0Q2hhbmdlLFxuICAgICAgb25JbnB1dENoYW5nZSA9IHByb3BzLm9uSW5wdXRDaGFuZ2UsXG4gICAgICBvbk9wZW4gPSBwcm9wcy5vbk9wZW4sXG4gICAgICBvcGVuID0gcHJvcHMub3BlbixcbiAgICAgIF9wcm9wcyRvcGVuT25Gb2N1cyA9IHByb3BzLm9wZW5PbkZvY3VzLFxuICAgICAgb3Blbk9uRm9jdXMgPSBfcHJvcHMkb3Blbk9uRm9jdXMgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJG9wZW5PbkZvY3VzLFxuICAgICAgX3Byb3BzJG9wZW5UZXh0ID0gcHJvcHMub3BlblRleHQsXG4gICAgICBvcGVuVGV4dCA9IF9wcm9wcyRvcGVuVGV4dCA9PT0gdm9pZCAwID8gJ09wZW4nIDogX3Byb3BzJG9wZW5UZXh0LFxuICAgICAgb3B0aW9ucyA9IHByb3BzLm9wdGlvbnMsXG4gICAgICBfcHJvcHMkUGFwZXJDb21wb25lbnQgPSBwcm9wcy5QYXBlckNvbXBvbmVudCxcbiAgICAgIFBhcGVyQ29tcG9uZW50ID0gX3Byb3BzJFBhcGVyQ29tcG9uZW50ID09PSB2b2lkIDAgPyBQYXBlciA6IF9wcm9wcyRQYXBlckNvbXBvbmVudCxcbiAgICAgIF9wcm9wcyRQb3BwZXJDb21wb25lbiA9IHByb3BzLlBvcHBlckNvbXBvbmVudCxcbiAgICAgIFBvcHBlckNvbXBvbmVudFByb3AgPSBfcHJvcHMkUG9wcGVyQ29tcG9uZW4gPT09IHZvaWQgMCA/IFBvcHBlciA6IF9wcm9wcyRQb3BwZXJDb21wb25lbixcbiAgICAgIF9wcm9wcyRwb3B1cEljb24gPSBwcm9wcy5wb3B1cEljb24sXG4gICAgICBwb3B1cEljb24gPSBfcHJvcHMkcG9wdXBJY29uID09PSB2b2lkIDAgPyBfcmVmMiA6IF9wcm9wcyRwb3B1cEljb24sXG4gICAgICByZW5kZXJHcm91cFByb3AgPSBwcm9wcy5yZW5kZXJHcm91cCxcbiAgICAgIHJlbmRlcklucHV0ID0gcHJvcHMucmVuZGVySW5wdXQsXG4gICAgICByZW5kZXJPcHRpb25Qcm9wID0gcHJvcHMucmVuZGVyT3B0aW9uLFxuICAgICAgcmVuZGVyVGFncyA9IHByb3BzLnJlbmRlclRhZ3MsXG4gICAgICBfcHJvcHMkc2VsZWN0T25Gb2N1cyA9IHByb3BzLnNlbGVjdE9uRm9jdXMsXG4gICAgICBzZWxlY3RPbkZvY3VzID0gX3Byb3BzJHNlbGVjdE9uRm9jdXMgPT09IHZvaWQgMCA/ICFwcm9wcy5mcmVlU29sbyA6IF9wcm9wcyRzZWxlY3RPbkZvY3VzLFxuICAgICAgX3Byb3BzJHNpemUgPSBwcm9wcy5zaXplLFxuICAgICAgc2l6ZSA9IF9wcm9wcyRzaXplID09PSB2b2lkIDAgPyAnbWVkaXVtJyA6IF9wcm9wcyRzaXplLFxuICAgICAgdmFsdWVQcm9wID0gcHJvcHMudmFsdWUsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYXV0b0NvbXBsZXRlXCIsIFwiYXV0b0hpZ2hsaWdodFwiLCBcImF1dG9TZWxlY3RcIiwgXCJibHVyT25TZWxlY3RcIiwgXCJDaGlwUHJvcHNcIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY2xlYXJPbkJsdXJcIiwgXCJjbGVhck9uRXNjYXBlXCIsIFwiY2xlYXJUZXh0XCIsIFwiY2xvc2VJY29uXCIsIFwiY2xvc2VUZXh0XCIsIFwiZGVidWdcIiwgXCJkZWZhdWx0VmFsdWVcIiwgXCJkaXNhYmxlQ2xlYXJhYmxlXCIsIFwiZGlzYWJsZUNsb3NlT25TZWxlY3RcIiwgXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkSXRlbXNGb2N1c2FibGVcIiwgXCJkaXNhYmxlTGlzdFdyYXBcIiwgXCJkaXNhYmxlUG9ydGFsXCIsIFwiZmlsdGVyT3B0aW9uc1wiLCBcImZpbHRlclNlbGVjdGVkT3B0aW9uc1wiLCBcImZvcmNlUG9wdXBJY29uXCIsIFwiZnJlZVNvbG9cIiwgXCJmdWxsV2lkdGhcIiwgXCJnZXRMaW1pdFRhZ3NUZXh0XCIsIFwiZ2V0T3B0aW9uRGlzYWJsZWRcIiwgXCJnZXRPcHRpb25MYWJlbFwiLCBcImdldE9wdGlvblNlbGVjdGVkXCIsIFwiZ3JvdXBCeVwiLCBcImhhbmRsZUhvbWVFbmRLZXlzXCIsIFwiaWRcIiwgXCJpbmNsdWRlSW5wdXRJbkxpc3RcIiwgXCJpbnB1dFZhbHVlXCIsIFwibGltaXRUYWdzXCIsIFwiTGlzdGJveENvbXBvbmVudFwiLCBcIkxpc3Rib3hQcm9wc1wiLCBcImxvYWRpbmdcIiwgXCJsb2FkaW5nVGV4dFwiLCBcIm11bHRpcGxlXCIsIFwibm9PcHRpb25zVGV4dFwiLCBcIm9uQ2hhbmdlXCIsIFwib25DbG9zZVwiLCBcIm9uSGlnaGxpZ2h0Q2hhbmdlXCIsIFwib25JbnB1dENoYW5nZVwiLCBcIm9uT3BlblwiLCBcIm9wZW5cIiwgXCJvcGVuT25Gb2N1c1wiLCBcIm9wZW5UZXh0XCIsIFwib3B0aW9uc1wiLCBcIlBhcGVyQ29tcG9uZW50XCIsIFwiUG9wcGVyQ29tcG9uZW50XCIsIFwicG9wdXBJY29uXCIsIFwicmVuZGVyR3JvdXBcIiwgXCJyZW5kZXJJbnB1dFwiLCBcInJlbmRlck9wdGlvblwiLCBcInJlbmRlclRhZ3NcIiwgXCJzZWxlY3RPbkZvY3VzXCIsIFwic2l6ZVwiLCBcInZhbHVlXCJdKTtcbiAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXG5cbiAgdmFyIFBvcHBlckNvbXBvbmVudCA9IGRpc2FibGVQb3J0YWwgPyBEaXNhYmxlUG9ydGFsIDogUG9wcGVyQ29tcG9uZW50UHJvcDtcblxuICB2YXIgX3VzZUF1dG9jb21wbGV0ZSA9IHVzZUF1dG9jb21wbGV0ZShfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICBjb21wb25lbnROYW1lOiAnQXV0b2NvbXBsZXRlJ1xuICB9KSksXG4gICAgICBnZXRSb290UHJvcHMgPSBfdXNlQXV0b2NvbXBsZXRlLmdldFJvb3RQcm9wcyxcbiAgICAgIGdldElucHV0UHJvcHMgPSBfdXNlQXV0b2NvbXBsZXRlLmdldElucHV0UHJvcHMsXG4gICAgICBnZXRJbnB1dExhYmVsUHJvcHMgPSBfdXNlQXV0b2NvbXBsZXRlLmdldElucHV0TGFiZWxQcm9wcyxcbiAgICAgIGdldFBvcHVwSW5kaWNhdG9yUHJvcHMgPSBfdXNlQXV0b2NvbXBsZXRlLmdldFBvcHVwSW5kaWNhdG9yUHJvcHMsXG4gICAgICBnZXRDbGVhclByb3BzID0gX3VzZUF1dG9jb21wbGV0ZS5nZXRDbGVhclByb3BzLFxuICAgICAgZ2V0VGFnUHJvcHMgPSBfdXNlQXV0b2NvbXBsZXRlLmdldFRhZ1Byb3BzLFxuICAgICAgZ2V0TGlzdGJveFByb3BzID0gX3VzZUF1dG9jb21wbGV0ZS5nZXRMaXN0Ym94UHJvcHMsXG4gICAgICBnZXRPcHRpb25Qcm9wcyA9IF91c2VBdXRvY29tcGxldGUuZ2V0T3B0aW9uUHJvcHMsXG4gICAgICB2YWx1ZSA9IF91c2VBdXRvY29tcGxldGUudmFsdWUsXG4gICAgICBkaXJ0eSA9IF91c2VBdXRvY29tcGxldGUuZGlydHksXG4gICAgICBpZCA9IF91c2VBdXRvY29tcGxldGUuaWQsXG4gICAgICBwb3B1cE9wZW4gPSBfdXNlQXV0b2NvbXBsZXRlLnBvcHVwT3BlbixcbiAgICAgIGZvY3VzZWQgPSBfdXNlQXV0b2NvbXBsZXRlLmZvY3VzZWQsXG4gICAgICBmb2N1c2VkVGFnID0gX3VzZUF1dG9jb21wbGV0ZS5mb2N1c2VkVGFnLFxuICAgICAgYW5jaG9yRWwgPSBfdXNlQXV0b2NvbXBsZXRlLmFuY2hvckVsLFxuICAgICAgc2V0QW5jaG9yRWwgPSBfdXNlQXV0b2NvbXBsZXRlLnNldEFuY2hvckVsLFxuICAgICAgaW5wdXRWYWx1ZSA9IF91c2VBdXRvY29tcGxldGUuaW5wdXRWYWx1ZSxcbiAgICAgIGdyb3VwZWRPcHRpb25zID0gX3VzZUF1dG9jb21wbGV0ZS5ncm91cGVkT3B0aW9ucztcblxuICB2YXIgc3RhcnRBZG9ybm1lbnQ7XG5cbiAgaWYgKG11bHRpcGxlICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgZ2V0Q3VzdG9taXplZFRhZ1Byb3BzID0gZnVuY3Rpb24gZ2V0Q3VzdG9taXplZFRhZ1Byb3BzKHBhcmFtcykge1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMudGFnLCBzaXplID09PSAnc21hbGwnICYmIGNsYXNzZXMudGFnU2l6ZVNtYWxsKSxcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gICAgICB9LCBnZXRUYWdQcm9wcyhwYXJhbXMpKTtcbiAgICB9O1xuXG4gICAgaWYgKHJlbmRlclRhZ3MpIHtcbiAgICAgIHN0YXJ0QWRvcm5tZW50ID0gcmVuZGVyVGFncyh2YWx1ZSwgZ2V0Q3VzdG9taXplZFRhZ1Byb3BzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRBZG9ybm1lbnQgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKG9wdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENoaXAsIF9leHRlbmRzKHtcbiAgICAgICAgICBsYWJlbDogZ2V0T3B0aW9uTGFiZWwob3B0aW9uKSxcbiAgICAgICAgICBzaXplOiBzaXplXG4gICAgICAgIH0sIGdldEN1c3RvbWl6ZWRUYWdQcm9wcyh7XG4gICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgIH0pLCBDaGlwUHJvcHMpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGlmIChsaW1pdFRhZ3MgPiAtMSAmJiBBcnJheS5pc0FycmF5KHN0YXJ0QWRvcm5tZW50KSkge1xuICAgIHZhciBtb3JlID0gc3RhcnRBZG9ybm1lbnQubGVuZ3RoIC0gbGltaXRUYWdzO1xuXG4gICAgaWYgKCFmb2N1c2VkICYmIG1vcmUgPiAwKSB7XG4gICAgICBzdGFydEFkb3JubWVudCA9IHN0YXJ0QWRvcm5tZW50LnNwbGljZSgwLCBsaW1pdFRhZ3MpO1xuICAgICAgc3RhcnRBZG9ybm1lbnQucHVzaCggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLnRhZyxcbiAgICAgICAga2V5OiBzdGFydEFkb3JubWVudC5sZW5ndGhcbiAgICAgIH0sIGdldExpbWl0VGFnc1RleHQobW9yZSkpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZGVmYXVsdFJlbmRlckdyb3VwID0gZnVuY3Rpb24gZGVmYXVsdFJlbmRlckdyb3VwKHBhcmFtcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgIGtleTogcGFyYW1zLmtleVxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KExpc3RTdWJoZWFkZXIsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5ncm91cExhYmVsLFxuICAgICAgY29tcG9uZW50OiBcImRpdlwiXG4gICAgfSwgcGFyYW1zLmdyb3VwKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMuZ3JvdXBVbFxuICAgIH0sIHBhcmFtcy5jaGlsZHJlbikpO1xuICB9O1xuXG4gIHZhciByZW5kZXJHcm91cCA9IHJlbmRlckdyb3VwUHJvcCB8fCBkZWZhdWx0UmVuZGVyR3JvdXA7XG4gIHZhciByZW5kZXJPcHRpb24gPSByZW5kZXJPcHRpb25Qcm9wIHx8IGdldE9wdGlvbkxhYmVsO1xuXG4gIHZhciByZW5kZXJMaXN0T3B0aW9uID0gZnVuY3Rpb24gcmVuZGVyTGlzdE9wdGlvbihvcHRpb24sIGluZGV4KSB7XG4gICAgdmFyIG9wdGlvblByb3BzID0gZ2V0T3B0aW9uUHJvcHMoe1xuICAgICAgb3B0aW9uOiBvcHRpb24sXG4gICAgICBpbmRleDogaW5kZXhcbiAgICB9KTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCBfZXh0ZW5kcyh7fSwgb3B0aW9uUHJvcHMsIHtcbiAgICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5vcHRpb25cbiAgICB9KSwgcmVuZGVyT3B0aW9uKG9wdGlvbiwge1xuICAgICAgc2VsZWN0ZWQ6IG9wdGlvblByb3BzWydhcmlhLXNlbGVjdGVkJ10sXG4gICAgICBpbnB1dFZhbHVlOiBpbnB1dFZhbHVlXG4gICAgfSkpO1xuICB9O1xuXG4gIHZhciBoYXNDbGVhckljb24gPSAhZGlzYWJsZUNsZWFyYWJsZSAmJiAhZGlzYWJsZWQ7XG4gIHZhciBoYXNQb3B1cEljb24gPSAoIWZyZWVTb2xvIHx8IGZvcmNlUG9wdXBJY29uID09PSB0cnVlKSAmJiBmb3JjZVBvcHVwSWNvbiAhPT0gZmFsc2U7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzTmFtZSwgZm9jdXNlZCAmJiBjbGFzc2VzLmZvY3VzZWQsIGZ1bGxXaWR0aCAmJiBjbGFzc2VzLmZ1bGxXaWR0aCwgaGFzQ2xlYXJJY29uICYmIGNsYXNzZXMuaGFzQ2xlYXJJY29uLCBoYXNQb3B1cEljb24gJiYgY2xhc3Nlcy5oYXNQb3B1cEljb24pXG4gIH0sIGdldFJvb3RQcm9wcyhvdGhlcikpLCByZW5kZXJJbnB1dCh7XG4gICAgaWQ6IGlkLFxuICAgIGRpc2FibGVkOiBkaXNhYmxlZCxcbiAgICBmdWxsV2lkdGg6IHRydWUsXG4gICAgc2l6ZTogc2l6ZSA9PT0gJ3NtYWxsJyA/ICdzbWFsbCcgOiB1bmRlZmluZWQsXG4gICAgSW5wdXRMYWJlbFByb3BzOiBnZXRJbnB1dExhYmVsUHJvcHMoKSxcbiAgICBJbnB1dFByb3BzOiB7XG4gICAgICByZWY6IHNldEFuY2hvckVsLFxuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLmlucHV0Um9vdCxcbiAgICAgIHN0YXJ0QWRvcm5tZW50OiBzdGFydEFkb3JubWVudCxcbiAgICAgIGVuZEFkb3JubWVudDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzZXMuZW5kQWRvcm5tZW50XG4gICAgICB9LCBoYXNDbGVhckljb24gPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChJY29uQnV0dG9uLCBfZXh0ZW5kcyh7fSwgZ2V0Q2xlYXJQcm9wcygpLCB7XG4gICAgICAgIFwiYXJpYS1sYWJlbFwiOiBjbGVhclRleHQsXG4gICAgICAgIHRpdGxlOiBjbGVhclRleHQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmNsZWFySW5kaWNhdG9yLCBkaXJ0eSAmJiBjbGFzc2VzLmNsZWFySW5kaWNhdG9yRGlydHkpXG4gICAgICB9KSwgY2xvc2VJY29uKSA6IG51bGwsIGhhc1BvcHVwSWNvbiA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEljb25CdXR0b24sIF9leHRlbmRzKHt9LCBnZXRQb3B1cEluZGljYXRvclByb3BzKCksIHtcbiAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkLFxuICAgICAgICBcImFyaWEtbGFiZWxcIjogcG9wdXBPcGVuID8gY2xvc2VUZXh0IDogb3BlblRleHQsXG4gICAgICAgIHRpdGxlOiBwb3B1cE9wZW4gPyBjbG9zZVRleHQgOiBvcGVuVGV4dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucG9wdXBJbmRpY2F0b3IsIHBvcHVwT3BlbiAmJiBjbGFzc2VzLnBvcHVwSW5kaWNhdG9yT3BlbilcbiAgICAgIH0pLCBwb3B1cEljb24pIDogbnVsbClcbiAgICB9LFxuICAgIGlucHV0UHJvcHM6IF9leHRlbmRzKHtcbiAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmlucHV0LCBmb2N1c2VkVGFnID09PSAtMSAmJiBjbGFzc2VzLmlucHV0Rm9jdXNlZCksXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWRcbiAgICB9LCBnZXRJbnB1dFByb3BzKCkpXG4gIH0pKSwgcG9wdXBPcGVuICYmIGFuY2hvckVsID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUG9wcGVyQ29tcG9uZW50LCB7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucG9wcGVyLCBkaXNhYmxlUG9ydGFsICYmIGNsYXNzZXMucG9wcGVyRGlzYWJsZVBvcnRhbCksXG4gICAgc3R5bGU6IHtcbiAgICAgIHdpZHRoOiBhbmNob3JFbCA/IGFuY2hvckVsLmNsaWVudFdpZHRoIDogbnVsbFxuICAgIH0sXG4gICAgcm9sZTogXCJwcmVzZW50YXRpb25cIixcbiAgICBhbmNob3JFbDogYW5jaG9yRWwsXG4gICAgb3BlbjogdHJ1ZVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQYXBlckNvbXBvbmVudCwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5wYXBlclxuICB9LCBsb2FkaW5nICYmIGdyb3VwZWRPcHRpb25zLmxlbmd0aCA9PT0gMCA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMubG9hZGluZ1xuICB9LCBsb2FkaW5nVGV4dCkgOiBudWxsLCBncm91cGVkT3B0aW9ucy5sZW5ndGggPT09IDAgJiYgIWZyZWVTb2xvICYmICFsb2FkaW5nID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5ub09wdGlvbnNcbiAgfSwgbm9PcHRpb25zVGV4dCkgOiBudWxsLCBncm91cGVkT3B0aW9ucy5sZW5ndGggPiAwID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdGJveENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5saXN0Ym94XG4gIH0sIGdldExpc3Rib3hQcm9wcygpLCBMaXN0Ym94UHJvcHMpLCBncm91cGVkT3B0aW9ucy5tYXAoZnVuY3Rpb24gKG9wdGlvbiwgaW5kZXgpIHtcbiAgICBpZiAoZ3JvdXBCeSkge1xuICAgICAgcmV0dXJuIHJlbmRlckdyb3VwKHtcbiAgICAgICAga2V5OiBvcHRpb24ua2V5LFxuICAgICAgICBncm91cDogb3B0aW9uLmdyb3VwLFxuICAgICAgICBjaGlsZHJlbjogb3B0aW9uLm9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRpb24yLCBpbmRleDIpIHtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyTGlzdE9wdGlvbihvcHRpb24yLCBvcHRpb24uaW5kZXggKyBpbmRleDIpO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlckxpc3RPcHRpb24ob3B0aW9uLCBpbmRleCk7XG4gIH0pKSA6IG51bGwpKSA6IG51bGwpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBBdXRvY29tcGxldGUucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgcG9ydGlvbiBvZiB0aGUgc2VsZWN0ZWQgc3VnZ2VzdGlvbiB0aGF0IGhhcyBub3QgYmVlbiB0eXBlZCBieSB0aGUgdXNlcixcbiAgICoga25vd24gYXMgdGhlIGNvbXBsZXRpb24gc3RyaW5nLCBhcHBlYXJzIGlubGluZSBhZnRlciB0aGUgaW5wdXQgY3Vyc29yIGluIHRoZSB0ZXh0Ym94LlxuICAgKiBUaGUgaW5saW5lIGNvbXBsZXRpb24gc3RyaW5nIGlzIHZpc3VhbGx5IGhpZ2hsaWdodGVkIGFuZCBoYXMgYSBzZWxlY3RlZCBzdGF0ZS5cbiAgICovXG4gIGF1dG9Db21wbGV0ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGZpcnN0IG9wdGlvbiBpcyBhdXRvbWF0aWNhbGx5IGhpZ2hsaWdodGVkLlxuICAgKi9cbiAgYXV0b0hpZ2hsaWdodDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIHNlbGVjdGVkIG9wdGlvbiBiZWNvbWVzIHRoZSB2YWx1ZSBvZiB0aGUgaW5wdXRcbiAgICogd2hlbiB0aGUgQXV0b2NvbXBsZXRlIGxvc2VzIGZvY3VzIHVubGVzcyB0aGUgdXNlciBjaG9vc2VzXG4gICAqIGEgZGlmZmVyZW50IG9wdGlvbiBvciBjaGFuZ2VzIHRoZSBjaGFyYWN0ZXIgc3RyaW5nIGluIHRoZSBpbnB1dC5cbiAgICovXG4gIGF1dG9TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBDb250cm9sIGlmIHRoZSBpbnB1dCBzaG91bGQgYmUgYmx1cnJlZCB3aGVuIGFuIG9wdGlvbiBpcyBzZWxlY3RlZDpcbiAgICpcbiAgICogLSBgZmFsc2VgIHRoZSBpbnB1dCBpcyBub3QgYmx1cnJlZC5cbiAgICogLSBgdHJ1ZWAgdGhlIGlucHV0IGlzIGFsd2F5cyBibHVycmVkLlxuICAgKiAtIGB0b3VjaGAgdGhlIGlucHV0IGlzIGJsdXJyZWQgYWZ0ZXIgYSB0b3VjaCBldmVudC5cbiAgICogLSBgbW91c2VgIHRoZSBpbnB1dCBpcyBibHVycmVkIGFmdGVyIGEgbW91c2UgZXZlbnQuXG4gICAqL1xuICBibHVyT25TZWxlY3Q6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ21vdXNlJywgJ3RvdWNoJ10pLCBQcm9wVHlwZXMuYm9vbF0pLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYENoaXBgXSgvYXBpL2NoaXAvKSBlbGVtZW50LlxuICAgKi9cbiAgQ2hpcFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgaW5wdXQncyB0ZXh0IHdpbGwgYmUgY2xlYXJlZCBvbiBibHVyIGlmIG5vIHZhbHVlIGlzIHNlbGVjdGVkLlxuICAgKlxuICAgKiBTZXQgdG8gYHRydWVgIGlmIHlvdSB3YW50IHRvIGhlbHAgdGhlIHVzZXIgZW50ZXIgYSBuZXcgdmFsdWUuXG4gICAqIFNldCB0byBgZmFsc2VgIGlmIHlvdSB3YW50IHRvIGhlbHAgdGhlIHVzZXIgcmVzdW1lIGhpcyBzZWFyY2guXG4gICAqL1xuICBjbGVhck9uQmx1cjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgY2xlYXIgYWxsIHZhbHVlcyB3aGVuIHRoZSB1c2VyIHByZXNzZXMgZXNjYXBlIGFuZCB0aGUgcG9wdXAgaXMgY2xvc2VkLlxuICAgKi9cbiAgY2xlYXJPbkVzY2FwZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IHRleHQgZm9yIHRoZSAqY2xlYXIqIGljb24gYnV0dG9uLlxuICAgKlxuICAgKiBGb3IgbG9jYWxpemF0aW9uIHB1cnBvc2VzLCB5b3UgY2FuIHVzZSB0aGUgcHJvdmlkZWQgW3RyYW5zbGF0aW9uc10oL2d1aWRlcy9sb2NhbGl6YXRpb24vKS5cbiAgICovXG4gIGNsZWFyVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGljb24gdG8gZGlzcGxheSBpbiBwbGFjZSBvZiB0aGUgZGVmYXVsdCBjbG9zZSBpY29uLlxuICAgKi9cbiAgY2xvc2VJY29uOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgdGV4dCBmb3IgdGhlICpjbG9zZSBwb3B1cCogaWNvbiBidXR0b24uXG4gICAqXG4gICAqIEZvciBsb2NhbGl6YXRpb24gcHVycG9zZXMsIHlvdSBjYW4gdXNlIHRoZSBwcm92aWRlZCBbdHJhbnNsYXRpb25zXSgvZ3VpZGVzL2xvY2FsaXphdGlvbi8pLlxuICAgKi9cbiAgY2xvc2VUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBwb3B1cCB3aWxsIGlnbm9yZSB0aGUgYmx1ciBldmVudCBpZiB0aGUgaW5wdXQgaXMgZmlsbGVkLlxuICAgKiBZb3UgY2FuIGluc3BlY3QgdGhlIHBvcHVwIG1hcmt1cCB3aXRoIHlvdXIgYnJvd3NlciB0b29scy5cbiAgICogQ29uc2lkZXIgdGhpcyBvcHRpb24gd2hlbiB5b3UgbmVlZCB0byBjdXN0b21pemUgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGRlYnVnOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGRlZmF1bHQgaW5wdXQgdmFsdWUuIFVzZSB3aGVuIHRoZSBjb21wb25lbnQgaXMgbm90IGNvbnRyb2xsZWQuXG4gICAqL1xuICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5hbnksXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IGNhbid0IGJlIGNsZWFyZWQuXG4gICAqL1xuICBkaXNhYmxlQ2xlYXJhYmxlOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgcG9wdXAgd29uJ3QgY2xvc2Ugd2hlbiBhIHZhbHVlIGlzIHNlbGVjdGVkLlxuICAgKi9cbiAgZGlzYWJsZUNsb3NlT25TZWxlY3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCB3aWxsIGJlIGRpc2FibGVkLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHdpbGwgYWxsb3cgZm9jdXMgb24gZGlzYWJsZWQgaXRlbXMuXG4gICAqL1xuICBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgbGlzdCBib3ggaW4gdGhlIHBvcHVwIHdpbGwgbm90IHdyYXAgZm9jdXMuXG4gICAqL1xuICBkaXNhYmxlTGlzdFdyYXA6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBwb3J0YWwgYmVoYXZpb3IuXG4gICAqIFRoZSBjaGlsZHJlbiBzdGF5IHdpdGhpbiBpdCdzIHBhcmVudCBET00gaGllcmFyY2h5LlxuICAgKi9cbiAgZGlzYWJsZVBvcnRhbDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEEgZmlsdGVyIGZ1bmN0aW9uIHRoYXQgZGV0ZXJtaW5lcyB0aGUgb3B0aW9ucyB0aGF0IGFyZSBlbGlnaWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtUW119IG9wdGlvbnMgVGhlIG9wdGlvbnMgdG8gcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gc3RhdGUgVGhlIHN0YXRlIG9mIHRoZSBjb21wb25lbnQuXG4gICAqIEByZXR1cm5zIHtUW119XG4gICAqL1xuICBmaWx0ZXJPcHRpb25zOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCBoaWRlIHRoZSBzZWxlY3RlZCBvcHRpb25zIGZyb20gdGhlIGxpc3QgYm94LlxuICAgKi9cbiAgZmlsdGVyU2VsZWN0ZWRPcHRpb25zOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRm9yY2UgdGhlIHZpc2liaWxpdHkgZGlzcGxheSBvZiB0aGUgcG9wdXAgaWNvbi5cbiAgICovXG4gIGZvcmNlUG9wdXBJY29uOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub25lT2YoWydhdXRvJ10pLCBQcm9wVHlwZXMuYm9vbF0pLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBBdXRvY29tcGxldGUgaXMgZnJlZSBzb2xvLCBtZWFuaW5nIHRoYXQgdGhlIHVzZXIgaW5wdXQgaXMgbm90IGJvdW5kIHRvIHByb3ZpZGVkIG9wdGlvbnMuXG4gICAqL1xuICBmcmVlU29sbzogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGlucHV0IHdpbGwgdGFrZSB1cCB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgY29udGFpbmVyLlxuICAgKi9cbiAgZnVsbFdpZHRoOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIHRvIGRpc3BsYXkgd2hlbiB0aGUgdGFncyBhcmUgdHJ1bmNhdGVkIChgbGltaXRUYWdzYCkuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtb3JlIFRoZSBudW1iZXIgb2YgdHJ1bmNhdGVkIHRhZ3MuXG4gICAqIEByZXR1cm5zIHtSZWFjdE5vZGV9XG4gICAqL1xuICBnZXRMaW1pdFRhZ3NUZXh0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVXNlZCB0byBkZXRlcm1pbmUgdGhlIGRpc2FibGVkIHN0YXRlIGZvciBhIGdpdmVuIG9wdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtUfSBvcHRpb24gVGhlIG9wdGlvbiB0byB0ZXN0LlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGdldE9wdGlvbkRpc2FibGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogVXNlZCB0byBkZXRlcm1pbmUgdGhlIHN0cmluZyB2YWx1ZSBmb3IgYSBnaXZlbiBvcHRpb24uXG4gICAqIEl0J3MgdXNlZCB0byBmaWxsIHRoZSBpbnB1dCAoYW5kIHRoZSBsaXN0IGJveCBvcHRpb25zIGlmIGByZW5kZXJPcHRpb25gIGlzIG5vdCBwcm92aWRlZCkuXG4gICAqXG4gICAqIEBwYXJhbSB7VH0gb3B0aW9uXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBnZXRPcHRpb25MYWJlbDogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZGV0ZXJtaW5lIGlmIGFuIG9wdGlvbiBpcyBzZWxlY3RlZCwgY29uc2lkZXJpbmcgdGhlIGN1cnJlbnQgdmFsdWUuXG4gICAqIFVzZXMgc3RyaWN0IGVxdWFsaXR5IGJ5IGRlZmF1bHQuXG4gICAqXG4gICAqIEBwYXJhbSB7VH0gb3B0aW9uIFRoZSBvcHRpb24gdG8gdGVzdC5cbiAgICogQHBhcmFtIHtUfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdCBhZ2FpbnN0LlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGdldE9wdGlvblNlbGVjdGVkOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogSWYgcHJvdmlkZWQsIHRoZSBvcHRpb25zIHdpbGwgYmUgZ3JvdXBlZCB1bmRlciB0aGUgcmV0dXJuZWQgc3RyaW5nLlxuICAgKiBUaGUgZ3JvdXBCeSB2YWx1ZSBpcyBhbHNvIHVzZWQgYXMgdGhlIHRleHQgZm9yIGdyb3VwIGhlYWRpbmdzIHdoZW4gYHJlbmRlckdyb3VwYCBpcyBub3QgcHJvdmlkZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7VH0gb3B0aW9ucyBUaGUgb3B0aW9ucyB0byBncm91cC5cbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGdyb3VwQnk6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgaGFuZGxlcyB0aGUgXCJIb21lXCIgYW5kIFwiRW5kXCIga2V5cyB3aGVuIHRoZSBwb3B1cCBpcyBvcGVuLlxuICAgKiBJdCBzaG91bGQgbW92ZSBmb2N1cyB0byB0aGUgZmlyc3Qgb3B0aW9uIGFuZCBsYXN0IG9wdGlvbiwgcmVzcGVjdGl2ZWx5LlxuICAgKi9cbiAgaGFuZGxlSG9tZUVuZEtleXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGlzIHByb3AgaXMgdXNlZCB0byBoZWxwIGltcGxlbWVudCB0aGUgYWNjZXNzaWJpbGl0eSBsb2dpYy5cbiAgICogSWYgeW91IGRvbid0IHByb3ZpZGUgdGhpcyBwcm9wLiBJdCBmYWxscyBiYWNrIHRvIGEgcmFuZG9tbHkgZ2VuZXJhdGVkIGlkLlxuICAgKi9cbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGhpZ2hsaWdodCBjYW4gbW92ZSB0byB0aGUgaW5wdXQuXG4gICAqL1xuICBpbmNsdWRlSW5wdXRJbkxpc3Q6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBUaGUgaW5wdXQgdmFsdWUuXG4gICAqL1xuICBpbnB1dFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgdGFncyB0aGF0IHdpbGwgYmUgdmlzaWJsZSB3aGVuIG5vdCBmb2N1c2VkLlxuICAgKiBTZXQgYC0xYCB0byBkaXNhYmxlIHRoZSBsaW1pdC5cbiAgICovXG4gIGxpbWl0VGFnczogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIHRvIHJlbmRlciB0aGUgbGlzdGJveC5cbiAgICovXG4gIExpc3Rib3hDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgTGlzdGJveCBlbGVtZW50LlxuICAgKi9cbiAgTGlzdGJveFByb3BzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjb21wb25lbnQgaXMgaW4gYSBsb2FkaW5nIHN0YXRlLlxuICAgKi9cbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRleHQgdG8gZGlzcGxheSB3aGVuIGluIGEgbG9hZGluZyBzdGF0ZS5cbiAgICpcbiAgICogRm9yIGxvY2FsaXphdGlvbiBwdXJwb3NlcywgeW91IGNhbiB1c2UgdGhlIHByb3ZpZGVkIFt0cmFuc2xhdGlvbnNdKC9ndWlkZXMvbG9jYWxpemF0aW9uLykuXG4gICAqL1xuICBsb2FkaW5nVGV4dDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgYHZhbHVlYCBtdXN0IGJlIGFuIGFycmF5IGFuZCB0aGUgbWVudSB3aWxsIHN1cHBvcnQgbXVsdGlwbGUgc2VsZWN0aW9ucy5cbiAgICovXG4gIG11bHRpcGxlOiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuYm9vbCxcblxuICAvKipcbiAgICogVGV4dCB0byBkaXNwbGF5IHdoZW4gdGhlcmUgYXJlIG5vIG9wdGlvbnMuXG4gICAqXG4gICAqIEZvciBsb2NhbGl6YXRpb24gcHVycG9zZXMsIHlvdSBjYW4gdXNlIHRoZSBwcm92aWRlZCBbdHJhbnNsYXRpb25zXSgvZ3VpZGVzL2xvY2FsaXphdGlvbi8pLlxuICAgKi9cbiAgbm9PcHRpb25zVGV4dDogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBUaGUgZXZlbnQgc291cmNlIG9mIHRoZSBjYWxsYmFjay5cbiAgICogQHBhcmFtIHtUfFRbXX0gdmFsdWUgVGhlIG5ldyB2YWx1ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIE9uZSBvZiBcImNyZWF0ZS1vcHRpb25cIiwgXCJzZWxlY3Qtb3B0aW9uXCIsIFwicmVtb3ZlLW9wdGlvblwiLCBcImJsdXJcIiBvciBcImNsZWFyXCIuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHBvcHVwIHJlcXVlc3RzIHRvIGJlIGNsb3NlZC5cbiAgICogVXNlIGluIGNvbnRyb2xsZWQgbW9kZSAoc2VlIG9wZW4pLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gQ2FuIGJlOiBgXCJ0b2dnbGVJbnB1dFwiYCwgYFwiZXNjYXBlXCJgLCBgXCJzZWxlY3Qtb3B0aW9uXCJgLCBgXCJibHVyXCJgLlxuICAgKi9cbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIGhpZ2hsaWdodCBvcHRpb24gY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IFRoZSBldmVudCBzb3VyY2Ugb2YgdGhlIGNhbGxiYWNrLlxuICAgKiBAcGFyYW0ge1R9IG9wdGlvbiBUaGUgaGlnaGxpZ2h0ZWQgb3B0aW9uLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIENhbiBiZTogYFwia2V5Ym9hcmRcImAsIGBcImF1dG9cImAsIGBcIm1vdXNlXCJgLlxuICAgKi9cbiAgb25IaWdobGlnaHRDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBmaXJlZCB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBjaGFuZ2VzLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgbmV3IHZhbHVlIG9mIHRoZSB0ZXh0IGlucHV0LlxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uIENhbiBiZTogYFwiaW5wdXRcImAgKHVzZXIgaW5wdXQpLCBgXCJyZXNldFwiYCAocHJvZ3JhbW1hdGljIGNoYW5nZSksIGBcImNsZWFyXCJgLlxuICAgKi9cbiAgb25JbnB1dENoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGZpcmVkIHdoZW4gdGhlIHBvcHVwIHJlcXVlc3RzIHRvIGJlIG9wZW5lZC5cbiAgICogVXNlIGluIGNvbnRyb2xsZWQgbW9kZSAoc2VlIG9wZW4pLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgVGhlIGV2ZW50IHNvdXJjZSBvZiB0aGUgY2FsbGJhY2suXG4gICAqL1xuICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDb250cm9sIHRoZSBwb3B1cGAgb3BlbiBzdGF0ZS5cbiAgICovXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBwb3B1cCB3aWxsIG9wZW4gb24gaW5wdXQgZm9jdXMuXG4gICAqL1xuICBvcGVuT25Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IHRleHQgZm9yIHRoZSAqb3BlbiBwb3B1cCogaWNvbiBidXR0b24uXG4gICAqXG4gICAqIEZvciBsb2NhbGl6YXRpb24gcHVycG9zZXMsIHlvdSBjYW4gdXNlIHRoZSBwcm92aWRlZCBbdHJhbnNsYXRpb25zXSgvZ3VpZGVzL2xvY2FsaXphdGlvbi8pLlxuICAgKi9cbiAgb3BlblRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIG9wdGlvbnMuXG4gICAqL1xuICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIHRvIHJlbmRlciB0aGUgYm9keSBvZiB0aGUgcG9wdXAuXG4gICAqL1xuICBQYXBlckNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgdG8gcG9zaXRpb24gdGhlIHBvcHVwLlxuICAgKi9cbiAgUG9wcGVyQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIFRoZSBpY29uIHRvIGRpc3BsYXkgaW4gcGxhY2Ugb2YgdGhlIGRlZmF1bHQgcG9wdXAgaWNvbi5cbiAgICovXG4gIHBvcHVwSWNvbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgZ3JvdXAuXG4gICAqXG4gICAqIEBwYXJhbSB7YW55fSBvcHRpb24gVGhlIGdyb3VwIHRvIHJlbmRlci5cbiAgICogQHJldHVybnMge1JlYWN0Tm9kZX1cbiAgICovXG4gIHJlbmRlckdyb3VwOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBpbnB1dC5cbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtc1xuICAgKiBAcmV0dXJucyB7UmVhY3ROb2RlfVxuICAgKi9cbiAgcmVuZGVySW5wdXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgb3B0aW9uLCB1c2UgYGdldE9wdGlvbkxhYmVsYCBieSBkZWZhdWx0LlxuICAgKlxuICAgKiBAcGFyYW0ge1R9IG9wdGlvbiBUaGUgb3B0aW9uIHRvIHJlbmRlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IHN0YXRlIFRoZSBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKiBAcmV0dXJucyB7UmVhY3ROb2RlfVxuICAgKi9cbiAgcmVuZGVyT3B0aW9uOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogUmVuZGVyIHRoZSBzZWxlY3RlZCB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtUW119IHZhbHVlIFRoZSBgdmFsdWVgIHByb3ZpZGVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIEBwYXJhbSB7ZnVuY3Rpb259IGdldFRhZ1Byb3BzIEEgdGFnIHByb3BzIGdldHRlci5cbiAgICogQHJldHVybnMge1JlYWN0Tm9kZX1cbiAgICovXG4gIHJlbmRlclRhZ3M6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBpbnB1dCdzIHRleHQgd2lsbCBiZSBzZWxlY3RlZCBvbiBmb2N1cy5cbiAgICogSXQgaGVscHMgdGhlIHVzZXIgY2xlYXIgdGhlIHNlbGVjdGVkIHZhbHVlLlxuICAgKi9cbiAgc2VsZWN0T25Gb2N1czogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFRoZSBzaXplIG9mIHRoZSBhdXRvY29tcGxldGUuXG4gICAqL1xuICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydtZWRpdW0nLCAnc21hbGwnXSksXG5cbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBvZiB0aGUgYXV0b2NvbXBsZXRlLlxuICAgKlxuICAgKiBUaGUgdmFsdWUgbXVzdCBoYXZlIHJlZmVyZW5jZSBlcXVhbGl0eSB3aXRoIHRoZSBvcHRpb24gaW4gb3JkZXIgdG8gYmUgc2VsZWN0ZWQuXG4gICAqIFlvdSBjYW4gY3VzdG9taXplIHRoZSBlcXVhbGl0eSBiZWhhdmlvciB3aXRoIHRoZSBgZ2V0T3B0aW9uU2VsZWN0ZWRgIHByb3AuXG4gICAqL1xuICB2YWx1ZTogUHJvcFR5cGVzLmFueVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlBdXRvY29tcGxldGUnXG59KShBdXRvY29tcGxldGUpOyIsImV4cG9ydCB7IGRlZmF1bHQsIGNyZWF0ZUZpbHRlck9wdGlvbnMgfSBmcm9tICcuL0F1dG9jb21wbGV0ZSc7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlU3ZnSWNvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJztcbi8qKlxuICogQGlnbm9yZSAtIGludGVybmFsIGNvbXBvbmVudC5cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTdmdJY29uKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk03IDEwbDUgNSA1LTV6XCJcbn0pLCAnQXJyb3dEcm9wRG93bicpOyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVN2Z0ljb24gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91dGlscyc7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTkgNi40MUwxNy41OSA1IDEyIDEwLjU5IDYuNDEgNSA1IDYuNDEgMTAuNTkgMTIgNSAxNy41OSA2LjQxIDE5IDEyIDEzLjQxIDE3LjU5IDE5IDE5IDE3LjU5IDEzLjQxIDEyelwiXG59KSwgJ0Nsb3NlJyk7IiwiZXhwb3J0IHsgZGVmYXVsdCwgY3JlYXRlRmlsdGVyT3B0aW9ucyB9IGZyb20gJy4vdXNlQXV0b2NvbXBsZXRlJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfc2xpY2VkVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheVwiO1xuaW1wb3J0IF90eXBlb2YgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZlwiO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zdGFudC1jb25kaXRpb24gKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHNldFJlZiwgdXNlRXZlbnRDYWxsYmFjaywgdXNlQ29udHJvbGxlZCwgdW5zdGFibGVfdXNlSWQgYXMgdXNlSWQgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS91dGlscyc7IC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk5MDkwNC9yZW1vdmUtYWNjZW50cy1kaWFjcml0aWNzLWluLWEtc3RyaW5nLWluLWphdmFzY3JpcHRcbi8vIEdpdmUgdXAgb24gSUUgMTEgc3VwcG9ydCBmb3IgdGhpcyBmZWF0dXJlXG5cbmZ1bmN0aW9uIHN0cmlwRGlhY3JpdGljcyhzdHJpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBzdHJpbmcubm9ybWFsaXplICE9PSAndW5kZWZpbmVkJyA/IHN0cmluZy5ub3JtYWxpemUoJ05GRCcpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKSA6IHN0cmluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbHRlck9wdGlvbnMoKSB7XG4gIHZhciBjb25maWcgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgX2NvbmZpZyRpZ25vcmVBY2NlbnRzID0gY29uZmlnLmlnbm9yZUFjY2VudHMsXG4gICAgICBpZ25vcmVBY2NlbnRzID0gX2NvbmZpZyRpZ25vcmVBY2NlbnRzID09PSB2b2lkIDAgPyB0cnVlIDogX2NvbmZpZyRpZ25vcmVBY2NlbnRzLFxuICAgICAgX2NvbmZpZyRpZ25vcmVDYXNlID0gY29uZmlnLmlnbm9yZUNhc2UsXG4gICAgICBpZ25vcmVDYXNlID0gX2NvbmZpZyRpZ25vcmVDYXNlID09PSB2b2lkIDAgPyB0cnVlIDogX2NvbmZpZyRpZ25vcmVDYXNlLFxuICAgICAgbGltaXQgPSBjb25maWcubGltaXQsXG4gICAgICBfY29uZmlnJG1hdGNoRnJvbSA9IGNvbmZpZy5tYXRjaEZyb20sXG4gICAgICBtYXRjaEZyb20gPSBfY29uZmlnJG1hdGNoRnJvbSA9PT0gdm9pZCAwID8gJ2FueScgOiBfY29uZmlnJG1hdGNoRnJvbSxcbiAgICAgIHN0cmluZ2lmeSA9IGNvbmZpZy5zdHJpbmdpZnksXG4gICAgICBfY29uZmlnJHRyaW0gPSBjb25maWcudHJpbSxcbiAgICAgIHRyaW0gPSBfY29uZmlnJHRyaW0gPT09IHZvaWQgMCA/IGZhbHNlIDogX2NvbmZpZyR0cmltO1xuICByZXR1cm4gZnVuY3Rpb24gKG9wdGlvbnMsIF9yZWYpIHtcbiAgICB2YXIgaW5wdXRWYWx1ZSA9IF9yZWYuaW5wdXRWYWx1ZSxcbiAgICAgICAgZ2V0T3B0aW9uTGFiZWwgPSBfcmVmLmdldE9wdGlvbkxhYmVsO1xuICAgIHZhciBpbnB1dCA9IHRyaW0gPyBpbnB1dFZhbHVlLnRyaW0oKSA6IGlucHV0VmFsdWU7XG5cbiAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgaW5wdXQgPSBpbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmIChpZ25vcmVBY2NlbnRzKSB7XG4gICAgICBpbnB1dCA9IHN0cmlwRGlhY3JpdGljcyhpbnB1dCk7XG4gICAgfVxuXG4gICAgdmFyIGZpbHRlcmVkT3B0aW9ucyA9IG9wdGlvbnMuZmlsdGVyKGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICAgIHZhciBjYW5kaWRhdGUgPSAoc3RyaW5naWZ5IHx8IGdldE9wdGlvbkxhYmVsKShvcHRpb24pO1xuXG4gICAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGUudG9Mb3dlckNhc2UoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlnbm9yZUFjY2VudHMpIHtcbiAgICAgICAgY2FuZGlkYXRlID0gc3RyaXBEaWFjcml0aWNzKGNhbmRpZGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtYXRjaEZyb20gPT09ICdzdGFydCcgPyBjYW5kaWRhdGUuaW5kZXhPZihpbnB1dCkgPT09IDAgOiBjYW5kaWRhdGUuaW5kZXhPZihpbnB1dCkgPiAtMTtcbiAgICB9KTtcbiAgICByZXR1cm4gdHlwZW9mIGxpbWl0ID09PSAnbnVtYmVyJyA/IGZpbHRlcmVkT3B0aW9ucy5zbGljZSgwLCBsaW1pdCkgOiBmaWx0ZXJlZE9wdGlvbnM7XG4gIH07XG59IC8vIFRvIHJlcGxhY2Ugd2l0aCAuZmluZEluZGV4KCkgb25jZSB3ZSBzdG9wIElFIDExIHN1cHBvcnQuXG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgY29tcCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGNvbXAoYXJyYXlbaV0pKSB7XG4gICAgICByZXR1cm4gaTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gLTE7XG59XG5cbnZhciBkZWZhdWx0RmlsdGVyT3B0aW9ucyA9IGNyZWF0ZUZpbHRlck9wdGlvbnMoKTsgLy8gTnVtYmVyIG9mIG9wdGlvbnMgdG8ganVtcCBpbiBsaXN0IGJveCB3aGVuIHBhZ2V1cCBhbmQgcGFnZWRvd24ga2V5cyBhcmUgdXNlZC5cblxudmFyIHBhZ2VTaXplID0gNTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF1dG9jb21wbGV0ZShwcm9wcykge1xuICB2YXIgX3Byb3BzJGF1dG9Db21wbGV0ZSA9IHByb3BzLmF1dG9Db21wbGV0ZSxcbiAgICAgIGF1dG9Db21wbGV0ZSA9IF9wcm9wcyRhdXRvQ29tcGxldGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGF1dG9Db21wbGV0ZSxcbiAgICAgIF9wcm9wcyRhdXRvSGlnaGxpZ2h0ID0gcHJvcHMuYXV0b0hpZ2hsaWdodCxcbiAgICAgIGF1dG9IaWdobGlnaHQgPSBfcHJvcHMkYXV0b0hpZ2hsaWdodCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYXV0b0hpZ2hsaWdodCxcbiAgICAgIF9wcm9wcyRhdXRvU2VsZWN0ID0gcHJvcHMuYXV0b1NlbGVjdCxcbiAgICAgIGF1dG9TZWxlY3QgPSBfcHJvcHMkYXV0b1NlbGVjdCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYXV0b1NlbGVjdCxcbiAgICAgIF9wcm9wcyRibHVyT25TZWxlY3QgPSBwcm9wcy5ibHVyT25TZWxlY3QsXG4gICAgICBibHVyT25TZWxlY3QgPSBfcHJvcHMkYmx1ck9uU2VsZWN0ID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRibHVyT25TZWxlY3QsXG4gICAgICBfcHJvcHMkY2xlYXJPbkJsdXIgPSBwcm9wcy5jbGVhck9uQmx1cixcbiAgICAgIGNsZWFyT25CbHVyID0gX3Byb3BzJGNsZWFyT25CbHVyID09PSB2b2lkIDAgPyAhcHJvcHMuZnJlZVNvbG8gOiBfcHJvcHMkY2xlYXJPbkJsdXIsXG4gICAgICBfcHJvcHMkY2xlYXJPbkVzY2FwZSA9IHByb3BzLmNsZWFyT25Fc2NhcGUsXG4gICAgICBjbGVhck9uRXNjYXBlID0gX3Byb3BzJGNsZWFyT25Fc2NhcGUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGNsZWFyT25Fc2NhcGUsXG4gICAgICBfcHJvcHMkY29tcG9uZW50TmFtZSA9IHByb3BzLmNvbXBvbmVudE5hbWUsXG4gICAgICBjb21wb25lbnROYW1lID0gX3Byb3BzJGNvbXBvbmVudE5hbWUgPT09IHZvaWQgMCA/ICd1c2VBdXRvY29tcGxldGUnIDogX3Byb3BzJGNvbXBvbmVudE5hbWUsXG4gICAgICBfcHJvcHMkZGVidWcgPSBwcm9wcy5kZWJ1ZyxcbiAgICAgIGRlYnVnID0gX3Byb3BzJGRlYnVnID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkZWJ1ZyxcbiAgICAgIF9wcm9wcyRkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWUsXG4gICAgICBkZWZhdWx0VmFsdWUgPSBfcHJvcHMkZGVmYXVsdFZhbHVlID09PSB2b2lkIDAgPyBwcm9wcy5tdWx0aXBsZSA/IFtdIDogbnVsbCA6IF9wcm9wcyRkZWZhdWx0VmFsdWUsXG4gICAgICBfcHJvcHMkZGlzYWJsZUNsZWFyYWIgPSBwcm9wcy5kaXNhYmxlQ2xlYXJhYmxlLFxuICAgICAgZGlzYWJsZUNsZWFyYWJsZSA9IF9wcm9wcyRkaXNhYmxlQ2xlYXJhYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUNsZWFyYWIsXG4gICAgICBfcHJvcHMkZGlzYWJsZUNsb3NlT24gPSBwcm9wcy5kaXNhYmxlQ2xvc2VPblNlbGVjdCxcbiAgICAgIGRpc2FibGVDbG9zZU9uU2VsZWN0ID0gX3Byb3BzJGRpc2FibGVDbG9zZU9uID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlQ2xvc2VPbixcbiAgICAgIF9wcm9wcyRkaXNhYmxlZEl0ZW1zRiA9IHByb3BzLmRpc2FibGVkSXRlbXNGb2N1c2FibGUsXG4gICAgICBkaXNhYmxlZEl0ZW1zRm9jdXNhYmxlID0gX3Byb3BzJGRpc2FibGVkSXRlbXNGID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZEl0ZW1zRixcbiAgICAgIF9wcm9wcyRkaXNhYmxlTGlzdFdyYSA9IHByb3BzLmRpc2FibGVMaXN0V3JhcCxcbiAgICAgIGRpc2FibGVMaXN0V3JhcCA9IF9wcm9wcyRkaXNhYmxlTGlzdFdyYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZUxpc3RXcmEsXG4gICAgICBfcHJvcHMkZmlsdGVyT3B0aW9ucyA9IHByb3BzLmZpbHRlck9wdGlvbnMsXG4gICAgICBmaWx0ZXJPcHRpb25zID0gX3Byb3BzJGZpbHRlck9wdGlvbnMgPT09IHZvaWQgMCA/IGRlZmF1bHRGaWx0ZXJPcHRpb25zIDogX3Byb3BzJGZpbHRlck9wdGlvbnMsXG4gICAgICBfcHJvcHMkZmlsdGVyU2VsZWN0ZWQgPSBwcm9wcy5maWx0ZXJTZWxlY3RlZE9wdGlvbnMsXG4gICAgICBmaWx0ZXJTZWxlY3RlZE9wdGlvbnMgPSBfcHJvcHMkZmlsdGVyU2VsZWN0ZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGZpbHRlclNlbGVjdGVkLFxuICAgICAgX3Byb3BzJGZyZWVTb2xvID0gcHJvcHMuZnJlZVNvbG8sXG4gICAgICBmcmVlU29sbyA9IF9wcm9wcyRmcmVlU29sbyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZnJlZVNvbG8sXG4gICAgICBnZXRPcHRpb25EaXNhYmxlZCA9IHByb3BzLmdldE9wdGlvbkRpc2FibGVkLFxuICAgICAgX3Byb3BzJGdldE9wdGlvbkxhYmVsID0gcHJvcHMuZ2V0T3B0aW9uTGFiZWwsXG4gICAgICBnZXRPcHRpb25MYWJlbFByb3AgPSBfcHJvcHMkZ2V0T3B0aW9uTGFiZWwgPT09IHZvaWQgMCA/IGZ1bmN0aW9uIChvcHRpb24pIHtcbiAgICByZXR1cm4gb3B0aW9uO1xuICB9IDogX3Byb3BzJGdldE9wdGlvbkxhYmVsLFxuICAgICAgX3Byb3BzJGdldE9wdGlvblNlbGVjID0gcHJvcHMuZ2V0T3B0aW9uU2VsZWN0ZWQsXG4gICAgICBnZXRPcHRpb25TZWxlY3RlZCA9IF9wcm9wcyRnZXRPcHRpb25TZWxlYyA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKG9wdGlvbiwgdmFsdWUpIHtcbiAgICByZXR1cm4gb3B0aW9uID09PSB2YWx1ZTtcbiAgfSA6IF9wcm9wcyRnZXRPcHRpb25TZWxlYyxcbiAgICAgIGdyb3VwQnkgPSBwcm9wcy5ncm91cEJ5LFxuICAgICAgX3Byb3BzJGhhbmRsZUhvbWVFbmRLID0gcHJvcHMuaGFuZGxlSG9tZUVuZEtleXMsXG4gICAgICBoYW5kbGVIb21lRW5kS2V5cyA9IF9wcm9wcyRoYW5kbGVIb21lRW5kSyA9PT0gdm9pZCAwID8gIXByb3BzLmZyZWVTb2xvIDogX3Byb3BzJGhhbmRsZUhvbWVFbmRLLFxuICAgICAgaWRQcm9wID0gcHJvcHMuaWQsXG4gICAgICBfcHJvcHMkaW5jbHVkZUlucHV0SW4gPSBwcm9wcy5pbmNsdWRlSW5wdXRJbkxpc3QsXG4gICAgICBpbmNsdWRlSW5wdXRJbkxpc3QgPSBfcHJvcHMkaW5jbHVkZUlucHV0SW4gPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGluY2x1ZGVJbnB1dEluLFxuICAgICAgaW5wdXRWYWx1ZVByb3AgPSBwcm9wcy5pbnB1dFZhbHVlLFxuICAgICAgX3Byb3BzJG11bHRpcGxlID0gcHJvcHMubXVsdGlwbGUsXG4gICAgICBtdWx0aXBsZSA9IF9wcm9wcyRtdWx0aXBsZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkbXVsdGlwbGUsXG4gICAgICBvbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlLFxuICAgICAgb25DbG9zZSA9IHByb3BzLm9uQ2xvc2UsXG4gICAgICBvbkhpZ2hsaWdodENoYW5nZSA9IHByb3BzLm9uSGlnaGxpZ2h0Q2hhbmdlLFxuICAgICAgb25JbnB1dENoYW5nZSA9IHByb3BzLm9uSW5wdXRDaGFuZ2UsXG4gICAgICBvbk9wZW4gPSBwcm9wcy5vbk9wZW4sXG4gICAgICBvcGVuUHJvcCA9IHByb3BzLm9wZW4sXG4gICAgICBfcHJvcHMkb3Blbk9uRm9jdXMgPSBwcm9wcy5vcGVuT25Gb2N1cyxcbiAgICAgIG9wZW5PbkZvY3VzID0gX3Byb3BzJG9wZW5PbkZvY3VzID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRvcGVuT25Gb2N1cyxcbiAgICAgIG9wdGlvbnMgPSBwcm9wcy5vcHRpb25zLFxuICAgICAgX3Byb3BzJHNlbGVjdE9uRm9jdXMgPSBwcm9wcy5zZWxlY3RPbkZvY3VzLFxuICAgICAgc2VsZWN0T25Gb2N1cyA9IF9wcm9wcyRzZWxlY3RPbkZvY3VzID09PSB2b2lkIDAgPyAhcHJvcHMuZnJlZVNvbG8gOiBfcHJvcHMkc2VsZWN0T25Gb2N1cyxcbiAgICAgIHZhbHVlUHJvcCA9IHByb3BzLnZhbHVlO1xuICB2YXIgaWQgPSB1c2VJZChpZFByb3ApO1xuICB2YXIgZ2V0T3B0aW9uTGFiZWwgPSBnZXRPcHRpb25MYWJlbFByb3A7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBnZXRPcHRpb25MYWJlbCA9IGZ1bmN0aW9uIGdldE9wdGlvbkxhYmVsKG9wdGlvbikge1xuICAgICAgdmFyIG9wdGlvbkxhYmVsID0gZ2V0T3B0aW9uTGFiZWxQcm9wKG9wdGlvbik7XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uTGFiZWwgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHZhciBlcnJvbmVvdXNSZXR1cm4gPSBvcHRpb25MYWJlbCA9PT0gdW5kZWZpbmVkID8gJ3VuZGVmaW5lZCcgOiBcIlwiLmNvbmNhdChfdHlwZW9mKG9wdGlvbkxhYmVsKSwgXCIgKFwiKS5jb25jYXQob3B0aW9uTGFiZWwsIFwiKVwiKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1hdGVyaWFsLVVJOiBUaGUgYGdldE9wdGlvbkxhYmVsYCBtZXRob2Qgb2YgXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiIHJldHVybmVkIFwiKS5jb25jYXQoZXJyb25lb3VzUmV0dXJuLCBcIiBpbnN0ZWFkIG9mIGEgc3RyaW5nIGZvciBcIikuY29uY2F0KEpTT04uc3RyaW5naWZ5KG9wdGlvbiksIFwiLlwiKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvcHRpb25MYWJlbDtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGlnbm9yZUZvY3VzID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgdmFyIGZpcnN0Rm9jdXMgPSBSZWFjdC51c2VSZWYodHJ1ZSk7XG4gIHZhciBpbnB1dFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgdmFyIGxpc3Rib3hSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpLFxuICAgICAgYW5jaG9yRWwgPSBfUmVhY3QkdXNlU3RhdGVbMF0sXG4gICAgICBzZXRBbmNob3JFbCA9IF9SZWFjdCR1c2VTdGF0ZVsxXTtcblxuICB2YXIgX1JlYWN0JHVzZVN0YXRlMiA9IFJlYWN0LnVzZVN0YXRlKC0xKSxcbiAgICAgIGZvY3VzZWRUYWcgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0Rm9jdXNlZFRhZyA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgdmFyIGRlZmF1bHRIaWdobGlnaHRlZCA9IGF1dG9IaWdobGlnaHQgPyAwIDogLTE7XG4gIHZhciBoaWdobGlnaHRlZEluZGV4UmVmID0gUmVhY3QudXNlUmVmKGRlZmF1bHRIaWdobGlnaHRlZCk7XG5cbiAgdmFyIF91c2VDb250cm9sbGVkID0gdXNlQ29udHJvbGxlZCh7XG4gICAgY29udHJvbGxlZDogdmFsdWVQcm9wLFxuICAgIGRlZmF1bHQ6IGRlZmF1bHRWYWx1ZSxcbiAgICBuYW1lOiBjb21wb25lbnROYW1lXG4gIH0pLFxuICAgICAgX3VzZUNvbnRyb2xsZWQyID0gX3NsaWNlZFRvQXJyYXkoX3VzZUNvbnRyb2xsZWQsIDIpLFxuICAgICAgdmFsdWUgPSBfdXNlQ29udHJvbGxlZDJbMF0sXG4gICAgICBzZXRWYWx1ZSA9IF91c2VDb250cm9sbGVkMlsxXTtcblxuICB2YXIgX3VzZUNvbnRyb2xsZWQzID0gdXNlQ29udHJvbGxlZCh7XG4gICAgY29udHJvbGxlZDogaW5wdXRWYWx1ZVByb3AsXG4gICAgZGVmYXVsdDogJycsXG4gICAgbmFtZTogY29tcG9uZW50TmFtZSxcbiAgICBzdGF0ZTogJ2lucHV0VmFsdWUnXG4gIH0pLFxuICAgICAgX3VzZUNvbnRyb2xsZWQ0ID0gX3NsaWNlZFRvQXJyYXkoX3VzZUNvbnRyb2xsZWQzLCAyKSxcbiAgICAgIGlucHV0VmFsdWUgPSBfdXNlQ29udHJvbGxlZDRbMF0sXG4gICAgICBzZXRJbnB1dFZhbHVlID0gX3VzZUNvbnRyb2xsZWQ0WzFdO1xuXG4gIHZhciBfUmVhY3QkdXNlU3RhdGUzID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpLFxuICAgICAgZm9jdXNlZCA9IF9SZWFjdCR1c2VTdGF0ZTNbMF0sXG4gICAgICBzZXRGb2N1c2VkID0gX1JlYWN0JHVzZVN0YXRlM1sxXTtcblxuICB2YXIgcmVzZXRJbnB1dFZhbHVlID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQsIG5ld1ZhbHVlKSB7XG4gICAgdmFyIG5ld0lucHV0VmFsdWU7XG5cbiAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgIG5ld0lucHV0VmFsdWUgPSAnJztcbiAgICB9IGVsc2UgaWYgKG5ld1ZhbHVlID09IG51bGwpIHtcbiAgICAgIG5ld0lucHV0VmFsdWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG9wdGlvbkxhYmVsID0gZ2V0T3B0aW9uTGFiZWwobmV3VmFsdWUpO1xuICAgICAgbmV3SW5wdXRWYWx1ZSA9IHR5cGVvZiBvcHRpb25MYWJlbCA9PT0gJ3N0cmluZycgPyBvcHRpb25MYWJlbCA6ICcnO1xuICAgIH1cblxuICAgIGlmIChpbnB1dFZhbHVlID09PSBuZXdJbnB1dFZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0SW5wdXRWYWx1ZShuZXdJbnB1dFZhbHVlKTtcblxuICAgIGlmIChvbklucHV0Q2hhbmdlKSB7XG4gICAgICBvbklucHV0Q2hhbmdlKGV2ZW50LCBuZXdJbnB1dFZhbHVlLCAncmVzZXQnKTtcbiAgICB9XG4gIH0pO1xuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJlc2V0SW5wdXRWYWx1ZShudWxsLCB2YWx1ZSk7XG4gIH0sIFt2YWx1ZSwgcmVzZXRJbnB1dFZhbHVlXSk7XG5cbiAgdmFyIF91c2VDb250cm9sbGVkNSA9IHVzZUNvbnRyb2xsZWQoe1xuICAgIGNvbnRyb2xsZWQ6IG9wZW5Qcm9wLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIG5hbWU6IGNvbXBvbmVudE5hbWUsXG4gICAgc3RhdGU6ICdvcGVuJ1xuICB9KSxcbiAgICAgIF91c2VDb250cm9sbGVkNiA9IF9zbGljZWRUb0FycmF5KF91c2VDb250cm9sbGVkNSwgMiksXG4gICAgICBvcGVuID0gX3VzZUNvbnRyb2xsZWQ2WzBdLFxuICAgICAgc2V0T3BlblN0YXRlID0gX3VzZUNvbnRyb2xsZWQ2WzFdO1xuXG4gIHZhciBpbnB1dFZhbHVlSXNTZWxlY3RlZFZhbHVlID0gIW11bHRpcGxlICYmIHZhbHVlICE9IG51bGwgJiYgaW5wdXRWYWx1ZSA9PT0gZ2V0T3B0aW9uTGFiZWwodmFsdWUpO1xuICB2YXIgcG9wdXBPcGVuID0gb3BlbjtcbiAgdmFyIGZpbHRlcmVkT3B0aW9ucyA9IHBvcHVwT3BlbiA/IGZpbHRlck9wdGlvbnMob3B0aW9ucy5maWx0ZXIoZnVuY3Rpb24gKG9wdGlvbikge1xuICAgIGlmIChmaWx0ZXJTZWxlY3RlZE9wdGlvbnMgJiYgKG11bHRpcGxlID8gdmFsdWUgOiBbdmFsdWVdKS5zb21lKGZ1bmN0aW9uICh2YWx1ZTIpIHtcbiAgICAgIHJldHVybiB2YWx1ZTIgIT09IG51bGwgJiYgZ2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCB2YWx1ZTIpO1xuICAgIH0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pLCAvLyB3ZSB1c2UgdGhlIGVtcHR5IHN0cmluZyB0byBtYW5pcHVsYXRlIGBmaWx0ZXJPcHRpb25zYCB0byBub3QgZmlsdGVyIGFueSBvcHRpb25zXG4gIC8vIGkuZS4gdGhlIGZpbHRlciBwcmVkaWNhdGUgYWx3YXlzIHJldHVybnMgdHJ1ZVxuICB7XG4gICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZUlzU2VsZWN0ZWRWYWx1ZSA/ICcnIDogaW5wdXRWYWx1ZSxcbiAgICBnZXRPcHRpb25MYWJlbDogZ2V0T3B0aW9uTGFiZWxcbiAgfSkgOiBbXTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiAhZnJlZVNvbG8gJiYgb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgbWlzc2luZ1ZhbHVlID0gKG11bHRpcGxlID8gdmFsdWUgOiBbdmFsdWVdKS5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlMikge1xuICAgICAgICByZXR1cm4gIW9wdGlvbnMuc29tZShmdW5jdGlvbiAob3B0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIGdldE9wdGlvblNlbGVjdGVkKG9wdGlvbiwgdmFsdWUyKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1pc3NpbmdWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihbXCJNYXRlcmlhbC1VSTogVGhlIHZhbHVlIHByb3ZpZGVkIHRvIFwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIiBpcyBpbnZhbGlkLlwiKSwgXCJOb25lIG9mIHRoZSBvcHRpb25zIG1hdGNoIHdpdGggYFwiLmNvbmNhdChtaXNzaW5nVmFsdWUubGVuZ3RoID4gMSA/IEpTT04uc3RyaW5naWZ5KG1pc3NpbmdWYWx1ZSkgOiBKU09OLnN0cmluZ2lmeShtaXNzaW5nVmFsdWVbMF0pLCBcImAuXCIpLCAnWW91IGNhbiB1c2UgdGhlIGBnZXRPcHRpb25TZWxlY3RlZGAgcHJvcCB0byBjdXN0b21pemUgdGhlIGVxdWFsaXR5IHRlc3QuJ10uam9pbignXFxuJykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBmb2N1c1RhZyA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKHRhZ1RvRm9jdXMpIHtcbiAgICBpZiAodGFnVG9Gb2N1cyA9PT0gLTEpIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYW5jaG9yRWwucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhZy1pbmRleD1cXFwiXCIuY29uY2F0KHRhZ1RvRm9jdXMsIFwiXFxcIl1cIikpLmZvY3VzKCk7XG4gICAgfVxuICB9KTsgLy8gRW5zdXJlIHRoZSBmb2N1c2VkVGFnIGlzIG5ldmVyIGluY29uc2lzdGVudFxuXG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG11bHRpcGxlICYmIGZvY3VzZWRUYWcgPiB2YWx1ZS5sZW5ndGggLSAxKSB7XG4gICAgICBzZXRGb2N1c2VkVGFnKC0xKTtcbiAgICAgIGZvY3VzVGFnKC0xKTtcbiAgICB9XG4gIH0sIFt2YWx1ZSwgbXVsdGlwbGUsIGZvY3VzZWRUYWcsIGZvY3VzVGFnXSk7XG5cbiAgZnVuY3Rpb24gdmFsaWRPcHRpb25JbmRleChpbmRleCwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKCFsaXN0Ym94UmVmLmN1cnJlbnQgfHwgaW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgdmFyIG5leHRGb2N1cyA9IGluZGV4O1xuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIC8vIE91dCBvZiByYW5nZVxuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnICYmIG5leHRGb2N1cyA9PT0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCB8fCBkaXJlY3Rpb24gPT09ICdwcmV2aW91cycgJiYgbmV4dEZvY3VzID09PSAtMSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRpb24gPSBsaXN0Ym94UmVmLmN1cnJlbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW9wdGlvbi1pbmRleD1cXFwiXCIuY29uY2F0KG5leHRGb2N1cywgXCJcXFwiXVwiKSk7IC8vIFNhbWUgbG9naWMgYXMgTWVudUxpc3QuanNcblxuICAgICAgdmFyIG5leHRGb2N1c0Rpc2FibGVkID0gZGlzYWJsZWRJdGVtc0ZvY3VzYWJsZSA/IGZhbHNlIDogb3B0aW9uICYmIChvcHRpb24uZGlzYWJsZWQgfHwgb3B0aW9uLmdldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpID09PSAndHJ1ZScpO1xuXG4gICAgICBpZiAob3B0aW9uICYmICFvcHRpb24uaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpIHx8IG5leHRGb2N1c0Rpc2FibGVkKSB7XG4gICAgICAgIC8vIE1vdmUgdG8gdGhlIG5leHQgZWxlbWVudC5cbiAgICAgICAgbmV4dEZvY3VzICs9IGRpcmVjdGlvbiA9PT0gJ25leHQnID8gMSA6IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5leHRGb2N1cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgc2V0SGlnaGxpZ2h0ZWRJbmRleCA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIGV2ZW50ID0gX3JlZjIuZXZlbnQsXG4gICAgICAgIGluZGV4ID0gX3JlZjIuaW5kZXgsXG4gICAgICAgIF9yZWYyJHJlYXNvbiA9IF9yZWYyLnJlYXNvbixcbiAgICAgICAgcmVhc29uID0gX3JlZjIkcmVhc29uID09PSB2b2lkIDAgPyAnYXV0bycgOiBfcmVmMiRyZWFzb247XG4gICAgaGlnaGxpZ2h0ZWRJbmRleFJlZi5jdXJyZW50ID0gaW5kZXg7IC8vIGRvZXMgdGhlIGluZGV4IGV4aXN0P1xuXG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1hY3RpdmVkZXNjZW5kYW50JywgXCJcIi5jb25jYXQoaWQsIFwiLW9wdGlvbi1cIikuY29uY2F0KGluZGV4KSk7XG4gICAgfVxuXG4gICAgaWYgKG9uSGlnaGxpZ2h0Q2hhbmdlKSB7XG4gICAgICBvbkhpZ2hsaWdodENoYW5nZShldmVudCwgaW5kZXggPT09IC0xID8gbnVsbCA6IGZpbHRlcmVkT3B0aW9uc1tpbmRleF0sIHJlYXNvbik7XG4gICAgfVxuXG4gICAgaWYgKCFsaXN0Ym94UmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJldiA9IGxpc3Rib3hSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1mb2N1c10nKTtcblxuICAgIGlmIChwcmV2KSB7XG4gICAgICBwcmV2LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1mb2N1cycpO1xuICAgIH1cblxuICAgIHZhciBsaXN0Ym94Tm9kZSA9IGxpc3Rib3hSZWYuY3VycmVudC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tyb2xlPVwibGlzdGJveFwiXScpOyAvLyBcIk5vIHJlc3VsdHNcIlxuXG4gICAgaWYgKCFsaXN0Ym94Tm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGxpc3Rib3hOb2RlLnNjcm9sbFRvcCA9IDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG9wdGlvbiA9IGxpc3Rib3hSZWYuY3VycmVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtb3B0aW9uLWluZGV4PVxcXCJcIi5jb25jYXQoaW5kZXgsIFwiXFxcIl1cIikpO1xuXG4gICAgaWYgKCFvcHRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWZvY3VzJywgJ3RydWUnKTsgLy8gU2Nyb2xsIGFjdGl2ZSBkZXNjZW5kYW50IGludG8gdmlldy5cbiAgICAvLyBMb2dpYyBjb3BpZWQgZnJvbSBodHRwczovL3d3dy53My5vcmcvVFIvd2FpLWFyaWEtcHJhY3RpY2VzL2V4YW1wbGVzL2xpc3Rib3gvanMvbGlzdGJveC5qc1xuICAgIC8vXG4gICAgLy8gQ29uc2lkZXIgdGhpcyBBUEkgaW5zdGVhZCBvbmNlIGl0IGhhcyBhIGJldHRlciBicm93c2VyIHN1cHBvcnQ6XG4gICAgLy8gLnNjcm9sbEludG9WaWV3KHsgc2Nyb2xsTW9kZTogJ2lmLW5lZWRlZCcsIGJsb2NrOiAnbmVhcmVzdCcgfSk7XG5cbiAgICBpZiAobGlzdGJveE5vZGUuc2Nyb2xsSGVpZ2h0ID4gbGlzdGJveE5vZGUuY2xpZW50SGVpZ2h0ICYmIHJlYXNvbiAhPT0gJ21vdXNlJykge1xuICAgICAgdmFyIGVsZW1lbnQgPSBvcHRpb247XG4gICAgICB2YXIgc2Nyb2xsQm90dG9tID0gbGlzdGJveE5vZGUuY2xpZW50SGVpZ2h0ICsgbGlzdGJveE5vZGUuc2Nyb2xsVG9wO1xuICAgICAgdmFyIGVsZW1lbnRCb3R0b20gPSBlbGVtZW50Lm9mZnNldFRvcCArIGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICBpZiAoZWxlbWVudEJvdHRvbSA+IHNjcm9sbEJvdHRvbSkge1xuICAgICAgICBsaXN0Ym94Tm9kZS5zY3JvbGxUb3AgPSBlbGVtZW50Qm90dG9tIC0gbGlzdGJveE5vZGUuY2xpZW50SGVpZ2h0O1xuICAgICAgfSBlbHNlIGlmIChlbGVtZW50Lm9mZnNldFRvcCAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICogKGdyb3VwQnkgPyAxLjMgOiAwKSA8IGxpc3Rib3hOb2RlLnNjcm9sbFRvcCkge1xuICAgICAgICBsaXN0Ym94Tm9kZS5zY3JvbGxUb3AgPSBlbGVtZW50Lm9mZnNldFRvcCAtIGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICogKGdyb3VwQnkgPyAxLjMgOiAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICB2YXIgY2hhbmdlSGlnaGxpZ2h0ZWRJbmRleCA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgdmFyIGV2ZW50ID0gX3JlZjMuZXZlbnQsXG4gICAgICAgIGRpZmYgPSBfcmVmMy5kaWZmLFxuICAgICAgICBfcmVmMyRkaXJlY3Rpb24gPSBfcmVmMy5kaXJlY3Rpb24sXG4gICAgICAgIGRpcmVjdGlvbiA9IF9yZWYzJGRpcmVjdGlvbiA9PT0gdm9pZCAwID8gJ25leHQnIDogX3JlZjMkZGlyZWN0aW9uLFxuICAgICAgICBfcmVmMyRyZWFzb24gPSBfcmVmMy5yZWFzb24sXG4gICAgICAgIHJlYXNvbiA9IF9yZWYzJHJlYXNvbiA9PT0gdm9pZCAwID8gJ2F1dG8nIDogX3JlZjMkcmVhc29uO1xuXG4gICAgaWYgKCFwb3B1cE9wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZ2V0TmV4dEluZGV4ID0gZnVuY3Rpb24gZ2V0TmV4dEluZGV4KCkge1xuICAgICAgdmFyIG1heEluZGV4ID0gZmlsdGVyZWRPcHRpb25zLmxlbmd0aCAtIDE7XG5cbiAgICAgIGlmIChkaWZmID09PSAncmVzZXQnKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0SGlnaGxpZ2h0ZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChkaWZmID09PSAnc3RhcnQnKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGlmZiA9PT0gJ2VuZCcpIHtcbiAgICAgICAgcmV0dXJuIG1heEluZGV4O1xuICAgICAgfVxuXG4gICAgICB2YXIgbmV3SW5kZXggPSBoaWdobGlnaHRlZEluZGV4UmVmLmN1cnJlbnQgKyBkaWZmO1xuXG4gICAgICBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgICAgIGlmIChuZXdJbmRleCA9PT0gLTEgJiYgaW5jbHVkZUlucHV0SW5MaXN0KSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRpc2FibGVMaXN0V3JhcCAmJiBoaWdobGlnaHRlZEluZGV4UmVmLmN1cnJlbnQgIT09IC0xIHx8IE1hdGguYWJzKGRpZmYpID4gMSkge1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1heEluZGV4O1xuICAgICAgfVxuXG4gICAgICBpZiAobmV3SW5kZXggPiBtYXhJbmRleCkge1xuICAgICAgICBpZiAobmV3SW5kZXggPT09IG1heEluZGV4ICsgMSAmJiBpbmNsdWRlSW5wdXRJbkxpc3QpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGlzYWJsZUxpc3RXcmFwIHx8IE1hdGguYWJzKGRpZmYpID4gMSkge1xuICAgICAgICAgIHJldHVybiBtYXhJbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3SW5kZXg7XG4gICAgfTtcblxuICAgIHZhciBuZXh0SW5kZXggPSB2YWxpZE9wdGlvbkluZGV4KGdldE5leHRJbmRleCgpLCBkaXJlY3Rpb24pO1xuICAgIHNldEhpZ2hsaWdodGVkSW5kZXgoe1xuICAgICAgaW5kZXg6IG5leHRJbmRleCxcbiAgICAgIHJlYXNvbjogcmVhc29uLFxuICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgfSk7IC8vIFN5bmMgdGhlIGNvbnRlbnQgb2YgdGhlIGlucHV0IHdpdGggdGhlIGhpZ2hsaWdodGVkIG9wdGlvbi5cblxuICAgIGlmIChhdXRvQ29tcGxldGUgJiYgZGlmZiAhPT0gJ3Jlc2V0Jykge1xuICAgICAgaWYgKG5leHRJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC52YWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgb3B0aW9uID0gZ2V0T3B0aW9uTGFiZWwoZmlsdGVyZWRPcHRpb25zW25leHRJbmRleF0pO1xuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnZhbHVlID0gb3B0aW9uOyAvLyBUaGUgcG9ydGlvbiBvZiB0aGUgc2VsZWN0ZWQgc3VnZ2VzdGlvbiB0aGF0IGhhcyBub3QgYmVlbiB0eXBlZCBieSB0aGUgdXNlcixcbiAgICAgICAgLy8gYSBjb21wbGV0aW9uIHN0cmluZywgYXBwZWFycyBpbmxpbmUgYWZ0ZXIgdGhlIGlucHV0IGN1cnNvciBpbiB0aGUgdGV4dGJveC5cblxuICAgICAgICB2YXIgaW5kZXggPSBvcHRpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIGlucHV0VmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlucHV0UmVmLmN1cnJlbnQuc2V0U2VsZWN0aW9uUmFuZ2UoaW5wdXRWYWx1ZS5sZW5ndGgsIG9wdGlvbi5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdmFyIHN5bmNIaWdobGlnaHRlZEluZGV4ID0gUmVhY3QudXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIGlmICghcG9wdXBPcGVuKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlSXRlbSA9IG11bHRpcGxlID8gdmFsdWVbMF0gOiB2YWx1ZTsgLy8gVGhlIHBvcHVwIGlzIGVtcHR5LCByZXNldFxuXG4gICAgaWYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPT09IDAgfHwgdmFsdWVJdGVtID09IG51bGwpIHtcbiAgICAgIGNoYW5nZUhpZ2hsaWdodGVkSW5kZXgoe1xuICAgICAgICBkaWZmOiAncmVzZXQnXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWxpc3Rib3hSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gU3luY2hyb25pemUgdGhlIHZhbHVlIHdpdGggdGhlIGhpZ2hsaWdodGVkIGluZGV4XG5cblxuICAgIGlmICghZmlsdGVyU2VsZWN0ZWRPcHRpb25zICYmIHZhbHVlSXRlbSAhPSBudWxsKSB7XG4gICAgICB2YXIgY3VycmVudE9wdGlvbiA9IGZpbHRlcmVkT3B0aW9uc1toaWdobGlnaHRlZEluZGV4UmVmLmN1cnJlbnRdOyAvLyBLZWVwIHRoZSBjdXJyZW50IGhpZ2hsaWdodGVkIGluZGV4IGlmIHBvc3NpYmxlXG5cbiAgICAgIGlmIChtdWx0aXBsZSAmJiBjdXJyZW50T3B0aW9uICYmIGZpbmRJbmRleCh2YWx1ZSwgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICByZXR1cm4gZ2V0T3B0aW9uU2VsZWN0ZWQoY3VycmVudE9wdGlvbiwgdmFsKTtcbiAgICAgIH0pICE9PSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtSW5kZXggPSBmaW5kSW5kZXgoZmlsdGVyZWRPcHRpb25zLCBmdW5jdGlvbiAob3B0aW9uSXRlbSkge1xuICAgICAgICByZXR1cm4gZ2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uSXRlbSwgdmFsdWVJdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXRlbUluZGV4ID09PSAtMSkge1xuICAgICAgICBjaGFuZ2VIaWdobGlnaHRlZEluZGV4KHtcbiAgICAgICAgICBkaWZmOiAncmVzZXQnXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SGlnaGxpZ2h0ZWRJbmRleCh7XG4gICAgICAgICAgaW5kZXg6IGl0ZW1JbmRleFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gUHJldmVudCB0aGUgaGlnaGxpZ2h0ZWQgaW5kZXggdG8gbGVhayBvdXRzaWRlIHRoZSBib3VuZGFyaWVzLlxuXG5cbiAgICBpZiAoaGlnaGxpZ2h0ZWRJbmRleFJlZi5jdXJyZW50ID49IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICBzZXRIaWdobGlnaHRlZEluZGV4KHtcbiAgICAgICAgaW5kZXg6IGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggLSAxXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFJlc3RvcmUgdGhlIGZvY3VzIHRvIHRoZSBwcmV2aW91cyBpbmRleC5cblxuXG4gICAgc2V0SGlnaGxpZ2h0ZWRJbmRleCh7XG4gICAgICBpbmRleDogaGlnaGxpZ2h0ZWRJbmRleFJlZi5jdXJyZW50XG4gICAgfSk7IC8vIElnbm9yZSBmaWx0ZXJlZE9wdGlvbnMgKGFuZCBvcHRpb25zLCBnZXRPcHRpb25TZWxlY3RlZCwgZ2V0T3B0aW9uTGFiZWwpIG5vdCB0byBicmVhayB0aGUgc2Nyb2xsIHBvc2l0aW9uXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICB9LCBbLy8gT25seSBzeW5jIHRoZSBoaWdobGlnaHRlZCBpbmRleCB3aGVuIHRoZSBvcHRpb24gc3dpdGNoIGJldHdlZW4gZW1wdHkgYW5kIG5vdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPT09IDAsIC8vIERvbid0IHN5bmMgdGhlIGhpZ2hsaWdodGVkIGluZGV4IHdpdGggdGhlIHZhbHVlIHdoZW4gbXVsdGlwbGVcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuICBtdWx0aXBsZSA/IGZhbHNlIDogdmFsdWUsIGZpbHRlclNlbGVjdGVkT3B0aW9ucywgY2hhbmdlSGlnaGxpZ2h0ZWRJbmRleCwgc2V0SGlnaGxpZ2h0ZWRJbmRleCwgcG9wdXBPcGVuLCBpbnB1dFZhbHVlLCBtdWx0aXBsZV0pO1xuICB2YXIgaGFuZGxlTGlzdGJveFJlZiA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICBzZXRSZWYobGlzdGJveFJlZiwgbm9kZSk7XG5cbiAgICBpZiAoIW5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzeW5jSGlnaGxpZ2h0ZWRJbmRleCgpO1xuICB9KTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBzeW5jSGlnaGxpZ2h0ZWRJbmRleCgpO1xuICB9LCBbc3luY0hpZ2hsaWdodGVkSW5kZXhdKTtcblxuICB2YXIgaGFuZGxlT3BlbiA9IGZ1bmN0aW9uIGhhbmRsZU9wZW4oZXZlbnQpIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldE9wZW5TdGF0ZSh0cnVlKTtcblxuICAgIGlmIChvbk9wZW4pIHtcbiAgICAgIG9uT3BlbihldmVudCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVDbG9zZSA9IGZ1bmN0aW9uIGhhbmRsZUNsb3NlKGV2ZW50LCByZWFzb24pIHtcbiAgICBpZiAoIW9wZW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRPcGVuU3RhdGUoZmFsc2UpO1xuXG4gICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgIG9uQ2xvc2UoZXZlbnQsIHJlYXNvbik7XG4gICAgfVxuICB9O1xuXG4gIHZhciBoYW5kbGVWYWx1ZSA9IGZ1bmN0aW9uIGhhbmRsZVZhbHVlKGV2ZW50LCBuZXdWYWx1ZSwgcmVhc29uLCBkZXRhaWxzKSB7XG4gICAgaWYgKHZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvbkNoYW5nZSkge1xuICAgICAgb25DaGFuZ2UoZXZlbnQsIG5ld1ZhbHVlLCByZWFzb24sIGRldGFpbHMpO1xuICAgIH1cblxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgfTtcblxuICB2YXIgaXNUb3VjaCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgdmFyIHNlbGVjdE5ld1ZhbHVlID0gZnVuY3Rpb24gc2VsZWN0TmV3VmFsdWUoZXZlbnQsIG9wdGlvbikge1xuICAgIHZhciByZWFzb25Qcm9wID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiAnc2VsZWN0LW9wdGlvbic7XG4gICAgdmFyIG9yaWdpbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogJ29wdGlvbnMnO1xuICAgIHZhciByZWFzb24gPSByZWFzb25Qcm9wO1xuICAgIHZhciBuZXdWYWx1ZSA9IG9wdGlvbjtcblxuICAgIGlmIChtdWx0aXBsZSkge1xuICAgICAgbmV3VmFsdWUgPSBBcnJheS5pc0FycmF5KHZhbHVlKSA/IHZhbHVlLnNsaWNlKCkgOiBbXTtcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSBuZXdWYWx1ZS5maWx0ZXIoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgIHJldHVybiBnZXRPcHRpb25TZWxlY3RlZChvcHRpb24sIHZhbCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFtcIk1hdGVyaWFsLVVJOiBUaGUgYGdldE9wdGlvblNlbGVjdGVkYCBtZXRob2Qgb2YgXCIuY29uY2F0KGNvbXBvbmVudE5hbWUsIFwiIGRvIG5vdCBoYW5kbGUgdGhlIGFyZ3VtZW50cyBjb3JyZWN0bHkuXCIpLCBcIlRoZSBjb21wb25lbnQgZXhwZWN0cyBhIHNpbmdsZSB2YWx1ZSB0byBtYXRjaCBhIGdpdmVuIG9wdGlvbiBidXQgZm91bmQgXCIuY29uY2F0KG1hdGNoZXMubGVuZ3RoLCBcIiBtYXRjaGVzLlwiKV0uam9pbignXFxuJykpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBpdGVtSW5kZXggPSBmaW5kSW5kZXgobmV3VmFsdWUsIGZ1bmN0aW9uICh2YWx1ZUl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGdldE9wdGlvblNlbGVjdGVkKG9wdGlvbiwgdmFsdWVJdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaXRlbUluZGV4ID09PSAtMSkge1xuICAgICAgICBuZXdWYWx1ZS5wdXNoKG9wdGlvbik7XG4gICAgICB9IGVsc2UgaWYgKG9yaWdpbiAhPT0gJ2ZyZWVTb2xvJykge1xuICAgICAgICBuZXdWYWx1ZS5zcGxpY2UoaXRlbUluZGV4LCAxKTtcbiAgICAgICAgcmVhc29uID0gJ3JlbW92ZS1vcHRpb24nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0SW5wdXRWYWx1ZShldmVudCwgbmV3VmFsdWUpO1xuICAgIGhhbmRsZVZhbHVlKGV2ZW50LCBuZXdWYWx1ZSwgcmVhc29uLCB7XG4gICAgICBvcHRpb246IG9wdGlvblxuICAgIH0pO1xuXG4gICAgaWYgKCFkaXNhYmxlQ2xvc2VPblNlbGVjdCkge1xuICAgICAgaGFuZGxlQ2xvc2UoZXZlbnQsIHJlYXNvbik7XG4gICAgfVxuXG4gICAgaWYgKGJsdXJPblNlbGVjdCA9PT0gdHJ1ZSB8fCBibHVyT25TZWxlY3QgPT09ICd0b3VjaCcgJiYgaXNUb3VjaC5jdXJyZW50IHx8IGJsdXJPblNlbGVjdCA9PT0gJ21vdXNlJyAmJiAhaXNUb3VjaC5jdXJyZW50KSB7XG4gICAgICBpbnB1dFJlZi5jdXJyZW50LmJsdXIoKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsaWRUYWdJbmRleChpbmRleCwgZGlyZWN0aW9uKSB7XG4gICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHZhciBuZXh0Rm9jdXMgPSBpbmRleDtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAvLyBPdXQgb2YgcmFuZ2VcbiAgICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0JyAmJiBuZXh0Rm9jdXMgPT09IHZhbHVlLmxlbmd0aCB8fCBkaXJlY3Rpb24gPT09ICdwcmV2aW91cycgJiYgbmV4dEZvY3VzID09PSAtMSkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG5cbiAgICAgIHZhciBvcHRpb24gPSBhbmNob3JFbC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFnLWluZGV4PVxcXCJcIi5jb25jYXQobmV4dEZvY3VzLCBcIlxcXCJdXCIpKTsgLy8gU2FtZSBsb2dpYyBhcyBNZW51TGlzdC5qc1xuXG4gICAgICBpZiAob3B0aW9uICYmICghb3B0aW9uLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSB8fCBvcHRpb24uZGlzYWJsZWQgfHwgb3B0aW9uLmdldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpID09PSAndHJ1ZScpKSB7XG4gICAgICAgIG5leHRGb2N1cyArPSBkaXJlY3Rpb24gPT09ICduZXh0JyA/IDEgOiAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXh0Rm9jdXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGhhbmRsZUZvY3VzVGFnID0gZnVuY3Rpb24gaGFuZGxlRm9jdXNUYWcoZXZlbnQsIGRpcmVjdGlvbikge1xuICAgIGlmICghbXVsdGlwbGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBoYW5kbGVDbG9zZShldmVudCwgJ3RvZ2dsZUlucHV0Jyk7XG4gICAgdmFyIG5leHRUYWcgPSBmb2N1c2VkVGFnO1xuXG4gICAgaWYgKGZvY3VzZWRUYWcgPT09IC0xKSB7XG4gICAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gJycgJiYgZGlyZWN0aW9uID09PSAncHJldmlvdXMnKSB7XG4gICAgICAgIG5leHRUYWcgPSB2YWx1ZS5sZW5ndGggLSAxO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0VGFnICs9IGRpcmVjdGlvbiA9PT0gJ25leHQnID8gMSA6IC0xO1xuXG4gICAgICBpZiAobmV4dFRhZyA8IDApIHtcbiAgICAgICAgbmV4dFRhZyA9IDA7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXh0VGFnID09PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgbmV4dFRhZyA9IC0xO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5leHRUYWcgPSB2YWxpZFRhZ0luZGV4KG5leHRUYWcsIGRpcmVjdGlvbik7XG4gICAgc2V0Rm9jdXNlZFRhZyhuZXh0VGFnKTtcbiAgICBmb2N1c1RhZyhuZXh0VGFnKTtcbiAgfTtcblxuICB2YXIgaGFuZGxlQ2xlYXIgPSBmdW5jdGlvbiBoYW5kbGVDbGVhcihldmVudCkge1xuICAgIGlnbm9yZUZvY3VzLmN1cnJlbnQgPSB0cnVlO1xuICAgIHNldElucHV0VmFsdWUoJycpO1xuXG4gICAgaWYgKG9uSW5wdXRDaGFuZ2UpIHtcbiAgICAgIG9uSW5wdXRDaGFuZ2UoZXZlbnQsICcnLCAnY2xlYXInKTtcbiAgICB9XG5cbiAgICBoYW5kbGVWYWx1ZShldmVudCwgbXVsdGlwbGUgPyBbXSA6IG51bGwsICdjbGVhcicpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVLZXlEb3duID0gZnVuY3Rpb24gaGFuZGxlS2V5RG93bihvdGhlcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChmb2N1c2VkVGFnICE9PSAtMSAmJiBbJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0J10uaW5kZXhPZihldmVudC5rZXkpID09PSAtMSkge1xuICAgICAgICBzZXRGb2N1c2VkVGFnKC0xKTtcbiAgICAgICAgZm9jdXNUYWcoLTEpO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgICBjYXNlICdIb21lJzpcbiAgICAgICAgICBpZiAocG9wdXBPcGVuICYmIGhhbmRsZUhvbWVFbmRLZXlzKSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IHNjcm9sbCBvZiB0aGUgcGFnZVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNoYW5nZUhpZ2hsaWdodGVkSW5kZXgoe1xuICAgICAgICAgICAgICBkaWZmOiAnc3RhcnQnLFxuICAgICAgICAgICAgICBkaXJlY3Rpb246ICduZXh0JyxcbiAgICAgICAgICAgICAgcmVhc29uOiAna2V5Ym9hcmQnLFxuICAgICAgICAgICAgICBldmVudDogZXZlbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0VuZCc6XG4gICAgICAgICAgaWYgKHBvcHVwT3BlbiAmJiBoYW5kbGVIb21lRW5kS2V5cykge1xuICAgICAgICAgICAgLy8gUHJldmVudCBzY3JvbGwgb2YgdGhlIHBhZ2VcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjaGFuZ2VIaWdobGlnaHRlZEluZGV4KHtcbiAgICAgICAgICAgICAgZGlmZjogJ2VuZCcsXG4gICAgICAgICAgICAgIGRpcmVjdGlvbjogJ3ByZXZpb3VzJyxcbiAgICAgICAgICAgICAgcmVhc29uOiAna2V5Ym9hcmQnLFxuICAgICAgICAgICAgICBldmVudDogZXZlbnRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ1BhZ2VVcCc6XG4gICAgICAgICAgLy8gUHJldmVudCBzY3JvbGwgb2YgdGhlIHBhZ2VcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNoYW5nZUhpZ2hsaWdodGVkSW5kZXgoe1xuICAgICAgICAgICAgZGlmZjogLXBhZ2VTaXplLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAncHJldmlvdXMnLFxuICAgICAgICAgICAgcmVhc29uOiAna2V5Ym9hcmQnLFxuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaGFuZGxlT3BlbihldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnUGFnZURvd24nOlxuICAgICAgICAgIC8vIFByZXZlbnQgc2Nyb2xsIG9mIHRoZSBwYWdlXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjaGFuZ2VIaWdobGlnaHRlZEluZGV4KHtcbiAgICAgICAgICAgIGRpZmY6IHBhZ2VTaXplLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiAnbmV4dCcsXG4gICAgICAgICAgICByZWFzb246ICdrZXlib2FyZCcsXG4gICAgICAgICAgICBldmVudDogZXZlbnRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBoYW5kbGVPcGVuKGV2ZW50KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgIC8vIFByZXZlbnQgY3Vyc29yIG1vdmVcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGNoYW5nZUhpZ2hsaWdodGVkSW5kZXgoe1xuICAgICAgICAgICAgZGlmZjogMSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ25leHQnLFxuICAgICAgICAgICAgcmVhc29uOiAna2V5Ym9hcmQnLFxuICAgICAgICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaGFuZGxlT3BlbihldmVudCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgLy8gUHJldmVudCBjdXJzb3IgbW92ZVxuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgY2hhbmdlSGlnaGxpZ2h0ZWRJbmRleCh7XG4gICAgICAgICAgICBkaWZmOiAtMSxcbiAgICAgICAgICAgIGRpcmVjdGlvbjogJ3ByZXZpb3VzJyxcbiAgICAgICAgICAgIHJlYXNvbjogJ2tleWJvYXJkJyxcbiAgICAgICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGhhbmRsZU9wZW4oZXZlbnQpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgaGFuZGxlRm9jdXNUYWcoZXZlbnQsICdwcmV2aW91cycpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgIGhhbmRsZUZvY3VzVGFnKGV2ZW50LCAnbmV4dCcpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgICAgICAvLyBXYWl0IHVudGlsIElNRSBpcyBzZXR0bGVkLlxuICAgICAgICAgIGlmIChldmVudC53aGljaCA9PT0gMjI5KSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaGlnaGxpZ2h0ZWRJbmRleFJlZi5jdXJyZW50ICE9PSAtMSAmJiBwb3B1cE9wZW4pIHtcbiAgICAgICAgICAgIHZhciBvcHRpb24gPSBmaWx0ZXJlZE9wdGlvbnNbaGlnaGxpZ2h0ZWRJbmRleFJlZi5jdXJyZW50XTtcbiAgICAgICAgICAgIHZhciBkaXNhYmxlZCA9IGdldE9wdGlvbkRpc2FibGVkID8gZ2V0T3B0aW9uRGlzYWJsZWQob3B0aW9uKSA6IGZhbHNlOyAvLyBXZSBkb24ndCB3YW50IHRvIHZhbGlkYXRlIHRoZSBmb3JtLlxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxlY3ROZXdWYWx1ZShldmVudCwgb3B0aW9uLCAnc2VsZWN0LW9wdGlvbicpOyAvLyBNb3ZlIHRoZSBzZWxlY3Rpb24gdG8gdGhlIGVuZC5cblxuICAgICAgICAgICAgaWYgKGF1dG9Db21wbGV0ZSkge1xuICAgICAgICAgICAgICBpbnB1dFJlZi5jdXJyZW50LnNldFNlbGVjdGlvblJhbmdlKGlucHV0UmVmLmN1cnJlbnQudmFsdWUubGVuZ3RoLCBpbnB1dFJlZi5jdXJyZW50LnZhbHVlLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChmcmVlU29sbyAmJiBpbnB1dFZhbHVlICE9PSAnJyAmJiBpbnB1dFZhbHVlSXNTZWxlY3RlZFZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgaWYgKG11bHRpcGxlKSB7XG4gICAgICAgICAgICAgIC8vIEFsbG93IHBlb3BsZSB0byBhZGQgbmV3IHZhbHVlcyBiZWZvcmUgdGhleSBzdWJtaXQgdGhlIGZvcm0uXG4gICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGVjdE5ld1ZhbHVlKGV2ZW50LCBpbnB1dFZhbHVlLCAnY3JlYXRlLW9wdGlvbicsICdmcmVlU29sbycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0VzY2FwZSc6XG4gICAgICAgICAgaWYgKHBvcHVwT3Blbikge1xuICAgICAgICAgICAgLy8gQXZvaWQgT3BlcmEgdG8gZXhpdCBmdWxsc2NyZWVuIG1vZGUuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBBdm9pZCB0aGUgTW9kYWwgdG8gaGFuZGxlIHRoZSBldmVudC5cblxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBoYW5kbGVDbG9zZShldmVudCwgJ2VzY2FwZScpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY2xlYXJPbkVzY2FwZSAmJiAoaW5wdXRWYWx1ZSAhPT0gJycgfHwgbXVsdGlwbGUgJiYgdmFsdWUubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgIC8vIEF2b2lkIE9wZXJhIHRvIGV4aXQgZnVsbHNjcmVlbiBtb2RlLlxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gQXZvaWQgdGhlIE1vZGFsIHRvIGhhbmRsZSB0aGUgZXZlbnQuXG5cbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaGFuZGxlQ2xlYXIoZXZlbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ0JhY2tzcGFjZSc6XG4gICAgICAgICAgaWYgKG11bHRpcGxlICYmIGlucHV0VmFsdWUgPT09ICcnICYmIHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGZvY3VzZWRUYWcgPT09IC0xID8gdmFsdWUubGVuZ3RoIC0gMSA6IGZvY3VzZWRUYWc7XG4gICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgbmV3VmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGhhbmRsZVZhbHVlKGV2ZW50LCBuZXdWYWx1ZSwgJ3JlbW92ZS1vcHRpb24nLCB7XG4gICAgICAgICAgICAgIG9wdGlvbjogdmFsdWVbaW5kZXhdXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgfVxuXG4gICAgICBpZiAob3RoZXIub25LZXlEb3duKSB7XG4gICAgICAgIG90aGVyLm9uS2V5RG93bihldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgaGFuZGxlRm9jdXMgPSBmdW5jdGlvbiBoYW5kbGVGb2N1cyhldmVudCkge1xuICAgIHNldEZvY3VzZWQodHJ1ZSk7XG5cbiAgICBpZiAob3Blbk9uRm9jdXMgJiYgIWlnbm9yZUZvY3VzLmN1cnJlbnQpIHtcbiAgICAgIGhhbmRsZU9wZW4oZXZlbnQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlQmx1ciA9IGZ1bmN0aW9uIGhhbmRsZUJsdXIoZXZlbnQpIHtcbiAgICAvLyBJZ25vcmUgdGhlIGV2ZW50IHdoZW4gdXNpbmcgdGhlIHNjcm9sbGJhciB3aXRoIElFIDExXG4gICAgaWYgKGxpc3Rib3hSZWYuY3VycmVudCAhPT0gbnVsbCAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBsaXN0Ym94UmVmLmN1cnJlbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgaW5wdXRSZWYuY3VycmVudC5mb2N1cygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldEZvY3VzZWQoZmFsc2UpO1xuICAgIGZpcnN0Rm9jdXMuY3VycmVudCA9IHRydWU7XG4gICAgaWdub3JlRm9jdXMuY3VycmVudCA9IGZhbHNlO1xuXG4gICAgaWYgKGRlYnVnICYmIGlucHV0VmFsdWUgIT09ICcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGF1dG9TZWxlY3QgJiYgaGlnaGxpZ2h0ZWRJbmRleFJlZi5jdXJyZW50ICE9PSAtMSAmJiBwb3B1cE9wZW4pIHtcbiAgICAgIHNlbGVjdE5ld1ZhbHVlKGV2ZW50LCBmaWx0ZXJlZE9wdGlvbnNbaGlnaGxpZ2h0ZWRJbmRleFJlZi5jdXJyZW50XSwgJ2JsdXInKTtcbiAgICB9IGVsc2UgaWYgKGF1dG9TZWxlY3QgJiYgZnJlZVNvbG8gJiYgaW5wdXRWYWx1ZSAhPT0gJycpIHtcbiAgICAgIHNlbGVjdE5ld1ZhbHVlKGV2ZW50LCBpbnB1dFZhbHVlLCAnYmx1cicsICdmcmVlU29sbycpO1xuICAgIH0gZWxzZSBpZiAoY2xlYXJPbkJsdXIpIHtcbiAgICAgIHJlc2V0SW5wdXRWYWx1ZShldmVudCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGhhbmRsZUNsb3NlKGV2ZW50LCAnYmx1cicpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVJbnB1dENoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgdmFyIG5ld1ZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKGlucHV0VmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICBzZXRJbnB1dFZhbHVlKG5ld1ZhbHVlKTtcblxuICAgICAgaWYgKG9uSW5wdXRDaGFuZ2UpIHtcbiAgICAgICAgb25JbnB1dENoYW5nZShldmVudCwgbmV3VmFsdWUsICdpbnB1dCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChuZXdWYWx1ZSA9PT0gJycpIHtcbiAgICAgIGlmICghZGlzYWJsZUNsZWFyYWJsZSAmJiAhbXVsdGlwbGUpIHtcbiAgICAgICAgaGFuZGxlVmFsdWUoZXZlbnQsIG51bGwsICdjbGVhcicpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVPcGVuKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGhhbmRsZU9wdGlvbk1vdXNlT3ZlciA9IGZ1bmN0aW9uIGhhbmRsZU9wdGlvbk1vdXNlT3ZlcihldmVudCkge1xuICAgIHNldEhpZ2hsaWdodGVkSW5kZXgoe1xuICAgICAgZXZlbnQ6IGV2ZW50LFxuICAgICAgaW5kZXg6IE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24taW5kZXgnKSksXG4gICAgICByZWFzb246ICdtb3VzZSdcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgaGFuZGxlT3B0aW9uVG91Y2hTdGFydCA9IGZ1bmN0aW9uIGhhbmRsZU9wdGlvblRvdWNoU3RhcnQoKSB7XG4gICAgaXNUb3VjaC5jdXJyZW50ID0gdHJ1ZTtcbiAgfTtcblxuICB2YXIgaGFuZGxlT3B0aW9uQ2xpY2sgPSBmdW5jdGlvbiBoYW5kbGVPcHRpb25DbGljayhldmVudCkge1xuICAgIHZhciBpbmRleCA9IE51bWJlcihldmVudC5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24taW5kZXgnKSk7XG4gICAgc2VsZWN0TmV3VmFsdWUoZXZlbnQsIGZpbHRlcmVkT3B0aW9uc1tpbmRleF0sICdzZWxlY3Qtb3B0aW9uJyk7XG4gICAgaXNUb3VjaC5jdXJyZW50ID0gZmFsc2U7XG4gIH07XG5cbiAgdmFyIGhhbmRsZVRhZ0RlbGV0ZSA9IGZ1bmN0aW9uIGhhbmRsZVRhZ0RlbGV0ZShpbmRleCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlLnNsaWNlKCk7XG4gICAgICBuZXdWYWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgaGFuZGxlVmFsdWUoZXZlbnQsIG5ld1ZhbHVlLCAncmVtb3ZlLW9wdGlvbicsIHtcbiAgICAgICAgb3B0aW9uOiB2YWx1ZVtpbmRleF1cbiAgICAgIH0pO1xuICAgIH07XG4gIH07XG5cbiAgdmFyIGhhbmRsZVBvcHVwSW5kaWNhdG9yID0gZnVuY3Rpb24gaGFuZGxlUG9wdXBJbmRpY2F0b3IoZXZlbnQpIHtcbiAgICBpZiAob3Blbikge1xuICAgICAgaGFuZGxlQ2xvc2UoZXZlbnQsICd0b2dnbGVJbnB1dCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoYW5kbGVPcGVuKGV2ZW50KTtcbiAgICB9XG4gIH07IC8vIFByZXZlbnQgaW5wdXQgYmx1ciB3aGVuIGludGVyYWN0aW5nIHdpdGggdGhlIGNvbWJvYm94XG5cblxuICB2YXIgaGFuZGxlTW91c2VEb3duID0gZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykgIT09IGlkKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTsgLy8gRm9jdXMgdGhlIGlucHV0IHdoZW4gaW50ZXJhY3Rpbmcgd2l0aCB0aGUgY29tYm9ib3hcblxuXG4gIHZhciBoYW5kbGVDbGljayA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIGlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKTtcblxuICAgIGlmIChzZWxlY3RPbkZvY3VzICYmIGZpcnN0Rm9jdXMuY3VycmVudCAmJiBpbnB1dFJlZi5jdXJyZW50LnNlbGVjdGlvbkVuZCAtIGlucHV0UmVmLmN1cnJlbnQuc2VsZWN0aW9uU3RhcnQgPT09IDApIHtcbiAgICAgIGlucHV0UmVmLmN1cnJlbnQuc2VsZWN0KCk7XG4gICAgfVxuXG4gICAgZmlyc3RGb2N1cy5jdXJyZW50ID0gZmFsc2U7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUlucHV0TW91c2VEb3duID0gZnVuY3Rpb24gaGFuZGxlSW5wdXRNb3VzZURvd24oZXZlbnQpIHtcbiAgICBpZiAoaW5wdXRWYWx1ZSA9PT0gJycgfHwgIW9wZW4pIHtcbiAgICAgIGhhbmRsZVBvcHVwSW5kaWNhdG9yKGV2ZW50KTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGRpcnR5ID0gZnJlZVNvbG8gJiYgaW5wdXRWYWx1ZS5sZW5ndGggPiAwO1xuICBkaXJ0eSA9IGRpcnR5IHx8IChtdWx0aXBsZSA/IHZhbHVlLmxlbmd0aCA+IDAgOiB2YWx1ZSAhPT0gbnVsbCk7XG4gIHZhciBncm91cGVkT3B0aW9ucyA9IGZpbHRlcmVkT3B0aW9ucztcblxuICBpZiAoZ3JvdXBCeSkge1xuICAgIC8vIHVzZWQgdG8ga2VlcCB0cmFjayBvZiBrZXkgYW5kIGluZGV4ZXMgaW4gdGhlIHJlc3VsdCBhcnJheVxuICAgIHZhciBpbmRleEJ5ID0gbmV3IE1hcCgpO1xuICAgIHZhciB3YXJuID0gZmFsc2U7XG4gICAgZ3JvdXBlZE9wdGlvbnMgPSBmaWx0ZXJlZE9wdGlvbnMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG9wdGlvbiwgaW5kZXgpIHtcbiAgICAgIHZhciBncm91cCA9IGdyb3VwQnkob3B0aW9uKTtcblxuICAgICAgaWYgKGFjYy5sZW5ndGggPiAwICYmIGFjY1thY2MubGVuZ3RoIC0gMV0uZ3JvdXAgPT09IGdyb3VwKSB7XG4gICAgICAgIGFjY1thY2MubGVuZ3RoIC0gMV0ub3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGlmIChpbmRleEJ5LmdldChncm91cCkgJiYgIXdhcm4pIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk1hdGVyaWFsLVVJOiBUaGUgb3B0aW9ucyBwcm92aWRlZCBjb21iaW5lZCB3aXRoIHRoZSBgZ3JvdXBCeWAgbWV0aG9kIG9mIFwiLmNvbmNhdChjb21wb25lbnROYW1lLCBcIiByZXR1cm5zIGR1cGxpY2F0ZWQgaGVhZGVycy5cIiksICdZb3UgY2FuIHNvbHZlIHRoZSBpc3N1ZSBieSBzb3J0aW5nIHRoZSBvcHRpb25zIHdpdGggdGhlIG91dHB1dCBvZiBgZ3JvdXBCeWAuJyk7XG4gICAgICAgICAgICB3YXJuID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbmRleEJ5LnNldChncm91cCwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBhY2MucHVzaCh7XG4gICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgZ3JvdXA6IGdyb3VwLFxuICAgICAgICAgIG9wdGlvbnM6IFtvcHRpb25dXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZ2V0Um9vdFByb3BzOiBmdW5jdGlvbiBnZXRSb290UHJvcHMoKSB7XG4gICAgICB2YXIgb3RoZXIgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgJ2FyaWEtb3ducyc6IHBvcHVwT3BlbiA/IFwiXCIuY29uY2F0KGlkLCBcIi1wb3B1cFwiKSA6IG51bGwsXG4gICAgICAgIHJvbGU6ICdjb21ib2JveCcsXG4gICAgICAgICdhcmlhLWV4cGFuZGVkJzogcG9wdXBPcGVuXG4gICAgICB9LCBvdGhlciwge1xuICAgICAgICBvbktleURvd246IGhhbmRsZUtleURvd24ob3RoZXIpLFxuICAgICAgICBvbk1vdXNlRG93bjogaGFuZGxlTW91c2VEb3duLFxuICAgICAgICBvbkNsaWNrOiBoYW5kbGVDbGlja1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXRJbnB1dExhYmVsUHJvcHM6IGZ1bmN0aW9uIGdldElucHV0TGFiZWxQcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBcIlwiLmNvbmNhdChpZCwgXCItbGFiZWxcIiksXG4gICAgICAgIGh0bWxGb3I6IGlkXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2V0SW5wdXRQcm9wczogZnVuY3Rpb24gZ2V0SW5wdXRQcm9wcygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBpZCxcbiAgICAgICAgdmFsdWU6IGlucHV0VmFsdWUsXG4gICAgICAgIG9uQmx1cjogaGFuZGxlQmx1cixcbiAgICAgICAgb25Gb2N1czogaGFuZGxlRm9jdXMsXG4gICAgICAgIG9uQ2hhbmdlOiBoYW5kbGVJbnB1dENoYW5nZSxcbiAgICAgICAgb25Nb3VzZURvd246IGhhbmRsZUlucHV0TW91c2VEb3duLFxuICAgICAgICAvLyBpZiBvcGVuIHRoZW4gdGhpcyBpcyBoYW5kbGVkIGltcGVyYXRpdmVsZXkgc28gZG9uJ3QgbGV0IHJlYWN0IG92ZXJyaWRlXG4gICAgICAgIC8vIG9ubHkgaGF2ZSBhbiBvcGluaW9uIGFib3V0IHRoaXMgd2hlbiBjbG9zZWRcbiAgICAgICAgJ2FyaWEtYWN0aXZlZGVzY2VuZGFudCc6IHBvcHVwT3BlbiA/ICcnIDogbnVsbCxcbiAgICAgICAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogYXV0b0NvbXBsZXRlID8gJ2JvdGgnIDogJ2xpc3QnLFxuICAgICAgICAnYXJpYS1jb250cm9scyc6IHBvcHVwT3BlbiA/IFwiXCIuY29uY2F0KGlkLCBcIi1wb3B1cFwiKSA6IG51bGwsXG4gICAgICAgIC8vIERpc2FibGUgYnJvd3NlcidzIHN1Z2dlc3Rpb24gdGhhdCBtaWdodCBvdmVybGFwIHdpdGggdGhlIHBvcHVwLlxuICAgICAgICAvLyBIYW5kbGUgYXV0b2NvbXBsZXRlIGJ1dCBub3QgYXV0b2ZpbGwuXG4gICAgICAgIGF1dG9Db21wbGV0ZTogJ29mZicsXG4gICAgICAgIHJlZjogaW5wdXRSZWYsXG4gICAgICAgIGF1dG9DYXBpdGFsaXplOiAnbm9uZScsXG4gICAgICAgIHNwZWxsQ2hlY2s6ICdmYWxzZSdcbiAgICAgIH07XG4gICAgfSxcbiAgICBnZXRDbGVhclByb3BzOiBmdW5jdGlvbiBnZXRDbGVhclByb3BzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGFiSW5kZXg6IC0xLFxuICAgICAgICBvbkNsaWNrOiBoYW5kbGVDbGVhclxuICAgICAgfTtcbiAgICB9LFxuICAgIGdldFBvcHVwSW5kaWNhdG9yUHJvcHM6IGZ1bmN0aW9uIGdldFBvcHVwSW5kaWNhdG9yUHJvcHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0YWJJbmRleDogLTEsXG4gICAgICAgIG9uQ2xpY2s6IGhhbmRsZVBvcHVwSW5kaWNhdG9yXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2V0VGFnUHJvcHM6IGZ1bmN0aW9uIGdldFRhZ1Byb3BzKF9yZWY0KSB7XG4gICAgICB2YXIgaW5kZXggPSBfcmVmNC5pbmRleDtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICdkYXRhLXRhZy1pbmRleCc6IGluZGV4LFxuICAgICAgICB0YWJJbmRleDogLTEsXG4gICAgICAgIG9uRGVsZXRlOiBoYW5kbGVUYWdEZWxldGUoaW5kZXgpXG4gICAgICB9O1xuICAgIH0sXG4gICAgZ2V0TGlzdGJveFByb3BzOiBmdW5jdGlvbiBnZXRMaXN0Ym94UHJvcHMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICByb2xlOiAnbGlzdGJveCcsXG4gICAgICAgIGlkOiBcIlwiLmNvbmNhdChpZCwgXCItcG9wdXBcIiksXG4gICAgICAgICdhcmlhLWxhYmVsbGVkYnknOiBcIlwiLmNvbmNhdChpZCwgXCItbGFiZWxcIiksXG4gICAgICAgIHJlZjogaGFuZGxlTGlzdGJveFJlZixcbiAgICAgICAgb25Nb3VzZURvd246IGZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XG4gICAgICAgICAgLy8gUHJldmVudCBibHVyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9LFxuICAgIGdldE9wdGlvblByb3BzOiBmdW5jdGlvbiBnZXRPcHRpb25Qcm9wcyhfcmVmNSkge1xuICAgICAgdmFyIGluZGV4ID0gX3JlZjUuaW5kZXgsXG4gICAgICAgICAgb3B0aW9uID0gX3JlZjUub3B0aW9uO1xuICAgICAgdmFyIHNlbGVjdGVkID0gKG11bHRpcGxlID8gdmFsdWUgOiBbdmFsdWVdKS5zb21lKGZ1bmN0aW9uICh2YWx1ZTIpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlMiAhPSBudWxsICYmIGdldE9wdGlvblNlbGVjdGVkKG9wdGlvbiwgdmFsdWUyKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGRpc2FibGVkID0gZ2V0T3B0aW9uRGlzYWJsZWQgPyBnZXRPcHRpb25EaXNhYmxlZChvcHRpb24pIDogZmFsc2U7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICB0YWJJbmRleDogLTEsXG4gICAgICAgIHJvbGU6ICdvcHRpb24nLFxuICAgICAgICBpZDogXCJcIi5jb25jYXQoaWQsIFwiLW9wdGlvbi1cIikuY29uY2F0KGluZGV4KSxcbiAgICAgICAgb25Nb3VzZU92ZXI6IGhhbmRsZU9wdGlvbk1vdXNlT3ZlcixcbiAgICAgICAgb25DbGljazogaGFuZGxlT3B0aW9uQ2xpY2ssXG4gICAgICAgIG9uVG91Y2hTdGFydDogaGFuZGxlT3B0aW9uVG91Y2hTdGFydCxcbiAgICAgICAgJ2RhdGEtb3B0aW9uLWluZGV4JzogaW5kZXgsXG4gICAgICAgICdhcmlhLWRpc2FibGVkJzogZGlzYWJsZWQsXG4gICAgICAgICdhcmlhLXNlbGVjdGVkJzogc2VsZWN0ZWRcbiAgICAgIH07XG4gICAgfSxcbiAgICBpZDogaWQsXG4gICAgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgZGlydHk6IGRpcnR5LFxuICAgIHBvcHVwT3BlbjogcG9wdXBPcGVuLFxuICAgIGZvY3VzZWQ6IGZvY3VzZWQgfHwgZm9jdXNlZFRhZyAhPT0gLTEsXG4gICAgYW5jaG9yRWw6IGFuY2hvckVsLFxuICAgIHNldEFuY2hvckVsOiBzZXRBbmNob3JFbCxcbiAgICBmb2N1c2VkVGFnOiBmb2N1c2VkVGFnLFxuICAgIGdyb3VwZWRPcHRpb25zOiBncm91cGVkT3B0aW9uc1xuICB9O1xufSIsInZhciBzYWZlSXNOYU4gPSBOdW1iZXIuaXNOYU4gfHxcbiAgICBmdW5jdGlvbiBwb255ZmlsbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gdmFsdWU7XG4gICAgfTtcbmZ1bmN0aW9uIGlzRXF1YWwoZmlyc3QsIHNlY29uZCkge1xuICAgIGlmIChmaXJzdCA9PT0gc2Vjb25kKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2FmZUlzTmFOKGZpcnN0KSAmJiBzYWZlSXNOYU4oc2Vjb25kKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gYXJlSW5wdXRzRXF1YWwobmV3SW5wdXRzLCBsYXN0SW5wdXRzKSB7XG4gICAgaWYgKG5ld0lucHV0cy5sZW5ndGggIT09IGxhc3RJbnB1dHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdJbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsKG5ld0lucHV0c1tpXSwgbGFzdElucHV0c1tpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbWVtb2l6ZU9uZShyZXN1bHRGbiwgaXNFcXVhbCkge1xuICAgIGlmIChpc0VxdWFsID09PSB2b2lkIDApIHsgaXNFcXVhbCA9IGFyZUlucHV0c0VxdWFsOyB9XG4gICAgdmFyIGxhc3RUaGlzO1xuICAgIHZhciBsYXN0QXJncyA9IFtdO1xuICAgIHZhciBsYXN0UmVzdWx0O1xuICAgIHZhciBjYWxsZWRPbmNlID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gbWVtb2l6ZWQoKSB7XG4gICAgICAgIHZhciBuZXdBcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBuZXdBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxlZE9uY2UgJiYgbGFzdFRoaXMgPT09IHRoaXMgJiYgaXNFcXVhbChuZXdBcmdzLCBsYXN0QXJncykpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGxhc3RSZXN1bHQgPSByZXN1bHRGbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgY2FsbGVkT25jZSA9IHRydWU7XG4gICAgICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICAgICAgbGFzdEFyZ3MgPSBuZXdBcmdzO1xuICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplT25lO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlNlbGVjdF9zZWxlY3RfXzNUd1ZkIC5NdWlGaWxsZWRJbnB1dC11bmRlcmxpbmU6YmVmb3JlLCAuU2VsZWN0X3NlbGVjdF9fM1R3VmQgLk11aUZpbGxlZElucHV0LXVuZGVybGluZTphZnRlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vU2VsZWN0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdNO0VBRUUsYUFBQTtBQUhSXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zZWxlY3Qge1xcclxcbiAgOmdsb2JhbCB7XFxyXFxuICAgIC5NdWlGaWxsZWRJbnB1dC11bmRlcmxpbmUge1xcclxcbiAgICAgICY6YmVmb3JlLFxcclxcbiAgICAgICY6YWZ0ZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic2VsZWN0XCI6IFwiU2VsZWN0X3NlbGVjdF9fM1R3VmRcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuVGV4dElucHV0X3RleHRJbnB1dF9fMzVfMVAgPiAuTXVpSW5wdXRCYXNlLXJvb3Qge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0NBREJFQTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLlRleHRJbnB1dF90ZXh0SW5wdXRfXzM1XzFQID4gLk11aUlucHV0QmFzZS1yb290OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uVGV4dElucHV0X3RleHRJbnB1dF9fMzVfMVAgPiAuTXVpSW5wdXRCYXNlLXJvb3Q6Zm9jdXNlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogI2ZjZmNmYiAwIDAgMCAycHg7XFxuICAgICAgICAgIGJveC1zaGFkb3c6ICNmY2ZjZmIgMCAwIDAgMnB4O1xcbiAgYm9yZGVyLWNvbG9yOiBcXFwiI2ZjZmNmYlxcXCI7XFxufVxcbi5UZXh0SW5wdXRfdGV4dElucHV0X18zNV8xUCA+IC5NdWlJbnB1dEJhc2Utcm9vdC5NdWktZm9jdXNlZCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAwIDFweCAjQ0FEQkVBO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggI0NBREJFQTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG4uVGV4dElucHV0X3RleHRJbnB1dF9fMzVfMVAgPiAuTXVpLWVycm9yIHtcXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcXG59XFxuLlRleHRJbnB1dF90ZXh0SW5wdXRfXzM1XzFQID4gbGFiZWwge1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstZ3JleSk7XFxufVxcblxcbi5UZXh0SW5wdXRfbm9MYWJlbF9fM2RiQVAgLk11aUlucHV0QmFzZS1pbnB1dCB7XFxuICBwYWRkaW5nLXRvcDogMTRweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vVGV4dElucHV0Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVJO0VBQ0UseUJBQUE7RUFDRSxnQkFBQTtFQUVBLHVCQUFBO0FBRlI7QUFJUTtFQUNFLHVCQUFBO0FBRlY7QUFJUTtFQUNFLHVCQUFBO0VBQ0EscUNBQUE7VUFBQSw2QkFBQTtFQUNBLHVCQUFBO0FBRlY7QUFLUTtFQUNFLHFDQUFBO1VBQUEsNkJBQUE7RUFDQSx1QkFBQTtBQUhWO0FBT0k7RUFDRSw4QkFBQTtBQUxOO0FBUUk7RUFDRSw2QkFBQTtBQU5OOztBQWFJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQVZOXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50ZXh0SW5wdXQge1xcclxcbiAgJjpnbG9iYWwge1xcclxcbiAgICA+IC5NdWlJbnB1dEJhc2Utcm9vdCB7XFxyXFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NBREJFQTtcXHJcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgICAgICAvLyBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIFxcclxcbiAgICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgJjpmb2N1c2VkIHtcXHJcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgIGJveC1zaGFkb3c6ICNmY2ZjZmIgMCAwIDAgMnB4O1xcclxcbiAgICAgICAgICBib3JkZXItY29sb3I6ICcjZmNmY2ZiJztcXHJcXG4gICAgICAgIH1cXHJcXG4gIFxcclxcbiAgICAgICAgJi5NdWktZm9jdXNlZCB7XFxyXFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjQ0FEQkVBO1xcclxcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA+IC5NdWktZXJyb3Ige1xcclxcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgPiBsYWJlbCB7XFxyXFxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstZ3JleSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5vTGFiZWwge1xcclxcbiAgOmdsb2JhbCB7XFxyXFxuICAgIC5NdWlJbnB1dEJhc2UtaW5wdXQge1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xcclxcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInRleHRJbnB1dFwiOiBcIlRleHRJbnB1dF90ZXh0SW5wdXRfXzM1XzFQXCIsXG5cdFwibm9MYWJlbFwiOiBcIlRleHRJbnB1dF9ub0xhYmVsX18zZGJBUFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8qKiFcbiAqIEBmaWxlT3ZlcnZpZXcgS2lja2FzcyBsaWJyYXJ5IHRvIGNyZWF0ZSBhbmQgcGxhY2UgcG9wcGVycyBuZWFyIHRoZWlyIHJlZmVyZW5jZSBlbGVtZW50cy5cbiAqIEB2ZXJzaW9uIDEuMTYuMS1sdHNcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTYgRmVkZXJpY28gWml2b2xvIGFuZCBjb250cmlidXRvcnNcbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICovXG52YXIgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJztcblxudmFyIHRpbWVvdXREdXJhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxvbmdlclRpbWVvdXRCcm93c2VycyA9IFsnRWRnZScsICdUcmlkZW50JywgJ0ZpcmVmb3gnXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsb25nZXJUaW1lb3V0QnJvd3NlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoaXNCcm93c2VyICYmIG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihsb25nZXJUaW1lb3V0QnJvd3NlcnNbaV0pID49IDApIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gMDtcbn0oKTtcblxuZnVuY3Rpb24gbWljcm90YXNrRGVib3VuY2UoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYWxsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICB3aW5kb3cuUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICBjYWxsZWQgPSBmYWxzZTtcbiAgICAgIGZuKCk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRhc2tEZWJvdW5jZShmbikge1xuICB2YXIgc2NoZWR1bGVkID0gZmFsc2U7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFzY2hlZHVsZWQpIHtcbiAgICAgIHNjaGVkdWxlZCA9IHRydWU7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIGZuKCk7XG4gICAgICB9LCB0aW1lb3V0RHVyYXRpb24pO1xuICAgIH1cbiAgfTtcbn1cblxudmFyIHN1cHBvcnRzTWljcm9UYXNrcyA9IGlzQnJvd3NlciAmJiB3aW5kb3cuUHJvbWlzZTtcblxuLyoqXG4qIENyZWF0ZSBhIGRlYm91bmNlZCB2ZXJzaW9uIG9mIGEgbWV0aG9kLCB0aGF0J3MgYXN5bmNocm9ub3VzbHkgZGVmZXJyZWRcbiogYnV0IGNhbGxlZCBpbiB0aGUgbWluaW11bSB0aW1lIHBvc3NpYmxlLlxuKlxuKiBAbWV0aG9kXG4qIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiogQGFyZ3VtZW50IHtGdW5jdGlvbn0gZm5cbiogQHJldHVybnMge0Z1bmN0aW9ufVxuKi9cbnZhciBkZWJvdW5jZSA9IHN1cHBvcnRzTWljcm9UYXNrcyA/IG1pY3JvdGFza0RlYm91bmNlIDogdGFza0RlYm91bmNlO1xuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiB2YXJpYWJsZSBpcyBhIGZ1bmN0aW9uXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0FueX0gZnVuY3Rpb25Ub0NoZWNrIC0gdmFyaWFibGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBhbnN3ZXIgdG86IGlzIGEgZnVuY3Rpb24/XG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24oZnVuY3Rpb25Ub0NoZWNrKSB7XG4gIHZhciBnZXRUeXBlID0ge307XG4gIHJldHVybiBmdW5jdGlvblRvQ2hlY2sgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGZ1bmN0aW9uVG9DaGVjaykgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogR2V0IENTUyBjb21wdXRlZCBwcm9wZXJ0eSBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwcm9wZXJ0eVxuICovXG5mdW5jdGlvbiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCwgcHJvcGVydHkpIHtcbiAgaWYgKGVsZW1lbnQubm9kZVR5cGUgIT09IDEpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcbiAgdmFyIHdpbmRvdyA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgdmFyIGNzcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQsIG51bGwpO1xuICByZXR1cm4gcHJvcGVydHkgPyBjc3NbcHJvcGVydHldIDogY3NzO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHBhcmVudE5vZGUgb3IgdGhlIGhvc3Qgb2YgdGhlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRQYXJlbnROb2RlKGVsZW1lbnQpIHtcbiAgaWYgKGVsZW1lbnQubm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG4gIHJldHVybiBlbGVtZW50LnBhcmVudE5vZGUgfHwgZWxlbWVudC5ob3N0O1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBwYXJlbnQgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IHNjcm9sbCBwYXJlbnRcbiAqL1xuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gUmV0dXJuIGJvZHksIGBnZXRTY3JvbGxgIHdpbGwgdGFrZSBjYXJlIHRvIGdldCB0aGUgY29ycmVjdCBgc2Nyb2xsVG9wYCBmcm9tIGl0XG4gIGlmICghZWxlbWVudCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5O1xuICB9XG5cbiAgc3dpdGNoIChlbGVtZW50Lm5vZGVOYW1lKSB7XG4gICAgY2FzZSAnSFRNTCc6XG4gICAgY2FzZSAnQk9EWSc6XG4gICAgICByZXR1cm4gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHk7XG4gICAgY2FzZSAnI2RvY3VtZW50JzpcbiAgICAgIHJldHVybiBlbGVtZW50LmJvZHk7XG4gIH1cblxuICAvLyBGaXJlZm94IHdhbnQgdXMgdG8gY2hlY2sgYC14YCBhbmQgYC15YCB2YXJpYXRpb25zIGFzIHdlbGxcblxuICB2YXIgX2dldFN0eWxlQ29tcHV0ZWRQcm9wID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsZW1lbnQpLFxuICAgICAgb3ZlcmZsb3cgPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3csXG4gICAgICBvdmVyZmxvd1ggPSBfZ2V0U3R5bGVDb21wdXRlZFByb3Aub3ZlcmZsb3dYLFxuICAgICAgb3ZlcmZsb3dZID0gX2dldFN0eWxlQ29tcHV0ZWRQcm9wLm92ZXJmbG93WTtcblxuICBpZiAoLyhhdXRvfHNjcm9sbHxvdmVybGF5KS8udGVzdChvdmVyZmxvdyArIG92ZXJmbG93WSArIG92ZXJmbG93WCkpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShlbGVtZW50KSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcmVmZXJlbmNlIG5vZGUgb2YgdGhlIHJlZmVyZW5jZSBvYmplY3QsIG9yIHRoZSByZWZlcmVuY2Ugb2JqZWN0IGl0c2VsZi5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IHJlZmVyZW5jZSAtIHRoZSByZWZlcmVuY2UgZWxlbWVudCAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcmV0dXJucyB7RWxlbWVudH0gcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSB7XG4gIHJldHVybiByZWZlcmVuY2UgJiYgcmVmZXJlbmNlLnJlZmVyZW5jZU5vZGUgPyByZWZlcmVuY2UucmVmZXJlbmNlTm9kZSA6IHJlZmVyZW5jZTtcbn1cblxudmFyIGlzSUUxMSA9IGlzQnJvd3NlciAmJiAhISh3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgZG9jdW1lbnQuZG9jdW1lbnRNb2RlKTtcbnZhciBpc0lFMTAgPSBpc0Jyb3dzZXIgJiYgL01TSUUgMTAvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyBpZiB0aGUgYnJvd3NlciBpcyBJbnRlcm5ldCBFeHBsb3JlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtOdW1iZXJ9IHZlcnNpb24gdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSBpc0lFXG4gKi9cbmZ1bmN0aW9uIGlzSUUodmVyc2lvbikge1xuICBpZiAodmVyc2lvbiA9PT0gMTEpIHtcbiAgICByZXR1cm4gaXNJRTExO1xuICB9XG4gIGlmICh2ZXJzaW9uID09PSAxMCkge1xuICAgIHJldHVybiBpc0lFMTA7XG4gIH1cbiAgcmV0dXJuIGlzSUUxMSB8fCBpc0lFMTA7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb2Zmc2V0IHBhcmVudCBvZiB0aGUgZ2l2ZW4gZWxlbWVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJucyB7RWxlbWVudH0gb2Zmc2V0IHBhcmVudFxuICovXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWxlbWVudCkge1xuICBpZiAoIWVsZW1lbnQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgdmFyIG5vT2Zmc2V0UGFyZW50ID0gaXNJRSgxMCkgPyBkb2N1bWVudC5ib2R5IDogbnVsbDtcblxuICAvLyBOT1RFOiAxIERPTSBhY2Nlc3MgaGVyZVxuICB2YXIgb2Zmc2V0UGFyZW50ID0gZWxlbWVudC5vZmZzZXRQYXJlbnQgfHwgbnVsbDtcbiAgLy8gU2tpcCBoaWRkZW4gZWxlbWVudHMgd2hpY2ggZG9uJ3QgaGF2ZSBhbiBvZmZzZXRQYXJlbnRcbiAgd2hpbGUgKG9mZnNldFBhcmVudCA9PT0gbm9PZmZzZXRQYXJlbnQgJiYgZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICBvZmZzZXRQYXJlbnQgPSAoZWxlbWVudCA9IGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5vZmZzZXRQYXJlbnQ7XG4gIH1cblxuICB2YXIgbm9kZU5hbWUgPSBvZmZzZXRQYXJlbnQgJiYgb2Zmc2V0UGFyZW50Lm5vZGVOYW1lO1xuXG4gIGlmICghbm9kZU5hbWUgfHwgbm9kZU5hbWUgPT09ICdCT0RZJyB8fCBub2RlTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IDogZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgLy8gLm9mZnNldFBhcmVudCB3aWxsIHJldHVybiB0aGUgY2xvc2VzdCBUSCwgVEQgb3IgVEFCTEUgaW4gY2FzZVxuICAvLyBubyBvZmZzZXRQYXJlbnQgaXMgcHJlc2VudCwgSSBoYXRlIHRoaXMgam9iLi4uXG4gIGlmIChbJ1RIJywgJ1REJywgJ1RBQkxFJ10uaW5kZXhPZihvZmZzZXRQYXJlbnQubm9kZU5hbWUpICE9PSAtMSAmJiBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkob2Zmc2V0UGFyZW50LCAncG9zaXRpb24nKSA9PT0gJ3N0YXRpYycpIHtcbiAgICByZXR1cm4gZ2V0T2Zmc2V0UGFyZW50KG9mZnNldFBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0UGFyZW50O1xufVxuXG5mdW5jdGlvbiBpc09mZnNldENvbnRhaW5lcihlbGVtZW50KSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIG5vZGVOYW1lID09PSAnSFRNTCcgfHwgZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpID09PSBlbGVtZW50O1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSByb290IG5vZGUgKGRvY3VtZW50LCBzaGFkb3dET00gcm9vdCkgb2YgdGhlIGdpdmVuIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gbm9kZVxuICogQHJldHVybnMge0VsZW1lbnR9IHJvb3Qgbm9kZVxuICovXG5mdW5jdGlvbiBnZXRSb290KG5vZGUpIHtcbiAgaWYgKG5vZGUucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBnZXRSb290KG5vZGUucGFyZW50Tm9kZSk7XG4gIH1cblxuICByZXR1cm4gbm9kZTtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgb2Zmc2V0IHBhcmVudCBjb21tb24gdG8gdGhlIHR3byBwcm92aWRlZCBub2Rlc1xuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50MVxuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50MlxuICogQHJldHVybnMge0VsZW1lbnR9IGNvbW1vbiBvZmZzZXQgcGFyZW50XG4gKi9cbmZ1bmN0aW9uIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGVsZW1lbnQyKSB7XG4gIC8vIFRoaXMgY2hlY2sgaXMgbmVlZGVkIHRvIGF2b2lkIGVycm9ycyBpbiBjYXNlIG9uZSBvZiB0aGUgZWxlbWVudHMgaXNuJ3QgZGVmaW5lZCBmb3IgYW55IHJlYXNvblxuICBpZiAoIWVsZW1lbnQxIHx8ICFlbGVtZW50MS5ub2RlVHlwZSB8fCAhZWxlbWVudDIgfHwgIWVsZW1lbnQyLm5vZGVUeXBlKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgfVxuXG4gIC8vIEhlcmUgd2UgbWFrZSBzdXJlIHRvIGdpdmUgYXMgXCJzdGFydFwiIHRoZSBlbGVtZW50IHRoYXQgY29tZXMgZmlyc3QgaW4gdGhlIERPTVxuICB2YXIgb3JkZXIgPSBlbGVtZW50MS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50MikgJiBOb2RlLkRPQ1VNRU5UX1BPU0lUSU9OX0ZPTExPV0lORztcbiAgdmFyIHN0YXJ0ID0gb3JkZXIgPyBlbGVtZW50MSA6IGVsZW1lbnQyO1xuICB2YXIgZW5kID0gb3JkZXIgPyBlbGVtZW50MiA6IGVsZW1lbnQxO1xuXG4gIC8vIEdldCBjb21tb24gYW5jZXN0b3IgY29udGFpbmVyXG4gIHZhciByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gIHJhbmdlLnNldFN0YXJ0KHN0YXJ0LCAwKTtcbiAgcmFuZ2Uuc2V0RW5kKGVuZCwgMCk7XG4gIHZhciBjb21tb25BbmNlc3RvckNvbnRhaW5lciA9IHJhbmdlLmNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xuXG4gIC8vIEJvdGggbm9kZXMgYXJlIGluc2lkZSAjZG9jdW1lbnRcblxuICBpZiAoZWxlbWVudDEgIT09IGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyICYmIGVsZW1lbnQyICE9PSBjb21tb25BbmNlc3RvckNvbnRhaW5lciB8fCBzdGFydC5jb250YWlucyhlbmQpKSB7XG4gICAgaWYgKGlzT2Zmc2V0Q29udGFpbmVyKGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyKSkge1xuICAgICAgcmV0dXJuIGNvbW1vbkFuY2VzdG9yQ29udGFpbmVyO1xuICAgIH1cblxuICAgIHJldHVybiBnZXRPZmZzZXRQYXJlbnQoY29tbW9uQW5jZXN0b3JDb250YWluZXIpO1xuICB9XG5cbiAgLy8gb25lIG9mIHRoZSBub2RlcyBpcyBpbnNpZGUgc2hhZG93RE9NLCBmaW5kIHdoaWNoIG9uZVxuICB2YXIgZWxlbWVudDFyb290ID0gZ2V0Um9vdChlbGVtZW50MSk7XG4gIGlmIChlbGVtZW50MXJvb3QuaG9zdCkge1xuICAgIHJldHVybiBmaW5kQ29tbW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQxcm9vdC5ob3N0LCBlbGVtZW50Mik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZpbmRDb21tb25PZmZzZXRQYXJlbnQoZWxlbWVudDEsIGdldFJvb3QoZWxlbWVudDIpLmhvc3QpO1xuICB9XG59XG5cbi8qKlxuICogR2V0cyB0aGUgc2Nyb2xsIHZhbHVlIG9mIHRoZSBnaXZlbiBlbGVtZW50IGluIHRoZSBnaXZlbiBzaWRlICh0b3AgYW5kIGxlZnQpXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzaWRlIGB0b3BgIG9yIGBsZWZ0YFxuICogQHJldHVybnMge251bWJlcn0gYW1vdW50IG9mIHNjcm9sbGVkIHBpeGVsc1xuICovXG5mdW5jdGlvbiBnZXRTY3JvbGwoZWxlbWVudCkge1xuICB2YXIgc2lkZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ3RvcCc7XG5cbiAgdmFyIHVwcGVyU2lkZSA9IHNpZGUgPT09ICd0b3AnID8gJ3Njcm9sbFRvcCcgOiAnc2Nyb2xsTGVmdCc7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQk9EWScgfHwgbm9kZU5hbWUgPT09ICdIVE1MJykge1xuICAgIHZhciBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB2YXIgc2Nyb2xsaW5nRWxlbWVudCA9IGVsZW1lbnQub3duZXJEb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50IHx8IGh0bWw7XG4gICAgcmV0dXJuIHNjcm9sbGluZ0VsZW1lbnRbdXBwZXJTaWRlXTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50W3VwcGVyU2lkZV07XG59XG5cbi8qXG4gKiBTdW0gb3Igc3VidHJhY3QgdGhlIGVsZW1lbnQgc2Nyb2xsIHZhbHVlcyAobGVmdCBhbmQgdG9wKSBmcm9tIGEgZ2l2ZW4gcmVjdCBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSByZWN0IC0gUmVjdCBvYmplY3QgeW91IHdhbnQgdG8gY2hhbmdlXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50IC0gVGhlIGVsZW1lbnQgZnJvbSB0aGUgZnVuY3Rpb24gcmVhZHMgdGhlIHNjcm9sbCB2YWx1ZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gc3VidHJhY3QgLSBzZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBzdWJ0cmFjdCB0aGUgc2Nyb2xsIHZhbHVlc1xuICogQHJldHVybiB7T2JqZWN0fSByZWN0IC0gVGhlIG1vZGlmaWVyIHJlY3Qgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluY2x1ZGVTY3JvbGwocmVjdCwgZWxlbWVudCkge1xuICB2YXIgc3VidHJhY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IGZhbHNlO1xuXG4gIHZhciBzY3JvbGxUb3AgPSBnZXRTY3JvbGwoZWxlbWVudCwgJ3RvcCcpO1xuICB2YXIgc2Nyb2xsTGVmdCA9IGdldFNjcm9sbChlbGVtZW50LCAnbGVmdCcpO1xuICB2YXIgbW9kaWZpZXIgPSBzdWJ0cmFjdCA/IC0xIDogMTtcbiAgcmVjdC50b3AgKz0gc2Nyb2xsVG9wICogbW9kaWZpZXI7XG4gIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcCAqIG1vZGlmaWVyO1xuICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdCAqIG1vZGlmaWVyO1xuICByZWN0LnJpZ2h0ICs9IHNjcm9sbExlZnQgKiBtb2RpZmllcjtcbiAgcmV0dXJuIHJlY3Q7XG59XG5cbi8qXG4gKiBIZWxwZXIgdG8gZGV0ZWN0IGJvcmRlcnMgb2YgYSBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlc1xuICogUmVzdWx0IG9mIGBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHlgIG9uIHRoZSBnaXZlbiBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gYXhpcyAtIGB4YCBvciBgeWBcbiAqIEByZXR1cm4ge251bWJlcn0gYm9yZGVycyAtIFRoZSBib3JkZXJzIHNpemUgb2YgdGhlIGdpdmVuIGF4aXNcbiAqL1xuXG5mdW5jdGlvbiBnZXRCb3JkZXJzU2l6ZShzdHlsZXMsIGF4aXMpIHtcbiAgdmFyIHNpZGVBID0gYXhpcyA9PT0gJ3gnID8gJ0xlZnQnIDogJ1RvcCc7XG4gIHZhciBzaWRlQiA9IHNpZGVBID09PSAnTGVmdCcgPyAnUmlnaHQnIDogJ0JvdHRvbSc7XG5cbiAgcmV0dXJuIHBhcnNlRmxvYXQoc3R5bGVzWydib3JkZXInICsgc2lkZUEgKyAnV2lkdGgnXSkgKyBwYXJzZUZsb2F0KHN0eWxlc1snYm9yZGVyJyArIHNpZGVCICsgJ1dpZHRoJ10pO1xufVxuXG5mdW5jdGlvbiBnZXRTaXplKGF4aXMsIGJvZHksIGh0bWwsIGNvbXB1dGVkU3R5bGUpIHtcbiAgcmV0dXJuIE1hdGgubWF4KGJvZHlbJ29mZnNldCcgKyBheGlzXSwgYm9keVsnc2Nyb2xsJyArIGF4aXNdLCBodG1sWydjbGllbnQnICsgYXhpc10sIGh0bWxbJ29mZnNldCcgKyBheGlzXSwgaHRtbFsnc2Nyb2xsJyArIGF4aXNdLCBpc0lFKDEwKSA/IHBhcnNlSW50KGh0bWxbJ29mZnNldCcgKyBheGlzXSkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ1RvcCcgOiAnTGVmdCcpXSkgKyBwYXJzZUludChjb21wdXRlZFN0eWxlWydtYXJnaW4nICsgKGF4aXMgPT09ICdIZWlnaHQnID8gJ0JvdHRvbScgOiAnUmlnaHQnKV0pIDogMCk7XG59XG5cbmZ1bmN0aW9uIGdldFdpbmRvd1NpemVzKGRvY3VtZW50KSB7XG4gIHZhciBib2R5ID0gZG9jdW1lbnQuYm9keTtcbiAgdmFyIGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIHZhciBjb21wdXRlZFN0eWxlID0gaXNJRSgxMCkgJiYgZ2V0Q29tcHV0ZWRTdHlsZShodG1sKTtcblxuICByZXR1cm4ge1xuICAgIGhlaWdodDogZ2V0U2l6ZSgnSGVpZ2h0JywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSksXG4gICAgd2lkdGg6IGdldFNpemUoJ1dpZHRoJywgYm9keSwgaHRtbCwgY29tcHV0ZWRTdHlsZSlcbiAgfTtcbn1cblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG5cblxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG4vKipcbiAqIEdpdmVuIGVsZW1lbnQgb2Zmc2V0cywgZ2VuZXJhdGUgYW4gb3V0cHV0IHNpbWlsYXIgdG8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge09iamVjdH0gb2Zmc2V0c1xuICogQHJldHVybnMge09iamVjdH0gQ2xpZW50UmVjdCBsaWtlIG91dHB1dFxuICovXG5mdW5jdGlvbiBnZXRDbGllbnRSZWN0KG9mZnNldHMpIHtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBvZmZzZXRzLCB7XG4gICAgcmlnaHQ6IG9mZnNldHMubGVmdCArIG9mZnNldHMud2lkdGgsXG4gICAgYm90dG9tOiBvZmZzZXRzLnRvcCArIG9mZnNldHMuaGVpZ2h0XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCBib3VuZGluZyBjbGllbnQgcmVjdCBvZiBnaXZlbiBlbGVtZW50XG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAcmV0dXJuIHtPYmplY3R9IGNsaWVudCByZWN0XG4gKi9cbmZ1bmN0aW9uIGdldEJvdW5kaW5nQ2xpZW50UmVjdChlbGVtZW50KSB7XG4gIHZhciByZWN0ID0ge307XG5cbiAgLy8gSUUxMCAxMCBGSVg6IFBsZWFzZSwgZG9uJ3QgYXNrLCB0aGUgZWxlbWVudCBpc24ndFxuICAvLyBjb25zaWRlcmVkIGluIERPTSBpbiBzb21lIGNpcmN1bXN0YW5jZXMuLi5cbiAgLy8gVGhpcyBpc24ndCByZXByb2R1Y2libGUgaW4gSUUxMCBjb21wYXRpYmlsaXR5IG1vZGUgb2YgSUUxMVxuICB0cnkge1xuICAgIGlmIChpc0lFKDEwKSkge1xuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgc2Nyb2xsVG9wID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICd0b3AnKTtcbiAgICAgIHZhciBzY3JvbGxMZWZ0ID0gZ2V0U2Nyb2xsKGVsZW1lbnQsICdsZWZ0Jyk7XG4gICAgICByZWN0LnRvcCArPSBzY3JvbGxUb3A7XG4gICAgICByZWN0LmxlZnQgKz0gc2Nyb2xsTGVmdDtcbiAgICAgIHJlY3QuYm90dG9tICs9IHNjcm9sbFRvcDtcbiAgICAgIHJlY3QucmlnaHQgKz0gc2Nyb2xsTGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSB7XG4gICAgbGVmdDogcmVjdC5sZWZ0LFxuICAgIHRvcDogcmVjdC50b3AsXG4gICAgd2lkdGg6IHJlY3QucmlnaHQgLSByZWN0LmxlZnQsXG4gICAgaGVpZ2h0OiByZWN0LmJvdHRvbSAtIHJlY3QudG9wXG4gIH07XG5cbiAgLy8gc3VidHJhY3Qgc2Nyb2xsYmFyIHNpemUgZnJvbSBzaXplc1xuICB2YXIgc2l6ZXMgPSBlbGVtZW50Lm5vZGVOYW1lID09PSAnSFRNTCcgPyBnZXRXaW5kb3dTaXplcyhlbGVtZW50Lm93bmVyRG9jdW1lbnQpIDoge307XG4gIHZhciB3aWR0aCA9IHNpemVzLndpZHRoIHx8IGVsZW1lbnQuY2xpZW50V2lkdGggfHwgcmVzdWx0LndpZHRoO1xuICB2YXIgaGVpZ2h0ID0gc2l6ZXMuaGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHJlc3VsdC5oZWlnaHQ7XG5cbiAgdmFyIGhvcml6U2Nyb2xsYmFyID0gZWxlbWVudC5vZmZzZXRXaWR0aCAtIHdpZHRoO1xuICB2YXIgdmVydFNjcm9sbGJhciA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC0gaGVpZ2h0O1xuXG4gIC8vIGlmIGFuIGh5cG90aGV0aWNhbCBzY3JvbGxiYXIgaXMgZGV0ZWN0ZWQsIHdlIG11c3QgYmUgc3VyZSBpdCdzIG5vdCBhIGBib3JkZXJgXG4gIC8vIHdlIG1ha2UgdGhpcyBjaGVjayBjb25kaXRpb25hbCBmb3IgcGVyZm9ybWFuY2UgcmVhc29uc1xuICBpZiAoaG9yaXpTY3JvbGxiYXIgfHwgdmVydFNjcm9sbGJhcikge1xuICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkoZWxlbWVudCk7XG4gICAgaG9yaXpTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneCcpO1xuICAgIHZlcnRTY3JvbGxiYXIgLT0gZ2V0Qm9yZGVyc1NpemUoc3R5bGVzLCAneScpO1xuXG4gICAgcmVzdWx0LndpZHRoIC09IGhvcml6U2Nyb2xsYmFyO1xuICAgIHJlc3VsdC5oZWlnaHQgLT0gdmVydFNjcm9sbGJhcjtcbiAgfVxuXG4gIHJldHVybiBnZXRDbGllbnRSZWN0KHJlc3VsdCk7XG59XG5cbmZ1bmN0aW9uIGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShjaGlsZHJlbiwgcGFyZW50KSB7XG4gIHZhciBmaXhlZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiBmYWxzZTtcblxuICB2YXIgaXNJRTEwID0gaXNJRSgxMCk7XG4gIHZhciBpc0hUTUwgPSBwYXJlbnQubm9kZU5hbWUgPT09ICdIVE1MJztcbiAgdmFyIGNoaWxkcmVuUmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChjaGlsZHJlbik7XG4gIHZhciBwYXJlbnRSZWN0ID0gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KHBhcmVudCk7XG4gIHZhciBzY3JvbGxQYXJlbnQgPSBnZXRTY3JvbGxQYXJlbnQoY2hpbGRyZW4pO1xuXG4gIHZhciBzdHlsZXMgPSBnZXRTdHlsZUNvbXB1dGVkUHJvcGVydHkocGFyZW50KTtcbiAgdmFyIGJvcmRlclRvcFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyVG9wV2lkdGgpO1xuICB2YXIgYm9yZGVyTGVmdFdpZHRoID0gcGFyc2VGbG9hdChzdHlsZXMuYm9yZGVyTGVmdFdpZHRoKTtcblxuICAvLyBJbiBjYXNlcyB3aGVyZSB0aGUgcGFyZW50IGlzIGZpeGVkLCB3ZSBtdXN0IGlnbm9yZSBuZWdhdGl2ZSBzY3JvbGwgaW4gb2Zmc2V0IGNhbGNcbiAgaWYgKGZpeGVkUG9zaXRpb24gJiYgaXNIVE1MKSB7XG4gICAgcGFyZW50UmVjdC50b3AgPSBNYXRoLm1heChwYXJlbnRSZWN0LnRvcCwgMCk7XG4gICAgcGFyZW50UmVjdC5sZWZ0ID0gTWF0aC5tYXgocGFyZW50UmVjdC5sZWZ0LCAwKTtcbiAgfVxuICB2YXIgb2Zmc2V0cyA9IGdldENsaWVudFJlY3Qoe1xuICAgIHRvcDogY2hpbGRyZW5SZWN0LnRvcCAtIHBhcmVudFJlY3QudG9wIC0gYm9yZGVyVG9wV2lkdGgsXG4gICAgbGVmdDogY2hpbGRyZW5SZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQgLSBib3JkZXJMZWZ0V2lkdGgsXG4gICAgd2lkdGg6IGNoaWxkcmVuUmVjdC53aWR0aCxcbiAgICBoZWlnaHQ6IGNoaWxkcmVuUmVjdC5oZWlnaHRcbiAgfSk7XG4gIG9mZnNldHMubWFyZ2luVG9wID0gMDtcbiAgb2Zmc2V0cy5tYXJnaW5MZWZ0ID0gMDtcblxuICAvLyBTdWJ0cmFjdCBtYXJnaW5zIG9mIGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGl0J3MgYmVpbmcgdXNlZCBhcyBwYXJlbnRcbiAgLy8gd2UgZG8gdGhpcyBvbmx5IG9uIEhUTUwgYmVjYXVzZSBpdCdzIHRoZSBvbmx5IGVsZW1lbnQgdGhhdCBiZWhhdmVzXG4gIC8vIGRpZmZlcmVudGx5IHdoZW4gbWFyZ2lucyBhcmUgYXBwbGllZCB0byBpdC4gVGhlIG1hcmdpbnMgYXJlIGluY2x1ZGVkIGluXG4gIC8vIHRoZSBib3ggb2YgdGhlIGRvY3VtZW50RWxlbWVudCwgaW4gdGhlIG90aGVyIGNhc2VzIG5vdC5cbiAgaWYgKCFpc0lFMTAgJiYgaXNIVE1MKSB7XG4gICAgdmFyIG1hcmdpblRvcCA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCk7XG4gICAgdmFyIG1hcmdpbkxlZnQgPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5MZWZ0KTtcblxuICAgIG9mZnNldHMudG9wIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMuYm90dG9tIC09IGJvcmRlclRvcFdpZHRoIC0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMubGVmdCAtPSBib3JkZXJMZWZ0V2lkdGggLSBtYXJnaW5MZWZ0O1xuICAgIG9mZnNldHMucmlnaHQgLT0gYm9yZGVyTGVmdFdpZHRoIC0gbWFyZ2luTGVmdDtcblxuICAgIC8vIEF0dGFjaCBtYXJnaW5Ub3AgYW5kIG1hcmdpbkxlZnQgYmVjYXVzZSBpbiBzb21lIGNpcmN1bXN0YW5jZXMgd2UgbWF5IG5lZWQgdGhlbVxuICAgIG9mZnNldHMubWFyZ2luVG9wID0gbWFyZ2luVG9wO1xuICAgIG9mZnNldHMubWFyZ2luTGVmdCA9IG1hcmdpbkxlZnQ7XG4gIH1cblxuICBpZiAoaXNJRTEwICYmICFmaXhlZFBvc2l0aW9uID8gcGFyZW50LmNvbnRhaW5zKHNjcm9sbFBhcmVudCkgOiBwYXJlbnQgPT09IHNjcm9sbFBhcmVudCAmJiBzY3JvbGxQYXJlbnQubm9kZU5hbWUgIT09ICdCT0RZJykge1xuICAgIG9mZnNldHMgPSBpbmNsdWRlU2Nyb2xsKG9mZnNldHMsIHBhcmVudCk7XG4gIH1cblxuICByZXR1cm4gb2Zmc2V0cztcbn1cblxuZnVuY3Rpb24gZ2V0Vmlld3BvcnRPZmZzZXRSZWN0UmVsYXRpdmVUb0FydGJpdHJhcnlOb2RlKGVsZW1lbnQpIHtcbiAgdmFyIGV4Y2x1ZGVTY3JvbGwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IGZhbHNlO1xuXG4gIHZhciBodG1sID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIHJlbGF0aXZlT2Zmc2V0ID0gZ2V0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcmJpdHJhcnlOb2RlKGVsZW1lbnQsIGh0bWwpO1xuICB2YXIgd2lkdGggPSBNYXRoLm1heChodG1sLmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgdmFyIGhlaWdodCA9IE1hdGgubWF4KGh0bWwuY2xpZW50SGVpZ2h0LCB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgMCk7XG5cbiAgdmFyIHNjcm9sbFRvcCA9ICFleGNsdWRlU2Nyb2xsID8gZ2V0U2Nyb2xsKGh0bWwpIDogMDtcbiAgdmFyIHNjcm9sbExlZnQgPSAhZXhjbHVkZVNjcm9sbCA/IGdldFNjcm9sbChodG1sLCAnbGVmdCcpIDogMDtcblxuICB2YXIgb2Zmc2V0ID0ge1xuICAgIHRvcDogc2Nyb2xsVG9wIC0gcmVsYXRpdmVPZmZzZXQudG9wICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luVG9wLFxuICAgIGxlZnQ6IHNjcm9sbExlZnQgLSByZWxhdGl2ZU9mZnNldC5sZWZ0ICsgcmVsYXRpdmVPZmZzZXQubWFyZ2luTGVmdCxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcblxuICByZXR1cm4gZ2V0Q2xpZW50UmVjdChvZmZzZXQpO1xufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBnaXZlbiBlbGVtZW50IGlzIGZpeGVkIG9yIGlzIGluc2lkZSBhIGZpeGVkIHBhcmVudFxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtFbGVtZW50fSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGN1c3RvbUNvbnRhaW5lclxuICogQHJldHVybnMge0Jvb2xlYW59IGFuc3dlciB0byBcImlzRml4ZWQ/XCJcbiAqL1xuZnVuY3Rpb24gaXNGaXhlZChlbGVtZW50KSB7XG4gIHZhciBub2RlTmFtZSA9IGVsZW1lbnQubm9kZU5hbWU7XG4gIGlmIChub2RlTmFtZSA9PT0gJ0JPRFknIHx8IG5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGdldFN0eWxlQ29tcHV0ZWRQcm9wZXJ0eShlbGVtZW50LCAncG9zaXRpb24nKSA9PT0gJ2ZpeGVkJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHZhciBwYXJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShlbGVtZW50KTtcbiAgaWYgKCFwYXJlbnROb2RlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBpc0ZpeGVkKHBhcmVudE5vZGUpO1xufVxuXG4vKipcbiAqIEZpbmRzIHRoZSBmaXJzdCBwYXJlbnQgb2YgYW4gZWxlbWVudCB0aGF0IGhhcyBhIHRyYW5zZm9ybWVkIHByb3BlcnR5IGRlZmluZWRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge0VsZW1lbnR9IGZpcnN0IHRyYW5zZm9ybWVkIHBhcmVudCBvciBkb2N1bWVudEVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBnZXRGaXhlZFBvc2l0aW9uT2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgLy8gVGhpcyBjaGVjayBpcyBuZWVkZWQgdG8gYXZvaWQgZXJyb3JzIGluIGNhc2Ugb25lIG9mIHRoZSBlbGVtZW50cyBpc24ndCBkZWZpbmVkIGZvciBhbnkgcmVhc29uXG4gIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5wYXJlbnRFbGVtZW50IHx8IGlzSUUoKSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cbiAgdmFyIGVsID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICB3aGlsZSAoZWwgJiYgZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGVsLCAndHJhbnNmb3JtJykgPT09ICdub25lJykge1xuICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgfVxuICByZXR1cm4gZWwgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufVxuXG4vKipcbiAqIENvbXB1dGVkIHRoZSBib3VuZGFyaWVzIGxpbWl0cyBhbmQgcmV0dXJuIHRoZW1cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlclxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcmVmZXJlbmNlXG4gKiBAcGFyYW0ge251bWJlcn0gcGFkZGluZ1xuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gYm91bmRhcmllc0VsZW1lbnQgLSBFbGVtZW50IHVzZWQgdG8gZGVmaW5lIHRoZSBib3VuZGFyaWVzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGZpeGVkUG9zaXRpb24gLSBJcyBpbiBmaXhlZCBwb3NpdGlvbiBtb2RlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBDb29yZGluYXRlcyBvZiB0aGUgYm91bmRhcmllc1xuICovXG5mdW5jdGlvbiBnZXRCb3VuZGFyaWVzKHBvcHBlciwgcmVmZXJlbmNlLCBwYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCkge1xuICB2YXIgZml4ZWRQb3NpdGlvbiA9IGFyZ3VtZW50cy5sZW5ndGggPiA0ICYmIGFyZ3VtZW50c1s0XSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzRdIDogZmFsc2U7XG5cbiAgLy8gTk9URTogMSBET00gYWNjZXNzIGhlcmVcblxuICB2YXIgYm91bmRhcmllcyA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gIHZhciBvZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSk7XG5cbiAgLy8gSGFuZGxlIHZpZXdwb3J0IGNhc2VcbiAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAndmlld3BvcnQnKSB7XG4gICAgYm91bmRhcmllcyA9IGdldFZpZXdwb3J0T2Zmc2V0UmVjdFJlbGF0aXZlVG9BcnRiaXRyYXJ5Tm9kZShvZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xuICB9IGVsc2Uge1xuICAgIC8vIEhhbmRsZSBvdGhlciBjYXNlcyBiYXNlZCBvbiBET00gZWxlbWVudCB1c2VkIGFzIGJvdW5kYXJpZXNcbiAgICB2YXIgYm91bmRhcmllc05vZGUgPSB2b2lkIDA7XG4gICAgaWYgKGJvdW5kYXJpZXNFbGVtZW50ID09PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50Tm9kZShyZWZlcmVuY2UpKTtcbiAgICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0JPRFknKSB7XG4gICAgICAgIGJvdW5kYXJpZXNOb2RlID0gcG9wcGVyLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYm91bmRhcmllc0VsZW1lbnQgPT09ICd3aW5kb3cnKSB7XG4gICAgICBib3VuZGFyaWVzTm9kZSA9IHBvcHBlci5vd25lckRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgYm91bmRhcmllc05vZGUgPSBib3VuZGFyaWVzRWxlbWVudDtcbiAgICB9XG5cbiAgICB2YXIgb2Zmc2V0cyA9IGdldE9mZnNldFJlY3RSZWxhdGl2ZVRvQXJiaXRyYXJ5Tm9kZShib3VuZGFyaWVzTm9kZSwgb2Zmc2V0UGFyZW50LCBmaXhlZFBvc2l0aW9uKTtcblxuICAgIC8vIEluIGNhc2Ugb2YgSFRNTCwgd2UgbmVlZCBhIGRpZmZlcmVudCBjb21wdXRhdGlvblxuICAgIGlmIChib3VuZGFyaWVzTm9kZS5ub2RlTmFtZSA9PT0gJ0hUTUwnICYmICFpc0ZpeGVkKG9mZnNldFBhcmVudCkpIHtcbiAgICAgIHZhciBfZ2V0V2luZG93U2l6ZXMgPSBnZXRXaW5kb3dTaXplcyhwb3BwZXIub3duZXJEb2N1bWVudCksXG4gICAgICAgICAgaGVpZ2h0ID0gX2dldFdpbmRvd1NpemVzLmhlaWdodCxcbiAgICAgICAgICB3aWR0aCA9IF9nZXRXaW5kb3dTaXplcy53aWR0aDtcblxuICAgICAgYm91bmRhcmllcy50b3AgKz0gb2Zmc2V0cy50b3AgLSBvZmZzZXRzLm1hcmdpblRvcDtcbiAgICAgIGJvdW5kYXJpZXMuYm90dG9tID0gaGVpZ2h0ICsgb2Zmc2V0cy50b3A7XG4gICAgICBib3VuZGFyaWVzLmxlZnQgKz0gb2Zmc2V0cy5sZWZ0IC0gb2Zmc2V0cy5tYXJnaW5MZWZ0O1xuICAgICAgYm91bmRhcmllcy5yaWdodCA9IHdpZHRoICsgb2Zmc2V0cy5sZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBmb3IgYWxsIHRoZSBvdGhlciBET00gZWxlbWVudHMsIHRoaXMgb25lIGlzIGdvb2RcbiAgICAgIGJvdW5kYXJpZXMgPSBvZmZzZXRzO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBwYWRkaW5nc1xuICBwYWRkaW5nID0gcGFkZGluZyB8fCAwO1xuICB2YXIgaXNQYWRkaW5nTnVtYmVyID0gdHlwZW9mIHBhZGRpbmcgPT09ICdudW1iZXInO1xuICBib3VuZGFyaWVzLmxlZnQgKz0gaXNQYWRkaW5nTnVtYmVyID8gcGFkZGluZyA6IHBhZGRpbmcubGVmdCB8fCAwO1xuICBib3VuZGFyaWVzLnRvcCArPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy50b3AgfHwgMDtcbiAgYm91bmRhcmllcy5yaWdodCAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5yaWdodCB8fCAwO1xuICBib3VuZGFyaWVzLmJvdHRvbSAtPSBpc1BhZGRpbmdOdW1iZXIgPyBwYWRkaW5nIDogcGFkZGluZy5ib3R0b20gfHwgMDtcblxuICByZXR1cm4gYm91bmRhcmllcztcbn1cblxuZnVuY3Rpb24gZ2V0QXJlYShfcmVmKSB7XG4gIHZhciB3aWR0aCA9IF9yZWYud2lkdGgsXG4gICAgICBoZWlnaHQgPSBfcmVmLmhlaWdodDtcblxuICByZXR1cm4gd2lkdGggKiBoZWlnaHQ7XG59XG5cbi8qKlxuICogVXRpbGl0eSB1c2VkIHRvIHRyYW5zZm9ybSB0aGUgYGF1dG9gIHBsYWNlbWVudCB0byB0aGUgcGxhY2VtZW50IHdpdGggbW9yZVxuICogYXZhaWxhYmxlIHNwYWNlLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gY29tcHV0ZUF1dG9QbGFjZW1lbnQocGxhY2VtZW50LCByZWZSZWN0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgdmFyIHBhZGRpbmcgPSBhcmd1bWVudHMubGVuZ3RoID4gNSAmJiBhcmd1bWVudHNbNV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1s1XSA6IDA7XG5cbiAgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdhdXRvJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIHBsYWNlbWVudDtcbiAgfVxuXG4gIHZhciBib3VuZGFyaWVzID0gZ2V0Qm91bmRhcmllcyhwb3BwZXIsIHJlZmVyZW5jZSwgcGFkZGluZywgYm91bmRhcmllc0VsZW1lbnQpO1xuXG4gIHZhciByZWN0cyA9IHtcbiAgICB0b3A6IHtcbiAgICAgIHdpZHRoOiBib3VuZGFyaWVzLndpZHRoLFxuICAgICAgaGVpZ2h0OiByZWZSZWN0LnRvcCAtIGJvdW5kYXJpZXMudG9wXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgd2lkdGg6IGJvdW5kYXJpZXMucmlnaHQgLSByZWZSZWN0LnJpZ2h0LFxuICAgICAgaGVpZ2h0OiBib3VuZGFyaWVzLmhlaWdodFxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICB3aWR0aDogYm91bmRhcmllcy53aWR0aCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5ib3R0b20gLSByZWZSZWN0LmJvdHRvbVxuICAgIH0sXG4gICAgbGVmdDoge1xuICAgICAgd2lkdGg6IHJlZlJlY3QubGVmdCAtIGJvdW5kYXJpZXMubGVmdCxcbiAgICAgIGhlaWdodDogYm91bmRhcmllcy5oZWlnaHRcbiAgICB9XG4gIH07XG5cbiAgdmFyIHNvcnRlZEFyZWFzID0gT2JqZWN0LmtleXMocmVjdHMpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgIGtleToga2V5XG4gICAgfSwgcmVjdHNba2V5XSwge1xuICAgICAgYXJlYTogZ2V0QXJlYShyZWN0c1trZXldKVxuICAgIH0pO1xuICB9KS5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGIuYXJlYSAtIGEuYXJlYTtcbiAgfSk7XG5cbiAgdmFyIGZpbHRlcmVkQXJlYXMgPSBzb3J0ZWRBcmVhcy5maWx0ZXIoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgdmFyIHdpZHRoID0gX3JlZjIud2lkdGgsXG4gICAgICAgIGhlaWdodCA9IF9yZWYyLmhlaWdodDtcbiAgICByZXR1cm4gd2lkdGggPj0gcG9wcGVyLmNsaWVudFdpZHRoICYmIGhlaWdodCA+PSBwb3BwZXIuY2xpZW50SGVpZ2h0O1xuICB9KTtcblxuICB2YXIgY29tcHV0ZWRQbGFjZW1lbnQgPSBmaWx0ZXJlZEFyZWFzLmxlbmd0aCA+IDAgPyBmaWx0ZXJlZEFyZWFzWzBdLmtleSA6IHNvcnRlZEFyZWFzWzBdLmtleTtcblxuICB2YXIgdmFyaWF0aW9uID0gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG5cbiAgcmV0dXJuIGNvbXB1dGVkUGxhY2VtZW50ICsgKHZhcmlhdGlvbiA/ICctJyArIHZhcmlhdGlvbiA6ICcnKTtcbn1cblxuLyoqXG4gKiBHZXQgb2Zmc2V0cyB0byB0aGUgcmVmZXJlbmNlIGVsZW1lbnRcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZVxuICogQHBhcmFtIHtFbGVtZW50fSBwb3BwZXIgLSB0aGUgcG9wcGVyIGVsZW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudH0gcmVmZXJlbmNlIC0gdGhlIHJlZmVyZW5jZSBlbGVtZW50ICh0aGUgcG9wcGVyIHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhpcylcbiAqIEBwYXJhbSB7RWxlbWVudH0gZml4ZWRQb3NpdGlvbiAtIGlzIGluIGZpeGVkIHBvc2l0aW9uIG1vZGVcbiAqIEByZXR1cm5zIHtPYmplY3R9IEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGdldFJlZmVyZW5jZU9mZnNldHMoc3RhdGUsIHBvcHBlciwgcmVmZXJlbmNlKSB7XG4gIHZhciBmaXhlZFBvc2l0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA+IDMgJiYgYXJndW1lbnRzWzNdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbM10gOiBudWxsO1xuXG4gIHZhciBjb21tb25PZmZzZXRQYXJlbnQgPSBmaXhlZFBvc2l0aW9uID8gZ2V0Rml4ZWRQb3NpdGlvbk9mZnNldFBhcmVudChwb3BwZXIpIDogZmluZENvbW1vbk9mZnNldFBhcmVudChwb3BwZXIsIGdldFJlZmVyZW5jZU5vZGUocmVmZXJlbmNlKSk7XG4gIHJldHVybiBnZXRPZmZzZXRSZWN0UmVsYXRpdmVUb0FyYml0cmFyeU5vZGUocmVmZXJlbmNlLCBjb21tb25PZmZzZXRQYXJlbnQsIGZpeGVkUG9zaXRpb24pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3V0ZXIgc2l6ZXMgb2YgdGhlIGdpdmVuIGVsZW1lbnQgKG9mZnNldCBzaXplICsgbWFyZ2lucylcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudFxuICogQHJldHVybnMge09iamVjdH0gb2JqZWN0IGNvbnRhaW5pbmcgd2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGdldE91dGVyU2l6ZXMoZWxlbWVudCkge1xuICB2YXIgd2luZG93ID0gZWxlbWVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICB2YXIgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIHZhciB4ID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wIHx8IDApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tIHx8IDApO1xuICB2YXIgeSA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkxlZnQgfHwgMCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5SaWdodCB8fCAwKTtcbiAgdmFyIHJlc3VsdCA9IHtcbiAgICB3aWR0aDogZWxlbWVudC5vZmZzZXRXaWR0aCArIHksXG4gICAgaGVpZ2h0OiBlbGVtZW50Lm9mZnNldEhlaWdodCArIHhcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50XG4gKiBAcmV0dXJucyB7U3RyaW5nfSBmbGlwcGVkIHBsYWNlbWVudFxuICovXG5mdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgdmFyIGhhc2ggPSB7IGxlZnQ6ICdyaWdodCcsIHJpZ2h0OiAnbGVmdCcsIGJvdHRvbTogJ3RvcCcsIHRvcDogJ2JvdHRvbScgfTtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgZnVuY3Rpb24gKG1hdGNoZWQpIHtcbiAgICByZXR1cm4gaGFzaFttYXRjaGVkXTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IG9mZnNldHMgdG8gdGhlIHBvcHBlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHtPYmplY3R9IHBvc2l0aW9uIC0gQ1NTIHBvc2l0aW9uIHRoZSBQb3BwZXIgd2lsbCBnZXQgYXBwbGllZFxuICogQHBhcmFtIHtIVE1MRWxlbWVudH0gcG9wcGVyIC0gdGhlIHBvcHBlciBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gcmVmZXJlbmNlT2Zmc2V0cyAtIHRoZSByZWZlcmVuY2Ugb2Zmc2V0cyAodGhlIHBvcHBlciB3aWxsIGJlIHJlbGF0aXZlIHRvIHRoaXMpXG4gKiBAcGFyYW0ge1N0cmluZ30gcGxhY2VtZW50IC0gb25lIG9mIHRoZSB2YWxpZCBwbGFjZW1lbnQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gcG9wcGVyT2Zmc2V0cyAtIEFuIG9iamVjdCBjb250YWluaW5nIHRoZSBvZmZzZXRzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyXG4gKi9cbmZ1bmN0aW9uIGdldFBvcHBlck9mZnNldHMocG9wcGVyLCByZWZlcmVuY2VPZmZzZXRzLCBwbGFjZW1lbnQpIHtcbiAgcGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG5cbiAgLy8gR2V0IHBvcHBlciBub2RlIHNpemVzXG4gIHZhciBwb3BwZXJSZWN0ID0gZ2V0T3V0ZXJTaXplcyhwb3BwZXIpO1xuXG4gIC8vIEFkZCBwb3NpdGlvbiwgd2lkdGggYW5kIGhlaWdodCB0byBvdXIgb2Zmc2V0cyBvYmplY3RcbiAgdmFyIHBvcHBlck9mZnNldHMgPSB7XG4gICAgd2lkdGg6IHBvcHBlclJlY3Qud2lkdGgsXG4gICAgaGVpZ2h0OiBwb3BwZXJSZWN0LmhlaWdodFxuICB9O1xuXG4gIC8vIGRlcGVuZGluZyBieSB0aGUgcG9wcGVyIHBsYWNlbWVudCB3ZSBoYXZlIHRvIGNvbXB1dGUgaXRzIG9mZnNldHMgc2xpZ2h0bHkgZGlmZmVyZW50bHlcbiAgdmFyIGlzSG9yaXogPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuICB2YXIgbWFpblNpZGUgPSBpc0hvcml6ID8gJ3RvcCcgOiAnbGVmdCc7XG4gIHZhciBzZWNvbmRhcnlTaWRlID0gaXNIb3JpeiA/ICdsZWZ0JyA6ICd0b3AnO1xuICB2YXIgbWVhc3VyZW1lbnQgPSBpc0hvcml6ID8gJ2hlaWdodCcgOiAnd2lkdGgnO1xuICB2YXIgc2Vjb25kYXJ5TWVhc3VyZW1lbnQgPSAhaXNIb3JpeiA/ICdoZWlnaHQnIDogJ3dpZHRoJztcblxuICBwb3BwZXJPZmZzZXRzW21haW5TaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbbWFpblNpZGVdICsgcmVmZXJlbmNlT2Zmc2V0c1ttZWFzdXJlbWVudF0gLyAyIC0gcG9wcGVyUmVjdFttZWFzdXJlbWVudF0gLyAyO1xuICBpZiAocGxhY2VtZW50ID09PSBzZWNvbmRhcnlTaWRlKSB7XG4gICAgcG9wcGVyT2Zmc2V0c1tzZWNvbmRhcnlTaWRlXSA9IHJlZmVyZW5jZU9mZnNldHNbc2Vjb25kYXJ5U2lkZV0gLSBwb3BwZXJSZWN0W3NlY29uZGFyeU1lYXN1cmVtZW50XTtcbiAgfSBlbHNlIHtcbiAgICBwb3BwZXJPZmZzZXRzW3NlY29uZGFyeVNpZGVdID0gcmVmZXJlbmNlT2Zmc2V0c1tnZXRPcHBvc2l0ZVBsYWNlbWVudChzZWNvbmRhcnlTaWRlKV07XG4gIH1cblxuICByZXR1cm4gcG9wcGVyT2Zmc2V0cztcbn1cblxuLyoqXG4gKiBNaW1pY3MgdGhlIGBmaW5kYCBtZXRob2Qgb2YgQXJyYXlcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZnVuY3Rpb24gZmluZChhcnIsIGNoZWNrKSB7XG4gIC8vIHVzZSBuYXRpdmUgZmluZCBpZiBzdXBwb3J0ZWRcbiAgaWYgKEFycmF5LnByb3RvdHlwZS5maW5kKSB7XG4gICAgcmV0dXJuIGFyci5maW5kKGNoZWNrKTtcbiAgfVxuXG4gIC8vIHVzZSBgZmlsdGVyYCB0byBvYnRhaW4gdGhlIHNhbWUgYmVoYXZpb3Igb2YgYGZpbmRgXG4gIHJldHVybiBhcnIuZmlsdGVyKGNoZWNrKVswXTtcbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGluZGV4IG9mIHRoZSBtYXRjaGluZyBvYmplY3RcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7QXJyYXl9IGFyclxuICogQGFyZ3VtZW50IHByb3BcbiAqIEBhcmd1bWVudCB2YWx1ZVxuICogQHJldHVybnMgaW5kZXggb3IgLTFcbiAqL1xuZnVuY3Rpb24gZmluZEluZGV4KGFyciwgcHJvcCwgdmFsdWUpIHtcbiAgLy8gdXNlIG5hdGl2ZSBmaW5kSW5kZXggaWYgc3VwcG9ydGVkXG4gIGlmIChBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KSB7XG4gICAgcmV0dXJuIGFyci5maW5kSW5kZXgoZnVuY3Rpb24gKGN1cikge1xuICAgICAgcmV0dXJuIGN1cltwcm9wXSA9PT0gdmFsdWU7XG4gICAgfSk7XG4gIH1cblxuICAvLyB1c2UgYGZpbmRgICsgYGluZGV4T2ZgIGlmIGBmaW5kSW5kZXhgIGlzbid0IHN1cHBvcnRlZFxuICB2YXIgbWF0Y2ggPSBmaW5kKGFyciwgZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBvYmpbcHJvcF0gPT09IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIGFyci5pbmRleE9mKG1hdGNoKTtcbn1cblxuLyoqXG4gKiBMb29wIHRyb3VnaCB0aGUgbGlzdCBvZiBtb2RpZmllcnMgYW5kIHJ1biB0aGVtIGluIG9yZGVyLFxuICogZWFjaCBvZiB0aGVtIHdpbGwgdGhlbiBlZGl0IHRoZSBkYXRhIG9iamVjdC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7ZGF0YU9iamVjdH0gZGF0YVxuICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gZW5kcyAtIE9wdGlvbmFsIG1vZGlmaWVyIG5hbWUgdXNlZCBhcyBzdG9wcGVyXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH1cbiAqL1xuZnVuY3Rpb24gcnVuTW9kaWZpZXJzKG1vZGlmaWVycywgZGF0YSwgZW5kcykge1xuICB2YXIgbW9kaWZpZXJzVG9SdW4gPSBlbmRzID09PSB1bmRlZmluZWQgPyBtb2RpZmllcnMgOiBtb2RpZmllcnMuc2xpY2UoMCwgZmluZEluZGV4KG1vZGlmaWVycywgJ25hbWUnLCBlbmRzKSk7XG5cbiAgbW9kaWZpZXJzVG9SdW4uZm9yRWFjaChmdW5jdGlvbiAobW9kaWZpZXIpIHtcbiAgICBpZiAobW9kaWZpZXJbJ2Z1bmN0aW9uJ10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgZG90LW5vdGF0aW9uXG4gICAgICBjb25zb2xlLndhcm4oJ2Btb2RpZmllci5mdW5jdGlvbmAgaXMgZGVwcmVjYXRlZCwgdXNlIGBtb2RpZmllci5mbmAhJyk7XG4gICAgfVxuICAgIHZhciBmbiA9IG1vZGlmaWVyWydmdW5jdGlvbiddIHx8IG1vZGlmaWVyLmZuOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGRvdC1ub3RhdGlvblxuICAgIGlmIChtb2RpZmllci5lbmFibGVkICYmIGlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAvLyBBZGQgcHJvcGVydGllcyB0byBvZmZzZXRzIHRvIG1ha2UgdGhlbSBhIGNvbXBsZXRlIGNsaWVudFJlY3Qgb2JqZWN0XG4gICAgICAvLyB3ZSBkbyB0aGlzIGJlZm9yZSBlYWNoIG1vZGlmaWVyIHRvIG1ha2Ugc3VyZSB0aGUgcHJldmlvdXMgb25lIGRvZXNuJ3RcbiAgICAgIC8vIG1lc3Mgd2l0aCB0aGVzZSB2YWx1ZXNcbiAgICAgIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuICAgICAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldENsaWVudFJlY3QoZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSk7XG5cbiAgICAgIGRhdGEgPSBmbihkYXRhLCBtb2RpZmllcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSBwb3NpdGlvbiBvZiB0aGUgcG9wcGVyLCBjb21wdXRpbmcgdGhlIG5ldyBvZmZzZXRzIGFuZCBhcHBseWluZ1xuICogdGhlIG5ldyBzdHlsZS48YnIgLz5cbiAqIFByZWZlciBgc2NoZWR1bGVVcGRhdGVgIG92ZXIgYHVwZGF0ZWAgYmVjYXVzZSBvZiBwZXJmb3JtYW5jZSByZWFzb25zLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiB1cGRhdGUoKSB7XG4gIC8vIGlmIHBvcHBlciBpcyBkZXN0cm95ZWQsIGRvbid0IHBlcmZvcm0gYW55IGZ1cnRoZXIgdXBkYXRlXG4gIGlmICh0aGlzLnN0YXRlLmlzRGVzdHJveWVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGRhdGEgPSB7XG4gICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgc3R5bGVzOiB7fSxcbiAgICBhcnJvd1N0eWxlczoge30sXG4gICAgYXR0cmlidXRlczoge30sXG4gICAgZmxpcHBlZDogZmFsc2UsXG4gICAgb2Zmc2V0czoge31cbiAgfTtcblxuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSA9IGdldFJlZmVyZW5jZU9mZnNldHModGhpcy5zdGF0ZSwgdGhpcy5wb3BwZXIsIHRoaXMucmVmZXJlbmNlLCB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZCk7XG5cbiAgLy8gY29tcHV0ZSBhdXRvIHBsYWNlbWVudCwgc3RvcmUgcGxhY2VtZW50IGluc2lkZSB0aGUgZGF0YSBvYmplY3QsXG4gIC8vIG1vZGlmaWVycyB3aWxsIGJlIGFibGUgdG8gZWRpdCBgcGxhY2VtZW50YCBpZiBuZWVkZWRcbiAgLy8gYW5kIHJlZmVyIHRvIG9yaWdpbmFsUGxhY2VtZW50IHRvIGtub3cgdGhlIG9yaWdpbmFsIHZhbHVlXG4gIGRhdGEucGxhY2VtZW50ID0gY29tcHV0ZUF1dG9QbGFjZW1lbnQodGhpcy5vcHRpb25zLnBsYWNlbWVudCwgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSwgdGhpcy5wb3BwZXIsIHRoaXMucmVmZXJlbmNlLCB0aGlzLm9wdGlvbnMubW9kaWZpZXJzLmZsaXAuYm91bmRhcmllc0VsZW1lbnQsIHRoaXMub3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nKTtcblxuICAvLyBzdG9yZSB0aGUgY29tcHV0ZWQgcGxhY2VtZW50IGluc2lkZSBgb3JpZ2luYWxQbGFjZW1lbnRgXG4gIGRhdGEub3JpZ2luYWxQbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcblxuICBkYXRhLnBvc2l0aW9uRml4ZWQgPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZDtcblxuICAvLyBjb21wdXRlIHRoZSBwb3BwZXIgb2Zmc2V0c1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0UG9wcGVyT2Zmc2V0cyh0aGlzLnBvcHBlciwgZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSwgZGF0YS5wbGFjZW1lbnQpO1xuXG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIucG9zaXRpb24gPSB0aGlzLm9wdGlvbnMucG9zaXRpb25GaXhlZCA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnO1xuXG4gIC8vIHJ1biB0aGUgbW9kaWZpZXJzXG4gIGRhdGEgPSBydW5Nb2RpZmllcnModGhpcy5tb2RpZmllcnMsIGRhdGEpO1xuXG4gIC8vIHRoZSBmaXJzdCBgdXBkYXRlYCB3aWxsIGNhbGwgYG9uQ3JlYXRlYCBjYWxsYmFja1xuICAvLyB0aGUgb3RoZXIgb25lcyB3aWxsIGNhbGwgYG9uVXBkYXRlYCBjYWxsYmFja1xuICBpZiAoIXRoaXMuc3RhdGUuaXNDcmVhdGVkKSB7XG4gICAgdGhpcy5zdGF0ZS5pc0NyZWF0ZWQgPSB0cnVlO1xuICAgIHRoaXMub3B0aW9ucy5vbkNyZWF0ZShkYXRhKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLm9wdGlvbnMub25VcGRhdGUoZGF0YSk7XG4gIH1cbn1cblxuLyoqXG4gKiBIZWxwZXIgdXNlZCB0byBrbm93IGlmIHRoZSBnaXZlbiBtb2RpZmllciBpcyBlbmFibGVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHJldHVybnMge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzTW9kaWZpZXJFbmFibGVkKG1vZGlmaWVycywgbW9kaWZpZXJOYW1lKSB7XG4gIHJldHVybiBtb2RpZmllcnMuc29tZShmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICBlbmFibGVkID0gX3JlZi5lbmFibGVkO1xuICAgIHJldHVybiBlbmFibGVkICYmIG5hbWUgPT09IG1vZGlmaWVyTmFtZTtcbiAgfSk7XG59XG5cbi8qKlxuICogR2V0IHRoZSBwcmVmaXhlZCBzdXBwb3J0ZWQgcHJvcGVydHkgbmFtZVxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQGFyZ3VtZW50IHtTdHJpbmd9IHByb3BlcnR5IChjYW1lbENhc2UpXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBwcmVmaXhlZCBwcm9wZXJ0eSAoY2FtZWxDYXNlIG9yIFBhc2NhbENhc2UsIGRlcGVuZGluZyBvbiB0aGUgdmVuZG9yIHByZWZpeClcbiAqL1xuZnVuY3Rpb24gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKHByb3BlcnR5KSB7XG4gIHZhciBwcmVmaXhlcyA9IFtmYWxzZSwgJ21zJywgJ1dlYmtpdCcsICdNb3onLCAnTyddO1xuICB2YXIgdXBwZXJQcm9wID0gcHJvcGVydHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wZXJ0eS5zbGljZSgxKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZpeGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHByZWZpeCA9IHByZWZpeGVzW2ldO1xuICAgIHZhciB0b0NoZWNrID0gcHJlZml4ID8gJycgKyBwcmVmaXggKyB1cHBlclByb3AgOiBwcm9wZXJ0eTtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHkuc3R5bGVbdG9DaGVja10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm4gdG9DaGVjaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogRGVzdHJveXMgdGhlIHBvcHBlci5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xuZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgdGhpcy5zdGF0ZS5pc0Rlc3Ryb3llZCA9IHRydWU7XG5cbiAgLy8gdG91Y2ggRE9NIG9ubHkgaWYgYGFwcGx5U3R5bGVgIG1vZGlmaWVyIGlzIGVuYWJsZWRcbiAgaWYgKGlzTW9kaWZpZXJFbmFibGVkKHRoaXMubW9kaWZpZXJzLCAnYXBwbHlTdHlsZScpKSB7XG4gICAgdGhpcy5wb3BwZXIucmVtb3ZlQXR0cmlidXRlKCd4LXBsYWNlbWVudCcpO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUudG9wID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUubGVmdCA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlLnJpZ2h0ID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUuYm90dG9tID0gJyc7XG4gICAgdGhpcy5wb3BwZXIuc3R5bGUud2lsbENoYW5nZSA9ICcnO1xuICAgIHRoaXMucG9wcGVyLnN0eWxlW2dldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyldID0gJyc7XG4gIH1cblxuICB0aGlzLmRpc2FibGVFdmVudExpc3RlbmVycygpO1xuXG4gIC8vIHJlbW92ZSB0aGUgcG9wcGVyIGlmIHVzZXIgZXhwbGljaXRseSBhc2tlZCBmb3IgdGhlIGRlbGV0aW9uIG9uIGRlc3Ryb3lcbiAgLy8gZG8gbm90IHVzZSBgcmVtb3ZlYCBiZWNhdXNlIElFMTEgZG9lc24ndCBzdXBwb3J0IGl0XG4gIGlmICh0aGlzLm9wdGlvbnMucmVtb3ZlT25EZXN0cm95KSB7XG4gICAgdGhpcy5wb3BwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnBvcHBlcik7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuICogR2V0IHRoZSB3aW5kb3cgYXNzb2NpYXRlZCB3aXRoIHRoZSBlbGVtZW50XG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnRcbiAqIEByZXR1cm5zIHtXaW5kb3d9XG4gKi9cbmZ1bmN0aW9uIGdldFdpbmRvdyhlbGVtZW50KSB7XG4gIHZhciBvd25lckRvY3VtZW50ID0gZWxlbWVudC5vd25lckRvY3VtZW50O1xuICByZXR1cm4gb3duZXJEb2N1bWVudCA/IG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgOiB3aW5kb3c7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaFRvU2Nyb2xsUGFyZW50cyhzY3JvbGxQYXJlbnQsIGV2ZW50LCBjYWxsYmFjaywgc2Nyb2xsUGFyZW50cykge1xuICB2YXIgaXNCb2R5ID0gc2Nyb2xsUGFyZW50Lm5vZGVOYW1lID09PSAnQk9EWSc7XG4gIHZhciB0YXJnZXQgPSBpc0JvZHkgPyBzY3JvbGxQYXJlbnQub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyA6IHNjcm9sbFBhcmVudDtcbiAgdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrLCB7IHBhc3NpdmU6IHRydWUgfSk7XG5cbiAgaWYgKCFpc0JvZHkpIHtcbiAgICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoZ2V0U2Nyb2xsUGFyZW50KHRhcmdldC5wYXJlbnROb2RlKSwgZXZlbnQsIGNhbGxiYWNrLCBzY3JvbGxQYXJlbnRzKTtcbiAgfVxuICBzY3JvbGxQYXJlbnRzLnB1c2godGFyZ2V0KTtcbn1cblxuLyoqXG4gKiBTZXR1cCBuZWVkZWQgZXZlbnQgbGlzdGVuZXJzIHVzZWQgdG8gdXBkYXRlIHRoZSBwb3BwZXIgcG9zaXRpb25cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBvcHRpb25zLCBzdGF0ZSwgdXBkYXRlQm91bmQpIHtcbiAgLy8gUmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBzdGF0ZS51cGRhdGVCb3VuZCA9IHVwZGF0ZUJvdW5kO1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gIC8vIFNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICB2YXIgc2Nyb2xsRWxlbWVudCA9IGdldFNjcm9sbFBhcmVudChyZWZlcmVuY2UpO1xuICBhdHRhY2hUb1Njcm9sbFBhcmVudHMoc2Nyb2xsRWxlbWVudCwgJ3Njcm9sbCcsIHN0YXRlLnVwZGF0ZUJvdW5kLCBzdGF0ZS5zY3JvbGxQYXJlbnRzKTtcbiAgc3RhdGUuc2Nyb2xsRWxlbWVudCA9IHNjcm9sbEVsZW1lbnQ7XG4gIHN0YXRlLmV2ZW50c0VuYWJsZWQgPSB0cnVlO1xuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuLyoqXG4gKiBJdCB3aWxsIGFkZCByZXNpemUvc2Nyb2xsIGV2ZW50cyBhbmQgc3RhcnQgcmVjYWxjdWxhdGluZ1xuICogcG9zaXRpb24gb2YgdGhlIHBvcHBlciBlbGVtZW50IHdoZW4gdGhleSBhcmUgdHJpZ2dlcmVkLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBlbmFibGVFdmVudExpc3RlbmVycygpIHtcbiAgaWYgKCF0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICB0aGlzLnN0YXRlID0gc2V0dXBFdmVudExpc3RlbmVycyh0aGlzLnJlZmVyZW5jZSwgdGhpcy5vcHRpb25zLCB0aGlzLnN0YXRlLCB0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgfVxufVxuXG4vKipcbiAqIFJlbW92ZSBldmVudCBsaXN0ZW5lcnMgdXNlZCB0byB1cGRhdGUgdGhlIHBvcHBlciBwb3NpdGlvblxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcnMocmVmZXJlbmNlLCBzdGF0ZSkge1xuICAvLyBSZW1vdmUgcmVzaXplIGV2ZW50IGxpc3RlbmVyIG9uIHdpbmRvd1xuICBnZXRXaW5kb3cocmVmZXJlbmNlKS5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG5cbiAgLy8gUmVtb3ZlIHNjcm9sbCBldmVudCBsaXN0ZW5lciBvbiBzY3JvbGwgcGFyZW50c1xuICBzdGF0ZS5zY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBzdGF0ZS51cGRhdGVCb3VuZCk7XG4gIH0pO1xuXG4gIC8vIFJlc2V0IHN0YXRlXG4gIHN0YXRlLnVwZGF0ZUJvdW5kID0gbnVsbDtcbiAgc3RhdGUuc2Nyb2xsUGFyZW50cyA9IFtdO1xuICBzdGF0ZS5zY3JvbGxFbGVtZW50ID0gbnVsbDtcbiAgc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGZhbHNlO1xuICByZXR1cm4gc3RhdGU7XG59XG5cbi8qKlxuICogSXQgd2lsbCByZW1vdmUgcmVzaXplL3Njcm9sbCBldmVudHMgYW5kIHdvbid0IHJlY2FsY3VsYXRlIHBvcHBlciBwb3NpdGlvblxuICogd2hlbiB0aGV5IGFyZSB0cmlnZ2VyZWQuIEl0IGFsc28gd29uJ3QgdHJpZ2dlciBgb25VcGRhdGVgIGNhbGxiYWNrIGFueW1vcmUsXG4gKiB1bmxlc3MgeW91IGNhbGwgYHVwZGF0ZWAgbWV0aG9kIG1hbnVhbGx5LlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlclxuICovXG5mdW5jdGlvbiBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoKSB7XG4gIGlmICh0aGlzLnN0YXRlLmV2ZW50c0VuYWJsZWQpIHtcbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLnNjaGVkdWxlVXBkYXRlKTtcbiAgICB0aGlzLnN0YXRlID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcnModGhpcy5yZWZlcmVuY2UsIHRoaXMuc3RhdGUpO1xuICB9XG59XG5cbi8qKlxuICogVGVsbHMgaWYgYSBnaXZlbiBpbnB1dCBpcyBhIG51bWJlclxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5VdGlsc1xuICogQHBhcmFtIHsqfSBpbnB1dCB0byBjaGVja1xuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdW1lcmljKG4pIHtcbiAgcmV0dXJuIG4gIT09ICcnICYmICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cblxuLyoqXG4gKiBTZXQgdGhlIHN0eWxlIHRvIHRoZSBnaXZlbiBwb3BwZXJcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7RWxlbWVudH0gZWxlbWVudCAtIEVsZW1lbnQgdG8gYXBwbHkgdGhlIHN0eWxlIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRTdHlsZXMoZWxlbWVudCwgc3R5bGVzKSB7XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciB1bml0ID0gJyc7XG4gICAgLy8gYWRkIHVuaXQgaWYgdGhlIHZhbHVlIGlzIG51bWVyaWMgYW5kIGlzIG9uZSBvZiB0aGUgZm9sbG93aW5nXG4gICAgaWYgKFsnd2lkdGgnLCAnaGVpZ2h0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddLmluZGV4T2YocHJvcCkgIT09IC0xICYmIGlzTnVtZXJpYyhzdHlsZXNbcHJvcF0pKSB7XG4gICAgICB1bml0ID0gJ3B4JztcbiAgICB9XG4gICAgZWxlbWVudC5zdHlsZVtwcm9wXSA9IHN0eWxlc1twcm9wXSArIHVuaXQ7XG4gIH0pO1xufVxuXG4vKipcbiAqIFNldCB0aGUgYXR0cmlidXRlcyB0byB0aGUgZ2l2ZW4gcG9wcGVyXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge0VsZW1lbnR9IGVsZW1lbnQgLSBFbGVtZW50IHRvIGFwcGx5IHRoZSBhdHRyaWJ1dGVzIHRvXG4gKiBAYXJndW1lbnQge09iamVjdH0gc3R5bGVzXG4gKiBPYmplY3Qgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzIHdoaWNoIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgZWxlbWVudFxuICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcCkge1xuICAgIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZXNbcHJvcF07XG4gICAgaWYgKHZhbHVlICE9PSBmYWxzZSkge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUocHJvcCwgYXR0cmlidXRlc1twcm9wXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YS5zdHlsZXMgLSBMaXN0IG9mIHN0eWxlIHByb3BlcnRpZXMgLSB2YWx1ZXMgdG8gYXBwbHkgdG8gcG9wcGVyIGVsZW1lbnRcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhLmF0dHJpYnV0ZXMgLSBMaXN0IG9mIGF0dHJpYnV0ZSBwcm9wZXJ0aWVzIC0gdmFsdWVzIHRvIGFwcGx5IHRvIHBvcHBlciBlbGVtZW50XG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgc2FtZSBkYXRhIG9iamVjdFxuICovXG5mdW5jdGlvbiBhcHBseVN0eWxlKGRhdGEpIHtcbiAgLy8gYW55IHByb3BlcnR5IHByZXNlbnQgaW4gYGRhdGEuc3R5bGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gaW4gdGhpcyB3YXkgd2UgY2FuIG1ha2UgdGhlIDNyZCBwYXJ0eSBtb2RpZmllcnMgYWRkIGN1c3RvbSBzdHlsZXMgdG8gaXRcbiAgLy8gQmUgYXdhcmUsIG1vZGlmaWVycyBjb3VsZCBvdmVycmlkZSB0aGUgcHJvcGVydGllcyBkZWZpbmVkIGluIHRoZSBwcmV2aW91c1xuICAvLyBsaW5lcyBvZiB0aGlzIG1vZGlmaWVyIVxuICBzZXRTdHlsZXMoZGF0YS5pbnN0YW5jZS5wb3BwZXIsIGRhdGEuc3R5bGVzKTtcblxuICAvLyBhbnkgcHJvcGVydHkgcHJlc2VudCBpbiBgZGF0YS5hdHRyaWJ1dGVzYCB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlcixcbiAgLy8gdGhleSB3aWxsIGJlIHNldCBhcyBIVE1MIGF0dHJpYnV0ZXMgb2YgdGhlIGVsZW1lbnRcbiAgc2V0QXR0cmlidXRlcyhkYXRhLmluc3RhbmNlLnBvcHBlciwgZGF0YS5hdHRyaWJ1dGVzKTtcblxuICAvLyBpZiBhcnJvd0VsZW1lbnQgaXMgZGVmaW5lZCBhbmQgYXJyb3dTdHlsZXMgaGFzIHNvbWUgcHJvcGVydGllc1xuICBpZiAoZGF0YS5hcnJvd0VsZW1lbnQgJiYgT2JqZWN0LmtleXMoZGF0YS5hcnJvd1N0eWxlcykubGVuZ3RoKSB7XG4gICAgc2V0U3R5bGVzKGRhdGEuYXJyb3dFbGVtZW50LCBkYXRhLmFycm93U3R5bGVzKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIFNldCB0aGUgeC1wbGFjZW1lbnQgYXR0cmlidXRlIGJlZm9yZSBldmVyeXRoaW5nIGVsc2UgYmVjYXVzZSBpdCBjb3VsZCBiZSB1c2VkXG4gKiB0byBhZGQgbWFyZ2lucyB0byB0aGUgcG9wcGVyIG1hcmdpbnMgbmVlZHMgdG8gYmUgY2FsY3VsYXRlZCB0byBnZXQgdGhlXG4gKiBjb3JyZWN0IHBvcHBlciBvZmZzZXRzLlxuICogQG1ldGhvZFxuICogQG1lbWJlcm9mIFBvcHBlci5tb2RpZmllcnNcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHJlZmVyZW5jZSAtIFRoZSByZWZlcmVuY2UgZWxlbWVudCB1c2VkIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXJcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IHBvcHBlciAtIFRoZSBIVE1MIGVsZW1lbnQgdXNlZCBhcyBwb3BwZXJcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIC0gUG9wcGVyLmpzIG9wdGlvbnNcbiAqL1xuZnVuY3Rpb24gYXBwbHlTdHlsZU9uTG9hZChyZWZlcmVuY2UsIHBvcHBlciwgb3B0aW9ucywgbW9kaWZpZXJPcHRpb25zLCBzdGF0ZSkge1xuICAvLyBjb21wdXRlIHJlZmVyZW5jZSBlbGVtZW50IG9mZnNldHNcbiAgdmFyIHJlZmVyZW5jZU9mZnNldHMgPSBnZXRSZWZlcmVuY2VPZmZzZXRzKHN0YXRlLCBwb3BwZXIsIHJlZmVyZW5jZSwgb3B0aW9ucy5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBjb21wdXRlIGF1dG8gcGxhY2VtZW50LCBzdG9yZSBwbGFjZW1lbnQgaW5zaWRlIHRoZSBkYXRhIG9iamVjdCxcbiAgLy8gbW9kaWZpZXJzIHdpbGwgYmUgYWJsZSB0byBlZGl0IGBwbGFjZW1lbnRgIGlmIG5lZWRlZFxuICAvLyBhbmQgcmVmZXIgdG8gb3JpZ2luYWxQbGFjZW1lbnQgdG8ga25vdyB0aGUgb3JpZ2luYWwgdmFsdWVcbiAgdmFyIHBsYWNlbWVudCA9IGNvbXB1dGVBdXRvUGxhY2VtZW50KG9wdGlvbnMucGxhY2VtZW50LCByZWZlcmVuY2VPZmZzZXRzLCBwb3BwZXIsIHJlZmVyZW5jZSwgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5ib3VuZGFyaWVzRWxlbWVudCwgb3B0aW9ucy5tb2RpZmllcnMuZmxpcC5wYWRkaW5nKTtcblxuICBwb3BwZXIuc2V0QXR0cmlidXRlKCd4LXBsYWNlbWVudCcsIHBsYWNlbWVudCk7XG5cbiAgLy8gQXBwbHkgYHBvc2l0aW9uYCB0byBwb3BwZXIgYmVmb3JlIGFueXRoaW5nIGVsc2UgYmVjYXVzZVxuICAvLyB3aXRob3V0IHRoZSBwb3NpdGlvbiBhcHBsaWVkIHdlIGNhbid0IGd1YXJhbnRlZSBjb3JyZWN0IGNvbXB1dGF0aW9uc1xuICBzZXRTdHlsZXMocG9wcGVyLCB7IHBvc2l0aW9uOiBvcHRpb25zLnBvc2l0aW9uRml4ZWQgPyAnZml4ZWQnIDogJ2Fic29sdXRlJyB9KTtcblxuICByZXR1cm4gb3B0aW9ucztcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7Qm9vbGVhbn0gc2hvdWxkUm91bmQgLSBJZiB0aGUgb2Zmc2V0cyBzaG91bGQgYmUgcm91bmRlZCBhdCBhbGxcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBwb3BwZXIncyBwb3NpdGlvbiBvZmZzZXRzIHJvdW5kZWRcbiAqXG4gKiBUaGUgdGFsZSBvZiBwaXhlbC1wZXJmZWN0IHBvc2l0aW9uaW5nLiBJdCdzIHN0aWxsIG5vdCAxMDAlIHBlcmZlY3QsIGJ1dCBhc1xuICogZ29vZCBhcyBpdCBjYW4gYmUgd2l0aGluIHJlYXNvbi5cbiAqIERpc2N1c3Npb24gaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL0ZlelZyYXN0YS9wb3BwZXIuanMvcHVsbC83MTVcbiAqXG4gKiBMb3cgRFBJIHNjcmVlbnMgY2F1c2UgYSBwb3BwZXIgdG8gYmUgYmx1cnJ5IGlmIG5vdCB1c2luZyBmdWxsIHBpeGVscyAoU2FmYXJpXG4gKiBhcyB3ZWxsIG9uIEhpZ2ggRFBJIHNjcmVlbnMpLlxuICpcbiAqIEZpcmVmb3ggcHJlZmVycyBubyByb3VuZGluZyBmb3IgcG9zaXRpb25pbmcgYW5kIGRvZXMgbm90IGhhdmUgYmx1cnJpbmVzcyBvblxuICogaGlnaCBEUEkgc2NyZWVucy5cbiAqXG4gKiBPbmx5IGhvcml6b250YWwgcGxhY2VtZW50IGFuZCBsZWZ0L3JpZ2h0IHZhbHVlcyBuZWVkIHRvIGJlIGNvbnNpZGVyZWQuXG4gKi9cbmZ1bmN0aW9uIGdldFJvdW5kZWRPZmZzZXRzKGRhdGEsIHNob3VsZFJvdW5kKSB7XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcbiAgdmFyIHJvdW5kID0gTWF0aC5yb3VuZCxcbiAgICAgIGZsb29yID0gTWF0aC5mbG9vcjtcblxuICB2YXIgbm9Sb3VuZCA9IGZ1bmN0aW9uIG5vUm91bmQodikge1xuICAgIHJldHVybiB2O1xuICB9O1xuXG4gIHZhciByZWZlcmVuY2VXaWR0aCA9IHJvdW5kKHJlZmVyZW5jZS53aWR0aCk7XG4gIHZhciBwb3BwZXJXaWR0aCA9IHJvdW5kKHBvcHBlci53aWR0aCk7XG5cbiAgdmFyIGlzVmVydGljYWwgPSBbJ2xlZnQnLCAncmlnaHQnXS5pbmRleE9mKGRhdGEucGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBpc1ZhcmlhdGlvbiA9IGRhdGEucGxhY2VtZW50LmluZGV4T2YoJy0nKSAhPT0gLTE7XG4gIHZhciBzYW1lV2lkdGhQYXJpdHkgPSByZWZlcmVuY2VXaWR0aCAlIDIgPT09IHBvcHBlcldpZHRoICUgMjtcbiAgdmFyIGJvdGhPZGRXaWR0aCA9IHJlZmVyZW5jZVdpZHRoICUgMiA9PT0gMSAmJiBwb3BwZXJXaWR0aCAlIDIgPT09IDE7XG5cbiAgdmFyIGhvcml6b250YWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmQgPyBub1JvdW5kIDogaXNWZXJ0aWNhbCB8fCBpc1ZhcmlhdGlvbiB8fCBzYW1lV2lkdGhQYXJpdHkgPyByb3VuZCA6IGZsb29yO1xuICB2YXIgdmVydGljYWxUb0ludGVnZXIgPSAhc2hvdWxkUm91bmQgPyBub1JvdW5kIDogcm91bmQ7XG5cbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiBob3Jpem9udGFsVG9JbnRlZ2VyKGJvdGhPZGRXaWR0aCAmJiAhaXNWYXJpYXRpb24gJiYgc2hvdWxkUm91bmQgPyBwb3BwZXIubGVmdCAtIDEgOiBwb3BwZXIubGVmdCksXG4gICAgdG9wOiB2ZXJ0aWNhbFRvSW50ZWdlcihwb3BwZXIudG9wKSxcbiAgICBib3R0b206IHZlcnRpY2FsVG9JbnRlZ2VyKHBvcHBlci5ib3R0b20pLFxuICAgIHJpZ2h0OiBob3Jpem9udGFsVG9JbnRlZ2VyKHBvcHBlci5yaWdodClcbiAgfTtcbn1cblxudmFyIGlzRmlyZWZveCA9IGlzQnJvd3NlciAmJiAvRmlyZWZveC9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGNvbXB1dGVTdHlsZShkYXRhLCBvcHRpb25zKSB7XG4gIHZhciB4ID0gb3B0aW9ucy54LFxuICAgICAgeSA9IG9wdGlvbnMueTtcbiAgdmFyIHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgLy8gUmVtb3ZlIHRoaXMgbGVnYWN5IHN1cHBvcnQgaW4gUG9wcGVyLmpzIHYyXG5cbiAgdmFyIGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA9IGZpbmQoZGF0YS5pbnN0YW5jZS5tb2RpZmllcnMsIGZ1bmN0aW9uIChtb2RpZmllcikge1xuICAgIHJldHVybiBtb2RpZmllci5uYW1lID09PSAnYXBwbHlTdHlsZSc7XG4gIH0pLmdwdUFjY2VsZXJhdGlvbjtcbiAgaWYgKGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBgZ3B1QWNjZWxlcmF0aW9uYCBvcHRpb24gbW92ZWQgdG8gYGNvbXB1dGVTdHlsZWAgbW9kaWZpZXIgYW5kIHdpbGwgbm90IGJlIHN1cHBvcnRlZCBpbiBmdXR1cmUgdmVyc2lvbnMgb2YgUG9wcGVyLmpzIScpO1xuICB9XG4gIHZhciBncHVBY2NlbGVyYXRpb24gPSBsZWdhY3lHcHVBY2NlbGVyYXRpb25PcHRpb24gIT09IHVuZGVmaW5lZCA/IGxlZ2FjeUdwdUFjY2VsZXJhdGlvbk9wdGlvbiA6IG9wdGlvbnMuZ3B1QWNjZWxlcmF0aW9uO1xuXG4gIHZhciBvZmZzZXRQYXJlbnQgPSBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuICB2YXIgb2Zmc2V0UGFyZW50UmVjdCA9IGdldEJvdW5kaW5nQ2xpZW50UmVjdChvZmZzZXRQYXJlbnQpO1xuXG4gIC8vIFN0eWxlc1xuICB2YXIgc3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiBwb3BwZXIucG9zaXRpb25cbiAgfTtcblxuICB2YXIgb2Zmc2V0cyA9IGdldFJvdW5kZWRPZmZzZXRzKGRhdGEsIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIDwgMiB8fCAhaXNGaXJlZm94KTtcblxuICB2YXIgc2lkZUEgPSB4ID09PSAnYm90dG9tJyA/ICd0b3AnIDogJ2JvdHRvbSc7XG4gIHZhciBzaWRlQiA9IHkgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuXG4gIC8vIGlmIGdwdUFjY2VsZXJhdGlvbiBpcyBzZXQgdG8gYHRydWVgIGFuZCB0cmFuc2Zvcm0gaXMgc3VwcG9ydGVkLFxuICAvLyAgd2UgdXNlIGB0cmFuc2xhdGUzZGAgdG8gYXBwbHkgdGhlIHBvc2l0aW9uIHRvIHRoZSBwb3BwZXIgd2VcbiAgLy8gYXV0b21hdGljYWxseSB1c2UgdGhlIHN1cHBvcnRlZCBwcmVmaXhlZCB2ZXJzaW9uIGlmIG5lZWRlZFxuICB2YXIgcHJlZml4ZWRQcm9wZXJ0eSA9IGdldFN1cHBvcnRlZFByb3BlcnR5TmFtZSgndHJhbnNmb3JtJyk7XG5cbiAgLy8gbm93LCBsZXQncyBtYWtlIGEgc3RlcCBiYWNrIGFuZCBsb29rIGF0IHRoaXMgY29kZSBjbG9zZWx5ICh3dGY/KVxuICAvLyBJZiB0aGUgY29udGVudCBvZiB0aGUgcG9wcGVyIGdyb3dzIG9uY2UgaXQncyBiZWVuIHBvc2l0aW9uZWQsIGl0XG4gIC8vIG1heSBoYXBwZW4gdGhhdCB0aGUgcG9wcGVyIGdldHMgbWlzcGxhY2VkIGJlY2F1c2Ugb2YgdGhlIG5ldyBjb250ZW50XG4gIC8vIG92ZXJmbG93aW5nIGl0cyByZWZlcmVuY2UgZWxlbWVudFxuICAvLyBUbyBhdm9pZCB0aGlzIHByb2JsZW0sIHdlIHByb3ZpZGUgdHdvIG9wdGlvbnMgKHggYW5kIHkpLCB3aGljaCBhbGxvd1xuICAvLyB0aGUgY29uc3VtZXIgdG8gZGVmaW5lIHRoZSBvZmZzZXQgb3JpZ2luLlxuICAvLyBJZiB3ZSBwb3NpdGlvbiBhIHBvcHBlciBvbiB0b3Agb2YgYSByZWZlcmVuY2UgZWxlbWVudCwgd2UgY2FuIHNldFxuICAvLyBgeGAgdG8gYHRvcGAgdG8gbWFrZSB0aGUgcG9wcGVyIGdyb3cgdG93YXJkcyBpdHMgdG9wIGluc3RlYWQgb2ZcbiAgLy8gaXRzIGJvdHRvbS5cbiAgdmFyIGxlZnQgPSB2b2lkIDAsXG4gICAgICB0b3AgPSB2b2lkIDA7XG4gIGlmIChzaWRlQSA9PT0gJ2JvdHRvbScpIHtcbiAgICAvLyB3aGVuIG9mZnNldFBhcmVudCBpcyA8aHRtbD4gdGhlIHBvc2l0aW9uaW5nIGlzIHJlbGF0aXZlIHRvIHRoZSBib3R0b20gb2YgdGhlIHNjcmVlbiAoZXhjbHVkaW5nIHRoZSBzY3JvbGxiYXIpXG4gICAgLy8gYW5kIG5vdCB0aGUgYm90dG9tIG9mIHRoZSBodG1sIGVsZW1lbnRcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIHRvcCA9IC1vZmZzZXRQYXJlbnQuY2xpZW50SGVpZ2h0ICsgb2Zmc2V0cy5ib3R0b207XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvcCA9IC1vZmZzZXRQYXJlbnRSZWN0LmhlaWdodCArIG9mZnNldHMuYm90dG9tO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0b3AgPSBvZmZzZXRzLnRvcDtcbiAgfVxuICBpZiAoc2lkZUIgPT09ICdyaWdodCcpIHtcbiAgICBpZiAob2Zmc2V0UGFyZW50Lm5vZGVOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgIGxlZnQgPSAtb2Zmc2V0UGFyZW50LmNsaWVudFdpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgbGVmdCA9IC1vZmZzZXRQYXJlbnRSZWN0LndpZHRoICsgb2Zmc2V0cy5yaWdodDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbGVmdCA9IG9mZnNldHMubGVmdDtcbiAgfVxuICBpZiAoZ3B1QWNjZWxlcmF0aW9uICYmIHByZWZpeGVkUHJvcGVydHkpIHtcbiAgICBzdHlsZXNbcHJlZml4ZWRQcm9wZXJ0eV0gPSAndHJhbnNsYXRlM2QoJyArIGxlZnQgKyAncHgsICcgKyB0b3AgKyAncHgsIDApJztcbiAgICBzdHlsZXNbc2lkZUFdID0gMDtcbiAgICBzdHlsZXNbc2lkZUJdID0gMDtcbiAgICBzdHlsZXMud2lsbENoYW5nZSA9ICd0cmFuc2Zvcm0nO1xuICB9IGVsc2Uge1xuICAgIC8vIG90aHdlcmlzZSwgd2UgdXNlIHRoZSBzdGFuZGFyZCBgdG9wYCwgYGxlZnRgLCBgYm90dG9tYCBhbmQgYHJpZ2h0YCBwcm9wZXJ0aWVzXG4gICAgdmFyIGludmVydFRvcCA9IHNpZGVBID09PSAnYm90dG9tJyA/IC0xIDogMTtcbiAgICB2YXIgaW52ZXJ0TGVmdCA9IHNpZGVCID09PSAncmlnaHQnID8gLTEgOiAxO1xuICAgIHN0eWxlc1tzaWRlQV0gPSB0b3AgKiBpbnZlcnRUb3A7XG4gICAgc3R5bGVzW3NpZGVCXSA9IGxlZnQgKiBpbnZlcnRMZWZ0O1xuICAgIHN0eWxlcy53aWxsQ2hhbmdlID0gc2lkZUEgKyAnLCAnICsgc2lkZUI7XG4gIH1cblxuICAvLyBBdHRyaWJ1dGVzXG4gIHZhciBhdHRyaWJ1dGVzID0ge1xuICAgICd4LXBsYWNlbWVudCc6IGRhdGEucGxhY2VtZW50XG4gIH07XG5cbiAgLy8gVXBkYXRlIGBkYXRhYCBhdHRyaWJ1dGVzLCBzdHlsZXMgYW5kIGFycm93U3R5bGVzXG4gIGRhdGEuYXR0cmlidXRlcyA9IF9leHRlbmRzKHt9LCBhdHRyaWJ1dGVzLCBkYXRhLmF0dHJpYnV0ZXMpO1xuICBkYXRhLnN0eWxlcyA9IF9leHRlbmRzKHt9LCBzdHlsZXMsIGRhdGEuc3R5bGVzKTtcbiAgZGF0YS5hcnJvd1N0eWxlcyA9IF9leHRlbmRzKHt9LCBkYXRhLm9mZnNldHMuYXJyb3csIGRhdGEuYXJyb3dTdHlsZXMpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEhlbHBlciB1c2VkIHRvIGtub3cgaWYgdGhlIGdpdmVuIG1vZGlmaWVyIGRlcGVuZHMgZnJvbSBhbm90aGVyIG9uZS48YnIgLz5cbiAqIEl0IGNoZWNrcyBpZiB0aGUgbmVlZGVkIG1vZGlmaWVyIGlzIGxpc3RlZCBhbmQgZW5hYmxlZC5cbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVycyAtIGxpc3Qgb2YgbW9kaWZpZXJzXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdGluZ05hbWUgLSBuYW1lIG9mIHJlcXVlc3RpbmcgbW9kaWZpZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0ZWROYW1lIC0gbmFtZSBvZiByZXF1ZXN0ZWQgbW9kaWZpZXJcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICovXG5mdW5jdGlvbiBpc01vZGlmaWVyUmVxdWlyZWQobW9kaWZpZXJzLCByZXF1ZXN0aW5nTmFtZSwgcmVxdWVzdGVkTmFtZSkge1xuICB2YXIgcmVxdWVzdGluZyA9IGZpbmQobW9kaWZpZXJzLCBmdW5jdGlvbiAoX3JlZikge1xuICAgIHZhciBuYW1lID0gX3JlZi5uYW1lO1xuICAgIHJldHVybiBuYW1lID09PSByZXF1ZXN0aW5nTmFtZTtcbiAgfSk7XG5cbiAgdmFyIGlzUmVxdWlyZWQgPSAhIXJlcXVlc3RpbmcgJiYgbW9kaWZpZXJzLnNvbWUoZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09IHJlcXVlc3RlZE5hbWUgJiYgbW9kaWZpZXIuZW5hYmxlZCAmJiBtb2RpZmllci5vcmRlciA8IHJlcXVlc3Rpbmcub3JkZXI7XG4gIH0pO1xuXG4gIGlmICghaXNSZXF1aXJlZCkge1xuICAgIHZhciBfcmVxdWVzdGluZyA9ICdgJyArIHJlcXVlc3RpbmdOYW1lICsgJ2AnO1xuICAgIHZhciByZXF1ZXN0ZWQgPSAnYCcgKyByZXF1ZXN0ZWROYW1lICsgJ2AnO1xuICAgIGNvbnNvbGUud2FybihyZXF1ZXN0ZWQgKyAnIG1vZGlmaWVyIGlzIHJlcXVpcmVkIGJ5ICcgKyBfcmVxdWVzdGluZyArICcgbW9kaWZpZXIgaW4gb3JkZXIgdG8gd29yaywgYmUgc3VyZSB0byBpbmNsdWRlIGl0IGJlZm9yZSAnICsgX3JlcXVlc3RpbmcgKyAnIScpO1xuICB9XG4gIHJldHVybiBpc1JlcXVpcmVkO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gYXJyb3coZGF0YSwgb3B0aW9ucykge1xuICB2YXIgX2RhdGEkb2Zmc2V0cyRhcnJvdztcblxuICAvLyBhcnJvdyBkZXBlbmRzIG9uIGtlZXBUb2dldGhlciBpbiBvcmRlciB0byB3b3JrXG4gIGlmICghaXNNb2RpZmllclJlcXVpcmVkKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCAnYXJyb3cnLCAna2VlcFRvZ2V0aGVyJykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciBhcnJvd0VsZW1lbnQgPSBvcHRpb25zLmVsZW1lbnQ7XG5cbiAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIGEgc3RyaW5nLCBzdXBwb3NlIGl0J3MgYSBDU1Mgc2VsZWN0b3JcbiAgaWYgKHR5cGVvZiBhcnJvd0VsZW1lbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgYXJyb3dFbGVtZW50ID0gZGF0YS5pbnN0YW5jZS5wb3BwZXIucXVlcnlTZWxlY3RvcihhcnJvd0VsZW1lbnQpO1xuXG4gICAgLy8gaWYgYXJyb3dFbGVtZW50IGlzIG5vdCBmb3VuZCwgZG9uJ3QgcnVuIHRoZSBtb2RpZmllclxuICAgIGlmICghYXJyb3dFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gaWYgdGhlIGFycm93RWxlbWVudCBpc24ndCBhIHF1ZXJ5IHNlbGVjdG9yIHdlIG11c3QgY2hlY2sgdGhhdCB0aGVcbiAgICAvLyBwcm92aWRlZCBET00gbm9kZSBpcyBjaGlsZCBvZiBpdHMgcG9wcGVyIG5vZGVcbiAgICBpZiAoIWRhdGEuaW5zdGFuY2UucG9wcGVyLmNvbnRhaW5zKGFycm93RWxlbWVudCkpIHtcbiAgICAgIGNvbnNvbGUud2FybignV0FSTklORzogYGFycm93LmVsZW1lbnRgIG11c3QgYmUgY2hpbGQgb2YgaXRzIHBvcHBlciBlbGVtZW50IScpO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBsYWNlbWVudCA9IGRhdGEucGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgaXNWZXJ0aWNhbCA9IFsnbGVmdCcsICdyaWdodCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgdmFyIGxlbiA9IGlzVmVydGljYWwgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG4gIHZhciBzaWRlQ2FwaXRhbGl6ZWQgPSBpc1ZlcnRpY2FsID8gJ1RvcCcgOiAnTGVmdCc7XG4gIHZhciBzaWRlID0gc2lkZUNhcGl0YWxpemVkLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBhbHRTaWRlID0gaXNWZXJ0aWNhbCA/ICdsZWZ0JyA6ICd0b3AnO1xuICB2YXIgb3BTaWRlID0gaXNWZXJ0aWNhbCA/ICdib3R0b20nIDogJ3JpZ2h0JztcbiAgdmFyIGFycm93RWxlbWVudFNpemUgPSBnZXRPdXRlclNpemVzKGFycm93RWxlbWVudClbbGVuXTtcblxuICAvL1xuICAvLyBleHRlbmRzIGtlZXBUb2dldGhlciBiZWhhdmlvciBtYWtpbmcgc3VyZSB0aGUgcG9wcGVyIGFuZCBpdHNcbiAgLy8gcmVmZXJlbmNlIGhhdmUgZW5vdWdoIHBpeGVscyBpbiBjb25qdW5jdGlvblxuICAvL1xuXG4gIC8vIHRvcC9sZWZ0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSA8IHBvcHBlcltzaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gLT0gcG9wcGVyW3NpZGVdIC0gKHJlZmVyZW5jZVtvcFNpZGVdIC0gYXJyb3dFbGVtZW50U2l6ZSk7XG4gIH1cbiAgLy8gYm90dG9tL3JpZ2h0IHNpZGVcbiAgaWYgKHJlZmVyZW5jZVtzaWRlXSArIGFycm93RWxlbWVudFNpemUgPiBwb3BwZXJbb3BTaWRlXSkge1xuICAgIGRhdGEub2Zmc2V0cy5wb3BwZXJbc2lkZV0gKz0gcmVmZXJlbmNlW3NpZGVdICsgYXJyb3dFbGVtZW50U2l6ZSAtIHBvcHBlcltvcFNpZGVdO1xuICB9XG4gIGRhdGEub2Zmc2V0cy5wb3BwZXIgPSBnZXRDbGllbnRSZWN0KGRhdGEub2Zmc2V0cy5wb3BwZXIpO1xuXG4gIC8vIGNvbXB1dGUgY2VudGVyIG9mIHRoZSBwb3BwZXJcbiAgdmFyIGNlbnRlciA9IHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVtsZW5dIC8gMiAtIGFycm93RWxlbWVudFNpemUgLyAyO1xuXG4gIC8vIENvbXB1dGUgdGhlIHNpZGVWYWx1ZSB1c2luZyB0aGUgdXBkYXRlZCBwb3BwZXIgb2Zmc2V0c1xuICAvLyB0YWtlIHBvcHBlciBtYXJnaW4gaW4gYWNjb3VudCBiZWNhdXNlIHdlIGRvbid0IGhhdmUgdGhpcyBpbmZvIGF2YWlsYWJsZVxuICB2YXIgY3NzID0gZ2V0U3R5bGVDb21wdXRlZFByb3BlcnR5KGRhdGEuaW5zdGFuY2UucG9wcGVyKTtcbiAgdmFyIHBvcHBlck1hcmdpblNpZGUgPSBwYXJzZUZsb2F0KGNzc1snbWFyZ2luJyArIHNpZGVDYXBpdGFsaXplZF0pO1xuICB2YXIgcG9wcGVyQm9yZGVyU2lkZSA9IHBhcnNlRmxvYXQoY3NzWydib3JkZXInICsgc2lkZUNhcGl0YWxpemVkICsgJ1dpZHRoJ10pO1xuICB2YXIgc2lkZVZhbHVlID0gY2VudGVyIC0gZGF0YS5vZmZzZXRzLnBvcHBlcltzaWRlXSAtIHBvcHBlck1hcmdpblNpZGUgLSBwb3BwZXJCb3JkZXJTaWRlO1xuXG4gIC8vIHByZXZlbnQgYXJyb3dFbGVtZW50IGZyb20gYmVpbmcgcGxhY2VkIG5vdCBjb250aWd1b3VzbHkgdG8gaXRzIHBvcHBlclxuICBzaWRlVmFsdWUgPSBNYXRoLm1heChNYXRoLm1pbihwb3BwZXJbbGVuXSAtIGFycm93RWxlbWVudFNpemUsIHNpZGVWYWx1ZSksIDApO1xuXG4gIGRhdGEuYXJyb3dFbGVtZW50ID0gYXJyb3dFbGVtZW50O1xuICBkYXRhLm9mZnNldHMuYXJyb3cgPSAoX2RhdGEkb2Zmc2V0cyRhcnJvdyA9IHt9LCBkZWZpbmVQcm9wZXJ0eShfZGF0YSRvZmZzZXRzJGFycm93LCBzaWRlLCBNYXRoLnJvdW5kKHNpZGVWYWx1ZSkpLCBkZWZpbmVQcm9wZXJ0eShfZGF0YSRvZmZzZXRzJGFycm93LCBhbHRTaWRlLCAnJyksIF9kYXRhJG9mZnNldHMkYXJyb3cpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEdldCB0aGUgb3Bwb3NpdGUgcGxhY2VtZW50IHZhcmlhdGlvbiBvZiB0aGUgZ2l2ZW4gb25lXG4gKiBAbWV0aG9kXG4gKiBAbWVtYmVyb2YgUG9wcGVyLlV0aWxzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gcGxhY2VtZW50IHZhcmlhdGlvblxuICogQHJldHVybnMge1N0cmluZ30gZmxpcHBlZCBwbGFjZW1lbnQgdmFyaWF0aW9uXG4gKi9cbmZ1bmN0aW9uIGdldE9wcG9zaXRlVmFyaWF0aW9uKHZhcmlhdGlvbikge1xuICBpZiAodmFyaWF0aW9uID09PSAnZW5kJykge1xuICAgIHJldHVybiAnc3RhcnQnO1xuICB9IGVsc2UgaWYgKHZhcmlhdGlvbiA9PT0gJ3N0YXJ0Jykge1xuICAgIHJldHVybiAnZW5kJztcbiAgfVxuICByZXR1cm4gdmFyaWF0aW9uO1xufVxuXG4vKipcbiAqIExpc3Qgb2YgYWNjZXB0ZWQgcGxhY2VtZW50cyB0byB1c2UgYXMgdmFsdWVzIG9mIHRoZSBgcGxhY2VtZW50YCBvcHRpb24uPGJyIC8+XG4gKiBWYWxpZCBwbGFjZW1lbnRzIGFyZTpcbiAqIC0gYGF1dG9gXG4gKiAtIGB0b3BgXG4gKiAtIGByaWdodGBcbiAqIC0gYGJvdHRvbWBcbiAqIC0gYGxlZnRgXG4gKlxuICogRWFjaCBwbGFjZW1lbnQgY2FuIGhhdmUgYSB2YXJpYXRpb24gZnJvbSB0aGlzIGxpc3Q6XG4gKiAtIGAtc3RhcnRgXG4gKiAtIGAtZW5kYFxuICpcbiAqIFZhcmlhdGlvbnMgYXJlIGludGVycHJldGVkIGVhc2lseSBpZiB5b3UgdGhpbmsgb2YgdGhlbSBhcyB0aGUgbGVmdCB0byByaWdodFxuICogd3JpdHRlbiBsYW5ndWFnZXMuIEhvcml6b250YWxseSAoYHRvcGAgYW5kIGBib3R0b21gKSwgYHN0YXJ0YCBpcyBsZWZ0IGFuZCBgZW5kYFxuICogaXMgcmlnaHQuPGJyIC8+XG4gKiBWZXJ0aWNhbGx5IChgbGVmdGAgYW5kIGByaWdodGApLCBgc3RhcnRgIGlzIHRvcCBhbmQgYGVuZGAgaXMgYm90dG9tLlxuICpcbiAqIFNvbWUgdmFsaWQgZXhhbXBsZXMgYXJlOlxuICogLSBgdG9wLWVuZGAgKG9uIHRvcCBvZiByZWZlcmVuY2UsIHJpZ2h0IGFsaWduZWQpXG4gKiAtIGByaWdodC1zdGFydGAgKG9uIHJpZ2h0IG9mIHJlZmVyZW5jZSwgdG9wIGFsaWduZWQpXG4gKiAtIGBib3R0b21gIChvbiBib3R0b20sIGNlbnRlcmVkKVxuICogLSBgYXV0by1lbmRgIChvbiB0aGUgc2lkZSB3aXRoIG1vcmUgc3BhY2UgYXZhaWxhYmxlLCBhbGlnbm1lbnQgZGVwZW5kcyBieSBwbGFjZW1lbnQpXG4gKlxuICogQHN0YXRpY1xuICogQHR5cGUge0FycmF5fVxuICogQGVudW0ge1N0cmluZ31cbiAqIEByZWFkb25seVxuICogQG1ldGhvZCBwbGFjZW1lbnRzXG4gKiBAbWVtYmVyb2YgUG9wcGVyXG4gKi9cbnZhciBwbGFjZW1lbnRzID0gWydhdXRvLXN0YXJ0JywgJ2F1dG8nLCAnYXV0by1lbmQnLCAndG9wLXN0YXJ0JywgJ3RvcCcsICd0b3AtZW5kJywgJ3JpZ2h0LXN0YXJ0JywgJ3JpZ2h0JywgJ3JpZ2h0LWVuZCcsICdib3R0b20tZW5kJywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnbGVmdC1lbmQnLCAnbGVmdCcsICdsZWZ0LXN0YXJ0J107XG5cbi8vIEdldCByaWQgb2YgYGF1dG9gIGBhdXRvLXN0YXJ0YCBhbmQgYGF1dG8tZW5kYFxudmFyIHZhbGlkUGxhY2VtZW50cyA9IHBsYWNlbWVudHMuc2xpY2UoMyk7XG5cbi8qKlxuICogR2l2ZW4gYW4gaW5pdGlhbCBwbGFjZW1lbnQsIHJldHVybnMgYWxsIHRoZSBzdWJzZXF1ZW50IHBsYWNlbWVudHNcbiAqIGNsb2Nrd2lzZSAob3IgY291bnRlci1jbG9ja3dpc2UpLlxuICpcbiAqIEBtZXRob2RcbiAqIEBtZW1iZXJvZiBQb3BwZXIuVXRpbHNcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBwbGFjZW1lbnQgLSBBIHZhbGlkIHBsYWNlbWVudCAoaXQgYWNjZXB0cyB2YXJpYXRpb25zKVxuICogQGFyZ3VtZW50IHtCb29sZWFufSBjb3VudGVyIC0gU2V0IHRvIHRydWUgdG8gd2FsayB0aGUgcGxhY2VtZW50cyBjb3VudGVyY2xvY2t3aXNlXG4gKiBAcmV0dXJucyB7QXJyYXl9IHBsYWNlbWVudHMgaW5jbHVkaW5nIHRoZWlyIHZhcmlhdGlvbnNcbiAqL1xuZnVuY3Rpb24gY2xvY2t3aXNlKHBsYWNlbWVudCkge1xuICB2YXIgY291bnRlciA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogZmFsc2U7XG5cbiAgdmFyIGluZGV4ID0gdmFsaWRQbGFjZW1lbnRzLmluZGV4T2YocGxhY2VtZW50KTtcbiAgdmFyIGFyciA9IHZhbGlkUGxhY2VtZW50cy5zbGljZShpbmRleCArIDEpLmNvbmNhdCh2YWxpZFBsYWNlbWVudHMuc2xpY2UoMCwgaW5kZXgpKTtcbiAgcmV0dXJuIGNvdW50ZXIgPyBhcnIucmV2ZXJzZSgpIDogYXJyO1xufVxuXG52YXIgQkVIQVZJT1JTID0ge1xuICBGTElQOiAnZmxpcCcsXG4gIENMT0NLV0lTRTogJ2Nsb2Nrd2lzZScsXG4gIENPVU5URVJDTE9DS1dJU0U6ICdjb3VudGVyY2xvY2t3aXNlJ1xufTtcblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGZsaXAoZGF0YSwgb3B0aW9ucykge1xuICAvLyBpZiBgaW5uZXJgIG1vZGlmaWVyIGlzIGVuYWJsZWQsIHdlIGNhbid0IHVzZSB0aGUgYGZsaXBgIG1vZGlmaWVyXG4gIGlmIChpc01vZGlmaWVyRW5hYmxlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2lubmVyJykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGlmIChkYXRhLmZsaXBwZWQgJiYgZGF0YS5wbGFjZW1lbnQgPT09IGRhdGEub3JpZ2luYWxQbGFjZW1lbnQpIHtcbiAgICAvLyBzZWVtcyBsaWtlIGZsaXAgaXMgdHJ5aW5nIHRvIGxvb3AsIHByb2JhYmx5IHRoZXJlJ3Mgbm90IGVub3VnaCBzcGFjZSBvbiBhbnkgb2YgdGhlIGZsaXBwYWJsZSBzaWRlc1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgdmFyIGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSwgb3B0aW9ucy5wYWRkaW5nLCBvcHRpb25zLmJvdW5kYXJpZXNFbGVtZW50LCBkYXRhLnBvc2l0aW9uRml4ZWQpO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgcGxhY2VtZW50T3Bwb3NpdGUgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICB2YXIgdmFyaWF0aW9uID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVsxXSB8fCAnJztcblxuICB2YXIgZmxpcE9yZGVyID0gW107XG5cbiAgc3dpdGNoIChvcHRpb25zLmJlaGF2aW9yKSB7XG4gICAgY2FzZSBCRUhBVklPUlMuRkxJUDpcbiAgICAgIGZsaXBPcmRlciA9IFtwbGFjZW1lbnQsIHBsYWNlbWVudE9wcG9zaXRlXTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgQkVIQVZJT1JTLkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBCRUhBVklPUlMuQ09VTlRFUkNMT0NLV0lTRTpcbiAgICAgIGZsaXBPcmRlciA9IGNsb2Nrd2lzZShwbGFjZW1lbnQsIHRydWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGZsaXBPcmRlciA9IG9wdGlvbnMuYmVoYXZpb3I7XG4gIH1cblxuICBmbGlwT3JkZXIuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcbiAgICBpZiAocGxhY2VtZW50ICE9PSBzdGVwIHx8IGZsaXBPcmRlci5sZW5ndGggPT09IGluZGV4ICsgMSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgICBwbGFjZW1lbnRPcHBvc2l0ZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG5cbiAgICB2YXIgcG9wcGVyT2Zmc2V0cyA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG4gICAgdmFyIHJlZk9mZnNldHMgPSBkYXRhLm9mZnNldHMucmVmZXJlbmNlO1xuXG4gICAgLy8gdXNpbmcgZmxvb3IgYmVjYXVzZSB0aGUgcmVmZXJlbmNlIG9mZnNldHMgbWF5IGNvbnRhaW4gZGVjaW1hbHMgd2UgYXJlIG5vdCBnb2luZyB0byBjb25zaWRlciBoZXJlXG4gICAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgb3ZlcmxhcHNSZWYgPSBwbGFjZW1lbnQgPT09ICdsZWZ0JyAmJiBmbG9vcihwb3BwZXJPZmZzZXRzLnJpZ2h0KSA+IGZsb29yKHJlZk9mZnNldHMubGVmdCkgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnICYmIGZsb29yKHBvcHBlck9mZnNldHMubGVmdCkgPCBmbG9vcihyZWZPZmZzZXRzLnJpZ2h0KSB8fCBwbGFjZW1lbnQgPT09ICd0b3AnICYmIGZsb29yKHBvcHBlck9mZnNldHMuYm90dG9tKSA+IGZsb29yKHJlZk9mZnNldHMudG9wKSB8fCBwbGFjZW1lbnQgPT09ICdib3R0b20nICYmIGZsb29yKHBvcHBlck9mZnNldHMudG9wKSA8IGZsb29yKHJlZk9mZnNldHMuYm90dG9tKTtcblxuICAgIHZhciBvdmVyZmxvd3NMZWZ0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5sZWZ0KSA8IGZsb29yKGJvdW5kYXJpZXMubGVmdCk7XG4gICAgdmFyIG92ZXJmbG93c1JpZ2h0ID0gZmxvb3IocG9wcGVyT2Zmc2V0cy5yaWdodCkgPiBmbG9vcihib3VuZGFyaWVzLnJpZ2h0KTtcbiAgICB2YXIgb3ZlcmZsb3dzVG9wID0gZmxvb3IocG9wcGVyT2Zmc2V0cy50b3ApIDwgZmxvb3IoYm91bmRhcmllcy50b3ApO1xuICAgIHZhciBvdmVyZmxvd3NCb3R0b20gPSBmbG9vcihwb3BwZXJPZmZzZXRzLmJvdHRvbSkgPiBmbG9vcihib3VuZGFyaWVzLmJvdHRvbSk7XG5cbiAgICB2YXIgb3ZlcmZsb3dzQm91bmRhcmllcyA9IHBsYWNlbWVudCA9PT0gJ2xlZnQnICYmIG92ZXJmbG93c0xlZnQgfHwgcGxhY2VtZW50ID09PSAncmlnaHQnICYmIG92ZXJmbG93c1JpZ2h0IHx8IHBsYWNlbWVudCA9PT0gJ3RvcCcgJiYgb3ZlcmZsb3dzVG9wIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbScgJiYgb3ZlcmZsb3dzQm90dG9tO1xuXG4gICAgLy8gZmxpcCB0aGUgdmFyaWF0aW9uIGlmIHJlcXVpcmVkXG4gICAgdmFyIGlzVmVydGljYWwgPSBbJ3RvcCcsICdib3R0b20nXS5pbmRleE9mKHBsYWNlbWVudCkgIT09IC0xO1xuXG4gICAgLy8gZmxpcHMgdmFyaWF0aW9uIGlmIHJlZmVyZW5jZSBlbGVtZW50IG92ZXJmbG93cyBib3VuZGFyaWVzXG4gICAgdmFyIGZsaXBwZWRWYXJpYXRpb25CeVJlZiA9ICEhb3B0aW9ucy5mbGlwVmFyaWF0aW9ucyAmJiAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzTGVmdCB8fCBpc1ZlcnRpY2FsICYmIHZhcmlhdGlvbiA9PT0gJ2VuZCcgJiYgb3ZlcmZsb3dzUmlnaHQgfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c1RvcCB8fCAhaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c0JvdHRvbSk7XG5cbiAgICAvLyBmbGlwcyB2YXJpYXRpb24gaWYgcG9wcGVyIGNvbnRlbnQgb3ZlcmZsb3dzIGJvdW5kYXJpZXNcbiAgICB2YXIgZmxpcHBlZFZhcmlhdGlvbkJ5Q29udGVudCA9ICEhb3B0aW9ucy5mbGlwVmFyaWF0aW9uc0J5Q29udGVudCAmJiAoaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdzdGFydCcgJiYgb3ZlcmZsb3dzUmlnaHQgfHwgaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c0xlZnQgfHwgIWlzVmVydGljYWwgJiYgdmFyaWF0aW9uID09PSAnc3RhcnQnICYmIG92ZXJmbG93c0JvdHRvbSB8fCAhaXNWZXJ0aWNhbCAmJiB2YXJpYXRpb24gPT09ICdlbmQnICYmIG92ZXJmbG93c1RvcCk7XG5cbiAgICB2YXIgZmxpcHBlZFZhcmlhdGlvbiA9IGZsaXBwZWRWYXJpYXRpb25CeVJlZiB8fCBmbGlwcGVkVmFyaWF0aW9uQnlDb250ZW50O1xuXG4gICAgaWYgKG92ZXJsYXBzUmVmIHx8IG92ZXJmbG93c0JvdW5kYXJpZXMgfHwgZmxpcHBlZFZhcmlhdGlvbikge1xuICAgICAgLy8gdGhpcyBib29sZWFuIHRvIGRldGVjdCBhbnkgZmxpcCBsb29wXG4gICAgICBkYXRhLmZsaXBwZWQgPSB0cnVlO1xuXG4gICAgICBpZiAob3ZlcmxhcHNSZWYgfHwgb3ZlcmZsb3dzQm91bmRhcmllcykge1xuICAgICAgICBwbGFjZW1lbnQgPSBmbGlwT3JkZXJbaW5kZXggKyAxXTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZsaXBwZWRWYXJpYXRpb24pIHtcbiAgICAgICAgdmFyaWF0aW9uID0gZ2V0T3Bwb3NpdGVWYXJpYXRpb24odmFyaWF0aW9uKTtcbiAgICAgIH1cblxuICAgICAgZGF0YS5wbGFjZW1lbnQgPSBwbGFjZW1lbnQgKyAodmFyaWF0aW9uID8gJy0nICsgdmFyaWF0aW9uIDogJycpO1xuXG4gICAgICAvLyB0aGlzIG9iamVjdCBjb250YWlucyBgcG9zaXRpb25gLCB3ZSB3YW50IHRvIHByZXNlcnZlIGl0IGFsb25nIHdpdGhcbiAgICAgIC8vIGFueSBhZGRpdGlvbmFsIHByb3BlcnR5IHdlIG1heSBhZGQgaW4gdGhlIGZ1dHVyZVxuICAgICAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IF9leHRlbmRzKHt9LCBkYXRhLm9mZnNldHMucG9wcGVyLCBnZXRQb3BwZXJPZmZzZXRzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLm9mZnNldHMucmVmZXJlbmNlLCBkYXRhLnBsYWNlbWVudCkpO1xuXG4gICAgICBkYXRhID0gcnVuTW9kaWZpZXJzKGRhdGEuaW5zdGFuY2UubW9kaWZpZXJzLCBkYXRhLCAnZmxpcCcpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IHVwZGF0ZSBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24ga2VlcFRvZ2V0aGVyKGRhdGEpIHtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuICB2YXIgaXNWZXJ0aWNhbCA9IFsndG9wJywgJ2JvdHRvbSddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTE7XG4gIHZhciBzaWRlID0gaXNWZXJ0aWNhbCA/ICdyaWdodCcgOiAnYm90dG9tJztcbiAgdmFyIG9wU2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgdmFyIG1lYXN1cmVtZW50ID0gaXNWZXJ0aWNhbCA/ICd3aWR0aCcgOiAnaGVpZ2h0JztcblxuICBpZiAocG9wcGVyW3NpZGVdIDwgZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW29wU2lkZV0pIC0gcG9wcGVyW21lYXN1cmVtZW50XTtcbiAgfVxuICBpZiAocG9wcGVyW29wU2lkZV0gPiBmbG9vcihyZWZlcmVuY2Vbc2lkZV0pKSB7XG4gICAgZGF0YS5vZmZzZXRzLnBvcHBlcltvcFNpZGVdID0gZmxvb3IocmVmZXJlbmNlW3NpZGVdKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgc3RyaW5nIGNvbnRhaW5pbmcgdmFsdWUgKyB1bml0IGludG8gYSBweCB2YWx1ZSBudW1iZXJcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIHttb2RpZmllcnN+b2Zmc2V0fVxuICogQHByaXZhdGVcbiAqIEBhcmd1bWVudCB7U3RyaW5nfSBzdHIgLSBWYWx1ZSArIHVuaXQgc3RyaW5nXG4gKiBAYXJndW1lbnQge1N0cmluZ30gbWVhc3VyZW1lbnQgLSBgaGVpZ2h0YCBvciBgd2lkdGhgXG4gKiBAYXJndW1lbnQge09iamVjdH0gcG9wcGVyT2Zmc2V0c1xuICogQGFyZ3VtZW50IHtPYmplY3R9IHJlZmVyZW5jZU9mZnNldHNcbiAqIEByZXR1cm5zIHtOdW1iZXJ8U3RyaW5nfVxuICogVmFsdWUgaW4gcGl4ZWxzLCBvciBvcmlnaW5hbCBzdHJpbmcgaWYgbm8gdmFsdWVzIHdlcmUgZXh0cmFjdGVkXG4gKi9cbmZ1bmN0aW9uIHRvVmFsdWUoc3RyLCBtZWFzdXJlbWVudCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cykge1xuICAvLyBzZXBhcmF0ZSB2YWx1ZSBmcm9tIHVuaXRcbiAgdmFyIHNwbGl0ID0gc3RyLm1hdGNoKC8oKD86XFwtfFxcKyk/XFxkKlxcLj9cXGQqKSguKikvKTtcbiAgdmFyIHZhbHVlID0gK3NwbGl0WzFdO1xuICB2YXIgdW5pdCA9IHNwbGl0WzJdO1xuXG4gIC8vIElmIGl0J3Mgbm90IGEgbnVtYmVyIGl0J3MgYW4gb3BlcmF0b3IsIEkgZ3Vlc3NcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cblxuICBpZiAodW5pdC5pbmRleE9mKCclJykgPT09IDApIHtcbiAgICB2YXIgZWxlbWVudCA9IHZvaWQgMDtcbiAgICBzd2l0Y2ggKHVuaXQpIHtcbiAgICAgIGNhc2UgJyVwJzpcbiAgICAgICAgZWxlbWVudCA9IHBvcHBlck9mZnNldHM7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnJSc6XG4gICAgICBjYXNlICclcic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBlbGVtZW50ID0gcmVmZXJlbmNlT2Zmc2V0cztcbiAgICB9XG5cbiAgICB2YXIgcmVjdCA9IGdldENsaWVudFJlY3QoZWxlbWVudCk7XG4gICAgcmV0dXJuIHJlY3RbbWVhc3VyZW1lbnRdIC8gMTAwICogdmFsdWU7XG4gIH0gZWxzZSBpZiAodW5pdCA9PT0gJ3ZoJyB8fCB1bml0ID09PSAndncnKSB7XG4gICAgLy8gaWYgaXMgYSB2aCBvciB2dywgd2UgY2FsY3VsYXRlIHRoZSBzaXplIGJhc2VkIG9uIHRoZSB2aWV3cG9ydFxuICAgIHZhciBzaXplID0gdm9pZCAwO1xuICAgIGlmICh1bml0ID09PSAndmgnKSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCwgd2luZG93LmlubmVySGVpZ2h0IHx8IDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaXplID0gTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoLCB3aW5kb3cuaW5uZXJXaWR0aCB8fCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpemUgLyAxMDAgKiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICAvLyBpZiBpcyBhbiBleHBsaWNpdCBwaXhlbCB1bml0LCB3ZSBnZXQgcmlkIG9mIHRoZSB1bml0IGFuZCBrZWVwIHRoZSB2YWx1ZVxuICAgIC8vIGlmIGlzIGFuIGltcGxpY2l0IHVuaXQsIGl0J3MgcHgsIGFuZCB3ZSByZXR1cm4ganVzdCB0aGUgdmFsdWVcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbn1cblxuLyoqXG4gKiBQYXJzZSBhbiBgb2Zmc2V0YCBzdHJpbmcgdG8gZXh0cmFwb2xhdGUgYHhgIGFuZCBgeWAgbnVtZXJpYyBvZmZzZXRzLlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2Yge21vZGlmaWVyc35vZmZzZXR9XG4gKiBAcHJpdmF0ZVxuICogQGFyZ3VtZW50IHtTdHJpbmd9IG9mZnNldFxuICogQGFyZ3VtZW50IHtPYmplY3R9IHBvcHBlck9mZnNldHNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSByZWZlcmVuY2VPZmZzZXRzXG4gKiBAYXJndW1lbnQge1N0cmluZ30gYmFzZVBsYWNlbWVudFxuICogQHJldHVybnMge0FycmF5fSBhIHR3byBjZWxscyBhcnJheSB3aXRoIHggYW5kIHkgb2Zmc2V0cyBpbiBudW1iZXJzXG4gKi9cbmZ1bmN0aW9uIHBhcnNlT2Zmc2V0KG9mZnNldCwgcG9wcGVyT2Zmc2V0cywgcmVmZXJlbmNlT2Zmc2V0cywgYmFzZVBsYWNlbWVudCkge1xuICB2YXIgb2Zmc2V0cyA9IFswLCAwXTtcblxuICAvLyBVc2UgaGVpZ2h0IGlmIHBsYWNlbWVudCBpcyBsZWZ0IG9yIHJpZ2h0IGFuZCBpbmRleCBpcyAwIG90aGVyd2lzZSB1c2Ugd2lkdGhcbiAgLy8gaW4gdGhpcyB3YXkgdGhlIGZpcnN0IG9mZnNldCB3aWxsIHVzZSBhbiBheGlzIGFuZCB0aGUgc2Vjb25kIG9uZVxuICAvLyB3aWxsIHVzZSB0aGUgb3RoZXIgb25lXG4gIHZhciB1c2VIZWlnaHQgPSBbJ3JpZ2h0JywgJ2xlZnQnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcblxuICAvLyBTcGxpdCB0aGUgb2Zmc2V0IHN0cmluZyB0byBvYnRhaW4gYSBsaXN0IG9mIHZhbHVlcyBhbmQgb3BlcmFuZHNcbiAgLy8gVGhlIHJlZ2V4IGFkZHJlc3NlcyB2YWx1ZXMgd2l0aCB0aGUgcGx1cyBvciBtaW51cyBzaWduIGluIGZyb250ICgrMTAsIC0yMCwgZXRjKVxuICB2YXIgZnJhZ21lbnRzID0gb2Zmc2V0LnNwbGl0KC8oXFwrfFxcLSkvKS5tYXAoZnVuY3Rpb24gKGZyYWcpIHtcbiAgICByZXR1cm4gZnJhZy50cmltKCk7XG4gIH0pO1xuXG4gIC8vIERldGVjdCBpZiB0aGUgb2Zmc2V0IHN0cmluZyBjb250YWlucyBhIHBhaXIgb2YgdmFsdWVzIG9yIGEgc2luZ2xlIG9uZVxuICAvLyB0aGV5IGNvdWxkIGJlIHNlcGFyYXRlZCBieSBjb21tYSBvciBzcGFjZVxuICB2YXIgZGl2aWRlciA9IGZyYWdtZW50cy5pbmRleE9mKGZpbmQoZnJhZ21lbnRzLCBmdW5jdGlvbiAoZnJhZykge1xuICAgIHJldHVybiBmcmFnLnNlYXJjaCgvLHxcXHMvKSAhPT0gLTE7XG4gIH0pKTtcblxuICBpZiAoZnJhZ21lbnRzW2RpdmlkZXJdICYmIGZyYWdtZW50c1tkaXZpZGVyXS5pbmRleE9mKCcsJykgPT09IC0xKSB7XG4gICAgY29uc29sZS53YXJuKCdPZmZzZXRzIHNlcGFyYXRlZCBieSB3aGl0ZSBzcGFjZShzKSBhcmUgZGVwcmVjYXRlZCwgdXNlIGEgY29tbWEgKCwpIGluc3RlYWQuJyk7XG4gIH1cblxuICAvLyBJZiBkaXZpZGVyIGlzIGZvdW5kLCB3ZSBkaXZpZGUgdGhlIGxpc3Qgb2YgdmFsdWVzIGFuZCBvcGVyYW5kcyB0byBkaXZpZGVcbiAgLy8gdGhlbSBieSBvZnNldCBYIGFuZCBZLlxuICB2YXIgc3BsaXRSZWdleCA9IC9cXHMqLFxccyp8XFxzKy87XG4gIHZhciBvcHMgPSBkaXZpZGVyICE9PSAtMSA/IFtmcmFnbWVudHMuc2xpY2UoMCwgZGl2aWRlcikuY29uY2F0KFtmcmFnbWVudHNbZGl2aWRlcl0uc3BsaXQoc3BsaXRSZWdleClbMF1dKSwgW2ZyYWdtZW50c1tkaXZpZGVyXS5zcGxpdChzcGxpdFJlZ2V4KVsxXV0uY29uY2F0KGZyYWdtZW50cy5zbGljZShkaXZpZGVyICsgMSkpXSA6IFtmcmFnbWVudHNdO1xuXG4gIC8vIENvbnZlcnQgdGhlIHZhbHVlcyB3aXRoIHVuaXRzIHRvIGFic29sdXRlIHBpeGVscyB0byBhbGxvdyBvdXIgY29tcHV0YXRpb25zXG4gIG9wcyA9IG9wcy5tYXAoZnVuY3Rpb24gKG9wLCBpbmRleCkge1xuICAgIC8vIE1vc3Qgb2YgdGhlIHVuaXRzIHJlbHkgb24gdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBwb3BwZXJcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSAoaW5kZXggPT09IDEgPyAhdXNlSGVpZ2h0IDogdXNlSGVpZ2h0KSA/ICdoZWlnaHQnIDogJ3dpZHRoJztcbiAgICB2YXIgbWVyZ2VXaXRoUHJldmlvdXMgPSBmYWxzZTtcbiAgICByZXR1cm4gb3BcbiAgICAvLyBUaGlzIGFnZ3JlZ2F0ZXMgYW55IGArYCBvciBgLWAgc2lnbiB0aGF0IGFyZW4ndCBjb25zaWRlcmVkIG9wZXJhdG9yc1xuICAgIC8vIGUuZy46IDEwICsgKzUgPT4gWzEwLCArLCArNV1cbiAgICAucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICBpZiAoYVthLmxlbmd0aCAtIDFdID09PSAnJyAmJiBbJysnLCAnLSddLmluZGV4T2YoYikgIT09IC0xKSB7XG4gICAgICAgIGFbYS5sZW5ndGggLSAxXSA9IGI7XG4gICAgICAgIG1lcmdlV2l0aFByZXZpb3VzID0gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9IGVsc2UgaWYgKG1lcmdlV2l0aFByZXZpb3VzKSB7XG4gICAgICAgIGFbYS5sZW5ndGggLSAxXSArPSBiO1xuICAgICAgICBtZXJnZVdpdGhQcmV2aW91cyA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhLmNvbmNhdChiKTtcbiAgICAgIH1cbiAgICB9LCBbXSlcbiAgICAvLyBIZXJlIHdlIGNvbnZlcnQgdGhlIHN0cmluZyB2YWx1ZXMgaW50byBudW1iZXIgdmFsdWVzIChpbiBweClcbiAgICAubWFwKGZ1bmN0aW9uIChzdHIpIHtcbiAgICAgIHJldHVybiB0b1ZhbHVlKHN0ciwgbWVhc3VyZW1lbnQsIHBvcHBlck9mZnNldHMsIHJlZmVyZW5jZU9mZnNldHMpO1xuICAgIH0pO1xuICB9KTtcblxuICAvLyBMb29wIHRyb3VnaCB0aGUgb2Zmc2V0cyBhcnJheXMgYW5kIGV4ZWN1dGUgdGhlIG9wZXJhdGlvbnNcbiAgb3BzLmZvckVhY2goZnVuY3Rpb24gKG9wLCBpbmRleCkge1xuICAgIG9wLmZvckVhY2goZnVuY3Rpb24gKGZyYWcsIGluZGV4Mikge1xuICAgICAgaWYgKGlzTnVtZXJpYyhmcmFnKSkge1xuICAgICAgICBvZmZzZXRzW2luZGV4XSArPSBmcmFnICogKG9wW2luZGV4MiAtIDFdID09PSAnLScgPyAtMSA6IDEpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9mZnNldHM7XG59XG5cbi8qKlxuICogQGZ1bmN0aW9uXG4gKiBAbWVtYmVyb2YgTW9kaWZpZXJzXG4gKiBAYXJndW1lbnQge09iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgdXBkYXRlIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQGFyZ3VtZW50IHtOdW1iZXJ8U3RyaW5nfSBvcHRpb25zLm9mZnNldD0wXG4gKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gb2Zmc2V0KGRhdGEsIF9yZWYpIHtcbiAgdmFyIG9mZnNldCA9IF9yZWYub2Zmc2V0O1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQsXG4gICAgICBfZGF0YSRvZmZzZXRzID0gZGF0YS5vZmZzZXRzLFxuICAgICAgcG9wcGVyID0gX2RhdGEkb2Zmc2V0cy5wb3BwZXIsXG4gICAgICByZWZlcmVuY2UgPSBfZGF0YSRvZmZzZXRzLnJlZmVyZW5jZTtcblxuICB2YXIgYmFzZVBsYWNlbWVudCA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xuXG4gIHZhciBvZmZzZXRzID0gdm9pZCAwO1xuICBpZiAoaXNOdW1lcmljKCtvZmZzZXQpKSB7XG4gICAgb2Zmc2V0cyA9IFsrb2Zmc2V0LCAwXTtcbiAgfSBlbHNlIHtcbiAgICBvZmZzZXRzID0gcGFyc2VPZmZzZXQob2Zmc2V0LCBwb3BwZXIsIHJlZmVyZW5jZSwgYmFzZVBsYWNlbWVudCk7XG4gIH1cblxuICBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2xlZnQnKSB7XG4gICAgcG9wcGVyLnRvcCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci5sZWZ0IC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ3JpZ2h0Jykge1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzFdO1xuICB9IGVsc2UgaWYgKGJhc2VQbGFjZW1lbnQgPT09ICd0b3AnKSB7XG4gICAgcG9wcGVyLmxlZnQgKz0gb2Zmc2V0c1swXTtcbiAgICBwb3BwZXIudG9wIC09IG9mZnNldHNbMV07XG4gIH0gZWxzZSBpZiAoYmFzZVBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICBwb3BwZXIubGVmdCArPSBvZmZzZXRzWzBdO1xuICAgIHBvcHBlci50b3AgKz0gb2Zmc2V0c1sxXTtcbiAgfVxuXG4gIGRhdGEucG9wcGVyID0gcG9wcGVyO1xuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gcHJldmVudE92ZXJmbG93KGRhdGEsIG9wdGlvbnMpIHtcbiAgdmFyIGJvdW5kYXJpZXNFbGVtZW50ID0gb3B0aW9ucy5ib3VuZGFyaWVzRWxlbWVudCB8fCBnZXRPZmZzZXRQYXJlbnQoZGF0YS5pbnN0YW5jZS5wb3BwZXIpO1xuXG4gIC8vIElmIG9mZnNldFBhcmVudCBpcyB0aGUgcmVmZXJlbmNlIGVsZW1lbnQsIHdlIHJlYWxseSB3YW50IHRvXG4gIC8vIGdvIG9uZSBzdGVwIHVwIGFuZCB1c2UgdGhlIG5leHQgb2Zmc2V0UGFyZW50IGFzIHJlZmVyZW5jZSB0b1xuICAvLyBhdm9pZCB0byBtYWtlIHRoaXMgbW9kaWZpZXIgY29tcGxldGVseSB1c2VsZXNzIGFuZCBsb29rIGxpa2UgYnJva2VuXG4gIGlmIChkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSA9PT0gYm91bmRhcmllc0VsZW1lbnQpIHtcbiAgICBib3VuZGFyaWVzRWxlbWVudCA9IGdldE9mZnNldFBhcmVudChib3VuZGFyaWVzRWxlbWVudCk7XG4gIH1cblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzZXRzIHRoZSBwb3BwZXIncyBwb3NpdGlvbiBzbyB0aGF0IHRoZSBkb2N1bWVudCBzaXplIGNhbiBiZSBjYWxjdWxhdGVkIGV4Y2x1ZGluZ1xuICAvLyB0aGUgc2l6ZSBvZiB0aGUgcG9wcGVyIGVsZW1lbnQgaXRzZWxmXG4gIHZhciB0cmFuc2Zvcm1Qcm9wID0gZ2V0U3VwcG9ydGVkUHJvcGVydHlOYW1lKCd0cmFuc2Zvcm0nKTtcbiAgdmFyIHBvcHBlclN0eWxlcyA9IGRhdGEuaW5zdGFuY2UucG9wcGVyLnN0eWxlOyAvLyBhc3NpZ25tZW50IHRvIGhlbHAgbWluaWZpY2F0aW9uXG4gIHZhciB0b3AgPSBwb3BwZXJTdHlsZXMudG9wLFxuICAgICAgbGVmdCA9IHBvcHBlclN0eWxlcy5sZWZ0LFxuICAgICAgdHJhbnNmb3JtID0gcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdO1xuXG4gIHBvcHBlclN0eWxlcy50b3AgPSAnJztcbiAgcG9wcGVyU3R5bGVzLmxlZnQgPSAnJztcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gJyc7XG5cbiAgdmFyIGJvdW5kYXJpZXMgPSBnZXRCb3VuZGFyaWVzKGRhdGEuaW5zdGFuY2UucG9wcGVyLCBkYXRhLmluc3RhbmNlLnJlZmVyZW5jZSwgb3B0aW9ucy5wYWRkaW5nLCBib3VuZGFyaWVzRWxlbWVudCwgZGF0YS5wb3NpdGlvbkZpeGVkKTtcblxuICAvLyBOT1RFOiBET00gYWNjZXNzIGhlcmVcbiAgLy8gcmVzdG9yZXMgdGhlIG9yaWdpbmFsIHN0eWxlIHByb3BlcnRpZXMgYWZ0ZXIgdGhlIG9mZnNldHMgaGF2ZSBiZWVuIGNvbXB1dGVkXG4gIHBvcHBlclN0eWxlcy50b3AgPSB0b3A7XG4gIHBvcHBlclN0eWxlcy5sZWZ0ID0gbGVmdDtcbiAgcG9wcGVyU3R5bGVzW3RyYW5zZm9ybVByb3BdID0gdHJhbnNmb3JtO1xuXG4gIG9wdGlvbnMuYm91bmRhcmllcyA9IGJvdW5kYXJpZXM7XG5cbiAgdmFyIG9yZGVyID0gb3B0aW9ucy5wcmlvcml0eTtcbiAgdmFyIHBvcHBlciA9IGRhdGEub2Zmc2V0cy5wb3BwZXI7XG5cbiAgdmFyIGNoZWNrID0ge1xuICAgIHByaW1hcnk6IGZ1bmN0aW9uIHByaW1hcnkocGxhY2VtZW50KSB7XG4gICAgICB2YXIgdmFsdWUgPSBwb3BwZXJbcGxhY2VtZW50XTtcbiAgICAgIGlmIChwb3BwZXJbcGxhY2VtZW50XSA8IGJvdW5kYXJpZXNbcGxhY2VtZW50XSAmJiAhb3B0aW9ucy5lc2NhcGVXaXRoUmVmZXJlbmNlKSB7XG4gICAgICAgIHZhbHVlID0gTWF0aC5tYXgocG9wcGVyW3BsYWNlbWVudF0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sIHBsYWNlbWVudCwgdmFsdWUpO1xuICAgIH0sXG4gICAgc2Vjb25kYXJ5OiBmdW5jdGlvbiBzZWNvbmRhcnkocGxhY2VtZW50KSB7XG4gICAgICB2YXIgbWFpblNpZGUgPSBwbGFjZW1lbnQgPT09ICdyaWdodCcgPyAnbGVmdCcgOiAndG9wJztcbiAgICAgIHZhciB2YWx1ZSA9IHBvcHBlclttYWluU2lkZV07XG4gICAgICBpZiAocG9wcGVyW3BsYWNlbWVudF0gPiBib3VuZGFyaWVzW3BsYWNlbWVudF0gJiYgIW9wdGlvbnMuZXNjYXBlV2l0aFJlZmVyZW5jZSkge1xuICAgICAgICB2YWx1ZSA9IE1hdGgubWluKHBvcHBlclttYWluU2lkZV0sIGJvdW5kYXJpZXNbcGxhY2VtZW50XSAtIChwbGFjZW1lbnQgPT09ICdyaWdodCcgPyBwb3BwZXIud2lkdGggOiBwb3BwZXIuaGVpZ2h0KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoe30sIG1haW5TaWRlLCB2YWx1ZSk7XG4gICAgfVxuICB9O1xuXG4gIG9yZGVyLmZvckVhY2goZnVuY3Rpb24gKHBsYWNlbWVudCkge1xuICAgIHZhciBzaWRlID0gWydsZWZ0JywgJ3RvcCddLmluZGV4T2YocGxhY2VtZW50KSAhPT0gLTEgPyAncHJpbWFyeScgOiAnc2Vjb25kYXJ5JztcbiAgICBwb3BwZXIgPSBfZXh0ZW5kcyh7fSwgcG9wcGVyLCBjaGVja1tzaWRlXShwbGFjZW1lbnQpKTtcbiAgfSk7XG5cbiAgZGF0YS5vZmZzZXRzLnBvcHBlciA9IHBvcHBlcjtcblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSBgdXBkYXRlYCBtZXRob2RcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBvcHRpb25zIC0gTW9kaWZpZXJzIGNvbmZpZ3VyYXRpb24gYW5kIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtPYmplY3R9IFRoZSBkYXRhIG9iamVjdCwgcHJvcGVybHkgbW9kaWZpZWRcbiAqL1xuZnVuY3Rpb24gc2hpZnQoZGF0YSkge1xuICB2YXIgcGxhY2VtZW50ID0gZGF0YS5wbGFjZW1lbnQ7XG4gIHZhciBiYXNlUGxhY2VtZW50ID0gcGxhY2VtZW50LnNwbGl0KCctJylbMF07XG4gIHZhciBzaGlmdHZhcmlhdGlvbiA9IHBsYWNlbWVudC5zcGxpdCgnLScpWzFdO1xuXG4gIC8vIGlmIHNoaWZ0IHNoaWZ0dmFyaWF0aW9uIGlzIHNwZWNpZmllZCwgcnVuIHRoZSBtb2RpZmllclxuICBpZiAoc2hpZnR2YXJpYXRpb24pIHtcbiAgICB2YXIgX2RhdGEkb2Zmc2V0cyA9IGRhdGEub2Zmc2V0cyxcbiAgICAgICAgcmVmZXJlbmNlID0gX2RhdGEkb2Zmc2V0cy5yZWZlcmVuY2UsXG4gICAgICAgIHBvcHBlciA9IF9kYXRhJG9mZnNldHMucG9wcGVyO1xuXG4gICAgdmFyIGlzVmVydGljYWwgPSBbJ2JvdHRvbScsICd0b3AnXS5pbmRleE9mKGJhc2VQbGFjZW1lbnQpICE9PSAtMTtcbiAgICB2YXIgc2lkZSA9IGlzVmVydGljYWwgPyAnbGVmdCcgOiAndG9wJztcbiAgICB2YXIgbWVhc3VyZW1lbnQgPSBpc1ZlcnRpY2FsID8gJ3dpZHRoJyA6ICdoZWlnaHQnO1xuXG4gICAgdmFyIHNoaWZ0T2Zmc2V0cyA9IHtcbiAgICAgIHN0YXJ0OiBkZWZpbmVQcm9wZXJ0eSh7fSwgc2lkZSwgcmVmZXJlbmNlW3NpZGVdKSxcbiAgICAgIGVuZDogZGVmaW5lUHJvcGVydHkoe30sIHNpZGUsIHJlZmVyZW5jZVtzaWRlXSArIHJlZmVyZW5jZVttZWFzdXJlbWVudF0gLSBwb3BwZXJbbWVhc3VyZW1lbnRdKVxuICAgIH07XG5cbiAgICBkYXRhLm9mZnNldHMucG9wcGVyID0gX2V4dGVuZHMoe30sIHBvcHBlciwgc2hpZnRPZmZzZXRzW3NoaWZ0dmFyaWF0aW9uXSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLyoqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJvZiBNb2RpZmllcnNcbiAqIEBhcmd1bWVudCB7T2JqZWN0fSBkYXRhIC0gVGhlIGRhdGEgb2JqZWN0IGdlbmVyYXRlZCBieSB1cGRhdGUgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBUaGUgZGF0YSBvYmplY3QsIHByb3Blcmx5IG1vZGlmaWVkXG4gKi9cbmZ1bmN0aW9uIGhpZGUoZGF0YSkge1xuICBpZiAoIWlzTW9kaWZpZXJSZXF1aXJlZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgJ2hpZGUnLCAncHJldmVudE92ZXJmbG93JykpIHtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHZhciByZWZSZWN0ID0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZTtcbiAgdmFyIGJvdW5kID0gZmluZChkYXRhLmluc3RhbmNlLm1vZGlmaWVycywgZnVuY3Rpb24gKG1vZGlmaWVyKSB7XG4gICAgcmV0dXJuIG1vZGlmaWVyLm5hbWUgPT09ICdwcmV2ZW50T3ZlcmZsb3cnO1xuICB9KS5ib3VuZGFyaWVzO1xuXG4gIGlmIChyZWZSZWN0LmJvdHRvbSA8IGJvdW5kLnRvcCB8fCByZWZSZWN0LmxlZnQgPiBib3VuZC5yaWdodCB8fCByZWZSZWN0LnRvcCA+IGJvdW5kLmJvdHRvbSB8fCByZWZSZWN0LnJpZ2h0IDwgYm91bmQubGVmdCkge1xuICAgIC8vIEF2b2lkIHVubmVjZXNzYXJ5IERPTSBhY2Nlc3MgaWYgdmlzaWJpbGl0eSBoYXNuJ3QgY2hhbmdlZFxuICAgIGlmIChkYXRhLmhpZGUgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGRhdGEuaGlkZSA9IHRydWU7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSAnJztcbiAgfSBlbHNlIHtcbiAgICAvLyBBdm9pZCB1bm5lY2Vzc2FyeSBET00gYWNjZXNzIGlmIHZpc2liaWxpdHkgaGFzbid0IGNoYW5nZWRcbiAgICBpZiAoZGF0YS5oaWRlID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuXG4gICAgZGF0YS5oaWRlID0gZmFsc2U7XG4gICAgZGF0YS5hdHRyaWJ1dGVzWyd4LW91dC1vZi1ib3VuZGFyaWVzJ10gPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIEBmdW5jdGlvblxuICogQG1lbWJlcm9mIE1vZGlmaWVyc1xuICogQGFyZ3VtZW50IHtPYmplY3R9IGRhdGEgLSBUaGUgZGF0YSBvYmplY3QgZ2VuZXJhdGVkIGJ5IGB1cGRhdGVgIG1ldGhvZFxuICogQGFyZ3VtZW50IHtPYmplY3R9IG9wdGlvbnMgLSBNb2RpZmllcnMgY29uZmlndXJhdGlvbiBhbmQgb3B0aW9uc1xuICogQHJldHVybnMge09iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5mdW5jdGlvbiBpbm5lcihkYXRhKSB7XG4gIHZhciBwbGFjZW1lbnQgPSBkYXRhLnBsYWNlbWVudDtcbiAgdmFyIGJhc2VQbGFjZW1lbnQgPSBwbGFjZW1lbnQuc3BsaXQoJy0nKVswXTtcbiAgdmFyIF9kYXRhJG9mZnNldHMgPSBkYXRhLm9mZnNldHMsXG4gICAgICBwb3BwZXIgPSBfZGF0YSRvZmZzZXRzLnBvcHBlcixcbiAgICAgIHJlZmVyZW5jZSA9IF9kYXRhJG9mZnNldHMucmVmZXJlbmNlO1xuXG4gIHZhciBpc0hvcml6ID0gWydsZWZ0JywgJ3JpZ2h0J10uaW5kZXhPZihiYXNlUGxhY2VtZW50KSAhPT0gLTE7XG5cbiAgdmFyIHN1YnRyYWN0TGVuZ3RoID0gWyd0b3AnLCAnbGVmdCddLmluZGV4T2YoYmFzZVBsYWNlbWVudCkgPT09IC0xO1xuXG4gIHBvcHBlcltpc0hvcml6ID8gJ2xlZnQnIDogJ3RvcCddID0gcmVmZXJlbmNlW2Jhc2VQbGFjZW1lbnRdIC0gKHN1YnRyYWN0TGVuZ3RoID8gcG9wcGVyW2lzSG9yaXogPyAnd2lkdGgnIDogJ2hlaWdodCddIDogMCk7XG5cbiAgZGF0YS5wbGFjZW1lbnQgPSBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQpO1xuICBkYXRhLm9mZnNldHMucG9wcGVyID0gZ2V0Q2xpZW50UmVjdChwb3BwZXIpO1xuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vKipcbiAqIE1vZGlmaWVyIGZ1bmN0aW9uLCBlYWNoIG1vZGlmaWVyIGNhbiBoYXZlIGEgZnVuY3Rpb24gb2YgdGhpcyB0eXBlIGFzc2lnbmVkXG4gKiB0byBpdHMgYGZuYCBwcm9wZXJ0eS48YnIgLz5cbiAqIFRoZXNlIGZ1bmN0aW9ucyB3aWxsIGJlIGNhbGxlZCBvbiBlYWNoIHVwZGF0ZSwgdGhpcyBtZWFucyB0aGF0IHlvdSBtdXN0XG4gKiBtYWtlIHN1cmUgdGhleSBhcmUgcGVyZm9ybWFudCBlbm91Z2ggdG8gYXZvaWQgcGVyZm9ybWFuY2UgYm90dGxlbmVja3MuXG4gKlxuICogQGZ1bmN0aW9uIE1vZGlmaWVyRm5cbiAqIEBhcmd1bWVudCB7ZGF0YU9iamVjdH0gZGF0YSAtIFRoZSBkYXRhIG9iamVjdCBnZW5lcmF0ZWQgYnkgYHVwZGF0ZWAgbWV0aG9kXG4gKiBAYXJndW1lbnQge09iamVjdH0gb3B0aW9ucyAtIE1vZGlmaWVycyBjb25maWd1cmF0aW9uIGFuZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7ZGF0YU9iamVjdH0gVGhlIGRhdGEgb2JqZWN0LCBwcm9wZXJseSBtb2RpZmllZFxuICovXG5cbi8qKlxuICogTW9kaWZpZXJzIGFyZSBwbHVnaW5zIHVzZWQgdG8gYWx0ZXIgdGhlIGJlaGF2aW9yIG9mIHlvdXIgcG9wcGVycy48YnIgLz5cbiAqIFBvcHBlci5qcyB1c2VzIGEgc2V0IG9mIDkgbW9kaWZpZXJzIHRvIHByb3ZpZGUgYWxsIHRoZSBiYXNpYyBmdW5jdGlvbmFsaXRpZXNcbiAqIG5lZWRlZCBieSB0aGUgbGlicmFyeS5cbiAqXG4gKiBVc3VhbGx5IHlvdSBkb24ndCB3YW50IHRvIG92ZXJyaWRlIHRoZSBgb3JkZXJgLCBgZm5gIGFuZCBgb25Mb2FkYCBwcm9wcy5cbiAqIEFsbCB0aGUgb3RoZXIgcHJvcGVydGllcyBhcmUgY29uZmlndXJhdGlvbnMgdGhhdCBjb3VsZCBiZSB0d2Vha2VkLlxuICogQG5hbWVzcGFjZSBtb2RpZmllcnNcbiAqL1xudmFyIG1vZGlmaWVycyA9IHtcbiAgLyoqXG4gICAqIE1vZGlmaWVyIHVzZWQgdG8gc2hpZnQgdGhlIHBvcHBlciBvbiB0aGUgc3RhcnQgb3IgZW5kIG9mIGl0cyByZWZlcmVuY2VcbiAgICogZWxlbWVudC48YnIgLz5cbiAgICogSXQgd2lsbCByZWFkIHRoZSB2YXJpYXRpb24gb2YgdGhlIGBwbGFjZW1lbnRgIHByb3BlcnR5LjxiciAvPlxuICAgKiBJdCBjYW4gYmUgb25lIGVpdGhlciBgLWVuZGAgb3IgYC1zdGFydGAuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBzaGlmdDoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj0xMDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDEwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IHNoaWZ0XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBgb2Zmc2V0YCBtb2RpZmllciBjYW4gc2hpZnQgeW91ciBwb3BwZXIgb24gYm90aCBpdHMgYXhpcy5cbiAgICpcbiAgICogSXQgYWNjZXB0cyB0aGUgZm9sbG93aW5nIHVuaXRzOlxuICAgKiAtIGBweGAgb3IgdW5pdC1sZXNzLCBpbnRlcnByZXRlZCBhcyBwaXhlbHNcbiAgICogLSBgJWAgb3IgYCVyYCwgcGVyY2VudGFnZSByZWxhdGl2ZSB0byB0aGUgbGVuZ3RoIG9mIHRoZSByZWZlcmVuY2UgZWxlbWVudFxuICAgKiAtIGAlcGAsIHBlcmNlbnRhZ2UgcmVsYXRpdmUgdG8gdGhlIGxlbmd0aCBvZiB0aGUgcG9wcGVyIGVsZW1lbnRcbiAgICogLSBgdndgLCBDU1Mgdmlld3BvcnQgd2lkdGggdW5pdFxuICAgKiAtIGB2aGAsIENTUyB2aWV3cG9ydCBoZWlnaHQgdW5pdFxuICAgKlxuICAgKiBGb3IgbGVuZ3RoIGlzIGludGVuZGVkIHRoZSBtYWluIGF4aXMgcmVsYXRpdmUgdG8gdGhlIHBsYWNlbWVudCBvZiB0aGUgcG9wcGVyLjxiciAvPlxuICAgKiBUaGlzIG1lYW5zIHRoYXQgaWYgdGhlIHBsYWNlbWVudCBpcyBgdG9wYCBvciBgYm90dG9tYCwgdGhlIGxlbmd0aCB3aWxsIGJlIHRoZVxuICAgKiBgd2lkdGhgLiBJbiBjYXNlIG9mIGBsZWZ0YCBvciBgcmlnaHRgLCBpdCB3aWxsIGJlIHRoZSBgaGVpZ2h0YC5cbiAgICpcbiAgICogWW91IGNhbiBwcm92aWRlIGEgc2luZ2xlIHZhbHVlIChhcyBgTnVtYmVyYCBvciBgU3RyaW5nYCksIG9yIGEgcGFpciBvZiB2YWx1ZXNcbiAgICogYXMgYFN0cmluZ2AgZGl2aWRlZCBieSBhIGNvbW1hIG9yIG9uZSAob3IgbW9yZSkgd2hpdGUgc3BhY2VzLjxiciAvPlxuICAgKiBUaGUgbGF0dGVyIGlzIGEgZGVwcmVjYXRlZCBtZXRob2QgYmVjYXVzZSBpdCBsZWFkcyB0byBjb25mdXNpb24gYW5kIHdpbGwgYmVcbiAgICogcmVtb3ZlZCBpbiB2Mi48YnIgLz5cbiAgICogQWRkaXRpb25hbGx5LCBpdCBhY2NlcHRzIGFkZGl0aW9ucyBhbmQgc3VidHJhY3Rpb25zIGJldHdlZW4gZGlmZmVyZW50IHVuaXRzLlxuICAgKiBOb3RlIHRoYXQgbXVsdGlwbGljYXRpb25zIGFuZCBkaXZpc2lvbnMgYXJlbid0IHN1cHBvcnRlZC5cbiAgICpcbiAgICogVmFsaWQgZXhhbXBsZXMgYXJlOlxuICAgKiBgYGBcbiAgICogMTBcbiAgICogJzEwJSdcbiAgICogJzEwLCAxMCdcbiAgICogJzEwJSwgMTAnXG4gICAqICcxMCArIDEwJSdcbiAgICogJzEwIC0gNXZoICsgMyUnXG4gICAqICctMTBweCArIDV2aCwgNXB4IC0gNiUnXG4gICAqIGBgYFxuICAgKiA+ICoqTkIqKjogSWYgeW91IGRlc2lyZSB0byBhcHBseSBvZmZzZXRzIHRvIHlvdXIgcG9wcGVycyBpbiBhIHdheSB0aGF0IG1heSBtYWtlIHRoZW0gb3ZlcmxhcFxuICAgKiA+IHdpdGggdGhlaXIgcmVmZXJlbmNlIGVsZW1lbnQsIHVuZm9ydHVuYXRlbHksIHlvdSB3aWxsIGhhdmUgdG8gZGlzYWJsZSB0aGUgYGZsaXBgIG1vZGlmaWVyLlxuICAgKiA+IFlvdSBjYW4gcmVhZCBtb3JlIG9uIHRoaXMgYXQgdGhpcyBbaXNzdWVdKGh0dHBzOi8vZ2l0aHViLmNvbS9GZXpWcmFzdGEvcG9wcGVyLmpzL2lzc3Vlcy8zNzMpLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgb2Zmc2V0OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTIwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogb2Zmc2V0LFxuICAgIC8qKiBAcHJvcCB7TnVtYmVyfFN0cmluZ30gb2Zmc2V0PTBcbiAgICAgKiBUaGUgb2Zmc2V0IHZhbHVlIGFzIGRlc2NyaWJlZCBpbiB0aGUgbW9kaWZpZXIgZGVzY3JpcHRpb25cbiAgICAgKi9cbiAgICBvZmZzZXQ6IDBcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBwcmV2ZW50IHRoZSBwb3BwZXIgZnJvbSBiZWluZyBwb3NpdGlvbmVkIG91dHNpZGUgdGhlIGJvdW5kYXJ5LlxuICAgKlxuICAgKiBBIHNjZW5hcmlvIGV4aXN0cyB3aGVyZSB0aGUgcmVmZXJlbmNlIGl0c2VsZiBpcyBub3Qgd2l0aGluIHRoZSBib3VuZGFyaWVzLjxiciAvPlxuICAgKiBXZSBjYW4gc2F5IGl0IGhhcyBcImVzY2FwZWQgdGhlIGJvdW5kYXJpZXNcIiDigJQgb3IganVzdCBcImVzY2FwZWRcIi48YnIgLz5cbiAgICogSW4gdGhpcyBjYXNlIHdlIG5lZWQgdG8gZGVjaWRlIHdoZXRoZXIgdGhlIHBvcHBlciBzaG91bGQgZWl0aGVyOlxuICAgKlxuICAgKiAtIGRldGFjaCBmcm9tIHRoZSByZWZlcmVuY2UgYW5kIHJlbWFpbiBcInRyYXBwZWRcIiBpbiB0aGUgYm91bmRhcmllcywgb3JcbiAgICogLSBpZiBpdCBzaG91bGQgaWdub3JlIHRoZSBib3VuZGFyeSBhbmQgXCJlc2NhcGUgd2l0aCBpdHMgcmVmZXJlbmNlXCJcbiAgICpcbiAgICogV2hlbiBgZXNjYXBlV2l0aFJlZmVyZW5jZWAgaXMgc2V0IHRvYHRydWVgIGFuZCByZWZlcmVuY2UgaXMgY29tcGxldGVseVxuICAgKiBvdXRzaWRlIGl0cyBib3VuZGFyaWVzLCB0aGUgcG9wcGVyIHdpbGwgb3ZlcmZsb3cgKG9yIGNvbXBsZXRlbHkgbGVhdmUpXG4gICAqIHRoZSBib3VuZGFyaWVzIGluIG9yZGVyIHRvIHJlbWFpbiBhdHRhY2hlZCB0byB0aGUgZWRnZSBvZiB0aGUgcmVmZXJlbmNlLlxuICAgKlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAgcHJldmVudE92ZXJmbG93OiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTMwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogMzAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogcHJldmVudE92ZXJmbG93LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtBcnJheX0gW3ByaW9yaXR5PVsnbGVmdCcsJ3JpZ2h0JywndG9wJywnYm90dG9tJ11dXG4gICAgICogUG9wcGVyIHdpbGwgdHJ5IHRvIHByZXZlbnQgb3ZlcmZsb3cgZm9sbG93aW5nIHRoZXNlIHByaW9yaXRpZXMgYnkgZGVmYXVsdCxcbiAgICAgKiB0aGVuLCBpdCBjb3VsZCBvdmVyZmxvdyBvbiB0aGUgbGVmdCBhbmQgb24gdG9wIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcHJpb3JpdHk6IFsnbGVmdCcsICdyaWdodCcsICd0b3AnLCAnYm90dG9tJ10sXG4gICAgLyoqXG4gICAgICogQHByb3Age251bWJlcn0gcGFkZGluZz01XG4gICAgICogQW1vdW50IG9mIHBpeGVsIHVzZWQgdG8gZGVmaW5lIGEgbWluaW11bSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBib3VuZGFyaWVzXG4gICAgICogYW5kIHRoZSBwb3BwZXIuIFRoaXMgbWFrZXMgc3VyZSB0aGUgcG9wcGVyIGFsd2F5cyBoYXMgYSBsaXR0bGUgcGFkZGluZ1xuICAgICAqIGJldHdlZW4gdGhlIGVkZ2VzIG9mIGl0cyBjb250YWluZXJcbiAgICAgKi9cbiAgICBwYWRkaW5nOiA1LFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtTdHJpbmd8SFRNTEVsZW1lbnR9IGJvdW5kYXJpZXNFbGVtZW50PSdzY3JvbGxQYXJlbnQnXG4gICAgICogQm91bmRhcmllcyB1c2VkIGJ5IHRoZSBtb2RpZmllci4gQ2FuIGJlIGBzY3JvbGxQYXJlbnRgLCBgd2luZG93YCxcbiAgICAgKiBgdmlld3BvcnRgIG9yIGFueSBET00gZWxlbWVudC5cbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3Njcm9sbFBhcmVudCdcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBtYWtlIHN1cmUgdGhlIHJlZmVyZW5jZSBhbmQgaXRzIHBvcHBlciBzdGF5IG5lYXIgZWFjaCBvdGhlclxuICAgKiB3aXRob3V0IGxlYXZpbmcgYW55IGdhcCBiZXR3ZWVuIHRoZSB0d28uIEVzcGVjaWFsbHkgdXNlZnVsIHdoZW4gdGhlIGFycm93IGlzXG4gICAqIGVuYWJsZWQgYW5kIHlvdSB3YW50IHRvIGVuc3VyZSB0aGF0IGl0IHBvaW50cyB0byBpdHMgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEl0IGNhcmVzIG9ubHkgYWJvdXQgdGhlIGZpcnN0IGF4aXMuIFlvdSBjYW4gc3RpbGwgaGF2ZSBwb3BwZXJzIHdpdGggbWFyZ2luXG4gICAqIGJldHdlZW4gdGhlIHBvcHBlciBhbmQgaXRzIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBAbWVtYmVyb2YgbW9kaWZpZXJzXG4gICAqIEBpbm5lclxuICAgKi9cbiAga2VlcFRvZ2V0aGVyOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTQwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNDAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjoga2VlcFRvZ2V0aGVyXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbW9kaWZpZXIgaXMgdXNlZCB0byBtb3ZlIHRoZSBgYXJyb3dFbGVtZW50YCBvZiB0aGUgcG9wcGVyIHRvIG1ha2VcbiAgICogc3VyZSBpdCBpcyBwb3NpdGlvbmVkIGJldHdlZW4gdGhlIHJlZmVyZW5jZSBlbGVtZW50IGFuZCBpdHMgcG9wcGVyIGVsZW1lbnQuXG4gICAqIEl0IHdpbGwgcmVhZCB0aGUgb3V0ZXIgc2l6ZSBvZiB0aGUgYGFycm93RWxlbWVudGAgbm9kZSB0byBkZXRlY3QgaG93IG1hbnlcbiAgICogcGl4ZWxzIG9mIGNvbmp1bmN0aW9uIGFyZSBuZWVkZWQuXG4gICAqXG4gICAqIEl0IGhhcyBubyBlZmZlY3QgaWYgbm8gYGFycm93RWxlbWVudGAgaXMgcHJvdmlkZWQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBhcnJvdzoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj01MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDUwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGFycm93LFxuICAgIC8qKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBlbGVtZW50PSdbeC1hcnJvd10nIC0gU2VsZWN0b3Igb3Igbm9kZSB1c2VkIGFzIGFycm93ICovXG4gICAgZWxlbWVudDogJ1t4LWFycm93XSdcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBmbGlwIHRoZSBwb3BwZXIncyBwbGFjZW1lbnQgd2hlbiBpdCBzdGFydHMgdG8gb3ZlcmxhcCBpdHNcbiAgICogcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICpcbiAgICogKipOT1RFOioqIHRoaXMgbW9kaWZpZXIgd2lsbCBpbnRlcnJ1cHQgdGhlIGN1cnJlbnQgdXBkYXRlIGN5Y2xlIGFuZCB3aWxsXG4gICAqIHJlc3RhcnQgaXQgaWYgaXQgZGV0ZWN0cyB0aGUgbmVlZCB0byBmbGlwIHRoZSBwbGFjZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBmbGlwOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTYwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogNjAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogZmxpcCxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEFycmF5fSBiZWhhdmlvcj0nZmxpcCdcbiAgICAgKiBUaGUgYmVoYXZpb3IgdXNlZCB0byBjaGFuZ2UgdGhlIHBvcHBlcidzIHBsYWNlbWVudC4gSXQgY2FuIGJlIG9uZSBvZlxuICAgICAqIGBmbGlwYCwgYGNsb2Nrd2lzZWAsIGBjb3VudGVyY2xvY2t3aXNlYCBvciBhbiBhcnJheSB3aXRoIGEgbGlzdCBvZiB2YWxpZFxuICAgICAqIHBsYWNlbWVudHMgKHdpdGggb3B0aW9uYWwgdmFyaWF0aW9ucylcbiAgICAgKi9cbiAgICBiZWhhdmlvcjogJ2ZsaXAnLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtudW1iZXJ9IHBhZGRpbmc9NVxuICAgICAqIFRoZSBwb3BwZXIgd2lsbCBmbGlwIGlmIGl0IGhpdHMgdGhlIGVkZ2VzIG9mIHRoZSBgYm91bmRhcmllc0VsZW1lbnRgXG4gICAgICovXG4gICAgcGFkZGluZzogNSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7U3RyaW5nfEhUTUxFbGVtZW50fSBib3VuZGFyaWVzRWxlbWVudD0ndmlld3BvcnQnXG4gICAgICogVGhlIGVsZW1lbnQgd2hpY2ggd2lsbCBkZWZpbmUgdGhlIGJvdW5kYXJpZXMgb2YgdGhlIHBvcHBlciBwb3NpdGlvbi5cbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgbmV2ZXIgYmUgcGxhY2VkIG91dHNpZGUgb2YgdGhlIGRlZmluZWQgYm91bmRhcmllc1xuICAgICAqIChleGNlcHQgaWYgYGtlZXBUb2dldGhlcmAgaXMgZW5hYmxlZClcbiAgICAgKi9cbiAgICBib3VuZGFyaWVzRWxlbWVudDogJ3ZpZXdwb3J0JyxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZmxpcFZhcmlhdGlvbnM9ZmFsc2VcbiAgICAgKiBUaGUgcG9wcGVyIHdpbGwgc3dpdGNoIHBsYWNlbWVudCB2YXJpYXRpb24gYmV0d2VlbiBgLXN0YXJ0YCBhbmQgYC1lbmRgIHdoZW5cbiAgICAgKiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgb3ZlcmxhcHMgaXRzIGJvdW5kYXJpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgb3JpZ2luYWwgcGxhY2VtZW50IHNob3VsZCBoYXZlIGEgc2V0IHZhcmlhdGlvbi5cbiAgICAgKi9cbiAgICBmbGlwVmFyaWF0aW9uczogZmFsc2UsXG4gICAgLyoqXG4gICAgICogQHByb3Age0Jvb2xlYW59IGZsaXBWYXJpYXRpb25zQnlDb250ZW50PWZhbHNlXG4gICAgICogVGhlIHBvcHBlciB3aWxsIHN3aXRjaCBwbGFjZW1lbnQgdmFyaWF0aW9uIGJldHdlZW4gYC1zdGFydGAgYW5kIGAtZW5kYCB3aGVuXG4gICAgICogdGhlIHBvcHBlciBlbGVtZW50IG92ZXJsYXBzIGl0cyByZWZlcmVuY2UgYm91bmRhcmllcy5cbiAgICAgKlxuICAgICAqIFRoZSBvcmlnaW5hbCBwbGFjZW1lbnQgc2hvdWxkIGhhdmUgYSBzZXQgdmFyaWF0aW9uLlxuICAgICAqL1xuICAgIGZsaXBWYXJpYXRpb25zQnlDb250ZW50OiBmYWxzZVxuICB9LFxuXG4gIC8qKlxuICAgKiBNb2RpZmllciB1c2VkIHRvIG1ha2UgdGhlIHBvcHBlciBmbG93IHRvd2FyZCB0aGUgaW5uZXIgb2YgdGhlIHJlZmVyZW5jZSBlbGVtZW50LlxuICAgKiBCeSBkZWZhdWx0LCB3aGVuIHRoaXMgbW9kaWZpZXIgaXMgZGlzYWJsZWQsIHRoZSBwb3BwZXIgd2lsbCBiZSBwbGFjZWQgb3V0c2lkZVxuICAgKiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQuXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBpbm5lcjoge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj03MDAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDcwMCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9ZmFsc2UgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogaW5uZXJcbiAgfSxcblxuICAvKipcbiAgICogTW9kaWZpZXIgdXNlZCB0byBoaWRlIHRoZSBwb3BwZXIgd2hlbiBpdHMgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0c2lkZSBvZiB0aGVcbiAgICogcG9wcGVyIGJvdW5kYXJpZXMuIEl0IHdpbGwgc2V0IGEgYHgtb3V0LW9mLWJvdW5kYXJpZXNgIGF0dHJpYnV0ZSB3aGljaCBjYW5cbiAgICogYmUgdXNlZCB0byBoaWRlIHdpdGggYSBDU1Mgc2VsZWN0b3IgdGhlIHBvcHBlciB3aGVuIGl0cyByZWZlcmVuY2UgaXNcbiAgICogb3V0IG9mIGJvdW5kYXJpZXMuXG4gICAqXG4gICAqIFJlcXVpcmVzIHRoZSBgcHJldmVudE92ZXJmbG93YCBtb2RpZmllciBiZWZvcmUgaXQgaW4gb3JkZXIgdG8gd29yay5cbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGhpZGU6IHtcbiAgICAvKiogQHByb3Age251bWJlcn0gb3JkZXI9ODAwIC0gSW5kZXggdXNlZCB0byBkZWZpbmUgdGhlIG9yZGVyIG9mIGV4ZWN1dGlvbiAqL1xuICAgIG9yZGVyOiA4MDAsXG4gICAgLyoqIEBwcm9wIHtCb29sZWFufSBlbmFibGVkPXRydWUgLSBXaGV0aGVyIHRoZSBtb2RpZmllciBpcyBlbmFibGVkIG9yIG5vdCAqL1xuICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgLyoqIEBwcm9wIHtNb2RpZmllckZufSAqL1xuICAgIGZuOiBoaWRlXG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXB1dGVzIHRoZSBzdHlsZSB0aGF0IHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGVsZW1lbnQgdG8gZ2V0c1xuICAgKiBwcm9wZXJseSBwb3NpdGlvbmVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQgdGhpcyBtb2RpZmllciB3aWxsIG5vdCB0b3VjaCB0aGUgRE9NLCBpdCBqdXN0IHByZXBhcmVzIHRoZSBzdHlsZXNcbiAgICogc28gdGhhdCBgYXBwbHlTdHlsZWAgbW9kaWZpZXIgY2FuIGFwcGx5IGl0LiBUaGlzIHNlcGFyYXRpb24gaXMgdXNlZnVsXG4gICAqIGluIGNhc2UgeW91IG5lZWQgdG8gcmVwbGFjZSBgYXBwbHlTdHlsZWAgd2l0aCBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbi5cbiAgICpcbiAgICogVGhpcyBtb2RpZmllciBoYXMgYDg1MGAgYXMgYG9yZGVyYCB2YWx1ZSB0byBtYWludGFpbiBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XG4gICAqIHdpdGggcHJldmlvdXMgdmVyc2lvbnMgb2YgUG9wcGVyLmpzLiBFeHBlY3QgdGhlIG1vZGlmaWVycyBvcmRlcmluZyBtZXRob2RcbiAgICogdG8gY2hhbmdlIGluIGZ1dHVyZSBtYWpvciB2ZXJzaW9ucyBvZiB0aGUgbGlicmFyeS5cbiAgICpcbiAgICogQG1lbWJlcm9mIG1vZGlmaWVyc1xuICAgKiBAaW5uZXJcbiAgICovXG4gIGNvbXB1dGVTdHlsZToge1xuICAgIC8qKiBAcHJvcCB7bnVtYmVyfSBvcmRlcj04NTAgLSBJbmRleCB1c2VkIHRvIGRlZmluZSB0aGUgb3JkZXIgb2YgZXhlY3V0aW9uICovXG4gICAgb3JkZXI6IDg1MCxcbiAgICAvKiogQHByb3Age0Jvb2xlYW59IGVuYWJsZWQ9dHJ1ZSAtIFdoZXRoZXIgdGhlIG1vZGlmaWVyIGlzIGVuYWJsZWQgb3Igbm90ICovXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAvKiogQHByb3Age01vZGlmaWVyRm59ICovXG4gICAgZm46IGNvbXB1dGVTdHlsZSxcbiAgICAvKipcbiAgICAgKiBAcHJvcCB7Qm9vbGVhbn0gZ3B1QWNjZWxlcmF0aW9uPXRydWVcbiAgICAgKiBJZiB0cnVlLCBpdCB1c2VzIHRoZSBDU1MgM0QgdHJhbnNmb3JtYXRpb24gdG8gcG9zaXRpb24gdGhlIHBvcHBlci5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHdpbGwgdXNlIHRoZSBgdG9wYCBhbmQgYGxlZnRgIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBncHVBY2NlbGVyYXRpb246IHRydWUsXG4gICAgLyoqXG4gICAgICogQHByb3Age3N0cmluZ30gW3g9J2JvdHRvbSddXG4gICAgICogV2hlcmUgdG8gYW5jaG9yIHRoZSBYIGF4aXMgKGBib3R0b21gIG9yIGB0b3BgKS4gQUtBIFggb2Zmc2V0IG9yaWdpbi5cbiAgICAgKiBDaGFuZ2UgdGhpcyBpZiB5b3VyIHBvcHBlciBzaG91bGQgZ3JvdyBpbiBhIGRpcmVjdGlvbiBkaWZmZXJlbnQgZnJvbSBgYm90dG9tYFxuICAgICAqL1xuICAgIHg6ICdib3R0b20nLFxuICAgIC8qKlxuICAgICAqIEBwcm9wIHtzdHJpbmd9IFt4PSdsZWZ0J11cbiAgICAgKiBXaGVyZSB0byBhbmNob3IgdGhlIFkgYXhpcyAoYGxlZnRgIG9yIGByaWdodGApLiBBS0EgWSBvZmZzZXQgb3JpZ2luLlxuICAgICAqIENoYW5nZSB0aGlzIGlmIHlvdXIgcG9wcGVyIHNob3VsZCBncm93IGluIGEgZGlyZWN0aW9uIGRpZmZlcmVudCBmcm9tIGByaWdodGBcbiAgICAgKi9cbiAgICB5OiAncmlnaHQnXG4gIH0sXG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgdGhlIGNvbXB1dGVkIHN0eWxlcyB0byB0aGUgcG9wcGVyIGVsZW1lbnQuXG4gICAqXG4gICAqIEFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgYXJlIGxpbWl0ZWQgdG8gdGhpcyBtb2RpZmllci4gVGhpcyBpcyB1c2VmdWwgaW4gY2FzZVxuICAgKiB5b3Ugd2FudCB0byBpbnRlZ3JhdGUgUG9wcGVyLmpzIGluc2lkZSBhIGZyYW1ld29yayBvciB2aWV3IGxpYnJhcnkgYW5kIHlvdVxuICAgKiB3YW50IHRvIGRlbGVnYXRlIGFsbCB0aGUgRE9NIG1hbmlwdWxhdGlvbnMgdG8gaXQuXG4gICAqXG4gICAqIE5vdGUgdGhhdCBpZiB5b3UgZGlzYWJsZSB0aGlzIG1vZGlmaWVyLCB5b3UgbXVzdCBtYWtlIHN1cmUgdGhlIHBvcHBlciBlbGVtZW50XG4gICAqIGhhcyBpdHMgcG9zaXRpb24gc2V0IHRvIGBhYnNvbHV0ZWAgYmVmb3JlIFBvcHBlci5qcyBjYW4gZG8gaXRzIHdvcmshXG4gICAqXG4gICAqIEp1c3QgZGlzYWJsZSB0aGlzIG1vZGlmaWVyIGFuZCBkZWZpbmUgeW91ciBvd24gdG8gYWNoaWV2ZSB0aGUgZGVzaXJlZCBlZmZlY3QuXG4gICAqXG4gICAqIEBtZW1iZXJvZiBtb2RpZmllcnNcbiAgICogQGlubmVyXG4gICAqL1xuICBhcHBseVN0eWxlOiB7XG4gICAgLyoqIEBwcm9wIHtudW1iZXJ9IG9yZGVyPTkwMCAtIEluZGV4IHVzZWQgdG8gZGVmaW5lIHRoZSBvcmRlciBvZiBleGVjdXRpb24gKi9cbiAgICBvcmRlcjogOTAwLFxuICAgIC8qKiBAcHJvcCB7Qm9vbGVhbn0gZW5hYmxlZD10cnVlIC0gV2hldGhlciB0aGUgbW9kaWZpZXIgaXMgZW5hYmxlZCBvciBub3QgKi9cbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIC8qKiBAcHJvcCB7TW9kaWZpZXJGbn0gKi9cbiAgICBmbjogYXBwbHlTdHlsZSxcbiAgICAvKiogQHByb3Age0Z1bmN0aW9ufSAqL1xuICAgIG9uTG9hZDogYXBwbHlTdHlsZU9uTG9hZCxcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMTAuMCwgdGhlIHByb3BlcnR5IG1vdmVkIHRvIGBjb21wdXRlU3R5bGVgIG1vZGlmaWVyXG4gICAgICogQHByb3Age0Jvb2xlYW59IGdwdUFjY2VsZXJhdGlvbj10cnVlXG4gICAgICogSWYgdHJ1ZSwgaXQgdXNlcyB0aGUgQ1NTIDNEIHRyYW5zZm9ybWF0aW9uIHRvIHBvc2l0aW9uIHRoZSBwb3BwZXIuXG4gICAgICogT3RoZXJ3aXNlLCBpdCB3aWxsIHVzZSB0aGUgYHRvcGAgYW5kIGBsZWZ0YCBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgZ3B1QWNjZWxlcmF0aW9uOiB1bmRlZmluZWRcbiAgfVxufTtcblxuLyoqXG4gKiBUaGUgYGRhdGFPYmplY3RgIGlzIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgaW5mb3JtYXRpb24gdXNlZCBieSBQb3BwZXIuanMuXG4gKiBUaGlzIG9iamVjdCBpcyBwYXNzZWQgdG8gbW9kaWZpZXJzIGFuZCB0byB0aGUgYG9uQ3JlYXRlYCBhbmQgYG9uVXBkYXRlYCBjYWxsYmFja3MuXG4gKiBAbmFtZSBkYXRhT2JqZWN0XG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5pbnN0YW5jZSBUaGUgUG9wcGVyLmpzIGluc3RhbmNlXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5wbGFjZW1lbnQgUGxhY2VtZW50IGFwcGxpZWQgdG8gcG9wcGVyXG4gKiBAcHJvcGVydHkge1N0cmluZ30gZGF0YS5vcmlnaW5hbFBsYWNlbWVudCBQbGFjZW1lbnQgb3JpZ2luYWxseSBkZWZpbmVkIG9uIGluaXRcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gZGF0YS5mbGlwcGVkIFRydWUgaWYgcG9wcGVyIGhhcyBiZWVuIGZsaXBwZWQgYnkgZmxpcCBtb2RpZmllclxuICogQHByb3BlcnR5IHtCb29sZWFufSBkYXRhLmhpZGUgVHJ1ZSBpZiB0aGUgcmVmZXJlbmNlIGVsZW1lbnQgaXMgb3V0IG9mIGJvdW5kYXJpZXMsIHVzZWZ1bCB0byBrbm93IHdoZW4gdG8gaGlkZSB0aGUgcG9wcGVyXG4gKiBAcHJvcGVydHkge0hUTUxFbGVtZW50fSBkYXRhLmFycm93RWxlbWVudCBOb2RlIHVzZWQgYXMgYXJyb3cgYnkgYXJyb3cgbW9kaWZpZXJcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLnN0eWxlcyBBbnkgQ1NTIHByb3BlcnR5IGRlZmluZWQgaGVyZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHBvcHBlci4gSXQgZXhwZWN0cyB0aGUgSmF2YVNjcmlwdCBub21lbmNsYXR1cmUgKGVnLiBgbWFyZ2luQm90dG9tYClcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLmFycm93U3R5bGVzIEFueSBDU1MgcHJvcGVydHkgZGVmaW5lZCBoZXJlIHdpbGwgYmUgYXBwbGllZCB0byB0aGUgcG9wcGVyIGFycm93LiBJdCBleHBlY3RzIHRoZSBKYXZhU2NyaXB0IG5vbWVuY2xhdHVyZSAoZWcuIGBtYXJnaW5Cb3R0b21gKVxuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEuYm91bmRhcmllcyBPZmZzZXRzIG9mIHRoZSBwb3BwZXIgYm91bmRhcmllc1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cyBUaGUgbWVhc3VyZW1lbnRzIG9mIHBvcHBlciwgcmVmZXJlbmNlIGFuZCBhcnJvdyBlbGVtZW50c1xuICogQHByb3BlcnR5IHtPYmplY3R9IGRhdGEub2Zmc2V0cy5wb3BwZXIgYHRvcGAsIGBsZWZ0YCwgYHdpZHRoYCwgYGhlaWdodGAgdmFsdWVzXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YS5vZmZzZXRzLnJlZmVyZW5jZSBgdG9wYCwgYGxlZnRgLCBgd2lkdGhgLCBgaGVpZ2h0YCB2YWx1ZXNcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBkYXRhLm9mZnNldHMuYXJyb3ddIGB0b3BgIGFuZCBgbGVmdGAgb2Zmc2V0cywgb25seSBvbmUgb2YgdGhlbSB3aWxsIGJlIGRpZmZlcmVudCBmcm9tIDBcbiAqL1xuXG4vKipcbiAqIERlZmF1bHQgb3B0aW9ucyBwcm92aWRlZCB0byBQb3BwZXIuanMgY29uc3RydWN0b3IuPGJyIC8+XG4gKiBUaGVzZSBjYW4gYmUgb3ZlcnJpZGRlbiB1c2luZyB0aGUgYG9wdGlvbnNgIGFyZ3VtZW50IG9mIFBvcHBlci5qcy48YnIgLz5cbiAqIFRvIG92ZXJyaWRlIGFuIG9wdGlvbiwgc2ltcGx5IHBhc3MgYW4gb2JqZWN0IHdpdGggdGhlIHNhbWVcbiAqIHN0cnVjdHVyZSBvZiB0aGUgYG9wdGlvbnNgIG9iamVjdCwgYXMgdGhlIDNyZCBhcmd1bWVudC4gRm9yIGV4YW1wbGU6XG4gKiBgYGBcbiAqIG5ldyBQb3BwZXIocmVmLCBwb3AsIHtcbiAqICAgbW9kaWZpZXJzOiB7XG4gKiAgICAgcHJldmVudE92ZXJmbG93OiB7IGVuYWJsZWQ6IGZhbHNlIH1cbiAqICAgfVxuICogfSlcbiAqIGBgYFxuICogQHR5cGUge09iamVjdH1cbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJvZiBQb3BwZXJcbiAqL1xudmFyIERlZmF1bHRzID0ge1xuICAvKipcbiAgICogUG9wcGVyJ3MgcGxhY2VtZW50LlxuICAgKiBAcHJvcCB7UG9wcGVyLnBsYWNlbWVudHN9IHBsYWNlbWVudD0nYm90dG9tJ1xuICAgKi9cbiAgcGxhY2VtZW50OiAnYm90dG9tJyxcblxuICAvKipcbiAgICogU2V0IHRoaXMgdG8gdHJ1ZSBpZiB5b3Ugd2FudCBwb3BwZXIgdG8gcG9zaXRpb24gaXQgc2VsZiBpbiAnZml4ZWQnIG1vZGVcbiAgICogQHByb3Age0Jvb2xlYW59IHBvc2l0aW9uRml4ZWQ9ZmFsc2VcbiAgICovXG4gIHBvc2l0aW9uRml4ZWQ6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGV2ZW50cyAocmVzaXplLCBzY3JvbGwpIGFyZSBpbml0aWFsbHkgZW5hYmxlZC5cbiAgICogQHByb3Age0Jvb2xlYW59IGV2ZW50c0VuYWJsZWQ9dHJ1ZVxuICAgKi9cbiAgZXZlbnRzRW5hYmxlZDogdHJ1ZSxcblxuICAvKipcbiAgICogU2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdG8gYXV0b21hdGljYWxseSByZW1vdmUgdGhlIHBvcHBlciB3aGVuXG4gICAqIHlvdSBjYWxsIHRoZSBgZGVzdHJveWAgbWV0aG9kLlxuICAgKiBAcHJvcCB7Qm9vbGVhbn0gcmVtb3ZlT25EZXN0cm95PWZhbHNlXG4gICAqL1xuICByZW1vdmVPbkRlc3Ryb3k6IGZhbHNlLFxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayBjYWxsZWQgd2hlbiB0aGUgcG9wcGVyIGlzIGNyZWF0ZWQuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIGl0IGlzIHNldCB0byBuby1vcC48YnIgLz5cbiAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICogQHByb3Age29uQ3JlYXRlfVxuICAgKi9cbiAgb25DcmVhdGU6IGZ1bmN0aW9uIG9uQ3JlYXRlKCkge30sXG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIGNhbGxlZCB3aGVuIHRoZSBwb3BwZXIgaXMgdXBkYXRlZC4gVGhpcyBjYWxsYmFjayBpcyBub3QgY2FsbGVkXG4gICAqIG9uIHRoZSBpbml0aWFsaXphdGlvbi9jcmVhdGlvbiBvZiB0aGUgcG9wcGVyLCBidXQgb25seSBvbiBzdWJzZXF1ZW50XG4gICAqIHVwZGF0ZXMuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIGl0IGlzIHNldCB0byBuby1vcC48YnIgLz5cbiAgICogQWNjZXNzIFBvcHBlci5qcyBpbnN0YW5jZSB3aXRoIGBkYXRhLmluc3RhbmNlYC5cbiAgICogQHByb3Age29uVXBkYXRlfVxuICAgKi9cbiAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKCkge30sXG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbW9kaWZpZXJzIHVzZWQgdG8gbW9kaWZ5IHRoZSBvZmZzZXRzIGJlZm9yZSB0aGV5IGFyZSBhcHBsaWVkIHRvIHRoZSBwb3BwZXIuXG4gICAqIFRoZXkgcHJvdmlkZSBtb3N0IG9mIHRoZSBmdW5jdGlvbmFsaXRpZXMgb2YgUG9wcGVyLmpzLlxuICAgKiBAcHJvcCB7bW9kaWZpZXJzfVxuICAgKi9cbiAgbW9kaWZpZXJzOiBtb2RpZmllcnNcbn07XG5cbi8qKlxuICogQGNhbGxiYWNrIG9uQ3JlYXRlXG4gKiBAcGFyYW0ge2RhdGFPYmplY3R9IGRhdGFcbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBvblVwZGF0ZVxuICogQHBhcmFtIHtkYXRhT2JqZWN0fSBkYXRhXG4gKi9cblxuLy8gVXRpbHNcbi8vIE1ldGhvZHNcbnZhciBQb3BwZXIgPSBmdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IFBvcHBlci5qcyBpbnN0YW5jZS5cbiAgICogQGNsYXNzIFBvcHBlclxuICAgKiBAcGFyYW0ge0VsZW1lbnR8cmVmZXJlbmNlT2JqZWN0fSByZWZlcmVuY2UgLSBUaGUgcmVmZXJlbmNlIGVsZW1lbnQgdXNlZCB0byBwb3NpdGlvbiB0aGUgcG9wcGVyXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gcG9wcGVyIC0gVGhlIEhUTUwgLyBYTUwgZWxlbWVudCB1c2VkIGFzIHRoZSBwb3BwZXJcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBZb3VyIGN1c3RvbSBvcHRpb25zIHRvIG92ZXJyaWRlIHRoZSBvbmVzIGRlZmluZWQgaW4gW0RlZmF1bHRzXSgjZGVmYXVsdHMpXG4gICAqIEByZXR1cm4ge09iamVjdH0gaW5zdGFuY2UgLSBUaGUgZ2VuZXJhdGVkIFBvcHBlci5qcyBpbnN0YW5jZVxuICAgKi9cbiAgZnVuY3Rpb24gUG9wcGVyKHJlZmVyZW5jZSwgcG9wcGVyKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBQb3BwZXIpO1xuXG4gICAgdGhpcy5zY2hlZHVsZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoX3RoaXMudXBkYXRlKTtcbiAgICB9O1xuXG4gICAgLy8gbWFrZSB1cGRhdGUoKSBkZWJvdW5jZWQsIHNvIHRoYXQgaXQgb25seSBydW5zIGF0IG1vc3Qgb25jZS1wZXItdGlja1xuICAgIHRoaXMudXBkYXRlID0gZGVib3VuY2UodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XG5cbiAgICAvLyB3aXRoIHt9IHdlIGNyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgb3B0aW9ucyBpbnNpZGUgaXRcbiAgICB0aGlzLm9wdGlvbnMgPSBfZXh0ZW5kcyh7fSwgUG9wcGVyLkRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgIC8vIGluaXQgc3RhdGVcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaXNEZXN0cm95ZWQ6IGZhbHNlLFxuICAgICAgaXNDcmVhdGVkOiBmYWxzZSxcbiAgICAgIHNjcm9sbFBhcmVudHM6IFtdXG4gICAgfTtcblxuICAgIC8vIGdldCByZWZlcmVuY2UgYW5kIHBvcHBlciBlbGVtZW50cyAoYWxsb3cgalF1ZXJ5IHdyYXBwZXJzKVxuICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlICYmIHJlZmVyZW5jZS5qcXVlcnkgPyByZWZlcmVuY2VbMF0gOiByZWZlcmVuY2U7XG4gICAgdGhpcy5wb3BwZXIgPSBwb3BwZXIgJiYgcG9wcGVyLmpxdWVyeSA/IHBvcHBlclswXSA6IHBvcHBlcjtcblxuICAgIC8vIERlZXAgbWVyZ2UgbW9kaWZpZXJzIG9wdGlvbnNcbiAgICB0aGlzLm9wdGlvbnMubW9kaWZpZXJzID0ge307XG4gICAgT2JqZWN0LmtleXMoX2V4dGVuZHMoe30sIFBvcHBlci5EZWZhdWx0cy5tb2RpZmllcnMsIG9wdGlvbnMubW9kaWZpZXJzKSkuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgICAgX3RoaXMub3B0aW9ucy5tb2RpZmllcnNbbmFtZV0gPSBfZXh0ZW5kcyh7fSwgUG9wcGVyLkRlZmF1bHRzLm1vZGlmaWVyc1tuYW1lXSB8fCB7fSwgb3B0aW9ucy5tb2RpZmllcnMgPyBvcHRpb25zLm1vZGlmaWVyc1tuYW1lXSA6IHt9KTtcbiAgICB9KTtcblxuICAgIC8vIFJlZmFjdG9yaW5nIG1vZGlmaWVycycgbGlzdCAoT2JqZWN0ID0+IEFycmF5KVxuICAgIHRoaXMubW9kaWZpZXJzID0gT2JqZWN0LmtleXModGhpcy5vcHRpb25zLm1vZGlmaWVycykubWFwKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBuYW1lOiBuYW1lXG4gICAgICB9LCBfdGhpcy5vcHRpb25zLm1vZGlmaWVyc1tuYW1lXSk7XG4gICAgfSlcbiAgICAvLyBzb3J0IHRoZSBtb2RpZmllcnMgYnkgb3JkZXJcbiAgICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xuICAgIH0pO1xuXG4gICAgLy8gbW9kaWZpZXJzIGhhdmUgdGhlIGFiaWxpdHkgdG8gZXhlY3V0ZSBhcmJpdHJhcnkgY29kZSB3aGVuIFBvcHBlci5qcyBnZXQgaW5pdGVkXG4gICAgLy8gc3VjaCBjb2RlIGlzIGV4ZWN1dGVkIGluIHRoZSBzYW1lIG9yZGVyIG9mIGl0cyBtb2RpZmllclxuICAgIC8vIHRoZXkgY291bGQgYWRkIG5ldyBwcm9wZXJ0aWVzIHRvIHRoZWlyIG9wdGlvbnMgY29uZmlndXJhdGlvblxuICAgIC8vIEJFIEFXQVJFOiBkb24ndCBhZGQgb3B0aW9ucyB0byBgb3B0aW9ucy5tb2RpZmllcnMubmFtZWAgYnV0IHRvIGBtb2RpZmllck9wdGlvbnNgIVxuICAgIHRoaXMubW9kaWZpZXJzLmZvckVhY2goZnVuY3Rpb24gKG1vZGlmaWVyT3B0aW9ucykge1xuICAgICAgaWYgKG1vZGlmaWVyT3B0aW9ucy5lbmFibGVkICYmIGlzRnVuY3Rpb24obW9kaWZpZXJPcHRpb25zLm9uTG9hZCkpIHtcbiAgICAgICAgbW9kaWZpZXJPcHRpb25zLm9uTG9hZChfdGhpcy5yZWZlcmVuY2UsIF90aGlzLnBvcHBlciwgX3RoaXMub3B0aW9ucywgbW9kaWZpZXJPcHRpb25zLCBfdGhpcy5zdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBmaXJlIHRoZSBmaXJzdCB1cGRhdGUgdG8gcG9zaXRpb24gdGhlIHBvcHBlciBpbiB0aGUgcmlnaHQgcGxhY2VcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gICAgdmFyIGV2ZW50c0VuYWJsZWQgPSB0aGlzLm9wdGlvbnMuZXZlbnRzRW5hYmxlZDtcbiAgICBpZiAoZXZlbnRzRW5hYmxlZCkge1xuICAgICAgLy8gc2V0dXAgZXZlbnQgbGlzdGVuZXJzLCB0aGV5IHdpbGwgdGFrZSBjYXJlIG9mIHVwZGF0ZSB0aGUgcG9zaXRpb24gaW4gc3BlY2lmaWMgc2l0dWF0aW9uc1xuICAgICAgdGhpcy5lbmFibGVFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUuZXZlbnRzRW5hYmxlZCA9IGV2ZW50c0VuYWJsZWQ7XG4gIH1cblxuICAvLyBXZSBjYW4ndCB1c2UgY2xhc3MgcHJvcGVydGllcyBiZWNhdXNlIHRoZXkgZG9uJ3QgZ2V0IGxpc3RlZCBpbiB0aGVcbiAgLy8gY2xhc3MgcHJvdG90eXBlIGFuZCBicmVhayBzdHVmZiBsaWtlIFNpbm9uIHN0dWJzXG5cblxuICBjcmVhdGVDbGFzcyhQb3BwZXIsIFt7XG4gICAga2V5OiAndXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlJCQxKCkge1xuICAgICAgcmV0dXJuIHVwZGF0ZS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBkZXN0cm95JCQxKCkge1xuICAgICAgcmV0dXJuIGRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmFibGVFdmVudExpc3RlbmVycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZUV2ZW50TGlzdGVuZXJzJCQxKCkge1xuICAgICAgcmV0dXJuIGVuYWJsZUV2ZW50TGlzdGVuZXJzLmNhbGwodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGlzYWJsZUV2ZW50TGlzdGVuZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZUV2ZW50TGlzdGVuZXJzJCQxKCkge1xuICAgICAgcmV0dXJuIGRpc2FibGVFdmVudExpc3RlbmVycy5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNjaGVkdWxlcyBhbiB1cGRhdGUuIEl0IHdpbGwgcnVuIG9uIHRoZSBuZXh0IFVJIHVwZGF0ZSBhdmFpbGFibGUuXG4gICAgICogQG1ldGhvZCBzY2hlZHVsZVVwZGF0ZVxuICAgICAqIEBtZW1iZXJvZiBQb3BwZXJcbiAgICAgKi9cblxuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiB1dGlsaXRpZXMgdXNlZnVsIHdoZW4gd3JpdGluZyBjdXN0b20gbW9kaWZpZXJzLlxuICAgICAqIFN0YXJ0aW5nIGZyb20gdmVyc2lvbiAxLjcsIHRoaXMgbWV0aG9kIGlzIGF2YWlsYWJsZSBvbmx5IGlmIHlvdVxuICAgICAqIGluY2x1ZGUgYHBvcHBlci11dGlscy5qc2AgYmVmb3JlIGBwb3BwZXIuanNgLlxuICAgICAqXG4gICAgICogKipERVBSRUNBVElPTioqOiBUaGlzIHdheSB0byBhY2Nlc3MgUG9wcGVyVXRpbHMgaXMgZGVwcmVjYXRlZFxuICAgICAqIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdjIhIFVzZSB0aGUgUG9wcGVyVXRpbHMgbW9kdWxlIGRpcmVjdGx5IGluc3RlYWQuXG4gICAgICogRHVlIHRvIHRoZSBoaWdoIGluc3RhYmlsaXR5IG9mIHRoZSBtZXRob2RzIGNvbnRhaW5lZCBpbiBVdGlscywgd2UgY2FuJ3RcbiAgICAgKiBndWFyYW50ZWUgdGhlbSB0byBmb2xsb3cgc2VtdmVyLiBVc2UgdGhlbSBhdCB5b3VyIG93biByaXNrIVxuICAgICAqIEBzdGF0aWNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjhcbiAgICAgKiBAbWVtYmVyIFV0aWxzXG4gICAgICogQG1lbWJlcm9mIFBvcHBlclxuICAgICAqL1xuXG4gIH1dKTtcbiAgcmV0dXJuIFBvcHBlcjtcbn0oKTtcblxuLyoqXG4gKiBUaGUgYHJlZmVyZW5jZU9iamVjdGAgaXMgYW4gb2JqZWN0IHRoYXQgcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGNvbXBhdGlibGUgd2l0aCBQb3BwZXIuanNcbiAqIGFuZCBsZXRzIHlvdSB1c2UgaXQgYXMgcmVwbGFjZW1lbnQgb2YgYSByZWFsIERPTSBub2RlLjxiciAvPlxuICogWW91IGNhbiB1c2UgdGhpcyBtZXRob2QgdG8gcG9zaXRpb24gYSBwb3BwZXIgcmVsYXRpdmVseSB0byBhIHNldCBvZiBjb29yZGluYXRlc1xuICogaW4gY2FzZSB5b3UgZG9uJ3QgaGF2ZSBhIERPTSBub2RlIHRvIHVzZSBhcyByZWZlcmVuY2UuXG4gKlxuICogYGBgXG4gKiBuZXcgUG9wcGVyKHJlZmVyZW5jZU9iamVjdCwgcG9wcGVyTm9kZSk7XG4gKiBgYGBcbiAqXG4gKiBOQjogVGhpcyBmZWF0dXJlIGlzbid0IHN1cHBvcnRlZCBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMC5cbiAqIEBuYW1lIHJlZmVyZW5jZU9iamVjdFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZGF0YS5nZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgc2V0IG9mIGNvb3JkaW5hdGVzIGNvbXBhdGlibGUgd2l0aCB0aGUgbmF0aXZlIGBnZXRCb3VuZGluZ0NsaWVudFJlY3RgIG1ldGhvZC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBkYXRhLmNsaWVudFdpZHRoXG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIHdpZHRoIG9mIHRoZSB2aXJ0dWFsIHJlZmVyZW5jZSBlbGVtZW50LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGRhdGEuY2xpZW50SGVpZ2h0XG4gKiBBbiBFUzYgZ2V0dGVyIHRoYXQgd2lsbCByZXR1cm4gdGhlIGhlaWdodCBvZiB0aGUgdmlydHVhbCByZWZlcmVuY2UgZWxlbWVudC5cbiAqL1xuXG5cblBvcHBlci5VdGlscyA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCkuUG9wcGVyVXRpbHM7XG5Qb3BwZXIucGxhY2VtZW50cyA9IHBsYWNlbWVudHM7XG5Qb3BwZXIuRGVmYXVsdHMgPSBEZWZhdWx0cztcblxuZXhwb3J0IGRlZmF1bHQgUG9wcGVyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9wcGVyLmpzLm1hcFxuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5cbi8vIEFuaW1hdGlvbiBmcmFtZSBiYXNlZCBpbXBsZW1lbnRhdGlvbiBvZiBzZXRUaW1lb3V0LlxuLy8gSW5zcGlyZWQgYnkgSm9lIExhbWJlcnQsIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2pvZWxhbWJlcnQvMTAwMjExNiNmaWxlLXJlcXVlc3R0aW1lb3V0LWpzXG52YXIgaGFzTmF0aXZlUGVyZm9ybWFuY2VOb3cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbic7XG52YXIgbm93ID0gaGFzTmF0aXZlUGVyZm9ybWFuY2VOb3cgPyBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBEYXRlLm5vdygpO1xufTtcbmZ1bmN0aW9uIGNhbmNlbFRpbWVvdXQodGltZW91dElEKSB7XG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRpbWVvdXRJRC5pZCk7XG59XG5mdW5jdGlvbiByZXF1ZXN0VGltZW91dChjYWxsYmFjaywgZGVsYXkpIHtcbiAgdmFyIHN0YXJ0ID0gbm93KCk7XG5cbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBpZiAobm93KCkgLSBzdGFydCA+PSBkZWxheSkge1xuICAgICAgY2FsbGJhY2suY2FsbChudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dElELmlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0aW1lb3V0SUQgPSB7XG4gICAgaWQ6IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKVxuICB9O1xuICByZXR1cm4gdGltZW91dElEO1xufVxuXG52YXIgc2l6ZSA9IC0xOyAvLyBUaGlzIHV0aWxpdHkgY29waWVkIGZyb20gXCJkb20taGVscGVyc1wiIHBhY2thZ2UuXG5cbmZ1bmN0aW9uIGdldFNjcm9sbGJhclNpemUocmVjYWxjdWxhdGUpIHtcbiAgaWYgKHJlY2FsY3VsYXRlID09PSB2b2lkIDApIHtcbiAgICByZWNhbGN1bGF0ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHNpemUgPT09IC0xIHx8IHJlY2FsY3VsYXRlKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBzdHlsZSA9IGRpdi5zdHlsZTtcbiAgICBzdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgICBzdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gICAgc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgc2l6ZSA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XG4gIH1cblxuICByZXR1cm4gc2l6ZTtcbn1cbnZhciBjYWNoZWRSVExSZXN1bHQgPSBudWxsOyAvLyBUUklDS1kgQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzY3JvbGxMZWZ0IHNob3VsZCBiZSBuZWdhdGl2ZSBmb3IgUlRMIGFsaWduZWQgZWxlbWVudHMuXG4vLyBDaHJvbWUgZG9lcyBub3Qgc2VlbSB0byBhZGhlcmU7IGl0cyBzY3JvbGxMZWZ0IHZhbHVlcyBhcmUgcG9zaXRpdmUgKG1lYXN1cmVkIHJlbGF0aXZlIHRvIHRoZSBsZWZ0KS5cbi8vIFNhZmFyaSdzIGVsYXN0aWMgYm91bmNlIG1ha2VzIGRldGVjdGluZyB0aGlzIGV2ZW4gbW9yZSBjb21wbGljYXRlZCB3cnQgcG90ZW50aWFsIGZhbHNlIHBvc2l0aXZlcy5cbi8vIFRoZSBzYWZlc3Qgd2F5IHRvIGNoZWNrIHRoaXMgaXMgdG8gaW50ZW50aW9uYWxseSBzZXQgYSBuZWdhdGl2ZSBvZmZzZXQsXG4vLyBhbmQgdGhlbiB2ZXJpZnkgdGhhdCB0aGUgc3Vic2VxdWVudCBcInNjcm9sbFwiIGV2ZW50IG1hdGNoZXMgdGhlIG5lZ2F0aXZlIG9mZnNldC5cbi8vIElmIGl0IGRvZXMgbm90IG1hdGNoLCB0aGVuIHdlIGNhbiBhc3N1bWUgYSBub24tc3RhbmRhcmQgUlRMIHNjcm9sbCBpbXBsZW1lbnRhdGlvbi5cblxuZnVuY3Rpb24gZ2V0UlRMT2Zmc2V0VHlwZShyZWNhbGN1bGF0ZSkge1xuICBpZiAocmVjYWxjdWxhdGUgPT09IHZvaWQgMCkge1xuICAgIHJlY2FsY3VsYXRlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoY2FjaGVkUlRMUmVzdWx0ID09PSBudWxsIHx8IHJlY2FsY3VsYXRlKSB7XG4gICAgdmFyIG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIG91dGVyU3R5bGUgPSBvdXRlckRpdi5zdHlsZTtcbiAgICBvdXRlclN0eWxlLndpZHRoID0gJzUwcHgnO1xuICAgIG91dGVyU3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICAgIG91dGVyU3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICBvdXRlclN0eWxlLmRpcmVjdGlvbiA9ICdydGwnO1xuICAgIHZhciBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBpbm5lclN0eWxlID0gaW5uZXJEaXYuc3R5bGU7XG4gICAgaW5uZXJTdHlsZS53aWR0aCA9ICcxMDBweCc7XG4gICAgaW5uZXJTdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyRGl2KTtcblxuICAgIGlmIChvdXRlckRpdi5zY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgY2FjaGVkUlRMUmVzdWx0ID0gJ3Bvc2l0aXZlLWRlc2NlbmRpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRlckRpdi5zY3JvbGxMZWZ0ID0gMTtcblxuICAgICAgaWYgKG91dGVyRGl2LnNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgICAgY2FjaGVkUlRMUmVzdWx0ID0gJ25lZ2F0aXZlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlZFJUTFJlc3VsdCA9ICdwb3NpdGl2ZS1hc2NlbmRpbmcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXJEaXYpO1xuICAgIHJldHVybiBjYWNoZWRSVExSZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkUlRMUmVzdWx0O1xufVxuXG52YXIgSVNfU0NST0xMSU5HX0RFQk9VTkNFX0lOVEVSVkFMID0gMTUwO1xuXG52YXIgZGVmYXVsdEl0ZW1LZXkgPSBmdW5jdGlvbiBkZWZhdWx0SXRlbUtleShfcmVmKSB7XG4gIHZhciBjb2x1bW5JbmRleCA9IF9yZWYuY29sdW1uSW5kZXgsXG4gICAgICBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgcm93SW5kZXggPSBfcmVmLnJvd0luZGV4O1xuICByZXR1cm4gcm93SW5kZXggKyBcIjpcIiArIGNvbHVtbkluZGV4O1xufTsgLy8gSW4gREVWIG1vZGUsIHRoaXMgU2V0IGhlbHBzIHVzIG9ubHkgbG9nIGEgd2FybmluZyBvbmNlIHBlciBjb21wb25lbnQgaW5zdGFuY2UuXG4vLyBUaGlzIGF2b2lkcyBzcGFtbWluZyB0aGUgY29uc29sZSBldmVyeSB0aW1lIGEgcmVuZGVyIGhhcHBlbnMuXG5cblxudmFyIGRldldhcm5pbmdzT3ZlcnNjYW5Db3VudCA9IG51bGw7XG52YXIgZGV2V2FybmluZ3NPdmVyc2NhblJvd3NDb2x1bW5zQ291bnQgPSBudWxsO1xudmFyIGRldldhcm5pbmdzVGFnTmFtZSA9IG51bGw7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LldlYWtTZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGV2V2FybmluZ3NPdmVyc2NhbkNvdW50ID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgbmV3IFdlYWtTZXQoKTtcbiAgICBkZXZXYXJuaW5nc092ZXJzY2FuUm93c0NvbHVtbnNDb3VudCA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIG5ldyBXZWFrU2V0KCk7XG4gICAgZGV2V2FybmluZ3NUYWdOYW1lID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgbmV3IFdlYWtTZXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkQ29tcG9uZW50KF9yZWYyKSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBnZXRDb2x1bW5PZmZzZXQgPSBfcmVmMi5nZXRDb2x1bW5PZmZzZXQsXG4gICAgICBnZXRDb2x1bW5TdGFydEluZGV4Rm9yT2Zmc2V0ID0gX3JlZjIuZ2V0Q29sdW1uU3RhcnRJbmRleEZvck9mZnNldCxcbiAgICAgIGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXggPSBfcmVmMi5nZXRDb2x1bW5TdG9wSW5kZXhGb3JTdGFydEluZGV4LFxuICAgICAgZ2V0Q29sdW1uV2lkdGggPSBfcmVmMi5nZXRDb2x1bW5XaWR0aCxcbiAgICAgIGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0ID0gX3JlZjIuZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQsXG4gICAgICBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoID0gX3JlZjIuZ2V0RXN0aW1hdGVkVG90YWxXaWR0aCxcbiAgICAgIGdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudCA9IF9yZWYyLmdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudCxcbiAgICAgIGdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudCA9IF9yZWYyLmdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudCxcbiAgICAgIGdldFJvd0hlaWdodCA9IF9yZWYyLmdldFJvd0hlaWdodCxcbiAgICAgIGdldFJvd09mZnNldCA9IF9yZWYyLmdldFJvd09mZnNldCxcbiAgICAgIGdldFJvd1N0YXJ0SW5kZXhGb3JPZmZzZXQgPSBfcmVmMi5nZXRSb3dTdGFydEluZGV4Rm9yT2Zmc2V0LFxuICAgICAgZ2V0Um93U3RvcEluZGV4Rm9yU3RhcnRJbmRleCA9IF9yZWYyLmdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXgsXG4gICAgICBpbml0SW5zdGFuY2VQcm9wcyA9IF9yZWYyLmluaXRJbnN0YW5jZVByb3BzLFxuICAgICAgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZSA9IF9yZWYyLnNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UsXG4gICAgICB2YWxpZGF0ZVByb3BzID0gX3JlZjIudmFsaWRhdGVQcm9wcztcbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHNMb29zZShHcmlkLCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgICAvLyBBbHdheXMgdXNlIGV4cGxpY2l0IGNvbnN0cnVjdG9yIGZvciBSZWFjdCBjb21wb25lbnRzLlxuICAgIC8vIEl0IHByb2R1Y2VzIGxlc3MgY29kZSBhZnRlciB0cmFuc3BpbGF0aW9uLiAoIzI2KVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gR3JpZChwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfdGhpcyA9IF9QdXJlQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICBfdGhpcy5faW5zdGFuY2VQcm9wcyA9IGluaXRJbnN0YW5jZVByb3BzKF90aGlzLnByb3BzLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCA9IG51bGw7XG4gICAgICBfdGhpcy5fb3V0ZXJSZWYgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgaW5zdGFuY2U6IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLFxuICAgICAgICBpc1Njcm9sbGluZzogZmFsc2UsXG4gICAgICAgIGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb246ICdmb3J3YXJkJyxcbiAgICAgICAgc2Nyb2xsTGVmdDogdHlwZW9mIF90aGlzLnByb3BzLmluaXRpYWxTY3JvbGxMZWZ0ID09PSAnbnVtYmVyJyA/IF90aGlzLnByb3BzLmluaXRpYWxTY3JvbGxMZWZ0IDogMCxcbiAgICAgICAgc2Nyb2xsVG9wOiB0eXBlb2YgX3RoaXMucHJvcHMuaW5pdGlhbFNjcm9sbFRvcCA9PT0gJ251bWJlcicgPyBfdGhpcy5wcm9wcy5pbml0aWFsU2Nyb2xsVG9wIDogMCxcbiAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiBmYWxzZSxcbiAgICAgICAgdmVydGljYWxTY3JvbGxEaXJlY3Rpb246ICdmb3J3YXJkJ1xuICAgICAgfTtcbiAgICAgIF90aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkID0gdm9pZCAwO1xuICAgICAgX3RoaXMuX2NhbGxPbkl0ZW1zUmVuZGVyZWQgPSBtZW1vaXplT25lKGZ1bmN0aW9uIChvdmVyc2NhbkNvbHVtblN0YXJ0SW5kZXgsIG92ZXJzY2FuQ29sdW1uU3RvcEluZGV4LCBvdmVyc2NhblJvd1N0YXJ0SW5kZXgsIG92ZXJzY2FuUm93U3RvcEluZGV4LCB2aXNpYmxlQ29sdW1uU3RhcnRJbmRleCwgdmlzaWJsZUNvbHVtblN0b3BJbmRleCwgdmlzaWJsZVJvd1N0YXJ0SW5kZXgsIHZpc2libGVSb3dTdG9wSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uSXRlbXNSZW5kZXJlZCh7XG4gICAgICAgICAgb3ZlcnNjYW5Db2x1bW5TdGFydEluZGV4OiBvdmVyc2NhbkNvbHVtblN0YXJ0SW5kZXgsXG4gICAgICAgICAgb3ZlcnNjYW5Db2x1bW5TdG9wSW5kZXg6IG92ZXJzY2FuQ29sdW1uU3RvcEluZGV4LFxuICAgICAgICAgIG92ZXJzY2FuUm93U3RhcnRJbmRleDogb3ZlcnNjYW5Sb3dTdGFydEluZGV4LFxuICAgICAgICAgIG92ZXJzY2FuUm93U3RvcEluZGV4OiBvdmVyc2NhblJvd1N0b3BJbmRleCxcbiAgICAgICAgICB2aXNpYmxlQ29sdW1uU3RhcnRJbmRleDogdmlzaWJsZUNvbHVtblN0YXJ0SW5kZXgsXG4gICAgICAgICAgdmlzaWJsZUNvbHVtblN0b3BJbmRleDogdmlzaWJsZUNvbHVtblN0b3BJbmRleCxcbiAgICAgICAgICB2aXNpYmxlUm93U3RhcnRJbmRleDogdmlzaWJsZVJvd1N0YXJ0SW5kZXgsXG4gICAgICAgICAgdmlzaWJsZVJvd1N0b3BJbmRleDogdmlzaWJsZVJvd1N0b3BJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuX2NhbGxPblNjcm9sbCA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9jYWxsT25TY3JvbGwgPSBtZW1vaXplT25lKGZ1bmN0aW9uIChzY3JvbGxMZWZ0LCBzY3JvbGxUb3AsIGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24sIHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uLCBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uU2Nyb2xsKHtcbiAgICAgICAgICBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uOiBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uLFxuICAgICAgICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgICAgICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3AsXG4gICAgICAgICAgdmVydGljYWxTY3JvbGxEaXJlY3Rpb246IHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uLFxuICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlID0gdm9pZCAwO1xuXG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlID0gZnVuY3Rpb24gKHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvbHVtbldpZHRoID0gX3RoaXMkcHJvcHMuY29sdW1uV2lkdGgsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRwcm9wcy5kaXJlY3Rpb24sXG4gICAgICAgICAgICByb3dIZWlnaHQgPSBfdGhpcyRwcm9wcy5yb3dIZWlnaHQ7XG5cbiAgICAgICAgdmFyIGl0ZW1TdHlsZUNhY2hlID0gX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlKHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgY29sdW1uV2lkdGgsIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgZGlyZWN0aW9uLCBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlICYmIHJvd0hlaWdodCk7XG5cbiAgICAgICAgdmFyIGtleSA9IHJvd0luZGV4ICsgXCI6XCIgKyBjb2x1bW5JbmRleDtcbiAgICAgICAgdmFyIHN0eWxlO1xuXG4gICAgICAgIGlmIChpdGVtU3R5bGVDYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgc3R5bGUgPSBpdGVtU3R5bGVDYWNoZVtrZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfb2Zmc2V0ID0gZ2V0Q29sdW1uT2Zmc2V0KF90aGlzLnByb3BzLCBjb2x1bW5JbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpO1xuXG4gICAgICAgICAgdmFyIGlzUnRsID0gZGlyZWN0aW9uID09PSAncnRsJztcbiAgICAgICAgICBpdGVtU3R5bGVDYWNoZVtrZXldID0gc3R5bGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6IGlzUnRsID8gdW5kZWZpbmVkIDogX29mZnNldCxcbiAgICAgICAgICAgIHJpZ2h0OiBpc1J0bCA/IF9vZmZzZXQgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0b3A6IGdldFJvd09mZnNldChfdGhpcy5wcm9wcywgcm93SW5kZXgsIF90aGlzLl9pbnN0YW5jZVByb3BzKSxcbiAgICAgICAgICAgIGhlaWdodDogZ2V0Um93SGVpZ2h0KF90aGlzLnByb3BzLCByb3dJbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpLFxuICAgICAgICAgICAgd2lkdGg6IGdldENvbHVtbldpZHRoKF90aGlzLnByb3BzLCBjb2x1bW5JbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZSA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZSA9IG1lbW9pemVPbmUoZnVuY3Rpb24gKF8sIF9fLCBfX18pIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLl9vblNjcm9sbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX2V2ZW50JGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgICAgY2xpZW50SGVpZ2h0ID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgY2xpZW50V2lkdGggPSBfZXZlbnQkY3VycmVudFRhcmdldC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIHNjcm9sbExlZnQgPSBfZXZlbnQkY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsVG9wID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgc2Nyb2xsV2lkdGggPSBfZXZlbnQkY3VycmVudFRhcmdldC5zY3JvbGxXaWR0aDtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgaWYgKHByZXZTdGF0ZS5zY3JvbGxMZWZ0ID09PSBzY3JvbGxMZWZ0ICYmIHByZXZTdGF0ZS5zY3JvbGxUb3AgPT09IHNjcm9sbFRvcCkge1xuICAgICAgICAgICAgLy8gU2Nyb2xsIHBvc2l0aW9uIG1heSBoYXZlIGJlZW4gdXBkYXRlZCBieSBjRE0vY0RVLFxuICAgICAgICAgICAgLy8gSW4gd2hpY2ggY2FzZSB3ZSBkb24ndCBuZWVkIHRvIHRyaWdnZXIgYW5vdGhlciByZW5kZXIsXG4gICAgICAgICAgICAvLyBBbmQgd2UgZG9uJ3Qgd2FudCB0byB1cGRhdGUgc3RhdGUuaXNTY3JvbGxpbmcuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gX3RoaXMucHJvcHMuZGlyZWN0aW9uOyAvLyBUUklDS1kgQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzY3JvbGxMZWZ0IHNob3VsZCBiZSBuZWdhdGl2ZSBmb3IgUlRMIGFsaWduZWQgZWxlbWVudHMuXG4gICAgICAgICAgLy8gVGhpcyBpcyBub3QgdGhlIGNhc2UgZm9yIGFsbCBicm93c2VycyB0aG91Z2ggKGUuZy4gQ2hyb21lIHJlcG9ydHMgdmFsdWVzIGFzIHBvc2l0aXZlLCBtZWFzdXJlZCByZWxhdGl2ZSB0byB0aGUgbGVmdCkuXG4gICAgICAgICAgLy8gSXQncyBhbHNvIGVhc2llciBmb3IgdGhpcyBjb21wb25lbnQgaWYgd2UgY29udmVydCBvZmZzZXRzIHRvIHRoZSBzYW1lIGZvcm1hdCBhcyB0aGV5IHdvdWxkIGJlIGluIGZvciBsdHIuXG4gICAgICAgICAgLy8gU28gdGhlIHNpbXBsZXN0IHNvbHV0aW9uIGlzIHRvIGRldGVybWluZSB3aGljaCBicm93c2VyIGJlaGF2aW9yIHdlJ3JlIGRlYWxpbmcgd2l0aCwgYW5kIGNvbnZlcnQgYmFzZWQgb24gaXQuXG5cbiAgICAgICAgICB2YXIgY2FsY3VsYXRlZFNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZ2V0UlRMT2Zmc2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ25lZ2F0aXZlJzpcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVkU2Nyb2xsTGVmdCA9IC1zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ3Bvc2l0aXZlLWRlc2NlbmRpbmcnOlxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRTY3JvbGxMZWZ0ID0gc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCAtIHNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBQcmV2ZW50IFNhZmFyaSdzIGVsYXN0aWMgc2Nyb2xsaW5nIGZyb20gY2F1c2luZyB2aXN1YWwgc2hha2luZyB3aGVuIHNjcm9sbGluZyBwYXN0IGJvdW5kcy5cblxuXG4gICAgICAgICAgY2FsY3VsYXRlZFNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihjYWxjdWxhdGVkU2Nyb2xsTGVmdCwgc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCkpO1xuICAgICAgICAgIHZhciBjYWxjdWxhdGVkU2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQpKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNTY3JvbGxpbmc6IHRydWUsXG4gICAgICAgICAgICBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uOiBwcmV2U3RhdGUuc2Nyb2xsTGVmdCA8IHNjcm9sbExlZnQgPyAnZm9yd2FyZCcgOiAnYmFja3dhcmQnLFxuICAgICAgICAgICAgc2Nyb2xsTGVmdDogY2FsY3VsYXRlZFNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxUb3A6IGNhbGN1bGF0ZWRTY3JvbGxUb3AsXG4gICAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbFRvcCA8IHNjcm9sbFRvcCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCcsXG4gICAgICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSwgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdEZWJvdW5jZWQpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuX291dGVyUmVmU2V0dGVyID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgICB2YXIgb3V0ZXJSZWYgPSBfdGhpcy5wcm9wcy5vdXRlclJlZjtcbiAgICAgICAgX3RoaXMuX291dGVyUmVmID0gcmVmO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3V0ZXJSZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvdXRlclJlZihyZWYpO1xuICAgICAgICB9IGVsc2UgaWYgKG91dGVyUmVmICE9IG51bGwgJiYgdHlwZW9mIG91dGVyUmVmID09PSAnb2JqZWN0JyAmJiBvdXRlclJlZi5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudCcpKSB7XG4gICAgICAgICAgb3V0ZXJSZWYuY3VycmVudCA9IHJlZjtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdEZWJvdW5jZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNhbmNlbFRpbWVvdXQoX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgPSByZXF1ZXN0VGltZW91dChfdGhpcy5fcmVzZXRJc1Njcm9sbGluZywgSVNfU0NST0xMSU5HX0RFQk9VTkNFX0lOVEVSVkFMKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCA9IG51bGw7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzU2Nyb2xsaW5nOiBmYWxzZVxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQ2xlYXIgc3R5bGUgY2FjaGUgYWZ0ZXIgc3RhdGUgdXBkYXRlIGhhcyBiZWVuIGNvbW1pdHRlZC5cbiAgICAgICAgICAvLyBUaGlzIHdheSB3ZSBkb24ndCBicmVhayBwdXJlIHNDVSBmb3IgaXRlbXMgdGhhdCBkb24ndCB1c2UgaXNTY3JvbGxpbmcgcGFyYW0uXG4gICAgICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlKC0xKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgR3JpZC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIHZhbGlkYXRlU2hhcmVkUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpO1xuICAgICAgdmFsaWRhdGVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHZhciBfcHJvdG8gPSBHcmlkLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5zY3JvbGxUbyA9IGZ1bmN0aW9uIHNjcm9sbFRvKF9yZWYzKSB7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IF9yZWYzLnNjcm9sbExlZnQsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3JlZjMuc2Nyb2xsVG9wO1xuXG4gICAgICBpZiAoc2Nyb2xsTGVmdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBzY3JvbGxMZWZ0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbFRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIHNjcm9sbFRvcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAoc2Nyb2xsTGVmdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHByZXZTdGF0ZS5zY3JvbGxMZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjcm9sbFRvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2Nyb2xsVG9wID0gcHJldlN0YXRlLnNjcm9sbFRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2U3RhdGUuc2Nyb2xsTGVmdCA9PT0gc2Nyb2xsTGVmdCAmJiBwcmV2U3RhdGUuc2Nyb2xsVG9wID09PSBzY3JvbGxUb3ApIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbExlZnQgPCBzY3JvbGxMZWZ0ID8gJ2ZvcndhcmQnIDogJ2JhY2t3YXJkJyxcbiAgICAgICAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogdHJ1ZSxcbiAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbFRvcCA8IHNjcm9sbFRvcCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCdcbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX3Jlc2V0SXNTY3JvbGxpbmdEZWJvdW5jZWQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2Nyb2xsVG9JdGVtID0gZnVuY3Rpb24gc2Nyb2xsVG9JdGVtKF9yZWY0KSB7XG4gICAgICB2YXIgX3JlZjQkYWxpZ24gPSBfcmVmNC5hbGlnbixcbiAgICAgICAgICBhbGlnbiA9IF9yZWY0JGFsaWduID09PSB2b2lkIDAgPyAnYXV0bycgOiBfcmVmNCRhbGlnbixcbiAgICAgICAgICBjb2x1bW5JbmRleCA9IF9yZWY0LmNvbHVtbkluZGV4LFxuICAgICAgICAgIHJvd0luZGV4ID0gX3JlZjQucm93SW5kZXg7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb2x1bW5Db3VudCA9IF90aGlzJHByb3BzMi5jb2x1bW5Db3VudCxcbiAgICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wczIuaGVpZ2h0LFxuICAgICAgICAgIHJvd0NvdW50ID0gX3RoaXMkcHJvcHMyLnJvd0NvdW50LFxuICAgICAgICAgIHdpZHRoID0gX3RoaXMkcHJvcHMyLndpZHRoO1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gX3RoaXMkc3RhdGUuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfdGhpcyRzdGF0ZS5zY3JvbGxUb3A7XG4gICAgICB2YXIgc2Nyb2xsYmFyU2l6ZSA9IGdldFNjcm9sbGJhclNpemUoKTtcblxuICAgICAgaWYgKGNvbHVtbkluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29sdW1uSW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihjb2x1bW5JbmRleCwgY29sdW1uQ291bnQgLSAxKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyb3dJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJvd0luZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocm93SW5kZXgsIHJvd0NvdW50IC0gMSkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZXN0aW1hdGVkVG90YWxIZWlnaHQgPSBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodCh0aGlzLnByb3BzLCB0aGlzLl9pbnN0YW5jZVByb3BzKTtcbiAgICAgIHZhciBlc3RpbWF0ZWRUb3RhbFdpZHRoID0gZ2V0RXN0aW1hdGVkVG90YWxXaWR0aCh0aGlzLnByb3BzLCB0aGlzLl9pbnN0YW5jZVByb3BzKTsgLy8gVGhlIHNjcm9sbGJhciBzaXplIHNob3VsZCBiZSBjb25zaWRlcmVkIHdoZW4gc2Nyb2xsaW5nIGFuIGl0ZW0gaW50byB2aWV3LFxuICAgICAgLy8gdG8gZW5zdXJlIGl0J3MgZnVsbHkgdmlzaWJsZS5cbiAgICAgIC8vIEJ1dCB3ZSBvbmx5IG5lZWQgdG8gYWNjb3VudCBmb3IgaXRzIHNpemUgd2hlbiBpdCdzIGFjdHVhbGx5IHZpc2libGUuXG5cbiAgICAgIHZhciBob3Jpem9udGFsU2Nyb2xsYmFyU2l6ZSA9IGVzdGltYXRlZFRvdGFsV2lkdGggPiB3aWR0aCA/IHNjcm9sbGJhclNpemUgOiAwO1xuICAgICAgdmFyIHZlcnRpY2FsU2Nyb2xsYmFyU2l6ZSA9IGVzdGltYXRlZFRvdGFsSGVpZ2h0ID4gaGVpZ2h0ID8gc2Nyb2xsYmFyU2l6ZSA6IDA7XG4gICAgICB0aGlzLnNjcm9sbFRvKHtcbiAgICAgICAgc2Nyb2xsTGVmdDogY29sdW1uSW5kZXggIT09IHVuZGVmaW5lZCA/IGdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudCh0aGlzLnByb3BzLCBjb2x1bW5JbmRleCwgYWxpZ24sIHNjcm9sbExlZnQsIHRoaXMuX2luc3RhbmNlUHJvcHMsIHZlcnRpY2FsU2Nyb2xsYmFyU2l6ZSkgOiBzY3JvbGxMZWZ0LFxuICAgICAgICBzY3JvbGxUb3A6IHJvd0luZGV4ICE9PSB1bmRlZmluZWQgPyBnZXRPZmZzZXRGb3JSb3dBbmRBbGlnbm1lbnQodGhpcy5wcm9wcywgcm93SW5kZXgsIGFsaWduLCBzY3JvbGxUb3AsIHRoaXMuX2luc3RhbmNlUHJvcHMsIGhvcml6b250YWxTY3JvbGxiYXJTaXplKSA6IHNjcm9sbFRvcFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaW5pdGlhbFNjcm9sbExlZnQgPSBfdGhpcyRwcm9wczMuaW5pdGlhbFNjcm9sbExlZnQsXG4gICAgICAgICAgaW5pdGlhbFNjcm9sbFRvcCA9IF90aGlzJHByb3BzMy5pbml0aWFsU2Nyb2xsVG9wO1xuXG4gICAgICBpZiAodGhpcy5fb3V0ZXJSZWYgIT0gbnVsbCkge1xuICAgICAgICB2YXIgb3V0ZXJSZWYgPSB0aGlzLl9vdXRlclJlZjtcblxuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxTY3JvbGxMZWZ0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBpbml0aWFsU2Nyb2xsTGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5pdGlhbFNjcm9sbFRvcCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBvdXRlclJlZi5zY3JvbGxUb3AgPSBpbml0aWFsU2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhbGxQcm9wc0NhbGxiYWNrcygpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IHRoaXMucHJvcHMuZGlyZWN0aW9uO1xuICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IF90aGlzJHN0YXRlMi5zY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbFRvcCA9IF90aGlzJHN0YXRlMi5zY3JvbGxUb3AsXG4gICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkID0gX3RoaXMkc3RhdGUyLnNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDtcblxuICAgICAgaWYgKHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCAmJiB0aGlzLl9vdXRlclJlZiAhPSBudWxsKSB7XG4gICAgICAgIC8vIFRSSUNLWSBBY2NvcmRpbmcgdG8gdGhlIHNwZWMsIHNjcm9sbExlZnQgc2hvdWxkIGJlIG5lZ2F0aXZlIGZvciBSVEwgYWxpZ25lZCBlbGVtZW50cy5cbiAgICAgICAgLy8gVGhpcyBpcyBub3QgdGhlIGNhc2UgZm9yIGFsbCBicm93c2VycyB0aG91Z2ggKGUuZy4gQ2hyb21lIHJlcG9ydHMgdmFsdWVzIGFzIHBvc2l0aXZlLCBtZWFzdXJlZCByZWxhdGl2ZSB0byB0aGUgbGVmdCkuXG4gICAgICAgIC8vIFNvIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGJyb3dzZXIgYmVoYXZpb3Igd2UncmUgZGVhbGluZyB3aXRoLCBhbmQgbWltaWMgaXQuXG4gICAgICAgIHZhciBvdXRlclJlZiA9IHRoaXMuX291dGVyUmVmO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAgICAgc3dpdGNoIChnZXRSVExPZmZzZXRUeXBlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ25lZ2F0aXZlJzpcbiAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IC1zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncG9zaXRpdmUtYXNjZW5kaW5nJzpcbiAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB2YXIgY2xpZW50V2lkdGggPSBvdXRlclJlZi5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgIHNjcm9sbFdpZHRoID0gb3V0ZXJSZWYuc2Nyb2xsV2lkdGg7XG4gICAgICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIC0gc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBzY3JvbGxMZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dGVyUmVmLnNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIHNjcm9sbFRvcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhbGxQcm9wc0NhbGxiYWNrcygpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkICE9PSBudWxsKSB7XG4gICAgICAgIGNhbmNlbFRpbWVvdXQodGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzNC5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczQuY2xhc3NOYW1lLFxuICAgICAgICAgIGNvbHVtbkNvdW50ID0gX3RoaXMkcHJvcHM0LmNvbHVtbkNvdW50LFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzNC5kaXJlY3Rpb24sXG4gICAgICAgICAgaGVpZ2h0ID0gX3RoaXMkcHJvcHM0LmhlaWdodCxcbiAgICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzNC5pbm5lclJlZixcbiAgICAgICAgICBpbm5lckVsZW1lbnRUeXBlID0gX3RoaXMkcHJvcHM0LmlubmVyRWxlbWVudFR5cGUsXG4gICAgICAgICAgaW5uZXJUYWdOYW1lID0gX3RoaXMkcHJvcHM0LmlubmVyVGFnTmFtZSxcbiAgICAgICAgICBpdGVtRGF0YSA9IF90aGlzJHByb3BzNC5pdGVtRGF0YSxcbiAgICAgICAgICBfdGhpcyRwcm9wczQkaXRlbUtleSA9IF90aGlzJHByb3BzNC5pdGVtS2V5LFxuICAgICAgICAgIGl0ZW1LZXkgPSBfdGhpcyRwcm9wczQkaXRlbUtleSA9PT0gdm9pZCAwID8gZGVmYXVsdEl0ZW1LZXkgOiBfdGhpcyRwcm9wczQkaXRlbUtleSxcbiAgICAgICAgICBvdXRlckVsZW1lbnRUeXBlID0gX3RoaXMkcHJvcHM0Lm91dGVyRWxlbWVudFR5cGUsXG4gICAgICAgICAgb3V0ZXJUYWdOYW1lID0gX3RoaXMkcHJvcHM0Lm91dGVyVGFnTmFtZSxcbiAgICAgICAgICByb3dDb3VudCA9IF90aGlzJHByb3BzNC5yb3dDb3VudCxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzNC5zdHlsZSxcbiAgICAgICAgICB1c2VJc1Njcm9sbGluZyA9IF90aGlzJHByb3BzNC51c2VJc1Njcm9sbGluZyxcbiAgICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzNC53aWR0aDtcbiAgICAgIHZhciBpc1Njcm9sbGluZyA9IHRoaXMuc3RhdGUuaXNTY3JvbGxpbmc7XG5cbiAgICAgIHZhciBfdGhpcyRfZ2V0SG9yaXpvbnRhbFIgPSB0aGlzLl9nZXRIb3Jpem9udGFsUmFuZ2VUb1JlbmRlcigpLFxuICAgICAgICAgIGNvbHVtblN0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0SG9yaXpvbnRhbFJbMF0sXG4gICAgICAgICAgY29sdW1uU3RvcEluZGV4ID0gX3RoaXMkX2dldEhvcml6b250YWxSWzFdO1xuXG4gICAgICB2YXIgX3RoaXMkX2dldFZlcnRpY2FsUmFuID0gdGhpcy5fZ2V0VmVydGljYWxSYW5nZVRvUmVuZGVyKCksXG4gICAgICAgICAgcm93U3RhcnRJbmRleCA9IF90aGlzJF9nZXRWZXJ0aWNhbFJhblswXSxcbiAgICAgICAgICByb3dTdG9wSW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW5bMV07XG5cbiAgICAgIHZhciBpdGVtcyA9IFtdO1xuXG4gICAgICBpZiAoY29sdW1uQ291bnQgPiAwICYmIHJvd0NvdW50KSB7XG4gICAgICAgIGZvciAodmFyIF9yb3dJbmRleCA9IHJvd1N0YXJ0SW5kZXg7IF9yb3dJbmRleCA8PSByb3dTdG9wSW5kZXg7IF9yb3dJbmRleCsrKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2NvbHVtbkluZGV4ID0gY29sdW1uU3RhcnRJbmRleDsgX2NvbHVtbkluZGV4IDw9IGNvbHVtblN0b3BJbmRleDsgX2NvbHVtbkluZGV4KyspIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goY3JlYXRlRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICAgICAgICBjb2x1bW5JbmRleDogX2NvbHVtbkluZGV4LFxuICAgICAgICAgICAgICBkYXRhOiBpdGVtRGF0YSxcbiAgICAgICAgICAgICAgaXNTY3JvbGxpbmc6IHVzZUlzU2Nyb2xsaW5nID8gaXNTY3JvbGxpbmcgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGtleTogaXRlbUtleSh7XG4gICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IF9jb2x1bW5JbmRleCxcbiAgICAgICAgICAgICAgICBkYXRhOiBpdGVtRGF0YSxcbiAgICAgICAgICAgICAgICByb3dJbmRleDogX3Jvd0luZGV4XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICByb3dJbmRleDogX3Jvd0luZGV4LFxuICAgICAgICAgICAgICBzdHlsZTogdGhpcy5fZ2V0SXRlbVN0eWxlKF9yb3dJbmRleCwgX2NvbHVtbkluZGV4KVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBSZWFkIHRoaXMgdmFsdWUgQUZURVIgaXRlbXMgaGF2ZSBiZWVuIGNyZWF0ZWQsXG4gICAgICAvLyBTbyB0aGVpciBhY3R1YWwgc2l6ZXMgKGlmIHZhcmlhYmxlKSBhcmUgdGFrZW4gaW50byBjb25zaWRlcmF0aW9uLlxuXG5cbiAgICAgIHZhciBlc3RpbWF0ZWRUb3RhbEhlaWdodCA9IGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0KHRoaXMucHJvcHMsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgdmFyIGVzdGltYXRlZFRvdGFsV2lkdGggPSBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoKHRoaXMucHJvcHMsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQob3V0ZXJFbGVtZW50VHlwZSB8fCBvdXRlclRhZ05hbWUgfHwgJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIG9uU2Nyb2xsOiB0aGlzLl9vblNjcm9sbCxcbiAgICAgICAgcmVmOiB0aGlzLl9vdXRlclJlZlNldHRlcixcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJyxcbiAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICB9LCBzdHlsZSlcbiAgICAgIH0sIGNyZWF0ZUVsZW1lbnQoaW5uZXJFbGVtZW50VHlwZSB8fCBpbm5lclRhZ05hbWUgfHwgJ2RpdicsIHtcbiAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogZXN0aW1hdGVkVG90YWxIZWlnaHQsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogaXNTY3JvbGxpbmcgPyAnbm9uZScgOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IGVzdGltYXRlZFRvdGFsV2lkdGhcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2NhbGxQcm9wc0NhbGxiYWNrcyA9IGZ1bmN0aW9uIF9jYWxsUHJvcHNDYWxsYmFja3MoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb2x1bW5Db3VudCA9IF90aGlzJHByb3BzNS5jb2x1bW5Db3VudCxcbiAgICAgICAgICBvbkl0ZW1zUmVuZGVyZWQgPSBfdGhpcyRwcm9wczUub25JdGVtc1JlbmRlcmVkLFxuICAgICAgICAgIG9uU2Nyb2xsID0gX3RoaXMkcHJvcHM1Lm9uU2Nyb2xsLFxuICAgICAgICAgIHJvd0NvdW50ID0gX3RoaXMkcHJvcHM1LnJvd0NvdW50O1xuXG4gICAgICBpZiAodHlwZW9mIG9uSXRlbXNSZW5kZXJlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoY29sdW1uQ291bnQgPiAwICYmIHJvd0NvdW50ID4gMCkge1xuICAgICAgICAgIHZhciBfdGhpcyRfZ2V0SG9yaXpvbnRhbFIyID0gdGhpcy5fZ2V0SG9yaXpvbnRhbFJhbmdlVG9SZW5kZXIoKSxcbiAgICAgICAgICAgICAgX292ZXJzY2FuQ29sdW1uU3RhcnRJbmRleCA9IF90aGlzJF9nZXRIb3Jpem9udGFsUjJbMF0sXG4gICAgICAgICAgICAgIF9vdmVyc2NhbkNvbHVtblN0b3BJbmRleCA9IF90aGlzJF9nZXRIb3Jpem9udGFsUjJbMV0sXG4gICAgICAgICAgICAgIF92aXNpYmxlQ29sdW1uU3RhcnRJbmRleCA9IF90aGlzJF9nZXRIb3Jpem9udGFsUjJbMl0sXG4gICAgICAgICAgICAgIF92aXNpYmxlQ29sdW1uU3RvcEluZGV4ID0gX3RoaXMkX2dldEhvcml6b250YWxSMlszXTtcblxuICAgICAgICAgIHZhciBfdGhpcyRfZ2V0VmVydGljYWxSYW4yID0gdGhpcy5fZ2V0VmVydGljYWxSYW5nZVRvUmVuZGVyKCksXG4gICAgICAgICAgICAgIF9vdmVyc2NhblJvd1N0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW4yWzBdLFxuICAgICAgICAgICAgICBfb3ZlcnNjYW5Sb3dTdG9wSW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW4yWzFdLFxuICAgICAgICAgICAgICBfdmlzaWJsZVJvd1N0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW4yWzJdLFxuICAgICAgICAgICAgICBfdmlzaWJsZVJvd1N0b3BJbmRleCA9IF90aGlzJF9nZXRWZXJ0aWNhbFJhbjJbM107XG5cbiAgICAgICAgICB0aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkKF9vdmVyc2NhbkNvbHVtblN0YXJ0SW5kZXgsIF9vdmVyc2NhbkNvbHVtblN0b3BJbmRleCwgX292ZXJzY2FuUm93U3RhcnRJbmRleCwgX292ZXJzY2FuUm93U3RvcEluZGV4LCBfdmlzaWJsZUNvbHVtblN0YXJ0SW5kZXgsIF92aXNpYmxlQ29sdW1uU3RvcEluZGV4LCBfdmlzaWJsZVJvd1N0YXJ0SW5kZXgsIF92aXNpYmxlUm93U3RvcEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9uU2Nyb2xsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBfdGhpcyRzdGF0ZTMgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgX2hvcml6b250YWxTY3JvbGxEaXJlY3Rpb24gPSBfdGhpcyRzdGF0ZTMuaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICAgIF9zY3JvbGxMZWZ0ID0gX3RoaXMkc3RhdGUzLnNjcm9sbExlZnQsXG4gICAgICAgICAgICBfc2Nyb2xsVG9wID0gX3RoaXMkc3RhdGUzLnNjcm9sbFRvcCxcbiAgICAgICAgICAgIF9zY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQgPSBfdGhpcyRzdGF0ZTMuc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkLFxuICAgICAgICAgICAgX3ZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uID0gX3RoaXMkc3RhdGUzLnZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uO1xuXG4gICAgICAgIHRoaXMuX2NhbGxPblNjcm9sbChfc2Nyb2xsTGVmdCwgX3Njcm9sbFRvcCwgX2hvcml6b250YWxTY3JvbGxEaXJlY3Rpb24sIF92ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiwgX3Njcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCk7XG4gICAgICB9XG4gICAgfTsgLy8gTGF6aWx5IGNyZWF0ZSBhbmQgY2FjaGUgaXRlbSBzdHlsZXMgd2hpbGUgc2Nyb2xsaW5nLFxuICAgIC8vIFNvIHRoYXQgcHVyZSBjb21wb25lbnQgc0NVIHdpbGwgcHJldmVudCByZS1yZW5kZXJzLlxuICAgIC8vIFdlIG1haW50YWluIHRoaXMgY2FjaGUsIGFuZCBwYXNzIGEgc3R5bGUgcHJvcCByYXRoZXIgdGhhbiBpbmRleCxcbiAgICAvLyBTbyB0aGF0IExpc3QgY2FuIGNsZWFyIGNhY2hlZCBzdHlsZXMgYW5kIGZvcmNlIGl0ZW0gcmUtcmVuZGVyIGlmIG5lY2Vzc2FyeS5cblxuXG4gICAgX3Byb3RvLl9nZXRIb3Jpem9udGFsUmFuZ2VUb1JlbmRlciA9IGZ1bmN0aW9uIF9nZXRIb3Jpem9udGFsUmFuZ2VUb1JlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbHVtbkNvdW50ID0gX3RoaXMkcHJvcHM2LmNvbHVtbkNvdW50LFxuICAgICAgICAgIG92ZXJzY2FuQ29sdW1uQ291bnQgPSBfdGhpcyRwcm9wczYub3ZlcnNjYW5Db2x1bW5Db3VudCxcbiAgICAgICAgICBvdmVyc2NhbkNvbHVtbnNDb3VudCA9IF90aGlzJHByb3BzNi5vdmVyc2NhbkNvbHVtbnNDb3VudCxcbiAgICAgICAgICBvdmVyc2NhbkNvdW50ID0gX3RoaXMkcHJvcHM2Lm92ZXJzY2FuQ291bnQsXG4gICAgICAgICAgcm93Q291bnQgPSBfdGhpcyRwcm9wczYucm93Q291bnQ7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU0ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uID0gX3RoaXMkc3RhdGU0Lmhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgaXNTY3JvbGxpbmcgPSBfdGhpcyRzdGF0ZTQuaXNTY3JvbGxpbmcsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IF90aGlzJHN0YXRlNC5zY3JvbGxMZWZ0O1xuICAgICAgdmFyIG92ZXJzY2FuQ291bnRSZXNvbHZlZCA9IG92ZXJzY2FuQ29sdW1uQ291bnQgfHwgb3ZlcnNjYW5Db2x1bW5zQ291bnQgfHwgb3ZlcnNjYW5Db3VudCB8fCAxO1xuXG4gICAgICBpZiAoY29sdW1uQ291bnQgPT09IDAgfHwgcm93Q291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwXTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0SW5kZXggPSBnZXRDb2x1bW5TdGFydEluZGV4Rm9yT2Zmc2V0KHRoaXMucHJvcHMsIHNjcm9sbExlZnQsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgdmFyIHN0b3BJbmRleCA9IGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXgodGhpcy5wcm9wcywgc3RhcnRJbmRleCwgc2Nyb2xsTGVmdCwgdGhpcy5faW5zdGFuY2VQcm9wcyk7IC8vIE92ZXJzY2FuIGJ5IG9uZSBpdGVtIGluIGVhY2ggZGlyZWN0aW9uIHNvIHRoYXQgdGFiL2ZvY3VzIHdvcmtzLlxuICAgICAgLy8gSWYgdGhlcmUgaXNuJ3QgYXQgbGVhc3Qgb25lIGV4dHJhIGl0ZW0sIHRhYiBsb29wcyBiYWNrIGFyb3VuZC5cblxuICAgICAgdmFyIG92ZXJzY2FuQmFja3dhcmQgPSAhaXNTY3JvbGxpbmcgfHwgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJyA/IE1hdGgubWF4KDEsIG92ZXJzY2FuQ291bnRSZXNvbHZlZCkgOiAxO1xuICAgICAgdmFyIG92ZXJzY2FuRm9yd2FyZCA9ICFpc1Njcm9sbGluZyB8fCBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uID09PSAnZm9yd2FyZCcgPyBNYXRoLm1heCgxLCBvdmVyc2NhbkNvdW50UmVzb2x2ZWQpIDogMTtcbiAgICAgIHJldHVybiBbTWF0aC5tYXgoMCwgc3RhcnRJbmRleCAtIG92ZXJzY2FuQmFja3dhcmQpLCBNYXRoLm1heCgwLCBNYXRoLm1pbihjb2x1bW5Db3VudCAtIDEsIHN0b3BJbmRleCArIG92ZXJzY2FuRm9yd2FyZCkpLCBzdGFydEluZGV4LCBzdG9wSW5kZXhdO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFZlcnRpY2FsUmFuZ2VUb1JlbmRlciA9IGZ1bmN0aW9uIF9nZXRWZXJ0aWNhbFJhbmdlVG9SZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb2x1bW5Db3VudCA9IF90aGlzJHByb3BzNy5jb2x1bW5Db3VudCxcbiAgICAgICAgICBvdmVyc2NhbkNvdW50ID0gX3RoaXMkcHJvcHM3Lm92ZXJzY2FuQ291bnQsXG4gICAgICAgICAgb3ZlcnNjYW5Sb3dDb3VudCA9IF90aGlzJHByb3BzNy5vdmVyc2NhblJvd0NvdW50LFxuICAgICAgICAgIG92ZXJzY2FuUm93c0NvdW50ID0gX3RoaXMkcHJvcHM3Lm92ZXJzY2FuUm93c0NvdW50LFxuICAgICAgICAgIHJvd0NvdW50ID0gX3RoaXMkcHJvcHM3LnJvd0NvdW50O1xuICAgICAgdmFyIF90aGlzJHN0YXRlNSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaXNTY3JvbGxpbmcgPSBfdGhpcyRzdGF0ZTUuaXNTY3JvbGxpbmcsXG4gICAgICAgICAgdmVydGljYWxTY3JvbGxEaXJlY3Rpb24gPSBfdGhpcyRzdGF0ZTUudmVydGljYWxTY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3RoaXMkc3RhdGU1LnNjcm9sbFRvcDtcbiAgICAgIHZhciBvdmVyc2NhbkNvdW50UmVzb2x2ZWQgPSBvdmVyc2NhblJvd0NvdW50IHx8IG92ZXJzY2FuUm93c0NvdW50IHx8IG92ZXJzY2FuQ291bnQgfHwgMTtcblxuICAgICAgaWYgKGNvbHVtbkNvdW50ID09PSAwIHx8IHJvd0NvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydEluZGV4ID0gZ2V0Um93U3RhcnRJbmRleEZvck9mZnNldCh0aGlzLnByb3BzLCBzY3JvbGxUb3AsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgdmFyIHN0b3BJbmRleCA9IGdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXgodGhpcy5wcm9wcywgc3RhcnRJbmRleCwgc2Nyb2xsVG9wLCB0aGlzLl9pbnN0YW5jZVByb3BzKTsgLy8gT3ZlcnNjYW4gYnkgb25lIGl0ZW0gaW4gZWFjaCBkaXJlY3Rpb24gc28gdGhhdCB0YWIvZm9jdXMgd29ya3MuXG4gICAgICAvLyBJZiB0aGVyZSBpc24ndCBhdCBsZWFzdCBvbmUgZXh0cmEgaXRlbSwgdGFiIGxvb3BzIGJhY2sgYXJvdW5kLlxuXG4gICAgICB2YXIgb3ZlcnNjYW5CYWNrd2FyZCA9ICFpc1Njcm9sbGluZyB8fCB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJyA/IE1hdGgubWF4KDEsIG92ZXJzY2FuQ291bnRSZXNvbHZlZCkgOiAxO1xuICAgICAgdmFyIG92ZXJzY2FuRm9yd2FyZCA9ICFpc1Njcm9sbGluZyB8fCB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnID8gTWF0aC5tYXgoMSwgb3ZlcnNjYW5Db3VudFJlc29sdmVkKSA6IDE7XG4gICAgICByZXR1cm4gW01hdGgubWF4KDAsIHN0YXJ0SW5kZXggLSBvdmVyc2NhbkJhY2t3YXJkKSwgTWF0aC5tYXgoMCwgTWF0aC5taW4ocm93Q291bnQgLSAxLCBzdG9wSW5kZXggKyBvdmVyc2NhbkZvcndhcmQpKSwgc3RhcnRJbmRleCwgc3RvcEluZGV4XTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEdyaWQ7XG4gIH0oUHVyZUNvbXBvbmVudCksIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICBpdGVtRGF0YTogdW5kZWZpbmVkLFxuICAgIHVzZUlzU2Nyb2xsaW5nOiBmYWxzZVxuICB9LCBfdGVtcDtcbn1cblxudmFyIHZhbGlkYXRlU2hhcmVkUHJvcHMgPSBmdW5jdGlvbiB2YWxpZGF0ZVNoYXJlZFByb3BzKF9yZWY1LCBfcmVmNikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNS5jaGlsZHJlbixcbiAgICAgIGRpcmVjdGlvbiA9IF9yZWY1LmRpcmVjdGlvbixcbiAgICAgIGhlaWdodCA9IF9yZWY1LmhlaWdodCxcbiAgICAgIGlubmVyVGFnTmFtZSA9IF9yZWY1LmlubmVyVGFnTmFtZSxcbiAgICAgIG91dGVyVGFnTmFtZSA9IF9yZWY1Lm91dGVyVGFnTmFtZSxcbiAgICAgIG92ZXJzY2FuQ29sdW1uc0NvdW50ID0gX3JlZjUub3ZlcnNjYW5Db2x1bW5zQ291bnQsXG4gICAgICBvdmVyc2NhbkNvdW50ID0gX3JlZjUub3ZlcnNjYW5Db3VudCxcbiAgICAgIG92ZXJzY2FuUm93c0NvdW50ID0gX3JlZjUub3ZlcnNjYW5Sb3dzQ291bnQsXG4gICAgICB3aWR0aCA9IF9yZWY1LndpZHRoO1xuICB2YXIgaW5zdGFuY2UgPSBfcmVmNi5pbnN0YW5jZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2Ygb3ZlcnNjYW5Db3VudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChkZXZXYXJuaW5nc092ZXJzY2FuQ291bnQgJiYgIWRldldhcm5pbmdzT3ZlcnNjYW5Db3VudC5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgIGRldldhcm5pbmdzT3ZlcnNjYW5Db3VudC5hZGQoaW5zdGFuY2UpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBvdmVyc2NhbkNvdW50IHByb3AgaGFzIGJlZW4gZGVwcmVjYXRlZC4gJyArICdQbGVhc2UgdXNlIHRoZSBvdmVyc2NhbkNvbHVtbkNvdW50IGFuZCBvdmVyc2NhblJvd0NvdW50IHByb3BzIGluc3RlYWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvdmVyc2NhbkNvbHVtbnNDb3VudCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIG92ZXJzY2FuUm93c0NvdW50ID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGRldldhcm5pbmdzT3ZlcnNjYW5Sb3dzQ29sdW1uc0NvdW50ICYmICFkZXZXYXJuaW5nc092ZXJzY2FuUm93c0NvbHVtbnNDb3VudC5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgIGRldldhcm5pbmdzT3ZlcnNjYW5Sb3dzQ29sdW1uc0NvdW50LmFkZChpbnN0YW5jZSk7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIG92ZXJzY2FuQ29sdW1uc0NvdW50IGFuZCBvdmVyc2NhblJvd3NDb3VudCBwcm9wcyBoYXZlIGJlZW4gZGVwcmVjYXRlZC4gJyArICdQbGVhc2UgdXNlIHRoZSBvdmVyc2NhbkNvbHVtbkNvdW50IGFuZCBvdmVyc2NhblJvd0NvdW50IHByb3BzIGluc3RlYWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlubmVyVGFnTmFtZSAhPSBudWxsIHx8IG91dGVyVGFnTmFtZSAhPSBudWxsKSB7XG4gICAgICBpZiAoZGV2V2FybmluZ3NUYWdOYW1lICYmICFkZXZXYXJuaW5nc1RhZ05hbWUuaGFzKGluc3RhbmNlKSkge1xuICAgICAgICBkZXZXYXJuaW5nc1RhZ05hbWUuYWRkKGluc3RhbmNlKTtcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgaW5uZXJUYWdOYW1lIGFuZCBvdXRlclRhZ05hbWUgcHJvcHMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQuICcgKyAnUGxlYXNlIHVzZSB0aGUgaW5uZXJFbGVtZW50VHlwZSBhbmQgb3V0ZXJFbGVtZW50VHlwZSBwcm9wcyBpbnN0ZWFkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcImNoaWxkcmVuXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgUmVhY3QgY29tcG9uZW50LiAnICsgKFwiXFxcIlwiICsgKGNoaWxkcmVuID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGNoaWxkcmVuKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2x0cic6XG4gICAgICBjYXNlICdydGwnOlxuICAgICAgICAvLyBWYWxpZCB2YWx1ZXNcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiZGlyZWN0aW9uXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGVpdGhlciBcImx0clwiIG9yIFwicnRsXCIuICcgKyAoXCJcXFwiXCIgKyBkaXJlY3Rpb24gKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcIndpZHRoXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnR3JpZHMgbXVzdCBzcGVjaWZ5IGEgbnVtYmVyIGZvciB3aWR0aC4gJyArIChcIlxcXCJcIiArICh3aWR0aCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB3aWR0aCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaGVpZ2h0ICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJoZWlnaHRcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdHcmlkcyBtdXN0IHNwZWNpZnkgYSBudW1iZXIgZm9yIGhlaWdodC4gJyArIChcIlxcXCJcIiArIChoZWlnaHQgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgaGVpZ2h0KSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgREVGQVVMVF9FU1RJTUFURURfSVRFTV9TSVpFID0gNTA7XG5cbnZhciBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodCA9IGZ1bmN0aW9uIGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0KF9yZWYsIF9yZWYyKSB7XG4gIHZhciByb3dDb3VudCA9IF9yZWYucm93Q291bnQ7XG4gIHZhciByb3dNZXRhZGF0YU1hcCA9IF9yZWYyLnJvd01ldGFkYXRhTWFwLFxuICAgICAgZXN0aW1hdGVkUm93SGVpZ2h0ID0gX3JlZjIuZXN0aW1hdGVkUm93SGVpZ2h0LFxuICAgICAgbGFzdE1lYXN1cmVkUm93SW5kZXggPSBfcmVmMi5sYXN0TWVhc3VyZWRSb3dJbmRleDtcbiAgdmFyIHRvdGFsU2l6ZU9mTWVhc3VyZWRSb3dzID0gMDsgLy8gRWRnZSBjYXNlIGNoZWNrIGZvciB3aGVuIHRoZSBudW1iZXIgb2YgaXRlbXMgZGVjcmVhc2VzIHdoaWxlIGEgc2Nyb2xsIGlzIGluIHByb2dyZXNzLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYnZhdWdobi9yZWFjdC13aW5kb3cvcHVsbC8xMzhcblxuICBpZiAobGFzdE1lYXN1cmVkUm93SW5kZXggPj0gcm93Q291bnQpIHtcbiAgICBsYXN0TWVhc3VyZWRSb3dJbmRleCA9IHJvd0NvdW50IC0gMTtcbiAgfVxuXG4gIGlmIChsYXN0TWVhc3VyZWRSb3dJbmRleCA+PSAwKSB7XG4gICAgdmFyIGl0ZW1NZXRhZGF0YSA9IHJvd01ldGFkYXRhTWFwW2xhc3RNZWFzdXJlZFJvd0luZGV4XTtcbiAgICB0b3RhbFNpemVPZk1lYXN1cmVkUm93cyA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgfVxuXG4gIHZhciBudW1Vbm1lYXN1cmVkSXRlbXMgPSByb3dDb3VudCAtIGxhc3RNZWFzdXJlZFJvd0luZGV4IC0gMTtcbiAgdmFyIHRvdGFsU2l6ZU9mVW5tZWFzdXJlZEl0ZW1zID0gbnVtVW5tZWFzdXJlZEl0ZW1zICogZXN0aW1hdGVkUm93SGVpZ2h0O1xuICByZXR1cm4gdG90YWxTaXplT2ZNZWFzdXJlZFJvd3MgKyB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcztcbn07XG5cbnZhciBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoID0gZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxXaWR0aChfcmVmMywgX3JlZjQpIHtcbiAgdmFyIGNvbHVtbkNvdW50ID0gX3JlZjMuY29sdW1uQ291bnQ7XG4gIHZhciBjb2x1bW5NZXRhZGF0YU1hcCA9IF9yZWY0LmNvbHVtbk1ldGFkYXRhTWFwLFxuICAgICAgZXN0aW1hdGVkQ29sdW1uV2lkdGggPSBfcmVmNC5lc3RpbWF0ZWRDb2x1bW5XaWR0aCxcbiAgICAgIGxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID0gX3JlZjQubGFzdE1lYXN1cmVkQ29sdW1uSW5kZXg7XG4gIHZhciB0b3RhbFNpemVPZk1lYXN1cmVkUm93cyA9IDA7IC8vIEVkZ2UgY2FzZSBjaGVjayBmb3Igd2hlbiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGRlY3JlYXNlcyB3aGlsZSBhIHNjcm9sbCBpcyBpbiBwcm9ncmVzcy5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2J2YXVnaG4vcmVhY3Qtd2luZG93L3B1bGwvMTM4XG5cbiAgaWYgKGxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID49IGNvbHVtbkNvdW50KSB7XG4gICAgbGFzdE1lYXN1cmVkQ29sdW1uSW5kZXggPSBjb2x1bW5Db3VudCAtIDE7XG4gIH1cblxuICBpZiAobGFzdE1lYXN1cmVkQ29sdW1uSW5kZXggPj0gMCkge1xuICAgIHZhciBpdGVtTWV0YWRhdGEgPSBjb2x1bW5NZXRhZGF0YU1hcFtsYXN0TWVhc3VyZWRDb2x1bW5JbmRleF07XG4gICAgdG90YWxTaXplT2ZNZWFzdXJlZFJvd3MgPSBpdGVtTWV0YWRhdGEub2Zmc2V0ICsgaXRlbU1ldGFkYXRhLnNpemU7XG4gIH1cblxuICB2YXIgbnVtVW5tZWFzdXJlZEl0ZW1zID0gY29sdW1uQ291bnQgLSBsYXN0TWVhc3VyZWRDb2x1bW5JbmRleCAtIDE7XG4gIHZhciB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcyA9IG51bVVubWVhc3VyZWRJdGVtcyAqIGVzdGltYXRlZENvbHVtbldpZHRoO1xuICByZXR1cm4gdG90YWxTaXplT2ZNZWFzdXJlZFJvd3MgKyB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcztcbn07XG5cbnZhciBnZXRJdGVtTWV0YWRhdGEgPSBmdW5jdGlvbiBnZXRJdGVtTWV0YWRhdGEoaXRlbVR5cGUsIHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICB2YXIgaXRlbU1ldGFkYXRhTWFwLCBpdGVtU2l6ZSwgbGFzdE1lYXN1cmVkSW5kZXg7XG5cbiAgaWYgKGl0ZW1UeXBlID09PSAnY29sdW1uJykge1xuICAgIGl0ZW1NZXRhZGF0YU1hcCA9IGluc3RhbmNlUHJvcHMuY29sdW1uTWV0YWRhdGFNYXA7XG4gICAgaXRlbVNpemUgPSBwcm9wcy5jb2x1bW5XaWR0aDtcbiAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkQ29sdW1uSW5kZXg7XG4gIH0gZWxzZSB7XG4gICAgaXRlbU1ldGFkYXRhTWFwID0gaW5zdGFuY2VQcm9wcy5yb3dNZXRhZGF0YU1hcDtcbiAgICBpdGVtU2l6ZSA9IHByb3BzLnJvd0hlaWdodDtcbiAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkUm93SW5kZXg7XG4gIH1cblxuICBpZiAoaW5kZXggPiBsYXN0TWVhc3VyZWRJbmRleCkge1xuICAgIHZhciBvZmZzZXQgPSAwO1xuXG4gICAgaWYgKGxhc3RNZWFzdXJlZEluZGV4ID49IDApIHtcbiAgICAgIHZhciBpdGVtTWV0YWRhdGEgPSBpdGVtTWV0YWRhdGFNYXBbbGFzdE1lYXN1cmVkSW5kZXhdO1xuICAgICAgb2Zmc2V0ID0gaXRlbU1ldGFkYXRhLm9mZnNldCArIGl0ZW1NZXRhZGF0YS5zaXplO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSBsYXN0TWVhc3VyZWRJbmRleCArIDE7IGkgPD0gaW5kZXg7IGkrKykge1xuICAgICAgdmFyIHNpemUgPSBpdGVtU2l6ZShpKTtcbiAgICAgIGl0ZW1NZXRhZGF0YU1hcFtpXSA9IHtcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIHNpemU6IHNpemVcbiAgICAgIH07XG4gICAgICBvZmZzZXQgKz0gc2l6ZTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbVR5cGUgPT09ICdjb2x1bW4nKSB7XG4gICAgICBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID0gaW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkUm93SW5kZXggPSBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXRlbU1ldGFkYXRhTWFwW2luZGV4XTtcbn07XG5cbnZhciBmaW5kTmVhcmVzdEl0ZW0gPSBmdW5jdGlvbiBmaW5kTmVhcmVzdEl0ZW0oaXRlbVR5cGUsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBvZmZzZXQpIHtcbiAgdmFyIGl0ZW1NZXRhZGF0YU1hcCwgbGFzdE1lYXN1cmVkSW5kZXg7XG5cbiAgaWYgKGl0ZW1UeXBlID09PSAnY29sdW1uJykge1xuICAgIGl0ZW1NZXRhZGF0YU1hcCA9IGluc3RhbmNlUHJvcHMuY29sdW1uTWV0YWRhdGFNYXA7XG4gICAgbGFzdE1lYXN1cmVkSW5kZXggPSBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZENvbHVtbkluZGV4O1xuICB9IGVsc2Uge1xuICAgIGl0ZW1NZXRhZGF0YU1hcCA9IGluc3RhbmNlUHJvcHMucm93TWV0YWRhdGFNYXA7XG4gICAgbGFzdE1lYXN1cmVkSW5kZXggPSBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZFJvd0luZGV4O1xuICB9XG5cbiAgdmFyIGxhc3RNZWFzdXJlZEl0ZW1PZmZzZXQgPSBsYXN0TWVhc3VyZWRJbmRleCA+IDAgPyBpdGVtTWV0YWRhdGFNYXBbbGFzdE1lYXN1cmVkSW5kZXhdLm9mZnNldCA6IDA7XG5cbiAgaWYgKGxhc3RNZWFzdXJlZEl0ZW1PZmZzZXQgPj0gb2Zmc2V0KSB7XG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBtZWFzdXJlZCBpdGVtcyB3aXRoaW4gdGhpcyByYW5nZSBqdXN0IHVzZSBhIGJpbmFyeSBzZWFyY2ggYXMgaXQncyBmYXN0ZXIuXG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbUJpbmFyeVNlYXJjaChpdGVtVHlwZSwgcHJvcHMsIGluc3RhbmNlUHJvcHMsIGxhc3RNZWFzdXJlZEluZGV4LCAwLCBvZmZzZXQpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHdlIGhhdmVuJ3QgeWV0IG1lYXN1cmVkIHRoaXMgaGlnaCwgZmFsbGJhY2sgdG8gYW4gZXhwb25lbnRpYWwgc2VhcmNoIHdpdGggYW4gaW5uZXIgYmluYXJ5IHNlYXJjaC5cbiAgICAvLyBUaGUgZXhwb25lbnRpYWwgc2VhcmNoIGF2b2lkcyBwcmUtY29tcHV0aW5nIHNpemVzIGZvciB0aGUgZnVsbCBzZXQgb2YgaXRlbXMgYXMgYSBiaW5hcnkgc2VhcmNoIHdvdWxkLlxuICAgIC8vIFRoZSBvdmVyYWxsIGNvbXBsZXhpdHkgZm9yIHRoaXMgYXBwcm9hY2ggaXMgTyhsb2cgbikuXG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbUV4cG9uZW50aWFsU2VhcmNoKGl0ZW1UeXBlLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgTWF0aC5tYXgoMCwgbGFzdE1lYXN1cmVkSW5kZXgpLCBvZmZzZXQpO1xuICB9XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoID0gZnVuY3Rpb24gZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoKGl0ZW1UeXBlLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgaGlnaCwgbG93LCBvZmZzZXQpIHtcbiAgd2hpbGUgKGxvdyA8PSBoaWdoKSB7XG4gICAgdmFyIG1pZGRsZSA9IGxvdyArIE1hdGguZmxvb3IoKGhpZ2ggLSBsb3cpIC8gMik7XG4gICAgdmFyIGN1cnJlbnRPZmZzZXQgPSBnZXRJdGVtTWV0YWRhdGEoaXRlbVR5cGUsIHByb3BzLCBtaWRkbGUsIGluc3RhbmNlUHJvcHMpLm9mZnNldDtcblxuICAgIGlmIChjdXJyZW50T2Zmc2V0ID09PSBvZmZzZXQpIHtcbiAgICAgIHJldHVybiBtaWRkbGU7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50T2Zmc2V0IDwgb2Zmc2V0KSB7XG4gICAgICBsb3cgPSBtaWRkbGUgKyAxO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudE9mZnNldCA+IG9mZnNldCkge1xuICAgICAgaGlnaCA9IG1pZGRsZSAtIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxvdyA+IDApIHtcbiAgICByZXR1cm4gbG93IC0gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufTtcblxudmFyIGZpbmROZWFyZXN0SXRlbUV4cG9uZW50aWFsU2VhcmNoID0gZnVuY3Rpb24gZmluZE5lYXJlc3RJdGVtRXhwb25lbnRpYWxTZWFyY2goaXRlbVR5cGUsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBpbmRleCwgb2Zmc2V0KSB7XG4gIHZhciBpdGVtQ291bnQgPSBpdGVtVHlwZSA9PT0gJ2NvbHVtbicgPyBwcm9wcy5jb2x1bW5Db3VudCA6IHByb3BzLnJvd0NvdW50O1xuICB2YXIgaW50ZXJ2YWwgPSAxO1xuXG4gIHdoaWxlIChpbmRleCA8IGl0ZW1Db3VudCAmJiBnZXRJdGVtTWV0YWRhdGEoaXRlbVR5cGUsIHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykub2Zmc2V0IDwgb2Zmc2V0KSB7XG4gICAgaW5kZXggKz0gaW50ZXJ2YWw7XG4gICAgaW50ZXJ2YWwgKj0gMjtcbiAgfVxuXG4gIHJldHVybiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2goaXRlbVR5cGUsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBNYXRoLm1pbihpbmRleCwgaXRlbUNvdW50IC0gMSksIE1hdGguZmxvb3IoaW5kZXggLyAyKSwgb2Zmc2V0KTtcbn07XG5cbnZhciBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudCA9IGZ1bmN0aW9uIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KGl0ZW1UeXBlLCBwcm9wcywgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMsIHNjcm9sbGJhclNpemUpIHtcbiAgdmFyIHNpemUgPSBpdGVtVHlwZSA9PT0gJ2NvbHVtbicgPyBwcm9wcy53aWR0aCA6IHByb3BzLmhlaWdodDtcbiAgdmFyIGl0ZW1NZXRhZGF0YSA9IGdldEl0ZW1NZXRhZGF0YShpdGVtVHlwZSwgcHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKTsgLy8gR2V0IGVzdGltYXRlZCB0b3RhbCBzaXplIGFmdGVyIEl0ZW1NZXRhZGF0YSBpcyBjb21wdXRlZCxcbiAgLy8gVG8gZW5zdXJlIGl0IHJlZmxlY3RzIGFjdHVhbCBtZWFzdXJlbWVudHMgaW5zdGVhZCBvZiBqdXN0IGVzdGltYXRlcy5cblxuICB2YXIgZXN0aW1hdGVkVG90YWxTaXplID0gaXRlbVR5cGUgPT09ICdjb2x1bW4nID8gZ2V0RXN0aW1hdGVkVG90YWxXaWR0aChwcm9wcywgaW5zdGFuY2VQcm9wcykgOiBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodChwcm9wcywgaW5zdGFuY2VQcm9wcyk7XG4gIHZhciBtYXhPZmZzZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihlc3RpbWF0ZWRUb3RhbFNpemUgLSBzaXplLCBpdGVtTWV0YWRhdGEub2Zmc2V0KSk7XG4gIHZhciBtaW5PZmZzZXQgPSBNYXRoLm1heCgwLCBpdGVtTWV0YWRhdGEub2Zmc2V0IC0gc2l6ZSArIHNjcm9sbGJhclNpemUgKyBpdGVtTWV0YWRhdGEuc2l6ZSk7XG5cbiAgaWYgKGFsaWduID09PSAnc21hcnQnKSB7XG4gICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgLSBzaXplICYmIHNjcm9sbE9mZnNldCA8PSBtYXhPZmZzZXQgKyBzaXplKSB7XG4gICAgICBhbGlnbiA9ICdhdXRvJztcbiAgICB9IGVsc2Uge1xuICAgICAgYWxpZ24gPSAnY2VudGVyJztcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgY2FzZSAnc3RhcnQnOlxuICAgICAgcmV0dXJuIG1heE9mZnNldDtcblxuICAgIGNhc2UgJ2VuZCc6XG4gICAgICByZXR1cm4gbWluT2Zmc2V0O1xuXG4gICAgY2FzZSAnY2VudGVyJzpcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKG1pbk9mZnNldCArIChtYXhPZmZzZXQgLSBtaW5PZmZzZXQpIC8gMik7XG5cbiAgICBjYXNlICdhdXRvJzpcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgJiYgc2Nyb2xsT2Zmc2V0IDw9IG1heE9mZnNldCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsT2Zmc2V0O1xuICAgICAgfSBlbHNlIGlmIChtaW5PZmZzZXQgPiBtYXhPZmZzZXQpIHtcbiAgICAgICAgLy8gQmVjYXVzZSB3ZSBvbmx5IHRha2UgaW50byBhY2NvdW50IHRoZSBzY3JvbGxiYXIgc2l6ZSB3aGVuIGNhbGN1bGF0aW5nIG1pbk9mZnNldFxuICAgICAgICAvLyB0aGlzIHZhbHVlIGNhbiBiZSBsYXJnZXIgdGhhbiBtYXhPZmZzZXQgd2hlbiBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG4gICAgICB9IGVsc2UgaWYgKHNjcm9sbE9mZnNldCA8IG1pbk9mZnNldCkge1xuICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1heE9mZnNldDtcbiAgICAgIH1cblxuICB9XG59O1xuXG52YXIgVmFyaWFibGVTaXplR3JpZCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVHcmlkQ29tcG9uZW50KHtcbiAgZ2V0Q29sdW1uT2Zmc2V0OiBmdW5jdGlvbiBnZXRDb2x1bW5PZmZzZXQocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGdldEl0ZW1NZXRhZGF0YSgnY29sdW1uJywgcHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKS5vZmZzZXQ7XG4gIH0sXG4gIGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQ6IGZ1bmN0aW9uIGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQocHJvcHMsIHNjcm9sbExlZnQsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gZmluZE5lYXJlc3RJdGVtKCdjb2x1bW4nLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgc2Nyb2xsTGVmdCk7XG4gIH0sXG4gIGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXg6IGZ1bmN0aW9uIGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXgocHJvcHMsIHN0YXJ0SW5kZXgsIHNjcm9sbExlZnQsIGluc3RhbmNlUHJvcHMpIHtcbiAgICB2YXIgY29sdW1uQ291bnQgPSBwcm9wcy5jb2x1bW5Db3VudCxcbiAgICAgICAgd2lkdGggPSBwcm9wcy53aWR0aDtcbiAgICB2YXIgaXRlbU1ldGFkYXRhID0gZ2V0SXRlbU1ldGFkYXRhKCdjb2x1bW4nLCBwcm9wcywgc3RhcnRJbmRleCwgaW5zdGFuY2VQcm9wcyk7XG4gICAgdmFyIG1heE9mZnNldCA9IHNjcm9sbExlZnQgKyB3aWR0aDtcbiAgICB2YXIgb2Zmc2V0ID0gaXRlbU1ldGFkYXRhLm9mZnNldCArIGl0ZW1NZXRhZGF0YS5zaXplO1xuICAgIHZhciBzdG9wSW5kZXggPSBzdGFydEluZGV4O1xuXG4gICAgd2hpbGUgKHN0b3BJbmRleCA8IGNvbHVtbkNvdW50IC0gMSAmJiBvZmZzZXQgPCBtYXhPZmZzZXQpIHtcbiAgICAgIHN0b3BJbmRleCsrO1xuICAgICAgb2Zmc2V0ICs9IGdldEl0ZW1NZXRhZGF0YSgnY29sdW1uJywgcHJvcHMsIHN0b3BJbmRleCwgaW5zdGFuY2VQcm9wcykuc2l6ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcEluZGV4O1xuICB9LFxuICBnZXRDb2x1bW5XaWR0aDogZnVuY3Rpb24gZ2V0Q29sdW1uV2lkdGgocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlUHJvcHMuY29sdW1uTWV0YWRhdGFNYXBbaW5kZXhdLnNpemU7XG4gIH0sXG4gIGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0OiBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodCxcbiAgZ2V0RXN0aW1hdGVkVG90YWxXaWR0aDogZ2V0RXN0aW1hdGVkVG90YWxXaWR0aCxcbiAgZ2V0T2Zmc2V0Rm9yQ29sdW1uQW5kQWxpZ25tZW50OiBmdW5jdGlvbiBnZXRPZmZzZXRGb3JDb2x1bW5BbmRBbGlnbm1lbnQocHJvcHMsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0LCBpbnN0YW5jZVByb3BzLCBzY3JvbGxiYXJTaXplKSB7XG4gICAgcmV0dXJuIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KCdjb2x1bW4nLCBwcm9wcywgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMsIHNjcm9sbGJhclNpemUpO1xuICB9LFxuICBnZXRPZmZzZXRGb3JSb3dBbmRBbGlnbm1lbnQ6IGZ1bmN0aW9uIGdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudChwcm9wcywgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMsIHNjcm9sbGJhclNpemUpIHtcbiAgICByZXR1cm4gZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQoJ3JvdycsIHByb3BzLCBpbmRleCwgYWxpZ24sIHNjcm9sbE9mZnNldCwgaW5zdGFuY2VQcm9wcywgc2Nyb2xsYmFyU2l6ZSk7XG4gIH0sXG4gIGdldFJvd09mZnNldDogZnVuY3Rpb24gZ2V0Um93T2Zmc2V0KHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHJldHVybiBnZXRJdGVtTWV0YWRhdGEoJ3JvdycsIHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykub2Zmc2V0O1xuICB9LFxuICBnZXRSb3dIZWlnaHQ6IGZ1bmN0aW9uIGdldFJvd0hlaWdodChwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VQcm9wcy5yb3dNZXRhZGF0YU1hcFtpbmRleF0uc2l6ZTtcbiAgfSxcbiAgZ2V0Um93U3RhcnRJbmRleEZvck9mZnNldDogZnVuY3Rpb24gZ2V0Um93U3RhcnRJbmRleEZvck9mZnNldChwcm9wcywgc2Nyb2xsVG9wLCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbSgncm93JywgcHJvcHMsIGluc3RhbmNlUHJvcHMsIHNjcm9sbFRvcCk7XG4gIH0sXG4gIGdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXg6IGZ1bmN0aW9uIGdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXgocHJvcHMsIHN0YXJ0SW5kZXgsIHNjcm9sbFRvcCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHZhciByb3dDb3VudCA9IHByb3BzLnJvd0NvdW50LFxuICAgICAgICBoZWlnaHQgPSBwcm9wcy5oZWlnaHQ7XG4gICAgdmFyIGl0ZW1NZXRhZGF0YSA9IGdldEl0ZW1NZXRhZGF0YSgncm93JywgcHJvcHMsIHN0YXJ0SW5kZXgsIGluc3RhbmNlUHJvcHMpO1xuICAgIHZhciBtYXhPZmZzZXQgPSBzY3JvbGxUb3AgKyBoZWlnaHQ7XG4gICAgdmFyIG9mZnNldCA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgICB2YXIgc3RvcEluZGV4ID0gc3RhcnRJbmRleDtcblxuICAgIHdoaWxlIChzdG9wSW5kZXggPCByb3dDb3VudCAtIDEgJiYgb2Zmc2V0IDwgbWF4T2Zmc2V0KSB7XG4gICAgICBzdG9wSW5kZXgrKztcbiAgICAgIG9mZnNldCArPSBnZXRJdGVtTWV0YWRhdGEoJ3JvdycsIHByb3BzLCBzdG9wSW5kZXgsIGluc3RhbmNlUHJvcHMpLnNpemU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3BJbmRleDtcbiAgfSxcbiAgaW5pdEluc3RhbmNlUHJvcHM6IGZ1bmN0aW9uIGluaXRJbnN0YW5jZVByb3BzKHByb3BzLCBpbnN0YW5jZSkge1xuICAgIHZhciBfcmVmNSA9IHByb3BzLFxuICAgICAgICBlc3RpbWF0ZWRDb2x1bW5XaWR0aCA9IF9yZWY1LmVzdGltYXRlZENvbHVtbldpZHRoLFxuICAgICAgICBlc3RpbWF0ZWRSb3dIZWlnaHQgPSBfcmVmNS5lc3RpbWF0ZWRSb3dIZWlnaHQ7XG4gICAgdmFyIGluc3RhbmNlUHJvcHMgPSB7XG4gICAgICBjb2x1bW5NZXRhZGF0YU1hcDoge30sXG4gICAgICBlc3RpbWF0ZWRDb2x1bW5XaWR0aDogZXN0aW1hdGVkQ29sdW1uV2lkdGggfHwgREVGQVVMVF9FU1RJTUFURURfSVRFTV9TSVpFLFxuICAgICAgZXN0aW1hdGVkUm93SGVpZ2h0OiBlc3RpbWF0ZWRSb3dIZWlnaHQgfHwgREVGQVVMVF9FU1RJTUFURURfSVRFTV9TSVpFLFxuICAgICAgbGFzdE1lYXN1cmVkQ29sdW1uSW5kZXg6IC0xLFxuICAgICAgbGFzdE1lYXN1cmVkUm93SW5kZXg6IC0xLFxuICAgICAgcm93TWV0YWRhdGFNYXA6IHt9XG4gICAgfTtcblxuICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJDb2x1bW5JbmRleCA9IGZ1bmN0aW9uIChjb2x1bW5JbmRleCwgc2hvdWxkRm9yY2VVcGRhdGUpIHtcbiAgICAgIGlmIChzaG91bGRGb3JjZVVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2UucmVzZXRBZnRlckluZGljZXMoe1xuICAgICAgICBjb2x1bW5JbmRleDogY29sdW1uSW5kZXgsXG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlOiBzaG91bGRGb3JjZVVwZGF0ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJSb3dJbmRleCA9IGZ1bmN0aW9uIChyb3dJbmRleCwgc2hvdWxkRm9yY2VVcGRhdGUpIHtcbiAgICAgIGlmIChzaG91bGRGb3JjZVVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2UucmVzZXRBZnRlckluZGljZXMoe1xuICAgICAgICByb3dJbmRleDogcm93SW5kZXgsXG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlOiBzaG91bGRGb3JjZVVwZGF0ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJJbmRpY2VzID0gZnVuY3Rpb24gKF9yZWY2KSB7XG4gICAgICB2YXIgY29sdW1uSW5kZXggPSBfcmVmNi5jb2x1bW5JbmRleCxcbiAgICAgICAgICByb3dJbmRleCA9IF9yZWY2LnJvd0luZGV4LFxuICAgICAgICAgIF9yZWY2JHNob3VsZEZvcmNlVXBkYSA9IF9yZWY2LnNob3VsZEZvcmNlVXBkYXRlLFxuICAgICAgICAgIHNob3VsZEZvcmNlVXBkYXRlID0gX3JlZjYkc2hvdWxkRm9yY2VVcGRhID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjYkc2hvdWxkRm9yY2VVcGRhO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbHVtbkluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID0gTWF0aC5taW4oaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRDb2x1bW5JbmRleCwgY29sdW1uSW5kZXggLSAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiByb3dJbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRSb3dJbmRleCA9IE1hdGgubWluKGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkUm93SW5kZXgsIHJvd0luZGV4IC0gMSk7XG4gICAgICB9IC8vIFdlIGNvdWxkIHBvdGVudGlhbGx5IG9wdGltaXplIGZ1cnRoZXIgYnkgb25seSBldmljdGluZyBzdHlsZXMgYWZ0ZXIgdGhpcyBpbmRleCxcbiAgICAgIC8vIEJ1dCBzaW5jZSBzdHlsZXMgYXJlIG9ubHkgY2FjaGVkIHdoaWxlIHNjcm9sbGluZyBpcyBpbiBwcm9ncmVzcy1cbiAgICAgIC8vIEl0IHNlZW1zIGFuIHVubmVjZXNzYXJ5IG9wdGltaXphdGlvbi5cbiAgICAgIC8vIEl0J3MgdW5saWtlbHkgdGhhdCByZXNldEFmdGVySW5kZXgoKSB3aWxsIGJlIGNhbGxlZCB3aGlsZSBhIHVzZXIgaXMgc2Nyb2xsaW5nLlxuXG5cbiAgICAgIGluc3RhbmNlLl9nZXRJdGVtU3R5bGVDYWNoZSgtMSk7XG5cbiAgICAgIGlmIChzaG91bGRGb3JjZVVwZGF0ZSkge1xuICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2VQcm9wcztcbiAgfSxcbiAgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZTogZmFsc2UsXG4gIHZhbGlkYXRlUHJvcHM6IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMoX3JlZjcpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmNy5jb2x1bW5XaWR0aCxcbiAgICAgICAgcm93SGVpZ2h0ID0gX3JlZjcucm93SGVpZ2h0O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgY29sdW1uV2lkdGggIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJjb2x1bW5XaWR0aFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIGZ1bmN0aW9uLiAnICsgKFwiXFxcIlwiICsgKGNvbHVtbldpZHRoID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGNvbHVtbldpZHRoKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiByb3dIZWlnaHQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJyb3dIZWlnaHRcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgYSBmdW5jdGlvbi4gJyArIChcIlxcXCJcIiArIChyb3dIZWlnaHQgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2Ygcm93SGVpZ2h0KSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxudmFyIElTX1NDUk9MTElOR19ERUJPVU5DRV9JTlRFUlZBTCQxID0gMTUwO1xuXG52YXIgZGVmYXVsdEl0ZW1LZXkkMSA9IGZ1bmN0aW9uIGRlZmF1bHRJdGVtS2V5KGluZGV4LCBkYXRhKSB7XG4gIHJldHVybiBpbmRleDtcbn07IC8vIEluIERFViBtb2RlLCB0aGlzIFNldCBoZWxwcyB1cyBvbmx5IGxvZyBhIHdhcm5pbmcgb25jZSBwZXIgY29tcG9uZW50IGluc3RhbmNlLlxuLy8gVGhpcyBhdm9pZHMgc3BhbW1pbmcgdGhlIGNvbnNvbGUgZXZlcnkgdGltZSBhIHJlbmRlciBoYXBwZW5zLlxuXG5cbnZhciBkZXZXYXJuaW5nc0RpcmVjdGlvbiA9IG51bGw7XG52YXIgZGV2V2FybmluZ3NUYWdOYW1lJDEgPSBudWxsO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5XZWFrU2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRldldhcm5pbmdzRGlyZWN0aW9uID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgbmV3IFdlYWtTZXQoKTtcbiAgICBkZXZXYXJuaW5nc1RhZ05hbWUkMSA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIG5ldyBXZWFrU2V0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdENvbXBvbmVudChfcmVmKSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBnZXRJdGVtT2Zmc2V0ID0gX3JlZi5nZXRJdGVtT2Zmc2V0LFxuICAgICAgZ2V0RXN0aW1hdGVkVG90YWxTaXplID0gX3JlZi5nZXRFc3RpbWF0ZWRUb3RhbFNpemUsXG4gICAgICBnZXRJdGVtU2l6ZSA9IF9yZWYuZ2V0SXRlbVNpemUsXG4gICAgICBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudCA9IF9yZWYuZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQsXG4gICAgICBnZXRTdGFydEluZGV4Rm9yT2Zmc2V0ID0gX3JlZi5nZXRTdGFydEluZGV4Rm9yT2Zmc2V0LFxuICAgICAgZ2V0U3RvcEluZGV4Rm9yU3RhcnRJbmRleCA9IF9yZWYuZ2V0U3RvcEluZGV4Rm9yU3RhcnRJbmRleCxcbiAgICAgIGluaXRJbnN0YW5jZVByb3BzID0gX3JlZi5pbml0SW5zdGFuY2VQcm9wcyxcbiAgICAgIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgPSBfcmVmLnNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UsXG4gICAgICB2YWxpZGF0ZVByb3BzID0gX3JlZi52YWxpZGF0ZVByb3BzO1xuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKExpc3QsIF9QdXJlQ29tcG9uZW50KTtcblxuICAgIC8vIEFsd2F5cyB1c2UgZXhwbGljaXQgY29uc3RydWN0b3IgZm9yIFJlYWN0IGNvbXBvbmVudHMuXG4gICAgLy8gSXQgcHJvZHVjZXMgbGVzcyBjb2RlIGFmdGVyIHRyYW5zcGlsYXRpb24uICgjMjYpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF90aGlzID0gX1B1cmVDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgIF90aGlzLl9pbnN0YW5jZVByb3BzID0gaW5pdEluc3RhbmNlUHJvcHMoX3RoaXMucHJvcHMsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICAgIF90aGlzLl9vdXRlclJlZiA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkID0gbnVsbDtcbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBpbnN0YW5jZTogX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksXG4gICAgICAgIGlzU2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsRGlyZWN0aW9uOiAnZm9yd2FyZCcsXG4gICAgICAgIHNjcm9sbE9mZnNldDogdHlwZW9mIF90aGlzLnByb3BzLmluaXRpYWxTY3JvbGxPZmZzZXQgPT09ICdudW1iZXInID8gX3RoaXMucHJvcHMuaW5pdGlhbFNjcm9sbE9mZnNldCA6IDAsXG4gICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogZmFsc2VcbiAgICAgIH07XG4gICAgICBfdGhpcy5fY2FsbE9uSXRlbXNSZW5kZXJlZCA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkID0gbWVtb2l6ZU9uZShmdW5jdGlvbiAob3ZlcnNjYW5TdGFydEluZGV4LCBvdmVyc2NhblN0b3BJbmRleCwgdmlzaWJsZVN0YXJ0SW5kZXgsIHZpc2libGVTdG9wSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uSXRlbXNSZW5kZXJlZCh7XG4gICAgICAgICAgb3ZlcnNjYW5TdGFydEluZGV4OiBvdmVyc2NhblN0YXJ0SW5kZXgsXG4gICAgICAgICAgb3ZlcnNjYW5TdG9wSW5kZXg6IG92ZXJzY2FuU3RvcEluZGV4LFxuICAgICAgICAgIHZpc2libGVTdGFydEluZGV4OiB2aXNpYmxlU3RhcnRJbmRleCxcbiAgICAgICAgICB2aXNpYmxlU3RvcEluZGV4OiB2aXNpYmxlU3RvcEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBfdGhpcy5fY2FsbE9uU2Nyb2xsID0gdm9pZCAwO1xuICAgICAgX3RoaXMuX2NhbGxPblNjcm9sbCA9IG1lbW9pemVPbmUoZnVuY3Rpb24gKHNjcm9sbERpcmVjdGlvbiwgc2Nyb2xsT2Zmc2V0LCBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uU2Nyb2xsKHtcbiAgICAgICAgICBzY3JvbGxEaXJlY3Rpb246IHNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICBzY3JvbGxPZmZzZXQ6IHNjcm9sbE9mZnNldCxcbiAgICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ6IHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZSA9IHZvaWQgMDtcblxuICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzLmRpcmVjdGlvbixcbiAgICAgICAgICAgIGl0ZW1TaXplID0gX3RoaXMkcHJvcHMuaXRlbVNpemUsXG4gICAgICAgICAgICBsYXlvdXQgPSBfdGhpcyRwcm9wcy5sYXlvdXQ7XG5cbiAgICAgICAgdmFyIGl0ZW1TdHlsZUNhY2hlID0gX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlKHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgaXRlbVNpemUsIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgbGF5b3V0LCBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlICYmIGRpcmVjdGlvbik7XG5cbiAgICAgICAgdmFyIHN0eWxlO1xuXG4gICAgICAgIGlmIChpdGVtU3R5bGVDYWNoZS5oYXNPd25Qcm9wZXJ0eShpbmRleCkpIHtcbiAgICAgICAgICBzdHlsZSA9IGl0ZW1TdHlsZUNhY2hlW2luZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX29mZnNldCA9IGdldEl0ZW1PZmZzZXQoX3RoaXMucHJvcHMsIGluZGV4LCBfdGhpcy5faW5zdGFuY2VQcm9wcyk7XG5cbiAgICAgICAgICB2YXIgc2l6ZSA9IGdldEl0ZW1TaXplKF90aGlzLnByb3BzLCBpbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgICAgICAgIHZhciBpc0hvcml6b250YWwgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICAgICAgICB2YXIgaXNSdGwgPSBkaXJlY3Rpb24gPT09ICdydGwnO1xuICAgICAgICAgIHZhciBvZmZzZXRIb3Jpem9udGFsID0gaXNIb3Jpem9udGFsID8gX29mZnNldCA6IDA7XG4gICAgICAgICAgaXRlbVN0eWxlQ2FjaGVbaW5kZXhdID0gc3R5bGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6IGlzUnRsID8gdW5kZWZpbmVkIDogb2Zmc2V0SG9yaXpvbnRhbCxcbiAgICAgICAgICAgIHJpZ2h0OiBpc1J0bCA/IG9mZnNldEhvcml6b250YWwgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0b3A6ICFpc0hvcml6b250YWwgPyBfb2Zmc2V0IDogMCxcbiAgICAgICAgICAgIGhlaWdodDogIWlzSG9yaXpvbnRhbCA/IHNpemUgOiAnMTAwJScsXG4gICAgICAgICAgICB3aWR0aDogaXNIb3Jpem9udGFsID8gc2l6ZSA6ICcxMDAlJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlQ2FjaGUgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlQ2FjaGUgPSBtZW1vaXplT25lKGZ1bmN0aW9uIChfLCBfXywgX19fKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5fb25TY3JvbGxIb3Jpem9udGFsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfZXZlbnQkY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgICBjbGllbnRXaWR0aCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LnNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxXaWR0aCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LnNjcm9sbFdpZHRoO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICBpZiAocHJldlN0YXRlLnNjcm9sbE9mZnNldCA9PT0gc2Nyb2xsTGVmdCkge1xuICAgICAgICAgICAgLy8gU2Nyb2xsIHBvc2l0aW9uIG1heSBoYXZlIGJlZW4gdXBkYXRlZCBieSBjRE0vY0RVLFxuICAgICAgICAgICAgLy8gSW4gd2hpY2ggY2FzZSB3ZSBkb24ndCBuZWVkIHRvIHRyaWdnZXIgYW5vdGhlciByZW5kZXIsXG4gICAgICAgICAgICAvLyBBbmQgd2UgZG9uJ3Qgd2FudCB0byB1cGRhdGUgc3RhdGUuaXNTY3JvbGxpbmcuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gX3RoaXMucHJvcHMuZGlyZWN0aW9uO1xuICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXQgPSBzY3JvbGxMZWZ0O1xuXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICAgIC8vIFRSSUNLWSBBY2NvcmRpbmcgdG8gdGhlIHNwZWMsIHNjcm9sbExlZnQgc2hvdWxkIGJlIG5lZ2F0aXZlIGZvciBSVEwgYWxpZ25lZCBlbGVtZW50cy5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgbm90IHRoZSBjYXNlIGZvciBhbGwgYnJvd3NlcnMgdGhvdWdoIChlLmcuIENocm9tZSByZXBvcnRzIHZhbHVlcyBhcyBwb3NpdGl2ZSwgbWVhc3VyZWQgcmVsYXRpdmUgdG8gdGhlIGxlZnQpLlxuICAgICAgICAgICAgLy8gSXQncyBhbHNvIGVhc2llciBmb3IgdGhpcyBjb21wb25lbnQgaWYgd2UgY29udmVydCBvZmZzZXRzIHRvIHRoZSBzYW1lIGZvcm1hdCBhcyB0aGV5IHdvdWxkIGJlIGluIGZvciBsdHIuXG4gICAgICAgICAgICAvLyBTbyB0aGUgc2ltcGxlc3Qgc29sdXRpb24gaXMgdG8gZGV0ZXJtaW5lIHdoaWNoIGJyb3dzZXIgYmVoYXZpb3Igd2UncmUgZGVhbGluZyB3aXRoLCBhbmQgY29udmVydCBiYXNlZCBvbiBpdC5cbiAgICAgICAgICAgIHN3aXRjaCAoZ2V0UlRMT2Zmc2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ25lZ2F0aXZlJzpcbiAgICAgICAgICAgICAgICBzY3JvbGxPZmZzZXQgPSAtc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlICdwb3NpdGl2ZS1kZXNjZW5kaW5nJzpcbiAgICAgICAgICAgICAgICBzY3JvbGxPZmZzZXQgPSBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIC0gc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIFByZXZlbnQgU2FmYXJpJ3MgZWxhc3RpYyBzY3JvbGxpbmcgZnJvbSBjYXVzaW5nIHZpc3VhbCBzaGFraW5nIHdoZW4gc2Nyb2xsaW5nIHBhc3QgYm91bmRzLlxuXG5cbiAgICAgICAgICBzY3JvbGxPZmZzZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzY3JvbGxPZmZzZXQsIHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGgpKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNTY3JvbGxpbmc6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGxEaXJlY3Rpb246IHByZXZTdGF0ZS5zY3JvbGxPZmZzZXQgPCBzY3JvbGxMZWZ0ID8gJ2ZvcndhcmQnIDogJ2JhY2t3YXJkJyxcbiAgICAgICAgICAgIHNjcm9sbE9mZnNldDogc2Nyb2xsT2Zmc2V0LFxuICAgICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIH0sIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nRGVib3VuY2VkKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9vblNjcm9sbFZlcnRpY2FsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfZXZlbnQkY3VycmVudFRhcmdldDIgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgICAgY2xpZW50SGVpZ2h0ID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQyLmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0Mi5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICBzY3JvbGxUb3AgPSBfZXZlbnQkY3VycmVudFRhcmdldDIuc2Nyb2xsVG9wO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICBpZiAocHJldlN0YXRlLnNjcm9sbE9mZnNldCA9PT0gc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAvLyBTY3JvbGwgcG9zaXRpb24gbWF5IGhhdmUgYmVlbiB1cGRhdGVkIGJ5IGNETS9jRFUsXG4gICAgICAgICAgICAvLyBJbiB3aGljaCBjYXNlIHdlIGRvbid0IG5lZWQgdG8gdHJpZ2dlciBhbm90aGVyIHJlbmRlcixcbiAgICAgICAgICAgIC8vIEFuZCB3ZSBkb24ndCB3YW50IHRvIHVwZGF0ZSBzdGF0ZS5pc1Njcm9sbGluZy5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH0gLy8gUHJldmVudCBTYWZhcmkncyBlbGFzdGljIHNjcm9sbGluZyBmcm9tIGNhdXNpbmcgdmlzdWFsIHNoYWtpbmcgd2hlbiBzY3JvbGxpbmcgcGFzdCBib3VuZHMuXG5cblxuICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCkpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1Njcm9sbGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbE9mZnNldCA8IHNjcm9sbE9mZnNldCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCcsXG4gICAgICAgICAgICBzY3JvbGxPZmZzZXQ6IHNjcm9sbE9mZnNldCxcbiAgICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICB9LCBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ0RlYm91bmNlZCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fb3V0ZXJSZWZTZXR0ZXIgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgIHZhciBvdXRlclJlZiA9IF90aGlzLnByb3BzLm91dGVyUmVmO1xuICAgICAgICBfdGhpcy5fb3V0ZXJSZWYgPSByZWY7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvdXRlclJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG91dGVyUmVmKHJlZik7XG4gICAgICAgIH0gZWxzZSBpZiAob3V0ZXJSZWYgIT0gbnVsbCAmJiB0eXBlb2Ygb3V0ZXJSZWYgPT09ICdvYmplY3QnICYmIG91dGVyUmVmLmhhc093blByb3BlcnR5KCdjdXJyZW50JykpIHtcbiAgICAgICAgICBvdXRlclJlZi5jdXJyZW50ID0gcmVmO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ0RlYm91bmNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkICE9PSBudWxsKSB7XG4gICAgICAgICAgY2FuY2VsVGltZW91dChfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCA9IHJlcXVlc3RUaW1lb3V0KF90aGlzLl9yZXNldElzU2Nyb2xsaW5nLCBJU19TQ1JPTExJTkdfREVCT1VOQ0VfSU5URVJWQUwkMSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc1Njcm9sbGluZzogZmFsc2VcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIENsZWFyIHN0eWxlIGNhY2hlIGFmdGVyIHN0YXRlIHVwZGF0ZSBoYXMgYmVlbiBjb21taXR0ZWQuXG4gICAgICAgICAgLy8gVGhpcyB3YXkgd2UgZG9uJ3QgYnJlYWsgcHVyZSBzQ1UgZm9yIGl0ZW1zIHRoYXQgZG9uJ3QgdXNlIGlzU2Nyb2xsaW5nIHBhcmFtLlxuICAgICAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZSgtMSwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIExpc3QuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICB2YWxpZGF0ZVNoYXJlZFByb3BzJDEobmV4dFByb3BzLCBwcmV2U3RhdGUpO1xuICAgICAgdmFsaWRhdGVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHZhciBfcHJvdG8gPSBMaXN0LnByb3RvdHlwZTtcblxuICAgIF9wcm90by5zY3JvbGxUbyA9IGZ1bmN0aW9uIHNjcm9sbFRvKHNjcm9sbE9mZnNldCkge1xuICAgICAgc2Nyb2xsT2Zmc2V0ID0gTWF0aC5tYXgoMCwgc2Nyb2xsT2Zmc2V0KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAocHJldlN0YXRlLnNjcm9sbE9mZnNldCA9PT0gc2Nyb2xsT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbE9mZnNldCA8IHNjcm9sbE9mZnNldCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCcsXG4gICAgICAgICAgc2Nyb2xsT2Zmc2V0OiBzY3JvbGxPZmZzZXQsXG4gICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9yZXNldElzU2Nyb2xsaW5nRGVib3VuY2VkKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNjcm9sbFRvSXRlbSA9IGZ1bmN0aW9uIHNjcm9sbFRvSXRlbShpbmRleCwgYWxpZ24pIHtcbiAgICAgIGlmIChhbGlnbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGFsaWduID0gJ2F1dG8nO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbUNvdW50ID0gdGhpcy5wcm9wcy5pdGVtQ291bnQ7XG4gICAgICB2YXIgc2Nyb2xsT2Zmc2V0ID0gdGhpcy5zdGF0ZS5zY3JvbGxPZmZzZXQ7XG4gICAgICBpbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBpdGVtQ291bnQgLSAxKSk7XG4gICAgICB0aGlzLnNjcm9sbFRvKGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KHRoaXMucHJvcHMsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0LCB0aGlzLl9pbnN0YW5jZVByb3BzKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHMyLmRpcmVjdGlvbixcbiAgICAgICAgICBpbml0aWFsU2Nyb2xsT2Zmc2V0ID0gX3RoaXMkcHJvcHMyLmluaXRpYWxTY3JvbGxPZmZzZXQsXG4gICAgICAgICAgbGF5b3V0ID0gX3RoaXMkcHJvcHMyLmxheW91dDtcblxuICAgICAgaWYgKHR5cGVvZiBpbml0aWFsU2Nyb2xsT2Zmc2V0ID09PSAnbnVtYmVyJyAmJiB0aGlzLl9vdXRlclJlZiAhPSBudWxsKSB7XG4gICAgICAgIHZhciBvdXRlclJlZiA9IHRoaXMuX291dGVyUmVmOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfHwgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gaW5pdGlhbFNjcm9sbE9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdXRlclJlZi5zY3JvbGxUb3AgPSBpbml0aWFsU2Nyb2xsT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhbGxQcm9wc0NhbGxiYWNrcygpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHMzLmRpcmVjdGlvbixcbiAgICAgICAgICBsYXlvdXQgPSBfdGhpcyRwcm9wczMubGF5b3V0O1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzY3JvbGxPZmZzZXQgPSBfdGhpcyRzdGF0ZS5zY3JvbGxPZmZzZXQsXG4gICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkID0gX3RoaXMkc3RhdGUuc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkO1xuXG4gICAgICBpZiAoc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkICYmIHRoaXMuX291dGVyUmVmICE9IG51bGwpIHtcbiAgICAgICAgdmFyIG91dGVyUmVmID0gdGhpcy5fb3V0ZXJSZWY7IC8vIFRPRE8gRGVwcmVjYXRlIGRpcmVjdGlvbiBcImhvcml6b250YWxcIlxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAgICAgICAvLyBUUklDS1kgQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzY3JvbGxMZWZ0IHNob3VsZCBiZSBuZWdhdGl2ZSBmb3IgUlRMIGFsaWduZWQgZWxlbWVudHMuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIG5vdCB0aGUgY2FzZSBmb3IgYWxsIGJyb3dzZXJzIHRob3VnaCAoZS5nLiBDaHJvbWUgcmVwb3J0cyB2YWx1ZXMgYXMgcG9zaXRpdmUsIG1lYXN1cmVkIHJlbGF0aXZlIHRvIHRoZSBsZWZ0KS5cbiAgICAgICAgICAgIC8vIFNvIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGJyb3dzZXIgYmVoYXZpb3Igd2UncmUgZGVhbGluZyB3aXRoLCBhbmQgbWltaWMgaXQuXG4gICAgICAgICAgICBzd2l0Y2ggKGdldFJUTE9mZnNldFR5cGUoKSkge1xuICAgICAgICAgICAgICBjYXNlICduZWdhdGl2ZSc6XG4gICAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IC1zY3JvbGxPZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAncG9zaXRpdmUtYXNjZW5kaW5nJzpcbiAgICAgICAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gc2Nyb2xsT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudFdpZHRoID0gb3V0ZXJSZWYuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFdpZHRoID0gb3V0ZXJSZWYuc2Nyb2xsV2lkdGg7XG4gICAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggLSBzY3JvbGxPZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBzY3JvbGxPZmZzZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dGVyUmVmLnNjcm9sbFRvcCA9IHNjcm9sbE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jYWxsUHJvcHNDYWxsYmFja3MoKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCAhPT0gbnVsbCkge1xuICAgICAgICBjYW5jZWxUaW1lb3V0KHRoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczQuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHM0LmNsYXNzTmFtZSxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRwcm9wczQuZGlyZWN0aW9uLFxuICAgICAgICAgIGhlaWdodCA9IF90aGlzJHByb3BzNC5oZWlnaHQsXG4gICAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wczQuaW5uZXJSZWYsXG4gICAgICAgICAgaW5uZXJFbGVtZW50VHlwZSA9IF90aGlzJHByb3BzNC5pbm5lckVsZW1lbnRUeXBlLFxuICAgICAgICAgIGlubmVyVGFnTmFtZSA9IF90aGlzJHByb3BzNC5pbm5lclRhZ05hbWUsXG4gICAgICAgICAgaXRlbUNvdW50ID0gX3RoaXMkcHJvcHM0Lml0ZW1Db3VudCxcbiAgICAgICAgICBpdGVtRGF0YSA9IF90aGlzJHByb3BzNC5pdGVtRGF0YSxcbiAgICAgICAgICBfdGhpcyRwcm9wczQkaXRlbUtleSA9IF90aGlzJHByb3BzNC5pdGVtS2V5LFxuICAgICAgICAgIGl0ZW1LZXkgPSBfdGhpcyRwcm9wczQkaXRlbUtleSA9PT0gdm9pZCAwID8gZGVmYXVsdEl0ZW1LZXkkMSA6IF90aGlzJHByb3BzNCRpdGVtS2V5LFxuICAgICAgICAgIGxheW91dCA9IF90aGlzJHByb3BzNC5sYXlvdXQsXG4gICAgICAgICAgb3V0ZXJFbGVtZW50VHlwZSA9IF90aGlzJHByb3BzNC5vdXRlckVsZW1lbnRUeXBlLFxuICAgICAgICAgIG91dGVyVGFnTmFtZSA9IF90aGlzJHByb3BzNC5vdXRlclRhZ05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczQuc3R5bGUsXG4gICAgICAgICAgdXNlSXNTY3JvbGxpbmcgPSBfdGhpcyRwcm9wczQudXNlSXNTY3JvbGxpbmcsXG4gICAgICAgICAgd2lkdGggPSBfdGhpcyRwcm9wczQud2lkdGg7XG4gICAgICB2YXIgaXNTY3JvbGxpbmcgPSB0aGlzLnN0YXRlLmlzU2Nyb2xsaW5nOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgdmFyIG9uU2Nyb2xsID0gaXNIb3Jpem9udGFsID8gdGhpcy5fb25TY3JvbGxIb3Jpem9udGFsIDogdGhpcy5fb25TY3JvbGxWZXJ0aWNhbDtcblxuICAgICAgdmFyIF90aGlzJF9nZXRSYW5nZVRvUmVuZCA9IHRoaXMuX2dldFJhbmdlVG9SZW5kZXIoKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gX3RoaXMkX2dldFJhbmdlVG9SZW5kWzBdLFxuICAgICAgICAgIHN0b3BJbmRleCA9IF90aGlzJF9nZXRSYW5nZVRvUmVuZFsxXTtcblxuICAgICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICAgIGlmIChpdGVtQ291bnQgPiAwKSB7XG4gICAgICAgIGZvciAodmFyIF9pbmRleCA9IHN0YXJ0SW5kZXg7IF9pbmRleCA8PSBzdG9wSW5kZXg7IF9pbmRleCsrKSB7XG4gICAgICAgICAgaXRlbXMucHVzaChjcmVhdGVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgICAgICBkYXRhOiBpdGVtRGF0YSxcbiAgICAgICAgICAgIGtleTogaXRlbUtleShfaW5kZXgsIGl0ZW1EYXRhKSxcbiAgICAgICAgICAgIGluZGV4OiBfaW5kZXgsXG4gICAgICAgICAgICBpc1Njcm9sbGluZzogdXNlSXNTY3JvbGxpbmcgPyBpc1Njcm9sbGluZyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLl9nZXRJdGVtU3R5bGUoX2luZGV4KVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBSZWFkIHRoaXMgdmFsdWUgQUZURVIgaXRlbXMgaGF2ZSBiZWVuIGNyZWF0ZWQsXG4gICAgICAvLyBTbyB0aGVpciBhY3R1YWwgc2l6ZXMgKGlmIHZhcmlhYmxlKSBhcmUgdGFrZW4gaW50byBjb25zaWRlcmF0aW9uLlxuXG5cbiAgICAgIHZhciBlc3RpbWF0ZWRUb3RhbFNpemUgPSBnZXRFc3RpbWF0ZWRUb3RhbFNpemUodGhpcy5wcm9wcywgdGhpcy5faW5zdGFuY2VQcm9wcyk7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChvdXRlckVsZW1lbnRUeXBlIHx8IG91dGVyVGFnTmFtZSB8fCAnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgb25TY3JvbGw6IG9uU2Nyb2xsLFxuICAgICAgICByZWY6IHRoaXMuX291dGVyUmVmU2V0dGVyLFxuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgIH0sIHN0eWxlKVxuICAgICAgfSwgY3JlYXRlRWxlbWVudChpbm5lckVsZW1lbnRUeXBlIHx8IGlubmVyVGFnTmFtZSB8fCAnZGl2Jywge1xuICAgICAgICBjaGlsZHJlbjogaXRlbXMsXG4gICAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiBpc0hvcml6b250YWwgPyAnMTAwJScgOiBlc3RpbWF0ZWRUb3RhbFNpemUsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogaXNTY3JvbGxpbmcgPyAnbm9uZScgOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IGlzSG9yaXpvbnRhbCA/IGVzdGltYXRlZFRvdGFsU2l6ZSA6ICcxMDAlJ1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fY2FsbFByb3BzQ2FsbGJhY2tzID0gZnVuY3Rpb24gX2NhbGxQcm9wc0NhbGxiYWNrcygpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkl0ZW1zUmVuZGVyZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGl0ZW1Db3VudCA9IHRoaXMucHJvcHMuaXRlbUNvdW50O1xuXG4gICAgICAgIGlmIChpdGVtQ291bnQgPiAwKSB7XG4gICAgICAgICAgdmFyIF90aGlzJF9nZXRSYW5nZVRvUmVuZDIgPSB0aGlzLl9nZXRSYW5nZVRvUmVuZGVyKCksXG4gICAgICAgICAgICAgIF9vdmVyc2NhblN0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmQyWzBdLFxuICAgICAgICAgICAgICBfb3ZlcnNjYW5TdG9wSW5kZXggPSBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmQyWzFdLFxuICAgICAgICAgICAgICBfdmlzaWJsZVN0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmQyWzJdLFxuICAgICAgICAgICAgICBfdmlzaWJsZVN0b3BJbmRleCA9IF90aGlzJF9nZXRSYW5nZVRvUmVuZDJbM107XG5cbiAgICAgICAgICB0aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkKF9vdmVyc2NhblN0YXJ0SW5kZXgsIF9vdmVyc2NhblN0b3BJbmRleCwgX3Zpc2libGVTdGFydEluZGV4LCBfdmlzaWJsZVN0b3BJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uU2Nyb2xsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgX3Njcm9sbERpcmVjdGlvbiA9IF90aGlzJHN0YXRlMi5zY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgICBfc2Nyb2xsT2Zmc2V0ID0gX3RoaXMkc3RhdGUyLnNjcm9sbE9mZnNldCxcbiAgICAgICAgICAgIF9zY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQgPSBfdGhpcyRzdGF0ZTIuc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkO1xuXG4gICAgICAgIHRoaXMuX2NhbGxPblNjcm9sbChfc2Nyb2xsRGlyZWN0aW9uLCBfc2Nyb2xsT2Zmc2V0LCBfc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkKTtcbiAgICAgIH1cbiAgICB9OyAvLyBMYXppbHkgY3JlYXRlIGFuZCBjYWNoZSBpdGVtIHN0eWxlcyB3aGlsZSBzY3JvbGxpbmcsXG4gICAgLy8gU28gdGhhdCBwdXJlIGNvbXBvbmVudCBzQ1Ugd2lsbCBwcmV2ZW50IHJlLXJlbmRlcnMuXG4gICAgLy8gV2UgbWFpbnRhaW4gdGhpcyBjYWNoZSwgYW5kIHBhc3MgYSBzdHlsZSBwcm9wIHJhdGhlciB0aGFuIGluZGV4LFxuICAgIC8vIFNvIHRoYXQgTGlzdCBjYW4gY2xlYXIgY2FjaGVkIHN0eWxlcyBhbmQgZm9yY2UgaXRlbSByZS1yZW5kZXIgaWYgbmVjZXNzYXJ5LlxuXG5cbiAgICBfcHJvdG8uX2dldFJhbmdlVG9SZW5kZXIgPSBmdW5jdGlvbiBfZ2V0UmFuZ2VUb1JlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGl0ZW1Db3VudCA9IF90aGlzJHByb3BzNS5pdGVtQ291bnQsXG4gICAgICAgICAgb3ZlcnNjYW5Db3VudCA9IF90aGlzJHByb3BzNS5vdmVyc2NhbkNvdW50O1xuICAgICAgdmFyIF90aGlzJHN0YXRlMyA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaXNTY3JvbGxpbmcgPSBfdGhpcyRzdGF0ZTMuaXNTY3JvbGxpbmcsXG4gICAgICAgICAgc2Nyb2xsRGlyZWN0aW9uID0gX3RoaXMkc3RhdGUzLnNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICBzY3JvbGxPZmZzZXQgPSBfdGhpcyRzdGF0ZTMuc2Nyb2xsT2Zmc2V0O1xuXG4gICAgICBpZiAoaXRlbUNvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydEluZGV4ID0gZ2V0U3RhcnRJbmRleEZvck9mZnNldCh0aGlzLnByb3BzLCBzY3JvbGxPZmZzZXQsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgdmFyIHN0b3BJbmRleCA9IGdldFN0b3BJbmRleEZvclN0YXJ0SW5kZXgodGhpcy5wcm9wcywgc3RhcnRJbmRleCwgc2Nyb2xsT2Zmc2V0LCB0aGlzLl9pbnN0YW5jZVByb3BzKTsgLy8gT3ZlcnNjYW4gYnkgb25lIGl0ZW0gaW4gZWFjaCBkaXJlY3Rpb24gc28gdGhhdCB0YWIvZm9jdXMgd29ya3MuXG4gICAgICAvLyBJZiB0aGVyZSBpc24ndCBhdCBsZWFzdCBvbmUgZXh0cmEgaXRlbSwgdGFiIGxvb3BzIGJhY2sgYXJvdW5kLlxuXG4gICAgICB2YXIgb3ZlcnNjYW5CYWNrd2FyZCA9ICFpc1Njcm9sbGluZyB8fCBzY3JvbGxEaXJlY3Rpb24gPT09ICdiYWNrd2FyZCcgPyBNYXRoLm1heCgxLCBvdmVyc2NhbkNvdW50KSA6IDE7XG4gICAgICB2YXIgb3ZlcnNjYW5Gb3J3YXJkID0gIWlzU2Nyb2xsaW5nIHx8IHNjcm9sbERpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnID8gTWF0aC5tYXgoMSwgb3ZlcnNjYW5Db3VudCkgOiAxO1xuICAgICAgcmV0dXJuIFtNYXRoLm1heCgwLCBzdGFydEluZGV4IC0gb3ZlcnNjYW5CYWNrd2FyZCksIE1hdGgubWF4KDAsIE1hdGgubWluKGl0ZW1Db3VudCAtIDEsIHN0b3BJbmRleCArIG92ZXJzY2FuRm9yd2FyZCkpLCBzdGFydEluZGV4LCBzdG9wSW5kZXhdO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGlzdDtcbiAgfShQdXJlQ29tcG9uZW50KSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgIGl0ZW1EYXRhOiB1bmRlZmluZWQsXG4gICAgbGF5b3V0OiAndmVydGljYWwnLFxuICAgIG92ZXJzY2FuQ291bnQ6IDIsXG4gICAgdXNlSXNTY3JvbGxpbmc6IGZhbHNlXG4gIH0sIF90ZW1wO1xufSAvLyBOT1RFOiBJIGNvbnNpZGVyZWQgZnVydGhlciB3cmFwcGluZyBpbmRpdmlkdWFsIGl0ZW1zIHdpdGggYSBwdXJlIExpc3RJdGVtIGNvbXBvbmVudC5cbi8vIFRoaXMgd291bGQgYXZvaWQgZXZlciBjYWxsaW5nIHRoZSByZW5kZXIgZnVuY3Rpb24gZm9yIHRoZSBzYW1lIGluZGV4IG1vcmUgdGhhbiBvbmNlLFxuLy8gQnV0IGl0IHdvdWxkIGFsc28gYWRkIHRoZSBvdmVyaGVhZCBvZiBhIGxvdCBvZiBjb21wb25lbnRzL2ZpYmVycy5cbi8vIEkgYXNzdW1lIHBlb3BsZSBhbHJlYWR5IGRvIHRoaXMgKHJlbmRlciBmdW5jdGlvbiByZXR1cm5pbmcgYSBjbGFzcyBjb21wb25lbnQpLFxuLy8gU28gbXkgZG9pbmcgaXQgd291bGQganVzdCB1bm5lY2Vzc2FyaWx5IGRvdWJsZSB0aGUgd3JhcHBlcnMuXG5cbnZhciB2YWxpZGF0ZVNoYXJlZFByb3BzJDEgPSBmdW5jdGlvbiB2YWxpZGF0ZVNoYXJlZFByb3BzKF9yZWYyLCBfcmVmMykge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgIGRpcmVjdGlvbiA9IF9yZWYyLmRpcmVjdGlvbixcbiAgICAgIGhlaWdodCA9IF9yZWYyLmhlaWdodCxcbiAgICAgIGxheW91dCA9IF9yZWYyLmxheW91dCxcbiAgICAgIGlubmVyVGFnTmFtZSA9IF9yZWYyLmlubmVyVGFnTmFtZSxcbiAgICAgIG91dGVyVGFnTmFtZSA9IF9yZWYyLm91dGVyVGFnTmFtZSxcbiAgICAgIHdpZHRoID0gX3JlZjIud2lkdGg7XG4gIHZhciBpbnN0YW5jZSA9IF9yZWYzLmluc3RhbmNlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGlubmVyVGFnTmFtZSAhPSBudWxsIHx8IG91dGVyVGFnTmFtZSAhPSBudWxsKSB7XG4gICAgICBpZiAoZGV2V2FybmluZ3NUYWdOYW1lJDEgJiYgIWRldldhcm5pbmdzVGFnTmFtZSQxLmhhcyhpbnN0YW5jZSkpIHtcbiAgICAgICAgZGV2V2FybmluZ3NUYWdOYW1lJDEuYWRkKGluc3RhbmNlKTtcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgaW5uZXJUYWdOYW1lIGFuZCBvdXRlclRhZ05hbWUgcHJvcHMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQuICcgKyAnUGxlYXNlIHVzZSB0aGUgaW5uZXJFbGVtZW50VHlwZSBhbmQgb3V0ZXJFbGVtZW50VHlwZSBwcm9wcyBpbnN0ZWFkLicpO1xuICAgICAgfVxuICAgIH0gLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG5cblxuICAgIHZhciBpc0hvcml6b250YWwgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJztcblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdob3Jpem9udGFsJzpcbiAgICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgICAgaWYgKGRldldhcm5pbmdzRGlyZWN0aW9uICYmICFkZXZXYXJuaW5nc0RpcmVjdGlvbi5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgZGV2V2FybmluZ3NEaXJlY3Rpb24uYWRkKGluc3RhbmNlKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkaXJlY3Rpb24gcHJvcCBzaG91bGQgYmUgZWl0aGVyIFwibHRyXCIgKGRlZmF1bHQpIG9yIFwicnRsXCIuICcgKyAnUGxlYXNlIHVzZSB0aGUgbGF5b3V0IHByb3AgdG8gc3BlY2lmeSBcInZlcnRpY2FsXCIgKGRlZmF1bHQpIG9yIFwiaG9yaXpvbnRhbFwiIG9yaWVudGF0aW9uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2x0cic6XG4gICAgICBjYXNlICdydGwnOlxuICAgICAgICAvLyBWYWxpZCB2YWx1ZXNcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiZGlyZWN0aW9uXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGVpdGhlciBcImx0clwiIG9yIFwicnRsXCIuICcgKyAoXCJcXFwiXCIgKyBkaXJlY3Rpb24gKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIHN3aXRjaCAobGF5b3V0KSB7XG4gICAgICBjYXNlICdob3Jpem9udGFsJzpcbiAgICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgICAgLy8gVmFsaWQgdmFsdWVzXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcImxheW91dFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBlaXRoZXIgXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLiAnICsgKFwiXFxcIlwiICsgbGF5b3V0ICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJjaGlsZHJlblwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIFJlYWN0IGNvbXBvbmVudC4gJyArIChcIlxcXCJcIiArIChjaGlsZHJlbiA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBjaGlsZHJlbikgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIGlmIChpc0hvcml6b250YWwgJiYgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJ3aWR0aFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ0hvcml6b250YWwgbGlzdHMgbXVzdCBzcGVjaWZ5IGEgbnVtYmVyIGZvciB3aWR0aC4gJyArIChcIlxcXCJcIiArICh3aWR0aCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB3aWR0aCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH0gZWxzZSBpZiAoIWlzSG9yaXpvbnRhbCAmJiB0eXBlb2YgaGVpZ2h0ICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJoZWlnaHRcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWZXJ0aWNhbCBsaXN0cyBtdXN0IHNwZWNpZnkgYSBudW1iZXIgZm9yIGhlaWdodC4gJyArIChcIlxcXCJcIiArIChoZWlnaHQgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgaGVpZ2h0KSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgREVGQVVMVF9FU1RJTUFURURfSVRFTV9TSVpFJDEgPSA1MDtcblxudmFyIGdldEl0ZW1NZXRhZGF0YSQxID0gZnVuY3Rpb24gZ2V0SXRlbU1ldGFkYXRhKHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICB2YXIgX3JlZiA9IHByb3BzLFxuICAgICAgaXRlbVNpemUgPSBfcmVmLml0ZW1TaXplO1xuICB2YXIgaXRlbU1ldGFkYXRhTWFwID0gaW5zdGFuY2VQcm9wcy5pdGVtTWV0YWRhdGFNYXAsXG4gICAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkSW5kZXg7XG5cbiAgaWYgKGluZGV4ID4gbGFzdE1lYXN1cmVkSW5kZXgpIHtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcblxuICAgIGlmIChsYXN0TWVhc3VyZWRJbmRleCA+PSAwKSB7XG4gICAgICB2YXIgaXRlbU1ldGFkYXRhID0gaXRlbU1ldGFkYXRhTWFwW2xhc3RNZWFzdXJlZEluZGV4XTtcbiAgICAgIG9mZnNldCA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gbGFzdE1lYXN1cmVkSW5kZXggKyAxOyBpIDw9IGluZGV4OyBpKyspIHtcbiAgICAgIHZhciBzaXplID0gaXRlbVNpemUoaSk7XG4gICAgICBpdGVtTWV0YWRhdGFNYXBbaV0gPSB7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICBzaXplOiBzaXplXG4gICAgICB9O1xuICAgICAgb2Zmc2V0ICs9IHNpemU7XG4gICAgfVxuXG4gICAgaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRJbmRleCA9IGluZGV4O1xuICB9XG5cbiAgcmV0dXJuIGl0ZW1NZXRhZGF0YU1hcFtpbmRleF07XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtJDEgPSBmdW5jdGlvbiBmaW5kTmVhcmVzdEl0ZW0ocHJvcHMsIGluc3RhbmNlUHJvcHMsIG9mZnNldCkge1xuICB2YXIgaXRlbU1ldGFkYXRhTWFwID0gaW5zdGFuY2VQcm9wcy5pdGVtTWV0YWRhdGFNYXAsXG4gICAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkSW5kZXg7XG4gIHZhciBsYXN0TWVhc3VyZWRJdGVtT2Zmc2V0ID0gbGFzdE1lYXN1cmVkSW5kZXggPiAwID8gaXRlbU1ldGFkYXRhTWFwW2xhc3RNZWFzdXJlZEluZGV4XS5vZmZzZXQgOiAwO1xuXG4gIGlmIChsYXN0TWVhc3VyZWRJdGVtT2Zmc2V0ID49IG9mZnNldCkge1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgbWVhc3VyZWQgaXRlbXMgd2l0aGluIHRoaXMgcmFuZ2UganVzdCB1c2UgYSBiaW5hcnkgc2VhcmNoIGFzIGl0J3MgZmFzdGVyLlxuICAgIHJldHVybiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2gkMShwcm9wcywgaW5zdGFuY2VQcm9wcywgbGFzdE1lYXN1cmVkSW5kZXgsIDAsIG9mZnNldCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgd2UgaGF2ZW4ndCB5ZXQgbWVhc3VyZWQgdGhpcyBoaWdoLCBmYWxsYmFjayB0byBhbiBleHBvbmVudGlhbCBzZWFyY2ggd2l0aCBhbiBpbm5lciBiaW5hcnkgc2VhcmNoLlxuICAgIC8vIFRoZSBleHBvbmVudGlhbCBzZWFyY2ggYXZvaWRzIHByZS1jb21wdXRpbmcgc2l6ZXMgZm9yIHRoZSBmdWxsIHNldCBvZiBpdGVtcyBhcyBhIGJpbmFyeSBzZWFyY2ggd291bGQuXG4gICAgLy8gVGhlIG92ZXJhbGwgY29tcGxleGl0eSBmb3IgdGhpcyBhcHByb2FjaCBpcyBPKGxvZyBuKS5cbiAgICByZXR1cm4gZmluZE5lYXJlc3RJdGVtRXhwb25lbnRpYWxTZWFyY2gkMShwcm9wcywgaW5zdGFuY2VQcm9wcywgTWF0aC5tYXgoMCwgbGFzdE1lYXN1cmVkSW5kZXgpLCBvZmZzZXQpO1xuICB9XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoJDEgPSBmdW5jdGlvbiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2gocHJvcHMsIGluc3RhbmNlUHJvcHMsIGhpZ2gsIGxvdywgb2Zmc2V0KSB7XG4gIHdoaWxlIChsb3cgPD0gaGlnaCkge1xuICAgIHZhciBtaWRkbGUgPSBsb3cgKyBNYXRoLmZsb29yKChoaWdoIC0gbG93KSAvIDIpO1xuICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gZ2V0SXRlbU1ldGFkYXRhJDEocHJvcHMsIG1pZGRsZSwgaW5zdGFuY2VQcm9wcykub2Zmc2V0O1xuXG4gICAgaWYgKGN1cnJlbnRPZmZzZXQgPT09IG9mZnNldCkge1xuICAgICAgcmV0dXJuIG1pZGRsZTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRPZmZzZXQgPCBvZmZzZXQpIHtcbiAgICAgIGxvdyA9IG1pZGRsZSArIDE7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50T2Zmc2V0ID4gb2Zmc2V0KSB7XG4gICAgICBoaWdoID0gbWlkZGxlIC0gMTtcbiAgICB9XG4gIH1cblxuICBpZiAobG93ID4gMCkge1xuICAgIHJldHVybiBsb3cgLSAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtRXhwb25lbnRpYWxTZWFyY2gkMSA9IGZ1bmN0aW9uIGZpbmROZWFyZXN0SXRlbUV4cG9uZW50aWFsU2VhcmNoKHByb3BzLCBpbnN0YW5jZVByb3BzLCBpbmRleCwgb2Zmc2V0KSB7XG4gIHZhciBpdGVtQ291bnQgPSBwcm9wcy5pdGVtQ291bnQ7XG4gIHZhciBpbnRlcnZhbCA9IDE7XG5cbiAgd2hpbGUgKGluZGV4IDwgaXRlbUNvdW50ICYmIGdldEl0ZW1NZXRhZGF0YSQxKHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykub2Zmc2V0IDwgb2Zmc2V0KSB7XG4gICAgaW5kZXggKz0gaW50ZXJ2YWw7XG4gICAgaW50ZXJ2YWwgKj0gMjtcbiAgfVxuXG4gIHJldHVybiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2gkMShwcm9wcywgaW5zdGFuY2VQcm9wcywgTWF0aC5taW4oaW5kZXgsIGl0ZW1Db3VudCAtIDEpLCBNYXRoLmZsb29yKGluZGV4IC8gMiksIG9mZnNldCk7XG59O1xuXG52YXIgZ2V0RXN0aW1hdGVkVG90YWxTaXplID0gZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxTaXplKF9yZWYyLCBfcmVmMykge1xuICB2YXIgaXRlbUNvdW50ID0gX3JlZjIuaXRlbUNvdW50O1xuICB2YXIgaXRlbU1ldGFkYXRhTWFwID0gX3JlZjMuaXRlbU1ldGFkYXRhTWFwLFxuICAgICAgZXN0aW1hdGVkSXRlbVNpemUgPSBfcmVmMy5lc3RpbWF0ZWRJdGVtU2l6ZSxcbiAgICAgIGxhc3RNZWFzdXJlZEluZGV4ID0gX3JlZjMubGFzdE1lYXN1cmVkSW5kZXg7XG4gIHZhciB0b3RhbFNpemVPZk1lYXN1cmVkSXRlbXMgPSAwOyAvLyBFZGdlIGNhc2UgY2hlY2sgZm9yIHdoZW4gdGhlIG51bWJlciBvZiBpdGVtcyBkZWNyZWFzZXMgd2hpbGUgYSBzY3JvbGwgaXMgaW4gcHJvZ3Jlc3MuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9idmF1Z2huL3JlYWN0LXdpbmRvdy9wdWxsLzEzOFxuXG4gIGlmIChsYXN0TWVhc3VyZWRJbmRleCA+PSBpdGVtQ291bnQpIHtcbiAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGl0ZW1Db3VudCAtIDE7XG4gIH1cblxuICBpZiAobGFzdE1lYXN1cmVkSW5kZXggPj0gMCkge1xuICAgIHZhciBpdGVtTWV0YWRhdGEgPSBpdGVtTWV0YWRhdGFNYXBbbGFzdE1lYXN1cmVkSW5kZXhdO1xuICAgIHRvdGFsU2l6ZU9mTWVhc3VyZWRJdGVtcyA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgfVxuXG4gIHZhciBudW1Vbm1lYXN1cmVkSXRlbXMgPSBpdGVtQ291bnQgLSBsYXN0TWVhc3VyZWRJbmRleCAtIDE7XG4gIHZhciB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcyA9IG51bVVubWVhc3VyZWRJdGVtcyAqIGVzdGltYXRlZEl0ZW1TaXplO1xuICByZXR1cm4gdG90YWxTaXplT2ZNZWFzdXJlZEl0ZW1zICsgdG90YWxTaXplT2ZVbm1lYXN1cmVkSXRlbXM7XG59O1xuXG52YXIgVmFyaWFibGVTaXplTGlzdCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVMaXN0Q29tcG9uZW50KHtcbiAgZ2V0SXRlbU9mZnNldDogZnVuY3Rpb24gZ2V0SXRlbU9mZnNldChwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gZ2V0SXRlbU1ldGFkYXRhJDEocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKS5vZmZzZXQ7XG4gIH0sXG4gIGdldEl0ZW1TaXplOiBmdW5jdGlvbiBnZXRJdGVtU2l6ZShwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VQcm9wcy5pdGVtTWV0YWRhdGFNYXBbaW5kZXhdLnNpemU7XG4gIH0sXG4gIGdldEVzdGltYXRlZFRvdGFsU2l6ZTogZ2V0RXN0aW1hdGVkVG90YWxTaXplLFxuICBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudDogZnVuY3Rpb24gZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQocHJvcHMsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICAgICAgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0LFxuICAgICAgICBsYXlvdXQgPSBwcm9wcy5sYXlvdXQsXG4gICAgICAgIHdpZHRoID0gcHJvcHMud2lkdGg7IC8vIFRPRE8gRGVwcmVjYXRlIGRpcmVjdGlvbiBcImhvcml6b250YWxcIlxuXG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciBzaXplID0gaXNIb3Jpem9udGFsID8gd2lkdGggOiBoZWlnaHQ7XG4gICAgdmFyIGl0ZW1NZXRhZGF0YSA9IGdldEl0ZW1NZXRhZGF0YSQxKHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcyk7IC8vIEdldCBlc3RpbWF0ZWQgdG90YWwgc2l6ZSBhZnRlciBJdGVtTWV0YWRhdGEgaXMgY29tcHV0ZWQsXG4gICAgLy8gVG8gZW5zdXJlIGl0IHJlZmxlY3RzIGFjdHVhbCBtZWFzdXJlbWVudHMgaW5zdGVhZCBvZiBqdXN0IGVzdGltYXRlcy5cblxuICAgIHZhciBlc3RpbWF0ZWRUb3RhbFNpemUgPSBnZXRFc3RpbWF0ZWRUb3RhbFNpemUocHJvcHMsIGluc3RhbmNlUHJvcHMpO1xuICAgIHZhciBtYXhPZmZzZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihlc3RpbWF0ZWRUb3RhbFNpemUgLSBzaXplLCBpdGVtTWV0YWRhdGEub2Zmc2V0KSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IE1hdGgubWF4KDAsIGl0ZW1NZXRhZGF0YS5vZmZzZXQgLSBzaXplICsgaXRlbU1ldGFkYXRhLnNpemUpO1xuXG4gICAgaWYgKGFsaWduID09PSAnc21hcnQnKSB7XG4gICAgICBpZiAoc2Nyb2xsT2Zmc2V0ID49IG1pbk9mZnNldCAtIHNpemUgJiYgc2Nyb2xsT2Zmc2V0IDw9IG1heE9mZnNldCArIHNpemUpIHtcbiAgICAgICAgYWxpZ24gPSAnYXV0byc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGlnbiA9ICdjZW50ZXInO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgcmV0dXJuIG1heE9mZnNldDtcblxuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcblxuICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobWluT2Zmc2V0ICsgKG1heE9mZnNldCAtIG1pbk9mZnNldCkgLyAyKTtcblxuICAgICAgY2FzZSAnYXV0byc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoc2Nyb2xsT2Zmc2V0ID49IG1pbk9mZnNldCAmJiBzY3JvbGxPZmZzZXQgPD0gbWF4T2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHNjcm9sbE9mZnNldDtcbiAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxPZmZzZXQgPCBtaW5PZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfSxcbiAgZ2V0U3RhcnRJbmRleEZvck9mZnNldDogZnVuY3Rpb24gZ2V0U3RhcnRJbmRleEZvck9mZnNldChwcm9wcywgb2Zmc2V0LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbSQxKHByb3BzLCBpbnN0YW5jZVByb3BzLCBvZmZzZXQpO1xuICB9LFxuICBnZXRTdG9wSW5kZXhGb3JTdGFydEluZGV4OiBmdW5jdGlvbiBnZXRTdG9wSW5kZXhGb3JTdGFydEluZGV4KHByb3BzLCBzdGFydEluZGV4LCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgICBoZWlnaHQgPSBwcm9wcy5oZWlnaHQsXG4gICAgICAgIGl0ZW1Db3VudCA9IHByb3BzLml0ZW1Db3VudCxcbiAgICAgICAgbGF5b3V0ID0gcHJvcHMubGF5b3V0LFxuICAgICAgICB3aWR0aCA9IHByb3BzLndpZHRoOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgIHZhciBpc0hvcml6b250YWwgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICB2YXIgc2l6ZSA9IGlzSG9yaXpvbnRhbCA/IHdpZHRoIDogaGVpZ2h0O1xuICAgIHZhciBpdGVtTWV0YWRhdGEgPSBnZXRJdGVtTWV0YWRhdGEkMShwcm9wcywgc3RhcnRJbmRleCwgaW5zdGFuY2VQcm9wcyk7XG4gICAgdmFyIG1heE9mZnNldCA9IHNjcm9sbE9mZnNldCArIHNpemU7XG4gICAgdmFyIG9mZnNldCA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgICB2YXIgc3RvcEluZGV4ID0gc3RhcnRJbmRleDtcblxuICAgIHdoaWxlIChzdG9wSW5kZXggPCBpdGVtQ291bnQgLSAxICYmIG9mZnNldCA8IG1heE9mZnNldCkge1xuICAgICAgc3RvcEluZGV4Kys7XG4gICAgICBvZmZzZXQgKz0gZ2V0SXRlbU1ldGFkYXRhJDEocHJvcHMsIHN0b3BJbmRleCwgaW5zdGFuY2VQcm9wcykuc2l6ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcEluZGV4O1xuICB9LFxuICBpbml0SW5zdGFuY2VQcm9wczogZnVuY3Rpb24gaW5pdEluc3RhbmNlUHJvcHMocHJvcHMsIGluc3RhbmNlKSB7XG4gICAgdmFyIF9yZWY0ID0gcHJvcHMsXG4gICAgICAgIGVzdGltYXRlZEl0ZW1TaXplID0gX3JlZjQuZXN0aW1hdGVkSXRlbVNpemU7XG4gICAgdmFyIGluc3RhbmNlUHJvcHMgPSB7XG4gICAgICBpdGVtTWV0YWRhdGFNYXA6IHt9LFxuICAgICAgZXN0aW1hdGVkSXRlbVNpemU6IGVzdGltYXRlZEl0ZW1TaXplIHx8IERFRkFVTFRfRVNUSU1BVEVEX0lURU1fU0laRSQxLFxuICAgICAgbGFzdE1lYXN1cmVkSW5kZXg6IC0xXG4gICAgfTtcblxuICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJJbmRleCA9IGZ1bmN0aW9uIChpbmRleCwgc2hvdWxkRm9yY2VVcGRhdGUpIHtcbiAgICAgIGlmIChzaG91bGRGb3JjZVVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRJbmRleCA9IE1hdGgubWluKGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkSW5kZXgsIGluZGV4IC0gMSk7IC8vIFdlIGNvdWxkIHBvdGVudGlhbGx5IG9wdGltaXplIGZ1cnRoZXIgYnkgb25seSBldmljdGluZyBzdHlsZXMgYWZ0ZXIgdGhpcyBpbmRleCxcbiAgICAgIC8vIEJ1dCBzaW5jZSBzdHlsZXMgYXJlIG9ubHkgY2FjaGVkIHdoaWxlIHNjcm9sbGluZyBpcyBpbiBwcm9ncmVzcy1cbiAgICAgIC8vIEl0IHNlZW1zIGFuIHVubmVjZXNzYXJ5IG9wdGltaXphdGlvbi5cbiAgICAgIC8vIEl0J3MgdW5saWtlbHkgdGhhdCByZXNldEFmdGVySW5kZXgoKSB3aWxsIGJlIGNhbGxlZCB3aGlsZSBhIHVzZXIgaXMgc2Nyb2xsaW5nLlxuXG4gICAgICBpbnN0YW5jZS5fZ2V0SXRlbVN0eWxlQ2FjaGUoLTEpO1xuXG4gICAgICBpZiAoc2hvdWxkRm9yY2VVcGRhdGUpIHtcbiAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlUHJvcHM7XG4gIH0sXG4gIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2U6IGZhbHNlLFxuICB2YWxpZGF0ZVByb3BzOiBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzKF9yZWY1KSB7XG4gICAgdmFyIGl0ZW1TaXplID0gX3JlZjUuaXRlbVNpemU7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtU2l6ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcIml0ZW1TaXplXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgZnVuY3Rpb24uICcgKyAoXCJcXFwiXCIgKyAoaXRlbVNpemUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgaXRlbVNpemUpICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgRml4ZWRTaXplR3JpZCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVHcmlkQ29tcG9uZW50KHtcbiAgZ2V0Q29sdW1uT2Zmc2V0OiBmdW5jdGlvbiBnZXRDb2x1bW5PZmZzZXQoX3JlZiwgaW5kZXgpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmLmNvbHVtbldpZHRoO1xuICAgIHJldHVybiBpbmRleCAqIGNvbHVtbldpZHRoO1xuICB9LFxuICBnZXRDb2x1bW5XaWR0aDogZnVuY3Rpb24gZ2V0Q29sdW1uV2lkdGgoX3JlZjIsIGluZGV4KSB7XG4gICAgdmFyIGNvbHVtbldpZHRoID0gX3JlZjIuY29sdW1uV2lkdGg7XG4gICAgcmV0dXJuIGNvbHVtbldpZHRoO1xuICB9LFxuICBnZXRSb3dPZmZzZXQ6IGZ1bmN0aW9uIGdldFJvd09mZnNldChfcmVmMywgaW5kZXgpIHtcbiAgICB2YXIgcm93SGVpZ2h0ID0gX3JlZjMucm93SGVpZ2h0O1xuICAgIHJldHVybiBpbmRleCAqIHJvd0hlaWdodDtcbiAgfSxcbiAgZ2V0Um93SGVpZ2h0OiBmdW5jdGlvbiBnZXRSb3dIZWlnaHQoX3JlZjQsIGluZGV4KSB7XG4gICAgdmFyIHJvd0hlaWdodCA9IF9yZWY0LnJvd0hlaWdodDtcbiAgICByZXR1cm4gcm93SGVpZ2h0O1xuICB9LFxuICBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodDogZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQoX3JlZjUpIHtcbiAgICB2YXIgcm93Q291bnQgPSBfcmVmNS5yb3dDb3VudCxcbiAgICAgICAgcm93SGVpZ2h0ID0gX3JlZjUucm93SGVpZ2h0O1xuICAgIHJldHVybiByb3dIZWlnaHQgKiByb3dDb3VudDtcbiAgfSxcbiAgZ2V0RXN0aW1hdGVkVG90YWxXaWR0aDogZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxXaWR0aChfcmVmNikge1xuICAgIHZhciBjb2x1bW5Db3VudCA9IF9yZWY2LmNvbHVtbkNvdW50LFxuICAgICAgICBjb2x1bW5XaWR0aCA9IF9yZWY2LmNvbHVtbldpZHRoO1xuICAgIHJldHVybiBjb2x1bW5XaWR0aCAqIGNvbHVtbkNvdW50O1xuICB9LFxuICBnZXRPZmZzZXRGb3JDb2x1bW5BbmRBbGlnbm1lbnQ6IGZ1bmN0aW9uIGdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudChfcmVmNywgY29sdW1uSW5kZXgsIGFsaWduLCBzY3JvbGxMZWZ0LCBpbnN0YW5jZVByb3BzLCBzY3JvbGxiYXJTaXplKSB7XG4gICAgdmFyIGNvbHVtbkNvdW50ID0gX3JlZjcuY29sdW1uQ291bnQsXG4gICAgICAgIGNvbHVtbldpZHRoID0gX3JlZjcuY29sdW1uV2lkdGgsXG4gICAgICAgIHdpZHRoID0gX3JlZjcud2lkdGg7XG4gICAgdmFyIGxhc3RDb2x1bW5PZmZzZXQgPSBNYXRoLm1heCgwLCBjb2x1bW5Db3VudCAqIGNvbHVtbldpZHRoIC0gd2lkdGgpO1xuICAgIHZhciBtYXhPZmZzZXQgPSBNYXRoLm1pbihsYXN0Q29sdW1uT2Zmc2V0LCBjb2x1bW5JbmRleCAqIGNvbHVtbldpZHRoKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gTWF0aC5tYXgoMCwgY29sdW1uSW5kZXggKiBjb2x1bW5XaWR0aCAtIHdpZHRoICsgc2Nyb2xsYmFyU2l6ZSArIGNvbHVtbldpZHRoKTtcblxuICAgIGlmIChhbGlnbiA9PT0gJ3NtYXJ0Jykge1xuICAgICAgaWYgKHNjcm9sbExlZnQgPj0gbWluT2Zmc2V0IC0gd2lkdGggJiYgc2Nyb2xsTGVmdCA8PSBtYXhPZmZzZXQgKyB3aWR0aCkge1xuICAgICAgICBhbGlnbiA9ICdhdXRvJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsaWduID0gJ2NlbnRlcic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuXG4gICAgICBjYXNlICdlbmQnOlxuICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuXG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICAvLyBcIkNlbnRlcmVkXCIgb2Zmc2V0IGlzIHVzdWFsbHkgdGhlIGF2ZXJhZ2Ugb2YgdGhlIG1pbiBhbmQgbWF4LlxuICAgICAgICAvLyBCdXQgbmVhciB0aGUgZWRnZXMgb2YgdGhlIGxpc3QsIHRoaXMgZG9lc24ndCBob2xkIHRydWUuXG4gICAgICAgIHZhciBtaWRkbGVPZmZzZXQgPSBNYXRoLnJvdW5kKG1pbk9mZnNldCArIChtYXhPZmZzZXQgLSBtaW5PZmZzZXQpIC8gMik7XG5cbiAgICAgICAgaWYgKG1pZGRsZU9mZnNldCA8IE1hdGguY2VpbCh3aWR0aCAvIDIpKSB7XG4gICAgICAgICAgcmV0dXJuIDA7IC8vIG5lYXIgdGhlIGJlZ2lubmluZ1xuICAgICAgICB9IGVsc2UgaWYgKG1pZGRsZU9mZnNldCA+IGxhc3RDb2x1bW5PZmZzZXQgKyBNYXRoLmZsb29yKHdpZHRoIC8gMikpIHtcbiAgICAgICAgICByZXR1cm4gbGFzdENvbHVtbk9mZnNldDsgLy8gbmVhciB0aGUgZW5kXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG1pZGRsZU9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdhdXRvJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChzY3JvbGxMZWZ0ID49IG1pbk9mZnNldCAmJiBzY3JvbGxMZWZ0IDw9IG1heE9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBzY3JvbGxMZWZ0O1xuICAgICAgICB9IGVsc2UgaWYgKG1pbk9mZnNldCA+IG1heE9mZnNldCkge1xuICAgICAgICAgIC8vIEJlY2F1c2Ugd2Ugb25seSB0YWtlIGludG8gYWNjb3VudCB0aGUgc2Nyb2xsYmFyIHNpemUgd2hlbiBjYWxjdWxhdGluZyBtaW5PZmZzZXRcbiAgICAgICAgICAvLyB0aGlzIHZhbHVlIGNhbiBiZSBsYXJnZXIgdGhhbiBtYXhPZmZzZXQgd2hlbiBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxMZWZ0IDwgbWluT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9XG4gIH0sXG4gIGdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudDogZnVuY3Rpb24gZ2V0T2Zmc2V0Rm9yUm93QW5kQWxpZ25tZW50KF9yZWY4LCByb3dJbmRleCwgYWxpZ24sIHNjcm9sbFRvcCwgaW5zdGFuY2VQcm9wcywgc2Nyb2xsYmFyU2l6ZSkge1xuICAgIHZhciByb3dIZWlnaHQgPSBfcmVmOC5yb3dIZWlnaHQsXG4gICAgICAgIGhlaWdodCA9IF9yZWY4LmhlaWdodCxcbiAgICAgICAgcm93Q291bnQgPSBfcmVmOC5yb3dDb3VudDtcbiAgICB2YXIgbGFzdFJvd09mZnNldCA9IE1hdGgubWF4KDAsIHJvd0NvdW50ICogcm93SGVpZ2h0IC0gaGVpZ2h0KTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gTWF0aC5taW4obGFzdFJvd09mZnNldCwgcm93SW5kZXggKiByb3dIZWlnaHQpO1xuICAgIHZhciBtaW5PZmZzZXQgPSBNYXRoLm1heCgwLCByb3dJbmRleCAqIHJvd0hlaWdodCAtIGhlaWdodCArIHNjcm9sbGJhclNpemUgKyByb3dIZWlnaHQpO1xuXG4gICAgaWYgKGFsaWduID09PSAnc21hcnQnKSB7XG4gICAgICBpZiAoc2Nyb2xsVG9wID49IG1pbk9mZnNldCAtIGhlaWdodCAmJiBzY3JvbGxUb3AgPD0gbWF4T2Zmc2V0ICsgaGVpZ2h0KSB7XG4gICAgICAgIGFsaWduID0gJ2F1dG8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ24gPSAnY2VudGVyJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIC8vIFwiQ2VudGVyZWRcIiBvZmZzZXQgaXMgdXN1YWxseSB0aGUgYXZlcmFnZSBvZiB0aGUgbWluIGFuZCBtYXguXG4gICAgICAgIC8vIEJ1dCBuZWFyIHRoZSBlZGdlcyBvZiB0aGUgbGlzdCwgdGhpcyBkb2Vzbid0IGhvbGQgdHJ1ZS5cbiAgICAgICAgdmFyIG1pZGRsZU9mZnNldCA9IE1hdGgucm91bmQobWluT2Zmc2V0ICsgKG1heE9mZnNldCAtIG1pbk9mZnNldCkgLyAyKTtcblxuICAgICAgICBpZiAobWlkZGxlT2Zmc2V0IDwgTWF0aC5jZWlsKGhlaWdodCAvIDIpKSB7XG4gICAgICAgICAgcmV0dXJuIDA7IC8vIG5lYXIgdGhlIGJlZ2lubmluZ1xuICAgICAgICB9IGVsc2UgaWYgKG1pZGRsZU9mZnNldCA+IGxhc3RSb3dPZmZzZXQgKyBNYXRoLmZsb29yKGhlaWdodCAvIDIpKSB7XG4gICAgICAgICAgcmV0dXJuIGxhc3RSb3dPZmZzZXQ7IC8vIG5lYXIgdGhlIGVuZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtaWRkbGVPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnYXV0byc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoc2Nyb2xsVG9wID49IG1pbk9mZnNldCAmJiBzY3JvbGxUb3AgPD0gbWF4T2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHNjcm9sbFRvcDtcbiAgICAgICAgfSBlbHNlIGlmIChtaW5PZmZzZXQgPiBtYXhPZmZzZXQpIHtcbiAgICAgICAgICAvLyBCZWNhdXNlIHdlIG9ubHkgdGFrZSBpbnRvIGFjY291bnQgdGhlIHNjcm9sbGJhciBzaXplIHdoZW4gY2FsY3VsYXRpbmcgbWluT2Zmc2V0XG4gICAgICAgICAgLy8gdGhpcyB2YWx1ZSBjYW4gYmUgbGFyZ2VyIHRoYW4gbWF4T2Zmc2V0IHdoZW4gYXQgdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsVG9wIDwgbWluT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9XG4gIH0sXG4gIGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQ6IGZ1bmN0aW9uIGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQoX3JlZjksIHNjcm9sbExlZnQpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmOS5jb2x1bW5XaWR0aCxcbiAgICAgICAgY29sdW1uQ291bnQgPSBfcmVmOS5jb2x1bW5Db3VudDtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oY29sdW1uQ291bnQgLSAxLCBNYXRoLmZsb29yKHNjcm9sbExlZnQgLyBjb2x1bW5XaWR0aCkpKTtcbiAgfSxcbiAgZ2V0Q29sdW1uU3RvcEluZGV4Rm9yU3RhcnRJbmRleDogZnVuY3Rpb24gZ2V0Q29sdW1uU3RvcEluZGV4Rm9yU3RhcnRJbmRleChfcmVmMTAsIHN0YXJ0SW5kZXgsIHNjcm9sbExlZnQpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmMTAuY29sdW1uV2lkdGgsXG4gICAgICAgIGNvbHVtbkNvdW50ID0gX3JlZjEwLmNvbHVtbkNvdW50LFxuICAgICAgICB3aWR0aCA9IF9yZWYxMC53aWR0aDtcbiAgICB2YXIgbGVmdCA9IHN0YXJ0SW5kZXggKiBjb2x1bW5XaWR0aDtcbiAgICB2YXIgbnVtVmlzaWJsZUNvbHVtbnMgPSBNYXRoLmNlaWwoKHdpZHRoICsgc2Nyb2xsTGVmdCAtIGxlZnQpIC8gY29sdW1uV2lkdGgpO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihjb2x1bW5Db3VudCAtIDEsIHN0YXJ0SW5kZXggKyBudW1WaXNpYmxlQ29sdW1ucyAtIDEgLy8gLTEgaXMgYmVjYXVzZSBzdG9wIGluZGV4IGlzIGluY2x1c2l2ZVxuICAgICkpO1xuICB9LFxuICBnZXRSb3dTdGFydEluZGV4Rm9yT2Zmc2V0OiBmdW5jdGlvbiBnZXRSb3dTdGFydEluZGV4Rm9yT2Zmc2V0KF9yZWYxMSwgc2Nyb2xsVG9wKSB7XG4gICAgdmFyIHJvd0hlaWdodCA9IF9yZWYxMS5yb3dIZWlnaHQsXG4gICAgICAgIHJvd0NvdW50ID0gX3JlZjExLnJvd0NvdW50O1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihyb3dDb3VudCAtIDEsIE1hdGguZmxvb3Ioc2Nyb2xsVG9wIC8gcm93SGVpZ2h0KSkpO1xuICB9LFxuICBnZXRSb3dTdG9wSW5kZXhGb3JTdGFydEluZGV4OiBmdW5jdGlvbiBnZXRSb3dTdG9wSW5kZXhGb3JTdGFydEluZGV4KF9yZWYxMiwgc3RhcnRJbmRleCwgc2Nyb2xsVG9wKSB7XG4gICAgdmFyIHJvd0hlaWdodCA9IF9yZWYxMi5yb3dIZWlnaHQsXG4gICAgICAgIHJvd0NvdW50ID0gX3JlZjEyLnJvd0NvdW50LFxuICAgICAgICBoZWlnaHQgPSBfcmVmMTIuaGVpZ2h0O1xuICAgIHZhciB0b3AgPSBzdGFydEluZGV4ICogcm93SGVpZ2h0O1xuICAgIHZhciBudW1WaXNpYmxlUm93cyA9IE1hdGguY2VpbCgoaGVpZ2h0ICsgc2Nyb2xsVG9wIC0gdG9wKSAvIHJvd0hlaWdodCk7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHJvd0NvdW50IC0gMSwgc3RhcnRJbmRleCArIG51bVZpc2libGVSb3dzIC0gMSAvLyAtMSBpcyBiZWNhdXNlIHN0b3AgaW5kZXggaXMgaW5jbHVzaXZlXG4gICAgKSk7XG4gIH0sXG4gIGluaXRJbnN0YW5jZVByb3BzOiBmdW5jdGlvbiBpbml0SW5zdGFuY2VQcm9wcyhwcm9wcykgey8vIE5vb3BcbiAgfSxcbiAgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZTogdHJ1ZSxcbiAgdmFsaWRhdGVQcm9wczogZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyhfcmVmMTMpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmMTMuY29sdW1uV2lkdGgsXG4gICAgICAgIHJvd0hlaWdodCA9IF9yZWYxMy5yb3dIZWlnaHQ7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBjb2x1bW5XaWR0aCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJjb2x1bW5XaWR0aFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIG51bWJlci4gJyArIChcIlxcXCJcIiArIChjb2x1bW5XaWR0aCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBjb2x1bW5XaWR0aCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHJvd0hlaWdodCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJyb3dIZWlnaHRcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgYSBudW1iZXIuICcgKyAoXCJcXFwiXCIgKyAocm93SGVpZ2h0ID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJvd0hlaWdodCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbnZhciBGaXhlZFNpemVMaXN0ID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZUxpc3RDb21wb25lbnQoe1xuICBnZXRJdGVtT2Zmc2V0OiBmdW5jdGlvbiBnZXRJdGVtT2Zmc2V0KF9yZWYsIGluZGV4KSB7XG4gICAgdmFyIGl0ZW1TaXplID0gX3JlZi5pdGVtU2l6ZTtcbiAgICByZXR1cm4gaW5kZXggKiBpdGVtU2l6ZTtcbiAgfSxcbiAgZ2V0SXRlbVNpemU6IGZ1bmN0aW9uIGdldEl0ZW1TaXplKF9yZWYyLCBpbmRleCkge1xuICAgIHZhciBpdGVtU2l6ZSA9IF9yZWYyLml0ZW1TaXplO1xuICAgIHJldHVybiBpdGVtU2l6ZTtcbiAgfSxcbiAgZ2V0RXN0aW1hdGVkVG90YWxTaXplOiBmdW5jdGlvbiBnZXRFc3RpbWF0ZWRUb3RhbFNpemUoX3JlZjMpIHtcbiAgICB2YXIgaXRlbUNvdW50ID0gX3JlZjMuaXRlbUNvdW50LFxuICAgICAgICBpdGVtU2l6ZSA9IF9yZWYzLml0ZW1TaXplO1xuICAgIHJldHVybiBpdGVtU2l6ZSAqIGl0ZW1Db3VudDtcbiAgfSxcbiAgZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQ6IGZ1bmN0aW9uIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KF9yZWY0LCBpbmRleCwgYWxpZ24sIHNjcm9sbE9mZnNldCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBfcmVmNC5kaXJlY3Rpb24sXG4gICAgICAgIGhlaWdodCA9IF9yZWY0LmhlaWdodCxcbiAgICAgICAgaXRlbUNvdW50ID0gX3JlZjQuaXRlbUNvdW50LFxuICAgICAgICBpdGVtU2l6ZSA9IF9yZWY0Lml0ZW1TaXplLFxuICAgICAgICBsYXlvdXQgPSBfcmVmNC5sYXlvdXQsXG4gICAgICAgIHdpZHRoID0gX3JlZjQud2lkdGg7XG4gICAgLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciBzaXplID0gaXNIb3Jpem9udGFsID8gd2lkdGggOiBoZWlnaHQ7XG4gICAgdmFyIGxhc3RJdGVtT2Zmc2V0ID0gTWF0aC5tYXgoMCwgaXRlbUNvdW50ICogaXRlbVNpemUgLSBzaXplKTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gTWF0aC5taW4obGFzdEl0ZW1PZmZzZXQsIGluZGV4ICogaXRlbVNpemUpO1xuICAgIHZhciBtaW5PZmZzZXQgPSBNYXRoLm1heCgwLCBpbmRleCAqIGl0ZW1TaXplIC0gc2l6ZSArIGl0ZW1TaXplKTtcblxuICAgIGlmIChhbGlnbiA9PT0gJ3NtYXJ0Jykge1xuICAgICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgLSBzaXplICYmIHNjcm9sbE9mZnNldCA8PSBtYXhPZmZzZXQgKyBzaXplKSB7XG4gICAgICAgIGFsaWduID0gJ2F1dG8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ24gPSAnY2VudGVyJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIHtcbiAgICAgICAgICAvLyBcIkNlbnRlcmVkXCIgb2Zmc2V0IGlzIHVzdWFsbHkgdGhlIGF2ZXJhZ2Ugb2YgdGhlIG1pbiBhbmQgbWF4LlxuICAgICAgICAgIC8vIEJ1dCBuZWFyIHRoZSBlZGdlcyBvZiB0aGUgbGlzdCwgdGhpcyBkb2Vzbid0IGhvbGQgdHJ1ZS5cbiAgICAgICAgICB2YXIgbWlkZGxlT2Zmc2V0ID0gTWF0aC5yb3VuZChtaW5PZmZzZXQgKyAobWF4T2Zmc2V0IC0gbWluT2Zmc2V0KSAvIDIpO1xuXG4gICAgICAgICAgaWYgKG1pZGRsZU9mZnNldCA8IE1hdGguY2VpbChzaXplIC8gMikpIHtcbiAgICAgICAgICAgIHJldHVybiAwOyAvLyBuZWFyIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICB9IGVsc2UgaWYgKG1pZGRsZU9mZnNldCA+IGxhc3RJdGVtT2Zmc2V0ICsgTWF0aC5mbG9vcihzaXplIC8gMikpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0SXRlbU9mZnNldDsgLy8gbmVhciB0aGUgZW5kXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtaWRkbGVPZmZzZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgJiYgc2Nyb2xsT2Zmc2V0IDw9IG1heE9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBzY3JvbGxPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsT2Zmc2V0IDwgbWluT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9XG4gIH0sXG4gIGdldFN0YXJ0SW5kZXhGb3JPZmZzZXQ6IGZ1bmN0aW9uIGdldFN0YXJ0SW5kZXhGb3JPZmZzZXQoX3JlZjUsIG9mZnNldCkge1xuICAgIHZhciBpdGVtQ291bnQgPSBfcmVmNS5pdGVtQ291bnQsXG4gICAgICAgIGl0ZW1TaXplID0gX3JlZjUuaXRlbVNpemU7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKGl0ZW1Db3VudCAtIDEsIE1hdGguZmxvb3Iob2Zmc2V0IC8gaXRlbVNpemUpKSk7XG4gIH0sXG4gIGdldFN0b3BJbmRleEZvclN0YXJ0SW5kZXg6IGZ1bmN0aW9uIGdldFN0b3BJbmRleEZvclN0YXJ0SW5kZXgoX3JlZjYsIHN0YXJ0SW5kZXgsIHNjcm9sbE9mZnNldCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBfcmVmNi5kaXJlY3Rpb24sXG4gICAgICAgIGhlaWdodCA9IF9yZWY2LmhlaWdodCxcbiAgICAgICAgaXRlbUNvdW50ID0gX3JlZjYuaXRlbUNvdW50LFxuICAgICAgICBpdGVtU2l6ZSA9IF9yZWY2Lml0ZW1TaXplLFxuICAgICAgICBsYXlvdXQgPSBfcmVmNi5sYXlvdXQsXG4gICAgICAgIHdpZHRoID0gX3JlZjYud2lkdGg7XG4gICAgLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciBvZmZzZXQgPSBzdGFydEluZGV4ICogaXRlbVNpemU7XG4gICAgdmFyIHNpemUgPSBpc0hvcml6b250YWwgPyB3aWR0aCA6IGhlaWdodDtcbiAgICB2YXIgbnVtVmlzaWJsZUl0ZW1zID0gTWF0aC5jZWlsKChzaXplICsgc2Nyb2xsT2Zmc2V0IC0gb2Zmc2V0KSAvIGl0ZW1TaXplKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oaXRlbUNvdW50IC0gMSwgc3RhcnRJbmRleCArIG51bVZpc2libGVJdGVtcyAtIDEgLy8gLTEgaXMgYmVjYXVzZSBzdG9wIGluZGV4IGlzIGluY2x1c2l2ZVxuICAgICkpO1xuICB9LFxuICBpbml0SW5zdGFuY2VQcm9wczogZnVuY3Rpb24gaW5pdEluc3RhbmNlUHJvcHMocHJvcHMpIHsvLyBOb29wXG4gIH0sXG4gIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2U6IHRydWUsXG4gIHZhbGlkYXRlUHJvcHM6IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMoX3JlZjcpIHtcbiAgICB2YXIgaXRlbVNpemUgPSBfcmVmNy5pdGVtU2l6ZTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW1TaXplICE9PSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcIml0ZW1TaXplXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgbnVtYmVyLiAnICsgKFwiXFxcIlwiICsgKGl0ZW1TaXplID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGl0ZW1TaXplKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuLy8gUHVsbGVkIGZyb20gcmVhY3QtY29tcGF0XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3ByZWFjdC1jb21wYXQvYmxvYi83YzVkZTAwZTdjODVlMmZmZDAxMWJmM2FmMDI4OTliNjNmNjk5ZDNhL3NyYy9pbmRleC5qcyNMMzQ5XG5mdW5jdGlvbiBzaGFsbG93RGlmZmVycyhwcmV2LCBuZXh0KSB7XG4gIGZvciAodmFyIGF0dHJpYnV0ZSBpbiBwcmV2KSB7XG4gICAgaWYgKCEoYXR0cmlidXRlIGluIG5leHQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfYXR0cmlidXRlIGluIG5leHQpIHtcbiAgICBpZiAocHJldltfYXR0cmlidXRlXSAhPT0gbmV4dFtfYXR0cmlidXRlXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBJdCBrbm93cyB0byBjb21wYXJlIGluZGl2aWR1YWwgc3R5bGUgcHJvcHMgYW5kIGlnbm9yZSB0aGUgd3JhcHBlciBvYmplY3QuXG4vLyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0bWVtb1xuXG5mdW5jdGlvbiBhcmVFcXVhbChwcmV2UHJvcHMsIG5leHRQcm9wcykge1xuICB2YXIgcHJldlN0eWxlID0gcHJldlByb3BzLnN0eWxlLFxuICAgICAgcHJldlJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcmV2UHJvcHMsIFtcInN0eWxlXCJdKTtcblxuICB2YXIgbmV4dFN0eWxlID0gbmV4dFByb3BzLnN0eWxlLFxuICAgICAgbmV4dFJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShuZXh0UHJvcHMsIFtcInN0eWxlXCJdKTtcblxuICByZXR1cm4gIXNoYWxsb3dEaWZmZXJzKHByZXZTdHlsZSwgbmV4dFN0eWxlKSAmJiAhc2hhbGxvd0RpZmZlcnMocHJldlJlc3QsIG5leHRSZXN0KTtcbn1cblxuLy8gSXQga25vd3MgdG8gY29tcGFyZSBpbmRpdmlkdWFsIHN0eWxlIHByb3BzIGFuZCBpZ25vcmUgdGhlIHdyYXBwZXIgb2JqZWN0LlxuLy8gU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1jb21wb25lbnQuaHRtbCNzaG91bGRjb21wb25lbnR1cGRhdGVcblxuZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIHJldHVybiAhYXJlRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCBzaGFsbG93RGlmZmVycyh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xufVxuXG5leHBvcnQgeyBWYXJpYWJsZVNpemVHcmlkLCBWYXJpYWJsZVNpemVMaXN0LCBGaXhlZFNpemVHcmlkLCBGaXhlZFNpemVMaXN0LCBhcmVFcXVhbCwgc2hvdWxkQ29tcG9uZW50VXBkYXRlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1NlbGVjdC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vU2VsZWN0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vU2VsZWN0Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIG1lbW8sIENoYW5nZUV2ZW50SGFuZGxlciwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBdXRvY29tcGxldGUsIHsgQXV0b2NvbXBsZXRlUHJvcHMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL0F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnO1xyXG5pbXBvcnQgeyBJbnB1dEJhc2VDb21wb25lbnRQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSwgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFZhcmlhYmxlU2l6ZUxpc3QgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xyXG4vLyBpbXBvcnQgeyBTY3JvbGxiYXJzIH0gZnJvbSAncmVhY3QtY3VzdG9tLXNjcm9sbGJhcnMtMic7XHJcbi8vIGltcG9ydCB7IFN0eWxlc1Byb3ZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi4vVGV4dElucHV0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWxlY3QubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFNlbGVjdGlvbjxUID0gc3RyaW5nIHwgbnVtYmVyPiB7XHJcbiAgdmFsdWU/OiBUO1xyXG4gIG9wdGlvbnM6IFRbXTtcclxuICBnZXRPcHRpb25MYWJlbDogKHZhbHVlOiBUKSA9PiBUO1xyXG4gIG9uQ2hhbmdlPzogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5cclxuLy8gY29uc3QgTGlzdENvbXBvbmVudCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcclxuLy8gICBjb25zdCB7IGNoaWxkcmVuLCAuLi5jb21Qcm9wcyB9ID0gcHJvcHM7XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8U2Nyb2xsYmFyc1xyXG4vLyAgICAgICB7Li4uY29tUHJvcHN9XHJcbi8vICAgICAgIHJlZj17KG5vZGUpID0+IHJlZihub2RlPy5jb250YWluZXIpfVxyXG4vLyAgICAgICBhdXRvSGVpZ2h0XHJcbi8vICAgICAgIGF1dG9IZWlnaHRNaW49ezB9XHJcbi8vICAgICAgIC8vIGF1dG9IZWlnaHRNYXg9ezAwfVxyXG4vLyAgICAgPlxyXG4vLyAgICAgICB7Y2hpbGRyZW59XHJcbi8vICAgICA8L1Njcm9sbGJhcnM+XHJcbi8vICAgKTtcclxuLy8gfSk7XHJcblxyXG4vLyBMaXN0Q29tcG9uZW50LmRpc3BsYXlOYW1lID0gJ0xpc3RDb21wb25lbnQnO1xyXG4vLyBjb25zdCBNZW1vTGlzdENvbXBvbmVudCA9IG1lbW8oTGlzdENvbXBvbmVudCk7XHJcblxyXG5jb25zdCBMSVNUQk9YX1BBRERJTkcgPSA4OyAvLyBweFxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUm93KHByb3BzKSB7XHJcbiAgY29uc3QgeyBkYXRhLCBpbmRleCwgc3R5bGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoZGF0YVtpbmRleF0sIHtcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgIC4uLnN0eWxlLFxyXG4gICAgICB0b3A6IHN0eWxlLnRvcCArIExJU1RCT1hfUEFERElORyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IE91dGVyRWxlbWVudENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmNvbnN0IE91dGVyRWxlbWVudFR5cGUgPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgY29uc3Qgb3V0ZXJQcm9wcyA9IFJlYWN0LnVzZUNvbnRleHQoT3V0ZXJFbGVtZW50Q29udGV4dCk7XHJcbiAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IHsuLi5wcm9wc30gey4uLm91dGVyUHJvcHN9IC8+O1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHVzZVJlc2V0Q2FjaGUoZGF0YSkge1xyXG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHJlZi5jdXJyZW50ICE9IG51bGwpIHtcclxuICAgICAgcmVmLmN1cnJlbnQucmVzZXRBZnRlckluZGV4KDAsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSk7XHJcbiAgcmV0dXJuIHJlZjtcclxufVxyXG5cclxuLy8gQWRhcHRlciBmb3IgcmVhY3Qtd2luZG93XHJcbmNvbnN0IExpc3Rib3hDb21wb25lbnQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIExpc3Rib3hDb21wb25lbnQocHJvcHMsIHJlZikge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLm90aGVyIH0gPSBwcm9wcztcclxuICBjb25zdCBpdGVtRGF0YSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBzbVVwID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSwgeyBub1NzcjogdHJ1ZSB9KTtcclxuICBjb25zdCBpdGVtQ291bnQgPSBpdGVtRGF0YS5sZW5ndGg7XHJcbiAgY29uc3QgaXRlbVNpemUgPSBzbVVwID8gMzYgOiA0ODtcclxuXHJcbiAgY29uc3QgZ2V0Q2hpbGRTaXplID0gKGNoaWxkKSA9PiB7XHJcbiAgICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQoY2hpbGQpICYmIGNoaWxkLnR5cGUgPT09IExpc3RTdWJoZWFkZXIpIHtcclxuICAgICAgcmV0dXJuIDQ4O1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpdGVtU2l6ZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRIZWlnaHQgPSAoKSA9PiB7XHJcbiAgICBpZiAoaXRlbUNvdW50ID4gOCkge1xyXG4gICAgICByZXR1cm4gOCAqIGl0ZW1TaXplO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGl0ZW1EYXRhLm1hcChnZXRDaGlsZFNpemUpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdyaWRSZWYgPSB1c2VSZXNldENhY2hlKGl0ZW1Db3VudCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17cmVmfT5cclxuICAgICAgPE91dGVyRWxlbWVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e290aGVyfT5cclxuICAgICAgICA8VmFyaWFibGVTaXplTGlzdFxyXG4gICAgICAgICAgaXRlbURhdGE9e2l0ZW1EYXRhfVxyXG4gICAgICAgICAgaGVpZ2h0PXtnZXRIZWlnaHQoKSArIDIgKiBMSVNUQk9YX1BBRERJTkd9XHJcbiAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgcmVmPXtncmlkUmVmfVxyXG4gICAgICAgICAgb3V0ZXJFbGVtZW50VHlwZT17T3V0ZXJFbGVtZW50VHlwZX1cclxuICAgICAgICAgIGlubmVyRWxlbWVudFR5cGU9XCJ1bFwiXHJcbiAgICAgICAgICBpdGVtU2l6ZT17KGluZGV4KSA9PiBnZXRDaGlsZFNpemUoaXRlbURhdGFbaW5kZXhdKX1cclxuICAgICAgICAgIG92ZXJzY2FuQ291bnQ9ezV9XHJcbiAgICAgICAgICBpdGVtQ291bnQ9e2l0ZW1Db3VudH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7cmVuZGVyUm93fVxyXG4gICAgICAgIDwvVmFyaWFibGVTaXplTGlzdD5cclxuICAgICAgPC9PdXRlckVsZW1lbnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5jb25zdCBTZWxlY3Rpb246IEZDPFxyXG4gIE9taXQ8QXV0b2NvbXBsZXRlUHJvcHM8c3RyaW5nIHwgbnVtYmVyLCB0cnVlLCBmYWxzZSwgZmFsc2U+LCAncmVuZGVySW5wdXQnPiAmXHJcbiAgICBJbnB1dEJhc2VDb21wb25lbnRQcm9wc1xyXG4+ID0gKHsgdmFsdWUgPSBbXSwgb25DaGFuZ2UsIGdldE9wdGlvbkxhYmVsLCBsYWJlbCwgb3B0aW9ucywgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIGNvbnN0IFtsb2NhbFZhbHVlLCBzZXRMb2NhbFZhbHVlXSA9IHVzZVN0YXRlPChzdHJpbmcgfCBudW1iZXIpW10+KFtdKTtcclxuXHJcbiAgY29uc3Qgb25Mb2NhbENoYW5nZTogQXV0b2NvbXBsZXRlUHJvcHM8c3RyaW5nIHwgbnVtYmVyLCB0cnVlLCBmYWxzZSwgZmFsc2U+WydvbkNoYW5nZSddID0gKFxyXG4gICAgX2UsXHJcbiAgICB2XHJcbiAgKSA9PiB7XHJcbiAgICBzZXRMb2NhbFZhbHVlKHYpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNvbnRyb2xsZWRPbkNoYW5nZTogQXV0b2NvbXBsZXRlUHJvcHM8c3RyaW5nIHwgbnVtYmVyLCB0cnVlLCBmYWxzZSwgZmFsc2U+WydvbkNoYW5nZSddID1cclxuICAgIHVzZUNhbGxiYWNrKFxyXG4gICAgICAoX2UsIHYpID0+IHtcclxuICAgICAgICBvbkNoYW5nZSAmJlxyXG4gICAgICAgICAgb25DaGFuZ2Uoe1xyXG4gICAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRWl0aGVyIHN0cmluZyBvciBudW1iZXJcclxuICAgICAgICAgICAgICB2YWx1ZTogdixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBbb25DaGFuZ2VdXHJcbiAgICApO1xyXG5cclxuICBjb25zdCBvbkNoYW5nZVRvVXNlID0gb25DaGFuZ2UgPyBjb250cm9sbGVkT25DaGFuZ2UgOiBvbkxvY2FsQ2hhbmdlO1xyXG4gIGNvbnN0IHZhbHVlVG9Vc2UgPSBvbkNoYW5nZSA/IHZhbHVlIDogbG9jYWxWYWx1ZTtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dG9jb21wbGV0ZVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3R9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgaWQ9XCJ0YWdzLWZpbGxlZFwiXHJcbiAgICAgIHZhbHVlPXt2YWx1ZVRvVXNlfVxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICBnZXRPcHRpb25MYWJlbD17Z2V0T3B0aW9uTGFiZWx9XHJcbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRvVXNlfVxyXG4gICAgICByZW5kZXJUYWdzPXsodmFsdWUsIGdldFRhZ1Byb3BzKSA9PlxyXG4gICAgICAgIHZhbHVlLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAga2V5PXtgb3B0aW9uLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgLy8gY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgbGFiZWw9e2dldE9wdGlvbkxhYmVsKG9wdGlvbil9XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHsuLi5nZXRUYWdQcm9wcyh7IGluZGV4IH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgey4uLnBhcmFtc31cclxuICAgICAgICAgIGxhYmVsPXtsYWJlbH1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgLy8gc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICBkaXNhYmxlTGlzdFdyYXBcclxuICAgICAgTGlzdGJveENvbXBvbmVudD17TGlzdGJveENvbXBvbmVudH1cclxuICAgICAgLy8gTGlzdGJveENvbXBvbmVudD17TWVtb0xpc3RDb21wb25lbnQgYXMgYW55fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhTZWxlY3Rpb24pO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TZWxlY3QnO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1RleHRJbnB1dC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vVGV4dElucHV0Lm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vVGV4dElucHV0Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IENoYW5nZUV2ZW50LCBGQywgbWVtbywgdXNlU3RhdGUsIENoYW5nZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRleHRGaWVsZCwgeyBUZXh0RmllbGRQcm9wcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IE51bWJlckZvcm1hdFByb3BzIH0gZnJvbSAncmVhY3QtbnVtYmVyLWZvcm1hdCc7XHJcbmltcG9ydCB7IElucHV0QmFzZUNvbXBvbmVudFByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTdHlsZXNQcm92aWRlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dElucHV0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IE51bWJlckZvcm1hdCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdyZWFjdC1udW1iZXItZm9ybWF0JykpO1xyXG5cclxuaW50ZXJmYWNlIE51bWJlckZvcm1hdFR5cGUgZXh0ZW5kcyBPbWl0PE51bWJlckZvcm1hdFByb3BzLCAndHlwZSc+IHtcclxuICB0eXBlPzogJ2N1cnJlbmN5JyB8ICdtb2JpbGUnIHwgJ251bWJlcicgfCBOdW1iZXJGb3JtYXRQcm9wc1sndHlwZSddO1xyXG4gIHRob3VzYW5kU2VwYXJhdG9yPzogYm9vbGVhbjtcclxuICBwcmVmaXg/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IE51bWJlckZvcm1hdEN1c3RvbTogRkM8TnVtYmVyRm9ybWF0VHlwZT4gPSAoe1xyXG4gIGlucHV0UmVmLFxyXG4gIHByZWZpeCA9ICckJyxcclxuICB0eXBlID0gJ3RleHQnLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPE51bWJlckZvcm1hdFxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIHR5cGU9e3R5cGUgPT09ICdtb2JpbGUnID8gJ3RlbCcgOiB0eXBlID09PSAnY3VycmVuY3knIHx8IHR5cGUgPT09ICdudW1iZXInID8gJ3RleHQnIDogdHlwZX1cclxuICAgICAgcHJlZml4PXt0eXBlID09PSAnY3VycmVuY3knID8gcHJlZml4IDogJyd9XHJcbiAgICAgIGZvcm1hdD17dHlwZSA9PT0gJ21vYmlsZScgPyAnIyMjIyAjIyMjJyA6IHVuZGVmaW5lZH1cclxuICAgICAgdGhvdXNhbmRTZXBhcmF0b3I9e3R5cGUgPT09ICdjdXJyZW5jeSd9XHJcbiAgICAgIGdldElucHV0UmVmPXtpbnB1dFJlZn1cclxuICAgICAgb25WYWx1ZUNoYW5nZT17KHZhbHVlcykgPT4ge1xyXG4gICAgICAgIG9uQ2hhbmdlKHtcclxuICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVzLnZhbHVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9IGFzIENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KTtcclxuICAgICAgfX1cclxuICAgICAgaXNOdW1lcmljU3RyaW5nXHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBNZW1vTnVtYmVyRm9ybWF0Q3VzdG9tID0gbWVtbyhOdW1iZXJGb3JtYXRDdXN0b20pO1xyXG5cclxuY29uc3QgVGV4dElucHV0OiBGQzxUZXh0RmllbGRQcm9wcyAmIE51bWJlckZvcm1hdFR5cGU+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2xvY2FsVmFsdWUsIHNldExvY2FsVmFsdWVdID0gdXNlU3RhdGU8TnVtYmVyRm9ybWF0VHlwZVsndmFsdWUnXT4oJycpO1xyXG5cclxuICBjb25zdCBvbkxvY2FsQ2hhbmdlOiBDaGFuZ2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD4gPSAodikgPT4ge1xyXG4gICAgc2V0TG9jYWxWYWx1ZSh2LnRhcmdldC52YWx1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZTogQ2hhbmdlRXZlbnRIYW5kbGVyPEhUTUxJbnB1dEVsZW1lbnQ+ID0gcHJvcHMub25DaGFuZ2UgfHwgb25Mb2NhbENoYW5nZTtcclxuICBjb25zdCB2YWx1ZVRvVXNlID0gcHJvcHMub25DaGFuZ2UgPyBwcm9wcy52YWx1ZSA6IGxvY2FsVmFsdWU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVzUHJvdmlkZXIgaW5qZWN0Rmlyc3Q+XHJcbiAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICBjbGFzc05hbWU9e1tzdHlsZXMudGV4dElucHV0LCAhcHJvcHMubGFiZWwgPyBzdHlsZXMubm9MYWJlbCA6ICcnXS5qb2luKCcgJyl9XHJcbiAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VUb1VzZX1cclxuICAgICAgICB2YWx1ZT17dmFsdWVUb1VzZX1cclxuICAgICAgICBJbnB1dFByb3BzPXt7XHJcbiAgICAgICAgICBkaXNhYmxlVW5kZXJsaW5lOiB0cnVlLFxyXG4gICAgICAgICAgaW5wdXRDb21wb25lbnQ6XHJcbiAgICAgICAgICAgIHByb3BzLnR5cGUgPT09ICdjdXJyZW5jeScgfHwgcHJvcHMudHlwZSA9PT0gJ251bWJlcicgfHwgcHJvcHMudHlwZSA9PT0gJ21vYmlsZSdcclxuICAgICAgICAgICAgICA/IChNZW1vTnVtYmVyRm9ybWF0Q3VzdG9tIGFzIHVua25vd24gYXMgRkM8SW5wdXRCYXNlQ29tcG9uZW50UHJvcHM+KVxyXG4gICAgICAgICAgICAgIDogdW5kZWZpbmVkLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgaGVscGVyVGV4dD1cIiBcIlxyXG4gICAgICAgIHJvd3NNYXg9ezEwMH1cclxuICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgIC8+XHJcbiAgICA8L1N0eWxlc1Byb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKFRleHRJbnB1dCk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1RleHRJbnB1dCc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=