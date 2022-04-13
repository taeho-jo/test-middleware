"use strict";
(() => {
var exports = {};
exports.id = 890;
exports.ids = [890];
exports.modules = {

/***/ 50548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./src/components/atoms/PopupBox/index.tsx
var PopupBox = __webpack_require__(37533);
// EXTERNAL MODULE: ./src/components/atoms/Icon/index.tsx + 13 modules
var Icon = __webpack_require__(40671);
// EXTERNAL MODULE: ./src/components/molecules/InputFormBox/index.tsx + 2 modules
var InputFormBox = __webpack_require__(46212);
// EXTERNAL MODULE: ./src/components/atoms/FlexBox/index.tsx
var FlexBox = __webpack_require__(88976);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.cjs.prod.js
var emotion_react_cjs_prod = __webpack_require__(11334);
;// CONCATENATED MODULE: ./src/components/organisms/AddInfoPopup/index.tsx
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }










const inputArr = [{
  label: 'nickname',
  placeholder: '별명을 적어주세요',
  errorMsg: '2글자 이상 작성해주세요',
  pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  type: 'text',
  line: true
}];

const AddInfoPopup = ({
  id
}) => {
  const router = (0,next_router.useRouter)();
  const handleMovePage = (0,react.useCallback)(path => {
    router.push(path);
  }, []);
  const handleSignUp = (0,react.useCallback)(data => {
    alert(data);
    handleMovePage('/pwInquiry/confirm');
  }, []);
  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(FlexBox/* default */.Z, {
    style: {
      marginTop: '112px'
    },
    justify: 'center',
    direction: 'column'
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(PopupBox/* default */.Z, {
    padding: '0',
    width: '392px',
    height: 'auto'
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: iconBoxStyle
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(Icon/* default */.Z, {
    name: 'NAVIGATION_CLOSE_LG'
  })), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(InputFormBox/* default */.Z, {
    handleSignUp: handleSignUp,
    inputArr: inputArr,
    btnText: '확인',
    padding: '64px 48px '
  })));
};

/* harmony default export */ const organisms_AddInfoPopup = (AddInfoPopup);
const iconBoxStyle =  true ? {
  name: "zmzf2s",
  styles: "position:absolute;top:20px;right:20px;cursor:pointer"
} : 0;
const centerTextStyle =  true ? {
  name: "xwv8rq",
  styles: "cursor:pointer;padding:16px 24px 24px 24px;text-align:center"
} : 0;
;// CONCATENATED MODULE: ./src/pages/addinfo/[id].tsx





const AddInfo = ({
  id
}) => {
  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(organisms_AddInfoPopup, {
    id: id
  });
};

/* harmony default export */ const _id_ = (AddInfo);
const getServerSideProps = async context => {
  const {
    query
  } = context;
  const {
    id
  } = query;
  return {
    props: {
      id
    }
  };
};

/***/ }),

/***/ 97877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.production","contents":"NEXT_PUBLIC_API=https://jsonplaceholder.typicode.com/users/1/todos\nNEXT_PUBLIC_TEST_API=https://fakestoreapi.com\n\nEMAIL_SERVICE_ID=service_at8fasb\nEMAIL_TEMPLATE_ID=template_8hheby9\nEMAIL_USER_ID=ReXcWmA6XR9BI1uLY\n\nBUCKET_NAME=diby-prod\nDISTRIBUTION_ID=E3CDK65OFH2LJ7\n#SUB_DOMAIN=prod\nDOMAIN=diby.io"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(4001)

      const appMod = __webpack_require__(44921)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(50548)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(89894),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,
        reactRoot: false,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/addinfo/[id]",
        buildId: "ke1gnoDHWflMm-7M80q1l",
        escapedBuildId: "ke1gnoDHWflMm\-7M80q1l",
        basePath: "",
        pageIsDynamic: true,
        encodedPreviewProps: {previewModeId:"e3900eb6948effb2c09899e9f69680da",previewModeSigningKey:"2283ac19896c74c5ab79037ca0c79e372f44a78c5d3117b827e655001d58d01d",previewModeEncryptionKey:"91e6e251fe321623afc551a5a7bb9563839a3b464478ef16adaecedfecbe16cf"}
      })
      
    

/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 85477:
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [308,380,536,985,868,212], () => (__webpack_exec__(97877)));
module.exports = __webpack_exports__;

})();