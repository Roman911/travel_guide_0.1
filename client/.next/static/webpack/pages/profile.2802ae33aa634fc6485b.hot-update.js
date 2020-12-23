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


var _jsxFileName = "D:\\web\\travel_guide\\client\\pages\\profile.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Profile = function Profile() {
  _s();

  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  });

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
    lineNumber: 18,
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
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3giXSwibmFtZXMiOlsiUHJvZmlsZSIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlU3RhdGUiLCJuYW1lU2VjdGlvbiIsInNldE5hbWVTZWN0aW9uIiwidXNlUXVlcnkiLCJsb2NhdGlvbnNVc2VyUXVlcnkiLCJ2YXJpYWJsZXMiLCJ1c2VySWQiLCJkYXRhIiwiYWN0aW9uIiwibG9hZGluZyIsImVycm9yIiwicmVmZXRjaCIsImxvY2F0aW9uc1VzZXJMaXN0IiwiaGFuZGxlQ2xpY2siLCJ0aGVuIiwiciIsIndpdGhBcG9sbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLE9BQWlCLEdBQUcsU0FBcEJBLE9BQW9CLEdBQVc7QUFBQTs7QUFDbkMsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUEyQkEsS0FBSyxDQUFDRixJQUFqQztBQUFBLEdBQUQsQ0FBeEI7O0FBRG1DLGtCQUVLRyxzREFBUSxDQUFDLGFBQUQsQ0FGYjtBQUFBLE1BRTNCQyxXQUYyQjtBQUFBLE1BRWRDLGNBRmM7O0FBQUEsa0JBR09DLG9FQUFRLENBQUNDLGdGQUFELEVBQXFCO0FBQ3JFQyxhQUFTLEVBQUU7QUFDVEMsWUFBTSxFQUFFVCxJQUFJLENBQUNVLElBQUwsQ0FBVUQsTUFEVDtBQUVURSxZQUFNLEVBQUU7QUFGQztBQUQwRCxHQUFyQixDQUhmO0FBQUEsTUFHM0JDLE9BSDJCLGFBRzNCQSxPQUgyQjtBQUFBLE1BR2xCQyxLQUhrQixhQUdsQkEsS0FIa0I7QUFBQSxNQUdYSCxJQUhXLGFBR1hBLElBSFc7QUFBQSxNQUdMSSxPQUhLLGFBR0xBLE9BSEs7O0FBU25DLE1BQUlGLE9BQUosRUFBYSxvQkFBTyxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsd0JBQWlCQSxLQUFqQjtBQVZ3QixNQVczQkUsaUJBWDJCLEdBV0xMLElBWEssQ0FXM0JLLGlCQVgyQjs7QUFhbkMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0wsTUFBRCxFQUFvQjtBQUN0Q04sa0JBQWMsQ0FBQ00sTUFBRCxDQUFkO0FBQ0FHLFdBQU8sQ0FBQztBQUNOTCxZQUFNLEVBQUVULElBQUksQ0FBQ1UsSUFBTCxDQUFVRCxNQURaO0FBRU5FLFlBQU0sRUFBRUE7QUFGRixLQUFELENBQVAsQ0FHR00sSUFISCxDQUdRLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFKO0FBQUEsS0FIVDtBQUlELEdBTkQ7O0FBT0EsU0FBT2xCLElBQUksQ0FBQ1UsSUFBTCxpQkFDTCxxRUFBQyxzREFBRDtBQUFZLFNBQUssRUFBQyxTQUFsQjtBQUFBLDJCQUNFLHFFQUFDLHVEQUFEO0FBQWEsaUJBQVcsRUFBR00sV0FBM0I7QUFBeUMsVUFBSSxFQUFHaEIsSUFBSSxDQUFDVSxJQUFyRDtBQUE0RCxpQkFBVyxFQUFHTixXQUExRTtBQUF3Rix1QkFBaUIsRUFBR1c7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUlELENBeEJEOztHQUFNaEIsTztVQUNTRSx1RCxFQUU2QkssNEQ7OztLQUh0Q1AsTztBQTBCUyxxRUFBQW9CLCtEQUFVLENBQUNwQixPQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuMjgwMmFlMzNhYTYzNGZjNjQ4NWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xyXG5pbXBvcnQgeyBsb2NhdGlvbnNVc2VyUXVlcnkgfSBmcm9tICcuLi9hcG9sbG8vcXVlcmllcy9sb2NhdGlvbnNVc2VyJ1xyXG5pbXBvcnQgeyBMb2FkaW5nLCBNYWluTGF5b3V0LCBQcm9maWxlTWFpbiB9IGZyb20gXCIuLi9Db21wb25lbnRzXCJcclxuaW1wb3J0IHdpdGhBcG9sbG8gZnJvbSBcIi4uL2xpYi93aXRoQXBvbGxvXCJcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3R5cGVzL3VzZXInXHJcblxyXG5jb25zdCBQcm9maWxlOiBSZWFjdC5GQyA9ICgpOiBhbnkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IHsgdXNlcjogVXNlciB9KSA9PiBzdGF0ZS51c2VyKVxyXG4gIGNvbnN0IFsgbmFtZVNlY3Rpb24sIHNldE5hbWVTZWN0aW9uIF0gPSB1c2VTdGF0ZSgnd2FudFRvVmlzaXQnKVxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KGxvY2F0aW9uc1VzZXJRdWVyeSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHVzZXJJZDogdXNlci5kYXRhLnVzZXJJZCxcclxuICAgICAgYWN0aW9uOiAnd2FudFRvVmlzaXQnXHJcbiAgICB9XHJcbiAgfSlcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxMb2FkaW5nIC8+XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gYEVycm9yISAke2Vycm9yfWBcclxuICBjb25zdCB7IGxvY2F0aW9uc1VzZXJMaXN0IH0gPSBkYXRhXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGFjdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXROYW1lU2VjdGlvbihhY3Rpb24pXHJcbiAgICByZWZldGNoKHtcclxuICAgICAgdXNlcklkOiB1c2VyLmRhdGEudXNlcklkLFxyXG4gICAgICBhY3Rpb246IGFjdGlvblxyXG4gICAgfSkudGhlbihyID0+IHIpXHJcbiAgfVxyXG4gIHJldHVybiB1c2VyLmRhdGEgJiZcclxuICAgIDxNYWluTGF5b3V0IHRpdGxlPSdQcm9maWxlJz5cclxuICAgICAgPFByb2ZpbGVNYWluIGhhbmRsZUNsaWNrPXsgaGFuZGxlQ2xpY2sgfSBkYXRhPXsgdXNlci5kYXRhIH0gbmFtZVNlY3Rpb249eyBuYW1lU2VjdGlvbiB9IGxvY2F0aW9uc1VzZXJMaXN0PXsgbG9jYXRpb25zVXNlckxpc3QgfSAvPlxyXG4gICAgPC9NYWluTGF5b3V0PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKFByb2ZpbGUpIl0sInNvdXJjZVJvb3QiOiIifQ==