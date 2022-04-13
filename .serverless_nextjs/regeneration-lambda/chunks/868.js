"use strict";
exports.id = 868;
exports.ids = [868];
exports.modules = {

/***/ 44479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11334);
/* harmony import */ var _styles_Common_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7526);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40671);
/* harmony import */ var _styles_FontStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11936);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73380);
/* harmony import */ var react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5__);
function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

 // Styles









const Button = ({
  buttonType = 'basic',
  type = 'button',
  backgroundColor = '#24e1d5',
  full = false,
  onClick,
  btnText = 'button',
  isLoading = false,
  icon,
  padding,
  start = '',
  size
}) => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, buttonType === 'basic' ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */("button", {
    type: type,
    onClick: onClick,
    css: buttonStyle(backgroundColor, full, padding)
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: isLoading ? loadingStyle : ''
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */((react_spinners_ClipLoader__WEBPACK_IMPORTED_MODULE_5___default()), {
    color: 'white',
    loading: isLoading,
    size: 16
  })), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */("span", {
    css: isLoading ? textStyle : _styles_FontStyles__WEBPACK_IMPORTED_MODULE_3__/* .body2_bold */ .zR
  }, btnText)) : buttonType === 'action' ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */("button", {
    type: type,
    onClick: onClick,
    css: actionButtonStyle(full, padding)
  }, start === 'icon' ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */(_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    name: icon ? icon : 'NAVIGATION_CHEVRON_RIGHT',
    size: size ? size : 24
  }), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */("span", {
    css: [_styles_FontStyles__WEBPACK_IMPORTED_MODULE_3__/* .caption1_regular */ .yQ, "margin-left:12px;" + ( true ? "" : 0),  true ? "" : 0]
  }, btnText)) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */("span", {
    css: _styles_FontStyles__WEBPACK_IMPORTED_MODULE_3__/* .caption1_regular */ .yQ
  }, btnText), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */(_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    name: icon ? icon : 'NAVIGATION_CHEVRON_RIGHT',
    size: size ? size : 24
  }))) : (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */("button", {
    type: type,
    onClick: onClick,
    css: iconButtonStyle
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.jsx)/** @jsxImportSource @emotion/react */(_Icon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
    name: icon ? icon : 'NAVIGATION_CHEVRON_RIGHT',
    size: size ? size : 24
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button); // basic button

const buttonStyle = (backgroundColor, full, padding) => /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.css)("padding:", padding ? padding : '14px 53.5px', ";background:", backgroundColor ? backgroundColor : _styles_Common_styles__WEBPACK_IMPORTED_MODULE_1__/* .colors.cyan._500 */ .O.cyan._500, ";border-radius:12px;border:none;color:", _styles_Common_styles__WEBPACK_IMPORTED_MODULE_1__/* .colors.white */ .O.white, ";width:", full ? '100%' : 'auto', ";cursor:pointer;position:relative;" + ( true ? "" : 0),  true ? "" : 0); // action button


const actionButtonStyle = (full, padding) => /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.css)("padding:", padding ? padding : '5px 7px 5px 16px', ";background:", _styles_Common_styles__WEBPACK_IMPORTED_MODULE_1__/* .colors.white */ .O.white, ";border:1px solid ", _styles_Common_styles__WEBPACK_IMPORTED_MODULE_1__/* .colors.grey._3c */ .O.grey._3c, ";border-radius:58px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;width:", full ? '100%' : 'auto', ";" + ( true ? "" : 0),  true ? "" : 0); // icon button


const iconButtonStyle = /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_4__.css)("cursor:pointer;padding:0;margin:0;border-radius:50%;border:1px solid ", _styles_Common_styles__WEBPACK_IMPORTED_MODULE_1__/* .colors.grey._3c */ .O.grey._3c, ";background:", _styles_Common_styles__WEBPACK_IMPORTED_MODULE_1__/* .colors.white */ .O.white, ";width:20px;height:20px;display:flex;justify-content:center;align-items:center;" + ( true ? "" : 0),  true ? "" : 0); // loading style

const loadingStyle =  true ? {
  name: "46qifx",
  styles: "position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);padding:14px 53.5px"
} : 0;
const textStyle = [_styles_FontStyles__WEBPACK_IMPORTED_MODULE_3__/* .body2_bold */ .zR,  true ? {
  name: "6dhm9o",
  styles: "visibility:hidden"
} : 0];

/***/ }),

/***/ 88976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11334);
 // Styles





const calcWidthPercent = span => {
  if (!span) return;
  const width = span / 12 * 100;
  return width;
};

const FlexBox = ({
  children,
  display = 'flex',
  justify = 'center',
  align = 'center',
  width = '100%',
  height = 'auto',
  padding = '0',
  direction = 'row',
  onClick,
  wrap = 'nowrap',
  border = 'none',
  xs,
  sm,
  md = 12,
  lg = 12,
  backgroundColor,
  radius,
  shadow,
  column,
  row,
  style
}) => {
  console.log(style, 'CSS');
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.jsx)/** @jsxImportSource @emotion/react */("div", {
    onClick: onClick,
    css: [flexBox(xs, sm, md, lg, backgroundColor, width, height, justify, align, padding, direction, display, border, wrap, radius, shadow, column, row), style,  true ? "" : 0,  true ? "" : 0]
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FlexBox);

const flexBox = (xs, sm, md, lg, backgroundColor, width, height, justify, align, padding, direction, display, border, wrap, radius, shadow, column, row) => /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.css)("height:", height, ";justify-content:", justify, ";align-items:", align, ";padding:", padding, ";flex-direction:", direction, ";background:", backgroundColor, ";display:", display, ";border:", border, ";flex-wrap:", wrap, ";overflow:hidden;border-radius:", radius, ";box-shadow:", shadow, ";grid-column:", column, ";grid-row:", row, ";width:", lg ? `${calcWidthPercent(lg)}%` : 'auto', ";@media only screen and (max-width: 1024px){width:", md ? `${calcWidthPercent(md)}%` : 'auto', ";}" + ( true ? "" : 0),  true ? "" : 0);

/***/ }),

/***/ 40671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ atoms_Icon)
});

;// CONCATENATED MODULE: ./public/assets/svg/google.svg
/* harmony default export */ const google = ({"src":"/_next/static/media/google.70df1c12.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/svg/folder_icon_217583.svg
/* harmony default export */ const folder_icon_217583 = ({"src":"/_next/static/media/folder_icon_217583.dd48bf34.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/svg/action_create.svg
/* harmony default export */ const action_create = ({"src":"/_next/static/media/action_create.fbeb35a0.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/svg/action_more_v.svg
/* harmony default export */ const action_more_v = ({"src":"/_next/static/media/action_more_v.6bd99e1c.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/svg/action_settings.svg
/* harmony default export */ const action_settings = ({"src":"/_next/static/media/action_settings.4ee5c6d7.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/svg/navigation_arrow_left.svg
/* harmony default export */ const navigation_arrow_left = ({"src":"/_next/static/media/navigation_arrow_left.0338cb31.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/svg/navigation_arrow_right.svg
/* harmony default export */ const navigation_arrow_right = ({"src":"/_next/static/media/navigation_arrow_right.9436c259.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/svg/navigation_chevron_down_s.svg
/* harmony default export */ const navigation_chevron_down_s = ({"src":"/_next/static/media/navigation_chevron_down_s.fdb7d227.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/svg/navigation_chevron_right.svg
/* harmony default export */ const navigation_chevron_right = ({"src":"/_next/static/media/navigation_chevron_right.264a281d.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/svg/navigation_close_l.svg
/* harmony default export */ const navigation_close_l = ({"src":"/_next/static/media/navigation_close_l.3b9cb544.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/svg/navigation_close_s.svg
/* harmony default export */ const navigation_close_s = ({"src":"/_next/static/media/navigation_close_s.83bac27b.svg","height":24,"width":24});
;// CONCATENATED MODULE: ./public/assets/svg/logoDiby.svg
/* harmony default export */ const logoDiby = ({"src":"/_next/static/media/logoDiby.8b6f6a7f.svg","height":38,"width":28});
;// CONCATENATED MODULE: ./public/assets/svg/logoText.svg
/* harmony default export */ const logoText = ({"src":"/_next/static/media/logoText.121fc1a2.svg","height":24,"width":56});
// EXTERNAL MODULE: ./public/assets/svg/icon_alert.svg
var icon_alert = __webpack_require__(40310);
// EXTERNAL MODULE: ./public/assets/svg/icon_feedback2.svg
var icon_feedback2 = __webpack_require__(88715);
// EXTERNAL MODULE: ./public/assets/svg/icon_testing.svg
var icon_testing = __webpack_require__(27030);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.cjs.prod.js
var emotion_react_cjs_prod = __webpack_require__(11334);
;// CONCATENATED MODULE: ./src/components/atoms/Icon/index.tsx


















const IconTypes = {
  GOOGLE: google,
  TEST: folder_icon_217583,
  ACTION_CREATE: action_create,
  ACTION_SETTING: action_settings,
  ACTION_MORE: action_more_v,
  NAVIGATION_ARROW_LEFT: navigation_arrow_left,
  NAVIGATION_ARROW_RIGHT: navigation_arrow_right,
  NAVIGATION_CHEVRON_DOWN: navigation_chevron_down_s,
  NAVIGATION_CHEVRON_RIGHT: navigation_chevron_right,
  NAVIGATION_CLOSE_LG: navigation_close_l,
  NAVIGATION_CLOSE_SM: navigation_close_s,
  LOGO_ICON: logoDiby,
  LOGO_TEXT: logoText,
  ICON_ALERT: icon_alert/* default */.Z,
  ICON_FEEDBACK2: icon_feedback2/* default */.Z,
  ICON_TESTING: icon_testing/* default */.Z
};

const Icon = ({
  name,
  size = 16
}) => {
  const IconComponent = IconTypes[name];
  const viewBox = `0 0 ${size} ${size}`;
  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(IconComponent, {
    style: {
      boxSizing: 'border-box'
    },
    width: size,
    height: size,
    viewBox: viewBox
  });
};

/* harmony default export */ const atoms_Icon = (Icon);

/***/ }),

/***/ 37533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11334);
/* harmony import */ var _styles_Common_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7526);
 // Styles






const PopupBox = ({
  width = 'auto',
  height = 'auto',
  radius = '16px',
  padding = '0',
  children
}) => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)/** @jsxImportSource @emotion/react */("div", {
    css: popupBoxStyle(width, height, radius, padding)
  }, children);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopupBox);

const popupBoxStyle = (width, height, radius, padding) => /*#__PURE__*/(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.css)("width:", width, ";height:", height, ";border:none;border-radius:", radius, ";padding:", padding, ";background:", _styles_Common_styles__WEBPACK_IMPORTED_MODULE_1__/* .colors.white */ .O.white, ";position:relative;" + ( true ? "" : 0),  true ? "" : 0);

/***/ }),

/***/ 40310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon_alert.ee2222ea.svg","height":40,"width":40});

/***/ }),

/***/ 88715:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon_feedback2.46935eae.svg","height":41,"width":40});

/***/ }),

/***/ 27030:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/icon_testing.fa8e26b9.svg","height":40,"width":40});

/***/ })

};
;