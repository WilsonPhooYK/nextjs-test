webpackHotUpdate_N_E(1,{

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

/***/ "./src/components/Forms/Select/Select.tsx":
/*!************************************************!*\
  !*** ./src/components/Forms/Select/Select.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/omit */ "./node_modules/lodash/omit.js");
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/Autocomplete */ "./node_modules/@material-ui/lab/esm/Autocomplete/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Forms/TextInput */ "./src/components/Forms/TextInput/index.tsx");
/* harmony import */ var _VirtualizedListBox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VirtualizedListBox */ "./src/components/Forms/Select/VirtualizedListBox.tsx");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Select.module.scss */ "./src/components/Forms/Select/Select.module.scss");
/* harmony import */ var _Select_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Select_module_scss__WEBPACK_IMPORTED_MODULE_9__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\Select\\Select.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var Selection = function Selection(_ref) {
  _s();

  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      onChange = _ref.onChange,
      getOptionLabel = _ref.getOptionLabel,
      label = _ref.label,
      options = _ref.options,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["value", "onChange", "getOptionLabel", "label", "options", "multiple", "size"]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      localValue = _useState[0],
      setLocalValue = _useState[1];

  var onLocalChange = function onLocalChange(_e, v) {
    v && setLocalValue(v);
  };

  var controlledOnChange = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (_e, value) {
    onChange && value && onChange({
      target: {
        // @ts-expect-error - Either string or number
        value: value
      }
    });
  }, [onChange]);
  var onChangeToUse = onChange ? controlledOnChange : onLocalChange;
  var valueToUse = onChange ? value : localValue;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Autocomplete__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread(_objectSpread({
    className: _Select_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.select
  }, lodash_omit__WEBPACK_IMPORTED_MODULE_3___default()(props, ['additionalNames', 'additionalValues'])), {}, {
    size: size,
    id: props.name,
    multiple: multiple,
    value: valueToUse,
    options: options,
    getOptionLabel: getOptionLabel,
    onChange: onChangeToUse,
    renderTags: function renderTags(value, getTagProps) {
      return value.map(function (option, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({
          variant: "outlined",
          label: getOptionLabel(option),
          size: "small"
        }, getTagProps({
          index: index
        })), "option-".concat(index), false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this);
      });
    },
    renderInput: function renderInput(params) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Forms_TextInput__WEBPACK_IMPORTED_MODULE_7__["default"], _objectSpread(_objectSpread({}, params), {}, {
        name: props.name,
        label: label,
        type: "text",
        variant: "filled"
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this);
    },
    disableListWrap: true // @ts-expect-error - Implementation from Material-UI docs
    ,
    ListboxComponent: _VirtualizedListBox__WEBPACK_IMPORTED_MODULE_8__["default"]
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, _this);
};

_s(Selection, "NCIasvJafgEIcMJC/9zFvL4eJEU=");

_c = Selection;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["memo"])(Selection));

var _c, _c2;

$RefreshReg$(_c, "Selection");
$RefreshReg$(_c2, "%default%");

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

/***/ "./src/components/Forms/Select/VirtualizedListBox.tsx":
/*!************************************************************!*\
  !*** ./src/components/Forms/Select/VirtualizedListBox.tsx ***!
  \************************************************************/
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
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "./node_modules/@material-ui/core/esm/useMediaQuery/index.js");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "./node_modules/@material-ui/core/esm/ListSubheader/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-window */ "./node_modules/react-window/dist/index.esm.js");




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Forms\\Select\\VirtualizedListBox.tsx",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var LISTBOX_PADDING = 8; // px

var renderRow = function renderRow(props) {
  var data = props.data,
      index = props.index,
      style = props.style;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(data[index], {
    style: _objectSpread(_objectSpread({}, style), {}, {
      top: style.top + LISTBOX_PADDING
    })
  });
};

var OuterElementContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});
var OuterElementType = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(_c = _s(function (props, ref) {
  _s();

  var outerProps = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(OuterElementContext);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", _objectSpread(_objectSpread({
    ref: ref
  }, props), outerProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 10
  }, _this);
}, "xwf7MnafNzQyeYlSPI+2J93j0pg="));
_c2 = OuterElementType;
OuterElementType.displayName = 'OuterElementType';

var useResetCache = function useResetCache(data) {
  _s2();

  var ref = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
    if (ref.current != null) {
      var _ref$current;

      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.resetAfterIndex(0, true);
    }
  }, [data]);
  return ref;
}; // Adapter for react-window


_s2(useResetCache, "8uVE59eA/r6b92xF80p7sH8rXLk=");

var ListboxComponent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(_c3 = _s3(function ListboxComponent(props, ref) {
  _s3();

  var children = props.children,
      other = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(props, ["children"]);

  var itemData = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children);
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"])();
  var smUp = Object(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"])(theme.breakpoints.up('sm'), {
    noSsr: true
  });
  var itemCount = itemData.length;
  var itemSize = smUp ? 36 : 48;

  var getChildSize = function getChildSize(child) {
    if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.isValidElement(child) && child.type === _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__["default"]) {
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
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_window__WEBPACK_IMPORTED_MODULE_7__["VariableSizeList"], {
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
        lineNumber: 67,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 65,
    columnNumber: 5
  }, this);
}, "v0Dl6eqbD3+6o9qG2eFb+wOU6xk=", false, function () {
  return [_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["useTheme"], _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__["default"], useResetCache];
}));
_c4 = ListboxComponent;
/* harmony default export */ __webpack_exports__["default"] = (_c5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(ListboxComponent));

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "OuterElementType$React.forwardRef");
$RefreshReg$(_c2, "OuterElementType");
$RefreshReg$(_c3, "ListboxComponent$React.forwardRef");
$RefreshReg$(_c4, "ListboxComponent");
$RefreshReg$(_c5, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS91c2VNZWRpYVF1ZXJ5L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL3VzZU1lZGlhUXVlcnkvdXNlTWVkaWFRdWVyeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL21lbW9pemUtb25lL2Rpc3QvbWVtb2l6ZS1vbmUuZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3Qtd2luZG93L2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3Jtcy9TZWxlY3QvU2VsZWN0LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybXMvU2VsZWN0L1ZpcnR1YWxpemVkTGlzdEJveC50c3giXSwibmFtZXMiOlsiU2VsZWN0aW9uIiwidmFsdWUiLCJvbkNoYW5nZSIsImdldE9wdGlvbkxhYmVsIiwibGFiZWwiLCJvcHRpb25zIiwibXVsdGlwbGUiLCJzaXplIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImxvY2FsVmFsdWUiLCJzZXRMb2NhbFZhbHVlIiwib25Mb2NhbENoYW5nZSIsIl9lIiwidiIsImNvbnRyb2xsZWRPbkNoYW5nZSIsInVzZUNhbGxiYWNrIiwidGFyZ2V0Iiwib25DaGFuZ2VUb1VzZSIsInZhbHVlVG9Vc2UiLCJzdHlsZXMiLCJzZWxlY3QiLCJvbWl0IiwibmFtZSIsImdldFRhZ1Byb3BzIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJwYXJhbXMiLCJWaXJ0dWFsaXplZExpc3RCb3giLCJtZW1vIiwiTElTVEJPWF9QQURESU5HIiwicmVuZGVyUm93IiwiZGF0YSIsInN0eWxlIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJ0b3AiLCJPdXRlckVsZW1lbnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIk91dGVyRWxlbWVudFR5cGUiLCJmb3J3YXJkUmVmIiwicmVmIiwib3V0ZXJQcm9wcyIsInVzZUNvbnRleHQiLCJkaXNwbGF5TmFtZSIsInVzZVJlc2V0Q2FjaGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwicmVzZXRBZnRlckluZGV4IiwiTGlzdGJveENvbXBvbmVudCIsImNoaWxkcmVuIiwib3RoZXIiLCJpdGVtRGF0YSIsIkNoaWxkcmVuIiwidG9BcnJheSIsInRoZW1lIiwidXNlVGhlbWUiLCJzbVVwIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwidXAiLCJub1NzciIsIml0ZW1Db3VudCIsImxlbmd0aCIsIml0ZW1TaXplIiwiZ2V0Q2hpbGRTaXplIiwiY2hpbGQiLCJpc1ZhbGlkRWxlbWVudCIsInR5cGUiLCJMaXN0U3ViaGVhZGVyIiwiZ2V0SGVpZ2h0IiwicmVkdWNlIiwiYSIsImIiLCJncmlkUmVmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDM0I7QUFDK0I7QUFDL0M7QUFDZjtBQUNBLGNBQWMsb0VBQVE7QUFDdEIsY0FBYyx5RUFBYTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBOztBQUVBOztBQUVBLHVCQUF1QixrRkFBUSxHQUFHO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLDhDQUFjO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBLEVBQUUsK0NBQWU7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3RkFBd0Y7QUFDeEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkNBQTJDLDJCQUEyQjtBQUN0RSxtREFBbUQsaUNBQWlDO0FBQ3BGLHVCQUF1QiwyREFBYTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7OztBQUdBO0FBQ0E7QUFDQSxhQUFhLDJEQUFhO0FBQzFCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0ZBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTyxFQUFFLDJEQUFhO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtHQUErRztBQUMvRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkdBQTJHO0FBQzNHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRyxDQUFDLG1EQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0RUFBNEU7QUFDNUU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBOztBQUVBLElBQUksSUFBcUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3RkFBYzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDREQUE0RCxnR0FBc0IsQ0FBQyxnR0FBc0I7QUFDekc7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGdHQUFzQixDQUFDLGdHQUFzQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsMkRBQVU7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSw0QkFBNEIsMkRBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQSwyRUFBMkU7O0FBRTNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLDJEQUFVO0FBQzNDO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7O0FBR1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOzs7QUFHWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQzs7QUFFL0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQ0FBcUMscUJBQXFCO0FBQzFELHFCQUFxQiwyREFBYTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBLGFBQWEsMkRBQWE7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrRkFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPLEVBQUUsMkRBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyR0FBMkc7QUFDM0c7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHLENBQUMsbURBQWE7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0sSUFBcUM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUNBQXVDLFlBQVk7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQSxzRUFBc0U7QUFDdEU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FB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QUssSUFBSXpDLGVBRjVCO0FBR0UsYUFBSyxFQUFDLE1BSFI7QUFJRSxXQUFHLEVBQUU2QyxPQUpQO0FBS0Usd0JBQWdCLEVBQUVwQyxnQkFMcEI7QUFNRSx3QkFBZ0IsRUFBQyxJQU5uQjtBQU9FLGdCQUFRLEVBQUUsa0JBQUNiLEtBQUQ7QUFBQSxpQkFBV3dDLFlBQVksQ0FBQ2IsUUFBUSxDQUFDM0IsS0FBRCxDQUFULENBQXZCO0FBQUEsU0FQWjtBQVFFLHFCQUFhLEVBQUUsQ0FSakI7QUFTRSxpQkFBUyxFQUFFcUMsU0FUYjtBQUFBLGtCQVdHaEM7QUFYSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRCxDQTVDd0I7QUFBQSxVQUdUMEIsaUVBSFMsRUFJVkUsdUVBSlUsRUF1QlBkLGFBdkJPO0FBQUEsR0FBekI7TUFBTUssZ0I7QUE4Q1Msa0ZBQUFoQiw0Q0FBSyxDQUFDTCxJQUFOLENBQVdxQixnQkFBWCxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrLzEuZjBiMDNiMzM2NzQxZWYxN2Q2NDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL3VzZU1lZGlhUXVlcnknOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0VGhlbWVQcm9wcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvc3R5bGVzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZU1lZGlhUXVlcnkocXVlcnlJbnB1dCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIHZhciBwcm9wcyA9IGdldFRoZW1lUHJvcHMoe1xuICAgIHRoZW1lOiB0aGVtZSxcbiAgICBuYW1lOiAnTXVpVXNlTWVkaWFRdWVyeScsXG4gICAgcHJvcHM6IHt9XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeUlucHV0ID09PSAnZnVuY3Rpb24nICYmIHRoZW1lID09PSBudWxsKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFsnTWF0ZXJpYWwtVUk6IFRoZSBgcXVlcnlgIGFyZ3VtZW50IHByb3ZpZGVkIGlzIGludmFsaWQuJywgJ1lvdSBhcmUgcHJvdmlkaW5nIGEgZnVuY3Rpb24gd2l0aG91dCBhIHRoZW1lIGluIHRoZSBjb250ZXh0LicsICdPbmUgb2YgdGhlIHBhcmVudCBlbGVtZW50cyBuZWVkcyB0byB1c2UgYSBUaGVtZVByb3ZpZGVyLiddLmpvaW4oJ1xcbicpKTtcbiAgICB9XG4gIH1cblxuICB2YXIgcXVlcnkgPSB0eXBlb2YgcXVlcnlJbnB1dCA9PT0gJ2Z1bmN0aW9uJyA/IHF1ZXJ5SW5wdXQodGhlbWUpIDogcXVlcnlJbnB1dDtcbiAgcXVlcnkgPSBxdWVyeS5yZXBsYWNlKC9eQG1lZGlhKCA/KS9tLCAnJyk7IC8vIFdhaXQgZm9yIGpzZG9tIHRvIHN1cHBvcnQgdGhlIG1hdGNoIG1lZGlhIGZlYXR1cmUuXG4gIC8vIEFsbCB0aGUgYnJvd3NlcnMgTWF0ZXJpYWwtVUkgc3VwcG9ydCBoYXZlIHRoaXMgYnVpbHQtaW4uXG4gIC8vIFRoaXMgZGVmZW5zaXZlIGNoZWNrIGlzIGhlcmUgZm9yIHNpbXBsaWNpdHkuXG4gIC8vIE1vc3Qgb2YgdGhlIHRpbWUsIHRoZSBtYXRjaCBtZWRpYSBsb2dpYyBpc24ndCBjZW50cmFsIHRvIHBlb3BsZSB0ZXN0cy5cblxuICB2YXIgc3VwcG9ydE1hdGNoTWVkaWEgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93Lm1hdGNoTWVkaWEgIT09ICd1bmRlZmluZWQnO1xuXG4gIHZhciBfcHJvcHMkb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBwcm9wcywgb3B0aW9ucyksXG4gICAgICBfcHJvcHMkb3B0aW9ucyRkZWZhdWwgPSBfcHJvcHMkb3B0aW9ucy5kZWZhdWx0TWF0Y2hlcyxcbiAgICAgIGRlZmF1bHRNYXRjaGVzID0gX3Byb3BzJG9wdGlvbnMkZGVmYXVsID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRvcHRpb25zJGRlZmF1bCxcbiAgICAgIF9wcm9wcyRvcHRpb25zJG1hdGNoTSA9IF9wcm9wcyRvcHRpb25zLm1hdGNoTWVkaWEsXG4gICAgICBtYXRjaE1lZGlhID0gX3Byb3BzJG9wdGlvbnMkbWF0Y2hNID09PSB2b2lkIDAgPyBzdXBwb3J0TWF0Y2hNZWRpYSA/IHdpbmRvdy5tYXRjaE1lZGlhIDogbnVsbCA6IF9wcm9wcyRvcHRpb25zJG1hdGNoTSxcbiAgICAgIF9wcm9wcyRvcHRpb25zJG5vU3NyID0gX3Byb3BzJG9wdGlvbnMubm9Tc3IsXG4gICAgICBub1NzciA9IF9wcm9wcyRvcHRpb25zJG5vU3NyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRvcHRpb25zJG5vU3NyLFxuICAgICAgX3Byb3BzJG9wdGlvbnMkc3NyTWF0ID0gX3Byb3BzJG9wdGlvbnMuc3NyTWF0Y2hNZWRpYSxcbiAgICAgIHNzck1hdGNoTWVkaWEgPSBfcHJvcHMkb3B0aW9ucyRzc3JNYXQgPT09IHZvaWQgMCA/IG51bGwgOiBfcHJvcHMkb3B0aW9ucyRzc3JNYXQ7XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobm9Tc3IgJiYgc3VwcG9ydE1hdGNoTWVkaWEpIHtcbiAgICAgIHJldHVybiBtYXRjaE1lZGlhKHF1ZXJ5KS5tYXRjaGVzO1xuICAgIH1cblxuICAgIGlmIChzc3JNYXRjaE1lZGlhKSB7XG4gICAgICByZXR1cm4gc3NyTWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbiAgICB9IC8vIE9uY2UgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkLCB3ZSByZWx5IG9uIHRoZVxuICAgIC8vIGV2ZW50IGxpc3RlbmVycyB0byByZXR1cm4gdGhlIGNvcnJlY3QgbWF0Y2hlcyB2YWx1ZS5cblxuXG4gICAgcmV0dXJuIGRlZmF1bHRNYXRjaGVzO1xuICB9KSxcbiAgICAgIG1hdGNoID0gX1JlYWN0JHVzZVN0YXRlWzBdLFxuICAgICAgc2V0TWF0Y2ggPSBfUmVhY3QkdXNlU3RhdGVbMV07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYWN0aXZlID0gdHJ1ZTtcblxuICAgIGlmICghc3VwcG9ydE1hdGNoTWVkaWEpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgdmFyIHF1ZXJ5TGlzdCA9IG1hdGNoTWVkaWEocXVlcnkpO1xuXG4gICAgdmFyIHVwZGF0ZU1hdGNoID0gZnVuY3Rpb24gdXBkYXRlTWF0Y2goKSB7XG4gICAgICAvLyBXb3JrYXJvdW5kIFNhZmFyaSB3cm9uZyBpbXBsZW1lbnRhdGlvbiBvZiBtYXRjaE1lZGlhXG4gICAgICAvLyBUT0RPIGNhbiB3ZSByZW1vdmUgaXQ/XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbXVpLW9yZy9tYXRlcmlhbC11aS9wdWxsLzE3MzE1I2lzc3VlY29tbWVudC01MjgyODY2NzdcbiAgICAgIGlmIChhY3RpdmUpIHtcbiAgICAgICAgc2V0TWF0Y2gocXVlcnlMaXN0Lm1hdGNoZXMpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB1cGRhdGVNYXRjaCgpO1xuICAgIHF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcih1cGRhdGVNYXRjaCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuICAgICAgcXVlcnlMaXN0LnJlbW92ZUxpc3RlbmVyKHVwZGF0ZU1hdGNoKTtcbiAgICB9O1xuICB9LCBbcXVlcnksIG1hdGNoTWVkaWEsIHN1cHBvcnRNYXRjaE1lZGlhXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBSZWFjdC51c2VEZWJ1Z1ZhbHVlKHtcbiAgICAgIHF1ZXJ5OiBxdWVyeSxcbiAgICAgIG1hdGNoOiBtYXRjaFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoO1xufSIsInZhciBzYWZlSXNOYU4gPSBOdW1iZXIuaXNOYU4gfHxcbiAgICBmdW5jdGlvbiBwb255ZmlsbCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJiB2YWx1ZSAhPT0gdmFsdWU7XG4gICAgfTtcbmZ1bmN0aW9uIGlzRXF1YWwoZmlyc3QsIHNlY29uZCkge1xuICAgIGlmIChmaXJzdCA9PT0gc2Vjb25kKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoc2FmZUlzTmFOKGZpcnN0KSAmJiBzYWZlSXNOYU4oc2Vjb25kKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gYXJlSW5wdXRzRXF1YWwobmV3SW5wdXRzLCBsYXN0SW5wdXRzKSB7XG4gICAgaWYgKG5ld0lucHV0cy5sZW5ndGggIT09IGxhc3RJbnB1dHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZXdJbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsKG5ld0lucHV0c1tpXSwgbGFzdElucHV0c1tpXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gbWVtb2l6ZU9uZShyZXN1bHRGbiwgaXNFcXVhbCkge1xuICAgIGlmIChpc0VxdWFsID09PSB2b2lkIDApIHsgaXNFcXVhbCA9IGFyZUlucHV0c0VxdWFsOyB9XG4gICAgdmFyIGxhc3RUaGlzO1xuICAgIHZhciBsYXN0QXJncyA9IFtdO1xuICAgIHZhciBsYXN0UmVzdWx0O1xuICAgIHZhciBjYWxsZWRPbmNlID0gZmFsc2U7XG4gICAgZnVuY3Rpb24gbWVtb2l6ZWQoKSB7XG4gICAgICAgIHZhciBuZXdBcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBuZXdBcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbGxlZE9uY2UgJiYgbGFzdFRoaXMgPT09IHRoaXMgJiYgaXNFcXVhbChuZXdBcmdzLCBsYXN0QXJncykpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0UmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIGxhc3RSZXN1bHQgPSByZXN1bHRGbi5hcHBseSh0aGlzLCBuZXdBcmdzKTtcbiAgICAgICAgY2FsbGVkT25jZSA9IHRydWU7XG4gICAgICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICAgICAgbGFzdEFyZ3MgPSBuZXdBcmdzO1xuICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplT25lO1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBtZW1vaXplT25lIGZyb20gJ21lbW9pemUtb25lJztcbmltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5cbi8vIEFuaW1hdGlvbiBmcmFtZSBiYXNlZCBpbXBsZW1lbnRhdGlvbiBvZiBzZXRUaW1lb3V0LlxuLy8gSW5zcGlyZWQgYnkgSm9lIExhbWJlcnQsIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL2pvZWxhbWJlcnQvMTAwMjExNiNmaWxlLXJlcXVlc3R0aW1lb3V0LWpzXG52YXIgaGFzTmF0aXZlUGVyZm9ybWFuY2VOb3cgPSB0eXBlb2YgcGVyZm9ybWFuY2UgPT09ICdvYmplY3QnICYmIHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPT09ICdmdW5jdGlvbic7XG52YXIgbm93ID0gaGFzTmF0aXZlUGVyZm9ybWFuY2VOb3cgPyBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBwZXJmb3JtYW5jZS5ub3coKTtcbn0gOiBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBEYXRlLm5vdygpO1xufTtcbmZ1bmN0aW9uIGNhbmNlbFRpbWVvdXQodGltZW91dElEKSB7XG4gIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRpbWVvdXRJRC5pZCk7XG59XG5mdW5jdGlvbiByZXF1ZXN0VGltZW91dChjYWxsYmFjaywgZGVsYXkpIHtcbiAgdmFyIHN0YXJ0ID0gbm93KCk7XG5cbiAgZnVuY3Rpb24gdGljaygpIHtcbiAgICBpZiAobm93KCkgLSBzdGFydCA+PSBkZWxheSkge1xuICAgICAgY2FsbGJhY2suY2FsbChudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dElELmlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRpY2spO1xuICAgIH1cbiAgfVxuXG4gIHZhciB0aW1lb3V0SUQgPSB7XG4gICAgaWQ6IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aWNrKVxuICB9O1xuICByZXR1cm4gdGltZW91dElEO1xufVxuXG52YXIgc2l6ZSA9IC0xOyAvLyBUaGlzIHV0aWxpdHkgY29waWVkIGZyb20gXCJkb20taGVscGVyc1wiIHBhY2thZ2UuXG5cbmZ1bmN0aW9uIGdldFNjcm9sbGJhclNpemUocmVjYWxjdWxhdGUpIHtcbiAgaWYgKHJlY2FsY3VsYXRlID09PSB2b2lkIDApIHtcbiAgICByZWNhbGN1bGF0ZSA9IGZhbHNlO1xuICB9XG5cbiAgaWYgKHNpemUgPT09IC0xIHx8IHJlY2FsY3VsYXRlKSB7XG4gICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBzdHlsZSA9IGRpdi5zdHlsZTtcbiAgICBzdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgICBzdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gICAgc3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdik7XG4gICAgc2l6ZSA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRpdik7XG4gIH1cblxuICByZXR1cm4gc2l6ZTtcbn1cbnZhciBjYWNoZWRSVExSZXN1bHQgPSBudWxsOyAvLyBUUklDS1kgQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzY3JvbGxMZWZ0IHNob3VsZCBiZSBuZWdhdGl2ZSBmb3IgUlRMIGFsaWduZWQgZWxlbWVudHMuXG4vLyBDaHJvbWUgZG9lcyBub3Qgc2VlbSB0byBhZGhlcmU7IGl0cyBzY3JvbGxMZWZ0IHZhbHVlcyBhcmUgcG9zaXRpdmUgKG1lYXN1cmVkIHJlbGF0aXZlIHRvIHRoZSBsZWZ0KS5cbi8vIFNhZmFyaSdzIGVsYXN0aWMgYm91bmNlIG1ha2VzIGRldGVjdGluZyB0aGlzIGV2ZW4gbW9yZSBjb21wbGljYXRlZCB3cnQgcG90ZW50aWFsIGZhbHNlIHBvc2l0aXZlcy5cbi8vIFRoZSBzYWZlc3Qgd2F5IHRvIGNoZWNrIHRoaXMgaXMgdG8gaW50ZW50aW9uYWxseSBzZXQgYSBuZWdhdGl2ZSBvZmZzZXQsXG4vLyBhbmQgdGhlbiB2ZXJpZnkgdGhhdCB0aGUgc3Vic2VxdWVudCBcInNjcm9sbFwiIGV2ZW50IG1hdGNoZXMgdGhlIG5lZ2F0aXZlIG9mZnNldC5cbi8vIElmIGl0IGRvZXMgbm90IG1hdGNoLCB0aGVuIHdlIGNhbiBhc3N1bWUgYSBub24tc3RhbmRhcmQgUlRMIHNjcm9sbCBpbXBsZW1lbnRhdGlvbi5cblxuZnVuY3Rpb24gZ2V0UlRMT2Zmc2V0VHlwZShyZWNhbGN1bGF0ZSkge1xuICBpZiAocmVjYWxjdWxhdGUgPT09IHZvaWQgMCkge1xuICAgIHJlY2FsY3VsYXRlID0gZmFsc2U7XG4gIH1cblxuICBpZiAoY2FjaGVkUlRMUmVzdWx0ID09PSBudWxsIHx8IHJlY2FsY3VsYXRlKSB7XG4gICAgdmFyIG91dGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFyIG91dGVyU3R5bGUgPSBvdXRlckRpdi5zdHlsZTtcbiAgICBvdXRlclN0eWxlLndpZHRoID0gJzUwcHgnO1xuICAgIG91dGVyU3R5bGUuaGVpZ2h0ID0gJzUwcHgnO1xuICAgIG91dGVyU3R5bGUub3ZlcmZsb3cgPSAnc2Nyb2xsJztcbiAgICBvdXRlclN0eWxlLmRpcmVjdGlvbiA9ICdydGwnO1xuICAgIHZhciBpbm5lckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhciBpbm5lclN0eWxlID0gaW5uZXJEaXYuc3R5bGU7XG4gICAgaW5uZXJTdHlsZS53aWR0aCA9ICcxMDBweCc7XG4gICAgaW5uZXJTdHlsZS5oZWlnaHQgPSAnMTAwcHgnO1xuICAgIG91dGVyRGl2LmFwcGVuZENoaWxkKGlubmVyRGl2KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG91dGVyRGl2KTtcblxuICAgIGlmIChvdXRlckRpdi5zY3JvbGxMZWZ0ID4gMCkge1xuICAgICAgY2FjaGVkUlRMUmVzdWx0ID0gJ3Bvc2l0aXZlLWRlc2NlbmRpbmcnO1xuICAgIH0gZWxzZSB7XG4gICAgICBvdXRlckRpdi5zY3JvbGxMZWZ0ID0gMTtcblxuICAgICAgaWYgKG91dGVyRGl2LnNjcm9sbExlZnQgPT09IDApIHtcbiAgICAgICAgY2FjaGVkUlRMUmVzdWx0ID0gJ25lZ2F0aXZlJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhY2hlZFJUTFJlc3VsdCA9ICdwb3NpdGl2ZS1hc2NlbmRpbmcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQob3V0ZXJEaXYpO1xuICAgIHJldHVybiBjYWNoZWRSVExSZXN1bHQ7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkUlRMUmVzdWx0O1xufVxuXG52YXIgSVNfU0NST0xMSU5HX0RFQk9VTkNFX0lOVEVSVkFMID0gMTUwO1xuXG52YXIgZGVmYXVsdEl0ZW1LZXkgPSBmdW5jdGlvbiBkZWZhdWx0SXRlbUtleShfcmVmKSB7XG4gIHZhciBjb2x1bW5JbmRleCA9IF9yZWYuY29sdW1uSW5kZXgsXG4gICAgICBkYXRhID0gX3JlZi5kYXRhLFxuICAgICAgcm93SW5kZXggPSBfcmVmLnJvd0luZGV4O1xuICByZXR1cm4gcm93SW5kZXggKyBcIjpcIiArIGNvbHVtbkluZGV4O1xufTsgLy8gSW4gREVWIG1vZGUsIHRoaXMgU2V0IGhlbHBzIHVzIG9ubHkgbG9nIGEgd2FybmluZyBvbmNlIHBlciBjb21wb25lbnQgaW5zdGFuY2UuXG4vLyBUaGlzIGF2b2lkcyBzcGFtbWluZyB0aGUgY29uc29sZSBldmVyeSB0aW1lIGEgcmVuZGVyIGhhcHBlbnMuXG5cblxudmFyIGRldldhcm5pbmdzT3ZlcnNjYW5Db3VudCA9IG51bGw7XG52YXIgZGV2V2FybmluZ3NPdmVyc2NhblJvd3NDb2x1bW5zQ291bnQgPSBudWxsO1xudmFyIGRldldhcm5pbmdzVGFnTmFtZSA9IG51bGw7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LldlYWtTZXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgZGV2V2FybmluZ3NPdmVyc2NhbkNvdW50ID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgbmV3IFdlYWtTZXQoKTtcbiAgICBkZXZXYXJuaW5nc092ZXJzY2FuUm93c0NvbHVtbnNDb3VudCA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIG5ldyBXZWFrU2V0KCk7XG4gICAgZGV2V2FybmluZ3NUYWdOYW1lID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgbmV3IFdlYWtTZXQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVHcmlkQ29tcG9uZW50KF9yZWYyKSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBnZXRDb2x1bW5PZmZzZXQgPSBfcmVmMi5nZXRDb2x1bW5PZmZzZXQsXG4gICAgICBnZXRDb2x1bW5TdGFydEluZGV4Rm9yT2Zmc2V0ID0gX3JlZjIuZ2V0Q29sdW1uU3RhcnRJbmRleEZvck9mZnNldCxcbiAgICAgIGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXggPSBfcmVmMi5nZXRDb2x1bW5TdG9wSW5kZXhGb3JTdGFydEluZGV4LFxuICAgICAgZ2V0Q29sdW1uV2lkdGggPSBfcmVmMi5nZXRDb2x1bW5XaWR0aCxcbiAgICAgIGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0ID0gX3JlZjIuZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQsXG4gICAgICBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoID0gX3JlZjIuZ2V0RXN0aW1hdGVkVG90YWxXaWR0aCxcbiAgICAgIGdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudCA9IF9yZWYyLmdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudCxcbiAgICAgIGdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudCA9IF9yZWYyLmdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudCxcbiAgICAgIGdldFJvd0hlaWdodCA9IF9yZWYyLmdldFJvd0hlaWdodCxcbiAgICAgIGdldFJvd09mZnNldCA9IF9yZWYyLmdldFJvd09mZnNldCxcbiAgICAgIGdldFJvd1N0YXJ0SW5kZXhGb3JPZmZzZXQgPSBfcmVmMi5nZXRSb3dTdGFydEluZGV4Rm9yT2Zmc2V0LFxuICAgICAgZ2V0Um93U3RvcEluZGV4Rm9yU3RhcnRJbmRleCA9IF9yZWYyLmdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXgsXG4gICAgICBpbml0SW5zdGFuY2VQcm9wcyA9IF9yZWYyLmluaXRJbnN0YW5jZVByb3BzLFxuICAgICAgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZSA9IF9yZWYyLnNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UsXG4gICAgICB2YWxpZGF0ZVByb3BzID0gX3JlZjIudmFsaWRhdGVQcm9wcztcbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1B1cmVDb21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHNMb29zZShHcmlkLCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgICAvLyBBbHdheXMgdXNlIGV4cGxpY2l0IGNvbnN0cnVjdG9yIGZvciBSZWFjdCBjb21wb25lbnRzLlxuICAgIC8vIEl0IHByb2R1Y2VzIGxlc3MgY29kZSBhZnRlciB0cmFuc3BpbGF0aW9uLiAoIzI2KVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWNvbnN0cnVjdG9yXG4gICAgZnVuY3Rpb24gR3JpZChwcm9wcykge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfdGhpcyA9IF9QdXJlQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICBfdGhpcy5faW5zdGFuY2VQcm9wcyA9IGluaXRJbnN0YW5jZVByb3BzKF90aGlzLnByb3BzLCBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSk7XG4gICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCA9IG51bGw7XG4gICAgICBfdGhpcy5fb3V0ZXJSZWYgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgaW5zdGFuY2U6IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLFxuICAgICAgICBpc1Njcm9sbGluZzogZmFsc2UsXG4gICAgICAgIGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb246ICdmb3J3YXJkJyxcbiAgICAgICAgc2Nyb2xsTGVmdDogdHlwZW9mIF90aGlzLnByb3BzLmluaXRpYWxTY3JvbGxMZWZ0ID09PSAnbnVtYmVyJyA/IF90aGlzLnByb3BzLmluaXRpYWxTY3JvbGxMZWZ0IDogMCxcbiAgICAgICAgc2Nyb2xsVG9wOiB0eXBlb2YgX3RoaXMucHJvcHMuaW5pdGlhbFNjcm9sbFRvcCA9PT0gJ251bWJlcicgPyBfdGhpcy5wcm9wcy5pbml0aWFsU2Nyb2xsVG9wIDogMCxcbiAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiBmYWxzZSxcbiAgICAgICAgdmVydGljYWxTY3JvbGxEaXJlY3Rpb246ICdmb3J3YXJkJ1xuICAgICAgfTtcbiAgICAgIF90aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkID0gdm9pZCAwO1xuICAgICAgX3RoaXMuX2NhbGxPbkl0ZW1zUmVuZGVyZWQgPSBtZW1vaXplT25lKGZ1bmN0aW9uIChvdmVyc2NhbkNvbHVtblN0YXJ0SW5kZXgsIG92ZXJzY2FuQ29sdW1uU3RvcEluZGV4LCBvdmVyc2NhblJvd1N0YXJ0SW5kZXgsIG92ZXJzY2FuUm93U3RvcEluZGV4LCB2aXNpYmxlQ29sdW1uU3RhcnRJbmRleCwgdmlzaWJsZUNvbHVtblN0b3BJbmRleCwgdmlzaWJsZVJvd1N0YXJ0SW5kZXgsIHZpc2libGVSb3dTdG9wSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uSXRlbXNSZW5kZXJlZCh7XG4gICAgICAgICAgb3ZlcnNjYW5Db2x1bW5TdGFydEluZGV4OiBvdmVyc2NhbkNvbHVtblN0YXJ0SW5kZXgsXG4gICAgICAgICAgb3ZlcnNjYW5Db2x1bW5TdG9wSW5kZXg6IG92ZXJzY2FuQ29sdW1uU3RvcEluZGV4LFxuICAgICAgICAgIG92ZXJzY2FuUm93U3RhcnRJbmRleDogb3ZlcnNjYW5Sb3dTdGFydEluZGV4LFxuICAgICAgICAgIG92ZXJzY2FuUm93U3RvcEluZGV4OiBvdmVyc2NhblJvd1N0b3BJbmRleCxcbiAgICAgICAgICB2aXNpYmxlQ29sdW1uU3RhcnRJbmRleDogdmlzaWJsZUNvbHVtblN0YXJ0SW5kZXgsXG4gICAgICAgICAgdmlzaWJsZUNvbHVtblN0b3BJbmRleDogdmlzaWJsZUNvbHVtblN0b3BJbmRleCxcbiAgICAgICAgICB2aXNpYmxlUm93U3RhcnRJbmRleDogdmlzaWJsZVJvd1N0YXJ0SW5kZXgsXG4gICAgICAgICAgdmlzaWJsZVJvd1N0b3BJbmRleDogdmlzaWJsZVJvd1N0b3BJbmRleFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuX2NhbGxPblNjcm9sbCA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9jYWxsT25TY3JvbGwgPSBtZW1vaXplT25lKGZ1bmN0aW9uIChzY3JvbGxMZWZ0LCBzY3JvbGxUb3AsIGhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24sIHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uLCBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uU2Nyb2xsKHtcbiAgICAgICAgICBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uOiBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uLFxuICAgICAgICAgIHNjcm9sbExlZnQ6IHNjcm9sbExlZnQsXG4gICAgICAgICAgc2Nyb2xsVG9wOiBzY3JvbGxUb3AsXG4gICAgICAgICAgdmVydGljYWxTY3JvbGxEaXJlY3Rpb246IHZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uLFxuICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlID0gdm9pZCAwO1xuXG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlID0gZnVuY3Rpb24gKHJvd0luZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGNvbHVtbldpZHRoID0gX3RoaXMkcHJvcHMuY29sdW1uV2lkdGgsXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRwcm9wcy5kaXJlY3Rpb24sXG4gICAgICAgICAgICByb3dIZWlnaHQgPSBfdGhpcyRwcm9wcy5yb3dIZWlnaHQ7XG5cbiAgICAgICAgdmFyIGl0ZW1TdHlsZUNhY2hlID0gX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlKHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgY29sdW1uV2lkdGgsIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgZGlyZWN0aW9uLCBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlICYmIHJvd0hlaWdodCk7XG5cbiAgICAgICAgdmFyIGtleSA9IHJvd0luZGV4ICsgXCI6XCIgKyBjb2x1bW5JbmRleDtcbiAgICAgICAgdmFyIHN0eWxlO1xuXG4gICAgICAgIGlmIChpdGVtU3R5bGVDYWNoZS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgc3R5bGUgPSBpdGVtU3R5bGVDYWNoZVtrZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBfb2Zmc2V0ID0gZ2V0Q29sdW1uT2Zmc2V0KF90aGlzLnByb3BzLCBjb2x1bW5JbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpO1xuXG4gICAgICAgICAgdmFyIGlzUnRsID0gZGlyZWN0aW9uID09PSAncnRsJztcbiAgICAgICAgICBpdGVtU3R5bGVDYWNoZVtrZXldID0gc3R5bGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6IGlzUnRsID8gdW5kZWZpbmVkIDogX29mZnNldCxcbiAgICAgICAgICAgIHJpZ2h0OiBpc1J0bCA/IF9vZmZzZXQgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0b3A6IGdldFJvd09mZnNldChfdGhpcy5wcm9wcywgcm93SW5kZXgsIF90aGlzLl9pbnN0YW5jZVByb3BzKSxcbiAgICAgICAgICAgIGhlaWdodDogZ2V0Um93SGVpZ2h0KF90aGlzLnByb3BzLCByb3dJbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpLFxuICAgICAgICAgICAgd2lkdGg6IGdldENvbHVtbldpZHRoKF90aGlzLnByb3BzLCBjb2x1bW5JbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZSA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZSA9IG1lbW9pemVPbmUoZnVuY3Rpb24gKF8sIF9fLCBfX18pIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfSk7XG5cbiAgICAgIF90aGlzLl9vblNjcm9sbCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB2YXIgX2V2ZW50JGN1cnJlbnRUYXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgICAgY2xpZW50SGVpZ2h0ID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgICAgY2xpZW50V2lkdGggPSBfZXZlbnQkY3VycmVudFRhcmdldC5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgIHNjcm9sbExlZnQgPSBfZXZlbnQkY3VycmVudFRhcmdldC5zY3JvbGxMZWZ0LFxuICAgICAgICAgICAgc2Nyb2xsVG9wID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0ID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgc2Nyb2xsV2lkdGggPSBfZXZlbnQkY3VycmVudFRhcmdldC5zY3JvbGxXaWR0aDtcblxuICAgICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICAgICAgaWYgKHByZXZTdGF0ZS5zY3JvbGxMZWZ0ID09PSBzY3JvbGxMZWZ0ICYmIHByZXZTdGF0ZS5zY3JvbGxUb3AgPT09IHNjcm9sbFRvcCkge1xuICAgICAgICAgICAgLy8gU2Nyb2xsIHBvc2l0aW9uIG1heSBoYXZlIGJlZW4gdXBkYXRlZCBieSBjRE0vY0RVLFxuICAgICAgICAgICAgLy8gSW4gd2hpY2ggY2FzZSB3ZSBkb24ndCBuZWVkIHRvIHRyaWdnZXIgYW5vdGhlciByZW5kZXIsXG4gICAgICAgICAgICAvLyBBbmQgd2UgZG9uJ3Qgd2FudCB0byB1cGRhdGUgc3RhdGUuaXNTY3JvbGxpbmcuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gX3RoaXMucHJvcHMuZGlyZWN0aW9uOyAvLyBUUklDS1kgQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzY3JvbGxMZWZ0IHNob3VsZCBiZSBuZWdhdGl2ZSBmb3IgUlRMIGFsaWduZWQgZWxlbWVudHMuXG4gICAgICAgICAgLy8gVGhpcyBpcyBub3QgdGhlIGNhc2UgZm9yIGFsbCBicm93c2VycyB0aG91Z2ggKGUuZy4gQ2hyb21lIHJlcG9ydHMgdmFsdWVzIGFzIHBvc2l0aXZlLCBtZWFzdXJlZCByZWxhdGl2ZSB0byB0aGUgbGVmdCkuXG4gICAgICAgICAgLy8gSXQncyBhbHNvIGVhc2llciBmb3IgdGhpcyBjb21wb25lbnQgaWYgd2UgY29udmVydCBvZmZzZXRzIHRvIHRoZSBzYW1lIGZvcm1hdCBhcyB0aGV5IHdvdWxkIGJlIGluIGZvciBsdHIuXG4gICAgICAgICAgLy8gU28gdGhlIHNpbXBsZXN0IHNvbHV0aW9uIGlzIHRvIGRldGVybWluZSB3aGljaCBicm93c2VyIGJlaGF2aW9yIHdlJ3JlIGRlYWxpbmcgd2l0aCwgYW5kIGNvbnZlcnQgYmFzZWQgb24gaXQuXG5cbiAgICAgICAgICB2YXIgY2FsY3VsYXRlZFNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZ2V0UlRMT2Zmc2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ25lZ2F0aXZlJzpcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVkU2Nyb2xsTGVmdCA9IC1zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ3Bvc2l0aXZlLWRlc2NlbmRpbmcnOlxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRTY3JvbGxMZWZ0ID0gc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCAtIHNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSAvLyBQcmV2ZW50IFNhZmFyaSdzIGVsYXN0aWMgc2Nyb2xsaW5nIGZyb20gY2F1c2luZyB2aXN1YWwgc2hha2luZyB3aGVuIHNjcm9sbGluZyBwYXN0IGJvdW5kcy5cblxuXG4gICAgICAgICAgY2FsY3VsYXRlZFNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihjYWxjdWxhdGVkU2Nyb2xsTGVmdCwgc2Nyb2xsV2lkdGggLSBjbGllbnRXaWR0aCkpO1xuICAgICAgICAgIHZhciBjYWxjdWxhdGVkU2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oc2Nyb2xsVG9wLCBzY3JvbGxIZWlnaHQgLSBjbGllbnRIZWlnaHQpKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNTY3JvbGxpbmc6IHRydWUsXG4gICAgICAgICAgICBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uOiBwcmV2U3RhdGUuc2Nyb2xsTGVmdCA8IHNjcm9sbExlZnQgPyAnZm9yd2FyZCcgOiAnYmFja3dhcmQnLFxuICAgICAgICAgICAgc2Nyb2xsTGVmdDogY2FsY3VsYXRlZFNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxUb3A6IGNhbGN1bGF0ZWRTY3JvbGxUb3AsXG4gICAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbFRvcCA8IHNjcm9sbFRvcCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCcsXG4gICAgICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ6IGZhbHNlXG4gICAgICAgICAgfTtcbiAgICAgICAgfSwgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdEZWJvdW5jZWQpO1xuICAgICAgfTtcblxuICAgICAgX3RoaXMuX291dGVyUmVmU2V0dGVyID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgICB2YXIgb3V0ZXJSZWYgPSBfdGhpcy5wcm9wcy5vdXRlclJlZjtcbiAgICAgICAgX3RoaXMuX291dGVyUmVmID0gcmVmO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygb3V0ZXJSZWYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBvdXRlclJlZihyZWYpO1xuICAgICAgICB9IGVsc2UgaWYgKG91dGVyUmVmICE9IG51bGwgJiYgdHlwZW9mIG91dGVyUmVmID09PSAnb2JqZWN0JyAmJiBvdXRlclJlZi5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudCcpKSB7XG4gICAgICAgICAgb3V0ZXJSZWYuY3VycmVudCA9IHJlZjtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdEZWJvdW5jZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNhbmNlbFRpbWVvdXQoX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgPSByZXF1ZXN0VGltZW91dChfdGhpcy5fcmVzZXRJc1Njcm9sbGluZywgSVNfU0NST0xMSU5HX0RFQk9VTkNFX0lOVEVSVkFMKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCA9IG51bGw7XG5cbiAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGlzU2Nyb2xsaW5nOiBmYWxzZVxuICAgICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gQ2xlYXIgc3R5bGUgY2FjaGUgYWZ0ZXIgc3RhdGUgdXBkYXRlIGhhcyBiZWVuIGNvbW1pdHRlZC5cbiAgICAgICAgICAvLyBUaGlzIHdheSB3ZSBkb24ndCBicmVhayBwdXJlIHNDVSBmb3IgaXRlbXMgdGhhdCBkb24ndCB1c2UgaXNTY3JvbGxpbmcgcGFyYW0uXG4gICAgICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlKC0xKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgR3JpZC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgPSBmdW5jdGlvbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpIHtcbiAgICAgIHZhbGlkYXRlU2hhcmVkUHJvcHMobmV4dFByb3BzLCBwcmV2U3RhdGUpO1xuICAgICAgdmFsaWRhdGVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHZhciBfcHJvdG8gPSBHcmlkLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5zY3JvbGxUbyA9IGZ1bmN0aW9uIHNjcm9sbFRvKF9yZWYzKSB7XG4gICAgICB2YXIgc2Nyb2xsTGVmdCA9IF9yZWYzLnNjcm9sbExlZnQsXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3JlZjMuc2Nyb2xsVG9wO1xuXG4gICAgICBpZiAoc2Nyb2xsTGVmdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBzY3JvbGxMZWZ0KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNjcm9sbFRvcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIHNjcm9sbFRvcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAoc2Nyb2xsTGVmdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IHByZXZTdGF0ZS5zY3JvbGxMZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjcm9sbFRvcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2Nyb2xsVG9wID0gcHJldlN0YXRlLnNjcm9sbFRvcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmV2U3RhdGUuc2Nyb2xsTGVmdCA9PT0gc2Nyb2xsTGVmdCAmJiBwcmV2U3RhdGUuc2Nyb2xsVG9wID09PSBzY3JvbGxUb3ApIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbExlZnQgPCBzY3JvbGxMZWZ0ID8gJ2ZvcndhcmQnIDogJ2JhY2t3YXJkJyxcbiAgICAgICAgICBzY3JvbGxMZWZ0OiBzY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbFRvcDogc2Nyb2xsVG9wLFxuICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogdHJ1ZSxcbiAgICAgICAgICB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbFRvcCA8IHNjcm9sbFRvcCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCdcbiAgICAgICAgfTtcbiAgICAgIH0sIHRoaXMuX3Jlc2V0SXNTY3JvbGxpbmdEZWJvdW5jZWQpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uc2Nyb2xsVG9JdGVtID0gZnVuY3Rpb24gc2Nyb2xsVG9JdGVtKF9yZWY0KSB7XG4gICAgICB2YXIgX3JlZjQkYWxpZ24gPSBfcmVmNC5hbGlnbixcbiAgICAgICAgICBhbGlnbiA9IF9yZWY0JGFsaWduID09PSB2b2lkIDAgPyAnYXV0bycgOiBfcmVmNCRhbGlnbixcbiAgICAgICAgICBjb2x1bW5JbmRleCA9IF9yZWY0LmNvbHVtbkluZGV4LFxuICAgICAgICAgIHJvd0luZGV4ID0gX3JlZjQucm93SW5kZXg7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb2x1bW5Db3VudCA9IF90aGlzJHByb3BzMi5jb2x1bW5Db3VudCxcbiAgICAgICAgICBoZWlnaHQgPSBfdGhpcyRwcm9wczIuaGVpZ2h0LFxuICAgICAgICAgIHJvd0NvdW50ID0gX3RoaXMkcHJvcHMyLnJvd0NvdW50LFxuICAgICAgICAgIHdpZHRoID0gX3RoaXMkcHJvcHMyLndpZHRoO1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzY3JvbGxMZWZ0ID0gX3RoaXMkc3RhdGUuc2Nyb2xsTGVmdCxcbiAgICAgICAgICBzY3JvbGxUb3AgPSBfdGhpcyRzdGF0ZS5zY3JvbGxUb3A7XG4gICAgICB2YXIgc2Nyb2xsYmFyU2l6ZSA9IGdldFNjcm9sbGJhclNpemUoKTtcblxuICAgICAgaWYgKGNvbHVtbkluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29sdW1uSW5kZXggPSBNYXRoLm1heCgwLCBNYXRoLm1pbihjb2x1bW5JbmRleCwgY29sdW1uQ291bnQgLSAxKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyb3dJbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJvd0luZGV4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4ocm93SW5kZXgsIHJvd0NvdW50IC0gMSkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZXN0aW1hdGVkVG90YWxIZWlnaHQgPSBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodCh0aGlzLnByb3BzLCB0aGlzLl9pbnN0YW5jZVByb3BzKTtcbiAgICAgIHZhciBlc3RpbWF0ZWRUb3RhbFdpZHRoID0gZ2V0RXN0aW1hdGVkVG90YWxXaWR0aCh0aGlzLnByb3BzLCB0aGlzLl9pbnN0YW5jZVByb3BzKTsgLy8gVGhlIHNjcm9sbGJhciBzaXplIHNob3VsZCBiZSBjb25zaWRlcmVkIHdoZW4gc2Nyb2xsaW5nIGFuIGl0ZW0gaW50byB2aWV3LFxuICAgICAgLy8gdG8gZW5zdXJlIGl0J3MgZnVsbHkgdmlzaWJsZS5cbiAgICAgIC8vIEJ1dCB3ZSBvbmx5IG5lZWQgdG8gYWNjb3VudCBmb3IgaXRzIHNpemUgd2hlbiBpdCdzIGFjdHVhbGx5IHZpc2libGUuXG5cbiAgICAgIHZhciBob3Jpem9udGFsU2Nyb2xsYmFyU2l6ZSA9IGVzdGltYXRlZFRvdGFsV2lkdGggPiB3aWR0aCA/IHNjcm9sbGJhclNpemUgOiAwO1xuICAgICAgdmFyIHZlcnRpY2FsU2Nyb2xsYmFyU2l6ZSA9IGVzdGltYXRlZFRvdGFsSGVpZ2h0ID4gaGVpZ2h0ID8gc2Nyb2xsYmFyU2l6ZSA6IDA7XG4gICAgICB0aGlzLnNjcm9sbFRvKHtcbiAgICAgICAgc2Nyb2xsTGVmdDogY29sdW1uSW5kZXggIT09IHVuZGVmaW5lZCA/IGdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudCh0aGlzLnByb3BzLCBjb2x1bW5JbmRleCwgYWxpZ24sIHNjcm9sbExlZnQsIHRoaXMuX2luc3RhbmNlUHJvcHMsIHZlcnRpY2FsU2Nyb2xsYmFyU2l6ZSkgOiBzY3JvbGxMZWZ0LFxuICAgICAgICBzY3JvbGxUb3A6IHJvd0luZGV4ICE9PSB1bmRlZmluZWQgPyBnZXRPZmZzZXRGb3JSb3dBbmRBbGlnbm1lbnQodGhpcy5wcm9wcywgcm93SW5kZXgsIGFsaWduLCBzY3JvbGxUb3AsIHRoaXMuX2luc3RhbmNlUHJvcHMsIGhvcml6b250YWxTY3JvbGxiYXJTaXplKSA6IHNjcm9sbFRvcFxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaW5pdGlhbFNjcm9sbExlZnQgPSBfdGhpcyRwcm9wczMuaW5pdGlhbFNjcm9sbExlZnQsXG4gICAgICAgICAgaW5pdGlhbFNjcm9sbFRvcCA9IF90aGlzJHByb3BzMy5pbml0aWFsU2Nyb2xsVG9wO1xuXG4gICAgICBpZiAodGhpcy5fb3V0ZXJSZWYgIT0gbnVsbCkge1xuICAgICAgICB2YXIgb3V0ZXJSZWYgPSB0aGlzLl9vdXRlclJlZjtcblxuICAgICAgICBpZiAodHlwZW9mIGluaXRpYWxTY3JvbGxMZWZ0ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBpbml0aWFsU2Nyb2xsTGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgaW5pdGlhbFNjcm9sbFRvcCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICBvdXRlclJlZi5zY3JvbGxUb3AgPSBpbml0aWFsU2Nyb2xsVG9wO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhbGxQcm9wc0NhbGxiYWNrcygpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IHRoaXMucHJvcHMuZGlyZWN0aW9uO1xuICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IF90aGlzJHN0YXRlMi5zY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbFRvcCA9IF90aGlzJHN0YXRlMi5zY3JvbGxUb3AsXG4gICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkID0gX3RoaXMkc3RhdGUyLnNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDtcblxuICAgICAgaWYgKHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCAmJiB0aGlzLl9vdXRlclJlZiAhPSBudWxsKSB7XG4gICAgICAgIC8vIFRSSUNLWSBBY2NvcmRpbmcgdG8gdGhlIHNwZWMsIHNjcm9sbExlZnQgc2hvdWxkIGJlIG5lZ2F0aXZlIGZvciBSVEwgYWxpZ25lZCBlbGVtZW50cy5cbiAgICAgICAgLy8gVGhpcyBpcyBub3QgdGhlIGNhc2UgZm9yIGFsbCBicm93c2VycyB0aG91Z2ggKGUuZy4gQ2hyb21lIHJlcG9ydHMgdmFsdWVzIGFzIHBvc2l0aXZlLCBtZWFzdXJlZCByZWxhdGl2ZSB0byB0aGUgbGVmdCkuXG4gICAgICAgIC8vIFNvIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGJyb3dzZXIgYmVoYXZpb3Igd2UncmUgZGVhbGluZyB3aXRoLCBhbmQgbWltaWMgaXQuXG4gICAgICAgIHZhciBvdXRlclJlZiA9IHRoaXMuX291dGVyUmVmO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAgICAgc3dpdGNoIChnZXRSVExPZmZzZXRUeXBlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ25lZ2F0aXZlJzpcbiAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IC1zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAncG9zaXRpdmUtYXNjZW5kaW5nJzpcbiAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQ7XG4gICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICB2YXIgY2xpZW50V2lkdGggPSBvdXRlclJlZi5jbGllbnRXaWR0aCxcbiAgICAgICAgICAgICAgICAgIHNjcm9sbFdpZHRoID0gb3V0ZXJSZWYuc2Nyb2xsV2lkdGg7XG4gICAgICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIC0gc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBNYXRoLm1heCgwLCBzY3JvbGxMZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dGVyUmVmLnNjcm9sbFRvcCA9IE1hdGgubWF4KDAsIHNjcm9sbFRvcCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhbGxQcm9wc0NhbGxiYWNrcygpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkICE9PSBudWxsKSB7XG4gICAgICAgIGNhbmNlbFRpbWVvdXQodGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM0ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzNC5jaGlsZHJlbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfdGhpcyRwcm9wczQuY2xhc3NOYW1lLFxuICAgICAgICAgIGNvbHVtbkNvdW50ID0gX3RoaXMkcHJvcHM0LmNvbHVtbkNvdW50LFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzNC5kaXJlY3Rpb24sXG4gICAgICAgICAgaGVpZ2h0ID0gX3RoaXMkcHJvcHM0LmhlaWdodCxcbiAgICAgICAgICBpbm5lclJlZiA9IF90aGlzJHByb3BzNC5pbm5lclJlZixcbiAgICAgICAgICBpbm5lckVsZW1lbnRUeXBlID0gX3RoaXMkcHJvcHM0LmlubmVyRWxlbWVudFR5cGUsXG4gICAgICAgICAgaW5uZXJUYWdOYW1lID0gX3RoaXMkcHJvcHM0LmlubmVyVGFnTmFtZSxcbiAgICAgICAgICBpdGVtRGF0YSA9IF90aGlzJHByb3BzNC5pdGVtRGF0YSxcbiAgICAgICAgICBfdGhpcyRwcm9wczQkaXRlbUtleSA9IF90aGlzJHByb3BzNC5pdGVtS2V5LFxuICAgICAgICAgIGl0ZW1LZXkgPSBfdGhpcyRwcm9wczQkaXRlbUtleSA9PT0gdm9pZCAwID8gZGVmYXVsdEl0ZW1LZXkgOiBfdGhpcyRwcm9wczQkaXRlbUtleSxcbiAgICAgICAgICBvdXRlckVsZW1lbnRUeXBlID0gX3RoaXMkcHJvcHM0Lm91dGVyRWxlbWVudFR5cGUsXG4gICAgICAgICAgb3V0ZXJUYWdOYW1lID0gX3RoaXMkcHJvcHM0Lm91dGVyVGFnTmFtZSxcbiAgICAgICAgICByb3dDb3VudCA9IF90aGlzJHByb3BzNC5yb3dDb3VudCxcbiAgICAgICAgICBzdHlsZSA9IF90aGlzJHByb3BzNC5zdHlsZSxcbiAgICAgICAgICB1c2VJc1Njcm9sbGluZyA9IF90aGlzJHByb3BzNC51c2VJc1Njcm9sbGluZyxcbiAgICAgICAgICB3aWR0aCA9IF90aGlzJHByb3BzNC53aWR0aDtcbiAgICAgIHZhciBpc1Njcm9sbGluZyA9IHRoaXMuc3RhdGUuaXNTY3JvbGxpbmc7XG5cbiAgICAgIHZhciBfdGhpcyRfZ2V0SG9yaXpvbnRhbFIgPSB0aGlzLl9nZXRIb3Jpem9udGFsUmFuZ2VUb1JlbmRlcigpLFxuICAgICAgICAgIGNvbHVtblN0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0SG9yaXpvbnRhbFJbMF0sXG4gICAgICAgICAgY29sdW1uU3RvcEluZGV4ID0gX3RoaXMkX2dldEhvcml6b250YWxSWzFdO1xuXG4gICAgICB2YXIgX3RoaXMkX2dldFZlcnRpY2FsUmFuID0gdGhpcy5fZ2V0VmVydGljYWxSYW5nZVRvUmVuZGVyKCksXG4gICAgICAgICAgcm93U3RhcnRJbmRleCA9IF90aGlzJF9nZXRWZXJ0aWNhbFJhblswXSxcbiAgICAgICAgICByb3dTdG9wSW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW5bMV07XG5cbiAgICAgIHZhciBpdGVtcyA9IFtdO1xuXG4gICAgICBpZiAoY29sdW1uQ291bnQgPiAwICYmIHJvd0NvdW50KSB7XG4gICAgICAgIGZvciAodmFyIF9yb3dJbmRleCA9IHJvd1N0YXJ0SW5kZXg7IF9yb3dJbmRleCA8PSByb3dTdG9wSW5kZXg7IF9yb3dJbmRleCsrKSB7XG4gICAgICAgICAgZm9yICh2YXIgX2NvbHVtbkluZGV4ID0gY29sdW1uU3RhcnRJbmRleDsgX2NvbHVtbkluZGV4IDw9IGNvbHVtblN0b3BJbmRleDsgX2NvbHVtbkluZGV4KyspIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goY3JlYXRlRWxlbWVudChjaGlsZHJlbiwge1xuICAgICAgICAgICAgICBjb2x1bW5JbmRleDogX2NvbHVtbkluZGV4LFxuICAgICAgICAgICAgICBkYXRhOiBpdGVtRGF0YSxcbiAgICAgICAgICAgICAgaXNTY3JvbGxpbmc6IHVzZUlzU2Nyb2xsaW5nID8gaXNTY3JvbGxpbmcgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGtleTogaXRlbUtleSh7XG4gICAgICAgICAgICAgICAgY29sdW1uSW5kZXg6IF9jb2x1bW5JbmRleCxcbiAgICAgICAgICAgICAgICBkYXRhOiBpdGVtRGF0YSxcbiAgICAgICAgICAgICAgICByb3dJbmRleDogX3Jvd0luZGV4XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICByb3dJbmRleDogX3Jvd0luZGV4LFxuICAgICAgICAgICAgICBzdHlsZTogdGhpcy5fZ2V0SXRlbVN0eWxlKF9yb3dJbmRleCwgX2NvbHVtbkluZGV4KVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSAvLyBSZWFkIHRoaXMgdmFsdWUgQUZURVIgaXRlbXMgaGF2ZSBiZWVuIGNyZWF0ZWQsXG4gICAgICAvLyBTbyB0aGVpciBhY3R1YWwgc2l6ZXMgKGlmIHZhcmlhYmxlKSBhcmUgdGFrZW4gaW50byBjb25zaWRlcmF0aW9uLlxuXG5cbiAgICAgIHZhciBlc3RpbWF0ZWRUb3RhbEhlaWdodCA9IGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0KHRoaXMucHJvcHMsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgdmFyIGVzdGltYXRlZFRvdGFsV2lkdGggPSBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoKHRoaXMucHJvcHMsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQob3V0ZXJFbGVtZW50VHlwZSB8fCBvdXRlclRhZ05hbWUgfHwgJ2RpdicsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIG9uU2Nyb2xsOiB0aGlzLl9vblNjcm9sbCxcbiAgICAgICAgcmVmOiB0aGlzLl9vdXRlclJlZlNldHRlcixcbiAgICAgICAgc3R5bGU6IF9leHRlbmRzKHtcbiAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICBoZWlnaHQ6IGhlaWdodCxcbiAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgICBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogJ3RvdWNoJyxcbiAgICAgICAgICB3aWxsQ2hhbmdlOiAndHJhbnNmb3JtJyxcbiAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICB9LCBzdHlsZSlcbiAgICAgIH0sIGNyZWF0ZUVsZW1lbnQoaW5uZXJFbGVtZW50VHlwZSB8fCBpbm5lclRhZ05hbWUgfHwgJ2RpdicsIHtcbiAgICAgICAgY2hpbGRyZW46IGl0ZW1zLFxuICAgICAgICByZWY6IGlubmVyUmVmLFxuICAgICAgICBzdHlsZToge1xuICAgICAgICAgIGhlaWdodDogZXN0aW1hdGVkVG90YWxIZWlnaHQsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogaXNTY3JvbGxpbmcgPyAnbm9uZScgOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IGVzdGltYXRlZFRvdGFsV2lkdGhcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2NhbGxQcm9wc0NhbGxiYWNrcyA9IGZ1bmN0aW9uIF9jYWxsUHJvcHNDYWxsYmFja3MoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM1ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb2x1bW5Db3VudCA9IF90aGlzJHByb3BzNS5jb2x1bW5Db3VudCxcbiAgICAgICAgICBvbkl0ZW1zUmVuZGVyZWQgPSBfdGhpcyRwcm9wczUub25JdGVtc1JlbmRlcmVkLFxuICAgICAgICAgIG9uU2Nyb2xsID0gX3RoaXMkcHJvcHM1Lm9uU2Nyb2xsLFxuICAgICAgICAgIHJvd0NvdW50ID0gX3RoaXMkcHJvcHM1LnJvd0NvdW50O1xuXG4gICAgICBpZiAodHlwZW9mIG9uSXRlbXNSZW5kZXJlZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBpZiAoY29sdW1uQ291bnQgPiAwICYmIHJvd0NvdW50ID4gMCkge1xuICAgICAgICAgIHZhciBfdGhpcyRfZ2V0SG9yaXpvbnRhbFIyID0gdGhpcy5fZ2V0SG9yaXpvbnRhbFJhbmdlVG9SZW5kZXIoKSxcbiAgICAgICAgICAgICAgX292ZXJzY2FuQ29sdW1uU3RhcnRJbmRleCA9IF90aGlzJF9nZXRIb3Jpem9udGFsUjJbMF0sXG4gICAgICAgICAgICAgIF9vdmVyc2NhbkNvbHVtblN0b3BJbmRleCA9IF90aGlzJF9nZXRIb3Jpem9udGFsUjJbMV0sXG4gICAgICAgICAgICAgIF92aXNpYmxlQ29sdW1uU3RhcnRJbmRleCA9IF90aGlzJF9nZXRIb3Jpem9udGFsUjJbMl0sXG4gICAgICAgICAgICAgIF92aXNpYmxlQ29sdW1uU3RvcEluZGV4ID0gX3RoaXMkX2dldEhvcml6b250YWxSMlszXTtcblxuICAgICAgICAgIHZhciBfdGhpcyRfZ2V0VmVydGljYWxSYW4yID0gdGhpcy5fZ2V0VmVydGljYWxSYW5nZVRvUmVuZGVyKCksXG4gICAgICAgICAgICAgIF9vdmVyc2NhblJvd1N0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW4yWzBdLFxuICAgICAgICAgICAgICBfb3ZlcnNjYW5Sb3dTdG9wSW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW4yWzFdLFxuICAgICAgICAgICAgICBfdmlzaWJsZVJvd1N0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0VmVydGljYWxSYW4yWzJdLFxuICAgICAgICAgICAgICBfdmlzaWJsZVJvd1N0b3BJbmRleCA9IF90aGlzJF9nZXRWZXJ0aWNhbFJhbjJbM107XG5cbiAgICAgICAgICB0aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkKF9vdmVyc2NhbkNvbHVtblN0YXJ0SW5kZXgsIF9vdmVyc2NhbkNvbHVtblN0b3BJbmRleCwgX292ZXJzY2FuUm93U3RhcnRJbmRleCwgX292ZXJzY2FuUm93U3RvcEluZGV4LCBfdmlzaWJsZUNvbHVtblN0YXJ0SW5kZXgsIF92aXNpYmxlQ29sdW1uU3RvcEluZGV4LCBfdmlzaWJsZVJvd1N0YXJ0SW5kZXgsIF92aXNpYmxlUm93U3RvcEluZGV4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIG9uU2Nyb2xsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBfdGhpcyRzdGF0ZTMgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgX2hvcml6b250YWxTY3JvbGxEaXJlY3Rpb24gPSBfdGhpcyRzdGF0ZTMuaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICAgIF9zY3JvbGxMZWZ0ID0gX3RoaXMkc3RhdGUzLnNjcm9sbExlZnQsXG4gICAgICAgICAgICBfc2Nyb2xsVG9wID0gX3RoaXMkc3RhdGUzLnNjcm9sbFRvcCxcbiAgICAgICAgICAgIF9zY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQgPSBfdGhpcyRzdGF0ZTMuc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkLFxuICAgICAgICAgICAgX3ZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uID0gX3RoaXMkc3RhdGUzLnZlcnRpY2FsU2Nyb2xsRGlyZWN0aW9uO1xuXG4gICAgICAgIHRoaXMuX2NhbGxPblNjcm9sbChfc2Nyb2xsTGVmdCwgX3Njcm9sbFRvcCwgX2hvcml6b250YWxTY3JvbGxEaXJlY3Rpb24sIF92ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiwgX3Njcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZCk7XG4gICAgICB9XG4gICAgfTsgLy8gTGF6aWx5IGNyZWF0ZSBhbmQgY2FjaGUgaXRlbSBzdHlsZXMgd2hpbGUgc2Nyb2xsaW5nLFxuICAgIC8vIFNvIHRoYXQgcHVyZSBjb21wb25lbnQgc0NVIHdpbGwgcHJldmVudCByZS1yZW5kZXJzLlxuICAgIC8vIFdlIG1haW50YWluIHRoaXMgY2FjaGUsIGFuZCBwYXNzIGEgc3R5bGUgcHJvcCByYXRoZXIgdGhhbiBpbmRleCxcbiAgICAvLyBTbyB0aGF0IExpc3QgY2FuIGNsZWFyIGNhY2hlZCBzdHlsZXMgYW5kIGZvcmNlIGl0ZW0gcmUtcmVuZGVyIGlmIG5lY2Vzc2FyeS5cblxuXG4gICAgX3Byb3RvLl9nZXRIb3Jpem9udGFsUmFuZ2VUb1JlbmRlciA9IGZ1bmN0aW9uIF9nZXRIb3Jpem9udGFsUmFuZ2VUb1JlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNvbHVtbkNvdW50ID0gX3RoaXMkcHJvcHM2LmNvbHVtbkNvdW50LFxuICAgICAgICAgIG92ZXJzY2FuQ29sdW1uQ291bnQgPSBfdGhpcyRwcm9wczYub3ZlcnNjYW5Db2x1bW5Db3VudCxcbiAgICAgICAgICBvdmVyc2NhbkNvbHVtbnNDb3VudCA9IF90aGlzJHByb3BzNi5vdmVyc2NhbkNvbHVtbnNDb3VudCxcbiAgICAgICAgICBvdmVyc2NhbkNvdW50ID0gX3RoaXMkcHJvcHM2Lm92ZXJzY2FuQ291bnQsXG4gICAgICAgICAgcm93Q291bnQgPSBfdGhpcyRwcm9wczYucm93Q291bnQ7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU0ID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uID0gX3RoaXMkc3RhdGU0Lmhvcml6b250YWxTY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgaXNTY3JvbGxpbmcgPSBfdGhpcyRzdGF0ZTQuaXNTY3JvbGxpbmcsXG4gICAgICAgICAgc2Nyb2xsTGVmdCA9IF90aGlzJHN0YXRlNC5zY3JvbGxMZWZ0O1xuICAgICAgdmFyIG92ZXJzY2FuQ291bnRSZXNvbHZlZCA9IG92ZXJzY2FuQ29sdW1uQ291bnQgfHwgb3ZlcnNjYW5Db2x1bW5zQ291bnQgfHwgb3ZlcnNjYW5Db3VudCB8fCAxO1xuXG4gICAgICBpZiAoY29sdW1uQ291bnQgPT09IDAgfHwgcm93Q291bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFswLCAwLCAwLCAwXTtcbiAgICAgIH1cblxuICAgICAgdmFyIHN0YXJ0SW5kZXggPSBnZXRDb2x1bW5TdGFydEluZGV4Rm9yT2Zmc2V0KHRoaXMucHJvcHMsIHNjcm9sbExlZnQsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgdmFyIHN0b3BJbmRleCA9IGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXgodGhpcy5wcm9wcywgc3RhcnRJbmRleCwgc2Nyb2xsTGVmdCwgdGhpcy5faW5zdGFuY2VQcm9wcyk7IC8vIE92ZXJzY2FuIGJ5IG9uZSBpdGVtIGluIGVhY2ggZGlyZWN0aW9uIHNvIHRoYXQgdGFiL2ZvY3VzIHdvcmtzLlxuICAgICAgLy8gSWYgdGhlcmUgaXNuJ3QgYXQgbGVhc3Qgb25lIGV4dHJhIGl0ZW0sIHRhYiBsb29wcyBiYWNrIGFyb3VuZC5cblxuICAgICAgdmFyIG92ZXJzY2FuQmFja3dhcmQgPSAhaXNTY3JvbGxpbmcgfHwgaG9yaXpvbnRhbFNjcm9sbERpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJyA/IE1hdGgubWF4KDEsIG92ZXJzY2FuQ291bnRSZXNvbHZlZCkgOiAxO1xuICAgICAgdmFyIG92ZXJzY2FuRm9yd2FyZCA9ICFpc1Njcm9sbGluZyB8fCBob3Jpem9udGFsU2Nyb2xsRGlyZWN0aW9uID09PSAnZm9yd2FyZCcgPyBNYXRoLm1heCgxLCBvdmVyc2NhbkNvdW50UmVzb2x2ZWQpIDogMTtcbiAgICAgIHJldHVybiBbTWF0aC5tYXgoMCwgc3RhcnRJbmRleCAtIG92ZXJzY2FuQmFja3dhcmQpLCBNYXRoLm1heCgwLCBNYXRoLm1pbihjb2x1bW5Db3VudCAtIDEsIHN0b3BJbmRleCArIG92ZXJzY2FuRm9yd2FyZCkpLCBzdGFydEluZGV4LCBzdG9wSW5kZXhdO1xuICAgIH07XG5cbiAgICBfcHJvdG8uX2dldFZlcnRpY2FsUmFuZ2VUb1JlbmRlciA9IGZ1bmN0aW9uIF9nZXRWZXJ0aWNhbFJhbmdlVG9SZW5kZXIoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHM3ID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICBjb2x1bW5Db3VudCA9IF90aGlzJHByb3BzNy5jb2x1bW5Db3VudCxcbiAgICAgICAgICBvdmVyc2NhbkNvdW50ID0gX3RoaXMkcHJvcHM3Lm92ZXJzY2FuQ291bnQsXG4gICAgICAgICAgb3ZlcnNjYW5Sb3dDb3VudCA9IF90aGlzJHByb3BzNy5vdmVyc2NhblJvd0NvdW50LFxuICAgICAgICAgIG92ZXJzY2FuUm93c0NvdW50ID0gX3RoaXMkcHJvcHM3Lm92ZXJzY2FuUm93c0NvdW50LFxuICAgICAgICAgIHJvd0NvdW50ID0gX3RoaXMkcHJvcHM3LnJvd0NvdW50O1xuICAgICAgdmFyIF90aGlzJHN0YXRlNSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaXNTY3JvbGxpbmcgPSBfdGhpcyRzdGF0ZTUuaXNTY3JvbGxpbmcsXG4gICAgICAgICAgdmVydGljYWxTY3JvbGxEaXJlY3Rpb24gPSBfdGhpcyRzdGF0ZTUudmVydGljYWxTY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgc2Nyb2xsVG9wID0gX3RoaXMkc3RhdGU1LnNjcm9sbFRvcDtcbiAgICAgIHZhciBvdmVyc2NhbkNvdW50UmVzb2x2ZWQgPSBvdmVyc2NhblJvd0NvdW50IHx8IG92ZXJzY2FuUm93c0NvdW50IHx8IG92ZXJzY2FuQ291bnQgfHwgMTtcblxuICAgICAgaWYgKGNvbHVtbkNvdW50ID09PSAwIHx8IHJvd0NvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydEluZGV4ID0gZ2V0Um93U3RhcnRJbmRleEZvck9mZnNldCh0aGlzLnByb3BzLCBzY3JvbGxUb3AsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgdmFyIHN0b3BJbmRleCA9IGdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXgodGhpcy5wcm9wcywgc3RhcnRJbmRleCwgc2Nyb2xsVG9wLCB0aGlzLl9pbnN0YW5jZVByb3BzKTsgLy8gT3ZlcnNjYW4gYnkgb25lIGl0ZW0gaW4gZWFjaCBkaXJlY3Rpb24gc28gdGhhdCB0YWIvZm9jdXMgd29ya3MuXG4gICAgICAvLyBJZiB0aGVyZSBpc24ndCBhdCBsZWFzdCBvbmUgZXh0cmEgaXRlbSwgdGFiIGxvb3BzIGJhY2sgYXJvdW5kLlxuXG4gICAgICB2YXIgb3ZlcnNjYW5CYWNrd2FyZCA9ICFpc1Njcm9sbGluZyB8fCB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJyA/IE1hdGgubWF4KDEsIG92ZXJzY2FuQ291bnRSZXNvbHZlZCkgOiAxO1xuICAgICAgdmFyIG92ZXJzY2FuRm9yd2FyZCA9ICFpc1Njcm9sbGluZyB8fCB2ZXJ0aWNhbFNjcm9sbERpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnID8gTWF0aC5tYXgoMSwgb3ZlcnNjYW5Db3VudFJlc29sdmVkKSA6IDE7XG4gICAgICByZXR1cm4gW01hdGgubWF4KDAsIHN0YXJ0SW5kZXggLSBvdmVyc2NhbkJhY2t3YXJkKSwgTWF0aC5tYXgoMCwgTWF0aC5taW4ocm93Q291bnQgLSAxLCBzdG9wSW5kZXggKyBvdmVyc2NhbkZvcndhcmQpKSwgc3RhcnRJbmRleCwgc3RvcEluZGV4XTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEdyaWQ7XG4gIH0oUHVyZUNvbXBvbmVudCksIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZGlyZWN0aW9uOiAnbHRyJyxcbiAgICBpdGVtRGF0YTogdW5kZWZpbmVkLFxuICAgIHVzZUlzU2Nyb2xsaW5nOiBmYWxzZVxuICB9LCBfdGVtcDtcbn1cblxudmFyIHZhbGlkYXRlU2hhcmVkUHJvcHMgPSBmdW5jdGlvbiB2YWxpZGF0ZVNoYXJlZFByb3BzKF9yZWY1LCBfcmVmNikge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmNS5jaGlsZHJlbixcbiAgICAgIGRpcmVjdGlvbiA9IF9yZWY1LmRpcmVjdGlvbixcbiAgICAgIGhlaWdodCA9IF9yZWY1LmhlaWdodCxcbiAgICAgIGlubmVyVGFnTmFtZSA9IF9yZWY1LmlubmVyVGFnTmFtZSxcbiAgICAgIG91dGVyVGFnTmFtZSA9IF9yZWY1Lm91dGVyVGFnTmFtZSxcbiAgICAgIG92ZXJzY2FuQ29sdW1uc0NvdW50ID0gX3JlZjUub3ZlcnNjYW5Db2x1bW5zQ291bnQsXG4gICAgICBvdmVyc2NhbkNvdW50ID0gX3JlZjUub3ZlcnNjYW5Db3VudCxcbiAgICAgIG92ZXJzY2FuUm93c0NvdW50ID0gX3JlZjUub3ZlcnNjYW5Sb3dzQ291bnQsXG4gICAgICB3aWR0aCA9IF9yZWY1LndpZHRoO1xuICB2YXIgaW5zdGFuY2UgPSBfcmVmNi5pbnN0YW5jZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICh0eXBlb2Ygb3ZlcnNjYW5Db3VudCA9PT0gJ251bWJlcicpIHtcbiAgICAgIGlmIChkZXZXYXJuaW5nc092ZXJzY2FuQ291bnQgJiYgIWRldldhcm5pbmdzT3ZlcnNjYW5Db3VudC5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgIGRldldhcm5pbmdzT3ZlcnNjYW5Db3VudC5hZGQoaW5zdGFuY2UpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBvdmVyc2NhbkNvdW50IHByb3AgaGFzIGJlZW4gZGVwcmVjYXRlZC4gJyArICdQbGVhc2UgdXNlIHRoZSBvdmVyc2NhbkNvbHVtbkNvdW50IGFuZCBvdmVyc2NhblJvd0NvdW50IHByb3BzIGluc3RlYWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvdmVyc2NhbkNvbHVtbnNDb3VudCA9PT0gJ251bWJlcicgfHwgdHlwZW9mIG92ZXJzY2FuUm93c0NvdW50ID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKGRldldhcm5pbmdzT3ZlcnNjYW5Sb3dzQ29sdW1uc0NvdW50ICYmICFkZXZXYXJuaW5nc092ZXJzY2FuUm93c0NvbHVtbnNDb3VudC5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgIGRldldhcm5pbmdzT3ZlcnNjYW5Sb3dzQ29sdW1uc0NvdW50LmFkZChpbnN0YW5jZSk7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIG92ZXJzY2FuQ29sdW1uc0NvdW50IGFuZCBvdmVyc2NhblJvd3NDb3VudCBwcm9wcyBoYXZlIGJlZW4gZGVwcmVjYXRlZC4gJyArICdQbGVhc2UgdXNlIHRoZSBvdmVyc2NhbkNvbHVtbkNvdW50IGFuZCBvdmVyc2NhblJvd0NvdW50IHByb3BzIGluc3RlYWQuJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGlubmVyVGFnTmFtZSAhPSBudWxsIHx8IG91dGVyVGFnTmFtZSAhPSBudWxsKSB7XG4gICAgICBpZiAoZGV2V2FybmluZ3NUYWdOYW1lICYmICFkZXZXYXJuaW5nc1RhZ05hbWUuaGFzKGluc3RhbmNlKSkge1xuICAgICAgICBkZXZXYXJuaW5nc1RhZ05hbWUuYWRkKGluc3RhbmNlKTtcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgaW5uZXJUYWdOYW1lIGFuZCBvdXRlclRhZ05hbWUgcHJvcHMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQuICcgKyAnUGxlYXNlIHVzZSB0aGUgaW5uZXJFbGVtZW50VHlwZSBhbmQgb3V0ZXJFbGVtZW50VHlwZSBwcm9wcyBpbnN0ZWFkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcImNoaWxkcmVuXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgUmVhY3QgY29tcG9uZW50LiAnICsgKFwiXFxcIlwiICsgKGNoaWxkcmVuID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGNoaWxkcmVuKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuXG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgIGNhc2UgJ2x0cic6XG4gICAgICBjYXNlICdydGwnOlxuICAgICAgICAvLyBWYWxpZCB2YWx1ZXNcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiZGlyZWN0aW9uXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGVpdGhlciBcImx0clwiIG9yIFwicnRsXCIuICcgKyAoXCJcXFwiXCIgKyBkaXJlY3Rpb24gKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInKSB7XG4gICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcIndpZHRoXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnR3JpZHMgbXVzdCBzcGVjaWZ5IGEgbnVtYmVyIGZvciB3aWR0aC4gJyArIChcIlxcXCJcIiArICh3aWR0aCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB3aWR0aCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgaGVpZ2h0ICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJoZWlnaHRcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdHcmlkcyBtdXN0IHNwZWNpZnkgYSBudW1iZXIgZm9yIGhlaWdodC4gJyArIChcIlxcXCJcIiArIChoZWlnaHQgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgaGVpZ2h0KSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgREVGQVVMVF9FU1RJTUFURURfSVRFTV9TSVpFID0gNTA7XG5cbnZhciBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodCA9IGZ1bmN0aW9uIGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0KF9yZWYsIF9yZWYyKSB7XG4gIHZhciByb3dDb3VudCA9IF9yZWYucm93Q291bnQ7XG4gIHZhciByb3dNZXRhZGF0YU1hcCA9IF9yZWYyLnJvd01ldGFkYXRhTWFwLFxuICAgICAgZXN0aW1hdGVkUm93SGVpZ2h0ID0gX3JlZjIuZXN0aW1hdGVkUm93SGVpZ2h0LFxuICAgICAgbGFzdE1lYXN1cmVkUm93SW5kZXggPSBfcmVmMi5sYXN0TWVhc3VyZWRSb3dJbmRleDtcbiAgdmFyIHRvdGFsU2l6ZU9mTWVhc3VyZWRSb3dzID0gMDsgLy8gRWRnZSBjYXNlIGNoZWNrIGZvciB3aGVuIHRoZSBudW1iZXIgb2YgaXRlbXMgZGVjcmVhc2VzIHdoaWxlIGEgc2Nyb2xsIGlzIGluIHByb2dyZXNzLlxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYnZhdWdobi9yZWFjdC13aW5kb3cvcHVsbC8xMzhcblxuICBpZiAobGFzdE1lYXN1cmVkUm93SW5kZXggPj0gcm93Q291bnQpIHtcbiAgICBsYXN0TWVhc3VyZWRSb3dJbmRleCA9IHJvd0NvdW50IC0gMTtcbiAgfVxuXG4gIGlmIChsYXN0TWVhc3VyZWRSb3dJbmRleCA+PSAwKSB7XG4gICAgdmFyIGl0ZW1NZXRhZGF0YSA9IHJvd01ldGFkYXRhTWFwW2xhc3RNZWFzdXJlZFJvd0luZGV4XTtcbiAgICB0b3RhbFNpemVPZk1lYXN1cmVkUm93cyA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgfVxuXG4gIHZhciBudW1Vbm1lYXN1cmVkSXRlbXMgPSByb3dDb3VudCAtIGxhc3RNZWFzdXJlZFJvd0luZGV4IC0gMTtcbiAgdmFyIHRvdGFsU2l6ZU9mVW5tZWFzdXJlZEl0ZW1zID0gbnVtVW5tZWFzdXJlZEl0ZW1zICogZXN0aW1hdGVkUm93SGVpZ2h0O1xuICByZXR1cm4gdG90YWxTaXplT2ZNZWFzdXJlZFJvd3MgKyB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcztcbn07XG5cbnZhciBnZXRFc3RpbWF0ZWRUb3RhbFdpZHRoID0gZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxXaWR0aChfcmVmMywgX3JlZjQpIHtcbiAgdmFyIGNvbHVtbkNvdW50ID0gX3JlZjMuY29sdW1uQ291bnQ7XG4gIHZhciBjb2x1bW5NZXRhZGF0YU1hcCA9IF9yZWY0LmNvbHVtbk1ldGFkYXRhTWFwLFxuICAgICAgZXN0aW1hdGVkQ29sdW1uV2lkdGggPSBfcmVmNC5lc3RpbWF0ZWRDb2x1bW5XaWR0aCxcbiAgICAgIGxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID0gX3JlZjQubGFzdE1lYXN1cmVkQ29sdW1uSW5kZXg7XG4gIHZhciB0b3RhbFNpemVPZk1lYXN1cmVkUm93cyA9IDA7IC8vIEVkZ2UgY2FzZSBjaGVjayBmb3Igd2hlbiB0aGUgbnVtYmVyIG9mIGl0ZW1zIGRlY3JlYXNlcyB3aGlsZSBhIHNjcm9sbCBpcyBpbiBwcm9ncmVzcy5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2J2YXVnaG4vcmVhY3Qtd2luZG93L3B1bGwvMTM4XG5cbiAgaWYgKGxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID49IGNvbHVtbkNvdW50KSB7XG4gICAgbGFzdE1lYXN1cmVkQ29sdW1uSW5kZXggPSBjb2x1bW5Db3VudCAtIDE7XG4gIH1cblxuICBpZiAobGFzdE1lYXN1cmVkQ29sdW1uSW5kZXggPj0gMCkge1xuICAgIHZhciBpdGVtTWV0YWRhdGEgPSBjb2x1bW5NZXRhZGF0YU1hcFtsYXN0TWVhc3VyZWRDb2x1bW5JbmRleF07XG4gICAgdG90YWxTaXplT2ZNZWFzdXJlZFJvd3MgPSBpdGVtTWV0YWRhdGEub2Zmc2V0ICsgaXRlbU1ldGFkYXRhLnNpemU7XG4gIH1cblxuICB2YXIgbnVtVW5tZWFzdXJlZEl0ZW1zID0gY29sdW1uQ291bnQgLSBsYXN0TWVhc3VyZWRDb2x1bW5JbmRleCAtIDE7XG4gIHZhciB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcyA9IG51bVVubWVhc3VyZWRJdGVtcyAqIGVzdGltYXRlZENvbHVtbldpZHRoO1xuICByZXR1cm4gdG90YWxTaXplT2ZNZWFzdXJlZFJvd3MgKyB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcztcbn07XG5cbnZhciBnZXRJdGVtTWV0YWRhdGEgPSBmdW5jdGlvbiBnZXRJdGVtTWV0YWRhdGEoaXRlbVR5cGUsIHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICB2YXIgaXRlbU1ldGFkYXRhTWFwLCBpdGVtU2l6ZSwgbGFzdE1lYXN1cmVkSW5kZXg7XG5cbiAgaWYgKGl0ZW1UeXBlID09PSAnY29sdW1uJykge1xuICAgIGl0ZW1NZXRhZGF0YU1hcCA9IGluc3RhbmNlUHJvcHMuY29sdW1uTWV0YWRhdGFNYXA7XG4gICAgaXRlbVNpemUgPSBwcm9wcy5jb2x1bW5XaWR0aDtcbiAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkQ29sdW1uSW5kZXg7XG4gIH0gZWxzZSB7XG4gICAgaXRlbU1ldGFkYXRhTWFwID0gaW5zdGFuY2VQcm9wcy5yb3dNZXRhZGF0YU1hcDtcbiAgICBpdGVtU2l6ZSA9IHByb3BzLnJvd0hlaWdodDtcbiAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkUm93SW5kZXg7XG4gIH1cblxuICBpZiAoaW5kZXggPiBsYXN0TWVhc3VyZWRJbmRleCkge1xuICAgIHZhciBvZmZzZXQgPSAwO1xuXG4gICAgaWYgKGxhc3RNZWFzdXJlZEluZGV4ID49IDApIHtcbiAgICAgIHZhciBpdGVtTWV0YWRhdGEgPSBpdGVtTWV0YWRhdGFNYXBbbGFzdE1lYXN1cmVkSW5kZXhdO1xuICAgICAgb2Zmc2V0ID0gaXRlbU1ldGFkYXRhLm9mZnNldCArIGl0ZW1NZXRhZGF0YS5zaXplO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSBsYXN0TWVhc3VyZWRJbmRleCArIDE7IGkgPD0gaW5kZXg7IGkrKykge1xuICAgICAgdmFyIHNpemUgPSBpdGVtU2l6ZShpKTtcbiAgICAgIGl0ZW1NZXRhZGF0YU1hcFtpXSA9IHtcbiAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgIHNpemU6IHNpemVcbiAgICAgIH07XG4gICAgICBvZmZzZXQgKz0gc2l6ZTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbVR5cGUgPT09ICdjb2x1bW4nKSB7XG4gICAgICBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID0gaW5kZXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkUm93SW5kZXggPSBpbmRleDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXRlbU1ldGFkYXRhTWFwW2luZGV4XTtcbn07XG5cbnZhciBmaW5kTmVhcmVzdEl0ZW0gPSBmdW5jdGlvbiBmaW5kTmVhcmVzdEl0ZW0oaXRlbVR5cGUsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBvZmZzZXQpIHtcbiAgdmFyIGl0ZW1NZXRhZGF0YU1hcCwgbGFzdE1lYXN1cmVkSW5kZXg7XG5cbiAgaWYgKGl0ZW1UeXBlID09PSAnY29sdW1uJykge1xuICAgIGl0ZW1NZXRhZGF0YU1hcCA9IGluc3RhbmNlUHJvcHMuY29sdW1uTWV0YWRhdGFNYXA7XG4gICAgbGFzdE1lYXN1cmVkSW5kZXggPSBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZENvbHVtbkluZGV4O1xuICB9IGVsc2Uge1xuICAgIGl0ZW1NZXRhZGF0YU1hcCA9IGluc3RhbmNlUHJvcHMucm93TWV0YWRhdGFNYXA7XG4gICAgbGFzdE1lYXN1cmVkSW5kZXggPSBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZFJvd0luZGV4O1xuICB9XG5cbiAgdmFyIGxhc3RNZWFzdXJlZEl0ZW1PZmZzZXQgPSBsYXN0TWVhc3VyZWRJbmRleCA+IDAgPyBpdGVtTWV0YWRhdGFNYXBbbGFzdE1lYXN1cmVkSW5kZXhdLm9mZnNldCA6IDA7XG5cbiAgaWYgKGxhc3RNZWFzdXJlZEl0ZW1PZmZzZXQgPj0gb2Zmc2V0KSB7XG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBtZWFzdXJlZCBpdGVtcyB3aXRoaW4gdGhpcyByYW5nZSBqdXN0IHVzZSBhIGJpbmFyeSBzZWFyY2ggYXMgaXQncyBmYXN0ZXIuXG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbUJpbmFyeVNlYXJjaChpdGVtVHlwZSwgcHJvcHMsIGluc3RhbmNlUHJvcHMsIGxhc3RNZWFzdXJlZEluZGV4LCAwLCBvZmZzZXQpO1xuICB9IGVsc2Uge1xuICAgIC8vIElmIHdlIGhhdmVuJ3QgeWV0IG1lYXN1cmVkIHRoaXMgaGlnaCwgZmFsbGJhY2sgdG8gYW4gZXhwb25lbnRpYWwgc2VhcmNoIHdpdGggYW4gaW5uZXIgYmluYXJ5IHNlYXJjaC5cbiAgICAvLyBUaGUgZXhwb25lbnRpYWwgc2VhcmNoIGF2b2lkcyBwcmUtY29tcHV0aW5nIHNpemVzIGZvciB0aGUgZnVsbCBzZXQgb2YgaXRlbXMgYXMgYSBiaW5hcnkgc2VhcmNoIHdvdWxkLlxuICAgIC8vIFRoZSBvdmVyYWxsIGNvbXBsZXhpdHkgZm9yIHRoaXMgYXBwcm9hY2ggaXMgTyhsb2cgbikuXG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbUV4cG9uZW50aWFsU2VhcmNoKGl0ZW1UeXBlLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgTWF0aC5tYXgoMCwgbGFzdE1lYXN1cmVkSW5kZXgpLCBvZmZzZXQpO1xuICB9XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoID0gZnVuY3Rpb24gZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoKGl0ZW1UeXBlLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgaGlnaCwgbG93LCBvZmZzZXQpIHtcbiAgd2hpbGUgKGxvdyA8PSBoaWdoKSB7XG4gICAgdmFyIG1pZGRsZSA9IGxvdyArIE1hdGguZmxvb3IoKGhpZ2ggLSBsb3cpIC8gMik7XG4gICAgdmFyIGN1cnJlbnRPZmZzZXQgPSBnZXRJdGVtTWV0YWRhdGEoaXRlbVR5cGUsIHByb3BzLCBtaWRkbGUsIGluc3RhbmNlUHJvcHMpLm9mZnNldDtcblxuICAgIGlmIChjdXJyZW50T2Zmc2V0ID09PSBvZmZzZXQpIHtcbiAgICAgIHJldHVybiBtaWRkbGU7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50T2Zmc2V0IDwgb2Zmc2V0KSB7XG4gICAgICBsb3cgPSBtaWRkbGUgKyAxO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudE9mZnNldCA+IG9mZnNldCkge1xuICAgICAgaGlnaCA9IG1pZGRsZSAtIDE7XG4gICAgfVxuICB9XG5cbiAgaWYgKGxvdyA+IDApIHtcbiAgICByZXR1cm4gbG93IC0gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufTtcblxudmFyIGZpbmROZWFyZXN0SXRlbUV4cG9uZW50aWFsU2VhcmNoID0gZnVuY3Rpb24gZmluZE5lYXJlc3RJdGVtRXhwb25lbnRpYWxTZWFyY2goaXRlbVR5cGUsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBpbmRleCwgb2Zmc2V0KSB7XG4gIHZhciBpdGVtQ291bnQgPSBpdGVtVHlwZSA9PT0gJ2NvbHVtbicgPyBwcm9wcy5jb2x1bW5Db3VudCA6IHByb3BzLnJvd0NvdW50O1xuICB2YXIgaW50ZXJ2YWwgPSAxO1xuXG4gIHdoaWxlIChpbmRleCA8IGl0ZW1Db3VudCAmJiBnZXRJdGVtTWV0YWRhdGEoaXRlbVR5cGUsIHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykub2Zmc2V0IDwgb2Zmc2V0KSB7XG4gICAgaW5kZXggKz0gaW50ZXJ2YWw7XG4gICAgaW50ZXJ2YWwgKj0gMjtcbiAgfVxuXG4gIHJldHVybiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2goaXRlbVR5cGUsIHByb3BzLCBpbnN0YW5jZVByb3BzLCBNYXRoLm1pbihpbmRleCwgaXRlbUNvdW50IC0gMSksIE1hdGguZmxvb3IoaW5kZXggLyAyKSwgb2Zmc2V0KTtcbn07XG5cbnZhciBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudCA9IGZ1bmN0aW9uIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KGl0ZW1UeXBlLCBwcm9wcywgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMsIHNjcm9sbGJhclNpemUpIHtcbiAgdmFyIHNpemUgPSBpdGVtVHlwZSA9PT0gJ2NvbHVtbicgPyBwcm9wcy53aWR0aCA6IHByb3BzLmhlaWdodDtcbiAgdmFyIGl0ZW1NZXRhZGF0YSA9IGdldEl0ZW1NZXRhZGF0YShpdGVtVHlwZSwgcHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKTsgLy8gR2V0IGVzdGltYXRlZCB0b3RhbCBzaXplIGFmdGVyIEl0ZW1NZXRhZGF0YSBpcyBjb21wdXRlZCxcbiAgLy8gVG8gZW5zdXJlIGl0IHJlZmxlY3RzIGFjdHVhbCBtZWFzdXJlbWVudHMgaW5zdGVhZCBvZiBqdXN0IGVzdGltYXRlcy5cblxuICB2YXIgZXN0aW1hdGVkVG90YWxTaXplID0gaXRlbVR5cGUgPT09ICdjb2x1bW4nID8gZ2V0RXN0aW1hdGVkVG90YWxXaWR0aChwcm9wcywgaW5zdGFuY2VQcm9wcykgOiBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodChwcm9wcywgaW5zdGFuY2VQcm9wcyk7XG4gIHZhciBtYXhPZmZzZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihlc3RpbWF0ZWRUb3RhbFNpemUgLSBzaXplLCBpdGVtTWV0YWRhdGEub2Zmc2V0KSk7XG4gIHZhciBtaW5PZmZzZXQgPSBNYXRoLm1heCgwLCBpdGVtTWV0YWRhdGEub2Zmc2V0IC0gc2l6ZSArIHNjcm9sbGJhclNpemUgKyBpdGVtTWV0YWRhdGEuc2l6ZSk7XG5cbiAgaWYgKGFsaWduID09PSAnc21hcnQnKSB7XG4gICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgLSBzaXplICYmIHNjcm9sbE9mZnNldCA8PSBtYXhPZmZzZXQgKyBzaXplKSB7XG4gICAgICBhbGlnbiA9ICdhdXRvJztcbiAgICB9IGVsc2Uge1xuICAgICAgYWxpZ24gPSAnY2VudGVyJztcbiAgICB9XG4gIH1cblxuICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgY2FzZSAnc3RhcnQnOlxuICAgICAgcmV0dXJuIG1heE9mZnNldDtcblxuICAgIGNhc2UgJ2VuZCc6XG4gICAgICByZXR1cm4gbWluT2Zmc2V0O1xuXG4gICAgY2FzZSAnY2VudGVyJzpcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKG1pbk9mZnNldCArIChtYXhPZmZzZXQgLSBtaW5PZmZzZXQpIC8gMik7XG5cbiAgICBjYXNlICdhdXRvJzpcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgJiYgc2Nyb2xsT2Zmc2V0IDw9IG1heE9mZnNldCkge1xuICAgICAgICByZXR1cm4gc2Nyb2xsT2Zmc2V0O1xuICAgICAgfSBlbHNlIGlmIChtaW5PZmZzZXQgPiBtYXhPZmZzZXQpIHtcbiAgICAgICAgLy8gQmVjYXVzZSB3ZSBvbmx5IHRha2UgaW50byBhY2NvdW50IHRoZSBzY3JvbGxiYXIgc2l6ZSB3aGVuIGNhbGN1bGF0aW5nIG1pbk9mZnNldFxuICAgICAgICAvLyB0aGlzIHZhbHVlIGNhbiBiZSBsYXJnZXIgdGhhbiBtYXhPZmZzZXQgd2hlbiBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG4gICAgICB9IGVsc2UgaWYgKHNjcm9sbE9mZnNldCA8IG1pbk9mZnNldCkge1xuICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG1heE9mZnNldDtcbiAgICAgIH1cblxuICB9XG59O1xuXG52YXIgVmFyaWFibGVTaXplR3JpZCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVHcmlkQ29tcG9uZW50KHtcbiAgZ2V0Q29sdW1uT2Zmc2V0OiBmdW5jdGlvbiBnZXRDb2x1bW5PZmZzZXQocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGdldEl0ZW1NZXRhZGF0YSgnY29sdW1uJywgcHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKS5vZmZzZXQ7XG4gIH0sXG4gIGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQ6IGZ1bmN0aW9uIGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQocHJvcHMsIHNjcm9sbExlZnQsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gZmluZE5lYXJlc3RJdGVtKCdjb2x1bW4nLCBwcm9wcywgaW5zdGFuY2VQcm9wcywgc2Nyb2xsTGVmdCk7XG4gIH0sXG4gIGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXg6IGZ1bmN0aW9uIGdldENvbHVtblN0b3BJbmRleEZvclN0YXJ0SW5kZXgocHJvcHMsIHN0YXJ0SW5kZXgsIHNjcm9sbExlZnQsIGluc3RhbmNlUHJvcHMpIHtcbiAgICB2YXIgY29sdW1uQ291bnQgPSBwcm9wcy5jb2x1bW5Db3VudCxcbiAgICAgICAgd2lkdGggPSBwcm9wcy53aWR0aDtcbiAgICB2YXIgaXRlbU1ldGFkYXRhID0gZ2V0SXRlbU1ldGFkYXRhKCdjb2x1bW4nLCBwcm9wcywgc3RhcnRJbmRleCwgaW5zdGFuY2VQcm9wcyk7XG4gICAgdmFyIG1heE9mZnNldCA9IHNjcm9sbExlZnQgKyB3aWR0aDtcbiAgICB2YXIgb2Zmc2V0ID0gaXRlbU1ldGFkYXRhLm9mZnNldCArIGl0ZW1NZXRhZGF0YS5zaXplO1xuICAgIHZhciBzdG9wSW5kZXggPSBzdGFydEluZGV4O1xuXG4gICAgd2hpbGUgKHN0b3BJbmRleCA8IGNvbHVtbkNvdW50IC0gMSAmJiBvZmZzZXQgPCBtYXhPZmZzZXQpIHtcbiAgICAgIHN0b3BJbmRleCsrO1xuICAgICAgb2Zmc2V0ICs9IGdldEl0ZW1NZXRhZGF0YSgnY29sdW1uJywgcHJvcHMsIHN0b3BJbmRleCwgaW5zdGFuY2VQcm9wcykuc2l6ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcEluZGV4O1xuICB9LFxuICBnZXRDb2x1bW5XaWR0aDogZnVuY3Rpb24gZ2V0Q29sdW1uV2lkdGgocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlUHJvcHMuY29sdW1uTWV0YWRhdGFNYXBbaW5kZXhdLnNpemU7XG4gIH0sXG4gIGdldEVzdGltYXRlZFRvdGFsSGVpZ2h0OiBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodCxcbiAgZ2V0RXN0aW1hdGVkVG90YWxXaWR0aDogZ2V0RXN0aW1hdGVkVG90YWxXaWR0aCxcbiAgZ2V0T2Zmc2V0Rm9yQ29sdW1uQW5kQWxpZ25tZW50OiBmdW5jdGlvbiBnZXRPZmZzZXRGb3JDb2x1bW5BbmRBbGlnbm1lbnQocHJvcHMsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0LCBpbnN0YW5jZVByb3BzLCBzY3JvbGxiYXJTaXplKSB7XG4gICAgcmV0dXJuIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KCdjb2x1bW4nLCBwcm9wcywgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMsIHNjcm9sbGJhclNpemUpO1xuICB9LFxuICBnZXRPZmZzZXRGb3JSb3dBbmRBbGlnbm1lbnQ6IGZ1bmN0aW9uIGdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudChwcm9wcywgaW5kZXgsIGFsaWduLCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMsIHNjcm9sbGJhclNpemUpIHtcbiAgICByZXR1cm4gZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQoJ3JvdycsIHByb3BzLCBpbmRleCwgYWxpZ24sIHNjcm9sbE9mZnNldCwgaW5zdGFuY2VQcm9wcywgc2Nyb2xsYmFyU2l6ZSk7XG4gIH0sXG4gIGdldFJvd09mZnNldDogZnVuY3Rpb24gZ2V0Um93T2Zmc2V0KHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHJldHVybiBnZXRJdGVtTWV0YWRhdGEoJ3JvdycsIHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykub2Zmc2V0O1xuICB9LFxuICBnZXRSb3dIZWlnaHQ6IGZ1bmN0aW9uIGdldFJvd0hlaWdodChwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VQcm9wcy5yb3dNZXRhZGF0YU1hcFtpbmRleF0uc2l6ZTtcbiAgfSxcbiAgZ2V0Um93U3RhcnRJbmRleEZvck9mZnNldDogZnVuY3Rpb24gZ2V0Um93U3RhcnRJbmRleEZvck9mZnNldChwcm9wcywgc2Nyb2xsVG9wLCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbSgncm93JywgcHJvcHMsIGluc3RhbmNlUHJvcHMsIHNjcm9sbFRvcCk7XG4gIH0sXG4gIGdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXg6IGZ1bmN0aW9uIGdldFJvd1N0b3BJbmRleEZvclN0YXJ0SW5kZXgocHJvcHMsIHN0YXJ0SW5kZXgsIHNjcm9sbFRvcCwgaW5zdGFuY2VQcm9wcykge1xuICAgIHZhciByb3dDb3VudCA9IHByb3BzLnJvd0NvdW50LFxuICAgICAgICBoZWlnaHQgPSBwcm9wcy5oZWlnaHQ7XG4gICAgdmFyIGl0ZW1NZXRhZGF0YSA9IGdldEl0ZW1NZXRhZGF0YSgncm93JywgcHJvcHMsIHN0YXJ0SW5kZXgsIGluc3RhbmNlUHJvcHMpO1xuICAgIHZhciBtYXhPZmZzZXQgPSBzY3JvbGxUb3AgKyBoZWlnaHQ7XG4gICAgdmFyIG9mZnNldCA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgICB2YXIgc3RvcEluZGV4ID0gc3RhcnRJbmRleDtcblxuICAgIHdoaWxlIChzdG9wSW5kZXggPCByb3dDb3VudCAtIDEgJiYgb2Zmc2V0IDwgbWF4T2Zmc2V0KSB7XG4gICAgICBzdG9wSW5kZXgrKztcbiAgICAgIG9mZnNldCArPSBnZXRJdGVtTWV0YWRhdGEoJ3JvdycsIHByb3BzLCBzdG9wSW5kZXgsIGluc3RhbmNlUHJvcHMpLnNpemU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0b3BJbmRleDtcbiAgfSxcbiAgaW5pdEluc3RhbmNlUHJvcHM6IGZ1bmN0aW9uIGluaXRJbnN0YW5jZVByb3BzKHByb3BzLCBpbnN0YW5jZSkge1xuICAgIHZhciBfcmVmNSA9IHByb3BzLFxuICAgICAgICBlc3RpbWF0ZWRDb2x1bW5XaWR0aCA9IF9yZWY1LmVzdGltYXRlZENvbHVtbldpZHRoLFxuICAgICAgICBlc3RpbWF0ZWRSb3dIZWlnaHQgPSBfcmVmNS5lc3RpbWF0ZWRSb3dIZWlnaHQ7XG4gICAgdmFyIGluc3RhbmNlUHJvcHMgPSB7XG4gICAgICBjb2x1bW5NZXRhZGF0YU1hcDoge30sXG4gICAgICBlc3RpbWF0ZWRDb2x1bW5XaWR0aDogZXN0aW1hdGVkQ29sdW1uV2lkdGggfHwgREVGQVVMVF9FU1RJTUFURURfSVRFTV9TSVpFLFxuICAgICAgZXN0aW1hdGVkUm93SGVpZ2h0OiBlc3RpbWF0ZWRSb3dIZWlnaHQgfHwgREVGQVVMVF9FU1RJTUFURURfSVRFTV9TSVpFLFxuICAgICAgbGFzdE1lYXN1cmVkQ29sdW1uSW5kZXg6IC0xLFxuICAgICAgbGFzdE1lYXN1cmVkUm93SW5kZXg6IC0xLFxuICAgICAgcm93TWV0YWRhdGFNYXA6IHt9XG4gICAgfTtcblxuICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJDb2x1bW5JbmRleCA9IGZ1bmN0aW9uIChjb2x1bW5JbmRleCwgc2hvdWxkRm9yY2VVcGRhdGUpIHtcbiAgICAgIGlmIChzaG91bGRGb3JjZVVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2UucmVzZXRBZnRlckluZGljZXMoe1xuICAgICAgICBjb2x1bW5JbmRleDogY29sdW1uSW5kZXgsXG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlOiBzaG91bGRGb3JjZVVwZGF0ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJSb3dJbmRleCA9IGZ1bmN0aW9uIChyb3dJbmRleCwgc2hvdWxkRm9yY2VVcGRhdGUpIHtcbiAgICAgIGlmIChzaG91bGRGb3JjZVVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2UucmVzZXRBZnRlckluZGljZXMoe1xuICAgICAgICByb3dJbmRleDogcm93SW5kZXgsXG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlOiBzaG91bGRGb3JjZVVwZGF0ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJJbmRpY2VzID0gZnVuY3Rpb24gKF9yZWY2KSB7XG4gICAgICB2YXIgY29sdW1uSW5kZXggPSBfcmVmNi5jb2x1bW5JbmRleCxcbiAgICAgICAgICByb3dJbmRleCA9IF9yZWY2LnJvd0luZGV4LFxuICAgICAgICAgIF9yZWY2JHNob3VsZEZvcmNlVXBkYSA9IF9yZWY2LnNob3VsZEZvcmNlVXBkYXRlLFxuICAgICAgICAgIHNob3VsZEZvcmNlVXBkYXRlID0gX3JlZjYkc2hvdWxkRm9yY2VVcGRhID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjYkc2hvdWxkRm9yY2VVcGRhO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbHVtbkluZGV4ID09PSAnbnVtYmVyJykge1xuICAgICAgICBpbnN0YW5jZVByb3BzLmxhc3RNZWFzdXJlZENvbHVtbkluZGV4ID0gTWF0aC5taW4oaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRDb2x1bW5JbmRleCwgY29sdW1uSW5kZXggLSAxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiByb3dJbmRleCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRSb3dJbmRleCA9IE1hdGgubWluKGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkUm93SW5kZXgsIHJvd0luZGV4IC0gMSk7XG4gICAgICB9IC8vIFdlIGNvdWxkIHBvdGVudGlhbGx5IG9wdGltaXplIGZ1cnRoZXIgYnkgb25seSBldmljdGluZyBzdHlsZXMgYWZ0ZXIgdGhpcyBpbmRleCxcbiAgICAgIC8vIEJ1dCBzaW5jZSBzdHlsZXMgYXJlIG9ubHkgY2FjaGVkIHdoaWxlIHNjcm9sbGluZyBpcyBpbiBwcm9ncmVzcy1cbiAgICAgIC8vIEl0IHNlZW1zIGFuIHVubmVjZXNzYXJ5IG9wdGltaXphdGlvbi5cbiAgICAgIC8vIEl0J3MgdW5saWtlbHkgdGhhdCByZXNldEFmdGVySW5kZXgoKSB3aWxsIGJlIGNhbGxlZCB3aGlsZSBhIHVzZXIgaXMgc2Nyb2xsaW5nLlxuXG5cbiAgICAgIGluc3RhbmNlLl9nZXRJdGVtU3R5bGVDYWNoZSgtMSk7XG5cbiAgICAgIGlmIChzaG91bGRGb3JjZVVwZGF0ZSkge1xuICAgICAgICBpbnN0YW5jZS5mb3JjZVVwZGF0ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gaW5zdGFuY2VQcm9wcztcbiAgfSxcbiAgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZTogZmFsc2UsXG4gIHZhbGlkYXRlUHJvcHM6IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMoX3JlZjcpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmNy5jb2x1bW5XaWR0aCxcbiAgICAgICAgcm93SGVpZ2h0ID0gX3JlZjcucm93SGVpZ2h0O1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgY29sdW1uV2lkdGggIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJjb2x1bW5XaWR0aFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIGZ1bmN0aW9uLiAnICsgKFwiXFxcIlwiICsgKGNvbHVtbldpZHRoID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGNvbHVtbldpZHRoKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiByb3dIZWlnaHQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJyb3dIZWlnaHRcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgYSBmdW5jdGlvbi4gJyArIChcIlxcXCJcIiArIChyb3dIZWlnaHQgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2Ygcm93SGVpZ2h0KSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxudmFyIElTX1NDUk9MTElOR19ERUJPVU5DRV9JTlRFUlZBTCQxID0gMTUwO1xuXG52YXIgZGVmYXVsdEl0ZW1LZXkkMSA9IGZ1bmN0aW9uIGRlZmF1bHRJdGVtS2V5KGluZGV4LCBkYXRhKSB7XG4gIHJldHVybiBpbmRleDtcbn07IC8vIEluIERFViBtb2RlLCB0aGlzIFNldCBoZWxwcyB1cyBvbmx5IGxvZyBhIHdhcm5pbmcgb25jZSBwZXIgY29tcG9uZW50IGluc3RhbmNlLlxuLy8gVGhpcyBhdm9pZHMgc3BhbW1pbmcgdGhlIGNvbnNvbGUgZXZlcnkgdGltZSBhIHJlbmRlciBoYXBwZW5zLlxuXG5cbnZhciBkZXZXYXJuaW5nc0RpcmVjdGlvbiA9IG51bGw7XG52YXIgZGV2V2FybmluZ3NUYWdOYW1lJDEgPSBudWxsO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5XZWFrU2V0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIGRldldhcm5pbmdzRGlyZWN0aW9uID1cbiAgICAvKiNfX1BVUkVfXyovXG4gICAgbmV3IFdlYWtTZXQoKTtcbiAgICBkZXZXYXJuaW5nc1RhZ05hbWUkMSA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIG5ldyBXZWFrU2V0KCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlzdENvbXBvbmVudChfcmVmKSB7XG4gIHZhciBfY2xhc3MsIF90ZW1wO1xuXG4gIHZhciBnZXRJdGVtT2Zmc2V0ID0gX3JlZi5nZXRJdGVtT2Zmc2V0LFxuICAgICAgZ2V0RXN0aW1hdGVkVG90YWxTaXplID0gX3JlZi5nZXRFc3RpbWF0ZWRUb3RhbFNpemUsXG4gICAgICBnZXRJdGVtU2l6ZSA9IF9yZWYuZ2V0SXRlbVNpemUsXG4gICAgICBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudCA9IF9yZWYuZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQsXG4gICAgICBnZXRTdGFydEluZGV4Rm9yT2Zmc2V0ID0gX3JlZi5nZXRTdGFydEluZGV4Rm9yT2Zmc2V0LFxuICAgICAgZ2V0U3RvcEluZGV4Rm9yU3RhcnRJbmRleCA9IF9yZWYuZ2V0U3RvcEluZGV4Rm9yU3RhcnRJbmRleCxcbiAgICAgIGluaXRJbnN0YW5jZVByb3BzID0gX3JlZi5pbml0SW5zdGFuY2VQcm9wcyxcbiAgICAgIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgPSBfcmVmLnNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UsXG4gICAgICB2YWxpZGF0ZVByb3BzID0gX3JlZi52YWxpZGF0ZVByb3BzO1xuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKExpc3QsIF9QdXJlQ29tcG9uZW50KTtcblxuICAgIC8vIEFsd2F5cyB1c2UgZXhwbGljaXQgY29uc3RydWN0b3IgZm9yIFJlYWN0IGNvbXBvbmVudHMuXG4gICAgLy8gSXQgcHJvZHVjZXMgbGVzcyBjb2RlIGFmdGVyIHRyYW5zcGlsYXRpb24uICgjMjYpXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZWxlc3MtY29uc3RydWN0b3JcbiAgICBmdW5jdGlvbiBMaXN0KHByb3BzKSB7XG4gICAgICB2YXIgX3RoaXM7XG5cbiAgICAgIF90aGlzID0gX1B1cmVDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgIF90aGlzLl9pbnN0YW5jZVByb3BzID0gaW5pdEluc3RhbmNlUHJvcHMoX3RoaXMucHJvcHMsIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpKTtcbiAgICAgIF90aGlzLl9vdXRlclJlZiA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkID0gbnVsbDtcbiAgICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgICBpbnN0YW5jZTogX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksXG4gICAgICAgIGlzU2Nyb2xsaW5nOiBmYWxzZSxcbiAgICAgICAgc2Nyb2xsRGlyZWN0aW9uOiAnZm9yd2FyZCcsXG4gICAgICAgIHNjcm9sbE9mZnNldDogdHlwZW9mIF90aGlzLnByb3BzLmluaXRpYWxTY3JvbGxPZmZzZXQgPT09ICdudW1iZXInID8gX3RoaXMucHJvcHMuaW5pdGlhbFNjcm9sbE9mZnNldCA6IDAsXG4gICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogZmFsc2VcbiAgICAgIH07XG4gICAgICBfdGhpcy5fY2FsbE9uSXRlbXNSZW5kZXJlZCA9IHZvaWQgMDtcbiAgICAgIF90aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkID0gbWVtb2l6ZU9uZShmdW5jdGlvbiAob3ZlcnNjYW5TdGFydEluZGV4LCBvdmVyc2NhblN0b3BJbmRleCwgdmlzaWJsZVN0YXJ0SW5kZXgsIHZpc2libGVTdG9wSW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uSXRlbXNSZW5kZXJlZCh7XG4gICAgICAgICAgb3ZlcnNjYW5TdGFydEluZGV4OiBvdmVyc2NhblN0YXJ0SW5kZXgsXG4gICAgICAgICAgb3ZlcnNjYW5TdG9wSW5kZXg6IG92ZXJzY2FuU3RvcEluZGV4LFxuICAgICAgICAgIHZpc2libGVTdGFydEluZGV4OiB2aXNpYmxlU3RhcnRJbmRleCxcbiAgICAgICAgICB2aXNpYmxlU3RvcEluZGV4OiB2aXNpYmxlU3RvcEluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBfdGhpcy5fY2FsbE9uU2Nyb2xsID0gdm9pZCAwO1xuICAgICAgX3RoaXMuX2NhbGxPblNjcm9sbCA9IG1lbW9pemVPbmUoZnVuY3Rpb24gKHNjcm9sbERpcmVjdGlvbiwgc2Nyb2xsT2Zmc2V0LCBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByb3BzLm9uU2Nyb2xsKHtcbiAgICAgICAgICBzY3JvbGxEaXJlY3Rpb246IHNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICBzY3JvbGxPZmZzZXQ6IHNjcm9sbE9mZnNldCxcbiAgICAgICAgICBzY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQ6IHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZSA9IHZvaWQgMDtcblxuICAgICAgX3RoaXMuX2dldEl0ZW1TdHlsZSA9IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF90aGlzJHByb3BzLmRpcmVjdGlvbixcbiAgICAgICAgICAgIGl0ZW1TaXplID0gX3RoaXMkcHJvcHMuaXRlbVNpemUsXG4gICAgICAgICAgICBsYXlvdXQgPSBfdGhpcyRwcm9wcy5sYXlvdXQ7XG5cbiAgICAgICAgdmFyIGl0ZW1TdHlsZUNhY2hlID0gX3RoaXMuX2dldEl0ZW1TdHlsZUNhY2hlKHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgaXRlbVNpemUsIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2UgJiYgbGF5b3V0LCBzaG91bGRSZXNldFN0eWxlQ2FjaGVPbkl0ZW1TaXplQ2hhbmdlICYmIGRpcmVjdGlvbik7XG5cbiAgICAgICAgdmFyIHN0eWxlO1xuXG4gICAgICAgIGlmIChpdGVtU3R5bGVDYWNoZS5oYXNPd25Qcm9wZXJ0eShpbmRleCkpIHtcbiAgICAgICAgICBzdHlsZSA9IGl0ZW1TdHlsZUNhY2hlW2luZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX29mZnNldCA9IGdldEl0ZW1PZmZzZXQoX3RoaXMucHJvcHMsIGluZGV4LCBfdGhpcy5faW5zdGFuY2VQcm9wcyk7XG5cbiAgICAgICAgICB2YXIgc2l6ZSA9IGdldEl0ZW1TaXplKF90aGlzLnByb3BzLCBpbmRleCwgX3RoaXMuX2luc3RhbmNlUHJvcHMpOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgICAgICAgIHZhciBpc0hvcml6b250YWwgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICAgICAgICB2YXIgaXNSdGwgPSBkaXJlY3Rpb24gPT09ICdydGwnO1xuICAgICAgICAgIHZhciBvZmZzZXRIb3Jpem9udGFsID0gaXNIb3Jpem9udGFsID8gX29mZnNldCA6IDA7XG4gICAgICAgICAgaXRlbVN0eWxlQ2FjaGVbaW5kZXhdID0gc3R5bGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6IGlzUnRsID8gdW5kZWZpbmVkIDogb2Zmc2V0SG9yaXpvbnRhbCxcbiAgICAgICAgICAgIHJpZ2h0OiBpc1J0bCA/IG9mZnNldEhvcml6b250YWwgOiB1bmRlZmluZWQsXG4gICAgICAgICAgICB0b3A6ICFpc0hvcml6b250YWwgPyBfb2Zmc2V0IDogMCxcbiAgICAgICAgICAgIGhlaWdodDogIWlzSG9yaXpvbnRhbCA/IHNpemUgOiAnMTAwJScsXG4gICAgICAgICAgICB3aWR0aDogaXNIb3Jpem9udGFsID8gc2l6ZSA6ICcxMDAlJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlQ2FjaGUgPSB2b2lkIDA7XG4gICAgICBfdGhpcy5fZ2V0SXRlbVN0eWxlQ2FjaGUgPSBtZW1vaXplT25lKGZ1bmN0aW9uIChfLCBfXywgX19fKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH0pO1xuXG4gICAgICBfdGhpcy5fb25TY3JvbGxIb3Jpem9udGFsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfZXZlbnQkY3VycmVudFRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQsXG4gICAgICAgICAgICBjbGllbnRXaWR0aCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LmNsaWVudFdpZHRoLFxuICAgICAgICAgICAgc2Nyb2xsTGVmdCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LnNjcm9sbExlZnQsXG4gICAgICAgICAgICBzY3JvbGxXaWR0aCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0LnNjcm9sbFdpZHRoO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICBpZiAocHJldlN0YXRlLnNjcm9sbE9mZnNldCA9PT0gc2Nyb2xsTGVmdCkge1xuICAgICAgICAgICAgLy8gU2Nyb2xsIHBvc2l0aW9uIG1heSBoYXZlIGJlZW4gdXBkYXRlZCBieSBjRE0vY0RVLFxuICAgICAgICAgICAgLy8gSW4gd2hpY2ggY2FzZSB3ZSBkb24ndCBuZWVkIHRvIHRyaWdnZXIgYW5vdGhlciByZW5kZXIsXG4gICAgICAgICAgICAvLyBBbmQgd2UgZG9uJ3Qgd2FudCB0byB1cGRhdGUgc3RhdGUuaXNTY3JvbGxpbmcuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZGlyZWN0aW9uID0gX3RoaXMucHJvcHMuZGlyZWN0aW9uO1xuICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXQgPSBzY3JvbGxMZWZ0O1xuXG4gICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ3J0bCcpIHtcbiAgICAgICAgICAgIC8vIFRSSUNLWSBBY2NvcmRpbmcgdG8gdGhlIHNwZWMsIHNjcm9sbExlZnQgc2hvdWxkIGJlIG5lZ2F0aXZlIGZvciBSVEwgYWxpZ25lZCBlbGVtZW50cy5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgbm90IHRoZSBjYXNlIGZvciBhbGwgYnJvd3NlcnMgdGhvdWdoIChlLmcuIENocm9tZSByZXBvcnRzIHZhbHVlcyBhcyBwb3NpdGl2ZSwgbWVhc3VyZWQgcmVsYXRpdmUgdG8gdGhlIGxlZnQpLlxuICAgICAgICAgICAgLy8gSXQncyBhbHNvIGVhc2llciBmb3IgdGhpcyBjb21wb25lbnQgaWYgd2UgY29udmVydCBvZmZzZXRzIHRvIHRoZSBzYW1lIGZvcm1hdCBhcyB0aGV5IHdvdWxkIGJlIGluIGZvciBsdHIuXG4gICAgICAgICAgICAvLyBTbyB0aGUgc2ltcGxlc3Qgc29sdXRpb24gaXMgdG8gZGV0ZXJtaW5lIHdoaWNoIGJyb3dzZXIgYmVoYXZpb3Igd2UncmUgZGVhbGluZyB3aXRoLCBhbmQgY29udmVydCBiYXNlZCBvbiBpdC5cbiAgICAgICAgICAgIHN3aXRjaCAoZ2V0UlRMT2Zmc2V0VHlwZSgpKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ25lZ2F0aXZlJzpcbiAgICAgICAgICAgICAgICBzY3JvbGxPZmZzZXQgPSAtc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlICdwb3NpdGl2ZS1kZXNjZW5kaW5nJzpcbiAgICAgICAgICAgICAgICBzY3JvbGxPZmZzZXQgPSBzY3JvbGxXaWR0aCAtIGNsaWVudFdpZHRoIC0gc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IC8vIFByZXZlbnQgU2FmYXJpJ3MgZWxhc3RpYyBzY3JvbGxpbmcgZnJvbSBjYXVzaW5nIHZpc3VhbCBzaGFraW5nIHdoZW4gc2Nyb2xsaW5nIHBhc3QgYm91bmRzLlxuXG5cbiAgICAgICAgICBzY3JvbGxPZmZzZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzY3JvbGxPZmZzZXQsIHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGgpKTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaXNTY3JvbGxpbmc6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGxEaXJlY3Rpb246IHByZXZTdGF0ZS5zY3JvbGxPZmZzZXQgPCBzY3JvbGxMZWZ0ID8gJ2ZvcndhcmQnIDogJ2JhY2t3YXJkJyxcbiAgICAgICAgICAgIHNjcm9sbE9mZnNldDogc2Nyb2xsT2Zmc2V0LFxuICAgICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiBmYWxzZVxuICAgICAgICAgIH07XG4gICAgICAgIH0sIF90aGlzLl9yZXNldElzU2Nyb2xsaW5nRGVib3VuY2VkKTtcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLl9vblNjcm9sbFZlcnRpY2FsID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZhciBfZXZlbnQkY3VycmVudFRhcmdldDIgPSBldmVudC5jdXJyZW50VGFyZ2V0LFxuICAgICAgICAgICAgY2xpZW50SGVpZ2h0ID0gX2V2ZW50JGN1cnJlbnRUYXJnZXQyLmNsaWVudEhlaWdodCxcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCA9IF9ldmVudCRjdXJyZW50VGFyZ2V0Mi5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICBzY3JvbGxUb3AgPSBfZXZlbnQkY3VycmVudFRhcmdldDIuc2Nyb2xsVG9wO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgICBpZiAocHJldlN0YXRlLnNjcm9sbE9mZnNldCA9PT0gc2Nyb2xsVG9wKSB7XG4gICAgICAgICAgICAvLyBTY3JvbGwgcG9zaXRpb24gbWF5IGhhdmUgYmVlbiB1cGRhdGVkIGJ5IGNETS9jRFUsXG4gICAgICAgICAgICAvLyBJbiB3aGljaCBjYXNlIHdlIGRvbid0IG5lZWQgdG8gdHJpZ2dlciBhbm90aGVyIHJlbmRlcixcbiAgICAgICAgICAgIC8vIEFuZCB3ZSBkb24ndCB3YW50IHRvIHVwZGF0ZSBzdGF0ZS5pc1Njcm9sbGluZy5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH0gLy8gUHJldmVudCBTYWZhcmkncyBlbGFzdGljIHNjcm9sbGluZyBmcm9tIGNhdXNpbmcgdmlzdWFsIHNoYWtpbmcgd2hlbiBzY3JvbGxpbmcgcGFzdCBib3VuZHMuXG5cblxuICAgICAgICAgIHZhciBzY3JvbGxPZmZzZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihzY3JvbGxUb3AsIHNjcm9sbEhlaWdodCAtIGNsaWVudEhlaWdodCkpO1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1Njcm9sbGluZzogdHJ1ZSxcbiAgICAgICAgICAgIHNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbE9mZnNldCA8IHNjcm9sbE9mZnNldCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCcsXG4gICAgICAgICAgICBzY3JvbGxPZmZzZXQ6IHNjcm9sbE9mZnNldCxcbiAgICAgICAgICAgIHNjcm9sbFVwZGF0ZVdhc1JlcXVlc3RlZDogZmFsc2VcbiAgICAgICAgICB9O1xuICAgICAgICB9LCBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ0RlYm91bmNlZCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fb3V0ZXJSZWZTZXR0ZXIgPSBmdW5jdGlvbiAocmVmKSB7XG4gICAgICAgIHZhciBvdXRlclJlZiA9IF90aGlzLnByb3BzLm91dGVyUmVmO1xuICAgICAgICBfdGhpcy5fb3V0ZXJSZWYgPSByZWY7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvdXRlclJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIG91dGVyUmVmKHJlZik7XG4gICAgICAgIH0gZWxzZSBpZiAob3V0ZXJSZWYgIT0gbnVsbCAmJiB0eXBlb2Ygb3V0ZXJSZWYgPT09ICdvYmplY3QnICYmIG91dGVyUmVmLmhhc093blByb3BlcnR5KCdjdXJyZW50JykpIHtcbiAgICAgICAgICBvdXRlclJlZi5jdXJyZW50ID0gcmVmO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ0RlYm91bmNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKF90aGlzLl9yZXNldElzU2Nyb2xsaW5nVGltZW91dElkICE9PSBudWxsKSB7XG4gICAgICAgICAgY2FuY2VsVGltZW91dChfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCk7XG4gICAgICAgIH1cblxuICAgICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCA9IHJlcXVlc3RUaW1lb3V0KF90aGlzLl9yZXNldElzU2Nyb2xsaW5nLCBJU19TQ1JPTExJTkdfREVCT1VOQ0VfSU5URVJWQUwkMSk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5fcmVzZXRJc1Njcm9sbGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQgPSBudWxsO1xuXG4gICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpc1Njcm9sbGluZzogZmFsc2VcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIENsZWFyIHN0eWxlIGNhY2hlIGFmdGVyIHN0YXRlIHVwZGF0ZSBoYXMgYmVlbiBjb21taXR0ZWQuXG4gICAgICAgICAgLy8gVGhpcyB3YXkgd2UgZG9uJ3QgYnJlYWsgcHVyZSBzQ1UgZm9yIGl0ZW1zIHRoYXQgZG9uJ3QgdXNlIGlzU2Nyb2xsaW5nIHBhcmFtLlxuICAgICAgICAgIF90aGlzLl9nZXRJdGVtU3R5bGVDYWNoZSgtMSwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIExpc3QuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKG5leHRQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICB2YWxpZGF0ZVNoYXJlZFByb3BzJDEobmV4dFByb3BzLCBwcmV2U3RhdGUpO1xuICAgICAgdmFsaWRhdGVQcm9wcyhuZXh0UHJvcHMpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHZhciBfcHJvdG8gPSBMaXN0LnByb3RvdHlwZTtcblxuICAgIF9wcm90by5zY3JvbGxUbyA9IGZ1bmN0aW9uIHNjcm9sbFRvKHNjcm9sbE9mZnNldCkge1xuICAgICAgc2Nyb2xsT2Zmc2V0ID0gTWF0aC5tYXgoMCwgc2Nyb2xsT2Zmc2V0KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKHByZXZTdGF0ZSkge1xuICAgICAgICBpZiAocHJldlN0YXRlLnNjcm9sbE9mZnNldCA9PT0gc2Nyb2xsT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNjcm9sbERpcmVjdGlvbjogcHJldlN0YXRlLnNjcm9sbE9mZnNldCA8IHNjcm9sbE9mZnNldCA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCcsXG4gICAgICAgICAgc2Nyb2xsT2Zmc2V0OiBzY3JvbGxPZmZzZXQsXG4gICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkOiB0cnVlXG4gICAgICAgIH07XG4gICAgICB9LCB0aGlzLl9yZXNldElzU2Nyb2xsaW5nRGVib3VuY2VkKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnNjcm9sbFRvSXRlbSA9IGZ1bmN0aW9uIHNjcm9sbFRvSXRlbShpbmRleCwgYWxpZ24pIHtcbiAgICAgIGlmIChhbGlnbiA9PT0gdm9pZCAwKSB7XG4gICAgICAgIGFsaWduID0gJ2F1dG8nO1xuICAgICAgfVxuXG4gICAgICB2YXIgaXRlbUNvdW50ID0gdGhpcy5wcm9wcy5pdGVtQ291bnQ7XG4gICAgICB2YXIgc2Nyb2xsT2Zmc2V0ID0gdGhpcy5zdGF0ZS5zY3JvbGxPZmZzZXQ7XG4gICAgICBpbmRleCA9IE1hdGgubWF4KDAsIE1hdGgubWluKGluZGV4LCBpdGVtQ291bnQgLSAxKSk7XG4gICAgICB0aGlzLnNjcm9sbFRvKGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KHRoaXMucHJvcHMsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0LCB0aGlzLl9pbnN0YW5jZVByb3BzKSk7XG4gICAgfTtcblxuICAgIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHMyLmRpcmVjdGlvbixcbiAgICAgICAgICBpbml0aWFsU2Nyb2xsT2Zmc2V0ID0gX3RoaXMkcHJvcHMyLmluaXRpYWxTY3JvbGxPZmZzZXQsXG4gICAgICAgICAgbGF5b3V0ID0gX3RoaXMkcHJvcHMyLmxheW91dDtcblxuICAgICAgaWYgKHR5cGVvZiBpbml0aWFsU2Nyb2xsT2Zmc2V0ID09PSAnbnVtYmVyJyAmJiB0aGlzLl9vdXRlclJlZiAhPSBudWxsKSB7XG4gICAgICAgIHZhciBvdXRlclJlZiA9IHRoaXMuX291dGVyUmVmOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcgfHwgbGF5b3V0ID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gaW5pdGlhbFNjcm9sbE9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvdXRlclJlZi5zY3JvbGxUb3AgPSBpbml0aWFsU2Nyb2xsT2Zmc2V0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2NhbGxQcm9wc0NhbGxiYWNrcygpO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHMzLmRpcmVjdGlvbixcbiAgICAgICAgICBsYXlvdXQgPSBfdGhpcyRwcm9wczMubGF5b3V0O1xuICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzY3JvbGxPZmZzZXQgPSBfdGhpcyRzdGF0ZS5zY3JvbGxPZmZzZXQsXG4gICAgICAgICAgc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkID0gX3RoaXMkc3RhdGUuc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkO1xuXG4gICAgICBpZiAoc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkICYmIHRoaXMuX291dGVyUmVmICE9IG51bGwpIHtcbiAgICAgICAgdmFyIG91dGVyUmVmID0gdGhpcy5fb3V0ZXJSZWY7IC8vIFRPRE8gRGVwcmVjYXRlIGRpcmVjdGlvbiBcImhvcml6b250YWxcIlxuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgICAgICAgICAvLyBUUklDS1kgQWNjb3JkaW5nIHRvIHRoZSBzcGVjLCBzY3JvbGxMZWZ0IHNob3VsZCBiZSBuZWdhdGl2ZSBmb3IgUlRMIGFsaWduZWQgZWxlbWVudHMuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIG5vdCB0aGUgY2FzZSBmb3IgYWxsIGJyb3dzZXJzIHRob3VnaCAoZS5nLiBDaHJvbWUgcmVwb3J0cyB2YWx1ZXMgYXMgcG9zaXRpdmUsIG1lYXN1cmVkIHJlbGF0aXZlIHRvIHRoZSBsZWZ0KS5cbiAgICAgICAgICAgIC8vIFNvIHdlIG5lZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGJyb3dzZXIgYmVoYXZpb3Igd2UncmUgZGVhbGluZyB3aXRoLCBhbmQgbWltaWMgaXQuXG4gICAgICAgICAgICBzd2l0Y2ggKGdldFJUTE9mZnNldFR5cGUoKSkge1xuICAgICAgICAgICAgICBjYXNlICduZWdhdGl2ZSc6XG4gICAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IC1zY3JvbGxPZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgY2FzZSAncG9zaXRpdmUtYXNjZW5kaW5nJzpcbiAgICAgICAgICAgICAgICBvdXRlclJlZi5zY3JvbGxMZWZ0ID0gc2Nyb2xsT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudFdpZHRoID0gb3V0ZXJSZWYuY2xpZW50V2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFdpZHRoID0gb3V0ZXJSZWYuc2Nyb2xsV2lkdGg7XG4gICAgICAgICAgICAgICAgb3V0ZXJSZWYuc2Nyb2xsTGVmdCA9IHNjcm9sbFdpZHRoIC0gY2xpZW50V2lkdGggLSBzY3JvbGxPZmZzZXQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dGVyUmVmLnNjcm9sbExlZnQgPSBzY3JvbGxPZmZzZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dGVyUmVmLnNjcm9sbFRvcCA9IHNjcm9sbE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLl9jYWxsUHJvcHNDYWxsYmFja3MoKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5fcmVzZXRJc1Njcm9sbGluZ1RpbWVvdXRJZCAhPT0gbnVsbCkge1xuICAgICAgICBjYW5jZWxUaW1lb3V0KHRoaXMuX3Jlc2V0SXNTY3JvbGxpbmdUaW1lb3V0SWQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wczQuY2hpbGRyZW4sXG4gICAgICAgICAgY2xhc3NOYW1lID0gX3RoaXMkcHJvcHM0LmNsYXNzTmFtZSxcbiAgICAgICAgICBkaXJlY3Rpb24gPSBfdGhpcyRwcm9wczQuZGlyZWN0aW9uLFxuICAgICAgICAgIGhlaWdodCA9IF90aGlzJHByb3BzNC5oZWlnaHQsXG4gICAgICAgICAgaW5uZXJSZWYgPSBfdGhpcyRwcm9wczQuaW5uZXJSZWYsXG4gICAgICAgICAgaW5uZXJFbGVtZW50VHlwZSA9IF90aGlzJHByb3BzNC5pbm5lckVsZW1lbnRUeXBlLFxuICAgICAgICAgIGlubmVyVGFnTmFtZSA9IF90aGlzJHByb3BzNC5pbm5lclRhZ05hbWUsXG4gICAgICAgICAgaXRlbUNvdW50ID0gX3RoaXMkcHJvcHM0Lml0ZW1Db3VudCxcbiAgICAgICAgICBpdGVtRGF0YSA9IF90aGlzJHByb3BzNC5pdGVtRGF0YSxcbiAgICAgICAgICBfdGhpcyRwcm9wczQkaXRlbUtleSA9IF90aGlzJHByb3BzNC5pdGVtS2V5LFxuICAgICAgICAgIGl0ZW1LZXkgPSBfdGhpcyRwcm9wczQkaXRlbUtleSA9PT0gdm9pZCAwID8gZGVmYXVsdEl0ZW1LZXkkMSA6IF90aGlzJHByb3BzNCRpdGVtS2V5LFxuICAgICAgICAgIGxheW91dCA9IF90aGlzJHByb3BzNC5sYXlvdXQsXG4gICAgICAgICAgb3V0ZXJFbGVtZW50VHlwZSA9IF90aGlzJHByb3BzNC5vdXRlckVsZW1lbnRUeXBlLFxuICAgICAgICAgIG91dGVyVGFnTmFtZSA9IF90aGlzJHByb3BzNC5vdXRlclRhZ05hbWUsXG4gICAgICAgICAgc3R5bGUgPSBfdGhpcyRwcm9wczQuc3R5bGUsXG4gICAgICAgICAgdXNlSXNTY3JvbGxpbmcgPSBfdGhpcyRwcm9wczQudXNlSXNTY3JvbGxpbmcsXG4gICAgICAgICAgd2lkdGggPSBfdGhpcyRwcm9wczQud2lkdGg7XG4gICAgICB2YXIgaXNTY3JvbGxpbmcgPSB0aGlzLnN0YXRlLmlzU2Nyb2xsaW5nOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgICAgdmFyIG9uU2Nyb2xsID0gaXNIb3Jpem9udGFsID8gdGhpcy5fb25TY3JvbGxIb3Jpem9udGFsIDogdGhpcy5fb25TY3JvbGxWZXJ0aWNhbDtcblxuICAgICAgdmFyIF90aGlzJF9nZXRSYW5nZVRvUmVuZCA9IHRoaXMuX2dldFJhbmdlVG9SZW5kZXIoKSxcbiAgICAgICAgICBzdGFydEluZGV4ID0gX3RoaXMkX2dldFJhbmdlVG9SZW5kWzBdLFxuICAgICAgICAgIHN0b3BJbmRleCA9IF90aGlzJF9nZXRSYW5nZVRvUmVuZFsxXTtcblxuICAgICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICAgIGlmIChpdGVtQ291bnQgPiAwKSB7XG4gICAgICAgIGZvciAodmFyIF9pbmRleCA9IHN0YXJ0SW5kZXg7IF9pbmRleCA8PSBzdG9wSW5kZXg7IF9pbmRleCsrKSB7XG4gICAgICAgICAgaXRlbXMucHVzaChjcmVhdGVFbGVtZW50KGNoaWxkcmVuLCB7XG4gICAgICAgICAgICBkYXRhOiBpdGVtRGF0YSxcbiAgICAgICAgICAgIGtleTogaXRlbUtleShfaW5kZXgsIGl0ZW1EYXRhKSxcbiAgICAgICAgICAgIGluZGV4OiBfaW5kZXgsXG4gICAgICAgICAgICBpc1Njcm9sbGluZzogdXNlSXNTY3JvbGxpbmcgPyBpc1Njcm9sbGluZyA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHN0eWxlOiB0aGlzLl9nZXRJdGVtU3R5bGUoX2luZGV4KVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfSAvLyBSZWFkIHRoaXMgdmFsdWUgQUZURVIgaXRlbXMgaGF2ZSBiZWVuIGNyZWF0ZWQsXG4gICAgICAvLyBTbyB0aGVpciBhY3R1YWwgc2l6ZXMgKGlmIHZhcmlhYmxlKSBhcmUgdGFrZW4gaW50byBjb25zaWRlcmF0aW9uLlxuXG5cbiAgICAgIHZhciBlc3RpbWF0ZWRUb3RhbFNpemUgPSBnZXRFc3RpbWF0ZWRUb3RhbFNpemUodGhpcy5wcm9wcywgdGhpcy5faW5zdGFuY2VQcm9wcyk7XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChvdXRlckVsZW1lbnRUeXBlIHx8IG91dGVyVGFnTmFtZSB8fCAnZGl2Jywge1xuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgb25TY3JvbGw6IG9uU2Nyb2xsLFxuICAgICAgICByZWY6IHRoaXMuX291dGVyUmVmU2V0dGVyLFxuICAgICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgIGhlaWdodDogaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICBvdmVyZmxvdzogJ2F1dG8nLFxuICAgICAgICAgIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiAndG91Y2gnLFxuICAgICAgICAgIHdpbGxDaGFuZ2U6ICd0cmFuc2Zvcm0nLFxuICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgIH0sIHN0eWxlKVxuICAgICAgfSwgY3JlYXRlRWxlbWVudChpbm5lckVsZW1lbnRUeXBlIHx8IGlubmVyVGFnTmFtZSB8fCAnZGl2Jywge1xuICAgICAgICBjaGlsZHJlbjogaXRlbXMsXG4gICAgICAgIHJlZjogaW5uZXJSZWYsXG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgaGVpZ2h0OiBpc0hvcml6b250YWwgPyAnMTAwJScgOiBlc3RpbWF0ZWRUb3RhbFNpemUsXG4gICAgICAgICAgcG9pbnRlckV2ZW50czogaXNTY3JvbGxpbmcgPyAnbm9uZScgOiB1bmRlZmluZWQsXG4gICAgICAgICAgd2lkdGg6IGlzSG9yaXpvbnRhbCA/IGVzdGltYXRlZFRvdGFsU2l6ZSA6ICcxMDAlJ1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gICAgfTtcblxuICAgIF9wcm90by5fY2FsbFByb3BzQ2FsbGJhY2tzID0gZnVuY3Rpb24gX2NhbGxQcm9wc0NhbGxiYWNrcygpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5vbkl0ZW1zUmVuZGVyZWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGl0ZW1Db3VudCA9IHRoaXMucHJvcHMuaXRlbUNvdW50O1xuXG4gICAgICAgIGlmIChpdGVtQ291bnQgPiAwKSB7XG4gICAgICAgICAgdmFyIF90aGlzJF9nZXRSYW5nZVRvUmVuZDIgPSB0aGlzLl9nZXRSYW5nZVRvUmVuZGVyKCksXG4gICAgICAgICAgICAgIF9vdmVyc2NhblN0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmQyWzBdLFxuICAgICAgICAgICAgICBfb3ZlcnNjYW5TdG9wSW5kZXggPSBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmQyWzFdLFxuICAgICAgICAgICAgICBfdmlzaWJsZVN0YXJ0SW5kZXggPSBfdGhpcyRfZ2V0UmFuZ2VUb1JlbmQyWzJdLFxuICAgICAgICAgICAgICBfdmlzaWJsZVN0b3BJbmRleCA9IF90aGlzJF9nZXRSYW5nZVRvUmVuZDJbM107XG5cbiAgICAgICAgICB0aGlzLl9jYWxsT25JdGVtc1JlbmRlcmVkKF9vdmVyc2NhblN0YXJ0SW5kZXgsIF9vdmVyc2NhblN0b3BJbmRleCwgX3Zpc2libGVTdGFydEluZGV4LCBfdmlzaWJsZVN0b3BJbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uU2Nyb2xsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBfdGhpcyRzdGF0ZTIgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgICAgX3Njcm9sbERpcmVjdGlvbiA9IF90aGlzJHN0YXRlMi5zY3JvbGxEaXJlY3Rpb24sXG4gICAgICAgICAgICBfc2Nyb2xsT2Zmc2V0ID0gX3RoaXMkc3RhdGUyLnNjcm9sbE9mZnNldCxcbiAgICAgICAgICAgIF9zY3JvbGxVcGRhdGVXYXNSZXF1ZXN0ZWQgPSBfdGhpcyRzdGF0ZTIuc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkO1xuXG4gICAgICAgIHRoaXMuX2NhbGxPblNjcm9sbChfc2Nyb2xsRGlyZWN0aW9uLCBfc2Nyb2xsT2Zmc2V0LCBfc2Nyb2xsVXBkYXRlV2FzUmVxdWVzdGVkKTtcbiAgICAgIH1cbiAgICB9OyAvLyBMYXppbHkgY3JlYXRlIGFuZCBjYWNoZSBpdGVtIHN0eWxlcyB3aGlsZSBzY3JvbGxpbmcsXG4gICAgLy8gU28gdGhhdCBwdXJlIGNvbXBvbmVudCBzQ1Ugd2lsbCBwcmV2ZW50IHJlLXJlbmRlcnMuXG4gICAgLy8gV2UgbWFpbnRhaW4gdGhpcyBjYWNoZSwgYW5kIHBhc3MgYSBzdHlsZSBwcm9wIHJhdGhlciB0aGFuIGluZGV4LFxuICAgIC8vIFNvIHRoYXQgTGlzdCBjYW4gY2xlYXIgY2FjaGVkIHN0eWxlcyBhbmQgZm9yY2UgaXRlbSByZS1yZW5kZXIgaWYgbmVjZXNzYXJ5LlxuXG5cbiAgICBfcHJvdG8uX2dldFJhbmdlVG9SZW5kZXIgPSBmdW5jdGlvbiBfZ2V0UmFuZ2VUb1JlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGl0ZW1Db3VudCA9IF90aGlzJHByb3BzNS5pdGVtQ291bnQsXG4gICAgICAgICAgb3ZlcnNjYW5Db3VudCA9IF90aGlzJHByb3BzNS5vdmVyc2NhbkNvdW50O1xuICAgICAgdmFyIF90aGlzJHN0YXRlMyA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgaXNTY3JvbGxpbmcgPSBfdGhpcyRzdGF0ZTMuaXNTY3JvbGxpbmcsXG4gICAgICAgICAgc2Nyb2xsRGlyZWN0aW9uID0gX3RoaXMkc3RhdGUzLnNjcm9sbERpcmVjdGlvbixcbiAgICAgICAgICBzY3JvbGxPZmZzZXQgPSBfdGhpcyRzdGF0ZTMuc2Nyb2xsT2Zmc2V0O1xuXG4gICAgICBpZiAoaXRlbUNvdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiBbMCwgMCwgMCwgMF07XG4gICAgICB9XG5cbiAgICAgIHZhciBzdGFydEluZGV4ID0gZ2V0U3RhcnRJbmRleEZvck9mZnNldCh0aGlzLnByb3BzLCBzY3JvbGxPZmZzZXQsIHRoaXMuX2luc3RhbmNlUHJvcHMpO1xuICAgICAgdmFyIHN0b3BJbmRleCA9IGdldFN0b3BJbmRleEZvclN0YXJ0SW5kZXgodGhpcy5wcm9wcywgc3RhcnRJbmRleCwgc2Nyb2xsT2Zmc2V0LCB0aGlzLl9pbnN0YW5jZVByb3BzKTsgLy8gT3ZlcnNjYW4gYnkgb25lIGl0ZW0gaW4gZWFjaCBkaXJlY3Rpb24gc28gdGhhdCB0YWIvZm9jdXMgd29ya3MuXG4gICAgICAvLyBJZiB0aGVyZSBpc24ndCBhdCBsZWFzdCBvbmUgZXh0cmEgaXRlbSwgdGFiIGxvb3BzIGJhY2sgYXJvdW5kLlxuXG4gICAgICB2YXIgb3ZlcnNjYW5CYWNrd2FyZCA9ICFpc1Njcm9sbGluZyB8fCBzY3JvbGxEaXJlY3Rpb24gPT09ICdiYWNrd2FyZCcgPyBNYXRoLm1heCgxLCBvdmVyc2NhbkNvdW50KSA6IDE7XG4gICAgICB2YXIgb3ZlcnNjYW5Gb3J3YXJkID0gIWlzU2Nyb2xsaW5nIHx8IHNjcm9sbERpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnID8gTWF0aC5tYXgoMSwgb3ZlcnNjYW5Db3VudCkgOiAxO1xuICAgICAgcmV0dXJuIFtNYXRoLm1heCgwLCBzdGFydEluZGV4IC0gb3ZlcnNjYW5CYWNrd2FyZCksIE1hdGgubWF4KDAsIE1hdGgubWluKGl0ZW1Db3VudCAtIDEsIHN0b3BJbmRleCArIG92ZXJzY2FuRm9yd2FyZCkpLCBzdGFydEluZGV4LCBzdG9wSW5kZXhdO1xuICAgIH07XG5cbiAgICByZXR1cm4gTGlzdDtcbiAgfShQdXJlQ29tcG9uZW50KSwgX2NsYXNzLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBkaXJlY3Rpb246ICdsdHInLFxuICAgIGl0ZW1EYXRhOiB1bmRlZmluZWQsXG4gICAgbGF5b3V0OiAndmVydGljYWwnLFxuICAgIG92ZXJzY2FuQ291bnQ6IDIsXG4gICAgdXNlSXNTY3JvbGxpbmc6IGZhbHNlXG4gIH0sIF90ZW1wO1xufSAvLyBOT1RFOiBJIGNvbnNpZGVyZWQgZnVydGhlciB3cmFwcGluZyBpbmRpdmlkdWFsIGl0ZW1zIHdpdGggYSBwdXJlIExpc3RJdGVtIGNvbXBvbmVudC5cbi8vIFRoaXMgd291bGQgYXZvaWQgZXZlciBjYWxsaW5nIHRoZSByZW5kZXIgZnVuY3Rpb24gZm9yIHRoZSBzYW1lIGluZGV4IG1vcmUgdGhhbiBvbmNlLFxuLy8gQnV0IGl0IHdvdWxkIGFsc28gYWRkIHRoZSBvdmVyaGVhZCBvZiBhIGxvdCBvZiBjb21wb25lbnRzL2ZpYmVycy5cbi8vIEkgYXNzdW1lIHBlb3BsZSBhbHJlYWR5IGRvIHRoaXMgKHJlbmRlciBmdW5jdGlvbiByZXR1cm5pbmcgYSBjbGFzcyBjb21wb25lbnQpLFxuLy8gU28gbXkgZG9pbmcgaXQgd291bGQganVzdCB1bm5lY2Vzc2FyaWx5IGRvdWJsZSB0aGUgd3JhcHBlcnMuXG5cbnZhciB2YWxpZGF0ZVNoYXJlZFByb3BzJDEgPSBmdW5jdGlvbiB2YWxpZGF0ZVNoYXJlZFByb3BzKF9yZWYyLCBfcmVmMykge1xuICB2YXIgY2hpbGRyZW4gPSBfcmVmMi5jaGlsZHJlbixcbiAgICAgIGRpcmVjdGlvbiA9IF9yZWYyLmRpcmVjdGlvbixcbiAgICAgIGhlaWdodCA9IF9yZWYyLmhlaWdodCxcbiAgICAgIGxheW91dCA9IF9yZWYyLmxheW91dCxcbiAgICAgIGlubmVyVGFnTmFtZSA9IF9yZWYyLmlubmVyVGFnTmFtZSxcbiAgICAgIG91dGVyVGFnTmFtZSA9IF9yZWYyLm91dGVyVGFnTmFtZSxcbiAgICAgIHdpZHRoID0gX3JlZjIud2lkdGg7XG4gIHZhciBpbnN0YW5jZSA9IF9yZWYzLmluc3RhbmNlO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGlubmVyVGFnTmFtZSAhPSBudWxsIHx8IG91dGVyVGFnTmFtZSAhPSBudWxsKSB7XG4gICAgICBpZiAoZGV2V2FybmluZ3NUYWdOYW1lJDEgJiYgIWRldldhcm5pbmdzVGFnTmFtZSQxLmhhcyhpbnN0YW5jZSkpIHtcbiAgICAgICAgZGV2V2FybmluZ3NUYWdOYW1lJDEuYWRkKGluc3RhbmNlKTtcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGUgaW5uZXJUYWdOYW1lIGFuZCBvdXRlclRhZ05hbWUgcHJvcHMgaGF2ZSBiZWVuIGRlcHJlY2F0ZWQuICcgKyAnUGxlYXNlIHVzZSB0aGUgaW5uZXJFbGVtZW50VHlwZSBhbmQgb3V0ZXJFbGVtZW50VHlwZSBwcm9wcyBpbnN0ZWFkLicpO1xuICAgICAgfVxuICAgIH0gLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG5cblxuICAgIHZhciBpc0hvcml6b250YWwgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJztcblxuICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICBjYXNlICdob3Jpem9udGFsJzpcbiAgICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgICAgaWYgKGRldldhcm5pbmdzRGlyZWN0aW9uICYmICFkZXZXYXJuaW5nc0RpcmVjdGlvbi5oYXMoaW5zdGFuY2UpKSB7XG4gICAgICAgICAgZGV2V2FybmluZ3NEaXJlY3Rpb24uYWRkKGluc3RhbmNlKTtcbiAgICAgICAgICBjb25zb2xlLndhcm4oJ1RoZSBkaXJlY3Rpb24gcHJvcCBzaG91bGQgYmUgZWl0aGVyIFwibHRyXCIgKGRlZmF1bHQpIG9yIFwicnRsXCIuICcgKyAnUGxlYXNlIHVzZSB0aGUgbGF5b3V0IHByb3AgdG8gc3BlY2lmeSBcInZlcnRpY2FsXCIgKGRlZmF1bHQpIG9yIFwiaG9yaXpvbnRhbFwiIG9yaWVudGF0aW9uLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2x0cic6XG4gICAgICBjYXNlICdydGwnOlxuICAgICAgICAvLyBWYWxpZCB2YWx1ZXNcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IEVycm9yKCdBbiBpbnZhbGlkIFwiZGlyZWN0aW9uXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGVpdGhlciBcImx0clwiIG9yIFwicnRsXCIuICcgKyAoXCJcXFwiXCIgKyBkaXJlY3Rpb24gKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIHN3aXRjaCAobGF5b3V0KSB7XG4gICAgICBjYXNlICdob3Jpem9udGFsJzpcbiAgICAgIGNhc2UgJ3ZlcnRpY2FsJzpcbiAgICAgICAgLy8gVmFsaWQgdmFsdWVzXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcImxheW91dFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBlaXRoZXIgXCJob3Jpem9udGFsXCIgb3IgXCJ2ZXJ0aWNhbFwiLiAnICsgKFwiXFxcIlwiICsgbGF5b3V0ICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGRyZW4gPT0gbnVsbCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJjaGlsZHJlblwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIFJlYWN0IGNvbXBvbmVudC4gJyArIChcIlxcXCJcIiArIChjaGlsZHJlbiA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBjaGlsZHJlbikgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH1cblxuICAgIGlmIChpc0hvcml6b250YWwgJiYgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJ3aWR0aFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ0hvcml6b250YWwgbGlzdHMgbXVzdCBzcGVjaWZ5IGEgbnVtYmVyIGZvciB3aWR0aC4gJyArIChcIlxcXCJcIiArICh3aWR0aCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB3aWR0aCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgIH0gZWxzZSBpZiAoIWlzSG9yaXpvbnRhbCAmJiB0eXBlb2YgaGVpZ2h0ICE9PSAnbnVtYmVyJykge1xuICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJoZWlnaHRcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWZXJ0aWNhbCBsaXN0cyBtdXN0IHNwZWNpZnkgYSBudW1iZXIgZm9yIGhlaWdodC4gJyArIChcIlxcXCJcIiArIChoZWlnaHQgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgaGVpZ2h0KSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgREVGQVVMVF9FU1RJTUFURURfSVRFTV9TSVpFJDEgPSA1MDtcblxudmFyIGdldEl0ZW1NZXRhZGF0YSQxID0gZnVuY3Rpb24gZ2V0SXRlbU1ldGFkYXRhKHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykge1xuICB2YXIgX3JlZiA9IHByb3BzLFxuICAgICAgaXRlbVNpemUgPSBfcmVmLml0ZW1TaXplO1xuICB2YXIgaXRlbU1ldGFkYXRhTWFwID0gaW5zdGFuY2VQcm9wcy5pdGVtTWV0YWRhdGFNYXAsXG4gICAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkSW5kZXg7XG5cbiAgaWYgKGluZGV4ID4gbGFzdE1lYXN1cmVkSW5kZXgpIHtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcblxuICAgIGlmIChsYXN0TWVhc3VyZWRJbmRleCA+PSAwKSB7XG4gICAgICB2YXIgaXRlbU1ldGFkYXRhID0gaXRlbU1ldGFkYXRhTWFwW2xhc3RNZWFzdXJlZEluZGV4XTtcbiAgICAgIG9mZnNldCA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gbGFzdE1lYXN1cmVkSW5kZXggKyAxOyBpIDw9IGluZGV4OyBpKyspIHtcbiAgICAgIHZhciBzaXplID0gaXRlbVNpemUoaSk7XG4gICAgICBpdGVtTWV0YWRhdGFNYXBbaV0gPSB7XG4gICAgICAgIG9mZnNldDogb2Zmc2V0LFxuICAgICAgICBzaXplOiBzaXplXG4gICAgICB9O1xuICAgICAgb2Zmc2V0ICs9IHNpemU7XG4gICAgfVxuXG4gICAgaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRJbmRleCA9IGluZGV4O1xuICB9XG5cbiAgcmV0dXJuIGl0ZW1NZXRhZGF0YU1hcFtpbmRleF07XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtJDEgPSBmdW5jdGlvbiBmaW5kTmVhcmVzdEl0ZW0ocHJvcHMsIGluc3RhbmNlUHJvcHMsIG9mZnNldCkge1xuICB2YXIgaXRlbU1ldGFkYXRhTWFwID0gaW5zdGFuY2VQcm9wcy5pdGVtTWV0YWRhdGFNYXAsXG4gICAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkSW5kZXg7XG4gIHZhciBsYXN0TWVhc3VyZWRJdGVtT2Zmc2V0ID0gbGFzdE1lYXN1cmVkSW5kZXggPiAwID8gaXRlbU1ldGFkYXRhTWFwW2xhc3RNZWFzdXJlZEluZGV4XS5vZmZzZXQgOiAwO1xuXG4gIGlmIChsYXN0TWVhc3VyZWRJdGVtT2Zmc2V0ID49IG9mZnNldCkge1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgbWVhc3VyZWQgaXRlbXMgd2l0aGluIHRoaXMgcmFuZ2UganVzdCB1c2UgYSBiaW5hcnkgc2VhcmNoIGFzIGl0J3MgZmFzdGVyLlxuICAgIHJldHVybiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2gkMShwcm9wcywgaW5zdGFuY2VQcm9wcywgbGFzdE1lYXN1cmVkSW5kZXgsIDAsIG9mZnNldCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgd2UgaGF2ZW4ndCB5ZXQgbWVhc3VyZWQgdGhpcyBoaWdoLCBmYWxsYmFjayB0byBhbiBleHBvbmVudGlhbCBzZWFyY2ggd2l0aCBhbiBpbm5lciBiaW5hcnkgc2VhcmNoLlxuICAgIC8vIFRoZSBleHBvbmVudGlhbCBzZWFyY2ggYXZvaWRzIHByZS1jb21wdXRpbmcgc2l6ZXMgZm9yIHRoZSBmdWxsIHNldCBvZiBpdGVtcyBhcyBhIGJpbmFyeSBzZWFyY2ggd291bGQuXG4gICAgLy8gVGhlIG92ZXJhbGwgY29tcGxleGl0eSBmb3IgdGhpcyBhcHByb2FjaCBpcyBPKGxvZyBuKS5cbiAgICByZXR1cm4gZmluZE5lYXJlc3RJdGVtRXhwb25lbnRpYWxTZWFyY2gkMShwcm9wcywgaW5zdGFuY2VQcm9wcywgTWF0aC5tYXgoMCwgbGFzdE1lYXN1cmVkSW5kZXgpLCBvZmZzZXQpO1xuICB9XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtQmluYXJ5U2VhcmNoJDEgPSBmdW5jdGlvbiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2gocHJvcHMsIGluc3RhbmNlUHJvcHMsIGhpZ2gsIGxvdywgb2Zmc2V0KSB7XG4gIHdoaWxlIChsb3cgPD0gaGlnaCkge1xuICAgIHZhciBtaWRkbGUgPSBsb3cgKyBNYXRoLmZsb29yKChoaWdoIC0gbG93KSAvIDIpO1xuICAgIHZhciBjdXJyZW50T2Zmc2V0ID0gZ2V0SXRlbU1ldGFkYXRhJDEocHJvcHMsIG1pZGRsZSwgaW5zdGFuY2VQcm9wcykub2Zmc2V0O1xuXG4gICAgaWYgKGN1cnJlbnRPZmZzZXQgPT09IG9mZnNldCkge1xuICAgICAgcmV0dXJuIG1pZGRsZTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRPZmZzZXQgPCBvZmZzZXQpIHtcbiAgICAgIGxvdyA9IG1pZGRsZSArIDE7XG4gICAgfSBlbHNlIGlmIChjdXJyZW50T2Zmc2V0ID4gb2Zmc2V0KSB7XG4gICAgICBoaWdoID0gbWlkZGxlIC0gMTtcbiAgICB9XG4gIH1cblxuICBpZiAobG93ID4gMCkge1xuICAgIHJldHVybiBsb3cgLSAxO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59O1xuXG52YXIgZmluZE5lYXJlc3RJdGVtRXhwb25lbnRpYWxTZWFyY2gkMSA9IGZ1bmN0aW9uIGZpbmROZWFyZXN0SXRlbUV4cG9uZW50aWFsU2VhcmNoKHByb3BzLCBpbnN0YW5jZVByb3BzLCBpbmRleCwgb2Zmc2V0KSB7XG4gIHZhciBpdGVtQ291bnQgPSBwcm9wcy5pdGVtQ291bnQ7XG4gIHZhciBpbnRlcnZhbCA9IDE7XG5cbiAgd2hpbGUgKGluZGV4IDwgaXRlbUNvdW50ICYmIGdldEl0ZW1NZXRhZGF0YSQxKHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcykub2Zmc2V0IDwgb2Zmc2V0KSB7XG4gICAgaW5kZXggKz0gaW50ZXJ2YWw7XG4gICAgaW50ZXJ2YWwgKj0gMjtcbiAgfVxuXG4gIHJldHVybiBmaW5kTmVhcmVzdEl0ZW1CaW5hcnlTZWFyY2gkMShwcm9wcywgaW5zdGFuY2VQcm9wcywgTWF0aC5taW4oaW5kZXgsIGl0ZW1Db3VudCAtIDEpLCBNYXRoLmZsb29yKGluZGV4IC8gMiksIG9mZnNldCk7XG59O1xuXG52YXIgZ2V0RXN0aW1hdGVkVG90YWxTaXplID0gZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxTaXplKF9yZWYyLCBfcmVmMykge1xuICB2YXIgaXRlbUNvdW50ID0gX3JlZjIuaXRlbUNvdW50O1xuICB2YXIgaXRlbU1ldGFkYXRhTWFwID0gX3JlZjMuaXRlbU1ldGFkYXRhTWFwLFxuICAgICAgZXN0aW1hdGVkSXRlbVNpemUgPSBfcmVmMy5lc3RpbWF0ZWRJdGVtU2l6ZSxcbiAgICAgIGxhc3RNZWFzdXJlZEluZGV4ID0gX3JlZjMubGFzdE1lYXN1cmVkSW5kZXg7XG4gIHZhciB0b3RhbFNpemVPZk1lYXN1cmVkSXRlbXMgPSAwOyAvLyBFZGdlIGNhc2UgY2hlY2sgZm9yIHdoZW4gdGhlIG51bWJlciBvZiBpdGVtcyBkZWNyZWFzZXMgd2hpbGUgYSBzY3JvbGwgaXMgaW4gcHJvZ3Jlc3MuXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9idmF1Z2huL3JlYWN0LXdpbmRvdy9wdWxsLzEzOFxuXG4gIGlmIChsYXN0TWVhc3VyZWRJbmRleCA+PSBpdGVtQ291bnQpIHtcbiAgICBsYXN0TWVhc3VyZWRJbmRleCA9IGl0ZW1Db3VudCAtIDE7XG4gIH1cblxuICBpZiAobGFzdE1lYXN1cmVkSW5kZXggPj0gMCkge1xuICAgIHZhciBpdGVtTWV0YWRhdGEgPSBpdGVtTWV0YWRhdGFNYXBbbGFzdE1lYXN1cmVkSW5kZXhdO1xuICAgIHRvdGFsU2l6ZU9mTWVhc3VyZWRJdGVtcyA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgfVxuXG4gIHZhciBudW1Vbm1lYXN1cmVkSXRlbXMgPSBpdGVtQ291bnQgLSBsYXN0TWVhc3VyZWRJbmRleCAtIDE7XG4gIHZhciB0b3RhbFNpemVPZlVubWVhc3VyZWRJdGVtcyA9IG51bVVubWVhc3VyZWRJdGVtcyAqIGVzdGltYXRlZEl0ZW1TaXplO1xuICByZXR1cm4gdG90YWxTaXplT2ZNZWFzdXJlZEl0ZW1zICsgdG90YWxTaXplT2ZVbm1lYXN1cmVkSXRlbXM7XG59O1xuXG52YXIgVmFyaWFibGVTaXplTGlzdCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVMaXN0Q29tcG9uZW50KHtcbiAgZ2V0SXRlbU9mZnNldDogZnVuY3Rpb24gZ2V0SXRlbU9mZnNldChwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gZ2V0SXRlbU1ldGFkYXRhJDEocHJvcHMsIGluZGV4LCBpbnN0YW5jZVByb3BzKS5vZmZzZXQ7XG4gIH0sXG4gIGdldEl0ZW1TaXplOiBmdW5jdGlvbiBnZXRJdGVtU2l6ZShwcm9wcywgaW5kZXgsIGluc3RhbmNlUHJvcHMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VQcm9wcy5pdGVtTWV0YWRhdGFNYXBbaW5kZXhdLnNpemU7XG4gIH0sXG4gIGdldEVzdGltYXRlZFRvdGFsU2l6ZTogZ2V0RXN0aW1hdGVkVG90YWxTaXplLFxuICBnZXRPZmZzZXRGb3JJbmRleEFuZEFsaWdubWVudDogZnVuY3Rpb24gZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQocHJvcHMsIGluZGV4LCBhbGlnbiwgc2Nyb2xsT2Zmc2V0LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgdmFyIGRpcmVjdGlvbiA9IHByb3BzLmRpcmVjdGlvbixcbiAgICAgICAgaGVpZ2h0ID0gcHJvcHMuaGVpZ2h0LFxuICAgICAgICBsYXlvdXQgPSBwcm9wcy5sYXlvdXQsXG4gICAgICAgIHdpZHRoID0gcHJvcHMud2lkdGg7IC8vIFRPRE8gRGVwcmVjYXRlIGRpcmVjdGlvbiBcImhvcml6b250YWxcIlxuXG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciBzaXplID0gaXNIb3Jpem9udGFsID8gd2lkdGggOiBoZWlnaHQ7XG4gICAgdmFyIGl0ZW1NZXRhZGF0YSA9IGdldEl0ZW1NZXRhZGF0YSQxKHByb3BzLCBpbmRleCwgaW5zdGFuY2VQcm9wcyk7IC8vIEdldCBlc3RpbWF0ZWQgdG90YWwgc2l6ZSBhZnRlciBJdGVtTWV0YWRhdGEgaXMgY29tcHV0ZWQsXG4gICAgLy8gVG8gZW5zdXJlIGl0IHJlZmxlY3RzIGFjdHVhbCBtZWFzdXJlbWVudHMgaW5zdGVhZCBvZiBqdXN0IGVzdGltYXRlcy5cblxuICAgIHZhciBlc3RpbWF0ZWRUb3RhbFNpemUgPSBnZXRFc3RpbWF0ZWRUb3RhbFNpemUocHJvcHMsIGluc3RhbmNlUHJvcHMpO1xuICAgIHZhciBtYXhPZmZzZXQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbihlc3RpbWF0ZWRUb3RhbFNpemUgLSBzaXplLCBpdGVtTWV0YWRhdGEub2Zmc2V0KSk7XG4gICAgdmFyIG1pbk9mZnNldCA9IE1hdGgubWF4KDAsIGl0ZW1NZXRhZGF0YS5vZmZzZXQgLSBzaXplICsgaXRlbU1ldGFkYXRhLnNpemUpO1xuXG4gICAgaWYgKGFsaWduID09PSAnc21hcnQnKSB7XG4gICAgICBpZiAoc2Nyb2xsT2Zmc2V0ID49IG1pbk9mZnNldCAtIHNpemUgJiYgc2Nyb2xsT2Zmc2V0IDw9IG1heE9mZnNldCArIHNpemUpIHtcbiAgICAgICAgYWxpZ24gPSAnYXV0byc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGlnbiA9ICdjZW50ZXInO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3aXRjaCAoYWxpZ24pIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgcmV0dXJuIG1heE9mZnNldDtcblxuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcblxuICAgICAgY2FzZSAnY2VudGVyJzpcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobWluT2Zmc2V0ICsgKG1heE9mZnNldCAtIG1pbk9mZnNldCkgLyAyKTtcblxuICAgICAgY2FzZSAnYXV0byc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoc2Nyb2xsT2Zmc2V0ID49IG1pbk9mZnNldCAmJiBzY3JvbGxPZmZzZXQgPD0gbWF4T2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHNjcm9sbE9mZnNldDtcbiAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxPZmZzZXQgPCBtaW5PZmZzZXQpIHtcbiAgICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfSxcbiAgZ2V0U3RhcnRJbmRleEZvck9mZnNldDogZnVuY3Rpb24gZ2V0U3RhcnRJbmRleEZvck9mZnNldChwcm9wcywgb2Zmc2V0LCBpbnN0YW5jZVByb3BzKSB7XG4gICAgcmV0dXJuIGZpbmROZWFyZXN0SXRlbSQxKHByb3BzLCBpbnN0YW5jZVByb3BzLCBvZmZzZXQpO1xuICB9LFxuICBnZXRTdG9wSW5kZXhGb3JTdGFydEluZGV4OiBmdW5jdGlvbiBnZXRTdG9wSW5kZXhGb3JTdGFydEluZGV4KHByb3BzLCBzdGFydEluZGV4LCBzY3JvbGxPZmZzZXQsIGluc3RhbmNlUHJvcHMpIHtcbiAgICB2YXIgZGlyZWN0aW9uID0gcHJvcHMuZGlyZWN0aW9uLFxuICAgICAgICBoZWlnaHQgPSBwcm9wcy5oZWlnaHQsXG4gICAgICAgIGl0ZW1Db3VudCA9IHByb3BzLml0ZW1Db3VudCxcbiAgICAgICAgbGF5b3V0ID0gcHJvcHMubGF5b3V0LFxuICAgICAgICB3aWR0aCA9IHByb3BzLndpZHRoOyAvLyBUT0RPIERlcHJlY2F0ZSBkaXJlY3Rpb24gXCJob3Jpem9udGFsXCJcblxuICAgIHZhciBpc0hvcml6b250YWwgPSBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJyB8fCBsYXlvdXQgPT09ICdob3Jpem9udGFsJztcbiAgICB2YXIgc2l6ZSA9IGlzSG9yaXpvbnRhbCA/IHdpZHRoIDogaGVpZ2h0O1xuICAgIHZhciBpdGVtTWV0YWRhdGEgPSBnZXRJdGVtTWV0YWRhdGEkMShwcm9wcywgc3RhcnRJbmRleCwgaW5zdGFuY2VQcm9wcyk7XG4gICAgdmFyIG1heE9mZnNldCA9IHNjcm9sbE9mZnNldCArIHNpemU7XG4gICAgdmFyIG9mZnNldCA9IGl0ZW1NZXRhZGF0YS5vZmZzZXQgKyBpdGVtTWV0YWRhdGEuc2l6ZTtcbiAgICB2YXIgc3RvcEluZGV4ID0gc3RhcnRJbmRleDtcblxuICAgIHdoaWxlIChzdG9wSW5kZXggPCBpdGVtQ291bnQgLSAxICYmIG9mZnNldCA8IG1heE9mZnNldCkge1xuICAgICAgc3RvcEluZGV4Kys7XG4gICAgICBvZmZzZXQgKz0gZ2V0SXRlbU1ldGFkYXRhJDEocHJvcHMsIHN0b3BJbmRleCwgaW5zdGFuY2VQcm9wcykuc2l6ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RvcEluZGV4O1xuICB9LFxuICBpbml0SW5zdGFuY2VQcm9wczogZnVuY3Rpb24gaW5pdEluc3RhbmNlUHJvcHMocHJvcHMsIGluc3RhbmNlKSB7XG4gICAgdmFyIF9yZWY0ID0gcHJvcHMsXG4gICAgICAgIGVzdGltYXRlZEl0ZW1TaXplID0gX3JlZjQuZXN0aW1hdGVkSXRlbVNpemU7XG4gICAgdmFyIGluc3RhbmNlUHJvcHMgPSB7XG4gICAgICBpdGVtTWV0YWRhdGFNYXA6IHt9LFxuICAgICAgZXN0aW1hdGVkSXRlbVNpemU6IGVzdGltYXRlZEl0ZW1TaXplIHx8IERFRkFVTFRfRVNUSU1BVEVEX0lURU1fU0laRSQxLFxuICAgICAgbGFzdE1lYXN1cmVkSW5kZXg6IC0xXG4gICAgfTtcblxuICAgIGluc3RhbmNlLnJlc2V0QWZ0ZXJJbmRleCA9IGZ1bmN0aW9uIChpbmRleCwgc2hvdWxkRm9yY2VVcGRhdGUpIHtcbiAgICAgIGlmIChzaG91bGRGb3JjZVVwZGF0ZSA9PT0gdm9pZCAwKSB7XG4gICAgICAgIHNob3VsZEZvcmNlVXBkYXRlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2VQcm9wcy5sYXN0TWVhc3VyZWRJbmRleCA9IE1hdGgubWluKGluc3RhbmNlUHJvcHMubGFzdE1lYXN1cmVkSW5kZXgsIGluZGV4IC0gMSk7IC8vIFdlIGNvdWxkIHBvdGVudGlhbGx5IG9wdGltaXplIGZ1cnRoZXIgYnkgb25seSBldmljdGluZyBzdHlsZXMgYWZ0ZXIgdGhpcyBpbmRleCxcbiAgICAgIC8vIEJ1dCBzaW5jZSBzdHlsZXMgYXJlIG9ubHkgY2FjaGVkIHdoaWxlIHNjcm9sbGluZyBpcyBpbiBwcm9ncmVzcy1cbiAgICAgIC8vIEl0IHNlZW1zIGFuIHVubmVjZXNzYXJ5IG9wdGltaXphdGlvbi5cbiAgICAgIC8vIEl0J3MgdW5saWtlbHkgdGhhdCByZXNldEFmdGVySW5kZXgoKSB3aWxsIGJlIGNhbGxlZCB3aGlsZSBhIHVzZXIgaXMgc2Nyb2xsaW5nLlxuXG4gICAgICBpbnN0YW5jZS5fZ2V0SXRlbVN0eWxlQ2FjaGUoLTEpO1xuXG4gICAgICBpZiAoc2hvdWxkRm9yY2VVcGRhdGUpIHtcbiAgICAgICAgaW5zdGFuY2UuZm9yY2VVcGRhdGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIGluc3RhbmNlUHJvcHM7XG4gIH0sXG4gIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2U6IGZhbHNlLFxuICB2YWxpZGF0ZVByb3BzOiBmdW5jdGlvbiB2YWxpZGF0ZVByb3BzKF9yZWY1KSB7XG4gICAgdmFyIGl0ZW1TaXplID0gX3JlZjUuaXRlbVNpemU7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBpdGVtU2l6ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcIml0ZW1TaXplXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgZnVuY3Rpb24uICcgKyAoXCJcXFwiXCIgKyAoaXRlbVNpemUgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgaXRlbVNpemUpICsgXCJcXFwiIHdhcyBzcGVjaWZpZWQuXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgRml4ZWRTaXplR3JpZCA9XG4vKiNfX1BVUkVfXyovXG5jcmVhdGVHcmlkQ29tcG9uZW50KHtcbiAgZ2V0Q29sdW1uT2Zmc2V0OiBmdW5jdGlvbiBnZXRDb2x1bW5PZmZzZXQoX3JlZiwgaW5kZXgpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmLmNvbHVtbldpZHRoO1xuICAgIHJldHVybiBpbmRleCAqIGNvbHVtbldpZHRoO1xuICB9LFxuICBnZXRDb2x1bW5XaWR0aDogZnVuY3Rpb24gZ2V0Q29sdW1uV2lkdGgoX3JlZjIsIGluZGV4KSB7XG4gICAgdmFyIGNvbHVtbldpZHRoID0gX3JlZjIuY29sdW1uV2lkdGg7XG4gICAgcmV0dXJuIGNvbHVtbldpZHRoO1xuICB9LFxuICBnZXRSb3dPZmZzZXQ6IGZ1bmN0aW9uIGdldFJvd09mZnNldChfcmVmMywgaW5kZXgpIHtcbiAgICB2YXIgcm93SGVpZ2h0ID0gX3JlZjMucm93SGVpZ2h0O1xuICAgIHJldHVybiBpbmRleCAqIHJvd0hlaWdodDtcbiAgfSxcbiAgZ2V0Um93SGVpZ2h0OiBmdW5jdGlvbiBnZXRSb3dIZWlnaHQoX3JlZjQsIGluZGV4KSB7XG4gICAgdmFyIHJvd0hlaWdodCA9IF9yZWY0LnJvd0hlaWdodDtcbiAgICByZXR1cm4gcm93SGVpZ2h0O1xuICB9LFxuICBnZXRFc3RpbWF0ZWRUb3RhbEhlaWdodDogZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxIZWlnaHQoX3JlZjUpIHtcbiAgICB2YXIgcm93Q291bnQgPSBfcmVmNS5yb3dDb3VudCxcbiAgICAgICAgcm93SGVpZ2h0ID0gX3JlZjUucm93SGVpZ2h0O1xuICAgIHJldHVybiByb3dIZWlnaHQgKiByb3dDb3VudDtcbiAgfSxcbiAgZ2V0RXN0aW1hdGVkVG90YWxXaWR0aDogZnVuY3Rpb24gZ2V0RXN0aW1hdGVkVG90YWxXaWR0aChfcmVmNikge1xuICAgIHZhciBjb2x1bW5Db3VudCA9IF9yZWY2LmNvbHVtbkNvdW50LFxuICAgICAgICBjb2x1bW5XaWR0aCA9IF9yZWY2LmNvbHVtbldpZHRoO1xuICAgIHJldHVybiBjb2x1bW5XaWR0aCAqIGNvbHVtbkNvdW50O1xuICB9LFxuICBnZXRPZmZzZXRGb3JDb2x1bW5BbmRBbGlnbm1lbnQ6IGZ1bmN0aW9uIGdldE9mZnNldEZvckNvbHVtbkFuZEFsaWdubWVudChfcmVmNywgY29sdW1uSW5kZXgsIGFsaWduLCBzY3JvbGxMZWZ0LCBpbnN0YW5jZVByb3BzLCBzY3JvbGxiYXJTaXplKSB7XG4gICAgdmFyIGNvbHVtbkNvdW50ID0gX3JlZjcuY29sdW1uQ291bnQsXG4gICAgICAgIGNvbHVtbldpZHRoID0gX3JlZjcuY29sdW1uV2lkdGgsXG4gICAgICAgIHdpZHRoID0gX3JlZjcud2lkdGg7XG4gICAgdmFyIGxhc3RDb2x1bW5PZmZzZXQgPSBNYXRoLm1heCgwLCBjb2x1bW5Db3VudCAqIGNvbHVtbldpZHRoIC0gd2lkdGgpO1xuICAgIHZhciBtYXhPZmZzZXQgPSBNYXRoLm1pbihsYXN0Q29sdW1uT2Zmc2V0LCBjb2x1bW5JbmRleCAqIGNvbHVtbldpZHRoKTtcbiAgICB2YXIgbWluT2Zmc2V0ID0gTWF0aC5tYXgoMCwgY29sdW1uSW5kZXggKiBjb2x1bW5XaWR0aCAtIHdpZHRoICsgc2Nyb2xsYmFyU2l6ZSArIGNvbHVtbldpZHRoKTtcblxuICAgIGlmIChhbGlnbiA9PT0gJ3NtYXJ0Jykge1xuICAgICAgaWYgKHNjcm9sbExlZnQgPj0gbWluT2Zmc2V0IC0gd2lkdGggJiYgc2Nyb2xsTGVmdCA8PSBtYXhPZmZzZXQgKyB3aWR0aCkge1xuICAgICAgICBhbGlnbiA9ICdhdXRvJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsaWduID0gJ2NlbnRlcic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChhbGlnbikge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuXG4gICAgICBjYXNlICdlbmQnOlxuICAgICAgICByZXR1cm4gbWluT2Zmc2V0O1xuXG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICAvLyBcIkNlbnRlcmVkXCIgb2Zmc2V0IGlzIHVzdWFsbHkgdGhlIGF2ZXJhZ2Ugb2YgdGhlIG1pbiBhbmQgbWF4LlxuICAgICAgICAvLyBCdXQgbmVhciB0aGUgZWRnZXMgb2YgdGhlIGxpc3QsIHRoaXMgZG9lc24ndCBob2xkIHRydWUuXG4gICAgICAgIHZhciBtaWRkbGVPZmZzZXQgPSBNYXRoLnJvdW5kKG1pbk9mZnNldCArIChtYXhPZmZzZXQgLSBtaW5PZmZzZXQpIC8gMik7XG5cbiAgICAgICAgaWYgKG1pZGRsZU9mZnNldCA8IE1hdGguY2VpbCh3aWR0aCAvIDIpKSB7XG4gICAgICAgICAgcmV0dXJuIDA7IC8vIG5lYXIgdGhlIGJlZ2lubmluZ1xuICAgICAgICB9IGVsc2UgaWYgKG1pZGRsZU9mZnNldCA+IGxhc3RDb2x1bW5PZmZzZXQgKyBNYXRoLmZsb29yKHdpZHRoIC8gMikpIHtcbiAgICAgICAgICByZXR1cm4gbGFzdENvbHVtbk9mZnNldDsgLy8gbmVhciB0aGUgZW5kXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG1pZGRsZU9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdhdXRvJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGlmIChzY3JvbGxMZWZ0ID49IG1pbk9mZnNldCAmJiBzY3JvbGxMZWZ0IDw9IG1heE9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBzY3JvbGxMZWZ0O1xuICAgICAgICB9IGVsc2UgaWYgKG1pbk9mZnNldCA+IG1heE9mZnNldCkge1xuICAgICAgICAgIC8vIEJlY2F1c2Ugd2Ugb25seSB0YWtlIGludG8gYWNjb3VudCB0aGUgc2Nyb2xsYmFyIHNpemUgd2hlbiBjYWxjdWxhdGluZyBtaW5PZmZzZXRcbiAgICAgICAgICAvLyB0aGlzIHZhbHVlIGNhbiBiZSBsYXJnZXIgdGhhbiBtYXhPZmZzZXQgd2hlbiBhdCB0aGUgZW5kIG9mIHRoZSBsaXN0XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxMZWZ0IDwgbWluT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9XG4gIH0sXG4gIGdldE9mZnNldEZvclJvd0FuZEFsaWdubWVudDogZnVuY3Rpb24gZ2V0T2Zmc2V0Rm9yUm93QW5kQWxpZ25tZW50KF9yZWY4LCByb3dJbmRleCwgYWxpZ24sIHNjcm9sbFRvcCwgaW5zdGFuY2VQcm9wcywgc2Nyb2xsYmFyU2l6ZSkge1xuICAgIHZhciByb3dIZWlnaHQgPSBfcmVmOC5yb3dIZWlnaHQsXG4gICAgICAgIGhlaWdodCA9IF9yZWY4LmhlaWdodCxcbiAgICAgICAgcm93Q291bnQgPSBfcmVmOC5yb3dDb3VudDtcbiAgICB2YXIgbGFzdFJvd09mZnNldCA9IE1hdGgubWF4KDAsIHJvd0NvdW50ICogcm93SGVpZ2h0IC0gaGVpZ2h0KTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gTWF0aC5taW4obGFzdFJvd09mZnNldCwgcm93SW5kZXggKiByb3dIZWlnaHQpO1xuICAgIHZhciBtaW5PZmZzZXQgPSBNYXRoLm1heCgwLCByb3dJbmRleCAqIHJvd0hlaWdodCAtIGhlaWdodCArIHNjcm9sbGJhclNpemUgKyByb3dIZWlnaHQpO1xuXG4gICAgaWYgKGFsaWduID09PSAnc21hcnQnKSB7XG4gICAgICBpZiAoc2Nyb2xsVG9wID49IG1pbk9mZnNldCAtIGhlaWdodCAmJiBzY3JvbGxUb3AgPD0gbWF4T2Zmc2V0ICsgaGVpZ2h0KSB7XG4gICAgICAgIGFsaWduID0gJ2F1dG8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ24gPSAnY2VudGVyJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIC8vIFwiQ2VudGVyZWRcIiBvZmZzZXQgaXMgdXN1YWxseSB0aGUgYXZlcmFnZSBvZiB0aGUgbWluIGFuZCBtYXguXG4gICAgICAgIC8vIEJ1dCBuZWFyIHRoZSBlZGdlcyBvZiB0aGUgbGlzdCwgdGhpcyBkb2Vzbid0IGhvbGQgdHJ1ZS5cbiAgICAgICAgdmFyIG1pZGRsZU9mZnNldCA9IE1hdGgucm91bmQobWluT2Zmc2V0ICsgKG1heE9mZnNldCAtIG1pbk9mZnNldCkgLyAyKTtcblxuICAgICAgICBpZiAobWlkZGxlT2Zmc2V0IDwgTWF0aC5jZWlsKGhlaWdodCAvIDIpKSB7XG4gICAgICAgICAgcmV0dXJuIDA7IC8vIG5lYXIgdGhlIGJlZ2lubmluZ1xuICAgICAgICB9IGVsc2UgaWYgKG1pZGRsZU9mZnNldCA+IGxhc3RSb3dPZmZzZXQgKyBNYXRoLmZsb29yKGhlaWdodCAvIDIpKSB7XG4gICAgICAgICAgcmV0dXJuIGxhc3RSb3dPZmZzZXQ7IC8vIG5lYXIgdGhlIGVuZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBtaWRkbGVPZmZzZXQ7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnYXV0byc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoc2Nyb2xsVG9wID49IG1pbk9mZnNldCAmJiBzY3JvbGxUb3AgPD0gbWF4T2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHNjcm9sbFRvcDtcbiAgICAgICAgfSBlbHNlIGlmIChtaW5PZmZzZXQgPiBtYXhPZmZzZXQpIHtcbiAgICAgICAgICAvLyBCZWNhdXNlIHdlIG9ubHkgdGFrZSBpbnRvIGFjY291bnQgdGhlIHNjcm9sbGJhciBzaXplIHdoZW4gY2FsY3VsYXRpbmcgbWluT2Zmc2V0XG4gICAgICAgICAgLy8gdGhpcyB2YWx1ZSBjYW4gYmUgbGFyZ2VyIHRoYW4gbWF4T2Zmc2V0IHdoZW4gYXQgdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsVG9wIDwgbWluT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9XG4gIH0sXG4gIGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQ6IGZ1bmN0aW9uIGdldENvbHVtblN0YXJ0SW5kZXhGb3JPZmZzZXQoX3JlZjksIHNjcm9sbExlZnQpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmOS5jb2x1bW5XaWR0aCxcbiAgICAgICAgY29sdW1uQ291bnQgPSBfcmVmOS5jb2x1bW5Db3VudDtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oY29sdW1uQ291bnQgLSAxLCBNYXRoLmZsb29yKHNjcm9sbExlZnQgLyBjb2x1bW5XaWR0aCkpKTtcbiAgfSxcbiAgZ2V0Q29sdW1uU3RvcEluZGV4Rm9yU3RhcnRJbmRleDogZnVuY3Rpb24gZ2V0Q29sdW1uU3RvcEluZGV4Rm9yU3RhcnRJbmRleChfcmVmMTAsIHN0YXJ0SW5kZXgsIHNjcm9sbExlZnQpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmMTAuY29sdW1uV2lkdGgsXG4gICAgICAgIGNvbHVtbkNvdW50ID0gX3JlZjEwLmNvbHVtbkNvdW50LFxuICAgICAgICB3aWR0aCA9IF9yZWYxMC53aWR0aDtcbiAgICB2YXIgbGVmdCA9IHN0YXJ0SW5kZXggKiBjb2x1bW5XaWR0aDtcbiAgICB2YXIgbnVtVmlzaWJsZUNvbHVtbnMgPSBNYXRoLmNlaWwoKHdpZHRoICsgc2Nyb2xsTGVmdCAtIGxlZnQpIC8gY29sdW1uV2lkdGgpO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihjb2x1bW5Db3VudCAtIDEsIHN0YXJ0SW5kZXggKyBudW1WaXNpYmxlQ29sdW1ucyAtIDEgLy8gLTEgaXMgYmVjYXVzZSBzdG9wIGluZGV4IGlzIGluY2x1c2l2ZVxuICAgICkpO1xuICB9LFxuICBnZXRSb3dTdGFydEluZGV4Rm9yT2Zmc2V0OiBmdW5jdGlvbiBnZXRSb3dTdGFydEluZGV4Rm9yT2Zmc2V0KF9yZWYxMSwgc2Nyb2xsVG9wKSB7XG4gICAgdmFyIHJvd0hlaWdodCA9IF9yZWYxMS5yb3dIZWlnaHQsXG4gICAgICAgIHJvd0NvdW50ID0gX3JlZjExLnJvd0NvdW50O1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihyb3dDb3VudCAtIDEsIE1hdGguZmxvb3Ioc2Nyb2xsVG9wIC8gcm93SGVpZ2h0KSkpO1xuICB9LFxuICBnZXRSb3dTdG9wSW5kZXhGb3JTdGFydEluZGV4OiBmdW5jdGlvbiBnZXRSb3dTdG9wSW5kZXhGb3JTdGFydEluZGV4KF9yZWYxMiwgc3RhcnRJbmRleCwgc2Nyb2xsVG9wKSB7XG4gICAgdmFyIHJvd0hlaWdodCA9IF9yZWYxMi5yb3dIZWlnaHQsXG4gICAgICAgIHJvd0NvdW50ID0gX3JlZjEyLnJvd0NvdW50LFxuICAgICAgICBoZWlnaHQgPSBfcmVmMTIuaGVpZ2h0O1xuICAgIHZhciB0b3AgPSBzdGFydEluZGV4ICogcm93SGVpZ2h0O1xuICAgIHZhciBudW1WaXNpYmxlUm93cyA9IE1hdGguY2VpbCgoaGVpZ2h0ICsgc2Nyb2xsVG9wIC0gdG9wKSAvIHJvd0hlaWdodCk7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKHJvd0NvdW50IC0gMSwgc3RhcnRJbmRleCArIG51bVZpc2libGVSb3dzIC0gMSAvLyAtMSBpcyBiZWNhdXNlIHN0b3AgaW5kZXggaXMgaW5jbHVzaXZlXG4gICAgKSk7XG4gIH0sXG4gIGluaXRJbnN0YW5jZVByb3BzOiBmdW5jdGlvbiBpbml0SW5zdGFuY2VQcm9wcyhwcm9wcykgey8vIE5vb3BcbiAgfSxcbiAgc2hvdWxkUmVzZXRTdHlsZUNhY2hlT25JdGVtU2l6ZUNoYW5nZTogdHJ1ZSxcbiAgdmFsaWRhdGVQcm9wczogZnVuY3Rpb24gdmFsaWRhdGVQcm9wcyhfcmVmMTMpIHtcbiAgICB2YXIgY29sdW1uV2lkdGggPSBfcmVmMTMuY29sdW1uV2lkdGgsXG4gICAgICAgIHJvd0hlaWdodCA9IF9yZWYxMy5yb3dIZWlnaHQ7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiBjb2x1bW5XaWR0aCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJjb2x1bW5XaWR0aFwiIHByb3AgaGFzIGJlZW4gc3BlY2lmaWVkLiAnICsgJ1ZhbHVlIHNob3VsZCBiZSBhIG51bWJlci4gJyArIChcIlxcXCJcIiArIChjb2x1bW5XaWR0aCA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBjb2x1bW5XaWR0aCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHJvd0hlaWdodCAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoJ0FuIGludmFsaWQgXCJyb3dIZWlnaHRcIiBwcm9wIGhhcyBiZWVuIHNwZWNpZmllZC4gJyArICdWYWx1ZSBzaG91bGQgYmUgYSBudW1iZXIuICcgKyAoXCJcXFwiXCIgKyAocm93SGVpZ2h0ID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHJvd0hlaWdodCkgKyBcIlxcXCIgd2FzIHNwZWNpZmllZC5cIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSk7XG5cbnZhciBGaXhlZFNpemVMaXN0ID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZUxpc3RDb21wb25lbnQoe1xuICBnZXRJdGVtT2Zmc2V0OiBmdW5jdGlvbiBnZXRJdGVtT2Zmc2V0KF9yZWYsIGluZGV4KSB7XG4gICAgdmFyIGl0ZW1TaXplID0gX3JlZi5pdGVtU2l6ZTtcbiAgICByZXR1cm4gaW5kZXggKiBpdGVtU2l6ZTtcbiAgfSxcbiAgZ2V0SXRlbVNpemU6IGZ1bmN0aW9uIGdldEl0ZW1TaXplKF9yZWYyLCBpbmRleCkge1xuICAgIHZhciBpdGVtU2l6ZSA9IF9yZWYyLml0ZW1TaXplO1xuICAgIHJldHVybiBpdGVtU2l6ZTtcbiAgfSxcbiAgZ2V0RXN0aW1hdGVkVG90YWxTaXplOiBmdW5jdGlvbiBnZXRFc3RpbWF0ZWRUb3RhbFNpemUoX3JlZjMpIHtcbiAgICB2YXIgaXRlbUNvdW50ID0gX3JlZjMuaXRlbUNvdW50LFxuICAgICAgICBpdGVtU2l6ZSA9IF9yZWYzLml0ZW1TaXplO1xuICAgIHJldHVybiBpdGVtU2l6ZSAqIGl0ZW1Db3VudDtcbiAgfSxcbiAgZ2V0T2Zmc2V0Rm9ySW5kZXhBbmRBbGlnbm1lbnQ6IGZ1bmN0aW9uIGdldE9mZnNldEZvckluZGV4QW5kQWxpZ25tZW50KF9yZWY0LCBpbmRleCwgYWxpZ24sIHNjcm9sbE9mZnNldCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBfcmVmNC5kaXJlY3Rpb24sXG4gICAgICAgIGhlaWdodCA9IF9yZWY0LmhlaWdodCxcbiAgICAgICAgaXRlbUNvdW50ID0gX3JlZjQuaXRlbUNvdW50LFxuICAgICAgICBpdGVtU2l6ZSA9IF9yZWY0Lml0ZW1TaXplLFxuICAgICAgICBsYXlvdXQgPSBfcmVmNC5sYXlvdXQsXG4gICAgICAgIHdpZHRoID0gX3JlZjQud2lkdGg7XG4gICAgLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciBzaXplID0gaXNIb3Jpem9udGFsID8gd2lkdGggOiBoZWlnaHQ7XG4gICAgdmFyIGxhc3RJdGVtT2Zmc2V0ID0gTWF0aC5tYXgoMCwgaXRlbUNvdW50ICogaXRlbVNpemUgLSBzaXplKTtcbiAgICB2YXIgbWF4T2Zmc2V0ID0gTWF0aC5taW4obGFzdEl0ZW1PZmZzZXQsIGluZGV4ICogaXRlbVNpemUpO1xuICAgIHZhciBtaW5PZmZzZXQgPSBNYXRoLm1heCgwLCBpbmRleCAqIGl0ZW1TaXplIC0gc2l6ZSArIGl0ZW1TaXplKTtcblxuICAgIGlmIChhbGlnbiA9PT0gJ3NtYXJ0Jykge1xuICAgICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgLSBzaXplICYmIHNjcm9sbE9mZnNldCA8PSBtYXhPZmZzZXQgKyBzaXplKSB7XG4gICAgICAgIGFsaWduID0gJ2F1dG8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYWxpZ24gPSAnY2VudGVyJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKGFsaWduKSB7XG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgIHJldHVybiBtYXhPZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgIHJldHVybiBtaW5PZmZzZXQ7XG5cbiAgICAgIGNhc2UgJ2NlbnRlcic6XG4gICAgICAgIHtcbiAgICAgICAgICAvLyBcIkNlbnRlcmVkXCIgb2Zmc2V0IGlzIHVzdWFsbHkgdGhlIGF2ZXJhZ2Ugb2YgdGhlIG1pbiBhbmQgbWF4LlxuICAgICAgICAgIC8vIEJ1dCBuZWFyIHRoZSBlZGdlcyBvZiB0aGUgbGlzdCwgdGhpcyBkb2Vzbid0IGhvbGQgdHJ1ZS5cbiAgICAgICAgICB2YXIgbWlkZGxlT2Zmc2V0ID0gTWF0aC5yb3VuZChtaW5PZmZzZXQgKyAobWF4T2Zmc2V0IC0gbWluT2Zmc2V0KSAvIDIpO1xuXG4gICAgICAgICAgaWYgKG1pZGRsZU9mZnNldCA8IE1hdGguY2VpbChzaXplIC8gMikpIHtcbiAgICAgICAgICAgIHJldHVybiAwOyAvLyBuZWFyIHRoZSBiZWdpbm5pbmdcbiAgICAgICAgICB9IGVsc2UgaWYgKG1pZGRsZU9mZnNldCA+IGxhc3RJdGVtT2Zmc2V0ICsgTWF0aC5mbG9vcihzaXplIC8gMikpIHtcbiAgICAgICAgICAgIHJldHVybiBsYXN0SXRlbU9mZnNldDsgLy8gbmVhciB0aGUgZW5kXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtaWRkbGVPZmZzZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ2F1dG8nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHNjcm9sbE9mZnNldCA+PSBtaW5PZmZzZXQgJiYgc2Nyb2xsT2Zmc2V0IDw9IG1heE9mZnNldCkge1xuICAgICAgICAgIHJldHVybiBzY3JvbGxPZmZzZXQ7XG4gICAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsT2Zmc2V0IDwgbWluT2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIG1pbk9mZnNldDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbWF4T2Zmc2V0O1xuICAgICAgICB9XG5cbiAgICB9XG4gIH0sXG4gIGdldFN0YXJ0SW5kZXhGb3JPZmZzZXQ6IGZ1bmN0aW9uIGdldFN0YXJ0SW5kZXhGb3JPZmZzZXQoX3JlZjUsIG9mZnNldCkge1xuICAgIHZhciBpdGVtQ291bnQgPSBfcmVmNS5pdGVtQ291bnQsXG4gICAgICAgIGl0ZW1TaXplID0gX3JlZjUuaXRlbVNpemU7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIE1hdGgubWluKGl0ZW1Db3VudCAtIDEsIE1hdGguZmxvb3Iob2Zmc2V0IC8gaXRlbVNpemUpKSk7XG4gIH0sXG4gIGdldFN0b3BJbmRleEZvclN0YXJ0SW5kZXg6IGZ1bmN0aW9uIGdldFN0b3BJbmRleEZvclN0YXJ0SW5kZXgoX3JlZjYsIHN0YXJ0SW5kZXgsIHNjcm9sbE9mZnNldCkge1xuICAgIHZhciBkaXJlY3Rpb24gPSBfcmVmNi5kaXJlY3Rpb24sXG4gICAgICAgIGhlaWdodCA9IF9yZWY2LmhlaWdodCxcbiAgICAgICAgaXRlbUNvdW50ID0gX3JlZjYuaXRlbUNvdW50LFxuICAgICAgICBpdGVtU2l6ZSA9IF9yZWY2Lml0ZW1TaXplLFxuICAgICAgICBsYXlvdXQgPSBfcmVmNi5sYXlvdXQsXG4gICAgICAgIHdpZHRoID0gX3JlZjYud2lkdGg7XG4gICAgLy8gVE9ETyBEZXByZWNhdGUgZGlyZWN0aW9uIFwiaG9yaXpvbnRhbFwiXG4gICAgdmFyIGlzSG9yaXpvbnRhbCA9IGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnIHx8IGxheW91dCA9PT0gJ2hvcml6b250YWwnO1xuICAgIHZhciBvZmZzZXQgPSBzdGFydEluZGV4ICogaXRlbVNpemU7XG4gICAgdmFyIHNpemUgPSBpc0hvcml6b250YWwgPyB3aWR0aCA6IGhlaWdodDtcbiAgICB2YXIgbnVtVmlzaWJsZUl0ZW1zID0gTWF0aC5jZWlsKChzaXplICsgc2Nyb2xsT2Zmc2V0IC0gb2Zmc2V0KSAvIGl0ZW1TaXplKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgTWF0aC5taW4oaXRlbUNvdW50IC0gMSwgc3RhcnRJbmRleCArIG51bVZpc2libGVJdGVtcyAtIDEgLy8gLTEgaXMgYmVjYXVzZSBzdG9wIGluZGV4IGlzIGluY2x1c2l2ZVxuICAgICkpO1xuICB9LFxuICBpbml0SW5zdGFuY2VQcm9wczogZnVuY3Rpb24gaW5pdEluc3RhbmNlUHJvcHMocHJvcHMpIHsvLyBOb29wXG4gIH0sXG4gIHNob3VsZFJlc2V0U3R5bGVDYWNoZU9uSXRlbVNpemVDaGFuZ2U6IHRydWUsXG4gIHZhbGlkYXRlUHJvcHM6IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMoX3JlZjcpIHtcbiAgICB2YXIgaXRlbVNpemUgPSBfcmVmNy5pdGVtU2l6ZTtcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIGl0ZW1TaXplICE9PSAnbnVtYmVyJykge1xuICAgICAgICB0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcIml0ZW1TaXplXCIgcHJvcCBoYXMgYmVlbiBzcGVjaWZpZWQuICcgKyAnVmFsdWUgc2hvdWxkIGJlIGEgbnVtYmVyLiAnICsgKFwiXFxcIlwiICsgKGl0ZW1TaXplID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIGl0ZW1TaXplKSArIFwiXFxcIiB3YXMgc3BlY2lmaWVkLlwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59KTtcblxuLy8gUHVsbGVkIGZyb20gcmVhY3QtY29tcGF0XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L3ByZWFjdC1jb21wYXQvYmxvYi83YzVkZTAwZTdjODVlMmZmZDAxMWJmM2FmMDI4OTliNjNmNjk5ZDNhL3NyYy9pbmRleC5qcyNMMzQ5XG5mdW5jdGlvbiBzaGFsbG93RGlmZmVycyhwcmV2LCBuZXh0KSB7XG4gIGZvciAodmFyIGF0dHJpYnV0ZSBpbiBwcmV2KSB7XG4gICAgaWYgKCEoYXR0cmlidXRlIGluIG5leHQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfYXR0cmlidXRlIGluIG5leHQpIHtcbiAgICBpZiAocHJldltfYXR0cmlidXRlXSAhPT0gbmV4dFtfYXR0cmlidXRlXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyBJdCBrbm93cyB0byBjb21wYXJlIGluZGl2aWR1YWwgc3R5bGUgcHJvcHMgYW5kIGlnbm9yZSB0aGUgd3JhcHBlciBvYmplY3QuXG4vLyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0bWVtb1xuXG5mdW5jdGlvbiBhcmVFcXVhbChwcmV2UHJvcHMsIG5leHRQcm9wcykge1xuICB2YXIgcHJldlN0eWxlID0gcHJldlByb3BzLnN0eWxlLFxuICAgICAgcHJldlJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcmV2UHJvcHMsIFtcInN0eWxlXCJdKTtcblxuICB2YXIgbmV4dFN0eWxlID0gbmV4dFByb3BzLnN0eWxlLFxuICAgICAgbmV4dFJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShuZXh0UHJvcHMsIFtcInN0eWxlXCJdKTtcblxuICByZXR1cm4gIXNoYWxsb3dEaWZmZXJzKHByZXZTdHlsZSwgbmV4dFN0eWxlKSAmJiAhc2hhbGxvd0RpZmZlcnMocHJldlJlc3QsIG5leHRSZXN0KTtcbn1cblxuLy8gSXQga25vd3MgdG8gY29tcGFyZSBpbmRpdmlkdWFsIHN0eWxlIHByb3BzIGFuZCBpZ25vcmUgdGhlIHdyYXBwZXIgb2JqZWN0LlxuLy8gU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1jb21wb25lbnQuaHRtbCNzaG91bGRjb21wb25lbnR1cGRhdGVcblxuZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gIHJldHVybiAhYXJlRXF1YWwodGhpcy5wcm9wcywgbmV4dFByb3BzKSB8fCBzaGFsbG93RGlmZmVycyh0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xufVxuXG5leHBvcnQgeyBWYXJpYWJsZVNpemVHcmlkLCBWYXJpYWJsZVNpemVMaXN0LCBGaXhlZFNpemVHcmlkLCBGaXhlZFNpemVMaXN0LCBhcmVFcXVhbCwgc2hvdWxkQ29tcG9uZW50VXBkYXRlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJpbXBvcnQgb21pdCBmcm9tICdsb2Rhc2gvb21pdCc7XHJcbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIG1lbW8sIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXV0b2NvbXBsZXRlLCB7IEF1dG9jb21wbGV0ZVByb3BzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BdXRvY29tcGxldGUnO1xyXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJztcclxuXHJcbmltcG9ydCB0eXBlIHsgQ29tbW9uRmllbGRUeXBlLCBCYXNpY1ZhbHVlLCBCYXNpY0ZpZWxkVmFsdWUgfSBmcm9tICdjb21wb25lbnRzL0Zvcm1zL2Zvcm1UeXBlcyc7XHJcblxyXG5pbXBvcnQgVGV4dElucHV0IGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvVGV4dElucHV0JztcclxuaW1wb3J0IFZpcnR1YWxpemVkTGlzdEJveCBmcm9tICcuL1ZpcnR1YWxpemVkTGlzdEJveCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VsZWN0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0aW9uVHlwZSBleHRlbmRzIENvbW1vbkZpZWxkVHlwZSB7XHJcbiAgdHlwZTogJ3NlbGVjdCcgfCAnbXVsdGlfc2VsZWN0JztcclxuICB2YWx1ZT86IEJhc2ljVmFsdWUgfCBCYXNpY1ZhbHVlW107XHJcbiAgb3B0aW9uczogQmFzaWNWYWx1ZVtdO1xyXG4gIGdldE9wdGlvbkxhYmVsOiAodmFsdWU6IEJhc2ljVmFsdWUpID0+IHN0cmluZztcclxuICBtdWx0aXBsZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IFNlbGVjdGlvbjogRkM8U2VsZWN0aW9uVHlwZT4gPSAoe1xyXG4gIHZhbHVlID0gW10sXHJcbiAgb25DaGFuZ2UsXHJcbiAgZ2V0T3B0aW9uTGFiZWwsXHJcbiAgbGFiZWwsXHJcbiAgb3B0aW9ucyxcclxuICBtdWx0aXBsZSA9IGZhbHNlLFxyXG4gIHNpemUgPSAnc21hbGwnLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCBbbG9jYWxWYWx1ZSwgc2V0TG9jYWxWYWx1ZV0gPSB1c2VTdGF0ZTxCYXNpY1ZhbHVlIHwgQmFzaWNWYWx1ZVtdPigpO1xyXG5cclxuICBjb25zdCBvbkxvY2FsQ2hhbmdlOiBBdXRvY29tcGxldGVQcm9wczxcclxuICAgIHN0cmluZyB8IG51bWJlcixcclxuICAgIHR5cGVvZiBtdWx0aXBsZSxcclxuICAgIGZhbHNlLFxyXG4gICAgZmFsc2VcclxuICA+WydvbkNoYW5nZSddID0gKF9lLCB2KSA9PiB7XHJcbiAgICB2ICYmIHNldExvY2FsVmFsdWUodik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udHJvbGxlZE9uQ2hhbmdlOiBBdXRvY29tcGxldGVQcm9wczxcclxuICAgIEJhc2ljVmFsdWUsXHJcbiAgICB0eXBlb2YgbXVsdGlwbGUsXHJcbiAgICBmYWxzZSxcclxuICAgIGZhbHNlXHJcbiAgPlsnb25DaGFuZ2UnXSA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKF9lOiBSZWFjdC5DaGFuZ2VFdmVudDxhbnk+LCB2YWx1ZTogQmFzaWNGaWVsZFZhbHVlIHwgQmFzaWNGaWVsZFZhbHVlW10gfCBudWxsKSA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlICYmXHJcbiAgICAgICAgdmFsdWUgJiZcclxuICAgICAgICBvbkNoYW5nZSh7XHJcbiAgICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEVpdGhlciBzdHJpbmcgb3IgbnVtYmVyXHJcbiAgICAgICAgICAgIHZhbHVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBbb25DaGFuZ2VdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25DaGFuZ2VUb1VzZSA9IG9uQ2hhbmdlID8gY29udHJvbGxlZE9uQ2hhbmdlIDogb25Mb2NhbENoYW5nZTtcclxuICBjb25zdCB2YWx1ZVRvVXNlID0gb25DaGFuZ2UgPyB2YWx1ZSA6IGxvY2FsVmFsdWU7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0b2NvbXBsZXRlXHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdH1cclxuICAgICAgey4uLm9taXQocHJvcHMsIFsnYWRkaXRpb25hbE5hbWVzJywgJ2FkZGl0aW9uYWxWYWx1ZXMnXSl9XHJcbiAgICAgIHNpemU9e3NpemV9XHJcbiAgICAgIGlkPXtwcm9wcy5uYW1lfVxyXG4gICAgICBtdWx0aXBsZT17bXVsdGlwbGV9XHJcbiAgICAgIHZhbHVlPXt2YWx1ZVRvVXNlfVxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgICBnZXRPcHRpb25MYWJlbD17Z2V0T3B0aW9uTGFiZWx9XHJcbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZVRvVXNlfVxyXG4gICAgICByZW5kZXJUYWdzPXsodmFsdWUsIGdldFRhZ1Byb3BzKSA9PlxyXG4gICAgICAgIHZhbHVlLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPENoaXBcclxuICAgICAgICAgICAga2V5PXtgb3B0aW9uLSR7aW5kZXh9YH1cclxuICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcclxuICAgICAgICAgICAgbGFiZWw9e2dldE9wdGlvbkxhYmVsKG9wdGlvbil9XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIHsuLi5nZXRUYWdQcm9wcyh7IGluZGV4IH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICAgIHJlbmRlcklucHV0PXsocGFyYW1zKSA9PiAoXHJcbiAgICAgICAgPFRleHRJbnB1dCB7Li4ucGFyYW1zfSBuYW1lPXtwcm9wcy5uYW1lfSBsYWJlbD17bGFiZWx9IHR5cGU9XCJ0ZXh0XCIgdmFyaWFudD1cImZpbGxlZFwiIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIGRpc2FibGVMaXN0V3JhcFxyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gSW1wbGVtZW50YXRpb24gZnJvbSBNYXRlcmlhbC1VSSBkb2NzXHJcbiAgICAgIExpc3Rib3hDb21wb25lbnQ9e1ZpcnR1YWxpemVkTGlzdEJveH1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oU2VsZWN0aW9uKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZU1lZGlhUXVlcnkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvdXNlTWVkaWFRdWVyeSc7XHJcbmltcG9ydCBMaXN0U3ViaGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RTdWJoZWFkZXInO1xyXG5pbXBvcnQgeyB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCB7IFZhcmlhYmxlU2l6ZUxpc3QgfSBmcm9tICdyZWFjdC13aW5kb3cnO1xyXG5cclxuY29uc3QgTElTVEJPWF9QQURESU5HID0gODsgLy8gcHhcclxuXHJcbmNvbnN0IHJlbmRlclJvdyA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBpbmRleCwgc3R5bGUgfSA9IHByb3BzO1xyXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoZGF0YVtpbmRleF0sIHtcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgIC4uLnN0eWxlLFxyXG4gICAgICB0b3A6IHN0eWxlLnRvcCArIExJU1RCT1hfUEFERElORyxcclxuICAgIH0sXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBPdXRlckVsZW1lbnRDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5jb25zdCBPdXRlckVsZW1lbnRUeXBlID0gUmVhY3QuZm9yd2FyZFJlZjxhbnk+KChwcm9wcywgcmVmKSA9PiB7XHJcbiAgY29uc3Qgb3V0ZXJQcm9wcyA9IFJlYWN0LnVzZUNvbnRleHQoT3V0ZXJFbGVtZW50Q29udGV4dCk7XHJcbiAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IHsuLi5wcm9wc30gey4uLm91dGVyUHJvcHN9IC8+O1xyXG59KTtcclxuXHJcbk91dGVyRWxlbWVudFR5cGUuZGlzcGxheU5hbWUgPSAnT3V0ZXJFbGVtZW50VHlwZSc7XHJcblxyXG5jb25zdCB1c2VSZXNldENhY2hlID0gKGRhdGE6IGFueSkgPT4ge1xyXG4gIGNvbnN0IHJlZiA9IFJlYWN0LnVzZVJlZjxhbnk+KG51bGwpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAocmVmLmN1cnJlbnQgIT0gbnVsbCkge1xyXG4gICAgICByZWYuY3VycmVudD8ucmVzZXRBZnRlckluZGV4KDAsIHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhXSk7XHJcbiAgcmV0dXJuIHJlZjtcclxufTtcclxuXHJcbi8vIEFkYXB0ZXIgZm9yIHJlYWN0LXdpbmRvd1xyXG5jb25zdCBMaXN0Ym94Q29tcG9uZW50ID0gUmVhY3QuZm9yd2FyZFJlZjxhbnk+KGZ1bmN0aW9uIExpc3Rib3hDb21wb25lbnQocHJvcHMsIHJlZikge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIC4uLm90aGVyIH0gPSBwcm9wcztcclxuICBjb25zdCBpdGVtRGF0YSA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBzbVVwID0gdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy51cCgnc20nKSwgeyBub1NzcjogdHJ1ZSB9KTtcclxuICBjb25zdCBpdGVtQ291bnQgPSBpdGVtRGF0YS5sZW5ndGg7XHJcbiAgY29uc3QgaXRlbVNpemUgPSBzbVVwID8gMzYgOiA0ODtcclxuXHJcbiAgY29uc3QgZ2V0Q2hpbGRTaXplID0gKGNoaWxkOiBhbnkpID0+IHtcclxuICAgIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkgJiYgY2hpbGQudHlwZSA9PT0gTGlzdFN1YmhlYWRlcikge1xyXG4gICAgICByZXR1cm4gNDg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGl0ZW1TaXplO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEhlaWdodCA9ICgpID0+IHtcclxuICAgIGlmIChpdGVtQ291bnQgPiA4KSB7XHJcbiAgICAgIHJldHVybiA4ICogaXRlbVNpemU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbURhdGEubWFwKGdldENoaWxkU2l6ZSkucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ3JpZFJlZiA9IHVzZVJlc2V0Q2FjaGUoaXRlbUNvdW50KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtyZWZ9PlxyXG4gICAgICA8T3V0ZXJFbGVtZW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17b3RoZXJ9PlxyXG4gICAgICAgIDxWYXJpYWJsZVNpemVMaXN0XHJcbiAgICAgICAgICBpdGVtRGF0YT17aXRlbURhdGF9XHJcbiAgICAgICAgICBoZWlnaHQ9e2dldEhlaWdodCgpICsgMiAqIExJU1RCT1hfUEFERElOR31cclxuICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICByZWY9e2dyaWRSZWZ9XHJcbiAgICAgICAgICBvdXRlckVsZW1lbnRUeXBlPXtPdXRlckVsZW1lbnRUeXBlfVxyXG4gICAgICAgICAgaW5uZXJFbGVtZW50VHlwZT1cInVsXCJcclxuICAgICAgICAgIGl0ZW1TaXplPXsoaW5kZXgpID0+IGdldENoaWxkU2l6ZShpdGVtRGF0YVtpbmRleF0pfVxyXG4gICAgICAgICAgb3ZlcnNjYW5Db3VudD17NX1cclxuICAgICAgICAgIGl0ZW1Db3VudD17aXRlbUNvdW50fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtyZW5kZXJSb3d9XHJcbiAgICAgICAgPC9WYXJpYWJsZVNpemVMaXN0PlxyXG4gICAgICA8L091dGVyRWxlbWVudENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTGlzdGJveENvbXBvbmVudCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=