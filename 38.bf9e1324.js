(self.webpackChunkcos_ui=self.webpackChunkcos_ui||[]).push([[38],{41143:e=>{"use strict";e.exports=function(e,t,r,n,a,i,l,o){if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[r,n,a,i,l,o],c=0;(u=new Error(t.replace(/%s/g,(function(){return s[c++]})))).name="Invariant Violation"}throw u.framesToPop=1,u}}},77412:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length;++r<n&&!1!==t(e[r],r,e););return e}},44037:(e,t,r)=>{var n=r(98363),a=r(3674);e.exports=function(e,t){return e&&n(t,a(t),e)}},63886:(e,t,r)=>{var n=r(98363),a=r(81704);e.exports=function(e,t){return e&&n(t,a(t),e)}},85990:(e,t,r)=>{var n=r(46384),a=r(77412),i=r(34865),l=r(44037),o=r(63886),u=r(64626),s=r(278),c=r(18805),d=r(1911),m=r(58234),f=r(46904),v=r(64160),p=r(43824),b=r(29148),g=r(38517),h=r(1469),y=r(44144),E=r(56688),C=r(13218),x=r(72928),_=r(3674),F=r(81704),j="[object Arguments]",M="[object Function]",S="[object Object]",k={};k[j]=k["[object Array]"]=k["[object ArrayBuffer]"]=k["[object DataView]"]=k["[object Boolean]"]=k["[object Date]"]=k["[object Float32Array]"]=k["[object Float64Array]"]=k["[object Int8Array]"]=k["[object Int16Array]"]=k["[object Int32Array]"]=k["[object Map]"]=k["[object Number]"]=k[S]=k["[object RegExp]"]=k["[object Set]"]=k["[object String]"]=k["[object Symbol]"]=k["[object Uint8Array]"]=k["[object Uint8ClampedArray]"]=k["[object Uint16Array]"]=k["[object Uint32Array]"]=!0,k["[object Error]"]=k[M]=k["[object WeakMap]"]=!1,e.exports=function e(t,r,A,D,w,I){var T,O=1&r,P=2&r,U=4&r;if(A&&(T=w?A(t,D,w,I):A(t)),void 0!==T)return T;if(!C(t))return t;var V=h(t);if(V){if(T=p(t),!O)return s(t,T)}else{var N=v(t),R=N==M||"[object GeneratorFunction]"==N;if(y(t))return u(t,O);if(N==S||N==j||R&&!w){if(T=P||R?{}:g(t),!O)return P?d(t,o(T,t)):c(t,l(T,t))}else{if(!k[N])return w?t:{};T=b(t,N,O)}}I||(I=new n);var B=I.get(t);if(B)return B;I.set(t,T),x(t)?t.forEach((function(n){T.add(e(n,r,A,n,t,I))})):E(t)&&t.forEach((function(n,a){T.set(a,e(n,r,A,a,t,I))}));var H=V?void 0:(U?P?f:m:P?F:_)(t);return a(H||t,(function(n,a){H&&(n=t[a=n]),i(T,a,e(n,r,A,a,t,I))})),T}},25588:(e,t,r)=>{var n=r(64160),a=r(37005);e.exports=function(e){return a(e)&&"[object Map]"==n(e)}},29221:(e,t,r)=>{var n=r(64160),a=r(37005);e.exports=function(e){return a(e)&&"[object Set]"==n(e)}},57157:(e,t,r)=>{var n=r(74318);e.exports=function(e,t){var r=t?n(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}},93147:e=>{var t=/\w*$/;e.exports=function(e){var r=new e.constructor(e.source,t.exec(e));return r.lastIndex=e.lastIndex,r}},40419:(e,t,r)=>{var n=r(62705),a=n?n.prototype:void 0,i=a?a.valueOf:void 0;e.exports=function(e){return i?Object(i.call(e)):{}}},18805:(e,t,r)=>{var n=r(98363),a=r(99551);e.exports=function(e,t){return n(e,a(e),t)}},1911:(e,t,r)=>{var n=r(98363),a=r(51442);e.exports=function(e,t){return n(e,a(e),t)}},46904:(e,t,r)=>{var n=r(68866),a=r(51442),i=r(81704);e.exports=function(e){return n(e,i,a)}},51442:(e,t,r)=>{var n=r(62488),a=r(85924),i=r(99551),l=r(70479),o=Object.getOwnPropertySymbols?function(e){for(var t=[];e;)n(t,i(e)),e=a(e);return t}:l;e.exports=o},43824:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e){var r=e.length,n=new e.constructor(r);return r&&"string"==typeof e[0]&&t.call(e,"index")&&(n.index=e.index,n.input=e.input),n}},29148:(e,t,r)=>{var n=r(74318),a=r(57157),i=r(93147),l=r(40419),o=r(77133);e.exports=function(e,t,r){var u=e.constructor;switch(t){case"[object ArrayBuffer]":return n(e);case"[object Boolean]":case"[object Date]":return new u(+e);case"[object DataView]":return a(e,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return o(e,r);case"[object Map]":return new u;case"[object Number]":case"[object String]":return new u(e);case"[object RegExp]":return i(e);case"[object Set]":return new u;case"[object Symbol]":return l(e)}}},50361:(e,t,r)=>{var n=r(85990);e.exports=function(e){return n(e,5)}},56688:(e,t,r)=>{var n=r(25588),a=r(7518),i=r(31167),l=i&&i.isMap,o=l?a(l):n;e.exports=o},72928:(e,t,r)=>{var n=r(29221),a=r(7518),i=r(31167),l=i&&i.isSet,o=l?a(l):n;e.exports=o},60038:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AutoField:()=>A,AutoFields:()=>D,AutoForm:()=>R,BaseForm:()=>w,BoolField:()=>f,DateField:()=>p,ErrorField:()=>H,ErrorsField:()=>T,HiddenField:()=>L,ListAddField:()=>C,ListDelField:()=>g,ListField:()=>x,ListItemField:()=>h,LongTextField:()=>Q,NestField:()=>_,NumField:()=>F,QuickForm:()=>U,RadioField:()=>j,SelectField:()=>M,SubmitField:()=>P,TextField:()=>k,ValidatedForm:()=>V,ValidatedQuickForm:()=>N});var n,a=r(70655),i=r(75418),l=r.n(i),o=r(79199),u=r(41143),s=r.n(u),c=r(21012);function d(e,t){var r=e.id,n=e.label,i=e.type,u=(e.disabled,e.error),s=e.errorMessage,d=(e.showInlineError,e.help),m=e.required,f=(0,a.__rest)(e,["id","label","type","disabled","error","errorMessage","showInlineError","help","required"]);return l().createElement(c.FormGroup,(0,a.__assign)({fieldId:r,label:n,isRequired:m,validated:u?"error":"default",type:i,helperText:d,helperTextInvalid:s},(0,o.filterDOMProps)(f)),t)}function m(e){var t=e.appearance,r=e.disabled,i=e.id,o=e.inputRef,u=e.label,s=e.name,m=e.onChange,f=e.value,v=(0,a.__rest)(e,["appearance","disabled","id","inputRef","label","name","onChange","value"]),p=t===n.switch?c.Switch:c.Checkbox;return d((0,a.__assign)({id:i},v),l().createElement(p,{isChecked:f||!1,isDisabled:r,id:i,name:s,onChange:function(){return r||m(!f)},ref:o,label:u}))}o.filterDOMProps.register("decimal","minCount","autoValue","isDisabled","exclusiveMaximum","exclusiveMinimum"),function(e){e.checkbox="checkbox",e.switch="switch"}(n||(n={})),m.defaultProps={appearance:n.checkbox};const f=(0,o.connectField)(m);var v=("object"==typeof r.g?r.g:window).Date;const p=(0,o.connectField)((function(e){var t,r,n=(0,i.useCallback)((function(){return e.value?e.value.toISOString().slice(0,-14):""}),[e.value]),a=(0,i.useCallback)((function(){return e.value?e.value.getUTCHours()+":"+e.value.getUTCMinutes():""}),[e.value]),o=(0,i.useCallback)((function(t,r){var n;if(r){var i=new v(r),l=a();""!==l?(i.setUTCHours(parseInt(null==l?void 0:l.split(":")[0])),i.setUTCMinutes(parseInt(null===(n=null==l?void 0:l.split(":")[1])||void 0===n?void 0:n.split(" ")[0]))):(i.setUTCHours(0),i.setUTCMinutes(0)),e.onChange(i)}else e.onChange(r)}),[e.onChange,a]),u=(0,i.useMemo)((function(){if(e.value){if(e.min){var t=new Date(e.min);if("Invalid Date"===t.toString())return!1;if(e.value<t)return"Should be after "+t.toISOString()}if(e.max){var r=new Date(e.max);if("Invalid Date"===r.toString())return!1;if(e.value>r)return"Should be before "+r.toISOString()}}return!1}),[e.value]),s=(0,i.useCallback)((function(t,r,n){var a;if(e.value){var i=new v(e.value);if(r&&n)i.setUTCHours(r),i.setUTCMinutes(n);else if(""!==t){var l=parseInt(null==t?void 0:t.split(":")[0]),o=parseInt(null===(a=null==t?void 0:t.split(":")[1])||void 0===a?void 0:a.split(" ")[0]);isNaN(l)||isNaN(o)||(i.setUTCHours(l),i.setUTCMinutes(o))}else i.setUTCHours(0),i.setUTCMinutes(0);e.onChange(i)}}),[e.onChange,e.value]);return d(e,l().createElement(c.Flex,{style:{margin:0},direction:{default:"column"},id:e.id,name:e.name,ref:e.inputRef},l().createElement(c.FlexItem,{style:{margin:0}},l().createElement(c.InputGroup,{style:{background:"transparent"}},l().createElement(c.DatePicker,{id:"date-picker-"+e.id,"data-testid":"date-picker",isDisabled:e.disabled,name:e.name,onChange:o,value:null!==(t=n())&&void 0!==t?t:""}),l().createElement(c.TimePicker,{id:"time-picker-"+e.id,"data-testid":"time-picker",isDisabled:e.disabled||!e.value,name:e.name,onChange:s,style:{width:"120px"},value:null!==(r=a())&&void 0!==r?r:"",is24Hour:!0}))),u&&l().createElement("div",{id:e.id+"-invalid-date-time",style:{fontSize:"0.875rem",color:"#c9190b",marginTop:"0.25rem"}},u)))}));var b=r(91999);const g=(0,o.connectField)((function(e){var t=e.name,r=e.disabled,n=(0,a.__rest)(e,["name","disabled"]),i=(0,o.joinName)(null,t),u=+i[i.length-1],s=(0,o.joinName)(i.slice(0,-1)),d=(0,o.useField)(s,{},{absoluteName:!0})[0],m=!(r||d.minCount>=d.value.length);return l().createElement(c.Button,(0,a.__assign)({disabled:!m||r,variant:"plain",style:{paddingLeft:"0",paddingRight:"0"},onClick:function(){var e=d.value.slice();e.splice(u,1),!r&&m&&d.onChange(e)}},(0,o.filterDOMProps)(n)),l().createElement(b.MinusCircleIcon,{color:"#cc0000"}))}),{initialValue:!1,kind:"leaf"});const h=(0,o.connectField)((function(e){var t=e.children,r=void 0===t?l().createElement(A,{label:null,name:""}):t;return l().createElement("div",{style:{marginBottom:"1rem",display:"flex",justifyContent:"space-between"}},l().createElement("div",{style:{width:"100%",marginRight:"10px"}},r),l().createElement("div",null,l().createElement(g,{name:""})))}),{initialValue:!1});var y=r(50361),E=r.n(y);const C=(0,o.connectField)((function(e){var t=e.disabled,r=void 0!==t&&t,n=e.name,i=e.value,u=(0,a.__rest)(e,["disabled","name","value"]),s=(0,o.joinName)(null,n),d=(0,o.joinName)(s.slice(0,-1)),m=(0,o.useField)(d,{},{absoluteName:!0})[0],f=!(r||m.maxCount<=m.value.length);return l().createElement(c.Button,(0,a.__assign)({variant:"plain",style:{paddingLeft:"0",paddingRight:"0"},disabled:!f,onClick:function(){!r&&f&&m.onChange(m.value.concat([E()(i)]))}},(0,o.filterDOMProps)(u)),l().createElement(b.PlusCircleIcon,{color:"#0088ce"}))}),{initialValue:!1,kind:"leaf"});o.filterDOMProps.register("minCount","wrapperCol","labelCol");const x=(0,o.connectField)((function(e){var t=e.children,r=void 0===t?l().createElement(h,{name:"$"}):t,n=(e.error,e.errorMessage,e.info),u=e.initialCount,s=e.itemProps,d=e.label,m=(e.name,e.value),f=(e.showInlineError,(0,a.__rest)(e,["children","error","errorMessage","info","initialCount","itemProps","label","name","value","showInlineError"]));return l().createElement("div",(0,a.__assign)({},(0,o.filterDOMProps)(f)),l().createElement(c.Split,{hasGutter:!0},l().createElement(c.SplitItem,null,d&&l().createElement("label",null,d,!!n&&l().createElement("span",null," ",l().createElement(c.Tooltip,{content:n},l().createElement(b.OutlinedQuestionCircleIcon,null))))),l().createElement(c.SplitItem,{isFilled:!0}),l().createElement(c.SplitItem,null,l().createElement(C,{name:"$",initialCount:u}))),l().createElement("div",null,null==m?void 0:m.map((function(e,t){return i.Children.map(r,(function(e,r){var n;return(0,i.isValidElement)(e)?(0,i.cloneElement)(e,(0,a.__assign)({key:t+"-"+r,name:null===(n=e.props.name)||void 0===n?void 0:n.replace("$",""+t)},s)):e}))}))))}));const _=(0,o.connectField)((function(e){var t=e.children,r=(e.error,e.errorMessage,e.fields),n=e.itemProps,i=e.label,u=(e.name,e.showInlineError,e.disabled),s=(0,a.__rest)(e,["children","error","errorMessage","fields","itemProps","label","name","showInlineError","disabled"]);return l().createElement(c.Card,(0,a.__assign)({},(0,o.filterDOMProps)(s)),l().createElement(c.CardBody,{className:"pf-c-form"},i&&l().createElement("label",null,l().createElement("b",null,i)),t||(null==r?void 0:r.map((function(e){return l().createElement(A,(0,a.__assign)({key:e,disabled:u,name:e},n))})))))}));const F=(0,o.connectField)((function(e){var t;return d(e,l().createElement(c.TextInput,{name:e.name,isDisabled:e.disabled,id:e.id,max:e.max,min:e.min,onChange:function(t,r){var n=(e.decimal?parseFloat:parseInt)(r.target.value);e.onChange(isNaN(n)?void 0:n)},placeholder:e.placeholder,ref:e.inputRef,step:e.decimal?.01:1,type:"number",value:null!==(t=e.value)&&void 0!==t?t:"",validated:e.error?"error":"default"}))}));const j=(0,o.connectField)((function(e){var t;return o.filterDOMProps.register("checkboxes","decimal"),d(e,l().createElement("div",(0,a.__assign)({},(0,o.filterDOMProps)(e)),null===(t=e.allowedValues)||void 0===t?void 0:t.map((function(t){return l().createElement(l().Fragment,{key:t},l().createElement(c.Radio,{isChecked:t===e.value,isDisabled:e.disabled,id:""+e.id,name:e.name,label:e.transform?e.transform(t):t,"aria-label":e.name,onChange:function(){return e.onChange(t)}}))}))))}));o.filterDOMProps.register("autoValue");const M=(0,o.connectField)((function(e){if(e.checkboxes){var t=(0,i.useMemo)((function(){return e.fieldType===Array?c.Checkbox:c.Radio}),[e]);return l().createElement("div",(0,a.__assign)({},(0,o.filterDOMProps)(e)),e.label&&l().createElement("label",null,e.label),e.allowedValues.map((function(r,n){return l().createElement(l().Fragment,{key:n},l().createElement("label",{htmlFor:e.id},e.transform?e.transform(r):r),l().createElement(t,{id:e.id+"-"+r,isDisabled:e.disabled,name:e.name,"aria-label":e.name,value:e.value,isChecked:e.fieldType===Array&&Array.isArray(e.value)?e.value.includes(r):e.value===r,onChange:function(){e.onChange(e.fieldType===Array&&Array.isArray(e.value)?function(e,t){var r=t.indexOf(e);return-1===r?t.concat([e]):t.slice(0,r).concat(t.slice(r+1))}(r,e.value):r)}}))})))}var r=(0,i.useState)(!1),n=r[0],u=r[1],s=(0,i.useState)([]),m=s[0],f=s[1];(0,i.useEffect)((function(){e.value?Array.isArray(e.value)?(f((0,a.__spreadArrays)(e.value)),u(!1)):(f(e.value),u(!1)):(f([]),u(!1))}),[e.value]);var v=(0,i.useCallback)((function(e,t){var r=void 0!==e.toString?e.toString():e;return t!==Array?""!==r?r:"":Array.isArray(m)?m.includes(r)?m.filter((function(e){return e!==r})):(0,a.__spreadArrays)([r],m):[r,m]}),[m]),p=(0,i.useCallback)((function(t,r){if(r===e.placeholder)e.onChange(void 0);else{var n=v(r,e.fieldType);e.onChange(n)}}),[v,e]),b=(0,i.useMemo)((function(){return e.allowedValues.map((function(t){return l().createElement(c.SelectOption,{key:t,value:t},e.transform?e.transform(t):t)}))}),[e]);return(0,i.useEffect)((function(){e.placeholder&&b.unshift(l().createElement(c.SelectOption,{key:e.allowedValues.length,isPlaceholder:!0,value:e.placeholder}))}),[e.placeholder,b]),d(e,l().createElement(c.Select,{isDisabled:e.disabled,id:e.id,variant:e.fieldType===Array?c.SelectVariant.typeaheadMulti:c.SelectVariant.single,name:e.name,placeholderText:e.placeholder,isOpen:n,selections:m,onToggle:function(){return u(!n)},onSelect:p,value:e.value||(e.fieldType===Array?[]:void 0)},b))}));var S=/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])(:[0-5][0-9])?/;const k=(0,o.connectField)((function(e){var t,r,n,u,s,m,f=(0,i.useMemo)((function(){var t;if("string"==typeof e.value&&("date"===e.type||"date"===(null===(t=e.field)||void 0===t?void 0:t.format))){var r=new Date(e.value);if("string"==typeof e.min){var n=new Date(e.min);if("Invalid Date"===n.toString())return!1;if(r.toISOString()<n.toISOString())return e.errorMessage&&e.errorMessage.trim().length>0?e.errorMessage:"Should be after "+e.min}if("string"==typeof e.max){var a=new Date(e.max);if("Invalid Date"===a.toString())return!1;if(r.toISOString()>a.toISOString())return e.errorMessage&&e.errorMessage.trim().length>0?e.errorMessage:"Should be before "+e.max}}return!1}),[e.value,e.max,e.min,e.errorMessage]),v=(0,i.useCallback)((function(e){var t=S.exec(e),r=new Date;if(t)return r.setUTCHours(Number(t[1]),Number(t[2])),r}),[]),p=(0,i.useMemo)((function(){var t;if("string"==typeof e.value&&("time"===e.type||"time"===(null===(t=e.field)||void 0===t?void 0:t.format))){var r=v(e.value);if(r&&"string"==typeof e.min&&S.exec(e.min)){var n=v(e.min);if(r<n)return"Should be after "+n.getUTCHours()+":"+n.getUTCMinutes()}if(r&&"string"==typeof e.max&&S.exec(e.max)){var a=v(e.max);if(r>a)return"Should be before "+a.getUTCHours()+":"+a.getUTCMinutes()}}return!1}),[e.type,e.field,e.value,e.max,e.min]),b=(0,i.useCallback)((function(t){e.onChange(t)}),[e.disabled,e.onChange]),g=(0,i.useCallback)((function(t){var r=t.split(":");2===r.length?e.onChange((0,a.__spreadArrays)(r,["00"]).join(":")):e.onChange(t)}),[e.disabled,e.onChange]);return d(e,"date"===e.type||"date"===(null===(t=e.field)||void 0===t?void 0:t.format)?l().createElement(l().Fragment,null,l().createElement(c.DatePicker,(0,a.__assign)({name:e.name,isDisabled:e.disabled,onChange:b,value:null!==(r=e.value)&&void 0!==r?r:""},(0,o.filterDOMProps)(e))),f&&l().createElement("div",{style:{fontSize:"0.875rem",color:"#c9190b",marginTop:"0.25rem"}},f)):"time"===e.type||"time"===(null===(n=e.field)||void 0===n?void 0:n.format)?l().createElement(l().Fragment,null,l().createElement(c.TimePicker,{name:e.name,isDisabled:e.disabled,onChange:g,is24Hour:!0,value:null!==(u=e.value)&&void 0!==u?u:""}),p&&l().createElement("div",{style:{fontSize:"0.875rem",color:"#c9190b",marginTop:"0.25rem"}},p)):l().createElement(c.TextInput,(0,a.__assign)({name:e.name,isDisabled:e.disabled,validated:e.error?"error":"default",onChange:function(t,r){return e.onChange(r.target.value)},placeholder:e.placeholder,ref:e.inputRef,type:null!==(s=e.type)&&void 0!==s?s:"text",value:null!==(m=e.value)&&void 0!==m?m:""},(0,o.filterDOMProps)(e))))}));const A=(0,o.createAutoField)((function(e){if(e.allowedValues)return e.checkboxes&&e.fieldType!==Array?j:M;switch(e.fieldType){case Array:return x;case Boolean:return f;case Date:return p;case Number:return F;case Object:return _;case String:return k}return s()(!1,"Unsupported field type: %s",e.fieldType)}));function D(e){var t=e.autoField,r=void 0===t?A:t,n=e.element,l=void 0===n?"div":n,u=e.fields,s=e.omitFields,c=void 0===s?[]:s,d=(0,a.__rest)(e,["autoField","element","fields","omitFields"]),m=(0,o.useForm)().schema;return(0,i.createElement)(l,d,(null!=u?u:m.getSubfields()).filter((function(e){return!c.includes(e)})).map((function(e){return(0,i.createElement)(r,{key:e,name:e})})))}const w=function e(t){return function(r){function n(){return null!==r&&r.apply(this,arguments)||this}return(0,a.__extends)(n,r),n.prototype.render=function(){return l().createElement(o.context.Provider,{value:this.getContext()},l().createElement(c.Form,(0,a.__assign)({},this.getNativeFormProps())))},n.Patternfly=e,n.displayName="Patternfly"+t.displayName,n}(t)}(o.BaseForm);function I(e){var t=e.children,r=(0,a.__rest)(e,["children"]),n=(0,o.useForm)(),i=n.error,u=n.schema;return i||t?l().createElement("div",(0,a.__assign)({},(0,o.filterDOMProps)(r)),t,l().createElement("ul",null,u.getErrorMessages(i).map((function(e,t){return l().createElement("li",{key:t,style:{margin:"3px"}},e)})))):null}I.defaultProps={style:{backgroundColor:"rgba(255, 85, 0, 0.2)",border:"1px solid rgb(255, 85, 0)",borderRadius:"7px",margin:"20px 0px",padding:"10px"}};const T=I;function O(e){var t=e.disabled,r=e.inputRef,n=e.value,i=(0,a.__rest)(e,["disabled","inputRef","value"]),u=(0,o.useForm)(),s=u.error,d=u.state;return l().createElement("div",(0,a.__assign)({},(0,o.filterDOMProps)(i)),l().createElement(c.Button,{isDisabled:void 0===t?!(!s&&!d.disabled):t,type:"submit",ref:r,variant:"primary"},n))}O.defaultProps={value:"Submit"};const P=O;const U=function e(t){return function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return(0,a.__extends)(r,t),r.prototype.getAutoField=function(){return A},r.prototype.getErrorsField=function(){return T},r.prototype.getSubmitField=function(){return P},r.Quick=e,r}(o.QuickForm.Quick(t))}(w);const V=function e(t){return function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return(0,a.__extends)(r,t),r.Validated=e,r}(o.ValidatedForm.Validated(t))}(w),N=V.Validated(U.Quick(w));const R=function e(t){return function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return(0,a.__extends)(r,t),r.Auto=e,r}(o.AutoForm.Auto(t))}(N);var B=function(e){var t=e.children,r=e.error,n=e.errorMessage,i=(0,a.__rest)(e,["children","error","errorMessage"]);return r?l().createElement("div",(0,a.__assign)({},(0,o.filterDOMProps)(i)),t||l().createElement("div",{style:{margin:"3px"}},n)):null};B.defaultProps={style:{backgroundColor:"rgba(255, 85, 0, 0.2)",border:"1px solid rgb(255, 85, 0)",borderRadius:"7px",margin:"20px 0px",padding:"10px"}};const H=(0,o.connectField)(B,{initialValue:!1});function L(e){var t,r=e.value,n=(0,a.__rest)(e,["value"]),u=(0,o.useField)(n.name,n,{initialValue:!1})[0];return(0,i.useEffect)((function(){void 0!==r&&r!==u.value&&u.onChange(r)})),u.noDOM?null:l().createElement("input",(0,a.__assign)({disabled:u.disabled,id:u.id,name:u.name,ref:u.inputRef,type:"hidden",value:null!==(t=null!=r?r:u.value)&&void 0!==t?t:""},(0,o.filterDOMProps)(u)))}const Q=(0,o.connectField)((function(e){var t=e.disabled,r=e.id,n=e.inputRef,i=e.label,u=e.name,s=e.onChange,d=e.placeholder,m=e.value,f=(0,a.__rest)(e,["disabled","id","inputRef","label","name","onChange","placeholder","value"]);return l().createElement("div",(0,a.__assign)({},(0,o.filterDOMProps)(f)),i&&l().createElement("label",{htmlFor:r},i),l().createElement(c.TextArea,{id:r,disabled:t,name:u,"aria-label":u,onChange:function(e,t){return s(t.target.value)},placeholder:d,ref:n,value:null!=m?m:""}))}))}}]);
//# sourceMappingURL=38.bf9e1324.js.map