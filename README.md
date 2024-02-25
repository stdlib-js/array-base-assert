<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# assert

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Base array assertion utilities.



<section class="usage">

## Usage

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-base-assert/tags). For example,

```javascript
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert@v0.2.1-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { contains, hasSameValues, isAccessorArray, isComplex128Array, isComplex64Array, isComplexFloatingPointDataType, isComplexTypedArray, isDataType, isFloatingPointDataType, isIntegerDataType, isMostlySafeDataTypeCast, isNumericDataType, isRealDataType, isRealFloatingPointDataType, isSafeDataTypeCast, isSameKindDataTypeCast, isSignedIntegerDataType, isUnsignedIntegerDataType } from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert@esm/index.mjs';
```

#### ns

Assertion utilities.

```javascript
var o = ns;
// returns {...}
```

The namespace exports the following:

<!-- <toc pattern="*"> -->

<div class="namespace-toc">

-   <span class="signature">[`contains( x, value )`][@stdlib/array/base/assert/contains]</span><span class="delimiter">: </span><span class="description">test if an array contains a provided search value.</span>
-   <span class="signature">[`hasSameValues( x, y )`][@stdlib/array/base/assert/has-same-values]</span><span class="delimiter">: </span><span class="description">test if two arrays have the same values.</span>
-   <span class="signature">[`isAccessorArray( value )`][@stdlib/array/base/assert/is-accessor-array]</span><span class="delimiter">: </span><span class="description">test if an array-like object supports the accessor (get/set) protocol.</span>
-   <span class="signature">[`isComplexFloatingPointDataType( value )`][@stdlib/array/base/assert/is-complex-floating-point-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array complex-valued floating-point data type.</span>
-   <span class="signature">[`isComplexTypedArray( value )`][@stdlib/array/base/assert/is-complex-typed-array]</span><span class="delimiter">: </span><span class="description">test if a value is a complex typed array.</span>
-   <span class="signature">[`isComplex128Array( value )`][@stdlib/array/base/assert/is-complex128array]</span><span class="delimiter">: </span><span class="description">test if a value is a `Complex128Array`.</span>
-   <span class="signature">[`isComplex64Array( value )`][@stdlib/array/base/assert/is-complex64array]</span><span class="delimiter">: </span><span class="description">test if a value is a `Complex64Array`.</span>
-   <span class="signature">[`isDataType( value )`][@stdlib/array/base/assert/is-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array data type.</span>
-   <span class="signature">[`isFloatingPointDataType( value )`][@stdlib/array/base/assert/is-floating-point-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array floating-point data type.</span>
-   <span class="signature">[`isIntegerDataType( value )`][@stdlib/array/base/assert/is-integer-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array integer data type.</span>
-   <span class="signature">[`isMostlySafeDataTypeCast( from, to )`][@stdlib/array/base/assert/is-mostly-safe-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an array data type can be safely cast or, for floating-point data types, downcast to another array data type.</span>
-   <span class="signature">[`isNumericDataType( value )`][@stdlib/array/base/assert/is-numeric-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array numeric data type.</span>
-   <span class="signature">[`isRealDataType( value )`][@stdlib/array/base/assert/is-real-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array real-valued data type.</span>
-   <span class="signature">[`isRealFloatingPointDataType( value )`][@stdlib/array/base/assert/is-real-floating-point-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array real-valued floating-point data type.</span>
-   <span class="signature">[`isSafeDataTypeCast( from, to )`][@stdlib/array/base/assert/is-safe-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an array data type can be safely cast to another array data type.</span>
-   <span class="signature">[`isSameKindDataTypeCast( from, to )`][@stdlib/array/base/assert/is-same-kind-data-type-cast]</span><span class="delimiter">: </span><span class="description">determine whether an array data type can be safely cast to, or is of the same "kind" as, another array data type.</span>
-   <span class="signature">[`isSignedIntegerDataType( value )`][@stdlib/array/base/assert/is-signed-integer-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array signed integer data type.</span>
-   <span class="signature">[`isUnsignedIntegerDataType( value )`][@stdlib/array/base/assert/is-unsigned-integer-data-type]</span><span class="delimiter">: </span><span class="description">test if an input value is a supported array unsigned integer data type.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs';
import ns from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert@esm/index.mjs';

console.log( objectKeys( ns ) );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-assert.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-assert

[test-image]: https://github.com/stdlib-js/array-base-assert/actions/workflows/test.yml/badge.svg?branch=v0.2.1
[test-url]: https://github.com/stdlib-js/array-base-assert/actions/workflows/test.yml?query=branch:v0.2.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-assert/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-assert?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-assert.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-assert/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-assert/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-assert/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-assert/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-assert/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-assert/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-assert/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-assert/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-assert/main/LICENSE

<!-- <toc-links> -->

[@stdlib/array/base/assert/contains]: https://github.com/stdlib-js/array-base-assert-contains/tree/esm

[@stdlib/array/base/assert/has-same-values]: https://github.com/stdlib-js/array-base-assert-has-same-values/tree/esm

[@stdlib/array/base/assert/is-accessor-array]: https://github.com/stdlib-js/array-base-assert-is-accessor-array/tree/esm

[@stdlib/array/base/assert/is-complex-floating-point-data-type]: https://github.com/stdlib-js/array-base-assert-is-complex-floating-point-data-type/tree/esm

[@stdlib/array/base/assert/is-complex-typed-array]: https://github.com/stdlib-js/array-base-assert-is-complex-typed-array/tree/esm

[@stdlib/array/base/assert/is-complex128array]: https://github.com/stdlib-js/array-base-assert-is-complex128array/tree/esm

[@stdlib/array/base/assert/is-complex64array]: https://github.com/stdlib-js/array-base-assert-is-complex64array/tree/esm

[@stdlib/array/base/assert/is-data-type]: https://github.com/stdlib-js/array-base-assert-is-data-type/tree/esm

[@stdlib/array/base/assert/is-floating-point-data-type]: https://github.com/stdlib-js/array-base-assert-is-floating-point-data-type/tree/esm

[@stdlib/array/base/assert/is-integer-data-type]: https://github.com/stdlib-js/array-base-assert-is-integer-data-type/tree/esm

[@stdlib/array/base/assert/is-mostly-safe-data-type-cast]: https://github.com/stdlib-js/array-base-assert-is-mostly-safe-data-type-cast/tree/esm

[@stdlib/array/base/assert/is-numeric-data-type]: https://github.com/stdlib-js/array-base-assert-is-numeric-data-type/tree/esm

[@stdlib/array/base/assert/is-real-data-type]: https://github.com/stdlib-js/array-base-assert-is-real-data-type/tree/esm

[@stdlib/array/base/assert/is-real-floating-point-data-type]: https://github.com/stdlib-js/array-base-assert-is-real-floating-point-data-type/tree/esm

[@stdlib/array/base/assert/is-safe-data-type-cast]: https://github.com/stdlib-js/array-base-assert-is-safe-data-type-cast/tree/esm

[@stdlib/array/base/assert/is-same-kind-data-type-cast]: https://github.com/stdlib-js/array-base-assert-is-same-kind-data-type-cast/tree/esm

[@stdlib/array/base/assert/is-signed-integer-data-type]: https://github.com/stdlib-js/array-base-assert-is-signed-integer-data-type/tree/esm

[@stdlib/array/base/assert/is-unsigned-integer-data-type]: https://github.com/stdlib-js/array-base-assert-is-unsigned-integer-data-type/tree/esm

<!-- </toc-links> -->

</section>

<!-- /.links -->
