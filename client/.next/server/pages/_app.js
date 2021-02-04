module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/react-quill/dist/quill.snow.css":
/*!******************************************************!*\
  !*** ./node_modules/react-quill/dist/quill.snow.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_locale_uk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/locale/uk */ "moment/locale/uk");
/* harmony import */ var moment_locale_uk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_uk__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/store */ "./redux/store.ts");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/globals.css */ "./styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "D:\\web\\travel_guide\\client\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








moment__WEBPACK_IMPORTED_MODULE_3___default.a.locale('uk');

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_6__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./redux/reducers sync recursive ^\\.\\/.*$":
/*!**************************************!*\
  !*** ./redux/reducers sync ^\.\/.*$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": "./redux/reducers/index.ts",
	"./googleMaps": "./redux/reducers/googleMaps.ts",
	"./googleMaps.ts": "./redux/reducers/googleMaps.ts",
	"./index": "./redux/reducers/index.ts",
	"./index.ts": "./redux/reducers/index.ts",
	"./modal": "./redux/reducers/modal.ts",
	"./modal.ts": "./redux/reducers/modal.ts",
	"./sidebar": "./redux/reducers/sidebar.ts",
	"./sidebar.ts": "./redux/reducers/sidebar.ts",
	"./user": "./redux/reducers/user.ts",
	"./user.ts": "./redux/reducers/user.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./redux/reducers sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./redux/reducers/googleMaps.ts":
/*!**************************************!*\
  !*** ./redux/reducers/googleMaps.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  mapContainerStyle: {},
  center: {},
  zoom: 1,
  locations: null,
  control: null,
  isType: null,
  selectLocations: []
};

const googleMaps = (state = initialState, actions) => {
  switch (actions.type) {
    case 'GOOGLE_MAPS:LOCATIONS':
      const locations = state.locations ? state.locations : actions.payload;
      const control = state.control || 'MarkersMap';
      return _objectSpread(_objectSpread({}, state), {}, {
        mapContainerStyle: {
          height: "calc(100vh - 200px)",
          width: "100%"
        },
        center: {
          lat: 49.026151,
          lng: 31.483070
        },
        zoom: 6,
        locations: locations,
        control: control
      });

    case 'GOOGLE_MAPS:SET_LOCATIONS_SORT':
      {
        if (actions.payload) {
          const locations = state.locations.concat(actions.payload);
          return _objectSpread(_objectSpread({}, state), {}, {
            locations: locations
          });
        }

        return _objectSpread({}, state);
      }

    case 'GOOGLE_MAPS:CHANGE_LOCATIONS':
      return _objectSpread(_objectSpread({}, state), {}, {
        mapContainerStyle: actions.payload.mapContainerStyle,
        center: actions.payload.center,
        zoom: 11,
        locations: actions.payload.locations,
        control: 'MarkerQuery',
        isType: actions.payload.isType
      });

    case 'GOOGLE_MAPS:CREATE_LOCATIONS':
      return _objectSpread(_objectSpread({}, state), {}, {
        mapContainerStyle: {
          height: "calc(100vh - 200px)",
          width: '100%'
        },
        center: actions.payload.center,
        zoom: 6,
        locations: actions.payload.locations,
        control: actions.payload.control
      });

    case 'GOOGLE_MAPS:CHANGE_IS_TYPE':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          isType: actions.payload
        });
      }

    case 'GOOGLE_MAPS:CHANGE_LOCATION_TYPE':
      {
        if (state.selectLocations.length !== 0) {
          const indexLocation = state.selectLocations.findIndex(item => item.isType === actions.payload.isType);

          if (indexLocation !== -1) {
            state.selectLocations.splice(indexLocation, 1);
            return _objectSpread({}, state);
          }
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          selectLocations: [actions.payload],
          locations: []
        });
      }

    case 'GOOGLE_MAPS:ADDED_LOCATION_TYPE':
      {
        if (state.selectLocations.length !== 0) {
          const indexLocation = state.selectLocations.findIndex(item => item.isType === actions.payload.isType);

          if (indexLocation !== -1) {
            const transformSelect = state.selectLocations[indexLocation];
            transformSelect.select = actions.payload.select;
            return _objectSpread({}, state);
          }
        }

        const selectTru = state.selectLocations.filter(item => item.select);

        if (selectTru.length === 0) {
          if (actions.payload.select) {
            return _objectSpread(_objectSpread({}, state), {}, {
              locations: [],
              selectLocations: state.selectLocations.concat(actions.payload)
            });
          }
        }

        if (!actions.payload.select) {
          const locations = state.locations.filter(item => {
            return item.isType !== actions.payload.isType;
          });
          return _objectSpread(_objectSpread({}, state), {}, {
            locations,
            selectLocations: state.selectLocations.concat(actions.payload)
          });
        }

        return _objectSpread(_objectSpread({}, state), {}, {
          selectLocations: state.selectLocations.concat(actions.payload)
        });
      }

    case 'GOOGLE_MAPS:SORT_LOCATIONS':
      {
        if (state.selectLocations.length !== 0) {
          const selectSort = state.selectLocations.filter(item => item.select && item).map(item => item.isType);
          const sortLocations = state.locations.filter(item => {
            return selectSort.includes(item.isType);
          });
          return _objectSpread(_objectSpread({}, state), {}, {
            locations: sortLocations
          });
        }

        return _objectSpread({}, state);
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (googleMaps);

/***/ }),

/***/ "./redux/reducers/index.ts":
/*!*********************************!*\
  !*** ./redux/reducers/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);

const reducers = ['googleMaps', 'modal', 'sidebar', 'user'];
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(reducers.reduce((initial, name) => {
  initial[name] = __webpack_require__("./redux/reducers sync recursive ^\\.\\/.*$")(`./${name}`).default;
  return initial;
}, {})));

/***/ }),

/***/ "./redux/reducers/modal.ts":
/*!*********************************!*\
  !*** ./redux/reducers/modal.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  text: null,
  timeout: null
};

const modal = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SHOW_MODAL':
      return _objectSpread(_objectSpread({}, state), {}, {
        text: actions.payload
      });

    case 'HIDE_MODAL':
      return _objectSpread(_objectSpread({}, state), {}, {
        text: null
      });

    case 'HIDE_TIMEOUT':
      return _objectSpread(_objectSpread({}, state), {}, {
        timeout: actions.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./redux/reducers/sidebar.ts":
/*!***********************************!*\
  !*** ./redux/reducers/sidebar.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  showSidebar: null,
  isOpen: null
};

const sidebar = (state = initialState, actions) => {
  switch (actions.type) {
    case 'SHOW_SIDEBAR':
      return _objectSpread(_objectSpread({}, state), {}, {
        showSidebar: true
      });

    case 'HIDE_SIDEBAR':
      return _objectSpread(_objectSpread({}, state), {}, {
        showSidebar: null,
        isOpen: null
      });

    case 'CLOSE_SIDEBAR':
      return _objectSpread(_objectSpread({}, state), {}, {
        isOpen: true
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (sidebar);

/***/ }),

/***/ "./redux/reducers/user.ts":
/*!********************************!*\
  !*** ./redux/reducers/user.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const initialState = {
  data: null,
  registerData: null
};

const user = (state = initialState, actions) => {
  switch (actions.type) {
    case 'USER:SET_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        data: actions.payload
      });

    case 'USER:REGISTER_DATA':
      return _objectSpread(_objectSpread({}, state), {}, {
        registerData: actions.payload
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.ts");




const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "moment/locale/uk":
/*!***********************************!*\
  !*** external "moment/locale/uk" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment/locale/uk");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMgc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXJzL2dvb2dsZU1hcHMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvbW9kYWwudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcmVkdWNlcnMvc2lkZWJhci50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy91c2VyLnRzIiwid2VicGFjazovLy8uL3JlZHV4L3N0b3JlLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudC9sb2NhbGUvdWtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiIl0sIm5hbWVzIjpbIm1vbWVudCIsImxvY2FsZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic3RvcmUiLCJpbml0aWFsU3RhdGUiLCJtYXBDb250YWluZXJTdHlsZSIsImNlbnRlciIsInpvb20iLCJsb2NhdGlvbnMiLCJjb250cm9sIiwiaXNUeXBlIiwic2VsZWN0TG9jYXRpb25zIiwiZ29vZ2xlTWFwcyIsInN0YXRlIiwiYWN0aW9ucyIsInR5cGUiLCJwYXlsb2FkIiwiaGVpZ2h0Iiwid2lkdGgiLCJsYXQiLCJsbmciLCJjb25jYXQiLCJsZW5ndGgiLCJpbmRleExvY2F0aW9uIiwiZmluZEluZGV4IiwiaXRlbSIsInNwbGljZSIsInRyYW5zZm9ybVNlbGVjdCIsInNlbGVjdCIsInNlbGVjdFRydSIsImZpbHRlciIsInNlbGVjdFNvcnQiLCJtYXAiLCJzb3J0TG9jYXRpb25zIiwiaW5jbHVkZXMiLCJyZWR1Y2VycyIsImNvbWJpbmVSZWR1Y2VycyIsInJlZHVjZSIsImluaXRpYWwiLCJuYW1lIiwicmVxdWlyZSIsImRlZmF1bHQiLCJ0ZXh0IiwidGltZW91dCIsIm1vZGFsIiwic2hvd1NpZGViYXIiLCJpc09wZW4iLCJzaWRlYmFyIiwiZGF0YSIsInJlZ2lzdGVyRGF0YSIsInVzZXIiLCJjcmVhdGVTdG9yZSIsInJvb3RSZWR1Y2VyIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7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dkIsS0FBK0M7QUFDMUQsVUFBUUEsT0FBTyxDQUFDQyxJQUFoQjtBQUNFLFNBQUssZUFBTDtBQUNFLDZDQUNLRixLQURMO0FBRUVtQyxZQUFJLEVBQUVsQyxPQUFPLENBQUNFO0FBRmhCOztBQUlGLFNBQUssb0JBQUw7QUFDRSw2Q0FDS0gsS0FETDtBQUVFb0Msb0JBQVksRUFBRW5DLE9BQU8sQ0FBQ0U7QUFGeEI7O0FBSUY7QUFDRSxhQUFPSCxLQUFQO0FBWko7QUFjRCxDQWZEOztBQWlCZXFDLG1FQUFmLEU7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNL0MsS0FBSyxHQUFHZ0QseURBQVcsQ0FDdkJDLGlEQUR1QixFQUV2QkMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUNDLGtEQUFELENBQWhCLENBRkksQ0FBekI7QUFLZXBELG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgJ3JlYWN0LXF1aWxsL2Rpc3QvcXVpbGwuc25vdy5jc3MnXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvdWsnXG5pbXBvcnQgc3RvcmUgZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCJcbmltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuXG5tb21lbnQubG9jYWxlKCd1aycpXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gPFByb3ZpZGVyIHN0b3JlPXsgc3RvcmUgfSA+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8L1Byb3ZpZGVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwidmFyIG1hcCA9IHtcblx0XCIuL1wiOiBcIi4vcmVkdXgvcmVkdWNlcnMvaW5kZXgudHNcIixcblx0XCIuL2dvb2dsZU1hcHNcIjogXCIuL3JlZHV4L3JlZHVjZXJzL2dvb2dsZU1hcHMudHNcIixcblx0XCIuL2dvb2dsZU1hcHMudHNcIjogXCIuL3JlZHV4L3JlZHVjZXJzL2dvb2dsZU1hcHMudHNcIixcblx0XCIuL2luZGV4XCI6IFwiLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC50c1wiLFxuXHRcIi4vaW5kZXgudHNcIjogXCIuL3JlZHV4L3JlZHVjZXJzL2luZGV4LnRzXCIsXG5cdFwiLi9tb2RhbFwiOiBcIi4vcmVkdXgvcmVkdWNlcnMvbW9kYWwudHNcIixcblx0XCIuL21vZGFsLnRzXCI6IFwiLi9yZWR1eC9yZWR1Y2Vycy9tb2RhbC50c1wiLFxuXHRcIi4vc2lkZWJhclwiOiBcIi4vcmVkdXgvcmVkdWNlcnMvc2lkZWJhci50c1wiLFxuXHRcIi4vc2lkZWJhci50c1wiOiBcIi4vcmVkdXgvcmVkdWNlcnMvc2lkZWJhci50c1wiLFxuXHRcIi4vdXNlclwiOiBcIi4vcmVkdXgvcmVkdWNlcnMvdXNlci50c1wiLFxuXHRcIi4vdXNlci50c1wiOiBcIi4vcmVkdXgvcmVkdWNlcnMvdXNlci50c1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3JlZHV4L3JlZHVjZXJzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1hcENvbnRhaW5lclN0eWxlOiB7IH0sXHJcbiAgY2VudGVyOiB7IH0sXHJcbiAgem9vbTogMSxcclxuICBsb2NhdGlvbnM6IG51bGwsXHJcbiAgY29udHJvbDogbnVsbCxcclxuICBpc1R5cGU6IG51bGwsXHJcbiAgc2VsZWN0TG9jYXRpb25zOiBbXVxyXG59XHJcblxyXG50eXBlIEFjdGlvblR5cGUgPSB7XHJcbiAgcGF5bG9hZDogYW55XHJcbiAgdHlwZTogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IGdvb2dsZU1hcHMgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbnM6IEFjdGlvblR5cGUpID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbnMudHlwZSkge1xyXG4gICAgY2FzZSAnR09PR0xFX01BUFM6TE9DQVRJT05TJzpcclxuICAgICAgY29uc3QgbG9jYXRpb25zID0gc3RhdGUubG9jYXRpb25zID8gc3RhdGUubG9jYXRpb25zIDogYWN0aW9ucy5wYXlsb2FkXHJcbiAgICAgIGNvbnN0IGNvbnRyb2wgPSBzdGF0ZS5jb250cm9sIHx8ICdNYXJrZXJzTWFwJ1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIG1hcENvbnRhaW5lclN0eWxlOiB7IGhlaWdodDogXCJjYWxjKDEwMHZoIC0gMjAwcHgpXCIsIHdpZHRoOiBcIjEwMCVcIiB9LFxyXG4gICAgICAgIGNlbnRlcjogeyBsYXQ6IDQ5LjAyNjE1MSwgbG5nOiAzMS40ODMwNzAgfSxcclxuICAgICAgICB6b29tOiA2LFxyXG4gICAgICAgIGxvY2F0aW9uczogbG9jYXRpb25zLFxyXG4gICAgICAgIGNvbnRyb2w6IGNvbnRyb2xcclxuICAgICAgfVxyXG4gICAgY2FzZSAnR09PR0xFX01BUFM6U0VUX0xPQ0FUSU9OU19TT1JUJzoge1xyXG4gICAgICBpZiAoYWN0aW9ucy5wYXlsb2FkKSB7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gc3RhdGUubG9jYXRpb25zLmNvbmNhdChhY3Rpb25zLnBheWxvYWQpXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbG9jYXRpb25zOiBsb2NhdGlvbnNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlICdHT09HTEVfTUFQUzpDSEFOR0VfTE9DQVRJT05TJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtYXBDb250YWluZXJTdHlsZTogYWN0aW9ucy5wYXlsb2FkLm1hcENvbnRhaW5lclN0eWxlLFxyXG4gICAgICAgIGNlbnRlcjogYWN0aW9ucy5wYXlsb2FkLmNlbnRlcixcclxuICAgICAgICB6b29tOiAxMSxcclxuICAgICAgICBsb2NhdGlvbnM6IGFjdGlvbnMucGF5bG9hZC5sb2NhdGlvbnMsXHJcbiAgICAgICAgY29udHJvbDogJ01hcmtlclF1ZXJ5JyxcclxuICAgICAgICBpc1R5cGU6IGFjdGlvbnMucGF5bG9hZC5pc1R5cGVcclxuICAgICAgfVxyXG4gICAgY2FzZSAnR09PR0xFX01BUFM6Q1JFQVRFX0xPQ0FUSU9OUyc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWFwQ29udGFpbmVyU3R5bGU6IHsgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSAyMDBweClcIiwgd2lkdGg6ICcxMDAlJyB9LFxyXG4gICAgICAgIGNlbnRlcjogYWN0aW9ucy5wYXlsb2FkLmNlbnRlcixcclxuICAgICAgICB6b29tOiA2LFxyXG4gICAgICAgIGxvY2F0aW9uczogYWN0aW9ucy5wYXlsb2FkLmxvY2F0aW9ucyxcclxuICAgICAgICBjb250cm9sOiBhY3Rpb25zLnBheWxvYWQuY29udHJvbFxyXG4gICAgICB9XHJcbiAgICBjYXNlICdHT09HTEVfTUFQUzpDSEFOR0VfSVNfVFlQRSc6IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc1R5cGU6IGFjdGlvbnMucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlICdHT09HTEVfTUFQUzpDSEFOR0VfTE9DQVRJT05fVFlQRSc6IHtcclxuICAgICAgaWYgKHN0YXRlLnNlbGVjdExvY2F0aW9ucy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBjb25zdCBpbmRleExvY2F0aW9uID0gc3RhdGUuc2VsZWN0TG9jYXRpb25zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaXNUeXBlID09PSBhY3Rpb25zLnBheWxvYWQuaXNUeXBlKVxyXG4gICAgICAgIGlmIChpbmRleExvY2F0aW9uICE9PSAtMSkge1xyXG4gICAgICAgICAgc3RhdGUuc2VsZWN0TG9jYXRpb25zLnNwbGljZShpbmRleExvY2F0aW9uLCAxKVxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZWxlY3RMb2NhdGlvbnM6IFthY3Rpb25zLnBheWxvYWRdLFxyXG4gICAgICAgIGxvY2F0aW9uczogW11cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2FzZSAnR09PR0xFX01BUFM6QURERURfTE9DQVRJT05fVFlQRSc6IHtcclxuICAgICAgaWYgKHN0YXRlLnNlbGVjdExvY2F0aW9ucy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBjb25zdCBpbmRleExvY2F0aW9uID0gc3RhdGUuc2VsZWN0TG9jYXRpb25zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaXNUeXBlID09PSBhY3Rpb25zLnBheWxvYWQuaXNUeXBlKVxyXG4gICAgICAgIGlmIChpbmRleExvY2F0aW9uICE9PSAtMSkge1xyXG4gICAgICAgICAgY29uc3QgdHJhbnNmb3JtU2VsZWN0ID0gc3RhdGUuc2VsZWN0TG9jYXRpb25zW2luZGV4TG9jYXRpb25dXHJcbiAgICAgICAgICB0cmFuc2Zvcm1TZWxlY3Quc2VsZWN0ID0gYWN0aW9ucy5wYXlsb2FkLnNlbGVjdFxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc2VsZWN0VHJ1ID0gc3RhdGUuc2VsZWN0TG9jYXRpb25zLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0KVxyXG4gICAgICBpZiAoc2VsZWN0VHJ1Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlmIChhY3Rpb25zLnBheWxvYWQuc2VsZWN0KSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgbG9jYXRpb25zOiBbXSxcclxuICAgICAgICAgICAgc2VsZWN0TG9jYXRpb25zOiBzdGF0ZS5zZWxlY3RMb2NhdGlvbnMuY29uY2F0KGFjdGlvbnMucGF5bG9hZClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFhY3Rpb25zLnBheWxvYWQuc2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gc3RhdGUubG9jYXRpb25zLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgIHJldHVybiBpdGVtLmlzVHlwZSAhPT0gYWN0aW9ucy5wYXlsb2FkLmlzVHlwZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgbG9jYXRpb25zLFxyXG4gICAgICAgICAgc2VsZWN0TG9jYXRpb25zOiBzdGF0ZS5zZWxlY3RMb2NhdGlvbnMuY29uY2F0KGFjdGlvbnMucGF5bG9hZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBzZWxlY3RMb2NhdGlvbnM6IHN0YXRlLnNlbGVjdExvY2F0aW9ucy5jb25jYXQoYWN0aW9ucy5wYXlsb2FkKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYXNlICdHT09HTEVfTUFQUzpTT1JUX0xPQ0FUSU9OUyc6IHtcclxuICAgICAgaWYgKHN0YXRlLnNlbGVjdExvY2F0aW9ucy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RTb3J0ID0gc3RhdGUuc2VsZWN0TG9jYXRpb25zLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ICYmIGl0ZW0pLm1hcChpdGVtID0+IGl0ZW0uaXNUeXBlKVxyXG4gICAgICAgIGNvbnN0IHNvcnRMb2NhdGlvbnMgPSBzdGF0ZS5sb2NhdGlvbnMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHNlbGVjdFNvcnQuaW5jbHVkZXMoaXRlbS5pc1R5cGUpXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICBsb2NhdGlvbnM6IHNvcnRMb2NhdGlvbnNcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdvb2dsZU1hcHMiLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcclxuY29uc3QgcmVkdWNlcnMgPSBbICdnb29nbGVNYXBzJywgJ21vZGFsJywgJ3NpZGViYXInLCAndXNlcicgXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKFxyXG4gIHJlZHVjZXJzLnJlZHVjZSgoaW5pdGlhbDogYW55LCBuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgIGluaXRpYWxbbmFtZV0gPSByZXF1aXJlKGAuLyR7IG5hbWUgfWApLmRlZmF1bHRcclxuICAgIHJldHVybiBpbml0aWFsXHJcbiAgfSwge30pXHJcbikiLCJpbXBvcnQgeyBNb2RhbCB9IGZyb20gXCIuLi8uLi90eXBlcy9tb2RhbFwiXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB0ZXh0OiBudWxsLFxyXG4gIHRpbWVvdXQ6IG51bGwsXHJcbn1cclxuXHJcbnR5cGUgQWN0aW9uVHlwZSA9IHtcclxuICBwYXlsb2FkOiBNb2RhbFxyXG4gIHR5cGU6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBtb2RhbCA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uczogQWN0aW9uVHlwZSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9ucy50eXBlKSB7XHJcbiAgICBjYXNlICdTSE9XX01PREFMJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICB0ZXh0OiBhY3Rpb25zLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgY2FzZSAnSElERV9NT0RBTCc6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgdGV4dDogbnVsbFxyXG4gICAgICB9XHJcbiAgICBjYXNlICdISURFX1RJTUVPVVQnOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHRpbWVvdXQ6IGFjdGlvbnMucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vZGFsIiwiY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHNob3dTaWRlYmFyOiBudWxsLFxyXG4gIGlzT3BlbjogbnVsbFxyXG59O1xyXG5cclxudHlwZSBBY3Rpb25UeXBlID0ge1xyXG4gIHR5cGU6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBzaWRlYmFyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb25zOiBBY3Rpb25UeXBlKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb25zLnR5cGUpIHtcclxuICAgIGNhc2UgJ1NIT1dfU0lERUJBUic6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2hvd1NpZGViYXI6IHRydWVcclxuICAgICAgfTtcclxuICAgIGNhc2UgJ0hJREVfU0lERUJBUic6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc2hvd1NpZGViYXI6IG51bGwsXHJcbiAgICAgICAgaXNPcGVuOiBudWxsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlICdDTE9TRV9TSURFQkFSJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBpc09wZW46IHRydWVcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZGViYXIiLCJpbXBvcnQgeyBDcmVhdGVVc2VyRGF0YSwgVXNlckRhdGEgfSBmcm9tIFwiLi4vLi4vdHlwZXMvdXNlclwiXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgZGF0YTogbnVsbCxcclxuICByZWdpc3RlckRhdGE6IG51bGxcclxufVxyXG5cclxudHlwZSBBY3Rpb25UeXBlID0ge1xyXG4gIHBheWxvYWQ6IFVzZXJEYXRhIHwgQ3JlYXRlVXNlckRhdGFcclxuICB0eXBlOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgdXNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uczogQWN0aW9uVHlwZSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9ucy50eXBlKSB7XHJcbiAgICBjYXNlICdVU0VSOlNFVF9EQVRBJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBkYXRhOiBhY3Rpb25zLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgY2FzZSAnVVNFUjpSRUdJU1RFUl9EQVRBJzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICByZWdpc3RlckRhdGE6IGFjdGlvbnMucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXIiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCJcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbidcclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiXHJcbmltcG9ydCByb290UmVkdWNlciBmcm9tICcuL3JlZHVjZXJzJ1xyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICByb290UmVkdWNlcixcclxuICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudC9sb2NhbGUvdWtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9