exports.ids = [1];
exports.modules = {

/***/ "./modules/ProfileSidebar/Components/Sidebar.tsx":
/*!*******************************************************!*\
  !*** ./modules/ProfileSidebar/Components/Sidebar.tsx ***!
  \*******************************************************/
/*! exports provided: Sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sidebar", function() { return Sidebar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aphrodite/no-important */ "aphrodite/no-important");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _sidebar_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidebar.config */ "./modules/ProfileSidebar/Components/sidebar.config.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./modules/ProfileSidebar/Components/styles.ts");
/* harmony import */ var _Components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../Components */ "./Components/index.tsx");

var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\ProfileSidebar\\Components\\Sidebar.tsx";








const Sidebar = ({
  name,
  avatar,
  email,
  closeSidebar,
  isOpen,
  logout
}) => {
  const sidebar = _sidebar_config__WEBPACK_IMPORTED_MODULE_6__["sidebarMenuItems"].map((item, index) => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].li),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: item.route,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          onClick: () => closeSidebar(),
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].link),
          children: item.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 33
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }, undefined)
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 12
    }, undefined);
  });
  const viewSidebar = isOpen ? Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].sidebar, _styles__WEBPACK_IMPORTED_MODULE_7__["default"].closeSidebar) : Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].sidebar, _styles__WEBPACK_IMPORTED_MODULE_7__["default"].openSidebar);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
    className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].wrapper),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: viewSidebar,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].btn),
        onClick: () => closeSidebar(),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].icon),
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_8__["Avatar"], {
        avatar: avatar,
        name: name,
        size: "L"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].email),
        children: email
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].rating),
        children: "\u0440\u0435\u0439\u0442\u0438\u043D\u0433: 100"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].btnWrapper),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/create-route",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            onClick: () => closeSidebar(),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
              nameBtn: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442",
              isSubmitting: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].br)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/create-post",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            onClick: () => closeSidebar(),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
              nameBtn: "\u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u0442\u0430\u0442\u044E",
              isSubmitting: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].br)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/create-location",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            onClick: () => closeSidebar(),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components__WEBPACK_IMPORTED_MODULE_8__["Button"], {
              nameBtn: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043B\u043E\u043A\u0430\u0446\u0456\u044E",
              isSubmitting: false
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
        className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].ul),
        children: [sidebar, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].li),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            onClick: () => logout(),
            className: Object(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_5__["css"])(_styles__WEBPACK_IMPORTED_MODULE_7__["default"].link),
            children: "\u0412\u0438\u0439\u0442\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./modules/ProfileSidebar/Components/sidebar.config.ts":
/*!*************************************************************!*\
  !*** ./modules/ProfileSidebar/Components/sidebar.config.ts ***!
  \*************************************************************/
/*! exports provided: sidebarMenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarMenuItems", function() { return sidebarMenuItems; });
const sidebarMenuItems = [{
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

/***/ }),

/***/ "./modules/ProfileSidebar/Components/styles.ts":
/*!*****************************************************!*\
  !*** ./modules/ProfileSidebar/Components/styles.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aphrodite/no-important */ "aphrodite/no-important");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variabels_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../variabels/colors */ "./variabels/colors.ts");


const translateSidebar = {
  '0%': {
    transform: 'translateX(110%)'
  },
  '100%': {
    transform: 'translateX(0)'
  }
};
const opacityBackgroundSidebar = {
  'from': {
    opacity: 0
  },
  'to': {
    opacity: 1
  }
};
const closeSidebar = {
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

/***/ }),

/***/ "./modules/ProfileSidebar/Containers/ProfileSidebar.tsx":
/*!**************************************************************!*\
  !*** ./modules/ProfileSidebar/Containers/ProfileSidebar.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../redux/actions */ "./redux/actions/index.ts");
/* harmony import */ var _Components_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/Sidebar */ "./modules/ProfileSidebar/Components/Sidebar.tsx");

var _jsxFileName = "D:\\web\\travel_guide\\client\\modules\\ProfileSidebar\\Containers\\ProfileSidebar.tsx";





const ProfileSidebar = ({
  data
}) => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    name,
    avatar,
    email
  } = data;
  const {
    isOpen
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.sidebar);

  const logout = () => {
    dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["sidebarActions"].closeSidebar());
    localStorage.removeItem('userData');
    setTimeout(() => {
      dispatch(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["userActions"].setData(null));
    }, 600);
  };

  const closeSidebar = () => {
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
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ProfileSidebar);

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9tb2R1bGVzL1Byb2ZpbGVTaWRlYmFyL0NvbXBvbmVudHMvU2lkZWJhci50c3giLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9Qcm9maWxlU2lkZWJhci9Db21wb25lbnRzL3NpZGViYXIuY29uZmlnLnRzIiwid2VicGFjazovLy8uL21vZHVsZXMvUHJvZmlsZVNpZGViYXIvQ29tcG9uZW50cy9zdHlsZXMudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9Qcm9maWxlU2lkZWJhci9Db250YWluZXJzL1Byb2ZpbGVTaWRlYmFyLnRzeCJdLCJuYW1lcyI6WyJTaWRlYmFyIiwibmFtZSIsImF2YXRhciIsImVtYWlsIiwiY2xvc2VTaWRlYmFyIiwiaXNPcGVuIiwibG9nb3V0Iiwic2lkZWJhciIsInNpZGViYXJNZW51SXRlbXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJjc3MiLCJzdHlsZXMiLCJsaSIsInJvdXRlIiwibGluayIsInRpdGxlIiwidmlld1NpZGViYXIiLCJvcGVuU2lkZWJhciIsIndyYXBwZXIiLCJidG4iLCJpY29uIiwiZmFUaW1lcyIsInJhdGluZyIsImJ0bldyYXBwZXIiLCJiciIsInVsIiwidHJhbnNsYXRlU2lkZWJhciIsInRyYW5zZm9ybSIsIm9wYWNpdHlCYWNrZ3JvdW5kU2lkZWJhciIsIm9wYWNpdHkiLCJTdHlsZVNoZWV0IiwiY3JlYXRlIiwicG9zaXRpb24iLCJ0b3AiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJ6SW5kZXgiLCJyaWdodCIsIm1vZGFsIiwicGFkZGluZyIsInRleHRBbGlnbiIsImFuaW1hdGlvbk5hbWUiLCJhbmltYXRpb25EdXJhdGlvbiIsImNvbG9yIiwiaWNvbnMiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJmb250V2VpZ2h0IiwibWFyZ2luIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwidHJhbnNpdGlvbiIsImN1cnNvciIsIlByb2ZpbGVTaWRlYmFyIiwiZGF0YSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwic2lkZWJhckFjdGlvbnMiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0VGltZW91dCIsInVzZXJBY3Rpb25zIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVdPLE1BQU1BLE9BQStCLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDLFFBQVI7QUFBZ0JDLE9BQWhCO0FBQXVCQyxjQUF2QjtBQUFxQ0MsUUFBckM7QUFBNkNDO0FBQTdDLENBQUQsS0FBMkQ7QUFFeEcsUUFBTUMsT0FBTyxHQUFHQyxnRUFBZ0IsQ0FBQ0MsR0FBakIsQ0FBcUIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEtBQWlCO0FBQ3BELHdCQUFPO0FBQUksZUFBUyxFQUFHQyxrRUFBRyxDQUFDQywrQ0FBTSxDQUFDQyxFQUFSLENBQW5CO0FBQUEsNkJBQ0wscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUdKLElBQUksQ0FBQ0ssS0FBbEI7QUFBQSwrQkFBMEI7QUFBRyxpQkFBTyxFQUFHLE1BQU1YLFlBQVksRUFBL0I7QUFBb0MsbUJBQVMsRUFBR1Esa0VBQUcsQ0FBQ0MsK0NBQU0sQ0FBQ0csSUFBUixDQUFuRDtBQUFBLG9CQUFxRU4sSUFBSSxDQUFDTztBQUExRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESyxPQUF1Q04sS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBUDtBQUdELEdBSmUsQ0FBaEI7QUFNQSxRQUFNTyxXQUFXLEdBQUdiLE1BQU0sR0FBR08sa0VBQUcsQ0FBQ0MsK0NBQU0sQ0FBQ04sT0FBUixFQUFpQk0sK0NBQU0sQ0FBQ1QsWUFBeEIsQ0FBTixHQUE4Q1Esa0VBQUcsQ0FBQ0MsK0NBQU0sQ0FBQ04sT0FBUixFQUFpQk0sK0NB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Q0FBUjtBQUNELEtBRlMsRUFFUCxHQUZPLENBQVY7QUFHRCxHQU5EOztBQVFBLFFBQU1oRSxZQUFZLEdBQUcsTUFBTTtBQUN6QnVELFlBQVEsQ0FBQ0ksNkRBQWMsQ0FBQzNELFlBQWYsRUFBRCxDQUFSO0FBQ0QsR0FGRDs7QUFJQSxzQkFBTyxxRUFBQywyREFBRDtBQUFTLFFBQUksRUFBR0gsSUFBaEI7QUFBdUIsVUFBTSxFQUFHQyxNQUFoQztBQUF5QyxTQUFLLEVBQUdDLEtBQWpEO0FBQXlELGdCQUFZLEVBQUdDLFlBQXhFO0FBQXVGLFVBQU0sRUFBR0MsTUFBaEc7QUFBeUcsVUFBTSxFQUFHQztBQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQWpCRDs7QUFtQmVtRCw2RUFBZixFIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIlxyXG5pbXBvcnQgeyBmYVRpbWVzIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiXHJcbmltcG9ydCB7IGNzcyB9IGZyb20gXCJhcGhyb2RpdGUvbm8taW1wb3J0YW50XCJcclxuaW1wb3J0IHsgc2lkZWJhck1lbnVJdGVtcyB9IGZyb20gXCIuL3NpZGViYXIuY29uZmlnXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXNcIlxyXG5pbXBvcnQgeyBBdmF0YXIsIEJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9Db21wb25lbnRzXCJcclxuXHJcbnR5cGUgU2lkZWJhclByb3BzID0ge1xyXG4gIG5hbWU6IHN0cmluZ1xyXG4gIGF2YXRhcjogc3RyaW5nXHJcbiAgZW1haWw6IHN0cmluZ1xyXG4gIGNsb3NlU2lkZWJhcjogKCkgPT4gdm9pZFxyXG4gIGlzT3BlbjogbnVsbCB8IGJvb2xlYW5cclxuICBsb2dvdXQ6ICgpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGViYXI6IFJlYWN0LkZDPFNpZGViYXJQcm9wcz4gPSAoeyBuYW1lLCBhdmF0YXIsIGVtYWlsLCBjbG9zZVNpZGViYXIsIGlzT3BlbiwgbG9nb3V0IH0pID0+IHtcclxuXHJcbiAgY29uc3Qgc2lkZWJhciA9IHNpZGViYXJNZW51SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLmxpKSB9IGtleT17IGluZGV4IH0+XHJcbiAgICAgIDxMaW5rIGhyZWY9eyBpdGVtLnJvdXRlIH0+PGEgb25DbGljaz17ICgpID0+IGNsb3NlU2lkZWJhcigpIH0gY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5saW5rKSB9PnsgaXRlbS50aXRsZSB9PC9hPjwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgfSlcclxuXHJcbiAgY29uc3Qgdmlld1NpZGViYXIgPSBpc09wZW4gPyBjc3Moc3R5bGVzLnNpZGViYXIsIHN0eWxlcy5jbG9zZVNpZGViYXIpIDogY3NzKHN0eWxlcy5zaWRlYmFyLCBzdHlsZXMub3BlblNpZGViYXIpXHJcblxyXG4gIHJldHVybiA8c2VjdGlvbiBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLndyYXBwZXIpIH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17IHZpZXdTaWRlYmFyIH0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5idG4pIH0gb25DbGljaz17ICgpID0+IGNsb3NlU2lkZWJhcigpIH0gPlxyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5pY29uKSB9IGljb249eyBmYVRpbWVzIH0gLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxBdmF0YXIgYXZhdGFyPXsgYXZhdGFyIH0gbmFtZT17IG5hbWUgfSBzaXplPSdMJyAvPlxyXG4gICAgICA8cCBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLmVtYWlsKSB9PnsgZW1haWwgfTwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPXsgY3NzKHN0eWxlcy5yYXRpbmcpIH0+0YDQtdC50YLQuNC90LM6IDEwMDwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLmJ0bldyYXBwZXIpIH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj0nL2NyZWF0ZS1yb3V0ZSc+XHJcbiAgICAgICAgICA8YSBvbkNsaWNrPXsgKCkgPT4gY2xvc2VTaWRlYmFyKCkgfT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBuYW1lQnRuPSfQlNC+0LTQsNGC0Lgg0LzQsNGA0YjRgNGD0YInIGlzU3VibWl0dGluZz17IGZhbHNlIH0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLmJyKSB9Lz5cclxuICAgICAgICA8TGluayBocmVmPScvY3JlYXRlLXBvc3QnPlxyXG4gICAgICAgICAgPGEgb25DbGljaz17ICgpID0+IGNsb3NlU2lkZWJhcigpIH0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gbmFtZUJ0bj0n0JTQvtC00LDRgtC4INGB0YLQsNGC0Y4nIGlzU3VibWl0dGluZz17IGZhbHNlIH0gLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLmJyKSB9Lz5cclxuICAgICAgICA8TGluayBocmVmPScvY3JlYXRlLWxvY2F0aW9uJz5cclxuICAgICAgICAgIDxhIG9uQ2xpY2s9eyAoKSA9PiBjbG9zZVNpZGViYXIoKSB9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIG5hbWVCdG49J9CU0L7QtNCw0YLQuCDQu9C+0LrQsNGG0ZbRjicgaXNTdWJtaXR0aW5nPXsgZmFsc2UgfSAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLnVsKSB9PlxyXG4gICAgICAgIHsgc2lkZWJhciB9XHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT17IGNzcyhzdHlsZXMubGkpIH0+XHJcbiAgICAgICAgICA8cCBvbkNsaWNrPXsgKCkgPT4gbG9nb3V0KCkgfSBjbGFzc05hbWU9eyBjc3Moc3R5bGVzLmxpbmspIH0+0JLQuNC50YLQuDwvcD5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9zZWN0aW9uPlxyXG59IiwiZXhwb3J0IGNvbnN0IHNpZGViYXJNZW51SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICfQn9GA0L7RhNGW0LvRjCcsXHJcbiAgICByb3V0ZTogJy9wcm9maWxlJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICfQnNC+0Zcg0L/Rg9Cx0LvRltC60LDRhtGW0ZcnLFxyXG4gICAgcm91dGU6ICcvcHJvZmlsZS1hY3RpdmUnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ9Cd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjycsXHJcbiAgICByb3V0ZTogJy9zZXR0aW5ncydcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAn0J7QsdGA0LDQvdC1JyxcclxuICAgIHJvdXRlOiAnL3NlbGVjdGlvbidcclxuICB9XHJcbl0iLCJpbXBvcnQgeyBTdHlsZVNoZWV0IH0gZnJvbSAnYXBocm9kaXRlL25vLWltcG9ydGFudCdcclxuaW1wb3J0IHsgaWNvbnMsIGJ0biwgYmFja2dyb3VuZCB9IGZyb20gJy4uLy4uLy4uL3ZhcmlhYmVscy9jb2xvcnMnXHJcblxyXG5jb25zdCB0cmFuc2xhdGVTaWRlYmFyID0ge1xyXG4gICcwJSc6IHtcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTEwJSknLFxyXG4gIH0sXHJcbiAgJzEwMCUnOiB7XHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJyxcclxuICB9LFxyXG59XHJcbmNvbnN0IG9wYWNpdHlCYWNrZ3JvdW5kU2lkZWJhciA9IHtcclxuICAnZnJvbSc6IHtcclxuICAgIG9wYWNpdHk6IDAsXHJcbiAgfSxcclxuICAndG8nOiB7XHJcbiAgICBvcGFjaXR5OiAxLFxyXG4gIH1cclxufVxyXG5jb25zdCBjbG9zZVNpZGViYXIgPSB7XHJcbiAgJzAlJzoge1xyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsXHJcbiAgfSxcclxuICAnMTAwJSc6IHtcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTEwJSknLFxyXG4gIH0sXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN0eWxlU2hlZXQuY3JlYXRlKHtcclxuICB3cmFwcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIHRvcDogMCxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgICBiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpJyxcclxuICAgIHpJbmRleDogMTFcclxuICB9LFxyXG4gIHNpZGViYXI6IHtcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICB3aWR0aDogMzAwLFxyXG4gICAgYmFja2dyb3VuZDogYmFja2dyb3VuZC5tb2RhbCxcclxuICAgIHBhZGRpbmc6ICczMHB4IDEwcHgnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH0sXHJcbiAgb3BlblNpZGViYXI6IHtcclxuICAgIGFuaW1hdGlvbk5hbWU6IFt0cmFuc2xhdGVTaWRlYmFyLCBvcGFjaXR5QmFja2dyb3VuZFNpZGViYXJdLFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICc1MDBtcywgNDAwbXMnXHJcbiAgfSxcclxuICBjbG9zZVNpZGViYXI6IHtcclxuICAgIGFuaW1hdGlvbk5hbWU6IFtjbG9zZVNpZGViYXJdLFxyXG4gICAgYW5pbWF0aW9uRHVyYXRpb246ICc1MDBtcydcclxuICB9LFxyXG4gIGJ0bjoge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICB0b3A6IDMwLFxyXG4gICAgcmlnaHQ6IDMyMFxyXG4gIH0sXHJcbiAgaWNvbjoge1xyXG4gICAgd2lkdGg6ICdhdXRvICFpbXBvcnRhbnQnLFxyXG4gICAgaGVpZ2h0OiAyMixcclxuICAgIGNvbG9yOiBpY29ucyxcclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIGNvbG9yOiBidG5cclxuICAgIH1cclxuICB9LFxyXG4gIGVtYWlsOiB7XHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgICBwYWRkaW5nOiAnMjBweCAwIDhweCcsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgbGluZUhlaWdodDogMCxcclxuICAgIGZvbnRXZWlnaHQ6IDYwMFxyXG4gIH0sXHJcbiAgcmF0aW5nOiB7XHJcbiAgICBmb250U2l6ZTogMTIsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgb3BhY2l0eTogMC44XHJcbiAgfSxcclxuICBidG5XcmFwcGVyOiB7XHJcbiAgICBtYXJnaW46ICczMHB4IDAgNTBweCdcclxuICB9LFxyXG4gIGJyOiB7XHJcbiAgICBoZWlnaHQ6IDE0XHJcbiAgfSxcclxuICB1bDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJ1xyXG4gIH0sXHJcbiAgbGk6IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjhcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICB0cmFuc2l0aW9uOiAnMC4xNXMnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBjb2xvcjogYnRuXHJcbiAgICB9XHJcbiAgfVxyXG59KSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuaW1wb3J0IHsgc2lkZWJhckFjdGlvbnMsIHVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vcmVkdXgvYWN0aW9ucydcclxuaW1wb3J0IHsgU2lkZWJhciB9IGZyb20gJy4uL0NvbXBvbmVudHMvU2lkZWJhcidcclxuaW1wb3J0IHsgVXNlckRhdGEgfSBmcm9tICcuLi8uLi8uLi90eXBlcy91c2VyJ1xyXG5pbXBvcnQgeyBTaWRlYmFyUHJvcHMgfSBmcm9tICcuLi8uLi8uLi90eXBlcy9zaWRlYmFyJ1xyXG5cclxudHlwZSBQcm9maWxlU2lkZWJhclByb3BzID0ge1xyXG4gIGRhdGE6IFVzZXJEYXRhXHJcbn1cclxuXHJcbmNvbnN0IFByb2ZpbGVTaWRlYmFyOiBSZWFjdC5GQzxQcm9maWxlU2lkZWJhclByb3BzPiA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxyXG4gIGNvbnN0IHsgbmFtZSwgYXZhdGFyLCBlbWFpbCB9ID0gZGF0YVxyXG4gIGNvbnN0IHsgaXNPcGVuIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGU6IHsgc2lkZWJhcjogU2lkZWJhclByb3BzIH0pID0+IHN0YXRlLnNpZGViYXIpXHJcbiAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2lkZWJhckFjdGlvbnMuY2xvc2VTaWRlYmFyKCkpXHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlckRhdGEnKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHVzZXJBY3Rpb25zLnNldERhdGEobnVsbCkpXHJcbiAgICB9LCA2MDApXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbG9zZVNpZGViYXIgPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzaWRlYmFyQWN0aW9ucy5jbG9zZVNpZGViYXIoKSlcclxuICB9XHJcblxyXG4gIHJldHVybiA8U2lkZWJhciBuYW1lPXsgbmFtZSB9IGF2YXRhcj17IGF2YXRhciB9IGVtYWlsPXsgZW1haWwgfSBjbG9zZVNpZGViYXI9eyBjbG9zZVNpZGViYXIgfSBpc09wZW49eyBpc09wZW4gfSBsb2dvdXQ9eyBsb2dvdXQgfSAvPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlU2lkZWJhciJdLCJzb3VyY2VSb290IjoiIn0=