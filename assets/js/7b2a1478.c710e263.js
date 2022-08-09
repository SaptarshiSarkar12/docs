"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[5325],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(t),g=a,v=u["".concat(c,".").concat(g)]||u[g]||m[g]||s;return t?r.createElement(v,i(i({ref:n},p),{},{components:t})):r.createElement(v,i({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7669:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const s={title:"Assign review to a team",id:"assign-review-to-a-team"},i=void 0,o={unversionedId:"use-cases/reviewer-assignment/assign-review-to-a-team",id:"version-3.0.1/use-cases/reviewer-assignment/assign-review-to-a-team",title:"Assign review to a team",description:"| Requires GitHub token |",source:"@site/versioned_docs/version-3.0.1/use-cases/reviewer-assignment/assign-review-to-a-team.md",sourceDirName:"use-cases/reviewer-assignment",slug:"/use-cases/reviewer-assignment/assign-review-to-a-team",permalink:"/maester/docs/use-cases/reviewer-assignment/assign-review-to-a-team",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/use-cases/reviewer-assignment/assign-review-to-a-team.md",tags:[],version:"3.0.1",frontMatter:{title:"Assign review to a team",id:"assign-review-to-a-team"},sidebar:"DocsSidebar",previous:{title:"Assign review to 3 developers",permalink:"/maester/docs/use-cases/reviewer-assignment/assign-review-to-3-developers"},next:{title:"Auto-merge",permalink:"/maester/docs/use-cases/auto-merge"}},c={},l=[],p={toc:l};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u26a0\ufe0f ",(0,a.kt)("a",{parentName:"th",href:"../../installation/install-reviewpad-github-action-with-a-github-token"},"Requires GitHub token")," \u26a0\ufe0f")))),(0,a.kt)("p",null,"An example of assigning a review to a team when touching a specific folder."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changesToConfigurations\n    kind: patch\n    description: Changes code in configuration folder\n    spec: $hasFilePattern("src/config/**")\n\nworkflows:\n  - name: ask\n    description: Ask devops team\n    if:\n      - rule: changesToConfigurations\n    then:\n      # Assign the review to devops team\n      - $assignTeamReviewer("devops")\n')),(0,a.kt)("p",null,"An example of assigning a review to a specific number of elements on a team."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changesToConfigurations\n    kind: patch\n    description: Changes code in configuration folder\n    spec: $hasFilePattern("src/config/**")\n\nworkflows:\n  - name: ask\n    description: Ask devops team\n    if:\n      - rule: changesToConfigurations\n    then:\n      # Assign the review to 3 random reviewers from devops team\n      - $assignReviewer($team("devops"), 3)\n')),(0,a.kt)("p",null,"An example of assigning a review to a team and a specific element."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nrules:\n  - name: changesToConfigurations\n    kind: patch\n    description: Changes code in configuration folder\n    spec: $hasFilePattern("src/config/**")\n\nworkflows:\n  - name: ask\n    description: Ask devops team\n    if:\n      - rule: changesToConfigurations\n    then:\n      # Assign the review to john\n      - $assignReviewer(["john"])\n      # Assign the review to devops team\n      - $assignTeamReviewer("devops")\n')))}m.isMDXComponent=!0}}]);