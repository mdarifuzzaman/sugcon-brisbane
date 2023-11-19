"use strict";(self.webpackChunkstorybook_app=self.webpackChunkstorybook_app||[]).push([[617],{"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./stories/organisms/Download.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultDownload:()=>DefaultDownload,default:()=>Download_stories});var defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),CtaBanner=__webpack_require__("../my-jss-app/src/components/controls/molecules/CtaBanner.tsx"),console=__webpack_require__("../../node_modules/node-polyfill-webpack-plugin/node_modules/console-browserify/index.js"),__jsx=react.createElement;function Download(props){var _props$params,_props$fields;console.log("Download",props);var clickMe=function clickMe(){alert("Clicked")};return __jsx("section",{id:"download-boxes",className:"py-32"},__jsx("div",{className:null==props||null===(_props$params=props.params)||void 0===_props$params?void 0:_props$params.ComponentClass},null===(_props$fields=props.fields)||void 0===_props$fields||null===(_props$fields=_props$fields.CtaBanners)||void 0===_props$fields?void 0:_props$fields.map((function(cta,index){var _cta$fields,_cta$fields2,_cta$fields3,_cta$fields4,_cta$fields5,_cta$fields6,_cta$fields7,_cta$fields8,_cta$fields9,_cta$fields10,_cta$fields11,_cta$fields12,_cta$fields13;return __jsx(react.Fragment,null,(null==cta||null===(_cta$fields=cta.fields)||void 0===_cta$fields||null===(_cta$fields=_cta$fields.DivClass)||void 0===_cta$fields||null===(_cta$fields=_cta$fields.value)||void 0===_cta$fields?void 0:_cta$fields.length)>0?__jsx(react.Fragment,null,__jsx("div",{className:"w-full md:w-1/3",key:index},__jsx(CtaBanner.Z,{componentClassName:null===(_cta$fields2=cta.fields)||void 0===_cta$fields2||null===(_cta$fields2=_cta$fields2.ComponentClass)||void 0===_cta$fields2?void 0:_cta$fields2.value,ctaButtonClassName:null===(_cta$fields3=cta.fields)||void 0===_cta$fields3||null===(_cta$fields3=_cta$fields3.CtaButtonClass)||void 0===_cta$fields3?void 0:_cta$fields3.value,ctaCallBack:clickMe,ctaTitle:null===(_cta$fields4=cta.fields)||void 0===_cta$fields4||null===(_cta$fields4=_cta$fields4.CtaTitle)||void 0===_cta$fields4?void 0:_cta$fields4.value,subTitle:null===(_cta$fields5=cta.fields)||void 0===_cta$fields5||null===(_cta$fields5=_cta$fields5.SubTitle)||void 0===_cta$fields5?void 0:_cta$fields5.value,imgSrc:null===(_cta$fields6=cta.fields)||void 0===_cta$fields6||null===(_cta$fields6=_cta$fields6.Image)||void 0===_cta$fields6||null===(_cta$fields6=_cta$fields6.value)||void 0===_cta$fields6?void 0:_cta$fields6.src,title:null===(_cta$fields7=cta.fields)||void 0===_cta$fields7||null===(_cta$fields7=_cta$fields7.Title)||void 0===_cta$fields7?void 0:_cta$fields7.value}))):__jsx(react.Fragment,null,__jsx(CtaBanner.Z,{key:index,componentClassName:null===(_cta$fields8=cta.fields)||void 0===_cta$fields8||null===(_cta$fields8=_cta$fields8.ComponentClass)||void 0===_cta$fields8?void 0:_cta$fields8.value,ctaButtonClassName:null===(_cta$fields9=cta.fields)||void 0===_cta$fields9||null===(_cta$fields9=_cta$fields9.CtaButtonClass)||void 0===_cta$fields9?void 0:_cta$fields9.value,ctaCallBack:clickMe,ctaTitle:null===(_cta$fields10=cta.fields)||void 0===_cta$fields10||null===(_cta$fields10=_cta$fields10.CtaTitle)||void 0===_cta$fields10?void 0:_cta$fields10.value,subTitle:null===(_cta$fields11=cta.fields)||void 0===_cta$fields11||null===(_cta$fields11=_cta$fields11.SubTitle)||void 0===_cta$fields11?void 0:_cta$fields11.value,imgSrc:null===(_cta$fields12=cta.fields)||void 0===_cta$fields12||null===(_cta$fields12=_cta$fields12.Image)||void 0===_cta$fields12||null===(_cta$fields12=_cta$fields12.value)||void 0===_cta$fields12?void 0:_cta$fields12.src,title:null===(_cta$fields13=cta.fields)||void 0===_cta$fields13||null===(_cta$fields13=_cta$fields13.Title)||void 0===_cta$fields13?void 0:_cta$fields13.value})))}))))}Download.displayName="Download",Download.__docgenInfo={description:"",methods:[],displayName:"Download",props:{fields:{required:!0,tsType:{name:"signature",type:"object",raw:"{\r\n  CtaBanners: any\r\n}",signature:{properties:[{key:"CtaBanners",value:{name:"any",required:!0}}]}},description:""},params:{required:!0,tsType:{name:"any"},description:""}}};const components_Download=Download;try{Download.displayName="Download",Download.__docgenInfo={description:"",displayName:"Download",props:{fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"{ CtaBanners: any; }"}},params:{defaultValue:null,description:"",name:"params",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../my-jss-app/src/components/Download.tsx#Download"]={docgenInfo:Download.__docgenInfo,name:"Download",path:"../my-jss-app/src/components/Download.tsx#Download"})}catch(__react_docgen_typescript_loader_error){}var _DefaultDownload$para,_DefaultDownload$para2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Download_stories={title:"Download",component:components_Download,tags:["autodocs"],parameters:{layout:"fullscreen"}};var DefaultDownload={args:{fields:{CtaBanners:[{id:"e21074e8-b76b-4b49-bfbe-714b27b3bc03",url:"/Data/Banner-Container/Banner1",name:"Banner1",displayName:"Banner1",fields:{ComponentClass:{value:"flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3"},CtaButtonClass:{value:"block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"},Image:{value:{src:"https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-chrome.svg?iar=0&hash=0D013447FEA100B87F6E82AFC0A6E80E",alt:"dd"}},DivClass:{value:""},CtaTitle:{value:"Add Install Extension"},SubTitle:{value:"Minimum Version 62"},Title:{value:"Add to Chrome"}}},{id:"fcb2ffba-650d-4d51-8751-9610f9588271",url:"/Data/Banner-Container/Banner2",name:"Banner2",displayName:"Banner2",fields:{ComponentClass:{value:"flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8"},CtaButtonClass:{value:"block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"},Image:{value:{src:"https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-firefox.svg?iar=0&hash=83380DD2B92F90D35BD766F83335D15E",alt:"ddd"}},DivClass:{value:"w-full md:w-1/3"},CtaTitle:{value:"Add Install Extension"},SubTitle:{value:"Minimum Version 62"},Title:{value:"Add to Chrome"}}},{id:"2e277872-6005-460f-927f-178ee41c3a1e",url:"/Data/Banner-Container/Banner3",name:"Banner3",displayName:"Banner3",fields:{ComponentClass:{value:"flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8"},CtaButtonClass:{value:"block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"},Image:{value:{src:"https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-opera.svg?iar=0&hash=6AB5ECD402EABC22ED979CD1421238AD",alt:"dd"}},DivClass:{value:"w-full md:w-1/3"},CtaTitle:{value:"Add Install Extension"},SubTitle:{value:"Minimum Version 62"},Title:{value:"Add to Chrome"}}}]},params:{ComponentClass:"relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row",FieldNames:"Default",styles:" "}}};DefaultDownload.parameters=_objectSpread(_objectSpread({},DefaultDownload.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DefaultDownload$para=DefaultDownload.parameters)||void 0===_DefaultDownload$para?void 0:_DefaultDownload$para.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    fields: {\n      CtaBanners: [{\n        "id": "e21074e8-b76b-4b49-bfbe-714b27b3bc03",\n        "url": "/Data/Banner-Container/Banner1",\n        "name": "Banner1",\n        "displayName": "Banner1",\n        "fields": {\n          "ComponentClass": {\n            "value": "flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3"\n          },\n          "CtaButtonClass": {\n            "value": "block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"\n          },\n          "Image": {\n            "value": {\n              "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-chrome.svg?iar=0&hash=0D013447FEA100B87F6E82AFC0A6E80E",\n              "alt": "dd"\n            }\n          },\n          "DivClass": {\n            "value": ""\n          },\n          "CtaTitle": {\n            "value": "Add Install Extension"\n          },\n          "SubTitle": {\n            "value": "Minimum Version 62"\n          },\n          "Title": {\n            "value": "Add to Chrome"\n          }\n        }\n      }, {\n        "id": "fcb2ffba-650d-4d51-8751-9610f9588271",\n        "url": "/Data/Banner-Container/Banner2",\n        "name": "Banner2",\n        "displayName": "Banner2",\n        "fields": {\n          "ComponentClass": {\n            "value": "flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8"\n          },\n          "CtaButtonClass": {\n            "value": "block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"\n          },\n          "Image": {\n            "value": {\n              "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-firefox.svg?iar=0&hash=83380DD2B92F90D35BD766F83335D15E",\n              "alt": "ddd"\n            }\n          },\n          "DivClass": {\n            "value": "w-full md:w-1/3"\n          },\n          "CtaTitle": {\n            "value": "Add Install Extension"\n          },\n          "SubTitle": {\n            "value": "Minimum Version 62"\n          },\n          "Title": {\n            "value": "Add to Chrome"\n          }\n        }\n      }, {\n        "id": "2e277872-6005-460f-927f-178ee41c3a1e",\n        "url": "/Data/Banner-Container/Banner3",\n        "name": "Banner3",\n        "displayName": "Banner3",\n        "fields": {\n          "ComponentClass": {\n            "value": "flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8"\n          },\n          "CtaButtonClass": {\n            "value": "block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue"\n          },\n          "Image": {\n            "value": {\n              "src": "https://xmc-professionaf048-xmcloudmdarpro-devcollection.sitecorecloud.io/-/media/Project/Sitecore_Internal/sitecore-dev-collection/logo-opera.svg?iar=0&hash=6AB5ECD402EABC22ED979CD1421238AD",\n              "alt": "dd"\n            }\n          },\n          "DivClass": {\n            "value": "w-full md:w-1/3"\n          },\n          "CtaTitle": {\n            "value": "Add Install Extension"\n          },\n          "SubTitle": {\n            "value": "Minimum Version 62"\n          },\n          "Title": {\n            "value": "Add to Chrome"\n          }\n        }\n      }]\n    },\n    params: {\n      "ComponentClass": "relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row",\n      "FieldNames": "Default",\n      "styles": " "\n    }\n  }\n}'},null===(_DefaultDownload$para2=DefaultDownload.parameters)||void 0===_DefaultDownload$para2||null===(_DefaultDownload$para2=_DefaultDownload$para2.docs)||void 0===_DefaultDownload$para2?void 0:_DefaultDownload$para2.source)})})},"../my-jss-app/src/components/controls/atoms/AButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>AButton});var __jsx=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js").createElement;function AButton(props){return __jsx("a",{onClick:props.onClick,href:"#",className:"".concat(props.className)},"".concat(props.title))}AButton.displayName="AButton",AButton.__docgenInfo={description:"",methods:[],displayName:"AButton",props:{onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"()=> void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""}}};try{AButton.displayName="AButton",AButton.__docgenInfo={description:"",displayName:"AButton",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"() => void"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../my-jss-app/src/components/controls/atoms/AButton.tsx#AButton"]={docgenInfo:AButton.__docgenInfo,name:"AButton",path:"../my-jss-app/src/components/controls/atoms/AButton.tsx#AButton"})}catch(__react_docgen_typescript_loader_error){}},"../my-jss-app/src/components/controls/molecules/CtaBanner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>CtaBanner});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_atoms_AButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../my-jss-app/src/components/controls/atoms/AButton.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function CtaBanner(props){return __jsx("div",{className:props.componentClassName},__jsx("div",{className:"flex justify-center"},__jsx("img",{src:props.imgSrc,alt:""})),__jsx("h5",{className:"pt-6 text-xl font-bold"},props.title),__jsx("p",{className:"text-gray-400"},props.subTitle),__jsx("div",{className:"bg-dots bg-repeat-x px-6 pt-6 capitalize"},__jsx(_atoms_AButton__WEBPACK_IMPORTED_MODULE_1__.Z,{onClick:props.ctaCallBack,className:props.ctaButtonClassName,title:props.ctaTitle})))}CtaBanner.displayName="CtaBanner",CtaBanner.__docgenInfo={description:"",methods:[],displayName:"CtaBanner",props:{ctaCallBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},componentClassName:{required:!1,tsType:{name:"string"},description:""},imgSrc:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subTitle:{required:!1,tsType:{name:"string"},description:""},ctaTitle:{required:!1,tsType:{name:"string"},description:""},ctaButtonClassName:{required:!1,tsType:{name:"string"},description:""}}};try{CtaBanner.displayName="CtaBanner",CtaBanner.__docgenInfo={description:"",displayName:"CtaBanner",props:{ctaCallBack:{defaultValue:null,description:"",name:"ctaCallBack",required:!1,type:{name:"() => void"}},componentClassName:{defaultValue:null,description:"",name:"componentClassName",required:!1,type:{name:"string"}},imgSrc:{defaultValue:null,description:"",name:"imgSrc",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},subTitle:{defaultValue:null,description:"",name:"subTitle",required:!1,type:{name:"string"}},ctaTitle:{defaultValue:null,description:"",name:"ctaTitle",required:!1,type:{name:"string"}},ctaButtonClassName:{defaultValue:null,description:"",name:"ctaButtonClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../my-jss-app/src/components/controls/molecules/CtaBanner.tsx#CtaBanner"]={docgenInfo:CtaBanner.__docgenInfo,name:"CtaBanner",path:"../my-jss-app/src/components/controls/molecules/CtaBanner.tsx#CtaBanner"})}catch(__react_docgen_typescript_loader_error){}}}]);