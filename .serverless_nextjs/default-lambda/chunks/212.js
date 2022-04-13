"use strict";
exports.id = 212;
exports.ids = [212];
exports.modules = {

/***/ 46212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ molecules_InputFormBox)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@emotion/react/dist/emotion-react.cjs.prod.js
var emotion_react_cjs_prod = __webpack_require__(11334);
// EXTERNAL MODULE: ./src/styles/Common.styles.ts
var Common_styles = __webpack_require__(7526);
;// CONCATENATED MODULE: ./src/components/atoms/Input/index.tsx
const _excluded = ["line", "validation", "type", "placeholder", "width", "label", "register", "errorMsg", "errors", "watch", "registerOptions", "onChangeStatus", "status", "defaultValue", "disabled", "marginBottom"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Input = _ref => {
  let {
    line = false,
    validation = true,
    type = 'text',
    placeholder,
    width = '100%',
    label,
    register,
    errorMsg,
    errors,
    watch,
    registerOptions,
    onChangeStatus,
    status,
    defaultValue = '',
    disabled = false,
    marginBottom
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  console.log(errors[label], 'input component');
  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(react.Fragment, null, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("input", _extends({
    css: inputStyle(line, errors[label] ? false : true, status, disabled, width, marginBottom),
    onFocus: onChangeStatus ? () => onChangeStatus(label, true) : () => console.log('Input Focus', label),
    type: type,
    autoComplete: 'off',
    placeholder: errors[label] ? errorMsg : placeholder,
    disabled: disabled,
    defaultValue: defaultValue,
    name: label
  }, props, register(label, registerOptions))));
};

/* harmony default export */ const atoms_Input = (Input);

const inputStyle = (line, validation, status, disabled, width, marginBottom) => /*#__PURE__*/(0,emotion_react_cjs_prod.css)("width:", width, ";margin-bottom:", marginBottom, ";outline:none;", line ? `border: none;
    border-radius: 0;
    padding: 10px;
    border-bottom: ${!validation ? `2px solid ${Common_styles/* colors.red */.O.red}` : status ? `2px solid ${Common_styles/* colors.grey._3c */.O.grey._3c}` : `1px solid ${Common_styles/* colors.grey._3c */.O.grey._3c}`};
    ` : `
  border: ${!validation ? `2px solid ${Common_styles/* colors.red */.O.red}` : status ? `2px solid ${Common_styles/* colors.grey._3c */.O.grey._3c}` : `1px solid ${Common_styles/* colors.grey._3c */.O.grey._3c}`};
  padding: 10px 24px;
  border-radius: 4px;
  `, " font-weight:700;color:", !validation ? Common_styles/* colors.red */.O.red : Common_styles/* colors.grey._3c */.O.grey._3c, ";::placeholder{color:", !validation ? Common_styles/* colors.red */.O.red : Common_styles/* colors.grey._cc */.O.grey._cc, ";}:disabled{color:", Common_styles/* colors.grey._99 */.O.grey._99, ";", line ? `
      border-bottom: 1px solid ${Common_styles/* colors.grey._3c */.O.grey._3c}; 
      background: ${Common_styles/* colors.white */.O.white};
    ` : `
      border: 1px solid ${Common_styles/* colors.grey._99 */.O.grey._99};
      background: ${Common_styles/* colors.grey._ec */.O.grey._ec};
    `, ";}" + ( true ? "" : 0),  true ? "" : 0);
// EXTERNAL MODULE: ./src/components/atoms/Button/index.tsx
var Button = __webpack_require__(44479);
;// CONCATENATED MODULE: ./src/components/atoms/Form/index.tsx
 // Styles

 // Types




const Form = ({
  width = '100%',
  children,
  onSubmit
}) => {
  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("form", {
    css: formStyle(width),
    onSubmit: onSubmit
  }, children);
};

/* harmony default export */ const atoms_Form = (Form);

const formStyle = width => /*#__PURE__*/(0,emotion_react_cjs_prod.css)("width:", width, ";" + ( true ? "" : 0),  true ? "" : 0);
// EXTERNAL MODULE: ./node_modules/react-hook-form/dist/index.esm.mjs
var index_esm = __webpack_require__(87536);
;// CONCATENATED MODULE: ./src/components/molecules/InputFormBox/index.tsx








const InputFormBox = ({
  handleSignUp,
  inputArr,
  btnText,
  padding = '0'
}) => {
  const {
    0: inputFocus,
    1: setInputFocus
  } = (0,react.useState)(null);
  const {
    register,
    handleSubmit,
    // setFocus,
    formState: {
      errors
    }
  } = (0,index_esm/* useForm */.cI)({});

  const onSubmit = data => handleSignUp(data);

  const onError = errors => handleSignUp(errors);

  const handleChangeInputFocus = (0,react.useCallback)((name, status) => {
    setInputFocus({
      [name]: status
    });
  }, [inputFocus]);
  return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(atoms_Form, {
    onSubmit: handleSubmit(onSubmit, onError)
  }, (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */("div", {
    style: {
      padding: padding
    }
  }, inputArr.map((el, index) => {
    return (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(atoms_Input, {
      line: el.line ? el.line : false,
      type: el.type,
      onChangeStatus: handleChangeInputFocus,
      key: index,
      marginBottom: index === inputArr.length - 1 ? '32px' : '16px',
      register: register,
      errors: errors,
      label: el.label,
      placeholder: el.placeholder,
      errorMsg: el.errorMsg,
      status: inputFocus === null || inputFocus === void 0 ? void 0 : inputFocus[el.label],
      registerOptions: {
        required: true,
        pattern: el.pattern,
        onBlur: () => setInputFocus(null)
      }
    });
  }), (0,emotion_react_cjs_prod.jsx)/** @jsxImportSource @emotion/react */(Button/* default */.Z, {
    full: true,
    btnText: btnText,
    type: 'submit'
  })));
};

/* harmony default export */ const molecules_InputFormBox = (InputFormBox);

/***/ })

};
;