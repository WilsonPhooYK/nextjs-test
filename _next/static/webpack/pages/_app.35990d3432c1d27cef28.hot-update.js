webpackHotUpdate_N_E("pages/_app",{

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
___CSS_LOADER_EXPORT___.push([module.i, ".Footer_footer__1_KSh {\n  margin-top: 80px;\n}\n\n.Footer_footerInner__3jjAm {\n  width: 100%;\n}\n\n.Footer_downloadApp__3RC8- {\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n\n.Footer_curve__2vu8l {\n  width: calc(100vw + 2px);\n  margin-left: -1px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  max-height: 102px;\n}\n.Footer_curve__2vu8l img {\n  width: 100%;\n  height: auto;\n}\n.Footer_curve__2vu8l.Footer_absolute__cHmQU {\n  position: absolute;\n  bottom: 80px;\n  z-index: -1;\n}\n\n.Footer_content__QH-B3 {\n  margin-top: -2px;\n  background-color: var(--color-navy);\n}\n.Footer_content__QH-B3.Footer_paddedContent__1B2y3 {\n  margin-top: -82px;\n  padding-bottom: 80px;\n  padding-top: 80px;\n}\n.Footer_content__QH-B3 .Footer_contentInner__1OOGA {\n  max-width: 1000px;\n  margin: 0 auto;\n  padding: 80px 15px 50px 15px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n@media screen and (max-width: 767px) {\n  .Footer_content__QH-B3 .Footer_contentInner__1OOGA {\n    padding: 50px 15px 100px 15px;\n  }\n}\n.Footer_content__QH-B3 .Footer_contentInner__1OOGA.Footer_useCompact__1ZEQN {\n  max-width: 1200px;\n  padding-top: 50px;\n}\n@media screen and (max-width: 440px) {\n  .Footer_content__QH-B3 .Footer_contentInner__1OOGA.Footer_useCompact__1ZEQN {\n    padding-top: 40px;\n    display: flex;\n    justify-content: center;\n  }\n}\n.Footer_content__QH-B3 a, .Footer_content__QH-B3 p, .Footer_content__QH-B3 h5, .Footer_content__QH-B3 span {\n  white-space: pre-wrap;\n}\n.Footer_content__QH-B3 p, .Footer_content__QH-B3 h5, .Footer_content__QH-B3 span {\n  color: white;\n}\n.Footer_content__QH-B3 h5 {\n  font-weight: 700;\n}", "",{"version":3,"sources":["webpack://Footer.module.scss"],"names":[],"mappings":"AAGA;EACE,gBAAA;AAFF;;AAKA;EACE,WAAA;AAFF;;AAKA;EACE,kBAAA;EACA,aAAA;EACA,uBAAA;AAFF;;AAKA;EACE,wBAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,qBAAA;EACA,iBAAA;AAFF;AAIE;EACE,WAAA;EACA,YAAA;AAFJ;AAKE;EACE,kBAAA;EACA,YA/BiB;EAgCjB,WAAA;AAHJ;;AAOA;EACE,gBAAA;EACA,mCAAA;AAJF;AAME;EACE,iBAAA;EACA,oBA1CiB;EA2CjB,iBA3CiB;AAuCrB;AAOE;EACE,iBAAA;EACA,cAAA;EACA,4BAAA;EACA,aAAA;EACA,eAAA;EACA,6BAAA;AALJ;AAOI;EARF;IASI,6BAAA;EAJJ;AACF;AAMI;EACE,iBAAA;EACA,iBAAA;AAJN;AAMM;EAJF;IAKI,iBAAA;IACA,aAAA;IACA,uBAAA;EAHN;AACF;AAOE;EACE,qBAAA;AALJ;AASE;EACE,YAAA;AAPJ;AAWE;EACE,gBAAA;AATJ","sourcesContent":["\r\n$downloadAppPadding: 80px;\r\n\r\n.footer {\r\n  margin-top: 80px;\r\n}\r\n\r\n.footerInner {\r\n  width: 100%;\r\n}\r\n\r\n.downloadApp {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.curve {\r\n  width: calc(100vw + 2px);\r\n  margin-left: -1px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-end;\r\n  max-height: 102px;\r\n\r\n  img {\r\n    width: 100%;\r\n    height: auto;\r\n  }\r\n\r\n  &.absolute {\r\n    position: absolute;\r\n    bottom: $downloadAppPadding;\r\n    z-index: -1;\r\n  }\r\n}\r\n\r\n.content {\r\n  margin-top: -2px;\r\n  background-color: var(--color-navy);\r\n\r\n  &.paddedContent {\r\n    margin-top: -$downloadAppPadding - 2px;\r\n    padding-bottom: $downloadAppPadding;\r\n    padding-top: $downloadAppPadding;\r\n  }\r\n\r\n  .contentInner {\r\n    max-width: 1000px;\r\n    margin: 0 auto;\r\n    padding: 80px 15px 50px 15px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n\r\n    @media screen and (max-width: 767px) {\r\n      padding: 50px 15px 100px 15px;\r\n    }\r\n\r\n    &.useCompact {\r\n      max-width: 1200px;\r\n      padding-top: 50px;\r\n\r\n      @media screen and (max-width: 440px) {\r\n        padding-top: 40px;\r\n        display: flex;\r\n        justify-content: center;\r\n      }\r\n    }\r\n  }\r\n\r\n  a, p, h5, span {\r\n    white-space: pre-wrap;\r\n    // @extend %normal-text-template;\r\n  }\r\n\r\n  p, h5, span {\r\n    color: white;\r\n  }\r\n  \r\n\r\n  h5 {\r\n    font-weight: 700;\r\n  }\r\n}"],"sourceRoot":""}]);
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
  return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./Compact */ "./src/components/Footer/Compact/index.tsx"));
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
  return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! ./DownloadApp */ "./src/components/Footer/DownloadApp/index.tsx"));
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

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var appRedux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! appRedux */ "./src/appRedux/index.ts");
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Footer */ "./src/components/Footer/index.tsx");
/* harmony import */ var styles_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles/theme */ "./src/styles/theme.ts");
/* harmony import */ var styles_global_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/global.scss */ "./src/styles/global.scss");
/* harmony import */ var styles_global_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_global_scss__WEBPACK_IMPORTED_MODULE_8__);



var _jsxFileName = "J:\\policypal-web-nextjs\\src\\pages\\_app.tsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(J_policypal_web_nextjs_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






 // import CustomThemeProvider from 'context/CustomThemeProvider';



var updateAppTheme = function updateAppTheme(pathname) {
  var isPPFA = /ppfa/.test(pathname);
  var oldClass = isPPFA ? 'app-ppt' : 'app-ppfa';
  var newClass = isPPFA ? 'app-ppfa' : 'app-ppt';

  if (document.body.classList.contains(oldClass) || !document.body.classList.contains(newClass)) {
    document.body.classList.remove('app-ppt', 'app-ppfa');
    document.body.classList.add(newClass);
    return true;
  }

  return false;
};

var updateStyleTheme = function updateStyleTheme(pathname) {
  var isPPFA = /ppfa/.test(pathname);
  return isPPFA ? Object(styles_theme__WEBPACK_IMPORTED_MODULE_7__["getTheme"])('ppfa') : Object(styles_theme__WEBPACK_IMPORTED_MODULE_7__["getTheme"])('ppt');
};

var WrappedApp = function WrappedApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }, _this);
};

_c = WrappedApp;
var StyledWrappedApp = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles_theme__WEBPACK_IMPORTED_MODULE_7__["cssVariables"])(WrappedApp);

var ThemedApp = function ThemedApp(props) {
  _s();

  var pathname = props.router.pathname; // const [initialPathname] = useState(pathname);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])(updateStyleTheme(pathname))),
      theme = _useState[0],
      setTheme = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      var _jssStyles$parentElem;

      (_jssStyles$parentElem = jssStyles.parentElement) === null || _jssStyles$parentElem === void 0 ? void 0 : _jssStyles$parentElem.removeChild(jssStyles);
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (updateAppTheme(pathname)) {
      setTheme(Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["createMuiTheme"])(updateStyleTheme(pathname)));
    }
  }, [pathname]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
    theme: theme,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(StyledWrappedApp, _objectSpread({}, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(components_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, _this);
};

_s(ThemedApp, "riNXel6uKh7mXSTl3E6R2bPhZsc=");

_c2 = ThemedApp;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = appRedux__WEBPACK_IMPORTED_MODULE_5__["default"].withRedux(ThemedApp));

var _c, _c2, _c3;

$RefreshReg$(_c, "WrappedApp");
$RefreshReg$(_c2, "ThemedApp");
$RefreshReg$(_c3, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlSZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGaW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VSZWR1Y2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUcmltLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVGaW5kLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL190cmltbWVkRW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZmluZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9maW5kSW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvcmVkdWNlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvRmluaXRlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvSW50ZWdlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC90b051bWJlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0NvbnRhY3RzL0NvbnRhY3RzLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvQ29udGVudC9Db250ZW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyTGluay9Gb290ZXJMaW5rLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvTWFzRm9vdGVyL01hc0Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL1N0b3JlQnV0dG9ucy9TdG9yZUJ1dHRvbnMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FwcEFuY2hvci9BcHBBbmNob3IudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BcHBBbmNob3IvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvQ29udGFjdHMvQ29udGFjdHMubW9kdWxlLnNjc3M/OGY1MSIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0NvbnRhY3RzL0NvbnRhY3RzLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0NvbnRhY3RzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0NvbnRlbnQvQ29udGVudC5tb2R1bGUuc2Nzcz9kOTQ0Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvQ29udGVudC9Db250ZW50LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0NvbnRlbnQvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRmFjZWJvb2tMaWtlL0ZhY2Vib29rTGlrZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9GYWNlYm9va0xpa2UvaW5kZXgudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmNvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIubW9kdWxlLnNjc3M/ZTQ1YiIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJMaW5rL0Zvb3RlckxpbmsubW9kdWxlLnNjc3M/MjI2YiIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3RlckxpbmsvRm9vdGVyTGluay50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJMaW5rL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL01hc0Zvb3Rlci9NYXNGb290ZXIubW9kdWxlLnNjc3M/MzIyOSIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL01hc0Zvb3Rlci9NYXNGb290ZXIudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvTWFzRm9vdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL1N0b3JlQnV0dG9ucy9TdG9yZUJ1dHRvbnMubW9kdWxlLnNjc3M/ZDEyNyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL1N0b3JlQnV0dG9ucy9TdG9yZUJ1dHRvbnMudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvU3RvcmVCdXR0b25zL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb21wYW55LnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL3Byb2R1Y3RzLnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29uc3RhbnRzL3JvdXRlcy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy90aGVtZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb25zdGFudHMvdHJhY2tpbmcvYnV0dG9ucy9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9ob29rcy91c2VUaGVtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVRoZW1lL3VzZVRoZW1lLnRzIiwid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3giXSwibmFtZXMiOlsiQXBwQW5jaG9yIiwiY2hpbGRyZW4iLCJocmVmIiwicHJvcHMiLCJ0b1N0cmluZyIsIkNvbnRhY3RzIiwidGhlbWVTZXR0aW5nIiwic3R5bGVzIiwiY29udGFjdHMiLCJjb250YWN0IiwidGhlbWUiLCJjb250YWN0UFBUQXJyYXkiLCJjb250YWN0UFBTQXJyYXkiLCJtYXAiLCJ0ZXh0Iiwic29jaWFsc0NvbnRhaW5lciIsInNvY2lhbHNBcnJheSIsInNvY2lhbCIsImluZGV4Iiwic29jaWFsSXRlbSIsImd0bVRyYWNrZXIiLCJOQVZfRk9PVEVSX1NPQ0lBTCIsImlkIiwicmVwbGFjZSIsImtleSIsImltZyIsImZhY2Vib29rTGlrZSIsInN0b3JlQnV0dG9ucyIsIm1lbW8iLCJDb250ZW50IiwibGlzdENvbnRlbnQiLCJsIiwibGlzdCIsInRpdGxlIiwicHJvZHVjdHMiLCJkYXRhIiwiZCIsImkiLCJGYWNlYm9va0xpa2UiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJGQiIsIlhGQk1MIiwicGFyc2UiLCJlcnJvciIsInNvY2lhbHMiLCJmYWNlYm9vayIsIlJlYWN0IiwibW9yZVRhYkxpc3QiLCJyb3V0ZXMiLCJjbGFpbXMiLCJkZXNjIiwidXJsIiwibW9yZVRhYkxpc3RQUFQiLCJhYm91dCIsIm1lbWJlcl9iZW5lZml0cyIsInJlZmVycmFsIiwiZ2l2ZWJhY2siLCJzZXJ2aWNlX3N0YW5kYXJkIiwiY2FyZWVyIiwicGFydG5lcnNoaXAiLCJyZXNvdXJjZXNMaXN0IiwiYmxvZyIsInR5cGUiLCJib29rIiwicHJlc3MiLCJmb290ZXJMaXN0UFBUIiwidG9zUFBUIiwicHJpdmFjeXBvbGljeVBQVCIsInNlY3VyaXR5IiwiZGlzY2xhaW1lclBQVCIsImZvb3Rlckxpc3RQUEZBIiwidG9zUFBGQSIsInByaXZhY3lwb2xpY3lQUEZBIiwiZmFpckRlYWxpbmdTdGF0ZW1lbnRQUEZBIiwiZGlzY2xhaW1lclBQRkEiLCJ5ZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZG93bmxvYWRBcHBEYXRhIiwicHB0IiwicHBmYSIsIm1hc0Zvb3RlciIsImYiLCJqb2luIiwiUFBUX0VOVElUWSIsIlBQRkFfRU5USVRZIiwiY29tcGFjdERhdGEiLCJjb250ZW50IiwiQ29tcGFjdCIsImR5bmFtaWMiLCJEb3dubG9hZEFwcCIsIkZvb3RlciIsInVzZVRoZW1lIiwiZm9vdGVyQkciLCJnZXRJbWFnZSIsImZvb3RlciIsImZvb3RlcklubmVyIiwiZm9vdGVyU2V0dGluZ3MiLCJoaWRlRG93bmxvYWRBcHAiLCJoaWRlQ3VydmUiLCJjdXJ2ZSIsImRvd25sb2FkQXBwIiwiYWJzb2x1dGUiLCJwYWRkZWRDb250ZW50IiwiY29udGVudElubmVyIiwidXNlQ29tcGFjdCIsIkZvb3RlckxpbmsiLCJuYW1lIiwiZnVsbF9uYW1lIiwiTkFWX0ZPT1RFUl9DT05UQUNUIiwiTkFWX0ZPT1RFUl9MSU5LIiwidG9Mb3dlckNhc2UiLCJpdGVtIiwidGVzdCIsImltYWdlIiwiTWFzRm9vdGVyIiwiX19odG1sIiwiU3RvcmVCdXR0b25zIiwic21hbGxlckJ1dHRvbnMiLCJzbWFsbCIsIk5BVl9GT09URVJfQVBQU1RPUkUiLCJhcHBTdG9yZXMiLCJhcHBsZSIsIk5BVl9GT09URVJfUExBWVNUT1JFIiwiYW5kcm9pZCIsIlBQX0VOVElUWSIsImNvbnRhY3RQUFMiLCJlbWFpbCIsInRlbCIsIndoYXRzYXBwIiwibG9jYXRpb24iLCJjb250YWN0UFBUIiwieW91dHViZSIsImluc3RhZ3JhbSIsImxpbmtlZGluIiwic2xpY2UiLCJzbHVnIiwic3JjIiwidGVybV9saWZlIiwid2hvbGVfbGlmZSIsImVuZG93bWVudCIsImhlYWx0aCIsInJldGlyZW1lbnQiLCJjcml0aWNhbF9pbGxuZXNzIiwicGV0IiwidHJhdmVsIiwibGFuZGluZyIsImNhdGVnb3JpZXMiLCJjYXRlZ29yaWVzX29sZCIsImZhcSIsImZhcV96ZW5kZXNrIiwiY2FzaGJhY2siLCJ0b3MiLCJkaXNjbGFpbWVyIiwicHJpdmFjeXBvbGljeSIsImZhaXJEZWFsaW5nU3RhdGVtZW50IiwicmV3YXJkVG9zIiwib2xkUmV3YXJkVG9zIiwiY2xhaW1zX29sZCIsInByb2ZpbGUiLCJyZXdhcmRzIiwicmV3YXJkc01vYmlsZSIsIm1vb3ZheiIsImZvcmdvdHBhc3N3b3JkIiwicmVjZWlwdCIsImNoZWNrb3V0IiwicmVnaXN0ZXIiLCJsb2dpbiIsImdvdG9hcHBzdG9yZSIsImJ1c2luZXNzIiwiYnVzaW5lc3NfcHB0IiwidHJhdmVsX3BwdCIsIm1vdG9yIiwibW90b3JfcHB0IiwicGV0X3BwdCIsInBlcnNvbmFsX2FjY2lkZW50IiwicGVyc29uYWxfYWNjaWRlbnRfcHB0IiwidGVybV9saWZlX3BwdCIsIndob2xlX2xpZmVfcHB0IiwiY3JpdGljYWxfaWxsbmVzc19wcHQiLCJoZWFsdGhfb2xkIiwiaGVhbHRoX3BwdCIsImVuZG93bWVudF9vbGQiLCJlbmRvd21lbnRfcHB0IiwicmV0aXJlbWVudF9vbGQiLCJyZXRpcmVtZW50X3BwdCIsIm9uX2RlbWFuZF9wYSIsImNueSIsImNhbXBhZ2luX3doZWVsIiwic2NyYXRjaF93aW4iLCJjaHJpc3RtYXMiLCJjaHJpc3RtYXNfbGVhZGVyYm9hcmQiLCJmb3JiaWRkZW4iLCJhZGhvY19jaGVja291dCIsImFkaG9jX3JlY2VpcHQiLCJ0aGVfbmV3X3NhdnZ5IiwiamViaGVhbHRoIiwiY2FyZHVwIiwicmVmZXJyZWQiLCJkeW5hbWljX3BhcnRuZXIiLCJwcm9tb3Rpb25zX29sZCIsInByb21vdGlvbnMiLCJ0ZWxlX2NvbnN1bHRhdGlvbiIsIm1vbmV5YmFnX2xhbmRpbmdfb2xkIiwibW9uZXliYWdfZ2FtZV9vbGQiLCJtb25leWJhZ19sYW5kaW5nIiwibW9uZXliYWdfZ2FtZSIsIm1vbmV5YmFnX2xhbmRpbmdfc3RhZ2luZyIsIm1vbmV5YmFnX2dhbWVfc3RhZ2luZyIsImxpZmVfc3RhZ2UiLCJwYXltZW50IiwiY2hvb3NlX2FkdmlzZXIiLCJjaG9vc2VfYWR2aXNlcl9zdW1tYXJ5IiwiZmFfZGFzaGJvYXJkIiwiZW5kb3dtZW50X2Jsb2ciLCJvbmxpbmVfZW5kb3dtZW50Iiwid2hhdF9wY3JlZGl0IiwiZHlzb25fcHJvbW8iLCJiZXN0X3dob2xlX2xpZmUiLCJiZXN0X3Rlcm1fbGlmZSIsImJlc3RfZW5kb3dtZW50IiwiYmVzdF9jaSIsImJlc3RfcmV0aXJlbWVudCIsImJlc3RfaGVhbHRoIiwiYmVzdF9pbnRlcm5hdGlvbmFsX2hlYWx0aCIsImJlc3RfbWF0ZXJuaXR5IiwiYmVzdF9wZXJzb25hbF9hY2NpZGVudCIsImJlc3RfY2FyIiwiYmVzdF9ob21lIiwiYmVzdF9tb3J0Z2FnZSIsImJlc3RfbWFpZCIsImdyZWF0X2Vhc3Rlcm4iLCJwcnVkZW50aWFsIiwiZWxhc3RpcSIsImVlYXN5IiwiZ2lnYW50aXEiLCJpbHBfb2xkIiwiaWxwIiwidHJhbnNwYXJlbmN5X29sZCIsInRyYW5zcGFyZW5jeSIsInRoZW1lU2V0dGluZ3MiLCJyZWR1Y2UiLCJyZXN1bHQiLCJOQVZfRk9PVEVSX1VSTCIsIk5BVl9GT09URVJfU0VHTUVOVCIsImdldFRoZW1lU2V0dGluZyIsInBhdGhuYW1lIiwic3BsaXQiLCJmaW5kIiwiXyIsInN0YXJ0c1dpdGgiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNldFRoZW1lU2V0dGluZyIsInVwZGF0ZUFwcFRoZW1lIiwiaXNQUEZBIiwib2xkQ2xhc3MiLCJuZXdDbGFzcyIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIiwidXBkYXRlU3R5bGVUaGVtZSIsImdldFRoZW1lIiwiV3JhcHBlZEFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlN0eWxlZFdyYXBwZWRBcHAiLCJ3aXRoU3R5bGVzIiwiY3NzVmFyaWFibGVzIiwiVGhlbWVkQXBwIiwicm91dGVyIiwiY3JlYXRlTXVpVGhlbWUiLCJzZXRUaGVtZSIsImpzc1N0eWxlcyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsUUFBUTtBQUNuQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsU0FBUztBQUNwQixXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkI7QUFDQSxXQUFXLFNBQVM7QUFDcEIsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3RCQSxzQkFBc0IsbUJBQU8sQ0FBQyxxRUFBb0I7O0FBRWxEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87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LGNBQVEsQ0FBQ0QsK0VBQWMsQ0FBQ1YsZ0JBQWdCLENBQUNsQixRQUFELENBQWpCLENBQWYsQ0FBUjtBQUNEO0FBQ0YsR0FKUSxFQUlOLENBQUNBLFFBQUQsQ0FKTSxDQUFUO0FBTUEsc0JBQ0UscUVBQUMsc0VBQUQ7QUFBZSxTQUFLLEVBQUU3TyxLQUF0QjtBQUFBLDRCQUVFLHFFQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQUdFLHFFQUFDLGdCQUFELG9CQUFzQlAsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGLGVBSUUscUVBQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBUUQsQ0EzQkQ7O0dBQU04USxTOztNQUFBQSxTO0FBNkJTLHFFQUFBUSxnREFBTyxDQUFDQyxTQUFSLENBQWtCVCxTQUFsQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzU5OTBkMzQzMmMxZDI3Y2VmMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnJlZHVjZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbYWNjdW11bGF0b3JdIFRoZSBpbml0aWFsIHZhbHVlLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5pdEFjY3VtXSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBhcnJheWAgYXNcbiAqICB0aGUgaW5pdGlhbCB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlSZWR1Y2UoYXJyYXksIGl0ZXJhdGVlLCBhY2N1bXVsYXRvciwgaW5pdEFjY3VtKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgaWYgKGluaXRBY2N1bSAmJiBsZW5ndGgpIHtcbiAgICBhY2N1bXVsYXRvciA9IGFycmF5WysraW5kZXhdO1xuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpdGVyYXRlZShhY2N1bXVsYXRvciwgYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVJlZHVjZTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmluZEluZGV4YCBhbmQgYF8uZmluZExhc3RJbmRleGAgd2l0aG91dFxuICogc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBmcm9tSW5kZXggVGhlIGluZGV4IHRvIHNlYXJjaCBmcm9tLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF0Y2hlZCB2YWx1ZSwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBiYXNlRmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAxIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGaW5kSW5kZXg7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnJlZHVjZWAgYW5kIGBfLnJlZHVjZVJpZ2h0YCwgd2l0aG91dCBzdXBwb3J0XG4gKiBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcywgd2hpY2ggaXRlcmF0ZXMgb3ZlciBgY29sbGVjdGlvbmAgdXNpbmcgYGVhY2hGdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gYWNjdW11bGF0b3IgVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaXRBY2N1bSBTcGVjaWZ5IHVzaW5nIHRoZSBmaXJzdCBvciBsYXN0IGVsZW1lbnQgb2ZcbiAqICBgY29sbGVjdGlvbmAgYXMgdGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlYWNoRnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGBjb2xsZWN0aW9uYC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlZHVjZShjb2xsZWN0aW9uLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSwgZWFjaEZ1bmMpIHtcbiAgZWFjaEZ1bmMoY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgYWNjdW11bGF0b3IgPSBpbml0QWNjdW1cbiAgICAgID8gKGluaXRBY2N1bSA9IGZhbHNlLCB2YWx1ZSlcbiAgICAgIDogaXRlcmF0ZWUoYWNjdW11bGF0b3IsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gIH0pO1xuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlZHVjZTtcbiIsInZhciB0cmltbWVkRW5kSW5kZXggPSByZXF1aXJlKCcuL190cmltbWVkRW5kSW5kZXgnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbVN0YXJ0ID0gL15cXHMrLztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy50cmltYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIHRyaW0uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSB0cmltbWVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRyaW0oc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmdcbiAgICA/IHN0cmluZy5zbGljZSgwLCB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSArIDEpLnJlcGxhY2UocmVUcmltU3RhcnQsICcnKVxuICAgIDogc3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUcmltO1xuIiwidmFyIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYF8uZmluZGAgb3IgYF8uZmluZExhc3RgIGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmaW5kSW5kZXhGdW5jIFRoZSBmdW5jdGlvbiB0byBmaW5kIHRoZSBjb2xsZWN0aW9uIGluZGV4LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZmluZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlRmluZChmaW5kSW5kZXhGdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIGZyb21JbmRleCkge1xuICAgIHZhciBpdGVyYWJsZSA9IE9iamVjdChjb2xsZWN0aW9uKTtcbiAgICBpZiAoIWlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgICB2YXIgaXRlcmF0ZWUgPSBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKTtcbiAgICAgIGNvbGxlY3Rpb24gPSBrZXlzKGNvbGxlY3Rpb24pO1xuICAgICAgcHJlZGljYXRlID0gZnVuY3Rpb24oa2V5KSB7IHJldHVybiBpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKTsgfTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gZmluZEluZGV4RnVuYyhjb2xsZWN0aW9uLCBwcmVkaWNhdGUsIGZyb21JbmRleCk7XG4gICAgcmV0dXJuIGluZGV4ID4gLTEgPyBpdGVyYWJsZVtpdGVyYXRlZSA/IGNvbGxlY3Rpb25baW5kZXhdIDogaW5kZXhdIDogdW5kZWZpbmVkO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUZpbmQ7XG4iLCIvKiogVXNlZCB0byBtYXRjaCBhIHNpbmdsZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbnZhciByZVdoaXRlc3BhY2UgPSAvXFxzLztcblxuLyoqXG4gKiBVc2VkIGJ5IGBfLnRyaW1gIGFuZCBgXy50cmltRW5kYCB0byBnZXQgdGhlIGluZGV4IG9mIHRoZSBsYXN0IG5vbi13aGl0ZXNwYWNlXG4gKiBjaGFyYWN0ZXIgb2YgYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGxhc3Qgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5mdW5jdGlvbiB0cmltbWVkRW5kSW5kZXgoc3RyaW5nKSB7XG4gIHZhciBpbmRleCA9IHN0cmluZy5sZW5ndGg7XG5cbiAgd2hpbGUgKGluZGV4LS0gJiYgcmVXaGl0ZXNwYWNlLnRlc3Qoc3RyaW5nLmNoYXJBdChpbmRleCkpKSB7fVxuICByZXR1cm4gaW5kZXg7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHJpbW1lZEVuZEluZGV4O1xuIiwidmFyIGNyZWF0ZUZpbmQgPSByZXF1aXJlKCcuL19jcmVhdGVGaW5kJyksXG4gICAgZmluZEluZGV4ID0gcmVxdWlyZSgnLi9maW5kSW5kZXgnKTtcblxuLyoqXG4gKiBJdGVyYXRlcyBvdmVyIGVsZW1lbnRzIG9mIGBjb2xsZWN0aW9uYCwgcmV0dXJuaW5nIHRoZSBmaXJzdCBlbGVtZW50XG4gKiBgcHJlZGljYXRlYCByZXR1cm5zIHRydXRoeSBmb3IuIFRoZSBwcmVkaWNhdGUgaXMgaW52b2tlZCB3aXRoIHRocmVlXG4gKiBhcmd1bWVudHM6ICh2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtwcmVkaWNhdGU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbZnJvbUluZGV4PTBdIFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBtYXRjaGVkIGVsZW1lbnQsIGVsc2UgYHVuZGVmaW5lZGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAgJ2FnZSc6IDM2LCAnYWN0aXZlJzogdHJ1ZSB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnLCAgICAnYWdlJzogNDAsICdhY3RpdmUnOiBmYWxzZSB9LFxuICogICB7ICd1c2VyJzogJ3BlYmJsZXMnLCAnYWdlJzogMSwgICdhY3RpdmUnOiB0cnVlIH1cbiAqIF07XG4gKlxuICogXy5maW5kKHVzZXJzLCBmdW5jdGlvbihvKSB7IHJldHVybiBvLmFnZSA8IDQwOyB9KTtcbiAqIC8vID0+IG9iamVjdCBmb3IgJ2Jhcm5leSdcbiAqXG4gKiAvLyBUaGUgYF8ubWF0Y2hlc2AgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5maW5kKHVzZXJzLCB7ICdhZ2UnOiAxLCAnYWN0aXZlJzogdHJ1ZSB9KTtcbiAqIC8vID0+IG9iamVjdCBmb3IgJ3BlYmJsZXMnXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5maW5kKHVzZXJzLCBbJ2FjdGl2ZScsIGZhbHNlXSk7XG4gKiAvLyA9PiBvYmplY3QgZm9yICdmcmVkJ1xuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5maW5kKHVzZXJzLCAnYWN0aXZlJyk7XG4gKiAvLyA9PiBvYmplY3QgZm9yICdiYXJuZXknXG4gKi9cbnZhciBmaW5kID0gY3JlYXRlRmluZChmaW5kSW5kZXgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmQ7XG4iLCJ2YXIgYmFzZUZpbmRJbmRleCA9IHJlcXVpcmUoJy4vX2Jhc2VGaW5kSW5kZXgnKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICB0b0ludGVnZXIgPSByZXF1aXJlKCcuL3RvSW50ZWdlcicpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5maW5kYCBleGNlcHQgdGhhdCBpdCByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZmlyc3RcbiAqIGVsZW1lbnQgYHByZWRpY2F0ZWAgcmV0dXJucyB0cnV0aHkgZm9yIGluc3RlYWQgb2YgdGhlIGVsZW1lbnQgaXRzZWxmLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4xLjBcbiAqIEBjYXRlZ29yeSBBcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbcHJlZGljYXRlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2Zyb21JbmRleD0wXSBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgZm91bmQgZWxlbWVudCwgZWxzZSBgLTFgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgICdhY3RpdmUnOiBmYWxzZSB9LFxuICogICB7ICd1c2VyJzogJ2ZyZWQnLCAgICAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdwZWJibGVzJywgJ2FjdGl2ZSc6IHRydWUgfVxuICogXTtcbiAqXG4gKiBfLmZpbmRJbmRleCh1c2VycywgZnVuY3Rpb24obykgeyByZXR1cm4gby51c2VyID09ICdiYXJuZXknOyB9KTtcbiAqIC8vID0+IDBcbiAqXG4gKiAvLyBUaGUgYF8ubWF0Y2hlc2AgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5maW5kSW5kZXgodXNlcnMsIHsgJ3VzZXInOiAnZnJlZCcsICdhY3RpdmUnOiBmYWxzZSB9KTtcbiAqIC8vID0+IDFcbiAqXG4gKiAvLyBUaGUgYF8ubWF0Y2hlc1Byb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbmRJbmRleCh1c2VycywgWydhY3RpdmUnLCBmYWxzZV0pO1xuICogLy8gPT4gMFxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5maW5kSW5kZXgodXNlcnMsICdhY3RpdmUnKTtcbiAqIC8vID0+IDJcbiAqL1xuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUsIGZyb21JbmRleCkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIGlmICghbGVuZ3RoKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHZhciBpbmRleCA9IGZyb21JbmRleCA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihmcm9tSW5kZXgpO1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgaW5kZXggPSBuYXRpdmVNYXgobGVuZ3RoICsgaW5kZXgsIDApO1xuICB9XG4gIHJldHVybiBiYXNlRmluZEluZGV4KGFycmF5LCBiYXNlSXRlcmF0ZWUocHJlZGljYXRlLCAzKSwgaW5kZXgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbmRJbmRleDtcbiIsInZhciBhcnJheVJlZHVjZSA9IHJlcXVpcmUoJy4vX2FycmF5UmVkdWNlJyksXG4gICAgYmFzZUVhY2ggPSByZXF1aXJlKCcuL19iYXNlRWFjaCcpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGJhc2VSZWR1Y2UgPSByZXF1aXJlKCcuL19iYXNlUmVkdWNlJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFJlZHVjZXMgYGNvbGxlY3Rpb25gIHRvIGEgdmFsdWUgd2hpY2ggaXMgdGhlIGFjY3VtdWxhdGVkIHJlc3VsdCBvZiBydW5uaW5nXG4gKiBlYWNoIGVsZW1lbnQgaW4gYGNvbGxlY3Rpb25gIHRocnUgYGl0ZXJhdGVlYCwgd2hlcmUgZWFjaCBzdWNjZXNzaXZlXG4gKiBpbnZvY2F0aW9uIGlzIHN1cHBsaWVkIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHByZXZpb3VzLiBJZiBgYWNjdW11bGF0b3JgXG4gKiBpcyBub3QgZ2l2ZW4sIHRoZSBmaXJzdCBlbGVtZW50IG9mIGBjb2xsZWN0aW9uYCBpcyB1c2VkIGFzIHRoZSBpbml0aWFsXG4gKiB2YWx1ZS4gVGhlIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBmb3VyIGFyZ3VtZW50czpcbiAqIChhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogTWFueSBsb2Rhc2ggbWV0aG9kcyBhcmUgZ3VhcmRlZCB0byB3b3JrIGFzIGl0ZXJhdGVlcyBmb3IgbWV0aG9kcyBsaWtlXG4gKiBgXy5yZWR1Y2VgLCBgXy5yZWR1Y2VSaWdodGAsIGFuZCBgXy50cmFuc2Zvcm1gLlxuICpcbiAqIFRoZSBndWFyZGVkIG1ldGhvZHMgYXJlOlxuICogYGFzc2lnbmAsIGBkZWZhdWx0c2AsIGBkZWZhdWx0c0RlZXBgLCBgaW5jbHVkZXNgLCBgbWVyZ2VgLCBgb3JkZXJCeWAsXG4gKiBhbmQgYHNvcnRCeWBcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFthY2N1bXVsYXRvcl0gVGhlIGluaXRpYWwgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAc2VlIF8ucmVkdWNlUmlnaHRcbiAqIEBleGFtcGxlXG4gKlxuICogXy5yZWR1Y2UoWzEsIDJdLCBmdW5jdGlvbihzdW0sIG4pIHtcbiAqICAgcmV0dXJuIHN1bSArIG47XG4gKiB9LCAwKTtcbiAqIC8vID0+IDNcbiAqXG4gKiBfLnJlZHVjZSh7ICdhJzogMSwgJ2InOiAyLCAnYyc6IDEgfSwgZnVuY3Rpb24ocmVzdWx0LCB2YWx1ZSwga2V5KSB7XG4gKiAgIChyZXN1bHRbdmFsdWVdIHx8IChyZXN1bHRbdmFsdWVdID0gW10pKS5wdXNoKGtleSk7XG4gKiAgIHJldHVybiByZXN1bHQ7XG4gKiB9LCB7fSk7XG4gKiAvLyA9PiB7ICcxJzogWydhJywgJ2MnXSwgJzInOiBbJ2InXSB9IChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIHJlZHVjZShjb2xsZWN0aW9uLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlSZWR1Y2UgOiBiYXNlUmVkdWNlLFxuICAgICAgaW5pdEFjY3VtID0gYXJndW1lbnRzLmxlbmd0aCA8IDM7XG5cbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCA0KSwgYWNjdW11bGF0b3IsIGluaXRBY2N1bSwgYmFzZUVhY2gpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjZTtcbiIsInZhciB0b051bWJlciA9IHJlcXVpcmUoJy4vdG9OdW1iZXInKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMCxcbiAgICBNQVhfSU5URUdFUiA9IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4O1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBmaW5pdGUgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBudW1iZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9GaW5pdGUoMy4yKTtcbiAqIC8vID0+IDMuMlxuICpcbiAqIF8udG9GaW5pdGUoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiA1ZS0zMjRcbiAqXG4gKiBfLnRvRmluaXRlKEluZmluaXR5KTtcbiAqIC8vID0+IDEuNzk3NjkzMTM0ODYyMzE1N2UrMzA4XG4gKlxuICogXy50b0Zpbml0ZSgnMy4yJyk7XG4gKiAvLyA9PiAzLjJcbiAqL1xuZnVuY3Rpb24gdG9GaW5pdGUodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gMCA/IHZhbHVlIDogMDtcbiAgfVxuICB2YWx1ZSA9IHRvTnVtYmVyKHZhbHVlKTtcbiAgaWYgKHZhbHVlID09PSBJTkZJTklUWSB8fCB2YWx1ZSA9PT0gLUlORklOSVRZKSB7XG4gICAgdmFyIHNpZ24gPSAodmFsdWUgPCAwID8gLTEgOiAxKTtcbiAgICByZXR1cm4gc2lnbiAqIE1BWF9JTlRFR0VSO1xuICB9XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgPyB2YWx1ZSA6IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9GaW5pdGU7XG4iLCJ2YXIgdG9GaW5pdGUgPSByZXF1aXJlKCcuL3RvRmluaXRlJyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBpbnRlZ2VyLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBsb29zZWx5IGJhc2VkIG9uXG4gKiBbYFRvSW50ZWdlcmBdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy10b2ludGVnZXIpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgY29udmVydGVkIGludGVnZXIuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9JbnRlZ2VyKDMuMik7XG4gKiAvLyA9PiAzXG4gKlxuICogXy50b0ludGVnZXIoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiAwXG4gKlxuICogXy50b0ludGVnZXIoSW5maW5pdHkpO1xuICogLy8gPT4gMS43OTc2OTMxMzQ4NjIzMTU3ZSszMDhcbiAqXG4gKiBfLnRvSW50ZWdlcignMy4yJyk7XG4gKiAvLyA9PiAzXG4gKi9cbmZ1bmN0aW9uIHRvSW50ZWdlcih2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdG9GaW5pdGUodmFsdWUpLFxuICAgICAgcmVtYWluZGVyID0gcmVzdWx0ICUgMTtcblxuICByZXR1cm4gcmVzdWx0ID09PSByZXN1bHQgPyAocmVtYWluZGVyID8gcmVzdWx0IC0gcmVtYWluZGVyIDogcmVzdWx0KSA6IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9JbnRlZ2VyO1xuIiwidmFyIGJhc2VUcmltID0gcmVxdWlyZSgnLi9fYmFzZVRyaW0nKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiYWQgc2lnbmVkIGhleGFkZWNpbWFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JhZEhleCA9IC9eWy0rXTB4WzAtOWEtZl0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmluYXJ5IHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc0JpbmFyeSA9IC9eMGJbMDFdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG9jdGFsIHN0cmluZyB2YWx1ZXMuICovXG52YXIgcmVJc09jdGFsID0gL14wb1swLTddKyQvaTtcblxuLyoqIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHdpdGhvdXQgYSBkZXBlbmRlbmN5IG9uIGByb290YC4gKi9cbnZhciBmcmVlUGFyc2VJbnQgPSBwYXJzZUludDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IGJhc2VUcmltKHZhbHVlKTtcbiAgdmFyIGlzQmluYXJ5ID0gcmVJc0JpbmFyeS50ZXN0KHZhbHVlKTtcbiAgcmV0dXJuIChpc0JpbmFyeSB8fCByZUlzT2N0YWwudGVzdCh2YWx1ZSkpXG4gICAgPyBmcmVlUGFyc2VJbnQodmFsdWUuc2xpY2UoMiksIGlzQmluYXJ5ID8gMiA6IDgpXG4gICAgOiAocmVJc0JhZEhleC50ZXN0KHZhbHVlKSA/IE5BTiA6ICt2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9OdW1iZXI7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQ29udGFjdHNfY29udGFjdHNfXzNRQlMyIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XFxufVxcblxcbi5Db250YWN0c19zb2NpYWxzQ29udGFpbmVyX18yOXpkTSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgbWF4LXdpZHRoOiAxNjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLkNvbnRhY3RzX3NvY2lhbHNDb250YWluZXJfXzI5emRNIHtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcbiAgfVxcbn1cXG4uQ29udGFjdHNfc29jaWFsc0NvbnRhaW5lcl9fMjl6ZE0gLkNvbnRhY3RzX3NvY2lhbEl0ZW1fXzNBTmpQIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4uQ29udGFjdHNfc29jaWFsc0NvbnRhaW5lcl9fMjl6ZE0gLkNvbnRhY3RzX3NvY2lhbEl0ZW1fXzNBTmpQIGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLkNvbnRhY3RzX2ZhY2Vib29rTGlrZV9fM3lJQTEge1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5Db250YWN0c19zdG9yZUJ1dHRvbnNfXzJrY09LID4gZGl2IHtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0NvbnRhY3RzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNFO0VBQ0UsMEJBQUE7QUFBSjs7QUFJQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdFO0VBVEY7SUFVSSxZQUFBO0lBQ0EsZ0JBQUE7RUFBRjtBQUNGO0FBRUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFKO0FBRUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUtBO0VBQ0UsaUJBQUE7QUFGRjs7QUFNRTtFQUNFLGVBQUE7QUFISlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY29udGFjdHMge1xcclxcbiAgc3BhbiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsc0NvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDI1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAxNjBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gICAgd2lkdGg6IDE2MHB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLnNvY2lhbEl0ZW0ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcblxcclxcbiAgICBpbWcge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmFjZWJvb2tMaWtlIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RvcmVCdXR0b25zIHtcXHJcXG4gID4gZGl2IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJjb250YWN0c1wiOiBcIkNvbnRhY3RzX2NvbnRhY3RzX18zUUJTMlwiLFxuXHRcInNvY2lhbHNDb250YWluZXJcIjogXCJDb250YWN0c19zb2NpYWxzQ29udGFpbmVyX18yOXpkTVwiLFxuXHRcInNvY2lhbEl0ZW1cIjogXCJDb250YWN0c19zb2NpYWxJdGVtX18zQU5qUFwiLFxuXHRcImZhY2Vib29rTGlrZVwiOiBcIkNvbnRhY3RzX2ZhY2Vib29rTGlrZV9fM3lJQTFcIixcblx0XCJzdG9yZUJ1dHRvbnNcIjogXCJDb250YWN0c19zdG9yZUJ1dHRvbnNfXzJrY09LXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkNvbnRlbnRfbGlzdF9fMk16N1Qge1xcbiAgbWFyZ2luOiAwIDE1cHggNTBweCAxNXB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcbiAgLkNvbnRlbnRfbGlzdF9fMk16N1Qge1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5Db250ZW50X2xpc3RfXzJNejdUIC5Db250ZW50X2l0ZW1fX19QNG1DIHtcXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcXG4gIH1cXG59XFxuLkNvbnRlbnRfbGlzdF9fMk16N1QgaDUge1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9Db250ZW50Lm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usd0JBQUE7QUFDRjtBQUNFO0VBSEY7SUFJSSxjQUFBO0VBRUY7QUFDRjtBQURFO0VBQ0U7SUFDRSxnQkFBQTtFQUdKO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubGlzdCB7XFxyXFxuICBtYXJnaW46IDAgMTVweCA1MHB4IDE1cHg7XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMDtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxyXFxuICAgIC5pdGVtIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDEyMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoNSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImxpc3RcIjogXCJDb250ZW50X2xpc3RfXzJNejdUXCIsXG5cdFwiaXRlbVwiOiBcIkNvbnRlbnRfaXRlbV9fX1A0bUNcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuRm9vdGVyX2Zvb3Rlcl9fMV9LU2gge1xcbiAgbWFyZ2luLXRvcDogODBweDtcXG59XFxuXFxuLkZvb3Rlcl9mb290ZXJJbm5lcl9fM2pqQW0ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5Gb290ZXJfZG93bmxvYWRBcHBfXzNSQzgtIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLkZvb3Rlcl9jdXJ2ZV9fMnZ1OGwge1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgKyAycHgpO1xcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBtYXgtaGVpZ2h0OiAxMDJweDtcXG59XFxuLkZvb3Rlcl9jdXJ2ZV9fMnZ1OGwgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uRm9vdGVyX2N1cnZlX18ydnU4bC5Gb290ZXJfYWJzb2x1dGVfX2NIbVFVIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogODBweDtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4uRm9vdGVyX2NvbnRlbnRfX1FILUIzIHtcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uYXZ5KTtcXG59XFxuLkZvb3Rlcl9jb250ZW50X19RSC1CMy5Gb290ZXJfcGFkZGVkQ29udGVudF9fMUIyeTMge1xcbiAgbWFyZ2luLXRvcDogLTgycHg7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG4gIHBhZGRpbmctdG9wOiA4MHB4O1xcbn1cXG4uRm9vdGVyX2NvbnRlbnRfX1FILUIzIC5Gb290ZXJfY29udGVudElubmVyX18xT09HQSB7XFxuICBtYXgtd2lkdGg6IDEwMDBweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgcGFkZGluZzogODBweCAxNXB4IDUwcHggMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5Gb290ZXJfY29udGVudF9fUUgtQjMgLkZvb3Rlcl9jb250ZW50SW5uZXJfXzFPT0dBIHtcXG4gICAgcGFkZGluZzogNTBweCAxNXB4IDEwMHB4IDE1cHg7XFxuICB9XFxufVxcbi5Gb290ZXJfY29udGVudF9fUUgtQjMgLkZvb3Rlcl9jb250ZW50SW5uZXJfXzFPT0dBLkZvb3Rlcl91c2VDb21wYWN0X18xWkVRTiB7XFxuICBtYXgtd2lkdGg6IDEyMDBweDtcXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NDBweCkge1xcbiAgLkZvb3Rlcl9jb250ZW50X19RSC1CMyAuRm9vdGVyX2NvbnRlbnRJbm5lcl9fMU9PR0EuRm9vdGVyX3VzZUNvbXBhY3RfXzFaRVFOIHtcXG4gICAgcGFkZGluZy10b3A6IDQwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcbn1cXG4uRm9vdGVyX2NvbnRlbnRfX1FILUIzIGEsIC5Gb290ZXJfY29udGVudF9fUUgtQjMgcCwgLkZvb3Rlcl9jb250ZW50X19RSC1CMyBoNSwgLkZvb3Rlcl9jb250ZW50X19RSC1CMyBzcGFuIHtcXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcXG59XFxuLkZvb3Rlcl9jb250ZW50X19RSC1CMyBwLCAuRm9vdGVyX2NvbnRlbnRfX1FILUIzIGg1LCAuRm9vdGVyX2NvbnRlbnRfX1FILUIzIHNwYW4ge1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uRm9vdGVyX2NvbnRlbnRfX1FILUIzIGg1IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9Gb290ZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFLQTtFQUNFLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBRkY7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRko7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsWUEvQmlCO0VBZ0NqQixXQUFBO0FBSEo7O0FBT0E7RUFDRSxnQkFBQTtFQUNBLG1DQUFBO0FBSkY7QUFNRTtFQUNFLGlCQUFBO0VBQ0Esb0JBMUNpQjtFQTJDakIsaUJBM0NpQjtBQXVDckI7QUFPRTtFQUNFLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtBQUxKO0FBT0k7RUFSRjtJQVNJLDZCQUFBO0VBSko7QUFDRjtBQU1JO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQUpOO0FBTU07RUFKRjtJQUtJLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0VBSE47QUFDRjtBQU9FO0VBQ0UscUJBQUE7QUFMSjtBQVNFO0VBQ0UsWUFBQTtBQVBKO0FBV0U7RUFDRSxnQkFBQTtBQVRKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbiRkb3dubG9hZEFwcFBhZGRpbmc6IDgwcHg7XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiA4MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVySW5uZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5kb3dubG9hZEFwcCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5jdXJ2ZSB7XFxyXFxuICB3aWR0aDogY2FsYygxMDB2dyArIDJweCk7XFxyXFxuICBtYXJnaW4tbGVmdDogLTFweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gIG1heC1oZWlnaHQ6IDEwMnB4O1xcclxcblxcclxcbiAgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuYWJzb2x1dGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGJvdHRvbTogJGRvd25sb2FkQXBwUGFkZGluZztcXHJcXG4gICAgei1pbmRleDogLTE7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIG1hcmdpbi10b3A6IC0ycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1uYXZ5KTtcXHJcXG5cXHJcXG4gICYucGFkZGVkQ29udGVudCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IC0kZG93bmxvYWRBcHBQYWRkaW5nIC0gMnB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogJGRvd25sb2FkQXBwUGFkZGluZztcXHJcXG4gICAgcGFkZGluZy10b3A6ICRkb3dubG9hZEFwcFBhZGRpbmc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGVudElubmVyIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiA4MHB4IDE1cHggNTBweCAxNXB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcblxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgICAgIHBhZGRpbmc6IDUwcHggMTVweCAxMDBweCAxNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYudXNlQ29tcGFjdCB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAxMjAwcHg7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcXHJcXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgYSwgcCwgaDUsIHNwYW4ge1xcclxcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XFxyXFxuICAgIC8vIEBleHRlbmQgJW5vcm1hbC10ZXh0LXRlbXBsYXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgcCwgaDUsIHNwYW4ge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIGg1IHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fMV9LU2hcIixcblx0XCJmb290ZXJJbm5lclwiOiBcIkZvb3Rlcl9mb290ZXJJbm5lcl9fM2pqQW1cIixcblx0XCJkb3dubG9hZEFwcFwiOiBcIkZvb3Rlcl9kb3dubG9hZEFwcF9fM1JDOC1cIixcblx0XCJjdXJ2ZVwiOiBcIkZvb3Rlcl9jdXJ2ZV9fMnZ1OGxcIixcblx0XCJhYnNvbHV0ZVwiOiBcIkZvb3Rlcl9hYnNvbHV0ZV9fY0htUVVcIixcblx0XCJjb250ZW50XCI6IFwiRm9vdGVyX2NvbnRlbnRfX1FILUIzXCIsXG5cdFwicGFkZGVkQ29udGVudFwiOiBcIkZvb3Rlcl9wYWRkZWRDb250ZW50X18xQjJ5M1wiLFxuXHRcImNvbnRlbnRJbm5lclwiOiBcIkZvb3Rlcl9jb250ZW50SW5uZXJfXzFPT0dBXCIsXG5cdFwidXNlQ29tcGFjdFwiOiBcIkZvb3Rlcl91c2VDb21wYWN0X18xWkVRTlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5Gb290ZXJMaW5rX2l0ZW1fXzItaV9UIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXgtd2lkdGg6IDIzMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuLkZvb3RlckxpbmtfaXRlbV9fMi1pX1QgLkZvb3RlckxpbmtfaW1hZ2VfXzFhcDRfIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIG1pbi13aWR0aDogMjBweDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xcbn1cXG4uRm9vdGVyTGlua19pdGVtX18yLWlfVCBhIHtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL0Zvb3RlckxpbmsubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0FBQ0o7QUFFRTtFQUNFLG9DQUFBO1VBQUEsNEJBQUE7QUFBSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgbWF4LXdpZHRoOiAyMzBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuXFxyXFxuICAuaW1hZ2Uge1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogMjBweDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDFweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBhIHtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiaXRlbVwiOiBcIkZvb3RlckxpbmtfaXRlbV9fMi1pX1RcIixcblx0XCJpbWFnZVwiOiBcIkZvb3RlckxpbmtfaW1hZ2VfXzFhcDRfXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLk1hc0Zvb3Rlcl9tYXNGb290ZXJfX1QzZXlVIHtcXG4gIG1hcmdpbi10b3A6IDQwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5NYXNGb290ZXJfbWFzRm9vdGVyX19UM2V5VSB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9NYXNGb290ZXIubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7QUFDRjtBQUNFO0VBSkY7SUFLSSxnQkFBQTtFQUVGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1hc0Zvb3RlciB7XFxyXFxuICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtYXNGb290ZXJcIjogXCJNYXNGb290ZXJfbWFzRm9vdGVyX19UM2V5VVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5TdG9yZUJ1dHRvbnNfc3RvcmVCdXR0b25zX18xSXduTCB7XFxuICBtYXgtd2lkdGg6IDMzMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXG4gIC5TdG9yZUJ1dHRvbnNfc3RvcmVCdXR0b25zX18xSXduTCB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIC5TdG9yZUJ1dHRvbnNfc3RvcmVCdXR0b25zX18xSXduTCB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxufVxcbi5TdG9yZUJ1dHRvbnNfc3RvcmVCdXR0b25zX18xSXduTC5TdG9yZUJ1dHRvbnNfc21hbGxfXzMxMC1LIHtcXG4gIG1heC13aWR0aDogMjcwcHg7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuU3RvcmVCdXR0b25zX3N0b3JlQnV0dG9uc19fMUl3bkwuU3RvcmVCdXR0b25zX3NtYWxsX18zMTAtSyB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWF4LXdpZHRoOiAyNTBweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIC5TdG9yZUJ1dHRvbnNfc3RvcmVCdXR0b25zX18xSXduTC5TdG9yZUJ1dHRvbnNfc21hbGxfXzMxMC1LIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcbiAgfVxcbn1cXG4uU3RvcmVCdXR0b25zX3N0b3JlQnV0dG9uc19fMUl3bkwuU3RvcmVCdXR0b25zX3NtYWxsX18zMTAtSyBhIHtcXG4gIG1heC13aWR0aDogMTEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5TdG9yZUJ1dHRvbnNfc3RvcmVCdXR0b25zX18xSXduTC5TdG9yZUJ1dHRvbnNfc21hbGxfXzMxMC1LIGE6bnRoLW9mLXR5cGUoMikge1xcbiAgbWF4LXdpZHRoOiAxMjVweDtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uU3RvcmVCdXR0b25zX3N0b3JlQnV0dG9uc19fMUl3bkwgYSB7XFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLlN0b3JlQnV0dG9uc19zdG9yZUJ1dHRvbnNfXzFJd25MIGEgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgLlN0b3JlQnV0dG9uc19zdG9yZUJ1dHRvbnNfXzFJd25MIGE6bnRoLW9mLXR5cGUoMSkge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgfVxcbn1cXG4uU3RvcmVCdXR0b25zX3N0b3JlQnV0dG9uc19fMUl3bkwgYTpudGgtb2YtdHlwZSgyKSB7XFxuICBtYXgtd2lkdGg6IDE2NXB4O1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgLlN0b3JlQnV0dG9uc19zdG9yZUJ1dHRvbnNfXzFJd25MIGE6bnRoLW9mLXR5cGUoMikge1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vU3RvcmVCdXR0b25zLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNFO0VBTEY7SUFNSSxZQUFBO0VBRUY7QUFDRjtBQURFO0VBUkY7SUFTSSxzQkFBQTtJQUNBLG1CQUFBO0VBSUY7QUFDRjtBQUZFO0VBQ0UsZ0JBQUE7QUFJSjtBQUZJO0VBSEY7SUFJSSxTQUFBO0lBQ0EsZ0JBQUE7RUFLSjtBQUNGO0FBSkk7RUFQRjtJQVFJLDhCQUFBO0VBT0o7QUFDRjtBQUxJO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBT047QUFMTTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7QUFPUjtBQUZFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUlKO0FBQUk7RUFDRSxXQUFBO0FBRU47QUFHTTtFQURGO0lBRUksbUJBQUE7RUFBTjtBQUNGO0FBR0k7RUFDRSxnQkFBQTtBQUROO0FBR007RUFIRjtJQUlJLGdCQUFBO0VBQU47QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc3RvcmVCdXR0b25zIHtcXHJcXG4gIG1heC13aWR0aDogMzMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYuc21hbGwge1xcclxcbiAgICBtYXgtd2lkdGg6IDI3MHB4O1xcclxcblxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICBtYXgtd2lkdGg6IDI1MHB4O1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyAhaW1wb3J0YW50O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGEge1xcclxcbiAgICAgIG1heC13aWR0aDogMTEwcHg7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG5cXHJcXG4gICAgICAmOm50aC1vZi10eXBlKDIpIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTI1cHg7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGEge1xcclxcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAvLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcclxcbiAgICAvLyAgIG1heC13aWR0aDogMTIwcHg7XFxyXFxuICAgIC8vIH1cXHJcXG4gICAgaW1nIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAvLyBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpudGgtb2YtdHlwZSgxKSB7XFxyXFxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXHJcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICY6bnRoLW9mLXR5cGUoMikge1xcclxcbiAgICAgIG1heC13aWR0aDogMTY1cHg7XFxyXFxuXFxyXFxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInN0b3JlQnV0dG9uc1wiOiBcIlN0b3JlQnV0dG9uc19zdG9yZUJ1dHRvbnNfXzFJd25MXCIsXG5cdFwic21hbGxcIjogXCJTdG9yZUJ1dHRvbnNfc21hbGxfXzMxMC1LXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQXBwQW5jaG9yOiBGQzxSZWFjdC5BbmNob3JIVE1MQXR0cmlidXRlczxIVE1MQW5jaG9yRWxlbWVudD4gJiB7IGlkOiBzdHJpbmcgfT4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIGhyZWYsXHJcbiAgLi4ucHJvcHNcclxufSkgPT4gKFxyXG4gIDxhIHsuLi5wcm9wc30gaHJlZj17aHJlZj8udG9TdHJpbmcoKX0gdGFyZ2V0PVwiX19ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2E+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBBbmNob3I7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0FwcEFuY2hvcic7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQ29udGFjdHMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NvbnRhY3RzLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy00IS4vQ29udGFjdHMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IHsgbWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVUeXBlIH0gZnJvbSAnY29uc3RhbnRzL3RoZW1lJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW1wb3J0IHsgY29udGFjdFBQU0FycmF5LCBjb250YWN0UFBUQXJyYXksIHNvY2lhbHNBcnJheSB9IGZyb20gJ2NvbnN0YW50cy9jb21wYW55JztcclxuaW1wb3J0IGd0bVRyYWNrZXIgZnJvbSAnY29uc3RhbnRzL3RyYWNraW5nL2J1dHRvbnMvZm9vdGVyJztcclxuXHJcbmltcG9ydCBBcHBBbmNob3IgZnJvbSAnY29tcG9uZW50cy9BcHBBbmNob3InO1xyXG5cclxuaW1wb3J0IEZvb3RlckxpbmsgZnJvbSAnLi4vRm9vdGVyTGluayc7XHJcbmltcG9ydCBGYWNlYm9va0xpa2UgZnJvbSAnLi4vRmFjZWJvb2tMaWtlJztcclxuaW1wb3J0IFN0b3JlQnV0dG9ucyBmcm9tICcuLi9TdG9yZUJ1dHRvbnMnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRhY3RzLm1vZHVsZS5zY3NzJztcclxuXHJcbmNvbnN0IENvbnRhY3RzOiBSZWFjdC5GQzx7IHRoZW1lU2V0dGluZzogVGhlbWVUeXBlIH0+ID0gKHsgdGhlbWVTZXR0aW5nIH0pID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RzfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdH0+XHJcbiAgICAgIHsodGhlbWVTZXR0aW5nLnRoZW1lID09PSAncHB0JyA/IGNvbnRhY3RQUFRBcnJheSA6IGNvbnRhY3RQUFNBcnJheSkubWFwKChjb250YWN0KSA9PiAoXHJcbiAgICAgICAgPEZvb3Rlckxpbmsga2V5PXtjb250YWN0LnRleHR9IGRhdGE9e2NvbnRhY3R9IHR5cGU9XCJjb250YWN0XCIgLz5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIHt0aGVtZVNldHRpbmcudGhlbWUgPT09ICdwcHQnICYmIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNvY2lhbHNDb250YWluZXJ9PlxyXG4gICAgICAgICAge3NvY2lhbHNBcnJheS5tYXAoKHNvY2lhbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e2Bzb2NpYWwtJHtpbmRleH1gfSBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxJdGVtfT5cclxuICAgICAgICAgICAgICA8QXBwQW5jaG9yXHJcbiAgICAgICAgICAgICAgICBpZD17Z3RtVHJhY2tlci5OQVZfRk9PVEVSX1NPQ0lBTC5pZC5yZXBsYWNlKCd4eHgnLCBzb2NpYWwua2V5KX1cclxuICAgICAgICAgICAgICAgIGhyZWY9e3NvY2lhbC5ocmVmfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSB7Li4uc29jaWFsLmltZ30gLz5cclxuICAgICAgICAgICAgICA8L0FwcEFuY2hvcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZhY2Vib29rTGlrZX0+XHJcbiAgICAgICAgICA8RmFjZWJvb2tMaWtlIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdG9yZUJ1dHRvbnN9PlxyXG4gICAgICAgICAgPGg1Pk1PQklMRSBBUFA8L2g1PlxyXG4gICAgICAgICAgPFN0b3JlQnV0dG9ucyBzbWFsbGVyQnV0dG9ucyAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICl9XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKENvbnRhY3RzKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ29udGFjdHMnO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NvbnRlbnQubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0NvbnRlbnQubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Db250ZW50Lm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lVHlwZSB9IGZyb20gJ2NvbnN0YW50cy90aGVtZSc7XHJcblxyXG5pbXBvcnQgeyBwcm9kdWN0cyB9IGZyb20gJ2NvbnN0YW50cy9wcm9kdWN0cyc7XHJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdjb25zdGFudHMvcHJvZHVjdHMnO1xyXG5cclxuaW1wb3J0IHsgbGlzdENvbnRlbnQgfSBmcm9tICcuLi9Gb290ZXIuY29udGVudCc7XHJcbmltcG9ydCBGb290ZXJMaW5rIGZyb20gJy4uL0Zvb3RlckxpbmsnO1xyXG5cclxuaW1wb3J0IHsgRm9vdGVyQ29udGVudEl0ZW0gfSBmcm9tICcuLi9Gb290ZXIuY29udGVudCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGVudC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBDb250ZW50OiBSZWFjdC5GQzx7IHRoZW1lU2V0dGluZzogVGhlbWVUeXBlIH0+ID0gKHsgdGhlbWVTZXR0aW5nIH0pID0+IChcclxuICA8PlxyXG4gICAge2xpc3RDb250ZW50W3RoZW1lU2V0dGluZy50aGVtZV0ubWFwKChsKSA9PiAoXHJcbiAgICAgIDxkaXYga2V5PXtsLnRpdGxlfSBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cclxuICAgICAgICB7KChsLnRpdGxlID09PSAnUFJPRFVDVFMnID8gcHJvZHVjdHMgOiBsLmRhdGEpIHx8IFtdKS5tYXAoXHJcbiAgICAgICAgICAoZDogUHJvZHVjdCB8IEZvb3RlckNvbnRlbnRJdGVtLCBpOiBudW1iZXIpID0+IChcclxuICAgICAgICAgICAgPEZvb3RlckxpbmtcclxuICAgICAgICAgICAgICBrZXk9e2Bmb290ZXItbGluay0ke2l9YH1cclxuICAgICAgICAgICAgICBkYXRhPXtkfVxyXG4gICAgICAgICAgICAgIHR5cGU9e2wudGl0bGUgPT09ICdQUk9EVUNUUycgPyAncHJvZHVjdCcgOiAnY29udGFjdCd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApKX1cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oQ29udGVudCk7XHJcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NvbnRlbnQnO1xyXG4iLCIvKipcclxuICogRmFjZWJvb2tMaWtlLmpzXHJcbiAqIENvbXBvbmVudCBmb3IgRmFjZWJvb2sgTGlrZSBCdXR0b25cclxuICpcclxuICogQHZlcnNpb24gMC4wLjFcclxuICogQGF1dGhvciBbTmljb2xldHRlIENoYW5dKG5pY29sZXR0ZUBwb2xpY3lwYWwuY29tKVxyXG4gKi9cclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgc29jaWFscyB9IGZyb20gJ2NvbnN0YW50cy9jb21wYW55JztcclxuXHJcbmNvbnN0IEZhY2Vib29rTGlrZSA9ICgpID0+IHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEZhY2Vib29rIEFQSVxyXG4gICAgICBpZiAod2luZG93LkZCKSB7XHJcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIEZhY2Vib29rIEFQSVxyXG4gICAgICAgIHdpbmRvdy5GQi5YRkJNTC5wYXJzZSgpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGRhdGEtaHJlZj17c29jaWFscy5mYWNlYm9vay5ocmVmfVxyXG4gICAgICBkYXRhLWxheW91dD1cImJ1dHRvbl9jb3VudFwiXHJcbiAgICAgIGRhdGEtYWN0aW9uPVwibGlrZVwiXHJcbiAgICAgIGRhdGEtd2lkdGg9XCI0MDBcIlxyXG4gICAgICBkYXRhLXNpemU9XCJsYXJnZVwiXHJcbiAgICAgIGRhdGEtc2hvdy1mYWNlcz1cImZhbHNlXCJcclxuICAgICAgZGF0YS1zaGFyZT1cImZhbHNlXCJcclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRmFjZWJvb2tMaWtlKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vRmFjZWJvb2tMaWtlJztcclxuIiwiaW1wb3J0IHJvdXRlcyBmcm9tICdjb25zdGFudHMvcm91dGVzJztcclxuaW1wb3J0IHsgRU5USVRZX1RZUEUgfSBmcm9tICdjb25zdGFudHMvY29tbW9uJztcclxuaW1wb3J0IHsgUFBUX0VOVElUWSwgUFBGQV9FTlRJVFkgfSBmcm9tICdjb25zdGFudHMvY29tcGFueSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZvb3RlckNvbnRlbnRJdGVtIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHR5cGU/OiBib29sZWFuO1xyXG59XHJcblxyXG50eXBlIEZvb3RlckNvbnRlbnQgPSBSZWNvcmQ8XHJcbiAgRU5USVRZX1RZUEUsXHJcbiAge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGRhdGE/OiBGb290ZXJDb250ZW50SXRlbVtdO1xyXG4gIH1bXVxyXG4+O1xyXG5cclxuY29uc3QgbW9yZVRhYkxpc3QgPSBbeyB0ZXh0OiByb3V0ZXMuY2xhaW1zLmRlc2MsIGhyZWY6IHJvdXRlcy5jbGFpbXMudXJsIH1dO1xyXG5cclxuY29uc3QgbW9yZVRhYkxpc3RQUFQgPSBbXHJcbiAgeyB0ZXh0OiAnT3VyIE1pc3Npb24nLCBocmVmOiByb3V0ZXMuYWJvdXQudXJsIH0sXHJcbiAgeyB0ZXh0OiByb3V0ZXMubWVtYmVyX2JlbmVmaXRzLmRlc2MsIGhyZWY6IHJvdXRlcy5tZW1iZXJfYmVuZWZpdHMudXJsIH0sXHJcbiAgeyB0ZXh0OiByb3V0ZXMucmVmZXJyYWwuZGVzYywgaHJlZjogcm91dGVzLnJlZmVycmFsLnVybCB9LFxyXG4gIHsgdGV4dDogcm91dGVzLmdpdmViYWNrLmRlc2MsIGhyZWY6IHJvdXRlcy5naXZlYmFjay51cmwgfSxcclxuICB7IHRleHQ6IHJvdXRlcy5zZXJ2aWNlX3N0YW5kYXJkLmRlc2MsIGhyZWY6IHJvdXRlcy5zZXJ2aWNlX3N0YW5kYXJkLnVybCB9LFxyXG4gIHsgdGV4dDogcm91dGVzLmNhcmVlci5kZXNjLCBocmVmOiByb3V0ZXMuY2FyZWVyLnVybCB9LFxyXG4gIHsgdGV4dDogcm91dGVzLnBhcnRuZXJzaGlwLmRlc2MsIGhyZWY6IHJvdXRlcy5wYXJ0bmVyc2hpcC51cmwgfSxcclxuICAvLyB7IHRleHQ6IHJvdXRlcy5mYV9kYXNoYm9hcmQuZGVzYywgaHJlZjogcm91dGVzLmZhX2Rhc2hib2FyZC51cmwgfSxcclxuXTtcclxuXHJcbmNvbnN0IHJlc291cmNlc0xpc3QgPSBbXHJcbiAgeyB0ZXh0OiAnQmxvZy8gUmVzb3VyY2VzJywgaHJlZjogcm91dGVzLmJsb2cudXJsLCB0eXBlOiAnZXh0ZXJuYWwnIH0sXHJcbiAgeyB0ZXh0OiByb3V0ZXMuYm9vay5kZXNjLCBocmVmOiByb3V0ZXMuYm9vay51cmwgfSxcclxuICB7IHRleHQ6IHJvdXRlcy5wcmVzcy5kZXNjLCBocmVmOiByb3V0ZXMucHJlc3MudXJsIH0sXHJcbl07XHJcblxyXG5jb25zdCBmb290ZXJMaXN0UFBUID0gW1xyXG4gIHsgdGV4dDogcm91dGVzLnRvc1BQVC5kZXNjLCBocmVmOiByb3V0ZXMudG9zUFBULnVybCB9LFxyXG4gIHsgdGV4dDogcm91dGVzLnByaXZhY3lwb2xpY3lQUFQuZGVzYywgaHJlZjogcm91dGVzLnByaXZhY3lwb2xpY3lQUFQudXJsIH0sXHJcbiAgeyB0ZXh0OiByb3V0ZXMuc2VjdXJpdHkuZGVzYywgaHJlZjogcm91dGVzLnNlY3VyaXR5LnVybCB9LFxyXG4gIHsgdGV4dDogcm91dGVzLmRpc2NsYWltZXJQUFQuZGVzYywgaHJlZjogcm91dGVzLmRpc2NsYWltZXJQUFQudXJsIH0sXHJcbl07XHJcblxyXG5jb25zdCBmb290ZXJMaXN0UFBGQSA9IFtcclxuICB7IHRleHQ6IHJvdXRlcy50b3NQUEZBLmRlc2MsIGhyZWY6IHJvdXRlcy50b3NQUEZBLnVybCB9LFxyXG4gIHsgdGV4dDogcm91dGVzLnByaXZhY3lwb2xpY3lQUEZBLmRlc2MsIGhyZWY6IHJvdXRlcy5wcml2YWN5cG9saWN5UFBGQS51cmwgfSxcclxuICB7IHRleHQ6IHJvdXRlcy5mYWlyRGVhbGluZ1N0YXRlbWVudFBQRkEuZGVzYywgaHJlZjogcm91dGVzLmZhaXJEZWFsaW5nU3RhdGVtZW50UFBGQS51cmwgfSxcclxuICB7IHRleHQ6IHJvdXRlcy5zZWN1cml0eS5kZXNjLCBocmVmOiByb3V0ZXMuc2VjdXJpdHkudXJsIH0sXHJcbiAgeyB0ZXh0OiByb3V0ZXMuZGlzY2xhaW1lclBQRkEuZGVzYywgaHJlZjogcm91dGVzLmRpc2NsYWltZXJQUEZBLnVybCB9LFxyXG5dO1xyXG5cclxuY29uc3QgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuXHJcbmNvbnN0IGRvd25sb2FkQXBwRGF0YSA9IHtcclxuICB0aXRsZTogJ0Rvd25sb2FkIG91ciBhcHAgJiBlYXJuICQxMCBQb2xpY3lQYWwgQ3JlZGl0cyEnLFxyXG4gIGRlc2M6IGBXaXRoIFBvbGljeVBhbCwgeW91ciBhbGwtaW4tb25lIGluc3VyYW5jZSBwbGF0Zm9ybSwgZW1iYXJrIG9uIHlvdXIgam91cm5leSB0byBtYW5hZ2UgeW91ciBpbnN1cmFuY2UgZGlnaXRhbGx5LCB3aGVyZXZlciB5b3UgYXJlLlxyXG5cclxuU3RhcnQgeW91ciBqb3VybmV5IHdpdGggJDEwIFBvbGljeVBhbCBDcmVkaXRzIGJ5IHNpZ25pbmcgdXAgd2l0aCBvdXIgcmVmZXJyYWwgY29kZSA8c3Ryb25nPlBPTElDWVBBTDEwPC9zdHJvbmc+LmAsXHJcbn07XHJcblxyXG5jb25zdCBsaXN0Q29udGVudDogRm9vdGVyQ29udGVudCA9IHtcclxuICBwcHQ6IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdDT01QQU5ZJyxcclxuICAgICAgZGF0YTogbW9yZVRhYkxpc3RQUFQsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1JFU09VUkNFUycsXHJcbiAgICAgIGRhdGE6IHJlc291cmNlc0xpc3QsXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgcHBmYTogW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1BST0RVQ1RTJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnU1VQUE9SVCcsXHJcbiAgICAgIGRhdGE6IG1vcmVUYWJMaXN0LFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3QgbWFzRm9vdGVyOiBSZWNvcmQ8RU5USVRZX1RZUEUsIHN0cmluZz4gPSB7XHJcbiAgcHB0OiBgJHtmb290ZXJMaXN0UFBUXHJcbiAgICAubWFwKChmKSA9PiBgPGEgaHJlZj1cIiR7Zi5ocmVmfVwiIHRhcmdldD1cIl9fYmxhbmtcIj4ke2YudGV4dH08L2E+YClcclxuICAgIC5qb2luKCcgfCAnKX1cXG7CqSAke3llYXJ9ICR7UFBUX0VOVElUWX0gQWxsIFJpZ2h0cyBSZXNlcnZlZC5gLFxyXG4gIHBwZmE6IGAke1BQRkFfRU5USVRZfSBpcyBhbiBFeGVtcHQgRmluYW5jaWFsIEFkdmlzZXIgYW5kIFJlZ2lzdGVyZWQgSW5zdXJhbmNlIEJyb2tlciBsaWNlbnNlZCBieSBNQVMuIFZpZXcgb3VyIDxhIGhyZWY9XCJodHRwczovL2VzZXJ2aWNlcy5tYXMuZ292LnNnL2ZpZC9pbnN0aXR1dGlvbi9kZXRhaWwvMjAxMjI5LVBPTElDWVBBTC1TSU5HQVBPUkUtUFRFLUxURFwiIHRhcmdldD1cIl9fYmxhbmtcIj5NQVMgTGljZW5zZTwvYT4gfCAke1tcclxuICAgIC4uLmZvb3Rlckxpc3RQUEZBLFxyXG4gICAgeyBocmVmOiByb3V0ZXMuY2xhaW1zLnVybCwgdGV4dDogJ0NsYWltcycgfSxcclxuICBdXHJcbiAgICAubWFwKChmKSA9PiBgPGEgaHJlZj1cIiR7Zi5ocmVmfVwiIHRhcmdldD1cIl9fYmxhbmtcIj4ke2YudGV4dH08L2E+YClcclxuICAgIC5qb2luKCcgfCAnKX1cXG7CqSAke3llYXJ9ICR7UFBGQV9FTlRJVFl9IEFsbCBSaWdodHMgUmVzZXJ2ZWQuYCxcclxufTtcclxuXHJcbmNvbnN0IGNvbXBhY3REYXRhID0ge1xyXG4gIHRpdGxlOiAnQ3VzdG9tZXIgc2VydmljZSBob3VycycsXHJcbiAgY29udGVudDogWycxMGFtIC0gN3BtJywgJ01vbmRheXMgdG8gRnJpZGF5cycsICcoZXhjbHVkaW5nIHB1YmxpYyBob2xpZGF5cyknXSxcclxufTtcclxuXHJcbmV4cG9ydCB7IGRvd25sb2FkQXBwRGF0YSwgbGlzdENvbnRlbnQsIG1hc0Zvb3RlciwgY29tcGFjdERhdGEgfTtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Gb290ZXIubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0Zvb3Rlci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0Zvb3Rlci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCB7IGdldEltYWdlIH0gZnJvbSAnbGliL2ltYWdlcyc7XHJcblxyXG5pbXBvcnQgTWFzRm9vdGVyIGZyb20gJy4vTWFzRm9vdGVyJztcclxuaW1wb3J0IENvbnRhY3RzIGZyb20gJy4vQ29udGFjdHMnO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnO1xyXG5cclxuaW1wb3J0IHVzZVRoZW1lIGZyb20gJ2hvb2tzL3VzZVRoZW1lJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIubW9kdWxlLnNjc3MnO1xyXG5cclxuY29uc3QgQ29tcGFjdCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuL0NvbXBhY3QnKSk7XHJcbmNvbnN0IERvd25sb2FkQXBwID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vRG93bmxvYWRBcHAnKSk7XHJcblxyXG5jb25zdCBGb290ZXI6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgdGhlbWVTZXR0aW5nIH0gPSB1c2VUaGVtZSgpO1xyXG5cclxuICBjb25zdCBmb290ZXJCRyA9IGdldEltYWdlKCduYXZpZ2F0aW9uLmZvb3Rlcl9iZycpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMuZm9vdGVyLCBzdHlsZXNbdGhlbWVTZXR0aW5nLnRoZW1lXV0uam9pbignICcpfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJJbm5lcn0+XHJcbiAgICAgICAge3RoZW1lU2V0dGluZy5mb290ZXJTZXR0aW5ncy5oaWRlRG93bmxvYWRBcHAgJiYgIXRoZW1lU2V0dGluZy5mb290ZXJTZXR0aW5ncy5oaWRlQ3VydmUgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jdXJ2ZX0+XHJcbiAgICAgICAgICAgIDxJbWFnZSB7Li4uZm9vdGVyQkd9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIHshdGhlbWVTZXR0aW5nLmZvb3RlclNldHRpbmdzLmhpZGVEb3dubG9hZEFwcCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRvd25sb2FkQXBwfT5cclxuICAgICAgICAgICAgPERvd25sb2FkQXBwIC8+XHJcbiAgICAgICAgICAgIHshdGhlbWVTZXR0aW5nLmZvb3RlclNldHRpbmdzLmhpZGVDdXJ2ZSAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tzdHlsZXMuY3VydmUsIHN0eWxlcy5hYnNvbHV0ZV0uam9pbignICcpfT5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSB7Li4uZm9vdGVyQkd9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17W1xyXG4gICAgICAgICAgICBzdHlsZXMuY29udGVudCxcclxuICAgICAgICAgICAgIXRoZW1lU2V0dGluZy5mb290ZXJTZXR0aW5ncy5oaWRlRG93bmxvYWRBcHAgPyBzdHlsZXMucGFkZGVkQ29udGVudCA6ICcnLFxyXG4gICAgICAgICAgXS5qb2luKCcgJyl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e1tcclxuICAgICAgICAgICAgICBzdHlsZXMuY29udGVudElubmVyLFxyXG4gICAgICAgICAgICAgIHRoZW1lU2V0dGluZy5mb290ZXJTZXR0aW5ncy51c2VDb21wYWN0ID8gc3R5bGVzLnVzZUNvbXBhY3QgOiAnJyxcclxuICAgICAgICAgICAgXS5qb2luKCcgJyl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHt0aGVtZVNldHRpbmcuZm9vdGVyU2V0dGluZ3MudXNlQ29tcGFjdCA/IChcclxuICAgICAgICAgICAgICA8Q29tcGFjdCAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8Q29udGFjdHMgdGhlbWVTZXR0aW5nPXt0aGVtZVNldHRpbmd9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudCB0aGVtZVNldHRpbmc9e3RoZW1lU2V0dGluZ30gLz5cclxuICAgICAgICAgICAgICAgIDxNYXNGb290ZXIgdGhlbWVTZXR0aW5nPXt0aGVtZVNldHRpbmd9IC8+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhGb290ZXIpO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0Zvb3RlckxpbmsubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL0Zvb3RlckxpbmsubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9Gb290ZXJMaW5rLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IG1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmltcG9ydCB7IENvbnRhY3QgfSBmcm9tICdjb25zdGFudHMvY29tcGFueSc7XHJcbmltcG9ydCBndG1UcmFja2VyIGZyb20gJ2NvbnN0YW50cy90cmFja2luZy9idXR0b25zL2Zvb3Rlcic7XHJcblxyXG5pbXBvcnQgQXBwQW5jaG9yIGZyb20gJ2NvbXBvbmVudHMvQXBwQW5jaG9yJztcclxuaW1wb3J0IEFwcExpbmsgZnJvbSAnY29tcG9uZW50cy9BcHBMaW5rJztcclxuXHJcbmltcG9ydCB7IEZvb3RlckNvbnRlbnRJdGVtIH0gZnJvbSAnLi4vRm9vdGVyLmNvbnRlbnQnO1xyXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnY29uc3RhbnRzL3Byb2R1Y3RzJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXJMaW5rLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBGb290ZXJMaW5rIHtcclxuICBkYXRhOiBGb290ZXJDb250ZW50SXRlbSB8IENvbnRhY3QgfCBQcm9kdWN0O1xyXG4gIHR5cGU6ICdmb290ZXInIHwgJ2NvbnRhY3QnIHwgJ3Byb2R1Y3QnO1xyXG59XHJcblxyXG5jb25zdCBGb290ZXJMaW5rOiBSZWFjdC5GQzxGb290ZXJMaW5rPiA9ICh7IGRhdGEsIHR5cGUgfSkgPT4ge1xyXG4gIGNvbnN0IG5hbWUgPSB0eXBlID09PSAncHJvZHVjdCcgPyAoZGF0YSBhcyBQcm9kdWN0KS5mdWxsX25hbWUgOiAoZGF0YSBhcyBDb250YWN0KS50ZXh0O1xyXG5cclxuICBjb25zdCBpZCA9IChcclxuICAgIHR5cGUgPT09ICdjb250YWN0JyA/IGd0bVRyYWNrZXIuTkFWX0ZPT1RFUl9DT05UQUNUIDogZ3RtVHJhY2tlci5OQVZfRk9PVEVSX0xJTktcclxuICApLmlkLnJlcGxhY2UoJ3h4eCcsIChuYW1lIHx8ICcnKS5yZXBsYWNlKC8gL2csICdfJykudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICB7L15odHRwcz86XFwvXFwvLy50ZXN0KGRhdGEuaHJlZikgfHwgdHlwZSA9PT0gJ2NvbnRhY3QnID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7KGRhdGEgYXMgQ29udGFjdCkuaW1nICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHsuLi4oZGF0YSBhcyBDb250YWN0KS5pbWd9IGNsYXNzTmFtZT1cImljb25cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8QXBwQW5jaG9yIGlkPXtpZH0gaHJlZj17ZGF0YS5ocmVmfT5cclxuICAgICAgICAgICAgPHNwYW4+e25hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgPC9BcHBBbmNob3I+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEFwcExpbmsgaWQ9e2lkfSBocmVmPXtkYXRhLmhyZWZ9PlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHtuYW1lID09PSAnZUVBU1kgc2F2ZSBWJyA/IChcclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIGVFQVNZIDxpPnNhdmU8L2k+IFZcclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvQXBwTGluaz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKEZvb3RlckxpbmspO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Gb290ZXJMaW5rJztcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9NYXNGb290ZXIubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL01hc0Zvb3Rlci5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL01hc0Zvb3Rlci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBtZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaGVtZVR5cGUgfSBmcm9tICdjb25zdGFudHMvdGhlbWUnO1xyXG5cclxuaW1wb3J0IHsgbWFzRm9vdGVyIH0gZnJvbSAnLi4vRm9vdGVyLmNvbnRlbnQnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01hc0Zvb3Rlci5tb2R1bGUuc2Nzcyc7XHJcblxyXG5jb25zdCBNYXNGb290ZXI6IFJlYWN0LkZDPHsgdGhlbWVTZXR0aW5nOiBUaGVtZVR5cGUgfT4gPSAoeyB0aGVtZVNldHRpbmcgfSkgPT4gKFxyXG4gIDxzcGFuXHJcbiAgICBjbGFzc05hbWU9e3N0eWxlcy5tYXNGb290ZXJ9XHJcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1hc0Zvb3Rlclt0aGVtZVNldHRpbmcudGhlbWVdIH19XHJcbiAgLz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbW8oTWFzRm9vdGVyKTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vTWFzRm9vdGVyJztcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0zLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9TdG9yZUJ1dHRvbnMubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1N0b3JlQnV0dG9ucy5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL1N0b3JlQnV0dG9ucy5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJztcclxuaW1wb3J0IGd0bVRyYWNrZXIgZnJvbSAnY29uc3RhbnRzL3RyYWNraW5nL2J1dHRvbnMvZm9vdGVyJztcclxuXHJcbmltcG9ydCB7IGFwcFN0b3JlcyB9IGZyb20gJ2NvbnN0YW50cy9jb21wYW55JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TdG9yZUJ1dHRvbnMubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IHR5cGUgU3RvcmVCdXR0b25zVHlwZSA9IHtcclxuICBzbWFsbGVyQnV0dG9ucz86IGJvb2xlYW47XHJcbn07XHJcblxyXG5jb25zdCBTdG9yZUJ1dHRvbnM6IFJlYWN0LkZDPFN0b3JlQnV0dG9uc1R5cGU+ID0gKHsgc21hbGxlckJ1dHRvbnMgfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtbc3R5bGVzLnN0b3JlQnV0dG9ucywgc21hbGxlckJ1dHRvbnMgPyBzdHlsZXMuc21hbGwgOiAnJ10uam9pbignICcpfT5cclxuICAgIDxCdXR0b25CYXNlIGlkPXtndG1UcmFja2VyLk5BVl9GT09URVJfQVBQU1RPUkUuaWR9IGhyZWY9e2FwcFN0b3Jlcy5hcHBsZS5ocmVmfSB0YXJnZXQ9XCJfX2JsYW5rXCI+XHJcbiAgICAgIDxJbWFnZSB7Li4uYXBwU3RvcmVzLmFwcGxlLmltZ30gLz5cclxuICAgIDwvQnV0dG9uQmFzZT5cclxuICAgIDxCdXR0b25CYXNlXHJcbiAgICAgIGlkPXtndG1UcmFja2VyLk5BVl9GT09URVJfUExBWVNUT1JFLmlkfVxyXG4gICAgICBocmVmPXthcHBTdG9yZXMuYXBwbGUuaHJlZn1cclxuICAgICAgdGFyZ2V0PVwiX19ibGFua1wiXHJcbiAgICA+XHJcbiAgICAgIDxJbWFnZSB7Li4uYXBwU3RvcmVzLmFuZHJvaWQuaW1nfSAvPlxyXG4gICAgPC9CdXR0b25CYXNlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmVCdXR0b25zO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TdG9yZUJ1dHRvbnMnO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Gb290ZXInO1xyXG4iLCJpbXBvcnQgeyBJbWFnZVByb3BzIH0gZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IGdldEltYWdlIH0gZnJvbSAnbGliL2ltYWdlcyc7XHJcblxyXG5leHBvcnQgY29uc3QgUFBfRU5USVRZID0gJ1BvbGljeVBhbCBQdGUuIEx0ZC4nO1xyXG5leHBvcnQgY29uc3QgUFBUX0VOVElUWSA9ICdQb2xpY3lQYWwgVGVjaCBQdGUuIEx0ZC4nO1xyXG5leHBvcnQgY29uc3QgUFBGQV9FTlRJVFkgPSAnQmFveGlhbmJhb2JhbyBQdGUuIEx0ZC4nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb250YWN0IHtcclxuICBpbWc6IEltYWdlUHJvcHM7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIHRleHQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ29udGFjdExpc3QgPSBSZWNvcmQ8J2VtYWlsJyB8ICd0ZWwnIHwgJ3doYXRzYXBwJyB8ICdsb2NhdGlvbicsIENvbnRhY3Q+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTb2NpYWwge1xyXG4gIGltZzogSW1hZ2VQcm9wcztcclxuICBocmVmOiBzdHJpbmc7XHJcbiAga2V5OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFNvY2lhbExpc3QgPSBSZWNvcmQ8J3lvdXR1YmUnIHwgJ2ZhY2Vib29rJyB8ICdpbnN0YWdyYW0nIHwgJ2xpbmtlZGluJywgU29jaWFsPjtcclxuXHJcbmV4cG9ydCBjb25zdCBjb250YWN0UFBTOiBDb250YWN0TGlzdCA9IHtcclxuICBlbWFpbDoge1xyXG4gICAgaW1nOiBnZXRJbWFnZSgnaWNvbnMuZW1haWwnKSxcclxuICAgIGhyZWY6ICdoZWxsb0BwcGZhLnBvbGljeXBhbC5jb20nLFxyXG4gICAgdGV4dDogJ2hlbGxvQHBwZmEucG9saWN5cGFsLmNvbScsXHJcbiAgfSxcclxuICB0ZWw6IHtcclxuICAgIGltZzogZ2V0SW1hZ2UoJ2ljb25zLnBob25lJyksXHJcbiAgICBocmVmOiAndGVsOis2NTMxNjM5MTg0JyxcclxuICAgIHRleHQ6ICcrNjUgMzE2MyA5MTg0JyxcclxuICB9LFxyXG4gIHdoYXRzYXBwOiB7XHJcbiAgICBpbWc6IGdldEltYWdlKCdpY29ucy5waG9uZScpLFxyXG4gICAgaHJlZjogJ2h0dHBzOi8vd2EubWUvNjU4NzUwMDY4OCcsXHJcbiAgICB0ZXh0OiAnKzY1IDg3NTAgMDY4OCcsXHJcbiAgfSxcclxuICBsb2NhdGlvbjoge1xyXG4gICAgaW1nOiBnZXRJbWFnZSgnaWNvbnMubG9jYXRpb24nKSxcclxuICAgIGhyZWY6ICdodHRwczovL2dvby5nbC9tYXBzL1BNb1VXVHo2b25Xc05EOG85JyxcclxuICAgIHRleHQ6ICdKdXN0Q28sIE9DQkMgQ2VudHJlIEVhc3RcXG42MyBDaHVsaWEgU3RyZWV0LCAjMTUtMDFcXG5TaW5nYXBvcmUgMDQ5NTE0JyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhY3RQUFQ6IENvbnRhY3RMaXN0ID0ge1xyXG4gIC4uLmNvbnRhY3RQUFMsXHJcbiAgZW1haWw6IHtcclxuICAgIC4uLmNvbnRhY3RQUFMuZW1haWwsXHJcbiAgICBocmVmOiAnaGVsbG9AcG9saWN5cGFsLmNvbScsXHJcbiAgICB0ZXh0OiAnaGVsbG9AcG9saWN5cGFsLmNvbScsXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzb2NpYWxzOiBTb2NpYWxMaXN0ID0ge1xyXG4gIHlvdXR1YmU6IHtcclxuICAgIGltZzogZ2V0SW1hZ2UoJ3NvY2lhbHMueW91dHViZScpLFxyXG4gICAgaHJlZjogJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2NoYW5uZWwvVUNBM2l1bVRYd0haeDlWakFnRGJmQnJRJyxcclxuICAgIGtleTogJ3lvdXR1YmUnLFxyXG4gIH0sXHJcbiAgZmFjZWJvb2s6IHtcclxuICAgIGltZzogZ2V0SW1hZ2UoJ3NvY2lhbHMuZmFjZWJvb2snKSxcclxuICAgIGhyZWY6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vaGlwb2xpY3lwYWwnLFxyXG4gICAga2V5OiAnZmFjZWJvb2snLFxyXG4gIH0sXHJcbiAgaW5zdGFncmFtOiB7XHJcbiAgICBpbWc6IGdldEltYWdlKCdzb2NpYWxzLmluc3RhZ3JhbScpLFxyXG4gICAgaHJlZjogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcG9saWN5cGFsLycsXHJcbiAgICBrZXk6ICdpbnN0YWdyYW0nLFxyXG4gIH0sXHJcbiAgbGlua2VkaW46IHtcclxuICAgIGltZzogZ2V0SW1hZ2UoJ3NvY2lhbHMubGlua2VkaW4nKSxcclxuICAgIGhyZWY6ICdodHRwczovL3d3dy5saW5rZWRpbi5jb20vY29tcGFueS9wb2xpY3lwYWwvJyxcclxuICAgIGtleTogJ2xpbmtlZEluJyxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhY3RQUFNBcnJheTogQ29udGFjdFtdID0gW1xyXG4gIGNvbnRhY3RQUFMuZW1haWwsXHJcbiAgY29udGFjdFBQUy50ZWwsXHJcbiAgY29udGFjdFBQUy53aGF0c2FwcCxcclxuICBjb250YWN0UFBTLmxvY2F0aW9uLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnRhY3RQUFRBcnJheTogQ29udGFjdFtdID0gW2NvbnRhY3RQUFQuZW1haWwsIC4uLmNvbnRhY3RQUFNBcnJheS5zbGljZSgyKV07XHJcblxyXG5leHBvcnQgY29uc3Qgc29jaWFsc0FycmF5OiBTb2NpYWxbXSA9IFtcclxuICBzb2NpYWxzLnlvdXR1YmUsXHJcbiAgc29jaWFscy5mYWNlYm9vayxcclxuICBzb2NpYWxzLmluc3RhZ3JhbSxcclxuICBzb2NpYWxzLmxpbmtlZGluLFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcFN0b3JlcyA9IHtcclxuICBhcHBsZToge1xyXG4gICAgaHJlZjogJ2h0dHBzOi8vaXR1bmVzLmFwcGxlLmNvbS9zZy9hcHAvcG9saWN5cGFsL2lkMTExODUxMTk3Mj9tdD04JyxcclxuICAgIGltZzogZ2V0SW1hZ2UoJ2FwcC5hcHBfc3RvcmVfYmFkZ2UnKSxcclxuICB9LFxyXG4gIGFuZHJvaWQ6IHtcclxuICAgIGhyZWY6ICdodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLmlkdnNnam8zMXc5bTA1ZjZyYWViMyZhbXA7aGw9ZW4nLFxyXG4gICAgaW1nOiBnZXRJbWFnZSgnYXBwLnBsYXlfc3RvcmVfYmFkZ2UnKSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgeyBJbWFnZVByb3BzIH0gZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnY29uc3RhbnRzL3JvdXRlcyc7XHJcbmltcG9ydCB7IGdldEltYWdlIH0gZnJvbSAnbGliL2ltYWdlcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb2R1Y3Qge1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBmdWxsX25hbWU6IHN0cmluZztcclxuICBzbHVnOiBzdHJpbmc7XHJcbiAgc3JjOiBJbWFnZVByb3BzO1xyXG4gIGhyZWY6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RzOiBQcm9kdWN0W10gPSBbXHJcbiAge1xyXG4gICAgbmFtZTogJ1Rlcm0gTGlmZScsXHJcbiAgICBmdWxsX25hbWU6ICdUZXJtIExpZmUgSW5zdXJhbmNlJyxcclxuICAgIHNsdWc6ICd0ZXJtX2xpZmUnLFxyXG4gICAgc3JjOiBnZXRJbWFnZSgncHJvZHVjdC5zaW1wbGVfdGVybV9saWZlJyksXHJcbiAgICBocmVmOiByb3V0ZXMudGVybV9saWZlLnVybCxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdXaG9sZSBMaWZlJyxcclxuICAgIGZ1bGxfbmFtZTogJ1dob2xlIExpZmUgSW5zdXJhbmNlJyxcclxuICAgIHNsdWc6ICd3aG9sZV9saWZlJyxcclxuICAgIHNyYzogZ2V0SW1hZ2UoJ3Byb2R1Y3Quc2ltcGxlX3dob2xlX2xpZmUnKSxcclxuICAgIGhyZWY6IHJvdXRlcy53aG9sZV9saWZlLnVybCxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdFbmRvd21lbnQnLFxyXG4gICAgZnVsbF9uYW1lOiAnRW5kb3dtZW50L1NhdmluZ3MgSW5zdXJhbmNlJyxcclxuICAgIHNsdWc6ICdlbmRvd21lbnQnLFxyXG4gICAgc3JjOiBnZXRJbWFnZSgncHJvZHVjdC5zaW1wbGVfZW5kb3dtZW50JyksXHJcbiAgICBocmVmOiByb3V0ZXMuZW5kb3dtZW50LnVybCxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdJbnRlZ3JhdGVkIFNoaWVsZCBQbGFucycsXHJcbiAgICBmdWxsX25hbWU6ICdJbnRlZ3JhdGVkIFNoaWVsZCBQbGFucycsXHJcbiAgICBzbHVnOiAnaGVhbHRoJyxcclxuICAgIHNyYzogZ2V0SW1hZ2UoJ3Byb2R1Y3Quc2ltcGxlX2hlYWx0aCcpLFxyXG4gICAgaHJlZjogcm91dGVzLmhlYWx0aC51cmwsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnQW5udWl0eSBQbGFucycsXHJcbiAgICBmdWxsX25hbWU6ICdBbm51aXR5IFBsYW5zJyxcclxuICAgIHNsdWc6ICdyZXRpcmVtZW50JyxcclxuICAgIHNyYzogZ2V0SW1hZ2UoJ3Byb2R1Y3Quc2ltcGxlX3JldGlyZW1lbnQnKSxcclxuICAgIGhyZWY6IHJvdXRlcy5yZXRpcmVtZW50LnVybCxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdDcml0aWNhbCBJbGxuZXNzJyxcclxuICAgIGZ1bGxfbmFtZTogJ0NyaXRpY2FsIElsbG5lc3MgSW5zdXJhbmNlJyxcclxuICAgIHNsdWc6ICdjcml0aWNhbF9pbGxuZXNzJyxcclxuICAgIHNyYzogZ2V0SW1hZ2UoJ3Byb2R1Y3Quc2ltcGxlX2NyaXRpY2FsX2lsbG5lc3MnKSxcclxuICAgIGhyZWY6IHJvdXRlcy5jcml0aWNhbF9pbGxuZXNzLnVybCxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6ICdQZXQnLFxyXG4gICAgZnVsbF9uYW1lOiAnUGV0IEluc3VyYW5jZScsXHJcbiAgICBzbHVnOiAncGV0JyxcclxuICAgIHNyYzogZ2V0SW1hZ2UoJ3Byb2R1Y3Quc2ltcGxlX3BldCcpLFxyXG4gICAgaHJlZjogcm91dGVzLnBldC51cmwsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiAnVHJhdmVsJyxcclxuICAgIGZ1bGxfbmFtZTogJ1RyYXZlbCBJbnN1cmFuY2UnLFxyXG4gICAgc2x1ZzogJ3RyYXZlbCcsXHJcbiAgICBzcmM6IGdldEltYWdlKCdwcm9kdWN0LnRyYXZlbCcpLFxyXG4gICAgaHJlZjogcm91dGVzLnRyYXZlbC51cmwsXHJcbiAgfSxcclxuXTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxhbmRpbmc6IHsgdXJsOiAnLycsIGRlc2M6ICdMYW5kaW5nJyB9LFxyXG4gIGJvb2s6IHsgdXJsOiAnL2Jvb2svYmFsbHMtaW5jJywgZGVzYzogJ0JhbGxzIEluYy4nIH0sXHJcbiAgY2F0ZWdvcmllczogeyB1cmw6ICcvcHBmYS9idXktaW5zdXJhbmNlJywgZGVzYzogJ0NhdGVnb3JpZXMnIH0sXHJcbiAgY2F0ZWdvcmllc19vbGQ6IHsgdXJsOiAnL2J1eS1pbnN1cmFuY2UnLCBkZXNjOiAnQ2F0ZWdvcmllcycgfSxcclxuICBjYXJlZXI6IHsgdXJsOiAnL2NhcmVlcicsIGRlc2M6ICdDYXJlZXJzJyB9LFxyXG4gIGZhcTogeyB1cmw6ICcvZmFxJywgZGVzYzogJ0ZBUScgfSxcclxuICBmYXFfemVuZGVzazogeyB1cmw6ICdodHRwczovL2ZhcS5wb2xpY3lwYWwuY29tJywgZGVzYzogJ0ZBUScgfSxcclxuICBjYXNoYmFjazogeyB1cmw6ICcvY2FzaGJhY2snLCBkZXNjOiAnQ2FzaGJhY2snIH0sXHJcbiAgcmVmZXJyYWw6IHsgdXJsOiAnL3JlZmVycmFsJywgZGVzYzogJ1JlZmVycmFsJyB9LFxyXG4gIC8vIG1hcmtldHBsYWNlOiB7IHVybDogJy9tYXJrZXRwbGFjZScsIGRlc2M6ICdNYXJrZXRQbGFjZScgfSxcclxuXHJcbiAgdG9zOiB7IHVybDogJy90b3MnLCBkZXNjOiAnVGVybXMgb2YgU2VydmljZScgfSxcclxuICB0b3NQUFQ6IHsgdXJsOiAnL3BwdC90b3MnLCBkZXNjOiAnVGVybXMgb2YgU2VydmljZScgfSxcclxuICB0b3NQUEZBOiB7IHVybDogJy9wcGZhL3RvcycsIGRlc2M6ICdUZXJtcyBvZiBTZXJ2aWNlJyB9LFxyXG4gIGRpc2NsYWltZXI6IHsgdXJsOiAnL2Rpc2NsYWltZXInLCBkZXNjOiAnRGlzY2xhaW1lcicgfSxcclxuICBkaXNjbGFpbWVyUFBUOiB7IHVybDogJy9wcHQvZGlzY2xhaW1lcicsIGRlc2M6ICdEaXNjbGFpbWVyJyB9LFxyXG4gIGRpc2NsYWltZXJQUEZBOiB7IHVybDogJy9wcGZhL2Rpc2NsYWltZXInLCBkZXNjOiAnRGlzY2xhaW1lcicgfSxcclxuICBwcml2YWN5cG9saWN5OiB7IHVybDogJy9wcml2YWN5cG9saWN5JywgZGVzYzogJ1ByaXZhY3kgUG9saWN5JyB9LFxyXG4gIHByaXZhY3lwb2xpY3lQUFQ6IHsgdXJsOiAnL3BwdC9wcml2YWN5cG9saWN5JywgZGVzYzogJ1ByaXZhY3kgUG9saWN5JyB9LFxyXG4gIHByaXZhY3lwb2xpY3lQUEZBOiB7IHVybDogJy9wcGZhL3ByaXZhY3lwb2xpY3knLCBkZXNjOiAnUHJpdmFjeSBQb2xpY3knIH0sXHJcbiAgZmFpckRlYWxpbmdTdGF0ZW1lbnQ6IHsgdXJsOiAnL2ZhaXItZGVhbGluZy1zdGF0ZW1lbnQnLCBkZXNjOiAnRmFpciBEZWFsaW5nIFN0YXRlbWVudCcgfSxcclxuICBmYWlyRGVhbGluZ1N0YXRlbWVudFBQRkE6IHsgdXJsOiAnL3BwZmEvZmFpci1kZWFsaW5nLXN0YXRlbWVudCcsIGRlc2M6ICdGYWlyIERlYWxpbmcgU3RhdGVtZW50JyB9LFxyXG5cclxuICByZXdhcmRUb3M6IHsgdXJsOiAnL21vcm5pbmctY2hhbGxlbmdlJywgZGVzYzogJ01vcm5pbmcgQ2hhbGxlbmdlJyB9LFxyXG4gIG9sZFJld2FyZFRvczogeyB1cmw6ICcvcmV3YXJkLXRvcycsIGRlc2M6ICdQb2xpY3lQYWwgUmV3YXJkcycgfSxcclxuICBzZWN1cml0eTogeyB1cmw6ICcvc2VjdXJpdHknLCBkZXNjOiAnU2VjdXJpdHknIH0sXHJcbiAgcHJlc3M6IHsgdXJsOiAnL3ByZXNzJywgZGVzYzogJ1ByZXNzJyB9LFxyXG4gIGNsYWltc19vbGQ6IHsgdXJsOiAnL2NsYWltcycsIGRlc2M6ICdDbGFpbXMnIH0sXHJcbiAgY2xhaW1zOiB7IHVybDogJy9wcGZhL2NsYWltcycsIGRlc2M6ICdDbGFpbXMnIH0sXHJcbiAgcHJvZmlsZTogeyB1cmw6ICcvcHJvZmlsZScsIGRlc2M6ICdQcm9maWxlJyB9LFxyXG4gIHJld2FyZHM6IHsgdXJsOiAnL3Jld2FyZHMnLCBkZXNjOiAnUmV3YXJkcycgfSxcclxuICByZXdhcmRzTW9iaWxlOiB7IHVybDogJy9yZXdhcmQnLCBkZXNjOiAnUG9saWN5UGFsIFJld2FyZHMnIH0sXHJcbiAgcGFydG5lcnNoaXA6IHsgdXJsOiAnL3BhcnRuZXJzaGlwJywgZGVzYzogJ1BhcnRuZXJzaGlwJyB9LFxyXG4gIG1vb3ZhejogeyB1cmw6ICcvbW9vdmF6JywgZGVzYzogJ01vb3ZheicgfSxcclxuICBmb3Jnb3RwYXNzd29yZDogeyB1cmw6ICcvZm9yZ290cGFzc3dvcmQnLCBkZXNjOiAnRm9yZ290IFBhc3N3b3JkJyB9LFxyXG4gIHJlY2VpcHQ6IHsgdXJsOiAnL3JlY2VpcHQnLCBkZXNjOiAnUmVjZWlwdCcgfSxcclxuICBjaGVja291dDogeyB1cmw6ICcvY2hlY2tvdXQnLCBkZXNjOiAnQ2hlY2tvdXQnIH0sXHJcbiAgcmVnaXN0ZXI6IHsgdXJsOiAnL3JlZ2lzdGVyJywgZGVzYzogJ1JlZ2lzdGVyJyB9LFxyXG4gIGxvZ2luOiB7IHVybDogJy9sb2dpbicsIGRlc2M6ICdMb2dpbicgfSxcclxuICBnb3RvYXBwc3RvcmU6IHsgdXJsOiAnL2dvdG9hcHBzdG9yZScsIGRlc2M6ICdHbyB0byBBcHAgc3RvcmUnIH0sXHJcblxyXG4gIC8vIFByb2R1Y3RcclxuICBidXNpbmVzczogeyB1cmw6ICcvcHBmYS9idXNpbmVzcy1pbnN1cmFuY2UnLCBkZXNjOiAnQnVzaW5lc3MgSW5zdXJhbmNlJyB9LFxyXG4gIGJ1c2luZXNzX3BwdDogeyB1cmw6ICcvYnVzaW5lc3MtaW5zdXJhbmNlJywgZGVzYzogJ0J1c2luZXNzIEluc3VyYW5jZScgfSxcclxuXHJcbiAgdHJhdmVsOiB7IHVybDogJy9wcGZhL3RyYXZlbC1pbnN1cmFuY2UnLCBkZXNjOiAnVHJhdmVsIEluc3VyYW5jZScgfSxcclxuICB0cmF2ZWxfcHB0OiB7IHVybDogJy90cmF2ZWwtaW5zdXJhbmNlJywgZGVzYzogJ1RyYXZlbCBJbnN1cmFuY2UnIH0sXHJcblxyXG4gIG1vdG9yOiB7IHVybDogJy9wcGZhL2Nhci1pbnN1cmFuY2UnLCBkZXNjOiAnQ2FyIEluc3VyYW5jZScgfSxcclxuICBtb3Rvcl9wcHQ6IHsgdXJsOiAnL2Nhci1pbnN1cmFuY2UnLCBkZXNjOiAnQ2FyIEluc3VyYW5jZScgfSxcclxuXHJcbiAgcGV0OiB7IHVybDogJy9wcGZhL3BldC1pbnN1cmFuY2UnLCBkZXNjOiAnUGV0IEluc3VyYW5jZScgfSxcclxuICBwZXRfcHB0OiB7IHVybDogJy9wZXQtaW5zdXJhbmNlJywgZGVzYzogJ1BldCBJbnN1cmFuY2UnIH0sXHJcblxyXG4gIHBlcnNvbmFsX2FjY2lkZW50OiB7XHJcbiAgICB1cmw6ICcvcHBmYS9wZXJzb25hbC1hY2NpZGVudC1pbnN1cmFuY2UnLFxyXG4gICAgZGVzYzogJ1BlcnNvbmFsIEFjY2lkZW50IEluc3VyYW5jZScsXHJcbiAgfSxcclxuICBwZXJzb25hbF9hY2NpZGVudF9wcHQ6IHtcclxuICAgIHVybDogJy9wZXJzb25hbC1hY2NpZGVudC1pbnN1cmFuY2UnLFxyXG4gICAgZGVzYzogJ1BlcnNvbmFsIEFjY2lkZW50IEluc3VyYW5jZScsXHJcbiAgfSxcclxuXHJcbiAgdGVybV9saWZlOiB7IHVybDogJy9wcGZhL3Rlcm0tbGlmZS1pbnN1cmFuY2UnLCBkZXNjOiAnVGVybSBMaWZlIEluc3VyYW5jZScgfSxcclxuICB0ZXJtX2xpZmVfcHB0OiB7IHVybDogJy90ZXJtLWxpZmUtaW5zdXJhbmNlJywgZGVzYzogJ1Rlcm0gTGlmZSBJbnN1cmFuY2UnIH0sXHJcblxyXG4gIHdob2xlX2xpZmU6IHsgdXJsOiAnL3BwZmEvd2hvbGUtbGlmZS1pbnN1cmFuY2UnLCBkZXNjOiAnV2hvbGUgTGlmZSBJbnN1cmFuY2UnIH0sXHJcbiAgd2hvbGVfbGlmZV9wcHQ6IHsgdXJsOiAnL3dob2xlLWxpZmUtaW5zdXJhbmNlJywgZGVzYzogJ1dob2xlIExpZmUgSW5zdXJhbmNlJyB9LFxyXG5cclxuICBjcml0aWNhbF9pbGxuZXNzOiB7IHVybDogJy9wcGZhL2NyaXRpY2FsLWlsbG5lc3MtaW5zdXJhbmNlJywgZGVzYzogJ0NyaXRpY2FsIElsbG5lc3MgSW5zdXJhbmNlJyB9LFxyXG4gIGNyaXRpY2FsX2lsbG5lc3NfcHB0OiB7IHVybDogJy9jcml0aWNhbC1pbGxuZXNzLWluc3VyYW5jZScsIGRlc2M6ICdDcml0aWNhbCBJbGxuZXNzIEluc3VyYW5jZScgfSxcclxuXHJcbiAgaGVhbHRoX29sZDogeyB1cmw6ICcvaGVhbHRoLWluc3VyYW5jZScsIGRlc2M6ICdIZWFsdGggSW5zdXJhbmNlJyB9LFxyXG4gIGhlYWx0aDogeyB1cmw6ICcvcHBmYS9pbnRlZ3JhdGVkLXNoaWVsZC1wbGFucycsIGRlc2M6ICdJbnRlZ3JhdGVkIFNoaWVsZCBQbGFucycgfSxcclxuICBoZWFsdGhfcHB0OiB7IHVybDogJy9pbnRlZ3JhdGVkLXNoaWVsZC1wbGFucycsIGRlc2M6ICdJbnRlZ3JhdGVkIFNoaWVsZCBQbGFucycgfSxcclxuXHJcbiAgZW5kb3dtZW50X29sZDogeyB1cmw6ICcvZW5kb3dtZW50LWluc3VyYW5jZScsIGRlc2M6ICdFbmRvd21lbnQgLyBTYXZpbmdzIEluc3VyYW5jZScgfSxcclxuICBlbmRvd21lbnQ6IHsgdXJsOiAnL3BwZmEvZW5kb3dtZW50LXBsYW5zJywgZGVzYzogJ0VuZG93bWVudCAvIFNhdmluZ3MgSW5zdXJhbmNlJyB9LFxyXG4gIGVuZG93bWVudF9wcHQ6IHsgdXJsOiAnL2VuZG93bWVudC1wbGFucycsIGRlc2M6ICdFbmRvd21lbnQgLyBTYXZpbmdzIEluc3VyYW5jZScgfSxcclxuXHJcbiAgcmV0aXJlbWVudF9vbGQ6IHsgdXJsOiAnL3JldGlyZW1lbnQtaW5zdXJhbmNlJywgZGVzYzogJ0FubnVpdHkgUGxhbnMnIH0sXHJcbiAgcmV0aXJlbWVudDogeyB1cmw6ICcvcHBmYS9hbm51aXRpZXMtcmV0aXJlbWVudC1wbGFubmluZycsIGRlc2M6ICdBbm51aXR5IFBsYW5zJyB9LFxyXG4gIHJldGlyZW1lbnRfcHB0OiB7IHVybDogJy9hbm51aXRpZXMtcmV0aXJlbWVudC1wbGFubmluZycsIGRlc2M6ICdBbm51aXR5IFBsYW5zJyB9LFxyXG5cclxuICBvbl9kZW1hbmRfcGE6IHsgdXJsOiAnL29uLWRlbWFuZC1wYS1pbnN1cmFuY2UnLCBkZXNjOiAnT24gRGVtYW5kIFBlcnNvbmFsIEFjY2lkZW50JyB9LFxyXG5cclxuICAvLyBDYW1wYWlnbnNcclxuICBjbnk6IHsgdXJsOiAnL2NueScsIGRlc2M6ICdDaGluZXNlIE5ldyBZZWFyJyB9LFxyXG4gIGNhbXBhZ2luX3doZWVsOiB7IHVybDogJy9jYW1wYWlnbnMvc3Bpbi10aGUtd2hlZWwnLCBkZXNjOiAnV2VsY29tZSBTdXJwcmlzZScgfSxcclxuICBzY3JhdGNoX3dpbjogeyB1cmw6ICcvY2FtcGFpZ25zL3NjcmF0Y2gtd2luJywgZGVzYzogJ1NjcmF0Y2ggV2luJyB9LFxyXG4gIGNocmlzdG1hczogeyB1cmw6ICcvY2FtcGFpZ25zL2NocmlzdG1hcycsIGRlc2M6ICdDaHJpc3RtYXMgQ2FtcGFpZ24gMjAyMCcgfSxcclxuICBjaHJpc3RtYXNfbGVhZGVyYm9hcmQ6IHtcclxuICAgIHVybDogJy9jYW1wYWlnbnMvY2hyaXN0bWFzL2xlYWRlcmJvYXJkJyxcclxuICAgIGRlc2M6ICdDaHJpc3RtYXMgQ2FtcGFpZ24gMjAyMCcsXHJcbiAgfSxcclxuXHJcbiAgYmxvZzogeyB1cmw6ICdodHRwczovL3d3dy5wb2xpY3lwYWwuY29tL2Jsb2cnLCBkZXNjOiAnUmVzb3VyY2VzJyB9LFxyXG4gIGZvcmJpZGRlbjogeyB1cmw6ICcvZm9yYmlkZGVuJywgZGVzYzogJ0ZvcmJpZGRlbicgfSxcclxuXHJcbiAgYWRob2NfY2hlY2tvdXQ6IHsgdXJsOiAnL2NoZWNrb3V0JywgZGVzYzogJ0FkaG9jIC0gQ2hlY2tvdXQnIH0sXHJcbiAgYWRob2NfcmVjZWlwdDogeyB1cmw6ICcvcmVjZWlwdCcsIGRlc2M6ICdBZGhvYyAtIFJlY2VpcHQnIH0sXHJcblxyXG4gIHRoZV9uZXdfc2F2dnk6IHsgdXJsOiAnL3RoZW5ld3NhdnZ5JywgZGVzYzogJ1RoZSBOZXcgU2F2dnknIH0sXHJcbiAgamViaGVhbHRoOiB7IHVybDogJy9qZWJoZWFsdGgnLCBkZXNjOiAnSmViSGVhbHRoJyB9LFxyXG4gIGNhcmR1cDogeyB1cmw6ICcvY2FyZHVwJywgZGVzYzogJ0NhcmRVcCcgfSxcclxuICByZWZlcnJlZDogeyB1cmw6ICcvcmVmZXJyYWwvcicsIGRlc2M6ICdSZWZlcnJlZCcgfSxcclxuXHJcbiAgZHluYW1pY19wYXJ0bmVyOiB7IHVybDogJy9wYXJ0bmVycy9yJywgZGVzYzogJ1BhcnRuZXJzJyB9LFxyXG4gIHByb21vdGlvbnNfb2xkOiB7IHVybDogJy9wcm9tb3Rpb25zJywgZGVzYzogJ1Byb21vdGlvbnMnIH0sXHJcbiAgcHJvbW90aW9uczogeyB1cmw6ICcvcHBmYS9wcm9tb3Rpb25zJywgZGVzYzogJ1Byb21vdGlvbnMnIH0sXHJcblxyXG4gIHRlbGVfY29uc3VsdGF0aW9uOiB7IHVybDogJy90ZWxlLWNvbnN1bHRhdGlvbicsIGRlc2M6ICdWaWRlbyBUZWxlLUNvbnN1bHRhdGlvbicgfSxcclxuICBtb25leWJhZ19sYW5kaW5nX29sZDogeyB1cmw6ICcvZ2FtZXMvbW9uZXktYmFnJywgZGVzYzogJ01vbmV5IEJhZyBWaXJ0dWFsIFNhdmluZ3MnIH0sXHJcbiAgbW9uZXliYWdfZ2FtZV9vbGQ6IHsgdXJsOiAnL2dhbWVzL21vbmV5LWJhZy9zdGFydCcsIGRlc2M6ICdNb25leSBCYWcgVmlydHVhbCBTYXZpbmdzJyB9LFxyXG4gIG1vbmV5YmFnX2xhbmRpbmc6IHsgdXJsOiAnaHR0cHM6Ly9tb25leWJhZy5wb2xpY3lwYWwuY29tJywgZGVzYzogJ01vbmV5IEJhZyBWaXJ0dWFsIFNhdmluZ3MnIH0sXHJcbiAgbW9uZXliYWdfZ2FtZTogeyB1cmw6ICdodHRwczovL21vbmV5YmFnLnBvbGljeXBhbC5jb20vc3RhcnQnLCBkZXNjOiAnTW9uZXkgQmFnIFZpcnR1YWwgU2F2aW5ncycgfSxcclxuICBtb25leWJhZ19sYW5kaW5nX3N0YWdpbmc6IHtcclxuICAgIHVybDogJ2h0dHBzOi8vbW9uZXliYWctc3RhZ2luZy5wb2xpY3lwYWwuY29tJyxcclxuICAgIGRlc2M6ICdNb25leSBCYWcgVmlydHVhbCBTYXZpbmdzJyxcclxuICB9LFxyXG4gIG1vbmV5YmFnX2dhbWVfc3RhZ2luZzoge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly9tb25leWJhZy1zdGFnaW5nLnBvbGljeXBhbC5jb20vc3RhcnQnLFxyXG4gICAgZGVzYzogJ01vbmV5IEJhZyBWaXJ0dWFsIFNhdmluZ3MnLFxyXG4gIH0sXHJcblxyXG4gIGxpZmVfc3RhZ2U6IHsgdXJsOiAnL2xpZmUtc3RhZ2UnLCBkZXNjOiAnTGlmZSBTdGFnZSBQbGFubmluZycgfSxcclxuICBwYXltZW50OiB7IHVybDogJy9wYXltZW50JywgZGVzYzogJ1BheW1lbnQnIH0sXHJcblxyXG4gIGNob29zZV9hZHZpc2VyOiB7IHVybDogJy9pbnN1cmFuY2UvYWR2aXNlcnMnLCBkZXNjOiAnRmluYW5jaWFsIEFkdmlzZXIgUGxhdGZvcm0nIH0sXHJcbiAgY2hvb3NlX2FkdmlzZXJfc3VtbWFyeToge1xyXG4gICAgdXJsOiAnL2luc3VyYW5jZS9hZHZpc2Vycy9zdW1tYXJ5JyxcclxuICAgIGRlc2M6ICdGaW5hbmNpYWwgQWR2aXNlciBQbGF0Zm9ybSAtIFN1bW1hcnknLFxyXG4gIH0sXHJcbiAgZmFfZGFzaGJvYXJkOiB7IHVybDogJy9mYS1kYXNoYm9hcmQnLCBkZXNjOiAnQWR2aXNlcnMnIH0sXHJcblxyXG4gIC8vIGJsb2cgcG9zdHNcclxuICBlbmRvd21lbnRfYmxvZzoge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucG9saWN5cGFsLmNvbS9ibG9nL2luc3VyYW5jZS93aGF0LWFyZS1zYXZpbmdzLWluc3VyYW5jZS1wbGFucy8nLFxyXG4gICAgZGVzYzogJ0VuZG93bWVudCBJbnN1cmFuY2UnLFxyXG4gIH0sXHJcbiAgb25saW5lX2VuZG93bWVudDoge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucG9saWN5cGFsLmNvbS9ibG9nL2luc3VyYW5jZS9zdW1tYXJ5LW9mLXRpcS1lbmRvd21lbnQtcGxhbnMvJyxcclxuICAgIGRlc2M6ICdPbmxpbmUgRW5kb3dtZW50IEluc3VyYW5jZScsXHJcbiAgfSxcclxuICB3aGF0X3BjcmVkaXQ6IHtcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3LnBvbGljeXBhbC5jb20vYmxvZy9hbm5vdW5jZW1lbnRzL3doYXQtaXMtcC1jcmVkaXQvJyxcclxuICAgIGRlc2M6ICdXaGF0IGlzIFBvbGljeVBhbCBDcmVkaXRzJyxcclxuICB9LFxyXG4gIGR5c29uX3Byb21vOiB7XHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5wb2xpY3lwYWwuY29tL2Jsb2cvYW5ub3VuY2VtZW50cy9hcmUteW91LXJlYWR5LXRvLXNjcmF0Y2gtd2luLXByaXplcy8nLFxyXG4gICAgZGVzYzogJ0R5c29uIEFpcndyYXAgUHJvbW8nLFxyXG4gIH0sXHJcblxyXG4gIC8vIGJlc3QgYmxvZ3NcclxuICBiZXN0X3dob2xlX2xpZmU6IHtcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3LnBvbGljeXBhbC5jb20vYmxvZy9pbnN1cmFuY2UvYmVzdC13aG9sZS1saWZlLXBsYW5zLWluLXNpbmdhcG9yZS8nLFxyXG4gICAgZGVzYzogJ1dob2xlIExpZmUgSW5zdXJhbmNlJyxcclxuICB9LFxyXG4gIGJlc3RfdGVybV9saWZlOiB7XHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5wb2xpY3lwYWwuY29tL2Jsb2cvaW5zdXJhbmNlL2Jlc3QtdGVybS1saWZlLXBsYW5zLWluLXNpbmdhcG9yZS8nLFxyXG4gICAgZGVzYzogJ1Rlcm0gTGlmZSBJbnN1cmFuY2UnLFxyXG4gIH0sXHJcbiAgYmVzdF9lbmRvd21lbnQ6IHtcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3LnBvbGljeXBhbC5jb20vYmxvZy9pbnN1cmFuY2UvYmVzdC1lbmRvd21lbnQtcGxhbi8nLFxyXG4gICAgZGVzYzogJ0VuZG93bWVudCBJbnN1cmFuY2UnLFxyXG4gIH0sXHJcbiAgYmVzdF9jaToge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucG9saWN5cGFsLmNvbS9ibG9nL2luc3VyYW5jZS9iZXN0LWNyaXRpY2FsLWlsbG5lc3MtcGxhbnMtaW4tc2luZ2Fwb3JlLycsXHJcbiAgICBkZXNjOiAnQ3JpdGljYWwgSWxsbmVzcyBJbnN1cmFuY2UnLFxyXG4gIH0sXHJcbiAgYmVzdF9yZXRpcmVtZW50OiB7XHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5wb2xpY3lwYWwuY29tL2Jsb2cvaW5zdXJhbmNlL2Jlc3QtcmV0aXJlbWVudC1wbGFucy1pbi1zaW5nYXBvcmUvJyxcclxuICAgIGRlc2M6ICdSZXRpcmVtZW50IEluc3VyYW5jZScsXHJcbiAgfSxcclxuICBiZXN0X2hlYWx0aDoge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucG9saWN5cGFsLmNvbS9ibG9nL2luc3VyYW5jZS9iZXN0LWhlYWx0aC1pbnN1cmFuY2UtcGxhbnMtaW4tc2luZ2Fwb3JlLycsXHJcbiAgICBkZXNjOiAnSGVhbHRoIEluc3VyYW5jZScsXHJcbiAgfSxcclxuICBiZXN0X2ludGVybmF0aW9uYWxfaGVhbHRoOiB7XHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5wb2xpY3lwYWwuY29tL2Jsb2cvaW5zdXJhbmNlL2Jlc3QtaW50ZXJuYXRpb25hbC1oZWFsdGgtaW5zdXJhbmNlLWluLXNpbmdhcG9yZS8nLFxyXG4gICAgZGVzYzogJ0ludGVybmF0aW9uYWwgSGVhbHRoIEluc3VyYW5jZScsXHJcbiAgfSxcclxuICBiZXN0X21hdGVybml0eToge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucG9saWN5cGFsLmNvbS9ibG9nL2luc3VyYW5jZS9iZXN0LW1hdGVybml0eS1pbnN1cmFuY2UtaW4tc2luZ2Fwb3JlLycsXHJcbiAgICBkZXNjOiAnTWF0ZXJuaXR5IEluc3VyYW5jZScsXHJcbiAgfSxcclxuICBiZXN0X3BlcnNvbmFsX2FjY2lkZW50OiB7XHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5wb2xpY3lwYWwuY29tL2Jsb2cvaW5zdXJhbmNlL2Jlc3QtcGVyc29uYWwtYWNjaWRlbnQtaW5zdXJhbmNlLWluLXNpbmdhcG9yZS8nLFxyXG4gICAgZGVzYzogJ1BlcnNvbmFsIEFjY2lkZW50IEluc3VyYW5jZScsXHJcbiAgfSxcclxuICBiZXN0X2Nhcjoge1xyXG4gICAgdXJsOiAnaHR0cHM6Ly93d3cucG9saWN5cGFsLmNvbS9ibG9nL2luc3VyYW5jZS9iZXN0LW1vdG9yLWNhci1pbnN1cmFuY2UtaW4tc2luZ2Fwb3JlLycsXHJcbiAgICBkZXNjOiAnQ2FyIEluc3VyYW5jZScsXHJcbiAgfSxcclxuICBiZXN0X2hvbWU6IHtcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3LnBvbGljeXBhbC5jb20vYmxvZy9pbnN1cmFuY2UvYmVzdC1ob21lLWluc3VyYW5jZS1pbi1zaW5nYXBvcmUvJyxcclxuICAgIGRlc2M6ICdIb21lIEluc3VyYW5jZScsXHJcbiAgfSxcclxuICBiZXN0X21vcnRnYWdlOiB7XHJcbiAgICB1cmw6ICdodHRwczovL3d3dy5wb2xpY3lwYWwuY29tL2Jsb2cvaW5zdXJhbmNlL2Jlc3QtbW9ydGdhZ2UtaW5zdXJhbmNlLWluLXNpbmdhcG9yZS8nLFxyXG4gICAgZGVzYzogJ01vcnRnYWdlIEluc3VyYW5jZScsXHJcbiAgfSxcclxuICBiZXN0X21haWQ6IHtcclxuICAgIHVybDogJ2h0dHBzOi8vd3d3LnBvbGljeXBhbC5jb20vYmxvZy9pbnN1cmFuY2UvYmVzdC1tYWlkLWluc3VyYW5jZS1pbi1zaW5nYXBvcmUvJyxcclxuICAgIGRlc2M6ICdNYWlkIEluc3VyYW5jZScsXHJcbiAgfSxcclxuXHJcbiAgLy8gaW5zdXJlcnNcclxuICBncmVhdF9lYXN0ZXJuOiB7IHVybDogJy9pbnN1cmVycy9ncmVhdC1lYXN0ZXJuJywgZGVzYzogJ0dyZWF0IEVhc3Rlcm4gSW5zdXJhbmNlIHwgUG9saWN5UGFsJyB9LFxyXG4gIHBydWRlbnRpYWw6IHsgdXJsOiAnL2luc3VyZXJzL3BydWRlbnRpYWwnLCBkZXNjOiAnUHJ1ZGVudGlhbCBJbnN1cmFuY2UgfCBQb2xpY3lQYWwnIH0sXHJcblxyXG4gIC8vIHByb2R1Y3QgdGVzdFxyXG4gIGVsYXN0aXE6IHsgdXJsOiAnL2VsYXN0aXEnLCBkZXNjOiAnRUxBU1RJUScgfSxcclxuICBlZWFzeTogeyB1cmw6ICcvZWVhc3ktc2F2ZS12JywgZGVzYzogJ2VFQVNZIHNhdmUgVicgfSxcclxuICBnaWdhbnRpcTogeyB1cmw6ICcvZ2lnYW50aXEnLCBkZXNjOiAnR0lHSUFOVElRJyB9LFxyXG4gIGlscF9vbGQ6IHsgdXJsOiAnL2ludmVzdG1lbnQtbGlua2VkLWluc3VyYW5jZScsIGRlc2M6ICdJbnZlc3RtZW50LUxpbmtlZCBJbnN1cmFuY2UnIH0sXHJcbiAgaWxwOiB7IHVybDogJy9pbHAtaW52ZXN0bWVudC1saW5rZWQtcG9saWN5JywgZGVzYzogJ0ludmVzdG1lbnQtTGlua2VkIFBvbGljaWVzJyB9LFxyXG5cclxuICAvLyBCcmFuZGluZ1xyXG4gIGFib3V0OiB7IHVybDogJy9hYm91dCcsIGRlc2M6ICdBYm91dCBVcycgfSxcclxuICBnaXZlYmFjazogeyB1cmw6ICcvZ2l2ZWJhY2snLCBkZXNjOiAnR2l2ZWJhY2sgTW92ZW1lbnQnIH0sXHJcbiAgdHJhbnNwYXJlbmN5X29sZDogeyB1cmw6ICcvcHJpY2luZy10cmFuc3BhcmVuY3knLCBkZXNjOiAnUHJpY2luZyBUcmFuc3BhcmVuY3knIH0sXHJcbiAgdHJhbnNwYXJlbmN5OiB7IHVybDogJy9wcGZhL3ByaWNpbmctdHJhbnNwYXJlbmN5JywgZGVzYzogJ1ByaWNpbmcgVHJhbnNwYXJlbmN5JyB9LFxyXG4gIHNlcnZpY2Vfc3RhbmRhcmQ6IHsgdXJsOiAnL3NlcnZpY2Utc3RhbmRhcmQtcHJvbWlzZScsIGRlc2M6ICdTZXJ2aWNlIFN0YW5kYXJkIFByb21pc2UnIH0sXHJcbiAgbWVtYmVyX2JlbmVmaXRzOiB7IHVybDogJy9tZW1iZXItYmVuZWZpdHMnLCBkZXNjOiAnTWVtYmVyIEJlbmVmaXRzJyB9LFxyXG59O1xyXG4iLCJpbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJ2NvbnN0YW50cy9yb3V0ZXMnO1xyXG5cclxuaW1wb3J0IHsgRU5USVRZX1RZUEUgfSBmcm9tICdjb25zdGFudHMvY29tbW9uJztcclxuXHJcbmV4cG9ydCB0eXBlIEZvb3RlclNldHRpbmdzVHlwZSA9IHtcclxuICBoaWRlRG93bmxvYWRBcHA/OiBib29sZWFuO1xyXG4gIGhpZGVDdXJ2ZT86IGJvb2xlYW47XHJcbiAgdXNlQ29tcGFjdD86IGJvb2xlYW47XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBUaGVtZVR5cGUgPSB7XHJcbiAgdGhlbWU6IEVOVElUWV9UWVBFO1xyXG4gIGZvb3RlclNldHRpbmdzOiBGb290ZXJTZXR0aW5nc1R5cGU7XHJcbn07XHJcblxyXG4vLyBTZXQgZGVmYXVsdCBhbGwgdG8gcHB0IGZpcnN0XHJcbmxldCB0aGVtZVNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBUaGVtZVR5cGU+ID0gcmVkdWNlKFxyXG4gIHJvdXRlcyxcclxuICAocmVzdWx0LCB1cmwpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLnJlc3VsdCxcclxuICAgICAgW3VybC51cmxdOiB7XHJcbiAgICAgICAgdGhlbWU6ICdwcHQnLFxyXG4gICAgICAgIGZvb3RlclNldHRpbmdzOiB7fSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfSxcclxuICB7fVxyXG4pO1xyXG5cclxudGhlbWVTZXR0aW5ncyA9IHtcclxuICAuLi50aGVtZVNldHRpbmdzLFxyXG4gIFtyb3V0ZXMuaWxwLnVybF06IHsgdGhlbWU6ICdwcHQnLCBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSB9LFxyXG4gIFtyb3V0ZXMuZHluYW1pY19wYXJ0bmVyLnVybF06IHtcclxuICAgIHRoZW1lOiAncHB0JyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSwgaGlkZUN1cnZlOiBmYWxzZSB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG50aGVtZVNldHRpbmdzID0ge1xyXG4gIC4uLnRoZW1lU2V0dGluZ3MsXHJcbiAgW3JvdXRlcy5jYXRlZ29yaWVzLnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy5jbGFpbXMudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLnJlY2VpcHQudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLmNoZWNrb3V0LnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy5hZGhvY19jaGVja291dC51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMuYWRob2NfcmVjZWlwdC51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG5cclxuICBbcm91dGVzLnByb21vdGlvbnMudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLnBheW1lbnQudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuXHJcbiAgW3JvdXRlcy5idXNpbmVzcy51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMudHJhdmVsLnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy5tb3Rvci51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMucGV0LnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy5wZXJzb25hbF9hY2NpZGVudC51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMudGVybV9saWZlLnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy53aG9sZV9saWZlLnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy5jcml0aWNhbF9pbGxuZXNzLnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy5oZWFsdGgudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLmVuZG93bWVudC51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMucmV0aXJlbWVudC51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMub25fZGVtYW5kX3BhLnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcblxyXG4gIFtyb3V0ZXMuY2hvb3NlX2FkdmlzZXIudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLmNob29zZV9hZHZpc2VyX3N1bW1hcnkudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLmZhX2Rhc2hib2FyZC51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG5cclxuICBbcm91dGVzLmdyZWF0X2Vhc3Rlcm4udXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuICBbcm91dGVzLnBydWRlbnRpYWwudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuXHJcbiAgW3JvdXRlcy5lbGFzdGlxLnVybF06IHtcclxuICAgIHRoZW1lOiAncHBmYScsXHJcbiAgICBmb290ZXJTZXR0aW5nczogeyBoaWRlRG93bmxvYWRBcHA6IHRydWUsIGhpZGVDdXJ2ZTogdHJ1ZSwgdXNlQ29tcGFjdDogdHJ1ZSB9LFxyXG4gIH0sXHJcbiAgW3JvdXRlcy5lZWFzeS51cmxdOiB7XHJcbiAgICB0aGVtZTogJ3BwZmEnLFxyXG4gICAgZm9vdGVyU2V0dGluZ3M6IHsgaGlkZURvd25sb2FkQXBwOiB0cnVlLCBoaWRlQ3VydmU6IHRydWUsIHVzZUNvbXBhY3Q6IHRydWUgfSxcclxuICB9LFxyXG4gIFtyb3V0ZXMuZ2lnYW50aXEudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlLCB1c2VDb21wYWN0OiB0cnVlIH0sXHJcbiAgfSxcclxuXHJcbiAgW3JvdXRlcy50cmFuc3BhcmVuY3kudXJsXToge1xyXG4gICAgdGhlbWU6ICdwcGZhJyxcclxuICAgIGZvb3RlclNldHRpbmdzOiB7IGhpZGVEb3dubG9hZEFwcDogdHJ1ZSwgaGlkZUN1cnZlOiB0cnVlIH0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IHRoZW1lU2V0dGluZ3MgfTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIE5BVl9GT09URVJfTElOSzogeyBpZDogJ25hdl9mb290ZXJfbGlua194eHhfYnRuJyB9LFxyXG4gIE5BVl9GT09URVJfVVJMOiB7IGlkOiAnbmF2X2Zvb3Rlcl9saW5rX3h4eF9idG4nIH0sXHJcblxyXG4gIE5BVl9GT09URVJfUExBWVNUT1JFOiB7IGlkOiAnbmF2X2Zvb3Rlcl9wbGF5c3RvcmVfYnRuJyB9LFxyXG4gIE5BVl9GT09URVJfQVBQU1RPUkU6IHsgaWQ6ICduYXZfZm9vdGVyX2FwcHN0b3JlX2J0bicgfSxcclxuICBOQVZfRk9PVEVSX0NPTlRBQ1Q6IHsgaWQ6ICduYXZfZm9vdGVyX2NvbnRhY3RfYnRuJyB9LFxyXG4gIE5BVl9GT09URVJfU09DSUFMOiB7IGlkOiAnbmF2X2Zvb3Rlcl9zb2NpYWxfeHh4X2J0bicgfSxcclxuICBOQVZfRk9PVEVSX1NFR01FTlQ6IHsgaWQ6ICduYXZfZm9vdGVyX3NlZ21lbnRfeHh4X2J0bicgfSxcclxufTtcclxuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vdXNlVGhlbWUnO1xyXG4iLCJpbXBvcnQgZmluZCBmcm9tICdsb2Rhc2gvZmluZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmltcG9ydCB7IHRoZW1lU2V0dGluZ3MsIFRoZW1lVHlwZSB9IGZyb20gJ2NvbnN0YW50cy90aGVtZSc7XHJcblxyXG5jb25zdCBnZXRUaGVtZVNldHRpbmcgPSAocGF0aG5hbWU6IHN0cmluZyk6IFRoZW1lVHlwZSA9PiB7XHJcbiAgbGV0IHRoZW1lU2V0dGluZyA9IHRoZW1lU2V0dGluZ3NbYC8ke3BhdGhuYW1lLnNwbGl0KCcvJylbMV19YF07XHJcblxyXG4gIGlmICghdGhlbWVTZXR0aW5nKSB7XHJcbiAgICB0aGVtZVNldHRpbmcgPSBmaW5kKHRoZW1lU2V0dGluZ3MsIChfOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XHJcbiAgICAgIHJldHVybiBrZXkgIT09ICcvJyAmJiBwYXRobmFtZS5zdGFydHNXaXRoKGtleSk7XHJcbiAgICB9KSB8fCB7IHRoZW1lOiAncHB0JywgZm9vdGVyU2V0dGluZ3M6IHt9IH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhlbWVTZXR0aW5nO1xyXG59O1xyXG5cclxuY29uc3QgdXNlVGhlbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW3RoZW1lU2V0dGluZywgc2V0VGhlbWVTZXR0aW5nXSA9IHVzZVN0YXRlKGdldFRoZW1lU2V0dGluZyhwYXRobmFtZSkpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0VGhlbWVTZXR0aW5nKGdldFRoZW1lU2V0dGluZyhwYXRobmFtZSkpO1xyXG4gIH0sIFtwYXRobmFtZV0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdGhlbWVTZXR0aW5nLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VUaGVtZTtcclxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBwQ29udGV4dCwgQXBwSW5pdGlhbFByb3BzLCBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUgfSBmcm9tICduZXh0JztcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlTXVpVGhlbWUsXHJcbiAgVGhlbWVQcm92aWRlcixcclxuICAvLyByZXNwb25zaXZlRm9udFNpemVzLFxyXG4gIHdpdGhTdHlsZXMsXHJcbiAgVGhlbWVPcHRpb25zLFxyXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSc7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJ2FwcFJlZHV4JztcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSAnY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuaW1wb3J0IHsgZ2V0VGhlbWUsIGNzc1ZhcmlhYmxlcyB9IGZyb20gJ3N0eWxlcy90aGVtZSc7XHJcblxyXG4vLyBpbXBvcnQgQ3VzdG9tVGhlbWVQcm92aWRlciBmcm9tICdjb250ZXh0L0N1c3RvbVRoZW1lUHJvdmlkZXInO1xyXG5cclxuaW1wb3J0ICdzdHlsZXMvZ2xvYmFsLnNjc3MnO1xyXG5cclxuY29uc3QgdXBkYXRlQXBwVGhlbWUgPSAocGF0aG5hbWU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gIGNvbnN0IGlzUFBGQSA9IC9wcGZhLy50ZXN0KHBhdGhuYW1lKTtcclxuICBjb25zdCBvbGRDbGFzcyA9IGlzUFBGQSA/ICdhcHAtcHB0JyA6ICdhcHAtcHBmYSc7XHJcbiAgY29uc3QgbmV3Q2xhc3MgPSBpc1BQRkEgPyAnYXBwLXBwZmEnIDogJ2FwcC1wcHQnO1xyXG5cclxuICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMob2xkQ2xhc3MpIHx8ICFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhuZXdDbGFzcykpIHtcclxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnYXBwLXBwdCcsICdhcHAtcHBmYScpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKG5ld0NsYXNzKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlU3R5bGVUaGVtZSA9IChwYXRobmFtZTogc3RyaW5nKTogVGhlbWVPcHRpb25zID0+IHtcclxuICBjb25zdCBpc1BQRkEgPSAvcHBmYS8udGVzdChwYXRobmFtZSk7XHJcbiAgcmV0dXJuIGlzUFBGQSA/IGdldFRoZW1lKCdwcGZhJykgOiBnZXRUaGVtZSgncHB0Jyk7XHJcbn07XHJcblxyXG5jb25zdCBXcmFwcGVkQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxBcHBDb250ZXh0LCBBcHBJbml0aWFsUHJvcHMsIEFwcFByb3BzPiA9ICh7XHJcbiAgQ29tcG9uZW50LFxyXG4gIHBhZ2VQcm9wcyxcclxufSkgPT4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxuXHJcbmNvbnN0IFN0eWxlZFdyYXBwZWRBcHAgPSB3aXRoU3R5bGVzKGNzc1ZhcmlhYmxlcykoV3JhcHBlZEFwcCk7XHJcblxyXG5jb25zdCBUaGVtZWRBcHA6IE5leHRDb21wb25lbnRUeXBlPEFwcENvbnRleHQsIEFwcEluaXRpYWxQcm9wcywgQXBwUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gcHJvcHMucm91dGVyO1xyXG4gIC8vIGNvbnN0IFtpbml0aWFsUGF0aG5hbWVdID0gdXNlU3RhdGUocGF0aG5hbWUpO1xyXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoY3JlYXRlTXVpVGhlbWUodXBkYXRlU3R5bGVUaGVtZShwYXRobmFtZSkpKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxyXG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xyXG4gICAgaWYgKGpzc1N0eWxlcykge1xyXG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXBkYXRlQXBwVGhlbWUocGF0aG5hbWUpKSB7XHJcbiAgICAgIHNldFRoZW1lKGNyZWF0ZU11aVRoZW1lKHVwZGF0ZVN0eWxlVGhlbWUocGF0aG5hbWUpKSk7XHJcbiAgICB9XHJcbiAgfSwgW3BhdGhuYW1lXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICB7LyogQ3NzQmFzZWxpbmUga2lja3N0YXJ0IGFuIGVsZWdhbnQsIGNvbnNpc3RlbnQsIGFuZCBzaW1wbGUgYmFzZWxpbmUgdG8gYnVpbGQgdXBvbi4gKi99XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8U3R5bGVkV3JhcHBlZEFwcCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoVGhlbWVkQXBwKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==