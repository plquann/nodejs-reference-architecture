"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(p,".").concat(d)]||u[d]||h[d]||s;return n?a.createElement(m,r(r({ref:t},l),{},{components:n})):a.createElement(m,r({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6779:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var a=n(7462),o=n(3366),s=(n(7294),n(3905)),r=["components"],i={sidebar_position:5},p="Testing",c={unversionedId:"development/testing",id:"development/testing",isDocsHomePage:!1,title:"Testing",description:"Recommended Packages",source:"@site/docs/development/testing.md",sourceDirName:"development",slug:"/development/testing",permalink:"/nodejs-reference-architecture/development/testing",editUrl:"https://github.com/nodeshift/nodejs-reference-architecture/docs/development/testing.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Npm Publishing Guidelines",permalink:"/nodejs-reference-architecture/development/npm-publishing"},next:{title:"Authentication",permalink:"/nodejs-reference-architecture/functional-components/auth"}},l=[{value:"Recommended Packages",id:"recommended-packages",children:[]},{value:"Jest - https://jestjs.io",id:"jest---httpsjestjsio",children:[]},{value:"Mocha - https://mochajs.org",id:"mocha---httpsmochajsorg",children:[]},{value:"Guidance",id:"guidance",children:[{value:"When Jest might be the better choice",id:"when-jest-might-be-the-better-choice",children:[]},{value:"When Mocha might be the better choice",id:"when-mocha-might-be-the-better-choice",children:[]},{value:"Recommended Packages to Use Alongside Mocha",id:"recommended-packages-to-use-alongside-mocha",children:[]}]}],h={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"testing"},"Testing"),(0,s.kt)("h2",{id:"recommended-packages"},"Recommended Packages"),(0,s.kt)("p",null,"The best package to use for testing often depends on the type and scope of a project\nversus one size fits all. For that reason we'll mention two of the test frameworks\nthat the team has had success with."),(0,s.kt)("h2",{id:"jest---httpsjestjsio"},"Jest - ",(0,s.kt)("a",{parentName:"h2",href:"https://jestjs.io"},"https://jestjs.io")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/jest"},"Jest")," is a popular testing framework from Facebook. It excels at testing React and other\ncomponent-based web applications, and can be used in other contexts. It is considered an\n",(0,s.kt)("em",{parentName:"p"},"opinionated")," framework, as it provides its own set of assertions, spies/stubs/mocks, and\nother features (such as snapshot testing and code coverage) out-of-the-box."),(0,s.kt)("p",null,"Jest is owned by Facebook."),(0,s.kt)("h2",{id:"mocha---httpsmochajsorg"},"Mocha - ",(0,s.kt)("a",{parentName:"h2",href:"https://mochajs.org"},"https://mochajs.org")),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/mocha"},"Mocha")," is a widely used, mature (created in 2011) and stable project. While Node.js\nis the main area of focus and support, Mocha can also be used in a browser context.\nMocha is an ",(0,s.kt)("em",{parentName:"p"},"unopinionated")," framework with a large ecosystem of plugins and extensions."),(0,s.kt)("p",null,"Mocha is an ",(0,s.kt)("a",{parentName:"p",href:"https://openjsf.org"},"OpenJS Foundation")," project with open governance."),(0,s.kt)("h2",{id:"guidance"},"Guidance"),(0,s.kt)("p",null,"Both Mocha and Jest provide test parallelization. By default this is disabled in Mocha,\nas many use-cases see a negative performance impact when running tests in parallel. If you\nexperience longer test times than expected you should check if enabling or disabling\nparallelism will improve test run times."),(0,s.kt)("h3",{id:"when-jest-might-be-the-better-choice"},"When Jest might be the better choice"),(0,s.kt)("p",null,"When testing React or component-based applications."),(0,s.kt)("p",null,"When using a compile-to-JavaScript language (like TypeScript)."),(0,s.kt)("p",null,"When snapshots are useful. ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/snapshot-testing"},"Snapshots")," provide an easy to use way of testing output\nof a function and saving the result as a snapshot artifact, which can then be used to\ncompare against as a test. As an example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"test('unknown service', () => {\n    expect(() => {\n      bindings.getBinding('DOEST_NOT_EXIST');\n    }).toThrowErrorMatchingSnapshot('unknown service');\n  });\n")),(0,s.kt)("p",null,"The first time the test is run it will create/store a snapshot of the exepcted exception.\nOn subsequent runs if the exception does not match the snapshot, it will report\na test failure. This makes generating/capturing the result from an operation being tested\nfast and easy."),(0,s.kt)("h3",{id:"when-mocha-might-be-the-better-choice"},"When Mocha might be the better choice"),(0,s.kt)("p",null,"When you want a smaller dependency tree (91 packages versus 522)."),(0,s.kt)("p",null,"When Jest's opinions, environment proxies and dependency upon ",(0,s.kt)("a",{parentName:"p",href:"https://babeljs.io"},"Babel")," are unfavorable for your use-case."),(0,s.kt)("p",null,"As an example of potential problems with Jest's environment proxies, Jest replaces globals in the environment in a\nway that can cause failures with native addons. As an example, this simple test fails:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JavaScript"},"const addon = require('bindings')('hello');\n\ndescribe('test suite 1', () => {\n  test('exception', () => {\n    expect(addon.exception()).toThrow(TypeError);\n  });\n});\n")),(0,s.kt)("p",null,"even thought the addon is throwing the expected exception:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-C++"},'static napi_value ExceptionMethod(napi_env env, napi_callback_info info) {\n   napi_throw_type_error(env, "code1", "type exception");\n   return NULL;\n}\n')),(0,s.kt)("p",null,"and the failure reports the exception as ",(0,s.kt)("inlineCode",{parentName:"p"},"TypeError: type exception")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"}," FAIL  __tests__/test.js\n  \u25cf test suite 1 \u203a exception\n\n    TypeError: type exception\n\n      3 | describe('test suite 1', () => {\n      4 |   test('exception', () => {\n    > 5 |     expect(addon.exception()).toThrow(TypeError);\n        |                  ^\n      6 |   });\n      7 | });\n      8 |\n\n      at Object.<anonymous> (__tests__/test.js:5:18)\n")),(0,s.kt)("p",null,"An equivalent test runs successfully with Mocha. The full source for the test is here: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/nodeshift-blog-examples/jest-with-native-addon-issue"},"https://github.com/nodeshift-blog-examples/jest-with-native-addon-issue")),(0,s.kt)("h3",{id:"recommended-packages-to-use-alongside-mocha"},"Recommended Packages to Use Alongside Mocha"),(0,s.kt)("p",null,'Because Mocha is unopinionated, it does not ship with "batteries included." While Mocha is usable\nwithout any other third-party library, many users find the following libraries and tools helpful.'),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"See the ",(0,s.kt)("a",{parentName:"em",href:"https://mochajs.org"},"Mocha documentation")," and ",(0,s.kt)("a",{parentName:"em",href:"https://github.com/mochajs/mocha-examples"},"examples repository")," for more information on integrating with other tools"),"."),(0,s.kt)("h4",{id:"assertion-library"},"Assertion Library"),(0,s.kt)("p",null,"Most Mocha users will want to consume a third-party ",(0,s.kt)("em",{parentName:"p"},"assertion library"),". Besides the Node.js\nbuilt-in ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org/api/assert.html#assert_assert"},(0,s.kt)("inlineCode",{parentName:"a"},"assert")," module"),", Mocha recommends one of the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/chai"},"Chai"),': the most popular general-purpose assertion library, with traditional and "natural language" APIs available'),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/unexpected"},"Unexpected"),": a string-based natural language API, Mocha uses Unexpected in its own tests")),(0,s.kt)("p",null,"Both of the above have their own plugin ecosystems."),(0,s.kt)("h4",{id:"stubs-spies-and-mocks"},"Stubs, Spies and Mocks"),(0,s.kt)("p",null,"Many users will want a library providing ",(0,s.kt)("em",{parentName:"p"},"stubs, spies and mocks")," to aid isolation when writing unit tests."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/sinon"},"Sinon"),": the most popular stub, spy and mock library; mature"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/testdouble"},"Testdouble"),": a full-featured library with the ability to mock at the module level")),(0,s.kt)("p",null,"Both of the above have their own plugin ecosystems."),(0,s.kt)("h4",{id:"code-coverage"},"Code Coverage"),(0,s.kt)("p",null,"Mocha does not automatically compute code coverage. If you need it, use:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/nyc"},"nyc"),": the most popular code-coverage tool; the successor CLI for Istanbul")))}u.isMDXComponent=!0}}]);