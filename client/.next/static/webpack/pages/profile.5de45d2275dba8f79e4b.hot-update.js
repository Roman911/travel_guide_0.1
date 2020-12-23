webpackHotUpdate_N_E("pages/profile",{

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

  if (user) {
    console.log('user');
    return Object(_hooks_useRedirect__WEBPACK_IMPORTED_MODULE_7__["useRedirect"])('/');
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
    lineNumber: 23,
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
      lineNumber: 36,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, _this);
};

_s(Profile, "4nG3sxv3FRPsB9c2HEvGB6Mjl1U=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], _hooks_useRedirect__WEBPACK_IMPORTED_MODULE_7__["useRedirect"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3giXSwibmFtZXMiOlsiUHJvZmlsZSIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsInVzZVJlZGlyZWN0IiwidXNlU3RhdGUiLCJuYW1lU2VjdGlvbiIsInNldE5hbWVTZWN0aW9uIiwidXNlUXVlcnkiLCJsb2NhdGlvbnNVc2VyUXVlcnkiLCJ2YXJpYWJsZXMiLCJ1c2VySWQiLCJkYXRhIiwiYWN0aW9uIiwibG9hZGluZyIsImVycm9yIiwicmVmZXRjaCIsImxvY2F0aW9uc1VzZXJMaXN0IiwiaGFuZGxlQ2xpY2siLCJ0aGVuIiwiciIsIndpdGhBcG9sbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQWlCLEdBQUcsU0FBcEJBLE9BQW9CLEdBQVc7QUFBQTs7QUFDbkMsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUEyQkEsS0FBSyxDQUFDRixJQUFqQztBQUFBLEdBQUQsQ0FBeEI7O0FBQ0EsTUFBSUEsSUFBSixFQUFVO0FBQ1JHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQSxXQUFPQyxzRUFBVyxDQUFDLEdBQUQsQ0FBbEI7QUFDRDs7QUFMa0Msa0JBTUtDLHNEQUFRLENBQUMsYUFBRCxDQU5iO0FBQUEsTUFNM0JDLFdBTjJCO0FBQUEsTUFNZEMsY0FOYzs7QUFBQSxrQkFPT0Msb0VBQVEsQ0FBQ0MsZ0ZBQUQsRUFBcUI7QUFDckVDLGFBQVMsRUFBRTtBQUNUQyxZQUFNLEVBQUVaLElBQUksQ0FBQ2EsSUFBTCxDQUFVRCxNQURUO0FBRVRFLFlBQU0sRUFBRTtBQUZDO0FBRDBELEdBQXJCLENBUGY7QUFBQSxNQU8zQkMsT0FQMkIsYUFPM0JBLE9BUDJCO0FBQUEsTUFPbEJDLEtBUGtCLGFBT2xCQSxLQVBrQjtBQUFBLE1BT1hILElBUFcsYUFPWEEsSUFQVztBQUFBLE1BT0xJLE9BUEssYUFPTEEsT0FQSzs7QUFhbkMsTUFBSUYsT0FBSixFQUFhLG9CQUFPLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyx3QkFBaUJBLEtBQWpCO0FBZHdCLE1BZTNCRSxpQkFmMkIsR0FlTEwsSUFmSyxDQWUzQkssaUJBZjJCOztBQWlCbkMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0wsTUFBRCxFQUFvQjtBQUN0Q04sa0JBQWMsQ0FBQ00sTUFBRCxDQUFkO0FBQ0FHLFdBQU8sQ0FBQztBQUNOTCxZQUFNLEVBQUVaLElBQUksQ0FBQ2EsSUFBTCxDQUFVRCxNQURaO0FBRU5FLFlBQU0sRUFBRUE7QUFGRixLQUFELENBQVAsQ0FHR00sSUFISCxDQUdRLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFKO0FBQUEsS0FIVDtBQUlELEdBTkQ7O0FBT0EsU0FBT3JCLElBQUksQ0FBQ2EsSUFBTCxpQkFDTCxxRUFBQyxzREFBRDtBQUFZLFNBQUssRUFBQyxTQUFsQjtBQUFBLDJCQUNFLHFFQUFDLHVEQUFEO0FBQWEsaUJBQVcsRUFBR00sV0FBM0I7QUFBeUMsVUFBSSxFQUFHbkIsSUFBSSxDQUFDYSxJQUFyRDtBQUE0RCxpQkFBVyxFQUFHTixXQUExRTtBQUF3Rix1QkFBaUIsRUFBR1c7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUlELENBNUJEOztHQUFNbkIsTztVQUNTRSx1RCxFQUdKSSw4RCxFQUdpQ0ksNEQ7OztLQVB0Q1YsTztBQThCUyxxRUFBQXVCLCtEQUFVLENBQUN2QixPQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNWRlNDVkMjI3NWRiYThmNzllNGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBsb2NhdGlvbnNVc2VyUXVlcnkgfSBmcm9tICcuLi9hcG9sbG8vcXVlcmllcy9sb2NhdGlvbnNVc2VyJ1xyXG5pbXBvcnQgeyBMb2FkaW5nLCBNYWluTGF5b3V0LCBQcm9maWxlTWFpbiB9IGZyb20gXCIuLi9Db21wb25lbnRzXCJcclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSBcIi4uL2xpYi93aXRoQXBvbGxvXCJcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3R5cGVzL3VzZXInXHJcbmltcG9ydCB7dXNlUmVkaXJlY3R9IGZyb20gXCIuLi9ob29rcy91c2VSZWRpcmVjdFwiXHJcblxyXG5jb25zdCBQcm9maWxlOiBSZWFjdC5GQyA9ICgpOiBhbnkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IHsgdXNlcjogVXNlciB9KSA9PiBzdGF0ZS51c2VyKVxyXG4gIGlmICh1c2VyKSB7XHJcbiAgICBjb25zb2xlLmxvZygndXNlcicpXHJcbiAgICByZXR1cm4gdXNlUmVkaXJlY3QoJy8nKVxyXG4gIH1cclxuICBjb25zdCBbIG5hbWVTZWN0aW9uLCBzZXROYW1lU2VjdGlvbiBdID0gdXNlU3RhdGUoJ3dhbnRUb1Zpc2l0JylcclxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhLCByZWZldGNoIH0gPSB1c2VRdWVyeShsb2NhdGlvbnNVc2VyUXVlcnksIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB1c2VySWQ6IHVzZXIuZGF0YS51c2VySWQsXHJcbiAgICAgIGFjdGlvbjogJ3dhbnRUb1Zpc2l0J1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8TG9hZGluZyAvPlxyXG4gIGlmIChlcnJvcikgcmV0dXJuIGBFcnJvciEgJHtlcnJvcn1gXHJcbiAgY29uc3QgeyBsb2NhdGlvbnNVc2VyTGlzdCB9ID0gZGF0YVxyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChhY3Rpb246IHN0cmluZykgPT4ge1xyXG4gICAgc2V0TmFtZVNlY3Rpb24oYWN0aW9uKVxyXG4gICAgcmVmZXRjaCh7XHJcbiAgICAgIHVzZXJJZDogdXNlci5kYXRhLnVzZXJJZCxcclxuICAgICAgYWN0aW9uOiBhY3Rpb25cclxuICAgIH0pLnRoZW4ociA9PiByKVxyXG4gIH1cclxuICByZXR1cm4gdXNlci5kYXRhICYmXHJcbiAgICA8TWFpbkxheW91dCB0aXRsZT0nUHJvZmlsZSc+XHJcbiAgICAgIDxQcm9maWxlTWFpbiBoYW5kbGVDbGljaz17IGhhbmRsZUNsaWNrIH0gZGF0YT17IHVzZXIuZGF0YSB9IG5hbWVTZWN0aW9uPXsgbmFtZVNlY3Rpb24gfSBsb2NhdGlvbnNVc2VyTGlzdD17IGxvY2F0aW9uc1VzZXJMaXN0IH0gLz5cclxuICAgIDwvTWFpbkxheW91dD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyhQcm9maWxlKSJdLCJzb3VyY2VSb290IjoiIn0=