exports.ids = [18];
exports.modules = {

/***/ "qBoC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("TsDz");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("hIOt");







const Select = ({
  rest
}) => {
  const {
    id,
    label,
    options
  } = rest;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].inputWrapper),
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("label", {
      htmlFor: id,
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].label, _styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].labelTouched),
      children: label
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      as: "select",
      id: id,
      name: id,
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].input),
      children: options.map((option, index) => {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("option", {
          value: option.value,
          children: option.title
        }, index);
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ })

};;