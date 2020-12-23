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
    console.log(user);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS50c3giXSwibmFtZXMiOlsiUHJvZmlsZSIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY29uc29sZSIsImxvZyIsInVzZVJlZGlyZWN0IiwidXNlU3RhdGUiLCJuYW1lU2VjdGlvbiIsInNldE5hbWVTZWN0aW9uIiwidXNlUXVlcnkiLCJsb2NhdGlvbnNVc2VyUXVlcnkiLCJ2YXJpYWJsZXMiLCJ1c2VySWQiLCJkYXRhIiwiYWN0aW9uIiwibG9hZGluZyIsImVycm9yIiwicmVmZXRjaCIsImxvY2F0aW9uc1VzZXJMaXN0IiwiaGFuZGxlQ2xpY2siLCJ0aGVuIiwiciIsIndpdGhBcG9sbG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE9BQWlCLEdBQUcsU0FBcEJBLE9BQW9CLEdBQVc7QUFBQTs7QUFDbkMsTUFBTUMsSUFBSSxHQUFHQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUEyQkEsS0FBSyxDQUFDRixJQUFqQztBQUFBLEdBQUQsQ0FBeEI7O0FBQ0EsTUFBSUEsSUFBSixFQUFVO0FBQ1JHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaO0FBQ0EsV0FBT0ssc0VBQVcsQ0FBQyxHQUFELENBQWxCO0FBQ0Q7O0FBTGtDLGtCQU1LQyxzREFBUSxDQUFDLGFBQUQsQ0FOYjtBQUFBLE1BTTNCQyxXQU4yQjtBQUFBLE1BTWRDLGNBTmM7O0FBQUEsa0JBT09DLG9FQUFRLENBQUNDLGdGQUFELEVBQXFCO0FBQ3JFQyxhQUFTLEVBQUU7QUFDVEMsWUFBTSxFQUFFWixJQUFJLENBQUNhLElBQUwsQ0FBVUQsTUFEVDtBQUVURSxZQUFNLEVBQUU7QUFGQztBQUQwRCxHQUFyQixDQVBmO0FBQUEsTUFPM0JDLE9BUDJCLGFBTzNCQSxPQVAyQjtBQUFBLE1BT2xCQyxLQVBrQixhQU9sQkEsS0FQa0I7QUFBQSxNQU9YSCxJQVBXLGFBT1hBLElBUFc7QUFBQSxNQU9MSSxPQVBLLGFBT0xBLE9BUEs7O0FBYW5DLE1BQUlGLE9BQUosRUFBYSxvQkFBTyxxRUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsd0JBQWlCQSxLQUFqQjtBQWR3QixNQWUzQkUsaUJBZjJCLEdBZUxMLElBZkssQ0FlM0JLLGlCQWYyQjs7QUFpQm5DLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNMLE1BQUQsRUFBb0I7QUFDdENOLGtCQUFjLENBQUNNLE1BQUQsQ0FBZDtBQUNBRyxXQUFPLENBQUM7QUFDTkwsWUFBTSxFQUFFWixJQUFJLENBQUNhLElBQUwsQ0FBVUQsTUFEWjtBQUVORSxZQUFNLEVBQUVBO0FBRkYsS0FBRCxDQUFQLENBR0dNLElBSEgsQ0FHUSxVQUFBQyxDQUFDO0FBQUEsYUFBSUEsQ0FBSjtBQUFBLEtBSFQ7QUFJRCxHQU5EOztBQU9BLFNBQU9yQixJQUFJLENBQUNhLElBQUwsaUJBQ0wscUVBQUMsc0RBQUQ7QUFBWSxTQUFLLEVBQUMsU0FBbEI7QUFBQSwyQkFDRSxxRUFBQyx1REFBRDtBQUFhLGlCQUFXLEVBQUdNLFdBQTNCO0FBQXlDLFVBQUksRUFBR25CLElBQUksQ0FBQ2EsSUFBckQ7QUFBNEQsaUJBQVcsRUFBR04sV0FBMUU7QUFBd0YsdUJBQWlCLEVBQUdXO0FBQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFJRCxDQTVCRDs7R0FBTW5CLE87VUFDU0UsdUQsRUFHSkksOEQsRUFHaUNJLDREOzs7S0FQdENWLE87QUE4QlMscUVBQUF1QiwrREFBVSxDQUFDdkIsT0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjZkMjQ5YTM4N2NlOTBmNTU1YTI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcclxuaW1wb3J0IHsgbG9jYXRpb25zVXNlclF1ZXJ5IH0gZnJvbSAnLi4vYXBvbGxvL3F1ZXJpZXMvbG9jYXRpb25zVXNlcidcclxuaW1wb3J0IHsgTG9hZGluZywgTWFpbkxheW91dCwgUHJvZmlsZU1haW4gfSBmcm9tIFwiLi4vQ29tcG9uZW50c1wiXHJcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gXCIuLi9saWIvd2l0aEFwb2xsb1wiXHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi90eXBlcy91c2VyJ1xyXG5pbXBvcnQge3VzZVJlZGlyZWN0fSBmcm9tIFwiLi4vaG9va3MvdXNlUmVkaXJlY3RcIlxyXG5cclxuY29uc3QgUHJvZmlsZTogUmVhY3QuRkMgPSAoKTogYW55ID0+IHtcclxuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlOiB7IHVzZXI6IFVzZXIgfSkgPT4gc3RhdGUudXNlcilcclxuICBpZiAodXNlcikge1xyXG4gICAgY29uc29sZS5sb2codXNlcilcclxuICAgIHJldHVybiB1c2VSZWRpcmVjdCgnLycpXHJcbiAgfVxyXG4gIGNvbnN0IFsgbmFtZVNlY3Rpb24sIHNldE5hbWVTZWN0aW9uIF0gPSB1c2VTdGF0ZSgnd2FudFRvVmlzaXQnKVxyXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KGxvY2F0aW9uc1VzZXJRdWVyeSwge1xyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHVzZXJJZDogdXNlci5kYXRhLnVzZXJJZCxcclxuICAgICAgYWN0aW9uOiAnd2FudFRvVmlzaXQnXHJcbiAgICB9XHJcbiAgfSlcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxMb2FkaW5nIC8+XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gYEVycm9yISAke2Vycm9yfWBcclxuICBjb25zdCB7IGxvY2F0aW9uc1VzZXJMaXN0IH0gPSBkYXRhXHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGFjdGlvbjogc3RyaW5nKSA9PiB7XHJcbiAgICBzZXROYW1lU2VjdGlvbihhY3Rpb24pXHJcbiAgICByZWZldGNoKHtcclxuICAgICAgdXNlcklkOiB1c2VyLmRhdGEudXNlcklkLFxyXG4gICAgICBhY3Rpb246IGFjdGlvblxyXG4gICAgfSkudGhlbihyID0+IHIpXHJcbiAgfVxyXG4gIHJldHVybiB1c2VyLmRhdGEgJiZcclxuICAgIDxNYWluTGF5b3V0IHRpdGxlPSdQcm9maWxlJz5cclxuICAgICAgPFByb2ZpbGVNYWluIGhhbmRsZUNsaWNrPXsgaGFuZGxlQ2xpY2sgfSBkYXRhPXsgdXNlci5kYXRhIH0gbmFtZVNlY3Rpb249eyBuYW1lU2VjdGlvbiB9IGxvY2F0aW9uc1VzZXJMaXN0PXsgbG9jYXRpb25zVXNlckxpc3QgfSAvPlxyXG4gICAgPC9NYWluTGF5b3V0PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXBvbGxvKFByb2ZpbGUpIl0sInNvdXJjZVJvb3QiOiIifQ==