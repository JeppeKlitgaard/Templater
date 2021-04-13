(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),r=(n(0),n(92)),o={title:"Syntax"},l={unversionedId:"syntax",id:"syntax",isDocsHomePage:!1,title:"Syntax",description:"Templater uses the Eta templating engine syntax to declare a command. You may need a bit of time to get used to it, but once you get the idea, the syntax is not that hard.",source:"@site/docs/syntax.md",slug:"/syntax",permalink:"/Templater/docs/syntax",editUrl:"https://github.com/SilentVoid13/Templater/docs/edit/master/docs/syntax.md",version:"current",sidebar:"docs",previous:{title:"Terminology",permalink:"/Templater/docs/terminology"},next:{title:"Settings",permalink:"/Templater/docs/settings"}},c=[{value:"Command syntax",id:"command-syntax",children:[]},{value:"Variable / Function syntax",id:"variable--function-syntax",children:[{value:"Objects hierarchy",id:"objects-hierarchy",children:[]},{value:"Object Invocation",id:"object-invocation",children:[]},{value:"Function documentation syntax",id:"function-documentation-syntax",children:[]}]}],b={toc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/SilentVoid13/Templater"},"Templater")," uses the ",Object(r.b)("a",{parentName:"p",href:"https://eta.js.org/"},"Eta")," templating engine syntax to declare a command. You may need a bit of time to get used to it, but once you get the idea, the syntax is not that hard."),Object(r.b)("p",null,"All of Templater's variables and functions are JavaScript objects that are invoked using a ",Object(r.b)("strong",{parentName:"p"},"command"),"."),Object(r.b)("h2",{id:"command-syntax"},"Command syntax"),Object(r.b)("p",null,"A command ",Object(r.b)("strong",{parentName:"p"},"must")," have both an opening tag ",Object(r.b)("inlineCode",{parentName:"p"},"<%")," and a closing tag ",Object(r.b)("inlineCode",{parentName:"p"},"%>"),". "),Object(r.b)("p",null,"A complete command using the ",Object(r.b)("inlineCode",{parentName:"p"},"tp.date.now")," internal function would be: ",Object(r.b)("inlineCode",{parentName:"p"},"<% tp.date.now() %>")),Object(r.b)("h2",{id:"variable--function-syntax"},"Variable / Function syntax"),Object(r.b)("h3",{id:"objects-hierarchy"},"Objects hierarchy"),Object(r.b)("p",null,"All of Templater's variables and functions, whether it's an internal or user defined one, are available under the ",Object(r.b)("inlineCode",{parentName:"p"},"tp")," object. You could say that all our variables / functions are children of the ",Object(r.b)("inlineCode",{parentName:"p"},"tp"),' object. To access the "child" of an object, we have to use a dot ',Object(r.b)("inlineCode",{parentName:"p"},". "),"  "),Object(r.b)("p",null,"This means that a Templater's variable / function invocation will always start with ",Object(r.b)("inlineCode",{parentName:"p"},"tp.<something>")),Object(r.b)("h3",{id:"object-invocation"},"Object Invocation"),Object(r.b)("p",null,"The syntax between a variable and< a function invocation is different, so it's important to know if the object we're going to call is a variable or a function."),Object(r.b)("p",null,"For example, ",Object(r.b)("inlineCode",{parentName:"p"},"tp.file.content")," is an internal variable, while ",Object(r.b)("inlineCode",{parentName:"p"},"tp.date.now")," is an internal function."),Object(r.b)("p",null,"All informations about the different internal variables / functions and their nature is given ",Object(r.b)("a",{parentName:"p",href:"internal-variables-functions"},"here"),"."),Object(r.b)("h4",{id:"variable-invocation"},"Variable invocation"),Object(r.b)("p",null,"To invoke a variable, you just need to type its name, for example ",Object(r.b)("inlineCode",{parentName:"p"},"tp.file.title")," "),Object(r.b)("p",null,"Nothing more, nothing less."),Object(r.b)("h4",{id:"function-invocation"},"Function invocation"),Object(r.b)("p",null,"To invoke a function, we need to use a syntax specific to functions calls: appending an opening and a closing parenthesis after the function name. "),Object(r.b)("p",null,"As an example, we would use ",Object(r.b)("inlineCode",{parentName:"p"},"tp.date.now()")," to invoke the ",Object(r.b)("inlineCode",{parentName:"p"},"tp.date.now")," internal function."),Object(r.b)("p",null,"A function can have arguments and optional arguments. They are placed between the opening and the closing parenthesis, like so:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"tp.date.now(arg1_value, arg2_value, arg3_value, ...)\n")),Object(r.b)("p",null,"All arguments must be passed in the correct order."),Object(r.b)("p",null,"The arguments of a function can have different ",Object(r.b)("strong",{parentName:"p"},"types"),". Here is a list of the possible types of a function:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"string")," type means the value must be placed within simple or double quotes (",Object(r.b)("inlineCode",{parentName:"li"},'"value"')," or ",Object(r.b)("inlineCode",{parentName:"li"},"'value'"),")"),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"number")," type means the value must be an integer (",Object(r.b)("inlineCode",{parentName:"li"},"15"),", ",Object(r.b)("inlineCode",{parentName:"li"},"-5"),", ...)"),Object(r.b)("li",{parentName:"ul"},"A ",Object(r.b)("inlineCode",{parentName:"li"},"boolean")," type means the value must be either ",Object(r.b)("inlineCode",{parentName:"li"},"true")," or ",Object(r.b)("inlineCode",{parentName:"li"},"false")," (completely lower case), and nothing else.")),Object(r.b)("p",null,"The type of an argument must be respected when calling a function, or it won't work."),Object(r.b)("h3",{id:"function-documentation-syntax"},"Function documentation syntax"),Object(r.b)("p",null,"The documentation for the internal functions of Templater are using the following syntax:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"tp.<my_function>(arg1_name: type, arg2_name?: type, arg3_name: type = <default_value>, arg4_name: type1|type2, ...)\n")),Object(r.b)("p",null,"Where:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"arg_name")," represents a ",Object(r.b)("strong",{parentName:"li"},"symbolic")," name for the argument, to understand what it is."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"type")," represents the expected type for the argument. This type must be respected when calling the internal function, or it will throw an error.")),Object(r.b)("p",null,"If an argument is optional, it will be appended with a question mark ",Object(r.b)("inlineCode",{parentName:"p"},"?"),", e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"arg2_name?: type")),Object(r.b)("p",null,"If an argument has a default value, it will be specified using an equal sign ",Object(r.b)("inlineCode",{parentName:"p"},"="),", e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"arg3_name: type = <default_value>"),"."),Object(r.b)("p",null,"If an argument can have different types, it will be specified using a pipe ",Object(r.b)("inlineCode",{parentName:"p"},"|"),", e.g. ",Object(r.b)("inlineCode",{parentName:"p"},"arg4_name: type1|type2")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Please note that this syntax is for documentation purposes only, to be able to understand what arguments the function expects. You mustn't specify the name nor the type nor the default value of an argument when calling a function. Only the value of the arguments are required, as explained ",Object(r.b)("a",{parentName:"p",href:"syntax#function-invocation"},"here")))),Object(r.b)("h5",{id:"example"},"Example"),Object(r.b)("p",null,"Let's take the ",Object(r.b)("inlineCode",{parentName:"p"},"tp.date.now")," internal function documentation as an example: "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'tp.date.now(format: string = "YYYY-MM-DD", offset?: number|string, reference?: string, reference_format?: string)\n')),Object(r.b)("p",null,"This internal function has 4 optional arguments: "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"a format of type ",Object(r.b)("inlineCode",{parentName:"li"},"string"),", with a default value of ",Object(r.b)("inlineCode",{parentName:"li"},'"YYYY-MM-DD"'),"."),Object(r.b)("li",{parentName:"ul"},"an offset of type ",Object(r.b)("inlineCode",{parentName:"li"},"number")," or of type ",Object(r.b)("inlineCode",{parentName:"li"},"string"),"."),Object(r.b)("li",{parentName:"ul"},"a reference of type ",Object(r.b)("inlineCode",{parentName:"li"},"string")," ."),Object(r.b)("li",{parentName:"ul"},"a reference_format of type ",Object(r.b)("inlineCode",{parentName:"li"},"string")," .")),Object(r.b)("p",null,"That means that ",Object(r.b)("strong",{parentName:"p"},"valid invocations")," for this internal function are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<% tp.date.now() %>")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'<% tp.date.now("YYYY-MM-DD", 7) %>')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'<% tp.date.now("YYYY-MM-DD", 7, "2021-04-09", "YYYY-MM-DD") %>'))),Object(r.b)("p",null,"On the other hand, ",Object(r.b)("strong",{parentName:"p"},"invalid invocations")," are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'tp.date.now(format: string = "YYYY-MM-DD")')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'tp.date.now(format: string = "YYYY-MM-DD", offset?: 0)'))))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),p=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(o,".").concat(m)]||s[m]||u[m]||r;return n?i.a.createElement(d,l(l({ref:t},b),{},{components:n})):i.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var b=2;b<r;b++)o[b]=n[b];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);