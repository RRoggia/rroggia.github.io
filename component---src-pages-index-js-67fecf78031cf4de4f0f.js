"use strict";(self.webpackChunkrroggia_github_io=self.webpackChunkrroggia_github_io||[]).push([[678],{1983:function(e,t,r){r.r(t),r.d(t,{default:function(){return f}});var n=r(7294),a=r(4541),i=r(7166),o=i.default.div.withConfig({displayName:"PostPreview__Card",componentId:"sc-1pfoq7g-0"})(["margin-bottom:1.5rem;padding:2rem;border-radius:0.3rem;border:1px solid;border-color:#d0d7de;align:center;&:hover{transform:scale(1.005,1.005);}@media (max-width:600px){&:hover,&:active{transform:scale(1.005,1.005);box-shadow:10px 10px lightgray;}}"]),l=i.default.div.withConfig({displayName:"PostPreview__Grid",componentId:"sc-1pfoq7g-1"})(["display:grid;grid-template-columns:2fr 1fr;"]),d=i.default.h2.withConfig({displayName:"PostPreview__Title",componentId:"sc-1pfoq7g-2"})(["display:inline;margin-right:1rem;"]),u=i.default.p.withConfig({displayName:"PostPreview__TextAlignRight",componentId:"sc-1pfoq7g-3"})(["text-align:right;font-size:0.8rem;"]),m=i.default.span.withConfig({displayName:"PostPreview__SpanAlignRight",componentId:"sc-1pfoq7g-4"})(["margin:auto;margin-right:0px;align-item:center;text-align:right;font-size:0.8rem;"]);function s(e){var t=e.title,r=e.excerpt,a=e.timeToRead,i=e.url,s=e.date;return n.createElement("a",{href:i},n.createElement(o,null,n.createElement(l,null,n.createElement(d,null,t),n.createElement(m,null,a," minutes")),n.createElement("p",null,r),n.createElement(u,null,"Published "+s)))}var c=i.default.div.withConfig({displayName:"Posts__Wrapper",componentId:"sc-1upow46-0"})(["width:85%;margin:2rem auto;"]);function p(e){var t=e.posts;return n.createElement(c,null,n.createElement("h2",null,"Dear diary ..."),t?t.map((function(e){return n.createElement(s,Object.assign({key:e.title},e))})):n.createElement("p",null,"No post was found."))}function g(e){return Object.assign({},e.node.frontmatter,{excerpt:e.node.excerpt,timeToRead:e.node.timeToRead,url:(t=e.node.frontmatter.title,"/posts/"+t.toLowerCase().replace(/[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]/g,"-"))});var t}var f=function(e){var t=e.data.allMarkdownRemark.edges.map(g);return n.createElement(a.Z,null,n.createElement(p,{posts:t}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-67fecf78031cf4de4f0f.js.map