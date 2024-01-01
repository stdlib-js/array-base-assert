// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,h=/e\+(\d)$/,p=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,h,"e+0$1"),n=y.call(n,p,"e-0$1"),r.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,l,c,s,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",c=1,s=0;s<r.length;s++)if(f(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function S(r){return"string"==typeof r}function B(r){var e,t,n;if(!S(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,F=C.toString,M=C.__defineGetter__,O=C.__defineSetter__,U=C.__lookupGetter__,N=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(r,e,t.get),a&&O&&O.call(r,e,t.set),r};var P=I;function Y(r,e,t){P(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})}function W(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function $(r){return"function"==typeof r.get&&"function"==typeof r.set}var G={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function Z(r){var e=G[r];return"function"==typeof e?e:G.default}var X={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function J(r){var e=X[r];return"function"==typeof e?e:X.default}var z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return z&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;function K(r,e){return null!=r&&H.call(r,e)}var Q="function"==typeof Symbol?Symbol:void 0,rr="function"==typeof Q?Q.toStringTag:"";var er=q()?function(r){var e,t,n;if(null==r)return D.call(r);t=r[rr],e=K(r,rr);try{r[rr]=void 0}catch(e){return D.call(r)}return n=D.call(r),e?r[rr]=t:delete r[rr],n}:function(r){return D.call(r)};var tr=Array.isArray?Array.isArray:function(r){return"[object Array]"===er(r)};function nr(r){return null!==r&&"object"==typeof r}function ir(r){return nr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function or(){return/^\s*function\s*([^(]*)/i}W(nr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!tr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(nr));var ar=/^\s*function\s*([^(]*)/i;function ur(r){var e,t,n;if(("Object"===(t=er(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=ar.exec(n.toString()))return e[1]}return ir(r)?"Buffer":t}W(or,"REGEXP",ar);var fr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},lr="function"==typeof Float64Array;var cr="function"==typeof Float64Array?Float64Array:null;var sr="function"==typeof Float64Array?Float64Array:void 0;var yr=function(){var r,e,t;if("function"!=typeof cr)return!1;try{e=new cr([1,3.14,-3.14,NaN]),t=e,r=(lr&&t instanceof Float64Array||"[object Float64Array]"===er(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")},hr="function"==typeof Float32Array;var pr=Number.POSITIVE_INFINITY,gr="function"==typeof Float32Array?Float32Array:null;var mr="function"==typeof Float32Array?Float32Array:void 0;var wr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr([1,3.14,-3.14,5e40]),t=e,r=(hr&&t instanceof Float32Array||"[object Float32Array]"===er(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===pr}catch(e){r=!1}return r}()?mr:function(){throw new Error("not implemented")},br="function"==typeof Uint32Array;var vr="function"==typeof Uint32Array?Uint32Array:null;var dr="function"==typeof Uint32Array?Uint32Array:void 0;var Er=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(br&&t instanceof Uint32Array||"[object Uint32Array]"===er(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?dr:function(){throw new Error("not implemented")},Ar="function"==typeof Int32Array;var Tr="function"==typeof Int32Array?Int32Array:null;var _r="function"==typeof Int32Array?Int32Array:void 0;var xr=function(){var r,e,t;if("function"!=typeof Tr)return!1;try{e=new Tr([1,3.14,-3.14,2147483648]),t=e,r=(Ar&&t instanceof Int32Array||"[object Int32Array]"===er(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?_r:function(){throw new Error("not implemented")},jr="function"==typeof Uint16Array;var kr="function"==typeof Uint16Array?Uint16Array:null;var Vr="function"==typeof Uint16Array?Uint16Array:void 0;var Lr=function(){var r,e,t;if("function"!=typeof kr)return!1;try{e=new kr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(jr&&t instanceof Uint16Array||"[object Uint16Array]"===er(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Vr:function(){throw new Error("not implemented")},Rr="function"==typeof Int16Array;var Sr="function"==typeof Int16Array?Int16Array:null;var Br="function"==typeof Int16Array?Int16Array:void 0;var Ir=function(){var r,e,t;if("function"!=typeof Sr)return!1;try{e=new Sr([1,3.14,-3.14,32768]),t=e,r=(Rr&&t instanceof Int16Array||"[object Int16Array]"===er(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?Br:function(){throw new Error("not implemented")},Cr="function"==typeof Uint8Array;var Fr="function"==typeof Uint8Array?Uint8Array:null;var Mr="function"==typeof Uint8Array?Uint8Array:void 0;var Or=function(){var r,e,t;if("function"!=typeof Fr)return!1;try{e=new Fr(e=[1,3.14,-3.14,256,257]),t=e,r=(Cr&&t instanceof Uint8Array||"[object Uint8Array]"===er(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Mr:function(){throw new Error("not implemented")},Ur="function"==typeof Uint8ClampedArray;var Nr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Pr="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Yr=function(){var r,e,t;if("function"!=typeof Nr)return!1;try{e=new Nr([-1,0,1,3.14,4.99,255,256]),t=e,r=(Ur&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===er(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?Pr:function(){throw new Error("not implemented")},Wr="function"==typeof Int8Array;var $r="function"==typeof Int8Array?Int8Array:null;var Gr="function"==typeof Int8Array?Int8Array:void 0;var Zr=function(){var r,e,t;if("function"!=typeof $r)return!1;try{e=new $r([1,3.14,-3.14,128]),t=e,r=(Wr&&t instanceof Int8Array||"[object Int8Array]"===er(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Gr:function(){throw new Error("not implemented")};function Xr(r){return"number"==typeof r}var Jr=Number,zr=Jr.prototype.toString;var qr=q();function Dr(r){return"object"==typeof r&&(r instanceof Jr||(qr?function(r){try{return zr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===er(r)))}function Hr(r){return Xr(r)||Dr(r)}W(Hr,"isPrimitive",Xr),W(Hr,"isObject",Dr);var Kr=Jr.NEGATIVE_INFINITY,Qr=Math.floor;function re(r){return Qr(r)===r}function ee(r){return r<pr&&r>Kr&&re(r)}function te(r){return Xr(r)&&ee(r)}function ne(r){return Dr(r)&&ee(r.valueOf())}function ie(r){return te(r)||ne(r)}function oe(r){return te(r)&&r>=0}function ae(r){return ne(r)&&r.valueOf()>=0}function ue(r){return oe(r)||ae(r)}W(ie,"isPrimitive",te),W(ie,"isObject",ne),W(ue,"isPrimitive",oe),W(ue,"isObject",ae);function fe(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&re(r.length)&&r.length>=0&&r.length<=4294967295}function le(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&re(r.length)&&r.length>=0&&r.length<=9007199254740991}var ce="function"==typeof ArrayBuffer;function se(r){return ce&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===er(r)}function ye(r){return"object"==typeof r&&null!==r&&!tr(r)}var he=/./;function pe(r){return"boolean"==typeof r}var ge=Boolean,me=Boolean.prototype.toString;var we=q();function be(r){return"object"==typeof r&&(r instanceof ge||(we?function(r){try{return me.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===er(r)))}function ve(r){return pe(r)||be(r)}function de(){return new Function("return this;")()}W(ve,"isPrimitive",pe),W(ve,"isObject",be);var Ee="object"==typeof self?self:null,Ae="object"==typeof window?window:null,Te="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},_e="object"==typeof Te?Te:null,xe="object"==typeof globalThis?globalThis:null;var je=function(r){if(arguments.length){if(!pe(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return de()}if(xe)return xe;if(Ee)return Ee;if(Ae)return Ae;if(_e)return _e;throw new Error("unexpected error. Unable to resolve global object.")}(),ke=je.document&&je.document.childNodes,Ve=Int8Array;var Le="function"==typeof he||"object"==typeof Ve||"function"==typeof ke?function(r){return ur(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?ur(r).toLowerCase():e};function Re(r){return"function"===Le(r)}function Se(r,e){if(!(this instanceof Se))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Xr(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Xr(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}W(Se,"BYTES_PER_ELEMENT",8),W(Se.prototype,"BYTES_PER_ELEMENT",8),W(Se.prototype,"byteLength",16),W(Se.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),W(Se.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Be="function"==typeof Math.fround?Math.fround:null,Ie=new wr(1);var Ce="function"==typeof Be?Be:function(r){return Ie[0]=r,Ie[0]};function Fe(r,e){if(!(this instanceof Fe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Xr(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!Xr(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Ce(r)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Ce(e)}),this}function Me(r){return r instanceof Se||r instanceof Fe||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Oe(r){return re(r/2)}function Ue(){return"function"==typeof Q&&"symbol"==typeof Q("foo")&&K(Q,"iterator")&&"symbol"==typeof Q.iterator}W(Fe,"BYTES_PER_ELEMENT",4),W(Fe.prototype,"BYTES_PER_ELEMENT",4),W(Fe.prototype,"byteLength",8),W(Fe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),W(Fe.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Ne=Ue()?Symbol.iterator:null;function Pe(r,e,t){P(r,e,{configurable:!1,enumerable:!1,get:t})}function Ye(r){return r.re}function We(r){return r.im}function $e(r,e){return new wr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Ge(r,e){return new yr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Ze(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(fe(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Me(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Ye(n),We(n))}return e}function Xe(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,fe(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Me(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Ye(o),We(o))}return n}function Je(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Me(n=e[i]))return null;r[o]=Ye(n),r[o+1]=We(n),o+=2}return r}var ze=2*wr.BYTES_PER_ELEMENT,qe=Ue();function De(r){return r instanceof rt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function He(r){return r===rt||"Complex128Array"===r.name}function Ke(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ze}function Qe(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*ze}function rt(){var r,e,t,n;if(e=arguments.length,!(this instanceof rt))return 0===e?new rt:1===e?new rt(arguments[0]):2===e?new rt(arguments[0],arguments[1]):new rt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new wr(0);else if(1===e)if(oe(arguments[0]))t=new wr(2*arguments[0]);else if(le(arguments[0]))if((n=(t=arguments[0]).length)&&tr(t)&&Me(t[0])){if(null===(t=Je(new wr(2*n),t))){if(!Oe(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new wr(arguments[0])}}else{if(Ke(t))t=$e(t,0);else if(Qe(t))t=Ge(t,0);else if(!Oe(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new wr(t)}else if(se(arguments[0])){if(!re((t=arguments[0]).byteLength/ze))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ze,t.byteLength));t=new wr(t)}else{if(!ye(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===qe)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Re(t[Ne]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Re((t=t[Ne]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Ze(t))instanceof Error)throw t;t=new wr(t)}else{if(!se(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!oe(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!re(r/ze))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ze,r));if(2===e){if(!re((n=t.byteLength-r)/ze))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ze,n));t=new wr(t,r)}else{if(!oe(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ze>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ze));t=new wr(t,r,2*n)}}return W(this,"_buffer",t),W(this,"_length",t.length/2),this}function et(r){return r.re}function tt(r){return r.im}function nt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(fe(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Me(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(et(n),tt(n))}return e}function it(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,fe(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Me(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(et(o),tt(o))}return n}function ot(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Me(n=e[i]))return null;r[o]=et(n),r[o+1]=tt(n),o+=2}return r}W(rt,"BYTES_PER_ELEMENT",ze),W(rt,"name","Complex64Array"),W(rt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Re(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!He(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Re(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(De(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Me(c=n.call(e,r.get(s),s)))o[y]=Ye(c),o[y+1]=We(c);else{if(!(fe(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(le(r)){if(n){for(f=r.length,u=r.get&&r.set?Z("default"):J("default"),s=0;s<f;s++)if(!Me(u(r,s))){l=!0;break}if(l){if(!Oe(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Me(c=n.call(e,u(r,s),s)))o[y]=Ye(c),o[y+1]=We(c);else{if(!(fe(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ye(r)&&qe&&Re(r[Ne])){if(!Re((o=r[Ne]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?Xe(o,n,e):Ze(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),W(rt,"of",(function(){var r,e;if(!Re(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!He(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Pe(rt.prototype,"buffer",(function(){return this._buffer.buffer})),Pe(rt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Pe(rt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),W(rt.prototype,"BYTES_PER_ELEMENT",rt.BYTES_PER_ELEMENT),W(rt.prototype,"copyWithin",(function(r,e){if(!De(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),W(rt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!De(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,W(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Fe(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),W(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ne&&W(t,Ne,(function(){return e.entries()})),t})),W(rt.prototype,"get",(function(r){var e;if(!De(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!oe(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Fe((e=this._buffer)[r*=2],e[r+1])})),Pe(rt.prototype,"length",(function(){return this._length})),W(rt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!De(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!oe(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Me(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Ye(r),void(n[t+1]=We(r))}if(De(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*ze,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new wr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!le(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Me(r[f])){o=!0;break}if(o){if(!Oe(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*ze,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new wr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Ye(u),n[t+1]=We(u),t+=2}}));var at=2*yr.BYTES_PER_ELEMENT,ut=Ue();function ft(r){return r instanceof yt||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function lt(r){return r===yt||"Complex64Array"===r.name}function ct(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===at/2}function st(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===at}function yt(){var r,e,t,n;if(e=arguments.length,!(this instanceof yt))return 0===e?new yt:1===e?new yt(arguments[0]):2===e?new yt(arguments[0],arguments[1]):new yt(arguments[0],arguments[1],arguments[2]);if(0===e)t=new yr(0);else if(1===e)if(oe(arguments[0]))t=new yr(2*arguments[0]);else if(le(arguments[0]))if((n=(t=arguments[0]).length)&&tr(t)&&Me(t[0])){if(null===(t=ot(new yr(2*n),t))){if(!Oe(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new yr(arguments[0])}}else{if(ct(t))t=$e(t,0);else if(st(t))t=Ge(t,0);else if(!Oe(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new yr(t)}else if(se(arguments[0])){if(!re((t=arguments[0]).byteLength/at))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",at,t.byteLength));t=new yr(t)}else{if(!ye(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ut)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!Re(t[Ne]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!Re((t=t[Ne]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=nt(t))instanceof Error)throw t;t=new yr(t)}else{if(!se(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!oe(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!re(r/at))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",at,r));if(2===e){if(!re((n=t.byteLength-r)/at))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",at,n));t=new yr(t,r)}else{if(!oe(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*at>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*at));t=new yr(t,r,2*n)}}return W(this,"_buffer",t),W(this,"_length",t.length/2),this}W(yt,"BYTES_PER_ELEMENT",at),W(yt,"name","Complex128Array"),W(yt,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!Re(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!Re(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ft(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Me(c=n.call(e,r.get(s),s)))o[y]=et(c),o[y+1]=tt(c);else{if(!(fe(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(le(r)){if(n){for(f=r.length,u=r.get&&r.set?Z("default"):J("default"),s=0;s<f;s++)if(!Me(u(r,s))){l=!0;break}if(l){if(!Oe(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Me(c=n.call(e,u(r,s),s)))o[y]=et(c),o[y+1]=tt(c);else{if(!(fe(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(ye(r)&&ut&&Re(r[Ne])){if(!Re((o=r[Ne]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?it(o,n,e):nt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),W(yt,"of",(function(){var r,e;if(!Re(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!lt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Pe(yt.prototype,"buffer",(function(){return this._buffer.buffer})),Pe(yt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Pe(yt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),W(yt.prototype,"BYTES_PER_ELEMENT",yt.BYTES_PER_ELEMENT),W(yt.prototype,"copyWithin",(function(r,e){if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),W(yt.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,W(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Se(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),W(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),Ne&&W(t,Ne,(function(){return e.entries()})),t})),W(yt.prototype,"get",(function(r){var e;if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!oe(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Se((e=this._buffer)[r*=2],e[r+1])})),Pe(yt.prototype,"length",(function(){return this._length})),W(yt.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!oe(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Me(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=et(r),void(n[t+1]=tt(r))}if(ft(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*at,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new yr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!le(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Me(r[f])){o=!0;break}if(o){if(!Oe(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*at,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new yr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=et(u),n[t+1]=tt(u),t+=2}}));var ht=[yr,wr,xr,Er,Ir,Lr,Zr,Or,Yr,rt,yt],pt=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],gt=pt.length;function mt(r){var e;if(tr(r))return"generic";if(ir(r))return null;for(e=0;e<gt;e++)if(r instanceof ht[e])return pt[e];return fr[ur(r)]||null}function wt(r,e){var t,n,i,o;for(i=mt(r),n=$(r)?Z(i):J(i),t=r.length,o=0;o<t;o++)if(n(r,o)===e)return!0;return!1}W(wt,"factory",(function(r){var e,t,n;if(!le(r))throw new TypeError(B("invalid argument. Must provide an array-like object. Value: `%s`.",r));return n=mt(r),$(r)&&(e=Z(n)),t=r.length,void 0===e?function(e){var n;for(n=0;n<t;n++)if(r[n]===e)return!0;return!1}:function(n){var i;for(i=0;i<t;i++)if(e(r,i)===n)return!0;return!1}}));var bt={};Y(bt,"contains",wt),Y(bt,"isAccessorArray",$);export{wt as contains,bt as default,$ as isAccessorArray};
//# sourceMappingURL=mod.js.map
