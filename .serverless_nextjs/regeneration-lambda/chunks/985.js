"use strict";
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 70778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ theme),
/* harmony export */   "A": () => (/* binding */ breakpoints)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59006);


const breakpoints = {
  xs: 0,
  sm: 0,
  md: 768,
  lg: 1280,
  xl: 1920
};
const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
  spacing: 1,
  palette: {
    primary: {
      main: '#3C3C46' // primary_darkgrey

    },
    white: {
      main: '#FFFFFF' // white

    },
    blue: {
      main: '#2878F0' // primary_blue

    },
    green: {
      main: '#A8FF69' // primary_green

    },
    cyan: {
      main: '#24E1D5' // primary_cyan

    }
  },
  breakpoints: {
    values: breakpoints
  },
  typography: {
    fontSize: 16,
    fontFamily: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', "'Helvetica Neue'", "'Segoe UI'", "'Apple SD Gothic Neo'", "'Noto Sans KR'", "'Malgun Gothic'", 'sans-serif'].join(',')
  }
});


/***/ }),

/***/ 17250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_AppBar)
});

// EXTERNAL MODULE: ./node_modules/react/landing.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/landing.js
var node = __webpack_require__(7772);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/landing.js
var styles = __webpack_require__(59006);
// EXTERNAL MODULE: ./diby-client-landing/components/Grid.tsx
var Grid = __webpack_require__(53532);
// EXTERNAL MODULE: ./diby-client-landing/Theme.tsx
var Theme = __webpack_require__(70778);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Menu.js
var Menu = __webpack_require__(326);
;// CONCATENATED MODULE: ./diby-client-landing/assets/images/diby_white1.png
/* harmony default export */ const diby_white1 = ({"src":"/_next/static/media/diby_white1.5577ee1e.png","height":72,"width":168,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEX///////////////////////////////////////8V2MxSAAAACnRSTlM8r4eVwVJtdyuj50btMQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACFJREFUCJkFwYEBADAIwrACOvX/h5cgT8xCunQqk+G5jw8EPgBVitrxXgAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./diby-client-landing/assets/images/diby_black1.png
/* harmony default export */ const diby_black1 = ({"src":"/_next/static/media/diby_black1.f6581a1c.png","height":72,"width":168,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEU7O0U7O0U7O0U7O0U7O0U7O0U7O0U7O0U7O0U7O0U7O0VAEW/1AAAAC3RSTlOvNpXBgkmMbaN3V2S1QLsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAhSURBVAiZBcGBAQAgCMOwbjJA/z/YBOq6I+F3WGg8mQr6BM4AWS1fQJsAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./diby-client-landing/assets/images/icon_uitest1.png
/* harmony default export */ const icon_uitest1 = ({"src":"/_next/static/media/icon_uitest1.3846ac4c.png","height":40,"width":40,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEX39Bmf7HckcfWW7XpsRe6Qnqh6/pqn/2ik+2tY5axI6rWGbseQypMAk/9ey7Q3tdul/mqm/mmBWdUqee4pee6r/2J6PelzS+d4MPF5Ne1oXeUtydjbcGlCAAAAFXRSTlMBQkPk+P4T/v74tf7+JP7+b/fz2bBFOuuoAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQElEQVQImQXBBwKAIAwAsWMW3KsF9P//NMFai2sG2v7VOgH2LqpyQNy0FDkzPWkRUUefVaQEsJFEw+0xG5fDPz9wUAMQLJJD0QAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./diby-client-landing/assets/images/icon_uxposition1.png
/* harmony default export */ const icon_uxposition1 = ({"src":"/_next/static/media/icon_uxposition1.29af69d0.png","height":40,"width":40,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEWo/2cf2tZzL+jp6fyh9XIzgupIjfIg4dUoee99QOm5lfVzQOCsi+me6W4r2tZS6t4t3tYn0teHXuqKzfa3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVQImT3IORLAIAwDQBlsLHHk+v9jM6RIt7OQ9ByZCRXVc6P0rmtjzDluM4Ov5cFGAHC2Gh/+CZIvRjIBqbwC+G0AAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./diby-client-landing/assets/images/icon_scenario1.png
/* harmony default export */ const icon_scenario1 = ({"src":"/_next/static/media/icon_scenario1.0326757b.png","height":40,"width":40,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEVMaXF1JPh3LPIh4dQodvAh4dUlut8h4dUjztqLdsAlquQh4tUb7dMpeO9+Ttx5Ne0odvB3LfJFl+FIo9goePCVuJh6mE6QAAAAFHRSTlMAOYLH7+8c/iP7DYTm0uy4u7nv7wMibmIAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA+SURBVAiZHcpZEoAgDATRARImcUMx3v+qav5eVTdIsgGAqmpi6WZWrwKs3G53T0x/jky9jgIRkfOfIyL2Dy85pAHQ21hG0gAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./diby-client-landing/assets/images/icon_customer1.png
/* harmony default export */ const icon_customer1 = ({"src":"/_next/static/media/icon_customer1.72f8c19a.png","height":40,"width":40,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEWm/2l/15Kl/2koo+Mi4dSCXNOm+2sX5ttMaXGp/2Yh5tO4/1wt5Mt4Me//+wAbX////gAi4NUi4dRt8pdr8Zki4dSt/2Ob7Xgb39okvN5b4fq+AAAAFnRSTlP9salw9e2aKwDp8UldvAa7Arm5x7+46GFQ4gAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUCJkFwQcCgCAMALFj2RZwa8H/f9SEtSyxSX4pA/yZmQXAuhABt0Npjo+gitxmYU9Cnn3T9FWuLKpSzx9QZwJb++YJvgAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.cjs.prod.js
var emotion_react_cjs_prod = __webpack_require__(11334);
;// CONCATENATED MODULE: ./diby-client-landing/components/AppBar.tsx



 // Components




 // Images










const AppBarButton = (0,styles.styled)(node.Button)({
  fontWeight: '700',
  textTransform: 'none'
});
const AppBarIconButton = (0,styles.styled)(node.IconButton)({
  width: '48px',
  borderRadius: '45px',
  fontWeight: '700',
  textTransform: 'none'
});
const DesignButton = (0,styles.styled)(node.Button)({
  // width: '130px',
  borderRadius: '45px',
  fontWeight: '700',
  textTransform: 'none',
  boxSizing: 'border-box',
  padding: '4.5px 36px'
});

function AppBar({
  dark = false
}) {
  const navigate = (0,router.useRouter)();
  const darkMode = dark !== null && dark !== void 0 ? dark : false;
  const {
    0: isMobile,
    1: setIsMobile
  } = (0,react.useState)(window.innerWidth < Theme/* breakpoints.md */.A.md);
  const {
    0: useCasesMenuAnchor,
    1: setUseCaseMenuAnchor
  } = (0,react.useState)(null);
  const {
    0: mobileMenuAnchor,
    1: setMobileMenuAnchor
  } = (0,react.useState)(null);
  const isUseCaseOpen = Boolean(useCasesMenuAnchor);
  const isMobileMenuOpen = Boolean(mobileMenuAnchor);

  const handleResize = () => {
    setIsMobile(window.innerWidth < Theme/* breakpoints.md */.A.md);
  };

  const handleClickUseCases = event => {
    setUseCaseMenuAnchor(event.currentTarget);
  };

  const handleCloseUseCasesMenu = () => {
    setUseCaseMenuAnchor(null);
  };

  const handleClickMobileMenu = event => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleCloseMobileMenu = () => {
    setMobileMenuAnchor(null);
  };

  const handleClick = path => {
    navigate.push(path);
  };

  (0,react.useEffect)(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(Grid/* GridContainer */.T, {
    container: true,
    style: {
      margin: '0 auto',
      height: '68px',
      width: '100%',
      maxWidth: '1920px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Grid, {
    item: true,
    xs: 12,
    md: 12,
    lg: 12,
    style: {
      paddingTop: '16px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Stack, {
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(next_link["default"], {
    href: "/"
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      cursor: 'pointer',
      padding: `${isMobile ? '10px' : '6px'} 0 0 0`
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(next_image["default"], {
    src: darkMode ? diby_white1 : diby_black1,
    alt: 'Logo',
    width: 56,
    height: 30,
    priority: true,
    loading: "eager",
    quality: 100,
    placeholder: 'blur',
    blurDataURL: 'red'
  }))), !isMobile && (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Stack, {
    className: "hide-on-md",
    direction: "row",
    justifyContent: "center",
    alignItems: "center",
    spacing: 16,
    style: {
      marginRight: '30px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(AppBarButton, {
    color: darkMode ? 'white' : 'primary',
    variant: "text",
    onClick: handleClickUseCases
  }, "\uD14C\uC2A4\uD2B8 \uC885\uB958"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(AppBarButton, {
    color: darkMode ? 'white' : 'primary',
    variant: "text",
    onClick: () => {
      handleClick('/feature');
    }
  }, "\uC194\uB8E8\uC158\uC18C\uAC1C"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(AppBarButton, {
    color: darkMode ? 'white' : 'primary',
    variant: "text",
    onClick: () => {
      handleClick('/pricing');
    }
  }, "\uAC00\uACA9\uC548\uB0B4")), !isMobile && (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(DesignButton, {
    color: darkMode ? 'green' : 'white',
    style: {
      backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#24E1D5'
    },
    onClick: () => {
      handleClick('/tri');
    }
  }, "\uC124\uACC4\uD558\uAE30"), isMobile && (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", null, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(AppBarIconButton, {
    color: "white",
    "aria-label": "menu",
    size: "small",
    onClick: handleClickMobileMenu,
    style: {
      backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : '#24E1D5'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(Menu/* default */.Z, {
    fontSize: "inherit"
  }))))), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Popover, {
    id: "main-menu",
    anchorEl: mobileMenuAnchor,
    open: isMobileMenuOpen,
    onClose: handleCloseMobileMenu,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: -10,
      horizontal: 'right'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      padding: '32px 24px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      margin: '0 0 10px 0',
      textAlign: 'left',
      fontSize: '16px',
      fontWeight: 'bold'
    }
  }, "\uD14C\uC2A4\uD2B8 \uC885\uB958"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      width: '280px',
      height: '60px',
      display: 'flex'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Button, {
    style: {
      flex: 1,
      padding: '0',
      margin: '0 auto 0 0',
      width: '110px',
      justifyContent: 'flex-start'
    },
    onClick: () => {
      handleClick('/usecases/ui');
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      verticalAlign: 'center'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      width: '24px',
      height: '24px',
      margin: 'auto 0'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(next_image["default"], {
    src: icon_uitest1,
    alt: 'diby1',
    width: 24,
    height: 24,
    priority: true,
    loading: "eager",
    quality: 100
  })), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      margin: '0 0 0 10px',
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }, "UI \uC9C4\uB2E8 \uD14C\uC2A4\uD2B8"))), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Button, {
    style: {
      flex: 1,
      padding: '0',
      margin: '0 auto 0 0',
      width: '110px',
      justifyContent: 'flex-start'
    },
    onClick: () => {
      handleClick('/usecases/ux');
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      verticalAlign: 'center'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      width: '24px',
      height: '24px',
      margin: 'auto 0'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(next_image["default"], {
    src: icon_uxposition1,
    alt: 'diby2',
    width: 24,
    height: 24,
    priority: true,
    loading: "eager",
    quality: 100
  })), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      margin: '0 0 0 10px',
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }, "UX \uD3EC\uC9C0\uC158 \uD14C\uC2A4\uD2B8")))), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      width: '280px',
      height: '60px',
      display: 'flex'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Button, {
    style: {
      flex: 1,
      padding: '0',
      margin: '0 auto 0 0',
      width: '110px',
      justifyContent: 'flex-start'
    },
    onClick: () => {
      handleClick('/usecases/scenario');
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      verticalAlign: 'center'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      width: '24px',
      height: '24px',
      margin: 'auto 0'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(next_image["default"], {
    src: icon_scenario1,
    alt: 'diby3',
    width: 24,
    height: 24,
    priority: true,
    loading: "eager",
    quality: 100
  })), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      margin: '0 0 0 10px',
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }, "\uC2DC\uB098\uB9AC\uC624 \uD14C\uC2A4\uD2B8"))), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Button, {
    style: {
      flex: 1,
      padding: '0',
      margin: '0 auto 0 0',
      width: '110px',
      justifyContent: 'flex-start'
    },
    onClick: () => {
      handleClick('/usecases/customer');
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      verticalAlign: 'center'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      width: '24px',
      height: '24px',
      margin: 'auto 0'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(next_image["default"], {
    src: icon_customer1,
    alt: 'diby4',
    width: 24,
    height: 24,
    priority: true,
    loading: "eager",
    quality: 100
  })), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      margin: '0 0 0 10px',
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }, "\uD37C\uC18C\uB098 \uD14C\uC2A4\uD2B8")))), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      margin: '0 -24px',
      borderTop: '1px dashed #ccc',
      opacity: '0.3'
    }
  }), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Button, {
    style: {
      margin: '24px auto 24px -8px',
      width: '100%'
    },
    onClick: () => {
      handleClick('/feature');
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      width: '100%',
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'none',
      textAlign: 'left',
      margin: '0'
    }
  }, "\uC194\uB8E8\uC158\uC18C\uAC1C")), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      margin: '0 -24px',
      borderTop: '1px dashed #ccc',
      opacity: '0.3'
    }
  }), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Button, {
    style: {
      margin: '24px auto 24px -8px',
      width: '100%'
    },
    onClick: () => {
      handleClick('/pricing');
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      width: '100%',
      fontSize: '16px',
      fontWeight: 'bold',
      textTransform: 'none',
      textAlign: 'left',
      margin: '0'
    }
  }, "\uAC00\uACA9\uC548\uB0B4")), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      margin: '0 -24px',
      borderTop: '1px dashed #ccc',
      opacity: '0.3'
    }
  }), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '18px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(DesignButton, {
    color: 'white',
    style: {
      backgroundColor: '#24E1D5'
    },
    onClick: () => {
      handleClick('/tri');
    }
  }, "\uC124\uACC4\uD558\uAE30")))), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Popover, {
    id: "use-case-menu",
    anchorEl: useCasesMenuAnchor,
    open: isUseCaseOpen,
    onClose: handleCloseUseCasesMenu,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: -100
    },
    transformOrigin: {
      vertical: -10,
      horizontal: 'left'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      padding: '16px 16px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      width: '650px',
      height: '100px',
      display: 'flex'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Button, {
    style: {
      padding: '0',
      margin: '0 auto 0 0',
      flex: 1,
      width: '170px',
      justifyContent: 'flex-start'
    },
    onClick: () => {
      handleClick('/usecases/ui');
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      verticalAlign: 'center'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      width: '40px',
      height: '40px',
      margin: 'auto 0 auto 40px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(next_image["default"], {
    src: icon_uitest1,
    alt: 'icon1',
    width: 40,
    height: 40,
    priority: true,
    loading: "eager",
    quality: 100
  })), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      paddingLeft: '16px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      margin: '0',
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }, "UI \uC9C4\uB2E8 \uD14C\uC2A4\uD2B8"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      margin: '0',
      textAlign: 'left',
      fontSize: '14px'
    }
  }, "\uC0AC\uC6A9\uC131 \uBB38\uC81C\uC810 \uD30C\uC545")))), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Button, {
    style: {
      padding: '0',
      margin: '0 auto 0 0',
      flex: 1,
      width: '170px',
      justifyContent: 'flex-start'
    },
    onClick: () => {
      handleClick('/usecases/ux');
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      verticalAlign: 'center'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      width: '40px',
      height: '40px',
      margin: 'auto 0 auto 40px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(next_image["default"], {
    src: icon_uxposition1,
    alt: 'icon2',
    width: 40,
    height: 40,
    priority: true,
    loading: "eager",
    quality: 100
  })), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      paddingLeft: '16px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      margin: '0',
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }, "UX \uD3EC\uC9C0\uC158 \uD14C\uC2A4\uD2B8"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      margin: '0',
      textAlign: 'left',
      fontSize: '14px'
    }
  }, "\uC2E4\uC0AC\uC6A9\uC790 \uB300\uC0C1 UX \uD3C9\uAC00 \uBC0F \uC804\uB7B5\uC218\uB9BD"))))), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      width: '650px',
      height: '100px',
      display: 'flex'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Button, {
    style: {
      padding: '0',
      margin: '0 auto 0 0',
      flex: 1,
      width: '170px',
      justifyContent: 'flex-start'
    },
    onClick: () => {
      handleClick('/usecases/scenario');
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      verticalAlign: 'center'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      width: '40px',
      height: '40px',
      margin: 'auto 0 auto 40px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(next_image["default"], {
    src: icon_scenario1,
    alt: 'icon3',
    width: 40,
    height: 40,
    priority: true,
    loading: "eager",
    quality: 100
  })), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      paddingLeft: '16px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      margin: '0',
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }, "\uC2DC\uB098\uB9AC\uC624 \uD14C\uC2A4\uD2B8"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      margin: '0',
      textAlign: 'left',
      fontSize: '14px'
    }
  }, "\uAC00\uC124 \uAC80\uC815 \uBC0F \uC758\uC0AC\uACB0\uC815")))), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(node.Button, {
    style: {
      padding: '0',
      margin: '0 auto 0 0',
      flex: 1,
      width: '170px',
      justifyContent: 'flex-start'
    },
    onClick: () => {
      handleClick('/usecases/customer');
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      verticalAlign: 'center'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      width: '40px',
      height: '40px',
      margin: 'auto 0 auto 40px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(next_image["default"], {
    src: icon_customer1,
    alt: 'icon4',
    width: 40,
    height: 40,
    priority: true,
    loading: "eager",
    quality: 100
  })), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      paddingLeft: '16px'
    }
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      margin: '0',
      textAlign: 'left',
      fontSize: '14px',
      fontWeight: 'bold'
    }
  }, "\uD37C\uC18C\uB098 \uD14C\uC2A4\uD2B8"), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("p", {
    style: {
      margin: '0',
      textAlign: 'left',
      fontSize: '14px'
    }
  }, "\uD575\uC2EC \uACE0\uAC1D \uC815\uC758"))))))));
}

/* harmony default export */ const components_AppBar = (AppBar);

/***/ }),

/***/ 53532:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ GridContainer)
/* harmony export */ });
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17373);
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59006);


const GridContainer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.styled)((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_1___default()))(({
  theme
}) => ({
  [theme.breakpoints.down("md")]: {
    padding: "0 32px"
  },
  [theme.breakpoints.up("md")]: {
    padding: "0 40px"
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 120px"
  },
  [theme.breakpoints.up("xl")]: {
    padding: "0 396px"
  }
}));


/***/ }),

/***/ 44921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/landing.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(47389);
// EXTERNAL MODULE: ./node_modules/next-redux-wrapper/lib/landing.js
var lib = __webpack_require__(30876);
// EXTERNAL MODULE: ./node_modules/redux-logger/dist/redux-logger.js
var redux_logger = __webpack_require__(94500);
var redux_logger_default = /*#__PURE__*/__webpack_require__.n(redux_logger);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/landing.js
var redux_persist_lib = __webpack_require__(64280);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/storage/landing.js
var storage = __webpack_require__(76734);
;// CONCATENATED MODULE: ./src/store/reducers/counterReducer.ts

const initialState = {
  value: 0
};
const counterSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    }
  }
});
const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount
} = counterSlice.actions;
/* harmony default export */ const counterReducer = (counterSlice.reducer);
// EXTERNAL MODULE: ./src/store/reducers/authReducer.ts
var authReducer = __webpack_require__(13252);
// EXTERNAL MODULE: ./src/store/reducers/toastReducer.ts
var toastReducer = __webpack_require__(12061);
;// CONCATENATED MODULE: ./src/store/reducers/landing.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


 // Reducers





const reducer = (state, action) => {
  if (action.type === lib.HYDRATE) {
    return _objectSpread(_objectSpread({}, state), action.payload);
  }

  return (0,redux_toolkit_cjs_production_min.combineReducers)({
    counter: counterReducer,
    auth: authReducer/* default */.ZP,
    toast: toastReducer/* default */.ZP
  })(state, action);
};

/* harmony default export */ const reducers = (reducer);
;// CONCATENATED MODULE: ./src/store/landing.ts
function store_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function store_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { store_ownKeys(Object(source), true).forEach(function (key) { store_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { store_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const persistConfig = {
  key: 'root',
  storage: storage/* default */.Z,
  whitelist: ['auth'],
  blacklist: ['counter']
};
const persistedReducer = (0,redux_persist_lib.persistReducer)(persistConfig, reducers);

const makeStore = () => {
  const store = (0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [redux_persist_lib.FLUSH, redux_persist_lib.REHYDRATE, redux_persist_lib.PAUSE, redux_persist_lib.PERSIST, redux_persist_lib.PURGE, redux_persist_lib.REGISTER]
      }
    }).concat((redux_logger_default()))
  });
  const persistor = (0,redux_persist_lib.persistStore)(store);
  return store_objectSpread(store_objectSpread({}, persistor), store);
};

const wrapper = (0,lib.createWrapper)(makeStore, {});
// EXTERNAL MODULE: ./node_modules/redux/lib/redux.js
var redux = __webpack_require__(35281);
// EXTERNAL MODULE: ./node_modules/redux-persist/lib/integration/react.js
var integration_react = __webpack_require__(79144);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./node_modules/react-redux/lib/landing.js
var react_redux_lib = __webpack_require__(37424);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.cjs.prod.js
var emotion_react_cjs_prod = __webpack_require__(11334);
// EXTERNAL MODULE: ./src/styles/Common.styles.ts
var Common_styles = __webpack_require__(7526);
// EXTERNAL MODULE: ./src/styles/FontStyles.ts
var FontStyles = __webpack_require__(11936);
;// CONCATENATED MODULE: ./src/components/atoms/Toast/landing.tsx









const Toast = ({
  position,
  id,
  message,
  duration,
  status
}) => {
  const dispatch = (0,react_redux_lib.useDispatch)();
  const arr = (0,react_redux_lib.useSelector)(state => state.toast.toastArr);
  (0,react.useEffect)(() => {
    const timeout = setInterval(() => {
      dispatch((0,toastReducer/* removeToast */.RS)(arr[0].id));
    }, duration);
    return () => {
      clearInterval(timeout);
    };
  }, [id]);
  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: alertBox(position, status),
    onClick: () => dispatch((0,toastReducer/* removeToast */.RS)(id))
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("span", {
    css: [FontStyles/* body3_bold */.Sw, alertTextStyle,  true ? "" : 0,  true ? "" : 0]
  }, message));
};

/* harmony default export */ const atoms_Toast = (Toast);
const vertical = emotion_react_cjs_prod.keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;
const horizontal = emotion_react_cjs_prod.keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const alertBox = (position, status) => /*#__PURE__*/(0,emotion_react_cjs_prod.css)("background-color:", status === 'success' ? Common_styles/* colors.blue._500 */.O.blue._500 : status === 'warning' ? Common_styles/* colors.red */.O.red : Common_styles/* colors.cyan._500 */.O.cyan._500, ";border-radius:8px;padding:15px;margin-top:10px;display:flex;cursor:pointer;animation:", position.includes('left') || position.includes('right') ? horizontal : vertical, " 0.7s;" + ( true ? "" : 0),  true ? "" : 0);

const alertTextStyle = /*#__PURE__*/(0,emotion_react_cjs_prod.css)("color:", Common_styles/* colors.white */.O.white, ";text-align:center;display:flex;justify-content:center;align-items:center;" + ( true ? "" : 0),  true ? "" : 0);
// EXTERNAL MODULE: ./node_modules/react-dom/landing.js
var react_dom = __webpack_require__(73935);
;// CONCATENATED MODULE: ./src/components/atoms/Portal/landing.tsx



const Portal = ({
  children,
  selector
}) => {
  const {
    0: isBrowser,
    1: setIsBrowser
  } = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    return /*#__PURE__*/react_dom.createPortal(children, document.getElementById(selector));
  } else {
    return null;
  }
};

/* harmony default export */ const atoms_Portal = (Portal);
;// CONCATENATED MODULE: ./src/components/organisms/AuthToast/landing.tsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }









const AuthToast = ({
  position
}) => {
  const arr = (0,react_redux_lib.useSelector)(state => state.toast.toastArr); // console.log(arr, 'ARRRRRRR');

  const toastPosition = position => {
    let located;

    switch (position) {
      case 'top-left':
        located = {
          top: '24px',
          left: '50px'
        };
        break;

      case 'top-center':
        located = {
          top: '24px',
          left: '50%',
          transform: 'translateX(-50%)'
        };
        break;

      case 'top-right':
        located = {
          top: '24px',
          right: '50px'
        };
        break;

      case 'bottom-left':
        located = {
          bottom: '24px',
          left: '50px'
        };
        break;

      case 'bottom-center':
        located = {
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)'
        };
        break;

      case 'bottom-right':
        located = {
          bottom: '24px',
          right: '50px'
        };
        break;

      default:
        located = {};
    }

    return located;
  };

  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(atoms_Portal, {
    selector: 'toast-root'
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: [positionStyle, toastPosition(position),  true ? "" : 0,  true ? "" : 0]
  }, arr === null || arr === void 0 ? void 0 : arr.map((el, index) => {
    if (el.isShow) {
      return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(atoms_Toast, _extends({
        position: position,
        key: index
      }, el));
    } else {
      return null;
    }
  })));
};

/* harmony default export */ const organisms_AuthToast = (AuthToast);
const positionStyle =  true ? {
  name: "13qw4bt",
  styles: "position:fixed;z-landing:100"
} : 0;
// EXTERNAL MODULE: ./diby-client-landing/components/AppBar.tsx + 6 modules
var AppBar = __webpack_require__(17250);
// EXTERNAL MODULE: ./node_modules/aos/dist/aos.js
var aos = __webpack_require__(2711);
var aos_default = /*#__PURE__*/__webpack_require__.n(aos);
;// CONCATENATED MODULE: ./diby-client-landing/lib/stripe-gradient.js
/* eslint-disable no-unused-expressions */
function setGradient(canvas) {
  var gradient = new Gradient();
  gradient.initGradient(canvas);
}
/*
 *   Stripe WebGl Gradient Animation
 *   All Credits to Stripe.com
 *   ScrollObserver functionality to disable animation when not scrolled into view has been disabled and
 *   commented out for now.
 *   https://kevinhufnagl.com
 */
//Converting colors to proper format

function normalizeColor(hexCode) {
  return [(hexCode >> 16 & 255) / 255, (hexCode >> 8 & 255) / 255, (255 & hexCode) / 255];
}

['SCREEN', 'LINEAR_LIGHT'].reduce((hexCode, t, n) => Object.assign(hexCode, {
  [t]: n
}), {}); //Essential functionality of WebGl
//t = width
//n = height

class MiniGl {
  constructor(canvas, width, height, debug = false) {
    const _miniGl = this,
          debug_output = -1 !== document.location.search.toLowerCase().indexOf('debug=webgl');

    _miniGl.canvas = canvas, _miniGl.gl = _miniGl.canvas.getContext('webgl', {
      antialias: true
    }), _miniGl.meshes = [];
    const context = _miniGl.gl;
    width && height && this.setSize(width, height), _miniGl.lastDebugMsg, _miniGl.debug = debug && debug_output ? function (e) {
      const t = new Date();
      t - _miniGl.lastDebugMsg > 1e3 && console.log('---'), console.log(t.toLocaleTimeString() + Array(Math.max(0, 32 - e.length)).join(' ') + e + ': ', ...Array.from(arguments).slice(1)), _miniGl.lastDebugMsg = t;
    } : () => {}, Object.defineProperties(_miniGl, {
      Material: {
        enumerable: false,
        value: class {
          constructor(vertexShaders, fragments, uniforms = {}) {
            const material = this;

            function getShaderByType(type, source) {
              const shader = context.createShader(type);
              return context.shaderSource(shader, source), context.compileShader(shader), context.getShaderParameter(shader, context.COMPILE_STATUS) || console.error(context.getShaderInfoLog(shader)), _miniGl.debug('Material.compileShaderSource', {
                source: source
              }), shader;
            }

            function getUniformVariableDeclarations(uniforms, type) {
              return Object.entries(uniforms).map(([uniform, value]) => value.getDeclaration(uniform, type)).join('\n');
            }

            material.uniforms = uniforms, material.uniformInstances = [];
            const prefix = '\n              precision highp float;\n            ';
            material.vertexSource = `\n              ${prefix}\n              attribute vec4 position;\n              attribute vec2 uv;\n              attribute vec2 uvNorm;\n              ${getUniformVariableDeclarations(_miniGl.commonUniforms, 'vertex')}\n              ${getUniformVariableDeclarations(uniforms, 'vertex')}\n              ${vertexShaders}\n            `, material.Source = `\n              ${prefix}\n              ${getUniformVariableDeclarations(_miniGl.commonUniforms, 'fragment')}\n              ${getUniformVariableDeclarations(uniforms, 'fragment')}\n              ${fragments}\n            `, material.vertexShader = getShaderByType(context.VERTEX_SHADER, material.vertexSource), material.fragmentShader = getShaderByType(context.FRAGMENT_SHADER, material.Source), material.program = context.createProgram(), context.attachShader(material.program, material.vertexShader), context.attachShader(material.program, material.fragmentShader), context.linkProgram(material.program), context.getProgramParameter(material.program, context.LINK_STATUS) || console.error(context.getProgramInfoLog(material.program)), context.useProgram(material.program), material.attachUniforms(void 0, _miniGl.commonUniforms), material.attachUniforms(void 0, material.uniforms);
          } //t = uniform


          attachUniforms(name, uniforms) {
            //n  = material
            const material = this;
            void 0 === name ? Object.entries(uniforms).forEach(([name, uniform]) => {
              material.attachUniforms(name, uniform);
            }) : 'array' == uniforms.type ? uniforms.value.forEach((uniform, i) => material.attachUniforms(`${name}[${i}]`, uniform)) : 'struct' == uniforms.type ? Object.entries(uniforms.value).forEach(([uniform, i]) => material.attachUniforms(`${name}.${uniform}`, i)) : (_miniGl.debug('Material.attachUniforms', {
              name: name,
              uniform: uniforms
            }), material.uniformInstances.push({
              uniform: uniforms,
              location: context.getUniformLocation(material.program, name)
            }));
          }

        }
      },
      Uniform: {
        enumerable: !1,
        value: class {
          constructor(e) {
            this.type = 'float', Object.assign(this, e);
            this.typeFn = {
              float: '1f',
              int: '1i',
              vec2: '2fv',
              vec3: '3fv',
              vec4: '4fv',
              mat4: 'Matrix4fv'
            }[this.type] || '1f', this.update();
          }

          update(value) {
            void 0 !== this.value && context[`uniform${this.typeFn}`](value, 0 === this.typeFn.indexOf('Matrix') ? this.transpose : this.value, 0 === this.typeFn.indexOf('Matrix') ? this.value : null);
          } //e - name
          //t - type
          //n - length


          getDeclaration(name, type, length) {
            const uniform = this;

            if (uniform.excludeFrom !== type) {
              if ('array' === uniform.type) return uniform.value[0].getDeclaration(name, type, uniform.value.length) + `\nconst int ${name}_length = ${uniform.value.length};`;

              if ('struct' === uniform.type) {
                let name_no_prefix = name.replace('u_', '');
                return name_no_prefix = name_no_prefix.charAt(0).toUpperCase() + name_no_prefix.slice(1), `uniform struct ${name_no_prefix} 
                                  {\n` + Object.entries(uniform.value).map(([name, uniform]) => uniform.getDeclaration(name, type).replace(/^uniform/, '')).join('') + `\n} ${name}${length > 0 ? `[${length}]` : ''};`;
              }

              return `uniform ${uniform.type} ${name}${length > 0 ? `[${length}]` : ''};`;
            }
          }

        }
      },
      PlaneGeometry: {
        enumerable: !1,
        value: class {
          constructor(width, height, n, i, orientation) {
            context.createBuffer(), this.attributes = {
              position: new _miniGl.Attribute({
                target: context.ARRAY_BUFFER,
                size: 3
              }),
              uv: new _miniGl.Attribute({
                target: context.ARRAY_BUFFER,
                size: 2
              }),
              uvNorm: new _miniGl.Attribute({
                target: context.ARRAY_BUFFER,
                size: 2
              }),
              index: new _miniGl.Attribute({
                target: context.ELEMENT_ARRAY_BUFFER,
                size: 3,
                type: context.UNSIGNED_SHORT
              })
            }, this.setTopology(n, i), this.setSize(width, height, orientation);
          }

          setTopology(e = 1, t = 1) {
            const n = this;
            n.xSegCount = e, n.ySegCount = t, n.vertexCount = (n.xSegCount + 1) * (n.ySegCount + 1), n.quadCount = n.xSegCount * n.ySegCount * 2, n.attributes.uv.values = new Float32Array(2 * n.vertexCount), n.attributes.uvNorm.values = new Float32Array(2 * n.vertexCount), n.attributes.index.values = new Uint16Array(3 * n.quadCount);

            for (let e = 0; e <= n.ySegCount; e++) for (let t = 0; t <= n.xSegCount; t++) {
              const i = e * (n.xSegCount + 1) + t;

              if (n.attributes.uv.values[2 * i] = t / n.xSegCount, n.attributes.uv.values[2 * i + 1] = 1 - e / n.ySegCount, n.attributes.uvNorm.values[2 * i] = t / n.xSegCount * 2 - 1, n.attributes.uvNorm.values[2 * i + 1] = 1 - e / n.ySegCount * 2, t < n.xSegCount && e < n.ySegCount) {
                const s = e * n.xSegCount + t;
                n.attributes.index.values[6 * s] = i, n.attributes.index.values[6 * s + 1] = i + 1 + n.xSegCount, n.attributes.index.values[6 * s + 2] = i + 1, n.attributes.index.values[6 * s + 3] = i + 1, n.attributes.index.values[6 * s + 4] = i + 1 + n.xSegCount, n.attributes.index.values[6 * s + 5] = i + 2 + n.xSegCount;
              }
            }

            n.attributes.uv.update(), n.attributes.uvNorm.update(), n.attributes.index.update(), _miniGl.debug('Geometry.setTopology', {
              uv: n.attributes.uv,
              uvNorm: n.attributes.uvNorm,
              index: n.attributes.index
            });
          }

          setSize(width = 1, height = 1, orientation = 'xz') {
            const geometry = this;
            geometry.width = width, geometry.height = height, geometry.orientation = orientation, geometry.attributes.position.values && geometry.attributes.position.values.length === 3 * geometry.vertexCount || (geometry.attributes.position.values = new Float32Array(3 * geometry.vertexCount));
            const o = width / -2,
                  r = height / -2,
                  segment_width = width / geometry.xSegCount,
                  segment_height = height / geometry.ySegCount;

            for (let yIndex = 0; yIndex <= geometry.ySegCount; yIndex++) {
              const t = r + yIndex * segment_height;

              for (let xIndex = 0; xIndex <= geometry.xSegCount; xIndex++) {
                const r = o + xIndex * segment_width,
                      l = yIndex * (geometry.xSegCount + 1) + xIndex;
                geometry.attributes.position.values[3 * l + 'xyz'.indexOf(orientation[0])] = r, geometry.attributes.position.values[3 * l + 'xyz'.indexOf(orientation[1])] = -t;
              }
            }

            geometry.attributes.position.update(), _miniGl.debug('Geometry.setSize', {
              position: geometry.attributes.position
            });
          }

        }
      },
      Mesh: {
        enumerable: !1,
        value: class {
          constructor(geometry, material) {
            const mesh = this;
            mesh.geometry = geometry, mesh.material = material, mesh.wireframe = !1, mesh.attributeInstances = [], Object.entries(mesh.geometry.attributes).forEach(([e, attribute]) => {
              mesh.attributeInstances.push({
                attribute: attribute,
                location: attribute.attach(e, mesh.material.program)
              });
            }), _miniGl.meshes.push(mesh), _miniGl.debug('Mesh.constructor', {
              mesh: mesh
            });
          }

          draw() {
            context.useProgram(this.material.program), this.material.uniformInstances.forEach(({
              uniform: e,
              location: t
            }) => e.update(t)), this.attributeInstances.forEach(({
              attribute: e,
              location: t
            }) => e.use(t)), context.drawElements(this.wireframe ? context.LINES : context.TRIANGLES, this.geometry.attributes.index.values.length, context.UNSIGNED_SHORT, 0);
          }

          remove() {
            _miniGl.meshes = _miniGl.meshes.filter(e => e != this);
          }

        }
      },
      Attribute: {
        enumerable: !1,
        value: class {
          constructor(e) {
            this.type = context.FLOAT, this.normalized = !1, this.buffer = context.createBuffer(), Object.assign(this, e), this.update();
          }

          update() {
            void 0 !== this.values && (context.bindBuffer(this.target, this.buffer), context.bufferData(this.target, this.values, context.STATIC_DRAW));
          }

          attach(e, t) {
            const n = context.getAttribLocation(t, e);
            return this.target === context.ARRAY_BUFFER && (context.enableVertexAttribArray(n), context.vertexAttribPointer(n, this.size, this.type, this.normalized, 0, 0)), n;
          }

          use(e) {
            context.bindBuffer(this.target, this.buffer), this.target === context.ARRAY_BUFFER && (context.enableVertexAttribArray(e), context.vertexAttribPointer(e, this.size, this.type, this.normalized, 0, 0));
          }

        }
      }
    });
    const a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    _miniGl.commonUniforms = {
      projectionMatrix: new _miniGl.Uniform({
        type: 'mat4',
        value: a
      }),
      modelViewMatrix: new _miniGl.Uniform({
        type: 'mat4',
        value: a
      }),
      resolution: new _miniGl.Uniform({
        type: 'vec2',
        value: [1, 1]
      }),
      aspectRatio: new _miniGl.Uniform({
        type: 'float',
        value: 1
      })
    };
  }

  setSize(e = 640, t = 480) {
    this.width = e, this.height = t, this.canvas.width = e, this.canvas.height = t, this.gl.viewport(0, 0, e, t), this.commonUniforms.resolution.value = [e, t], this.commonUniforms.aspectRatio.value = e / t, this.debug('MiniGL.setSize', {
      width: e,
      height: t
    });
  } //left, right, top, bottom, near, far


  setOrthographicCamera(e = 0, t = 0, n = 0, i = -2e3, s = 2e3) {
    this.commonUniforms.projectionMatrix.value = [2 / this.width, 0, 0, 0, 0, 2 / this.height, 0, 0, 0, 0, 2 / (i - s), 0, e, t, n, 1], this.debug('setOrthographicCamera', this.commonUniforms.projectionMatrix.value);
  }

  render() {
    this.gl.clearColor(0, 0, 0, 0), this.gl.clearDepth(1), this.meshes.forEach(e => e.draw());
  }

} //Sets initial properties


function e(object, propertyName, val) {
  return propertyName in object ? Object.defineProperty(object, propertyName, {
    value: val,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : object[propertyName] = val, object;
} //Gradient object


class Gradient {
  constructor(...t) {
    e(this, 'el', void 0), e(this, 'cssVarRetries', 0), e(this, 'maxCssVarRetries', 200), e(this, 'angle', 0), e(this, 'isLoadedClass', !1), e(this, 'isScrolling', !1),
    /*e(this, "isStatic", o.disableAmbientAnimations()),*/
    e(this, 'scrollingTimeout', void 0), e(this, 'scrollingRefreshDelay', 200), e(this, 'isIntersecting', !1), e(this, 'shaderFiles', void 0), e(this, 'vertexShader', void 0), e(this, 'sectionColors', void 0), e(this, 'computedCanvasStyle', void 0), e(this, 'conf', void 0), e(this, 'uniforms', void 0), e(this, 't', 1253106), e(this, 'last', 0), e(this, 'width', void 0), e(this, 'minWidth', 1111), e(this, 'height', 600), e(this, 'xSegCount', void 0), e(this, 'ySegCount', void 0), e(this, 'mesh', void 0), e(this, 'material', void 0), e(this, 'geometry', void 0), e(this, 'minigl', void 0), e(this, 'scrollObserver', void 0), e(this, 'amp', 320), e(this, 'seed', 5), e(this, 'freqX', 14e-5), e(this, 'freqY', 29e-5), e(this, 'freqDelta', 1e-5), e(this, 'activeColors', [1, 1, 1, 1]), e(this, 'isMetaKey', !1), e(this, 'isGradientLegendVisible', !1), e(this, 'isMouseDown', !1), e(this, 'handleScroll', () => {
      clearTimeout(this.scrollingTimeout), this.scrollingTimeout = setTimeout(this.handleScrollEnd, this.scrollingRefreshDelay), this.isGradientLegendVisible && this.hideGradientLegend(), this.conf.playing && (this.isScrolling = !0, this.pause());
    }), e(this, 'handleScrollEnd', () => {
      this.isScrolling = !1, this.isIntersecting && this.play();
    }), e(this, 'resize', () => {
      this.width = window.innerWidth, this.minigl.setSize(this.width, this.height), this.minigl.setOrthographicCamera(), this.xSegCount = Math.ceil(this.width * this.conf.density[0]), this.ySegCount = Math.ceil(this.height * this.conf.density[1]), this.mesh.geometry.setTopology(this.xSegCount, this.ySegCount), this.mesh.geometry.setSize(this.width, this.height), this.mesh.material.uniforms.u_shadow_power.value = this.width < 600 ? 5 : 6;
    }), e(this, 'handleMouseDown', e => {
      this.isGradientLegendVisible && (this.isMetaKey = e.metaKey, this.isMouseDown = !0, !1 === this.conf.playing && requestAnimationFrame(this.animate));
    }), e(this, 'handleMouseUp', () => {
      this.isMouseDown = !1;
    }), e(this, 'animate', e => {
      if (!this.shouldSkipFrame(e) || this.isMouseDown) {
        if (this.t += Math.min(e - this.last, 1e3 / 15), this.last = e, this.isMouseDown) {
          let e = 160;
          this.isMetaKey && (e = -160), this.t += e;
        }

        this.mesh.material.uniforms.u_time.value = this.t, this.minigl.render();
      }

      if (0 !== this.last && this.isStatic) return this.minigl.render(), void this.disconnect();
      /*this.isIntersecting && */

      (this.conf.playing || this.isMouseDown) && requestAnimationFrame(this.animate);
    }), e(this, 'addIsLoadedClass', () => {
      /*this.isIntersecting && */
      !this.isLoadedClass && (this.isLoadedClass = !0, this.el.classList.add('isLoaded'), setTimeout(() => {// TODO: GRADIENT 수정
        // this.el.parentElement.classList.add('isLoaded');
      }, 3e3));
    }), e(this, 'pause', () => {
      this.conf.playing = false;
    }), e(this, 'play', () => {
      requestAnimationFrame(this.animate), this.conf.playing = true;
    }), e(this, 'initGradient', el => {
      this.el = el;
      this.connect();
      return this;
    });
  }

  async connect() {
    this.shaderFiles = {
      vertex: 'varying vec3 v_color;\n\nvoid main() {\n  float time = u_time * u_global.noiseSpeed;\n\n  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;\n\n  vec2 st = 1. - uvNorm.xy;\n\n  //\n  // Tilting the plane\n  //\n\n  // Front-to-back tilt\n  float tilt = resolution.y / 2.0 * uvNorm.y;\n\n  // Left-to-right angle\n  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;\n\n  // Up-down shift to offset incline\n  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);\n\n  //\n  // Vertex noise\n  //\n\n  float noise = snoise(vec3(\n    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,\n    noiseCoord.y * u_vertDeform.noiseFreq.y,\n    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed\n  )) * u_vertDeform.noiseAmp;\n\n  // Fade noise to zero at edges\n  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);\n\n  // Clamp to 0\n  noise = max(0.0, noise);\n\n  vec3 pos = vec3(\n    position.x,\n    position.y + tilt + incline + noise - offset,\n    position.z\n  );\n\n  //\n  // Vertex color, to be passed to fragment shader\n  //\n\n  if (u_active_colors[0] == 1.) {\n    v_color = u_baseColor;\n  }\n\n  for (int i = 0; i < u_waveLayers_length; i++) {\n    if (u_active_colors[i + 1] == 1.) {\n      WaveLayers layer = u_waveLayers[i];\n\n      float noise = smoothstep(\n        layer.noiseFloor,\n        layer.noiseCeil,\n        snoise(vec3(\n          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,\n          noiseCoord.y * layer.noiseFreq.y,\n          time * layer.noiseSpeed + layer.noiseSeed\n        )) / 2.0 + 0.5\n      );\n\n      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));\n    }\n  }\n\n  //\n  // Finish\n  //\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}',
      noise: '//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}',
      blend: '//\n// https://github.com/jamieowen/glsl-blend\n//\n\n// Normal\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n\treturn blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n\treturn (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Screen\n\nfloat blendScreen(float base, float blend) {\n\treturn 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n\treturn vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n\treturn (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Multiply\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n\treturn base*blend;\n}\n\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n\treturn (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Overlay\n\nfloat blendOverlay(float base, float blend) {\n\treturn base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n\treturn vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n\treturn (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Hard light\n\nvec3 blendHardLight(vec3 base, vec3 blend) {\n\treturn blendOverlay(blend,base);\n}\n\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Soft light\n\nfloat blendSoftLight(float base, float blend) {\n\treturn (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n\treturn vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color dodge\n\nfloat blendColorDodge(float base, float blend) {\n\treturn (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend) {\n\treturn vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color burn\n\nfloat blendColorBurn(float base, float blend) {\n\treturn (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n\treturn vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Vivid Light\n\nfloat blendVividLight(float base, float blend) {\n\treturn (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend) {\n\treturn vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Lighten\n\nfloat blendLighten(float base, float blend) {\n\treturn max(blend,base);\n}\n\nvec3 blendLighten(vec3 base, vec3 blend) {\n\treturn vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));\n}\n\nvec3 blendLighten(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLighten(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear burn\n\nfloat blendLinearBurn(float base, float blend) {\n\t// Note : Same implementation as BlendSubtractf\n\treturn max(base+blend-1.0,0.0);\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendSubtract\n\treturn max(base+blend-vec3(1.0),vec3(0.0));\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear dodge\n\nfloat blendLinearDodge(float base, float blend) {\n\t// Note : Same implementation as BlendAddf\n\treturn min(base+blend,1.0);\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendAdd\n\treturn min(base+blend,vec3(1.0));\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear light\n\nfloat blendLinearLight(float base, float blend) {\n\treturn blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend) {\n\treturn vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));\n}',
      fragment: 'varying vec3 v_color;\n\nvoid main() {\n  vec3 color = v_color;\n  if (u_darken_top == 1.0) {\n    vec2 st = gl_FragCoord.xy/resolution.xy;\n    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;\n  }\n  gl_FragColor = vec4(color, 1.0);\n}'
    }, this.conf = {
      presetName: '',
      wireframe: false,
      density: [0.06, 0.16],
      zoom: 1,
      rotation: 0,
      playing: true
    }, document.querySelectorAll('canvas').length < 1 ? console.log('DID NOT LOAD HERO STRIPE CANVAS') : (this.minigl = new MiniGl(this.el, null, null, !0), requestAnimationFrame(() => {
      this.el && (this.computedCanvasStyle = getComputedStyle(this.el), this.waitForCssVars());
    }));
    /*
          this.scrollObserver = await s.create(.1, !1),
          this.scrollObserver.observe(this.el),
          this.scrollObserver.onSeparate(() => {
              window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("mousedown", this.handleMouseDown), window.removeEventListener("mouseup", this.handleMouseUp), window.removeEventListener("keydown", this.handleKeyDown), this.isIntersecting = !1, this.conf.playing && this.pause()
          }), 
          this.scrollObserver.onIntersect(() => {
              window.addEventListener("scroll", this.handleScroll), window.addEventListener("mousedown", this.handleMouseDown), window.addEventListener("mouseup", this.handleMouseUp), window.addEventListener("keydown", this.handleKeyDown), this.isIntersecting = !0, this.addIsLoadedClass(), this.play()
          })*/
  }

  disconnect() {
    this.scrollObserver && (window.removeEventListener('scroll', this.handleScroll), window.removeEventListener('mousedown', this.handleMouseDown), window.removeEventListener('mouseup', this.handleMouseUp), window.removeEventListener('keydown', this.handleKeyDown), this.scrollObserver.disconnect()), window.removeEventListener('resize', this.resize);
  }

  initMaterial() {
    this.uniforms = {
      u_time: new this.minigl.Uniform({
        value: 0
      }),
      u_shadow_power: new this.minigl.Uniform({
        value: 5
      }),
      u_darken_top: new this.minigl.Uniform({
        value: '' === this.el.dataset.jsDarkenTop ? 1 : 0
      }),
      u_active_colors: new this.minigl.Uniform({
        value: this.activeColors,
        type: 'vec4'
      }),
      u_global: new this.minigl.Uniform({
        value: {
          noiseFreq: new this.minigl.Uniform({
            value: [this.freqX, this.freqY],
            type: 'vec2'
          }),
          noiseSpeed: new this.minigl.Uniform({
            value: 8e-6
          })
        },
        type: 'struct'
      }),
      u_vertDeform: new this.minigl.Uniform({
        value: {
          incline: new this.minigl.Uniform({
            value: Math.sin(this.angle) / Math.cos(this.angle)
          }),
          offsetTop: new this.minigl.Uniform({
            value: -0.5
          }),
          offsetBottom: new this.minigl.Uniform({
            value: -0.5
          }),
          noiseFreq: new this.minigl.Uniform({
            value: [3, 4],
            type: 'vec2'
          }),
          noiseAmp: new this.minigl.Uniform({
            value: this.amp
          }),
          noiseSpeed: new this.minigl.Uniform({
            value: 10
          }),
          noiseFlow: new this.minigl.Uniform({
            value: 3
          }),
          noiseSeed: new this.minigl.Uniform({
            value: this.seed
          })
        },
        type: 'struct',
        excludeFrom: 'fragment'
      }),
      u_baseColor: new this.minigl.Uniform({
        value: this.sectionColors[0],
        type: 'vec3',
        excludeFrom: 'fragment'
      }),
      u_waveLayers: new this.minigl.Uniform({
        value: [],
        excludeFrom: 'fragment',
        type: 'array'
      })
    };

    for (let e = 1; e < this.sectionColors.length; e += 1) this.uniforms.u_waveLayers.value.push(new this.minigl.Uniform({
      value: {
        color: new this.minigl.Uniform({
          value: this.sectionColors[e],
          type: 'vec3'
        }),
        noiseFreq: new this.minigl.Uniform({
          value: [2 + e / this.sectionColors.length, 3 + e / this.sectionColors.length],
          type: 'vec2'
        }),
        noiseSpeed: new this.minigl.Uniform({
          value: 11 + 0.3 * e
        }),
        noiseFlow: new this.minigl.Uniform({
          value: 6.5 + 0.3 * e
        }),
        noiseSeed: new this.minigl.Uniform({
          value: this.seed + 10 * e
        }),
        noiseFloor: new this.minigl.Uniform({
          value: 0.1
        }),
        noiseCeil: new this.minigl.Uniform({
          value: 0.63 + 0.07 * e
        })
      },
      type: 'struct'
    }));

    return this.vertexShader = [this.shaderFiles.noise, this.shaderFiles.blend, this.shaderFiles.vertex].join('\n\n'), new this.minigl.Material(this.vertexShader, this.shaderFiles.fragment, this.uniforms);
  }

  initMesh() {
    this.material = this.initMaterial(), this.geometry = new this.minigl.PlaneGeometry(), this.mesh = new this.minigl.Mesh(this.geometry, this.material);
  }

  shouldSkipFrame(e) {
    return !!window.document.hidden || !this.conf.playing || parseInt(e, 10) % 2 == 0 || void 0;
  }

  updateFrequency(e) {
    this.freqX += e, this.freqY += e;
  }

  toggleColor(index) {
    this.activeColors[index] = 0 === this.activeColors[index] ? 1 : 0;
  }

  showGradientLegend() {
    this.width > this.minWidth && (this.isGradientLegendVisible = !0, document.body.classList.add('isGradientLegendVisible'));
  }

  hideGradientLegend() {
    this.isGradientLegendVisible = !1, document.body.classList.remove('isGradientLegendVisible');
  }

  init() {
    this.initGradientColors(), this.initMesh(), this.resize(), requestAnimationFrame(this.animate), window.addEventListener('resize', this.resize);
  }
  /*
   * Waiting for the css variables to become available, usually on page load before we can continue.
   * Using default colors assigned below if no variables have been found after maxCssVarRetries
   */


  waitForCssVars() {
    if (this.computedCanvasStyle && -1 !== this.computedCanvasStyle.getPropertyValue('--gradient-color-1').indexOf('#')) this.init(), this.addIsLoadedClass();else {
      if (this.cssVarRetries += 1, this.cssVarRetries > this.maxCssVarRetries) {
        return this.sectionColors = [16711680, 16711680, 16711935, 65280, 255], void this.init();
      }

      requestAnimationFrame(() => this.waitForCssVars());
    }
  }
  /*
   * Initializes the four section colors by retrieving them from css variables.
   */


  initGradientColors() {
    this.sectionColors = ['--gradient-color-1', '--gradient-color-2', '--gradient-color-3', '--gradient-color-4'].map(cssPropertyName => {
      let hex = this.computedCanvasStyle.getPropertyValue(cssPropertyName).trim(); //Check if shorthand hex value was used and double the length so the conversion in normalizeColor will work.

      if (4 === hex.length) {
        const hexTemp = hex.substr(1).split('').map(hexTemp => hexTemp + hexTemp).join('');
        hex = `#${hexTemp}`;
      }

      return hex && `0x${hex.substr(1)}`;
    }).filter(Boolean).map(normalizeColor);
  }

}
;// CONCATENATED MODULE: ./src/assets/background_img.png
/* harmony default export */ const background_img = ({"src":"/_next/static/media/background_img.6969fa94.png","height":800,"width":1920,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAIVBMVEU7O0U8PEU8PEU8PEU8PEU8PEU8PEU8PEU8PEU8PEU8PEUrHVoBAAAAC3RSTlP+Azul8WraJKLDfAu4lCUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZSURBVAiZY2DABljYODm4GJhZmdgZGRkZAQJGADsYX/1kAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/common/layouts/Layout.tsx
function Layout_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


 // Redux


// Components

 // Styles



 // import BackGroundImg2 from '../../assets/background_img2.png';

 // Types




const Layout = ({
  children
}) => {
  const token = (0,react_redux_lib.useSelector)(state => state.auth.token);
  const {
    0: showGradient,
    1: setShowGradient
  } = (0,react.useState)(false);
  const router = (0,next_router.useRouter)();
  const canvasRef = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    if (canvasRef.current) {
      setGradient(canvasRef.current);
    }
  }, []);
  (0,react.useEffect)(() => {
    aos_default().init({
      once: true,
      duration: 500
    });
  }, []);
  (0,react.useEffect)(() => {
    if (router.pathname === '/' || router.pathname === '/login' || router.pathname === '/signup' || router.pathname === '/signup/confirm' || router.pathname === '/pwInquiry' || router.pathname === '/pwInquiry/confirm' || router.pathname === '/addInfo/1' || router.pathname === '/addInfo/2' || router.pathname === '/addInfo/3') {
      setShowGradient(true);
    } else {
      setShowGradient(false);
    }
  }, [router]);
  (0,react.useEffect)(() => {// console.log(showGradient, 'SHOW');
  }, [showGradient]); // console.log(router);
  // console.log(`https://${window.location.host}${router.pathname}`);

  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(react.Fragment, null, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: mainContainer
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("main", {
    css: contentsContainer
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("canvas", {
    css: gradientCanvas(showGradient),
    id: "gradient-canvas",
    ref: canvasRef
  }), showGradient ? (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(react.Fragment, null, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: gradientDiv
  }), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(AppBar/* default */.Z, {
    dark: true
  })) : null, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: backgroundStyle
  }, children))), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(organisms_AuthToast, {
    position: 'top-center'
  }));
};

/* harmony default export */ const layouts_Layout = (Layout);
const mainContainer =  true ? {
  name: "pw7jst",
  styles: "position:relative;width:100%"
} : 0;
const contentsContainer =  true ? {
  name: "h65typ",
  styles: "width:100%;min-height:100vh;transition:0.6s ease"
} : 0;
const fullMainContainer =  true ? {
  name: "ey7j0e",
  styles: "width:100%;transition:0.6s ease"
} : 0;
const backgroundStyle = /*#__PURE__*/(0,emotion_react_cjs_prod.css)( true ? "" : 0,  true ? "" : 0);

const gradientCanvas = showGradient => /*#__PURE__*/(0,emotion_react_cjs_prod.css)("display:", showGradient ? 'unset' : 'none', ";width:100%;position:absolute;top:0;z-landing:-1;height:792px;--gradient-color-1:#3c3c46;--gradient-color-2:#3d2f4d;--gradient-color-3:#2d2d3f;--gradient-color-4:#1f3c3f;transform:skewY(-9deg);transform-origin:top left;border-image:linear-gradient(93.75deg, a8ff69 8.23%, #24e1d5 35.57%, #2878f0 62.91%, #7b3ce9 91.55%);" + ( true ? "" : 0),  true ? "" : 0);

const gradientDiv =  true ? {
  name: "1srv3u4",
  styles: "height:800px;position:absolute;top:0px;z-landing:-1;border-top:0px;border-left:0px;border-right:0px;border-bottom:10px solid;box-sizing:border-box;background:transparent;width:100%;border-image:linear-gradient(93.75deg, #a8ff69 8.23%, #24e1d5 35.57%, #2878f0 62.91%, #7b3ce9 91.55%);border-image-slice:1;transform:skewY(-9deg);transform-origin:top left"
} : 0;
// EXTERNAL MODULE: ./node_modules/react-query/lib/landing.js
var react_query_lib = __webpack_require__(23724);
// EXTERNAL MODULE: ./node_modules/react-query/devtools/landing.js
var devtools = __webpack_require__(20938);
;// CONCATENATED MODULE: ./src/styles/Global.styles.ts
function Global_styles_EMOTION_STRINGIFIED_CSS_ERROR_() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const Global_styles_reset =  true ? {
  name: "1spggud",
  styles: "@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');{}$aos-distance:30px;:root{--gradient:linear-gradient(93.75deg, #a8ff69 8.23%, #24e1d5 35.57%, #2878f0 62.91%, #7b3ce9 91.55%);}*{font-family:Pretendard,-apple-system,BlinkMacSystemFont,system-ui,Roboto,'Helvetica Neue','Segoe UI','Apple SD Gothic Neo','Noto Sans KR','Malgun Gothic',sans-serif;}*{html,body{padding:0;margin:0;width:100%;}a{text-decoration:none;color:#000000;}ul,ol{margin:0;padding:0;list-style:none;}img{border:none;}h1,h2,h3{margin:0;padding:0;font-size:100%;},.supah-scroll{position:fixed;z-landing:1;top:0;left:0;width:100%;height:auto;will-change:transform;overflow:hidden;}img{object-fit:contain;}p,span{color:#3c3c46;}#gradient-canvas{--gradient-color-1:#3c3c46;--gradient-color-2:#3d2f4d;--gradient-color-3:#2d2d3f;--gradient-color-4:#1f3c3f;}.gradient-title{background:var(--gradient);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}.gradient-title::after{content:'\\00a0';background-image:var(--gradient);background-size:100% 12px;background-repeat:no-repeat;float:left;width:100%;height:3px;margin-top:0px;margin-bottom:6px;}.fade-enter{opacity:0;}.fade-enter-active{opacity:1;transition:all 300ms ease;}.fade-exit{opacity:1;}.fade-exit-active{opacity:0;transition:all 200ms ease;}.box-shadow-active{border-radius:8px;box-shadow:0px 4px 20px rgba(0, 0, 0, 0.25);transition:all 500ms ease;}.slick-box{height:308px;box-shadow:0px 4px 30px rgba(0, 0, 0, 0.15);border-radius:8px;}.slick-dots{bottom:15px!important;}.slick-dots li,.slick-dots li button{width:24px!important;padding:0px;background-color:#7b3ce9;opacity:0.5;}.slick-active{opacity:1!important;}.slick-dots li button::before{display:none;}@media only screen and (min-width: 360px){.slick-box,.slick-slide div{height:calc(100vw - 64px + 250px);}.slick-dots li,.slick-dots li button{height:2px!important;}}@media only screen and (min-width: 768px){.slick-box,.slick-slide div{height:308px;}.slick-dots li,.slick-dots li button{height:4px!important;}}@media only screen and (min-width: 1280px){}@media only screen and (min-width: 1920px){}}"
} : 0;
/* harmony default export */ const Global_styles = (Global_styles_reset);
;// CONCATENATED MODULE: ./src/styles/GlobalStyles.tsx
 // Styles






const GlobalStyles = () => {
  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(emotion_react_cjs_prod.Global, {
    styles: Global_styles
  });
};

/* harmony default export */ const styles_GlobalStyles = (GlobalStyles);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/landing.js
var styles = __webpack_require__(59006);
// EXTERNAL MODULE: ./diby-client-landing/Theme.tsx
var Theme = __webpack_require__(70778);
// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
;// CONCATENATED MODULE: ./src/common/layouts/Seo/landing.tsx





const Seo = ({
  path,
  title = 'Diby | 일 잘하는 당신을 위한 유저리서치 솔루션',
  description = '유저리서치로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요.',
  ogTitle = '일 잘하는 당신을 위한 유저리서치 솔루션, Diby',
  ogDescription = '유저리서치로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요.',
  url = 'https://diby.io/',
  props
}) => {
  const seoAttr = () => {
    const url = `https://diby.io${path}`;

    switch (path) {
      case '/usecases/ui':
        return {
          title: 'Diby | UI 진단 테스트',
          description: '사용성 테스트 (usabiltiy test)로 서비스내 문제점 파악',
          ogTitle: 'UI 진단 테스트 | Diby',
          ogDescription: '사용성 테스트 (usabiltiy test)로 서비스내 문제점 파악',
          url
        };

      case '/usecases/ux':
        return {
          title: 'Diby | UX 포지션 테스트',
          description: '실사용자 대상 UX 평가 및 전략 수립',
          ogTitle: 'UX 포지션 테스트 | Diby',
          ogDescription: '실사용자 대상 UX 평가 및 전략 수립',
          url
        };

      case '/usecases/scenario':
        return {
          title: 'Diby | 시나리오 테스트',
          description: 'UX UI 가설 수립 및 검증',
          ogTitle: '시나리오 테스트 | Diby',
          ogDescription: 'UX UI 가설 수립 및 검증',
          url
        };

      case '/usecases/customer':
        return {
          title: 'Diby | 퍼소나 테스트',
          description: '시장조사, 핵심 고객 정의',
          ogTitle: '퍼소나 테스트 | Diby',
          ogDescription: '시장조사, 핵심 고객 정의',
          url
        };

      case '/feature':
        return {
          title: 'Diby | 솔루션소개',
          description: '유저리서치에서 단순반복 작업을 80% 단축하세요.',
          ogTitle: '솔루션소개 | Diby',
          ogDescription: '유저리서치에서 단순반복 작업을 80% 단축하세요.',
          url
        };

      case '/pricing':
        return {
          title: 'Diby | 가격안내',
          description: '',
          ogTitle: '가격안내 | Diby',
          ogDescription: '',
          url
        };

      case '/tri':
        return {
          title: 'Diby | 설계하기',
          description: '1분안에 간략한 비용과 소요시간 확인하기',
          ogTitle: '설계하기 | Diby',
          ogDescription: '1분안에 간략한 비용과 소요시간 확인하기',
          url
        };

      default:
        return {
          title: 'Diby | 일 잘하는 당신을 위한 유저리서치 솔루션',
          description: '유저리서치로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요.',
          ogTitle: '유저리서치 솔루션, Diby',
          ogDescription: '유저리서치로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요.',
          url
        };
    }
  };

  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(head["default"], null, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("title", null, seoAttr().title), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("meta", {
    name: "description",
    content: seoAttr().description
  }), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("meta", {
    property: "og:title",
    content: seoAttr().ogTitle
  }), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("meta", {
    property: "og:description",
    content: seoAttr().ogDescription
  }), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("meta", {
    property: "og:site_name",
    content: seoAttr().ogTitle
  }), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("meta", {
    property: "og:url",
    content: seoAttr().url
  }));
};

/* harmony default export */ const layouts_Seo = (Seo);
;// CONCATENATED MODULE: ./src/pages/_app.tsx

 // Redux




 // Components


// Libraries

 // Styles






 // Types


 // import { GetServerSideProps } from 'next';




function MyApp({
  Component,
  pageProps
}, props) {
  const store = (0,redux.createStore)(persistedReducer);
  const persistor = (0,redux_persist_lib.persistStore)(store);
  const router = (0,next_router.useRouter)();
  console.log(props, 'Props');
  const [queryClient] = react.useState(() => new react_query_lib.QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        // refetchOnMount: false,
        refetchOnReconnect: false
      }
    }
  }));
  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(react.Fragment, null, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(layouts_Seo, {
    path: router.pathname
  }), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(integration_react/* PersistGate */.r, {
    persistor: persistor,
    loading: (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", null)
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(react_query_lib.QueryClientProvider, {
    client: queryClient
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(react_query_lib.Hydrate, {
    state: pageProps.dehydratedState
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(styles.ThemeProvider, {
    theme: Theme/* theme */.r
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(styles_GlobalStyles, null), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(layouts_Layout, null, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(Component, pageProps)), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(script["default"], {
    type: "text/javascript",
    src: "/lib/beusableHeatmap.js"
  }))), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(devtools.ReactQueryDevtools, {
    initialIsOpen: false,
    position: 'bottom-right'
  }))));
}

/* harmony default export */ const _app = (wrapper.withRedux(MyApp));

/***/ }),

/***/ 4001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56859);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11334);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// _document.js





class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1__["default"].getInitialProps(ctx);
    console.log(initialProps, 'asdfasdfasdfasdf'); // console.log(ctx.req.url);

    return _objectSpread({}, initialProps);
  }

  render() {
    return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "ko"
    }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("meta", {
      charSet: "utf-8"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("meta", {
      name: "viewport",
      content: "initial-scale=1.0, width=device-width"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("meta", {
      httpEquiv: "cache-control",
      content: "no-cache"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("meta", {
      httpEquiv: "expires",
      content: "0"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("meta", {
      httpEquiv: "pragma",
      content: "no-cache"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("link", {
      rel: "icon",
      href: "/favicon.png"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("meta", {
      property: "og:type",
      content: "website"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("meta", {
      property: "og:image",
      content: "/og-diby.png"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("meta", {
      property: "og:locale",
      content: "ko_KR"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("meta", {
      property: "og:image:width",
      content: "2420"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("meta", {
      property: "og:image:height",
      content: "1210"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("meta", {
      property: "author",
      content: "DBDLAB"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("meta", {
      name: "google-site-verification",
      content: "VOhtSYTyB99y881SKWMXBlOpPgmSFRKA7-8W7AlzlrY"
    }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("meta", {
      name: "naver-site-verification",
      content: "4cb24b7cbfcbd02dd6230263b6358c44b114b844"
    })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("body", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("div", {
      id: "toast-root"
    })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, null));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyDocument);

/***/ }),

/***/ 13252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o4": () => (/* binding */ setToken),
/* harmony export */   "Eu": () => (/* binding */ resetToken),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export authSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47389);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  token: ''
};
const authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    resetToken: state => {
      state.token = '';
    }
  }
});
const {
  setToken,
  resetToken
} = authSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);

/***/ }),

/***/ 12061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CF": () => (/* binding */ showToast),
/* harmony export */   "RS": () => (/* binding */ removeToast),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export toastSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47389);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76791);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  toastArr: []
};
const toastSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action) => {
      state.toastArr.push(_objectSpread(_objectSpread({}, action.payload), {}, {
        id: (0,uuid__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)()
      }));
    },
    removeToast: (state, action) => {
      const otherArr = state.toastArr.filter(el => el.id !== action.payload);
      state.toastArr = otherArr;
    }
  }
});
const {
  showToast,
  removeToast
} = toastSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toastSlice.reducer);

/***/ }),

/***/ 7526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ colors)
/* harmony export */ });
const colors = {
  green: {
    _300: '#cfffac',
    _500: '#a8ff69',
    _700: '#8bce5b'
  },
  cyan: {
    _300: '#95efe9',
    _500: '#24e1d5',
    _700: '#1db5ab'
  },
  blue: {
    _300: '#94bbf5',
    _500: '#2878f0',
    _700: '#2262c1'
  },
  violet: {
    _300: '#ba9dee',
    _500: '#7b3ce9',
    _700: '#6431bc'
  },
  red: '#fe4e56',
  grey: {
    _3c: '#3c3c46',
    _66: '#666666',
    _99: '#999999',
    _cc: '#cccccc',
    _ec: '#ececec',
    _fa: '#fafafa'
  },
  black: '#282828',
  white: '#ffffff'
};

/***/ }),

/***/ 11936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a7": () => (/* binding */ heading1_bold),
/* harmony export */   "hI": () => (/* binding */ heading4_bold),
/* harmony export */   "zR": () => (/* binding */ body2_bold),
/* harmony export */   "Tk": () => (/* binding */ body2_regular),
/* harmony export */   "Sw": () => (/* binding */ body3_bold),
/* harmony export */   "PD": () => (/* binding */ body3_regular),
/* harmony export */   "Xh": () => (/* binding */ caption1_bold),
/* harmony export */   "yQ": () => (/* binding */ caption1_regular)
/* harmony export */ });
/* unused harmony exports heading1_medium, heading1_regular, heading2_bold, heading2_medium, heading2_regular, heading3_bold, heading3_medium, heading3_regular, heading4_medium, heading4_regular, heading5_bold, heading5_medium, heading5_regular, body1_bold, body1_medium, body1_regular, body2_medium, body3_medium, caption1_medium, caption2_bold, caption2_medium, caption2_regular */
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


const height30 =  true ? {
  name: "e8tr75",
  styles: "height:30px;line-height:30px"
} : 0;
const height24 =  true ? {
  name: "1obalp9",
  styles: "height:24px;line-height:24px"
} : 0;
const height22 =  true ? {
  name: "p0fnc6",
  styles: "height:22px;line-height:22px"
} : 0;
const height20 =  true ? {
  name: "ncv1ml",
  styles: "height:20px;line-height:20px"
} : 0;
const height18 =  true ? {
  name: "ozbxo0",
  styles: "height:18px;line-height:18px"
} : 0;
const height14 =  true ? {
  name: "1w8hx2u",
  styles: "height:14px;line-height:14px"
} : 0;
const height12 =  true ? {
  name: "1r5ko8i",
  styles: "height:12px;line-height:12px"
} : 0;
const font24 =  true ? {
  name: "1qg6oif",
  styles: "font-size:24px"
} : 0;
const font20 =  true ? {
  name: "14is9qy",
  styles: "font-size:20px"
} : 0;
const font18 =  true ? {
  name: "2pg1ps",
  styles: "font-size:18px"
} : 0;
const font16 =  true ? {
  name: "11g4mt0",
  styles: "font-size:16px"
} : 0;
const font14 =  true ? {
  name: "mmdt3g",
  styles: "font-size:14px"
} : 0;
const font12 =  true ? {
  name: "rnnx2x",
  styles: "font-size:12px"
} : 0;
const font10 =  true ? {
  name: "ot4ncn",
  styles: "font-size:10px"
} : 0;
const fontBold =  true ? {
  name: "1j389vi",
  styles: "font-weight:700"
} : 0;
const fontMedium =  true ? {
  name: "f3vz0n",
  styles: "font-weight:500"
} : 0;
const fontRegular =  true ? {
  name: "mmvz9h",
  styles: "font-weight:400"
} : 0; // heading1

const heading1_bold = [font24, fontBold, height30];
const heading1_medium = [font24, fontMedium, height30];
const heading1_regular = [font24, fontRegular, height30]; // heading2

const heading2_bold = [font20, fontBold, height24];
const heading2_medium = [font20, fontMedium, height24];
const heading2_regular = [font20, fontRegular, height24]; // heading3

const heading3_bold = [font18, fontBold, height24];
const heading3_medium = [font18, fontMedium, height24];
const heading3_regular = [font18, fontRegular, height24]; // heading4

const heading4_bold = [font16, fontBold, height20];
const heading4_medium = [font16, fontMedium, height20];
const heading4_regular = [font16, fontRegular, height20]; // heading5

const heading5_bold = [font14, fontBold, height18];
const heading5_medium = [font14, fontMedium, height18];
const heading5_regular = [font14, fontRegular, height18]; // body1

const body1_bold = [font18, fontBold, height22];
const body1_medium = [font18, fontMedium, height22];
const body1_regular = [font18, fontRegular, height22]; // body2

const body2_bold = [font16, fontBold, height20];
const body2_medium = [font16, fontMedium, height20];
const body2_regular = [font16, fontRegular, height20]; // body3

const body3_bold = [font14, fontBold, height18];
const body3_medium = [font14, fontMedium, height18];
const body3_regular = [font14, fontRegular, height18]; // caption1

const caption1_bold = [font12, fontBold, height14];
const caption1_medium = [font12, fontMedium, height14];
const caption1_regular = [font12, fontRegular, height14]; //caption2

const caption2_bold = [font10, fontBold, height12];
const caption2_medium = [font10, fontMedium, height12];
const caption2_regular = [font10, fontRegular, height12];


/***/ }),

/***/ 97020:
/***/ ((module) => {

module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-5cd94c89d3acac5f.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/ke1gnoDHWflMm-7M80q1l/_buildManifest.js","static/ke1gnoDHWflMm-7M80q1l/_ssgManifest.js","static/ke1gnoDHWflMm-7M80q1l/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/ea88be26-4785f7f12099037b.js","static/chunks/813-ccba27e70809adb2.js","static/chunks/151-3594cf940d575430.js","static/chunks/pages/landing-9f022b9e581d8c9b.js"],"/_app":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/css/b43a96246c8cc14d.css","static/chunks/pages/_app-b2babd000f20bbfb.js"],"/_error":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/pages/_error-350d9d86556f6d87.js"],"/addinfo/[id]":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/947-5d850c1a6267813a.js","static/chunks/868-c72f1f5a5b6f4b9c.js","static/chunks/pages/addinfo/[id]-db31a76fddbac1ea.js"],"/error":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/pages/error-54a8183c0a003fbf.js"],"/feature":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/ea88be26-4785f7f12099037b.js","static/chunks/66-bda1e0cf53111cdf.js","static/chunks/151-3594cf940d575430.js","static/chunks/pages/feature-4ba9c470e436dd49.js"],"/login":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/947-5d850c1a6267813a.js","static/chunks/868-c72f1f5a5b6f4b9c.js","static/chunks/306-aa0337ddd7aa5b5a.js","static/chunks/pages/login-9554560d74745ec7.js"],"/pricing":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/pages/pricing-3520d7fbb2751a4e.js"],"/pwInquiry":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/947-5d850c1a6267813a.js","static/chunks/868-c72f1f5a5b6f4b9c.js","static/chunks/pages/pwInquiry-03623e4f2f82d2a4.js"],"/pwInquiry/confirm":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/868-c72f1f5a5b6f4b9c.js","static/chunks/394-5e46d64a739ca211.js","static/chunks/pages/pwInquiry/confirm-0b26a69584a2aa82.js"],"/signup":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/947-5d850c1a6267813a.js","static/chunks/868-c72f1f5a5b6f4b9c.js","static/chunks/306-aa0337ddd7aa5b5a.js","static/chunks/pages/signup-2873b2f5278dda4b.js"],"/signup/confirm":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/868-c72f1f5a5b6f4b9c.js","static/chunks/394-5e46d64a739ca211.js","static/chunks/pages/signup/confirm-6f409f290867e156.js"],"/sitemap.xml":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/pages/sitemap.xml-92728765eafe6a8f.js"],"/tri":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/ea88be26-4785f7f12099037b.js","static/chunks/606-17fb28be2dff4643.js","static/chunks/151-3594cf940d575430.js","static/chunks/pages/tri-0935061dfc4b0304.js"],"/usecases/customer":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/788-03888c51933d2da2.js","static/chunks/pages/usecases/customer-1c3b722078864036.js"],"/usecases/scenario":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/788-03888c51933d2da2.js","static/chunks/pages/usecases/scenario-38872b9260ea8e91.js"],"/usecases/ui":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/788-03888c51933d2da2.js","static/chunks/pages/usecases/ui-4966616dc9170640.js"],"/usecases/ux":["static/chunks/webpack-f8a0cece4b531f5c.js","static/chunks/framework-5f4595e5518b5600.js","static/chunks/main-90eda134c7fd1b80.js","static/chunks/788-03888c51933d2da2.js","static/chunks/pages/usecases/ux-06573c73a96c3983.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

module.exports = JSON.parse('{"../../diby-client-landing/components/LottieCard.tsx -> scrollreveal":{"id":1247,"files":["static/chunks/247.1134825ecb398e7c.js"]},"../../diby-client-landing/components/LottieIcon.tsx -> scrollreveal":{"id":1247,"files":["static/chunks/247.1134825ecb398e7c.js"]},"../../node_modules/next/dist/client/landing.js -> ../pages/_error":{"id":9894,"files":["static/chunks/894.9047cda612e8fce0.js"]}}');

/***/ }),

/***/ 59450:
/***/ ((module) => {

module.exports = {"Dg":[]};

/***/ })

};
;