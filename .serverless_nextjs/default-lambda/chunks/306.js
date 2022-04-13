"use strict";
exports.id = 306;
exports.ids = [306];
exports.modules = {

/***/ 70306:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11163);
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44479);
/* harmony import */ var _atoms_FlexBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88976);
/* harmony import */ var _atoms_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40671);
/* harmony import */ var _atoms_PopupBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37533);
/* harmony import */ var _molecules_InputFormBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(46212);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11334);
/* harmony import */ var _styles_FontStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11936);
/* harmony import */ var _styles_Common_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7526);
/* harmony import */ var _store_reducers_authReducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13252);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37424);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }


 // Components





 // Style








const inputArr = [{
  label: 'email',
  placeholder: 'E-mail을 입력해주세요.',
  errorMsg: 'E-mail양식이 아닙니다.',
  pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
  type: 'text'
}, {
  label: 'password',
  placeholder: '비밀번호를 입력해주세요.',
  errorMsg: '6자리 이상 입력해주세요.',
  pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,10}$/,
  type: 'password'
}];

const LoginPopup = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const handleMovePage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(path => {
    router.push(path);
  }, []);
  const handleSignUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(data => {
    alert(data);
    handleMovePage('/signup/confirm');
  }, []);

  const onLoginSuccess = async res => {
    console.log(res.accessToken, 'RES RES RES');
    const accessToken = res.accessToken;

    if (res.accessToken) {
      dispatch((0,_store_reducers_authReducer__WEBPACK_IMPORTED_MODULE_9__/* .setToken */ .o4)(accessToken));
      await router.push('/');
    }
  };

  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */(_atoms_FlexBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    style: {
      marginTop: '112px'
    },
    justify: 'center',
    direction: 'column'
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */(_atoms_PopupBox__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
    padding: '0px',
    width: '392px',
    height: 'auto'
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: iconBoxStyle
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */(_atoms_Icon__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
    name: 'NAVIGATION_CLOSE_LG'
  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */(_molecules_InputFormBox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    handleSignUp: handleSignUp,
    inputArr: inputArr,
    btnText: router.pathname === '/login' ? '로그인' : '회원가입',
    padding: '64px 48px 0 48px'
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: textBox
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */("span", {
    css: _styles_FontStyles__WEBPACK_IMPORTED_MODULE_7__/* .caption1_regular */ .yQ
  }, "or \uAC04\uD3B8\uD55C \uAC00\uC785\uC744 \uC6D0\uD558\uC2E0\uB2E4\uBA74?")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */(_atoms_FlexBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    justify: 'center',
    padding: '0 0 24px 0'
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */(_atoms_Button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    btnText: '구글로 시작하기',
    full: false,
    buttonType: 'action',
    start: 'icon',
    icon: 'GOOGLE',
    padding: '8px 18px'
  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */(_atoms_FlexBox__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
    style: {
      borderTop: '1px solid grey'
    },
    justify: router.pathname === '/login' ? 'space-between' : 'center',
    align: 'center'
  }, router.pathname === '/login' ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: leftTextStyle,
    onClick: () => handleMovePage('/pwInquiry')
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */("span", {
    css: [_styles_FontStyles__WEBPACK_IMPORTED_MODULE_7__/* .body3_bold */ .Sw,  true ? "" : 0,  true ? "" : 0]
  }, "\uBE44\uBC00\uBC88\uD638"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */("span", {
    css: [_styles_FontStyles__WEBPACK_IMPORTED_MODULE_7__/* .body3_regular */ .PD,  true ? "" : 0,  true ? "" : 0]
  }, "\uB97C \uC78A\uC5B4\uBC84\uB9AC\uC168\uB098\uC694?")), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: rightTextStyle,
    onClick: () => handleMovePage('/signup')
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */("span", {
    css: _styles_FontStyles__WEBPACK_IMPORTED_MODULE_7__/* .body3_bold */ .Sw
  }, "\uACC4\uC815"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */("span", {
    css: [_styles_FontStyles__WEBPACK_IMPORTED_MODULE_7__/* .body3_regular */ .PD,  true ? "" : 0,  true ? "" : 0]
  }, "\uC774 \uC5C6\uC73C\uC2E0\uAC00\uC694?"))) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: centerTextStyle,
    onClick: () => handleMovePage('/login')
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */("span", {
    css: _styles_FontStyles__WEBPACK_IMPORTED_MODULE_7__/* .body3_bold */ .Sw
  }, "\uACC4\uC815"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.jsx)/** @jsxImportSource @emotion/react */("span", {
    css: [_styles_FontStyles__WEBPACK_IMPORTED_MODULE_7__/* .body3_regular */ .PD,  true ? "" : 0,  true ? "" : 0]
  }, "\uC774 \uC788\uC5B4\uC694!")))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPopup);
const iconBoxStyle =  true ? {
  name: "zmzf2s",
  styles: "position:absolute;top:20px;right:20px;cursor:pointer"
} : 0;
const textBox = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_11__.css)("width:100%;color:", _styles_Common_styles__WEBPACK_IMPORTED_MODULE_8__/* .colors.grey._99 */ .O.grey._99, ";text-align:center;margin:24px 0 8px 0;" + ( true ? "" : 0),  true ? "" : 0);
const leftTextStyle =  true ? {
  name: "3tt2zq",
  styles: "cursor:pointer;padding:16px 0 24px 24px"
} : 0;
const rightTextStyle =  true ? {
  name: "v1rxsj",
  styles: "cursor:pointer;padding:16px 24px 24px 0"
} : 0;
const centerTextStyle =  true ? {
  name: "xwv8rq",
  styles: "cursor:pointer;padding:16px 24px 24px 24px;text-align:center"
} : 0;

/***/ })

};
;