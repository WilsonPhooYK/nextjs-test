(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{20290:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return k},default:function(){return z}});var r=n(85893),o=n(67294),i=n(41749),a=n(43832),s=n(79895),l=n(87748),u=n(282),c=n(22318),d=n(74201),m=n(38347),p=n(26265),f=n(5152),b=n(5951),g=n(22474),y=n.n(g);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=e.Component,n=e.title,o=(0,m.Z)(e,["Component","title"]);return n?(0,r.jsxs)("div",{className:y().fieldWrapper,children:[n&&(0,r.jsx)("label",{htmlFor:o.name,id:"".concat(o.name,"-label"),children:n}),(0,r.jsx)(t,h({},o))]}):(0,r.jsx)(t,h(h({},o),{},{label:o.label}))},v=(0,o.memo)(O);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,p.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P=(0,f.default)((function(){return Promise.all([n.e(869),n.e(631),n.e(281),n.e(823),n.e(196)]).then(n.bind(n,34196))}),{loadableGenerated:{webpack:function(){return[34196]},modules:["..\\components\\Forms\\FieldGenerator\\FieldGenerator.tsx -> ../TextInput"]}}),S=(0,f.default)((function(){return Promise.all([n.e(869),n.e(631),n.e(281),n.e(823),n.e(819),n.e(120),n.e(467)]).then(n.bind(n,68467))}),{loadableGenerated:{webpack:function(){return[68467]},modules:["..\\components\\Forms\\FieldGenerator\\FieldGenerator.tsx -> ../Select"]}}),N={text:P,number:P,currency:P,textarea:P,password:P,tel:P,email:P,select:S,multi_select:S,radio:(0,f.default)((function(){return Promise.all([n.e(869),n.e(917)]).then(n.bind(n,59917))}),{loadableGenerated:{webpack:function(){return[59917]},modules:["..\\components\\Forms\\FieldGenerator\\FieldGenerator.tsx -> ../ButtonGroup"]}}),date:(0,f.default)((function(){return Promise.all([n.e(869),n.e(631),n.e(281),n.e(823),n.e(724),n.e(581)]).then(n.bind(n,13581))}),{loadableGenerated:{webpack:function(){return[13581]},modules:["..\\components\\Forms\\FieldGenerator\\FieldGenerator.tsx -> ../Date"]}}),date_range:(0,f.default)((function(){return Promise.all([n.e(885),n.e(869),n.e(631),n.e(819),n.e(787)]).then(n.bind(n,1787))}),{loadableGenerated:{webpack:function(){return[1787]},modules:["..\\components\\Forms\\FieldGenerator\\FieldGenerator.tsx -> ../DateRange"]}})},w=function(e){var t,n="select"===e.type&&e.options&&(null===(t=e.options)||void 0===t?void 0:t.length)<=3?"radio":e.type,o=N[n];return(0,r.jsx)(o,G(G({},e),{},{type:n}))},_=function(e){for(var t,n=e.formName,i=void 0===n?"":n,a=e.additionalNames,s=void 0===a?[]:a,l=(0,m.Z)(e,["formName","additionalNames"]),u=l.name,c=(0,d.TL)(),p=(0,o.useCallback)((function(e){i&&c(b.i.onChangeValue({formName:i,key:u,value:e.target.value,specialField:l}))}),[c,i,u,l]),f=(0,d.CG)((function(e){var t;return null===(t=e.forms.values[i])||void 0===t?void 0:t[u]})),g=(0,d.CG)((function(e){var t;return null===(t=e.forms.errors[i])||void 0===t?void 0:t[u]})),y={},j=function(e){var t=(0,d.CG)((function(t){return t.forms.values[i][s[e]]}));y[s[e]]=t},h=0;h<s.length;++h)j(h);var O="select"===l.type&&l.options&&(null===(t=l.options)||void 0===t?void 0:t.length)<=3?"radio":l.type,v=N[O];return(0,r.jsx)(v,G(G({},l),{},{type:O,formName:i,value:f,error:g,onChange:p,additionalValues:y,multiple:"multi_select"===O}))},F=function(e){var t=e.gridSize,n=e.useGrid,o=(0,m.Z)(e,["gridSize","useGrid"]),a=o.formName?_:w,s=(0,r.jsx)(v,G(G({},o),{},{Component:a}));return n?(0,r.jsx)(i.Z,{item:!0,xs:12,md:t||12,style:{paddingBottom:0},children:s}):s},C=o.memo(F),k=!0,z=function(){var e=(0,d.CG)((function(e){var t;return null===(t=e.forms.values)||void 0===t?void 0:t.test}));return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(c.Z,{variant:"h1",children:"Forms"}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(l.Z,{padding:2,children:(0,r.jsxs)("form",{noValidate:!0,onSubmit:function(t){return t.stopPropagation(),t.preventDefault(),console.log(e),!1},children:[(0,r.jsxs)(i.Z,{container:!0,spacing:2,children:[(0,r.jsx)(C,{useGrid:!0,gridSize:6,formName:"test",name:"money",title:"My Money",type:"currency",placeholder:"Enter Value...",variant:"filled",fullWidth:!0,required:!0}),(0,r.jsx)(C,{useGrid:!0,gridSize:6,type:"radio",formName:"test",title:"Gender",name:"selection",storeOptionsPath:"constants.constants.gender",getOptionLabel:function(e){return e.toString()}}),(0,r.jsx)(C,{useGrid:!0,gridSize:6,type:"select",formName:"test",name:"combo-box-demo",label:"Countries",storeOptionsPath:"constants.constants.countries",getOptionLabel:function(e){return e.toString()}}),(0,r.jsx)(C,{useGrid:!0,gridSize:6,type:"multi_select",formName:"test",multiple:!0,name:"tags-filled",label:"Countries",storeOptionsPath:"constants.constants.countries",getOptionLabel:function(e){return e.toString()}}),(0,r.jsx)(C,{useGrid:!0,gridSize:6,type:"email",formName:"test",name:"reddit",label:"Reddit",helperText:"Incorrect entry."}),(0,r.jsx)(C,{useGrid:!0,gridSize:6,type:"date",formName:"test",name:"date",label:"Date picker dialog"}),(0,r.jsx)(C,{useGrid:!0,gridSize:6,formName:"test",name:"money",title:"My Money",type:"currency",placeholder:"Enter Value...",variant:"filled",fullWidth:!0,required:!0}),(0,r.jsx)(C,{useGrid:!0,gridSize:6,type:"radio",formName:"test",title:"Gender",name:"selection",storeOptionsPath:"constants.constants.gender",getOptionLabel:function(e){return e.toString()}}),(0,r.jsx)(C,{useGrid:!0,gridSize:6,type:"select",formName:"test",name:"combo-box-demo",label:"Countries",storeOptionsPath:"constants.constants.countries",getOptionLabel:function(e){return e.toString()}}),(0,r.jsx)(C,{useGrid:!0,gridSize:6,type:"multi_select",formName:"test",multiple:!0,name:"tags-filled",label:"Countries",storeOptionsPath:"constants.constants.countries",getOptionLabel:function(e){return e.toString()}}),(0,r.jsx)(C,{useGrid:!0,gridSize:6,type:"email",formName:"test",name:"reddit",label:"Reddit",helperText:"Incorrect entry."}),(0,r.jsx)(C,{useGrid:!0,gridSize:6,type:"date",formName:"test",name:"date",label:"Date picker dialog"}),(0,r.jsx)(C,{useGrid:!0,gridSize:12,type:"date_range",formName:"test",name:"date-range",label:"Date Range"})]}),(0,r.jsx)(l.Z,{display:"flex",justifyContent:"flex-end",marginTop:2,children:(0,r.jsx)(u.Z,{variant:"contained",color:"primary",type:"submit",style:{width:"200px",height:"50px"},children:"Submit"})})]})})})]})})}},12258:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forms",function(){return n(20290)}])},22474:function(){}},function(e){e.O(0,[206,774,888,179],(function(){return t=12258,e(e.s=t);var t}));var t=e.O();_N_E=t}]);