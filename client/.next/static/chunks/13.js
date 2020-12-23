(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[13],{

/***/ "./modules/GoogleMaps/Components/MarkersMap.tsx":
/*!******************************************************!*\
  !*** ./modules/GoogleMaps/Components/MarkersMap.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js");


var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\GoogleMaps\\Components\\MarkersMap.tsx",
    _this = undefined;




var MarkersMap = function MarkersMap(_ref) {
  var rest = _ref.rest;
  var _rest$options = rest.options,
      locations = _rest$options.locations,
      setSelectedPark = _rest$options.setSelectedPark;
  return locations.map(function (park, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
      onClick: function onClick() {
        setSelectedPark(park._id);
      },
      position: {
        lat: Number(park.coordinates[0]),
        lng: Number(park.coordinates[1])
      },
      icon: {
        url: "http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/markersIcon/".concat(park.isType, ".png")
      }
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }, _this);
  });
};

_c = MarkersMap;
/* harmony default export */ __webpack_exports__["default"] = (MarkersMap);

var _c;

$RefreshReg$(_c, "MarkersMap");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9Hb29nbGVNYXBzL0NvbXBvbmVudHMvTWFya2Vyc01hcC50c3giXSwibmFtZXMiOlsiTWFya2Vyc01hcCIsInJlc3QiLCJvcHRpb25zIiwibG9jYXRpb25zIiwic2V0U2VsZWN0ZWRQYXJrIiwibWFwIiwicGFyayIsImluZGV4IiwiX2lkIiwibGF0IiwiTnVtYmVyIiwiY29vcmRpbmF0ZXMiLCJsbmciLCJ1cmwiLCJpc1R5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBTUEsSUFBTUEsVUFBcUMsR0FBRyxTQUF4Q0EsVUFBd0MsT0FBbUI7QUFBQSxNQUFoQkMsSUFBZ0IsUUFBaEJBLElBQWdCO0FBQUEsc0JBQ3hCQSxJQUFJLENBQUNDLE9BRG1CO0FBQUEsTUFDdkRDLFNBRHVELGlCQUN2REEsU0FEdUQ7QUFBQSxNQUM1Q0MsZUFENEMsaUJBQzVDQSxlQUQ0QztBQUcvRCxTQUFPRCxTQUFTLENBQUNFLEdBQVYsQ0FBYyxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDcEMsd0JBQU8scUVBQUMsNkRBQUQ7QUFFTCxhQUFPLEVBQUUsbUJBQU07QUFDYkgsdUJBQWUsQ0FBQ0UsSUFBSSxDQUFDRSxHQUFOLENBQWY7QUFDRCxPQUpJO0FBS0wsY0FBUSxFQUFFO0FBQUNDLFdBQUcsRUFBRUMsTUFBTSxDQUFDSixJQUFJLENBQUNLLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBRCxDQUFaO0FBQW1DQyxXQUFHLEVBQUVGLE1BQU0sQ0FBQ0osSUFBSSxDQUFDSyxXQUFMLENBQWlCLENBQWpCLENBQUQ7QUFBOUMsT0FMTDtBQU1MLFVBQUksRUFBRTtBQUNKRSxXQUFHLHlHQUFrR1AsSUFBSSxDQUFDUSxNQUF2RztBQURDO0FBTkQsT0FDQ1AsS0FERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFVRCxHQVhNLENBQVA7QUFZRCxDQWZEOztLQUFNUCxVO0FBaUJTQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IE1hcmtlciB9IGZyb20gJ0ByZWFjdC1nb29nbGUtbWFwcy9hcGknXHJcblxyXG50eXBlIE1hcmtlcnNNYXBQcm9wcyA9IHtcclxuICByZXN0OiBhbnlcclxufVxyXG5cclxuY29uc3QgTWFya2Vyc01hcDogUmVhY3QuRkM8TWFya2Vyc01hcFByb3BzPiA9ICh7IHJlc3QgfSk6IGFueSA9PiB7XHJcbiAgY29uc3QgeyBsb2NhdGlvbnMsIHNldFNlbGVjdGVkUGFyayB9ID0gcmVzdC5vcHRpb25zXHJcblxyXG4gIHJldHVybiBsb2NhdGlvbnMubWFwKChwYXJrLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIDxNYXJrZXJcclxuICAgICAga2V5PXsgaW5kZXggfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRQYXJrKHBhcmsuX2lkIClcclxuICAgICAgfX1cclxuICAgICAgcG9zaXRpb249e3tsYXQ6IE51bWJlcihwYXJrLmNvb3JkaW5hdGVzWzBdKSwgbG5nOiBOdW1iZXIocGFyay5jb29yZGluYXRlc1sxXSl9fVxyXG4gICAgICBpY29uPXt7XHJcbiAgICAgICAgdXJsOiBgaHR0cDovLzMyNmI1M2Q5ODA2ZGNhYzA5ODMzLWE1OTBiODFjODEyYTU3ZDBmNGIxYzNiMWQxYjdhOWVhLnI1MC5jZjMucmFja2Nkbi5jb20vbWFya2Vyc0ljb24vJHtwYXJrLmlzVHlwZX0ucG5nYFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXJrZXJzTWFwIl0sInNvdXJjZVJvb3QiOiIifQ==