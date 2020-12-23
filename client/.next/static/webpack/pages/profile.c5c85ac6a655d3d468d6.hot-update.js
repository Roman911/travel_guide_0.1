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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\web\\travel_guide\\client\\pages\\profile.tsx",
    _s = $RefreshSig$(),
    _this = undefined,
    _s2 = $RefreshSig$();









function Redirect(_ref) {
  _s();

  var to = _ref.to;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    router.push(to).then();
  }, [to]);
  return null;
}

_s(Redirect, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = Redirect;

var Profile = function Profile() {
  _s2();

  var user = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.user;
  });

  if (!user.data) {
    console.log(user.data);
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Redirect, {
      to: '/login'
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
    lineNumber: 34,
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
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s2(Profile, "UZ5fHCCnhEXNiH9uJNv6JcTxffc=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"], _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useQuery"]];
});

_c2 = Profile;
/* harmony default export */ __webpack_exports__["default"] = (_c3 = Object(_lib_withApollo__WEBPACK_IMPORTED_MODULE_6__["default"])(Profile));

var _c, _c2, _c3;

$RefreshReg$(_c, "Redirect");
$RefreshReg$(_c2, "Profile");
$RefreshReg$(_c3, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3giXSwibmFtZXMiOlsiUmVkaXJlY3QiLCJ0byIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInB1c2giLCJ0aGVuIiwiUHJvZmlsZSIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsIm5hbWVTZWN0aW9uIiwic2V0TmFtZVNlY3Rpb24iLCJ1c2VRdWVyeSIsImxvY2F0aW9uc1VzZXJRdWVyeSIsInZhcmlhYmxlcyIsInVzZXJJZCIsImFjdGlvbiIsImxvYWRpbmciLCJlcnJvciIsInJlZmV0Y2giLCJsb2NhdGlvbnNVc2VyTGlzdCIsImhhbmRsZUNsaWNrIiwiciIsIndpdGhBcG9sbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRUEsU0FBU0EsUUFBVCxPQUEwQjtBQUFBOztBQUFBLE1BQU5DLEVBQU0sUUFBTkEsRUFBTTtBQUN4QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkRixVQUFNLENBQUNHLElBQVAsQ0FBWUosRUFBWixFQUFnQkssSUFBaEI7QUFDRCxHQUZRLEVBRU4sQ0FBQ0wsRUFBRCxDQUZNLENBQVQ7QUFJQSxTQUFPLElBQVA7QUFDRDs7R0FSUUQsUTtVQUNRRyxxRDs7O0tBRFJILFE7O0FBVVQsSUFBTU8sT0FBaUIsR0FBRyxTQUFwQkEsT0FBb0IsR0FBVztBQUFBOztBQUNuQyxNQUFNQyxJQUFJLEdBQUdDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQTJCQSxLQUFLLENBQUNGLElBQWpDO0FBQUEsR0FBRCxDQUF4Qjs7QUFDQSxNQUFJLENBQUNBLElBQUksQ0FBQ0csSUFBVixFQUFnQjtBQUNkQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBSSxDQUFDRyxJQUFqQjtBQUNBLHdCQUFPLHFFQUFDLFFBQUQ7QUFBVSxRQUFFLEVBQUc7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFMa0Msa0JBTUtHLHNEQUFRLENBQUMsYUFBRCxDQU5iO0FBQUEsTUFNM0JDLFdBTjJCO0FBQUEsTUFNZEMsY0FOYzs7QUFBQSxrQkFPT0Msb0VBQVEsQ0FBQ0MsZ0ZBQUQsRUFBcUI7QUFDckVDLGFBQVMsRUFBRTtBQUNUQyxZQUFNLEVBQUVaLElBQUksQ0FBQ0csSUFBTCxDQUFVUyxNQURUO0FBRVRDLFlBQU0sRUFBRTtBQUZDO0FBRDBELEdBQXJCLENBUGY7QUFBQSxNQU8zQkMsT0FQMkIsYUFPM0JBLE9BUDJCO0FBQUEsTUFPbEJDLEtBUGtCLGFBT2xCQSxLQVBrQjtBQUFBLE1BT1haLElBUFcsYUFPWEEsSUFQVztBQUFBLE1BT0xhLE9BUEssYUFPTEEsT0FQSzs7QUFhbkMsTUFBSUYsT0FBSixFQUFhLG9CQUFPLHFFQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNiLE1BQUlDLEtBQUosRUFBVyx3QkFBaUJBLEtBQWpCO0FBZHdCLE1BZTNCRSxpQkFmMkIsR0FlTGQsSUFmSyxDQWUzQmMsaUJBZjJCOztBQWlCbkMsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0wsTUFBRCxFQUFvQjtBQUN0Q0wsa0JBQWMsQ0FBQ0ssTUFBRCxDQUFkO0FBQ0FHLFdBQU8sQ0FBQztBQUNOSixZQUFNLEVBQUVaLElBQUksQ0FBQ0csSUFBTCxDQUFVUyxNQURaO0FBRU5DLFlBQU0sRUFBRUE7QUFGRixLQUFELENBQVAsQ0FHR2YsSUFISCxDQUdRLFVBQUFxQixDQUFDO0FBQUEsYUFBSUEsQ0FBSjtBQUFBLEtBSFQ7QUFJRCxHQU5EOztBQU9BLFNBQU9uQixJQUFJLENBQUNHLElBQUwsaUJBQ0wscUVBQUMsc0RBQUQ7QUFBWSxTQUFLLEVBQUMsU0FBbEI7QUFBQSwyQkFDRSxxRUFBQyx1REFBRDtBQUFhLGlCQUFXLEVBQUdlLFdBQTNCO0FBQXlDLFVBQUksRUFBR2xCLElBQUksQ0FBQ0csSUFBckQ7QUFBNEQsaUJBQVcsRUFBR0ksV0FBMUU7QUFBd0YsdUJBQWlCLEVBQUdVO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFJRCxDQTVCRDs7SUFBTWxCLE87VUFDU0UsdUQsRUFNNkJRLDREOzs7TUFQdENWLE87QUE4QlMscUVBQUFxQiwrREFBVSxDQUFDckIsT0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmM1Yzg1YWM2YTY1NWQzZDQ2OGQ2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgbG9jYXRpb25zVXNlclF1ZXJ5IH0gZnJvbSAnLi4vYXBvbGxvL3F1ZXJpZXMvbG9jYXRpb25zVXNlcidcclxuaW1wb3J0IHsgTG9hZGluZywgTWFpbkxheW91dCwgUHJvZmlsZU1haW4gfSBmcm9tIFwiLi4vQ29tcG9uZW50c1wiXHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gXCIuLi9saWIvd2l0aEFwb2xsb1wiXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi90eXBlcy91c2VyJ1xyXG5pbXBvcnQge3VzZVJlZGlyZWN0fSBmcm9tIFwiLi4vaG9va3MvdXNlUmVkaXJlY3RcIlxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5mdW5jdGlvbiBSZWRpcmVjdCh7IHRvIH0pIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcm91dGVyLnB1c2godG8pLnRoZW4oKVxyXG4gIH0sIFt0b10pXHJcblxyXG4gIHJldHVybiBudWxsXHJcbn1cclxuXHJcbmNvbnN0IFByb2ZpbGU6IFJlYWN0LkZDID0gKCk6IGFueSA9PiB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKChzdGF0ZTogeyB1c2VyOiBVc2VyIH0pID0+IHN0YXRlLnVzZXIpXHJcbiAgaWYgKCF1c2VyLmRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIuZGF0YSlcclxuICAgIHJldHVybiA8UmVkaXJlY3QgdG89eyAnL2xvZ2luJyB9IC8+XHJcbiAgfVxyXG4gIGNvbnN0IFsgbmFtZVNlY3Rpb24sIHNldE5hbWVTZWN0aW9uIF0gPSB1c2VTdGF0ZSgnd2FudFRvVmlzaXQnKVxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KGxvY2F0aW9uc1VzZXJRdWVyeSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHVzZXJJZDogdXNlci5kYXRhLnVzZXJJZCxcclxuICAgICAgYWN0aW9uOiAnd2FudFRvVmlzaXQnXHJcbiAgICB9XHJcbiAgfSlcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxMb2FkaW5nIC8+XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gYEVycm9yISAke2Vycm9yfWBcclxuICBjb25zdCB7IGxvY2F0aW9uc1VzZXJMaXN0IH0gPSBkYXRhXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGFjdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXROYW1lU2VjdGlvbihhY3Rpb24pXHJcbiAgICByZWZldGNoKHtcclxuICAgICAgdXNlcklkOiB1c2VyLmRhdGEudXNlcklkLFxyXG4gICAgICBhY3Rpb246IGFjdGlvblxyXG4gICAgfSkudGhlbihyID0+IHIpXHJcbiAgfVxyXG4gIHJldHVybiB1c2VyLmRhdGEgJiZcclxuICAgIDxNYWluTGF5b3V0IHRpdGxlPSdQcm9maWxlJz5cclxuICAgICAgPFByb2ZpbGVNYWluIGhhbmRsZUNsaWNrPXsgaGFuZGxlQ2xpY2sgfSBkYXRhPXsgdXNlci5kYXRhIH0gbmFtZVNlY3Rpb249eyBuYW1lU2VjdGlvbiB9IGxvY2F0aW9uc1VzZXJMaXN0PXsgbG9jYXRpb25zVXNlckxpc3QgfSAvPlxyXG4gICAgPC9NYWluTGF5b3V0PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKFByb2ZpbGUpIl0sInNvdXJjZVJvb3QiOiIifQ==