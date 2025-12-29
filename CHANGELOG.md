# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-12-29)

<section class="features">

### Features

-   [`6338030`](https://github.com/stdlib-js/stdlib/commit/63380300fa123617bf4d460483ab1e70d2611da3) - update `array/base/assert` TypeScript declarations [(#9196)](https://github.com/stdlib-js/stdlib/pull/9196)
-   [`ca51243`](https://github.com/stdlib-js/stdlib/commit/ca5124377589a8051527e4bc3b87173723c88f51) - add `hasAlmostSameValues` to namespace
-   [`24426d2`](https://github.com/stdlib-js/stdlib/commit/24426d292e18009d0d4acd3615e8f520b92b0c1b) - add `array/base/assert/has-almost-same-values`
-   [`a17f721`](https://github.com/stdlib-js/stdlib/commit/a17f721a3d8edb0702ff7e0f123bc93c1da17914) - update `array/base/assert` TypeScript declarations
-   [`0b89b56`](https://github.com/stdlib-js/stdlib/commit/0b89b56db0aa040a643ef859ac71795462e947d5) - add `hasAlmostEqualValues` to namespace
-   [`fee6898`](https://github.com/stdlib-js/stdlib/commit/fee68983980c006c27c7f1f5d1f3f11b20602974) - add `array/base/assert/has-almost-equal-values`
-   [`0f6d4e7`](https://github.com/stdlib-js/stdlib/commit/0f6d4e7694d458f76dc077d5b618e405f6cfed37) - add `anyIsEntry` to namespace
-   [`fbffea0`](https://github.com/stdlib-js/stdlib/commit/fbffea0a7be15b6013111fd0b613548d7c09a1b7) - add `array/base/assert/any-is-entry`
-   [`dc8942d`](https://github.com/stdlib-js/stdlib/commit/dc8942da05af3ed631f67fc679c7c1730954e1be) - add `anyIsEntryIn` to namespace
-   [`c9edc1a`](https://github.com/stdlib-js/stdlib/commit/c9edc1ab611674fe14def4df00cf8ca407ec4cce) - add `array/base/assert/any-is-entry-in`
-   [`8b2c875`](https://github.com/stdlib-js/stdlib/commit/8b2c875e56586bdff1698fd768cec5d568ab24a0) - add `anyHasOwnProp` to namespace
-   [`533df61`](https://github.com/stdlib-js/stdlib/commit/533df61c24c654e67a6d3dbf84b878ec0f8c9520) - add `array/base/assert/any-has-own-property`
-   [`2ab5cd8`](https://github.com/stdlib-js/stdlib/commit/2ab5cd84a76425d34ed204d222c33a000107b8d0) - add `anyHasProp` to namespace
-   [`ccd5ca6`](https://github.com/stdlib-js/stdlib/commit/ccd5ca60ccf12f9480f930547afb60da9732bf59) - add `array/base/assert/any-has-property`
-   [`e661213`](https://github.com/stdlib-js/stdlib/commit/e66121352ef767cdb87d19e938b1eccf7970fa3a) - update namespace TypeScript declarations [(#4706)](https://github.com/stdlib-js/stdlib/pull/4706)
-   [`d11aaf3`](https://github.com/stdlib-js/stdlib/commit/d11aaf3e4ea651384185655584eea9c5b8ca9ae2) - add `isSortedAscending` to namespace
-   [`5a848eb`](https://github.com/stdlib-js/stdlib/commit/5a848ebda6a2ff9cc34cfa5cf93ffce65b8bab0e) - add `array/base/assert/is-sorted-ascending`
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190)
-   [`43aa58f`](https://github.com/stdlib-js/stdlib/commit/43aa58f81dcad604f11a5715a1546c015b0a9623) - add `isByteOrder` to namespace
-   [`b18478e`](https://github.com/stdlib-js/stdlib/commit/b18478e236e9cb6991d5a0f952d217e043e46587) - add `array/base/assert/is-byte-order`
-   [`81b39fe`](https://github.com/stdlib-js/stdlib/commit/81b39fec06b8575149b2ab1b834a7577e6ac5e5d) - add `hasEqualValuesIndexed` to namespace
-   [`036794c`](https://github.com/stdlib-js/stdlib/commit/036794c19bd65d13a60c098a5423cf12e1be5d12) - add `array/base/assert/has-equal-values-indexed`
-   [`cc56538`](https://github.com/stdlib-js/stdlib/commit/cc5653806325fe7b63037dfa49108be8016de3fc) - add `hasEqualValues` to namespace
-   [`4cdf27e`](https://github.com/stdlib-js/stdlib/commit/4cdf27e87b904ab762b3e7c1034dd27f7466383c) - add `array/base/assert/has-equal-values`

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`b0f11b1`](https://github.com/stdlib-js/stdlib/commit/b0f11b1a4ba47bed9c52c7825e27023223d4d9f4): remove `array/base/assert/any-is-entry-in`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/array-base/any-is-entry-in` which provides the same API and
        implementation.

-   [`05f79b6`](https://github.com/stdlib-js/stdlib/commit/05f79b6d47b81a2193101ee6476877c4ae860cce): remove `array/base/assert/any-is-entry`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/array-base/any-is-entry` which provides the same API and
        implementation.

-   [`87f46a0`](https://github.com/stdlib-js/stdlib/commit/87f46a023aab832c4adb03b772ffa8d3fd114406): remove `array/base/assert/any-has-property`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/array-base/any-has-property` which provides the same API and
        implementation.

-   [`44e6405`](https://github.com/stdlib-js/stdlib/commit/44e64052156d8f89c2701616e0e2bf267746329b): remove `array/base/assert/any-has-own-property`

    -   To migrate, users should update their require/import paths to use
        `@stdlib/array-base/any-has-own-property` which provides the same API and
        implementation.

-   [`23e8953`](https://github.com/stdlib-js/stdlib/commit/23e89539dc1a96e17f06ab1bde7a11e76fddd83b): remove `anyHasOwnProp`, `anyHasProp`, `anyIsEntry`, `anyIsEntryIn`

    -   To migrate, users should access the same symbols via the
        `@stdlib/array-base` namespace.

-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec): update namespace declarations

    -   To migrate, users should consult the corresponding packages containing the respective implementations to determine what is breaking. The primary breakages come from the `blas/*` namespace, where we recently refactored how top-level BLAS APIs operate on input arguments.

</section>

<!-- /.breaking-changes -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#7030](https://github.com/stdlib-js/stdlib/issues/7030)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`6338030`](https://github.com/stdlib-js/stdlib/commit/63380300fa123617bf4d460483ab1e70d2611da3) - **feat:** update `array/base/assert` TypeScript declarations [(#9196)](https://github.com/stdlib-js/stdlib/pull/9196) _(by stdlib-bot)_
-   [`de9dec4`](https://github.com/stdlib-js/stdlib/commit/de9dec49411a9f71d800970e9324e87dca52098b) - **docs:** update namespace table of contents [(#9205)](https://github.com/stdlib-js/stdlib/pull/9205) _(by stdlib-bot)_
-   [`ca51243`](https://github.com/stdlib-js/stdlib/commit/ca5124377589a8051527e4bc3b87173723c88f51) - **feat:** add `hasAlmostSameValues` to namespace _(by Athan Reines)_
-   [`24426d2`](https://github.com/stdlib-js/stdlib/commit/24426d292e18009d0d4acd3615e8f520b92b0c1b) - **feat:** add `array/base/assert/has-almost-same-values` _(by Athan Reines)_
-   [`dd20818`](https://github.com/stdlib-js/stdlib/commit/dd20818a40cdd215a614a7cb1ec580c95f8fde80) - **bench:** refactor to use string interpolation in `array/base/assert/contains` [(#8844)](https://github.com/stdlib-js/stdlib/pull/8844) _(by ashutoshsao)_
-   [`257b05e`](https://github.com/stdlib-js/stdlib/commit/257b05e78857f4b4ff76b3764565eadd8ce75946) - **bench:** refactor to use string interpolation in `array/base/assert/has-same-values` [(#8847)](https://github.com/stdlib-js/stdlib/pull/8847) _(by ashutoshsao)_
-   [`cb96e8f`](https://github.com/stdlib-js/stdlib/commit/cb96e8f86be54682f17fc6a4f47338aea2ad30a9) - **bench:** refactor to use string interpolation in `array/base/assert/has-equal-values-indexed` [(#8846)](https://github.com/stdlib-js/stdlib/pull/8846) _(by ashutoshsao)_
-   [`4c6da75`](https://github.com/stdlib-js/stdlib/commit/4c6da75d5efe773301912258d2b10f7e7121f4e0) - **bench:** refactor to use string interpolation in `array/base/assert/is-complex64array` [(#8784)](https://github.com/stdlib-js/stdlib/pull/8784) _(by Rohit R Bhat)_
-   [`e7258ae`](https://github.com/stdlib-js/stdlib/commit/e7258ae18bab179392875a2aa810646f33da80e6) - **bench:** refactor to use string interpolation in `array/base/assert/is-complex128array` [(#8782)](https://github.com/stdlib-js/stdlib/pull/8782) _(by Rohit R Bhat)_
-   [`9b50472`](https://github.com/stdlib-js/stdlib/commit/9b504729537c53298de78068c1b02dbb64170c88) - **bench:** refactor to use string interpolation in `array/base/assert/is-sorted-ascending` [(#8749)](https://github.com/stdlib-js/stdlib/pull/8749) _(by Rohit R Bhat)_
-   [`68083d6`](https://github.com/stdlib-js/stdlib/commit/68083d60de8199eb42bf63fbae39838e3b23bdd7) - **bench:** refactor to use string interpolation in `array/base/assert/has-equal-values` [(#8691)](https://github.com/stdlib-js/stdlib/pull/8691) _(by Rohit R Bhat)_
-   [`ac0438f`](https://github.com/stdlib-js/stdlib/commit/ac0438f675d717acdd81ffe3965e681999f352b9) - **bench:** refactor to use string interpolation in `array/base/assert/has-almost-equal-values` [(#8690)](https://github.com/stdlib-js/stdlib/pull/8690) _(by Rohit R Bhat)_
-   [`5f5bb2d`](https://github.com/stdlib-js/stdlib/commit/5f5bb2d4277a24000b57fb07bc28d821500cd7e8) - **docs:** update namespace table of contents [(#8425)](https://github.com/stdlib-js/stdlib/pull/8425) _(by stdlib-bot, Athan Reines)_
-   [`a17f721`](https://github.com/stdlib-js/stdlib/commit/a17f721a3d8edb0702ff7e0f123bc93c1da17914) - **feat:** update `array/base/assert` TypeScript declarations _(by Philipp Burckhardt)_
-   [`4f3789b`](https://github.com/stdlib-js/stdlib/commit/4f3789b25e01908dab6c31b910573b73e5709ac5) - **docs:** fix example code _(by Philipp Burckhardt)_
-   [`a147b7d`](https://github.com/stdlib-js/stdlib/commit/a147b7d6ef754925120fcc7bdec2b40842a3615a) - **test:** use .strictEqual() instead of .equal() and fix lint errors _(by Philipp Burckhardt)_
-   [`5388bba`](https://github.com/stdlib-js/stdlib/commit/5388bba36044d2de93dacb0134c6e5539b02928c) - **chore:** minor clean-up _(by Philipp Burckhardt)_
-   [`0b89b56`](https://github.com/stdlib-js/stdlib/commit/0b89b56db0aa040a643ef859ac71795462e947d5) - **feat:** add `hasAlmostEqualValues` to namespace _(by Athan Reines)_
-   [`fee6898`](https://github.com/stdlib-js/stdlib/commit/fee68983980c006c27c7f1f5d1f3f11b20602974) - **feat:** add `array/base/assert/has-almost-equal-values` _(by Athan Reines)_
-   [`d3e9442`](https://github.com/stdlib-js/stdlib/commit/d3e9442155e8d093988fed8988489fbe7b549dbf) - **docs:** update namespace table of contents [(#7062)](https://github.com/stdlib-js/stdlib/pull/7062) _(by stdlib-bot)_
-   [`b0f11b1`](https://github.com/stdlib-js/stdlib/commit/b0f11b1a4ba47bed9c52c7825e27023223d4d9f4) - **remove:** remove `array/base/assert/any-is-entry-in` _(by Athan Reines)_
-   [`05f79b6`](https://github.com/stdlib-js/stdlib/commit/05f79b6d47b81a2193101ee6476877c4ae860cce) - **remove:** remove `array/base/assert/any-is-entry` _(by Athan Reines)_
-   [`87f46a0`](https://github.com/stdlib-js/stdlib/commit/87f46a023aab832c4adb03b772ffa8d3fd114406) - **remove:** remove `array/base/assert/any-has-property` _(by Athan Reines)_
-   [`44e6405`](https://github.com/stdlib-js/stdlib/commit/44e64052156d8f89c2701616e0e2bf267746329b) - **remove:** remove `array/base/assert/any-has-own-property` _(by Athan Reines)_
-   [`23e8953`](https://github.com/stdlib-js/stdlib/commit/23e89539dc1a96e17f06ab1bde7a11e76fddd83b) - **remove:** remove `anyHasOwnProp`, `anyHasProp`, `anyIsEntry`, `anyIsEntryIn` from namespace _(by Athan Reines)_
-   [`89d9dc3`](https://github.com/stdlib-js/stdlib/commit/89d9dc316985aa3c194222afbf8146e58ff6d761) - **docs:** update namespace table of contents [(#7046)](https://github.com/stdlib-js/stdlib/pull/7046) _(by stdlib-bot)_
-   [`99f515d`](https://github.com/stdlib-js/stdlib/commit/99f515d651fe793e13b1df6ff95f39200fad0ff1) - **docs:** update parameter types _(by Athan Reines)_
-   [`02109aa`](https://github.com/stdlib-js/stdlib/commit/02109aa28a0c48a2d6b92de3423614204a39431e) - **chore:** address commit comments for commit `fbffea0` [(#7038)](https://github.com/stdlib-js/stdlib/pull/7038) _(by Sachin Raj, Philipp Burckhardt)_
-   [`c29e97b`](https://github.com/stdlib-js/stdlib/commit/c29e97b6388cecff97906f3613880765b601da2a) - **docs:** update namespace table of contents [(#6948)](https://github.com/stdlib-js/stdlib/pull/6948) _(by stdlib-bot, Athan Reines)_
-   [`0f6d4e7`](https://github.com/stdlib-js/stdlib/commit/0f6d4e7694d458f76dc077d5b618e405f6cfed37) - **feat:** add `anyIsEntry` to namespace _(by Athan Reines)_
-   [`fbffea0`](https://github.com/stdlib-js/stdlib/commit/fbffea0a7be15b6013111fd0b613548d7c09a1b7) - **feat:** add `array/base/assert/any-is-entry` _(by Athan Reines)_
-   [`dc8942d`](https://github.com/stdlib-js/stdlib/commit/dc8942da05af3ed631f67fc679c7c1730954e1be) - **feat:** add `anyIsEntryIn` to namespace _(by Athan Reines)_
-   [`c9edc1a`](https://github.com/stdlib-js/stdlib/commit/c9edc1ab611674fe14def4df00cf8ca407ec4cce) - **feat:** add `array/base/assert/any-is-entry-in` _(by Athan Reines)_
-   [`8b2c875`](https://github.com/stdlib-js/stdlib/commit/8b2c875e56586bdff1698fd768cec5d568ab24a0) - **feat:** add `anyHasOwnProp` to namespace _(by Athan Reines)_
-   [`533df61`](https://github.com/stdlib-js/stdlib/commit/533df61c24c654e67a6d3dbf84b878ec0f8c9520) - **feat:** add `array/base/assert/any-has-own-property` _(by Athan Reines)_
-   [`80b1cec`](https://github.com/stdlib-js/stdlib/commit/80b1cec874dbe423a50ed26c1a6c3a7f5fc05cd9) - **docs:** update examples _(by Athan Reines)_
-   [`d1a712d`](https://github.com/stdlib-js/stdlib/commit/d1a712db9218350f4e37926ac993b97573b65ba9) - **docs:** demonstrate prototype property _(by Athan Reines)_
-   [`2ab5cd8`](https://github.com/stdlib-js/stdlib/commit/2ab5cd84a76425d34ed204d222c33a000107b8d0) - **feat:** add `anyHasProp` to namespace _(by Athan Reines)_
-   [`ccd5ca6`](https://github.com/stdlib-js/stdlib/commit/ccd5ca60ccf12f9480f930547afb60da9732bf59) - **feat:** add `array/base/assert/any-has-property` _(by Athan Reines)_
-   [`e661213`](https://github.com/stdlib-js/stdlib/commit/e66121352ef767cdb87d19e938b1eccf7970fa3a) - **feat:** update namespace TypeScript declarations [(#4706)](https://github.com/stdlib-js/stdlib/pull/4706) _(by stdlib-bot)_
-   [`cff470f`](https://github.com/stdlib-js/stdlib/commit/cff470f9608165100c8c122fce70c40b1af864ec) - **docs:** update namespace table of contents (#4708) _(by stdlib-bot, Planeshifter)_
-   [`d11aaf3`](https://github.com/stdlib-js/stdlib/commit/d11aaf3e4ea651384185655584eea9c5b8ca9ae2) - **feat:** add `isSortedAscending` to namespace _(by Athan Reines)_
-   [`5a848eb`](https://github.com/stdlib-js/stdlib/commit/5a848ebda6a2ff9cc34cfa5cf93ffce65b8bab0e) - **feat:** add `array/base/assert/is-sorted-ascending` _(by Athan Reines)_
-   [`1d9e4dd`](https://github.com/stdlib-js/stdlib/commit/1d9e4dd5514ba4f3c1063dff732e37254dc0dd84) - **docs:** add missing comment _(by Athan Reines)_
-   [`b6a2b0b`](https://github.com/stdlib-js/stdlib/commit/b6a2b0b27dc8cc1e9fc02d9679a3ce468cf49b9d) - **docs:** update namespace table of contents [(#3192)](https://github.com/stdlib-js/stdlib/pull/3192) _(by stdlib-bot, Philipp Burckhardt)_
-   [`8b1548f`](https://github.com/stdlib-js/stdlib/commit/8b1548fb45c1ff131f5edac20cb984344a2d28ec) - **feat:** update namespace TypeScript declarations [(#3190)](https://github.com/stdlib-js/stdlib/pull/3190) _(by stdlib-bot, Philipp Burckhardt)_
-   [`c00f27a`](https://github.com/stdlib-js/stdlib/commit/c00f27afb4b1853a7f4377fbbab7aec1dab9e34c) - **docs:** improve examples of `array/base/assert` namespace _(by Soumajit Chatterjee, Philipp Burckhardt)_
-   [`43aa58f`](https://github.com/stdlib-js/stdlib/commit/43aa58f81dcad604f11a5715a1546c015b0a9623) - **feat:** add `isByteOrder` to namespace _(by Athan Reines)_
-   [`b18478e`](https://github.com/stdlib-js/stdlib/commit/b18478e236e9cb6991d5a0f952d217e043e46587) - **feat:** add `array/base/assert/is-byte-order` _(by Athan Reines)_
-   [`73a198b`](https://github.com/stdlib-js/stdlib/commit/73a198b42551ce9aaa142a17e9c77578205628d5) - **test:** add tests _(by Athan Reines)_
-   [`4a14f03`](https://github.com/stdlib-js/stdlib/commit/4a14f034cc432c477ce41d452ea220803b45525c) - **test:** add tests _(by Athan Reines)_
-   [`6bbe26f`](https://github.com/stdlib-js/stdlib/commit/6bbe26f751894cadb15279ceb6cf739475bb0612) - **test:** fix descriptions _(by Athan Reines)_
-   [`81b39fe`](https://github.com/stdlib-js/stdlib/commit/81b39fec06b8575149b2ab1b834a7577e6ac5e5d) - **feat:** add `hasEqualValuesIndexed` to namespace _(by Athan Reines)_
-   [`036794c`](https://github.com/stdlib-js/stdlib/commit/036794c19bd65d13a60c098a5423cf12e1be5d12) - **feat:** add `array/base/assert/has-equal-values-indexed` _(by Athan Reines)_
-   [`cc56538`](https://github.com/stdlib-js/stdlib/commit/cc5653806325fe7b63037dfa49108be8016de3fc) - **feat:** add `hasEqualValues` to namespace _(by Athan Reines)_
-   [`58d6b23`](https://github.com/stdlib-js/stdlib/commit/58d6b233f341a5cee452bd74953d260482242931) - **style:** disable lint rule _(by Athan Reines)_
-   [`4cdf27e`](https://github.com/stdlib-js/stdlib/commit/4cdf27e87b904ab762b3e7c1034dd27f7466383c) - **feat:** add `array/base/assert/has-equal-values` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 6 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Rohit R Bhat
-   Sachin Raj
-   Soumajit Chatterjee
-   ashutoshsao

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.3.0">

## 0.3.0 (2024-07-29)

<section class="features">

### Features

-   [`a7947d0`](https://github.com/stdlib-js/stdlib/commit/a7947d0856e5c65f863841b0205c05b6f6cc2eec) - add boolean dtype support to `array/base/assert/has-same-values` [(#2404)](https://github.com/stdlib-js/stdlib/pull/2404)
-   [`d626ffa`](https://github.com/stdlib-js/stdlib/commit/d626ffac9f0504be236c94afd4b920032272c8bf) - update namespace TypeScript declarations [(#2394)](https://github.com/stdlib-js/stdlib/pull/2394)
-   [`4fdb218`](https://github.com/stdlib-js/stdlib/commit/4fdb218a0272d18ce2f70d769695bceca33a7653) - add `isBooleanArray` to namespace
-   [`57347fd`](https://github.com/stdlib-js/stdlib/commit/57347fdd4382c4a71935e7ae06d992d04d08f802) - add `isBooleanDataType` to namespace
-   [`5fe348d`](https://github.com/stdlib-js/stdlib/commit/5fe348d99b277d10a524f75094e40244f165808c) - add `array/base/assert/is-boolean-data-type`
-   [`ce961d9`](https://github.com/stdlib-js/stdlib/commit/ce961d921bc120e3c45c3df1381793072febf721) - add `array/base/assert/is-booleanarray` [(#2357)](https://github.com/stdlib-js/stdlib/pull/2357)

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`a7947d0`](https://github.com/stdlib-js/stdlib/commit/a7947d0856e5c65f863841b0205c05b6f6cc2eec) - **feat:** add boolean dtype support to `array/base/assert/has-same-values` [(#2404)](https://github.com/stdlib-js/stdlib/pull/2404) _(by Jaysukh Makvana, Athan Reines)_
-   [`d626ffa`](https://github.com/stdlib-js/stdlib/commit/d626ffac9f0504be236c94afd4b920032272c8bf) - **feat:** update namespace TypeScript declarations [(#2394)](https://github.com/stdlib-js/stdlib/pull/2394) _(by stdlib-bot, Athan Reines)_
-   [`717af94`](https://github.com/stdlib-js/stdlib/commit/717af947ab270abc5422b6d8af7dacd8f0078ca4) - **docs:** update namespace table of contents [(#2389)](https://github.com/stdlib-js/stdlib/pull/2389) _(by stdlib-bot, Philipp Burckhardt)_
-   [`4fdb218`](https://github.com/stdlib-js/stdlib/commit/4fdb218a0272d18ce2f70d769695bceca33a7653) - **feat:** add `isBooleanArray` to namespace _(by Athan Reines)_
-   [`57347fd`](https://github.com/stdlib-js/stdlib/commit/57347fdd4382c4a71935e7ae06d992d04d08f802) - **feat:** add `isBooleanDataType` to namespace _(by Athan Reines)_
-   [`5fe348d`](https://github.com/stdlib-js/stdlib/commit/5fe348d99b277d10a524f75094e40244f165808c) - **feat:** add `array/base/assert/is-boolean-data-type` _(by Athan Reines)_
-   [`ce961d9`](https://github.com/stdlib-js/stdlib/commit/ce961d921bc120e3c45c3df1381793072febf721) - **feat:** add `array/base/assert/is-booleanarray` [(#2357)](https://github.com/stdlib-js/stdlib/pull/2357) _(by Jaysukh Makvana)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Jaysukh Makvana
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-25)

<section class="features">

### Features

-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb) - update namespace TypeScript declarations [(#1340)](https://github.com/stdlib-js/stdlib/pull/1340)
-   [`ff36d97`](https://github.com/stdlib-js/stdlib/commit/ff36d97450ec1ab28aeeaf2aab882757e0fb4439) - add `isComplexTypedArray` to namespace
-   [`9050a7e`](https://github.com/stdlib-js/stdlib/commit/9050a7e4d58e4b418e5076eb9ec9661a2e716681) - add `array/base/assert/is-complex-typed-array`

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb): rename exported aliases

    -   To migrate, users should consult the relevant namespace documentation and associated commits in order to determine which aliases have been renamed.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`39b8176`](https://github.com/stdlib-js/stdlib/commit/39b81766b9d8a5e89ba4a26e5ea07f6413b46973) - **docs:** update namespace table of contents [(#1341)](https://github.com/stdlib-js/stdlib/pull/1341) _(by stdlib-bot, Athan Reines)_
-   [`0adcae5`](https://github.com/stdlib-js/stdlib/commit/0adcae51386086e2ef5fb5d78402389cff776deb) - **feat:** update namespace TypeScript declarations [(#1340)](https://github.com/stdlib-js/stdlib/pull/1340) _(by stdlib-bot, Athan Reines)_
-   [`ff36d97`](https://github.com/stdlib-js/stdlib/commit/ff36d97450ec1ab28aeeaf2aab882757e0fb4439) - **feat:** add `isComplexTypedArray` to namespace _(by Athan Reines)_
-   [`9050a7e`](https://github.com/stdlib-js/stdlib/commit/9050a7e4d58e4b418e5076eb9ec9661a2e716681) - **feat:** add `array/base/assert/is-complex-typed-array` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 1 person contributed to this release. Thank you to this contributor:

-   Athan Reines

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-15)

<section class="features">

### Features

-   [`0c5beb2`](https://github.com/stdlib-js/stdlib/commit/0c5beb2e954c52aa9f04b47673458c2b7baf60a3) - add `isUnsignedIntegerDataType` to namespace
-   [`d12c919`](https://github.com/stdlib-js/stdlib/commit/d12c91942051477dcadd655a5784e3bdbbbee5aa) - add `array/base/assert/is-unsigned-integer-data-type`
-   [`9f0a814`](https://github.com/stdlib-js/stdlib/commit/9f0a81470bc0bacfb1250aac12db3976614486c6) - add `isSignedIntegerDataType` to namespace
-   [`9196de1`](https://github.com/stdlib-js/stdlib/commit/9196de1bea30f6bdfcd0372a9f95484b41b4df40) - add `array/base/assert/is-signed-integer-data-type`
-   [`dfd72a7`](https://github.com/stdlib-js/stdlib/commit/dfd72a73fb6a6bdd8fb587a851fa505f28df0846) - add `isRealFloatingPointDataType` to namespace
-   [`9f2b15f`](https://github.com/stdlib-js/stdlib/commit/9f2b15f0f89110e5d2a63f08af0de898afc83e9b) - add `array/base/assert/is-real-floating-point-data-type`
-   [`6b5229c`](https://github.com/stdlib-js/stdlib/commit/6b5229cfb3d9dffb9ab72e520a896fe610748717) - add `isRealDataType` to namespace
-   [`722dd80`](https://github.com/stdlib-js/stdlib/commit/722dd8090628f53b8fa436177c11f25202bdcc1d) - add `array/base/assert/is-real-data-type`
-   [`a9000da`](https://github.com/stdlib-js/stdlib/commit/a9000da38017bd56f73e20d99c7588c1c2454942) - add `isNumericDataType` to namespace
-   [`2f0979e`](https://github.com/stdlib-js/stdlib/commit/2f0979e82fc21d2d5eb75b84cb8501fdf267699a) - add `array/base/assert/is-numeric-data-type`
-   [`d37669b`](https://github.com/stdlib-js/stdlib/commit/d37669bbb8c5a7a20d8684d3989473443968c109) - add `isIntegerDataType` to namespace
-   [`d19f0b4`](https://github.com/stdlib-js/stdlib/commit/d19f0b4a323bdcde5f4a62cdba99eb6378ceaea4) - add `array/base/assert/is-integer-data-type`
-   [`320f9d1`](https://github.com/stdlib-js/stdlib/commit/320f9d1332dae4802cd30b40a4de9d4fd06c90b9) - add `isFloatingPointDataType` to namespace
-   [`909ffed`](https://github.com/stdlib-js/stdlib/commit/909ffedb3faddefa5eee4a0cf1895a2cba9d0624) - add `array/base/assert/is-floating-point-data-type`
-   [`38f5518`](https://github.com/stdlib-js/stdlib/commit/38f5518fd4d806907a05ab8c4d3341d22c8cd92a) - add `isDataType` to namespace
-   [`40368ee`](https://github.com/stdlib-js/stdlib/commit/40368ee23a7c9852cbf1806f8cd8b2e6e287c658) - add `array/base/assert/is-data-type`
-   [`a808e96`](https://github.com/stdlib-js/stdlib/commit/a808e96e184a073ba654643b556a06031d4fd207) - add `isComplexFloatingPointDataType` to namespace
-   [`db7f8d1`](https://github.com/stdlib-js/stdlib/commit/db7f8d154e7574a9f6997f52ebdc65772bf2f167) - add `array/base/assert/is-complex-floating-point-data-type`
-   [`6ded0bb`](https://github.com/stdlib-js/stdlib/commit/6ded0bb97881e1cb1983eb83a2a55faba3f56864) - add `isSameKindDataTypeCast` to namespace
-   [`37bd821`](https://github.com/stdlib-js/stdlib/commit/37bd821173a8a972d42ed673950ed5c27dfd02ff) - add `array/base/assert/is-same-kind-data-type-cast`
-   [`92926cb`](https://github.com/stdlib-js/stdlib/commit/92926cbc4f09caaf650266ddaba3dbdacd9d090e) - add `isSafeDataTypeCast` to namespace
-   [`4534cc2`](https://github.com/stdlib-js/stdlib/commit/4534cc2e77d6603371f8ed213b9f2f4a306706a0) - add `array/base/assert/is-safe-data-type-cast`
-   [`4429999`](https://github.com/stdlib-js/stdlib/commit/4429999d900848d873146e1c1a5a3748740d4410) - add `isMostlySafeDataTypeCast` to namespace
-   [`652d790`](https://github.com/stdlib-js/stdlib/commit/652d790dda286e28a01124f4cec66bbbbc9fb2ff) - add `array/base/assert/is-mostly-safe-data-type-cast`
-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287)
-   [`900672d`](https://github.com/stdlib-js/stdlib/commit/900672dc32fce7a9e276bff41a357cac45d852e3) - add `hasSameValues` to namespace
-   [`9d59fff`](https://github.com/stdlib-js/stdlib/commit/9d59fff0ce02b51d0a9fc94dc7d11e45c5bbac5d) - add `array/base/assert/has-same-values`
-   [`d6e93a8`](https://github.com/stdlib-js/stdlib/commit/d6e93a89926046fbdeb40f233a748cd3c1b62423) - add `isComplex128Array` to namespace
-   [`d25df9e`](https://github.com/stdlib-js/stdlib/commit/d25df9ed0cfb8c19af5dcf6df2b4d2ccde3d2d95) - add `array/base/assert/is-complex128array`
-   [`68d21bb`](https://github.com/stdlib-js/stdlib/commit/68d21bb6e1ccdc4de6784f9cd8c3c3db48a2da0d) - add `isComplex64Array` to namespace
-   [`e770600`](https://github.com/stdlib-js/stdlib/commit/e77060013a56b9f3c7c60606a8235348b95e0c85) - add `array/base/assert/is-complex64array`

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`ad1edac`](https://github.com/stdlib-js/stdlib/commit/ad1edacf7dcbde6f889d872b76a827b1c68096d6) - **chore:** update package meta data [(#1312)](https://github.com/stdlib-js/stdlib/pull/1312) _(by stdlib-bot, Athan Reines)_
-   [`0c5beb2`](https://github.com/stdlib-js/stdlib/commit/0c5beb2e954c52aa9f04b47673458c2b7baf60a3) - **feat:** add `isUnsignedIntegerDataType` to namespace _(by Athan Reines)_
-   [`d12c919`](https://github.com/stdlib-js/stdlib/commit/d12c91942051477dcadd655a5784e3bdbbbee5aa) - **feat:** add `array/base/assert/is-unsigned-integer-data-type` _(by Athan Reines)_
-   [`9f0a814`](https://github.com/stdlib-js/stdlib/commit/9f0a81470bc0bacfb1250aac12db3976614486c6) - **feat:** add `isSignedIntegerDataType` to namespace _(by Athan Reines)_
-   [`9196de1`](https://github.com/stdlib-js/stdlib/commit/9196de1bea30f6bdfcd0372a9f95484b41b4df40) - **feat:** add `array/base/assert/is-signed-integer-data-type` _(by Athan Reines)_
-   [`dfd72a7`](https://github.com/stdlib-js/stdlib/commit/dfd72a73fb6a6bdd8fb587a851fa505f28df0846) - **feat:** add `isRealFloatingPointDataType` to namespace _(by Athan Reines)_
-   [`9f2b15f`](https://github.com/stdlib-js/stdlib/commit/9f2b15f0f89110e5d2a63f08af0de898afc83e9b) - **feat:** add `array/base/assert/is-real-floating-point-data-type` _(by Athan Reines)_
-   [`6b5229c`](https://github.com/stdlib-js/stdlib/commit/6b5229cfb3d9dffb9ab72e520a896fe610748717) - **feat:** add `isRealDataType` to namespace _(by Athan Reines)_
-   [`722dd80`](https://github.com/stdlib-js/stdlib/commit/722dd8090628f53b8fa436177c11f25202bdcc1d) - **feat:** add `array/base/assert/is-real-data-type` _(by Athan Reines)_
-   [`a9000da`](https://github.com/stdlib-js/stdlib/commit/a9000da38017bd56f73e20d99c7588c1c2454942) - **feat:** add `isNumericDataType` to namespace _(by Athan Reines)_
-   [`2f0979e`](https://github.com/stdlib-js/stdlib/commit/2f0979e82fc21d2d5eb75b84cb8501fdf267699a) - **feat:** add `array/base/assert/is-numeric-data-type` _(by Athan Reines)_
-   [`d37669b`](https://github.com/stdlib-js/stdlib/commit/d37669bbb8c5a7a20d8684d3989473443968c109) - **feat:** add `isIntegerDataType` to namespace _(by Athan Reines)_
-   [`d19f0b4`](https://github.com/stdlib-js/stdlib/commit/d19f0b4a323bdcde5f4a62cdba99eb6378ceaea4) - **feat:** add `array/base/assert/is-integer-data-type` _(by Athan Reines)_
-   [`320f9d1`](https://github.com/stdlib-js/stdlib/commit/320f9d1332dae4802cd30b40a4de9d4fd06c90b9) - **feat:** add `isFloatingPointDataType` to namespace _(by Athan Reines)_
-   [`909ffed`](https://github.com/stdlib-js/stdlib/commit/909ffedb3faddefa5eee4a0cf1895a2cba9d0624) - **feat:** add `array/base/assert/is-floating-point-data-type` _(by Athan Reines)_
-   [`38f5518`](https://github.com/stdlib-js/stdlib/commit/38f5518fd4d806907a05ab8c4d3341d22c8cd92a) - **feat:** add `isDataType` to namespace _(by Athan Reines)_
-   [`40368ee`](https://github.com/stdlib-js/stdlib/commit/40368ee23a7c9852cbf1806f8cd8b2e6e287c658) - **feat:** add `array/base/assert/is-data-type` _(by Athan Reines)_
-   [`a808e96`](https://github.com/stdlib-js/stdlib/commit/a808e96e184a073ba654643b556a06031d4fd207) - **feat:** add `isComplexFloatingPointDataType` to namespace _(by Athan Reines)_
-   [`db7f8d1`](https://github.com/stdlib-js/stdlib/commit/db7f8d154e7574a9f6997f52ebdc65772bf2f167) - **feat:** add `array/base/assert/is-complex-floating-point-data-type` _(by Athan Reines)_
-   [`6ded0bb`](https://github.com/stdlib-js/stdlib/commit/6ded0bb97881e1cb1983eb83a2a55faba3f56864) - **feat:** add `isSameKindDataTypeCast` to namespace _(by Athan Reines)_
-   [`37bd821`](https://github.com/stdlib-js/stdlib/commit/37bd821173a8a972d42ed673950ed5c27dfd02ff) - **feat:** add `array/base/assert/is-same-kind-data-type-cast` _(by Athan Reines)_
-   [`92926cb`](https://github.com/stdlib-js/stdlib/commit/92926cbc4f09caaf650266ddaba3dbdacd9d090e) - **feat:** add `isSafeDataTypeCast` to namespace _(by Athan Reines)_
-   [`62ae0ef`](https://github.com/stdlib-js/stdlib/commit/62ae0efa15019eb2a973aee216e5bba6a198f877) - **docs:** update examples _(by Athan Reines)_
-   [`4534cc2`](https://github.com/stdlib-js/stdlib/commit/4534cc2e77d6603371f8ed213b9f2f4a306706a0) - **feat:** add `array/base/assert/is-safe-data-type-cast` _(by Athan Reines)_
-   [`4429999`](https://github.com/stdlib-js/stdlib/commit/4429999d900848d873146e1c1a5a3748740d4410) - **feat:** add `isMostlySafeDataTypeCast` to namespace _(by Athan Reines)_
-   [`652d790`](https://github.com/stdlib-js/stdlib/commit/652d790dda286e28a01124f4cec66bbbbc9fb2ff) - **feat:** add `array/base/assert/is-mostly-safe-data-type-cast` _(by Athan Reines)_
-   [`2693e3b`](https://github.com/stdlib-js/stdlib/commit/2693e3b3f0382542a51fc57d78e9ab59e2dc0681) - **feat:** update namespace TypeScript declarations [(#1287)](https://github.com/stdlib-js/stdlib/pull/1287) _(by stdlib-bot, Athan Reines)_
-   [`322d1ca`](https://github.com/stdlib-js/stdlib/commit/322d1cac1bb150c548b5ad3b3086acd8e74a7bbd) - **docs:** update namespace table of contents [(#1284)](https://github.com/stdlib-js/stdlib/pull/1284) _(by stdlib-bot, Philipp Burckhardt)_
-   [`900672d`](https://github.com/stdlib-js/stdlib/commit/900672dc32fce7a9e276bff41a357cac45d852e3) - **feat:** add `hasSameValues` to namespace _(by Athan Reines)_
-   [`9d59fff`](https://github.com/stdlib-js/stdlib/commit/9d59fff0ce02b51d0a9fc94dc7d11e45c5bbac5d) - **feat:** add `array/base/assert/has-same-values` _(by Athan Reines)_
-   [`2dbcc27`](https://github.com/stdlib-js/stdlib/commit/2dbcc2798c81f960ee13c33e1daace847a55a3a2) - **docs:** update Markdown stdlib package URLs [(#1266)](https://github.com/stdlib-js/stdlib/pull/1266) _(by stdlib-bot)_
-   [`d6e93a8`](https://github.com/stdlib-js/stdlib/commit/d6e93a89926046fbdeb40f233a748cd3c1b62423) - **feat:** add `isComplex128Array` to namespace _(by Athan Reines)_
-   [`d25df9e`](https://github.com/stdlib-js/stdlib/commit/d25df9ed0cfb8c19af5dcf6df2b4d2ccde3d2d95) - **feat:** add `array/base/assert/is-complex128array` _(by Athan Reines)_
-   [`68d21bb`](https://github.com/stdlib-js/stdlib/commit/68d21bb6e1ccdc4de6784f9cd8c3c3db48a2da0d) - **feat:** add `isComplex64Array` to namespace _(by Athan Reines)_
-   [`e770600`](https://github.com/stdlib-js/stdlib/commit/e77060013a56b9f3c7c60606a8235348b95e0c85) - **feat:** add `array/base/assert/is-complex64array` _(by Athan Reines)_
-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`9502ed2`](https://github.com/stdlib-js/stdlib/commit/9502ed27e2853e312c556a48bdd7775095e66709) - **build:** replace tslint directive with eslint equivalent _(by Philipp Burckhardt)_
-   [`d73bbf4`](https://github.com/stdlib-js/stdlib/commit/d73bbf43d222f935085f8ecf7526e5f57835f74e) - **build:** replace lint directives _(by Philipp Burckhardt)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`e29732d`](https://github.com/stdlib-js/stdlib/commit/e29732dee616e2d94e91f87f78afd8aceb806017) - update minimum TypeScript version
-   [`7b7f001`](https://github.com/stdlib-js/stdlib/commit/7b7f001b6f0d25a71ae27bda216c911dfa844305) - refactor declarations to allow narrowing
-   [`05d73c2`](https://github.com/stdlib-js/stdlib/commit/05d73c2d3c4a1c0250f81da207805848196694db) - update minimum TypeScript version
-   [`0424cf8`](https://github.com/stdlib-js/stdlib/commit/0424cf8b80b1e0c50ea209d9b05730a8b950f4a5) - add `factory` method
-   [`3a88e07`](https://github.com/stdlib-js/stdlib/commit/3a88e0722e77578534f0567b9336d4f7ae83470e) - add `contains` to namespace
-   [`41aa6d6`](https://github.com/stdlib-js/stdlib/commit/41aa6d65a111dcd2dbd59f33520fd6da03de374b) - add `array/base/assert/contains`

</section>

<!-- /.features -->

<section class="bug-fixes">

### Bug Fixes

-   [`14bacb3`](https://github.com/stdlib-js/stdlib/commit/14bacb3cbfced427bcbadae7cbc649a62bb62b69) - update import path for `Collection` type definition

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`e29732d`](https://github.com/stdlib-js/stdlib/commit/e29732dee616e2d94e91f87f78afd8aceb806017): update minimum TypeScript version to 4.1

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

-   [`7b7f001`](https://github.com/stdlib-js/stdlib/commit/7b7f001b6f0d25a71ae27bda216c911dfa844305): refactor declarations to allow narrowing
-   [`05d73c2`](https://github.com/stdlib-js/stdlib/commit/05d73c2d3c4a1c0250f81da207805848196694db): update minimum TypeScript version

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`e29732d`](https://github.com/stdlib-js/stdlib/commit/e29732dee616e2d94e91f87f78afd8aceb806017) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`14bacb3`](https://github.com/stdlib-js/stdlib/commit/14bacb3cbfced427bcbadae7cbc649a62bb62b69) - **fix:** update import path for `Collection` type definition _(by Athan Reines)_
-   [`3f60609`](https://github.com/stdlib-js/stdlib/commit/3f6060905121938ee8c8a7d9c6ab93d5d82ed2be) - **test:** use strictEqual checks _(by Philipp Burckhardt)_
-   [`7b7f001`](https://github.com/stdlib-js/stdlib/commit/7b7f001b6f0d25a71ae27bda216c911dfa844305) - **feat:** refactor declarations to allow narrowing _(by Athan Reines)_
-   [`05d73c2`](https://github.com/stdlib-js/stdlib/commit/05d73c2d3c4a1c0250f81da207805848196694db) - **feat:** update minimum TypeScript version _(by Athan Reines)_
-   [`a36b160`](https://github.com/stdlib-js/stdlib/commit/a36b160369dcac098c064e78245e4437008885d2) - **docs:** update namespace table of contents [(#995)](https://github.com/stdlib-js/stdlib/pull/995) _(by stdlib-bot, Athan Reines)_
-   [`adc0378`](https://github.com/stdlib-js/stdlib/commit/adc037897e98e120616fcbb0d854ff8b24445b6d) - **docs:** update namespace TypeScript declarations [(#993)](https://github.com/stdlib-js/stdlib/pull/993) _(by stdlib-bot, Athan Reines)_
-   [`0424cf8`](https://github.com/stdlib-js/stdlib/commit/0424cf8b80b1e0c50ea209d9b05730a8b950f4a5) - **feat:** add `factory` method _(by Athan Reines)_
-   [`3a88e07`](https://github.com/stdlib-js/stdlib/commit/3a88e0722e77578534f0567b9336d4f7ae83470e) - **feat:** add `contains` to namespace _(by Athan Reines)_
-   [`41aa6d6`](https://github.com/stdlib-js/stdlib/commit/41aa6d65a111dcd2dbd59f33520fd6da03de374b) - **feat:** add `array/base/assert/contains` _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2023-02-02)

No changes reported for this release.

</section>

<!-- /.release -->

