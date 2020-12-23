module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + "." + {"14":"ee07dcf014260691bdb7","15":"a47ad72a17271cf5c4f4","16":"945d91d81a2adbac3a4c","17":"49cd101bd4431d35d983","18":"2fa29f2edb086fd82f63","19":"9ad70e0494765f6d9df3","20":"96d4654a047f44356b20","21":"805d653e834811accd77","22":"43d5b6d4f3043d94c33e","23":"bd254b4d376ddbaeb9e1","24":"5b594402fcb20bcb3576","25":"301ae61d4b746884929e"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "46Yb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ePNP");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("mU8t");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ __webpack_exports__["a"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_2___default()(({
  initialState
}) => {
  return new apollo_boost__WEBPACK_IMPORTED_MODULE_3___default.a({
    uri: 'http://localhost:3005/graphql',
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_3__["InMemoryCache"]().restore(initialState || {})
  });
}, {
  render: ({
    Page,
    props
  }) => {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
      client: props.apollo,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Page, _objectSpread({}, props))
    });
  }
}));

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5cwH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ ArticleStats; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ AuthForm; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ AuthorPost; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ Avatar; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Button; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ ButtonLink; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ Date_Date; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ FormikControl; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ HeaderForm; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ InfoBar; });
__webpack_require__.d(__webpack_exports__, "m", function() { return /* reexport */ MainLayout; });
__webpack_require__.d(__webpack_exports__, "k", function() { return /* reexport */ Loading; });
__webpack_require__.d(__webpack_exports__, "l", function() { return /* reexport */ LoadingPost; });
__webpack_require__.d(__webpack_exports__, "p", function() { return /* reexport */ NavBar; });
__webpack_require__.d(__webpack_exports__, "q", function() { return /* reexport */ NavBarAuth; });
__webpack_require__.d(__webpack_exports__, "n", function() { return /* reexport */ Maps; });
__webpack_require__.d(__webpack_exports__, "o", function() { return /* reexport */ NameUser; });
__webpack_require__.d(__webpack_exports__, "r", function() { return /* reexport */ News; });
__webpack_require__.d(__webpack_exports__, "s", function() { return /* reexport */ ProfileMain; });
__webpack_require__.d(__webpack_exports__, "t", function() { return /* reexport */ Rating; });
__webpack_require__.d(__webpack_exports__, "u", function() { return /* reexport */ SectionTitle; });
__webpack_require__.d(__webpack_exports__, "v", function() { return /* reexport */ Spin; });
__webpack_require__.d(__webpack_exports__, "w", function() { return /* reexport */ TextError; });
__webpack_require__.d(__webpack_exports__, "x", function() { return /* reexport */ VisualContent; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__("s7eq");

// EXTERNAL MODULE: external "aphrodite/no-important"
var no_important_ = __webpack_require__("TsDz");

// EXTERNAL MODULE: ./styles/index.ts
var styles = __webpack_require__("vBmG");

// CONCATENATED MODULE: ./Components/ArticleStats/ArticleStats.tsx







const ArticleStats = ({
  isArticle,
  views,
  comments
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Object(no_important_["css"])(styles["a" /* default */].flex),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      className: Object(no_important_["css"])(styles["a" /* default */].views),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        className: Object(no_important_["css"])(styles["a" /* default */].iconS),
        icon: free_regular_svg_icons_["faEye"]
      }), views]
    }), !isArticle && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      className: Object(no_important_["css"])(styles["a" /* default */].comment),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        className: Object(no_important_["css"])(styles["a" /* default */].iconS),
        icon: free_regular_svg_icons_["faCommentAlt"]
      }), comments.length]
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./styles/login.ts
var login = __webpack_require__("XCxI");

// CONCATENATED MODULE: ./Components/Forms/AuthForm.tsx







const AuthForm = ({
  formik,
  dataForm,
  btn
}) => {
  const inputs = dataForm.map((item, index) => {
    const id = item.id;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(FormikControl, {
      control: item.control,
      id: id,
      type: item.type,
      label: item.label
    }, index);
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Object(no_important_["css"])(login["a" /* default */].wrapperForm),
    children: [inputs, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(login["a" /* default */].inputSub, btn !== 'Увійти' ? login["a" /* default */].inputSubRegister : null),
      children: [btn === 'Увійти' ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: '/',
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: Object(no_important_["css"])(login["a" /* default */].resPassword),
          children: "\u0417\u0430\u0431\u0443\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C?"
        })
      }) : null, /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
        type: "submit",
        nameBtn: btn,
        isSubmitting: formik.isSubmitting
      })]
    })]
  });
};
// EXTERNAL MODULE: ./variabels/colors.ts
var colors = __webpack_require__("JGdP");

// CONCATENATED MODULE: ./Components/AuthorPost/styles.ts


/* harmony default export */ var AuthorPost_styles = (no_important_["StyleSheet"].create({
  blockName: {
    marginLeft: 10
  },
  isArticle: {
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center'
  },
  separator: {
    width: 2,
    height: 2,
    borderRadius: '50%',
    margin: '0 10px',
    background: colors["e" /* icons */]
  }
}));
// CONCATENATED MODULE: ./Components/AuthorPost/AuthorPost.tsx







const AuthorPost = ({
  isArticle,
  author,
  date
}) => {
  const {
    avatar,
    name
  } = author;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: Object(no_important_["css"])(styles["a" /* default */].flexSB, styles["a" /* default */].block),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(styles["a" /* default */].flex),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Avatar, {
        avatar: avatar,
        name: name,
        size: "S"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(!isArticle ? AuthorPost_styles.blockName : AuthorPost_styles.isArticle),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(NameUser, {
          name: name
        }), isArticle && /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Object(no_important_["css"])(AuthorPost_styles.separator)
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Date_Date, {
          date: date,
          format: "LL"
        })]
      })]
    })
  });
};
// CONCATENATED MODULE: ./Components/Avatar/styles.ts

/* harmony default export */ var Avatar_styles = (no_important_["StyleSheet"].create({
  background: {
    color: '#fff',
    justifyContent: 'center',
    margin: '0 auto'
  },
  imgAv: {
    borderRadius: '50%'
  },
  avatarS: {
    width: 40,
    height: 40,
    fontSize: 20
  },
  avatarL: {
    width: 80,
    height: 80,
    fontSize: 40
  },
  avatarXL: {
    width: 100,
    height: 100,
    fontSize: 50
  }
}));
// CONCATENATED MODULE: ./Components/Avatar/Avatar.tsx





const Avatar = ({
  avatar,
  name,
  size
}) => {
  const avatarBG = () => {
    if (avatar) {
      const background = avatar !== 'undefined' ? {
        background: `url(${avatar})`,
        backgroundSize: 'cover'
      } : {
        background: 'linear-gradient(-60deg,#16a085,#f4d03f)'
      };
      const letter = avatar === 'undefined' && name[0].toUpperCase();
      return {
        background,
        letter
      };
    }
  };

  let avatarSize;

  switch (size) {
    case 'S':
      avatarSize = Avatar_styles.avatarS;
      break;

    case 'L':
      avatarSize = Avatar_styles.avatarL;
      break;

    case 'XL':
      avatarSize = Avatar_styles.avatarXL;
      break;

    default:
      return null;
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    style: avatarBG().background,
    className: Object(no_important_["css"])(Avatar_styles.imgAv, avatarSize, styles["a" /* default */].flex, Avatar_styles.background),
    children: avatarBG().letter
  });
};
// CONCATENATED MODULE: ./Components/Button/styles.ts


/* harmony default export */ var Button_styles = (no_important_["StyleSheet"].create({
  btn: {
    boxShadow: `0 5px 12px rgba(0,0,0,.1)`,
    padding: '8px 16px',
    background: colors["c" /* btn */],
    color: '#fff',
    textTransform: 'uppercase',
    transition: '200ms',
    ':hover': {
      boxShadow: `0 5px 16px rgba(0,0,0,.16)`
    }
  },
  btnGray: {
    background: 'gray'
  },
  //  ButtonText
  btnLink: {
    fontSize: '0.65rem',
    color: 'rgba(0,0,0,.5)',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: 800,
    marginBottom: 8,
    marginRight: 14,
    ':hover': {
      color: colors["c" /* btn */]
    }
  },
  icon: {
    marginRight: 6
  }
}));
// CONCATENATED MODULE: ./Components/Button/Button.tsx




const Button = ({
  type,
  nameBtn,
  handleClick,
  isSubmitting,
  action
}) => {
  const btnStyle = isSubmitting ? Object(no_important_["css"])(Button_styles.btn, Button_styles.btnGray) : Object(no_important_["css"])(Button_styles.btn);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
    type: type,
    onClick: () => handleClick ? handleClick(action) : void 0,
    className: btnStyle,
    children: nameBtn
  });
};
// CONCATENATED MODULE: ./Components/Button/ButtonLink.tsx






const ButtonLink = ({
  handleClick,
  nameBtn,
  icon
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
    onClick: () => handleClick && handleClick(),
    className: Object(no_important_["css"])(Button_styles.btnLink),
    children: [icon && /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      className: Object(no_important_["css"])(Button_styles.icon),
      icon: icon
    }), nameBtn]
  });
};
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "aphrodite"
var external_aphrodite_ = __webpack_require__("t24B");

// CONCATENATED MODULE: ./Components/Date/styles.ts

/* harmony default export */ var Date_styles = (no_important_["StyleSheet"].create({
  time: {
    fontSize: 12,
    lineHeight: 1
  }
}));
// CONCATENATED MODULE: ./Components/Date/Date.tsx





const Date_Date = ({
  date,
  format
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    className: Object(external_aphrodite_["css"])(Date_styles.time),
    children: external_moment_default.a.utc(`Date(${date})`).format(format)
  });
};
// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./Components/Formik/FormikControl.tsx


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Checkbox = dynamic_default()(() => __webpack_require__.e(/* import() */ 14).then(__webpack_require__.bind(null, "b+oQ")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("b+oQ")],
    modules: ['./Checkbox']
  }
});
const Input = dynamic_default()(() => __webpack_require__.e(/* import() */ 15).then(__webpack_require__.bind(null, "NIxQ")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("NIxQ")],
    modules: ['./Input']
  }
});
const InputGroup = dynamic_default()(() => __webpack_require__.e(/* import() */ 16).then(__webpack_require__.bind(null, "BK7j")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("BK7j")],
    modules: ['./InputGroup']
  }
});
const Select = dynamic_default()(() => __webpack_require__.e(/* import() */ 18).then(__webpack_require__.bind(null, "qBoC")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("qBoC")],
    modules: ['./Select']
  }
});
const Radio = dynamic_default()(() => __webpack_require__.e(/* import() */ 17).then(__webpack_require__.bind(null, "b5S5")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("b5S5")],
    modules: ['./Radio']
  }
});
const TextArea = dynamic_default()(() => __webpack_require__.e(/* import() */ 19).then(__webpack_require__.bind(null, "J3fD")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("J3fD")],
    modules: ['./Textarea']
  }
});
const FormikControl = (_ref) => {
  let {
    control
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["control"]);

  switch (control) {
    case 'checkbox':
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Checkbox, {
        rest: rest
      });

    case 'input':
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Input, {
        rest: rest
      });

    case 'inputGroup':
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(InputGroup, {
        rest: rest
      });

    case 'select':
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Select, {
        rest: rest
      });

    case 'radio':
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Radio, {
        rest: rest
      });

    case 'textarea':
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(TextArea, {
        rest: rest
      });

    default:
      return null;
  }
};
// CONCATENATED MODULE: ./Components/Forms/HeaderForm.tsx







const HeaderForm = ({
  title,
  text,
  link,
  btn
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
      className: Object(no_important_["css"])(login["a" /* default */].title),
      children: title
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(login["a" /* default */].wrapperForm, login["a" /* default */].bottomBlock),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: Object(no_important_["css"])(login["a" /* default */].text),
        children: `${text} `
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: link,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: Object(no_important_["css"])(login["a" /* default */].link),
            children: btn
          })
        })
      })]
    })]
  });
};
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: ./modules/index.ts + 41 modules
var modules = __webpack_require__("f7R2");

// EXTERNAL MODULE: ./variabels/dimensions.ts
var dimensions = __webpack_require__("lHKs");

// CONCATENATED MODULE: ./Components/InfoBar/styles.ts


/* harmony default export */ var InfoBar_styles = (no_important_["StyleSheet"].create({
  wrapper: {
    width: dimensions["b" /* widthBlocks */].rightBlock,
    margin: '10px 5px'
  },
  content: {
    padding: '6px 10px'
  },
  block: {
    padding: '4px 0'
  },
  title: {
    marginLeft: 10
  },
  text: {
    fontSize: 12
  },
  tickets: {
    marginLeft: 35
  }
}));
// CONCATENATED MODULE: ./Components/InfoBar/InfoBar.tsx











const InfoBar = ({
  coordinates,
  tickets,
  location,
  work_time,
  isType
}) => {
  const mapContainerStyle = {
    height: "200px",
    width: "100%"
  };
  const center = {
    lat: Number(coordinates[0]),
    lng: Number(coordinates[1])
  };
  const zoom = 11;
  const locations = {
    lat: coordinates[0],
    lng: coordinates[1],
    isType: isType
  };

  const viewTickets = tickets.length !== 0 && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Object(no_important_["css"])(InfoBar_styles.content),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(styles["a" /* default */].flex, InfoBar_styles.block),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        className: Object(no_important_["css"])(styles["a" /* default */].icon),
        icon: free_solid_svg_icons_["faTicketAlt"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Object(no_important_["css"])(InfoBar_styles.title),
        children: "\u0412\u0445\u0456\u0434\u043D\u0438\u0439 \u041A\u0432\u0438\u0442\u043E\u043A"
      })]
    }), tickets.map((item, index) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Object(no_important_["css"])(InfoBar_styles.text, InfoBar_styles.tickets),
        children: item
      }, index);
    })]
  });

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: Object(no_important_["css"])(styles["a" /* default */].boxShadow, InfoBar_styles.wrapper),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: {
        pathname: '/maps',
        query: {
          lat: coordinates[0],
          lng: coordinates[1],
          isType: isType
        }
      },
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(modules["c" /* GoogleMaps */], {
          mapContainerStyle: mapContainerStyle,
          center: center,
          zoom: zoom,
          locations: locations,
          disableDefaultUI: true,
          search: false
        })
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(InfoBar_styles.content),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(styles["a" /* default */].flex, InfoBar_styles.block),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: Object(no_important_["css"])(styles["a" /* default */].icon),
          icon: free_solid_svg_icons_["faMapMarkerAlt"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: Object(no_important_["css"])(InfoBar_styles.title),
          children: "\u041C\u0456\u0441\u0446\u0435 \u0437\u043D\u0430\u0445\u043E\u0434\u0436\u0435\u043D\u043D\u044F:"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Object(no_important_["css"])(InfoBar_styles.text),
        children: location
      })]
    }), viewTickets, /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(InfoBar_styles.content),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(styles["a" /* default */].flex, InfoBar_styles.block),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: Object(no_important_["css"])(styles["a" /* default */].icon),
          icon: free_regular_svg_icons_["faClock"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          className: Object(no_important_["css"])(InfoBar_styles.title),
          children: "\u0427\u0430\u0441 \u0440\u043E\u0431\u043E\u0442\u0438:"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Object(no_important_["css"])(InfoBar_styles.text),
        children: work_time
      })]
    })]
  });
};
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./redux/actions/index.ts + 3 modules
var actions = __webpack_require__("BDHH");

// CONCATENATED MODULE: ./hooks/auth.hook.tsx



const storageName = 'userData';
const UseAuth = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  Object(external_react_["useEffect"])(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data) {
      dispatch(actions["c" /* userActions */].setData(data));
    }
  }, [dispatch]);
};
// CONCATENATED MODULE: ./Components/MainLayout/MainLayout.tsx












const InformWindow = dynamic_default()(() => __webpack_require__.e(/* import() */ 20).then(__webpack_require__.bind(null, "gC9v")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Spin, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("gC9v")],
    modules: ['../InformWindow/InformWindow']
  }
});
const ProfileSidebar = dynamic_default()(() => __webpack_require__.e(/* import() */ 24).then(__webpack_require__.bind(null, "ztF2")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Spin, {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("ztF2")],
    modules: ['../../modules/ProfileSidebar/Containers/ProfileSidebar']
  }
});
const MainLayout = ({
  children,
  title,
  auth,
  header
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    data
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    showSidebar
  } = Object(external_react_redux_["useSelector"])(state => state.sidebar);
  const {
    text,
    timeout
  } = Object(external_react_redux_["useSelector"])(state => state.modal);
  UseAuth();

  const handleClick = () => {
    dispatch(actions["a" /* modalActions */].handleClick());
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
        name: "description",
        content: "\u041C\u0438 \u043F\u0440\u043E \u043F\u043E\u0434\u043E\u0440\u043E\u0436\u0456"
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("title", {
        children: [title, " | Travel Guide"]
      })]
    }), auth ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavBarAuth, {}) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(NavBar, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("main", {
      className: Object(no_important_["css"])(styles["a" /* default */].wrapper, auth && styles["a" /* default */].wrapperLogin),
      children: [header && /*#__PURE__*/Object(jsx_runtime_["jsx"])(SectionTitle, {
        title: header
      }), children]
    }), text && /*#__PURE__*/Object(jsx_runtime_["jsx"])(InformWindow, {
      id: "modal",
      children: text,
      closedModal: timeout,
      handleClick: handleClick
    }), showSidebar && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ProfileSidebar, {
      data: data
    })]
  });
};
// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// EXTERNAL MODULE: ./variabels/index.ts
var variabels = __webpack_require__("BD5b");

// CONCATENATED MODULE: ./Components/Loading/styles.ts



const lineAnimation = {
  '0%': {
    background: '#dadada'
  },
  '50%': {
    background: '#f3f3f3'
  },
  '100%': {
    background: '#dadada'
  }
};
const ldsRing = {
  '0%': {
    transform: 'rotate(0deg)'
  },
  '100%': {
    transform: 'rotate(360deg)'
  }
};
/* harmony default export */ var Loading_styles = (no_important_["StyleSheet"].create({
  wrapper: {
    margin: '10px 7px',
    textAlign: 'center'
  },
  car: {
    width: 'auto !important',
    height: 24,
    color: variabels["e" /* icons */],
    padding: '0 5px'
  },
  fire: {
    transform: 'rotate(170deg)',
    width: 'auto !important',
    height: 20,
    color: '#af5d3d'
  },
  //LoadingPost
  content: {
    background: '#fff',
    padding: 15
  },
  widthPost: {
    width: '100%'
  },
  widthNews: {
    width: variabels["j" /* widthBlocks */].newsBlock
  },
  line: {
    height: 18,
    marginBottom: 13,
    borderRadius: 2,
    animationName: [lineAnimation],
    animationDuration: '2.2s',
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite'
  },
  line100: {
    width: '100%'
  },
  line90: {
    width: '90%'
  },
  line85: {
    width: '85%'
  },
  line80: {
    width: '80%'
  },
  line75: {
    width: '75%'
  },
  line70: {
    width: '70%'
  },
  line65: {
    width: '65%'
  },
  line60: {
    width: '60%'
  },
  lineMB30: {
    marginBottom: 26
  },
  //Spin
  wrapperSpin: {
    textAlign: 'center'
  },
  ldsRing: {
    display: 'inline-block',
    position: 'relative',
    width: 56,
    height: 56
  },
  ldsRingDiv: {
    boxSizing: 'border-box',
    display: 'block',
    position: 'absolute',
    width: 40,
    height: 40,
    margin: 8,
    borderRadius: '50%',
    animation: 'lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
    animationName: ldsRing
  },
  ldsRingDivLight: {
    border: '5px solid #fff',
    borderColor: '#fff transparent transparent transparent'
  },
  ldsRingDivDark: {
    border: `5px solid ${variabels["e" /* icons */]}`,
    borderColor: `${variabels["e" /* icons */]} transparent transparent transparent`
  },
  ldsRingDivC1: {
    animationDelay: '-0.45s'
  },
  ldsRingDivC2: {
    animationDelay: '-0.3s'
  },
  ldsRingDivC3: {
    animationDelay: '-0.15s'
  }
}));
// CONCATENATED MODULE: ./Components/Loading/Loading.tsx








const Loading = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Object(no_important_["css"])(Loading_styles.wrapper),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      className: Object(no_important_["css"])(Loading_styles.fire),
      icon: free_brands_svg_icons_["faPhoenixFramework"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      className: Object(no_important_["css"])(Loading_styles.car),
      icon: free_solid_svg_icons_["faCarSide"]
    })]
  });
};
// CONCATENATED MODULE: ./Components/Loading/LoadingPost.tsx






const LoadingPost = ({
  isPost
}) => {
  const widthContent = isPost ? Loading_styles.widthPost : Loading_styles.widthNews;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: Object(no_important_["css"])(styles["a" /* default */].boxShadow, Loading_styles.wrapper, Loading_styles.content, widthContent),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line70)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line85)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line100)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line60, Loading_styles.lineMB30)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line100)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line70)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line75)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line80)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line90, Loading_styles.lineMB30)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line65)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line100)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line70)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line70)
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(Loading_styles.line, Loading_styles.line80)
    })]
  });
};
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// CONCATENATED MODULE: ./Components/NavBar/styles.ts


/* harmony default export */ var NavBar_styles = (no_important_["StyleSheet"].create({
  nav: {
    background: '#fff',
    width: '100%',
    zIndex: 2,
    top: 0
  },
  logo: {
    marginRight: 30
  },
  wrapperInput: {
    borderLeft: '1px solid #333',
    width: 150,
    paddingRight: 20
  },
  input: {
    width: '100%'
  },
  linkActive: {
    color: variabels["b" /* btn */]
  },
  //NavBarAuth
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 50px 70px'
  },
  closed: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 28,
    fontWeight: 800
  }
}));
// CONCATENATED MODULE: ./Components/NavBar/config.ts
const Links = {
  link: [{
    path: '/',
    title: 'Головна',
    route: 'Home'
  }, {
    path: '/maps',
    title: 'Карта',
    route: 'Map'
  }, {
    path: '/routes',
    title: 'Маршрути',
    route: 'Routes'
  }, {
    path: '/about',
    title: 'Про нас',
    route: 'About'
  }]
};
// CONCATENATED MODULE: ./Components/NavBar/NavBar.tsx













const NavBar = () => {
  const router = Object(router_["useRouter"])();
  const pathname = router.pathname;
  const links = Links.link.map((item, index) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: item.path,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: Object(no_important_["css"])(pathname === item.path && NavBar_styles.linkActive),
          children: item.title
        })
      })
    }, index);
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("nav", {
    className: Object(no_important_["css"])(NavBar_styles.nav, styles["a" /* default */].boxShadow),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(styles["a" /* default */].wrapper, styles["a" /* default */].flexSB),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(styles["a" /* default */].flexSB),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Object(no_important_["css"])(NavBar_styles.logo),
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
            src: "/assets/logo.png",
            layout: "fixed",
            width: 100,
            height: 45,
            alt: "Travel guide logo"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("ul", {
          children: links
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(styles["a" /* default */].flexSB),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Object(no_important_["css"])(styles["a" /* default */].flexSB, NavBar_styles.wrapperInput),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            className: Object(no_important_["css"])(NavBar_styles.input),
            placeholder: "Search",
            type: "text"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
            className: Object(no_important_["css"])(styles["a" /* default */].icon),
            icon: free_solid_svg_icons_["faSearch"]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modules["j" /* UseRoutes */], {})]
      })]
    })
  });
};
// CONCATENATED MODULE: ./Components/NavBar/NavBarAuth.tsx







const NavBarAuth = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Object(no_important_["css"])(NavBar_styles.wrapper),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
      src: '/assets/logo.png',
      layout: "intrinsic",
      alt: "logo",
      width: 128,
      height: 58
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        className: Object(no_important_["css"])(NavBar_styles.closed),
        children: "x"
      })
    })]
  });
};
// CONCATENATED MODULE: ./Components/Maps/Maps.tsx



const Maps = ({
  locations
}) => {
  const mapContainerStyle = {
    height: "calc(100vh - 200px)",
    width: "100%"
  };
  const center = {
    lat: 49.026151,
    lng: 31.483070
  };
  const zoom = 6;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(modules["c" /* GoogleMaps */], {
    mapContainerStyle: mapContainerStyle,
    center: center,
    zoom: zoom,
    locations: locations,
    disableDefaultUI: false,
    search: true
  });
};
// CONCATENATED MODULE: ./Components/NameUser/styles.ts

/* harmony default export */ var NameUser_styles = (no_important_["StyleSheet"].create({
  name: {
    paddingBottom: 3,
    fontSize: 16,
    fontWeight: 600
  },
  crown: {
    height: 13,
    width: 'auto !important',
    color: '#af5f0c',
    margin: '0 6px 10px'
  }
}));
// CONCATENATED MODULE: ./Components/NameUser/NameUser.tsx








const NameUser = ({
  name
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: Object(no_important_["css"])(styles["a" /* default */].flex),
    children: name !== 'Admin' ? /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
      className: Object(no_important_["css"])(NameUser_styles.name),
      children: name
    }) : /*#__PURE__*/Object(jsx_runtime_["jsxs"])("span", {
      className: Object(no_important_["css"])(styles["a" /* default */].flex),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
        className: Object(no_important_["css"])(NameUser_styles.name),
        children: name
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        className: Object(no_important_["css"])(NameUser_styles.crown),
        icon: free_solid_svg_icons_["faCrown"]
      })]
    })
  });
};
// CONCATENATED MODULE: ./Components/News/styles.ts


/* harmony default export */ var News_styles = (no_important_["StyleSheet"].create({
  wrapper: {
    width: variabels["j" /* widthBlocks */].newsBlock,
    margin: '10px 7px',
    boxShadow: '5px 5px 8px 2px #a0a0a0',
    transition: '200ms',
    background: '#fff',
    height: 'max-content',
    ':hover': {
      transform: 'scale(1.01, 1.01)',
      boxShadow: '5px 5px 10px 2px #676767'
    }
  },
  content: {
    cursor: 'pointer'
  },
  img: {
    objectFit: 'cover'
  },
  block: {
    padding: '0 15px'
  },
  heart: {
    height: 15,
    width: 'auto !important',
    color: '#e84a43'
  }
}));
// CONCATENATED MODULE: ./Components/News/News.tsx










const News = ({
  item,
  comments
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Object(no_important_["css"])(News_styles.wrapper),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(News_styles.content),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: `/post/[id]`,
        as: `/post/${item._id}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
          className: Object(no_important_["css"])(News_styles.img),
          src: `/assets/uploads${item.cover}`,
          layout: "intrinsic",
          alt: item.title,
          width: 336,
          height: 190
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(News_styles.block),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(AuthorPost, {
          isArticle: false,
          author: item.author,
          date: item.createdAt
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: `/post/[id]`,
          as: `/post/${item._id}`,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: Object(no_important_["css"])(styles["a" /* default */].block, styles["a" /* default */].blockText),
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
              children: item.title
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: item.small_text
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
              className: Object(no_important_["css"])(styles["a" /* default */].shadow)
            })]
          })
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(News_styles.block),
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(styles["a" /* default */].flexSB, styles["a" /* default */].block, styles["a" /* default */].bottom),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(ArticleStats, {
          isArticle: false,
          views: item.views,
          comments: comments
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modules["e" /* Likes */], {
          likes: item.likes,
          id: item._id,
          post: false
        })]
      })
    })]
  });
};
// CONCATENATED MODULE: ./Components/ProfileMain/styles.ts


/* harmony default export */ var ProfileMain_styles = (no_important_["StyleSheet"].create({
  wrapper: {
    marginTop: 20
  },
  //ProfileMain
  header: {
    background: colors["a" /* background */].main,
    padding: 20
  },
  content: {
    marginLeft: 35
  },
  name: {
    fontWeight: 700,
    margin: '6px 0'
  },
  text: {
    color: '#596064',
    fontSize: 16,
    fontWeight: 600,
    margin: '8px 0'
  },
  right: {
    textAlign: 'end'
  },
  links: {
    marginTop: 25
  },
  icon: {
    marginLeft: 20,
    transition: '0.2s',
    ':hover': {
      opacity: 0.6
    }
  },
  iconF: {
    color: colors["h" /* socSet */].facebook
  },
  iconT: {
    color: colors["h" /* socSet */].twitter
  },
  iconI: {
    color: colors["h" /* socSet */].instagram
  },
  iconY: {
    color: colors["h" /* socSet */].youtube
  },
  //TabsLink
  wrapperTabs: {
    margin: '30px 0',
    borderBottom: '1px solid hsla(0,0%,89.8%,.8)'
  },
  link: {
    transition: '0.2s',
    marginRight: 20,
    paddingRight: 20,
    paddingBottom: 10,
    textTransform: 'uppercase',
    fontSize: 16,
    color: 'hsla(0,0%,63.5%,.8)',
    letterSpacing: 3,
    fontWeight: 600,
    ':hover': {
      color: 'rgba(48,51,53,.9)'
    }
  },
  linkActive: {
    borderBottom: '2px solid #db4454',
    color: 'rgba(48,51,53,.9)'
  },
  //ToVisit
  wrapperVisit: {
    borderBottom: '1px solid hsla(0,0%,89.8%,.8)',
    paddingBottom: 4,
    marginBottom: 4
  },
  wrapperNoVisit: {
    maxWidth: 500,
    margin: '0 auto'
  },
  noVisitHeader: {
    textAlign: 'center',
    lineHeight: '45px'
  },
  item: {
    paddingLeft: 20,
    width: '100%'
  },
  img: {
    width: 120
  },
  title: {
    margin: '0 0 2px',
    ':hover': {
      color: colors["c" /* btn */]
    }
  },
  location: {
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: 600
  },
  paragraph: {
    fontSize: 12
  },
  marker: {
    marginRight: 5,
    height: 12
  },
  blockBtn: {
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  iconMap: {
    marginRight: 30,
    height: 28
  }
}));
// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// CONCATENATED MODULE: ./Containers/Location/querys.ts

const locationsUserQuery = external_apollo_boost_["gql"]`
  query locationsUserList($userId: ID!, $action: String!) {
    locationsUserList(userId: $userId, action: $action) {
      _id
      locationId
      userId
    }
  }
`;
const locationQuery = external_apollo_boost_["gql"]`
  query location($_id: ID!) {
    location(_id: $_id) {
      _id
      title
      small_text
      region
      district
      city
    }
  }
`;
// EXTERNAL MODULE: ./modules/InformUserLocation/Containers/mutations.ts
var mutations = __webpack_require__("pAeZ");

// CONCATENATED MODULE: ./Containers/Location/mutations.ts

const removeLocationWithUserListMutation = external_apollo_boost_["gql"]`
  mutation removeLocationWithUserList( $_id: ID! ) {
    removeLocationWithUserList( _id: $_id ) {
      _id
    }
  }
`;
// CONCATENATED MODULE: ./Containers/Location/Location.tsx







const Location = ({
  _id,
  locationId,
  nameSection,
  handleClick
}) => {
  const [addLocationsUserList] = Object(react_hooks_["useMutation"])(mutations["a" /* addLocationsUserListMutation */]);
  const [removeLocationWithUserList] = Object(react_hooks_["useMutation"])(removeLocationWithUserListMutation);
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(locationQuery, {
    variables: {
      _id: locationId
    }
  });

  const updateLocationMyList = () => {
    addLocationsUserList({
      variables: {
        _id: _id,
        action: 'visited'
      }
    }).then(data => {
      if (data) {
        handleClick('wantToVisit');
      }
    });
  };

  const removeLocation = () => {
    removeLocationWithUserList({
      variables: {
        _id: _id
      }
    }).then(data => {
      if (data) {
        handleClick(nameSection);
      }
    });
  };

  if (loading) return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Loading, {});
  if (error) return `Error! ${error}`;
  const {
    location
  } = data;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(VisualContent, {
    location: location,
    nameSection: nameSection,
    updateLocationMyList: updateLocationMyList,
    removeLocation: removeLocation
  });
};
// CONCATENATED MODULE: ./Containers/index.tsx

// CONCATENATED MODULE: ./Components/ProfileMain/ToVisit.tsx










const ToVisit = ({
  locationsUserList,
  nameSection,
  handleClick
}) => {
  if (locationsUserList) {
    const location = locationsUserList.map((item, index) => {
      return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Location, {
        _id: item._id,
        locationId: item.locationId,
        nameSection: nameSection,
        handleClick: handleClick
      }, index);
    });
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(ProfileMain_styles.blockBtn),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: Object(no_important_["css"])(styles["a" /* default */].icon, ProfileMain_styles.iconMap),
          icon: free_solid_svg_icons_["faMapMarkedAlt"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
          nameBtn: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u0456",
          isSubmitting: false
        })]
      }), location]
    });
  }

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: Object(no_important_["css"])(ProfileMain_styles.wrapperNoVisit),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: Object(no_important_["css"])(ProfileMain_styles.noVisitHeader),
      children: "\u0421\u0445\u043E\u0436\u0435, \u0449\u043E \u0432\u0438 \u0434\u043E\u0441\u0456 \u043D\u0435 \u043E\u0431\u0440\u0430\u043B\u0438 \u0436\u043E\u0434\u043D\u043E\u0457 \u043B\u043E\u043A\u0430\u0446\u0456\u0457"
    })
  });
};
// CONCATENATED MODULE: ./Components/ProfileMain/ProfileMain.tsx











const ProfileMain = ({
  data,
  handleClick,
  nameSection,
  locationsUserList
}) => {
  const {
    name,
    avatar
  } = data;

  const linkSS = (link, iconStyle, icon) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: '/',
      as: link,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        className: Object(no_important_["css"])(styles["a" /* default */].icon, ProfileMain_styles.icon, iconStyle),
        icon: icon
      })
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: Object(no_important_["css"])(styles["a" /* default */].wrapper, ProfileMain_styles.wrapper),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(ProfileMain_styles.header, styles["a" /* default */].flexSB),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(styles["a" /* default */].flex),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Avatar, {
          avatar: avatar,
          name: name,
          size: "XL"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Object(no_important_["css"])(ProfileMain_styles.content),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: Object(no_important_["css"])(ProfileMain_styles.name),
            children: name
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Rating, {
            rating: 99
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: Object(no_important_["css"])(ProfileMain_styles.text),
            children: "\u041B\u044E\u0431\u043B\u044E \u043F\u043E\u0434\u043E\u0440\u0443\u0436\u0443\u0432\u0430\u0442\u0438"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(ProfileMain_styles.right),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: '/setting',
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Button, {
            nameBtn: "\u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
            isSubmitting: false
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Object(no_important_["css"])(ProfileMain_styles.links),
          children: [linkSS('/', ProfileMain_styles.iconF, free_brands_svg_icons_["faFacebookF"]), linkSS('/', ProfileMain_styles.iconI, free_brands_svg_icons_["faInstagram"]), linkSS('/', ProfileMain_styles.iconT, free_brands_svg_icons_["faTwitter"]), linkSS('/', ProfileMain_styles.iconY, free_brands_svg_icons_["faYoutube"])]
        })]
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(ProfileMain_styles.wrapperTabs, styles["a" /* default */].flex),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => handleClick('wantToVisit'),
          className: Object(no_important_["css"])(ProfileMain_styles.link, nameSection === 'wantToVisit' && ProfileMain_styles.linkActive),
          children: "\u0425\u043E\u0447\u0443 \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u0442\u0438"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => handleClick('visited'),
          className: Object(no_important_["css"])(ProfileMain_styles.link, nameSection === 'visited' && ProfileMain_styles.linkActive),
          children: "\u0412\u0456\u0434\u0432\u0456\u0434\u0430\u0432"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: Object(no_important_["css"])(ProfileMain_styles.link),
          children: "\u041C\u043E\u0457 \u0441\u0442\u0430\u0442\u0442\u0456"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          className: Object(no_important_["css"])(ProfileMain_styles.link),
          children: "\u0427\u043E\u0440\u043D\u043E\u0432\u0438\u043A\u0438"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ToVisit, {
        locationsUserList: locationsUserList,
        nameSection: nameSection,
        handleClick: handleClick
      })]
    })]
  });
};
// CONCATENATED MODULE: ./Components/Rating/styles.ts

/* harmony default export */ var Rating_styles = (no_important_["StyleSheet"].create({
  wrapper: {
    background: 'linear-gradient(90deg,#db4454,#9f406d)',
    fontSize: 12,
    padding: '3px 12px',
    color: '#fff',
    margin: '4px 0'
  }
}));
// CONCATENATED MODULE: ./Components/Rating/Rating.tsx




const Rating = ({
  rating
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
    className: Object(no_important_["css"])(Rating_styles.wrapper),
    children: rating
  });
};
// CONCATENATED MODULE: ./Components/SectionTitle/styles.ts

/* harmony default export */ var SectionTitle_styles = (no_important_["StyleSheet"].create({
  fontStyle: {
    color: 'rgba(0,0,0,.2)',
    fontSize: 60,
    textTransform: 'uppercase',
    letterSpacing: '1.65rem',
    fontFamily: 'Montserrat, sans-serif',
    margin: '10px 0'
  }
}));
// CONCATENATED MODULE: ./Components/SectionTitle/SectionTitle.tsx




const SectionTitle = ({
  title
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: Object(no_important_["css"])(SectionTitle_styles.fontStyle),
    children: title
  });
};
// CONCATENATED MODULE: ./Components/Loading/Spin.tsx





const Spin = ({
  isLight
}) => {
  const className = isLight ? Loading_styles.ldsRingDivLight : Loading_styles.ldsRingDivDark;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: Object(no_important_["css"])(Loading_styles.wrapperSpin),
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(Loading_styles.ldsRing),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Object(no_important_["css"])(Loading_styles.ldsRingDiv, className, Loading_styles.ldsRingDivC1)
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Object(no_important_["css"])(Loading_styles.ldsRingDiv, className, Loading_styles.ldsRingDivC2)
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Object(no_important_["css"])(Loading_styles.ldsRingDiv, className, Loading_styles.ldsRingDivC3)
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Object(no_important_["css"])(Loading_styles.ldsRingDiv, className)
      })]
    })
  });
};
// CONCATENATED MODULE: ./Components/Error/styles.ts

/* harmony default export */ var Error_styles = (no_important_["StyleSheet"].create({
  wrapper: {
    width: 225,
    position: 'absolute',
    padding: '8px 16px',
    background: 'white'
  },
  triangle: {
    position: 'absolute',
    width: 0,
    height: 0
  },
  left: {
    top: '50%',
    transform: 'translateY(-50%)',
    left: -240
  },
  bottom: {
    bottom: -20
  },
  triangleForLeft: {
    top: '50%',
    transform: 'translateY(-50%)',
    right: -12,
    borderTop: '10px solid transparent',
    borderLeft: '12px solid white',
    borderBottom: '10px solid transparent'
  },
  triangleForBottom: {
    top: -12,
    left: 20,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderBottom: '12px solid white'
  }
}));
// CONCATENATED MODULE: ./Components/Error/TextError.tsx






const TextError = ({
  className,
  children
}) => {
  const element = ({
    styleWrapper,
    triangle
  }) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(styles["a" /* default */].boxShadow, Error_styles.wrapper, styleWrapper),
      children: [children, /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Object(no_important_["css"])(Error_styles.triangle, triangle)
      })]
    });
  };

  switch (className) {
    case 'left':
      return element({
        styleWrapper: Error_styles.left,
        triangle: Error_styles.triangleForLeft
      });

    case 'bottom':
      return element({
        styleWrapper: Error_styles.bottom,
        triangle: Error_styles.triangleForBottom
      });

    default:
      return null;
  }
};
// CONCATENATED MODULE: ./Components/VisualContent/styles.ts


/* harmony default export */ var VisualContent_styles = (no_important_["StyleSheet"].create({
  wrapper: {
    marginTop: 20
  },
  //ProfileMain
  header: {
    background: colors["a" /* background */].main,
    padding: 20
  },
  content: {
    marginLeft: 35
  },
  name: {
    fontWeight: 700,
    margin: '6px 0'
  },
  text: {
    color: '#596064',
    fontSize: 16,
    fontWeight: 600,
    margin: '8px 0'
  },
  right: {
    textAlign: 'end'
  },
  links: {
    marginTop: 25
  },
  icon: {
    marginLeft: 20,
    transition: '0.2s',
    ':hover': {
      opacity: 0.6
    }
  },
  iconF: {
    color: colors["h" /* socSet */].facebook
  },
  iconT: {
    color: colors["h" /* socSet */].twitter
  },
  iconI: {
    color: colors["h" /* socSet */].instagram
  },
  iconY: {
    color: colors["h" /* socSet */].youtube
  },
  //TabsLink
  wrapperTabs: {
    margin: '30px 0',
    borderBottom: '1px solid hsla(0,0%,89.8%,.8)'
  },
  link: {
    transition: '0.2s',
    marginRight: 20,
    paddingRight: 20,
    paddingBottom: 10,
    textTransform: 'uppercase',
    fontSize: 16,
    color: 'hsla(0,0%,63.5%,.8)',
    letterSpacing: 3,
    fontWeight: 600,
    ':hover': {
      color: 'rgba(48,51,53,.9)'
    }
  },
  linkActive: {
    borderBottom: '2px solid #db4454',
    color: 'rgba(48,51,53,.9)'
  },
  //ToVisit
  wrapperVisit: {
    borderBottom: '1px solid hsla(0,0%,89.8%,.8)',
    paddingBottom: 4,
    marginBottom: 4
  },
  wrapperNoVisit: {
    maxWidth: 500,
    margin: '0 auto'
  },
  noVisitHeader: {
    textAlign: 'center',
    lineHeight: '45px'
  },
  item: {
    paddingLeft: 20,
    width: '100%'
  },
  img: {
    width: 120
  },
  title: {
    margin: '0 0 2px',
    ':hover': {
      color: colors["c" /* btn */]
    }
  },
  location: {
    fontSize: 12,
    letterSpacing: 1,
    fontWeight: 600
  },
  paragraph: {
    fontSize: 12
  },
  marker: {
    marginRight: 5,
    height: 12
  },
  blockBtn: {
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  iconMap: {
    marginRight: 30,
    height: 28
  }
}));
// CONCATENATED MODULE: ./Components/VisualContent/VisualContent.tsx










const VisualContent = ({
  location,
  nameSection,
  updateLocationMyList,
  removeLocation
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: Object(no_important_["css"])(styles["a" /* default */].flexSB, VisualContent_styles.wrapperVisit),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
      className: Object(no_important_["css"])(VisualContent_styles.img),
      src: "http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/pz_450.jpg",
      alt: ""
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(VisualContent_styles.item),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(styles["a" /* default */].flexSB),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: '/',
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h5", {
            className: Object(no_important_["css"])(VisualContent_styles.title),
            children: location.title
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          children: [nameSection === 'wantToVisit' && /*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonLink, {
            handleClick: updateLocationMyList,
            icon: free_solid_svg_icons_["faMapPin"],
            nameBtn: "\u0412\u0436\u0435 \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u0432"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ButtonLink, {
            handleClick: removeLocation,
            icon: free_solid_svg_icons_["faTimes"],
            nameBtn: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0456\u0437 \u0441\u043F\u0438\u0441\u043A\u0443"
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        className: Object(no_important_["css"])(VisualContent_styles.location),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: Object(no_important_["css"])(styles["a" /* default */].icon, VisualContent_styles.marker),
          icon: free_solid_svg_icons_["faMapMarkerAlt"]
        }), "\u0421\u0435\u043B\u043E ", location.city, ", ", location.district, " \u0440\u0430\u0439\u043E\u043D, ", location.region, " \u043E\u0431\u043B\u0430\u0441\u0442\u044C"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Object(no_important_["css"])(VisualContent_styles.paragraph),
        children: location.small_text
      })]
    })]
  });
};
// CONCATENATED MODULE: ./Components/index.tsx

























/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7UUK":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "7fVs":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "ANQk":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "Aiso":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dQHF")


/***/ }),

/***/ "BD5b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lHKs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _dimensions__WEBPACK_IMPORTED_MODULE_0__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _dimensions__WEBPACK_IMPORTED_MODULE_0__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "k", function() { return _dimensions__WEBPACK_IMPORTED_MODULE_0__["c"]; });

/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JGdP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _colors__WEBPACK_IMPORTED_MODULE_1__["b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _colors__WEBPACK_IMPORTED_MODULE_1__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "e", function() { return _colors__WEBPACK_IMPORTED_MODULE_1__["e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "f", function() { return _colors__WEBPACK_IMPORTED_MODULE_1__["f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _colors__WEBPACK_IMPORTED_MODULE_1__["d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _colors__WEBPACK_IMPORTED_MODULE_1__["g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _colors__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "i", function() { return _colors__WEBPACK_IMPORTED_MODULE_1__["i"]; });




/***/ }),

/***/ "BDHH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ user; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ modal; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ sidebar; });

// CONCATENATED MODULE: ./redux/actions/user.ts
const Actions = {
  setData: data => {
    return {
      type: 'USER:SET_DATA',
      payload: data
    };
  },
  registerData: data => {
    return {
      type: 'USER:REGISTER_DATA',
      payload: data
    };
  }
};
/* harmony default export */ var user = (Actions);
// CONCATENATED MODULE: ./redux/actions/modal.ts
const modal_Actions = {
  showModal: text => {
    return dispatch => {
      dispatch({
        type: 'SHOW_MODAL',
        payload: text
      });
      setTimeout(() => {
        dispatch(modal_Actions.hideTimeout(true));
        setTimeout(() => {
          dispatch(modal_Actions.hideTimeout(null));
        }, 1500);
      }, 2500);
      setTimeout(() => {
        dispatch(modal_Actions.hideModal());
      }, 3500);
    };
  },
  handleClick: () => {
    return dispatch => {
      dispatch(modal_Actions.hideTimeout(true));
      setTimeout(() => {
        dispatch(modal_Actions.hideModal());
        dispatch(modal_Actions.hideTimeout(null));
      }, 1000);
    };
  },
  hideTimeout: timeout => {
    return {
      type: 'HIDE_TIMEOUT',
      payload: timeout
    };
  },
  hideModal: () => {
    return {
      type: 'HIDE_MODAL'
    };
  }
};
/* harmony default export */ var modal = (modal_Actions);
// CONCATENATED MODULE: ./redux/actions/sidebar.ts
const sidebar_Actions = {
  showSidebar: () => {
    return {
      type: 'SHOW_SIDEBAR'
    };
  },
  closeSidebar: () => {
    return dispatch => {
      dispatch({
        type: 'CLOSE_SIDEBAR'
      });
      setTimeout(() => {
        dispatch(sidebar_Actions.hideSidebar());
      }, 400);
    };
  },
  hideSidebar: () => {
    return {
      type: 'HIDE_SIDEBAR'
    };
  }
};
/* harmony default export */ var sidebar = (sidebar_Actions);
// CONCATENATED MODULE: ./redux/actions/index.ts




/***/ }),

/***/ "C8TP":
/***/ (function(module, exports) {

module.exports = require("yup");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JGdP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return shadows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return background; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return socSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return borders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return icons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isOk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return btn; });
const shadows = {
  shadow: '#d6d6d6',
  shadowDark: '#a0a0a0'
};
const background = {
  main: '#f8f8f8',
  modal: '#303335'
};
const socSet = {
  facebook: '#3b5998',
  instagram: '#e1306c',
  twitter: '#5ea9dd',
  youtube: '#ff0000'
};
const borders = {
  border: '#d6d6d6',
  borderInput: '#ddd'
};
const text = {
  main: '#303335',
  textInput: '#545759',
  hover: '#cb2c3b'
};
const icons = '#707070';
const error = '#f2564d';
const isOk = '#61c144';
const btn = '#cb2c3b';

/***/ }),

/***/ "JVe5":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "Kuyt":
/***/ (function(module, exports) {

module.exports = require("use-places-autocomplete");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "No/t":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "aphrodite/no-important"
var no_important_ = __webpack_require__("TsDz");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "@apollo/react-ssr"
var react_ssr_ = __webpack_require__("7fVs");

// EXTERNAL MODULE: ./lib/withApollo.tsx
var withApollo = __webpack_require__("46Yb");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// CONCATENATED MODULE: ./apollo/queries/posts.ts

const postsQuery = external_graphql_tag_default.a`
  query posts {
    posts {
      _id
      title
      createdAt
      small_text
      cover
      views
      likes
      author {
        name
        avatar
      }
    }
  }
`;
const commentsQuery = external_graphql_tag_default.a`
  query comments($postId: ID!) {
    comments(postId: $postId) {
      _id
    }
  }
`;
// EXTERNAL MODULE: ./modules/index.ts + 41 modules
var modules = __webpack_require__("f7R2");

// EXTERNAL MODULE: ./Components/index.tsx + 45 modules
var Components = __webpack_require__("5cwH");

// EXTERNAL MODULE: ./variabels/dimensions.ts
var dimensions = __webpack_require__("lHKs");

// CONCATENATED MODULE: ./styles/news.ts


/* harmony default export */ var styles_news = (no_important_["StyleSheet"].create({
  wrapper: {
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  news: {
    width: `calc(100% - ${dimensions["b" /* widthBlocks */].rightBlock}px)`,
    display: 'flex',
    flexWrap: 'wrap'
  }
}));
// CONCATENATED MODULE: ./pages/index.js












const Home = () => {
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(postsQuery);
  if (loading) return '';
  if (error) return `Error! ${error}`;
  const {
    posts
  } = data;
  const news = posts.map((item, index) => {
    const {
      loading,
      error,
      data
    } = Object(react_hooks_["useQuery"])(commentsQuery, {
      variables: {
        postId: item._id
      }
    });
    if (loading) return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["l" /* LoadingPost */], {
      isPost: false
    }, index);
    if (error) return `Error! ${error}`;
    const {
      comments
    } = data;
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["r" /* News */], {
      item: item,
      comments: comments
    }, index);
  });
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["m" /* MainLayout */], {
    title: "Home",
    header: "\u041D\u043E\u0432\u0438\u043D\u0438",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(styles_news.wrapper),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(styles_news.news),
        children: [news, /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["u" /* SectionTitle */], {
          title: "\u041C\u0430\u0440\u0448\u0440\u0443\u0442\u0438"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(modules["h" /* Populars */], {})]
    })
  });
};

/* harmony default export */ var pages = __webpack_exports__["default"] = (Object(withApollo["a" /* default */])(Home, {
  getDataFromTree: react_ssr_["getDataFromTree"]
}));

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "TsDz":
/***/ (function(module, exports) {

module.exports = require("aphrodite/no-important");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "Ww4b":
/***/ (function(module, exports) {

module.exports = require("@react-google-maps/api");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XCxI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TsDz");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__);

const background = `url('./logo.png')`;
/* harmony default export */ __webpack_exports__["a"] = (aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"].create({
  logo: {
    background: background,
    width: 110,
    height: 50,
    margin: '40px auto',
    backgroundSize: 'cover'
  },
  title: {
    textAlign: 'center',
    fontSize: 56,
    fontWeight: 800,
    margin: 50
  },
  wrapperForm: {
    background: '#fff',
    padding: '10px 20px'
  },
  textP: {
    margin: '10px 0 6px'
  },
  inputSub: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  inputSubRegister: {
    justifyContent: 'flex-end'
  },
  resPassword: {
    fontSize: 12
  },
  bottomBlock: {
    marginTop: 15,
    textAlign: 'center'
  },
  text: {
    fontWeight: 100
  },
  link: {
    color: '#0366d6',
    fontSize: 14,
    fontWeight: 100,
    fontStyle: 'italic'
  }
}));

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YvTO":
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dQHF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("8OQS"));

var _extends2 = _interopRequireDefault(__webpack_require__("pVnL"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _toBase = __webpack_require__("7UUK");

var _imageConfig = __webpack_require__("ANQk");

var _useIntersection = __webpack_require__("vNVm");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default"} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set([width, width * 2, width * 3].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function callLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes
}) {
  if (unoptimized) {
    return {
      src
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  const srcSet = widths.map((w, i) => `${callLoader({
    src,
    quality,
    width: w
  })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ');

  if (!sizes && kind === 'w') {
    sizes = widths.map((w, i) => i === last ? `${w}px` : `(max-width: ${w}px) ${w}px`).join(', ');
  }

  src = callLoader({
    src,
    quality,
    width: widths[last]
  });
  return {
    src,
    sizes,
    srcSet
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (false) {}

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (false) {}
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block'
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })));
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width];
  let paramsString = '';

  if (quality) {
    params.push('q_' + quality);
  }

  if (params.length) {
    paramsString = params.join(',') + '/';
  }

  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (false) {}

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "ePNP":
/***/ (function(module, exports) {

module.exports = require("next-with-apollo");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) {}

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const existingRouteInfo = this.components[route];

      if (shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "f7R2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ CreateLocationSelector; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ CreatePost; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ GoogleMaps; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* reexport */ InformUserLocation; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* reexport */ Likes; });
__webpack_require__.d(__webpack_exports__, "f", function() { return /* reexport */ LocationInformation; });
__webpack_require__.d(__webpack_exports__, "g", function() { return /* reexport */ ModalSetting; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ Populars; });
__webpack_require__.d(__webpack_exports__, "i", function() { return /* reexport */ PostShow; });
__webpack_require__.d(__webpack_exports__, "j", function() { return /* reexport */ UseRoutes; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "@apollo/react-hooks"
var react_hooks_ = __webpack_require__("mU8t");

// EXTERNAL MODULE: external "aphrodite/no-important"
var no_important_ = __webpack_require__("TsDz");

// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__("C8TP");

// EXTERNAL MODULE: external "apollo-boost"
var external_apollo_boost_ = __webpack_require__("YvTO");

// CONCATENATED MODULE: ./modules/CreateLocation/Containers/mutations.ts

const addLocationMutation = external_apollo_boost_["gql"]`
  mutation createLocations($locationsInput: LocationsInput) {
    createLocations(locationsInput: $locationsInput) {
      title
    }
  }
`;
// EXTERNAL MODULE: ./redux/actions/index.ts + 3 modules
var actions = __webpack_require__("BDHH");

// EXTERNAL MODULE: ./styles/index.ts
var styles = __webpack_require__("vBmG");

// EXTERNAL MODULE: ./variabels/index.ts
var variabels = __webpack_require__("BD5b");

// CONCATENATED MODULE: ./modules/CreateLocation/Components/styles.ts


/* harmony default export */ var Components_styles = (no_important_["StyleSheet"].create({
  wrapper: {
    padding: '10px 20px',
    width: variabels["j" /* widthBlocks */].locationSelect
  },
  blockInput: {
    padding: '6px 0'
  },
  paragraph: {
    fontSize: '1.1rem',
    color: variabels["i" /* text */].main,
    fontWeight: 600
  },
  input: {
    width: '100%'
  }
}));
// CONCATENATED MODULE: ./modules/CreateLocation/Containers/select.config.ts
const isTypeItem = [{
  value: 'other',
  title: 'Інше'
}, {
  value: 'castle',
  title: 'Замки'
}, {
  value: 'museum',
  title: 'Музеї'
}, {
  value: 'little-known-places',
  title: 'Маловідомі місця'
}, {
  value: 'mountain',
  title: 'Гори'
}, {
  value: 'viaduct',
  title: 'Мости та віадуки'
}];
// EXTERNAL MODULE: ./Components/index.tsx + 45 modules
var Components = __webpack_require__("5cwH");

// EXTERNAL MODULE: ./styles/login.ts
var login = __webpack_require__("XCxI");

// CONCATENATED MODULE: ./modules/CreateLocation/Components/CreateLocation.tsx









const CreateLocation = ({
  formik
}) => {
  const {
    values: {
      location
    }
  } = formik;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
      control: "input",
      id: "title",
      type: "text",
      label: "\u041D\u0430\u0437\u0432\u0430 \u043B\u043E\u043A\u0430\u0446\u0456\u0457:"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
      control: "input",
      id: "cover",
      type: "text",
      label: "\u041E\u0431\u043A\u043B\u0430\u0434\u0438\u043D\u043A\u0430"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
      control: "select",
      id: "isType",
      type: "text",
      label: "\u0422\u0438\u043F \u043B\u043E\u043A\u0430\u0446\u0456\u0457:",
      options: isTypeItem
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
      control: "inputGroup",
      id: "location",
      valueMap: location
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
      control: "textarea",
      name: "small_text",
      type: "text",
      label: "\u041A\u043E\u0440\u043E\u0442\u043A\u0438\u0439 \u043E\u043F\u0438\u0441:"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(styles["a" /* default */].flex),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
        control: "input",
        id: "coordinateY",
        type: "text",
        label: "\u0428\u0438\u0440\u043E\u0442\u0430:"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
        control: "input",
        id: "coordinateX",
        type: "text",
        label: "\u0414\u043E\u0432\u0433\u043E\u0442\u0430:"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(login["a" /* default */].inputSub),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["e" /* Button */], {
        type: "submit",
        nameBtn: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
        isSubmitting: formik.isSubmitting
      })
    })]
  });
};
// CONCATENATED MODULE: ./modules/CreateLocation/Containers/CreateLocationSelector.tsx













const CreateLocationSelector = ({
  latLng,
  isTypeSelect
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    data
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const [createLocations] = Object(react_hooks_["useMutation"])(addLocationMutation);
  const initialValues = {
    title: '',
    cover: '',
    small_text: '',
    linkToPost: '',
    coordinateY: '0.00000',
    coordinateX: '0.00000',
    isType: 'other',
    location: ['Київська обл.', 'м. Київ', 'вул. Хрещатик']
  };
  const validationSchema = external_yup_["object"]({
    title: external_yup_["string"]().min(5, 'Коротка назва').max(50, 'Дуже велика назва').required('Required')
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log(values);
    const coordinates = [values.coordinateY, values.coordinateX];
    const idAuthor = data ? data.userId : null;
    createLocations({
      variables: {
        locationsInput: {
          idAuthor: idAuthor,
          title: values.title,
          cover: values.cover,
          linkToPost: values.linkToPost,
          small_text: values.small_text,
          coordinates: coordinates,
          isType: values.isType,
          location: values.location
        }
      }
    }).then(data => {
      if (data) {
        dispatch(actions["a" /* modalActions */].showModal('Локація успішно добавлена!'));
        onSubmitProps.resetForm();
      }

      onSubmitProps.setSubmitting(false);
    }).catch(() => {
      onSubmitProps.setSubmitting(false);
    });
  };

  const AutoRef = () => {
    const {
      values,
      setFieldValue
    } = Object(external_formik_["useFormikContext"])();
    Object(external_react_["useEffect"])(() => {
      if (latLng) {
        setFieldValue('coordinateY', String(latLng.coordinateY));
        setFieldValue('coordinateX', String(latLng.coordinateX));
      }
    }, [latLng]);
    Object(external_react_["useEffect"])(() => {
      // @ts-ignore
      isTypeSelect(values.isType); // @ts-ignore
    }, [values.isType]);
    return null;
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: Object(no_important_["css"])(styles["a" /* default */].boxShadow, Components_styles.wrapper),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Formik"], {
      initialValues: initialValues,
      onSubmit: onSubmit,
      validationSchema: validationSchema,
      children: formik => {
        return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_formik_["Form"], {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(CreateLocation, {
            formik: formik
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(AutoRef, {})]
        });
      }
    })
  });
};
// CONCATENATED MODULE: ./apollo/mutations/addPost.ts

const addPostMutation = external_apollo_boost_["gql"]`
  mutation createPost($postInput: PostInput) {
    createPost(postInput: $postInput) {
      _id
    }
  }
`;
// CONCATENATED MODULE: ./modules/CreatePost/Components/styles.ts

/* harmony default export */ var CreatePost_Components_styles = (no_important_["StyleSheet"].create({
  wrapper: {
    marginTop: 20,
    padding: '40px 30px',
    background: '#fff'
  },
  wrapperBlock: {
    width: 'calc(100% - 360px)'
  },
  wrapperBlockNews: {
    width: '100%'
  },
  container: {
    width: 350,
    margin: '10px 5px',
    boxShadow: '2px 2px 4px 1px #a0a0a0'
  },
  text: {
    padding: '15px 20px',
    width: 'auto'
  },
  // Tickets
  input: {
    width: '100%'
  },
  btnBlock: {
    border: 'none',
    paddingTop: 10
  },
  paragraph: {
    paddingBottom: 10
  },
  submit: {
    marginTop: 30,
    justifyContent: 'flex-end'
  }
}));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// CONCATENATED MODULE: ./hooks/editor.tsx



const ReactQuill = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "iyzg", 7)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("iyzg")],
    modules: ['react-quill']
  }
});
const Editor = props => {
  const onChange = setValue => {
    props.onChange('editor', setValue);
  };

  const modules = {
    toolbar: [[{
      'header': '1'
    }, {
      'header': '2'
    }, {
      'font': []
    }], [{
      size: []
    }], ['bold', 'italic', 'underline', 'strike', 'blockquote'], [{
      'list': 'ordered'
    }, {
      'list': 'bullet'
    }, {
      'indent': '-1'
    }, {
      'indent': '+1'
    }], ['link', 'image', 'video'], ['clean']],
    clipboard: {
      matchVisual: false
    }
  };
  const formats = ['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video'];
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ReactQuill, {
    modules: modules,
    formats: formats,
    theme: "snow",
    value: props.editor,
    onChange: onChange
  });
};
// EXTERNAL MODULE: ./Components/Formik/styles.ts
var Formik_styles = __webpack_require__("hIOt");

// CONCATENATED MODULE: ./modules/CreatePost/Components/CreatePostForm.tsx












const CreatePostForm = ({
  formik
}) => {
  const {
    values: {
      type_material,
      isPrice,
      editor,
      tickets
    },
    setFieldValue
  } = formik;
  const options = [{
    id: 'new',
    title: 'Новина'
  }, {
    id: 'post',
    title: 'Стаття'
  }, {
    id: 'myTrip',
    title: 'Моя подорож'
  }];
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(styles["a" /* default */].flexVFS),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(type_material !== 'new' ? CreatePost_Components_styles.wrapperBlock : CreatePost_Components_styles.wrapperBlockNews),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
          control: "radio",
          name: "type_material",
          label: "\u0422\u0438\u043F \u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B\u0443:",
          options: options
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Object(no_important_["css"])(Formik_styles["a" /* default */].inputWrapper, styles["a" /* default */].flex, CreatePost_Components_styles.btnBlock),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: Object(no_important_["css"])(Formik_styles["a" /* default */].label, Formik_styles["a" /* default */].labelTouched),
            children: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043B\u043E\u043A\u0430\u0446\u0456\u044E:"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: '/maps',
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["e" /* Button */], {
                nameBtn: "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u0456",
                isSubmitting: false
              })
            })
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
            className: Object(no_important_["css"])(styles["a" /* default */].br)
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
            href: '/create-location',
            children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["e" /* Button */], {
                nameBtn: "\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043B\u043E\u043A\u0430\u0446\u0456\u044E",
                isSubmitting: false
              })
            })
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
          control: "input",
          id: "image_loader",
          type: "text",
          label: "\u041E\u0431\u043A\u043B\u0430\u0434\u0438\u043D\u043A\u0430:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
          control: "input",
          id: "title",
          type: "text",
          label: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
          control: "input",
          id: "tag",
          type: "text",
          label: "\u0422\u0435\u0433\u0438:"
        })]
      }), type_material !== 'new' && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(CreatePost_Components_styles.container),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Object(no_important_["css"])(styles["a" /* default */].flexSB),
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            className: Object(no_important_["css"])(CreatePost_Components_styles.text),
            children: "\u0412\u0445\u0456\u0434\u043D\u0438\u0439 \u041A\u0432\u0438\u0442\u043E\u043A"
          }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
            control: "checkbox",
            id: "isPrice",
            label: "\u0412\u0445\u0456\u0434 \u0432\u0456\u043B\u044C\u043D\u0438\u0439",
            value: "free",
            values: isPrice
          })]
        }), !isPrice[0] && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
          control: "inputGroup",
          id: "tickets",
          valueMap: tickets
        })]
      })]
    }), type_material !== 'new' && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
        control: "input",
        id: "work_time",
        type: "text",
        label: "\u0427\u0430\u0441 \u0440\u043E\u0431\u043E\u0442\u0438:"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["h" /* FormikControl */], {
        control: "textarea",
        name: "how_to_get_there",
        label: "\u042F\u043A \u0434\u0456\u0441\u0442\u0430\u0442\u0438\u0441\u044F:"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Editor, {
      editor: editor,
      onChange: setFieldValue
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(login["a" /* default */].inputSub, CreatePost_Components_styles.submit),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["e" /* Button */], {
        type: "submit",
        nameBtn: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
        isSubmitting: formik.isSubmitting
      })
    })]
  });
};
// CONCATENATED MODULE: ./modules/CreatePost/Containers/CreatePost.tsx












const CreatePost = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    data
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const [createPost] = Object(react_hooks_["useMutation"])(addPostMutation);
  const initialValues = {
    editor: '',
    type_material: 'post',
    title: '',
    tickets: ['Дорослий: 50грн', 'Дитячий: 50грн', 'Студенський: 50грн', 'Пенсійний: 50грн'],
    image_loader: '',
    link: '',
    tag: '',
    price: '',
    small_text: '',
    coordinateY: '',
    coordinateX: '',
    location: '',
    work_time: '',
    adultTicket: '',
    childTicket: '',
    studentTicket: '',
    pensionTicket: '',
    text: '',
    isPrice: ['free'],
    how_to_get_there: ''
  };
  const validationSchema = external_yup_["object"]({
    title: external_yup_["string"]().min(5, 'Коротка назва').max(50, 'Дуже велика назва').required('Required')
  });

  const onSubmit = (values, onSubmitProps) => {
    const tags = values.tag.split(' ');
    const coordinates = [values.coordinateY, values.coordinateX];
    const idAuthor = data ? data.userId : null;
    createPost({
      variables: {
        postInput: {
          idAuthor: idAuthor,
          type_material: values.type_material,
          title: values.title,
          link: values.link,
          tags: tags,
          tickets: values.tickets,
          small_text: values.small_text,
          coordinates: coordinates,
          location: values.location,
          work_time: values.work_time,
          editor: values.editor,
          isPrice: values.isPrice,
          how_to_get_there: values.how_to_get_there
        }
      }
    }).then(data => {
      if (data) {
        dispatch(actions["a" /* modalActions */].showModal('Статю успішно створено!'));
        onSubmitProps.resetForm();
      }

      onSubmitProps.setSubmitting(false);
    }).catch(() => {
      onSubmitProps.setSubmitting(false);
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: Object(no_important_["css"])(styles["a" /* default */].boxShadow, CreatePost_Components_styles.wrapper),
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Formik"], {
      initialValues: initialValues,
      onSubmit: onSubmit,
      validationSchema: validationSchema,
      children: formik => {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_formik_["Form"], {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(CreatePostForm, {
            formik: formik
          })
        });
      }
    })
  });
};
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "@react-google-maps/api"
var api_ = __webpack_require__("Ww4b");

// CONCATENATED MODULE: ./modules/GoogleMaps/Components/MarkersController.tsx


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const MarkersMap = dynamic_default()(() => __webpack_require__.e(/* import() */ 23).then(__webpack_require__.bind(null, "FYZ7")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("FYZ7")],
    modules: ['./MarkersMap']
  }
});
const MarkerQuery = dynamic_default()(() => __webpack_require__.e(/* import() */ 22).then(__webpack_require__.bind(null, "enRe")), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("enRe")],
    modules: ['./MarkerQuery']
  }
});
const MarkersController = (_ref) => {
  let {
    control
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["control"]);

  switch (control) {
    case 'MarkersMap':
      {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(MarkersMap, {
          rest: rest
        });
      }

    case 'MarkerQuery':
      {
        return /*#__PURE__*/Object(jsx_runtime_["jsx"])(MarkerQuery, {
          rest: rest
        });
      }

    default:
      return null;
  }
};
// CONCATENATED MODULE: ./modules/GoogleMaps/Containers/GoogleMaps.tsx









const Search = dynamic_default()(() => __webpack_require__.e(/* import() */ 25).then(__webpack_require__.bind(null, "5od3")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["v" /* Spin */], {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("5od3")],
    modules: ['../../Search/Containers/Search']
  }
});
const libraries = ["places"];
const GoogleMaps = ({
  mapContainerStyle,
  center,
  zoom,
  locations,
  disableDefaultUI,
  click,
  search
}) => {
  const {
    isLoaded,
    loadError
  } = Object(api_["useLoadScript"])({
    googleMapsApiKey: "AIzaSyDLRRgxqKe9Ok-an59Hh7qxfKZG0mGqHW8",
    // @ts-ignore
    libraries
  });
  const router = Object(router_["useRouter"])();
  const {
    0: marker,
    1: setMarker
  } = Object(external_react_["useState"])({
    control: 'null',
    options: null
  });
  const {
    0: centerMap,
    1: setCenterMap
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    setCenterMap(center);
  }, [center]);
  Object(external_react_["useEffect"])(() => {
    if (Object.keys(router.query).length !== 0) {
      if (!router.query.id) {
        setMarker({
          control: 'MarkerQuery',
          options: router.query
        });
      } else {
        setMarker({
          control: 'MarkerQuery',
          options: locations
        });
      }
    } else if (locations) {
      setMarker({
        control: 'MarkersMap',
        options: {
          setSelectedPark,
          locations
        }
      });
    }
  }, [router, locations]);
  const mapRef = Object(external_react_["useRef"])();
  const onMapLoad = Object(external_react_["useCallback"])(map => {
    mapRef.current = map;
  }, []);
  const panTo = Object(external_react_["useCallback"])(({
    lat,
    lng
  }) => {
    // @ts-ignore
    mapRef.current.panTo({
      lat,
      lng
    }); // @ts-ignore

    mapRef.current.setZoom(12);
    setMarker({
      control: 'MarkerQuery',
      options: center
    });
  }, []);
  const {
    0: selectedPark,
    1: setSelectedPark
  } = Object(external_react_["useState"])(null);
  const {
    0: closeWindow,
    1: setCloseWindow
  } = Object(external_react_["useState"])(false);
  const handleClick = Object(external_react_["useCallback"])(() => {
    setCloseWindow(true);
    setTimeout(() => {
      setSelectedPark(null);
      setCloseWindow(false);
    }, 700);
  }, []);
  const options = {
    disableDefaultUI: disableDefaultUI
  };

  const renderMap = () => {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      style: {
        position: 'relative',
        width: '100%'
      },
      children: [search && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Search, {
        panTo: panTo
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(api_["GoogleMap"], {
        mapContainerStyle: mapContainerStyle,
        zoom: zoom,
        center: centerMap,
        options: options,
        onLoad: onMapLoad,
        onClick: click ? event => {
          click(event);
          setMarker({
            control: 'MarkerQuery',
            options: {
              lat: event.latLng.lat(),
              lng: event.latLng.lng()
            }
          });
        } : null,
        children: [selectedPark && /*#__PURE__*/Object(jsx_runtime_["jsx"])(LocationInformation, {
          _id: selectedPark,
          handleClick: handleClick,
          closeWindow: closeWindow
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(MarkersController, {
          control: marker.control,
          options: marker.options
        })]
      })]
    });
  };

  if (loadError) {
    return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      children: "\u041D\u0435\u043C\u043E\u0436\u043B\u0438\u0432\u043E \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u043A\u0430\u0440\u0442\u0443"
    });
  }

  return isLoaded ? renderMap() : /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["v" /* Spin */], {});
};
// EXTERNAL MODULE: ./variabels/dimensions.ts
var dimensions = __webpack_require__("lHKs");

// CONCATENATED MODULE: ./modules/InformUserLocation/Components/styles.ts


/* harmony default export */ var InformUserLocation_Components_styles = (no_important_["StyleSheet"].create({
  wrapper: {
    width: dimensions["b" /* widthBlocks */].rightBlock,
    margin: '10px 5px',
    padding: 10,
    textAlign: 'center'
  },
  content: {
    paddingBottom: 10
  },
  text: {
    fontSize: 12
  }
}));
// CONCATENATED MODULE: ./modules/InformUserLocation/Components/InformLocation.tsx








const InformLocation = ({
  addLocationMyList,
  locationUser
}) => {
  const block = (title, text, nameBtn, action) => {
    return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(InformUserLocation_Components_styles.content),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Object(no_important_["css"])(InformUserLocation_Components_styles.text),
        children: text
      }), nameBtn && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["e" /* Button */], {
        handleClick: addLocationMyList,
        nameBtn: nameBtn,
        isSubmitting: false,
        action: action
      })]
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("section", {
    className: Object(no_important_["css"])(styles["a" /* default */].boxShadow, InformUserLocation_Components_styles.wrapper),
    children: (locationUser === null || locationUser === void 0 ? void 0 : locationUser.action) === 'visited' ? block('Ви вже тут були', 'Це місце збережене у вашому списку місць які ви відвідали') : /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
      children: [(locationUser === null || locationUser === void 0 ? void 0 : locationUser.action) === 'wantToVisit' ? block('Ви плануєте відвідати це місце', 'Це місце збережене у вашому списку для відвідування') : block('Плануєте відвідати?', 'Збережіть це місце в свому списку запланованих для відвідування місць.', 'Хочу відвідати', 'wantToVisit'), block('Були тут?', 'Збережіть це місце в свому списку запланованих для відвідування місць.', 'Вже відвідав', 'visited')]
    })
  });
};
// CONCATENATED MODULE: ./modules/InformUserLocation/Containers/querys.ts

const locationUserQuery = external_apollo_boost_["gql"]`
  query locationUser($userId: ID!, $locationId: ID!) {
    locationUser(userId: $userId, locationId: $locationId) {
      _id
      action
    }
  }
`;
// EXTERNAL MODULE: ./modules/InformUserLocation/Containers/mutations.ts
var mutations = __webpack_require__("pAeZ");

// CONCATENATED MODULE: ./modules/InformUserLocation/Containers/InformUserLocation.tsx









const InformUserLocation = ({
  user,
  locationId
}) => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const [addLocationsUserList] = Object(react_hooks_["useMutation"])(mutations["a" /* addLocationsUserListMutation */]);
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(locationUserQuery, {
    variables: {
      userId: user.data.userId,
      locationId: locationId
    }
  });

  const addLocationMyList = action => {
    const {
      locationUser
    } = data;
    const variables = {
      userId: user.data.userId,
      locationId: locationId,
      action: action
    };
    locationUser && (variables._id = locationUser._id);
    addLocationsUserList({
      variables: variables,
      refetchQueries: [{
        query: locationUserQuery,
        variables: {
          userId: user.data.userId,
          locationId: locationId
        }
      }]
    }).then(data => {
      if (data) {
        dispatch(actions["a" /* modalActions */].showModal('Локація успішно добавлена у ваш список'));
      }
    });
  };

  if (loading) return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["k" /* Loading */], {});
  if (error) return `Error! ${error}`;
  const {
    locationUser
  } = data;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(InformLocation, {
    addLocationMyList: addLocationMyList,
    locationUser: locationUser
  });
};
// EXTERNAL MODULE: external "@fortawesome/free-regular-svg-icons"
var free_regular_svg_icons_ = __webpack_require__("s7eq");

// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__("No/t");

// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__("uhWA");

// CONCATENATED MODULE: ./modules/Likes/Components/LikeIcon.tsx



const LikeIcon = ({
  className,
  handleChange,
  iconHearts
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
    className: className,
    onClick: handleChange,
    icon: iconHearts
  });
};
// EXTERNAL MODULE: ./variabels/colors.ts
var colors = __webpack_require__("JGdP");

// CONCATENATED MODULE: ./modules/Likes/Components/styles.ts


/* harmony default export */ var Likes_Components_styles = (no_important_["StyleSheet"].create({
  text: {
    fontSize: 14,
    paddingLeft: 3,
    lineHeight: 0
  },
  icon: {
    height: 18,
    padding: '2px 0'
  },
  iconActive: {
    color: colors["c" /* btn */]
  },
  iconPost: {
    cursor: 'pointer'
  }
}));
// CONCATENATED MODULE: ./modules/Likes/Components/Like.tsx









const Like = ({
  post,
  quantityLikes,
  userLike,
  handleChangeAdd,
  handleChangeRemove
}) => {
  const likeNumber = quantityLikes !== 0 && /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    className: Object(no_important_["css"])(Likes_Components_styles.text),
    children: quantityLikes
  });

  const className = userLike ? post ? Object(no_important_["css"])(styles["a" /* default */].icon, Likes_Components_styles.icon, Likes_Components_styles.iconActive, Likes_Components_styles.iconPost) : Object(no_important_["css"])(styles["a" /* default */].icon, Likes_Components_styles.icon, Likes_Components_styles.iconActive) : post ? Object(no_important_["css"])(styles["a" /* default */].icon, Likes_Components_styles.icon, Likes_Components_styles.iconPost) : Object(no_important_["css"])(styles["a" /* default */].icon, Likes_Components_styles.icon);
  const handleChange = post ? userLike ? handleChangeRemove : handleChangeAdd : () => {};
  const iconHearts = userLike ? free_solid_svg_icons_["faHeart"] : free_regular_svg_icons_["faHeart"];

  const likeActive = /*#__PURE__*/Object(jsx_runtime_["jsx"])(LikeIcon, {
    className: className,
    handleChange: handleChange,
    iconHearts: iconHearts
  });

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Object(no_important_["css"])(styles["a" /* default */].flex),
    children: [likeActive, likeNumber]
  });
};
// CONCATENATED MODULE: ./modules/Likes/Containers/mutations.ts

const addLikeMutation = external_apollo_boost_["gql"]`
  mutation addLike($postId: ID!, $userId: ID!) {
    addLike(postId: $postId, userId: $userId) {
      likes
    }
  }
`;
const removeLikeMutation = external_apollo_boost_["gql"]`
  mutation removeLike($postId: ID!, $userId: ID!) {
    removeLike(postId: $postId, userId: $userId) {
      _id
    }
  }
`;
// CONCATENATED MODULE: ./modules/Likes/Containers/Likes.tsx







const Likes = ({
  id,
  likes,
  post
}) => {
  const {
    0: quantityLikes,
    1: setQuantityLikes
  } = Object(external_react_["useState"])(likes.length);
  const {
    0: userLike,
    1: setUserLike
  } = Object(external_react_["useState"])(false);
  const user = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    data
  } = user;
  const userId = data ? data.userId : undefined;
  Object(external_react_["useEffect"])(() => {
    likes.filter(item => {
      if (item === userId) {
        setUserLike(true);
      } else {
        setUserLike(false);
      }
    });
  }, [likes, userId]);
  const [addLike] = Object(react_hooks_["useMutation"])(addLikeMutation);
  const [removeLike] = Object(react_hooks_["useMutation"])(removeLikeMutation);

  const handleChangeAdd = () => {
    if (userId) {
      setQuantityLikes(quantityLikes + 1);
      setUserLike(true);
      addLike({
        variables: {
          postId: id,
          userId: userId
        }
      }).then(r => r);
    } else {
      dispatch(actions["a" /* modalActions */].showModal('Для виконання данної дії потрібно авторизоватись'));
    }
  };

  const handleChangeRemove = () => {
    setQuantityLikes(quantityLikes - 1);
    setUserLike(false);
    removeLike({
      variables: {
        postId: id,
        userId: userId
      }
    }).then(r => r);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Like, {
    post: post,
    quantityLikes: quantityLikes,
    userLike: userLike,
    handleChangeAdd: handleChangeAdd,
    handleChangeRemove: handleChangeRemove
  });
};
// CONCATENATED MODULE: ./modules/LocationInformation/Components/styles.ts


const translateKeyframes = {
  '0%': {
    transform: 'translateX(-350px)'
  },
  '100%': {
    transform: 'translateX(0)'
  }
};
const closedWindow = {
  '0%': {
    transform: 'translateX(0)'
  },
  '100%': {
    transform: 'translateX(-350px)'
  }
};
/* harmony default export */ var LocationInformation_Components_styles = (no_important_["StyleSheet"].create({
  wrapper: {
    width: 350,
    position: 'absolute',
    zIndex: 2,
    background: '#fff',
    height: '100%',
    animationName: [translateKeyframes],
    animationDuration: '0.7s'
  },
  closedWindow: {
    animationName: [closedWindow],
    animationDuration: '0.7s'
  },
  block: {
    width: '100%',
    padding: '10px 20px',
    background: variabels["b" /* btn */]
  },
  blockImg: {
    lineHeight: 0
  },
  cover: {
    maxWidth: '100%'
  },
  title: {
    color: '#fff'
  },
  blockText: {
    padding: '10px 20px'
  },
  icon: {
    color: '#fff',
    height: '20px',
    width: 'auto !important',
    cursor: 'pointer'
  },
  text: {
    fontSize: '0.9rem',
    textAlign: 'justify',
    lineHeight: '20px'
  },
  link: {
    color: '#0366d6',
    fontSize: 14,
    fontWeight: 100,
    fontStyle: 'italic'
  },
  textInfo: {
    fontSize: '1rem',
    display: 'inline',
    marginRight: 6
  }
}));
// CONCATENATED MODULE: ./modules/LocationInformation/Components/Information.tsx










const Information = ({
  location,
  handleClick,
  closeWindow
}) => {
  const {
    cover,
    linkToPost,
    small_text,
    title
  } = location;
  const viewWindow = closeWindow ? Object(no_important_["css"])(LocationInformation_Components_styles.wrapper, LocationInformation_Components_styles.closedWindow) : Object(no_important_["css"])(LocationInformation_Components_styles.wrapper);
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: viewWindow,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(LocationInformation_Components_styles.blockImg),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
        className: Object(no_important_["css"])(LocationInformation_Components_styles.cover),
        src: cover,
        alt: ""
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(LocationInformation_Components_styles.block, styles["a" /* default */].flexSB),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
        onClick: handleClick,
        className: Object(no_important_["css"])(LocationInformation_Components_styles.icon),
        icon: free_solid_svg_icons_["faArrowLeft"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Object(no_important_["css"])(LocationInformation_Components_styles.title),
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ModalSetting, {
        mapInformation: true
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Object(no_important_["css"])(LocationInformation_Components_styles.blockText),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Object(no_important_["css"])(LocationInformation_Components_styles.text),
        children: small_text
      })
    }), linkToPost.length !== 0 ? /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(no_important_["css"])(LocationInformation_Components_styles.blockText),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        className: Object(no_important_["css"])(LocationInformation_Components_styles.textInfo),
        children: ["\u0411\u0456\u043B\u044C\u0448\u0435 \u043F\u0440\u043E ", title, " \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044C \u0442\u0443\u0442:"]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
        href: `/post/[id]`,
        as: `/post/${linkToPost}`,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
            className: Object(no_important_["css"])(LocationInformation_Components_styles.link),
            children: title
          })
        })
      })]
    }) : null]
  });
};
// CONCATENATED MODULE: ./modules/LocationInformation/Containers/querys.ts

const locationQuery = external_apollo_boost_["gql"]`
  query location($_id: ID!) {
    location(_id: $_id) {
      _id
      cover
      title
      small_text
      linkToPost
    }
  }
`;
// CONCATENATED MODULE: ./modules/LocationInformation/Containers/LocationInformation.tsx






const LocationInformation = ({
  _id,
  handleClick,
  closeWindow
}) => {
  const {
    loading,
    error,
    data
  } = Object(react_hooks_["useQuery"])(locationQuery, {
    variables: {
      _id
    }
  });
  if (loading) return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["k" /* Loading */], {});
  if (error) return `Error! ${error}`;
  const {
    location
  } = data;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Information, {
    location: location,
    handleClick: handleClick,
    closeWindow: closeWindow
  });
};
// EXTERNAL MODULE: external "@fortawesome/free-brands-svg-icons"
var free_brands_svg_icons_ = __webpack_require__("JVe5");

// CONCATENATED MODULE: ./modules/ModalSetting/Components/styles.ts


const openModal = {
  'from': {
    transform: 'scaleX(0)',
    opacity: 0
  },
  'to': {
    transform: 'scaleX(1)',
    opacity: 1
  }
};
const closeModal = {
  'from': {
    transform: 'scaleX(1)',
    opacity: 1
  },
  'to': {
    transform: 'scaleX(0)',
    opacity: 0
  }
};
/* harmony default export */ var ModalSetting_Components_styles = (no_important_["StyleSheet"].create({
  block: {
    position: 'relative'
  },
  iconSetting: {
    cursor: 'pointer',
    transition: '0.1s',
    ':hover': {
      color: colors["c" /* btn */]
    }
  },
  iconSettingMapInf: {
    cursor: 'pointer',
    color: '#fff',
    transition: '0.1s',
    ':hover': {
      opacity: 0.9
    }
  },
  wrapper: {
    position: 'absolute',
    right: 0,
    background: colors["a" /* background */].modal,
    padding: '30px 10px',
    width: 200,
    transformOrigin: 'top right',
    animationName: [openModal],
    animationDuration: '500ms',
    zIndex: 2
  },
  closeModal: {
    animationName: [closeModal],
    animationDuration: '500ms'
  },
  btn: {
    position: 'absolute',
    top: 8,
    right: 8
  },
  icon: {
    width: 'auto !important',
    height: 22,
    color: colors["e" /* icons */],
    transition: '0.1s',
    ':hover': {
      color: colors["c" /* btn */]
    }
  },
  ul: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  li: {
    padding: 0,
    lineHeight: 1.8,
    color: '#fff',
    transition: '0.15s',
    cursor: 'pointer',
    fontSize: '1.1rem',
    ':hover': {
      color: colors["c" /* btn */]
    }
  }
}));
// CONCATENATED MODULE: ./modules/ModalSetting/Components/Modal.tsx









const Modal = ({
  mapInformation,
  handleClick,
  closeModalSetting,
  showModalSetting,
  addLocationMyList
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: Object(no_important_["css"])(ModalSetting_Components_styles.block),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      onClick: () => handleClick(),
      className: Object(no_important_["css"])(styles["a" /* default */].icon, mapInformation ? ModalSetting_Components_styles.iconSettingMapInf : ModalSetting_Components_styles.iconSetting),
      icon: free_brands_svg_icons_["faCloudsmith"]
    }), showModalSetting && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
      className: Object(no_important_["css"])(styles["a" /* default */].boxShadow, ModalSetting_Components_styles.wrapper, closeModalSetting && ModalSetting_Components_styles.closeModal),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
        onClick: () => handleClick(),
        className: Object(no_important_["css"])(ModalSetting_Components_styles.btn),
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: Object(no_important_["css"])(ModalSetting_Components_styles.icon),
          icon: free_solid_svg_icons_["faTimes"]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("ul", {
        className: Object(no_important_["css"])(ModalSetting_Components_styles.ul),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          className: Object(no_important_["css"])(ModalSetting_Components_styles.li),
          children: "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          onClick: () => addLocationMyList('wantToVisit'),
          className: Object(no_important_["css"])(ModalSetting_Components_styles.li),
          children: "\u0425\u043E\u0447\u0443 \u0432\u0456\u0434\u0432\u0456\u0434\u0430\u0442\u0438"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("li", {
          onClick: () => addLocationMyList('visited'),
          className: Object(no_important_["css"])(ModalSetting_Components_styles.li),
          children: "\u0411\u0443\u0432 \u0442\u0443\u0442"
        })]
      })]
    })]
  });
};
// CONCATENATED MODULE: ./modules/ModalSetting/Containers/mutations.ts

const addLocationsUserListMutation = external_apollo_boost_["gql"]`
  mutation addLocationsUserList( $userId: ID!, $locationId: ID!, $action: String! ) {
    addLocationsUserList( userId: $userId, locationId: $locationId, action: $action ) {
      _id
    }
  }
`;
// CONCATENATED MODULE: ./modules/ModalSetting/Containers/ModalSetting.tsx







const ModalSetting = ({
  mapInformation
}) => {
  const {
    data
  } = Object(external_react_redux_["useSelector"])(state => state.user);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: showModalSetting,
    1: setShowModalSetting
  } = Object(external_react_["useState"])(false);
  const {
    0: closeModalSetting,
    1: setCloseModalSetting
  } = Object(external_react_["useState"])(false);
  const [addLocationsUserList] = Object(react_hooks_["useMutation"])(addLocationsUserListMutation);

  const handleClick = () => {
    if (data) {
      if (showModalSetting) {
        setCloseModalSetting(true);
        setTimeout(() => {
          setCloseModalSetting(false);
          setShowModalSetting(false);
        }, 400);
      } else {
        setShowModalSetting(true);
      }
    } else {
      dispatch(actions["a" /* modalActions */].showModal('Для виконання данної дії потрібно авторизоватись'));
    }
  };

  const addLocationMyList = action => {
    handleClick();
    addLocationsUserList({
      variables: {
        userId: data.userId,
        locationId: '5e8dd38b3e3a8b4608faf12d',
        action: action
      }
    }).then(data => {
      if (data) {
        dispatch(actions["a" /* modalActions */].showModal('Локація успішно добавлена у ваш список'));
      }
    });
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Modal, {
    mapInformation: mapInformation,
    handleClick: handleClick,
    showModalSetting: showModalSetting,
    closeModalSetting: closeModalSetting,
    addLocationMyList: addLocationMyList
  });
};
// CONCATENATED MODULE: ./modules/Populars/Components/styles.ts



/* harmony default export */ var Populars_Components_styles = (no_important_["StyleSheet"].create({
  wrapper: {
    width: dimensions["b" /* widthBlocks */].rightBlock,
    margin: '10px 5px',
    padding: 10
  },
  link: {
    margin: '15px 0',
    transition: '0.2s',
    ':hover': {
      opacity: 0.8,
      color: colors["c" /* btn */]
    }
  },
  img: {
    width: 35,
    height: 35,
    borderRadius: '50%',
    marginRight: 15
  },
  title: {
    fontSize: 15,
    letterSpacing: 1,
    lineHeight: '16px'
  }
}));
// CONCATENATED MODULE: ./modules/Populars/Components/PopularsBlock.tsx







const PopularsBlock = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("section", {
    className: Object(no_important_["css"])(Populars_Components_styles.wrapper, styles["a" /* default */].boxShadow),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h4", {
      children: "\u041F\u041E\u041F\u0423\u041B\u042F\u0420\u041D\u0406"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: Object(no_important_["css"])(styles["a" /* default */].flex, Populars_Components_styles.link),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: Object(no_important_["css"])(Populars_Components_styles.img),
          src: "http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/pz_450.jpg",
          alt: ""
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: Object(no_important_["css"])(Populars_Components_styles.title),
          children: "\u041F\u0456\u0434\u0433\u043E\u0440\u0435\u0446\u044C\u043A\u0438\u0439 \u0437\u0430\u043C\u043E\u043A"
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: Object(no_important_["css"])(styles["a" /* default */].flex, Populars_Components_styles.link),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: Object(no_important_["css"])(Populars_Components_styles.img),
          src: "http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/pz_450.jpg",
          alt: ""
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: Object(no_important_["css"])(Populars_Components_styles.title),
          children: "\u041F\u0456\u0434\u0433\u043E\u0440\u0435\u0446\u044C\u043A\u0438\u0439 \u0437\u0430\u043C\u043E\u043A"
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: Object(no_important_["css"])(styles["a" /* default */].flex, Populars_Components_styles.link),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: Object(no_important_["css"])(Populars_Components_styles.img),
          src: "http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/oz_450.jpg",
          alt: ""
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: Object(no_important_["css"])(Populars_Components_styles.title),
          children: "\u041E\u043B\u0435\u0441\u044C\u043A\u0438\u0439 \u0437\u0430\u043C\u043E\u043A"
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
      href: "/",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("a", {
        className: Object(no_important_["css"])(styles["a" /* default */].flex, Populars_Components_styles.link),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: Object(no_important_["css"])(Populars_Components_styles.img),
          src: "http://326b53d9806dcac09833-a590b81c812a57d0f4b1c3b1d1b7a9ea.r50.cf3.rackcdn.com/news/hf_450.jpg",
          alt: ""
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          className: Object(no_important_["css"])(Populars_Components_styles.title),
          children: "\u0425\u043E\u0442\u0438\u043D\u0441\u044C\u043A\u0430 \u0444\u043E\u0440\u0442\u0435\u0446\u044F"
        })]
      })
    })]
  });
};
// CONCATENATED MODULE: ./modules/Populars/Containers/Populars.tsx



const Populars = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(PopularsBlock, {});
};
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// CONCATENATED MODULE: ./modules/Post/Containers/query.ts

const postQuery = external_apollo_boost_["gql"]`
  query post($_id: ID!) {
    post(_id: $_id) {
      _id
      title
      cover
      createdAt
      small_text
      text
      views
      likes
      tickets
      coordinates
      location
      work_time
      isType
      editor
      locationId
      author {
        _id
        name
        avatar
      }
    }
  }
`;
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__("Aiso");
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);

// EXTERNAL MODULE: external "react-intersection-observer"
var external_react_intersection_observer_ = __webpack_require__("p1tF");

// EXTERNAL MODULE: external "aphrodite"
var external_aphrodite_ = __webpack_require__("t24B");

// CONCATENATED MODULE: ./modules/Post/Components/styles.ts


/* harmony default export */ var Post_Components_styles = (no_important_["StyleSheet"].create({
  wrapperL: {
    maxWidth: variabels["k" /* widthsDescTop */].widthL
  },
  wrapper: {
    padding: '10px 20px',
    margin: 10,
    width: `calc(100% - ${variabels["j" /* widthBlocks */].rightBlock}px)`,
    background: '#fff'
  },
  title: {
    margin: '10px 0'
  },
  text: {
    marginBottom: 30,
    textAlign: 'justify'
  },
  subTittle: {
    fontWeight: 600
  },
  img: {
    margin: '10px auto 30px',
    display: 'block'
  }
}));
// CONCATENATED MODULE: ./modules/Post/Components/Post.tsx











const Comments = dynamic_default()(() => __webpack_require__.e(/* import() */ 21).then(__webpack_require__.bind(null, "bCAk")), {
  loading: () => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["v" /* Spin */], {}),
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("bCAk")],
    modules: ['../../Comments/Containers/Comments']
  }
});
const Post = ({
  user,
  post
}) => {
  const {
    data
  } = user;
  const {
    _id,
    title,
    small_text,
    cover,
    views,
    likes,
    author,
    createdAt,
    coordinates,
    tickets,
    location,
    work_time,
    isType,
    editor,
    locationId
  } = post;
  const {
    0: inView,
    1: setInView
  } = Object(external_react_["useState"])(false);

  const handleChange = e => {
    if (e) {
      setInView(e);
    }
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Object(external_aphrodite_["css"])(styles["a" /* default */].flexVFS, Post_Components_styles.wrapperL),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Object(external_aphrodite_["css"])(Post_Components_styles.wrapper, styles["a" /* default */].boxShadow),
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["c" /* AuthorPost */], {
        isArticle: true,
        author: author,
        date: createdAt
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
        className: Object(external_aphrodite_["css"])(Post_Components_styles.title),
        children: title
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        className: Object(external_aphrodite_["css"])(Post_Components_styles.text),
        children: small_text
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(image_default.a, {
        className: Object(external_aphrodite_["css"])(Post_Components_styles.img),
        src: `/assets/uploads${cover}`,
        layout: "intrinsic",
        alt: title,
        width: 980,
        height: 450
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "editorWrapper",
        dangerouslySetInnerHTML: {
          __html: editor
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(external_aphrodite_["css"])(styles["a" /* default */].flexSB, styles["a" /* default */].block, styles["a" /* default */].bottom),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["a" /* ArticleStats */], {
          isArticle: true,
          views: views,
          comments: []
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Likes, {
          id: _id,
          likes: likes,
          post: true
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_intersection_observer_["InView"], {
        onChange: handleChange,
        children: inView && /*#__PURE__*/Object(jsx_runtime_["jsx"])(Comments, {
          id: _id
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["j" /* InfoBar */], {
        coordinates: coordinates,
        tickets: tickets,
        location: location,
        work_time: work_time,
        isType: isType
      }), data && /*#__PURE__*/Object(jsx_runtime_["jsx"])(InformUserLocation, {
        locationId: locationId,
        user: user
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Populars, {})]
    })]
  });
};
// CONCATENATED MODULE: ./modules/Post/Containers/Post.tsx







const PostShow = ({
  _id
}) => {
  const user = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    loading,
    error,
    data
  } = Object(client_["useQuery"])(postQuery, {
    variables: {
      _id
    }
  });
  if (loading) return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["l" /* LoadingPost */], {
    isPost: true
  });
  if (error) return `Error! ${error}`;
  const {
    post
  } = data;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(Post, {
    post: post,
    user: user
  });
};
// CONCATENATED MODULE: ./modules/Routes/Components/styles.ts

/* harmony default export */ var Routes_Components_styles = (no_important_["StyleSheet"].create({
  user: {
    margin: '0 10px'
  },
  userItem: {
    position: 'relative',
    cursor: 'pointer',
    marginLeft: 14
  }
}));
// CONCATENATED MODULE: ./modules/Routes/Components/IsActiveUser.tsx









const IsActiveUser = ({
  data,
  showSidebar
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Object(no_important_["css"])(styles["a" /* default */].flex),
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
      className: Object(no_important_["css"])(styles["a" /* default */].icon),
      icon: free_solid_svg_icons_["faBell"]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      onClick: () => showSidebar(),
      className: Object(no_important_["css"])(styles["a" /* default */].flex, Routes_Components_styles.userItem),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Components["d" /* Avatar */], {
        name: data.name,
        avatar: data.avatar,
        size: "S"
      })
    })]
  });
};
// CONCATENATED MODULE: ./modules/Routes/Components/IsNotActiveUser.tsx









const IsNotActiveUser = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
    href: "/login",
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Object(no_important_["css"])(styles["a" /* default */].flexSB),
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "\u0423\u0432\u0456\u0439\u0442\u0438"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(react_fontawesome_["FontAwesomeIcon"], {
          className: Object(no_important_["css"])(styles["a" /* default */].icon, Routes_Components_styles.user),
          icon: free_solid_svg_icons_["faUser"]
        })]
      })
    })
  });
};
// CONCATENATED MODULE: ./modules/Routes/Components/index.tsx


// CONCATENATED MODULE: ./modules/Routes/Containers/Routes.tsx






const UseRoutes = () => {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const user = Object(external_react_redux_["useSelector"])(state => state.user);
  const {
    data
  } = user;

  const showSidebar = () => {
    dispatch(actions["b" /* sidebarActions */].showSidebar());
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: data ? /*#__PURE__*/Object(jsx_runtime_["jsx"])(IsActiveUser, {
      data: data,
      showSidebar: showSidebar
    }) : /*#__PURE__*/Object(jsx_runtime_["jsx"])(IsNotActiveUser, {})
  });
};
// CONCATENATED MODULE: ./modules/index.ts











/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hIOt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TsDz");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BD5b");


/* harmony default export */ __webpack_exports__["a"] = (aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"].create({
  // Input
  inputWrapper: {
    position: 'relative',
    margin: '20px 0 30px',
    borderBottom: `1px solid ${_variabels__WEBPACK_IMPORTED_MODULE_1__[/* borders */ "a"].borderInput}`
  },
  input: {
    padding: '0 0 10px 11px',
    color: '#24292e',
    backgroundColor: '#fff'
  },
  inputUser: {
    width: '100%'
  },
  icon: {
    position: 'absolute',
    top: '40%',
    transform: 'translateY(-50%)',
    right: 10,
    fontSize: 24,
    color: _variabels__WEBPACK_IMPORTED_MODULE_1__[/* error */ "c"],
    border: `1px solid ${_variabels__WEBPACK_IMPORTED_MODULE_1__[/* error */ "c"]}`,
    padding: '0 12px',
    borderRadius: '50%'
  },
  isOkColor: {
    color: _variabels__WEBPACK_IMPORTED_MODULE_1__[/* isOk */ "f"]
  },
  error: {
    borderColor: _variabels__WEBPACK_IMPORTED_MODULE_1__[/* error */ "c"]
  },
  label: {
    position: 'absolute',
    padding: '0 0 10px 11px',
    transition: 'transform .4s cubic-bezier(.25,.8,.25,1)',
    cursor: 'text'
  },
  labelTouched: {
    transform: 'translate3d(-23px,-23px,0) scale(.67)'
  },
  //Checkbox
  text: {
    padding: '15px 20px',
    width: 'auto'
  },
  checkbox: {
    fontSize: 12,
    cursor: 'pointer'
  },
  checkboxInner: {
    marginRight: 5,
    border: `1px solid ${_variabels__WEBPACK_IMPORTED_MODULE_1__[/* borders */ "a"].borderInput}`,
    width: 14,
    height: 14,
    borderRadius: 4,
    paddingLeft: 1
  },
  checkboxInnerActive: {
    background: _variabels__WEBPACK_IMPORTED_MODULE_1__[/* socSet */ "h"].facebook
  },
  iconCheck: {
    color: '#fff'
  },
  //Radio
  inputRadio: {
    display: 'none'
  },
  labelWrapper: {
    cursor: 'pointer',
    marginRight: 15
  },
  labelRadio: {
    margin: '0 6px',
    border: `2px solid ${_variabels__WEBPACK_IMPORTED_MODULE_1__[/* icons */ "e"]}`,
    height: 12,
    width: 12,
    borderRadius: 12
  },
  labelActive: {
    background: _variabels__WEBPACK_IMPORTED_MODULE_1__[/* icons */ "e"],
    transition: '200ms'
  },
  // Textarea
  wrapperTextarea: {
    position: 'relative'
  },
  textarea: {
    padding: '10px 15px',
    color: _variabels__WEBPACK_IMPORTED_MODULE_1__[/* text */ "i"].textInput,
    fontWeight: 600,
    width: '100%'
  },
  labelTextarea: {
    padding: '10px 14px'
  },
  textareaError: {
    bottom: 20
  },
  // InputGroup
  field: {
    borderBottom: `1px solid ${_variabels__WEBPACK_IMPORTED_MODULE_1__[/* borders */ "a"].borderInput}`,
    marginBottom: 10
  },
  filedIconPlus: {
    fontSize: 11,
    color: _variabels__WEBPACK_IMPORTED_MODULE_1__[/* icons */ "e"]
  },
  filedIconMinus: {
    fontSize: 20,
    color: _variabels__WEBPACK_IMPORTED_MODULE_1__[/* error */ "c"]
  }
}));

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "iyzg":
/***/ (function(module, exports) {

module.exports = require("react-quill");

/***/ }),

/***/ "lHKs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return widthsDescTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return widthBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return heightIcons; });
const widthsDescTop = {
  widthXL: 1600,
  widthL: 1380,
  widthS: 760
};
const widthBlocks = {
  newsBlock: 336,
  rightBlock: 280,
  locationSelect: 350
};
const heightIcons = {
  iconXL: 20
};

/***/ }),

/***/ "mU8t":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "p1tF":
/***/ (function(module, exports) {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ "pAeZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLocationsUserListMutation; });
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("YvTO");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_0__);

const addLocationsUserListMutation = apollo_boost__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation addLocationsUserList( $_id: ID, $userId: ID, $locationId: ID, $action: String ) {
    addLocationsUserList( _id: $_id, userId: $userId, locationId: $locationId, action: $action ) {
      _id
    }
  }
`;

/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "s7eq":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-regular-svg-icons");

/***/ }),

/***/ "t24B":
/***/ (function(module, exports) {

module.exports = require("aphrodite");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "uhWA":
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "vBmG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("TsDz");
/* harmony import */ var aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _variabels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BD5b");


/* harmony default export */ __webpack_exports__["a"] = (aphrodite_no_important__WEBPACK_IMPORTED_MODULE_0__["StyleSheet"].create({
  wrapper: {
    maxWidth: _variabels__WEBPACK_IMPORTED_MODULE_1__[/* widthsDescTop */ "k"].widthL,
    margin: '0 auto',
    padding: '10px 20px'
  },
  wrapperLogin: {
    width: 400,
    margin: '20px auto'
  },
  flexSB: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flexVFS: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  block: {
    paddingBottom: 10
  },
  blockText: {
    height: 200,
    overflowY: 'hidden',
    position: 'relative'
  },
  shadow: {
    position: 'absolute',
    height: 25,
    background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.7) 40%, rgba(255,255,255,0.1) 100%)',
    width: '100%',
    bottom: 0
  },
  boxShadow: {
    boxShadow: `3px 0px 20px ${_variabels__WEBPACK_IMPORTED_MODULE_1__[/* shadows */ "g"].shadow}`
  },
  icon: {
    height: _variabels__WEBPACK_IMPORTED_MODULE_1__[/* heightIcons */ "d"].iconXL,
    width: 'auto !important',
    color: _variabels__WEBPACK_IMPORTED_MODULE_1__[/* icons */ "e"]
  },
  views: {
    fontSize: 12,
    display: 'flex',
    alignItems: 'center'
  },
  comment: {
    fontSize: 12,
    marginLeft: 15,
    display: 'flex',
    alignItems: 'center'
  },
  iconS: {
    height: 14,
    width: 'auto !important',
    color: _variabels__WEBPACK_IMPORTED_MODULE_1__[/* icons */ "e"],
    marginRight: 8
  },
  bottom: {
    borderTop: '1px solid #cccccc'
  },
  wrapperCreateLocation: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'space-between'
  },
  br: {
    marginRight: 15
  }
}));

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__("0G5g"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });