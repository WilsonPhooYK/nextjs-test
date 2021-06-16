webpackHotUpdate_N_E("pages/forms",{

/***/ "./node_modules/lodash/_arrayReduce.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayReduce.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseReduce.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseReduce.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),

/***/ "./node_modules/lodash/_baseTrim.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseTrim.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var trimmedEndIndex = __webpack_require__(/*! ./_trimmedEndIndex */ "./node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_createFind.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createFind.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ "./node_modules/lodash/_trimmedEndIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_trimmedEndIndex.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "./node_modules/lodash/find.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/find.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createFind = __webpack_require__(/*! ./_createFind */ "./node_modules/lodash/_createFind.js"),
    findIndex = __webpack_require__(/*! ./findIndex */ "./node_modules/lodash/findIndex.js");

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ "./node_modules/lodash/findIndex.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/findIndex.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ "./node_modules/lodash/reduce.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/reduce.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(/*! ./_arrayReduce */ "./node_modules/lodash/_arrayReduce.js"),
    baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    baseReduce = __webpack_require__(/*! ./_baseReduce */ "./node_modules/lodash/_baseReduce.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTrim = __webpack_require__(/*! ./_baseTrim */ "./node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _toConsumableArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "./node_modules/next/dist/next-server/lib/to-base-64.js");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "./node_modules/next/dist/next-server/server/image-config.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (false) {}

var VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
var loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
var VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

var _ref2 = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"http://192.168.68.117:3000/","loader":"imgix","domains":[],"enableBlurryPlaceholder":false} || _imageConfig.imageConfigDefault,
    configDeviceSizes = _ref2.deviceSizes,
    configImageSizes = _ref2.imageSizes,
    configLoader = _ref2.loader,
    configPath = _ref2.path,
    configDomains = _ref2.domains,
    configEnableBlurryPlaceholder = _ref2.enableBlurryPlaceholder; // sort smallest to largest


var allSizes = [].concat(_toConsumableArray(configDeviceSizes), _toConsumableArray(configImageSizes));
configDeviceSizes.sort(function (a, b) {
  return a - b;
});
allSizes.sort(function (a, b) {
  return a - b;
});

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    var viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    var percentSizes = [];

    for (var match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      var smallestRatio = Math.min.apply(Math, percentSizes) * 0.01;
      return {
        widths: allSizes.filter(function (s) {
          return s >= configDeviceSizes[0] * smallestRatio;
        }),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  var widths = _toConsumableArray(new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(function (w) {
    return allSizes.find(function (p) {
      return p >= w;
    }) || allSizes[allSizes.length - 1];
  })));

  return {
    widths: widths,
    kind: 'x'
  };
}

function generateImgAttrs(_ref3) {
  var src = _ref3.src,
      unoptimized = _ref3.unoptimized,
      layout = _ref3.layout,
      width = _ref3.width,
      quality = _ref3.quality,
      sizes = _ref3.sizes,
      loader = _ref3.loader;

  if (unoptimized) {
    return {
      src: src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  var _getWidths = getWidths(width, layout, sizes),
      widths = _getWidths.widths,
      kind = _getWidths.kind;

  var last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map(function (w, i) {
      return "".concat(loader({
        src: src,
        quality: quality,
        width: w
      }), " ").concat(kind === 'w' ? w : i + 1).concat(kind);
    }).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src: src,
      quality: quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  var load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2["default"])({
      root: configPath
    }, loaderProps));
  }

  throw new Error("Unknown \"loader\" found in \"next.config.js\". Expected: ".concat(_imageConfig.VALID_LOADERS.join(', '), ". Received: ").concat(configLoader));
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function removePlaceholder(element, placeholder) {
  if (placeholder === 'blur' && element) {
    if (element.complete) {
      // If the real image fails to load, this will still remove the placeholder.
      // This is the desired behavior for now, and will be revisited when error
      // handling is worked on for the image component itself.
      element.style.backgroundImage = 'none';
    } else {
      element.onload = function () {
        element.style.backgroundImage = 'none';
      };
    }
  }
}

function Image(_ref) {
  var src = _ref.src,
      sizes = _ref.sizes,
      _ref$unoptimized = _ref.unoptimized,
      unoptimized = _ref$unoptimized === void 0 ? false : _ref$unoptimized,
      _ref$priority = _ref.priority,
      priority = _ref$priority === void 0 ? false : _ref$priority,
      loading = _ref.loading,
      className = _ref.className,
      quality = _ref.quality,
      width = _ref.width,
      height = _ref.height,
      objectFit = _ref.objectFit,
      objectPosition = _ref.objectPosition,
      _ref$loader = _ref.loader,
      loader = _ref$loader === void 0 ? defaultImageLoader : _ref$loader,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'empty' : _ref$placeholder,
      blurDataURL = _ref.blurDataURL,
      all = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader", "placeholder", "blurDataURL"]);
  var rest = all;
  var layout = sizes ? 'responsive' : 'intrinsic';
  var unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (!configEnableBlurryPlaceholder) {
    placeholder = 'empty';
  }

  if (true) {
    if (!src) {
      throw new Error("Image is missing required \"src\" property. Make sure you pass \"src\" in props to the `next/image` component. Received: ".concat(JSON.stringify({
        width: width,
        height: height,
        quality: quality
      })));
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"layout\" property. Provided \"").concat(layout, "\" should be one of ").concat(VALID_LAYOUT_VALUES.map(String).join(','), "."));
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error("Image with src \"".concat(src, "\" has invalid \"loading\" property. Provided \"").concat(loading, "\" should be one of ").concat(VALID_LOADING_VALUES.map(String).join(','), "."));
    }

    if (priority && loading === 'lazy') {
      throw new Error("Image with src \"".concat(src, "\" has both \"priority\" and \"loading='lazy'\" properties. Only one should be used."));
    }

    if (unsized) {
      throw new Error("Image with src \"".concat(src, "\" has deprecated \"unsized\" property, which was removed in favor of the \"layout='fill'\" property"));
    }
  }

  var isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  var _ref4 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  }),
      _ref5 = _slicedToArray(_ref4, 2),
      setRef = _ref5[0],
      isIntersected = _ref5[1];

  var isVisible = !isLazy || isIntersected;
  var widthInt = getInt(width);
  var heightInt = getInt(height);
  var qualityInt = getInt(quality);
  var MIN_IMG_SIZE_FOR_PLACEHOLDER = 5000;
  var tooSmallForBlurryPlaceholder = widthInt && heightInt && widthInt * heightInt < MIN_IMG_SIZE_FOR_PLACEHOLDER;
  var shouldShowBlurryPlaceholder = placeholder === 'blur' && !tooSmallForBlurryPlaceholder;
  var wrapperStyle;
  var sizerStyle;
  var sizerSvg;
  var imgStyle = (0, _extends2["default"])({
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit: objectFit,
    objectPosition: objectPosition
  }, shouldShowBlurryPlaceholder ? {
    backgroundSize: 'cover',
    backgroundImage: "url(\"".concat(blurDataURL, "\")")
  } : undefined);

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    var quotient = heightInt / widthInt;
    var paddingTop = isNaN(quotient) ? '100%' : "".concat(quotient * 100, "%");

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop: paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = "<svg width=\"".concat(widthInt, "\" height=\"").concat(heightInt, "\" xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\"/>");
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error("Image with src \"".concat(src, "\" must use \"width\" and \"height\" properties or \"layout='fill'\" property."));
    }
  }

  var imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src: src,
      unoptimized: unoptimized,
      layout: layout,
      width: widthInt,
      quality: qualityInt,
      sizes: sizes,
      loader: loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react["default"].createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react["default"].createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react["default"].createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: "data:image/svg+xml;base64,".concat((0, _toBase.toBase64)(sizerSvg))
  }) : null) : null, !isVisible && /*#__PURE__*/_react["default"].createElement("noscript", null, /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, generateImgAttrs({
    src: src,
    unoptimized: unoptimized,
    layout: layout,
    width: widthInt,
    quality: qualityInt,
    sizes: sizes,
    loader: loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react["default"].createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: function ref(element) {
      setRef(element);
      removePlaceholder(element, placeholder);
    },
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


_c = Image;

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader(_ref6) {
  var root = _ref6.root,
      src = _ref6.src,
      width = _ref6.width,
      quality = _ref6.quality;
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  var params = ['auto=format', 'fit=max', 'w=' + width];
  var paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return "".concat(root).concat(normalizeSrc(src)).concat(paramsString);
}

function akamaiLoader(_ref7) {
  var root = _ref7.root,
      src = _ref7.src,
      width = _ref7.width;
  return "".concat(root).concat(normalizeSrc(src), "?imwidth=").concat(width);
}

function cloudinaryLoader(_ref8) {
  var root = _ref8.root,
      src = _ref8.src,
      width = _ref8.width,
      quality = _ref8.quality;
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  var params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  var paramsString = params.join(',') + '/';
  return "".concat(root).concat(paramsString).concat(normalizeSrc(src));
}

function defaultLoader(_ref9) {
  var root = _ref9.root,
      src = _ref9.src,
      width = _ref9.width,
      quality = _ref9.quality;

  if (true) {
    var missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error("Next Image Optimization requires ".concat(missingValues.join(', '), " to be provided. Make sure you pass them as props to the `next/image` component. Received: ").concat(JSON.stringify({
        src: src,
        width: width,
        quality: quality
      })));
    }

    if (src.startsWith('//')) {
      throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)"));
    }

    if (!src.startsWith('/') && configDomains) {
      var parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error("Failed to parse src \"".concat(src, "\" on `next/image`, if using relative image it must start with a leading slash \"/\" or be an absolute URL (http:// or https://)"));
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error("Invalid src prop (".concat(src, ") on `next/image`, hostname \"").concat(parsedSrc.hostname, "\" is not configured under images in your `next.config.js`\n") + "See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host");
      }
    }
  }

  return "".concat(root, "?url=").concat(encodeURIComponent(src), "&w=").concat(width, "&q=").concat(quality || 75);
}

var _c;

$RefreshReg$(_c, "Image");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$();

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

var prefetched = {};

function prefetch(router, href, as, options) {
  if ( false || !router) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale,
    scroll: scroll
  });
}

function Link(props) {
  _s();

  if (true) {
    var createPropError = function createPropError(args) {
      return new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + (true ? "\nOpen your browser's console to view the Component stack trace." : undefined));
    }; // TypeScript trick for type-guarding:


    var requiredPropsGuard = {
      href: true
    };
    var requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(function (key) {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // TypeScript trick for type-guarding:

    var optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    var optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(function (key) {
      var valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key: key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key: key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var hasWarned = _react["default"].useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  var p = props.prefetch !== false;
  var router = (0, _router2.useRouter)();
  var pathname = router && router.asPath || '/';

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _ref = (0, _router.resolveHref)(pathname, props.href, true),
        _ref2 = _slicedToArray(_ref, 2),
        resolvedHref = _ref2[0],
        resolvedAs = _ref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child = _react.Children.only(children);

  var childRef = child && typeof child === 'object' && child.ref;

  var _ref3 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  }),
      _ref4 = _slicedToArray(_ref3, 2),
      setIntersectionRef = _ref4[0],
      isVisible = _ref4[1];

  var setRef = _react["default"].useCallback(function (el) {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(function () {
    var shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = function (e) {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

_s(Link, "7cX92ILFgstKFyzTMH+g73G4t5k=");

_c = Link;
var _default = Link;
exports["default"] = _default;

var _c;

$RefreshReg$(_c, "Link");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _slicedToArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/Contacts/Contacts.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Footer/Contacts/Contacts.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Contacts_contacts__3QBS2 span {\n  font-size: 1rem !important;\n}\n\n.Contacts_socialsContainer__29zdM {\n  margin-left: 10px;\n  margin-top: 25px;\n  margin-bottom: 20px;\n  max-width: 160px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n}\n@media screen and (max-width: 767px) {\n  .Contacts_socialsContainer__29zdM {\n    width: 160px;\n    padding-right: 0;\n  }\n}\n.Contacts_socialsContainer__29zdM .Contacts_socialItem__3ANjP {\n  width: 30px;\n  height: 30px;\n}\n.Contacts_socialsContainer__29zdM .Contacts_socialItem__3ANjP img {\n  width: 100%;\n  height: auto;\n}\n\n.Contacts_facebookLike__3yIA1 {\n  margin-left: 10px;\n}\n\n.Contacts_storeButtons__2kcOK > div {\n  margin-top: 5px;\n}", "",{"version":3,"sources":["webpack://Contacts.module.scss"],"names":[],"mappings":"AACE;EACE,0BAAA;AAAJ;;AAIA;EACE,iBAAA;EACA,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,8BAAA;EACA,mBAAA;AADF;AAGE;EATF;IAUI,YAAA;IACA,gBAAA;EAAF;AACF;AAEE;EACE,WAAA;EACA,YAAA;AAAJ;AAEI;EACE,WAAA;EACA,YAAA;AAAN;;AAKA;EACE,iBAAA;AAFF;;AAME;EACE,eAAA;AAHJ","sourcesContent":[".contacts {\r\n  span {\r\n    font-size: 1rem !important;\r\n  }\r\n}\r\n\r\n.socialsContainer {\r\n  margin-left: 10px;\r\n  margin-top: 25px;\r\n  margin-bottom: 20px;\r\n  max-width: 160px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n\r\n  @media screen and (max-width: 767px) {\r\n    width: 160px;\r\n    padding-right: 0;\r\n  }\r\n\r\n  .socialItem {\r\n    width: 30px;\r\n    height: 30px;\r\n\r\n    img {\r\n      width: 100%;\r\n      height: auto;\r\n    }\r\n  }\r\n}\r\n\r\n.facebookLike {\r\n  margin-left: 10px;\r\n}\r\n\r\n.storeButtons {\r\n  > div {\r\n    margin-top: 5px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"contacts": "Contacts_contacts__3QBS2",
	"socialsContainer": "Contacts_socialsContainer__29zdM",
	"socialItem": "Contacts_socialItem__3ANjP",
	"facebookLike": "Contacts_facebookLike__3yIA1",
	"storeButtons": "Contacts_storeButtons__2kcOK"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/Content/Content.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Footer/Content/Content.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Content_list__2Mz7T {\n  margin: 0 15px 50px 15px;\n}\n@media screen and (max-width: 991px) {\n  .Content_list__2Mz7T {\n    margin-left: 0;\n  }\n}\n@media screen and (max-width: 767px) {\n  .Content_list__2Mz7T .Content_item___P4mC {\n    max-width: 120px;\n  }\n}\n.Content_list__2Mz7T h5 {\n  font-weight: 800;\n  margin-bottom: 10px;\n}", "",{"version":3,"sources":["webpack://Content.module.scss"],"names":[],"mappings":"AAAA;EACE,wBAAA;AACF;AACE;EAHF;IAII,cAAA;EAEF;AACF;AADE;EACE;IACE,gBAAA;EAGJ;AACF;AAAE;EACE,gBAAA;EACA,mBAAA;AAEJ","sourcesContent":[".list {\r\n  margin: 0 15px 50px 15px;\r\n\r\n  @media screen and (max-width: 991px) {\r\n    margin-left: 0;\r\n  }\r\n  @media screen and (max-width: 767px) {\r\n    .item {\r\n      max-width: 120px;\r\n    }\r\n  }\r\n\r\n  h5 {\r\n    font-weight: 800;\r\n    margin-bottom: 10px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"list": "Content_list__2Mz7T",
	"item": "Content_item___P4mC"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/Footer.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Footer/Footer.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Footer_footer__1_KSh {\n  margin-top: 80px;\n}\n\n.Footer_footerInner__3jjAm {\n  width: 100%;\n}\n\n.Footer_downloadApp__3RC8- {\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n\n.Footer_curve__2vu8l {\n  width: calc(100vw + 2px);\n  margin-left: -1px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  max-height: 102px;\n}\n.Footer_curve__2vu8l > div {\n  width: 100vw;\n}\n.Footer_curve__2vu8l img {\n  width: 100%;\n  height: auto;\n}\n.Footer_curve__2vu8l.Footer_absolute__cHmQU {\n  position: absolute;\n  bottom: 80px;\n  z-index: -1;\n}\n\n.Footer_content__QH-B3 {\n  margin-top: -2px;\n  background-color: var(--color-navy);\n}\n.Footer_content__QH-B3.Footer_paddedContent__1B2y3 {\n  margin-top: -82px;\n  padding-bottom: 80px;\n  padding-top: 80px;\n}\n.Footer_content__QH-B3 .Footer_contentInner__1OOGA {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 80px 15px 50px 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n@media screen and (max-width: 767px) {\n  .Footer_content__QH-B3 .Footer_contentInner__1OOGA {\n    padding: 50px 15px 100px 15px;\n  }\n}\n.Footer_content__QH-B3 .Footer_contentInner__1OOGA.Footer_useCompact__1ZEQN {\n  max-width: 1200px;\n  padding-top: 50px;\n}\n@media screen and (max-width: 440px) {\n  .Footer_content__QH-B3 .Footer_contentInner__1OOGA.Footer_useCompact__1ZEQN {\n    padding-top: 40px;\n    display: flex;\n    justify-content: center;\n  }\n}\n.Footer_content__QH-B3 a, .Footer_content__QH-B3 p, .Footer_content__QH-B3 h5, .Footer_content__QH-B3 span {\n  white-space: pre-wrap;\n}\n.Footer_content__QH-B3 p, .Footer_content__QH-B3 h5, .Footer_content__QH-B3 span {\n  color: white;\n}\n.Footer_content__QH-B3 h5 {\n  font-weight: 700;\n}", "",{"version":3,"sources":["webpack://Footer.module.scss"],"names":[],"mappings":"AAGA;EACE,gBAAA;AAFF;;AAKA;EACE,WAAA;AAFF;;AAKA;EACE,kBAAA;EACA,aAAA;EACA,uBAAA;AAFF;;AAKA;EACE,wBAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,qBAAA;EACA,iBAAA;AAFF;AAIE;EACE,YAAA;AAFJ;AAKE;EACE,WAAA;EACA,YAAA;AAHJ;AAME;EACE,kBAAA;EACA,YAnCiB;EAoCjB,WAAA;AAJJ;;AAQA;EACE,gBAAA;EACA,mCAAA;AALF;AAOE;EACE,iBAAA;EACA,oBA9CiB;EA+CjB,iBA/CiB;AA0CrB;AAQE;EACE,iBAAA;EACA,cAAA;EACA,4BAAA;EACA,aAAA;EACA,eAAA;EACA,6BAAA;AANJ;AAQI;EARF;IASI,6BAAA;EALJ;AACF;AAOI;EACE,iBAAA;EACA,iBAAA;AALN;AAOM;EAJF;IAKI,iBAAA;IACA,aAAA;IACA,uBAAA;EAJN;AACF;AAQE;EACE,qBAAA;AANJ;AAUE;EACE,YAAA;AARJ;AAYE;EACE,gBAAA;AAVJ","sourcesContent":["\r\n$downloadAppPadding: 80px;\r\n\r\n.footer {\r\n  margin-top: 80px;\r\n}\r\n\r\n.footerInner {\r\n  width: 100%;\r\n}\r\n\r\n.downloadApp {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.curve {\r\n  width: calc(100vw + 2px);\r\n  margin-left: -1px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n  max-height: 102px;\r\n\r\n  > div {\r\n    width: 100vw;\r\n  }\r\n\r\n  img {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  &.absolute {\r\n    position: absolute;\r\n    bottom: $downloadAppPadding;\r\n    z-index: -1;\r\n  }\r\n}\r\n\r\n.content {\r\n  margin-top: -2px;\r\n  background-color: var(--color-navy);\r\n\r\n  &.paddedContent {\r\n    margin-top: -$downloadAppPadding - 2px;\r\n    padding-bottom: $downloadAppPadding;\r\n    padding-top: $downloadAppPadding;\r\n  }\r\n\r\n  .contentInner {\r\n    max-width: 1000px;\r\n    margin: 0 auto;\r\n    padding: 80px 15px 50px 15px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n\r\n    @media screen and (max-width: 767px) {\r\n      padding: 50px 15px 100px 15px;\r\n    }\r\n\r\n    &.useCompact {\r\n      max-width: 1200px;\r\n      padding-top: 50px;\r\n\r\n      @media screen and (max-width: 440px) {\r\n        padding-top: 40px;\r\n        display: flex;\r\n        justify-content: center;\r\n      }\r\n    }\r\n  }\r\n\r\n  a, p, h5, span {\r\n    white-space: pre-wrap;\r\n    // @extend %normal-text-template;\r\n  }\r\n\r\n  p, h5, span {\r\n    color: white;\r\n  }\r\n  \r\n\r\n  h5 {\r\n    font-weight: 700;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footer": "Footer_footer__1_KSh",
	"footerInner": "Footer_footerInner__3jjAm",
	"downloadApp": "Footer_downloadApp__3RC8-",
	"curve": "Footer_curve__2vu8l",
	"absolute": "Footer_absolute__cHmQU",
	"content": "Footer_content__QH-B3",
	"paddedContent": "Footer_paddedContent__1B2y3",
	"contentInner": "Footer_contentInner__1OOGA",
	"useCompact": "Footer_useCompact__1ZEQN"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/FooterLink/FooterLink.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Footer/FooterLink/FooterLink.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".FooterLink_item__2-i_T {\n  display: flex;\n  max-width: 230px;\n  margin-bottom: 10px;\n}\n.FooterLink_item__2-i_T .FooterLink_image__1ap4_ {\n  margin-right: 10px;\n  min-width: 20px;\n  -webkit-transform: translateY(1px);\n          transform: translateY(1px);\n}\n.FooterLink_item__2-i_T a {\n  -webkit-text-decoration-color: white;\n          text-decoration-color: white;\n}", "",{"version":3,"sources":["webpack://FooterLink.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,gBAAA;EACA,mBAAA;AACF;AACE;EACE,kBAAA;EACA,eAAA;EACA,kCAAA;UAAA,0BAAA;AACJ;AAEE;EACE,oCAAA;UAAA,4BAAA;AAAJ","sourcesContent":[".item {\r\n  display: flex;\r\n  max-width: 230px;\r\n  margin-bottom: 10px;\r\n\r\n  .image {\r\n    margin-right: 10px;\r\n    min-width: 20px;\r\n    transform: translateY(1px);\r\n  }\r\n\r\n  a {\r\n    text-decoration-color: white;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"item": "FooterLink_item__2-i_T",
	"image": "FooterLink_image__1ap4_"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/MasFooter/MasFooter.module.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Footer/MasFooter/MasFooter.module.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".MasFooter_masFooter__T3eyU {\n  margin-top: 40px;\n  width: 100%;\n}\n@media screen and (max-width: 767px) {\n  .MasFooter_masFooter__T3eyU {\n    margin-top: 20px;\n  }\n}", "",{"version":3,"sources":["webpack://MasFooter.module.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,WAAA;AACF;AACE;EAJF;IAKI,gBAAA;EAEF;AACF","sourcesContent":[".masFooter {\r\n  margin-top: 40px;\r\n  width: 100%;\r\n\r\n  @media screen and (max-width: 767px) {\r\n    margin-top: 20px;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"masFooter": "MasFooter_masFooter__T3eyU"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/StoreButtons/StoreButtons.module.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-3-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-3-2!(webpack)/resolve-url-loader??ref--5-oneOf-3-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-3-4!./src/components/Footer/StoreButtons/StoreButtons.module.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".StoreButtons_storeButtons__1IwnL {\n  max-width: 330px;\n  display: flex;\n  justify-content: space-between;\n}\n@media screen and (max-width: 767px) {\n  .StoreButtons_storeButtons__1IwnL {\n    margin: auto;\n  }\n}\n@media screen and (max-width: 450px) {\n  .StoreButtons_storeButtons__1IwnL {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n.StoreButtons_storeButtons__1IwnL.StoreButtons_small__310-K {\n  max-width: 270px;\n}\n@media screen and (max-width: 767px) {\n  .StoreButtons_storeButtons__1IwnL.StoreButtons_small__310-K {\n    margin: 0;\n    max-width: 250px;\n  }\n}\n@media screen and (max-width: 450px) {\n  .StoreButtons_storeButtons__1IwnL.StoreButtons_small__310-K {\n    flex-direction: row !important;\n  }\n}\n.StoreButtons_storeButtons__1IwnL.StoreButtons_small__310-K a {\n  max-width: 110px;\n  margin-bottom: 0 !important;\n  border-radius: 5px;\n}\n.StoreButtons_storeButtons__1IwnL.StoreButtons_small__310-K a:nth-of-type(2) {\n  max-width: 125px;\n  margin-left: 10px;\n}\n.StoreButtons_storeButtons__1IwnL a {\n  max-width: 150px;\n  border-radius: 10px;\n}\n.StoreButtons_storeButtons__1IwnL a img {\n  width: 100%;\n}\n@media screen and (max-width: 450px) {\n  .StoreButtons_storeButtons__1IwnL a:nth-of-type(1) {\n    margin-bottom: 10px;\n  }\n}\n.StoreButtons_storeButtons__1IwnL a:nth-of-type(2) {\n  max-width: 165px;\n}\n@media screen and (max-width: 450px) {\n  .StoreButtons_storeButtons__1IwnL a:nth-of-type(2) {\n    max-width: 150px;\n  }\n}", "",{"version":3,"sources":["webpack://StoreButtons.module.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,aAAA;EACA,8BAAA;AACF;AACE;EALF;IAMI,YAAA;EAEF;AACF;AADE;EARF;IASI,sBAAA;IACA,mBAAA;EAIF;AACF;AAFE;EACE,gBAAA;AAIJ;AAFI;EAHF;IAII,SAAA;IACA,gBAAA;EAKJ;AACF;AAJI;EAPF;IAQI,8BAAA;EAOJ;AACF;AALI;EACE,gBAAA;EACA,2BAAA;EACA,kBAAA;AAON;AALM;EACE,gBAAA;EACA,iBAAA;AAOR;AAFE;EACE,gBAAA;EACA,mBAAA;AAIJ;AAAI;EACE,WAAA;AAEN;AAGM;EADF;IAEI,mBAAA;EAAN;AACF;AAGI;EACE,gBAAA;AADN;AAGM;EAHF;IAII,gBAAA;EAAN;AACF","sourcesContent":[".storeButtons {\r\n  max-width: 330px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  @media screen and (max-width: 767px) {\r\n    margin: auto;\r\n  }\r\n  @media screen and (max-width: 450px) {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  &.small {\r\n    max-width: 270px;\r\n\r\n    @media screen and (max-width: 767px) {\r\n      margin: 0;\r\n      max-width: 250px;\r\n    }\r\n    @media screen and (max-width: 450px) {\r\n      flex-direction: row !important;\r\n    }\r\n\r\n    a {\r\n      max-width: 110px;\r\n      margin-bottom: 0 !important;\r\n      border-radius: 5px;\r\n\r\n      &:nth-of-type(2) {\r\n        max-width: 125px;\r\n        margin-left: 10px;\r\n      }\r\n    }\r\n  }\r\n\r\n  a {\r\n    max-width: 150px;\r\n    border-radius: 10px;\r\n    // @media screen and (max-width: 450px) {\r\n    //   max-width: 120px;\r\n    // }\r\n    img {\r\n      width: 100%;\r\n      // height: 100%;\r\n    }\r\n\r\n    &:nth-of-type(1) {\r\n      @media screen and (max-width: 450px) {\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n\r\n    &:nth-of-type(2) {\r\n      max-width: 165px;\r\n\r\n      @media screen and (max-width: 450px) {\r\n        max-width: 150px;\r\n      }\r\n    }\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"storeButtons": "StoreButtons_storeButtons__1IwnL",
	"small": "StoreButtons_small__310-K"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/to-base-64.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/to-base-64.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.toBase64 = toBase64;
/**
* Isomorphic base64 that works on the server and client
*/

function toBase64(str) {
  if (false) {} else {
    return window.btoa(str);
  }
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/image-config.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/image-config.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.imageConfigDefault=exports.VALID_LOADERS=void 0;const VALID_LOADERS=['default','imgix','cloudinary','akamai'];exports.VALID_LOADERS=VALID_LOADERS;const imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:'/_next/image',loader:'default',domains:[],enableBlurryPlaceholder:false};exports.imageConfigDefault=imageConfigDefault;
//# sourceMappingURL=image-config.js.map

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!*****************************************!*\
  !*** ./src/assets/images sync ^\.\/.*$ ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app": "./src/assets/images/app.ts",
	"./app.ts": "./src/assets/images/app.ts",
	"./common": "./src/assets/images/common.ts",
	"./common.ts": "./src/assets/images/common.ts",
	"./icons": "./src/assets/images/icons.ts",
	"./icons.ts": "./src/assets/images/icons.ts",
	"./mock": "./src/assets/images/mock.ts",
	"./mock.ts": "./src/assets/images/mock.ts",
	"./navigation": "./src/assets/images/navigation.ts",
	"./navigation.ts": "./src/assets/images/navigation.ts",
	"./product": "./src/assets/images/product.ts",
	"./product.ts": "./src/assets/images/product.ts",
	"./socials": "./src/assets/images/socials.ts",
	"./socials.ts": "./src/assets/images/socials.ts",
	"./vercel": "./src/assets/images/vercel.ts",
	"./vercel.ts": "./src/assets/images/vercel.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/app.ts":
/*!**********************************!*\
  !*** ./src/assets/images/app.ts ***!
  \**********************************/
/*! exports provided: app_store_badge, play_store_badge */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "app_store_badge", function() { return app_store_badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "play_store_badge", function() { return play_store_badge; });
var app_store_badge = {
  src: '/static/images/app/app_store_badge.png',
  alt: 'Download PolicyPal App on Apple Store',
  width: 198,
  height: 66
};
var play_store_badge = {
  src: '/static/images/app/google_play_badge.png',
  alt: 'Download PolicyPal App on Google Play Store',
  width: 219,
  height: 66
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/assets/images/common.ts":
/*!*************************************!*\
  !*** ./src/assets/images/common.ts ***!
  \*************************************/
/*! exports provided: subscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
var subscribe = {
  src: '/static/images/common/subscribe.png',
  alt: 'Download PolicyPal App to get covered',
  width: 343,
  height: 418
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/assets/images/icons.ts":
/*!************************************!*\
  !*** ./src/assets/images/icons.ts ***!
  \************************************/
/*! exports provided: email, location, phone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "location", function() { return location; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phone", function() { return phone; });
var email = {
  src: '/static/images/icons/email.svg',
  alt: 'Email',
  width: 19,
  height: 14
};
var location = {
  src: '/static/images/icons/location.svg',
  alt: 'Location',
  width: 15,
  height: 18
};
var phone = {
  src: '/static/images/icons/phone.svg',
  alt: 'Phone',
  width: 16,
  height: 16
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/assets/images/mock.ts":
/*!***********************************!*\
  !*** ./src/assets/images/mock.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var test = {
  src: '/static/images/test/dummy.svg',
  alt: 'Dummy Image',
  layout: 'responsive',
  width: 283,
  height: 64
};
module.exports = {
  test: test
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/module.js */ "./node_modules/next/dist/compiled/webpack/module.js")(module)))

/***/ }),

/***/ "./src/assets/images/navigation.ts":
/*!*****************************************!*\
  !*** ./src/assets/images/navigation.ts ***!
  \*****************************************/
/*! exports provided: footer_bg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer_bg", function() { return footer_bg; });
var footer_bg = {
  src: '/static/images/navigation/footer_bg.svg',
  alt: 'Footer',
  width: 1920,
  height: 115
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/assets/images/product.ts":
/*!**************************************!*\
  !*** ./src/assets/images/product.ts ***!
  \**************************************/
/*! exports provided: simple_critical_illness, simple_endowment, simple_health, simple_more, simple_motor, simple_personal_accident, simple_pet, simple_retirement, simple_term_life, simple_travel, simple_whole_life */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simple_critical_illness", function() { return simple_critical_illness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simple_endowment", function() { return simple_endowment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simple_health", function() { return simple_health; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simple_more", function() { return simple_more; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simple_motor", function() { return simple_motor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simple_personal_accident", function() { return simple_personal_accident; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simple_pet", function() { return simple_pet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simple_retirement", function() { return simple_retirement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simple_term_life", function() { return simple_term_life; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simple_travel", function() { return simple_travel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simple_whole_life", function() { return simple_whole_life; });
var simple_critical_illness = {
  src: '/static/images/product/simple_critical_illness.svg',
  alt: 'Critical Illness Insurance - PolicyPal',
  width: 187,
  height: 187
};
var simple_endowment = {
  src: '/static/images/product/simple_endowment.svg',
  alt: 'Endowment/Savings Insurance - PolicyPal',
  width: 187,
  height: 187
};
var simple_health = {
  src: '/static/images/product/simple_health.svg',
  alt: 'Integrated Shield Plans - PolicyPal',
  width: 187,
  height: 187
};
var simple_more = {
  src: '/static/images/product/simple_more.svg',
  alt: 'More Insurance - PolicyPal',
  width: 187,
  height: 187
};
var simple_motor = {
  src: '/static/images/product/simple_motor.svg',
  alt: 'Motor Insurance - PolicyPal',
  width: 187,
  height: 187
};
var simple_personal_accident = {
  src: '/static/images/product/simple_personal_accident.svg',
  alt: 'Personal Accident Insurance - PolicyPal',
  width: 187,
  height: 187
};
var simple_pet = {
  src: '/static/images/product/simple_pet.svg',
  alt: 'Pet Insurance - PolicyPal',
  width: 187,
  height: 187
};
var simple_retirement = {
  src: '/static/images/product/simple_retirement.svg',
  alt: 'Annuity Plans - PolicyPal',
  width: 187,
  height: 187
};
var simple_term_life = {
  src: '/static/images/product/simple_term_life.svg',
  alt: 'Term Life Insurance - PolicyPal',
  width: 187,
  height: 187
};
var simple_travel = {
  src: '/static/images/product/simple_travel.svg',
  alt: 'Travel Insurance - PolicyPal',
  width: 187,
  height: 187
};
var simple_whole_life = {
  src: '/static/images/product/simple_whole_life.svg',
  alt: 'Whole Life Insurance - PolicyPal',
  width: 187,
  height: 187
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/assets/images/socials.ts":
/*!**************************************!*\
  !*** ./src/assets/images/socials.ts ***!
  \**************************************/
/*! exports provided: facebook, instagram, linkedin, youtube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facebook", function() { return facebook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instagram", function() { return instagram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linkedin", function() { return linkedin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "youtube", function() { return youtube; });
var facebook = {
  src: '/static/images/socials/facebook.svg',
  alt: 'Facebook',
  width: 37,
  height: 38
};
var instagram = {
  src: '/static/images/socials/instagram.svg',
  alt: 'Instagram',
  width: 37,
  height: 38
};
var linkedin = {
  src: '/static/images/socials/linkedin.svg',
  alt: 'Linkedin',
  width: 37,
  height: 38
};
var youtube = {
  src: '/static/images/socials/youtube.svg',
  alt: 'Youtube',
  width: 37,
  height: 37
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/assets/images/vercel.ts":
/*!*************************************!*\
  !*** ./src/assets/images/vercel.ts ***!
  \*************************************/
/*! exports provided: vercel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vercel", function() { return vercel; });
var vercel = {
  src: '/static/images/vercel/vercel.svg',
  alt: 'Vercel',
  // layout: 'responsive',
  width: 72,
  height: 16
}; // export const download: ImageProps = {
//   src: require('./download.png'),
//   alt: 'Vercel',
//   // layout: 'responsive',
//   width: 72,
//   height: 16,
// };
// const data: Record<string, ImageProps> = {
//   vercel: {
//     src: require('./vercel.svg'),
//     alt: 'Vercel',
//     layout: 'responsive',
//     width: 283,
//     height: 64,
//   },
// };
// export default data;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/AppAnchor/AppAnchor.tsx":
/*!************************************************!*\
  !*** ./src/components/AppAnchor/AppAnchor.tsx ***!
  \************************************************/
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




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\AppAnchor\\AppAnchor.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var AppAnchor = function AppAnchor(_ref) {
  var children = _ref.children,
      href = _ref.href,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children", "href"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", _objectSpread(_objectSpread({}, props), {}, {
    href: href === null || href === void 0 ? void 0 : href.toString(),
    target: "__blank",
    rel: "noopener noreferrer",
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, _this);
};

_c = AppAnchor;
/* harmony default export */ __webpack_exports__["default"] = (AppAnchor);

var _c;

$RefreshReg$(_c, "AppAnchor");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/AppAnchor/index.tsx":
/*!********************************************!*\
  !*** ./src/components/AppAnchor/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _AppAnchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppAnchor */ "./src/components/AppAnchor/AppAnchor.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AppAnchor__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/AppLink/AppLink.tsx":
/*!********************************************!*\
  !*** ./src/components/AppLink/AppLink.tsx ***!
  \********************************************/
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lib_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/navigation */ "./src/lib/navigation/index.ts");




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\AppLink\\AppLink.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var AppLink = function AppLink(_ref) {
  _s();

  var children = _ref.children,
      href = _ref.href,
      props = Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children", "href"]);

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(),
      pathname = _useRouter.pathname;

  if (Object(lib_navigation__WEBPACK_IMPORTED_MODULE_6__["isThemeSwitch"])(pathname, href.toString())) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", _objectSpread(_objectSpread({}, props), {}, {
      href: href.toString(),
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, _objectSpread(_objectSpread({}, props), {}, {
    href: href,
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(AppLink, "QpP2vYJstxsDz0K+Qwttl8PPVoY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = AppLink;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["memo"])(AppLink));

var _c, _c2;

$RefreshReg$(_c, "AppLink");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/AppLink/index.tsx":
/*!******************************************!*\
  !*** ./src/components/AppLink/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _AppLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppLink */ "./src/components/AppLink/AppLink.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _AppLink__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Footer/Contacts/Contacts.module.scss":
/*!*************************************************************!*\
  !*** ./src/components/Footer/Contacts/Contacts.module.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Contacts.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/Contacts/Contacts.module.scss");

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
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Contacts.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/Contacts/Contacts.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Contacts.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/Contacts/Contacts.module.scss");

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

/***/ "./src/components/Footer/Contacts/Contacts.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Footer/Contacts/Contacts.tsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var constants_company__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/company */ "./src/constants/company.ts");
/* harmony import */ var constants_tracking_buttons_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants/tracking/buttons/footer */ "./src/constants/tracking/buttons/footer.ts");
/* harmony import */ var components_AppAnchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/AppAnchor */ "./src/components/AppAnchor/index.tsx");
/* harmony import */ var _FooterLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../FooterLink */ "./src/components/Footer/FooterLink/index.tsx");
/* harmony import */ var _FacebookLike__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FacebookLike */ "./src/components/Footer/FacebookLike/index.tsx");
/* harmony import */ var _StoreButtons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../StoreButtons */ "./src/components/Footer/StoreButtons/index.tsx");
/* harmony import */ var _Contacts_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Contacts.module.scss */ "./src/components/Footer/Contacts/Contacts.module.scss");
/* harmony import */ var _Contacts_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Contacts_module_scss__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Footer\\Contacts\\Contacts.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var Contacts = function Contacts(_ref) {
  var themeSetting = _ref.themeSetting;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Contacts_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contacts,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Contacts_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contact,
      children: (themeSetting.theme === 'ppt' ? constants_company__WEBPACK_IMPORTED_MODULE_4__["contactPPTArray"] : constants_company__WEBPACK_IMPORTED_MODULE_4__["contactPPSArray"]).map(function (contact) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FooterLink__WEBPACK_IMPORTED_MODULE_7__["default"], {
          data: contact,
          type: "contact"
        }, contact.text, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 9
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }, _this), themeSetting.theme === 'ppt' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Contacts_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.socialsContainer,
        children: constants_company__WEBPACK_IMPORTED_MODULE_4__["socialsArray"].map(function (social, index) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Contacts_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.socialItem,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_AppAnchor__WEBPACK_IMPORTED_MODULE_6__["default"], {
              id: constants_tracking_buttons_footer__WEBPACK_IMPORTED_MODULE_5__["default"].NAV_FOOTER_SOCIAL.id.replace('xxx', social.key),
              href: social.href,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread({}, social.img), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 15
            }, _this)
          }, "social-".concat(index), false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Contacts_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.facebookLike,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FacebookLike__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Contacts_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.storeButtons,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
          children: "MOBILE APP"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_StoreButtons__WEBPACK_IMPORTED_MODULE_9__["default"], {
          smallerButtons: true
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, _this);
};

_c = Contacts;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(Contacts));

var _c, _c2;

$RefreshReg$(_c, "Contacts");
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

/***/ "./src/components/Footer/Contacts/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/Footer/Contacts/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contacts */ "./src/components/Footer/Contacts/Contacts.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Contacts__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./src/components/Footer/Content/Content.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/Footer/Content/Content.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Content.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/Content/Content.module.scss");

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
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Content.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/Content/Content.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Content.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/Content/Content.module.scss");

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

/***/ "./src/components/Footer/Content/Content.tsx":
/*!***************************************************!*\
  !*** ./src/components/Footer/Content/Content.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/products */ "./src/constants/products.ts");
/* harmony import */ var _Footer_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Footer.content */ "./src/components/Footer/Footer.content.ts");
/* harmony import */ var _FooterLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FooterLink */ "./src/components/Footer/FooterLink/index.tsx");
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Content.module.scss */ "./src/components/Footer/Content/Content.module.scss");
/* harmony import */ var _Content_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Content_module_scss__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Footer\\Content\\Content.tsx",
    _this = undefined;







var Content = function Content(_ref) {
  var themeSetting = _ref.themeSetting;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: _Footer_content__WEBPACK_IMPORTED_MODULE_3__["listContent"][themeSetting.theme].map(function (l) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Content_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.list,
        children: ((l.title === 'PRODUCTS' ? constants_products__WEBPACK_IMPORTED_MODULE_2__["products"] : l.data) || []).map(function (d, i) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_FooterLink__WEBPACK_IMPORTED_MODULE_4__["default"], {
            data: d,
            type: l.title === 'PRODUCTS' ? 'product' : 'contact'
          }, "footer-link-".concat(i), false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this);
        })
      }, l.title, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }, _this);
    })
  }, void 0, false);
};

_c = Content;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(Content));

var _c, _c2;

$RefreshReg$(_c, "Content");
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

/***/ "./src/components/Footer/Content/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/Footer/Content/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ "./src/components/Footer/Content/Content.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Content__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./src/components/Footer/FacebookLike/FacebookLike.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Footer/FacebookLike/FacebookLike.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants_company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/company */ "./src/constants/company.ts");


var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Footer\\FacebookLike\\FacebookLike.tsx",
    _this = undefined,
    _s = $RefreshSig$();

/**
 * FacebookLike.js
 * Component for Facebook Like Button
 *
 * @version 0.0.1
 * @author [Nicolette Chan](nicolette@policypal.com)
 */



var FacebookLike = function FacebookLike() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    try {
      // @ts-expect-error - Facebook API
      if (window.FB) {
        // @ts-expect-error - Facebook API
        window.FB.XFBML.parse();
      }
    } catch (error) {// eslint-disable-next-line
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    "data-href": constants_company__WEBPACK_IMPORTED_MODULE_2__["socials"].facebook.href,
    "data-layout": "button_count",
    "data-action": "like",
    "data-width": "400",
    "data-size": "large",
    "data-show-faces": "false",
    "data-share": "false"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(FacebookLike, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = FacebookLike;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(FacebookLike));

var _c, _c2;

$RefreshReg$(_c, "FacebookLike");
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

/***/ "./src/components/Footer/FacebookLike/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/Footer/FacebookLike/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _FacebookLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FacebookLike */ "./src/components/Footer/FacebookLike/FacebookLike.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FacebookLike__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./src/components/Footer/Footer.content.ts":
/*!*************************************************!*\
  !*** ./src/components/Footer/Footer.content.ts ***!
  \*************************************************/
/*! exports provided: downloadAppData, listContent, masFooter, compactData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadAppData", function() { return downloadAppData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listContent", function() { return listContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "masFooter", function() { return masFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compactData", function() { return compactData; });
/* harmony import */ var constants_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/routes */ "./src/constants/routes.ts");
/* harmony import */ var constants_company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/company */ "./src/constants/company.ts");


var moreTabList = [{
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].claims.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].claims.url
}];
var moreTabListPPT = [{
  text: 'Our Mission',
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].about.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].member_benefits.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].member_benefits.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].referral.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].referral.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].giveback.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].giveback.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].service_standard.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].service_standard.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].career.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].career.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].partnership.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].partnership.url
} // { text: routes.fa_dashboard.desc, href: routes.fa_dashboard.url },
];
var resourcesList = [{
  text: 'Blog/ Resources',
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].blog.url,
  type: 'external'
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].book.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].book.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].press.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].press.url
}];
var footerListPPT = [{
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].tosPPT.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].tosPPT.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].privacypolicyPPT.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].privacypolicyPPT.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].security.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].security.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].disclaimerPPT.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].disclaimerPPT.url
}];
var footerListPPFA = [{
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].tosPPFA.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].tosPPFA.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].privacypolicyPPFA.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].privacypolicyPPFA.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].fairDealingStatementPPFA.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].fairDealingStatementPPFA.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].security.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].security.url
}, {
  text: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].disclaimerPPFA.desc,
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].disclaimerPPFA.url
}];
var year = new Date().getFullYear();
var downloadAppData = {
  title: 'Download our app & earn $10 PolicyPal Credits!',
  desc: "With PolicyPal, your all-in-one insurance platform, embark on your journey to manage your insurance digitally, wherever you are.\n\nStart your journey with $10 PolicyPal Credits by signing up with our referral code <strong>POLICYPAL10</strong>."
};
var listContent = {
  ppt: [{
    title: 'COMPANY',
    data: moreTabListPPT
  }, {
    title: 'RESOURCES',
    data: resourcesList
  }],
  ppfa: [{
    title: 'PRODUCTS'
  }, {
    title: 'SUPPORT',
    data: moreTabList
  }]
};
var masFooter = {
  ppt: "".concat(footerListPPT.map(function (f) {
    return "<a href=\"".concat(f.href, "\" target=\"__blank\">").concat(f.text, "</a>");
  }).join(' | '), "\n\xA9 ").concat(year, " ").concat(constants_company__WEBPACK_IMPORTED_MODULE_1__["PPT_ENTITY"], " All Rights Reserved."),
  ppfa: "".concat(constants_company__WEBPACK_IMPORTED_MODULE_1__["PPFA_ENTITY"], " is an Exempt Financial Adviser and Registered Insurance Broker licensed by MAS. View our <a href=\"https://eservices.mas.gov.sg/fid/institution/detail/201229-POLICYPAL-SINGAPORE-PTE-LTD\" target=\"__blank\">MAS License</a> | ").concat([].concat(footerListPPFA, [{
    href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].claims.url,
    text: 'Claims'
  }]).map(function (f) {
    return "<a href=\"".concat(f.href, "\" target=\"__blank\">").concat(f.text, "</a>");
  }).join(' | '), "\n\xA9 ").concat(year, " ").concat(constants_company__WEBPACK_IMPORTED_MODULE_1__["PPFA_ENTITY"], " All Rights Reserved.")
};
var compactData = {
  title: 'Customer service hours',
  content: ['10am - 7pm', 'Mondays to Fridays', '(excluding public holidays)']
};


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Footer/Footer.module.scss":
/*!**************************************************!*\
  !*** ./src/components/Footer/Footer.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Footer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/Footer.module.scss");

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
      /*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Footer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/Footer.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./Footer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/Footer.module.scss");

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

/***/ "./src/components/Footer/Footer.tsx":
/*!******************************************!*\
  !*** ./src/components/Footer/Footer.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lib_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/images */ "./src/lib/images/index.ts");
/* harmony import */ var _MasFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MasFooter */ "./src/components/Footer/MasFooter/index.tsx");
/* harmony import */ var _Contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Contacts */ "./src/components/Footer/Contacts/index.tsx");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Content */ "./src/components/Footer/Content/index.tsx");
/* harmony import */ var hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hooks/useTheme */ "./src/hooks/useTheme/index.ts");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Footer.module.scss */ "./src/components/Footer/Footer.module.scss");
/* harmony import */ var _Footer_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_scss__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Footer\\Footer.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var Compact = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./Compact */ "./src/components/Footer/Compact/index.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./Compact */ "./src/components/Footer/Compact/index.tsx")];
    },
    modules: ["..\\components\\Footer\\Footer.tsx -> " + './Compact']
  }
});
_c2 = Compact;
var DownloadApp = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(_c3 = function _c3() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./DownloadApp */ "./src/components/Footer/DownloadApp/index.tsx"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./DownloadApp */ "./src/components/Footer/DownloadApp/index.tsx")];
    },
    modules: ["..\\components\\Footer\\Footer.tsx -> " + './DownloadApp']
  }
});
_c4 = DownloadApp;

var Footer = function Footer() {
  _s();

  var _useTheme = Object(hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      themeSetting = _useTheme.themeSetting;

  var footerBG = Object(lib_images__WEBPACK_IMPORTED_MODULE_5__["getImage"])('navigation.footer_bg');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: [_Footer_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.footer, _Footer_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a[themeSetting.theme]].join(' '),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.footerInner,
      children: [themeSetting.footerSettings.hideDownloadApp && !themeSetting.footerSettings.hideCurve && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.curve,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread({}, footerBG), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, _this), !themeSetting.footerSettings.hideDownloadApp && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Footer_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.downloadApp,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DownloadApp, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }, _this), !themeSetting.footerSettings.hideCurve && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [_Footer_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.curve, _Footer_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.absolute].join(' '),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread({}, footerBG), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: [_Footer_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.content, !themeSetting.footerSettings.hideDownloadApp ? _Footer_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.paddedContent : ''].join(' '),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: [_Footer_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.contentInner, themeSetting.footerSettings.useCompact ? _Footer_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.useCompact : ''].join(' '),
          children: themeSetting.footerSettings.useCompact ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Compact, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Contacts__WEBPACK_IMPORTED_MODULE_7__["default"], {
              themeSetting: themeSetting
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Content__WEBPACK_IMPORTED_MODULE_8__["default"], {
              themeSetting: themeSetting
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MasFooter__WEBPACK_IMPORTED_MODULE_6__["default"], {
              themeSetting: themeSetting
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 17
            }, _this)]
          }, void 0, true)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 5
  }, _this);
};

_s(Footer, "EK/EWYEm6oBzr8zwVcM31ilA18o=", false, function () {
  return [hooks_useTheme__WEBPACK_IMPORTED_MODULE_9__["default"]];
});

_c5 = Footer;
/* harmony default export */ __webpack_exports__["default"] = (_c6 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(Footer));

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Compact$dynamic");
$RefreshReg$(_c2, "Compact");
$RefreshReg$(_c3, "DownloadApp$dynamic");
$RefreshReg$(_c4, "DownloadApp");
$RefreshReg$(_c5, "Footer");
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/Footer/FooterLink/FooterLink.module.scss":
/*!*****************************************************************!*\
  !*** ./src/components/Footer/FooterLink/FooterLink.module.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./FooterLink.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/FooterLink/FooterLink.module.scss");

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
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./FooterLink.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/FooterLink/FooterLink.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./FooterLink.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/FooterLink/FooterLink.module.scss");

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

/***/ "./src/components/Footer/FooterLink/FooterLink.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Footer/FooterLink/FooterLink.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var constants_tracking_buttons_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/tracking/buttons/footer */ "./src/constants/tracking/buttons/footer.ts");
/* harmony import */ var components_AppAnchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/AppAnchor */ "./src/components/AppAnchor/index.tsx");
/* harmony import */ var components_AppLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/AppLink */ "./src/components/AppLink/index.tsx");
/* harmony import */ var _FooterLink_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FooterLink.module.scss */ "./src/components/Footer/FooterLink/FooterLink.module.scss");
/* harmony import */ var _FooterLink_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_FooterLink_module_scss__WEBPACK_IMPORTED_MODULE_7__);




var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Footer\\FooterLink\\FooterLink.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var FooterLink = function FooterLink(_ref) {
  var data = _ref.data,
      type = _ref.type;
  var name = type === 'product' ? data.full_name : data.text;
  var id = (type === 'contact' ? constants_tracking_buttons_footer__WEBPACK_IMPORTED_MODULE_4__["default"].NAV_FOOTER_CONTACT : constants_tracking_buttons_footer__WEBPACK_IMPORTED_MODULE_4__["default"].NAV_FOOTER_LINK).id.replace('xxx', (name || '').replace(/ /g, '_').toLowerCase());
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _FooterLink_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.item,
    children: /^https?:\/\//.test(data.href) || type === 'contact' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [data.img && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _FooterLink_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.image,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread(_objectSpread({}, data.img), {}, {
          className: "icon"
        }), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_AppAnchor__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: id,
        href: data.href,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }, _this)]
    }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_AppLink__WEBPACK_IMPORTED_MODULE_6__["default"], {
      id: id,
      href: data.href,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        children: name === 'eEASY save V' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: ["eEASY ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
            children: "save"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 23
          }, _this), " V"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 15
        }, _this) : name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, _this);
};

_c = FooterLink;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(FooterLink));

var _c, _c2;

$RefreshReg$(_c, "FooterLink");
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

/***/ "./src/components/Footer/FooterLink/index.tsx":
/*!****************************************************!*\
  !*** ./src/components/Footer/FooterLink/index.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _FooterLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FooterLink */ "./src/components/Footer/FooterLink/FooterLink.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FooterLink__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./src/components/Footer/MasFooter/MasFooter.module.scss":
/*!***************************************************************!*\
  !*** ./src/components/Footer/MasFooter/MasFooter.module.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./MasFooter.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/MasFooter/MasFooter.module.scss");

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
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./MasFooter.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/MasFooter/MasFooter.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./MasFooter.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/MasFooter/MasFooter.module.scss");

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

/***/ "./src/components/Footer/MasFooter/MasFooter.tsx":
/*!*******************************************************!*\
  !*** ./src/components/Footer/MasFooter/MasFooter.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Footer.content */ "./src/components/Footer/Footer.content.ts");
/* harmony import */ var _MasFooter_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MasFooter.module.scss */ "./src/components/Footer/MasFooter/MasFooter.module.scss");
/* harmony import */ var _MasFooter_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MasFooter_module_scss__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Footer\\MasFooter\\MasFooter.tsx",
    _this = undefined;





var MasFooter = function MasFooter(_ref) {
  var themeSetting = _ref.themeSetting;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: _MasFooter_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.masFooter,
    dangerouslySetInnerHTML: {
      __html: _Footer_content__WEBPACK_IMPORTED_MODULE_2__["masFooter"][themeSetting.theme]
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, _this);
};

_c = MasFooter;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(MasFooter));

var _c, _c2;

$RefreshReg$(_c, "MasFooter");
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

/***/ "./src/components/Footer/MasFooter/index.tsx":
/*!***************************************************!*\
  !*** ./src/components/Footer/MasFooter/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _MasFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MasFooter */ "./src/components/Footer/MasFooter/MasFooter.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _MasFooter__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./src/components/Footer/StoreButtons/StoreButtons.module.scss":
/*!*********************************************************************!*\
  !*** ./src/components/Footer/StoreButtons/StoreButtons.module.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./StoreButtons.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/StoreButtons/StoreButtons.module.scss");

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
      /*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./StoreButtons.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/StoreButtons/StoreButtons.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ref--5-oneOf-3-1!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ref--5-oneOf-3-2!../../../../node_modules/next/dist/compiled/resolve-url-loader??ref--5-oneOf-3-3!../../../../node_modules/next/dist/compiled/sass-loader/cjs.js??ref--5-oneOf-3-4!./StoreButtons.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./src/components/Footer/StoreButtons/StoreButtons.module.scss");

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

/***/ "./src/components/Footer/StoreButtons/StoreButtons.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Footer/StoreButtons/StoreButtons.tsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var constants_tracking_buttons_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants/tracking/buttons/footer */ "./src/constants/tracking/buttons/footer.ts");
/* harmony import */ var constants_company__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! constants/company */ "./src/constants/company.ts");
/* harmony import */ var _StoreButtons_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StoreButtons.module.scss */ "./src/components/Footer/StoreButtons/StoreButtons.module.scss");
/* harmony import */ var _StoreButtons_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_StoreButtons_module_scss__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "J:\\policypal-web-nextjs\\src\\components\\Footer\\StoreButtons\\StoreButtons.tsx",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








var StoreButtons = function StoreButtons(_ref) {
  var smallerButtons = _ref.smallerButtons;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: [_StoreButtons_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.storeButtons, smallerButtons ? _StoreButtons_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.small : ''].join(' '),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: constants_tracking_buttons_footer__WEBPACK_IMPORTED_MODULE_5__["default"].NAV_FOOTER_APPSTORE.id,
      href: constants_company__WEBPACK_IMPORTED_MODULE_6__["appStores"].apple.href,
      target: "__blank",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread({}, constants_company__WEBPACK_IMPORTED_MODULE_6__["appStores"].apple.img), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: constants_tracking_buttons_footer__WEBPACK_IMPORTED_MODULE_5__["default"].NAV_FOOTER_PLAYSTORE.id,
      href: constants_company__WEBPACK_IMPORTED_MODULE_6__["appStores"].apple.href,
      target: "__blank",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_3___default.a, _objectSpread({}, constants_company__WEBPACK_IMPORTED_MODULE_6__["appStores"].android.img), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, _this);
};

_c = StoreButtons;
/* harmony default export */ __webpack_exports__["default"] = (StoreButtons);

var _c;

$RefreshReg$(_c, "StoreButtons");

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

/***/ "./src/components/Footer/StoreButtons/index.tsx":
/*!******************************************************!*\
  !*** ./src/components/Footer/StoreButtons/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _StoreButtons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreButtons */ "./src/components/Footer/StoreButtons/StoreButtons.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _StoreButtons__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/***/ "./src/components/Footer/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Footer/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./src/components/Footer/Footer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/constants/company.ts":
/*!**********************************!*\
  !*** ./src/constants/company.ts ***!
  \**********************************/
/*! exports provided: PP_ENTITY, PPT_ENTITY, PPFA_ENTITY, contactPPS, contactPPT, socials, contactPPSArray, contactPPTArray, socialsArray, appStores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PP_ENTITY", function() { return PP_ENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PPT_ENTITY", function() { return PPT_ENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PPFA_ENTITY", function() { return PPFA_ENTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactPPS", function() { return contactPPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactPPT", function() { return contactPPT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socials", function() { return socials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactPPSArray", function() { return contactPPSArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contactPPTArray", function() { return contactPPTArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "socialsArray", function() { return socialsArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appStores", function() { return appStores; });
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lib_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/images */ "./src/lib/images/index.ts");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var PP_ENTITY = 'PolicyPal Pte. Ltd.';
var PPT_ENTITY = 'PolicyPal Tech Pte. Ltd.';
var PPFA_ENTITY = 'Baoxianbaobao Pte. Ltd.';
var contactPPS = {
  email: {
    img: Object(lib_images__WEBPACK_IMPORTED_MODULE_2__["getImage"])('icons.email'),
    href: 'hello@ppfa.policypal.com',
    text: 'hello@ppfa.policypal.com'
  },
  tel: {
    img: Object(lib_images__WEBPACK_IMPORTED_MODULE_2__["getImage"])('icons.phone'),
    href: 'tel:+6531639184',
    text: '+65 3163 9184'
  },
  whatsapp: {
    img: Object(lib_images__WEBPACK_IMPORTED_MODULE_2__["getImage"])('icons.phone'),
    href: 'https://wa.me/6587500688',
    text: '+65 8750 0688'
  },
  location: {
    img: Object(lib_images__WEBPACK_IMPORTED_MODULE_2__["getImage"])('icons.location'),
    href: 'https://goo.gl/maps/PMoUWTz6onWsND8o9',
    text: 'JustCo, OCBC Centre East\n63 Chulia Street, #15-01\nSingapore 049514'
  }
};
var contactPPT = _objectSpread(_objectSpread({}, contactPPS), {}, {
  email: _objectSpread(_objectSpread({}, contactPPS.email), {}, {
    href: 'hello@policypal.com',
    text: 'hello@policypal.com'
  })
});
var socials = {
  youtube: {
    img: Object(lib_images__WEBPACK_IMPORTED_MODULE_2__["getImage"])('socials.youtube'),
    href: 'https://www.youtube.com/channel/UCA3iumTXwHZx9VjAgDbfBrQ',
    key: 'youtube'
  },
  facebook: {
    img: Object(lib_images__WEBPACK_IMPORTED_MODULE_2__["getImage"])('socials.facebook'),
    href: 'https://www.facebook.com/hipolicypal',
    key: 'facebook'
  },
  instagram: {
    img: Object(lib_images__WEBPACK_IMPORTED_MODULE_2__["getImage"])('socials.instagram'),
    href: 'https://www.instagram.com/policypal/',
    key: 'instagram'
  },
  linkedin: {
    img: Object(lib_images__WEBPACK_IMPORTED_MODULE_2__["getImage"])('socials.linkedin'),
    href: 'https://www.linkedin.com/company/policypal/',
    key: 'linkedIn'
  }
};
var contactPPSArray = [contactPPS.email, contactPPS.tel, contactPPS.whatsapp, contactPPS.location];
var contactPPTArray = [contactPPT.email].concat(Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(contactPPSArray.slice(2)));
var socialsArray = [socials.youtube, socials.facebook, socials.instagram, socials.linkedin];
var appStores = {
  apple: {
    href: 'https://itunes.apple.com/sg/app/policypal/id1118511972?mt=8',
    img: Object(lib_images__WEBPACK_IMPORTED_MODULE_2__["getImage"])('app.app_store_badge')
  },
  android: {
    href: 'https://play.google.com/store/apps/details?id=com.idvsgjo31w9m05f6raeb3&amp;hl=en',
    img: Object(lib_images__WEBPACK_IMPORTED_MODULE_2__["getImage"])('app.play_store_badge')
  }
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/constants/products.ts":
/*!***********************************!*\
  !*** ./src/constants/products.ts ***!
  \***********************************/
/*! exports provided: products */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function() { return products; });
/* harmony import */ var constants_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/routes */ "./src/constants/routes.ts");
/* harmony import */ var lib_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/images */ "./src/lib/images/index.ts");


var products = [{
  name: 'Term Life',
  full_name: 'Term Life Insurance',
  slug: 'term_life',
  src: Object(lib_images__WEBPACK_IMPORTED_MODULE_1__["getImage"])('product.simple_term_life'),
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].term_life.url
}, {
  name: 'Whole Life',
  full_name: 'Whole Life Insurance',
  slug: 'whole_life',
  src: Object(lib_images__WEBPACK_IMPORTED_MODULE_1__["getImage"])('product.simple_whole_life'),
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].whole_life.url
}, {
  name: 'Endowment',
  full_name: 'Endowment/Savings Insurance',
  slug: 'endowment',
  src: Object(lib_images__WEBPACK_IMPORTED_MODULE_1__["getImage"])('product.simple_endowment'),
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].endowment.url
}, {
  name: 'Integrated Shield Plans',
  full_name: 'Integrated Shield Plans',
  slug: 'health',
  src: Object(lib_images__WEBPACK_IMPORTED_MODULE_1__["getImage"])('product.simple_health'),
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].health.url
}, {
  name: 'Annuity Plans',
  full_name: 'Annuity Plans',
  slug: 'retirement',
  src: Object(lib_images__WEBPACK_IMPORTED_MODULE_1__["getImage"])('product.simple_retirement'),
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].retirement.url
}, {
  name: 'Critical Illness',
  full_name: 'Critical Illness Insurance',
  slug: 'critical_illness',
  src: Object(lib_images__WEBPACK_IMPORTED_MODULE_1__["getImage"])('product.simple_critical_illness'),
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].critical_illness.url
}, {
  name: 'Pet',
  full_name: 'Pet Insurance',
  slug: 'pet',
  src: Object(lib_images__WEBPACK_IMPORTED_MODULE_1__["getImage"])('product.simple_pet'),
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].pet.url
}, {
  name: 'Travel',
  full_name: 'Travel Insurance',
  slug: 'travel',
  src: Object(lib_images__WEBPACK_IMPORTED_MODULE_1__["getImage"])('product.travel'),
  href: constants_routes__WEBPACK_IMPORTED_MODULE_0__["default"].travel.url
}];

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/constants/routes.ts":
/*!*********************************!*\
  !*** ./src/constants/routes.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ({
  landing: {
    url: '/',
    desc: 'Landing'
  },
  book: {
    url: '/book/balls-inc',
    desc: 'Balls Inc.'
  },
  categories: {
    url: '/ppfa/buy-insurance',
    desc: 'Categories'
  },
  categories_old: {
    url: '/buy-insurance',
    desc: 'Categories'
  },
  career: {
    url: '/career',
    desc: 'Careers'
  },
  faq: {
    url: '/faq',
    desc: 'FAQ'
  },
  faq_zendesk: {
    url: 'https://faq.policypal.com',
    desc: 'FAQ'
  },
  cashback: {
    url: '/cashback',
    desc: 'Cashback'
  },
  referral: {
    url: '/referral',
    desc: 'Referral'
  },
  // marketplace: { url: '/marketplace', desc: 'MarketPlace' },
  tos: {
    url: '/tos',
    desc: 'Terms of Service'
  },
  tosPPT: {
    url: '/ppt/tos',
    desc: 'Terms of Service'
  },
  tosPPFA: {
    url: '/ppfa/tos',
    desc: 'Terms of Service'
  },
  disclaimer: {
    url: '/disclaimer',
    desc: 'Disclaimer'
  },
  disclaimerPPT: {
    url: '/ppt/disclaimer',
    desc: 'Disclaimer'
  },
  disclaimerPPFA: {
    url: '/ppfa/disclaimer',
    desc: 'Disclaimer'
  },
  privacypolicy: {
    url: '/privacypolicy',
    desc: 'Privacy Policy'
  },
  privacypolicyPPT: {
    url: '/ppt/privacypolicy',
    desc: 'Privacy Policy'
  },
  privacypolicyPPFA: {
    url: '/ppfa/privacypolicy',
    desc: 'Privacy Policy'
  },
  fairDealingStatement: {
    url: '/fair-dealing-statement',
    desc: 'Fair Dealing Statement'
  },
  fairDealingStatementPPFA: {
    url: '/ppfa/fair-dealing-statement',
    desc: 'Fair Dealing Statement'
  },
  rewardTos: {
    url: '/morning-challenge',
    desc: 'Morning Challenge'
  },
  oldRewardTos: {
    url: '/reward-tos',
    desc: 'PolicyPal Rewards'
  },
  security: {
    url: '/security',
    desc: 'Security'
  },
  press: {
    url: '/press',
    desc: 'Press'
  },
  claims_old: {
    url: '/claims',
    desc: 'Claims'
  },
  claims: {
    url: '/ppfa/claims',
    desc: 'Claims'
  },
  profile: {
    url: '/profile',
    desc: 'Profile'
  },
  rewards: {
    url: '/rewards',
    desc: 'Rewards'
  },
  rewardsMobile: {
    url: '/reward',
    desc: 'PolicyPal Rewards'
  },
  partnership: {
    url: '/partnership',
    desc: 'Partnership'
  },
  moovaz: {
    url: '/moovaz',
    desc: 'Moovaz'
  },
  forgotpassword: {
    url: '/forgotpassword',
    desc: 'Forgot Password'
  },
  receipt: {
    url: '/receipt',
    desc: 'Receipt'
  },
  checkout: {
    url: '/checkout',
    desc: 'Checkout'
  },
  register: {
    url: '/register',
    desc: 'Register'
  },
  login: {
    url: '/login',
    desc: 'Login'
  },
  gotoappstore: {
    url: '/gotoappstore',
    desc: 'Go to App store'
  },
  // Product
  business: {
    url: '/ppfa/business-insurance',
    desc: 'Business Insurance'
  },
  business_ppt: {
    url: '/business-insurance',
    desc: 'Business Insurance'
  },
  travel: {
    url: '/ppfa/travel-insurance',
    desc: 'Travel Insurance'
  },
  travel_ppt: {
    url: '/travel-insurance',
    desc: 'Travel Insurance'
  },
  motor: {
    url: '/ppfa/car-insurance',
    desc: 'Car Insurance'
  },
  motor_ppt: {
    url: '/car-insurance',
    desc: 'Car Insurance'
  },
  pet: {
    url: '/ppfa/pet-insurance',
    desc: 'Pet Insurance'
  },
  pet_ppt: {
    url: '/pet-insurance',
    desc: 'Pet Insurance'
  },
  personal_accident: {
    url: '/ppfa/personal-accident-insurance',
    desc: 'Personal Accident Insurance'
  },
  personal_accident_ppt: {
    url: '/personal-accident-insurance',
    desc: 'Personal Accident Insurance'
  },
  term_life: {
    url: '/ppfa/term-life-insurance',
    desc: 'Term Life Insurance'
  },
  term_life_ppt: {
    url: '/term-life-insurance',
    desc: 'Term Life Insurance'
  },
  whole_life: {
    url: '/ppfa/whole-life-insurance',
    desc: 'Whole Life Insurance'
  },
  whole_life_ppt: {
    url: '/whole-life-insurance',
    desc: 'Whole Life Insurance'
  },
  critical_illness: {
    url: '/ppfa/critical-illness-insurance',
    desc: 'Critical Illness Insurance'
  },
  critical_illness_ppt: {
    url: '/critical-illness-insurance',
    desc: 'Critical Illness Insurance'
  },
  health_old: {
    url: '/health-insurance',
    desc: 'Health Insurance'
  },
  health: {
    url: '/ppfa/integrated-shield-plans',
    desc: 'Integrated Shield Plans'
  },
  health_ppt: {
    url: '/integrated-shield-plans',
    desc: 'Integrated Shield Plans'
  },
  endowment_old: {
    url: '/endowment-insurance',
    desc: 'Endowment / Savings Insurance'
  },
  endowment: {
    url: '/ppfa/endowment-plans',
    desc: 'Endowment / Savings Insurance'
  },
  endowment_ppt: {
    url: '/endowment-plans',
    desc: 'Endowment / Savings Insurance'
  },
  retirement_old: {
    url: '/retirement-insurance',
    desc: 'Annuity Plans'
  },
  retirement: {
    url: '/ppfa/annuities-retirement-planning',
    desc: 'Annuity Plans'
  },
  retirement_ppt: {
    url: '/annuities-retirement-planning',
    desc: 'Annuity Plans'
  },
  on_demand_pa: {
    url: '/on-demand-pa-insurance',
    desc: 'On Demand Personal Accident'
  },
  // Campaigns
  cny: {
    url: '/cny',
    desc: 'Chinese New Year'
  },
  campagin_wheel: {
    url: '/campaigns/spin-the-wheel',
    desc: 'Welcome Surprise'
  },
  scratch_win: {
    url: '/campaigns/scratch-win',
    desc: 'Scratch Win'
  },
  christmas: {
    url: '/campaigns/christmas',
    desc: 'Christmas Campaign 2020'
  },
  christmas_leaderboard: {
    url: '/campaigns/christmas/leaderboard',
    desc: 'Christmas Campaign 2020'
  },
  blog: {
    url: 'https://www.policypal.com/blog',
    desc: 'Resources'
  },
  forbidden: {
    url: '/forbidden',
    desc: 'Forbidden'
  },
  adhoc_checkout: {
    url: '/checkout',
    desc: 'Adhoc - Checkout'
  },
  adhoc_receipt: {
    url: '/receipt',
    desc: 'Adhoc - Receipt'
  },
  the_new_savvy: {
    url: '/thenewsavvy',
    desc: 'The New Savvy'
  },
  jebhealth: {
    url: '/jebhealth',
    desc: 'JebHealth'
  },
  cardup: {
    url: '/cardup',
    desc: 'CardUp'
  },
  referred: {
    url: '/referral/r',
    desc: 'Referred'
  },
  dynamic_partner: {
    url: '/partners/r',
    desc: 'Partners'
  },
  promotions_old: {
    url: '/promotions',
    desc: 'Promotions'
  },
  promotions: {
    url: '/ppfa/promotions',
    desc: 'Promotions'
  },
  tele_consultation: {
    url: '/tele-consultation',
    desc: 'Video Tele-Consultation'
  },
  moneybag_landing_old: {
    url: '/games/money-bag',
    desc: 'Money Bag Virtual Savings'
  },
  moneybag_game_old: {
    url: '/games/money-bag/start',
    desc: 'Money Bag Virtual Savings'
  },
  moneybag_landing: {
    url: 'https://moneybag.policypal.com',
    desc: 'Money Bag Virtual Savings'
  },
  moneybag_game: {
    url: 'https://moneybag.policypal.com/start',
    desc: 'Money Bag Virtual Savings'
  },
  moneybag_landing_staging: {
    url: 'https://moneybag-staging.policypal.com',
    desc: 'Money Bag Virtual Savings'
  },
  moneybag_game_staging: {
    url: 'https://moneybag-staging.policypal.com/start',
    desc: 'Money Bag Virtual Savings'
  },
  life_stage: {
    url: '/life-stage',
    desc: 'Life Stage Planning'
  },
  payment: {
    url: '/payment',
    desc: 'Payment'
  },
  choose_adviser: {
    url: '/insurance/advisers',
    desc: 'Financial Adviser Platform'
  },
  choose_adviser_summary: {
    url: '/insurance/advisers/summary',
    desc: 'Financial Adviser Platform - Summary'
  },
  fa_dashboard: {
    url: '/fa-dashboard',
    desc: 'Advisers'
  },
  // blog posts
  endowment_blog: {
    url: 'https://www.policypal.com/blog/insurance/what-are-savings-insurance-plans/',
    desc: 'Endowment Insurance'
  },
  online_endowment: {
    url: 'https://www.policypal.com/blog/insurance/summary-of-tiq-endowment-plans/',
    desc: 'Online Endowment Insurance'
  },
  what_pcredit: {
    url: 'https://www.policypal.com/blog/announcements/what-is-p-credit/',
    desc: 'What is PolicyPal Credits'
  },
  dyson_promo: {
    url: 'https://www.policypal.com/blog/announcements/are-you-ready-to-scratch-win-prizes/',
    desc: 'Dyson Airwrap Promo'
  },
  // best blogs
  best_whole_life: {
    url: 'https://www.policypal.com/blog/insurance/best-whole-life-plans-in-singapore/',
    desc: 'Whole Life Insurance'
  },
  best_term_life: {
    url: 'https://www.policypal.com/blog/insurance/best-term-life-plans-in-singapore/',
    desc: 'Term Life Insurance'
  },
  best_endowment: {
    url: 'https://www.policypal.com/blog/insurance/best-endowment-plan/',
    desc: 'Endowment Insurance'
  },
  best_ci: {
    url: 'https://www.policypal.com/blog/insurance/best-critical-illness-plans-in-singapore/',
    desc: 'Critical Illness Insurance'
  },
  best_retirement: {
    url: 'https://www.policypal.com/blog/insurance/best-retirement-plans-in-singapore/',
    desc: 'Retirement Insurance'
  },
  best_health: {
    url: 'https://www.policypal.com/blog/insurance/best-health-insurance-plans-in-singapore/',
    desc: 'Health Insurance'
  },
  best_international_health: {
    url: 'https://www.policypal.com/blog/insurance/best-international-health-insurance-in-singapore/',
    desc: 'International Health Insurance'
  },
  best_maternity: {
    url: 'https://www.policypal.com/blog/insurance/best-maternity-insurance-in-singapore/',
    desc: 'Maternity Insurance'
  },
  best_personal_accident: {
    url: 'https://www.policypal.com/blog/insurance/best-personal-accident-insurance-in-singapore/',
    desc: 'Personal Accident Insurance'
  },
  best_car: {
    url: 'https://www.policypal.com/blog/insurance/best-motor-car-insurance-in-singapore/',
    desc: 'Car Insurance'
  },
  best_home: {
    url: 'https://www.policypal.com/blog/insurance/best-home-insurance-in-singapore/',
    desc: 'Home Insurance'
  },
  best_mortgage: {
    url: 'https://www.policypal.com/blog/insurance/best-mortgage-insurance-in-singapore/',
    desc: 'Mortgage Insurance'
  },
  best_maid: {
    url: 'https://www.policypal.com/blog/insurance/best-maid-insurance-in-singapore/',
    desc: 'Maid Insurance'
  },
  // insurers
  great_eastern: {
    url: '/insurers/great-eastern',
    desc: 'Great Eastern Insurance | PolicyPal'
  },
  prudential: {
    url: '/insurers/prudential',
    desc: 'Prudential Insurance | PolicyPal'
  },
  // product test
  elastiq: {
    url: '/elastiq',
    desc: 'ELASTIQ'
  },
  eeasy: {
    url: '/eeasy-save-v',
    desc: 'eEASY save V'
  },
  gigantiq: {
    url: '/gigantiq',
    desc: 'GIGIANTIQ'
  },
  ilp_old: {
    url: '/investment-linked-insurance',
    desc: 'Investment-Linked Insurance'
  },
  ilp: {
    url: '/ilp-investment-linked-policy',
    desc: 'Investment-Linked Policies'
  },
  // Branding
  about: {
    url: '/about',
    desc: 'About Us'
  },
  giveback: {
    url: '/giveback',
    desc: 'Giveback Movement'
  },
  transparency_old: {
    url: '/pricing-transparency',
    desc: 'Pricing Transparency'
  },
  transparency: {
    url: '/ppfa/pricing-transparency',
    desc: 'Pricing Transparency'
  },
  service_standard: {
    url: '/service-standard-promise',
    desc: 'Service Standard Promise'
  },
  member_benefits: {
    url: '/member-benefits',
    desc: 'Member Benefits'
  }
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/constants/theme.tsx":
/*!*********************************!*\
  !*** ./src/constants/theme.tsx ***!
  \*********************************/
/*! exports provided: themeSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeSettings", function() { return themeSettings; });
/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var constants_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! constants/routes */ "./src/constants/routes.ts");


var _objectSpread3, _objectSpread4;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



// Set default all to ppt first
var themeSettings = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()(constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"], function (result, url) {
  return _objectSpread(_objectSpread({}, result), {}, Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, url.url, {
    theme: 'ppt',
    footerSettings: {}
  }));
}, {});
themeSettings = _objectSpread(_objectSpread({}, themeSettings), {}, (_objectSpread3 = {}, Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].ilp.url, {
  theme: 'ppt',
  footerSettings: {
    hideDownloadApp: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread3, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].dynamic_partner.url, {
  theme: 'ppt',
  footerSettings: {
    hideDownloadApp: true,
    useCompact: true,
    hideCurve: false
  }
}), _objectSpread3));
themeSettings = _objectSpread(_objectSpread({}, themeSettings), {}, (_objectSpread4 = {}, Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].categories.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].claims.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].receipt.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].checkout.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].adhoc_checkout.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].adhoc_receipt.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].promotions.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].payment.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].business.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].travel.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].motor.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].pet.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].personal_accident.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].term_life.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].whole_life.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].critical_illness.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].health.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].endowment.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].retirement.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].on_demand_pa.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].choose_adviser.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].choose_adviser_summary.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].fa_dashboard.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].great_eastern.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].prudential.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].elastiq.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].eeasy.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].gigantiq.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true,
    useCompact: true
  }
}), Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread4, constants_routes__WEBPACK_IMPORTED_MODULE_2__["default"].transparency.url, {
  theme: 'ppfa',
  footerSettings: {
    hideDownloadApp: true,
    hideCurve: true
  }
}), _objectSpread4));


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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/constants/tracking/buttons/footer.ts":
/*!**************************************************!*\
  !*** ./src/constants/tracking/buttons/footer.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ({
  NAV_FOOTER_LINK: {
    id: 'nav_footer_link_xxx_btn'
  },
  NAV_FOOTER_URL: {
    id: 'nav_footer_link_xxx_btn'
  },
  NAV_FOOTER_PLAYSTORE: {
    id: 'nav_footer_playstore_btn'
  },
  NAV_FOOTER_APPSTORE: {
    id: 'nav_footer_appstore_btn'
  },
  NAV_FOOTER_CONTACT: {
    id: 'nav_footer_contact_btn'
  },
  NAV_FOOTER_SOCIAL: {
    id: 'nav_footer_social_xxx_btn'
  },
  NAV_FOOTER_SEGMENT: {
    id: 'nav_footer_segment_xxx_btn'
  }
});

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

/***/ "./src/hooks/useTheme/index.ts":
/*!*************************************!*\
  !*** ./src/hooks/useTheme/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _useTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useTheme */ "./src/hooks/useTheme/useTheme.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _useTheme__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/hooks/useTheme/useTheme.ts":
/*!****************************************!*\
  !*** ./src/hooks/useTheme/useTheme.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var constants_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! constants/theme */ "./src/constants/theme.tsx");
var _s = $RefreshSig$();






var getThemeSetting = function getThemeSetting(pathname) {
  var themeSetting = constants_theme__WEBPACK_IMPORTED_MODULE_3__["themeSettings"]["/".concat(pathname.split('/')[1])];

  if (!themeSetting) {
    themeSetting = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(constants_theme__WEBPACK_IMPORTED_MODULE_3__["themeSettings"], function (_, key) {
      return key !== '/' && pathname.startsWith(key);
    }) || {
      theme: 'ppt',
      footerSettings: {}
    };
  }

  return themeSetting;
};

var useTheme = function useTheme() {
  _s();

  var _useRouter = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])(),
      pathname = _useRouter.pathname;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(getThemeSetting(pathname)),
      themeSetting = _useState[0],
      setThemeSetting = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setThemeSetting(getThemeSetting(pathname));
  }, [pathname]);
  return {
    themeSetting: themeSetting
  };
};

_s(useTheme, "81yP5jIhDB4Azdcus6MzTcjhmHQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

/* harmony default export */ __webpack_exports__["default"] = (useTheme);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/images/images.ts":
/*!**********************************!*\
  !*** ./src/lib/images/images.ts ***!
  \**********************************/
/*! exports provided: getImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return getImage; });
var IMAGE_NOT_FOUND = 'Image from path:"{0}" not found';
var getImage = function getImage(imagePath) {
  var splittedPath = imagePath.split('.');

  try {
    var importedImage = __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")("./".concat(splittedPath[0]))[splittedPath[1]];

    return importedImage;
  } catch (error) {
    throw Error(IMAGE_NOT_FOUND.replace('{0}', imagePath));
  }
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/images/index.ts":
/*!*********************************!*\
  !*** ./src/lib/images/index.ts ***!
  \*********************************/
/*! exports provided: getImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images */ "./src/lib/images/images.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return _images__WEBPACK_IMPORTED_MODULE_0__["getImage"]; });



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/navigation/index.ts":
/*!*************************************!*\
  !*** ./src/lib/navigation/index.ts ***!
  \*************************************/
/*! exports provided: isThemeSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./src/lib/navigation/navigation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isThemeSwitch", function() { return _navigation__WEBPACK_IMPORTED_MODULE_0__["isThemeSwitch"]; });



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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/lib/navigation/navigation.ts":
/*!******************************************!*\
  !*** ./src/lib/navigation/navigation.ts ***!
  \******************************************/
/*! exports provided: isThemeSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isThemeSwitch", function() { return isThemeSwitch; });
/* harmony import */ var constants_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/common */ "./src/constants/common.ts");

var ppfaRegex = new RegExp("".concat(constants_common__WEBPACK_IMPORTED_MODULE_0__["THEME_PPFA"], "/"));
var isThemeSwitch = function isThemeSwitch(pathname, incomingPath) {
  return ppfaRegex.test(pathname) && !ppfaRegex.test(incomingPath) || !ppfaRegex.test(pathname) && ppfaRegex.test(incomingPath);
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/forms.tsx":
/*!*****************************!*\
  !*** ./src/pages/forms.tsx ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Box */ "./node_modules/@material-ui/core/esm/Box/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var appRedux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! appRedux */ "./src/appRedux/index.ts");
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Footer */ "./src/components/Footer/index.tsx");
/* harmony import */ var components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/Forms/FieldGenerator */ "./src/components/Forms/FieldGenerator/index.tsx");



var _jsxFileName = "J:\\policypal-web-nextjs\\src\\pages\\forms.tsx",
    _this = undefined,
    _s = $RefreshSig$();






 // import InputAdornment from '@material-ui/core/InputAdornment';

 // import useTranslation from 'hooks/useTranslation';





var Forms = function Forms() {
  _s();

  var values = Object(appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppSelector"])(function (state) {
    var _state$forms$values;

    return (_state$forms$values = state.forms.values) === null || _state$forms$values === void 0 ? void 0 : _state$forms$values.test;
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        variant: "h1",
        children: "Forms"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
          padding: 2,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            noValidate: true,
            onSubmit: function onSubmit(e) {
              e.stopPropagation();
              e.preventDefault();
              console.log(values);
              return false;
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__["default"], {
              container: true,
              spacing: 2,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_10__["default"], {
                useGrid: true,
                gridSize: 6,
                formName: "test",
                name: "money",
                title: "My Money",
                type: "currency",
                placeholder: "Enter Value...",
                variant: "filled",
                fullWidth: true,
                required: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_10__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "radio",
                formName: "test",
                title: "Gender",
                name: "selection",
                storeOptionsPath: "constants.constants.gender",
                getOptionLabel: function getOptionLabel(option) {
                  return option.toString();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_10__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "select",
                formName: "test",
                name: "combo-box-demo",
                label: "Countries",
                storeOptionsPath: "constants.constants.countries",
                getOptionLabel: function getOptionLabel(option) {
                  return option.toString();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_10__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "multi_select",
                formName: "test",
                multiple: true,
                name: "tags-filled",
                label: "Countries",
                storeOptionsPath: "constants.constants.countries",
                getOptionLabel: function getOptionLabel(option) {
                  return option.toString();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_10__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "email",
                formName: "test",
                name: "reddit",
                label: "Reddit",
                helperText: "Incorrect entry."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Forms_FieldGenerator__WEBPACK_IMPORTED_MODULE_10__["default"], {
                useGrid: true,
                gridSize: 6,
                type: "date",
                formName: "test",
                name: "date",
                label: "Date picker dialog"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__["default"], {
              display: "flex",
              justifyContent: "flex-end",
              marginTop: 2,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
                variant: "contained",
                color: "primary",
                type: "submit",
                style: {
                  width: "200px",
                  height: "50px"
                },
                children: "Submit"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(Forms, "2ounKrihAiMwL2aMKxe15VPTmRs=", false, function () {
  return [appRedux__WEBPACK_IMPORTED_MODULE_8__["useAppSelector"]];
});

_c = Forms;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Forms);

var _c;

$RefreshReg$(_c, "Forms");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlSZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VFYWNoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmluZEluZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yT3duLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUmVkdWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVHJpbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQmFzZUVhY2guanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUJhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUZpbmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3RyaW1tZWRFbmRJbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9maW5kLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL2ZpbmRJbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9yZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9GaW5pdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9JbnRlZ2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvTnVtYmVyLmpzIiwid2VicGFjazovL19OX0UvLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0NvbnRhY3RzL0NvbnRhY3RzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvQ29udGVudC9Db250ZW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyTGluay9Gb290ZXJMaW5rLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvTWFzRm9vdGVyL01hc0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL1N0b3JlQnV0dG9ucy9TdG9yZUJ1dHRvbnMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL19OX0UvLi9zcmMvYXNzZXRzL2ltYWdlcy9hcHAudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaW1hZ2VzL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaW1hZ2VzL21vY2sudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaW1hZ2VzL25hdmlnYXRpb24udHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaW1hZ2VzL3Byb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaW1hZ2VzL3NvY2lhbHMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hc3NldHMvaW1hZ2VzL3ZlcmNlbC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXBwQW5jaG9yL0FwcEFuY2hvci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FwcEFuY2hvci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FwcExpbmsvQXBwTGluay50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FwcExpbmsvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvQ29udGFjdHMvQ29udGFjdHMubW9kdWxlLnNjc3M/OGY1MSIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0NvbnRhY3RzL0NvbnRhY3RzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0NvbnRhY3RzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0NvbnRlbnQvQ29udGVudC5tb2R1bGUuc2Nzcz9kOTQ0Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvQ29udGVudC9Db250ZW50LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0NvbnRlbnQvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRmFjZWJvb2tMaWtlL0ZhY2Vib29rTGlrZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9GYWNlYm9va0xpa2UvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIubW9kdWxlLnNjc3M/ZTQ1YiIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJMaW5rL0Zvb3RlckxpbmsubW9kdWxlLnNjc3M/MjI2YiIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckxpbmsvRm9vdGVyTGluay50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJMaW5rL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL01hc0Zvb3Rlci9NYXNGb290ZXIubW9kdWxlLnNjc3M/MzIyOSIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL01hc0Zvb3Rlci9NYXNGb290ZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvTWFzRm9vdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL1N0b3JlQnV0dG9ucy9TdG9yZUJ1dHRvbnMubW9kdWxlLnNjc3M/ZDEyNyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL1N0b3JlQnV0dG9ucy9TdG9yZUJ1dHRvbnMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvU3RvcmVCdXR0b25zL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb21wYW55LnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL3Byb2R1Y3RzLnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL3JvdXRlcy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy90aGVtZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb25zdGFudHMvdHJhY2tpbmcvYnV0dG9ucy9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VUaGVtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVRoZW1lL3VzZVRoZW1lLnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvbGliL2ltYWdlcy9pbWFnZXMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvaW1hZ2VzL2luZGV4LnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvbGliL25hdmlnYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZm9ybXMudHN4Il0sIm5hbWVzIjpbIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJwcm9jZXNzIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiZGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwibG9hZGVyIiwicGF0aCIsImRvbWFpbnMiLCJlbmFibGVCbHVycnlQbGFjZWhvbGRlciIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwic2l6ZXMiLCJsYXlvdXQiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJ3aWR0aHMiLCJzIiwia2luZCIsIndpZHRoIiwidyIsInAiLCJzcmMiLCJzcmNTZXQiLCJnZXRXaWR0aHMiLCJsYXN0IiwicXVhbGl0eSIsImkiLCJsb2FkIiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJwbGFjZWhvbGRlciIsImVsZW1lbnQiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImhlaWdodCIsImxvYWRpbmciLCJpc0xhenkiLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJNSU5fSU1HX1NJWkVfRk9SX1BMQUNFSE9MREVSIiwidG9vU21hbGxGb3JCbHVycnlQbGFjZWhvbGRlciIsInNob3VsZFNob3dCbHVycnlQbGFjZWhvbGRlciIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEltYWdlIiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaXNOYU4iLCJ3cmFwcGVyU3R5bGUiLCJvdmVyZmxvdyIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ0F0dHJpYnV0ZXMiLCJnZW5lcmF0ZUltZ0F0dHJzIiwic2V0UmVmIiwicmVtb3ZlUGxhY2Vob2xkZXIiLCJwYXJhbXMiLCJwYXJhbXNTdHJpbmciLCJub3JtYWxpemVTcmMiLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiY29uc29sZSIsImNvbmZpZ0RvbWFpbnMiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInNoYWxsb3ciLCJsb2NhbGUiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJhY3R1YWwiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwibG9jYWxlRG9tYWluIiwiTGluayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiaWQiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImNhbGxiYWNrIiwid2luZG93IiwiYXBwX3N0b3JlX2JhZGdlIiwiYWx0IiwicGxheV9zdG9yZV9iYWRnZSIsInN1YnNjcmliZSIsImVtYWlsIiwibG9jYXRpb24iLCJwaG9uZSIsInRlc3QiLCJtb2R1bGUiLCJleHBvcnRzIiwiZm9vdGVyX2JnIiwic2ltcGxlX2NyaXRpY2FsX2lsbG5lc3MiLCJzaW1wbGVfZW5kb3dtZW50Iiwic2ltcGxlX2hlYWx0aCIsInNpbXBsZV9tb3JlIiwic2ltcGxlX21vdG9yIiwic2ltcGxlX3BlcnNvbmFsX2FjY2lkZW50Iiwic2ltcGxlX3BldCIsInNpbXBsZV9yZXRpcmVtZW50Iiwic2ltcGxlX3Rlcm1fbGlmZSIsInNpbXBsZV90cmF2ZWwiLCJzaW1wbGVfd2hvbGVfbGlmZSIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwibGlua2VkaW4iLCJ5b3V0dWJlIiwidmVyY2VsIiwiQXBwQW5jaG9yIiwidG9TdHJpbmciLCJBcHBMaW5rIiwidXNlUm91dGVyIiwiaXNUaGVtZVN3aXRjaCIsIm1lbW8iLCJDb250YWN0cyIsInRoZW1lU2V0dGluZyIsInN0eWxlcyIsImNvbnRhY3RzIiwiY29udGFjdCIsInRoZW1lIiwiY29udGFjdFBQVEFycmF5IiwiY29udGFjdFBQU0FycmF5IiwibWFwIiwidGV4dCIsInNvY2lhbHNDb250YWluZXIiLCJzb2NpYWxzQXJyYXkiLCJzb2NpYWwiLCJpbmRleCIsInNvY2lhbEl0ZW0iLCJndG1UcmFja2VyIiwiTkFWX0ZPT1RFUl9TT0NJQUwiLCJpbWciLCJmYWNlYm9va0xpa2UiLCJzdG9yZUJ1dHRvbnMiLCJDb250ZW50IiwibGlzdENvbnRlbnQiLCJsIiwibGlzdCIsInRpdGxlIiwicHJvZHVjdHMiLCJkYXRhIiwiZCIsIkZhY2Vib29rTGlrZSIsInVzZUVmZmVjdCIsIkZCIiwiWEZCTUwiLCJwYXJzZSIsImVycm9yIiwic29jaWFscyIsIm1vcmVUYWJMaXN0Iiwicm91dGVzIiwiY2xhaW1zIiwiZGVzYyIsInVybCIsIm1vcmVUYWJMaXN0UFBUIiwiYWJvdXQiLCJtZW1iZXJfYmVuZWZpdHMiLCJyZWZlcnJhbCIsImdpdmViYWNrIiwic2VydmljZV9zdGFuZGFyZCIsImNhcmVlciIsInBhcnRuZXJzaGlwIiwicmVzb3VyY2VzTGlzdCIsImJsb2ciLCJ0eXBlIiwiYm9vayIsInByZXNzIiwiZm9vdGVyTGlzdFBQVCIsInRvc1BQVCIsInByaXZhY3lwb2xpY3lQUFQiLCJzZWN1cml0eSIsImRpc2NsYWltZXJQUFQiLCJmb290ZXJMaXN0UFBGQSIsInRvc1BQRkEiLCJwcml2YWN5cG9saWN5UFBGQSIsImZhaXJEZWFsaW5nU3RhdGVtZW50UFBGQSIsImRpc2NsYWltZXJQUEZBIiwieWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsImRvd25sb2FkQXBwRGF0YSIsInBwdCIsInBwZmEiLCJtYXNGb290ZXIiLCJmIiwiam9pbiIsIlBQVF9FTlRJVFkiLCJQUEZBX0VOVElUWSIsImNvbXBhY3REYXRhIiwiY29udGVudCIsIkNvbXBhY3QiLCJkeW5hbWljIiwiRG93bmxvYWRBcHAiLCJGb290ZXIiLCJ1c2VUaGVtZSIsImZvb3RlckJHIiwiZ2V0SW1hZ2UiLCJmb290ZXIiLCJmb290ZXJJbm5lciIsImZvb3RlclNldHRpbmdzIiwiaGlkZURvd25sb2FkQXBwIiwiaGlkZUN1cnZlIiwiY3VydmUiLCJkb3dubG9hZEFwcCIsImFic29sdXRlIiwicGFkZGVkQ29udGVudCIsImNvbnRlbnRJbm5lciIsInVzZUNvbXBhY3QiLCJGb290ZXJMaW5rIiwibmFtZSIsImZ1bGxfbmFtZSIsIk5BVl9GT09URVJfQ09OVEFDVCIsIk5BVl9GT09URVJfTElOSyIsInRvTG93ZXJDYXNlIiwiaXRlbSIsImltYWdlIiwiTWFzRm9vdGVyIiwiX19odG1sIiwiU3RvcmVCdXR0b25zIiwic21hbGxlckJ1dHRvbnMiLCJzbWFsbCIsIk5BVl9GT09URVJfQVBQU1RPUkUiLCJhcHBTdG9yZXMiLCJhcHBsZSIsIk5BVl9GT09URVJfUExBWVNUT1JFIiwiYW5kcm9pZCIsIlBQX0VOVElUWSIsImNvbnRhY3RQUFMiLCJ0ZWwiLCJ3aGF0c2FwcCIsImNvbnRhY3RQUFQiLCJzbGljZSIsInNsdWciLCJ0ZXJtX2xpZmUiLCJ3aG9sZV9saWZlIiwiZW5kb3dtZW50IiwiaGVhbHRoIiwicmV0aXJlbWVudCIsImNyaXRpY2FsX2lsbG5lc3MiLCJwZXQiLCJ0cmF2ZWwiLCJsYW5kaW5nIiwiY2F0ZWdvcmllcyIsImNhdGVnb3JpZXNfb2xkIiwiZmFxIiwiZmFxX3plbmRlc2siLCJjYXNoYmFjayIsInRvcyIsImRpc2NsYWltZXIiLCJwcml2YWN5cG9saWN5IiwiZmFpckRlYWxpbmdTdGF0ZW1lbnQiLCJyZXdhcmRUb3MiLCJvbGRSZXdhcmRUb3MiLCJjbGFpbXNfb2xkIiwicHJvZmlsZSIsInJld2FyZHMiLCJyZXdhcmRzTW9iaWxlIiwibW9vdmF6IiwiZm9yZ290cGFzc3dvcmQiLCJyZWNlaXB0IiwiY2hlY2tvdXQiLCJyZWdpc3RlciIsImxvZ2luIiwiZ290b2FwcHN0b3JlIiwiYnVzaW5lc3MiLCJidXNpbmVzc19wcHQiLCJ0cmF2ZWxfcHB0IiwibW90b3IiLCJtb3Rvcl9wcHQiLCJwZXRfcHB0IiwicGVyc29uYWxfYWNjaWRlbnQiLCJwZXJzb25hbF9hY2NpZGVudF9wcHQiLCJ0ZXJtX2xpZmVfcHB0Iiwid2hvbGVfbGlmZV9wcHQiLCJjcml0aWNhbF9pbGxuZXNzX3BwdCIsImhlYWx0aF9vbGQiLCJoZWFsdGhfcHB0IiwiZW5kb3dtZW50X29sZCIsImVuZG93bWVudF9wcHQiLCJyZXRpcmVtZW50X29sZCIsInJldGlyZW1lbnRfcHB0Iiwib25fZGVtYW5kX3BhIiwiY255IiwiY2FtcGFnaW5fd2hlZWwiLCJzY3JhdGNoX3dpbiIsImNocmlzdG1hcyIsImNocmlzdG1hc19sZWFkZXJib2FyZCIsImZvcmJpZGRlbiIsImFkaG9jX2NoZWNrb3V0IiwiYWRob2NfcmVjZWlwdCIsInRoZV9uZXdfc2F2dnkiLCJqZWJoZWFsdGgiLCJjYXJkdXAiLCJyZWZlcnJlZCIsImR5bmFtaWNfcGFydG5lciIsInByb21vdGlvbnNfb2xkIiwicHJvbW90aW9ucyIsInRlbGVfY29uc3VsdGF0aW9uIiwibW9uZXliYWdfbGFuZGluZ19vbGQiLCJtb25leWJhZ19nYW1lX29sZCIsIm1vbmV5YmFnX2xhbmRpbmciLCJtb25leWJhZ19nYW1lIiwibW9uZXliYWdfbGFuZGluZ19zdGFnaW5nIiwibW9uZXliYWdfZ2FtZV9zdGFnaW5nIiwibGlmZV9zdGFnZSIsInBheW1lbnQiLCJjaG9vc2VfYWR2aXNlciIsImNob29zZV9hZHZpc2VyX3N1bW1hcnkiLCJmYV9kYXNoYm9hcmQiLCJlbmRvd21lbnRfYmxvZyIsIm9ubGluZV9lbmRvd21lbnQiLCJ3aGF0X3BjcmVkaXQiLCJkeXNvbl9wcm9tbyIsImJlc3Rfd2hvbGVfbGlmZSIsImJlc3RfdGVybV9saWZlIiwiYmVzdF9lbmRvd21lbnQiLCJiZXN0X2NpIiwiYmVzdF9yZXRpcmVtZW50IiwiYmVzdF9oZWFsdGgiLCJiZXN0X2ludGVybmF0aW9uYWxfaGVhbHRoIiwiYmVzdF9tYXRlcm5pdHkiLCJiZXN0X3BlcnNvbmFsX2FjY2lkZW50IiwiYmVzdF9jYXIiLCJiZXN0X2hvbWUiLCJiZXN0X21vcnRnYWdlIiwiYmVzdF9tYWlkIiwiZ3JlYXRfZWFzdGVybiIsInBydWRlbnRpYWwiLCJlbGFzdGlxIiwiZWVhc3kiLCJnaWdhbnRpcSIsImlscF9vbGQiLCJpbHAiLCJ0cmFuc3BhcmVuY3lfb2xkIiwidHJhbnNwYXJlbmN5IiwidGhlbWVTZXR0aW5ncyIsInJlZHVjZSIsInJlc3VsdCIsIk5BVl9GT09URVJfVVJMIiwiTkFWX0ZPT1RFUl9TRUdNRU5UIiwiZ2V0VGhlbWVTZXR0aW5nIiwic3BsaXQiLCJmaW5kIiwic3RhcnRzV2l0aCIsInVzZVN0YXRlIiwic2V0VGhlbWVTZXR0aW5nIiwiSU1BR0VfTk9UX0ZPVU5EIiwiaW1hZ2VQYXRoIiwic3BsaXR0ZWRQYXRoIiwiaW1wb3J0ZWRJbWFnZSIsInJlcXVpcmUiLCJFcnJvciIsInBwZmFSZWdleCIsIlJlZ0V4cCIsIlRIRU1FX1BQRkEiLCJpbmNvbWluZ1BhdGgiLCJGb3JtcyIsInZhbHVlcyIsInVzZUFwcFNlbGVjdG9yIiwic3RhdGUiLCJmb3JtcyIsInN0b3BQcm9wYWdhdGlvbiIsInByZXZlbnREZWZhdWx0IiwibG9nIiwib3B0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN6QkEsaUJBQWlCLG1CQUFPLENBQUMsMkRBQWU7QUFDeEMscUJBQXFCLG1CQUFPLENBQUMsbUVBQW1COztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEIsYUFBYSxhQUFhO0FBQzFCO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN2QkEsb0JBQW9CLG1CQUFPLENBQUMsaUVBQWtCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDZkEsY0FBYyxtQkFBTyxDQUFDLHFEQUFZO0FBQ2xDLFdBQVcsbUJBQU8sQ0FBQyw2Q0FBUTs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxX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QyxRQUhQO0FBSUUscUJBQUssRUFBRTtBQUFFckssdUJBQUssU0FBUDtBQUFrQnFCLHdCQUFNO0FBQXhCLGlCQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF4RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQTJGRSxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBM0ZGO0FBQUEsa0JBREY7QUErRkQsQ0FqR0Q7O0dBQU11WSxLO1VBQ1dFLHVEOzs7S0FEWEYsSzs7QUF3R1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Zvcm1zLmM5MDU4NDQ2Njc5MGU5NmJiNzk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5yZWR1Y2VgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luaXRBY2N1bV0gU3BlY2lmeSB1c2luZyB0aGUgZmlyc3QgZWxlbWVudCBvZiBgYXJyYXlgIGFzXG4gKiAgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKi9cbmZ1bmN0aW9uIGFycmF5UmVkdWNlKGFycmF5LCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIGlmIChpbml0QWNjdW0gJiYgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBhcnJheVsrK2luZGV4XTtcbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGFjY3VtdWxhdG9yID0gaXRlcmF0ZWUoYWNjdW11bGF0b3IsIGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlSZWR1Y2U7XG4iLCJ2YXIgYmFzZUZvck93biA9IHJlcXVpcmUoJy4vX2Jhc2VGb3JPd24nKSxcbiAgICBjcmVhdGVCYXNlRWFjaCA9IHJlcXVpcmUoJy4vX2NyZWF0ZUJhc2VFYWNoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZm9yRWFjaGAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdH0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fE9iamVjdH0gUmV0dXJucyBgY29sbGVjdGlvbmAuXG4gKi9cbnZhciBiYXNlRWFjaCA9IGNyZWF0ZUJhc2VFYWNoKGJhc2VGb3JPd24pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VFYWNoO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5maW5kSW5kZXhgIGFuZCBgXy5maW5kTGFzdEluZGV4YCB3aXRob3V0XG4gKiBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSwgZnJvbUluZGV4LCBmcm9tUmlnaHQpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGluZGV4ID0gZnJvbUluZGV4ICsgKGZyb21SaWdodCA/IDEgOiAtMSk7XG5cbiAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZpbmRJbmRleDtcbiIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQmFzZUZvcicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcbiIsInZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9fYmFzZUZvcicpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mb3JPd25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3JPd247XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlZHVjZWAgYW5kIGBfLnJlZHVjZVJpZ2h0YCwgd2l0aG91dCBzdXBwb3J0XG4gKiBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcywgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgY29sbGVjdGlvbmAgdXNpbmcgYGVhY2hGdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gYWNjdW11bGF0b3IgVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaXRBY2N1bSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBvciBsYXN0IGVsZW1lbnQgb2ZcbiAqICBgY29sbGVjdGlvbmAgYXMgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGBjb2xsZWN0aW9uYC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlZHVjZShjb2xsZWN0aW9uLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSwgZWFjaEZ1bmMpIHtcbiAgZWFjaEZ1bmMoY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpbml0QWNjdW1cbiAgICAgID8gKGluaXRBY2N1bSA9IGZhbHNlLCB2YWx1ZSlcbiAgICAgIDogaXRlcmF0ZWUoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gIH0pO1xuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlZHVjZTtcbiIsInZhciB0cmltbWVkRW5kSW5kZXggPSByZXF1aXJlKCcuL190cmltbWVkRW5kSW5kZXgnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50cmltYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRyaW0oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsICcnKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUcmltO1xuIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgYmFzZUVhY2hgIG9yIGBiYXNlRWFjaFJpZ2h0YCBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBhIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFYWNoKGVhY2hGdW5jLCBmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gICAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfVxuICAgIGlmICghaXNBcnJheUxpa2UoY29sbGVjdGlvbikpIHtcbiAgICAgIHJldHVybiBlYWNoRnVuYyhjb2xsZWN0aW9uLCBpdGVyYXRlZSk7XG4gICAgfVxuICAgIHZhciBsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aCxcbiAgICAgICAgaW5kZXggPSBmcm9tUmlnaHQgPyBsZW5ndGggOiAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3QoY29sbGVjdGlvbik7XG5cbiAgICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2luZGV4XSwgaW5kZXgsIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VFYWNoO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUZvcjtcbiIsInZhciBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBfLmZpbmRgIG9yIGBfLmZpbmRMYXN0YCBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZmluZEluZGV4RnVuYyBUaGUgZnVuY3Rpb24gdG8gZmluZCB0aGUgY29sbGVjdGlvbiBpbmRleC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZpbmQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZpbmQoZmluZEluZGV4RnVuYykge1xuICByZXR1cm4gZnVuY3Rpb24oY29sbGVjdGlvbiwgcHJlZGljYXRlLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgaXRlcmFibGUgPSBPYmplY3QoY29sbGVjdGlvbik7XG4gICAgaWYgKCFpc0FycmF5TGlrZShjb2xsZWN0aW9uKSkge1xuICAgICAgdmFyIGl0ZXJhdGVlID0gYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMyk7XG4gICAgICBjb2xsZWN0aW9uID0ga2V5cyhjb2xsZWN0aW9uKTtcbiAgICAgIHByZWRpY2F0ZSA9IGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSk7IH07XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGZpbmRJbmRleEZ1bmMoY29sbGVjdGlvbiwgcHJlZGljYXRlLCBmcm9tSW5kZXgpO1xuICAgIHJldHVybiBpbmRleCA+IC0xID8gaXRlcmFibGVbaXRlcmF0ZWUgPyBjb2xsZWN0aW9uW2luZGV4XSA6IGluZGV4XSA6IHVuZGVmaW5lZDtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVGaW5kO1xuIiwiLyoqIFVzZWQgdG8gbWF0Y2ggYSBzaW5nbGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG52YXIgcmVXaGl0ZXNwYWNlID0gL1xccy87XG5cbi8qKlxuICogVXNlZCBieSBgXy50cmltYCBhbmQgYF8udHJpbUVuZGAgdG8gZ2V0IHRoZSBpbmRleCBvZiB0aGUgbGFzdCBub24td2hpdGVzcGFjZVxuICogY2hhcmFjdGVyIG9mIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgdG8gaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbiAqL1xuZnVuY3Rpb24gdHJpbW1lZEVuZEluZGV4KHN0cmluZykge1xuICB2YXIgaW5kZXggPSBzdHJpbmcubGVuZ3RoO1xuXG4gIHdoaWxlIChpbmRleC0tICYmIHJlV2hpdGVzcGFjZS50ZXN0KHN0cmluZy5jaGFyQXQoaW5kZXgpKSkge31cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyaW1tZWRFbmRJbmRleDtcbiIsInZhciBjcmVhdGVGaW5kID0gcmVxdWlyZSgnLi9fY3JlYXRlRmluZCcpLFxuICAgIGZpbmRJbmRleCA9IHJlcXVpcmUoJy4vZmluZEluZGV4Jyk7XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAsIHJldHVybmluZyB0aGUgZmlyc3QgZWxlbWVudFxuICogYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yLiBUaGUgcHJlZGljYXRlIGlzIGludm9rZWQgd2l0aCB0aHJlZVxuICogYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2Zyb21JbmRleD0wXSBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWF0Y2hlZCBlbGVtZW50LCBlbHNlIGB1bmRlZmluZWRgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FnZSc6IDQwLCAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdwZWJibGVzJywgJ2FnZSc6IDEsICAnYWN0aXZlJzogdHJ1ZSB9XG4gKiBdO1xuICpcbiAqIF8uZmluZCh1c2VycywgZnVuY3Rpb24obykgeyByZXR1cm4gby5hZ2UgPCA0MDsgfSk7XG4gKiAvLyA9PiBvYmplY3QgZm9yICdiYXJuZXknXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZCh1c2VycywgeyAnYWdlJzogMSwgJ2FjdGl2ZSc6IHRydWUgfSk7XG4gKiAvLyA9PiBvYmplY3QgZm9yICdwZWJibGVzJ1xuICpcbiAqIC8vIFRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZCh1c2VycywgWydhY3RpdmUnLCBmYWxzZV0pO1xuICogLy8gPT4gb2JqZWN0IGZvciAnZnJlZCdcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZCh1c2VycywgJ2FjdGl2ZScpO1xuICogLy8gPT4gb2JqZWN0IGZvciAnYmFybmV5J1xuICovXG52YXIgZmluZCA9IGNyZWF0ZUZpbmQoZmluZEluZGV4KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kO1xuIiwidmFyIGJhc2VGaW5kSW5kZXggPSByZXF1aXJlKCcuL19iYXNlRmluZEluZGV4JyksXG4gICAgYmFzZUl0ZXJhdGVlID0gcmVxdWlyZSgnLi9fYmFzZUl0ZXJhdGVlJyksXG4gICAgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi90b0ludGVnZXInKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uZmluZGAgZXhjZXB0IHRoYXQgaXQgcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0XG4gKiBlbGVtZW50IGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvciBpbnN0ZWFkIG9mIHRoZSBlbGVtZW50IGl0c2VsZi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDEuMS4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpbnNwZWN0LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3ByZWRpY2F0ZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtmcm9tSW5kZXg9MF0gVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZvdW5kIGVsZW1lbnQsIGVsc2UgYC0xYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScsICAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAgJ2FjdGl2ZSc6IGZhbHNlIH0sXG4gKiAgIHsgJ3VzZXInOiAncGViYmxlcycsICdhY3RpdmUnOiB0cnVlIH1cbiAqIF07XG4gKlxuICogXy5maW5kSW5kZXgodXNlcnMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8udXNlciA9PSAnYmFybmV5JzsgfSk7XG4gKiAvLyA9PiAwXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZEluZGV4KHVzZXJzLCB7ICd1c2VyJzogJ2ZyZWQnLCAnYWN0aXZlJzogZmFsc2UgfSk7XG4gKiAvLyA9PiAxXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5maW5kSW5kZXgodXNlcnMsIFsnYWN0aXZlJywgZmFsc2VdKTtcbiAqIC8vID0+IDBcbiAqXG4gKiAvLyBUaGUgYF8ucHJvcGVydHlgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmluZEluZGV4KHVzZXJzLCAnYWN0aXZlJyk7XG4gKiAvLyA9PiAyXG4gKi9cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlLCBmcm9tSW5kZXgpIHtcbiAgdmFyIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIoZnJvbUluZGV4KTtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGluZGV4ID0gbmF0aXZlTWF4KGxlbmd0aCArIGluZGV4LCAwKTtcbiAgfVxuICByZXR1cm4gYmFzZUZpbmRJbmRleChhcnJheSwgYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMyksIGluZGV4KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmaW5kSW5kZXg7XG4iLCJ2YXIgYXJyYXlSZWR1Y2UgPSByZXF1aXJlKCcuL19hcnJheVJlZHVjZScpLFxuICAgIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9fYmFzZUVhY2gnKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBiYXNlUmVkdWNlID0gcmVxdWlyZSgnLi9fYmFzZVJlZHVjZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKTtcblxuLyoqXG4gKiBSZWR1Y2VzIGBjb2xsZWN0aW9uYCB0byBhIHZhbHVlIHdoaWNoIGlzIHRoZSBhY2N1bXVsYXRlZCByZXN1bHQgb2YgcnVubmluZ1xuICogZWFjaCBlbGVtZW50IGluIGBjb2xsZWN0aW9uYCB0aHJ1IGBpdGVyYXRlZWAsIHdoZXJlIGVhY2ggc3VjY2Vzc2l2ZVxuICogaW52b2NhdGlvbiBpcyBzdXBwbGllZCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBwcmV2aW91cy4gSWYgYGFjY3VtdWxhdG9yYFxuICogaXMgbm90IGdpdmVuLCB0aGUgZmlyc3QgZWxlbWVudCBvZiBgY29sbGVjdGlvbmAgaXMgdXNlZCBhcyB0aGUgaW5pdGlhbFxuICogdmFsdWUuIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggZm91ciBhcmd1bWVudHM6XG4gKiAoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqIE1hbnkgbG9kYXNoIG1ldGhvZHMgYXJlIGd1YXJkZWQgdG8gd29yayBhcyBpdGVyYXRlZXMgZm9yIG1ldGhvZHMgbGlrZVxuICogYF8ucmVkdWNlYCwgYF8ucmVkdWNlUmlnaHRgLCBhbmQgYF8udHJhbnNmb3JtYC5cbiAqXG4gKiBUaGUgZ3VhcmRlZCBtZXRob2RzIGFyZTpcbiAqIGBhc3NpZ25gLCBgZGVmYXVsdHNgLCBgZGVmYXVsdHNEZWVwYCwgYGluY2x1ZGVzYCwgYG1lcmdlYCwgYG9yZGVyQnlgLFxuICogYW5kIGBzb3J0QnlgXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IENvbGxlY3Rpb25cbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQHNlZSBfLnJlZHVjZVJpZ2h0XG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ucmVkdWNlKFsxLCAyXSwgZnVuY3Rpb24oc3VtLCBuKSB7XG4gKiAgIHJldHVybiBzdW0gKyBuO1xuICogfSwgMCk7XG4gKiAvLyA9PiAzXG4gKlxuICogXy5yZWR1Y2UoeyAnYSc6IDEsICdiJzogMiwgJ2MnOiAxIH0sIGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICogICAocmVzdWx0W3ZhbHVlXSB8fCAocmVzdWx0W3ZhbHVlXSA9IFtdKSkucHVzaChrZXkpO1xuICogICByZXR1cm4gcmVzdWx0O1xuICogfSwge30pO1xuICogLy8gPT4geyAnMSc6IFsnYScsICdjJ10sICcyJzogWydiJ10gfSAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG5mdW5jdGlvbiByZWR1Y2UoY29sbGVjdGlvbiwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5UmVkdWNlIDogYmFzZVJlZHVjZSxcbiAgICAgIGluaXRBY2N1bSA9IGFyZ3VtZW50cy5sZW5ndGggPCAzO1xuXG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgNCksIGFjY3VtdWxhdG9yLCBpbml0QWNjdW0sIGJhc2VFYWNoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWR1Y2U7XG4iLCJ2YXIgdG9OdW1iZXIgPSByZXF1aXJlKCcuL3RvTnVtYmVyJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIElORklOSVRZID0gMSAvIDAsXG4gICAgTUFYX0lOVEVHRVIgPSAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwODtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgZmluaXRlIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTIuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvRmluaXRlKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvRmluaXRlKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b0Zpbml0ZShJbmZpbml0eSk7XG4gKiAvLyA9PiAxLjc5NzY5MzEzNDg2MjMxNTdlKzMwOFxuICpcbiAqIF8udG9GaW5pdGUoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvRmluaXRlKHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6IDA7XG4gIH1cbiAgdmFsdWUgPSB0b051bWJlcih2YWx1ZSk7XG4gIGlmICh2YWx1ZSA9PT0gSU5GSU5JVFkgfHwgdmFsdWUgPT09IC1JTkZJTklUWSkge1xuICAgIHZhciBzaWduID0gKHZhbHVlIDwgMCA/IC0xIDogMSk7XG4gICAgcmV0dXJuIHNpZ24gKiBNQVhfSU5URUdFUjtcbiAgfVxuICByZXR1cm4gdmFsdWUgPT09IHZhbHVlID8gdmFsdWUgOiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvRmluaXRlO1xuIiwidmFyIHRvRmluaXRlID0gcmVxdWlyZSgnLi90b0Zpbml0ZScpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYW4gaW50ZWdlci5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0ludGVnZXJgXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtdG9pbnRlZ2VyKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBpbnRlZ2VyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvSW50ZWdlcigzLjIpO1xuICogLy8gPT4gM1xuICpcbiAqIF8udG9JbnRlZ2VyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gMFxuICpcbiAqIF8udG9JbnRlZ2VyKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0ludGVnZXIoJzMuMicpO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IHRvRmluaXRlKHZhbHVlKSxcbiAgICAgIHJlbWFpbmRlciA9IHJlc3VsdCAlIDE7XG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gcmVzdWx0ID8gKHJlbWFpbmRlciA/IHJlc3VsdCAtIHJlbWFpbmRlciA6IHJlc3VsdCkgOiAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvSW50ZWdlcjtcbiIsInZhciBiYXNlVHJpbSA9IHJlcXVpcmUoJy4vX2Jhc2VUcmltJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xudmFyIE5BTiA9IDAgLyAwO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSBiYXNlVHJpbSh2YWx1ZSk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvTnVtYmVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgUGxhY2Vob2xkZXJWYWx1ZSA9ICdibHVyJyB8ICdlbXB0eSdcblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKSAmXG4gIChcbiAgICB8IHtcbiAgICAgICAgcGxhY2Vob2xkZXI/OiBFeGNsdWRlPFBsYWNlaG9sZGVyVmFsdWUsICdibHVyJz5cbiAgICAgICAgYmx1ckRhdGFVUkw/OiBuZXZlclxuICAgICAgfVxuICAgIHwgeyBwbGFjZWhvbGRlcjogJ2JsdXInOyBibHVyRGF0YVVSTDogc3RyaW5nIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG4gIGVuYWJsZUJsdXJyeVBsYWNlaG9sZGVyOiBjb25maWdFbmFibGVCbHVycnlQbGFjZWhvbGRlcixcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZ1xuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdXG4gICAgZm9yIChsZXQgbWF0Y2g7IChtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKSk7IG1hdGNoKSB7XG4gICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpXG4gICAgfVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gcmVtb3ZlUGxhY2Vob2xkZXIoXG4gIGVsZW1lbnQ6IEhUTUxJbWFnZUVsZW1lbnQgfCBudWxsLFxuICBwbGFjZWhvbGRlcjogUGxhY2Vob2xkZXJWYWx1ZVxuKSB7XG4gIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInICYmIGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5jb21wbGV0ZSkge1xuICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSdcbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbWVudC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIHBsYWNlaG9sZGVyID0gJ2VtcHR5JyxcbiAgYmx1ckRhdGFVUkwsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKCFjb25maWdFbmFibGVCbHVycnlQbGFjZWhvbGRlcikge1xuICAgIHBsYWNlaG9sZGVyID0gJ2VtcHR5J1xuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgY29uc3QgTUlOX0lNR19TSVpFX0ZPUl9QTEFDRUhPTERFUiA9IDUwMDBcbiAgY29uc3QgdG9vU21hbGxGb3JCbHVycnlQbGFjZWhvbGRlciA9XG4gICAgd2lkdGhJbnQgJiYgaGVpZ2h0SW50ICYmIHdpZHRoSW50ICogaGVpZ2h0SW50IDwgTUlOX0lNR19TSVpFX0ZPUl9QTEFDRUhPTERFUlxuICBjb25zdCBzaG91bGRTaG93Qmx1cnJ5UGxhY2Vob2xkZXIgPVxuICAgIHBsYWNlaG9sZGVyID09PSAnYmx1cicgJiYgIXRvb1NtYWxsRm9yQmx1cnJ5UGxhY2Vob2xkZXJcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG5cbiAgICAuLi4oc2hvdWxkU2hvd0JsdXJyeVBsYWNlaG9sZGVyXG4gICAgICA/IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIH1cbiAgICAgIDogdW5kZWZpbmVkKSxcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgeyFpc1Zpc2libGUgJiYgKFxuICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgICAgbG9hZGVyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICl9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9eyhlbGVtZW50KSA9PiB7XG4gICAgICAgICAgc2V0UmVmKGVsZW1lbnQpXG4gICAgICAgICAgcmVtb3ZlUGxhY2Vob2xkZXIoZWxlbWVudCwgcGxhY2Vob2xkZXIpXG4gICAgICAgIH19XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzcmNzZXQ9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0fVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLmFzUGF0aCkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Db250YWN0c19jb250YWN0c19fM1FCUzIgc3BhbiB7XFxuICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcXG59XFxuXFxuLkNvbnRhY3RzX3NvY2lhbHNDb250YWluZXJfXzI5emRNIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICBtYXgtd2lkdGg6IDE2MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuQ29udGFjdHNfc29jaWFsc0NvbnRhaW5lcl9fMjl6ZE0ge1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxuICB9XFxufVxcbi5Db250YWN0c19zb2NpYWxzQ29udGFpbmVyX18yOXpkTSAuQ29udGFjdHNfc29jaWFsSXRlbV9fM0FOalAge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5Db250YWN0c19zb2NpYWxzQ29udGFpbmVyX18yOXpkTSAuQ29udGFjdHNfc29jaWFsSXRlbV9fM0FOalAgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uQ29udGFjdHNfZmFjZWJvb2tMaWtlX18zeUlBMSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLkNvbnRhY3RzX3N0b3JlQnV0dG9uc19fMmtjT0sgPiBkaXYge1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vQ29udGFjdHMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0U7RUFDRSwwQkFBQTtBQUFKOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFURjtJQVVJLFlBQUE7SUFDQSxnQkFBQTtFQUFGO0FBQ0Y7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUo7QUFFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQU47O0FBS0E7RUFDRSxpQkFBQTtBQUZGOztBQU1FO0VBQ0UsZUFBQTtBQUhKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5jb250YWN0cyB7XFxyXFxuICBzcGFuIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWxzQ29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgbWFyZ2luLXRvcDogMjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDE2MHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgICB3aWR0aDogMTYwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuc29jaWFsSXRlbSB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuXFxyXFxuICAgIGltZyB7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mYWNlYm9va0xpa2Uge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zdG9yZUJ1dHRvbnMge1xcclxcbiAgPiBkaXYge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImNvbnRhY3RzXCI6IFwiQ29udGFjdHNfY29udGFjdHNfXzNRQlMyXCIsXG5cdFwic29jaWFsc0NvbnRhaW5lclwiOiBcIkNvbnRhY3RzX3NvY2lhbHNDb250YWluZXJfXzI5emRNXCIsXG5cdFwic29jaWFsSXRlbVwiOiBcIkNvbnRhY3RzX3NvY2lhbEl0ZW1fXzNBTmpQXCIsXG5cdFwiZmFjZWJvb2tMaWtlXCI6IFwiQ29udGFjdHNfZmFjZWJvb2tMaWtlX18zeUlBMVwiLFxuXHRcInN0b3JlQnV0dG9uc1wiOiBcIkNvbnRhY3RzX3N0b3JlQnV0dG9uc19fMmtjT0tcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQ29udGVudF9saXN0X18yTXo3VCB7XFxuICBtYXJnaW46IDAgMTVweCA1MHB4IDE1cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxuICAuQ29udGVudF9saXN0X18yTXo3VCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLkNvbnRlbnRfbGlzdF9fMk16N1QgLkNvbnRlbnRfaXRlbV9fX1A0bUMge1xcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xcbiAgfVxcbn1cXG4uQ29udGVudF9saXN0X18yTXo3VCBoNSB7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0NvbnRlbnQubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx3QkFBQTtBQUNGO0FBQ0U7RUFIRjtJQUlJLGNBQUE7RUFFRjtBQUNGO0FBREU7RUFDRTtJQUNFLGdCQUFBO0VBR0o7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUVKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5saXN0IHtcXHJcXG4gIG1hcmdpbjogMCAxNXB4IDUwcHggMTVweDtcXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAwO1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gICAgLml0ZW0ge1xcclxcbiAgICAgIG1heC13aWR0aDogMTIwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGg1IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwibGlzdFwiOiBcIkNvbnRlbnRfbGlzdF9fMk16N1RcIixcblx0XCJpdGVtXCI6IFwiQ29udGVudF9pdGVtX19fUDRtQ1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Gb290ZXJfZm9vdGVyX18xX0tTaCB7XFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcbn1cXG5cXG4uRm9vdGVyX2Zvb3RlcklubmVyX18zampBbSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLkZvb3Rlcl9kb3dubG9hZEFwcF9fM1JDOC0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uRm9vdGVyX2N1cnZlX18ydnU4bCB7XFxuICB3aWR0aDogY2FsYygxMDB2dyArIDJweCk7XFxuICBtYXJnaW4tbGVmdDogLTFweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIG1heC1oZWlnaHQ6IDEwMnB4O1xcbn1cXG4uRm9vdGVyX2N1cnZlX18ydnU4bCA+IGRpdiB7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcbi5Gb290ZXJfY3VydmVfXzJ2dThsIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLkZvb3Rlcl9jdXJ2ZV9fMnZ1OGwuRm9vdGVyX2Fic29sdXRlX19jSG1RVSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDgwcHg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLkZvb3Rlcl9jb250ZW50X19RSC1CMyB7XFxuICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbmF2eSk7XFxufVxcbi5Gb290ZXJfY29udGVudF9fUUgtQjMuRm9vdGVyX3BhZGRlZENvbnRlbnRfXzFCMnkzIHtcXG4gIG1hcmdpbi10b3A6IC04MnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxuICBwYWRkaW5nLXRvcDogODBweDtcXG59XFxuLkZvb3Rlcl9jb250ZW50X19RSC1CMyAuRm9vdGVyX2NvbnRlbnRJbm5lcl9fMU9PR0Ege1xcbiAgbWF4LXdpZHRoOiAxMDAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDgwcHggMTVweCA1MHB4IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuRm9vdGVyX2NvbnRlbnRfX1FILUIzIC5Gb290ZXJfY29udGVudElubmVyX18xT09HQSB7XFxuICAgIHBhZGRpbmc6IDUwcHggMTVweCAxMDBweCAxNXB4O1xcbiAgfVxcbn1cXG4uRm9vdGVyX2NvbnRlbnRfX1FILUIzIC5Gb290ZXJfY29udGVudElubmVyX18xT09HQS5Gb290ZXJfdXNlQ29tcGFjdF9fMVpFUU4ge1xcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XFxuICBwYWRkaW5nLXRvcDogNTBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcXG4gIC5Gb290ZXJfY29udGVudF9fUUgtQjMgLkZvb3Rlcl9jb250ZW50SW5uZXJfXzFPT0dBLkZvb3Rlcl91c2VDb21wYWN0X18xWkVRTiB7XFxuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG59XFxuLkZvb3Rlcl9jb250ZW50X19RSC1CMyBhLCAuRm9vdGVyX2NvbnRlbnRfX1FILUIzIHAsIC5Gb290ZXJfY29udGVudF9fUUgtQjMgaDUsIC5Gb290ZXJfY29udGVudF9fUUgtQjMgc3BhbiB7XFxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxufVxcbi5Gb290ZXJfY29udGVudF9fUUgtQjMgcCwgLkZvb3Rlcl9jb250ZW50X19RSC1CMyBoNSwgLkZvb3Rlcl9jb250ZW50X19RSC1CMyBzcGFuIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLkZvb3Rlcl9jb250ZW50X19RSC1CMyBoNSB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vRm9vdGVyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUZGO0FBSUU7RUFDRSxZQUFBO0FBRko7QUFLRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBSEo7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsWUFuQ2lCO0VBb0NqQixXQUFBO0FBSko7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLG1DQUFBO0FBTEY7QUFPRTtFQUNFLGlCQUFBO0VBQ0Esb0JBOUNpQjtFQStDakIsaUJBL0NpQjtBQTBDckI7QUFRRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQU5KO0FBUUk7RUFSRjtJQVNJLDZCQUFBO0VBTEo7QUFDRjtBQU9JO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUxOO0FBT007RUFKRjtJQUtJLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0VBSk47QUFDRjtBQVFFO0VBQ0UscUJBQUE7QUFOSjtBQVVFO0VBQ0UsWUFBQTtBQVJKO0FBWUU7RUFDRSxnQkFBQTtBQVZKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbiRkb3dubG9hZEFwcFBhZGRpbmc6IDgwcHg7XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVySW5uZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5kb3dubG9hZEFwcCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jdXJ2ZSB7XFxyXFxuICB3aWR0aDogY2FsYygxMDB2dyArIDJweCk7XFxyXFxuICBtYXJnaW4tbGVmdDogLTFweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMnB4O1xcclxcblxcclxcbiAgPiBkaXYge1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5hYnNvbHV0ZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYm90dG9tOiAkZG93bmxvYWRBcHBQYWRkaW5nO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQge1xcclxcbiAgbWFyZ2luLXRvcDogLTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW5hdnkpO1xcclxcblxcclxcbiAgJi5wYWRkZWRDb250ZW50IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogLSRkb3dubG9hZEFwcFBhZGRpbmcgLSAycHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAkZG93bmxvYWRBcHBQYWRkaW5nO1xcclxcbiAgICBwYWRkaW5nLXRvcDogJGRvd25sb2FkQXBwUGFkZGluZztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250ZW50SW5uZXIge1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDgwcHggMTVweCA1MHB4IDE1cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICAgICAgcGFkZGluZzogNTBweCAxNXB4IDEwMHB4IDE1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJi51c2VDb21wYWN0IHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDEyMDBweDtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xcclxcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhLCBwLCBoNSwgc3BhbiB7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXHJcXG4gICAgLy8gQGV4dGVuZCAlbm9ybWFsLXRleHQtdGVtcGxhdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBwLCBoNSwgc3BhbiB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbiAgaDUge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJmb290ZXJcIjogXCJGb290ZXJfZm9vdGVyX18xX0tTaFwiLFxuXHRcImZvb3RlcklubmVyXCI6IFwiRm9vdGVyX2Zvb3RlcklubmVyX18zampBbVwiLFxuXHRcImRvd25sb2FkQXBwXCI6IFwiRm9vdGVyX2Rvd25sb2FkQXBwX18zUkM4LVwiLFxuXHRcImN1cnZlXCI6IFwiRm9vdGVyX2N1cnZlX18ydnU4bFwiLFxuXHRcImFic29sdXRlXCI6IFwiRm9vdGVyX2Fic29sdXRlX19jSG1RVVwiLFxuXHRcImNvbnRlbnRcIjogXCJGb290ZXJfY29udGVudF9fUUgtQjNcIixcblx0XCJwYWRkZWRDb250ZW50XCI6IFwiRm9vdGVyX3BhZGRlZENvbnRlbnRfXzFCMnkzXCIsXG5cdFwiY29udGVudElubmVyXCI6IFwiRm9vdGVyX2NvbnRlbnRJbm5lcl9fMU9PR0FcIixcblx0XCJ1c2VDb21wYWN0XCI6IFwiRm9vdGVyX3VzZUNvbXBhY3RfXzFaRVFOXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkZvb3RlckxpbmtfaXRlbV9fMi1pX1Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1heC13aWR0aDogMjMwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uRm9vdGVyTGlua19pdGVtX18yLWlfVCAuRm9vdGVyTGlua19pbWFnZV9fMWFwNF8ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgbWluLXdpZHRoOiAyMHB4O1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxufVxcbi5Gb290ZXJMaW5rX2l0ZW1fXzItaV9UIGEge1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tY29sb3I6IHdoaXRlO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHdoaXRlO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vRm9vdGVyTGluay5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7QUFDSjtBQUVFO0VBQ0Usb0NBQUE7VUFBQSw0QkFBQTtBQUFKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBtYXgtd2lkdGg6IDIzMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG5cXHJcXG4gIC5pbWFnZSB7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgbWluLXdpZHRoOiAyMHB4O1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJpdGVtXCI6IFwiRm9vdGVyTGlua19pdGVtX18yLWlfVFwiLFxuXHRcImltYWdlXCI6IFwiRm9vdGVyTGlua19pbWFnZV9fMWFwNF9cIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuTWFzRm9vdGVyX21hc0Zvb3Rlcl9fVDNleVUge1xcbiAgbWFyZ2luLXRvcDogNDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLk1hc0Zvb3Rlcl9tYXNGb290ZXJfX1QzZXlVIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL01hc0Zvb3Rlci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQ0U7RUFKRjtJQUtJLGdCQUFBO0VBRUY7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFzRm9vdGVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1hc0Zvb3RlclwiOiBcIk1hc0Zvb3Rlcl9tYXNGb290ZXJfX1QzZXlVXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLlN0b3JlQnV0dG9uc19zdG9yZUJ1dHRvbnNfXzFJd25MIHtcXG4gIG1heC13aWR0aDogMzMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLlN0b3JlQnV0dG9uc19zdG9yZUJ1dHRvbnNfXzFJd25MIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgLlN0b3JlQnV0dG9uc19zdG9yZUJ1dHRvbnNfXzFJd25MIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG59XFxuLlN0b3JlQnV0dG9uc19zdG9yZUJ1dHRvbnNfXzFJd25MLlN0b3JlQnV0dG9uc19zbWFsbF9fMzEwLUsge1xcbiAgbWF4LXdpZHRoOiAyNzBweDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5TdG9yZUJ1dHRvbnNfc3RvcmVCdXR0b25zX18xSXduTC5TdG9yZUJ1dHRvbnNfc21hbGxfXzMxMC1LIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgLlN0b3JlQnV0dG9uc19zdG9yZUJ1dHRvbnNfXzFJd25MLlN0b3JlQnV0dG9uc19zbWFsbF9fMzEwLUsge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxuICB9XFxufVxcbi5TdG9yZUJ1dHRvbnNfc3RvcmVCdXR0b25zX18xSXduTC5TdG9yZUJ1dHRvbnNfc21hbGxfXzMxMC1LIGEge1xcbiAgbWF4LXdpZHRoOiAxMTBweDtcXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLlN0b3JlQnV0dG9uc19zdG9yZUJ1dHRvbnNfXzFJd25MLlN0b3JlQnV0dG9uc19zbWFsbF9fMzEwLUsgYTpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXgtd2lkdGg6IDEyNXB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5TdG9yZUJ1dHRvbnNfc3RvcmVCdXR0b25zX18xSXduTCBhIHtcXG4gIG1heC13aWR0aDogMTUwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uU3RvcmVCdXR0b25zX3N0b3JlQnV0dG9uc19fMUl3bkwgYSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuICAuU3RvcmVCdXR0b25zX3N0b3JlQnV0dG9uc19fMUl3bkwgYTpudGgtb2YtdHlwZSgxKSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICB9XFxufVxcbi5TdG9yZUJ1dHRvbnNfc3RvcmVCdXR0b25zX18xSXduTCBhOm50aC1vZi10eXBlKDIpIHtcXG4gIG1heC13aWR0aDogMTY1cHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxuICAuU3RvcmVCdXR0b25zX3N0b3JlQnV0dG9uc19fMUl3bkwgYTpudGgtb2YtdHlwZSgyKSB7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9TdG9yZUJ1dHRvbnMubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUNGO0FBQ0U7RUFMRjtJQU1JLFlBQUE7RUFFRjtBQUNGO0FBREU7RUFSRjtJQVNJLHNCQUFBO0lBQ0EsbUJBQUE7RUFJRjtBQUNGO0FBRkU7RUFDRSxnQkFBQTtBQUlKO0FBRkk7RUFIRjtJQUlJLFNBQUE7SUFDQSxnQkFBQTtFQUtKO0FBQ0Y7QUFKSTtFQVBGO0lBUUksOEJBQUE7RUFPSjtBQUNGO0FBTEk7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7QUFPTjtBQUxNO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQU9SO0FBRkU7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBSUo7QUFBSTtFQUNFLFdBQUE7QUFFTjtBQUdNO0VBREY7SUFFSSxtQkFBQTtFQUFOO0FBQ0Y7QUFHSTtFQUNFLGdCQUFBO0FBRE47QUFHTTtFQUhGO0lBSUksZ0JBQUE7RUFBTjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zdG9yZUJ1dHRvbnMge1xcclxcbiAgbWF4LXdpZHRoOiAzMzBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgJi5zbWFsbCB7XFxyXFxuICAgIG1heC13aWR0aDogMjcwcHg7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgIG1heC13aWR0aDogMjUwcHg7XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93ICFpbXBvcnRhbnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAxMTBweDtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcblxcclxcbiAgICAgICY6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMjVweDtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgYSB7XFxyXFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxyXFxuICAgIC8vICAgbWF4LXdpZHRoOiAxMjBweDtcXHJcXG4gICAgLy8gfVxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIC8vIGhlaWdodDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOm50aC1vZi10eXBlKDEpIHtcXHJcXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpudGgtb2YtdHlwZSgyKSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAxNjVweDtcXHJcXG5cXHJcXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic3RvcmVCdXR0b25zXCI6IFwiU3RvcmVCdXR0b25zX3N0b3JlQnV0dG9uc19fMUl3bkxcIixcblx0XCJzbWFsbFwiOiBcIlN0b3JlQnV0dG9uc19zbWFsbF9fMzEwLUtcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvKipcbiAqIElzb21vcnBoaWMgYmFzZTY0IHRoYXQgd29ya3Mgb24gdGhlIHNlcnZlciBhbmQgY2xpZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0Jhc2U2NChzdHI6IHN0cmluZykge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gQnVmZmVyLmZyb20oc3RyKS50b1N0cmluZygnYmFzZTY0JylcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gd2luZG93LmJ0b2Eoc3RyKVxuICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmltYWdlQ29uZmlnRGVmYXVsdD1leHBvcnRzLlZBTElEX0xPQURFUlM9dm9pZCAwO2NvbnN0IFZBTElEX0xPQURFUlM9WydkZWZhdWx0JywnaW1naXgnLCdjbG91ZGluYXJ5JywnYWthbWFpJ107ZXhwb3J0cy5WQUxJRF9MT0FERVJTPVZBTElEX0xPQURFUlM7Y29uc3QgaW1hZ2VDb25maWdEZWZhdWx0PXtkZXZpY2VTaXplczpbNjQwLDc1MCw4MjgsMTA4MCwxMjAwLDE5MjAsMjA0OCwzODQwXSxpbWFnZVNpemVzOlsxNiwzMiw0OCw2NCw5NiwxMjgsMjU2LDM4NF0scGF0aDonL19uZXh0L2ltYWdlJyxsb2FkZXI6J2RlZmF1bHQnLGRvbWFpbnM6W10sZW5hYmxlQmx1cnJ5UGxhY2Vob2xkZXI6ZmFsc2V9O2V4cG9ydHMuaW1hZ2VDb25maWdEZWZhdWx0PWltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLWNvbmZpZy5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FwcFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYXBwLnRzXCIsXG5cdFwiLi9hcHAudHNcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2FwcC50c1wiLFxuXHRcIi4vY29tbW9uXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jb21tb24udHNcIixcblx0XCIuL2NvbW1vbi50c1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY29tbW9uLnRzXCIsXG5cdFwiLi9pY29uc1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMudHNcIixcblx0XCIuL2ljb25zLnRzXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy50c1wiLFxuXHRcIi4vbW9ja1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbW9jay50c1wiLFxuXHRcIi4vbW9jay50c1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbW9jay50c1wiLFxuXHRcIi4vbmF2aWdhdGlvblwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbmF2aWdhdGlvbi50c1wiLFxuXHRcIi4vbmF2aWdhdGlvbi50c1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbmF2aWdhdGlvbi50c1wiLFxuXHRcIi4vcHJvZHVjdFwiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdC50c1wiLFxuXHRcIi4vcHJvZHVjdC50c1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJvZHVjdC50c1wiLFxuXHRcIi4vc29jaWFsc1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc29jaWFscy50c1wiLFxuXHRcIi4vc29jaWFscy50c1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc29jaWFscy50c1wiLFxuXHRcIi4vdmVyY2VsXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy92ZXJjZWwudHNcIixcblx0XCIuL3ZlcmNlbC50c1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdmVyY2VsLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCJpbXBvcnQgeyBJbWFnZVByb3BzIH0gZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5leHBvcnQgY29uc3QgYXBwX3N0b3JlX2JhZGdlOiBJbWFnZVByb3BzID0ge1xyXG4gIHNyYzogJy9zdGF0aWMvaW1hZ2VzL2FwcC9hcHBfc3RvcmVfYmFkZ2UucG5nJyxcclxuICBhbHQ6ICdEb3dubG9hZCBQb2xpY3lQYWwgQXBwIG9uIEFwcGxlIFN0b3JlJyxcclxuICB3aWR0aDogMTk4LFxyXG4gIGhlaWdodDogNjYsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcGxheV9zdG9yZV9iYWRnZTogSW1hZ2VQcm9wcyA9IHtcclxuICBzcmM6ICcvc3RhdGljL2ltYWdlcy9hcHAvZ29vZ2xlX3BsYXlfYmFkZ2UucG5nJyxcclxuICBhbHQ6ICdEb3dubG9hZCBQb2xpY3lQYWwgQXBwIG9uIEdvb2dsZSBQbGF5IFN0b3JlJyxcclxuICB3aWR0aDogMjE5LFxyXG4gIGhlaWdodDogNjYsXHJcbn07XHJcbiIsImltcG9ydCB7IEltYWdlUHJvcHMgfSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBzdWJzY3JpYmU6IEltYWdlUHJvcHMgPSB7XHJcbiAgc3JjOiAnL3N0YXRpYy9pbWFnZXMvY29tbW9uL3N1YnNjcmliZS5wbmcnLFxyXG4gIGFsdDogJ0Rvd25sb2FkIFBvbGljeVBhbCBBcHAgdG8gZ2V0IGNvdmVyZWQnLFxyXG4gIHdpZHRoOiAzNDMsXHJcbiAgaGVpZ2h0OiA0MTgsXHJcbn07XHJcbiIsImltcG9ydCB7IEltYWdlUHJvcHMgfSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBlbWFpbDogSW1hZ2VQcm9wcyA9IHtcclxuICBzcmM6ICcvc3RhdGljL2ltYWdlcy9pY29ucy9lbWFpbC5zdmcnLFxyXG4gIGFsdDogJ0VtYWlsJyxcclxuICB3aWR0aDogMTksXHJcbiAgaGVpZ2h0OiAxNCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2NhdGlvbjogSW1hZ2VQcm9wcyA9IHtcclxuICBzcmM6ICcvc3RhdGljL2ltYWdlcy9pY29ucy9sb2NhdGlvbi5zdmcnLFxyXG4gIGFsdDogJ0xvY2F0aW9uJyxcclxuICB3aWR0aDogMTUsXHJcbiAgaGVpZ2h0OiAxOCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBwaG9uZTogSW1hZ2VQcm9wcyA9IHtcclxuICBzcmM6ICcvc3RhdGljL2ltYWdlcy9pY29ucy9waG9uZS5zdmcnLFxyXG4gIGFsdDogJ1Bob25lJyxcclxuICB3aWR0aDogMTYsXHJcbiAgaGVpZ2h0OiAxNixcclxufTtcclxuIiwiaW1wb3J0IHsgSW1hZ2VQcm9wcyB9IGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuY29uc3QgdGVzdDogSW1hZ2VQcm9wcyA9IHtcclxuICBzcmM6ICcvc3RhdGljL2ltYWdlcy90ZXN0L2R1bW15LnN2ZycsXHJcbiAgYWx0OiAnRHVtbXkgSW1hZ2UnLFxyXG4gIGxheW91dDogJ3Jlc3BvbnNpdmUnLFxyXG4gIHdpZHRoOiAyODMsXHJcbiAgaGVpZ2h0OiA2NCxcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIHRlc3QsXHJcbn07XHJcbiIsImltcG9ydCB7IEltYWdlUHJvcHMgfSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJfYmc6IEltYWdlUHJvcHMgPSB7XHJcbiAgc3JjOiAnL3N0YXRpYy9pbWFnZXMvbmF2aWdhdGlvbi9mb290ZXJfYmcuc3ZnJyxcclxuICBhbHQ6ICdGb290ZXInLFxyXG4gIHdpZHRoOiAxOTIwLFxyXG4gIGhlaWdodDogMTE1LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBJbWFnZVByb3BzIH0gZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2ltcGxlX2NyaXRpY2FsX2lsbG5lc3M6IEltYWdlUHJvcHMgPSB7XHJcbiAgc3JjOiAnL3N0YXRpYy9pbWFnZXMvcHJvZHVjdC9zaW1wbGVfY3JpdGljYWxfaWxsbmVzcy5zdmcnLFxyXG4gIGFsdDogJ0NyaXRpY2FsIElsbG5lc3MgSW5zdXJhbmNlIC0gUG9saWN5UGFsJyxcclxuICB3aWR0aDogMTg3LFxyXG4gIGhlaWdodDogMTg3LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbXBsZV9lbmRvd21lbnQ6IEltYWdlUHJvcHMgPSB7XHJcbiAgc3JjOiAnL3N0YXRpYy9pbWFnZXMvcHJvZHVjdC9zaW1wbGVfZW5kb3dtZW50LnN2ZycsXHJcbiAgYWx0OiAnRW5kb3dtZW50L1NhdmluZ3MgSW5zdXJhbmNlIC0gUG9saWN5UGFsJyxcclxuICB3aWR0aDogMTg3LFxyXG4gIGhlaWdodDogMTg3LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbXBsZV9oZWFsdGg6IEltYWdlUHJvcHMgPSB7XHJcbiAgc3JjOiAnL3N0YXRpYy9pbWFnZXMvcHJvZHVjdC9zaW1wbGVfaGVhbHRoLnN2ZycsXHJcbiAgYWx0OiAnSW50ZWdyYXRlZCBTaGllbGQgUGxhbnMgLSBQb2xpY3lQYWwnLFxyXG4gIHdpZHRoOiAxODcsXHJcbiAgaGVpZ2h0OiAxODcsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2ltcGxlX21vcmU6IEltYWdlUHJvcHMgPSB7XHJcbiAgc3JjOiAnL3N0YXRpYy9pbWFnZXMvcHJvZHVjdC9zaW1wbGVfbW9yZS5zdmcnLFxyXG4gIGFsdDogJ01vcmUgSW5zdXJhbmNlIC0gUG9saWN5UGFsJyxcclxuICB3aWR0aDogMTg3LFxyXG4gIGhlaWdodDogMTg3LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbXBsZV9tb3RvcjogSW1hZ2VQcm9wcyA9IHtcclxuICBzcmM6ICcvc3RhdGljL2ltYWdlcy9wcm9kdWN0L3NpbXBsZV9tb3Rvci5zdmcnLFxyXG4gIGFsdDogJ01vdG9yIEluc3VyYW5jZSAtIFBvbGljeVBhbCcsXHJcbiAgd2lkdGg6IDE4NyxcclxuICBoZWlnaHQ6IDE4NyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaW1wbGVfcGVyc29uYWxfYWNjaWRlbnQ6IEltYWdlUHJvcHMgPSB7XHJcbiAgc3JjOiAnL3N0YXRpYy9pbWFnZXMvcHJvZHVjdC9zaW1wbGVfcGVyc29uYWxfYWNjaWRlbnQuc3ZnJyxcclxuICBhbHQ6ICdQZXJzb25hbCBBY2NpZGVudCBJbnN1cmFuY2UgLSBQb2xpY3lQYWwnLFxyXG4gIHdpZHRoOiAxODcsXHJcbiAgaGVpZ2h0OiAxODcsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2ltcGxlX3BldDogSW1hZ2VQcm9wcyA9IHtcclxuICBzcmM6ICcvc3RhdGljL2ltYWdlcy9wcm9kdWN0L3NpbXBsZV9wZXQuc3ZnJyxcclxuICBhbHQ6ICdQZXQgSW5zdXJhbmNlIC0gUG9saWN5UGFsJyxcclxuICB3aWR0aDogMTg3LFxyXG4gIGhlaWdodDogMTg3LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbXBsZV9yZXRpcmVtZW50OiBJbWFnZVByb3BzID0ge1xyXG4gIHNyYzogJy9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3Qvc2ltcGxlX3JldGlyZW1lbnQuc3ZnJyxcclxuICBhbHQ6ICdBbm51aXR5IFBsYW5zIC0gUG9saWN5UGFsJyxcclxuICB3aWR0aDogMTg3LFxyXG4gIGhlaWdodDogMTg3LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbXBsZV90ZXJtX2xpZmU6IEltYWdlUHJvcHMgPSB7XHJcbiAgc3JjOiAnL3N0YXRpYy9pbWFnZXMvcHJvZHVjdC9zaW1wbGVfdGVybV9saWZlLnN2ZycsXHJcbiAgYWx0OiAnVGVybSBMaWZlIEluc3VyYW5jZSAtIFBvbGljeVBhbCcsXHJcbiAgd2lkdGg6IDE4NyxcclxuICBoZWlnaHQ6IDE4NyxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaW1wbGVfdHJhdmVsOiBJbWFnZVByb3BzID0ge1xyXG4gIHNyYzogJy9zdGF0aWMvaW1hZ2VzL3Byb2R1Y3Qvc2ltcGxlX3RyYXZlbC5zdmcnLFxyXG4gIGFsdDogJ1RyYXZlbCBJbnN1cmFuY2UgLSBQb2xpY3lQYWwnLFxyXG4gIHdpZHRoOiAxODcsXHJcbiAgaGVpZ2h0OiAxODcsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2ltcGxlX3dob2xlX2xpZmU6IEltYWdlUHJvcHMgPSB7XHJcbiAgc3JjOiAnL3N0YXRpYy9pbWFnZXMvcHJvZHVjdC9zaW1wbGVfd2hvbGVfbGlmZS5zdmcnLFxyXG4gIGFsdDogJ1dob2xlIExpZmUgSW5zdXJhbmNlIC0gUG9saWN5UGFsJyxcclxuICB3aWR0aDogMTg3LFxyXG4gIGhlaWdodDogMTg3LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBJbWFnZVByb3BzIH0gZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5leHBvcnQgY29uc3QgZmFjZWJvb2s6IEltYWdlUHJvcHMgPSB7XHJcbiAgc3JjOiAnL3N0YXRpYy9pbWFnZXMvc29jaWFscy9mYWNlYm9vay5zdmcnLFxyXG4gIGFsdDogJ0ZhY2Vib29rJyxcclxuICB3aWR0aDogMzcsXHJcbiAgaGVpZ2h0OiAzOCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbnN0YWdyYW06IEltYWdlUHJvcHMgPSB7XHJcbiAgc3JjOiAnL3N0YXRpYy9pbWFnZXMvc29jaWFscy9pbnN0YWdyYW0uc3ZnJyxcclxuICBhbHQ6ICdJbnN0YWdyYW0nLFxyXG4gIHdpZHRoOiAzNyxcclxuICBoZWlnaHQ6IDM4LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpbmtlZGluOiBJbWFnZVByb3BzID0ge1xyXG4gIHNyYzogJy9zdGF0aWMvaW1hZ2VzL3NvY2lhbHMvbGlua2VkaW4uc3ZnJyxcclxuICBhbHQ6ICdMaW5rZWRpbicsXHJcbiAgd2lkdGg6IDM3LFxyXG4gIGhlaWdodDogMzgsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgeW91dHViZTogSW1hZ2VQcm9wcyA9IHtcclxuICBzcmM6ICcvc3RhdGljL2ltYWdlcy9zb2NpYWxzL3lvdXR1YmUuc3ZnJyxcclxuICBhbHQ6ICdZb3V0dWJlJyxcclxuICB3aWR0aDogMzcsXHJcbiAgaGVpZ2h0OiAzNyxcclxufTtcclxuIiwiaW1wb3J0IHsgSW1hZ2VQcm9wcyB9IGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHZlcmNlbDogSW1hZ2VQcm9wcyA9IHtcclxuICBzcmM6ICcvc3RhdGljL2ltYWdlcy92ZXJjZWwvdmVyY2VsLnN2ZycsXHJcbiAgYWx0OiAnVmVyY2VsJyxcclxuICAvLyBsYXlvdXQ6ICdyZXNwb25zaXZlJyxcclxuICB3aWR0aDogNzIsXHJcbiAgaGVpZ2h0OiAxNixcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBkb3dubG9hZDogSW1hZ2VQcm9wcyA9IHtcclxuLy8gICBzcmM6IHJlcXVpcmUoJy4vZG93bmxvYWQucG5nJyksXHJcbi8vICAgYWx0OiAnVmVyY2VsJyxcclxuLy8gICAvLyBsYXlvdXQ6ICdyZXNwb25zaXZlJyxcclxuLy8gICB3aWR0aDogNzIsXHJcbi8vICAgaGVpZ2h0OiAxNixcclxuLy8gfTtcclxuLy8gY29uc3QgZGF0YTogUmVjb3JkPHN0cmluZywgSW1hZ2VQcm9wcz4gPSB7XHJcbi8vICAgdmVyY2VsOiB7XHJcbi8vICAgICBzcmM6IHJlcXVpcmUoJy4vdmVyY2VsLnN2ZycpLFxyXG4vLyAgICAgYWx0OiAnVmVyY2VsJyxcclxuLy8gICAgIGxheW91dDogJ3Jlc3BvbnNpdmUnLFxyXG4vLyAgICAgd2lkdGg6IDI4MyxcclxuLy8gICAgIGhlaWdodDogNjQsXHJcbi8vICAgfSxcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGRhdGE7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEFwcEFuY2hvcjogRkM8UmVhY3QuQW5jaG9ySFRNTEF0dHJpYnV0ZXM8SFRNTEFuY2hvckVsZW1lbnQ+ICYgeyBpZDogc3RyaW5nIH0+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICBocmVmLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IChcclxuICA8YSB7Li4ucHJvcHN9IGhyZWY9e2hyZWY/LnRvU3RyaW5nKCl9IHRhcmdldD1cIl9fYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9hPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwQW5jaG9yO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BcHBBbmNob3InO1xyXG4iLCJpbXBvcnQgeyBtZW1vLCBGQywgUHJvcHNXaXRoQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rLCB7IExpbmtQcm9wcyB9IGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IGlzVGhlbWVTd2l0Y2ggfSBmcm9tICdsaWIvbmF2aWdhdGlvbic7XHJcblxyXG5jb25zdCBBcHBMaW5rOiBGQzxQcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHMgJiB7IGlkOiBzdHJpbmcgfT4+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICBocmVmLFxyXG4gIC4uLnByb3BzXHJcbn0pID0+IHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgaWYgKGlzVGhlbWVTd2l0Y2gocGF0aG5hbWUsIGhyZWYudG9TdHJpbmcoKSkpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxhIHsuLi5wcm9wc30gaHJlZj17aHJlZi50b1N0cmluZygpfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvYT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgey4uLnByb3BzfSBocmVmPXtocmVmfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEFwcExpbmspO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9BcHBMaW5rJztcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Db250YWN0cy5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQ29udGFjdHMubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Db250YWN0cy5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tICdjb25zdGFudHMvdGhlbWUnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5pbXBvcnQgeyBjb250YWN0UFBTQXJyYXksIGNvbnRhY3RQUFRBcnJheSwgc29jaWFsc0FycmF5IH0gZnJvbSAnY29uc3RhbnRzL2NvbXBhbnknO1xyXG5pbXBvcnQgZ3RtVHJhY2tlciBmcm9tICdjb25zdGFudHMvdHJhY2tpbmcvYnV0dG9ucy9mb290ZXInO1xyXG5cclxuaW1wb3J0IEFwcEFuY2hvciBmcm9tICdjb21wb25lbnRzL0FwcEFuY2hvcic7XHJcblxyXG5pbXBvcnQgRm9vdGVyTGluayBmcm9tICcuLi9Gb290ZXJMaW5rJztcclxuaW1wb3J0IEZhY2Vib29rTGlrZSBmcm9tICcuLi9GYWNlYm9va0xpa2UnO1xyXG5pbXBvcnQgU3RvcmVCdXR0b25zIGZyb20gJy4uL1N0b3JlQnV0dG9ucyc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGFjdHMubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgQ29udGFjdHM6IFJlYWN0LkZDPHsgdGhlbWVTZXR0aW5nOiBUaGVtZVR5cGUgfT4gPSAoeyB0aGVtZVNldHRpbmcgfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdHN9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0fT5cclxuICAgICAgeyh0aGVtZVNldHRpbmcudGhlbWUgPT09ICdwcHQnID8gY29udGFjdFBQVEFycmF5IDogY29udGFjdFBQU0FycmF5KS5tYXAoKGNvbnRhY3QpID0+IChcclxuICAgICAgICA8Rm9vdGVyTGluayBrZXk9e2NvbnRhY3QudGV4dH0gZGF0YT17Y29udGFjdH0gdHlwZT1cImNvbnRhY3RcIiAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICAge3RoZW1lU2V0dGluZy50aGVtZSA9PT0gJ3BwdCcgJiYgKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc29jaWFsc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7c29jaWFsc0FycmF5Lm1hcCgoc29jaWFsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17YHNvY2lhbC0ke2luZGV4fWB9IGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbEl0ZW19PlxyXG4gICAgICAgICAgICAgIDxBcHBBbmNob3JcclxuICAgICAgICAgICAgICAgIGlkPXtndG1UcmFja2VyLk5BVl9GT09URVJfU09DSUFMLmlkLnJlcGxhY2UoJ3h4eCcsIHNvY2lhbC5rZXkpfVxyXG4gICAgICAgICAgICAgICAgaHJlZj17c29jaWFsLmhyZWZ9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHsuLi5zb2NpYWwuaW1nfSAvPlxyXG4gICAgICAgICAgICAgIDwvQXBwQW5jaG9yPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmFjZWJvb2tMaWtlfT5cclxuICAgICAgICAgIDxGYWNlYm9va0xpa2UgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0b3JlQnV0dG9uc30+XHJcbiAgICAgICAgICA8aDU+TU9CSUxFIEFQUDwvaDU+XHJcbiAgICAgICAgICA8U3RvcmVCdXR0b25zIHNtYWxsZXJCdXR0b25zIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKX1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ29udGFjdHMpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db250YWN0cyc7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQ29udGVudC5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQ29udGVudC5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NvbnRlbnQubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnY29uc3RhbnRzL3RoZW1lJztcclxuXHJcbmltcG9ydCB7IHByb2R1Y3RzIH0gZnJvbSAnY29uc3RhbnRzL3Byb2R1Y3RzJztcclxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ2NvbnN0YW50cy9wcm9kdWN0cyc7XHJcblxyXG5pbXBvcnQgeyBsaXN0Q29udGVudCB9IGZyb20gJy4uL0Zvb3Rlci5jb250ZW50JztcclxuaW1wb3J0IEZvb3RlckxpbmsgZnJvbSAnLi4vRm9vdGVyTGluayc7XHJcblxyXG5pbXBvcnQgeyBGb290ZXJDb250ZW50SXRlbSB9IGZyb20gJy4uL0Zvb3Rlci5jb250ZW50JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250ZW50Lm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IENvbnRlbnQ6IFJlYWN0LkZDPHsgdGhlbWVTZXR0aW5nOiBUaGVtZVR5cGUgfT4gPSAoeyB0aGVtZVNldHRpbmcgfSkgPT4gKFxyXG4gIDw+XHJcbiAgICB7bGlzdENvbnRlbnRbdGhlbWVTZXR0aW5nLnRoZW1lXS5tYXAoKGwpID0+IChcclxuICAgICAgPGRpdiBrZXk9e2wudGl0bGV9IGNsYXNzTmFtZT17c3R5bGVzLmxpc3R9PlxyXG4gICAgICAgIHsoKGwudGl0bGUgPT09ICdQUk9EVUNUUycgPyBwcm9kdWN0cyA6IGwuZGF0YSkgfHwgW10pLm1hcChcclxuICAgICAgICAgIChkOiBQcm9kdWN0IHwgRm9vdGVyQ29udGVudEl0ZW0sIGk6IG51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICA8Rm9vdGVyTGlua1xyXG4gICAgICAgICAgICAgIGtleT17YGZvb3Rlci1saW5rLSR7aX1gfVxyXG4gICAgICAgICAgICAgIGRhdGE9e2R9XHJcbiAgICAgICAgICAgICAgdHlwZT17bC50aXRsZSA9PT0gJ1BST0RVQ1RTJyA/ICdwcm9kdWN0JyA6ICdjb250YWN0J31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpfVxyXG4gIDwvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhDb250ZW50KTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ29udGVudCc7XHJcbiIsIi8qKlxyXG4gKiBGYWNlYm9va0xpa2UuanNcclxuICogQ29tcG9uZW50IGZvciBGYWNlYm9vayBMaWtlIEJ1dHRvblxyXG4gKlxyXG4gKiBAdmVyc2lvbiAwLjAuMVxyXG4gKiBAYXV0aG9yIFtOaWNvbGV0dGUgQ2hhbl0obmljb2xldHRlQHBvbGljeXBhbC5jb20pXHJcbiAqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBzb2NpYWxzIH0gZnJvbSAnY29uc3RhbnRzL2NvbXBhbnknO1xyXG5cclxuY29uc3QgRmFjZWJvb2tMaWtlID0gKCkgPT4ge1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRmFjZWJvb2sgQVBJXHJcbiAgICAgIGlmICh3aW5kb3cuRkIpIHtcclxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gRmFjZWJvb2sgQVBJXHJcbiAgICAgICAgd2luZG93LkZCLlhGQk1MLnBhcnNlKCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgZGF0YS1ocmVmPXtzb2NpYWxzLmZhY2Vib29rLmhyZWZ9XHJcbiAgICAgIGRhdGEtbGF5b3V0PVwiYnV0dG9uX2NvdW50XCJcclxuICAgICAgZGF0YS1hY3Rpb249XCJsaWtlXCJcclxuICAgICAgZGF0YS13aWR0aD1cIjQwMFwiXHJcbiAgICAgIGRhdGEtc2l6ZT1cImxhcmdlXCJcclxuICAgICAgZGF0YS1zaG93LWZhY2VzPVwiZmFsc2VcIlxyXG4gICAgICBkYXRhLXNoYXJlPVwiZmFsc2VcIlxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGYWNlYm9va0xpa2UpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9GYWNlYm9va0xpa2UnO1xyXG4iLCJpbXBvcnQgcm91dGVzIGZyb20gJ2NvbnN0YW50cy9yb3V0ZXMnO1xyXG5pbXBvcnQgeyBFTlRJVFlfVFlQRSB9IGZyb20gJ2NvbnN0YW50cy9jb21tb24nO1xyXG5pbXBvcnQgeyBQUFRfRU5USVRZLCBQUEZBX0VOVElUWSB9IGZyb20gJ2NvbnN0YW50cy9jb21wYW55JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRm9vdGVyQ29udGVudEl0ZW0ge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBocmVmOiBzdHJpbmc7XHJcbiAgdHlwZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbnR5cGUgRm9vdGVyQ29udGVudCA9IFJlY29yZDxcclxuICBFTlRJVFlfVFlQRSxcclxuICB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGF0YT86IEZvb3RlckNvbnRlbnRJdGVtW107XHJcbiAgfVtdXHJcbj47XHJcblxyXG5jb25zdCBtb3JlVGFiTGlzdCA9IFt7IHRleHQ6IHJvdXRlcy5jbGFpbXMuZGVzYywgaHJlZjogcm91dGVzLmNsYWltcy51cmwgfV07XHJcblxyXG5jb25zdCBtb3JlVGFiTGlzdFBQVCA9IFtcclxuICB7IHRleHQ6ICdPdXIgTWlzc2lvbicsIGhyZWY6IHJvdXRlcy5hYm91dC51cmwgfSxcclxuICB7IHRleHQ6IHJvdXRlcy5tZW1iZXJfYmVuZWZpdHMuZGVzYywgaHJlZjogcm91dGVzLm1lbWJlcl9iZW5lZml0cy51cmwgfSxcclxuICB7IHRleHQ6IHJvdXRlcy5yZWZlcnJhbC5kZXNjLCBocmVmOiByb3V0ZXMucmVmZXJyYWwudXJsIH0sXHJcbiAgeyB0ZXh0OiByb3V0ZXMuZ2l2ZWJhY2suZGVzYywgaHJlZjogcm91dGVzLmdpdmViYWNrLnVybCB9LFxyXG4gIHsgdGV4dDogcm91dGVzLnNlcnZpY2Vfc3RhbmRhcmQuZGVzYywgaHJlZjogcm91dGVzLnNlcnZpY2Vfc3RhbmRhcmQudXJsIH0sXHJcbiAgeyB0ZXh0OiByb3V0ZXMuY2FyZWVyLmRlc2MsIGhyZWY6IHJvdXRlcy5jYXJlZXIudXJsIH0sXHJcbiAgeyB0ZXh0OiByb3V0ZXMucGFydG5lcnNoaXAuZGVzYywgaHJlZjogcm91dGVzLnBhcnRuZXJzaGlwLnVybCB9LFxyXG4gIC8vIHsgdGV4dDogcm91dGVzLmZhX2Rhc2hib2FyZC5kZXNjLCBocmVmOiByb3V0ZXMuZmFfZGFzaGJvYXJkLnVybCB9LFxyXG5dO1xyXG5cclxuY29uc3QgcmVzb3VyY2VzTGlzdCA9IFtcclxuICB7IHRleHQ6ICdCbG9nLyBSZXNvdXJjZXMnLCBocmVmOiByb3V0ZXMuYmxvZy51cmwsIHR5cGU6ICdleHRlcm5hbCcgfSxcclxuICB7IHRleHQ6IHJvdXRlcy5ib29rLmRlc2MsIGhyZWY6IHJvdXRlcy5ib29rLnVybCB9LFxyXG4gIHsgdGV4dDogcm91dGVzLnByZXNzLmRlc2MsIGhyZWY6IHJvdXRlcy5wcmVzcy51cmwgfSxcclxuXTtcclxuXHJcbmNvbnN0IGZvb3Rlckxpc3RQUFQgPSBbXHJcbiAgeyB0ZXh0OiByb3V0ZXMudG9zUFBULmRlc2MsIGhyZWY6IHJvdXRlcy50b3NQUFQudXJsIH0sXHJcbiAgeyB0ZXh0OiByb3V0ZXMucHJpdmFjeXBvbGljeVBQVC5kZXNjLCBocmVmOiByb3V0ZXMucHJpdmFjeXBvbGljeVBQVC51cmwgfSxcclxuICB7IHRleHQ6IHJvdXRlcy5zZWN1cml0eS5kZXNjLCBocmVmOiByb3V0ZXMuc2VjdXJpdHkudXJsIH0sXHJcbiAgeyB0ZXh0OiByb3V0ZXMuZGlzY2xhaW1lclBQVC5kZXNjLCBocmVmOiByb3V0ZXMuZGlzY2xhaW1lclBQVC51cmwgfSxcclxuXTtcclxuXHJcbmNvbnN0IGZvb3Rlckxpc3RQUEZBID0gW1xyXG4gIHsgdGV4dDogcm91dGVzLnRvc1BQRkEuZGVzYywgaHJlZjogcm91dGVzLnRvc1BQRkEudXJsIH0sXHJcbiAgeyB0ZXh0OiByb3V0ZXMucHJpdmFjeXBvbGljeVBQRkEuZGVzYywgaHJlZjogcm91dGVzLnByaXZhY3lwb2xpY3lQUEZBLnVybCB9LFxyXG4gIHsgdGV4dDogcm91dGVzLmZhaXJEZWFsaW5nU3RhdGVtZW50UFBGQS5kZXNjLCBocmVmOiByb3V0ZXMuZmFpckRlYWxpbmdTdGF0ZW1lbnRQUEZBLnVybCB9LFxyXG4gIHsgdGV4dDogcm91dGVzLnNlY3VyaXR5LmRlc2MsIGhyZWY6IHJvdXRlcy5zZWN1cml0eS51cmwgfSxcclxuICB7IHRleHQ6IHJvdXRlcy5kaXNjbGFpbWVyUFBGQS5kZXNjLCBocmVmOiByb3V0ZXMuZGlzY2xhaW1lclBQRkEudXJsIH0sXHJcbl07XHJcblxyXG5jb25zdCB5ZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xyXG5cclxuY29uc3QgZG93bmxvYWRBcHBEYXRhID0ge1xyXG4gIHRpdGxlOiAnRG93bmxvYWQgb3VyIGFwcCAmIGVhcm4gJDEwIFBvbGljeVBhbCBDcmVkaXRzIScsXHJcbiAgZGVzYzogYFdpdGggUG9saWN5UGFsLCB5b3VyIGFsbC1pbi1vbmUgaW5zdXJhbmNlIHBsYXRmb3JtLCBlbWJhcmsgb24geW91ciBqb3VybmV5IHRvIG1hbmFnZSB5b3VyIGluc3VyYW5jZSBkaWdpdGFsbHksIHdoZXJldmVyIHlvdSBhcmUuXHJcblxyXG5TdGFydCB5b3VyIGpvdXJuZXkgd2l0aCAkMTAgUG9saWN5UGFsIENyZWRpdHMgYnkgc2lnbmluZyB1cCB3aXRoIG91ciByZWZlcnJhbCBjb2RlIDxzdHJvbmc+UE9MSUNZUEFMMTA8L3N0cm9uZz4uYCxcclxufTtcclxuXHJcbmNvbnN0IGxpc3RDb250ZW50OiBGb290ZXJDb250ZW50ID0ge1xyXG4gIHBwdDogW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0NPTVBBTlknLFxyXG4gICAgICBkYXRhOiBtb3JlVGFiTGlzdFBQVCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnUkVTT1VSQ0VTJyxcclxuICAgICAgZGF0YTogcmVzb3VyY2VzTGlzdCxcclxuICAgIH0sXHJcbiAgXSxcclxuICBwcGZhOiBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnUFJPRFVDVFMnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdTVVBQT1JUJyxcclxuICAgICAgZGF0YTogbW9yZVRhYkxpc3QsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCBtYXNGb290ZXI6IFJlY29yZDxFTlRJVFlfVFlQRSwgc3RyaW5nPiA9IHtcclxuICBwcHQ6IGAke2Zvb3Rlckxpc3RQUFRcclxuICAgIC5tYXAoKGYpID0+IGA8YSBocmVmPVwiJHtmLmhyZWZ9XCIgdGFyZ2V0PVwiX19ibGFua1wiPiR7Zi50ZXh0fTwvYT5gKVxyXG4gICAgLmpvaW4oJyB8ICcpfVxcbsKpICR7eWVhcn0gJHtQUFRfRU5USVRZfSBBbGwgUmlnaHRzIFJlc2VydmVkLmAsXHJcbiAgcHBmYTogYCR7UFBGQV9FTlRJVFl9IGlzIGFuIEV4ZW1wdCBGaW5hbmNpYWwgQWR2aXNlciBhbmQgUmVnaXN0ZXJlZCBJbnN1cmFuY2UgQnJva2VyIGxpY2Vuc2VkIGJ5IE1BUy4gVmlldyBvdXIgPGEgaHJlZj1cImh0dHBzOi8vZXNlcnZpY2VzLm1hcy5nb3Yuc2cvZmlkL2luc3RpdHV0aW9uL2RldGFpbC8yMDEyMjktUE9MSUNZUEFMLVNJTkdBUE9SRS1QVEUtTFREXCIgdGFyZ2V0PVwiX19ibGFua1wiPk1BUyBMaWNlbnNlPC9hPiB8ICR7W1xyXG4gICAgLi4uZm9vdGVyTGlzdFBQRkEsXHJcbiAgICB7IGhyZWY6IHJvdXRlcy5jbGFpbXMudXJsLCB0ZXh0OiAnQ2xhaW1zJyB9LFxyXG4gIF1cclxuICAgIC5tYXAoKGYpID0+IGA8YSBocmVmPVwiJHtmLmhyZWZ9XCIgdGFyZ2V0PVwiX19ibGFua1wiPiR7Zi50ZXh0fTwvYT5gKVxyXG4gICAgLmpvaW4oJyB8ICcpfVxcbsKpICR7eWVhcn0gJHtQUEZBX0VOVElUWX0gQWxsIFJpZ2h0cyBSZXNlcnZlZC5gLFxyXG59O1xyXG5cclxuY29uc3QgY29tcGFjdERhdGEgPSB7XHJcbiAgdGl0bGU6ICdDdXN0b21lciBzZXJ2aWNlIGhvdXJzJyxcclxuICBjb250ZW50OiBbJzEwYW0gLSA3cG0nLCAnTW9uZGF5cyB0byBGcmlkYXlzJywgJyhleGNsdWRpbmcgcHVibGljIGhvbGlkYXlzKSddLFxyXG59O1xyXG5cclxuZXhwb3J0IHsgZG93bmxvYWRBcHBEYXRhLCBsaXN0Q29udGVudCwgbWFzRm9vdGVyLCBjb21wYWN0RGF0YSB9O1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0Zvb3Rlci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRm9vdGVyLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRm9vdGVyLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgZ2V0SW1hZ2UgfSBmcm9tICdsaWIvaW1hZ2VzJztcclxuXHJcbmltcG9ydCBNYXNGb290ZXIgZnJvbSAnLi9NYXNGb290ZXInO1xyXG5pbXBvcnQgQ29udGFjdHMgZnJvbSAnLi9Db250YWN0cyc7XHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCc7XHJcblxyXG5pbXBvcnQgdXNlVGhlbWUgZnJvbSAnaG9va3MvdXNlVGhlbWUnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBDb21wYWN0ID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vQ29tcGFjdCcpKTtcclxuY29uc3QgRG93bmxvYWRBcHAgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnLi9Eb3dubG9hZEFwcCcpKTtcclxuXHJcbmNvbnN0IEZvb3RlcjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyB0aGVtZVNldHRpbmcgfSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gIGNvbnN0IGZvb3RlckJHID0gZ2V0SW1hZ2UoJ25hdmlnYXRpb24uZm9vdGVyX2JnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5mb290ZXIsIHN0eWxlc1t0aGVtZVNldHRpbmcudGhlbWVdXS5qb2luKCcgJyl9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlcklubmVyfT5cclxuICAgICAgICB7dGhlbWVTZXR0aW5nLmZvb3RlclNldHRpbmdzLmhpZGVEb3dubG9hZEFwcCAmJiAhdGhlbWVTZXR0aW5nLmZvb3RlclNldHRpbmdzLmhpZGVDdXJ2ZSAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmN1cnZlfT5cclxuICAgICAgICAgICAgPEltYWdlIHsuLi5mb290ZXJCR30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyF0aGVtZVNldHRpbmcuZm9vdGVyU2V0dGluZ3MuaGlkZURvd25sb2FkQXBwICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZG93bmxvYWRBcHB9PlxyXG4gICAgICAgICAgICA8RG93bmxvYWRBcHAgLz5cclxuICAgICAgICAgICAgeyF0aGVtZVNldHRpbmcuZm9vdGVyU2V0dGluZ3MuaGlkZUN1cnZlICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17W3N0eWxlcy5jdXJ2ZSwgc3R5bGVzLmFic29sdXRlXS5qb2luKCcgJyl9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlIHsuLi5mb290ZXJCR30gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtbXHJcbiAgICAgICAgICAgIHN0eWxlcy5jb250ZW50LFxyXG4gICAgICAgICAgICAhdGhlbWVTZXR0aW5nLmZvb3RlclNldHRpbmdzLmhpZGVEb3dubG9hZEFwcCA/IHN0eWxlcy5wYWRkZWRDb250ZW50IDogJycsXHJcbiAgICAgICAgICBdLmpvaW4oJyAnKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17W1xyXG4gICAgICAgICAgICAgIHN0eWxlcy5jb250ZW50SW5uZXIsXHJcbiAgICAgICAgICAgICAgdGhlbWVTZXR0aW5nLmZvb3RlclNldHRpbmdzLnVzZUNvbXBhY3QgPyBzdHlsZXMudXNlQ29tcGFjdCA6ICcnLFxyXG4gICAgICAgICAgICBdLmpvaW4oJyAnKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RoZW1lU2V0dGluZy5mb290ZXJTZXR0aW5ncy51c2VDb21wYWN0ID8gKFxyXG4gICAgICAgICAgICAgIDxDb21wYWN0IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxDb250YWN0cyB0aGVtZVNldHRpbmc9e3RoZW1lU2V0dGluZ30gLz5cclxuICAgICAgICAgICAgICAgIDxDb250ZW50IHRoZW1lU2V0dGluZz17dGhlbWVTZXR0aW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgPE1hc0Zvb3RlciB0aGVtZVNldHRpbmc9e3RoZW1lU2V0dGluZ30gLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEZvb3Rlcik7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRm9vdGVyTGluay5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vRm9vdGVyTGluay5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0Zvb3RlckxpbmsubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW1wb3J0IHsgQ29udGFjdCB9IGZyb20gJ2NvbnN0YW50cy9jb21wYW55JztcclxuaW1wb3J0IGd0bVRyYWNrZXIgZnJvbSAnY29uc3RhbnRzL3RyYWNraW5nL2J1dHRvbnMvZm9vdGVyJztcclxuXHJcbmltcG9ydCBBcHBBbmNob3IgZnJvbSAnY29tcG9uZW50cy9BcHBBbmNob3InO1xyXG5pbXBvcnQgQXBwTGluayBmcm9tICdjb21wb25lbnRzL0FwcExpbmsnO1xyXG5cclxuaW1wb3J0IHsgRm9vdGVyQ29udGVudEl0ZW0gfSBmcm9tICcuLi9Gb290ZXIuY29udGVudCc7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdjb25zdGFudHMvcHJvZHVjdHMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3RlckxpbmsubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIEZvb3Rlckxpbmsge1xyXG4gIGRhdGE6IEZvb3RlckNvbnRlbnRJdGVtIHwgQ29udGFjdCB8IFByb2R1Y3Q7XHJcbiAgdHlwZTogJ2Zvb3RlcicgfCAnY29udGFjdCcgfCAncHJvZHVjdCc7XHJcbn1cclxuXHJcbmNvbnN0IEZvb3Rlckxpbms6IFJlYWN0LkZDPEZvb3Rlckxpbms+ID0gKHsgZGF0YSwgdHlwZSB9KSA9PiB7XHJcbiAgY29uc3QgbmFtZSA9IHR5cGUgPT09ICdwcm9kdWN0JyA/IChkYXRhIGFzIFByb2R1Y3QpLmZ1bGxfbmFtZSA6IChkYXRhIGFzIENvbnRhY3QpLnRleHQ7XHJcblxyXG4gIGNvbnN0IGlkID0gKFxyXG4gICAgdHlwZSA9PT0gJ2NvbnRhY3QnID8gZ3RtVHJhY2tlci5OQVZfRk9PVEVSX0NPTlRBQ1QgOiBndG1UcmFja2VyLk5BVl9GT09URVJfTElOS1xyXG4gICkuaWQucmVwbGFjZSgneHh4JywgKG5hbWUgfHwgJycpLnJlcGxhY2UoLyAvZywgJ18nKS50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgIHsvXmh0dHBzPzpcXC9cXC8vLnRlc3QoZGF0YS5ocmVmKSB8fCB0eXBlID09PSAnY29udGFjdCcgPyAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHsoZGF0YSBhcyBDb250YWN0KS5pbWcgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfT5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugey4uLihkYXRhIGFzIENvbnRhY3QpLmltZ30gY2xhc3NOYW1lPVwiaWNvblwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxBcHBBbmNob3IgaWQ9e2lkfSBocmVmPXtkYXRhLmhyZWZ9PlxyXG4gICAgICAgICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8L0FwcEFuY2hvcj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8QXBwTGluayBpZD17aWR9IGhyZWY9e2RhdGEuaHJlZn0+XHJcbiAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAge25hbWUgPT09ICdlRUFTWSBzYXZlIFYnID8gKFxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgZUVBU1kgPGk+c2F2ZTwvaT4gVlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBuYW1lXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9BcHBMaW5rPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oRm9vdGVyTGluayk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvb3RlckxpbmsnO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL01hc0Zvb3Rlci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vTWFzRm9vdGVyLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vTWFzRm9vdGVyLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gJ2NvbnN0YW50cy90aGVtZSc7XHJcblxyXG5pbXBvcnQgeyBtYXNGb290ZXIgfSBmcm9tICcuLi9Gb290ZXIuY29udGVudCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWFzRm9vdGVyLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IE1hc0Zvb3RlcjogUmVhY3QuRkM8eyB0aGVtZVNldHRpbmc6IFRoZW1lVHlwZSB9PiA9ICh7IHRoZW1lU2V0dGluZyB9KSA9PiAoXHJcbiAgPHNwYW5cclxuICAgIGNsYXNzTmFtZT17c3R5bGVzLm1hc0Zvb3Rlcn1cclxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWFzRm9vdGVyW3RoZW1lU2V0dGluZy50aGVtZV0gfX1cclxuICAvPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhNYXNGb290ZXIpO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9NYXNGb290ZXInO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1N0b3JlQnV0dG9ucy5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vU3RvcmVCdXR0b25zLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vU3RvcmVCdXR0b25zLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnO1xyXG5pbXBvcnQgZ3RtVHJhY2tlciBmcm9tICdjb25zdGFudHMvdHJhY2tpbmcvYnV0dG9ucy9mb290ZXInO1xyXG5cclxuaW1wb3J0IHsgYXBwU3RvcmVzIH0gZnJvbSAnY29uc3RhbnRzL2NvbXBhbnknO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1N0b3JlQnV0dG9ucy5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgdHlwZSBTdG9yZUJ1dHRvbnNUeXBlID0ge1xyXG4gIHNtYWxsZXJCdXR0b25zPzogYm9vbGVhbjtcclxufTtcclxuXHJcbmNvbnN0IFN0b3JlQnV0dG9uczogUmVhY3QuRkM8U3RvcmVCdXR0b25zVHlwZT4gPSAoeyBzbWFsbGVyQnV0dG9ucyB9KSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMuc3RvcmVCdXR0b25zLCBzbWFsbGVyQnV0dG9ucyA/IHN0eWxlcy5zbWFsbCA6ICcnXS5qb2luKCcgJyl9PlxyXG4gICAgPEJ1dHRvbkJhc2UgaWQ9e2d0bVRyYWNrZXIuTkFWX0ZPT1RFUl9BUFBTVE9SRS5pZH0gaHJlZj17YXBwU3RvcmVzLmFwcGxlLmhyZWZ9IHRhcmdldD1cIl9fYmxhbmtcIj5cclxuICAgICAgPEltYWdlIHsuLi5hcHBTdG9yZXMuYXBwbGUuaW1nfSAvPlxyXG4gICAgPC9CdXR0b25CYXNlPlxyXG4gICAgPEJ1dHRvbkJhc2VcclxuICAgICAgaWQ9e2d0bVRyYWNrZXIuTkFWX0ZPT1RFUl9QTEFZU1RPUkUuaWR9XHJcbiAgICAgIGhyZWY9e2FwcFN0b3Jlcy5hcHBsZS5ocmVmfVxyXG4gICAgICB0YXJnZXQ9XCJfX2JsYW5rXCJcclxuICAgID5cclxuICAgICAgPEltYWdlIHsuLi5hcHBTdG9yZXMuYW5kcm9pZC5pbWd9IC8+XHJcbiAgICA8L0J1dHRvbkJhc2U+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZUJ1dHRvbnM7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL1N0b3JlQnV0dG9ucyc7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0Zvb3Rlcic7XHJcbiIsImltcG9ydCB7IEltYWdlUHJvcHMgfSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgZ2V0SW1hZ2UgfSBmcm9tICdsaWIvaW1hZ2VzJztcclxuXHJcbmV4cG9ydCBjb25zdCBQUF9FTlRJVFkgPSAnUG9saWN5UGFsIFB0ZS4gTHRkLic7XHJcbmV4cG9ydCBjb25zdCBQUFRfRU5USVRZID0gJ1BvbGljeVBhbCBUZWNoIFB0ZS4gTHRkLic7XHJcbmV4cG9ydCBjb25zdCBQUEZBX0VOVElUWSA9ICdCYW94aWFuYmFvYmFvIFB0ZS4gTHRkLic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRhY3Qge1xyXG4gIGltZzogSW1hZ2VQcm9wcztcclxuICBocmVmOiBzdHJpbmc7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBDb250YWN0TGlzdCA9IFJlY29yZDwnZW1haWwnIHwgJ3RlbCcgfCAnd2hhdHNhcHAnIHwgJ2xvY2F0aW9uJywgQ29udGFjdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNvY2lhbCB7XHJcbiAgaW1nOiBJbWFnZVByb3BzO1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBrZXk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgU29jaWFsTGlzdCA9IFJlY29yZDwneW91dHViZScgfCAnZmFjZWJvb2snIHwgJ2luc3RhZ3JhbScgfCAnbGlua2VkaW4nLCBTb2NpYWw+O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhY3RQUFM6IENvbnRhY3RMaXN0ID0ge1xyXG4gIGVtYWlsOiB7XHJcbiAgICBpbWc6IGdldEltYWdlKCdpY29ucy5lbWFpbCcpLFxyXG4gICAgaHJlZjogJ2hlbGxvQHBwZmEucG9saWN5cGFsLmNvbScsXHJcbiAgICB0ZXh0OiAnaGVsbG9AcHBmYS5wb2xpY3lwYWwuY29tJyxcclxuICB9LFxyXG4gIHRlbDoge1xyXG4gICAgaW1nOiBnZXRJbWFnZSgnaWNvbnMucGhvbmUnKSxcclxuICAgIGhyZWY6ICd0ZWw6KzY1MzE2MzkxODQnLFxyXG4gICAgdGV4dDogJys2NSAzMTYzIDkxODQnLFxyXG4gIH0sXHJcbiAgd2hhdHNhcHA6IHtcclxuICAgIGltZzogZ2V0SW1hZ2UoJ2ljb25zLnBob25lJyksXHJcbiAgICBocmVmOiAnaHR0cHM6Ly93YS5tZS82NTg3NTAwNjg4JyxcclxuICAgIHRleHQ6ICcrNjUgODc1MCAwNjg4JyxcclxuICB9LFxyXG4gIGxvY2F0aW9uOiB7XHJcbiAgICBpbWc6IGdldEltYWdlKCdpY29ucy5sb2NhdGlvbicpLFxyXG4gICAgaHJlZjogJ2h0dHBzOi8vZ29vLmdsL21hcHMvUE1vVVdUejZvbldzTkQ4bzknLFxyXG4gICAgdGV4dDogJ0p1c3RDbywgT0NCQyBDZW50cmUgRWFzdFxcbjYzIENodWxpYSBTdHJlZXQsICMxNS0wMVxcblNpbmdhcG9yZSAwNDk1MTQnLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29udGFjdFBQVDogQ29udGFjdExpc3QgPSB7XHJcbiAgLi4uY29udGFjdFBQUyxcclxuICBlbWFpbDoge1xyXG4gICAgLi4uY29udGFjdFBQUy5lbWFpbCxcclxuICAgIGhyZWY6ICdoZWxsb0Bwb2xpY3lwYWwuY29tJyxcclxuICAgIHRleHQ6ICdoZWxsb0Bwb2xpY3lwYWwuY29tJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNvY2lhbHM6IFNvY2lhbExpc3QgPSB7XHJcbiAgeW91dHViZToge1xyXG4gICAgaW1nOiBnZXRJbWFnZSgnc29jaWFscy55b3V0dWJlJyksXHJcbiAgICBocmVmOiAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vY2hhbm5lbC9VQ0EzaXVtVFh3SFp4OVZqQWdEYmZCclEnLFxyXG4gICAga2V5OiAneW91dHViZScsXHJcbiAgfSxcclxuICBmYWNlYm9vazoge1xyXG4gICAgaW1nOiBnZXRJbWFnZSgnc29jaWFscy5mYWNlYm9vaycpLFxyXG4gICAgaHJlZjogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9oaXBvbGljeXBhbCcsXHJcbiAgICBrZXk6ICdmYWNlYm9vaycsXHJcbiAgfSxcclxuICBpbnN0YWdyYW06IHtcclxuICAgIGltZzogZ2V0SW1hZ2UoJ3NvY2lhbHMuaW5zdGFncmFtJyksXHJcbiAgICBocmVmOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9wb2xpY3lwYWwvJyxcclxuICAgIGtleTogJ2luc3RhZ3JhbScsXHJcbiAgfSxcclxuICBsaW5rZWRpbjoge1xyXG4gICAgaW1nOiBnZXRJbWFnZSgnc29jaWFscy5saW5rZWRpbicpLFxyXG4gICAgaHJlZjogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9jb21wYW55L3BvbGljeXBhbC8nLFxyXG4gICAga2V5OiAnbGlua2VkSW4nLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29udGFjdFBQU0FycmF5OiBDb250YWN0W10gPSBbXHJcbiAgY29udGFjdFBQUy5lbWFpbCxcclxuICBjb250YWN0UFBTLnRlbCxcclxuICBjb250YWN0UFBTLndoYXRzYXBwLFxyXG4gIGNvbnRhY3RQUFMubG9jYXRpb24sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgY29udGFjdFBQVEFycmF5OiBDb250YWN0W10gPSBbY29udGFjdFBQVC5lbWFpbCwgLi4uY29udGFjdFBQU0FycmF5LnNsaWNlKDIpXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzb2NpYWxzQXJyYXk6IFNvY2lhbFtdID0gW1xyXG4gIHNvY2lhbHMueW91dHViZSxcclxuICBzb2NpYWxzLmZhY2Vib29rLFxyXG4gIHNvY2lhbHMuaW5zdGFncmFtLFxyXG4gIHNvY2lhbHMubGlua2VkaW4sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgYXBwU3RvcmVzID0ge1xyXG4gIGFwcGxlOiB7XHJcbiAgICBocmVmOiAnaHR0cHM6Ly9pdHVuZXMuYXBwbGUuY29tL3NnL2FwcC9wb2xpY3lwYWwvaWQxMTE4NTExOTcyP210PTgnLFxyXG4gICAgaW1nOiBnZXRJbWFnZSgnYXBwLmFwcF9zdG9yZV9iYWRnZScpLFxyXG4gIH0sXHJcbiAgYW5kcm9pZDoge1xyXG4gICAgaHJlZjogJ2h0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uaWR2c2dqbzMxdzltMDVmNnJhZWIzJmFtcDtobD1lbicsXHJcbiAgICBpbWc6IGdldEltYWdlKCdhcHAucGxheV9zdG9yZV9iYWRnZScpLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCB7IEltYWdlUHJvcHMgfSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHJvdXRlcyBmcm9tICdjb25zdGFudHMvcm91dGVzJztcclxuaW1wb3J0IHsgZ2V0SW1hZ2UgfSBmcm9tICdsaWIvaW1hZ2VzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdCB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxfbmFtZTogc3RyaW5nO1xyXG4gIHNsdWc6IHN0cmluZztcclxuICBzcmM6IEltYWdlUHJvcHM7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZHVjdHM6IFByb2R1Y3RbXSA9IFtcclxuICB7XHJcbiAgICBuYW1lOiAnVGVybSBMaWZlJyxcclxuICAgIGZ1bGxfbmFtZTogJ1Rlcm0gTGlmZSBJbnN1cmFuY2UnLFxyXG4gICAgc2x1ZzogJ3Rlcm1fbGlmZScsXHJcbiAgICBzcmM6IGdldEltYWdlKCdwcm9kdWN0LnNpbXBsZV90ZXJtX2xpZmUnKSxcclxuICAgIGhyZWY6IHJvdXRlcy50ZXJtX2xpZmUudXJsLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1dob2xlIExpZmUnLFxyXG4gICAgZnVsbF9uYW1lOiAnV2hvbGUgTGlmZSBJbnN1cmFuY2UnLFxyXG4gICAgc2x1ZzogJ3dob2xlX2xpZmUnLFxyXG4gICAgc3JjOiBnZXRJbWFnZSgncHJvZHVjdC5zaW1wbGVfd2hvbGVfbGlmZScpLFxyXG4gICAgaHJlZjogcm91dGVzLndob2xlX2xpZmUudXJsLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0VuZG93bWVudCcsXHJcbiAgICBmdWxsX25hbWU6ICdFbmRvd21lbnQvU2F2aW5ncyBJbnN1cmFuY2UnLFxyXG4gICAgc2x1ZzogJ2VuZG93bWVudCcsXHJcbiAgICBzcmM6IGdldEltYWdlKCdwcm9kdWN0LnNpbXBsZV9lbmRvd21lbnQnKSxcclxuICAgIGhyZWY6IHJvdXRlcy5lbmRvd21lbnQudXJsLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0ludGVncmF0ZWQgU2hpZWxkIFBsYW5zJyxcclxuICAgIGZ1bGxfbmFtZTogJ0ludGVncmF0ZWQgU2hpZWxkIFBsYW5zJyxcclxuICAgIHNsdWc6ICdoZWFsdGgnLFxyXG4gICAgc3JjOiBnZXRJbWFnZSgncHJvZHVjdC5zaW1wbGVfaGVhbHRoJyksXHJcbiAgICBocmVmOiByb3V0ZXMuaGVhbHRoLnVybCxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdBbm51aXR5IFBsYW5zJyxcclxuICAgIGZ1bGxfbmFtZTogJ0FubnVpdHkgUGxhbnMnLFxyXG4gICAgc2x1ZzogJ3JldGlyZW1lbnQnLFxyXG4gICAgc3JjOiBnZXRJbWFnZSgncHJvZHVjdC5zaW1wbGVfcmV0aXJlbWVudCcpLFxyXG4gICAgaHJlZjogcm91dGVzLnJldGlyZW1lbnQudXJsLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ0NyaXRpY2FsIElsbG5lc3MnLFxyXG4gICAgZnVsbF9uYW1lOiAnQ3JpdGljYWwgSWxsbmVzcyBJbnN1cmFuY2UnLFxyXG4gICAgc2x1ZzogJ2NyaXRpY2FsX2lsbG5lc3MnLFxyXG4gICAgc3JjOiBnZXRJbWFnZSgncHJvZHVjdC5zaW1wbGVfY3JpdGljYWxfaWxsbmVzcycpLFxyXG4gICAgaHJlZjogcm91dGVzLmNyaXRpY2FsX2lsbG5lc3MudXJsLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogJ1BldCcsXHJcbiAgICBmdWxsX25hbWU6ICdQZXQgSW5zdXJhbmNlJyxcclxuICAgIHNsdWc6ICdwZXQnLFxyXG4gICAgc3JjOiBnZXRJbWFnZSgncHJvZHVjdC5zaW1wbGVfcGV0JyksXHJcbiAgICBocmVmOiByb3V0ZXMucGV0LnVybCxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdUcmF2ZWwnLFxyXG4gICAgZnVsbF9uYW1lOiAnVHJhdmVsIEluc3VyYW5jZScsXHJcbiAgICBzbHVnOiAndHJhdmVsJyxcclxuICAgIHNyYzogZ2V0SW1hZ2UoJ3Byb2R1Y3QudHJhdmVsJyksXHJcbiAgICBocmVmOiByb3V0ZXMudHJhdmVsLnVybCxcclxuICB9LFxyXG5dO1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgbGFuZGluZzogeyB1cmw6ICcvJywgZGVzYzogJ0xhbmRpbmcnIH0sXHJcbiAgYm9vazogeyB1cmw6ICcvYm9vay9iYWxscy1pbmMnLCBkZXNjOiAnQmFsbHMgSW5jLicgfSxcclxuICBjYXRlZ29yaWVzOiB7IHVybDogJy9wcGZhL2J1eS1pbnN1cmFuY2UnLCBkZXNjOiAnQ2F0ZWdvcmllcycgfSxcclxuICBjYXRlZ29yaWVzX29sZDogeyB1cmw6ICcvYnV5LWluc3VyYW5jZScsIGRlc2M6ICdDYXRlZ29yaWVzJyB9LFxyXG4gIGNhcmVlcjogeyB1cmw6ICcvY2FyZWVyJywgZGVzYzogJ0NhcmVlcnMnIH0sXHJcbiAgZmFxOiB7IHVybDogJy9mYXEnLCBkZXNjOiAnRkFRJyB9LFxyXG4gIGZhcV96ZW5kZXNrOiB7IHVybDogJ2h0dHBzOi8vZmFxLnBvbGljeXBhbC5jb20nLCBkZXNjOiAnRkFRJyB9LFxyXG4gIGNhc2hiYWNrOiB7IHVybDogJy9jYXNoYmFjaycsIGRlc2M6ICdDYXNoYmFjaycgfSxcclxuICByZWZlcnJhbDogeyB1cmw6ICcvcmVmZXJyYWwnLCBkZXNjOiAnUmVmZXJyYWwnIH0sXHJcbiAgLy8gbWFya2V0cGxhY2U6IHsgdXJsOiAnL21hcmtldHBsYWNlJywgZGVzYzogJ01hcmtldFBsYWNlJyB9LFxyXG5cclxuICB0b3M6IHsgdXJsOiAnL3RvcycsIGRlc2M6ICdUZXJtcyBvZiBTZXJ2aWNlJyB9LFxyXG4gIHRvc1BQVDogeyB1cmw6ICcvcHB0L3RvcycsIGRlc2M6ICdUZXJtcyBvZiBTZXJ2aWNlJyB9LFxyXG4gIHRvc1BQRkE6IHsgdXJsOiAnL3BwZmEvdG9zJywgZGVzYzogJ1Rlcm1zIG9mIFNlcnZpY2UnIH0sXHJcbiAgZGlzY2xhaW1lcjogeyB1cmw6ICcvZGlzY2xhaW1lcicsIGRlc2M6ICdEaXNjbGFpbWVyJyB9LFxyXG4gIGRpc2NsYWltZXJQUFQ6IHsgdXJsOiAnL3BwdC9kaXNjbGFpbWVyJywgZGVzYzogJ0Rpc2NsYWltZXInIH0sXHJcbiAgZGlzY2xhaW1lclBQRkE6IHsgdXJsOiAnL3BwZmEvZGlzY2xhaW1lcicsIGRlc2M6ICdEaXNjbGFpbWVyJyB9LFxyXG4gIHByaXZhY3lwb2xpY3k6IHsgdXJsOiAnL3ByaXZhY3lwb2xpY3knLCBkZXNjOiAnUHJpdmFjeSBQb2xpY3knIH0sXHJcbiAgcHJpdmFjeXBvbGljeVBQVDogeyB1cmw6ICcvcHB0L3ByaXZhY3lwb2xpY3knLCBkZXNjOiAnUHJpdmFjeSBQb2xpY3knIH0sXHJcbiAgcHJpdmFjeXBvbGljeVBQRkE6IHsgdXJsOiAnL3BwZmEvcHJpdmFjeXBvbGljeScsIGRlc2M6ICdQcml2YWN5IFBvbGljeScgfSxcclxuICBmYWlyRGVhbGluZ1N0YXRlbWVudDogeyB1cmw6ICcvZmFpci1kZWFsaW5nLXN0YXRlbWVudCcsIGRlc2M6ICdGYWlyIERlYWxpbmcgU3RhdGVtZW50JyB9LFxyXG4gIGZhaXJEZWFsaW5nU3RhdGVtZW50UFBGQTogeyB1cmw6ICcvcHBmYS9mYWlyLWRlYWxpbmctc3RhdGVtZW50JywgZGVzYzogJ0ZhaXIgRGVhbGluZyBTdGF0ZW1lbnQnIH0sXHJcblxyXG4gIHJld2FyZFRvczogeyB1cmw6ICcvbW9ybmluZy1jaGFsbGVuZ2UnLCBkZXNjOiAnTW9ybmluZyBDaGFsbGVuZ2UnIH0sXHJcbiAgb2xkUmV3YXJkVG9zOiB7IHVybDogJy9yZXdhcmQtdG9zJywgZGVzYzogJ1BvbGljeVBhbCBSZXdhcmRzJyB9LFxyXG4gIHNlY3VyaXR5OiB7IHVybDogJy9zZWN1cml0eScsIGRlc2M6ICdTZWN1cml0eScgfSxcclxuICBwcmVzczogeyB1cmw6ICcvcHJlc3MnLCBkZXNjOiAnUHJlc3MnIH0sXHJcbiAgY2xhaW1zX29sZDogeyB1cmw6ICcvY2xhaW1zJywgZGVzYzogJ0NsYWltcycgfSxcclxuICBjbGFpbXM6IHsgdXJsOiAnL3BwZmEvY2xhaW1zJywgZGVzYzogJ0NsYWltcycgfSxcclxuICBwcm9maWxlOiB7IHVybDogJy9wcm9maWxlJywgZGVzYzogJ1Byb2ZpbGUnIH0sXHJcbiAgcmV3YXJkczogeyB1cmw6ICcvcmV3YXJkcycsIGRlc2M6ICdSZXdhcmRzJyB9LFxyXG4gIHJld2FyZHNNb2JpbGU6IHsgdXJsOiAnL3Jld2FyZCcsIGRlc2M6ICdQb2xpY3lQYWwgUmV3YXJkcycgfSxcclxuICBwYXJ0bmVyc2hpcDogeyB1cmw6ICcvcGFydG5lcnNoaXAnLCBkZXNjOiAnUGFydG5lcnNoaXAnIH0sXHJcbiAgbW9vdmF6OiB7IHVybDogJy9tb292YXonLCBkZXNjOiAnTW9vdmF6JyB9LFxyXG4gIGZvcmdvdHBhc3N3b3JkOiB7IHVybDogJy9mb3Jnb3RwYXNzd29yZCcsIGRlc2M6ICdGb3Jnb3QgUGFzc3dvcmQnIH0sXHJcbiAgcmVjZWlwdDogeyB1cmw6ICcvcmVjZWlwdCcsIGRlc2M6ICdSZWNlaXB0JyB9LFxyXG4gIGNoZWNrb3V0OiB7IHVybDogJy9jaGVja291dCcsIGRlc2M6ICdDaGVja291dCcgfSxcclxuICByZWdpc3RlcjogeyB1cmw6ICcvcmVnaXN0ZXInLCBkZXNjOiAnUmVnaXN0ZXInIH0sXHJcbiAgbG9naW46IHsgdXJsOiAnL2xvZ2luJywgZGVzYzogJ0xvZ2luJyB9LFxyXG4gIGdvdG9hcHBzdG9yZTogeyB1cmw6ICcvZ290b2FwcHN0b3JlJywgZGVzYzogJ0dvIHRvIEFwcCBzdG9yZScgfSxcclxuXHJcbiAgLy8gUHJvZHVjdFxyXG4gIGJ1c2luZXNzOiB7IHVybDogJy9wcGZhL2J1c2luZXNzLWluc3VyYW5jZScsIGRlc2M6ICdCdXNpbmVzcyBJbnN1cmFuY2UnIH0sXHJcbiAgYnVzaW5lc3NfcHB0OiB7IHVybDogJy9idXNpbmVzcy1pbnN1cmFuY2UnLCBkZXNjOiAnQnVzaW5lc3MgSW5zdXJhbmNlJyB9LFxyXG5cclxuICB0cmF2ZWw6IHsgdXJsOiAnL3BwZmEvdHJhdmVsLWluc3VyYW5jZScsIGRlc2M6ICdUcmF2ZWwgSW5zdXJhbmNlJyB9LFxyXG4gIHRyYXZlbF9wcHQ6IHsgdXJsOiAnL3RyYXZlbC1pbnN1cmFuY2UnLCBkZXNjOiAnVHJhdmVsIEluc3VyYW5jZScgfSxcclxuXHJcbiAgbW90b3I6IHsgdXJsOiAnL3BwZmEvY2FyLWluc3VyYW5jZScsIGRlc2M6ICdDYXIgSW5zdXJhbmNlJyB9LFxyXG4gIG1vdG9yX3BwdDogeyB1cmw6ICcvY2FyLWluc3VyYW5jZScsIGRlc2M6ICdDYXIgSW5zdXJhbmNlJyB9LFxyXG5cclxuICBwZXQ6IHsgdXJsOiAnL3BwZmEvcGV0LWluc3VyYW5jZScsIGRlc2M6ICdQZXQgSW5zdXJhbmNlJyB9LFxyXG4gIHBldF9wcHQ6IHsgdXJsOiAnL3BldC1pbnN1cmFuY2UnLCBkZXNjOiAnUGV0IEluc3VyYW5jZScgfSxcclxuXHJcbiAgcGVyc29uYWxfYWNjaWRlbnQ6IHtcclxuICAgIHVybDogJy9wcGZhL3BlcnNvbmFsLWFjY2lkZW50LWluc3VyYW5jZScsXHJcbiAgICBkZXNjOiAnUGVyc29uYWwgQWNjaWRlbnQgSW5zdXJhbmNlJyxcclxuICB9LFxyXG4gIHBlcnNvbmFsX2FjY2lkZW50X3BwdDoge1xyXG4gICAgdXJsOiAnL3BlcnNvbmFsLWFjY2lkZW50LWluc3VyYW5jZScsXHJcbiAgICBkZXNjOiAnUGVyc29uYWwgQWNjaWRlbnQgSW5zdXJhbmNlJyxcclxuICB9LFxyXG5cclxuICB0ZXJtX2xpZmU6IHsgdXJsOiAnL3BwZmEvdGVybS1saWZlLWluc3VyYW5jZScsIGRlc2M6ICdUZXJtIExpZmUgSW5zdXJhbmNlJyB9LFxyXG4gIHRlcm1fbGlmZV9wcHQ6IHsgdXJsOiAnL3Rlcm0tbGlmZS1pbnN1cmFuY2UnLCBkZXNjOiAnVGVybSBMaWZlIEluc3VyYW5jZScgfSxcclxuXHJcbiAgd2hvbGVfbGlmZTogeyB1cmw6ICcvcHBmYS93aG9sZS1saWZlLWluc3VyYW5jZScsIGRlc2M6ICdXaG9sZSBMaWZlIEluc3VyYW5jZScgfSxcclxuICB3aG9sZV9saWZlX3BwdDogeyB1cmw6ICcvd2hvbGUtbGlmZS1pbnN1cmFuY2UnLCBkZXNjOiAnV2hvbGUgTGlmZSBJbnN1cmFuY2UnIH0sXHJcblxyXG4gIGNyaXRpY2FsX2lsbG5lc3M6IHsgdXJsOiAnL3BwZmEvY3JpdGljYWwtaWxsbmVzcy1pbnN1cmFuY2UnLCBkZXNjOiAnQ3JpdGljYWwgSWxsbmVzcyBJbnN1cmFuY2UnIH0sXHJcbiAgY3JpdGljYWxfaWxsbmVzc19wcHQ6IHsgdXJsOiAnL2NyaXRpY2FsLWlsbG5lc3MtaW5zdXJhbmNlJywgZGVzYzogJ0NyaXRpY2FsIElsbG5lc3MgSW5zdXJhbmNlJyB9LFxyXG5cclxuICBoZWFsdGhfb2xkOiB7IHVybDogJy9oZWFsdGgtaW5zdXJhbmNlJywgZGVzYzogJ0hlYWx0aCBJbnN1cmFuY2UnIH0sXHJcbiAgaGVhbHRoOiB7IHVybDogJy9wcGZhL2ludGVncmF0ZWQtc2hpZWxkLXBsYW5zJywgZGVzYzogJ0ludGVncmF0ZWQgU2hpZWxkIFBsYW5zJyB9LFxyXG4gIGhlYWx0aF9wcHQ6IHsgdXJsOiAnL2ludGVncmF0ZWQtc2hpZWxkLXBsYW5zJywgZGVzYzogJ0ludGVncmF0ZWQgU2hpZWxkIFBsYW5zJyB9LFxyXG5cclxuICBlbmRvd21lbnRfb2xkOiB7IHVybDogJy9lbmRvd21lbnQtaW5zdXJhbmNlJywgZGVzYzogJ0VuZG93bWVudCAvIFNhdmluZ3MgSW5zdXJhbmNlJyB9LFxyXG4gIGVuZG93bWVudDogeyB1cmw6ICcvcHBmYS9lbmRvd21lbnQtcGxhbnMnLCBkZXNjOiAnRW5kb3dtZW50IC8gU2F2aW5ncyBJbnN1cmFuY2UnIH0sXHJcbiAgZW5kb3dtZW50X3BwdDogeyB1cmw6ICcvZW5kb3dtZW50LXBsYW5zJywgZGVzYzogJ0VuZG93bWVudCAvIFNhdmluZ3MgSW5zdXJhbmNlJyB9LFxyXG5cclxuICByZXRpcmVtZW50X29sZDogeyB1cmw6ICcvcmV0aXJlbWVudC1pbnN1cmFuY2UnLCBkZXNjOiAnQW5udWl0eSBQbGFucycgfSxcclxuICByZXRpcmVtZW50OiB7IHVybDogJy9wcGZhL2FubnVpdGllcy1yZXRpcmVtZW50LXBsYW5uaW5nJywgZGVzYzogJ0FubnVpdHkgUGxhbnMnIH0sXHJcbiAgcmV0aXJlbWVudF9wcHQ6IHsgdXJsOiAnL2FubnVpdGllcy1yZXRpcmVtZW50LXBsYW5uaW5nJywgZGVzYzogJ0FubnVpdHkgUGxhbnMnIH0sXHJcblxyXG4gIG9uX2RlbWFuZF9wYTogeyB1cmw6ICcvb24tZGVtYW5kLXBhLWluc3VyYW5jZScsIGRlc2M6ICdPbiBEZW1hbmQgUGVyc29uYWwgQWNjaWRlbnQnIH0sXHJcblxyXG4gIC8vIENhbXBhaWduc1xyXG4gIGNueTogeyB1cmw6ICcvY255JywgZGVzYzogJ0NoaW5lc2UgTmV3IFllYXInIH0sXHJcbiAgY2FtcGFnaW5fd2hlZWw6IHsgdXJsOiAnL2NhbXBhaWducy9zcGluLXRoZS13aGVlbCcsIGRlc2M6ICdXZWxjb21lIFN1cnByaXNlJyB9LFxyXG4gIHNjcmF0Y2hfd2luOiB7IHVybDogJy9jYW1wYWlnbnMvc2NyYXRjaC13aW4nLCBkZXNjOiAnU2NyYXRjaCBXaW4nIH0sXHJcbiAgY2hyaXN0bWFzOiB7IHVybDogJy9jYW1wYWlnbnMvY2hyaXN0bWFzJywgZGVzYzogJ0NocmlzdG1hcyBDYW1wYWlnbiAyMDIwJyB9LFxyXG4gIGNocmlzdG1hc19sZWFkZXJib2FyZDoge1xyXG4gICAgdXJsOiAnL2NhbXBhaWducy9jaHJpc3RtYXMvbGVhZGVyYm9hcmQnLFxyXG4gICAgZGVzYzogJ0NocmlzdG1hcyBDYW1wYWlnbiAyMDIwJyxcclxuICB9LFxyXG5cclxuICBibG9nOiB7IHVybDogJ2h0dHBzOi8vd3d3LnBvbGljeXBhbC5jb20vYmxvZycsIGRlc2M6ICdSZXNvdXJjZXMnIH0sXHJcbiAgZm9yYmlkZGVuOiB7IHVybDogJy9mb3JiaWRkZW4nLCBkZXNjOiAnRm9yYmlkZGVuJyB9LFxyXG5cclxuICBhZGhvY19jaGVja291dDogeyB1cmw6ICcvY2hlY2tvdXQnLCBkZXNjOiAnQWRob2MgLSBDaGVja291dCcgfSxcclxuICBhZGhvY19yZWNlaXB0OiB7IHVybDogJy9yZWNlaXB0JywgZGVzYzogJ0FkaG9jIC0gUmVjZWlwdCcgfSxcclxuXHJcbiAgdGhlX25ld19zYXZ2eTogeyB1cmw6ICcvdGhlbmV3c2F2dnknLCBkZXNjOiAnVGhlIE5ldyBTYXZ2eScgfSxcclxuICBqZWJoZWFsdGg6IHsgdXJsOiAnL2plYmhlYWx0aCcsIGRlc2M6ICdKZWJIZWFsdGgnIH0sXHJcbiAgY2FyZHVwOiB7IHVybDogJy9jYXJkdXAnLCBkZXNjOiAnQ2FyZFVwJyB9LFxyXG4gIHJlZmVycmVkOiB7IHVybDogJy9yZWZlcnJhbC9yJywgZGVzYzogJ1JlZmVycmVkJyB9LFxyXG5cclxuICBkeW5hbWljX3BhcnRuZXI6IHsgdXJsOiAnL3BhcnRuZXJzL3InLCBkZXNjOiAnUGFydG5lcnMnIH0sXHJcbiAgcHJvbW90aW9uc19vbGQ6IHsgdXJsOiAnL3Byb21vdGlvbnMnLCBkZXNjOiAnUHJvbW90aW9ucycgfSxcclxuICBwcm9tb3Rpb25zOiB7IHVybDogJy9wcGZhL3Byb21vdGlvbnMnLCBkZXNjOiAnUHJvbW90aW9ucycgfSxcclxuXHJcbiAgdGVsZV9jb25zdWx0YXRpb246IHsgdXJsOiAnL3RlbGUtY29uc3VsdGF0aW9uJywgZGVzYzogJ1ZpZGVvIFRlbGUtQ29uc3VsdGF0aW9uJyB9LFxyXG4gIG1vbmV5YmFnX2xhbmRpbmdfb2xkOiB7IHVybDogJy9nYW1lcy9tb25leS1iYWcnLCBkZXNjOiAnTW9uZXkgQmFnIFZpcnR1YWwgU2F2aW5ncycgfSxcclxuICBtb25leWJhZ19nYW1lX29sZDogeyB1cmw6ICcvZ2FtZXMvbW9uZXktYmFnL3N0YXJ0JywgZGVzYzogJ01vbmV5IEJhZyBWaXJ0dWFsIFNhdmluZ3MnIH0sXHJcbiAgbW9uZXliYWdfbGFuZGluZzogeyB1cmw6ICdodHRwczovL21vbmV5YmFnLnBvbGljeXBhbC5jb20nLCBkZXNjOiAnTW9uZXkgQmFnIFZpcnR1YWwgU2F2aW5ncycgfSxcclxuICBtb25leWJhZ19nYW1lOiB7IHVybDogJ2h0dHBzOi8vbW9uZXliYWcucG9saWN5cGFsLmNvbS9zdGFydCcsIGRlc2M6ICdNb25leSBCYWcgVmlydHVhbCBTYXZpbmdzJyB9LFxyXG4gIG1vbmV5YmFnX2xhbmRpbmdfc3RhZ2luZzoge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly9tb25leWJhZy1zdGFnaW5nLnBvbGljeXBhbC5jb20nLFxyXG4gICAgZGVzYzogJ01vbmV5IEJhZyBWaXJ0dWFsIFNhdmluZ3MnLFxyXG4gIH0sXHJcbiAgbW9uZXliYWdfZ2FtZV9zdGFnaW5nOiB7XHJcbiAgICB1cmw6ICdodHRwczovL21vbmV5YmFnLXN0YWdpbmcucG9saWN5cGFsLmNvbS9zdGFydCcsXHJcbiAgICBkZXNjOiAnTW9uZXkgQmFnIFZpcnR1YWwgU2F2aW5ncycsXHJcbiAgfSxcclxuXHJcbiAgbGlmZV9zdGFnZTogeyB1cmw6ICcvbGlmZS1zdGFnZScsIGRlc2M6ICdMaWZlIFN0YWdlIFBsYW5uaW5nJyB9LFxyXG4gIHBheW1lbnQ6IHsgdXJsOiAnL3BheW1lbnQnLCBkZXNjOiAnUGF5bWVudCcgfSxcclxuXHJcbiAgY2hvb3NlX2FkdmlzZXI6IHsgdXJsOiAnL2luc3VyYW5jZS9hZHZpc2VycycsIGRlc2M6ICdGaW5hbmNpYWwgQWR2aXNlciBQbGF0Zm9ybScgfSxcclxuICBjaG9vc2VfYWR2aXNlcl9zdW1tYXJ5OiB7XHJcbiAgICB1cmw6ICcvaW5zdXJhbmNlL2FkdmlzZXJzL3N1bW1hcnknLFxyXG4gICAgZGVzYzogJ0ZpbmFuY2lhbCBBZHZpc2VyIFBsYXRmb3JtIC0gU3VtbWFyeScsXHJcbiAgfSxcclxuICBmYV9kYXNoYm9hcmQ6IHsgdXJsOiAnL2ZhLWRhc2hib2FyZCcsIGRlc2M6ICdBZHZpc2VycycgfSxcclxuXHJcbiAgLy8gYmxvZyBwb3N0c1xyXG4gIGVuZG93bWVudF9ibG9nOiB7XHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5wb2xpY3lwYWwuY29tL2Jsb2cvaW5zdXJhbmNlL3doYXQtYXJlLXNhdmluZ3MtaW5zdXJhbmNlLXBsYW5zLycsXHJcbiAgICBkZXNjOiAnRW5kb3dtZW50IEluc3VyYW5jZScsXHJcbiAgfSxcclxuICBvbmxpbmVfZW5kb3dtZW50OiB7XHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5wb2xpY3lwYWwuY29tL2Jsb2cvaW5zdXJhbmNlL3N1bW1hcnktb2YtdGlxLWVuZG93bWVudC1wbGFucy8nLFxyXG4gICAgZGVzYzogJ09ubGluZSBFbmRvd21lbnQgSW5zdXJhbmNlJyxcclxuICB9LFxyXG4gIHdoYXRfcGNyZWRpdDoge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucG9saWN5cGFsLmNvbS9ibG9nL2Fubm91bmNlbWVudHMvd2hhdC1pcy1wLWNyZWRpdC8nLFxyXG4gICAgZGVzYzogJ1doYXQgaXMgUG9saWN5UGFsIENyZWRpdHMnLFxyXG4gIH0sXHJcbiAgZHlzb25fcHJvbW86IHtcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3LnBvbGljeXBhbC5jb20vYmxvZy9hbm5vdW5jZW1lbnRzL2FyZS15b3UtcmVhZHktdG8tc2NyYXRjaC13aW4tcHJpemVzLycsXHJcbiAgICBkZXNjOiAnRHlzb24gQWlyd3JhcCBQcm9tbycsXHJcbiAgfSxcclxuXHJcbiAgLy8gYmVzdCBibG9nc1xyXG4gIGJlc3Rfd2hvbGVfbGlmZToge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucG9saWN5cGFsLmNvbS9ibG9nL2luc3VyYW5jZS9iZXN0LXdob2xlLWxpZmUtcGxhbnMtaW4tc2luZ2Fwb3JlLycsXHJcbiAgICBkZXNjOiAnV2hvbGUgTGlmZSBJbnN1cmFuY2UnLFxyXG4gIH0sXHJcbiAgYmVzdF90ZXJtX2xpZmU6IHtcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3LnBvbGljeXBhbC5jb20vYmxvZy9pbnN1cmFuY2UvYmVzdC10ZXJtLWxpZmUtcGxhbnMtaW4tc2luZ2Fwb3JlLycsXHJcbiAgICBkZXNjOiAnVGVybSBMaWZlIEluc3VyYW5jZScsXHJcbiAgfSxcclxuICBiZXN0X2VuZG93bWVudDoge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucG9saWN5cGFsLmNvbS9ibG9nL2luc3VyYW5jZS9iZXN0LWVuZG93bWVudC1wbGFuLycsXHJcbiAgICBkZXNjOiAnRW5kb3dtZW50IEluc3VyYW5jZScsXHJcbiAgfSxcclxuICBiZXN0X2NpOiB7XHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5wb2xpY3lwYWwuY29tL2Jsb2cvaW5zdXJhbmNlL2Jlc3QtY3JpdGljYWwtaWxsbmVzcy1wbGFucy1pbi1zaW5nYXBvcmUvJyxcclxuICAgIGRlc2M6ICdDcml0aWNhbCBJbGxuZXNzIEluc3VyYW5jZScsXHJcbiAgfSxcclxuICBiZXN0X3JldGlyZW1lbnQ6IHtcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3LnBvbGljeXBhbC5jb20vYmxvZy9pbnN1cmFuY2UvYmVzdC1yZXRpcmVtZW50LXBsYW5zLWluLXNpbmdhcG9yZS8nLFxyXG4gICAgZGVzYzogJ1JldGlyZW1lbnQgSW5zdXJhbmNlJyxcclxuICB9LFxyXG4gIGJlc3RfaGVhbHRoOiB7XHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5wb2xpY3lwYWwuY29tL2Jsb2cvaW5zdXJhbmNlL2Jlc3QtaGVhbHRoLWluc3VyYW5jZS1wbGFucy1pbi1zaW5nYXBvcmUvJyxcclxuICAgIGRlc2M6ICdIZWFsdGggSW5zdXJhbmNlJyxcclxuICB9LFxyXG4gIGJlc3RfaW50ZXJuYXRpb25hbF9oZWFsdGg6IHtcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3LnBvbGljeXBhbC5jb20vYmxvZy9pbnN1cmFuY2UvYmVzdC1pbnRlcm5hdGlvbmFsLWhlYWx0aC1pbnN1cmFuY2UtaW4tc2luZ2Fwb3JlLycsXHJcbiAgICBkZXNjOiAnSW50ZXJuYXRpb25hbCBIZWFsdGggSW5zdXJhbmNlJyxcclxuICB9LFxyXG4gIGJlc3RfbWF0ZXJuaXR5OiB7XHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5wb2xpY3lwYWwuY29tL2Jsb2cvaW5zdXJhbmNlL2Jlc3QtbWF0ZXJuaXR5LWluc3VyYW5jZS1pbi1zaW5nYXBvcmUvJyxcclxuICAgIGRlc2M6ICdNYXRlcm5pdHkgSW5zdXJhbmNlJyxcclxuICB9LFxyXG4gIGJlc3RfcGVyc29uYWxfYWNjaWRlbnQ6IHtcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3LnBvbGljeXBhbC5jb20vYmxvZy9pbnN1cmFuY2UvYmVzdC1wZXJzb25hbC1hY2NpZGVudC1pbnN1cmFuY2UtaW4tc2luZ2Fwb3JlLycsXHJcbiAgICBkZXNjOiAnUGVyc29uYWwgQWNjaWRlbnQgSW5zdXJhbmNlJyxcclxuICB9LFxyXG4gIGJlc3RfY2FyOiB7XHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5wb2xpY3lwYWwuY29tL2Jsb2cvaW5zdXJhbmNlL2Jlc3QtbW90b3ItY2FyLWluc3VyYW5jZS1pbi1zaW5nYXBvcmUvJyxcclxuICAgIGRlc2M6ICdDYXIgSW5zdXJhbmNlJyxcclxuICB9LFxyXG4gIGJlc3RfaG9tZToge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucG9saWN5cGFsLmNvbS9ibG9nL2luc3VyYW5jZS9iZXN0LWhvbWUtaW5zdXJhbmNlLWluLXNpbmdhcG9yZS8nLFxyXG4gICAgZGVzYzogJ0hvbWUgSW5zdXJhbmNlJyxcclxuICB9LFxyXG4gIGJlc3RfbW9ydGdhZ2U6IHtcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3LnBvbGljeXBhbC5jb20vYmxvZy9pbnN1cmFuY2UvYmVzdC1tb3J0Z2FnZS1pbnN1cmFuY2UtaW4tc2luZ2Fwb3JlLycsXHJcbiAgICBkZXNjOiAnTW9ydGdhZ2UgSW5zdXJhbmNlJyxcclxuICB9LFxyXG4gIGJlc3RfbWFpZDoge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucG9saWN5cGFsLmNvbS9ibG9nL2luc3VyYW5jZS9iZXN0LW1haWQtaW5zdXJhbmNlLWluLXNpbmdhcG9yZS8nLFxyXG4gICAgZGVzYzogJ01haWQgSW5zdXJhbmNlJyxcclxuICB9LFxyXG5cclxuICAvLyBpbnN1cmVyc1xyXG4gIGdyZWF0X2Vhc3Rlcm46IHsgdXJsOiAnL2luc3VyZXJzL2dyZWF0LWVhc3Rlcm4nLCBkZXNjOiAnR3JlYXQgRWFzdGVybiBJbnN1cmFuY2UgfCBQb2xpY3lQYWwnIH0sXHJcbiAgcHJ1ZGVudGlhbDogeyB1cmw6ICcvaW5zdXJlcnMvcHJ1ZGVudGlhbCcsIGRlc2M6ICdQcnVkZW50aWFsIEluc3VyYW5jZSB8IFBvbGljeVBhbCcgfSxcclxuXHJcbiAgLy8gcHJvZHVjdCB0ZXN0XHJcbiAgZWxhc3RpcTogeyB1cmw6ICcvZWxhc3RpcScsIGRlc2M6ICdFTEFTVElRJyB9LFxyXG4gIGVlYXN5OiB7IHVybDogJy9lZWFzeS1zYXZlLXYnLCBkZXNjOiAnZUVBU1kgc2F2ZSBWJyB9LFxyXG4gIGdpZ2FudGlxOiB7IHVybDogJy9naWdhbnRpcScsIGRlc2M6ICdHSUdJQU5USVEnIH0sXHJcbiAgaWxwX29sZDogeyB1cmw6ICcvaW52ZXN0bWVudC1saW5rZWQtaW5zdXJhbmNlJywgZGVzYzogJ0ludmVzdG1lbnQtTGlua2VkIEluc3VyYW5jZScgfSxcclxuICBpbHA6IHsgdXJsOiAnL2lscC1pbnZlc3RtZW50LWxpbmtlZC1wb2xpY3knLCBkZXNjOiAnSW52ZXN0bWVudC1MaW5rZWQgUG9saWNpZXMnIH0sXHJcblxyXG4gIC8vIEJyYW5kaW5nXHJcbiAgYWJvdXQ6IHsgdXJsOiAnL2Fib3V0JywgZGVzYzogJ0Fib3V0IFVzJyB9LFxyXG4gIGdpdmViYWNrOiB7IHVybDogJy9naXZlYmFjaycsIGRlc2M6ICdHaXZlYmFjayBNb3ZlbWVudCcgfSxcclxuICB0cmFuc3BhcmVuY3lfb2xkOiB7IHVybDogJy9wcmljaW5nLXRyYW5zcGFyZW5jeScsIGRlc2M6ICdQcmljaW5nIFRyYW5zcGFyZW5jeScgfSxcclxuICB0cmFuc3BhcmVuY3k6IHsgdXJsOiAnL3BwZmEvcHJpY2luZy10cmFuc3BhcmVuY3knLCBkZXNjOiAnUHJpY2luZyBUcmFuc3BhcmVuY3knIH0sXHJcbiAgc2VydmljZV9zdGFuZGFyZDogeyB1cmw6ICcvc2VydmljZS1zdGFuZGFyZC1wcm9taXNlJywgZGVzYzogJ1NlcnZpY2UgU3RhbmRhcmQgUHJvbWlzZScgfSxcclxuICBtZW1iZXJfYmVuZWZpdHM6IHsgdXJsOiAnL21lbWJlci1iZW5lZml0cycsIGRlc2M6ICdNZW1iZXIgQmVuZWZpdHMnIH0sXHJcbn07XHJcbiIsImltcG9ydCByZWR1Y2UgZnJvbSAnbG9kYXNoL3JlZHVjZSc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnY29uc3RhbnRzL3JvdXRlcyc7XHJcblxyXG5pbXBvcnQgeyBFTlRJVFlfVFlQRSB9IGZyb20gJ2NvbnN0YW50cy9jb21tb24nO1xyXG5cclxuZXhwb3J0IHR5cGUgRm9vdGVyU2V0dGluZ3NUeXBlID0ge1xyXG4gIGhpZGVEb3dubG9hZEFwcD86IGJvb2xlYW47XHJcbiAgaGlkZUN1cnZlPzogYm9vbGVhbjtcclxuICB1c2VDb21wYWN0PzogYm9vbGVhbjtcclxufTtcclxuXHJcbmV4cG9ydCB0eXBlIFRoZW1lVHlwZSA9IHtcclxuICB0aGVtZTogRU5USVRZX1RZUEU7XHJcbiAgZm9vdGVyU2V0dGluZ3M6IEZvb3RlclNldHRpbmdzVHlwZTtcclxufTtcclxuXHJcbi8vIFNldCBkZWZhdWx0IGFsbCB0byBwcHQgZmlyc3RcclxubGV0IHRoZW1lU2V0dGluZ3M6IFJlY29yZDxzdHJpbmcsIFRoZW1lVHlwZT4gPSByZWR1Y2UoXHJcbiAgcm91dGVzLFxyXG4gIChyZXN1bHQsIHVybCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgLi4ucmVzdWx0LFxyXG4gICAgICBbdXJsLnVybF06IHtcclxuICAgICAgICB0aGVtZTogJ3BwdCcsXHJcbiAgICAgICAgZm9vdGVyU2V0dGluZ3M6IHt9LFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9LFxyXG4gIHt9XHJcbik7XHJcblxyXG50aGVtZVNldHRpbmdzID0ge1xyXG4gIC4uLnRoZW1lU2V0dGluZ3MsXHJcbiAgW3JvdXRlcy5pbHAudXJsXTogeyB0aGVtZTogJ3BwdCcsIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9IH0sXHJcbiAgW3JvdXRlcy5keW5hbWljX3BhcnRuZXIudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcHQnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlLCBoaWRlQ3VydmU6IGZhbHNlIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbnRoZW1lU2V0dGluZ3MgPSB7XHJcbiAgLi4udGhlbWVTZXR0aW5ncyxcclxuICBbcm91dGVzLmNhdGVnb3JpZXMudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLmNsYWltcy51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMucmVjZWlwdC51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMuY2hlY2tvdXQudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLmFkaG9jX2NoZWNrb3V0LnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy5hZGhvY19yZWNlaXB0LnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcblxyXG4gIFtyb3V0ZXMucHJvbW90aW9ucy51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMucGF5bWVudC51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG5cclxuICBbcm91dGVzLmJ1c2luZXNzLnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy50cmF2ZWwudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLm1vdG9yLnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy5wZXQudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLnBlcnNvbmFsX2FjY2lkZW50LnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy50ZXJtX2xpZmUudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLndob2xlX2xpZmUudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLmNyaXRpY2FsX2lsbG5lc3MudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLmhlYWx0aC51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMuZW5kb3dtZW50LnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy5yZXRpcmVtZW50LnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy5vbl9kZW1hbmRfcGEudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuXHJcbiAgW3JvdXRlcy5jaG9vc2VfYWR2aXNlci51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMuY2hvb3NlX2FkdmlzZXJfc3VtbWFyeS51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMuZmFfZGFzaGJvYXJkLnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcblxyXG4gIFtyb3V0ZXMuZ3JlYXRfZWFzdGVybi51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMucHJ1ZGVudGlhbC51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG5cclxuICBbcm91dGVzLmVsYXN0aXEudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLmVlYXN5LnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy5naWdhbnRpcS51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG5cclxuICBbcm91dGVzLnRyYW5zcGFyZW5jeS51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgdGhlbWVTZXR0aW5ncyB9O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgTkFWX0ZPT1RFUl9MSU5LOiB7IGlkOiAnbmF2X2Zvb3Rlcl9saW5rX3h4eF9idG4nIH0sXHJcbiAgTkFWX0ZPT1RFUl9VUkw6IHsgaWQ6ICduYXZfZm9vdGVyX2xpbmtfeHh4X2J0bicgfSxcclxuXHJcbiAgTkFWX0ZPT1RFUl9QTEFZU1RPUkU6IHsgaWQ6ICduYXZfZm9vdGVyX3BsYXlzdG9yZV9idG4nIH0sXHJcbiAgTkFWX0ZPT1RFUl9BUFBTVE9SRTogeyBpZDogJ25hdl9mb290ZXJfYXBwc3RvcmVfYnRuJyB9LFxyXG4gIE5BVl9GT09URVJfQ09OVEFDVDogeyBpZDogJ25hdl9mb290ZXJfY29udGFjdF9idG4nIH0sXHJcbiAgTkFWX0ZPT1RFUl9TT0NJQUw6IHsgaWQ6ICduYXZfZm9vdGVyX3NvY2lhbF94eHhfYnRuJyB9LFxyXG4gIE5BVl9GT09URVJfU0VHTUVOVDogeyBpZDogJ25hdl9mb290ZXJfc2VnbWVudF94eHhfYnRuJyB9LFxyXG59O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi91c2VUaGVtZSc7XHJcbiIsImltcG9ydCBmaW5kIGZyb20gJ2xvZGFzaC9maW5kJztcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgdGhlbWVTZXR0aW5ncywgVGhlbWVUeXBlIH0gZnJvbSAnY29uc3RhbnRzL3RoZW1lJztcclxuXHJcbmNvbnN0IGdldFRoZW1lU2V0dGluZyA9IChwYXRobmFtZTogc3RyaW5nKTogVGhlbWVUeXBlID0+IHtcclxuICBsZXQgdGhlbWVTZXR0aW5nID0gdGhlbWVTZXR0aW5nc1tgLyR7cGF0aG5hbWUuc3BsaXQoJy8nKVsxXX1gXTtcclxuXHJcbiAgaWYgKCF0aGVtZVNldHRpbmcpIHtcclxuICAgIHRoZW1lU2V0dGluZyA9IGZpbmQodGhlbWVTZXR0aW5ncywgKF86IGFueSwga2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgcmV0dXJuIGtleSAhPT0gJy8nICYmIHBhdGhuYW1lLnN0YXJ0c1dpdGgoa2V5KTtcclxuICAgIH0pIHx8IHsgdGhlbWU6ICdwcHQnLCBmb290ZXJTZXR0aW5nczoge30gfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGVtZVNldHRpbmc7XHJcbn07XHJcblxyXG5jb25zdCB1c2VUaGVtZSA9ICgpID0+IHtcclxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbdGhlbWVTZXR0aW5nLCBzZXRUaGVtZVNldHRpbmddID0gdXNlU3RhdGUoZ2V0VGhlbWVTZXR0aW5nKHBhdGhuYW1lKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUaGVtZVNldHRpbmcoZ2V0VGhlbWVTZXR0aW5nKHBhdGhuYW1lKSk7XHJcbiAgfSwgW3BhdGhuYW1lXSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0aGVtZVNldHRpbmcsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVRoZW1lO1xyXG4iLCJpbXBvcnQgeyBJbWFnZVByb3BzIH0gZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5leHBvcnQgdHlwZSBJbWFnZUNhY2hlID0gUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgSW1hZ2VQcm9wcz4+O1xyXG5cclxuY29uc3QgSU1BR0VfTk9UX0ZPVU5EID0gJ0ltYWdlIGZyb20gcGF0aDpcInswfVwiIG5vdCBmb3VuZCc7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SW1hZ2UgPSAoaW1hZ2VQYXRoOiBzdHJpbmcpOiBJbWFnZVByb3BzID0+IHtcclxuICBjb25zdCBzcGxpdHRlZFBhdGggPSBpbWFnZVBhdGguc3BsaXQoJy4nKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGltcG9ydGVkSW1hZ2UgPSByZXF1aXJlKGAuLi8uLi9hc3NldHMvaW1hZ2VzLyR7c3BsaXR0ZWRQYXRoWzBdfWApW3NwbGl0dGVkUGF0aFsxXV07XHJcbiAgICByZXR1cm4gaW1wb3J0ZWRJbWFnZTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgRXJyb3IoSU1BR0VfTk9UX0ZPVU5ELnJlcGxhY2UoJ3swfScsIGltYWdlUGF0aCkpO1xyXG4gIH1cclxufTtcclxuIiwiZXhwb3J0ICogZnJvbSAnLi9pbWFnZXMnO1xyXG4iLCJleHBvcnQgKiBmcm9tICcuL25hdmlnYXRpb24nO1xyXG4iLCJpbXBvcnQgeyBUSEVNRV9QUEZBIH0gZnJvbSAnY29uc3RhbnRzL2NvbW1vbic7XHJcblxyXG5jb25zdCBwcGZhUmVnZXggPSBuZXcgUmVnRXhwKGAke1RIRU1FX1BQRkF9L2ApO1xyXG5leHBvcnQgY29uc3QgaXNUaGVtZVN3aXRjaCA9IChwYXRobmFtZTogc3RyaW5nLCBpbmNvbWluZ1BhdGg6IHN0cmluZykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICAocHBmYVJlZ2V4LnRlc3QocGF0aG5hbWUpICYmICFwcGZhUmVnZXgudGVzdChpbmNvbWluZ1BhdGgpKSB8fFxyXG4gICAgKCFwcGZhUmVnZXgudGVzdChwYXRobmFtZSkgJiYgcHBmYVJlZ2V4LnRlc3QoaW5jb21pbmdQYXRoKSlcclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JveCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuLy8gaW1wb3J0IElucHV0QWRvcm5tZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0lucHV0QWRvcm5tZW50JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcbi8vIGltcG9ydCB1c2VUcmFuc2xhdGlvbiBmcm9tICdob29rcy91c2VUcmFuc2xhdGlvbic7XHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnYXBwUmVkdXgnO1xyXG5pbXBvcnQgeyBjb25zdGFudHNBY3Rpb25zIH0gZnJvbSAnYXBwUmVkdXgvY29uc3RhbnRzJztcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnYXBwUmVkdXgnO1xyXG5cclxuaW1wb3J0IEZpZWxkR2VuZXJhdG9yIGZyb20gJ2NvbXBvbmVudHMvRm9ybXMvRmllbGRHZW5lcmF0b3InO1xyXG5cclxuY29uc3QgRm9ybXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgdmFsdWVzID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5mb3Jtcy52YWx1ZXM/LnRlc3QpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPkZvcm1zPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxQYXBlcj5cclxuICAgICAgICAgIDxCb3ggcGFkZGluZz17Mn0+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgbm9WYWxpZGF0ZVxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgICBncmlkU2l6ZT17Nn1cclxuICAgICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vbmV5XCJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNeSBNb25leVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjdXJyZW5jeVwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVmFsdWUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkR2VuZXJhdG9yXHJcbiAgICAgICAgICAgICAgICAgIHVzZUdyaWRcclxuICAgICAgICAgICAgICAgICAgZ3JpZFNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPVwiR2VuZGVyXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNlbGVjdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIHN0b3JlT3B0aW9uc1BhdGg9XCJjb25zdGFudHMuY29uc3RhbnRzLmdlbmRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGdldE9wdGlvbkxhYmVsPXsob3B0aW9uKSA9PiBvcHRpb24udG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgICBncmlkU2l6ZT17Nn1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb21iby1ib3gtZGVtb1wiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ291bnRyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgc3RvcmVPcHRpb25zUGF0aD1cImNvbnN0YW50cy5jb25zdGFudHMuY291bnRyaWVzXCJcclxuICAgICAgICAgICAgICAgICAgZ2V0T3B0aW9uTGFiZWw9eyhvcHRpb24pID0+IG9wdGlvbi50b1N0cmluZygpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGaWVsZEdlbmVyYXRvclxyXG4gICAgICAgICAgICAgICAgICB1c2VHcmlkXHJcbiAgICAgICAgICAgICAgICAgIGdyaWRTaXplPXs2fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwibXVsdGlfc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgZm9ybU5hbWU9XCJ0ZXN0XCJcclxuICAgICAgICAgICAgICAgICAgbXVsdGlwbGVcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInRhZ3MtZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICBzdG9yZU9wdGlvbnNQYXRoPVwiY29uc3RhbnRzLmNvbnN0YW50cy5jb3VudHJpZXNcIlxyXG4gICAgICAgICAgICAgICAgICBnZXRPcHRpb25MYWJlbD17KG9wdGlvbikgPT4gb3B0aW9uLnRvU3RyaW5nKCl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZpZWxkR2VuZXJhdG9yXHJcbiAgICAgICAgICAgICAgICAgIHVzZUdyaWRcclxuICAgICAgICAgICAgICAgICAgZ3JpZFNpemU9ezZ9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIGZvcm1OYW1lPVwidGVzdFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJyZWRkaXRcIlxyXG4gICAgICAgICAgICAgICAgICBsYWJlbD1cIlJlZGRpdFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlbHBlclRleHQ9XCJJbmNvcnJlY3QgZW50cnkuXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RmllbGRHZW5lcmF0b3JcclxuICAgICAgICAgICAgICAgICAgdXNlR3JpZFxyXG4gICAgICAgICAgICAgICAgICBncmlkU2l6ZT17Nn1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBmb3JtTmFtZT1cInRlc3RcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiZGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGF0ZSBwaWNrZXIgZGlhbG9nXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCIgbWFyZ2luVG9wPXsyfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogYDIwMHB4YCwgaGVpZ2h0OiBgNTBweGAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSB3cmFwcGVyLmdldFN0YXRpY1Byb3BzKChzdG9yZSkgPT4gYXN5bmMgKCkgPT4ge1xyXG4gIGF3YWl0IHN0b3JlLmRpc3BhdGNoKGNvbnN0YW50c0FjdGlvbnMuZG9HZXRDb25zdGFudHMoKSk7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHt9IH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=