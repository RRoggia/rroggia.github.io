/*! For license information please see component---src-pages-books-timeline-js-a35940d4b2e2f83dbf20.js.LICENSE.txt */
(self.webpackChunkrroggia_github_io=self.webpackChunkrroggia_github_io||[]).push([[7871],{9931:function(e,t){var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var l=r.apply(null,n);l&&e.push(l)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)i.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},7035:function(e,t,n){"use strict";n.r(t),n.d(t,{InView:function(){return v},default:function(){return v},defaultFallbackInView:function(){return c},observe:function(){return f},useInView:function(){return h}});var i=n(7294);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}var l=new Map,a=new WeakMap,u=0,s=void 0;function c(e){s=e}function d(e){return Object.keys(e).sort().filter((function(t){return void 0!==e[t]})).map((function(t){return t+"_"+("root"===t?(n=e.root)?(a.has(n)||(u+=1,a.set(n,u.toString())),a.get(n)):"0":e[t]);var n})).toString()}function f(e,t,n,i){if(void 0===n&&(n={}),void 0===i&&(i=s),void 0===window.IntersectionObserver&&void 0!==i){var r=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:r,intersectionRect:r,rootBounds:r}),function(){}}var o=function(e){var t=d(e),n=l.get(t);if(!n){var i,r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,o=t.isIntersecting&&i.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(n=r.get(t.target))||n.forEach((function(e){e(o,t)}))}))}),e);i=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:o,elements:r},l.set(t,n)}return n}(n),a=o.id,u=o.observer,c=o.elements,f=c.get(e)||[];return c.has(e)||c.set(e,f),f.push(t),u.observe(e),function(){f.splice(f.indexOf(t),1),0===f.length&&(c.delete(e),u.unobserve(e)),0===c.size&&(u.disconnect(),l.delete(a))}}var p=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function m(e){return"function"!=typeof e.children}var v=function(e){var t,n;function l(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),m(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=l).prototype=Object.create(n.prototype),t.prototype.constructor=t,o(t,n);var a=l.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,i=e.rootMargin,r=e.trackVisibility,o=e.delay,l=e.fallbackInView;this._unobserveCb=f(this.node,this.handleChange,{threshold:t,root:n,rootMargin:i,trackVisibility:r,delay:o},l)}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!m(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var o=this.props,l=o.children,a=o.as,u=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(o,p);return i.createElement(a||"div",r({ref:this.handleNode},u),l)},l}(i.Component);function h(e){var t=void 0===e?{}:e,n=t.threshold,r=t.delay,o=t.trackVisibility,l=t.rootMargin,a=t.root,u=t.triggerOnce,s=t.skip,c=t.initialInView,d=t.fallbackInView,p=i.useRef(),m=i.useState({inView:!!c}),v=m[0],h=m[1],g=i.useCallback((function(e){void 0!==p.current&&(p.current(),p.current=void 0),s||e&&(p.current=f(e,(function(e,t){h({inView:e,entry:t}),t.isIntersecting&&u&&p.current&&(p.current(),p.current=void 0)}),{root:a,rootMargin:l,threshold:n,trackVisibility:o,delay:r},d))}),[Array.isArray(n)?n.toString():n,a,l,u,s,o,d,r]);(0,i.useEffect)((function(){p.current||!v.entry||u||s||h({inView:!!c})}));var b=[g,v.inView,v.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}v.displayName="InView",v.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},1601:function(e,t,n){"use strict";t.Z=void 0;var i=l(n(7294)),r=l(n(5697)),o=l(n(9931));function l(e){return e&&e.__esModule?e:{default:e}}var a=function(e){var t=e.animate,n=void 0===t||t,r=e.className,l=void 0===r?"":r,a=e.layout,u=void 0===a?"2-columns":a,s=e.lineColor,c=void 0===s?"#FFF":s,d=e.children;return"object"==typeof window&&document.documentElement.style.setProperty("--line-color",c),i.default.createElement("div",{className:(0,o.default)(l,"vertical-timeline",{"vertical-timeline--animate":n,"vertical-timeline--two-columns":"2-columns"===u,"vertical-timeline--one-column-left":"1-column"===u||"1-column-left"===u,"vertical-timeline--one-column-right":"1-column-right"===u})},d)};a.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]).isRequired,className:r.default.string,animate:r.default.bool,layout:r.default.oneOf(["1-column-left","1-column","2-columns","1-column-right"]),lineColor:r.default.string};var u=a;t.Z=u},1588:function(e,t,n){"use strict";t.Z=void 0;var i=a(n(7294)),r=a(n(5697)),o=a(n(9931)),l=n(7035);function a(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=e.children,n=void 0===t?"":t,r=e.className,a=void 0===r?"":r,u=e.contentArrowStyle,s=void 0===u?null:u,c=e.contentStyle,d=void 0===c?null:c,f=e.date,p=void 0===f?"":f,m=e.dateClassName,v=void 0===m?"":m,h=e.icon,g=void 0===h?null:h,b=e.iconClassName,y=void 0===b?"":b,w=e.iconOnClick,k=void 0===w?null:w,V=e.onTimelineElementClick,C=void 0===V?null:V,E=e.iconStyle,O=void 0===E?null:E,N=e.id,_=void 0===N?"":N,I=e.position,S=void 0===I?"":I,x=e.style,F=void 0===x?null:x,M=e.textClassName,j=void 0===M?"":M,A=e.intersectionObserverProps,T=void 0===A?{rootMargin:"0px 0px -40px 0px",triggerOnce:!0}:A,R=e.visible,Z=void 0!==R&&R;return i.default.createElement(l.InView,T,(function(e){var t=e.inView,r=e.ref;return i.default.createElement("div",{ref:r,id:_,className:(0,o.default)(a,"vertical-timeline-element",{"vertical-timeline-element--left":"left"===S,"vertical-timeline-element--right":"right"===S,"vertical-timeline-element--no-children":""===n}),style:F},i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{style:O,onClick:k,className:(0,o.default)(y,"vertical-timeline-element-icon",{"bounce-in":t||Z,"is-hidden":!(t||Z)})},g),i.default.createElement("div",{style:d,onClick:C,className:(0,o.default)(j,"vertical-timeline-element-content",{"bounce-in":t||Z,"is-hidden":!(t||Z)})},i.default.createElement("div",{style:s,className:"vertical-timeline-element-content-arrow"}),n,i.default.createElement("span",{className:(0,o.default)(v,"vertical-timeline-element-date")},p))))}))};u.propTypes={children:r.default.oneOfType([r.default.arrayOf(r.default.node),r.default.node]),className:r.default.string,contentArrowStyle:r.default.shape({}),contentStyle:r.default.shape({}),date:r.default.node,dateClassName:r.default.string,icon:r.default.element,iconClassName:r.default.string,iconStyle:r.default.shape({}),iconOnClick:r.default.func,onTimelineElementClick:r.default.func,id:r.default.string,position:r.default.string,style:r.default.shape({}),textClassName:r.default.string,visible:r.default.bool,intersectionObserverProps:r.default.shape({root:r.default.object,rootMargin:r.default.string,threshold:r.default.number,triggerOnce:r.default.bool})};var s=u;t.Z=s},7704:function(e,t,n){"use strict";e.exports={VerticalTimeline:n(1601).Z,VerticalTimelineElement:n(1588).Z}},4601:function(e,t,n){"use strict";n.d(t,{iG:function(){return o},_4:function(){return r},su:function(){return l}});var i=n(9983);function r(e){return e.allMarkdownRemark.edges.map((function(e){return Object.assign({},e.node.frontmatter,{excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,url:(t=e.node.frontmatter.title,"/posts/"+t.toLowerCase().replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/g,"-"))});var t}))}function o(e){return e.allMarkdownRemark.edges.map((function(e){var t;return Object.assign({},e.node.frontmatter,{html:null===(t=e.node)||void 0===t?void 0:t.html,url:(0,i.Z)(e.node.frontmatter.title)})}))}function l(e,t){return e[t.status]||(e[t.status]=[]),e[t.status].push(t),e}},9983:function(e,t,n){"use strict";function i(e){return"/notes/"+e.toLowerCase().replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/g,"-")}n.d(t,{Z:function(){return i}})},5177:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var i=n(7294),r=n(7166),o=n(5695),l=n(6125),a=n(7704),u=n(4601),s=(0,r.default)(l.G).withConfig({displayName:"books-timeline__BookCover",componentId:"sc-1t75bwx-0"})(["@media (max-width:600px){margin-bottom:2rem;}"]);function c(e,t,n){var i=e.find((function(e){return e.node.name===t}));return i?i.node:n}function d(e){var t=e.data,n=t.allFile.edges,r=t.file,d=(0,u.iG)(t).filter((function(e){return e.publishDate})).sort((function(e,t){return new Date(e.publishDate)-new Date(t.publishDate)}));return console.log(d),i.createElement(o.Z,null,i.createElement(a.VerticalTimeline,null,d&&d.map((function(e){var t;return i.createElement(a.VerticalTimelineElement,{className:"vertical-timeline-element",date:e.publishDate,key:e.id,iconStyle:{background:"rgb(33, 150, 243)",color:"#fff"}},i.createElement(s,{image:(0,l.d)(c(n,e.coverPath,r)),alt:e.title}),i.createElement("h3",{className:"vertical-timeline-element-title"},e.title),e.subtitle?i.createElement("h4",{className:"vertical-timeline-element-subtitle"},e.subtitle):i.createElement(i.Fragment,null),i.createElement("p",null,"ISBN: ",e.id),i.createElement("p",null,"Edition: ",e.edition),i.createElement("p",null,"Authors: ",null==e||null===(t=e.authors)||void 0===t?void 0:t.toString().replace(/,/g,", ")),e.translations?i.createElement("p",null,"Translations: ",null==e?void 0:e.translations):i.createElement(i.Fragment,null),i.createElement("p",null,"Language: ",e.language))}))))}}}]);
//# sourceMappingURL=component---src-pages-books-timeline-js-a35940d4b2e2f83dbf20.js.map