"use strict";(self.webpackChunkfull_stack_docusaurus=self.webpackChunkfull_stack_docusaurus||[]).push([[6629],{1802:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(4848),o=s(8453);const r={tags:["\u529b\u6263"]},i="\u79fb\u52a8\u96f6",l={id:"algorithms/problem-solutions/move-zeroes",title:"\u79fb\u52a8\u96f6",description:"\u539f\u9898\u94fe\u63a5",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/algorithms/problem-solutions/move-zeroes.md",sourceDirName:"algorithms/problem-solutions",slug:"/algorithms/problem-solutions/move-zeroes",permalink:"/full-stack-docusaurus/docs/algorithms/problem-solutions/move-zeroes",draft:!1,unlisted:!1,editUrl:"https://github.com/slhmy/full-stack-docusaurus/tree/main/i18n/zh-CN/docusaurus-plugin-content-docs/current/algorithms/problem-solutions/move-zeroes.md",tags:[{inline:!0,label:"\u529b\u6263",permalink:"/full-stack-docusaurus/docs/tags/\u529b\u6263"}],version:"current",frontMatter:{tags:["\u529b\u6263"]},sidebar:"algorithmsSidebar",previous:{title:"\u5b57\u6bcd\u5f02\u4f4d\u8bcd\u5206\u7ec4",permalink:"/full-stack-docusaurus/docs/algorithms/problem-solutions/group-anagrams"}},u={},c=[{value:"\u9898\u89e3",id:"\u9898\u89e3",level:2},{value:"\u6211\u7684\u89e3\u7b54",id:"\u6211\u7684\u89e3\u7b54",level:3}];function a(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"\u79fb\u52a8\u96f6",children:"\u79fb\u52a8\u96f6"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/move-zeroes/description/",children:"\u539f\u9898\u94fe\u63a5"})}),"\n",(0,t.jsx)(e.h2,{id:"\u9898\u89e3",children:"\u9898\u89e3"}),"\n",(0,t.jsx)(e.p,{children:"\u5148\u6765\u770b\u5b98\u65b9\u7684\u9898\u89e3\uff1a"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="move-zeroes.official.py"',children:"class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        n = len(nums)\n        left = right = 0\n        while right < n:\n            if nums[right] != 0:\n                nums[left], nums[right] = nums[right], nums[left]\n                left += 1\n            right += 1      \n"})}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsx)(e.p,{children:"\u6211\u5f97\u8bf4\u6211\u5e76\u4e0d\u559c\u6b22\u8fd9\u4e2a\u89e3\u6cd5\uff0c\u5e76\u4e14\u5b98\u65b9\u7684\u89e3\u91ca\u975e\u5e38\u96be\u61c2\uff0c\u6211\u82b1\u4e86\u5f88\u4e45\u624d\u660e\u767d\u5b83\u7684\u771f\u6b63\u610f\u601d\u3002"})}),"\n",(0,t.jsx)(e.p,{children:"\u5728\u8fd9\u4e2a\u89e3\u6cd5\u4e2d\uff0c\u901a\u4fd7\u7684\u8bf4\u6cd5\u662f\uff1a\n\u6240\u6709\u975e\u96f6\u5143\u7d20\u4f1a\u88ab\u8fdb\u884c\u4e00\u6b21\u4ea4\u6362\uff0c\u4ea4\u6362\u5230\u5176\u5e94\u8be5\u5728\u7684\u4f4d\u7f6e\u4e0a\u3002\n\u4f46\u5982\u679c\u5b83\u4eec\u672c\u6765\u5c31\u5728\u6b63\u786e\u7684\u4f4d\u7f6e\u4e0a\uff0c\u90a3\u4e48\u8fd9\u6b21\u4ea4\u6362\u5b9e\u9645\u4e0a\u662f\u6ca1\u6709\u610f\u4e49\u7684\u3002"}),"\n",(0,t.jsx)(e.h3,{id:"\u6211\u7684\u89e3\u7b54",children:"\u6211\u7684\u89e3\u7b54"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",metastring:'title="move-zeroes.py"',children:"class Solution:\n    def moveZeroes(self, nums: List[int]) -> None:\n        n = len(nums)\n        p = 0; q = 1\n        while p < n and q < n:\n            if not nums[p] == 0:\n                p += 1; continue\n\n            if q < p + 1:\n                q = p + 1\n            while q < n:\n                if nums[q] == 0:\n                    q += 1; continue\n                nums[p], nums[q] = nums[q], nums[p]\n                break\n\n            p += 1\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u518d\u8fd9\u4e2a\u89e3\u7b54\u4e2d\uff0c\u76f8\u53cd\u5730\uff0c\u6211\u4eec\u4f18\u5148\u627e\u52300\u5143\u7d20\uff0c\u7136\u540e\u518d\u627e\u5230\u975e\u96f6\u5143\u7d20\uff0c\u8fdb\u884c\u4ea4\u6362\u3002\n\u5e76\u4e14\u7531\u4e8e0\u5143\u7d20\u53ea\u4f1a\u5411\u540e\u4ea4\u6362\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5728\u627e\u5230\u975e\u96f6\u5143\u7d20\u540e\uff0c\u5feb\u901f\u79fb\u52a8\u4e00\u6b21\u975e\u96f6\u5143\u7d20\u6307\u9488\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u8fd9\u4e2a\u89e3\u6cd5\u66f4\u52a0\u7b26\u5408\u8bfb\u9898\u7684\u76f4\u89c9\uff0c\u5e76\u4e14\u62e5\u6709\u66f4\u597d\u7684\u6027\u80fd\u3002"})]})}function m(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>l});var t=s(6540);const o={},r=t.createContext(o);function i(n){const e=t.useContext(r);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);