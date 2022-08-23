"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[9002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,f=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(f,c(c({ref:t},d),{},{components:n})):a.createElement(f,c({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var s=2;s<i;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5872:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"Label critical changes with code pattern",id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern"},c=void 0,o={unversionedId:"use-cases/automated-labelling/label-critical-changes-with-code-pattern",id:"version-3.3.1/use-cases/automated-labelling/label-critical-changes-with-code-pattern",title:"Label critical changes with code pattern",description:"The [hasCodePattern/guides/built-ins#hascodepattern) built-in allows you to query the code contained in the diff to understand if, for example, particular function calls were changed or sensitive data (such as passwords or access tokens) are being explicitly added to the code.",source:"@site/versioned_docs/version-3.3.1/use-cases/automated-labelling/label-critical-changes-with-code-pattern.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/label-critical-changes-with-code-pattern",permalink:"/use-cases/label-critical-changes-with-code-pattern",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/versioned_docs/version-3.3.1/use-cases/automated-labelling/label-critical-changes-with-code-pattern.md",tags:[],version:"3.3.1",frontMatter:{title:"Label critical changes with code pattern",id:"label-critical-changes-with-code-pattern",slug:"/use-cases/label-critical-changes-with-code-pattern"},sidebar:"DocsSidebar",previous:{title:"Label potential missing changes",permalink:"/use-cases/label-potential-missing-changes"},next:{title:"Label critical changes with semantic code annotations",permalink:"/use-cases/label-critical-changes-with-semantic-code-annotations"}},l={},s=[],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The [hasCodePattern/guides/built-ins#hascodepattern) built-in allows you to query the code contained in the diff to understand if, for example, particular function calls were changed or sensitive data (such as passwords or access tokens) are being explicitly added to the code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  critical:\n    description: Critical code\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "fd5e53"\n\nrules:\n  - name: callsQuicksort\n    kind: patch\n    description: Patch contains the keyword quicksort\n    spec: $hasCodePattern("quicksort")\n\nworkflows:\n  - name: critical\n    description: Modifications of critical code require careful review\n    if:\n      - rule: callsQuicksort\n    then:\n      - $addLabel("critical")\n')))}u.isMDXComponent=!0}}]);