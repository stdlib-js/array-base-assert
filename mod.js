// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,e,t){var l,c,s,y;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(r,e)||f.call(r,e)?(l=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=l):r[e]=t.value),s="get"in t,y="set"in t,c&&(s||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(r,e,t.get),y&&a&&a.call(r,e,t.set),r};var l=e;function c(r,e,t){l(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function s(r,e,t){l(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return"function"==typeof r.get&&"function"==typeof r.set}var p={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function h(r){var e=p[r];return"function"==typeof e?e:p.default}var g={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};var m="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function w(){return m&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function d(r,e){return null!=r&&v.call(r,e)}var E="function"==typeof Symbol?Symbol.toStringTag:"";var A=w()?function(r){var e,t,n;if(null==r)return b.call(r);t=r[E],e=d(r,E);try{r[E]=void 0}catch(e){return b.call(r)}return n=b.call(r),e?r[E]=t:delete r[E],n}:function(r){return b.call(r)};var _=Array.isArray?Array.isArray:function(r){return"[object Array]"===A(r)};function T(r){return null!==r&&"object"==typeof r}function x(r){return T(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function j(){return/^\s*function\s*([^(]*)/i}s(T,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!_(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(T));var k=/^\s*function\s*([^(]*)/i;function V(r){var e,t,n;if(("Object"===(t=A(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=k.exec(n.toString()))return e[1]}return x(r)?"Buffer":t}s(j,"REGEXP",k);var S={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},L="function"==typeof Float64Array;var R="function"==typeof Float64Array?Float64Array:null;var B="function"==typeof Float64Array?Float64Array:void 0;var I=function(){var r,e,t;if("function"!=typeof R)return!1;try{e=new R([1,3.14,-3.14,NaN]),t=e,r=(L&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?B:function(){throw new Error("not implemented")},C="function"==typeof Float32Array;var F=Number.POSITIVE_INFINITY,M="function"==typeof Float32Array?Float32Array:null;var O="function"==typeof Float32Array?Float32Array:void 0;var U=function(){var r,e,t;if("function"!=typeof M)return!1;try{e=new M([1,3.14,-3.14,5e40]),t=e,r=(C&&t instanceof Float32Array||"[object Float32Array]"===A(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===F}catch(e){r=!1}return r}()?O:function(){throw new Error("not implemented")},N="function"==typeof Uint32Array;var P="function"==typeof Uint32Array?Uint32Array:null;var Y="function"==typeof Uint32Array?Uint32Array:void 0;var W=function(){var r,e,t;if("function"!=typeof P)return!1;try{e=new P(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(N&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Y:function(){throw new Error("not implemented")},$="function"==typeof Int32Array;var G="function"==typeof Int32Array?Int32Array:null;var Z="function"==typeof Int32Array?Int32Array:void 0;var X=function(){var r,e,t;if("function"!=typeof G)return!1;try{e=new G([1,3.14,-3.14,2147483648]),t=e,r=($&&t instanceof Int32Array||"[object Int32Array]"===A(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Z:function(){throw new Error("not implemented")},J="function"==typeof Uint16Array;var z="function"==typeof Uint16Array?Uint16Array:null;var q="function"==typeof Uint16Array?Uint16Array:void 0;var D=function(){var r,e,t;if("function"!=typeof z)return!1;try{e=new z(e=[1,3.14,-3.14,65536,65537]),t=e,r=(J&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?q:function(){throw new Error("not implemented")},H="function"==typeof Int16Array;var K="function"==typeof Int16Array?Int16Array:null;var Q="function"==typeof Int16Array?Int16Array:void 0;var rr=function(){var r,e,t;if("function"!=typeof K)return!1;try{e=new K([1,3.14,-3.14,32768]),t=e,r=(H&&t instanceof Int16Array||"[object Int16Array]"===A(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Q:function(){throw new Error("not implemented")},er="function"==typeof Uint8Array;var tr="function"==typeof Uint8Array?Uint8Array:null;var nr="function"==typeof Uint8Array?Uint8Array:void 0;var ir=function(){var r,e,t;if("function"!=typeof tr)return!1;try{e=new tr(e=[1,3.14,-3.14,256,257]),t=e,r=(er&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")},or="function"==typeof Uint8ClampedArray;var ar="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var ur="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var fr=function(){var r,e,t;if("function"!=typeof ar)return!1;try{e=new ar([-1,0,1,3.14,4.99,255,256]),t=e,r=(or&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===A(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")},lr="function"==typeof Int8Array;var cr="function"==typeof Int8Array?Int8Array:null;var sr="function"==typeof Int8Array?Int8Array:void 0;var yr=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr([1,3.14,-3.14,128]),t=e,r=(lr&&t instanceof Int8Array||"[object Int8Array]"===A(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};function pr(r){return"number"==typeof r}var hr=Number,gr=hr.prototype.toString;var mr=w();function wr(r){return"object"==typeof r&&(r instanceof hr||(mr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===A(r)))}function br(r){return pr(r)||wr(r)}s(br,"isPrimitive",pr),s(br,"isObject",wr);var vr=hr.NEGATIVE_INFINITY,dr=Math.floor;function Er(r){return dr(r)===r}function Ar(r){return r<F&&r>vr&&Er(r)}function _r(r){return pr(r)&&Ar(r)}function Tr(r){return wr(r)&&Ar(r.valueOf())}function xr(r){return _r(r)||Tr(r)}function jr(r){return _r(r)&&r>=0}function kr(r){return Tr(r)&&r.valueOf()>=0}function Vr(r){return jr(r)||kr(r)}s(xr,"isPrimitive",_r),s(xr,"isObject",Tr),s(Vr,"isPrimitive",jr),s(Vr,"isObject",kr);function Sr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Er(r.length)&&r.length>=0&&r.length<=4294967295}function Lr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Er(r.length)&&r.length>=0&&r.length<=9007199254740991}var Rr="function"==typeof ArrayBuffer;function Br(r){return Rr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===A(r)}function Ir(r){return"object"==typeof r&&null!==r&&!_(r)}var Cr=/./;function Fr(r){return"boolean"==typeof r}var Mr=Boolean.prototype.toString;var Or=w();function Ur(r){return"object"==typeof r&&(r instanceof Boolean||(Or?function(r){try{return Mr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===A(r)))}function Nr(r){return Fr(r)||Ur(r)}function Pr(){return new Function("return this;")()}s(Nr,"isPrimitive",Fr),s(Nr,"isObject",Ur);var Yr="object"==typeof self?self:null,Wr="object"==typeof window?window:null,$r="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Gr="object"==typeof $r?$r:null;var Zr=function(r){if(arguments.length){if(!Fr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Pr()}if(Yr)return Yr;if(Wr)return Wr;if(Gr)return Gr;throw new Error("unexpected error. Unable to resolve global object.")}(),Xr=Zr.document&&Zr.document.childNodes,Jr=Int8Array;var zr="function"==typeof Cr||"object"==typeof Jr||"function"==typeof Xr?function(r){return V(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?V(r).toLowerCase():e};function qr(r){return"function"===zr(r)}function Dr(r,e){if(!(this instanceof Dr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!pr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!pr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}s(Dr,"BYTES_PER_ELEMENT",8),s(Dr.prototype,"BYTES_PER_ELEMENT",8),s(Dr.prototype,"byteLength",16),s(Dr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),s(Dr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Hr="function"==typeof Math.fround?Math.fround:null,Kr=new U(1);var Qr="function"==typeof Hr?Hr:function(r){return Kr[0]=r,Kr[0]};function re(r,e){if(!(this instanceof re))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!pr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!pr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Qr(r)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Qr(e)}),this}function ee(r){return r instanceof Dr||r instanceof re||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function te(r){return Er(r/2)}function ne(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&d(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}s(re,"BYTES_PER_ELEMENT",4),s(re.prototype,"BYTES_PER_ELEMENT",4),s(re.prototype,"byteLength",8),s(re.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),s(re.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var ie=ne()?Symbol.iterator:null;function oe(r,e,t){l(r,e,{configurable:!1,enumerable:!1,get:t})}function ae(r){return r.re}function ue(r){return r.im}function fe(r,e){return new U(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function le(r,e){return new I(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function ce(r,e){return r[e]}function se(r,e){return r.get(e)}function ye(r,e,t){r[e]=t}function pe(r,e,t){r.set(t,e)}function he(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?se:ce,setter:e?pe:ye}}function ge(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Sr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!ee(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(ae(n),ue(n))}return e}function me(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Sr(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!ee(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(ae(o),ue(o))}return n}function we(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!ee(n=e[i]))return null;r[o]=ae(n),r[o+1]=ue(n),o+=2}return r}var be=2*U.BYTES_PER_ELEMENT,ve=ne();function de(r){return r instanceof Te||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Ee(r){return r===Te||"Complex128Array"===r.name}function Ae(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===be}function _e(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*be}function Te(){var r,e,t,n;if(e=arguments.length,!(this instanceof Te))return 0===e?new Te:1===e?new Te(arguments[0]):2===e?new Te(arguments[0],arguments[1]):new Te(arguments[0],arguments[1],arguments[2]);if(0===e)t=new U(0);else if(1===e)if(jr(arguments[0]))t=new U(2*arguments[0]);else if(Lr(arguments[0]))if((n=(t=arguments[0]).length)&&_(t)&&ee(t[0])){if(null===(t=we(new U(2*n),t))){if(!te(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new U(arguments[0])}}else{if(Ae(t))t=fe(t,0);else if(_e(t))t=le(t,0);else if(!te(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new U(t)}else if(Br(arguments[0])){if(!Er((t=arguments[0]).byteLength/be))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+be+". Byte length: `"+t.byteLength+"`.");t=new U(t)}else{if(!Ir(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===ve)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!qr(t[ie]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!qr((t=t[ie]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=ge(t))instanceof Error)throw t;t=new U(t)}else{if(!Br(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!jr(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Er(r/be))throw new RangeError("invalid argument. Byte offset must be a multiple of "+be+". Value: `"+r+"`.");if(2===e){if(!Er((n=t.byteLength-r)/be))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+be+". View byte length: `"+n+"`.");t=new U(t,r)}else{if(!jr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*be>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*be+"`.");t=new U(t,r,2*n)}}return s(this,"_buffer",t),s(this,"_length",t.length/2),this}function xe(r){return r.re}function je(r){return r.im}function ke(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Sr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!ee(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(xe(n),je(n))}return e}function Ve(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Sr(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!ee(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(xe(o),je(o))}return n}function Se(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!ee(n=e[i]))return null;r[o]=xe(n),r[o+1]=je(n),o+=2}return r}s(Te,"BYTES_PER_ELEMENT",be),s(Te,"name","Complex64Array"),s(Te,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s;if(!qr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ee(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!qr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(de(r)){if(u=r.length,n){for(o=(i=new this(u))._buffer,s=0,c=0;c<u;c++){if(ee(l=n.call(e,r.get(c),c)))o[s]=ae(l),o[s+1]=ue(l);else{if(!(Sr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[s]=l[0],o[s+1]=l[1]}s+=2}return i}return new this(r)}if(Lr(r)){if(n){for(u=r.length,a=he(r),c=0;c<u;c++)if(!ee(a.getter(r,c))){f=!0;break}if(f){if(!te(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(e,a.getter(r,c),c);return i}for(o=(i=new this(u))._buffer,s=0,c=0;c<u;c++){if(ee(l=n.call(e,a.getter(r,c),c)))o[s]=ae(l),o[s+1]=ue(l);else{if(!(Sr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[s]=l[0],o[s+1]=l[1]}s+=2}return i}return new this(r)}if(Ir(r)&&ve&&qr(r[ie])){if(!qr((o=r[ie]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?me(o,n,e):ge(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),s(Te,"of",(function(){var r,e;if(!qr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ee(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),oe(Te.prototype,"buffer",(function(){return this._buffer.buffer})),oe(Te.prototype,"byteLength",(function(){return this._buffer.byteLength})),oe(Te.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),s(Te.prototype,"BYTES_PER_ELEMENT",Te.BYTES_PER_ELEMENT),s(Te.prototype,"copyWithin",(function(r,e){if(!de(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),s(Te.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!de(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,s(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new re(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),s(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),ie&&s(t,ie,(function(){return e.entries()})),t})),s(Te.prototype,"get",(function(r){var e;if(!de(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!jr(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new re((e=this._buffer)[r*=2],e[r+1])})),oe(Te.prototype,"length",(function(){return this._length})),s(Te.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!de(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!jr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(ee(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=ae(r),void(n[t+1]=ue(r))}if(de(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*be,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new U(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Lr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!ee(r[f])){o=!0;break}if(o){if(!te(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*be,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new U(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ae(u),n[t+1]=ue(u),t+=2}}));var Le=2*I.BYTES_PER_ELEMENT,Re=ne();function Be(r){return r instanceof Me||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Ie(r){return r===Me||"Complex64Array"===r.name}function Ce(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Le/2}function Fe(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Le}function Me(){var r,e,t,n;if(e=arguments.length,!(this instanceof Me))return 0===e?new Me:1===e?new Me(arguments[0]):2===e?new Me(arguments[0],arguments[1]):new Me(arguments[0],arguments[1],arguments[2]);if(0===e)t=new I(0);else if(1===e)if(jr(arguments[0]))t=new I(2*arguments[0]);else if(Lr(arguments[0]))if((n=(t=arguments[0]).length)&&_(t)&&ee(t[0])){if(null===(t=Se(new I(2*n),t))){if(!te(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new I(arguments[0])}}else{if(Ce(t))t=fe(t,0);else if(Fe(t))t=le(t,0);else if(!te(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new I(t)}else if(Br(arguments[0])){if(!Er((t=arguments[0]).byteLength/Le))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Le+". Byte length: `"+t.byteLength+"`.");t=new I(t)}else{if(!Ir(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Re)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!qr(t[ie]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!qr((t=t[ie]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=ke(t))instanceof Error)throw t;t=new I(t)}else{if(!Br(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!jr(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Er(r/Le))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Le+". Value: `"+r+"`.");if(2===e){if(!Er((n=t.byteLength-r)/Le))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Le+". View byte length: `"+n+"`.");t=new I(t,r)}else{if(!jr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Le>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Le+"`.");t=new I(t,r,2*n)}}return s(this,"_buffer",t),s(this,"_length",t.length/2),this}s(Me,"BYTES_PER_ELEMENT",Le),s(Me,"name","Complex128Array"),s(Me,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s;if(!qr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ie(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!qr(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(Be(r)){if(u=r.length,n){for(o=(i=new this(u))._buffer,s=0,c=0;c<u;c++){if(ee(l=n.call(e,r.get(c),c)))o[s]=xe(l),o[s+1]=je(l);else{if(!(Sr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[s]=l[0],o[s+1]=l[1]}s+=2}return i}return new this(r)}if(Lr(r)){if(n){for(u=r.length,a=he(r),c=0;c<u;c++)if(!ee(a.getter(r,c))){f=!0;break}if(f){if(!te(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(e,a.getter(r,c),c);return i}for(o=(i=new this(u))._buffer,s=0,c=0;c<u;c++){if(ee(l=n.call(e,a.getter(r,c),c)))o[s]=xe(l),o[s+1]=je(l);else{if(!(Sr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[s]=l[0],o[s+1]=l[1]}s+=2}return i}return new this(r)}if(Ir(r)&&Re&&qr(r[ie])){if(!qr((o=r[ie]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Ve(o,n,e):ke(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),s(Me,"of",(function(){var r,e;if(!qr(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ie(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),oe(Me.prototype,"buffer",(function(){return this._buffer.buffer})),oe(Me.prototype,"byteLength",(function(){return this._buffer.byteLength})),oe(Me.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),s(Me.prototype,"BYTES_PER_ELEMENT",Me.BYTES_PER_ELEMENT),s(Me.prototype,"copyWithin",(function(r,e){if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),s(Me.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,s(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Dr(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),s(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),ie&&s(t,ie,(function(){return e.entries()})),t})),s(Me.prototype,"get",(function(r){var e;if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!jr(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new Dr((e=this._buffer)[r*=2],e[r+1])})),oe(Me.prototype,"length",(function(){return this._length})),s(Me.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!Be(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!jr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(ee(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=xe(r),void(n[t+1]=je(r))}if(Be(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Le,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new I(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Lr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!ee(r[f])){o=!0;break}if(o){if(!te(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Le,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new I(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=xe(u),n[t+1]=je(u),t+=2}}));var Oe=[I,U,X,W,rr,D,yr,ir,fr,Te,Me],Ue=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Ne=Ue.length;function Pe(r){var e;if(_(r))return"generic";if(x(r))return null;for(e=0;e<Ne;e++)if(r instanceof Oe[e])return Ue[e];return S[V(r)]||null}function Ye(r,e){var t,n,i,o;for(i=Pe(r),n=y(r)?h(i):function(r){var e=g[r];return"function"==typeof e?e:g.default}(i),t=r.length,o=0;o<t;o++)if(n(r,o)===e)return!0;return!1}function We(r){return"number"==typeof r}function $e(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Ge(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+$e(i):$e(i)+r,n&&(r="-"+r)),r}var Ze=String.prototype.toLowerCase,Xe=String.prototype.toUpperCase;function Je(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!We(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Ge(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Ge(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===Xe.call(r.specifier)?Xe.call(t):Ze.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ze(r){return"string"==typeof r}var qe=Math.abs,De=String.prototype.toLowerCase,He=String.prototype.toUpperCase,Ke=String.prototype.replace,Qe=/e\+(\d)$/,rt=/e-(\d)$/,et=/^(\d+)$/,tt=/^(\d+)e/,nt=/\.0$/,it=/\.0*e/,ot=/(\..*[^0])0*e/;function at(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!We(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":qe(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Ke.call(t,ot,"$1e"),t=Ke.call(t,it,"e"),t=Ke.call(t,nt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Ke.call(t,Qe,"e+0$1"),t=Ke.call(t,rt,"e-0$1"),r.alternate&&(t=Ke.call(t,et,"$1."),t=Ke.call(t,tt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===He.call(r.specifier)?He.call(t):De.call(t)}function ut(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function ft(r,e,t){var n=e-r.length;return n<0?r:r=t?r+ut(n):ut(n)+r}var lt=String.fromCharCode,ct=isNaN,st=Array.isArray;function yt(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function pt(r){var e,t,n,i,o,a,u,f,l;if(!st(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,f=0;f<r.length;f++)if(ze(n=r[f]))a+=n;else{if(e=void 0!==n.precision,!(n=yt(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,ct(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,ct(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=Je(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!ct(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=ct(o)?String(n.arg):lt(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=at(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Ge(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ft(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var ht=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function gt(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function mt(r){var e,t,n,i;for(t=[],i=0,n=ht.exec(r);n;)(e=r.slice(i,ht.lastIndex-n[0].length)).length&&t.push(e),t.push(gt(n)),i=ht.lastIndex,n=ht.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function wt(r){return"string"==typeof r}function bt(r){var e,t,n;if(!wt(r))throw new TypeError(bt("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=mt(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return pt.apply(null,t)}s(Ye,"factory",(function(r){var e,t,n;if(!Lr(r))throw new TypeError(bt("invalid argument. Must provide an array-like object. Value: `%s`.",r));return n=Pe(r),y(r)&&(e=h(n)),t=r.length,void 0===e?function(e){var n;for(n=0;n<t;n++)if(r[n]===e)return!0;return!1}:function(n){var i;for(i=0;i<t;i++)if(e(r,i)===n)return!0;return!1}}));var vt={};c(vt,"contains",Ye),c(vt,"isAccessorArray",y);export{Ye as contains,vt as default,y as isAccessorArray};
//# sourceMappingURL=mod.js.map