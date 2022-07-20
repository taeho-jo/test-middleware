'use strict';
exports.id = 788;
exports.ids = [788];
exports.modules = {
  /***/ 57354: /***/ (__unused_webpack_module, exports, __webpack_require__) => {
    var __webpack_unused_export__;

    var _interopRequireDefault = __webpack_require__(64119);

    __webpack_unused_export__ = {
      value: true,
    };
    exports.Z = void 0;

    var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));

    var _jsxRuntime = __webpack_require__(85893);

    var _default = (0, _createSvgIcon.default)(
      /*#__PURE__*/ (0, _jsxRuntime.jsx)('path', {
        d: 'M16.01 11H4v2h12.01v3L20 12l-3.99-4z',
      }),
      'ArrowRightAlt',
    );

    exports.Z = _default;

    /***/
  },

  /***/ 85498: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    /* harmony export */ __webpack_require__.d(__webpack_exports__, {
      /* harmony export */ Z: () => __WEBPACK_DEFAULT_EXPORT__,
      /* harmony export */
    });
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
    /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11163);
    /* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11334);

    function Page({ children }) {
      const location = (0, next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
      (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        window.scrollTo(0, 0);
      }, [location]);
      return (0, _emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(
        /** @jsxImportSource @emotion/react */ 'div',
        {
          style: {
            width: '100%',
          },
        },
        children,
      );
    }

    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = Page;

    /***/
  },

  /***/ 49788: /***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      sE: () => /* binding */ Solution1,
      v1: () => /* binding */ Solution2,
      WN: () => /* binding */ Solution3,
      uz: () => /* binding */ Solution4,
    });

    // EXTERNAL MODULE: ./node_modules/react/landing.js
    var react = __webpack_require__(67294);
    // EXTERNAL MODULE: ./diby-client-landing/components/Page.tsx
    var Page = __webpack_require__(85498);
    // EXTERNAL MODULE: ./diby-client-landing/components/AppBar.tsx + 6 modules
    var AppBar = __webpack_require__(17250);
    // EXTERNAL MODULE: ./node_modules/next/router.js
    var router = __webpack_require__(11163);
    // EXTERNAL MODULE: ./node_modules/@mui/icons-material/ArrowRightAlt.js
    var ArrowRightAlt = __webpack_require__(57354);
    // EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/landing.js
    var styles = __webpack_require__(59006);
    // EXTERNAL MODULE: ./node_modules/@mui/material/node/landing.js
    var node = __webpack_require__(7772);
    // EXTERNAL MODULE: ./diby-client-landing/components/Grid.tsx
    var Grid = __webpack_require__(53532);
    // EXTERNAL MODULE: ./diby-client-landing/Theme.tsx
    var Theme = __webpack_require__(70778);
    // EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.cjs.prod.js
    var emotion_react_cjs_prod = __webpack_require__(11334); // CONCATENATED MODULE: ./diby-client-landing/pages/Solution/Section1.tsx
    const Section = (0, styles.styled)('div')(({ theme }) => ({
      width: '100%',
    }));
    const LeftGrid = (0, styles.styled)(node.Grid)(({ theme }) => ({
      [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        display: 'flex',
      },
      [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
      },
      marginTop: '16px',
    }));
    const RightGrid = (0, styles.styled)(node.Grid)(({ theme }) => ({
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
      [theme.breakpoints.up('md')]: {
        display: 'inherit',
      },
      marginTop: '8px',
    }));
    const Header = (0, styles.styled)('p')(({ theme }) => ({
      whiteSpace: 'pre-wrap',
      [theme.breakpoints.down('md')]: {
        fontSize: '16px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '24px',
      },
      marginBottom: '10px',
      fontWeight: 'bold',
    }));
    const Title = (0, styles.styled)('p')(({ theme }) => ({
      whiteSpace: 'pre-wrap',
      [theme.breakpoints.down('md')]: {
        width: '100%',
        fontSize: '24px',
        lineHeight: '32px',
      },
      [theme.breakpoints.up('md')]: {
        width: '90%',
        fontSize: '32px',
        lineHeight: '48px',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '40px',
        lineHeight: '55px',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '38px',
        lineHeight: '64px',
      },
      fontWeight: 'bold',
      margin: '0',
    }));
    const NextButton = (0, styles.styled)(node.Button)({
      fontWeight: '700',
      textTransform: 'none',
      fontSize: '16px',
      height: '36px',
      borderRadius: '18px',
      marginTop: '32px',
      paddingLeft: '32px',
      paddingRight: '32px',
      boxShadow: 'none !important',
      color: 'white',
    });

    const Section1 = ({ data }) => {
      console.log(data);
      const { 0: isMobile, 1: setIsMobile } = (0, react.useState)(window.innerWidth < Theme /* breakpoints.md */.A.md);
      const navigate = (0, router.useRouter)();

      const handleClick = path => {
        navigate.push(path);
      };

      const handleResize = () => {
        setIsMobile(window.innerWidth < Theme /* breakpoints.md */.A.md);
      };

      (0, react.useEffect)(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      return (0, emotion_react_cjs_prod.jsx)(
        /** @jsxImportSource @emotion/react */ react.Fragment,
        null,
        (0, emotion_react_cjs_prod.jsx)(
          /** @jsxImportSource @emotion/react */ 'div',
          {
            style: {
              width: '100%',
              marginBottom: '30px',
              maxWidth: '1920px',
              margin: '0 auto',
            },
          },
          (0, emotion_react_cjs_prod.jsx)(
            /** @jsxImportSource @emotion/react */ Section,
            null,
            (0, emotion_react_cjs_prod.jsx)(
              /** @jsxImportSource @emotion/react */ Grid /* GridContainer */.T,
              {
                container: true,
                spacing: 0,
                style: {
                  paddingTop: '90px',
                  overflowX: 'hidden',
                },
              },
              (0, emotion_react_cjs_prod.jsx)(
                /** @jsxImportSource @emotion/react */ LeftGrid,
                {
                  item: true,
                  xs: 12,
                  md: 7,
                  lg: 7,
                },
                (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'div', {
                  style: {
                    flex: 1,
                  },
                }),
                (0, emotion_react_cjs_prod.jsx)(
                  /** @jsxImportSource @emotion/react */ node.Stack,
                  {
                    direction: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    style: {
                      width: 'fix-content',
                    },
                  },
                  (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Header, null, data.header),
                  (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Title, null, data.title),
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ NextButton,
                    {
                      onClick: () => {
                        handleClick('/tri');
                      },
                      color: 'blue',
                      variant: 'contained',
                      endIcon: isMobile
                        ? undefined
                        : (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ ArrowRightAlt /* default */.Z, {
                            style: {
                              color: 'white',
                            },
                          }),
                    },
                    navigate.pathname === '/usecases/ui'
                      ? 'UI 진단 테스트로 사용성 개선하기'
                      : navigate.pathname === '/usecases/ux'
                      ? 'UX 포지션 테스트로 UX 전략 수립하기'
                      : navigate.pathname === '/usecases/scenario'
                      ? '시나리오 테스트로 의사결정하기'
                      : '퍼소나 테스트로 퍼소나 정의하기',
                  ),
                ),
                (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'div', {
                  style: {
                    flex: 1,
                  },
                }),
              ),
              (0, emotion_react_cjs_prod.jsx)(
                /** @jsxImportSource @emotion/react */ RightGrid,
                {
                  item: true,
                  xs: 0,
                  md: 5,
                  lg: 5,
                },
                (0, emotion_react_cjs_prod.jsx)(
                  /** @jsxImportSource @emotion/react */ 'div',
                  {
                    style: {
                      display: 'flex',
                      justifyContent: 'flex-start',
                      overflowX: 'visible',
                    },
                  },
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ 'div',
                    {
                      style: {
                        width: '600px',
                        height: '488px',
                        overflowY: 'hidden',
                      },
                    },
                    (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'img', {
                      'data-aos': 'fade-up',
                      src: data.bg.src,
                      alt: 'bg',
                      style: {
                        width: '504px',
                        height: '384px',
                      },
                    }),
                    (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'img', {
                      'data-aos': 'fade-up',
                      'data-aos-delay': 500,
                      src: data.chart.src,
                      alt: 'chart',
                      style: {
                        width: '352px',
                        height: '384px',
                        marginTop: '-320px',
                        marginLeft: '145px',
                      },
                    }),
                  ),
                ),
              ),
              isMobile &&
                (0, emotion_react_cjs_prod.jsx)(
                  /** @jsxImportSource @emotion/react */ 'div',
                  {
                    style: {
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                    },
                  },
                  (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'img', {
                    src: data.chart.src,
                    alt: 'chart',
                    style: {
                      width: '352px',
                      height: '384px',
                      marginTop: '32px',
                    },
                  }),
                ),
            ),
          ),
        ),
        (0, emotion_react_cjs_prod.jsx)(
          /** @jsxImportSource @emotion/react */ 'div',
          {
            style: {
              width: '100%',
              background: '#F8F8F8',
            },
          },
          (0, emotion_react_cjs_prod.jsx)(
            /** @jsxImportSource @emotion/react */ Grid /* GridContainer */.T,
            {
              container: true, // columnSpacing={16}
              rowSpacing: 8,
              justifyContent: 'center',
              style: {
                maxWidth: '1920px',
                margin: '0 auto',
                marginTop: '56px',
                paddingTop: '48px',
                paddingBottom: '48px',
              },
            },
            data.labs.map((lab, index) =>
              (0, emotion_react_cjs_prod.jsx)(
                /** @jsxImportSource @emotion/react */ node.Grid,
                {
                  'data-aos': 'fade-up',
                  key: `lab_${index}`,
                  item: true,
                  xs: 6,
                  md: 3,
                  lg: 3,
                },
                (0, emotion_react_cjs_prod.jsx)(
                  /** @jsxImportSource @emotion/react */ 'div',
                  {
                    style: {
                      display: 'flex',
                      width: '97%',
                      height: '80px',
                      alignItems: 'center',
                      background: 'white',
                    },
                  },
                  (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'div', {
                    style: {
                      flex: 1,
                    },
                  }),
                  (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'img', {
                    src: lab.image.src,
                    alt: lab.name,
                    style: {
                      objectFit: 'contain',
                      maxWidth: '100%',
                      maxHeight: '100%',
                    },
                  }),
                  (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'div', {
                    style: {
                      flex: 1,
                    },
                  }),
                ),
              ),
            ),
          ),
        ),
      );
    };

    /* harmony default export */ const Solution_Section1 = Section1; // CONCATENATED MODULE: ./diby-client-landing/pages/Solution/Section2.tsx
    const Section2_Section = (0, styles.styled)('div')(({ theme }) => ({
      width: '100%',
    }));
    const Section2_LeftGrid = (0, styles.styled)(node.Grid)(({ theme }) => ({
      [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        display: 'flex',
      },
      [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
      },
      marginTop: '16px',
    }));
    const Section2_Title = (0, styles.styled)('p')(({ theme }) => ({
      whiteSpace: 'pre-wrap',
      [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        lineHeight: '32px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '32px',
        lineHeight: '48px',
      },
      fontWeight: 'bold',
    }));
    const Desc1 = (0, styles.styled)('p')(({ theme }) => ({
      whiteSpace: 'pre-wrap',
      fontSize: '26px',
      lineHeight: '24px',
      fontWeight: 'bold',
      paddingTop: '6px',
    }));
    const Desc2 = (0, styles.styled)('p')(({ theme }) => ({
      whiteSpace: 'pre-wrap',
      fontSize: '18px',
      lineHeight: '24px',
      margin: '0',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: '90%',
      },
    }));
    const SlideButton = (0, styles.styled)(node.Button)(({ theme }) => ({
      [theme.breakpoints.down('lg')]: {
        width: '160px',
        height: '32px',
        fontWeight: 'bold',
        fontSize: '16px',
        color: 'white',
        backgroundColor: '#CCCCCC',
        borderRadius: '16px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '175px',
        height: '32px',
        fontWeight: 'bold',
        fontSize: '16px',
        color: 'white',
        backgroundColor: '#CCCCCC',
        borderRadius: '16px',
      },
      marginRight: '17px',
    }));

    const Section2 = ({ data }) => {
      const { 0: slideIndex, 1: setSlideIndex } = (0, react.useState)(0);
      const { 0: isMobile, 1: setIsMobile } = (0, react.useState)(window.innerWidth < Theme /* breakpoints.md */.A.md);
      const { 0: isTablet, 1: setIsTablet } = (0, react.useState)(window.innerWidth < Theme /* breakpoints.lg */.A.lg);

      const handleResize = () => {
        setIsMobile(window.innerWidth < Theme /* breakpoints.md */.A.md);
        setIsTablet(window.innerWidth < Theme /* breakpoints.lg */.A.lg);
      };

      (0, react.useEffect)(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      return (0, emotion_react_cjs_prod.jsx)(
        /** @jsxImportSource @emotion/react */ 'div',
        {
          style: {
            width: '100%',
            maxWidth: '1920px',
            margin: '0 auto',
          },
        },
        (0, emotion_react_cjs_prod.jsx)(
          /** @jsxImportSource @emotion/react */ Section2_Section,
          null,
          (0, emotion_react_cjs_prod.jsx)(
            /** @jsxImportSource @emotion/react */ Grid /* GridContainer */.T,
            {
              container: true,
              spacing: 0,
            },
            (0, emotion_react_cjs_prod.jsx)(
              /** @jsxImportSource @emotion/react */ node.Grid,
              {
                item: true,
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                style: {
                  marginBottom: '30px',
                },
              },
              (0, emotion_react_cjs_prod.jsx)(
                /** @jsxImportSource @emotion/react */ 'div',
                null,
                (0, emotion_react_cjs_prod.jsx)(
                  /** @jsxImportSource @emotion/react */ Section2_Title,
                  {
                    'data-aos': 'fade-up',
                  },
                  data.title,
                ),
              ),
            ),
            !isTablet &&
              (0, emotion_react_cjs_prod.jsx)(
                /** @jsxImportSource @emotion/react */ Section2_LeftGrid,
                {
                  item: true,
                  xs: 12,
                  md: 12,
                  lg: 5,
                },
                (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'div', {
                  style: {
                    flex: 1,
                  },
                }),
                (0, emotion_react_cjs_prod.jsx)(
                  /** @jsxImportSource @emotion/react */ node.Stack,
                  {
                    direction: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    style: {
                      width: 'fix-content',
                    },
                  },
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ Desc1,
                    {
                      'data-aos': 'fade-up',
                    },
                    data.slides[slideIndex].title,
                  ),
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ Desc2,
                    {
                      'data-aos': 'fade-up',
                    },
                    data.slides[slideIndex].desc,
                  ),
                ),
                (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'div', {
                  style: {
                    flex: 1,
                  },
                }),
              ),
            !isMobile &&
              (0, emotion_react_cjs_prod.jsx)(
                /** @jsxImportSource @emotion/react */ node.Grid,
                {
                  item: true,
                  xs: 12,
                  md: 12,
                  lg: 7,
                },
                (0, emotion_react_cjs_prod.jsx)(
                  /** @jsxImportSource @emotion/react */ 'div',
                  {
                    'data-aos': 'fade-up',
                  },
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ 'div',
                    {
                      style: {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                      },
                    },
                    data.slides.map((slide, index) =>
                      (0, emotion_react_cjs_prod.jsx)(
                        /** @jsxImportSource @emotion/react */ SlideButton,
                        {
                          key: `slide:${index}`,
                          style: {
                            backgroundColor: slideIndex === index ? '#24E1D5' : '#CCCCCC',
                          },
                          onClick: () => setSlideIndex(index),
                        },
                        slide.title,
                      ),
                    ),
                  ),
                  isTablet &&
                    (0, emotion_react_cjs_prod.jsx)(
                      /** @jsxImportSource @emotion/react */ node.Stack,
                      {
                        direction: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        style: {
                          width: 'fix-content',
                          marginTop: '20px',
                          marginBottom: '50px',
                        },
                      },
                      (0, emotion_react_cjs_prod.jsx)(
                        /** @jsxImportSource @emotion/react */ Desc1,
                        {
                          'data-aos': 'fade-up',
                        },
                        data.slides[slideIndex].title,
                      ),
                      (0, emotion_react_cjs_prod.jsx)(
                        /** @jsxImportSource @emotion/react */ Desc2,
                        {
                          'data-aos': 'fade-up',
                        },
                        data.slides[slideIndex].desc,
                      ),
                    ),
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ 'div',
                    {
                      style: {
                        marginTop: '24px',
                      },
                    },
                    (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'img', {
                      src: data.slides[slideIndex].image.src,
                      alt: 'slide',
                      style: {
                        width: '656px',
                        height: '472px',
                      },
                    }),
                  ),
                ),
              ),
            isMobile &&
              data.slides.map(slide =>
                (0, emotion_react_cjs_prod.jsx)(
                  /** @jsxImportSource @emotion/react */ node.Grid,
                  {
                    item: true,
                    xs: 12,
                    md: 12,
                    lg: 7,
                  },
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ node.Stack,
                    {
                      direction: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      style: {
                        width: 'fix-content',
                        marginTop: '20px',
                        marginBottom: '50px',
                      },
                    },
                    (0, emotion_react_cjs_prod.jsx)(
                      /** @jsxImportSource @emotion/react */ Desc1,
                      {
                        'data-aos': 'fade-up',
                      },
                      slide.title,
                    ),
                    (0, emotion_react_cjs_prod.jsx)(
                      /** @jsxImportSource @emotion/react */ Desc2,
                      {
                        'data-aos': 'fade-up',
                      },
                      slide.desc,
                    ),
                  ),
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ 'div',
                    {
                      style: {
                        marginTop: '24px',
                      },
                    },
                    (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'img', {
                      'data-aos': 'fade-up',
                      src: slide.image.src,
                      alt: 'slide',
                      style: {
                        width: '100%',
                        maxHeight: '100%',
                      },
                    }),
                  ),
                ),
              ),
          ),
        ),
      );
    };

    /* harmony default export */ const Solution_Section2 = Section2;
    // EXTERNAL MODULE: ./node_modules/@mui/material/node/Grid/landing.js
    var node_Grid = __webpack_require__(17373);
    var Grid_default = /*#__PURE__*/ __webpack_require__.n(node_Grid); // CONCATENATED MODULE: ./diby-client-landing/components/SolutionCard.tsx
    const Thumb = (0, styles.styled)('img')(({ theme }) => ({
      objectFit: 'contain',
      [theme.breakpoints.down('md')]: {
        width: 'calc(100vw - 64px)',
      },
      [theme.breakpoints.up('md')]: {
        width: '394px',
        height: '405px',
      },
    }));
    const SolutionCard_Title = (0, styles.styled)('p')(({ theme }) => ({
      [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 'bold',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '32px',
        lineHeight: '48px',
        fontWeight: 'bold',
      },
      whiteSpace: 'pre-wrap',
    }));
    const Desc = (0, styles.styled)('p')(({ theme }) => ({
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 'bold',
      whiteSpace: 'pre-wrap',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: '92%',
      },
    }));

    function SolutionCard(props) {
      var _props$style;

      const { title, desc, thumb } = props;
      const style = (_props$style = props.style) !== null && _props$style !== void 0 ? _props$style : {};
      return (0, emotion_react_cjs_prod.jsx)(
        /** @jsxImportSource @emotion/react */ Grid /* GridContainer */.T,
        {
          container: true,
          spacing: 16,
          direction: 'row-reverse',
          justifyContent: 'center',
          style: style,
        },
        (0, emotion_react_cjs_prod.jsx)(
          /** @jsxImportSource @emotion/react */ node.Grid,
          {
            item: true,
            xs: 12,
            md: 5,
            lg: 4,
          },
          (0, emotion_react_cjs_prod.jsx)(
            /** @jsxImportSource @emotion/react */ 'div',
            {
              'data-aos': 'fade-up',
              style: {
                display: 'flex',
                justifyContent: 'flex-start',
              },
            },
            (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Thumb, {
              src: thumb,
              alt: 'thumb',
            }),
          ),
        ),
        (0, emotion_react_cjs_prod.jsx)(
          /** @jsxImportSource @emotion/react */ node.Grid,
          {
            item: true,
            xs: 12,
            md: 7,
            lg: 8,
          },
          (0, emotion_react_cjs_prod.jsx)(
            /** @jsxImportSource @emotion/react */ SolutionCard_Title,
            {
              'data-aos': 'fade-up',
            },
            title,
          ),
          (0, emotion_react_cjs_prod.jsx)(
            /** @jsxImportSource @emotion/react */ Desc,
            {
              'data-aos': 'fade-up',
            },
            desc,
          ),
        ),
      );
    }

    /* harmony default export */ const components_SolutionCard = SolutionCard; // CONCATENATED MODULE: ./diby-client-landing/pages/Solution/Section3.tsx
    function _extends() {
      _extends =
        Object.assign ||
        function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
      return _extends.apply(this, arguments);
    }

    const Section3_Section = (0, styles.styled)('div')(({ theme }) => ({
      width: '100%',
      overflowX: 'hidden',
      paddingTop: '160px',
    }));
    const Section3_Header = (0, styles.styled)('p')(({ theme }) => ({
      [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 'bold',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '32px',
        lineHeight: '48px',
        fontWeight: 'bold',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '48px',
        lineHeight: '64px',
        fontWeight: 'bold',
      },
      color: '#3C3C46',
      whiteSpace: 'pre-wrap',
    }));

    const Section3 = ({ data }) => {
      const { title, cards } = data;
      const { 0: isMobile, 1: setIsMobile } = (0, react.useState)(window.innerWidth < Theme /* breakpoints.md */.A.md);

      const handleResize = () => {
        setIsMobile(window.innerWidth < Theme /* breakpoints.md */.A.md);
      };

      (0, react.useEffect)(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      const marginBottom = isMobile ? '150px' : '200px';
      return (0, emotion_react_cjs_prod.jsx)(
        /** @jsxImportSource @emotion/react */ Section3_Section,
        {
          style: {
            width: '100%',
            maxWidth: '1920px',
            margin: '0 auto',
          },
        },
        (0, emotion_react_cjs_prod.jsx)(
          /** @jsxImportSource @emotion/react */ Grid /* GridContainer */.T,
          {
            container: true,
          },
          (0, emotion_react_cjs_prod.jsx)(
            /** @jsxImportSource @emotion/react */ Grid_default(),
            {
              item: true,
              xs: 12,
              md: 12,
              lg: 12,
            },
            (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Section3_Header, null, title),
          ),
        ),
        cards.map((card, index) =>
          (0, emotion_react_cjs_prod.jsx)(
            /** @jsxImportSource @emotion/react */ components_SolutionCard,
            _extends(
              {
                'data-aos': 'fade-up',
              },
              card,
              {
                key: `sc${index}`,
                style: {
                  marginBottom: index === cards.length - 1 ? '100px' : marginBottom,
                },
              },
            ),
          ),
        ),
      );
    };

    /* harmony default export */ const Solution_Section3 = Section3; // CONCATENATED MODULE: ./diby-client-landing/pages/Solution/Section4.tsx
    const Section4_Section = (0, styles.styled)('div')(({ theme }) => ({
      width: '100%',
      background: '#3C3C46',
      paddingTop: '96px',
      paddingBottom: '64px',
    }));
    const Section4_LeftGrid = (0, styles.styled)(node.Grid)(({ theme }) => ({
      [theme.breakpoints.down('md')]: {
        alignItems: 'center',
        display: 'flex',
      },
      [theme.breakpoints.up('md')]: {
        alignItems: 'flex-start',
      },
      marginTop: '16px',
    }));
    const Section4_Header = (0, styles.styled)('p')(({ theme }) => ({
      [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        lineHeight: '32px',
        fontWeight: 'bold',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '32px',
        lineHeight: '48px',
        fontWeight: 'bold',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '48px',
        lineHeight: '64px',
        fontWeight: 'bold',
      },
      color: '#24E1D5',
    }));
    const Section4_Title = (0, styles.styled)('p')(({ theme }) => ({
      whiteSpace: 'pre-wrap',
      [theme.breakpoints.down('md')]: {
        fontSize: '24px',
        lineHeight: '32px',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '32px',
        lineHeight: '48px',
      },
      fontWeight: 'bold',
      color: 'white',
    }));
    const Section4_Desc1 = (0, styles.styled)('p')(({ theme }) => ({
      whiteSpace: 'pre-wrap',
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: 'bold',
      paddingTop: '6px',
      color: 'white',
    }));
    const Section4_Desc2 = (0, styles.styled)('p')(({ theme }) => ({
      whiteSpace: 'pre-wrap',
      fontSize: '16px',
      lineHeight: '24px',
      margin: '0',
      color: 'white',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      [theme.breakpoints.up('md')]: {
        width: '90%',
      },
    }));
    const Section4_SlideButton = (0, styles.styled)(node.Button)(({ theme }) => ({
      [theme.breakpoints.down('lg')]: {
        width: '160px',
        height: '32px',
        fontWeight: 'bold',
        fontSize: '16px',
        color: 'white',
        backgroundColor: '#CCCCCC',
        borderRadius: '16px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '175px',
        height: '32px',
        fontWeight: 'bold',
        fontSize: '16px',
        color: 'white',
        backgroundColor: '#CCCCCC',
        borderRadius: '16px',
      },
      marginRight: '17px',
    }));

    const Section4 = ({ data }) => {
      const { 0: slideIndex, 1: setSlideIndex } = (0, react.useState)(0);
      const { 0: isMobile, 1: setIsMobile } = (0, react.useState)(window.innerWidth < Theme /* breakpoints.md */.A.md);
      const { 0: isTablet, 1: setIsTablet } = (0, react.useState)(window.innerWidth < Theme /* breakpoints.lg */.A.lg);

      const handleResize = () => {
        setIsMobile(window.innerWidth < Theme /* breakpoints.md */.A.md);
        setIsTablet(window.innerWidth < Theme /* breakpoints.lg */.A.lg);
      };

      (0, react.useEffect)(() => {
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
      return (0, emotion_react_cjs_prod.jsx)(
        /** @jsxImportSource @emotion/react */ 'div',
        {
          style: {
            width: '100%',
          },
        },
        (0, emotion_react_cjs_prod.jsx)(
          /** @jsxImportSource @emotion/react */ Section4_Section,
          null,
          (0, emotion_react_cjs_prod.jsx)(
            /** @jsxImportSource @emotion/react */ Grid /* GridContainer */.T,
            {
              container: true,
              spacing: 0,
              style: {
                maxWidth: '1920px',
                margin: '0 auto',
              },
            },
            (0, emotion_react_cjs_prod.jsx)(
              /** @jsxImportSource @emotion/react */ node.Grid,
              {
                item: true,
                xs: 12,
                sm: 12,
                md: 12,
                lg: 12,
                style: {
                  marginBottom: '30px',
                },
              },
              (0, emotion_react_cjs_prod.jsx)(
                /** @jsxImportSource @emotion/react */ Section4_Header,
                {
                  'data-aos': 'fade-up',
                },
                '\uCEE4\uD53C\uD55C\uC794 \uC8FC\uBB38\uD558\uB4EF\uC774,',
                (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'br', null),
                '\uAC04\uD3B8\uD558\uAC8C \uD53C\uB4DC\uBC31\uC744 \uC8FC\uBB38\uD558\uC138\uC694.',
              ),
            ),
            !isTablet &&
              (0, emotion_react_cjs_prod.jsx)(
                /** @jsxImportSource @emotion/react */ Section4_LeftGrid,
                {
                  item: true,
                  xs: 12,
                  md: 12,
                  lg: 5,
                },
                (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'div', {
                  style: {
                    flex: 1,
                  },
                }),
                (0, emotion_react_cjs_prod.jsx)(
                  /** @jsxImportSource @emotion/react */ node.Stack,
                  {
                    direction: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    style: {
                      width: 'fix-content',
                    },
                  },
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ Section4_Desc1,
                    {
                      'data-aos': 'fade-up',
                    },
                    data.slides[slideIndex].title,
                  ),
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ Section4_Desc2,
                    {
                      'data-aos': 'fade-up',
                    },
                    data.slides[slideIndex].desc,
                  ),
                ),
                (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'div', {
                  style: {
                    flex: 1,
                  },
                }),
              ),
            !isMobile &&
              (0, emotion_react_cjs_prod.jsx)(
                /** @jsxImportSource @emotion/react */ node.Grid,
                {
                  item: true,
                  xs: 12,
                  md: 12,
                  lg: 7,
                },
                (0, emotion_react_cjs_prod.jsx)(
                  /** @jsxImportSource @emotion/react */ 'div',
                  {
                    'data-aos': 'fade-up',
                  },
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ 'div',
                    {
                      style: {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                      },
                    },
                    data.slides.map((slide, index) =>
                      (0, emotion_react_cjs_prod.jsx)(
                        /** @jsxImportSource @emotion/react */ Section4_SlideButton,
                        {
                          key: `slide:${index}`,
                          style: {
                            backgroundColor: slideIndex === index ? '#24E1D5' : '#CCCCCC',
                          },
                          onClick: () => setSlideIndex(index),
                        },
                        slide.title,
                      ),
                    ),
                  ),
                  isTablet &&
                    (0, emotion_react_cjs_prod.jsx)(
                      /** @jsxImportSource @emotion/react */ node.Stack,
                      {
                        direction: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        style: {
                          width: 'fix-content',
                          marginTop: '20px',
                          marginBottom: '50px',
                        },
                      },
                      (0, emotion_react_cjs_prod.jsx)(
                        /** @jsxImportSource @emotion/react */ Section4_Desc1,
                        {
                          'data-aos': 'fade-up',
                        },
                        data.slides[slideIndex].title,
                      ),
                      (0, emotion_react_cjs_prod.jsx)(
                        /** @jsxImportSource @emotion/react */ Section4_Desc2,
                        {
                          'data-aos': 'fade-up',
                        },
                        data.slides[slideIndex].desc,
                      ),
                    ),
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ 'div',
                    {
                      style: {
                        marginTop: '24px',
                      },
                    },
                    (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'img', {
                      src: data.slides[slideIndex].image.src,
                      alt: 'slide',
                      style: {
                        width: '656px',
                        height: '472px',
                      },
                    }),
                  ),
                ),
              ),
            isMobile &&
              data.slides.map(slide =>
                (0, emotion_react_cjs_prod.jsx)(
                  /** @jsxImportSource @emotion/react */ node.Grid,
                  {
                    item: true,
                    xs: 12,
                    md: 12,
                    lg: 7,
                  },
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ node.Stack,
                    {
                      direction: 'column',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      style: {
                        width: 'fix-content',
                        marginTop: '20px',
                        marginBottom: '50px',
                      },
                    },
                    (0, emotion_react_cjs_prod.jsx)(
                      /** @jsxImportSource @emotion/react */ Section4_Desc1,
                      {
                        'data-aos': 'fade-up',
                      },
                      slide.title,
                    ),
                    (0, emotion_react_cjs_prod.jsx)(
                      /** @jsxImportSource @emotion/react */ Section4_Desc2,
                      {
                        'data-aos': 'fade-up',
                      },
                      slide.desc,
                    ),
                  ),
                  (0, emotion_react_cjs_prod.jsx)(
                    /** @jsxImportSource @emotion/react */ 'div',
                    {
                      style: {
                        marginTop: '24px',
                      },
                    },
                    (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ 'img', {
                      'data-aos': 'fade-up',
                      src: slide.image.src,
                      alt: 'slide',
                      style: {
                        width: '100%',
                        maxHeight: '100%',
                      },
                    }),
                  ),
                ),
              ),
          ),
        ),
      );
    };

    /* harmony default export */ const Solution_Section4 = Section4;
    // EXTERNAL MODULE: ./diby-client-landing/components/Footer.tsx + 2 modules
    var Footer = __webpack_require__(46823); // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_ui1.png
    /* harmony default export */ const companylogo_ui1 = {
      src: '/_next/static/media/companylogo_ui1.a06c44e3.png',
      height: 81,
      width: 273,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEX////e3NvW1dX89u767+nu7u7l5eXUYtYnAAAAB3RSTlP8+v76/vr+V2AQgwAAAAlwSFlzAAALEgAACxIB0t1+/AAAABdJREFUCJljYGBgYWJiYwABZkZGVgYGAAD2ABmZnmvwAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_ui2.png
    /* harmony default export */ const companylogo_ui2 = {
      src: '/_next/static/media/companylogo_ui2.bebd2a52.png',
      height: 81,
      width: 273,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEX////z1tn+/v7p6en24OPe3d3v8PD46OoylOfOAAAACHRSTlP9/Pf8/f76+o1pFf8AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAaSURBVAiZY2BiYGFkZWZgYGBiYGdkZmNgAgABQgAlVUkGUAAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_ui3.png
    /* harmony default export */ const companylogo_ui3 = {
      src: '/_next/static/media/companylogo_ui3.b7ac7790.png',
      height: 81,
      width: 273,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEX////IyMja2trk5OTj4+PMzMxLv65tAAAABnRSTlP8/vr6+v4eLOYmAAAACXBIWXMAAAsSAAALEgHS3X78AAAAF0lEQVQImWNgYGBlZGRkAAFmJiYWBgYAALQAFFeGOcMAAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_ui4.png
    /* harmony default export */ const companylogo_ui4 = {
      src: '/_next/static/media/companylogo_ui4.ffce0809.png',
      height: 918,
      width: 2362,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAElBMVEX7/P33+PrL1eG1w9SVqcGsu88e/XKIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHUlEQVQImWNgYARBRgYGJhYmZmZWFiYGRkawEAMAAdwAI4X+ALsAAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UI/img_ui_top_chart.png
    /* harmony default export */ const img_ui_top_chart = {
      src: '/_next/static/media/img_ui_top_chart.c0f18698.png',
      height: 832,
      width: 768,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEX+/f38+/v8+/vj8PX++/zW6en49/T59/jz8/P7+/vv7+9Ci/Du7+/4/P3x+/xL4t2K7+ihw/j9Vo1sAAAADXRSTlP+ubz8s/xlkGCzQvxCY2MHiwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADxJREFUCJkdyVEOwCAIwNCqILANcfe/7OL69ZLiTUSiP9g65cSGqo7l2K6q+51Y/suxTADH4HDiLSKiXx9OOQIPFoX/GgAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UI/img_ui_top_bg.png
    /* harmony default export */ const img_ui_top_bg = {
      src: '/_next/static/media/img_ui_top_bg.f186c1f2.png',
      height: 768,
      width: 1008,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAACVBMVEXIyMjDw8PBwcElE5JZAAAAA3RSTlMEIBPsRQl+AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAG0lEQVQImWNgYoACJiZGCJuJkRHCAjHgIigMAAOeACC1M9QTAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UI/img_ui_ratio2.png
    /* harmony default export */ const img_ui_ratio2 = {
      src: '/_next/static/media/img_ui_ratio2.836a2a00.png',
      height: 432,
      width: 424,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEXOztC0tLZQUFDBwcLS0tXl5eaUlJRKSkrx8fLn5+mOjo7AwMGMkG5+AAAADHRSTlMBCRRJZB4dCGE1I04hgkE/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVQImT2LyQkAIBDEZu/D/vsVXTSvQAjwYI6RUlXNNNgSESlDME+l9nanY5c/YwMZKwCoCDpv4wAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UI/img_ui_align2.png
    /* harmony default export */ const img_ui_align2 = {
      src: '/_next/static/media/img_ui_align2.fea0e39e.png',
      height: 432,
      width: 424,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEVMaXHbztHY0uW2raj7/PP6+vr4+Pjr8eIxMz/9+/rh5uno4ffc6/bt8PHR9fD6+vv6+/rW2uf8/PzPv/C4yvG64+/RidVAAAAAEnRSTlMAB5wVjDhkDheZoPf5TIjzjJczXq6lAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVQImT3LOxbAIAgF0aei4DcEdf9bTZGjU91mgJOI/HAhMDM79PJ6X3LEaK3WxxLGXnOaJfRMRKrx3h8zwwGyu6wzIwAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UI/img_usecase_mision.png
    /* harmony default export */ const img_usecase_mision = {
      src: '/_next/static/media/img_usecase_mision.1b84247b.png',
      height: 946,
      width: 1314,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAOVBMVEX29/f//v739/f3+Pj4+vqA4Nv//P38+vr29/e68u/i+PfM9PH09/fO9PL19val6eX6+vr//v729/cu2dsOAAAAEXRSTlO57V1pe/3gw4b90dJdtpu394x/CJ8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA1SURBVAiZLclbCsAgDEXB05o0SR/Kdf+LFaF/A0MGHUhi6pIUMI/H3cfGXVUfob/OtGaW7wIrnAGnQZjuWgAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UI/img_usecase_qs.png
    /* harmony default export */ const img_usecase_qs = {
      src: '/_next/static/media/img_usecase_qs.6147c294.png',
      height: 946,
      width: 1314,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAANlBMVEX49/fV9vT8/Pz8+/v3+fn5+fnb3d75+fn7+vr29vfz8/PR8e/29/f+/v7o7+/k4OHp5OXt6+yplErqAAAADHRSTlO4/MV41mG7herCm/elelW9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAANUlEQVQImR3GSRLAIAwEsWYxxokHkv9/lip0Eh48Y+BEZt/fH5Czl5LcrHdBlaakinkzb24HJr0BaGTb/R4AAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UI/img_usecase_addq.png
    /* harmony default export */ const img_usecase_addq = {
      src: '/_next/static/media/img_usecase_addq.61a5af1c.png',
      height: 946,
      width: 1314,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAP1BMVEX7+/v6+Pj//P3Y5OT49fb0+fn7+/v6+vr5+vr4+vrf9fPq6uve3uDZ2dvz8/Pu+vn29/f+/f3m5+i+9fLf7u4Uhv90AAAAEHRSTlO1XW/49+CHw4HS7MK4vpvFjEbD5wAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADZJREFUCJkVxlsWwBAMQMFLkahXgv2vtafzNagwR28FMcs7uYCluh8D7lvvn3VOdnchlBhVNXwx9QHKLBhEwgAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UI/img_usecase_bottom_panelset.png
    /* harmony default export */ const img_usecase_bottom_panelset = {
      src: '/_next/static/media/img_usecase_bottom_panelset.10cca6d0.png',
      height: 596,
      width: 1088,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAKlBMVEXx9PTs7Ozk5OT6+/v//P35+/t+6+Ts7OzU9PL19PT7+/v9/Pz//f3K7+0VJOHKAAAADHRSTlP+ARFtgvz9I/k9jXv1aZoMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKklEQVQImR3GyQ0AMAgDsACBHgr7r1sVv4zl55Ik3ELo1mRX5SQlwSzwPRRwANBC7JBbAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UI/img_usecase_bottom_mission.png
    /* harmony default export */ const img_usecase_bottom_mission = {
      src: '/_next/static/media/img_usecase_bottom_mission.41c520c8.png',
      height: 596,
      width: 1088,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEXNzM3k5OT7+vr6+vrz/v3p/Pv6+/v19PTs7Oz19fX19fX8/v4c+tyDAAAACnRSTlMBEIVs/vx7+SM9JdkNjwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACtJREFUCJkdxrcNADAQA7H75CDtv68BsyInbq7MJFiWZILqmflxtw2UJO0HEesA3YYJNSQAAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UI/img_usecase_bottom_addq2.png
    /* harmony default export */ const img_usecase_bottom_addq2 = {
      src: '/_next/static/media/img_usecase_bottom_addq2.e3cdfae8.png',
      height: 736,
      width: 1088,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAMFBMVEVMaXHw8fHj4+P7+vr9/f3t+/r6+vrl6erv7+/s6uv8/Pz19fX8+/vq6ur+/v71+PgX3WScAAAADnRSTlMA/RCCcvw/9wS1w1ONH+EU6TUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAySURBVAiZHcZBEoAgDATBCTGgorv//y0FfWr+1r/MTBqXHNaOq8onIYmbPob1AjwRngsiGQFKk/C4sAAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_ux1.png
    /* harmony default export */ const companylogo_ux1 = {
      src: '/_next/static/media/companylogo_ux1.76371e0b.png',
      height: 81,
      width: 337,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEX////u9frj6vr////u8vuB/LPYAAAAA3RSTlPz8/NW0RiPAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGklEQVQImWNgZmZhYWFhZmZgYGBkYmJkYAAAAacAIzMF5hoAAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_ux2.png
    /* harmony default export */ const companylogo_ux2 = {
      src: '/_next/static/media/companylogo_ux2.2e5d1bde.png',
      height: 81,
      width: 337,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAADFBMVEX////////s7Ozt7e2B5B3gAAAAA3RSTlPy/vPivQz1AAAACXBIWXMAAAsSAAALEgHS3X78AAAAGElEQVQImWNgZGRkZmZkZGRgYGBgYgKSAADGABE/bzRJAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_ux3.png
    /* harmony default export */ const companylogo_ux3 = {
      src: '/_next/static/media/companylogo_ux3.6cffa243.png',
      height: 81,
      width: 337,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAADFBMVEX////////n3vvu5vqfbYu2AAAAA3RSTlPy/vPivQz1AAAACXBIWXMAAAsSAAALEgHS3X78AAAAGElEQVQImWNgZGRkZmZkZGRgYGBgYgKSAADGABE/bzRJAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UX/img_ux_top_chart.png
    /* harmony default export */ const img_ux_top_chart = {
      src: '/_next/static/media/img_ux_top_chart.0d2f8df6.png',
      height: 832,
      width: 768,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEX8/Pzz8/Pk+Pr1+Pnp6uzu7+/g6/z49/bv7+/08/P39/f39/f5+Pf2+vz9/v719/irA/aTAAAAEHRSTlO3Yf2z/fz9jUJnlYyV///+u6/pUgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADlJREFUCJk9xjcSgEAMA0A5HZck//+3zFCw1cLwmdjqrNbCYWaVDEdOUoaHo9v/0HA5SNeCISIC8wVCagHiSxWLWAAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UX/img_ux_top_bg.png
    /* harmony default export */ const img_ux_top_bg = {
      src: '/_next/static/media/img_ux_top_bg.a345d676.png',
      height: 769,
      width: 1008,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAABlBMVEXIyMjGxsZIxb1aAAAAAnRSTlMEDBtJRBcAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAaSURBVAiZY2CEAgYGBhAGURCaEc6HMeAqGAACkwAR2FOakAAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UX/img_ux_reason.png
    /* harmony default export */ const img_ux_reason = {
      src: '/_next/static/media/img_ux_reason.71355a77.png',
      height: 864,
      width: 848,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEVMaXG+vsBAjfOMj5dHR1E9PUZZWGFFRlBERE1ZWWE/P0lQT1hQUFhra3KBgYgJ6BhPAAAADXRSTlMACBMEZkKzcizkF7sN+8hiHgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADVJREFUCJkli0kOACAMAqeL1v3/zzVVDoQMAGCkVjRMBPxUyNCmq74OVKOOj/suORSKv6elXxjOAKlQECZTAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UX/img_ux_usecase.png
    /* harmony default export */ const img_ux_usecase = {
      src: '/_next/static/media/img_ux_usecase.d5ef4284.png',
      height: 864,
      width: 848,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVMaXHDxMfEx80aGiBAhu9OkO0pKTQxMTsiIi1sbHNQUFlXV19DQ0xlZW1aWmN6eoGGXFDyAAAAD3RSTlMACAQMGxE4PSHXgqpb76D/D/4cAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAOElEQVQImSWLSw7AIBQCB/y3Ve9/W/MsYTEJA9TEzbdfLEGbzw8kcsGO5kJ4klijx27GbnE0vXIAHKAAzez9fRUAAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UX/img_ux_recruit.png
    /* harmony default export */ const img_ux_recruit = {
      src: '/_next/static/media/img_ux_recruit.ed215e70.png',
      height: 946,
      width: 1314,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAPFBMVEX5+fn5+fn////i5uf5+fn7+/vq6uv9/f34+Pj6+vr19fX39/f29vbO4eH39/f09vb+/v7d3N7q7Oza5+fYU1fvAAAAD3RSTlPD7uz44NK7tYZ7m11d92hBpXMPAAAACXBIWXMAABYlAAAWJQFJUiTwAAAANElEQVQImQXBCwKAIAgFwbXUB/YB6f53bQZDa04MKvreBYo26gyhPMb3hCCzRyZc5q+73T8sugHFgFWWSwAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UX/img_usecase_qs.png
    /* harmony default export */ const usecase_UX_img_usecase_qs = {
      src: '/_next/static/media/img_usecase_qs.6147c294.png',
      height: 946,
      width: 1314,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAANlBMVEX49/fV9vT8/Pz8+/v3+fn5+fnb3d75+fn7+vr29vfz8/PR8e/29/f+/v7o7+/k4OHp5OXt6+yplErqAAAADHRSTlO4/MV41mG7herCm/elelW9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAANUlEQVQImR3GSRLAIAwEsWYxxokHkv9/lip0Eh48Y+BEZt/fH5Czl5LcrHdBlaakinkzb24HJr0BaGTb/R4AAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UX/img_ui_bottom_addq.png
    /* harmony default export */ const img_ui_bottom_addq = {
      src: '/_next/static/media/img_ui_bottom_addq.c8c2afd3.png',
      height: 736,
      width: 1088,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAMFBMVEVMaXH3+vrx8/T7+vro6Oj9/f3t+/rl5eX6+vrl6ers6uv8/Pz19fX8+/vt7e7+/v7grr78AAAAD3RSTlMA/v6CGXL8DkD3tcNTjPuICxX2AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAM0lEQVQImRXGQRLAIAwDsY0DAQqt//9bpjqJNuabmUmjWwr/iaoKBl2fbWCuFd4AjxTnAhwfAQ9pMEE8AAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UX/img_ux_bottom_purpose.png
    /* harmony default export */ const img_ux_bottom_purpose = {
      src: '/_next/static/media/img_ux_bottom_purpose.f80671d3.png',
      height: 596,
      width: 1088,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEX09PTz8/P7+/v8/Pzj4+Pq6Ojr6+v09PTe+fjX7Ov7+/v9/f3+/v4KQttmAAAADHRSTlP+AWyCEvshPfz9jXvlK8OkAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKElEQVQImRXGSQ4AMAgDsYFAN/H/91bxyazaT5KoyAHGofseInLMwT4QLQCt4jSShwAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_UX/img_usecase_bottom_panelset.png
    /* harmony default export */ const usecase_UX_img_usecase_bottom_panelset = {
      src: '/_next/static/media/img_usecase_bottom_panelset.10cca6d0.png',
      height: 596,
      width: 1088,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAKlBMVEXx9PTs7Ozk5OT6+/v//P35+/t+6+Ts7OzU9PL19PT7+/v9/Pz//f3K7+0VJOHKAAAADHRSTlP+ARFtgvz9I/k9jXv1aZoMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKklEQVQImR3GyQ0AMAgDsACBHgr7r1sVv4zl55Ik3ELo1mRX5SQlwSzwPRRwANBC7JBbAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_scenario1.png
    /* harmony default export */ const companylogo_scenario1 = {
      src: '/_next/static/media/companylogo_scenario1.d02e9b10.png',
      height: 81,
      width: 273,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAElBMVEX9/v/e5vni7vX+/v/k6vro8Pc2cWXYAAAAA3RSTlP19fXtZWaOAAAACXBIWXMAAAsSAAALEgHS3X78AAAAGklEQVQImWNgZmZlYWFhZmZgYGBiZGRkYAAAAbMAI/B2xWEAAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_scenario2.png
    /* harmony default export */ const companylogo_scenario2 = {
      src: '/_next/static/media/companylogo_scenario2.18893bea.png',
      height: 81,
      width: 273,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAACVBMVEXu7u7///////9ESRUDAAAAA3RSTlP69P5o8Ml6AAAACXBIWXMAAAsSAAALEgHS3X78AAAAF0lEQVQImWNgYmJgYGBgYmJgZAQxGBkBAJAADSqqKwoAAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_scenario3.png
    /* harmony default export */ const companylogo_scenario3 = {
      src: '/_next/static/media/companylogo_scenario3.d7ea67c8.png',
      height: 81,
      width: 273,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEX////08/PvxMb+7/Hb3Nz////a29r+7O6xXd3FAAAABXRSTlP1+vr19bcryjIAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAaSURBVAiZY2BlZWdiY2RlZWBgYGZiYWRgAAACLgAvC9/NjwAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_scenario4.png
    /* harmony default export */ const companylogo_scenario4 = {
      src: '/_next/static/media/companylogo_scenario4.ddca8dce.png',
      height: 81,
      width: 273,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEX////7+/rx8u/v8u7////d4tny8O9BZbDDAAAABHRSTlP39PX1vvOA4wAAAAlwSFlzAAALEgAACxIB0t1+/AAAABpJREFUCJljYGBhY2VlY2FhYGRgZGJmZGAAAAH2ACtMKQYtAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_scenario/img_scenario_top_chart.png
    /* harmony default export */ const img_scenario_top_chart = {
      src: '/_next/static/media/img_scenario_top_chart.b2db6fe7.png',
      height: 832,
      width: 768,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEX7/f308/P9/f39/Pzh9vnp6erm5eb39/f29vf4+Pbv7+/u7u7w9PShblebAAAADHRSTlP+YrO4/v39lYyOQkKF85UeAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAN0lEQVQImS3LyQ3AMAzEQK4syUe2/3oDB+FrPkQjImIcJtggFpiLTWamL77Ecnc1YlJdRvz78wIgAwDpWWIW2wAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_scenario/img_scenario_top_bg.png
    /* harmony default export */ const img_scenario_top_bg = {
      src: '/_next/static/media/img_scenario_top_bg.0e05a6c1.png',
      height: 768,
      width: 1008,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAElBMVEW6urqhoaG8vLzIyMjLy8vMzMxpmD+AAAAABnRSTlMBEgkZK09BNmbLAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAJ0lEQVQImS2JQQ4AMAyCULv/f3mxKQeDgUiybVQBUKdkkpV5s4X7fAZfADgc4LrVAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_scenario/img_scenario_hypothesis.png
    /* harmony default export */ const img_scenario_hypothesis = {
      src: '/_next/static/media/img_scenario_hypothesis.96e40847.png',
      height: 864,
      width: 848,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEVMaXH29vf9/fz5+fno6efs8Pfe5e/s6uj6+vn4+frw8PCcv/L8/Pzk7Pf6+vn29vb+/v3h6vd1DMDEAAAAEnRSTlMA4mzsBP4dNlL9KknK4Z9H//5r2GN3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAPElEQVQImSXGWw6AMAhFwVMLvVAfgf1v1hjna2BHxAI0verAiOz8U/WcyyAq5z3G/tLdKXQNd08BS5LsBUPKAeSC3YflAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_scenario/img_scenario_action.png
    /* harmony default export */ const img_scenario_action = {
      src: '/_next/static/media/img_scenario_action.0c61a07b.png',
      height: 864,
      width: 848,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEVMaXHs7Oz19fZuo/Hs7O719fX//////vz09PTu7u/O4Pvt7u719vfl5eXq6uxOTlft7ewPDxzu7u7Ly87s7O3R3/P9/f2np6s1NT+MjJIvLzpTUluUQZLOAAAAG3RSTlMAL6f9Q1sC/v4e/fyizd1MbUvF9fahfMlw7MxWv3roAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQElEQVQImS3LWQ6AIAxAwQcUWsBd3O9/T2Pi/A+QY8xAYleNJMb7sLb0jvNZrdYmzJeGooODyUJRAcRvvvva7wVRuAIAZLJKpwAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_scenario/img_usecase_align.png
    /* harmony default export */ const img_usecase_align = {
      src: '/_next/static/media/img_usecase_align.72272aec.png',
      height: 864,
      width: 848,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXE8f+XGys/V1dbs8PfJycowfO/39fO9v8Dc3Nuzvs7M2/Hz8/Ps7O3s7e73+Pje6Pd0OR+XAAAAD3RSTlMAOGQQ/DZXZ0k9J3NcISd4fOkoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAOUlEQVQImS2JSQ7AIAzEXEiYpBv8/7VQUV8s2cArSQ8gG6MLuMys38CRmVmhnWxaKe71OxER/telCTK+ASBx5dNjAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_scenario/img_usecase_mision.png
    /* harmony default export */ const usecase_scenario_img_usecase_mision = {
      src: '/_next/static/media/img_usecase_mision.1b84247b.png',
      height: 946,
      width: 1314,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAOVBMVEX29/f//v739/f3+Pj4+vqA4Nv//P38+vr29/e68u/i+PfM9PH09/fO9PL19val6eX6+vr//v729/cu2dsOAAAAEXRSTlO57V1pe/3gw4b90dJdtpu394x/CJ8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA1SURBVAiZLclbCsAgDEXB05o0SR/Kdf+LFaF/A0MGHUhi6pIUMI/H3cfGXVUfob/OtGaW7wIrnAGnQZjuWgAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_scenario/img_usecase_qs.png
    /* harmony default export */ const usecase_scenario_img_usecase_qs = {
      src: '/_next/static/media/img_usecase_qs.6147c294.png',
      height: 946,
      width: 1314,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAANlBMVEX49/fV9vT8/Pz8+/v3+fn5+fnb3d75+fn7+vr29vfz8/PR8e/29/f+/v7o7+/k4OHp5OXt6+yplErqAAAADHRSTlO4/MV41mG7herCm/elelW9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAANUlEQVQImR3GSRLAIAwEsWYxxokHkv9/lip0Eh48Y+BEZt/fH5Czl5LcrHdBlaakinkzb24HJr0BaGTb/R4AAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_scenario/img_usecase_addq.png
    /* harmony default export */ const usecase_scenario_img_usecase_addq = {
      src: '/_next/static/media/img_usecase_addq.61a5af1c.png',
      height: 946,
      width: 1314,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAP1BMVEX7+/v6+Pj//P3Y5OT49fb0+fn7+/v6+vr5+vr4+vrf9fPq6uve3uDZ2dvz8/Pu+vn29/f+/f3m5+i+9fLf7u4Uhv90AAAAEHRSTlO1XW/49+CHw4HS7MK4vpvFjEbD5wAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADZJREFUCJkVxlsWwBAMQMFLkahXgv2vtafzNagwR28FMcs7uYCluh8D7lvvn3VOdnchlBhVNXwx9QHKLBhEwgAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_scenario/img_usecase_bottom_panelset.png
    /* harmony default export */ const usecase_scenario_img_usecase_bottom_panelset = {
      src: '/_next/static/media/img_usecase_bottom_panelset.10cca6d0.png',
      height: 596,
      width: 1088,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAKlBMVEXx9PTs7Ozk5OT6+/v//P35+/t+6+Ts7OzU9PL19PT7+/v9/Pz//f3K7+0VJOHKAAAADHRSTlP+ARFtgvz9I/k9jXv1aZoMAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAKklEQVQImR3GyQ0AMAgDsACBHgr7r1sVv4zl55Ik3ELo1mRX5SQlwSzwPRRwANBC7JBbAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_scenario/img_usecase_bottom_mission.png
    /* harmony default export */ const usecase_scenario_img_usecase_bottom_mission = {
      src: '/_next/static/media/img_usecase_bottom_mission.41c520c8.png',
      height: 596,
      width: 1088,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEXNzM3k5OT7+vr6+vrz/v3p/Pv6+/v19PTs7Oz19fX19fX8/v4c+tyDAAAACnRSTlMBEIVs/vx7+SM9JdkNjwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACtJREFUCJkdxrcNADAQA7H75CDtv68BsyInbq7MJFiWZILqmflxtw2UJO0HEesA3YYJNSQAAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_scenario/img_scenario_bottom_addq.png
    /* harmony default export */ const img_scenario_bottom_addq = {
      src: '/_next/static/media/img_scenario_bottom_addq.a72cc589.png',
      height: 736,
      width: 1088,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAMFBMVEVMaXH3+vrx8/T7+vrn5+ft+/r9/f3j4+P6+vrl6ers6uv8/Pz19fXt7e78+/v+/v7E0WySAAAAD3RSTlMA/v6CGPxyDT/3tcNT+41SabRAAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAM0lEQVQImRXGSRLAIAwEsR4bswSS+f9vqegk2phfZiaN7gj5j6pKDHq8toG5lrwBngidCxxEAQ9Qmx4VAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_customer1.png
    /* harmony default export */ const companylogo_customer1 = {
      src: '/_next/static/media/companylogo_customer1.d1274baa.png',
      height: 81,
      width: 273,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEX////x8fHe3t7////h4eHFk9F4AAAAA3RSTlP1+vljSzZqAAAACXBIWXMAAAsSAAALEgHS3X78AAAAF0lEQVQImWNgZmZkYmFkZmZgYAAxGBgAAUIAHdYXa2QAAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_customer2.png
    /* harmony default export */ const companylogo_customer2 = {
      src: '/_next/static/media/companylogo_customer2.6c7bfe44.png',
      height: 81,
      width: 273,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAGFBMVEX////t7e3l4uHV5vH9/v7////W5O3B4/MnkUomAAAABXRSTlP3+vr18L2Bbd0AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAaSURBVAiZY2BgZWdjYmRlZWBhYGZmYmRgAAAB+gAt4y0a4gAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_customer3.png
    /* harmony default export */ const companylogo_customer3 = {
      src: '/_next/static/media/companylogo_customer3.922fba80.png',
      height: 81,
      width: 273,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAFVBMVEX9/fvr6+77+vf674vy8ejs7Ov///8P2SWxAAAABXRSTlP69fb69eOaqB4AAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAaSURBVAiZY2BjYGZhZWVgY2BgYmZhZGRiAAAB1QArlQhV2wAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/company/companylogo_customer4.png
    /* harmony default export */ const companylogo_customer4 = {
      src: '/_next/static/media/companylogo_customer4.18c15044.png',
      height: 81,
      width: 273,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAACVBMVEXh+ff///////8fyDv9AAAAA3RSTlP69P5o8Ml6AAAACXBIWXMAAAsSAAALEgHS3X78AAAAF0lEQVQImWNgYmJgYGBgYmJgZAQxGBkBAJAADSqqKwoAAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_customer/img_customer_top_chart.png
    /* harmony default export */ const img_customer_top_chart = {
      src: '/_next/static/media/img_customer_top_chart.bfd6203b.png',
      height: 832,
      width: 768,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAALVBMVEX09fXz8/P39/f7+/vt9vb6+vr09PTy8vLv7+/u7u709PT+/f73+fnl5eXZ9fQZm00VAAAAD3RSTlP9YpCz/Luys0JCc/////6kMiGVAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAOElEQVQImS3KMQ7AMAgEwcVAnOjA/39uhORuisHS3T1flgSSsQQwqHOIGkTFxaQ53d0yLPfeT34/MCsBe+/KJ8MAAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_customer/img_customer_top_bg.png
    /* harmony default export */ const img_customer_top_bg = {
      src: '/_next/static/media/img_customer_top_bg.0ab365f5.png',
      height: 768,
      width: 1008,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAABlBMVEXCwsLAwMB35xj4AAAAAnRSTlMFDAJSdVYAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAbSURBVAiZY2BkZAABRjCCMhnBAE5BIVwBAwMAAqkAFylPs/EAAAAASUVORK5CYII=',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_customer/img_customer_template.png
    /* harmony default export */ const img_customer_template = {
      src: '/_next/static/media/img_customer_template.00f76923.png',
      height: 864,
      width: 848,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEX39/f89/C1zO32+f3y8Ozn5+nt7exMaXHm6Ozk6O/Fx8zg3drr6+qoxe/X5v779/L6+PT5+vvL3PXs7e7+/v3Kys2WsNi+0vDZ2+A74ieHAAAAFHRSTlMme/n3/g88AAR5/GRh+fv06Jf8Gha9AGQAAAAJcEhZcwAAFiUAABYlAUlSJPAAAABASURBVAiZHcZJEoAgDADBAQIJi2sF9f8vtbRPjQFkVUiyeVADuaLXL/uy+kHGNMwmXjCtdzzTn9keL6jS+xj5BUZKAjawmyhXAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_customer/img_customer_similar.png
    /* harmony default export */ const img_customer_similar = {
      src: '/_next/static/media/img_customer_similar.2c69e4ea.png',
      height: 864,
      width: 848,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEVMaXHz9Pb+/fvb29zw8fTu7evz9fjt7e36+fnx8vP6+fn8/Pv////u7e35+fn9/f3G0OC4wtPX2d/e5fEzVrJnAAAADnRSTlMAkEYH/kTLN1Ik0t5qyPvzRCoAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA9SURBVAiZNYtJCgAgDMRGba11qdv//yoK5hQCAT4So/MKINEYVBGQujl9pVtpuegVm3MLJJOtRXI/Zs/hADafAc6zsU99AAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_customer/img_usecase_align.png
    /* harmony default export */ const usecase_customer_img_usecase_align = {
      src: '/_next/static/media/img_usecase_align.72272aec.png',
      height: 864,
      width: 848,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXE8f+XGys/V1dbs8PfJycowfO/39fO9v8Dc3Nuzvs7M2/Hz8/Ps7O3s7e73+Pje6Pd0OR+XAAAAD3RSTlMAOGQQ/DZXZ0k9J3NcISd4fOkoAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAOUlEQVQImS2JSQ7AIAzEXEiYpBv8/7VQUV8s2cArSQ8gG6MLuMys38CRmVmhnWxaKe71OxER/telCTK+ASBx5dNjAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_customer/img_customer_recruit.png
    /* harmony default export */ const img_customer_recruit = {
      src: '/_next/static/media/img_customer_recruit.750e9f68.png',
      height: 946,
      width: 1314,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAG1BMVEX7+/v+/v74+Pn8/Pz7+/v39/f5+fn////39/hNwg/FAAAAB3RSTlO6+obEfF2fkK/AUgAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACpJREFUCJkdyckJADAMA0FdQe6/4mDva2AhbBYw3QwMWRYHLnynxlOS6H0QmACwwxVHCAAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_customer/img_customer_stq.png
    /* harmony default export */ const img_customer_stq = {
      src: '/_next/static/media/img_customer_stq.9f1773a6.png',
      height: 946,
      width: 1314,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAQlBMVEX3+fn7+/v6+Pj//P35+/v59fb0+vn5+vr09fX9+/ve9fPz8/TZ2dve3uDV6OjZ3uD9/Pz09/fn6erh8O/C9vO18+9O4/QEAAAAEHRSTlPDh11v0vfggbi37Ju+uPf4hs/xWwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADVJREFUCJkFwQcCwCAIALFzAnYI2v7/qyYIet2PJojoqzmYt7pmGLpH3W8YfH93d8ipFBHJBzH2Acxd3SanAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_customer/img_usecase_addq.png
    /* harmony default export */ const usecase_customer_img_usecase_addq = {
      src: '/_next/static/media/img_usecase_addq.61a5af1c.png',
      height: 946,
      width: 1314,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAP1BMVEX7+/v6+Pj//P3Y5OT49fb0+fn7+/v6+vr5+vr4+vrf9fPq6uve3uDZ2dvz8/Pu+vn29/f+/f3m5+i+9fLf7u4Uhv90AAAAEHRSTlO1XW/49+CHw4HS7MK4vpvFjEbD5wAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAADZJREFUCJkVxlsWwBAMQMFLkahXgv2vtafzNagwR28FMcs7uYCluh8D7lvvn3VOdnchlBhVNXwx9QHKLBhEwgAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_customer/img_persona_bottom_addq.png
    /* harmony default export */ const img_persona_bottom_addq = {
      src: '/_next/static/media/img_persona_bottom_addq.d27881af.png',
      height: 736,
      width: 1088,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAALVBMVEXNzc33+vrx8/To6Oj7+vrt+/r9/f3l6er6+vrs6uv8/Pz19fXt7e78+/v+/v4X9aJ4AAAADnRSTlMB/v4Vgvxy90C1w1P7jcEgb2sAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAxSURBVAiZFcbJEcAgEAPBkdg1+FL+4VL0qxmsv6qKwRVbOVF368RfEmDNqTwAt613AxmHAPZ3ECYyAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_customer/img_persona_bottom_panelset.png
    /* harmony default export */ const img_persona_bottom_panelset = {
      src: '/_next/static/media/img_persona_bottom_panelset.9f619d4c.png',
      height: 596,
      width: 1088,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAKlBMVEXy9fTGxsbm5ub8/PzR8/H4+/v//f7+/PyB7OX09PTs7Oz09PT7/Pz//PywcDQ3AAAADXRSTlP+ARJw/fyDgf1nIz2N4JafgAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACpJREFUCJkdxscRADAIAzBDaCnef90c6CUcvS8jEiqLMOPEqnziJCGy0T4VqADcBVI6KwAAAABJRU5ErkJggg==',
    }; // CONCATENATED MODULE: ./diby-client-landing/assets/images/usecase_customer/img_persona_bottom_qs.png
    /* harmony default export */ const img_persona_bottom_qs = {
      src: '/_next/static/media/img_persona_bottom_qs.f4e65fa1.png',
      height: 596,
      width: 1088,
      blurDataURL:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJFBMVEXCw8P19fXo6uv7+/vm5ub9/f319fXr6+v09PT7+/v8/f3t7e4t9vT6AAAACnRSTlMD/fyCEndmIT2M5KvhigAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAClJREFUCJljYGfg4GRmZmZmYGFg5eLmZuQCM5iYYAyQCAMDGyMTNzcjABG0AMY+f0tvAAAAAElFTkSuQmCC',
    }; // CONCATENATED MODULE: ./diby-client-landing/pages/Solution/landing.tsx
    function Solution1() {
      const data = {
        section1: {
          chart: img_ui_top_chart,
          bg: img_ui_top_bg,
          header: 'UI 진단 테스트',
          title: '핵심 기능을 사용하는 과정에서\n사용자의 불편함을 파악하고\n개선 우선순위를 선정하세요.',
          labs: [
            {
              name: 'SolutionImage1_1',
              image: companylogo_ui1,
            },
            {
              name: 'SolutionImage1_2',
              image: companylogo_ui2,
            },
            {
              name: 'SolutionImage1_3',
              image: companylogo_ui3,
            },
            {
              name: 'SolutionImage1_4',
              image: companylogo_ui4,
            },
          ],
        },
        section2: {
          title: '응답자가 UI 진단 테스트에 참여하는 방법',
          slides: [
            {
              title: '1. 미션수행',
              desc:
                'Diby 패널 중, 원하시는 조건에 맞는 응답자를 선별합니다.\n' +
                '선별된 응답자에게 프로덕트의 핵심 기능을 직접 경험하는 미션을 지시합니다.\n' +
                '미션 수행 여부를 인증화면 등으로 확인합니다. ',
              image: img_usecase_mision,
            },
            {
              title: '2. 설문 응답',
              desc: 'UI 진단 테스트에서 필수로 포함해야하는 질문과 원하시는 질문을 추가한 질문 세트에 응답합니다. ',
              image: img_usecase_qs,
            },
            {
              title: '3. 피드백 정제',
              desc: 'Diby 의 불성실 피드백 알고리즘으로 성실한 피드백을 남긴 응답자에게만 보상을 지급합니다. ',
              image: img_usecase_addq,
            },
          ],
        },
        section3: {
          title: '응답자가 서비스의 핵심기능을 경험한 후,\n응답자의 불편사항 문장형 피드백을 모두 읽고,\n분류하는 시간을 절약해드립니다. ',
          cards: [
            {
              title: 'Diby 패널이\n사용상의 불편함을\n주관식으로 답변하기',
              desc: `Diby 패널 중 원하는 조건으로 표집하거나,
제공해드리는 외부 링크를 통해 실제 사용자 중에서
응답자를 모집할 수 있습니다. 

응답자는 주어진 미션을 수행하며 서비스를 경험하고
그 과정에서 겪은 불편사항을 주관식으로 응답합니다.
실제 미션을 잘 수행했는지는
인증사진(스크린샷)을 제출하여 확인합니다.`,
              thumb: img_ui_ratio2.src,
            }, // {
            //   title: '불편사항의 원인 파악하기',
            //   desc: '불편요소가 왜 발생했는지 컴포넌트 기준으로 분석합니다.\n가장 많은 비율을 차지한 원인과 상세 피드백을 확인하세요.\nDiby에서 간략한 TDL을 제시합니다.',
            //   thumb: SolutionThumb1_2.src,
            // },
            {
              title: '피드백의\n원인과 결과를 분석해서\n빈도별 우선순위 정하기',
              desc: `Diby 의 자연어처리 기술을 통해 
수집한 주관식 응답을 라벨링합니다.

라벨은 불편함의 대상, 시점, 이유 카테고리에서 진행되며,
 제이콥 닐슨의 휴리스틱 10 요소와 Diby의 자체 기준으로 개발했습니다.

가장 많이 라벨링된 원인과 결과로
사용성 개선 우선순위를 선정해보세요.`,
              thumb: img_ui_align2.src,
            },
          ],
        },
        section4: {
          slides: [
            {
              title: '1. 리서치 종류 선택',
              desc: '어떻게 리서치를 시작히지?\n이제 고민하지 마세요.\nDiby에서 리서치를 통해 달성하고 싶은 목적별로 리서치 종류를 제공하고 있습니다.\n각 테스트에서 제공하는 공통질문 이외에도 원하시는 질문을 추가하거나, Diby의 추천 질문을 선택하실 수 있습니다.',
              image: img_usecase_bottom_addq2,
            },
            {
              title: '2. 응답자 조건 설정',
              desc: '원하시는 응답자의 인구통계학 조건을 설정하세요.\n성별, 연령대, 사용 기기는 기본으로 제공하며, 추가로 조건을 커스텀할 수 있습니다.\n설정하신 조건으로 Diby 패널 중, 응답자를 선별합니다.',
              image: img_usecase_bottom_panelset,
            },
            {
              title: '3. 지시할 미션 입력',
              desc: '응답자가 수행할 미션을 설정하세요.\n미션 수행 여부는 인증이미지 등으로 100% 검수하며, 미션 수행 성공비율을 파악할 수 있습니다.\n미션은 총 3개까지 입력할 수 있습니다.',
              image: img_usecase_bottom_mission,
            },
          ],
        },
      };
      return (0, emotion_react_cjs_prod.jsx)(
        /** @jsxImportSource @emotion/react */ Page /* default */.Z,
        null,
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ AppBar /* default */.Z, null),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section1, {
          data: data.section1,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section2, {
          data: data.section2,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section3, {
          data: data.section3,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section4, {
          data: data.section4,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Footer /* default */.Z, null),
      );
    }

    function Solution2() {
      const data = {
        section1: {
          chart: img_ux_top_chart,
          bg: img_ux_top_bg,
          header: 'UX 포지션 테스트',
          title: '고객이 프로덕트를 어떻게 인식하고\n있는지를 파악하고,\n고객 만족도가 가장 높은 지점을 찾아\n팀의 기획의도와 일치시키세요. ',
          labs: [
            {
              name: 'SolutionImage2_1',
              image: companylogo_ux1,
            },
            {
              name: 'SolutionImage2_2',
              image: companylogo_ux2,
            },
            {
              name: 'SolutionImage2_3',
              image: companylogo_ux3,
            },
          ],
        },
        section2: {
          title: '응답자가 UX 포지션 테스트에 참여하는 방법',
          slides: [
            {
              title: '1. 실사용 고객 모집',
              desc:
                'Diby 패널 중, 테스트 대상 프로덕트의 최근 1년 이내 실사용자를 선별합니다.\n' +
                '초기 서비스이거나 보다 구체적인 조건(활성사용자 기준 적용 등)을 원하시는 경우,\n' +
                '프로덕트 화면에서 띄우거나 자체 메시지 등으로 모집하실 수 있도록 외부 링크를 제공해드립니다. ',
              image: img_ux_recruit,
            },
            {
              title: '2. 설문 응답',
              desc: 'UX 포지션 테스트에서 인식 평가를 위해 제공하는 질문에 응답합니다.\n질문을 통해 프로덕트 사용의 동기부여 요인 (즐거움 / 유용함)과 의사결정 권한의 정도를 파악하고, 두가지 축을 설명할 수 있는 경험 요소(UX Factor)를 측정합니다.\n성실한 응답만을 선별하여 보상을 지급하고, 프로덕트의 UX 포지션을 계산합니다.\n프로덕트의 UX 포지션을 분석할 때, 팀에도 유사한 설문을 진행하여 그 결과값을 비교합니다. ',
              image: usecase_UX_img_usecase_qs,
            },
          ],
        },
        section3: {
          title: '추상적인 프로덕트의 UX 전략을 정량화하세요.',
          cards: [
            {
              title: '동기부여 측정하기\n(Motivation)',
              desc:
                '고객이 어떤 경험 요소(UX Factor)로 프로덕트를 즐겁거나 유용하다고 인식하는지 파악합니다.\n' +
                '고객이 서비스를 사용하는 이유가 프로덕트 기획의도와 일치하는지 확인할 수 있습니다. \n' +
                '원하는 지점으로 이동하기 위해 고려해야할 경험 요소를 제안드립니다. ',
              thumb: img_ux_reason.src,
            },
            {
              title: '사용방식 측정하기\n(Degree of Autonomy)',
              desc:
                '고객이 어떤 경험 요소(UX Factor)로 프로덕트 사용과정에서 의사결정 권한을 인식하는지 파악합니다.\n' +
                '의사결정 권한은 고객에게 있거나 시스템에게 있을 때, 만족도가 어떠한지 확인해보세요. \n' +
                '고객의 인식이 프로덕트 기획의도와 일치하는지 비교하고\n' +
                '원하는 지점으로 이동하기 위해 고려해야할 경험 요소를 제안드립니다. ',
              thumb: img_ux_usecase.src,
            }, // {
            //   title: '고객의 프로덕트 인식 \n(Locus of Control)',
            //   desc: '고객이 전반적으로 프로덕트를 어떻게 인식하는지 파악합니다.\n고객은 인식에 따라 프로덕트 사용여부를 판단할 수 있습니다.',
            //   thumb: SolutionThumb2_3.src,
            // },
          ],
        },
        section4: {
          slides: [
            {
              title: '1. 리서치 종류 선택',
              desc:
                '어떻게 리서치를 시작하지?\n' +
                '이제 고민하지 마세요. \n' +
                'Diby에서 리서치를 통해 달성하고 싶은 목적별로 테스트를 제공하고 있습니다.\n테스트에서 제공하는 공통질문 이외에도 원하시는 질문을 추가하거나, Diby의 추천 질문을 선택하실 수 있습니다.',
              image: img_ui_bottom_addq,
            },
            {
              title: '2. 내부 설계의도 확인',
              desc: 'Diby의 팀용 UX 포지션 분석 문항에 응답하세요.\n응답한 결과를 바탕으로 팀에서 프로덕트를 어떻게 인식하고 있는지 계산합니다.\n팀의 UX 설계 의도와 실사용 고객의 응답을 비교하고, 기획의도와 고객의 인식을 일치시키기 위해 무엇을 해야하는지 제안합니다. ',
              image: img_ux_bottom_purpose,
            },
            {
              title: '3. 세그먼트 기준 설정',
              desc:
                '고객의 인식 결과를 확인할 때, 적용하고 싶은 기준을 설정해주세요.\n' +
                '성별, 연령대와 같은 일반적인 인구통계학 기준부터\n' +
                '활성사용의 정도, 서비스 만족도, BEI 등 다양한 기준으로 결과를 분류하여 비교할 수 있습니다. ',
              image: usecase_UX_img_usecase_bottom_panelset,
            },
          ],
        },
      };
      return (0, emotion_react_cjs_prod.jsx)(
        /** @jsxImportSource @emotion/react */ Page /* default */.Z,
        null,
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ AppBar /* default */.Z, null),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section1, {
          data: data.section1,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section2, {
          data: data.section2,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section3, {
          data: data.section3,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section4, {
          data: data.section4,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Footer /* default */.Z, null),
      );
    }

    function Solution3() {
      const data = {
        section1: {
          chart: img_scenario_top_chart,
          bg: img_scenario_top_bg,
          header: '시나리오 테스트',
          title: '가설 검증과 AB 테스트를 통해\n팀의 커뮤니케이션 비용을 줄이세요.',
          labs: [
            {
              name: 'SolutionImage3_1',
              image: companylogo_scenario1,
            },
            {
              name: 'SolutionImage3_2',
              image: companylogo_scenario2,
            },
            {
              name: 'SolutionImage3_3',
              image: companylogo_scenario3,
            },
            {
              name: 'SolutionImage3_4',
              image: companylogo_scenario4,
            },
          ],
        },
        section2: {
          title: '응답자가 시나리오 검증에 참여하는 방법',
          slides: [
            {
              title: '1. 미션 수행',
              desc:
                'Diby 패널 중, 원하시는 조건에 맞는 응답자를 선별합니다.\n' +
                '선별된 응답자에게 프로덕트의 핵심 기능을 직접 경험하는 미션을 지시합니다.\n' +
                '미션 수행 여부를 인증화면 등으로 확인합니다. ',
              image: usecase_scenario_img_usecase_mision,
            },
            {
              title: '2. 설문 응답',
              desc: 'Diby 가 추천한 가설과 원하시는 질문을 추가한 질문 세트에 응답합니다. ',
              image: usecase_scenario_img_usecase_qs,
            },
            {
              title: '3. 피드백 정제',
              desc: 'Diby 의 불성실 피드백 알고리즘으로 성실한 피드백을 남긴 응답자에게만 보상을 지급합니다. ',
              image: usecase_scenario_img_usecase_addq,
            },
          ],
        },
        section3: {
          title: '주어진 시나리오에서 응답자가\n어떻게 행동하거나 느끼는지를\n확인하여 데이터 기반으로 의사결정하세요.',
          cards: [
            {
              title: '고객 피드백으로 가설 검증하기',
              desc: '직접 수립한 가설 혹은 목적에 맞게 Diby 가 추천한 가설로 문항을 만듭니다.\n가설을 수립할 때 목표도 함께 설정하여 고객의 행동 혹은 답변으로 가설이 검정되었는지 여부를 파악합니다.',
              thumb: img_scenario_hypothesis.src,
            },
            {
              title: '시나리오별 응답자의 행동 확인하기',
              desc:
                "응답자가 미션을 도움말 없이 달성한 정도로 ‘미션 성공비율' 을 계산합니다.\n" +
                '미션을 수행하는 과정에서 응답자의 인식과 선호를 확인할 수 있습니다.',
              thumb: img_scenario_action.src,
            },
            {
              title: '원하는 기준으로 정렬하기',
              desc: `성별, 연령대 혹은 최초 설계시 설정한 추가 기준
(중고차를 구매해본 자 / 한번도 구매한 적 없는 자, 친구에게 돈을 빌려본 적 있는 자 / 빌려본 적 없는 자 등)으로
불편사항의 언급빈도와 치명도가 어떻게 달라지는지 확인해보세요.
프로덕트별로 가장 집중해야할 고객 집단이 느끼는 불편사항을 우선적으로 개선할 수 있습니다.`,
              thumb: img_usecase_align.src,
            },
          ],
        },
        section4: {
          slides: [
            {
              title: '1. 리서치 종류 선택',
              desc:
                '어떻게 리서치를 시작하지?\n' +
                '이제 고민하지 마세요. \n' +
                'Diby에서 리서치를 통해 달성하고 싶은 목적별로 리서치 방법론을 테스트로 제공하고 있습니다.\n테스트에서 제공하는 공통질문 이외에도 원하시는 질문을 추가하거나, Diby의 추천 질문을 선택하실 수 있습니다.',
              image: img_scenario_bottom_addq,
            },
            {
              title: '2. 응답자 조건 설정',
              desc:
                '원하시는 응답자의 인구통계학 조건을 설정하세요.\n' +
                '성별, 연령대, 사용 기기는 기본으로 제공하며, 추가로 조건을 커스텀할 수 있습니다. \n' +
                '설정하신 조건으로 Diby 패널 중, 응답자를 선별합니다.',
              image: usecase_scenario_img_usecase_bottom_panelset,
            },
            {
              title: '3. 지시할 미션 입력',
              desc: '응답자가 수행할 미션을 설정하세요.\n미션 수행 여부는 인증이미지 등으로 100% 검수하며, 미션 수행 성공비율을 파악할 수 있습니다.\n미션은 총 3개까지 입력할 수 있습니다.',
              image: usecase_scenario_img_usecase_bottom_mission,
            },
          ],
        },
      };
      return (0, emotion_react_cjs_prod.jsx)(
        /** @jsxImportSource @emotion/react */ Page /* default */.Z,
        null,
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ AppBar /* default */.Z, null),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section1, {
          data: data.section1,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section2, {
          data: data.section2,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section3, {
          data: data.section3,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section4, {
          data: data.section4,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Footer /* default */.Z, null),
      );
    }

    function Solution4() {
      const data = {
        section1: {
          chart: img_customer_top_chart,
          bg: img_customer_top_bg,
          header: '퍼소나 테스트',
          title: '프로덕트 사용 방식 혹은 호감도가\n높은 집단이 어떤 특징을 가졌는지\n확인하여 퍼소나를 정의하세요.',
          labs: [
            {
              name: 'SolutionImage4_1',
              image: companylogo_customer1,
            },
            {
              name: 'SolutionImage4_2',
              image: companylogo_customer2,
            },
            {
              name: 'SolutionImage4_3',
              image: companylogo_customer3,
            },
            {
              name: 'SolutionImage4_4',
              image: companylogo_customer4,
            },
          ],
        },
        section2: {
          title: '응답자가 퍼소나 테스트에 참여하는 방법',
          slides: [
            {
              title: '1. 응답자 모집',
              desc:
                'Diby 패널 중, 테스트 대상 프로덕트의 최근 1년 이내 실사용자를 선별합니다.\n' +
                '구체적인 조건(활성사용자 기준 적용 등)을 원하시는 경우,\n' +
                '프로덕트 화면에서 띄우거나 자체 메시지 등으로 모집하실 수 있도록 외부 링크를 제공해드립니다. \n' +
                '초기서비스이거나 프로덕트가 없을 때는 프로덕트에 대한 상세한 설명을 첨부하거나 프로토타입을 경험하게 할 수 있습니다.',
              image: img_customer_recruit,
            },
            {
              title: '2. 설문 응답',
              desc: '퍼소나 분석 템플릿에서 퍼소나 분류를 위해 제공하는 질문에 응답합니다.\n그 이외에도 직접 추가하신 문항에 응답합니다.\n이후 퍼소나의 분포와 퍼소나별 만족도 등을 파악할 수 있습니다.',
              image: img_customer_stq,
            },
            {
              title: '3. 피드백 정제',
              desc: 'Diby 의 불성실 피드백 알고리즘으로 성실한 피드백을 남긴 응답자에게만 보상을 지급합니다. ',
              image: usecase_customer_img_usecase_addq,
            },
          ],
        },
        section3: {
          title: '실사용 고객 혹은 잠재고객의\n프로덕트 선호도별로 고객의 특징을\n파악하여 퍼소나를 정의하세요.',
          cards: [
            {
              title: '퍼소나 분류 문항 선택하기',
              desc: '퍼소나를 분류하기 위한 다양한 기준 문항을 제공합니다.\n라이프 스타일, 프로덕트 사용 패턴, 개인의 신념 혹은 가치관 등을 통해\n퍼소나를 분류하고 이후 응답을 교차분석할 수 있습니다.  ',
              thumb: img_customer_template.src,
            },
            {
              title: '응답별로 퍼소나 파악하기',
              desc: '특정 응답을 한 패널이 어떠한 퍼소나 기준으로 분포되어있는지 파악합니다.\n만족도, 추천의향, 추가 기능 등 핵심 의사결정을 위한 문항에서 응답별로\n퍼소나가 어떻게 분포되어있는지 확인해보세요.',
              thumb: img_customer_similar.src,
            },
            {
              title: '원하는 기준으로 정렬하기',
              desc:
                '원하는 고객 세그먼트별로 응답을 재정렬할 수 있습니다.\n성별, 연령대 혹은 최초 설계시 설정한 추가 기준\n(중고차를 구매해본 자 / 한번도 구매한 적 없는 자, 친구에게 돈을 빌려본 적 있는 자 / 빌려본 적 없는 자 등)\n으로 불편사항의 언급빈도와 치명도가 어떻게 달라지는지 확인해보세요.\n' +
                '프로덕트별로 가장 집중해야할 고객 집단이 느끼는 불편사항을 우선적으로 개선할 수 있습니다.  ',
              thumb: usecase_customer_img_usecase_align.src,
            },
          ],
        },
        section4: {
          slides: [
            {
              title: ' 1. 테스트 선택',
              desc:
                '어떻게 리서치를 시작하지?\n' +
                '이제 고민하지 마세요. \n' +
                'Diby에서 리서치를 통해 달성하고 싶은 목적별로 테스트를 제공하고 있습니다.\n테스트에서 제공하는 공통질문 이외에도 원하시는 질문을 추가하거나, Diby의 추천 질문을 선택하실 수 있습니다.',
              image: img_persona_bottom_addq,
            },
            {
              title: '2. 퍼소나 조건 설정',
              desc:
                '원하시는 퍼소나의 조건을 설정하세요.\n' +
                '성별, 연령대, 사용 기기는 기본으로 제공하며, 추가로 조건을 커스텀할 수 있습니다. \n' +
                '설정하신 조건으로 Diby 패널 중, 응답자를 선별합니다.',
              image: img_persona_bottom_panelset,
            },
            {
              title: '3. 문항선택 / 직접입력',
              desc: '리서치의 목적에 맞게 Diby 가 추천한 문항을\n선택하고 커스텀하세요.\n혹은 원하시는 문항을 직접 제작할 수 있습니다.',
              image: img_persona_bottom_qs,
            },
          ],
        },
      };
      return (0, emotion_react_cjs_prod.jsx)(
        /** @jsxImportSource @emotion/react */ Page /* default */.Z,
        null,
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ AppBar /* default */.Z, null),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section1, {
          data: data.section1,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section2, {
          data: data.section2,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section3, {
          data: data.section3,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Solution_Section4, {
          data: data.section4,
        }),
        (0, emotion_react_cjs_prod.jsx)(/** @jsxImportSource @emotion/react */ Footer /* default */.Z, null),
      );
    }

    /***/
  },
};
