exports.ids = [14];
exports.modules = {

/***/ "b+oQ":
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
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("uhWA");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("No/t");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("vBmG");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("hIOt");










const Checkbox = ({
  rest
}) => {
  const {
    id,
    label,
    value,
    values
  } = rest;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("label", {
    className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].text, _styles__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].checkbox, _styles__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].flex),
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      type: "checkbox",
      value: value,
      name: id
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].checkboxInner, _styles__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].flexSB, values[0] === 'free' ? _styles__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].checkboxInnerActive : null),
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_3__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].iconCheck, _styles__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].flexSB),
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCheck"]
      })
    }), label]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Checkbox);

/***/ })

};;