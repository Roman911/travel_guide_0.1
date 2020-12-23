(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[12],{

/***/ "./modules/GoogleMaps/Components/MarkerQuery.tsx":
/*!*******************************************************!*\
  !*** ./modules/GoogleMaps/Components/MarkerQuery.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-google-maps/api */ "./node_modules/@react-google-maps/api/dist/reactgooglemapsapi.esm.js");


var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\GoogleMaps\\Components\\MarkerQuery.tsx",
    _this = undefined;



var MarkerQuery = function MarkerQuery(_ref) {
  var rest = _ref.rest;
  var options = rest.options;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
    position: {
      lat: Number(options.lat),
      lng: Number(options.lng)
    },
    icon: options.isType && options.isType !== 'other' ? {
      url: "http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/markersIcon/".concat(options.isType, ".png")
    } : null
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 10
  }, _this);
};

_c = MarkerQuery;
/* harmony default export */ __webpack_exports__["default"] = (MarkerQuery);

var _c;

$RefreshReg$(_c, "MarkerQuery");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9Hb29nbGVNYXBzL0NvbXBvbmVudHMvTWFya2VyUXVlcnkudHN4Il0sIm5hbWVzIjpbIk1hcmtlclF1ZXJ5IiwicmVzdCIsIm9wdGlvbnMiLCJsYXQiLCJOdW1iZXIiLCJsbmciLCJpc1R5cGUiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQUEsTUFDeEJDLE9BRHdCLEdBQ1pELElBRFksQ0FDeEJDLE9BRHdCO0FBR2hDLHNCQUFPLHFFQUFDLDZEQUFEO0FBQ0wsWUFBUSxFQUFFO0FBQUVDLFNBQUcsRUFBRUMsTUFBTSxDQUFDRixPQUFPLENBQUNDLEdBQVQsQ0FBYjtBQUE0QkUsU0FBRyxFQUFFRCxNQUFNLENBQUNGLE9BQU8sQ0FBQ0csR0FBVDtBQUF2QyxLQURMO0FBRUwsUUFBSSxFQUFHSCxPQUFPLENBQUNJLE1BQVIsSUFBa0JKLE9BQU8sQ0FBQ0ksTUFBUixLQUFtQixPQUFyQyxHQUErQztBQUFFQyxTQUFHLHlHQUFrR0wsT0FBTyxDQUFDSSxNQUExRztBQUFMLEtBQS9DLEdBQStLO0FBRmpMO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUlELENBUEQ7O0tBQU1OLFc7QUFTU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcmtlciB9IGZyb20gJ0ByZWFjdC1nb29nbGUtbWFwcy9hcGknXHJcblxyXG5jb25zdCBNYXJrZXJRdWVyeSA9ICh7IHJlc3QgfSkgPT4ge1xyXG4gIGNvbnN0IHsgb3B0aW9ucyB9ID0gcmVzdFxyXG5cclxuICByZXR1cm4gPE1hcmtlclxyXG4gICAgcG9zaXRpb249e3sgbGF0OiBOdW1iZXIob3B0aW9ucy5sYXQpLCBsbmc6IE51bWJlcihvcHRpb25zLmxuZykgfX1cclxuICAgIGljb249eyBvcHRpb25zLmlzVHlwZSAmJiBvcHRpb25zLmlzVHlwZSAhPT0gJ290aGVyJyA/IHsgdXJsOiBgaHR0cDovLzMyNmI1M2Q5ODA2ZGNhYzA5ODMzLWE1OTBiODFjODEyYTU3ZDBmNGIxYzNiMWQxYjdhOWVhLnI1MC5jZjMucmFja2Nkbi5jb20vbWFya2Vyc0ljb24vJHtvcHRpb25zLmlzVHlwZX0ucG5nYCB9IDogbnVsbCB9XHJcbiAgLz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFya2VyUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9