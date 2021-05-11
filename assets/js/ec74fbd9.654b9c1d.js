(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),b=r,f=l["".concat(a,".").concat(b)]||l[b]||m[b]||i;return n?o.a.createElement(f,c(c({ref:t},p),{},{components:n})):o.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),o=n(7),i=(n(0),n(104)),a={title:"Script User Functions"},c={unversionedId:"user-functions/script-user-functions",id:"user-functions/script-user-functions",isDocsHomePage:!1,title:"Script User Functions",description:"This type of user functions allows you to call JavaScript functions from JavaScript files and retrieve their output.",source:"@site/docs/user-functions/script-user-functions.md",slug:"/user-functions/script-user-functions",permalink:"/Templater/docs/user-functions/script-user-functions",editUrl:"https://github.com/SilentVoid13/Templater/docs/edit/master/docs/user-functions/script-user-functions.md",version:"current",sidebar:"docs",previous:{title:"Overview",permalink:"/Templater/docs/user-functions"},next:{title:"System Command User Functions",permalink:"/Templater/docs/user-functions/system-user-functions"}},s=[{value:"Define a Script User Function",id:"define-a-script-user-function",children:[]},{value:"Functions Arguments",id:"functions-arguments",children:[]}],p={toc:s};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This type of user functions allows you to call JavaScript functions from JavaScript files and retrieve their output."),Object(i.b)("p",null,"To use script user functions, you need to specify a script folder in Templater's settings. This folder needs to be accessible from your vault. "),Object(i.b)("h2",{id:"define-a-script-user-function"},"Define a Script User Function"),Object(i.b)("p",null,"Let's say you specified the ",Object(i.b)("inlineCode",{parentName:"p"},"Scripts")," folder as your script folder in Templater's settings."),Object(i.b)("p",null,"You can then create your script named ",Object(i.b)("inlineCode",{parentName:"p"},"Scripts/my_script.js")," (The ",Object(i.b)("inlineCode",{parentName:"p"},".js")," extension is required) for example."),Object(i.b)("p",null,"Scripts should follow the ",Object(i.b)("a",{parentName:"p",href:"https://flaviocopes.com/commonjs/"},"CommonJS module specification"),", and export a single function."),Object(i.b)("p",null,"Let's have an example with our previous script ",Object(i.b)("inlineCode",{parentName:"p"},"my_script.js"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'function my_function (msg) {\n    console.log("Message from my script:", msg);\n}\nmodule.exports = my_function;\n')),Object(i.b)("p",null,"Templater will then load all JavaScript (",Object(i.b)("inlineCode",{parentName:"p"},".js")," files) scripts in the ",Object(i.b)("inlineCode",{parentName:"p"},"Scripts")," folder."),Object(i.b)("p",null,"You will then be able to call your scripts as user functions. The function name corresponds to the script file name."),Object(i.b)("p",null,"In our previous example, a complete command invocation would look like this: "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'<% tp.user.my_script("Hello World!") %>\n')),Object(i.b)("p",null,"Which would print ",Object(i.b)("inlineCode",{parentName:"p"},"Message from my script: Hello World!")," in the console."),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"In script user functions, you can still access global namespace variables like ",Object(i.b)("inlineCode",{parentName:"p"},"app")," or ",Object(i.b)("inlineCode",{parentName:"p"},"moment"),"."),Object(i.b)("p",{parentName:"div"},"However, you can't access Eta scoped variables like ",Object(i.b)("inlineCode",{parentName:"p"},"tp")," or ",Object(i.b)("inlineCode",{parentName:"p"},"tR"),". If you want to use them, you must pass them as arguments for your function."))),Object(i.b)("h2",{id:"functions-arguments"},"Functions Arguments"),Object(i.b)("p",null,"You can pass as much arguments as you want to your function, depending on how you defined it."),Object(i.b)("p",null,"You can for example pass the ",Object(i.b)("inlineCode",{parentName:"p"},"tp")," object to your function, to be able to use all of the ",Object(i.b)("a",{parentName:"p",href:"/Templater/docs/internal-variables-functions"},"internal variables / functions")," of Templater: ",Object(i.b)("inlineCode",{parentName:"p"},"<% tp.user.<user_function_name>(tp) %>")))}u.isMDXComponent=!0}}]);