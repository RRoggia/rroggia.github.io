"use strict";(self.webpackChunkrroggia_github_io=self.webpackChunkrroggia_github_io||[]).push([[757],{9983:function(e,t,n){function a(e){return"/notes/"+e.toLowerCase().replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/g,"-")}n.d(t,{Z:function(){return a}})},4828:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),r=n(7166),i=n(6125),o=r.default.div.withConfig({displayName:"ReadingContentCard__NoteCard",componentId:"sc-1ksaoxb-0"})(["display:inline;"]),l=(0,r.default)(i.G).withConfig({displayName:"ReadingContentCard__BookCover",componentId:"sc-1ksaoxb-1"})(["@media (max-width:600px){margin-bottom:2rem;}"]),u=r.default.div.withConfig({displayName:"ReadingContentCard__Ribbon",componentId:"sc-1ksaoxb-2"})(["color:white;background-color:",";font-size:1.2rem;position:absolute;transform:rotate(45deg);z-index:1;width:100px;margin-top:11%;margin-left:48%;"],(function(e){switch(e.status){case"Read":return"green";case"Notes":return"orange";default:return"red"}})),d=r.default.div.withConfig({displayName:"ReadingContentCard__RibbonKiller",componentId:"sc-1ksaoxb-3"})(["overflow:hidden;display:block;width:150px;position:relative;margin:auto;"]);function c(e,t,n){var a=e.find((function(e){return e.node.name===t}));return a?a.node:n}function s(e){var t=e.title,n=e.status,r=e.coverPath,s=e.language,m=e.date,f=e.covers,g=e.emptyCover;return a.createElement(o,null,a.createElement("h3",null," ",t," "),a.createElement(d,null,a.createElement(u,{status:n},n),a.createElement(l,{image:(0,i.d)(c(f,""+r,g)),alt:t})),a.createElement("p",null,"Language: ",s),m?a.createElement("p",null,"Date: ",m):null)}},4665:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),r=n(4541),i=n(7166),o=n(5444),l=n(4828),u=n(9983),d=i.default.a.withConfig({displayName:"NoteLink__WrappedA",componentId:"sc-2pf7vu-0"})(["margin-bottom:3rem;"]);function c(e){var t=e.title,n=e.children;return a.createElement(d,{href:(0,u.Z)(t)},n)}var s=i.default.div.withConfig({displayName:"Notes__Grid",componentId:"sc-ayefzk-0"})(["display:inline-grid;grid-template-columns:1fr 1fr 1fr;text-align:center;@media (max-width:600px){display:block;& > h2{text-align:left;}}"]),m=i.default.h2.withConfig({displayName:"Notes__Title",componentId:"sc-ayefzk-1"})([""]);function f(e){var t=e.notes,n=(0,o.K2)("4246675000"),r=n.allFile.edges,i=n.file;return a.createElement(a.Fragment,null,a.createElement(m,null,"Notes"),a.createElement(s,null,t&&t.map((function(e){return a.createElement(c,{title:e.title,key:e.title},a.createElement(l.Z,{title:e.title,status:e.status,coverPath:e.coverPath,language:e.language,date:e.date,covers:r,emptyCover:i}))}))))}function g(e){return Object.assign({},e.node.frontmatter,{url:(0,u.Z)(e.node.frontmatter.title)})}var p=function(e){var t=e.data.allMarkdownRemark.edges.filter((function(e){return""!==e.node.html})).map(g);return a.createElement(r.Z,null,a.createElement(f,{notes:t}))}}}]);
//# sourceMappingURL=component---src-pages-notes-js-5897f1c9335f13fcc1a6.js.map