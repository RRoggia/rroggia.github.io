(self.webpackChunkrroggia_github_io=self.webpackChunkrroggia_github_io||[]).push([[957],{9983:function(e,t,n){"use strict";function a(e){return"/notes/"+e.toLowerCase().replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/g,"-")}n.d(t,{Z:function(){return a}})},4828:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var a=n(7294),r=n(9925),i=n(8605),o=r.ZP.div.withConfig({displayName:"ReadingContentCard__NoteCard",componentId:"sc-1ksaoxb-0"})(["display:inline;"]),l=(0,r.ZP)(i.G).withConfig({displayName:"ReadingContentCard__BookCover",componentId:"sc-1ksaoxb-1"})(["@media (max-width:600px){margin-bottom:2rem;}"]),u=r.ZP.div.withConfig({displayName:"ReadingContentCard__Ribbon",componentId:"sc-1ksaoxb-2"})(["color:white;background-color:",";font-size:1.2rem;position:absolute;transform:rotate(45deg);z-index:1;width:100px;margin-top:11%;margin-left:48%;"],(function(e){switch(e.status){case"Read":return"green";case"Notes":return"orange";default:return"red"}})),d=r.ZP.div.withConfig({displayName:"ReadingContentCard__RibbonKiller",componentId:"sc-1ksaoxb-3"})(["overflow:hidden;display:block;width:150px;position:relative;margin:auto;"]);function c(e,t,n){var a=e.find((function(e){return e.node.name===t}));return a?a.node:n}function s(e){var t=e.title,n=e.status,r=e.coverPath,s=e.language,m=e.date,g=e.covers,f=e.emptyCover;return a.createElement(o,null,a.createElement("h3",null," ",t," "),a.createElement(d,null,a.createElement(u,{status:n},n),a.createElement(l,{image:(0,i.e)(c(g,""+r,f)),alt:t})),a.createElement("p",null,"Language: ",s),a.createElement("p",null,"Date: ",m))}},8719:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var a=n(7294),r=n(6706),i=n(9925),o=n(9983),l=n(4828),u=i.ZP.div.withConfig({displayName:"bookshelf__Grid",componentId:"vg86ta-0"})(["width:100%;display:inline-grid;grid-template-columns:1fr 1fr 1fr 1fr;text-align:center;"]);function d(e){return Object.assign({},e.node.frontmatter,{url:(0,o.Z)(e.node.frontmatter.title)})}function c(e){var t=e.data,n=t.allMarkdownRemark.edges,i=t.allFile.edges,o=t.file,c=n.map(d).reduce((function(e,t){return e[t.status]||(e[t.status]=[]),e[t.status].push(t),e}),{});return a.createElement(r.Z,null,a.createElement(u,null,["Backlog","Planning","Reading","Read"].map((function(e){return a.createElement("div",{key:e},a.createElement("h2",null,e+" ("+(c[e]?c[e].length:0)+")"),c[e]?c[e].map((function(e){return a.createElement("div",{key:e.title},a.createElement(l.Z,{key:e.title,title:e.title,status:e.status,coverPath:e.coverPath,language:e.language,date:e.date,covers:i,emptyCover:o}))})):a.createElement("p",null,"Empty"))}))))}}}]);
//# sourceMappingURL=component---src-pages-bookshelf-js-bc772e2c70f3df48f52c.js.map