(self.webpackChunkcos_ui=self.webpackChunkcos_ui||[]).push([[766],{62663:e=>{e.exports=function(e,r,t,n){var u=-1,i=null==e?0:e.length;for(n&&i&&(t=e[++u]);++u<i;)t=r(t,e[u],u,e);return t}},44286:e=>{e.exports=function(e){return e.split("")}},49029:e=>{var r=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(r)||[]}},18674:e=>{e.exports=function(e){return function(r){return null==e?void 0:e[r]}}},40180:(e,r,t)=>{var n=t(14259);e.exports=function(e,r,t){var u=e.length;return t=void 0===t?u:t,!r&&t>=u?e:n(e,r,t)}},98805:(e,r,t)=>{var n=t(40180),u=t(62689),i=t(83140),o=t(79833);e.exports=function(e){return function(r){r=o(r);var t=u(r)?i(r):void 0,a=t?t[0]:r.charAt(0),f=t?n(t,1).join(""):r.slice(1);return a[e]()+f}}},35393:(e,r,t)=>{var n=t(62663),u=t(53816),i=t(58748),o=RegExp("['’]","g");e.exports=function(e){return function(r){return n(i(u(r).replace(o,"")),e,"")}}},69389:(e,r,t)=>{var n=t(18674)({À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"});e.exports=n},62689:e=>{var r=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");e.exports=function(e){return r.test(e)}},93157:e=>{var r=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return r.test(e)}},83140:(e,r,t)=>{var n=t(44286),u=t(62689),i=t(676);e.exports=function(e){return u(e)?i(e):n(e)}},676:e=>{var r="[\\ud800-\\udfff]",t="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",n="\\ud83c[\\udffb-\\udfff]",u="[^\\ud800-\\udfff]",i="(?:\\ud83c[\\udde6-\\uddff]){2}",o="[\\ud800-\\udbff][\\udc00-\\udfff]",a="(?:"+t+"|"+n+")"+"?",f="[\\ufe0e\\ufe0f]?",s=f+a+("(?:\\u200d(?:"+[u,i,o].join("|")+")"+f+a+")*"),d="(?:"+[u+t+"?",t,i,o,r].join("|")+")",l=RegExp(n+"(?="+n+")|"+d+s,"g");e.exports=function(e){return e.match(l)||[]}},2757:e=>{var r="\\u2700-\\u27bf",t="a-z\\xdf-\\xf6\\xf8-\\xff",n="A-Z\\xc0-\\xd6\\xd8-\\xde",u="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+u+"]",o="\\d+",a="[\\u2700-\\u27bf]",f="["+t+"]",s="[^\\ud800-\\udfff"+u+o+r+t+n+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+n+"]",p="(?:"+f+"|"+s+")",v="(?:"+c+"|"+s+")",m="(?:['’](?:d|ll|m|re|s|t|ve))?",h="(?:['’](?:D|LL|M|RE|S|T|VE))?",g="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?",y=x+g+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,l].join("|")+")"+x+g+")*"),b="(?:"+[a,d,l].join("|")+")"+y,j=RegExp([c+"?"+f+"+"+m+"(?="+[i,c,"$"].join("|")+")",v+"+"+h+"(?="+[i,c+p,"$"].join("|")+")",c+"?"+p+"+"+m,c+"+"+h,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,b].join("|"),"g");e.exports=function(e){return e.match(j)||[]}},53816:(e,r,t)=>{var n=t(69389),u=t(79833),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=u(e))&&e.replace(i,n).replace(o,"")}},41609:(e,r,t)=>{var n=t(280),u=t(64160),i=t(35694),o=t(1469),a=t(98612),f=t(44144),s=t(25726),d=t(36719),l=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(a(e)&&(o(e)||"string"==typeof e||"function"==typeof e.splice||f(e)||d(e)||i(e)))return!e.length;var r=u(e);if("[object Map]"==r||"[object Set]"==r)return!e.size;if(s(e))return!n(e).length;for(var t in e)if(l.call(e,t))return!1;return!0}},45021:(e,r,t)=>{var n=t(35393)((function(e,r,t){return e+(t?" ":"")+r.toLowerCase()}));e.exports=n},11700:(e,r,t)=>{var n=t(98805)("toUpperCase");e.exports=n},58748:(e,r,t)=>{var n=t(49029),u=t(93157),i=t(79833),o=t(2757);e.exports=function(e,r,t){return e=i(e),void 0===(r=t?void 0:r)?u(e)?o(e):n(e):e.match(r)||[]}},35971:(e,r,t)=>{"use strict";t.r(r),t.d(r,{JSONSchemaBridge:()=>O,default:()=>O});var n=t(70655),u=t(41143),i=t.n(u),o=t(50361),a=t.n(o),f=t(27361),s=t.n(f),d=t(41609),l=t.n(d),c=t(45021),p=t.n(c),v=t(88306),m=t.n(v),h=t(11700),g=t.n(h),x=t(79199);function y(e,r){i()(r,'Field not found in schema: "%s"',e)}function b(e,r){if(!("$ref"in e))return e;var t=e.$ref,u=(0,n.__rest)(e,["$ref"]);return b(Object.assign({},u,function(e,r){i()(e.startsWith("#"),'Reference is not an internal reference, and only such are allowed: "%s"',e);var t=e.split("/").filter((function(e){return e&&"#"!==e})).reduce((function(e,r){return e[r]}),r);return i()(t,'Reference not found in schema: "%s"',e),t}(t,r)),r)}var j=["allOf","anyOf","oneOf"],A=["default","enum","format","isRequired","title","uniforms"],E=[["maxItems","maxCount"],["maximum","max"],["minItems","minCount"],["minimum","min"],["multipleOf","step"]];const O=function(e){function r(r,t){var n=e.call(this)||this;return n.validator=t,n.schema=b(r,r),n._compiledSchema={"":n.schema},n.getField=m()(n.getField.bind(n)),n.getSubfields=m()(n.getSubfields.bind(n)),n.getType=m()(n.getType.bind(n)),n}return(0,n.__extends)(r,e),r.prototype.getError=function(e,r){var t=null==r?void 0:r.details;if(!Array.isArray(t))return null;var n=(0,x.joinName)(null,e),u=(0,x.joinName)(n.slice(0,-1)),i=n[n.length-1];return t.find((function(r){var t,n=function(e){return(e=e.startsWith("/")?e.replace(/\//g,".").replace(/~0/g,"~").replace(/~1/g,"/"):e.replace(/\[('|")(.+?)\1\]/g,".$2").replace(/\[(.+?)\]/g,".$1").replace(/\\'/g,"'")).slice(1)}(null!==(t=r.instancePath)&&void 0!==t?t:r.dataPath);return e===n||u===n&&i===r.params.missingProperty}))||null},r.prototype.getErrorMessage=function(e,r){var t=this.getError(e,r);return(null==t?void 0:t.message)||""},r.prototype.getErrorMessages=function(e){if(!e)return[];var r=e.details;return Array.isArray(r)?r.map((function(e){return e.message})):[e.message||e]},r.prototype.getField=function(e){var r=this;return(0,x.joinName)(null,e).reduce((function(t,n,u,i){var o,a,f,s,d=(0,x.joinName)(i.slice(0,u)),c=(0,x.joinName)(d,n),p=null!==(o=(s=r._compiledSchema)[c])&&void 0!==o?o:s[c]={};if(p.isRequired=!(!(null===(a=t.required)||void 0===a?void 0:a.includes(n))&&!(null===(f=r._compiledSchema[d].required)||void 0===f?void 0:f.includes(n))),"$"===n||n===""+parseInt(n,10))y(e,"array"===t.type),t=Array.isArray(t.items)?t.items[parseInt(n,10)]:t.items,y(e,!!t);else if("object"===t.type)y(e,!!t.properties),t=t.properties[n],y(e,!!t);else{var v=!1;j.forEach((function(e){var u;null===(u=t[e])||void 0===u||u.forEach((function(e){v||(e=b(e,r.schema),n in e.properties&&(t=e.properties[n],v=!0))}))})),y(e,v)}var m=(t=b(t,r.schema)).required?t.required.slice():[],h=t.properties?Object.assign({},t.properties):{};return j.forEach((function(e){var n;null===(n=t[e])||void 0===n||n.forEach((function(e){(e=b(e,r.schema)).required&&m.push.apply(m,e.required),Object.assign(h,e.properties),!p.type&&e.type&&(p.type=e.type)}))})),m.length>0&&(p.required=m),l()(h)||(p.properties=h),t}),this.schema)},r.prototype.getInitialValue=function(e,r){var t,n=this.getField(e),u=this._compiledSchema[e],i=u.default,o=void 0===i?null!==(t=n.default)&&void 0!==t?t:s()(this.schema.default,e):i,f=u.type,d=void 0===f?n.type:f;if(void 0!==o)return a()(o);if("array"===d){var l=this.getInitialValue((0,x.joinName)(e,"0")),c=(null==r?void 0:r.initialCount)||0;return Array.from({length:c},(function(){return l}))}return"object"===d?{}:void 0},r.prototype.getProps=function(e,r){var t,n,u,i=this.getField(e),o=Object.assign({},i,i.uniforms,this._compiledSchema[e]);null!==(t=o.label)&&void 0!==t||(o.label=null!==(n=o.title)&&void 0!==n?n:g()(p()((0,x.joinName)(null,e).slice(-1)[0]))),"number"===i.type&&(o.decimal=!0),void 0!==(null===(u=i.uniforms)||void 0===u?void 0:u.type)&&(o.type=i.uniforms.type),void 0===o.required&&(o.required=o.isRequired),o.type===i.type&&delete o.type;var a=(null==r?void 0:r.options)||o.options;return a?Array.isArray(a)?(o.allowedValues=a.map((function(e){return e.value})),o.transform=function(e){return a.find((function(r){return r.value===e})).label}):(o.allowedValues=Object.keys(a),o.transform=function(e){return a[e]}):o.enum&&(o.allowedValues=o.enum),E.forEach((function(e){var r=e[0],t=e[1];r in o&&(o[t]=o[r],delete o[r])})),A.forEach((function(e){e in o&&delete o[e]})),o},r.prototype.getSubfields=function(e){void 0===e&&(e="");var r=this.getField(e),t=this._compiledSchema[e],n=t.properties,u=void 0===n?r.properties:n,i=t.type;return"object"===(void 0===i?r.type:i)&&u?Object.keys(u):[]},r.prototype.getType=function(e){var r=this.getField(e),t=r.type,n=r.format,u=this._compiledSchema[e].type,o=void 0===u?t:u;return"date-time"===n?Date:"string"===o?String:"number"===o||"integer"===o?Number:"object"===o?Object:"array"===o?Array:"boolean"===o?Boolean:(i()("null"!==o,'Field "%s" can not be represented as a type null',e),o)},r.prototype.getValidator=function(){return this.validator},r}(x.Bridge)}}]);
//# sourceMappingURL=766.0d46e77c.js.map