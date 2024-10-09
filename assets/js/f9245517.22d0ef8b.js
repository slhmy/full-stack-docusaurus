"use strict";(self.webpackChunkfull_stack_docusaurus=self.webpackChunkfull_stack_docusaurus||[]).push([[5240],{751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>m,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var s=n(4848),a=n(8453),r=n(4056);const l={slug:"mindmap-in-mdx",title:"MDX\u4e2d\u7684\u601d\u7ef4\u5bfc\u56fe",authors:["slhmy"],tags:["mdx","\u601d\u7ef4\u5bfc\u56fe"]},m=void 0,c={permalink:"/full-stack-docusaurus/blog/mindmap-in-mdx",editUrl:"https://github.com/slhmy/full-stack-docusaurus/tree/main/i18n/zh-CN/docusaurus-plugin-content-blog/2023-10-29-mindmap-in-mdx.mdx",source:"@site/i18n/zh-CN/docusaurus-plugin-content-blog/2023-10-29-mindmap-in-mdx.mdx",title:"MDX\u4e2d\u7684\u601d\u7ef4\u5bfc\u56fe",description:"\u7ecf\u8fc7\u4e86\u8fd9\u6b21\u7684\u5c1d\u8bd5\uff0c\u6211\u89c9\u5f97 MDX \u975e\u5e38\u9177\uff0c\u5b83\u8fd1\u4e4e\u65e0\u6240\u4e0d\u80fd\u7684\u3002",date:"2023-10-29T00:00:00.000Z",tags:[{inline:!0,label:"mdx",permalink:"/full-stack-docusaurus/blog/tags/mdx"},{inline:!0,label:"\u601d\u7ef4\u5bfc\u56fe",permalink:"/full-stack-docusaurus/blog/tags/\u601d\u7ef4\u5bfc\u56fe"}],readingTime:1.805,hasTruncateMarker:!1,authors:[{name:"slhmy",title:"Stay creative",url:"https://github.com/slhmy",imageURL:"https://github.com/slhmy.png",key:"slhmy",page:null}],frontMatter:{slug:"mindmap-in-mdx",title:"MDX\u4e2d\u7684\u601d\u7ef4\u5bfc\u56fe",authors:["slhmy"],tags:["mdx","\u601d\u7ef4\u5bfc\u56fe"]},unlisted:!1,prevItem:{title:"\u6b22\u8fce\ud83d\udc4b",permalink:"/full-stack-docusaurus/blog/weclome"}},o={authorsImageUrls:[void 0]},i=[];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"\u7ecf\u8fc7\u4e86\u8fd9\u6b21\u7684\u5c1d\u8bd5\uff0c\u6211\u89c9\u5f97 MDX \u975e\u5e38\u9177\uff0c\u5b83\u8fd1\u4e4e\u65e0\u6240\u4e0d\u80fd\u7684\u3002\n\u4f60\u53ef\u4ee5\u5728 MDX \u4e2d\u4f7f\u7528\u4efb\u4f55\u4f60\u60f3\u8981\u7684\u4e1c\u897f\uff0c\u8ba9\u6211\u6709\u4e86\u66f4\u591a\u4f7f\u7528\u5b83\u7684\u60f3\u6cd5~"}),"\n",(0,s.jsx)(t.p,{children:"\u5148\u6765\u770b\u770b\u6548\u679c\uff1a"}),"\n","\n",(0,s.jsx)(r.A,{value:"\n# markmap\n- beautiful\n  - attractive\n  - simple\n- useful\n  - for static sites\n  - for markdown\n- easy\n- interactive\n- [click me to try](https://markmap.js.org/repl)\n",style:{width:"100%"}}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["\u4f60\u53ef\u4ee5\u5728\n",(0,s.jsx)(t.a,{href:"https://github.com/slhmy/full-stack-docusaurus/blob/main/i18n/zh-CN/docusaurus-plugin-content-blog/2023-10-29-mindmap-in-mdx.mdx",children:"\ud83d\udc49 \u8fd9\u91cc"}),"\n\u67e5\u770b\u5230\u672c\u7bc7\u535a\u5ba2\u7684\u6e90\u7801\uff0c\u4ee5\u4fbf\u4e8e\u4f60\u66f4\u597d\u7684\u7406\u89e3\u5b83\u662f\u5982\u4f55\u8fd0\u4f5c\u7684\u3002"]})}),"\n",(0,s.jsxs)(t.p,{children:["\u4e3a\u4e86\u5b9e\u73b0\u5728 MDX \u4e2d\u4f7f\u7528\u601d\u7ef4\u5bfc\u56fe\uff0c\u6211\u4eec\u9700\u8981\u5f15\u5165\u4e00\u4e2a\u53eb\u505a",(0,s.jsx)(t.a,{href:"https://github.com/markmap/markmap",children:"Markmap"}),"\u7684\u5e93\u3002\n\u5e76\u4e14\u5c06\u5176\u5c01\u88c5\u6210\u4e00\u4e2a React \u7ec4\u4ef6\uff0c\u4ee5\u4fbf\u4e8e\u5728 MDX \u4e2d\u4f7f\u7528\u3002"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:'import React, { useEffect } from "react";\nimport { Transformer } from "markmap-lib";\nconst { Markmap } = require("markmap-view");\n\nconst transformer = new Transformer();\n\nconst MarkmapRender: React.FC<{\n  value?: string;\n  style?: React.CSSProperties;\n}> = (props) => {\n  const svg = React.useRef<SVGSVGElement>();\n\n  useEffect(() => {\n    const mm = Markmap.create(svg.current);\n    const { root } = transformer.transform(props.value || "");\n    mm.setData(root);\n    mm.fit();\n  }, [props.value]);\n\n  return (\n    <React.Fragment>\n      <svg className="flex-1" ref={svg} style={props.style} />\n    </React.Fragment>\n  );\n};\n\nexport default MarkmapRender;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["\u8fd9\u662f\u4e00\u4e2a\u76f8\u5bf9\u521d\u7ea7\u4f46\u6709\u8f83\u4e3a\u73b0\u4ee3\u7684\u793a\u4f8b\uff0c\u8f83\u4e3a\u5b8c\u6574\u7684 React \u4f7f\u7528\u6848\u4f8b\u53ef\u4ee5\u53c2\u8003\n",(0,s.jsx)(t.a,{href:"https://stackblitz.com/edit/markmap?file=markmap-class.tsx,markmap-hooks.tsx",children:"\ud83d\udc49 \u8fd9\u91cc"}),"\u3002"]}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u5728\u6211\u7684\u4f8b\u5b50\u4e2d\uff0c\u4f18\u70b9\u662f\u6211\u907f\u514d\u4f7f\u7528\u4e86\u8001\u5f0f\u7684 React \u7ec4\u4ef6\u58f0\u660e\u65b9\u5f0f"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u7531\u4e8e\u6587\u6863\u7684\u4e0d\u5b8c\u5584\u548c\u7ec4\u4ef6\u6a21\u5757\u5bfc\u51fa\u7684\u4e00\u4e9b\u95ee\u9898\uff0c\u4f60\u53ef\u80fd\u4f1a\u9047\u5230\u4e00\u4e9b\u7f16\u8f91\u5668\u62a5\u9519\uff0c\u4f46\u5b83\u4eec\u5e76\u4e0d\u662f\u81f4\u547d\u7684\uff0c\u4f60\u53ef\u4ee5\u5ffd\u7565\u5b83\u4eec\u3002"})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4056:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(6540),a=n(7828),r=n(4848);const{Markmap:l}=n(7406),m=new a.Ge,c=e=>{const t=s.useRef();return(0,s.useEffect)((()=>{const n=l.create(t.current),{root:s}=m.transform(e.value||"");n.setData(s),n.fit()}),[e.value]),(0,r.jsx)(s.Fragment,{children:(0,r.jsx)("svg",{className:"flex-1",ref:t,style:e.style})})}}}]);