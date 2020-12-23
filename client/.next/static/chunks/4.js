(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[4],{

/***/ "./modules/ProfileSidebar/Components/Sidebar.tsx":
/*!*******************************************************!*\
  !*** ./modules/ProfileSidebar/Components/Sidebar.tsx ***!
  \*******************************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sidebar_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar.config */ "./modules/ProfileSidebar/Components/sidebar.config.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./modules/ProfileSidebar/Components/styles.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Components */ "./Components/index.tsx");


var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\ProfileSidebar\\Components\\Sidebar.tsx",
    _this = undefined;









var Sidebar = function Sidebar(_ref) {
  var name = _ref.name,
      avatar = _ref.avatar,
      email = _ref.email,
      closeSidebar = _ref.closeSidebar,
      isOpen = _ref.isOpen,
      logout = _ref.logout;
  var sidebar = _sidebar_config__WEBPACK_IMPORTED_MODULE_6__["sidebarMenuItems"].map(function (item, index) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].li),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: item.route,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          onClick: function onClick() {
            return closeSidebar();
          },
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].link),
          children: item.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 33
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, _this)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }, _this);
  });
  var viewSidebar = isOpen ? Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].sidebar, _styles__WEBPACK_IMPORTED_MODULE_7__["default"].closeSidebar) : Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].sidebar, _styles__WEBPACK_IMPORTED_MODULE_7__["default"].openSidebar);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].wrapper),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: viewSidebar,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].btn),
        onClick: function onClick() {
          return closeSidebar();
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].icon),
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
        avatar: avatar,
        name: name,
        size: "L"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].email),
        children: email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].rating),
        children: "\u0440\u0435\u0439\u0442\u0438\u043D\u0433: 100"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].btnWrapper),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/create-route",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            onClick: function onClick() {
              return closeSidebar();
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
              nameBtn: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442",
              isSubmitting: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].br)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/create-post",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            onClick: function onClick() {
              return closeSidebar();
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
              nameBtn: "\u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u0442\u0430\u0442\u044E",
              isSubmitting: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].br)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/create-location",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            onClick: function onClick() {
              return closeSidebar();
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
              nameBtn: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043B\u043E\u043A\u0430\u0446\u0456\u044E",
              isSubmitting: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 13
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].ul),
        children: [sidebar, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].li),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: function onClick() {
              return logout();
            },
            className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].link),
            children: "\u0412\u0438\u0439\u0442\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 10
  }, _this);
};
_c = Sidebar;

var _c;

$RefreshReg$(_c, "Sidebar");

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

/***/ }),

/***/ "./modules/ProfileSidebar/Components/sidebar.config.ts":
/*!*************************************************************!*\
  !*** ./modules/ProfileSidebar/Components/sidebar.config.ts ***!
  \*************************************************************/
/*! exports provided: sidebarMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarMenuItems", function() { return sidebarMenuItems; });
var sidebarMenuItems = [{
  title: 'Профіль',
  route: '/profile'
}, {
  title: 'Мої публікації',
  route: '/profile-active'
}, {
  title: 'Налаштування',
  route: '/settings'
}, {
  title: 'Обране',
  route: '/selection'
}];

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

/***/ }),

/***/ "./modules/ProfileSidebar/Components/styles.ts":
/*!*****************************************************!*\
  !*** ./modules/ProfileSidebar/Components/styles.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aphrodite/no-important */ "./node_modules/aphrodite/no-important.js");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variabels_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../variabels/colors */ "./variabels/colors.ts");


var translateSidebar = {
  '0%': {
    transform: 'translateX(110%)'
  },
  '100%': {
    transform: 'translateX(0)'
  }
};
var opacityBackgroundSidebar = {
  'from': {
    opacity: 0
  },
  'to': {
    opacity: 1
  }
};
var closeSidebar = {
  '0%': {
    transform: 'translateX(0)'
  },
  '100%': {
    transform: 'translateX(110%)'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"].create({
  wrapper: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '100vh',
    background: 'rgba(255, 255, 255, 0.7)',
    zIndex: 11
  },
  sidebar: {
    position: 'fixed',
    height: '100vh',
    right: 0,
    width: 300,
    background: _variabels_colors__WEBPACK_IMPORTED_MODULE_1__["background"].modal,
    padding: '30px 10px',
    textAlign: 'center'
  },
  openSidebar: {
    animationName: [translateSidebar, opacityBackgroundSidebar],
    animationDuration: '500ms, 400ms'
  },
  closeSidebar: {
    animationName: [closeSidebar],
    animationDuration: '500ms'
  },
  btn: {
    position: 'fixed',
    top: 30,
    right: 320
  },
  icon: {
    width: 'auto !important',
    height: 22,
    color: _variabels_colors__WEBPACK_IMPORTED_MODULE_1__["icons"],
    ':hover': {
      color: _variabels_colors__WEBPACK_IMPORTED_MODULE_1__["btn"]
    }
  },
  email: {
    fontSize: 14,
    padding: '20px 0 8px',
    color: '#fff',
    lineHeight: 0,
    fontWeight: 600
  },
  rating: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 600,
    opacity: 0.8
  },
  btnWrapper: {
    margin: '30px 0 50px'
  },
  br: {
    height: 14
  },
  ul: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  li: {
    padding: 0,
    lineHeight: 1.8
  },
  link: {
    color: '#fff',
    transition: '0.15s',
    cursor: 'pointer',
    ':hover': {
      color: _variabels_colors__WEBPACK_IMPORTED_MODULE_1__["btn"]
    }
  }
}));

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

/***/ }),

/***/ "./modules/ProfileSidebar/Containers/ProfileSidebar.tsx":
/*!**************************************************************!*\
  !*** ./modules/ProfileSidebar/Containers/ProfileSidebar.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.ts");
/* harmony import */ var _Components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Sidebar */ "./modules/ProfileSidebar/Components/Sidebar.tsx");


var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\ProfileSidebar\\Containers\\ProfileSidebar.tsx",
    _this = undefined,
    _s = $RefreshSig$();






var ProfileSidebar = function ProfileSidebar(_ref) {
  _s();

  var data = _ref.data;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var name = data.name,
      avatar = data.avatar,
      email = data.email;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.sidebar;
  }),
      isOpen = _useSelector.isOpen;

  var logout = function logout() {
    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["sidebarActions"].closeSidebar());
    localStorage.removeItem('userData');
    setTimeout(function () {
      dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["userActions"].setData(null));
    }, 600);
  };

  var closeSidebar = function closeSidebar() {
    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["sidebarActions"].closeSidebar());
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_Sidebar__WEBPACK_IMPORTED_MODULE_4__["Sidebar"], {
    name: name,
    avatar: avatar,
    email: email,
    closeSidebar: closeSidebar,
    isOpen: isOpen,
    logout: logout
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 10
  }, _this);
};

_s(ProfileSidebar, "GbKdNPPcoKGdOhnoQ/m4cKrEybI=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"]];
});

_c = ProfileSidebar;
/* harmony default export */ __webpack_exports__["default"] = (ProfileSidebar);

var _c;

$RefreshReg$(_c, "ProfileSidebar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9Qcm9maWxlU2lkZWJhci9Db21wb25lbnRzL1NpZGViYXIudHN4Iiwid2VicGFjazovL19OX0UvLi9tb2R1bGVzL1Byb2ZpbGVTaWRlYmFyL0NvbXBvbmVudHMvc2lkZWJhci5jb25maWcudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvUHJvZmlsZVNpZGViYXIvQ29tcG9uZW50cy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvUHJvZmlsZVNpZGViYXIvQ29udGFpbmVycy9Qcm9maWxlU2lkZWJhci50c3giXSwibmFtZXMiOlsiU2lkZWJhciIsIm5hbWUiLCJhdmF0YXIiLCJlbWFpbCIsImNsb3NlU2lkZWJhciIsImlzT3BlbiIsImxvZ291dCIsInNpZGViYXIiLCJzaWRlYmFyTWVudUl0ZW1zIiwibWFwIiwiaXRlbSIsImluZGV4IiwiY3NzIiwic3R5bGVzIiwibGkiLCJyb3V0ZSIsImxpbmsiLCJ0aXRsZSIsInZpZXdTaWRlYmFyIiwib3BlblNpZGViYXIiLCJ3cmFwcGVyIiwiYnRuIiwiaWNvbiIsImZhVGltZXMiLCJyYXRpbmciLCJidG5XcmFwcGVyIiwiYnIiLCJ1bCIsInRyYW5zbGF0ZVNpZGViYXIiLCJ0cmFuc2Zvcm0iLCJvcGFjaXR5QmFja2dyb3VuZFNpZGViYXIiLCJvcGFjaXR5IiwiU3R5bGVTaGVldCIsImNyZWF0ZSIsInBvc2l0aW9uIiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiekluZGV4IiwicmlnaHQiLCJtb2RhbCIsInBhZGRpbmciLCJ0ZXh0QWxpZ24iLCJhbmltYXRpb25OYW1lIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJjb2xvciIsImljb25zIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZm9udFdlaWdodCIsIm1hcmdpbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsInRyYW5zaXRpb24iLCJjdXJzb3IiLCJQcm9maWxlU2lkZWJhciIsImRhdGEiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInNpZGViYXJBY3Rpb25zIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNldFRpbWVvdXQiLCJ1c2VyQWN0aW9ucyIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXTyxJQUFNQSxPQUErQixHQUFHLFNBQWxDQSxPQUFrQyxPQUEyRDtBQUFBLE1BQXhEQyxJQUF3RCxRQUF4REEsSUFBd0Q7QUFBQSxNQUFsREMsTUFBa0QsUUFBbERBLE1BQWtEO0FBQUEsTUFBMUNDLEtBQTBDLFFBQTFDQSxLQUEwQztBQUFBLE1BQW5DQyxZQUFtQyxRQUFuQ0EsWUFBbUM7QUFBQSxNQUFyQkMsTUFBcUIsUUFBckJBLE1BQXFCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBRXhHLE1BQU1DLE9BQU8sR0FBR0MsZ0VBQWdCLENBQUNDLEdBQWpCLENBQXFCLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNwRCx3QkFBTztBQUFJLGVBQVMsRUFBR0Msa0VBQUcsQ0FBQ0MsK0NBQU0sQ0FBQ0MsRUFBUixDQUFuQjtBQUFBLDZCQUNMLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFHSixJQUFJLENBQUNLLEtBQWxCO0FBQUEsK0JBQTBCO0FBQUcsaUJBQU8sRUFBRztBQUFBLG1CQUFNWCxZQUFZLEVBQWxCO0FBQUEsV0FBYjtBQUFvQyxtQkFBUyxFQUFHUSxrRUFBRyxDQUFDQywrQ0FBTSxDQUFDRyxJQUFSLENBQW5EO0FBQUEsb0JBQXFFTixJQUFJLENBQUNPO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURLLE9BQXVDTixLQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFHRCxHQUplLENB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Ryx1RCxFQUVFQyx1RDs7O0tBSGZKLGM7QUFtQlNBLDZFQUFmIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiXHJcbmltcG9ydCB7IGZhVGltZXMgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCJcclxuaW1wb3J0IHsgY3NzIH0gZnJvbSBcImFwaHJvZGl0ZS9uby1pbXBvcnRhbnRcIlxyXG5pbXBvcnQgeyBzaWRlYmFyTWVudUl0ZW1zIH0gZnJvbSBcIi4vc2lkZWJhci5jb25maWdcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlc1wiXHJcbmltcG9ydCB7IEF2YXRhciwgQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL0NvbXBvbmVudHNcIlxyXG5cclxudHlwZSBTaWRlYmFyUHJvcHMgPSB7XHJcbiAgbmFtZTogc3RyaW5nXHJcbiAgYXZhdGFyOiBzdHJpbmdcclxuICBlbWFpbDogc3RyaW5nXHJcbiAgY2xvc2VTaWRlYmFyOiAoKSA9PiB2b2lkXHJcbiAgaXNPcGVuOiBudWxsIHwgYm9vbGVhblxyXG4gIGxvZ291dDogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZWJhcjogUmVhY3QuRkM8U2lkZWJhclByb3BzPiA9ICh7IG5hbWUsIGF2YXRhciwgZW1haWwsIGNsb3NlU2lkZWJhciwgaXNPcGVuLCBsb2dvdXQgfSkgPT4ge1xyXG5cclxuICBjb25zdCBzaWRlYmFyID0gc2lkZWJhck1lbnVJdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT17IGNzcyhzdHlsZXMubGkpIH0ga2V5PXsgaW5kZXggfT5cclxuICAgICAgPExpbmsgaHJlZj17IGl0ZW0ucm91dGUgfT48YSBvbkNsaWNrPXsgKCkgPT4gY2xvc2VTaWRlYmFyKCkgfSBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLmxpbmspIH0+eyBpdGVtLnRpdGxlIH08L2E+PC9MaW5rPlxyXG4gICAgPC9saT5cclxuICB9KVxyXG5cclxuICBjb25zdCB2aWV3U2lkZWJhciA9IGlzT3BlbiA/IGNzcyhzdHlsZXMuc2lkZWJhciwgc3R5bGVzLmNsb3NlU2lkZWJhcikgOiBjc3Moc3R5bGVzLnNpZGViYXIsIHN0eWxlcy5vcGVuU2lkZWJhcilcclxuXHJcbiAgcmV0dXJuIDxzZWN0aW9uIGNsYXNzTmFtZT17IGNzcyhzdHlsZXMud3JhcHBlcikgfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXsgdmlld1NpZGViYXIgfT5cclxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLmJ0bikgfSBvbkNsaWNrPXsgKCkgPT4gY2xvc2VTaWRlYmFyKCkgfSA+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLmljb24pIH0gaWNvbj17IGZhVGltZXMgfSAvPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPEF2YXRhciBhdmF0YXI9eyBhdmF0YXIgfSBuYW1lPXsgbmFtZSB9IHNpemU9J0wnIC8+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17IGNzcyhzdHlsZXMuZW1haWwpIH0+eyBlbWFpbCB9PC9wPlxyXG4gICAgICA8cCBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLnJhdGluZykgfT7RgNC10LnRgtC40L3QszogMTAwPC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGNzcyhzdHlsZXMuYnRuV3JhcHBlcikgfT5cclxuICAgICAgICA8TGluayBocmVmPScvY3JlYXRlLXJvdXRlJz5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9eyAoKSA9PiBjbG9zZVNpZGViYXIoKSB9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIG5hbWVCdG49J9CU0L7QtNCw0YLQuCDQvNCw0YDRiNGA0YPRgicgaXNTdWJtaXR0aW5nPXsgZmFsc2UgfSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNzcyhzdHlsZXMuYnIpIH0vPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy9jcmVhdGUtcG9zdCc+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsgKCkgPT4gY2xvc2VTaWRlYmFyKCkgfT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBuYW1lQnRuPSfQlNC+0LTQsNGC0Lgg0YHRgtCw0YLRjicgaXNTdWJtaXR0aW5nPXsgZmFsc2UgfSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IGNzcyhzdHlsZXMuYnIpIH0vPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy9jcmVhdGUtbG9jYXRpb24nPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17ICgpID0+IGNsb3NlU2lkZWJhcigpIH0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gbmFtZUJ0bj0n0JTQvtC00LDRgtC4INC70L7QutCw0YbRltGOJyBpc1N1Ym1pdHRpbmc9eyBmYWxzZSB9IC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHVsIGNsYXNzTmFtZT17IGNzcyhzdHlsZXMudWwpIH0+XHJcbiAgICAgICAgeyBzaWRlYmFyIH1cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5saSkgfT5cclxuICAgICAgICAgIDxwIG9uQ2xpY2s9eyAoKSA9PiBsb2dvdXQoKSB9IGNsYXNzTmFtZT17IGNzcyhzdHlsZXMubGluaykgfT7QktC40LnRgtC4PC9wPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICA8L3NlY3Rpb24+XHJcbn0iLCJleHBvcnQgY29uc3Qgc2lkZWJhck1lbnVJdGVtcyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ9Cf0YDQvtGE0ZbQu9GMJyxcclxuICAgIHJvdXRlOiAnL3Byb2ZpbGUnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ9Cc0L7RlyDQv9GD0LHQu9GW0LrQsNGG0ZbRlycsXHJcbiAgICByb3V0ZTogJy9wcm9maWxlLWFjdGl2ZSdcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPJyxcclxuICAgIHJvdXRlOiAnL3NldHRpbmdzJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICfQntCx0YDQsNC90LUnLFxyXG4gICAgcm91dGU6ICcvc2VsZWN0aW9uJ1xyXG4gIH1cclxuXSIsImltcG9ydCB7IFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50J1xyXG5pbXBvcnQgeyBpY29ucywgYnRuLCBiYWNrZ3JvdW5kIH0gZnJvbSAnLi4vLi4vLi4vdmFyaWFiZWxzL2NvbG9ycydcclxuXHJcbmNvbnN0IHRyYW5zbGF0ZVNpZGViYXIgPSB7XHJcbiAgJzAlJzoge1xyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMTAlKScsXHJcbiAgfSxcclxuICAnMTAwJSc6IHtcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxyXG4gIH0sXHJcbn1cclxuY29uc3Qgb3BhY2l0eUJhY2tncm91bmRTaWRlYmFyID0ge1xyXG4gICdmcm9tJzoge1xyXG4gICAgb3BhY2l0eTogMCxcclxuICB9LFxyXG4gICd0byc6IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgfVxyXG59XHJcbmNvbnN0IGNsb3NlU2lkZWJhciA9IHtcclxuICAnMCUnOiB7XHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcclxuICB9LFxyXG4gICcxMDAlJzoge1xyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMTAlKScsXHJcbiAgfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3R5bGVTaGVldC5jcmVhdGUoe1xyXG4gIHdyYXBwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMHZoJyxcclxuICAgIGJhY2tncm91bmQ6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyknLFxyXG4gICAgekluZGV4OiAxMVxyXG4gIH0sXHJcbiAgc2lkZWJhcjoge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICByaWdodDogMCxcclxuICAgIHdpZHRoOiAzMDAsXHJcbiAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kLm1vZGFsLFxyXG4gICAgcGFkZGluZzogJzMwcHggMTBweCcsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgfSxcclxuICBvcGVuU2lkZWJhcjoge1xyXG4gICAgYW5pbWF0aW9uTmFtZTogW3RyYW5zbGF0ZVNpZGViYXIsIG9wYWNpdHlCYWNrZ3JvdW5kU2lkZWJhcl0sXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogJzUwMG1zLCA0MDBtcydcclxuICB9LFxyXG4gIGNsb3NlU2lkZWJhcjoge1xyXG4gICAgYW5pbWF0aW9uTmFtZTogW2Nsb3NlU2lkZWJhcl0sXHJcbiAgICBhbmltYXRpb25EdXJhdGlvbjogJzUwMG1zJ1xyXG4gIH0sXHJcbiAgYnRuOiB7XHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIHRvcDogMzAsXHJcbiAgICByaWdodDogMzIwXHJcbiAgfSxcclxuICBpY29uOiB7XHJcbiAgICB3aWR0aDogJ2F1dG8gIWltcG9ydGFudCcsXHJcbiAgICBoZWlnaHQ6IDIyLFxyXG4gICAgY29sb3I6IGljb25zLFxyXG4gICAgJzpob3Zlcic6IHtcclxuICAgICAgY29sb3I6IGJ0blxyXG4gICAgfVxyXG4gIH0sXHJcbiAgZW1haWw6IHtcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICAgIHBhZGRpbmc6ICcyMHB4IDAgOHB4JyxcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICBsaW5lSGVpZ2h0OiAwLFxyXG4gICAgZm9udFdlaWdodDogNjAwXHJcbiAgfSxcclxuICByYXRpbmc6IHtcclxuICAgIGZvbnRTaXplOiAxMixcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICBvcGFjaXR5OiAwLjhcclxuICB9LFxyXG4gIGJ0bldyYXBwZXI6IHtcclxuICAgIG1hcmdpbjogJzMwcHggMCA1MHB4J1xyXG4gIH0sXHJcbiAgYnI6IHtcclxuICAgIGhlaWdodDogMTRcclxuICB9LFxyXG4gIHVsOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInXHJcbiAgfSxcclxuICBsaToge1xyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGxpbmVIZWlnaHQ6IDEuOFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIHRyYW5zaXRpb246ICcwLjE1cycsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIGNvbG9yOiBidG5cclxuICAgIH1cclxuICB9XHJcbn0pIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzaWRlYmFyQWN0aW9ucywgdXNlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9yZWR1eC9hY3Rpb25zJ1xyXG5pbXBvcnQgeyBTaWRlYmFyIH0gZnJvbSAnLi4vQ29tcG9uZW50cy9TaWRlYmFyJ1xyXG5pbXBvcnQgeyBVc2VyRGF0YSB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3VzZXInXHJcbmltcG9ydCB7IFNpZGViYXJQcm9wcyB9IGZyb20gJy4uLy4uLy4uL3R5cGVzL3NpZGViYXInXHJcblxyXG50eXBlIFByb2ZpbGVTaWRlYmFyUHJvcHMgPSB7XHJcbiAgZGF0YTogVXNlckRhdGFcclxufVxyXG5cclxuY29uc3QgUHJvZmlsZVNpZGViYXI6IFJlYWN0LkZDPFByb2ZpbGVTaWRlYmFyUHJvcHM+ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXHJcbiAgY29uc3QgeyBuYW1lLCBhdmF0YXIsIGVtYWlsIH0gPSBkYXRhXHJcbiAgY29uc3QgeyBpc09wZW4gfSA9IHVzZVNlbGVjdG9yKChzdGF0ZTogeyBzaWRlYmFyOiBTaWRlYmFyUHJvcHMgfSkgPT4gc3RhdGUuc2lkZWJhcilcclxuICBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzaWRlYmFyQWN0aW9ucy5jbG9zZVNpZGViYXIoKSlcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyRGF0YScpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgZGlzcGF0Y2godXNlckFjdGlvbnMuc2V0RGF0YShudWxsKSlcclxuICAgIH0sIDYwMClcclxuICB9XHJcblxyXG4gIGNvbnN0IGNsb3NlU2lkZWJhciA9ICgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNpZGViYXJBY3Rpb25zLmNsb3NlU2lkZWJhcigpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxTaWRlYmFyIG5hbWU9eyBuYW1lIH0gYXZhdGFyPXsgYXZhdGFyIH0gZW1haWw9eyBlbWFpbCB9IGNsb3NlU2lkZWJhcj17IGNsb3NlU2lkZWJhciB9IGlzT3Blbj17IGlzT3BlbiB9IGxvZ291dD17IGxvZ291dCB9IC8+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVTaWRlYmFyIl0sInNvdXJjZVJvb3QiOiIifQ==