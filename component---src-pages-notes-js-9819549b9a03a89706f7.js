(self.webpackChunkrroggia_github_io=self.webpackChunkrroggia_github_io||[]).push([[757],{9983:function(e,t,n){"use strict";function a(e){return"/notes/"+e.toLowerCase().replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/g,"-")}n.d(t,{Z:function(){return a}})},4828:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r=n(9925),i=n(8605),o=r.ZP.div.withConfig({displayName:"ReadingContentCard__NoteCard",componentId:"sc-1ksaoxb-0"})(["display:inline;"]),l=(0,r.ZP)(i.G).withConfig({displayName:"ReadingContentCard__BookCover",componentId:"sc-1ksaoxb-1"})(["@media (max-width:600px){margin-bottom:2rem;}"]),u=r.ZP.div.withConfig({displayName:"ReadingContentCard__Ribbon",componentId:"sc-1ksaoxb-2"})(["color:white;background-color:",";font-size:1.2rem;position:absolute;transform:rotate(45deg);z-index:1;width:100px;margin-top:11%;margin-left:48%;"],(function(e){switch(e.status){case"Read":return"green";case"Notes":return"orange";default:return"red"}})),c=r.ZP.div.withConfig({displayName:"ReadingContentCard__RibbonKiller",componentId:"sc-1ksaoxb-3"})(["overflow:hidden;display:block;width:150px;position:relative;margin:auto;"]);function d(e,t,n){var a=e.find((function(e){return e.node.name===t}));return a?a.node:n}function s(e){var t=e.title,n=e.status,r=e.coverPath,s=e.language,m=e.date,f=e.covers,g=e.emptyCover;return a.createElement(o,null,a.createElement("h3",null," ",t," "),a.createElement(c,null,a.createElement(u,{status:n},n),a.createElement(l,{image:(0,i.e)(d(f,""+r,g)),alt:t})),a.createElement("p",null,"Language: ",s),m?a.createElement("p",null,"Date: ",m):null)}},4665:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var a=n(7294),r=n(6706),i=n(9925),o=n(5444),l=n(4828),u=n(9983),c=i.ZP.a.withConfig({displayName:"NoteLink__WrappedA",componentId:"sc-2pf7vu-0"})(["margin-bottom:3rem;"]);function d(e){var t=e.title,n=e.children;return a.createElement(c,{href:(0,u.Z)(t)},n)}var s=i.ZP.div.withConfig({displayName:"Notes__Grid",componentId:"ayefzk-0"})(["display:inline-grid;grid-template-columns:1fr 1fr 1fr;text-align:center;@media (max-width:600px){display:block;& > h2{text-align:left;}}"]),m=i.ZP.h2.withConfig({displayName:"Notes__Title",componentId:"ayefzk-1"})([""]);function f(e){var t=e.notes,n=(0,o.K2)("4246675000"),r=n.allFile.edges,i=n.file;return a.createElement(a.Fragment,null,a.createElement(m,null,"My notes ..."),a.createElement("p",null,"When I'm reading books, articles, or technical stuff I like to highlight the text and summarize what I read, then I can have access to the information without a big effort."),a.createElement(s,null,t&&t.map((function(e){return a.createElement(d,{title:e.title,key:e.title},a.createElement(l.Z,{title:e.title,status:e.status,coverPath:e.coverPath,language:e.language,date:e.date,covers:r,emptyCover:i}))}))))}function g(e){return Object.assign({},e.node.frontmatter,{url:(0,u.Z)(e.node.frontmatter.title)})}var p=function(e){var t=e.data.allMarkdownRemark.edges.filter((function(e){return""!==e.node.html})).map(g);return a.createElement(r.Z,null,a.createElement(f,{notes:t}))}}}]);
//# sourceMappingURL=component---src-pages-notes-js-9819549b9a03a89706f7.js.map