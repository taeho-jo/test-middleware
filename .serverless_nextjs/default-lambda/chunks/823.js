"use strict";
exports.id = 823;
exports.ids = [823];
exports.modules = {

/***/ 46823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Footer)
});

// EXTERNAL MODULE: ./node_modules/react/landing.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Grid/landing.js
var Grid = __webpack_require__(17373);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/landing.js
var styles = __webpack_require__(59006);
// EXTERNAL MODULE: ./diby-client-landing/components/Grid.tsx
var components_Grid = __webpack_require__(53532);
;// CONCATENATED MODULE: ./diby-client-landing/assets/images/diby_black.png
/* harmony default export */ const diby_black = ({"src":"/_next/static/media/diby_black.9ffdc7f3.png","height":72,"width":168,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEU7O0U7O0U7O0U7O0U7O0U7O0U7O0U7O0U7O0U7O0UrtoaCAAAACnRSTlM2r4eVwUltdlejZRyHpgAAAAlwSFlzAAAhOAAAITgBRZYxYAAAACFJREFUCJkFwYcBADAMwjADGc3/D1dC3riBvNKpTIZxHx8EMABUYtakbAAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./diby-client-landing/assets/images/diby_white.png
/* harmony default export */ const diby_white = ({"src":"/_next/static/media/diby_white.9b2efa3d.png","height":72,"width":168,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX///////////////////////////////////////////9/gMdvAAAAC3RSTlOxlTlwgsGmjEkrV2e8eQYAAAAJcEhZcwAAITgAACE4AUWWMWAAAAAiSURBVAiZBcGHAQAwCMMwhzD7/8GVIK3ZC/SKpgY5nNvxAQUvAGKqFDpDAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Stack/landing.js
var Stack = __webpack_require__(46591);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Button/landing.js
var Button = __webpack_require__(86096);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);
// EXTERNAL MODULE: ./diby-client-landing/Theme.tsx
var Theme = __webpack_require__(70778);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.cjs.prod.js
var emotion_react_cjs_prod = __webpack_require__(11334);
;// CONCATENATED MODULE: ./diby-client-landing/components/Footer.tsx












const FooterButton = (0,styles.styled)((Button_default()))(({
  theme
}) => ({
  padding: '0px',
  fontSize: '14px',
  fontWeight: 'bold',
  justifyContent: 'flex-start',
  textTransform: 'none'
}));

function Footer(props) {
  var _props$dark, _props$style;

  const darkMode = (_props$dark = props.dark) !== null && _props$dark !== void 0 ? _props$dark : false;
  const ImgLogo = darkMode ? diby_white : diby_black;
  const color = darkMode ? 'white' : '#3C3C46';
  const navigate = (0,router.useRouter)();

  const handleClick = path => {
    navigate.push(path);
  };

  const {
    0: isTablet,
    1: setIsTablet
  } = (0,react.useState)(window.innerWidth < Theme/* breakpoints.lg */.A.lg);
  const style = (_props$style = props.style) !== null && _props$style !== void 0 ? _props$style : {};

  const handleResize = () => {
    setIsTablet(window.innerWidth < Theme/* breakpoints.lg */.A.lg);
  };

  (0,react.useEffect)(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(react.Fragment, null, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      width: '100%',
      background: navigate.pathname === '/' ? 'none' : darkMode ? '#3C3C46' : '#F8F8F8',
      boxSizing: 'border-box'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(components_Grid/* GridContainer */.T, {
    container: true,
    style: Object.assign({}, {
      maxWidth: '1920px',
      margin: '0 auto',
      paddingTop: '88px',
      paddingBottom: '88px',
      background: darkMode ? '#3C3C46' : '#F8F8F8'
    }, style)
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */((Grid_default()), {
    item: true,
    xs: 12,
    md: 6,
    lg: 5
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("img", {
    src: ImgLogo.src,
    alt: "diby",
    style: {
      width: '56px',
      height: '24px',
      padding: '6px 0px'
    }
  }), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      fontSize: '14px',
      margin: '24px 0',
      lineHeight: '20px',
      color: color
    }
  }, "\uC0AC\uC6A9\uC790 \uD53C\uB4DC\uBC31\uC774 \uD544\uC694\uD55C", (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("br", null), "\uC77C \uC798\uD558\uB294 \uAE30\uD68D\uC790, \uB514\uC790\uC774\uB108, \uB9C8\uCF00\uD130, \uB9AC\uC11C\uCC98\uB97C \uC704\uD55C", (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("br", null), "\uC720\uC800\uB9AC\uC11C\uCE58 \uC194\uB8E8\uC158\uC785\uB2C8\uB2E4."), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      fontSize: '12px',
      color: color
    }
  }, "\u24B8 DBDLAB Corp."), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(FooterButton, {
    color: darkMode ? 'white' : 'primary',
    style: {
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }, "\uC774\uC6A9\uC57D\uAD00 \uBC0F \uAC1C\uC778\uC815\uBCF4\uBCF4\uD638"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      fontSize: '12px',
      color: '#CCCCCC'
    }
  }, "\uD574\uB2F9 \uC6F9\uC0AC\uC774\uD2B8\uB294", (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("br", null), "CHROME\uC5D0 \uCD5C\uC801\uD654\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4.")), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */((Grid_default()), {
    item: true,
    xs: 6,
    md: 3,
    lg: 2
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(Stack["default"], {
    direction: "column",
    spacing: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    style: {
      width: 'fix-content'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#999999'
    }
  }, "\uD14C\uC2A4\uD2B8 \uC11C\uBE44\uC2A4"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(FooterButton, {
    color: darkMode ? 'white' : 'primary',
    onClick: () => {
      handleClick('/usecases/ui');
    }
  }, "UI \uC9C4\uB2E8 \uD14C\uC2A4\uD2B8"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(FooterButton, {
    color: darkMode ? 'white' : 'primary',
    onClick: () => {
      handleClick('/usecases/ux');
    }
  }, "UX \uD3EC\uC9C0\uC158 \uD14C\uC2A4\uD2B8"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(FooterButton, {
    color: darkMode ? 'white' : 'primary',
    onClick: () => {
      handleClick('/usecases/scenario');
    }
  }, "\uC2DC\uB098\uB9AC\uC624 \uD14C\uC2A4\uD2B8"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(FooterButton, {
    color: darkMode ? 'white' : 'primary',
    onClick: () => {
      handleClick('/usecases/customer');
    }
  }, "\uD37C\uC18C\uB098 \uD14C\uC2A4\uD2B8"))), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */((Grid_default()), {
    item: true,
    xs: 6,
    md: 3,
    lg: 2
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(Stack["default"], {
    direction: "column",
    spacing: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    style: {
      width: 'fix-content'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#999999'
    }
  }, "\uC81C\uD488"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(FooterButton, {
    color: darkMode ? 'white' : 'primary',
    onClick: () => {
      handleClick('/feature');
    }
  }, "\uC194\uB8E8\uC158 \uC18C\uAC1C"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(FooterButton, {
    color: darkMode ? 'white' : 'primary',
    onClick: () => {
      handleClick('/pricing');
    }
  }, "\uAC00\uACA9\uC548\uB0B4"), isTablet && (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(Stack["default"], {
    direction: "column",
    spacing: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    style: {
      width: 'fix-content'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#999999',
      paddingTop: '32px'
    }
  }, "\uBB38\uC758"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(FooterButton, {
    color: darkMode ? 'white' : 'primary',
    onClick: () => {
      handleClick('/tri');
    }
  }, "\uC124\uACC4 \uC2E0\uCCAD\uD558\uAE30")))), !isTablet && (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */((Grid_default()), {
    item: true,
    xs: 0,
    md: 0,
    lg: 2
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(Stack["default"], {
    direction: "column",
    spacing: 16,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    style: {
      width: 'fix-content'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      color: '#999999'
    }
  }, "\uBB38\uC758"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(FooterButton, {
    color: darkMode ? 'white' : 'primary',
    onClick: () => {
      handleClick('/tri');
    }
  }, "\uC124\uACC4 \uC2E0\uCCAD\uD558\uAE30"))))));
}

/* harmony default export */ const components_Footer = (Footer);

/***/ })

};
;