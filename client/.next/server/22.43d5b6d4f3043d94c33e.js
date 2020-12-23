exports.ids = [22];
exports.modules = {

/***/ "enRe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Ww4b");
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__);



const MarkerQuery = ({
  rest
}) => {
  const {
    options
  } = rest;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
    position: {
      lat: Number(options.lat),
      lng: Number(options.lng)
    },
    icon: options.isType && options.isType !== 'other' ? {
      url: `http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/markersIcon/${options.isType}.png`
    } : null
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MarkerQuery);

/***/ })

};;