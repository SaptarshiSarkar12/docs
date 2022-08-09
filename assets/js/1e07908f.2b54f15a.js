"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[3120],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(b,l(l({ref:t},u),{},{components:a})):r.createElement(b,l({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5569:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const o={title:"Automated Labelling",id:"automated-labelling"},l=void 0,i={unversionedId:"use-cases/automated-labelling/automated-labelling",id:"version-3.0.1/use-cases/automated-labelling/automated-labelling",title:"Automated Labelling",description:"Pull Requests labels are widely used by software developers to communicate certain required actions.",source:"@site/versioned_docs/version-3.0.1/use-cases/automated-labelling/automated-labelling.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/automated-labelling/",permalink:"/maester/docs/use-cases/automated-labelling/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-3.0.1/use-cases/automated-labelling/automated-labelling.md",tags:[],version:"3.0.1",frontMatter:{title:"Automated Labelling",id:"automated-labelling"},sidebar:"DocsSidebar",previous:{title:"Ship/Show/Ask",permalink:"/maester/docs/use-cases/ship-show-ask"},next:{title:"Label based on file paths",permalink:"/maester/docs/use-cases/automated-labelling/label-based-on-file-paths"}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Pull Requests labels are widely used by software developers to communicate certain required actions."),(0,n.kt)("p",null,"Out of the box, Reviewpad supports the action of ",(0,n.kt)("a",{parentName:"p",href:"../../reviewpad-file-specification/aladino-specification/aladino-built-ins#addlabel"},"adding labels to pull requests"),"."),(0,n.kt)("p",null,"Together with the other ",(0,n.kt)("a",{parentName:"p",href:"../../reviewpad-file-specification/aladino-specification/aladino-built-ins"},"built-in capabilities"),", you can automate flexible PR labeling workflows."))}p.isMDXComponent=!0}}]);