"use strict";
exports.id = 350;
exports.ids = [350];
exports.modules = {

/***/ 59043:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendPost = void 0;
const EmailJSResponseStatus_1 = __webpack_require__(20093);
const store_1 = __webpack_require__(57603);
const sendPost = (url, data, headers = {}) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener('load', ({ target }) => {
            const responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', ({ target }) => {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(target));
        });
        xhr.open('POST', store_1.store._origin + url, true);
        Object.keys(headers).forEach((key) => {
            xhr.setRequestHeader(key, headers[key]);
        });
        xhr.send(data);
    });
};
exports.sendPost = sendPost;


/***/ }),

/***/ 8952:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = void 0;
const init_1 = __webpack_require__(563);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return init_1.init; } });
const send_1 = __webpack_require__(82011);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return send_1.send; } });
const sendForm_1 = __webpack_require__(20237);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return sendForm_1.sendForm; } });
exports.ZP = {
    init: init_1.init,
    send: send_1.send,
    sendForm: sendForm_1.sendForm,
};


/***/ }),

/***/ 563:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = void 0;
const store_1 = __webpack_require__(57603);
/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
const init = (userID, origin = 'https://api.emailjs.com') => {
    store_1.store._userID = userID;
    store_1.store._origin = origin;
};
exports.init = init;


/***/ }),

/***/ 82011:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.send = void 0;
const store_1 = __webpack_require__(57603);
const validateParams_1 = __webpack_require__(43491);
const sendPost_1 = __webpack_require__(59043);
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = (serviceID, templateID, templatePrams, userID) => {
    const uID = userID || store_1.store._userID;
    (0, validateParams_1.validateParams)(uID, serviceID, templateID);
    const params = {
        lib_version: '3.5.0',
        user_id: uID,
        service_id: serviceID,
        template_id: templateID,
        template_params: templatePrams,
    };
    return (0, sendPost_1.sendPost)('/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json',
    });
};
exports.send = send;


/***/ }),

/***/ 20237:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sendForm = void 0;
const store_1 = __webpack_require__(57603);
const validateParams_1 = __webpack_require__(43491);
const sendPost_1 = __webpack_require__(59043);
const findHTMLForm = (form) => {
    let currentForm;
    if (typeof form === 'string') {
        currentForm = document.querySelector(form);
    }
    else {
        currentForm = form;
    }
    if (!currentForm || currentForm.nodeName !== 'FORM') {
        throw 'The 3rd parameter is expected to be the HTML form element or the style selector of form';
    }
    return currentForm;
};
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = (serviceID, templateID, form, userID) => {
    const uID = userID || store_1.store._userID;
    const currentForm = findHTMLForm(form);
    (0, validateParams_1.validateParams)(uID, serviceID, templateID);
    const formData = new FormData(currentForm);
    formData.append('lib_version', '3.5.0');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', uID);
    return (0, sendPost_1.sendPost)('/api/v1.0/email/send-form', formData);
};
exports.sendForm = sendForm;


/***/ }),

/***/ 20093:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailJSResponseStatus = void 0;
class EmailJSResponseStatus {
    constructor(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
}
exports.EmailJSResponseStatus = EmailJSResponseStatus;


/***/ }),

/***/ 57603:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.store = void 0;
exports.store = {
    _origin: 'https://api.emailjs.com',
};


/***/ }),

/***/ 43491:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateParams = void 0;
const validateParams = (userID, serviceID, templateID) => {
    if (!userID) {
        throw 'The user ID is required. Visit https://dashboard.emailjs.com/admin/integration';
    }
    if (!serviceID) {
        throw 'The service ID is required. Visit https://dashboard.emailjs.com/admin';
    }
    if (!templateID) {
        throw 'The template ID is required. Visit https://dashboard.emailjs.com/admin/templates';
    }
    return true;
};
exports.validateParams = validateParams;


/***/ }),

/***/ 57354:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(64119);

__webpack_unused_export__ = ({
  value: true
});
exports.Z = void 0;

var _createSvgIcon = _interopRequireDefault(__webpack_require__(64938));

var _jsxRuntime = __webpack_require__(85893);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
  d: "M16.01 11H4v2h12.01v3L20 12l-3.99-4z"
}), 'ArrowRightAlt');

exports.Z = _default;

/***/ })

};
;