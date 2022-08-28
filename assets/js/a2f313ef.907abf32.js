"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[9934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),i=(n(7294),n(3905));const r={title:"Installation",slug:"installation"},a=void 0,l={unversionedId:"getting-started/installation",id:"version-3.2.0/getting-started/installation",title:"Installation",description:"This guide describes how to install Reviewpad",source:"@site/versioned_docs/version-3.2.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/3.2.0/getting-started/installation",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/getting-started/installation.md",tags:[],version:"3.2.0",frontMatter:{title:"Installation",slug:"installation"},sidebar:"DocsSidebar",previous:{title:"Introduction",permalink:"/3.2.0/"},next:{title:"Security",permalink:"/3.2.0/getting-started/security"}},s={},p=[{value:"Step 1. Open the GitHub project on your IDE",id:"step-1-open-the-github-project-on-your-ide",level:2},{value:"Step 2. Add <code>Reviewpad Action</code> workflow file",id:"step-2-add-reviewpad-action-workflow-file",level:2},{value:"Step 3. Add <code>reviewpad.yml</code> to the root of your repository",id:"step-3-add-reviewpadyml-to-the-root-of-your-repository",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This guide describes how to install Reviewpad \u26a1"),(0,i.kt)("admonition",{title:"Install with GitHub Token",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Some actions required a GitHub token."),(0,i.kt)("p",{parentName:"admonition"},"To install Reviewpad with a GitHub token please ",(0,i.kt)("a",{parentName:"p",href:"/getting-started/installation-with-github-token"},"follow this tutorial"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reviewpad runs as a GitHub action")," at the level of a single GitHub repository, which means that you need to install Reviewpad for each repository where you wish to run it."),(0,i.kt)("p",null,"To install Reviewpad on a repository, please follow the following steps."),(0,i.kt)("h2",{id:"step-1-open-the-github-project-on-your-ide"},"Step 1. Open the GitHub project on your IDE"),(0,i.kt)("p",null,"Open the GitHub project where you wish to install Reviewpad."),(0,i.kt)("p",null,"Use you're IDE for this since we will be adding new files to the project."),(0,i.kt)("h2",{id:"step-2-add-reviewpad-action-workflow-file"},"Step 2. Add ",(0,i.kt)("inlineCode",{parentName:"h2"},"Reviewpad Action")," workflow file"),(0,i.kt)("p",null,"At the root of your repository navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},".github > workflows")," (This is where your project GitHub actions live. If you don't have these folders, please create them). "),(0,i.kt)("p",null,"Add the file ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," and copy the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name: Reviewpad Action\non:\n  pull_request\n\njobs:\n  reviewpad-action:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Running reviewpad action\n        uses: reviewpad/action@v3.x\n")),(0,i.kt)("h2",{id:"step-3-add-reviewpadyml-to-the-root-of-your-repository"},"Step 3. Add ",(0,i.kt)("inlineCode",{parentName:"h2"},"reviewpad.yml")," to the root of your repository"),(0,i.kt)("p",null,"Let's add a simple Reviewpad configuration. You can change it later on \ud83d\udcaa"),(0,i.kt)("p",null,"On the root of your repository create the ",(0,i.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," file and copy the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  small:\n    color: "294b69"\n  medium:\n    color: "a8c3f7"\n  large:\n    color: "8a2138"\n\nrules:\n  - name: isSmall\n    kind: patch\n    spec: $size() <= 30\n\n  - name: isMedium\n    kind: patch\n    spec: $size() > 30 && $size() <= 100\n\n  - name: isLarge\n    kind: patch\n    spec: $size() > 100\n\nworkflows:\n  - name: label-pull-request-with-size\n    if:\n      - rule: isSmall\n        extra-actions:\n          - $addLabel("small")\n      - rule: isMedium\n        extra-actions:\n          - $addLabel("medium")\n      - rule: isLarge\n        extra-actions:\n          - $addLabel("large")\n')),(0,i.kt)("p",null,"This particular configuration will ask Reviewpad to label you PRs based on their size."),(0,i.kt)("p",null,"You can do much more with Reviewpad. Start by looking at some of Reviewpad ",(0,i.kt)("a",{parentName:"p",href:"/use-cases"},"use cases")," or jump right into the available [built-ins/guides/built-ins)."),(0,i.kt)("admonition",{title:"Terms and Conditions",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"By running this action you're agreeing with ",(0,i.kt)("a",{parentName:"p",href:"https://reviewpad.com/terms-and-conditions/"},"Reviewpad's Terms and Conditions"),".")))}u.isMDXComponent=!0}}]);