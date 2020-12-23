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

  if (!user.data) {
    console.log(user.data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3giXSwibmFtZXMiOlsiUHJvZmlsZSIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VSZWRpcmVjdCIsInVzZVN0YXRlIiwibmFtZVNlY3Rpb24iLCJzZXROYW1lU2VjdGlvbiIsInVzZVF1ZXJ5IiwibG9jYXRpb25zVXNlclF1ZXJ5IiwidmFyaWFibGVzIiwidXNlcklkIiwiYWN0aW9uIiwibG9hZGluZyIsImVycm9yIiwicmVmZXRjaCIsImxvY2F0aW9uc1VzZXJMaXN0IiwiaGFuZGxlQ2xpY2siLCJ0aGVuIiwiciIsIndpdGhBcG9sbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQWlCLEdBQUcsU0FBcEJBLE9BQW9CLEdBQVc7QUFBQTs7QUFDbkMsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUEyQkEsS0FBSyxDQUFDRixJQUFqQztBQUFBLEdBQUQsQ0FBeEI7O0FBQ0EsTUFBSSxDQUFDQSxJQUFJLENBQUNHLElBQVYsRUFBZ0I7QUFDZEMsV0FBTyxDQUFDQyxHQUFSLENBQVlMLElBQUksQ0FBQ0csSUFBakI7QUFDQSxXQUFPRyxzRUFBVyxDQUFDLEdBQUQsQ0FBbEI7QUFDRDs7QUFMa0Msa0JBTUtDLHNEQUFRLENBQUMsYUFBRCxDQU5iO0FBQUEsTUFNM0JDLFdBTjJCO0FBQUEsTUFNZEMsY0FOYzs7QUFBQSxrQkFPT0Msb0VBQVEsQ0FBQ0MsZ0ZBQUQsRUFBcUI7QUFDckVDLGFBQVMsRUFBRTtBQUNUQyxZQUFNLEVBQUViLElBQUksQ0FBQ0csSUFBTCxDQUFVVSxNQURUO0FBRVRDLFlBQU0sRUFBRTtBQUZDO0FBRDBELEdBQXJCLENBUGY7QUFBQSxNQU8zQkMsT0FQMkIsYUFPM0JBLE9BUDJCO0FBQUEsTUFPbEJDLEtBUGtCLGFBT2xCQSxLQVBrQjtBQUFBLE1BT1hiLElBUFcsYUFPWEEsSUFQVztBQUFBLE1BT0xjLE9BUEssYUFPTEEsT0FQSzs7QUFhbkMsTUFBSUYsT0FBSixFQUFhLG9CQUFPLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyx3QkFBaUJBLEtBQWpCO0FBZHdCLE1BZTNCRSxpQkFmMkIsR0FlTGYsSUFmSyxDQWUzQmUsaUJBZjJCOztBQWlCbkMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0wsTUFBRCxFQUFvQjtBQUN0Q0wsa0JBQWMsQ0FBQ0ssTUFBRCxDQUFkO0FBQ0FHLFdBQU8sQ0FBQztBQUNOSixZQUFNLEVBQUViLElBQUksQ0FBQ0csSUFBTCxDQUFVVSxNQURaO0FBRU5DLFlBQU0sRUFBRUE7QUFGRixLQUFELENBQVAsQ0FHR00sSUFISCxDQUdRLFVBQUFDLENBQUM7QUFBQSxhQUFJQSxDQUFKO0FBQUEsS0FIVDtBQUlELEdBTkQ7O0FBT0EsU0FBT3JCLElBQUksQ0FBQ0csSUFBTCxpQkFDTCxxRUFBQyxzREFBRDtBQUFZLFNBQUssRUFBQyxTQUFsQjtBQUFBLDJCQUNFLHFFQUFDLHVEQUFEO0FBQWEsaUJBQVcsRUFBR2dCLFdBQTNCO0FBQXlDLFVBQUksRUFBR25CLElBQUksQ0FBQ0csSUFBckQ7QUFBNEQsaUJBQVcsRUFBR0ssV0FBMUU7QUFBd0YsdUJBQWlCLEVBQUdVO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFJRCxDQTVCRDs7R0FBTW5CLE87VUFDU0UsdUQsRUFHSkssOEQsRUFHaUNJLDREOzs7S0FQdENYLE87QUE4QlMscUVBQUF1QiwrREFBVSxDQUFDdkIsT0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjRkMWQyODI5NTk1NTg0YmZjZTNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgbG9jYXRpb25zVXNlclF1ZXJ5IH0gZnJvbSAnLi4vYXBvbGxvL3F1ZXJpZXMvbG9jYXRpb25zVXNlcidcclxuaW1wb3J0IHsgTG9hZGluZywgTWFpbkxheW91dCwgUHJvZmlsZU1haW4gfSBmcm9tIFwiLi4vQ29tcG9uZW50c1wiXHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gXCIuLi9saWIvd2l0aEFwb2xsb1wiXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi90eXBlcy91c2VyJ1xyXG5pbXBvcnQge3VzZVJlZGlyZWN0fSBmcm9tIFwiLi4vaG9va3MvdXNlUmVkaXJlY3RcIlxyXG5cclxuY29uc3QgUHJvZmlsZTogUmVhY3QuRkMgPSAoKTogYW55ID0+IHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlOiB7IHVzZXI6IFVzZXIgfSkgPT4gc3RhdGUudXNlcilcclxuICBpZiAoIXVzZXIuZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2codXNlci5kYXRhKVxyXG4gICAgcmV0dXJuIHVzZVJlZGlyZWN0KCcvJylcclxuICB9XHJcbiAgY29uc3QgWyBuYW1lU2VjdGlvbiwgc2V0TmFtZVNlY3Rpb24gXSA9IHVzZVN0YXRlKCd3YW50VG9WaXNpdCcpXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSwgcmVmZXRjaCB9ID0gdXNlUXVlcnkobG9jYXRpb25zVXNlclF1ZXJ5LCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgdXNlcklkOiB1c2VyLmRhdGEudXNlcklkLFxyXG4gICAgICBhY3Rpb246ICd3YW50VG9WaXNpdCdcclxuICAgIH1cclxuICB9KVxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPExvYWRpbmcgLz5cclxuICBpZiAoZXJyb3IpIHJldHVybiBgRXJyb3IhICR7ZXJyb3J9YFxyXG4gIGNvbnN0IHsgbG9jYXRpb25zVXNlckxpc3QgfSA9IGRhdGFcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoYWN0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgIHNldE5hbWVTZWN0aW9uKGFjdGlvbilcclxuICAgIHJlZmV0Y2goe1xyXG4gICAgICB1c2VySWQ6IHVzZXIuZGF0YS51c2VySWQsXHJcbiAgICAgIGFjdGlvbjogYWN0aW9uXHJcbiAgICB9KS50aGVuKHIgPT4gcilcclxuICB9XHJcbiAgcmV0dXJuIHVzZXIuZGF0YSAmJlxyXG4gICAgPE1haW5MYXlvdXQgdGl0bGU9J1Byb2ZpbGUnPlxyXG4gICAgICA8UHJvZmlsZU1haW4gaGFuZGxlQ2xpY2s9eyBoYW5kbGVDbGljayB9IGRhdGE9eyB1c2VyLmRhdGEgfSBuYW1lU2VjdGlvbj17IG5hbWVTZWN0aW9uIH0gbG9jYXRpb25zVXNlckxpc3Q9eyBsb2NhdGlvbnNVc2VyTGlzdCB9IC8+XHJcbiAgICA8L01haW5MYXlvdXQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oUHJvZmlsZSkiXSwic291cmNlUm9vdCI6IiJ9