(window.webpackJsonp=window.webpackJsonp||[]).push([[676],{1735:function(t,e,a){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t}).apply(this,arguments)}a.d(e,"a",(function(){return r}))},1736:function(t,e,a){"use strict";function r(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}a.d(e,"a",(function(){return r}))},1737:function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var r=a(0),n=a.n(r);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function b(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=n.a.createContext({}),u=function(t){var e=n.a.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},O={inlineCode:"code",wrapper:function(t){var e=t.children;return n.a.createElement(n.a.Fragment,{},e)}},s=n.a.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,i=b(t,["components","mdxType","originalType","parentName"]),s=u(a),d=r,p=s["".concat(c,".").concat(d)]||s[d]||O[d]||l;return a?n.a.createElement(p,o(o({ref:e},i),{},{components:a})):n.a.createElement(p,o({ref:e},i))}));function d(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,c=new Array(l);c[0]=s;var o={};for(var b in e)hasOwnProperty.call(e,b)&&(o[b]=e[b]);o.originalType=t,o.mdxType="string"==typeof t?t:r,c[1]=o;for(var i=2;i<l;i++)c[i]=a[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},740:function(t,e,a){"use strict";a.r(e),a.d(e,"frontMatter",(function(){return c})),a.d(e,"metadata",(function(){return o})),a.d(e,"rightToc",(function(){return b})),a.d(e,"default",(function(){return u}));var r=a(1735),n=a(1736),l=(a(0),a(1737)),c={title:"Taro.setTabBarStyle(option)",sidebar_label:"setTabBarStyle"},o={unversionedId:"apis/ui/tab-bar/setTabBarStyle",id:"apis/ui/tab-bar/setTabBarStyle",isDocsHomePage:!1,title:"Taro.setTabBarStyle(option)",description:"\u52a8\u6001\u8bbe\u7f6e tabBar \u7684\u6574\u4f53\u6837\u5f0f",source:"@site/docs/apis/ui/tab-bar/setTabBarStyle.md",slug:"/apis/ui/tab-bar/setTabBarStyle",permalink:"/taro/docs/next/apis/ui/tab-bar/setTabBarStyle",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/ui/tab-bar/setTabBarStyle.md",version:"current",sidebar_label:"setTabBarStyle",sidebar:"API",previous:{title:"Taro.showTabBar(option)",permalink:"/taro/docs/next/apis/ui/tab-bar/showTabBar"},next:{title:"Taro.setTabBarItem(option)",permalink:"/taro/docs/next/apis/ui/tab-bar/setTabBarItem"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function u(t){var e=t.components,a=Object(n.a)(t,["components"]);return Object(l.a)("wrapper",Object(r.a)({},i,a,{components:e,mdxType:"MDXLayout"}),Object(l.a)("p",null,"\u52a8\u6001\u8bbe\u7f6e tabBar \u7684\u6574\u4f53\u6837\u5f0f"),Object(l.a)("blockquote",null,Object(l.a)("p",{parentName:"blockquote"},Object(l.a)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.setTabBarStyle.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.a)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(l.a)("pre",null,Object(l.a)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<CallbackResult>\n")),Object(l.a)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.a)("h3",{id:"option"},"Option"),Object(l.a)("table",null,Object(l.a)("thead",null,Object(l.a)("tr",null,Object(l.a)("th",null,"\u53c2\u6570"),Object(l.a)("th",null,"\u7c7b\u578b"),Object(l.a)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(l.a)("th",null,"\u8bf4\u660e"))),Object(l.a)("tbody",null,Object(l.a)("tr",null,Object(l.a)("td",null,"backgroundColor"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"tab \u7684\u80cc\u666f\u8272\uff0cHexColor")),Object(l.a)("tr",null,Object(l.a)("td",null,"borderStyle"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"tabBar\u4e0a\u8fb9\u6846\u7684\u989c\u8272\uff0c \u4ec5\u652f\u6301 black/white")),Object(l.a)("tr",null,Object(l.a)("td",null,"color"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"tab \u4e0a\u7684\u6587\u5b57\u9ed8\u8ba4\u989c\u8272\uff0cHexColor")),Object(l.a)("tr",null,Object(l.a)("td",null,"complete"),Object(l.a)("td",null,Object(l.a)("code",null,"(res: CallbackResult) => void")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(l.a)("tr",null,Object(l.a)("td",null,"fail"),Object(l.a)("td",null,Object(l.a)("code",null,"(res: CallbackResult) => void")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(l.a)("tr",null,Object(l.a)("td",null,"selectedColor"),Object(l.a)("td",null,Object(l.a)("code",null,"string")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"tab \u4e0a\u7684\u6587\u5b57\u9009\u4e2d\u65f6\u7684\u989c\u8272\uff0cHexColor")),Object(l.a)("tr",null,Object(l.a)("td",null,"success"),Object(l.a)("td",null,Object(l.a)("code",null,"(res: CallbackResult) => void")),Object(l.a)("td",{style:{textAlign:"center"}},"\u5426"),Object(l.a)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(l.a)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(l.a)("pre",null,Object(l.a)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.setTabBarStyle({\n  color: '#FF0000',\n  selectedColor: '#00FF00',\n  backgroundColor: '#0000FF',\n  borderStyle: 'white'\n})\n")),Object(l.a)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.a)("table",null,Object(l.a)("thead",{parentName:"table"},Object(l.a)("tr",{parentName:"thead"},Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.a)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.a)("tbody",{parentName:"table"},Object(l.a)("tr",{parentName:"tbody"},Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.setTabBarStyle"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.a)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);