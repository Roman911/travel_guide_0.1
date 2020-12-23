exports.ids = [20];
exports.modules = {

/***/ "gC9v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");

// EXTERNAL MODULE: external "aphrodite/no-important"
var no_important_ = __webpack_require__("TsDz");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./Components/index.tsx + 45 modules
var Components = __webpack_require__("5cwH");

// CONCATENATED MODULE: ./hooks/usePortal.tsx


function createRootElement(id) {
  const rootContainer = document.createElement('div');
  rootContainer.setAttribute('id', id);
  return rootContainer;
}

function addRootElement(rootElem) {
  document.body.insertBefore(rootElem, document.body.lastElementChild.nextElementSibling);
}

function usePortal(id) {
  const rootElemRef = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(function setupElement() {
    const existingParent = document.querySelector(`#${id}`);
    const parentElem = existingParent || createRootElement(id);

    if (!existingParent) {
      addRootElement(parentElem);
    }

    parentElem.appendChild(rootElemRef.current);
    return function removeElement() {
      rootElemRef.current.remove();

      if (parentElem.childNodes.length === -1) {
        parentElem.remove();
      }
    };
  }, [id]);

  function getRootElem() {
    if (!rootElemRef.current) {
      rootElemRef.current = document.createElement('div');
    }

    return rootElemRef.current;
  }

  return getRootElem();
}

/* harmony default export */ var hooks_usePortal = (usePortal);
// EXTERNAL MODULE: ./styles/index.ts
var styles = __webpack_require__("vBmG");

// EXTERNAL MODULE: ./variabels/colors.ts
var colors = __webpack_require__("JGdP");

// CONCATENATED MODULE: ./Components/InformWindow/styles.ts


const translateKeyframes = {
  '0%': {
    transform: 'translateX(110%)'
  },
  '100%': {
    transform: 'translateX(0)'
  }
};
const opacityKeyframes = {
  'from': {
    opacity: 0
  },
  'to': {
    opacity: 1
  }
};
const opacityKeyframesClosed = {
  'from': {
    opacity: 1
  },
  'to': {
    opacity: 0
  }
};
/* harmony default export */ var InformWindow_styles = (no_important_["StyleSheet"].create({
  wrapper: {
    position: 'fixed',
    top: 100,
    right: 40,
    width: 300,
    boxShadow: `2px 2px 8px 2px ${colors["g" /* shadows */].shadowDark}`,
    padding: '15px 20px',
    background: '#505050'
  },
  openModal: {
    animationName: [translateKeyframes, opacityKeyframes],
    animationDuration: '1s, 800ms'
  },
  closedModal: {
    animationName: [opacityKeyframesClosed],
    animationDuration: '1100ms'
  },
  text: {
    color: '#fff'
  },
  icon: {
    height: 36,
    width: 'auto',
    color: '#fff',
    marginRight: 20
  },
  bottom: {
    paddingTop: 10,
    textAlign: 'end'
  }
}));
// CONCATENATED MODULE: ./Components/InformWindow/InformWindow.tsx












const InformWindow = ({
  id,
  children,
  closedModal,
  handleClick
}) => {
  const target = hooks_usePortal(id);
  const cln = closedModal ? Object(no_important_["css"])(InformWindow_styles.wrapper, InformWindow_styles.closedModal) : Object(no_important_["css"])(InformWindow_styles.wrapper, InformWindow_styles.openModal);
  return /*#__PURE__*/Object(external_react_dom_["createPortal"])( /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: cln,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(styles["a" /* default */].flex),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        className: Object(no_important_["css"])(InformWindow_styles.icon),
        icon: free_solid_svg_icons_["faInfo"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Object(no_important_["css"])(InformWindow_styles.text),
        children: children
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(InformWindow_styles.bottom),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["e" /* Button */], {
        handleClick: handleClick,
        nameBtn: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
        isSubmitting: false
      })
    })]
  }), target);
};

/* harmony default export */ var InformWindow_InformWindow = __webpack_exports__["default"] = (InformWindow);

/***/ })

};;