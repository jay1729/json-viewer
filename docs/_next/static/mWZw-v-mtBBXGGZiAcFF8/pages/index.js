(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,a=t.hasQuery;return n||o&&(void 0!==a&&a)}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";e.__esModule=!0,e.defaultHead=u,e.default=void 0;var r=c(n("q1tI")),o=c(n("Xuae")),a=n("lwAK"),i=n("FYa8"),s=n("/0+H");function c(t){return t&&t.__esModule?t:{default:t}}function u(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[r.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===r.default.Fragment?t.concat(r.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var p=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce((function(t,e){var n=r.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(u(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var a=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var i=o.key.slice(o.key.indexOf("$")+1);t.has(i)?a=!1:t.add(i)}switch(o.type){case"title":case"base":e.has(o.type)?a=!1:e.add(o.type);break;case"meta":for(var s=0,c=p.length;s<c;s++){var u=p[s];if(o.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?a=!1:n.add(u);else{var l=o.props[u],f=r[u]||new Set;f.has(l)?a=!1:(f.add(l),r[u]=f)}}}return a}}()).reverse().map((function(t,e){var n=t.key||e;return r.default.cloneElement(t,{key:n})}))}var d=(0,o.default)();function h(t){var e=t.children;return(r.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return r.default.createElement(i.HeadManagerContext.Consumer,null,(function(n){return r.default.createElement(d,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:(0,s.isInAmpMode)(t)},e)}))})))}h.rewind=d.rewind;var y=h;e.default=y},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);e.HeadManagerContext=o},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),i=n("Bnag");t.exports=function(t){return r(t)||o(t)||a(t)||i()}},RNiq:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),t}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function u(t){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){return!e||"object"!==u(e)&&"function"!==typeof e?i(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.r(e);var f=n("8Kt/"),d=n.n(f),h=n("q1tI"),y=n.n(h);function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function m(t){return function(t){if(Array.isArray(t))return v(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?v(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var b=y.a.createElement;var g=function(t){return b("svg",{onClick:t.clickCallback,xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},b("path",{d:"M0 0h24v24H0V0z",fill:"none"}),b("path",{d:"M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"}))},k=y.a.createElement;var w=function(t){return k("svg",{onClick:t.clickCallback,xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24"},k("path",{d:"M0 0h24v24H0V0z",fill:"none"}),k("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}))},j=y.a.createElement;function x(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var S=function(t){c(n,t);var e=x(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).state={rightArrow:!0,childrenDisplay:"none"},o.renderArrow=o.renderArrow.bind(i(o)),o.toggleChildren=o.toggleChildren.bind(i(o)),o.expandCallback=o.expandCallback.bind(i(o)),o.minifiedText=o.minifiedText.bind(i(o)),o.jsonPath=o.jsonPath.bind(i(o)),o}return a(n,[{key:"renderArrow",value:function(t){return this.state.rightArrow?j(g,{clickCallback:t}):j(w,{clickCallback:t})}},{key:"toggleChildren",value:function(){this.state.rightArrow?this.setState({rightArrow:!1,childrenDisplay:"block"}):this.setState({rightArrow:!0,childrenDisplay:"none"})}},{key:"makeChildrenVisible",value:function(){this.state.rightArrow&&this.setState({rightArrow:!1,childrenDisplay:"block"})}},{key:"expandCallback",value:function(){this.makeChildrenVisible(),null!==this.props.expandCallback&&void 0!==this.props.expandCallback&&this.props.expandCallback()}},{key:"minifiedText",value:function(t){return t.length<80?j("div",null,t):j("div",null,t.slice(0,80),j("span",{"data-toggle":"popover","data-content":t},"..."))}},{key:"jsonPath",value:function(){var t="",e=this.props.path;return Object.keys(this.props.obj).length<2&&(e=this.props.path.slice(0,this.props.path.length-1)),e.map((function(e){t+="['"+e+"']"})),t}},{key:"componentDidMount",value:function(){$((function(){$('[data-toggle="tooltip"]').tooltip()})),$((function(){$('[data-toggle="popover"]').popover()}))}},{key:"render",value:function(){var t=this;return j("div",null,j("div",{id:this.props.obj.id,className:"card bg-light"},j("div",{className:"card-body d-flex"},Object.keys(this.props.obj).length>1?this.renderArrow(this.toggleChildren):null,this.minifiedText(this.props.name)),j("div",{className:"card bg-dark ml-auto",style:{overflow:"hidden",height:"100%",width:"7px",position:"absolute",right:0},"data-toggle":"popover","data-content":this.jsonPath()})),Object.keys(this.props.obj).length>1?j("div",{id:this.props.obj.id+"-children",className:"card",style:{display:this.state.childrenDisplay}},j("div",{className:"card-body"},Object.keys(this.props.obj).map((function(e){return"id"===e?null:null===t.props.obj[e]?null:(e.includes(t.props.searchTerm)&&t.expandCallback(),j(n,{name:e,key:t.props.obj[e].id,obj:t.props.obj[e],searchTerm:t.props.searchTerm,expandCallback:t.expandCallback,path:[].concat(m(t.props.path),[e])}))})))):null)}}]),n}(y.a.Component),C=y.a.createElement;function O(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var I=function(t){c(n,t);var e=O(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).generateIdsInJson=o.generateIdsInJson.bind(i(o)),o.processJson=o.processJson.bind(i(o)),o.searchForString=o.searchForString.bind(i(o)),o.expandCallback=o.expandCallback.bind(i(o)),o.state={json:{},searchTerm:null},o}return a(n,[{key:"mergeJsons",value:function(t,e){var n=JSON.parse(JSON.stringify(t));for(var r in e)n[r]=e[r];return n}},{key:"generateIdsInJson",value:function(t){var e=this;console.log("JSON received",t);var n=JSON.parse(JSON.stringify(t));if(null===n)return null;if("object"!==typeof t){var r={};return r[n]={id:Math.random().toString(36).substring(2)},(n=r).id=Math.random().toString(36).substring(2),n}return n.id=Math.random().toString(36).substring(2),Object.keys(n).forEach((function(t,r){"id"!==t&&(n[t]=e.generateIdsInJson(n[t]))})),n}},{key:"processJson",value:function(t){this.setState({json:this.generateIdsInJson(t)})}},{key:"componentDidMount",value:function(){this.processJson(this.props.json),$((function(){$('[data-toggle="tooltip"]').tooltip()})),$((function(){$('[data-toggle="popover"]').popover()}))}},{key:"searchForString",value:function(){var t=document.getElementById("searchValue").value;this.setState({searchTerm:t})}},{key:"expandCallback",value:function(){this.setState({searchTerm:null})}},{key:"render",value:function(){var t=this;return console.log(this.state.json),C("div",{className:"my-5",style:{minWidth:"500px"}},C("div",{className:"input-group my-4"},C("input",{id:"searchValue",className:"form-control"}),C("div",{className:"input-group-append"},C("button",{onClick:this.searchForString,className:"btn btn-secondary"},"Search"))),Object.keys(this.state.json).map((function(e){return"id"===e?null:null===t.state.json[e]?null:C(S,{name:e,key:t.state.json[e].id,obj:t.state.json[e],searchTerm:t.state.searchTerm,expandCallback:t.expandCallback,path:[e]})})))}}]),n}(y.a.Component),A=y.a.createElement;function _(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function N(t){return t.props.getInput?(e=t.parseCallback,A("div",{className:"d-flex flex-column input-group w-50 my-4",style:{height:"100vh"}},A("div",{className:"d-flex flex-row",style:{height:"50vh"}},A("div",{className:"input-group-prepend"},A("span",{className:"input-group-text"},"Input ",A("br",null)," JSON")),A("textarea",{id:"json",className:"form-control","aria-label":"Input JSON"})),A("div",null,A("button",{id:"parse-json",type:"button",onClick:function(){e(document.getElementById("json").value)},className:"btn btn-dark my-4"},"Parse")))):(n=t.props.json,A("div",null,A(I,{json:n})));var e,n}var P=function(t){c(n,t);var e=_(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).state={getInput:!0,json:null},o.parseJson=o.parseJson.bind(i(o)),o}return a(n,[{key:"parseJson",value:function(t){console.log("parsing...",t),this.setState({getInput:!1,json:JSON.parse(t)})}},{key:"componentDidMount",value:function(){$((function(){$('[data-toggle="tooltip"]').tooltip()})),$((function(){$('[data-toggle="popover"]').popover()}))}},{key:"render",value:function(){return A("div",{className:"Main",style:{height:"500px"}},A(d.a,null,A("title",null,"JSON Viewer"),A("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",integrity:"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",crossOrigin:"anonymous"})),A("nav",{className:"navbar navbar-dark bg-dark "},A("div",{className:"navbar-brand"},"JSON Viewer")),A("div",{className:"d-flex justify-content-center h-100",style:{height:"100vh"}},A(N,{props:this.state,parseCallback:this.parseJson})),A("script",{src:"https://code.jquery.com/jquery-3.5.1.slim.min.js",integrity:"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj",crossorigin:"anonymous"}),A("script",{src:"https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js",integrity:"sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo",crossorigin:"anonymous"}),A("script",{src:"https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js",integrity:"sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI",crossorigin:"anonymous"}))}}]),n}(y.a.Component);e.default=P},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},Xuae:function(t,e,n){"use strict";var r=n("lwsE"),o=n("PJYZ"),a=n("W8MJ"),i=n("7W2i"),s=n("a1gu"),c=n("Nsbk"),u=n("RIqP");function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}e.__esModule=!0,e.default=void 0;var p=n("q1tI"),f=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(u(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return(function(s){i(u,s);var c=l(u);function u(t){var a;return r(this,u),a=c.call(this,t),f&&(e.add(o(a)),n(o(a))),a}return a(u,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),a(u,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),u}(p.Component))}},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},vlRD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1]]]);