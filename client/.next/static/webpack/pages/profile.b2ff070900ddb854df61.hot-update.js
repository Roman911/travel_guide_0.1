webpackHotUpdate_N_E("pages/profile",{

/***/ "./hooks/useRedirect.tsx":
/*!*******************************!*\
  !*** ./hooks/useRedirect.tsx ***!
  \*******************************/
/*! exports provided: useRedirect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRedirect", function() { return useRedirect; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _s = $RefreshSig$();



var useRedirect = function useRedirect(_ref) {
  _s();

  var to = _ref.to;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    router.push(to).then();
  }, [to]);
  return null;
};

_s(useRedirect, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_0__["useRouter"]];
});

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

  if (!user) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlUmVkaXJlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9maWxlLnRzeCJdLCJuYW1lcyI6WyJ1c2VSZWRpcmVjdCIsInRvIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwicHVzaCIsInRoZW4iLCJQcm9maWxlIiwidXNlciIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VTdGF0ZSIsIm5hbWVTZWN0aW9uIiwic2V0TmFtZVNlY3Rpb24iLCJ1c2VRdWVyeSIsImxvY2F0aW9uc1VzZXJRdWVyeSIsInZhcmlhYmxlcyIsInVzZXJJZCIsImRhdGEiLCJhY3Rpb24iLCJsb2FkaW5nIiwiZXJyb3IiLCJyZWZldGNoIiwibG9jYXRpb25zVXNlckxpc3QiLCJoYW5kbGVDbGljayIsInIiLCJ3aXRoQXBvbGxvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxFQUFjLFFBQWRBLEVBQWM7QUFDMUMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEYsVUFBTSxDQUFDRyxJQUFQLENBQVlKLEVBQVosRUFBZ0JLLElBQWhCO0FBQ0QsR0FGUSxFQUVOLENBQUNMLEVBQUQsQ0FGTSxDQUFUO0FBSUEsU0FBTyxJQUFQO0FBQ0QsQ0FSTTs7R0FBTUQsVztVQUNJRyxxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSmpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1JLE9BQWlCLEdBQUcsU0FBcEJBLE9BQW9CLEdBQVc7QUFBQTs7QUFDbkMsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUEyQkEsS0FBSyxDQUFDRixJQUFqQztBQUFBLEdBQUQsQ0FBeEI7O0FBQ0EsTUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDVCxXQUFPUixzRUFBVyxDQUFDLEdBQUQsQ0FBbEI7QUFDRDs7QUFKa0Msa0JBS0tXLHNEQUFRLENBQUMsYUFBRCxDQUxiO0FBQUEsTUFLM0JDLFdBTDJCO0FBQUEsTUFLZEMsY0FMYzs7QUFBQSxrQkFNT0Msb0VBQVEsQ0FBQ0MsZ0ZBQUQsRUFBcUI7QUFDckVDLGFBQVMsRUFBRTtBQUNUQyxZQUFNLEVBQUVULElBQUksQ0FBQ1UsSUFBTCxDQUFVRCxNQURUO0FBRVRFLFlBQU0sRUFBRTtBQUZDO0FBRDBELEdBQXJCLENBTmY7QUFBQSxNQU0zQkMsT0FOMkIsYUFNM0JBLE9BTjJCO0FBQUEsTUFNbEJDLEtBTmtCLGFBTWxCQSxLQU5rQjtBQUFBLE1BTVhILElBTlcsYUFNWEEsSUFOVztBQUFBLE1BTUxJLE9BTkssYUFNTEEsT0FOSzs7QUFZbkMsTUFBSUYsT0FBSixFQUFhLG9CQUFPLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyx3QkFBaUJBLEtBQWpCO0FBYndCLE1BYzNCRSxpQkFkMkIsR0FjTEwsSUFkSyxDQWMzQkssaUJBZDJCOztBQWdCbkMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0wsTUFBRCxFQUFvQjtBQUN0Q04sa0JBQWMsQ0FBQ00sTUFBRCxDQUFkO0FBQ0FHLFdBQU8sQ0FBQztBQUNOTCxZQUFNLEVBQUVULElBQUksQ0FBQ1UsSUFBTCxDQUFVRCxNQURaO0FBRU5FLFlBQU0sRUFBRUE7QUFGRixLQUFELENBQVAsQ0FHR2IsSUFISCxDQUdRLFVBQUFtQixDQUFDO0FBQUEsYUFBSUEsQ0FBSjtBQUFBLEtBSFQ7QUFJRCxHQU5EOztBQU9BLFNBQU9qQixJQUFJLENBQUNVLElBQUwsaUJBQ0wscUVBQUMsc0RBQUQ7QUFBWSxTQUFLLEVBQUMsU0FBbEI7QUFBQSwyQkFDRSxxRUFBQyx1REFBRDtBQUFhLGlCQUFXLEVBQUdNLFdBQTNCO0FBQXlDLFVBQUksRUFBR2hCLElBQUksQ0FBQ1UsSUFBckQ7QUFBNEQsaUJBQVcsRUFBR04sV0FBMUU7QUFBd0YsdUJBQWlCLEVBQUdXO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFJRCxDQTNCRDs7R0FBTWhCLE87VUFDU0UsdUQsRUFFSlQsOEQsRUFHaUNjLDREOzs7S0FOdENQLE87QUE2QlMscUVBQUFtQiwrREFBVSxDQUFDbkIsT0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmIyZmYwNzA5MDBkZGI4NTRkZjYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVJlZGlyZWN0ID0gKHsgdG8gfTogYW55KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKHRvKS50aGVuKClcclxuICB9LCBbdG9dKVxyXG5cclxuICByZXR1cm4gbnVsbFxyXG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxyXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXHJcbmltcG9ydCB7IGxvY2F0aW9uc1VzZXJRdWVyeSB9IGZyb20gJy4uL2Fwb2xsby9xdWVyaWVzL2xvY2F0aW9uc1VzZXInXHJcbmltcG9ydCB7IExvYWRpbmcsIE1haW5MYXlvdXQsIFByb2ZpbGVNYWluIH0gZnJvbSBcIi4uL0NvbXBvbmVudHNcIlxyXG5pbXBvcnQgd2l0aEFwb2xsbyBmcm9tIFwiLi4vbGliL3dpdGhBcG9sbG9cIlxyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdHlwZXMvdXNlcidcclxuaW1wb3J0IHt1c2VSZWRpcmVjdH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlZGlyZWN0XCI7XHJcblxyXG5jb25zdCBQcm9maWxlOiBSZWFjdC5GQyA9ICgpOiBhbnkgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3Rvcigoc3RhdGU6IHsgdXNlcjogVXNlciB9KSA9PiBzdGF0ZS51c2VyKVxyXG4gIGlmICghdXNlcikge1xyXG4gICAgcmV0dXJuIHVzZVJlZGlyZWN0KCcvJylcclxuICB9XHJcbiAgY29uc3QgWyBuYW1lU2VjdGlvbiwgc2V0TmFtZVNlY3Rpb24gXSA9IHVzZVN0YXRlKCd3YW50VG9WaXNpdCcpXHJcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSwgcmVmZXRjaCB9ID0gdXNlUXVlcnkobG9jYXRpb25zVXNlclF1ZXJ5LCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgdXNlcklkOiB1c2VyLmRhdGEudXNlcklkLFxyXG4gICAgICBhY3Rpb246ICd3YW50VG9WaXNpdCdcclxuICAgIH1cclxuICB9KVxyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPExvYWRpbmcgLz5cclxuICBpZiAoZXJyb3IpIHJldHVybiBgRXJyb3IhICR7ZXJyb3J9YFxyXG4gIGNvbnN0IHsgbG9jYXRpb25zVXNlckxpc3QgfSA9IGRhdGFcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoYWN0aW9uOiBzdHJpbmcpID0+IHtcclxuICAgIHNldE5hbWVTZWN0aW9uKGFjdGlvbilcclxuICAgIHJlZmV0Y2goe1xyXG4gICAgICB1c2VySWQ6IHVzZXIuZGF0YS51c2VySWQsXHJcbiAgICAgIGFjdGlvbjogYWN0aW9uXHJcbiAgICB9KS50aGVuKHIgPT4gcilcclxuICB9XHJcbiAgcmV0dXJuIHVzZXIuZGF0YSAmJlxyXG4gICAgPE1haW5MYXlvdXQgdGl0bGU9J1Byb2ZpbGUnPlxyXG4gICAgICA8UHJvZmlsZU1haW4gaGFuZGxlQ2xpY2s9eyBoYW5kbGVDbGljayB9IGRhdGE9eyB1c2VyLmRhdGEgfSBuYW1lU2VjdGlvbj17IG5hbWVTZWN0aW9uIH0gbG9jYXRpb25zVXNlckxpc3Q9eyBsb2NhdGlvbnNVc2VyTGlzdCB9IC8+XHJcbiAgICA8L01haW5MYXlvdXQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oUHJvZmlsZSkiXSwic291cmNlUm9vdCI6IiJ9