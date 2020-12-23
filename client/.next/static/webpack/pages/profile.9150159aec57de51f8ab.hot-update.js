webpackHotUpdate_N_E("pages/profile",{

/***/ "./hooks/useRedirect.tsx":
/*!*******************************!*\
  !*** ./hooks/useRedirect.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _s = $RefreshSig$();




function Redirect(_ref) {
  _s();

  var to = _ref.to;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    router.push(to).then();
  }, [to]);
  return null;
}

_s(Redirect, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"]];
});

_c = Redirect;
/* harmony default export */ __webpack_exports__["default"] = (Redirect);

var _c;

$RefreshReg$(_c, "Redirect");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/profile.tsx":
/*!***************************!*\
  !*** ./pages/profile.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/index.esm.js");
/* harmony import */ var _apollo_queries_locationsUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apollo/queries/locationsUser */ "./apollo/queries/locationsUser.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components */ "./Components/index.tsx");
/* harmony import */ var _lib_withApollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/withApollo */ "./lib/withApollo.tsx");
/* harmony import */ var _hooks_useRedirect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/useRedirect */ "./hooks/useRedirect.tsx");


var _jsxFileName = "D:\\web\\travel_guide\\client\\pages\\profile.tsx",
    _this = undefined,
    _s = $RefreshSig$();









var Profile = function Profile() {
  _s();

  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  });

  if (!user.data) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_hooks_useRedirect__WEBPACK_IMPORTED_MODULE_7__["default"], {
      to: '/login'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }, _this);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('wantToVisit'),
      nameSection = _useState[0],
      setNameSection = _useState[1];

  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_apollo_queries_locationsUser__WEBPACK_IMPORTED_MODULE_4__["locationsUserQuery"], {
    variables: {
      userId: user.data.userId,
      action: 'wantToVisit'
    }
  }),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data,
      refetch = _useQuery.refetch;

  if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_5__["Loading"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 23
  }, _this);
  if (error) return "Error! ".concat(error);
  var locationsUserList = data.locationsUserList;

  var handleClick = function handleClick(action) {
    setNameSection(action);
    refetch({
      userId: user.data.userId,
      action: action
    }).then(function (r) {
      return r;
    });
  };

  return user.data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_5__["MainLayout"], {
    title: "Profile",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_5__["ProfileMain"], {
      handleClick: handleClick,
      data: user.data,
      nameSection: nameSection,
      locationsUserList: locationsUserList
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, _this);
};

_s(Profile, "UZ5fHCCnhEXNiH9uJNv6JcTxffc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_lib_withApollo__WEBPACK_IMPORTED_MODULE_6__["default"])(Profile));

var _c, _c2;

$RefreshReg$(_c, "Profile");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUmVkaXJlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLnRzeCJdLCJuYW1lcyI6WyJSZWRpcmVjdCIsInRvIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicHVzaCIsInRoZW4iLCJQcm9maWxlIiwidXNlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJkYXRhIiwidXNlU3RhdGUiLCJuYW1lU2VjdGlvbiIsInNldE5hbWVTZWN0aW9uIiwidXNlUXVlcnkiLCJsb2NhdGlvbnNVc2VyUXVlcnkiLCJ2YXJpYWJsZXMiLCJ1c2VySWQiLCJhY3Rpb24iLCJsb2FkaW5nIiwiZXJyb3IiLCJyZWZldGNoIiwibG9jYXRpb25zVXNlckxpc3QiLCJoYW5kbGVDbGljayIsInIiLCJ3aXRoQXBvbGxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUEwQjtBQUFBOztBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTtBQUN4QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixVQUFNLENBQUNHLElBQVAsQ0FBWUosRUFBWixFQUFnQkssSUFBaEI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0wsRUFBRCxDQUZNLENBQVQ7QUFJQSxTQUFPLElBQVA7QUFDRDs7R0FSUUQsUTtVQUNRRyxxRDs7O0tBRFJILFE7QUFVTUEsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1PLE9BQWlCLEdBQUcsU0FBcEJBLE9BQW9CLEdBQVc7QUFBQTs7QUFDbkMsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUEyQkEsS0FBSyxDQUFDRixJQUFqQztBQUFBLEdBQUQsQ0FBeEI7O0FBQ0EsTUFBSSxDQUFDQSxJQUFJLENBQUNHLElBQVYsRUFBZ0I7QUFDZCx3QkFBTyxxRUFBQywwREFBRDtBQUFVLFFBQUUsRUFBRztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUprQyxrQkFLS0Msc0RBQVEsQ0FBQyxhQUFELENBTGI7QUFBQSxNQUszQkMsV0FMMkI7QUFBQSxNQUtkQyxjQUxjOztBQUFBLGtCQU1PQyxvRUFBUSxDQUFDQyxnRkFBRCxFQUFxQjtBQUNyRUMsYUFBUyxFQUFFO0FBQ1RDLFlBQU0sRUFBRVYsSUFBSSxDQUFDRyxJQUFMLENBQVVPLE1BRFQ7QUFFVEMsWUFBTSxFQUFFO0FBRkM7QUFEMEQsR0FBckIsQ0FOZjtBQUFBLE1BTTNCQyxPQU4yQixhQU0zQkEsT0FOMkI7QUFBQSxNQU1sQkMsS0FOa0IsYUFNbEJBLEtBTmtCO0FBQUEsTUFNWFYsSUFOVyxhQU1YQSxJQU5XO0FBQUEsTUFNTFcsT0FOSyxhQU1MQSxPQU5LOztBQVluQyxNQUFJRixPQUFKLEVBQWEsb0JBQU8scUVBQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFQO0FBQ2IsTUFBSUMsS0FBSixFQUFXLHdCQUFpQkEsS0FBakI7QUFid0IsTUFjM0JFLGlCQWQyQixHQWNMWixJQWRLLENBYzNCWSxpQkFkMkI7O0FBZ0JuQyxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDTCxNQUFELEVBQW9CO0FBQ3RDTCxrQkFBYyxDQUFDSyxNQUFELENBQWQ7QUFDQUcsV0FBTyxDQUFDO0FBQ05KLFlBQU0sRUFBRVYsSUFBSSxDQUFDRyxJQUFMLENBQVVPLE1BRFo7QUFFTkMsWUFBTSxFQUFFQTtBQUZGLEtBQUQsQ0FBUCxDQUdHYixJQUhILENBR1EsVUFBQW1CLENBQUM7QUFBQSxhQUFJQSxDQUFKO0FBQUEsS0FIVDtBQUlELEdBTkQ7O0FBT0EsU0FBT2pCLElBQUksQ0FBQ0csSUFBTCxpQkFDTCxxRUFBQyxzREFBRDtBQUFZLFNBQUssRUFBQyxTQUFsQjtBQUFBLDJCQUNFLHFFQUFDLHVEQUFEO0FBQWEsaUJBQVcsRUFBR2EsV0FBM0I7QUFBeUMsVUFBSSxFQUFHaEIsSUFBSSxDQUFDRyxJQUFyRDtBQUE0RCxpQkFBVyxFQUFHRSxXQUExRTtBQUF3Rix1QkFBaUIsRUFBR1U7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUlELENBM0JEOztHQUFNaEIsTztVQUNTRSx1RCxFQUs2Qk0sNEQ7OztLQU50Q1IsTztBQTZCUyxxRUFBQW1CLCtEQUFVLENBQUNuQixPQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuOTE1MDE1OWFlYzU3ZGU1MWY4YWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5mdW5jdGlvbiBSZWRpcmVjdCh7IHRvIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2godG8pLnRoZW4oKVxyXG4gIH0sIFt0b10pXHJcblxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZGlyZWN0IiwiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IGxvY2F0aW9uc1VzZXJRdWVyeSB9IGZyb20gJy4uL2Fwb2xsby9xdWVyaWVzL2xvY2F0aW9uc1VzZXInXHJcbmltcG9ydCB7IExvYWRpbmcsIE1haW5MYXlvdXQsIFByb2ZpbGVNYWluIH0gZnJvbSBcIi4uL0NvbXBvbmVudHNcIlxyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tIFwiLi4vbGliL3dpdGhBcG9sbG9cIlxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdHlwZXMvdXNlcidcclxuaW1wb3J0IFJlZGlyZWN0IGZyb20gXCIuLi9ob29rcy91c2VSZWRpcmVjdFwiXHJcblxyXG5jb25zdCBQcm9maWxlOiBSZWFjdC5GQyA9ICgpOiBhbnkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IHsgdXNlcjogVXNlciB9KSA9PiBzdGF0ZS51c2VyKVxyXG4gIGlmICghdXNlci5kYXRhKSB7XHJcbiAgICByZXR1cm4gPFJlZGlyZWN0IHRvPXsgJy9sb2dpbicgfSAvPlxyXG4gIH1cclxuICBjb25zdCBbIG5hbWVTZWN0aW9uLCBzZXROYW1lU2VjdGlvbiBdID0gdXNlU3RhdGUoJ3dhbnRUb1Zpc2l0JylcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCByZWZldGNoIH0gPSB1c2VRdWVyeShsb2NhdGlvbnNVc2VyUXVlcnksIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB1c2VySWQ6IHVzZXIuZGF0YS51c2VySWQsXHJcbiAgICAgIGFjdGlvbjogJ3dhbnRUb1Zpc2l0J1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8TG9hZGluZyAvPlxyXG4gIGlmIChlcnJvcikgcmV0dXJuIGBFcnJvciEgJHtlcnJvcn1gXHJcbiAgY29uc3QgeyBsb2NhdGlvbnNVc2VyTGlzdCB9ID0gZGF0YVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChhY3Rpb246IHN0cmluZykgPT4ge1xyXG4gICAgc2V0TmFtZVNlY3Rpb24oYWN0aW9uKVxyXG4gICAgcmVmZXRjaCh7XHJcbiAgICAgIHVzZXJJZDogdXNlci5kYXRhLnVzZXJJZCxcclxuICAgICAgYWN0aW9uOiBhY3Rpb25cclxuICAgIH0pLnRoZW4ociA9PiByKVxyXG4gIH1cclxuICByZXR1cm4gdXNlci5kYXRhICYmXHJcbiAgICA8TWFpbkxheW91dCB0aXRsZT0nUHJvZmlsZSc+XHJcbiAgICAgIDxQcm9maWxlTWFpbiBoYW5kbGVDbGljaz17IGhhbmRsZUNsaWNrIH0gZGF0YT17IHVzZXIuZGF0YSB9IG5hbWVTZWN0aW9uPXsgbmFtZVNlY3Rpb24gfSBsb2NhdGlvbnNVc2VyTGlzdD17IGxvY2F0aW9uc1VzZXJMaXN0IH0gLz5cclxuICAgIDwvTWFpbkxheW91dD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhQcm9maWxlKSJdLCJzb3VyY2VSb290IjoiIn0=