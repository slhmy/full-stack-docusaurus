"use strict";(self.webpackChunkfull_stack_docusaurus=self.webpackChunkfull_stack_docusaurus||[]).push([[817],{1310:(e,s,t)=>{t.d(s,{Z:()=>p});t(7294);var n=t(6010),i=t(5281),a=t(2802),r=t(8596),c=t(9960),l=t(5999),o=t(4996),d=t(5893);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,o.Z)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(c.Z,{"aria-label":(0,l.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:s,href:t,isLast:n}=e;const i="breadcrumbs__link";return n?(0,d.jsx)("span",{className:i,itemProp:"name",children:s}):t?(0,d.jsx)(c.Z,{className:i,href:t,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:s})}):(0,d.jsx)("span",{className:i,children:s})}function v(e){let{children:s,active:t,index:i,addMicrodata:a}=e;return(0,d.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[s,(0,d.jsx)("meta",{itemProp:"position",content:String(i+1)})]})}function p(){const e=(0,a.s1)(),s=(0,r.Ns)();return e?(0,d.jsx)("nav",{className:(0,n.Z)(i.k.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,l.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[s&&(0,d.jsx)(h,{}),e.map(((s,t)=>{const n=t===e.length-1,i="category"===s.type&&s.linkUnlisted?void 0:s.href;return(0,d.jsx)(v,{active:n,index:t,addMicrodata:!!i,children:(0,d.jsx)(x,{href:i,isLast:n,children:s.label})},t)}))]})}):null}},4228:(e,s,t)=>{t.r(s),t.d(s,{default:()=>I});t(7294);var n=t(1944),i=t(2802),a=t(4996),r=t(6010),c=t(9960),l=t(3919),o=t(5999),d=t(2503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=t(5893);function h(e){let{href:s,children:t}=e;return(0,m.jsx)(c.Z,{href:s,className:(0,r.Z)("card padding--lg",u.cardContainer),children:t})}function b(e){let{href:s,icon:t,title:n,description:i}=e;return(0,m.jsxs)(h,{href:s,children:[(0,m.jsxs)(d.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:n,children:[t," ",n]}),i&&(0,m.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:i,children:i})]})}function x(e){let{item:s}=e;const t=(0,i.LM)(s);return t?(0,m.jsx)(b,{href:t,icon:"\ud83d\uddc3\ufe0f",title:s.label,description:s.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s.items.length})}):null}function v(e){let{item:s}=e;const t=(0,l.Z)(s.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(s.docId??void 0);return(0,m.jsx)(b,{href:s.href,icon:t,title:s.label,description:s.description??n?.description})}function p(e){let{item:s}=e;switch(s.type){case"link":return(0,m.jsx)(v,{item:s});case"category":return(0,m.jsx)(x,{item:s});default:throw new Error(`unknown item type ${JSON.stringify(s)}`)}}function g(e){let{className:s}=e;const t=(0,i.jA)();return(0,m.jsx)(j,{items:t.items,className:s})}function j(e){const{items:s,className:t}=e;if(!s)return(0,m.jsx)(g,{...e});const n=(0,i.MN)(s);return(0,m.jsx)("section",{className:(0,r.Z)("row",t),children:n.map(((e,s)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(p,{item:e})},s)))})}var f=t(49),N=t(3120),Z=t(4364),_=t(1310);const k={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function L(e){let{categoryGeneratedIndex:s}=e;return(0,m.jsx)(n.d,{title:s.title,description:s.description,keywords:s.keywords,image:(0,a.Z)(s.image)})}function T(e){let{categoryGeneratedIndex:s}=e;const t=(0,i.jA)();return(0,m.jsxs)("div",{className:k.generatedIndexPage,children:[(0,m.jsx)(N.Z,{}),(0,m.jsx)(_.Z,{}),(0,m.jsx)(Z.Z,{}),(0,m.jsxs)("header",{children:[(0,m.jsx)(d.Z,{as:"h1",className:k.title,children:s.title}),s.description&&(0,m.jsx)("p",{children:s.description})]}),(0,m.jsx)("article",{className:"margin-top--lg",children:(0,m.jsx)(j,{items:t.items,className:k.list})}),(0,m.jsx)("footer",{className:"margin-top--lg",children:(0,m.jsx)(f.Z,{previous:s.navigation.previous,next:s.navigation.next})})]})}function I(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(L,{...e}),(0,m.jsx)(T,{...e})]})}},49:(e,s,t)=>{t.d(s,{Z:()=>r});t(7294);var n=t(5999),i=t(2244),a=t(5893);function r(e){const{previous:s,next:t}=e;return(0,a.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[s&&(0,a.jsx)(i.Z,{...s,subLabel:(0,a.jsx)(n.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,a.jsx)(i.Z,{...t,subLabel:(0,a.jsx)(n.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4364:(e,s,t)=>{t.d(s,{Z:()=>l});t(7294);var n=t(6010),i=t(5999),a=t(5281),r=t(4477),c=t(5893);function l(e){let{className:s}=e;const t=(0,r.E)();return t.badge?(0,c.jsx)("span",{className:(0,n.Z)(s,a.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,c.jsx)(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}},3120:(e,s,t)=>{t.d(s,{Z:()=>v});t(7294);var n=t(6010),i=t(2263),a=t(9960),r=t(5999),c=t(143),l=t(5281),o=t(373),d=t(4477),u=t(5893);const m={unreleased:function(e){let{siteTitle:s,versionMetadata:t}=e;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:s,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:s,versionMetadata:t}=e;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:s,versionLabel:(0,u.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const s=m[e.versionMetadata.banner];return(0,u.jsx)(s,{...e})}function b(e){let{versionLabel:s,to:t,onClick:n}=e;return(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:s,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(a.Z,{to:t,onClick:n,children:(0,u.jsx)(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:s,versionMetadata:t}=e;const{siteConfig:{title:a}}=(0,i.Z)(),{pluginId:r}=(0,c.gA)({failfast:!0}),{savePreferredVersionName:d}=(0,o.J)(r),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,c.Jo)(r),v=m??(p=x).docs.find((e=>e.id===p.mainDocId));var p;return(0,u.jsxs)("div",{className:(0,n.Z)(s,l.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:a,versionMetadata:t})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:x.label,to:v.path,onClick:()=>d(x.name)})})]})}function v(e){let{className:s}=e;const t=(0,d.E)();return t.banner?(0,u.jsx)(x,{className:s,versionMetadata:t}):null}},2244:(e,s,t)=>{t.d(s,{Z:()=>r});t(7294);var n=t(6010),i=t(9960),a=t(5893);function r(e){const{permalink:s,title:t,subLabel:r,isNext:c}=e;return(0,a.jsxs)(i.Z,{className:(0,n.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:s,children:[r&&(0,a.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,a.jsx)("div",{className:"pagination-nav__label",children:t})]})}}}]);