/*! @license Firebase v3.1.0
    Build: 3.1.0-rc.3
    Terms: https://developers.google.com/terms */
var firebase = (function() { var h="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global?global:this,l=function(){h.Symbol||(h.Symbol=k);l=function(){}},m=0,k=function(a){return"jscomp_symbol_"+a+m++},p=function(){l();h.Symbol.iterator||(h.Symbol.iterator=h.Symbol("iterator"));p=function(){}},q=function(){var a=["next","error","complete"];p();l();p();var b=a[Symbol.iterator];if(b)return b.call(a);var c=0;return{next:function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}},r=function(a,b){p();a instanceof
String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};l();p();d[Symbol.iterator]=function(){return d};return d},t=function(a,b){!Array.prototype[a]&&Object.defineProperties&&Object.defineProperty&&Object.defineProperty(Array.prototype,a,{configurable:!0,enumerable:!1,writable:!0,value:b})},u=function(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");
if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""},v=function(a){var b=u(this,null,"repeat");if(0>a||1342177279<a)throw new RangeError("Invalid count value");a|=0;for(var c="";a;)if(a&1&&(c+=b),a>>>=1)b+=b;return c},w=function(a){var b=u(this,null,"codePointAt"),c=b.length;a=Number(a)||0;if(0<=a&&a<c){a|=0;var d=b.charCodeAt(a);if(55296>d||56319<d||a+1===c)return d;a=b.charCodeAt(a+1);return 56320>a||57343<a?d:1024*
(d-55296)+a+9216}},x=function(a,b){return-1!==u(this,a,"includes").indexOf(a,b||0)},y=function(a,b){var c=u(this,a,"startsWith");a+="";var d=c.length,e=a.length;b=Math.max(0,Math.min(b|0,c.length));for(var f=0;f<e&&b<d;)if(c[b++]!=a[f++])return!1;return f>=e},z=function(a,b){var c=u(this,a,"endsWith");a+="";void 0===b&&(b=c.length);b=Math.max(0,Math.min(b|0,c.length));for(var d=a.length;0<d&&0<b;)if(c[--b]!=a[--d])return!1;return 0>=d};String.prototype.endsWith||(String.prototype.endsWith=z);
String.prototype.startsWith||(String.prototype.startsWith=y);String.prototype.includes||(String.prototype.includes=x);String.prototype.codePointAt||(String.prototype.codePointAt=w);String.prototype.repeat||(String.prototype.repeat=v);t("values",function(){return r(this,function(a,b){return b})});t("keys",function(){return r(this,function(a){return a})});t("entries",function(){return r(this,function(a,b){return[a,b]})});function __extends(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}
function __decorate(a,b,c,d){var e=arguments.length,f=3>e?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d,n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)f=Reflect.decorate(a,b,c,d);else for(var g=a.length-1;0<=g;g--)if(n=a[g])f=(3>e?n(f):3<e?n(b,c,f):n(b,c))||f;return 3<e&&f&&Object.defineProperty(b,c,f),f}function __metadata(a,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(a,b)}
var __param=function(a,b){return function(c,d){b(c,d,a)}},__awaiter=function(a,b,c,d){return new (c||(c=Promise))(function(e,f){function n(a){try{C(d.next(a))}catch(b){f(b)}}function g(a){try{C(d.throw(a))}catch(b){f(b)}}function C(a){a.done?e(a.value):(new c(function(b){b(a.value)})).then(n,g)}C((d=d.apply(a,b)).next())})};function A(a,b){if(!(b instanceof Object))return b;switch(b.constructor){case Date:return new Date(b.getTime());case Object:void 0===a&&(a={});break;case Array:a=[];break;default:return b}for(var c in b)b.hasOwnProperty(c)&&(a[c]=A(a[c],b[c]));return a};var B=Error.captureStackTrace,E=function(a,b){this.code=a;this.message=b;if(B)B(this,D.prototype.create);else{var c=Error.apply(this,arguments);this.name="FirebaseError";Object.defineProperty(this,"stack",{get:function(){return c.stack}})}};E.prototype=Object.create(Error.prototype);E.prototype.constructor=E;E.prototype.name="FirebaseError";var D=function(a,b,c){this.w=a;this.A=b;this.m=c;this.pattern=/\{\$([^}]+)}/g};
D.prototype.create=function(a,b){void 0===b&&(b={});var c=this.m[a];a=this.w+"/"+a;var c=void 0===c?"Error":c.replace(this.pattern,function(a,c){return void 0!==b[c]?b[c].toString():"<"+c+"?>"}),c=this.A+": "+c+" ("+a+").",c=new E(a,c),d;for(d in b)b.hasOwnProperty(d)&&"_"!==d.slice(-1)&&(c[d]=b[d]);return c};var F="undefined"!==typeof Promise?Promise:require("rsvp").Promise;function G(a,b){a=new H(a,b);return a.subscribe.bind(a)}var H=function(a,b){var c=this;this.a=[];this.l=0;this.task=F.resolve();this.c=!1;this.g=b;this.task.then(function(){a(c)}).catch(function(a){c.error(a)})};H.prototype.next=function(a){I(this,function(b){b.next(a)})};H.prototype.error=function(a){I(this,function(b){b.error(a)});this.close(a)};H.prototype.complete=function(){I(this,function(a){a.complete()});this.close()};
H.prototype.subscribe=function(a,b,c){var d=this,e;if(void 0===a&&void 0===b&&void 0===c)throw Error("Missing Observer.");e=J(a)?a:{next:a,error:b,complete:c};void 0===e.next&&(e.next=K);void 0===e.error&&(e.error=K);void 0===e.complete&&(e.complete=K);a=this.B.bind(this,this.a.length);this.c&&this.task.then(function(){try{d.h?e.error(d.h):e.complete()}catch(a){}});this.a.push(e);return a};
H.prototype.B=function(a){void 0!==this.a&&void 0!==this.a[a]&&(this.a[a]=void 0,--this.l,0===this.l&&void 0!==this.g&&this.g(this))};var I=function(a,b){if(!a.c)for(var c=0;c<a.a.length;c++)L(a,c,b)},L=function(a,b,c){a.task.then(function(){if(void 0!==a.a&&void 0!==a.a[b])try{c(a.a[b])}catch(d){}})};H.prototype.close=function(a){var b=this;this.c||(this.c=!0,void 0!==a&&(this.h=a),this.task.then(function(){b.a=void 0;b.g=void 0}))};
function J(a){if("object"!==typeof a||null===a)return!1;for(var b=q(),c=b.next();!c.done;c=b.next())if(c=c.value,c in a&&"function"===typeof a[c])return!0;return!1}function K(){};var M=function(a,b,c){var d=this;this.i=c;this.j=!1;this.b={};this.s={};this.f=b;this.v=A(void 0,a);Object.keys(c.INTERNAL.factories).forEach(function(a){d[a]=d.u.bind(d,a)})};M.prototype.delete=function(){var a=this;return(new F(function(b){N(a);b()})).then(function(){a.i.INTERNAL.removeApp(a.f);return F.all(Object.keys(a.b).map(function(b){return a.b[b].INTERNAL.delete()}))}).then(function(){a.j=!0;a.b=null;a.s=null})};
M.prototype.u=function(a){N(this);void 0===this.b[a]&&(this.b[a]=this.i.INTERNAL.factories[a](this,this.o.bind(this)));return this.b[a]};M.prototype.o=function(a){A(this,a)};var N=function(a){a.j&&O(P("deleted",{name:a.f}))};Object.defineProperties(M.prototype,{name:{configurable:!0,enumerable:!0,get:function(){N(this);return this.f}},options:{configurable:!0,enumerable:!0,get:function(){N(this);return this.v}}});M.prototype.name&&M.prototype.options||M.prototype.delete||console.log("dc");
function Q(){function a(a){a=a||"[DEFAULT]";var c=b[a];void 0===c&&O("noApp",{name:a});return c}var b={},c={},d=[],e={initializeApp:function(a,c){void 0===c?c="[DEFAULT]":"string"===typeof c&&""!==c||O("bad-app-name",{name:c+""});void 0!==b[c]&&O("dupApp",{name:c});var g=new M(a,c,e);b[c]=g;d.forEach(function(a){return a("create",g)});void 0!=g.INTERNAL&&void 0!=g.INTERNAL.getToken||A(g,{INTERNAL:{getToken:function(){return F.resolve(null)},addAuthTokenListener:function(){},removeAuthTokenListener:function(){}}});
return g},app:a,apps:null,Promise:F,SDK_VERSION:"0.0.0",INTERNAL:{registerService:function(b,d,g){c[b]&&O("dupService",{name:b});c[b]=d;d=function(c){void 0===c&&(c=a());return c[b]()};void 0!==g&&A(d,g);return e[b]=d},createFirebaseNamespace:Q,extendNamespace:function(a){A(e,a)},createSubscribe:G,ErrorFactory:D,registerAppHook:function(a){d.push(a)},removeApp:function(a){d.forEach(function(c){return c("delete",b[a])});delete b[a]},factories:c,Promise:void 0,deepExtend:A}};Object.defineProperty(e,
"apps",{get:function(){return Object.keys(b).map(function(a){return b[a]})}});a.App=M;return e}function O(a,b){throw Error(P(a,b));}
function P(a,b){b=b||{};b={noApp:"No Firebase App '"+b.name+"' has been created - call Firebase App.initializeApp().","bad-app-name":"Illegal App name: '"+b.name+"'.",dupApp:"Firebase App named '"+b.name+"' already exists.",deleted:"Firebase App named '"+b.name+"' already deleted.",dupService:"Firebase Service named '"+b.name+"' already registered."}[a];return void 0===b?"Application Error: ("+a+")":b};var R=Q(),S=["$__firebase"],T=this;S[0]in T||!T.execScript||T.execScript("var "+S[0]);for(var U;S.length&&(U=S.shift());){var V;if(V=!S.length)V=void 0!==R;V?T[U]=R:T=T[U]?T[U]:T[U]={}};; return $__firebase; })(); module.exports = firebase;
firebase.SDK_VERSION = "3.1.0";