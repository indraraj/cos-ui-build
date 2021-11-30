/*! For license information please see 507.a340ce07.js.LICENSE.txt */
"use strict";(self.webpackChunkcos_ui=self.webpackChunkcos_ui||[]).push([[507],{70880:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=r(80552),o=r(50509),a=r(37962);function i(t){return{id:t,send:function(){},subscribe:function(){return{unsubscribe:function(){}}},getSnapshot:function(){},toJSON:function(){return{id:t}}}}function c(t,e,r){var n=i(e);if(n.deferred=!0,o.isMachine(t)){var c=n.state=a.provide(void 0,(function(){return(r?t.withContext(r):t).initialState}));n.getSnapshot=function(){return c}}return n}function u(t){try{return"function"==typeof t.send}catch(t){return!1}}e.createDeferredActor=c,e.createInvocableActor=function(t,e,r,n){var a,u=o.toInvokeSource(t.src),s=null===(a=null==e?void 0:e.options.services)||void 0===a?void 0:a[u.type],f=t.data?o.mapContext(t.data,r,n):void 0,l=s?c(s,t.id,f):i(t.id);return l.meta=t,l},e.createNullActor=i,e.isActor=u,e.isSpawnedActor=function(t){return u(t)&&"id"in t},e.toActorRef=function(t){return n.__assign({subscribe:function(){return{unsubscribe:function(){}}},id:"anonymous",getSnapshot:function(){}},t)}},80552:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.__assign=function(){return e.__assign=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},e.__assign.apply(this,arguments)},e.__read=function(t,e){var r="function"==typeof Symbol&&t[Symbol.iterator];if(!r)return t;var n,o,a=r.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(t){o={error:t}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i},e.__rest=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},e.__spreadArray=function(t,e,r){if(r||2===arguments.length)for(var n,o=0,a=e.length;o<a;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},e.__values=function(t){var e="function"==typeof Symbol&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}},73487:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=r(27108),o=n.ActionTypes.Start,a=n.ActionTypes.Stop,i=n.ActionTypes.Raise,c=n.ActionTypes.Send,u=n.ActionTypes.Cancel,s=n.ActionTypes.NullEvent,f=n.ActionTypes.Assign,l=n.ActionTypes.After,p=n.ActionTypes.DoneState,y=n.ActionTypes.Log,v=n.ActionTypes.Init,d=n.ActionTypes.Invoke,_=n.ActionTypes.ErrorExecution,h=n.ActionTypes.ErrorPlatform,b=n.ActionTypes.ErrorCustom,g=n.ActionTypes.Update,A=n.ActionTypes.Choose,m=n.ActionTypes.Pure;e.after=l,e.assign=f,e.cancel=u,e.choose=A,e.doneState=p,e.error=b,e.errorExecution=_,e.errorPlatform=h,e.init=v,e.invoke=d,e.log=y,e.nullEvent=s,e.pure=m,e.raise=i,e.send=c,e.start=o,e.stop=a,e.update=g},39448:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.DEFAULT_GUARD_TYPE="xstate.guard",e.EMPTY_ACTIVITY_MAP={},e.STATE_DELIMITER=".",e.TARGETLESS_KEY=""},29660:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.IS_PRODUCTION=!0},37962:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var r=[];e.consume=function(t){return t(r[r.length-1])},e.provide=function(t,e){r.push(t);var n=e(t);return r.pop(),n}},27108:(t,e)=>{var r,n;Object.defineProperty(e,"__esModule",{value:!0}),(r=e.ActionTypes||(e.ActionTypes={})).Start="xstate.start",r.Stop="xstate.stop",r.Raise="xstate.raise",r.Send="xstate.send",r.Cancel="xstate.cancel",r.NullEvent="",r.Assign="xstate.assign",r.After="xstate.after",r.DoneState="done.state",r.DoneInvoke="done.invoke",r.Log="xstate.log",r.Init="xstate.init",r.Invoke="xstate.invoke",r.ErrorExecution="error.execution",r.ErrorCommunication="error.communication",r.ErrorPlatform="error.platform",r.ErrorCustom="xstate.error",r.Update="xstate.update",r.Pure="xstate.pure",r.Choose="xstate.choose",(n=e.SpecialTargets||(e.SpecialTargets={})).Parent="#_parent",n.Internal="#_internal"},50509:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=r(80552),o=r(39448),a=r(29660);function i(t){return Object.keys(t)}function c(t,e){try{return _(t)?t:t.toString().split(e)}catch(e){throw new Error("'".concat(t,"' is not a valid state path."))}}function u(t){return"object"==typeof t&&"value"in t&&"context"in t&&"event"in t&&"_event"in t}function s(t,e){return u(t)?t.value:_(t)?f(t):"string"!=typeof t?t:f(c(t,e))}function f(t){if(1===t.length)return t[0];for(var e={},r=e,n=0;n<t.length-1;n++)n===t.length-2?r[t[n]]=t[n+1]:(r[t[n]]={},r=r[t[n]]);return e}function l(t,e){for(var r={},n=i(t),o=0;o<n.length;o++){var a=n[o];r[a]=e(t[a],a,t,o)}return r}function p(t){var e;return(e=[]).concat.apply(e,n.__spreadArray([],n.__read(t),!1))}function y(t){return _(t)?t:[t]}function v(t){return void 0===t?[]:y(t)}function d(t,e){return l(t.states,(function(t,r){if(t){var n=(b(e)?void 0:e[r])||(t?t.current:void 0);if(n)return{current:n,states:d(t,n)}}}))}function _(t){return Array.isArray(t)}function h(t){return"function"==typeof t}function b(t){return"string"==typeof t}e.warn=function(){},a.IS_PRODUCTION||(e.warn=function(t,e){var r=t instanceof Error?t:void 0;if((r||!t)&&void 0!==console){var n=["Warning: ".concat(e)];r&&n.push(r),console.warn.apply(console,n)}});var g=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function A(t){try{return"__xstatenode"in t}catch(t){return!1}}var m=function(){var t=0;return function(){return(++t).toString(16)}}();function S(t,e){return b(t)||"number"==typeof t?n.__assign({type:t},e):t}e.evaluateGuard=function(t,e,r,n,a){var i=t.options.guards,c={state:a,cond:e,_event:n};if(e.type===o.DEFAULT_GUARD_TYPE)return((null==i?void 0:i[e.name])||e.predicate)(r,n.data,c);var u=i[e.type];if(!u)throw new Error("Guard '".concat(e.type,"' is not implemented on machine '").concat(t.id,"'."));return u(r,n.data,c)},e.flatten=p,e.getEventType=function(t){try{return b(t)||"number"==typeof t?"".concat(t):t.type}catch(t){throw new Error("Events must be strings or objects with a string event.type property.")}},e.isActor=function(t){return!!t&&"function"==typeof t.send},e.isArray=_,e.isBehavior=function(t){return null!==t&&"object"==typeof t&&"transition"in t&&"function"==typeof t.transition},e.isBuiltInEvent=function(t){return/^(done|error)\./.test(t)},e.isFunction=h,e.isMachine=A,e.isObservable=function(t){try{return"subscribe"in t&&h(t.subscribe)}catch(t){return!1}},e.isPromiseLike=function(t){return t instanceof Promise||!(null===t||!h(t)&&"object"!=typeof t||!h(t.then))},e.isStateLike=u,e.isString=b,e.keys=i,e.mapContext=function(t,e,r){var o,a;if(h(t))return t(e,r.data);var i={};try{for(var c=n.__values(Object.keys(t)),u=c.next();!u.done;u=c.next()){var s=u.value,f=t[s];h(f)?i[s]=f(e,r.data):i[s]=f}}catch(t){o={error:t}}finally{try{u&&!u.done&&(a=c.return)&&a.call(c)}finally{if(o)throw o.error}}return i},e.mapFilterValues=function(t,e,r){var o,a,c={};try{for(var u=n.__values(i(t)),s=u.next();!s.done;s=u.next()){var f=s.value,l=t[f];r(l)&&(c[f]=e(l,f,t))}}catch(t){o={error:t}}finally{try{s&&!s.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}return c},e.mapValues=l,e.matchesState=function t(e,r,n){void 0===n&&(n=o.STATE_DELIMITER);var a=s(e,n),c=s(r,n);return b(c)?!!b(a)&&c===a:b(a)?a in c:i(a).every((function(e){return e in c&&t(a[e],c[e])}))},e.nestedPath=function(t,e){return function(r){var o,a,i=r;try{for(var c=n.__values(t),u=c.next();!u.done;u=c.next()){var s=u.value;i=i[e][s]}}catch(t){o={error:t}}finally{try{u&&!u.done&&(a=c.return)&&a.call(c)}finally{if(o)throw o.error}}return i}},e.normalizeTarget=function(t){if(void 0!==t&&t!==o.TARGETLESS_KEY)return v(t)},e.partition=function(t,e){var r,o,a=n.__read([[],[]],2),i=a[0],c=a[1];try{for(var u=n.__values(t),s=u.next();!s.done;s=u.next()){var f=s.value;e(f)?i.push(f):c.push(f)}}catch(t){r={error:t}}finally{try{s&&!s.done&&(o=u.return)&&o.call(u)}finally{if(r)throw r.error}}return[i,c]},e.path=function(t){return function(e){var r,o,a=e;try{for(var i=n.__values(t),c=i.next();!c.done;c=i.next()){a=a[c.value]}}catch(t){r={error:t}}finally{try{c&&!c.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}return a}},e.pathToStateValue=f,e.reportUnhandledExceptionOnInvocation=function(t,e,r){if(!a.IS_PRODUCTION){var n=t.stack?" Stacktrace was '".concat(t.stack,"'"):"";if(t===e)console.error("Missing onError handler for invocation '".concat(r,"', error was '").concat(t,"'.").concat(n));else{var o=e.stack?" Stacktrace was '".concat(e.stack,"'"):"";console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(r,"'. ")+"Original error: '".concat(t,"'. ").concat(n," Current error is '").concat(e,"'.").concat(o))}}},e.symbolObservable=g,e.toArray=v,e.toArrayStrict=y,e.toEventObject=S,e.toGuard=function(t,e){if(t)return b(t)?{type:o.DEFAULT_GUARD_TYPE,name:t,predicate:e?e[t]:void 0}:h(t)?{type:o.DEFAULT_GUARD_TYPE,name:t.name,predicate:t}:t},e.toInvokeSource=function(t){return"string"==typeof t?{type:t}:t},e.toObserver=function(t,e,r){if("object"==typeof t)return t;var n=function(){};return{next:t,error:e||n,complete:r||n}},e.toSCXMLEvent=function(t,e){if(!b(t)&&"$$type"in t&&"scxml"===t.$$type)return t;var r=S(t);return n.__assign({name:r.type,data:r,$$type:"scxml",type:"external"},e)},e.toStatePath=c,e.toStatePaths=function t(e){return e?b(e)?[[e]]:p(i(e).map((function(r){var n=e[r];return"string"==typeof n||n&&Object.keys(n).length?t(e[r]).map((function(t){return[r].concat(t)})):[[r]]}))):[[]]},e.toStateValue=s,e.toTransitionConfigArray=function(t,e){return y(e).map((function(e){return void 0===e||"string"==typeof e||A(e)?{target:e,event:t}:n.__assign(n.__assign({},e),{event:t})}))},e.uniqueId=m,e.updateContext=function(t,r,o,c){return a.IS_PRODUCTION||e.warn(!!t,"Attempting to update undefined context"),t?o.reduce((function(t,e){var o,a,u=e.assignment,s={state:c,action:e,_event:r},f={};if(h(u))f=u(t,r.data,s);else try{for(var l=n.__values(i(u)),p=l.next();!p.done;p=l.next()){var y=p.value,v=u[y];f[y]=h(v)?v(t,r.data,s):v}}catch(t){o={error:t}}finally{try{p&&!p.done&&(a=l.return)&&a.call(l)}finally{if(o)throw o.error}}return Object.assign({},t,f)}),t):t},e.updateHistoryStates=d,e.updateHistoryValue=function(t,e){return{current:e,states:d(t,e)}}}}]);
//# sourceMappingURL=507.a340ce07.js.map