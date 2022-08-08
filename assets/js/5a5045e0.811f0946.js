"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[6270],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),m=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||s;return a?r.createElement(f,i(i({ref:t},p),{},{components:a})):r.createElement(f,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var m=2;m<s;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7528:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const s={title:"Timestamps",id:"timestamps"},i=void 0,o={unversionedId:"use-cases/timestamps/timestamps",id:"use-cases/timestamps/timestamps",title:"Timestamps",description:"Reviewpad timestamps allow us to trigger workflows based on time.",source:"@site/docs/use-cases/timestamps/timestamps.md",sourceDirName:"use-cases/timestamps",slug:"/use-cases/timestamps/",permalink:"/docs/next/use-cases/timestamps/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/use-cases/timestamps/timestamps.md",tags:[],version:"current",frontMatter:{title:"Timestamps",id:"timestamps"},sidebar:"DocsSidebar",previous:{title:"Auto-merge",permalink:"/docs/next/use-cases/auto-merge"},next:{title:"Notify when long live pull request",permalink:"/docs/next/use-cases/timestamps/notify-when-long-live-pull-request"}},l={},m=[{value:"RFC3339 and similar Timestamps",id:"rfc3339-and-similar-timestamps",level:3},{value:"Relative Timestamps",id:"relative-timestamps",level:3}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Reviewpad timestamps allow us to trigger workflows based on time."),(0,n.kt)("p",null,"We are able to use ",(0,n.kt)("a",{parentName:"p",href:"https://pkg.go.dev/time#pkg-constants"},"RFC3339 timestamps")," or relative timestamps."),(0,n.kt)("h3",{id:"rfc3339-and-similar-timestamps"},"RFC3339 and similar Timestamps"),(0,n.kt)("p",null,"Here we can use a timestamp in similar ",(0,n.kt)("inlineCode",{parentName:"p"},"RFC3339")," format:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"YYYYMMDD")," - e.g. 20220405"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"YYYY-MM-DD")," - e.g. 2022-04-05"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"YYYYMMDDTHH:MM:SS")," - e.g. 20220405T22:01:50"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"YYYY-MM-DDTHH:MM:SS")," - e.g. 2022-04-05T22:01:50")),(0,n.kt)("h3",{id:"relative-timestamps"},"Relative Timestamps"),(0,n.kt)("p",null,"Use time as expression ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"TIME year|month|day|week|hour|minute ago")),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"15 days ago"),(0,n.kt)("li",{parentName:"ul"},"3 months ago"),(0,n.kt)("li",{parentName:"ul"},"1 hour ago")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udcd8 Aladino Syntax"),(0,n.kt)("p",{parentName:"blockquote"},"Check ",(0,n.kt)("a",{parentName:"p",href:"../../reviewpad-file-specification/aladino-specification/aladino-syntax"},"Aladino Syntax")," for more details about timestamps.")))}u.isMDXComponent=!0}}]);