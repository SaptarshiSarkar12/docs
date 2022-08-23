"use strict";(self.webpackChunkmaester=self.webpackChunkmaester||[]).push([[9884],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},548:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={title:"Semantics",id:"semantics"},o=void 0,l={unversionedId:"guides/semantics",id:"version-3.2.0/guides/semantics",title:"Semantics",description:"A Reviewpad configuration file goes through a series of syntactic checks.",source:"@site/versioned_docs/version-3.2.0/guides/semantics.md",sourceDirName:"guides",slug:"/guides/semantics",permalink:"/3.2.0/guides/semantics",draft:!1,editUrl:"https://github.com/reviewpad/docs/tree/main/versioned_docs/version-3.2.0/guides/semantics.md",tags:[],version:"3.2.0",frontMatter:{title:"Semantics",id:"semantics"},sidebar:"DocsSidebar",previous:{title:"Syntax",permalink:"/3.2.0/guides/syntax"},next:{title:"Built-ins",permalink:"/3.2.0/guides/built-ins"}},s={},u=[{value:"Syntactic checks",id:"syntactic-checks",level:2},{value:"Unused rule",id:"unused-rule",level:3},{value:"Reference to undefined rule",id:"reference-to-undefined-rule",level:3},{value:"Interpreter",id:"interpreter",level:2},{value:"Environment",id:"environment",level:3},{value:"Design decisions",id:"design-decisions",level:3},{value:"Program generation",id:"program-generation",level:3}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A Reviewpad configuration file goes through a series of syntactic checks."),(0,a.kt)("h2",{id:"syntactic-checks"},"Syntactic checks"),(0,a.kt)("h3",{id:"unused-rule"},"Unused rule"),(0,a.kt)("p",null,"Each rule specified in the ",(0,a.kt)("em",{parentName:"p"},"rules")," section must be used in a ",(0,a.kt)("em",{parentName:"p"},"workflow"),". The following file is not valid since ",(0,a.kt)("inlineCode",{parentName:"p"},"dummyRule")," is not used in any workflow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  fastTrack:\n    name: "fast track"\n    description: Fast track mode\n    color: "76dbbe"\n\nrules:\n  - name: changesOneFile\n    kind: patch\n    description: Patch has more one file\n    spec: $fileCount == 1\n\n  - name: dummyRule\n    kind: patch\n    description: Simple dummy rule\n    spec: 1 == 1\n\nworkflows:\n  - name: fastTrack\n    description: Fast track of pull requests\n    if:\n      - rule: changesOneFile\n    then:\n      - $addLabel("fastTrack")\n')),(0,a.kt)("h3",{id:"reference-to-undefined-rule"},"Reference to undefined rule"),(0,a.kt)("p",null,"Each rule referenced in a ",(0,a.kt)("em",{parentName:"p"},"workflow")," must be defined in the rules section. The following file is not valid as ",(0,a.kt)("inlineCode",{parentName:"p"},"changesOneFile")," is not defined."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'api-version: reviewpad.com/v3.x\n\nlabels:\n  fastTrack:\n    description: Fast track mode\n    color: "76dbbe"\n\nrules:\n\nworkflows:\n  - name: fastTrack\n    description: Fast track of pull requests\n    if:\n      - rule: changesOneFile\n    then:\n      - $addLabel("fastTrack")\n')),(0,a.kt)("h2",{id:"interpreter"},"Interpreter"),(0,a.kt)("p",null,"If a Reviewpad configuration file is syntactically valid, then it will be passed to the interpreter. "),(0,a.kt)("p",null,"This interpreter receives the file and an environment as input and if no error is found during the interpretation, it outputs the program to be executed."),(0,a.kt)("h3",{id:"environment"},"Environment"),(0,a.kt)("p",null,"The environment used by the interpreter is specified in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/reviewpad/action/blob/main/action.yml"},"reviewpad/action"),": "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"GitHub repository (e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"google/guava"),");"),(0,a.kt)("li",{parentName:"ol"},"Pull request number (e.g. for ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/google/guava/pull/5929"},"https://github.com/google/guava/pull/5929")," it would be ",(0,a.kt)("inlineCode",{parentName:"li"},"5929"),");"),(0,a.kt)("li",{parentName:"ol"},"Access token. By default, it uses automatic token authentication. For more information read ",(0,a.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/security-guides/automatic-token-authentication"},"https://docs.github.com/en/actions/security-guides/automatic-token-authentication"),".")),(0,a.kt)("h3",{id:"design-decisions"},"Design decisions"),(0,a.kt)("p",null,"The task of the interpreter is to traverse the workflow list to find which (if any) workflow is enabled in the environment."),(0,a.kt)("p",null,"The workflows that are enabled and subsequently which program will be executed respect the following rules:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A workflow is enabled if and only if any of its rules evaluates to ",(0,a.kt)("strong",{parentName:"li"},"true.")),(0,a.kt)("li",{parentName:"ol"},"The order in which the workflows are specified determines the evaluation order."),(0,a.kt)("li",{parentName:"ol"},"The final program is built by iterating over all workflows in the specified list."),(0,a.kt)("li",{parentName:"ol"},"Only one workflow with ",(0,a.kt)("inlineCode",{parentName:"li"},"always-run: false")," is enabled per execution."),(0,a.kt)("li",{parentName:"ol"},"The evaluation of workflow is lazy, i.e. as soon as a workflow is activated, all the others are disregarded unless they have ",(0,a.kt)("inlineCode",{parentName:"li"},"alwaysRun: true"),".")),(0,a.kt)("p",null,"For example, consider the following pseudo Reviewpad file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"api-version: reviewpad.com/v2.x\n\nrules:\n rule_1\n rule_2\n\nworkflows:\n  - name: workflow_1\n    description: Workflow 1\n    if:\n      - rule: rule_1\n    then:\n      - action_1\n\n  - name: workflow_2\n    description: Workflow 2\n    if:\n      - rule: rule_1\n      - rule: rule_2\n    then:\n      - action_2\n")),(0,a.kt)("p",null,"The interpreter starts by evaluating the rules of ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow_1")," and only if all the rules are false it will go evaluate the rules of ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow_2"),". At the moment, there is no caching between rules. "),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_1")," is true, then ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow_1")," would be active. As a consequence ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow_2")," would never be evaluated and therefore ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_2"),"."),(0,a.kt)("p",null,"The specification of the rules only contains read-only actions."),(0,a.kt)("h3",{id:"program-generation"},"Program generation"),(0,a.kt)("p",null,"As we mentioned, the interpreter will produce an ",(0,a.kt)("a",{parentName:"p",href:"/guides/aladino/specification"},"Aladino")," program that will be executed.",(0,a.kt)("br",{parentName:"p"}),"\n","This program is simply a sequence of actions. "),(0,a.kt)("p",null,"We will use an example to illustrate how this program is generated. Assume that we have the following workflow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  - name: workflow_X\n    description: Active workflow\n    if:\n      - rule: rule_1\n        extra-actions:\n          - rule_1_action_1\n          - rule_1_action_2\n      - rule: rule_2\n        extra-actions:\n          - rule_2_action_1\n      - rule: rule_3\n      - rule: rule_4\n        extra-actions:\n          - rule_4_action_1\n    then:\n      - gen_action_1\n      - gen_action_2\n")),(0,a.kt)("p",null,"Assume that ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_1"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_3")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_4")," evaluate to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"rule_2")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,a.kt)("p",null,"It follows that ",(0,a.kt)("inlineCode",{parentName:"p"},"workflow_X")," is active. The final program is generated by concatenating the general actions of the workflow with the extra actions of each enabled rule."),(0,a.kt)("p",null,"In this case this would be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"gen_action_1\ngen_action_2\nrule_1_action_1\nrule_1_action_2\nrule_4_action_1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: The order in which both workflow and rules are specified matters. This is similar to any programming language where the order of statements matters.")))}p.isMDXComponent=!0}}]);