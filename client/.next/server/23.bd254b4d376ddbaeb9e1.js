exports.ids = [23];
exports.modules = {

/***/ "FYZ7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Ww4b");
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);




const MarkersMap = ({
  rest
}) => {
  const {
    locations,
    setSelectedPark
  } = rest.options;
  return locations.map((park, index) => {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
      onClick: () => {
        setSelectedPark(park._id);
      },
      position: {
        lat: Number(park.coordinates[0]),
        lng: Number(park.coordinates[1])
      },
      icon: {
        url: `http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/markersIcon/${park.isType}.png`
      }
    }, index);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MarkersMap);

/***/ })

};;