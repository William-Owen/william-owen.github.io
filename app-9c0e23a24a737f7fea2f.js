webpackJsonp([0xd2a57dc1d883],{74:function(n,e,t){"use strict";function o(n,e,t){var o=a.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return a.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var a=[{plugin:t(323),options:{plugins:[],color:"tomato",showSpinner:!1}}]},188:function(n,e,t){"use strict";var o;e.components={"component---src-templates-tags-js":t(302),"component---src-templates-post-js":t(301),"component---src-pages-404-js":t(294),"component---src-pages-about-js":t(295),"component---src-pages-articles-js":t(296),"component---src-pages-contact-js":t(297),"component---src-pages-index-js":t(298),"component---src-pages-projects-js":t(299),"component---src-pages-tech-js":t(300)},e.json=(o={"layout-index.json":t(9),"tags.json":t(313)},o["layout-index.json"]=t(9),o["tags-resource.json"]=t(318),o["layout-index.json"]=t(9),o["tags-icons.json"]=t(316),o["layout-index.json"]=t(9),o["tags-react.json"]=t(317),o["layout-index.json"]=t(9),o["tags-user-experience.json"]=t(319),o["layout-index.json"]=t(9),o["tags-website.json"]=t(320),o["layout-index.json"]=t(9),o["tags-code.json"]=t(314),o["layout-index.json"]=t(9),o["tags-git.json"]=t(315),o["layout-index.json"]=t(9),o["simple-icons-project.json"]=t(312),o["layout-index.json"]=t(9),o["ux-as-a-holistic-responsibility.json"]=t(322),o["layout-index.json"]=t(9),o["eating-my-own-dog-food.json"]=t(309),o["layout-index.json"]=t(9),o["adding-tab-completion-for-git-on-mac-os.json"]=t(306),o["layout-index.json"]=t(9),o["404.json"]=t(303),o["layout-index.json"]=t(9),o["about.json"]=t(305),o["layout-index.json"]=t(9),o["articles.json"]=t(307),o["layout-index.json"]=t(9),o["contact.json"]=t(308),o["layout-index.json"]=t(9),o["index.json"]=t(310),o["layout-index.json"]=t(9),o["projects.json"]=t(311),o["layout-index.json"]=t(9),o["tech.json"]=t(321),o["layout-index.json"]=t(9),o["404-html.json"]=t(304),o),e.layouts={"component---src-layouts-index-js":t(293)}},189:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},i=t(1),c=o(i),l=t(7),p=o(l),f=t(122),d=o(f),m=t(58),g=o(m),h=t(74),y=function(n){var e=n.children;return c.default.createElement("div",null,e())},x=function(n){function e(t){r(this,e);var o=a(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,s({},u,{pathname:"/404.html"}))),o.state={location:u,pageResources:d.default.getResourcesForPathname(t.location.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);t?this.setState({location:n.location,pageResources:t}):d.default.getResourcesForPathname(n.location.pathname,function(t){e.setState({location:n.location,pageResources:t})})}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);x.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=x,n.exports=e.default},58:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(353),a=o(r),u=(0,a.default)();n.exports=u},190:function(n,e,t){"use strict";var o=t(73),r={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=decodeURIComponent(t),u=a.slice(e.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,o.matchPath)(u,{path:n.path})||(0,o.matchPath)(u,{path:n.matchPath}))return s=n,r[u]=n,!0}else{if((0,o.matchPath)(u,{path:n.path,exact:!0}))return s=n,r[u]=n,!0;if((0,o.matchPath)(u,{path:n.path+"index.html"}))return s=n,r[u]=n,!0}return!1}),s}}},191:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(98),a=o(r),u=t(74),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();n.exports=c},304:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(331)})})}},303:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(332)})})}},305:function(n,e,t){t(3),n.exports=function(n){return t.e(0xf927f8900006,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(333)})})}},306:function(n,e,t){t(3),n.exports=function(n){return t.e(0xcfc119d84d29,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(334)})})}},307:function(n,e,t){t(3),n.exports=function(n){return t.e(56932394960959,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(335)})})}},308:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa7f31e1aeaea,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(336)})})}},309:function(n,e,t){t(3),n.exports=function(n){return t.e(54030746501276,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(337)})})}},310:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(338)})})}},9:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(100)})})}},311:function(n,e,t){t(3),n.exports=function(n){return t.e(97786326051841,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(339)})})}},312:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9ed2f5b222e0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(340)})})}},314:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe8a612e7b5fb,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(341)})})}},315:function(n,e,t){t(3),n.exports=function(n){return t.e(0xcca08df713f4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(342)})})}},316:function(n,e,t){t(3),n.exports=function(n){return t.e(0x60c376c9bfe4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(343)})})}},317:function(n,e,t){t(3),n.exports=function(n){return t.e(84586273293571,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(344)})})}},318:function(n,e,t){t(3),n.exports=function(n){return t.e(0x5b0ea5a2c25a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(345)})})}},319:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe57aeb4b750,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(346)})})}},320:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9336e33a0036,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(347)})})}},313:function(n,e,t){t(3),n.exports=function(n){return t.e(55702396619907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(348)})})}},321:function(n,e,t){t(3),n.exports=function(n){return t.e(53469759257251,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(349)})})}},322:function(n,e,t){t(3),n.exports=function(n){return t.e(0xcd2f8ebbadac,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(350)})})}},293:function(n,e,t){t(3),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(192)})})}},122:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(1),a=(o(r),t(190)),u=o(a),s=t(58),i=o(s),c=void 0,l={},p={},f={},d={},m={},g=[],h=[],y={},x=[],v={},j=function(n){return n&&n.default||n},b=void 0,R=!0;b=t(193)({getNextQueuedResources:function(){return x.slice(-1)[0]},createResourceDownload:function(n){k(n,function(){x=x.filter(function(e){return e!==n}),b.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){b.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){b.onPostLoadPageResources(n)});var C=function(n,e){return v[n]>v[e]?1:v[n]<v[e]?-1:0},N=function(n,e){return y[n]>y[e]?1:y[n]<y[e]?-1:0},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[e])n.nextTick(function(){t(null,d[e])});else{var o="component---"===e.slice(0,12)?p.components[e]||p.layouts[e]:p.json[e];o(function(n,o){d[e]=o,t(n,o)})}},w=function(e,t){m[e]?n.nextTick(function(){t(null,m[e])}):k(e,function(n,o){if(n)t(n);else{var r=j(o());m[e]=r,t(n,r)}})},P=1,_={empty:function(){h=[],y={},v={},x=[],g=[]},addPagesArray:function(n){g=n;var e="";e="",c=(0,u.default)(n,e)},addDevRequires:function(n){l=n},addProdRequires:function(n){p=n},dequeue:function(n){return h.pop()},enqueue:function(n){if(!g.some(function(e){return e.path===n}))return!1;var e=1/P;P+=1,y[n]?y[n]+=1:y[n]=1,_.has(n)||h.unshift(n),h.sort(N);var t=c(n);return t.jsonName&&(v[t.jsonName]?v[t.jsonName]+=1+e:v[t.jsonName]=1+e,x.indexOf(t.jsonName)!==-1||d[t.jsonName]||x.unshift(t.jsonName)),t.componentChunkName&&(v[t.componentChunkName]?v[t.componentChunkName]+=1+e:v[t.componentChunkName]=1+e,x.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||x.unshift(t.componentChunkName)),x.sort(C),b.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:x,resourcesCount:v}},getPages:function(){return{pathArray:h,pathCount:y}},getPage:function(n){return c(n)},has:function(n){return h.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};R&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(c(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),R=!1;var o=c(e);if(!o)return console.log("A page wasn't found for \""+e+'"'),t();if(e=o.path,f[e])return n.nextTick(function(){t(f[e]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:f[e]})}),f[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){f[e]={component:r,json:a,layout:u,page:o};var n={component:r,json:a,layout:u,page:o};t(n),i.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return w(o.componentChunkName,function(n,e){n&&console.log("Loading the component for "+o.path+" failed"),r=e,s()}),w(o.jsonName,function(n,e){n&&console.log("Loading the JSON for "+o.path+" failed"),a=e,s()}),void(o.layoutComponentChunkName&&w(o.layoutComponentChunkName,function(n,e){n&&console.log("Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return h.slice(-1)[0]},length:function(){return h.length},indexOf:function(n){return h.length-h.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:_.getResourcesForPathname};e.default=_}).call(e,t(101))},351:function(n,e){n.exports=[{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags.json",path:"/tags"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-resource.json",path:"/tags/Resource"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-icons.json",path:"/tags/Icons"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-react.json",path:"/tags/React"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-user-experience.json",path:"/tags/User-Experience"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-website.json",path:"/tags/Website"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-code.json",path:"/tags/Code"},{componentChunkName:"component---src-templates-tags-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tags-git.json",path:"/tags/Git"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"simple-icons-project.json",path:"/simple-icons-project"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"ux-as-a-holistic-responsibility.json",path:"/ux-as-a-holistic-responsibility"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"eating-my-own-dog-food.json",path:"/eating-my-own-dog-food"},{componentChunkName:"component---src-templates-post-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"adding-tab-completion-for-git-on-mac-os.json",path:"/adding-tab-completion-for-git-on-macOS"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-articles-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"articles.json",path:"/articles/"},{componentChunkName:"component---src-pages-contact-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contact.json",path:"/contact/"},{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-projects-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects.json",path:"/projects/"},{componentChunkName:"component---src-pages-tech-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"tech.json",path:"/tech/"},{componentChunkName:"component---src-pages-404-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},193:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],a=function(){var n=e();n&&(r.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},a=t(74),u=t(1),s=o(u),i=t(153),c=o(i),l=t(73),p=t(327),f=t(280),d=o(f),m=t(191),g=o(m),h=t(58),y=o(h),x=t(351),v=o(x),j=t(352),b=o(j),R=t(189),C=o(R),N=t(188),k=o(N),w=t(122),P=o(w);t(273),window.___emitter=y.default,P.default.addPagesArray(v.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var _=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),E=function(n){var e=_[n];return null!=e&&(g.default.replace(e.toPath),!0)};E(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history||(window.___history=n,n.listen(function(n,e){E(n.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:n,action:e})}))}function e(n,e){var t=e.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(194);var o=function(n){function e(t){t.page.path===P.default.getPage(n).path&&(y.default.off("onPostLoadPageResources",e),clearTimeout(o),window.___history.push(n))}var t=_[n];if(t&&(n=t.toPath),window.location.pathname!==n){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",e),y.default.emit("onDelayedLoadPageResources",{pathname:n}),window.___history.push(n)},1e3);P.default.getResourcesForPathname(n)?(clearTimeout(o),window.___history.push(n)):y.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],f=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},m=(0,l.withRouter)(C.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(i?i:f,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(m,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(C.default,r({page:!0},o)):(0,u.createElement)(C.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},352:function(n,e){n.exports=[]},194:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(58),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},280:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),a=1;n=e.shift();)n()}),function(n){a?setTimeout(n,0):e.push(n)}})},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(n){u&&(u(t,n),u=null)};return!a&&e&&e[o]?void c(!0):(r(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,a?a[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},323:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(354),a=o(r);e.onClientEntry=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{color:"#29d"};window.___emitter.on("onDelayedLoadPageResources",function(){a.default.configure(e),a.default.start()}),window.___emitter.on("onPostLoadPageResources",function(){a.default.done()});var t="#nprogress {\n    pointer-events: none;\n}\n#nprogress .bar {\n    background: "+e.color+";\n    position: fixed;\n    z-index: 1031;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 2px;\n}\n#nprogress .peg {\n    display: block;\n    position: absolute;\n    right: 0px;\n    width: 100px;\n    height: 100%;\n    box-shadow: 0 0 10px "+e.color+", 0 0 5px "+e.color+";\n    opacity: 1.0;\n    -webkit-transform: rotate(3deg) translate(0px, -4px);\n    -ms-transform: rotate(3deg) translate(0px, -4px);\n    transform: rotate(3deg) translate(0px, -4px);\n}\n#nprogress .spinner {\n    display: block;\n    position: fixed;\n    z-index: 1031;\n    top: 15px;\n    right: 15px;\n}\n#nprogress .spinner-icon {\n    width: 18px;\n    height: 18px;\n    box-sizing: border-box;\n    border: solid 2px transparent;\n    border-top-color: "+e.color+";\n    border-left-color: "+e.color+";\n    border-radius: 50%;\n    -webkit-animation: nprogress-spinner 400ms linear infinite;\n    animation: nprogress-spinner 400ms linear infinite;\n}\n.nprogress-custom-parent {\n    overflow: hidden;\n    position: relative;\n}\n.nprogress-custom-parent #nprogress .spinner,\n.nprogress-custom-parent #nprogress .bar {\n    position: absolute;\n}\n@-webkit-keyframes nprogress-spinner {\n    0% {\n        -webkit-transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n    }\n}\n@keyframes nprogress-spinner {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n",o=document.createElement("style");o.id="nprogress-styles",o.innerHTML=t,document.head.appendChild(o)}},353:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).map(function(n){n(t)}),(n["*"]||[]).map(function(n){n(e,t)})}}}n.exports=t},354:function(n,e,t){var o,r;!function(a,u){o=u,r="function"==typeof o?o.call(e,t,e,n):o,!(void 0!==r&&(n.exports=r))}(this,function(){function n(n,e,t){return n<e?e:n>t?t:n}function e(n){return 100*(-1+n)}function t(n,t,o){var r;return r="translate3d"===c.positionUsing?{transform:"translate3d("+e(n)+"%,0,0)"}:"translate"===c.positionUsing?{transform:"translate("+e(n)+"%,0)"}:{"margin-left":e(n)+"%"},r.transition="all "+t+"ms "+o,r}function o(n,e){var t="string"==typeof n?n:u(n);return t.indexOf(" "+e+" ")>=0}function r(n,e){var t=u(n),r=t+e;o(t,e)||(n.className=r.substring(1))}function a(n,e){var t,r=u(n);o(n,e)&&(t=r.replace(" "+e+" "," "),n.className=t.substring(1,t.length-1))}function u(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function s(n){n&&n.parentNode&&n.parentNode.removeChild(n)}var i={};i.version="0.2.0";var c=i.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};i.configure=function(n){var e,t;for(e in n)t=n[e],void 0!==t&&n.hasOwnProperty(e)&&(c[e]=t);return this},i.status=null,i.set=function(e){var o=i.isStarted();e=n(e,c.minimum,1),i.status=1===e?null:e;var r=i.render(!o),a=r.querySelector(c.barSelector),u=c.speed,s=c.easing;return r.offsetWidth,l(function(n){""===c.positionUsing&&(c.positionUsing=i.getPositioningCSS()),p(a,t(e,u,s)),1===e?(p(r,{transition:"none",opacity:1}),r.offsetWidth,setTimeout(function(){p(r,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){i.remove(),n()},u)},u)):setTimeout(n,u)}),this},i.isStarted=function(){return"number"==typeof i.status},i.start=function(){i.status||i.set(0);var n=function(){setTimeout(function(){i.status&&(i.trickle(),n())},c.trickleSpeed)};return c.trickle&&n(),this},i.done=function(n){return n||i.status?i.inc(.3+.5*Math.random()).set(1):this},i.inc=function(e){var t=i.status;return t?("number"!=typeof e&&(e=(1-t)*n(Math.random()*t,.1,.95)),t=n(t+e,0,.994),i.set(t)):i.start()},i.trickle=function(){return i.inc(Math.random()*c.trickleRate)},function(){var n=0,e=0;i.promise=function(t){return t&&"resolved"!==t.state()?(0===e&&i.start(),n++,e++,t.always(function(){e--,0===e?(n=0,i.done()):i.set((n-e)/n)}),this):this}}(),i.render=function(n){if(i.isRendered())return document.getElementById("nprogress");r(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=c.template;var o,a=t.querySelector(c.barSelector),u=n?"-100":e(i.status||0),l=document.querySelector(c.parent);return p(a,{transition:"all 0 linear",transform:"translate3d("+u+"%,0,0)"}),c.showSpinner||(o=t.querySelector(c.spinnerSelector),o&&s(o)),l!=document.body&&r(l,"nprogress-custom-parent"),l.appendChild(t),t},i.remove=function(){a(document.documentElement,"nprogress-busy"),a(document.querySelector(c.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&s(n)},i.isRendered=function(){return!!document.getElementById("nprogress")},i.getPositioningCSS=function(){var n=document.body.style,e="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return e+"Perspective"in n?"translate3d":e+"Transform"in n?"translate":"margin"};var l=function(){function n(){var t=e.shift();t&&t(n)}var e=[];return function(t){e.push(t),1==e.length&&n()}}(),p=function(){function n(n){return n.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(n,e){return e.toUpperCase()})}function e(n){var e=document.body.style;if(n in e)return n;for(var t,o=r.length,a=n.charAt(0).toUpperCase()+n.slice(1);o--;)if(t=r[o]+a,t in e)return t;return n}function t(t){return t=n(t),a[t]||(a[t]=e(t))}function o(n,e,o){e=t(e),n.style[e]=o}var r=["Webkit","O","Moz","ms"],a={};return function(n,e){var t,r,a=arguments;if(2==a.length)for(t in e)r=e[t],void 0!==r&&e.hasOwnProperty(t)&&o(n,t,r);else o(n,a[1],a[2])}}();return i})},101:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function a(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&s())}function s(){if(!g){var n=r(u);g=!0;for(var e=m.length;e;){for(d=m,m=[];++h<e;)d&&d[h].run();h=-1,e=m.length}d=null,g=!1,a(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],g=!1,h=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new i(n,e)),1!==m.length||g||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},294:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(196)})})}},295:function(n,e,t){t(3),n.exports=function(n){return t.e(0xefeaa6d1881d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(197)})})}},296:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9ef16118cf32,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(198)})})}},297:function(n,e,t){t(3),n.exports=function(n){return t.e(70144966829960,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(199)})})}},298:function(n,e,t){t(3),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(200)})})}},299:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc260c743ec7c,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(201)})})}},300:function(n,e,t){t(3),n.exports=function(n){return t.e(11190768931e4,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(202)});
})}},301:function(n,e,t){t(3),n.exports=function(n){return t.e(0xb1abc741118f,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(203)})})}},302:function(n,e,t){t(3),n.exports=function(n){return t.e(50739212244294,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(204)})})}}});
//# sourceMappingURL=app-9c0e23a24a737f7fea2f.js.map