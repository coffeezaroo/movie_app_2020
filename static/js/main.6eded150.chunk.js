/*! For license information please see main.6eded150.chunk.js.LICENSE.txt */
(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{29:function(t,e,r){t.exports=r(64)},34:function(t,e,r){},35:function(t,e,r){},53:function(t,e,r){},62:function(t,e,r){},63:function(t,e,r){},64:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(25),i=r.n(a),c=(r(34),r(7)),u=r(1);r(35);var s=function(t){return console.log(t),o.a.createElement("div",{className:"about__container"},o.a.createElement("span",null,'"Freedom is the freedom to say that two plus two make four. If that is granted, all else follows."'),o.a.createElement("span",null,"- George Orwell, 1984"))},l=r(26),f=r(9),h=r(10),m=r(13),p=r(12),v=r(27),d=r.n(v);r(53);var y=function(t){var e=t.title,r=t.year,n=t.summary,a=t.poster,i=t.genres;return o.a.createElement("div",{className:"movie"},o.a.createElement(c.b,{to:{pathname:"/movie-detail",state:{year:r,title:e,summary:n,poster:a,genres:i}}},o.a.createElement("img",{src:a,alt:e,title:e}),o.a.createElement("div",{className:"movie__data"},o.a.createElement("h3",{className:"movie__title"},e),o.a.createElement("h5",{className:"movie__year"},r),o.a.createElement("ul",{className:"movie__genres"},i.map((function(t,e){return o.a.createElement("li",{key:e,className:"movie__genre"},t)}))),o.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"..."))))};r(62);function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(G){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new j(o||[]);return n(i,"_invoke",{value:_(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(G){return{type:"throw",arg:G}}}t.wrap=s;var f={};function h(){}function m(){}function p(){}var v={};u(v,a,(function(){return this}));var d=Object.getPrototypeOf,y=d&&d(d(N([])));y&&y!==e&&r.call(y,a)&&(v=y);var w=p.prototype=h.prototype=Object.create(v);function E(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){var o;n(this,"_invoke",{value:function(n,a){function i(){return new e((function(o,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(n,a,o,i)}))}return o=o?o.then(i,i):i()}})}function _(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=x(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=p,n(w,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:m,configurable:!0}),m.displayName=u(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(b.prototype),u(b.prototype,i,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new b(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(w),u(w,c,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var w=function(t){Object(m.a)(r,t);var e=Object(p.a)(r);function r(){var t;Object(f.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={isLoading:!0,movies:[]},t.getMovies=Object(l.a)(g().mark((function e(){var r,n;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:r=e.sent,n=r.data.data.movies,t.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),t}return Object(h.a)(r,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var t=this.state,e=t.isLoading,r=t.movies;return o.a.createElement("section",{className:"container"},e?o.a.createElement("div",{className:"loader"},o.a.createElement("span",{className:"loader__text"},"Loading...")):o.a.createElement("div",{className:"movies"},r.map((function(t){return o.a.createElement(y,{key:t.id,id:t.id,year:t.year,title:t.title,summary:t.summary,poster:t.medium_cover_image,genres:t.genres})}))))}}]),r}(o.a.Component);r(63);var E=function(){return o.a.createElement("div",{className:"nav"},o.a.createElement(c.b,{to:"/"},"Home"),o.a.createElement(c.b,{to:"/about"},"About"))},b=function(t){Object(m.a)(r,t);var e=Object(p.a)(r);function r(){return Object(f.a)(this,r),e.apply(this,arguments)}return Object(h.a)(r,[{key:"componentDidMount",value:function(){var t=this.props,e=t.location,r=t.history;void 0===e.state&&r.push("/")}},{key:"render",value:function(){var t=this.props.location;return t.state?o.a.createElement("span",null,t.state.title):null}}]),r}(o.a.Component);var _=function(){return o.a.createElement(c.a,null,o.a.createElement(E,null),o.a.createElement(u.a,{path:"/",exact:!0,component:w}),o.a.createElement(u.a,{path:"/about",component:s}),o.a.createElement(u.a,{path:"/movie-detail",component:b}))};i.a.render(o.a.createElement(_,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.6eded150.chunk.js.map