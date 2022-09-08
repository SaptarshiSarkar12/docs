"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[6302],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>b});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),u=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),b=n,m=d["".concat(i,".").concat(b)]||d[b]||c[b]||o;return t?a.createElement(m,s(s({ref:r},p),{},{components:t})):a.createElement(m,s({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8521:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=t(7462),n=(t(7294),t(3905));const o={title:"Label based on author groups",id:"label-based-on-author-groups",slug:"/use-cases/label-based-on-author-groups"},s=void 0,l={unversionedId:"use-cases/automated-labelling/label-based-on-author-groups",id:"version-3.4.0/use-cases/automated-labelling/label-based-on-author-groups",title:"Label based on author groups",description:"Here's an example of a reviewpad.yml configuration that label pull requests authored by a member of a group of developers.",source:"@site/versioned_docs/version-3.4.0/use-cases/automated-labelling/label-based-on-author-groups.md",sourceDirName:"use-cases/automated-labelling",slug:"/use-cases/label-based-on-author-groups",permalink:"/3.4.0/use-cases/label-based-on-author-groups",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/docs/use-cases/automated-labelling/label-based-on-author-groups.md",tags:[],version:"3.4.0",frontMatter:{title:"Label based on author groups",id:"label-based-on-author-groups",slug:"/use-cases/label-based-on-author-groups"},sidebar:"DocsSidebar",previous:{title:"Automated Labelling",permalink:"/3.4.0/use-cases/automated-labelling/"},next:{title:"Label based on file paths",permalink:"/3.4.0/use-cases/label-based-on-file-paths"}},i={},u=[],p={toc:u};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Here's an example of a ",(0,n.kt)("inlineCode",{parentName:"p"},"reviewpad.yml")," configuration that label pull requests authored by a member of a group of developers."),(0,n.kt)("p",null,"Suppose that, as Spotify, you consider developers ",(0,n.kt)("em",{parentName:"p"},"new joiner")," until they create/merge their ",(0,n.kt)("a",{parentName:"p",href:"https://backstage.spotify.com/blog/measuring-backstage-success-at-spotify/"},"10th PR"),". Each time a ",(0,n.kt)("em",{parentName:"p"},"new joiner")," creates a PR, you want to label it in order to be able to perform a dedicated code review process. Using Reviewpad groups you can easily do such labeling."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  new-joiner:\n    description: Pull requests created by new joiners\n    # color is the hexadecimal color code for the label, without the leading #.\n    color: "294b69"\n\ngroups:\n  - name: newJoiners\n    description: Group of developers that have created less than 10 PRs\n    kind: developers\n    type: filter\n    param: developer\n    where: $pullRequestCountBy($developer, "all") < 10\n\nrules:\n  - name: authoredByNewJoiner\n    kind: patch\n    description: Patch authored by new joiner\n    spec: $isElementOf($author(), $group("newJoiners"))\n\nworkflows:\n  - name: critical\n    description: Modifications by new joiners require careful review\n    if:\n      - rule: authoredByNewJoiner\n    then:\n      - $addLabel("new-joiner")\n')))}c.isMDXComponent=!0}}]);