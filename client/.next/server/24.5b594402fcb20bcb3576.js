exports.ids = [24];
exports.modules = {

/***/ "ztF2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/actions/index.ts + 3 modules
var actions = __webpack_require__("BDHH");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "aphrodite/no-important"
var no_important_ = __webpack_require__("TsDz");

// CONCATENATED MODULE: ./modules/ProfileSidebar/Components/sidebar.config.ts
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
// EXTERNAL MODULE: ./variabels/colors.ts
var colors = __webpack_require__("JGdP");

// CONCATENATED MODULE: ./modules/ProfileSidebar/Components/styles.ts


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
const styles_closeSidebar = {
  '0%': {
    transform: 'translateX(0)'
  },
  '100%': {
    transform: 'translateX(110%)'
  }
};
/* harmony default export */ var styles = (no_important_["StyleSheet"].create({
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
    background: colors["a" /* background */].modal,
    padding: '30px 10px',
    textAlign: 'center'
  },
  openSidebar: {
    animationName: [translateSidebar, opacityBackgroundSidebar],
    animationDuration: '500ms, 400ms'
  },
  closeSidebar: {
    animationName: [styles_closeSidebar],
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
    color: colors["e" /* icons */],
    ':hover': {
      color: colors["c" /* btn */]
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
      color: colors["c" /* btn */]
    }
  }
}));
// EXTERNAL MODULE: ./Components/index.tsx + 45 modules
var Components = __webpack_require__("5cwH");

// CONCATENATED MODULE: ./modules/ProfileSidebar/Components/Sidebar.tsx










const Sidebar = ({
  name,
  avatar,
  email,
  closeSidebar,
  isOpen,
  logout
}) => {
  const sidebar = sidebarMenuItems.map((item, index) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
      className: Object(no_important_["css"])(styles.li),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: item.route,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          onClick: () => closeSidebar(),
          className: Object(no_important_["css"])(styles.link),
          children: item.title
        })
      })
    }, index);
  });
  const viewSidebar = isOpen ? Object(no_important_["css"])(styles.sidebar, styles.closeSidebar) : Object(no_important_["css"])(styles.sidebar, styles.openSidebar);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: Object(no_important_["css"])(styles.wrapper),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: viewSidebar,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        className: Object(no_important_["css"])(styles.btn),
        onClick: () => closeSidebar(),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: Object(no_important_["css"])(styles.icon),
          icon: free_solid_svg_icons_["faTimes"]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["d" /* Avatar */], {
        avatar: avatar,
        name: name,
        size: "L"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Object(no_important_["css"])(styles.email),
        children: email
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Object(no_important_["css"])(styles.rating),
        children: "\u0440\u0435\u0439\u0442\u0438\u043D\u0433: 100"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(styles.btnWrapper),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/create-route",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            onClick: () => closeSidebar(),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["e" /* Button */], {
              nameBtn: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442",
              isSubmitting: false
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Object(no_important_["css"])(styles.br)
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/create-post",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            onClick: () => closeSidebar(),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["e" /* Button */], {
              nameBtn: "\u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u0442\u0430\u0442\u044E",
              isSubmitting: false
            })
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Object(no_important_["css"])(styles.br)
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/create-location",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            onClick: () => closeSidebar(),
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["e" /* Button */], {
              nameBtn: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043B\u043E\u043A\u0430\u0446\u0456\u044E",
              isSubmitting: false
            })
          })
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        className: Object(no_important_["css"])(styles.ul),
        children: [sidebar, /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          className: Object(no_important_["css"])(styles.li),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            onClick: () => logout(),
            className: Object(no_important_["css"])(styles.link),
            children: "\u0412\u0438\u0439\u0442\u0438"
          })
        })]
      })]
    })
  });
};
// CONCATENATED MODULE: ./modules/ProfileSidebar/Containers/ProfileSidebar.tsx






const ProfileSidebar = ({
  data
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    name,
    avatar,
    email
  } = data;
  const {
    isOpen
  } = Object(external_react_redux_["useSelector"])(state => state.sidebar);

  const logout = () => {
    dispatch(actions["b" /* sidebarActions */].closeSidebar());
    localStorage.removeItem('userData');
    setTimeout(() => {
      dispatch(actions["c" /* userActions */].setData(null));
    }, 600);
  };

  const closeSidebar = () => {
    dispatch(actions["b" /* sidebarActions */].closeSidebar());
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Sidebar, {
    name: name,
    avatar: avatar,
    email: email,
    closeSidebar: closeSidebar,
    isOpen: isOpen,
    logout: logout
  });
};

/* harmony default export */ var Containers_ProfileSidebar = __webpack_exports__["default"] = (ProfileSidebar);

/***/ })

};;