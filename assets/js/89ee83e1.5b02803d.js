"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[8602],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(7294);function s(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){s(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},v={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),d=s,g=u["".concat(c,".").concat(d)]||u[d]||v[d]||i;return n?t.createElement(g,a(a({ref:r},p),{},{components:n})):t.createElement(g,a({ref:r},p))}));function d(e,r){var n=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=u;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3963:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>v,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=n(7462),s=(n(7294),n(3905));const i={title:"Assign review to 3 developers",id:"assign-review-to-3-developers"},a=void 0,o={unversionedId:"use-cases/reviewer-assignment/assign-review-to-3-developers",id:"version-3.0.1/use-cases/reviewer-assignment/assign-review-to-3-developers",title:"Assign review to 3 developers",description:"An example of assigning a review to at least 3 developers when changing critical code.",source:"@site/versioned_docs/version-3.0.1/use-cases/reviewer-assignment/assign-review-to-3-developers.md",sourceDirName:"use-cases/reviewer-assignment",slug:"/use-cases/reviewer-assignment/assign-review-to-3-developers",permalink:"/docs/use-cases/reviewer-assignment/assign-review-to-3-developers",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/use-cases/reviewer-assignment/assign-review-to-3-developers.md",tags:[],version:"3.0.1",frontMatter:{title:"Assign review to 3 developers",id:"assign-review-to-3-developers"},sidebar:"DocsSidebar",previous:{title:"Assign senior reviewers to new joiners",permalink:"/docs/use-cases/reviewer-assignment/assign-senior-reviewers-to-new-joiners"},next:{title:"Assign review to a team",permalink:"/docs/use-cases/reviewer-assignment/assign-review-to-a-team"}},c={},l=[],p={toc:l};function v(e){let{components:r,...n}=e;return(0,s.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"An example of assigning a review to at least 3 developers when changing critical code."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changesTransactionsCode\n    kind: patch\n    description: Changes code in transactions\n    spec: $hasFilePattern("src/transactions/**")\n\nworkflows:\n  - name: ask\n    description: Ask 3 developers for review\n    if:\n      - rule: changesTransactionsCode\n    then:\n      - $assignReviewer($organization(), 3)\n')))}v.isMDXComponent=!0}}]);