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

// TypeScript Version: 2.0

/* tslint:disable:max-line-length */
/* tslint:disable:max-file-line-count */

import isAccessorArray = require( '@stdlib/array-base-assert-is-accessor-array' );

/**
* Interface describing the `assert` namespace.
*/
interface Namespace {
	/**
	* Tests if an array-like object supports the accessor (get/set) protocol.
	*
	* @param value - value to test
	* @returns boolean indicating whether a value is an accessor array
	*
	* @example
	* var Complex128Array = require( `@stdlib/array/complex128` );
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
}

/**
* Base array assertion utilities.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
