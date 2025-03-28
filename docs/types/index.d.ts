/*
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import contains = require( '@stdlib/array-base-assert-contains' );
import hasEqualValues = require( '@stdlib/array-base-assert-has-equal-values' );
import hasEqualValuesIndexed = require( '@stdlib/array-base-assert-has-equal-values-indexed' );
import hasSameValues = require( '@stdlib/array-base-assert-has-same-values' );
import isAccessorArray = require( '@stdlib/array-base-assert-is-accessor-array' );
import isBooleanDataType = require( '@stdlib/array-base-assert-is-boolean-data-type' );
import isBooleanArray = require( '@stdlib/array-base-assert-is-booleanarray' );
import isByteOrder = require( '@stdlib/array-base-assert-is-byte-order' );
import isComplexFloatingPointDataType = require( '@stdlib/array-base-assert-is-complex-floating-point-data-type' );
import isComplexTypedArray = require( '@stdlib/array-base-assert-is-complex-typed-array' );
import isComplex64Array = require( '@stdlib/array-base-assert-is-complex64array' );
import isComplex128Array = require( '@stdlib/array-base-assert-is-complex128array' );
import isDataType = require( '@stdlib/array-base-assert-is-data-type' );
import isFloatingPointDataType = require( '@stdlib/array-base-assert-is-floating-point-data-type' );
import isIntegerDataType = require( '@stdlib/array-base-assert-is-integer-data-type' );
import isMostlySafeDataTypeCast = require( '@stdlib/array-base-assert-is-mostly-safe-data-type-cast' );
import isNumericDataType = require( '@stdlib/array-base-assert-is-numeric-data-type' );
import isRealDataType = require( '@stdlib/array-base-assert-is-real-data-type' );
import isRealFloatingPointDataType = require( '@stdlib/array-base-assert-is-real-floating-point-data-type' );
import isSafeDataTypeCast = require( '@stdlib/array-base-assert-is-safe-data-type-cast' );
import isSameKindDataTypeCast = require( '@stdlib/array-base-assert-is-same-kind-data-type-cast' );
import isSignedIntegerDataType = require( '@stdlib/array-base-assert-is-signed-integer-data-type' );
import isSortedAscending = require( '@stdlib/array-base-assert-is-sorted-ascending' );
import isUnsignedIntegerDataType = require( '@stdlib/array-base-assert-is-unsigned-integer-data-type' );

/**
* Interface describing the `assert` namespace.
*/
interface Namespace {
	/**
	* Tests if an array contains a provided search value.
	*
	* @param x - input array
	* @param value - search value
	* @returns boolean indicating if an array contains a search value
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var out = ns.contains( x, 2 );
	* // returns true
	*
	* @example
	* var x = [ 1, 2, 3 ];
	*
	* var fcn = ns.contains.factory( x );
	* // returns <Function>
	*
	* var out = fcn( 2 );
	* // returns true
	*/
	contains: typeof contains;

	/**
	* Tests if two arrays have equal values.
	*
	* ## Notes
	*
	* -   If provided arrays of unequal length, the function returns `false`.
	*
	* @param x - first input array
	* @param y - second input array
	* @returns boolean indicating whether both arrays have equal values
	*
	* @example
	* var x = [ 0, 0, 1, 0 ];
	* var y = [ 0, 0, 1, 0 ];
	*
	* var out = ns.hasEqualValues( x, y );
	* // returns true
	*/
	hasEqualValues: typeof hasEqualValues;

	/**
	* Tests if two indexed arrays have equal values.
	*
	* ## Notes
	*
	* -   If provided arrays of unequal length, the function returns `false`.
	*
	* @param x - first input array
	* @param y - second input array
	* @returns boolean indicating whether both arrays have equal values
	*
	* @example
	* var x = [ 0, 0, 1, 0 ];
	* var y = [ 0, 0, 1, 0 ];
	*
	* var out = ns.hasEqualValuesIndexed( x, y );
	* // returns true
	*/
	hasEqualValuesIndexed: typeof hasEqualValuesIndexed;

	/**
	* Tests if two arrays have the same values.
	*
	* ## Notes
	*
	* -   If provided arrays of unequal length, the function returns `false`.
	*
	* @param x - first input array
	* @param y - second input array
	* @returns boolean indicating whether both arrays have the same values
	*
	* @example
	* var x = [ 0, 0, 1, 0 ];
	* var y = [ 0, 0, 1, 0 ];
	*
	* var out = ns.hasSameValues( x, y );
	* // returns true
	*/
	hasSameValues: typeof hasSameValues;

	/**
	* Tests if an array-like object supports the accessor (get/set) protocol.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is an accessor array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array-complex128' );
	*
	* var arr = new Complex128Array( 10 );
	* var bool = ns.isAccessorArray( arr );
	* // returns true
	*
	* @example
	* var bool = ns.isAccessorArray( [] );
	* // returns false
	*/
	isAccessorArray: typeof isAccessorArray;

	/**
	* Tests whether an input value is a supported array boolean data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported array boolean data type
	*
	* @example
	* var bool = ns.isBooleanDataType( 'bool' );
	* // returns true
	*
	* bool = ns.isBooleanDataType( 'complex64' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'complex128' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'float32' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'float64' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'int16' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'int32' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'int8' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'uint16' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'uint32' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'uint8' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'uint8c' );
	* // returns false
	*
	* bool = ns.isBooleanDataType( 'foo' );
	* // returns false
	*/
	isBooleanDataType: typeof isBooleanDataType;

	/**
	* Tests if a value is a `BooleanArray`.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a `BooleanArray`
	*
	* @example
	* var BooleanArray = require( '@stdlib/array-bool' );
	*
	* var arr = new BooleanArray( 10 );
	* var bool = ns.isBooleanArray( arr );
	* // returns true
	*
	* @example
	* var bool = ns.isBooleanArray( [] );
	* // returns false
	*/
	isBooleanArray: typeof isBooleanArray;

	/**
	* Tests whether an input value is a supported array byte order.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported array byte order
	*
	* @example
	* var bool = ns.isByteOrder( 'little-endian' );
	* // returns true
	*
	* bool = ns.isByteOrder( 'big-endian' );
	* // returns true
	*
	* bool = ns.isByteOrder( 'foo' );
	* // returns false
	*/
	isByteOrder: typeof isByteOrder;

	/**
	* Tests whether an input value is a supported array complex-valued floating-point data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported array complex-valued floating-point data type
	*
	* @example
	* var bool = ns.isComplexFloatingPointDataType( 'complex64' );
	* // returns true
	*
	* bool = ns.isComplexFloatingPointDataType( 'complex128' );
	* // returns true
	*
	* bool = ns.isComplexFloatingPointDataType( 'float32' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'float64' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'int16' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'int32' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'int8' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'uint16' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'uint32' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'uint8' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'uint8c' );
	* // returns false
	*
	* bool = ns.isComplexFloatingPointDataType( 'foo' );
	* // returns false
	*/
	isComplexFloatingPointDataType: typeof isComplexFloatingPointDataType;

	/**
	* Tests if a value is a complex typed array.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is complex typed array
	*
	* @example
	* var Complex128Array = require( '@stdlib/array-complex128' );
	*
	* var arr = new Complex128Array( 10 );
	* var bool = ns.isComplexTypedArray( arr );
	* // returns true
	*
	* @example
	* var bool = ns.isComplexTypedArray( [] );
	* // returns false
	*/
	isComplexTypedArray: typeof isComplexTypedArray;

	/**
	* Tests if a value is a `Complex64Array`.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a `Complex64Array`
	*
	* @example
	* var Complex64Array = require( '@stdlib/array-complex64' );
	*
	* var arr = new Complex64Array( 10 );
	* var bool = ns.isComplex64Array( arr );
	* // returns true
	*
	* @example
	* var bool = ns.isComplex64Array( [] );
	* // returns false
	*/
	isComplex64Array: typeof isComplex64Array;

	/**
	* Tests if a value is a `Complex128Array`.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is a `Complex128Array`
	*
	* @example
	* var Complex128Array = require( '@stdlib/array-complex128' );
	*
	* var arr = new Complex128Array( 10 );
	* var bool = ns.isComplex128Array( arr );
	* // returns true
	*
	* @example
	* var bool = ns.isComplex128Array( [] );
	* // returns false
	*/
	isComplex128Array: typeof isComplex128Array;

	/**
	* Tests whether an input value is a supported array data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported array data type
	*
	* @example
	* var bool = ns.isDataType( 'float32' );
	* // returns true
	*
	* bool = ns.isDataType( 'float64' );
	* // returns true
	*
	* bool = ns.isDataType( 'generic' );
	* // returns true
	*
	* bool = ns.isDataType( 'int16' );
	* // returns true
	*
	* bool = ns.isDataType( 'int32' );
	* // returns true
	*
	* bool = ns.isDataType( 'int8' );
	* // returns true
	*
	* bool = ns.isDataType( 'uint16' );
	* // returns true
	*
	* bool = ns.isDataType( 'uint32' );
	* // returns true
	*
	* bool = ns.isDataType( 'uint8' );
	* // returns true
	*
	* bool = ns.isDataType( 'uint8c' );
	* // returns true
	*
	* bool = ns.isDataType( 'foo' );
	* // returns false
	*/
	isDataType: typeof isDataType;

	/**
	* Tests whether an input value is a supported array floating-point data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported array floating-point data type
	*
	* @example
	* var bool = ns.isFloatingPointDataType( 'float32' );
	* // returns true
	*
	* bool = ns.isFloatingPointDataType( 'float64' );
	* // returns true
	*
	* bool = ns.isFloatingPointDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'int16' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'int32' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'int8' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'uint16' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'uint32' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'uint8' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'uint8c' );
	* // returns false
	*
	* bool = ns.isFloatingPointDataType( 'foo' );
	* // returns false
	*/
	isFloatingPointDataType: typeof isFloatingPointDataType;

	/**
	* Tests whether an input value is a supported array integer (i.e., signed or unsigned integer) data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported array integer data type
	*
	* @example
	* var bool = ns.isIntegerDataType( 'float32' );
	* // returns false
	*
	* bool = ns.isIntegerDataType( 'float64' );
	* // returns false
	*
	* bool = ns.isIntegerDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isIntegerDataType( 'int16' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'int32' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'int8' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'uint16' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'uint32' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'uint8' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'uint8c' );
	* // returns true
	*
	* bool = ns.isIntegerDataType( 'foo' );
	* // returns false
	*/
	isIntegerDataType: typeof isIntegerDataType;

	/**
	* Returns a boolean indicating if a provided array data type can be safely cast or, for floating-point data types, downcast to another array data type.
	*
	* @param from - array data type
	* @param to - array data type
	* @returns boolean indicating if a data type can be cast to another data type
	*
	* @example
	* var bool = ns.isMostlySafeDataTypeCast( 'float32', 'float64' );
	* // returns true
	*
	* bool = ns.isMostlySafeDataTypeCast( 'float64', 'int32' );
	* // returns false
	*/
	isMostlySafeDataTypeCast: typeof isMostlySafeDataTypeCast;

	/**
	* Tests whether an input value is a supported array numeric data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported array numeric data type
	*
	* @example
	* var bool = ns.isNumericDataType( 'float32' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'float64' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isNumericDataType( 'int16' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'int32' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'int8' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'uint16' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'uint32' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'uint8' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'uint8c' );
	* // returns true
	*
	* bool = ns.isNumericDataType( 'foo' );
	* // returns false
	*/
	isNumericDataType: typeof isNumericDataType;

	/**
	* Tests whether an input value is a supported array real-valued data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported array real-valued data type
	*
	* @example
	* var bool = ns.isRealDataType( 'float32' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'float64' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'complex128' );
	* // returns false
	*
	* bool = ns.isRealDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isRealDataType( 'int16' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'int32' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'int8' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'uint16' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'uint32' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'uint8' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'uint8c' );
	* // returns true
	*
	* bool = ns.isRealDataType( 'foo' );
	* // returns false
	*/
	isRealDataType: typeof isRealDataType;

	/**
	* Tests whether an input value is a supported array real-valued floating-point data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported array real-valued floating-point data type
	*
	* @example
	* var bool = ns.isRealFloatingPointDataType( 'float32' );
	* // returns true
	*
	* bool = ns.isRealFloatingPointDataType( 'float64' );
	* // returns true
	*
	* bool = ns.isRealFloatingPointDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'int16' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'int32' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'int8' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'uint16' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'uint32' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'uint8' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'uint8c' );
	* // returns false
	*
	* bool = ns.isRealFloatingPointDataType( 'foo' );
	* // returns false
	*/
	isRealFloatingPointDataType: typeof isRealFloatingPointDataType;

	/**
	* Returns a boolean indicating if a provided array data type can be safely cast to another array data type.
	*
	* @param from - array data type
	* @param to - array data type
	* @returns boolean indicating if a data type can be safely cast to another data type
	*
	* @example
	* var bool = ns.isSafeDataTypeCast( 'float32', 'float64' );
	* // returns true
	*
	* bool = ns.isSafeDataTypeCast( 'float64', 'int32' );
	* // returns false
	*/
	isSafeDataTypeCast: typeof isSafeDataTypeCast;

	/**
	* Returns a boolean indicating if a provided array data type can be safely cast to, or is of the same "kind" as, another array data type.
	*
	* @param from - array data type
	* @param to - array data type
	* @returns boolean indicating if a data type can be cast to another data type
	*
	* @example
	* var bool = ns.isSameKindDataTypeCast( 'float32', 'float64' );
	* // returns true
	*
	* bool = ns.isSameKindDataTypeCast( 'uint16', 'int16' );
	* // returns false
	*/
	isSameKindDataTypeCast: typeof isSameKindDataTypeCast;

	/**
	* Tests whether an input value is a supported array signed integer data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported array signed integer data type
	*
	* @example
	* var bool = ns.isSignedIntegerDataType( 'float32' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'float64' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'int16' );
	* // returns true
	*
	* bool = ns.isSignedIntegerDataType( 'int32' );
	* // returns true
	*
	* bool = ns.isSignedIntegerDataType( 'int8' );
	* // returns true
	*
	* bool = ns.isSignedIntegerDataType( 'uint16' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'uint32' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'uint8' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'uint8c' );
	* // returns false
	*
	* bool = ns.isSignedIntegerDataType( 'foo' );
	* // returns false
	*/
	isSignedIntegerDataType: typeof isSignedIntegerDataType;

	/**
	* Tests if an array is sorted in ascending order.
	*
	* @param x - input array
	* @returns boolean indicating if an array is sorted in ascending order
	*
	* @example
	* var out = ns.isSortedAscending( [ 1, 2, 3 ] );
	* // returns true
	*
	* @example
	* var out = ns.isSortedAscending( [ 3, 2, 1 ] );
	* // returns false
	*
	* @example
	* var out = ns.isSortedAscending( [ 3, 3, 3 ] );
	* // returns true
	*
	* @example
	* var out = ns.isSortedAscending( [ 3 ] );
	* // returns true
	*
	* @example
	* var out = ns.isSortedAscending( [] );
	* // returns false
	*
	* @example
	* var out = ns.isSortedAscending( [ 1, 3, 2 ] );
	* // returns false
	*/
	isSortedAscending: typeof isSortedAscending;

	/**
	* Tests whether an input value is a supported array unsigned integer data type.
	*
	* @param v - value to test
	* @returns boolean indicating whether an input value is a supported array unsigned integer data type
	*
	* @example
	* var bool = ns.isUnsignedIntegerDataType( 'float32' );
	* // returns false
	*
	* bool = ns.isUnsignedIntegerDataType( 'float64' );
	* // returns false
	*
	* bool = ns.isUnsignedIntegerDataType( 'generic' );
	* // returns false
	*
	* bool = ns.isUnsignedIntegerDataType( 'int16' );
	* // returns false
	*
	* bool = ns.isUnsignedIntegerDataType( 'int32' );
	* // returns false
	*
	* bool = ns.isUnsignedIntegerDataType( 'int8' );
	* // returns false
	*
	* bool = ns.isUnsignedIntegerDataType( 'uint16' );
	* // returns true
	*
	* bool = ns.isUnsignedIntegerDataType( 'uint32' );
	* // returns true
	*
	* bool = ns.isUnsignedIntegerDataType( 'uint8' );
	* // returns true
	*
	* bool = ns.isUnsignedIntegerDataType( 'uint8c' );
	* // returns true
	*
	* bool = ns.isUnsignedIntegerDataType( 'foo' );
	* // returns false
	*/
	isUnsignedIntegerDataType: typeof isUnsignedIntegerDataType;
}

/**
* Base array assertion utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
