(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[5],{

/***/ "./node_modules/react-number-format/dist/react-number-format.es.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-number-format/dist/react-number-format.es.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * react-number-format - 4.6.3
 * Author : Sudhanshu Yadav
 * Copyright (c) 2016, 2021 to Sudhanshu Yadav, released under the MIT license.
 * https://github.com/s-yadav/react-number-format
 */



function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

//     

                                                               

// basic noop function
function noop() {}
function returnTrue() {
  return true;
}

function charIsNumber(char         ) {
  return !!(char || '').match(/\d/);
}

function isNil(val     ) {
  return val === null || val === undefined;
}

function escapeRegExp(str        ) {
  return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}

function getThousandsGroupRegex(thousandsGroupStyle        ) {
  switch (thousandsGroupStyle) {
    case 'lakh':
      return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
    case 'wan':
      return /(\d)(?=(\d{4})+(?!\d))/g;
    case 'thousand':
    default:
      return /(\d)(?=(\d{3})+(?!\d))/g;
  }
}

function applyThousandSeparator(
  str        ,
  thousandSeparator        ,
  thousandsGroupStyle        
) {
  var thousandsGroupRegex = getThousandsGroupRegex(thousandsGroupStyle);
  var index = str.search(/[1-9]/);
  index = index === -1 ? str.length : index;
  return (
    str.substring(0, index) +
    str.substring(index, str.length).replace(thousandsGroupRegex, '$1' + thousandSeparator)
  );
}

//spilt a float number into different parts beforeDecimal, afterDecimal, and negation
function splitDecimal(numStr        , allowNegative) {
  if ( allowNegative === void 0 ) allowNegative          = true;

  var hasNagation = numStr[0] === '-';
  var addNegation = hasNagation && allowNegative;
  numStr = numStr.replace('-', '');

  var parts = numStr.split('.');
  var beforeDecimal = parts[0];
  var afterDecimal = parts[1] || '';

  return {
    beforeDecimal: beforeDecimal,
    afterDecimal: afterDecimal,
    hasNagation: hasNagation,
    addNegation: addNegation,
  };
}

function fixLeadingZero(numStr         ) {
  if (!numStr) { return numStr; }
  var isNegative = numStr[0] === '-';
  if (isNegative) { numStr = numStr.substring(1, numStr.length); }
  var parts = numStr.split('.');
  var beforeDecimal = parts[0].replace(/^0+/, '') || '0';
  var afterDecimal = parts[1] || '';

  return ("" + (isNegative ? '-' : '') + beforeDecimal + (afterDecimal ? ("." + afterDecimal) : ''));
}

/**
 * limit decimal numbers to given scale
 * Not used .fixedTo because that will break with big numbers
 */
function limitToScale(numStr        , scale        , fixedDecimalScale         ) {
  var str = '';
  var filler = fixedDecimalScale ? '0' : '';
  for (var i = 0; i <= scale - 1; i++) {
    str += numStr[i] || filler;
  }
  return str;
}

function repeat(str, count) {
  return Array(count + 1).join(str);
}

function toNumericString(num) {
  num += ''; // typecast number to string

  // store the sign and remove it from the number.
  var sign = num[0] === '-' ? '-' : '';
  if (sign) { num = num.substring(1); }

  // split the number into cofficient and exponent
  var ref = num.split(/[eE]/g);
  var coefficient = ref[0];
  var exponent = ref[1];

  // covert exponent to number;
  exponent = Number(exponent);

  // if there is no exponent part or its 0, return the coffiecient with sign
  if (!exponent) { return sign + coefficient; }

  coefficient = coefficient.replace('.', '');

  /**
   * for scientific notation the current decimal index will be after first number (index 0)
   * So effective decimal index will always be 1 + exponent value
   */
  var decimalIndex = 1 + exponent;

  var coffiecientLn = coefficient.length;

  if (decimalIndex < 0) {
    // if decimal index is less then 0 add preceding 0s
    // add 1 as join will have
    coefficient = '0.' + repeat('0', Math.abs(decimalIndex)) + coefficient;
  } else if (decimalIndex >= coffiecientLn) {
    // if decimal index is less then 0 add leading 0s
    coefficient = coefficient + repeat('0', decimalIndex - coffiecientLn);
  } else {
    // else add decimal point at proper index
    coefficient =
      (coefficient.substring(0, decimalIndex) || '0') + '.' + coefficient.substring(decimalIndex);
  }

  return sign + coefficient;
}

/**
 * This method is required to round prop value to given scale.
 * Not used .round or .fixedTo because that will break with big numbers
 */
function roundToPrecision(numStr        , scale        , fixedDecimalScale         ) {
  //if number is empty don't do anything return empty string
  if (['', '-'].indexOf(numStr) !== -1) { return numStr; }

  var shoudHaveDecimalSeparator = numStr.indexOf('.') !== -1 && scale;
  var ref = splitDecimal(numStr);
  var beforeDecimal = ref.beforeDecimal;
  var afterDecimal = ref.afterDecimal;
  var hasNagation = ref.hasNagation;
  var floatValue = parseFloat(("0." + (afterDecimal || '0')));
  var floatValueStr =
    afterDecimal.length <= scale ? ("0." + afterDecimal) : floatValue.toFixed(scale);
  var roundedDecimalParts = floatValueStr.split('.');
  var intPart = beforeDecimal
    .split('')
    .reverse()
    .reduce(function (roundedStr, current, idx) {
      if (roundedStr.length > idx) {
        return (
          (Number(roundedStr[0]) + Number(current)).toString() +
          roundedStr.substring(1, roundedStr.length)
        );
      }
      return current + roundedStr;
    }, roundedDecimalParts[0]);

  var decimalPart = limitToScale(
    roundedDecimalParts[1] || '',
    Math.min(scale, afterDecimal.length),
    fixedDecimalScale
  );
  var negation = hasNagation ? '-' : '';
  var decimalSeparator = shoudHaveDecimalSeparator ? '.' : '';
  return ("" + negation + intPart + decimalSeparator + decimalPart);
}

function omit(obj        , keyMaps        ) {
  var filteredObj = {};
  Object.keys(obj).forEach(function (key) {
    if (!keyMaps[key]) { filteredObj[key] = obj[key]; }
  });
  return filteredObj;
}

/** set the caret positon in an input field **/
function setCaretPosition(el                  , caretPos        ) {
  el.value = el.value;
  // ^ this is used to not only get 'focus', but
  // to make sure we don't have it everything -selected-
  // (it causes an issue in chrome, and having it doesn't hurt any other browser)
  if (el !== null) {
    if (el.createTextRange) {
      var range = el.createTextRange();
      range.move('character', caretPos);
      range.select();
      return true;
    }
    // (el.selectionStart === 0 added for Firefox bug)
    if (el.selectionStart || el.selectionStart === 0) {
      el.focus();
      el.setSelectionRange(caretPos, caretPos);
      return true;
    }

    // fail city, fortunately this never happens (as far as I've tested) :)
    el.focus();
    return false;
  }
}

/**
  Given previous value and newValue it returns the index
  start - end to which values have changed.
  This function makes assumption about only consecutive
  characters are changed which is correct assumption for caret input.
*/
function findChangedIndex(prevValue        , newValue        ) {
  var i = 0,
    j = 0;
  var prevLength = prevValue.length;
  var newLength = newValue.length;
  while (prevValue[i] === newValue[i] && i < prevLength) { i++; }

  //check what has been changed from last
  while (
    prevValue[prevLength - 1 - j] === newValue[newLength - 1 - j] &&
    newLength - j > i &&
    prevLength - j > i
  ) {
    j++;
  }

  return { start: i, end: prevLength - j };
}

/*
  Returns a number whose value is limited to the given range
*/
function clamp(num        , min        , max        ) {
  return Math.min(Math.max(num, min), max);
}

function getCurrentCaretPosition(el                  ) {
  /*Max of selectionStart and selectionEnd is taken for the patch of pixel and other mobile device caret bug*/
  return Math.max(el.selectionStart, el.selectionEnd);
}

function addInputMode(format                                   ) {
  return format || !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}

//     

var propTypes$1 = {
  thousandSeparator: propTypes.oneOfType([propTypes.string, propTypes.oneOf([true])]),
  decimalSeparator: propTypes.string,
  allowedDecimalSeparators: propTypes.arrayOf(propTypes.string),
  thousandsGroupStyle: propTypes.oneOf(['thousand', 'lakh', 'wan']),
  decimalScale: propTypes.number,
  fixedDecimalScale: propTypes.bool,
  displayType: propTypes.oneOf(['input', 'text']),
  prefix: propTypes.string,
  suffix: propTypes.string,
  format: propTypes.oneOfType([propTypes.string, propTypes.func]),
  removeFormatting: propTypes.func,
  mask: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
  value: propTypes.oneOfType([propTypes.number, propTypes.string]),
  defaultValue: propTypes.oneOfType([propTypes.number, propTypes.string]),
  isNumericString: propTypes.bool,
  customInput: propTypes.elementType,
  allowNegative: propTypes.bool,
  allowEmptyFormatting: propTypes.bool,
  allowLeadingZeros: propTypes.bool,
  onValueChange: propTypes.func,
  onKeyDown: propTypes.func,
  onMouseUp: propTypes.func,
  onChange: propTypes.func,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  type: propTypes.oneOf(['text', 'tel', 'password']),
  isAllowed: propTypes.func,
  renderText: propTypes.func,
  getInputRef: propTypes.oneOfType([
    propTypes.func, // for legacy refs
    propTypes.shape({ current: propTypes.any }) ]),
};

var defaultProps = {
  displayType: 'input',
  decimalSeparator: '.',
  thousandsGroupStyle: 'thousand',
  fixedDecimalScale: false,
  prefix: '',
  suffix: '',
  allowNegative: true,
  allowEmptyFormatting: false,
  allowLeadingZeros: false,
  isNumericString: false,
  type: 'text',
  onValueChange: noop,
  onChange: noop,
  onKeyDown: noop,
  onMouseUp: noop,
  onFocus: noop,
  onBlur: noop,
  isAllowed: returnTrue,
};
var NumberFormat = /*@__PURE__*/(function (superclass) {
  function NumberFormat(props        ) {
    superclass.call(this, props);

    var defaultValue = props.defaultValue;

    //validate props
    this.validateProps();

    var formattedValue = this.formatValueProp(defaultValue);

    this.state = {
      value: formattedValue,
      numAsString: this.removeFormatting(formattedValue),
      mounted: false,
    };

    this.selectionBeforeInput = {
      selectionStart: 0,
      selectionEnd: 0,
    };

    this.onChange = this.onChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  if ( superclass ) NumberFormat.__proto__ = superclass;
  NumberFormat.prototype = Object.create( superclass && superclass.prototype );
  NumberFormat.prototype.constructor = NumberFormat;

  NumberFormat.prototype.componentDidMount = function componentDidMount () {
    // set mounted state
    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      mounted: true,
    });
  };

  NumberFormat.prototype.componentDidUpdate = function componentDidUpdate (prevProps        ) {
    this.updateValueIfRequired(prevProps);
  };

  NumberFormat.prototype.componentWillUnmount = function componentWillUnmount () {
    clearTimeout(this.focusTimeout);
    clearTimeout(this.caretPositionTimeout);
  };

  NumberFormat.prototype.updateValueIfRequired = function updateValueIfRequired (prevProps        ) {
    var ref = this;
    var props = ref.props;
    var state = ref.state;
    var focusedElm = ref.focusedElm;
    var stateValue = state.value;
    var lastNumStr = state.numAsString; if ( lastNumStr === void 0 ) lastNumStr = '';

    // If only state changed no need to do any thing
    if (prevProps !== props) {
      //validate props
      this.validateProps();

      var lastValueWithNewFormat = this.formatNumString(lastNumStr);

      var formattedValue = isNil(props.value) ? lastValueWithNewFormat : this.formatValueProp();
      var numAsString = this.removeFormatting(formattedValue);

      var floatValue = parseFloat(numAsString);
      var lastFloatValue = parseFloat(lastNumStr);

      if (
        //while typing set state only when float value changes
        ((!isNaN(floatValue) || !isNaN(lastFloatValue)) && floatValue !== lastFloatValue) ||
        //can also set state when float value is same and the format props changes
        lastValueWithNewFormat !== stateValue ||
        //set state always when not in focus and formatted value is changed
        (focusedElm === null && formattedValue !== stateValue)
      ) {
        this.updateValue({ formattedValue: formattedValue, numAsString: numAsString, input: focusedElm });
      }
    }
  };

  /** Misc methods **/
  NumberFormat.prototype.getFloatString = function getFloatString (num) {
    if ( num === void 0 ) num         = '';

    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    var numRegex = this.getNumberRegex(true);

    //remove negation for regex check
    var hasNegation = num[0] === '-';
    if (hasNegation) { num = num.replace('-', ''); }

    //if decimal scale is zero remove decimal and number after decimalSeparator
    if (decimalSeparator && decimalScale === 0) {
      num = num.split(decimalSeparator)[0];
    }

    num = (num.match(numRegex) || []).join('').replace(decimalSeparator, '.');

    //remove extra decimals
    var firstDecimalIndex = num.indexOf('.');

    if (firstDecimalIndex !== -1) {
      num = (num.substring(0, firstDecimalIndex)) + "." + (num
        .substring(firstDecimalIndex + 1, num.length)
        .replace(new RegExp(escapeRegExp(decimalSeparator), 'g'), ''));
    }

    //add negation back
    if (hasNegation) { num = '-' + num; }

    return num;
  };

  //returned regex assumes decimalSeparator is as per prop
  NumberFormat.prototype.getNumberRegex = function getNumberRegex (g         , ignoreDecimalSeparator          ) {
    var ref = this.props;
    var format = ref.format;
    var decimalScale = ref.decimalScale;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    return new RegExp(
      '\\d' +
        (decimalSeparator && decimalScale !== 0 && !ignoreDecimalSeparator && !format
          ? '|' + escapeRegExp(decimalSeparator)
          : ''),
      g ? 'g' : undefined
    );
  };

  NumberFormat.prototype.getSeparators = function getSeparators () {
    var ref = this.props;
    var decimalSeparator = ref.decimalSeparator;
    var ref$1 = this.props;
    var thousandSeparator = ref$1.thousandSeparator;
    var allowedDecimalSeparators = ref$1.allowedDecimalSeparators;

    if (thousandSeparator === true) {
      thousandSeparator = ',';
    }
    if (!allowedDecimalSeparators) {
      allowedDecimalSeparators = [decimalSeparator, '.'];
    }

    return {
      decimalSeparator: decimalSeparator,
      thousandSeparator: thousandSeparator,
      allowedDecimalSeparators: allowedDecimalSeparators,
    };
  };

  NumberFormat.prototype.getMaskAtIndex = function getMaskAtIndex (index        ) {
    var ref = this.props;
    var mask = ref.mask; if ( mask === void 0 ) mask = ' ';
    if (typeof mask === 'string') {
      return mask;
    }

    return mask[index] || ' ';
  };

  NumberFormat.prototype.getValueObject = function getValueObject (formattedValue        , numAsString        ) {
    var floatValue = parseFloat(numAsString);

    return {
      formattedValue: formattedValue,
      value: numAsString,
      floatValue: isNaN(floatValue) ? undefined : floatValue,
    };
  };

  NumberFormat.prototype.validateProps = function validateProps () {
    var ref = this.props;
    var mask = ref.mask;

    //validate decimalSeparator and thousandSeparator
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;
    var thousandSeparator = ref$1.thousandSeparator;

    if (decimalSeparator === thousandSeparator) {
      throw new Error(("\n          Decimal separator can't be same as thousand separator.\n          thousandSeparator: " + thousandSeparator + " (thousandSeparator = {true} is same as thousandSeparator = \",\")\n          decimalSeparator: " + decimalSeparator + " (default value for decimalSeparator is .)\n       "));
    }

    //validate mask
    if (mask) {
      var maskAsStr = mask === 'string' ? mask : mask.toString();
      if (maskAsStr.match(/\d/g)) {
        throw new Error(("\n          Mask " + mask + " should not contain numeric character;\n        "));
      }
    }
  };
  /** Misc methods end **/

  /** caret specific methods **/
  NumberFormat.prototype.setPatchedCaretPosition = function setPatchedCaretPosition (el                  , caretPos        , currentValue        ) {
    /* setting caret position within timeout of 0ms is required for mobile chrome,
    otherwise browser resets the caret position after we set it
    We are also setting it without timeout so that in normal browser we don't see the flickering */
    setCaretPosition(el, caretPos);
    this.caretPositionTimeout = setTimeout(function () {
      if (el.value === currentValue) { setCaretPosition(el, caretPos); }
    }, 0);
  };

  /* This keeps the caret within typing area so people can't type in between prefix or suffix */
  NumberFormat.prototype.correctCaretPosition = function correctCaretPosition (value        , caretPos        , direction         ) {
    var ref = this.props;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var format = ref.format;

    //if value is empty return 0
    if (value === '') { return 0; }

    //caret position should be between 0 and value length
    caretPos = clamp(caretPos, 0, value.length);

    //in case of format as number limit between prefix and suffix
    if (!format) {
      var hasNegation = value[0] === '-';
      return clamp(caretPos, prefix.length + (hasNegation ? 1 : 0), value.length - suffix.length);
    }

    //in case if custom format method don't do anything
    if (typeof format === 'function') { return caretPos; }

    /* in case format is string find the closest # position from the caret position */

    //in case the caretPos have input value on it don't do anything
    if (format[caretPos] === '#' && charIsNumber(value[caretPos])) {
      return caretPos;
    }

    //if caretPos is just after input value don't do anything
    if (format[caretPos - 1] === '#' && charIsNumber(value[caretPos - 1])) {
      return caretPos;
    }

    //find the nearest caret position
    var firstHashPosition = format.indexOf('#');
    var lastHashPosition = format.lastIndexOf('#');

    //limit the cursor between the first # position and the last # position
    caretPos = clamp(caretPos, firstHashPosition, lastHashPosition + 1);

    var nextPos = format.substring(caretPos, format.length).indexOf('#');
    var caretLeftBound = caretPos;
    var caretRightBound = caretPos + (nextPos === -1 ? 0 : nextPos);

    //get the position where the last number is present
    while (
      caretLeftBound > firstHashPosition &&
      (format[caretLeftBound] !== '#' || !charIsNumber(value[caretLeftBound]))
    ) {
      caretLeftBound -= 1;
    }

    var goToLeft =
      !charIsNumber(value[caretRightBound]) ||
      (direction === 'left' && caretPos !== firstHashPosition) ||
      caretPos - caretLeftBound < caretRightBound - caretPos;

    if (goToLeft) {
      //check if number should be taken after the bound or after it
      //if number preceding a valid number keep it after
      return charIsNumber(value[caretLeftBound]) ? caretLeftBound + 1 : caretLeftBound;
    }

    return caretRightBound;
  };

  NumberFormat.prototype.getCaretPosition = function getCaretPosition (inputValue        , formattedValue        , caretPos        ) {
    var ref = this.props;
    var format = ref.format;
    var stateValue = this.state.value;
    var numRegex = this.getNumberRegex(true);
    var inputNumber = (inputValue.match(numRegex) || []).join('');
    var formattedNumber = (formattedValue.match(numRegex) || []).join('');
    var j, i;

    j = 0;

    for (i = 0; i < caretPos; i++) {
      var currentInputChar = inputValue[i] || '';
      var currentFormatChar = formattedValue[j] || '';
      //no need to increase new cursor position if formatted value does not have those characters
      //case inputValue = 1a23 and formattedValue =  123
      if (!currentInputChar.match(numRegex) && currentInputChar !== currentFormatChar) {
        continue;
      }

      //When we are striping out leading zeros maintain the new cursor position
      //Case inputValue = 00023 and formattedValue = 23;
      if (
        currentInputChar === '0' &&
        currentFormatChar.match(numRegex) &&
        currentFormatChar !== '0' &&
        inputNumber.length !== formattedNumber.length
      ) {
        continue;
      }

      //we are not using currentFormatChar because j can change here
      while (currentInputChar !== formattedValue[j] && j < formattedValue.length) {
        j++;
      }
      j++;
    }

    if (typeof format === 'string' && !stateValue) {
      //set it to the maximum value so it goes after the last number
      j = formattedValue.length;
    }

    //correct caret position if its outside of editable area
    j = this.correctCaretPosition(formattedValue, j);

    return j;
  };
  /** caret specific methods ends **/

  /** methods to remove formattting **/
  NumberFormat.prototype.removePrefixAndSuffix = function removePrefixAndSuffix (val        ) {
    var ref = this.props;
    var format = ref.format;
    var prefix = ref.prefix;
    var suffix = ref.suffix;

    //remove prefix and suffix
    if (!format && val) {
      var isNegative = val[0] === '-';

      //remove negation sign
      if (isNegative) { val = val.substring(1, val.length); }

      //remove prefix
      val = prefix && val.indexOf(prefix) === 0 ? val.substring(prefix.length, val.length) : val;

      //remove suffix
      var suffixLastIndex = val.lastIndexOf(suffix);
      val =
        suffix && suffixLastIndex !== -1 && suffixLastIndex === val.length - suffix.length
          ? val.substring(0, suffixLastIndex)
          : val;

      //add negation sign back
      if (isNegative) { val = '-' + val; }
    }

    return val;
  };

  NumberFormat.prototype.removePatternFormatting = function removePatternFormatting (val        ) {
    var ref = this.props;
    var format = ref.format;
    var formatArray = format.split('#').filter(function (str) { return str !== ''; });
    var start = 0;
    var numStr = '';

    for (var i = 0, ln = formatArray.length; i <= ln; i++) {
      var part = formatArray[i] || '';

      //if i is the last fragment take the index of end of the value
      //For case like +1 (911) 911 91 91 having pattern +1 (###) ### ## ##
      var index = i === ln ? val.length : val.indexOf(part, start);

      /* in any case if we don't find the pattern part in the value assume the val as numeric string
      This will be also in case if user has started typing, in any other case it will not be -1
      unless wrong prop value is provided */
      if (index === -1) {
        numStr = val;
        break;
      } else {
        numStr += val.substring(start, index);
        start = index + part.length;
      }
    }

    return (numStr.match(/\d/g) || []).join('');
  };

  NumberFormat.prototype.removeFormatting = function removeFormatting (val        ) {
    var ref = this.props;
    var format = ref.format;
    var removeFormatting = ref.removeFormatting;
    if (!val) { return val; }

    if (!format) {
      val = this.removePrefixAndSuffix(val);
      val = this.getFloatString(val);
    } else if (typeof format === 'string') {
      val = this.removePatternFormatting(val);
    } else if (typeof removeFormatting === 'function') {
      //condition need to be handled if format method is provide,
      val = removeFormatting(val);
    } else {
      val = (val.match(/\d/g) || []).join('');
    }
    return val;
  };
  /** methods to remove formattting end **/

  /*** format specific methods start ***/
  /**
   * Format when # based string is provided
   * @param  {string} numStr Numeric String
   * @return {string}        formatted Value
   */
  NumberFormat.prototype.formatWithPattern = function formatWithPattern (numStr        ) {
    var ref = this.props;
    var format = ref.format;
    var hashCount = 0;
    var formattedNumberAry = format.split('');
    for (var i = 0, ln = format.length; i < ln; i++) {
      if (format[i] === '#') {
        formattedNumberAry[i] = numStr[hashCount] || this.getMaskAtIndex(hashCount);
        hashCount += 1;
      }
    }
    return formattedNumberAry.join('');
  };
  /**
   * @param  {string} numStr Numeric string/floatString] It always have decimalSeparator as .
   * @return {string} formatted Value
   */
  NumberFormat.prototype.formatAsNumber = function formatAsNumber (numStr        ) {
    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var allowNegative = ref.allowNegative;
    var thousandsGroupStyle = ref.thousandsGroupStyle;
    var ref$1 = this.getSeparators();
    var thousandSeparator = ref$1.thousandSeparator;
    var decimalSeparator = ref$1.decimalSeparator;

    var hasDecimalSeparator = numStr.indexOf('.') !== -1 || (decimalScale && fixedDecimalScale);
    var ref$2 = splitDecimal(numStr, allowNegative);
    var beforeDecimal = ref$2.beforeDecimal;
    var afterDecimal = ref$2.afterDecimal;
    var addNegation = ref$2.addNegation; // eslint-disable-line prefer-const

    //apply decimal precision if its defined
    if (decimalScale !== undefined) {
      afterDecimal = limitToScale(afterDecimal, decimalScale, fixedDecimalScale);
    }

    if (thousandSeparator) {
      beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator, thousandsGroupStyle);
    }

    //add prefix and suffix
    if (prefix) { beforeDecimal = prefix + beforeDecimal; }
    if (suffix) { afterDecimal = afterDecimal + suffix; }

    //restore negation sign
    if (addNegation) { beforeDecimal = '-' + beforeDecimal; }

    numStr = beforeDecimal + ((hasDecimalSeparator && decimalSeparator) || '') + afterDecimal;

    return numStr;
  };

  NumberFormat.prototype.formatNumString = function formatNumString (numStr) {
    if ( numStr === void 0 ) numStr         = '';

    var ref = this.props;
    var format = ref.format;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var formattedValue = numStr;

    if (numStr === '' && !allowEmptyFormatting) {
      formattedValue = '';
    } else if (numStr === '-' && !format) {
      formattedValue = '-';
    } else if (typeof format === 'string') {
      formattedValue = this.formatWithPattern(formattedValue);
    } else if (typeof format === 'function') {
      formattedValue = format(formattedValue);
    } else {
      formattedValue = this.formatAsNumber(formattedValue);
    }

    return formattedValue;
  };

  NumberFormat.prototype.formatValueProp = function formatValueProp (defaultValue                 ) {
    var ref = this.props;
    var format = ref.format;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var allowEmptyFormatting = ref.allowEmptyFormatting;
    var ref$1 = this.props;
    var value = ref$1.value;
    var isNumericString = ref$1.isNumericString;

    // if value is undefined or null, use defaultValue instead
    value = isNil(value) ? defaultValue : value;

    var isNonNumericFalsy = !value && value !== 0;

    if (isNonNumericFalsy && allowEmptyFormatting) {
      value = '';
    }

    // if value is not defined return empty string
    if (isNonNumericFalsy && !allowEmptyFormatting) { return ''; }

    if (typeof value === 'number') {
      value = toNumericString(value);
      isNumericString = true;
    }

    //change infinity value to empty string
    if (value === 'Infinity' && isNumericString) {
      value = '';
    }

    //round the number based on decimalScale
    //format only if non formatted value is provided
    if (isNumericString && !format && typeof decimalScale === 'number') {
      value = roundToPrecision(value, decimalScale, fixedDecimalScale);
    }

    var formattedValue = isNumericString ? this.formatNumString(value) : this.formatInput(value);

    return formattedValue;
  };

  NumberFormat.prototype.formatNegation = function formatNegation (value) {
    if ( value === void 0 ) value         = '';

    var ref = this.props;
    var allowNegative = ref.allowNegative;
    var negationRegex = new RegExp('(-)');
    var doubleNegationRegex = new RegExp('(-)(.)*(-)');

    // Check number has '-' value
    var hasNegation = negationRegex.test(value);

    // Check number has 2 or more '-' values
    var removeNegation = doubleNegationRegex.test(value);

    //remove negation
    value = value.replace(/-/g, '');

    if (hasNegation && !removeNegation && allowNegative) {
      value = '-' + value;
    }

    return value;
  };

  NumberFormat.prototype.formatInput = function formatInput (value) {
    if ( value === void 0 ) value         = '';

    var ref = this.props;
    var format = ref.format;

    //format negation only if we are formatting as number
    if (!format) {
      value = this.removePrefixAndSuffix(value);
      value = this.formatNegation(value);
    }

    //remove formatting from number
    value = this.removeFormatting(value);

    return this.formatNumString(value);
  };

  /*** format specific methods end ***/
  NumberFormat.prototype.isCharacterAFormat = function isCharacterAFormat (caretPos        , value        ) {
    var ref = this.props;
    var format = ref.format;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var ref$1 = this.getSeparators();
    var decimalSeparator = ref$1.decimalSeparator;

    //check within format pattern
    if (typeof format === 'string' && format[caretPos] !== '#') { return true; }

    //check in number format
    if (
      !format &&
      (caretPos < prefix.length ||
        caretPos >= value.length - suffix.length ||
        (decimalScale && fixedDecimalScale && value[caretPos] === decimalSeparator))
    ) {
      return true;
    }

    return false;
  };

  /**
   * This will check if any formatting got removed by the delete or backspace and reset the value
   * It will also work as fallback if android chome keyDown handler does not work
   **/
  NumberFormat.prototype.correctInputValue = function correctInputValue (caretPos        , lastValue        , value        ) {
    var this$1 = this;

    var ref = this.props;
    var format = ref.format;
    var allowNegative = ref.allowNegative;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var decimalScale = ref.decimalScale;
    var ref$1 = this.getSeparators();
    var allowedDecimalSeparators = ref$1.allowedDecimalSeparators;
    var decimalSeparator = ref$1.decimalSeparator;
    var lastNumStr = this.state.numAsString || '';
    var ref$2 = this.selectionBeforeInput;
    var selectionStart = ref$2.selectionStart;
    var selectionEnd = ref$2.selectionEnd;
    var ref$3 = findChangedIndex(lastValue, value);
    var start = ref$3.start;
    var end = ref$3.end;

    /** Check for any allowed decimal separator is added in the numeric format and replace it with decimal separator */
    if (
      !format &&
      start === end &&
      allowedDecimalSeparators.indexOf(value[selectionStart]) !== -1
    ) {
      var separator = decimalScale === 0 ? '' : decimalSeparator;
      return (
        value.substr(0, selectionStart) + separator + value.substr(selectionStart + 1, value.length)
      );
    }

    var leftBound = !!format ? 0 : prefix.length;
    var rightBound = lastValue.length - (!!format ? 0 : suffix.length);

    if (
      // don't do anything if something got added
      value.length > lastValue.length ||
      // or if the new value is an empty string
      !value.length ||
      // or if nothing has changed, in which case start will be same as end
      start === end ||
      // or in case if whole input is selected and new value is typed
      (selectionStart === 0 && selectionEnd === lastValue.length) ||
      // or in case if the whole content is replaced by browser, example (autocomplete)
      (start === 0 && end === lastValue.length) ||
      // or if charcters between prefix and suffix is selected.
      // For numeric inputs we apply the format so, prefix and suffix can be ignored
      (selectionStart === leftBound && selectionEnd === rightBound)
    ) {
      return value;
    }

    // check whether the deleted portion has a character that is part of a format
    var deletedValues = lastValue.substr(start, end - start);
    var formatGotDeleted = !![].concat( deletedValues ).find(function (deletedVal, idx) { return this$1.isCharacterAFormat(idx + start, lastValue); });

    // if it has, only remove characters that are not part of the format
    if(formatGotDeleted) {
      var deletedValuePortion = lastValue.substr(start);
      var recordIndexOfFormatCharacters = {};
      var resolvedPortion = [];
      [].concat( deletedValuePortion ).forEach(function (currentPortion, idx) {
        if(this$1.isCharacterAFormat(idx + start, lastValue)){
          recordIndexOfFormatCharacters[idx] = currentPortion;
        } else if (idx > deletedValues.length - 1) {
          resolvedPortion.push(currentPortion);
        }
      });

      Object.keys(recordIndexOfFormatCharacters).forEach(function (idx) {
        if(resolvedPortion.length > idx){
          resolvedPortion.splice(idx, 0, recordIndexOfFormatCharacters[idx]);
        } else {
          resolvedPortion.push(recordIndexOfFormatCharacters[idx]);
        }
      });

      value = lastValue.substr(0, start) + resolvedPortion.join('');
    }




    //for numbers check if beforeDecimal got deleted and there is nothing after decimal,
    //clear all numbers in such case while keeping the - sign
    if (!format) {
      var numericString = this.removeFormatting(value);
      var ref$4 = splitDecimal(
        numericString,
        allowNegative
      );
      var beforeDecimal = ref$4.beforeDecimal;
      var afterDecimal = ref$4.afterDecimal;
      var addNegation = ref$4.addNegation; // eslint-disable-line prefer-const

      //clear only if something got deleted
      var isBeforeDecimalPoint = caretPos < value.indexOf(decimalSeparator) + 1;
      if (
        numericString.length < lastNumStr.length &&
        isBeforeDecimalPoint &&
        beforeDecimal === '' &&
        !parseFloat(afterDecimal)
      ) {
        return addNegation ? '-' : '';
      }
    }

    return value;
  };

  /** Update value and caret position */
  NumberFormat.prototype.updateValue = function updateValue (params   
                           
                        
                       
                            
                     
                              
   ) {
    var formattedValue = params.formattedValue;
    var input = params.input;
    var setCaretPosition = params.setCaretPosition; if ( setCaretPosition === void 0 ) setCaretPosition = true;
    var numAsString = params.numAsString;
    var caretPos = params.caretPos;
    var ref = this.props;
    var onValueChange = ref.onValueChange;
    var ref$1 = this.state;
    var lastValue = ref$1.value;

    if (input) {
      //set caret position, and value imperatively when element is provided
      if (setCaretPosition) {
        //calculate caret position if not defined
        if (!caretPos) {
          var inputValue = params.inputValue || input.value;

          var currentCaretPosition = getCurrentCaretPosition(input);

          /**
           * set the value imperatively, this is required for IE fix
           * This is also required as if new caret position is beyond the previous value.
           * Caret position will not be set correctly
           */
          input.value = formattedValue;

          //get the caret position
          caretPos = this.getCaretPosition(inputValue, formattedValue, currentCaretPosition);
        }

        //set caret position
        this.setPatchedCaretPosition(input, caretPos, formattedValue);
      } else {
        /**
         * if we are not setting caret position set the value imperatively.
         * This is required on onBlur method
         */
        input.value = formattedValue;
      }
    }

    //calculate numeric string if not passed
    if (numAsString === undefined) {
      numAsString = this.removeFormatting(formattedValue);
    }

    //update state if value is changed
    if (formattedValue !== lastValue) {
      this.setState({ value: formattedValue, numAsString: numAsString });

      // trigger onValueChange synchronously, so parent is updated along with the number format. Fix for #277, #287
      onValueChange(this.getValueObject(formattedValue, numAsString));
    }
  };

  NumberFormat.prototype.onChange = function onChange (e                     ) {
    var el = e.target;
    var inputValue = el.value;
    var ref = this;
    var state = ref.state;
    var props = ref.props;
    var isAllowed = props.isAllowed;
    var lastValue = state.value || '';

    var currentCaretPosition = getCurrentCaretPosition(el);

    inputValue = this.correctInputValue(currentCaretPosition, lastValue, inputValue);

    var formattedValue = this.formatInput(inputValue) || '';
    var numAsString = this.removeFormatting(formattedValue);

    var valueObj = this.getValueObject(formattedValue, numAsString);
    var isChangeAllowed = isAllowed(valueObj);

    if (!isChangeAllowed) {
      formattedValue = lastValue;
    }

    this.updateValue({ formattedValue: formattedValue, numAsString: numAsString, inputValue: inputValue, input: el });

    if (isChangeAllowed) {
      props.onChange(e);
    }
  };

  NumberFormat.prototype.onBlur = function onBlur (e                     ) {
    var ref = this;
    var props = ref.props;
    var state = ref.state;
    var format = props.format;
    var onBlur = props.onBlur;
    var allowLeadingZeros = props.allowLeadingZeros;
    var numAsString = state.numAsString;
    var lastValue = state.value;
    this.focusedElm = null;

    clearTimeout(this.focusTimeout);
    clearTimeout(this.caretPositionTimeout);

    if (!format) {
      // if the numAsString is not a valid number reset it to empty
      if (isNaN(parseFloat(numAsString))) {
        numAsString = '';
      }

      if (!allowLeadingZeros) {
        numAsString = fixLeadingZero(numAsString);
      }

      var formattedValue = this.formatNumString(numAsString);

      //change the state
      if (formattedValue !== lastValue) {
        // the event needs to be persisted because its properties can be accessed in an asynchronous way
        this.updateValue({
          formattedValue: formattedValue,
          numAsString: numAsString,
          input: e.target,
          setCaretPosition: false,
        });
        onBlur(e);
        return;
      }
    }
    onBlur(e);
  };

  NumberFormat.prototype.onKeyDown = function onKeyDown (e                             ) {
    var el = e.target;
    var key = e.key;
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value; if ( value === void 0 ) value = '';
    var expectedCaretPosition;
    var ref = this.props;
    var decimalScale = ref.decimalScale;
    var fixedDecimalScale = ref.fixedDecimalScale;
    var prefix = ref.prefix;
    var suffix = ref.suffix;
    var format = ref.format;
    var onKeyDown = ref.onKeyDown;
    var ignoreDecimalSeparator = decimalScale !== undefined && fixedDecimalScale;
    var numRegex = this.getNumberRegex(false, ignoreDecimalSeparator);
    var negativeRegex = new RegExp('-');
    var isPatternFormat = typeof format === 'string';

    this.selectionBeforeInput = {
      selectionStart: selectionStart,
      selectionEnd: selectionEnd,
    };

    //Handle backspace and delete against non numerical/decimal characters or arrow keys
    if (key === 'ArrowLeft' || key === 'Backspace') {
      expectedCaretPosition = selectionStart - 1;
    } else if (key === 'ArrowRight') {
      expectedCaretPosition = selectionStart + 1;
    } else if (key === 'Delete') {
      expectedCaretPosition = selectionStart;
    }

    //if expectedCaretPosition is not set it means we don't want to Handle keyDown
    //also if multiple characters are selected don't handle
    if (expectedCaretPosition === undefined || selectionStart !== selectionEnd) {
      onKeyDown(e);
      return;
    }

    var newCaretPosition = expectedCaretPosition;
    var leftBound = isPatternFormat ? format.indexOf('#') : prefix.length;
    var rightBound = isPatternFormat ? format.lastIndexOf('#') + 1 : value.length - suffix.length;

    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      var direction = key === 'ArrowLeft' ? 'left' : 'right';
      newCaretPosition = this.correctCaretPosition(value, expectedCaretPosition, direction);
    } else if (
      key === 'Delete' &&
      !numRegex.test(value[expectedCaretPosition]) &&
      !negativeRegex.test(value[expectedCaretPosition])
    ) {
      while (!numRegex.test(value[newCaretPosition]) && newCaretPosition < rightBound) {
        newCaretPosition++;
      }
    } else if (key === 'Backspace' && !numRegex.test(value[expectedCaretPosition])) {
      /* NOTE: This is special case when backspace is pressed on a
      negative value while the cursor position is after prefix. We can't handle it on onChange because
      we will not have any information of keyPress
      */
      if (selectionStart <= leftBound + 1 && value[0] === '-' && typeof format === 'undefined') {
        var newValue = value.substring(1);
        this.updateValue({
          formattedValue: newValue,
          caretPos: newCaretPosition,
          input: el,
        });
      } else if (!negativeRegex.test(value[expectedCaretPosition])) {
        while (!numRegex.test(value[newCaretPosition - 1]) && newCaretPosition > leftBound) {
          newCaretPosition--;
        }
        newCaretPosition = this.correctCaretPosition(value, newCaretPosition, 'left');
      }
    }

    if (
      newCaretPosition !== expectedCaretPosition ||
      expectedCaretPosition < leftBound ||
      expectedCaretPosition > rightBound
    ) {
      e.preventDefault();
      this.setPatchedCaretPosition(el, newCaretPosition, value);
    }

    /* NOTE: this is just required for unit test as we need to get the newCaretPosition,
            Remove this when you find different solution */
    if (e.isUnitTestRun) {
      this.setPatchedCaretPosition(el, newCaretPosition, value);
    }

    onKeyDown(e);
  };

  /** required to handle the caret position when click anywhere within the input **/
  NumberFormat.prototype.onMouseUp = function onMouseUp (e                          ) {
    var el = e.target;

    /**
     * NOTE: we have to give default value for value as in case when custom input is provided
     * value can come as undefined when nothing is provided on value prop.
     */
    var selectionStart = el.selectionStart;
    var selectionEnd = el.selectionEnd;
    var value = el.value; if ( value === void 0 ) value = '';

    if (selectionStart === selectionEnd) {
      var caretPosition = this.correctCaretPosition(value, selectionStart);
      if (caretPosition !== selectionStart) {
        this.setPatchedCaretPosition(el, caretPosition, value);
      }
    }

    this.props.onMouseUp(e);
  };

  NumberFormat.prototype.onFocus = function onFocus (e                     ) {
    var this$1 = this;

    // Workaround Chrome and Safari bug https://bugs.chromium.org/p/chromium/issues/detail?id=779328
    // (onFocus event target selectionStart is always 0 before setTimeout)
    e.persist();

    this.focusedElm = e.target;
    this.focusTimeout = setTimeout(function () {
      var el = e.target;
      var selectionStart = el.selectionStart;
      var selectionEnd = el.selectionEnd;
      var value = el.value; if ( value === void 0 ) value = '';

      var caretPosition = this$1.correctCaretPosition(value, selectionStart);

      //setPatchedCaretPosition only when everything is not selected on focus (while tabbing into the field)
      if (
        caretPosition !== selectionStart &&
        !(selectionStart === 0 && selectionEnd === value.length)
      ) {
        this$1.setPatchedCaretPosition(el, caretPosition, value);
      }

      this$1.props.onFocus(e);
    }, 0);
  };

  NumberFormat.prototype.render = function render () {
    var ref = this.props;
    var type = ref.type;
    var displayType = ref.displayType;
    var customInput = ref.customInput;
    var renderText = ref.renderText;
    var getInputRef = ref.getInputRef;
    var format = ref.format;
    var ref$1 = this.state;
    var value = ref$1.value;
    var mounted = ref$1.mounted;

    var otherProps = omit(this.props, propTypes$1);

    // add input mode on element based on format prop and device once the component is mounted
    var inputMode = mounted && addInputMode(format) ? 'numeric' : undefined;

    var inputProps = Object.assign({ inputMode: inputMode }, otherProps, {
      type: type,
      value: value,
      onChange: this.onChange,
      onKeyDown: this.onKeyDown,
      onMouseUp: this.onMouseUp,
      onFocus: this.onFocus,
      onBlur: this.onBlur,
    });

    if (displayType === 'text') {
      return renderText ? (
        renderText(value, otherProps) || null
      ) : (
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( 'span', Object.assign({}, otherProps, { ref: getInputRef }),
          value
        )
      );
    } else if (customInput) {
      var CustomInput = customInput;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( CustomInput, Object.assign({}, inputProps, { ref: getInputRef }));
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement( 'input', Object.assign({}, inputProps, { ref: getInputRef }));
  };

  return NumberFormat;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component));

NumberFormat.propTypes = propTypes$1;
NumberFormat.defaultProps = defaultProps;

/* harmony default export */ __webpack_exports__["default"] = (NumberFormat);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LW51bWJlci1mb3JtYXQvZGlzdC9yZWFjdC1udW1iZXItZm9ybWF0LmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCOztBQUUxQjtBQUNBLGtCQUFrQixZQUFZLEVBQUU7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsRUFBRTtBQUMzQjtBQUNBO0FBQ0EseUJBQXlCLEVBQUU7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixlQUFlO0FBQy9CO0FBQ0EsbUJBQW1CLDZDQUE2QztBQUNoRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTs7QUFFWjtBQUNBO0FBQ0EsYUFBYSx3QkFBd0I7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMkJBQTJCOztBQUU3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsZUFBZTs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2QkFBNkI7QUFDckQsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELEtBQUs7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIseUJBQXlCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiw4RUFBOEU7QUFDeEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsNEJBQTRCOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlLQUF5SyxLQUFLO0FBQzlLOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGO0FBQzdGO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGdDQUFnQztBQUN0RSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLFVBQVU7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUF1QyxpQkFBaUI7O0FBRXhEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxlQUFlLGNBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsb0NBQW9DOztBQUUzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixpQkFBaUI7QUFDeEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsbUJBQW1CLEVBQUU7QUFDcEY7QUFDQTs7QUFFQSw0Q0FBNEMsU0FBUztBQUNyRDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQix3Q0FBd0M7QUFDekQsaUJBQWlCLHNDQUFzQzs7QUFFdkQ7QUFDQSxzQkFBc0IscUNBQXFDOztBQUUzRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFELFdBQVc7O0FBRWhFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlFQUFpRSxhQUFhOztBQUU5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlGQUF5RiwwREFBMEQsRUFBRTs7QUFFcko7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQzs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixrREFBa0Q7O0FBRXZFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBc0IsOEZBQThGOztBQUVwSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qjs7QUFFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG9DQUFvQyx1QkFBdUI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSw0Q0FBSyx3Q0FBd0MsZUFBZSxtQkFBbUI7QUFDdkY7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsYUFBYSw0Q0FBSyw2Q0FBNkMsZUFBZSxtQkFBbUI7QUFDakc7O0FBRUEsV0FBVyw0Q0FBSyx5Q0FBeUMsZUFBZSxtQkFBbUI7QUFDM0Y7O0FBRUE7QUFDQSxDQUFDLENBQUMsNENBQUs7O0FBRVA7QUFDQTs7QUFFZSwyRUFBWSxFQUFDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogcmVhY3QtbnVtYmVyLWZvcm1hdCAtIDQuNi4zXG4gKiBBdXRob3IgOiBTdWRoYW5zaHUgWWFkYXZcbiAqIENvcHlyaWdodCAoYykgMjAxNiwgMjAyMSB0byBTdWRoYW5zaHUgWWFkYXYsIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9zLXlhZGF2L3JlYWN0LW51bWJlci1mb3JtYXRcbiAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XG5cdHJldHVybiBtb2R1bGUgPSB7IGV4cG9ydHM6IHt9IH0sIGZuKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMpLCBtb2R1bGUuZXhwb3J0cztcbn1cblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXRfMSA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbnZhciBmYWN0b3J5V2l0aFRocm93aW5nU2hpbXMgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gc2hpbShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgIGlmIChzZWNyZXQgPT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0XzEpIHtcbiAgICAgIC8vIEl0IGlzIHN0aWxsIHNhZmUgd2hlbiBjYWxsZWQgZnJvbSBSZWFjdC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICdVc2UgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKCkgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICk7XG4gICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgdGhyb3cgZXJyO1xuICB9ICBzaGltLmlzUmVxdWlyZWQgPSBzaGltO1xuICBmdW5jdGlvbiBnZXRTaGltKCkge1xuICAgIHJldHVybiBzaGltO1xuICB9ICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IHNoaW0sXG4gICAgYm9vbDogc2hpbSxcbiAgICBmdW5jOiBzaGltLFxuICAgIG51bWJlcjogc2hpbSxcbiAgICBvYmplY3Q6IHNoaW0sXG4gICAgc3RyaW5nOiBzaGltLFxuICAgIHN5bWJvbDogc2hpbSxcblxuICAgIGFueTogc2hpbSxcbiAgICBhcnJheU9mOiBnZXRTaGltLFxuICAgIGVsZW1lbnQ6IHNoaW0sXG4gICAgZWxlbWVudFR5cGU6IHNoaW0sXG4gICAgaW5zdGFuY2VPZjogZ2V0U2hpbSxcbiAgICBub2RlOiBzaGltLFxuICAgIG9iamVjdE9mOiBnZXRTaGltLFxuICAgIG9uZU9mOiBnZXRTaGltLFxuICAgIG9uZU9mVHlwZTogZ2V0U2hpbSxcbiAgICBzaGFwZTogZ2V0U2hpbSxcbiAgICBleGFjdDogZ2V0U2hpbSxcblxuICAgIGNoZWNrUHJvcFR5cGVzOiBlbXB0eUZ1bmN0aW9uV2l0aFJlc2V0LFxuICAgIHJlc2V0V2FybmluZ0NhY2hlOiBlbXB0eUZ1bmN0aW9uXG4gIH07XG5cbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcblxudmFyIHByb3BUeXBlcyA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUpIHtcbi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxue1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zKCk7XG59XG59KTtcblxuLy8gICAgIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuLy8gYmFzaWMgbm9vcCBmdW5jdGlvblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5mdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY2hhcklzTnVtYmVyKGNoYXIgICAgICAgICApIHtcbiAgcmV0dXJuICEhKGNoYXIgfHwgJycpLm1hdGNoKC9cXGQvKTtcbn1cblxuZnVuY3Rpb24gaXNOaWwodmFsICAgICApIHtcbiAgcmV0dXJuIHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZXNjYXBlUmVnRXhwKHN0ciAgICAgICAgKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvWy1bXFxdL3t9KCkqKz8uXFxcXF4kfF0vZywgJ1xcXFwkJicpO1xufVxuXG5mdW5jdGlvbiBnZXRUaG91c2FuZHNHcm91cFJlZ2V4KHRob3VzYW5kc0dyb3VwU3R5bGUgICAgICAgICkge1xuICBzd2l0Y2ggKHRob3VzYW5kc0dyb3VwU3R5bGUpIHtcbiAgICBjYXNlICdsYWtoJzpcbiAgICAgIHJldHVybiAvKFxcZCs/KSg/PShcXGRcXGQpKyhcXGQpKD8hXFxkKSkoXFwuXFxkKyk/L2c7XG4gICAgY2FzZSAnd2FuJzpcbiAgICAgIHJldHVybiAvKFxcZCkoPz0oXFxkezR9KSsoPyFcXGQpKS9nO1xuICAgIGNhc2UgJ3Rob3VzYW5kJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIC8oXFxkKSg/PShcXGR7M30pKyg/IVxcZCkpL2c7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUaG91c2FuZFNlcGFyYXRvcihcbiAgc3RyICAgICAgICAsXG4gIHRob3VzYW5kU2VwYXJhdG9yICAgICAgICAsXG4gIHRob3VzYW5kc0dyb3VwU3R5bGUgICAgICAgIFxuKSB7XG4gIHZhciB0aG91c2FuZHNHcm91cFJlZ2V4ID0gZ2V0VGhvdXNhbmRzR3JvdXBSZWdleCh0aG91c2FuZHNHcm91cFN0eWxlKTtcbiAgdmFyIGluZGV4ID0gc3RyLnNlYXJjaCgvWzEtOV0vKTtcbiAgaW5kZXggPSBpbmRleCA9PT0gLTEgPyBzdHIubGVuZ3RoIDogaW5kZXg7XG4gIHJldHVybiAoXG4gICAgc3RyLnN1YnN0cmluZygwLCBpbmRleCkgK1xuICAgIHN0ci5zdWJzdHJpbmcoaW5kZXgsIHN0ci5sZW5ndGgpLnJlcGxhY2UodGhvdXNhbmRzR3JvdXBSZWdleCwgJyQxJyArIHRob3VzYW5kU2VwYXJhdG9yKVxuICApO1xufVxuXG4vL3NwaWx0IGEgZmxvYXQgbnVtYmVyIGludG8gZGlmZmVyZW50IHBhcnRzIGJlZm9yZURlY2ltYWwsIGFmdGVyRGVjaW1hbCwgYW5kIG5lZ2F0aW9uXG5mdW5jdGlvbiBzcGxpdERlY2ltYWwobnVtU3RyICAgICAgICAsIGFsbG93TmVnYXRpdmUpIHtcbiAgaWYgKCBhbGxvd05lZ2F0aXZlID09PSB2b2lkIDAgKSBhbGxvd05lZ2F0aXZlICAgICAgICAgID0gdHJ1ZTtcblxuICB2YXIgaGFzTmFnYXRpb24gPSBudW1TdHJbMF0gPT09ICctJztcbiAgdmFyIGFkZE5lZ2F0aW9uID0gaGFzTmFnYXRpb24gJiYgYWxsb3dOZWdhdGl2ZTtcbiAgbnVtU3RyID0gbnVtU3RyLnJlcGxhY2UoJy0nLCAnJyk7XG5cbiAgdmFyIHBhcnRzID0gbnVtU3RyLnNwbGl0KCcuJyk7XG4gIHZhciBiZWZvcmVEZWNpbWFsID0gcGFydHNbMF07XG4gIHZhciBhZnRlckRlY2ltYWwgPSBwYXJ0c1sxXSB8fCAnJztcblxuICByZXR1cm4ge1xuICAgIGJlZm9yZURlY2ltYWw6IGJlZm9yZURlY2ltYWwsXG4gICAgYWZ0ZXJEZWNpbWFsOiBhZnRlckRlY2ltYWwsXG4gICAgaGFzTmFnYXRpb246IGhhc05hZ2F0aW9uLFxuICAgIGFkZE5lZ2F0aW9uOiBhZGROZWdhdGlvbixcbiAgfTtcbn1cblxuZnVuY3Rpb24gZml4TGVhZGluZ1plcm8obnVtU3RyICAgICAgICAgKSB7XG4gIGlmICghbnVtU3RyKSB7IHJldHVybiBudW1TdHI7IH1cbiAgdmFyIGlzTmVnYXRpdmUgPSBudW1TdHJbMF0gPT09ICctJztcbiAgaWYgKGlzTmVnYXRpdmUpIHsgbnVtU3RyID0gbnVtU3RyLnN1YnN0cmluZygxLCBudW1TdHIubGVuZ3RoKTsgfVxuICB2YXIgcGFydHMgPSBudW1TdHIuc3BsaXQoJy4nKTtcbiAgdmFyIGJlZm9yZURlY2ltYWwgPSBwYXJ0c1swXS5yZXBsYWNlKC9eMCsvLCAnJykgfHwgJzAnO1xuICB2YXIgYWZ0ZXJEZWNpbWFsID0gcGFydHNbMV0gfHwgJyc7XG5cbiAgcmV0dXJuIChcIlwiICsgKGlzTmVnYXRpdmUgPyAnLScgOiAnJykgKyBiZWZvcmVEZWNpbWFsICsgKGFmdGVyRGVjaW1hbCA/IChcIi5cIiArIGFmdGVyRGVjaW1hbCkgOiAnJykpO1xufVxuXG4vKipcbiAqIGxpbWl0IGRlY2ltYWwgbnVtYmVycyB0byBnaXZlbiBzY2FsZVxuICogTm90IHVzZWQgLmZpeGVkVG8gYmVjYXVzZSB0aGF0IHdpbGwgYnJlYWsgd2l0aCBiaWcgbnVtYmVyc1xuICovXG5mdW5jdGlvbiBsaW1pdFRvU2NhbGUobnVtU3RyICAgICAgICAsIHNjYWxlICAgICAgICAsIGZpeGVkRGVjaW1hbFNjYWxlICAgICAgICAgKSB7XG4gIHZhciBzdHIgPSAnJztcbiAgdmFyIGZpbGxlciA9IGZpeGVkRGVjaW1hbFNjYWxlID8gJzAnIDogJyc7XG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IHNjYWxlIC0gMTsgaSsrKSB7XG4gICAgc3RyICs9IG51bVN0cltpXSB8fCBmaWxsZXI7XG4gIH1cbiAgcmV0dXJuIHN0cjtcbn1cblxuZnVuY3Rpb24gcmVwZWF0KHN0ciwgY291bnQpIHtcbiAgcmV0dXJuIEFycmF5KGNvdW50ICsgMSkuam9pbihzdHIpO1xufVxuXG5mdW5jdGlvbiB0b051bWVyaWNTdHJpbmcobnVtKSB7XG4gIG51bSArPSAnJzsgLy8gdHlwZWNhc3QgbnVtYmVyIHRvIHN0cmluZ1xuXG4gIC8vIHN0b3JlIHRoZSBzaWduIGFuZCByZW1vdmUgaXQgZnJvbSB0aGUgbnVtYmVyLlxuICB2YXIgc2lnbiA9IG51bVswXSA9PT0gJy0nID8gJy0nIDogJyc7XG4gIGlmIChzaWduKSB7IG51bSA9IG51bS5zdWJzdHJpbmcoMSk7IH1cblxuICAvLyBzcGxpdCB0aGUgbnVtYmVyIGludG8gY29mZmljaWVudCBhbmQgZXhwb25lbnRcbiAgdmFyIHJlZiA9IG51bS5zcGxpdCgvW2VFXS9nKTtcbiAgdmFyIGNvZWZmaWNpZW50ID0gcmVmWzBdO1xuICB2YXIgZXhwb25lbnQgPSByZWZbMV07XG5cbiAgLy8gY292ZXJ0IGV4cG9uZW50IHRvIG51bWJlcjtcbiAgZXhwb25lbnQgPSBOdW1iZXIoZXhwb25lbnQpO1xuXG4gIC8vIGlmIHRoZXJlIGlzIG5vIGV4cG9uZW50IHBhcnQgb3IgaXRzIDAsIHJldHVybiB0aGUgY29mZmllY2llbnQgd2l0aCBzaWduXG4gIGlmICghZXhwb25lbnQpIHsgcmV0dXJuIHNpZ24gKyBjb2VmZmljaWVudDsgfVxuXG4gIGNvZWZmaWNpZW50ID0gY29lZmZpY2llbnQucmVwbGFjZSgnLicsICcnKTtcblxuICAvKipcbiAgICogZm9yIHNjaWVudGlmaWMgbm90YXRpb24gdGhlIGN1cnJlbnQgZGVjaW1hbCBpbmRleCB3aWxsIGJlIGFmdGVyIGZpcnN0IG51bWJlciAoaW5kZXggMClcbiAgICogU28gZWZmZWN0aXZlIGRlY2ltYWwgaW5kZXggd2lsbCBhbHdheXMgYmUgMSArIGV4cG9uZW50IHZhbHVlXG4gICAqL1xuICB2YXIgZGVjaW1hbEluZGV4ID0gMSArIGV4cG9uZW50O1xuXG4gIHZhciBjb2ZmaWVjaWVudExuID0gY29lZmZpY2llbnQubGVuZ3RoO1xuXG4gIGlmIChkZWNpbWFsSW5kZXggPCAwKSB7XG4gICAgLy8gaWYgZGVjaW1hbCBpbmRleCBpcyBsZXNzIHRoZW4gMCBhZGQgcHJlY2VkaW5nIDBzXG4gICAgLy8gYWRkIDEgYXMgam9pbiB3aWxsIGhhdmVcbiAgICBjb2VmZmljaWVudCA9ICcwLicgKyByZXBlYXQoJzAnLCBNYXRoLmFicyhkZWNpbWFsSW5kZXgpKSArIGNvZWZmaWNpZW50O1xuICB9IGVsc2UgaWYgKGRlY2ltYWxJbmRleCA+PSBjb2ZmaWVjaWVudExuKSB7XG4gICAgLy8gaWYgZGVjaW1hbCBpbmRleCBpcyBsZXNzIHRoZW4gMCBhZGQgbGVhZGluZyAwc1xuICAgIGNvZWZmaWNpZW50ID0gY29lZmZpY2llbnQgKyByZXBlYXQoJzAnLCBkZWNpbWFsSW5kZXggLSBjb2ZmaWVjaWVudExuKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBlbHNlIGFkZCBkZWNpbWFsIHBvaW50IGF0IHByb3BlciBpbmRleFxuICAgIGNvZWZmaWNpZW50ID1cbiAgICAgIChjb2VmZmljaWVudC5zdWJzdHJpbmcoMCwgZGVjaW1hbEluZGV4KSB8fCAnMCcpICsgJy4nICsgY29lZmZpY2llbnQuc3Vic3RyaW5nKGRlY2ltYWxJbmRleCk7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIGNvZWZmaWNpZW50O1xufVxuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIHJlcXVpcmVkIHRvIHJvdW5kIHByb3AgdmFsdWUgdG8gZ2l2ZW4gc2NhbGUuXG4gKiBOb3QgdXNlZCAucm91bmQgb3IgLmZpeGVkVG8gYmVjYXVzZSB0aGF0IHdpbGwgYnJlYWsgd2l0aCBiaWcgbnVtYmVyc1xuICovXG5mdW5jdGlvbiByb3VuZFRvUHJlY2lzaW9uKG51bVN0ciAgICAgICAgLCBzY2FsZSAgICAgICAgLCBmaXhlZERlY2ltYWxTY2FsZSAgICAgICAgICkge1xuICAvL2lmIG51bWJlciBpcyBlbXB0eSBkb24ndCBkbyBhbnl0aGluZyByZXR1cm4gZW1wdHkgc3RyaW5nXG4gIGlmIChbJycsICctJ10uaW5kZXhPZihudW1TdHIpICE9PSAtMSkgeyByZXR1cm4gbnVtU3RyOyB9XG5cbiAgdmFyIHNob3VkSGF2ZURlY2ltYWxTZXBhcmF0b3IgPSBudW1TdHIuaW5kZXhPZignLicpICE9PSAtMSAmJiBzY2FsZTtcbiAgdmFyIHJlZiA9IHNwbGl0RGVjaW1hbChudW1TdHIpO1xuICB2YXIgYmVmb3JlRGVjaW1hbCA9IHJlZi5iZWZvcmVEZWNpbWFsO1xuICB2YXIgYWZ0ZXJEZWNpbWFsID0gcmVmLmFmdGVyRGVjaW1hbDtcbiAgdmFyIGhhc05hZ2F0aW9uID0gcmVmLmhhc05hZ2F0aW9uO1xuICB2YXIgZmxvYXRWYWx1ZSA9IHBhcnNlRmxvYXQoKFwiMC5cIiArIChhZnRlckRlY2ltYWwgfHwgJzAnKSkpO1xuICB2YXIgZmxvYXRWYWx1ZVN0ciA9XG4gICAgYWZ0ZXJEZWNpbWFsLmxlbmd0aCA8PSBzY2FsZSA/IChcIjAuXCIgKyBhZnRlckRlY2ltYWwpIDogZmxvYXRWYWx1ZS50b0ZpeGVkKHNjYWxlKTtcbiAgdmFyIHJvdW5kZWREZWNpbWFsUGFydHMgPSBmbG9hdFZhbHVlU3RyLnNwbGl0KCcuJyk7XG4gIHZhciBpbnRQYXJ0ID0gYmVmb3JlRGVjaW1hbFxuICAgIC5zcGxpdCgnJylcbiAgICAucmV2ZXJzZSgpXG4gICAgLnJlZHVjZShmdW5jdGlvbiAocm91bmRlZFN0ciwgY3VycmVudCwgaWR4KSB7XG4gICAgICBpZiAocm91bmRlZFN0ci5sZW5ndGggPiBpZHgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoTnVtYmVyKHJvdW5kZWRTdHJbMF0pICsgTnVtYmVyKGN1cnJlbnQpKS50b1N0cmluZygpICtcbiAgICAgICAgICByb3VuZGVkU3RyLnN1YnN0cmluZygxLCByb3VuZGVkU3RyLmxlbmd0aClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdXJyZW50ICsgcm91bmRlZFN0cjtcbiAgICB9LCByb3VuZGVkRGVjaW1hbFBhcnRzWzBdKTtcblxuICB2YXIgZGVjaW1hbFBhcnQgPSBsaW1pdFRvU2NhbGUoXG4gICAgcm91bmRlZERlY2ltYWxQYXJ0c1sxXSB8fCAnJyxcbiAgICBNYXRoLm1pbihzY2FsZSwgYWZ0ZXJEZWNpbWFsLmxlbmd0aCksXG4gICAgZml4ZWREZWNpbWFsU2NhbGVcbiAgKTtcbiAgdmFyIG5lZ2F0aW9uID0gaGFzTmFnYXRpb24gPyAnLScgOiAnJztcbiAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSBzaG91ZEhhdmVEZWNpbWFsU2VwYXJhdG9yID8gJy4nIDogJyc7XG4gIHJldHVybiAoXCJcIiArIG5lZ2F0aW9uICsgaW50UGFydCArIGRlY2ltYWxTZXBhcmF0b3IgKyBkZWNpbWFsUGFydCk7XG59XG5cbmZ1bmN0aW9uIG9taXQob2JqICAgICAgICAsIGtleU1hcHMgICAgICAgICkge1xuICB2YXIgZmlsdGVyZWRPYmogPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoIWtleU1hcHNba2V5XSkgeyBmaWx0ZXJlZE9ialtrZXldID0gb2JqW2tleV07IH1cbiAgfSk7XG4gIHJldHVybiBmaWx0ZXJlZE9iajtcbn1cblxuLyoqIHNldCB0aGUgY2FyZXQgcG9zaXRvbiBpbiBhbiBpbnB1dCBmaWVsZCAqKi9cbmZ1bmN0aW9uIHNldENhcmV0UG9zaXRpb24oZWwgICAgICAgICAgICAgICAgICAsIGNhcmV0UG9zICAgICAgICApIHtcbiAgZWwudmFsdWUgPSBlbC52YWx1ZTtcbiAgLy8gXiB0aGlzIGlzIHVzZWQgdG8gbm90IG9ubHkgZ2V0ICdmb2N1cycsIGJ1dFxuICAvLyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgaGF2ZSBpdCBldmVyeXRoaW5nIC1zZWxlY3RlZC1cbiAgLy8gKGl0IGNhdXNlcyBhbiBpc3N1ZSBpbiBjaHJvbWUsIGFuZCBoYXZpbmcgaXQgZG9lc24ndCBodXJ0IGFueSBvdGhlciBicm93c2VyKVxuICBpZiAoZWwgIT09IG51bGwpIHtcbiAgICBpZiAoZWwuY3JlYXRlVGV4dFJhbmdlKSB7XG4gICAgICB2YXIgcmFuZ2UgPSBlbC5jcmVhdGVUZXh0UmFuZ2UoKTtcbiAgICAgIHJhbmdlLm1vdmUoJ2NoYXJhY3RlcicsIGNhcmV0UG9zKTtcbiAgICAgIHJhbmdlLnNlbGVjdCgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIChlbC5zZWxlY3Rpb25TdGFydCA9PT0gMCBhZGRlZCBmb3IgRmlyZWZveCBidWcpXG4gICAgaWYgKGVsLnNlbGVjdGlvblN0YXJ0IHx8IGVsLnNlbGVjdGlvblN0YXJ0ID09PSAwKSB7XG4gICAgICBlbC5mb2N1cygpO1xuICAgICAgZWwuc2V0U2VsZWN0aW9uUmFuZ2UoY2FyZXRQb3MsIGNhcmV0UG9zKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhaWwgY2l0eSwgZm9ydHVuYXRlbHkgdGhpcyBuZXZlciBoYXBwZW5zIChhcyBmYXIgYXMgSSd2ZSB0ZXN0ZWQpIDopXG4gICAgZWwuZm9jdXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gIEdpdmVuIHByZXZpb3VzIHZhbHVlIGFuZCBuZXdWYWx1ZSBpdCByZXR1cm5zIHRoZSBpbmRleFxuICBzdGFydCAtIGVuZCB0byB3aGljaCB2YWx1ZXMgaGF2ZSBjaGFuZ2VkLlxuICBUaGlzIGZ1bmN0aW9uIG1ha2VzIGFzc3VtcHRpb24gYWJvdXQgb25seSBjb25zZWN1dGl2ZVxuICBjaGFyYWN0ZXJzIGFyZSBjaGFuZ2VkIHdoaWNoIGlzIGNvcnJlY3QgYXNzdW1wdGlvbiBmb3IgY2FyZXQgaW5wdXQuXG4qL1xuZnVuY3Rpb24gZmluZENoYW5nZWRJbmRleChwcmV2VmFsdWUgICAgICAgICwgbmV3VmFsdWUgICAgICAgICkge1xuICB2YXIgaSA9IDAsXG4gICAgaiA9IDA7XG4gIHZhciBwcmV2TGVuZ3RoID0gcHJldlZhbHVlLmxlbmd0aDtcbiAgdmFyIG5ld0xlbmd0aCA9IG5ld1ZhbHVlLmxlbmd0aDtcbiAgd2hpbGUgKHByZXZWYWx1ZVtpXSA9PT0gbmV3VmFsdWVbaV0gJiYgaSA8IHByZXZMZW5ndGgpIHsgaSsrOyB9XG5cbiAgLy9jaGVjayB3aGF0IGhhcyBiZWVuIGNoYW5nZWQgZnJvbSBsYXN0XG4gIHdoaWxlIChcbiAgICBwcmV2VmFsdWVbcHJldkxlbmd0aCAtIDEgLSBqXSA9PT0gbmV3VmFsdWVbbmV3TGVuZ3RoIC0gMSAtIGpdICYmXG4gICAgbmV3TGVuZ3RoIC0gaiA+IGkgJiZcbiAgICBwcmV2TGVuZ3RoIC0gaiA+IGlcbiAgKSB7XG4gICAgaisrO1xuICB9XG5cbiAgcmV0dXJuIHsgc3RhcnQ6IGksIGVuZDogcHJldkxlbmd0aCAtIGogfTtcbn1cblxuLypcbiAgUmV0dXJucyBhIG51bWJlciB3aG9zZSB2YWx1ZSBpcyBsaW1pdGVkIHRvIHRoZSBnaXZlbiByYW5nZVxuKi9cbmZ1bmN0aW9uIGNsYW1wKG51bSAgICAgICAgLCBtaW4gICAgICAgICwgbWF4ICAgICAgICApIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG51bSwgbWluKSwgbWF4KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VycmVudENhcmV0UG9zaXRpb24oZWwgICAgICAgICAgICAgICAgICApIHtcbiAgLypNYXggb2Ygc2VsZWN0aW9uU3RhcnQgYW5kIHNlbGVjdGlvbkVuZCBpcyB0YWtlbiBmb3IgdGhlIHBhdGNoIG9mIHBpeGVsIGFuZCBvdGhlciBtb2JpbGUgZGV2aWNlIGNhcmV0IGJ1ZyovXG4gIHJldHVybiBNYXRoLm1heChlbC5zZWxlY3Rpb25TdGFydCwgZWwuc2VsZWN0aW9uRW5kKTtcbn1cblxuZnVuY3Rpb24gYWRkSW5wdXRNb2RlKGZvcm1hdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gIHJldHVybiBmb3JtYXQgfHwgIShuYXZpZ2F0b3IucGxhdGZvcm0gJiYgL2lQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSkpO1xufVxuXG4vLyAgICAgXG5cbnZhciBwcm9wVHlwZXMkMSA9IHtcbiAgdGhvdXNhbmRTZXBhcmF0b3I6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5vbmVPZihbdHJ1ZV0pXSksXG4gIGRlY2ltYWxTZXBhcmF0b3I6IHByb3BUeXBlcy5zdHJpbmcsXG4gIGFsbG93ZWREZWNpbWFsU2VwYXJhdG9yczogcHJvcFR5cGVzLmFycmF5T2YocHJvcFR5cGVzLnN0cmluZyksXG4gIHRob3VzYW5kc0dyb3VwU3R5bGU6IHByb3BUeXBlcy5vbmVPZihbJ3Rob3VzYW5kJywgJ2xha2gnLCAnd2FuJ10pLFxuICBkZWNpbWFsU2NhbGU6IHByb3BUeXBlcy5udW1iZXIsXG4gIGZpeGVkRGVjaW1hbFNjYWxlOiBwcm9wVHlwZXMuYm9vbCxcbiAgZGlzcGxheVR5cGU6IHByb3BUeXBlcy5vbmVPZihbJ2lucHV0JywgJ3RleHQnXSksXG4gIHByZWZpeDogcHJvcFR5cGVzLnN0cmluZyxcbiAgc3VmZml4OiBwcm9wVHlwZXMuc3RyaW5nLFxuICBmb3JtYXQ6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5zdHJpbmcsIHByb3BUeXBlcy5mdW5jXSksXG4gIHJlbW92ZUZvcm1hdHRpbmc6IHByb3BUeXBlcy5mdW5jLFxuICBtYXNrOiBwcm9wVHlwZXMub25lT2ZUeXBlKFtwcm9wVHlwZXMuc3RyaW5nLCBwcm9wVHlwZXMuYXJyYXlPZihwcm9wVHlwZXMuc3RyaW5nKV0pLFxuICB2YWx1ZTogcHJvcFR5cGVzLm9uZU9mVHlwZShbcHJvcFR5cGVzLm51bWJlciwgcHJvcFR5cGVzLnN0cmluZ10pLFxuICBkZWZhdWx0VmFsdWU6IHByb3BUeXBlcy5vbmVPZlR5cGUoW3Byb3BUeXBlcy5udW1iZXIsIHByb3BUeXBlcy5zdHJpbmddKSxcbiAgaXNOdW1lcmljU3RyaW5nOiBwcm9wVHlwZXMuYm9vbCxcbiAgY3VzdG9tSW5wdXQ6IHByb3BUeXBlcy5lbGVtZW50VHlwZSxcbiAgYWxsb3dOZWdhdGl2ZTogcHJvcFR5cGVzLmJvb2wsXG4gIGFsbG93RW1wdHlGb3JtYXR0aW5nOiBwcm9wVHlwZXMuYm9vbCxcbiAgYWxsb3dMZWFkaW5nWmVyb3M6IHByb3BUeXBlcy5ib29sLFxuICBvblZhbHVlQ2hhbmdlOiBwcm9wVHlwZXMuZnVuYyxcbiAgb25LZXlEb3duOiBwcm9wVHlwZXMuZnVuYyxcbiAgb25Nb3VzZVVwOiBwcm9wVHlwZXMuZnVuYyxcbiAgb25DaGFuZ2U6IHByb3BUeXBlcy5mdW5jLFxuICBvbkZvY3VzOiBwcm9wVHlwZXMuZnVuYyxcbiAgb25CbHVyOiBwcm9wVHlwZXMuZnVuYyxcbiAgdHlwZTogcHJvcFR5cGVzLm9uZU9mKFsndGV4dCcsICd0ZWwnLCAncGFzc3dvcmQnXSksXG4gIGlzQWxsb3dlZDogcHJvcFR5cGVzLmZ1bmMsXG4gIHJlbmRlclRleHQ6IHByb3BUeXBlcy5mdW5jLFxuICBnZXRJbnB1dFJlZjogcHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgcHJvcFR5cGVzLmZ1bmMsIC8vIGZvciBsZWdhY3kgcmVmc1xuICAgIHByb3BUeXBlcy5zaGFwZSh7IGN1cnJlbnQ6IHByb3BUeXBlcy5hbnkgfSkgXSksXG59O1xuXG52YXIgZGVmYXVsdFByb3BzID0ge1xuICBkaXNwbGF5VHlwZTogJ2lucHV0JyxcbiAgZGVjaW1hbFNlcGFyYXRvcjogJy4nLFxuICB0aG91c2FuZHNHcm91cFN0eWxlOiAndGhvdXNhbmQnLFxuICBmaXhlZERlY2ltYWxTY2FsZTogZmFsc2UsXG4gIHByZWZpeDogJycsXG4gIHN1ZmZpeDogJycsXG4gIGFsbG93TmVnYXRpdmU6IHRydWUsXG4gIGFsbG93RW1wdHlGb3JtYXR0aW5nOiBmYWxzZSxcbiAgYWxsb3dMZWFkaW5nWmVyb3M6IGZhbHNlLFxuICBpc051bWVyaWNTdHJpbmc6IGZhbHNlLFxuICB0eXBlOiAndGV4dCcsXG4gIG9uVmFsdWVDaGFuZ2U6IG5vb3AsXG4gIG9uQ2hhbmdlOiBub29wLFxuICBvbktleURvd246IG5vb3AsXG4gIG9uTW91c2VVcDogbm9vcCxcbiAgb25Gb2N1czogbm9vcCxcbiAgb25CbHVyOiBub29wLFxuICBpc0FsbG93ZWQ6IHJldHVyblRydWUsXG59O1xudmFyIE51bWJlckZvcm1hdCA9IC8qQF9fUFVSRV9fKi8oZnVuY3Rpb24gKHN1cGVyY2xhc3MpIHtcbiAgZnVuY3Rpb24gTnVtYmVyRm9ybWF0KHByb3BzICAgICAgICApIHtcbiAgICBzdXBlcmNsYXNzLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgdmFyIGRlZmF1bHRWYWx1ZSA9IHByb3BzLmRlZmF1bHRWYWx1ZTtcblxuICAgIC8vdmFsaWRhdGUgcHJvcHNcbiAgICB0aGlzLnZhbGlkYXRlUHJvcHMoKTtcblxuICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0VmFsdWVQcm9wKGRlZmF1bHRWYWx1ZSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6IGZvcm1hdHRlZFZhbHVlLFxuICAgICAgbnVtQXNTdHJpbmc6IHRoaXMucmVtb3ZlRm9ybWF0dGluZyhmb3JtYXR0ZWRWYWx1ZSksXG4gICAgICBtb3VudGVkOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgdGhpcy5zZWxlY3Rpb25CZWZvcmVJbnB1dCA9IHtcbiAgICAgIHNlbGVjdGlvblN0YXJ0OiAwLFxuICAgICAgc2VsZWN0aW9uRW5kOiAwLFxuICAgIH07XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uTW91c2VVcCA9IHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaWYgKCBzdXBlcmNsYXNzICkgTnVtYmVyRm9ybWF0Ll9fcHJvdG9fXyA9IHN1cGVyY2xhc3M7XG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBzdXBlcmNsYXNzICYmIHN1cGVyY2xhc3MucHJvdG90eXBlICk7XG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJGb3JtYXQ7XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICAvLyBzZXQgbW91bnRlZCBzdGF0ZVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1kaWQtbW91bnQtc2V0LXN0YXRlXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb3VudGVkOiB0cnVlLFxuICAgIH0pO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlIChwcmV2UHJvcHMgICAgICAgICkge1xuICAgIHRoaXMudXBkYXRlVmFsdWVJZlJlcXVpcmVkKHByZXZQcm9wcyk7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50ICgpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5mb2N1c1RpbWVvdXQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNhcmV0UG9zaXRpb25UaW1lb3V0KTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnVwZGF0ZVZhbHVlSWZSZXF1aXJlZCA9IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlSWZSZXF1aXJlZCAocHJldlByb3BzICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgcHJvcHMgPSByZWYucHJvcHM7XG4gICAgdmFyIHN0YXRlID0gcmVmLnN0YXRlO1xuICAgIHZhciBmb2N1c2VkRWxtID0gcmVmLmZvY3VzZWRFbG07XG4gICAgdmFyIHN0YXRlVmFsdWUgPSBzdGF0ZS52YWx1ZTtcbiAgICB2YXIgbGFzdE51bVN0ciA9IHN0YXRlLm51bUFzU3RyaW5nOyBpZiAoIGxhc3ROdW1TdHIgPT09IHZvaWQgMCApIGxhc3ROdW1TdHIgPSAnJztcblxuICAgIC8vIElmIG9ubHkgc3RhdGUgY2hhbmdlZCBubyBuZWVkIHRvIGRvIGFueSB0aGluZ1xuICAgIGlmIChwcmV2UHJvcHMgIT09IHByb3BzKSB7XG4gICAgICAvL3ZhbGlkYXRlIHByb3BzXG4gICAgICB0aGlzLnZhbGlkYXRlUHJvcHMoKTtcblxuICAgICAgdmFyIGxhc3RWYWx1ZVdpdGhOZXdGb3JtYXQgPSB0aGlzLmZvcm1hdE51bVN0cmluZyhsYXN0TnVtU3RyKTtcblxuICAgICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gaXNOaWwocHJvcHMudmFsdWUpID8gbGFzdFZhbHVlV2l0aE5ld0Zvcm1hdCA6IHRoaXMuZm9ybWF0VmFsdWVQcm9wKCk7XG4gICAgICB2YXIgbnVtQXNTdHJpbmcgPSB0aGlzLnJlbW92ZUZvcm1hdHRpbmcoZm9ybWF0dGVkVmFsdWUpO1xuXG4gICAgICB2YXIgZmxvYXRWYWx1ZSA9IHBhcnNlRmxvYXQobnVtQXNTdHJpbmcpO1xuICAgICAgdmFyIGxhc3RGbG9hdFZhbHVlID0gcGFyc2VGbG9hdChsYXN0TnVtU3RyKTtcblxuICAgICAgaWYgKFxuICAgICAgICAvL3doaWxlIHR5cGluZyBzZXQgc3RhdGUgb25seSB3aGVuIGZsb2F0IHZhbHVlIGNoYW5nZXNcbiAgICAgICAgKCghaXNOYU4oZmxvYXRWYWx1ZSkgfHwgIWlzTmFOKGxhc3RGbG9hdFZhbHVlKSkgJiYgZmxvYXRWYWx1ZSAhPT0gbGFzdEZsb2F0VmFsdWUpIHx8XG4gICAgICAgIC8vY2FuIGFsc28gc2V0IHN0YXRlIHdoZW4gZmxvYXQgdmFsdWUgaXMgc2FtZSBhbmQgdGhlIGZvcm1hdCBwcm9wcyBjaGFuZ2VzXG4gICAgICAgIGxhc3RWYWx1ZVdpdGhOZXdGb3JtYXQgIT09IHN0YXRlVmFsdWUgfHxcbiAgICAgICAgLy9zZXQgc3RhdGUgYWx3YXlzIHdoZW4gbm90IGluIGZvY3VzIGFuZCBmb3JtYXR0ZWQgdmFsdWUgaXMgY2hhbmdlZFxuICAgICAgICAoZm9jdXNlZEVsbSA9PT0gbnVsbCAmJiBmb3JtYXR0ZWRWYWx1ZSAhPT0gc3RhdGVWYWx1ZSlcbiAgICAgICkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHsgZm9ybWF0dGVkVmFsdWU6IGZvcm1hdHRlZFZhbHVlLCBudW1Bc1N0cmluZzogbnVtQXNTdHJpbmcsIGlucHV0OiBmb2N1c2VkRWxtIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKiogTWlzYyBtZXRob2RzICoqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmdldEZsb2F0U3RyaW5nID0gZnVuY3Rpb24gZ2V0RmxvYXRTdHJpbmcgKG51bSkge1xuICAgIGlmICggbnVtID09PSB2b2lkIDAgKSBudW0gICAgICAgICA9ICcnO1xuXG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRlY2ltYWxTY2FsZSA9IHJlZi5kZWNpbWFsU2NhbGU7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5nZXRTZXBhcmF0b3JzKCk7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYkMS5kZWNpbWFsU2VwYXJhdG9yO1xuICAgIHZhciBudW1SZWdleCA9IHRoaXMuZ2V0TnVtYmVyUmVnZXgodHJ1ZSk7XG5cbiAgICAvL3JlbW92ZSBuZWdhdGlvbiBmb3IgcmVnZXggY2hlY2tcbiAgICB2YXIgaGFzTmVnYXRpb24gPSBudW1bMF0gPT09ICctJztcbiAgICBpZiAoaGFzTmVnYXRpb24pIHsgbnVtID0gbnVtLnJlcGxhY2UoJy0nLCAnJyk7IH1cblxuICAgIC8vaWYgZGVjaW1hbCBzY2FsZSBpcyB6ZXJvIHJlbW92ZSBkZWNpbWFsIGFuZCBudW1iZXIgYWZ0ZXIgZGVjaW1hbFNlcGFyYXRvclxuICAgIGlmIChkZWNpbWFsU2VwYXJhdG9yICYmIGRlY2ltYWxTY2FsZSA9PT0gMCkge1xuICAgICAgbnVtID0gbnVtLnNwbGl0KGRlY2ltYWxTZXBhcmF0b3IpWzBdO1xuICAgIH1cblxuICAgIG51bSA9IChudW0ubWF0Y2gobnVtUmVnZXgpIHx8IFtdKS5qb2luKCcnKS5yZXBsYWNlKGRlY2ltYWxTZXBhcmF0b3IsICcuJyk7XG5cbiAgICAvL3JlbW92ZSBleHRyYSBkZWNpbWFsc1xuICAgIHZhciBmaXJzdERlY2ltYWxJbmRleCA9IG51bS5pbmRleE9mKCcuJyk7XG5cbiAgICBpZiAoZmlyc3REZWNpbWFsSW5kZXggIT09IC0xKSB7XG4gICAgICBudW0gPSAobnVtLnN1YnN0cmluZygwLCBmaXJzdERlY2ltYWxJbmRleCkpICsgXCIuXCIgKyAobnVtXG4gICAgICAgIC5zdWJzdHJpbmcoZmlyc3REZWNpbWFsSW5kZXggKyAxLCBudW0ubGVuZ3RoKVxuICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKGVzY2FwZVJlZ0V4cChkZWNpbWFsU2VwYXJhdG9yKSwgJ2cnKSwgJycpKTtcbiAgICB9XG5cbiAgICAvL2FkZCBuZWdhdGlvbiBiYWNrXG4gICAgaWYgKGhhc05lZ2F0aW9uKSB7IG51bSA9ICctJyArIG51bTsgfVxuXG4gICAgcmV0dXJuIG51bTtcbiAgfTtcblxuICAvL3JldHVybmVkIHJlZ2V4IGFzc3VtZXMgZGVjaW1hbFNlcGFyYXRvciBpcyBhcyBwZXIgcHJvcFxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmdldE51bWJlclJlZ2V4ID0gZnVuY3Rpb24gZ2V0TnVtYmVyUmVnZXggKGcgICAgICAgICAsIGlnbm9yZURlY2ltYWxTZXBhcmF0b3IgICAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIGRlY2ltYWxTY2FsZSA9IHJlZi5kZWNpbWFsU2NhbGU7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5nZXRTZXBhcmF0b3JzKCk7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYkMS5kZWNpbWFsU2VwYXJhdG9yO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFxuICAgICAgJ1xcXFxkJyArXG4gICAgICAgIChkZWNpbWFsU2VwYXJhdG9yICYmIGRlY2ltYWxTY2FsZSAhPT0gMCAmJiAhaWdub3JlRGVjaW1hbFNlcGFyYXRvciAmJiAhZm9ybWF0XG4gICAgICAgICAgPyAnfCcgKyBlc2NhcGVSZWdFeHAoZGVjaW1hbFNlcGFyYXRvcilcbiAgICAgICAgICA6ICcnKSxcbiAgICAgIGcgPyAnZycgOiB1bmRlZmluZWRcbiAgICApO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZ2V0U2VwYXJhdG9ycyA9IGZ1bmN0aW9uIGdldFNlcGFyYXRvcnMgKCkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWNpbWFsU2VwYXJhdG9yID0gcmVmLmRlY2ltYWxTZXBhcmF0b3I7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5wcm9wcztcbiAgICB2YXIgdGhvdXNhbmRTZXBhcmF0b3IgPSByZWYkMS50aG91c2FuZFNlcGFyYXRvcjtcbiAgICB2YXIgYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzID0gcmVmJDEuYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzO1xuXG4gICAgaWYgKHRob3VzYW5kU2VwYXJhdG9yID09PSB0cnVlKSB7XG4gICAgICB0aG91c2FuZFNlcGFyYXRvciA9ICcsJztcbiAgICB9XG4gICAgaWYgKCFhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnMpIHtcbiAgICAgIGFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycyA9IFtkZWNpbWFsU2VwYXJhdG9yLCAnLiddO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBkZWNpbWFsU2VwYXJhdG9yOiBkZWNpbWFsU2VwYXJhdG9yLFxuICAgICAgdGhvdXNhbmRTZXBhcmF0b3I6IHRob3VzYW5kU2VwYXJhdG9yLFxuICAgICAgYWxsb3dlZERlY2ltYWxTZXBhcmF0b3JzOiBhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnMsXG4gICAgfTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmdldE1hc2tBdEluZGV4ID0gZnVuY3Rpb24gZ2V0TWFza0F0SW5kZXggKGluZGV4ICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgbWFzayA9IHJlZi5tYXNrOyBpZiAoIG1hc2sgPT09IHZvaWQgMCApIG1hc2sgPSAnICc7XG4gICAgaWYgKHR5cGVvZiBtYXNrID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG1hc2s7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hc2tbaW5kZXhdIHx8ICcgJztcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmdldFZhbHVlT2JqZWN0ID0gZnVuY3Rpb24gZ2V0VmFsdWVPYmplY3QgKGZvcm1hdHRlZFZhbHVlICAgICAgICAsIG51bUFzU3RyaW5nICAgICAgICApIHtcbiAgICB2YXIgZmxvYXRWYWx1ZSA9IHBhcnNlRmxvYXQobnVtQXNTdHJpbmcpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSxcbiAgICAgIHZhbHVlOiBudW1Bc1N0cmluZyxcbiAgICAgIGZsb2F0VmFsdWU6IGlzTmFOKGZsb2F0VmFsdWUpID8gdW5kZWZpbmVkIDogZmxvYXRWYWx1ZSxcbiAgICB9O1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUudmFsaWRhdGVQcm9wcyA9IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcHMgKCkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBtYXNrID0gcmVmLm1hc2s7XG5cbiAgICAvL3ZhbGlkYXRlIGRlY2ltYWxTZXBhcmF0b3IgYW5kIHRob3VzYW5kU2VwYXJhdG9yXG4gICAgdmFyIHJlZiQxID0gdGhpcy5nZXRTZXBhcmF0b3JzKCk7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYkMS5kZWNpbWFsU2VwYXJhdG9yO1xuICAgIHZhciB0aG91c2FuZFNlcGFyYXRvciA9IHJlZiQxLnRob3VzYW5kU2VwYXJhdG9yO1xuXG4gICAgaWYgKGRlY2ltYWxTZXBhcmF0b3IgPT09IHRob3VzYW5kU2VwYXJhdG9yKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKFwiXFxuICAgICAgICAgIERlY2ltYWwgc2VwYXJhdG9yIGNhbid0IGJlIHNhbWUgYXMgdGhvdXNhbmQgc2VwYXJhdG9yLlxcbiAgICAgICAgICB0aG91c2FuZFNlcGFyYXRvcjogXCIgKyB0aG91c2FuZFNlcGFyYXRvciArIFwiICh0aG91c2FuZFNlcGFyYXRvciA9IHt0cnVlfSBpcyBzYW1lIGFzIHRob3VzYW5kU2VwYXJhdG9yID0gXFxcIixcXFwiKVxcbiAgICAgICAgICBkZWNpbWFsU2VwYXJhdG9yOiBcIiArIGRlY2ltYWxTZXBhcmF0b3IgKyBcIiAoZGVmYXVsdCB2YWx1ZSBmb3IgZGVjaW1hbFNlcGFyYXRvciBpcyAuKVxcbiAgICAgICBcIikpO1xuICAgIH1cblxuICAgIC8vdmFsaWRhdGUgbWFza1xuICAgIGlmIChtYXNrKSB7XG4gICAgICB2YXIgbWFza0FzU3RyID0gbWFzayA9PT0gJ3N0cmluZycgPyBtYXNrIDogbWFzay50b1N0cmluZygpO1xuICAgICAgaWYgKG1hc2tBc1N0ci5tYXRjaCgvXFxkL2cpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJcXG4gICAgICAgICAgTWFzayBcIiArIG1hc2sgKyBcIiBzaG91bGQgbm90IGNvbnRhaW4gbnVtZXJpYyBjaGFyYWN0ZXI7XFxuICAgICAgICBcIikpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgLyoqIE1pc2MgbWV0aG9kcyBlbmQgKiovXG5cbiAgLyoqIGNhcmV0IHNwZWNpZmljIG1ldGhvZHMgKiovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24gPSBmdW5jdGlvbiBzZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbiAoZWwgICAgICAgICAgICAgICAgICAsIGNhcmV0UG9zICAgICAgICAsIGN1cnJlbnRWYWx1ZSAgICAgICAgKSB7XG4gICAgLyogc2V0dGluZyBjYXJldCBwb3NpdGlvbiB3aXRoaW4gdGltZW91dCBvZiAwbXMgaXMgcmVxdWlyZWQgZm9yIG1vYmlsZSBjaHJvbWUsXG4gICAgb3RoZXJ3aXNlIGJyb3dzZXIgcmVzZXRzIHRoZSBjYXJldCBwb3NpdGlvbiBhZnRlciB3ZSBzZXQgaXRcbiAgICBXZSBhcmUgYWxzbyBzZXR0aW5nIGl0IHdpdGhvdXQgdGltZW91dCBzbyB0aGF0IGluIG5vcm1hbCBicm93c2VyIHdlIGRvbid0IHNlZSB0aGUgZmxpY2tlcmluZyAqL1xuICAgIHNldENhcmV0UG9zaXRpb24oZWwsIGNhcmV0UG9zKTtcbiAgICB0aGlzLmNhcmV0UG9zaXRpb25UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoZWwudmFsdWUgPT09IGN1cnJlbnRWYWx1ZSkgeyBzZXRDYXJldFBvc2l0aW9uKGVsLCBjYXJldFBvcyk7IH1cbiAgICB9LCAwKTtcbiAgfTtcblxuICAvKiBUaGlzIGtlZXBzIHRoZSBjYXJldCB3aXRoaW4gdHlwaW5nIGFyZWEgc28gcGVvcGxlIGNhbid0IHR5cGUgaW4gYmV0d2VlbiBwcmVmaXggb3Igc3VmZml4ICovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuY29ycmVjdENhcmV0UG9zaXRpb24gPSBmdW5jdGlvbiBjb3JyZWN0Q2FyZXRQb3NpdGlvbiAodmFsdWUgICAgICAgICwgY2FyZXRQb3MgICAgICAgICwgZGlyZWN0aW9uICAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHByZWZpeCA9IHJlZi5wcmVmaXg7XG4gICAgdmFyIHN1ZmZpeCA9IHJlZi5zdWZmaXg7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG5cbiAgICAvL2lmIHZhbHVlIGlzIGVtcHR5IHJldHVybiAwXG4gICAgaWYgKHZhbHVlID09PSAnJykgeyByZXR1cm4gMDsgfVxuXG4gICAgLy9jYXJldCBwb3NpdGlvbiBzaG91bGQgYmUgYmV0d2VlbiAwIGFuZCB2YWx1ZSBsZW5ndGhcbiAgICBjYXJldFBvcyA9IGNsYW1wKGNhcmV0UG9zLCAwLCB2YWx1ZS5sZW5ndGgpO1xuXG4gICAgLy9pbiBjYXNlIG9mIGZvcm1hdCBhcyBudW1iZXIgbGltaXQgYmV0d2VlbiBwcmVmaXggYW5kIHN1ZmZpeFxuICAgIGlmICghZm9ybWF0KSB7XG4gICAgICB2YXIgaGFzTmVnYXRpb24gPSB2YWx1ZVswXSA9PT0gJy0nO1xuICAgICAgcmV0dXJuIGNsYW1wKGNhcmV0UG9zLCBwcmVmaXgubGVuZ3RoICsgKGhhc05lZ2F0aW9uID8gMSA6IDApLCB2YWx1ZS5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKTtcbiAgICB9XG5cbiAgICAvL2luIGNhc2UgaWYgY3VzdG9tIGZvcm1hdCBtZXRob2QgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gY2FyZXRQb3M7IH1cblxuICAgIC8qIGluIGNhc2UgZm9ybWF0IGlzIHN0cmluZyBmaW5kIHRoZSBjbG9zZXN0ICMgcG9zaXRpb24gZnJvbSB0aGUgY2FyZXQgcG9zaXRpb24gKi9cblxuICAgIC8vaW4gY2FzZSB0aGUgY2FyZXRQb3MgaGF2ZSBpbnB1dCB2YWx1ZSBvbiBpdCBkb24ndCBkbyBhbnl0aGluZ1xuICAgIGlmIChmb3JtYXRbY2FyZXRQb3NdID09PSAnIycgJiYgY2hhcklzTnVtYmVyKHZhbHVlW2NhcmV0UG9zXSkpIHtcbiAgICAgIHJldHVybiBjYXJldFBvcztcbiAgICB9XG5cbiAgICAvL2lmIGNhcmV0UG9zIGlzIGp1c3QgYWZ0ZXIgaW5wdXQgdmFsdWUgZG9uJ3QgZG8gYW55dGhpbmdcbiAgICBpZiAoZm9ybWF0W2NhcmV0UG9zIC0gMV0gPT09ICcjJyAmJiBjaGFySXNOdW1iZXIodmFsdWVbY2FyZXRQb3MgLSAxXSkpIHtcbiAgICAgIHJldHVybiBjYXJldFBvcztcbiAgICB9XG5cbiAgICAvL2ZpbmQgdGhlIG5lYXJlc3QgY2FyZXQgcG9zaXRpb25cbiAgICB2YXIgZmlyc3RIYXNoUG9zaXRpb24gPSBmb3JtYXQuaW5kZXhPZignIycpO1xuICAgIHZhciBsYXN0SGFzaFBvc2l0aW9uID0gZm9ybWF0Lmxhc3RJbmRleE9mKCcjJyk7XG5cbiAgICAvL2xpbWl0IHRoZSBjdXJzb3IgYmV0d2VlbiB0aGUgZmlyc3QgIyBwb3NpdGlvbiBhbmQgdGhlIGxhc3QgIyBwb3NpdGlvblxuICAgIGNhcmV0UG9zID0gY2xhbXAoY2FyZXRQb3MsIGZpcnN0SGFzaFBvc2l0aW9uLCBsYXN0SGFzaFBvc2l0aW9uICsgMSk7XG5cbiAgICB2YXIgbmV4dFBvcyA9IGZvcm1hdC5zdWJzdHJpbmcoY2FyZXRQb3MsIGZvcm1hdC5sZW5ndGgpLmluZGV4T2YoJyMnKTtcbiAgICB2YXIgY2FyZXRMZWZ0Qm91bmQgPSBjYXJldFBvcztcbiAgICB2YXIgY2FyZXRSaWdodEJvdW5kID0gY2FyZXRQb3MgKyAobmV4dFBvcyA9PT0gLTEgPyAwIDogbmV4dFBvcyk7XG5cbiAgICAvL2dldCB0aGUgcG9zaXRpb24gd2hlcmUgdGhlIGxhc3QgbnVtYmVyIGlzIHByZXNlbnRcbiAgICB3aGlsZSAoXG4gICAgICBjYXJldExlZnRCb3VuZCA+IGZpcnN0SGFzaFBvc2l0aW9uICYmXG4gICAgICAoZm9ybWF0W2NhcmV0TGVmdEJvdW5kXSAhPT0gJyMnIHx8ICFjaGFySXNOdW1iZXIodmFsdWVbY2FyZXRMZWZ0Qm91bmRdKSlcbiAgICApIHtcbiAgICAgIGNhcmV0TGVmdEJvdW5kIC09IDE7XG4gICAgfVxuXG4gICAgdmFyIGdvVG9MZWZ0ID1cbiAgICAgICFjaGFySXNOdW1iZXIodmFsdWVbY2FyZXRSaWdodEJvdW5kXSkgfHxcbiAgICAgIChkaXJlY3Rpb24gPT09ICdsZWZ0JyAmJiBjYXJldFBvcyAhPT0gZmlyc3RIYXNoUG9zaXRpb24pIHx8XG4gICAgICBjYXJldFBvcyAtIGNhcmV0TGVmdEJvdW5kIDwgY2FyZXRSaWdodEJvdW5kIC0gY2FyZXRQb3M7XG5cbiAgICBpZiAoZ29Ub0xlZnQpIHtcbiAgICAgIC8vY2hlY2sgaWYgbnVtYmVyIHNob3VsZCBiZSB0YWtlbiBhZnRlciB0aGUgYm91bmQgb3IgYWZ0ZXIgaXRcbiAgICAgIC8vaWYgbnVtYmVyIHByZWNlZGluZyBhIHZhbGlkIG51bWJlciBrZWVwIGl0IGFmdGVyXG4gICAgICByZXR1cm4gY2hhcklzTnVtYmVyKHZhbHVlW2NhcmV0TGVmdEJvdW5kXSkgPyBjYXJldExlZnRCb3VuZCArIDEgOiBjYXJldExlZnRCb3VuZDtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FyZXRSaWdodEJvdW5kO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZ2V0Q2FyZXRQb3NpdGlvbiA9IGZ1bmN0aW9uIGdldENhcmV0UG9zaXRpb24gKGlucHV0VmFsdWUgICAgICAgICwgZm9ybWF0dGVkVmFsdWUgICAgICAgICwgY2FyZXRQb3MgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBzdGF0ZVZhbHVlID0gdGhpcy5zdGF0ZS52YWx1ZTtcbiAgICB2YXIgbnVtUmVnZXggPSB0aGlzLmdldE51bWJlclJlZ2V4KHRydWUpO1xuICAgIHZhciBpbnB1dE51bWJlciA9IChpbnB1dFZhbHVlLm1hdGNoKG51bVJlZ2V4KSB8fCBbXSkuam9pbignJyk7XG4gICAgdmFyIGZvcm1hdHRlZE51bWJlciA9IChmb3JtYXR0ZWRWYWx1ZS5tYXRjaChudW1SZWdleCkgfHwgW10pLmpvaW4oJycpO1xuICAgIHZhciBqLCBpO1xuXG4gICAgaiA9IDA7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgY2FyZXRQb3M7IGkrKykge1xuICAgICAgdmFyIGN1cnJlbnRJbnB1dENoYXIgPSBpbnB1dFZhbHVlW2ldIHx8ICcnO1xuICAgICAgdmFyIGN1cnJlbnRGb3JtYXRDaGFyID0gZm9ybWF0dGVkVmFsdWVbal0gfHwgJyc7XG4gICAgICAvL25vIG5lZWQgdG8gaW5jcmVhc2UgbmV3IGN1cnNvciBwb3NpdGlvbiBpZiBmb3JtYXR0ZWQgdmFsdWUgZG9lcyBub3QgaGF2ZSB0aG9zZSBjaGFyYWN0ZXJzXG4gICAgICAvL2Nhc2UgaW5wdXRWYWx1ZSA9IDFhMjMgYW5kIGZvcm1hdHRlZFZhbHVlID0gIDEyM1xuICAgICAgaWYgKCFjdXJyZW50SW5wdXRDaGFyLm1hdGNoKG51bVJlZ2V4KSAmJiBjdXJyZW50SW5wdXRDaGFyICE9PSBjdXJyZW50Rm9ybWF0Q2hhcikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLy9XaGVuIHdlIGFyZSBzdHJpcGluZyBvdXQgbGVhZGluZyB6ZXJvcyBtYWludGFpbiB0aGUgbmV3IGN1cnNvciBwb3NpdGlvblxuICAgICAgLy9DYXNlIGlucHV0VmFsdWUgPSAwMDAyMyBhbmQgZm9ybWF0dGVkVmFsdWUgPSAyMztcbiAgICAgIGlmIChcbiAgICAgICAgY3VycmVudElucHV0Q2hhciA9PT0gJzAnICYmXG4gICAgICAgIGN1cnJlbnRGb3JtYXRDaGFyLm1hdGNoKG51bVJlZ2V4KSAmJlxuICAgICAgICBjdXJyZW50Rm9ybWF0Q2hhciAhPT0gJzAnICYmXG4gICAgICAgIGlucHV0TnVtYmVyLmxlbmd0aCAhPT0gZm9ybWF0dGVkTnVtYmVyLmxlbmd0aFxuICAgICAgKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICAvL3dlIGFyZSBub3QgdXNpbmcgY3VycmVudEZvcm1hdENoYXIgYmVjYXVzZSBqIGNhbiBjaGFuZ2UgaGVyZVxuICAgICAgd2hpbGUgKGN1cnJlbnRJbnB1dENoYXIgIT09IGZvcm1hdHRlZFZhbHVlW2pdICYmIGogPCBmb3JtYXR0ZWRWYWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgaisrO1xuICAgICAgfVxuICAgICAgaisrO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJyAmJiAhc3RhdGVWYWx1ZSkge1xuICAgICAgLy9zZXQgaXQgdG8gdGhlIG1heGltdW0gdmFsdWUgc28gaXQgZ29lcyBhZnRlciB0aGUgbGFzdCBudW1iZXJcbiAgICAgIGogPSBmb3JtYXR0ZWRWYWx1ZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy9jb3JyZWN0IGNhcmV0IHBvc2l0aW9uIGlmIGl0cyBvdXRzaWRlIG9mIGVkaXRhYmxlIGFyZWFcbiAgICBqID0gdGhpcy5jb3JyZWN0Q2FyZXRQb3NpdGlvbihmb3JtYXR0ZWRWYWx1ZSwgaik7XG5cbiAgICByZXR1cm4gajtcbiAgfTtcbiAgLyoqIGNhcmV0IHNwZWNpZmljIG1ldGhvZHMgZW5kcyAqKi9cblxuICAvKiogbWV0aG9kcyB0byByZW1vdmUgZm9ybWF0dHRpbmcgKiovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUucmVtb3ZlUHJlZml4QW5kU3VmZml4ID0gZnVuY3Rpb24gcmVtb3ZlUHJlZml4QW5kU3VmZml4ICh2YWwgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBwcmVmaXggPSByZWYucHJlZml4O1xuICAgIHZhciBzdWZmaXggPSByZWYuc3VmZml4O1xuXG4gICAgLy9yZW1vdmUgcHJlZml4IGFuZCBzdWZmaXhcbiAgICBpZiAoIWZvcm1hdCAmJiB2YWwpIHtcbiAgICAgIHZhciBpc05lZ2F0aXZlID0gdmFsWzBdID09PSAnLSc7XG5cbiAgICAgIC8vcmVtb3ZlIG5lZ2F0aW9uIHNpZ25cbiAgICAgIGlmIChpc05lZ2F0aXZlKSB7IHZhbCA9IHZhbC5zdWJzdHJpbmcoMSwgdmFsLmxlbmd0aCk7IH1cblxuICAgICAgLy9yZW1vdmUgcHJlZml4XG4gICAgICB2YWwgPSBwcmVmaXggJiYgdmFsLmluZGV4T2YocHJlZml4KSA9PT0gMCA/IHZhbC5zdWJzdHJpbmcocHJlZml4Lmxlbmd0aCwgdmFsLmxlbmd0aCkgOiB2YWw7XG5cbiAgICAgIC8vcmVtb3ZlIHN1ZmZpeFxuICAgICAgdmFyIHN1ZmZpeExhc3RJbmRleCA9IHZhbC5sYXN0SW5kZXhPZihzdWZmaXgpO1xuICAgICAgdmFsID1cbiAgICAgICAgc3VmZml4ICYmIHN1ZmZpeExhc3RJbmRleCAhPT0gLTEgJiYgc3VmZml4TGFzdEluZGV4ID09PSB2YWwubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aFxuICAgICAgICAgID8gdmFsLnN1YnN0cmluZygwLCBzdWZmaXhMYXN0SW5kZXgpXG4gICAgICAgICAgOiB2YWw7XG5cbiAgICAgIC8vYWRkIG5lZ2F0aW9uIHNpZ24gYmFja1xuICAgICAgaWYgKGlzTmVnYXRpdmUpIHsgdmFsID0gJy0nICsgdmFsOyB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnJlbW92ZVBhdHRlcm5Gb3JtYXR0aW5nID0gZnVuY3Rpb24gcmVtb3ZlUGF0dGVybkZvcm1hdHRpbmcgKHZhbCAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIGZvcm1hdEFycmF5ID0gZm9ybWF0LnNwbGl0KCcjJykuZmlsdGVyKGZ1bmN0aW9uIChzdHIpIHsgcmV0dXJuIHN0ciAhPT0gJyc7IH0pO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgdmFyIG51bVN0ciA9ICcnO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxuID0gZm9ybWF0QXJyYXkubGVuZ3RoOyBpIDw9IGxuOyBpKyspIHtcbiAgICAgIHZhciBwYXJ0ID0gZm9ybWF0QXJyYXlbaV0gfHwgJyc7XG5cbiAgICAgIC8vaWYgaSBpcyB0aGUgbGFzdCBmcmFnbWVudCB0YWtlIHRoZSBpbmRleCBvZiBlbmQgb2YgdGhlIHZhbHVlXG4gICAgICAvL0ZvciBjYXNlIGxpa2UgKzEgKDkxMSkgOTExIDkxIDkxIGhhdmluZyBwYXR0ZXJuICsxICgjIyMpICMjIyAjIyAjI1xuICAgICAgdmFyIGluZGV4ID0gaSA9PT0gbG4gPyB2YWwubGVuZ3RoIDogdmFsLmluZGV4T2YocGFydCwgc3RhcnQpO1xuXG4gICAgICAvKiBpbiBhbnkgY2FzZSBpZiB3ZSBkb24ndCBmaW5kIHRoZSBwYXR0ZXJuIHBhcnQgaW4gdGhlIHZhbHVlIGFzc3VtZSB0aGUgdmFsIGFzIG51bWVyaWMgc3RyaW5nXG4gICAgICBUaGlzIHdpbGwgYmUgYWxzbyBpbiBjYXNlIGlmIHVzZXIgaGFzIHN0YXJ0ZWQgdHlwaW5nLCBpbiBhbnkgb3RoZXIgY2FzZSBpdCB3aWxsIG5vdCBiZSAtMVxuICAgICAgdW5sZXNzIHdyb25nIHByb3AgdmFsdWUgaXMgcHJvdmlkZWQgKi9cbiAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgbnVtU3RyID0gdmFsO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG51bVN0ciArPSB2YWwuc3Vic3RyaW5nKHN0YXJ0LCBpbmRleCk7XG4gICAgICAgIHN0YXJ0ID0gaW5kZXggKyBwYXJ0Lmxlbmd0aDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKG51bVN0ci5tYXRjaCgvXFxkL2cpIHx8IFtdKS5qb2luKCcnKTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLnJlbW92ZUZvcm1hdHRpbmcgPSBmdW5jdGlvbiByZW1vdmVGb3JtYXR0aW5nICh2YWwgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciByZW1vdmVGb3JtYXR0aW5nID0gcmVmLnJlbW92ZUZvcm1hdHRpbmc7XG4gICAgaWYgKCF2YWwpIHsgcmV0dXJuIHZhbDsgfVxuXG4gICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgIHZhbCA9IHRoaXMucmVtb3ZlUHJlZml4QW5kU3VmZml4KHZhbCk7XG4gICAgICB2YWwgPSB0aGlzLmdldEZsb2F0U3RyaW5nKHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJykge1xuICAgICAgdmFsID0gdGhpcy5yZW1vdmVQYXR0ZXJuRm9ybWF0dGluZyh2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbW92ZUZvcm1hdHRpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vY29uZGl0aW9uIG5lZWQgdG8gYmUgaGFuZGxlZCBpZiBmb3JtYXQgbWV0aG9kIGlzIHByb3ZpZGUsXG4gICAgICB2YWwgPSByZW1vdmVGb3JtYXR0aW5nKHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbCA9ICh2YWwubWF0Y2goL1xcZC9nKSB8fCBbXSkuam9pbignJyk7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH07XG4gIC8qKiBtZXRob2RzIHRvIHJlbW92ZSBmb3JtYXR0dGluZyBlbmQgKiovXG5cbiAgLyoqKiBmb3JtYXQgc3BlY2lmaWMgbWV0aG9kcyBzdGFydCAqKiovXG4gIC8qKlxuICAgKiBGb3JtYXQgd2hlbiAjIGJhc2VkIHN0cmluZyBpcyBwcm92aWRlZFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG51bVN0ciBOdW1lcmljIFN0cmluZ1xuICAgKiBAcmV0dXJuIHtzdHJpbmd9ICAgICAgICBmb3JtYXR0ZWQgVmFsdWVcbiAgICovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZm9ybWF0V2l0aFBhdHRlcm4gPSBmdW5jdGlvbiBmb3JtYXRXaXRoUGF0dGVybiAobnVtU3RyICAgICAgICApIHtcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgaGFzaENvdW50ID0gMDtcbiAgICB2YXIgZm9ybWF0dGVkTnVtYmVyQXJ5ID0gZm9ybWF0LnNwbGl0KCcnKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbG4gPSBmb3JtYXQubGVuZ3RoOyBpIDwgbG47IGkrKykge1xuICAgICAgaWYgKGZvcm1hdFtpXSA9PT0gJyMnKSB7XG4gICAgICAgIGZvcm1hdHRlZE51bWJlckFyeVtpXSA9IG51bVN0cltoYXNoQ291bnRdIHx8IHRoaXMuZ2V0TWFza0F0SW5kZXgoaGFzaENvdW50KTtcbiAgICAgICAgaGFzaENvdW50ICs9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmb3JtYXR0ZWROdW1iZXJBcnkuam9pbignJyk7XG4gIH07XG4gIC8qKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IG51bVN0ciBOdW1lcmljIHN0cmluZy9mbG9hdFN0cmluZ10gSXQgYWx3YXlzIGhhdmUgZGVjaW1hbFNlcGFyYXRvciBhcyAuXG4gICAqIEByZXR1cm4ge3N0cmluZ30gZm9ybWF0dGVkIFZhbHVlXG4gICAqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmZvcm1hdEFzTnVtYmVyID0gZnVuY3Rpb24gZm9ybWF0QXNOdW1iZXIgKG51bVN0ciAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGRlY2ltYWxTY2FsZSA9IHJlZi5kZWNpbWFsU2NhbGU7XG4gICAgdmFyIGZpeGVkRGVjaW1hbFNjYWxlID0gcmVmLmZpeGVkRGVjaW1hbFNjYWxlO1xuICAgIHZhciBwcmVmaXggPSByZWYucHJlZml4O1xuICAgIHZhciBzdWZmaXggPSByZWYuc3VmZml4O1xuICAgIHZhciBhbGxvd05lZ2F0aXZlID0gcmVmLmFsbG93TmVnYXRpdmU7XG4gICAgdmFyIHRob3VzYW5kc0dyb3VwU3R5bGUgPSByZWYudGhvdXNhbmRzR3JvdXBTdHlsZTtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLmdldFNlcGFyYXRvcnMoKTtcbiAgICB2YXIgdGhvdXNhbmRTZXBhcmF0b3IgPSByZWYkMS50aG91c2FuZFNlcGFyYXRvcjtcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHJlZiQxLmRlY2ltYWxTZXBhcmF0b3I7XG5cbiAgICB2YXIgaGFzRGVjaW1hbFNlcGFyYXRvciA9IG51bVN0ci5pbmRleE9mKCcuJykgIT09IC0xIHx8IChkZWNpbWFsU2NhbGUgJiYgZml4ZWREZWNpbWFsU2NhbGUpO1xuICAgIHZhciByZWYkMiA9IHNwbGl0RGVjaW1hbChudW1TdHIsIGFsbG93TmVnYXRpdmUpO1xuICAgIHZhciBiZWZvcmVEZWNpbWFsID0gcmVmJDIuYmVmb3JlRGVjaW1hbDtcbiAgICB2YXIgYWZ0ZXJEZWNpbWFsID0gcmVmJDIuYWZ0ZXJEZWNpbWFsO1xuICAgIHZhciBhZGROZWdhdGlvbiA9IHJlZiQyLmFkZE5lZ2F0aW9uOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHByZWZlci1jb25zdFxuXG4gICAgLy9hcHBseSBkZWNpbWFsIHByZWNpc2lvbiBpZiBpdHMgZGVmaW5lZFxuICAgIGlmIChkZWNpbWFsU2NhbGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgYWZ0ZXJEZWNpbWFsID0gbGltaXRUb1NjYWxlKGFmdGVyRGVjaW1hbCwgZGVjaW1hbFNjYWxlLCBmaXhlZERlY2ltYWxTY2FsZSk7XG4gICAgfVxuXG4gICAgaWYgKHRob3VzYW5kU2VwYXJhdG9yKSB7XG4gICAgICBiZWZvcmVEZWNpbWFsID0gYXBwbHlUaG91c2FuZFNlcGFyYXRvcihiZWZvcmVEZWNpbWFsLCB0aG91c2FuZFNlcGFyYXRvciwgdGhvdXNhbmRzR3JvdXBTdHlsZSk7XG4gICAgfVxuXG4gICAgLy9hZGQgcHJlZml4IGFuZCBzdWZmaXhcbiAgICBpZiAocHJlZml4KSB7IGJlZm9yZURlY2ltYWwgPSBwcmVmaXggKyBiZWZvcmVEZWNpbWFsOyB9XG4gICAgaWYgKHN1ZmZpeCkgeyBhZnRlckRlY2ltYWwgPSBhZnRlckRlY2ltYWwgKyBzdWZmaXg7IH1cblxuICAgIC8vcmVzdG9yZSBuZWdhdGlvbiBzaWduXG4gICAgaWYgKGFkZE5lZ2F0aW9uKSB7IGJlZm9yZURlY2ltYWwgPSAnLScgKyBiZWZvcmVEZWNpbWFsOyB9XG5cbiAgICBudW1TdHIgPSBiZWZvcmVEZWNpbWFsICsgKChoYXNEZWNpbWFsU2VwYXJhdG9yICYmIGRlY2ltYWxTZXBhcmF0b3IpIHx8ICcnKSArIGFmdGVyRGVjaW1hbDtcblxuICAgIHJldHVybiBudW1TdHI7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5mb3JtYXROdW1TdHJpbmcgPSBmdW5jdGlvbiBmb3JtYXROdW1TdHJpbmcgKG51bVN0cikge1xuICAgIGlmICggbnVtU3RyID09PSB2b2lkIDAgKSBudW1TdHIgICAgICAgICA9ICcnO1xuXG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG4gICAgdmFyIGFsbG93RW1wdHlGb3JtYXR0aW5nID0gcmVmLmFsbG93RW1wdHlGb3JtYXR0aW5nO1xuICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IG51bVN0cjtcblxuICAgIGlmIChudW1TdHIgPT09ICcnICYmICFhbGxvd0VtcHR5Rm9ybWF0dGluZykge1xuICAgICAgZm9ybWF0dGVkVmFsdWUgPSAnJztcbiAgICB9IGVsc2UgaWYgKG51bVN0ciA9PT0gJy0nICYmICFmb3JtYXQpIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0gJy0nO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGZvcm1hdCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRXaXRoUGF0dGVybihmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmb3JtYXR0ZWRWYWx1ZSA9IGZvcm1hdChmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRBc051bWJlcihmb3JtYXR0ZWRWYWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvcm1hdHRlZFZhbHVlO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUuZm9ybWF0VmFsdWVQcm9wID0gZnVuY3Rpb24gZm9ybWF0VmFsdWVQcm9wIChkZWZhdWx0VmFsdWUgICAgICAgICAgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciBmaXhlZERlY2ltYWxTY2FsZSA9IHJlZi5maXhlZERlY2ltYWxTY2FsZTtcbiAgICB2YXIgYWxsb3dFbXB0eUZvcm1hdHRpbmcgPSByZWYuYWxsb3dFbXB0eUZvcm1hdHRpbmc7XG4gICAgdmFyIHJlZiQxID0gdGhpcy5wcm9wcztcbiAgICB2YXIgdmFsdWUgPSByZWYkMS52YWx1ZTtcbiAgICB2YXIgaXNOdW1lcmljU3RyaW5nID0gcmVmJDEuaXNOdW1lcmljU3RyaW5nO1xuXG4gICAgLy8gaWYgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIG51bGwsIHVzZSBkZWZhdWx0VmFsdWUgaW5zdGVhZFxuICAgIHZhbHVlID0gaXNOaWwodmFsdWUpID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XG5cbiAgICB2YXIgaXNOb25OdW1lcmljRmFsc3kgPSAhdmFsdWUgJiYgdmFsdWUgIT09IDA7XG5cbiAgICBpZiAoaXNOb25OdW1lcmljRmFsc3kgJiYgYWxsb3dFbXB0eUZvcm1hdHRpbmcpIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLy8gaWYgdmFsdWUgaXMgbm90IGRlZmluZWQgcmV0dXJuIGVtcHR5IHN0cmluZ1xuICAgIGlmIChpc05vbk51bWVyaWNGYWxzeSAmJiAhYWxsb3dFbXB0eUZvcm1hdHRpbmcpIHsgcmV0dXJuICcnOyB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSB0b051bWVyaWNTdHJpbmcodmFsdWUpO1xuICAgICAgaXNOdW1lcmljU3RyaW5nID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvL2NoYW5nZSBpbmZpbml0eSB2YWx1ZSB0byBlbXB0eSBzdHJpbmdcbiAgICBpZiAodmFsdWUgPT09ICdJbmZpbml0eScgJiYgaXNOdW1lcmljU3RyaW5nKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIC8vcm91bmQgdGhlIG51bWJlciBiYXNlZCBvbiBkZWNpbWFsU2NhbGVcbiAgICAvL2Zvcm1hdCBvbmx5IGlmIG5vbiBmb3JtYXR0ZWQgdmFsdWUgaXMgcHJvdmlkZWRcbiAgICBpZiAoaXNOdW1lcmljU3RyaW5nICYmICFmb3JtYXQgJiYgdHlwZW9mIGRlY2ltYWxTY2FsZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHZhbHVlID0gcm91bmRUb1ByZWNpc2lvbih2YWx1ZSwgZGVjaW1hbFNjYWxlLCBmaXhlZERlY2ltYWxTY2FsZSk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gaXNOdW1lcmljU3RyaW5nID8gdGhpcy5mb3JtYXROdW1TdHJpbmcodmFsdWUpIDogdGhpcy5mb3JtYXRJbnB1dCh2YWx1ZSk7XG5cbiAgICByZXR1cm4gZm9ybWF0dGVkVmFsdWU7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5mb3JtYXROZWdhdGlvbiA9IGZ1bmN0aW9uIGZvcm1hdE5lZ2F0aW9uICh2YWx1ZSkge1xuICAgIGlmICggdmFsdWUgPT09IHZvaWQgMCApIHZhbHVlICAgICAgICAgPSAnJztcblxuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBhbGxvd05lZ2F0aXZlID0gcmVmLmFsbG93TmVnYXRpdmU7XG4gICAgdmFyIG5lZ2F0aW9uUmVnZXggPSBuZXcgUmVnRXhwKCcoLSknKTtcbiAgICB2YXIgZG91YmxlTmVnYXRpb25SZWdleCA9IG5ldyBSZWdFeHAoJygtKSguKSooLSknKTtcblxuICAgIC8vIENoZWNrIG51bWJlciBoYXMgJy0nIHZhbHVlXG4gICAgdmFyIGhhc05lZ2F0aW9uID0gbmVnYXRpb25SZWdleC50ZXN0KHZhbHVlKTtcblxuICAgIC8vIENoZWNrIG51bWJlciBoYXMgMiBvciBtb3JlICctJyB2YWx1ZXNcbiAgICB2YXIgcmVtb3ZlTmVnYXRpb24gPSBkb3VibGVOZWdhdGlvblJlZ2V4LnRlc3QodmFsdWUpO1xuXG4gICAgLy9yZW1vdmUgbmVnYXRpb25cbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoLy0vZywgJycpO1xuXG4gICAgaWYgKGhhc05lZ2F0aW9uICYmICFyZW1vdmVOZWdhdGlvbiAmJiBhbGxvd05lZ2F0aXZlKSB7XG4gICAgICB2YWx1ZSA9ICctJyArIHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbiAgfTtcblxuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmZvcm1hdElucHV0ID0gZnVuY3Rpb24gZm9ybWF0SW5wdXQgKHZhbHVlKSB7XG4gICAgaWYgKCB2YWx1ZSA9PT0gdm9pZCAwICkgdmFsdWUgICAgICAgICA9ICcnO1xuXG4gICAgdmFyIHJlZiA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGZvcm1hdCA9IHJlZi5mb3JtYXQ7XG5cbiAgICAvL2Zvcm1hdCBuZWdhdGlvbiBvbmx5IGlmIHdlIGFyZSBmb3JtYXR0aW5nIGFzIG51bWJlclxuICAgIGlmICghZm9ybWF0KSB7XG4gICAgICB2YWx1ZSA9IHRoaXMucmVtb3ZlUHJlZml4QW5kU3VmZml4KHZhbHVlKTtcbiAgICAgIHZhbHVlID0gdGhpcy5mb3JtYXROZWdhdGlvbih2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy9yZW1vdmUgZm9ybWF0dGluZyBmcm9tIG51bWJlclxuICAgIHZhbHVlID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKHZhbHVlKTtcblxuICAgIHJldHVybiB0aGlzLmZvcm1hdE51bVN0cmluZyh2YWx1ZSk7XG4gIH07XG5cbiAgLyoqKiBmb3JtYXQgc3BlY2lmaWMgbWV0aG9kcyBlbmQgKioqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmlzQ2hhcmFjdGVyQUZvcm1hdCA9IGZ1bmN0aW9uIGlzQ2hhcmFjdGVyQUZvcm1hdCAoY2FyZXRQb3MgICAgICAgICwgdmFsdWUgICAgICAgICkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBmb3JtYXQgPSByZWYuZm9ybWF0O1xuICAgIHZhciBwcmVmaXggPSByZWYucHJlZml4O1xuICAgIHZhciBzdWZmaXggPSByZWYuc3VmZml4O1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciBmaXhlZERlY2ltYWxTY2FsZSA9IHJlZi5maXhlZERlY2ltYWxTY2FsZTtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLmdldFNlcGFyYXRvcnMoKTtcbiAgICB2YXIgZGVjaW1hbFNlcGFyYXRvciA9IHJlZiQxLmRlY2ltYWxTZXBhcmF0b3I7XG5cbiAgICAvL2NoZWNrIHdpdGhpbiBmb3JtYXQgcGF0dGVyblxuICAgIGlmICh0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJyAmJiBmb3JtYXRbY2FyZXRQb3NdICE9PSAnIycpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgIC8vY2hlY2sgaW4gbnVtYmVyIGZvcm1hdFxuICAgIGlmIChcbiAgICAgICFmb3JtYXQgJiZcbiAgICAgIChjYXJldFBvcyA8IHByZWZpeC5sZW5ndGggfHxcbiAgICAgICAgY2FyZXRQb3MgPj0gdmFsdWUubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCB8fFxuICAgICAgICAoZGVjaW1hbFNjYWxlICYmIGZpeGVkRGVjaW1hbFNjYWxlICYmIHZhbHVlW2NhcmV0UG9zXSA9PT0gZGVjaW1hbFNlcGFyYXRvcikpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBjaGVjayBpZiBhbnkgZm9ybWF0dGluZyBnb3QgcmVtb3ZlZCBieSB0aGUgZGVsZXRlIG9yIGJhY2tzcGFjZSBhbmQgcmVzZXQgdGhlIHZhbHVlXG4gICAqIEl0IHdpbGwgYWxzbyB3b3JrIGFzIGZhbGxiYWNrIGlmIGFuZHJvaWQgY2hvbWUga2V5RG93biBoYW5kbGVyIGRvZXMgbm90IHdvcmtcbiAgICoqL1xuICBOdW1iZXJGb3JtYXQucHJvdG90eXBlLmNvcnJlY3RJbnB1dFZhbHVlID0gZnVuY3Rpb24gY29ycmVjdElucHV0VmFsdWUgKGNhcmV0UG9zICAgICAgICAsIGxhc3RWYWx1ZSAgICAgICAgLCB2YWx1ZSAgICAgICAgKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgYWxsb3dOZWdhdGl2ZSA9IHJlZi5hbGxvd05lZ2F0aXZlO1xuICAgIHZhciBwcmVmaXggPSByZWYucHJlZml4O1xuICAgIHZhciBzdWZmaXggPSByZWYuc3VmZml4O1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciByZWYkMSA9IHRoaXMuZ2V0U2VwYXJhdG9ycygpO1xuICAgIHZhciBhbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnMgPSByZWYkMS5hbGxvd2VkRGVjaW1hbFNlcGFyYXRvcnM7XG4gICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSByZWYkMS5kZWNpbWFsU2VwYXJhdG9yO1xuICAgIHZhciBsYXN0TnVtU3RyID0gdGhpcy5zdGF0ZS5udW1Bc1N0cmluZyB8fCAnJztcbiAgICB2YXIgcmVmJDIgPSB0aGlzLnNlbGVjdGlvbkJlZm9yZUlucHV0O1xuICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IHJlZiQyLnNlbGVjdGlvblN0YXJ0O1xuICAgIHZhciBzZWxlY3Rpb25FbmQgPSByZWYkMi5zZWxlY3Rpb25FbmQ7XG4gICAgdmFyIHJlZiQzID0gZmluZENoYW5nZWRJbmRleChsYXN0VmFsdWUsIHZhbHVlKTtcbiAgICB2YXIgc3RhcnQgPSByZWYkMy5zdGFydDtcbiAgICB2YXIgZW5kID0gcmVmJDMuZW5kO1xuXG4gICAgLyoqIENoZWNrIGZvciBhbnkgYWxsb3dlZCBkZWNpbWFsIHNlcGFyYXRvciBpcyBhZGRlZCBpbiB0aGUgbnVtZXJpYyBmb3JtYXQgYW5kIHJlcGxhY2UgaXQgd2l0aCBkZWNpbWFsIHNlcGFyYXRvciAqL1xuICAgIGlmIChcbiAgICAgICFmb3JtYXQgJiZcbiAgICAgIHN0YXJ0ID09PSBlbmQgJiZcbiAgICAgIGFsbG93ZWREZWNpbWFsU2VwYXJhdG9ycy5pbmRleE9mKHZhbHVlW3NlbGVjdGlvblN0YXJ0XSkgIT09IC0xXG4gICAgKSB7XG4gICAgICB2YXIgc2VwYXJhdG9yID0gZGVjaW1hbFNjYWxlID09PSAwID8gJycgOiBkZWNpbWFsU2VwYXJhdG9yO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgdmFsdWUuc3Vic3RyKDAsIHNlbGVjdGlvblN0YXJ0KSArIHNlcGFyYXRvciArIHZhbHVlLnN1YnN0cihzZWxlY3Rpb25TdGFydCArIDEsIHZhbHVlLmxlbmd0aClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgdmFyIGxlZnRCb3VuZCA9ICEhZm9ybWF0ID8gMCA6IHByZWZpeC5sZW5ndGg7XG4gICAgdmFyIHJpZ2h0Qm91bmQgPSBsYXN0VmFsdWUubGVuZ3RoIC0gKCEhZm9ybWF0ID8gMCA6IHN1ZmZpeC5sZW5ndGgpO1xuXG4gICAgaWYgKFxuICAgICAgLy8gZG9uJ3QgZG8gYW55dGhpbmcgaWYgc29tZXRoaW5nIGdvdCBhZGRlZFxuICAgICAgdmFsdWUubGVuZ3RoID4gbGFzdFZhbHVlLmxlbmd0aCB8fFxuICAgICAgLy8gb3IgaWYgdGhlIG5ldyB2YWx1ZSBpcyBhbiBlbXB0eSBzdHJpbmdcbiAgICAgICF2YWx1ZS5sZW5ndGggfHxcbiAgICAgIC8vIG9yIGlmIG5vdGhpbmcgaGFzIGNoYW5nZWQsIGluIHdoaWNoIGNhc2Ugc3RhcnQgd2lsbCBiZSBzYW1lIGFzIGVuZFxuICAgICAgc3RhcnQgPT09IGVuZCB8fFxuICAgICAgLy8gb3IgaW4gY2FzZSBpZiB3aG9sZSBpbnB1dCBpcyBzZWxlY3RlZCBhbmQgbmV3IHZhbHVlIGlzIHR5cGVkXG4gICAgICAoc2VsZWN0aW9uU3RhcnQgPT09IDAgJiYgc2VsZWN0aW9uRW5kID09PSBsYXN0VmFsdWUubGVuZ3RoKSB8fFxuICAgICAgLy8gb3IgaW4gY2FzZSBpZiB0aGUgd2hvbGUgY29udGVudCBpcyByZXBsYWNlZCBieSBicm93c2VyLCBleGFtcGxlIChhdXRvY29tcGxldGUpXG4gICAgICAoc3RhcnQgPT09IDAgJiYgZW5kID09PSBsYXN0VmFsdWUubGVuZ3RoKSB8fFxuICAgICAgLy8gb3IgaWYgY2hhcmN0ZXJzIGJldHdlZW4gcHJlZml4IGFuZCBzdWZmaXggaXMgc2VsZWN0ZWQuXG4gICAgICAvLyBGb3IgbnVtZXJpYyBpbnB1dHMgd2UgYXBwbHkgdGhlIGZvcm1hdCBzbywgcHJlZml4IGFuZCBzdWZmaXggY2FuIGJlIGlnbm9yZWRcbiAgICAgIChzZWxlY3Rpb25TdGFydCA9PT0gbGVmdEJvdW5kICYmIHNlbGVjdGlvbkVuZCA9PT0gcmlnaHRCb3VuZClcbiAgICApIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvLyBjaGVjayB3aGV0aGVyIHRoZSBkZWxldGVkIHBvcnRpb24gaGFzIGEgY2hhcmFjdGVyIHRoYXQgaXMgcGFydCBvZiBhIGZvcm1hdFxuICAgIHZhciBkZWxldGVkVmFsdWVzID0gbGFzdFZhbHVlLnN1YnN0cihzdGFydCwgZW5kIC0gc3RhcnQpO1xuICAgIHZhciBmb3JtYXRHb3REZWxldGVkID0gISFbXS5jb25jYXQoIGRlbGV0ZWRWYWx1ZXMgKS5maW5kKGZ1bmN0aW9uIChkZWxldGVkVmFsLCBpZHgpIHsgcmV0dXJuIHRoaXMkMS5pc0NoYXJhY3RlckFGb3JtYXQoaWR4ICsgc3RhcnQsIGxhc3RWYWx1ZSk7IH0pO1xuXG4gICAgLy8gaWYgaXQgaGFzLCBvbmx5IHJlbW92ZSBjaGFyYWN0ZXJzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBmb3JtYXRcbiAgICBpZihmb3JtYXRHb3REZWxldGVkKSB7XG4gICAgICB2YXIgZGVsZXRlZFZhbHVlUG9ydGlvbiA9IGxhc3RWYWx1ZS5zdWJzdHIoc3RhcnQpO1xuICAgICAgdmFyIHJlY29yZEluZGV4T2ZGb3JtYXRDaGFyYWN0ZXJzID0ge307XG4gICAgICB2YXIgcmVzb2x2ZWRQb3J0aW9uID0gW107XG4gICAgICBbXS5jb25jYXQoIGRlbGV0ZWRWYWx1ZVBvcnRpb24gKS5mb3JFYWNoKGZ1bmN0aW9uIChjdXJyZW50UG9ydGlvbiwgaWR4KSB7XG4gICAgICAgIGlmKHRoaXMkMS5pc0NoYXJhY3RlckFGb3JtYXQoaWR4ICsgc3RhcnQsIGxhc3RWYWx1ZSkpe1xuICAgICAgICAgIHJlY29yZEluZGV4T2ZGb3JtYXRDaGFyYWN0ZXJzW2lkeF0gPSBjdXJyZW50UG9ydGlvbjtcbiAgICAgICAgfSBlbHNlIGlmIChpZHggPiBkZWxldGVkVmFsdWVzLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICByZXNvbHZlZFBvcnRpb24ucHVzaChjdXJyZW50UG9ydGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBPYmplY3Qua2V5cyhyZWNvcmRJbmRleE9mRm9ybWF0Q2hhcmFjdGVycykuZm9yRWFjaChmdW5jdGlvbiAoaWR4KSB7XG4gICAgICAgIGlmKHJlc29sdmVkUG9ydGlvbi5sZW5ndGggPiBpZHgpe1xuICAgICAgICAgIHJlc29sdmVkUG9ydGlvbi5zcGxpY2UoaWR4LCAwLCByZWNvcmRJbmRleE9mRm9ybWF0Q2hhcmFjdGVyc1tpZHhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlZFBvcnRpb24ucHVzaChyZWNvcmRJbmRleE9mRm9ybWF0Q2hhcmFjdGVyc1tpZHhdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHZhbHVlID0gbGFzdFZhbHVlLnN1YnN0cigwLCBzdGFydCkgKyByZXNvbHZlZFBvcnRpb24uam9pbignJyk7XG4gICAgfVxuXG5cblxuXG4gICAgLy9mb3IgbnVtYmVycyBjaGVjayBpZiBiZWZvcmVEZWNpbWFsIGdvdCBkZWxldGVkIGFuZCB0aGVyZSBpcyBub3RoaW5nIGFmdGVyIGRlY2ltYWwsXG4gICAgLy9jbGVhciBhbGwgbnVtYmVycyBpbiBzdWNoIGNhc2Ugd2hpbGUga2VlcGluZyB0aGUgLSBzaWduXG4gICAgaWYgKCFmb3JtYXQpIHtcbiAgICAgIHZhciBudW1lcmljU3RyaW5nID0gdGhpcy5yZW1vdmVGb3JtYXR0aW5nKHZhbHVlKTtcbiAgICAgIHZhciByZWYkNCA9IHNwbGl0RGVjaW1hbChcbiAgICAgICAgbnVtZXJpY1N0cmluZyxcbiAgICAgICAgYWxsb3dOZWdhdGl2ZVxuICAgICAgKTtcbiAgICAgIHZhciBiZWZvcmVEZWNpbWFsID0gcmVmJDQuYmVmb3JlRGVjaW1hbDtcbiAgICAgIHZhciBhZnRlckRlY2ltYWwgPSByZWYkNC5hZnRlckRlY2ltYWw7XG4gICAgICB2YXIgYWRkTmVnYXRpb24gPSByZWYkNC5hZGROZWdhdGlvbjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItY29uc3RcblxuICAgICAgLy9jbGVhciBvbmx5IGlmIHNvbWV0aGluZyBnb3QgZGVsZXRlZFxuICAgICAgdmFyIGlzQmVmb3JlRGVjaW1hbFBvaW50ID0gY2FyZXRQb3MgPCB2YWx1ZS5pbmRleE9mKGRlY2ltYWxTZXBhcmF0b3IpICsgMTtcbiAgICAgIGlmIChcbiAgICAgICAgbnVtZXJpY1N0cmluZy5sZW5ndGggPCBsYXN0TnVtU3RyLmxlbmd0aCAmJlxuICAgICAgICBpc0JlZm9yZURlY2ltYWxQb2ludCAmJlxuICAgICAgICBiZWZvcmVEZWNpbWFsID09PSAnJyAmJlxuICAgICAgICAhcGFyc2VGbG9hdChhZnRlckRlY2ltYWwpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIGFkZE5lZ2F0aW9uID8gJy0nIDogJyc7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xuXG4gIC8qKiBVcGRhdGUgdmFsdWUgYW5kIGNhcmV0IHBvc2l0aW9uICovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUudXBkYXRlVmFsdWUgPSBmdW5jdGlvbiB1cGRhdGVWYWx1ZSAocGFyYW1zICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICApIHtcbiAgICB2YXIgZm9ybWF0dGVkVmFsdWUgPSBwYXJhbXMuZm9ybWF0dGVkVmFsdWU7XG4gICAgdmFyIGlucHV0ID0gcGFyYW1zLmlucHV0O1xuICAgIHZhciBzZXRDYXJldFBvc2l0aW9uID0gcGFyYW1zLnNldENhcmV0UG9zaXRpb247IGlmICggc2V0Q2FyZXRQb3NpdGlvbiA9PT0gdm9pZCAwICkgc2V0Q2FyZXRQb3NpdGlvbiA9IHRydWU7XG4gICAgdmFyIG51bUFzU3RyaW5nID0gcGFyYW1zLm51bUFzU3RyaW5nO1xuICAgIHZhciBjYXJldFBvcyA9IHBhcmFtcy5jYXJldFBvcztcbiAgICB2YXIgcmVmID0gdGhpcy5wcm9wcztcbiAgICB2YXIgb25WYWx1ZUNoYW5nZSA9IHJlZi5vblZhbHVlQ2hhbmdlO1xuICAgIHZhciByZWYkMSA9IHRoaXMuc3RhdGU7XG4gICAgdmFyIGxhc3RWYWx1ZSA9IHJlZiQxLnZhbHVlO1xuXG4gICAgaWYgKGlucHV0KSB7XG4gICAgICAvL3NldCBjYXJldCBwb3NpdGlvbiwgYW5kIHZhbHVlIGltcGVyYXRpdmVseSB3aGVuIGVsZW1lbnQgaXMgcHJvdmlkZWRcbiAgICAgIGlmIChzZXRDYXJldFBvc2l0aW9uKSB7XG4gICAgICAgIC8vY2FsY3VsYXRlIGNhcmV0IHBvc2l0aW9uIGlmIG5vdCBkZWZpbmVkXG4gICAgICAgIGlmICghY2FyZXRQb3MpIHtcbiAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlIHx8IGlucHV0LnZhbHVlO1xuXG4gICAgICAgICAgdmFyIGN1cnJlbnRDYXJldFBvc2l0aW9uID0gZ2V0Q3VycmVudENhcmV0UG9zaXRpb24oaW5wdXQpO1xuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogc2V0IHRoZSB2YWx1ZSBpbXBlcmF0aXZlbHksIHRoaXMgaXMgcmVxdWlyZWQgZm9yIElFIGZpeFxuICAgICAgICAgICAqIFRoaXMgaXMgYWxzbyByZXF1aXJlZCBhcyBpZiBuZXcgY2FyZXQgcG9zaXRpb24gaXMgYmV5b25kIHRoZSBwcmV2aW91cyB2YWx1ZS5cbiAgICAgICAgICAgKiBDYXJldCBwb3NpdGlvbiB3aWxsIG5vdCBiZSBzZXQgY29ycmVjdGx5XG4gICAgICAgICAgICovXG4gICAgICAgICAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRWYWx1ZTtcblxuICAgICAgICAgIC8vZ2V0IHRoZSBjYXJldCBwb3NpdGlvblxuICAgICAgICAgIGNhcmV0UG9zID0gdGhpcy5nZXRDYXJldFBvc2l0aW9uKGlucHV0VmFsdWUsIGZvcm1hdHRlZFZhbHVlLCBjdXJyZW50Q2FyZXRQb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvL3NldCBjYXJldCBwb3NpdGlvblxuICAgICAgICB0aGlzLnNldFBhdGNoZWRDYXJldFBvc2l0aW9uKGlucHV0LCBjYXJldFBvcywgZm9ybWF0dGVkVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGlmIHdlIGFyZSBub3Qgc2V0dGluZyBjYXJldCBwb3NpdGlvbiBzZXQgdGhlIHZhbHVlIGltcGVyYXRpdmVseS5cbiAgICAgICAgICogVGhpcyBpcyByZXF1aXJlZCBvbiBvbkJsdXIgbWV0aG9kXG4gICAgICAgICAqL1xuICAgICAgICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZFZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vY2FsY3VsYXRlIG51bWVyaWMgc3RyaW5nIGlmIG5vdCBwYXNzZWRcbiAgICBpZiAobnVtQXNTdHJpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgbnVtQXNTdHJpbmcgPSB0aGlzLnJlbW92ZUZvcm1hdHRpbmcoZm9ybWF0dGVkVmFsdWUpO1xuICAgIH1cblxuICAgIC8vdXBkYXRlIHN0YXRlIGlmIHZhbHVlIGlzIGNoYW5nZWRcbiAgICBpZiAoZm9ybWF0dGVkVmFsdWUgIT09IGxhc3RWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBmb3JtYXR0ZWRWYWx1ZSwgbnVtQXNTdHJpbmc6IG51bUFzU3RyaW5nIH0pO1xuXG4gICAgICAvLyB0cmlnZ2VyIG9uVmFsdWVDaGFuZ2Ugc3luY2hyb25vdXNseSwgc28gcGFyZW50IGlzIHVwZGF0ZWQgYWxvbmcgd2l0aCB0aGUgbnVtYmVyIGZvcm1hdC4gRml4IGZvciAjMjc3LCAjMjg3XG4gICAgICBvblZhbHVlQ2hhbmdlKHRoaXMuZ2V0VmFsdWVPYmplY3QoZm9ybWF0dGVkVmFsdWUsIG51bUFzU3RyaW5nKSk7XG4gICAgfVxuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25DaGFuZ2UgPSBmdW5jdGlvbiBvbkNoYW5nZSAoZSAgICAgICAgICAgICAgICAgICAgICkge1xuICAgIHZhciBlbCA9IGUudGFyZ2V0O1xuICAgIHZhciBpbnB1dFZhbHVlID0gZWwudmFsdWU7XG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHN0YXRlID0gcmVmLnN0YXRlO1xuICAgIHZhciBwcm9wcyA9IHJlZi5wcm9wcztcbiAgICB2YXIgaXNBbGxvd2VkID0gcHJvcHMuaXNBbGxvd2VkO1xuICAgIHZhciBsYXN0VmFsdWUgPSBzdGF0ZS52YWx1ZSB8fCAnJztcblxuICAgIHZhciBjdXJyZW50Q2FyZXRQb3NpdGlvbiA9IGdldEN1cnJlbnRDYXJldFBvc2l0aW9uKGVsKTtcblxuICAgIGlucHV0VmFsdWUgPSB0aGlzLmNvcnJlY3RJbnB1dFZhbHVlKGN1cnJlbnRDYXJldFBvc2l0aW9uLCBsYXN0VmFsdWUsIGlucHV0VmFsdWUpO1xuXG4gICAgdmFyIGZvcm1hdHRlZFZhbHVlID0gdGhpcy5mb3JtYXRJbnB1dChpbnB1dFZhbHVlKSB8fCAnJztcbiAgICB2YXIgbnVtQXNTdHJpbmcgPSB0aGlzLnJlbW92ZUZvcm1hdHRpbmcoZm9ybWF0dGVkVmFsdWUpO1xuXG4gICAgdmFyIHZhbHVlT2JqID0gdGhpcy5nZXRWYWx1ZU9iamVjdChmb3JtYXR0ZWRWYWx1ZSwgbnVtQXNTdHJpbmcpO1xuICAgIHZhciBpc0NoYW5nZUFsbG93ZWQgPSBpc0FsbG93ZWQodmFsdWVPYmopO1xuXG4gICAgaWYgKCFpc0NoYW5nZUFsbG93ZWQpIHtcbiAgICAgIGZvcm1hdHRlZFZhbHVlID0gbGFzdFZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlVmFsdWUoeyBmb3JtYXR0ZWRWYWx1ZTogZm9ybWF0dGVkVmFsdWUsIG51bUFzU3RyaW5nOiBudW1Bc1N0cmluZywgaW5wdXRWYWx1ZTogaW5wdXRWYWx1ZSwgaW5wdXQ6IGVsIH0pO1xuXG4gICAgaWYgKGlzQ2hhbmdlQWxsb3dlZCkge1xuICAgICAgcHJvcHMub25DaGFuZ2UoZSk7XG4gICAgfVxuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25CbHVyID0gZnVuY3Rpb24gb25CbHVyIChlICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgdmFyIHJlZiA9IHRoaXM7XG4gICAgdmFyIHByb3BzID0gcmVmLnByb3BzO1xuICAgIHZhciBzdGF0ZSA9IHJlZi5zdGF0ZTtcbiAgICB2YXIgZm9ybWF0ID0gcHJvcHMuZm9ybWF0O1xuICAgIHZhciBvbkJsdXIgPSBwcm9wcy5vbkJsdXI7XG4gICAgdmFyIGFsbG93TGVhZGluZ1plcm9zID0gcHJvcHMuYWxsb3dMZWFkaW5nWmVyb3M7XG4gICAgdmFyIG51bUFzU3RyaW5nID0gc3RhdGUubnVtQXNTdHJpbmc7XG4gICAgdmFyIGxhc3RWYWx1ZSA9IHN0YXRlLnZhbHVlO1xuICAgIHRoaXMuZm9jdXNlZEVsbSA9IG51bGw7XG5cbiAgICBjbGVhclRpbWVvdXQodGhpcy5mb2N1c1RpbWVvdXQpO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmNhcmV0UG9zaXRpb25UaW1lb3V0KTtcblxuICAgIGlmICghZm9ybWF0KSB7XG4gICAgICAvLyBpZiB0aGUgbnVtQXNTdHJpbmcgaXMgbm90IGEgdmFsaWQgbnVtYmVyIHJlc2V0IGl0IHRvIGVtcHR5XG4gICAgICBpZiAoaXNOYU4ocGFyc2VGbG9hdChudW1Bc1N0cmluZykpKSB7XG4gICAgICAgIG51bUFzU3RyaW5nID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGlmICghYWxsb3dMZWFkaW5nWmVyb3MpIHtcbiAgICAgICAgbnVtQXNTdHJpbmcgPSBmaXhMZWFkaW5nWmVybyhudW1Bc1N0cmluZyk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb3JtYXR0ZWRWYWx1ZSA9IHRoaXMuZm9ybWF0TnVtU3RyaW5nKG51bUFzU3RyaW5nKTtcblxuICAgICAgLy9jaGFuZ2UgdGhlIHN0YXRlXG4gICAgICBpZiAoZm9ybWF0dGVkVmFsdWUgIT09IGxhc3RWYWx1ZSkge1xuICAgICAgICAvLyB0aGUgZXZlbnQgbmVlZHMgdG8gYmUgcGVyc2lzdGVkIGJlY2F1c2UgaXRzIHByb3BlcnRpZXMgY2FuIGJlIGFjY2Vzc2VkIGluIGFuIGFzeW5jaHJvbm91cyB3YXlcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh7XG4gICAgICAgICAgZm9ybWF0dGVkVmFsdWU6IGZvcm1hdHRlZFZhbHVlLFxuICAgICAgICAgIG51bUFzU3RyaW5nOiBudW1Bc1N0cmluZyxcbiAgICAgICAgICBpbnB1dDogZS50YXJnZXQsXG4gICAgICAgICAgc2V0Q2FyZXRQb3NpdGlvbjogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgICBvbkJsdXIoZSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgb25CbHVyKGUpO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25LZXlEb3duID0gZnVuY3Rpb24gb25LZXlEb3duIChlICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgICB2YXIga2V5ID0gZS5rZXk7XG4gICAgdmFyIHNlbGVjdGlvblN0YXJ0ID0gZWwuc2VsZWN0aW9uU3RhcnQ7XG4gICAgdmFyIHNlbGVjdGlvbkVuZCA9IGVsLnNlbGVjdGlvbkVuZDtcbiAgICB2YXIgdmFsdWUgPSBlbC52YWx1ZTsgaWYgKCB2YWx1ZSA9PT0gdm9pZCAwICkgdmFsdWUgPSAnJztcbiAgICB2YXIgZXhwZWN0ZWRDYXJldFBvc2l0aW9uO1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciBkZWNpbWFsU2NhbGUgPSByZWYuZGVjaW1hbFNjYWxlO1xuICAgIHZhciBmaXhlZERlY2ltYWxTY2FsZSA9IHJlZi5maXhlZERlY2ltYWxTY2FsZTtcbiAgICB2YXIgcHJlZml4ID0gcmVmLnByZWZpeDtcbiAgICB2YXIgc3VmZml4ID0gcmVmLnN1ZmZpeDtcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgb25LZXlEb3duID0gcmVmLm9uS2V5RG93bjtcbiAgICB2YXIgaWdub3JlRGVjaW1hbFNlcGFyYXRvciA9IGRlY2ltYWxTY2FsZSAhPT0gdW5kZWZpbmVkICYmIGZpeGVkRGVjaW1hbFNjYWxlO1xuICAgIHZhciBudW1SZWdleCA9IHRoaXMuZ2V0TnVtYmVyUmVnZXgoZmFsc2UsIGlnbm9yZURlY2ltYWxTZXBhcmF0b3IpO1xuICAgIHZhciBuZWdhdGl2ZVJlZ2V4ID0gbmV3IFJlZ0V4cCgnLScpO1xuICAgIHZhciBpc1BhdHRlcm5Gb3JtYXQgPSB0eXBlb2YgZm9ybWF0ID09PSAnc3RyaW5nJztcblxuICAgIHRoaXMuc2VsZWN0aW9uQmVmb3JlSW5wdXQgPSB7XG4gICAgICBzZWxlY3Rpb25TdGFydDogc2VsZWN0aW9uU3RhcnQsXG4gICAgICBzZWxlY3Rpb25FbmQ6IHNlbGVjdGlvbkVuZCxcbiAgICB9O1xuXG4gICAgLy9IYW5kbGUgYmFja3NwYWNlIGFuZCBkZWxldGUgYWdhaW5zdCBub24gbnVtZXJpY2FsL2RlY2ltYWwgY2hhcmFjdGVycyBvciBhcnJvdyBrZXlzXG4gICAgaWYgKGtleSA9PT0gJ0Fycm93TGVmdCcgfHwga2V5ID09PSAnQmFja3NwYWNlJykge1xuICAgICAgZXhwZWN0ZWRDYXJldFBvc2l0aW9uID0gc2VsZWN0aW9uU3RhcnQgLSAxO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQXJyb3dSaWdodCcpIHtcbiAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0ICsgMTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ0RlbGV0ZScpIHtcbiAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA9IHNlbGVjdGlvblN0YXJ0O1xuICAgIH1cblxuICAgIC8vaWYgZXhwZWN0ZWRDYXJldFBvc2l0aW9uIGlzIG5vdCBzZXQgaXQgbWVhbnMgd2UgZG9uJ3Qgd2FudCB0byBIYW5kbGUga2V5RG93blxuICAgIC8vYWxzbyBpZiBtdWx0aXBsZSBjaGFyYWN0ZXJzIGFyZSBzZWxlY3RlZCBkb24ndCBoYW5kbGVcbiAgICBpZiAoZXhwZWN0ZWRDYXJldFBvc2l0aW9uID09PSB1bmRlZmluZWQgfHwgc2VsZWN0aW9uU3RhcnQgIT09IHNlbGVjdGlvbkVuZCkge1xuICAgICAgb25LZXlEb3duKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBuZXdDYXJldFBvc2l0aW9uID0gZXhwZWN0ZWRDYXJldFBvc2l0aW9uO1xuICAgIHZhciBsZWZ0Qm91bmQgPSBpc1BhdHRlcm5Gb3JtYXQgPyBmb3JtYXQuaW5kZXhPZignIycpIDogcHJlZml4Lmxlbmd0aDtcbiAgICB2YXIgcmlnaHRCb3VuZCA9IGlzUGF0dGVybkZvcm1hdCA/IGZvcm1hdC5sYXN0SW5kZXhPZignIycpICsgMSA6IHZhbHVlLmxlbmd0aCAtIHN1ZmZpeC5sZW5ndGg7XG5cbiAgICBpZiAoa2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBrZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgdmFyIGRpcmVjdGlvbiA9IGtleSA9PT0gJ0Fycm93TGVmdCcgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgbmV3Q2FyZXRQb3NpdGlvbiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiwgZGlyZWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAga2V5ID09PSAnRGVsZXRlJyAmJlxuICAgICAgIW51bVJlZ2V4LnRlc3QodmFsdWVbZXhwZWN0ZWRDYXJldFBvc2l0aW9uXSkgJiZcbiAgICAgICFuZWdhdGl2ZVJlZ2V4LnRlc3QodmFsdWVbZXhwZWN0ZWRDYXJldFBvc2l0aW9uXSlcbiAgICApIHtcbiAgICAgIHdoaWxlICghbnVtUmVnZXgudGVzdCh2YWx1ZVtuZXdDYXJldFBvc2l0aW9uXSkgJiYgbmV3Q2FyZXRQb3NpdGlvbiA8IHJpZ2h0Qm91bmQpIHtcbiAgICAgICAgbmV3Q2FyZXRQb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnQmFja3NwYWNlJyAmJiAhbnVtUmVnZXgudGVzdCh2YWx1ZVtleHBlY3RlZENhcmV0UG9zaXRpb25dKSkge1xuICAgICAgLyogTk9URTogVGhpcyBpcyBzcGVjaWFsIGNhc2Ugd2hlbiBiYWNrc3BhY2UgaXMgcHJlc3NlZCBvbiBhXG4gICAgICBuZWdhdGl2ZSB2YWx1ZSB3aGlsZSB0aGUgY3Vyc29yIHBvc2l0aW9uIGlzIGFmdGVyIHByZWZpeC4gV2UgY2FuJ3QgaGFuZGxlIGl0IG9uIG9uQ2hhbmdlIGJlY2F1c2VcbiAgICAgIHdlIHdpbGwgbm90IGhhdmUgYW55IGluZm9ybWF0aW9uIG9mIGtleVByZXNzXG4gICAgICAqL1xuICAgICAgaWYgKHNlbGVjdGlvblN0YXJ0IDw9IGxlZnRCb3VuZCArIDEgJiYgdmFsdWVbMF0gPT09ICctJyAmJiB0eXBlb2YgZm9ybWF0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB2YWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoe1xuICAgICAgICAgIGZvcm1hdHRlZFZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICBjYXJldFBvczogbmV3Q2FyZXRQb3NpdGlvbixcbiAgICAgICAgICBpbnB1dDogZWwsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICghbmVnYXRpdmVSZWdleC50ZXN0KHZhbHVlW2V4cGVjdGVkQ2FyZXRQb3NpdGlvbl0pKSB7XG4gICAgICAgIHdoaWxlICghbnVtUmVnZXgudGVzdCh2YWx1ZVtuZXdDYXJldFBvc2l0aW9uIC0gMV0pICYmIG5ld0NhcmV0UG9zaXRpb24gPiBsZWZ0Qm91bmQpIHtcbiAgICAgICAgICBuZXdDYXJldFBvc2l0aW9uLS07XG4gICAgICAgIH1cbiAgICAgICAgbmV3Q2FyZXRQb3NpdGlvbiA9IHRoaXMuY29ycmVjdENhcmV0UG9zaXRpb24odmFsdWUsIG5ld0NhcmV0UG9zaXRpb24sICdsZWZ0Jyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgbmV3Q2FyZXRQb3NpdGlvbiAhPT0gZXhwZWN0ZWRDYXJldFBvc2l0aW9uIHx8XG4gICAgICBleHBlY3RlZENhcmV0UG9zaXRpb24gPCBsZWZ0Qm91bmQgfHxcbiAgICAgIGV4cGVjdGVkQ2FyZXRQb3NpdGlvbiA+IHJpZ2h0Qm91bmRcbiAgICApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oZWwsIG5ld0NhcmV0UG9zaXRpb24sIHZhbHVlKTtcbiAgICB9XG5cbiAgICAvKiBOT1RFOiB0aGlzIGlzIGp1c3QgcmVxdWlyZWQgZm9yIHVuaXQgdGVzdCBhcyB3ZSBuZWVkIHRvIGdldCB0aGUgbmV3Q2FyZXRQb3NpdGlvbixcbiAgICAgICAgICAgIFJlbW92ZSB0aGlzIHdoZW4geW91IGZpbmQgZGlmZmVyZW50IHNvbHV0aW9uICovXG4gICAgaWYgKGUuaXNVbml0VGVzdFJ1bikge1xuICAgICAgdGhpcy5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgbmV3Q2FyZXRQb3NpdGlvbiwgdmFsdWUpO1xuICAgIH1cblxuICAgIG9uS2V5RG93bihlKTtcbiAgfTtcblxuICAvKiogcmVxdWlyZWQgdG8gaGFuZGxlIHRoZSBjYXJldCBwb3NpdGlvbiB3aGVuIGNsaWNrIGFueXdoZXJlIHdpdGhpbiB0aGUgaW5wdXQgKiovXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25Nb3VzZVVwID0gZnVuY3Rpb24gb25Nb3VzZVVwIChlICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICB2YXIgZWwgPSBlLnRhcmdldDtcblxuICAgIC8qKlxuICAgICAqIE5PVEU6IHdlIGhhdmUgdG8gZ2l2ZSBkZWZhdWx0IHZhbHVlIGZvciB2YWx1ZSBhcyBpbiBjYXNlIHdoZW4gY3VzdG9tIGlucHV0IGlzIHByb3ZpZGVkXG4gICAgICogdmFsdWUgY2FuIGNvbWUgYXMgdW5kZWZpbmVkIHdoZW4gbm90aGluZyBpcyBwcm92aWRlZCBvbiB2YWx1ZSBwcm9wLlxuICAgICAqL1xuICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IGVsLnNlbGVjdGlvblN0YXJ0O1xuICAgIHZhciBzZWxlY3Rpb25FbmQgPSBlbC5zZWxlY3Rpb25FbmQ7XG4gICAgdmFyIHZhbHVlID0gZWwudmFsdWU7IGlmICggdmFsdWUgPT09IHZvaWQgMCApIHZhbHVlID0gJyc7XG5cbiAgICBpZiAoc2VsZWN0aW9uU3RhcnQgPT09IHNlbGVjdGlvbkVuZCkge1xuICAgICAgdmFyIGNhcmV0UG9zaXRpb24gPSB0aGlzLmNvcnJlY3RDYXJldFBvc2l0aW9uKHZhbHVlLCBzZWxlY3Rpb25TdGFydCk7XG4gICAgICBpZiAoY2FyZXRQb3NpdGlvbiAhPT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgICAgdGhpcy5zZXRQYXRjaGVkQ2FyZXRQb3NpdGlvbihlbCwgY2FyZXRQb3NpdGlvbiwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25Nb3VzZVVwKGUpO1xuICB9O1xuXG4gIE51bWJlckZvcm1hdC5wcm90b3R5cGUub25Gb2N1cyA9IGZ1bmN0aW9uIG9uRm9jdXMgKGUgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICAgIC8vIFdvcmthcm91bmQgQ2hyb21lIGFuZCBTYWZhcmkgYnVnIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTc3OTMyOFxuICAgIC8vIChvbkZvY3VzIGV2ZW50IHRhcmdldCBzZWxlY3Rpb25TdGFydCBpcyBhbHdheXMgMCBiZWZvcmUgc2V0VGltZW91dClcbiAgICBlLnBlcnNpc3QoKTtcblxuICAgIHRoaXMuZm9jdXNlZEVsbSA9IGUudGFyZ2V0O1xuICAgIHRoaXMuZm9jdXNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZWwgPSBlLnRhcmdldDtcbiAgICAgIHZhciBzZWxlY3Rpb25TdGFydCA9IGVsLnNlbGVjdGlvblN0YXJ0O1xuICAgICAgdmFyIHNlbGVjdGlvbkVuZCA9IGVsLnNlbGVjdGlvbkVuZDtcbiAgICAgIHZhciB2YWx1ZSA9IGVsLnZhbHVlOyBpZiAoIHZhbHVlID09PSB2b2lkIDAgKSB2YWx1ZSA9ICcnO1xuXG4gICAgICB2YXIgY2FyZXRQb3NpdGlvbiA9IHRoaXMkMS5jb3JyZWN0Q2FyZXRQb3NpdGlvbih2YWx1ZSwgc2VsZWN0aW9uU3RhcnQpO1xuXG4gICAgICAvL3NldFBhdGNoZWRDYXJldFBvc2l0aW9uIG9ubHkgd2hlbiBldmVyeXRoaW5nIGlzIG5vdCBzZWxlY3RlZCBvbiBmb2N1cyAod2hpbGUgdGFiYmluZyBpbnRvIHRoZSBmaWVsZClcbiAgICAgIGlmIChcbiAgICAgICAgY2FyZXRQb3NpdGlvbiAhPT0gc2VsZWN0aW9uU3RhcnQgJiZcbiAgICAgICAgIShzZWxlY3Rpb25TdGFydCA9PT0gMCAmJiBzZWxlY3Rpb25FbmQgPT09IHZhbHVlLmxlbmd0aClcbiAgICAgICkge1xuICAgICAgICB0aGlzJDEuc2V0UGF0Y2hlZENhcmV0UG9zaXRpb24oZWwsIGNhcmV0UG9zaXRpb24sIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcyQxLnByb3BzLm9uRm9jdXMoZSk7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgTnVtYmVyRm9ybWF0LnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIgKCkge1xuICAgIHZhciByZWYgPSB0aGlzLnByb3BzO1xuICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgdmFyIGRpc3BsYXlUeXBlID0gcmVmLmRpc3BsYXlUeXBlO1xuICAgIHZhciBjdXN0b21JbnB1dCA9IHJlZi5jdXN0b21JbnB1dDtcbiAgICB2YXIgcmVuZGVyVGV4dCA9IHJlZi5yZW5kZXJUZXh0O1xuICAgIHZhciBnZXRJbnB1dFJlZiA9IHJlZi5nZXRJbnB1dFJlZjtcbiAgICB2YXIgZm9ybWF0ID0gcmVmLmZvcm1hdDtcbiAgICB2YXIgcmVmJDEgPSB0aGlzLnN0YXRlO1xuICAgIHZhciB2YWx1ZSA9IHJlZiQxLnZhbHVlO1xuICAgIHZhciBtb3VudGVkID0gcmVmJDEubW91bnRlZDtcblxuICAgIHZhciBvdGhlclByb3BzID0gb21pdCh0aGlzLnByb3BzLCBwcm9wVHlwZXMkMSk7XG5cbiAgICAvLyBhZGQgaW5wdXQgbW9kZSBvbiBlbGVtZW50IGJhc2VkIG9uIGZvcm1hdCBwcm9wIGFuZCBkZXZpY2Ugb25jZSB0aGUgY29tcG9uZW50IGlzIG1vdW50ZWRcbiAgICB2YXIgaW5wdXRNb2RlID0gbW91bnRlZCAmJiBhZGRJbnB1dE1vZGUoZm9ybWF0KSA/ICdudW1lcmljJyA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBpbnB1dFByb3BzID0gT2JqZWN0LmFzc2lnbih7IGlucHV0TW9kZTogaW5wdXRNb2RlIH0sIG90aGVyUHJvcHMsIHtcbiAgICAgIHR5cGU6IHR5cGUsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICAgIG9uS2V5RG93bjogdGhpcy5vbktleURvd24sXG4gICAgICBvbk1vdXNlVXA6IHRoaXMub25Nb3VzZVVwLFxuICAgICAgb25Gb2N1czogdGhpcy5vbkZvY3VzLFxuICAgICAgb25CbHVyOiB0aGlzLm9uQmx1cixcbiAgICB9KTtcblxuICAgIGlmIChkaXNwbGF5VHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICByZXR1cm4gcmVuZGVyVGV4dCA/IChcbiAgICAgICAgcmVuZGVyVGV4dCh2YWx1ZSwgb3RoZXJQcm9wcykgfHwgbnVsbFxuICAgICAgKSA6IChcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudCggJ3NwYW4nLCBPYmplY3QuYXNzaWduKHt9LCBvdGhlclByb3BzLCB7IHJlZjogZ2V0SW5wdXRSZWYgfSksXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGN1c3RvbUlucHV0KSB7XG4gICAgICB2YXIgQ3VzdG9tSW5wdXQgPSBjdXN0b21JbnB1dDtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCBDdXN0b21JbnB1dCwgT2JqZWN0LmFzc2lnbih7fSwgaW5wdXRQcm9wcywgeyByZWY6IGdldElucHV0UmVmIH0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCggJ2lucHV0JywgT2JqZWN0LmFzc2lnbih7fSwgaW5wdXRQcm9wcywgeyByZWY6IGdldElucHV0UmVmIH0pKTtcbiAgfTtcblxuICByZXR1cm4gTnVtYmVyRm9ybWF0O1xufShSZWFjdC5Db21wb25lbnQpKTtcblxuTnVtYmVyRm9ybWF0LnByb3BUeXBlcyA9IHByb3BUeXBlcyQxO1xuTnVtYmVyRm9ybWF0LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuZXhwb3J0IGRlZmF1bHQgTnVtYmVyRm9ybWF0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==