"use strict";
exports.id = 303;
exports.ids = [303];
exports.modules = {

/***/ 31177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _styles_FontStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11936);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11334);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }







const ConfirmPopupContents = ({
  title,
  contents
}) => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("div", null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("h2", {
    css: [_styles_FontStyles__WEBPACK_IMPORTED_MODULE_1__/* .heading1_bold */ .a7, fontSize,  true ? "" : 0,  true ? "" : 0]
  }, title), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("span", {
    css: [_styles_FontStyles__WEBPACK_IMPORTED_MODULE_1__/* .body2_regular */ .Tk, test,  true ? "" : 0,  true ? "" : 0]
  }, contents));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmPopupContents);
const fontSize =  true ? {
  name: "eqxpwv",
  styles: "font-size:32px;margin-bottom:24px"
} : 0;
const test =  true ? {
  name: "11cymlz",
  styles: "white-space:pre-line;line-height:30px"
} : 0;

/***/ }),

/***/ 10238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _atoms_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44479);
/* harmony import */ var _styles_FontStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11936);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11334);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }








const ConfirmPopupNextStepBtn = ({
  title,
  btnText,
  onClick,
  style,
  pathname
}) => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: [mainBoxStyle, style,  true ? "" : 0,  true ? "" : 0]
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)/** @jsxImportSource @emotion/react */("h4", {
    css: [_styles_FontStyles__WEBPACK_IMPORTED_MODULE_2__/* .heading4_bold */ .hI, titleBoxStyle,  true ? "" : 0,  true ? "" : 0]
  }, title), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_3__.jsx)/** @jsxImportSource @emotion/react */(_atoms_Button__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
    buttonType: 'action',
    btnText: btnText,
    onClick: () => onClick(pathname)
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConfirmPopupNextStepBtn);
const mainBoxStyle =  true ? {
  name: "1lw3ul3",
  styles: "margin-top:40px"
} : 0;
const titleBoxStyle =  true ? {
  name: "5bhc30",
  styles: "margin-bottom:8px"
} : 0;

/***/ })

};
;