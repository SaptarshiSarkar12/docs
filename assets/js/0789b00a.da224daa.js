"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[8678],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=i,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7584:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const o={title:"Reviewpad v2.0.0 (Lisbon Edition)",slug:"reviewpad-v200-lisbon-edition",createdAt:"2022-06-21T15:23:53.384Z",hidden:!1},a="New features :fire:",l={type:"mdx",permalink:"/maester/changelog/reviewpad-v200-lisbon-edition",source:"@site/src/pages/changelog/reviewpad-v200-lisbon-edition.md",title:"Reviewpad v2.0.0 (Lisbon Edition)",description:"YAML Specification",frontMatter:{title:"Reviewpad v2.0.0 (Lisbon Edition)",slug:"reviewpad-v200-lisbon-edition",createdAt:"2022-06-21T15:23:53.384Z",hidden:!1}},c=[{value:"YAML Specification",id:"yaml-specification",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"new-features-"},"New features \ud83d\udd25"),(0,i.kt)("h2",{id:"yaml-specification"},"YAML Specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Groups and rules are now lists instead of sets.")),(0,i.kt)("h1",{id:"improvements-"},"Improvements \ud83d\ude80"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix LICENSE in open source files"),(0,i.kt)("li",{parentName:"ul"},"Fix 'hasLinearHistory' built-in"),(0,i.kt)("li",{parentName:"ul"},"Improve linter for rules and groups"),(0,i.kt)("li",{parentName:"ul"},"Fix dynamic groups")))}u.isMDXComponent=!0}}]);