"use strict";(self.webpackChunkfull_stack_docusaurus=self.webpackChunkfull_stack_docusaurus||[]).push([[8209],{6535:(e,s,t)=>{t.d(s,{A:()=>v});var a=t(6540),i=t(8215),r=t(781),l=t(4581),n=t(8774),c=t(1312),o=t(6347),d=t(9169);function m(e){const{pathname:s}=(0,o.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,s){return!(e.unlisted&&!(0,d.ys)(e.permalink,s))}(e,s)))),[e,s])}const u={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var b=t(4848);function g(e){let{sidebar:s}=e;const t=m(s.items);return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,i.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,i.A)(u.sidebarItemTitle,"margin-bottom--md"),children:s.title}),(0,b.jsx)("ul",{className:(0,i.A)(u.sidebarItemList,"clean-list"),children:t.map((e=>(0,b.jsx)("li",{className:u.sidebarItem,children:(0,b.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=t(5600);function j(e){let{sidebar:s}=e;const t=m(s.items);return(0,b.jsx)("ul",{className:"menu__list",children:t.map((e=>(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,b.jsx)(h.GX,{component:j,props:e})}function x(e){let{sidebar:s}=e;const t=(0,l.l)();return s?.items.length?"mobile"===t?(0,b.jsx)(p,{sidebar:s}):(0,b.jsx)(g,{sidebar:s}):null}function v(e){const{sidebar:s,toc:t,children:a,...l}=e,n=s&&s.items.length>0;return(0,b.jsx)(r.A,{...l,children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(x,{sidebar:s}),(0,b.jsx)("main",{className:(0,i.A)("col",{"col--7":n,"col--9 col--offset-1":!n}),children:a}),t&&(0,b.jsx)("div",{className:"col col--2",children:t})]})})})}},9140:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});t(6540);var a=t(8215),i=t(6820),r=t(1213),l=t(7559),n=t(6535),c=t(2557),o=t(1463),d=t(1107),m=t(4848);function u(e){let{tags:s,sidebar:t}=e;const u=(0,i.b)();return(0,m.jsxs)(r.e3,{className:(0,a.A)(l.G.wrapper.blogPages,l.G.page.blogTagsListPage),children:[(0,m.jsx)(r.be,{title:u}),(0,m.jsx)(o.A,{tag:"blog_tags_list"}),(0,m.jsxs)(n.A,{sidebar:t,children:[(0,m.jsx)(d.A,{as:"h1",children:u}),(0,m.jsx)(c.A,{tags:s})]})]})}},6133:(e,s,t)=>{t.d(s,{A:()=>n});t(6540);var a=t(8215),i=t(8774);const r={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=t(4848);function n(e){let{permalink:s,label:t,count:n,description:c}=e;return(0,l.jsxs)(i.A,{href:s,title:c,className:(0,a.A)(r.tag,n?r.tagWithCount:r.tagRegular),children:[t,n&&(0,l.jsx)("span",{children:n})]})}},2557:(e,s,t)=>{t.d(s,{A:()=>o});t(6540);var a=t(6820),i=t(6133),r=t(1107);const l={tag:"tag_Nnez"};var n=t(4848);function c(e){let{letterEntry:s}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(r.A,{as:"h2",id:s.letter,children:s.letter}),(0,n.jsx)("ul",{className:"padding--none",children:s.tags.map((e=>(0,n.jsx)("li",{className:l.tag,children:(0,n.jsx)(i.A,{...e})},e.permalink)))}),(0,n.jsx)("hr",{})]})}function o(e){let{tags:s}=e;const t=(0,a.Q)(s);return(0,n.jsx)("section",{className:"margin-vert--lg",children:t.map((e=>(0,n.jsx)(c,{letterEntry:e},e.letter)))})}},6820:(e,s,t)=>{t.d(s,{Q:()=>r,b:()=>i});var a=t(1312);const i=()=>(0,a.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const s={};return Object.values(e).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e.label);s[t]??=[],s[t].push(e)})),Object.entries(s).sort(((e,s)=>{let[t]=e,[a]=s;return t.localeCompare(a)})).map((e=>{let[s,t]=e;return{letter:s,tags:t.sort(((e,s)=>e.label.localeCompare(s.label)))}}))}}}]);