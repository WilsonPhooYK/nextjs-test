_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{0:function(t,e,r){r("74v/"),t.exports=r("nOHt")},"74v/":function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("hUgY")}])},hUgY:function(t,e,r){"use strict";r.r(e);var n=r("nKUr"),o=r("cpVT"),i=r("q1tI"),a=r.n(i),c=r("wx14"),u=r("TrhM"),l=r("rePB");function s(t){return String(parseFloat(t)).length===String(t).length}function p(t){return parseFloat(t)}function f(t){return function(e,r){var n=String(e).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(n===r)return e;var o=p(e);if("px"!==n)if("em"===n)o=p(e)*p(t);else if("rem"===n)return o=p(e)*p(t),e;var i=o;if("px"!==r)if("em"===r)i=o/p(t);else{if("rem"!==r)return e;i=o/p(t)}return parseFloat(i.toFixed(5))+r}}function b(t){var e=t.size,r=t.grid,n=e-e%r,o=n+r;return e-n<o-e?n:o}function h(t){var e=t.lineHeight;return t.pixels/(e*t.htmlFontSize)}function d(t){var e=t.cssProperty,r=t.min,n=t.max,o=t.unit,i=void 0===o?"rem":o,a=t.breakpoints,c=void 0===a?[600,960,1280]:a,u=t.transform,s=void 0===u?null:u,p=Object(l.a)({},e,"".concat(r).concat(i)),f=(n-r)/c[c.length-1];return c.forEach((function(t){var n=r+f*t;null!==s&&(n=s(n)),p["@media (min-width:".concat(t,"px)")]=Object(l.a)({},e,"".concat(Math.round(1e4*n)/1e4).concat(i))})),p}var m=r("viY9"),g=(r("17x9"),r("OKji")),v=r("aXM8"),O=r("hfi/");var j=function(t){var e=t.children,r=t.theme,n=Object(v.a)(),o=a.a.useMemo((function(){var t=null===n?r:function(t,e){return"function"===typeof e?e(t):Object(c.a)({},t,e)}(n,r);return null!=t&&(t[O.a]=null!==n),t}),[r,n]);return a.a.createElement(g.a.Provider,{value:o},e)},y=r("H2TA"),w={WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box"},x=function(t){return Object(c.a)({color:t.palette.text.primary},t.typography.body2,{backgroundColor:t.palette.background.default,"@media print":{backgroundColor:t.palette.common.white}})};var P=Object(y.a)((function(t){return{"@global":{html:w,"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:Object(c.a)({margin:0},x(t),{"&::backdrop":{backgroundColor:t.palette.background.default}})}}}),{name:"MuiCssBaseline"})((function(t){var e=t.children,r=void 0===e?null:e;return t.classes,i.createElement(i.Fragment,null,r)})),S=r("kHtI");r("t+Ps");function k(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function F(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?k(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var E=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.breakpoints,n=void 0===r?["sm","md","lg"]:r,o=e.disableAlign,i=void 0!==o&&o,a=e.factor,l=void 0===a?2:a,p=e.variants,m=void 0===p?["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]:p,g=Object(c.a)({},t);g.typography=Object(c.a)({},g.typography);var v=g.typography,O=f(v.htmlFontSize),j=n.map((function(t){return g.breakpoints.values[t]}));return m.forEach((function(t){var e=v[t],r=parseFloat(O(e.fontSize,"rem"));if(!(r<=1)){var n=r,o=1+(n-1)/l,a=e.lineHeight;if(!s(a)&&!i)throw new Error(Object(u.a)(6));s(a)||(a=parseFloat(O(a,"rem"))/parseFloat(r));var p=null;i||(p=function(t){return b({size:t,grid:h({pixels:4,lineHeight:a,htmlFontSize:v.htmlFontSize})})}),v[t]=Object(c.a)({},e,d({cssProperty:"fontSize",min:o,max:n,unit:"rem",breakpoints:j,transform:p}))}})),g}(Object(m.a)({typography:{fontFamily:["Mulish","Literata"].join(",")}}));e.default=S.a.withRedux((function(t){var e=t.Component,r=t.pageProps;return Object(i.useEffect)((function(){var t=document.querySelector("#jss-server-side");t&&t.parentElement.removeChild(t)}),[]),Object(n.jsxs)(j,{theme:E,children:[Object(n.jsx)(P,{}),Object(n.jsx)(e,F({},r))]})}))},"t+Ps":function(t,e,r){}},[[0,1,2,0,3,4,6]]]);