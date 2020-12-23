exports.ids = [11];
exports.modules = {

/***/ "./modules/GoogleMaps/Components/MarkersMap.tsx":
/*!******************************************************!*\
  !*** ./modules/GoogleMaps/Components/MarkersMap.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ "@react-google-maps/api");
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\GoogleMaps\\Components\\MarkersMap.tsx";



const MarkersMap = ({
  rest
}) => {
  const {
    locations,
    setSelectedPark
  } = rest.options;
  return locations.map((park, index) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
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
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }, undefined);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MarkersMap);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL0dvb2dsZU1hcHMvQ29tcG9uZW50cy9NYXJrZXJzTWFwLnRzeCJdLCJuYW1lcyI6WyJNYXJrZXJzTWFwIiwicmVzdCIsImxvY2F0aW9ucyIsInNldFNlbGVjdGVkUGFyayIsIm9wdGlvbnMiLCJtYXAiLCJwYXJrIiwiaW5kZXgiLCJfaWQiLCJsYXQiLCJOdW1iZXIiLCJjb29yZGluYXRlcyIsImxuZyIsInVybCIsImlzVHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQU1BLE1BQU1BLFVBQXFDLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBbUI7QUFDL0QsUUFBTTtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsTUFBaUNGLElBQUksQ0FBQ0csT0FBNUM7QUFFQSxTQUFPRixTQUFTLENBQUNHLEdBQVYsQ0FBYyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDcEMsd0JBQU8scUVBQUMsNkRBQUQ7QUFFTCxhQUFPLEVBQUUsTUFBTTtBQUNiSix1QkFBZSxDQUFDRyxJQUFJLENBQUNFLEdBQU4sQ0FBZjtBQUNELE9BSkk7QUFLTCxjQUFRLEVBQUU7QUFBQ0MsV0FBRyxFQUFFQyxNQUFNLENBQUNKLElBQUksQ0FBQ0ssV0FBTCxDQUFpQixDQUFqQixDQUFELENBQVo7QUFBbUNDLFdBQUcsRUFBRUYsTUFBTSxDQUFDSixJQUFJLENBQUNLLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBRDtBQUE5QyxPQUxMO0FBTUwsVUFBSSxFQUFFO0FBQ0pFLFdBQUcsRUFBRyxnR0FBK0ZQLElBQUksQ0FBQ1EsTUFBTztBQUQ3RztBQU5ELE9BQ0NQLEtBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQVVELEdBWE0sQ0FBUDtBQVlELENBZkQ7O0FBaUJlUCx5RUFBZixFIiwiZmlsZSI6IjExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJ0ByZWFjdC1nb29nbGUtbWFwcy9hcGknXHJcblxyXG50eXBlIE1hcmtlcnNNYXBQcm9wcyA9IHtcclxuICByZXN0OiBhbnlcclxufVxyXG5cclxuY29uc3QgTWFya2Vyc01hcDogUmVhY3QuRkM8TWFya2Vyc01hcFByb3BzPiA9ICh7IHJlc3QgfSk6IGFueSA9PiB7XHJcbiAgY29uc3QgeyBsb2NhdGlvbnMsIHNldFNlbGVjdGVkUGFyayB9ID0gcmVzdC5vcHRpb25zXHJcblxyXG4gIHJldHVybiBsb2NhdGlvbnMubWFwKChwYXJrLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIDxNYXJrZXJcclxuICAgICAga2V5PXsgaW5kZXggfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRQYXJrKHBhcmsuX2lkIClcclxuICAgICAgfX1cclxuICAgICAgcG9zaXRpb249e3tsYXQ6IE51bWJlcihwYXJrLmNvb3JkaW5hdGVzWzBdKSwgbG5nOiBOdW1iZXIocGFyay5jb29yZGluYXRlc1sxXSl9fVxyXG4gICAgICBpY29uPXt7XHJcbiAgICAgICAgdXJsOiBgaHR0cDovLzMyNmI1M2Q5ODA2ZGNhYzA5ODMzLWE1OTBiODFjODEyYTU3ZDBmNGIxYzNiMWQxYjdhOWVhLnI1MC5jZjMucmFja2Nkbi5jb20vbWFya2Vyc0ljb24vJHtwYXJrLmlzVHlwZX0ucG5nYFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXJrZXJzTWFwIl0sInNvdXJjZVJvb3QiOiIifQ==