// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).resolve=r()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var r=void 0!==Object.keys;function n(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var e=n();var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function u(t,r){return null!=t&&i.call(t,r)}var a="function"==typeof Symbol?Symbol:void 0,c="function"==typeof a?a.toStringTag:"";var l,f=e&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return o.call(t);n=t[c],r=u(t,c);try{t[c]=void 0}catch(r){return o.call(t)}return e=o.call(t),r?t[c]=n:delete t[c],e}:function(t){return o.call(t)};function p(t){return"[object Arguments]"===f(t)}l=function(){return p(arguments)}();var s=l,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function b(t){return"number"==typeof t}function v(t){var r,n="";for(r=0;r<t;r++)n+="0";return n}function d(t,r,n){var e=!1,o=r-t.length;return o<0||(function(t){return"-"===t[0]}(t)&&(e=!0,t=t.substr(1)),t=n?t+v(o):v(o)+t,e&&(t="-"+t)),t}var m=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function w(t){var r,n,e;switch(t.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=t.arg,e=parseInt(n,10),!isFinite(e)){if(!b(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===t.specifier||10!==r)&&(e=4294967295+e+1),e<0?(n=(-e).toString(r),t.precision&&(n=d(n,t.precision,t.padRight)),n="-"+n):(n=e.toString(r),e||t.precision?t.precision&&(n=d(n,t.precision,t.padRight)):n="",t.sign&&(n=t.sign+n)),16===r&&(t.alternate&&(n="0x"+n),n=t.specifier===h.call(t.specifier)?h.call(n):m.call(n)),8===r&&t.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function S(t){return"string"==typeof t}var j=Math.abs,O=String.prototype.toLowerCase,T=String.prototype.toUpperCase,_=String.prototype.replace,x=/e\+(\d)$/,E=/e-(\d)$/,I=/^(\d+)$/,k=/^(\d+)e/,P=/\.0$/,N=/\.0*e/,V=/(\..*[^0])0*e/;function A(t){var r,n,e=parseFloat(t.arg);if(!isFinite(e)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+n);e=t.arg}switch(t.specifier){case"e":case"E":n=e.toExponential(t.precision);break;case"f":case"F":n=e.toFixed(t.precision);break;case"g":case"G":j(e)<1e-4?((r=t.precision)>0&&(r-=1),n=e.toExponential(r)):n=e.toPrecision(t.precision),t.alternate||(n=_.call(n,V,"$1e"),n=_.call(n,N,"e"),n=_.call(n,P,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return n=_.call(n,x,"e+0$1"),n=_.call(n,E,"e-0$1"),t.alternate&&(n=_.call(n,I,"$1."),n=_.call(n,k,"$1.e")),e>=0&&t.sign&&(n=t.sign+n),n=t.specifier===T.call(t.specifier)?T.call(n):O.call(n)}function F(t){var r,n="";for(r=0;r<t;r++)n+=" ";return n}function $(t,r,n){var e=r-t.length;return e<0?t:t=n?t+F(e):F(e)+t}var C=String.fromCharCode,B=isNaN,L=Array.isArray;function G(t){var r={};return r.specifier=t.specifier,r.precision=void 0===t.precision?1:t.precision,r.width=t.width,r.flags=t.flags||"",r.mapping=t.mapping,r}function M(t){var r,n,e,o,i,u,a,c,l;if(!L(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",a=1,c=0;c<t.length;c++)if(S(e=t[c]))u+=e;else{if(r=void 0!==e.precision,!(e=G(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+e+"`.");for(e.mapping&&(a=e.mapping),n=e.flags,l=0;l<n.length;l++)switch(o=n.charAt(l)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===e.width){if(e.width=parseInt(arguments[a],10),a+=1,B(e.width))throw new TypeError("the argument for * width at position "+a+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(r&&"*"===e.precision){if(e.precision=parseInt(arguments[a],10),a+=1,B(e.precision))throw new TypeError("the argument for * precision at position "+a+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,r=!1)}switch(e.arg=arguments[a],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(e.padZeros=!1),e.arg=w(e);break;case"s":e.maxWidth=r?e.precision:-1;break;case"c":if(!B(e.arg)){if((i=parseInt(e.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=B(i)?String(e.arg):C(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(e.precision=6),e.arg=A(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=d(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=$(e.arg,e.width,e.padRight)),u+=e.arg||"",a+=1}return u}var R=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(t){var r={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(r.precision="1"),r}function Y(t){var r,n,e,o;for(n=[],o=0,e=R.exec(t);e;)(r=t.slice(o,R.lastIndex-e[0].length)).length&&n.push(r),n.push(W(e)),o=R.lastIndex,e=R.exec(t);return(r=t.slice(o)).length&&n.push(r),n}function X(t){return"string"==typeof t}function Z(t){var r,n;if(!X(t))throw new TypeError(Z("invalid argument. First argument must be a string. Value: `%s`.",t));for(r=[Y(t)],n=1;n<arguments.length;n++)r.push(arguments[n]);return M.apply(null,r)}var U,H=Object.prototype,z=H.toString,D=H.__defineGetter__,q=H.__defineSetter__,J=H.__lookupGetter__,K=H.__lookupSetter__;U=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?g:function(t,r,n){var e,o,i,u;if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(Z("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof n||null===n||"[object Array]"===z.call(n))throw new TypeError(Z("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((o="value"in n)&&(J.call(t,r)||K.call(t,r)?(e=t.__proto__,t.__proto__=H,delete t[r],t[r]=n.value,t.__proto__=e):t[r]=n.value),i="get"in n,u="set"in n,o&&(i||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&D&&D.call(t,r,n.get),u&&q&&q.call(t,r,n.set),t};var Q=U;function tt(t,r,n){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function rt(t){return"string"==typeof t}var nt=n();function et(){return nt&&"symbol"==typeof Symbol.toStringTag}var ot=Object.prototype.toString;var it="function"==typeof Symbol?Symbol:void 0,ut="function"==typeof it?it.toStringTag:"";var at=et()?function(t){var r,n,e;if(null==t)return ot.call(t);n=t[ut],r=u(t,ut);try{t[ut]=void 0}catch(r){return ot.call(t)}return e=ot.call(t),r?t[ut]=n:delete t[ut],e}:function(t){return ot.call(t)},ct=String.prototype.valueOf;var lt=et();function ft(t){return"object"==typeof t&&(t instanceof String||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object String]"===at(t)))}function pt(t){return rt(t)||ft(t)}function st(t,r,n){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function yt(t){return"number"==typeof t}tt(pt,"isPrimitive",rt),tt(pt,"isObject",ft);var gt=n();function bt(){return gt&&"symbol"==typeof Symbol.toStringTag}var vt=Object.prototype.toString;var dt="function"==typeof Symbol?Symbol:void 0,mt="function"==typeof dt?dt.toStringTag:"";var ht=bt()?function(t){var r,n,e;if(null==t)return vt.call(t);n=t[mt],r=u(t,mt);try{t[mt]=void 0}catch(r){return vt.call(t)}return e=vt.call(t),r?t[mt]=n:delete t[mt],e}:function(t){return vt.call(t)},wt=Number,St=wt.prototype.toString;var jt=bt();function Ot(t){return"object"==typeof t&&(t instanceof wt||(jt?function(t){try{return St.call(t),!0}catch(t){return!1}}(t):"[object Number]"===ht(t)))}function Tt(t){return yt(t)||Ot(t)}function _t(t){return t!=t}function xt(t){return yt(t)&&_t(t)}function Et(t){return Ot(t)&&_t(t.valueOf())}function It(t){return xt(t)||Et(t)}function kt(t,r,n){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Pt(t){return"number"==typeof t}st(Tt,"isPrimitive",yt),st(Tt,"isObject",Ot),st(It,"isPrimitive",xt),st(It,"isObject",Et);var Nt=n();function Vt(){return Nt&&"symbol"==typeof Symbol.toStringTag}var At=Object.prototype.toString;var Ft="function"==typeof Symbol?Symbol:void 0,$t="function"==typeof Ft?Ft.toStringTag:"";var Ct=Vt()?function(t){var r,n,e;if(null==t)return At.call(t);n=t[$t],r=u(t,$t);try{t[$t]=void 0}catch(r){return At.call(t)}return e=At.call(t),r?t[$t]=n:delete t[$t],e}:function(t){return At.call(t)},Bt=Number,Lt=Bt.prototype.toString;var Gt=Vt();function Mt(t){return"object"==typeof t&&(t instanceof Bt||(Gt?function(t){try{return Lt.call(t),!0}catch(t){return!1}}(t):"[object Number]"===Ct(t)))}function Rt(t){return Pt(t)||Mt(t)}kt(Rt,"isPrimitive",Pt),kt(Rt,"isObject",Mt);var Wt=Number.POSITIVE_INFINITY,Yt=Bt.NEGATIVE_INFINITY,Xt=Math.floor;function Zt(t){return t<Wt&&t>Yt&&Xt(r=t)===r;var r}function Ut(t){return Pt(t)&&Zt(t)}function Ht(t){return Mt(t)&&Zt(t.valueOf())}function zt(t){return Ut(t)||Ht(t)}kt(zt,"isPrimitive",Ut),kt(zt,"isObject",Ht);var Dt=Object.prototype.propertyIsEnumerable;var qt=!Dt.call("beep","0");function Jt(t,r){var n;return null!=t&&(!(n=Dt.call(t,r))&&qt&&pt(t)?!xt(r=+r)&&Ut(r)&&r>=0&&r<t.length:n)}var Kt=n();var Qt=Object.prototype.toString;var tr="function"==typeof Symbol?Symbol:void 0,rr="function"==typeof tr?tr.toStringTag:"";var nr=Kt&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return Qt.call(t);n=t[rr],r=u(t,rr);try{t[rr]=void 0}catch(r){return Qt.call(t)}return e=Qt.call(t),r?t[rr]=n:delete t[rr],e}:function(t){return Qt.call(t)};var er=Array.isArray?Array.isArray:function(t){return"[object Array]"===nr(t)},or=Math.floor;var ir=s?p:function(t){return null!==t&&"object"==typeof t&&!er(t)&&"number"==typeof t.length&&(r=t.length,or(r)===r)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Jt(t,"callee");var r},ur=Array.prototype.slice;function ar(t){return null!==t&&"object"==typeof t}!function(t,r,n){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}(ar,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(Z("invalid argument. Must provide a function. Value: `%s`.",t));return function(r){var n,e;if(!er(r))return!1;if(0===(n=r.length))return!1;for(e=0;e<n;e++)if(!1===t(r[e]))return!1;return!0}}(ar));var cr=Jt((function(){}),"prototype"),lr=!Jt({toString:null},"toString"),fr=Math.floor;function pr(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&(r=t.length,fr(r)===r)&&t.length>=0&&t.length<=9007199254740991;var r}function sr(t,r,n){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function yr(t){return"number"==typeof t}var gr=n();function br(){return gr&&"symbol"==typeof Symbol.toStringTag}var vr=Object.prototype.toString;var dr="function"==typeof Symbol?Symbol:void 0,mr="function"==typeof dr?dr.toStringTag:"";var hr=br()?function(t){var r,n,e;if(null==t)return vr.call(t);n=t[mr],r=u(t,mr);try{t[mr]=void 0}catch(r){return vr.call(t)}return e=vr.call(t),r?t[mr]=n:delete t[mr],e}:function(t){return vr.call(t)},wr=Number,Sr=wr.prototype.toString;var jr=br();function Or(t){return"object"==typeof t&&(t instanceof wr||(jr?function(t){try{return Sr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===hr(t)))}function Tr(t){return yr(t)||Or(t)}sr(Tr,"isPrimitive",yr),sr(Tr,"isObject",Or);var _r=Number.POSITIVE_INFINITY,xr=wr.NEGATIVE_INFINITY,Er=Math.floor;function Ir(t){return t<_r&&t>xr&&Er(r=t)===r;var r}function kr(t){return yr(t)&&Ir(t)}function Pr(t){return Or(t)&&Ir(t.valueOf())}function Nr(t){return kr(t)||Pr(t)}function Vr(t,r,n){var e,o;if(!pr(t)&&!rt(t))throw new TypeError(Z("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(e=t.length))return-1;if(3===arguments.length){if(!kr(n))throw new TypeError(Z("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=e)return-1;o=n}else(o=e+n)<0&&(o=0)}else o=0;if(It(r)){for(;o<e;o++)if(It(t[o]))return o}else for(;o<e;o++)if(t[o]===r)return o;return-1}sr(Nr,"isPrimitive",kr),sr(Nr,"isObject",Pr);var Ar=/./;function Fr(t,r,n){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function $r(t){return"boolean"==typeof t}var Cr=n();function Br(){return Cr&&"symbol"==typeof Symbol.toStringTag}var Lr=Object.prototype.toString;var Gr="function"==typeof Symbol?Symbol:void 0,Mr="function"==typeof Gr?Gr.toStringTag:"";var Rr=Br()?function(t){var r,n,e;if(null==t)return Lr.call(t);n=t[Mr],r=u(t,Mr);try{t[Mr]=void 0}catch(r){return Lr.call(t)}return e=Lr.call(t),r?t[Mr]=n:delete t[Mr],e}:function(t){return Lr.call(t)},Wr=Boolean,Yr=Boolean.prototype.toString;var Xr=Br();function Zr(t){return"object"==typeof t&&(t instanceof Wr||(Xr?function(t){try{return Yr.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===Rr(t)))}function Ur(t){return $r(t)||Zr(t)}function Hr(){return new Function("return this;")()}Fr(Ur,"isPrimitive",$r),Fr(Ur,"isObject",Zr);var zr="object"==typeof self?self:null,Dr="object"==typeof window?window:null,qr="object"==typeof global?global:null,Jr="object"==typeof globalThis?globalThis:null;var Kr=function(t){if(arguments.length){if(!$r(t))throw new TypeError(Z("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Hr()}if(Jr)return Jr;if(zr)return zr;if(Dr)return Dr;if(qr)return qr;throw new Error("unexpected error. Unable to resolve global object.")}(),Qr=Kr.document&&Kr.document.childNodes,tn=Int8Array;var rn=n();var nn=Object.prototype.toString;var en="function"==typeof Symbol?Symbol:void 0,on="function"==typeof en?en.toStringTag:"";var un=rn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return nn.call(t);n=t[on],r=u(t,on);try{t[on]=void 0}catch(r){return nn.call(t)}return e=nn.call(t),r?t[on]=n:delete t[on],e}:function(t){return nn.call(t)};function an(){return/^\s*function\s*([^(]*)/i}var cn=/^\s*function\s*([^(]*)/i;function ln(t){var r,n,e,o;if(("Object"===(n=un(t).slice(8,-1))||"Error"===n)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(r=cn.exec(e.toString()))return r[1]}return ar(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}!function(t,r,n){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}(an,"REGEXP",cn);var fn="function"==typeof Ar||"object"==typeof tn||"function"==typeof Qr?function(t){return ln(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?ln(t).toLowerCase():r};function pn(t){return t.constructor&&t.constructor.prototype===t}var sn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],yn="undefined"==typeof window?void 0:window;var gn=function(){var t;if("undefined"===fn(yn))return!1;for(t in yn)try{-1===Vr(sn,t)&&u(yn,t)&&null!==yn[t]&&"object"===fn(yn[t])&&pn(yn[t])}catch(t){return!0}return!1}(),bn="undefined"!=typeof window;var vn,dn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];vn=r?function(){return 2!==(t(arguments)||"").length}(1,2)?function(r){return ir(r)?t(ur.call(r)):t(r)}:t:function(t){var r,n,e,o,i,a,c;if(o=[],ir(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(e="function"==typeof t)&&!ar(t))return o;n=cr&&e}for(i in t)n&&"prototype"===i||!u(t,i)||o.push(String(i));if(lr)for(r=function(t){if(!1===bn&&!gn)return pn(t);try{return pn(t)}catch(t){return!1}}(t),c=0;c<dn.length;c++)a=dn[c],r&&"constructor"===a||!u(t,a)||o.push(String(a));return o};var mn=vn;function hn(t){return"function"===fn(t)}var wn=Object,Sn=Object.getPrototypeOf,jn=n();var On=Object.prototype.toString;var Tn="function"==typeof Symbol?Symbol:void 0,_n="function"==typeof Tn?Tn.toStringTag:"";var xn,En=jn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return On.call(t);n=t[_n],r=u(t,_n);try{t[_n]=void 0}catch(r){return On.call(t)}return e=On.call(t),r?t[_n]=n:delete t[_n],e}:function(t){return On.call(t)};xn=hn(Object.getPrototypeOf)?Sn:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===En(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var In=xn;var kn=n();var Pn=Object.prototype.toString;var Nn="function"==typeof Symbol?Symbol:void 0,Vn="function"==typeof Nn?Nn.toStringTag:"";var An=kn&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e;if(null==t)return Pn.call(t);n=t[Vn],r=u(t,Vn);try{t[Vn]=void 0}catch(r){return Pn.call(t)}return e=Pn.call(t),r?t[Vn]=n:delete t[Vn],e}:function(t){return Pn.call(t)},Fn=Object.prototype;function $n(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!er(t)}(t)&&(r=function(t){return null==t?null:(t=wn(t),In(t))}(t),!r||!u(t,"constructor")&&u(r,"constructor")&&hn(r.constructor)&&"[object Function]"===An(r.constructor)&&u(r,"isPrototypeOf")&&hn(r.isPrototypeOf)&&(r===Fn||function(t){var r;for(r in t)if(!u(t,r))return!1;return!0}(t)))}var Cn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Bn(){return Cn.slice()}var Ln={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Gn(){var t;return 0===arguments.length?Ln.all.slice():(t=Ln[arguments[0]])?t.slice():[]}function Mn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Rn(t,r,n){Q(t,r,{configurable:!1,enumerable:!0,writable:!1,value:n})}!function(t,r,n){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}(Gn,"enum",Mn),function(t,r){var n,e,o;for(n=mn(r),o=0;o<n.length;o++)Rn(t,e=n[o],r[e])}(Gn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Wn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Yn(){return{bool:Wn.bool,int8:Wn.int8,uint8:Wn.uint8,uint8c:Wn.uint8c,int16:Wn.int16,uint16:Wn.uint16,int32:Wn.int32,uint32:Wn.uint32,int64:Wn.int64,uint64:Wn.uint64,float32:Wn.float32,float64:Wn.float64,complex64:Wn.complex64,complex128:Wn.complex128,binary:Wn.binary,generic:Wn.generic,notype:Wn.notype,userdefined_type:Wn.userdefined_type}}!function(t,r,n){Q(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}(Bn,"enum",Yn),function(t,r){var n,e,o;for(n=mn(r),o=0;o<n.length;o++)Rn(t,e=n[o],r[e])}(Bn,Yn());var Xn=function(t,r){var n,e,o,i,a,c,l,f=!0;if(!ar(t))throw new TypeError(Z("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!$n(r))throw new TypeError(Z("invalid argument. Options argument must be an object. Value: `%s`.",r));if(u(r,"duplicates")&&!$r(f=r.duplicates))throw new TypeError(Z("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",f))}if(e=(n=mn(t)).length,a={},f)for(l=0;l<e;l++)u(a,i=t[o=n[l]])?(c=a[i],er(c)?a[i].push(o):a[i]=[c,o]):a[i]=o;else for(l=0;l<e;l++)a[t[o=n[l]]]=o;return a}(Yn(),{duplicates:!1});var Zn=Yn();return function(t){var r=typeof t;return"number"===r?function(t){var r=Xn[t];return"string"==typeof r?r:null}(t)?t:null:"string"===r?function(t){var r=Zn[t];return"number"==typeof r?r:null}(t):null}}));
//# sourceMappingURL=index.js.map
