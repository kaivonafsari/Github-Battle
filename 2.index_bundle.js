(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{341:function(e,t,r){"use strict";function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function o(e,t,r,n,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,o)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var c=e.apply(t,r);function i(e){o(c,n,a,i,u,"next",e)}function u(e){o(c,n,a,i,u,"throw",e)}i(void 0)}))}}r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var c="?client_id=".concat("YOUR_CLIENT ID","&client_secret=").concat("YOUR_SECRET"),i=function(e,t){return"Not Found"===e?"".concat(t," doesnt exist"):e},u=function(){var e=a(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(t).concat(c));case 3:return r=e.sent,e.next=6,r.json();case 6:if(!(n=e.sent).message){e.next=9;break}throw new Error(i(n.message,t));case 9:return e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(0),console.log("--getProfile there was an error",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=a(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(t,"/repos").concat(c,"&per_page=100"));case 3:return r=e.sent,e.next=6,r.json();case 6:if(!(n=e.sent).message){e.next=9;break}throw new Error(i(n.message,t));case 9:return e.abrupt("return",n);case 12:e.prev=12,e.t0=e.catch(0),console.log("--getRepos Error",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=a(regeneratorRuntime.mark((function e(t){var r,o,a,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n(t,2),o=r[0],a=r[1],e.next=3,Promise.all([p(o),p(a)]);case 3:return c=e.sent,e.abrupt("return",c.sort((function(e,t){return t.score-e.score})));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e,t){return 3*e+function(e){return e.reduce((function(e,t){return e+t.stargazers_count}),0)}(t)},p=function(){var e=a(regeneratorRuntime.mark((function e(t){var r,o,a,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([u(t),s(t)]);case 2:return r=e.sent,o=n(r,2),a=o[0],c=o[1],e.abrupt("return",{profile:a,score:f(a.followers,c)});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=a(regeneratorRuntime.mark((function e(t){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=window.encodeURI("https://api.github.com/search/repositories?q=stars:>1+language:".concat(t,"&sort=stars&order=desc&type=Repositories")),e.prev=1,e.next=4,fetch(r);case 4:return n=e.sent,e.next=7,n.json();case 7:return o=e.sent,e.abrupt("return",o);case 11:e.prev=11,e.t0=e.catch(1),console.log("--fetchPopularRepos Error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},342:function(e,t,r){"use strict";var n=r(1),o=r.n(n),a=r(31),c=r.n(a),i=r(57),u=function(e){var t=e.header,r=e.subHeader,n=e.avatar,a=e.href,c=e.name,u=e.children;return o.a.createElement(i.a,null,(function(e){var i=e.theme;return o.a.createElement("div",{className:"card bg-".concat(i)},o.a.createElement("h4",{className:"header-lg center-text"},t),o.a.createElement("img",{className:"avatar",src:n,alt:"Avatar for ".concat(n)}),r&&o.a.createElement("h4",{className:"center-text"},r),o.a.createElement("h2",{className:"center-text"},o.a.createElement("a",{className:"link",href:a},c)),u)}))};u.propTypes={header:c.a.string.isRequired,subHeader:c.a.string,avatar:c.a.string.isRequired,href:c.a.string.isRequired,name:c.a.string.isRequired},t.a=u},344:function(e,t,r){"use strict";var n=r(1),o=r.n(n),a=r(31),c=r.n(a);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){var e,r;u(this,t);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(r=l(this,(e=f(t)).call.apply(e,[this].concat(o)))).state={hovering:!1},r.onMouseOver=function(){r.setState({hovering:!0})},r.onMouseOut=function(){r.setState({hovering:!1})},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.state.hovering;return o.a.createElement("div",{onMouseOver:this.onMouseOver,onMouseOut:this.onMouseOut},this.props.children(e))}}])&&s(r.prototype,n),a&&s(r,a),t}(o.a.Component),y={container:{position:"relative",display:"flex"},tooltip:{boxSizing:"border-box",position:"absolute",width:"160px",bottom:"100%",left:"50%",marginLeft:"-80px",borderRadius:"3px",backgroundColor:"hsla(0, 0%, 20%, 0.9)",padding:"7px",marginBottom:"5px",color:"#fff",textAlign:"center",fontSize:"14px"}},d=function(e){var t=e.text,r=e.children;return o.a.createElement(m,null,(function(e){return o.a.createElement("div",{style:y.container},e&&o.a.createElement("div",{style:y.tooltip},t),r)}))};d.propTypes={text:c.a.string.isRequired};t.a=d},345:function(e,t,r){"use strict";const n=r(346),o=r(347),a=r(348);function c(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function i(e,t){return t.decode?o(e):e}function u(e){const t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function s(e){const t=(e=u(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function l(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):!t.parseBooleans||null===e||"true"!==e.toLowerCase()&&"false"!==e.toLowerCase()||(e="true"===e.toLowerCase()),e}function f(e,t){const r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return(e,r,n)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};case"comma":return(e,t,r)=>{const n="string"==typeof t&&t.split("").indexOf(",")>-1?t.split(","):t;r[e]=n};default:return(e,t,r)=>{void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},t)),n=Object.create(null);if("string"!=typeof e)return n;if(!(e=e.trim().replace(/^[?#&]/,"")))return n;for(const o of e.split("&")){let[e,c]=a(t.decode?o.replace(/\+/g," "):o,"=");c=void 0===c?null:i(c,t),r(i(e,t),c,n)}for(const e of Object.keys(n)){const r=n[e];if("object"==typeof r&&null!==r)for(const e of Object.keys(r))r[e]=l(r[e],t);else n[e]=l(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{const r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=s,t.parse=f,t.stringify=(e,t)=>{if(!e)return"";const r=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{const o=r.length;return void 0===n||e.skipNull&&null===n?r:null===n?[...r,[c(t,e),"[",o,"]"].join("")]:[...r,[c(t,e),"[",c(o,e),"]=",c(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n?r:null===n?[...r,[c(t,e),"[]"].join("")]:[...r,[c(t,e),"[]=",c(n,e)].join("")];case"comma":return t=>(r,n)=>null==n||0===n.length?r:0===r.length?[[c(t,e),"=",c(n,e)].join("")]:[[r,c(n,e)].join(",")];default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n?r:null===n?[...r,c(t,e)]:[...r,[c(t,e),"=",c(n,e)].join("")]}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),n=Object.assign({},e);if(t.skipNull)for(const e of Object.keys(n))void 0!==n[e]&&null!==n[e]||delete n[e];const o=Object.keys(n);return!1!==t.sort&&o.sort(t.sort),o.map(n=>{const o=e[n];return void 0===o?"":null===o?c(n,t):Array.isArray(o)?o.reduce(r(n),[]).join("&"):c(n,t)+"="+c(o,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>({url:u(e).split("?")[0]||"",query:f(s(e),t)}),t.stringifyUrl=(e,r)=>{const n=u(e.url).split("?")[0]||"",o=t.extract(e.url),a=t.parse(o),c=function(e){let t="";const r=e.indexOf("#");return-1!==r&&(t=e.slice(r)),t}(e.url),i=Object.assign(a,e.query);let s=t.stringify(i,r);return s&&(s=`?${s}`),`${n}${s}${c}`}},346:function(e,t,r){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},347:function(e,t,r){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var r=e.slice(0,t),n=e.slice(t);return Array.prototype.concat.call([],a(r),a(n))}function c(e){try{return decodeURIComponent(e)}catch(o){for(var t=e.match(n),r=1;r<t.length;r++)t=(e=a(t,r).join("")).match(n);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},r=o.exec(e);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var n=c(r[0]);n!==r[0]&&(t[r[0]]=n)}r=o.exec(e)}t["%C2"]="�";for(var a=Object.keys(t),i=0;i<a.length;i++){var u=a[i];e=e.replace(new RegExp(u,"g"),t[u])}return e}(e)}}},348:function(e,t,r){"use strict";e.exports=(e,t)=>{if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];const r=e.indexOf(t);return-1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},351:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return R}));var n=r(1),o=r.n(n),a=r(341),c=r(343),i=r(31),u=r.n(i),s=r(342),l=r(101),f=r(344),p=r(345),m=r.n(p),y=r(56);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function h(e,t,r,n,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void r(e)}i.done?t(u):Promise.resolve(u).then(n,o)}function g(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function c(e){h(a,n,o,c,i,"next",e)}function i(e){h(a,n,o,c,i,"throw",e)}c(void 0)}))}}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function x(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var O=function(e){var t=e.profile;return o.a.createElement("ul",{className:"card-list"},o.a.createElement("li",null,o.a.createElement(c.i,{color:"rgb(239, 115, 115)",size:22}),t.name),t.location&&o.a.createElement("li",null,o.a.createElement(f.a,{text:"User's Location"},o.a.createElement(c.c,{color:"rgb(144, 115, 255)",size:22}),t.location)),t.company&&o.a.createElement("li",null,o.a.createElement(f.a,{text:"User's Company"},o.a.createElement(c.a,{color:"#795548",size:22}),t.company)),o.a.createElement("li",null,o.a.createElement(c.k,{color:"rgb(129, 194, 245)",size:22}),t.followers.toLocaleString()," followers"),o.a.createElement("li",null,o.a.createElement(c.j,{color:"rgb(64, 183, 95)",size:22}),t.following.toLocaleString()," following"))};O.propTypes={profile:u.a.object.isRequired};var R=function(e){function t(){var e,r;v(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(r=x(this,(e=E(t)).call.apply(e,[this].concat(o)))).state={winner:null,loser:null,error:null,loading:!0},r.componentDidMount=g(regeneratorRuntime.mark((function e(){var t,n,o,c,i,u,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=m.a.parse(r.props.location.search),n=t.playerOne,o=t.playerTwo,e.next=4,Object(a.a)([n,o]);case 4:c=e.sent,i=b(c,2),u=i[0],s=i[1],r.setState({winner:u,loser:s,error:null,loading:!1}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),r.setState({error:e.t0});case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),r}var r,n,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.state,t=e.winner,r=e.loser,n=e.error;if(e.loading)return o.a.createElement(l.a,{text:"Battling"});if(n)return o.a.createElement("p",{className:"center-text error"},n);var a=t.score===r.score;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"grid space-around container-sm"},o.a.createElement(s.a,{header:a?"Tie":"Winner",subHeader:"Score: ".concat(t.score.toLocaleString()),avatar:t.profile.avatar_url,href:t.profile.html_url,name:t.profile.login},o.a.createElement(O,{profile:t.profile})),o.a.createElement(s.a,{header:a?"Tie":"Loser",subHeader:"Score: ".concat(r.score.toLocaleString()),avatar:r.profile.avatar_url,href:r.profile.html_url,name:r.profile.login},o.a.createElement(O,{profile:r.profile}))),o.a.createElement(y.b,{className:"btn dark-btn btn-space",to:"/battle"},"Reset"))}}])&&w(r.prototype,n),c&&w(r,c),t}(o.a.Component);R.propTypes={playerOne:u.a.string.isRequired,playerTwo:u.a.string.isRequired}}}]);